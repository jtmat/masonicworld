export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContactForm(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleContactForm(request, env) {
  try {
    const formData = await request.formData();

    const name = clean(formData.get("name"));
    const email = clean(formData.get("email"));
    const subject = clean(formData.get("subject"));
    const message = clean(formData.get("message"));
    const turnstileToken = formData.get("cf-turnstile-response");

    if (!name || !email || !subject || !message) {
      return htmlResponse("Missing Information", "Please complete all required fields.", 400);
    }

    if (!turnstileToken) {
      return htmlResponse("Verification Missing", "Please complete the verification check and try again.", 400);
    }

    const verified = await verifyTurnstile(turnstileToken, request, env);

    if (!verified) {
      return htmlResponse("Verification Failed", "The verification check failed. Please go back and try again.", 400);
    }

    const emailText =
`New message from MasonicWorld.com contact form

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`;

    await env.EMAIL.send({
      to: "jtmat@outlook.com",
      from: "spamcontrol@barcis.net",
      replyTo: email,
      subject: `MasonicWorld Contact: ${subject}`,
      text: emailText,
    });

    return htmlResponse(
      "Message Sent",
      "Thank you. Your message has been sent successfully."
    );

  } catch (error) {
    console.error(error);
    return htmlResponse(
      "Message Not Sent",
      "Something went wrong while sending your message. Please try again later.",
      500
    );
  }
}

async function verifyTurnstile(token, request, env) {
  const ip = request.headers.get("CF-Connecting-IP");

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  });

  const result = await response.json();
  return result.success === true;
}

function clean(value) {
  if (!value) return "";
  return String(value).trim().slice(0, 5000);
}

function htmlResponse(title, message, status = 200) {
  return new Response(
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)} | MasonicWorld.com</title>
  <link rel="stylesheet" href="/css/style.css" />
</head>
<body>
  <main class="page-main">
    <div class="container page-content">
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(message)}</p>
      <p><a class="button button-gold" href="/contact/">Back to Contact</a></p>
    </div>
  </main>
</body>
</html>`,
    {
      status,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
    }
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}