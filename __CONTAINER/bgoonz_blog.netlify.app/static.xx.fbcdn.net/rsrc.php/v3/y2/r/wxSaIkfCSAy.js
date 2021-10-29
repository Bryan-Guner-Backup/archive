if (self.CavalryLogger) {
    CavalryLogger.start_js(["CxmOBf2"]);
}

"use strict";
(function() {
    var a = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    if (typeof a.AbortController !== "undefined") return;
    var b = function() {
            function a() {
                this.__listeners = new Map()
            }
            a.prototype = Object.create(Object.prototype);
            a.prototype.addEventListener = function(a, b, c) {
                if (arguments.length < 2) throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " + arguments.length + " present.");
                var d = this.__listeners,
                    e = a.toString();
                d.has(e) || d.set(e, new Map());
                var f = d.get(e);
                f.has(b) || f.set(b, c)
            };
            a.prototype.removeEventListener = function(a, b, c) {
                if (arguments.length < 2) throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " + arguments.length + " present.");
                var d = this.__listeners,
                    e = a.toString();
                if (d.has(e)) {
                    var f = d.get(e);
                    f.has(b) && f["delete"](b)
                }
            };
            a.prototype.dispatchEvent = function(a) {
                if (!(a instanceof Event)) throw new TypeError("Failed to execute 'dispatchEvent' on 'CustomEventTarget': parameter 1 is not of type 'Event'.");
                var b = a.type,
                    c = this.__listeners;
                c = c.get(b);
                if (c)
                    for (var b = c.entries(), d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var f;
                        if (d) {
                            if (e >= b.length) break;
                            f = b[e++]
                        } else {
                            e = b.next();
                            if (e.done) break;
                            f = e.value
                        }
                        f = f;
                        var g = f[0];
                        f = f[1];
                        try {
                            typeof g === "function" ? g.call(this, a) : g && typeof g.handleEvent === "function" && g.handleEvent(a)
                        } catch (a) {
                            setTimeout(function() {
                                throw a
                            })
                        }
                        f && f.once && c["delete"](g)
                    }
                return !0
            };
            return a
        }(),
        c = {};
    a.AbortSignal = function() {
        function a(a) {
            if (a !== c) throw new TypeError("Illegal constructor.");
            b.call(this);
            this._aborted = !1
        }
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a;
        Object.defineProperty(a.prototype, "onabort", {
            get: function() {
                return this._onabort
            },
            set: function(a) {
                var b = this._onabort;
                b && this.removeEventListener("abort", b);
                this._onabort = a;
                this.addEventListener("abort", a)
            }
        });
        Object.defineProperty(a.prototype, "aborted", {
            get: function() {
                return this._aborted
            }
        });
        return a
    }();
    a.AbortController = function() {
        function a() {
            this._signal = new AbortSignal(c)
        }
        a.prototype = Object.create(Object.prototype);
        Object.defineProperty(a.prototype, "signal", {
            get: function() {
                return this._signal
            }
        });
        a.prototype.abort = function() {
            var a = this.signal;
            a.aborted || (a._aborted = !0, a.dispatchEvent(new Event("abort")))
        };
        return a
    }()
})();



"use strict";
(function() {
    if (!Array.prototype.flat) {
        var a = function b(a) {
            return a < 1 ? Array.prototype.slice.call(this) : Array.prototype.reduce.call(this, function(c, d) {
                Array.isArray(d) ? c.push.apply(c, b.call(d, a - 1)) : c.push(d);
                return c
            }, [])
        };
        Array.prototype.flat = function() {
            return a.call(this, isNaN(arguments[0]) ? 1 : Number(arguments[0]))
        }
    }
    if (!Array.prototype.flatMap) {
        var b = function(a, b) {
            var c = [];
            if (typeof b !== "function") throw new TypeError("Callback function must be callable.");
            for (var d = 0; d < a.length; d++) {
                var e = b.call(a, a[d], d, a);
                Array.isArray(e) ? c.push.apply(c, e) : c.push(e)
            }
            return c
        };
        Array.prototype.flatMap = function(a) {
            var c = arguments[1] || this;
            return b(c, a)
        }
    }
})();


(function() {
    "use strict";
    var a = Array.prototype.indexOf;
    Array.prototype.includes || (Array.prototype.includes = function(d) {
        "use strict";
        if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d)) return a.apply(this, arguments) !== -1;
        var e = Object(this),
            f = e.length ? b(e.length) : 0;
        if (f === 0) return !1;
        var g = arguments.length > 1 ? c(arguments[1]) : 0,
            h = g < 0 ? Math.max(f + g, 0) : g,
            i = Number.isNaN(d);
        while (h < f) {
            var j = e[h];
            if (j === d || i && Number.isNaN(j)) return !0;
            h++
        }
        return !1
    });

    function b(a) {
        return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER)
    }

    function c(a) {
        a = Number(a);
        return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a
    }

    function d(a) {
        return a >= 0 ? 1 : -1
    }
    if (!Array.prototype.values) {
        var e = typeof Symbol === "function" ? Symbol.iterator : "@@iterator",
            f = function() {
                function a(a) {
                    this.$1 = void 0;
                    this.$2 = 0;
                    if (a == null) throw new TypeError("Cannot convert undefined or null to object");
                    this.$1 = Object(a)
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null || this.$2 >= this.$1.length) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    var a = this.$1[this.$2];
                    this.$2++;
                    return {
                        value: a,
                        done: !1
                    }
                };
                b[e] = function() {
                    return this
                };
                return a
            }();
        Array.prototype.values = function() {
            return new f(this)
        }
    }
    Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] || (Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = Array.prototype.values)
})();
(function() {
    var a = {},
        b = function(a, b) {
            if (!a && !b) return null;
            var c = {};
            typeof a !== "undefined" && (c.type = a);
            typeof b !== "undefined" && (c.signature = b);
            return c
        },
        c = function(a, c) {
            return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                return /\?/.test(a) ? "?" + a.replace("?", "") : a
            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
        },
        d = function(a, b, c) {
            return a
        },
        e = function(a, b, d) {
            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
            if ("typechecks" in __transform_includes) {
                b = c(b ? b.name : void 0, d);
                b && __w(a, b)
            }
            return a
        },
        f = function(a, b, c) {
            return c.apply(a, b)
        },
        g = function(a, b, c, d) {
            d && d.params && __t.apply(a, d.params);
            c = c.apply(a, b);
            d && d.returns && __t([c, d.returns]);
            return c
        };
    g = function(b, c, d, e, f) {
        if (f) {
            f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
            e = f.callId;
            a[e] = (a[e] || 0) + 1
        }
        return d.apply(b, c)
    };
    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = g, __bodyWrapper.getCodeUsage = function() {
        return a
    }, __bodyWrapper.clearCodeUsage = function() {
        a = {}
    }) : "typechecks" in __transform_includes ? __bodyWrapper = f : __bodyWrapper = f)
})();
__t = function(a) {
    return a[0]
}, __w = function(a) {
    return a
};
self.__DEV__ = self.__DEV__ || 0, self.emptyFunction = function() {};



(function(a, b) {
    var c = "keys",
        d = "values",
        e = "entries",
        f = function() {
            var a = h(Array),
                b;
            a || (b = function() {
                "use strict";

                function a(a, b) {
                    this.$1 = a, this.$2 = b, this.$3 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                    if (f >= b) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    this.$3 = f + 1;
                    if (g === c) return {
                        value: f,
                        done: !1
                    };
                    else if (g === d) return {
                        value: a[f],
                        done: !1
                    };
                    else if (g === e) return {
                        value: [f, a[f]],
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: a ? function(a) {
                    return a.keys()
                } : function(a) {
                    return new b(a, c)
                },
                values: a ? function(a) {
                    return a.values()
                } : function(a) {
                    return new b(a, d)
                },
                entries: a ? function(a) {
                    return a.entries()
                } : function(a) {
                    return new b(a, e)
                }
            }
        }(),
        g = function() {
            var a = h(String),
                b;
            a || (b = function() {
                "use strict";

                function a(a) {
                    this.$1 = a, this.$2 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$2,
                        b = this.$1,
                        c = b.length;
                    if (a >= c) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    var d = b.charCodeAt(a);
                    if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                    else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
                    }
                    this.$2 = a + d.length;
                    return {
                        value: d,
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: function() {
                    throw TypeError("Strings default iterator doesn't implement keys.")
                },
                values: a ? function(a) {
                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                } : function(a) {
                    return new b(a)
                },
                entries: function() {
                    throw TypeError("Strings default iterator doesn't implement entries.")
                }
            }
        }();

    function h(a) {
        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
    }
    var i = function() {
            "use strict";

            function a(a, b) {
                this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0
            }
            var b = a.prototype;
            b.next = function() {
                var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                if (b >= a) {
                    this.$1 = void 0;
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                this.$4 = b + 1;
                if (f === c) return {
                    value: g,
                    done: !1
                };
                else if (f === d) return {
                    value: this.$1[g],
                    done: !1
                };
                else if (f === e) return {
                    value: [g, this.$1[g]],
                    done: !1
                }
            };
            b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                return this
            };
            return a
        }(),
        j = {
            keys: function(a) {
                return new i(a, c)
            },
            values: function(a) {
                return new i(a, d)
            },
            entries: function(a) {
                return new i(a, e)
            }
        };

    function k(a, b) {
        if (typeof a === "string") return g[b || d](a);
        else if (Array.isArray(a)) return f[b || d](a);
        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        else return j[b || e](a)
    }
    Object.assign(k, {
        KIND_KEYS: c,
        KIND_VALUES: d,
        KIND_ENTRIES: e,
        keys: function(a) {
            return k(a, c)
        },
        values: function(a) {
            return k(a, d)
        },
        entries: function(a) {
            return k(a, e)
        },
        generic: j.entries
    });
    a.FB_enumerate = k
})(typeof global === "undefined" ? this : global);





"use strict";
(function() {
    if (typeof Element === "undefined" || Element.prototype.scroll) return;

    function a(a, b) {
        b === void 0 && (b = !1);
        if (a.length === 0) return;
        var c = a[0],
            d = a[1];
        c = Number(c) || 0;
        d = Number(d) || 0;
        if (a.length === 1) {
            a = a[0];
            if (a == null) return;
            c = a.left;
            d = a.top;
            c !== void 0 && (c = Number(c) || 0);
            d !== void 0 && (d = Number(d) || 0)
        }
        c !== void 0 && (this.scrollLeft = (b ? this.scrollLeft : 0) + c);
        d !== void 0 && (this.scrollTop = (b ? this.scrollTop : 0) + d)
    }
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
        a.call(this, arguments)
    };
    Element.prototype.scrollBy = function() {
        a.call(this, arguments, !0)
    }
})();


typeof window !== "undefined" && window.JSON && JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]' && (JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function(d, e, f) {
        d = a.call(this, d, e, f);
        d && (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")), -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d
    }
}(JSON.stringify));


(function() {
    var a = Object.prototype.hasOwnProperty;
    Object.entries = function(b) {
        if (b == null) throw new TypeError("Object.entries called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push([d, b[d]]);
        return c
    };
    typeof Object.fromEntries !== "function" && (Object.fromEntries = function(a) {
        var b = {};
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            var f = e[0];
            e = e[1];
            b[f] = e
        }
        return b
    });
    Object.values = function(b) {
        if (b == null) throw new TypeError("Object.values called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push(b[d]);
        return c
    }
})();


(function(a) {
    a.__m = function(a, b) {
        a.__SMmeta = b;
        return a
    }
})(this);


String.prototype.contains || (String.prototype.contains = String.prototype.includes);
String.prototype.padStart || (String.prototype.padStart = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return b.slice(0, a) + String(this)
    }
}), String.prototype.padEnd || (String.prototype.padEnd = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a)
    }
});
String.prototype.trimLeft || (String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "")
});




(function(a) {
    var b = a.babelHelpers = {},
        c = Object.prototype.hasOwnProperty;
    typeof Symbol !== "undefined" && !(typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") && (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"));

    function d(a) {
        this.wrapped = a
    }

    function e(a) {
        var b, c;

        function e(a, d) {
            return new Promise(function(e, g) {
                e = {
                    key: a,
                    arg: d,
                    resolve: e,
                    reject: g,
                    next: null
                };
                c ? c = c.next = e : (b = c = e, f(a, d))
            })
        }

        function f(b, c) {
            try {
                var e = a[b](c);
                c = e.value;
                var h = c instanceof d;
                Promise.resolve(h ? c.wrapped : c).then(function(a) {
                    if (h) {
                        f(b === "return" ? "return" : "next", a);
                        return
                    }
                    g(e.done ? "return" : "normal", a)
                }, function(a) {
                    f("throw", a)
                })
            } catch (a) {
                g("throw", a)
            }
        }

        function g(a, d) {
            switch (a) {
                case "return":
                    b.resolve({
                        value: d,
                        done: !0
                    });
                    break;
                case "throw":
                    b.reject(d);
                    break;
                default:
                    b.resolve({
                        value: d,
                        done: !1
                    });
                    break
            }
            b = b.next;
            b ? f(b.key, b.arg) : c = null
        }
        this._invoke = e;
        typeof a["return"] !== "function" && (this["return"] = void 0)
    }
    typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") && (e.prototype[typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"] = function() {
        return this
    });
    e.prototype.next = function(a) {
        return this._invoke("next", a)
    };
    e.prototype["throw"] = function(a) {
        return this._invoke("throw", a)
    };
    e.prototype["return"] = function(a) {
        return this._invoke("return", a)
    };
    b.inheritsLoose = function(a, b) {
        Object.assign(a, b);
        a.prototype = Object.create(b && b.prototype);
        a.prototype.constructor = a;
        a.__superConstructor__ = b;
        return b
    };
    b.wrapNativeSuper = function(a) {
        var c = typeof Map === "function" ? new Map() : void 0;
        b.wrapNativeSuper = function(a) {
            if (a === null) return null;
            if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
            if (c !== void 0) {
                if (c.has(a)) return c.get(a);
                c.set(a, d)
            }
            b.inheritsLoose(d, a);

            function d() {
                a.apply(this, arguments)
            }
            return d
        };
        return b.wrapNativeSuper(a)
    };
    b.assertThisInitialized = function(a) {
        if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a
    };
    b._extends = Object.assign;
    b["extends"] = b._extends;
    b.construct = function(a, b) {
        return new(Function.prototype.bind.apply(a, [null].concat(b)))()
    };
    b.objectWithoutPropertiesLoose = function(a, b) {
        var d = {};
        for (var e in a) {
            if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
            d[e] = a[e]
        }
        return d
    };
    b.taggedTemplateLiteralLoose = function(a, b) {
        b || (b = a.slice(0));
        a.raw = b;
        return a
    };
    b.bind = Function.prototype.bind;
    b.wrapAsyncGenerator = function(a) {
        return function() {
            return new e(a.apply(this, arguments))
        }
    };
    b.awaitAsyncGenerator = function(a) {
        return new d(a)
    };
    b.asyncIterator = function(a) {
        var b;
        if (typeof Symbol !== "undefined") {
            if (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") {
                b = a[Symbol.asyncIterator];
                if (b != null) return b.call(a)
            }
            if (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") {
                b = a[Symbol.iterator];
                if (b != null) return b.call(a)
            }
        }
        throw new TypeError("Object is not async iterable")
    };
    b.asyncGeneratorDelegate = function(a, b) {
        var c = {},
            d = !1;

        function e(c, e) {
            d = !0;
            e = new Promise(function(b) {
                b(a[c](e))
            });
            return {
                done: !1,
                value: b(e)
            }
        }
        typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") && (c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
            return this
        });
        c.next = function(a) {
            if (d) {
                d = !1;
                return a
            }
            return e("next", a)
        };
        typeof a["throw"] === "function" && (c["throw"] = function(a) {
            if (d) {
                d = !1;
                throw a
            }
            return e("throw", a)
        });
        typeof a["return"] === "function" && (c["return"] = function(a) {
            if (d) {
                d = !1;
                return a
            }
            return e("return", a)
        });
        return c
    }
})(typeof global === "undefined" ? self : global);

(function(a) {
    var b = {},
        c = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"],
        d = ["global", "require", "importDefault", "importNamespace", "requireLazy", "module", "exports"],
        e = 1,
        f = 32,
        g = 64,
        h = {},
        i = Object.prototype.hasOwnProperty;

    function j(e, h) {
        if (!i.call(b, e)) {
            if (h) return null;
            throw new Error("Module " + e + " has not been defined")
        }
        h = b[e];
        if (h.resolved) return h;
        e = h.special;
        var j = h.factory.length,
            n = e & f ? d.concat(h.deps) : c.concat(h.deps),
            o = [],
            p;
        for (var q = 0; q < j; q++) {
            switch (n[q]) {
                case "module":
                    p = h;
                    break;
                case "exports":
                    p = h.exports;
                    break;
                case "global":
                    p = a;
                    break;
                case "require":
                    p = k;
                    break;
                case "requireDynamic":
                    p = null;
                    break;
                case "requireLazy":
                    p = null;
                    break;
                case "importDefault":
                    p = l;
                    break;
                case "importNamespace":
                    p = m;
                    break;
                default:
                    typeof n[q] === "string" && (p = k.call(null, n[q]))
            }
            o.push(p)
        }
        n = h.factory.apply(a, o);
        n && (h.exports = n);
        e & g ? h.exports != null && i.call(h.exports, "default") && (h.defaultExport = h.exports["default"]) : h.defaultExport = h.exports;
        h.resolved = !0;
        return h
    }

    function k(a, b) {
        a = j(a, b);
        if (a) return a.defaultExport !== h ? a.defaultExport : a.exports
    }

    function l(a) {
        a = j(a);
        if (a) return a.defaultExport !== h ? a.defaultExport : null
    }

    function m(a) {
        a = j(a);
        if (a) return a.exports
    }

    function n(a, c, d, f) {
        typeof d === "function" ? (b[a] = {
            factory: d,
            deps: c,
            defaultExport: h,
            exports: {},
            special: f || 0,
            resolved: !1
        }, f != null && f & e && k.call(null, a)) : b[a] = {
            defaultExport: d,
            exports: d,
            resolved: !0
        }
    }
    a.__d = n;
    a.require = k;
    a.importDefault = l;
    a.importNamespace = m;
    a.$RefreshReg$ = function() {};
    a.$RefreshSig$ = function() {
        return function(a) {
            return a
        }
    }
})(this);
(function(a) {
    var b = a.performance;
    if (b && b.setResourceTimingBufferSize) {
        var c = function(c) {
            b.setResourceTimingBufferSize(c && c.smaller_resource_timing_buffer ? 1e3 : 1e5), b.onresourcetimingbufferfull = function() {
                a.__isresourcetimingbufferfull = !0
            }, b.setResourceTimingBufferSize = function() {}
        };
        a.requireLazy ? a.requireLazy(["Env"], c) : c(a.Env)
    }
})(this);

