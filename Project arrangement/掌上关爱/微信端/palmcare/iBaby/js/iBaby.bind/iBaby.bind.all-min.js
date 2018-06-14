try {
	document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
		WeixinJSBridge.call("hideOptionMenu");
		WeixinJSBridge.call("hideToolbar")
	})
} catch (e) {
}
/*
 * jQuery JavaScript Library v1.8.0 http://jquery.com/
 * 
 * Includes Sizzle.js http://sizzlejs.com/
 * 
 * Copyright 2012 jQuery Foundation and other contributors Released under the
 * MIT license http://jquery.org/license
 * 
 * Date: Thu Aug 09 2012 16:24:48 GMT-0400 (Eastern Daylight Time)
 */
(function(a3, aC) {
	var y, ag, q = a3.document, aJ = a3.location, f = a3.navigator, bh = a3.jQuery, J = a3.$, an = Array.prototype.push, a5 = Array.prototype.slice, aL = Array.prototype.indexOf, B = Object.prototype.toString, W = Object.prototype.hasOwnProperty, aO = String.prototype.trim, bH = function(
			b0, b1) {
		return new bH.fn.init(b0, b1, y)
	}, by = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ab = /\S/, aW = /\s+/, E = ab
			.test("\xA0") ? (/^[\s\xA0]+|[\s\xA0]+$/g) : /^\s+|\s+$/g, bp = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, a = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, bg = /^[\],:{}\s]*$/, bj = /(?:^|:|,)(?:\s*\[)+/g, bE = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, a1 = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, bQ = /^-ms-/, aV = /-([\da-z])/gi, O = function(
			b0, b1) {
		return (b1 + "").toUpperCase()
	}, aG = function() {
		if (q.addEventListener) {
			q.removeEventListener("DOMContentLoaded", aG, false);
			bH.ready()
		} else {
			if (q.readyState === "complete") {
				q.detachEvent("onreadystatechange", aG);
				bH.ready()
			}
		}
	}, aa = {};
	bH.fn = bH.prototype = {
		constructor : bH,
		init : function(b0, b4, b3) {
			var b2, b5, b1, b6;
			if (!b0) {
				return this
			}
			if (b0.nodeType) {
				this.context = this[0] = b0;
				this.length = 1;
				return this
			}
			if (typeof b0 === "string") {
				if (b0.charAt(0) === "<" && b0.charAt(b0.length - 1) === ">"
						&& b0.length >= 3) {
					b2 = [ null, b0, null ]
				} else {
					b2 = bp.exec(b0)
				}
				if (b2 && (b2[1] || !b4)) {
					if (b2[1]) {
						b4 = b4 instanceof bH ? b4[0] : b4;
						b6 = (b4 && b4.nodeType ? b4.ownerDocument || b4 : q);
						b0 = bH.parseHTML(b2[1], b6, true);
						if (a.test(b2[1]) && bH.isPlainObject(b4)) {
							this.attr.call(b0, b4, true)
						}
						return bH.merge(this, b0)
					} else {
						b5 = q.getElementById(b2[2]);
						if (b5 && b5.parentNode) {
							if (b5.id !== b2[2]) {
								return b3.find(b0)
							}
							this.length = 1;
							this[0] = b5
						}
						this.context = q;
						this.selector = b0;
						return this
					}
				} else {
					if (!b4 || b4.jquery) {
						return (b4 || b3).find(b0)
					} else {
						return this.constructor(b4).find(b0)
					}
				}
			} else {
				if (bH.isFunction(b0)) {
					return b3.ready(b0)
				}
			}
			if (b0.selector !== aC) {
				this.selector = b0.selector;
				this.context = b0.context
			}
			return bH.makeArray(b0, this)
		},
		selector : "",
		jquery : "1.8.0",
		length : 0,
		size : function() {
			return this.length
		},
		toArray : function() {
			return a5.call(this)
		},
		get : function(b0) {
			return b0 == null ? this.toArray() : (b0 < 0 ? this[this.length
					+ b0] : this[b0])
		},
		pushStack : function(b1, b3, b0) {
			var b2 = bH.merge(this.constructor(), b1);
			b2.prevObject = this;
			b2.context = this.context;
			if (b3 === "find") {
				b2.selector = this.selector + (this.selector ? " " : "") + b0
			} else {
				if (b3) {
					b2.selector = this.selector + "." + b3 + "(" + b0 + ")"
				}
			}
			return b2
		},
		each : function(b1, b0) {
			return bH.each(this, b1, b0)
		},
		ready : function(b0) {
			bH.ready.promise().done(b0);
			return this
		},
		eq : function(b0) {
			b0 = +b0;
			return b0 === -1 ? this.slice(b0) : this.slice(b0, b0 + 1)
		},
		first : function() {
			return this.eq(0)
		},
		last : function() {
			return this.eq(-1)
		},
		slice : function() {
			return this.pushStack(a5.apply(this, arguments), "slice", a5.call(
					arguments).join(","))
		},
		map : function(b0) {
			return this.pushStack(bH.map(this, function(b2, b1) {
				return b0.call(b2, b1, b2)
			}))
		},
		end : function() {
			return this.prevObject || this.constructor(null)
		},
		push : an,
		sort : [].sort,
		splice : [].splice
	};
	bH.fn.init.prototype = bH.fn;
	bH.extend = bH.fn.extend = function() {
		var b9, b2, b0, b1, b6, b7, b5 = arguments[0] || {}, b4 = 1, b3 = arguments.length, b8 = false;
		if (typeof b5 === "boolean") {
			b8 = b5;
			b5 = arguments[1] || {};
			b4 = 2
		}
		if (typeof b5 !== "object" && !bH.isFunction(b5)) {
			b5 = {}
		}
		if (b3 === b4) {
			b5 = this;
			--b4
		}
		for (; b4 < b3; b4++) {
			if ((b9 = arguments[b4]) != null) {
				for (b2 in b9) {
					b0 = b5[b2];
					b1 = b9[b2];
					if (b5 === b1) {
						continue
					}
					if (b8 && b1
							&& (bH.isPlainObject(b1) || (b6 = bH.isArray(b1)))) {
						if (b6) {
							b6 = false;
							b7 = b0 && bH.isArray(b0) ? b0 : []
						} else {
							b7 = b0 && bH.isPlainObject(b0) ? b0 : {}
						}
						b5[b2] = bH.extend(b8, b7, b1)
					} else {
						if (b1 !== aC) {
							b5[b2] = b1
						}
					}
				}
			}
		}
		return b5
	};
	bH
			.extend({
				noConflict : function(b0) {
					if (a3.$ === bH) {
						a3.$ = J
					}
					if (b0 && a3.jQuery === bH) {
						a3.jQuery = bh
					}
					return bH
				},
				isReady : false,
				readyWait : 1,
				holdReady : function(b0) {
					if (b0) {
						bH.readyWait++
					} else {
						bH.ready(true)
					}
				},
				ready : function(b0) {
					if (b0 === true ? --bH.readyWait : bH.isReady) {
						return
					}
					if (!q.body) {
						return setTimeout(bH.ready, 1)
					}
					bH.isReady = true;
					if (b0 !== true && --bH.readyWait > 0) {
						return
					}
					ag.resolveWith(q, [ bH ]);
					if (bH.fn.trigger) {
						bH(q).trigger("ready").off("ready")
					}
				},
				isFunction : function(b0) {
					return bH.type(b0) === "function"
				},
				isArray : Array.isArray || function(b0) {
					return bH.type(b0) === "array"
				},
				isWindow : function(b0) {
					return b0 != null && b0 == b0.window
				},
				isNumeric : function(b0) {
					return !isNaN(parseFloat(b0)) && isFinite(b0)
				},
				type : function(b0) {
					return b0 == null ? String(b0) : aa[B.call(b0)] || "object"
				},
				isPlainObject : function(b2) {
					if (!b2 || bH.type(b2) !== "object" || b2.nodeType
							|| bH.isWindow(b2)) {
						return false
					}
					try {
						if (b2.constructor
								&& !W.call(b2, "constructor")
								&& !W.call(b2.constructor.prototype,
										"isPrototypeOf")) {
							return false
						}
					} catch (b1) {
						return false
					}
					var b0;
					for (b0 in b2) {
					}
					return b0 === aC || W.call(b2, b0)
				},
				isEmptyObject : function(b1) {
					var b0;
					for (b0 in b1) {
						return false
					}
					return true
				},
				error : function(b0) {
					throw new Error(b0)
				},
				parseHTML : function(b3, b2, b0) {
					var b1;
					if (!b3 || typeof b3 !== "string") {
						return null
					}
					if (typeof b2 === "boolean") {
						b0 = b2;
						b2 = 0
					}
					b2 = b2 || q;
					if ((b1 = a.exec(b3))) {
						return [ b2.createElement(b1[1]) ]
					}
					b1 = bH.buildFragment([ b3 ], b2, b0 ? null : []);
					return bH.merge([], (b1.cacheable ? bH.clone(b1.fragment)
							: b1.fragment).childNodes)
				},
				parseJSON : function(b0) {
					if (!b0 || typeof b0 !== "string") {
						return null
					}
					b0 = bH.trim(b0);
					if (a3.JSON && a3.JSON.parse) {
						return a3.JSON.parse(b0)
					}
					if (bg.test(b0.replace(bE, "@").replace(a1, "]").replace(
							bj, ""))) {
						return (new Function("return " + b0))()
					}
					bH.error("Invalid JSON: " + b0)
				},
				parseXML : function(b2) {
					var b0, b1;
					if (!b2 || typeof b2 !== "string") {
						return null
					}
					try {
						if (a3.DOMParser) {
							b1 = new DOMParser();
							b0 = b1.parseFromString(b2, "text/xml")
						} else {
							b0 = new ActiveXObject("Microsoft.XMLDOM");
							b0.async = "false";
							b0.loadXML(b2)
						}
					} catch (b3) {
						b0 = aC
					}
					if (!b0 || !b0.documentElement
							|| b0.getElementsByTagName("parsererror").length) {
						bH.error("Invalid XML: " + b2)
					}
					return b0
				},
				noop : function() {
				},
				globalEval : function(b0) {
					if (b0 && ab.test(b0)) {
						(a3.execScript || function(b1) {
							a3["eval"].call(a3, b1)
						})(b0)
					}
				},
				camelCase : function(b0) {
					return b0.replace(bQ, "ms-").replace(aV, O)
				},
				nodeName : function(b1, b0) {
					return b1.nodeName
							&& b1.nodeName.toUpperCase() === b0.toUpperCase()
				},
				each : function(b5, b6, b2) {
					var b1, b3 = 0, b4 = b5.length, b0 = b4 === aC
							|| bH.isFunction(b5);
					if (b2) {
						if (b0) {
							for (b1 in b5) {
								if (b6.apply(b5[b1], b2) === false) {
									break
								}
							}
						} else {
							for (; b3 < b4;) {
								if (b6.apply(b5[b3++], b2) === false) {
									break
								}
							}
						}
					} else {
						if (b0) {
							for (b1 in b5) {
								if (b6.call(b5[b1], b1, b5[b1]) === false) {
									break
								}
							}
						} else {
							for (; b3 < b4;) {
								if (b6.call(b5[b3], b3, b5[b3++]) === false) {
									break
								}
							}
						}
					}
					return b5
				},
				trim : aO ? function(b0) {
					return b0 == null ? "" : aO.call(b0)
				} : function(b0) {
					return b0 == null ? "" : b0.toString().replace(E, "")
				},
				makeArray : function(b0, b2) {
					var b3, b1 = b2 || [];
					if (b0 != null) {
						b3 = bH.type(b0);
						if (b0.length == null || b3 === "string"
								|| b3 === "function" || b3 === "regexp"
								|| bH.isWindow(b0)) {
							an.call(b1, b0)
						} else {
							bH.merge(b1, b0)
						}
					}
					return b1
				},
				inArray : function(b3, b1, b2) {
					var b0;
					if (b1) {
						if (aL) {
							return aL.call(b1, b3, b2)
						}
						b0 = b1.length;
						b2 = b2 ? b2 < 0 ? Math.max(0, b0 + b2) : b2 : 0;
						for (; b2 < b0; b2++) {
							if (b2 in b1 && b1[b2] === b3) {
								return b2
							}
						}
					}
					return -1
				},
				merge : function(b4, b2) {
					var b0 = b2.length, b3 = b4.length, b1 = 0;
					if (typeof b0 === "number") {
						for (; b1 < b0; b1++) {
							b4[b3++] = b2[b1]
						}
					} else {
						while (b2[b1] !== aC) {
							b4[b3++] = b2[b1++]
						}
					}
					b4.length = b3;
					return b4
				},
				grep : function(b1, b6, b0) {
					var b5, b2 = [], b3 = 0, b4 = b1.length;
					b0 = !!b0;
					for (; b3 < b4; b3++) {
						b5 = !!b6(b1[b3], b3);
						if (b0 !== b5) {
							b2.push(b1[b3])
						}
					}
					return b2
				},
				map : function(b0, b7, b8) {
					var b5, b6, b4 = [], b2 = 0, b1 = b0.length, b3 = b0 instanceof bH
							|| b1 !== aC
							&& typeof b1 === "number"
							&& ((b1 > 0 && b0[0] && b0[b1 - 1]) || b1 === 0 || bH
									.isArray(b0));
					if (b3) {
						for (; b2 < b1; b2++) {
							b5 = b7(b0[b2], b2, b8);
							if (b5 != null) {
								b4[b4.length] = b5
							}
						}
					} else {
						for (b6 in b0) {
							b5 = b7(b0[b6], b6, b8);
							if (b5 != null) {
								b4[b4.length] = b5
							}
						}
					}
					return b4.concat.apply([], b4)
				},
				guid : 1,
				proxy : function(b4, b3) {
					var b2, b0, b1;
					if (typeof b3 === "string") {
						b2 = b4[b3];
						b3 = b4;
						b4 = b2
					}
					if (!bH.isFunction(b4)) {
						return aC
					}
					b0 = a5.call(arguments, 2);
					b1 = function() {
						return b4.apply(b3, b0.concat(a5.call(arguments)))
					};
					b1.guid = b4.guid = b4.guid || b1.guid || bH.guid++;
					return b1
				},
				access : function(b0, b6, b9, b7, b4, ca, b8) {
					var b2, b5 = b9 == null, b3 = 0, b1 = b0.length;
					if (b9 && typeof b9 === "object") {
						for (b3 in b9) {
							bH.access(b0, b6, b3, b9[b3], 1, ca, b7)
						}
						b4 = 1
					} else {
						if (b7 !== aC) {
							b2 = b8 === aC && bH.isFunction(b7);
							if (b5) {
								if (b2) {
									b2 = b6;
									b6 = function(cc, cb, cd) {
										return b2.call(bH(cc), cd)
									}
								} else {
									b6.call(b0, b7);
									b6 = null
								}
							}
							if (b6) {
								for (; b3 < b1; b3++) {
									b6(b0[b3], b9, b2 ? b7.call(b0[b3], b3, b6(
											b0[b3], b9)) : b7, b8)
								}
							}
							b4 = 1
						}
					}
					return b4 ? b0 : b5 ? b6.call(b0) : b1 ? b6(b0[0], b9) : ca
				},
				now : function() {
					return (new Date()).getTime()
				}
			});
	bH.ready.promise = function(b3) {
		if (!ag) {
			ag = bH.Deferred();
			if (q.readyState === "complete"
					|| (q.readyState !== "loading" && q.addEventListener)) {
				setTimeout(bH.ready, 1)
			} else {
				if (q.addEventListener) {
					q.addEventListener("DOMContentLoaded", aG, false);
					a3.addEventListener("load", bH.ready, false)
				} else {
					q.attachEvent("onreadystatechange", aG);
					a3.attachEvent("onload", bH.ready);
					var b2 = false;
					try {
						b2 = a3.frameElement == null && q.documentElement
					} catch (b1) {
					}
					if (b2 && b2.doScroll) {
						(function b0() {
							if (!bH.isReady) {
								try {
									b2.doScroll("left")
								} catch (b4) {
									return setTimeout(b0, 50)
								}
								bH.ready()
							}
						})()
					}
				}
			}
		}
		return ag.promise(b3)
	};
	bH.each("Boolean Number String Function Array Date RegExp Object"
			.split(" "), function(b1, b0) {
		aa["[object " + b0 + "]"] = b0.toLowerCase()
	});
	y = bH(q);
	var bV = {};
	function ad(b1) {
		var b0 = bV[b1] = {};
		bH.each(b1.split(aW), function(b3, b2) {
			b0[b2] = true
		});
		return b0
	}
	bH.Callbacks = function(ca) {
		ca = typeof ca === "string" ? (bV[ca] || ad(ca)) : bH.extend({}, ca);
		var b3, b0, b4, b2, b5, b6, b7 = [], b8 = !ca.once && [], b1 = function(
				cb) {
			b3 = ca.memory && cb;
			b0 = true;
			b6 = b2 || 0;
			b2 = 0;
			b5 = b7.length;
			b4 = true;
			for (; b7 && b6 < b5; b6++) {
				if (b7[b6].apply(cb[0], cb[1]) === false && ca.stopOnFalse) {
					b3 = false;
					break
				}
			}
			b4 = false;
			if (b7) {
				if (b8) {
					if (b8.length) {
						b1(b8.shift())
					}
				} else {
					if (b3) {
						b7 = []
					} else {
						b9.disable()
					}
				}
			}
		}, b9 = {
			add : function() {
				if (b7) {
					var cc = b7.length;
					(function cb(cd) {
						bH.each(cd, function(cf, ce) {
							if (bH.isFunction(ce)
									&& (!ca.unique || !b9.has(ce))) {
								b7.push(ce)
							} else {
								if (ce && ce.length) {
									cb(ce)
								}
							}
						})
					})(arguments);
					if (b4) {
						b5 = b7.length
					} else {
						if (b3) {
							b2 = cc;
							b1(b3)
						}
					}
				}
				return this
			},
			remove : function() {
				if (b7) {
					bH.each(arguments, function(cd, cb) {
						var cc;
						while ((cc = bH.inArray(cb, b7, cc)) > -1) {
							b7.splice(cc, 1);
							if (b4) {
								if (cc <= b5) {
									b5--
								}
								if (cc <= b6) {
									b6--
								}
							}
						}
					})
				}
				return this
			},
			has : function(cb) {
				return bH.inArray(cb, b7) > -1
			},
			empty : function() {
				b7 = [];
				return this
			},
			disable : function() {
				b7 = b8 = b3 = aC;
				return this
			},
			disabled : function() {
				return !b7
			},
			lock : function() {
				b8 = aC;
				if (!b3) {
					b9.disable()
				}
				return this
			},
			locked : function() {
				return !b8
			},
			fireWith : function(cc, cb) {
				cb = cb || [];
				cb = [ cc, cb.slice ? cb.slice() : cb ];
				if (b7 && (!b0 || b8)) {
					if (b4) {
						b8.push(cb)
					} else {
						b1(cb)
					}
				}
				return this
			},
			fire : function() {
				b9.fireWith(this, arguments);
				return this
			},
			fired : function() {
				return !!b0
			}
		};
		return b9
	};
	bH
			.extend({
				Deferred : function(b2) {
					var b1 = [
							[ "resolve", "done", bH.Callbacks("once memory"),
									"resolved" ],
							[ "reject", "fail", bH.Callbacks("once memory"),
									"rejected" ],
							[ "notify", "progress", bH.Callbacks("memory") ] ], b3 = "pending", b4 = {
						state : function() {
							return b3
						},
						always : function() {
							b0.done(arguments).fail(arguments);
							return this
						},
						then : function() {
							var b5 = arguments;
							return bH
									.Deferred(
											function(b6) {
												bH
														.each(
																b1,
																function(b8, b7) {
																	var ca = b7[0], b9 = b5[b8];
																	b0[b7[1]]
																			(bH
																					.isFunction(b9) ? function() {
																				var cb = b9
																						.apply(
																								this,
																								arguments);
																				if (cb
																						&& bH
																								.isFunction(cb.promise)) {
																					cb
																							.promise()
																							.done(
																									b6.resolve)
																							.fail(
																									b6.reject)
																							.progress(
																									b6.notify)
																				} else {
																					b6[ca
																							+ "With"]
																							(
																									this === b0 ? b6
																											: this,
																									[ cb ])
																				}
																			}
																					: b6[ca])
																});
												b5 = null
											}).promise()
						},
						promise : function(b5) {
							return typeof b5 === "object" ? bH.extend(b5, b4)
									: b4
						}
					}, b0 = {};
					b4.pipe = b4.then;
					bH.each(b1, function(b6, b5) {
						var b8 = b5[2], b7 = b5[3];
						b4[b5[1]] = b8.add;
						if (b7) {
							b8.add(function() {
								b3 = b7
							}, b1[b6 ^ 1][2].disable, b1[2][2].lock)
						}
						b0[b5[0]] = b8.fire;
						b0[b5[0] + "With"] = b8.fireWith
					});
					b4.promise(b0);
					if (b2) {
						b2.call(b0, b0)
					}
					return b0
				},
				when : function(b4) {
					var b2 = 0, b6 = a5.call(arguments), b0 = b6.length, b1 = b0 !== 1
							|| (b4 && bH.isFunction(b4.promise)) ? b0 : 0, b9 = b1 === 1 ? b4
							: bH.Deferred(), b3 = function(cb, cc, ca) {
						return function(cd) {
							cc[cb] = this;
							ca[cb] = arguments.length > 1 ? a5.call(arguments)
									: cd;
							if (ca === b8) {
								b9.notifyWith(cc, ca)
							} else {
								if (!(--b1)) {
									b9.resolveWith(cc, ca)
								}
							}
						}
					}, b8, b5, b7;
					if (b0 > 1) {
						b8 = new Array(b0);
						b5 = new Array(b0);
						b7 = new Array(b0);
						for (; b2 < b0; b2++) {
							if (b6[b2] && bH.isFunction(b6[b2].promise)) {
								b6[b2].promise().done(b3(b2, b7, b6)).fail(
										b9.reject).progress(b3(b2, b5, b8))
							} else {
								--b1
							}
						}
					}
					if (!b1) {
						b9.resolveWith(b7, b6)
					}
					return b9.promise()
				}
			});
	bH.support = (function() {
		var cc, cb, b9, ca, b3, b8, b7, b5, b4, b2, b0, b1 = q
				.createElement("div");
		b1.setAttribute("className", "t");
		b1.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		cb = b1.getElementsByTagName("*");
		b9 = b1.getElementsByTagName("a")[0];
		b9.style.cssText = "top:1px;float:left;opacity:.5";
		if (!cb || !cb.length || !b9) {
			return {}
		}
		ca = q.createElement("select");
		b3 = ca.appendChild(q.createElement("option"));
		b8 = b1.getElementsByTagName("input")[0];
		cc = {
			leadingWhitespace : (b1.firstChild.nodeType === 3),
			tbody : !b1.getElementsByTagName("tbody").length,
			htmlSerialize : !!b1.getElementsByTagName("link").length,
			style : /top/.test(b9.getAttribute("style")),
			hrefNormalized : (b9.getAttribute("href") === "/a"),
			opacity : /^0.5/.test(b9.style.opacity),
			cssFloat : !!b9.style.cssFloat,
			checkOn : (b8.value === "on"),
			optSelected : b3.selected,
			getSetAttribute : b1.className !== "t",
			enctype : !!q.createElement("form").enctype,
			html5Clone : q.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
			boxModel : (q.compatMode === "CSS1Compat"),
			submitBubbles : true,
			changeBubbles : true,
			focusinBubbles : false,
			deleteExpando : true,
			noCloneEvent : true,
			inlineBlockNeedsLayout : false,
			shrinkWrapBlocks : false,
			reliableMarginRight : true,
			boxSizingReliable : true,
			pixelPosition : false
		};
		b8.checked = true;
		cc.noCloneChecked = b8.cloneNode(true).checked;
		ca.disabled = true;
		cc.optDisabled = !b3.disabled;
		try {
			delete b1.test
		} catch (b6) {
			cc.deleteExpando = false
		}
		if (!b1.addEventListener && b1.attachEvent && b1.fireEvent) {
			b1.attachEvent("onclick", b0 = function() {
				cc.noCloneEvent = false
			});
			b1.cloneNode(true).fireEvent("onclick");
			b1.detachEvent("onclick", b0)
		}
		b8 = q.createElement("input");
		b8.value = "t";
		b8.setAttribute("type", "radio");
		cc.radioValue = b8.value === "t";
		b8.setAttribute("checked", "checked");
		b8.setAttribute("name", "t");
		b1.appendChild(b8);
		b7 = q.createDocumentFragment();
		b7.appendChild(b1.lastChild);
		cc.checkClone = b7.cloneNode(true).cloneNode(true).lastChild.checked;
		cc.appendChecked = b8.checked;
		b7.removeChild(b8);
		b7.appendChild(b1);
		if (b1.attachEvent) {
			for (b4 in {
				submit : true,
				change : true,
				focusin : true
			}) {
				b5 = "on" + b4;
				b2 = (b5 in b1);
				if (!b2) {
					b1.setAttribute(b5, "return;");
					b2 = (typeof b1[b5] === "function")
				}
				cc[b4 + "Bubbles"] = b2
			}
		}
		bH(function() {
			var ce, ci, cg, ch, cf = "padding:0;margin:0;border:0;display:block;overflow:hidden;", cd = q
					.getElementsByTagName("body")[0];
			if (!cd) {
				return
			}
			ce = q.createElement("div");
			ce.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
			cd.insertBefore(ce, cd.firstChild);
			ci = q.createElement("div");
			ce.appendChild(ci);
			ci.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			cg = ci.getElementsByTagName("td");
			cg[0].style.cssText = "padding:0;margin:0;border:0;display:none";
			b2 = (cg[0].offsetHeight === 0);
			cg[0].style.display = "";
			cg[1].style.display = "none";
			cc.reliableHiddenOffsets = b2 && (cg[0].offsetHeight === 0);
			ci.innerHTML = "";
			ci.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
			cc.boxSizing = (ci.offsetWidth === 4);
			cc.doesNotIncludeMarginInBodyOffset = (cd.offsetTop !== 1);
			if (a3.getComputedStyle) {
				cc.pixelPosition = (a3.getComputedStyle(ci, null) || {}).top !== "1%";
				cc.boxSizingReliable = (a3.getComputedStyle(ci, null) || {
					width : "4px"
				}).width === "4px";
				ch = q.createElement("div");
				ch.style.cssText = ci.style.cssText = cf;
				ch.style.marginRight = ch.style.width = "0";
				ci.style.width = "1px";
				ci.appendChild(ch);
				cc.reliableMarginRight = !parseFloat((a3.getComputedStyle(ch,
						null) || {}).marginRight)
			}
			if (typeof ci.style.zoom !== "undefined") {
				ci.innerHTML = "";
				ci.style.cssText = cf
						+ "width:1px;padding:1px;display:inline;zoom:1";
				cc.inlineBlockNeedsLayout = (ci.offsetWidth === 3);
				ci.style.display = "block";
				ci.style.overflow = "visible";
				ci.innerHTML = "<div></div>";
				ci.firstChild.style.width = "5px";
				cc.shrinkWrapBlocks = (ci.offsetWidth !== 3);
				ce.style.zoom = 1
			}
			cd.removeChild(ce);
			ce = ci = cg = ch = null
		});
		b7.removeChild(b1);
		cb = b9 = ca = b3 = b8 = b7 = b1 = null;
		return cc
	})();
	var bu = /^(?:\{.*\}|\[.*\])$/, aM = /([A-Z])/g;
	bH
			.extend({
				cache : {},
				deletedIds : [],
				uuid : 0,
				expando : "jQuery"
						+ (bH.fn.jquery + Math.random()).replace(/\D/g, ""),
				noData : {
					embed : true,
					object : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
					applet : true
				},
				hasData : function(b0) {
					b0 = b0.nodeType ? bH.cache[b0[bH.expando]]
							: b0[bH.expando];
					return !!b0 && !P(b0)
				},
				data : function(b3, b1, b5, b4) {
					if (!bH.acceptData(b3)) {
						return
					}
					var b6, b8, b9 = bH.expando, b7 = typeof b1 === "string", ca = b3.nodeType, b0 = ca ? bH.cache
							: b3, b2 = ca ? b3[b9] : b3[b9] && b9;
					if ((!b2 || !b0[b2] || (!b4 && !b0[b2].data)) && b7
							&& b5 === aC) {
						return
					}
					if (!b2) {
						if (ca) {
							b3[b9] = b2 = bH.deletedIds.pop() || ++bH.uuid
						} else {
							b2 = b9
						}
					}
					if (!b0[b2]) {
						b0[b2] = {};
						if (!ca) {
							b0[b2].toJSON = bH.noop
						}
					}
					if (typeof b1 === "object" || typeof b1 === "function") {
						if (b4) {
							b0[b2] = bH.extend(b0[b2], b1)
						} else {
							b0[b2].data = bH.extend(b0[b2].data, b1)
						}
					}
					b6 = b0[b2];
					if (!b4) {
						if (!b6.data) {
							b6.data = {}
						}
						b6 = b6.data
					}
					if (b5 !== aC) {
						b6[bH.camelCase(b1)] = b5
					}
					if (b7) {
						b8 = b6[b1];
						if (b8 == null) {
							b8 = b6[bH.camelCase(b1)]
						}
					} else {
						b8 = b6
					}
					return b8
				},
				removeData : function(b3, b1, b4) {
					if (!bH.acceptData(b3)) {
						return
					}
					var b7, b6, b5, b8 = b3.nodeType, b0 = b8 ? bH.cache : b3, b2 = b8 ? b3[bH.expando]
							: bH.expando;
					if (!b0[b2]) {
						return
					}
					if (b1) {
						b7 = b4 ? b0[b2] : b0[b2].data;
						if (b7) {
							if (!bH.isArray(b1)) {
								if (b1 in b7) {
									b1 = [ b1 ]
								} else {
									b1 = bH.camelCase(b1);
									if (b1 in b7) {
										b1 = [ b1 ]
									} else {
										b1 = b1.split(" ")
									}
								}
							}
							for (b6 = 0, b5 = b1.length; b6 < b5; b6++) {
								delete b7[b1[b6]]
							}
							if (!(b4 ? P : bH.isEmptyObject)(b7)) {
								return
							}
						}
					}
					if (!b4) {
						delete b0[b2].data;
						if (!P(b0[b2])) {
							return
						}
					}
					if (b8) {
						bH.cleanData([ b3 ], true)
					} else {
						if (bH.support.deleteExpando || b0 != b0.window) {
							delete b0[b2]
						} else {
							b0[b2] = null
						}
					}
				},
				_data : function(b1, b0, b2) {
					return bH.data(b1, b0, b2, true)
				},
				acceptData : function(b1) {
					var b0 = b1.nodeName
							&& bH.noData[b1.nodeName.toLowerCase()];
					return !b0 || b0 !== true
							&& b1.getAttribute("classid") === b0
				}
			});
	bH.fn.extend({
		data : function(b9, b8) {
			var b4, b1, b7, b0, b3, b2 = this[0], b6 = 0, b5 = null;
			if (b9 === aC) {
				if (this.length) {
					b5 = bH.data(b2);
					if (b2.nodeType === 1 && !bH._data(b2, "parsedAttrs")) {
						b7 = b2.attributes;
						for (b3 = b7.length; b6 < b3; b6++) {
							b0 = b7[b6].name;
							if (b0.indexOf("data-") === 0) {
								b0 = bH.camelCase(b0.substring(5));
								bw(b2, b0, b5[b0])
							}
						}
						bH._data(b2, "parsedAttrs", true)
					}
				}
				return b5
			}
			if (typeof b9 === "object") {
				return this.each(function() {
					bH.data(this, b9)
				})
			}
			b4 = b9.split(".", 2);
			b4[1] = b4[1] ? "." + b4[1] : "";
			b1 = b4[1] + "!";
			return bH.access(this, function(ca) {
				if (ca === aC) {
					b5 = this.triggerHandler("getData" + b1, [ b4[0] ]);
					if (b5 === aC && b2) {
						b5 = bH.data(b2, b9);
						b5 = bw(b2, b9, b5)
					}
					return b5 === aC && b4[1] ? this.data(b4[0]) : b5
				}
				b4[1] = ca;
				this.each(function() {
					var cb = bH(this);
					cb.triggerHandler("setData" + b1, b4);
					bH.data(this, b9, ca);
					cb.triggerHandler("changeData" + b1, b4)
				})
			}, null, b8, arguments.length > 1, null, false)
		},
		removeData : function(b0) {
			return this.each(function() {
				bH.removeData(this, b0)
			})
		}
	});
	function bw(b2, b1, b3) {
		if (b3 === aC && b2.nodeType === 1) {
			var b0 = "data-" + b1.replace(aM, "-$1").toLowerCase();
			b3 = b2.getAttribute(b0);
			if (typeof b3 === "string") {
				try {
					b3 = b3 === "true" ? true : b3 === "false" ? false
							: b3 === "null" ? null : +b3 + "" === b3 ? +b3 : bu
									.test(b3) ? bH.parseJSON(b3) : b3
				} catch (b4) {
				}
				bH.data(b2, b1, b3)
			} else {
				b3 = aC
			}
		}
		return b3
	}
	function P(b1) {
		var b0;
		for (b0 in b1) {
			if (b0 === "data" && bH.isEmptyObject(b1[b0])) {
				continue
			}
			if (b0 !== "toJSON") {
				return false
			}
		}
		return true
	}
	bH.extend({
		queue : function(b2, b1, b3) {
			var b0;
			if (b2) {
				b1 = (b1 || "fx") + "queue";
				b0 = bH._data(b2, b1);
				if (b3) {
					if (!b0 || bH.isArray(b3)) {
						b0 = bH._data(b2, b1, bH.makeArray(b3))
					} else {
						b0.push(b3)
					}
				}
				return b0 || []
			}
		},
		dequeue : function(b5, b4) {
			b4 = b4 || "fx";
			var b1 = bH.queue(b5, b4), b3 = b1.shift(), b0 = bH._queueHooks(b5,
					b4), b2 = function() {
				bH.dequeue(b5, b4)
			};
			if (b3 === "inprogress") {
				b3 = b1.shift()
			}
			if (b3) {
				if (b4 === "fx") {
					b1.unshift("inprogress")
				}
				delete b0.stop;
				b3.call(b5, b2, b0)
			}
			if (!b1.length && b0) {
				b0.empty.fire()
			}
		},
		_queueHooks : function(b2, b1) {
			var b0 = b1 + "queueHooks";
			return bH._data(b2, b0) || bH._data(b2, b0, {
				empty : bH.Callbacks("once memory").add(function() {
					bH.removeData(b2, b1 + "queue", true);
					bH.removeData(b2, b0, true)
				})
			})
		}
	});
	bH.fn
			.extend({
				queue : function(b0, b1) {
					var b2 = 2;
					if (typeof b0 !== "string") {
						b1 = b0;
						b0 = "fx";
						b2--
					}
					if (arguments.length < b2) {
						return bH.queue(this[0], b0)
					}
					return b1 === aC ? this : this.each(function() {
						var b3 = bH.queue(this, b0, b1);
						bH._queueHooks(this, b0);
						if (b0 === "fx" && b3[0] !== "inprogress") {
							bH.dequeue(this, b0)
						}
					})
				},
				dequeue : function(b0) {
					return this.each(function() {
						bH.dequeue(this, b0)
					})
				},
				delay : function(b1, b0) {
					b1 = bH.fx ? bH.fx.speeds[b1] || b1 : b1;
					b0 = b0 || "fx";
					return this.queue(b0, function(b3, b2) {
						var b4 = setTimeout(b3, b1);
						b2.stop = function() {
							clearTimeout(b4)
						}
					})
				},
				clearQueue : function(b0) {
					return this.queue(b0 || "fx", [])
				},
				promise : function(b2, b6) {
					var b1, b3 = 1, b7 = bH.Deferred(), b5 = this, b0 = this.length, b4 = function() {
						if (!(--b3)) {
							b7.resolveWith(b5, [ b5 ])
						}
					};
					if (typeof b2 !== "string") {
						b6 = b2;
						b2 = aC
					}
					b2 = b2 || "fx";
					while (b0--) {
						if ((b1 = bH._data(b5[b0], b2 + "queueHooks"))
								&& b1.empty) {
							b3++;
							b1.empty.add(b4)
						}
					}
					b4();
					return b7.promise(b6)
				}
			});
	var a8, bW, p, bK = /[\t\r\n]/g, aj = /\r/g, l = /^(?:button|input)$/i, aB = /^(?:button|input|object|select|textarea)$/i, F = /^a(?:rea|)$/i, N = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, bM = bH.support.getSetAttribute;
	bH.fn
			.extend({
				attr : function(b0, b1) {
					return bH.access(this, bH.attr, b0, b1,
							arguments.length > 1)
				},
				removeAttr : function(b0) {
					return this.each(function() {
						bH.removeAttr(this, b0)
					})
				},
				prop : function(b0, b1) {
					return bH.access(this, bH.prop, b0, b1,
							arguments.length > 1)
				},
				removeProp : function(b0) {
					b0 = bH.propFix[b0] || b0;
					return this.each(function() {
						try {
							this[b0] = aC;
							delete this[b0]
						} catch (b1) {
						}
					})
				},
				addClass : function(b4) {
					var b6, b2, b1, b3, b5, b7, b0;
					if (bH.isFunction(b4)) {
						return this
								.each(function(b8) {
									bH(this).addClass(
											b4.call(this, b8, this.className))
								})
					}
					if (b4 && typeof b4 === "string") {
						b6 = b4.split(aW);
						for (b2 = 0, b1 = this.length; b2 < b1; b2++) {
							b3 = this[b2];
							if (b3.nodeType === 1) {
								if (!b3.className && b6.length === 1) {
									b3.className = b4
								} else {
									b5 = " " + b3.className + " ";
									for (b7 = 0, b0 = b6.length; b7 < b0; b7++) {
										if (!~b5.indexOf(" " + b6[b7] + " ")) {
											b5 += b6[b7] + " "
										}
									}
									b3.className = bH.trim(b5)
								}
							}
						}
					}
					return this
				},
				removeClass : function(b6) {
					var b3, b4, b5, b7, b1, b2, b0;
					if (bH.isFunction(b6)) {
						return this.each(function(b8) {
							bH(this).removeClass(
									b6.call(this, b8, this.className))
						})
					}
					if ((b6 && typeof b6 === "string") || b6 === aC) {
						b3 = (b6 || "").split(aW);
						for (b2 = 0, b0 = this.length; b2 < b0; b2++) {
							b5 = this[b2];
							if (b5.nodeType === 1 && b5.className) {
								b4 = (" " + b5.className + " ")
										.replace(bK, " ");
								for (b7 = 0, b1 = b3.length; b7 < b1; b7++) {
									while (b4.indexOf(" " + b3[b7] + " ") > -1) {
										b4 = b4
												.replace(" " + b3[b7] + " ",
														" ")
									}
								}
								b5.className = b6 ? bH.trim(b4) : ""
							}
						}
					}
					return this
				},
				toggleClass : function(b3, b1) {
					var b2 = typeof b3, b0 = typeof b1 === "boolean";
					if (bH.isFunction(b3)) {
						return this.each(function(b4) {
							bH(this).toggleClass(
									b3.call(this, b4, this.className, b1), b1)
						})
					}
					return this
							.each(function() {
								if (b2 === "string") {
									var b6, b5 = 0, b4 = bH(this), b7 = b1, b8 = b3
											.split(aW);
									while ((b6 = b8[b5++])) {
										b7 = b0 ? b7 : !b4.hasClass(b6);
										b4[b7 ? "addClass" : "removeClass"](b6)
									}
								} else {
									if (b2 === "undefined" || b2 === "boolean") {
										if (this.className) {
											bH._data(this, "__className__",
													this.className)
										}
										this.className = this.className
												|| b3 === false ? "" : bH
												._data(this, "__className__")
												|| ""
									}
								}
							})
				},
				hasClass : function(b0) {
					var b3 = " " + b0 + " ", b2 = 0, b1 = this.length;
					for (; b2 < b1; b2++) {
						if (this[b2].nodeType === 1
								&& (" " + this[b2].className + " ").replace(bK,
										" ").indexOf(b3) > -1) {
							return true
						}
					}
					return false
				},
				val : function(b3) {
					var b0, b1, b4, b2 = this[0];
					if (!arguments.length) {
						if (b2) {
							b0 = bH.valHooks[b2.type]
									|| bH.valHooks[b2.nodeName.toLowerCase()];
							if (b0 && "get" in b0
									&& (b1 = b0.get(b2, "value")) !== aC) {
								return b1
							}
							b1 = b2.value;
							return typeof b1 === "string" ? b1.replace(aj, "")
									: b1 == null ? "" : b1
						}
						return
					}
					b4 = bH.isFunction(b3);
					return this.each(function(b6) {
						var b7, b5 = bH(this);
						if (this.nodeType !== 1) {
							return
						}
						if (b4) {
							b7 = b3.call(this, b6, b5.val())
						} else {
							b7 = b3
						}
						if (b7 == null) {
							b7 = ""
						} else {
							if (typeof b7 === "number") {
								b7 += ""
							} else {
								if (bH.isArray(b7)) {
									b7 = bH.map(b7, function(b8) {
										return b8 == null ? "" : b8 + ""
									})
								}
							}
						}
						b0 = bH.valHooks[this.type]
								|| bH.valHooks[this.nodeName.toLowerCase()];
						if (!b0 || !("set" in b0)
								|| b0.set(this, b7, "value") === aC) {
							this.value = b7
						}
					})
				}
			});
	bH
			.extend({
				valHooks : {
					option : {
						get : function(b0) {
							var b1 = b0.attributes.value;
							return !b1 || b1.specified ? b0.value : b0.text
						}
					},
					select : {
						get : function(b0) {
							var b6, b1, b5, b3, b4 = b0.selectedIndex, b7 = [], b8 = b0.options, b2 = b0.type === "select-one";
							if (b4 < 0) {
								return null
							}
							b1 = b2 ? b4 : 0;
							b5 = b2 ? b4 + 1 : b8.length;
							for (; b1 < b5; b1++) {
								b3 = b8[b1];
								if (b3.selected
										&& (bH.support.optDisabled ? !b3.disabled
												: b3.getAttribute("disabled") === null)
										&& (!b3.parentNode.disabled || !bH
												.nodeName(b3.parentNode,
														"optgroup"))) {
									b6 = bH(b3).val();
									if (b2) {
										return b6
									}
									b7.push(b6)
								}
							}
							if (b2 && !b7.length && b8.length) {
								return bH(b8[b4]).val()
							}
							return b7
						},
						set : function(b1, b2) {
							var b0 = bH.makeArray(b2);
							bH(b1).find("option").each(
									function() {
										this.selected = bH.inArray(bH(this)
												.val(), b0) >= 0
									});
							if (!b0.length) {
								b1.selectedIndex = -1
							}
							return b0
						}
					}
				},
				attrFn : {},
				attr : function(b6, b3, b7, b5) {
					var b2, b0, b4, b1 = b6.nodeType;
					if (!b6 || b1 === 3 || b1 === 8 || b1 === 2) {
						return
					}
					if (b5 && bH.isFunction(bH.fn[b3])) {
						return bH(b6)[b3](b7)
					}
					if (typeof b6.getAttribute === "undefined") {
						return bH.prop(b6, b3, b7)
					}
					b4 = b1 !== 1 || !bH.isXMLDoc(b6);
					if (b4) {
						b3 = b3.toLowerCase();
						b0 = bH.attrHooks[b3] || (N.test(b3) ? bW : a8)
					}
					if (b7 !== aC) {
						if (b7 === null) {
							bH.removeAttr(b6, b3);
							return
						} else {
							if (b0 && "set" in b0 && b4
									&& (b2 = b0.set(b6, b7, b3)) !== aC) {
								return b2
							} else {
								b6.setAttribute(b3, "" + b7);
								return b7
							}
						}
					} else {
						if (b0 && "get" in b0 && b4
								&& (b2 = b0.get(b6, b3)) !== null) {
							return b2
						} else {
							b2 = b6.getAttribute(b3);
							return b2 === null ? aC : b2
						}
					}
				},
				removeAttr : function(b3, b5) {
					var b4, b6, b1, b0, b2 = 0;
					if (b5 && b3.nodeType === 1) {
						b6 = b5.split(aW);
						for (; b2 < b6.length; b2++) {
							b1 = b6[b2];
							if (b1) {
								b4 = bH.propFix[b1] || b1;
								b0 = N.test(b1);
								if (!b0) {
									bH.attr(b3, b1, "")
								}
								b3.removeAttribute(bM ? b1 : b4);
								if (b0 && b4 in b3) {
									b3[b4] = false
								}
							}
						}
					}
				},
				attrHooks : {
					type : {
						set : function(b0, b1) {
							if (l.test(b0.nodeName) && b0.parentNode) {
								bH.error("type property can't be changed")
							} else {
								if (!bH.support.radioValue && b1 === "radio"
										&& bH.nodeName(b0, "input")) {
									var b2 = b0.value;
									b0.setAttribute("type", b1);
									if (b2) {
										b0.value = b2
									}
									return b1
								}
							}
						}
					},
					value : {
						get : function(b1, b0) {
							if (a8 && bH.nodeName(b1, "button")) {
								return a8.get(b1, b0)
							}
							return b0 in b1 ? b1.value : null
						},
						set : function(b1, b2, b0) {
							if (a8 && bH.nodeName(b1, "button")) {
								return a8.set(b1, b2, b0)
							}
							b1.value = b2
						}
					}
				},
				propFix : {
					tabindex : "tabIndex",
					readonly : "readOnly",
					"for" : "htmlFor",
					"class" : "className",
					maxlength : "maxLength",
					cellspacing : "cellSpacing",
					cellpadding : "cellPadding",
					rowspan : "rowSpan",
					colspan : "colSpan",
					usemap : "useMap",
					frameborder : "frameBorder",
					contenteditable : "contentEditable"
				},
				prop : function(b5, b3, b6) {
					var b2, b0, b4, b1 = b5.nodeType;
					if (!b5 || b1 === 3 || b1 === 8 || b1 === 2) {
						return
					}
					b4 = b1 !== 1 || !bH.isXMLDoc(b5);
					if (b4) {
						b3 = bH.propFix[b3] || b3;
						b0 = bH.propHooks[b3]
					}
					if (b6 !== aC) {
						if (b0 && "set" in b0
								&& (b2 = b0.set(b5, b6, b3)) !== aC) {
							return b2
						} else {
							return (b5[b3] = b6)
						}
					} else {
						if (b0 && "get" in b0 && (b2 = b0.get(b5, b3)) !== null) {
							return b2
						} else {
							return b5[b3]
						}
					}
				},
				propHooks : {
					tabIndex : {
						get : function(b1) {
							var b0 = b1.getAttributeNode("tabindex");
							return b0 && b0.specified ? parseInt(b0.value, 10)
									: aB.test(b1.nodeName)
											|| F.test(b1.nodeName) && b1.href ? 0
											: aC
						}
					}
				}
			});
	bW = {
		get : function(b1, b0) {
			var b3, b2 = bH.prop(b1, b0);
			return b2 === true || typeof b2 !== "boolean"
					&& (b3 = b1.getAttributeNode(b0)) && b3.nodeValue !== false ? b0
					.toLowerCase()
					: aC
		},
		set : function(b1, b3, b0) {
			var b2;
			if (b3 === false) {
				bH.removeAttr(b1, b0)
			} else {
				b2 = bH.propFix[b0] || b0;
				if (b2 in b1) {
					b1[b2] = true
				}
				b1.setAttribute(b0, b0.toLowerCase())
			}
			return b0
		}
	};
	if (!bM) {
		p = {
			name : true,
			id : true,
			coords : true
		};
		a8 = bH.valHooks.button = {
			get : function(b2, b1) {
				var b0;
				b0 = b2.getAttributeNode(b1);
				return b0 && (p[b1] ? b0.value !== "" : b0.specified) ? b0.value
						: aC
			},
			set : function(b2, b3, b1) {
				var b0 = b2.getAttributeNode(b1);
				if (!b0) {
					b0 = q.createAttribute(b1);
					b2.setAttributeNode(b0)
				}
				return (b0.value = b3 + "")
			}
		};
		bH.each([ "width", "height" ], function(b1, b0) {
			bH.attrHooks[b0] = bH.extend(bH.attrHooks[b0], {
				set : function(b2, b3) {
					if (b3 === "") {
						b2.setAttribute(b0, "auto");
						return b3
					}
				}
			})
		});
		bH.attrHooks.contenteditable = {
			get : a8.get,
			set : function(b1, b2, b0) {
				if (b2 === "") {
					b2 = "false"
				}
				a8.set(b1, b2, b0)
			}
		}
	}
	if (!bH.support.hrefNormalized) {
		bH.each([ "href", "src", "width", "height" ], function(b1, b0) {
			bH.attrHooks[b0] = bH.extend(bH.attrHooks[b0], {
				get : function(b3) {
					var b2 = b3.getAttribute(b0, 2);
					return b2 === null ? aC : b2
				}
			})
		})
	}
	if (!bH.support.style) {
		bH.attrHooks.style = {
			get : function(b0) {
				return b0.style.cssText.toLowerCase() || aC
			},
			set : function(b0, b1) {
				return (b0.style.cssText = "" + b1)
			}
		}
	}
	if (!bH.support.optSelected) {
		bH.propHooks.selected = bH.extend(bH.propHooks.selected, {
			get : function(b1) {
				var b0 = b1.parentNode;
				if (b0) {
					b0.selectedIndex;
					if (b0.parentNode) {
						b0.parentNode.selectedIndex
					}
				}
				return null
			}
		})
	}
	if (!bH.support.enctype) {
		bH.propFix.enctype = "encoding"
	}
	if (!bH.support.checkOn) {
		bH.each([ "radio", "checkbox" ], function() {
			bH.valHooks[this] = {
				get : function(b0) {
					return b0.getAttribute("value") === null ? "on" : b0.value
				}
			}
		})
	}
	bH.each([ "radio", "checkbox" ], function() {
		bH.valHooks[this] = bH.extend(bH.valHooks[this], {
			set : function(b0, b1) {
				if (bH.isArray(b1)) {
					return (b0.checked = bH.inArray(bH(b0).val(), b1) >= 0)
				}
			}
		})
	});
	var bF = /^(?:textarea|input|select)$/i, bs = /^([^\.]*|)(?:\.(.+)|)$/, bb = /(?:^|\s)hover(\.\S+|)\b/, a4 = /^key/, bL = /^(?:mouse|contextmenu)|click/, bz = /^(?:focusinfocus|focusoutblur)$/, ar = function(
			b0) {
		return bH.event.special.hover ? b0 : b0.replace(bb,
				"mouseenter$1 mouseleave$1")
	};
	bH.event = {
		add : function(b3, b7, ce, b5, b4) {
			var b8, b6, cf, cd, cc, ca, b0, cb, b1, b2, b9;
			if (b3.nodeType === 3 || b3.nodeType === 8 || !b7 || !ce
					|| !(b8 = bH._data(b3))) {
				return
			}
			if (ce.handler) {
				b1 = ce;
				ce = b1.handler;
				b4 = b1.selector
			}
			if (!ce.guid) {
				ce.guid = bH.guid++
			}
			cf = b8.events;
			if (!cf) {
				b8.events = cf = {}
			}
			b6 = b8.handle;
			if (!b6) {
				b8.handle = b6 = function(cg) {
					return typeof bH !== "undefined"
							&& (!cg || bH.event.triggered !== cg.type) ? bH.event.dispatch
							.apply(b6.elem, arguments)
							: aC
				};
				b6.elem = b3
			}
			b7 = bH.trim(ar(b7)).split(" ");
			for (cd = 0; cd < b7.length; cd++) {
				cc = bs.exec(b7[cd]) || [];
				ca = cc[1];
				b0 = (cc[2] || "").split(".").sort();
				b9 = bH.event.special[ca] || {};
				ca = (b4 ? b9.delegateType : b9.bindType) || ca;
				b9 = bH.event.special[ca] || {};
				cb = bH.extend({
					type : ca,
					origType : cc[1],
					data : b5,
					handler : ce,
					guid : ce.guid,
					selector : b4,
					namespace : b0.join(".")
				}, b1);
				b2 = cf[ca];
				if (!b2) {
					b2 = cf[ca] = [];
					b2.delegateCount = 0;
					if (!b9.setup || b9.setup.call(b3, b5, b0, b6) === false) {
						if (b3.addEventListener) {
							b3.addEventListener(ca, b6, false)
						} else {
							if (b3.attachEvent) {
								b3.attachEvent("on" + ca, b6)
							}
						}
					}
				}
				if (b9.add) {
					b9.add.call(b3, cb);
					if (!cb.handler.guid) {
						cb.handler.guid = ce.guid
					}
				}
				if (b4) {
					b2.splice(b2.delegateCount++, 0, cb)
				} else {
					b2.push(cb)
				}
				bH.event.global[ca] = true
			}
			b3 = null
		},
		global : {},
		remove : function(b3, b8, ce, b4, b7) {
			var cf, cg, cb, b2, b1, b5, b6, cd, ca, b0, cc, b9 = bH.hasData(b3)
					&& bH._data(b3);
			if (!b9 || !(cd = b9.events)) {
				return
			}
			b8 = bH.trim(ar(b8 || "")).split(" ");
			for (cf = 0; cf < b8.length; cf++) {
				cg = bs.exec(b8[cf]) || [];
				cb = b2 = cg[1];
				b1 = cg[2];
				if (!cb) {
					for (cb in cd) {
						bH.event.remove(b3, cb + b8[cf], ce, b4, true)
					}
					continue
				}
				ca = bH.event.special[cb] || {};
				cb = (b4 ? ca.delegateType : ca.bindType) || cb;
				b0 = cd[cb] || [];
				b5 = b0.length;
				b1 = b1 ? new RegExp("(^|\\.)"
						+ b1.split(".").sort().join("\\.(?:.*\\.|)")
						+ "(\\.|$)") : null;
				for (b6 = 0; b6 < b0.length; b6++) {
					cc = b0[b6];
					if ((b7 || b2 === cc.origType)
							&& (!ce || ce.guid === cc.guid)
							&& (!b1 || b1.test(cc.namespace))
							&& (!b4 || b4 === cc.selector || b4 === "**"
									&& cc.selector)) {
						b0.splice(b6--, 1);
						if (cc.selector) {
							b0.delegateCount--
						}
						if (ca.remove) {
							ca.remove.call(b3, cc)
						}
					}
				}
				if (b0.length === 0 && b5 !== b0.length) {
					if (!ca.teardown
							|| ca.teardown.call(b3, b1, b9.handle) === false) {
						bH.removeEvent(b3, cb, b9.handle)
					}
					delete cd[cb]
				}
			}
			if (bH.isEmptyObject(cd)) {
				delete b9.handle;
				bH.removeData(b3, "events", true)
			}
		},
		customEvent : {
			getData : true,
			setData : true,
			changeData : true
		},
		trigger : function(b1, b8, b6, cf) {
			if (b6 && (b6.nodeType === 3 || b6.nodeType === 8)) {
				return
			}
			var b0, b3, b9, cd, b5, b4, cb, ca, b7, ce, cc = b1.type || b1, b2 = [];
			if (bz.test(cc + bH.event.triggered)) {
				return
			}
			if (cc.indexOf("!") >= 0) {
				cc = cc.slice(0, -1);
				b3 = true
			}
			if (cc.indexOf(".") >= 0) {
				b2 = cc.split(".");
				cc = b2.shift();
				b2.sort()
			}
			if ((!b6 || bH.event.customEvent[cc]) && !bH.event.global[cc]) {
				return
			}
			b1 = typeof b1 === "object" ? b1[bH.expando] ? b1 : new bH.Event(
					cc, b1) : new bH.Event(cc);
			b1.type = cc;
			b1.isTrigger = true;
			b1.exclusive = b3;
			b1.namespace = b2.join(".");
			b1.namespace_re = b1.namespace ? new RegExp("(^|\\.)"
					+ b2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
			b4 = cc.indexOf(":") < 0 ? "on" + cc : "";
			if (!b6) {
				b0 = bH.cache;
				for (b9 in b0) {
					if (b0[b9].events && b0[b9].events[cc]) {
						bH.event.trigger(b1, b8, b0[b9].handle.elem, true)
					}
				}
				return
			}
			b1.result = aC;
			if (!b1.target) {
				b1.target = b6
			}
			b8 = b8 != null ? bH.makeArray(b8) : [];
			b8.unshift(b1);
			cb = bH.event.special[cc] || {};
			if (cb.trigger && cb.trigger.apply(b6, b8) === false) {
				return
			}
			b7 = [ [ b6, cb.bindType || cc ] ];
			if (!cf && !cb.noBubble && !bH.isWindow(b6)) {
				ce = cb.delegateType || cc;
				cd = bz.test(ce + cc) ? b6 : b6.parentNode;
				for (b5 = b6; cd; cd = cd.parentNode) {
					b7.push([ cd, ce ]);
					b5 = cd
				}
				if (b5 === (b6.ownerDocument || q)) {
					b7.push([ b5.defaultView || b5.parentWindow || a3, ce ])
				}
			}
			for (b9 = 0; b9 < b7.length && !b1.isPropagationStopped(); b9++) {
				cd = b7[b9][0];
				b1.type = b7[b9][1];
				ca = (bH._data(cd, "events") || {})[b1.type]
						&& bH._data(cd, "handle");
				if (ca) {
					ca.apply(cd, b8)
				}
				ca = b4 && cd[b4];
				if (ca && bH.acceptData(cd) && ca.apply(cd, b8) === false) {
					b1.preventDefault()
				}
			}
			b1.type = cc;
			if (!cf && !b1.isDefaultPrevented()) {
				if ((!cb._default || cb._default.apply(b6.ownerDocument, b8) === false)
						&& !(cc === "click" && bH.nodeName(b6, "a"))
						&& bH.acceptData(b6)) {
					if (b4
							&& b6[cc]
							&& ((cc !== "focus" && cc !== "blur") || b1.target.offsetWidth !== 0)
							&& !bH.isWindow(b6)) {
						b5 = b6[b4];
						if (b5) {
							b6[b4] = null
						}
						bH.event.triggered = cc;
						b6[cc]();
						bH.event.triggered = aC;
						if (b5) {
							b6[b4] = b5
						}
					}
				}
			}
			return b1.result
		},
		dispatch : function(cd) {
			cd = bH.event.fix(cd || a3.event);
			var cf, cc, b4, b6, cg, ce, b7, b2, b0, cb, ch, b9 = ((bH._data(
					this, "events") || {})[cd.type] || []), b8 = b9.delegateCount, b3 = [].slice
					.call(arguments), ca = !cd.exclusive && !cd.namespace, b5 = bH.event.special[cd.type]
					|| {}, b1 = [];
			b3[0] = cd;
			cd.delegateTarget = this;
			if (b5.preDispatch && b5.preDispatch.call(this, cd) === false) {
				return
			}
			if (b8 && !(cd.button && cd.type === "click")) {
				b6 = bH(this);
				b6.context = this;
				for (b4 = cd.target; b4 != this; b4 = b4.parentNode || this) {
					if (b4.disabled !== true || cd.type !== "click") {
						ce = {};
						b2 = [];
						b6[0] = b4;
						for (cf = 0; cf < b8; cf++) {
							b0 = b9[cf];
							cb = b0.selector;
							if (ce[cb] === aC) {
								ce[cb] = b6.is(cb)
							}
							if (ce[cb]) {
								b2.push(b0)
							}
						}
						if (b2.length) {
							b1.push({
								elem : b4,
								matches : b2
							})
						}
					}
				}
			}
			if (b9.length > b8) {
				b1.push({
					elem : this,
					matches : b9.slice(b8)
				})
			}
			for (cf = 0; cf < b1.length && !cd.isPropagationStopped(); cf++) {
				b7 = b1[cf];
				cd.currentTarget = b7.elem;
				for (cc = 0; cc < b7.matches.length
						&& !cd.isImmediatePropagationStopped(); cc++) {
					b0 = b7.matches[cc];
					if (ca || (!cd.namespace && !b0.namespace)
							|| cd.namespace_re
							&& cd.namespace_re.test(b0.namespace)) {
						cd.data = b0.data;
						cd.handleObj = b0;
						cg = ((bH.event.special[b0.origType] || {}).handle || b0.handler)
								.apply(b7.elem, b3);
						if (cg !== aC) {
							cd.result = cg;
							if (cg === false) {
								cd.preventDefault();
								cd.stopPropagation()
							}
						}
					}
				}
			}
			if (b5.postDispatch) {
				b5.postDispatch.call(this, cd)
			}
			return cd.result
		},
		props : "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
				.split(" "),
		fixHooks : {},
		keyHooks : {
			props : "char charCode key keyCode".split(" "),
			filter : function(b1, b0) {
				if (b1.which == null) {
					b1.which = b0.charCode != null ? b0.charCode : b0.keyCode
				}
				return b1
			}
		},
		mouseHooks : {
			props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
					.split(" "),
			filter : function(b3, b2) {
				var b4, b5, b0, b1 = b2.button, b6 = b2.fromElement;
				if (b3.pageX == null && b2.clientX != null) {
					b4 = b3.target.ownerDocument || q;
					b5 = b4.documentElement;
					b0 = b4.body;
					b3.pageX = b2.clientX
							+ (b5 && b5.scrollLeft || b0 && b0.scrollLeft || 0)
							- (b5 && b5.clientLeft || b0 && b0.clientLeft || 0);
					b3.pageY = b2.clientY
							+ (b5 && b5.scrollTop || b0 && b0.scrollTop || 0)
							- (b5 && b5.clientTop || b0 && b0.clientTop || 0)
				}
				if (!b3.relatedTarget && b6) {
					b3.relatedTarget = b6 === b3.target ? b2.toElement : b6
				}
				if (!b3.which && b1 !== aC) {
					b3.which = (b1 & 1 ? 1 : (b1 & 2 ? 3 : (b1 & 4 ? 2 : 0)))
				}
				return b3
			}
		},
		fix : function(b2) {
			if (b2[bH.expando]) {
				return b2
			}
			var b1, b5, b0 = b2, b3 = bH.event.fixHooks[b2.type] || {}, b4 = b3.props ? this.props
					.concat(b3.props)
					: this.props;
			b2 = bH.Event(b0);
			for (b1 = b4.length; b1;) {
				b5 = b4[--b1];
				b2[b5] = b0[b5]
			}
			if (!b2.target) {
				b2.target = b0.srcElement || q
			}
			if (b2.target.nodeType === 3) {
				b2.target = b2.target.parentNode
			}
			b2.metaKey = !!b2.metaKey;
			return b3.filter ? b3.filter(b2, b0) : b2
		},
		special : {
			ready : {
				setup : bH.bindReady
			},
			load : {
				noBubble : true
			},
			focus : {
				delegateType : "focusin"
			},
			blur : {
				delegateType : "focusout"
			},
			beforeunload : {
				setup : function(b2, b1, b0) {
					if (bH.isWindow(this)) {
						this.onbeforeunload = b0
					}
				},
				teardown : function(b1, b0) {
					if (this.onbeforeunload === b0) {
						this.onbeforeunload = null
					}
				}
			}
		},
		simulate : function(b1, b3, b2, b0) {
			var b4 = bH.extend(new bH.Event(), b2, {
				type : b1,
				isSimulated : true,
				originalEvent : {}
			});
			if (b0) {
				bH.event.trigger(b4, null, b3)
			} else {
				bH.event.dispatch.call(b3, b4)
			}
			if (b4.isDefaultPrevented()) {
				b2.preventDefault()
			}
		}
	};
	bH.event.handle = bH.event.dispatch;
	bH.removeEvent = q.removeEventListener ? function(b1, b0, b2) {
		if (b1.removeEventListener) {
			b1.removeEventListener(b0, b2, false)
		}
	} : function(b2, b1, b3) {
		var b0 = "on" + b1;
		if (b2.detachEvent) {
			if (typeof b2[b0] === "undefined") {
				b2[b0] = null
			}
			b2.detachEvent(b0, b3)
		}
	};
	bH.Event = function(b1, b0) {
		if (!(this instanceof bH.Event)) {
			return new bH.Event(b1, b0)
		}
		if (b1 && b1.type) {
			this.originalEvent = b1;
			this.type = b1.type;
			this.isDefaultPrevented = (b1.defaultPrevented
					|| b1.returnValue === false || b1.getPreventDefault
					&& b1.getPreventDefault()) ? S : Y
		} else {
			this.type = b1
		}
		if (b0) {
			bH.extend(this, b0)
		}
		this.timeStamp = b1 && b1.timeStamp || bH.now();
		this[bH.expando] = true
	};
	function Y() {
		return false
	}
	function S() {
		return true
	}
	bH.Event.prototype = {
		preventDefault : function() {
			this.isDefaultPrevented = S;
			var b0 = this.originalEvent;
			if (!b0) {
				return
			}
			if (b0.preventDefault) {
				b0.preventDefault()
			} else {
				b0.returnValue = false
			}
		},
		stopPropagation : function() {
			this.isPropagationStopped = S;
			var b0 = this.originalEvent;
			if (!b0) {
				return
			}
			if (b0.stopPropagation) {
				b0.stopPropagation()
			}
			b0.cancelBubble = true
		},
		stopImmediatePropagation : function() {
			this.isImmediatePropagationStopped = S;
			this.stopPropagation()
		},
		isDefaultPrevented : Y,
		isPropagationStopped : Y,
		isImmediatePropagationStopped : Y
	};
	bH
			.each(
					{
						mouseenter : "mouseover",
						mouseleave : "mouseout"
					},
					function(b1, b0) {
						bH.event.special[b1] = {
							delegateType : b0,
							bindType : b0,
							handle : function(b5) {
								var b3, b7 = this, b6 = b5.relatedTarget, b4 = b5.handleObj, b2 = b4.selector;
								if (!b6 || (b6 !== b7 && !bH.contains(b7, b6))) {
									b5.type = b4.origType;
									b3 = b4.handler.apply(this, arguments);
									b5.type = b0
								}
								return b3
							}
						}
					});
	if (!bH.support.submitBubbles) {
		bH.event.special.submit = {
			setup : function() {
				if (bH.nodeName(this, "form")) {
					return false
				}
				bH.event.add(this, "click._submit keypress._submit", function(
						b2) {
					var b1 = b2.target, b0 = bH.nodeName(b1, "input")
							|| bH.nodeName(b1, "button") ? b1.form : aC;
					if (b0 && !bH._data(b0, "_submit_attached")) {
						bH.event.add(b0, "submit._submit", function(b3) {
							b3._submit_bubble = true
						});
						bH._data(b0, "_submit_attached", true)
					}
				})
			},
			postDispatch : function(b0) {
				if (b0._submit_bubble) {
					delete b0._submit_bubble;
					if (this.parentNode && !b0.isTrigger) {
						bH.event.simulate("submit", this.parentNode, b0, true)
					}
				}
			},
			teardown : function() {
				if (bH.nodeName(this, "form")) {
					return false
				}
				bH.event.remove(this, "._submit")
			}
		}
	}
	if (!bH.support.changeBubbles) {
		bH.event.special.change = {
			setup : function() {
				if (bF.test(this.nodeName)) {
					if (this.type === "checkbox" || this.type === "radio") {
						bH.event.add(this, "propertychange._change", function(
								b0) {
							if (b0.originalEvent.propertyName === "checked") {
								this._just_changed = true
							}
						});
						bH.event.add(this, "click._change", function(b0) {
							if (this._just_changed && !b0.isTrigger) {
								this._just_changed = false
							}
							bH.event.simulate("change", this, b0, true)
						})
					}
					return false
				}
				bH.event.add(this, "beforeactivate._change", function(b1) {
					var b0 = b1.target;
					if (bF.test(b0.nodeName)
							&& !bH._data(b0, "_change_attached")) {
						bH.event.add(b0, "change._change", function(b2) {
							if (this.parentNode && !b2.isSimulated
									&& !b2.isTrigger) {
								bH.event.simulate("change", this.parentNode,
										b2, true)
							}
						});
						bH._data(b0, "_change_attached", true)
					}
				})
			},
			handle : function(b1) {
				var b0 = b1.target;
				if (this !== b0 || b1.isSimulated || b1.isTrigger
						|| (b0.type !== "radio" && b0.type !== "checkbox")) {
					return b1.handleObj.handler.apply(this, arguments)
				}
			},
			teardown : function() {
				bH.event.remove(this, "._change");
				return bF.test(this.nodeName)
			}
		}
	}
	if (!bH.support.focusinBubbles) {
		bH.each({
			focus : "focusin",
			blur : "focusout"
		}, function(b3, b0) {
			var b1 = 0, b2 = function(b4) {
				bH.event.simulate(b0, b4.target, bH.event.fix(b4), true)
			};
			bH.event.special[b0] = {
				setup : function() {
					if (b1++ === 0) {
						q.addEventListener(b3, b2, true)
					}
				},
				teardown : function() {
					if (--b1 === 0) {
						q.removeEventListener(b3, b2, true)
					}
				}
			}
		})
	}
	bH.fn
			.extend({
				on : function(b2, b0, b5, b4, b1) {
					var b6, b3;
					if (typeof b2 === "object") {
						if (typeof b0 !== "string") {
							b5 = b5 || b0;
							b0 = aC
						}
						for (b3 in b2) {
							this.on(b3, b0, b5, b2[b3], b1)
						}
						return this
					}
					if (b5 == null && b4 == null) {
						b4 = b0;
						b5 = b0 = aC
					} else {
						if (b4 == null) {
							if (typeof b0 === "string") {
								b4 = b5;
								b5 = aC
							} else {
								b4 = b5;
								b5 = b0;
								b0 = aC
							}
						}
					}
					if (b4 === false) {
						b4 = Y
					} else {
						if (!b4) {
							return this
						}
					}
					if (b1 === 1) {
						b6 = b4;
						b4 = function(b7) {
							bH().off(b7);
							return b6.apply(this, arguments)
						};
						b4.guid = b6.guid || (b6.guid = bH.guid++)
					}
					return this.each(function() {
						bH.event.add(this, b2, b4, b5, b0)
					})
				},
				one : function(b1, b0, b3, b2) {
					return this.on(b1, b0, b3, b2, 1)
				},
				off : function(b2, b0, b4) {
					var b1, b3;
					if (b2 && b2.preventDefault && b2.handleObj) {
						b1 = b2.handleObj;
						bH(b2.delegateTarget).off(
								b1.namespace ? b1.origType + "." + b1.namespace
										: b1.origType, b1.selector, b1.handler);
						return this
					}
					if (typeof b2 === "object") {
						for (b3 in b2) {
							this.off(b3, b0, b2[b3])
						}
						return this
					}
					if (b0 === false || typeof b0 === "function") {
						b4 = b0;
						b0 = aC
					}
					if (b4 === false) {
						b4 = Y
					}
					return this.each(function() {
						bH.event.remove(this, b2, b4, b0)
					})
				},
				bind : function(b0, b2, b1) {
					return this.on(b0, null, b2, b1)
				},
				unbind : function(b0, b1) {
					return this.off(b0, null, b1)
				},
				live : function(b0, b2, b1) {
					bH(this.context).on(b0, this.selector, b2, b1);
					return this
				},
				die : function(b0, b1) {
					bH(this.context).off(b0, this.selector || "**", b1);
					return this
				},
				delegate : function(b0, b1, b3, b2) {
					return this.on(b1, b0, b3, b2)
				},
				undelegate : function(b0, b1, b2) {
					return arguments.length == 1 ? this.off(b0, "**") : this
							.off(b1, b0 || "**", b2)
				},
				trigger : function(b0, b1) {
					return this.each(function() {
						bH.event.trigger(b0, b1, this)
					})
				},
				triggerHandler : function(b0, b1) {
					if (this[0]) {
						return bH.event.trigger(b0, b1, this[0], true)
					}
				},
				toggle : function(b3) {
					var b1 = arguments, b0 = b3.guid || bH.guid++, b2 = 0, b4 = function(
							b5) {
						var b6 = (bH._data(this, "lastToggle" + b3.guid) || 0)
								% b2;
						bH._data(this, "lastToggle" + b3.guid, b6 + 1);
						b5.preventDefault();
						return b1[b6].apply(this, arguments) || false
					};
					b4.guid = b0;
					while (b2 < b1.length) {
						b1[b2++].guid = b0
					}
					return this.click(b4)
				},
				hover : function(b0, b1) {
					return this.mouseenter(b0).mouseleave(b1 || b0)
				}
			});
	bH
			.each(
					("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu")
							.split(" "), function(b1, b0) {
						bH.fn[b0] = function(b3, b2) {
							if (b2 == null) {
								b2 = b3;
								b3 = null
							}
							return arguments.length > 0 ? this.on(b0, null, b3,
									b2) : this.trigger(b0)
						};
						if (a4.test(b0)) {
							bH.event.fixHooks[b0] = bH.event.keyHooks
						}
						if (bL.test(b0)) {
							bH.event.fixHooks[b0] = bH.event.mouseHooks
						}
					});
	/*
	 * Sizzle CSS Selector Engine Copyright 2012 jQuery Foundation and other
	 * contributors Released under the MIT license http://sizzlejs.com/
	 */
	(function(cQ, ch) {
		var cV, cp, cg, b3, b9, b7 = cQ.document, ca = b7.documentElement, cy = "undefined", cb = false, b8 = true, cf = 0, ck = [].slice, cU = [].push, cY = ("sizcache" + Math
				.random()).replace(".", ""), cB = "[\\x20\\t\\r\\n\\f]", cj = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", ci = cj
				.replace("w", "w#"), c3 = "([*^$|!~]?=)", cN = "\\[" + cB
				+ "*(" + cj + ")" + cB + "*(?:" + c3 + cB
				+ "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ci + ")|)|)" + cB
				+ "*\\]", c4 = ":("
				+ cj
				+ ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)", cD = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)", ce = cB
				+ "*([\\x20\\t\\r\\n\\f>+~])" + cB + "*", cd = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"
				+ cN + "|" + c4.replace(2, 7) + "|[^\\\\(),])+", cW = new RegExp(
				"^" + cB + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cB + "+$", "g"), cH = new RegExp(
				"^" + ce), cv = new RegExp(cd + "?(?=" + cB + "*,|$)", "g"), cL = new RegExp(
				"^(?:(?!,)(?:(?:^|,)" + cB + "*" + cd + ")*?|" + cB
						+ "*(.*?))(\\)|$)"), c1 = new RegExp(cd.slice(19, -6)
				+ "\\x20\\t\\r\\n\\f>+~])+|" + ce, "g"), cM = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, cR = /[\x20\t\r\n\f]*[+~]/, cZ = /:not\($/, cq = /h\d/i, cO = /input|select|textarea|button/i, cu = /\\(?!\\)/g, cG = {
			ID : new RegExp("^#(" + cj + ")"),
			CLASS : new RegExp("^\\.(" + cj + ")"),
			NAME : new RegExp("^\\[name=['\"]?(" + cj + ")['\"]?\\]"),
			TAG : new RegExp("^(" + cj.replace("[-", "[-\\*") + ")"),
			ATTR : new RegExp("^" + cN),
			PSEUDO : new RegExp("^" + c4),
			CHILD : new RegExp("^:(only|nth|last|first)-child(?:\\(" + cB
					+ "*(even|odd|(([+-]|)(\\d*)n|)" + cB + "*(?:([+-]|)" + cB
					+ "*(\\d+)|))" + cB + "*\\)|)", "i"),
			POS : new RegExp(cD, "ig"),
			needsContext : new RegExp("^" + cB + "*[>+~]|" + cD, "i")
		}, cT = {}, cr = [], cm = {}, cw = [], c0 = function(c5) {
			c5.sizzleFilter = true;
			return c5
		}, b4 = function(c5) {
			return function(c6) {
				return c6.nodeName.toLowerCase() === "input" && c6.type === c5
			}
		}, cs = function(c5) {
			return function(c7) {
				var c6 = c7.nodeName.toLowerCase();
				return (c6 === "input" || c6 === "button") && c7.type === c5
			}
		}, cJ = function(c5) {
			var c6 = false, c8 = b7.createElement("div");
			try {
				c6 = c5(c8)
			} catch (c7) {
			}
			c8 = null;
			return c6
		}, co = cJ(function(c6) {
			c6.innerHTML = "<select></select>";
			var c5 = typeof c6.lastChild.getAttribute("multiple");
			return c5 !== "boolean" && c5 !== "string"
		}), b1 = cJ(function(c6) {
			c6.id = cY + 0;
			c6.innerHTML = "<a name='" + cY + "'></a><div name='" + cY
					+ "'></div>";
			ca.insertBefore(c6, ca.firstChild);
			var c5 = b7.getElementsByName
					&& b7.getElementsByName(cY).length === 2 + b7
							.getElementsByName(cY + 0).length;
			b9 = !b7.getElementById(cY);
			ca.removeChild(c6);
			return c5
		}), b6 = cJ(function(c5) {
			c5.appendChild(b7.createComment(""));
			return c5.getElementsByTagName("*").length === 0
		}), cF = cJ(function(c5) {
			c5.innerHTML = "<a href='#'></a>";
			return c5.firstChild && typeof c5.firstChild.getAttribute !== cy
					&& c5.firstChild.getAttribute("href") === "#"
		}), cE = cJ(function(c5) {
			c5.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
			if (!c5.getElementsByClassName
					|| c5.getElementsByClassName("e").length === 0) {
				return false
			}
			c5.lastChild.className = "e";
			return c5.getElementsByClassName("e").length !== 1
		});
		var cP = function(c8, c5, da, dd) {
			da = da || [];
			c5 = c5 || b7;
			var db, c6, dc, c7, c9 = c5.nodeType;
			if (c9 !== 1 && c9 !== 9) {
				return []
			}
			if (!c8 || typeof c8 !== "string") {
				return da
			}
			dc = cl(c5);
			if (!dc && !dd) {
				if ((db = cM.exec(c8))) {
					if ((c7 = db[1])) {
						if (c9 === 9) {
							c6 = c5.getElementById(c7);
							if (c6 && c6.parentNode) {
								if (c6.id === c7) {
									da.push(c6);
									return da
								}
							} else {
								return da
							}
						} else {
							if (c5.ownerDocument
									&& (c6 = c5.ownerDocument
											.getElementById(c7)) && cC(c5, c6)
									&& c6.id === c7) {
								da.push(c6);
								return da
							}
						}
					} else {
						if (db[2]) {
							cU.apply(da, ck
									.call(c5.getElementsByTagName(c8), 0));
							return da
						} else {
							if ((c7 = db[3]) && cE && c5.getElementsByClassName) {
								cU.apply(da, ck.call(c5
										.getElementsByClassName(c7), 0));
								return da
							}
						}
					}
				}
			}
			return cX(c8, c5, da, dd, dc)
		};
		var cI = cP.selectors = {
			cacheLength : 50,
			match : cG,
			order : [ "ID", "TAG" ],
			attrHandle : {},
			createPseudo : c0,
			find : {
				ID : b9 ? function(c8, c7, c6) {
					if (typeof c7.getElementById !== cy && !c6) {
						var c5 = c7.getElementById(c8);
						return c5 && c5.parentNode ? [ c5 ] : []
					}
				}
						: function(c8, c7, c6) {
							if (typeof c7.getElementById !== cy && !c6) {
								var c5 = c7.getElementById(c8);
								return c5 ? c5.id === c8
										|| typeof c5.getAttributeNode !== cy
										&& c5.getAttributeNode("id").value === c8 ? [ c5 ]
										: ch
										: []
							}
						},
				TAG : b6 ? function(c5, c6) {
					if (typeof c6.getElementsByTagName !== cy) {
						return c6.getElementsByTagName(c5)
					}
				} : function(c5, c9) {
					var c8 = c9.getElementsByTagName(c5);
					if (c5 === "*") {
						var da, c7 = [], c6 = 0;
						for (; (da = c8[c6]); c6++) {
							if (da.nodeType === 1) {
								c7.push(da)
							}
						}
						return c7
					}
					return c8
				}
			},
			relative : {
				">" : {
					dir : "parentNode",
					first : true
				},
				" " : {
					dir : "parentNode"
				},
				"+" : {
					dir : "previousSibling",
					first : true
				},
				"~" : {
					dir : "previousSibling"
				}
			},
			preFilter : {
				ATTR : function(c5) {
					c5[1] = c5[1].replace(cu, "");
					c5[3] = (c5[4] || c5[5] || "").replace(cu, "");
					if (c5[2] === "~=") {
						c5[3] = " " + c5[3] + " "
					}
					return c5.slice(0, 4)
				},
				CHILD : function(c5) {
					c5[1] = c5[1].toLowerCase();
					if (c5[1] === "nth") {
						if (!c5[2]) {
							cP.error(c5[0])
						}
						c5[3] = +(c5[3] ? c5[4] + (c5[5] || 1)
								: 2 * (c5[2] === "even" || c5[2] === "odd"));
						c5[4] = +((c5[6] + c5[7]) || c5[2] === "odd")
					} else {
						if (c5[2]) {
							cP.error(c5[0])
						}
					}
					return c5
				},
				PSEUDO : function(c5) {
					var c6, c7 = c5[4];
					if (cG.CHILD.test(c5[0])) {
						return null
					}
					if (c7 && (c6 = cL.exec(c7)) && c6.pop()) {
						c5[0] = c5[0].slice(0, c6[0].length - c7.length - 1);
						c7 = c6[0].slice(0, -1)
					}
					c5.splice(2, 3, c7 || c5[3]);
					return c5
				}
			},
			filter : {
				ID : b9 ? function(c5) {
					c5 = c5.replace(cu, "");
					return function(c6) {
						return c6.getAttribute("id") === c5
					}
				} : function(c5) {
					c5 = c5.replace(cu, "");
					return function(c7) {
						var c6 = typeof c7.getAttributeNode !== cy
								&& c7.getAttributeNode("id");
						return c6 && c6.value === c5
					}
				},
				TAG : function(c5) {
					if (c5 === "*") {
						return function() {
							return true
						}
					}
					c5 = c5.replace(cu, "").toLowerCase();
					return function(c6) {
						return c6.nodeName && c6.nodeName.toLowerCase() === c5
					}
				},
				CLASS : function(c5) {
					var c6 = cT[c5];
					if (!c6) {
						c6 = cT[c5] = new RegExp("(^|" + cB + ")" + c5 + "("
								+ cB + "|$)");
						cr.push(c5);
						if (cr.length > cI.cacheLength) {
							delete cT[cr.shift()]
						}
					}
					return function(c7) {
						return c6.test(c7.className
								|| (typeof c7.getAttribute !== cy && c7
										.getAttribute("class")) || "")
					}
				},
				ATTR : function(c7, c6, c5) {
					if (!c6) {
						return function(c8) {
							return cP.attr(c8, c7) != null
						}
					}
					return function(c9) {
						var c8 = cP.attr(c9, c7), da = c8 + "";
						if (c8 == null) {
							return c6 === "!="
						}
						switch (c6) {
						case "=":
							return da === c5;
						case "!=":
							return da !== c5;
						case "^=":
							return c5 && da.indexOf(c5) === 0;
						case "*=":
							return c5 && da.indexOf(c5) > -1;
						case "$=":
							return c5
									&& da.substr(da.length - c5.length) === c5;
						case "~=":
							return (" " + da + " ").indexOf(c5) > -1;
						case "|=":
							return da === c5
									|| da.substr(0, c5.length + 1) === c5 + "-"
						}
					}
				},
				CHILD : function(c6, c8, c9, c7) {
					if (c6 === "nth") {
						var c5 = cf++;
						return function(dd) {
							var da, de, dc = 0, db = dd;
							if (c9 === 1 && c7 === 0) {
								return true
							}
							da = dd.parentNode;
							if (da && (da[cY] !== c5 || !dd.sizset)) {
								for (db = da.firstChild; db; db = db.nextSibling) {
									if (db.nodeType === 1) {
										db.sizset = ++dc;
										if (db === dd) {
											break
										}
									}
								}
								da[cY] = c5
							}
							de = dd.sizset - c7;
							if (c9 === 0) {
								return de === 0
							} else {
								return (de % c9 === 0 && de / c9 >= 0)
							}
						}
					}
					return function(db) {
						var da = db;
						switch (c6) {
						case "only":
						case "first":
							while ((da = da.previousSibling)) {
								if (da.nodeType === 1) {
									return false
								}
							}
							if (c6 === "first") {
								return true
							}
							da = db;
						case "last":
							while ((da = da.nextSibling)) {
								if (da.nodeType === 1) {
									return false
								}
							}
							return true
						}
					}
				},
				PSEUDO : function(c9, c8, c6, c5) {
					var c7 = cI.pseudos[c9] || cI.pseudos[c9.toLowerCase()];
					if (!c7) {
						cP.error("unsupported pseudo: " + c9)
					}
					if (!c7.sizzleFilter) {
						return c7
					}
					return c7(c8, c6, c5)
				}
			},
			pseudos : {
				not : c0(function(c5, c7, c6) {
					var c8 = cc(c5.replace(cW, "$1"), c7, c6);
					return function(c9) {
						return !c8(c9)
					}
				}),
				enabled : function(c5) {
					return c5.disabled === false
				},
				disabled : function(c5) {
					return c5.disabled === true
				},
				checked : function(c5) {
					var c6 = c5.nodeName.toLowerCase();
					return (c6 === "input" && !!c5.checked)
							|| (c6 === "option" && !!c5.selected)
				},
				selected : function(c5) {
					if (c5.parentNode) {
						c5.parentNode.selectedIndex
					}
					return c5.selected === true
				},
				parent : function(c5) {
					return !cI.pseudos.empty(c5)
				},
				empty : function(c6) {
					var c5;
					c6 = c6.firstChild;
					while (c6) {
						if (c6.nodeName > "@" || (c5 = c6.nodeType) === 3
								|| c5 === 4) {
							return false
						}
						c6 = c6.nextSibling
					}
					return true
				},
				contains : c0(function(c5) {
					return function(c6) {
						return (c6.textContent || c6.innerText || b0(c6))
								.indexOf(c5) > -1
					}
				}),
				has : c0(function(c5) {
					return function(c6) {
						return cP(c5, c6).length > 0
					}
				}),
				header : function(c5) {
					return cq.test(c5.nodeName)
				},
				text : function(c7) {
					var c6, c5;
					return c7.nodeName.toLowerCase() === "input"
							&& (c6 = c7.type) === "text"
							&& ((c5 = c7.getAttribute("type")) == null || c5
									.toLowerCase() === c6)
				},
				radio : b4("radio"),
				checkbox : b4("checkbox"),
				file : b4("file"),
				password : b4("password"),
				image : b4("image"),
				submit : cs("submit"),
				reset : cs("reset"),
				button : function(c6) {
					var c5 = c6.nodeName.toLowerCase();
					return c5 === "input" && c6.type === "button"
							|| c5 === "button"
				},
				input : function(c5) {
					return cO.test(c5.nodeName)
				},
				focus : function(c5) {
					var c6 = c5.ownerDocument;
					return c5 === c6.activeElement
							&& (!c6.hasFocus || c6.hasFocus())
							&& !!(c5.type || c5.href)
				},
				active : function(c5) {
					return c5 === c5.ownerDocument.activeElement
				}
			},
			setFilters : {
				first : function(c7, c6, c5) {
					return c5 ? c7.slice(1) : [ c7[0] ]
				},
				last : function(c8, c7, c6) {
					var c5 = c8.pop();
					return c6 ? c8 : [ c5 ]
				},
				even : function(da, c9, c8) {
					var c7 = [], c6 = c8 ? 1 : 0, c5 = da.length;
					for (; c6 < c5; c6 = c6 + 2) {
						c7.push(da[c6])
					}
					return c7
				},
				odd : function(da, c9, c8) {
					var c7 = [], c6 = c8 ? 0 : 1, c5 = da.length;
					for (; c6 < c5; c6 = c6 + 2) {
						c7.push(da[c6])
					}
					return c7
				},
				lt : function(c7, c6, c5) {
					return c5 ? c7.slice(+c6) : c7.slice(0, +c6)
				},
				gt : function(c7, c6, c5) {
					return c5 ? c7.slice(0, +c6 + 1) : c7.slice(+c6 + 1)
				},
				eq : function(c8, c7, c6) {
					var c5 = c8.splice(+c7, 1);
					return c6 ? c8 : c5
				}
			}
		};
		cI.setFilters.nth = cI.setFilters.eq;
		cI.filters = cI.pseudos;
		if (!cF) {
			cI.attrHandle = {
				href : function(c5) {
					return c5.getAttribute("href", 2)
				},
				type : function(c5) {
					return c5.getAttribute("type")
				}
			}
		}
		if (b1) {
			cI.order.push("NAME");
			cI.find.NAME = function(c5, c6) {
				if (typeof c6.getElementsByName !== cy) {
					return c6.getElementsByName(c5)
				}
			}
		}
		if (cE) {
			cI.order.splice(1, 0, "CLASS");
			cI.find.CLASS = function(c7, c6, c5) {
				if (typeof c6.getElementsByClassName !== cy && !c5) {
					return c6.getElementsByClassName(c7)
				}
			}
		}
		try {
			ck.call(ca.childNodes, 0)[0].nodeType
		} catch (c2) {
			ck = function(c6) {
				var c7, c5 = [];
				for (; (c7 = this[c6]); c6++) {
					c5.push(c7)
				}
				return c5
			}
		}
		var cl = cP.isXML = function(c5) {
			var c6 = c5 && (c5.ownerDocument || c5).documentElement;
			return c6 ? c6.nodeName !== "HTML" : false
		};
		var cC = cP.contains = ca.compareDocumentPosition ? function(c6, c5) {
			return !!(c6.compareDocumentPosition(c5) & 16)
		}
				: ca.contains ? function(c6, c5) {
					var c8 = c6.nodeType === 9 ? c6.documentElement : c6, c7 = c5.parentNode;
					return c6 === c7
							|| !!(c7 && c7.nodeType === 1 && c8.contains && c8
									.contains(c7))
				}
						: function(c6, c5) {
							while ((c5 = c5.parentNode)) {
								if (c5 === c6) {
									return true
								}
							}
							return false
						};
		var b0 = cP.getText = function(c9) {
			var c8, c6 = "", c7 = 0, c5 = c9.nodeType;
			if (c5) {
				if (c5 === 1 || c5 === 9 || c5 === 11) {
					if (typeof c9.textContent === "string") {
						return c9.textContent
					} else {
						for (c9 = c9.firstChild; c9; c9 = c9.nextSibling) {
							c6 += b0(c9)
						}
					}
				} else {
					if (c5 === 3 || c5 === 4) {
						return c9.nodeValue
					}
				}
			} else {
				for (; (c8 = c9[c7]); c7++) {
					c6 += b0(c8)
				}
			}
			return c6
		};
		cP.attr = function(c8, c7) {
			var c5, c6 = cl(c8);
			if (!c6) {
				c7 = c7.toLowerCase()
			}
			if (cI.attrHandle[c7]) {
				return cI.attrHandle[c7](c8)
			}
			if (co || c6) {
				return c8.getAttribute(c7)
			}
			c5 = c8.getAttributeNode(c7);
			return c5 ? typeof c8[c7] === "boolean" ? c8[c7] ? c7 : null
					: c5.specified ? c5.value : null : null
		};
		cP.error = function(c5) {
			throw new Error("Syntax error, unrecognized expression: " + c5)
		};
		[ 0, 0 ].sort(function() {
			return (b8 = 0)
		});
		if (ca.compareDocumentPosition) {
			cg = function(c6, c5) {
				if (c6 === c5) {
					cb = true;
					return 0
				}
				return (!c6.compareDocumentPosition
						|| !c5.compareDocumentPosition ? c6.compareDocumentPosition
						: c6.compareDocumentPosition(c5) & 4) ? -1 : 1
			}
		} else {
			cg = function(dd, dc) {
				if (dd === dc) {
					cb = true;
					return 0
				} else {
					if (dd.sourceIndex && dc.sourceIndex) {
						return dd.sourceIndex - dc.sourceIndex
					}
				}
				var da, c6, c7 = [], c5 = [], c9 = dd.parentNode, db = dc.parentNode, de = c9;
				if (c9 === db) {
					return b3(dd, dc)
				} else {
					if (!c9) {
						return -1
					} else {
						if (!db) {
							return 1
						}
					}
				}
				while (de) {
					c7.unshift(de);
					de = de.parentNode
				}
				de = db;
				while (de) {
					c5.unshift(de);
					de = de.parentNode
				}
				da = c7.length;
				c6 = c5.length;
				for (var c8 = 0; c8 < da && c8 < c6; c8++) {
					if (c7[c8] !== c5[c8]) {
						return b3(c7[c8], c5[c8])
					}
				}
				return c8 === da ? b3(dd, c5[c8], -1) : b3(c7[c8], dc, 1)
			};
			b3 = function(c6, c5, c7) {
				if (c6 === c5) {
					return c7
				}
				var c8 = c6.nextSibling;
				while (c8) {
					if (c8 === c5) {
						return -1
					}
					c8 = c8.nextSibling
				}
				return 1
			}
		}
		cP.uniqueSort = function(c6) {
			var c7, c5 = 1;
			if (cg) {
				cb = b8;
				c6.sort(cg);
				if (cb) {
					for (; (c7 = c6[c5]); c5++) {
						if (c7 === c6[c5 - 1]) {
							c6.splice(c5--, 1)
						}
					}
				}
			}
			return c6
		};
		function cn(c6, da, c9, c7) {
			var c8 = 0, c5 = da.length;
			for (; c8 < c5; c8++) {
				cP(c6, da[c8], c9, c7)
			}
		}
		function cK(c5, c7, db, dc, c6, da) {
			var c8, c9 = cI.setFilters[c7.toLowerCase()];
			if (!c9) {
				cP.error(c7)
			}
			if (c5 || !(c8 = c6)) {
				cn(c5 || "*", dc, (c8 = []), c6)
			}
			return c8.length > 0 ? c9(c8, db, da) : []
		}
		function cS(df, c5, dd, c7, dj) {
			var da, c6, c9, dl, dc, dk, de, di, dg = 0, dh = dj.length, c8 = cG.POS, db = new RegExp(
					"^" + c8.source + "(?!" + cB + ")", "i"), dm = function() {
				var dp = 1, dn = arguments.length - 2;
				for (; dp < dn; dp++) {
					if (arguments[dp] === ch) {
						da[dp] = ch
					}
				}
			};
			for (; dg < dh; dg++) {
				c8.exec("");
				df = dj[dg];
				dl = [];
				c9 = 0;
				dc = c7;
				while ((da = c8.exec(df))) {
					di = c8.lastIndex = da.index + da[0].length;
					if (di > c9) {
						de = df.slice(c9, da.index);
						c9 = di;
						dk = [ c5 ];
						if (cH.test(de)) {
							if (dc) {
								dk = dc
							}
							dc = c7
						}
						if ((c6 = cZ.test(de))) {
							de = de.slice(0, -5).replace(cH, "$&*")
						}
						if (da.length > 1) {
							da[0].replace(db, dm)
						}
						dc = cK(de, da[1], da[2], dk, dc, c6)
					}
				}
				if (dc) {
					dl = dl.concat(dc);
					if ((de = df.slice(c9)) && de !== ")") {
						if (cH.test(de)) {
							cn(de, dl, dd, c7)
						} else {
							cP(de, c5, dd, c7 ? c7.concat(dc) : dc)
						}
					} else {
						cU.apply(dd, dl)
					}
				} else {
					cP(df, c5, dd, c7)
				}
			}
			return dh === 1 ? dd : cP.uniqueSort(dd)
		}
		function b2(db, c7, de) {
			var dg, df, dh, c9 = [], dc = 0, dd = cL.exec(db), c6 = !dd.pop()
					&& !dd.pop(), di = c6 && db.match(cv) || [ "" ], c5 = cI.preFilter, c8 = cI.filter, da = !de
					&& c7 !== b7;
			for (; (df = di[dc]) != null && c6; dc++) {
				c9.push(dg = []);
				if (da) {
					df = " " + df
				}
				while (df) {
					c6 = false;
					if ((dd = cH.exec(df))) {
						df = df.slice(dd[0].length);
						c6 = dg.push({
							part : dd.pop().replace(cW, " "),
							captures : dd
						})
					}
					for (dh in c8) {
						if ((dd = cG[dh].exec(df))
								&& (!c5[dh] || (dd = c5[dh](dd, c7, de)))) {
							df = df.slice(dd.shift().length);
							c6 = dg.push({
								part : dh,
								captures : dd
							})
						}
					}
					if (!c6) {
						break
					}
				}
			}
			if (!c6) {
				cP.error(db)
			}
			return c9
		}
		function cz(c9, c8, c7) {
			var c5 = c8.dir, c6 = cf++;
			if (!c9) {
				c9 = function(da) {
					return da === c7
				}
			}
			return c8.first ? function(db, da) {
				while ((db = db[c5])) {
					if (db.nodeType === 1) {
						return c9(db, da) && db
					}
				}
			}
					: function(dc, db) {
						var da, dd = c6 + "." + cp, de = dd + "." + cV;
						while ((dc = dc[c5])) {
							if (dc.nodeType === 1) {
								if ((da = dc[cY]) === de) {
									return dc.sizset
								} else {
									if (typeof da === "string"
											&& da.indexOf(dd) === 0) {
										if (dc.sizset) {
											return dc
										}
									} else {
										dc[cY] = de;
										if (c9(dc, db)) {
											dc.sizset = true;
											return dc
										}
										dc.sizset = false
									}
								}
							}
						}
					}
		}
		function cx(c5, c6) {
			return c5 ? function(c9, c8) {
				var c7 = c6(c9, c8);
				return c7 && c5(c7 === true ? c9 : c7, c8)
			} : c6
		}
		function cA(da, c8, c5) {
			var c7, c9, c6 = 0;
			for (; (c7 = da[c6]); c6++) {
				if (cI.relative[c7.part]) {
					c9 = cz(c9, cI.relative[c7.part], c8)
				} else {
					c7.captures.push(c8, c5);
					c9 = cx(c9, cI.filter[c7.part].apply(null, c7.captures))
				}
			}
			return c9
		}
		function b5(c5) {
			return function(c8, c7) {
				var c9, c6 = 0;
				for (; (c9 = c5[c6]); c6++) {
					if (c9(c8, c7)) {
						return true
					}
				}
				return false
			}
		}
		var cc = cP.compile = function(c5, c8, c6) {
			var db, da, c7, c9 = cm[c5];
			if (c9 && c9.context === c8) {
				return c9
			}
			da = b2(c5, c8, c6);
			for (c7 = 0; (db = da[c7]); c7++) {
				da[c7] = cA(db, c8, c6)
			}
			c9 = cm[c5] = b5(da);
			c9.context = c8;
			c9.runs = c9.dirruns = 0;
			cw.push(c5);
			if (cw.length > cI.cacheLength) {
				delete cm[cw.shift()]
			}
			return c9
		};
		cP.matches = function(c6, c5) {
			return cP(c6, null, null, c5)
		};
		cP.matchesSelector = function(c5, c6) {
			return cP(c6, null, null, [ c5 ]).length > 0
		};
		var cX = function(c9, c6, db, df, de) {
			c9 = c9.replace(cW, "$1");
			var c5, dg, dc, dh, c7, c8, dj, dk, da, dd = c9.match(cv), di = c9
					.match(c1), dl = c6.nodeType;
			if (cG.POS.test(c9)) {
				return cS(c9, c6, db, df, dd)
			}
			if (df) {
				c5 = ck.call(df, 0)
			} else {
				if (dd && dd.length === 1) {
					if (di.length > 1 && dl === 9 && !de
							&& (dd = cG.ID.exec(di[0]))) {
						c6 = cI.find.ID(dd[1], c6, de)[0];
						if (!c6) {
							return db
						}
						c9 = c9.slice(di.shift().length)
					}
					dk = ((dd = cR.exec(di[0])) && !dd.index && c6.parentNode)
							|| c6;
					da = di.pop();
					c8 = da.split(":not")[0];
					for (dc = 0, dh = cI.order.length; dc < dh; dc++) {
						dj = cI.order[dc];
						if ((dd = cG[dj].exec(c8))) {
							c5 = cI.find[dj]((dd[1] || "").replace(cu, ""), dk,
									de);
							if (c5 == null) {
								continue
							}
							if (c8 === da) {
								c9 = c9.slice(0, c9.length - da.length)
										+ c8.replace(cG[dj], "");
								if (!c9) {
									cU.apply(db, ck.call(c5, 0))
								}
							}
							break
						}
					}
				}
			}
			if (c9) {
				dg = cc(c9, c6, de);
				cp = dg.dirruns++;
				if (c5 == null) {
					c5 = cI.find.TAG("*", (cR.test(c9) && c6.parentNode) || c6)
				}
				for (dc = 0; (c7 = c5[dc]); dc++) {
					cV = dg.runs++;
					if (dg(c7, c6)) {
						db.push(c7)
					}
				}
			}
			return db
		};
		if (b7.querySelectorAll) {
			(function() {
				var da, db = cX, c9 = /'|\\/g, c7 = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, c6 = [], c5 = [ ":active" ], c8 = ca.matchesSelector
						|| ca.mozMatchesSelector
						|| ca.webkitMatchesSelector
						|| ca.oMatchesSelector || ca.msMatchesSelector;
				cJ(function(dc) {
					dc.innerHTML = "<select><option selected></option></select>";
					if (!dc.querySelectorAll("[selected]").length) {
						c6
								.push("\\["
										+ cB
										+ "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
					}
					if (!dc.querySelectorAll(":checked").length) {
						c6.push(":checked")
					}
				});
				cJ(function(dc) {
					dc.innerHTML = "<p test=''></p>";
					if (dc.querySelectorAll("[test^='']").length) {
						c6.push("[*^$]=" + cB + "*(?:\"\"|'')")
					}
					dc.innerHTML = "<input type='hidden'>";
					if (!dc.querySelectorAll(":enabled").length) {
						c6.push(":enabled", ":disabled")
					}
				});
				c6 = c6.length && new RegExp(c6.join("|"));
				cX = function(dh, dd, di, dk, dj) {
					if (!dk && !dj && (!c6 || !c6.test(dh))) {
						if (dd.nodeType === 9) {
							try {
								cU.apply(di, ck
										.call(dd.querySelectorAll(dh), 0));
								return di
							} catch (dg) {
							}
						} else {
							if (dd.nodeType === 1
									&& dd.nodeName.toLowerCase() !== "object") {
								var df = dd.getAttribute("id"), dc = df || cY, de = cR
										.test(dh)
										&& dd.parentNode || dd;
								if (df) {
									dc = dc.replace(c9, "\\$&")
								} else {
									dd.setAttribute("id", dc)
								}
								try {
									cU.apply(di, ck
											.call(de.querySelectorAll(dh
													.replace(cv, "[id='" + dc
															+ "'] $&")), 0));
									return di
								} catch (dg) {
								} finally {
									if (!df) {
										dd.removeAttribute("id")
									}
								}
							}
						}
					}
					return db(dh, dd, di, dk, dj)
				};
				if (c8) {
					cJ(function(dd) {
						da = c8.call(dd, "div");
						try {
							c8.call(dd, "[test!='']:sizzle");
							c5.push(cI.match.PSEUDO)
						} catch (dc) {
						}
					});
					c5 = new RegExp(c5.join("|"));
					cP.matchesSelector = function(dd, df) {
						df = df.replace(c7, "='$1']");
						if (!cl(dd) && !c5.test(df) && (!c6 || !c6.test(df))) {
							try {
								var dc = c8.call(dd, df);
								if (dc || da || dd.document
										&& dd.document.nodeType !== 11) {
									return dc
								}
							} catch (de) {
							}
						}
						return cP(df, null, null, [ dd ]).length > 0
					}
				}
			})()
		}
		cP.attr = bH.attr;
		bH.find = cP;
		bH.expr = cP.selectors;
		bH.expr[":"] = bH.expr.pseudos;
		bH.unique = cP.uniqueSort;
		bH.text = cP.getText;
		bH.isXMLDoc = cP.isXML;
		bH.contains = cP.contains
	})(a3);
	var ah = /Until$/, br = /^(?:parents|prev(?:Until|All))/, am = /^.[^:#\[\.,]*$/, A = bH.expr.match.needsContext, bv = {
		children : true,
		contents : true,
		next : true,
		prev : true
	};
	bH.fn.extend({
		find : function(b0) {
			var b4, b1, b6, b7, b5, b3, b2 = this;
			if (typeof b0 !== "string") {
				return bH(b0).filter(function() {
					for (b4 = 0, b1 = b2.length; b4 < b1; b4++) {
						if (bH.contains(b2[b4], this)) {
							return true
						}
					}
				})
			}
			b3 = this.pushStack("", "find", b0);
			for (b4 = 0, b1 = this.length; b4 < b1; b4++) {
				b6 = b3.length;
				bH.find(b0, this[b4], b3);
				if (b4 > 0) {
					for (b7 = b6; b7 < b3.length; b7++) {
						for (b5 = 0; b5 < b6; b5++) {
							if (b3[b5] === b3[b7]) {
								b3.splice(b7--, 1);
								break
							}
						}
					}
				}
			}
			return b3
		},
		has : function(b3) {
			var b2, b1 = bH(b3, this), b0 = b1.length;
			return this.filter(function() {
				for (b2 = 0; b2 < b0; b2++) {
					if (bH.contains(this, b1[b2])) {
						return true
					}
				}
			})
		},
		not : function(b0) {
			return this.pushStack(aN(this, b0, false), "not", b0)
		},
		filter : function(b0) {
			return this.pushStack(aN(this, b0, true), "filter", b0)
		},
		is : function(b0) {
			return !!b0
					&& (typeof b0 === "string" ? A.test(b0) ? bH(b0,
							this.context).index(this[0]) >= 0 : bH.filter(b0,
							this).length > 0 : this.filter(b0).length > 0)
		},
		closest : function(b4, b3) {
			var b5, b2 = 0, b0 = this.length, b1 = [], b6 = A.test(b4)
					|| typeof b4 !== "string" ? bH(b4, b3 || this.context) : 0;
			for (; b2 < b0; b2++) {
				b5 = this[b2];
				while (b5 && b5.ownerDocument && b5 !== b3
						&& b5.nodeType !== 11) {
					if (b6 ? b6.index(b5) > -1 : bH.find
							.matchesSelector(b5, b4)) {
						b1.push(b5);
						break
					}
					b5 = b5.parentNode
				}
			}
			b1 = b1.length > 1 ? bH.unique(b1) : b1;
			return this.pushStack(b1, "closest", b4)
		},
		index : function(b0) {
			if (!b0) {
				return (this[0] && this[0].parentNode) ? this.prevAll().length
						: -1
			}
			if (typeof b0 === "string") {
				return bH.inArray(this[0], bH(b0))
			}
			return bH.inArray(b0.jquery ? b0[0] : b0, this)
		},
		add : function(b0, b1) {
			var b3 = typeof b0 === "string" ? bH(b0, b1) : bH.makeArray(b0
					&& b0.nodeType ? [ b0 ] : b0), b2 = bH
					.merge(this.get(), b3);
			return this.pushStack(aS(b3[0]) || aS(b2[0]) ? b2 : bH.unique(b2))
		},
		addBack : function(b0) {
			return this.add(b0 == null ? this.prevObject : this.prevObject
					.filter(b0))
		}
	});
	bH.fn.andSelf = bH.fn.addBack;
	function aS(b0) {
		return !b0 || !b0.parentNode || b0.parentNode.nodeType === 11
	}
	function aZ(b1, b0) {
		do {
			b1 = b1[b0]
		} while (b1 && b1.nodeType !== 1);
		return b1
	}
	bH.each({
		parent : function(b1) {
			var b0 = b1.parentNode;
			return b0 && b0.nodeType !== 11 ? b0 : null
		},
		parents : function(b0) {
			return bH.dir(b0, "parentNode")
		},
		parentsUntil : function(b1, b0, b2) {
			return bH.dir(b1, "parentNode", b2)
		},
		next : function(b0) {
			return aZ(b0, "nextSibling")
		},
		prev : function(b0) {
			return aZ(b0, "previousSibling")
		},
		nextAll : function(b0) {
			return bH.dir(b0, "nextSibling")
		},
		prevAll : function(b0) {
			return bH.dir(b0, "previousSibling")
		},
		nextUntil : function(b1, b0, b2) {
			return bH.dir(b1, "nextSibling", b2)
		},
		prevUntil : function(b1, b0, b2) {
			return bH.dir(b1, "previousSibling", b2)
		},
		siblings : function(b0) {
			return bH.sibling((b0.parentNode || {}).firstChild, b0)
		},
		children : function(b0) {
			return bH.sibling(b0.firstChild)
		},
		contents : function(b0) {
			return bH.nodeName(b0, "iframe") ? b0.contentDocument
					|| b0.contentWindow.document : bH.merge([], b0.childNodes)
		}
	}, function(b0, b1) {
		bH.fn[b0] = function(b4, b2) {
			var b3 = bH.map(this, b1, b4);
			if (!ah.test(b0)) {
				b2 = b4
			}
			if (b2 && typeof b2 === "string") {
				b3 = bH.filter(b2, b3)
			}
			b3 = this.length > 1 && !bv[b0] ? bH.unique(b3) : b3;
			if (this.length > 1 && br.test(b0)) {
				b3 = b3.reverse()
			}
			return this.pushStack(b3, b0, a5.call(arguments).join(","))
		}
	});
	bH
			.extend({
				filter : function(b2, b0, b1) {
					if (b1) {
						b2 = ":not(" + b2 + ")"
					}
					return b0.length === 1 ? bH.find.matchesSelector(b0[0], b2) ? [ b0[0] ]
							: []
							: bH.find.matches(b2, b0)
				},
				dir : function(b2, b1, b4) {
					var b0 = [], b3 = b2[b1];
					while (b3
							&& b3.nodeType !== 9
							&& (b4 === aC || b3.nodeType !== 1 || !bH(b3)
									.is(b4))) {
						if (b3.nodeType === 1) {
							b0.push(b3)
						}
						b3 = b3[b1]
					}
					return b0
				},
				sibling : function(b2, b1) {
					var b0 = [];
					for (; b2; b2 = b2.nextSibling) {
						if (b2.nodeType === 1 && b2 !== b1) {
							b0.push(b2)
						}
					}
					return b0
				}
			});
	function aN(b3, b2, b0) {
		b2 = b2 || 0;
		if (bH.isFunction(b2)) {
			return bH.grep(b3, function(b5, b4) {
				var b6 = !!b2.call(b5, b4, b5);
				return b6 === b0
			})
		} else {
			if (b2.nodeType) {
				return bH.grep(b3, function(b5, b4) {
					return (b5 === b2) === b0
				})
			} else {
				if (typeof b2 === "string") {
					var b1 = bH.grep(b3, function(b4) {
						return b4.nodeType === 1
					});
					if (am.test(b2)) {
						return bH.filter(b2, b1, !b0)
					} else {
						b2 = bH.filter(b2, b1)
					}
				}
			}
		}
		return bH.grep(b3, function(b5, b4) {
			return (bH.inArray(b5, b2) >= 0) === b0
		})
	}
	function C(b0) {
		var b2 = d.split("|"), b1 = b0.createDocumentFragment();
		if (b1.createElement) {
			while (b2.length) {
				b1.createElement(b2.pop())
			}
		}
		return b1
	}
	var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", aw = / jQuery\d+="(?:null|\d+)"/g, bZ = /^\s+/, az = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, r = /<([\w:]+)/, bU = /<tbody/i, K = /<|&#?\w+;/, ak = /<(?:script|style|link)/i, aq = /<(?:script|object|embed|option|style)/i, L = new RegExp(
			"<(?:" + d + ")[\\s/>]", "i"), aF = /^(?:checkbox|radio)$/, bS = /checked\s*(?:[^=]|=\s*.checked.)/i, bx = /\/(java|ecma)script/i, aI = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, U = {
		option : [ 1, "<select multiple='multiple'>", "</select>" ],
		legend : [ 1, "<fieldset>", "</fieldset>" ],
		thead : [ 1, "<table>", "</table>" ],
		tr : [ 2, "<table><tbody>", "</tbody></table>" ],
		td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col : [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area : [ 1, "<map>", "</map>" ],
		_default : [ 0, "", "" ]
	}, aR = C(q), n = aR.appendChild(q.createElement("div"));
	U.optgroup = U.option;
	U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
	U.th = U.td;
	if (!bH.support.htmlSerialize) {
		U._default = [ 1, "X<div>", "</div>" ]
	}
	bH.fn.extend({
		text : function(b0) {
			return bH.access(this, function(b1) {
				return b1 === aC ? bH.text(this) : this.empty().append(
						(this[0] && this[0].ownerDocument || q)
								.createTextNode(b1))
			}, null, b0, arguments.length)
		},
		wrapAll : function(b0) {
			if (bH.isFunction(b0)) {
				return this.each(function(b2) {
					bH(this).wrapAll(b0.call(this, b2))
				})
			}
			if (this[0]) {
				var b1 = bH(b0, this[0].ownerDocument).eq(0).clone(true);
				if (this[0].parentNode) {
					b1.insertBefore(this[0])
				}
				b1.map(function() {
					var b2 = this;
					while (b2.firstChild && b2.firstChild.nodeType === 1) {
						b2 = b2.firstChild
					}
					return b2
				}).append(this)
			}
			return this
		},
		wrapInner : function(b0) {
			if (bH.isFunction(b0)) {
				return this.each(function(b1) {
					bH(this).wrapInner(b0.call(this, b1))
				})
			}
			return this.each(function() {
				var b1 = bH(this), b2 = b1.contents();
				if (b2.length) {
					b2.wrapAll(b0)
				} else {
					b1.append(b0)
				}
			})
		},
		wrap : function(b0) {
			var b1 = bH.isFunction(b0);
			return this.each(function(b2) {
				bH(this).wrapAll(b1 ? b0.call(this, b2) : b0)
			})
		},
		unwrap : function() {
			return this.parent().each(function() {
				if (!bH.nodeName(this, "body")) {
					bH(this).replaceWith(this.childNodes)
				}
			}).end()
		},
		append : function() {
			return this.domManip(arguments, true, function(b0) {
				if (this.nodeType === 1 || this.nodeType === 11) {
					this.appendChild(b0)
				}
			})
		},
		prepend : function() {
			return this.domManip(arguments, true, function(b0) {
				if (this.nodeType === 1 || this.nodeType === 11) {
					this.insertBefore(b0, this.firstChild)
				}
			})
		},
		before : function() {
			if (!aS(this[0])) {
				return this.domManip(arguments, false, function(b1) {
					this.parentNode.insertBefore(b1, this)
				})
			}
			if (arguments.length) {
				var b0 = bH.clean(arguments);
				return this.pushStack(bH.merge(b0, this), "before",
						this.selector)
			}
		},
		after : function() {
			if (!aS(this[0])) {
				return this.domManip(arguments, false, function(b1) {
					this.parentNode.insertBefore(b1, this.nextSibling)
				})
			}
			if (arguments.length) {
				var b0 = bH.clean(arguments);
				return this.pushStack(bH.merge(this, b0), "after",
						this.selector)
			}
		},
		remove : function(b0, b3) {
			var b2, b1 = 0;
			for (; (b2 = this[b1]) != null; b1++) {
				if (!b0 || bH.filter(b0, [ b2 ]).length) {
					if (!b3 && b2.nodeType === 1) {
						bH.cleanData(b2.getElementsByTagName("*"));
						bH.cleanData([ b2 ])
					}
					if (b2.parentNode) {
						b2.parentNode.removeChild(b2)
					}
				}
			}
			return this
		},
		empty : function() {
			var b1, b0 = 0;
			for (; (b1 = this[b0]) != null; b0++) {
				if (b1.nodeType === 1) {
					bH.cleanData(b1.getElementsByTagName("*"))
				}
				while (b1.firstChild) {
					b1.removeChild(b1.firstChild)
				}
			}
			return this
		},
		clone : function(b1, b0) {
			b1 = b1 == null ? false : b1;
			b0 = b0 == null ? b1 : b0;
			return this.map(function() {
				return bH.clone(this, b1, b0)
			})
		},
		html : function(b0) {
			return bH.access(this, function(b4) {
				var b3 = this[0] || {}, b2 = 0, b1 = this.length;
				if (b4 === aC) {
					return b3.nodeType === 1 ? b3.innerHTML.replace(aw, "")
							: aC
				}
				if (typeof b4 === "string" && !ak.test(b4)
						&& (bH.support.htmlSerialize || !L.test(b4))
						&& (bH.support.leadingWhitespace || !bZ.test(b4))
						&& !U[(r.exec(b4) || [ "", "" ])[1].toLowerCase()]) {
					b4 = b4.replace(az, "<$1></$2>");
					try {
						for (; b2 < b1; b2++) {
							b3 = this[b2] || {};
							if (b3.nodeType === 1) {
								bH.cleanData(b3.getElementsByTagName("*"));
								b3.innerHTML = b4
							}
						}
						b3 = 0
					} catch (b5) {
					}
				}
				if (b3) {
					this.empty().append(b4)
				}
			}, null, b0, arguments.length)
		},
		replaceWith : function(b0) {
			if (!aS(this[0])) {
				if (bH.isFunction(b0)) {
					return this.each(function(b3) {
						var b2 = bH(this), b1 = b2.html();
						b2.replaceWith(b0.call(this, b3, b1))
					})
				}
				if (typeof b0 !== "string") {
					b0 = bH(b0).detach()
				}
				return this.each(function() {
					var b2 = this.nextSibling, b1 = this.parentNode;
					bH(this).remove();
					if (b2) {
						bH(b2).before(b0)
					} else {
						bH(b1).append(b0)
					}
				})
			}
			return this.length ? this.pushStack(bH(bH.isFunction(b0) ? b0()
					: b0), "replaceWith", b0) : this
		},
		detach : function(b0) {
			return this.remove(b0, true)
		},
		domManip : function(b6, ca, b9) {
			b6 = [].concat.apply([], b6);
			var b2, b4, b5, b8, b3 = 0, b7 = b6[0], b1 = [], b0 = this.length;
			if (!bH.support.checkClone && b0 > 1 && typeof b7 === "string"
					&& bS.test(b7)) {
				return this.each(function() {
					bH(this).domManip(b6, ca, b9)
				})
			}
			if (bH.isFunction(b7)) {
				return this.each(function(cc) {
					var cb = bH(this);
					b6[0] = b7.call(this, cc, ca ? cb.html() : aC);
					cb.domManip(b6, ca, b9)
				})
			}
			if (this[0]) {
				b2 = bH.buildFragment(b6, this, b1);
				b5 = b2.fragment;
				b4 = b5.firstChild;
				if (b5.childNodes.length === 1) {
					b5 = b4
				}
				if (b4) {
					ca = ca && bH.nodeName(b4, "tr");
					for (b8 = b2.cacheable || b0 - 1; b3 < b0; b3++) {
						b9.call(ca && bH.nodeName(this[b3], "table") ? z(
								this[b3], "tbody") : this[b3], b3 === b8 ? b5
								: bH.clone(b5, true, true))
					}
				}
				b5 = b4 = null;
				if (b1.length) {
					bH.each(b1, function(cb, cc) {
						if (cc.src) {
							if (bH.ajax) {
								bH.ajax({
									url : cc.src,
									type : "GET",
									dataType : "script",
									async : false,
									global : false,
									"throws" : true
								})
							} else {
								bH.error("no ajax")
							}
						} else {
							bH.globalEval((cc.text || cc.textContent
									|| cc.innerHTML || "").replace(aI, ""))
						}
						if (cc.parentNode) {
							cc.parentNode.removeChild(cc)
						}
					})
				}
			}
			return this
		}
	});
	function z(b1, b0) {
		return b1.getElementsByTagName(b0)[0]
				|| b1.appendChild(b1.ownerDocument.createElement(b0))
	}
	function ap(b7, b1) {
		if (b1.nodeType !== 1 || !bH.hasData(b7)) {
			return
		}
		var b4, b3, b0, b6 = bH._data(b7), b5 = bH._data(b1, b6), b2 = b6.events;
		if (b2) {
			delete b5.handle;
			b5.events = {};
			for (b4 in b2) {
				for (b3 = 0, b0 = b2[b4].length; b3 < b0; b3++) {
					bH.event.add(b1, b4, b2[b4][b3])
				}
			}
		}
		if (b5.data) {
			b5.data = bH.extend({}, b5.data)
		}
	}
	function H(b1, b0) {
		var b2;
		if (b0.nodeType !== 1) {
			return
		}
		if (b0.clearAttributes) {
			b0.clearAttributes()
		}
		if (b0.mergeAttributes) {
			b0.mergeAttributes(b1)
		}
		b2 = b0.nodeName.toLowerCase();
		if (b2 === "object") {
			if (b0.parentNode) {
				b0.outerHTML = b1.outerHTML
			}
			if (bH.support.html5Clone
					&& (b1.innerHTML && !bH.trim(b0.innerHTML))) {
				b0.innerHTML = b1.innerHTML
			}
		} else {
			if (b2 === "input" && aF.test(b1.type)) {
				b0.defaultChecked = b0.checked = b1.checked;
				if (b0.value !== b1.value) {
					b0.value = b1.value
				}
			} else {
				if (b2 === "option") {
					b0.selected = b1.defaultSelected
				} else {
					if (b2 === "input" || b2 === "textarea") {
						b0.defaultValue = b1.defaultValue
					} else {
						if (b2 === "script" && b0.text !== b1.text) {
							b0.text = b1.text
						}
					}
				}
			}
		}
		b0.removeAttribute(bH.expando)
	}
	bH.buildFragment = function(b3, b4, b1) {
		var b2, b0, b5, b6 = b3[0];
		b4 = b4 || q;
		b4 = (b4[0] || b4).ownerDocument || b4[0] || b4;
		if (typeof b4.createDocumentFragment === "undefined") {
			b4 = q
		}
		if (b3.length === 1 && typeof b6 === "string" && b6.length < 512
				&& b4 === q && b6.charAt(0) === "<" && !aq.test(b6)
				&& (bH.support.checkClone || !bS.test(b6))
				&& (bH.support.html5Clone || !L.test(b6))) {
			b0 = true;
			b2 = bH.fragments[b6];
			b5 = b2 !== aC
		}
		if (!b2) {
			b2 = b4.createDocumentFragment();
			bH.clean(b3, b4, b2, b1);
			if (b0) {
				bH.fragments[b6] = b5 && b2
			}
		}
		return {
			fragment : b2,
			cacheable : b0
		}
	};
	bH.fragments = {};
	bH
			.each(
					{
						appendTo : "append",
						prependTo : "prepend",
						insertBefore : "before",
						insertAfter : "after",
						replaceAll : "replaceWith"
					},
					function(b0, b1) {
						bH.fn[b0] = function(b2) {
							var b4, b6 = 0, b5 = [], b8 = bH(b2), b3 = b8.length, b7 = this.length === 1
									&& this[0].parentNode;
							if ((b7 == null || b7 && b7.nodeType === 11
									&& b7.childNodes.length === 1)
									&& b3 === 1) {
								b8[b1](this[0]);
								return this
							} else {
								for (; b6 < b3; b6++) {
									b4 = (b6 > 0 ? this.clone(true) : this)
											.get();
									bH(b8[b6])[b1](b4);
									b5 = b5.concat(b4)
								}
								return this.pushStack(b5, b0, b8.selector)
							}
						}
					});
	function o(b0) {
		if (typeof b0.getElementsByTagName !== "undefined") {
			return b0.getElementsByTagName("*")
		} else {
			if (typeof b0.querySelectorAll !== "undefined") {
				return b0.querySelectorAll("*")
			} else {
				return []
			}
		}
	}
	function bT(b0) {
		if (aF.test(b0.type)) {
			b0.defaultChecked = b0.checked
		}
	}
	bH
			.extend({
				clone : function(b4, b6, b2) {
					var b0, b1, b3, b5;
					if (bH.support.html5Clone || bH.isXMLDoc(b4)
							|| !L.test("<" + b4.nodeName + ">")) {
						b5 = b4.cloneNode(true)
					} else {
						n.innerHTML = b4.outerHTML;
						n.removeChild(b5 = n.firstChild)
					}
					if ((!bH.support.noCloneEvent || !bH.support.noCloneChecked)
							&& (b4.nodeType === 1 || b4.nodeType === 11)
							&& !bH.isXMLDoc(b4)) {
						H(b4, b5);
						b0 = o(b4);
						b1 = o(b5);
						for (b3 = 0; b0[b3]; ++b3) {
							if (b1[b3]) {
								H(b0[b3], b1[b3])
							}
						}
					}
					if (b6) {
						ap(b4, b5);
						if (b2) {
							b0 = o(b4);
							b1 = o(b5);
							for (b3 = 0; b0[b3]; ++b3) {
								ap(b0[b3], b1[b3])
							}
						}
					}
					b0 = b1 = null;
					return b5
				},
				clean : function(cd, b2, b0, b3) {
					var b9, b5, cc, ch, b6, cg, b7, b4, b1, cb, cf, b8, ca = 0, ce = [];
					if (!b2 || typeof b2.createDocumentFragment === "undefined") {
						b2 = q
					}
					for (b5 = b2 === q && aR; (cc = cd[ca]) != null; ca++) {
						if (typeof cc === "number") {
							cc += ""
						}
						if (!cc) {
							continue
						}
						if (typeof cc === "string") {
							if (!K.test(cc)) {
								cc = b2.createTextNode(cc)
							} else {
								b5 = b5 || C(b2);
								b7 = b7
										|| b5.appendChild(b2
												.createElement("div"));
								cc = cc.replace(az, "<$1></$2>");
								ch = (r.exec(cc) || [ "", "" ])[1]
										.toLowerCase();
								b6 = U[ch] || U._default;
								cg = b6[0];
								b7.innerHTML = b6[1] + cc + b6[2];
								while (cg--) {
									b7 = b7.lastChild
								}
								if (!bH.support.tbody) {
									b4 = bU.test(cc);
									b1 = ch === "table" && !b4 ? b7.firstChild
											&& b7.firstChild.childNodes
											: b6[1] === "<table>" && !b4 ? b7.childNodes
													: [];
									for (b9 = b1.length - 1; b9 >= 0; --b9) {
										if (bH.nodeName(b1[b9], "tbody")
												&& !b1[b9].childNodes.length) {
											b1[b9].parentNode
													.removeChild(b1[b9])
										}
									}
								}
								if (!bH.support.leadingWhitespace
										&& bZ.test(cc)) {
									b7.insertBefore(b2.createTextNode(bZ
											.exec(cc)[0]), b7.firstChild)
								}
								cc = b7.childNodes;
								b7 = b5.lastChild
							}
						}
						if (cc.nodeType) {
							ce.push(cc)
						} else {
							ce = bH.merge(ce, cc)
						}
					}
					if (b7) {
						b5.removeChild(b7);
						cc = b7 = b5 = null
					}
					if (!bH.support.appendChecked) {
						for (ca = 0; (cc = ce[ca]) != null; ca++) {
							if (bH.nodeName(cc, "input")) {
								bT(cc)
							} else {
								if (typeof cc.getElementsByTagName !== "undefined") {
									bH.grep(cc.getElementsByTagName("input"),
											bT)
								}
							}
						}
					}
					if (b0) {
						cf = function(ci) {
							if (!ci.type || bx.test(ci.type)) {
								return b3 ? b3
										.push(ci.parentNode ? ci.parentNode
												.removeChild(ci) : ci) : b0
										.appendChild(ci)
							}
						};
						for (ca = 0; (cc = ce[ca]) != null; ca++) {
							if (!(bH.nodeName(cc, "script") && cf(cc))) {
								b0.appendChild(cc);
								if (typeof cc.getElementsByTagName !== "undefined") {
									b8 = bH.grep(bH.merge([], cc
											.getElementsByTagName("script")),
											cf);
									ce.splice.apply(ce, [ ca + 1, 0 ]
											.concat(b8));
									ca += b8.length
								}
							}
						}
					}
					return ce
				},
				cleanData : function(b1, b9) {
					var b4, b2, b3, b8, b5 = 0, ca = bH.expando, b0 = bH.cache, b6 = bH.support.deleteExpando, b7 = bH.event.special;
					for (; (b3 = b1[b5]) != null; b5++) {
						if (b9 || bH.acceptData(b3)) {
							b2 = b3[ca];
							b4 = b2 && b0[b2];
							if (b4) {
								if (b4.events) {
									for (b8 in b4.events) {
										if (b7[b8]) {
											bH.event.remove(b3, b8)
										} else {
											bH.removeEvent(b3, b8, b4.handle)
										}
									}
								}
								if (b0[b2]) {
									delete b0[b2];
									if (b6) {
										delete b3[ca]
									} else {
										if (b3.removeAttribute) {
											b3.removeAttribute(ca)
										} else {
											b3[ca] = null
										}
									}
									bH.deletedIds.push(b2)
								}
							}
						}
					}
				}
			});
	(function() {
		var b0, b1;
		bH.uaMatch = function(b3) {
			b3 = b3.toLowerCase();
			var b2 = /(chrome)[ \/]([\w.]+)/.exec(b3)
					|| /(webkit)[ \/]([\w.]+)/.exec(b3)
					|| /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b3)
					|| /(msie) ([\w.]+)/.exec(b3)
					|| b3.indexOf("compatible") < 0
					&& /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b3) || [];
			return {
				browser : b2[1] || "",
				version : b2[2] || "0"
			}
		};
		b0 = bH.uaMatch(f.userAgent);
		b1 = {};
		if (b0.browser) {
			b1[b0.browser] = true;
			b1.version = b0.version
		}
		if (b1.webkit) {
			b1.safari = true
		}
		bH.browser = b1;
		bH.sub = function() {
			function b2(b5, b6) {
				return new b2.fn.init(b5, b6)
			}
			bH.extend(true, b2, this);
			b2.superclass = this;
			b2.fn = b2.prototype = this();
			b2.fn.constructor = b2;
			b2.sub = this.sub;
			b2.fn.init = function b4(b5, b6) {
				if (b6 && b6 instanceof bH && !(b6 instanceof b2)) {
					b6 = b2(b6)
				}
				return bH.fn.init.call(this, b5, b6, b3)
			};
			b2.fn.init.prototype = b2.fn;
			var b3 = b2(q);
			return b2
		}
	})();
	var G, aA, aX, bf = /alpha\([^)]*\)/i, aT = /opacity=([^)]*)/, bl = /^(top|right|bottom|left)$/, a0 = /^margin/, a9 = new RegExp(
			"^(" + by + ")(.*)$", "i"), X = new RegExp("^(" + by
			+ ")(?!px)[a-z%]+$", "i"), T = new RegExp("^([-+])=(" + by + ")",
			"i"), bi = {}, ba = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	}, bB = {
		letterSpacing : 0,
		fontWeight : 400,
		lineHeight : 1
	}, bR = [ "Top", "Right", "Bottom", "Left" ], at = [ "Webkit", "O", "Moz",
			"ms" ], aK = bH.fn.toggle;
	function b(b3, b1) {
		if (b1 in b3) {
			return b1
		}
		var b4 = b1.charAt(0).toUpperCase() + b1.slice(1), b0 = b1, b2 = at.length;
		while (b2--) {
			b1 = at[b2] + b4;
			if (b1 in b3) {
				return b1
			}
		}
		return b0
	}
	function R(b1, b0) {
		b1 = b0 || b1;
		return bH.css(b1, "display") === "none"
				|| !bH.contains(b1.ownerDocument, b1)
	}
	function u(b5, b0) {
		var b4, b6, b1 = [], b2 = 0, b3 = b5.length;
		for (; b2 < b3; b2++) {
			b4 = b5[b2];
			if (!b4.style) {
				continue
			}
			b1[b2] = bH._data(b4, "olddisplay");
			if (b0) {
				if (!b1[b2] && b4.style.display === "none") {
					b4.style.display = ""
				}
				if (b4.style.display === "" && R(b4)) {
					b1[b2] = bH._data(b4, "olddisplay", bD(b4.nodeName))
				}
			} else {
				b6 = G(b4, "display");
				if (!b1[b2] && b6 !== "none") {
					bH._data(b4, "olddisplay", b6)
				}
			}
		}
		for (b2 = 0; b2 < b3; b2++) {
			b4 = b5[b2];
			if (!b4.style) {
				continue
			}
			if (!b0 || b4.style.display === "none" || b4.style.display === "") {
				b4.style.display = b0 ? b1[b2] || "" : "none"
			}
		}
		return b5
	}
	bH.fn.extend({
		css : function(b0, b1) {
			return bH.access(this, function(b3, b2, b4) {
				return b4 !== aC ? bH.style(b3, b2, b4) : bH.css(b3, b2)
			}, b0, b1, arguments.length > 1)
		},
		show : function() {
			return u(this, true)
		},
		hide : function() {
			return u(this)
		},
		toggle : function(b2, b1) {
			var b0 = typeof b2 === "boolean";
			if (bH.isFunction(b2) && bH.isFunction(b1)) {
				return aK.apply(this, arguments)
			}
			return this.each(function() {
				if (b0 ? b2 : R(this)) {
					bH(this).show()
				} else {
					bH(this).hide()
				}
			})
		}
	});
	bH.extend({
		cssHooks : {
			opacity : {
				get : function(b2, b1) {
					if (b1) {
						var b0 = G(b2, "opacity");
						return b0 === "" ? "1" : b0
					}
				}
			}
		},
		cssNumber : {
			fillOpacity : true,
			fontWeight : true,
			lineHeight : true,
			opacity : true,
			orphans : true,
			widows : true,
			zIndex : true,
			zoom : true
		},
		cssProps : {
			"float" : bH.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style : function(b2, b1, b8, b3) {
			if (!b2 || b2.nodeType === 3 || b2.nodeType === 8 || !b2.style) {
				return
			}
			var b6, b7, b9, b4 = bH.camelCase(b1), b0 = b2.style;
			b1 = bH.cssProps[b4] || (bH.cssProps[b4] = b(b0, b4));
			b9 = bH.cssHooks[b1] || bH.cssHooks[b4];
			if (b8 !== aC) {
				b7 = typeof b8;
				if (b7 === "string" && (b6 = T.exec(b8))) {
					b8 = (b6[1] + 1) * b6[2] + parseFloat(bH.css(b2, b1));
					b7 = "number"
				}
				if (b8 == null || b7 === "number" && isNaN(b8)) {
					return
				}
				if (b7 === "number" && !bH.cssNumber[b4]) {
					b8 += "px"
				}
				if (!b9 || !("set" in b9) || (b8 = b9.set(b2, b8, b3)) !== aC) {
					try {
						b0[b1] = b8
					} catch (b5) {
					}
				}
			} else {
				if (b9 && "get" in b9 && (b6 = b9.get(b2, false, b3)) !== aC) {
					return b6
				}
				return b0[b1]
			}
		},
		css : function(b6, b4, b5, b1) {
			var b7, b3, b0, b2 = bH.camelCase(b4);
			b4 = bH.cssProps[b2] || (bH.cssProps[b2] = b(b6.style, b2));
			b0 = bH.cssHooks[b4] || bH.cssHooks[b2];
			if (b0 && "get" in b0) {
				b7 = b0.get(b6, true, b1)
			}
			if (b7 === aC) {
				b7 = G(b6, b4)
			}
			if (b7 === "normal" && b4 in bB) {
				b7 = bB[b4]
			}
			if (b5 || b1 !== aC) {
				b3 = parseFloat(b7);
				return b5 || bH.isNumeric(b3) ? b3 || 0 : b7
			}
			return b7
		},
		swap : function(b4, b3, b5) {
			var b2, b1, b0 = {};
			for (b1 in b3) {
				b0[b1] = b4.style[b1];
				b4.style[b1] = b3[b1]
			}
			b2 = b5.call(b4);
			for (b1 in b3) {
				b4.style[b1] = b0[b1]
			}
			return b2
		}
	});
	if (a3.getComputedStyle) {
		G = function(b7, b1) {
			var b0, b4, b3, b6, b5 = getComputedStyle(b7, null), b2 = b7.style;
			if (b5) {
				b0 = b5[b1];
				if (b0 === ""
						&& !bH.contains(b7.ownerDocument.documentElement, b7)) {
					b0 = bH.style(b7, b1)
				}
				if (X.test(b0) && a0.test(b1)) {
					b4 = b2.width;
					b3 = b2.minWidth;
					b6 = b2.maxWidth;
					b2.minWidth = b2.maxWidth = b2.width = b0;
					b0 = b5.width;
					b2.width = b4;
					b2.minWidth = b3;
					b2.maxWidth = b6
				}
			}
			return b0
		}
	} else {
		if (q.documentElement.currentStyle) {
			G = function(b4, b2) {
				var b5, b0, b1 = b4.currentStyle && b4.currentStyle[b2], b3 = b4.style;
				if (b1 == null && b3 && b3[b2]) {
					b1 = b3[b2]
				}
				if (X.test(b1) && !bl.test(b2)) {
					b5 = b3.left;
					b0 = b4.runtimeStyle && b4.runtimeStyle.left;
					if (b0) {
						b4.runtimeStyle.left = b4.currentStyle.left
					}
					b3.left = b2 === "fontSize" ? "1em" : b1;
					b1 = b3.pixelLeft + "px";
					b3.left = b5;
					if (b0) {
						b4.runtimeStyle.left = b0
					}
				}
				return b1 === "" ? "auto" : b1
			}
		}
	}
	function aH(b0, b2, b3) {
		var b1 = a9.exec(b2);
		return b1 ? Math.max(0, b1[1] - (b3 || 0)) + (b1[2] || "px") : b2
	}
	function au(b3, b1, b0, b5) {
		var b2 = b0 === (b5 ? "border" : "content") ? 4 : b1 === "width" ? 1
				: 0, b4 = 0;
		for (; b2 < 4; b2 += 2) {
			if (b0 === "margin") {
				b4 += bH.css(b3, b0 + bR[b2], true)
			}
			if (b5) {
				if (b0 === "content") {
					b4 -= parseFloat(G(b3, "padding" + bR[b2])) || 0
				}
				if (b0 !== "margin") {
					b4 -= parseFloat(G(b3, "border" + bR[b2] + "Width")) || 0
				}
			} else {
				b4 += parseFloat(G(b3, "padding" + bR[b2])) || 0;
				if (b0 !== "padding") {
					b4 += parseFloat(G(b3, "border" + bR[b2] + "Width")) || 0
				}
			}
		}
		return b4
	}
	function w(b3, b1, b0) {
		var b4 = b1 === "width" ? b3.offsetWidth : b3.offsetHeight, b2 = true, b5 = bH.support.boxSizing
				&& bH.css(b3, "boxSizing") === "border-box";
		if (b4 <= 0) {
			b4 = G(b3, b1);
			if (b4 < 0 || b4 == null) {
				b4 = b3.style[b1]
			}
			if (X.test(b4)) {
				return b4
			}
			b2 = b5 && (bH.support.boxSizingReliable || b4 === b3.style[b1]);
			b4 = parseFloat(b4) || 0
		}
		return (b4 + au(b3, b1, b0 || (b5 ? "border" : "content"), b2)) + "px"
	}
	function bD(b2) {
		if (bi[b2]) {
			return bi[b2]
		}
		var b0 = bH("<" + b2 + ">").appendTo(q.body), b1 = b0.css("display");
		b0.remove();
		if (b1 === "none" || b1 === "") {
			aA = q.body.appendChild(aA
					|| bH.extend(q.createElement("iframe"), {
						frameBorder : 0,
						width : 0,
						height : 0
					}));
			if (!aX || !aA.createElement) {
				aX = (aA.contentWindow || aA.contentDocument).document;
				aX.write("<!doctype html><html><body>");
				aX.close()
			}
			b0 = aX.body.appendChild(aX.createElement(b2));
			b1 = G(b0, "display");
			q.body.removeChild(aA)
		}
		bi[b2] = b1;
		return b1
	}
	bH.each([ "height", "width" ], function(b1, b0) {
		bH.cssHooks[b0] = {
			get : function(b4, b3, b2) {
				if (b3) {
					if (b4.offsetWidth !== 0 || G(b4, "display") !== "none") {
						return w(b4, b0, b2)
					} else {
						return bH.swap(b4, ba, function() {
							return w(b4, b0, b2)
						})
					}
				}
			},
			set : function(b3, b4, b2) {
				return aH(b3, b4, b2 ? au(b3, b0, b2, bH.support.boxSizing
						&& bH.css(b3, "boxSizing") === "border-box") : 0)
			}
		}
	});
	if (!bH.support.opacity) {
		bH.cssHooks.opacity = {
			get : function(b1, b0) {
				return aT.test((b0 && b1.currentStyle ? b1.currentStyle.filter
						: b1.style.filter)
						|| "") ? (0.01 * parseFloat(RegExp.$1)) + "" : b0 ? "1"
						: ""
			},
			set : function(b4, b5) {
				var b3 = b4.style, b1 = b4.currentStyle, b0 = bH.isNumeric(b5) ? "alpha(opacity="
						+ b5 * 100 + ")"
						: "", b2 = b1 && b1.filter || b3.filter || "";
				b3.zoom = 1;
				if (b5 >= 1 && bH.trim(b2.replace(bf, "")) === ""
						&& b3.removeAttribute) {
					b3.removeAttribute("filter");
					if (b1 && !b1.filter) {
						return
					}
				}
				b3.filter = bf.test(b2) ? b2.replace(bf, b0) : b2 + " " + b0
			}
		}
	}
	bH(function() {
		if (!bH.support.reliableMarginRight) {
			bH.cssHooks.marginRight = {
				get : function(b1, b0) {
					return bH.swap(b1, {
						display : "inline-block"
					}, function() {
						if (b0) {
							return G(b1, "marginRight")
						}
					})
				}
			}
		}
		if (!bH.support.pixelPosition && bH.fn.position) {
			bH.each([ "top", "left" ], function(b0, b1) {
				bH.cssHooks[b1] = {
					get : function(b4, b3) {
						if (b3) {
							var b2 = G(b4, b1);
							return X.test(b2) ? bH(b4).position()[b1] + "px"
									: b2
						}
					}
				}
			})
		}
	});
	if (bH.expr && bH.expr.filters) {
		bH.expr.filters.hidden = function(b0) {
			return (b0.offsetWidth === 0 && b0.offsetHeight === 0)
					|| (!bH.support.reliableHiddenOffsets && ((b0.style && b0.style.display) || G(
							b0, "display")) === "none")
		};
		bH.expr.filters.visible = function(b0) {
			return !bH.expr.filters.hidden(b0)
		}
	}
	bH.each({
		margin : "",
		padding : "",
		border : "Width"
	},
			function(b0, b1) {
				bH.cssHooks[b0 + b1] = {
					expand : function(b4) {
						var b3, b5 = typeof b4 === "string" ? b4.split(" ")
								: [ b4 ], b2 = {};
						for (b3 = 0; b3 < 4; b3++) {
							b2[b0 + bR[b3] + b1] = b5[b3] || b5[b3 - 2]
									|| b5[0]
						}
						return b2
					}
				};
				if (!a0.test(b0)) {
					bH.cssHooks[b0 + b1].set = aH
				}
			});
	var bt = /%20/g, aQ = /\[\]$/, V = /\r?\n/g, bA = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, aE = /^(?:select|textarea)/i;
	bH.fn.extend({
		serialize : function() {
			return bH.param(this.serializeArray())
		},
		serializeArray : function() {
			return this.map(function() {
				return this.elements ? bH.makeArray(this.elements) : this
			})
					.filter(
							function() {
								return this.name
										&& !this.disabled
										&& (this.checked
												|| aE.test(this.nodeName) || bA
												.test(this.type))
							}).map(
							function(b0, b1) {
								var b2 = bH(this).val();
								return b2 == null ? null : bH.isArray(b2) ? bH
										.map(b2, function(b4, b3) {
											return {
												name : b1.name,
												value : b4.replace(V, "\r\n")
											}
										}) : {
									name : b1.name,
									value : b2.replace(V, "\r\n")
								}
							}).get()
		}
	});
	bH.param = function(b0, b2) {
		var b3, b1 = [], b4 = function(b5, b6) {
			b6 = bH.isFunction(b6) ? b6() : (b6 == null ? "" : b6);
			b1[b1.length] = encodeURIComponent(b5) + "="
					+ encodeURIComponent(b6)
		};
		if (b2 === aC) {
			b2 = bH.ajaxSettings && bH.ajaxSettings.traditional
		}
		if (bH.isArray(b0) || (b0.jquery && !bH.isPlainObject(b0))) {
			bH.each(b0, function() {
				b4(this.name, this.value)
			})
		} else {
			for (b3 in b0) {
				m(b3, b0[b3], b2, b4)
			}
		}
		return b1.join("&").replace(bt, "+")
	};
	function m(b2, b4, b1, b3) {
		var b0;
		if (bH.isArray(b4)) {
			bH.each(b4, function(b6, b5) {
				if (b1 || aQ.test(b2)) {
					b3(b2, b5)
				} else {
					m(b2 + "[" + (typeof b5 === "object" ? b6 : "") + "]", b5,
							b1, b3)
				}
			})
		} else {
			if (!b1 && bH.type(b4) === "object") {
				for (b0 in b4) {
					m(b2 + "[" + b0 + "]", b4[b0], b1, b3)
				}
			} else {
				b3(b2, b4)
			}
		}
	}
	var Z, bY, ao = /#.*$/, ae = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, D = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, t = /^(?:GET|HEAD)$/, aD = /^\/\//, bO = /\?/, h = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Q = /([?&])_=[^&]*/, aU = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, bX = bH.fn.load, x = {}, a7 = {}, aY = [ "*/" ]
			+ [ "*" ];
	try {
		Z = aJ.href
	} catch (be) {
		Z = q.createElement("a");
		Z.href = "";
		Z = Z.href
	}
	bY = aU.exec(Z.toLowerCase()) || [];
	function bJ(b0) {
		return function(b4, b6) {
			if (typeof b4 !== "string") {
				b6 = b4;
				b4 = "*"
			}
			var b1, b7, b8, b3 = b4.toLowerCase().split(aW), b2 = 0, b5 = b3.length;
			if (bH.isFunction(b6)) {
				for (; b2 < b5; b2++) {
					b1 = b3[b2];
					b8 = /^\+/.test(b1);
					if (b8) {
						b1 = b1.substr(1) || "*"
					}
					b7 = b0[b1] = b0[b1] || [];
					b7[b8 ? "unshift" : "push"](b6)
				}
			}
		}
	}
	function s(b1, ca, b5, b8, b7, b3) {
		b7 = b7 || ca.dataTypes[0];
		b3 = b3 || {};
		b3[b7] = true;
		var b9, b6 = b1[b7], b2 = 0, b0 = b6 ? b6.length : 0, b4 = (b1 === x);
		for (; b2 < b0 && (b4 || !b9); b2++) {
			b9 = b6[b2](ca, b5, b8);
			if (typeof b9 === "string") {
				if (!b4 || b3[b9]) {
					b9 = aC
				} else {
					ca.dataTypes.unshift(b9);
					b9 = s(b1, ca, b5, b8, b9, b3)
				}
			}
		}
		if ((b4 || !b9) && !b3["*"]) {
			b9 = s(b1, ca, b5, b8, "*", b3)
		}
		return b9
	}
	function v(b2, b3) {
		var b1, b0, b4 = bH.ajaxSettings.flatOptions || {};
		for (b1 in b3) {
			if (b3[b1] !== aC) {
				(b4[b1] ? b2 : (b0 || (b0 = {})))[b1] = b3[b1]
			}
		}
		if (b0) {
			bH.extend(true, b2, b0)
		}
	}
	bH.fn.load = function(b3, b6, b7) {
		if (typeof b3 !== "string" && bX) {
			return bX.apply(this, arguments)
		}
		if (!this.length) {
			return this
		}
		var b0, b4, b2, b1 = this, b5 = b3.indexOf(" ");
		if (b5 >= 0) {
			b0 = b3.slice(b5, b3.length);
			b3 = b3.slice(0, b5)
		}
		if (bH.isFunction(b6)) {
			b7 = b6;
			b6 = aC
		} else {
			if (typeof b6 === "object") {
				b4 = "POST"
			}
		}
		bH.ajax({
			url : b3,
			type : b4,
			dataType : "html",
			data : b6,
			complete : function(b9, b8) {
				if (b7) {
					b1.each(b7, b2 || [ b9.responseText, b8, b9 ])
				}
			}
		}).done(function(b8) {
			b2 = arguments;
			b1.html(b0 ? bH("<div>").append(b8.replace(h, "")).find(b0) : b8)
		});
		return this
	};
	bH.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"
			.split(" "), function(b0, b1) {
		bH.fn[b1] = function(b2) {
			return this.on(b1, b2)
		}
	});
	bH.each([ "get", "post" ], function(b0, b1) {
		bH[b1] = function(b2, b4, b5, b3) {
			if (bH.isFunction(b4)) {
				b3 = b3 || b5;
				b5 = b4;
				b4 = aC
			}
			return bH.ajax({
				type : b1,
				url : b2,
				data : b4,
				success : b5,
				dataType : b3
			})
		}
	});
	bH
			.extend({
				getScript : function(b0, b1) {
					return bH.get(b0, aC, b1, "script")
				},
				getJSON : function(b0, b1, b2) {
					return bH.get(b0, b1, b2, "json")
				},
				ajaxSetup : function(b1, b0) {
					if (b0) {
						v(b1, bH.ajaxSettings)
					} else {
						b0 = b1;
						b1 = bH.ajaxSettings
					}
					v(b1, b0);
					return b1
				},
				ajaxSettings : {
					url : Z,
					isLocal : D.test(bY[1]),
					global : true,
					type : "GET",
					contentType : "application/x-www-form-urlencoded; charset=UTF-8",
					processData : true,
					async : true,
					accepts : {
						xml : "application/xml, text/xml",
						html : "text/html",
						text : "text/plain",
						json : "application/json, text/javascript",
						"*" : aY
					},
					contents : {
						xml : /xml/,
						html : /html/,
						json : /json/
					},
					responseFields : {
						xml : "responseXML",
						text : "responseText"
					},
					converters : {
						"* text" : a3.String,
						"text html" : true,
						"text json" : bH.parseJSON,
						"text xml" : bH.parseXML
					},
					flatOptions : {
						context : true,
						url : true
					}
				},
				ajaxPrefilter : bJ(x),
				ajaxTransport : bJ(a7),
				ajax : function(b5, b2) {
					if (typeof b5 === "object") {
						b2 = b5;
						b5 = aC
					}
					b2 = b2 || {};
					var b8, cm, b3, ch, ca, ce, b1, cg, b9 = bH.ajaxSetup({},
							b2), co = b9.context || b9, cc = co !== b9
							&& (co.nodeType || co instanceof bH) ? bH(co)
							: bH.event, cn = bH.Deferred(), cj = bH
							.Callbacks("once memory"), b6 = b9.statusCode || {}, cd = {}, ck = {}, b4 = 0, b7 = "canceled", cf = {
						readyState : 0,
						setRequestHeader : function(cq, cr) {
							if (!b4) {
								var cp = cq.toLowerCase();
								cq = ck[cp] = ck[cp] || cq;
								cd[cq] = cr
							}
							return this
						},
						getAllResponseHeaders : function() {
							return b4 === 2 ? cm : null
						},
						getResponseHeader : function(cq) {
							var cp;
							if (b4 === 2) {
								if (!b3) {
									b3 = {};
									while ((cp = ae.exec(cm))) {
										b3[cp[1].toLowerCase()] = cp[2]
									}
								}
								cp = b3[cq.toLowerCase()]
							}
							return cp === aC ? null : cp
						},
						overrideMimeType : function(cp) {
							if (!b4) {
								b9.mimeType = cp
							}
							return this
						},
						abort : function(cp) {
							cp = cp || b7;
							if (ch) {
								ch.abort(cp)
							}
							cb(0, cp);
							return this
						}
					};
					function cb(cv, cq, cw, cs) {
						var cp, cz, cx, cu, cy, cr = cq;
						if (b4 === 2) {
							return
						}
						b4 = 2;
						if (ca) {
							clearTimeout(ca)
						}
						ch = aC;
						cm = cs || "";
						cf.readyState = cv > 0 ? 4 : 0;
						if (cw) {
							cu = j(b9, cf, cw)
						}
						if (cv >= 200 && cv < 300 || cv === 304) {
							if (b9.ifModified) {
								cy = cf.getResponseHeader("Last-Modified");
								if (cy) {
									bH.lastModified[b8] = cy
								}
								cy = cf.getResponseHeader("Etag");
								if (cy) {
									bH.etag[b8] = cy
								}
							}
							if (cv === 304) {
								cr = "notmodified";
								cp = true
							} else {
								cp = af(b9, cu);
								cr = cp.state;
								cz = cp.data;
								cx = cp.error;
								cp = !cx
							}
						} else {
							cx = cr;
							if (!cr || cv) {
								cr = "error";
								if (cv < 0) {
									cv = 0
								}
							}
						}
						cf.status = cv;
						cf.statusText = "" + (cq || cr);
						if (cp) {
							cn.resolveWith(co, [ cz, cr, cf ])
						} else {
							cn.rejectWith(co, [ cf, cr, cx ])
						}
						cf.statusCode(b6);
						b6 = aC;
						if (b1) {
							cc.trigger("ajax" + (cp ? "Success" : "Error"), [
									cf, b9, cp ? cz : cx ])
						}
						cj.fireWith(co, [ cf, cr ]);
						if (b1) {
							cc.trigger("ajaxComplete", [ cf, b9 ]);
							if (!(--bH.active)) {
								bH.event.trigger("ajaxStop")
							}
						}
					}
					cn.promise(cf);
					cf.success = cf.done;
					cf.error = cf.fail;
					cf.complete = cj.add;
					cf.statusCode = function(cq) {
						if (cq) {
							var cp;
							if (b4 < 2) {
								for (cp in cq) {
									b6[cp] = [ b6[cp], cq[cp] ]
								}
							} else {
								cp = cq[cf.status];
								cf.always(cp)
							}
						}
						return this
					};
					b9.url = ((b5 || b9.url) + "").replace(ao, "").replace(aD,
							bY[1] + "//");
					b9.dataTypes = bH.trim(b9.dataType || "*").toLowerCase()
							.split(aW);
					if (b9.crossDomain == null) {
						ce = aU.exec(b9.url.toLowerCase());
						b9.crossDomain = !!(ce && (ce[1] != bY[1]
								|| ce[2] != bY[2] || (ce[3] || (ce[1] === "http:" ? 80
								: 443)) != (bY[3] || (bY[1] === "http:" ? 80
								: 443))))
					}
					if (b9.data && b9.processData
							&& typeof b9.data !== "string") {
						b9.data = bH.param(b9.data, b9.traditional)
					}
					s(x, b9, b2, cf);
					if (b4 === 2) {
						return cf
					}
					b1 = b9.global;
					b9.type = b9.type.toUpperCase();
					b9.hasContent = !t.test(b9.type);
					if (b1 && bH.active++ === 0) {
						bH.event.trigger("ajaxStart")
					}
					if (!b9.hasContent) {
						if (b9.data) {
							b9.url += (bO.test(b9.url) ? "&" : "?") + b9.data;
							delete b9.data
						}
						b8 = b9.url;
						if (b9.cache === false) {
							var b0 = bH.now(), cl = b9.url.replace(Q, "$1_="
									+ b0);
							b9.url = cl
									+ ((cl === b9.url) ? (bO.test(b9.url) ? "&"
											: "?")
											+ "_=" + b0 : "")
						}
					}
					if (b9.data && b9.hasContent && b9.contentType !== false
							|| b2.contentType) {
						cf.setRequestHeader("Content-Type", b9.contentType)
					}
					if (b9.ifModified) {
						b8 = b8 || b9.url;
						if (bH.lastModified[b8]) {
							cf.setRequestHeader("If-Modified-Since",
									bH.lastModified[b8])
						}
						if (bH.etag[b8]) {
							cf.setRequestHeader("If-None-Match", bH.etag[b8])
						}
					}
					cf
							.setRequestHeader(
									"Accept",
									b9.dataTypes[0]
											&& b9.accepts[b9.dataTypes[0]] ? b9.accepts[b9.dataTypes[0]]
											+ (b9.dataTypes[0] !== "*" ? ", "
													+ aY + "; q=0.01" : "")
											: b9.accepts["*"]);
					for (cg in b9.headers) {
						cf.setRequestHeader(cg, b9.headers[cg])
					}
					if (b9.beforeSend
							&& (b9.beforeSend.call(co, cf, b9) === false || b4 === 2)) {
						return cf.abort()
					}
					b7 = "abort";
					for (cg in {
						success : 1,
						error : 1,
						complete : 1
					}) {
						cf[cg](b9[cg])
					}
					ch = s(a7, b9, b2, cf);
					if (!ch) {
						cb(-1, "No Transport")
					} else {
						cf.readyState = 1;
						if (b1) {
							cc.trigger("ajaxSend", [ cf, b9 ])
						}
						if (b9.async && b9.timeout > 0) {
							ca = setTimeout(function() {
								cf.abort("timeout")
							}, b9.timeout)
						}
						try {
							b4 = 1;
							ch.send(cd, cb)
						} catch (ci) {
							if (b4 < 2) {
								cb(-1, ci)
							} else {
								throw ci
							}
						}
					}
					return cf
				},
				active : 0,
				lastModified : {},
				etag : {}
			});
	function j(b9, b8, b5) {
		var b4, b6, b3, b0, b1 = b9.contents, b7 = b9.dataTypes, b2 = b9.responseFields;
		for (b6 in b2) {
			if (b6 in b5) {
				b8[b2[b6]] = b5[b6]
			}
		}
		while (b7[0] === "*") {
			b7.shift();
			if (b4 === aC) {
				b4 = b9.mimeType || b8.getResponseHeader("content-type")
			}
		}
		if (b4) {
			for (b6 in b1) {
				if (b1[b6] && b1[b6].test(b4)) {
					b7.unshift(b6);
					break
				}
			}
		}
		if (b7[0] in b5) {
			b3 = b7[0]
		} else {
			for (b6 in b5) {
				if (!b7[0] || b9.converters[b6 + " " + b7[0]]) {
					b3 = b6;
					break
				}
				if (!b0) {
					b0 = b6
				}
			}
			b3 = b3 || b0
		}
		if (b3) {
			if (b3 !== b7[0]) {
				b7.unshift(b3)
			}
			return b5[b3]
		}
	}
	function af(ca, b2) {
		var b8, b0, b6, b4, b7 = ca.dataTypes.slice(), b1 = b7[0], b9 = {}, b3 = 0;
		if (ca.dataFilter) {
			b2 = ca.dataFilter(b2, ca.dataType)
		}
		if (b7[1]) {
			for (b8 in ca.converters) {
				b9[b8.toLowerCase()] = ca.converters[b8]
			}
		}
		for (; (b6 = b7[++b3]);) {
			if (b6 !== "*") {
				if (b1 !== "*" && b1 !== b6) {
					b8 = b9[b1 + " " + b6] || b9["* " + b6];
					if (!b8) {
						for (b0 in b9) {
							b4 = b0.split(" ");
							if (b4[1] === b6) {
								b8 = b9[b1 + " " + b4[0]] || b9["* " + b4[0]];
								if (b8) {
									if (b8 === true) {
										b8 = b9[b0]
									} else {
										if (b9[b0] !== true) {
											b6 = b4[0];
											b7.splice(b3--, 0, b6)
										}
									}
									break
								}
							}
						}
					}
					if (b8 !== true) {
						if (b8 && ca["throws"]) {
							b2 = b8(b2)
						} else {
							try {
								b2 = b8(b2)
							} catch (b5) {
								return {
									state : "parsererror",
									error : b8 ? b5 : "No conversion from "
											+ b1 + " to " + b6
								}
							}
						}
					}
				}
				b1 = b6
			}
		}
		return {
			state : "success",
			data : b2
		}
	}
	var bq = [], ax = /\?/, a6 = /(=)\?(?=&|$)|\?\?/, bm = bH.now();
	bH.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function() {
			var b0 = bq.pop() || (bH.expando + "_" + (bm++));
			this[b0] = true;
			return b0
		}
	});
	bH
			.ajaxPrefilter(
					"json jsonp",
					function(ca, b5, b9) {
						var b8, b0, b7, b3 = ca.data, b1 = ca.url, b2 = ca.jsonp !== false, b6 = b2
								&& a6.test(b1), b4 = b2
								&& !b6
								&& typeof b3 === "string"
								&& !(ca.contentType || "")
										.indexOf("application/x-www-form-urlencoded")
								&& a6.test(b3);
						if (ca.dataTypes[0] === "jsonp" || b6 || b4) {
							b8 = ca.jsonpCallback = bH
									.isFunction(ca.jsonpCallback) ? ca
									.jsonpCallback() : ca.jsonpCallback;
							b0 = a3[b8];
							if (b6) {
								ca.url = b1.replace(a6, "$1" + b8)
							} else {
								if (b4) {
									ca.data = b3.replace(a6, "$1" + b8)
								} else {
									if (b2) {
										ca.url += (ax.test(b1) ? "&" : "?")
												+ ca.jsonp + "=" + b8
									}
								}
							}
							ca.converters["script json"] = function() {
								if (!b7) {
									bH.error(b8 + " was not called")
								}
								return b7[0]
							};
							ca.dataTypes[0] = "json";
							a3[b8] = function() {
								b7 = arguments
							};
							b9.always(function() {
								a3[b8] = b0;
								if (ca[b8]) {
									ca.jsonpCallback = b5.jsonpCallback;
									bq.push(b8)
								}
								if (b7 && bH.isFunction(b0)) {
									b0(b7[0])
								}
								b7 = b0 = aC
							});
							return "script"
						}
					});
	bH
			.ajaxSetup({
				accepts : {
					script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents : {
					script : /javascript|ecmascript/
				},
				converters : {
					"text script" : function(b0) {
						bH.globalEval(b0);
						return b0
					}
				}
			});
	bH.ajaxPrefilter("script", function(b0) {
		if (b0.cache === aC) {
			b0.cache = false
		}
		if (b0.crossDomain) {
			b0.type = "GET";
			b0.global = false
		}
	});
	bH.ajaxTransport("script", function(b2) {
		if (b2.crossDomain) {
			var b0, b1 = q.head || q.getElementsByTagName("head")[0]
					|| q.documentElement;
			return {
				send : function(b3, b4) {
					b0 = q.createElement("script");
					b0.async = "async";
					if (b2.scriptCharset) {
						b0.charset = b2.scriptCharset
					}
					b0.src = b2.url;
					b0.onload = b0.onreadystatechange = function(b6, b5) {
						if (b5 || !b0.readyState
								|| /loaded|complete/.test(b0.readyState)) {
							b0.onload = b0.onreadystatechange = null;
							if (b1 && b0.parentNode) {
								b1.removeChild(b0)
							}
							b0 = aC;
							if (!b5) {
								b4(200, "success")
							}
						}
					};
					b1.insertBefore(b0, b1.firstChild)
				},
				abort : function() {
					if (b0) {
						b0.onload(0, 1)
					}
				}
			}
		}
	});
	var ai, aP = a3.ActiveXObject ? function() {
		for ( var b0 in ai) {
			ai[b0](0, 1)
		}
	} : false, av = 0;
	function bC() {
		try {
			return new a3.XMLHttpRequest()
		} catch (b0) {
		}
	}
	function bc() {
		try {
			return new a3.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b0) {
		}
	}
	bH.ajaxSettings.xhr = a3.ActiveXObject ? function() {
		return !this.isLocal && bC() || bc()
	} : bC;
	(function(b0) {
		bH.extend(bH.support, {
			ajax : !!b0,
			cors : !!b0 && ("withCredentials" in b0)
		})
	})(bH.ajaxSettings.xhr());
	if (bH.support.ajax) {
		bH.ajaxTransport(function(b0) {
			if (!b0.crossDomain || bH.support.cors) {
				var b1;
				return {
					send : function(b7, b2) {
						var b5, b4, b6 = b0.xhr();
						if (b0.username) {
							b6.open(b0.type, b0.url, b0.async, b0.username,
									b0.password)
						} else {
							b6.open(b0.type, b0.url, b0.async)
						}
						if (b0.xhrFields) {
							for (b4 in b0.xhrFields) {
								b6[b4] = b0.xhrFields[b4]
							}
						}
						if (b0.mimeType && b6.overrideMimeType) {
							b6.overrideMimeType(b0.mimeType)
						}
						if (!b0.crossDomain && !b7["X-Requested-With"]) {
							b7["X-Requested-With"] = "XMLHttpRequest"
						}
						try {
							for (b4 in b7) {
								b6.setRequestHeader(b4, b7[b4])
							}
						} catch (b3) {
						}
						b6.send((b0.hasContent && b0.data) || null);
						b1 = function(cg, ca) {
							var cb, b9, b8, ce, cd;
							try {
								if (b1 && (ca || b6.readyState === 4)) {
									b1 = aC;
									if (b5) {
										b6.onreadystatechange = bH.noop;
										if (aP) {
											delete ai[b5]
										}
									}
									if (ca) {
										if (b6.readyState !== 4) {
											b6.abort()
										}
									} else {
										cb = b6.status;
										b8 = b6.getAllResponseHeaders();
										ce = {};
										cd = b6.responseXML;
										if (cd && cd.documentElement) {
											ce.xml = cd
										}
										try {
											ce.text = b6.responseText
										} catch (cg) {
										}
										try {
											b9 = b6.statusText
										} catch (cf) {
											b9 = ""
										}
										if (!cb && b0.isLocal
												&& !b0.crossDomain) {
											cb = ce.text ? 200 : 404
										} else {
											if (cb === 1223) {
												cb = 204
											}
										}
									}
								}
							} catch (cc) {
								if (!ca) {
									b2(-1, cc)
								}
							}
							if (ce) {
								b2(cb, b9, ce, b8)
							}
						};
						if (!b0.async) {
							b1()
						} else {
							if (b6.readyState === 4) {
								setTimeout(b1, 0)
							} else {
								b5 = ++av;
								if (aP) {
									if (!ai) {
										ai = {};
										bH(a3).unload(aP)
									}
									ai[b5] = b1
								}
								b6.onreadystatechange = b1
							}
						}
					},
					abort : function() {
						if (b1) {
							b1(0, 1)
						}
					}
				}
			}
		})
	}
	var M, ac, bP = /^(?:toggle|show|hide)$/, bI = new RegExp("^(?:([-+])=|)("
			+ by + ")([a-z%]*)$", "i"), bN = /queueHooks$/, ay = [ k ], a2 = {
		"*" : [ function(b1, b7) {
			var b4, b8, b0, b9 = this.createTween(b1, b7), b5 = bI.exec(b7), b6 = b9
					.cur(), b2 = +b6 || 0, b3 = 1;
			if (b5) {
				b4 = +b5[2];
				b8 = b5[3] || (bH.cssNumber[b1] ? "" : "px");
				if (b8 !== "px" && b2) {
					b2 = bH.css(b9.elem, b1, true) || b4 || 1;
					do {
						b0 = b3 = b3 || ".5";
						b2 = b2 / b3;
						bH.style(b9.elem, b1, b2 + b8);
						b3 = b9.cur() / b6
					} while (b3 !== 1 && b3 !== b0)
				}
				b9.unit = b8;
				b9.start = b2;
				b9.end = b5[1] ? b2 + (b5[1] + 1) * b4 : b4
			}
			return b9
		} ]
	};
	function bk() {
		setTimeout(function() {
			M = aC
		}, 0);
		return (M = bH.now())
	}
	function bd(b1, b0) {
		bH.each(b0, function(b6, b4) {
			var b5 = (a2[b6] || []).concat(a2["*"]), b2 = 0, b3 = b5.length;
			for (; b2 < b3; b2++) {
				if (b5[b2].call(b1, b6, b4)) {
					return
				}
			}
		})
	}
	function g(b2, b6, b9) {
		var ca, b5 = 0, b0 = 0, b1 = ay.length, b8 = bH.Deferred().always(
				function() {
					delete b4.elem
				}), b4 = function() {
			var cf = M || bk(), cc = Math.max(0, b3.startTime + b3.duration
					- cf), ce = 1 - (cc / b3.duration || 0), cb = 0, cd = b3.tweens.length;
			for (; cb < cd; cb++) {
				b3.tweens[cb].run(ce)
			}
			b8.notifyWith(b2, [ b3, ce, cc ]);
			if (ce < 1 && cd) {
				return cc
			} else {
				b8.resolveWith(b2, [ b3 ]);
				return false
			}
		}, b3 = b8.promise({
			elem : b2,
			props : bH.extend({}, b6),
			opts : bH.extend(true, {
				specialEasing : {}
			}, b9),
			originalProperties : b6,
			originalOptions : b9,
			startTime : M || bk(),
			duration : b9.duration,
			tweens : [],
			createTween : function(ce, cb, cd) {
				var cc = bH.Tween(b2, b3.opts, ce, cb,
						b3.opts.specialEasing[ce] || b3.opts.easing);
				b3.tweens.push(cc);
				return cc
			},
			stop : function(cc) {
				var cb = 0, cd = cc ? b3.tweens.length : 0;
				for (; cb < cd; cb++) {
					b3.tweens[cb].run(1)
				}
				if (cc) {
					b8.resolveWith(b2, [ b3, cc ])
				} else {
					b8.rejectWith(b2, [ b3, cc ])
				}
				return this
			}
		}), b7 = b3.props;
		al(b7, b3.opts.specialEasing);
		for (; b5 < b1; b5++) {
			ca = ay[b5].call(b3, b2, b7, b3.opts);
			if (ca) {
				return ca
			}
		}
		bd(b3, b7);
		if (bH.isFunction(b3.opts.start)) {
			b3.opts.start.call(b2, b3)
		}
		bH.fx.timer(bH.extend(b4, {
			anim : b3,
			queue : b3.opts.queue,
			elem : b2
		}));
		return b3.progress(b3.opts.progress).done(b3.opts.done,
				b3.opts.complete).fail(b3.opts.fail).always(b3.opts.always)
	}
	function al(b3, b5) {
		var b2, b1, b6, b4, b0;
		for (b2 in b3) {
			b1 = bH.camelCase(b2);
			b6 = b5[b1];
			b4 = b3[b2];
			if (bH.isArray(b4)) {
				b6 = b4[1];
				b4 = b3[b2] = b4[0]
			}
			if (b2 !== b1) {
				b3[b1] = b4;
				delete b3[b2]
			}
			b0 = bH.cssHooks[b1];
			if (b0 && "expand" in b0) {
				b4 = b0.expand(b4);
				delete b3[b1];
				for (b2 in b4) {
					if (!(b2 in b3)) {
						b3[b2] = b4[b2];
						b5[b2] = b6
					}
				}
			} else {
				b5[b1] = b6
			}
		}
	}
	bH.Animation = bH.extend(g, {
		tweener : function(b1, b4) {
			if (bH.isFunction(b1)) {
				b4 = b1;
				b1 = [ "*" ]
			} else {
				b1 = b1.split(" ")
			}
			var b3, b0 = 0, b2 = b1.length;
			for (; b0 < b2; b0++) {
				b3 = b1[b0];
				a2[b3] = a2[b3] || [];
				a2[b3].unshift(b4)
			}
		},
		prefilter : function(b1, b0) {
			if (b0) {
				ay.unshift(b1)
			} else {
				ay.push(b1)
			}
		}
	});
	function k(b4, b9, b0) {
		var b8, b2, cb, b3, cf, ce, cd, cc, b5 = this, b1 = b4.style, ca = {}, b7 = [], b6 = b4.nodeType
				&& R(b4);
		if (!b0.queue) {
			cd = bH._queueHooks(b4, "fx");
			if (cd.unqueued == null) {
				cd.unqueued = 0;
				cc = cd.empty.fire;
				cd.empty.fire = function() {
					if (!cd.unqueued) {
						cc()
					}
				}
			}
			cd.unqueued++;
			b5.always(function() {
				b5.always(function() {
					cd.unqueued--;
					if (!bH.queue(b4, "fx").length) {
						cd.empty.fire()
					}
				})
			})
		}
		if (b4.nodeType === 1 && ("height" in b9 || "width" in b9)) {
			b0.overflow = [ b1.overflow, b1.overflowX, b1.overflowY ];
			if (bH.css(b4, "display") === "inline"
					&& bH.css(b4, "float") === "none") {
				if (!bH.support.inlineBlockNeedsLayout
						|| bD(b4.nodeName) === "inline") {
					b1.display = "inline-block"
				} else {
					b1.zoom = 1
				}
			}
		}
		if (b0.overflow) {
			b1.overflow = "hidden";
			if (!bH.support.shrinkWrapBlocks) {
				b5.done(function() {
					b1.overflow = b0.overflow[0];
					b1.overflowX = b0.overflow[1];
					b1.overflowY = b0.overflow[2]
				})
			}
		}
		for (b8 in b9) {
			cb = b9[b8];
			if (bP.exec(cb)) {
				delete b9[b8];
				if (cb === (b6 ? "hide" : "show")) {
					continue
				}
				b7.push(b8)
			}
		}
		b3 = b7.length;
		if (b3) {
			cf = bH._data(b4, "fxshow") || bH._data(b4, "fxshow", {});
			if (b6) {
				bH(b4).show()
			} else {
				b5.done(function() {
					bH(b4).hide()
				})
			}
			b5.done(function() {
				var cg;
				bH.removeData(b4, "fxshow", true);
				for (cg in ca) {
					bH.style(b4, cg, ca[cg])
				}
			});
			for (b8 = 0; b8 < b3; b8++) {
				b2 = b7[b8];
				ce = b5.createTween(b2, b6 ? cf[b2] : 0);
				ca[b2] = cf[b2] || bH.style(b4, b2);
				if (!(b2 in cf)) {
					cf[b2] = ce.start;
					if (b6) {
						ce.end = ce.start;
						ce.start = b2 === "width" || b2 === "height" ? 1 : 0
					}
				}
			}
		}
	}
	function I(b2, b1, b4, b0, b3) {
		return new I.prototype.init(b2, b1, b4, b0, b3)
	}
	bH.Tween = I;
	I.prototype = {
		constructor : I,
		init : function(b3, b1, b5, b0, b4, b2) {
			this.elem = b3;
			this.prop = b5;
			this.easing = b4 || "swing";
			this.options = b1;
			this.start = this.now = this.cur();
			this.end = b0;
			this.unit = b2 || (bH.cssNumber[b5] ? "" : "px")
		},
		cur : function() {
			var b0 = I.propHooks[this.prop];
			return b0 && b0.get ? b0.get(this) : I.propHooks._default.get(this)
		},
		run : function(b2) {
			var b1, b0 = I.propHooks[this.prop];
			this.pos = b1 = bH.easing[this.easing](b2, this.options.duration
					* b2, 0, 1, this.options.duration);
			this.now = (this.end - this.start) * b1 + this.start;
			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this)
			}
			if (b0 && b0.set) {
				b0.set(this)
			} else {
				I.propHooks._default.set(this)
			}
			return this
		}
	};
	I.prototype.init.prototype = I.prototype;
	I.propHooks = {
		_default : {
			get : function(b1) {
				var b0;
				if (b1.elem[b1.prop] != null
						&& (!b1.elem.style || b1.elem.style[b1.prop] == null)) {
					return b1.elem[b1.prop]
				}
				b0 = bH.css(b1.elem, b1.prop, false, "");
				return !b0 || b0 === "auto" ? 0 : b0
			},
			set : function(b0) {
				if (bH.fx.step[b0.prop]) {
					bH.fx.step[b0.prop](b0)
				} else {
					if (b0.elem.style
							&& (b0.elem.style[bH.cssProps[b0.prop]] != null || bH.cssHooks[b0.prop])) {
						bH.style(b0.elem, b0.prop, b0.now + b0.unit)
					} else {
						b0.elem[b0.prop] = b0.now
					}
				}
			}
		}
	};
	I.propHooks.scrollTop = I.propHooks.scrollLeft = {
		set : function(b0) {
			if (b0.elem.nodeType && b0.elem.parentNode) {
				b0.elem[b0.prop] = b0.now
			}
		}
	};
	bH.each([ "toggle", "show", "hide" ], function(b1, b0) {
		var b2 = bH.fn[b0];
		bH.fn[b0] = function(b3, b5, b4) {
			return b3 == null || typeof b3 === "boolean"
					|| (!b1 && bH.isFunction(b3) && bH.isFunction(b5)) ? b2
					.apply(this, arguments) : this.animate(bG(b0, true), b3,
					b5, b4)
		}
	});
	bH.fn
			.extend({
				fadeTo : function(b0, b3, b2, b1) {
					return this.filter(R).css("opacity", 0).show().end()
							.animate({
								opacity : b3
							}, b0, b2, b1)
				},
				animate : function(b6, b3, b5, b4) {
					var b2 = bH.isEmptyObject(b6), b0 = bH.speed(b3, b5, b4), b1 = function() {
						var b7 = g(this, bH.extend({}, b6), b0);
						if (b2) {
							b7.stop(true)
						}
					};
					return b2 || b0.queue === false ? this.each(b1) : this
							.queue(b0.queue, b1)
				},
				stop : function(b2, b1, b0) {
					var b3 = function(b4) {
						var b5 = b4.stop;
						delete b4.stop;
						b5(b0)
					};
					if (typeof b2 !== "string") {
						b0 = b1;
						b1 = b2;
						b2 = aC
					}
					if (b1 && b2 !== false) {
						this.queue(b2 || "fx", [])
					}
					return this
							.each(function() {
								var b7 = true, b4 = b2 != null && b2
										+ "queueHooks", b6 = bH.timers, b5 = bH
										._data(this);
								if (b4) {
									if (b5[b4] && b5[b4].stop) {
										b3(b5[b4])
									}
								} else {
									for (b4 in b5) {
										if (b5[b4] && b5[b4].stop
												&& bN.test(b4)) {
											b3(b5[b4])
										}
									}
								}
								for (b4 = b6.length; b4--;) {
									if (b6[b4].elem === this
											&& (b2 == null || b6[b4].queue === b2)) {
										b6[b4].anim.stop(b0);
										b7 = false;
										b6.splice(b4, 1)
									}
								}
								if (b7 || !b0) {
									bH.dequeue(this, b2)
								}
							})
				}
			});
	function bG(b2, b4) {
		var b3, b0 = {
			height : b2
		}, b1 = 0;
		for (; b1 < 4; b1 += 2 - b4) {
			b3 = bR[b1];
			b0["margin" + b3] = b0["padding" + b3] = b2
		}
		if (b4) {
			b0.opacity = b0.width = b2
		}
		return b0
	}
	bH.each({
		slideDown : bG("show"),
		slideUp : bG("hide"),
		slideToggle : bG("toggle"),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function(b0, b1) {
		bH.fn[b0] = function(b2, b4, b3) {
			return this.animate(b1, b2, b4, b3)
		}
	});
	bH.speed = function(b2, b3, b1) {
		var b0 = b2 && typeof b2 === "object" ? bH.extend({}, b2) : {
			complete : b1 || !b1 && b3 || bH.isFunction(b2) && b2,
			duration : b2,
			easing : b1 && b3 || b3 && !bH.isFunction(b3) && b3
		};
		b0.duration = bH.fx.off ? 0
				: typeof b0.duration === "number" ? b0.duration
						: b0.duration in bH.fx.speeds ? bH.fx.speeds[b0.duration]
								: bH.fx.speeds._default;
		if (b0.queue == null || b0.queue === true) {
			b0.queue = "fx"
		}
		b0.old = b0.complete;
		b0.complete = function() {
			if (bH.isFunction(b0.old)) {
				b0.old.call(this)
			}
			if (b0.queue) {
				bH.dequeue(this, b0.queue)
			}
		};
		return b0
	};
	bH.easing = {
		linear : function(b0) {
			return b0
		},
		swing : function(b0) {
			return 0.5 - Math.cos(b0 * Math.PI) / 2
		}
	};
	bH.timers = [];
	bH.fx = I.prototype.init;
	bH.fx.tick = function() {
		var b2, b1 = bH.timers, b0 = 0;
		for (; b0 < b1.length; b0++) {
			b2 = b1[b0];
			if (!b2() && b1[b0] === b2) {
				b1.splice(b0--, 1)
			}
		}
		if (!b1.length) {
			bH.fx.stop()
		}
	};
	bH.fx.timer = function(b0) {
		if (b0() && bH.timers.push(b0) && !ac) {
			ac = setInterval(bH.fx.tick, bH.fx.interval)
		}
	};
	bH.fx.interval = 13;
	bH.fx.stop = function() {
		clearInterval(ac);
		ac = null
	};
	bH.fx.speeds = {
		slow : 600,
		fast : 200,
		_default : 400
	};
	bH.fx.step = {};
	if (bH.expr && bH.expr.filters) {
		bH.expr.filters.animated = function(b0) {
			return bH.grep(bH.timers, function(b1) {
				return b0 === b1.elem
			}).length
		}
	}
	var bn = /^(?:body|html)$/i;
	bH.fn.offset = function(cc) {
		if (arguments.length) {
			return cc === aC ? this : this.each(function(cd) {
				bH.offset.setOffset(this, cc, cd)
			})
		}
		var b6, b1, b7, b8, b5, b9, b0, b4, ca, b3, b2 = this[0], cb = b2
				&& b2.ownerDocument;
		if (!cb) {
			return
		}
		if ((b7 = cb.body) === b2) {
			return bH.offset.bodyOffset(b2)
		}
		b1 = cb.documentElement;
		if (!bH.contains(b1, b2)) {
			return {
				top : 0,
				left : 0
			}
		}
		b6 = b2.getBoundingClientRect();
		b8 = bo(cb);
		b5 = b1.clientTop || b7.clientTop || 0;
		b9 = b1.clientLeft || b7.clientLeft || 0;
		b0 = b8.pageYOffset || b1.scrollTop;
		b4 = b8.pageXOffset || b1.scrollLeft;
		ca = b6.top + b0 - b5;
		b3 = b6.left + b4 - b9;
		return {
			top : ca,
			left : b3
		}
	};
	bH.offset = {
		bodyOffset : function(b0) {
			var b2 = b0.offsetTop, b1 = b0.offsetLeft;
			if (bH.support.doesNotIncludeMarginInBodyOffset) {
				b2 += parseFloat(bH.css(b0, "marginTop")) || 0;
				b1 += parseFloat(bH.css(b0, "marginLeft")) || 0
			}
			return {
				top : b2,
				left : b1
			}
		},
		setOffset : function(b3, cc, b6) {
			var b7 = bH.css(b3, "position");
			if (b7 === "static") {
				b3.style.position = "relative"
			}
			var b5 = bH(b3), b1 = b5.offset(), b0 = bH.css(b3, "top"), ca = bH
					.css(b3, "left"), cb = (b7 === "absolute" || b7 === "fixed")
					&& bH.inArray("auto", [ b0, ca ]) > -1, b9 = {}, b8 = {}, b2, b4;
			if (cb) {
				b8 = b5.position();
				b2 = b8.top;
				b4 = b8.left
			} else {
				b2 = parseFloat(b0) || 0;
				b4 = parseFloat(ca) || 0
			}
			if (bH.isFunction(cc)) {
				cc = cc.call(b3, b6, b1)
			}
			if (cc.top != null) {
				b9.top = (cc.top - b1.top) + b2
			}
			if (cc.left != null) {
				b9.left = (cc.left - b1.left) + b4
			}
			if ("using" in cc) {
				cc.using.call(b3, b9)
			} else {
				b5.css(b9)
			}
		}
	};
	bH.fn
			.extend({
				position : function() {
					if (!this[0]) {
						return
					}
					var b2 = this[0], b1 = this.offsetParent(), b3 = this
							.offset(), b0 = bn.test(b1[0].nodeName) ? {
						top : 0,
						left : 0
					} : b1.offset();
					b3.top -= parseFloat(bH.css(b2, "marginTop")) || 0;
					b3.left -= parseFloat(bH.css(b2, "marginLeft")) || 0;
					b0.top += parseFloat(bH.css(b1[0], "borderTopWidth")) || 0;
					b0.left += parseFloat(bH.css(b1[0], "borderLeftWidth")) || 0;
					return {
						top : b3.top - b0.top,
						left : b3.left - b0.left
					}
				},
				offsetParent : function() {
					return this.map(function() {
						var b0 = this.offsetParent || q.body;
						while (b0
								&& (!bn.test(b0.nodeName) && bH.css(b0,
										"position") === "static")) {
							b0 = b0.offsetParent
						}
						return b0 || q.body
					})
				}
			});
	bH.each({
		scrollLeft : "pageXOffset",
		scrollTop : "pageYOffset"
	}, function(b2, b1) {
		var b0 = /Y/.test(b1);
		bH.fn[b2] = function(b3) {
			return bH.access(this, function(b4, b7, b6) {
				var b5 = bo(b4);
				if (b6 === aC) {
					return b5 ? (b1 in b5) ? b5[b1]
							: b5.document.documentElement[b7] : b4[b7]
				}
				if (b5) {
					b5.scrollTo(!b0 ? b6 : bH(b5).scrollLeft(), b0 ? b6
							: bH(b5).scrollTop())
				} else {
					b4[b7] = b6
				}
			}, b2, b3, arguments.length, null)
		}
	});
	function bo(b0) {
		return bH.isWindow(b0) ? b0 : b0.nodeType === 9 ? b0.defaultView
				|| b0.parentWindow : false
	}
	bH.each({
		Height : "height",
		Width : "width"
	}, function(b0, b1) {
		bH.each({
			padding : "inner" + b0,
			content : b1,
			"" : "outer" + b0
		},
				function(b2, b3) {
					bH.fn[b3] = function(b7, b6) {
						var b5 = arguments.length
								&& (b2 || typeof b7 !== "boolean"), b4 = b2
								|| (b7 === true || b6 === true ? "margin"
										: "border");
						return bH.access(this, function(b9, b8, ca) {
							var cb;
							if (bH.isWindow(b9)) {
								return b9.document.documentElement["client"
										+ b0]
							}
							if (b9.nodeType === 9) {
								cb = b9.documentElement;
								return Math.max(b9.body["scroll" + b0],
										cb["scroll" + b0], b9.body["offset"
												+ b0], cb["offset" + b0],
										cb["client" + b0])
							}
							return ca === aC ? bH.css(b9, b8, ca, b4) : bH
									.style(b9, b8, ca, b4)
						}, b1, b5 ? b7 : aC, b5)
					}
				})
	});
	a3.jQuery = a3.$ = bH;
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("jquery", [], function() {
			return bH
		})
	}
})(window);
function setCookie(b, d, a) {
	a = a || 7;
	var f = new Date();
	f.setDate(f.getDate() + a);
	document.cookie = b + "=" + escape(d)
			+ ((a == null) ? "" : ";expires=" + f.toGMTString())
}
function getCookie(a) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(a + "=");
		if (c_start != -1) {
			c_start = c_start + a.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length
			}
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}
function HashMap() {
	var a = 0;
	var b = new Object();
	this.put = function(d, f) {
		if (!this.containsKey(d)) {
			a++
		}
		b[d] = f
	};
	this.get = function(d) {
		return this.containsKey(d) ? b[d] : null
	};
	this.remove = function(d) {
		if (this.containsKey(d) && (delete b[d])) {
			a--
		}
	};
	this.containsKey = function(d) {
		return (d in b)
	};
	this.containsValue = function(d) {
		for ( var f in b) {
			if (b[f] == d) {
				return true
			}
		}
		return false
	};
	this.values = function() {
		var d = new Array();
		for ( var f in b) {
			d.push(b[f])
		}
		return d
	};
	this.keys = function() {
		var d = new Array();
		for ( var f in b) {
			d.push(f)
		}
		return d
	};
	this.size = function() {
		return a
	};
	this.clear = function() {
		a = 0;
		b = new Object()
	}
}
var js_loading = "加载中...";
var js_reprot_latest_pos = "上报GPS位置消息";
var js_reprot_gsm_pos = "上报基站位置消息";
var js_nick_name = "昵称";
var js_lat = "纬度";
var js_lng = "经度";
var js_speed = "速度";
var js_date_time = "时间";
var js_battery = "电量";
var js_pos_type = "模式";
var js_pos_type_gps = "GPS卫星定位";
var js_pos_type_gsm = "GSM网络定位";
var js_view_latest_pos = "查看最后GPS位置";
var js_report_linkcheck = "上报链路检测";
var js_report = "上报";
var js_report_track = "个轨迹";
var js_sync_number_success = "同步号码成功";
var js_sync_number_failure = "同步SOS和监控人号码失败,请重试！";
var js_sync_alarm_area_success = "同步报警区域成功";
var js_sync_alarm_area_failure = "同步报警区域失败,请重试！";
var js_sync_param = "同步参数";
var js_success = "成功";
var js_failure = "失败,请重试！";
var js_in_region = "入界";
var js_out_region = "出界";
var js_alarm = "报警";
var js_sycn_param_reboot = "同步手机参数";
var js_close_monitering = "断开实时监控";
var js_poweroff_low_battery = "低电关机报警";
var js_poweroff_active = "主动关机";
var js_poweroff_auto = "自动关机报警";
var js_sos_alarm = "SOS报警";
var js_connect_monitering_success = "连接消息服务器成功";
var js_close_monitering_server = "断开消息服务器";
var js_connect_monitering_server_notice = "连接实时监控程序异常，本功能需要访问外部的12347端口。\r\n请检测防火墙设置或联系我们客服！";
var js_hour = "时";
var js_minute = "分";
var js_select_mobile_first = "请选择监控对象";
var js_request_latest_pos_timeout = "请求最新位置超时";
var js_request = "请求";
var js_current_postion = "当前最新位置";
var js_click_start_btn_first = "请先点击【启动】按钮";
var js_change_monitering_interval = "改变监控间隔";
var js_realtime_monitering = "实时监控";
var js_stop = "停止";
var js_start = "开始";
var js_play = "播放";
var js_pause = "暂停";
var js_load_data_failure = "加载数据失败！";
var js_back_try_again = "请返回重试";
var js_modify_info_right_click = "右键单击修改资料";
var js_please_wait = "请等待";
var js_please_stop = "请先停止";
var js_latest_pos_task_over = "最新位置任务完成";
var js_please_left_click_first = "请先使用鼠标左键点击选中手机后再操作";
var js_modify_info = "修改信息";
var js_single_click_to_add_mobile = "单击增加被监护对象";
var js_add_mobile = "新增被监护对象";
var js_please_select_time_range = "请选择查询时间段";
var js_base_setting = "基本设置";
var js_system_setting = "系统设置";
var js_school_manage = "校园管理";
var js_satellitemanage = "卫星管理";
var js_address_format = "位置格式";
var js_game_manage = "游戏管理";
var js_remote_control = "远程管理";
var js_login_sys_successed = "登陆系统成功";
var js_please_click_stop_btn_first = "请先点击【停止】按钮后,再操作其它功能";
var js_have_not_found_any_track = "此时间段内没有查到轨迹";
var js_have_too_many_track = "轨迹返回结果太多,请分小时段进行查询";
var js_have_total_track1 = "选择的时间段内共有";
var js_have_total_track2 = "个轨迹点";
var js_play_over = "播放完毕";
var js_no = "序号";
var js_out = "离开";
var js_in = "进入";
var js_no_in_out_record = "无出入界记录";
var js_can_show_in_map = "无法在地图上显示";
var js_lat_lng = "经纬度";
var js_radius_is_number = "区域半径需为数字";
var js_min_radius = "最小半径为";
var js_area_name_not_null = "区域名称不能为空";
var js_pick_point_in_map = "请在地图上点取区域";
var js_add_success = "添加成功";
var js_add_failure = "添加失败";
var js_school = "学校";
var js_home = "我家";
var js_net_bar = "网吧";
var js_game_hall = "游戏厅";
var js_danger_area = "危险区";
var js_save_success = "保存成功";
var js_save_failure = "保存失败";
var js_name = "名称";
var js_check_delete_record = "请先选中需要删除的区域";
var js_inner_area_cant_delete = "内置区域不允许删除";
var js_delete_area_confirm = "确认要删除所选中的区域吗?";
var js_delete_success = "删除成功";
var js_delete_failure = "删除失败";
var js_cmd_had_sent = "指令已发出！";
var js_sync_failure = "同步失败";
var js_sync_notice = "请先在手机上操作【家长】>【同步数据到服务器】功能！";
var js_user_name_is_empty = "用户名不能为空";
var js_login_name_min_six = "用户名最少为五位";
var js_login_name_is_not_valid = "用户名只能包含数字和字母";
var js_login_pwd_is_empty = "密码不能为空";
var js_nickname_is_empty = "昵称不能为空";
var js_mobile_is_not_valid = "手机号码不正确";
var js_delete_mobile_confirm = "确认要将此手机删除吗？";
var js_old_pwd_is_empty = "旧密码不能为空";
var js_new_pwd_is_empty = "新密码不能为空";
var js_two_pwd_is_same = "两次新密码不一致";
var js_pwd_is_min_six = "新密码最少为六位";
var js_modify_success = "修改成功";
var js_modify_failure = "修改失败";
var js_tel_format_is_wrong = "输入电话号码不正确";
var js_sync_cmd_sent_please_wait = "同步请求已接收，结果请留意右上角的提示信息";
var js_opererate_failure = "操作失败";
var js_modify = "修改";
var js_delete = "删除";
var js_name_is_empty = "姓名不能为空";
var js_tel_is_empty = "电话不能为空";
var js_modify_tel = "修改号码";
var js_delte_tel_confirm = "确认要删除此号码吗？";
var js_sms_content_is_empty = "短语内容不能为空";
var js_sms_content_max_40 = "短语内容最多40个字";
var js_modify_sms = "修改短语";
var js_delete_sms_confirm = "确认要删除此短语吗？";
var js_login_name_pwd_is_wrong = "用户名和密码有误";
var js_lat_lng_is_wrong = "请输入正确经纬度";
var js_date_format_is_wrong = "时间格式不正确";
var js_date_range_is_wrong = "设置时间段不正确";
var js_date_range_5_minute = "时间段最少5分钟";
var js_date_range_10_minute = "时间段最少10分钟";
var js_date_range_max_30_minute = "时间段最多30分钟";
var js_date_range_is_override = "时间段不允许有重叠";
var js_date_range_distance_10_minute = "时间段间隔最少10分钟";
var js_date_range_is_not_set = "时间段未设置，不能开启游戏控制开关";
var js_time_distance_need_number = "游戏时长需为数字";
var js_rest_distance_need_number = "休息时长需为数字";
var js_old_pwd_need_number = "旧家长密码需要为数字";
var js_old_pwd_length_min_4 = "旧家长密码最少需要有4位";
var js_new_pwd_need_number = "新家长密码需要为数字";
var js_new_pwd_length_min_4 = "新家长密码最少需要有4位";
var js_remote_lock_mobile_sent = "锁机请求已发送";
var js_remote_unlock_mobile_sent = "解锁请求已发送";
var js_remote_poweroff_sent = "远程关机请求已发送";
var js_remote_sleep_sent = "远程休眠请求已发送";
var js_remote_wakeup_sent = "远程唤醒请求已发送";
var js_remote_wakeup_notice = "休眠状态下您可以远程唤醒儿童手机，唤醒后儿童手机可正常使用。";
var js_remote_sleep_notice = "儿童手机在待机状态下时，您可以远程让儿童手机休眠。";
var js_remote_modify_pwd_sent = "指令已发送,请稍候...";
var js_gpskey_save_success = "GPS开关保存成功";
var js_address_query_format1 = '<span class="STYLE2">格式一:<br></span>儿童手机卫星定位成功，将返回当前位置的描述如“ＸＸ路ＸＸ大厦”，当孩子在室内里，搜索不到卫星，将返回孩子的最后位置点。';
var js_address_query_format2 = '<span class="STYLE2">格式二:<br></span>如果儿童手机搜索不到卫星，自动转为基站定位，将把孩子的基站定位的大概位置返回到监护人手机。';
var js_address_query_format3 = '<span class="STYLE2">格式三:<br></span>儿童手机返回给监护人手机的是孩子所在位置的地图网址，您可以链接此网址查看孩子位置地图。';
var js_address_query_format4 = '<span class="STYLE2">格式四:<br></span>儿童手机返回给监护人手机的是孩子与手机个性地图的相对位置。';
var js_query_format_save_success = "查询方式切换成功";
var js_begin_time_is_empty = "开始时间不能为空";
var js_end_time_is_empty = "结束时间不能为空";
var js_school_in_region = "到校";
var js_school_out_region = "离校";
var js_school_no_record = "此时间段内未找到学校签到记录";
var js_study_add_time_range_first = "请先根据孩子的上课时间编辑【上课时段】";
var js_auto_poweroff_time_is_same = "开关机时间不能相同";
var js_confirm_reset_mobile = "用户数据将被清除<br>确认要对机器进行恢复默认操作吗?";
var js_add_mobile = "添加号码";
var js_qinqing_hu_dong = "亲情互动";
var js_monitor_record = "监控记录";
var js_my_music = "我的音乐";
var js_err_9990001 = "指令无法识别";
var js_err_9990004 = "登陆已失效";
var js_err_9990005 = "非授权IP访问接口";
var js_err_9990006 = "将字符串转化成XML失败";
var js_err_9990007 = "在XML中未找到action属性";
var js_err_9990008 = "在XML中未找到checkSum属性";
var js_err_9990009 = "在XML中未找到loginName属性";
var js_err_9990010 = "在XML中未找到version属性";
var js_err_9990011 = "请求参数不完整";
var js_err_9990012 = "消息协议不匹配";
var js_err_9990013 = "列表开始值不正确";
var js_err_9990014 = "每页数量不合法";
var js_err_9990015 = "每页数量不能超过一千条";
var js_err_9990016 = "仅接收HTTP的POST方法";
var js_err_9990017 = "接口未实现(implement)功能";
var js_err_9990018 = "请先填写监护人号码后再进行同步操作";
var js_err_9999999 = "未捕获异常";
var js_err_1070001 = "短信ID不合法";
var js_err_1070002 = "短信序号不合法";
var js_err_1070003 = "短信内容不能为空";
var js_err_1070004 = "短信条数最多30条";
var js_err_1060001 = "电话本ID不合法";
var js_err_1060002 = "电话本序号不合法";
var js_err_1060003 = "电话本姓名不能为空";
var js_err_1060004 = "电话本号码不能为空";
var js_err_1060005 = "电话本号码最多50个";
var js_err_1050001 = "区域名称不能为空";
var js_err_1050002 = "区域顶点不能为空";
var js_err_1050003 = "区域顶点个数不能少于三个";
var js_err_1050004 = "区域ID不能为空";
var js_err_1050005 = "不允许操作不属于自己的区域";
var js_err_1050006 = "区域已经和终端进行了绑定,请先解除绑定关系";
var js_err_1050007 = "区域不存在";
var js_err_1050008 = "报警类型不能为空";
var js_err_1050009 = "报警时间限制有重叠";
var js_err_1050010 = "报警时间范围不是有效的";
var js_err_1050011 = "报警类型不是有效的";
var js_err_1050012 = "限速值不是有效的";
var js_err_1050013 = "报警参数设置ID不能为空";
var js_err_1050014 = "不允许访问其它人的报警参数信息";
var js_err_1050015 = "报警参数信息不存在";
var js_err_1050016 = "设置参数是否启动标识不合法";
var js_err_1050017 = "一个区域最多只能绑定3条报警规则";
var js_err_1050018 = "区域名称已存在";
var js_err_1050019 = "最多添加50个区域";
var js_err_1050020 = "最多添加30个区域";
var js_err_1040001 = "开始时间不能为空";
var js_err_1040002 = "结束时间不能为空";
var js_err_1040003 = "开始时间不是约定日期格式";
var js_err_1040004 = "结束时间不是约定日期格式";
var js_err_1040005 = "开始时间不是约定日期格式";
var js_err_1040006 = "结束时间不是约定日期格式";
var js_err_1030001 = "终端编号不合法";
var js_err_1030002 = "终端名称不能为空";
var js_err_1030004 = "终端编号不能为空";
var js_err_1030005 = "终端续费月数不合法";
var js_err_1030006 = "终端编号已注册";
var js_err_1030008 = "运行模式不正确";
var js_err_1030009 = "GPS回报间隔不正确";
var js_err_1030010 = "一次性最多只能查询三十个终端信息";
var js_err_1030011 = "终端编号已经被您自己注册了";
var js_err_1030013 = "手机未开机或未开通GPRS功能";
var js_err_1030014 = "终端编号不存在";
var js_err_1030015 = "原家长密码不正确";
var js_err_1030017 = "家长号码不能为空";
var js_err_1020001 = "当前操作用户所属角色与查询的角色ID不同";
var js_err_1020002 = "不能查看及操作其他用户的终端信息,请刷新再试";
var js_err_1020003 = "当前操作区域信息不属于操作用户,请刷新再试";
var js_err_1020004 = "当前电话本信息不属于操作用户,请刷新再试";
var js_err_1020005 = "当前常用短语信息不属于操作用户,请刷新再试";
var js_err_1020006 = "不允许删除自己的手机";
var js_err_1010001 = "用户不存在";
var js_err_1010002 = "用户名不能为空";
var js_err_1010003 = "只能查看自己的用户信息";
var js_err_1010006 = "用户密码不能为空";
var js_err_1010008 = "密码问题不能为空";
var js_err_1010009 = "密码答案不能为空";
var js_err_1010010 = "是否为管理员不能为空";
var js_err_1010011 = "用户ID不能为空";
var js_err_1010012 = "是否为管理员值不合法";
var js_err_1010013 = "添加的角色ID不属于操作人所在的单位";
var js_err_1010014 = "一个单位下只能添加一个管理员帐户";
var js_err_1010015 = "用户名已存在";
var js_err_1010016 = "用户名长度最少需要六位";
var js_err_1010017 = "用户密码长度最少需要六位";
var js_err_1010018 = "用户ID不合法";
var js_err_1010019 = "用户余额不够";
var js_err_1010020 = "用户名和密码有误";
var js_err_1010021 = "用户已经被锁定";
var js_err_1010022 = "旧密码不正确";
var js_err_1010023 = "用户名禁止使用";
var exception = new HashMap();
exception.put("9990001", js_err_9990001);
exception.put("9990004", js_err_9990004);
exception.put("9990005", js_err_9990005);
exception.put("9990006", js_err_9990006);
exception.put("9990007", js_err_9990007);
exception.put("9990008", js_err_9990008);
exception.put("9990009", js_err_9990009);
exception.put("9990010", js_err_9990010);
exception.put("9990011", js_err_9990011);
exception.put("9990012", js_err_9990012);
exception.put("9990013", js_err_9990013);
exception.put("9990014", js_err_9990014);
exception.put("9990015", js_err_9990015);
exception.put("9990016", js_err_9990016);
exception.put("9990017", js_err_9990017);
exception.put("9990018", js_err_9990018);
exception.put("9999999", js_err_9999999);
exception.put("1070001", js_err_1070001);
exception.put("1070002", js_err_1070002);
exception.put("1070003", js_err_1070003);
exception.put("1070004", js_err_1070004);
exception.put("1060001", js_err_1060001);
exception.put("1060002", js_err_1060002);
exception.put("1060003", js_err_1060003);
exception.put("1060004", js_err_1060004);
exception.put("1060005", js_err_1060005);
exception.put("1050001", js_err_1050001);
exception.put("1050002", js_err_1050002);
exception.put("1050003", js_err_1050003);
exception.put("1050004", js_err_1050004);
exception.put("1050005", js_err_1050005);
exception.put("1050006", js_err_1050006);
exception.put("1050007", js_err_1050007);
exception.put("1050008", js_err_1050008);
exception.put("1050009", js_err_1050009);
exception.put("1050010", js_err_1050010);
exception.put("1050011", js_err_1050011);
exception.put("1050012", js_err_1050012);
exception.put("1050013", js_err_1050013);
exception.put("1050014", js_err_1050014);
exception.put("1050015", js_err_1050015);
exception.put("1050016", js_err_1050016);
exception.put("1050017", js_err_1050017);
exception.put("1050018", js_err_1050018);
exception.put("1050019", js_err_1050019);
exception.put("1050020", js_err_1050020);
exception.put("1040001", js_err_1040001);
exception.put("1040002", js_err_1040002);
exception.put("1040003", js_err_1040003);
exception.put("1040004", js_err_1040004);
exception.put("1040005", js_err_1040005);
exception.put("1040006", js_err_1040006);
exception.put("1030001", js_err_1030001);
exception.put("1030002", js_err_1030002);
exception.put("1030004", js_err_1030004);
exception.put("1030005", js_err_1030005);
exception.put("1030006", js_err_1030006);
exception.put("1030008", js_err_1030008);
exception.put("1030009", js_err_1030009);
exception.put("1030010", js_err_1030010);
exception.put("1030011", js_err_1030011);
exception.put("1030013", js_err_1030013);
exception.put("1030014", js_err_1030014);
exception.put("1030015", js_err_1030015);
exception.put("1030017", js_err_1030017);
exception.put("1030018", "网络忙,请稍后再试");
exception.put("1020001", js_err_1020001);
exception.put("1020002", js_err_1020002);
exception.put("1020003", js_err_1020003);
exception.put("1020004", js_err_1020004);
exception.put("1020005", js_err_1020005);
exception.put("1020006", js_err_1020006);
exception.put("1010001", js_err_1010001);
exception.put("1010002", js_err_1010002);
exception.put("1010003", js_err_1010003);
exception.put("1010006", js_err_1010006);
exception.put("1010008", js_err_1010008);
exception.put("1010009", js_err_1010009);
exception.put("1010010", js_err_1010010);
exception.put("1010011", js_err_1010011);
exception.put("1010012", js_err_1010012);
exception.put("1010013", js_err_1010013);
exception.put("1010014", js_err_1010014);
exception.put("1010015", js_err_1010015);
exception.put("1010016", js_err_1010016);
exception.put("1010017", js_err_1010017);
exception.put("1010018", js_err_1010018);
exception.put("1010019", js_err_1010019);
exception.put("1010020", js_err_1010020);
exception.put("1010021", js_err_1010021);
exception.put("1010022", js_err_1010022);
exception.put("1010023", js_err_1010023);
var imagedata = {
	add : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAGFBMVEX///8ApeAApeAApeAApeAApeAApeAApeDdbx+UAAAACHRSTlMAEVWIzN3/IlQV7IcAAAEoSURBVEjH7VbBrgMhCBQQ+P8/rrZNNq2D0vAOr0m5bXYGRlCgtZ99uRFLVzVT7cL0EZW7vVjndFDRiRd2J3IfEsanSio86wL16U4T0QXDpks5Se4RhobXvpXuauqb88Q/79yd863roXkvjDbOxfRQjxE7yBqbvYsyWzG4YsDrQp7qAtHtTG5YuAJBgMwoNFtvGTIM0lEmEFnWKGRGObKvSKgakoFGgUmE5BUKj4zJq0g1z5J9KZaifGXJF8xCuwrzl+SS7FLCSqUqXZLS9cw/DISsPMlaMyi1ISgn3QBR6HTrnYKOTd+jpp8YNxSOm8Sg2wEOI3ZwDwM6/u374f5wHmbkcKgnhvFmdlponntPf136aFI1tchdS9zwQJ8tcbX1sbq4/uwf2g3LUAmHZwAhrQAAAABJRU5ErkJggg==",
	anquan : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMkE1RDhGNDVBNzcxMUU0QjhGQUZERjIxNDUzNzA0MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMkE1RDhGMzVBNzcxMUU0QjhGQUZERjIxNDUzNzA0MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ea/nqwAAA51JREFUeNrsml1IVEEUx2fD3CKNqMAIpC+ICiMQqoeEijAq+nitFxGkICq0Hvp46KWXvl4Sgigj0KKH8sUgqOyThLQsRISVgvVBo8hc/CDTbLP/Yc+CLKszc+8Z9yJ74M9d7sw99/zumZmduXdC4+PjaibbLDXDLQuYBQy45dheEK7rXo5DVwZibYc2pJ4cLSsUz+CuDCWjCFrmtIkie3k4nM5gd7rkDBBwIRxqoBUZ7FIHoUpxQMDl4nCHb5BpuwZdgEIigICjtv8WKg/Q4HgeegGtkxhF202f1jTbdqhDlySTJhpEOOPYTADHAgw4JgE4HGDAYQnAgQADDkgA/g4woDa2HAcZ/AB94v6xEtoKzZuk7i/oDRSFZkPF0EbJDJoA/jS8GQV6FIqknF8AneEpXrLF/IOuQJeh/pT6a6Eb/GB8x2bSRL8Z1KmHdqSBUwxwLmWiUM7n+tPUj7CveonYJDJI5RVQXFPvLrRzwu+pLM4+t0GLXWfwh6ac5qiDhs34OsvEBtm3n9iMMvhdU95qMSh8tBywWn3GZgQYFZzp/BWeqUQlmugXTXmBw/+5Ap+x6QFHywr7NJ25xCFgiWaA6ZNa0U/VFw5A+Q7g8tm3r75vCtiiCeSEA8DjmgfXIgn4XFN+FloqCLeEJwJ+YrICfDfJrGNiFmsEF8e3NNnr55hkADHQxA2e2B7olABcFbTPIHtxyQySPTSoQxPovT7g6KXyVaFYrAEfGSxPyN8DaJMHuGIOXDf5GOBYZAHRTEc4eJ3NhR5D6y3gqO5TKM+gLsUw4iKDymDymzRaAbyCNhvCvdSsGrzEYA+ILDbj8N6w+iLoGVSqmam8toCjezc7A2S7aFF3PjfXijRlh1Ti7fRCR/f2DNgAtVnUp3ctt6Gb0BwoDFVD96FcCz9tfG8rC3nZZRGu6y7l5mdrn/l9zBoP19LbgMY03UY8g+S00WaonmCrPcI1pINz1USTdgwaUu5tiCfealoBkcUeR6uIVKN79Ew7IEPW4nDPIRy9fav140BiG8lh2/8mQyOfR/w6kQCkadN+lfgYKWUd7HMkCIBkvdBuqFPAVyevKnolApPc6UQDwRaoyYePJvbxVSoo6a1cMZX4rlDt4dpqvjYmGZCLvWp/eFVOTdZky1cX163ia1XQAZP2RCW2X032FSnGZUVc14m53m1I39Bp+xXtjjqpEp/GIvx7FZc53QMQym5pzgJmAbOALu2/AAMA6i7JpuwhaPAAAAAASUVORK5CYII=",
	appManager : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NTc4ZWU5OC01ZGIwLWVhNGMtODcyNS0wMjZkZmQ0OTA2YWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTEyN0Q4NjgwNDE3MTFFNUEzOTJGQzA0ODc1NkYyNjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTEyN0Q4NjcwNDE3MTFFNUEzOTJGQzA0ODc1NkYyNjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI1MTk4YWQ0LTdiYzgtNTA0My05Y2ZjLWQzNTAyMDRkZGYyZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NTc4ZWU5OC01ZGIwLWVhNGMtODcyNS0wMjZkZmQ0OTA2YWIiLz4gPC9y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",
	appRecommend : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NTc4ZWU5OC01ZGIwLWVhNGMtODcyNS0wMjZkZmQ0OTA2YWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RURFMTI0M0IwNDE4MTFFNUI3MjdEOEYzRTMwOEU0Q0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RURFMTI0M0EwNDE4MTFFNUI3MjdEOEYzRTMwOEU0Q0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM3MmMwMzk1LTk2ZGMtYjA0ZS1hZjFmLWJmMzM0NWUxN2ZlYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NTc4ZWU5OC01ZGIwLWVhNGMtODcyNS0wMjZkZmQ0OTA2YWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6qMkupAAADqUlEQVR42uyaWUgVURjH56aULdpiRA89iFgSSRGILbYY7dH2EJG2EQW9GJRERAW2vEX1YBFYYYtIQUQLZTvmSyXRYgsWRg/VU0VWllm49P/yf2EabveeuZ7jHS/zwY/r3Plmzvl7zvnmfN/cQHt7uxXP1sOKc4t7gYn2gwMjX8eFqKK6DOURHAC2gwfgJ6gI4dNuGKdVsC+PQDH7qDaCDpsHToLBHhykJDCWFIKV4JqbNTgdXPSoOKdJHy9zQJQE9gdnbKNbBuaAx2EaKaVPrYYOyz3m8p7hfETQMR4ngFNgoIrAQsfIbQHXwV7Qy+GbwM9N9CnRILCE022zo42gSR/2g6tgq+37VLBBReBix3EqP2UEx4E+tnNTQR0XvdggDQKD7X0HL8E027neYDwDjN03aAtVBGY5jmfy8xWoBLfACrCREW2HzXe2BoGzbH/LKJZzhkibt8EN8ILnZziuHe68WcC+VeNz0Bma34BRoFn82dB80AiOghr6yX/2Ln06Y9L+BNt9ZdasAymcuhLZ2xhJRWi6U5P9OZio0GA6A80q0ML/aLnDZxg4rUGcxXtIkJsM3lNoTYjHW1kIcVFv1fLBTZAdIsgUcCOQpjH0p/GeBSGCTDaXSb7rrVoEy2OjMo/rueCzDD4rh3KNS1R9xkAmaywj6r2oomW4bURDVM3zswkXI3gk3gWu9xNeX6AvMKZrsLuX2QL+FPUF+gL/plY/FH0lQ2kwtfZ1CmxhCjOGWX8/MASs5QbdaWeZrfdlJSAZLAEPvSjwA5hCMU9to/GRokeDE/yuCSwAS8Ed8Jvfy4ifAzlgt8nHhFv7xVLFkwhTto3ipBpWHcZX/Io5A4q8MIL7IogLsLSxjKWOasX7bmO5JOYCSyOcX83sW6p1VS5nxvFYT9G34F0EH1lX96yOqpxbux/rEWxS8GmMUpxYa6wFplv/FoJ1W2asBfZkuDdly70QZPZYIV56aLA1YJIXBErR97zmqToRHPbSTkZewlRqEini5M1Rktf2ojpEBsWleDWb6IzIXN3iTKVL0YjM5TUpujtjKh90I9KYONMZvYpIo+K6omQRTqRxcf8T2NwFIo0EFNg3FYHPDY9kUFyygXbqVQReMDhdqwyKE7ukIvAQ+GSoAzkGxX0GB1UEfmUG3mp1H5O+yo8kGlSjqLzkXxTqAg/aF6vjB0BX3D4m5IIRYKfVUats9JAoqdfUMlXLZACLqiYja3EX6ZYW8H+U7gv0tv0RYADoBNZcxYFsFQAAAABJRU5ErkJggg==",
	appStatis : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NTc4ZWU5OC01ZGIwLWVhNGMtODcyNS0wMjZkZmQ0OTA2YWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc3NTE4NjEwNDE3MTFFNThBOUNBNUY0MTQ0NTA0QUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc3NTE4NjAwNDE3MTFFNThBOUNBNUY0MTQ0NTA0QUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1NzhlZTk4LTVkYjAtZWE0Yy04NzI1LTAyNmRmZDQ5MDZhYiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NTc4ZWU5OC01ZGIwLWVhNGMtODcyNS0wMjZkZmQ0OTA2YWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7u27/aAAADPklEQVR42uyaXYgOURjHz6yvzQXrK9pY7SK0riQfZZeifJTaC9ktm0S5scj6KNJeKEK+ksst7VpFUooL5IJscoGr9dGSC7EssxdEWWL8n+Z5622aGXPmnDPvzJqnfs37njM7O/95nznPx4zlOI5QsVGd70QpbXDT1ND5MjHELQmB1eAU6AE/mOc8Vp11gfvAS9AKasmjmbk8RnMHgWXqBIYbFHeCBZJ9AVfAE/4+HzSCCnAEVIKWLAlsKhJ3B2wEtmefQ6ATrAHbwSPQlQUXpYt2jD8/BOt8xAkeawDd/P0oGJmKXxChge4ZWp9H+EwvAtP58xneL8xon6VgGtjAF8VrvwDFIycpF6X7a2+E/a5KHvdiyNxZsDspF11cgpC2IM4fWUGZDNywHpuTYILPNK165eAGOGdY2FZetCh+9gXcy3uQ0XTLuii5S9U//jndF3cNC1zBW7qgNT7zNNYBZsi6aJXIjtWYioOUlYwzfPLlpQz0W5j/OtnOBeYCc4F6FpnLXKRGzQdXFiXdmRDYhWzhsURP5rWPwAFwG3yLeb6U5M8DS4yFCQjaySVQkH3i+s9rv0EdeKHhh7kANpuKg3PY/YLsbcC4rUkc2YOoApNcZCZzm0LVKqKKM92TCVqoTnNlENcqZdK3pAUWTjCPg1kVeIDdy1JgNniWRoE2x8VBxeP0Crc/Y+wepBN9EzLfFzA+VrgdNh1Pa2qNCUQ204ZNW4RMxmvUYrwPrgu3DRjXqNPQZELgaoih7vOfiPuvDWgttKY1F20Rhp4f5GEiF6hH4HkwCYyPSHPWCt5bWEFtiXrwps/YK3BJMRedKdxOXplugQVBhwPqveI4WOcz/hMsD4mTMvYd7DIV6CeKkE5yyDG/ahInZOrKJBcZujD7hf8zRRmbBXakdRU9zq7qKNArk6rlbUMD9l6xopgCRqdV4HpwTfEYY4T74LU+bS7ar0FcYTXuMPkLPhXhLxfYIasoNW17NIhcZkKgxfVgOzbtETIZ7+tZw4Tbz7ynWA/SKyoLTQhshph+iXpwlc8Y9TQb0rqKNgo9jdu8XMoF5gKjCfycIR0f4gjcBj5mQNxAWHVhDfW37pUFpt3+CjAAfpS3ZJfGqEEAAAAASUVORK5CYII=",
	baby_boy60 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiY2ViOTgwZi1mYjRkLTMxNGItYmY0NC02MjQ5MmIxNWI2YzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjlGNEFGOTU4NjY1MTFFNDlDN0JDQURGQzJDQUYwNjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjlGNEFGOTQ4NjY1MTFFNDlDN0JDQURGQzJDQUYwNjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1YmRmZDVmLTIyZGEtMDg0ZS05ODAzLTlhNzVhNzg2NmUwZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiY2ViOTgwZi1mYjRkLTMxNGItYmY0NC02MjQ5MmIxNWI2YzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZIU/WAAAXGUlEQVR42uRdCXgUZZp+q6rv7nTu+yAQQrgSCDEMigKicjnOOMqjMI4r4zk4LqOuD+K4jtccWR1dcdXxgGHEWYfd0bl21dEZQR0vBlkR5JQ7QMiddLo76bP2+6qqIQlJSHdXLuZ7ni/ppKv++uv9v/uv/y9BlmUMIzISTyIuJZ5AXEg8ijhVYzNxArGP2EPcQtymfT5CfJh4N/EO4p3EgeFyY8IQAy0RTydeQDyHuJLYqlPb7cRbiN8j/jPx34lD/0hAC8SziJcSX02cNkjXbSB+nXgD8fvE8rkKdBLxLcS3ERcNsSbvJ36R+CXN/JwTQGcS30t8s2ZfhxOxfV9D/BjxyZEKtIP4h8Q/ILZheJOX+GninxC7RwrQbIOvJ64izsbIohriVcSv6G3D9Qa6ULN9l2Fk01+Ib9XCxWEH9HeInyV24twgF/H3iX895ECXlpZix44dnEQ8ozk7Xai2thbPP/882tra0N7ejmAwCFEUYbPZ4HQ6kZaWhoKCAowdOxYlJSXKd2fEcg0NuPPOOzFr1ixcddVVyjkxEjvLO7QkacgkOov4D8Rf01OUmpubFYD6QxkZGaisrFSOLy8vR3b2abfw2GOP4ZVXXoHZbMbSpUtxzTXXID8/P5YubSa+Mp7IJB6gxxO/STx6IPT2uuuuw/bt26M+7/LLL8eKFSuQk5OjaMP06dO7fH/77bdj+fLlsXTpEPEi4j2xnCzGiEO5ll0NCMhMF154YUznvfHGG1i0aBE2btwIq9WKCRMmdPn+ueeew4MPPhhL06O1ey4fLIku1S6Y3NdBPp8Phw8fxpEjRxSur69HXV0d3G43/H4/wuGwotJsd3Nzc5GXl4fJkydj6tSpXXxAPHT//fcjFAqhqqrqjO9Y0teuXRtLsy1aCWHHQALNBu5j4rzeDti1axdeffVVfPzxxwq40RKDfumll+KGG27AAw88gI8++igusCdOnKj0qSd6/PHHsWDBgliaPUY8k/joQACdroE8tq+DnnjiCaxfv16R2HgpKysLJ08OXGZsMBjw6aefKpoVY73kAuJ+SVN/bbSJ+E9nA5mprKxMF5CZBhJkJg4bWftipLEaJiY9gf434hn9ObCzjR0J9O6778Zz+gytIKUL0FdqhaH+2Zf0dMWxjRRi5xwnrdAwigtorl38UisURZUxjhQSBCHuJjSMCmMFmht46WxhXG+efqTQ8ePHMX/+fCxcuBAPP/ww9u/fH0szjNGLfQlkX1HHDcS/iuWqra2tMSccQ01cN3n99deVOkoM9N3eMOsNaK7A7dVqGf0mr9eL9957T4kWVq9erVv0MdiUnJyMTZs2QZKkqAMl4hKolb+uoWRvSVW0IHP2t2zZMqVqNtKJi1oMNCdO0Yb+UGeVVvVHonmO7yCimH5qbGxUSpFNTU04V2jSpEnYsGFDLKfytNgY4tqzOcNViHKO75577jmnQGbauXMnampqYjnV1pNEdweaHwmIqoBfXV2Nzz77DOci/e1vf4v11Js1LHsFmg9wRNPim2++iXOVWKpjJMbwlt6A5hjwtmhbfO21185ZoI8dOxbP6bd2jqs7Az0b/Sgadaa9e/cOeOFnKInnLOOgsRqmZwC9JNqWNm/ejHOZePIiTlrSHWiOzK+OtpUY09URQ4FA3E/9Xq1hewpoLvdFPR8fY/gzYoinweIkxvT8zkDPiyky93qHV51CEBAIhuDy+vSoyulF8zoDPWe4SRPjFA7L6PAF4HK3w08AimLv4PF3be0+tHnakWwzw+cPQBLFuPpgNBr1uJXZkVoHT8VUxtICT+frCq4GWKvHh5qGFpiNBqQ67cjJToGJkD/Z1AaTQToDYH8ghCPHKTOlgfnFqqW4eHIhZv7zf4CrC2aTYaiBZmyVXnDxOCbEePI0WpIkEa0koazaiXYLgqGwBrCIpjYvTtQ1ozA7FXdcMwcXV4xD0ZgcpBklXP/Ierg8HUhLtCvnBsl+tlA7DS1uRXKvWzAdK5bORdm0YkoXrJhbVoT1b29B+YQCxZxEiCs7Mg1IX9oRIZPJpAfQjO1EBjrm6ZCiouge3GdAWtra4TAbkUSS2uhyw0gSyrb1YE0j0gn4VTcuxK3fnImCCaMYESA3A5/88k38ecteFGQk43h9K9ngDjhtFhQXZGDejIlYRiDPmVtO+knSfqyeXFAiHl3+DWzacQA1jS5kJjsQInAjGlPX6oHdYqLxMNP/ey/lOhwOvZS1lIGeEOvZFRUV/XdUdIMM0LH6Fmx74W68vXUvHnz5HRRmJmPHvmpcOasMzz60DDnj8gCSVFTXgdBE9a4tuOKBX4KMNBLI9k4uykHl+HzMKS/GDJJWS1aKCnBtMx0T4AsBpBUFlSXY8MPvYOb3V8NKA+ukcwPBMAzUj+svq8DbNHDtdHx3U9SZ+BkTnUiR6Jgf6+InixITE5UZlbOHSmEcJQCqblyAyUsvwe8/+hJ+fwiHTzZj2cLpWFd1C5BEEnSwRlVw9obELbUtWHntxZhVOgajyKRk51LElOpkTwmyHQANHImlenzE+Qn0+0gtLph3Hh6+eREeWv8Oxuaq0WuATM5jt38Tma++i/vWvoUJpBXhXmaZxowZoxfQhdyzgpjDKbqxK664ol8mY8/ROtxEKn7Pv15PALURplYEXLW4bNpYrCMJh8mogixoIQcTqX1p6WisXLkEMy6dhuzR5BMCQVXajzUAZLPZAaJ7KMd/+vzKQPzoke+i6pbL8dXeozQmbtjIZLBrWv7188nC2BSp7lUM9Zv7LBAR5/Izntg8a7xNN+0g1b2XJJNEChSHKWbAkZSO51d9WzELrO7orsb8d4dfkU6caFQlmIEGzj4vz9JNoR6blJUrrsLPVi6Fj9raefAEGqgtW1E2JhdmU4TT0YvTlvQEOo2BTomnhSlTpsBisfRpmw/Qjd2yaAbGnD9RlUaKLkpHZ+MPVd9DZkm+6sDijHl7BZsHx+XBqnuX4sM19yA7OQEf7DhEd+1EVmoCvDyQPXmv0lI9nWEq3505nhY41OIZll4LMySBKQk2LJtXoao521Py+hWTCnHJBRNVSc1JBUZlqDY6FOeELttuBphibxSkKw6VNQhfHcM0ilB2rb8PZeRQQcnN+PwMpX890Zw5uuZwZgY67rV/1157rbLUoSdqdrWjgiKJSSy5Da2cJ6tqzzfIDxdaJbz47AasuOPn2LzpEyA9Mb7O2O30I4jHq9bh7rufwpE9XxHgmeogk59wZCRhbHGuYpJYqwxkInp6EqD7A+xxkoOB9uvR0n333XfKbLZT2sySwj7KQ/a5gG6OjHQn+yqwEUTI68bTv96Io6mVqFjyL9hlLMZXuw8Q+MaYTUWgoxXvbqtG3oLbkH/pd/GTvxzFe29/SAOYpEq6y6s6UQr1RlFomZJATpm0iGP5DvIVnNzw51GjRulrxaCuHo2b+IGZ0ukzsZ9MgUw4suPZV92gAM6OD5LQdeVeVjJefuV/sVvOx49X3YWLKyehTbbDmUYhVSDGYlXQD6PZBkvRdHS4mnHXTUvxw589RcDXItRYp/bhlE3zIzfNSfg7yBeHcaSuhQbJhxZyoJPOu0BZlKQjuQ0a0Kl6tLb26Z9jbo6MiyrHo4Mk47V3tuDRF/5HqV10CcH4c6sLB9wiVj76A2UG/fEnnsAzz6xB/gsP41sL2HbXI8pH/sgUSWh3ZGPVXVXwtDYhNzMV8y67DF+79OvYs/1jTJpRSSGQFmWw76DsNIEyzG1f7MOiORWounsxThyqQXLZXL3dss+gl0QzWYL1uIkSEsiSEquWzSmDh25s57EmRVW7AF1bj/wx4zCazMqaNWvgINs6uaIcv/njO/jW/MmqLY/WL2ak4a+//wAfbvoLXn/tNTQ1NqKdrutMy4C3Tuoq0SQIAmWMXFJdfFklfrv6DgrCklFKThr6FJM6UyMD3axXa8Haahia2OFJqvOh/j5xx5V4/4vDpLouSly0G+UahiRjZvl4Va88HmWdiSUlCxWjprHdUbO7aJGm63rI7hud6Vh+++3KGsRrr12CCUX5EFtSlUjjdGfDCJBUP7n8CsytKIJS6jtwQhngYKgVhnxdga7nuzmiW3PU2VMenDoc9qomY/asMogMbuQ7/mWwojRDjZ0vnKdmlx1NJzGZIgE4rbGFeaQ9Mybmw0rawQuTzHaHojzpTomydouaLJ2uCSgFrbmXTFOkW252q85SZjnQ/ZnBg9JDDz3EYnWJLji7TkLwNJAwioh4vpDfBzEE7X+dpY/E3UvK5GtDzvgKZBaMRnKwBSuXzoXdYFCzxWiJJDYpNw1FdgmBxHxUPfkUMgUXsP0dVUMMxq7mi1h2t1Mf/ZBM5lMuISwaIOWV6Qn0f/Gzd4vpw2/1aC10YheEw58QhiZVukkqQz4vJItNBfqMeJXuzNVAsW8aUDiagK9XMzkvRZxmY0wapdh2O4GWmKO0I3/xKVf/IaSmc9FFjbPk02CHA3QMSbdktannEweNCTBMu0pPoBezjd6jV2tiSh7CB0LqFlTUYYFrFX6RboRiatGMLvGdoAFjS0T4ZA38X+yH5LBDSndAdMY4cxMZTEqSsPsTuA+RdlkdsOSaIIVDmjMUu/SDzYRw6vFckvAwaVJCpt6mYy9fdR/UjZ7in4qyOCGbnadVE6rJCAeDvUdqLPmCkfyfgaxIQHWU/Ska9dyYplqkSWYrzDnpMKfZIFqlzqPbVQPob4Gdt6YN3Fcxu0RPkBnbfZHMcIterQpZ4xV1VIDmvkfsYjjcNZaWT+dMUoIFiROS4ChyQuQyJoTYtiWRT0u2lGiFMccJQ2YCBJtVrQQKXc2GTFLO01qKWVNngyE7MiA6dN1Pi7H1R2Yu34O67DZukgqmIlB/AELARSpphED2WggFVEnpKT410E1aLepAqPVJ1c4qIRhpAmdoiU7185kVLZWbyKl2dKjnqgVwYr5WX3N+qvQqZoOFgex0sN0DaeLlepuN95WraeEYL7f9UM/Wg/uoufq9JK/kXCgu5hsykr2MqOsZgHV3akqmZ4bv2HG019aRQ7WgJzEPU8RgL8iHITVFLfb32Kbc9VTtuwDF3NwvkUxHyOSENG4WxMQsvYG+iLGNAM2icBI670EnB3yQ22oV6Qod2Qajt1aVuv7GqXm5OPnyf2LPU7+CLTexR5DDJInlP/kRrFOnAA2N/XaacjCAUNo4CM5M0joLOfJ8DADxOhMeuVDEdHAkz5vv3abnVQSjGUKKWj4VS7MQ/HidUpZU7Xc/jHB7OxJLihWQJQu11SUOJolsbUUCSbM1nyd0Pf2PTNhMGBwwFg/4yrHfadh2eZp0w4BeksAVCqeTFPq09Lof5HLBWjIOCeOKEGhzK+GiQPaXme19wOWGjUFOpxjZ7+8fyBwncwQ67VsYBNrQuUza2WgP6OOhUu5khDMnkhPyq/WQsxFPnKYkI236efA3eVUt4AEjwHyNTTCnJCFv8Tf5sU9FSvtyfHw9TkwCsgSp8hrNWQ4o7deCjDOAZl1+caCvbhh7AULWNDUEjIRVfWgBGhuRevFspM0sh/tANdprTsJztJrMhgtF37sZ5tLJdExT7+1o1wiTvwiak2Gc/m0IpkHZ7/Clzt67+/I3XuBSjSjXscQUlRzZCuHoVkhmy2mb3ZPdZklNTlZMQ82f3kDrzt2UhKQiffZFcEwtVeraSujXvd6t/a04PRggjDkfUmYxBol4JT9715begGb6d+I7B6M3odqvIBPYYsBDmm1U42dZPjPMY7ATHGpMTQ4SkY1M6hvUKp8knjYRgpochSntD4sUR6cUwlA0YzBMRWda3R3DnoDmcOQABnE/UQXwEzshUCjImaQQiUwiwEVAjzyNxJ+VTFMDV9MGBVySYFB2J+SWQcoo6ts0DQzxPFwRum3d1ttacN4IZeVg9zDc1gC54RDk1uNkKtopoyQ7Hg5ACAeVVBkGk1ILESLFH/4/11b4/yaS+KQcSGmFEOwpGELijVLuPcPd6LnoXn9RJyB9bsgdxI2HIZzYhrAgMcyQbamQJi2EYLZxQQXDhHhZ8jj0sOi+t4CWD7xvyLstkROzJSnlV9GZSiZchkjOUzQIZJZDEKzO4QQy06qeQO4LaKaXif86XO4gXL1VKacKIS4ukWNz11NE0TGcQP6rhlnPkepZtmMrJP4c3dY1DwYd9cpIp8jPyr5v7/sQ6neThJu1jFZSbHQ4MQNS8cUUhSTiBGGeYxkykHmCexr62Aa5P/veXanl7IPivps6gtjrCuDCrQKm2Frxf6lv0m00QZacalZ4qqhMIxDkUK8Rm1MWY9a+ElSV+HBdlhFpNiPEwQs2uDM87/WHPisQ/dxgkOPCFQPV062tQaTJQewhgFv8IRBWeLXNgBcPSrjV+AVeSP+UbAdJcohEVtZCPtEHnvX9vCMXFY0XYVR6Otbkd8AVkJV1MhOdRgQNBox3Dnj8zFvWn3UXtf4CbdJqITP07uX3v/TirQYfni4QQBjBJ6tLxfJNMta1mvDCYTumSfvwpHM7Kg1tcNFA8NRTrWjF055CrPWWITPFgmdzW+EkiW8IqY4nj3r8O1LoTS4Ra6fYUe6UBgJkkgBleZtfL6CZeMvMT6Djqz1m/70NHzQEYSeh+0WhgBRC2B1SH5uxktQyNhu9Ip6ut6PNHUSx3YVHxpiwkyzGjw/RSZINC5O9WJ7mh4XuoyEknPLuBQT0i/XAr05wpAL8N4F9daZJT5B5m2PeN7tfW2ZGExtxg1dokp2uC8jNQSXt9sgqwBmG06FQu6yWMObZQ5hha8NWr4QPvE4kJ5kxmoC7JcuN+c5WZEoyWujchrDQJYTizx5tfoFzncXbPPhjuYBvZOhiShiLy/sLcrRAM/F7qPhFCZsQw354EbrxS48KMqfHnDKHRXTIBkiC3AUoji9OBARY6LCrnUGkSGEs2OhFplPA68UC3IEwjgeEiGvsGg6yPndT1m9v9+DLmU4UWuNaXcCFonkaFv2mWK74BdQnm+pi6eUf6wJYd1ybJedSKQNNn/2k+j11Rln3I6uAe0lqnTYRmWYRjTROXlk4dUz3cxjjUDegPYEg5m91xyvJ/KjptmhPjHVoObaegyif26vxhfHTgx1INwuwCWEYGRGTVZlxOVs0FqKBqPWHsa7CgYfGWnCwPdzrbFhEwg2CWhC00A+HJGAUDdAEGqiNTcFY7vmI5vg+j+XkePLX3VoU0u+XKbAdvmuUGV95Q9hJf+zzGnHIG0ZLMIwEfoqzD79sIKnPMolYvLkNhQ4BqwtEBENyn89/2MmZ5llEjEuSMN5Ov8nDFjsMKLFFLV9btHziRKxgxVUoEN5uPinPT2bJ5teD3HS244vpBottJjRRHLetLaTEz7vpd0sojHF2xkyGRZNeZV1RJ5HlTxz+lRB6eaQEgU4z6cpKDfohab95daydtGZ2Cg0O2eOpBHRlooQim6RIeZTE+9Pz60Hiyvfjej0IAX0aiPnJUb3whqwIXCTCbuIOAi1DpPCMTIOHHFw7Ae8jaWUOEOJBYjY1b7UKWFLkhMsXwo5aNybY1WkqIwFrJpQtlKjYjCIcBhHJJP1BXpdCdjyB0E2MHuHh88KbzkBrYHNtZA1ieAyYu8EAdxC4/k4ABzXpluh3iyxiezs5RIOMKWZ1Eb1AIDOGDLaJwDaJKuAmKa4cnHfvvpnu7zDdE4Yc6N7aJP4n4p9hZL6UjMvD6zHMX0rWmdiE3K/Zt5Hwmj02e/yavdaBuMBgvDiSZ2m4IM67RNqHGcAezdTxi1pG7IsjuxMbO95G8lYM/atQefI58irU5sG44FC93JdDwiVaHXcwX+77e+LfQH2C6Jx9uW9PFHld9UIN/POg7+uqP9NAfQv/gK+r7ot6ewE7S32qNgi2Tg6MwWzUpHVYv4D9/wUYAHvDeY1lfsfqAAAAAElFTkSuQmCC",
	dingwei : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QjgyRjkyNzVBNzcxMUU0QUMxMkIwRjQ1RTNDRTA3NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QjgyRjkyNjVBNzcxMUU0QUMxMkIwRjQ1RTNDRTA3NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+haa51AAAA/lJREFUeNrUmk1IVFEUx68fmFLZB0ULpSISCqHEQiKSxKBN0iZXWQaBLYqwqI0UiFKQVFAWuWmXEiW4qoVYhmZg1mCFG9EQF7PIb6HRCGam/8EjTKDOee+d+2bmwJ83zrv3nPPzvnvffedNWjQaNV7sfPfVlb7eAJ2ASqGD0F5oB5TD5xehX9BP6Bv0EXoP/XYa/0X5kzXPZxpdK4cuQ6eg7DXaEehuFv0jbkB/oLfQM6hbK6F0JT9l0BcehTNx4FazbO5LPgLsM7GAuDw349AKfYAOK14JxeyTfG9OCCDginj+VBl7VsUxinwFBFw5Lwy7jH2jGH08v+0DAu44Dm94pfTL1nPMMquAgKNVryNmuffTcjj2HiuAgKNbSju01STOtkCvndzenIzgdRcr5Sz0FKqAdnJimfy5gs/NOvR5iHMRWZpkJ4PRo//cGLRJ6PcvdBd6CIUE84tu9LegLKH/eb5UZ+LtZNIdjJ4ULggdgRoFcIbbNHKfoDAG5XJN5RLF6GXgcFEYeIJXukEX82uQ+04I21NOGRpz8BiUJwx6Dhr1sIiMsg+J5XFungFPCgPS6talsFJ2sS+jkZsEsEQY7JHi7UDqq0QDcJ9w7vUrAvYL5+J+DcDtgjbfoagiYJR9xrNtGoDrhCOobRMauWk98G60AKjiUwI4I2hTYAGwQCM3CeCYcLLnK8LlSxYQSW4SwIAwqUuKgFJfAQ3AAWGwWgc7nng7lFph2wENwD5hsFyzVCTK8gCXxT5yhe37PAPicWQYh2FhQNostxn3ZcM2B2UJUV7S20SHg0QroU9QoYM+hdyn0kEfUU5SwHaHo1HMOxG63EpXeazJ4HOt3LbYYQxRTmnSdxN4LvzK5QI3Ru8cfkCTMdu/A8Z9ZS6wXD7RfDfRAj13mRCBHFW8jbRo7mSW7SU0ZxJvc5yLLiAuhQUcHicBIOWwYGMEyajMF0ogXIhzMFYAMYpTTgMoG8WesgbI9sAs1SX9tnmObawC8ig2JQCwyenoeXngpaJQ0Ee4oHFZ1HIFiFGkHxHc9BGQYi36Bsj2Cur1Aa6XYxlfATGKtMe7AoUtwoU5RtR3QIYcwuG+RUDyPeTFgUZVrQEasQA3wr5NogHpBzw1FgBr2HfCAcl6oGZFuGb2aZIFkKzOQWkjXimiTispTUDa4V/wuKqG2cdCMgKSfYbqPfSvZx8mWQHJ7rmcPz3c1yQ7IF1m9BuzSQd9JrlPOBUAlzfHZ6GIoG2E21rZvNsCJHsnvFE3cFuTaoBkd6DONc53chuTqoARnlvjK5wb53ORVAYkm4ZOm/+LVSH+btp2cD8AyaiqXR3zdzV/Z90yjX9GL0tux3z2xf4JMAB0zuFT8aOIBwAAAABJRU5ErkJggg==",
	edit : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMTU3NTlBMzg2NjUxMUU0QkVCNkQyODZGODIwMkEwRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMTU3NTlBNDg2NjUxMUU0QkVCNkQyODZGODIwMkEwRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMxNTc1OUExODY2NTExRTRCRUI2RDI4NkY4MjAyQTBEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMxNTc1OUEyODY2NTExRTRCRUI2RDI4NkY4MjAyQTBEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k918FgAAAV5JREFUeNq8lj1LxDAYgHtnBRU5XRw9/AEOijgoLjoJbu4Obrr6B9TRoauLm+Ckq+B2g6AcOJyTCA5+e4JCFVFvqk8ghZdQW5N4F3hKkqZ58r6FJKUkSYJ2l1IbJF0wChW4gBclmfCctAkPor0Nq7r+CTMhjzMPwRXMivYI9It2H6wEiXu5hqpKtyaCV5iEXTGuFgrrPexZRLEDt7oewZquH8G8ri/Bs4zkWKzKhigjyjSiTRjwlUQ56ayl43wkeYJzGPKV/FngKrESuEisBbaSrRxBQwiqrpJxWIBWgWAK6i6SbmjCRoZICqYhhhsXyaIYsy5EDeMfPOoxTpJDIz1KNJfxk2P9/smcIyzYn4bFPqQOnlOI4QS+f/mm1+wokixDHfbhAO6cDoSCdFUsdoE0XV/mu3LBGt4d1t1jdpSDDhR1xqc3iQ+49JhrTF8i0mhaWZL/LIPw1lHJjwADAGNihoVVmnbMAAAAAElFTkSuQmCC",
	guiji : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YjM0ZDIwMi0zZTk2LTc0NGYtYmZlNC03YTdhMTRiNjVjZDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ1ODU3NjI5N0E2MTFFNDlDNEVENzdFMEJDQzRGMUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDQ1ODU3NjE5N0E2MTFFNDlDNEVENzdFMEJDQzRGMUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhlYmVlNTg0LWI1ODYtMWQ0Yi05N2ZkLWY1Yzg3MzdmY2E2ZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0YjM0ZDIwMi0zZTk2LTc0NGYtYmZlNC03YTdhMTRiNjVjZDEiLz4gPC9y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",
	haoma : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MjE2NkE4MDVBNzcxMUU0QUZBQTkyRTRGMEZBMDA5OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MjE2NkE3RjVBNzcxMUU0QUZBQTkyRTRGMEZBMDA5OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QQayMwAABTZJREFUeNrsWmtsFFUUnt02pbRrW7WgkoCCQQUEgagVCyiB8jDGVDEYJGoJEBMgpNYaxWc1RB6xCqKRlxoI8Ud99Y9SBHkbNSYCPgIaDRACbVIULVSlFOp30q8yXO+sM7dzx93qSb7M5s7snvnm3HvOd+5srK2tzenKFne6uGX6uajbusNy3YPALGCwx4O5EPgF+AC4LYJ7/x3YCSw6dX/vrcYRBLkEDpuBV4DrUijq3YHxwBbcY0VnpuhLwC0pPhOrQXJ0YIL4Uk8cpqfJcptvEsGRQEaaEBzlO8kgcn1w6AfcCrQAh4FTwGmgP5CTggRzfREEuUocngZO8EstXNCXAE8BhcAT6VwHnwQuAHoB+UCCnxMk3vp/oU9xgs8AJ4GjwK+uzyd5LitE/9v4m6cjIwhVsAyHq4B7gfVANlXDIWAGUBGC3z0s0mOA54DVkUo1kKzHoR4JZxivuTJEn19wRmxyjS0Aymxk56jX4ErgLkavyDUuD3S5DYcxtV1C1EpwWAfkMXpxrpEmYCZwO4V3ULEt67kvcFykFTAImOg6L+XnR/o1Msy8mJ8IrgUu5XTJIsmOOrgCaDD0/zrJiS0EioGbXOePUfdan6LJnmB+J3zVKGSqSdRtSxlpqwTfB37TjMvYe4Z+RBx8qSEzjHKww2SKv2Y7i0o2q+UauRkYAewDGvl0HzDw06ipdUJmCVClkMy0mmSUhFMeYF0kSzJSQ6/QfEfk30FgGmutyMSSMJNMphONXewxLuroXa7PPBuOdd2EpPLFnKKSupuZFCSFr+IUnhjQT4IEmlR3VEfWek5dBGu5sRRTeq0+jEStAUGxIcAudVaxLSuIUmz3V8j9tV6pUU3tRo/xT6PuJr4GzmjGz1Akm9oEj/HaqAneAbwKfMjyIOrjK2AL8BY7ABMbzUZaR9BauxRVmegwSShvaMZF+97XWTJ+tahNK/MYr44siyJq2byRAZRSEpXvqEb2sN0ZaOhPtvaGa2TbXkrEO6MoEzXs17q5xoqY0kVTvs1tBlN7FLhHM/4Y13+G7SQzViHnLsolIficzFKk2vfAy1Fk0Z+SXN8Qgk+J0PMe50SL/mCb4N2shSLRWjgtpVXaDzzktO94d9bEx/UeLVmZRx2WCMu+7IFULhNu+4RJR3cD84Blrhn1LPvEVsrEDalaJtxWnKT2yVqcQlIiAtY453bUNwZRVHGPyA0ESim6pU/71mnf7tse8paC1L8eHuckW8/hundvcknEHzcmCGKyEfsZW6Mp/EF5T3gN8HHIma6QfrxMfM8nEq5xmaKfm0awnJqxB380h59l7GHgbMhTtZQ+vayOiWWuMl5lSrD1HzaPbNgLwKQk50VYVCpRrPMTRR3BSpYI9eVLM89lWyCYwa0Lr5ZKEss3zt/fi1QFJohUK2r/Mqb61Zyikn5/5g8+YimK3dmiVXg03FU8V6B8J3gWBckTgAjgI7xGCPcGLrdcWuLMrB8BQ5Vz2yjSy3k/UiffMRHbkknlCeb7eUKWbBywm2tsI5XVMU7jJRTsvpaKrl2SrPYms6UI7D8ooeIszCVUGlFYkXP+W6hQtOgqzvOLuJuWzc8FVBTHnTSyuMdi97IcJ81MR3A9S4KqKJp5LpZOBHVJZjYXs2xLXAtMde2u5VJ5pKI1+yKI8iDRkn8XbkbCySPBG9IgWNt910EX2Sa/mu9fNgnKosAEaS867W9iz6YwwQoEY2fgjl7tEZ32PyHIptTVmo2pqP/xKxpZXuYsBLkdRlsWXcH+k/9V61L2pwADADs7Uqu0+lY8AAAAAElFTkSuQmCC",
	huafeisearch : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNzE4MTA3MS01NjExLTM4NDktYmIzOS05ZjJhY2NiNWZiM2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUE2NTgzRkI0QUQxMTFFNUIzRkNEOEJBNzlFRDEyQTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUE2NTgzRkE0QUQxMTFFNUIzRkNEOEJBNzlFRDEyQTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZGZhMDc2LTNmZWUtNDM0Ni05ZTJlLWE1NTRhNDY5YmE0MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNzE4MTA3MS01NjExLTM4NDktYmIzOS05ZjJhY2NiNWZiM2MiLz4gPC9y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",
	ico_loading : "data:image/gif;base64,R0lGODlhIAAgAPcAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAIAAgAAAI+gABCBxIkOCCAwsKKlzIcOCBhwUJFGiocICBgg8PEBzAkSLBAg8DEMw4sADHAR5HPkQpkKTAkwRSDjTwkIFDiAAInJRJkMHDiwBcwuQ5cMABnxMfOsi5c6DOATFfMmCQcGCAnwp1ljwJdeCCqVNZGq3akGvHnmCnRvVodu3GtDZTPnW78CsDlnJ5EgBKtC9RsxxNLjBAuHBfwBwLK+Yr8+QCmAMGL/ZLWSZdipcZzvW4OaXZiQpNcuUJuGBpzHifclyruuvLy6oJdmbq+uVqAE1PgiYqWuzZ2Idv4z47vLbcpsWdIvcsPHlR4szxOneamWEBussrZzVOMSAAIfkEBQoAAAAsAAAAABgAEgAACIAAAQgcSLAggAEGEypkAIAhQQMLFEZUOJDBgQMJGWgs6FDggosYDWrsmBCkgYQLNhLsaAAkxYYMJhIkAFJmxoYEBFps6FIgAQMGEFZUWbBlToEDgAI9SoCB0JdIlUIsADXhT6lVFSY9mVVhgaddw3odQLYs2KpmzYolUHZBWbEBAQAh+QQFCgAAACwBAAAAHQAOAAAIiQABCBxIcOAABgUTKlwoEGHCAQwHEoBIkIFFggEiEjRggGJDAA4BUAzJkKMBAgMthiSpcYDJlApZMlzAceTFAiBFFsSpkIBJnAgRGvg40MCBA0MHDEA5kGYAj00JLjh69KRSpTwLDI14kOpRg1cJMNXo9QBUkVfPLjR6IGNPpWM1MoibUKxGjQEBACH5BAUKAAAALAcAAAAZABEAAAiBAAEIHAiAgAGCCBMqBLDAwAKEDxcWIIDQgEWCDDIuHDCg4sWBGjdyLDDQ4kGQDCImJMCxo0CTAheEXAigJUUAMAkwALCTpkCbOD/OROjyJ8ebBAf0rLk04QCkCpHuDOCTZs+mVSHGzOrTAEmuYMMmPEC27AGVYM2aFQuArAOzCwICACH5BAUKAAAALA4AAAASABgAAAiCAAEsIACgoMGDCAcsQAhgAEGGAhcsNLjAgAGIEScCIGDxIkSJGjsOwAiy4ICOGDMCKNDx4UeJDQMY0CiQAYOUBgoctMmAJkabAICmDBr05tCdRo8edKm0adOkKW9KdXrAIIORTpsaYHrUwIEDAah+/eoT4gAGYw9AxZnWo9IAZAEEBAAh+QQFCgAAACwOAAAAEgAeAAAImQABDCgAoKDBgwgFDkjIsOCAhwcHLFjQ8OFCgxMvJrRoUCLFihALTvzIkCOAkQ0dhswY0YABAgwJaCTg0qXGhgtqGiDZUOfLlB1tAkU4cKhRowySKhUIlAEAp1Cdplya9KjVgwStfjRw1SCDmw0JBDg4lqGBAzAFVm3I4IDbgwacggVAwO0BnkDPvrVql+vRAXav2s161CXDgAAh+QQFCgAAACwPAAEAEQAfAAAIjAABCBwIgEABgggTDhiQsGGBhQ0jLiQQkSCBhQwrCrwIUePGjgM5ehSIcQDFihwxaiyZUSPHkyMJwBxJE6GBmzgXaMTJ00DFngZ01hxKcwADBkI9Hj1ac+nShjpbCjyaVKBPpgN1MhB4oCuAgyQjdj1AEGvCsQO3VkRLk+1UtWcPOFDY0K3HBQeqagwIACH5BAUKAAAALAgADgAYABIAAAh9AAEIHEiwIIABCBMOKGCw4UCFCh06TLggIQGJGDNiHKAxowEDHDsa/EjyosiBBRaQNLBA5AAGJgmsDHnwgIGGDAwO+GgSAIMDB3ISJMCgKMYFQA+YFApgAVOHSW86LNpyZFKCT30aNZi0KsasAq9iPVDQa1mpA3OCPUmzY0AAIfkEBQoAAAAsAgASAB0ADgAACIkAAQgcSLCgQQAEDhIkwEChQQIDBiQ8aODAAQMOCUbcWECjxY8ZNW6MKJDBxwMMBmQkgHHgSJYnWyZcYHCAAQM0B0JUWfFAAII/AWBkQBRAgZsGJj4sqBJAQ6dQAdi8GXLgU4JFBS642bRqVKhXWVINWbQr0asAtrasihatS6UOu2IN6pXt2owBAQAh+QQFCgAAACwAAA8AGQARAAAIgAAXHBhI8ACAgwgTKjxYsODChwkFEnQwEKLFixgxFjCQseOCjg8ZgIQYIGEAAhgHQGTAQOXBlgsJDJiZ0CVHhCxFAjDAE4DMmQUSBlXIEiHPmz9dWmT5cWfPgzMHoHy4oKjRp1BpLk14tKbWhVav3kQ4FWJThAsMnB2p0EDZhAEBACH5BAUKAAAALAEACAARABgAAAh3AAccOGAAgMGDCA8aGDhwQcKHABgOZDAAIsIFEg9YTBhgYMGNHEGKHEmypMmTKDcuYMCgJEuWIF++BLmyJcICHx+ydHhwgQEDFQcINUggIYGfBgoAEFoRItKmTCEOQHow6kOkRQ1aTfizqdahDwl4/ToWpFgAAQEAIfkEBQoAAAAsAAACAA4AHQAACIoAAQgcCGCBAYIIBx44wCAhwoUHBjgcGADiRIULD15cYJFgQ4IQP3qUCIDAgQAEUYokMHHAR5ETFwiUeRFAAY01WzLYyROmwJ49E7rcCYBnzqMISV4cYMCAUoQEmkp1aFDqggJCrQ4kMACrwKhOCQ4Yy1Kg14EFxg4o61At24Rcx9ZUm1NuzgJvAwIAOw==",
	jingshi : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YjM0ZDIwMi0zZTk2LTc0NGYtYmZlNC03YTdhMTRiNjVjZDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzBDNjQ4NkM5N0E2MTFFNDkyMUY4MUZBRjBGMkU1N0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzBDNjQ4NkI5N0E2MTFFNDkyMUY4MUZBRjBGMkU1N0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxMmJkNWJmLWJkNmQtNDQ0Yi04MGE3LWU5Mjc3OGQ0MTRmMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0YjM0ZDIwMi0zZTk2LTc0NGYtYmZlNC03YTdhMTRiNjVjZDEiLz4gPC9y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",
	jishi : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iOUVEMDM1MEQ0ODYzMTM1Q0I4RDQ2NzU5RTlCNkE1RDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0FEMzk4RUU4Njg1MTFFNDg3MDg4NTAxRkNEOTcxQjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0FEMzk4RUQ4Njg1MTFFNDg3MDg4NTAxRkNEOTcxQjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcwZWU0NGM3LWNhOWYtZWI0YS04M2JjLTJlZTQxZGYyNTEzMCIgc3RSZWY6ZG9jdW1lbnRJRD0iOUVEMDM1MEQ0ODYzMTM1Q0I4RDQ2NzU5RTlCNkE1RDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dP2kwAAAB6ElEQVR42uyauy8EURTGZ1CREM9E/AVEFCuxUShQKRVEo6BRodlEo5NNNCsSDREUm4iIDfHI0mzhFQpKf4NQSRCPlfHdOOzNxNXdmdnjnOSXfPfO3rn7Ze6cOXN3Xc/zHM5R4jAP9gbLvsVwbpyNqXTPwj+8glrYyDquod/6XJJkxKAY/IkWkAV7pENLMrZiDXSQbgBxblew3qDZGJwGz+CJNLslug4y4APkORpU8cr9MdFJsDSYBOdEMkyDrgVUjGhzjFqeK5QreK3pK45JZgiMkV7iaPARpKTYDsCgZwEVbVRsZ0nbnCuUJZrWjDVpms0SrdB0Ocd7MAEeiATHLLoD6kizLbbzAc8X6BJVZVQ36HLM24hFbXAO5MAxaXYGBw2ajcEzg2aTZNQr0iV4B6tSbFs06AY4vxv2PTgDbsA8KNX6VR15QtsPcd8XnqUxKZ+BGDglYlFYor1OYf+yGVyADWovOoXNoxXQSroPTGljlJltai9rxpRuDzuLVvraNYZjVZqu/uMc+vjaKDwmDsCW87WXeUSvO3rhfAvuwaTWn6GaU43ZB5vaMfW5O2IiCkv0DQwYjh2Cxl/6X0C/YcwuEXoWlZ+wi31PRgyKQTEoBsWgGBSDYrA4gv0bvSt/SheD0Y5PAQYAIbV90d1LVrsAAAAASUVORK5CYII=",
	mode : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQkUwMjBGRkVFMEUxMUU0ODdFRTkyNDJFRTQwODQ4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQkUwMjEwMEVFMEUxMUU0ODdFRTkyNDJFRTQwODQ4RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCRTAyMEZERUUwRTExRTQ4N0VFOTI0MkVFNDA4NDhFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFCRTAyMEZFRUUwRTExRTQ4N0VFOTI0MkVFNDA4NDhFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DbSnwgAAAsVJREFUeNrsmktIFVEYx+eakGJZvspbZq5cVorUIqhl9AAjelgLMSWhCDcGgqD2WPSgaNsytKBVoCQEtRStdNcmpVSksmhhL+gFTf8Pv6HLMPfOmbnnXL87zAc/uN7xnu/85sycb+bMJGzbtqIcBVbEo9D5sHrwbeTkfrXWKI9gJTgPRsEC/ZaZB8OgE6wP0YeDYBHYmqC2DqQmSDjnYJoRLAEXmDU+nf0KboIbLK8S1KFqzQP30WnTbwTrwDi4qCBHUQou82+2KHam2sCRuVFlkqkFz8C2EAkawRiokTqLFoMR954IGLXcRpFEQTrftmtouwH0SBOsZEFd0Q3WSRJs4clCV6wFhyUJ7jOQo1mSYL2BHE2SBDebrksrLfjXQA5bkuCigRwfJAm+MpBjUpLgYwM5hiUJPgDfNbb/mS/ZxAgugdsa27/Ot1GirkWvgpca2n4Obkm82P4BjoBs1jBeg6Pgj0RBp4M7wYsQbU6BPVnuIOOCTk3cCy6BbwptfQG9YHeAemq87votOv3kJYut4BxP+bM80xJvwENwhm9y6fz9HaAzHeC9RjnaYe2pX/gtOuV1BFk2zNuIBWPBWFCW4CFL77OCd2B/hvzG87nLBNWkpOadSAKb0mwzms+rTCQNHCXJkNu05IsnmVhwZYOue7v47mXC6x8K81zuuPV/zacPPI3KCLrlKBqicoh6yZ0A16IgmE7uPlglWXAGnAVDAeVaMslJmmTaeBa8A+ZAv6LcvUxykkawKuXzALjiI3dSRU6S4F1r+e0MJ/pZkuSOecgNqchJEiwDT1xTPUnSaywjYeWkzaLlXKhTJaezkZNYJsp5JHe4vj8VRk5qHazgkdzFf58Gg2HkJF+LVnDZWOJRjeTdRCJbOS/BXD+jz/mzCXqx9ZPGZLTQ05Fhu/F87nPwEdiQw8PQeL5E/NZ9nsc/AQYAmTbWiAPYQ0IAAAAASUVORK5CYII=",
	qie : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzU4NjhCOERBMTBDMTFFNEFBNUZGQjMzQ0YyQjEyODkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzU4NjhCOENBMTBDMTFFNEFBNUZGQjMzQ0YyQjEyODkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4RDA3MjMzOTU3MzExRTQ5RERCQzY2RTZFMDgzNkRFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI4RDA3MjM0OTU3MzExRTQ5RERCQzY2RTZFMDgzNkRFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+W+sGGAAABzZJREFUeNrsXA1MVlUYvh9/EhhZKkgJUtpEzZSCpVamGNkcq6VrEFIrq61VZrmMLdfP1lqtlutnrWZu0Wxr09naXGUISG2V/ZhB2FqZhj8zRMlARAG5PS8c1ye7l+/+nHvO4bvn2Z7vbPe795z33Oeec97zGzFN09BQBwn6FWhBNLQgWhANLYgWREMLogXR0IKEG0n0E4lEhCRmmublCG4H54PTwUlgKvu7A9wP/gzuALfCrvYwiTEwaiJi6ARpLAEbTHc4A34EztKC8EtgClhn+kM/uB68SAviL/Iy8KTJD3+B12hBvEX8hBkMSOBiLYi7SFeYwaILvFYL4izCItYYB40D4Nh4FCSBY2TJCKrBFAG254Dr4rfe4hPPQ6Z4FOgqyzqiBLBFgiCb402QyMCPz5464liMYJuEPPSC2bD/OKcXMg7BAnAWG0XIAHvANvA38FtwF9IzVS8hb5nyUMHB/lvAz8A+hw7Fs0w8ZQXZLVGQtyWNJJwAHwUjKgrSLVGQBo82L+M0kvApmKGM28uMSZXYFo71YPMKBOQQpHNIfwlYy2usLUGROPwg3aUY5IC8B/KccygCtyDuRBVe5hnJgnS49KI+DOgjWgRWSRcELmA3ApkTSQdc3PsCOC5AW8j7ylWhummSKMgeh6XjMgT3B2zLKHCNCoI0SBSk3uF994LJAuyphPgpsgWRNYRxDPzShTckAmPA66UKgnbkVwTfSBBkA9LucVBdkfdTKNCuIhVc1ucFi3ESfM3hvZcaYqYFzmGKdEHwpW5HsElgpp9Bmscc3it6gUSaKp26h126oV7xBfimi/u7BQvSp4QgbBi81E1nzQOawQqk1e/imVbBghxWZtgDL+oX1ms9GkBGfwKL3a5oxP3U3uxXrW8kRBD2An5EcB24k2O0G8H5iLvN4/O1gsSg4fM6708Hu3IxCXyczR14xR/gbRxsWShoOqDWlxaC1vZmgE+CzS6Wj+4Al5OonGyICJpIu9WPIFzm1F0mSj46rX6fYQzOW9Pw+VmwE9wLNlLv20fVNFzaxb6qk9iog903K19CVEKA8//tYJ5P20IpSArV85zF6OGx5jiUgrCMp7G5cB7o9NNuaEH+z3wi+BzY60MMchKmc7RJXKOOdPJZYz4bnMYG/C4xBucoqNfdznrUvxuD29q+BnfDtrMB20UvlGYS7zCcz7MfBF8G18O+Pp6CBN0PmQa+Cu7z+AUeBTeANwj4YPLAKnA72GbRRuwB32Xb85ICsiGwDTsLWMZ4ohEsp3XEgqq00WAmOIbHahIpglDxB2sC7ng1xesuKp4rF5NYA9kjcMViNa8VgyoJ4rtRx/O0eWYzG0wUjRbwTtj/A2+3GEFm1KVWttxJbUHwLE3mf2IEu9YpFmhO/QHkYaNX95d5fyXgPHAm8/6GgrxAmouhLQk14Fc8PSzfVRaNwIKnTXVQ5dL+XPAVsNVjeuSJrWOnU8gVBM/c5XAvhWi86MD2CcyV5tXe0Xt4H5woRRDcXyq48XaLp2LY/0GAe+hX+3HLXQtC+8PBU6b6qBgmD+PB40HuV6FSGLgguC8LPGyODFDbVjhMXh4MOP0jXg43cOxlMU+E1l0tHEFuPbnEBcjbPxb5oWrlOyPY1YzkJpci/Xo3gjit79aMMDEINBv5jtUfbAlRVcDpXwBuw0t2NYMYs4Tg/6uMweU3ycbIRBnyt8kmbw0Ibgo4fSopN8KGXb6rLLbDlBZRzxnBIxI0pJ+PPJ6wyN8c1tELGofAItjwt98qq2yEi0HIAp+2qbp2sl530KA+ysfsPJhhkTCMWrQb6KU4Gbd7DPmZZPPfG4JsmAuu9SwIsBLMixNB6OOy68XTkSB7BdmxNtapeJZtCK6lMrcxM55Gt8Erkdc/LWqDVQheF2RHE3PH+920IZVxJsbAxweutvmvGjwtyI6rwfsclxDmWdEWtXwj/nAKzLU6PQj53oJgqSA7jrDS2uWkhJTEqRgEmniy2xotcuNqNviI00a90ohv3GNzfSvYJdCOVVbbpxOGFJk0gcVWFmZYnZbNqo/PBdpB69LKY5UQOpc93Yh/LLe5XiPYjpWxBFlqhAPLbK7XC7ajEKV1qqUgbIh9UUgEucJqLpz1UVoE23K3XQmhCZWLjfCgRJFSUm4nyGIjXLDL7/eC7ZiM0jrZSpB5IRPELr+NMj+OaEEKQibIBJvFCLTPXvSmmZLzBGGGZRnhw2yLhp0OGdgn2I65Q0tIgRFO2A2FNwu2g1b0ZEcLkh9SQabaXD8kwZaCaEEmhlSQXIUEmRktSG5IBbH7EA9KsCUvWpCckAqSo1AJyY0WJCukgoyyOSL8X1ml9ZwgFxrhhdW2uE4JdoyPFiQ5xIJY5b1Xgh1p0YJk6BJyHjok2DE6WpAww+oQgH4JdiRqQQZhtXFT2nvRgiiGSFhPA1IVuoRoQTS0IFoQDS2IFkRDC6IF0dCChBz/CTAABI/WqbM901AAAAAASUVORK5CYII=",
	qieMore : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTg3MEY2MUJDNjJBMTFFNDlGREE4RkZGRjQ2Qjk5NEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTg3MEY2MUFDNjJBMTFFNDlGREE4RkZGRjQ2Qjk5NEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1ODY4QjhDQTEwQzExRTRBQTVGRkIzM0NGMkIxMjg5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM1ODY4QjhEQTEwQzExRTRBQTVGRkIzM0NGMkIxMjg5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6VD72AAABixJREFUeNrsXV1oHUUU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",
	tongban : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNjlGNUQwMDVBNzcxMUU0QjIzQkYxRkU5QUFDMDRDNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNjlGNUNGRjVBNzcxMUU0QjIzQkYxRkU5QUFDMDRDNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3ezX0QAAA3hJREFUeNrsmktoE0EYx7Nrq6Gg6EGsF+tB9CKCSMVnlYKC4gM8KD560ZOgaEWhFTwoFRFR8YF6EQ9SH1c9FSUmGvDgQRBbrAepejCCVqFYhWrjf+1sCXFndr6Zb1cJ88GfIcnu/OeXmW9mdhKvXC5najn8TI2HA3SADvDfRh3l4rbc/kUojkCt0HToK5SDLkIF5rZped1svcTTg4A7iuIZtE0YBjEV2gLlobOQxwQX53VO18vXhNuH4mRMpYegEwxwOl7tul5e3EIPuJko3kBZjfqCyuZDfYZwZC8M0T7bHtyraZgR33q7Re+xe+kAriM2co0F4Hri9Ws5AGcTTZugekPAJuL1s5BC9baAWYOGmgKye+kAviUafoaGDQHfUb0wyQzbAuaJpnmLHHzE7aUDeFVMybpx2QLwGrdXLCCGQC+KC5qGdyx78CW3l+5W7bCoUBU90B6GnQyrlxYgevEXih3QbcklD6ANFpNLZbB66e5FF4iKtysW9yK0jAEw8HrI5aXciwJsBoouaDdhON+FOqABIpixF0bYAAkQYFmxz+uEJhv0wg/oPHQKGtJY3Fm8ADqkBARYsIHdCp022DZFxUfoGHQdGo3YLCfiBdDRvwABt1h8Exx5VB0vRC/lxOvEvQCZGwcEXLeYuZKO+2LIpuF1D5Cbw2RWGb4yWKxlsTFFr01xy8R7aJfBM1qbqPw14Z7Aa2cSXlGA30SyzkMXdxP3hpVDMTi6OAh9UVw37gXdMvFCG5VeftUZxw1oLm7qgr5b5sCI2FfOyYwd9f2M8hJrn5UX2joCRXqF56IFMfM8TyDZB6ED0BXoDDRFzKjsXmj/Hy9MmqHXGCA+WJ3CrNYfJn7SAZ5+nUmmJsIBOkAH+P8DNhLrbLRoD7uXDiB1CbFZcti9dABbUgRsSRUQO4IJKJZLPu6RvB/8MttgAGfkhTY22PTgQrG1iorjkvfrDB9kE/HyDYdACduhpyh7GYep7J4PkLFXHOAKyfvhnwCKks9XGQDKvB6L8omJl6/IP1+R9PmqsjqaM7SfwnS8ZP/iaBangOQeDA5gpxkCToKWEAAT8/INpuxP4tEneCwpKY4LKHmo8grPaUqhL8XLBLAAsMqjBVlurGQArB6WRaqXL8k/T5G8+ZjXYSyFJmrAsXihzZFenvtDrAN0gA7QATpAefwWYADXlA0HyP0nFQAAAABJRU5ErkJggg==",
	weilan : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMUMyNzFCMzVBNzkxMUU0QUM4OEE3OTZDMjY1RjNCNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMUMyNzFCMjVBNzkxMUU0QUM4OEE3OTZDMjY1RjNCNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ml+1rQAAAipJREFUeNrsmt0rQ2Ecx3e8RLiYGynJ3LrZLbkyjUxMoVDcuCZKUaIlKaFkVytFjZQbSrlR/Ale/oGRl+TGLkwLbb6nnrWn2XnO72ySbb9ffTrPOfs+5zzf53nOc57znGnxeNyWz1Fky/Ngg7keJVTh6PnEDDb9YCTo8oek4+nkC6ATDIEHk1Mvgxb9VOBJodPABmgCY+BFP4iyZNeCMKCBVSTXQDO4xP6AohCbYAm0ghvQa6AtBgEwD1zgCnQptDtgWlTcNWinNIxmNorCzDY242l+0gs3CT6kytoVLZEaW0DvAZ9ivxTsg8E02nUwC2JivwwcpqkoveArYBGtGMvGoErQCG5F2g5eiVoHCCm01SBM1cJgmEdRNsgG2SAb/LOZDB4NPmL+KWk4L7egtZto50CUqkV5o2JW4yM9B02eff82YFDje1CaSSRQhVPSOSxonSZaR4bawpuqGQ0yfcQe0JF4bUFUWtDWmGi7QYSqRXkj4h48pr4PHhENBizcDla0exlqC2+QMWrBNil9ocg/DJ5FugqcELW14ECh7QFvGWj5fZDnomyQDbJBNsgG2SAbZINskA2yQTbIBtlgLoTR0r28/OZV5D8D7yKtf3f3ELUVwK3QntqS3/PJ2qDL/2O502jRyUusILeFyrSi9fyW1sjgnZRuUOR/BF9Sd68navXr1im097bkvyysaGldNKW78qoaj6JskA2ywYxHUW5BNsgG2WA28S3AAEAcsTDhxMHcAAAAAElFTkSuQmCC",
	xiaoxi : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iOUVEMDM1MEQ0ODYzMTM1Q0I4RDQ2NzU5RTlCNkE1RDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTVFNDQxRkU4Njg0MTFFNEExQUVBODMxOTg4Q0NBODAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTVFNDQxRkQ4Njg0MTFFNEExQUVBODMxOTg4Q0NBODAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2ODBkMWVkLTI0YWQtNjc0ZS05YWRlLWJhN2U0YTUwOWIyOSIgc3RSZWY6ZG9jdW1lbnRJRD0iOUVEMDM1MEQ0ODYzMTM1Q0I4RDQ2NzU5RTlCNkE1RDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6womvgAAACpElEQVR42uyaT0gVQRzHZ/NRZrzw4E0vih6tkDSxuhhBl0BFky4FihevhiCS4Mm6SJ6CEOpiHooORQe1FLXnqyjILh6i0oNeQhD79yhr+w4zK8u0O89ldd0dfj/4gM7Oe8zn7duZne9by7ZtZnIdYIaX8YKp7b/6LLPMhmzfM1gIBsFHsAXsmLMlxzoox+5zBkUdBFPgTILOVQGoAAOgEZwDv/yuwd6EyanFx35NN8lcMeDqu6oTLDdAsEInmDJqZaCFngRJkARJkARJkARJ0ETBP2AENIATcouyoenP92c3QB04KTenPzX9v4F+UAPqwU3wO/SNaYDqAndd/y/KjXIWFCl9+a67BTx1tb0Fs/I1BR4fxnnw0tX2CrwBD6I4g+8UOafeg1GP9glFzqkZ8Mij/b4i59RDMB+F4ILmWGYX+r/Q9M9GIXhUc6zYoy2t6Z8O+P5HohC8oBl0q0dbs8+1zq+9Sx7t7cArw+SJWVMUgiVgXJlM+ICuy8lBrUpwh4nEzj25DYNqj/6n5IzrHtshcA+UBh2stf3bhAh+g/xQsQaegB9MRHXH8vRflpPNX/ktqMrTfwlMyg/mIigL4uUEv2EE41yWLtmmOxkSJEESJEESJEESTKbguumCWQOcvuoERw0QzOgEH4PnCZbjad+QTpDvMS4zkWAlrXgMydO+OabsrNX6Ak6DNlALDvu8YSf7P/LLt4Gd3wOxHPjMRKS4qh70y0V5Njkm8avjMl7YydeGxxMDcjCJWQend9DnAzjLxANGuf343oYR1E1GPHe5xUSsv69LT5jnYjLyrKgPwH0CHUxE84m+Vcspaw6fgW8zka7FQm437kWd63CFiUy0G3yP09oR9tGtZ0w839YDNuO4OIYVfC2JbVn01H3C658AAwCl6qZ4SpbFRwAAAABJRU5ErkJggg==",
	xiaoyuan : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RkVGOEE2OTVBNzcxMUU0OEE1REM1MThGRENBMEZDRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RkVGOEE2ODVBNzcxMUU0OEE1REM1MThGRENBMEZDRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7AOqRQAAA2pJREFUeNrsmWmIjVEYx2fBYLKNrSwl0mhMspsshSxNjSVfDB8MKWUnWSZiLGXJWAofrJMmJFmKpiwly8gSkm1CthCKUMbYxu+p/4e3tzvce+fOuHPnPPWr975nued/7nme55xz48vLy+Ni2epUtoOk/S9DqT4RGsIzKIFvkAHZkAlN4DoMgdJgOiyb1L5qBYZofaEpZMGYCur0s3kLVuC/LCEuxs0JrPVBJkx77Xl+D0fgFHyA/vCjpgucAasVUZ/Cb0/ZlVj4Bc3exJIP2vdMgQkwGqZX1+RWh0DzqWuwF1pBM9gBt2BoTRZoW4yDcBl6BShPh3NwDDrWJIENIE9bsWxf2fcAO5Sx8ADWQqNoFhgvQSZshYR67QSkQRc45CurB0vgEUyO5Lgi1VFPuKgl6d/93oXh+qWewAsFm0Fw01e3NeyDq/Ld/yuQk0RrBY8bMMBXbEl7JvSAs5AMq4Q9X4I+MBXe+tr2lu8egHaVWlbhnAcRZktqPiwN4De/FCVtmX7U0rVj0npoqzqvYLEE2AAaq695Wq5eK1XbDYFOGP86LiWEIc6OOfdhXQBxp6EbzJE4Ox4VQ6FHXJyeC1VmdT5LcFf5akVBa7wmLPJLFGHpcIbH49DJV2zBYRSMlPg2UCBfyvhLtxmqU6A2j+WrI+BegLRjwemCfD4yAhGVAtt5vA3DfMU28wuV005CfcjVbOeEMNE5apOrPmwiu8Ms+bLXBsrndysoheeDiKqjLdVK7T68Zo32yG/e6d04yIcOlQx8dp2xAI7qc4qWqG3QE311v8Aa2IIvfg9aIOJS9QVpAdpYOphDh7dV13xuKwyOcI4+D3Phjj6bf27S8vWbpZ8sxvQw2NOERbkWvnfPYRGdHJawlgr506poRzRY+9WdsFw+OVKb9Y3Q2VM3Wfk1pCVqOWwbfFXE3Ii4Ut7XVX5boQuk6rBPWqbbdRiup193mVLMNMa2K1SBdZV/8mn8Su/sam8zpP6nM2SJ8m+RZ+cz28Qzxp9hJ3r5pAnLjJKrliIJLYnUvWixolm0mE203Z82j1SiT4zCC7OgxhTz14YV5cE83ys7qyVF2djLFN29G++8YAXWyL+cEBhf65aoE+gEOoFOoBPoBDqBTqAT6AQ6gU6gE+gEOoFOoBPoBDqBTmBtE/hHgAEAWDHmg5ytLhEAAAAASUVORK5CYII=",
	xitong : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MDAwNkY2NjVBNzkxMUU0QUE0RkNCQzAwMTc0RkRCQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MDAwNkY2NTVBNzkxMUU0QUE0RkNCQzAwMTc0RkRCQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2Ny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",
	youjiang : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCOTYwRjhCQjVBNzcxMUU0QUVFOEJDMDhBQTEzRjFBMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCOTYwRjhCQTVBNzcxMUU0QUVFOEJDMDhBQTEzRjFBMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c0Ns9wAAAcBJREFUeNrsmrFLw0AUhxutiJOKbopScXNxEMXRxVWQ6uIgbrpo6yC4CYKgi4L/gYMggm4OLgq6VBycdNFN7CLUrYhi/AVe4RpyTQ9zpg2/Bx9tr5devr57uRyt47puKsnRkkp4JF4wbXpAeSK9jIdNUAQH4ATYmucdIAdWQQ/YAjtVHQrfNT/AMalByHXi4d33xdyDPLitcegQmAMj8voJnIJn3XmBebALBpX2H9ALSvUKmmYwE3DMGLgBZ2ADvCjvtYI9sCbP1dgGh3LMl9I+LjNjUlNSA6rgf9bgrGRmH3RLFo7BeoBcRT4nfby+feAIFDRyanbt1WBItMlJL4ILmWZhkQXnYFpqLt6LTJ3hZXDBoP8MlwkKRjNFH+VKGme8mXR2/novirUxVtuwdTDxU7Qqg8hGl6VxyuDT19ZuY1mQrH7oarBkSTAvdydqrMhNgZXEcZmgIAUpSEEKUpCCFKRgo214lyyNcxfQdmlxPG54WYNNuaP37exHIxzH+w3i1dfWD4YjHONB3cnrLjKV8OSuLO/osxHv6KfANWuQghSkIAUpSEEKUpCCFKQgBSlIQQo2QTj8UzoFGzt+BRgARV1aokieOqwAAAAASUVORK5CYII=",
	yuancheng : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RkI3RkUwQzVBNzcxMUU0QTBFMTgyMTNBQzUxQTQxRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RkI3RkUwQjVBNzcxMUU0QTBFMTgyMTNBQzUxQTQxRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFjYWY1MzEtNmJiOC1jNDRkLWJhMmMtNjc5NjkzOThjNjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGNDRGODFFQjdDMzExRTM4N0NDOTk3NEIyMjNFOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oDMN0wAABbxJREFUeNrsmn1MVlUcxy8moK5ZGKmVkrUhJpXhMh29UGZmqX9UFkztyY00dSvtTcnpyFaoteVa01lzFUSh9mbStHI6rbRsRSq1UlEUolfLMsCQkL6/9b3b8Xbuufc+PM/DsvvbPoP7fr/3nPN7g6T29nbrVLYu1iluocBQYCgwFBgKDAX+nwV2TS2r34ifo+L4jBNgNnjW5fhp4CpwHRgGskA66Akawe+gBuwCW4C8b5N9cUukv1lgnMXZsyRHs78PmAWmgHPkXcGn4D1wAPxG8b3BxWAizxdxb4CnwJdeD09KKa2zk9G3wdo4CGwFleAot7uBuaCIAtaBUrAJNBvukwzuAM+As7ivHMzBKH7vR+BC8GicR1NGYhUYBCrAGrAX7Alwj8tAlbw7t38FhRC5trOdzI1gO0f0bjCWo/cF15xfk7X4h7LdC7wFX1LUmQJv5jSV9XUlyAdpPLYEHOa7RMBtYDS43OVeU+mAnLYIIhd0hsBLOBVltAroTPKU4w9wbcmU/Qu8xA8h3jJFOe8J0ABWGJ71GERGEikwFbwCvqIXbKPXrldcvYzGajACvAPe5f4z6ZBs28N9LR7PXAGRgxIlcD64EEwCxzktjzDWZYBPlHMzuDYPcftjkE2nZHvMrQwPqodudTyzuzrKsRB4Kxf9YMd+cRz3gycZqMXrPcxY9x14CNwEqpVrRNCHFDmNIifx2HBwF7hIOX85HZfT8jCKY2IhUB7+GjidAVm1WZxOT3N7Lp2NxcD+iDgGTtka7q9jPB6gBPE2/szhNB3O7Uqu5VaXaTvPzmSiNZlOz7l8pCSKf5np1tmgWBPvpjOAj6J3XGp4XgUTATm/hClcObOa+ZoYfjVGMTNagTM4PdwsnV7TXgv9+DEaNOcWct1ElNHS2RFmPKt4b7nuBo52xOWacdEIlKm22CXDUE0yi77EUtLAazXXTqTIAjojN5OwcS5YD1aCa8A2OjKd5QUVOI/xSGdLO7iebwGvg9sNoaCFVUcV46tYpuGe2UGczGKDuFjZeLAB9DCck6WI87J+fgXO5NRMhMkIveiR9vm1bn4F7mB9lgg7wTTNza6PR8vicy7owwkQF6EDcbOMAPf7JYiTkYxjJNfIeZrjP4I/fd7rfJfC2E4cTPaTI5sxWW1QL1pNN79FI7KA+/1Yu0bcBMY3LythYi6J/NfsBOQzmXBaVTSpWg2bRPsN5/Rh0C7wcb9jdBzrfD7/fY6gvEM2Kvl7DSXUxmhz0YMcyX0ux2W6bmZybDJJ0sfJWgFlAdZXLQO8PROaXe69oSPJ9reszt06WyvZpshxOX6UqVYTp/adbF9cEMW76NZkOUa3qaPVxM90PFKj7XYcW8P+SYnmumJe151TrqfSXxEn9jw/kN8RdX7E43Y6GYt6UETOYXfL6UgeBGOYGJ/UWuBIrdf0V7JYWRSyC2duGZTVJ2tGcBFGry4RFf1m9jGFoRpnscMUw1jBe1mWo+z7jHVmwppOkuLtZK8l07EG3zRct1Dp21gepZltP0i4wei16AQWMR2LFTJ172MFMJaebzvdu23JhtRwuc8PaCcXkmWNhrhDzlStWemAnRFD0hkCLFbfI/ni4jEXsLY7pnnhRnrUNh/iJrATJ93xXIir/ldrIaW0Lpctg6DTdQTDgNgSTZomI/eq0iWzWxnSB32c/RdZKwPBZNBfqQu9/kaSyxaFhJkXpP8DcY26E0VgtGtrtlLkpgWsNgawtsznuqlgctDA350mTuRS65+Ot2RHQ8BHsqwgbJvpQV2tzrGDTKylWTSFU20wQ0sJ24p2v7M3WxKp/Bgyuvd4eODAAruw2k5T9l3h6Kk0BxDYwJqvlkG/mL2bYZyy6UwCWtls2sdE/5ugX9KvwMnsaLnZsihGUXqaHzhcfGWsp4pfx7LXOvlPVh01qenqE7EWksL/NgwFhgJDgaHAUGAoMBT4n7W/BRgAhKd0CkQ2XAMAAAAASUVORK5CYII=",
	biaopan1 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABaCAYAAAAM0YAeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjZCMEJCNkM5Q0FGMTFFNUIxODRBOTc1MjMxRDYyNDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjZCMEJCNkI5Q0FGMTFFNUIxODRBOTc1MjMxRDYyNDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMyNDVkNTNmLWE4YWMtM2Y0MS1iMWNmLTA2ZWI5ZGUxMWNkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiLz4gPC9y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",
	hudong1 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABaCAYAAAAM0YAeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzA0NUI5MDc5Q0FGMTFFNThGNzNFQ0Y2QTk0REYyREYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzA0NUI5MDY5Q0FGMTFFNThGNzNFQ0Y2QTk0REYyREYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMyNDVkNTNmLWE4YWMtM2Y0MS1iMWNmLTA2ZWI5ZGUxMWNkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6kpQYSAAAFPUlEQVR42uycX4gVVRzHz+pF+ytcTfpHgVcKK8jgavUSPTgbpf0B4a4QJT3Yri+C4MNNISIkdQmhoof29ofAt5uSCiG6W+hDL9XmQ4kKekPSWg29ZK1a2m7fH/MbOnuYO3dm7pk5t/X3gy8zc/fOmZnPOb/fOed35m7P5OSkElNqhiAQEAIizAotCdX/mHYPO9F3q7QIm64xG1oHfQ1dhCZz1CXoR2gLND9X1zBsAbQbethRhd0IPcTqh1ZBX+YN4iZoP3QfH/8DfQ/9niOIWdASvpd50F7oceiHPEGs1yCcgJ6HjjpoFQRgB/QMA3kbejrPGPGitr/KEQSy81AfdI6PPei2PEEs4u0Yu4RL+xM6yPszofvzBDGTt393SU93LYvuX8YRAkJACAgBISAEhIAQEAJCQDgD0XO9gzjN27ug2x3fL1XGI9rxmTxB7NVmoR9DNzistDehB/n4GPSTrcLjZKgGoZchyoWvgI5AO6EL0EneD6wClTKAQBmp5cpP15FRQnej1abWau3TWNeg9FgdusX42gS0WPkZ5gVcS7MybhkBhMGkJ9pY19jHtfG5mpqgofPf4v03coDwDfRUGgg2XCOw49BKaI7y03cEZ67yk7mvQi/x98aVn9v8y+J9XmY3HMuKcCHFORe5ZrYqP5NMNqR1r+9AX1xPA6r3oZ+NMcYFDc7/ygodnHuFu7OPtM+2qWQLP3dDT7C72bSrHMC/4+CaKQiyT5W/DPgsdAh6N+Z5NBbZrvzlu0KGFU3LD6+oGCticbtP27aLA28e9hu0FDoV1X0WHLjjMg3COLvTt8pfU7Vld0IbeIxDq+ebodVZukYaW67tb4Ley+g6B3ieRM/Ydo3UxTT8DsOHs7Kz0C+8P78bQUhiRkAICAEhIASEgBAQAkJA2LEJAeGbvijzWIbXuVf9tyDVNtfpYva5B6ry/la+4SMdlnmYp/JBxuseaK3yX6QPrhlprhIzH0JrLJZHGe4HlL/csML4G03FH4V+7cbfa1Bt0TrIuKXyFkKfhECgN/ifJAjd2iICu5njxLyU55MLbA/5nDLpH0CNKVG6y1J1ulGL+KrDMijjtUw7PgW9rhIuME2HcQSl+/R8Z2II3dAibBituj0HvcD7O9IUMh1AkO1jpbYe+Um0zDUEhIAQEAJCQAiIlNbxgMrxv1eg9zqbmEyNOAMBAP0WHmTEnCEmtDqX4QYEINDbtUMWQAxANe2YyowCXONzusM10BQbgGHeEKXfCNBr1FwTtAjdRg0wKuTvmVjHcw0tRtCrhUWV788Z6OZHUDG9zoMlW5E1msPDDxvHZVTGsNFie12BKGtA2sWOwQ4DpBdSCV63tIgARKlNsFMRMaDCvUBbd+YtvUxaRu33aG46nBaKbRC9EbVd5++1CqQNDZLHUKO612LI34ppW5ttEKMRD1rUHrhVjzCgxQEC0RdRXikkJhVdDrGL2k1FdZulBLXlaeUFYxYvAVQnILwYfXwpwY0H5X3G2ybHnf4WLdC8TtOVa5S17ZAFEBVjsNVkKBVuCU3tmmHlOQPhaSDKbb4bF0TDqO0af17hfc8cmfKw32n32RsjSFW5aTdiQChqD142AFe4dXghMamjuGEDRDNGc4x7k1Vjq89JgoFT1Ygh5jWcuUYcixsjghgwqk2vAxcJAma1xcCsnHuLgD/WE/bZZW1QFeZagfVF9D41zU0GI4JsKhCpZp8AcVLZ+8Vv3NlqMASnB13CrWObGYwx5F7oehqeh9U539HgiqgasapGuRInIKaLSRZbQEy1fwUYABBSVPIKQVhMAAAAAElFTkSuQmCC",
	kecheng : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RkQ0NUI5QzQwQjBFMzExQkU4NkNDNzA2MkI3ODFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRDk4NUE4RkQ4QTExMUU2OUFGN0M1ODkwOTI3NDJFNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRDk4NUE4RUQ4QTExMUU2OUFGN0M1ODkwOTI3NDJFNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzIxNjZBN0Y1QTc3MTFFNEFGQUE5MkU0RjBGQTAwOTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzIxNjZBODA1QTc3MTFFNEFGQUE5MkU0RjBGQTAwOTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rS7iRAAAD2klEQVR42uxbW0hUQRg+a7aLhBol3UzzshFBPRSrFUXRhaAIfBEKH3qxgoIeIyKigqjoJaiH3gJ9CqKnKAILghK6EvSWqeslk8JKzExN277fnaVpOGdmzrjQzrA/fLjnnD0z+53/OnN+I6lUynNZCjzHpTDW2m81gYmDFXKC3OdSYA9QohjzC/AA+BEw3i6gUjHGOPAIGNDgMIeNFxewFHgDBZ0Byc8qgmuBh8AizQfXC+wEurhzxUAbsEFzjJ/AfuCucL4WOAysYUSqgWjAGHXAOqA+aJJItKWP/j4BtoS0jjtAI3d8FjgXcowhoByY5Mi9ZtYURlZBix2yILPRwPwTimMdKWOkMnLIgNwMQVUULTQYNKI41g503Of5hmPU2JImel0n2G14X7UtBJOuE3Reg1REjBjcNw8Jf7EttWhWzdQlgjW2EOx2XYPdeRP1l1rXCVbZRNBkH6UCqWKuDQRpMTxocB8tjCtsIDibQFNrC8GebEVS1zSYJ+hcueaaBq0h+NH7u9MWRhYiF5bYQPB3tpZNufxuIk9Qxw/zBG1fVeQywS7XNWhaj1YhVURsIPiNIawUeel3hzlPMCuBRnyr9N1Lv70NEnog+4CYYoJ7wJjk+iZguWbJtl4494uZbyfDe+avtPF7g/02CjRP/QjeAo4oJr3vpV91B8kH9hBkchy4FrImpR3vvcBzYCpzkn9HD99rwJ8GmQanNMuo2VzXnUcMNM+AdsX3P6lMtEhj0tgsr+vOI2owsJ0CmqMXpwmmvX/KNZFgE7ACmA4YizZ2tip+FPnCS2BY8p06gyCzGrgCvGUaWgnEQY4aFcqC6lGRIHUzbM9C9Et42ZEeZvKZaH9C875yEI/CPydzPU3QmnDA4L6CTMkmapA2XPskJhrVDO/UmDMquV7p6Tc+JAP8b5r91k4OtG14jDPTDr800aSY8DGwTUFumeQhkZwCLoYgmPH7MZZi2tn5SbGVC6ZJ7lGfiaSiiQ5rTDiquD6uIKc7j1/RTTn4JvBOsqWR5ANNwX/aownTU8NH0gXS/NTaT363mScomihVIKcliTjGDRAk5KOXJYUykTtgSJDazRpZfoxzaSLO0sYSMVUUcpUFfaa+sQuaE6cCjskKToYgMBWCIAW525rjjvAm+cLAzF4pjnVkSGNhO6jh934P7RJP8CiLfrrS66Olq6wQ1hVqp2z21PufZBktiu9MM01TO+d1ciNE17YZf2DtlCSlrFovVgz2lS2p/J4qmflujVw54aX7U3WTOPn+eWAHm59fKtHfJFUtvg7PEbRSVC3NzjelR1z/t4I/AgwAR5XksbLLt7oAAAAASUVORK5CYII=",
	phonebook_photo1 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAIAAACRAPa+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NTdDNzJGMjQwMDIxMUU1OEY4N0E4MjMzQ0E3REJGRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NTdDNzJGMzQwMDIxMUU1OEY4N0E4MjMzQ0E3REJGRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc1N0M3MkYwNDAwMjExRTU4Rjg3QTgyMzNDQTdEQkZGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1N0M3MkYxNDAwMjExRTU4Rjg3QTgyMzNDQTdEQkZGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PQJtGgAABPpJREFUeNrsmjFo41YYx+XEBQlikAaD3xCoDjrI0EHerO00KnCDvMVbPPTA2eJOdqFQ33A03s5bnSHgbPZWjQ60oAwH0lCIChl0cAUZ7kCCHkiDh36yLz5Hlv0kObF9xQ8TC/k9vZ8+fe/7/t9T9oivs+3tuHfcO+6ta+nEI2mSpEiSICiSIuCLIMd/Hvbx7r+88aHnuu74GNqK3KkErDTDkCsbzAF217W9hPcQlRvR9KPgzjfAdlzbcpxH5gZg9DTEAY9y7Bj0GG4WIZok17bawHksy4riN/vbA+0v63Q6wzCfPG80GiWMgyy9bujP6GN7YSfeWxQ3aGYD0FN0hFASboZhNptWfMMtfdoh3CRuzHractuFcDNbAD0xORnP3hS1JSJkCXkYN0FuCTcVi3trsL9aHbvEY/E6lvXTJg2qzbQs2/FWp4ELcmwOVj9cSzPemaa1sKsbS397X1ylJBXr1aPpL6Zp64apGaaumbEUHEPTxQIr8PDhaOaBFa8U9bytLBBbbgxdNStL1F4dJHe4BrJdc+iADHIcz/Z1tC+mv0RSkgDdCxcCLcl+mwuwBtppo6vqxvx507adBdZJhz+de3t7LrFoTQMKDx8Ore45ksiHci8pKULWpT3zdG4Ncw3rj1tw8/G4Z3tf6+vgRmEpfXn9Fs49HTFQdcJ7+ngX5oqO68aO31NyCHzqWlwlxF3j2nuyYTA9VgbaRjK8l4Dbnok+16rheevmziEmSZ4XRR6C+Oeo6Hna07tKQEJV5KIsCUv6p+eXSPf8TBYLkFYgoxiG1ekPbjQTUl2gp2Xb8CuEMBStOAKVYJhWgWNDcxBIVjBQRRYFgc3RNFxUEguK/Lx02gp1mCB3oyID9CStwIdjUZFnW51gHoaEf/qqY5hDyKy9N2csi0EHddBodQ3TgQz6+2/1efQcoipl4fihjSUh36zKtdYV3k9OZDEYXBEDSihwEuIjopnJjocfK3ENFjei/YtYEKDCUmMe5WSRnz9/LAuR/BuFLQixwM1putzgfno4xmdEFs30D8mOklQIFUKLnDC47/ODLGYywfHZbCbIfZg9zB4ckGSlJEhjv8Jwf3eYzRzQB2S1LAmFZyF8WWbRqmhdKng9WK/KzWppe0qHRqv3qtPH2/vtX0b+EIF5tgG6r6i115ejiPp7vJD5sxNJFPKbIlbU29ZFf6AaMeqGSeM5Vus1N8WdP2oYppmkLoaIC0F6I9BQcS6HxtTzkCk3wh1l3mXc7d4AqsY1Q4O+gHlX4oaatNlR1sx9fqE4EXY7UtgdutteMzTDPUXzhVepEeUNG2a/Ci5RqrUj6W/wKHuBU8H5CP4Gs5T9uSKJ/X1sj+FHZ/jBeYFN5ulvnOu33vsPY5GZJlIj4t+RN/z4Sb/z/v6H/P4ZdqKXP3eUP/WITybq+8t6RWqelXEWIxxFda0H+2YUi2hRwO6V1lrdVpy1FON9cfVYetMo4/tZtjd0CKhQKYrM0QTCVxWnzW77Kl4AiPeeG/J/99fq8k2zuFGv/GNbUfW4A/dj9b57P7zs/8EiEF6PEGH6inb08rV+9y7B2FSyKUWe+6VWni86IzZVv/3pvD/QjcT3nFrFYALPnZSE0vNiRM8Br+hd31z0oLJbdYMgtfrjJsc3UCxwBZ6F6h5BOX5/G/6mwNAxLEvTzRvNWMXA/5O2+/+qHfeOe/vafwIMAMdgARvuebaDAAAAAElFTkSuQmCC",
	phonebook_photo2 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAIAAACRAPa+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MThDMTcyRTQwMDIxMUU1QTEyREQ1NDBDNTM4MkE3MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MThDMTcyRjQwMDIxMUU1QTEyREQ1NDBDNTM4MkE3MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcxOEMxNzJDNDAwMjExRTVBMTJERDU0MEM1MzgyQTcwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcxOEMxNzJENDAwMjExRTVBMTJERDU0MEM1MzgyQTcwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pRaGcgAABeJJREFUeNrsWk9oImcUH80nfAMKM1AhcxA6hQ0YSMBAAjuHhXhIwUIWDPQQDzl4aCF7KCjsoTnsUhd62BQC2UMPCbRgDoHNYQ8eCrWHBQMNKDRlp2BgCgZGiDADO+B3mEOfusmq8+8bNX+65JGIwfkmv+/Ne7/3e+8zyPw/LXiP+x73J4wbTeQuuGssvGFZ3Pu771PS+SXwStrtNiF65+24FhhnMYcxz/N4ECWNAXRN08bZwCi4ASXPcRwgHs9ngFrXNFXXbwK3wHHTPD/BSAX0qqr69X3AT1RwgjCuj52s6dPxtLhFQeAwvlaKAJcrqkp58dQdAd1JG4RYltUNYzK444IQvn7QfqFPeXr6xkBfQYfYNbzSdMqdOj6LRG6+FoZZFsoUMc1R6jwE9GT5zh/bCsKI/hZjMcTcmqEu07lES9ApQjBzyzbtWo/tcXO3FyH9BmrCB+674GxP9wXvrLN7Ak5wcHnQSiPjO/vl9+uF3Do7CeLnWJaqb2DxuM7OZ1NJabZbs/j8dhGk3vgdCbEQyzAPxoToOPS3mU1tpKXe+2g0sraSUFtGXWmOA90wTQ/csDNhjAKZ30xtrEoDTxOFwPdz4nTtrGEYI3Y3gUDAqlgGcIcR4kfCDaH849OvV5MLtp/GYtG1FQkj/He9YbpWb4cihFoWaT6Amw+Hww554FqTud3CxtL8F67/mlmYj62tLCIc+qeu+kKPutJ8aMkA7iiUKOQvvFPJxKunGeiDqJKMDS3Ni5nHi0I0etHSW7pBG+IQZIO4A0NSm54GeQ7nsulUcnbkfFAUtVyRyzVZllW/XdwgblGkRL2Weri5nuR4lpmEAVvI0KIBZeqk3WnyCWypUpNdWrgB3AlRpAmM7HpSFK69ptZk5clWsd1lQCtuRJ18Qno5kUrGBeGGVEAiLq6npb2DcrfgY496aeWK9LLkCVdVte29Engll0nF446SH+J4u1gCKZHLpmj2n1yI93BbYLvizqQf5rJf0fjm1UEJSlr5WIa4/L245XhZsaQ2tbLShIt3C1lfAosWN3iaEnQ33zugmQ/jS7eQVXXSm1HRWLkqU/VpPM9f7ePLR4lHSzOUuOdEsd44j7D4h3waFI7jSGNmWq6rD8Tos29Wed6jMFdqyk8/l67KTdONB/v4G3ijkFu7Fdmta+3Cfqlcrg08K0Vx1N/9j++4qpAOmd6CVWVlCLRH30DaH4Fqup5/eeQJnWhtomrww9BvknxYAmvt06CmDK9wj2+EMd+nqxrnraPfTs+b2vyDGEgLWwTmpTo1iYkiVOWTXFzKEtNEcFc0fOcXO2+GJhAmYVqG7uxvCxuA11+XjoulY3sIbS+32KB2vQNwSOWddaBMLLf2wN2zo1LV/pN+0YsxQyNucPdK2zt0be/oD5qHNmVBwlqlLOwHdwS0aGV/FGLhahRBlEHSWcSGIDRgKYIeZXCrpXL18M2JDcO8fz8UOUFLxNrnyv5RRVE0e/+BKsQDoHVIrP40JW19KNXg+s4qG7FgH4/Ey9/A8lG7Vg34/0T+93FyDqGQdyzwWH193Dp9R85arepfRG5GF+MMG3KXsk9e7DfO7Zv/pqGbLn3DZfURnZoHKRHf3cowlCIdKFInmMOMl0wH0PlCsV9wDzOjonj4GyyEGKcus9FsndSVFSlO43VwMALEbMizOn73/Nc/T+vOuyIt937+kixJ1HnUpjb18tuzpbmYp8CgMVC23z7fcx+wtCxJ6YDbgVU+esgwDsunyDRnZ0Q06pQIKvHOL2+f7Rx6zlUuoHuz9P8Bp+lW3Gviz3SHjpmMlE5KviaBEBhQyw5KFU2n0rPW4GZczi9FTuDoDllZjJelePJhXFoQMWZd4ELmdRt4haE+HXY61HQ7d6Vv7/u7DfFzaME4DnfoGeARoqkqgYZBG+kcXnE4AnfDDY2gSBEt12eAV7YLEsb9HBCyIcAwI0zeJmUNTXOSTB50ANKs81WYCR29Yp/O1nWd+cTs/nth97jvcd89+0+AAQCZl4dV6WeV+QAAAABJRU5ErkJggg==",
	phonebook_photo3 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAIAAACRAPa+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RDI4ODU4QjQwMDIxMUU1QThCOEQyRkU5MkNDRDI3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RDI4ODU4QzQwMDIxMUU1QThCOEQyRkU5MkNDRDI3OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZEMjg4NTg5NDAwMjExRTVBOEI4RDJGRTkyQ0NEMjc5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZEMjg4NThBNDAwMjExRTVBOEI4RDJGRTkyQ0NEMjc5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9g7SFwAAB2BJREFUeNrsWk1oG0cU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",
	phonebook_photo4 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAIAAACRAPa+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NkVFQTY2NDQwMDIxMUU1QjU4MDg3Mzc4QkI4OTQzQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NkVFQTY2NTQwMDIxMUU1QjU4MDg3Mzc4QkI4OTQzQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY2RUVBNjYyNDAwMjExRTVCNTgwODczNzhCQjg5NDNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY2RUVBNjYzNDAwMjExRTVCNTgwODczNzhCQjg5NDNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DYpODwAABvFJREFUeNrsWk9o23YU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",
	phonebook_photo5 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAIAAACRAPa+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MjgwREI2QTQwMDIxMUU1ODczODgwNEVFNUI1QTNEQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MjgwREI2QjQwMDIxMUU1ODczODgwNEVFNUI1QTNEQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYyODBEQjY4NDAwMjExRTU4NzM4ODA0RUU1QjVBM0RBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYyODBEQjY5NDAwMjExRTU4NzM4ODA0RUU1QjVBM0RBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uhivDQAABVpJREFUeNrsWjFo41YYlhMZJHBAGgTWIOgbMuggBhkuEA8HpyEFZ7O3XKe6Q8G3xUshY24o+KCFeOiQ4Y4mQyAeAqchUBnuwB4OoiGlGnygQAvSEJDgAnqDC/0dp+Eiy9KzbMduyU9sHEl+79P//v/7v//JS9R/05YecT/i/h/jpqc1EMcwLAMvloF/4MMXp3D/heEd+76Psdf/OKmlJoXLcTzLcvdwxhtAh3uwPW8OuMU+ZJ6Z7LbhBmzXxeOvQCpZSIiiyEwvWB3XHdf3qQRuzvL81PMMHG7ZNrnjU+Q5x7FsIOGmbpbremSOT8WHBC/OFmwi6MvRISEJAk1TD2nAThAtuNdLWHdmFMdEKUSQ9OG4IYznBbo/+w30JLjF+YG+y6toClgKdTb3kJk4KloifReCm18A0EMah8TfwNOLgDsS+kLr2IiVp8daIHUDwbmWYfvT0KIELoeV9ybV30jkdiobMFIVUx3D0tqX56Y9W+AjYY+D+0VJHgQ+tAbgePhzPayfWx3DmfkNkOgTWUTDkcJzzEm9NGoUH1Om5Th2vxUAOQ2q2sXQ4vg3jU7/tIepBKEF44BIJPU3zMhQQeCKHFXAYAXycpaSY3BAg2BanqZbbcOa0N8huoql6cwQFZa/llelSYsojCwJGXVderomWX9dX3nXMf7+/Pl6xCqF4KYZhh/CvV3MCfzU6hEMtfUMZTKZ37tXvdHSD0CPwh3C36FNB5DJ1HOrrKL9XVUcPbI7OiWIcLP9fmcmtICy3P7OSOh4LNyDPPvSsuIMFQsw1V61MOyXaE8tkWgakZutYgGvbxeVoJSNTKcgDyLE1atFVUH9Vs/xDt+ZesfieI6asZVUdKSZwPF5WayWFIABB4Eua42WadkxfAJX/7ZfeSIJtyuYYZ7lpYvu1arE5VaFe92r49V+1t6eGoKQQSIRPx5qxg+/tIzun09zEjvUtKZp2ra967+pn3Y2BeHW05LIlzbls87lMGPew92oFXMoWF/oFLXC0ug+ee++MQWUPz49O33frZTzbFzzfG46n1K5s1bn/ccuUNvm+mpY7U6vMNT6mhigfCRxx2cXUXHyXAmpeAjxvh882Oq0fb89SHnbxjyKSVzLduuNk8EGA6xV6DUy4jzsDx/fkFFMXoam8M2uWvDEt8X8AARkwhMUH/1qAfH/5nZlKAXviOWrLB9LbiG66t1+pQAyg8zOLQd7vqIgQq6BImKYNiQDsMdYKds2na2XB1G4wXkn9e1F63q2akfDOmw5wBIXn64KeXFlMVpjUMXfv2rqHy0i/Q2QS0WlsVOcL+jqa62pGXgMfUJRR5oBvcwcQcPsR6NBR/XzzbY5R9xN3Uyyz9Yvb01jjrgPNCMhbsOytc58XA7zhmoS0n2fvQPdf/Aghxlh3iT95Z1deZhh04U16SFx//imdfqhOxFusA+G9SwnSQSKz/dwD/fSDD3WqWBpNKyXr7WE+ydBfcIxeqNCUpzdpgnkzyCeGkh+//b5JDArX5Jjvw5VT60eeGT8S/Q8DZrik/qLeOgYu20bm869KiZn+QKimHjQW7VDkODJ96tCTeS4X/fKeRLVhbFv93eroNtjQUgSSAZQ59/sHtrjVLplwutA7B/rBs+v5FdjnrxQNJ3mmbSQgXeK4GEcUPV3r469696k+4OxShoa0HG16KjYqNU1PdGeW5Ln87DwlVKhWlbEpOhtx2ucGAfNduLykPz3EIC+qMplVXkOrQOZ7IWa0jLMQ93UdXPCgpaafLkZhlHzoiJDw5aFRguaurvnG+5N93np2H9YnmFa+rmN8Txl5vzt8Xdhj7gfcS+e/SPAANsmGBDHO1UOAAAAAElFTkSuQmCC",
	phonebook_photo6 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAIAAACRAPa+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RDFBN0JGRDQwMDIxMUU1QkU0Qjk0ODdGQjE2MzIwQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RDFBN0JGRTQwMDIxMUU1QkU0Qjk0ODdGQjE2MzIwQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVEMUE3QkZCNDAwMjExRTVCRTRCOTQ4N0ZCMTYzMjBCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVEMUE3QkZDNDAwMjExRTVCRTRCOTQ4N0ZCMTYzMjBCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4tnYrQAABd1JREFUeNrUmj9o41Yc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",
	phonebook_photo7 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAIAAACRAPa+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUEzMzYzMDQwMDIxMUU1QTQyM0U4OEY3N0QzQTcxQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUEzMzYzMTQwMDIxMUU1QTQyM0U4OEY3N0QzQTcxQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1QTMzNjJFNDAwMjExRTVBNDIzRTg4Rjc3RDNBNzFCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU1QTMzNjJGNDAwMjExRTVBNDIzRTg4Rjc3RDNBNzFCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1xnUNAAABE1JREFUeNrsmT9o21gYwOXEhSdo4b2hkDcETkMDCrRgQwv1cINHZ4s71Vt1Wwx3YA+F802nQAd7s4cOLrTU2ZIhEA03qJCAMgSs4SAaOujgBgVukIaCNXi4z9IlMbVsPz0ppj30EP4jfXrvp+/73vd972lN+D7bWsadcWfcGXfGnXGvsOXT6gjBgTERRTT5g9D1eR8OaKORO/nyvyFujBAhBN+izjwPXEJoI3gGz3Udz6MYw2eSQXOJdIyQRAiaQzyvTXQeaB6MwE3Pr2/Q2QYhfB4lBI/qOM6q56VEKR/0NL0kSTimrRJxy5Ryj/c1+qQrvApuGAmlAT3VIeFAX4vr0zhV6Bv0uLpYixU9Evr0YjPeFbdEaFqUpYIc6evpc6foIP12Q20okfmL3VtYuWkqHoKEQbchyxIiqFp5nmQUJm6cRgQBXGPQhpgd/m0oNYIx90BM3CSZsoGvq+6BewjTVEj42G2KM5yzD8NfnxSulRQ7Ski0oewWZ2bhTXNd78VP6miqTvR832bI/zkWJ4kXpBCSJbpTLuyWSwKL2X2/rvaHpnVzwrTtFLjLBfn3pmLZ0Nwr13ODCg4K6uCiGJSoCLK1tEEL21JRlgSuuQDcv7UHYeeW4yyt1JdwA9Cvr2pKrbKaVYxl2b2B5lw5oHLH8Ti5X1bKfXWPVX+goaWSLDLXkkqrd6DpPPGkDdmByUGFltrb3qnXmx1hvn07vQHI1Or7vuuzTJJ2VG5i4oalDJNxbdsLcHXTMob2vLhxaf8FSjAtWzs32IIv4uQ+0pkG2MDECKJBUGNER18iIst2QmP8wBadFo++vuCadmqOx+P79+5R+nCBmPgAPd1+RO6jn5Xqljwn0ufz5WeymM8ruzul0uPFxIZhvj/WX3c+wOj8cVCWpOFJd5V7I7RU9Tw/aZ4H9100k8D2viewb4wsk4c0sRSatT7RzodzIDzBdWDSTT5Z0EFmIhzIu9HhWdPN1OqqQ/1T9IXRaOo3i8r9cPsk+OkmCQZs+taHruul7cYoMl8aU4VKUm6oFjrvDqNCCbmFEFmCPb5NZESMyHT9o5T32aB4ujzp0tnQ+59bo1v1zSbzr86Et8xkYlB2sVpPeZ0GKm/uv4t8oOCYknQcF3w0rIpczzdM37Ijbpnx/LraY3ey9RjFmv03xaT45NFisTwhOSH/z+nZlzPjy+crcYuix/LSztW3g4PjT+ww8fZjwVtO+mqpIKc7Q480o9bcv8P9KvCWqtIask15xqbrptLq3O0+W7j+21FaOlt2YNC0Xm22ON5DrHMM5o/HYUX/45MtKJj4iIH19Zu3QfHEc/s6t6rOLv7UTi/kTbq5GXv/TdON6i/7f5zxGy2X3NblUmHvZaVSKi5dHIGOgbjd10wr6QzJpTW9MMaADqEGVvWwtifhAmJSR3nWlWNd2rppQr2Q4iu177Jl74sz7ow74864M+6M+//L/a8AAwCT3KyRNpdqGwAAAABJRU5ErkJggg==",
	phonebook_photo8 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAIAAACRAPa+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEEzOTk4Q0E0MDAyMTFFNThFRjI5QzAxMzdFRjIzRDIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEEzOTk4Qzk0MDAyMTFFNThFRjI5QzAxMzdFRjIzRDIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjljYmY5YzQzLTVjNmUtMTU0MS04YTlhLWU2OGRlZTI2MGI2ZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Y2JmOWM0My01YzZlLTE1NDEtOGE5YS1lNjhkZWUyNjBiNmQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6er126AAAGMUlEQVR4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",
	reset : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWI4MjJkZi0wYzk2LWMwNDUtOGUxNi0yMDIzMjMwYzYyNGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlGREFGMjU4ODFGMTFFNUExRENFQUE0M0FFMzNENEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlGREFGMjQ4ODFGMTFFNUExRENFQUE0M0FFMzNENEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEwMGE5YjE2LTQyYjgtZjE0Yy04MjcyLTYyNjQ1NTYzZGI1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxYWI4MjJkZi0wYzk2LWMwNDUtOGUxNi0yMDIzMjMwYzYyNGQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ypQ7xAAAD3klEQVR42uyae2iNYRzH32PHXQlTisUyk2vGtEb5Q5hiFIqwEZulXP6Txtzvl+IfuQwzliFNyNzvEU38sZKZ2Mz+GSYxZjffJ99TT0/P2c57zvu+dnm/9emcPe/1+77P8/x+v+fM09DQYLRmtTNauVyDrkHXoGvQNegabMsGvU3t0DH7Y4swUp0c4XZRpzUZJP73LtqEOoNloBOoASdBZQDHLQZH+dksDUaBYjAaHJDay0EuGATegXrNsRuJx4keFMwF9oC3YB0Yo2wbCVLBa5AFwpSHeRxsojmh0+A7KACHwUzQxUqDnqbqQWUW3Qw2mDi/MJQCuoELYGoAx/wAOWAX+OD0LPrL5P5V/FweoDmDDyMNvAHbxDN2souKp3pfacsHa8E5IHcHcYOr+X0v2GLyWh04DB6DCCcmGWGgJ4iX2naCdOnvB+AQv0eDW3zrczmxfOak5HuwPzkDhzVy3VjwCEzixGbbGNTt2At8lc8HKtguqz8o5XdhNptvaAHIAzFgGlgE+vq5FWEuTrme7ZlMjfrApBmysZ6QyMnEN66fsDsOYGws8xOajtg5Bs+A2+C31LZG2SeV3dj3xsX+F/lWZd0EE9llZdWCU2AEuKe5hzlghp1hQugOb86nG+Apb2qW9AbFJDMM1AXZO0Q8fM5zyBIxdriaRFjVRdcr5oQSGLxnK91zsDThBCMRYpI02dAQ5rG2hIl6m/dX9ZJdXNVSuwzuYPD1jb80ZftWThJ1zGJWWJBtndC0TQk0xAWTbGeATFACxinbCsF5JgOlfkKLWT3k5CPfa3cwkOPclmqihJ8F7C5emslXtluhKuakUUp7tJ0GffrjpwtZrW+ath5OFLwGx2Sc0jZfE/tCUddgJzArDEYzT5TVz0KDIqWL1LR/cWpNRlezxVj49mKZkKsqcspgoaZtuoUGkzRt5VwSccTgXU04SGTiHKr6gIWa9it2rsmoKmOsUsf2fgvOvZsVvqpMJw0K7dO0icR7ZQjnFLVhsqY9n/HXUYNXWWWoOsiK32PyfClM9VSJUm2VnWsyjUnUgpWaAng7U7f4AM4RyYL4mJ9ljAyzyxZeCw2+54RwCbRXtk1g1f4KXOZnOXPMcNaSCSzF/D30nGDGtZUGha5xzSWXAVrVKGJWYk11STDJux1L52IRSayBfrLgXMKQWLmbx7zXaA4GDa6niGzmbAglUzFTwPRQCmc7f/yoYNI9lm+1NsDjitgdhzKJCElew369YEzsbfxb+xzPBD2cOWY10y6x33XwzKJC2TGD8hvNIo7J/Qm7pcvj/r+oa9A16Bp0DboG27DBvwIMAOZI18Wz7WrvAAAAAElFTkSuQmCC",
	wo1 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABaCAYAAAAM0YAeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODAyNjcwNUI5Q0FGMTFFNUI5OUFENEI3RTc4RjY0OUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODAyNjcwNUE5Q0FGMTFFNUI5OUFENEI3RTc4RjY0OUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMyNDVkNTNmLWE4YWMtM2Y0MS1iMWNmLTA2ZWI5ZGUxMWNkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiLz4gPC9y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",
	ycgj : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWI4MjJkZi0wYzk2LWMwNDUtOGUxNi0yMDIzMjMwYzYyNGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTBCQTdCNzA4ODFGMTFFNTk4RTBCRDRGRjFBREZENkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTBCQTdCNkY4ODFGMTFFNTk4RTBCRDRGRjFBREZENkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmUyNTYzNjk3LTNhNjMtYmI0Ny1hN2NhLTFhMGVjOGZiOWNhZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxYWI4MjJkZi0wYzk2LWMwNDUtOGUxNi0yMDIzMjMwYzYyNGQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4AShhzAAAEAUlEQVR42uyaXUgUURTHx7KUypRWKUuJPlUySsN6SKPPhyKyF3soiaAS6sFIe+tB66WXsihK+kBNyaiXvqiwotSsCPOhNKiIjDQ0SKnUzLDd/pf+A7dhP2bXnXF2mQM/Zu+de3f2zD333HOORrhcLiWcZYwS5mIraCtoK2graKhE6h0YVd0REgoNbU+2TTQYkgDug6uj/RKNeHgsuAvWgjyQGE4KTgDXwRK2a8DncFFwPLgMVrJ9E+wKGS8qSTSYzs8/QTeIABVgE/vfgoMgie1O8JsvQfQNs89Jk3aAAfCF46fRGhRawJCZCj4BmVK7AMSDbVJfCmiV2m/AYvCS94RUgyOghcqItGYnX+AZaW4zWGqmgpmadiqY7GPOTDCRV1XmcTXVlRJWMAdM0szNMttEVRHO5BGoBDHce3OlFauSxj4GvWAdWA7+gGvgA1denM794CIYy/5VYPNo7MFhzrsDzrOvD6ynwklc1R+gXDO3ichS6+YZJ8EgFRw224seAnX0krK8BxtAD9unNfvSX7kF7vF5AUuE3pKFFIs6eHi3eRi6DDzgXhLeb4aktL+ykF6018xYVJjYK7DGw/3nIJcm9h38ClC51fS6TWabaCo93nwvYx6C2SCN51sgksLnpJntZJx8MU4f47pH6ACdmqtpKygyhC5Qb3CU1cCXdCUoTiZUElo74Q1gDwp3v5ueUbjtKXTbIta8wcO+349nimhmlgG6vHO3bXyZ6FZwVEpaXQx+s+jhFO7HAx4iEnf5Yp9BliPO3Gh/TLQEXNJk5A08yBukvkSOK9HxI8YZuC2i/PGiYuVKpRBMDXcGNNeP4DY/i/H5oVB0EnuujJ8rmNbUeZgvMviN4BzbJ0Cc1RXcAabyDCoE2Qyb3EkxyOG1m3FqvtUVVMsOF2iK5Sw1eKrDnKIXVVcx1+oKpvNaz7gz3cd3LOK4RrYXWF1BB689LP7IEsNrrKY/UUqJHFZX8KtU2erU3FvBckS2pr9DOk56rK7ga15zeEQ0u0ljZHnBcarSbVZXUC1FFNAU93rJ6UT/Ho4r0My3rIJVyr8CbDw9YwtN86lm3DP2i/tnOV6YZ43Vg23h8osYfm1hzClWR5T7krnXurjv4piv5XHuPpYpLL2CCgNnNVQTP76dUUoGw7YMttsl5Ur5UiwlerKJY26OC21polhnNiH26jcj9fE34a1lLFrEg1wt3/Uyoyji/VrFoqIn4RV78jgZqQzSERkRDHzyaqI+k63g1WxENJSgY5yoih8G+3UePcLzD2hNNHIUrKaPyFLJcogs6ksodJOhNHJ7BMVEzZAypmh6pTOYe9AMaVX+/4Np8I+JcBX7H4FsBW0FbQVtBW0FvchfAQYA+R/siQZW194AAAAASUVORK5CYII=",
	ycjt1 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWI4MjJkZi0wYzk2LWMwNDUtOGUxNi0yMDIzMjMwYzYyNGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUE2Q0I3NjQxMEM2MTFFNTlFRTY5MEEwMUNDN0JCNzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUE2Q0I3NjMxMEM2MTFFNTlFRTY5MEEwMUNDN0JCNzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0YjI5YmMyLTM0MTYtZDc0OC1hYzZhLWViYjYzYzQ2OTRhYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxYWI4MjJkZi0wYzk2LWMwNDUtOGUxNi0yMDIzMjMwYzYyNGQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6BgiY9AAAEhklEQVR42uyaaWwNURTHp1Rrq700olVblFCpPSURVHyxpHYRWoREIqFCSElsESJIfCE+aKPE9oXUEk3sewhqqagl1aq9hDZKa3n+J/m/uBkz9baZvj5zkl963537lv/cc8+950zDXC6XFspWTwtxcwQ6Ah2BjkBHoD8W7unAyJwXdUJQ1azYoJjBXeAG6BGKLtoAzAEDwGnQNdQEfgcr2G4PzoHOoRZktoI1bHcAZ0BsrQYZxTqC7uAXqATXeKOSJRaBN+ABaAoG8toTUAyiQR9+zhVwAQwD8eAsGA5KQV/QiuNegwK7BEaBfNBC6VsGmoNVfC3pyRCQCcawr5IzdL0Gd5S1uBdsB0eU/p+gJ3hsh4u21IkT+0rUH1QFvil90v6hG2dkcv0Lb5Lb6oO2drqo22TGjtJ9wsAxEAHK6I4zwEZeKwHldONufL/0b6ZbavycNPCeY/qDg3avwXLORDj3sQLFLe/rxlaD2wbvv8X2NkXcIzCS4sSecY27eCMq7BL4iesqlnuYr7YeZLD9FKSAt7oxRWAig9VdO11UImEM1+9PHzf6TEWEzOJLk7HyPY05iy47BLYGOfxCcb+TPm70W0ASmM9twSyq7mD7vOLalgpsQnGaQTT1xpZ7MKaRSdvSbcIdZDQlIFhlFYpb2hpkUgMQZDyx52Aa16CtQea4jWfWwwHfB+tKYhvoGRwExoGVAfjOUaCTBVoeM9p6LTCex7AbDN1yREv38UfIejplUZom59+G3kZR2RKyuLk/YN7W1M9s3qocNNKXbWISTxpy5hzN8UtDZQ1GMhsQ+wgSwVCuxVTloDwFzGRKI0evXEa/Hz77mlIZ8zfo1SRwIehC35aEdQ+zcDnlz+WYDGYFn7lH9gNTwSIwntm9975GUfoSYCAFRjBT1xhgpOQwGeynyHBm8ZIVHAIPWVuRdZoAFnC/HOzPTFpZdJK7304Jvymsfs0DO3kDRvBseges5TUpN8RRtMzmhNpeg2YC03VjrrIeI1l2G7CPqYw79Eu6s4FCpRR4k9dGBGuQ6au0C0FvMJ2zKtWvAzx4u+stUgFbzG1AxF9SxAelwAil3Z1rTWMel8ycbjYDTrUunZnDEoRmkKUHjcBy7U9dMokRsiHXpkYXLGLCG0MXjWJUjeGMi90LVoHveERTE9uRFCE52m72rQYnQDb3wl5KrcXFk09QCpRcbKBy0JZgMZavTyouKGWLy1xrZZz1ZZzpZuCVvxu9u+3rhm8msMigCpbIdq7umhwAjjLT6MYAJcJ9PoIEMmXzVGCy0s7TXZMoK9XnTZxZqUxP1Cx6mBIogSUm/VKHKdb1qSeVBP69zHVc62a20ZuF93yTm6EXnWXyfnn28MEiLSXezGCVSX+eQZ8Uf+VpUhqDzBGeV42smtl8tAc/WJ5trGNUzvVgvOGkhOn/GY8LPM5gVmRzl0dfpRbc/Wxl73RbNH9HEdM11S6CJf+KwDXNoFGhdbtF4jSmXO28GF/qb5Ap1P5UsO2w+9rfT6cCYmHO/4s6Ah2BjkBHoCPwPxb4W4ABALt3Bc8MSFMJAAAAAElFTkSuQmCC",
	ycjt2 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWI4MjJkZi0wYzk2LWMwNDUtOGUxNi0yMDIzMjMwYzYyNGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ4OTBGNkExMEM2MTFFNUEwMTA5Q0VDQjE2MTE1RTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjQ4OTBGNjkxMEM2MTFFNUEwMTA5Q0VDQjE2MTE1RTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YjNmMTk3LTEwYWItZjA0Mi04YTcyLWU5MGYxYmIyMDhhZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxYWI4MjJkZi0wYzk2LWMwNDUtOGUxNi0yMDIzMjMwYzYyNGQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4c8HerAAAEj0lEQVR42uyaV2gVQRSGNxoTW+wxQUyMJViwYJcoiBrxxULsImpUFATBgqKoYEMUUSEvig8qRrG9RGLBgN1YUOwFYyEaYy9oxJKYeP0P/JcM6+71lt29yXUPfGTu7Nzy78ycM+dsojwejxbJVkOLcHMFugJdga5AV2AoFu3vwNjsF9VCUOnUpCoxg9vBVdAxEpdoLTAD9AYnQbtIE/gLLGW7BTgD2kSak9kMVrHdEpwCSWF1Moq1Au3Bb/AdXOaNShNfBN6Ae6A+6MNrj8FzEA+68XMugnNgIEgBp8EgUAx6gCYc9xrcd0pgHLgFGil9i0FDsIKvJT3pD5aB4ez7zhm64mM5yl7cA7JAjtJfATqBR04s0cY6cWI/iPqDSsFPpU/a5bpxRibXv/Emea0maO7kEvWazNhhLp8ocATEgA9cjpPBel4rAiVcxql8v/Rv5LLU+DnTwHuO6QUOOL0HSzgT0Yxj95VleVc3tgzcMHj/dba3KOIegiEUJ/aUe9zDG/HVKYGfua+SGMOCtbVgAdtPQDp4qxtTCMbQWd12comKJ0zk/q0IMtAvU0TILL40GSvfU5ez6HFCYFOQzS+U5Xc8yEC/CXQHsxkWzLzqVrbPKkvbVoH1KE4z8KaB2BI/xtQxadsaJrxORlMcgl32VVmWjjqZDAucjD/2DEzkHnTUyRx18Mx6yPI4WF0SW6tnsC8YCZZb8J1DQWsbtDyitw1YYAqPYVfpuuWIlhnkj5D9dMKmNE3Ov7UD9aISEnYyuN9j3lY/xGzerhw0NpgwMZYnDTlzDuP4RZGyB2OZDYh9Al3BAO7FDOWgPB5MYUojR69cer/ykNabUh0LxfH5EjgXtOXaloR1N7NwOeXP5JgFzAq+MEb2BBPAPDCK2X1Q4lRR+tdWCIxhpq7RwUjJYRzYR5HRzOIlKzgIHrC2Ivu0A5jDeNkvmJm0MlSZ7UG5+wmK+01n9WsW2MYbMJhn05tgNa9JuSGZomU2R4d7D5oJzNSNucR6jGTZzcBepjJe1y/pzjoKlVLgNV4bXFWdTA+lXQC6gEmcVal+7efB21tvkQrYfIYBEX9BEa+F6mzscDIxSrs995rGPC6NOd10OpwyXTozgyUIzSBLrzIzWKJV1iW700PW5t7UuAQLmfAmconG0asmcsbF7oRz9nwJfMcjmprYDqEIydF2sG8lOAZ2MRZ2VmotHp58wibOl0DJxfooB21xFiP4+riyBKVskc+99oGzvpgz3QC8CiXIWxHszQQWGlTBurKdq7smB4DDzDRS6aBEeNC338o46K/ANKWdp7smXlaqzxs4s1KZHqPZ9DDFKoFFJv1Sh3mu61NPKh34N5/7OOxmFujN3Pstk5uhF73T5P3y7OGjTVqKApnBUpP+PIM+Kf7K06RpdDI5PK8aWRmz+Xg/frA821hDr5zrx3jDSYnS/zMeN3iywaxIcJdHX8U23P1dSuz0Wjx/RyHTNdXOg4X/SrN8zaBRoTXLJnEaU66EAMYXh+pkCrTKCrYTdlf7++mUJRbl/r+oK9AV6Ap0BboC/2OBfwQYAMFwE1totmgCAAAAAElFTkSuQmCC",
	yuanlu1 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABaCAYAAAAM0YAeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTI3QjY2Q0M5Q0FGMTFFNUIxMEVGQkQzOTA3OURBOEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTI3QjY2Q0I5Q0FGMTFFNUIxMEVGQkQzOTA3OURBOEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMyNDVkNTNmLWE4YWMtM2Y0MS1iMWNmLTA2ZWI5ZGUxMWNkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiLz4gPC9y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",
	tels : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABaCAYAAAAM0YAeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA21pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZWNkZTY1YS1mZDY2LWQxNDEtODExZC0yMjAwNGM0OWJkNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTlGRTUxMzlFNUNGMTFFNTk5NzVCMkU2Q0U2OEExRUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTlGRTUxMzhFNUNGMTFFNTk5NzVCMkU2Q0U2OEExRUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg4YWFlMjBiLTExNDAtZDk0Yi1iMDMzLTJlNzUzOTVlZjBjOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MjdCNjZDQzlDQUYxMUU1QjEwRUZCRDM5MDc5REE4RCIvPiA8L3JkZjpE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"
};
var imageDataUrl = [ {
	id : "#loads",
	url : imagedata.ico_loading
}, {
	id : "#img_edit",
	url : imagedata.edit
}, {
	id : "#img_qie",
	url : imagedata.qie
}, {
	id : "#img_qieMore",
	url : imagedata.qieMore
}, {
	id : "#img_xiaoxi",
	url : imagedata.xiaoxi
}, {
	id : "#img_xitong",
	url : imagedata.xitong
}, {
	id : "#img_dingwei1",
	url : imagedata.dingwei
}, {
	id : "#img_guiji",
	url : imagedata.guiji
}, {
	id : "#img_tongban",
	url : imagedata.tongban
}, {
	id : "#img_weilan",
	url : imagedata.weilan
}, {
	id : "#img_jingshi",
	url : imagedata.jingshi
}, {
	id : "#img_jishi",
	url : imagedata.jishi
}, {
	id : "#img_haoma",
	url : imagedata.haoma
}, {
	id : "#img_xiaoyuan",
	url : imagedata.xiaoyuan
}, {
	id : "#img_anquan",
	url : imagedata.anquan
}, {
	id : "#img_mode",
	url : imagedata.mode
}, {
	id : "#sysimg",
	url : imagedata.xitong
}, {
	id : "#img_appStatis",
	url : imagedata.appStatis
}, {
	id : "#img_appRecommend",
	url : imagedata.appRecommend
}, {
	id : "#img_yuancheng",
	url : imagedata.yuancheng
}, {
	id : "#img_huafeisearch",
	url : imagedata.huafeisearch
}, {
	id : "#img_dingwei",
	url : imagedata.dingwei
}, {
	id : "#img_youjiang",
	url : imagedata.youjiang
}, {
	id : "#img_hudong1",
	url : imagedata.hudong1
}, {
	id : "#img_yuanlu1",
	url : imagedata.yuanlu1
}, {
	id : "#img_biaopan1",
	url : imagedata.biaopan1
}, {
	id : "#img_wo1",
	url : imagedata.wo1
}, {
	id : "#img_kecheng",
	url : imagedata.kecheng
}, {
	id : "#tels",
	url : imagedata.tels
} ];
var len = imageDataUrl.length;
for (var i = 0; i < len; i++) {
	$(imageDataUrl[i].id).attr("src", imageDataUrl[i].url)
}
function gt(a) {
	var b = a.substring(0, 1);
	if (b == "#") {
		return document.querySelector(a)
	}
	var d = document.querySelectorAll(a);
	return d.length == 1 ? d[0] : d
}
var Evt = {
	stopEvt : function(a) {
		a.preventDefault();
		a.stopPropagation()
	},
	touchstart : "ontouchstart" in document ? "touchstart" : "mousedown",
	touchmove : "ontouchmove" in document ? "touchmove" : "mousemove",
	touchend : "ontouchmove" in document ? "touchend" : "mouseup"
};
var player = null;
var date = null;
var _onD1 = 24 * 60 * 60 * 1000;
var _ctDate1 = new Date(), secT1 = _ctDate1.getTime();
var tt1 = secT1 - 0 * (_onD1);
var dat1 = new Date(tt1);
_year1 = dat1.getFullYear(), _m1 = dat1.getMonth() + 1,
		_date1 = dat1.getDate(), _date1 = _date1 < 10 ? "0" + _date1 : _date1;
_m1 = _m1 < 10 ? "0" + _m1 : _m1;
var ddd1 = _year1 + "-" + _m1 + "-" + _date1;
var comF = {
	loginInit : function() {
		comF.inputEv();
		comF.bindEvt(document.querySelectorAll(".login-ques>a"), "input",
				comF.aHover, "hover");
		comF.bindEvt(document.querySelector("#ques-aLink"), "click",
				comF.popShow, ".login-ques");
		comF.bindEvt(document.querySelectorAll(".moveEl"), "click",
				comF.moveTran, ".solve-ques");
		comF.bindEvt(document.querySelector("#bk-bt"), "click", comF.backMove,
				".solve-ques")
	},
	bindEvt : function(g, l, m, d) {
		var k = g, h = m, b = [];
		if (g == null) {
			return
		}
		if (k == b || k.length == b.length) {
			return
		}
		var a = (typeof k.length == "undefined") ? 0 : k.length;
		if (a) {
			for (var f = 0; f < a; f++) {
				var j = k[f];
				if (d) {
					h = function(n) {
						m.call(j, d)
					}
				}
				j.addEventListener(l, h, false)
			}
		} else {
			if (d) {
				h = function(n) {
					m.call(k, d)
				}
			}
			k.addEventListener(l, h, false)
		}
	},
	nwEleBind : function(a, f, g, b, d) {
	},
	unBindEvt : function(f, d, a) {
		var g = f;
		var h = (typeof g.length == "undefined") ? 0 : g.length;
		if (h) {
			for (var b = 0; b < h; b++) {
				g[b].removeEventListener(d, a, false)
			}
		} else {
			g.removeEventListener(d, a, false)
		}
	},
	init : function() {
	},
	inputEv : function() {
		var a = document.querySelectorAll("input.in-put");
		for (var b = 0; b < a.length; b++) {
			comF.bindEvt(a[b], "input", function(d) {
				comF.removeClass(this.nextElementSibling, "hid-del-bt");
				if (d.target.value == "") {
					comF.addClass(this.nextElementSibling, "hid-del-bt")
				}
			}, false);
			comF.bindEvt(a[b].nextElementSibling, "click", function(d) {
				Evt.stopEvt(d);
				this.previousElementSibling.value = "";
				comF.addClass(this, "hid-del-bt");
				this.previousElementSibling.focus()
			}, false)
		}
	},
	qhClass : function(b, a) {
		comF.hasClass(b, a) == -1 ? comF.addClass(b, a) : comF
				.removeClass(b, a)
	},
	addClass : function(d, b) {
		var a = d.className.split(" "), f = comF.hasClass(d, b);
		if (f == -1) {
			a.push(b)
		}
		d.className = a.join(" ")
	},
	hasClass : function(f, d) {
		var b = f.className.split(" ");
		for ( var a in b) {
			if (b[a] == d) {
				return a
			}
		}
		return -1
	},
	removeClass : function(d, b) {
		var a = d.className.split(" "), f = comF.hasClass(d, b);
		if (f != -1) {
			a.splice(f, 1)
		}
		d.className = a.join(" ")
	},
	removeCsFn : function(d, b) {
		var d = d;
		var f = (typeof d.length == "undefined") ? 0 : d.length;
		if (f) {
			for (var a = 0; a < f; a++) {
				comF.removeClass(d[a], b)
			}
		} else {
			comF.removeClass(d, b)
		}
	},
	cgClass : function(b) {
		var f = event || window.event, a = f.target || f.srcElement, g = this
				.getElementsByTagName("a");
		if (a.nodeName.toLowerCase() == "a") {
			for (var d = 0; d < g.length; d++) {
				comF.removeClass(g[d], b)
			}
			comF.addClass(a, b)
		}
	},
	aHover : function(b, a) {
		var f = b;
		for (var d = 0; d < f.length; d++) {
			f[d].addEventListener(Evt.touchstart, function() {
				comF.addClass(this, a)
			}, false);
			f[d].addEventListener(Evt.touchend, function() {
				comF.removeClass(this, a)
			}, false)
		}
	},
	popShow : function(b, g) {
		var d = typeof g == "undefined" ? "#popB-bk" : g;
		var a = document.querySelector(d);
		if (a == null) {
			return
		}
		a.style.display = "-webkit-box";
		a.style.display = "-webkit-box";
		if (gt("#ques-aLink")) {
			comF.bindEvt(a, "click", comF.popHide)
		}
		var f = document.querySelector(b);
		comF.addClass(f, "anima");
		f.style.display = "-wekit-box";
		f.style.webkitAnimationDelay = Math.random() + "ms"
	},
	popHide : function(d) {
		Evt.stopEvt(event);
		var b = typeof d == "undefined" ? "#popB-bk" : d;
		var a = document.querySelector(b);
		if (a == null) {
			return
		}
		a.style.display = "none"
	},
	moveTran : function(b) {
		Evt.stopEvt(event);
		var d = typeof b == "string" ? gt(b) : b;
		d.style.left = "0%";
		comF.removeClass(d, "moveAnima2");
		comF.addClass(d, "moveAnima");
		d.style.webkitAnimationDelay = Math.random() + "ms";
		var a = event.target, f = a.getAttribute("mf");
		if (f) {
			gt(".f-ps-txt").style.display = "none";
			gt(".get-user-txt").style.display = "none";
			gt(".get-kefu-txt").style.display = "none";
			gt("." + f).style.display = "-webkit-box"
		}
	},
	backMove : function(a) {
		var b = typeof a == "string" ? document.querySelector(a) : a;
		b.style.left = "100%";
		comF.removeClass(b, "moveAnima");
		comF.addClass(b, "moveAnima2");
		b.style.webkitAnimationDelay = Math.random() + "ms"
	},
	trackInit : function() {
		var f = document.querySelector("#cg-t-bt"), a = document
				.querySelector("#sure-track-t"), g = document
				.querySelector(".track-data-list"), b = document
				.querySelector(".track-time-list .beg-t-link"), d = document
				.querySelector(".track-time-list .end-t-link");
		backeBt = document.querySelector("#BackTO"), comF.bindEvt(f, "click",
				comF.showTrackCount, g);
		comF.bindEvt(a, "click", comF.searchTrack, ".track-time");
		comF.bindEvt(backeBt, "click", comF.backMove, ".track-time");
		comF.bindEvt(g, "click", comF.secTime, "tag-data");
		comF.bindEvt(b, "click", comF.cgBeginTime, ".chos-time");
		comF.bindEvt(d, "click", comF.cgEndTime, ".chos-time");
		comF.clockInit1();
		comF.dataNow()
	},
	showTrackCount : function(a) {
		comF.moveTran(".track-time");
		comF.data7()
	},
	searchTrack : function(d) {
		var f = document.querySelectorAll(".show-t");
		var b = f[0].innerHTML.substring(0, 2);
		var a = f[1].innerHTML.substring(0, 2);
		if (parseInt(b, 10) == 23) {
			b = 24
		}
		if (parseInt(a, 10) == 23) {
			a = 24
		}
		if (parseInt(b, 10) >= parseInt(a, 10)) {
			alert("开始时间需要小于结束时间");
			return
		} else {
			if (versionId.indexOf("I8-G") == 0) {
			} else {
				document.querySelector("#cg-t-bt .t-time").innerHTML = f[0].innerHTML
						.substring(0, 2)
						+ "点-" + a + "点"
			}
			$("#time1").val(parseInt(b, 10));
			$("#time2").val(parseInt(a, 10));
			comF.backMove(d)
		}
	},
	data7 : function() {
		var A = 1;
		if (versionId.indexOf("Q2-II") == 0 || versionId.indexOf("-B-") > 0) {
			A = 2
		} else {
			if (versionId.indexOf("I8-G") == 0) {
				A = 9
			}
		}
		$(".track-data-list").html("");
		var C = [ "星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
		var p = 24 * 60 * 60 * 1000;
		var f = new Date(), D = f.getTime();
		var B = document.createDocumentFragment();
		var t = D - 0 * (p);
		var F = new Date(t);
		_year1 = F.getFullYear(), _m1 = F.getMonth() + 1, _date1 = F.getDate(),
				_date1 = _date1 < 10 ? "0" + _date1 : _date1;
		_m1 = _m1 < 10 ? "0" + _m1 : _m1;
		var j = _year1 + "-" + _m1 + "-" + _date1;
		var s = D - 6 * (p);
		var E = new Date(s);
		_year2 = E.getFullYear(), _m2 = E.getMonth() + 1, _date2 = E.getDate(),
				_date2 = _date2 < 10 ? "0" + _date2 : _date2;
		_m2 = _m2 < 10 ? "0" + _m2 : _m2;
		var g = _year2 + "-" + _m2 + "-" + _date2;
		var l = g + " 00:00:00";
		var y = j + " 23:59:59";
		var m = comF.getTrackCount(l, y, A);
		for (var x = 0; x < 7; x++) {
			var a = D - x * (p);
			var z = new Date(a);
			_m = z.getMonth() + 1, _date = z.getDate(), _week = C[z.getDay()];
			_date = _date < 10 ? "0" + _date : _date;
			_m = _m < 10 ? "0" + _m : _m;
			var k = $("#queryDate").val().substring(0, 5) + _m + "-" + _date;
			var q = k + " 00:00:00";
			var h = k + " 23:59:59";
			var u = k;
			var v = _m + "月" + _date + "日," + _week;
			if (x == 0) {
				if (versionId.indexOf("I8-G") == 0) {
					document.querySelector("#cg-t-bt .t-day").innerHTML = _m
							+ "月" + _date + "日";
					document.querySelector("#cg-t-bt .t-time").innerHTML = _week
				} else {
					document.querySelector(".t-day").innerHTML = v
				}
			}
			var n = document.createElement("a"), w = document
					.createElement("span"), b = document.createElement("em"), r = document
					.createElement("i"), o = document.createTextNode(v), d = document
					.createTextNode(m[x].count);
			r.className = "icon-ok";
			w.appendChild(o);
			n.appendChild(w);
			b.appendChild(d);
			n.appendChild(b);
			n.appendChild(r);
			n.setAttribute("href", "javascript:void(0)");
			n.className = x == 0 ? "pos-lay tag-data" : "pos-lay";
			n.setAttribute("val", v);
			B.appendChild(n)
		}
		document.querySelector(".track-data-list").appendChild(B)
	},
	dataNow : function() {
		$(".track-data-list").html("");
		var a = [ "星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
		var d = 24 * 60 * 60 * 1000;
		var h = new Date(), o = h.getTime();
		var b = document.createDocumentFragment();
		for (var j = 0; j < 7; j++) {
			var m = o - j * (d);
			var p = new Date(m);
			_m = p.getMonth() + 1, _date = p.getDate(), _week = a[p.getDay()];
			_date = _date < 10 ? "0" + _date : _date;
			_m = _m < 10 ? "0" + _m : _m;
			var l = $("#queryDate").val().substring(0, 5) + _m + "-" + _date;
			var g = l + " 00:00:00";
			var k = l + " 23:59:59";
			var f = l;
			var n = _m + "月" + _date + "日," + _week;
			if (j == 0) {
				if (versionId.indexOf("I8-G") == 0) {
					n = _m + "月" + _date + "日";
					document.querySelector("#cg-t-bt .t-time").innerHTML = "今天"
				}
				document.querySelector(".t-day").innerHTML = n
			}
		}
	},
	getTrackCount : function(startTime, endTime, isGpss) {
		var ret = "";
		var params = new Object();
		params.terminalId = terminalId;
		params.isGps = isGpss;
		params.beginTime = startTime;
		params.endTime = endTime;
		$.ajax({
			async : false,
			type : "POST",
			url : "getTerminalTrackById1.jsp?s=1tttttttttttttt",
			data : params,
			success : function(data) {
				ret = eval("(" + data + ")")
			}
		});
		return ret
	},
	getTrackFirstCount : function() {
		var startTime = ddd1 + " 00:00:00";
		var endTime = ddd1 + " 23:59:59";
		var ret = "";
		var params = new Object();
		params.beginTime = startTime;
		params.endTime = endTime;
		params.terminalId = terminalId;
		$
				.ajax({
					async : true,
					type : "POST",
					url : "/help/getTrackFirstCount.jsp?ttt=" + Math.random(),
					data : params,
					success : function(data) {
						ret = eval("(" + data + ")");
						if (ret.length > 0) {
							$("#count123")
									.html(
											"<img src='/icon/guiji.png' style='max-height: 15px;max-width:15px;margin-bottom: -2px;'> "
													+ ret[0].count)
						}
					}
				});
		return ret
	},
	getAlarmCount : function() {
		var startTime = ddd1 + " 00:00:00";
		var endTime = ddd1 + " 23:59:59";
		var ret = "";
		var params = new Object();
		params.beginTime = startTime;
		params.endTime = endTime;
		params.terminalId = terminalId;
		$
				.ajax({
					async : true,
					type : "POST",
					url : "/help/alarmInfoCount.jsp?ttt=" + Math.random(),
					data : params,
					success : function(data) {
						ret = eval("(" + data + ")");
						if (ret.length > 0) {
							$("#alarmCount")
									.html(
											"<img src='/icon/jingshi.png' style='max-height: 15px;max-width: 15px;margin-bottom: -2px;'> "
													+ ret[0].count)
						}
					}
				});
		return ret
	},
	getTrackAndAlarmCount : function() {
		var isGps = 1;
		if (softver.indexOf("Q2-II") == 0 || softver.indexOf("-B-") > 0) {
			isGps = 2;
			if (softver.indexOf("I8-B-M-01") == 0) {
				isGps = 8
			}
		} else {
			if (softver.indexOf("I8-G") == 0 || softver.indexOf("I9-G")) {
				isGps = 9
			}
		}
		var startTime = ddd1 + " 00:00:00";
		var endTime = ddd1 + " 23:59:59";
		var ret = "";
		var params = new Object();
		params.beginTime = startTime;
		params.endTime = endTime;
		params.terminalId = terminalId;
		params.isGps = isGps;
		$
				.ajax({
					async : true,
					timeout : 0,
					type : "POST",
					url : "/help/alarmTrackCount.jsp?ttt=" + Math.random(),
					data : params,
					success : function(data) {
						ret = eval("(" + data + ")");
						if (ret.length > 0) {
							$("#alarmCount")
									.html(
											"<img src='/icon/jingshi.png' style='max-height: 15px;max-width: 15px;margin-bottom: -2px;'> "
													+ ret[0].countalarm);
							$("#count123")
									.html(
											"<img src='/icon/guiji.png' style='max-height: 15px;max-width:15px;margin-bottom: -2px;'> "
													+ ret[0].countTrack)
						}
					}
				});
		return ret
	},
	getCentermsgCount : function() {
		var params = new Object();
		var ret = "";
		params.terminalId = terminalId;
		$.ajax({
			async : false,
			type : "POST",
			url : "/help/getActCountByIds.jsp?ttt=" + Math.random(),
			data : params,
			success : function(data) {
				ret = eval("(" + data + ")")
			}
		});
		return ret
	},
	getRequestCount : function() {
		var params = new Object();
		var ret = "";
		params.terminalId = terminalId;
		$.ajax({
			async : false,
			type : "POST",
			url : "/help/getRequestCounts.jsp?ttt=" + Math.random(),
			data : params,
			success : function(data) {
				ret = eval("(" + data + ")")
			}
		});
		return ret
	},
	getSchoolCheckCount : function() {
		var startTime = ddd1 + " 00:00:00";
		var endTime = ddd1 + " 23:59:59";
		var ret = "";
		var params = new Object();
		params.beginTime = startTime;
		params.endTime = endTime;
		params.terminalId = terminalId;
		$
				.ajax({
					async : true,
					type : "POST",
					url : "/alarm/findSchoolCheckInfo.jsp?ttt=" + Math.random(),
					data : params,
					success : function(data) {
						ret = eval("(" + data + ")");
						if (ret.length > 0) {
							$("#schoolCheckCount")
									.html(
											"<img src='/icon/schoolManager.png' style='max-height: 15px;max-width: 15px;margin-bottom: -2px;'> "
													+ ret.length)
						} else {
							$("#schoolCheckCount")
									.html(
											"<img src='/icon/schoolManager.png' style='max-height: 15px;max-width: 15px;margin-bottom: -2px;'> 0")
						}
					}
				});
		return ret
	},
	secTime : function(f) {
		Evt.stopEvt(event);
		var a = event.target.parentNode;
		comF.removeCsFn(this.children, f);
		comF.addClass(a, f);
		window.sessionStorage.trackDate = a.getAttribute("val");
		document.querySelector(".t-day").innerHTML = a.getAttribute("val");
		var b = a.getAttribute("val");
		var h = b.split(",");
		if (versionId.indexOf("I8-G") == 0
				|| versionId.indexOf("I8-B-M-01") == 0) {
			document.querySelector("#cg-t-bt .t-time").innerHTML = h[1];
			document.querySelector(".t-day").innerHTML = h[0]
		}
		var j = b.substring(0, 2) + "-" + b.substring(3, 5);
		var g = $("#queryDate").val().substring(0, 5);
		$("#queryDate").val(g + j)
	},
	playTrack : function() {
		Evt.stopEvt(event);
		var b = event.target;
		var a = b.getAttribute("isplay");
		if (a == null || a == 1) {
			b.innerHTML = "暂停轨迹";
			b.setAttribute("isplay", 2);
			alert("重新播放")
		} else {
			if (a == 2) {
				b.innerHTML = "继续播放";
				b.setAttribute("isplay", 3);
				alert("暂停")
			} else {
				b.innerHTML = "暂停轨迹";
				b.setAttribute("isplay", 2);
				alert("继续播放")
			}
		}
	},
	pullTrack : function() {
		Evt.stopEvt(event);
		var a = event.target;
		a.style.display = "none";
		document.querySelector(".play").style.display = "block";
		if (player) {
			player.pause()
		}
	},
	stopTrack : function() {
		Evt.stopEvt(event);
		var a = event.target;
		gt(".play").setAttribute("isplay", 1);
		gt(".play").innerHTML = "播放轨迹";
		alert("调用停止播放事件")
	},
	clockInit1 : function(d) {
		var f = document.querySelectorAll(".clock .add-time-bt"), b = document
				.querySelectorAll(".clock .redu-time-bt"), a = document
				.querySelector(".clock-cg-bt");
		comF.bindEvt(f, "click", comF.cgClockTime, "1");
		comF.bindEvt(b, "click", comF.cgClockTime, "0");
		comF.bindEvt(a, "click", comF.getCloTime)
	},
	getCloTime : function(b) {
		var d = parseInt(document.querySelector(".hour-txt").value, 10), a = parseInt(
				document.querySelector(".seco-txt").value, 10);
		if (isNaN(d)) {
			d = 0
		}
		if (isNaN(a)) {
			a = 0
		}
		if (d > 23) {
			d = 23
		}
		if (d < 0) {
			d = 0
		}
		if (a > 59) {
			a = 59
		}
		if (a < 0) {
			a = 0
		}
		$(".hour-txt").val(d);
		$(".seco-txt").val(a);
		d = d < 10 ? "0" + d : d;
		comF.popHide();
		window.tagTimeObj.innerHTML = d + "点"
	},
	cgBeginTime : function(a) {
		comF.popShow(a);
		window.tagTimeObj = document.querySelector(".beg-t-link .show-t")
	},
	cgEndTime : function(a) {
		comF.popShow(a);
		window.tagTimeObj = document.querySelector(".end-t-link .show-t")
	},
	cgClockTime : function(b) {
		Evt.stopEvt(event);
		var f = event.target.parentNode.querySelector("input");
		var a = parseInt(f.getAttribute("max"), 10), d = parseInt(f
				.getAttribute("min"), 10), g = parseInt(f.value, 10);
		if (b == 1) {
			if (g >= a) {
				return
			} else {
				f.value = parseInt(g, 10) + 1
			}
		} else {
			if (g <= d) {
				return
			} else {
				f.value = parseInt(g, 10) - 1
			}
		}
	},
	mgInit : function() {
		comF.inputEv();
		var a = gt(".famy-box");
		comF.bindEvt(a, "click", comF.bellFun);
		$(".per-bell").bind("click", "a", comF.bellFun);
		$(".selec-bell").bind("click", "a", comF.selecBell);
		$(".mg-cont").on("focus", ".in-put,.fam-name", function(f) {
			f.stopPropagation();
			f.preventDefault();
			$(".per-info").stop();
			var g = $(f.target);
			var b = parseInt($(".per-info").css("marginTop"));
			var d = g.offset().top - 100 - b;
			$(".per-info").animate({
				marginTop : -d + "px"
			}, 500)
		});
		$(".mg-cont").on("blur", ".in-put,.fam-name", function(b) {
			$(".per-info").stop();
			$(".per-info").animate({
				marginTop : 0
			}, 500)
		});
		$(".back-trail").on("click", function(b) {
			Evt.stopEvt(b);
			b.preventDefault();
			b.stopPropagation();
			comF.backMove(".tTrail-lay")
		})
	},
	addFamTel : function(g, k, f) {
		var b = typeof g != "string" ? "" : g, d = typeof k == "undefined" ? "铃声"
				: k, m = typeof f == "undefined" ? "" : f;
		var a = document.createElement("p");
		a.className = "h-in-put";
		a.innerHTML = '<input class="fam-name" placeholder="输入称呼" name="addName" type="text" value="'
				+ b
				+ '" /><a class="per-bell" name="addRigId" href="javascript:void(0)" rigValue="0">'
				+ d
				+ '</a><input class="in-put" type="telephone"  onBlur="checkPhone(this)" name="addTel" maxlength="19" placeholder="输入亲人号码" value="'
				+ m + '" /><span class="icon-remove hid-del-bt"></span>';
		var h = gt(".famy-box .box-ct"), j = h.querySelector(".add-tel-ar");
		h.insertBefore(a, j);
		comF.inputEv()
	},
	bellFun : function() {
		Evt.stopEvt(event);
		var b = event.target;
		var a = b.getAttribute("class");
		if (b.nodeName.toLowerCase() == "a" && a.indexOf("per-bell") != -1) {
			window.targetBell = b;
			comF.popShow(".selec-bell");
			return
		}
		if (b.nodeName.toLowerCase() == "a"
				&& b.getAttribute("id").indexOf("add-tel-bt") != -1) {
			comF.addFamTel()
		}
	},
	selecBell : function() {
		Evt.stopEvt(event);
		targetBell.innerHTML = event.target.innerHTML;
		var a = event.target.getAttribute("rvalue");
		targetBell.setAttribute("rigValue", a);
		comF.popHide()
	},
	safeInit : function() {
		$(".phone-meth").find(".set-bt").bind("click", function(a) {
			Evt.stopEvt(a);
			$(this).toggleClass("set-on-bt");
			if ($(this).hasClass("set-on-bt")) {
				$(this).prev("input").val(1)
			} else {
				$(this).prev("input").val(0)
			}
		});
		$(".safe-mange").find(".set-bt").bind("click", function(a) {
			Evt.stopEvt(a);
			$(this).toggleClass("set-on-bt");
			if ($(this).hasClass("set-on-bt")) {
				$(this).prev("input").val(1)
			} else {
				$(this).prev("input").val(0)
			}
		});
		$(".isPlay .set-bt").bind("click", function(a) {
			Evt.stopEvt(a);
			$(this).toggleClass("set-on-bt");
			if ($(this).hasClass("set-on-bt")) {
				$("#gameKey").val(0);
				$(".item-ct").slideDown()
			} else {
				$("#gameKey").val(1);
				$(".item-ct").slideUp()
			}
		});
		$(".isRest .set-bt").bind("click", function(a) {
			Evt.stopEvt(a);
			$(this).toggleClass("set-on-bt");
			if ($(this).hasClass("set-on-bt")) {
				$(".game-long").slideDown()
			} else {
				$(".game-long").slideUp()
			}
		});
		comF.clockInit();
		$(".game-long-bt").on("click", function(a) {
			$("#game-time-l").show();
			window.$longGame = $(this)
		});
		$(".rest-long-bt").on("click", function(a) {
			$("#rest-time-l").show();
			window.$longGame = $(this)
		});
		$(".tonghua-long-bt").on("click", function(a) {
			$("#tonghua-time-l").show();
			window.$longGame = $(this)
		});
		$("#rest-time-l a").on("click", function() {
			var b = $(this).html();
			var a = b.substring(0, b.length - 2);
			if (b == "取消") {
				$("#rest-time-l").hide()
			} else {
				$longGame.attr("foVal", a);
				$longGame.html(b);
				$longGame.css("color", "#333333");
				$("#rest-time-l").hide()
			}
		});
		$("#game-time-l a").on("click", function() {
			var b = $(this).html();
			var a = b.substring(0, b.length - 2);
			if (b == "取消") {
				$("#game-time-l").hide()
			} else {
				$longGame.attr("foVal", a);
				$longGame.html(b);
				$longGame.css("color", "#333333");
				$("#game-time-l").hide()
			}
		});
		$("#tonghua-time-l a").on("click", function() {
			var b = $(this).html();
			var a = b.substring(0, b.length - 2);
			if (b == "无限制") {
				a = 0;
				$longGame.attr("foVal", a);
				$longGame.html("无限制");
				$longGame.css("color", "#333333");
				$("#tonghua-time-l").hide()
			} else {
				if (b == "取消") {
					$("#tonghua-time-l").hide()
				} else {
					$longGame.attr("foVal", a);
					$longGame.html(b);
					$longGame.css("color", "#333333");
					$("#tonghua-time-l").hide()
				}
			}
		})
	},
	popTime : function(a) {
		$(".clock-cg-bt").unbind("click");
		$(".clock-cg-bt").bind("click", function() {
			a();
			comF.popHide()
		})
	},
	initColokInput : function(d) {
		var b = d.H;
		var a = d.S;
		b = (b < 10) ? "0" + b : b;
		a = (a < 10) ? "0" + a : a;
		$(".clock").find(".hour-txt").val(b);
		$(".clock").find(".seco-txt").val(a)
	},
	clockInit : function() {
		$(".allow-g-t")
				.bind(
						"click",
						function(k) {
							$(".time-type a").removeClass("target");
							$(".beginTi-bt").addClass("target");
							var d = $(this).find(".txt").attr("bti"), b = $(
									this).find(".txt").attr("eti"), j = parseInt(
									d.split(":")[0], 10), h = parseInt(d
									.split(":")[1], 10), g = parseInt(b
									.split(":")[0], 10), f = parseInt(b
									.split(":")[1], 10);
							window.cutBeginTime = {
								H : j,
								S : h
							};
							window.cutEndTime = {
								H : g,
								S : f
							};
							comF.initColokInput(cutBeginTime);
							comF.popShow(".chos-time");
							window.taTiType = 1;
							window.$tagObj = $(this);
							comF
									.popTime(function() {
										var r = cutBeginTime.H, q = cutBeginTime.S, n = cutEndTime.H, m = cutEndTime.S;
										r = (r < 10) ? "0" + r : r;
										q = (q < 10) ? "0" + q : q;
										n = (n < 10) ? "0" + n : n;
										m = (m < 10) ? "0" + m : m;
										var l = r + ":" + q, s = n + ":" + m;
										var o = parseInt(l.substring(0, 2)
												.replace(/^0/, ""), 10)
												* 60
												+ parseInt(l.substring(3, 5)
														.replace(/^0/, ""), 10);
										var p = parseInt(s.substring(0, 2)
												.replace(/^0/, ""), 10)
												* 60
												+ parseInt(s.substring(3, 5)
														.replace(/^0/, ""), 10);
										if (p < o) {
											alert("开始时间不能大于结束时间");
											return false
										} else {
											$tagObj.find(".txt").attr({
												bti : l,
												eTi : s
											});
											$tagObj.find(".txt").html(
													l + "-" + s)
										}
									})
						});
		$(".beginTi-bt").bind("click", function() {
			$(this).addClass("target");
			$(this).siblings().removeClass("target");
			window.taTiType = 1;
			comF.initColokInput(cutBeginTime)
		});
		$(".endTi-bt").bind("click", function() {
			$(this).addClass("target");
			$(this).siblings().removeClass("target");
			window.taTiType = 0;
			comF.initColokInput(cutEndTime)
		});
		$(".clock .add-time-bt").bind("click", function(b) {
			comF.cgClockTime(1);
			a()
		});
		$(".clock .redu-time-bt").bind("click", function(b) {
			comF.cgClockTime(0);
			a()
		});
		$(".clock .hour-txt").bind("blur", function(b) {
			a()
		});
		$(".clock .seco-txt").bind("blur", function(b) {
			a()
		});
		function a() {
			var f = parseInt($(".clock").find(".hour-txt").val(), 10), d = parseInt(
					$(".clock").find(".seco-txt").val(), 10), b = window.taTiType == 1 ? "cutBeginTime"
					: "cutEndTime";
			if (isNaN(f)) {
				f = 0
			}
			if (isNaN(d)) {
				d = 0
			}
			if (f > 23) {
				f = 23
			}
			if (f < 0) {
				f = 0
			}
			if (d > 59) {
				d = 59
			}
			if (d < 0) {
				d = 0
			}
			window[b].H = f;
			window[b].S = d
		}
	},
	trackRailInit : function() {
		$(".edit-star").on(
				"click",
				function(b) {
					Evt.stopEvt(b);
					var a = $(this).attr("editOn");
					if (a == 1) {
						$(this).attr("editOn", "0");
						$(this).text("编辑");
						$(".icon-edit").fadeOut();
						$(".school-date").find("li[trackon=1]").addClass(
								"target");
						$(".school-date").find(".target-edit").removeClass(
								"target-edit")
					} else {
						$(this).attr("editOn", "1");
						$(this).text("完成");
						$(".icon-edit").fadeIn()
					}
				});
		$(".school-date").on("click", ".icon-edit", function(a) {
			Evt.stopEvt(a);
			$(this).fadeOut(function() {
				$(this).parent().addClass("target-edit");
				$(this).parent().removeClass("target")
			})
		});
		$(".school-date").on("click", ".del-bt", function(a) {
			Evt.stopEvt(a)
		});
		$(".school-date").on("click", ".item", function(d) {
			var a = $(this).find(".icon-edit").is(":visible");
			if (a) {
				return
			}
			$(this).toggleClass("target");
			var b = $(this).attr("trackOn");
			if (b == 1) {
				$(this).attr("trackOn", "")
			} else {
				$(this).attr("trackOn", 1)
			}
		});
		$(".back-trail").on("click", function(a) {
			Evt.stopEvt(a);
			a.preventDefault();
			a.stopPropagation();
			comF.backMove(".tTrail-lay")
		});
		$(".up-down-bt").on("click", function(a) {
			Evt.stopEvt(a);
			$(this).find(".icon-top-up").toggleClass("icon-down-up");
			$(this).prev("div").slideToggle()
		});
		$(".rece-lay a").on("click", function() {
			$(this).toggleClass("target");
			if ($(this).hasClass("target")) {
				$(this).prev("input").val(1)
			} else {
				$(this).prev("input").val(0)
			}
		});
		$(".trail-meth a").on("click", function() {
			$(this).toggleClass("target")
		});
		$(".back-tr-list").on("click", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".trac-h-list")
		});
		$(".t-list-ct").on("click", "a", function(a) {
			Evt.stopEvt(a);
			showAlarmInfo()
		})
	},
	schoolInit : function() {
		$(".school-sign").on("click", "a", function(a) {
			Evt.stopEvt(a);
			$(this).toggleClass("target")
		});
		$(".isPlay .set-bt").bind("click", function(a) {
			Evt.stopEvt(a);
			$(this).toggleClass("set-on-bt");
			if ($(this).hasClass("set-on-bt")) {
				$(this).prev("input").val(1)
			} else {
				$(this).prev("input").val(0)
			}
		});
		$(".school-time").on("click", "li", function(b) {
			Evt.stopEvt(b);
			var a = $(this).attr("aname");
			if (a == 1) {
				comF.moveTran(".course-time")
			} else {
				if (a == 2) {
					comF.moveTran(".course-time1")
				} else {
					if (a == 3) {
						comF.moveTran(".course-time2")
					} else {
						if (a == 4) {
							comF.moveTran(".course-time3")
						} else {
							if (a == 5) {
								comF.moveTran(".course-time4")
							} else {
								if (a == 6) {
									comF.moveTran(".course-time5")
								} else {
									if (a == 7) {
										comF.moveTran(".course-time6")
									}
								}
							}
						}
					}
				}
			}
		});
		$(".back-hd-bt").on("click", "a", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".course-time")
		});
		$(".back-hd-bt1").on("click", "a", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".course-time1")
		});
		$(".back-hd-bt2").on("click", "a", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".course-time2")
		});
		$(".back-hd-bt3").on("click", "a", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".course-time3")
		});
		$(".back-hd-bt4").on("click", "a", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".course-time4")
		});
		$(".back-hd-bt5").on("click", "a", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".course-time5")
		});
		$(".back-hd-bt6").on("click", "a", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".course-time6")
		});
		$(".back-tr-list").on("click", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".trac-h-list")
		});
		comF.clockInit()
	},
	sysInit : function() {
		$(".safe-mange").find(".set-bt").bind("click", function(b) {
			Evt.stopEvt(b);
			$(this).toggleClass("set-on-bt");
			if ($(this).hasClass("set-on-bt")) {
				$(this).prev("input").val(1)
			} else {
				$(this).prev("input").val(0)
			}
		});
		$(".sys-gps .item").find("a").on("click", function(b) {
			Evt.stopEvt(b);
			$(this).siblings().removeClass("target");
			$(this).addClass("target")
		});
		$(".clk-set .item").on("click", function(d) {
			if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
			}
			Evt.stopEvt(d);
			var b = $(this);
			comF.sysClock(b);
			window.$tgClock = b;
			comF.moveTran(".clock-set")
		});
		$(".clock-order").find(".edit-back").on("click", function(b) {
			if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
			}
			Evt.stopEvt(b);
			comF.backMove(".clock-set")
		});
		$(".clock-order").find(".save-bt").on("click", function(b) {
			Evt.stopEvt(b);
			comF.savClock()
		});
		$(".clock-order").find(".save-bt").on("click", function(b) {
			if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
			}
			Evt.stopEvt(b);
			comF.backMove(".clock-set")
		});
		$(".itemweek a").on("click", function(b) {
			Evt.stopEvt(b);
			$(this).toggleClass("target")
		});
		$(".phone-meth a").on("click", function(d) {
			Evt.stopEvt(d);
			var b = $(this).parent().parent();
			if (b.attr("clkOff") == 1) {
				b.toggleClass("close-clk-icon");
				b.attr("clkOff", 0)
			} else {
				b.removeClass("close-clk-icon");
				b.attr("clkOff", 1)
			}
		});
		$(".close-clk a").on("click", function(b) {
			if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
			}
			Evt.stopEvt(b);
			$tgClock.toggleClass("close-clk-icon");
			comF.backMove(".clock-set");
			if ($tgClock.attr("clkOff") == 1) {
				$tgClock.attr("clkOff", 0)
			} else {
				$tgClock.attr("clkOff", 1)
			}
		});
		$(".clk-bell-set").on("click", function(b) {
			Evt.stopEvt(b);
			comF.popShow(".selec-bell", "#popB-bk2")
		});
		$(".selec-bell").on("click", "a", function() {
			var d = $(this).html();
			var f = $(this).attr("rvalue");
			$(".clk-bell-set").find(".bell-name").text(d);
			$(".clk-bell-set").find(".bell-name").attr("bellVal", f);
			$tgClock.attr("bellval", d);
			$tgClock.attr("rigval", f);
			var b = "";
			$(".clk-set .item").each(function(g, h) {
				b += $(h).attr("rigval") + ","
			});
			comF.popHide("#popB-bk2")
		});
		var a = "";
		$(".clk-set .item").each(function(b, d) {
			a += $(d).attr("bellVal")
		});
		$("#rigName").val(a);
		$(".on-time, .off-time").bind("click", function(d) {
			var b = $(this).find(".allow-g-t").attr("bval").split(":");
			var g = b[0], f = b[1];
			if (g > 23) {
				g = 23
			}
			if (g < 0) {
				g = 0
			}
			if (f > 59) {
				f = 59
			}
			if (f < 0) {
				f = 0
			}
			$(".hour-txt").val(g);
			$(".seco-txt").val(f);
			$("#popB-bk").find(".hour-txt").val(g);
			$("#popB-bk").find(".seco-txt").val(f);
			window.$powTime = $(this).find(".allow-g-t");
			comF.popShow("#popB-bk .chos-time")
		});
		$(".clock-cg-bt").on(
				"click",
				function() {
					var d = parseInt($(this).parents(".chos-time").find(
							".hour-txt").val(), 10);
					var b = parseInt($(this).parents(".chos-time").find(
							".seco-txt").val(), 10);
					if (isNaN(d)) {
						d = 0
					}
					if (isNaN(b)) {
						b = 0
					}
					if (d > 23) {
						d = 23
					}
					if (d < 0) {
						d = 0
					}
					if (b > 59) {
						b = 59
					}
					if (b < 0) {
						b = 0
					}
					$(".hour-txt").val(d);
					$(".seco-txt").val(b);
					d = (d < 10) ? "0" + d : d;
					b = (b < 10) ? "0" + b : b;
					$powTime.attr("bval", d + ":" + b);
					$powTime.text(d + ":" + b);
					comF.popHide()
				});
		comF.sysPowOn();
		comF.clockTimeInit();
		$(".tra-mess").on("click", ".item", function(b) {
			Evt.stopEvt(b);
			$(this).siblings().removeClass("target");
			$(this).addClass("target")
		});
		$(".sd-screen").on("click", function(b) {
			Evt.stopEvt(b);
			$("#xiping-time-l").css("display", "-webkit-box");
			window.$longGame = $(this).find(".t-v")
		});
		$(".isPlay .set-bt").bind("click", function(b) {
			Evt.stopEvt(b);
			$(this).toggleClass("set-on-bt");
			if ($(this).hasClass("set-on-bt")) {
				$(this).prev("input").val(1)
			} else {
				$(this).prev("input").val(0)
			}
		});
		$(".isPlaymute .set-bt").bind("click", function(b) {
			Evt.stopEvt(b);
			$(this).toggleClass("set-on-bt");
			if ($(this).hasClass("set-on-bt")) {
				$(this).prev("input").val(1)
			} else {
				$(this).prev("input").val(0)
			}
		});
		$("#xiping-time-l a").on("click", function() {
			if ($(this).attr("cancel") == 1) {
				$("#xiping-time-l").css("display", "none");
				return
			}
			var b = $(this).html();
			va = b.substring(0, b.length - 1);
			$longGame.attr("foVal", va);
			$("#xiping").val(va);
			$longGame.html(b);
			$("#xiping-time-l").css("display", "none")
		});
		$(".lock-screen").on("click", function(b) {
			Evt.stopEvt(b);
			$("#suoping-time-l").css("display", "-webkit-box");
			window.$suotime = $(this).find(".t-v")
		});
		$("#suoping-time-l a").on("click", function() {
			if ($(this).attr("cancel") == 1) {
				$("#suoping-time-l").css("display", "none");
				return
			}
			var d = $(this).html();
			var b = 0;
			if (d == "始终不锁") {
				b = 0
			} else {
				b = d.substring(0, d.length - 1)
			}
			$suotime.attr("foVal", b);
			$("#suoping").val(b);
			$suotime.html(d);
			$("#suoping-time-l").css("display", "none")
		});
		$(".show-phoMan").on("click", function() {
			Evt.stopEvt(event);
			$(this).toggleClass("has-b-bot");
			$(".phone-info").slideToggle()
		});
		$(".gender a").on("click", function(b) {
			Evt.stopEvt(b);
			$(this).siblings("a").removeClass("target");
			$(this).addClass("target")
		});
		$(".cgPass-bt").on("click", function(b) {
			Evt.stopEvt(b);
			comF.moveTran("#pass-cg")
		});
		$("#pass-cg .back-hd-bt").on("click", function(b) {
			Evt.stopEvt(b);
			comF.backMove("#pass-cg")
		});
		$(".grade-ipt").on("click", function(b) {
			Evt.stopEvt(b);
			$("#age-set").css("display", "-webkit-box");
			window.$targeAge = $(this)
		});
		$("#age-set a").on("click", function() {
			if ($(this).attr("cancel") == 1) {
				$("#age-set").css("display", "none");
				return
			}
			var d = $(this).html();
			var b = $(this).attr("rvalue");
			$targeAge.val(d);
			$("#grade").attr("gradeValue", b);
			$("#age-set").css("display", "none")
		})
	},
	clockTimeInit : function() {
		$(".chos-time .add-time-bt").on(
				"click",
				function() {
					var d = $(this).next("input");
					var a = parseInt(d.attr("max"), 10), b = parseInt(d
							.attr("min"), 10);
					if (parseInt(d.val(), 10) < a) {
						d.val(parseInt(d.val(), 10) + 1)
					}
				});
		$(".chos-time .redu-time-bt").on(
				"click",
				function() {
					var d = $(this).prev("input");
					var a = parseInt(d.attr("max"), 10), b = parseInt(d
							.attr("min"), 10);
					if (parseInt(d.val(), 10) > b) {
						d.val(parseInt(d.val(), 10) - 1)
					}
				})
	},
	savClock : function() {
		var f = parseInt($(".edit-clock-cont").find(".hour-txt").val(), 10);
		var d = parseInt($(".edit-clock-cont").find(".seco-txt").val(), 10);
		if (isNaN(f)) {
			f = 0
		}
		if (isNaN(d)) {
			d = 0
		}
		if (f > 23) {
			f = 23
		}
		if (f < 0) {
			f = 0
		}
		if (d > 59) {
			d = 59
		}
		if (d < 0) {
			d = 0
		}
		$(".hour-txt").val(f);
		$(".seco-txt").val(d);
		f = (f < 10) ? "0" + f : f;
		d = (d < 10) ? "0" + d : d;
		var b = [];
		$(".itemweek").find("a").each(function(g, h) {
			if ($(h).hasClass("target")) {
				b.push(g);
				$tgClock.find(".clk-day").find("i").eq(g).show()
			} else {
				$tgClock.find(".clk-day").find("i").eq(g).hide()
			}
		});
		var a = $(".clk-bell-set").find(".bell-name").attr("bellval");
		$tgClock.find(".clk-time-txt").attr("vaFor", f + ":" + d);
		$tgClock.find(".clk-time-txt").text(f + ":" + d);
		$tgClock.find(".clk-day").attr("vaFor", b)
	},
	sysClock : function(j) {
		var k = j;
		var d = k.find(".clk-time-txt").attr("vaFor").split(":");
		var h = parseInt(d[0], 10), g = parseInt(d[1], 10);
		if (isNaN(h)) {
			h = 0
		}
		if (isNaN(g)) {
			g = 0
		}
		if (h > 23) {
			h = 23
		}
		if (h < 0) {
			h = 0
		}
		if (g > 59) {
			g = 59
		}
		if (g < 0) {
			g = 0
		}
		h = (h < 10) ? "0" + h : h;
		g = (g < 10) ? "0" + g : g;
		$(".edit-clock-cont").find(".hour-txt").val(h);
		$(".edit-clock-cont").find(".seco-txt").val(g);
		var f = k.find(".clk-day").attr("vaFor");
		f = f.split(",");
		$(".itemweek").find("a").removeClass("target");
		for (var b = 0; b < f.length; b++) {
			if (f[b] != "") {
				$(".itemweek").find("a").eq(f[b]).addClass("target")
			}
		}
		var a = k.attr("bellVal");
		$(".clk-bell-set").find(".bell-name").attr("bellVal", a);
		$(".clk-bell-set").find(".bell-name").text(a)
	},
	sysPowOn : function() {
		$(".pow-off-set .set-bt").on("click", function() {
			var b = $(this).parents(".item");
			var a = b.attr("powTrue");
			if (a == 1) {
				$(this).removeClass("set-on-bt");
				b.attr("powTrue", 0)
			} else {
				$(this).addClass("set-on-bt");
				b.attr("powTrue", 1)
			}
		})
	},
	tracData7 : function(k) {
		var a = [ "星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
		var g = 24 * 60 * 60 * 1000;
		var h = new Date(), r = h.getTime();
		var f = document.createDocumentFragment();
		for (var l = 0; l < 7; l++) {
			var m = r - l * (g);
			var s = new Date(m);
			_m = s.getMonth() + 1, _date = s.getDate(), _week = a[s.getDay()];
			_date = _date < 10 ? "0" + _date : _date;
			_m = _m < 10 ? "0" + _m : _m;
			var p = _m + "月" + _date + "日," + _week;
			var o = new Date().getFullYear();
			var n = o + "-" + _m + "-" + _date;
			var d = document.createElement("a"), q = document
					.createElement("span"), b = document.createElement("i"), j = document
					.createTextNode(p);
			b.className = "icon-ar-rt";
			q.appendChild(j);
			d.appendChild(q);
			d.appendChild(b);
			d.setAttribute("href", "javascript:void(0)");
			d.className = l == 0 ? "pos-lay tag-data" : "pos-lay";
			d.setAttribute("val", n);
			f.appendChild(d)
		}
		k.appendChild(f)
	},
	creaData7 : function(h) {
		var a = [ "星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
		var f = 24 * 60 * 60 * 1000;
		var g = new Date(), n = g.getTime();
		var b = document.createDocumentFragment();
		var p = "";
		for (var j = 0; j < 7; j++) {
			var k = n - j * (f);
			var o = new Date(k);
			_m = o.getMonth() + 1, _date = o.getDate(), _week = a[o.getDay()];
			_date = _date < 10 ? "0" + _date : _date;
			_m = _m < 10 ? "0" + _m : _m;
			var l = _m + "月" + _date + "日," + _week;
			var m = (o.getYear() + 1900) + "-" + _m + "-" + _date;
			if (j == 0) {
				$("#cg-t-bt").text(l)
			}
			var d = '<a href="javascript:void(0)" class="pos-lay" datev="' + m
					+ '"><span>' + l + '</span><i class="icon-ok"></i></a>';
			if (j == 0) {
				d = '<a href="javascript:void(0)" class="pos-lay tag-data" datev="'
						+ m
						+ '"><span>'
						+ l
						+ '</span><i class="icon-ok"></i></a>'
			}
			p += d
		}
		h.innerHTML = p
	},
	schoolCheckData7 : function(h) {
		var w = [ "星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
		var l = 24 * 60 * 60 * 1000;
		var b = new Date(), x = b.getTime();
		var v = document.createDocumentFragment();
		var p = x - 0 * (l);
		var A = new Date(p);
		_year1 = A.getFullYear(), _m1 = A.getMonth() + 1, _date1 = A.getDate(),
				_date1 = _date1 < 10 ? "0" + _date1 : _date1;
		_m1 = _m1 < 10 ? "0" + _m1 : _m1;
		var f = _year1 + "-" + _m1 + "-" + _date1;
		var o = x - 6 * (l);
		var z = new Date(o);
		_year2 = z.getFullYear(), _m2 = z.getMonth() + 1, _date2 = z.getDate(),
				_date2 = _date2 < 10 ? "0" + _date2 : _date2;
		_m2 = _m2 < 10 ? "0" + _m2 : _m2;
		var d = _year2 + "-" + _m2 + "-" + _date2;
		var m = d + " 00:00:00";
		var g = f + " 23:59:59";
		for (var s = 0; s < 7; s++) {
			var a = x - s * (l);
			var t = new Date(a);
			_m = t.getMonth() + 1, _date = t.getDate(), _week = w[t.getDay()];
			_date = _date < 10 ? "0" + _date : _date;
			_m = _m < 10 ? "0" + _m : _m;
			var q = _m + "月" + _date + "日," + _week;
			var y = new Date().getFullYear();
			var u = y + "-" + _m + "-" + _date;
			var j = document.createElement("a"), r = document
					.createElement("span"), n = document.createElement("i"), k = document
					.createTextNode(q);
			n.className = "icon-ar-rt";
			r.appendChild(k);
			j.appendChild(r);
			j.appendChild(n);
			j.setAttribute("href", "javascript:void(0)");
			j.className = s == 0 ? "pos-lay tag-data" : "pos-lay";
			j.setAttribute("val", u);
			v.appendChild(j)
		}
		h.appendChild(v)
	},
	quesInit : function() {
		$(".menu-lay").on("click", "a", function(a) {
			Evt.stopEvt(a);
			$(this).addClass("target");
			$(this).siblings().removeClass("target");
			if ($(this).hasClass("ord-q")) {
				$("#ques-nav").slideDown()
			} else {
				if ($("#ques-nav:visible")) {
					$("#ques-nav").slideUp();
					if ($(this).hasClass("all-q-bt")) {
						$(".ques-cont h3").html("所有问答")
					} else {
						if ($(this).hasClass("my-q")) {
							$(".ques-cont h3").html("我的问答")
						}
					}
				}
			}
		});
		$(".ques-list").on("click", "li", function(a) {
			Evt.stopEvt(a);
			comF.moveTran(".move-layer")
		});
		$(".back-bt").on("click", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".move-layer")
		});
		$(".setMessage").on("click", function(a) {
			$("#mess-txt").val("");
			Evt.stopEvt(a);
			$(".mess-fram").show();
			$("#mess-txt").val("")
		});
		$(".cancel-bt").on("click", function(a) {
			Evt.stopEvt(a);
			$(".mess-fram").hide()
		})
	},
	mgInit1 : function() {
		comF.inputEv();
		var a = gt(".famy-box");
		$(".icon-add").bind("click", comF.addFamTel1);
		$(".mg-cont").on("focus", ".in-put,.fam-name", function(f) {
			f.stopPropagation();
			f.preventDefault();
			$(".per-info").stop();
			var g = $(f.target);
			var b = parseInt($(".per-info").css("marginTop"));
			var d = g.offset().top - 100 - b;
			$(".per-info").animate({
				marginTop : -d + "px"
			}, 500)
		});
		$(".mg-cont").on("blur", ".in-put,.fam-name", function(b) {
			$(".per-info").stop();
			$(".per-info").animate({
				marginTop : 0
			}, 500)
		})
	},
	addFamTel1 : function(j, a, b) {
		var k = typeof j != "string" ? "" : j, f = typeof b == "undefined" ? ""
				: b;
		var h = document.createElement("p");
		h.className = "h-in-put";
		h.innerHTML = '<input class="fam-name" placeholder="伙伴昵称" name="addName" type="text" value="'
				+ k
				+ '" /></a><input class="in-put" type="telephone"  onBlur="checkPhone(this)" name="addTel"  placeholder="伙伴终端号" value="'
				+ f + '" /><span class="icon-remove hid-del-bt"></span>';
		var d = gt(".famy-box .box-ct"), g = d.querySelector(".add-tel-ar");
		d.insertBefore(h, g);
		comF.inputEv()
	},
	patternMode : function() {
		$(".box-ar1").bind("click", "a", comF.openModes);
		$(".school-time").on(
				"click",
				"li",
				function(f) {
					Evt.stopEvt(f);
					var d = $(this).attr("aname");
					$(".itemweek").find("a").removeClass("target");
					if (d == 1) {
						$("#week11").val(1);
						$("#week11").next().toggleClass("target");
						comF.moveTran("#appSet-ti31")
					} else {
						if (d == 2) {
							$("#week22").val(1);
							$("#week22").next().toggleClass("target");
							comF.moveTran("#appSet-ti32")
						} else {
							if (d == 3) {
								$("#week33").val(1);
								$("#week33").next().toggleClass("target");
								comF.moveTran("#appSet-ti33")
							} else {
								if (d == 4) {
									$("#week44").val(1);
									$("#week44").next().toggleClass("target");
									comF.moveTran("#appSet-ti34")
								} else {
									if (d == 5) {
										$("#week55").val(1);
										$("#week55").next().toggleClass(
												"target");
										comF.moveTran("#appSet-ti35")
									} else {
										if (d == 6) {
											$("#week66").val(1);
											$("#week66").next().toggleClass(
													"target");
											comF.moveTran("#appSet-ti36")
										} else {
											if (d == 7) {
												$("#week77").val(1);
												$("#week77").next()
														.toggleClass("target");
												comF.moveTran("#appSet-ti37")
											}
										}
									}
								}
							}
						}
					}
				});
		$(".back-hd-bt").on("click", function(d) {
			d.stopPropagation();
			Evt.stopEvt(d);
			comF.backMove("#appSet-ti31")
		});
		$(".back-hd-bt1").on("click", function(d) {
			Evt.stopEvt(d);
			comF.backMove("#appSet-ti32")
		});
		$(".back-hd-bt2").on("click", function(d) {
			Evt.stopEvt(d);
			comF.backMove("#appSet-ti33")
		});
		$(".back-hd-bt3").on("click", function(d) {
			Evt.stopEvt(d);
			comF.backMove("#appSet-ti34")
		});
		$(".back-hd-bt4").on("click", function(d) {
			Evt.stopEvt(d);
			comF.backMove("#appSet-ti35")
		});
		$(".back-hd-bt5").on("click", function(d) {
			Evt.stopEvt(d);
			comF.backMove("#appSet-ti36")
		});
		$(".back-hd-bt6").on("click", function(d) {
			Evt.stopEvt(d);
			comF.backMove("#appSet-ti37")
		});
		$(".back-tr-list").on("click", function(d) {
			Evt.stopEvt(d);
			comF.backMove(".trac-h-list")
		});
		$(".itemweek a").on("click", function(d) {
			Evt.stopEvt(d);
			$(this).toggleClass("target");
			if ($(this).hasClass("target")) {
				$(this).prev("input").val(1)
			} else {
				$(this).prev("input").val(0)
			}
		});
		$(".safe-mange").find(".set-bt").bind("click", function(d) {
			Evt.stopEvt(d);
			$(this).toggleClass("set-on-bt");
			b()
		});
		function b() {
			if ($(this).hasClass("set-on-bt")) {
				$(this).prev("input").val(1);
				if ($("#commu").next().hasClass("set-on-bt")) {
					if (sv.indexOf("-G-") > 0) {
						$("#gpscontrol").css("display", "-webkit-box");
						$("#gpscontrol1").css("display", "-webkit-box")
					}
					$("#commu").val(0);
					$("#laidian1").css("display", "-webkit-box");
					$("#allowFamilyListen1").css("display", "-webkit-box")
				} else {
					$("#commu").val(1);
					$("#gpscontrol").css("display", "none");
					$("#gpscontrol1").css("display", "none");
					$("#laidian1").css("display", "none");
					$("#allowFamilyListen1").css("display", "none");
					$("#gps").val(0)
				}
			} else {
				$(this).prev("input").val(0);
				if ($("#commu").next().hasClass("set-on-bt")) {
					if (sv.indexOf("-G-") > 0) {
						$("#gpscontrol").css("display", "-webkit-box");
						$("#gpscontrol1").css("display", "-webkit-box")
					}
					$("#commu").val(0);
					$("#laidian1").css("display", "-webkit-box");
					$("#allowFamilyListen1").css("display", "-webkit-box")
				} else {
					$("#commu").val(1);
					$("#gpscontrol").css("display", "none");
					$("#gpscontrol1").css("display", "none");
					$("#gps").val(0);
					$("#laidian1").css("display", "none");
					$("#allowFamilyListen1").css("display", "none")
				}
			}
		}
		$(".top-nav").find(".back-trail").on("click", function(d) {
			Evt.stopEvt(d);
			comF.backMove(".tTrail-lay")
		});
		comF.parttenInitClock();
		$(".clock .add-time-bt").bind("click", function(d) {
			comF.cgClockTime(1);
			a()
		});
		$(".clock .redu-time-bt").bind("click", function(d) {
			comF.cgClockTime(0);
			a()
		});
		$(".clock .hour-txt").bind("blur", function(d) {
			a()
		});
		$(".clock .seco-txt").bind("blur", function(d) {
			a()
		});
		function a() {
			var g = parseInt($(".clock").find(".hour-txt").val(), 10), f = parseInt(
					$(".clock").find(".seco-txt").val(), 10), d = window.taTiType == 1 ? "cutBeginTime"
					: "cutEndTime";
			if (isNaN(g)) {
				g = 0
			}
			if (isNaN(f)) {
				f = 0
			}
			if (g > 23) {
				g = 23
			}
			if (g < 0) {
				g = 0
			}
			if (f > 59) {
				f = 59
			}
			if (f < 0) {
				f = 0
			}
			window[d].H = g;
			window[d].S = f
		}
	},
	openModes : function() {
		Evt.stopEvt(event);
		$(".mtitle").text("");
		var g = event.currentTarget;
		var d = $(this).find(".modetitle").text();
		var f = g.getAttribute("modesValue");
		var b = f.charAt(9);
		var a = g.getAttribute("class");
		if (a.indexOf("box-ar1") != -1) {
			window.targetModes = g;
			comF.moveTran(".tTrail-lay");
			if (f.charAt(0) == "1") {
				$("#commu").val(1);
				$("#commu").next().removeClass("set-on-bt");
				$("#gps").val(0);
				$("#gpscontrol").css("display", "none");
				$("#gpscontrol1").css("display", "none");
				$("#laidian1").css("display", "none");
				$("#allowFamilyListen1").css("display", "none")
			} else {
				$("#commu").val(0);
				$("#commu").next().removeClass("set-on-bt");
				$("#commu").next().toggleClass("set-on-bt");
				$("#laidian1").css("display", "-webkit-box");
				$("#allowFamilyListen1").css("display", "-webkit-box");
				if (sv.indexOf("-G-") > 0) {
					$("#gpscontrol").css("display", "-webkit-box");
					$("#gpscontrol1").css("display", "-webkit-box")
				}
			}
			if (f.charAt(2) == "0") {
				$("#gps").val(0);
				$("#gps1").next().removeClass("set-on-bt")
			} else {
				if (f.charAt(2) == "1" || f.charAt(2) == "2") {
					$("#gps").val(2);
					$("#gps").next().removeClass("set-on-bt");
					$("#gps").next().toggleClass("set-on-bt")
				}
			}
			if (f.charAt(4) == "1") {
				$("#ringon").val(1);
				$("#ringon").next().removeClass("set-on-bt");
				$("#ringon").next().toggleClass("set-on-bt")
			} else {
				$("#ringon").val(0);
				$("#ringon").next().removeClass("set-on-bt")
			}
			if (f.charAt(5) == "1") {
				$("#shake").val(1);
				$("#shake").next().removeClass("set-on-bt");
				$("#shake").next().toggleClass("set-on-bt")
			} else {
				$("#shake").val(0);
				$("#shake").next().removeClass("set-on-bt")
			}
			if (f.charAt(1) == "1") {
				$("#laidian").val(1);
				$("#laidian").next().removeClass("set-on-bt");
				$("#laidian").next().toggleClass("set-on-bt")
			} else {
				$("#laidian").val(0);
				$("#laidian").next().removeClass("set-on-bt")
			}
			if (f.charAt(3) == "1") {
				$("#allowFamilyListen").val(1);
				$("#allowFamilyListen").next().removeClass("set-on-bt");
				$("#allowFamilyListen").next().toggleClass("set-on-bt")
			} else {
				$("#allowFamilyListen").val(0);
				$("#allowFamilyListen").next().removeClass("set-on-bt")
			}
			if (b == "1") {
				$("#currmode").val(1);
				$(".mtitle").text("睡眠模式")
			} else {
				if (b == "2") {
					$("#currmode").val(2);
					$(".mtitle").text("上课模式")
				} else {
					if (b == "3") {
						$("#currmode").val(3);
						$(".mtitle").text("正常模式")
					} else {
						if (b == "4") {
							$("#currmode").val(4);
							$(".mtitle").text("追踪模式")
						} else {
							if (b == "5") {
								$("#currmode").val(5);
								$(".mtitle").text("自定义模式")
							}
						}
					}
				}
			}
			return
		}
	},
	parttenInitClock : function() {
		comF.clockInit2();
		$(".allow-g-t").find("div").on("click", function(d) {
			Evt.stopEvt(d);
			var a = $(this);
			window.$tgClock = a;
			comF.moveTran(".clock-set");
			var f = $tgClock.find(".txt-week").attr("vafor");
			if (f == "") {
				f = "1"
			}
			f = f.split(",");
			var b = f[0] - 1;
			changeContent1(b);
			$(".clock-day-week").find("a").removeClass("target");
			if (f[0] != "") {
				$(".clock-day-week").find("a").eq(f[0] - 1).addClass("target")
			}
		});
		$(".clock-order").find(".edit-back").on("click", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".clock-set")
		});
		$(".clock-order").find(".clock-cg-bt").on("click", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".clock-set")
		});
		$(".clock-day-week").on("click", "a", function() {
			$(this).siblings(".box-ar").removeClass("target");
			$(this).addClass("target")
		})
	},
	clockInit2 : function() {
		$(".allow-g-t")
				.find("div")
				.bind(
						"click",
						function(j) {
							$(".time-type a").removeClass("target");
							$(".beginTi-bt").addClass("target");
							var b = $(this).find(".txt").attr("bti"), a = $(
									this).find(".txt").attr("eti");
							if (b == ":") {
								b = "00:00"
							}
							if (a == ":") {
								a = "00:00"
							}
							var h = parseInt(b.split(":")[0], 10), g = parseInt(
									b.split(":")[1], 10), f = parseInt(a
									.split(":")[0], 10), d = parseInt(a
									.split(":")[1], 10);
							var k = $(this).find(".txt").html();
							if (k == "其它时间" || k == "") {
								$(".chos-time").css("display", "none")
							} else {
								$(".chos-time").css("display", "-webkit-box")
							}
							window.cutBeginTime = {
								H : h,
								S : g
							};
							window.cutEndTime = {
								H : f,
								S : d
							};
							comF.initColokInput(cutBeginTime);
							comF.popShow(".chos-time");
							window.taTiType = 1;
							window.$tagObj = $(this);
							comF
									.popTime1(function() {
										var r = cutBeginTime.H, q = cutBeginTime.S, n = cutEndTime.H, m = cutEndTime.S;
										r = (r < 10) ? "0" + r : r;
										q = (q < 10) ? "0" + q : q;
										n = (n < 10) ? "0" + n : n;
										m = (m < 10) ? "0" + m : m;
										var l = r + ":" + q, s = n + ":" + m;
										var o = parseInt(l.substring(0, 2)
												.replace(/^0/, ""), 10)
												* 60
												+ parseInt(l.substring(3, 5)
														.replace(/^0/, ""), 10);
										var p = parseInt(s.substring(0, 2)
												.replace(/^0/, ""), 10)
												* 60
												+ parseInt(s.substring(3, 5)
														.replace(/^0/, ""), 10);
										if (p < o) {
											alert("开始时间不能大于结束时间");
											return false
										} else {
											$tagObj.find(".txt").attr({
												bti : l,
												eTi : s
											});
											if ((l + "-" + s) == "24:00-24:00") {
												$tagObj.find(".txt").html(
														"其它时间")
											} else {
												$tagObj.find(".txt").html(
														l + "-" + s)
											}
										}
									})
						});
		$(".beginTi-bt").bind("click", function() {
			$(this).addClass("target");
			$(this).siblings().removeClass("target");
			window.taTiType = 1;
			comF.initColokInput(cutBeginTime)
		});
		$(".endTi-bt").bind("click", function() {
			$(this).addClass("target");
			$(this).siblings().removeClass("target");
			window.taTiType = 0;
			comF.initColokInput(cutEndTime)
		})
	},
	popTime1 : function(a) {
		$(".clock-cg-bt").unbind("click");
		$(".clock-cg-bt").bind("click", function() {
			a();
			comF.savClockModes();
			comF.backMove("#appSet-ti2")
		})
	},
	savClockModes : function() {
		var a = [];
		$(".clock-day-week").find("a").each(function(b, d) {
			if ($(d).hasClass("target")) {
				a.push(b);
				$tgClock.find(".txt-week").find("i").eq(b).show()
			} else {
				$tgClock.find(".txt-week").find("i").eq(b).hide()
			}
		});
		$tgClock.find(".txt-week").attr("vaFor", a[0] + 1)
	},
	appInfo : function() {
		$(".sort-order").on("click", "a", function(b) {
			Evt.stopEvt(b);
			$(this).addClass("gre-col");
			$(this).siblings("a").removeClass("gre-col");
			var a = $(".sort-order a").index($(this));
			$("#app-list").find(".list-wrap").hide();
			$("#app-list").find(".list-wrap").eq(a).show()
		});
		$("#app-list").on(
				"click",
				".item",
				function() {
					var d = $(this);
					filldetail(d.attr("appid"));
					var a = d.find("img").attr("src"), g = d.find(".app-name")
							.text(), b = $("#cg-t-bt").text();
					var f = $(".app-cont").find(".app-tit");
					f.find("img").attr("src", a);
					f.find(".app-name").text(g);
					f.find(".time-show").text(b);
					comF.moveTran(".move-layer")
				});
		$(".back-bt").on("click", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".move-layer")
		});
		$("#cg-t-bt").on("click", function() {
			comF.moveTran(".track-time")
		});
		$("#sure-track-t").on("click", function() {
			var a = $(".tag-data").find("span").text();
			doSearch($(".tag-data").attr("datev"), a, true)
		});
		$(".track-time .data-backBt").on("click", function() {
			comF.backMove(".track-time")
		});
		comF.creaData7(document.querySelector(".track-data-list"));
		$(".track-data-list").on("click", "a", function() {
			$(this).siblings(".tag-data").removeClass("tag-data");
			$(this).addClass("tag-data")
		});
		doSearch($(".tag-data").attr("datev"), $(".tag-data").find("span")
				.text(), false)
	},
	appSetInit : function() {
		$("#app-list").on(
				"click",
				".item",
				function() {
					var b = $(this);
					var a = b.find("img").attr("src"), g = b.find(".app-name")
							.find("em").eq(0).text(), d = b.attr("applev");
					_val = b.attr("vaU");
					var f = $(".app-cont").find(".app-tit");
					f.find("img").attr("src", a);
					f.find(".app-name").text(g);
					$(".appSet-info").find(".taget").removeClass("taget");
					if (d == "0") {
						$("#appS").css("display", "none")
					} else {
						$("#appS").css("display", "")
					}
					$(".appSet-info").find("a[vaU=" + _val + "]").addClass(
							"taget");
					window.$tagApp = b;
					comF.moveTran(".move-layer")
				});
		$(".appCont-order .sure-bt")
				.on(
						"click",
						function(b) {
							Evt.stopEvt(b);
							var d = $(".appSet-info").find(".taget")
									.attr("vaU"), a = $(".appSet-info").find(
									".taget").find(".tit").text();
							if (typeof (d) == "undefined") {
								alert("请选择当前应用限制");
								return
							}
							if (a == "不限制") {
								a = "<font color='green'>不限制</font>"
							} else {
								if (a == "中度限制") {
									a = "<font color='#4bbdc2'>中度限制</font>"
								} else {
									if (a == "轻度限制") {
										a = "<font color='#4bbdc2'>轻度限制</font>"
									} else {
										if (a == "完全限制") {
											a = "<font color='red'>完全限制</font>"
										} else {
											if (a == "应用未设置") {
												a = "<font color='red'>应用未设置</font>"
											}
										}
									}
								}
							}
							$tagApp.attr("vaU", d);
							$tagApp.find(".powerInfo").html(a);
							comF.backMove(".move-layer")
						});
		$(".appCont-order .back-bt").on("click", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".move-layer")
		});
		$(".appSet-info").on("click", "a", function(a) {
			Evt.stopEvt(a);
			$(this).siblings().removeClass("taget");
			$(this).addClass("taget")
		});
		$(".setFix-time").on("click", function(a) {
			Evt.stopEvt(a)
		});
		comF.clockInit();
		$(".clock-day-week a").on("click", function(a) {
			Evt.stopEvt(a);
			$(this).toggleClass("target")
		});
		$(".allow-g-t").on("click", function() {
			comF.moveTran(".clock-set");
			window.$tgClock = $(this);
			var b = $tgClock.find(".txt-week").attr("vafor");
			b = b.split(",");
			$(".clock-day-week").find("a").removeClass("target");
			for (var a = 0; a < b.length; a++) {
				if (b[a] != "") {
					$(".clock-day-week").find("a").eq(b[a]).addClass("target")
				}
			}
			if ($tgClock.attr("clkoff") == 1) {
				$(".close-clk a").text("关闭该时间段")
			} else {
				$(".close-clk a").text("开启该时间段")
			}
		});
		$(".close-clk a").on("click", function(a) {
			Evt.stopEvt(a);
			$tgClock.toggleClass("disItem");
			comF.backMove(".clock-set");
			if ($tgClock.attr("clkOff") == 1) {
				$tgClock.attr("clkOff", 0)
			} else {
				$tgClock.attr("clkOff", 1)
			}
		});
		$(".time-set .save-bt").on("click", function(a) {
			Evt.stopEvt(a)
		});
		$(".clock-order .edit-back").on("click", function(a) {
			Evt.stopEvt(a);
			comF.backMove(".clock-set")
		});
		$(".clock-order .save-bt").on("click", function(b) {
			Evt.stopEvt(b);
			$(".clock-cg-bt").trigger("click");
			var a = [];
			$(".clock-day-week").find("a").each(function(d, f) {
				if ($(f).hasClass("target")) {
					a.push(d);
					$tgClock.find(".txt-week").find("i").eq(d).show()
				} else {
					$tgClock.find(".txt-week").find("i").eq(d).hide()
				}
			});
			$tgClock.find(".txt-week").attr("vaFor", a);
			comF.backMove(".clock-set")
		})
	}
};
var urls = {
	help_getAllParams : "/help/getAllParams.jsp?",
	help_firstInit : "/help/firstInit.jsp?",
	help_getCode : "/help/getCode.jsp?",
	terminal_getTerminalListByIds : "/terminal/getTerminalListByIds.jsp?",
	user_getUserTerminalByUserId1 : "/user/getUserTerminalByUserId1.jsp?",
	terminal_getTerminalLatestusAndaddressById : "/terminal/getTerminalLatestusAndaddressById.jsp?",
	user_userlogin : "/user/userlogin.jsp?",
	firstindex1 : "firstindex1.jsp?",
	findpwd : "/findpwd.jsp?",
	user_modifypwd : "/user/modifypwd.jsp?",
	help_replyContentC88 : "/help/replyContentC88.jsp?",
	replyContentRemote : "replyContentRemote.jsp?",
	replyContent : "/replyContent.jsp?",
	help_test : "/help/test.jsp?",
	terminal_queryHistoryTrackMapabcI8G : "/terminal/queryHistoryTrackMapabcI8G.jsp?",
	terminal_queryHistoryTrackMapabc : "/terminal/queryHistoryTrackMapabc.jsp?",
	fencing_trackRail : "/fencing/trackRail.jsp?",
	family_basesetting_i8index : "/family/basesetting/i8index.jsp?",
	family_basesetting_index : "/family/basesetting/index.jsp?",
	family_school_index1 : "/family/school/index1.jsp?",
	family_systemsetting_index : "/family/systemsetting/index.jsp?",
	family_sallite_sySeti8 : "/family/sallite/sySeti8.jsp?",
	family_school_appsysSet : "/family/school/appsysSet.jsp?",
	family_sallite_sySet1 : "/family/sallite/sySet1.jsp?",
	family_remote_index : "/family/remote/index.jsp?",
	help_terminalInfoI8 : "/help/terminalInfoI8.jsp?",
	help_terminalInfo : "/help/terminalInfo.jsp?",
	monitor_index1 : "/monitor/index1.jsp?",
	appInfos_authorizationmessage : "/appInfos/authorizationmessage.jsp?",
	family_message_index : "/family/message/index.jsp?",
	user_managerTerminal : "/user/managerTerminal.jsp?",
	family_school_indexi8Mode : "/family/school/indexi8Mode.jsp?",
	help_i8Messageindex : "/help/i8Messageindex.jsp?",
	family_biaopan_index : "/family/biaopan/index.jsp?",
	appInfos_appset : "/appInfos/appset.jsp?",
	appInfos_appinfo : "/appInfos/appinfo.jsp?",
	appInfos_downloadApp : "/appInfos/downloadApp.jsp?",
	user_doUpdateUserTerminal : "/user/doUpdateUserTerminal.jsp?",
	family_message_getInfocount : "/family/message/getInfocount.jsp?",
	family_message_updateInfocount : "/family/message/updateInfocount.jsp?",
	wxi8jsp_unreadVoice : "/wxi8jsp/unreadVoice.jsp?",
	remote_doRecord : "/family/remote/doRecord.jsp?",
	remote_doSearchHuafei : "/family/remote/doSearchHuafei.jsp?ttt="
			+ Math.random(),
	wxi8jsp_remoteCount : "/wxi8jsp/remoteCount.jsp?",
	wxjs_getwxjsParam : "/wxjs/getwxjsParam.jsp?",
	help_findUserListByTerminalId : "/help/findUserListByTerminalId.jsp?",
	wxI9Qunliao : "/family/basesetting/i8indexI9.jsp?"
};
var protocolVersion;
var isclick = 0;
var msgCount = 0;
var isLogin = "0";
var openid = "null";
var code = serverParam.code;
var terminalId = "null";
var terminals = "null";
var myDate = new Date();
var timer = myDate.getTime();
var userId = "0";
var nikeName = "";
var softVersion;
var c;
var retAll;
var saleId = 0;
var isI9Ver = "I9-";
var model = 0;
$.ajaxSetup({
	timeout : 1000,
	async : false,
	error : function() {
	}
});
var lat;
var lng;
var time;
function initParam() {
	var a = getFirstInit();
	if (a.length > 0) {
		openid = a[0].openid;
		terminalId = a[0].terminalId;
		terminals = a[0].terminals;
		isLogin = a[0].isLogin;
		userId = a[0].userId;
		c = a[0].c;
		if (openid != "null") {
			setCookie("openid1", openid)
		}
		if (terminals != "null") {
			setCookie("tid1", terminalId);
			setCookie("tids1", terminals);
			setCookie("logins1", isLogin);
			setCookie("uid1", userId)
		}
		$("#openid").val(openid)
	} else {
		if (openid == "null") {
			openid = getCookie("openid1")
		}
		if (terminals == "null") {
			terminalId = getCookie("tid1");
			terminals = getCookie("tids1");
			isLogin = getCookie("logins1");
			userId = getCookie("uid1")
		}
	}
	if (isLogin == "1") {
		document.getElementById("login").style.display = "none";
		document.getElementById("caidan").style.display = "block"
	} else {
		if (isLogin == "0") {
			document.getElementById("login").style.display = "block";
			document.getElementById("caidan").style.display = "none";
			comF.loginInit()
		}
	}
	isclick = getCookie("isclick");
	if (isclick == "2") {
		document.getElementById("cli").style.display = "none"
	}
	initPage()
}
function initAllParams() {
	var ret = "";
	var params = new Object();
	params.timer = timer;
	params.terminalId = terminalId;
	params.userId = userId;
	params.openid = openid;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.help_getAllParams + "ttt=" + Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")")
		}
	});
	return ret
}
function getFirstInit() {
	var ret = "";
	var params = new Object();
	params.code = code;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.help_firstInit,
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")")
		}
	});
	return ret
}
function getMd5Code() {
	var ret = "";
	var params = new Object();
	params.timer = timer;
	params.terminals = terminals;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.help_getCode + "ttt=" + Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")")
		}
	});
	return ret
}
function getTerminalInfo() {
	var ret = "";
	var params = new Object();
	params.terminalId = terminalId;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.terminal_getTerminalListByIds + "ttt=" + Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")")
		}
	});
	return ret
}
function getUserInfo() {
	var params = new Object();
	params.userId = userId;
	params.terminalId = terminalId;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.user_getUserTerminalByUserId1 + "ttt=" + Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")")
		}
	});
	return ret
}
function getAddress() {
	var ret = "";
	var params = new Object();
	params.terminalId = terminalId;
	$.ajax({
		async : true,
		type : "POST",
		url : urls.terminal_getTerminalLatestusAndaddressById + "?ttt="
				+ Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")");
			if (ret.length > 0) {
				freshMapInfo(ret)
			}
		}
	});
	return ret
}
function fresh1() {
	getAddress();
	setTimeout("fresh1()", 60000)
}
var realTimeMonitor = 0;
function freshMapInfo(u) {
	lat = u[0].lat;
	lng = u[0].lng;
	var l = 24 * 60 * 60 * 1000;
	var b = new Date(), x = b.getTime();
	var p = x - 0 * (l);
	var z = new Date(p);
	_year1 = z.getFullYear(), _m1 = z.getMonth() + 1, _date1 = z.getDate(),
			_hours = z.getHours(), _minutes = z.getMinutes(), _second = z
					.getSeconds();
	_date1 = _date1 < 10 ? "0" + _date1 : _date1;
	_m1 = _m1 < 10 ? "0" + _m1 : _m1;
	_minutes = _minutes < 10 ? "0" + _minutes : _minutes;
	_second = _second < 10 ? "0" + _second : _second;
	var g = _year1 + "-" + _m1 + "-" + _date1 + " " + _hours + ":" + _minutes
			+ ":" + _second;
	var t = u;
	if (t.length > 0) {
		var f = t[0].address;
		var k = t[0].battery;
		var a = t[0].isOnline;
		var h = t[0].dates;
		var n = t[0].isGps;
		time = t[0].positionTime;
		var s = Date.parse(new Date(time.replace(/-/g, "/")));
		var m = Date.parse(new Date(g.replace(/-/g, "/")));
		var o = m - s;
		var r = Math.floor(o / (60 * 1000));
		var d = t[0].batterys;
		var j = t[0].isOnlines;
		var q = parseInt(t[0].schoolForbidden, 10);
		realTimeMonitor = t[0].realTimeMonitor;
		var w = "";
		model = u[0].model;
		var y = "";
		if (model == 1) {
			y = "睡眠模式"
		} else {
			if (model == 2) {
				y = "上课模式"
			} else {
				if (model == 3) {
					y = "正常模式"
				} else {
					if (model == 5) {
						y = "自定义模式"
					}
				}
			}
		}
		if (j == 1 || j == 2) {
			if (d > 1 && r < 30) {
				w = "通讯中 ";
				if (q == 1) {
					w += "<font color='#fff600'>上课禁用中</font>"
				} else {
					if (q == 2) {
						if ((softver == "S1-G-I-01")
								|| (softver == "Q10-G-I-01")) {
							w += "<font color='#fff600'>自由使用中</font>"
						}
					}
				}
				if (realTimeMonitor == 1) {
					$("#jishilabel").html("<font size='2px'>已启动</font>")
				} else {
					$("#jishilabel").html("")
				}
			} else {
				if (d <= 1 && r > 30) {
					w = "<font color='#fff600'>通讯中断</font>"
				} else {
					if (d > 1 && r > 30) {
						w = "<font color='#fff600'>通讯中断</font>"
					} else {
						w = "通讯中 "
					}
				}
			}
		} else {
			if (j == 0) {
				w = "<font color='#fff600'>通讯中断</font>"
			}
		}
		w += "&nbsp;&nbsp;" + y;
		$("#status").html(
				"<font color='white'>" + w
						+ "&nbsp;（电量</font><font color='#fff600'>" + k
						+ "</font><font color='white'>）</font>");
		if ((softver.indexOf("I8-") == 0) || softver.indexOf(isI9Ver) == 0
				|| softver.indexOf("C88P-G") == 0) {
			if (softver.indexOf("I8-G-Q") == 0) {
				$("#address").html(f)
			} else {
				$("#address").html(
						f + "&nbsp;（孩子今天步行了<font color='#fff600'>" + t[0].step
								+ "</font>步）")
			}
		} else {
			if ((softver == "S1-G-I-01") || (softver == "Q10-G-I-01")) {
				$("#address").html(
						"已拦截应用启动<font color='#fff600'>"
								+ t[0].countAppIntercept
								+ "</font>次，详情查看【消息中心】")
			} else {
				$("#address").html(f)
			}
		}
		if ((softver == "S1-G-I-01") || (softver == "Q10-G-I-01")) {
			var v = t[0].countRunLevelUnset;
			if (v != "0") {
				$("#address1").html(
						"<font color='white'>有<font color='#fff600'>" + v
								+ "</font>个新安装的应用，请在【应用设置】管理</font>")
			}
		} else {
			if (softver.indexOf("I8-G") == 0 || softver.indexOf(isI9Ver) == 0) {
				if (n == "GSM网络定位") {
					n = "综合定位"
				}
			}
			$("#address1").html(
					"<font color='white'>" + h
							+ "</font><font color='#fff600'>&nbsp;" + n
							+ "</font>")
		}
	}
}
function getAddress1() {
	var ret = "";
	var params = new Object();
	params.terminalId = terminalId;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.terminal_getTerminalLatestusAndaddressById + "?ttt="
				+ Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")")
		}
	});
	return ret
}
function freshMapInfo1(u) {
	lat = u[0].lat;
	lng = u[0].lng;
	var l = 24 * 60 * 60 * 1000;
	var b = new Date(), x = b.getTime();
	var p = x - 0 * (l);
	var z = new Date(p);
	_year1 = z.getFullYear(), _m1 = z.getMonth() + 1, _date1 = z.getDate(),
			_hours = z.getHours(), _minutes = z.getMinutes(), _second = z
					.getSeconds();
	_date1 = _date1 < 10 ? "0" + _date1 : _date1;
	_m1 = _m1 < 10 ? "0" + _m1 : _m1;
	_minutes = _minutes < 10 ? "0" + _minutes : _minutes;
	_second = _second < 10 ? "0" + _second : _second;
	var g = _year1 + "-" + _m1 + "-" + _date1 + " " + _hours + ":" + _minutes
			+ ":" + _second;
	var t = u;
	if (t.length > 0) {
		var f = t[0].address;
		var k = t[0].battery;
		var a = t[0].isOnline;
		var h = t[0].dates;
		var n = t[0].isGps;
		time = t[0].positionTime;
		var s = Date.parse(new Date(time.replace(/-/g, "/")));
		var m = Date.parse(new Date(g.replace(/-/g, "/")));
		var o = m - s;
		var r = Math.floor(o / (60 * 1000));
		var d = t[0].batterys;
		var j = t[0].isOnlines;
		var q = parseInt(t[0].schoolForbidden, 10);
		realTimeMonitor = t[0].realTimeMonitor;
		var w = "";
		model = u[0].model;
		var y = "";
		if (model == 1) {
			y = "睡眠模式"
		} else {
			if (model == 2) {
				y = "上课模式"
			} else {
				if (model == 3) {
					y = "正常模式"
				} else {
					if (model == 5) {
						y = "自定义模式"
					}
				}
			}
		}
		if (j == 1 || j == 2) {
			if (d > 1 && r < 30) {
				w = "通讯中 ";
				if (q == 1) {
					w += "<font color='#fff600'>上课禁用中</font>"
				} else {
					if (q == 2) {
						if ((softver == "S1-G-I-01")
								|| (softver == "Q10-G-I-01")) {
							w += "<font color='#fff600'>自由使用中</font>"
						}
					}
				}
				if (realTimeMonitor == 1) {
					$("#jishilabel").html("<font size='2px'>已启动</font>")
				} else {
					$("#jishilabel").html("")
				}
			} else {
				if (d <= 1 && r > 30) {
					w = "<font color='#fff600'>通讯中断</font>"
				} else {
					if (d > 1 && r > 30) {
						w = "<font color='#fff600'>通讯中断</font>"
					} else {
						w = "通讯中"
					}
				}
			}
		} else {
			if (j == 0) {
				w = "<font color='#fff600'>通讯中断</font>"
			}
		}
		w += "&nbsp;&nbsp;" + y;
		$("#status").html(
				"<font color='white'>" + w
						+ "&nbsp;（电量</font><font color='#fff600'>" + k
						+ "</font><font color='white'>）</font>");
		if ((softver.indexOf("I8-") == 0) || softver.indexOf(isI9Ver) == 0
				|| softver.indexOf("C88P-G") == 0) {
			if (softver.indexOf("I8-G-Q") == 0) {
				$("#address").html(f)
			} else {
				$("#address").html(
						f + "&nbsp;（孩子今天步行了<font color='#fff600'>" + t[0].step
								+ "</font>步）")
			}
		} else {
			if ((softver == "S1-G-I-01") || (softver == "Q10-G-I-01")) {
				$("#address").html(
						"已拦截应用启动<font color='#fff600'>"
								+ t[0].countAppIntercept
								+ "</font>次，详情查看【消息中心】")
			} else {
				$("#address").html(f)
			}
		}
		if ((softver == "S1-G-I-01") || (softver == "Q10-G-I-01")) {
			var v = t[0].countRunLevelUnset;
			if (v != "0") {
				$("#address1").html(
						"<font color='white'>有<font color='#fff600'>" + v
								+ "</font>个新安装的应用，请在【应用设置】管理</font>")
			}
		} else {
			if (softver.indexOf("I8-G") == 0 || softver.indexOf(isI9Ver) == 0) {
				if (n == "GSM网络定位") {
					n = "综合定位"
				}
			}
			if (softver.indexOf("I8-G") == 0 || softver.indexOf(isI9Ver) == 0
					|| softver.indexOf("C88P-G") == 0) {
				$("#address").html(
						f + "&nbsp;（孩子今天步行了<font color='#fff600'>" + t[0].step
								+ "</font>步）");
				$("#address1")
						.html(
								"<font color='white'>"
										+ h
										+ "</font><font color='#fff600'>&nbsp;"
										+ n
										+ "</font>&nbsp&nbsp<font color='white'>位置更新中…</font>");
				setTimeout(function() {
					var A = getAddress1();
					addre = A[0].address;
					var B = A[0].isGps;
					if (B == 1) {
						n = "卫星定位"
					}
					$("#address1").html(
							"<font color='white'>" + A[0].dates
									+ "</font><font color='#fff600'>&nbsp;" + n
									+ "</font>");
					if (softver.indexOf("I8-G-Q") == 0) {
						$("#address").html(addre)
					} else {
						$("#address").html(
								addre + "&nbsp;（孩子今天步行了<font color='#fff600'>"
										+ t[0].step + "</font>步）")
					}
					setTimeout("fresh1()", 1000)
				}, 15000)
			} else {
				$("#address1").html(
						"<font color='white'>" + h
								+ "</font><font color='#fff600'>&nbsp;" + n
								+ "</font>");
				setTimeout("fresh1()", 1000)
			}
		}
	}
}
var infocount = 0;
var trr = "";
var softVersion1 = "";
var softver = "";
var iconurl = "";
function initPage() {
	reetAll = initAllParams();
	if (reetAll.length > 0) {
		softver = reetAll[0].softVersion;
		if (softver.indexOf("GT17-G-I") == 0 || softver.indexOf("M1-G-I") == 0) {
			document.getElementById("xiao").style.display = "none";
			document.getElementById("img_xiaoxi").style.display = "none";
			document.getElementById("dingwei").style.display = "none";
			document.getElementById("sys").style.display = "none";
			document.getElementById("terinfo").style.display = "none";
			var b = "http://www.abdjy.com/app-i9.html";
			location.href = b;
			return
		}
		saleId = reetAll[0].saleId;
		protocolVersion = reetAll[0].protocolVersion;
		lat = reetAll[0].lat;
		lng = reetAll[0].lng;
		time = reetAll[0].positionTime;
		document.getElementById("xiao").style.display = "block";
		var f = reetAll[0].msgCount;
		infocount = reetAll[0].infocount;
		if (f > 0) {
			document.getElementById("msgCount").style.display = "block";
			$("#msgCount").html(f);
			document.getElementById("phones").style.marginTop = "-10px"
		}
		var d = reetAll[0].icon;
		iconurl = reetAll[0].icon;
		$("#nike").val(reetAll[0].nickName);
		nikeName = reetAll[0].nickName;
		var a = document.getElementById("icon");
		a.src = "../../icon/" + d;
		c = reetAll[0].c;
		model = reetAll[0].model;
		if (softver.indexOf("I8-G-A-01") == 0) {
			softver = "I8-B-I-01"
		}
		if (softver == "Q9-G-II-01") {
			softVersion1 = "Q9GPS"
		} else {
			if (softver == "Q9-B-II-02" || softver == "Q9-B-III-01") {
				softVersion1 = "Q9M"
			} else {
				if (softver == "Q5-B-I-01") {
					softVersion1 = "Q5B"
				} else {
					if (softver == "C88N-B-I-01") {
						softVersion1 = "C88"
					} else {
						if (softver == "C88N-B-II-01") {
							softVersion1 = "C88R（I-01）"
						} else {
							if (softver == "C88N-G-I-01") {
								softVersion1 = "C88(G)"
							} else {
								if (softver == "Q5-G-II-01") {
									softVersion1 = "Q5G"
								} else {
									if (softver == "Q5N-B-II-01") {
										softVersion1 = "Q5N"
									} else {
										if (softver == "Q5N-G-I-01") {
											softVersion1 = "Q5GN"
										} else {
											softVersion1 = softver
										}
									}
								}
							}
						}
					}
				}
			}
		}
		freshMapInfo1(reetAll)
	}
	document.getElementById("yuancheng").style.borderBottom = "none";
	if (softver.indexOf("-G-") > 0) {
		if (softver.indexOf("C88N") == 0 || softver.indexOf("C88P-G") == 0) {
			document.getElementById("tongban").style.display = "none";
			document.getElementById("weilan").style.display = "-webkit-box";
			document.getElementById("jishi").style.display = "-webkit-box";
			document.getElementById("jishi").style.borderBottom = "none";
			document.getElementById("dingwei").style.borderBottom = "-webkit-box";
			document.getElementById("school").style.display = "-webkit-box";
			document.getElementById("safety").style.display = "-webkit-box";
			document.getElementById("phone").style.display = "-webkit-box";
			document.getElementById("yuancheng").style.display = "-webkit-box";
			protocolVersion = parseFloat(protocolVersion, 10);
			if (protocolVersion >= 1.11) {
			}
			comF.getSchoolCheckCount();
			comF.getTrackAndAlarmCount()
		} else {
			if (softver.indexOf("S1-G-I-01") == 0
					|| softver.indexOf("Q10-G-I-01") == 0) {
				$("#dingwei1").html("最新位置");
				var j = reetAll[0].countRunLevelUnset;
				if (j != "0") {
					document.getElementById("msgCount1").style.display = "block";
					$("#msgCount1").html(j);
					document.getElementById("appset").style.marginTop = "-10px"
				}
				var a = document.getElementById("sysimg");
				a.src = imagedata.appManager;
				document.getElementById("appcenter").style.display = "-webkit-box";
				document.getElementById("appcenter").style.borderBottom = "none";
				document.getElementById("appset").style.borderBottom = "none";
				document.getElementById("dingwei").style.display = "none";
				document.getElementById("sys").style.borderBottom = "none";
				document.getElementById("dingwei").style.borderBottom = "none";
				document.getElementById("sys").style.borderBottom = "1px solid #EfEfEf";
				document.getElementById("appset").style.display = "-webkit-box";
				document.getElementById("appinfo").style.display = "-webkit-box";
				document.getElementById("apps").style.display = "-webkit-box";
				$("#appsysSet").html("管理孩子手机")
			} else {
				if (softver.indexOf("I8-G") == 0) {
					document.getElementById("phone").style.display = "-webkit-box";
					document.getElementById("yuancheng").style.display = "-webkit-box";
					document.getElementById("weilan").style.display = "none";
					$("#ding").html("定位服务");
					document.getElementById("weilan").style.borderBottom = "none";
					document.getElementById("dingwei").style.borderBottom = "none";
					document.getElementById("terinfo").style.display = "none";
					document.getElementById("safety").style.borderBottom = "none";
					document.getElementById("qingjingmode").style.display = "-webkit-box";
					document.getElementById("huafei").style.display = "-webkit-box";
					document.getElementById("yuancheng").style.borderBottom = "1px solid #EfEfEf";
					getUnreadVoiceCount();
					comF.getTrackAndAlarmCount();
					if (softver.indexOf("I8-G-Q") == 0) {
						var h = getUserInfo();
						var k;
						if (h.length > 0) {
							k = h[0];
							var g = k.mobile;
							if (g == "") {
								document.getElementById("tel1").href = "tel:"
							} else {
								document.getElementById("tel1").href = "tel:"
										+ g
							}
						}
						document.getElementById("ibaby_id_49").style.display = "none";
						document.getElementById("biao").style.display = "none";
						document.getElementById("tel").style.display = "block";
						document.getElementById("tel1").style.display = "block"
					}
				} else {
					if (softver.indexOf(isI9Ver) == 0) {
						document.getElementById("phone").style.display = "-webkit-box";
						document.getElementById("yuancheng").style.display = "-webkit-box";
						document.getElementById("weilan").style.display = "none";
						$("#ding").html("定位服务");
						document.getElementById("weilan").style.borderBottom = "none";
						document.getElementById("dingwei").style.borderBottom = "none";
						document.getElementById("terinfo").style.display = "none";
						document.getElementById("safety").style.borderBottom = "none";
						document.getElementById("qingjingmode").style.display = "-webkit-box";
						document.getElementById("huafei").style.display = "-webkit-box";
						document.getElementById("yuancheng").style.borderBottom = "1px solid #EfEfEf";
						comF.getTrackAndAlarmCount();
						var h = getUserInfo();
						var k;
						if (h.length > 0) {
							k = h[0];
							var g = k.mobile;
							if (g == "") {
								document.getElementById("tel1").href = "tel:"
							} else {
								document.getElementById("tel1").href = "tel:"
										+ g
							}
						}
						$("#lu").css({
							display : "none"
						});
						$("#ibaby_id_48").css({
							display : "none"
						});
						$("#kecheng").css({
							display : "-webkit-box"
						});
						document.getElementById("hu").style.display = "none";
						document.getElementById("ibaby_id_49").style.display = "block";
						document.getElementById("biao").style.display = "block";
						document.getElementById("ibaby_id_50").style.display = "block";
						document.getElementById("info").style.display = "block";
						document.getElementById("tel").style.display = "none";
						document.getElementById("tel1").style.display = "block"
					} else {
						document.getElementById("tongban").style.display = "none";
						document.getElementById("weilan").style.display = "-webkit-box";
						document.getElementById("jishi").style.display = "-webkit-box";
						document.getElementById("jishi").style.borderBottom = "none";
						document.getElementById("dingwei").style.borderBottom = "-webkit-box";
						document.getElementById("school").style.display = "-webkit-box";
						document.getElementById("safety").style.display = "-webkit-box";
						document.getElementById("phone").style.display = "-webkit-box";
						document.getElementById("yuancheng").style.display = "-webkit-box";
						comF.getTrackAndAlarmCount()
					}
				}
			}
		}
	} else {
		if (softver.indexOf("-G-") < 0) {
			$("#ding").html("");
			$("#ding").html("地图查看");
			if (softver.indexOf("Q2-II") == 0) {
				$("#ding").html("定位轨迹")
			} else {
				document.getElementById("count123").style.display = "none"
			}
			if (softver.indexOf("I8-B") == 0) {
				getwxjs();
				document.getElementById("phone").style.display = "-webkit-box";
				document.getElementById("yuancheng").style.display = "-webkit-box";
				document.getElementById("dingwei").style.borderBottom = "none";
				document.getElementById("weilan").style.display = "none";
				document.getElementById("count123").style.display = "none";
				document.getElementById("terinfo").style.display = "none";
				document.getElementById("safety").style.borderBottom = "none";
				document.getElementById("qingjingmode").style.display = "-webkit-box";
				document.getElementById("huafei").style.display = "-webkit-box";
				document.getElementById("yuancheng").style.borderBottom = "1px solid #EfEfEf";
				getUnreadVoiceCount();
				if (softver.indexOf("I8-B-M-01") == 0) {
					$("#ding").html("定位服务");
					document.getElementById("count123").style.display = "-webkit-box";
					comF.getTrackAndAlarmCount()
				}
			} else {
				document.getElementById("school").style.display = "-webkit-box";
				document.getElementById("safety").style.display = "-webkit-box";
				document.getElementById("phone").style.display = "-webkit-box";
				document.getElementById("yuancheng").style.display = "-webkit-box";
				document.getElementById("dingwei").style.borderBottom = "none";
				if (softver.indexOf("C88N-B") == 0
						|| softver.indexOf("C88N-R") == 0) {
					if (saleId == 265) {
						document.getElementById("tongban").style.display = "none"
					} else {
						document.getElementById("tongban").style.display = "-webkit-box"
					}
					document.getElementById("dingwei").style.borderBottom = "1px solid #EfEfEf";
					document.getElementById("tongban").style.borderBottom = "none";
					protocolVersion = parseFloat(protocolVersion, 10);
					if (protocolVersion >= 1.11) {
						document.getElementById("yuancheng").style.borderBottom = "1px solid #EfEfEf";
						document.getElementById("huafei").style.display = "-webkit-box"
					}
				}
			}
			document.getElementById("ji").style.display = "block"
		}
	}
	if (softver.indexOf("I8-") == 0 || softver.indexOf(isI9Ver) == 0) {
		document.getElementById("i8ids").style.display = "-webkit-box"
	}
}
function xiaoxiCenter() {
	document.getElementById("xiao").style.display = "block";
	var b = comF.getCentermsgCount();
	msgCount = b[0].actCount;
	var a = getMsgInfo(msgCount);
	if (a.length > 0) {
		var d = a[0].msgCount;
		if (d > 0) {
			document.getElementById("msgCount").style.display = "block";
			$("#msgCount").html(d);
			document.getElementById("phones").style.marginTop = "-10px"
		}
	}
}
function checkform() {
	var b = $("#loginName").val();
	var a = $("#loginPwd").val();
	if ($("#loginName").val() == "") {
		document.getElementById("popB-bki8").style.display = "-webkit-box";
		$("#tttd").html("帐号不能为空");
		setTimeout("fresh()", 2000);
		return false
	}
	if ($("#loginPwd").val() == "") {
		document.getElementById("popB-bki8").style.display = "-webkit-box";
		$("#tttd").html("密码不能为空");
		setTimeout("fresh()", 2000);
		return false
	}
	$("input[id='bbb']").attr("disabled", true);
	$
			.ajax({
				url : urls.user_userlogin + "ttt=" + Math.random(),
				type : "post",
				cache : false,
				data : {
					loginName : b,
					loginPwd : a,
					openid : openid
				},
				success : function(f) {
					if (f.code == 200) {
						$("#login_btn_div").hide();
						$("#login_result2").html(
								"<font size='4' color='green'>登陆成功</font>");
						var g = urls.firstindex1 + "openid=" + openid + "&t="
								+ Math.random();
						var k = f.softVersion;
						if (k.indexOf("GT17-G-I") == 0
								|| k.indexOf("M1-G-I") == 0) {
							g = "/help/GT17Index.jsp?openid=" + openid + "&t="
									+ Math.random()
						} else {
							g = urls.firstindex1 + "openid=" + openid + "&t="
									+ Math.random()
						}
						setTimeout("window.location.href= '" + g + "'", 100)
					} else {
						if (f.code == 300) {
							$("#loads").css("display", "none");
							$("#popB-bki8").css("display", "-webkit-box");
							$("#tttd").html("此平台不支持登录");
							setTimeout("fresh()", 2000);
							$("input[id='botton']").attr("disabled", false)
						} else {
							if (f.code == 400) {
								$("#login_btn_div").hide();
								var j = f.terminalId;
								var d = f.softVersion;
								var h = f.userId;
								var g = "/help/firstTelSet.jsp?openid="
										+ openid + "&ttt=" + Math.random()
										+ "&terminalId=" + j
										+ "&pageType=1&userId=" + h + "&soft="
										+ d;
								setTimeout("window.location.href= '" + g + "'",
										100)
							} else {
								if (f.code == 900) {
									$("#login_btn_div").hide();
									var j = f.terminalId;
									var d = f.softVersion;
									var h = f.userId;
									var g = "http://www.abdjy.com/app-i9.html";
									setTimeout("window.location.href= '" + g
											+ "'", 100)
								} else {
									alert(f.desc);
									$("input[id='bbb']")
											.attr("disabled", false)
								}
							}
						}
					}
				}
			});
	return false
}
function reford() {
	WeixinJSBridge.call("closeWindow")
}
function resetPwd() {
	window.location = urls.findpwd
}
function modifyPwd() {
	var a = getUserInfo();
	var b = a[0].loginName;
	window.location = urls.user_modifypwd + "openid=" + openid + "&loginName="
			+ b + "&t=" + Math.random()
}
function replyC88() {
	$.ajax({
		type : "POST",
		url : urls.help_replyContentC88,
		data : {
			openid : openid,
			terminalId : terminals,
			softVersion : softver
		},
		success : function(a) {
			if (a.code == 200) {
			} else {
				return
			}
		}
	})
}
function replyRemote() {
	$.ajax({
		type : "POST",
		url : urls.replyContentRemote,
		data : {
			openid : openid,
			terminalId : terminals,
			softVersion : softver
		},
		success : function(a) {
			if (a.code == 200) {
			} else {
				return
			}
		}
	})
}
function reply() {
	$.ajax({
		type : "POST",
		url : urls.replyContent,
		data : {
			openid : openid
		},
		success : function(a) {
			if (a.code == 200) {
			} else {
				return
			}
		}
	})
}
function toUrl(b) {
	if (b == 0) {
		var d = "";
		var a = getUserInfo();
		if (a.length > 0) {
			d = a[0].loginName
		}
		window.open(urls.help_test + "openid=" + openid + "&ttt="
				+ Math.random() + "&loginName=" + d, "", "")
	} else {
		if (b == 1) {
			if (softver.indexOf("I8-B") == 0) {
				if (softver.indexOf("I8-B-M-01") == 0) {
					window.open(urls.terminal_queryHistoryTrackMapabcI8G + "c="
							+ c + "&time=" + timer + "&terminalId=" + terminals
							+ "&ttt=" + Math.random() + "&iconurl=" + iconurl
							+ "&sv=" + softver + "&nikeName=" + nikeName, "",
							"")
				} else {
					document.getElementById("loads").style.display = "";
					if (reetAll.length > 0) {
						wx.ready(function() {
							openMap()
						})
					}
				}
			} else {
				if (softver.indexOf("I8-G") == 0
						|| softver.indexOf(isI9Ver) == 0) {
					window.open(urls.terminal_queryHistoryTrackMapabcI8G + "c="
							+ c + "&time=" + timer + "&terminalId=" + terminals
							+ "&ttt=" + Math.random() + "&iconurl=" + iconurl
							+ "&sv=" + softver + "&nikeName=" + nikeName, "",
							"")
				} else {
					window.open(urls.terminal_queryHistoryTrackMapabc + "c="
							+ c + "&time=" + timer + "&terminalId=" + terminals
							+ "&ttt=" + Math.random() + "&iconurl=" + iconurl
							+ "&sv=" + softver, "", "")
				}
			}
			addClick(69, "")
		} else {
			if (b == 2) {
				window.open(urls.fencing_trackRail + "c=" + c + "&time="
						+ timer + "&terminalId=" + terminals + "&ttt="
						+ Math.random(), "", "");
				addClick(71, "")
			} else {
				if (b == 3) {
					if (softver.indexOf("I8-") == 0
							|| softver.indexOf(isI9Ver) == 0) {
						window.open(urls.family_basesetting_i8index + "c=" + c
								+ "&time=" + timer + "&terminalId=" + terminals
								+ "&ttt=" + Math.random() + "&userId=" + userId
								+ "&sv=" + softver + "&iconurl=" + iconurl, "",
								"")
					} else {
						window.open(urls.family_basesetting_index + "c=" + c
								+ "&time=" + timer + "&terminalId=" + terminals
								+ "&ttt=" + Math.random() + "&userId=" + userId
								+ "&sv=" + softver, "", "")
					}
					addClick(72, "")
				} else {
					if (b == 4) {
						window.open(urls.family_school_index1 + "c=" + c
								+ "&time=" + timer + "&terminalId=" + terminals
								+ "&ttt=" + Math.random(), "", "");
						addClick(73, "")
					} else {
						if (b == 5) {
							window.open(urls.family_systemsetting_index + "c="
									+ c + "&time=" + timer + "&terminalId="
									+ terminals + "&ttt=" + Math.random(), "",
									"");
							addClick(74, "")
						} else {
							if (b == 6) {
								if (softver.indexOf("I8-") == 0) {
									window.open(urls.family_sallite_sySeti8
											+ "c=" + c + "&time=" + timer
											+ "&protocolVersion="
											+ protocolVersion + "&terminalId="
											+ terminals + "&ttt="
											+ Math.random(), "", "")
								} else {
									if (softver.indexOf("S1-G-I-01") == 0
											|| softver.indexOf("Q10-G-I-01") == 0) {
										window
												.open(
														urls.family_school_appsysSet
																+ "c="
																+ c
																+ "&time="
																+ timer
																+ "&terminalId="
																+ terminals
																+ "&ttt="
																+ Math.random(),
														"", "")
									} else {
										if (softver.indexOf("I9-") == 0) {
											window
													.open(
															"/family/sallite/sySeti8App.jsp?c="
																	+ c
																	+ "&time="
																	+ timer
																	+ "&protocolVersion="
																	+ protocolVersion
																	+ "&terminalId="
																	+ terminals
																	+ "&ttt="
																	+ Math
																			.random()
																	+ "&language=1",
															"", "")
										} else {
											window.open(
													urls.family_sallite_sySet1
															+ "c=" + c
															+ "&time=" + timer
															+ "&terminalId="
															+ terminals
															+ "&ttt="
															+ Math.random()
															+ "&saleId="
															+ saleId, "", "")
										}
									}
								}
								addClick(75, "")
							} else {
								if (b == 7) {
									if (terminalId == "210625"
											|| terminalId == "233682"
											|| terminalId == "19704"
											|| terminalId == "232920"
											|| terminalId == "19804"
											|| terminalId == "19904"
											|| terminalId == "20104"
											|| terminalId == "190986"
											|| terminalId == "192227"
											|| terminalId == "386780"
											|| terminalId == "388007") {
										document.getElementById("popB-bki8").style.display = "-webkit-box";
										$("#tttd").html("体验账号暂不支持此功能");
										setTimeout("fresh()", 2000);
										return
									} else {
										window.open(urls.family_remote_index
												+ "c=" + c + "&time=" + timer
												+ "&terminalId=" + terminals
												+ "&ttt=" + Math.random(), "",
												"");
										addClick(76, "")
									}
								} else {
									if (b == 8) {
										if (terminalId == "210625"
												|| terminalId == "233682") {
											document
													.getElementById("popB-bki8").style.display = "-webkit-box";
											$("#tttd").html("体验账号暂不支持此功能");
											setTimeout("fresh()", 2000);
											return
										} else {
											replyC88();
											setTimeout(reford, "2000");
											addClick(70, "")
										}
									} else {
										if (b == 9) {
											setCookie("isclick", 2);
											if (softver.indexOf("I8-") == 0
													|| softver.indexOf(isI9Ver) == 0) {
												window
														.open(
																urls.help_terminalInfoI8
																		+ "terminalId="
																		+ terminals
																		+ "&ttt="
																		+ Math
																				.random(),
																"", "")
											} else {
												window
														.open(
																urls.help_terminalInfo
																		+ "terminalId="
																		+ terminals
																		+ "&ttt="
																		+ Math
																				.random(),
																"", "")
											}
										} else {
											if (b == 10) {
												window.open(urls.monitor_index1
														+ "c=" + c + "&time="
														+ timer
														+ "&terminalId="
														+ terminals + "&ttt="
														+ Math.random()
														+ "&realTimeMonitor="
														+ realTimeMonitor, "",
														"")
											} else {
												if (b == 11) {
													if (softver
															.indexOf("S1-G-I-01") == 0
															|| softver
																	.indexOf("Q10-G-I-01") == 0) {
														window
																.open(
																		urls.appInfos_authorizationmessage
																				+ "c="
																				+ c
																				+ "&time="
																				+ timer
																				+ "&terminalId="
																				+ terminals
																				+ "&ttt="
																				+ Math
																						.random()
																				+ "&openid="
																				+ openid,
																		"", "")
													} else {
														window
																.open(
																		urls.family_message_index
																				+ "c="
																				+ c
																				+ "&time="
																				+ timer
																				+ "&terminalId="
																				+ terminals
																				+ "&ttt="
																				+ Math
																						.random(),
																		"", "")
													}
													updateCount()
												} else {
													if (b == 12) {
														window
																.open(
																		urls.user_managerTerminal
																				+ "c="
																				+ c
																				+ "&time="
																				+ timer
																				+ "&terminalId="
																				+ terminals
																				+ "&ttt="
																				+ Math
																						.random()
																				+ "&userId="
																				+ userId
																				+ "&openid="
																				+ openid,
																		"", "")
													} else {
														if (b == 13) {
															if (softver
																	.indexOf("I8-") == 0) {
																window
																		.open(
																				urls.family_school_indexi8Mode
																						+ "c="
																						+ c
																						+ "&time="
																						+ timer
																						+ "&terminalId="
																						+ terminals
																						+ "&ttt="
																						+ Math
																								.random()
																						+ "&userId="
																						+ userId
																						+ "&openid="
																						+ openid
																						+ "&sv="
																						+ softver,
																				"",
																				"")
															} else {
																if (softver
																		.indexOf("I9-") == 0) {
																	window
																			.open(
																					"/family/school/indexi9ModeApp.jsp?c="
																							+ c
																							+ "&time="
																							+ timer
																							+ "&protocolVersion="
																							+ protocolVersion
																							+ "&terminalId="
																							+ terminals
																							+ "&ttt="
																							+ Math
																									.random()
																							+ "&language=1",
																					"",
																					"")
																}
															}
														} else {
															if (b == 14) {
																if (softver
																		.indexOf(isI9Ver) == 0) {
																	window
																			.open(
																					urls.wxI9Qunliao
																							+ "c="
																							+ c
																							+ "&time="
																							+ timer
																							+ "&terminalId="
																							+ terminals
																							+ "&ttt="
																							+ Math
																									.random()
																							+ "&sv="
																							+ softver
																							+ "&iconurl="
																							+ iconurl
																							+ "&openid="
																							+ opneid,
																					"",
																					"")
																} else {
																	window
																			.open(
																					urls.help_i8Messageindex
																							+ "c="
																							+ c
																							+ "&time="
																							+ timer
																							+ "&terminalId="
																							+ terminals
																							+ "&ttt="
																							+ Math
																									.random()
																							+ "&userId="
																							+ userId
																							+ "&openid="
																							+ openid
																							+ "&iconurl="
																							+ iconurl
																							+ "&sv="
																							+ softver,
																					"",
																					"")
																}
															} else {
																if (b == 15) {
																	window
																			.open(
																					urls.family_biaopan_index
																							+ "c="
																							+ c
																							+ "&time="
																							+ timer
																							+ "&terminalId="
																							+ terminals
																							+ "&ttt="
																							+ Math
																									.random()
																							+ "&userId="
																							+ userId
																							+ "&openid="
																							+ openid
																							+ "&sv="
																							+ softver,
																					"",
																					"")
																} else {
																	if (b == 16) {
																		window
																				.open(
																						urls.appInfos_appset
																								+ "c="
																								+ c
																								+ "&time="
																								+ timer
																								+ "&terminalId="
																								+ terminals
																								+ "&ttt="
																								+ Math
																										.random()
																								+ "&userId="
																								+ userId
																								+ "&openid="
																								+ openid,
																						"",
																						"")
																	} else {
																		if (b == 17) {
																			window
																					.open(
																							urls.appInfos_appinfo
																									+ "c="
																									+ c
																									+ "&time="
																									+ timer
																									+ "&terminalId="
																									+ terminals
																									+ "&ttt="
																									+ Math
																											.random()
																									+ "&userId="
																									+ userId
																									+ "&openid="
																									+ openid,
																							"",
																							"")
																		} else {
																			if (b == 18) {
																				window
																						.open(
																								urls.appInfos_downloadApp
																										+ "c="
																										+ c
																										+ "&time="
																										+ timer
																										+ "&terminalId="
																										+ terminals
																										+ "&ttt="
																										+ Math
																												.random(),
																								"",
																								"")
																			} else {
																				if (b == 19) {
																					getHuafei()
																				} else {
																					if (b == 20) {
																						window
																								.open(
																										"/family/course/coursetime.jsp?c="
																												+ c
																												+ "&time="
																												+ timer
																												+ "&protocolVersion="
																												+ protocolVersion
																												+ "&terminalId="
																												+ terminals
																												+ "&ttt="
																												+ Math
																														.random()
																												+ "&language=1",
																										"",
																										"")
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function reford() {
	WeixinJSBridge.call("closeWindow")
}
function editInfo() {
	comF.moveTran(".tTrail-lay");
	initChildInfo();
	document.getElementById("i8ids").style.display = "none"
}
var publicName = "";
function initChildInfo() {
	if (softver.indexOf("I8") == 0 || softver.indexOf(isI9Ver) == 0) {
		if (softver.indexOf("I8-G-Q-01") == 0) {
			document.getElementById("i8Qitem").style.display = "-webkit-box";
			document.getElementById("item4").style.borderTop = "1px solid #D8D8D8";
			document.getElementById("item3").style.display = "none";
			document.getElementById("item2").style.display = "none";
			document.getElementById("item1").style.display = "none"
		} else {
			if (softver.indexOf(isI9Ver) == 0) {
				document.getElementById("i8Qitem").style.display = "-webkit-box";
				document.getElementById("item4").style.borderTop = "1px solid #D8D8D8";
				document.getElementById("item1").style.display = "none";
				$("#i8Qitem").html('摇一摇加好友和"打电话"功能会呼叫此号码，请正确输入');
				document.getElementById("item5").style.display = "none";
				document.getElementById("item4").style.display = "none";
				document.getElementById("i8Qitem").style.borderBottom = "1px solid #D8D8D8"
			}
		}
		document.getElementById("shake").style.display = "-webkit-box";
		findUserTerList(openid)
	} else {
		document.getElementById("item5").style.display = "none";
		document.getElementById("item4").style.display = "none";
		document.getElementById("item3").style.display = "none";
		document.getElementById("item2").style.display = "none";
		document.getElementById("item1").style.display = "none"
	}
	var b = getUserInfo();
	var h;
	if (b.length > 0) {
		h = b[0];
		nikeName = h.nickName;
		$("#nike").val(nikeName);
		publicName = h.publicName;
		if (publicName != "null") {
			$("#publicName").val(publicName)
		}
		var d = h.icon;
		if (d == "") {
			d = "baby_boy.png"
		}
		var a = document.getElementById("icon");
		a.src = "../../icon/" + d;
		document.getElementById("iconInfo").src = "../../icon/" + d;
		$("#NikeName").val(nikeName);
		$("#nikeinfo").html(nikeName);
		$("#mobile").val(h.mobile);
		var g = h.mobile;
		if (g == "") {
			document.getElementById("tel1").href = "tel:"
		} else {
			document.getElementById("tel1").href = "tel:" + g
		}
		$("#terminalId").val(h.terminalId);
		$("#iconInfos").val(d);
		$("#loginName1").val(h.loginName);
		$("#loginPwd1").val(h.loginPwd);
		var f = h.gender;
		if (f == "1") {
			$("#gender1").next().addClass("target")
		} else {
			if (f == "2") {
				$("#gender2").next().addClass("target")
			}
		}
	}
}
function getImgInfo(a) {
	var d = $("#img".concat(a)).attr("src").substring(11);
	var b = $("#img".concat(a)).attr("src");
	document.getElementById("iconInfo").src = b;
	document.getElementById("iconInfos").value = d
}
$(".go-school a").on("click", function(a) {
	Evt.stopEvt(a);
	$(this).siblings("a").removeClass("target");
	$(this).addClass("target")
});
function checkForm1() {
	var loginName = "";
	var loginPwd = "";
	var params = new Object();
	var userName = document.getElementById("NikeName").value;
	if (userName == "") {
		document.getElementById("popB-bki8").style.display = "-webkit-box";
		$("#tttd").html(js_nickname_is_empty);
		setTimeout("fresh()", 2000);
		return
	} else {
		if (userName.length > 5) {
			document.getElementById("popB-bki8").style.display = "-webkit-box";
			$("#tttd").html("昵称最多只可以输入5个字符");
			setTimeout("fresh()", 2000);
			return
		}
	}
	var mobile = document.getElementById("mobile").value;
	var mo = mobile.match("1[34578]\\d{9}");
	if (mobile != "") {
		if (mo == null) {
			alert(js_mobile_is_not_valid);
			return
		} else {
			if (mobile.length != 11) {
				alert(js_mobile_is_not_valid);
				return
			}
		}
		params.mobile = mobile
	} else {
		document.getElementById("popB-bki8").style.display = "-webkit-box";
		$("#tttd").html("电话号码不能为空");
		setTimeout("fresh()", 2000);
		return
	}
	var gender = 1;
	if ($("#gender1").next().hasClass("target")) {
		gender = 1
	}
	if ($("#gender2").next().hasClass("target")) {
		gender = 2
	}
	var publicName = document.getElementById("publicName").value;
	var childNike = document.getElementById("childNike").value;
	if (softver.indexOf("I8") == 0 || softver.indexOf(isI9Ver) == 0) {
		if (softver.indexOf("I8-G-Q") == 0) {
			if (childNike == "") {
				document.getElementById("popB-bk").style.display = "-webkit-box";
				$("#tttd").html("家长孩子称呼不能为空");
				setTimeout("fresh()", 2000);
				return
			} else {
				if (childNike.length > 5) {
					document.getElementById("popB-bk").style.display = "-webkit-box";
					$("#tttd").html("家长孩子称呼最多只可以输入5个字符");
					setTimeout("fresh()", 2000);
					return
				}
			}
		} else {
			if (softver.indexOf(isI9Ver) == 0) {
				if (publicName == "") {
					document.getElementById("popB-bk").style.display = "-webkit-box";
					$("#tttd").html("孩子学校称呼不能为空");
					setTimeout("fresh()", 2000);
					return
				} else {
					if (publicName.length > 12) {
						document.getElementById("popB-bk").style.display = "-webkit-box";
						$("#tttd").html("学校称呼最多只可以输入12个字符");
						setTimeout("fresh()", 2000);
						return
					}
				}
			} else {
				if (publicName == "") {
					document.getElementById("popB-bki8").style.display = "-webkit-box";
					$("#tttd").html("孩子学校称呼不能为空");
					setTimeout("fresh()", 2000);
					return
				} else {
					if (publicName.length > 12) {
						document.getElementById("popB-bki8").style.display = "-webkit-box";
						$("#tttd").html("学校称呼最多只可以输入12个字符");
						setTimeout("fresh()", 2000);
						return
					}
				}
				if (childNike == "") {
					document.getElementById("popB-bki8").style.display = "-webkit-box";
					$("#tttd").html("家长孩子称呼不能为空");
					setTimeout("fresh()", 2000);
					return
				} else {
					if (childNike.length > 5) {
						document.getElementById("popB-bki8").style.display = "-webkit-box";
						$("#tttd").html("家长孩子称呼最多只可以输入5个字符");
						setTimeout("fresh()", 2000);
						return
					}
				}
			}
		}
	}
	params.publicName = publicName;
	params.childNike = childNike;
	params.openid = openid;
	params.terminalId = terminalId;
	params.userName = userName;
	params.icon = document.getElementById("iconInfos").value;
	params.loginName = document.getElementById("loginName1").value;
	params.loginPwd = document.getElementById("loginPwd1").value;
	params.gender = gender;
	$
			.post(
					urls.user_doUpdateUserTerminal + "tt=" + Math.random(),
					params,
					function(data) {
						var ret = eval("(" + data + ")");
						if (ret.success) {
							document.getElementById("popB-bki8").style.display = "-webkit-box";
							$("#tttd").html("保存成功");
							if (softver.indexOf("I8-") == 0
									|| softver.indexOf(isI9Ver) == 0) {
								document.getElementById("i8ids").style.display = "-webkit-box"
							} else {
								document.getElementById("i8ids").style.display = "none"
							}
							setTimeout("fresh()", 2000);
							comF.backMove(".tTrail-lay");
							initChildInfo()
						} else {
							document.getElementById("popB-bki8").style.display = "-webkit-box";
							$("#tttd").html("保存失败！" + exception.get(ret.code));
							setTimeout("fresh()", 2000)
						}
					}, "text");
	return false
}
function fresh() {
	document.getElementById("popB-bki8").style.display = "none"
}
function getMsgInfo(msgCount) {
	var params = new Object();
	var ret = "";
	params.terminalId = terminalId;
	params.openid = openid;
	params.currCount = msgCount;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.family_message_getInfocount + "ttt=" + Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")")
		}
	});
	return ret
}
function updateCount() {
	var params = new Object();
	var ret = "";
	params.terminalId = terminalId;
	params.openid = openid;
	params.currCount = infocount;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.family_message_updateInfocount + "ttt=" + Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")")
		}
	});
	return ret
}
function getUnreadVoiceCount() {
	var ret = "";
	var uncount;
	var params = new Object();
	params.terminalId = terminalId;
	params.openid = openid;
	params.isRomete = "0";
	var durl = "";
	if (softver.indexOf(isI9Ver) == 0) {
		durl = "/wxi9jsp/unreadVoice.jsp?ttt=" + Math.random()
	} else {
		durl = urls.wxi8jsp_unreadVoice + "ttt=" + Math.random()
	}
	$.ajax({
		async : true,
		type : "POST",
		url : durl,
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")");
			if (ret.length > 0) {
				uncount = parseInt(ret[0].count, 10);
				if (uncount > 0) {
					document.getElementById("uncount").style.display = "block";
					$("#uncount").html(uncount)
				}
			}
		}
	});
	return ret
}
$("#hu").live("touchstart", function() {
	$(this).css({
		background : "#fff",
		opacity : "0.6"
	})
}).live("touchmove", function() {
	$(this).css({
		background : "#fff",
		opacity : "1"
	})
}).live("touchend", function() {
	$(this).css({
		background : "#fff",
		opacity : "1"
	});
	getHudong()
});
function getHudong(a) {
	toUrl(14)
}
$("#lu").live("touchstart", function() {
	$(this).css({
		background : "#fff",
		opacity : "0.6"
	})
}).live("touchmove", function() {
	$(this).css({
		background : "#fff",
		opacity : "1"
	})
}).live("touchend", function() {
	$(this).css({
		background : "#fff",
		opacity : "1"
	});
	getYulu()
});
var start = 0;
var end = 0;
var tt;
var canRecord = 1;
function getYulu() {
	if (canRecord == 1) {
		recordi8()
	} else {
		$("#popB-bk2").css("display", "-webkit-box");
		$("#ttt").html("正在进行监听录音中。。。")
	}
}
$("#biao").live("touchstart", function() {
	$(this).css({
		background : "#fff",
		opacity : "0.6"
	})
}).live("touchmove", function() {
	$(this).css({
		background : "#fff",
		opacity : "1"
	})
}).live("touchend", function() {
	$(this).css({
		background : "#fff",
		opacity : "1"
	});
	getBiaopan()
});
function getBiaopan() {
	toUrl(15)
}
$("#info").live("touchstart", function() {
	$(this).css({
		background : "#fff",
		opacity : "0.6"
	})
}).live("touchmove", function() {
	$(this).css({
		background : "#fff",
		opacity : "1"
	})
}).live("touchend", function() {
	$(this).css({
		background : "#fff",
		opacity : "1"
	});
	getWo()
});
function getWo() {
	toUrl(9)
}
function changeImgs(a) {
	var b = a.getAttribute("src");
	if (b.lastIndexOf("1") != -1) {
		a.setAttribute("src", b)
	} else {
		a.setAttribute("src", b.substring(0, b.lastIndexOf(".")) + "1.png")
	}
}
function recordi8() {
	canRecord = 0;
	var _onD = 24 * 60 * 60 * 1000;
	var _ctDate = new Date(), secT = _ctDate.getTime();
	var tt1 = secT - 0 * (_onD);
	var dat1 = new Date(tt1);
	_year1 = dat1.getFullYear(), _m1 = dat1.getMonth() + 1, _date1 = dat1
			.getDate(), _hours = dat1.getHours(), _minutes = dat1.getMinutes(),
			_second = dat1.getSeconds();
	_date1 = _date1 < 10 ? "0" + _date1 : _date1;
	_m1 = _m1 < 10 ? "0" + _m1 : _m1;
	_minutes = _minutes < 10 ? "0" + _minutes : _minutes;
	_second = _second < 10 ? "0" + _second : _second;
	var ddd1 = _year1 + "-" + _m1 + "-" + _date1 + " " + _hours + ":"
			+ _minutes + ":" + _second;
	var params = new Object();
	params.terminalId = terminalId;
	var ret;
	$.post(urls.remote_doRecord, params, function(data) {
		ret = eval("(" + data + ")");
		if (ret.success) {
			$("#popB-bk2").css("display", "-webkit-box");
			$("#ttt").html("监听指令已发出，正在进行录音。。。");
			fresh2(ddd1)
		} else {
			canRecord = 1;
			$("#popB-bki8").css("display", "-webkit-box");
			$("#tttd").html("监听指令发送失败！" + exception.get(ret.code));
			setTimeout("fresh()", 2000)
		}
	}, "text");
	return false
}
var tt;
var ct = 0;
function endRecord() {
	comF.popHide("#popB-bk2")
}
function fresh2(a) {
	ct = ct + 1;
	tt = setTimeout("fresh2()", 1000);
	if (ct >= 20) {
		$("#ttt").html("语音结束");
		clearTimeout(tt);
		ct = 0;
		canRecord = 1;
		$("#popB-bk2").css("display", "none")
	}
}
function getHuafei() {
	var ret = "";
	var params = new Object();
	params.terminalId = terminalId;
	$.post(urls.remote_doSearchHuafei, params, function(data) {
		ret = eval("(" + data + ")");
		if (ret.success) {
			$("#popB-bki8").css("display", "-webkit-box");
			$("#tttd").html("话费查询指令已发出");
			setTimeout("fresh()", 2000)
		} else {
			$("#popB-bki8").css("display", "-webkit-box");
			$("#tttd").html("话费查询指令发送失败！" + exception.get(ret.code));
			setTimeout("fresh()", 2000)
		}
	}, "text")
}
function getRemoteCount(tttime) {
	var ret = "";
	var uncount;
	var params = new Object();
	params.terminalId = terminalId;
	params.openid = openid;
	params.time = tttime;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.wxi8jsp_remoteCount + "ttt=" + Math.random(),
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")");
			if (ret.length > 0) {
				count = parseInt(ret[0].count, 10);
				if (count > 0) {
					$("#ttt").html("语音结束");
					endRecord()
				}
			}
		}
	});
	return ret
}
function xiaoxiCenterQ10() {
	document.getElementById("xiao").style.display = "block";
	var b = comF.getRequestCount();
	msgCount = b[0].actCount;
	var a = getMsgInfo(msgCount);
	if (a.length > 0) {
		var d = a[0].msgCount;
		if (d > 0) {
			document.getElementById("msgCount").style.display = "block";
			$("#msgCount").html(d);
			document.getElementById("phones").style.marginTop = "-10px"
		}
	}
}
var rret;
var timestamp;
var nonceStr;
var signature;
function getwxjs() {
	var ret = "";
	var params = new Object();
	var targetUrl = window.location.href.split("#")[0];
	params.url = targetUrl;
	$.ajax({
		async : false,
		type : "POST",
		url : urls.wxjs_getwxjsParam + "ttt=" + Math.random()
				+ "&secret=osgames2",
		data : params,
		success : function(data) {
			ret = eval("(" + data + ")");
			if (ret.length > 0) {
				timestamp = ret[0].timestamp;
				nonceStr = ret[0].nonceStr;
				signature = ret[0].signature;
				config()
			}
		}
	});
	return ret
}
function config() {
	wx.config({
		debug : false,
		appId : serverParam.appId,
		timestamp : timestamp,
		nonceStr : nonceStr,
		signature : signature,
		jsApiList : [ "openLocation", "getLocation", "onMenuShareWeibo" ]
	})
}
function openMap() {
	wx.openLocation({
		latitude : lat,
		longitude : lng,
		name : "时间：" + time,
		address : "点击右侧图标，安装腾讯地图到本地，零流量加速显示",
		scale : 16,
		success : function() {
			document.getElementById("loads").style.display = "none"
		},
		fail : function(a) {
			document.getElementById("popB-bki8").style.display = "-webkit-box";
			$("#tttd").html("地图打开失败，请稍后重试");
			setTimeout("fresh()", 2000)
		}
	})
}
function findUserTerList(openids) {
	var ret;
	var params = new Object();
	params.terminalId = terminalId;
	$
			.ajax({
				async : false,
				type : "POST",
				url : urls.help_findUserListByTerminalId + "ttt="
						+ Math.random(),
				data : params,
				success : function(data) {
					var sb = "";
					ret = eval("(" + data + ")");
					if (ret.length > 0) {
						for (i = 0; i < ret.length; i++) {
							var img = ret[i].imgUrl;
							var weinike = ret[i].weixinNike;
							var openid = ret[i].openid;
							var nike = ret[i].nike;
							var telP = ret[i].phoneNumber;
							if (openid == openids) {
								$("#childNike").val(nike)
							}
							sb += '<p class="h-in-put"> <img src="'
									+ img
									+ '" style="padding-left:10px;padding-right:10px;">';
							sb += '<label>微信昵称:</label><input style="color:gray;"  class="fam-name" name="weinike"  maxlength="16" type="text" value="'
									+ weinike + '" readonly="readonly">';
							sb += '<label>孩子称呼:</label><input style="color:gray;margin-right: 5px;"  class="in-put"  name="childCheng" maxlength="19"  value="'
									+ nike + '" readonly="readonly"></p>'
						}
					}
					$("#weilist").html(sb)
				}
			})
}
function modifyInfo(b) {
	var a = "/help/firstTelSet.jsp?openid=" + openid + "&ttt=" + Math.random()
			+ "&terminalId=" + terminalId + "&pageType=3&userId=" + userId;
	setTimeout("window.location.href= '" + a + "'", 100)
}
function goba() {
	if (softver.indexOf("I8-") == 0 || softver.indexOf(isI9Ver) == 0) {
		document.getElementById("i8ids").style.display = "-webkit-box"
	}
	comF.backMove(".tTrail-lay")
}
function telfunc(a) {
	if (a == "tel:") {
		$("#popB-bki8").css("display", "-webkit-box");
		$("#tttd").html("孩子手机号码还没有设置，请点击孩子头像，输入孩子手机号码");
		setTimeout("fresh()", 2000)
	}
}
initParam();
comF.mgInit();
$(".tTrail-lay").on("focus", ".in-put", function(d) {
	d.stopPropagation();
	d.preventDefault();
	$(".per-info").stop();
	var f = $(d.target);
	var a = parseInt($(".per-info").css("marginTop"));
	var b = f.offset().top - 100 - a;
	$(".per-info").animate({
		marginTop : -b + "px"
	}, 400)
});
$(".tTrail-lay").on("blur", ".in-put", function(a) {
	$(".per-info").stop();
	$(".per-info").animate({
		marginTop : 0
	}, 400)
});
function addClick(d, b) {
	var a = new Date();
	$.post("http://www.abdjy.com/tongji?service=click&d=" + a.getTime(), {
		pageid : d,
		pagename : b
	}, function(f) {
	})
};