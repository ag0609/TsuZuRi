//bookwalkerjp.inc.js
//Description: Just a templete, edit as you like

const $ver = "0.01a";
console.log("Bookwalker Japan Engine ver." + $ver);

//Init
//magic words, [root, core, utility, drawCanvas, downloadConfig, getCoord]
let magicWords = ['a6G', 'F5W', 'a61', 'a5x', 'U8j', 'n0v'];
let pace = 150, paceSeed = 100; //pace = job rest between pages, paceSeed = addition random time makes more like humans
//cP=currentPage, tp=totalPage, 
let cP=0, tP=0, rF=0, pF=0, dL=new Set(), zip=new JSZip(), coords={}, pages={};
const path_arr = ["a6G", "Initializer", "F5W", "menu", "a6l"];
if(!NFBR) NFBR = (unsafeWindow ? unsafeWindow.NFBR : window.NFBR) || null;
if(!NFBR) {console.error("NFBR not located");} else if(!chkpath(_NFBR, path_arr)) {console.error("control not found");} else {rF=1};
let menu = NFBR[magicWords[0]].Initializer[magicWords[1]].menu, control = menu[magicWords[2]];
_tzr_next = control.moveToNext;
_tzr_back = control.moveToPrevious;
_tzr_jump = control.moveToPage;
tP=menu.model.get('F8O');
let canvas=_NFBR[magicWords[0]].Initializer[magicWords[1]].renderer.currentScreen.canvas, context = canvas.getContext("2d");
let plan = 1; //0=unclassified, 1=purchased, 2=trial

try {
  if(window.location.hostname.match(/viewer-trial/i)) {
    plan = 2;
  }
} catch(e) {
  plan = 0;
}
canvas.style.opacity = 0;

let _tzr_ui = document.createElement('div');

step1();
document.body.addEventListener("keydown", keyEvent);
//Operations

let _tzr = {
  start: ()=>{
    if(!sF) {

    }
  },
  stop: ()=>{

  }
};

//Extended Core
let keyEvent = function() {
  
}
let chkpath = function(root, path) {
  if(root && Array.isArray(path)) {
    let cur = root, cpath = [''];
    for(let i=0; i<path.length; i++) {
      if(typeof cur[path[i]] != "undefined") {
        cur = cur[path[i]];
        cpath.push(path[i]);
        continue;
      } else {
        console.warn("Undefined when checking", cpath.join('/'));
        return false;
      }
    }
    return true;
  } else {
    console.warn("Invalid Parameters!");
    return false;
  }
}
//hook
let step1 = function() {
  const Bp = NFBR[magicWords[0]][magicWords[3]].prototype[magicWords[4]];
  NFBR[magicWords[0]][magicWords[3]].prototype[magicWords[4]] = function() {
    const [tC, p, i, dR, f] = arguments;
    cP = 0;
    if(p) {
      let name = p.url.match(/(?<=\/)[^/]+(?=\.xhtml)/)[0];
      let c = Object.keys(coords).length + 1;
      if(!coords[name]) {
        pages[name] = p;
        coords[name] = NFBR[magicWords[0]].Initializer[magicWords[1]].renderer[magicWords[5]](p, i.width, i.height);
      }
      let nextPace = pace + Math.random()*paceSeed;
      setTimeout(_tzr_next, nextPace);
      if(cP >= tP) {
        sF=0;
        step2();
      }
    }
    return Bp.apply(this, arguments);
  }
  
}
//afterMath
let step2 = function() {
  
}
//
