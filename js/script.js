$((function(){!function(){const t={},e=[];window.history.length;let a={started:{__proto__:null,init:function(){var t;for(t in a.started)"init"!==t&&a.started[t]()},mediaInit:function(){a.methods.isTouchDevice()&&document.body.classList.add("media--touch")},parallaxInit:function(){a.methods.parallax(),document.addEventListener("scroll",a.methods.parallax)},load:function(){new WOW({offset:102}).init(),window.addEventListener("load",(function(){a.methods.parallax()})),navigator.userAgent.match(/iPhone|iPad|iPod/i)&&document.body.classList.add("media--ios")},maskInit:function(){$('input[type="tel"]').mask("+7 (999) 999 99 99")},yaMapInit:function(){return!1},slidersInit:function(){console.log("slidersInit"),document.querySelector(".blog-slider")&&(t.blogSlider=new Swiper(".blog-slider",{slidesPerGroup:1,speed:800,autoplayDisableOnInteraction:!1,slidesPerView:1,spaceBetween:20,touchRatio:1,watchSlidesVisibility:!0,watchSlidesProgress:!0,navigation:{nextEl:".blog-nav-next",prevEl:".blog-nav-prev"},breakpoints:{646:{spaceBetween:10,slidesPerView:2},992:{spaceBetween:30,slidesPerView:3}}})),document.querySelector(".testimonials-slider")&&(t.blogSlider=new Swiper(".testimonials-slider",{slidesPerGroup:1,speed:800,autoplayDisableOnInteraction:!1,slidesPerView:1,spaceBetween:20,touchRatio:1,watchSlidesVisibility:!0,watchSlidesProgress:!0,navigation:{nextEl:".testimonials-nav-next",prevEl:".testimonials-nav-prev"},breakpoints:{646:{spaceBetween:10,slidesPerView:2},992:{spaceBetween:30,slidesPerView:3}}}))},modalInit:function(){document.querySelector("[data-modal-cover].active")&&a.methods.openModal(document.querySelector("[data-modal-cover].active").id)},tabInit:function(){const t=document.querySelectorAll("[data-tab-cover]");for(let e in t){if(!t.hasOwnProperty(e))continue;const a=t[e],o=(a.querySelector("[data-tab-link].active")||a.querySelectorAll("[data-tab-link]")[0]).getAttribute("data-tab-link"),n=a.querySelector('[data-tab-content="'+o+'"]')||document.getElementById(o);a.querySelectorAll("[data-tab-link]").forEach((function(t){t.getAttribute("data-tab-link")!=o?t.classList.remove("active"):t.classList.add("active")})),a.querySelectorAll("[data-tab-content]").forEach((function(t){t!=n?t.classList.remove("active"):t.classList.add("active")}));const i=a.querySelector("[data-tab-plate]");if(!i)continue;const l=a.querySelector('[data-tab-link="'+o+'"]');i.style.left=l.offsetLeft+"px",i.style.width=l.offsetWidth+"px"}},wowInit:function(){},wavesInit:function(){Waves.init(),Waves.attach(".btn"),Waves.attach(".header-burger"),Waves.attach(".header-nav__item"),Waves.attach(".footer-nav__item"),Waves.attach(".slider-arrow"),Waves.attach(".blog-qwiz-item")},swipeInit:function(){a.methods.isTouchDevice()&&function(t,e){(e=Object.assign({},{minDist:60,maxDist:120,maxTime:700,minTime:50},e)).maxTime<e.minTime&&(e.maxTime=e.minTime+500),(e.maxTime<100||e.minTime<50)&&(e.maxTime=700,e.minTime=50);var a,o,n,i,l,s=!1,c=!1,r=0,d=0,u=0,m=0,v=0,h=!(!("PointerEvent"in window)&&!("msPointerEnabled"in window.navigator)),g=!!(void 0!==window.orientation||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.msMaxTouchPoints||"maxTouchPoints"in window.navigator>1||"msMaxTouchPoints"in window.navigator>1),f=function(t){return t.changedTouches?t.changedTouches[0]:t},p=function(){switch(!0){case g:p={type:"touch",start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"};break;default:p={type:"mouse",start:"mousedown",move:"mousemove",end:"mouseup",leave:"mouseleave"}}return p}();(h&&!g||"mouse"===p.type)&&(s=!0),t.addEventListener(p.start,(function(t){var e=f(t);g&&void 0!==t.touches&&1!==t.touches.length||(a="none",o="none",n=0,r=e.pageX,u=e.pageY,i=t.target,v=(new Date).getTime(),s&&(c=!0))})),t.addEventListener(p.move,(function(t){if(!s||c){var e=f(t);d=e.pageX-r,m=e.pageY-u,a=Math.abs(d)>Math.abs(m)?d<0?"left":"right":m<0?"up":"down"}})),t.addEventListener(p.end,(function(h){if(!s||c){var g=(new Date).getTime();l=h.target;var f=g-v;if(f>=e.minTime&&f<=e.maxTime&&(Math.abs(d)>=e.minDist&&Math.abs(m)<=e.maxDist||Math.abs(m)>=e.minDist&&Math.abs(d)<=e.maxDist)&&(o=a),n="left"===a||"right"===a?Math.abs(d):Math.abs(m),"none"!==o&&n>=e.minDist){var p=new CustomEvent("swipe",{bubbles:!0,cancelable:!0,detail:{full:h,dir:o,dist:n,time:f,startX:r,startY:u,startTarget:i,endTarget:l}});t.dispatchEvent(p)}}else mouseDown=!1}))}(document,{maxTime:500,minTime:10,maxDist:screen.width,minDist:40})}},support:{__proto__:null,init:function(){var t;for(t in a.support)"init"!==t&&a.support[t]()},matches:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector)},closest:function(){Element.prototype.closest||(Element.prototype.closest=function(t){return this?this.matches(t)?this:this.parentElement?this.parentElement.closest(t):null:null})},includes:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),o=a.length>>>0;if(0===o)return!1;var n,i,l=0|e,s=Math.max(l>=0?l:o-Math.abs(l),0);for(;s<o;){if((n=a[s])===(i=t)||"number"==typeof n&&"number"==typeof i&&isNaN(n)&&isNaN(i))return!0;s++}return!1}})},foreach:function(){"NodeList"in window&&!NodeList.prototype.forEach&&(console.info("polyfill forEach for IE11"),NodeList.prototype.forEach=function(t,e){e=e||window;for(var a=0;a<this.length;a++)t.call(e,this[a],a,this)})}},methods:{isTouchDevice:function(){return!!("ontouchstart"in window)},parallax:function(){const t=document.querySelectorAll("[data-parallax]");for(const e in t){if(!t.hasOwnProperty(e))return;const a=t[e],o=-(a.closest("[data-parallax-parent]")||a.parentElement).getBoundingClientRect().top/10,n=a.getAttribute("data-speed");a.style.transform="translateY("+o*n+"%)"}},isMobile:function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/iPhone|iPad|iPod/i)||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/IEMobile/i)},isVisible:function(t){let e=window.pageYOffset+t.getBoundingClientRect().top,a=window.pageYOffset+t.getBoundingClientRect().bottom,o=window.pageYOffset,n=window.pageYOffset+document.documentElement.clientHeight;return a>o&&e<n},getScrollBarWidth:function(){let t=document.createElement("div");t.style.overflowY="scroll",t.style.width="50px",t.style.height="50px",document.body.append(t);let e=t.offsetWidth-t.clientWidth;return t.remove(),e},setBodyOverflow:{hidden:function(){document.body.style.paddingRight=a.methods.getScrollBarWidth()+"px",document.body.classList.add("body--noscroll")},visible:function(){document.body.style.paddingRight="",document.body.classList.remove("body--noscroll")},toggle:function(){document.body.classList.contains("body--noscroll")?this.visible():this.hidden()}},openModal:function(t){console.log("openModal");const o=document.getElementById(t);o?(window.location.hash="#"+o.id,e.push(o.id),a.methods.setBodyOverflow.hidden()):console.error('modal cover with id = "'+t+'" not found!!!')},closeModal:function(t){console.log("closeModal");const o=document.getElementById(t);o&&o.classList.remove("active"),window.location.hash.includes(t)&&(sy=document.body.scrollTop,sx=document.body.scrollLeft,e.pop()?a.methods.openModal(e.pop()):window.location.hash="",document.body.scrollTop=sy,document.body.scrollLeft=sx),setTimeout((function(){document.querySelector("[data-modal-cover].active")||document.querySelector("[data-modal-cover]:target")||a.methods.setBodyOverflow.visible()}),250)},toggle:function(t,e){const o=[...document.querySelectorAll("[data-toggle-link]")],n=t?t.getAttribute("data-toggle-link"):e,i=document.getElementById(n)||t.closest("[data-toggle-cover]");if(!i)return void console.error("toggleCover not found!");const l=()=>i.classList.contains("active");if(l()?i.classList.remove("active"):i.classList.add("active"),l()?document.addEventListener("click",c):document.removeEventListener("click",c),t&&(l()?t.classList.add("active"):o.map(t=>t.classList.remove("active"))),i.dataset.toggleHeight){const t=isNaN(parseInt(i.dataset.toggleHeight))?0:parseInt(i.dataset.toggleHeight);i.style.transition=i.scrollHeight/100*.1+"s ease",l()?i.style.maxHeight=i.scrollHeight+"px":i.style.maxHeight=t+"px"}if(null!=i.getAttribute("data-toggle-callback")){const t=i.getAttribute("data-toggle-callback");a.methods[t]&&a.methods[t](i)}if(t&&null!=t.getAttribute("data-toggle-callback")){const e=t.getAttribute("data-toggle-callback");a.methods[e]&&a.methods[e](i)}const s=(t,e)=>{const a=t===e,o=e.contains(t);return a||o};function c(o){const n=s(o.target,i),r=!!t&&s(o.target,t);n||(r||l()&&a.methods.toggle(t,e),document.removeEventListener("click",c))}},tabsNav:function(t){const e=t,o=e.getAttribute("data-tab-link"),n=e.closest("[data-tab-cover]"),i=n.querySelector('[data-tab-content="'+o+'"]')||document.getElementById(o),l=n.querySelector("[data-tab-link].active"),s=n.querySelector("[data-tab-content].active");if(!i)return void console.error("Tab content not found!");if(l.classList.remove("active"),s.classList.remove("active"),e.classList.add("active"),i.classList.add("active"),null!=n.getAttribute("data-tab-callback")){const t=n.getAttribute("data-tab-callback");a.methods[t]&&a.methods[t]()}const c=n.querySelector("[data-tab-plate]");c&&(c.style.left=e.offsetLeft+"px",c.style.width=e.offsetWidth+"px")},getHeaderFixedOnScrollHandler:function(){let t=0,e=document.querySelector(".header");const a=function(){let a=window.pageYOffset;window.pageYOffset>10?e.classList.add("header--fixed"):e.classList.remove("header--fixed"),t=a};return a(),a}},event:{init:function(){var t;for(t in a.event)"init"!==t&&document.addEventListener(t,a.event[t])},click:function(t){let e=t,o=t.target,n={showModal:"[data-modal-link]",closeModal:"[data-modal-cover]",scrollTo:"a[href]",toogleLink:"[data-toggle-link]",tabsNav:"[data-tab-link]",test:".test-item"},i={test:function(){const e=t.target.closest(".test-item");e.querySelector(".test-item")||e.classList.add("hidden")},showModal:function(){a.methods.openModal(o.closest("[data-modal-link]").getAttribute("data-modal-link"))},closeModal:function(){if(null==o.getAttribute("data-modal-cover")&&!o.closest("[data-modal-close]"))return;const t=o.closest("[data-modal-cover]").id;a.methods.closeModal(t)},scrollTo:function(){const a=e.target.closest("a[href]").getAttribute("href");a&&"#"!=a&&"#"==a[0]&&(t.preventDefault(),document.querySelector(a).scrollIntoView({behavior:"smooth",block:"start"}))},toogleLink:function(){const t=o.closest("[data-toggle-link]");a.methods.toggle(t)},tabsNav:function(){const e=t.target.closest("[data-tab-link]");a.methods.tabsNav(e)}};for(const t in n)n.hasOwnProperty(t)&&o.closest(n[t])&&i[t]()},keyup:function(t){console.log("Escape"==t.key),"Escape"==t.key&&(console.log(document.querySelector("[data-modal-cover].active")),console.log(document.querySelector("[data-modal-cover]:target")),document.querySelector("[data-modal-cover].active")&&a.methods.closeModal(document.querySelector("[data-modal-cover].active").id),document.querySelector("[data-modal-cover]:target")&&a.methods.closeModal(document.querySelector("[data-modal-cover]:target").id))},swipe:function(t){if(!a.methods.isTouchDevice())return;const e=screen.width<580?35:72,o=document.getElementById("header-nav");t.detail.startX<e&&"right"==t.detail.dir&&!o.classList.contains("active")&&a.methods.toggle(null,"header-nav"),"left"==t.detail.dir&&o.classList.contains("active")&&a.methods.toggle(null,"header-nav")}}};(function(){a.support.init(),a.event.init(),a.started.init(),window.tm=a})()}();let t=$(".calculator__answer input");const e=$("#calc-res"),a=$(".calculator__total-box");let o=0;t.on("click",(function(){val1=$('.calculator__answer input[name="answer-1"]:checked').val(),isNaN(val1)&&(val1=0),val2=$('.calculator__answer input[name="answer-2"]:checked').val(),isNaN(val2)&&(val2=0),val3=$('.calculator__answer input[name="answer-3"]:checked').val(),isNaN(val3)&&(val3=0),val4=$('.calculator__answer input[name="answer-4"]:checked').val(),isNaN(val4)&&(val4=0),val5=$('.calculator__answer input[name="answer-5"]:checked').val(),isNaN(val5)&&(val5=0),val6=$('.calculator__answer input[name="answer-6"]:checked').val(),isNaN(val6)&&(val6=0),o=Number(val1)+Number(val2)+Number(val3)+Number(val4)+Number(val5)+Number(val6),o<3?(a.removeClass("calculator__total-box--succ"),a.removeClass("calculator__total-box--warn"),a.addClass("calculator__total-box--alert")):o>=3&&o<=5?(a.removeClass("calculator__total-box--succ"),a.removeClass("calculator__total-box--alert"),a.addClass("calculator__total-box--warn")):o>5&&(a.removeClass("calculator__total-box--alert"),a.removeClass("calculator__total-box--warn"),a.addClass("calculator__total-box--succ")),e.text(o)}))}));