__d("Promise", [], (function(a, b, c, d, e, f) {
    Promise.prototype.done = function(a, b) {
        var c = arguments.length ? this.then.apply(this, arguments) : this;
        c.then(null, function(a) {
            setTimeout(function() {
                throw a
            }, 0)
        })
    }, e.exports = Promise
}), null);
__d("regeneratorRuntime", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
        h = typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") || "@@iterator",
        i = e.exports;

    function j(a, b, c, d) {
        b = Object.create((b || q).prototype);
        d = new z(d || []);
        b._invoke = w(a, c, d);
        return b
    }
    i.wrap = j;

    function k(a, b, c) {
        try {
            return {
                type: "normal",
                arg: a.call(b, c)
            }
        } catch (a) {
            return {
                type: "throw",
                arg: a
            }
        }
    }
    var l = "suspendedStart",
        m = "suspendedYield",
        n = "executing",
        o = "completed",
        p = {};

    function q() {}

    function r() {}

    function s() {}
    var t = s.prototype = q.prototype;
    r.prototype = t.constructor = s;
    s.constructor = r;
    r.displayName = "GeneratorFunction";

    function a(a) {
        ["next", "throw", "return"].forEach(function(b) {
            a[b] = function(a) {
                return this._invoke(b, a)
            }
        })
    }
    i.isGeneratorFunction = function(a) {
        a = typeof a === "function" && a.constructor;
        return a ? a === r || (a.displayName || a.name) === "GeneratorFunction" : !1
    };
    i.mark = function(a) {
        Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : Object.assign(a, s);
        a.prototype = Object.create(t);
        return a
    };
    i.awrap = function(a) {
        return new u(a)
    };

    function u(a) {
        this.arg = a
    }

    function v(a) {
        function c(c, f) {
            var g = a[c](f);
            c = g.value;
            return c instanceof u ? b("Promise").resolve(c.arg).then(d, e) : b("Promise").resolve(c).then(function(a) {
                g.value = a;
                return g
            })
        }
        typeof process === "object" && process.domain && (c = process.domain.bind(c));
        var d = c.bind(a, "next"),
            e = c.bind(a, "throw");
        c.bind(a, "return");
        var f;

        function g(a, d) {
            var e = f ? f.then(function() {
                return c(a, d)
            }) : new(b("Promise"))(function(b) {
                b(c(a, d))
            });
            f = e["catch"](function(a) {});
            return e
        }
        this._invoke = g
    }
    a(v.prototype);
    i.async = function(a, b, c, d) {
        var e = new v(j(a, b, c, d));
        return i.isGeneratorFunction(b) ? e : e.next().then(function(a) {
            return a.done ? a.value : e.next()
        })
    };

    function w(a, b, c) {
        var d = l;
        return function(e, f) {
            if (d === n) throw new Error("Generator is already running");
            if (d === o) {
                if (e === "throw") throw f;
                return B()
            }
            while (!0) {
                var g = c.delegate;
                if (g) {
                    if (e === "return" || e === "throw" && g.iterator[e] === void 0) {
                        c.delegate = null;
                        var h = g.iterator["return"];
                        if (h) {
                            h = k(h, g.iterator, f);
                            if (h.type === "throw") {
                                e = "throw";
                                f = h.arg;
                                continue
                            }
                        }
                        if (e === "return") continue
                    }
                    h = k(g.iterator[e], g.iterator, f);
                    if (h.type === "throw") {
                        c.delegate = null;
                        e = "throw";
                        f = h.arg;
                        continue
                    }
                    e = "next";
                    f = void 0;
                    var i = h.arg;
                    if (i.done) c[g.resultName] = i.value, c.next = g.nextLoc;
                    else {
                        d = m;
                        return i
                    }
                    c.delegate = null
                }
                if (e === "next") d === m ? c.sent = f : c.sent = void 0;
                else if (e === "throw") {
                    if (d === l) {
                        d = o;
                        throw f
                    }
                    c.dispatchException(f) && (e = "next", f = void 0)
                } else e === "return" && c.abrupt("return", f);
                d = n;
                h = k(a, b, c);
                if (h.type === "normal") {
                    d = c.done ? o : m;
                    var i = {
                        value: h.arg,
                        done: c.done
                    };
                    if (h.arg === p) c.delegate && e === "next" && (f = void 0);
                    else return i
                } else h.type === "throw" && (d = o, e = "throw", f = h.arg)
            }
        }
    }
    a(t);
    t[h] = function() {
        return this
    };
    t.toString = function() {
        return "[object Generator]"
    };

    function x(a) {
        var b = {
            tryLoc: a[0]
        };
        1 in a && (b.catchLoc = a[1]);
        2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]);
        this.tryEntries.push(b)
    }

    function y(a) {
        var b = a.completion || {};
        b.type = "normal";
        delete b.arg;
        a.completion = b
    }

    function z(a) {
        this.tryEntries = [{
            tryLoc: "root"
        }], a.forEach(x, this), this.reset(!0)
    }
    i.keys = function(a) {
        var b = [];
        for (var c in a) b.push(c);
        b.reverse();
        return function c() {
            while (b.length) {
                var d = b.pop();
                if (d in a) {
                    c.value = d;
                    c.done = !1;
                    return c
                }
            }
            c.done = !0;
            return c
        }
    };

    function A(a) {
        if (a) {
            var b = a[h];
            if (b) return b.call(a);
            if (typeof a.next === "function") return a;
            if (!isNaN(a.length)) {
                var c = -1;
                b = function b() {
                    while (++c < a.length)
                        if (g.call(a, c)) {
                            b.value = a[c];
                            b.done = !1;
                            return b
                        }
                    b.value = void 0;
                    b.done = !0;
                    return b
                };
                return b.next = b
            }
        }
        return {
            next: B
        }
    }
    i.values = A;

    function B() {
        return {
            value: void 0,
            done: !0
        }
    }
    z.prototype = {
        constructor: z,
        reset: function(a) {
            this.prev = 0;
            this.next = 0;
            this.sent = void 0;
            this.done = !1;
            this.delegate = null;
            this.tryEntries.forEach(y);
            if (!a)
                for (var b in this) b.charAt(0) === "t" && g.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = void 0)
        },
        stop: function() {
            this.done = !0;
            var a = this.tryEntries[0];
            a = a.completion;
            if (a.type === "throw") throw a.arg;
            return this.rval
        },
        dispatchException: function(a) {
            if (this.done) throw a;
            var b = this;

            function c(c, d) {
                f.type = "throw";
                f.arg = a;
                b.next = c;
                return !!d
            }
            for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                var e = this.tryEntries[d],
                    f = e.completion;
                if (e.tryLoc === "root") return c("end");
                if (e.tryLoc <= this.prev) {
                    var h = g.call(e, "catchLoc"),
                        i = g.call(e, "finallyLoc");
                    if (h && i) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
                        else if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else if (h) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0)
                    } else if (i) {
                        if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else throw new Error("try statement without catch or finally")
                }
            }
        },
        abrupt: function(a, b) {
            for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                var d = this.tryEntries[c];
                if (d.tryLoc <= this.prev && g.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                    var e = d;
                    break
                }
            }
            e && (a === "break" || a === "continue") && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
            d = e ? e.completion : {};
            d.type = a;
            d.arg = b;
            e ? this.next = e.finallyLoc : this.complete(d);
            return p
        },
        complete: function(a, b) {
            if (a.type === "throw") throw a.arg;
            a.type === "break" || a.type === "continue" ? this.next = a.arg : a.type === "return" ? (this.rval = a.arg, this.next = "end") : a.type === "normal" && b && (this.next = b)
        },
        finish: function(a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.finallyLoc === a) {
                    this.complete(c.completion, c.afterLoc);
                    y(c);
                    return p
                }
            }
        },
        "catch": function(a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.tryLoc === a) {
                    var d = c.completion;
                    if (d.type === "throw") {
                        var e = d.arg;
                        y(c)
                    }
                    return e
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(a, b, c) {
            this.delegate = {
                iterator: A(a),
                resultName: b,
                nextLoc: c
            };
            return p
        }
    }
}), null);
__d("ServiceWorkerAsyncStorage", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    var g = 1,
        h = "data",
        i = self.indexedDB.open("ServiceWorkerAsyncStorage", g),
        j = new(b("Promise"))(function(a, b) {
            i.onerror = b, i.onsuccess = function(b) {
                a(b.target.result)
            }
        });
    i.onupgradeneeded = function(a) {
        a = a.currentTarget.result;
        if (a.objectStoreNames && a.objectStoreNames.contains(h)) return;
        a.createObjectStore(h)
    };

    function k(a) {
        return new(b("Promise"))(function(b, c) {
            a.onsuccess = function() {
                b(a.result)
            }, a.onerror = c
        })
    }

    function a(a, c) {
        var d, e, f;
        return b("regeneratorRuntime").async(function(g) {
            while (1) switch (g.prev = g.next) {
                case 0:
                    g.next = 2;
                    return b("regeneratorRuntime").awrap(j);
                case 2:
                    d = g.sent;
                    e = d.transaction(h, "readwrite");
                    f = e.objectStore(h).put(c, a);
                    g.next = 7;
                    return b("regeneratorRuntime").awrap(k(f));
                case 7:
                case "end":
                    return g.stop()
            }
        }, null, this)
    }

    function c(a) {
        var c, d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(j);
                case 2:
                    c = f.sent;
                    d = c.transaction(h, "readonly");
                    e = d.objectStore(h).get(a);
                    f.next = 7;
                    return b("regeneratorRuntime").awrap(k(e));
                case 7:
                    return f.abrupt("return", f.sent);
                case 8:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function d(a, c, d) {
        var e, f, g;
        return b("regeneratorRuntime").async(function(i) {
            while (1) switch (i.prev = i.next) {
                case 0:
                    i.next = 2;
                    return b("regeneratorRuntime").awrap(j);
                case 2:
                    e = i.sent;
                    f = e.transaction(h, "readonly");
                    g = f.objectStore(h).getAll(self.IDBKeyRange.bound(a, c), d);
                    i.next = 7;
                    return b("regeneratorRuntime").awrap(k(g));
                case 7:
                    return i.abrupt("return", i.sent);
                case 8:
                case "end":
                    return i.stop()
            }
        }, null, this)
    }

    function e(a) {
        var c, d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(j);
                case 2:
                    c = f.sent;
                    d = c.transaction(h, "readwrite");
                    e = d.objectStore(h)["delete"](a);
                    f.next = 7;
                    return b("regeneratorRuntime").awrap(k(e));
                case 7:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function l(a) {
        var c, d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.next = 2;
                    return b("regeneratorRuntime").awrap(j);
                case 2:
                    c = e.sent;
                    d = c.transaction(h, "readwrite");
                    e.next = 6;
                    return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b, c) {
                        var e = d.objectStore(h).openCursor();
                        e.onsuccess = function(c) {
                            c = c.target.result;
                            c ? (a(c.key) && c["delete"](), c["continue"]()) : b()
                        };
                        e.onerror = function(a) {
                            c(a.currentTarget.error)
                        }
                    }));
                case 6:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function m() {
        var a, c, d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(j);
                case 2:
                    a = f.sent;
                    c = a.transaction(a.objectStoreNames, "readwrite");
                    d = [];
                    for (e = 0; e < a.objectStoreNames.length; e++) d.push(k(c.objectStore(a.objectStoreNames[e]).clear()));
                    f.next = 8;
                    return b("regeneratorRuntime").awrap(b("Promise").all(d));
                case 8:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }
    f.setItem = a;
    f.getItem = c;
    f.getAllItemWithKeyRange = d;
    f.removeItem = e;
    f.removeAllItemWithPredicate = l;
    f.purge = m
}), 66);
__d("RouteLoadsLogging", ["ServiceWorkerAsyncStorage", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "RouteLoadCounts",
        i = null;

    function j() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    if (!(i === null)) {
                        a.next = 2;
                        break
                    }
                    return a.abrupt("return");
                case 2:
                    d("ServiceWorkerAsyncStorage").setItem(h, i);
                case 3:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function a() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    i = {};
                    a.next = 3;
                    return b("regeneratorRuntime").awrap(j());
                case 3:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function c(a) {
        var c;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    if (!(i === null)) {
                        e.next = 5;
                        break
                    }
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem(h));
                case 3:
                    c = e.sent, !c || typeof c !== "object" ? i = {} : i = c;
                case 5:
                    !i[a] || typeof i[a] !== "number" ? i[a] = 1 : i[a]++;
                    e.next = 8;
                    return b("regeneratorRuntime").awrap(j());
                case 8:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function e(a) {
        return i && i[a] && typeof i[a] === "number" ? i[a] : 0
    }
    g.activateRouteLoadsLogging = a;
    g.logCompletionForRoute = c;
    g.getLoadCountForRoute = e
}), 98);
__d("performance", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = a.performance || a.msPerformance || a.webkitPerformance || {};
    c = b;
    f["default"] = c
}), 66);
__d("performanceNow", ["performance"], (function(a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now) c = function() {
        return (g || (g = b("performance"))).now()
    };
    else {
        d = a._cstart;
        f = Date.now();
        var h = typeof d === "number" && d < f ? d : f,
            i = 0;
        c = function() {
            var a = Date.now(),
                b = a - h;
            b < i && (h -= i - b, b = a - h);
            i = b;
            return b
        }
    }
    e.exports = c
}), null);
__d("removeFromArray", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        b = a.indexOf(b);
        b !== -1 && a.splice(b, 1)
    }
    f["default"] = a
}), 66);
__d("fb-error", ["performanceNow", "removeFromArray"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };

    function i(b) {
        var a = new Error(b);
        if (a.stack === void 0) try {
            throw a
        } catch (a) {}
        a.messageFormat = b;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        a.messageParams = d.map(function(a) {
            return String(a)
        });
        a.taalOpcodes = [h.PREVIOUS_FRAME];
        return a
    }
    var j = !1,
        k = {
            errorListener: function(b) {
                var c = a.console,
                    d = c[b.type] ? b.type : "error";
                if (b.type === "fatal" || d === "error" && !j) {
                    d = b.message;
                    c.error("ErrorUtils caught an error:\n\n" + d + "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.");
                    j = !0
                }
            }
        },
        l = {
            access_token: null
        },
        m = 6,
        n = 6e4,
        o = 10 * n,
        p = new Map(),
        q = 0;

    function r() {
        var a = (g || (g = b("performanceNow")))();
        if (a > q + n) {
            var c = a - o;
            for (var d = p, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (e) {
                    if (f >= d.length) break;
                    h = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    h = f.value
                }
                h = h;
                var i = h[0];
                h = h[1];
                h.lastAccessed < c && p["delete"](i)
            }
            q = a
        }
    }

    function s(a) {
        r();
        var c = (g || (g = b("performanceNow")))(),
            d = p.get(a);
        if (d == null) {
            p.set(a, {
                dropped: 0,
                logged: [c],
                lastAccessed: c
            });
            return 1
        }
        a = d.dropped;
        var e = d.logged;
        d.lastAccessed = c;
        while (e[0] < c - n) e.shift();
        if (e.length < m) {
            d.dropped = 0;
            e.push(c);
            return a + 1
        } else {
            d.dropped++;
            return null
        }
    }
    var t = {
        shouldLog: function(a) {
            return s(a.hash)
        }
    };

    function u(a) {
        var b = null;
        a == null || typeof a !== "object" ? b = i("Non-object thrown: %s", String(a)) : typeof a.message !== "string" ? b = i("Non-error thrown: %s, keys: %s", String(a), JSON.stringify(Object.keys(a).sort())) : Object.isExtensible && !Object.isExtensible(a) && (b = i("Non-extensible thrown: %s", String(a.message)));
        if (b != null) {
            b.taalOpcodes = b.taalOpcodes || [];
            b.taalOpcodes.push(h.PREVIOUS_FRAME);
            return b
        }
        return a
    }
    var v = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
        w;

    function aa(a) {
        var b = a.error != null ? u(a.error) : i(a.message || "");
        b.fileName == null && a.filename != null && (b.fileName = a.filename);
        b.line == null && a.lineno != null && (b.line = a.lineno);
        b.column == null && a.colno != null && (b.column = a.colno);
        b.guardList = [v];
        b.loggingSource = "ONERROR";
        (a = w) === null || a === void 0 ? void 0 : a.reportError(b)
    }
    var x = {
            setup: function(b) {
                if (typeof a.addEventListener !== "function") return;
                if (w != null) return;
                w = b;
                a.addEventListener("error", aa)
            }
        },
        y = [],
        z = {
            pushGuard: function(a) {
                y.unshift(a)
            },
            popGuard: function() {
                y.shift()
            },
            inGuard: function() {
                return y.length !== 0
            },
            cloneGuardList: function() {
                return y.map(function(a) {
                    return a.name
                })
            },
            findDeferredSource: function() {
                for (var a = 0; a < y.length; a++) {
                    var b = y[a];
                    if (b.deferredSource != null) return b.deferredSource
                }
            }
        };

    function ba(a) {
        if (a.type != null) return a.type;
        if (a.loggingSource == "GUARDED" || a.loggingSource == "ERROR_BOUNDARY") return "fatal";
        if (a.name == "SyntaxError") return "fatal";
        a.loggingSource == "ONERROR" && a.message.indexOf("ResizeObserver loop") >= 0 && (a.type = "warn");
        a.stack != null && a.stack.indexOf("chrome-extension://") >= 0 && (a.type = "warn");
        return "error"
    }
    var A = [],
        B = function() {
            function a() {
                this.metadata = [].concat(A)
            }
            var b = a.prototype;
            b.addEntries = function() {
                var a;
                (a = this.metadata).push.apply(a, arguments);
                return this
            };
            b.addEntry = function(a, b, c) {
                this.metadata.push([a, b, c]);
                return this
            };
            b.isEmpty = function() {
                return this.metadata.length === 0
            };
            b.clearEntries = function() {
                this.metadata = []
            };
            b.format = function() {
                var a = [];
                this.metadata.forEach(function(b) {
                    if (b && b.length) {
                        b = b.map(function(a) {
                            return a != null ? String(a).replace(/:/g, "_") : ""
                        }).join(":");
                        a.push(b)
                    }
                });
                return a
            };
            b.getAll = function() {
                return this.metadata
            };
            a.addGlobalMetadata = function(a, b, c) {
                A.push([a, b, c])
            };
            a.getGlobalMetadata = function() {
                return A
            };
            a.unsetGlobalMetadata = function(a, b) {
                A = A.filter(function(c) {
                    return !(Array.isArray(c) && c[0] === a && c[1] === b)
                })
            };
            return a
        }(),
        C = {
            debug: 1,
            info: 2,
            warn: 3,
            error: 4,
            fatal: 5
        };

    function c(a, b) {
        if (Object.isFrozen(a)) return;
        b.type && ((!a.type || C[a.type] > C[b.type]) && (a.type = b.type));
        var c = b.metadata;
        if (c != null) {
            var d;
            d = (d = a.metadata) !== null && d !== void 0 ? d : new B();
            c != null && d.addEntries.apply(d, c.getAll());
            a.metadata = d
        }
        b.project != null && (a.project = b.project);
        b.errorName != null && (a.errorName = b.errorName);
        b.componentStack != null && (a.componentStack = b.componentStack);
        b.deferredSource != null && (a.deferredSource = b.deferredSource);
        b.blameModule != null && (a.blameModule = b.blameModule);
        b.loggingSource != null && (a.loggingSource = b.loggingSource);
        d = (c = a.messageFormat) !== null && c !== void 0 ? c : a.message;
        c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
        if (d !== b.messageFormat && b.messageFormat != null) {
            var e;
            d += " [Caught in: " + b.messageFormat + "]";
            c.push.apply(c, (e = b.messageParams) !== null && e !== void 0 ? e : [])
        }
        a.messageFormat = d;
        a.messageParams = c;
        e = b.forcedKey;
        d = a.forcedKey;
        c = e != null && d != null ? e + "_" + d : e !== null && e !== void 0 ? e : d;
        a.forcedKey = c
    }

    function d(a) {
        var b;
        return ca((b = a.messageFormat) !== null && b !== void 0 ? b : a.message, a.messageParams || [])
    }

    function ca(a, b) {
        var c = 0;
        a = a.replace(/%s/g, function() {
            return c < b.length ? b[c++] : "NOPARAM"
        });
        c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
        return a
    }

    function f(a) {
        return (a !== null && a !== void 0 ? a : []).map(function(a) {
            return String(a)
        })
    }
    var D = {
            aggregateError: c,
            toReadableMessage: d,
            toStringParams: f
        },
        da = 5,
        E = [];

    function F(a) {
        E.push(a), E.length > da && E.shift()
    }

    function G(a) {
        var b = a.getAllResponseHeaders();
        if (b != null && b.indexOf("X-FB-Debug") >= 0) {
            b = a.getResponseHeader("X-FB-Debug");
            b && F(b)
        }
    }

    function ea() {
        return E
    }
    var H = {
            add: F,
            addFromXHR: G,
            getAll: ea
        },
        fa = "abcdefghijklmnopqrstuvwxyz012345";

    function I() {
        var a = 0;
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (f != null) {
                var g = f.length;
                for (var h = 0; h < g; h++) a = (a << 5) - a + f.charCodeAt(h)
            }
        }
        var i = "";
        for (var j = 0; j < 6; j++) i = fa.charAt(a & 31) + i, a >>= 5;
        return i
    }
    var J = [/\(([^\s\)\()]+):(\d+):(\d+)\)$/, /@([^\s\)\()]+):(\d+):(\d+)$/, /^([^\s\)\()]+):(\d+):(\d+)$/, /^at ([^\s\)\()]+):(\d+):(\d+)$/],
        ga = /^\w+:\s.*?\n/g;
    Error.stackTraceLimit != null && Error.stackTraceLimit < 80 && (Error.stackTraceLimit = 80);

    function ha(a) {
        var b = a.name,
            c = a.message;
        a = a.stack;
        if (a == null) return null;
        if (b != null && c != null && c !== "") {
            var d = b + ": " + c + "\n";
            if (a.startsWith(d)) return a.substr(d.length);
            if (a === b + ": " + c) return null
        }
        if (b != null) {
            d = b + "\n";
            if (a.startsWith(d)) return a.substr(d.length)
        }
        if (c != null && c !== "") {
            b = ": " + c + "\n";
            d = a.indexOf(b);
            c = a.substring(0, d);
            if (/^\w+$/.test(c)) return a.substring(d + b.length)
        }
        return a.replace(ga, "")
    }

    function K(a) {
        a = a.trim();
        var b;
        a;
        var c, d, e;
        if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";
        else {
            var f;
            for (var g = 0; g < J.length; g++) {
                var h = J[g];
                f = a.match(h);
                if (f != null) break
            }
            f != null && f.length === 4 ? (c = f[1], d = parseInt(f[2], 10), e = parseInt(f[3], 10), b = a.substring(0, a.length - f[0].length)) : b = a;
            b = b.replace(/^at /, "").trim()
        }
        h = {
            identifier: b,
            script: c,
            line: d,
            column: e
        };
        h.text = L(h);
        return h
    }

    function ia(a) {
        return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(K)
    }

    function ja(a) {
        a = ha(a);
        return ia(a)
    }

    function ka(a) {
        if (a == null || a === "") return null;
        a = a.split("\n");
        a.splice(0, 1);
        return a.map(function(a) {
            return a.trim()
        })
    }

    function L(a) {
        var b = a.identifier,
            c = a.script,
            d = a.line;
        a = a.column;
        b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
        c != null && d != null && a != null && (b += " (" + c + ":" + d + ":" + a + ")");
        return b
    }

    function M(c) {
        var d, e, f, i, j, k, l = ja(c);
        d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
        var m = c.framesToPop;
        if (m != null) {
            m = Math.min(m, l.length);
            while (m-- > 0) d.unshift(h.PREVIOUS_FRAME)
        }
        m = (m = c.messageFormat) !== null && m !== void 0 ? m : c.message;
        e = ((e = c.messageParams) !== null && e !== void 0 ? e : []).map(function(a) {
            return String(a)
        });
        var n = ka(c.componentStack),
            o = n == null ? null : n.map(K),
            p = c.metadata ? c.metadata.format() : new B().format();
        p.length === 0 && (p = void 0);
        var q = l.map(function(a) {
            return a.text
        }).join("\n");
        f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
        var r = ba(c),
            s = c.loggingSource,
            t = c.project;
        i = (i = c.lineNumber) !== null && i !== void 0 ? i : c.line;
        j = (j = c.columnNumber) !== null && j !== void 0 ? j : c.column;
        k = (k = c.fileName) !== null && k !== void 0 ? k : c.sourceURL;
        var u = l.length > 0;
        u && i == null && (i = l[0].line);
        u && j == null && (j = l[0].column);
        u && k == null && (k = l[0].script);
        o = {
            blameModule: c.blameModule,
            column: j == null ? null : String(j),
            clientTime: Math.floor(Date.now() / 1e3),
            componentStackFrames: o,
            deferredSource: c.deferredSource != null ? M(c.deferredSource) : null,
            extra: (u = c.extra) !== null && u !== void 0 ? u : {},
            fbtrace_id: c.fbtrace_id,
            guardList: (j = c.guardList) !== null && j !== void 0 ? j : [],
            hash: I(f, q, r, t, s),
            isNormalizedError: !0,
            line: i == null ? null : String(i),
            loggingSource: s,
            message: D.toReadableMessage(c),
            messageFormat: m,
            messageParams: e,
            metadata: p,
            name: f,
            page_time: Math.floor((g || (g = b("performanceNow")))()),
            project: t,
            reactComponentStack: n,
            script: k,
            serverHash: c.serverHash,
            stack: q,
            stackFrames: l,
            type: r,
            xFBDebug: H.getAll()
        };
        c.forcedKey != null && (o.forcedKey = c.forcedKey);
        d.length > 0 && (o.taalOpcodes = d);
        u = a.location;
        u && (o.windowLocationURL = u.href);
        for (var v in o) o[v] == null && delete o[v];
        return o
    }

    function la(a) {
        return a != null && typeof a === "object" && a.isNormalizedError === !0 ? a : null
    }
    var N = {
            formatStackFrame: L,
            normalizeError: M,
            ifNormalizedError: la
        },
        ma = "<global.react>",
        O = [],
        P = [],
        Q = 50,
        R = !1,
        S = {
            history: P,
            addListener: function(a, b) {
                b === void 0 && (b = !1), O.push(a), b || P.forEach(function(b) {
                    return a(b, (b = b.loggingSource) !== null && b !== void 0 ? b : "DEPRECATED")
                })
            },
            unshiftListener: function(a) {
                O.unshift(a)
            },
            removeListener: function(a) {
                b("removeFromArray")(O, a)
            },
            reportError: function(a) {
                a = N.normalizeError(a);
                S.reportNormalizedError(a)
            },
            reportNormalizedError: function(b) {
                if (R) return !1;
                var a = z.cloneGuardList();
                b.componentStackFrames && a.unshift(ma);
                a.length > 0 && (b.guardList = a);
                if (b.deferredSource == null) {
                    a = z.findDeferredSource();
                    a != null && (b.deferredSource = N.normalizeError(a))
                }
                P.length > Q && P.splice(Q / 2, 1);
                P.push(b);
                R = !0;
                for (var a = 0; a < O.length; a++) try {
                    var c;
                    O[a](b, (c = b.loggingSource) !== null && c !== void 0 ? c : "DEPRECATED")
                } catch (a) {}
                R = !1;
                return !0
            }
        };
    S.addListener(k.errorListener);
    var na = "<anonymous guard>",
        T = !1,
        U = {
            applyWithGuard: function(a, b, c, d) {
                z.pushGuard({
                    name: (d === null || d === void 0 ? void 0 : d.name) || (a.name ? "func_name:" + a.name : null) || na,
                    deferredSource: d === null || d === void 0 ? void 0 : d.deferredSource
                });
                if (T) try {
                    return a.apply(b, c)
                } finally {
                    z.popGuard()
                }
                try {
                    return Function.prototype.apply.call(a, b, c)
                } catch (h) {
                    try {
                        b = d !== null && d !== void 0 ? d : {};
                        var e = b.deferredSource,
                            f = b.onError;
                        b = b.onNormalizedError;
                        var g = u(h);
                        e = {
                            deferredSource: e,
                            loggingSource: "GUARDED",
                            project: (e = d === null || d === void 0 ? void 0 : d.project) !== null && e !== void 0 ? e : "ErrorGuard",
                            type: d === null || d === void 0 ? void 0 : d.errorType
                        };
                        D.aggregateError(g, e);
                        d = N.normalizeError(g);
                        g == null && a && (d.extra[a.toString().substring(0, 100)] = "function", c != null && c.length && (d.extra[Array.from(c).toString().substring(0, 100)] = "args"));
                        d.guardList = z.cloneGuardList();
                        f && f(g);
                        b && b(d);
                        S.reportNormalizedError(d)
                    } catch (a) {}
                } finally {
                    z.popGuard()
                }
            },
            guard: function(a, b) {
                function c() {
                    for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                    return U.applyWithGuard(a, this, d, b)
                }
                a.__SMmeta && (c.__SMmeta = a.__SMmeta);
                return c
            },
            inGuard: function() {
                return z.inGuard()
            },
            skipGuardGlobal: function(a) {
                T = a
            }
        },
        V = 1024,
        W = [],
        oa = 0;

    function X(a) {
        return String(a)
    }

    function Y(a) {
        return a == null ? null : String(a)
    }

    function pa(a, b) {
        var c = {};
        b && b.forEach(function(a) {
            c[a] = !0
        });
        Object.keys(a).forEach(function(b) {
            a[b] ? c[b] = !0 : c[b] && delete c[b]
        });
        return Object.keys(c)
    }

    function Z(a) {
        return (a !== null && a !== void 0 ? a : []).map(function(a) {
            return {
                column: Y(a.column),
                identifier: a.identifier,
                line: Y(a.line),
                script: a.script
            }
        })
    }

    function qa(a) {
        a = String(a);
        return a.length > V ? a.substring(0, V - 3) + "..." : a
    }

    function ra(a, b) {
        var c;
        c = {
            appId: Y(b.appId),
            cavalry_lid: b.cavalry_lid,
            access_token: l.access_token,
            ancestor_hash: a.hash,
            bundle_variant: (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
            clientTime: X(a.clientTime),
            column: a.column,
            componentStackFrames: Z(a.componentStackFrames),
            events: a.events,
            extra: pa(a.extra, b.extra),
            forcedKey: a.forcedKey,
            frontend_env: (c = b.frontend_env) !== null && c !== void 0 ? c : null,
            guardList: a.guardList,
            line: a.line,
            loggingFramework: b.loggingFramework,
            messageFormat: qa(a.messageFormat),
            messageParams: a.messageParams.map(qa),
            name: a.name,
            sample_weight: Y(b.sample_weight),
            script: a.script,
            site_category: b.site_category,
            stackFrames: Z(a.stackFrames),
            type: a.type,
            page_time: Y(a.page_time),
            project: a.project,
            push_phase: b.push_phase,
            report_source: b.report_source,
            report_source_ref: b.report_source_ref,
            rollout_hash: (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
            script_path: b.script_path,
            server_revision: Y(b.server_revision),
            spin: Y(b.spin),
            svn_rev: String(b.client_revision),
            additional_client_revisions: Array.from((c = b.additional_client_revisions) !== null && c !== void 0 ? c : []).map(X),
            taalOpcodes: a.taalOpcodes == null ? null : a.taalOpcodes.map(function(a) {
                return a
            }),
            web_session_id: b.web_session_id,
            version: "3",
            xFBDebug: a.xFBDebug
        };
        b = a.blameModule;
        var d = a.deferredSource;
        b != null && (c.blameModule = String(b));
        d && d.stackFrames && (c.deferredSource = {
            stackFrames: Z(d.stackFrames)
        });
        a.metadata && (c.metadata = a.metadata);
        a.loadingUrls && (c.loadingUrls = a.loadingUrls);
        a.serverHash != null && (c.serverHash = a.serverHash);
        a.windowLocationURL != null && (c.windowLocationURL = a.windowLocationURL);
        a.loggingSource != null && (c.loggingSource = a.loggingSource);
        return c
    }

    function sa(a, b, c) {
        oa++;
        if (b.sample_weight === 0) return !1;
        var d = t.shouldLog(a);
        if (d == null) return !1;
        b = ra(a, b);
        Object.assign(b, {
            ancestors: W.slice(),
            clientWeight: X(d),
            page_position: X(oa)
        });
        W.length < 15 && W.push(a.hash);
        c(b);
        return !0
    }
    var ta = {
            createErrorPayload: ra,
            postError: sa
        },
        $ = null,
        ua = !1;

    function va(a) {
        if (!$) return;
        var b = a.reason,
            c;
        if (b != null && typeof b === "object" && (b.name == null || b.name === "" || b.message == null || b.message === "")) try {
            c = i("UnhandledRejection: %s", JSON.stringify(b)), c.loggingSource = "ONUNHANDLEDREJECTION"
        } catch (a) {
            c = i("UnhandledRejection: (circular) %s", Object.keys(b).join(",")), c.loggingSource = "ONUNHANDLEDREJECTION"
        } else c = u(b), c.loggingSource || (c.loggingSource = "ONUNHANDLEDREJECTION");
        $.reportError(c);
        a.preventDefault()
    }

    function wa(b) {
        $ = b, typeof a.addEventListener === "function" && !ua && (ua = !0, a.addEventListener("unhandledrejection", va))
    }
    var xa = {
        onunhandledrejection: va,
        setup: wa
    };
    c = {
        preSetup: function(a) {
            (a == null || a.ignoreOnError !== !0) && x.setup(S), (a == null || a.ignoreOnUnahndledRejection !== !0) && xa.setup(S)
        },
        setup: function(a, b) {
            S.addListener(function(c) {
                ta.postError(c, a, b)
            })
        }
    };
    var ya = function() {
        function a(a) {
            this.project = a, this.events = [], this.metadata = new B(), this.taalOpcodes = []
        }
        var b = a.prototype;
        b.$1 = function(b, c) {
            var d = String(c),
                e = this.events,
                f = this.project,
                g = this.metadata,
                i = this.blameModule,
                j = this.forcedKey,
                k = this.error,
                l;
            for (var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2; o < m; o++) n[o - 2] = arguments[o];
            if (this.normalizedError) {
                var p = {
                    message: this.normalizedError.messageFormat + " [Caught in: " + d + "]",
                    params: [].concat(this.normalizedError.messageParams, n),
                    forcedKey: j
                };
                l = babelHelpers["extends"]({}, this.normalizedError, {
                    message: p.message,
                    messageFormat: p.message,
                    messageParams: D.toStringParams(p.params),
                    project: f,
                    type: b,
                    loggingSource: "FBLOGGER"
                })
            } else if (k) this.taalOpcodes.length > 0 && new a("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching"), D.aggregateError(k, {
                messageFormat: d,
                messageParams: D.toStringParams(n),
                errorName: k.name,
                forcedKey: j,
                project: f,
                type: b,
                loggingSource: "FBLOGGER"
            }), l = N.normalizeError(k);
            else {
                k = new Error(d);
                if (k.stack === void 0) try {
                    throw k
                } catch (a) {}
                k.messageFormat = d;
                k.messageParams = D.toStringParams(n);
                k.blameModule = i;
                k.forcedKey = j;
                k.project = f;
                k.type = b;
                k.loggingSource = "FBLOGGER";
                k.taalOpcodes = [h.PREVIOUS_FRAME, h.PREVIOUS_FRAME].concat(this.taalOpcodes);
                l = N.normalizeError(k);
                l.name = "FBLogger"
            }
            g.isEmpty() || (l.metadata = g.format());
            if (e.length > 0)
                if (l.events != null) {
                    var q;
                    (q = l.events).push.apply(q, e)
                } else l.events = e;
            S.reportNormalizedError(l);
            return k
        };
        b.fatal = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["fatal", a].concat(c))
        };
        b.mustfix = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["error", a].concat(c))
        };
        b.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["warn", a].concat(c))
        };
        b.info = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["info", a].concat(c))
        };
        b.debug = function(a) {};
        b.mustfixThrow = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            var e = this.$1.apply(this, ["error", a].concat(c));
            e || (e = i("mustfixThrow does not support catchingNormalizedError"), e.taalOpcodes = e.taalOpcodes || [], e.taalOpcodes.push(h.PREVIOUS_FRAME));
            throw e
        };
        b.catching = function(b) {
            !(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = b;
            return this
        };
        b.catchingNormalizedError = function(a) {
            this.normalizedError = a;
            return this
        };
        b.event = function(a) {
            this.events.push(a);
            return this
        };
        b.blameToModule = function(a) {
            this.blameModule = a;
            return this
        };
        b.blameToPreviousFile = function() {
            this.taalOpcodes.push(h.PREVIOUS_FILE);
            return this
        };
        b.blameToPreviousFrame = function() {
            this.taalOpcodes.push(h.PREVIOUS_FRAME);
            return this
        };
        b.blameToPreviousDirectory = function() {
            this.taalOpcodes.push(h.PREVIOUS_DIR);
            return this
        };
        b.addToCategoryKey = function(a) {
            this.forcedKey = a;
            return this
        };
        b.addMetadata = function(a, b, c) {
            this.metadata.addEntry(a, b, c);
            return this
        };
        return a
    }();
    d = function(a, b) {
        var c = new ya(a);
        return b != null ? c.event(a + "." + b) : c
    };
    d.addGlobalMetadata = function(a, b, c) {
        B.addGlobalMetadata(a, b, c)
    };
    f = {
        blameToPreviousFile: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_FILE);
            return a
        },
        blameToPreviousFrame: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_FRAME);
            return a
        },
        blameToPreviousDirectory: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_DIR);
            return a
        }
    };
    G = {
        err: i,
        ErrorBrowserConsole: k,
        ErrorDynamicData: l,
        ErrorFilter: t,
        ErrorGlobalEventHandler: x,
        ErrorGuard: U,
        ErrorGuardState: z,
        ErrorMetadata: B,
        ErrorNormalizeUtils: N,
        ErrorPoster: ta,
        ErrorPubSub: S,
        ErrorSerializer: D,
        ErrorSetup: c,
        ErrorXFBDebug: H,
        FBLogger: d,
        getErrorSafe: u,
        getSimpleHash: I,
        TAAL: f,
        TAALOpcode: h
    };
    e.exports = G
}), null);
__d("FBLogger", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").FBLogger
}), 98);
__d("ServiceWorkerEventLogger", ["FBLogger"], (function(a, b, c, d, e, f, g) {
    var h = 1e3,
        i = [],
        j = 0,
        k = 0;

    function l(a) {
        var b = "[" + new Date().toISOString() + "]  ";
        i[k % h] = b + a;
        k++;
        while (k - j > h) j++
    }

    function a(a) {
        l("[ERROR] " + a), c("FBLogger")("serviceworker").mustfix(a)
    }

    function b() {
        var a = k % h,
            b = k % h;
        if (a <= b) {
            b = i.slice(b);
            a = i.slice(0, a);
            return b.concat(a)
        }
        return i.slice(j, k)
    }
    g.log = l;
    g.error = a;
    g.dump = b
}), 98);
__d("ServiceWorkerCacheStorage", ["Promise", "ServiceWorkerEventLogger", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "sw-cache",
        i = "installing-sw-cache",
        j = "rsrc-cache",
        k = "/sw/cache/canary/file.html",
        l = caches.open(j),
        m = !1;

    function n() {
        var a, c, d, e, f, g, j, k, l;
        return b("regeneratorRuntime").async(function(m) {
            while (1) switch (m.prev = m.next) {
                case 0:
                    m.next = 2;
                    return b("regeneratorRuntime").awrap(caches.keys());
                case 2:
                    a = m.sent, c = [], d = new RegExp("^" + i + "(.*)$"), (e = a, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]());
                case 6:
                    if (!f) {
                        m.next = 12;
                        break
                    }
                    if (!(g >= e.length)) {
                        m.next = 9;
                        break
                    }
                    return m.abrupt("break", 23);
                case 9:
                    j = e[g++];
                    m.next = 16;
                    break;
                case 12:
                    g = e.next();
                    if (!g.done) {
                        m.next = 15;
                        break
                    }
                    return m.abrupt("break", 23);
                case 15:
                    j = g.value;
                case 16:
                    k = j;
                    l = d.exec(k);
                    if (!((!l || !l[1]) && k !== h)) {
                        m.next = 20;
                        break
                    }
                    return m.abrupt("continue", 21);
                case 20:
                    c.push(caches["delete"](k));
                case 21:
                    m.next = 6;
                    break;
                case 23:
                    m.next = 25;
                    return b("regeneratorRuntime").awrap(b("Promise").all(c));
                case 25:
                case "end":
                    return m.stop()
            }
        }, null, this)
    }

    function o() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(caches.keys());
                case 2:
                    a = c.sent;
                    c.next = 5;
                    return b("regeneratorRuntime").awrap(b("Promise").all(a.map(function(a) {
                        return b("regeneratorRuntime").async(function(c) {
                            while (1) switch (c.prev = c.next) {
                                case 0:
                                    c.next = 2;
                                    return b("regeneratorRuntime").awrap(caches["delete"](a));
                                case 2:
                                case "end":
                                    return c.stop()
                            }
                        }, null, this)
                    })));
                case 5:
                    c.next = 7;
                    return b("regeneratorRuntime").awrap(caches.open(j));
                case 7:
                    return c.abrupt("return", c.sent);
                case 8:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function p() {
        var a, c, d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.next = 2;
                    return b("regeneratorRuntime").awrap(l);
                case 2:
                    a = e.sent;
                    e.next = 5;
                    return b("regeneratorRuntime").awrap(a.keys());
                case 5:
                    c = e.sent;
                    d = new Map();
                    c.forEach(function(a) {
                        if (a.url === self.registration.scope.slice(0, -1) + k) return;
                        d.set(a.url, a)
                    });
                    return e.abrupt("return", d);
                case 9:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function a() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    d("ServiceWorkerEventLogger").log("Clearing cache");
                    m = !0;
                    l = o();
                    a.next = 5;
                    return b("regeneratorRuntime").awrap(l);
                case 5:
                    m = !1;
                case 6:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function q(a) {
        var c;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    d("ServiceWorkerEventLogger").log("Adding request to cache: " + (typeof a === "string" || a instanceof URL ? a.toString() : a.url));
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(l);
                case 3:
                    c = e.sent;
                    e.next = 6;
                    return b("regeneratorRuntime").awrap(c.add(a));
                case 6:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function c(a) {
        var c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    c = new Request(a, {
                        mode: "same-origin",
                        credentials: "same-origin",
                        redirect: "manual"
                    });
                    d.next = 3;
                    return b("regeneratorRuntime").awrap(q(c));
                case 3:
                    return d.abrupt("return", d.sent);
                case 4:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function e(a) {
        var c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(l);
                case 2:
                    c = d.sent;
                    d.next = 5;
                    return b("regeneratorRuntime").awrap(c.addAll(a));
                case 5:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function r(a, c) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    d("ServiceWorkerEventLogger").log("Putting response into cache: " + (typeof a === "string" || a instanceof URL ? a.toString() : a.url));
                    f.next = 3;
                    return b("regeneratorRuntime").awrap(l);
                case 3:
                    e = f.sent;
                    f.next = 6;
                    return b("regeneratorRuntime").awrap(e.put(a, c));
                case 6:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function s(a, c) {
        var d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.next = 2;
                    return b("regeneratorRuntime").awrap(l);
                case 2:
                    d = e.sent;
                    e.next = 5;
                    return b("regeneratorRuntime").awrap(d.match(a, c));
                case 5:
                    return e.abrupt("return", e.sent);
                case 6:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function f(a, c) {
        var e, f, g, h, i, j, k;
        return b("regeneratorRuntime").async(function(m) {
            while (1) switch (m.prev = m.next) {
                case 0:
                    m.next = 2;
                    return b("regeneratorRuntime").awrap(p());
                case 2:
                    e = m.sent;
                    f = [];
                    g = Object.values(a);
                    for (h = 0; h < g.length; h++) i = g[h], j = c(i), typeof j === "string" && !e.has(j) && f.push(j);
                    m.next = 8;
                    return b("regeneratorRuntime").awrap(l);
                case 8:
                    k = m.sent;
                    m.next = 11;
                    return b("regeneratorRuntime").awrap(b("Promise").all(f.map(function(a) {
                        return b("regeneratorRuntime").async(function(c) {
                            while (1) switch (c.prev = c.next) {
                                case 0:
                                    c.prev = 0;
                                    c.next = 3;
                                    return b("regeneratorRuntime").awrap(k.add(a));
                                case 3:
                                    c.next = 9;
                                    break;
                                case 5:
                                    c.prev = 5;
                                    c.t0 = c["catch"](0);
                                    d("ServiceWorkerEventLogger").error("Failed adding request to cache: " + (typeof a === "string" || a instanceof URL ? a.toString() : a.url));
                                    throw c.t0;
                                case 9:
                                case "end":
                                    return c.stop()
                            }
                        }, null, this, [
                            [0, 5]
                        ])
                    })));
                case 11:
                case "end":
                    return m.stop()
            }
        }, null, this)
    }

    function t() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(r(k, new Response("")));
                case 2:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function u() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(n());
                case 2:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function v(a) {
        var c, d, e, f, g, h, i, j, m, n, o;
        return b("regeneratorRuntime").async(function(q) {
            while (1) switch (q.prev = q.next) {
                case 0:
                    q.next = 2;
                    return b("regeneratorRuntime").awrap(b("Promise").all([p(), l]));
                case 2:
                    c = q.sent, d = c[0], e = c[1], f = [], (g = d, h = Array.isArray(g), i = 0, g = h ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]());
                case 7:
                    if (!h) {
                        q.next = 13;
                        break
                    }
                    if (!(i >= g.length)) {
                        q.next = 10;
                        break
                    }
                    return q.abrupt("break", 23);
                case 10:
                    j = g[i++];
                    q.next = 17;
                    break;
                case 13:
                    i = g.next();
                    if (!i.done) {
                        q.next = 16;
                        break
                    }
                    return q.abrupt("break", 23);
                case 16:
                    j = i.value;
                case 17:
                    m = j, n = m[0], o = m[1], !a[n] && o !== k && f.push(e["delete"](o));
                case 21:
                    q.next = 7;
                    break;
                case 23:
                    q.next = 25;
                    return b("regeneratorRuntime").awrap(b("Promise").all(f));
                case 25:
                case "end":
                    return q.stop()
            }
        }, null, this)
    }

    function w() {
        return m
    }

    function x() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(s(new Request(k)));
                case 2:
                    a = c.sent;
                    return c.abrupt("return", !!a);
                case 4:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function y() {
        return p()
    }
    g.clearCache = a;
    g.add = q;
    g.addAsNavigate = c;
    g.addAll = e;
    g.put = r;
    g.match = s;
    g.installAllNotInCache = f;
    g.completeCacheInstall = t;
    g.activateCache = u;
    g.purgeCacheExceptFor = v;
    g.isCacheClearing = w;
    g.hasCacheCanary = x;
    g.getKeysForLoggingOnly = y
}), 98);
__d("Random", [], (function(a, b, c, d, e, f) {
    var g = 4294967296;

    function a() {
        var a = new Uint32Array(1);
        return self.crypto.getRandomValues(a)[0] / g
    }

    function b() {
        return Math.floor(this.random() * g)
    }
    f.random = a;
    f.uint32 = b
}), 66);
__d("Env", [], (function(a, b, c, d, e, f) {
    b = {
        ajaxpipe_token: null,
        compat_iframe_token: null,
        iframeKey: "",
        iframeTarget: "",
        iframeToken: "",
        isCQuick: !1,
        start: Date.now(),
        nocatch: !1
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    c = b;
    f["default"] = c
}), 66);
__d("fb-error-lite", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };

    function a(a) {
        var b = new Error(a);
        if (b.stack === void 0) try {
            throw b
        } catch (a) {}
        b.messageFormat = a;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        b.messageParams = d.map(function(a) {
            return String(a)
        });
        b.taalOpcodes = [g.PREVIOUS_FRAME];
        return b
    }
    b = {
        err: a,
        TAALOpcode: g
    };
    f["default"] = b
}), 66);
__d("sprintf", [], (function(a, b, c, d, e, f) {
    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = 0;
        return a.replace(/%s/g, function() {
            return String(c[e++])
        })
    }
    f["default"] = a
}), 66);
__d("invariant", ["Env", "fb-error-lite", "sprintf"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        if (!a) {
            var d = b;
            for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
            if (typeof d === "number") {
                var i = h(d, f),
                    j = i.message,
                    k = i.decoderLink;
                d = j;
                f.unshift(k)
            } else if (d === void 0) {
                d = "Invariant: ";
                for (var l = 0; l < f.length; l++) d += "%s,"
            }
            var m = d,
                n = new Error(m);
            n.name = "Invariant Violation";
            n.messageFormat = d;
            n.messageParams = f.map(function(a) {
                return String(a)
            });
            n.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FRAME];
            n.stack;
            throw n
        }
    }

    function h(a, b) {
        var d = "Minified invariant #" + a + "; %s";
        b.length > 0 && (d += " Params: " + b.map(function(a) {
            return "%s"
        }).join(", "));
        a = c("Env").show_invariant_decoder === !0 ? "visit " + i(a, b) + " to see the full message." : "";
        return {
            message: d,
            decoderLink: a
        }
    }

    function i(a, b) {
        a = "https://www.internalfb.com/intern/invariant/" + a + "/";
        b.length > 0 && (a += "?" + b.map(function(a, b) {
            return "args[" + b + "]=" + encodeURIComponent(String(a))
        }).join("&"));
        return a
    }
    g["default"] = a
}), 98);
__d("ServiceWorkerMessage", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    var i = {};
    self.addEventListener("message", function(a) {
        var b = a.data;
        b.command && i[b.command] && i[b.command]({
            data: b.data || {},
            source: a.source,
            respond: function(b, c) {
                a.ports && a.ports[0] || h(0, 1812), a.ports[0].postMessage({
                    command: b,
                    data: c
                })
            }
        })
    });
    a = function() {
        function a(a, b, c) {
            this.$1 = a, this.$2 = b, this.$3 = c
        }
        var b = a.prototype;
        b.sendTo = function(a) {
            var b = new MessageChannel();
            if (this.$3) {
                var c = this.$3;
                b.port1.onmessage = function(a) {
                    a = a;
                    c(a)
                }
            }
            var d = babelHelpers["extends"]({}, this.$2, {
                command: this.$1
            });
            a.postMessage(d, [b.port2])
        };
        a.addCommandHandler = function(a, b) {
            i[a] && h(0, 12339, a);
            i[a] = b;
            var c = !1;
            return {
                remove: function() {
                    c && h(0, 1814), i[a] = null, c = !0
                }
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("str2rstr", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = "",
            c, d;
        for (var e = 0; e < a.length; e++) c = a.charCodeAt(e), d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, 55296 <= c && c <= 56319 && 56320 <= d && d <= 57343 && (c = 65536 + ((c & 1023) << 10) + (d & 1023), e++), c <= 127 ? b += String.fromCharCode(c) : c <= 2047 ? b += String.fromCharCode(192 | c >>> 6 & 31, 128 | c & 63) : c <= 65535 ? b += String.fromCharCode(224 | c >>> 12 & 15, 128 | c >>> 6 & 63, 128 | c & 63) : c <= 2097151 && (b += String.fromCharCode(240 | c >>> 18 & 7, 128 | c >>> 12 & 63, 128 | c >>> 6 & 63, 128 | c & 63));
        return b
    }
    f["default"] = a
}), 66);
__d("md5", ["str2rstr"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        var c = a[0],
            d = a[1],
            e = a[2],
            f = a[3];
        c = j(c, d, e, f, b[0], 7, -680876936);
        f = j(f, c, d, e, b[1], 12, -389564586);
        e = j(e, f, c, d, b[2], 17, 606105819);
        d = j(d, e, f, c, b[3], 22, -1044525330);
        c = j(c, d, e, f, b[4], 7, -176418897);
        f = j(f, c, d, e, b[5], 12, 1200080426);
        e = j(e, f, c, d, b[6], 17, -1473231341);
        d = j(d, e, f, c, b[7], 22, -45705983);
        c = j(c, d, e, f, b[8], 7, 1770035416);
        f = j(f, c, d, e, b[9], 12, -1958414417);
        e = j(e, f, c, d, b[10], 17, -42063);
        d = j(d, e, f, c, b[11], 22, -1990404162);
        c = j(c, d, e, f, b[12], 7, 1804603682);
        f = j(f, c, d, e, b[13], 12, -40341101);
        e = j(e, f, c, d, b[14], 17, -1502002290);
        d = j(d, e, f, c, b[15], 22, 1236535329);
        c = k(c, d, e, f, b[1], 5, -165796510);
        f = k(f, c, d, e, b[6], 9, -1069501632);
        e = k(e, f, c, d, b[11], 14, 643717713);
        d = k(d, e, f, c, b[0], 20, -373897302);
        c = k(c, d, e, f, b[5], 5, -701558691);
        f = k(f, c, d, e, b[10], 9, 38016083);
        e = k(e, f, c, d, b[15], 14, -660478335);
        d = k(d, e, f, c, b[4], 20, -405537848);
        c = k(c, d, e, f, b[9], 5, 568446438);
        f = k(f, c, d, e, b[14], 9, -1019803690);
        e = k(e, f, c, d, b[3], 14, -187363961);
        d = k(d, e, f, c, b[8], 20, 1163531501);
        c = k(c, d, e, f, b[13], 5, -1444681467);
        f = k(f, c, d, e, b[2], 9, -51403784);
        e = k(e, f, c, d, b[7], 14, 1735328473);
        d = k(d, e, f, c, b[12], 20, -1926607734);
        c = l(c, d, e, f, b[5], 4, -378558);
        f = l(f, c, d, e, b[8], 11, -2022574463);
        e = l(e, f, c, d, b[11], 16, 1839030562);
        d = l(d, e, f, c, b[14], 23, -35309556);
        c = l(c, d, e, f, b[1], 4, -1530992060);
        f = l(f, c, d, e, b[4], 11, 1272893353);
        e = l(e, f, c, d, b[7], 16, -155497632);
        d = l(d, e, f, c, b[10], 23, -1094730640);
        c = l(c, d, e, f, b[13], 4, 681279174);
        f = l(f, c, d, e, b[0], 11, -358537222);
        e = l(e, f, c, d, b[3], 16, -722521979);
        d = l(d, e, f, c, b[6], 23, 76029189);
        c = l(c, d, e, f, b[9], 4, -640364487);
        f = l(f, c, d, e, b[12], 11, -421815835);
        e = l(e, f, c, d, b[15], 16, 530742520);
        d = l(d, e, f, c, b[2], 23, -995338651);
        c = m(c, d, e, f, b[0], 6, -198630844);
        f = m(f, c, d, e, b[7], 10, 1126891415);
        e = m(e, f, c, d, b[14], 15, -1416354905);
        d = m(d, e, f, c, b[5], 21, -57434055);
        c = m(c, d, e, f, b[12], 6, 1700485571);
        f = m(f, c, d, e, b[3], 10, -1894986606);
        e = m(e, f, c, d, b[10], 15, -1051523);
        d = m(d, e, f, c, b[1], 21, -2054922799);
        c = m(c, d, e, f, b[8], 6, 1873313359);
        f = m(f, c, d, e, b[15], 10, -30611744);
        e = m(e, f, c, d, b[6], 15, -1560198380);
        d = m(d, e, f, c, b[13], 21, 1309151649);
        c = m(c, d, e, f, b[4], 6, -145523070);
        f = m(f, c, d, e, b[11], 10, -1120210379);
        e = m(e, f, c, d, b[2], 15, 718787259);
        d = m(d, e, f, c, b[9], 21, -343485551);
        a[0] = s(c, a[0]);
        a[1] = s(d, a[1]);
        a[2] = s(e, a[2]);
        a[3] = s(f, a[3])
    }

    function i(a, b, c, d, e, f) {
        b = s(s(b, a), s(d, f));
        return s(b << e | b >>> 32 - e, c)
    }

    function j(a, b, c, d, e, f, g) {
        return i(b & c | ~b & d, a, b, e, f, g)
    }

    function k(a, b, c, d, e, f, g) {
        return i(b & d | c & ~d, a, b, e, f, g)
    }

    function l(a, b, c, d, e, f, g) {
        return i(b ^ c ^ d, a, b, e, f, g)
    }

    function m(a, b, c, d, e, f, g) {
        return i(c ^ (b | ~d), a, b, e, f, g)
    }

    function n(a) {
        var b = a.length,
            c = [1732584193, -271733879, -1732584194, 271733878],
            d;
        for (d = 64; d <= a.length; d += 64) h(c, o(a.substring(d - 64, d)));
        a = a.substring(d - 64);
        var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (d = 0; d < a.length; d++) e[d >> 2] |= a.charCodeAt(d) << ((d & 3) << 3);
        e[d >> 2] |= 128 << ((d & 3) << 3);
        if (d > 55) {
            h(c, e);
            for (d = 0; d < 16; d++) e[d] = 0
        }
        e[14] = b * 8;
        h(c, e);
        return c
    }

    function o(a) {
        var b = [],
            c = 0;
        while (c < 64) b[c >> 2] = a.charCodeAt(c++) | a.charCodeAt(c++) << 8 | a.charCodeAt(c++) << 16 | a.charCodeAt(c++) << 24;
        return b
    }
    var p = "0123456789abcdef".split("");

    function q(a) {
        var b = "",
            c = 0;
        for (; c < 4; c++) b += p[a >> (c << 3) + 4 & 15] + p[a >> (c << 3) & 15];
        return b
    }

    function r(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b[c] = q(a[c]);
        return b.join("")
    }
    var s = function(a, b) {
        return a + b & 4294967295
    };

    function a(a) {
        if (a == null) return null;
        a = a;
        for (var b = 0; b < a.length; b++)
            if (a[b] > "\x7f") {
                a = c("str2rstr")(a);
                break
            }
        return r(n(a))
    }
    a("hello") != "5d41402abc4b2a76b9719d911017c592" && (s = function(a, b) {
        var c = (a & 65535) + (b & 65535);
        a = (a >> 16) + (b >> 16) + (c >> 16);
        return a << 16 | c & 65535
    });
    g["default"] = a
}), 98);
__d("ServiceWorkerServerData", ["md5"], (function(a, b, c, d, e, f, g) {
    function h(a, b, c) {
        if (self.__swData[a] && self.__swData[a][b] !== void 0) return self.__swData[a][b];
        c === void 0 && (c = null);
        return c
    }

    function a(a, b) {
        var c = h(a, b);
        if (typeof c === "string") return c;
        throw new Error('Server data "' + a + "." + b + '" was expected to be a ' + ('string, instead it had a value of "' + String(c) + '"'))
    }

    function b() {
        return c("md5")(JSON.stringify(self.__swData))
    }
    g.getData = h;
    g.getString = a;
    g.getDataHash = b
}), 98);
__d("ServiceWorkerClientID", ["invariant", "Promise", "Random", "RouteLoadsLogging", "ServiceWorkerMessage", "ServiceWorkerServerData", "regeneratorRuntime"], (function(a, b, c, d, e, f, g, h) {
    var i = new Map(),
        j = d("Random").uint32();

    function k(a, e) {
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    return f.abrupt("return", new(b("Promise"))(function(b) {
                        c("ServiceWorkerMessage").addCommandHandler(a, function(a) {
                            a = a.source;
                            b(a.id);
                            d("RouteLoadsLogging").logCompletionForRoute(e)
                        })
                    }));
                case 1:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function a(a) {
        var b = "r" + j++;
        i.set(b, k(b, a));
        return b
    }

    function e(a) {
        i.has(a) || h(0, 12325, a);
        var b = d("ServiceWorkerServerData").getString("ClientIDInformer", "code");
        return "<script>" + b + ("window.__ServiceWorkerClientIDInformer.post('" + a + "');") + "</script>"
    }

    function f(a) {
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    return b.abrupt("return", i.get(a));
                case 1:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }
    g.generateRequestID = a;
    g.getClientIDInformerCode = e;
    g.getClientID = f
}), 98);
__d("ServiceWorkerConslidatedHeader", ["ServiceWorkerServerData"], (function(a, b, c, d, e, f, g) {
    function a() {
        return d("ServiceWorkerServerData").getString("ConsolidatedHeader", "header_name")
    }

    function b(a) {
        var b = d("ServiceWorkerServerData").getData("ConsolidatedHeader", "key_names", {});
        if (!b || typeof b !== "object" || !b[a]) throw new Error("missing key name!");
        return String(b[a])
    }
    g.getHeaderName = a;
    g.getKey = b
}), 98);
__d("ServiceWorkerVersion", ["ServiceWorkerServerData"], (function(a, b, c, d, e, f, g) {
    function h() {
        return Number(d("ServiceWorkerServerData").getData("SiteData", "revision", -1))
    }

    function a() {
        return String(h()) + ":" + d("ServiceWorkerServerData").getDataHash()
    }

    function b(a, b) {
        b = b.includeCurrent;
        a = /^([0-9]*):[a-f0-9]{32}$/.exec(a);
        return !a || !a[1] ? !1 : b ? Number(a[1]) <= h() : Number(a[1]) < h()
    }
    g.getCurrentRev = h;
    g.getInstanceKey = a;
    g.isInstanceKeyFromEarlier = b
}), 98);
__d("ServiceWorkerPreload", ["Promise", "ServiceWorkerAsyncStorage", "ServiceWorkerConslidatedHeader", "ServiceWorkerServerData", "ServiceWorkerVersion", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "preload_queue",
        i = {};

    function j() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(self.registration.navigationPreload.getState());
                case 2:
                    a = c.sent;
                    if (a.enabled) {
                        c.next = 9;
                        break
                    }
                    c.next = 6;
                    return b("regeneratorRuntime").awrap(self.registration.navigationPreload.enable());
                case 6:
                    c.next = 8;
                    return b("regeneratorRuntime").awrap(self.registration.navigationPreload.getState());
                case 8:
                    a = c.sent;
                case 9:
                    return c.abrupt("return", a);
                case 10:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function k() {
        return !!self.registration.navigationPreload
    }

    function a() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    if (self.registration.navigationPreload) {
                        c.next = 2;
                        break
                    }
                    return c.abrupt("return", !1);
                case 2:
                    c.next = 4;
                    return b("regeneratorRuntime").awrap(self.registration.navigationPreload.getState());
                case 4:
                    a = c.sent;
                    return c.abrupt("return", a && a.enabled);
                case 6:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function c(a) {
        var c, e, f, g, j;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    c = Object.entries(a);
                    for (e = 0; e < c.length; e++) f = c[e], g = f[0], j = f[1], i[g] = j;
                    k.next = 4;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").setItem(h + d("ServiceWorkerVersion").getInstanceKey(), i));
                case 4:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }

    function e() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    if (k()) {
                        a.next = 4;
                        break
                    }
                    a.next = 3;
                    return b("regeneratorRuntime").awrap(n());
                case 3:
                    return a.abrupt("return");
                case 4:
                    a.next = 6;
                    return b("regeneratorRuntime").awrap(j());
                case 6:
                    a.next = 8;
                    return b("regeneratorRuntime").awrap(l());
                case 8:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function f() {
        m({})
    }

    function l() {
        var a, c;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem(h + d("ServiceWorkerVersion").getInstanceKey()));
                case 2:
                    a = e.sent;
                    (!a || typeof a !== "object") && (a = {});
                    c = new RegExp("^" + h + "(.*)$");
                    e.next = 7;
                    return b("regeneratorRuntime").awrap(b("Promise").all([m(a), d("ServiceWorkerAsyncStorage").removeAllItemWithPredicate(function(a) {
                        a = c.exec(a);
                        return !a || !a[1] ? !1 : d("ServiceWorkerVersion").isInstanceKeyFromEarlier(a[1], {
                            includeCurrent: !0
                        })
                    })]));
                case 7:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function m(a) {
        var c, e, f, g, h, i;
        return b("regeneratorRuntime").async(function(j) {
            while (1) switch (j.prev = j.next) {
                case 0:
                    if (k()) {
                        j.next = 4;
                        break
                    }
                    j.next = 3;
                    return b("regeneratorRuntime").awrap(n());
                case 3:
                    return j.abrupt("return");
                case 4:
                    c = d("ServiceWorkerConslidatedHeader").getKey("SW_SVN");
                    e = d("ServiceWorkerVersion").getCurrentRev();
                    a[c] = e;
                    f = d("ServiceWorkerConslidatedHeader").getKey("SW_SPLASH_SCREEN_ENABLED");
                    g = d("ServiceWorkerServerData").getData("SplashScreenData", "splash_screen_enabled", !1);
                    g && (a[f] = 1);
                    h = d("ServiceWorkerConslidatedHeader").getKey("SW_SITE_TYPE");
                    i = d("ServiceWorkerServerData").getData("SiteData", "siteType");
                    typeof i === "string" && (a[h] = i);
                    j.next = 15;
                    return b("regeneratorRuntime").awrap(self.registration.navigationPreload.setHeaderValue(JSON.stringify(a)));
                case 15:
                case "end":
                    return j.stop()
            }
        }, null, this)
    }

    function n() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    if (!self.registration.navigationPreload) {
                        a.next = 3;
                        break
                    }
                    a.next = 3;
                    return b("regeneratorRuntime").awrap(self.registration.navigationPreload.disable());
                case 3:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function o() {
        return d("ServiceWorkerServerData").getString("PreloadData", "responseHeaderName")
    }
    g.isEnabled = k;
    g.isRegistered = a;
    g.queueToHeaderToStorageForActivate = c;
    g.activate = e;
    g.clearFetchRouteHeader = f;
    g._activateHeaderFromStorage = l;
    g._setHeader = m;
    g.disable = n;
    g.getResponseHeaderName = o
}), 98);
__d("TimingAnnotations", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {}
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            return this
        };
        b.addSetAnnotation = function(a, b) {
            return this
        };
        b.addSetElement = function(a, b) {
            return this
        };
        b.registerOnBeforeSend = function(a) {
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            return this
        };
        b.addVectorElement = function(a, b) {
            return this
        };
        return a
    }();
    b = function() {
        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = []
        }
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            this.$2 = this.$2 || new Map();
            this.$2.set(a, b);
            return this
        };
        b.addSetAnnotation = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            b.forEach(function(a) {
                return d.add(a)
            });
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addSetElement = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            d.add(b);
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            this.$3 = this.$3 || new Map();
            this.$3.set(a, b);
            return this
        };
        b.addVectorElement = function(a, b) {
            var c = this.$3 = this.$3 || new Map(),
                d = this.$3.get(a) || [];
            d.push(b);
            c.set(a, d);
            return this
        };
        b.registerOnBeforeSend = function(a) {
            this.$4.push(a);
            return this
        };
        b.prepareToSend = function() {
            var a = this;
            this.$4.forEach(function(b) {
                return b(a)
            });
            this.$4 = [];
            var b = {};
            if (this.$1 != null)
                for (var c = this.$1, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var g = f[0];
                    f = f[1];
                    b[g] = Array.from(f.values())
                }
            g = {};
            if (this.$2 != null)
                for (var f = this.$2, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (e) {
                        if (d >= f.length) break;
                        c = f[d++]
                    } else {
                        d = f.next();
                        if (d.done) break;
                        c = d.value
                    }
                    c = c;
                    var h = c[0];
                    c = c[1];
                    g[h] = c
                }
            h = {};
            if (this.$3 != null)
                for (var c = this.$3, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var i = f[0];
                    f = f[1];
                    h[i] = f
                }
            return {
                setProps: b,
                stringProps: g,
                vectorProps: h
            }
        };
        a.combine = function(a, b) {
            var c;
            a != null && b != null ? (a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps), a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps), c = a) : a != null ? c = a : b != null && (c = b);
            return c
        };
        return a
    }();
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    f["default"] = b
}), 66);
__d("ServiceWorkerProfilerTypes", [], (function(a, b, c, d, e, f, g) {
    a = {
        START: "start",
        PARSED: "parsed",
        INITIALIZED: "init",
        FIRST_EVENT: "firstEvent",
        ACTIVATE_START: "activate_start",
        RESOURCE_CACHE_ACTIVATE_START: "resource_cache_activate_start",
        RESOURCE_CACHE_ACTIVATE_END: "resource_cache_activate_end",
        ACTIVATE_END: "activate_end"
    };
    b = {
        FETCH_START: "start",
        ROUTE_CONFIG_CACHE_LOOKUP_START: "routeLookupStart",
        ROUTE_CONFIG_CACHE_LOOKUP_END: "routeLookupEnd",
        BEGIN_RESPONSE: "beginResponse",
        CACHE_FLUSH: "cacheFlush",
        RESOURCE_CACHE_FETCH_START: "resourceCacheFetchStart",
        RESOURCE_CACHE_FETCH_END: "resourceCacheFetchEnd",
        NETWORK_REQUEST_START: "requestStart",
        NETWORK_REQUEST_END: "requestEnd",
        NETWORK_RESPONSE_START: "responseStart",
        NETWORK_RESPONSE_END: "responseEnd",
        FETCH_END: "end"
    };
    g.WorkerTiming = a;
    g.FetchTiming = b
}), 98);
__d("performanceSWStart", [], (function(a, b, c, d, e, f) {
    var g = Date.now() - self.performance.now();

    function a() {
        return g
    }
    f["default"] = a
}), 66);
__d("performanceAbsoluteNow", ["performanceSWStart"], (function(a, b, c, d, e, f) {
    if (self.performance && self.performance.now) {
        var g = b("performanceSWStart")();
        a = function() {
            return self.performance.now() + g
        }
    } else a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("clearTimeout", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = self.clearTimeout;
    f["default"] = a
}), 66);
__d("setTimeout", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = self.setTimeout;
    f["default"] = a
}), 66);
__d("promiseWithTimeout", ["Promise", "clearTimeout", "regeneratorRuntime", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        var d = a.prototype;
        d.$5 = function(a) {
            var d;
            return b("regeneratorRuntime").async(function(e) {
                while (1) switch (e.prev = e.next) {
                    case 0:
                        e.next = 2;
                        return b("regeneratorRuntime").awrap(a);
                    case 2:
                        d = e.sent;
                        this.$1 && (c("clearTimeout")(this.$1), this.$1 = null);
                        return e.abrupt("return", d);
                    case 5:
                    case "end":
                        return e.stop()
                }
            }, null, this)
        };

        function a(a, d) {
            var e = this;
            this.$4 = new(b("Promise"))(function(b, f) {
                var g = !1;
                e.$1 = c("setTimeout")(function() {
                    if (g) return;
                    g = !0;
                    (d.rejectOnTimeout ? f : b)()
                }, d.timeout);
                e.$5(a).then(function(a) {
                    if (g) return;
                    g = !0;
                    b(a)
                })["catch"](function(a) {
                    if (g) return;
                    g = !0;
                    f(a)
                })
            })
        }
        d.getPromise = function() {
            return this.$4
        };
        return a
    }();

    function a(a, b) {
        return new h(a, b).getPromise()
    }
    g["default"] = a
}), 98);
__d("ServiceWorkerRequestTimings", ["Promise", "TimingAnnotations", "performanceAbsoluteNow", "promiseWithTimeout"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a() {
            var a = this;
            this.$2 = new Map();
            this.$1 = new(c("TimingAnnotations"))();
            this.$3 = new(b("Promise"))(function(b, c) {
                a.$4 = b, a.$5 = c
            });
            this.$6 = new(b("Promise"))(function(b, c) {
                a.$7 = b, a.$8 = c
            })
        }
        var d = a.prototype;
        d.getLoggingFinishedPromise = function() {
            return this.$3
        };
        d.inform = function(a) {
            var b = {
                ts: c("performanceAbsoluteNow")(),
                annotations: new(c("TimingAnnotations"))()
            };
            this.$2.set(a, b);
            return b.annotations
        };
        d.complete = function() {
            this.$4(this)
        };
        d.loggingRead = function() {
            this.$7()
        };
        d.getLoggingReadPromise = function() {
            return c("promiseWithTimeout")(this.$6, {
                timeout: 3e5
            })
        };
        d.abort = function() {
            this.$5()
        };
        d.getEvents = function() {
            return this.$2
        };
        d.getAnnotations = function() {
            return this.$1
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("genClientWindows", ["regeneratorRuntime"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c, d, e, f;
        return b("regeneratorRuntime").async(function(g) {
            while (1) switch (g.prev = g.next) {
                case 0:
                    c = a === void 0 ? {} : a, d = c.includeUncontrolled, e = c.focusedCheck;
                    g.next = 3;
                    return b("regeneratorRuntime").awrap(self.clients.matchAll({
                        type: "window",
                        includeUncontrolled: !!d
                    }));
                case 3:
                    f = g.sent;
                    return g.abrupt("return", f.filter(function(a) {
                        return a.frameType === "top-level" && (!e || a.focused && a.visibilityState === "visible") && a.focus
                    }));
                case 5:
                case "end":
                    return g.stop()
            }
        }, null, this)
    }
    f["default"] = a
}), 66);
__d("promiseDone", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        var d = arguments.length > 1 ? a.then(b, c) : a;
        d.then(null, function(a) {
            setTimeout(function() {
                throw a
            }, 0)
        })
    }
    f["default"] = a
}), 66);
__d("Artillery4SW", ["invariant", "Promise", "RouteLoadsLogging", "ServiceWorkerCacheStorage", "ServiceWorkerClientID", "ServiceWorkerMessage", "ServiceWorkerPreload", "ServiceWorkerProfilerTypes", "ServiceWorkerRequestTimings", "ServiceWorkerResourceCacheResourceFetchEvent", "ServiceWorkerRouteConfigStorage", "TimingAnnotations", "genClientWindows", "performanceAbsoluteNow", "performanceSWStart", "promiseDone", "regeneratorRuntime"], (function(a, b, c, d, e, f, g, h) {
    var i = new Map(),
        j = new Map(),
        k = new Map(),
        l = 30,
        m = [];

    function n(a) {
        var b = {};
        a.forEach(function(a, c) {
            b[c] = {
                ts: a.ts,
                annotations: a.annotations.prepareToSend()
            }
        });
        return b
    }
    c("ServiceWorkerMessage").addCommandHandler("asw-pageTraceDataRequest", function(a) {
        var e, f, g, h, j, l, o, p, q, r, s, t, u, v, w;
        return b("regeneratorRuntime").async(function(x) {
            while (1) switch (x.prev = x.next) {
                case 0:
                    e = a.source, f = a.respond, g = a.data;
                    h = k.get(e.id);
                    j = null;
                    if (!h) {
                        x.next = 7;
                        break
                    }
                    x.next = 6;
                    return b("regeneratorRuntime").awrap(h.getLoggingFinishedPromise());
                case 6:
                    j = x.sent;
                case 7:
                    l = m.map(function(a) {
                        return {
                            timings: n(a.getEvents()),
                            annotations: a.getAnnotations().prepareToSend()
                        }
                    });
                    m = [];
                    x.next = 11;
                    return b("regeneratorRuntime").awrap(b("Promise").all([d("ServiceWorkerCacheStorage").hasCacheCanary(), c("genClientWindows")(), d("ServiceWorkerPreload").isRegistered()]));
                case 11:
                    o = x.sent;
                    p = o[0];
                    q = o[1];
                    r = o[2];
                    s = new(c("TimingAnnotations"))();
                    s.addStringAnnotation("hasSWCache", p ? "true" : "false");
                    s.addStringAnnotation("controlledWindows", String(q.length));
                    s.addStringAnnotation("navPreloadRegistered", String(r));
                    s.addStringAnnotation("navPreloadEnabled", String(d("ServiceWorkerPreload").isEnabled()));
                    s.addStringAnnotation("swFetchRouteHome", String(d("ServiceWorkerRouteConfigStorage").getRouteConfigState("HomePage")));
                    t = d("ServiceWorkerRouteConfigStorage").getRouteConfigAge("HomePage");
                    t && s.addStringAnnotation("swAgeRouteHome", String(t));
                    s.addStringAnnotation("swLoadCountRouteHome", String(d("RouteLoadsLogging").getLoadCountForRoute("HomePage")));
                    u = d("ServiceWorkerResourceCacheResourceFetchEvent").getPercentSuccess(e.id);
                    if (!(g && g.fullSWEFLog)) {
                        x.next = 32;
                        break
                    }
                    x.next = 28;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerResourceCacheResourceFetchEvent").getFullCacheHitData(e.id));
                case 28:
                    v = x.sent;
                    v && s.addStringAnnotation("fullCacheHitData", v);
                    x.next = 33;
                    break;
                case 32:
                    d("ServiceWorkerResourceCacheResourceFetchEvent").clearFullCacheHitData(e.id);
                case 33:
                    u !== null && s.addStringAnnotation("efRSRCSuccess", String(u)), w = {
                        workerTimings: n(i),
                        fetchTimings: j != null ? n(j.getEvents()) : {},
                        resourceFetchTimings: l,
                        annotations: s.prepareToSend()
                    }, f("trace", {
                        workerPerf: w
                    }), h && h.loggingRead(), k["delete"](e.id);
                case 38:
                case "end":
                    return x.stop()
            }
        }, null, this)
    });

    function o(a, c) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerClientID").getClientID(a));
                case 2:
                    e = f.sent, k.set(e, c);
                case 4:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function p(a) {
        a == null && (a = c("performanceAbsoluteNow")());
        return {
            ts: a,
            annotations: new(c("TimingAnnotations"))()
        }
    }

    function q(a, b) {
        i.has(a) && h(0, 471, a);
        b = p(b);
        i.set(a, b);
        return b
    }

    function a() {
        q(d("ServiceWorkerProfilerTypes").WorkerTiming.START, c("performanceSWStart")()), q(d("ServiceWorkerProfilerTypes").WorkerTiming.PARSED)
    }

    function e() {
        q(d("ServiceWorkerProfilerTypes").WorkerTiming.INITIALIZED)
    }

    function f() {
        q(d("ServiceWorkerProfilerTypes").WorkerTiming.ACTIVATE_START)
    }

    function r() {
        q(d("ServiceWorkerProfilerTypes").WorkerTiming.ACTIVATE_END)
    }

    function s() {
        q(d("ServiceWorkerProfilerTypes").WorkerTiming.RESOURCE_CACHE_ACTIVATE_START)
    }

    function t() {
        q(d("ServiceWorkerProfilerTypes").WorkerTiming.RESOURCE_CACHE_ACTIVATE_END)
    }

    function u(a) {
        i.has(d("ServiceWorkerProfilerTypes").WorkerTiming.FIRST_EVENT) || q(d("ServiceWorkerProfilerTypes").WorkerTiming.FIRST_EVENT, null).annotations.addStringAnnotation("event", a)
    }

    function v(a, b) {
        D(a, "resource").inform(b)
    }

    function w(a, b) {
        D(a, "navigate").inform(b)
    }

    function x(a) {
        D(a, "navigate").complete()
    }

    function y(a) {
        return D(a, "navigate").getLoggingReadPromise()
    }

    function z(a) {
        a = D(a, "resource");
        a.inform(d("ServiceWorkerProfilerTypes").FetchTiming.FETCH_END);
        a.complete()
    }

    function A(a) {
        return D(a, "resource").getLoggingReadPromise()
    }

    function B(a, b, c) {
        a = j.get(a);
        a && a.getAnnotations().addStringAnnotation(b, c)
    }

    function C(a, b) {
        if (j.has(a)) return;
        var d = new(c("ServiceWorkerRequestTimings"))();
        j.set(a, d);
        c("promiseDone")(d.getLoggingFinishedPromise().then(function() {
            return j["delete"](a)
        }));
        b === "navigate" ? o(a, d) : c("promiseDone")(d.getLoggingFinishedPromise().then(function(a) {
            m.length === l && m.shift(), m.push(a)
        }), function() {
            d.loggingRead()
        })
    }

    function D(a, b) {
        C(a, b);
        b = j.get(a);
        b != null || h(0, 472);
        return b
    }
    g._makePoint = p;
    g._informOnlyOnce = q;
    g.informParsed = a;
    g.informInitialized = e;
    g.informActivateStart = f;
    g.informActivateEnd = r;
    g.informResourceCacheActivateStart = s;
    g.informResourceCacheActivateEnd = t;
    g.informEventOccurred = u;
    g.informResourceRequestEvent = v;
    g.informNavigateRequestEvent = w;
    g.informNavigateRequestCompleted = x;
    g.waitForNavigateRequestLogging = y;
    g.informResourceRequestCompleted = z;
    g.waitForResourceRequestLogging = A;
    g.addStringAnnotationToRequest = B;
    g._maybeInitializeRequest = C;
    g.getRequestPerf = D
}), 98);
__d("ServiceWorkerBase", ["Artillery4SW", "Promise", "ServiceWorkerAsyncStorage", "ServiceWorkerCacheStorage", "ServiceWorkerPreload", "ServiceWorkerServerData", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = new Map(),
        i = !1;

    function j() {
        var a = d("ServiceWorkerServerData").getData("SiteData", "expire_time", null);
        if (typeof a !== "number") return !1;
        if (Date.now() > a) {
            self.registration.update();
            return !0
        }
        return !1
    }

    function k(a) {
        var b = a.type.toLowerCase();
        d("Artillery4SW").informEventOccurred(b);
        b = h.get(b);
        b && b(a)
    }

    function l() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    a = self.registration.active || self.registration.waiting || self.registration.installing;
                    if (!(a && a.scriptURL)) {
                        c.next = 4;
                        break
                    }
                    c.next = 4;
                    return b("regeneratorRuntime").awrap(fetch(new Request(a.scriptURL)));
                case 4:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function m() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    n("fetch");
                    i = !0;
                    if (!self.registration.pushManager) {
                        c.next = 9;
                        break
                    }
                    c.next = 5;
                    return b("regeneratorRuntime").awrap(self.registration.pushManager.getSubscription());
                case 5:
                    a = c.sent;
                    if (!a) {
                        c.next = 9;
                        break
                    }
                    c.next = 9;
                    return b("regeneratorRuntime").awrap(a.unsubscribe());
                case 9:
                    c.next = 11;
                    return b("regeneratorRuntime").awrap(b("Promise").all([d("ServiceWorkerAsyncStorage").purge(), d("ServiceWorkerCacheStorage").clearCache(), d("ServiceWorkerPreload").disable()]));
                case 11:
                    c.next = 13;
                    return b("regeneratorRuntime").awrap(registration.unregister());
                case 13:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function a(a, b) {
        a = a.toLowerCase();
        if (a === "fetch" && (j() || i)) return;
        if (h.has(a)) throw new Error("Listener already set for event " + a);
        h.set(a, b);
        self.addEventListener(a, k)
    }

    function n(a) {
        h.has(a) && (self.removeEventListener(a, k), h["delete"](a))
    }

    function c() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(b("Promise").all([l(), m()]));
                case 2:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function e() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(l());
                case 2:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function f() {
        return i
    }

    function o() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    if (self.registration.update) {
                        a.next = 2;
                        break
                    }
                    return a.abrupt("return");
                case 2:
                    a.next = 4;
                    return b("regeneratorRuntime").awrap(l());
                case 4:
                    self.registration.update();
                case 5:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }
    g.setEventListener = a;
    g.unsetEventListener = n;
    g.genUnregisterSelf = c;
    g.clearSWFileCache = e;
    g.isDisabled = f;
    g.attemptSWUpdate = o
}), 98);
__d("ServiceWorkerResourceCacheResourceFetchEvent", ["Artillery4SW", "Promise", "Random", "ServiceWorkerCacheStorage", "ServiceWorkerProfilerTypes", "promiseDone", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = d("Random").uint32(),
        i = {},
        j = {},
        k = {};

    function l(e, f, g, h) {
        var i;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    k.prev = 0;
                    d("Artillery4SW").informResourceRequestEvent(h, d("ServiceWorkerProfilerTypes").FetchTiming.RESOURCE_CACHE_FETCH_START);
                    k.next = 4;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerCacheStorage").match(e));
                case 4:
                    i = k.sent;
                    d("Artillery4SW").informResourceRequestEvent(h, d("ServiceWorkerProfilerTypes").FetchTiming.RESOURCE_CACHE_FETCH_END);
                    k.next = 10;
                    break;
                case 8:
                    k.prev = 8, k.t0 = k["catch"](0);
                case 10:
                    g && (j[g] || (j[g] = 0), i ? (m(g, e instanceof Request ? e.url : e, "loaded_from_cache"), j[g]++) : m(g, e instanceof Request ? e.url : e, "not_loaded_from_cache"));
                    i || (d("Artillery4SW").informResourceRequestEvent(h, d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_REQUEST_START), i = a.fetch(f), c("promiseDone")(i.then(function() {
                        return d("Artillery4SW").informResourceRequestEvent(h, d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_REQUEST_END)
                    })));
                    return k.abrupt("return", i);
                case 13:
                case "end":
                    return k.stop()
            }
        }, null, this, [
            [0, 8]
        ])
    }

    function m(a, b, c) {
        k[a] || (k[a] = {}), k[a][b.toString()] = c
    }

    function n(a, b, c, e) {
        b && m(b, a, "opening_from_cache");
        return {
            response: l(a.toString(), c, b, e),
            waitUntil: d("Artillery4SW").waitForResourceRequestLogging(e)
        }
    }

    function e(a) {
        var e = "r" + h++;
        d("Artillery4SW").informResourceRequestEvent(e, d("ServiceWorkerProfilerTypes").FetchTiming.FETCH_START);
        d("Artillery4SW").addStringAnnotationToRequest(e, "resource_uri", a.request.url);
        var f = new URL(a.request.url);
        d("Artillery4SW").addStringAnnotationToRequest(e, "resource_name", f.pathname.substr(f.pathname.lastIndexOf("/")));
        if (f.hash !== "#sw-c") return null;
        i[a.clientId] || (i[a.clientId] = 0);
        i[a.clientId]++;
        f.hash = "";
        if (d("ServiceWorkerCacheStorage").isCacheClearing()) {
            m(a.clientId, f, "cache_clearing");
            d("Artillery4SW").informResourceRequestCompleted(e);
            return null
        }
        f = n(f, a.clientId, a.request, e);
        if (f) {
            a = b("Promise").resolve();
            f.response instanceof b("Promise") && (a = f.response);
            c("promiseDone")(a.then(function() {
                return d("Artillery4SW").informResourceRequestCompleted(e)
            }))
        }
        return f
    }

    function f(a) {
        if (!i[a]) return null;
        var b = j[a] || 0;
        delete j[a];
        var c = i[a];
        delete i[a];
        return b / c
    }

    function o(a) {
        var c, e, f, g, h, i, j;
        return b("regeneratorRuntime").async(function(l) {
            while (1) switch (l.prev = l.next) {
                case 0:
                    l.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerCacheStorage").getKeysForLoggingOnly());
                case 2:
                    c = l.sent, (e = c.keys(), f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]());
                case 4:
                    if (!f) {
                        l.next = 10;
                        break
                    }
                    if (!(g >= e.length)) {
                        l.next = 7;
                        break
                    }
                    return l.abrupt("break", 19);
                case 7:
                    h = e[g++];
                    l.next = 14;
                    break;
                case 10:
                    g = e.next();
                    if (!g.done) {
                        l.next = 13;
                        break
                    }
                    return l.abrupt("break", 19);
                case 13:
                    h = g.value;
                case 14:
                    i = h, k[a] || (k[a] = {}), k[a][i] || (k[a][i] = "in_cache_but_not_used");
                case 17:
                    l.next = 4;
                    break;
                case 19:
                    if (k[a]) {
                        l.next = 21;
                        break
                    }
                    return l.abrupt("return", "");
                case 21:
                    j = JSON.stringify(k[a]);
                    delete k[a];
                    return l.abrupt("return", j);
                case 24:
                case "end":
                    return l.stop()
            }
        }, null, this)
    }

    function p(a) {
        delete k[a]
    }
    g.fetch = e;
    g.getPercentSuccess = f;
    g.getFullCacheHitData = o;
    g.clearFullCacheHitData = p
}), 98);
__d("ServiceWorkerRouteConfigStorage", ["Promise", "ServiceWorkerAsyncStorage", "ServiceWorkerBase", "ServiceWorkerPreload", "ServiceWorkerServerData", "ServiceWorkerVersion", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "route_configs",
        i = "routes_to_save",
        j = new Map(),
        k = new Map(),
        l = [];

    function m(a, b) {
        a = h + ":" + a;
        b && (a += ":installing:" + d("ServiceWorkerVersion").getInstanceKey());
        return a
    }

    function n() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").setItem("" + i + d("ServiceWorkerVersion").getInstanceKey(), l));
                case 2:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function o(a, c) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    e = null;
                    f.prev = 1;
                    f.next = 4;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem(m(a, c)));
                case 4:
                    e = f.sent;
                    f.next = 9;
                    break;
                case 7:
                    f.prev = 7, f.t0 = f["catch"](1);
                case 9:
                    return f.abrupt("return", e);
                case 10:
                case "end":
                    return f.stop()
            }
        }, null, this, [
            [1, 7]
        ])
    }

    function p(a, c, e) {
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").setItem(m(a, e), c));
                case 2:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function q(a, c) {
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").removeItem(m(a, c)));
                case 2:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function r(a) {
        var c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(o(a, !0));
                case 2:
                    c = d.sent;
                    if (c) {
                        d.next = 5;
                        break
                    }
                    return d.abrupt("return");
                case 5:
                    d.next = 7;
                    return b("regeneratorRuntime").awrap(b("Promise").all([q(a, !0), p(a, c, !1)]));
                case 7:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function a(a) {
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(b("Promise").all(a.map(function(a) {
                        return v(a)
                    })));
                case 2:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function c(a, c) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    j.set(a, c);
                    l.push(a);
                    e = [p(a, c, !0), n()];
                    d("ServiceWorkerPreload").isEnabled() && e.push(d("ServiceWorkerPreload").queueToHeaderToStorageForActivate(c.fetchHeader));
                    f.next = 6;
                    return b("regeneratorRuntime").awrap(b("Promise").all(e));
                case 6:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function e() {
        var a, c, e, f, g, j, k, l, m, n;
        return b("regeneratorRuntime").async(function(o) {
            while (1) switch (o.prev = o.next) {
                case 0:
                    a = [];
                    c = d("ServiceWorkerVersion").getInstanceKey();
                    o.next = 4;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem("" + i + c));
                case 4:
                    e = o.sent;
                    if (Array.isArray(e)) {
                        o.next = 7;
                        break
                    }
                    throw new Error("Invalid routes storage format. Expected an Array got " + typeof e);
                case 7:
                    f = e, g = Array.isArray(f), j = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                case 8:
                    if (!g) {
                        o.next = 14;
                        break
                    }
                    if (!(j >= f.length)) {
                        o.next = 11;
                        break
                    }
                    return o.abrupt("break", 22);
                case 11:
                    k = f[j++];
                    o.next = 18;
                    break;
                case 14:
                    j = f.next();
                    if (!j.done) {
                        o.next = 17;
                        break
                    }
                    return o.abrupt("break", 22);
                case 17:
                    k = j.value;
                case 18:
                    l = k, typeof l === "string" && a.push(r(l));
                case 20:
                    o.next = 8;
                    break;
                case 22:
                    o.next = 24;
                    return b("regeneratorRuntime").awrap(b("Promise").all(a));
                case 24:
                    m = new RegExp("^" + i + "(.*)$");
                    n = new RegExp("^" + h + ":[a-zA-Z0-9]*:installing:(.*)");
                    o.next = 28;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").removeAllItemWithPredicate(function(a) {
                        var b = m.exec(a);
                        if (b && b[1]) return d("ServiceWorkerVersion").isInstanceKeyFromEarlier(b[1], {
                            includeCurrent: !0
                        });
                        b = n.exec(a);
                        return b && b[1] ? d("ServiceWorkerVersion").isInstanceKeyFromEarlier(b[1], {
                            includeCurrent: !0
                        }) : !1
                    }));
                case 28:
                case "end":
                    return o.stop()
            }
        }, null, this)
    }

    function f(a) {
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    d("ServiceWorkerPreload").isEnabled() && d("ServiceWorkerPreload").clearFetchRouteHeader();
                    d("ServiceWorkerBase").attemptSWUpdate();
                    j["delete"](a);
                    c.next = 5;
                    return b("regeneratorRuntime").awrap(q(a, !1));
                case 5:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function s(a) {
        return j.has(a) ? j.get(a) : void 0
    }

    function t(a) {
        if (k.has(a)) return "FETCHING";
        return j.has(a) ? "ACTIVE" : "DEACTIVATED"
    }

    function u(a) {
        a = j.get(a);
        if (!a) return null;
        var b = d("ServiceWorkerServerData").getData("SRPinningData", "pinning_ttl", 0);
        return !b || !a.expireAfter ? null : Date.now() - (Number(a.expireAfter) - Number(b) * 1e3)
    }

    function v(a) {
        var c, d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    if (!k.has(a)) {
                        e.next = 4;
                        break
                    }
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(k.get(a));
                case 3:
                    return e.abrupt("return", s(a));
                case 4:
                    c = o(a, !1);
                    k.set(a, c);
                    e.next = 8;
                    return b("regeneratorRuntime").awrap(c);
                case 8:
                    d = e.sent;
                    d && j.set(a, d);
                    k["delete"](a);
                    return e.abrupt("return", d);
                case 12:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }
    g.initRoutes = a;
    g.installConfigForRoute = c;
    g.activateRoutes = e;
    g.clearConfigForRoute = f;
    g.getConfigForRoute = s;
    g.getRouteConfigState = t;
    g.getRouteConfigAge = u;
    g.genConfigForRoute = v
}), 98);
__d("BrowserPushCommands", [], (function(a, b, c, d, e, f) {
    a = "browser_push_ack";
    b = "browser_push_redirect";
    c = "browser_push_window_visible";
    d = {
        ACK: a,
        REDIRECT: b,
        WINDOW_VISIBLE: c
    };
    e.exports = d
}), null);
__d("ErrorPubSub", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorPubSub
}), 98);
__d("ServiceWorkerCacheResponse", ["ServiceWorkerServerData"], (function(a, b, c, d, e, f, g) {
    function a() {
        var a = d("ServiceWorkerServerData").getData("CacheResponseTypes", "response_types", {});
        return a
    }

    function b() {
        return d("ServiceWorkerServerData").getString("CacheResponseTypes", "response_header")
    }
    g.getResponseTypes = a;
    g.getResponseHeaderName = b
}), 98);
__d("ServiceWorkerClientChromeConfig", ["ServiceWorkerBase", "ServiceWorkerServerData"], (function(a, b, c, d, e, f, g) {
    function h() {
        var a = d("ServiceWorkerServerData").getData("QuickExperimentData", "type", "off");
        return a === "client_chrome" && !d("ServiceWorkerBase").isDisabled()
    }

    function a(a) {
        return h() && typeof a.cachedClientChromeData !== "string"
    }
    g.isEnabled = h;
    g.hasInvalidCache = a
}), 98);
__d("MaybeSymbol", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = a.Symbol ? a.Symbol : null;
    c = b;
    f["default"] = c
}), 66);
__d("URLSearchParams", ["MaybeSymbol"], (function(a, b, c, d, e, f, g) {
    var h = /\+/g,
        i = /[!\'()*]/g,
        j = /%20/g,
        k = c("MaybeSymbol") ? c("MaybeSymbol").iterator : null;

    function l(a) {
        return encodeURIComponent(a).replace(j, "+").replace(i, function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        })
    }

    function m(a) {
        return decodeURIComponent((a = a) != null ? a : "").replace(h, " ")
    }

    function n(a) {
        var b = a.slice(0),
            c = {
                next: function() {
                    var a = b.length,
                        c = b.shift();
                    return {
                        done: c === void 0 && a <= 0,
                        value: c
                    }
                }
            };
        k && (c[k] = function() {
            return c
        });
        return c
    }
    a = function() {
        function a(a) {
            a === void 0 && (a = "");
            a = a;
            a[0] === "?" && (a = a.substr(1));
            this.$1 = a.length ? a.split("&").map(function(a) {
                a = a.split("=");
                var b = a[0];
                a = a[1];
                return [m(b), m(a)]
            }) : []
        }
        var b = a.prototype;
        b.append = function(a, b) {
            this.$1.push([a, String(b)])
        };
        b["delete"] = function(a) {
            for (var b = 0; b < this.$1.length; b++) this.$1[b][0] === a && (this.$1.splice(b, 1), b--)
        };
        b.entries = function() {
            if (k) return this.$1[k]();
            var a = this.$1.slice(0);
            return n(a)
        };
        b.get = function(a) {
            for (var b = 0, c = this.$1.length; b < c; b++)
                if (this.$1[b][0] === a) return this.$1[b][1];
            return null
        };
        b.getAll = function(a) {
            var b = [];
            for (var c = 0, d = this.$1.length; c < d; c++) this.$1[c][0] === a && b.push(this.$1[c][1]);
            return b
        };
        b.has = function(a) {
            for (var b = 0, c = this.$1.length; b < c; b++)
                if (this.$1[b][0] === a) return !0;
            return !1
        };
        b.keys = function() {
            var a = this.$1.map(function(a) {
                var b = a[0];
                a[1];
                return b
            });
            return k ? a[k]() : n(a)
        };
        b.set = function(a, b) {
            var c = !1;
            for (var d = 0; d < this.$1.length; d++) this.$1[d][0] === a && (c ? (this.$1.splice(d, 1), d--) : (this.$1[d][1] = String(b), c = !0));
            c || this.$1.push([a, String(b)])
        };
        b.toString = function() {
            return this.$1.map(function(a) {
                var b = a[0];
                a = a[1];
                return l(b) + "=" + l(a)
            }).join("&")
        };
        b.values = function() {
            var a = this.$1.map(function(a) {
                a[0];
                a = a[1];
                return a
            });
            return k ? a[k]() : n(a)
        };
        b[k] = function() {
            return this.entries()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("URL", ["URLSearchParams"], (function(a, b, c, d, e, f) {
    a = URL.prototype;
    c = Object.getOwnPropertyDescriptor(a, "searchParams");
    var g = Object.getOwnPropertyDescriptor(a, "search"),
        h = Object.getOwnPropertyDescriptor(a, "href");

    function i(a, c) {
        var d = function(d, e) {
                b("URLSearchParams").prototype.append.call(c, d, e);
                d = c.toString();
                a.search = d.length ? "?" + d : ""
            },
            e = function(d) {
                b("URLSearchParams").prototype["delete"].call(c, d);
                d = c.toString();
                a.search = d.length ? "?" + d : ""
            },
            f = function(d, e) {
                b("URLSearchParams").prototype.set.call(c, d, e);
                d = c.toString();
                a.search = d.length ? "?" + d : ""
            };
        c.append = d;
        c["delete"] = e;
        c.set = f;
        Object.defineProperty(a, "_usp", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: c
        })
    }
    c || Object.defineProperties(a, {
        searchParams: {
            get: function() {
                this._usp || i(this, new(b("URLSearchParams"))(this.search.substr(1)));
                return this._usp
            },
            set: function(a) {
                i(this, a)
            }
        },
        href: {
            get: function() {
                return h.get.call(this)
            },
            set: function(a) {
                h.set.call(this, a), this._usp && b("URLSearchParams").call(this._usp, this.search)
            }
        },
        search: {
            get: function() {
                return g.get.call(this)
            },
            set: function(a) {
                g.set.call(this, a), this._usp && b("URLSearchParams").call(this._usp, this.search)
            }
        }
    });
    e.exports = URL
}), null);
__d("ServiceWorkerRoutes", ["ServiceWorkerServerData", "URL"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = d("ServiceWorkerServerData").getData("SWRoutes", "routes", {}),
            e = d("ServiceWorkerServerData").getData("SWRoutes", "globalLists", {
                whitelist: [],
                blacklist: []
            });
        if (!e || typeof e !== "object" || !e.blacklist || !e.whitelist) return null;
        var f = e.blacklist;
        e = e.whitelist;
        if (!Array.isArray(e) || !Array.isArray(f)) return null;
        a = new(c("URL"))(a.url);
        for (var f = f.entries(), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var i;
            if (g) {
                if (h >= f.length) break;
                i = f[h++]
            } else {
                h = f.next();
                if (h.done) break;
                i = h.value
            }
            i = i;
            i[0];
            i = i[1];
            if (a.searchParams.has(i)) return null
        }
        i = Object.entries(b);
        for (var h = 0; h < i.length; h++) {
            g = i[h];
            f = g[0];
            b = g[1];
            if (b && b.regex && typeof b.regex === "string" && new RegExp(b.regex).test(a.pathname)) {
                g = [];
                b.whitelisted_params && Array.isArray(b.whitelisted_params) && (g = b.whitelisted_params);
                for (var b = a.searchParams.keys(), j = Array.isArray(b), k = 0, b = j ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var l;
                    if (j) {
                        if (k >= b.length) break;
                        l = b[k++]
                    } else {
                        k = b.next();
                        if (k.done) break;
                        l = k.value
                    }
                    l = l;
                    if (!e.includes(l) && !g.includes(l)) return null
                }
                return f
            }
        }
        return null
    }

    function b(a) {
        var b = d("ServiceWorkerServerData").getData("SWRoutes", "routes", {});
        return b && typeof b === "object" && b[a] && b[a].cache_path && typeof b[a].cache_path === "string" ? b[a].cache_path : null
    }

    function e() {
        return d("ServiceWorkerServerData").getString("SWRoutes", "routeVersions")
    }

    function f(a) {
        a = new(c("URL"))(a.url);
        var b = d("ServiceWorkerServerData").getData("SWRoutes", "bypassParams", null);
        if (!b || !Array.isArray(b)) return !1;
        for (var a = a.searchParams.keys(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g;
            if (e) {
                if (f >= a.length) break;
                g = a[f++]
            } else {
                f = a.next();
                if (f.done) break;
                g = f.value
            }
            g = g;
            if (b.includes(g)) return !0
        }
        return !1
    }

    function h(a) {
        var b = d("ServiceWorkerServerData").getData("EarlyResponseData", "headersToKeepFromResponse", []),
            c = {};
        Array.isArray(b) && b.length !== 0 && b.forEach(function(b) {
            if (typeof b === "string") {
                var d = a.get(b) || a.get(b.toLowerCase());
                c[b] = d
            }
        });
        return c
    }
    g.getNameForRequest = a;
    g.getInstallPathForName = b;
    g.getRoutesKey = e;
    g.shouldBypassFetch = f;
    g.getHeadersToKeepFromResponse = h
}), 98);
__d("ServiceWorkerRouter", ["ServiceWorkerCacheResponse", "ServiceWorkerClientChromeConfig", "ServiceWorkerClientID", "ServiceWorkerConslidatedHeader", "ServiceWorkerRouteConfigStorage", "ServiceWorkerRoutes", "ServiceWorkerServerData", "ServiceWorkerVersion", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        var c;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRouteConfigStorage").genConfigForRoute(a.name));
                case 2:
                    c = e.sent;
                    c && (a = babelHelpers["extends"]({}, a, c));
                    return e.abrupt("return", a);
                case 5:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function i(a, b) {
        var c = d("ServiceWorkerRoutes").getNameForRequest(a);
        if (!c) return null;
        var e = d("ServiceWorkerRouteConfigStorage").getRouteConfigState(c);
        if (e === "DEACTIVATED") return null;
        e = {
            id: d("ServiceWorkerClientID").generateRequestID(c),
            name: c,
            request: a,
            expireAfter: null,
            versionKey: null,
            cachedEFPageContent: null,
            cachedClientChromeData: null
        };
        b && (e.preloadResponse = b);
        a = d("ServiceWorkerRouteConfigStorage").getConfigForRoute(c);
        if (a === void 0) {
            b = d("ServiceWorkerServerData").getData("QuickExperimentData", "type", "off");
            if (b === "simple_ef_only_await_cache" || b === "client_chrome" || b === "mtouch_splash_screen_with_resources") {
                e.fullRouteConfigPromise = h(e);
                return e
            }
        }
        return a ? babelHelpers["extends"]({}, e, a) : e
    }

    function a(a) {
        var c, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    a === void 0 && (a = !0);
                    if (!(a && self.serviceWorker && self.serviceWorker.state && self.serviceWorker.state === "activating")) {
                        f.next = 3;
                        break
                    }
                    return f.abrupt("return");
                case 3:
                    c = d("ServiceWorkerServerData").getData("SWRoutes", "routes");
                    e = [];
                    c !== null && typeof c == "object" && Object.keys(c).forEach(function(a) {
                        typeof a === "string" && e.push(a)
                    });
                    f.next = 8;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRouteConfigStorage").initRoutes(e));
                case 8:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function j(a) {
        var b = d("ServiceWorkerRoutes").getInstallPathForName(a);
        if (!b) return null;
        b = new Request(self.registration.scope + b);
        return {
            id: d("ServiceWorkerClientID").generateRequestID(a),
            name: a,
            request: b,
            expireAfter: null,
            versionKey: null,
            cachedEFPageContent: null,
            cachedClientChromeData: null
        }
    }

    function c(a) {
        return i(a.request, a.preloadResponse)
    }

    function e(a) {
        var b = a.versionKey;
        b && d("ServiceWorkerRouteConfigStorage").clearConfigForRoute(a.name)
    }

    function f(a, c, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    f = {}, g = d("ServiceWorkerServerData").getData("SRPinningData", "enabled", !1), h = d("ServiceWorkerServerData").getString("SiteData", "fbRevHeader"), i = d("ServiceWorkerServerData").getString("SiteData", "fbDynSpinExpHeader"), j = d("ServiceWorkerServerData").getString("SiteData", "nonceHeader"), k = d("ServiceWorkerServerData").getString("SiteData", "liteVersionHeader"), l = c.get(h), m = c.get(i), n = c.get(j), o = c.get(k), p = null, g && (q = d("ServiceWorkerServerData").getData("SRPinningData", "pinning_ttl", 0), l && (f[d("ServiceWorkerConslidatedHeader").getKey("SW_SR_PINNING")] = l), m && (f[d("ServiceWorkerConslidatedHeader").getKey("SW_SR_PINNING_DYN_REQ")] = m, f[d("ServiceWorkerConslidatedHeader").getKey("SW_SR_PINNING_EXPECTED_TTL")] = q), n && (f[d("ServiceWorkerConslidatedHeader").getKey("SW_NONCE")] = n), o && (f[d("ServiceWorkerConslidatedHeader").getKey("SW_BUNDLE_VERSION")] = o), p = Date.now() + Number(q) * 1e3), r = d("ServiceWorkerCacheResponse").getResponseTypes(), s = r.EF_ONLY, e.clientChromeData && d("ServiceWorkerClientChromeConfig").isEnabled() && (s = r.DYNAMIC, f[d("ServiceWorkerConslidatedHeader").getKey("CLIENT_CHROME_DYNAMIC_METADATA")] = e.clientChromeData), f[d("ServiceWorkerConslidatedHeader").getKey("SW_PARTIAL_CACHE")] = s, f[d("ServiceWorkerConslidatedHeader").getKey("SW_SVN")] = d("ServiceWorkerVersion").getCurrentRev(), f[d("ServiceWorkerConslidatedHeader").getKey("SW_ROUTES")] = d("ServiceWorkerRoutes").getRoutesKey(), t = d("ServiceWorkerRoutes").getHeadersToKeepFromResponse(c), u = d("ServiceWorkerServerData").getString("SiteData", "siteTypeHeader"), v = c.get(u), d("ServiceWorkerRouteConfigStorage").installConfigForRoute(a, {
                        expireAfter: p,
                        versionKey: l,
                        cachedEFPageContent: e.content,
                        cachedClientChromeData: e.clientChromeData || null,
                        fetchHeader: f,
                        responseHeaders: t,
                        siteType: v
                    });
                case 22:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }

    function k() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRouteConfigStorage").activateRoutes());
                case 2:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function l() {
        var a = d("ServiceWorkerServerData").getData("SWRoutes", "routes", {}),
            b = {},
            c = [];
        if (a !== null && typeof a === "object") {
            var e = Object.keys(a);
            for (var f = 0; f < e.length; f++) {
                var g = e[f],
                    h = a[g],
                    i = j(g);
                if (!i) continue;
                h !== null && typeof h === "object" && typeof h.base_route === "string" ? c.push({
                    baseRoute: h.base_route,
                    routeConfig: i
                }) : b[g] = i
            }
            c.forEach(function(a) {
                var c = a.baseRoute;
                a = a.routeConfig;
                c = b[c];
                c && (c.similarRouteConfigs = [a].concat(c.similarRouteConfigs || []))
            })
        }
        return b
    }
    g.init = a;
    g.initConfigForInstall = j;
    g.initConfigForFetchEvent = c;
    g.markRouteConfigCacheAsInvalid = e;
    g.installRouteConfigCache = f;
    g.activateRoutes = k;
    g.getRouteConfigsForInstall = l
}), 98);
__d("ServiceWorkerActivateEvent", ["Artillery4SW", "ErrorPubSub", "Promise", "ServiceWorkerAsyncStorage", "ServiceWorkerBase", "ServiceWorkerPreload", "ServiceWorkerRouter", "ServiceWorkerServerData", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "current_user_id",
        i = [];

    function j(a) {
        var c, e, f;
        return b("regeneratorRuntime").async(function(g) {
            while (1) switch (g.prev = g.next) {
                case 0:
                    g.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem(h));
                case 2:
                    a = g.sent;
                    c = d("ServiceWorkerServerData").getData("SiteData", "current_user", 0);
                    e = d("ServiceWorkerServerData").getData("MLoggedOutPush", "enabled", 0);
                    if (!(!e && a != null && a !== c)) {
                        g.next = 8;
                        break
                    }
                    d("ServiceWorkerBase").genUnregisterSelf();
                    return g.abrupt("return");
                case 8:
                    f = [d("ServiceWorkerAsyncStorage").setItem(h, c), d("ServiceWorkerPreload").activate()];
                    g.next = 11;
                    return b("regeneratorRuntime").awrap(b("Promise").all(f));
                case 11:
                    g.next = 13;
                    return b("regeneratorRuntime").awrap(b("Promise").all(i.map(function(a) {
                        return a()
                    })));
                case 13:
                    g.next = 15;
                    return b("regeneratorRuntime").awrap(self.clients.claim());
                case 15:
                case "end":
                    return g.stop()
            }
        }, null, this)
    }

    function a(a) {
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.prev = 0;
                    d("Artillery4SW").informActivateStart();
                    e.next = 4;
                    return b("regeneratorRuntime").awrap(j(a));
                case 4:
                    e.next = 6;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRouter").init(!1));
                case 6:
                    e.next = 12;
                    break;
                case 8:
                    e.prev = 8, e.t0 = e["catch"](0), d("ServiceWorkerBase").genUnregisterSelf(), c("ErrorPubSub").reportError(e.t0);
                case 12:
                    d("Artillery4SW").informActivateEnd();
                case 13:
                case "end":
                    return e.stop()
            }
        }, null, this, [
            [0, 8]
        ])
    }

    function e(a) {
        i.push(a)
    }
    g.handleEvent = a;
    g.addUpgradeFunction = e
}), 98);
__d("DTSG", ["ServiceWorkerRequest", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "/ajax/dtsg/?__a=true",
        i;

    function j() {
        i = null
    }

    function c() {
        var c, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    if (!i) {
                        f.next = 2;
                        break
                    }
                    return f.abrupt("return", i);
                case 2:
                    c = new Request(h, {
                        credentials: "include",
                        method: "GET"
                    });
                    f.next = 5;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRequest").genJsonFromUri(c));
                case 5:
                    e = f.sent;
                    e && (a.setTimeout(j, (e.payload.valid_for - 60) * 1e3), i = e.payload.token);
                    return f.abrupt("return", i || "");
                case 8:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function e(a) {
        i = a
    }
    g.genGetToken = c;
    g.setToken = e
}), 98);
__d("CollectionUtils", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = {};
        for (var a = a.entries(), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            var f = e[0];
            e = e[1];
            if (typeof f !== "string" && typeof f !== "number") throw new Error("Cannot convert map to object. Bad key given.");
            e instanceof Map ? b[f] = this.mapToObject(e) : e instanceof Set ? b[f] = this.setToArray(e) : b[f] = e
        }
        return b
    }

    function b(a) {
        var b = [];
        for (var a = a.values(), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            e instanceof Map ? b.push(this.mapToObject(e)) : e instanceof Set ? b.push(this.setToArray(e)) : b.push(e)
        }
        return b
    }
    f.mapToObject = a;
    f.setToArray = b
}), 66);
__d("ServiceWorkerRequest", ["CollectionUtils", "DTSG", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function h(a, c) {
        var d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    d = new Request(a, {
                        credentials: "include",
                        method: "POST",
                        body: c
                    });
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(m(d));
                case 3:
                    return e.abrupt("return", e.sent);
                case 4:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function i(a, c) {
        var e, f, g, i, j, k, l, m;
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    e = new FormData(), (f = c.entries(), g = Array.isArray(f), i = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]());
                case 2:
                    if (!g) {
                        b.next = 8;
                        break
                    }
                    if (!(i >= f.length)) {
                        b.next = 5;
                        break
                    }
                    return b.abrupt("break", 24);
                case 5:
                    j = f[i++];
                    b.next = 12;
                    break;
                case 8:
                    i = f.next();
                    if (!i.done) {
                        b.next = 11;
                        break
                    }
                    return b.abrupt("break", 24);
                case 11:
                    j = i.value;
                case 12:
                    k = j;
                    l = k[0];
                    m = k[1];
                    if (!(typeof m === "string")) {
                        b.next = 20;
                        break
                    }
                    e.append(l, m);
                    return b.abrupt("continue", 22);
                case 20:
                    m instanceof Map ? m = d("CollectionUtils").mapToObject(m) : m instanceof Set && (m = d("CollectionUtils").setToArray(m));
                case 21:
                    e.append(l, JSON.stringify(m));
                case 22:
                    b.next = 2;
                    break;
                case 24:
                    return b.abrupt("return", h(a, e));
                case 25:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }

    function j(a) {
        var b = [];
        a = k(a);
        for (var c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = l(c);
                a[c] === void 0 ? b.push(d) : b.push(d + "=" + l(a[c]))
            }
        return b.join("&")
    }

    function k(a, b, c) {
        b = b || "";
        c = c || {};
        if (a === null || a === void 0) c[b] = void 0;
        else if (a instanceof Map)
            for (var d = a.entries(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= d.length) break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                var h = g[0];
                g = g[1];
                g !== void 0 && k(g, b ? b + "[" + h + "]" : h, c)
            } else c[b] = a;
        return c
    }

    function l(a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }

    function m(a) {
        var c, d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(n(a));
                case 2:
                    c = f.sent;
                    f.next = 5;
                    return b("regeneratorRuntime").awrap(c.text());
                case 5:
                    d = f.sent;
                    e = d.substring(9);
                    return f.abrupt("return", JSON.parse(e));
                case 8:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function c(a, c) {
        var d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    d = j(c);
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(m(a + "?" + d));
                case 3:
                    return e.abrupt("return", e.sent);
                case 4:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function n(c) {
        var d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    d = c instanceof Request ? c : new Request(c, {
                        credentials: "include"
                    });
                    f.next = 3;
                    return b("regeneratorRuntime").awrap(a.fetch(d));
                case 3:
                    e = f.sent;
                    if (!(e.status !== 200)) {
                        f.next = 6;
                        break
                    }
                    throw new Error(d.url + " failed with response code: " + e.status);
                case 6:
                    return f.abrupt("return", e);
                case 7:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function e(c) {
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    return b.abrupt("return", a.fetch(c, {
                        credentials: "include",
                        keepalive: !0
                    }));
                case 1:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }

    function f(a, c) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(d("DTSG").genGetToken());
                case 2:
                    e = f.sent;
                    c.set("fb_dtsg", e);
                    f.next = 6;
                    return b("regeneratorRuntime").awrap(i(a, c));
                case 6:
                    return f.abrupt("return", f.sent);
                case 7:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function o(a, c) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(d("DTSG").genGetToken());
                case 2:
                    e = f.sent;
                    c.append("fb_dtsg", e);
                    f.next = 6;
                    return b("regeneratorRuntime").awrap(h(a, c));
                case 6:
                    return f.abrupt("return", f.sent);
                case 7:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }
    g.genJsonFromUri = m;
    g.genSendDataToUri = c;
    g.genFetchUri = n;
    g.genFetchUriBeacon = e;
    g.fetchCSRFTokenAndPostData = f;
    g.fetchCSRFTokenAndPostFormData = o
}), 98);
__d("ServiceWorkerBackgroundRequests", ["ServiceWorkerAsyncStorage", "ServiceWorkerRequest", "ServiceWorkerSyncEvent", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "failed_requests",
        i = 10,
        j = null,
        k = [],
        l = !1;

    function m() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    if (j) {
                        c.next = 5;
                        break
                    }
                    c.next = 3;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem(h));
                case 3:
                    a = c.sent, j || (j = a && typeof a === "object" ? a : new Map());
                case 5:
                    return c.abrupt("return", o(j));
                case 6:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function n(a) {
        if (!j) return;
        j["delete"](a.requestId);
        j.set(a.requestId, a);
        if (j.size > i) {
            a = j.keys().next().value;
            a && j["delete"](a)
        }
    }

    function o(a) {
        var b = Date.now() / 1e3;
        for (var c = a.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= c.length) break;
                f = c[e++]
            } else {
                e = c.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            var g = f[0];
            f = f[1];
            f.timestamp + f.ttl < b && a["delete"](g)
        }
        return a
    }

    function p(a) {
        var c, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    if (!(l && !a || !j)) {
                        f.next = 2;
                        break
                    }
                    return f.abrupt("return");
                case 2:
                    for (c = 0; c < k.length; c++) e = k[c], e.type === "ADD" && e.request ? n(e.request) : e.type === "REMOVE" ? j["delete"](e.requestId) : e.type === "DECREMENT" && q(e.requestId);
                    k = [];
                    o(j);
                    a && (l = !1);
                    j.size > 0 && d("ServiceWorkerSyncEvent").registerBackgroundRequests();
                    f.next = 9;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").setItem(h, j));
                case 9:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function q(a) {
        var c;
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    if (j) {
                        b.next = 2;
                        break
                    }
                    return b.abrupt("return");
                case 2:
                    c = j.get(a), c && c.maxRetry && (c.maxRetry -= 1, j.set(a, c));
                case 4:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }

    function r(a) {
        var c, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    a.request.credentials = "same-origin";
                    c = a.uri;
                    a.addMetadataParams && (c = s(c));
                    e = new Request(c, a.request);
                    f.next = 6;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRequest").genFetchUri(e));
                case 6:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function s(a) {
        var b = [];
        t(b, "current_client_time", Date.now());
        var c = navigator.connection;
        c && (t(b, "current_network_type", c.type), t(b, "current_effective_network_type", c.effectiveType), t(b, "current_rtt", c.rtt), c.downlink && t(b, "current_downlink", Math.round(c.downlink * 1e3)));
        return a + b.join("")
    }

    function t(a, b, c) {
        c && a.push("&" + b + "=" + c)
    }

    function a(a) {
        var c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(m());
                case 2:
                    j = d.sent, c = a.data, c && c.requestId && c.timestamp && c.ttl && (k.push({
                        type: "ADD",
                        requestId: c.requestId,
                        request: c
                    }), p(!1));
                case 5:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function c() {
        var a, c, d, e, f, g, h;
        return b("regeneratorRuntime").async(function(i) {
            while (1) switch (i.prev = i.next) {
                case 0:
                    if (!l) {
                        i.next = 2;
                        break
                    }
                    return i.abrupt("return");
                case 2:
                    l = !0;
                    i.next = 5;
                    return b("regeneratorRuntime").awrap(m());
                case 5:
                    j = i.sent, (a = j.entries(), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]());
                case 7:
                    if (!c) {
                        i.next = 13;
                        break
                    }
                    if (!(d >= a.length)) {
                        i.next = 10;
                        break
                    }
                    return i.abrupt("break", 33);
                case 10:
                    e = a[d++];
                    i.next = 17;
                    break;
                case 13:
                    d = a.next();
                    if (!d.done) {
                        i.next = 16;
                        break
                    }
                    return i.abrupt("break", 33);
                case 16:
                    e = d.value;
                case 17:
                    f = e;
                    g = f[0];
                    h = f[1];
                    i.prev = 20;
                    i.next = 23;
                    return b("regeneratorRuntime").awrap(r(h));
                case 23:
                    i.next = 30;
                    break;
                case 25:
                    i.prev = 25;
                    i.t0 = i["catch"](20);
                    if (!h.maxRetry) {
                        i.next = 30;
                        break
                    }
                    k.push({
                        type: "DECREMENT",
                        requestId: g
                    });
                    return i.abrupt("continue", 31);
                case 30:
                    k.push({
                        type: "REMOVE",
                        requestId: g
                    });
                case 31:
                    i.next = 7;
                    break;
                case 33:
                    i.next = 35;
                    return b("regeneratorRuntime").awrap(p(!0));
                case 35:
                case "end":
                    return i.stop()
            }
        }, null, this, [
            [20, 25]
        ])
    }

    function e() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    return a.abrupt("return", j);
                case 1:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }
    g.handleBackgroundRequestMessage = a;
    g.handleBackgroundSyncEvent = c;
    g.getLoggedRequestsForTestingOnly = e
}), 98);
__d("ServiceWorkerSyncEvent", ["ServiceWorkerBackgroundRequests", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "background_requests";

    function a() {
        self.registration.sync.register(h)
    }

    function c(a) {
        var c;
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    c = a.tag, c === h && d("ServiceWorkerBackgroundRequests").handleBackgroundSyncEvent();
                case 2:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }
    g.registerBackgroundRequests = a;
    g.handleEvent = c
}), 98);
__d("ErrorGuard", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorGuard
}), 98);
__d("ErrorSetup", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSetup
}), 98);
__d("BanzaiAdapter", ["ServiceWorkerRequest", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "/a/bz",
        i = {},
        j = {
            MAX_SIZE: 1e4,
            MAX_WAIT: 6e4,
            MIN_WAIT: 1e3,
            RESTORE_WAIT: 1e3,
            blacklist: [],
            gks: {},
            disabled: !1,
            known_routes: [],
            should_drop_unknown_routes: !1,
            should_log_unknown_routes: !1
        };

    function a() {
        return "snappy"
    }
    var k = !0;

    function l(a) {
        return h
    }

    function c() {
        return {
            store: function(a) {},
            restore: function(a) {},
            flush: function(a) {}
        }
    }

    function e() {
        return null
    }

    function f(a) {
        (i[a] || []).forEach(function(a) {
            a()
        })
    }

    function m(a, b) {
        i[a] || (i[a] = []), i[a].push(b)
    }

    function n(a, b) {
        return a
    }

    function o() {}

    function p(a, c, e, f) {
        return b("regeneratorRuntime").async(function(g) {
            while (1) switch (g.prev = g.next) {
                case 0:
                    f = l(!1);
                    g.prev = 1;
                    g.next = 4;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRequest").fetchCSRFTokenAndPostFormData(f, a));
                case 4:
                    c();
                    g.next = 10;
                    break;
                case 7:
                    g.prev = 7, g.t0 = g["catch"](1), e();
                case 10:
                case "end":
                    return g.stop()
            }
        }, null, this, [
            [1, 7]
        ])
    }

    function q() {
        return navigator.onLine
    }

    function r(a) {}

    function s(a) {}

    function t(a) {}

    function u(a) {
        return a
    }

    function v() {
        return !0
    }

    function w(a) {}
    g.config = j;
    g.preferredCompressionMethod = a;
    g.useBeacon = k;
    g.getEndPointUrl = l;
    g.getStorage = c;
    g.getTopLevel = e;
    g.inform = f;
    g.subscribe = m;
    g.wrapInTimeSlice = n;
    g.cleanup = o;
    g.send = p;
    g.readyToSend = q;
    g.setHooks = r;
    g.setUnloadHook = s;
    g.onUnload = t;
    g.prepWadForTransit = u;
    g.isOkToSendViaBeacon = v;
    g.queueRequest = w
}), 98);
/**
 * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
 */
