(function () {


	let options = {
		phpUrl: '/form.php',

		pattern: {

			userid: {
				text: 'userid'
			},

			username: {
				text: 'Имя: ',
			},
			userphone: {
				text: 'Телефон: ',
			},
		}
	}




	// core
	function webcoreCore() {

		'use strict';

		var prefix = 'data-webcore--';

		var suffix = {
			__proto__: null,

			reset: 'reset-style',
			scroll: 'body-scroll',
			tooltip: 'tooltip',
		};

		var fn = {

			__proto__: null,

			prefix: prefix,

			suffix: suffix,

			storage: Object.create(null),


			attr: {
				__proto__: null,
				body: {
					__proto__: null,
					scroll: prefix + suffix.scroll,
				},

				reset: prefix + suffix.reset,
				state: ['off', 'on'],
			},

			support: {

				__proto__: null,

				init: function () {
					var key;
					for (key in fn.support)
						if (key !== 'init') fn.support[key]();
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

			},

			is: {

				__proto__: null,

				typeObject: function () {
					return {}.toString.call(arguments[0]).slice(8, -1).toLowerCase();
				},

				string: function () {
					return typeof arguments[0] === 'string' ? true : false;
				},

				number: function () {
					return typeof arguments[0] === 'number' ? true : false;
				},

				boolean: function () {
					return typeof arguments[0] === 'boolean' ? true : false;
				},

				function: function () {
					return fn.is.typeObject(arguments[0]) === 'function' ? true : false;
				},

				object: function () {
					return fn.is.typeObject(arguments[0]) === 'object' ? true : false;
				},



				array: function () {
					return fn.is.typeObject(arguments[0]) === 'array' ? true : false;
				},

				nodelist: function () {
					return fn.is.typeObject(arguments[0]) === 'nodelist' ? true : false;
				},

				htmlcollection: function () {
					return fn.is.typeObject(arguments[0]) === 'htmlcollection' ? true : false;
				},

				element: function () {
					return fn.is.typeObject(arguments[0]).indexOf('element') !== -1 ? true : false;
				},

				exist: function () {
					return arguments[0] !== void 0 && arguments[0] !== null ? true : false;
				},

				main: function () {
					return arguments[0] === document || arguments[0] === window ? true : false;
				},

				emptyObject: function () {
					var key;
					for (key in arguments[0]) return false;
					return true;
				},

				emptyList: function () {
					return fn.is.list(arguments[0]) && arguments[0].length === 0 ? true : false;
				},

				list: function () {
					return fn.is.array(arguments[0]) || fn.is.nodelist(arguments[0]) || fn.is.htmlcollection(arguments[0]) ? true : false;
				},

				html: function () {

					switch (true) {
						case fn.is.array(arguments[0]) && !fn.is.emptyList(arguments[0]):
							var i = arguments[0].length - 1
							for (; i >= 0; i--)
								if (!fn.is.element(arguments[0][i])) return false;
							return true;
							break;
						case fn.is.nodelist(arguments[0]) || fn.is.htmlcollection(arguments[0]):
							return !fn.is.emptyList(arguments[0]) ? true : false;
							break;
						case fn.is.element(arguments[0]):
							return true;
							break;
						default:
							return false;
					}

				},

				text: function () {
					return fn.is.typeObject(arguments[0]) === 'text' ? true : false;
				},

				workObject: function () {
					return fn.is.object(arguments[0]) && !fn.is.emptyObject(arguments[0]) ? true : false;
				},

				touch: function () {
					return 'ontouchstart' in document;
				},

				portrait: function () {
					return fn.viewport().width < fn.viewport().height ? true : false;
				},

			},

			init: function () {
				if (fn.is.exist(arguments[0])) {
					switch (true) {
						case fn.is.function(arguments[0]):
							fn.ready(void 0, arguments[0]);
							break;
						case fn.is.workObject(arguments[0]):
							for (var key in arguments[0]) fn.ready(key, arguments[0][key]);
							break;
					}
				}
			},

			ready: function () {

				var state = arguments[0],
					callback = arguments[1];

				var proto = this.ready.prototype = {

					__proto__: null,

					state: state === 'interactive' || state === 'complete' ? arguments[0] : 'interactive',

					init: function () {
						if (fn.is.function(callback)) document.addEventListener('readystatechange', proto.event.readystatechange);
					},

					event: {
						readystatechange: function () {
							if (document.readyState === proto.state) return callback();
						},
					},

				};

				proto.init();

			},

			export: function () {
				if (fn.is.exist(arguments[0]) && fn.is.workObject(arguments[1]))
					for (var key in arguments[1]) arguments[0][key] = arguments[1][key];
				return arguments[0];
			},

			toJSON: function () {

				var object = arguments[0],
					indent = arguments[1];

				var proto = this.toJSON.prototype = {

					__proto__: null,

					init: function () {
						if (fn.is.workObject(object)) return proto.transform(proto.each(object, proto.result));
					},

					each: function () {

						var data = arguments[0],
							expandable = arguments[1];

						if (fn.is.list(data) && !fn.is.emptyList(data)) {
							var i;
							for (i = 0; i < data.length; i++) {
								var current = proto.test(data[i], expandable);
								if (fn.is.exist(current)) expandable.push(current);
							}
						} else {
							var key;
							for (key in data) {
								var current = proto.test(data[key], expandable);
								if (fn.is.exist(current)) expandable[key] = current;
							}
						}

						return expandable;

					},

					test: function () {

						var item = arguments[0],
							expandable = arguments[1];

						if (!fn.is.function(item) && !fn.is.main(item)) {
							switch (true) {
								case fn.is.list(item) && !fn.is.emptyList(item):
									return proto.each(item, []);
									break;
								case fn.is.workObject(item):
									return proto.each(item, Object.create(null));
									break;
								default:
									return item;
							}
						}

					},

					transform: function () {
						return fn.is.number(indent) ? JSON.stringify(arguments[0], '', indent) : JSON.stringify(arguments[0]);
					},

					result: Object.create(null),

				};

				return proto.init();

			},

			fromJSON: function () {
				if (fn.is.string(arguments[0])) return JSON.parse(arguments[0], fn.is.function(arguments[1]) ? arguments[1] : void 0);
			},

			extend: function () {

				var proto = this.extend.prototype = {

					init: function () {

						var options = fn.is.workObject(arguments[0]) ? arguments[0] : Object.create(null),
							defaults = fn.is.workObject(arguments[1]) ? arguments[1] : Object.create(null);

						return proto.each(options, defaults);

					},

					each: function (options, defaults) {

						if (fn.is.list(defaults) && !fn.is.emptyList(defaults)) {
							var i;
							for (i = 0; i < defaults.length; i++) options.push(defaults[i]);
						} else {
							var key;
							for (key in defaults) {
								if (options === void 0) {
									options = defaults;
									continue;
								}
								options[key] = proto.test(options[key], defaults[key]);
							}
						}

						return options;

					},

					test: function (options, defaults) {
						return fn.is.workObject(defaults) ? proto.each(options, defaults) : defaults;
					},

				};

				return proto.init(arguments[0], arguments[1]);

			},

			serialize: function () {
				if (fn.is.workObject(arguments[0])) {
					var key, data = [];
					for (key in arguments[0]) data.push(encodeURIComponent(key) + '=' + encodeURIComponent(arguments[0][key]));
					return data.join('&');
				}
			},

			ajax: function () {

				var proto = this.ajax.prototype = {

					__proto__: null,

					mime: {
						script: 'text/javascript, application/javascript, application/x-javascript',
						json: 'application/json',
						xml: 'application/xml, text/xml',
						html: 'text/html',
						text: 'text/plain',
						ajax: 'XMLHttpRequest',
						formPOST: 'multipart/form-data',
						formGET: 'application/x-www-form-urlencoded',
					},

					header: {
						ajax: 'X-Requested-With',
						content: 'Content-Type',
					},

					options: {
						type: 'POST',
						data: {},
						header: 'ajax',
						charset: 'utf-8',
						username: '',
						password: '',
						url: '',
						success: '',
						error: '',
					},

					init: function () {

						proto.options = fn.extend(proto.options, fn.is.workObject(arguments[0]) ? arguments[0] : {});

						if (fn.is.string(proto.options.url) && proto.options.url !== '') {
							var Request = proto.action.create.request();
							proto.action.open(Request);
							proto.action.create.header(Request, proto.options.header === 'ajax' ? proto.header.ajax : proto.header.content, proto.mime[proto.options.header]);
							Request.addEventListener('readystatechange', function () {
								proto.action.progress(Request);
							});
							proto.options.type === 'POST' ? Request.send(proto.options.data) : Request.send(null);
							return Request;
						}

					},

					action: {

						create: {

							request: function () {
								return new XMLHttpRequest();
							},

							header: function () {
								return arguments[0].setRequestHeader(arguments[1], arguments[2] + '; charset=' + proto.options.charset);
							},

						},

						open: function () {
							return arguments[0].open(proto.options.type, proto.options.url, true, proto.options.username, proto.options.password);
						},

						progress: function () {
							if (arguments[0].readyState === 4) {
								if (arguments[0].status >= 200 && arguments[0].status <= 203) {
									if (fn.is.function(proto.options.success)) proto.options.success(arguments[0]);
								} else {
									if (fn.is.function(proto.options.error)) proto.options.error(arguments[0]);
								}
							}
						},

					},

				};

				return proto.init(arguments[0]);

			},

		};

		var fnExport = {

			core: function () {
				return fn.init(arguments[0]);
			},

			export: function () {
				fn.support.init();
				fnExport.core.prototype = fn;
				fn.export(fnExport.core, fn);
				window.__ = fnExport.core;
			},

		};

		fnExport.export();

	}

	// data
	function webcoreData() {

		'use strict';

		var store,
			outer = true,
			readySend = false;

		var prefix = __.prefix,
			suffix = 'data-';

		prefix += suffix;

		var state = __.attr.state;

		var attr = {
			data: prefix + 'item',
			select: 'data-webcore--select-caption',
		};

		var inputChange = ['text', 'datetime', 'email', 'tel', 'search', 'url'];

		var fn = {

			init: function () {
				if (__.storage.data === void 0) __.storage.data = Object.create(null), __.prototype.data = __.data = fn.started;
			},

			started: function () {

				var options = arguments[0];

				if (__.is.workObject(options)) {

					if (__.storage.data.pattern === void 0) {
						__.storage.data = fn.action.get.options();
						fn.action.set.listener();
					}

					__.extend(__.storage.data.submit, options.submit);

					if (options.pattern !== void 0) {

						var key;

						for (key in options.pattern) {
							options.pattern[key] = __.extend(fn.action.get.pattern(), options.pattern[key]);
							__.storage.data.pattern[key] = options.pattern[key];
						}

					}

					store = __.storage.data;

				}

			},

			tooltip: void 0,

			event: {

				submit: function (event) {

					var target = event.target,
						data = Object.create(null),
						formData = new FormData();

					var proto = fn.event.submit.prototype = {

						init: function () {

							proto.data();
							event.preventDefault();

							if (readySend) {
								if (store.submit.url !== void 0) {
									data = __.toJSON(data);
									formData.append('data', data);
									__.ajax({
										data: formData,
										url: store.submit.url,
										error: store.submit.error,
										success: store.submit.success,
									});
									readySend = false;
									return;
								}

								if (__.is.function(store.submit.callback)) {
									store.submit.callback(data, target);
									return;
								}
							}

						},

						data: function () {

							outer = true;

							var input = target.getElementsByTagName('input'),
								select = target.getElementsByTagName('select'),
								textarea = target.getElementsByTagName('textarea'),
								customizeSelect = target.querySelectorAll('[' + attr.select + ']');

							proto.each(input);
							proto.each(select);
							proto.each(textarea);
							proto.each(customizeSelect);

						},

						each: function (collection) {

							if (outer) {

								var i = 0,
									nodesLength = collection.length - 1;

								for (; i < collection.length; i++) {
									if (outer) {
										readySend = false;
										fn.action.get.test(collection[i], data);
										if (i === nodesLength) readySend = true;
									} else {
										break;
									}
								}

								return;

							}

							readySend = false;

						},

					};

					proto.init();

				},


			},

			action: {

				get: {

					test: function (target, data) {

						if (target.getAttribute(attr.select) !== null) {

							var current = Object.create(null);

							if (data.customizeSelect === void 0) data.customizeSelect = [];

							current.text = 'Селект';
							current.value = target.textContent.trim();
							data.customizeSelect.push(current);

							return;

						}

						var name = target.name.toLowerCase();

						if (store.pattern[name] === void 0) {
							fn.action.get.data(target, data);
							return;
						}

						if (store.pattern[name].required) {
							fn.validation.required(target, name);
							if (!outer) return;
						}

						if (store.pattern[name].length.min !== void 0) {
							fn.validation.length.min(target, store.pattern[name]);
							if (!outer) return;
						}

						if (store.pattern[name].regexp !== void 0) {
							var result = fn.validation.regexp[store.pattern[name].regexp](target.value);
							if (!result) {
								outer = false;
							}
							if (!outer) return;
						}

						fn.action.get.data(target, data);

						return;

					},

					data: function (target, data) {

						var name = target.name.toLowerCase(),
							type = target.type.toLowerCase(),
							value = target.value;

						if (type.indexOf('-') !== -1) type = fn.action.get.type(type);

						var current = Object.create(null);

						var proto = this.data.prototype = {

							init: function () {
								if (store.pattern[name] === void 0) {
									if (proto.value()) {
										current.text = type;
										if (data[type] === void 0) data[type] = [];
										data[type].push(current);
									}
									return;
								}
								if (proto.value()) {
									current.text = store.pattern[name].text === void 0 ? type : store.pattern[name].text;
									if (data[name] === void 0) data[name] = [];
									data[name].push(current);
								}
							},

							value: function () {
								if (type === 'checkbox' || type === 'radio') {
									if (!target.checked) return false;
									current.value = target.getAttribute('value');
									return true;
								}
								current.value = value;
								return true;
							},

						};

						if (value.trim().length !== 0) proto.init();

					},

					type: function (name) {
						var i = 0,
							arr = name.split('-');
						for (; i < arr.length; i++) {
							if (i !== 0) {
								arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
							}
						}
						return arr.join('');
					},

					style: function (target, prop) {
						var value = getComputedStyle(target)[prop];
						return value.indexOf('px') !== -1 ? parseInt(value) : value;
					},

					coord: function (target) {
						var pos = target.getBoundingClientRect(),
							offsetTop = __.storage.pageY !== void 0 ? __.storage.pageY : pageYOffset;
						return {
							top: pos.top + offsetTop,
							left: pos.left + pageXOffset,
						}
					},

					options: function () {
						return {
							tooltip: Object.create(null),
							pattern: Object.create(null),
							submit: {
								url: void 0,
								error: void 0,
								success: void 0,
								callback: void 0,
							},
						}
					},

					pattern: function () {
						return {
							text: void 0,
							change: 'all',
							length: {
								int: void 0,
								min: void 0,
								max: void 0,
							},
							cut: true,
							copy: true,
							paste: true,
							regexp: void 0,
							required: false,
							__proto__: null,
						}
					},

				},

				set: {

					listener: function () {
						for (var key in fn.event) document.addEventListener(key, fn.event[key], true);
					},
				},

			},



		};

		if (window.__ !== void 0) fn.init();

	}

	// custom 
	function webcoreCustom() {

		__.data({

			pattern: options.pattern,

			submit: {

				callback: function (data, target) {

					var formData = new FormData(),
						toJSON = __.toJSON(data);

					formData.append('data', toJSON);

					__.ajax({
						data: formData,
						url: options.phpUrl,
						success: function (result) {
							document.getElementById('success-modal').setAttribute('data-modal-cover', 'visible');
						},
					});

				},

			},

		});

	}





	try {
		let promise = new Promise(function (resolve) {
			resolve();
		});

		promise(webcoreCore)
			.then(webcoreData)
			.then(webcoreCustom);

	}catch(error){
		webcoreCore();
		webcoreData();
		webcoreCustom();
	}



})()