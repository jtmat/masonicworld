(() => {
"use strict";

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const uid = prefix => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`;
const clamp = (v,min,max) => Math.max(min,Math.min(max,v));

const els = {
  roomCanvas: $("#roomCanvas"),
  eventName: $("#eventName"),
  eventDate: $("#eventDate"),
  sessionsList: $("#sessionsList"),
  peopleList: $("#peopleList"),
  statusText: $("#statusText"),
  saveStatus: $("#saveStatus"),
  openFileInput: $("#openFileInput"),
  personDialog: $("#personDialog"),
  sessionDialog: $("#sessionDialog"),
};

let state = freshState();
let selected = null;          // {kind:'table'|'object'|'person', id}
let selectedPersonId = null;  // click-person-then-seat helper
let dirty = false;

function freshState(){
  const sid = uid("session");
  return {
    version: 1,
    event: { name:"", date:"" },
    activeSessionId: sid,
    people: [],
    sessions: [
      { id:sid, name:"Main Plan", items:[] }
    ]
  };
}

function activeSession(){
  return state.sessions.find(s=>s.id===state.activeSessionId) || state.sessions[0];
}

function markDirty(message="Changes not saved"){
  dirty = true;
  els.saveStatus.textContent = message;
}

function markSaved(message="Saved"){
  dirty = false;
  els.saveStatus.textContent = message;
}

function setStatus(text){
  els.statusText.textContent = text;
}

function persistFormToState(){
  state.event.name = els.eventName.value.trim();
  state.event.date = els.eventDate.value;
}

function renderAll(){
  els.eventName.value = state.event?.name || "";
  els.eventDate.value = state.event?.date || "";
  if (!state.sessions?.length){
    const sid = uid("session");
    state.sessions = [{id:sid,name:"Main Plan",items:[]}];
    state.activeSessionId = sid;
  }
  if (!state.sessions.some(s=>s.id===state.activeSessionId)){
    state.activeSessionId = state.sessions[0].id;
  }
  renderSessions();
  renderPeople();
  renderCanvas();
  renderInspector();
}

function renderSessions(){
  els.sessionsList.innerHTML = "";
  state.sessions.forEach(session=>{
    const row = document.createElement("div");
    row.className = "session-row" + (session.id===state.activeSessionId ? " active":"");
    const name = document.createElement("button");
    name.textContent = session.name;
    name.style.flex = "1";
    name.style.textAlign = "left";
    name.onclick = () => {
      state.activeSessionId = session.id;
      selected = null;
      renderAll();
    };
    const rename = document.createElement("button");
    rename.className="icon-btn";
    rename.textContent="Rename";
    rename.onclick=()=>{
      const v = prompt("Session name:",session.name);
      if(v && v.trim()){
        session.name=v.trim(); markDirty(); renderSessions(); renderCanvas();
      }
    };
    const del = document.createElement("button");
    del.className="icon-btn";
    del.textContent="×";
    del.title="Delete session";
    del.onclick=()=>{
      if(state.sessions.length===1){ alert("At least one session is required."); return; }
      if(confirm(`Delete "${session.name}"?`)){
        state.sessions=state.sessions.filter(s=>s.id!==session.id);
        if(state.activeSessionId===session.id) state.activeSessionId=state.sessions[0].id;
        selected=null; markDirty(); renderAll();
      }
    };
    row.append(name,rename,del);
    els.sessionsList.append(row);
  });
}

function personAssignment(personId){
  for(const session of state.sessions){
    for(const item of session.items){
      if(item.kind==="table" && item.seats){
        const idx = item.seats.findIndex(s=>s.personId===personId);
        if(idx>=0) return {session,item,idx};
      }
    }
  }
  return null;
}

function renderPeople(){
  els.peopleList.innerHTML = "";
  const assignedHere = new Set();
  for(const item of activeSession().items){
    if(item.kind==="table"){
      (item.seats||[]).forEach(s=>{if(s.personId)assignedHere.add(s.personId)});
    }
  }
  [...state.people].sort((a,b)=>a.name.localeCompare(b.name)).forEach(person=>{
    const row=document.createElement("div");
    row.className="person-row"+(selectedPersonId===person.id?" selected":"");
    row.draggable=true;
    row.dataset.personId=person.id;
    row.addEventListener("dragstart",e=>{
      e.dataTransfer.setData("text/person-id",person.id);
      e.dataTransfer.effectAllowed="move";
    });
    row.onclick=()=>{
      selectedPersonId = selectedPersonId===person.id ? null : person.id;
      selected={kind:"person",id:person.id};
      renderPeople(); renderInspector();
      setStatus(selectedPersonId ? `Selected ${person.name}. Click an empty seat to assign.` : "Person selection cleared.");
    };
    const main=document.createElement("div");
    main.className="person-main";
    const nm=document.createElement("div");
    nm.className="person-name";
    nm.textContent=person.name || "(Unnamed)";
    const meta=document.createElement("div");
    meta.className="person-meta";
    const bits=[];
    if(person.meal) bits.push(person.meal);
    if(assignedHere.has(person.id)) bits.push("seated");
    meta.textContent=bits.join(" • ") || "Unassigned";
    main.append(nm,meta);
    row.append(main);
    els.peopleList.append(row);
  });
}

function newTable(type){
  const count = activeSession().items.filter(i=>i.kind==="table").length+1;
  let w=180,h=180,seats=8;
  if(type==="square"){w=h=180;seats=8}
  if(type==="rectangle"){w=300;h=140;seats=10}
  const item={
    id:uid("table"), kind:"table", type,
    name:`Table ${count}`,
    x:120+count*18, y:100+count*18,
    width:w,height:h,rotation:0,
    seats:Array.from({length:seats},()=>({personId:null}))
  };
  activeSession().items.push(item);
  selected={kind:"table",id:item.id};
  markDirty();
  renderCanvas(); renderInspector();
}

function newRoomObject(label){
  const item={
    id:uid("obj"),kind:"object",label,
    x:180,y:140,width:260,height:90,rotation:0
  };
  if(label==="Dance Floor"){item.width=360;item.height=240}
  if(label==="Entrance"){item.width=160;item.height=70}
  if(label==="Podium / Lectern"){item.width=120;item.height=80}
  activeSession().items.push(item);
  selected={kind:"object",id:item.id};
  markDirty();
  renderCanvas(); renderInspector();
}

function getSelectedItem(){
  if(!selected || selected.kind==="person") return null;
  return activeSession().items.find(i=>i.id===selected.id) || null;
}

function seatPosition(item,index,total){
  const cx=item.width/2, cy=item.height/2;
  const margin=42;
  if(item.type==="round" || item.type==="square"){
    const rx=item.width/2+margin, ry=item.height/2+margin;
    const a=(Math.PI*2*index/total)-Math.PI/2;
    return {left:cx+Math.cos(a)*rx,top:cy+Math.sin(a)*ry};
  }

  // Rectangle: distribute seats around perimeter, favoring long sides naturally.
  const topCount=Math.ceil(total*item.width/(2*(item.width+item.height)));
  const bottomCount=topCount;
  let remaining=total-topCount-bottomCount;
  if(remaining<0) remaining=0;
  const leftCount=Math.ceil(remaining/2);
  const rightCount=remaining-leftCount;

  let n=index;
  if(n<topCount){
    const t=(n+1)/(topCount+1);
    return {left:item.width*t,top:-margin};
  }
  n-=topCount;
  if(n<rightCount){
    const t=(n+1)/(rightCount+1);
    return {left:item.width+margin,top:item.height*t};
  }
  n-=rightCount;
  if(n<bottomCount){
    const t=(n+1)/(bottomCount+1);
    return {left:item.width*(1-t),top:item.height+margin};
  }
  n-=bottomCount;
  const lc=Math.max(1,leftCount);
  const t=(n+1)/(lc+1);
  return {left:-margin,top:item.height*(1-t)};
}

function ensureSeatCount(table, count){
  count=clamp(parseInt(count||0,10)||1,1,24);
  table.seats ||= [];
  if(table.seats.length<count){
    while(table.seats.length<count) table.seats.push({personId:null});
  } else if(table.seats.length>count){
    const removed=table.seats.slice(count).filter(s=>s.personId);
    if(removed.length && !confirm(`${removed.length} occupied seat(s) will be removed. Continue?`)) return false;
    table.seats=table.seats.slice(0,count);
  }
  return true;
}

function renderCanvas(){
  els.roomCanvas.innerHTML="";
  const session=activeSession();
  session.items.forEach(item=>{
    const wrap=document.createElement("div");
    wrap.className=`layout-item ${item.kind==="table"?item.type:""}`+(selected && selected.id===item.id?" selected":"");
    wrap.dataset.itemId=item.id;
    wrap.style.left=item.x+"px";
    wrap.style.top=item.y+"px";
    wrap.style.width=item.width+"px";
    wrap.style.height=item.height+"px";
    wrap.style.transform=`rotate(${item.rotation||0}deg)`;

    if(item.kind==="table"){
      const body=document.createElement("div");
      body.className="table-body";
      const label=document.createElement("div");
      label.className="table-label";
      label.textContent=item.name;
      body.append(label);
      wrap.append(body);

      const total=item.seats?.length || 0;
      (item.seats||[]).forEach((seat,idx)=>{
        const seatEl=document.createElement("div");
        seatEl.className="seat"+(seat.personId?" occupied":"");
        const p=seatPosition(item,idx,total);
        seatEl.style.left=p.left+"px";
        seatEl.style.top=p.top+"px";
        seatEl.dataset.seatIndex=idx;
        seatEl.dataset.tableId=item.id;
        const person=state.people.find(p=>p.id===seat.personId);
        seatEl.textContent=person ? person.name : String(idx+1);
        seatEl.title=person ? [person.name,person.meal,person.note].filter(Boolean).join(" — ") : `Seat ${idx+1}`;
        seatEl.addEventListener("dragover",e=>{
          e.preventDefault(); seatEl.classList.add("target");
        });
        seatEl.addEventListener("dragleave",()=>seatEl.classList.remove("target"));
        seatEl.addEventListener("drop",e=>{
          e.preventDefault(); seatEl.classList.remove("target");
          const pid=e.dataTransfer.getData("text/person-id");
          if(pid) assignPersonToSeat(pid,item.id,idx);
        });
        seatEl.onclick=e=>{
          e.stopPropagation();
          if(selectedPersonId){
            assignPersonToSeat(selectedPersonId,item.id,idx);
            return;
          }
          if(seat.personId){
            selected={kind:"person",id:seat.personId};
            selectedPersonId=seat.personId;
            renderPeople();renderInspector();
          }
        };
        wrap.append(seatEl);
      });
    } else {
      const body=document.createElement("div");
      body.className="room-object";
      body.textContent=item.label;
      wrap.append(body);
    }

    const resize=document.createElement("div");
    resize.className="resize-handle";
    resize.title="Resize";
    const rotate=document.createElement("div");
    rotate.className="rotate-handle";
    rotate.title="Rotate";
    wrap.append(resize,rotate);

    wrap.addEventListener("pointerdown",e=>{
      if(e.target.closest(".seat,.resize-handle,.rotate-handle")) return;
      selectItem(item);
      startMove(e,item);
    });
    resize.addEventListener("pointerdown",e=>startResize(e,item));
    rotate.addEventListener("pointerdown",e=>startRotate(e,item));

    els.roomCanvas.append(wrap);
  });
}

function selectItem(item){
  selected={kind:item.kind==="table"?"table":"object",id:item.id};
  selectedPersonId=null;
  renderInspector();
  $$(".layout-item").forEach(el=>el.classList.toggle("selected",el.dataset.itemId===item.id));
  renderPeople();
}

function canvasCoords(e){
  const rect=els.roomCanvas.getBoundingClientRect();
  return {x:e.clientX-rect.left+els.roomCanvas.scrollLeft,y:e.clientY-rect.top+els.roomCanvas.scrollTop};
}

function startMove(e,item){
  e.preventDefault();
  const start={x:e.clientX,y:e.clientY,ix:item.x,iy:item.y};
  const onMove=ev=>{
    item.x=clamp(start.ix+ev.clientX-start.x,-100,els.roomCanvas.clientWidth-40);
    item.y=clamp(start.iy+ev.clientY-start.y,-100,els.roomCanvas.clientHeight-40);
    const el=els.roomCanvas.querySelector(`[data-item-id="${item.id}"]`);
    if(el){el.style.left=item.x+"px";el.style.top=item.y+"px";}
    markDirty();
  };
  const done=()=>{window.removeEventListener("pointermove",onMove);window.removeEventListener("pointerup",done);};
  window.addEventListener("pointermove",onMove);
  window.addEventListener("pointerup",done);
}

function startResize(e,item){
  e.preventDefault(); e.stopPropagation(); selectItem(item);
  const start={x:e.clientX,y:e.clientY,w:item.width,h:item.height};
  const onMove=ev=>{
    item.width=clamp(start.w+ev.clientX-start.x,80,800);
    item.height=clamp(start.h+ev.clientY-start.y,60,800);
    if(item.type==="square"){
      const s=Math.max(item.width,item.height);
      item.width=item.height=s;
    }
    renderCanvas(); renderInspector(); markDirty();
  };
  const done=()=>{window.removeEventListener("pointermove",onMove);window.removeEventListener("pointerup",done);};
  window.addEventListener("pointermove",onMove);
  window.addEventListener("pointerup",done);
}

function startRotate(e,item){
  e.preventDefault(); e.stopPropagation(); selectItem(item);
  const rect=els.roomCanvas.querySelector(`[data-item-id="${item.id}"]`).getBoundingClientRect();
  const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
  const onMove=ev=>{
    const angle=Math.atan2(ev.clientY-cy,ev.clientX-cx)*180/Math.PI+90;
    item.rotation=Math.round(angle/5)*5;
    renderCanvas(); renderInspector(); markDirty();
  };
  const done=()=>{window.removeEventListener("pointermove",onMove);window.removeEventListener("pointerup",done);};
  window.addEventListener("pointermove",onMove);
  window.addEventListener("pointerup",done);
}

function assignPersonToSeat(personId,tableId,seatIndex){
  const table=activeSession().items.find(i=>i.id===tableId && i.kind==="table");
  if(!table) return;
  // Remove this person from any seat in the ACTIVE session only.
  activeSession().items.forEach(i=>{
    if(i.kind==="table") (i.seats||[]).forEach(s=>{if(s.personId===personId)s.personId=null});
  });
  const target=table.seats[seatIndex];
  if(target.personId && target.personId!==personId){
    const old=state.people.find(p=>p.id===target.personId);
    if(!confirm(`Replace ${old?.name || "the current person"} in this seat?`)) return;
  }
  target.personId=personId;
  selectedPersonId=null;
  selected={kind:"person",id:personId};
  markDirty();
  renderCanvas();renderPeople();renderInspector();
}

function renderInspector(){
  $("#emptyInspector").hidden=!!selected;
  $("#tableInspector").hidden=true;
  $("#objectInspector").hidden=true;
  $("#personInspector").hidden=true;

  if(!selected) return;

  if(selected.kind==="person"){
    const p=state.people.find(p=>p.id===selected.id);
    if(!p){selected=null;renderInspector();return;}
    $("#personInspector").hidden=false;
    $("#personName").value=p.name||"";
    $("#personMeal").value=p.meal||"";
    $("#personNote").value=p.note||"";
    return;
  }

  const item=getSelectedItem();
  if(!item){selected=null;renderInspector();return;}
  if(item.kind==="table"){
    $("#tableInspector").hidden=false;
    $("#tableName").value=item.name;
    $("#tableSeats").value=item.seats.length;
    $("#tableWidth").value=Math.round(item.width);
    $("#tableHeight").value=Math.round(item.height);
    $("#tableRotation").value=Math.round(item.rotation||0);
  } else {
    $("#objectInspector").hidden=false;
    $("#objectLabel").value=item.label;
    $("#objectWidth").value=Math.round(item.width);
    $("#objectHeight").value=Math.round(item.height);
    $("#objectRotation").value=Math.round(item.rotation||0);
  }
}

function updateSelectedItem(field,value){
  const item=getSelectedItem(); if(!item) return;
  item[field]=value;
  markDirty(); renderCanvas();
}

function addPerson(name,meal="",note=""){
  const p={id:uid("person"),name:name.trim(),meal:meal.trim(),note:note.trim()};
  state.people.push(p);
  selected={kind:"person",id:p.id};
  markDirty(); renderPeople(); renderInspector();
}

function safeFilename(name){
  return (name||"MasonicWorld-Event").replace(/[<>:"/\\|?*\x00-\x1F]/g,"-").replace(/\s+/g," ").trim();
}


function activeSessionSeatMap(){
  const result = new Map();
  const session = activeSession();
  for(const item of session.items){
    if(item.kind!=="table") continue;
    (item.seats||[]).forEach((seat,idx)=>{
      if(seat.personId){
        result.set(seat.personId,{
          table:item.name || "",
          seat:idx+1
        });
      }
    });
  }
  return result;
}

function sortedPeople(){
  return [...state.people].sort((a,b)=>(a.name||"").localeCompare(b.name||""));
}

function printMealSheet(){
  persistFormToState();
  const people = sortedPeople();
  const eventName = state.event.name || "Lodge Event";
  const dateText = state.event.date || "";
  const sessionName = activeSession()?.name || "";
  const esc = s => String(s ?? "").replace(/[&<>"']/g,ch=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));

  const rows = people.map(p=>`
    <tr>
      <td>${esc(p.name)}</td>
      <td>${esc(p.meal || "")}</td>
    </tr>`).join("");

  const win = window.open("", "_blank");
  if(!win){
    alert("The browser blocked the meal sheet window. Please allow pop-ups for this page and try again.");
    return;
  }

  win.document.open();
  win.document.write(`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>${esc(eventName)} - Meal Sheet</title>
<style>
  body{font-family:Arial,Helvetica,sans-serif;color:#111;margin:28px}
  h1{font-size:22px;margin:0 0 4px}
  .meta{margin:0 0 18px;color:#555}
  table{width:100%;border-collapse:collapse;font-size:14px}
  th,td{border:1px solid #bbb;padding:8px;text-align:left}
  th{background:#f1f1f1}
  td:first-child{width:65%}
  @media print{
    body{margin:0.45in}
    button{display:none}
  }
</style>
</head>
<body>
  <h1>${esc(eventName)} — Meal Sheet</h1>
  <p class="meta">${[dateText,sessionName].filter(Boolean).map(esc).join(" • ")}</p>
  <table>
    <thead><tr><th>Name</th><th>Meal</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="2">No people have been added.</td></tr>'}</tbody>
  </table>
  <script>
    window.addEventListener('load',()=>setTimeout(()=>window.print(),150));
  <\/script>
</body>
</html>`);
  win.document.close();
  setStatus("Meal sheet opened for printing.");
}

function csvEscape(value){
  const s = String(value ?? "");
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g,'""') + '"' : s;
}

function exportMealCsv(){
  persistFormToState();
  const seatMap = activeSessionSeatMap();
  const rows = [
    ["Name","Meal","Note","Table","Seat"]
  ];
  for(const p of sortedPeople()){
    const pos = seatMap.get(p.id) || {};
    rows.push([
      p.name || "",
      p.meal || "",
      p.note || "",
      pos.table || "",
      pos.seat || ""
    ]);
  }

  const csv = rows.map(row=>row.map(csvEscape).join(",")).join("\r\n");
  const blob = new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  const baseName = safeFilename(state.event.name || "MasonicWorld-Seating-Event");
  const sessionName = safeFilename(activeSession()?.name || "Meal-Sheet");
  a.download=`${baseName}-${sessionName}-Meals.csv`;
  document.body.append(a);
  a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);
  setStatus("Meal CSV downloaded.");
}

function saveEvent(){
  persistFormToState();
  const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=safeFilename(state.event.name||"MasonicWorld-Seating-Event")+".mwseat";
  document.body.append(a);
  a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);
  markSaved("Event file downloaded");
  setStatus("Saved event file. Keep it somewhere safe, such as OneDrive or Google Drive.");
}

function openEventFile(file){
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const data=JSON.parse(reader.result);
      if(!data.sessions || !Array.isArray(data.sessions)) throw new Error("Missing sessions");
      state=data;
      selected=null; selectedPersonId=null;
      renderAll(); markSaved(`Opened ${file.name}`);
      setStatus(`Opened ${file.name}`);
    }catch(err){
      alert("This does not appear to be a valid seating planner event file.");
      console.error(err);
    }
  };
  reader.readAsText(file);
}

function newEvent(){
  if(dirty && !confirm("Start a new event? Unsaved changes will be lost.")) return;
  state=freshState();
  selected=null;selectedPersonId=null;
  renderAll();markSaved("New event");
  setStatus("New event ready.");
}

// Event info
els.eventName.addEventListener("input",()=>{state.event.name=els.eventName.value;markDirty()});
els.eventDate.addEventListener("change",()=>{state.event.date=els.eventDate.value;markDirty()});

// top buttons
$("#newEventBtn").onclick=newEvent;
$("#openEventBtn").onclick=()=>els.openFileInput.click();
els.openFileInput.onchange=e=>{const f=e.target.files?.[0];if(f)openEventFile(f);e.target.value=""};
$("#saveEventBtn").onclick=saveEvent;
$("#mealSheetBtn").onclick=printMealSheet;
$("#mealCsvBtn").onclick=exportMealCsv;
$("#printBtn").onclick=()=>window.print();

// session
$("#addSessionBtn").onclick=()=>{ $("#newSessionName").value=""; els.sessionDialog.showModal(); };
$("#confirmAddSession").onclick=e=>{
  e.preventDefault();
  const name=$("#newSessionName").value.trim();
  if(!name) return;
  const sid=uid("session");
  state.sessions.push({id:sid,name,items:[]});
  state.activeSessionId=sid; selected=null;
  els.sessionDialog.close(); markDirty(); renderAll();
};

// people
$("#addPersonBtn").onclick=()=>{ $("#newPersonName").value="";$("#newPersonMeal").value="";$("#newPersonNote").value="";els.personDialog.showModal(); };
$("#confirmAddPerson").onclick=e=>{
  e.preventDefault();
  const name=$("#newPersonName").value.trim();
  if(!name) return;
  addPerson(name,$("#newPersonMeal").value,$("#newPersonNote").value);
  els.personDialog.close();
};

// add tables
$$("[data-add-table]").forEach(btn=>btn.onclick=()=>newTable(btn.dataset.addTable));
$("#addRoomObjectBtn").onclick=()=>newRoomObject($("#roomObjectType").value);

// table inspector
$("#tableName").addEventListener("input",e=>updateSelectedItem("name",e.target.value));
$("#tableWidth").addEventListener("change",e=>updateSelectedItem("width",clamp(+e.target.value||80,80,800)));
$("#tableHeight").addEventListener("change",e=>updateSelectedItem("height",clamp(+e.target.value||80,60,800)));
$("#tableRotation").addEventListener("change",e=>updateSelectedItem("rotation",clamp(+e.target.value||0,-180,180)));
$("#tableSeats").addEventListener("change",e=>{
  const item=getSelectedItem();if(!item)return;
  if(ensureSeatCount(item,e.target.value)){markDirty();renderCanvas()}
  renderInspector();
});
$("#deleteTableBtn").onclick=()=>{
  const item=getSelectedItem();if(!item)return;
  if(confirm(`Delete ${item.name}?`)){
    activeSession().items=activeSession().items.filter(i=>i.id!==item.id);
    selected=null;markDirty();renderAll();
  }
};

// object inspector
$("#objectLabel").addEventListener("input",e=>updateSelectedItem("label",e.target.value));
$("#objectWidth").addEventListener("change",e=>updateSelectedItem("width",clamp(+e.target.value||60,60,800)));
$("#objectHeight").addEventListener("change",e=>updateSelectedItem("height",clamp(+e.target.value||40,40,800)));
$("#objectRotation").addEventListener("change",e=>updateSelectedItem("rotation",clamp(+e.target.value||0,-180,180)));
$("#deleteObjectBtn").onclick=()=>{
  const item=getSelectedItem();if(!item)return;
  if(confirm(`Delete ${item.label}?`)){
    activeSession().items=activeSession().items.filter(i=>i.id!==item.id);
    selected=null;markDirty();renderAll();
  }
};

// person inspector
function currentPerson(){ return selected?.kind==="person" ? state.people.find(p=>p.id===selected.id) : null; }
$("#personName").addEventListener("input",e=>{const p=currentPerson();if(p){p.name=e.target.value;markDirty();renderPeople();renderCanvas()}});
$("#personMeal").addEventListener("input",e=>{const p=currentPerson();if(p){p.meal=e.target.value;markDirty();renderPeople()}});
$("#personNote").addEventListener("input",e=>{const p=currentPerson();if(p){p.note=e.target.value;markDirty()}});
$("#removeSeatAssignmentBtn").onclick=()=>{
  const p=currentPerson();if(!p)return;
  activeSession().items.forEach(i=>{if(i.kind==="table")(i.seats||[]).forEach(s=>{if(s.personId===p.id)s.personId=null})});
  markDirty();renderCanvas();renderPeople();
};
$("#deletePersonBtn").onclick=()=>{
  const p=currentPerson();if(!p)return;
  if(confirm(`Delete ${p.name}?`)){
    state.sessions.forEach(s=>s.items.forEach(i=>{if(i.kind==="table")(i.seats||[]).forEach(seat=>{if(seat.personId===p.id)seat.personId=null})}));
    state.people=state.people.filter(x=>x.id!==p.id);
    selected=null;selectedPersonId=null;markDirty();renderAll();
  }
};

window.addEventListener("beforeunload",e=>{
  if(dirty){e.preventDefault();e.returnValue="";}
});

renderAll();
markSaved("New event");
setStatus("Ready. Start by naming the event, then add a table or person.");
})();