(()=>{"use strict";var e={206:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),c=n.n(o),r=n(645),a=n.n(r)()(c());a.push([e.id,"body {\n  margin: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  /* Header, Main Content, Footer */\n  min-height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #333;\n  color: white;\n  padding: 10px;\n  gap: 10px;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n}\n\n#header-title {\n  font-size: 40px;\n}\n\n#app-logo {\n  height: 30px;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 200px minmax(500px, 1fr);\n\n  /* min-height: 100%; */\n  background-color: #ccc;\n  /* overflow-y: auto; Enable vertical scrollbar if needed */\n}\n\n#sidebar {\n  display: grid;\n  grid-template-rows: repeat(auto-fill, 6%);\n  grid-auto-rows: 6%;\n  gap: 10px;\n\n  background-color: red;\n  padding: 10px;\n\n  overflow-y: auto;\n}\n\n.sidebar-button {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  background-color: transparent;\n  border: none;\n}\n\n.sidebar-button:hover {\n  cursor: pointer;\n\n  background-color: #ccc;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.sidebar-button.active{\n  background-color: #ccc;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.sidebar-icon {\n  height: 30px;\n}\n\n#notes-view {\n  background-color: blue;\n  padding: 10px;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n\n  bottom: 0;\n  left: 0;\n\n  width: 100%;\n}\n\n#creator {\n  display: flex;\n  align-items: center;\n  margin: 0;\n\n  font-size: 15px;\n}\n\n#github-logo {\n  height: 30px;\n  transition: transform 0.3s ease;\n}\n\n#github-logo:hover {\n  transform: scale(1.2) rotate(360deg);\n}\n\n#popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  z-index: 1000; /* Set a high z-index value */\n}\n",""]);const d=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,c,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),c&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=c):l[4]="".concat(c)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],d=0;d<e.length;d++){var i=e[d],s=o.base?i[0]+o.base:i[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=c(m,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function c(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,c){var r=o(e=e||[],c=c||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var d=n(r[a]);t[d].references--}for(var i=o(e,c),s=0;s<r.length;s++){var l=n(r[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var c=void 0!==n.layer;c&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,c&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var c=o.length-1;c>-1&&!e;)e=o[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"97ed8e7eef60d61ca469.svg",t=function(e){document.querySelectorAll(".sidebar-button, .note").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")},o=function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("note");const t=document.createElement("h2");return t.classList.add("note-title"),t.textContent="Inbox",e.appendChild(t),e}())},c=function(){const e=document.getElementById("popup");e&&document.body.removeChild(e)},r=function(){const n=document.createElement("button");n.classList.add("sidebar-button");const o=new Image;o.classList.add("sidebar-icon"),o.src=e;const r=document.createElement("p");return r.textContent="Today",n.append(o),n.append(r),n.addEventListener("click",(e=>{console.log("Today button has been clicked"),t(n),c(),function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("note");const t=document.createElement("h2");return t.classList.add("note-title"),t.textContent="Today",e.appendChild(t),e}())}()})),n},a=function(){const n=document.createElement("button");n.classList.add("sidebar-button");const o=new Image;o.classList.add("sidebar-icon"),o.src=e;const r=document.createElement("p");return r.textContent="This Week",n.append(o),n.append(r),n.addEventListener("click",(e=>{console.log("This Week button has been clicked"),t(n),c(),function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("note");const t=document.createElement("h2");return t.classList.add("note-title"),t.textContent="This Week",e.appendChild(t),e}())}()})),n},d=function(e){const t=document.createElement("div");t.id="popup",t.appendChild(e),document.body.appendChild(t)};function i(){console.log("Update Project button clicked");const e=document.getElementById("project-name").value,t=document.querySelector(".sidebar-button.active p");e?(t.textContent=e,c()):alert("Please fill out all fields.")}const s=function(e){const t=document.getElementById("notes-view");t.textContent="",t.appendChild(function(e){const t=document.createElement("div");t.classList.add("note");const n=document.createElement("h2");n.classList.add("note-title"),n.textContent=e;const o=document.createElement("button");return o.id="settings-button",o.textContent="Settings",o.addEventListener("click",(e=>{console.log("Settings button has been clicked"),d(function(){const e=document.createElement("form");e.id="project-settings-form";const t=document.createElement("label");t.textContent="Project Name: ";const n=document.createElement("input");n.type="text",n.id="project-name",n.name="name";const o=document.createElement("button");o.type="button",o.textContent="Update",o.addEventListener("click",i);const r=document.createElement("button");r.type="button",r.textContent="Delete";const a=document.createElement("button");return a.textContent="Close",a.addEventListener("click",c),e.appendChild(t),e.appendChild(n),e.appendChild(document.createElement("br")),e.appendChild(o),e.appendChild(r),e.appendChild(a),e}())})),t.appendChild(n),t.appendChild(o),t}(e))};function l(){const n=document.getElementById("sidebar"),o=document.getElementById("project-name").value;o?(n.append(function(n){const o=document.createElement("button");o.classList.add("sidebar-button");const c=new Image;c.classList.add("sidebar-icon"),c.src=e;const r=document.createElement("p");return r.textContent=n,o.append(c),o.append(r),t(o),o.addEventListener("click",(e=>{console.log(`${n} has been clicked`),t(o),s(n)})),o}(o)),c(),s(o)):alert("Please fill out all fields.")}const u=function(){const t=document.createElement("button");t.classList.add("sidebar-button");const n=new Image;n.classList.add("sidebar-icon"),n.src=e;const o=document.createElement("p");return o.textContent="Add Project",t.append(n),t.append(o),t.addEventListener("click",(e=>{console.log("Add Project button has been clicked"),d(function(){const e=document.createElement("form");e.id="add-project-form";const t=document.createElement("label");t.textContent="Project Name: ",e.appendChild(t);const n=document.createElement("input");n.type="text",n.id="project-name",n.name="name",e.appendChild(n),e.appendChild(document.createElement("br"));const o=document.createElement("button");o.type="button",o.textContent="Add",o.addEventListener("click",l),e.appendChild(o);const r=document.createElement("button");return r.textContent="Close",r.addEventListener("click",c),e.appendChild(r),e}())})),t},p=function(){const n=document.createElement("div");return n.id="sidebar",n.append(function(){const n=document.createElement("button");n.id="default-button",n.classList.add("sidebar-button");const r=new Image;r.classList.add("sidebar-icon"),r.src=e;const a=document.createElement("p");return a.textContent="Inbox",n.append(r),n.append(a),n.addEventListener("click",(e=>{console.log("Inbox button has been clicked"),t(n),c(),o()})),n}()),n.append(r()),n.append(a()),n.append(u()),n},m=function(){const e=document.createElement("main");return e.append(p()),e.append(function(){const e=document.createElement("div");return e.id="notes-view",e}()),e};var f=n(379),b=n.n(f),h=n(795),g=n.n(h),v=n(569),x=n.n(v),E=n(565),y=n.n(E),C=n(216),w=n.n(C),L=n(589),k=n.n(L),I=n(206),j={};j.styleTagTransform=k(),j.setAttributes=y(),j.insert=x().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=w(),b()(I.Z,j),I.Z&&I.Z.locals&&I.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const t=document.createElement("header"),n=document.createElement("p");n.id="header-title",n.textContent="Todo List";const o=new Image;return o.id="app-logo",o.src=e,t.appendChild(n),t.appendChild(o),t}()),n.appendChild(m()),n.appendChild(function(){const t=document.createElement("footer");t.id="footer";const n=document.createElement("p");n.id="creator",n.textContent="Created by jooomin";const o=document.createElement("a");o.setAttribute("href","https://github.com/jooomin");const c=new Image;return c.id="github-logo",c.src=e,t.append(n),t.append(o),o.append(c),t}()),t(document.getElementById("default-button")),o()}()})()})();