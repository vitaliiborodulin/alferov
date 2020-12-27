

var swipe = function (el, settings) {


	var settings = Object.assign({}, {
		minDist: 60,
		maxDist: 120,
		maxTime: 700,
		minTime: 50
	}, settings);


	if (settings.maxTime < settings.minTime) settings.maxTime = settings.minTime + 500;
	if (settings.maxTime < 100 || settings.minTime < 50) {
		settings.maxTime = 700;
		settings.minTime = 50;
	}

	var
		dir,
		swipeType,
		dist,
		startTarget,
		endTarget,
		isMouse = false,
		isMouseDown = false,
		startX = 0,
		distX = 0,
		startY = 0,
		distY = 0,
		startTime = 0,
		support = {
			pointer: !!("PointerEvent" in window || ("msPointerEnabled" in window.navigator)),
			touch: !!(typeof window.orientation !== "undefined" || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart" in window || navigator.msMaxTouchPoints || "maxTouchPoints" in window.navigator > 1 || "msMaxTouchPoints" in window.navigator > 1)
		};



	var getSupportedEvents = function () {
		switch (true) {

			case support.touch:
				events = {
					type: "touch",
					start: "touchstart",
					move: "touchmove",
					end: "touchend",
					cancel: "touchcancel"
				};
				break;
			default:
				events = {
					type: "mouse",
					start: "mousedown",
					move: "mousemove",
					end: "mouseup",
					leave: "mouseleave"
				};
				break;
		}
		return events;
	};


	var eventsUnify = function (e) {
		return e.changedTouches ? e.changedTouches[0] : e;
	};



	var checkStart = function (e) {

		var event = eventsUnify(e);
		if (support.touch && typeof e.touches !== "undefined" && e.touches.length !== 1) return;
		dir = "none";
		swipeType = "none";
		dist = 0;
		startX = event.pageX;
		startY = event.pageY;
		startTarget = e.target;
		startTime = new Date().getTime();
		if (isMouse) isMouseDown = true;

	};


	var checkMove = function (e) {

		if (isMouse && !isMouseDown) return;

		var event = eventsUnify(e);
		distX = event.pageX - startX;
		distY = event.pageY - startY;
		if (Math.abs(distX) > Math.abs(distY)) dir = (distX < 0) ? "left" : "right";
		else dir = (distY < 0) ? "up" : "down";

	};


	var checkEnd = function (e) {

		if (isMouse && !isMouseDown) {
			mouseDown = false;
			return;
		}
		var endTime = new Date().getTime();
		endTarget = e.target;
		var time = endTime - startTime;
		if (time >= settings.minTime && time <= settings.maxTime) {
			if (Math.abs(distX) >= settings.minDist && Math.abs(distY) <= settings.maxDist) {
				swipeType = dir;
			} else if (Math.abs(distY) >= settings.minDist && Math.abs(distX) <= settings.maxDist) {
				swipeType = dir;
			}
		}
		dist = (dir === "left" || dir === "right") ? Math.abs(distX) : Math.abs(distY);

		if (swipeType !== "none" && dist >= settings.minDist) {
			var swipeEvent = new CustomEvent("swipe", {
				bubbles: true,
				cancelable: true,
				detail: {
					full: e,
					dir: swipeType,
					dist: dist,
					time: time,
					startX: startX,
					startY: startY,
					startTarget: startTarget,
					endTarget: endTarget
				}
			});
			el.dispatchEvent(swipeEvent);
		}

	};


	var events = getSupportedEvents();


	if ((support.pointer && !support.touch) || events.type === "mouse") isMouse = true;

	el.addEventListener(events.start, checkStart);
	el.addEventListener(events.move, checkMove);
	el.addEventListener(events.end, checkEnd);

};



// document.addEventListener('click', function (event) {
// 	if (!(event.target.classList.contains('hello-modal') || event.target.closest('.hello-modal__close'))) return;
// 	document.querySelector('.hello-modal').classList.add('hidden');

// });







(function () {

	const sliders = {};
	const modalHistory = [];
	const pageHistoryLenght = window.history.length;

	let tm = {

		started: {

			__proto__: null,

			init: function () {
				var key;
				for (key in tm.started)
					if (key !== 'init') tm.started[key]();


			},
			mediaInit: function () {
				tm.methods.isTouchDevice() ? document.body.classList.add('media--touch') : null;
				// tm.methods.isiOS() ? document.body.classList.add('media--ios') : null;
			},

			parallaxInit: function () {
				tm.methods.parallax();
				document.addEventListener('scroll', tm.methods.parallax);

			},

			load: function () {
				new WOW({ offset: 102, mobile: false }).init();
				window.addEventListener('load', function () {
					tm.methods.parallax();





				})

				if (navigator.userAgent.match(/iPhone|iPad|iPod/i))
					document.body.classList.add('media--ios');

			},

			maskInit: function () {
				$('input[type="tel"]').mask('+7 (999) 999 99 99');
			},

			yaMapInit: function () {
				return false;

				const isMobile = !!(window.screen.width < 420);
				console.log(isMobile);



				ymaps.ready(function () {
					var myMap = new ymaps.Map('contact-map', {
						center: [45.046654, 38.936120],
						zoom: 17,
						controls: ['zoomControl']
					});

					MyIconContentLayout = ymaps.templateLayoutFactory.createClass();

					myPlacemark = new ymaps.Placemark(
						[45.046654, 38.936120], {
						balloonContent: ''
					}, {
						iconLayout: 'default#image',
						iconImageHref: 'img/icons/map-marker.png',
						iconImageSize: isMobile ? [240, 100] : [342, 134],
						iconImageOffset: isMobile ? [-120, -40] : [-171, -67]
					});

					myMap.geoObjects.add(myPlacemark);
					myMap.behaviors.disable('scrollZoom');


				});


				ymaps.ready(function () {
					var myMap = new ymaps.Map('index-map', {
						center: [45.046654, 38.936120],
						zoom: 17,
						controls: ['zoomControl']
					});

					MyIconContentLayout = ymaps.templateLayoutFactory.createClass();

					myPlacemark = new ymaps.Placemark(
						[45.046654, 38.936120],
						{
							balloonContent: '',
							hintContent: ''
						},
						{
							iconLayout: 'default#image',
							iconImageHref: 'img/icons/map-marker.png',
							iconImageSize: [342, 134],
							iconImageOffset: [-171, -67]
						},
					);

					myMap.geoObjects.add(myPlacemark);
					myMap.behaviors.disable('scrollZoom');




				});
			},


			slidersInit: function () {
				const COLUMN_GAP = 24;
				console.log('slidersInit');
				// Слайдеры колонок 			

				if (document.querySelector('.blog-slider')) {
					sliders.blogSlider = new Swiper('.blog-slider', {
						slidesPerGroup: 1,
						speed: 800,
						autoplayDisableOnInteraction: false,

						// simulateTouch: false,

						slidesPerView: 1,
						spaceBetween: 20,
						touchRatio: 1,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,

						navigation: {
							nextEl: '.blog-nav-next',
							prevEl: '.blog-nav-prev',
						},

						breakpoints: {

							646: {
								spaceBetween: 10,
								slidesPerView: 2,
							},
							992: {
								spaceBetween: 30,
								slidesPerView: 3,
							},

						}
					});
				}

				if (document.querySelector('.testimonials-slider')) {
					sliders.blogSlider = new Swiper('.testimonials-slider', {
						slidesPerGroup: 1,
						speed: 800,
						autoplayDisableOnInteraction: false,

						// simulateTouch: false,

						slidesPerView: 1,
						spaceBetween: 20,
						touchRatio: 1,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,

						navigation: {
							nextEl: '.testimonials-nav-next',
							prevEl: '.testimonials-nav-prev',
						},

						breakpoints: {

							646: {
								spaceBetween: 10,
								slidesPerView: 2,
							},
							992: {
								spaceBetween: 30,
								slidesPerView: 3,
							},

						}
					});
				}



			},

			modalInit: function () {
				if (!document.querySelector('[data-modal-cover].active')) return;
				tm.methods.openModal(document.querySelector('[data-modal-cover].active').id);

			},

			tabInit: function () {

				const covers = document.querySelectorAll('[data-tab-cover]');

				for (let i in covers) {
					if (!covers.hasOwnProperty(i)) continue;

					const cover = covers[i];
					const target = cover.querySelector('[data-tab-link].active') ||
						cover.querySelectorAll('[data-tab-link]')[0];
					const id = target.getAttribute('data-tab-link');


					const content = cover.querySelector('[data-tab-content="' + id + '"]') || document.getElementById(id);




					cover.querySelectorAll('[data-tab-link]').forEach(function (elem) {
						if (elem.getAttribute('data-tab-link') != id)
							elem.classList.remove('active');
						else
							elem.classList.add('active');
					})

					cover.querySelectorAll('[data-tab-content]').forEach(function (elem) {
						if (elem != content)
							elem.classList.remove('active');
						else
							elem.classList.add('active');
					})

					const plate = cover.querySelector('[data-tab-plate]');
					if (!plate) continue;
					const activeLink = cover.querySelector('[data-tab-link="' + id + '"]');
					plate.style.left = activeLink.offsetLeft + 'px';
					plate.style.width = activeLink.offsetWidth + 'px';


				}



			},

			wowInit: function () {

			},

			wavesInit: function () {
				Waves.init();
				Waves.attach('.btn');
				Waves.attach('.header-burger');
				Waves.attach('.header-nav__item');
				Waves.attach('.footer-nav__item');
				Waves.attach('.slider-arrow');
				Waves.attach('.blog-qwiz-item');

			},


			swipeInit: function () {
				if (!tm.methods.isTouchDevice()) return;
				swipe(document, { maxTime: 500, minTime: 10, maxDist: screen.width, minDist: 40 });

			},
		},

		support: {

			__proto__: null,

			init: function () {
				var key;
				for (key in tm.support)
					if (key !== 'init') tm.support[key]();
			},

			matches: function () {
				if (!Element.prototype.matches) {
					Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
				}
			},

			closest: function () {
				if (!Element.prototype.closest) {
					Element.prototype.closest = function (selector) {
						if (!this) return null;
						if (this.matches(selector)) return this;
						return !this.parentElement ? null : this.parentElement.closest(selector);
					}
				}
			},

			includes: function () {
				if (!Array.prototype.includes) {
					Object.defineProperty(Array.prototype, 'includes', {
						value: function (searchElement, fromIndex) {
							if (this == null) {
								throw new TypeError('"this" is null or not defined');
							}
							var o = Object(this);
							var len = o.length >>> 0;
							if (len === 0) {
								return false;
							}
							var n = fromIndex | 0;
							var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

							function sameValueZero(x, y) {
								return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
							}
							while (k < len) {
								if (sameValueZero(o[k], searchElement)) {
									return true;
								}
								k++;
							}
							return false;
						}
					});
				}
			},

			foreach: function () {
				if ('NodeList' in window && !NodeList.prototype.forEach) {
					console.info('polyfill forEach for IE11');
					NodeList.prototype.forEach = function (callback, thisArg) {
						thisArg = thisArg || window;
						for (var i = 0; i < this.length; i++) {
							callback.call(thisArg, this[i], i, this);
						}
					};
				}
			}

		},

		methods: {
			isTouchDevice: function () {
				return !!('ontouchstart' in window);
			},

			parallax: function () {
				const parallaxItems = document.querySelectorAll('[data-parallax]');


				for (const i in parallaxItems) {
					if (!parallaxItems.hasOwnProperty(i)) return;

					const elem = parallaxItems[i];

					const parent = elem.closest('[data-parallax-parent]') || elem.parentElement;
					const parentOffset = parent.getBoundingClientRect().top;
					const coof = -parentOffset / 10;
					const speed = elem.getAttribute('data-speed');


					elem.style.transform = 'translateY(' + coof * speed + '%)';



				}



			},

			isMobile: function () {
				let Android = () => navigator.userAgent.match(/Android/i);
				let BlackBerry = () => navigator.userAgent.match(/BlackBerry/i);
				let iOS = () => navigator.userAgent.match(/iPhone|iPad|iPod/i);
				let Opera = () => navigator.userAgent.match(/Opera Mini/i);
				let Windows = () => navigator.userAgent.match(/IEMobile/i);

				return Android() || BlackBerry() || iOS() || Opera() || Windows();
			},

			isVisible: function (target) {
				let targetPosition = {
					top: window.pageYOffset + target.getBoundingClientRect().top,
					bottom: window.pageYOffset + target.getBoundingClientRect().bottom
				},
					windowPosition = {
						top: window.pageYOffset,
						bottom: window.pageYOffset + document.documentElement.clientHeight
					};

				if (targetPosition.bottom > windowPosition.top &&
					targetPosition.top < windowPosition.bottom) {

					return true;
				} else {
					return false;
				};
			},

			getScrollBarWidth: function () {
				let div = document.createElement('div');

				div.style.overflowY = 'scroll';
				div.style.width = '50px';
				div.style.height = '50px';

				document.body.append(div);
				let scrollWidth = div.offsetWidth - div.clientWidth;

				div.remove();
				return scrollWidth;

			},

			setBodyOverflow: {
				hidden: function () {
					document.body.style.paddingRight = tm.methods.getScrollBarWidth() + 'px';
					document.body.classList.add('body--noscroll');

				},
				visible: function () {
					document.body.style.paddingRight = '';
					document.body.classList.remove('body--noscroll');

				},
				toggle: function () {
					document.body.classList.contains('body--noscroll') ? this.visible() : this.hidden();
				}
			},

			openModal: function (modalId) {
				console.log('openModal');

				const modal = document.getElementById(modalId);

				if (modal) {
					window.location.hash = '#' + modal.id;
					modalHistory.push(modal.id);
					tm.methods.setBodyOverflow.hidden();

				} else {
					console.error('modal cover with id = "' + modalId + '" not found!!!')
				}

			},

			closeModal: function (modalId) {
				console.log('closeModal');

				// TODO
				const modal = document.getElementById(modalId);
				if (modal) modal.classList.remove('active');
				// else return;

				if (window.location.hash.includes(modalId)) {
					sy = document.body.scrollTop;
					sx = document.body.scrollLeft;

					if (modalHistory.pop()) {
						tm.methods.openModal(modalHistory.pop())
					}
					else {
						window.location.hash = "";
					}

					document.body.scrollTop = sy;
					document.body.scrollLeft = sx;

				}

				setTimeout(function () {
					if (document.querySelector('[data-modal-cover].active')
						|| document.querySelector('[data-modal-cover]:target')) return;

					tm.methods.setBodyOverflow.visible();
				}, 250);
			},

			toggle: function (toggleLink, toggleId) {
				const coverAttr = 'data-toggle-cover';
				const linkAttr = 'data-toggle-link';

				const links = [...document.querySelectorAll('[data-toggle-link]')];


				const id = toggleLink ? toggleLink.getAttribute(linkAttr) : toggleId;

				const toggleCover = document.getElementById(id) || toggleLink.closest('[' + coverAttr + ']');



				if (!toggleCover) {
					console.error('toggleCover not found!');
					return;
				}

				const isActive = () => toggleCover.classList.contains('active');

				isActive() ?
					toggleCover.classList.remove('active') :
					toggleCover.classList.add('active');

				isActive() ?
					document.addEventListener('click', hideCover) :
					document.removeEventListener('click', hideCover);

				if (toggleLink)
					isActive() ?
						toggleLink.classList.add('active') :
						links.map((link) => link.classList.remove('active'));

				if (!!toggleCover.dataset.toggleHeight) {
					const height = !isNaN(parseInt(toggleCover.dataset.toggleHeight)) ? parseInt(toggleCover.dataset.toggleHeight) : 0;
					toggleCover.style.transition = (toggleCover.scrollHeight / 100) * 0.1 + 's ease';
					isActive() ?
						toggleCover.style.maxHeight = toggleCover.scrollHeight + 'px' :
						toggleCover.style.maxHeight = height + 'px';
				}


				if (toggleCover.getAttribute('data-toggle-callback') != null) {
					const funcName = toggleCover.getAttribute('data-toggle-callback');
					if (tm.methods[funcName]) tm.methods[funcName](toggleCover);
				}

				if (toggleLink && toggleLink.getAttribute('data-toggle-callback') != null) {
					const funcName = toggleLink.getAttribute('data-toggle-callback');
					if (tm.methods[funcName]) tm.methods[funcName](toggleCover);
				}




				const isChild = (child, parent) => {

					const isParent = child === parent;
					const onParent = parent.contains(child);
					return isParent || onParent;
				}

				function hideCover(event) {
					const onCover = isChild(event.target, toggleCover);
					const onLink = toggleLink ? isChild(event.target, toggleLink) : false;

					if (onCover) return;

					if (onLink) {
						document.removeEventListener('click', hideCover);
						return;
					}
					isActive() ? tm.methods.toggle(toggleLink, toggleId) : null;
					document.removeEventListener('click', hideCover);

				}

			},

			tabsNav: function (tabLink) {
				const activeLink = tabLink;
				const id = activeLink.getAttribute('data-tab-link');
				const cover = activeLink.closest('[data-tab-cover]');

				const activecontent = cover.querySelector('[data-tab-content="' + id + '"]') || document.getElementById(id);

				const oldLink = cover.querySelector('[data-tab-link].active');
				const oldContent = cover.querySelector('[data-tab-content].active');

				if (!activecontent) {
					console.error('Tab content not found!');
					return;
				}

				oldLink.classList.remove('active');
				oldContent.classList.remove('active');

				activeLink.classList.add('active');
				activecontent.classList.add('active');



				if (cover.getAttribute('data-tab-callback') != null) {
					const funcName = cover.getAttribute('data-tab-callback');
					if (tm.methods[funcName]) tm.methods[funcName]();
				}



				const plate = cover.querySelector('[data-tab-plate]');
				if (!plate) return;
				plate.style.left = activeLink.offsetLeft + 'px';
				plate.style.width = activeLink.offsetWidth + 'px';


			},

			getHeaderFixedOnScrollHandler: function () {
				let oldOffset = 0;
				let header = document.querySelector('.header')


				const handler = function () {
					let newOffset = window.pageYOffset;

					(window.pageYOffset > 10) ?
						header.classList.add('header--fixed') :
						header.classList.remove('header--fixed');

					// (newOffset > oldOffset && window.pageYOffset > 100) ?
					// 	header.classList.add('header--hidden') :
					// 	header.classList.remove('header--hidden');

					oldOffset = newOffset;
				}

				handler();
				return handler;
			},


		},

		event: {
			init: function () {
				var key;
				for (key in tm.event)
					if (key !== 'init') document.addEventListener(key, tm.event[key]);
			},

			click: function (event) {
				let e = event;

				let target = event.target;



				let attr = {
					showModal: '[data-modal-link]',
					closeModal: '[data-modal-cover]',
					scrollTo: 'a[href]',
					toogleLink: '[data-toggle-link]',
					tabsNav: '[data-tab-link]',
					test: '.test-item',


				};

				let methods = {
					test: function () {
						const item = event.target.closest('.test-item');
						if (!item.querySelector('.test-item')) item.classList.add('hidden');
					},
					showModal: function () {
						// if (target.closest('a') && target.closest('a').closest('[data-modal-link]')) return;
						// event.preventDefault();



						tm.methods.openModal(target.closest('[data-modal-link]').getAttribute('data-modal-link'));

					},
					closeModal: function () {
						if (!(target.getAttribute('data-modal-cover') != null || target.closest('[data-modal-close]'))) return;

						const modalId = target.closest('[data-modal-cover]').id;
						tm.methods.closeModal(modalId);

					},
					scrollTo: function () {
						const target = e.target.closest('a[href]');
						const href = target.getAttribute('href');

						if (!href) return;
						if (href == '#' || href[0] != '#') return;

						event.preventDefault();
						document.querySelector(href).scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						})
					},
					toogleLink: function () {
						const link = target.closest('[data-toggle-link]');
						tm.methods.toggle(link);

					},
					tabsNav: function () {
						const target = event.target.closest('[data-tab-link]');
						tm.methods.tabsNav(target);

					},



				}




				for (const key in attr) {
					if (!attr.hasOwnProperty(key)) continue;

					target.closest(attr[key]) ? methods[key]() : null;
				}
			},

			keyup: function (event) {
				console.log(event.key == 'Escape');

				if (event.key == 'Escape') {

					console.log(document.querySelector('[data-modal-cover].active'));
					console.log(document.querySelector('[data-modal-cover]:target'));





					!!document.querySelector('[data-modal-cover].active') ?
						tm.methods.closeModal(document.querySelector('[data-modal-cover].active').id) :
						null;

					!!document.querySelector('[data-modal-cover]:target') ?
						tm.methods.closeModal(document.querySelector('[data-modal-cover]:target').id) :
						null;




				}

			},


			swipe: function (event) {
				if (!tm.methods.isTouchDevice()) return;
				const offset = screen.width < 580 ? 35 : 72;
				const sidebar = document.getElementById('header-nav');

				if (event.detail.startX < offset && event.detail.dir == 'right' && !sidebar.classList.contains('active')) {
					tm.methods.toggle(null, 'header-nav');
				}

				if (event.detail.dir == 'left' && sidebar.classList.contains('active')) {
					tm.methods.toggle(null, 'header-nav');
				}

			}


		},




	}




	let tmExport = {
		export: function () {
			tm.support.init();
			tm.event.init();
			tm.started.init();

			window.tm = tm;
		}
	}

	tmExport.export();

})();

