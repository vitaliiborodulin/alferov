$((function(){!function(){const t={},e=[];window.history.length;let o={started:{__proto__:null,init:function(){var t;for(t in o.started)"init"!==t&&o.started[t]()},mediaInit:function(){o.methods.isTouchDevice()&&document.body.classList.add("media--touch")},parallaxInit:function(){o.methods.parallax(),document.addEventListener("scroll",o.methods.parallax)},load:function(){new WOW({offset:102}).init(),window.addEventListener("load",(function(){o.methods.parallax()})),navigator.userAgent.match(/iPhone|iPad|iPod/i)&&document.body.classList.add("media--ios")},maskInit:function(){$('input[type="tel"]').mask("+7 (999) 999 99 99")},yaMapInit:function(){return!1},slidersInit:function(){console.log("slidersInit"),document.querySelector(".blog-slider")&&(t.blogSlider=new Swiper(".blog-slider",{slidesPerGroup:1,speed:800,autoplayDisableOnInteraction:!1,slidesPerView:1,spaceBetween:20,touchRatio:1,watchSlidesVisibility:!0,watchSlidesProgress:!0,navigation:{nextEl:".blog-nav-next",prevEl:".blog-nav-prev"},breakpoints:{646:{spaceBetween:10,slidesPerView:2},992:{spaceBetween:30,slidesPerView:3}}}))},modalInit:function(){document.querySelector("[data-modal-cover].active")&&o.methods.openModal(document.querySelector("[data-modal-cover].active").id)},tabInit:function(){const t=document.querySelectorAll("[data-tab-cover]");for(let e in t){if(!t.hasOwnProperty(e))continue;const o=t[e],n=(o.querySelector("[data-tab-link].active")||o.querySelectorAll("[data-tab-link]")[0]).getAttribute("data-tab-link"),a=o.querySelector('[data-tab-content="'+n+'"]')||document.getElementById(n);o.querySelectorAll("[data-tab-link]").forEach((function(t){t.getAttribute("data-tab-link")!=n?t.classList.remove("active"):t.classList.add("active")})),o.querySelectorAll("[data-tab-content]").forEach((function(t){t!=a?t.classList.remove("active"):t.classList.add("active")}));const i=o.querySelector("[data-tab-plate]");if(!i)continue;const s=o.querySelector('[data-tab-link="'+n+'"]');i.style.left=s.offsetLeft+"px",i.style.width=s.offsetWidth+"px"}},wowInit:function(){},wavesInit:function(){Waves.init(),Waves.attach(".btn"),Waves.attach(".header-burger"),Waves.attach(".header-nav__item"),Waves.attach(".footer-nav__item"),Waves.attach(".slider-arrow"),Waves.attach(".blog-qwiz-item")},swipeInit:function(){o.methods.isTouchDevice()&&function(t,e){(e=Object.assign({},{minDist:60,maxDist:120,maxTime:700,minTime:50},e)).maxTime<e.minTime&&(e.maxTime=e.minTime+500),(e.maxTime<100||e.minTime<50)&&(e.maxTime=700,e.minTime=50);var o,n,a,i,s,c=!1,l=!1,r=0,d=0,u=0,m=0,h=0,g=!(!("PointerEvent"in window)&&!("msPointerEnabled"in window.navigator)),f=!!(void 0!==window.orientation||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.msMaxTouchPoints||"maxTouchPoints"in window.navigator>1||"msMaxTouchPoints"in window.navigator>1),v=function(t){return t.changedTouches?t.changedTouches[0]:t},p=function(){switch(!0){case f:p={type:"touch",start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"};break;default:p={type:"mouse",start:"mousedown",move:"mousemove",end:"mouseup",leave:"mouseleave"}}return p}();(g&&!f||"mouse"===p.type)&&(c=!0),t.addEventListener(p.start,(function(t){var e=v(t);f&&void 0!==t.touches&&1!==t.touches.length||(o="none",n="none",a=0,r=e.pageX,u=e.pageY,i=t.target,h=(new Date).getTime(),c&&(l=!0))})),t.addEventListener(p.move,(function(t){if(!c||l){var e=v(t);d=e.pageX-r,m=e.pageY-u,o=Math.abs(d)>Math.abs(m)?d<0?"left":"right":m<0?"up":"down"}})),t.addEventListener(p.end,(function(g){if(!c||l){var f=(new Date).getTime();s=g.target;var v=f-h;if(v>=e.minTime&&v<=e.maxTime&&(Math.abs(d)>=e.minDist&&Math.abs(m)<=e.maxDist||Math.abs(m)>=e.minDist&&Math.abs(d)<=e.maxDist)&&(n=o),a="left"===o||"right"===o?Math.abs(d):Math.abs(m),"none"!==n&&a>=e.minDist){var p=new CustomEvent("swipe",{bubbles:!0,cancelable:!0,detail:{full:g,dir:n,dist:a,time:v,startX:r,startY:u,startTarget:i,endTarget:s}});t.dispatchEvent(p)}}else mouseDown=!1}))}(document,{maxTime:500,minTime:10,maxDist:screen.width,minDist:40})}},support:{__proto__:null,init:function(){var t;for(t in o.support)"init"!==t&&o.support[t]()},matches:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector)},closest:function(){Element.prototype.closest||(Element.prototype.closest=function(t){return this?this.matches(t)?this:this.parentElement?this.parentElement.closest(t):null:null})},includes:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),n=o.length>>>0;if(0===n)return!1;var a,i,s=0|e,c=Math.max(s>=0?s:n-Math.abs(s),0);for(;c<n;){if((a=o[c])===(i=t)||"number"==typeof a&&"number"==typeof i&&isNaN(a)&&isNaN(i))return!0;c++}return!1}})},foreach:function(){"NodeList"in window&&!NodeList.prototype.forEach&&(console.info("polyfill forEach for IE11"),NodeList.prototype.forEach=function(t,e){e=e||window;for(var o=0;o<this.length;o++)t.call(e,this[o],o,this)})}},methods:{isTouchDevice:function(){return!!("ontouchstart"in window)},parallax:function(){const t=document.querySelectorAll("[data-parallax]");for(const e in t){if(!t.hasOwnProperty(e))return;const o=t[e],n=-(o.closest("[data-parallax-parent]")||o.parentElement).getBoundingClientRect().top/10,a=o.getAttribute("data-speed");o.style.transform="translateY("+n*a+"%)"}},isMobile:function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/iPhone|iPad|iPod/i)||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/IEMobile/i)},isVisible:function(t){let e=window.pageYOffset+t.getBoundingClientRect().top,o=window.pageYOffset+t.getBoundingClientRect().bottom,n=window.pageYOffset,a=window.pageYOffset+document.documentElement.clientHeight;return o>n&&e<a},getScrollBarWidth:function(){let t=document.createElement("div");t.style.overflowY="scroll",t.style.width="50px",t.style.height="50px",document.body.append(t);let e=t.offsetWidth-t.clientWidth;return t.remove(),e},setBodyOverflow:{hidden:function(){document.body.style.paddingRight=o.methods.getScrollBarWidth()+"px",document.body.classList.add("body--noscroll")},visible:function(){document.body.style.paddingRight="",document.body.classList.remove("body--noscroll")},toggle:function(){document.body.classList.contains("body--noscroll")?this.visible():this.hidden()}},openModal:function(t){console.log("openModal");const n=document.getElementById(t);n?(window.location.hash="#"+n.id,e.push(n.id),o.methods.setBodyOverflow.hidden()):console.error('modal cover with id = "'+t+'" not found!!!')},closeModal:function(t){console.log("closeModal");const n=document.getElementById(t);n&&n.classList.remove("active"),window.location.hash.includes(t)&&(sy=document.body.scrollTop,sx=document.body.scrollLeft,e.pop()?o.methods.openModal(e.pop()):window.location.hash="",document.body.scrollTop=sy,document.body.scrollLeft=sx),setTimeout((function(){document.querySelector("[data-modal-cover].active")||document.querySelector("[data-modal-cover]:target")||o.methods.setBodyOverflow.visible()}),250)},toggle:function(t,e){const n=[...document.querySelectorAll("[data-toggle-link]")],a=t?t.getAttribute("data-toggle-link"):e,i=document.getElementById(a)||t.closest("[data-toggle-cover]");if(!i)return void console.error("toggleCover not found!");const s=()=>i.classList.contains("active");if(s()?i.classList.remove("active"):i.classList.add("active"),s()?document.addEventListener("click",l):document.removeEventListener("click",l),t&&(s()?t.classList.add("active"):n.map(t=>t.classList.remove("active"))),i.dataset.toggleHeight){const t=isNaN(parseInt(i.dataset.toggleHeight))?0:parseInt(i.dataset.toggleHeight);i.style.transition=i.scrollHeight/100*.1+"s ease",s()?i.style.maxHeight=i.scrollHeight+"px":i.style.maxHeight=t+"px"}if(null!=i.getAttribute("data-toggle-callback")){const t=i.getAttribute("data-toggle-callback");o.methods[t]&&o.methods[t](i)}if(t&&null!=t.getAttribute("data-toggle-callback")){const e=t.getAttribute("data-toggle-callback");o.methods[e]&&o.methods[e](i)}const c=(t,e)=>{const o=t===e,n=e.contains(t);return o||n};function l(n){const a=c(n.target,i),r=!!t&&c(n.target,t);a||(r||s()&&o.methods.toggle(t,e),document.removeEventListener("click",l))}},tabsNav:function(t){const e=t,n=e.getAttribute("data-tab-link"),a=e.closest("[data-tab-cover]"),i=a.querySelector('[data-tab-content="'+n+'"]')||document.getElementById(n),s=a.querySelector("[data-tab-link].active"),c=a.querySelector("[data-tab-content].active");if(!i)return void console.error("Tab content not found!");if(s.classList.remove("active"),c.classList.remove("active"),e.classList.add("active"),i.classList.add("active"),null!=a.getAttribute("data-tab-callback")){const t=a.getAttribute("data-tab-callback");o.methods[t]&&o.methods[t]()}const l=a.querySelector("[data-tab-plate]");l&&(l.style.left=e.offsetLeft+"px",l.style.width=e.offsetWidth+"px")},getHeaderFixedOnScrollHandler:function(){let t=0,e=document.querySelector(".header");const o=function(){let o=window.pageYOffset;window.pageYOffset>10?e.classList.add("header--fixed"):e.classList.remove("header--fixed"),t=o};return o(),o}},event:{init:function(){var t;for(t in o.event)"init"!==t&&document.addEventListener(t,o.event[t])},click:function(t){let e=t,n=t.target,a={showModal:"[data-modal-link]",closeModal:"[data-modal-cover]",scrollTo:"a[href]",toogleLink:"[data-toggle-link]",tabsNav:"[data-tab-link]",test:".test-item"},i={test:function(){const e=t.target.closest(".test-item");e.querySelector(".test-item")||e.classList.add("hidden")},showModal:function(){o.methods.openModal(n.closest("[data-modal-link]").getAttribute("data-modal-link"))},closeModal:function(){if(null==n.getAttribute("data-modal-cover")&&!n.closest("[data-modal-close]"))return;const t=n.closest("[data-modal-cover]").id;o.methods.closeModal(t)},scrollTo:function(){const o=e.target.closest("a[href]").getAttribute("href");o&&"#"!=o&&"#"==o[0]&&(t.preventDefault(),document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"}))},toogleLink:function(){const t=n.closest("[data-toggle-link]");o.methods.toggle(t)},tabsNav:function(){const e=t.target.closest("[data-tab-link]");o.methods.tabsNav(e)}};for(const t in a)a.hasOwnProperty(t)&&n.closest(a[t])&&i[t]()},keyup:function(t){console.log("Escape"==t.key),"Escape"==t.key&&(console.log(document.querySelector("[data-modal-cover].active")),console.log(document.querySelector("[data-modal-cover]:target")),document.querySelector("[data-modal-cover].active")&&o.methods.closeModal(document.querySelector("[data-modal-cover].active").id),document.querySelector("[data-modal-cover]:target")&&o.methods.closeModal(document.querySelector("[data-modal-cover]:target").id))},swipe:function(t){if(!o.methods.isTouchDevice())return;const e=screen.width<580?35:72,n=document.getElementById("header-nav");t.detail.startX<e&&"right"==t.detail.dir&&!n.classList.contains("active")&&o.methods.toggle(null,"header-nav"),"left"==t.detail.dir&&n.classList.contains("active")&&o.methods.toggle(null,"header-nav")}}};(function(){o.support.init(),o.event.init(),o.started.init(),window.tm=o})()}()}));