__d("SnappyCompress", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {
        return typeof process === "object" && (typeof process.versions === "object" && typeof process.versions.node !== "undefined") ? !0 : !1
    }

    function h(a) {
        return a instanceof Uint8Array && (!g() || !Buffer.isBuffer(a))
    }

    function i(a) {
        return a instanceof ArrayBuffer
    }

    function j(a) {
        return !g() ? !1 : Buffer.isBuffer(a)
    }
    var k = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";

    function a(a) {
        if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
        var b = !1,
            c = !1;
        h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
        a = new A(a);
        var d = a.readUncompressedLength();
        if (d === -1) throw new Error("Invalid Snappy bitstream");
        if (b) {
            b = new Uint8Array(d);
            if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
        } else if (c) {
            b = new ArrayBuffer(d);
            c = new Uint8Array(b);
            if (!a.uncompressToBuffer(c)) throw new Error("Invalid Snappy bitstream")
        } else {
            b = Buffer.alloc(d);
            if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
        }
        return b
    }

    function b(a) {
        if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
        var b = !1,
            c = !1;
        h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
        a = new x(a);
        var d = a.maxCompressedLength(),
            e, f, g;
        b ? (e = new Uint8Array(d), g = a.compressToBuffer(e)) : c ? (e = new ArrayBuffer(d), f = new Uint8Array(e), g = a.compressToBuffer(f)) : (e = Buffer.alloc(d), g = a.compressToBuffer(e));
        if (!e.slice) {
            f = new Uint8Array(Array.prototype.slice.call(e, 0, g));
            if (b) return f;
            else if (c) return f.buffer;
            else throw new Error("not implemented")
        }
        return e.slice(0, g)
    }
    c = 16;
    var l = 1 << c,
        m = 14,
        n = new Array(m + 1);

    function o(a, b) {
        return a * 506832829 >>> b
    }

    function p(a, b) {
        return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24)
    }

    function q(a, b, c) {
        return a[b] === a[c] && a[b + 1] === a[c + 1] && a[b + 2] === a[c + 2] && a[b + 3] === a[c + 3]
    }

    function r(a, b, c, d, e) {
        var f;
        for (f = 0; f < e; f++) c[d + f] = a[b + f]
    }

    function s(a, b, c, d, e) {
        c <= 60 ? (d[e] = c - 1 << 2, e += 1) : c < 256 ? (d[e] = 60 << 2, d[e + 1] = c - 1, e += 2) : (d[e] = 61 << 2, d[e + 1] = c - 1 & 255, d[e + 2] = c - 1 >>> 8, e += 3);
        r(a, b, d, e, c);
        return e + c
    }

    function t(a, b, c, d) {
        if (d < 12 && c < 2048) {
            a[b] = 1 + (d - 4 << 2) + (c >>> 8 << 5);
            a[b + 1] = c & 255;
            return b + 2
        } else {
            a[b] = 2 + (d - 1 << 2);
            a[b + 1] = c & 255;
            a[b + 2] = c >>> 8;
            return b + 3
        }
    }

    function u(a, b, c, d) {
        while (d >= 68) b = t(a, b, c, 64), d -= 64;
        d > 64 && (b = t(a, b, c, 60), d -= 60);
        return t(a, b, c, d)
    }

    function v(a, b, c, d, e) {
        var f = 1;
        while (1 << f <= c && f <= m) f += 1;
        f -= 1;
        var g = 32 - f;
        typeof n[f] === "undefined" && (n[f] = new Uint16Array(1 << f));
        f = n[f];
        var h;
        for (h = 0; h < f.length; h++) f[h] = 0;
        h = b + c;
        var i = b,
            j = b,
            k, l, r, t, v, w = !0,
            x = 15;
        if (c >= x) {
            c = h - x;
            b += 1;
            x = o(p(a, b), g);
            while (w) {
                t = 32;
                l = b;
                do {
                    b = l;
                    k = x;
                    v = t >>> 5;
                    t += 1;
                    l = b + v;
                    if (b > c) {
                        w = !1;
                        break
                    }
                    x = o(p(a, l), g);
                    r = i + f[k];
                    f[k] = b - i
                } while (!q(a, b, r));
                if (!w) break;
                e = s(a, j, b - j, d, e);
                do {
                    v = b;
                    k = 4;
                    while (b + k < h && a[b + k] === a[r + k]) k += 1;
                    b += k;
                    l = v - r;
                    e = u(d, e, l, k);
                    j = b;
                    if (b >= c) {
                        w = !1;
                        break
                    }
                    t = o(p(a, b - 1), g);
                    f[t] = b - 1 - i;
                    v = o(p(a, b), g);
                    r = i + f[v];
                    f[v] = b - i
                } while (q(a, b, r));
                if (!w) break;
                b += 1;
                x = o(p(a, b), g)
            }
        }
        j < h && (e = s(a, j, h - j, d, e));
        return e
    }

    function w(a, b, c) {
        do b[c] = a & 127, a = a >>> 7, a > 0 && (b[c] += 128), c += 1; while (a > 0);
        return c
    }

    function x(a) {
        this.array = a
    }
    x.prototype.maxCompressedLength = function() {
        var a = this.array.length;
        return 32 + a + Math.floor(a / 6)
    };
    x.prototype.compressToBuffer = function(a) {
        var b = this.array,
            c = b.length,
            d = 0,
            e = 0,
            f;
        e = w(c, a, e);
        while (d < c) f = Math.min(c - d, l), e = v(b, d, f, a, e), d += f;
        return e
    };
    var y = [0, 255, 65535, 16777215, 4294967295];

    function r(a, b, c, d, e) {
        var f;
        for (f = 0; f < e; f++) c[d + f] = a[b + f]
    }

    function z(a, b, c, d) {
        var e;
        for (e = 0; e < d; e++) a[b + e] = a[b - c + e]
    }

    function A(a) {
        this.array = a, this.pos = 0
    }
    A.prototype.readUncompressedLength = function() {
        var a = 0,
            b = 0,
            c, d;
        while (b < 32 && this.pos < this.array.length) {
            c = this.array[this.pos];
            this.pos += 1;
            d = c & 127;
            if (d << b >>> b !== d) return -1;
            a |= d << b;
            if (c < 128) return a;
            b += 7
        }
        return -1
    };
    A.prototype.uncompressToBuffer = function(a) {
        var b = this.array,
            c = b.length,
            d = this.pos,
            e = 0,
            f, g, h, i;
        while (d < b.length) {
            f = b[d];
            d += 1;
            if ((f & 3) === 0) {
                g = (f >>> 2) + 1;
                if (g > 60) {
                    if (d + 3 >= c) return !1;
                    h = g - 60;
                    g = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                    g = (g & y[h]) + 1;
                    d += h
                }
                if (d + g > c) return !1;
                r(b, d, a, e, g);
                d += g;
                e += g
            } else {
                switch (f & 3) {
                    case 1:
                        g = (f >>> 2 & 7) + 4;
                        i = b[d] + (f >>> 5 << 8);
                        d += 1;
                        break;
                    case 2:
                        if (d + 1 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8);
                        d += 2;
                        break;
                    case 3:
                        if (d + 3 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                        d += 4;
                        break;
                    default:
                        break
                }
                if (i === 0 || i > e) return !1;
                z(a, e, i, g);
                e += g
            }
        }
        return !0
    };
    e.exports.uncompress = a;
    e.exports.compress = b
}), null);
__d("SnappyCompressUtil", ["SnappyCompress"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        compressUint8ArrayToSnappy: function(c) {
            if (c == null) return null;
            var d = null;
            try {
                d = b("SnappyCompress").compress(c)
            } catch (a) {
                return null
            }
            c = "";
            for (var e = 0; e < d.length; e++) c += String.fromCharCode(d[e]);
            return a.btoa(c)
        },
        compressStringToSnappy: function(b) {
            if (a.Uint8Array === void 0 || a.btoa === void 0) return null;
            var c = new a.Uint8Array(b.length);
            for (var d = 0; d < b.length; d++) {
                var e = b.charCodeAt(d);
                if (e > 127) return null;
                c[d] = e
            }
            return g.compressUint8ArrayToSnappy(c)
        },
        compressStringToSnappyBinary: function(c) {
            if (a.Uint8Array === void 0) return null;
            var d = null;
            if (a.TextEncoder !== void 0) d = new TextEncoder().encode(c);
            else {
                d = new a.Uint8Array(c.length);
                for (var e = 0; e < c.length; e++) {
                    var f = c.charCodeAt(e);
                    if (f > 127) return null;
                    d[e] = f
                }
            }
            f = null;
            try {
                f = b("SnappyCompress").compress(d)
            } catch (a) {
                return null
            }
            return f
        }
    };
    e.exports = g
}), null);
__d("once", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = g(a);
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
        return b
    }

    function g(a) {
        var b = a,
            c;
        a = function() {
            if (b) {
                for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++) d[e] = arguments[e];
                c = b.apply(this, d);
                b = null
            }
            return c
        };
        return a
    }
    f["default"] = a
}), 66);
__d("BanzaiCompressionUtils", ["FBLogger", "Promise", "SnappyCompressUtil", "once", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("once")(function() {
            if (a.CompressionStream == null) return !1;
            if (a.Response == null) return !1;
            try {
                new a.CompressionStream("deflate")
            } catch (a) {
                return !1
            }
            return !0
        }),
        i = {
            compressWad: function(a, c) {
                if (a.needs_compression !== !0) {
                    delete a.needs_compression;
                    return
                }
                if (c === "deflate") {
                    i.compressWad(a, "snappy");
                    return
                }
                var d = (g || (g = b("performanceNow")))(),
                    e = JSON.stringify(a.posts),
                    f;
                switch (c) {
                    case "snappy":
                        f = b("SnappyCompressUtil").compressStringToSnappyBinary(e);
                        break;
                    case "snappy_base64":
                        f = b("SnappyCompressUtil").compressStringToSnappy(e);
                        break;
                    default:
                        break
                }
                f != null && f.length < e.length ? (a.posts = f, a.compression = c, a.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - d), a.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", a.snappy_ms)) : a.compression = "";
                delete a.needs_compression
            },
            compressWadAsync: function(c, d) {
                if (d !== "deflate") {
                    i.compressWad(c, "snappy");
                    return b("Promise").resolve()
                }
                if (!h()) return i.compressWadAsync(c, "snappy");
                var e = (g || (g = b("performanceNow")))(),
                    f = JSON.stringify(c.posts),
                    j = new Response(f).body;
                if (!j) {
                    c.compression = "";
                    delete c.needs_compression;
                    return b("Promise").resolve()
                }
                j = j.pipeThrough(new a.CompressionStream("deflate"));
                return new Response(j).arrayBuffer().then(function(a) {
                    a.byteLength < f.length ? (c.posts = new Uint8Array(a), c.compression = d, c.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - e), c.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", c.snappy_ms)) : c.compression = "", delete c.needs_compression
                })["catch"](function() {
                    c.compression = "", delete c.needs_compression
                })
            },
            outOfBandsPosts: function(a) {
                var b = 0,
                    c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d],
                        f = e.compression === "snappy" || e.compression === "deflate";
                    if (f) {
                        f = new Blob([e.posts], {
                            type: "application/octet-stream"
                        });
                        e.posts = String(b);
                        c["post_" + String(b)] = f;
                        b++
                    }
                }
                return c
            }
        };
    e.exports = i
}), null);
__d("BanzaiConsts", [], (function(a, b, c, d, e, f) {
    a = {
        SEND: "Banzai:SEND",
        OK: "Banzai:OK",
        ERROR: "Banzai:ERROR",
        SHUTDOWN: "Banzai:SHUTDOWN",
        BASIC: "basic",
        VITAL: "vital",
        BASIC_WAIT: 6e4,
        BASIC_WAIT_COMET: 2e3,
        VITAL_WAIT: 1e3,
        BATCH_SIZE_LIMIT: 64e3,
        EXPIRY: 864e5,
        BATCH_TIMEOUT: 1e4,
        LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
        STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4,
        POST_READY: 0,
        POST_INFLIGHT: 1,
        POST_SENT: 2
    };
    b = a;
    f["default"] = b
}), 66);
__d("SimpleHook", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.__callbacks = [], this.call = this.$2
        }
        var b = a.prototype;
        b.hasCallback = function(a) {
            var b = this.__callbacks;
            return b.length > 0 && (a == null || b.some(function(b) {
                return b === a || b.$1 === a
            }))
        };
        b.add = function(a, b) {
            var c = this,
                d;
            if ((b == null ? void 0 : b.once) === !0) {
                b = function() {
                    c.remove(d), a.apply(null, arguments)
                };
                b.$1 = a;
                d = b
            } else d = a;
            this.__callbacks.push(d);
            return d
        };
        b.removeLast = function() {
            return this.__callbacks.pop()
        };
        b.remove = function(a) {
            return this.removeIf(function(b) {
                return b === a
            })
        };
        b.removeIf = function(a) {
            var b = this.__callbacks;
            this.__callbacks = b.filter(function(b) {
                return !a(b)
            });
            return b.length > this.__callbacks.length
        };
        b.clear = function() {
            this.__callbacks = []
        };
        b.$2 = function() {
            var a = this.__callbacks;
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b];
                d.apply(null, arguments)
            }
        };
        return a
    }();
    f.SimpleHook = a
}), 66);
__d("BanzaiLazyQueue", ["SimpleHook"], (function(a, b, c, d, e, f, g) {
    var h = [],
        i = new(d("SimpleHook").SimpleHook)();
    a = {
        onQueue: i,
        queuePost: function(a, b, c) {
            h.push([a, b, c]), i.call(a, b, c)
        },
        flushQueue: function() {
            var a = h;
            h = [];
            return a
        }
    };
    f.exports = a
}), 34);
__d("CurrentUser", [], (function(a, b, c, d, e, f) {
    a = {
        getID: function() {
            return "0"
        },
        getAccountID: function() {
            return "0"
        },
        getPossiblyNonFacebookUserID: function() {
            return "0"
        },
        getEmployeeWorkUserID: function() {
            return "0"
        },
        getName: function() {
            return ""
        },
        getShortName: function() {
            return ""
        },
        isLoggedIn: function() {
            return !1
        },
        isLoggedInNow: function() {
            return !1
        },
        isEmployee: function() {
            return !1
        },
        isTestUser: function() {
            return !1
        },
        hasWorkUser: function() {
            return !1
        },
        isWorkUser: function() {
            return !1
        },
        isGray: function() {
            return !1
        },
        isUnderage: function() {
            return !1
        },
        isMessengerOnlyUser: function() {
            return !1
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !1
        },
        getAppID: function() {
            return "0"
        }
    };
    b = a;
    f["default"] = b
}), 66);
__d("WebSession", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {}

    function b() {
        return "000000:000000:000000"
    }

    function c() {
        return "0"
    }
    f.extend = a;
    f.getId = b;
    f.getPageId_DO_NOT_USE = c
}), 66);
__d("BanzaiUtils", ["BanzaiConsts", "CurrentUser", "FBLogger", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = {
        canSend: function(a) {
            return a[2] >= (g || (g = b("performanceAbsoluteNow")))() - (h || (h = b("BanzaiConsts"))).EXPIRY
        },
        filterPost: function(a, c, d, e) {
            if (e.overlimit) return !0;
            if (!e.sendMinimumOnePost && a[4] + e.currentSize > (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT) return !0;
            var f = a.__meta;
            if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_SENT || !i.canSend(a)) return !1;
            if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_INFLIGHT) return !0;
            var g = f.compress != null ? f.compress : !0,
                j = (f.webSessionId != null ? f.webSessionId : "null") + (f.userID != null ? f.userID : "null") + (f.appID != null ? f.appID : "null") + (g ? "compress" : ""),
                k = e.wadMap.get(j);
            k || (k = {
                app_id: f.appID,
                needs_compression: g,
                posts: [],
                user: f.userID,
                webSessionId: f.webSessionId
            }, e.wadMap.set(j, k), c.push(k));
            f.status = (h || (h = b("BanzaiConsts"))).POST_INFLIGHT;
            Array.isArray(k.posts) ? k.posts.push(a) : b("FBLogger")("banzai").mustfix("Posts were a string instead of array");
            d.push(a);
            e.currentSize += a[4];
            e.currentSize >= (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT && (e.overlimit = !0);
            return e.keepRetryable && Boolean(f.retry)
        },
        resetPostStatus: function(a) {
            a.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY
        },
        retryPost: function(a, c, d) {
            var e = a;
            e.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
            e[3] = (e[3] || 0) + 1;
            e.__meta.retry !== !0 && c >= 400 && c < 600 && d.push(a)
        },
        wrapData: function(a, c, d, e, f) {
            d = [a, c, d, 0, (a = f) != null ? a : c ? JSON.stringify(c).length : 0];
            d.__meta = {
                appID: b("CurrentUser").getAppID(),
                retry: e === !0,
                status: (h || (h = b("BanzaiConsts"))).POST_READY,
                userID: b("CurrentUser").getPossiblyNonFacebookUserID(),
                webSessionId: b("WebSession").getId()
            };
            return d
        }
    };
    e.exports = i
}), null);
__d("ExecutionEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = !!(a !== void 0 && a.document && a.document.createElement);
    c = typeof WorkerGlobalScope === "function";
    d = {
        canUseDOM: b,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
        canUseViewport: b && !!window.screen,
        isInWorker: c,
        isInBrowser: b || c
    };
    e.exports = d
}), null);
__d("NavigationMetrics", [], (function(a, b, c, d, e, f) {
    var g = {
        NAVIGATION_DONE: "NAVIGATION_DONE",
        EVENT_OCCURRED: "EVENT_OCCURRED"
    };

    function a(a, b, c, d, e, f, g) {}

    function b(a, b, c, d, e, f, g) {}

    function c(a, b, c) {}

    function d(a, b, c) {}

    function e(a, b, c) {}

    function h(a) {}

    function i() {}

    function j() {}

    function k(a) {}
    var l = function(a, b, c) {};

    function m(a) {
        return
    }

    function n() {
        throw new Error("getFullPageLoadLid is not implemented on this site")
    }
    f.Events = g;
    f.emit = a;
    f.emitAndHold = b;
    f.addListener = c;
    f.once = d;
    f.addRetroactiveListener = e;
    f.listeners = h;
    f.removeAllListeners = i;
    f.removeCurrentListener = j;
    f.releaseHeldEventType = k;
    f.postPagelet = l;
    f.setPage = m;
    f.getFullPageLoadLid = n
}), 66);
__d("SetIdleTimeoutAcrossTransitions", ["clearTimeout", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        return c("setTimeout")(a, b)
    }

    function b(a) {
        c("clearTimeout")(a)
    }
    g.start = a;
    g.clear = b
}), 98);
__d("Visibility", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function a() {
        return !1
    }

    function b(a, b) {
        h(0, 3683)
    }
    c = "hidden";
    d = "visible";
    g.isSupported = a;
    g.addListener = b;
    g.HIDDEN = c;
    g.VISIBLE = d
}), 98);
__d("BanzaiBase", ["BanzaiAdapter", "BanzaiCompressionUtils", "BanzaiConsts", "BanzaiLazyQueue", "BanzaiUtils", "CurrentUser", "ErrorGuard", "ExecutionEnvironment", "FBLogger", "NavigationMetrics", "SetIdleTimeoutAcrossTransitions", "Visibility", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g, h, i, j, k, l = [],
        m = null,
        n = {
            _clearPostBuffer: function() {
                l = []
            },
            _gatherWadsAndPostsFromBuffer: function(a, c, d, e, f) {
                var g = {
                    currentSize: 0,
                    keepRetryable: d,
                    overlimit: !1,
                    sendMinimumOnePost: f,
                    wadMap: new Map()
                };
                d = e.filter(function(d, e) {
                    return b("BanzaiUtils").filterPost(d, a, c, g)
                });
                g.overlimit && d.length && n._schedule(0);
                return d
            },
            _getEventTime: function() {
                return (g || (g = b("performanceAbsoluteNow")))()
            },
            _getWebSessionId: function() {
                return b("WebSession").getId()
            },
            _getPostBuffer: function() {
                return l
            },
            _getUserId: function() {
                return b("CurrentUser").getPossiblyNonFacebookUserID()
            },
            _getAppId: function() {
                return b("CurrentUser").getAppID()
            },
            _initialize: function() {
                b("ExecutionEnvironment").canUseDOM && (n.adapter.useBeacon && b("Visibility").isSupported() ? (b("Visibility").addListener(b("Visibility").HIDDEN, function() {
                    n._getPostBuffer().length > 0 && (n._tryToSendViaBeacon() || n._store(!1))
                }), n.isEnabled("enable_client_logging_clear_on_visible") && b("Visibility").addListener(b("Visibility").VISIBLE, function() {
                    n._tryToSendViaBeacon() || n._restore(!1)
                })) : n.adapter.setHooks(n), n.adapter.setUnloadHook(n), b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, c) {
                    if (c.pageType !== "normal") return;
                    n._restore(!1);
                    b("NavigationMetrics").removeCurrentListener()
                }))
            },
            _sendBeacon: function(b, c) {
                return a.navigator.sendBeacon(b, c)
            },
            _prepForTransit: function(a) {
                var c = new FormData();
                c.append("ts", String(Date.now()));
                var d = b("BanzaiCompressionUtils").outOfBandsPosts(a);
                Object.keys(d).forEach(function(a) {
                    c.append(a, d[a])
                });
                c.append("q", JSON.stringify(a));
                return c
            },
            _prepWadForTransit: function(a) {
                b("BanzaiCompressionUtils").compressWad(a, b("BanzaiAdapter").preferredCompressionMethod())
            },
            _processCallbacksAndSendViaBeacon: function() {
                var a = [],
                    c = [],
                    d = [];
                n._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
                if (c.length > 0) {
                    c[0].send_method = "beacon";
                    c.map(n._prepWadForTransit);
                    d = n._prepForTransit(c);
                    a = b("BanzaiAdapter").getEndPointUrl(!0);
                    c = n._sendBeacon(a, d);
                    c || b("FBLogger")("banzai").warn("Error sending beacon")
                }
            },
            _restore: function(a) {
                a = b("BanzaiAdapter").getStorage();
                var c = function(a) {
                    l.push(a)
                };
                (h || (h = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
                n._schedule(b("BanzaiAdapter").config.RESTORE_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT)
            },
            _schedule: function(a) {
                var c = n._getEventTime() + a;
                if (!k || c < k) {
                    k = c;
                    b("SetIdleTimeoutAcrossTransitions").clear(j);
                    j = b("SetIdleTimeoutAcrossTransitions").start(b("BanzaiAdapter").wrapInTimeSlice(n._sendWithCallbacks, "Banzai.send"), a);
                    return !0
                }
                return !1
            },
            _sendWithCallbacks: function(a, c) {
                k = null;
                n._schedule(n.BASIC.delay);
                if (!b("BanzaiAdapter").readyToSend()) {
                    c && c();
                    return
                }
                if (n.isEnabled("flush_storage_periodically")) {
                    var d = b("BanzaiAdapter").getStorage(),
                        e = function() {
                            n._restore(!1)
                        };
                    (h || (h = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e])
                }
                b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SEND);
                d = [];
                var f = [];
                l = n._gatherWadsAndPostsFromBuffer(d, f, !0, l, !0);
                if (d.length <= 0) {
                    b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).OK);
                    a && a();
                    return
                }
                d[0].trigger = m;
                m = null;
                d[0].send_method = "ajax";
                d.map(n._prepWadForTransit);
                b("BanzaiAdapter").send(n._prepForTransit(d), function() {
                    f.forEach(function(a) {
                        a = a;
                        a.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT;
                        a.__meta.callback && a.__meta.callback()
                    }), a && a()
                }, function(a) {
                    f.forEach(function(c) {
                        b("BanzaiUtils").retryPost(c, a, l)
                    }), c && c()
                })
            },
            _store: function(a) {
                a = b("BanzaiAdapter").getStorage();
                (h || (h = b("ErrorGuard"))).applyWithGuard(a.store, a, [l])
            },
            _testState: function() {
                return {
                    postBuffer: l,
                    triggerRoute: m
                }
            },
            _tryToSendViaBeacon: function() {
                if (!(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())) return !1;
                var a = [],
                    c = [];
                l = n._gatherWadsAndPostsFromBuffer(a, c, !1, l, !1);
                if (a.length <= 0) return !1;
                a[0].send_method = "beacon";
                a.map(n._prepWadForTransit);
                a = n._prepForTransit(a);
                var d = b("BanzaiAdapter").getEndPointUrl(!0);
                d = n._sendBeacon(d, a);
                if (!d) {
                    c.forEach(function(a) {
                        l.push(a)
                    });
                    return !1
                }
                return !0
            },
            _unload: function() {
                if (b("BanzaiAdapter").config.disabled) return;
                navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon() && n._processCallbacksAndSendViaBeacon();
                b("BanzaiAdapter").cleanup();
                b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SHUTDOWN);
                l.length > 0 && ((!n.adapter.useBeacon || !n._tryToSendViaBeacon()) && n._store(!1))
            },
            BASIC: {
                delay: b("BanzaiAdapter").config.MAX_WAIT || (i || (i = b("BanzaiConsts"))).BASIC_WAIT
            },
            BASIC_WAIT: (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
            ERROR: i.ERROR,
            OK: i.OK,
            SEND: i.SEND,
            SHUTDOWN: i.SHUTDOWN,
            VITAL: {
                delay: b("BanzaiAdapter").config.MIN_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT
            },
            VITAL_WAIT: i.VITAL_WAIT,
            adapter: b("BanzaiAdapter"),
            canUseNavigatorBeacon: function() {
                return Boolean(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())
            },
            flush: function(a, c) {
                b("SetIdleTimeoutAcrossTransitions").clear(j), n._sendWithCallbacks(a, c)
            },
            isEnabled: function(a) {
                return Boolean(b("BanzaiAdapter").config.gks && b("BanzaiAdapter").config.gks[a] && !b("BanzaiAdapter").config.disabled)
            },
            post: function(a, c, d) {
                a || b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
                b("BanzaiLazyQueue").flushQueue().forEach(function(a) {
                    return n.post.apply(n, a)
                });
                var e = a.split(":");
                if ((b("BanzaiAdapter").config.known_routes || []).indexOf(e[0]) === -1) {
                    b("BanzaiAdapter").config.should_log_unknown_routes === !0 && b("FBLogger")("banzai").blameToPreviousFrame().mustfix("Attempted to post to invalid Banzai route '" + a + "'. This call site should be cleaned up.");
                    if (b("BanzaiAdapter").config.should_drop_unknown_routes === !0) return
                }
                var f = "";
                try {
                    var g;
                    f = (g = JSON.stringify(c)) != null ? g : ""
                } catch (c) {
                    b("FBLogger")("banzai").catching(c).addToCategoryKey(a).mustfix("Could not JSON.stringify banzai data for route %s", a);
                    return
                }
                var h = d == null ? void 0 : d.retry;
                if (b("BanzaiAdapter").config.disabled) return;
                if (!b("ExecutionEnvironment").canUseDOM && !b("ExecutionEnvironment").isInWorker) return;
                var j = n.adapter.getTopLevel();
                if (j) {
                    var k;
                    try {
                        k = j.require("Banzai")
                    } catch (a) {
                        k = null
                    }
                    if (k) {
                        k.post.apply(k, arguments);
                        return
                    }
                }
                var o = b("BanzaiAdapter").config.blacklist;
                if (o && (o.indexOf && (typeof o.indexOf == "function" && o.indexOf(a) != -1))) return;
                var p = f.length,
                    q = b("BanzaiUtils").wrapData(a, c, n._getEventTime(), h, p),
                    r = q;
                (d == null ? void 0 : d.callback) && (r.__meta.callback = d == null ? void 0 : d.callback);
                (d == null ? void 0 : d.compress) != null && (r.__meta.compress = d == null ? void 0 : d.compress);
                var s = d == null ? void 0 : d.delay;
                s == null && (s = (i || (i = b("BanzaiConsts"))).BASIC_WAIT);
                if (d == null ? void 0 : d.signal) {
                    r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_INFLIGHT;
                    var t = [{
                        user: n._getUserId(),
                        webSessionId: n._getWebSessionId(),
                        app_id: n._getAppId(),
                        posts: [q],
                        trigger: a
                    }];
                    b("BanzaiAdapter").send(n._prepForTransit(t), function() {
                        r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT, r.__meta.callback && r.__meta.callback()
                    }, function(a) {
                        b("BanzaiUtils").retryPost(q, a, l)
                    }, !0);
                    if (!h) return
                }
                l.push(q);
                (n._schedule(s) || !m) && (m = a)
            },
            subscribe: b("BanzaiAdapter").subscribe
        };
    n._initialize();
    e.exports = n
}), null);
__d("Banzai", ["BanzaiBase"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("BanzaiBase")
}), 98);
__d("ErrorTransport", ["Banzai"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        c("Banzai").post("js_error_logging", a)
    }
    g.log = a
}), 98);
__d("ServiceWorkerQuietError", [], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this, b) || this;
            c.name = "ServiceWorkerQuietError";
            c.message = b;
            return c
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a
}), 66);
__d("getErrorSafe", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").getErrorSafe
}), 98);
__d("ServiceWorkerErrorLogging", ["Env", "ErrorGuard", "ErrorPubSub", "ErrorSetup", "ErrorTransport", "ServiceWorkerQuietError", "ServiceWorkerServerData", "ServiceWorkerVersion", "getErrorSafe"], (function(a, b, c, d, e, f, g) {
    function a() {
        c("ErrorGuard").skipGuardGlobal(c("Env").nocatch);
        var a = d("ServiceWorkerServerData").getData("SiteData", "log_errors", !0);
        a = Boolean(a) ? 1 : 0;
        c("ErrorSetup").setup({
            client_revision: d("ServiceWorkerVersion").getCurrentRev(),
            loggingFramework: "service_worker",
            sample_weight: a,
            site_category: "service-worker"
        }, d("ErrorTransport").log);
        self.addEventListener("unhandledrejection", function(a) {
            a = a.reason;
            a instanceof c("ServiceWorkerQuietError") || c("ErrorPubSub").reportError(c("getErrorSafe")(a))
        })
    }

    function b() {
        return c("ErrorPubSub").history
    }
    c("ErrorSetup").preSetup();
    g.init = a;
    g.getHistory = b
}), 98);
__d("ForcedNavigateToRequest", ["Promise", "Random", "URL"], (function(a, b, c, d, e, f, g) {
    var h = new Map(),
        i = d("Random").uint32();

    function j(a, b, d) {
        h.set(String(i), b);
        b = new(c("URL"))(a);
        b.searchParams.append("sw_fnr_id", i + "");
        b.searchParams.append("fnr_t", d + "");
        i++;
        return b.toString()
    }

    function a(a, b, c) {
        if (!c.navigate) throw new Error("client.navigate is not in this version of the browser");
        a = j(a, b, 0);
        c.navigate(a)
    }

    function e(a, c) {
        if (!h.has(c)) return void 0;
        a = h.get(c);
        if (a) {
            h.set(c, null);
            return {
                response: b("Promise").resolve(a),
                waitUntil: b("Promise").resolve()
            }
        }
        return null
    }
    g.enqueueResponse = j;
    g.forceNavigate = a;
    g.responseToFetch = e
}), 98);
__d("ServiceWorkerFetchPage", ["Artillery4SW", "FBLogger", "ServiceWorkerBase", "ServiceWorkerConslidatedHeader", "ServiceWorkerEventLogger", "ServiceWorkerPreload", "ServiceWorkerProfilerTypes", "ServiceWorkerRoutes", "ServiceWorkerServerData", "ServiceWorkerVersion", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return new Request(a, {
            mode: "same-origin",
            credentials: "same-origin",
            redirect: "manual"
        })
    }

    function i(a) {
        var b = d("ServiceWorkerServerData").getData("ResourceCacheData", "failReasonsToString", {});
        return b && Array.isArray(b) && b[a] && typeof b[a] === "string" ? b[a] : "MISSING_VALID_REASON"
    }

    function j(a, c) {
        var e, f, g, h, i, j, k, l;
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    if (!(!a.ok && !(c.redirectAllowed && a.type === "opaqueredirect") && a.status !== 404)) {
                        b.next = 3;
                        break
                    }
                    a.type === "opaqueredirect" ? e = n("RESPONSE_OF_REDIRECT") : a.status === 500 ? e = n("RESPONSE_WITH_ERROR") : e = n("RESPONSE_NOT_OK");
                    return b.abrupt("return", {
                        failReason: e,
                        response: null
                    });
                case 3:
                    f = d("ServiceWorkerServerData").getString("SiteData", "disableSWHeader");
                    if (!a.headers.has(f)) {
                        b.next = 8;
                        break
                    }
                    d("ServiceWorkerBase").genUnregisterSelf();
                    d("ServiceWorkerEventLogger").error("Got disable header, unregistering");
                    return b.abrupt("return", {
                        failReason: n("RESPONSE_HAS_DISABLE_HEADER"),
                        response: null
                    });
                case 8:
                    g = d("ServiceWorkerServerData").getString("SiteData", "fbRevHeader");
                    if (!(!c.skipRevCheck && !a.headers.has(g))) {
                        b.next = 12;
                        break
                    }
                    c.hasCacheContent && (d("ServiceWorkerBase").genUnregisterSelf(), d("ServiceWorkerEventLogger").error("FB rev header missing, unregistering"));
                    return b.abrupt("return", {
                        failReason: n("RESPONSE_HEADER_MISSING"),
                        response: null
                    });
                case 12:
                    if (!c.checkSiteType) {
                        b.next = 19;
                        break
                    }
                    h = d("ServiceWorkerServerData").getString("SiteData", "siteTypeHeader");
                    i = d("ServiceWorkerServerData").getData("SiteData", "siteType");
                    j = a.headers.get(h);
                    if (!(i && i !== j)) {
                        b.next = 19;
                        break
                    }
                    d("ServiceWorkerBase").genUnregisterSelf();
                    return b.abrupt("return", {
                        failReason: n("SITE_MISMATCH"),
                        response: null
                    });
                case 19:
                    if (!c.cachedNonce) {
                        b.next = 24;
                        break
                    }
                    k = d("ServiceWorkerServerData").getString("SiteData", "nonceHeader");
                    l = a.headers.get(k);
                    if (!(l !== c.cachedNonce)) {
                        b.next = 24;
                        break
                    }
                    return b.abrupt("return", {
                        failReason: n("NONCE_MISMATCH"),
                        response: null
                    });
                case 24:
                    return b.abrupt("return", {
                        failReason: null,
                        response: a
                    });
                case 25:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }

    function k(a, e) {
        var f;
        return b("regeneratorRuntime").async(function(g) {
            while (1) switch (g.prev = g.next) {
                case 0:
                    if (!(!d("ServiceWorkerPreload").isEnabled() || !a)) {
                        g.next = 2;
                        break
                    }
                    return g.abrupt("return", {
                        response: null,
                        failReason: n("PRELOAD_NOT_ENABLED")
                    });
                case 2:
                    f = null;
                    g.prev = 3;
                    g.next = 6;
                    return b("regeneratorRuntime").awrap(a);
                case 6:
                    f = g.sent;
                    g.next = 13;
                    break;
                case 9:
                    g.prev = 9;
                    g.t0 = g["catch"](3);
                    c("FBLogger")("service_worker").catching(g.t0).mustfix("Failed to preload page");
                    return g.abrupt("return", {
                        response: null,
                        failReason: n("PRELOAD_ERROR_THROWN")
                    });
                case 13:
                    if (f) {
                        g.next = 16;
                        break
                    }
                    c("FBLogger")("service_worker").warn("Got no response when preloading page");
                    return g.abrupt("return", {
                        response: null,
                        failReason: n("PRELOAD_NO_RESPONSE")
                    });
                case 16:
                    g.next = 18;
                    return b("regeneratorRuntime").awrap(j(f, e));
                case 18:
                    return g.abrupt("return", g.sent);
                case 19:
                case "end":
                    return g.stop()
            }
        }, null, this, [
            [3, 9]
        ])
    }

    function e(c, e) {
        var f, g, k, l, m;
        return b("regeneratorRuntime").async(function(n) {
            while (1) switch (n.prev = n.next) {
                case 0:
                    f = h(c.request.url);
                    g = {};
                    k = d("ServiceWorkerVersion").getCurrentRev();
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_SVN")] = k;
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_BACKGROUND_WORK")] = 1;
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_PARTIAL_CACHE")] = e;
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_ROUTES")] = d("ServiceWorkerRoutes").getRoutesKey();
                    f.headers.set(d("ServiceWorkerConslidatedHeader").getHeaderName(), JSON.stringify(g));
                    n.next = 10;
                    return b("regeneratorRuntime").awrap(a.fetch(f));
                case 10:
                    l = n.sent;
                    n.next = 13;
                    return b("regeneratorRuntime").awrap(j(l, {}));
                case 13:
                    m = n.sent;
                    m.failReason && d("ServiceWorkerEventLogger").log("fetchCacheResponse fail reason: " + i(m.failReason));
                    return n.abrupt("return", m.response);
                case 16:
                case "end":
                    return n.stop()
            }
        }, null, this)
    }

    function f(c) {
        var e, f, g;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    e = h(c.request.url);
                    e.headers.set(d("ServiceWorkerConslidatedHeader").getHeaderName(), JSON.stringify(c.fetchHeader));
                    d("Artillery4SW").informNavigateRequestEvent(c.id, d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_REQUEST_START);
                    k.next = 5;
                    return b("regeneratorRuntime").awrap(a.fetch(e));
                case 5:
                    f = k.sent;
                    d("Artillery4SW").informNavigateRequestEvent(c.id, d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_RESPONSE_START);
                    k.next = 9;
                    return b("regeneratorRuntime").awrap(j(f, {
                        hasCacheContent: !!c.cachedEFPageContent
                    }));
                case 9:
                    g = k.sent;
                    g.failReason && d("ServiceWorkerEventLogger").log("fetchDynamicResponse fail reason: " + i(g.failReason));
                    return k.abrupt("return", g);
                case 12:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }

    function l(a) {
        var c;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.next = 2;
                    return b("regeneratorRuntime").awrap(k(a.preloadResponse, {
                        hasCacheContent: !!a.cachedEFPageContent
                    }));
                case 2:
                    c = e.sent;
                    c.failReason && d("ServiceWorkerEventLogger").log("extractPreloadResponse fail reason: " + i(c.failReason));
                    return e.abrupt("return", c);
                case 5:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function m(a, c) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(k(a, {
                        skipRevCheck: !0,
                        redirectAllowed: c.redirectAllowed
                    }));
                case 2:
                    e = f.sent;
                    e.failReason && d("ServiceWorkerEventLogger").log("extractNoCachePreloadResponse fail reason: " + i(e.failReason));
                    return f.abrupt("return", e);
                case 5:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function n(a) {
        var b = d("ServiceWorkerServerData").getData("ResourceCacheData", "failReasons", {});
        return b && typeof b === "object" && b[a] && typeof b[a] === "number" ? b[a] : 0
    }

    function o(a, c) {
        var d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.next = 2;
                    return b("regeneratorRuntime").awrap(j(a, c));
                case 2:
                    d = e.sent;
                    if (!(d.failReason !== null)) {
                        e.next = 7;
                        break
                    }
                    return e.abrupt("return", {
                        response: null,
                        failReason: d.failReason,
                        failReasonText: i(Number(d.failReason))
                    });
                case 7:
                    return e.abrupt("return", {
                        response: a,
                        failReason: null,
                        failReasonText: null
                    });
                case 8:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }
    g.fetchCacheResponseForInstall = e;
    g.fetchDynamicResponse = f;
    g.extractPreloadResponse = l;
    g.extractNoCachePreloadResponse = m;
    g.getFailReason = n;
    g.verifyOrFailServerResponse = o
}), 98);
__d("ServiceWorkerNavPreload", ["ForcedNavigateToRequest", "ServiceWorkerCacheResponse", "ServiceWorkerEventLogger", "ServiceWorkerFetchPage", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        a = d("ForcedNavigateToRequest").enqueueResponse(a.request.url, null, b);
        return new Response("", {
            status: 307,
            headers: {
                Location: a
            }
        })
    }

    function i(a) {
        var c, e, f, g, i, j;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    k.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerFetchPage").extractNoCachePreloadResponse(a.preloadResponse, {
                        redirectAllowed: !0
                    }));
                case 2:
                    c = k.sent;
                    if (c.response) {
                        k.next = 6;
                        break
                    }
                    d("ServiceWorkerEventLogger").log("NAV PRELOAD: No response, refresh page");
                    return k.abrupt("return", {
                        response: h(a, c.failReason ? c.failReason : 0)
                    });
                case 6:
                    e = c.response;
                    f = d("ServiceWorkerCacheResponse").getResponseTypes(), g = f.NO_CACHE;
                    i = d("ServiceWorkerCacheResponse").getResponseHeaderName();
                    j = e.headers.get(i);
                    if (!(j && j !== String(g))) {
                        k.next = 13;
                        break
                    }
                    d("ServiceWorkerEventLogger").log('NAV PRELOAD: Invalid response type, refresh page: "' + j + '"');
                    return k.abrupt("return", {
                        response: h(a, d("ServiceWorkerFetchPage").getFailReason("PRELOADNAV_INVALID_RESPONSE_TYPE"))
                    });
                case 13:
                    return k.abrupt("return", {
                        response: e
                    });
                case 14:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }

    function a(a) {
        return !a.preloadResponse ? null : i(a)
    }
    g.fetchHandler = a
}), 98);
__d("ServiceWorkerFetchEvent", ["ForcedNavigateToRequest", "ServiceWorkerEventLogger", "ServiceWorkerNavPreload", "ServiceWorkerPreload", "ServiceWorkerRoutes", "URL", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = null,
        i = null;

    function j(a) {
        var c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(a);
                case 2:
                    c = d.sent;
                    if (!(c.response instanceof Promise)) {
                        d.next = 7;
                        break
                    }
                    d.next = 6;
                    return b("regeneratorRuntime").awrap(c.response);
                case 6:
                    return d.abrupt("return", d.sent);
                case 7:
                    return d.abrupt("return", c.response);
                case 8:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function k(a) {
        var c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(a);
                case 2:
                    c = d.sent;
                    if (!c.waitUntil) {
                        d.next = 6;
                        break
                    }
                    d.next = 6;
                    return b("regeneratorRuntime").awrap(c.waitUntil);
                case 6:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function l(a, b) {
        b instanceof Promise ? (a.respondWith(j(b)), a.waitUntil(k(b))) : (a.respondWith(b.response), b.waitUntil && a.waitUntil(b.waitUntil))
    }

    function a() {
        return !!(h || i)
    }

    function e(a) {
        if (d("ServiceWorkerRoutes").shouldBypassFetch(a.request)) return;
        var b = null,
            e = new(c("URL"))(a.request.url);
        if (e.searchParams.has("sw_fnr_id")) {
            d("ServiceWorkerEventLogger").log("Loading custom redirect from cache");
            b = d("ForcedNavigateToRequest").responseToFetch(a, e.searchParams.get("sw_fnr_id"));
            if (b) {
                l(a, b);
                return
            }
            if (b === null) return
        }
        if (a.request.mode === "navigate") {
            if (a.request.method !== "GET") return;
            h && (b = h(a));
            !b && a.preloadResponse && d("ServiceWorkerPreload").isEnabled() && (b = d("ServiceWorkerNavPreload").fetchHandler(a))
        } else i && (b = i(a));
        if (b) {
            l(a, b);
            return
        }
    }

    function f(a) {
        if (h) throw new Error("Navigate fetch handler already registered.");
        h = a
    }

    function m(a) {
        if (i) throw new Error("Resource fetch handler already registered.");
        i = a
    }
    g.hasFetchHandler = a;
    g.handleEvent = e;
    g.setNavigateFetchHandler = f;
    g.setResourceFetchHandler = m
}), 98);
__d("ServiceWorkerInstallEvent", ["Promise", "ServiceWorkerAsyncStorage", "ServiceWorkerEventLogger", "ServiceWorkerMessage", "ServiceWorkerQuietError", "ServiceWorkerVersion", "genClientWindows", "promiseDone", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "sw_version",
        i = [];

    function a(a) {
        var e, f;
        return b("regeneratorRuntime").async(function(g) {
            while (1) switch (g.prev = g.next) {
                case 0:
                    g.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem(h));
                case 2:
                    a = g.sent;
                    e = a && typeof a.version === "number" ? a.version : -2;
                    f = d("ServiceWorkerVersion").getCurrentRev();
                    if (!(e > f)) {
                        g.next = 7;
                        break
                    }
                    throw new(c("ServiceWorkerQuietError"))("Service workers can only progress forward.");
                case 7:
                    g.next = 9;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").setItem(h, {
                        version: f
                    }));
                case 9:
                    d("ServiceWorkerEventLogger").log("Installing version " + f);
                    g.prev = 10;
                    g.next = 13;
                    return b("regeneratorRuntime").awrap(b("Promise").all(i.map(function(a) {
                        return a()
                    })));
                case 13:
                    g.next = 18;
                    break;
                case 15:
                    g.prev = 15, g.t0 = g["catch"](10), c("promiseDone")(c("genClientWindows")({
                        includeUncontrolled: !0
                    }), function(a) {
                        for (var b = 0; b < a.length; b++) {
                            var d = new(c("ServiceWorkerMessage"))("ServiceWorkerInstallError");
                            d.sendTo(a[b])
                        }
                        throw g.t0
                    });
                case 18:
                    self.skipWaiting();
                case 19:
                case "end":
                    return g.stop()
            }
        }, null, this, [
            [10, 15]
        ])
    }

    function e(a) {
        i.push(a)
    }
    g.handleEvent = a;
    g.addInstallFunction = e
}), 98);
__d("ServiceWorkerNavigateFetchEvent", ["ServiceWorkerEventLogger"], (function(a, b, c, d, e, f, g) {
    var h = [];

    function a(a) {
        for (var b = 0; b < h.length; b++)
            if (h[b].canHandle(a)) {
                d("ServiceWorkerEventLogger").log("SW: fetch event intercepted");
                return h[b].fetch(a)
            }
        return null
    }

    function b(a) {
        h.push(a)
    }

    function c() {
        return h.length > 0
    }
    g.fetch = a;
    g.register = b;
    g.hasHandlers = c
}), 98);
__d("genClientWindow", ["genClientWindows", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    a === void 0 && (a = {});
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(c("genClientWindows")(a));
                case 3:
                    d = e.sent;
                    if (!(d.length > 0)) {
                        e.next = 6;
                        break
                    }
                    return e.abrupt("return", d[0]);
                case 6:
                    return e.abrupt("return", null);
                case 7:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }
    g["default"] = a
}), 98);
__d("ServiceWorkerNotificationClickEvent", ["BrowserPushCommands", "Promise", "ServiceWorkerMessage", "ServiceWorkerRequest", "genClientWindow", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = 800;

    function i(a) {
        var d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(c("genClientWindow")({
                        includeUncontrolled: !0
                    }));
                case 2:
                    d = f.sent;
                    if (!d) {
                        f.next = 10;
                        break
                    }
                    f.next = 6;
                    return b("regeneratorRuntime").awrap(k(d, a));
                case 6:
                    e = f.sent;
                    if (!e) {
                        f.next = 10;
                        break
                    }
                    d.focus();
                    return f.abrupt("return");
                case 10:
                    f.next = 12;
                    return b("regeneratorRuntime").awrap(j(a));
                case 12:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function j(a) {
        var c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(self.clients.openWindow(a));
                case 2:
                    c = d.sent;
                    if (!(c && c.focus)) {
                        d.next = 11;
                        break
                    }
                    d.prev = 4;
                    d.next = 7;
                    return b("regeneratorRuntime").awrap(c.focus());
                case 7:
                    d.next = 11;
                    break;
                case 9:
                    d.prev = 9, d.t0 = d["catch"](4);
                case 11:
                case "end":
                    return d.stop()
            }
        }, null, this, [
            [4, 9]
        ])
    }

    function k(a, e) {
        return new(b("Promise"))(function(b, f) {
            var g = setTimeout(function() {
                if (b === null) return;
                b(!1);
                b = null
            }, h);
            f = new(c("ServiceWorkerMessage"))(d("BrowserPushCommands").REDIRECT, {
                uri: e
            }, function(a) {
                if (b === null || a.origin !== "") return;
                var c = a.data.command || null;
                c === d("BrowserPushCommands").ACK && !a.data.success ? b(!1) : c === d("BrowserPushCommands").ACK && a.data.success && b(!0);
                clearTimeout(g)
            });
            f.sendTo(a)
        })
    }

    function l(a, c) {
        var e, f, g, h, j;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    e = 0;
                case 1:
                    if (!(e < c.length)) {
                        k.next = 10;
                        break
                    }
                    f = c[e], g = f.action, h = f.url, j = f.ping;
                    if (!(g === a)) {
                        k.next = 7;
                        break
                    }
                    k.next = 6;
                    return b("regeneratorRuntime").awrap(j ? d("ServiceWorkerRequest").genFetchUri(h) : i(h));
                case 6:
                    return k.abrupt("return");
                case 7:
                    e++;
                    k.next = 1;
                    break;
                case 10:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }

    function a(a) {
        var c, d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    if (a.notification) {
                        f.next = 2;
                        break
                    }
                    return f.abrupt("return");
                case 2:
                    c = a.notification;
                    c.close && c.close();
                    if (!a.action) {
                        f.next = 10;
                        break
                    }
                    d = c.data && c.data.actions ? c.data.actions : [];
                    f.next = 8;
                    return b("regeneratorRuntime").awrap(l(String(a.action), d));
                case 8:
                    f.next = 13;
                    break;
                case 10:
                    e = c.data && c.data.uri ? c.data.uri : "/";
                    f.next = 13;
                    return b("regeneratorRuntime").awrap(i(String(e)));
                case 13:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }
    g.handleEvent = a
}), 98);
__d("ServiceWorkerNotificationCloseEvent", ["ServiceWorkerRequest", "ServiceWorkerServerData", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "/notifications/client/push/dismiss/";

    function a(a) {
        var c, e;
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    c = new Map(), c.set("appid", d("ServiceWorkerServerData").getData("GenericNotificationData", "appid", 0)), a.notification && a.notification.data && (e = a.notification.data, Object.prototype.hasOwnProperty.call(e, "id") && c.set("notif_id", e.id), Object.prototype.hasOwnProperty.call(e, "ndid") && c.set("ndid", e.ndid), Object.prototype.hasOwnProperty.call(e, "notif_type") && c.set("notif_type", e.notif_type)), d("ServiceWorkerRequest").genSendDataToUri(h, c);
                case 4:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }
    g.handleEvent = a
}), 98);
__d("WebFunnelLogger", ["invariant", "Banzai"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function() {
        function a(a) {
            this.$2 = {}, this.$3 = {}, this.$4 = "web_funnel_logging", this.$5(), this.$1.funnel_definition = a
        }
        var b = a.prototype;
        b.log = function() {
            this.$1.funnel_payload = JSON.stringify(this.$2), this.$1.action_payload = JSON.stringify(this.$3), c("Banzai").post(this.$4, this.$1, c("Banzai").BASIC), this.$5()
        };
        b.logWithEventTime = function(a) {
            this.$1.event_time = a / 1e3, this.$6(), c("Banzai").post(this.$4, this.$1, c("Banzai").BASIC), this.$5()
        };
        b.logVital = function() {
            this.$6(), c("Banzai").post(this.$4, this.$1, c("Banzai").VITAL), this.$5()
        };
        b.logVitalWithEventTime = function(a) {
            this.$1.event_time = a / 1e3, this.$6(), c("Banzai").post(this.$4, this.$1, c("Banzai").VITAL), this.$5()
        };
        b.$6 = function() {
            this.$1.funnel_payload = JSON.stringify(this.$2), this.$1.action_payload = JSON.stringify(this.$3), this.$1.action !== null || h(0, 5829), this.$1.session_key !== null || h(0, 5830)
        };
        b.$5 = function() {
            this.$1 = {};
            this.$2 = {};
            this.$3 = {};
            return this
        };
        b.setAction = function(a) {
            this.$1.action = a;
            return this
        };
        b.addActionPayload = function(a, b) {
            this.$3[a] = b;
            return this
        };
        b.setActionTag = function(a) {
            this.$1.action_tag = a;
            return this
        };
        b.addFunnelPayload = function(a, b) {
            this.$2[a] = b;
            return this
        };
        b.setFunnelTags = function(a) {
            this.$1.funnel_tags = a;
            return this
        };
        b.setSecondaryOrder = function(a) {
            this.$1.secondary_order_value = a;
            return this
        };
        b.setSessionKey = function(a) {
            this.$1.session_key = a;
            return this
        };
        b.markStart = function() {
            this.$1.session_marker = "start";
            return this
        };
        b.markEnd = function() {
            this.$1.session_marker = "end";
            return this
        };
        b.setUserId = function(a) {
            this.$1.user_id = a;
            return this
        };
        b.setIsEmployee = function(a) {
            this.$1.is_employee = a;
            return this
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("uuid", [], (function(a, b, c, d, e, f) {
    function a() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            a = a == "x" ? b : b & 3 | 8;
            return a.toString(16)
        })
    }
    f["default"] = a
}), 66);
__d("ServiceWorkerPaymentHandler", ["FBLogger", "Promise", "ServiceWorkerMessage", "ServiceWorkerServerData", "WebFunnelLogger", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h() {
        this.resolve, this.reject, this.promise = new(b("Promise"))(function(a, b) {
            this.resolve = a, this.reject = b
        }.bind(this))
    }
    var i = null;

    function a(a) {
        var b = "canmakepayment";
        if (!a.respondWith) {
            new(c("WebFunnelLogger"))("PaymentAppWebFunnelDefinition").setAction("empty_event_respondwith").setSessionKey(b).log();
            return !1
        }
        var e = d("ServiceWorkerServerData").getData("BrowserPaymentHandler", "enabled", !1);
        if (e !== !0) {
            new(c("WebFunnelLogger"))("PaymentAppWebFunnelDefinition").setAction("not_in_gk").setSessionKey(b).log();
            a.respondWith(!1);
            return !1
        }
        a.methodData[0].data || c("FBLogger")("canmakepayment").info("use default data");
        a.respondWith(!0);
        return !0
    }

    function e(a) {
        var b, d, e, f = new h(),
            g = a;
        a.methodData[0].data || new(c("WebFunnelLogger"))("PaymentAppWebFunnelDefinition").setAction("no data in methodData").setSessionKey(a.paymentRequestId).markEnd().log();
        b = (b = a.methodData[0].data) == null ? void 0 : b.payeeID;
        d = (d = a.paymentRequestId) != null ? d : c("uuid")();
        var j = (e = {
            amount: a.total.value,
            currency: a.total.currency
        }, e["display_items[Items from " + a.topOrigin + "]"] = a.total.value, e.merchant_domain = a.topOrigin, e.payment_request_id = d, e.supported_method = a.methodData[0].supportedMethods, e.num_method_data = a.methodData.length, e.payee_id = b, e);
        d = self.location.origin + "/payments/browserpay?" + Object.keys(j).filter(function(a) {
            return j[a] !== null && j[a] !== void 0
        }).map(function(a) {
            return encodeURIComponent(a) + "=" + encodeURIComponent(j[a])
        }).join("&");
        a.respondWith ? (a.respondWith(f.promise), a.openWindow(d)["catch"](function(a) {
            f.reject(a)
        })) : new(c("WebFunnelLogger"))("PaymentAppWebFunnelDefinition").setAction("empty_event_respondwith").setSessionKey(g.paymentRequestId).markEnd().log();
        i !== null && i.remove();
        i = c("ServiceWorkerMessage").addCommandHandler("payment_response_ready", function(a) {
            a.data === null || a.data === void 0 ? f ? (f.reject("payment fail message is retrieved from checkout module"), new(c("WebFunnelLogger"))("PaymentAppWebFunnelDefinition").setAction("no_result_from_checkout_module").setSessionKey(g.paymentRequestId).markEnd().log()) : new(c("WebFunnelLogger"))("PaymentAppWebFunnelDefinition").setAction("no_promise_to_reject").setSessionKey(g.paymentRequestId).markEnd().log() : f ? (f.resolve(a.data), new(c("WebFunnelLogger"))("PaymentAppWebFunnelDefinition").setAction("promise_resolved").setSessionKey(g.paymentRequestId).log()) : new(c("WebFunnelLogger"))("PaymentAppWebFunnelDefinition").setAction("no_promise_to_resolve").setSessionKey(g.paymentRequestId).markEnd().log()
        })
    }
    g.handleCanMakePaymentEvent = a;
    g.handlePaymentRequestEvent = e
}), 98);
__d("ServiceWorkerPushNavigateCache", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 60 * 60 * 1e3,
        h = new Map(),
        i = {},
        j = {
            get: function(a) {
                return h.get(a)
            },
            set: function(a, b, c) {
                c === void 0 && (c = g), h.set(a, b), i[a] = setTimeout(function() {
                    j["delete"](a)
                }, c)
            },
            "delete": function(a) {
                h["delete"](a), clearTimeout(i[a]), delete i[a]
            },
            has: function(a) {
                return h.has(a)
            }
        };
    e.exports = j
}), null);
__d("ServiceWorkerPushEvent", ["DTSG", "FBLogger", "Promise", "ServiceWorkerAsyncStorage", "ServiceWorkerBase", "ServiceWorkerPushNavigateCache", "ServiceWorkerRequest", "ServiceWorkerServerData", "genClientWindow", "promiseDone", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = "/notifications/client/push/fetch?",
        i = "/notifications/client/push/event",
        j = "/notifications/client/push/delivered",
        k = "/notifications/client/push/not_displayed",
        l = "/notifications/client/push/badge",
        m = "last_time",
        n = 25e3,
        o = "generic_notif_count",
        p = "logged_out_push",
        q = "bump_event",
        r = "mids_visible",
        s = 0,
        t = null,
        u = [];

    function v(a, c) {
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    if (!u[a]) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return");
                case 2:
                    u[a] = !0;
                    e.next = 5;
                    return b("regeneratorRuntime").awrap(z("n", w(), d("ServiceWorkerServerData").getData("GenericNotificationData", "dir", "ltr"), c));
                case 5:
                    x();
                case 6:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function w() {
        return {
            title: d("ServiceWorkerServerData").getData("GenericNotificationData", "title", "Facebook"),
            message: d("ServiceWorkerServerData").getData("GenericNotificationData", "message", "You have new notifications."),
            pic: d("ServiceWorkerServerData").getData("GenericNotificationData", "pic", "https://www.facebook.com/images/icons-large/fb-xl.png"),
            uri: d("ServiceWorkerServerData").getData("GenericNotificationData", "uri", "/notifications"),
            badge: d("ServiceWorkerServerData").getData("GenericNotificationData", "badge")
        }
    }

    function x() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem(m));
                case 2:
                    a = c.sent;
                    (!a || !a.generic_notif || !Number.isInteger(a.generic_notif)) && (a = {
                        last_sync: null,
                        generic_notif: 0
                    });
                    if (!(typeof a !== "object" || a === null)) {
                        c.next = 6;
                        break
                    }
                    return c.abrupt("return");
                case 6:
                    a.generic_notif++, d("ServiceWorkerAsyncStorage").setItem(m, a);
                case 8:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function y(a) {
        var e, f, g;
        return b("regeneratorRuntime").async(function(h) {
            while (1) switch (h.prev = h.next) {
                case 0:
                    h.prev = 0;
                    e = new Request(a.uri, {
                        credentials: "include"
                    });
                    e.headers.append("skip_impression_logging", "1");
                    h.next = 5;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRequest").genFetchUri(e));
                case 5:
                    f = h.sent;
                    h.next = 8;
                    return b("regeneratorRuntime").awrap(f.text());
                case 8:
                    g = h.sent;
                    d("ServiceWorkerPushNavigateCache").set(f.url, g);
                    h.next = 15;
                    break;
                case 12:
                    h.prev = 12, h.t0 = h["catch"](0), c("FBLogger")("service_worker").catching(h.t0).mustfix("Failed to prefetch " + a.uri);
                case 15:
                case "end":
                    return h.stop()
            }
        }, null, this, [
            [0, 12]
        ])
    }

    function z(a, c, d, e) {
        var f, g;
        return b("regeneratorRuntime").async(function(h) {
            while (1) switch (h.prev = h.next) {
                case 0:
                    if (!c.prefetch) {
                        h.next = 3;
                        break
                    }
                    h.next = 3;
                    return b("regeneratorRuntime").awrap(y(c));
                case 3:
                    f = c.timestamp || Date.now();
                    f.toString().length === 10 && (f *= 1e3);
                    h.next = 7;
                    return b("regeneratorRuntime").awrap(self.registration.showNotification(c.title, {
                        actions: c.actions,
                        body: c.message,
                        icon: c.pic,
                        badge: c.badge,
                        tag: a,
                        dir: d,
                        data: {
                            actions: c.actions,
                            id: c.id || "",
                            mid: c.mid || "",
                            ndid: c.ndid || "",
                            notif_type: c.notif_type || "",
                            timestamp: e,
                            uri: c.uri
                        },
                        timestamp: f,
                        renotify: !0
                    }));
                case 7:
                    g = h.sent;
                    return h.abrupt("return", g);
                case 9:
                case "end":
                    return h.stop()
            }
        }, null, this)
    }

    function A(a) {
        var b = a.endpoint;
        "subscriptionId" in a && !new RegExp("/" + a.subscriptionId + "$").test(b) && (b += "/" + a.subscriptionId);
        return b
    }

    function B(a) {
        var c, e, f, g, i, j;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    if (a) {
                        k.next = 2;
                        break
                    }
                    throw new Error("push subscription not found");
                case 2:
                    c = h + "push_endpoint=" + encodeURIComponent(A(a)) + "&";
                    k.next = 5;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem(m));
                case 5:
                    e = k.sent;
                    f = null;
                    e && e.last_sync && (f = e.last_sync);
                    f && (c = c + m + "=" + encodeURIComponent(f) + "&");
                    e && e.generic_notif && (c = c + o + "=" + encodeURIComponent(e.generic_notif) + "&");
                    g = d("ServiceWorkerServerData").getData("MLoggedOutPush", "enabled");
                    g && (c = c + p + "=1&");
                    if (!self.registration.getNotifications) {
                        k.next = 19;
                        break
                    }
                    k.next = 15;
                    return b("regeneratorRuntime").awrap(self.registration.getNotifications());
                case 15:
                    i = k.sent, i.filter(function(a) {
                        return a.data && a.data.mid
                    }), j = i.map(function(a) {
                        return a.data.mid
                    }), j && j.length > 0 && (c = c + r + "=" + encodeURIComponent(j.join(",")) + "&");
                case 19:
                    L() && (c = c + q + "=true&");
                    return k.abrupt("return", c);
                case 21:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }

    function C(a, e, f) {
        var g, h, i, j, k;
        return b("regeneratorRuntime").async(function(l) {
            while (1) switch (l.prev = l.next) {
                case 0:
                    if (!u[e]) {
                        l.next = 2;
                        break
                    }
                    return l.abrupt("return");
                case 2:
                    if (!(a.unregister && a.unregister === !0)) {
                        l.next = 6;
                        break
                    }
                    l.next = 5;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerBase").genUnregisterSelf());
                case 5:
                    return l.abrupt("return");
                case 6:
                    if (!(!a.notifs || !Object.keys(a.notifs).length)) {
                        l.next = 10;
                        break
                    }
                    l.next = 9;
                    return b("regeneratorRuntime").awrap(v(e, f.timeStamp));
                case 9:
                    return l.abrupt("return");
                case 10:
                    u[e] = !0;
                    g = {
                        last_sync: a.time,
                        generic_notif: 0
                    };
                    d("ServiceWorkerAsyncStorage").setItem(m, g);
                    h = a.dir;
                    i = [];
                    j = null;
                    for (k in a.notifs) i.push(z(k, a.notifs[k], h, f.timeStamp)), a.notifs[k].update_token_params && (j = a.notifs[k].update_token_params);
                    l.next = 19;
                    return b("regeneratorRuntime").awrap(b("Promise").race(i));
                case 19:
                    j && c("promiseDone")(E(j));
                case 20:
                case "end":
                    return l.stop()
            }
        }, null, this)
    }

    function D(a) {
        var c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    if (!self.registration.getNotifications) {
                        d.next = 5;
                        break
                    }
                    d.next = 3;
                    return b("regeneratorRuntime").awrap(self.registration.getNotifications());
                case 3:
                    c = d.sent, c.map(function(b) {
                        b.close && b.data && b.data.mid && a.includes(b.data.mid) && b.close()
                    });
                case 5:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function E(a) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    e = new Map();
                    e.set("appid", a.data.appid).set("push_endpoint", a.data.push_endpoint);
                    d("DTSG").setToken(a.csrf_token);
                    f.next = 5;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRequest").fetchCSRFTokenAndPostData(a.uri, e)["catch"](function(b) {
                        c("FBLogger")("service_worker").catching(b).warn("failed to update token timestamp for " + a.data.push_endpoint)
                    }));
                case 5:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function F(a, d) {
        var e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    e = new(b("Promise"))(function(b, e) {
                        self.setTimeout(function() {
                            c("promiseDone")(v(d, a.timeStamp), b, e)
                        }, n), c("promiseDone")(c("genClientWindow")({
                            focusedCheck: !0
                        }), function(c) {
                            if (c) {
                                u[d] = !0;
                                b();
                                J(a, k);
                                return
                            }
                            H();
                            if (a.data && a.data.json) {
                                c = a.data.json();
                                if (c && c.type) {
                                    I(a, c, d).then(b)["catch"](function() {
                                        v(d, a.timeStamp).then(b)["catch"](e)
                                    });
                                    return
                                }
                            }
                            G(b, e, a, d)
                        })
                    });
                    f.next = 3;
                    return b("regeneratorRuntime").awrap(e);
                case 3:
                    s++, t = null;
                case 5:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function G(a, b, c, e) {
        self.registration.pushManager.getSubscription().then(B).then(d("ServiceWorkerRequest").genJsonFromUri).then(function(a) {
            a.mids_to_remove && a.mids_to_remove.length && D(a.mids_to_remove);
            return C(a, e, c)
        }).then(a)["catch"](function() {
            v(e, c.timeStamp).then(a)["catch"](b)
        })
    }

    function H() {
        var a = d("ServiceWorkerServerData").getData("WebAppBadge", "enabled");
        if (!a) return;
        self.registration.pushManager.getSubscription().then(function(a) {
            a = l + "?push_endpoint=" + encodeURIComponent(A(a));
            return d("ServiceWorkerRequest").genJsonFromUri(a)
        }).then(function(a) {
            a = a.badge_count;
            navigator.setAppBadge && navigator.setAppBadge(a)
        })["catch"](function(a) {
            c("FBLogger")("service_worker").catching(a).warn("failed to update app badge")
        })
    }

    function I(a, c, e) {
        var f, g, h;
        return b("regeneratorRuntime").async(function(i) {
            while (1) switch (i.prev = i.next) {
                case 0:
                    f = w();
                    g = d("ServiceWorkerServerData").getData("GenericNotificationData", "use_notif_id_as_tag", !1);
                    h = "n";
                    if (!(c.type && c.type === "messenger_remove_message")) {
                        i.next = 6;
                        break
                    }
                    i.next = 6;
                    return b("regeneratorRuntime").awrap(D([c.n]));
                case 6:
                    g ? (c.i || c.t) && (h = c.i ? c.i : c.t) : c.type && (h = c.type === "msg" ? "m" : "n");
                    u[e] = !0;
                    i.next = 10;
                    return b("regeneratorRuntime").awrap(z(h, {
                        title: c.title ? c.title : f.title,
                        message: c.message ? c.message : f.message,
                        actions: c.actions ? c.actions : [],
                        pic: c.ppu ? c.ppu : f.pic,
                        uri: c.href ? c.href : f.uri,
                        ndid: c.d ? c.d : null,
                        notif_type: c.type ? c.type : null,
                        id: c.i ? c.i : c.t ? c.t : null,
                        timestamp: c.time ? c.time : a.timeStamp,
                        badge: c.badge,
                        mid: c.n
                    }, d("ServiceWorkerServerData").getData("GenericNotificationData", "dir", "ltr"), a.timeStamp));
                case 10:
                    J(a, j);
                case 11:
                case "end":
                    return i.stop()
            }
        }, null, this)
    }

    function J(a, c) {
        var e, f, g;
        return b("regeneratorRuntime").async(function(h) {
            while (1) switch (h.prev = h.next) {
                case 0:
                    e = new Map();
                    e.set("appid", d("ServiceWorkerServerData").getData("GenericNotificationData", "appid", 0));
                    a.data && a.data.json && (f = a.data.json(), Object.prototype.hasOwnProperty.call(f, "i") && e.set("notif_id", f.i), Object.prototype.hasOwnProperty.call(f, "d") && e.set("ndid", f.d), Object.prototype.hasOwnProperty.call(f, "type") && e.set("notif_type", f.type));
                    L() && e.set(q, !0);
                    h.next = 6;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRequest").genSendDataToUri(c, e));
                case 6:
                    g = h.sent;
                    if (!(g.unregister && g.unregister === !0)) {
                        h.next = 10;
                        break
                    }
                    h.next = 10;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerBase").genUnregisterSelf());
                case 10:
                case "end":
                    return h.stop()
            }
        }, null, this)
    }

    function K(a, c) {
        var d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    if (!self.registration.getNotifications) {
                        e.next = 5;
                        break
                    }
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(self.registration.getNotifications());
                case 3:
                    d = e.sent, d.map(function(b) {
                        b.close && (!a && !c || b.tag === a && b.data && b.data.timestamp && b.data.timestamp === c) && b.close()
                    });
                case 5:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function L() {
        return !!d("ServiceWorkerServerData").getData("GenericNotificationData", "should_log_event_lifecycle", !1)
    }

    function M() {
        L() && c("promiseDone")(d("ServiceWorkerRequest").genFetchUriBeacon(i))
    }

    function a(a) {
        return b("regeneratorRuntime").async(function(b) {
            while (1) switch (b.prev = b.next) {
                case 0:
                    M();
                    t === null && (u[s] = !1, t = F(a, s));
                    return b.abrupt("return", t);
                case 3:
                case "end":
                    return b.stop()
            }
        }, null, this)
    }

    function e(a) {
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    if (!(t !== null)) {
                        d.next = 8;
                        break
                    }
                    d.next = 3;
                    return b("regeneratorRuntime").awrap(t);
                case 3:
                    d.next = 5;
                    return b("regeneratorRuntime").awrap(c("genClientWindow")({
                        focusedCheck: !0
                    }));
                case 5:
                    a = d.sent;
                    if (a) {
                        d.next = 8;
                        break
                    }
                    return d.abrupt("return");
                case 8:
                    d.next = 10;
                    return b("regeneratorRuntime").awrap(K());
                case 10:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function f(a) {
        return d("ServiceWorkerPushNavigateCache").has(a)
    }

    function N(a) {
        try {
            var b = d("ServiceWorkerPushNavigateCache").get(a);
            d("ServiceWorkerPushNavigateCache")["delete"](a);
            return b
        } catch (b) {
            c("FBLogger")("service_worker").catching(b).mustfix("Failed to get cache for " + a)
        }
        return null
    }
    g.handleEvent = a;
    g.genWindowBecameVisible = e;
    g.hasCachedResponse = f;
    g.getAndRemoveCachedResponse = N
}), 98);
__d("ServiceWorkerPushNavigateFetchEvent", ["Artillery4SW", "ServiceWorkerEventLogger", "ServiceWorkerProfilerTypes", "ServiceWorkerPushEvent", "ServiceWorkerServerData"], (function(a, b, c, d, e, f, g) {
    var h = "push",
        i = "text/html; charset=utf-8";

    function a(a) {
        if (!this.canHandle(a)) return null;
        d("ServiceWorkerEventLogger").log("SW PUSH: fetch event intercepted");
        var b = d("ServiceWorkerServerData").getData("EarlyResponseData", "requestHeaders", {});
        d("Artillery4SW").informNavigateRequestEvent(h, d("ServiceWorkerProfilerTypes").FetchTiming.BEGIN_RESPONSE);
        b = b;
        b["content-type"] = i;
        a = d("ServiceWorkerPushEvent").getAndRemoveCachedResponse(a.request.url);
        return !a ? null : {
            response: new Response(a, {
                headers: b
            }),
            waitUntil: d("Artillery4SW").waitForNavigateRequestLogging(h)
        }
    }

    function b(a) {
        return !!d("ServiceWorkerPushEvent").hasCachedResponse(a.request.url)
    }
    g.fetch = a;
    g.canHandle = b
}), 98);
__d("ServiceWorkerResourceCacheActivateEvent", ["Artillery4SW", "Promise", "RouteLoadsLogging", "ServiceWorkerAsyncStorage", "ServiceWorkerCacheStorage", "ServiceWorkerRouter", "ServiceWorkerVersion", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function a() {
        var a, c, e, f, g, h, i, j;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    d("Artillery4SW").informResourceCacheActivateStart();
                    a = {};
                    k.next = 4;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerAsyncStorage").getItem("rsrc_to_save" + d("ServiceWorkerVersion").getInstanceKey()));
                case 4:
                    c = k.sent;
                    if (c) {
                        e = Object.values(c);
                        for (f = 0; f < e.length; f++) {
                            g = e[f];
                            h = Object.values(g);
                            for (i = 0; i < h.length; i++) j = h[i], j && typeof j.src === "string" && (a[j.src] = !0)
                        }
                    }
                    a[registration.scope] = !0;
                    k.next = 9;
                    return b("regeneratorRuntime").awrap(b("Promise").all([d("ServiceWorkerCacheStorage").purgeCacheExceptFor(a), d("ServiceWorkerAsyncStorage").removeAllItemWithPredicate(function(a) {
                        a = /rsrc_to_save(.*)/.exec(a);
                        return !a || !a[1] ? !1 : d("ServiceWorkerVersion").isInstanceKeyFromEarlier(a[1], {
                            includeCurrent: !0
                        })
                    }), d("ServiceWorkerRouter").activateRoutes(), d("ServiceWorkerCacheStorage").activateCache(), d("RouteLoadsLogging").activateRouteLoadsLogging()]));
                case 9:
                    d("Artillery4SW").informResourceCacheActivateEnd();
                case 10:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }
    g.activate = a
}), 98);
__d("ServiceWorkerResponseSWOnlyFilter", ["ServiceWorkerServerData"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = d("ServiceWorkerServerData").getString("ResourceCacheData", "sw_cache_only_mark_start"),
            c = d("ServiceWorkerServerData").getString("ResourceCacheData", "sw_cache_only_mark_end"),
            e = a.indexOf(b);
        while (e !== -1) {
            var f = a.indexOf(c);
            if (f !== -1) a = a.substring(0, e) + a.substring(e + b.length, f) + a.substring(f + c.length);
            else break;
            e = a.indexOf(b)
        }
        return a
    }
    g.applyFilter = a
}), 98);
__d("StreamBlockReader", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            var c = this;
            if (!a.getReader) throw new Error("No getReader method found on given object");
            this.$3 = a.getReader();
            this.$1 = "";
            this.$2 = null;
            this.$4 = !1;
            this.$5 = "utf-8";
            this.$6 = "";
            this.$9 = !1;
            this.$8 = function() {
                return b("Promise").reject("Sorry, you are somehow using this too early.")
            };
            this.$7 = new(b("Promise"))(function(a, b) {
                c.$8 = a
            })
        }
        var c = a.prototype;
        c.changeEncoding = function(a) {
            if (this.$2) throw new Error("Decoder already in use, encoding cannot be changed");
            this.$5 = a
        };
        c.$10 = function() {
            if (!self.TextDecoder) throw new Error("TextDecoder is not supported here");
            this.$2 || (this.$2 = new self.TextDecoder(this.$5));
            return this.$2
        };
        c.$11 = function() {
            if (this.$9) throw new Error("Something else is already reading from this reader");
            this.$9 = !0
        };
        c.$12 = function() {
            this.$9 = !1
        };
        c.isDone = function() {
            return this.$4
        };
        c.$13 = function() {
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (!(this.$6 !== "")) {
                            f.next = 4;
                            break
                        }
                        a = this.$6;
                        this.$6 = "";
                        return f.abrupt("return", a);
                    case 4:
                        if (!this.isDone()) {
                            f.next = 6;
                            break
                        }
                        throw new Error("You cannot read from a stream that is done");
                    case 6:
                        f.next = 8;
                        return b("regeneratorRuntime").awrap(this.$3.read());
                    case 8:
                        c = f.sent;
                        d = c.done;
                        e = c.value;
                        this.$4 = d;
                        d && this.$8();
                        return f.abrupt("return", e ? this.$10().decode(e, {
                            stream: !d
                        }) : "");
                    case 14:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readNextBlock = function() {
            var a;
            return b("regeneratorRuntime").async(function(b) {
                while (1) switch (b.prev = b.next) {
                    case 0:
                        this.$11();
                        a = this.$13();
                        this.$12();
                        return b.abrupt("return", a);
                    case 4:
                    case "end":
                        return b.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrEnd = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]));
                    case 2:
                        return c.abrupt("return", c.sent);
                    case 3:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrThrow = function(a) {
            var c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (a) {
                            f.next = 2;
                            break
                        }
                        throw new Error("cannot read empty string");
                    case 2:
                        this.$11(), c = "", d = 0;
                    case 5:
                        if (this.isDone()) {
                            f.next = 23;
                            break
                        }
                        f.t0 = c;
                        f.next = 9;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 9:
                        c = f.t0 += f.sent;
                        if (!(c.length < a.length)) {
                            f.next = 12;
                            break
                        }
                        return f.abrupt("continue", 5);
                    case 12:
                        e = c.substring(d).indexOf(a);
                        if (!(e !== -1)) {
                            f.next = 20;
                            break
                        }
                        e += d;
                        this.$6 = c.substring(e + a.length);
                        this.$12();
                        return f.abrupt("return", c.substring(0, e));
                    case 20:
                        d = c.length - a.length + 1;
                    case 21:
                        f.next = 5;
                        break;
                    case 23:
                        this.$6 = c;
                        this.$12();
                        throw new Error("Breakpoint not found");
                    case 26:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readUntilOneOfStringOrEnd_DO_NOT_USE = function(a) {
            var c, d, e, f;
            return b("regeneratorRuntime").async(function(g) {
                while (1) switch (g.prev = g.next) {
                    case 0:
                        this.$11(), c = "";
                    case 2:
                        if (this.isDone()) {
                            g.next = 20;
                            break
                        }
                        g.t0 = c;
                        g.next = 6;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 6:
                        c = g.t0 += g.sent, d = 0;
                    case 8:
                        if (!(d < a.length)) {
                            g.next = 18;
                            break
                        }
                        e = a[d];
                        f = c.indexOf(e);
                        if (!(f !== -1)) {
                            g.next = 15;
                            break
                        }
                        this.$6 = c.substring(f + e.length);
                        this.$12();
                        return g.abrupt("return", c.substring(0, f));
                    case 15:
                        d++;
                        g.next = 8;
                        break;
                    case 18:
                        g.next = 2;
                        break;
                    case 20:
                        this.$12();
                        return g.abrupt("return", c);
                    case 22:
                    case "end":
                        return g.stop()
                }
            }, null, this)
        };
        c.waitUntilDone = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", this.$7);
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("ServiceWorkerExtractCacheContentFromPage", ["ServiceWorkerResponseSWOnlyFilter", "ServiceWorkerServerData", "StreamBlockReader", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var e, f, g, h;
        return b("regeneratorRuntime").async(function(i) {
            while (1) switch (i.prev = i.next) {
                case 0:
                    e = a.body;
                    if (e) {
                        i.next = 3;
                        break
                    }
                    return i.abrupt("return", null);
                case 3:
                    f = new(c("StreamBlockReader"))(e);
                    g = d("ServiceWorkerServerData").getString("ResourceCacheData", "cacheable_section_end");
                    i.next = 7;
                    return b("regeneratorRuntime").awrap(f.readUntilStringOrThrow(g));
                case 7:
                    h = i.sent;
                    return i.abrupt("return", d("ServiceWorkerResponseSWOnlyFilter").applyFilter(h));
                case 9:
                case "end":
                    return i.stop()
            }
        }, null, this)
    }
    g.processResponse = a
}), 98);
__d("ServiceWorkerExtractResourcesFromPage", ["Promise", "ServiceWorkerServerData", "StreamBlockReader", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function h() {
        var a = d("ServiceWorkerServerData").getString("ResourceCacheData", "rsrc_payload_earlyflush"),
            b = d("ServiceWorkerServerData").getString("ResourceCacheData", "rsrc_payload_start");
        return a + b
    }

    function a(a, e) {
        var f, g, i, j, k, l, m, n;
        return b("regeneratorRuntime").async(function(o) {
            while (1) switch (o.prev = o.next) {
                case 0:
                    f = [];
                    g = [];
                    i = a.body;
                    if (i) {
                        o.next = 5;
                        break
                    }
                    return o.abrupt("return", []);
                case 5:
                    j = new(c("StreamBlockReader"))(i), k = h(), l = d("ServiceWorkerServerData").getString("ResourceCacheData", "rsrc_payload_end");
                case 8:
                    if (j.isDone()) {
                        o.next = 28;
                        break
                    }
                    o.next = 11;
                    return b("regeneratorRuntime").awrap(j.readUntilStringOrEnd(String(k)));
                case 11:
                    o.next = 13;
                    return b("regeneratorRuntime").awrap(j.readUntilStringOrEnd(String(l)));
                case 13:
                    m = o.sent;
                    if (!j.isDone()) {
                        o.next = 16;
                        break
                    }
                    return o.abrupt("continue", 8);
                case 16:
                    o.prev = 16;
                    m.startsWith("/*") && m.endsWith("*/") && (m = m.substr(2, m.length - 4));
                    n = JSON.parse(m);
                    f.push(n);
                    g.push(e(n));
                    o.next = 26;
                    break;
                case 23:
                    o.prev = 23;
                    o.t0 = o["catch"](16);
                    return o.abrupt("continue", 8);
                case 26:
                    o.next = 8;
                    break;
                case 28:
                    o.next = 30;
                    return b("regeneratorRuntime").awrap(b("Promise").all(g));
                case 30:
                    return o.abrupt("return", f);
                case 31:
                case "end":
                    return o.stop()
            }
        }, null, this, [
            [16, 23]
        ])
    }
    g.processResponse = a
}), 98);
__d("ServiceWorkerResourceCacheInstallRoute", ["Promise", "ServiceWorkerAsyncStorage", "ServiceWorkerCacheResponse", "ServiceWorkerCacheStorage", "ServiceWorkerClientChromeConfig", "ServiceWorkerEventLogger", "ServiceWorkerExtractCacheContentFromPage", "ServiceWorkerExtractResourcesFromPage", "ServiceWorkerFetchPage", "ServiceWorkerResponseSWOnlyFilter", "ServiceWorkerRouter", "ServiceWorkerServerData", "ServiceWorkerVersion", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    var h = /^http/;

    function i(a) {
        var c, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    f.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerExtractResourcesFromPage").processResponse(a, function(a) {
                        return d("ServiceWorkerCacheStorage").installAllNotInCache(a, function(a) {
                            return h.test(a.src) ? a.src : null
                        })
                    }));
                case 2:
                    c = f.sent;
                    if (!c) {
                        f.next = 8;
                        break
                    }
                    e = d("ServiceWorkerVersion").getInstanceKey();
                    f.next = 7;
                    return b("regeneratorRuntime").awrap(b("Promise").all([d("ServiceWorkerAsyncStorage").setItem("rsrc_to_save" + e, c), d("ServiceWorkerCacheStorage").completeCacheInstall()]));
                case 7:
                    d("ServiceWorkerEventLogger").log("INSTALL: Saved resources to cache");
                case 8:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function j(a, c) {
        var e, f, g, h, i;
        return b("regeneratorRuntime").async(function(j) {
            while (1) switch (j.prev = j.next) {
                case 0:
                    j.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerExtractCacheContentFromPage").processResponse(a));
                case 2:
                    e = j.sent;
                    if (!e) {
                        j.next = 11;
                        break
                    }
                    f = new TextEncoder();
                    g = function(c) {
                        return b("regeneratorRuntime").async(function(g) {
                            while (1) switch (g.prev = g.next) {
                                case 0:
                                    g.next = 2;
                                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRouter").installRouteConfigCache(c.name, a.headers, {
                                        content: f.encode(e)
                                    }));
                                case 2:
                                case "end":
                                    return g.stop()
                            }
                        }, null, this)
                    };
                    h = [c].concat(c.similarRouteConfigs || []);
                    i = h.map(g);
                    j.next = 10;
                    return b("regeneratorRuntime").awrap(b("Promise").all(i));
                case 10:
                    d("ServiceWorkerEventLogger").log("INSTALL: Saved cached content to RouteConfig");
                case 11:
                case "end":
                    return j.stop()
            }
        }, null, this)
    }

    function k(a, c) {
        var e, f, g, h, i, j, k;
        return b("regeneratorRuntime").async(function(l) {
            while (1) switch (l.prev = l.next) {
                case 0:
                    l.next = 2;
                    return b("regeneratorRuntime").awrap(a.text());
                case 2:
                    e = l.sent;
                    f = d("ServiceWorkerServerData").getString("ResourceCacheData", "client_chrome_dynamic_metadata_start");
                    g = d("ServiceWorkerServerData").getString("ResourceCacheData", "client_chrome_dynamic_metadata_end");
                    h = e.indexOf(f);
                    i = e.indexOf(g, h);
                    if (!(h === -1 || i === -1)) {
                        l.next = 9;
                        break
                    }
                    throw new Error("INSTALL: Could not extract metadata from cache content");
                case 9:
                    j = e.substring(h + f.length, i);
                    e = d("ServiceWorkerResponseSWOnlyFilter").applyFilter(e);
                    k = new TextEncoder();
                    l.next = 14;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRouter").installRouteConfigCache(c.name, a.headers, {
                        content: k.encode(e),
                        clientChromeData: j
                    }));
                case 14:
                    d("ServiceWorkerEventLogger").log("INSTALL: Saved cached content to RouteConfig");
                case 15:
                case "end":
                    return l.stop()
            }
        }, null, this)
    }

    function a(a) {
        var c, e, f, g, h, l;
        return b("regeneratorRuntime").async(function(m) {
            while (1) switch (m.prev = m.next) {
                case 0:
                    c = d("ServiceWorkerCacheResponse").getResponseTypes();
                    e = d("ServiceWorkerClientChromeConfig").isEnabled();
                    f = e ? c.CACHE : c.EF_ONLY;
                    m.next = 5;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerFetchPage").fetchCacheResponseForInstall(a, f));
                case 5:
                    g = m.sent;
                    if (g) {
                        m.next = 8;
                        break
                    }
                    throw new Error("INSTALL: fetch cache content gave invalid response");
                case 8:
                    d("ServiceWorkerEventLogger").log("INSTALL: fetched cache content");
                    if (!e) {
                        m.next = 15;
                        break
                    }
                    d("ServiceWorkerEventLogger").log("INSTALL: Client chrome install");
                    h = g.clone();
                    m.next = 14;
                    return b("regeneratorRuntime").awrap(b("Promise").all([i(h), k(g, a)]));
                case 14:
                    return m.abrupt("return");
                case 15:
                    l = g.clone();
                    m.next = 18;
                    return b("regeneratorRuntime").awrap(b("Promise").all([i(l), j(g, a)]));
                case 18:
                case "end":
                    return m.stop()
            }
        }, null, this)
    }
    g.install = a
}), 98);
__d("ServiceWorkerResourceCacheInstallEvent", ["Promise", "ServiceWorkerEventLogger", "ServiceWorkerResourceCacheInstallRoute", "ServiceWorkerRouter", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function a() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerRouter").init());
                case 2:
                    a = d("ServiceWorkerRouter").getRouteConfigsForInstall();
                    c.next = 5;
                    return b("regeneratorRuntime").awrap(b("Promise").all(Object.keys(a).map(function(c) {
                        return b("regeneratorRuntime").async(function(e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    d("ServiceWorkerEventLogger").log("INSTALL: Installing route '" + c + "'");
                                    e.next = 3;
                                    return b("regeneratorRuntime").awrap(d("ServiceWorkerResourceCacheInstallRoute").install(a[c]));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, null, this)
                    })));
                case 5:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }
    g.install = a
}), 98);
__d("ServiceWorkerResourceCacheNavigateFetchRoute", ["invariant", "Artillery4SW", "ForcedNavigateToRequest", "ServiceWorkerCacheResponse", "ServiceWorkerClientChromeConfig", "ServiceWorkerClientID", "ServiceWorkerEventLogger", "ServiceWorkerFetchPage", "ServiceWorkerPreload", "ServiceWorkerProfilerTypes", "ServiceWorkerRouter", "ServiceWorkerServerData", "regeneratorRuntime"], (function(a, b, c, d, e, f, g, h) {
    var i = "<style>body {visibility: visible !important}</style>",
        j = 30;

    function k(a) {
        var c;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    e.prev = 0;
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(a);
                case 3:
                    c = e.sent;
                    return e.abrupt("return", c);
                case 7:
                    e.prev = 7, e.t0 = e["catch"](0);
                case 9:
                    return e.abrupt("return", {
                        response: null,
                        failReason: d("ServiceWorkerFetchPage").getFailReason("PAGE_RESPONSE_ERROR")
                    });
                case 10:
                case "end":
                    return e.stop()
            }
        }, null, this, [
            [0, 7]
        ])
    }

    function l(a) {
        var b = d("ServiceWorkerServerData").getString("SRPinningData", "spin_exp_override_header");
        return Boolean(a.headers.get(b))
    }

    function m(a, b) {
        if (!l(b)) return d("ServiceWorkerFetchPage").getFailReason("SPIN_OVERRIDE_MISSING");
        a = d("ServiceWorkerCacheResponse").getResponseTypes();
        a = a.NO_CACHE;
        var c = d("ServiceWorkerCacheResponse").getResponseHeaderName();
        b = b.headers.get(c);
        return b && b !== String(a) ? d("ServiceWorkerFetchPage").getFailReason("SPIN_OVERRIDE_WRONG_RESPONSE_TYPE") : 0
    }

    function n(a, b) {
        if (l(b)) return d("ServiceWorkerFetchPage").getFailReason("SPIN_OVERRIDE");
        var c = a.versionKey;
        if (!c) return d("ServiceWorkerFetchPage").getFailReason("NAVFETCHROUTE_NO_VERSION");
        var e = d("ServiceWorkerServerData").getString("SiteData", "fbRevHeader");
        e = b.headers.get(e);
        if (c !== e) {
            d("ServiceWorkerRouter").markRouteConfigCacheAsInvalid(a);
            d("ServiceWorkerEventLogger").log("FETCH NAV: Version mismatch, cache cleared. " + ('Client Version: "' + c + '", Server Version: "' + e + '"'));
            return d("ServiceWorkerFetchPage").getFailReason("NAVFETCHROUTE_VER_MISTMATCH")
        }
        c = d("ServiceWorkerCacheResponse").getResponseTypes();
        e = d("ServiceWorkerClientChromeConfig").isEnabled() ? c.DYNAMIC : c.EF_ONLY;
        c = d("ServiceWorkerCacheResponse").getResponseHeaderName();
        b = b.headers.get(c);
        if (b !== String(e)) {
            d("ServiceWorkerRouter").markRouteConfigCacheAsInvalid(a);
            d("ServiceWorkerEventLogger").log("FETCH NAV: Response typed mismatch, cache cleared. " + ('Expected: "' + e + '", Server gave: "' + b + '"'));
            return d("ServiceWorkerFetchPage").getFailReason("NAVFETCHROUTE_RSP_MISTMATCH")
        }
        return 0
    }

    function o(a, c) {
        a = a.request;
        var e = d("ForcedNavigateToRequest").enqueueResponse(a.url, null, c);
        return function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", {
                            value: '<script>window.location = "' + encodeURI(e) + '";</script></body></html>',
                            done: !0
                        });
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        }
    }

    function p(a) {
        a.request;
        var c = d("ServiceWorkerServerData").getString("SRPinningData", "network_error_js"),
            e = d("ServiceWorkerServerData").getString("SRPinningData", "network_error_markup"),
            f = d("ServiceWorkerServerData").getString("SRPinningData", "network_error_replace");
        return function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", {
                            value: "<script>" + c + "serviceWorkerNetworkError('" + f + "'," + ("'" + e + "');</script></body></html>"),
                            done: !0
                        });
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        }
    }

    function q(a, b, c) {
        var e = d("ServiceWorkerServerData").getData("SRPinningData", "enabled", !1);
        return e && d("ServiceWorkerClientChromeConfig").isEnabled() && b ? p(a) : o(a, c)
    }

    function r(a, c) {
        var d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    a = c.body;
                    a || h(0, 296);
                    d = a.getReader();
                    e = new self.TextDecoder("utf-8");
                    return f.abrupt("return", function() {
                        var a, c, f;
                        return b("regeneratorRuntime").async(function(g) {
                            while (1) switch (g.prev = g.next) {
                                case 0:
                                    g.next = 2;
                                    return b("regeneratorRuntime").awrap(d.read());
                                case 2:
                                    a = g.sent;
                                    c = a.done;
                                    f = a.value;
                                    return g.abrupt("return", {
                                        done: c,
                                        value: f ? e.decode(f, {
                                            stream: !c
                                        }) : ""
                                    });
                                case 6:
                                case "end":
                                    return g.stop()
                            }
                        }, null, this)
                    });
                case 5:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function s(a, c) {
        var e, f, g, i, k, l, m, n, p, q, r;
        return b("regeneratorRuntime").async(function(s) {
            while (1) switch (s.prev = s.next) {
                case 0:
                    e = c.body, e || h(0, 296), f = e.getReader(), g = new self.TextDecoder("utf-8"), i = d("ServiceWorkerServerData").getString("ResourceCacheData", "cacheable_section_end"), k = i.length, l = "";
                case 7:
                    s.next = 10;
                    return b("regeneratorRuntime").awrap(f.read());
                case 10:
                    m = s.sent;
                    n = m.done;
                    p = m.value;
                    if (!p) {
                        s.next = 19;
                        break
                    }
                    l += g.decode(p, {
                        stream: !n
                    });
                    q = l.indexOf(i);
                    if (!(q >= 0)) {
                        s.next = 19;
                        break
                    }
                    l = l.substr(q + k);
                    return s.abrupt("break", 26);
                case 19:
                    if (!n) {
                        s.next = 22;
                        break
                    }
                    d("ServiceWorkerEventLogger").log("FETCH NAV: Force refresh, cut token not found in response");
                    return s.abrupt("return", o(a, d("ServiceWorkerFetchPage").getFailReason("NO_CUT_TOKEN")));
                case 22:
                    r = l.length - k + 1;
                    r > j && (l = l.substr(r));
                    s.next = 7;
                    break;
                case 26:
                    return s.abrupt("return", function() {
                        var d, e, a, c;
                        return b("regeneratorRuntime").async(function(h) {
                            while (1) switch (h.prev = h.next) {
                                case 0:
                                    if (!l) {
                                        h.next = 4;
                                        break
                                    }
                                    d = {
                                        done: !1,
                                        value: l
                                    };
                                    l = "";
                                    return h.abrupt("return", d);
                                case 4:
                                    h.next = 6;
                                    return b("regeneratorRuntime").awrap(f.read());
                                case 6:
                                    e = h.sent;
                                    a = e.done;
                                    c = e.value;
                                    return h.abrupt("return", {
                                        done: a,
                                        value: c ? g.decode(c, {
                                            stream: !a
                                        }) : ""
                                    });
                                case 10:
                                case "end":
                                    return h.stop()
                            }
                        }, null, this)
                    });
                case 27:
                case "end":
                    return s.stop()
            }
        }, null, this)
    }

    function t(a, c) {
        var e, f, g, h, j;
        return b("regeneratorRuntime").async(function(l) {
            while (1) switch (l.prev = l.next) {
                case 0:
                    l.next = 2;
                    return b("regeneratorRuntime").awrap(k(c));
                case 2:
                    e = l.sent;
                    if (e.response) {
                        l.next = 6;
                        break
                    }
                    d("ServiceWorkerEventLogger").log("FETCH NAV: Force refresh, network issue");
                    return l.abrupt("return", q(a, !0, e.failReason || 0));
                case 6:
                    f = e.response;
                    l.next = 9;
                    return b("regeneratorRuntime").awrap(n(a, f));
                case 9:
                    g = l.sent;
                    if (!(g !== 0)) {
                        l.next = 13;
                        break
                    }
                    d("ServiceWorkerEventLogger").log("FETCH NAV: Force refresh, bad server response");
                    return l.abrupt("return", q(a, !1, g));
                case 13:
                    h = !1;
                    return l.abrupt("return", function() {
                        return b("regeneratorRuntime").async(function(c) {
                            while (1) switch (c.prev = c.next) {
                                case 0:
                                    if (h) {
                                        c.next = 3;
                                        break
                                    }
                                    h = !0;
                                    return c.abrupt("return", {
                                        value: i,
                                        done: !1
                                    });
                                case 3:
                                    if (j) {
                                        c.next = 13;
                                        break
                                    }
                                    if (!d("ServiceWorkerClientChromeConfig").isEnabled()) {
                                        c.next = 10;
                                        break
                                    }
                                    c.next = 7;
                                    return b("regeneratorRuntime").awrap(r(a, f));
                                case 7:
                                    j = c.sent;
                                    c.next = 13;
                                    break;
                                case 10:
                                    c.next = 12;
                                    return b("regeneratorRuntime").awrap(s(a, f));
                                case 12:
                                    j = c.sent;
                                case 13:
                                    c.next = 15;
                                    return b("regeneratorRuntime").awrap(j());
                                case 15:
                                    return c.abrupt("return", c.sent);
                                case 16:
                                case "end":
                                    return c.stop()
                            }
                        }, null, this)
                    });
                case 15:
                case "end":
                    return l.stop()
            }
        }, null, this)
    }

    function u(a, c) {
        var e, f, g, h;
        return b("regeneratorRuntime").async(function(i) {
            while (1) switch (i.prev = i.next) {
                case 0:
                    i.next = 2;
                    return b("regeneratorRuntime").awrap(k(c));
                case 2:
                    e = i.sent;
                    f = e.response;
                    if (f) {
                        i.next = 7;
                        break
                    }
                    d("ServiceWorkerEventLogger").log("FETCH NAV: Force refresh, network issue");
                    return i.abrupt("return", q(a, !0, e.failReason || 0));
                case 7:
                    i.next = 9;
                    return b("regeneratorRuntime").awrap(m(a, f));
                case 9:
                    g = i.sent;
                    if (!(g !== 0)) {
                        i.next = 13;
                        break
                    }
                    d("ServiceWorkerEventLogger").log("FETCH NAV: Force refresh, bad server response");
                    return i.abrupt("return", q(a, !1, g));
                case 13:
                    return i.abrupt("return", function() {
                        return b("regeneratorRuntime").async(function(c) {
                            while (1) switch (c.prev = c.next) {
                                case 0:
                                    if (h) {
                                        c.next = 4;
                                        break
                                    }
                                    c.next = 3;
                                    return b("regeneratorRuntime").awrap(r(a, f));
                                case 3:
                                    h = c.sent;
                                case 4:
                                    c.next = 6;
                                    return b("regeneratorRuntime").awrap(h());
                                case 6:
                                    return c.abrupt("return", c.sent);
                                case 7:
                                case "end":
                                    return c.stop()
                            }
                        }, null, this)
                    });
                case 14:
                case "end":
                    return i.stop()
            }
        }, null, this)
    }

    function v(a) {
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    if (!(d("ServiceWorkerPreload").isEnabled() && a.preloadResponse)) {
                        c.next = 4;
                        break
                    }
                    c.next = 3;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerFetchPage").extractPreloadResponse(a));
                case 3:
                    return c.abrupt("return", c.sent);
                case 4:
                    c.next = 6;
                    return b("regeneratorRuntime").awrap(d("ServiceWorkerFetchPage").fetchDynamicResponse(a));
                case 6:
                    return c.abrupt("return", c.sent);
                case 7:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function w(a) {
        return d("ServiceWorkerPreload").isEnabled() && a.preloadResponse ? d("ServiceWorkerFetchPage").extractNoCachePreloadResponse(a.preloadResponse, {
            redirectAllowed: !1
        }) : null
    }

    function x(a, c) {
        var e = a.id,
            f = new TextEncoder(),
            g = {
                stream: !0
            },
            h;
        return function(i) {
            var j, k, l;
            return b("regeneratorRuntime").async(function(m) {
                while (1) switch (m.prev = m.next) {
                    case 0:
                        if (h) {
                            m.next = 4;
                            break
                        }
                        m.next = 3;
                        return b("regeneratorRuntime").awrap(u(a, c));
                    case 3:
                        h = m.sent;
                    case 4:
                        m.next = 6;
                        return b("regeneratorRuntime").awrap(h());
                    case 6:
                        j = m.sent, k = j.done, l = j.value, l && i.enqueue(f.encode(l, g)), k && (d("Artillery4SW").informNavigateRequestEvent(e, d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_RESPONSE_END), i.close(), d("Artillery4SW").informNavigateRequestCompleted(e));
                    case 11:
                    case "end":
                        return m.stop()
                }
            }, null, this)
        }
    }

    function y(a, c) {
        var e = a.id,
            f = new TextEncoder(),
            g = {
                stream: !0
            },
            h = !1,
            i;
        return function(j) {
            var k, l, m;
            return b("regeneratorRuntime").async(function(n) {
                while (1) switch (n.prev = n.next) {
                    case 0:
                        if (h) {
                            n.next = 6;
                            break
                        }
                        d("Artillery4SW").informNavigateRequestEvent(e, d("ServiceWorkerProfilerTypes").FetchTiming.CACHE_FLUSH);
                        j.enqueue(a.cachedEFPageContent);
                        j.enqueue(f.encode(d("ServiceWorkerClientID").getClientIDInformerCode(e), g));
                        h = !0;
                        return n.abrupt("return");
                    case 6:
                        if (i) {
                            n.next = 10;
                            break
                        }
                        n.next = 9;
                        return b("regeneratorRuntime").awrap(t(a, c));
                    case 9:
                        i = n.sent;
                    case 10:
                        n.next = 12;
                        return b("regeneratorRuntime").awrap(i());
                    case 12:
                        k = n.sent, l = k.done, m = k.value, m && j.enqueue(f.encode(m, g)), l && (d("Artillery4SW").informNavigateRequestEvent(e, d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_RESPONSE_END), j.close(), d("Artillery4SW").informNavigateRequestCompleted(e));
                    case 17:
                    case "end":
                        return n.stop()
                }
            }, null, this)
        }
    }

    function a(a) {
        if (!a.versionKey || !a.cachedEFPageContent) return null;
        var b = a.expireAfter;
        if (typeof b === "number" && Date.now() > b) {
            d("ServiceWorkerRouter").markRouteConfigCacheAsInvalid(a);
            d("ServiceWorkerEventLogger").log("FETCH NAV: Cache has expired, cache cleared.");
            b = w(a);
            if (b) {
                d("ServiceWorkerEventLogger").log("FETCH NAV: Attempting to repond with sent preload.");
                return x(a, b)
            } else return null
        } else if (d("ServiceWorkerClientChromeConfig").hasInvalidCache(a)) return null;
        b = v(a);
        return y(a, b)
    }
    g.createRouteStream = a
}), 98);
__d("ServiceWorkerResponseStream", ["Artillery4SW", "ServiceWorkerProfilerTypes", "ServiceWorkerServerData"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c) {
        d("Artillery4SW").informNavigateRequestEvent(a, d("ServiceWorkerProfilerTypes").FetchTiming.BEGIN_RESPONSE);
        b = new self.ReadableStream({
            pull: b
        });
        var e = d("ServiceWorkerServerData").getData("EarlyResponseData", "requestHeaders", {}),
            f = e;
        c && Object.keys(c).forEach(function(a) {
            var b = a.toLowerCase();
            f[b] ? f[b] = c[a] : f[a] = c[a]
        });
        return {
            response: new Response(b, {
                headers: f
            }),
            waitUntil: d("Artillery4SW").waitForNavigateRequestLogging(a)
        }
    }
    g.createResponseStream = a
}), 98);
__d("ServiceWorkerResourceCacheNavigateFetchEvent", ["Artillery4SW", "ForcedNavigateToRequest", "ServiceWorkerCacheStorage", "ServiceWorkerEventLogger", "ServiceWorkerFetchPage", "ServiceWorkerProfilerTypes", "ServiceWorkerResourceCacheNavigateFetchRoute", "ServiceWorkerResponseStream", "ServiceWorkerRouter", "ServiceWorkerServerData", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function h(a, c, e) {
        var f = !1,
            g = null,
            h, i = !1,
            j = function(j) {
                var k, l, m, n;
                return b("regeneratorRuntime").async(function(o) {
                    while (1) switch (o.prev = o.next) {
                        case 0:
                            if (f) {
                                o.next = 7;
                                break
                            }
                            d("Artillery4SW").informNavigateRequestEvent(a, d("ServiceWorkerProfilerTypes").FetchTiming.ROUTE_CONFIG_CACHE_LOOKUP_START);
                            o.next = 4;
                            return b("regeneratorRuntime").awrap(c);
                        case 4:
                            g = o.sent, d("Artillery4SW").informNavigateRequestEvent(a, d("ServiceWorkerProfilerTypes").FetchTiming.ROUTE_CONFIG_CACHE_LOOKUP_END), f = !0;
                        case 7:
                            g && !i && (h = d("ServiceWorkerResourceCacheNavigateFetchRoute").createRouteStream(g), i = !0);
                            if (!h) {
                                o.next = 19;
                                break
                            }
                            k = h(j);
                            if (!k) {
                                o.next = 16;
                                break
                            }
                            o.next = 13;
                            return b("regeneratorRuntime").awrap(k);
                        case 13:
                            return o.abrupt("return", o.sent);
                        case 16:
                            return o.abrupt("return", void 0);
                        case 17:
                            o.next = 26;
                            break;
                        case 19:
                            l = d("ForcedNavigateToRequest").enqueueResponse(e, null, d("ServiceWorkerFetchPage").getFailReason("FAILURE_TO_READ_ROUTE"));
                            m = new TextEncoder();
                            j.enqueue(m.encode("<html><head>" + ('<meta http-equiv="refresh" content="0; url=' + l + '" />') + "</head></html>"));
                            j.close();
                            n = d("Artillery4SW").getRequestPerf(a, "navigate");
                            n.loggingRead();
                            return o.abrupt("return", void 0);
                        case 26:
                        case "end":
                            return o.stop()
                    }
                }, null, this)
            };
        return d("ServiceWorkerResponseStream").createResponseStream(a, j)
    }

    function a(a) {
        var b = d("ServiceWorkerRouter").initConfigForFetchEvent(a);
        if (b) {
            if (d("ServiceWorkerCacheStorage").isCacheClearing()) return null;
            var c = b.id;
            d("Artillery4SW").informNavigateRequestEvent(c, d("ServiceWorkerProfilerTypes").FetchTiming.FETCH_START);
            d("ServiceWorkerEventLogger").log("FETCH NAV: Respond to route '" + b.name + "'");
            var e = b.fullRouteConfigPromise;
            if (e) {
                d("ServiceWorkerEventLogger").log("FETCH NAV: Access route cache");
                return h(c, e, a.request.url)
            }
            e = d("ServiceWorkerServerData").getData("QuickExperimentData", "use_sw_subresource_filter", !1);
            a = d("ServiceWorkerResourceCacheNavigateFetchRoute").createRouteStream(b);
            b = babelHelpers["extends"]({}, (b == null ? void 0 : b.responseHeaders) || {});
            e === !0 && (b["service-worker-subresource-filter"] = "sw-c");
            if (a) return d("ServiceWorkerResponseStream").createResponseStream(c, a, b)
        }
        return null
    }
    g.fetch = a
}), 98);
__d("ServiceWorkerSplashNavigateFetchEvent", ["invariant", "ForcedNavigateToRequest", "ServiceWorkerBase", "ServiceWorkerCacheResponse", "ServiceWorkerCacheStorage", "ServiceWorkerConslidatedHeader", "ServiceWorkerEventLogger", "ServiceWorkerFetchPage", "ServiceWorkerPreload", "ServiceWorkerResponseStream", "ServiceWorkerRouter", "ServiceWorkerRoutes", "ServiceWorkerServerData", "ServiceWorkerVersion", "regeneratorRuntime"], (function(a, b, c, d, e, f, g, h) {
    function i(c) {
        var e, f, g, h, i;
        return b("regeneratorRuntime").async(function(j) {
            while (1) switch (j.prev = j.next) {
                case 0:
                    if (!(c.preloadResponse && d("ServiceWorkerPreload").isEnabled())) {
                        j.next = 7;
                        break
                    }
                    d("ServiceWorkerEventLogger").log("SW SPLASH: using navigation preload request");
                    j.next = 4;
                    return b("regeneratorRuntime").awrap(c.preloadResponse);
                case 4:
                    e = j.sent;
                    if (!e) {
                        j.next = 7;
                        break
                    }
                    return j.abrupt("return", e);
                case 7:
                    d("ServiceWorkerEventLogger").log("SW SPLASH: issuing fallback request");
                    f = new Request(c.request.url, {
                        mode: "same-origin",
                        credentials: "same-origin",
                        redirect: "manual"
                    });
                    g = {};
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_SVN")] = d("ServiceWorkerVersion").getCurrentRev();
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_PARTIAL_CACHE")] = d("ServiceWorkerCacheResponse").getResponseTypes().CACHE;
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_ROUTES")] = d("ServiceWorkerRoutes").getRoutesKey();
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_SKIP_REV_CHECK")] = 1;
                    g[d("ServiceWorkerConslidatedHeader").getKey("SW_SPLASH_SCREEN_ENABLED")] = 1;
                    h = d("ServiceWorkerConslidatedHeader").getKey("SW_SITE_TYPE");
                    i = d("ServiceWorkerServerData").getData("SiteData", "siteType", null);
                    i !== null && (g[h] = i);
                    f.headers.set(d("ServiceWorkerConslidatedHeader").getHeaderName(), JSON.stringify(g));
                    return j.abrupt("return", a.fetch(f));
                case 20:
                case "end":
                    return j.stop()
            }
        }, null, this)
    }

    function c() {
        var a = new TextEncoder(),
            b = d("ServiceWorkerServerData").getString("SplashScreenData", "html");
        return a.encode(b)
    }
    var j = c();

    function k(a) {
        if (!a || !a["Content-Security-Policy"]) return "";
        a = a["Content-Security-Policy"].match(/nonce-(.*?)(\'|\")/);
        return a && a[1] ? a[1] : ""
    }

    function l(a, b) {
        var c = new TextEncoder();
        b = k(b == null ? void 0 : b.responseHeaders);
        b = b !== "" ? ' nonce="' + b + '"' : "";
        b = "\n    <script" + b + '>window.location = "' + encodeURI(a) + '";</script>\n    </head>\n    </html>';
        return c.encode(b)
    }

    function m(a, b, c, e) {
        d("ServiceWorkerEventLogger").log("SW SPLASH: invalid response, reason: " + String(e));
        d("ServiceWorkerEventLogger").log("SW SPLASH: reload with FNR");
        b = d("ForcedNavigateToRequest").enqueueResponse(b, null, Number(e));
        a.enqueue(l(b, c));
        a.close()
    }

    function n(a) {
        a === void 0 && (a = null);
        var b = d("ServiceWorkerServerData").getData("SiteData", "siteType");
        return b !== null && a !== null && b !== a
    }

    function o(a) {
        a = a == null ? void 0 : a.fetchHeader;
        if (a) {
            var b = d("ServiceWorkerConslidatedHeader").getKey("SW_NONCE");
            return a[b]
        }
        return null
    }

    function p(a) {
        var c, e, f, g, h, i, j;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    if (!(!a || d("ServiceWorkerCacheStorage").isCacheClearing())) {
                        k.next = 2;
                        break
                    }
                    return k.abrupt("return", {
                        cachedEFPageContent: null,
                        contentSiteType: null
                    });
                case 2:
                    c = null;
                    if (!a.fullRouteConfigPromise) {
                        k.next = 7;
                        break
                    }
                    k.next = 6;
                    return b("regeneratorRuntime").awrap(a.fullRouteConfigPromise);
                case 6:
                    c = k.sent;
                case 7:
                    e = c || a;
                    f = e.siteType;
                    g = e.cachedEFPageContent, h = g === void 0 ? null : g, i = e.expireAfter, j = i === void 0 ? null : i;
                    if (!(typeof j === "number" && Date.now() > j)) {
                        k.next = 13;
                        break
                    }
                    d("ServiceWorkerRouter").markRouteConfigCacheAsInvalid(e);
                    return k.abrupt("return", {
                        cachedEFPageContent: null,
                        contentSiteType: f
                    });
                case 13:
                    return k.abrupt("return", {
                        cachedEFPageContent: h,
                        contentSiteType: f
                    });
                case 14:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }

    function q(a, c, e) {
        var f, g, i = !1;
        return function(k) {
            var l, q, r, s, t, u, v, w, x;
            return b("regeneratorRuntime").async(function(y) {
                while (1) switch (y.prev = y.next) {
                    case 0:
                        if (i) {
                            y.next = 15;
                            break
                        }
                        d("ServiceWorkerEventLogger").log("SW SPLASH: flushing splash markup");
                        k.enqueue(j);
                        y.next = 5;
                        return b("regeneratorRuntime").awrap(p(e));
                    case 5:
                        l = y.sent;
                        q = l.cachedEFPageContent;
                        r = l.contentSiteType;
                        if (!n(r)) {
                            y.next = 13;
                            break
                        }
                        s = d("ServiceWorkerFetchPage").getFailReason("SITE_MISMATCH_ON_CACHE");
                        d("ServiceWorkerBase").genUnregisterSelf();
                        m(k, c.url, e, s);
                        return y.abrupt("return");
                    case 13:
                        q !== null && k.enqueue(q), i = !0;
                    case 15:
                        if (f) {
                            y.next = 28;
                            break
                        }
                        d("ServiceWorkerEventLogger").log("SW SPLASH: waiting for initial network response");
                        y.next = 19;
                        return b("regeneratorRuntime").awrap(a);
                    case 19:
                        f = y.sent;
                        d("ServiceWorkerEventLogger").log("SW SPLASH: received initial network response");
                        y.next = 23;
                        return b("regeneratorRuntime").awrap(d("ServiceWorkerFetchPage").verifyOrFailServerResponse(f, {
                            hasCacheContent: !0,
                            checkSiteType: !0,
                            cachedNonce: o(e)
                        }));
                    case 23:
                        t = y.sent;
                        u = t.failReason;
                        if (!(u !== null)) {
                            y.next = 28;
                            break
                        }
                        m(k, c.url, e, u);
                        return y.abrupt("return");
                    case 28:
                        f.body || h(0, 296);
                        g || (g = f.body.getReader(), d("ServiceWorkerEventLogger").log("SW SPLASH: start reading response body"));
                        y.next = 32;
                        return b("regeneratorRuntime").awrap(g.read());
                    case 32:
                        v = y.sent, w = v.done, x = v.value, x && k.enqueue(x), w && (d("ServiceWorkerEventLogger").log("SW SPLASH: finished reading response body"), k.close());
                    case 37:
                    case "end":
                        return y.stop()
                }
            }, null, this)
        }
    }

    function e(a) {
        if (!this.canHandle(a)) return null;
        d("ServiceWorkerEventLogger").log("SW SPLASH: fetch event intercepted");
        var b = i(a),
            c = d("ServiceWorkerRouter").initConfigForFetchEvent(a);
        b = q(b, a.request, c);
        return d("ServiceWorkerResponseStream").createResponseStream("splash", b, c == null ? void 0 : c.responseHeaders)
    }

    function f(a) {
        a = d("ServiceWorkerRoutes").getNameForRequest(a.request);
        return a === "HomePage" || a === "ExtendedWblt"
    }
    g.fetch = e;
    g.canHandle = f
}), 98);
__d("FacebookServiceWorker", ["Artillery4SW", "BrowserPushCommands", "ServiceWorkerActivateEvent", "ServiceWorkerBackgroundRequests", "ServiceWorkerBase", "ServiceWorkerErrorLogging", "ServiceWorkerFetchEvent", "ServiceWorkerInstallEvent", "ServiceWorkerMessage", "ServiceWorkerNavigateFetchEvent", "ServiceWorkerNotificationClickEvent", "ServiceWorkerNotificationCloseEvent", "ServiceWorkerPaymentHandler", "ServiceWorkerPreload", "ServiceWorkerPushEvent", "ServiceWorkerPushNavigateFetchEvent", "ServiceWorkerResourceCacheActivateEvent", "ServiceWorkerResourceCacheInstallEvent", "ServiceWorkerResourceCacheNavigateFetchEvent", "ServiceWorkerResourceCacheResourceFetchEvent", "ServiceWorkerRouter", "ServiceWorkerServerData", "ServiceWorkerSplashNavigateFetchEvent", "ServiceWorkerSyncEvent", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    var g = {
        init: function() {
            b("ServiceWorkerErrorLogging").init();
            g.register();
            var a = b("ServiceWorkerServerData").getData("GenericNotificationData", "enabled", !1);
            a && g.registerPushNotifications();
            a = b("ServiceWorkerServerData").getData("BrowserPaymentHandler", "enabled", !1);
            a && g.registerPaymentHandler();
            a = b("ServiceWorkerServerData").getData("MPushPrefetch", "enabled", !1);
            a && g.registerPushNavigateCache();
            a = b("ServiceWorkerServerData").getData("QuickExperimentData", "enabled", !1);
            a && g.registerQuickExperiments();
            a = b("ServiceWorkerServerData").getData("BackgroundRequestsData", "register_listener", !1);
            a && g.registerBackgroundRequests();
            a = b("ServiceWorkerServerData").getData("MAddToHomescreen", "force_fetch_registration", !1) || b("ServiceWorkerServerData").getData("WebAddToHomescreen", "force_fetch_registration", !1) || b("ServiceWorkerServerData").getData("WorkplaceAddToHomescreen", "force_fetch_registration", !1);
            b("ServiceWorkerNavigateFetchEvent").hasHandlers() && b("ServiceWorkerFetchEvent").setNavigateFetchHandler(b("ServiceWorkerNavigateFetchEvent").fetch);
            b("ServiceWorkerPreload").isEnabled() && (b("ServiceWorkerFetchEvent").hasFetchHandler() || a) && b("ServiceWorkerBase").setEventListener("fetch", function(a) {
                b("ServiceWorkerFetchEvent").handleEvent(a)
            })
        },
        register: function() {
            b("ServiceWorkerBase").setEventListener("activate", function(a) {
                a.waitUntil(b("ServiceWorkerActivateEvent").handleEvent(a))
            });
            b("ServiceWorkerBase").setEventListener("install", function(a) {
                a.waitUntil(b("ServiceWorkerInstallEvent").handleEvent(a))
            });
            b("ServiceWorkerMessage").addCommandHandler("login", b("ServiceWorkerBase").genUnregisterSelf);
            var a = b("ServiceWorkerServerData").getData("MLoggedOutPush", "enabled");
            a = a ? b("ServiceWorkerBase").clearSWFileCache : b("ServiceWorkerBase").genUnregisterSelf;
            b("ServiceWorkerMessage").addCommandHandler("logout", a);
            b("ServiceWorkerMessage").addCommandHandler("unregister", function(a) {
                var c;
                return b("regeneratorRuntime").async(function(d) {
                    while (1) switch (d.prev = d.next) {
                        case 0:
                            c = a.respond;
                            d.next = 3;
                            return b("regeneratorRuntime").awrap(b("ServiceWorkerBase").genUnregisterSelf());
                        case 3:
                            c("done", null);
                        case 4:
                        case "end":
                            return d.stop()
                    }
                }, null, this)
            });
            b("ServiceWorkerMessage").addCommandHandler("errordump", function(a) {
                a = a.respond;
                a("errordump", {
                    history: b("ServiceWorkerErrorLogging").getHistory()
                })
            })
        },
        registerPaymentHandler: function() {
            if (!self.registration) return;
            self.registration.paymentManager && (b("ServiceWorkerBase").setEventListener("canmakepayment", function(a) {
                b("ServiceWorkerPaymentHandler").handleCanMakePaymentEvent(a)
            }), b("ServiceWorkerBase").setEventListener("paymentrequest", function(a) {
                b("ServiceWorkerPaymentHandler").handlePaymentRequestEvent(a)
            }))
        },
        registerPushNotifications: function() {
            b("ServiceWorkerBase").setEventListener("push", function(a) {
                a.waitUntil(b("ServiceWorkerPushEvent").handleEvent(a))
            }), b("ServiceWorkerBase").setEventListener("notificationclick", function(a) {
                a.waitUntil(b("ServiceWorkerNotificationClickEvent").handleEvent(a))
            }), b("ServiceWorkerBase").setEventListener("notificationclose", function(a) {
                a.waitUntil(b("ServiceWorkerNotificationCloseEvent").handleEvent(a))
            }), b("ServiceWorkerMessage").addCommandHandler(b("BrowserPushCommands").WINDOW_VISIBLE, b("ServiceWorkerPushEvent").genWindowBecameVisible)
        },
        registerBackgroundRequests: function() {
            b("ServiceWorkerMessage").addCommandHandler("backgroundRequest", b("ServiceWorkerBackgroundRequests").handleBackgroundRequestMessage), b("ServiceWorkerBase").setEventListener("sync", function(a) {
                a.waitUntil(b("ServiceWorkerSyncEvent").handleEvent(a))
            })
        },
        registerResourceCache: function(a) {
            a === void 0 && (a = !1), b("ServiceWorkerRouter").init(), b("ServiceWorkerInstallEvent").addInstallFunction(b("ServiceWorkerResourceCacheInstallEvent").install), b("ServiceWorkerFetchEvent").setResourceFetchHandler(b("ServiceWorkerResourceCacheResourceFetchEvent").fetch), a || b("ServiceWorkerFetchEvent").setNavigateFetchHandler(b("ServiceWorkerResourceCacheNavigateFetchEvent").fetch), b("ServiceWorkerActivateEvent").addUpgradeFunction(b("ServiceWorkerResourceCacheActivateEvent").activate)
        },
        registerSplashScreenCache: function() {
            b("ServiceWorkerNavigateFetchEvent").register(b("ServiceWorkerSplashNavigateFetchEvent"))
        },
        registerPushNavigateCache: function() {
            b("ServiceWorkerNavigateFetchEvent").register(b("ServiceWorkerPushNavigateFetchEvent"))
        },
        registerQuickExperiments: function() {
            var a = b("ServiceWorkerServerData").getData("QuickExperimentData", "type", "off");
            switch (a) {
                case "simple_ef_only_await_cache":
                case "client_chrome":
                    g.registerResourceCache();
                    break;
                case "mtouch_splash_screen":
                    g.registerSplashScreenCache();
                    break;
                case "mtouch_splash_screen_with_resources":
                    g.registerResourceCache(!0);
                    g.registerSplashScreenCache();
                    break;
                case "off":
                default:
                    break
            }
        }
    };
    b("Artillery4SW").informParsed();
    g.init();
    b("Artillery4SW").informInitialized();
    e.exports = void 0
}), null);
__d("legacy:facebook-service-worker", ["FacebookServiceWorker"], (function(a, b, c, d, e, f) {
    a.FacebookServiceWorker = b("FacebookServiceWorker")
}), 3);