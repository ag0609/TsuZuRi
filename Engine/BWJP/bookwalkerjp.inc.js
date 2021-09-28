//bookwalkerjp.inc.js
//Description: Just a templete, edit as you like

const $ver = "0.01a";
console.log("Bookwalker Japan Engine ver." + $ver);

//Init
let cP=0, tP=0, rF=0, pF=0, dL=new Set(), zip=new JSZip(), coords={}, pages={};
const path_arr = ["a6G", "Initializer", "F5W", "menu", "a6l"];
if(!NFBR) NFBR = (unsafeWindow ? unsafeWindow.NFBR : window.NFBR) || null;
if(!NFBR) {console.error("NFBR not located");} else if(!chkpath(_NFBR, path_arr)) {console.error("control not found");} else {rF=1};
let menu = NFBR.a6G.Initializer.F5W.menu, control = menu.a6l;
_tzr_next = control.moveToNext;
_tzr_back = control.moveToPrevious;
_tzr_jump = control.moveToPage;
let tP=menu.model.get('F8O'),;
let canvas=_NFBR.a6G.Initializer.F5W.renderer.currentScreen.canvas, context = canvas.getContext("2d");
let plan = 1;

try {
  if(window.location.hostname.match(/viewer-trial/i)) {
    plan = 2;
  }
} catch(e) {
  plan = 0;
}
NFBR.a6G.Initializer.F5W.renderer.el.style.opacity = 0;

let _tzr_ui = document.createElement('div');

step1();
document.body.addEventListener("keyup", hideshow);
//Operations
_tzr_start = function() {
  
  if(!sF) {
    sF = 1;
    
  } else {
    
    return;
  }
};
_tzr_stop = function() {
  
};

//Extended Core
let hideshow = function() {
  
}
let chkpath = function(root, path) {
  if(root && Array.isArray(path)) {
    let cur = root;
    for(let i=0; i<path.length; i++) {
      if(typeof cur[path[i]] != "undefined") {
        cur = cur[path[i]];
        continue;
      } else {
        console.warn("Undefined when checking", path[i]);
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
  const backup = NFBR.a6G.a5x.prototype['U8j'];
  NFBR.a6G.a5x.prototype['U8j'] = function() {
    const [tC, p, i, dR, f] = arguments;
    cP = 
    if(p) {
      let name = p.url.match(/(?<=\/)[^/]+(?=\.xhtml)/)[0];
      let c = Object.keys(coords).length + 1;
      if(!coords[name]) {
        pages[name] = p;
        coords[name] = NFBR.a6G.Initializer.F5W.renderer['n0v'](p, i.width, i.height);
      }
      let nextPace = 150 + Math.random()*100;
      setTimeout(_tzr_next, nextPace);
      if(cP >= tP) {
        sF=0;
        step2();
      }
    }
    return backup.apply(this, arguments);
  }
  
}
let step2 = function() {
  
}
//
