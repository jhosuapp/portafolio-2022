!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function s(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],l=n[i]||0,d="".concat(i," ").concat(l);n[i]=l+1;var u=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(c[u].references++,c[u].updater(f)):c.push({identifier:d,updater:h(f,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,b=0;function h(e,t){var n,r,o;if(t.singleton){var a=b++;n=v||(v=l(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=l(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);c[o].references--}for(var a=i(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=a}}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r=function(){function e(){let e=document.querySelector(".header__left img");scrollY>50?e.classList.add("active"):e.classList.remove("active")}return window.addEventListener("scroll",e,!1),{setHandleEvent:function(){var t;e(),function(){let e=document.querySelector(".hamburguesa"),t=document.querySelector(".header__middle"),n=document.querySelector(".header__close");e.addEventListener("click",()=>{e.classList.add("active"),setTimeout(()=>{t.classList.add("active"),n.classList.add("active"),n.classList.remove("close")},500)}),n.addEventListener("click",()=>{n.classList.add("close"),setTimeout(()=>{t.classList.remove("active"),e.classList.remove("active")},1e3)})}(),document.querySelectorAll(".header__item").forEach(e=>{let t=e.getAttribute("href");window.location.href==t&&e.classList.add("active")}),t=document.querySelector(".loader-general"),setTimeout(()=>{t.classList.add("hidden")},200)}}}();var o={setHandleEvent:function(){!function(){for(var e=function(e){e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)},t=document.getElementsByClassName("bubbly-button"),n=0;n<t.length;n++)t[n].addEventListener("click",e,!1)}()}};var a=function(){const e=document.querySelectorAll(".form .form__input"),t=document.querySelectorAll(".form label"),n=document.querySelector(".form"),r=/^[a-zA-ZÀ-ÿ\s]{3,40}$/,o=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,a=/^[a-zA-Z0-9\s_.+-,]{3,100}$/,c={nombre:!1,email:!1,mensaje:!1};return{setHandleEvent:function(){e.forEach(e=>{e.addEventListener("focus",(function(){let n=e.nextElementSibling;t.forEach(e=>{e.classList.remove("active")}),e.addEventListener("keyup",()=>{e.value.length>0?n.classList.add("active-keyup"):n.classList.remove("active-keyup")}),n.classList.add("active")})),e.addEventListener("blur",(function(){t.forEach(e=>{e.classList.remove("active")})}))}),function(){function t(e,t,n){e.test(t.value)?(document.querySelector(".form__bloque--"+n).classList.add("form__bloque--bien"),document.querySelector(".form__bloque--"+n).classList.remove("form__bloque--mal"),c[n]=!0):(document.querySelector(".form__bloque--"+n).classList.remove("form__bloque--bien"),document.querySelector(".form__bloque--"+n).classList.add("form__bloque--mal"),c[n]=!1)}function s(e){switch(e.target.name){case"nombre":t(r,e.target,"nombre");break;case"email":t(o,e.target,"email");break;case"mensaje":t(a,e.target,"mensaje")}}e.forEach(e=>{e.addEventListener("blur",s),e.addEventListener("keyup",s)}),n.addEventListener("submit",e=>{if(e.preventDefault(),c.email&&c.nombre&&c.mensaje)fetch("../jhosuaTheme/conexiones/form.php").then(e=>e.json()).then(e=>{console.log(e),window.location.href="../jhosuaTheme/templates/gracias.php"});else{let e=document.querySelector(".form__error");e.classList.add("active"),setTimeout(()=>{e.classList.remove("active")},3e3)}})}()}}}();var c=function(){const e=document.querySelectorAll(".card"),t=document.querySelector(".card__show-more");return{setHandleEvent:function(){!function(){function t(t){e.forEach((e,n)=>{n>t&&e.classList.add("hidden-card")})}t(5),screen.width<1100&&screen.width>768&&t(3),screen.width<768&&t(1)}(),function(){function e(e,n){t.addEventListener("click",()=>{document.querySelector(".proyectos__grid").style.height="auto";var r=document.querySelector(".loader__contenedor");r.classList.add("active"),window.setTimeout(()=>{document.querySelectorAll(".hidden-card").forEach((e,t)=>{t<0&&e.classList.remove("hidden-card")});var o=document.querySelectorAll(".hidden-card");o.forEach((t,n)=>{n<e&&t.classList.remove("hidden-card")}),o.length<n&&t.classList.add("hidden-button"),r.classList.remove("active")},1500)})}screen.width<1100?e(2,2):e(3,3)}()}}}();var s=function(){const e=document.querySelector("#bot-form"),t=document.querySelector("#respuesta"),n=(document.querySelector("#bot-form__send"),document.querySelector("#bot-form__bloque-respuesta")),r=document.querySelector(".bot__bloque--firts"),o=document.querySelector(".bot__bloque--second");function a(){r.addEventListener("click",()=>{var e,t;o.classList.add("active"),e=document.querySelectorAll(".bot-form__relative--primero .bot-form__mensaje--animation"),t=document.querySelector(".bot-form__mensaje--typing"),e.forEach((e,n)=>{e.classList.add("active"),e.style.animation="2s mensaje forwards 1 "+2.5*n+"s",t.style.animation="2s typingHidden forwards 1 "+2.5*n+"s"})})}return{setHandleEvent:function(){var c,s,i,l,d,u,f;c=document.querySelector(".bot__bloque--firts__left"),s=document.querySelector(".bot__bloque--firts__right"),setTimeout(()=>{r.classList.add("active")},2e3),setTimeout(()=>{c.classList.add("hidden"),s.classList.add("active")},5e3),a(),document.querySelector(".bot-form__close").addEventListener("click",()=>{o.classList.remove("active")}),i=document.querySelectorAll(".bot-form__radio__label"),l=document.querySelector(".bot-form__mensaje--radio"),d=document.querySelector(".bot-form__respuesta--radio"),u=document.querySelector(".bot-form__respuesta--radio p"),i.forEach(e=>{e.addEventListener("click",()=>{i.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"),l.classList.add("hidden"),d.classList.add("active"),u.textContent=e.textContent,n.classList.remove("disable")})}),f=[],e.addEventListener("submit",e=>{var n=t.value;f.push(n),console.log(f),e.preventDefault()})}}}();window.addEventListener("DOMContentLoaded",(function(){r.setHandleEvent(),o.setHandleEvent(),a.setHandleEvent(),c.setHandleEvent(),s.setHandleEvent()}))}]);
//# sourceMappingURL=mainscript.js.map