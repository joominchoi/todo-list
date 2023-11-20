(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"body {\n  margin: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  /* Header, Main Content, Footer */\n  min-height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #333;\n  color: white;\n  padding: 10px;\n  gap: 10px;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n}\n\n#header-title {\n  font-size: 40px;\n}\n\n#app-logo {\n  height: 30px;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 200px minmax(500px, 1fr);\n\n  /* min-height: 100%; */\n  background-color: #ccc;\n  /* overflow-y: auto; Enable vertical scrollbar if needed */\n}\n\n#sidebar {\n  display: grid;\n  grid-template-rows: repeat(4, 6%) auto;\n  gap: 10px;\n\n  background-color: red;\n  padding: 10px;\n}\n\n.sidebar-button {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  background-color: transparent;\n  border: none;\n}\n\n.sidebar-button:hover {\n  cursor: pointer;\n\n  background-color: #ccc;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.sidebar-button.active{\n  background-color: #ccc;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.sidebar-icon {\n  height: 30px;\n}\n\n#notes-view {\n  background-color: blue;\n  padding: 10px;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n\n  bottom: 0;\n  left: 0;\n\n  width: 100%;\n}\n\n#creator {\n  display: flex;\n  align-items: center;\n  margin: 0;\n\n  font-size: 15px;\n}\n\n#github-logo {\n  height: 30px;\n  transition: transform 0.3s ease;\n}\n\n#github-logo:hover {\n  transform: scale(1.2) rotate(360deg);\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"97ed8e7eef60d61ca469.svg";function t(){const t=document.createElement("main");return t.append(function(){const t=document.createElement("div");return t.setAttribute("id","sidebar"),t.append(function(){const t=document.createElement("button");t.classList.add("sidebar-button");const n=new Image;n.classList.add("sidebar-icon"),n.src=e;const o=document.createElement("p");return o.textContent="Add Project",t.append(n),t.append(o),t.addEventListener("click",(e=>{console.log("Add Project button has been clicked")})),t}()),t.append(function(){const t=document.createElement("button");t.classList.add("sidebar-button");const n=new Image;n.classList.add("sidebar-icon"),n.src=e;const r=document.createElement("p");return r.textContent="Inbox",t.append(n),t.append(r),t.addEventListener("click",(e=>{console.log("Inbox button has been clicked"),o(t),function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","inbox");const t=document.createElement("h2");return t.setAttribute("id","inbox-title"),t.textContent="Inbox",e.appendChild(t),e}())}()})),t}()),t.append(function(){const t=document.createElement("button");t.classList.add("sidebar-button");const n=new Image;n.classList.add("sidebar-icon"),n.src=e;const r=document.createElement("p");return r.textContent="Today",t.append(n),t.append(r),t.addEventListener("click",(e=>{console.log("Today button has been clicked"),o(t),function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","today");const t=document.createElement("h2");return t.setAttribute("id","today-title"),t.textContent="Today",e.appendChild(t),e}())}()})),t}()),t.append(function(){const t=document.createElement("button");t.classList.add("sidebar-button");const n=new Image;n.classList.add("sidebar-icon"),n.src=e;const r=document.createElement("p");return r.textContent="This Week",t.append(n),t.append(r),t.addEventListener("click",(e=>{console.log("This Week button has been clicked"),o(t),function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","this-week");const t=document.createElement("h2");return t.setAttribute("id","this-week-title"),t.textContent="This Week",e.appendChild(t),e}())}()})),t}()),t}()),t.append(function(){const e=document.createElement("div");return e.setAttribute("id","notes-view"),e}()),t}function o(e){document.querySelectorAll(".sidebar-button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}var r=n(379),a=n.n(r),i=n(795),c=n.n(i),s=n(569),d=n.n(s),u=n(565),l=n.n(u),p=n(216),m=n.n(p),f=n(589),b=n.n(f),h=n(426),g={};g.styleTagTransform=b(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),a()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const t=document.createElement("header"),n=document.createElement("p");n.setAttribute("id","header-title"),n.textContent="Todo List";const o=new Image;return o.setAttribute("id","app-logo"),o.src=e,t.appendChild(n),t.appendChild(o),t}()),n.appendChild(t()),n.appendChild(function(){const t=document.createElement("footer");t.setAttribute("id","footer");const n=document.createElement("p");n.setAttribute("id","creator"),n.textContent="Created by jooomin";const o=document.createElement("a");o.setAttribute("href","https://github.com/jooomin");const r=new Image;return r.setAttribute("id","github-logo"),r.src=e,t.append(n),t.append(o),o.append(r),t}())}()})()})();