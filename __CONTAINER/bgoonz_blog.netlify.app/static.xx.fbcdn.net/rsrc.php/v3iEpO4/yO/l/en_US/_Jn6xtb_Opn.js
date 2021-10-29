if (self.CavalryLogger) {
    CavalryLogger.start_js(["Z3urS1k"]);
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
    if (a.require != null) return;
    var b = null,
        c = null,
        d = [],
        e = {},
        f = {},
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 1,
        m = 2,
        n = 4,
        o = 8,
        p = 16,
        aa = 32,
        ba = 64,
        ca = {},
        q = {},
        r = Object.prototype.hasOwnProperty,
        s = Object.prototype.toString;

    function t(a) {
        a = Array.prototype.slice.call(a);
        var b = {},
            c, d, f, g;
        while (a.length) {
            d = a.shift();
            if (b[d]) continue;
            b[d] = !0;
            f = e[d];
            if (!f || T(f)) continue;
            if (f.dependencies)
                for (c = 0; c < f.dependencies.length; c++) g = f.dependencies[c], T(g) || a.push(g.id)
        }
        for (d in b) r.call(b, d) && a.push(d);
        b = [];
        for (c = 0; c < a.length; c++) {
            d = a[c];
            var h = d;
            f = e[d];
            d = f ? f.dependencies : null;
            if (!f || !d) h += " is not defined";
            else if (T(f)) h += " is ready";
            else {
                f = [];
                for (var i = 0; i < d.length; i++) g = d[i], T(g) || f.push(g.id);
                h += " is waiting for " + f.join(", ")
            }
            b.push(h)
        }
        return b.join("\n")
    }

    function u(b) {
        var a = new Error(b);
        a.name = "ModuleError";
        a.messageFormat = b;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        a.messageParams = d.map(function(a) {
            return String(a)
        });
        a.taalOpcodes = [2, 2];
        return a
    }
    $ = a.Env || {};
    var v = !!$.gk_nonjs_deps_in_require,
        w = !!$.gk_requirelazy_mem,
        x = !!$.gk_require_when_ready_in_order,
        y = !!$.profile_require_factories,
        z = a.performance || {},
        A;
    if (z.now && z.timing && z.timing.navigationStart) {
        var B = z.timing.navigationStart;
        A = function() {
            return z.now() + B
        }
    } else A = function() {
        return Date.now()
    };
    var C = 0;

    function D(a) {
        C++;
        var b = e[a];
        (!b || b.exports == null) && (I(a), b = e[a]);
        b && b.refcount-- === 1 && (e[a] = null);
        return b
    }

    function E(a) {
        return a.defaultExport !== q ? a.defaultExport : a.exports
    }

    function F(a) {
        a = D(a);
        if (a) return E(a)
    }

    function G(a) {
        a = D(a);
        if (a) return a.defaultExport !== q ? a.defaultExport : null
    }

    function H(a) {
        a = D(a);
        if (a) return a.exports
    }

    function da(a) {
        a.factoryLength === -1 && (a.factoryLength = a.factory.length);
        return a.factoryLength
    }

    function I(d) {
        var g = a.ErrorGuard;
        if (g && !g.inGuard()) return g.applyWithGuard(I, null, [d]);
        g = e[d];
        if (!g) {
            var h = 'Requiring unknown module "%s"';
            throw u(h, d)
        }
        var i, j;
        if (g.hasError)
            if (g.error == null) throw u('Requiring module "%s" which threw an exception', d);
            else {
                h = J(g.error);
                K(h, {
                    messageFormat: 'Requiring module "%s" which threw an exception',
                    messageParams: [d]
                });
                throw h
            }
        if (!T(g)) throw u('Requiring module "%s" with unresolved dependencies: %s', d, t([d]));
        M(g);
        h = g.exports = {};
        var k = g.factory,
            l = g.dependencies;
        if (s.call(k) === "[object Function]" && l != null) {
            var n = l.length,
                p;
            try {
                try {
                    na(g)
                } catch (a) {
                    L(a, d)
                }
                var q = [],
                    v = n;
                if (g.special & o) {
                    var w = g.special & aa ? c : b;
                    q = w.slice(0);
                    q[w.length - 2] = g;
                    q[w.length - 1] = h;
                    v += q.length
                }
                if (g.special & m) {
                    w = da(g);
                    v = Math.min(n + q.length, w)
                }
                for (var h = 0; h < n; h++) {
                    w = l[h];
                    q.length < v && q.push(F.call(null, w.id))
                }
                var x;
                y && (x = A());
                f[g.id].factoryRun = !0;
                try {
                    w = g.context != null ? g.context : a;
                    v = k.apply(w, q)
                } catch (a) {
                    L(a, d)
                } finally {
                    if (y) {
                        l = A();
                        n = f[g.id];
                        n.factoryTime = l - (x || 0);
                        n.factoryEnd = l;
                        n.factoryStart = x;
                        if (k.__SMmeta)
                            for (var z in k.__SMmeta) Object.prototype.hasOwnProperty.call(k.__SMmeta, z) && (n[z] = k.__SMmeta[z])
                    }
                }
            } catch (a) {
                g.hasError = !0;
                g.error = a;
                g.exports = null;
                throw a
            } finally {}
            v && (g.exports = v);
            var B;
            g.special & ba ? g.exports != null && r.call(g.exports, "default") && (g.defaultExport = B = g.exports["default"]) : g.defaultExport = B = g.exports;
            if (typeof B === "function") {
                h = B.__superConstructor__;
                (!B.displayName || h && h.displayName === B.displayName) && (B.displayName = (B.name || "(anonymous)") + " [from " + d + "]")
            }
            g.factoryFinished = !0
        } else g.exports = k;
        w = "__isRequired__" + d;
        q = e[w];
        q && !T(q) && N(w, ca)
    }

    function J(b) {
        if (a.getErrorSafe != null) return a.getErrorSafe(b);
        return b != null && typeof b === "object" && typeof b.message === "string" ? b : u("Non-error thrown: %s", String(b))
    }

    function K(b, c) {
        var d = a.ErrorSerializer;
        d && d.aggregateError(b, c)
    }

    function L(a, b) {
        a = J(a);
        K(a, {
            messageFormat: 'Module "%s"',
            messageParams: [b],
            forcedKey: b.startsWith("__") ? null : b
        });
        throw a
    }

    function ea() {
        return C
    }

    function fa() {
        var a = {};
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
        return a
    }

    function M(a) {
        if (a.nonJSDeps) return;
        a.nonJSDeps = !0;
        a.dependencies && a.dependencies.forEach(M)
    }

    function N(b, c, e, g, h, i, l) {
        c === void 0 ? (c = [], e = b, b = S()) : e === void 0 && (e = c, s.call(b) === "[object Array]" ? (c = b, b = S(c.join(","))) : c = []);
        var m = {
                cancel: Q.bind(this, b)
            },
            n = O(b);
        if (!c && !e && i) {
            n.refcount += i;
            return m
        }
        f[b] = {
            id: b,
            dependencies: c,
            meta: l,
            category: g,
            defined: y ? A() : null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        };
        if (n.dependencies && n.reload !== !0) {
            b.indexOf(":") != -1 ? k++ : j++;
            return m
        }
        i && (n.refcount += i);
        l = c.map(O);
        n.factory = e;
        n.dependencies = l;
        n.context = h;
        n.special = g;
        (n.nonJSDeps || ma(n)) && (n.nonJSDeps = !1, M(n));
        U(n);
        if (d.length > 0) {
            var o = d;
            d = [];
            b = a.ScheduleJSWork ? a.ScheduleJSWork : pa;
            b(function() {
                if (x) {
                    for (var a = 0; a < o.length; a++) F.call(null, o[a].id);
                    o.length = 0
                } else
                    while (o.length > 0) F.call(null, o.pop().id)
            })()
        }
        return m
    }

    function O(a) {
        var b = e[a];
        if (b) return b;
        b = new P(a, 0);
        e[a] = b;
        return b
    }

    function P(a, b, c) {
        this.id = a, this.refcount = b, this.exports = c || null, this.defaultExport = c || q, this.factory = void 0, this.factoryLength = -1, this.factoryFinished = !1, this.dependencies = void 0, this.depPosition = 0, this.context = void 0, this.special = 0, this.hasError = !1, this.error = null, this.ranRecursiveSideEffects = !1, this.sideEffectDependencyException = null, this.nextDepWaitingHead = null, this.nextDepWaitingNext = null, this.tarjanGeneration = -1, this.tarjanLow = 0, this.tarjanIndex = 0, this.tarjanOnStack = !1, this.nonJSDeps = !1
    }

    function Q(a) {
        if (!e[a]) return;
        var b = e[a];
        e[a] = null;
        if (b.dependencies)
            for (var a = 0; a < b.dependencies.length; a++) {
                var c = b.dependencies[a];
                c.refcount-- === 1 && Q(c.id)
            }
    }

    function R(a, b, c) {
        var d = w ? "__requireLazy__x__" + g++ : "__requireLazy__" + (a.length > 0 ? a.join(",") + "__" : "") + g++;
        return N("__requireLazy__" + d, a, Z()(b, "requireLazy", {
            propagationType: 0
        }), l | p, c, 1)
    }

    function S(a) {
        return "__mod__" + (a != null ? a + "__" : "") + g++
    }

    function ga(a, b, c) {
        c.tarjanGeneration != h && (c.tarjanGeneration = h, c.tarjanLow = c.tarjanIndex = i++, c.tarjanOnStack = !0, b.push(c));
        if (c.dependencies != null)
            for (var d = c.depPosition; d < c.dependencies.length; d++) {
                var e = c.dependencies[d];
                e.tarjanGeneration != h ? (ga(a, b, e), c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)) : e.tarjanOnStack && (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex))
            }
        if (c.tarjanLow == c.tarjanIndex) {
            e = [];
            do {
                d = b.pop();
                d.tarjanOnStack = !1;
                e.push(d);
                if (c == b[0] && d != c && d.dependencies != null)
                    for (var f = d.depPosition; f < d.dependencies.length; f++) {
                        var g = d.dependencies[f];
                        !T(g) && a.indexOf(g) == -1 && b.indexOf(g) == -1 && e.indexOf(g) == -1 && a.push(g)
                    }
            } while (d != c)
        }
    }

    function ha(a) {
        var b = a.dependencies;
        if (!b) throw u("Called _replaceCycleLinkWithSCCDeps on an undefined module");
        h++;
        ga(b, [], a);
        a.depPosition++;
        U(a)
    }

    function ia(a, b) {
        var c = b;
        while (!0) {
            if (c.dependencies && c.depPosition != c.dependencies.length) c = c.dependencies[c.depPosition];
            else break;
            if (c == a) {
                ha(a);
                return
            }
        }
        a.nextDepWaitingNext = b.nextDepWaitingHead;
        b.nextDepWaitingHead = a
    }

    function T(a) {
        return a.dependencies != null && a.depPosition >= a.dependencies.length
    }

    function ja(a) {
        a.depPosition++, U(a)
    }

    function ka(a) {
        var b = a.nextDepWaitingHead;
        a.nextDepWaitingHead = null;
        while (b != null) {
            var c = b;
            c.nonJSDeps && M(a);
            b = c.nextDepWaitingNext;
            c.nextDepWaitingNext = null;
            var d = !e[c.id];
            d || ja(c)
        }
    }

    function la(a) {
        return a.special & l
    }

    function ma(a) {
        return a.special & p
    }

    function U(a) {
        while (a.dependencies != null && a.depPosition < a.dependencies.length) {
            var b = a.dependencies[a.depPosition],
                c = T(b);
            if (!c && a != b) {
                ia(a, b);
                return
            }
            a.depPosition++
        }
        la(a) && d.push(a);
        a.nextDepWaitingHead !== null && ka(a)
    }

    function na(a) {
        if (a.sideEffectDependencyException != null) throw a.sideEffectDependencyException;
        if (a.ranRecursiveSideEffects) return;
        a.ranRecursiveSideEffects = !0;
        var b = a.dependencies;
        if (b)
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    na(d)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
                if (d.special & n) try {
                    F.call(null, d.id)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
            }
    }

    function V(a, b) {
        e[a] = new P(a, 0, b), f[a] = {
            id: a,
            dependencies: [],
            category: 0,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        }
    }
    V("module", 0);
    V("exports", 0);
    V("define", N);
    V("global", a);
    V("require", F);
    V("importDefault", G);
    V("importNamespace", H);
    V("requireDynamic", oa);
    V("requireLazy", R);
    V("requireWeak", W);
    V("ifRequired", X);
    V("ifRequireable", Y);
    b = [F.call(null, "global"), F.call(null, "require"), F.call(null, "requireDynamic"), F.call(null, "requireLazy"), null, null];
    c = [F.call(null, "global"), F.call(null, "require"), F.call(null, "importDefault"), F.call(null, "importNamespace"), F.call(null, "requireLazy"), null, null];
    N.amd = {};
    a.define = N;
    a.require = F;
    a.importDefault = G;
    a.importNamespace = H;
    a.requireDynamic = oa;
    a.requireLazy = R;

    function oa(a, b) {
        throw new ReferenceError("requireDynamic is not defined")
    }

    function W(a, b) {
        X.call(null, a, function(a) {
            b(a)
        }, function() {
            N("__requireWeak__" + a + "__" + g++, ["__isRequired__" + a], Z()(function() {
                return b(E(e[a]))
            }, "requireWeak"), l, null, 1)
        })
    }

    function X(a, b, c) {
        a = e[a];
        if (a && a.factoryFinished) {
            if (typeof b === "function") return b(E(a))
        } else if (typeof c === "function") return c()
    }

    function Y(a, b, c) {
        if (v !== !0) return X.call(null, a, b, c);
        var d = e[a];
        if (d && d.nonJSDeps && T(d)) {
            if (typeof b === "function") return b(F.call(null, a))
        } else if (typeof c === "function") return c()
    }
    $ = {
        getDupCount: function() {
            return [j, k]
        },
        getModules: function() {
            var a = {};
            for (var b in e) e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
            return a
        },
        modulesMap: e,
        debugUnresolvedDependencies: t
    };

    function pa(a) {
        return a
    }

    function Z() {
        var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : pa;
        return function() {
            return b.apply(void 0, arguments)
        }
    }
    V("__getTotalRequireCalls", ea);
    V("__getModuleTimeDetails", fa);
    V("__debug", $);
    a.__d = function(a, b, c, d) {
        Z()(function() {
            N(a, b, c, (d || m) | o, null, null, null)
        }, "define " + a, {
            root: !0
        })()
    };

    function $(a, b) {
        return !0
    }
    if (a.__d_stub) {
        for (var W = 0; W < a.__d_stub.length; W++) a.__d.apply(null, a.__d_stub[W]);
        delete a.__d_stub
    }
    if (a.__rl_stub) {
        for (var Y = 0; Y < a.__rl_stub.length; Y++) R.apply(null, a.__rl_stub[Y]);
        delete a.__rl_stub
    }
    G = function() {};
    a.$RefreshReg$ = G;
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
__d("ArbiterToken", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.unsubscribe = function() {
                for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
                this.$2.length = 0
            }, this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isForArbiterInstance = function(a) {
            this.$1 || h(0, 2506);
            return this.$1 === a
        };
        return a
    }();
    g["default"] = a
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
__d("ErrorGuard", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorGuard
}), 98);
__d("CallbackDependencyManager", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map()
        }
        var c = a.prototype;
        c.$5 = function(a, b) {
            var c = 0,
                d = new Set();
            for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
            for (var b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (e) {
                    if (f >= b.length) break;
                    d = b[f++]
                } else {
                    f = b.next();
                    if (f.done) break;
                    d = f.value
                }
                d = d;
                if (this.$4.get(d)) continue;
                c++;
                var g = this.$1.get(d);
                g === void 0 && (g = new Map(), this.$1.set(d, g));
                g.set(a, (g.get(a) || 0) + 1)
            }
            return c
        };
        c.$6 = function(a) {
            a = this.$1.get(a);
            if (!a) return;
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
                var h = f[0];
                f = f[1] - 1;
                a.set(h, f);
                f <= 0 && a["delete"](h);
                f = this.$2.get(h);
                if (f !== void 0) {
                    f.$7--;
                    if (f.$7 <= 0) {
                        f = f.$8;
                        this.$2["delete"](h);
                        (g || (g = b("ErrorGuard"))).applyWithGuard(f, null, [])
                    }
                }
            }
        };
        c.addDependenciesToExistingCallback = function(a, b) {
            var c = this.$2.get(a);
            if (!c) return null;
            b = this.$5(a, b);
            c.$7 += b;
            return a
        };
        c.isPersistentDependencySatisfied = function(a) {
            return !!this.$4.get(a)
        };
        c.satisfyPersistentDependency = function(a) {
            this.$4.set(a, 1), this.$6(a)
        };
        c.satisfyNonPersistentDependency = function(a) {
            var b = this.$4.get(a) === 1;
            b || this.$4.set(a, 1);
            this.$6(a);
            b || this.$4["delete"](a)
        };
        c.registerCallback = function(a, c) {
            var d = this.$3;
            this.$3++;
            c = this.$5(d, c);
            if (c === 0) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(a, null, []);
                return null
            }
            this.$2.set(d, {
                $8: a,
                $7: c
            });
            return d
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventSubscription", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        var b = this;
        this.remove = function() {
            b.subscriber && (b.subscriber.removeSubscription(b), b.subscriber = null)
        };
        this.subscriber = a
    };
    f["default"] = a
}), 66);
__d("EmitterSubscription", ["EventSubscription"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            b = a.call(this, b) || this;
            b.listener = c;
            b.context = d;
            return b
        }
        return b
    }(c("EventSubscription"));
    g["default"] = a
}), 98);
__d("EventSubscriptionVendor", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.addSubscription = function(a, b) {
            b.subscriber === this || g(0, 2828);
            this.$1[a] || (this.$1[a] = []);
            var c = this.$1[a].length;
            this.$1[a].push(b);
            b.eventType = a;
            b.key = c;
            return b
        };
        b.removeAllSubscriptions = function(a) {
            a === void 0 ? this.$1 = {} : delete this.$1[a]
        };
        b.removeSubscription = function(a) {
            var b = a.eventType;
            a = a.key;
            b = this.$1[b];
            b && delete b[a]
        };
        b.getSubscriptionsForType = function(a) {
            return this.$1[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("emptyFunction", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return function() {
            return a
        }
    }
    b = function() {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function() {
        return this
    };
    b.thatReturnsArgument = function(a) {
        return a
    };
    c = b;
    f["default"] = c
}), 66);
__d("FBLogger", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").FBLogger
}), 98);
__d("unrecoverableViolation", ["FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        b = c("FBLogger")(b);
        d ? b = b.catching(d) : b = b.blameToPreviousFrame();
        return b.mustfixThrow(a)
    }
    g["default"] = a
}), 98);
__d("BaseEventEmitter", ["EmitterSubscription", "ErrorGuard", "EventSubscriptionVendor", "emptyFunction", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$2 = new(b("EventSubscriptionVendor"))(), this.$1 = null
        }
        var c = a.prototype;
        c.addListener = function(a, c, d) {
            return this.$2.addSubscription(a, new(b("EmitterSubscription"))(this.$2, c, d))
        };
        c.removeListener = function(a) {
            this.$2.removeSubscription(a)
        };
        c.once = function(a, b, c) {
            var d = this;
            return this.addListener(a, function() {
                d.removeCurrentListener(), b.apply(c, arguments)
            })
        };
        c.removeAllListeners = function(a) {
            this.$2.removeAllSubscriptions(a)
        };
        c.removeCurrentListener = function() {
            if (!this.$1) throw b("unrecoverableViolation")("Not in an emitting cycle; there is no current subscription", "emitter");
            this.$2.removeSubscription(this.$1)
        };
        c.listeners = function(a) {
            a = this.$2.getSubscriptionsForType(a);
            return a ? a.filter(b("emptyFunction").thatReturnsTrue).map(function(a) {
                return a.listener
            }) : []
        };
        c.emit = function(a) {
            var b = this.$2.getSubscriptionsForType(a);
            if (b) {
                var c = Object.keys(b),
                    d;
                for (var e = 0; e < c.length; e++) {
                    var f = c[e],
                        g = b[f];
                    if (g) {
                        this.$1 = g;
                        if (d == null) {
                            d = [g, a];
                            for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1]
                        } else d[0] = g;
                        this.__emitToSubscription.apply(this, d)
                    }
                }
                this.$1 = null
            }
        };
        c.__emitToSubscription = function(a, c) {
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
            (g || (g = b("ErrorGuard"))).applyWithGuard(a.listener, a.context, e, {
                name: "EventEmitter " + c + " event"
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(c("BaseEventEmitter"));
    g["default"] = a
}), 98);
__d("EventEmitterWithHolding", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$2 = a, this.$3 = b, this.$1 = null, this.$5 = [], this.$4 = 0
        }
        var b = a.prototype;
        b.addListener = function(a, b, c) {
            return this.$2.addListener(a, b, c)
        };
        b.once = function(a, b, c) {
            return this.$2.once(a, b, c)
        };
        b.addRetroactiveListener = function(a, b, c) {
            var d = this.$2.addListener(a, b, c),
                e = this.$5;
            e.push(!1);
            this.$4++;
            this.$3.emitToListener(a, b, c);
            this.$4--;
            e[e.length - 1] && d.remove();
            e.pop();
            return d
        };
        b.removeAllListeners = function(a) {
            this.$2.removeAllListeners(a)
        };
        b.removeCurrentListener = function() {
            if (this.$4) {
                var a = this.$5;
                a[a.length - 1] = !0
            } else this.$2.removeCurrentListener()
        };
        b.listeners = function(a) {
            return this.$2.listeners(a)
        };
        b.emit = function(a) {
            var b;
            for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
            (b = this.$2).emit.apply(b, [a].concat(d))
        };
        b.emitAndHold = function(a) {
            var b, c;
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
            (c = this.$2).emit.apply(c, [a].concat(e));
            this.$1 = null
        };
        b.releaseCurrentEvent = function() {
            this.$1 != null ? this.$3.releaseEvent(this.$1) : this.$4 > 0 && this.$3.releaseCurrentEvent()
        };
        b.releaseHeldEventType = function(a) {
            this.$3.releaseEventType(a)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("EventHolder", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}, this.$2 = []
        }
        var b = a.prototype;
        b.holdEvent = function(a) {
            this.$1[a] = this.$1[a] || [];
            var b = this.$1[a],
                c = {
                    eventType: a,
                    index: b.length
                };
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            b.push(e);
            return c
        };
        b.emitToListener = function(a, b, c) {
            var d = this,
                e = this.$1[a];
            if (!e) return;
            e.forEach(function(e, f) {
                if (!e) return;
                d.$2.push({
                    eventType: a,
                    index: f
                });
                b.apply(c, e);
                d.$2.pop()
            })
        };
        b.releaseCurrentEvent = function() {
            this.$2.length || h(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1])
        };
        b.releaseEvent = function(a) {
            delete this.$1[a.eventType][a.index]
        };
        b.releaseEventType = function(a) {
            this.$1[a] = []
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("Arbiter", ["invariant", "ArbiterToken", "CallbackDependencyManager", "ErrorGuard", "EventEmitter", "EventEmitterWithHolding", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i(a) {
        return Array.isArray(a) ? a : [a]
    }

    function j(a) {
        return a instanceof k || a === k ? a : k
    }
    var k = function() {
            function a() {
                var a = new(b("EventEmitter"))();
                this.$3 = new l();
                this.$2 = new(b("EventEmitterWithHolding"))(a, this.$3);
                this.$1 = new(b("CallbackDependencyManager"))();
                this.$4 = []
            }
            var c = a.prototype;
            c.subscribe = function(a, c, d) {
                a = i(a);
                a.forEach(function(a) {
                    a && typeof a === "string" || g(0, 1966, a)
                });
                typeof c === "function" || g(0, 1967, c);
                d = d || "all";
                d === "new" || d === "all" || g(0, 1968, d);
                a = a.map(function(a) {
                    var b = this.$5.bind(this, c, a);
                    b.__SMmeta = c.__SMmeta;
                    if (d === "new") return this.$2.addListener(a, b);
                    this.$4.push({});
                    a = this.$2.addRetroactiveListener(a, b);
                    this.$4.pop();
                    return a
                }, this);
                return new(b("ArbiterToken"))(this, a)
            };
            c.$5 = function(a, c, d) {
                var e = this.$4[this.$4.length - 1];
                if (e[c] === !1) return;
                a = (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [c, d]);
                a === !1 && this.$2.releaseCurrentEvent();
                e[c] = a
            };
            c.unsubscribeCurrentSubscription = function() {
                this.$2.removeCurrentListener()
            };
            c.releaseCurrentPersistentEvent = function() {
                this.$2.releaseCurrentEvent()
            };
            c.subscribeOnce = function(a, b, c) {
                var d = this;
                a = this.subscribe(a, function(a, c) {
                    d.unsubscribeCurrentSubscription();
                    return b(a, c)
                }, c);
                return a
            };
            c.unsubscribe = function(a) {
                a.isForArbiterInstance(this) || g(0, 1969), a.unsubscribe()
            };
            c.inform = function(a, b, c) {
                var d = Array.isArray(a);
                a = i(a);
                c = c || "event";
                var e = c === "state" || c === "persistent";
                this.$4.push({});
                for (var f = 0; f < a.length; f++) {
                    var h = a[f];
                    h || g(0, 1970, h);
                    this.$3.setHoldingBehavior(h, c);
                    this.$2.emitAndHold(h, b);
                    this.$6(h, b, e)
                }
                h = this.$4.pop();
                return d ? h : h[a[0]]
            };
            c.query = function(a) {
                var b = this.$3.getHoldingBehavior(a);
                !b || b === "state" || g(0, 1971, a);
                b = null;
                this.$3.emitToListener(a, function(a) {
                    b = a
                });
                return b
            };
            c.registerCallback = function(a, b) {
                if (typeof a === "function") return this.$1.registerCallback(a, b);
                else return this.$1.addDependenciesToExistingCallback(a, b)
            };
            c.$6 = function(a, b, c) {
                if (b === null) return;
                c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a)
            };
            a.subscribe = function(b, c, d) {
                return a.prototype.subscribe.apply(j(this), arguments)
            };
            a.unsubscribeCurrentSubscription = function() {
                return a.prototype.unsubscribeCurrentSubscription.apply(j(this))
            };
            a.releaseCurrentPersistentEvent = function() {
                return a.prototype.releaseCurrentPersistentEvent.apply(j(this))
            };
            a.subscribeOnce = function(b, c, d) {
                return a.prototype.subscribeOnce.apply(j(this), arguments)
            };
            a.unsubscribe = function(b) {
                return a.prototype.unsubscribe.apply(j(this), arguments)
            };
            a.inform = function(b, c, d) {
                return a.prototype.inform.apply(j(this), arguments)
            };
            a.informSingle = function(b, c, d) {
                return a.prototype.inform.apply(j(this), arguments)
            };
            a.query = function(b) {
                return a.prototype.query.apply(j(this), arguments)
            };
            a.registerCallback = function(b, c) {
                return a.prototype.registerCallback.apply(j(this), arguments)
            };
            a.$6 = function(b, c, d) {
                return a.prototype.$6.apply(j(this), arguments)
            };
            a.$5 = function(b, c, d) {
                return a.prototype.$5.apply(j(this), arguments)
            };
            return a
        }(),
        l = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                var a;
                a = b.call(this) || this;
                a.$ArbiterEventHolder1 = {};
                return a
            }
            var c = a.prototype;
            c.setHoldingBehavior = function(a, b) {
                this.$ArbiterEventHolder1[a] = b
            };
            c.getHoldingBehavior = function(a) {
                return this.$ArbiterEventHolder1[a]
            };
            c.holdEvent = function(a) {
                var c = this.$ArbiterEventHolder1[a];
                c !== "persistent" && this.$ArbiterEventHolder2(a);
                if (c !== "event") {
                    var d;
                    for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
                    return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f))
                }
                return void 0
            };
            c.$ArbiterEventHolder2 = function(a) {
                this.emitToListener(a, this.releaseCurrentEvent, this)
            };
            c.releaseEvent = function(a) {
                a && b.prototype.releaseEvent.call(this, a)
            };
            return a
        }(b("EventHolder"));
    k.call(k);
    e.exports = k
}), null);
__d("objectValues", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return Object.values(a)
    }
    f["default"] = a
}), 66);
__d("BootloaderEvents", ["Arbiter", "objectValues"], (function(a, b, c, d, e, f, g) {
    var h = "bootloader/bootload",
        i = "hasteResponse/handle",
        j = "bootloader/defer_timeout",
        k = new(c("Arbiter"))(),
        l = new Set(),
        m = new Set();

    function n(a, b) {
        return "haste_response_ef:" + a + ":" + ((a = b) != null ? a : "<unknown>")
    }

    function a(a) {
        var b = new Map();
        for (var a = c("objectValues")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= a.length) break;
                f = a[e++]
            } else {
                e = a.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            for (var f = f, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                var j = i[0];
                i = i[1];
                b.set(j, i)
            }
        }
        return b
    }

    function b() {
        return {
            blocking: new Map(),
            nonblocking: new Map(),
            "default": new Map()
        }
    }

    function d(a) {
        l.add(a)
    }

    function e(a) {
        l["delete"](a), k.inform(h, a, "persistent")
    }

    function f(a, b) {
        m.add(n(a, b))
    }

    function o(a, b, c) {
        k.inform(n(a, b), c, "persistent")
    }

    function p(a) {
        k.inform(j, a, "persistent")
    }

    function q(a) {
        return k.subscribe(h, function(b, c) {
            return a(c)
        })
    }

    function r(a) {
        return k.subscribe(j, function(b, c) {
            return a(c)
        })
    }

    function s() {
        return new Set(l)
    }

    function t(a) {
        k.inform(i, a, "persistent")
    }

    function u(a) {
        return k.subscribe(i, function(b, c) {
            b = n(c.source, c.sourceDetail);
            if (m.has(b)) {
                k.subscribe(b, function(b, d) {
                    return a(babelHelpers["extends"]({}, c, {
                        efData: d
                    }))
                });
                return
            }
            a(c)
        })
    }
    g.flattenResourceMapSet = a;
    g.newResourceMapSet = b;
    g.notifyBootloadStart = d;
    g.notifyBootload = e;
    g.notifyHasteResponseEFStart = f;
    g.notifyHasteResponseEF = o;
    g.notifyDeferTimeout = p;
    g.onBootload = q;
    g.onDeferTimeout = r;
    g.getActiveBootloads = s;
    g.notifyHasteResponse = t;
    g.onHasteResponse = u
}), 98);
__d("performanceAbsoluteNow", ["performance"], (function(a, b, c, d, e, f, g) {
    var h = function() {
        return Date.now()
    };

    function a(a) {
        h = a
    }
    if (c("performance").now && c("performance").timing && c("performance").timing.navigationStart) {
        var i = c("performance").timing.navigationStart;
        b = function() {
            return c("performance").now() + i
        }
    } else b = function() {
        return h()
    };
    b.setFallback = a;
    d = b;
    g["default"] = d
}), 98);
__d("BootloaderEventsManager", ["CallbackDependencyManager", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$1 = new(b("CallbackDependencyManager"))(), this.$2 = new Map()
        }
        var c = a.prototype;
        c.rsrcDone = function(a) {
            return a
        };
        c.bootload = function(a) {
            return "bl:" + a.join(",")
        };
        c.tierOne = function(a) {
            return "t1:" + a
        };
        c.tierTwoStart = function(a) {
            return "t2s:" + a
        };
        c.tierTwo = function(a) {
            return "t2:" + a
        };
        c.tierThreeStart = function(a) {
            return "t3s:" + a
        };
        c.tierThree = function(a) {
            return "t3:" + a
        };
        c.tierOneLog = function(a) {
            return "t1l:" + a
        };
        c.tierTwoLog = function(a) {
            return "t2l:" + a
        };
        c.tierThreeLog = function(a) {
            return "t3l:" + a
        };
        c.beDone = function(a) {
            return "beDone:" + a
        };
        c.notify = function(a) {
            this.$2.set(a, (g || (g = b("performanceAbsoluteNow")))()), this.$1.satisfyPersistentDependency(a)
        };
        c.getEventTime = function(a) {
            return this.$2.get(a)
        };
        c.registerCallback = function(a, b) {
            this.$1.registerCallback(a, b)
        };
        return a
    }();
    e.exports = a
}), null);
__d("BitMap", [], (function(a, b, c, d, e, f) {
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    a = function() {
        function a() {
            this.$1 = [], this.$2 = null
        }
        var b = a.prototype;
        b.set = function(a) {
            this.$2 != null && !this.$1[a] && (this.$2 = null);
            this.$1[a] = 1;
            return this
        };
        b.toString = function() {
            var a = [];
            for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
            return a.length ? i(a.join("")) : ""
        };
        b.toCompressedString = function() {
            if (this.$1.length === 0) return "";
            if (this.$2 != null) return this.$2;
            var a = [],
                b = 1,
                c = this.$1[0] || 0,
                d = c.toString(2);
            for (var e = 1; e < this.$1.length; e++) {
                var f = this.$1[e] || 0;
                f === c ? b++ : (a.push(h(b)), c = f, b = 1)
            }
            b && a.push(h(b));
            return this.$2 = i(d + a.join(""))
        };
        return a
    }();

    function h(a) {
        a = a.toString(2);
        var b = "0".repeat(a.length - 1);
        return b + a
    }

    function i(a) {
        a = (a + "00000").match(/[01]{6}/g);
        var b = "";
        for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
        return b
    }
    f["default"] = a
}), 66);
__d("CSRBitMap", ["BitMap"], (function(a, b, c, d, e, f, g) {
    var h = new(c("BitMap"))();

    function a(a) {
        h.set(a)
    }

    function b() {
        return h.toCompressedString()
    }
    g.add = a;
    g.toCompressedString = b
}), 98);
__d("CSRIndexUtil", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    b = 0;

    function a(a) {
        a.substr(0, 1) === ":" || h(0, 21456, a);
        return a.substr(1).split(",").map(function(a) {
            return parseInt(a, 10)
        })
    }
    g.UNKNOWN_RESOURCE_INDEX = b;
    g.parseCSRIndexes = a
}), 98);
__d("isFacebookURI", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = ["http", "https"];

    function a(a) {
        g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    a.setRegex = function(a) {
        g = a
    };
    f["default"] = a
}), 66);
__d("isMessengerDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("isWorkplaceDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)workplace\\.com$", "i");

    function a(a) {
        return a.getProtocol() === "https" && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("BlueCompatBroker", ["Env", "URI", "isCometAltpayJsSdkIframeAllowedDomain", "isFacebookURI", "isMessengerDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = new Map(),
        k = !1,
        l = function(a) {
            a = new(g || (g = b("URI")))(a);
            return b("isFacebookURI")(a) || b("isWorkplaceDotComURI")(a) || b("isMessengerDotComURI")(a)
        },
        m = {
            dispatch: function(a) {
                var b = m.getMessageEventString(a, "compatAction");
                if (b != null) {
                    b = j.get(b);
                    b && b(a)
                }
            },
            getMessageEventString: function(a, b) {
                a = a.data;
                if (typeof a === "object") {
                    a = a == null ? void 0 : a[b];
                    if (typeof a === "string") return a
                }
                return ""
            },
            init: function(a) {
                a === void 0 && (a = "");
                if (!k) {
                    document.body && (document.body.style.overflow = "auto");
                    var c = b("isCometAltpayJsSdkIframeAllowedDomain")() ? "https://secure.facebook.com/" : document.referrer,
                        d = c.indexOf("/", 8);
                    c = c.substring(0, d);
                    if (l(c)) {
                        d = new MessageChannel();
                        a = a !== "" ? a : (h || (h = b("Env"))).iframeKey;
                        i = d.port1;
                        i.onmessage = m.dispatch;
                        window.parent.postMessage({
                            compatAction: "CompatSetup",
                            iframeKey: a
                        }, c + "/", [d.port2])
                    }
                    try {
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
                    } catch (a) {}
                    k = !0
                }
            },
            register: function(a, b) {
                j.set(a, b)
            },
            clear: function(a) {
                j["delete"](a)
            },
            sendMessage: function(a) {
                k || m.init(), i && i.postMessage(babelHelpers["extends"]({}, a))
            }
        };
    e.exports = m
}), null);
__d("MessengerEnvironment", ["CurrentEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = babelHelpers["extends"]({}, c("CurrentEnvironment"), {
        messengerui: !1,
        roomschatui: !1,
        setMessengerUI: function(a) {
            h.messengerui = a
        },
        setRoomsChatUI: function(a) {
            h.roomschatui = a
        }
    });
    a = h;
    g["default"] = a
}), 98);
__d("areEqual", [], (function(a, b, c, d, e, f) {
    var g = [],
        h = [];

    function a(a, b) {
        var c = g.length ? g.pop() : [],
            d = h.length ? h.pop() : [];
        a = i(a, b, c, d);
        c.length = 0;
        d.length = 0;
        g.push(c);
        h.push(d);
        return a
    }

    function i(a, b, c, d) {
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null) return !1;
        if (typeof a !== "object" || typeof b !== "object") return !1;
        var e = Object.prototype.toString,
            f = e.call(a);
        if (f != e.call(b)) return !1;
        switch (f) {
            case "[object String]":
                return a == String(b);
            case "[object Number]":
                return isNaN(a) || isNaN(b) ? !1 : a == Number(b);
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b;
            case "[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        e = c.length;
        while (e--)
            if (c[e] == a) return d[e] == b;
        c.push(a);
        d.push(b);
        e = 0;
        if (f === "[object Array]") {
            e = a.length;
            if (e !== b.length) return !1;
            while (e--)
                if (!i(a[e], b[e], c, d)) return !1
        } else if (a instanceof Set) {
            if (a.size !== b.size) return !1;
            f = Array.from(b.values());
            for (var e = a, g = Array.isArray(e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var j;
                if (g) {
                    if (h >= e.length) break;
                    j = e[h++]
                } else {
                    h = e.next();
                    if (h.done) break;
                    j = h.value
                }
                j = j;
                var k = !1;
                for (var l = 0; l < f.length; l++) {
                    var m = f[l];
                    if (i(j, m, c, d)) {
                        k = !0;
                        f.splice(l, 1);
                        break
                    }
                }
                if (k === !1) return !1
            }
            return !0
        } else {
            if (a.constructor !== b.constructor) return !1;
            if (Object.prototype.hasOwnProperty.call(a, "valueOf") && Object.prototype.hasOwnProperty.call(b, "valueOf")) return a.valueOf() == b.valueOf();
            m = Object.keys(a);
            if (m.length != Object.keys(b).length) return !1;
            for (var j = 0; j < m.length; j++) {
                if (m[j] === "_owner") continue;
                if (!Object.prototype.hasOwnProperty.call(b, m[j]) || !i(a[m[j]], b[m[j]], c, d)) return !1
            }
        }
        c.pop();
        d.pop();
        return !0
    }
    f["default"] = a
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
__d("gkx", ["invariant", "BanzaiLazyQueue", "ExecutionEnvironment", "emptyFunction"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {},
        j = {};

    function k(a) {
        var b = i[a];
        b != null || h(0, 11797, a);
        j[a] || (j[a] = !0, (d("ExecutionEnvironment").canUseDOM || d("ExecutionEnvironment").isInWorker) && d("BanzaiLazyQueue").queuePost("gk2_exposure", {
            identifier: a,
            hash: b.hash
        }));
        return b.result
    }
    k.add = function(a, b) {
        for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++
    };
    k.addLoggedInternal = function(a) {
        k.add(a);
        for (var b in a) j[b] = !0
    };
    a = c("emptyFunction");
    k.getGKs = function() {
        return null
    };
    k.getLogged = function() {
        return Object.keys(j).map(function(a) {
            return {
                identifier: a,
                hash: i[a].hash
            }
        })
    };
    k.setPass = a;
    k.setFail = a;
    b = k;
    g["default"] = b
}), 98);
__d("isCdnURI", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
        var b = Number(a.getPort());
        if (!!b && b !== 80 && b !== 443) return !1;
        return a.isSubdomainOfDomain("fbcdn.net") ? !0 : !1
    }
    f["default"] = a
}), 66);
__d("BlueCompatRouter", ["BlueCompatBroker", "Env", "MessengerEnvironment", "URI", "areEqual", "gkx", "isCdnURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = function(b, c) {
        var d, e = a.__fbNativeClearTimeout || window.clearTimeout,
            f = a.__fbNativeSetTimeout || window.setTimeout;
        return function() {
            var a = this,
                g = arguments,
                h = function() {
                    d = null, b.apply(a, g)
                };
            e(d);
            d = f(h, c)
        }
    };
    var h = {
            convertUri: function(a) {
                if (a == null || a === "") return new(c("URI"))();
                a = new(c("URI"))(a);
                if (a.getDomain().endsWith("messenger.com")) return a.setDomain(a.getDomain().replace(/messenger\.com/i, "facebook.com")).setPath("/messages" + a.getPath());
                else return a
            },
            goFragment: function(a) {
                if (c("Env").isCQuick) {
                    a = h.convertUri(a);
                    if (a.getFragment()) {
                        var b = c("URI").getRequestURI(!1, !1);
                        if (c("areEqual")(new(c("URI"))(b).setFragment("").getQualifiedURI(), new(c("URI"))(a).setFragment("").getQualifiedURI())) return !0
                    }
                }
                return !1
            },
            go: function(a, b) {
                if (c("Env").isCQuick) {
                    var d = new(c("URI"))(a);
                    a = h.convertUri(a);
                    var e = a.getQualifiedURI();
                    if (c("isCdnURI")(a) || e.getPath().startsWith("/compat")) return !1;
                    a = function() {
                        if (c("MessengerEnvironment").messengerui && e.getPath().startsWith("/messages")) return [!1, "/messages"];
                        if (d.getPath().startsWith("/settings") && e.getPath().startsWith("/settings") && (c("gkx")("1224637") || e.getSubdomain() !== d.getSubdomain())) {
                            var a = e.getQueryData().tab;
                            return a != null ? [!1, "/settings/" + a] : [!1, "/settings"]
                        }
                        if (d.getPath().startsWith("/games") && e.getPath().startsWith("/games")) return [!1, "/games/web"];
                        if (d.getPath().startsWith("/notes") && e.getPath().startsWith("/notes")) return [!1, "/notes"];
                        if (d.getPath().startsWith("/latest/posts") && e.getPath().startsWith("/latest/posts")) return [!1, "/business"];
                        if (/\/[A-Za-z\-0-9]+\/settings/.test(d.getPath())) return [!1, "/pages/settings"];
                        return /\/[A-Za-z\-0-9]+\/insights/.test(d.getPath()) ? [!1, "/insights"] : [!0, ""]
                    }();
                    var f = a[0];
                    a = a[1];
                    i({
                        compatAction: "route",
                        maintainKey: a,
                        replace: b,
                        uri: String(e)
                    });
                    return f
                }
                return !1
            },
            startChat: function(a, b) {
                return h.sendMessage({
                    compatAction: "startchat",
                    tabId: a,
                    isPage: b
                })
            },
            chatListener: function(a, b, c) {
                a.addEventListener("click", function(a) {
                    a.preventDefault(), h.startChat(b, c)
                })
            },
            sendMessage: function(a) {
                if (c("Env").isCQuick) {
                    c("BlueCompatBroker").init();
                    c("BlueCompatBroker").sendMessage(a);
                    return !0
                }
                return !1
            }
        },
        i = b(h.sendMessage, 250);
    d = h;
    g["default"] = d
}), 98);
__d("flattenPHPQueryData", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        return i(a, "", {})
    }

    function i(a, b, c) {
        if (a === null || a === void 0) c[b] = void 0;
        else if (typeof a === "object") {
            typeof a.appendChild !== "function" || h(0, 2616);
            for (var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== void 0 && i(a[d], b ? b + "[" + d + "]" : d, c)
        } else c[b] = a;
        return c
    }
    g["default"] = a
}), 98);
__d("PHPQuerySerializer", ["flattenPHPQueryData"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = g(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + g(String(a[d])))
            }
        return c.join("&")
    }

    function g(a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }
    var h = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

    function i(a) {
        return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a
    }

    function c(a) {
        if (!a) return {};
        var b = {};
        a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        a = a.split("&");
        var c = Object.prototype.hasOwnProperty;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a[d].match(h);
            if (!f) {
                var g = a[d].indexOf("=");
                if (g === -1) b[j(a[d])] = null;
                else {
                    var k = a[d].substring(0, g);
                    g = a[d].substring(g + 1);
                    b[j(k)] = j(g)
                }
            } else {
                k = f[2].split(/\]\[|\[|\]/).slice(0, -1);
                g = f[1];
                f = j(f[3] || "");
                k[0] = g;
                g = b;
                for (var l = 0; l < k.length - 1; l++) {
                    var m = i(k[l]);
                    if (m) {
                        if (!c.call(g, m)) {
                            var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                            g[m] = n;
                            if (g[m] !== n) return b
                        }
                        g = g[m]
                    } else k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? g.push({}) : g.push([]), g = g[g.length - 1]
                }
                g instanceof Array && k[k.length - 1] === "" ? g.push(f) : g[i(k[k.length - 1])] = f
            }
        }
        return b
    }

    function j(a) {
        try {
            return decodeURIComponent(a.replace(/\+/g, " "))
        } catch (b) {
            return a
        }
    }
    d = {
        serialize: a,
        encodeComponent: g,
        deserialize: c,
        decodeComponent: j
    };
    e.exports = d
}), null);
__d("PHPQuerySerializerNoEncoding", ["PHPQuerySerializer", "flattenPHPQueryData"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = [];
        a = c("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])))
            }
        return b.join("&")
    }

    function h(a) {
        return a
    }
    g.serialize = a;
    g.encodeComponent = h;
    g.deserialize = d("PHPQuerySerializer").deserialize;
    g.decodeComponent = d("PHPQuerySerializer").decodeComponent
}), 98);
__d("PHPStrictQuerySerializer", ["PHPQuerySerializer", "flattenPHPQueryData"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = [];
        a = c("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])))
            }
        return b.join("&")
    }

    function h(a) {
        return encodeURIComponent(a)
    }
    g.serialize = a;
    g.encodeComponent = h;
    g.deserialize = d("PHPQuerySerializer").deserialize;
    g.decodeComponent = d("PHPQuerySerializer").decodeComponent
}), 98);
__d("URIRFC3986", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");

    function a(a) {
        if (a.trim() === "") return null;
        a = a.match(g);
        if (a == null) return null;
        var b = a[2] ? a[2].substr(2) : null,
            c = a[1] ? a[1].substr(0, a[1].length - 1) : null;
        a = {
            uri: a[0] ? a[0] : null,
            scheme: c,
            authority: b,
            userinfo: a[3] ? a[3].substr(0, a[3].length - 1) : null,
            host: a[2] ? a[4] : null,
            port: a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null,
            path: a[6] ? a[6] : null,
            query: a[7] ? a[7].substr(1) : null,
            fragment: a[8] ? a[8].substr(1) : null,
            isGenericURI: b === null && !!c
        };
        return a
    }
    f.parse = a
}), 66);
__d("createObjectFrom", [], (function(a, b, c, d, e, f) {
    function g(a, b) {
        if (b === void 0) return g(a, !0);
        var c = {};
        if (Array.isArray(b))
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
        else
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
        return c
    }
    f["default"] = g
}), 66);
__d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f, g) {
    var h = c("createObjectFrom")(["aidemos", "aistudio", "blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-internal", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "flipper", "ftp", "gtalk", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "lasso", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "instagram", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "oculus", "oculus.store", "oculus.feed", "oculusstore", "odh", "skype", "callto", "messenger", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "kirigami", "origami-file", "fb-nimble-vrsrecorder", "fb-nimble-monohandtrackingvis", "together", "togetherbl", "venues", "whatsapp-consumer", "whatsapp-smb", "fb-ide-opener", "fb-vscode", "fb-vscode-insiders", "spark-studio"]);

    function a(a) {
        return a == null || a === "" ? !0 : Object.prototype.hasOwnProperty.call(h, a.toLowerCase())
    }
    g.isAllowed = a
}), 98);
__d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        a = a.split(".");
        a.length < 3 ? a.unshift(b) : a[0] = b;
        return a.join(".")
    }
    f["default"] = a
}), 66);
__d("URIAbstractBase", ["invariant", "PHPStrictQuerySerializer", "URIRFC3986", "URISchemes", "setHostSubdomain"], (function(a, b, c, d, e, f, g) {
    var h, i, j = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
        l = [];
    a = function() {
        "use strict";
        a.parse = function(c, d, e, f) {
            if (!d) return !0;
            if (d instanceof a) {
                c.setProtocol(d.getProtocol());
                c.setDomain(d.getDomain());
                c.setPort(d.getPort());
                c.setPath(d.getPath());
                c.setQueryData(f.deserialize(f.serialize(d.getQueryData())));
                c.setFragment(d.getFragment());
                c.setIsGeneric(d.getIsGeneric());
                c.setForceFragmentSeparator(d.getForceFragmentSeparator());
                c.setOriginalRawQuery(d.getOriginalRawQuery());
                c.setQueryParamModified(!1);
                return !0
            }
            d = d.toString().trim();
            var g = (h || (h = b("URIRFC3986"))).parse(d) || {
                fragment: null,
                scheme: null,
                query: null
            };
            if (!e && !(i || (i = b("URISchemes"))).isAllowed(g.scheme)) return !1;
            c.setProtocol(g.scheme || "");
            if (!e && j.test(g.host || "")) return !1;
            c.setDomain(g.host || "");
            c.setPort(g.port || "");
            c.setPath(g.path || "");
            if (e) c.setQueryData(f.deserialize(g.query || "") || {});
            else try {
                c.setQueryData(f.deserialize(g.query || "") || {})
            } catch (a) {
                return !1
            }
            c.setFragment(g.fragment || "");
            g.fragment === "" && c.setForceFragmentSeparator(!0);
            c.setIsGeneric(g.isGenericURI || !1);
            c.setOriginalRawQuery(g.query);
            c.setQueryParamModified(!1);
            if (g.userinfo !== null) {
                if (e) throw new Error("URI.parse: invalid URI (userinfo is not allowed in a URI): " + d);
                return !1
            }
            if (!c.getDomain() && c.getPath().indexOf("\\") !== -1) {
                if (e) throw new Error("URI.parse: invalid URI (no domain but multiple back-slashes): " + d);
                return !1
            }
            if (!c.getProtocol() && k.test(d)) {
                if (e) throw new Error("URI.parse: invalid URI (unsafe protocol-relative URLs): " + d + "'");
                return !1
            }
            if (c.getDomain() && c.getPath() && !c.getPath().startsWith("/")) {
                if (e) throw new Error("URI.parse: invalid URI (domain and path where path lacks leading slash): " + d);
                return !1
            }
            return !0
        };
        a.tryParse = function(b, c) {
            var d = new a(null, c);
            return a.parse(d, b, !1, c) ? d : null
        };
        a.isValid = function(b, c) {
            return !!a.tryParse(b, c)
        };

        function a(b, c) {
            c || g(0, 2966), this.$9 = c, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, a.parse(this, b, !0, c), this.$11 = !1
        }
        var c = a.prototype;
        c.setProtocol = function(a) {
            (i || (i = b("URISchemes"))).isAllowed(a) || g(0, 11793, a);
            this.$7 = a;
            return this
        };
        c.getProtocol = function() {
            return (this.$7 || "").toLowerCase()
        };
        c.setSecure = function(a) {
            return this.setProtocol(a ? "https" : "http")
        };
        c.isSecure = function() {
            return this.getProtocol() === "https"
        };
        c.setDomain = function(a) {
            if (j.test(a)) throw new Error("URI.setDomain: unsafe domain specified: " + a + " for url " + this.toString());
            this.$1 = a;
            return this
        };
        c.getDomain = function() {
            return this.$1
        };
        c.setPort = function(a) {
            this.$6 = a;
            return this
        };
        c.getPort = function() {
            return this.$6
        };
        c.setPath = function(a) {
            this.$5 = a;
            return this
        };
        c.getPath = function() {
            return this.$5
        };
        c.addQueryData = function(a, b) {
            Object.prototype.toString.call(a) === "[object Object]" ? Object.assign(this.$8, a) : this.$8[a] = b;
            this.$11 = !0;
            return this
        };
        c.setQueryData = function(a) {
            this.$8 = a;
            this.$11 = !0;
            return this
        };
        c.getQueryData = function() {
            return this.$8
        };
        c.setQueryString = function(a) {
            return this.setQueryData(this.$9.deserialize(a))
        };
        c.getQueryString = function(a, b, c) {
            a === void 0 && (a = !1);
            b === void 0 && (b = function() {
                return !1
            });
            c === void 0 && (c = null);
            return this.$12(!1, a, b, c)
        };
        c.$12 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            if (!this.$11 && (b || c(this.getDomain()))) {
                return (b = this.$10) != null ? b : ""
            }
            return (a && d ? d : this.$9).serialize(this.getQueryData())
        };
        c.removeQueryData = function(a) {
            Array.isArray(a) || (a = [a]);
            for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
            this.$11 = !0;
            return this
        };
        c.setFragment = function(a) {
            this.$3 = a;
            this.setForceFragmentSeparator(!1);
            return this
        };
        c.getFragment = function() {
            return this.$3
        };
        c.setForceFragmentSeparator = function(a) {
            this.$2 = a;
            return this
        };
        c.getForceFragmentSeparator = function() {
            return this.$2
        };
        c.setIsGeneric = function(a) {
            this.$4 = a;
            return this
        };
        c.getIsGeneric = function() {
            return this.$4
        };
        c.getOriginalRawQuery = function() {
            return this.$10
        };
        c.setOriginalRawQuery = function(a) {
            this.$10 = a;
            return this
        };
        c.setQueryParamModified = function(a) {
            this.$11 = a;
            return this
        };
        c.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
        };
        c.toString = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!1, !1, a, b)
        };
        c.toStringRawQuery = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!0, !1, a, b)
        };
        c.toStringPreserveQuery = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!1, !0, a, b)
        };
        c.toStringStrictQueryEncoding = function(a) {
            a === void 0 && (a = function() {
                return !1
            });
            return this.$13(!0, !1, a, b("PHPStrictQuerySerializer"))
        };
        c.$13 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            var e = this;
            for (var f = 0; f < l.length; f++) e = l[f](e);
            return e.$14(a, b, c, d)
        };
        c.$14 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            var e = "",
                f = this.getProtocol();
            f && (e += f + ":" + (this.getIsGeneric() ? "" : "//"));
            f = this.getDomain();
            f && (e += f);
            f = this.getPort();
            f && (e += ":" + f);
            f = this.getPath();
            f ? e += f : e && (e += "/");
            f = this.$12(a, b, c, d);
            f && (e += "?" + f);
            a = this.getFragment();
            a ? e += "#" + a : this.getForceFragmentSeparator() && (e += "#");
            return e
        };
        a.registerFilter = function(a) {
            l.push(a)
        };
        c.getOrigin = function() {
            var a = this.getPort();
            return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        };
        c.getQualifiedURIBase = function() {
            return new a(this, this.$9).qualify()
        };
        c.qualify = function() {
            if (!this.getDomain()) {
                var b = new a(window.location.href, this.$9);
                this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort())
            }
            return this
        };
        c.setSubdomain = function(a) {
            var c = this.qualify();
            c = c.getDomain();
            return this.setDomain(b("setHostSubdomain")(c, a))
        };
        c.getSubdomain = function() {
            if (!this.getDomain()) return "";
            var a = this.getDomain().split(".");
            if (a.length <= 2) return "";
            else return a[0]
        };
        c.isSubdomainOfDomain = function(b) {
            var c = this.getDomain();
            return a.isDomainSubdomainOfDomain(c, b, this.$9)
        };
        a.isDomainSubdomainOfDomain = function(b, c, d) {
            if (c === "" || b === "") return !1;
            if (b.endsWith(c)) {
                var e = b.length,
                    f = c.length,
                    g = e - f - 1;
                if (e === f || b[g] === ".") {
                    e = new a(null, d);
                    e.setDomain(c);
                    return a.isValid(e, d)
                }
            }
            return !1
        };
        return a
    }();
    e.exports = a
}), null);
__d("err", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").err
}), 98);
__d("URIBase", ["PHPQuerySerializerNoEncoding", "URIAbstractBase", "UriNeedRawQuerySVChecker", "err"], (function(a, b, c, d, e, f) {
    function g(a, c, d, e) {
        try {
            a = b("URIAbstractBase").parse(a, c, d, e);
            return a
        } catch (a) {
            throw new Error(b("err")(a.message))
        }
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        c.tryParse = function(a, b) {
            var d = new c(null, b);
            return g(d, a, !1, b) ? d : null
        };
        c.isValid = function(a, b) {
            return !!c.tryParse(a, b)
        };

        function c(b, c) {
            var d;
            d = a.call(this, b, c) || this;
            d.$URIBase1 = c;
            g(babelHelpers.assertThisInitialized(d), b, !0, c);
            return d
        }
        var d = c.prototype;
        d.setDomain = function(c) {
            try {
                a.prototype.setDomain.call(this, c)
            } catch (a) {
                throw new Error(b("err")(a.message))
            }
            return this
        };
        d.getQualifiedURIBase = function() {
            return new c(this, this.$URIBase1).qualify()
        };
        d.qualify = function() {
            if (!this.getDomain()) {
                var a = new c(window.location.href, this.$URIBase1);
                this.setProtocol(a.getProtocol()).setDomain(a.getDomain()).setPort(a.getPort())
            }
            return this
        };
        d.isSubdomainOfDomain = function(a) {
            var b = this.getDomain();
            return c.isDomainSubdomainOfDomain(b, a, this.$URIBase1)
        };
        c.isDomainSubdomainOfDomain = function(a, b, d) {
            if (b === "" || a === "") return !1;
            if (a.endsWith(b)) {
                var e = a.length,
                    f = b.length,
                    g = e - f - 1;
                if (e === f || a[g] === ".") {
                    e = new c(null, d);
                    e.setDomain(b);
                    return c.isValid(e, d)
                }
            }
            return !1
        };
        d.toString = function() {
            return a.prototype.toString.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.toStringRawQuery = function() {
            return a.prototype.toStringRawQuery.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.toStringPreserveQuery = function() {
            return a.prototype.toStringPreserveQuery.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.toStringStrictQueryEncoding = function() {
            return a.prototype.toStringStrictQueryEncoding.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery)
        };
        d.getQueryString = function(c) {
            c === void 0 && (c = !1);
            return a.prototype.getQueryString.call(this, c, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        return c
    }(b("URIAbstractBase"));
    e.exports = a
}), null);
__d("UriNeedRawQuerySVChecker", ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = ["http", "https"];

    function a(a) {
        if (a == null) return !1;
        a = a instanceof(g || (g = b("URIBase"))) ? a : (g || (g = b("URIBase"))).tryParse(a, h || (h = b("PHPQuerySerializer")));
        if (a == null) return !1;
        var c = a.getProtocol();
        return !i.includes(c) ? !1 : j(a.getDomain())
    }

    function j(a) {
        return a != null && b("UriNeedRawQuerySVConfig").uris.some(function(c) {
            return (g || (g = b("URIBase"))).isDomainSubdomainOfDomain(a, c, h || (h = b("PHPQuerySerializer")))
        })
    }
    e.exports = {
        isUriNeedRawQuery: a,
        isDomainNeedRawQuery: j
    }
}), null);
__d("areSameOrigin", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        if (a.isEmpty() || b.isEmpty()) return !1;
        if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
        if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
        return a.getPort() && a.getPort().toString() !== b.getPort().toString() ? !1 : !0
    }
    f["default"] = a
}), 66);
__d("ifRequired", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        var e;
        d && d.call(null, [a], function(a) {
            e = a
        });
        if (e && b) return b(e);
        else if (!e && c) return c()
    }
    f["default"] = a
}), 66);
__d("memoize", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        var b = a,
            c;
        return function() {
            arguments.length && h(0, 4494);
            b && (c = b(), b = null);
            return c
        }
    }
    g["default"] = a
}), 98);
__d("memoizeStringOnly", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = {};
        return function(c) {
            Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
            return b[c]
        }
    }
    f["default"] = a
}), 66);
__d("unexpectedUseInComet", ["FBLogger", "err", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (!c("gkx")("708253")) return;
        a = a + " called unexpectedly. This is not supported in Comet!";
        c("FBLogger")("comet_infra").blameToPreviousFrame().blameToPreviousFrame().mustfix(a)
    }
    g["default"] = a
}), 98);
__d("unqualifyURI", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return a.setProtocol("").setDomain("").setPort("")
    }
    f["default"] = a
}), 66);
__d("URI", ["Env", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "ReloadPage", "URIBase", "UriNeedRawQuerySVChecker", "areSameOrigin", "ifRequired", "isFacebookURI", "memoize", "memoizeStringOnly", "unexpectedUseInComet", "unqualifyURI"], (function(a, b, c, d, e, f, g) {
    var h = c("memoize")(function() {
        return new j(window.location.href)
    });

    function i() {
        return c("ifRequired")("PageTransitions", function(a) {
            if (a.isInitialized()) return a
        })
    }
    var j = function(e) {
        babelHelpers.inheritsLoose(b, e);

        function b(a) {
            var b;
            d("UriNeedRawQuerySVChecker").isUriNeedRawQuery(a) ? b = e.call(this, a, d("PHPQuerySerializerNoEncoding")) || this : b = e.call(this, a || "", d("PHPQuerySerializer")) || this;
            return babelHelpers.assertThisInitialized(b)
        }
        var f = b.prototype;
        f.setPath = function(a) {
            this.path = a;
            return e.prototype.setPath.call(this, a)
        };
        f.getPath = function() {
            var a = e.prototype.getPath.call(this);
            return a ? a.replace(/^\/+/, "/") : a
        };
        f.setProtocol = function(a) {
            this.protocol = a;
            return e.prototype.setProtocol.call(this, a)
        };
        f.setDomain = function(a) {
            this.domain = a;
            return e.prototype.setDomain.call(this, a)
        };
        f.setPort = function(a) {
            this.port = a;
            return e.prototype.setPort.call(this, a)
        };
        f.setFragment = function(a) {
            this.fragment = a;
            return e.prototype.setFragment.call(this, a)
        };
        f.stripTrailingSlash = function() {
            this.setPath(this.getPath().replace(/\/$/, ""));
            return this
        };
        f.addTrailingSlash = function() {
            var a = this.getPath();
            a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
            return this
        };
        f.valueOf = function() {
            return this.toString()
        };
        f.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!c("isFacebookURI")(this)) return null;
            var a = this.getDomain().split("."),
                b = a.indexOf("facebook");
            b === -1 && (b = a.indexOf("workplace"));
            return a.slice(b).join(".")
        };
        f.getUnqualifiedURI = function() {
            return c("unqualifyURI")(new b(this))
        };
        f.getQualifiedURI = function() {
            return new b(this).qualify()
        };
        f.isSameOrigin = function(a) {
            a = a;
            a == null ? a = h() : a instanceof b || (a = new b(a.toString()));
            return c("areSameOrigin")(this, a)
        };
        b.goURIOnNewWindow = function(a) {
            b.goURIOnWindow(a, window.open("", "_blank"), !0)
        };
        b.goURIOnWindow = function(e, f, g, h) {
            g === void 0 && (g = !1);
            h === void 0 && (h = !1);
            e = new b(e);
            g = g;
            var i = !f || f === window;
            if (c("Env").isCQuick && c("isFacebookURI")(e) && i) {
                i = {
                    cquick: c("Env").iframeKey,
                    ctarget: c("Env").iframeTarget,
                    cquick_token: c("Env").iframeToken
                };
                e.addQueryData(i);
                g = !1
            }
            i = e.toString();
            e = f ? f : window;
            !g && a.PageTransitions ? a.PageTransitions.go(i, h) : window.location.href === i ? d("ReloadPage").now() : h ? e.location.replace(i) : e.location.href = i
        };
        f.go = function(a, d) {
            c("unexpectedUseInComet")("uri.go"), b.go(this, a, d)
        };
        b.tryParseURI = function(a) {
            a = c("URIBase").tryParse(a, d("PHPQuerySerializer"));
            return a ? new b(a) : null
        };
        b.isValidURI = function(a) {
            return c("URIBase").isValid(a, d("PHPQuerySerializer"))
        };
        b.getRequestURI = function(a, c) {
            a === void 0 && (a = !0);
            c === void 0 && (c = !1);
            if (a) {
                a = i();
                if (a) return a.getCurrentURI(!!c).getQualifiedURI()
            }
            return new b(window.location.href)
        };
        b.getMostRecentURI = function() {
            var a = i();
            return a ? a.getMostRecentURI().getQualifiedURI() : new b(window.location.href)
        };
        b.getNextURI = function() {
            var a = i();
            return a ? a.getNextURI().getQualifiedURI() : new b(window.location.href)
        };
        b.encodeComponent = function(a) {
            return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
        };
        b.decodeComponent = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        };
        b.normalize = function(a) {
            return a != null && typeof a === "string" ? this.normalizeString(a) : new b(a).toString()
        };
        return b
    }(c("URIBase"));
    j.go = function(a, b, d) {
        c("unexpectedUseInComet")("URI.go"), j.goURIOnWindow(a, window, b, d)
    };
    j.normalizeString = c("memoizeStringOnly")(function(a) {
        return new j(a).toString()
    });
    j.expression = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
    j.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
    g["default"] = j
}), 98);
__d("isCometAltpayJsSdkIframeAllowedDomain", ["CometAltpayJsSdkIframeAllowedDomains", "URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = Object.freeze(c("CometAltpayJsSdkIframeAllowedDomains"));
    var h = Object.freeze(b.allowed_domains);

    function a() {
        var a = new(c("URI"))(window.location.href);
        if (h == null || h.length <= 0) return !1;
        var b = h.some(function(b) {
            b = new(c("URI"))(b);
            return b == null ? !1 : a.isSameOrigin(b)
        });
        return b ? !0 : !1
    }
    g["default"] = a
}), 98);
__d("ReloadPage", ["BlueCompatRouter", "Env"], (function(a, b, c, d, e, f) {
    var g;

    function c(c) {
        !(g || (g = b("Env"))).isCQuick ? a.window.location.reload(c) : b("BlueCompatRouter").sendMessage({
            compatAction: "reload"
        })
    }

    function d(b) {
        a.setTimeout(this.now.bind(this), b)
    }
    f.now = c;
    f.delay = d
}), 66);
__d("isInternalFBURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)internalfb\\.com$", "i");

    function a(a) {
        return g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("XControllerURIBuilder", ["invariant", "URI", "gkx", "isInternalFBURI"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a, b) {
            this.$1 = {}, this.$2 = a, this.$3 = b
        }
        var b = a.prototype;
        b.setInt = function(a, b) {
            return this.__setParam(a, "Int", b)
        };
        b.setFBID = function(a, b) {
            return this.__setParam(a, "FBID", b)
        };
        b.setFloat = function(a, b) {
            return this.__setParam(a, "Float", b)
        };
        b.setString = function(a, b) {
            return this.__setParam(a, "String", b)
        };
        b.setExists = function(a, b) {
            b === !1 && (b = void 0);
            return this.__setParam(a, "Exists", b)
        };
        b.setBool = function(a, b) {
            return this.__setParam(a, "Bool", b)
        };
        b.setBoolVector = function(a, b) {
            return this.__setParam(a, "BoolVector", b)
        };
        b.setEnum = function(a, b) {
            return this.__setParam(a, "Enum", b)
        };
        b.setPath = function(a, b) {
            return this.__setParam(a, "Path", b)
        };
        b.setIntVector = function(a, b) {
            return this.__setParam(a, "IntVector", b)
        };
        b.setIntKeyset = function(a, b) {
            return this.__setParam(a, "IntKeyset", b)
        };
        b.setIntSet = function(a, b) {
            return this.__setParam(a, "IntSet", b.join(","))
        };
        b.setFloatVector = function(a, b) {
            return this.__setParam(a, "FloatVector", b)
        };
        b.setFloatSet = function(a, b) {
            return this.__setParam(a, "FloatSet", b.join(","))
        };
        b.setStringVector = function(a, b) {
            return this.__setParam(a, "StringVector", b)
        };
        b.setStringKeyset = function(a, b) {
            return this.__setParam(a, "StringKeyset", b)
        };
        b.setStringSet = function(a, b) {
            return this.__setParam(a, "StringSet", b)
        };
        b.setFBIDVector = function(a, b) {
            return this.__setParam(a, "FBIDVector", b)
        };
        b.setFBIDSet = function(a, b) {
            return this.__setParam(a, "FBIDSet", b)
        };
        b.setFBIDKeyset = function(a, b) {
            return this.__setParam(a, "FBIDKeyset", b)
        };
        b.setEnumVector = function(a, b) {
            return this.__setParam(a, "EnumVector", b)
        };
        b.setEnumSet = function(a, b) {
            return this.__setParam(a, "EnumSet", b)
        };
        b.setEnumKeyset = function(a, b) {
            return this.__setParam(a, "EnumKeyset", b)
        };
        b.setIntToIntMap = function(a, b) {
            return this.__setParam(a, "IntToIntMap", b)
        };
        b.setIntToFloatMap = function(a, b) {
            return this.__setParam(a, "IntToFloatMap", b)
        };
        b.setIntToStringMap = function(a, b) {
            return this.__setParam(a, "IntToStringMap", b)
        };
        b.setIntToBoolMap = function(a, b) {
            return this.__setParam(a, "IntToBoolMap", b)
        };
        b.setStringToIntMap = function(a, b) {
            return this.__setParam(a, "StringToIntMap", b)
        };
        b.setStringToFloatMap = function(a, b) {
            return this.__setParam(a, "StringToFloatMap", b)
        };
        b.setStringToStringMap = function(a, b) {
            return this.__setParam(a, "StringToStringMap", b)
        };
        b.setStringToNullableStringMap = function(a, b) {
            return this.__setParam(a, "StringToNullableStringMap", b)
        };
        b.setStringToBoolMap = function(a, b) {
            return this.__setParam(a, "StringToBoolMap", b)
        };
        b.setStringToEnumMap = function(a, b) {
            return this.__setParam(a, "StringToEnumMap", b)
        };
        b.setEnumToStringVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToStringVectorMap", b)
        };
        b.setEnumToStringMap = function(a, b) {
            return this.__setParam(a, "EnumToStringMap", b)
        };
        b.setEnumToBoolMap = function(a, b) {
            return this.__setParam(a, "EnumToBoolMap", b)
        };
        b.setEnumToEnumMap = function(a, b) {
            return this.__setParam(a, "EnumToEnumMap", b)
        };
        b.setEnumToIntMap = function(a, b) {
            return this.__setParam(a, "EnumToIntMap", b)
        };
        b.setEnumToFBIDVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToFBIDVectorMap", b)
        };
        b.setStringToIntDict = function(a, b) {
            return this.__setParam(a, "StringToIntDict", b)
        };
        b.setStringToNullableIntDict = function(a, b) {
            return this.__setParam(a, "StringToNullableIntDict", b)
        };
        b.setStringToFloatDict = function(a, b) {
            return this.__setParam(a, "StringToFloatDict", b)
        };
        b.setStringToStringKeysetDict = function(a, b) {
            return this.__setParam(a, "StringToStringKeysetDict", b)
        };
        b.setStringToNullableFloatDict = function(a, b) {
            return this.__setParam(a, "StringToNullableFloatDict", b)
        };
        b.setStringToStringDict = function(a, b) {
            return this.__setParam(a, "StringToStringDict", b)
        };
        b.setStringToNullableStringDict = function(a, b) {
            return this.__setParam(a, "StringToNullableStringDict", b)
        };
        b.setStringToBoolDict = function(a, b) {
            return this.__setParam(a, "StringToBoolDict", b)
        };
        b.setStringToEnumDict = function(a, b) {
            return this.__setParam(a, "StringToEnumDict", b)
        };
        b.setEnumToIntDict = function(a, b) {
            return this.__setParam(a, "EnumToIntDict", b)
        };
        b.setHackType = function(a, b) {
            return this.__setParam(a, "HackType", b)
        };
        b.setTypeAssert = function(a, b) {
            return this.__setParam(a, "TypeAssert", b)
        };
        b.__validateRequiredParamsExistence = function() {
            for (var a in this.$3) !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || h(0, 903, a)
        };
        b.setParams = function(a) {
            for (var b in a) {
                this.__assertParamExists(b);
                var c = this.$3[b].type;
                this.__setParam(b, c, a[b])
            }
            return this
        };
        b.__assertParamExists = function(a) {
            a in this.$3 || h(0, 37339, a)
        };
        b.__setParam = function(a, b, c) {
            this.__assertParamExists(a);
            var d = this.$3[a].type,
                e = {
                    StringOrPFBID: "String",
                    IntOrPFBID: "Int",
                    FBIDOrPFBID: "FBID"
                };
            e = e[d];
            d === b || e === b || h(0, 37340, a, b, d);
            this.__setParamInt(a, c);
            return this
        };
        b.__setParamInt = function(a, b) {
            this.$1[a] = b
        };
        b.getRequest_LEGACY_UNTYPED = function(a) {
            return a.setReplaceTransportMarkers().setURI(this.getURI())
        };
        b.setPreviousActorIsPageVoice = function(a) {
            this.__setParamInt("paipv", a ? 1 : 0);
            return this
        };
        b.getURI = function() {
            this.__validateRequiredParamsExistence();
            var a = {},
                b = "",
                d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
                e = this.$2.split("/"),
                f = !1;
            for (var g = 0; g < e.length; g++) {
                var i = e[g];
                if (i === "") continue;
                var j = d.exec(i);
                if (!j) b += "/" + i;
                else {
                    i = j[2] === "?";
                    var k = j[4],
                        l = this.$3[k];
                    l || h(0, 11837, k, this.$2);
                    if (i && f) continue;
                    if (this.$1[k] == null && i) {
                        f = !0;
                        continue
                    }
                    i = this.$1[k] != null ? this.$1[k] : l.defaultValue;
                    i != null || h(0, 907, k);
                    l = j[1] ? j[1] : "";
                    j = j[5] ? j[5] : "";
                    b += "/" + l + i + j;
                    a[k] = !0
                }
            }
            this.$2.slice(-1) === "/" && (b += "/");
            b === "" && (b = "/");
            l = new(c("URI"))(b);
            for (var m in this.$1) {
                i = this.$1[m];
                if (!a[m] && i != null) {
                    j = this.$3[m];
                    l.addQueryData(m, j && j.type === "Exists" ? null : i)
                }
            }
            return l
        };
        b.getLookasideURI = function() {
            var a = "lookaside.facebook.com";
            c("isInternalFBURI")(c("URI").getRequestURI()) ? a = "lookaside.internalfb.com" : c("gkx")("996940") && (a = "lookaside.internmc.facebook.com");
            return this.getURI().setDomain(a).setProtocol("https")
        };
        a.create = function(b, c) {
            return function() {
                return new a(b, c)
            }
        };
        return a
    }();
    a.prototype.getRequest = function(a) {
        return this.getRequest_LEGACY_UNTYPED(a)
    };
    g["default"] = a
}), 98);
__d("XRequest", ["invariant"], (function(a, b, c, d, e, f, g) {
    var h = function a(b, c, d) {
        var e;
        switch (b) {
            case "Bool":
                e = c && c !== "false" && c !== "0" || !1;
                break;
            case "Int":
                e = c.toString();
                /-?\d+/.test(e) || g(0, 11839, c);
                break;
            case "Float":
                e = parseFloat(c, 10);
                isNaN(e) && g(0, 11840, c);
                break;
            case "FBID":
                e = c.toString();
                for (var f = 0; f < e.length; ++f) {
                    var h = e.charCodeAt(f);
                    48 <= h && h <= 57 || g(0, 11841, c)
                }
                break;
            case "String":
                e = c.toString();
                break;
            case "Enum":
                d === 0 ? e = a("Int", c, null) : d === 1 ? e = a("String", c, null) : d === 2 ? e = c : g(0, 5044, d);
                break;
            default:
                if (h = /^Nullable(\w+)$/.exec(b)) c === null ? e = null : e = a(h[1], c, d);
                else if (f = /^(\w+)Vector$/.exec(b)) {
                    !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c;
                    var i = f[1];
                    typeof i === "string" || g(0, 5045);
                    e = e.map(function(b) {
                        return a(i, b, d && d.member)
                    })
                } else if (h = /^(\w+)(Set|Keyset)$/.exec(b)) !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c, e = e.reduce(function(a, b) {
                    a[b] = b;
                    return a
                }, {}), i = h[1], typeof i === "string" || g(0, 5045), e = Object.keys(e).map(function(b) {
                    return a(i, e[b], d && d.member)
                });
                else if (f = /^(\w+)To(\w+)Map$/.exec(b)) {
                    e = {};
                    var j = f[1],
                        k = f[2];
                    typeof j === "string" && typeof k === "string" || g(0, 5045);
                    Object.keys(c).forEach(function(b) {
                        e[a(j, b, d && d.key)] = a(k, c[b], d && d.value)
                    })
                } else g(0, 11842, b)
        }
        return e
    };
    a = function() {
        function a(a, b, c) {
            this.$1 = b;
            this.$2 = babelHelpers["extends"]({}, c.getQueryData());
            b = a.split("/").filter(function(a) {
                return a
            });
            a = c.getPath().split("/").filter(function(a) {
                return a
            });
            for (var d = 0; d < b.length; ++d) {
                var e = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[d]);
                if (!e) {
                    b[d] === a[d] || g(0, 5047, c.getPath());
                    continue
                }
                var f = !!e[1],
                    h = !!e[2];
                !h || d === b.length - 1 || g(0, 11843, i);
                var i = e[3];
                Object.prototype.hasOwnProperty.call(this.$1, i) || g(0, 11844, i);
                this.$1[i].required ? f && g(0, 5050, i) : f || g(0, 5057, i);
                a[d] && (this.$2[i] = h ? a.slice(d).join("/") : a[d])
            }
            Object.keys(this.$1).forEach(function(a) {
                !this.$1[a].required || Object.prototype.hasOwnProperty.call(this.$2, a) || g(0, 5051)
            }, this)
        }
        var b = a.prototype;
        b.getExists = function(a) {
            return this.$2[a] !== void 0
        };
        b.getBool = function(a) {
            return this.$3(a, "Bool")
        };
        b.getInt = function(a) {
            return this.$3(a, "Int")
        };
        b.getFloat = function(a) {
            return this.$3(a, "Float")
        };
        b.getFBID = function(a) {
            return this.$3(a, "FBID")
        };
        b.getString = function(a) {
            return this.$3(a, "String")
        };
        b.getEnum = function(a) {
            return this.$3(a, "Enum")
        };
        b.getOptionalInt = function(a) {
            return this.$4(a, "Int")
        };
        b.getOptionalFloat = function(a) {
            return this.$4(a, "Float")
        };
        b.getOptionalFBID = function(a) {
            return this.$4(a, "FBID")
        };
        b.getOptionalString = function(a) {
            return this.$4(a, "String")
        };
        b.getOptionalEnum = function(a) {
            return this.$4(a, "Enum")
        };
        b.getIntVector = function(a) {
            return this.$3(a, "IntVector")
        };
        b.getFloatVector = function(a) {
            return this.$3(a, "FloatVector")
        };
        b.getFBIDVector = function(a) {
            return this.$3(a, "FBIDVector")
        };
        b.getStringVector = function(a) {
            return this.$3(a, "StringVector")
        };
        b.getEnumVector = function(a) {
            return this.$3(a, "EnumVector")
        };
        b.getOptionalIntVector = function(a) {
            return this.$4(a, "IntVector")
        };
        b.getOptionalFloatVector = function(a) {
            return this.$4(a, "FloatVector")
        };
        b.getOptionalFBIDVector = function(a) {
            return this.$4(a, "FBIDVector")
        };
        b.getOptionalStringVector = function(a) {
            return this.$4(a, "StringVector")
        };
        b.getOptionalEnumVector = function(a) {
            return this.$4(a, "EnumVector")
        };
        b.getIntSet = function(a) {
            return this.$3(a, "IntSet")
        };
        b.getFBIDSet = function(a) {
            return this.$3(a, "FBIDSet")
        };
        b.getFBIDKeyset = function(a) {
            return this.$3(a, "FBIDKeyset")
        };
        b.getStringSet = function(a) {
            return this.$3(a, "StringSet")
        };
        b.getEnumKeyset = function(a) {
            return this.$3(a, "EnumKeyset")
        };
        b.getOptionalIntSet = function(a) {
            return this.$4(a, "IntSet")
        };
        b.getOptionalFBIDSet = function(a) {
            return this.$4(a, "FBIDSet")
        };
        b.getOptionalFBIDKeyset = function(a) {
            return this.$4(a, "FBIDKeyset")
        };
        b.getOptionalStringSet = function(a) {
            return this.$4(a, "StringSet")
        };
        b.getEnumToBoolMap = function(a) {
            return this.$3(a, "EnumToBoolMap")
        };
        b.getEnumToEnumMap = function(a) {
            return this.$3(a, "EnumToEnumMap")
        };
        b.getEnumToFloatMap = function(a) {
            return this.$3(a, "EnumToFloatMap")
        };
        b.getEnumToIntMap = function(a) {
            return this.$3(a, "EnumToIntMap")
        };
        b.getEnumToStringMap = function(a) {
            return this.$3(a, "EnumToStringMap")
        };
        b.getIntToBoolMap = function(a) {
            return this.$3(a, "IntToBoolMap")
        };
        b.getIntToEnumMap = function(a) {
            return this.$3(a, "IntToEnumMap")
        };
        b.getIntToFloatMap = function(a) {
            return this.$3(a, "IntToFloatMap")
        };
        b.getIntToIntMap = function(a) {
            return this.$3(a, "IntToIntMap")
        };
        b.getIntToStringMap = function(a) {
            return this.$3(a, "IntToStringMap")
        };
        b.getStringToBoolMap = function(a) {
            return this.$3(a, "StringToBoolMap")
        };
        b.getStringToEnumMap = function(a) {
            return this.$3(a, "StringToEnumMap")
        };
        b.getStringToFloatMap = function(a) {
            return this.$3(a, "StringToFloatMap")
        };
        b.getStringToIntMap = function(a) {
            return this.$3(a, "StringToIntMap")
        };
        b.getStringToStringMap = function(a) {
            return this.$3(a, "StringToStringMap")
        };
        b.getOptionalEnumToBoolMap = function(a) {
            return this.$4(a, "EnumToBoolMap")
        };
        b.getOptionalEnumToEnumMap = function(a) {
            return this.$4(a, "EnumToEnumMap")
        };
        b.getOptionalEnumToFloatMap = function(a) {
            return this.$4(a, "EnumToFloatMap")
        };
        b.getOptionalEnumToIntMap = function(a) {
            return this.$4(a, "EnumToIntMap")
        };
        b.getOptionalEnumToStringMap = function(a) {
            return this.$4(a, "EnumToStringMap")
        };
        b.getOptionalIntToBoolMap = function(a) {
            return this.$4(a, "IntToBoolMap")
        };
        b.getOptionalIntToEnumMap = function(a) {
            return this.$4(a, "IntToEnumMap")
        };
        b.getOptionalIntToFloatMap = function(a) {
            return this.$4(a, "IntToFloatMap")
        };
        b.getOptionalIntToIntMap = function(a) {
            return this.$4(a, "IntToIntMap")
        };
        b.getOptionalIntToStringMap = function(a) {
            return this.$4(a, "IntToStringMap")
        };
        b.getOptionalStringToBoolMap = function(a) {
            return this.$4(a, "StringToBoolMap")
        };
        b.getOptionalStringToEnumMap = function(a) {
            return this.$4(a, "StringToEnumMap")
        };
        b.getOptionalStringToFloatMap = function(a) {
            return this.$4(a, "StringToFloatMap")
        };
        b.getOptionalStringToIntMap = function(a) {
            return this.$4(a, "StringToIntMap")
        };
        b.getOptionalStringToStringMap = function(a) {
            return this.$4(a, "StringToStringMap")
        };
        b.getEnumToNullableEnumMap = function(a) {
            return this.$3(a, "EnumToNullableEnumMap")
        };
        b.getEnumToNullableFloatMap = function(a) {
            return this.$3(a, "EnumToNullableFloatMap")
        };
        b.getEnumToNullableIntMap = function(a) {
            return this.$3(a, "EnumToNullableIntMap")
        };
        b.getEnumToNullableStringMap = function(a) {
            return this.$3(a, "EnumToNullableStringMap")
        };
        b.getIntToNullableEnumMap = function(a) {
            return this.$3(a, "IntToNullableEnumMap")
        };
        b.getIntToNullableFloatMap = function(a) {
            return this.$3(a, "IntToNullableFloatMap")
        };
        b.getIntToNullableIntMap = function(a) {
            return this.$3(a, "IntToNullableIntMap")
        };
        b.getIntToNullableStringMap = function(a) {
            return this.$3(a, "IntToNullableStringMap")
        };
        b.getStringToNullableEnumMap = function(a) {
            return this.$3(a, "StringToNullableEnumMap")
        };
        b.getStringToNullableFloatMap = function(a) {
            return this.$3(a, "StringToNullableFloatMap")
        };
        b.getStringToNullableIntMap = function(a) {
            return this.$3(a, "StringToNullableIntMap")
        };
        b.getStringToNullableStringMap = function(a) {
            return this.$3(a, "StringToNullableStringMap")
        };
        b.getOptionalEnumToNullableEnumMap = function(a) {
            return this.$4(a, "EnumToNullableEnumMap")
        };
        b.getOptionalEnumToNullableFloatMap = function(a) {
            return this.$4(a, "EnumToNullableFloatMap")
        };
        b.getOptionalEnumToNullableIntMap = function(a) {
            return this.$4(a, "EnumToNullableIntMap")
        };
        b.getOptionalEnumToNullableStringMap = function(a) {
            return this.$4(a, "EnumToNullableStringMap")
        };
        b.getOptionalIntToNullableEnumMap = function(a) {
            return this.$4(a, "IntToNullableEnumMap")
        };
        b.getOptionalIntToNullableFloatMap = function(a) {
            return this.$4(a, "IntToNullableFloatMap")
        };
        b.getOptionalIntToNullableIntMap = function(a) {
            return this.$4(a, "IntToNullableIntMap")
        };
        b.getOptionalIntToNullableStringMap = function(a) {
            return this.$4(a, "IntToNullableStringMap")
        };
        b.getOptionalStringToNullableEnumMap = function(a) {
            return this.$4(a, "StringToNullableEnumMap")
        };
        b.getOptionalStringToNullableFloatMap = function(a) {
            return this.$4(a, "StringToNullableFloatMap")
        };
        b.getOptionalStringToNullableIntMap = function(a) {
            return this.$4(a, "StringToNullableIntMap")
        };
        b.getOptionalStringToNullableStringMap = function(a) {
            return this.$4(a, "StringToNullableStringMap")
        };
        b.$3 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
                c.required && g(0, 5052);
                return h(b, c.defaultValue, c.enumType)
            }
            c.required || b === "Bool" || c.defaultValue != null || g(0, 11845, b, a, b, a);
            return h(b, this.$2[a], c.enumType)
        };
        b.$4 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            c.required && g(0, 11846, b, a, b, a);
            c.defaultValue && g(0, 5052);
            return Object.prototype.hasOwnProperty.call(this.$2, a) ? h(b, this.$2[a], c.enumType) : null
        };
        b.$5 = function(a, b) {
            Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 37317, a), this.$1[a].type === b || g(0, 11848, a, b, this.$1[a].type)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("XController", ["XControllerURIBuilder", "XRequest"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.getURIBuilder = function(a) {
            var b = new(c("XControllerURIBuilder"))(this.$1, this.$2);
            if (a) {
                var d = this.getRequest(a);
                Object.keys(this.$2).forEach(function(a) {
                    var c = this.$2[a],
                        e = "";
                    !c.required && !Object.prototype.hasOwnProperty.call(c, "defaultValue") && (e = "Optional");
                    e = "get" + e + c.type;
                    e = d[e](a);
                    if (e == null || Object.prototype.hasOwnProperty.call(c, "defaultValue") && e === c.defaultValue) return;
                    c = "set" + c.type;
                    b[c](a, e)
                }, this)
            }
            return b
        };
        b.getRequest = function(a) {
            return new(c("XRequest"))(this.$1, this.$2, a)
        };
        a.create = function(b, c) {
            return new a(b, c)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("XHeartbeatController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/nw/", {})
}), null);
__d("requireCond", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        throw new Error("Cannot use raw untransformed requireCond.")
    }
    b = a;
    f["default"] = b
}), 66);
__d("clearTimeout", ["cr:806696"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:806696")
}), 98);
__d("getSameOriginTransport", ["ExecutionEnvironment", "err"], (function(a, b, c, d, e, f) {
    function c() {
        if (!b("ExecutionEnvironment").canUseDOM) throw b("err")("getSameOriginTransport: %s", "Same origin transport unavailable in the server environment.");
        try {
            return new a.XMLHttpRequest()
        } catch (a) {
            throw b("err")("getSameOriginTransport: %s", a.message)
        }
    }
    e.exports = c
}), null);
__d("killswitch", ["KSConfig"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("KSConfig").killed.has(a)
    }
    e.exports = a
}), null);
__d("setTimeout", ["cr:807042"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:807042")
}), 98);
__d("NetworkHeartbeat", ["XHeartbeatController", "clearTimeout", "getSameOriginTransport", "killswitch", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("XHeartbeatController").getURIBuilder().getURI().toString(),
        i = 6400,
        j = 100,
        k = null,
        l = 0,
        m = null,
        n = c("killswitch")("DISABLE_HEARTBEAT_POLLING");

    function o(a, b) {
        m = c("getSameOriginTransport")(), m.open("GET", h, !0), m.onload = function() {
            m && m.status === 204 && (n = !0), q(a)
        }, m.onerror = function() {
            r(a, b)
        }, m.ontimeout = function() {
            r(a, b)
        }, m.send()
    }

    function p() {
        m = null, j = 100, l = 0, c("clearTimeout")(k)
    }

    function q(a) {
        p(), a()
    }

    function r(a, b) {
        k = c("setTimeout")(function() {
            s(a, b, void 0, !0)
        }, j), l++, j < i && (j = Math.min(j * Math.pow(2, l), i)), b()
    }

    function s(a, b, c, d) {
        c === void 0 && (c = function() {
            return !0
        }), d === void 0 && (d = !1), n || (d || m == null && c()) && o(a, b)
    }

    function a() {
        return m != null
    }
    g.maybeStartHeartbeat = s;
    g.isHeartbeatPending = a
}), 98);
__d("NetworkStatusImpl", ["FBLogger", "NetworkHeartbeat", "performanceNow"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
        i = window.navigator.onLine,
        j = 2,
        k = 5e3,
        l = [],
        m = [],
        n = 0,
        o = !0,
        p = !1,
        q = function() {
            u(o, !0)
        },
        r = function() {
            u(p, !0)
        };

    function s() {
        var a = h.slice();
        a.forEach(function(a) {
            a({
                online: i
            })
        })
    }

    function t(a) {
        a = h.indexOf(a);
        a > -1 && h.splice(a, 1)
    }

    function u(a, b) {
        b === void 0 && (b = !1);
        var e = i === a;
        b = !b && a === o && d("NetworkHeartbeat").isHeartbeatPending();
        if (e || b) return;
        i = a;
        c("FBLogger")("NetworkStatus").warn("Network switched to " + (a ? "online" : "offline"));
        i || d("NetworkHeartbeat").maybeStartHeartbeat(q, r);
        s()
    }

    function v() {
        var a = c("performanceNow")();
        l = l.filter(function(b) {
            return w(b.startTime, a)
        });
        m = m.filter(function(b) {
            return w(b.startTime, a)
        });
        return m.length / l.length < j
    }
    var w = function(a, b) {
        return a > b - k
    };

    function a() {
        return i
    }

    function b(a) {
        h.push(a);
        var b = !1;
        return {
            remove: function() {
                b || (b = !0, t(a))
            }
        }
    }

    function e() {
        var a = c("performanceNow")();
        l.push({
            startTime: a
        });
        d("NetworkHeartbeat").maybeStartHeartbeat(q, r, v)
    }

    function f() {
        var a = c("performanceNow")();
        m.push({
            startTime: a
        });
        w(n, a) || (m = m.filter(function(b) {
            return w(b.startTime, a)
        }), n = a)
    }
    window.addEventListener("online", function() {
        u(o)
    });
    window.addEventListener("offline", function() {
        u(p)
    });
    g.isOnline = a;
    g.onChange = b;
    g.reportError = e;
    g.reportSuccess = f
}), 98);
__d("NetworkStatusSham", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return !0
    }

    function b(a) {
        return {
            remove: function() {}
        }
    }

    function c() {
        return
    }

    function d() {
        return
    }
    f.isOnline = a;
    f.onChange = b;
    f.reportError = c;
    f.reportSuccess = d
}), 66);
__d("NetworkStatus", ["NetworkStatusImpl", "NetworkStatusSham", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("gkx")("708253") && c("gkx")("1263340") ? d("NetworkStatusImpl") : d("NetworkStatusSham");
    b = a;
    g["default"] = b
}), 98);
__d("CircularBuffer", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            if (a <= 0) throw c("unrecoverableViolation")("Buffer size should be a positive integer", "comet_infra");
            this.$1 = a;
            this.$2 = 0;
            this.$3 = [];
            this.$4 = []
        }
        var b = a.prototype;
        b.write = function(a) {
            var b = this;
            this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function(a) {
                return a(b.$3[b.$2])
            }), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
            return this
        };
        b.onEvict = function(a) {
            this.$4.push(a);
            return this
        };
        b.read = function() {
            return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2))
        };
        b.expand = function(a) {
            if (a > this.$1) {
                var b = this.read();
                this.$2 = 0;
                this.$3 = b;
                this.$1 = a
            }
            return this
        };
        b.dropFirst = function(a) {
            if (a <= this.$1) {
                var b = this.read();
                this.$2 = 0;
                b.splice(0, a);
                this.$3 = b
            }
            return this
        };
        b.clear = function() {
            this.$2 = 0;
            this.$3 = [];
            return this
        };
        b.currentSize = function() {
            return this.$3.length
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ResourceTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        JS: "js",
        CSS: "css",
        XHR: "xhr"
    };
    b = a;
    f["default"] = b
}), 66);
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
__d("ResourceTimingsStore", ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = 1e3,
        j = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        k = {},
        l = {};
    Object.keys(b("ResourceTypes")).forEach(function(a) {
        a = b("ResourceTypes")[a];
        var c = new(b("CircularBuffer"))(i),
            d = new Map();
        c.onEvict(function(a) {
            d["delete"](a)
        });
        k[a] = {
            idx: 1,
            entries: c
        };
        l[a] = d
    });

    function m(a, c, d) {
        var e;
        switch (a) {
            case "css":
            case "js":
                var f = n.parseMakeHasteURL(c);
                f = f == null ? "unknown_resource" : f[0];
                e = d + "_" + f;
                break;
            case "xhr":
                f = new(g || (g = b("URI")))(c).getQualifiedURI();
                c = f.getDomain() + f.getPath();
                e = d + "_" + c;
                break;
            default:
                a, e = "never here"
        }
        return e
    }
    var n = {
        getUID: function(a, b) {
            var c = k[a],
                d = m(a, b, c.idx);
            c.entries.write(d);
            l[a].set(d, {
                uri: b,
                uid: d
            });
            c.idx++;
            return d
        },
        updateURI: function(a, b, c) {
            a = l[a].get(b);
            a != null && (a.uri = c)
        },
        getMapFor: function(a) {
            return l[a]
        },
        parseMakeHasteURL: function(a) {
            a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!a) return null;
            a = a[1];
            var b = "",
                c = a.match(/\.(\w+)$/);
            c && (b = c[1]);
            return [a, b]
        },
        measureRequestSent: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (a == null || a.requestSent != null) return;
            else a.requestSent = (h || (h = b("performanceAbsoluteNow")))()
        },
        measureResponseReceived: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (a == null || a.requestSent == null || a.responseReceived != null) return;
            else a.responseReceived = (h || (h = b("performanceAbsoluteNow")))()
        },
        annotate: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (!a) return j;
            else {
                c = a.annotations;
                if (c != null) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    a.annotations = c;
                    return c
                }
            }
        },
        getAnnotationsFor: function(a, b) {
            a = l[a];
            a = a.get(b);
            if (!a) return null;
            else {
                b = a.annotations;
                return b != null ? b.prepareToSend() : null
            }
        }
    };
    e.exports = n
}), null);
__d("TimeSlice", ["cr:717822"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:717822")
}), 98);
__d("clearInterval", ["cr:1003267"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1003267")
}), 98);
__d("isEmpty", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a) {
        if (Array.isArray(a)) return a.length === 0;
        else if (typeof a === "object") {
            if (a) {
                !i(a) || a.size === void 0 || h(0, 1445);
                for (var b in a) return !1
            }
            return !0
        } else return !a
    }

    function i(a) {
        return typeof Symbol === "undefined" ? !1 : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] != null
    }
    g["default"] = a
}), 98);
__d("nullthrows", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        b === void 0 && (b = "Got unexpected null or undefined");
        if (a != null) return a;
        a = new Error(b);
        a.framesToPop = 1;
        throw a
    }
    f["default"] = a
}), 66);
__d("setIntervalAcrossTransitions", ["cr:896462"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:896462")
}), 98);
__d("CSSLoader", ["CSSLoaderConfig", "NetworkStatus", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "nullthrows", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h = 20,
        i = b("CSSLoaderConfig").timeout,
        j = b("CSSLoaderConfig").loadEventSupported,
        k, l = [],
        m, n = new Map();

    function o(a) {
        if (k) return;
        k = !0;
        var b = document.createElement("link");
        b.onload = function() {
            j = !0, b.parentNode && b.parentNode.removeChild(b)
        };
        b.rel = "stylesheet";
        b.href = "data:text/css;base64,";
        a.appendChild(b)
    }

    function p() {
        var a = [],
            c = [];
        if (Date.now() >= m) {
            for (var d = n.values(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                c.push(h.signal);
                a.push(h.error)
            }
            n.clear()
        } else
            for (var h = n, f = Array.isArray(h), e = 0, h = f ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (f) {
                    if (e >= h.length) break;
                    d = h[e++]
                } else {
                    e = h.next();
                    if (e.done) break;
                    d = e.value
                }
                d = d;
                var j = d[0];
                d = d[1];
                var k = d.signal,
                    l = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
                l && parseInt(l.height, 10) > 1 && (a.push(d.load), c.push(k), n["delete"](j))
            }
        for (var l = 0; l < c.length; l++) {
            d = b("nullthrows")(c[l].parentNode);
            d.removeChild(c[l])
        }
        if (!(g || (g = b("isEmpty")))(a)) {
            for (l = 0; l < a.length; l++) a[l]();
            m = Date.now() + i
        }
        return n.size === 0
    }

    function q(a, c, d, e) {
        var f = document.createElement("meta");
        f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
        c.appendChild(f);
        c = n.size !== 0;
        m = Date.now() + i;
        n.set(a, {
            signal: f,
            load: d,
            error: e
        });
        if (!c) var g = b("setIntervalAcrossTransitions")(function() {
            p() && b("clearInterval")(g)
        }, h)
    }

    function r(a, c, d, e, f, g) {
        var h = b("ResourceTimingsStore").getUID("css", c);
        b("ResourceTimingsStore").annotate("css", h).addStringAnnotation("name", a).addStringAnnotation("source", c).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        b("ifRequired")("TimeSliceInteraction", function(b) {
            b.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", c).addStringAnnotation("name", a)
        });
        b("ResourceTimingsStore").measureRequestSent("css", h);
        var i = function() {
                b("ResourceTimingsStore").measureResponseReceived("css", h), e()
            },
            k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        !g ? q(a, d, i, f) : j !== !0 ? (q(a, d, i, f), j === void 0 && o(d)) : (g.onload = k.bind(void 0, function() {
            g.onload = g.onerror = null, i()
        }), g.onerror = k.bind(void 0, function() {
            g.onload = g.onerror = null, f()
        }))
    }
    a = {
        loadStyleSheet: function(a, c, d, e, f, g) {
            var h = document;
            if ("createStyleSheet" in h) {
                var i;
                for (var j = 0; j < l.length; j++)
                    if (l[j].imports.length < 31) {
                        i = j;
                        break
                    }
                if (i === void 0) {
                    try {
                        l.push(h.createStyleSheet())
                    } catch (a) {
                        b("NetworkStatus").reportError();
                        g();
                        return
                    }
                    i = l.length - 1
                }
                b("NetworkStatus").reportSuccess();
                l[i].addImport(c);
                r(a, c, d, f, g, null);
                return
            }
            j = h.createElement("link");
            j.rel = "stylesheet";
            j.type = "text/css";
            j.href = c;
            e && (j.crossOrigin = "anonymous");
            r(a, c, d, f, g, j);
            d.appendChild(j)
        },
        setupEventListeners: function(a, b, c, d, e, f) {
            r(a, b, c, d, e, f)
        }
    };
    e.exports = a
}), null);
__d("ClientConsistencyEventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = new(c("BaseEventEmitter"))();
    b = a;
    g["default"] = b
}), 98);
__d("requireWeak", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        d && d.call(null, [a], b)
    }
    f["default"] = a
}), 66);
__d("ClientConsistency", ["ClientConsistencyEventEmitter", "SiteData", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("SiteData").client_revision,
        h = !1,
        i = null,
        j = {},
        k = new Set(),
        l = new Set(),
        m = function(a) {
            j = {};
            var c = Object.keys(a).sort().reverse(),
                d = function() {
                    if (f) {
                        if (g >= e.length) return "break";
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) return "break";
                        h = g.value
                    }
                    var c = h,
                        d = Number(c);
                    c = (c = a[d]) != null ? c : [];
                    if (c.length === 0) {
                        n(d);
                        return "break"
                    }
                    c.forEach(function(a) {
                        var c;
                        j[a] = Math.max((c = j[a]) != null ? c : 0, d);
                        if (l.has(a)) return;
                        l.add(a);
                        b("requireWeak").call(null, a, function() {
                            if (!j[a]) return;
                            n(j[a])
                        })
                    })
                };
            for (var e = c, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                c = d();
                if (c === "break") break
            }
        },
        n = function(a) {
            a === 2 && b("ClientConsistencyEventEmitter").emit("softRefresh"), a === 3 && b("ClientConsistencyEventEmitter").emit("hardRefresh")
        },
        o = function(a) {
            var b = a.actions;
            a = a.rev;
            if (a === g) return;
            i = b;
            b != null && m(b)
        };
    a = {
        init: function() {
            if (h) return;
            b("ClientConsistencyEventEmitter").addListener("newEntry", function(a) {
                o(a)
            });
            h = !0
        },
        addAdditionalRevision: function(a) {
            if (a === g) return;
            else if (!k.has(a)) {
                k.add(a);
                var b = document.createElement("meta");
                b.setAttribute("name", "binary-transparency-manifest-key");
                b.setAttribute("content", a.toString());
                (a = document.head) == null ? void 0 : a.appendChild(b)
            }
        },
        getAdditionalRevisions: function() {
            return k
        },
        hasPendingClientActions: function() {
            return i != null && Object.keys(i).length > 0
        }
    };
    e.exports = a
}), null);
__d("ErrorPubSub", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorPubSub
}), 98);
__d("JSResourceEvents", ["performanceAbsoluteNow"], (function(a, b, c, d, e, f, g) {
    var h = 50,
        i = new Map();

    function a(a, b, d) {
        a = a;
        b = (b = b) != null ? b : "";
        var e = i.get(a);
        e || i.set(a, e = new Map());
        a = e.get(b);
        a || e.set(b, a = new Map());
        e = a.get(d);
        e || a.set(d, e = [0, []]);
        e[1][e[0]++ % h] = c("performanceAbsoluteNow")()
    }

    function j(a, b, c) {
        var d = i.get(a);
        if (!d) return [];
        var e = [];
        for (var d = d, g = Array.isArray(d), h = 0, d = g ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var j;
            if (g) {
                if (h >= d.length) break;
                j = d[h++]
            } else {
                h = d.next();
                if (h.done) break;
                j = h.value
            }
            j = j;
            var k = j[0];
            j = j[1];
            for (var j = j, l = Array.isArray(j), m = 0, j = l ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var n;
                if (l) {
                    if (m >= j.length) break;
                    n = j[m++]
                } else {
                    m = j.next();
                    if (m.done) break;
                    n = m.value
                }
                n = n;
                var o = n[0];
                n = n[1];
                for (var n = n[1], p = Array.isArray(n), q = 0, n = p ? n : n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var r;
                    if (p) {
                        if (q >= n.length) break;
                        r = n[q++]
                    } else {
                        q = n.next();
                        if (q.done) break;
                        r = q.value
                    }
                    r = r;
                    r >= b && r <= c && e.push({
                        module: a,
                        ref: k || null,
                        type: o,
                        time: r
                    })
                }
            }
        }
        return e.sort(function(a, b) {
            return a.time - b.time
        })
    }

    function b(a, b) {
        var c = new Map();
        for (var d = i.keys(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
            var h = j(g, a, b);
            h.length && c.set(g, h)
        }
        return c
    }
    g.notify = a;
    g.getEvents = j;
    g.getAllModuleEvents = b
}), 98);
/**
 * License: https://www.facebook.com/legal/license/ZtTipMAcpq9/
 */
__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function(a, b, c, d, e, f) {
    (function(c, d) {
        "use strict";
        var e = 1,
            g = {},
            h = {},
            i = h,
            j = !1,
            k = c.document,
            l, m, n, o = "setImmediate$" + Math.random() + "$";

        function p() {
            var a = c.event;
            return !a ? !1 : a.isTrusted && ["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"].includes(a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0
        }

        function q(a) {
            var b = a[0];
            a = Array.prototype.slice.call(a, 1);
            g[e] = function() {
                b.apply(void 0, a)
            };
            i = i.next = {
                handle: e++
            };
            return i.handle
        }

        function r() {
            var a, b;
            while (!j && (a = h.next)) {
                h = a;
                if (b = g[a.handle]) {
                    j = !0;
                    try {
                        b(), j = !1
                    } finally {
                        s(a.handle), j && (j = !1, h.next && l(r))
                    }
                }
            }
        }

        function s(a) {
            delete g[a]
        }

        function d() {
            if (c.postMessage && !c.importScripts) {
                var a = !0,
                    b = function b() {
                        a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b)
                    };
                if (c.addEventListener) c.addEventListener("message", b, !1);
                else if (c.attachEvent) c.attachEvent("onmessage", b);
                else return !1;
                c.postMessage("", "*");
                return a
            }
        }

        function t() {
            var a = function(a) {
                a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r()
            };
            c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
            l = function() {
                var a = q(arguments);
                c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
                return a
            };
            m = l
        }

        function u() {
            var a = new MessageChannel(),
                b = !1;
            a.port1.onmessage = function(a) {
                b = !1, r()
            };
            l = function() {
                var c = q(arguments);
                b || (a.port2.postMessage(c), b = !0);
                return c
            };
            n = l
        }

        function v() {
            var a = k.documentElement;
            l = function() {
                var b = q(arguments),
                    c = k.createElement("script");
                c.onreadystatechange = function() {
                    c.onreadystatechange = null, a.removeChild(c), c = null, r()
                };
                a.appendChild(c);
                return b
            }
        }

        function w() {
            l = function() {
                setTimeout(r, 0);
                return q(arguments)
            }
        }
        d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function() {
            if (p()) return m.apply(null, arguments);
            else return n.apply(null, arguments)
        }) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
        f.setImmediate = l;
        f.clearImmediate = s
    })(typeof self === "undefined" ? typeof a === "undefined" ? this : a : self)
}), null);
__d("setImmediatePolyfill", ["invariant", "ImmediateImplementation", "PromiseUsePolyfillSetImmediateGK"], (function(a, b, c, d, e, f, g) {
    var h = a.setImmediate;
    if (b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
        d = b("ImmediateImplementation");
        h = d.setImmediate
    }

    function c(a) {
        typeof a === "function" || g(0, 5912);
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return h.apply(void 0, [a].concat(c))
    }
    e.exports = c
}), null);
__d("setImmediateAcrossTransitions", ["TimeSlice", "setImmediatePolyfill"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = c("TimeSlice").guard(a, "setImmediate", {
            propagationType: c("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        return c("setImmediatePolyfill").apply(void 0, [b].concat(e))
    }
    g["default"] = a
}), 98);
__d("setTimeoutAcrossTransitions", ["cr:986633"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:986633")
}), 98);
__d("Promise", ["TimeSlice", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {}
    var h = null,
        i = {};

    function j(a) {
        try {
            return a.then
        } catch (a) {
            h = a;
            return i
        }
    }

    function k(a, b) {
        try {
            return a(b)
        } catch (a) {
            h = a;
            return i
        }
    }

    function l(a, b, c) {
        try {
            a(b, c)
        } catch (a) {
            h = a;
            return i
        }
    }

    function m(a) {
        if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
        if (typeof a !== "function") throw new TypeError("not a function");
        this._state = 0;
        this._value = null;
        this._deferreds = [];
        if (a === g) return;
        t(a, this)
    }
    m._noop = g;
    m.prototype.then = function(a, b) {
        if (this.constructor !== m) return n(this, a, b);
        var c = new m(g);
        o(this, new s(a, b, c));
        return c
    };

    function n(a, b, c) {
        return new a.constructor(function(d, e) {
            var f = new m(g);
            f.then(d, e);
            o(a, new s(b, c, f))
        })
    }

    function o(a, c) {
        while (a._state === 3) a = a._value;
        if (a._state === 0) {
            a._deferreds.push(c);
            return
        }
        b("setImmediateAcrossTransitions")(function() {
            var b = a._state === 1 ? c.onFulfilled : c.onRejected;
            if (b === null) {
                c.continuation(function() {});
                a._state === 1 ? p(c.promise, a._value) : q(c.promise, a._value);
                return
            }
            b = k(c.continuation.bind(null, b), a._value);
            b === i ? q(c.promise, h) : p(c.promise, b)
        })
    }

    function p(a, b) {
        if (b === a) return q(a, new TypeError("A promise cannot be resolved with itself."));
        if (b && (typeof b === "object" || typeof b === "function")) {
            var c = j(b);
            if (c === i) return q(a, h);
            if (c === a.then && b instanceof m) {
                a._state = 3;
                a._value = b;
                r(a);
                return
            } else if (typeof c === "function") {
                t(c.bind(b), a);
                return
            }
        }
        a._state = 1;
        a._value = b;
        r(a)
    }

    function q(a, b) {
        a._state = 2, a._value = b, r(a)
    }

    function r(a) {
        for (var b = 0; b < a._deferreds.length; b++) o(a, a._deferreds[b]);
        a._deferreds = null
    }

    function s(a, c, d) {
        this.onFulfilled = typeof a === "function" ? a : null, this.onRejected = typeof c === "function" ? c : null, this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler"), this.promise = d
    }

    function t(a, b) {
        var c = !1;
        a = l(a, function(a) {
            if (c) return;
            c = !0;
            p(b, a)
        }, function(a) {
            if (c) return;
            c = !0;
            q(b, a)
        });
        !c && a === i && (c = !0, q(b, h))
    }
    m.prototype.done = function(a, c) {
        var d = new Error("Promise.done"),
            e = arguments.length ? this.then.apply(this, arguments) : this;
        e.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    d.message = "" + a;
                    throw d
                }
            }, 0)
        })
    };
    var u = A(!0),
        v = A(!1),
        w = A(null),
        x = A(void 0),
        y = A(0),
        z = A("");

    function A(a) {
        var b = new m(m._noop);
        b._state = 1;
        b._value = a;
        return b
    }
    m.resolve = function(a) {
        if (a instanceof m) return a;
        if (a === null) return w;
        if (a === void 0) return x;
        if (a === !0) return u;
        if (a === !1) return v;
        if (a === 0) return y;
        if (a === "") return z;
        if (typeof a === "object" || typeof a === "function") try {
            var b = a.then;
            if (typeof b === "function") return new m(b.bind(a))
        } catch (a) {
            return new m(function(b, c) {
                c(a)
            })
        }
        return A(a)
    };
    m.all = function(a) {
        Array.isArray(a) || (a = [m.reject(new TypeError("Promise.all must be passed an array."))]);
        var b = Array.prototype.slice.call(a);
        return new m(function(a, c) {
            if (b.length === 0) return a([]);
            var d = b.length;

            function e(f, g) {
                if (g && (typeof g === "object" || typeof g === "function"))
                    if (g instanceof m && g.then === m.prototype.then) {
                        while (g._state === 3) g = g._value;
                        if (g._state === 1) return e(f, g._value);
                        g._state === 2 && c(g._value);
                        g.then(function(a) {
                            e(f, a)
                        }, c);
                        return
                    } else {
                        var h = g.then;
                        if (typeof h === "function") {
                            h = new m(h.bind(g));
                            h.then(function(a) {
                                e(f, a)
                            }, c);
                            return
                        }
                    }
                b[f] = g;
                --d === 0 && a(b)
            }
            for (var f = 0; f < b.length; f++) e(f, b[f])
        })
    };
    m.allSettled = function(a) {
        if (!Array.isArray(a)) return m.reject(new TypeError("Promise.allSettled must be passed an array."));
        var b = Array(a.length),
            c = function(c, d) {
                var e = a[c];
                d = typeof e === "object" && e !== null && typeof e.then === "function";
                b[c] = d ? new m(function(a, b) {
                    e.then(function(b) {
                        a({
                            status: "fulfilled",
                            value: b
                        })
                    }, function(b) {
                        a({
                            status: "rejected",
                            reason: b
                        })
                    })
                }) : m.resolve({
                    status: "fulfilled",
                    value: e
                })
            };
        for (var d = 0, e = a.length; d < e; ++d) c(d, e);
        return m.all(b)
    };
    m.reject = function(a) {
        return new m(function(b, c) {
            c(a)
        })
    };
    m.race = function(a) {
        return new m(function(b, c) {
            a.forEach(function(a) {
                m.resolve(a).then(b, c)
            })
        })
    };
    m.prototype["catch"] = function(a) {
        return this.then(null, a)
    };
    m.prototype["finally"] = function(a) {
        return this.then(function(b) {
            return m.resolve(a()).then(function() {
                return b
            })
        }, function(b) {
            return m.resolve(a()).then(function() {
                throw b
            })
        })
    };
    e.exports = m
}), null);
__d("PromiseAnnotate", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a.displayName = b;
        return a
    }

    function b(a) {
        a = a.displayName;
        if (typeof a === "string") return a;
        else return null
    }
    f.setDisplayName = a;
    f.getDisplayName = b
}), 66);
__d("ifRequireable", ["ifRequired"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        return c("ifRequired").call(null, a, b, d)
    }
    g["default"] = a
}), 98);
__d("JSResourceReference", ["JSResourceEvents", "Promise", "PromiseAnnotate", "ifRequireable", "ifRequired"], (function(a, b, c, d, e, f, g) {
    var h = function(a) {
            return a
        },
        i = [],
        j = null;

    function k(a) {
        j ? a(j) : i.push(a)
    }
    var l = "JSResource: unknown caller";
    a = function() {
        a.setBootloader = function(a) {
            j = a;
            for (var a = 0; a < i.length; a++) {
                var b = i[a];
                b(j)
            }
            i = []
        };

        function a(a) {
            this.$1 = a
        }
        var e = a.prototype;
        e.getModuleId = function() {
            var a = this.$1;
            return a
        };
        e.getModuleIdAsRef = function() {
            return this.$1
        };
        e.load = function() {
            var a = this;
            d("JSResourceEvents").notify(this.$1, this.$2, "LOADED");
            var c = new(b("Promise"))(function(b) {
                k(function(c) {
                    return c.loadModules([a.getModuleIdAsRef()], b, (c = a.$2) != null ? c : l)
                })
            });
            d("PromiseAnnotate").setDisplayName(c, "Bootload(" + this.getModuleId() + ")");
            return c
        };
        e.preload = function() {
            var a, b = this,
                c = (a = this.$2) != null ? a : l;
            k(function(a) {
                return a.loadModules([b.getModuleIdAsRef()], function() {}, "preload: " + c)
            })
        };
        e.equals = function(a) {
            return this === a || this.$1 == a.$1
        };
        e.getModuleIfRequireable = function() {
            d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return c("ifRequireable").call(null, this.$1, h)
        };
        e.getModuleIfRequired = function() {
            d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return c("ifRequired").call(null, this.$1, h)
        };
        e.__setRef = function(a) {
            this.$2 = a;
            d("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
            return this
        };
        a.loadAll = function(a, b) {
            var c = {},
                e = !1;
            for (var f = a, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                var j = i.$2;
                j && (e = !0, c[j] = !0);
                d("JSResourceEvents").notify(i.$1, j, "LOADED")
            }
            k(function(d) {
                return d.loadModules(a.map(function(a) {
                    return a.getModuleId()
                }), b, e ? Object.keys(c).join(":") : "JSResource: unknown caller")
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("$InternalEnum", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
        h = typeof WeakMap === "function" ? new WeakMap() : new Map();

    function i(a) {
        var b = h.get(a);
        if (b !== void 0) return b;
        var c = new Map();
        Object.getOwnPropertyNames(a).forEach(function(b) {
            c.set(a[b], b)
        });
        try {
            h.set(a, c)
        } catch (a) {}
        return c
    }
    var j = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(a) {
                return i(this).has(a)
            }
        },
        cast: {
            value: function(a) {
                return this.isValid(a) ? a : void 0
            }
        },
        members: {
            value: function() {
                return i(this).keys()
            }
        },
        getName: {
            value: function(a) {
                return i(this).get(a)
            }
        }
    }));

    function a(a) {
        var b = Object.create(j);
        for (var c in a) g.call(a, c) && Object.defineProperty(b, c, {
            value: a[c]
        });
        return Object.freeze(b)
    }
    var k = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(a) {
                return typeof a === "string" ? g.call(this, a) : !1
            }
        },
        cast: {
            value: j.cast
        },
        members: {
            value: function() {
                return Object.getOwnPropertyNames(this).values()
            }
        },
        getName: {
            value: function(a) {
                return a
            }
        }
    }));
    a.Mirrored = function(a) {
        var b = Object.create(k);
        for (var c = 0, d = a.length; c < d; ++c) Object.defineProperty(b, a[c], {
            value: a[c]
        });
        return Object.freeze(b)
    };
    Object.freeze(a.Mirrored);
    e.exports = Object.freeze(a)
}), null);
__d("RequireDeferredFactoryEvent", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    a = b("$InternalEnum")({
        SUPPORT_DATA: "sd",
        CSS: "css"
    });
    c = a;
    f["default"] = c
}), 66);
__d("getErrorSafe", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").getErrorSafe
}), 98);
__d("promiseDone", ["Env", "ErrorPubSub", "getErrorSafe"], (function(a, b, c, d, e, f) {
    var g, h;

    function a(a, c, d) {
        var e, f = (e = (g || (g = b("Env"))).deferred_stack_trace_rate) != null ? e : 0,
            i = null;
        f >= 1 && Math.random() < 1 / f && (i = new Error(""));
        var j = function() {
                i = null
            },
            k = arguments.length > 1 ? a.then(c, d) : a;
        k.then(j, function(a) {
            a = b("getErrorSafe")(a);
            a.deferredSource = i;
            a.loggingSource = "PROMISE_DONE";
            (h || (h = b("ErrorPubSub"))).reportError(a);
            j()
        })
    }
    e.exports = a
}), null);
__d("RequireDeferredReference", ["invariant", "CallbackDependencyManager", "Promise", "RequireDeferredFactoryEvent", "ifRequireable", "ifRequired", "performanceNow", "promiseDone", "requireWeak"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = 1;
    d = 2;
    e = 16;
    var i = a | d | e,
        j = null;

    function k() {
        j == null && (j = new(c("CallbackDependencyManager"))());
        return j
    }

    function l(a, b) {
        return a + ":" + b
    }
    var m = new Set();
    f = function() {
        function a(a) {
            this.$1 = a
        }
        var d = a.prototype;
        d.getModuleId = function() {
            var a = this.$1;
            return a
        };
        d.getModuleIdAsRef = function() {
            return this.$1
        };
        d.preload = function() {};
        d.getModuleIfRequired = function() {
            return c("ifRequired").call(null, this.$1, function(a) {
                return a
            })
        };
        d.getModuleIfRequireable = function() {
            return c("ifRequireable").call(null, this.$1, function(a) {
                return a
            })
        };
        d.$2 = function(a) {
            var b = this,
                d = c("ifRequireable")("InteractionTracingMetrics", function(a) {
                    return a.currentInteractionLogger().addRequireDeferred(b.getModuleId(), c("performanceNow")())
                }),
                e = !1,
                f = function(b, f) {
                    d == null ? void 0 : d(c("performanceNow")(), f), e || a(b)
                };
            c("ifRequireable").call(null, this.$1, function(a) {
                return f(a, !0)
            }, function() {
                c("requireWeak").call(null, b.$1, function(a) {
                    return f(a, !1)
                })
            });
            return {
                remove: function() {
                    e = !0
                }
            }
        };
        d.load = function() {
            var a = this;
            return new(b("Promise"))(function(b) {
                return a.$2(b)
            })
        };
        d.__setRef = function(a) {
            return this
        };
        d.onReadyImmediately = function(a) {
            return this.$2(a)
        };
        d.onReady = function(a) {
            var d = function() {
                    return h(!1, "Unreachable because Promise constructor is synchronous")
                },
                e = new(b("Promise"))(function(a) {
                    return d = a
                }),
                f = this.$2(d);
            c("promiseDone")(e, a);
            return f
        };
        d.loadImmediately = function(a) {
            return this.$2(a)
        };
        a.getRDModuleName_DO_NOT_USE = function(a) {
            return "rd:" + a
        };
        a.unblock = function(d, e) {
            var f = k(),
                g = function() {
                    var g = d[h];
                    m.has(g) || (m.add(g), f.registerCallback(function() {
                        define(a.getRDModuleName_DO_NOT_USE(g), [g], function() {
                            b.call(null, g)
                        }, i)
                    }, Array.from(c("RequireDeferredFactoryEvent").members(), function(a) {
                        return l(g, a)
                    })));
                    f.satisfyPersistentDependency(l(g, e))
                };
            for (var h = 0; h < d.length; h++) g()
        };
        return a
    }();
    g["default"] = f
}), 98);
__d("ResourceHasher", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 0;

    function a(a) {
        return "async:" + a
    }

    function b() {
        return "ejs:" + i++
    }

    function c(a) {
        typeof a === "string" || h(0, 19551, a);
        return a
    }
    g.getAsyncHash = a;
    g.createExternalJSHash = b;
    g.getValidResourceHash = c
}), 98);
/**
 * License: https://www.facebook.com/legal/license/YzYYrH_bE_k/
 */
__d("DOMPurify", [], (function(a, b, c, d, e, f) {
    (function(b, c) {
        typeof f === "object" && typeof e !== "undefined" ? e.exports = c() : typeof define === "function" && define.amd ? define(c) : (b = b || self, b.DOMPurify = c())
    })(this, function() {
        "use strict";

        function a(a) {
            if (Array.isArray(a)) {
                for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
                return c
            } else return Array.from(a)
        }
        var b = Object.hasOwnProperty,
            c = Object.setPrototypeOf,
            d = Object.isFrozen,
            e = Object.getPrototypeOf,
            f = Object.getOwnPropertyDescriptor,
            g = Object.freeze,
            h = Object.seal,
            i = Object.create,
            j = typeof Reflect !== "undefined" && Reflect,
            k = j.apply,
            l = j.construct;
        k || (k = function(a, b, c) {
            return a.apply(b, c)
        });
        g || (g = function(a) {
            return a
        });
        h || (h = function(a) {
            return a
        });
        l || (l = function(b, c) {
            return new(Function.prototype.bind.apply(b, [null].concat(a(c))))()
        });
        var aa = q(Array.prototype.forEach),
            ba = q(Array.prototype.pop),
            m = q(Array.prototype.push),
            n = q(String.prototype.toLowerCase),
            ca = q(String.prototype.match),
            o = q(String.prototype.replace),
            da = q(String.prototype.indexOf),
            ea = q(String.prototype.trim),
            p = q(RegExp.prototype.test),
            fa = r(TypeError);

        function q(a) {
            return function(b) {
                for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
                return k(a, b, d)
            }
        }

        function r(a) {
            return function() {
                for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                return l(a, c)
            }
        }

        function s(a, b) {
            c && c(a, null);
            var e = b.length;
            while (e--) {
                var f = b[e];
                if (typeof f === "string") {
                    var g = n(f);
                    g !== f && (d(b) || (b[e] = g), f = g)
                }
                a[f] = !0
            }
            return a
        }

        function t(a) {
            var c = i(null),
                d = void 0;
            for (d in a) k(b, a, [d]) && (c[d] = a[d]);
            return c
        }

        function u(a, b) {
            while (a !== null) {
                var c = f(a, b);
                if (c) {
                    if (c.get) return q(c.get);
                    if (typeof c.value === "function") return q(c.value)
                }
                a = e(a)
            }

            function d(a) {
                return null
            }
            return d
        }
        var ga = g(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            v = g(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
            w = g(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            ha = g(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
            x = g(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
            ia = g(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
            ja = g(["#text"]),
            ka = g(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
            y = g(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            la = g(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            z = g(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            ma = h(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
            na = h(/<%[\s\S]*|[\s\S]*%>/gm),
            oa = h(/^data-[\-\w.\u00B7-\uFFFF]/),
            pa = h(/^aria-[\-\w]+$/),
            qa = h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            ra = h(/^(?:\w+script|data):/i),
            sa = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            A = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(a) {
                return typeof a
            } : function(a) {
                return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };

        function B(a) {
            if (Array.isArray(a)) {
                for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
                return c
            } else return Array.from(a)
        }
        var ta = function() {
                return typeof window === "undefined" ? null : window
            },
            ua = function(a, b) {
                if ((typeof a === "undefined" ? "undefined" : A(a)) !== "object" || typeof a.createPolicy !== "function") return null;
                var c = null,
                    d = "data-tt-policy-suffix";
                b.currentScript && b.currentScript.hasAttribute(d) && (c = b.currentScript.getAttribute(d));
                b = "dompurify" + (c ? "#" + c : "");
                try {
                    return a.createPolicy(b, {
                        createHTML: function(a) {
                            return a
                        }
                    })
                } catch (a) {
                    console.warn("TrustedTypes policy " + b + " could not be created.");
                    return null
                }
            };

        function va() {
            var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ta(),
                b = function(a) {
                    return va(a)
                };
            b.version = "2.2.7";
            b.removed = [];
            if (!a || !a.document || a.document.nodeType !== 9) {
                b.isSupported = !1;
                return b
            }
            var c = a.document,
                d = a.document,
                e = a.DocumentFragment,
                f = a.HTMLTemplateElement,
                h = a.Node,
                i = a.Element,
                j = a.NodeFilter,
                k = a.NamedNodeMap,
                l = k === void 0 ? a.NamedNodeMap || a.MozNamedAttrMap : k,
                q = a.Text,
                r = a.Comment,
                wa = a.DOMParser,
                xa = a.trustedTypes,
                C = i.prototype,
                ya = u(C, "cloneNode"),
                za = u(C, "nextSibling"),
                Aa = u(C, "childNodes"),
                D = u(C, "parentNode");
            if (typeof f === "function") {
                var E = d.createElement("template");
                E.content && E.content.ownerDocument && (d = E.content.ownerDocument)
            }
            var F = ua(xa, c),
                Ba = F && S ? F.createHTML("") : "",
                G = d,
                H = G.implementation,
                Ca = G.createNodeIterator,
                Da = G.getElementsByTagName,
                Ea = G.createDocumentFragment,
                Fa = c.importNode,
                Ga = {};
            try {
                Ga = t(d).documentMode ? d.documentMode : {}
            } catch (a) {}
            var I = {};
            b.isSupported = typeof D === "function" && H && typeof H.createHTMLDocument !== "undefined" && Ga !== 9;
            var J = ma,
                K = na,
                Ha = oa,
                Ia = pa,
                Ja = ra,
                Ka = sa,
                L = qa,
                M = null,
                La = s({}, [].concat(B(ga), B(v), B(w), B(x), B(ja))),
                N = null,
                Ma = s({}, [].concat(B(ka), B(y), B(la), B(z))),
                Na = null,
                Oa = null,
                Pa = !0,
                Qa = !0,
                Ra = !1,
                O = !1,
                P = !1,
                Sa = !1,
                Ta = !1,
                Q = !1,
                R = !1,
                Ua = !0,
                S = !1,
                Va = !0,
                Wa = !0,
                T = !1,
                U = {},
                Xa = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                Ya = null,
                Za = s({}, ["audio", "video", "img", "source", "image", "track"]),
                $a = null,
                ab = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                V = null,
                bb = d.createElement("form"),
                cb = function(a) {
                    if (V && V === a) return;
                    (!a || (typeof a === "undefined" ? "undefined" : A(a)) !== "object") && (a = {});
                    a = t(a);
                    M = "ALLOWED_TAGS" in a ? s({}, a.ALLOWED_TAGS) : La;
                    N = "ALLOWED_ATTR" in a ? s({}, a.ALLOWED_ATTR) : Ma;
                    $a = "ADD_URI_SAFE_ATTR" in a ? s(t(ab), a.ADD_URI_SAFE_ATTR) : ab;
                    Ya = "ADD_DATA_URI_TAGS" in a ? s(t(Za), a.ADD_DATA_URI_TAGS) : Za;
                    Na = "FORBID_TAGS" in a ? s({}, a.FORBID_TAGS) : {};
                    Oa = "FORBID_ATTR" in a ? s({}, a.FORBID_ATTR) : {};
                    U = "USE_PROFILES" in a ? a.USE_PROFILES : !1;
                    Pa = a.ALLOW_ARIA_ATTR !== !1;
                    Qa = a.ALLOW_DATA_ATTR !== !1;
                    Ra = a.ALLOW_UNKNOWN_PROTOCOLS || !1;
                    O = a.SAFE_FOR_TEMPLATES || !1;
                    P = a.WHOLE_DOCUMENT || !1;
                    Q = a.RETURN_DOM || !1;
                    R = a.RETURN_DOM_FRAGMENT || !1;
                    Ua = a.RETURN_DOM_IMPORT !== !1;
                    S = a.RETURN_TRUSTED_TYPE || !1;
                    Ta = a.FORCE_BODY || !1;
                    Va = a.SANITIZE_DOM !== !1;
                    Wa = a.KEEP_CONTENT !== !1;
                    T = a.IN_PLACE || !1;
                    L = a.ALLOWED_URI_REGEXP || L;
                    O && (Qa = !1);
                    R && (Q = !0);
                    U && (M = s({}, [].concat(B(ja))), N = [], U.html === !0 && (s(M, ga), s(N, ka)), U.svg === !0 && (s(M, v), s(N, y), s(N, z)), U.svgFilters === !0 && (s(M, w), s(N, y), s(N, z)), U.mathMl === !0 && (s(M, x), s(N, la), s(N, z)));
                    a.ADD_TAGS && (M === La && (M = t(M)), s(M, a.ADD_TAGS));
                    a.ADD_ATTR && (N === Ma && (N = t(N)), s(N, a.ADD_ATTR));
                    a.ADD_URI_SAFE_ATTR && s($a, a.ADD_URI_SAFE_ATTR);
                    Wa && (M["#text"] = !0);
                    P && s(M, ["html", "head", "body"]);
                    M.table && (s(M, ["tbody"]), delete Na.tbody);
                    g && g(a);
                    V = a
                },
                db = s({}, ["mi", "mo", "mn", "ms", "mtext"]),
                eb = s({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                W = s({}, v);
            s(W, w);
            s(W, ha);
            var fb = s({}, x);
            s(fb, ia);
            var gb = "http://www.w3.org/1998/Math/MathML",
                hb = "http://www.w3.org/2000/svg",
                X = "http://www.w3.org/1999/xhtml",
                ib = function(a) {
                    var b = D(a);
                    (!b || !b.tagName) && (b = {
                        namespaceURI: X,
                        tagName: "template"
                    });
                    var c = n(a.tagName),
                        d = n(b.tagName);
                    if (a.namespaceURI === hb) {
                        if (b.namespaceURI === X) return c === "svg";
                        return b.namespaceURI === gb ? c === "svg" && (d === "annotation-xml" || db[d]) : Boolean(W[c])
                    }
                    if (a.namespaceURI === gb) {
                        if (b.namespaceURI === X) return c === "math";
                        return b.namespaceURI === hb ? c === "math" && eb[d] : Boolean(fb[c])
                    }
                    if (a.namespaceURI === X) {
                        if (b.namespaceURI === hb && !eb[d]) return !1;
                        if (b.namespaceURI === gb && !db[d]) return !1;
                        a = s({}, ["title", "style", "font", "a", "script"]);
                        return !fb[c] && (a[c] || !W[c])
                    }
                    return !1
                },
                Y = function(a) {
                    m(b.removed, {
                        element: a
                    });
                    try {
                        a.parentNode.removeChild(a)
                    } catch (b) {
                        try {
                            a.outerHTML = Ba
                        } catch (b) {
                            a.remove()
                        }
                    }
                },
                jb = function(a, c) {
                    try {
                        m(b.removed, {
                            attribute: c.getAttributeNode(a),
                            from: c
                        })
                    } catch (a) {
                        m(b.removed, {
                            attribute: null,
                            from: c
                        })
                    }
                    c.removeAttribute(a);
                    if (a === "is" && !N[a])
                        if (Q || R) try {
                            Y(c)
                        } catch (a) {} else try {
                            c.setAttribute(a, "")
                        } catch (a) {}
                },
                kb = function(a) {
                    var b = void 0,
                        c = void 0;
                    if (Ta) a = "<remove></remove>" + a;
                    else {
                        var e = ca(a, /^[\r\n\t ]+/);
                        c = e && e[0]
                    }
                    e = F ? F.createHTML(a) : a;
                    try {
                        b = new wa().parseFromString(e, "text/html")
                    } catch (a) {}
                    if (!b || !b.documentElement) {
                        b = H.createHTMLDocument("");
                        var f = b;
                        f = f.body;
                        f.parentNode.removeChild(f.parentNode.firstElementChild);
                        f.outerHTML = e
                    }
                    a && c && b.body.insertBefore(d.createTextNode(c), b.body.childNodes[0] || null);
                    return Da.call(b, P ? "html" : "body")[0]
                },
                lb = function(a) {
                    return Ca.call(a.ownerDocument || a, a, j.SHOW_ELEMENT | j.SHOW_COMMENT | j.SHOW_TEXT, function() {
                        return j.FILTER_ACCEPT
                    }, !1)
                },
                mb = function(a) {
                    if (a instanceof q || a instanceof r) return !1;
                    return typeof a.nodeName !== "string" || typeof a.textContent !== "string" || typeof a.removeChild !== "function" || !(a.attributes instanceof l) || typeof a.removeAttribute !== "function" || typeof a.setAttribute !== "function" || typeof a.namespaceURI !== "string" || typeof a.insertBefore !== "function" ? !0 : !1
                },
                Z = function(a) {
                    return (typeof h === "undefined" ? "undefined" : A(h)) === "object" ? a instanceof h : a && (typeof a === "undefined" ? "undefined" : A(a)) === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"
                },
                $ = function(a, c, d) {
                    if (!I[a]) return;
                    aa(I[a], function(a) {
                        a.call(b, c, d, V)
                    })
                },
                nb = function(a) {
                    var c = void 0;
                    $("beforeSanitizeElements", a, null);
                    if (mb(a)) {
                        Y(a);
                        return !0
                    }
                    if (ca(a.nodeName, /[\u0080-\uFFFF]/)) {
                        Y(a);
                        return !0
                    }
                    var d = n(a.nodeName);
                    $("uponSanitizeElement", a, {
                        tagName: d,
                        allowedTags: M
                    });
                    if (!Z(a.firstElementChild) && (!Z(a.content) || !Z(a.content.firstElementChild)) && p(/<[/\w]/g, a.innerHTML) && p(/<[/\w]/g, a.textContent)) {
                        Y(a);
                        return !0
                    }
                    if (!M[d] || Na[d]) {
                        if (Wa && !Xa[d]) {
                            var e = D(a),
                                f = Aa(a);
                            if (f && e) {
                                var g = f.length;
                                for (var g = g - 1; g >= 0; --g) e.insertBefore(ya(f[g], !0), za(a))
                            }
                        }
                        Y(a);
                        return !0
                    }
                    if (a instanceof i && !ib(a)) {
                        Y(a);
                        return !0
                    }
                    if ((d === "noscript" || d === "noembed") && p(/<\/no(script|embed)/i, a.innerHTML)) {
                        Y(a);
                        return !0
                    }
                    O && a.nodeType === 3 && (c = a.textContent, c = o(c, J, " "), c = o(c, K, " "), a.textContent !== c && (m(b.removed, {
                        element: a.cloneNode()
                    }), a.textContent = c));
                    $("afterSanitizeElements", a, null);
                    return !1
                },
                ob = function(a, b, c) {
                    if (Va && (b === "id" || b === "name") && (c in d || c in bb)) return !1;
                    if (!(Qa && p(Ha, b)))
                        if (!(Pa && p(Ia, b)))
                            if (!N[b] || Oa[b]) return !1;
                            else if (!$a[b])
                        if (!p(L, o(c, Ka, "")))
                            if (!((b === "src" || b === "xlink:href" || b === "href") && a !== "script" && da(c, "data:") === 0 && Ya[a]))
                                if (!(Ra && !p(Ja, o(c, Ka, ""))))
                                    if (!!c) return !1;
                    return !0
                },
                pb = function(a) {
                    var c, d = void 0,
                        e = void 0,
                        f = void 0;
                    $("beforeSanitizeAttributes", a, null);
                    var g = a.attributes;
                    if (!g) return;
                    var h = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: N
                    };
                    f = g.length;
                    while (f--) {
                        c = g[f];
                        var i = c,
                            j = i.name;
                        i = i.namespaceURI;
                        d = ea(c.value);
                        e = n(j);
                        h.attrName = e;
                        h.attrValue = d;
                        h.keepAttr = !0;
                        h.forceKeepAttr = void 0;
                        $("uponSanitizeAttribute", a, h);
                        d = h.attrValue;
                        if (h.forceKeepAttr) continue;
                        jb(j, a);
                        if (!h.keepAttr) continue;
                        if (p(/\/>/i, d)) {
                            jb(j, a);
                            continue
                        }
                        O && (d = o(d, J, " "), d = o(d, K, " "));
                        c = a.nodeName.toLowerCase();
                        if (!ob(c, e, d)) continue;
                        try {
                            i ? a.setAttributeNS(i, j, d) : a.setAttribute(j, d), ba(b.removed)
                        } catch (a) {}
                    }
                    $("afterSanitizeAttributes", a, null)
                },
                qb = function a(b) {
                    var c = void 0,
                        d = lb(b);
                    $("beforeSanitizeShadowDOM", b, null);
                    while (c = d.nextNode()) {
                        $("uponSanitizeShadowNode", c, null);
                        if (nb(c)) continue;
                        c.content instanceof e && a(c.content);
                        pb(c)
                    }
                    $("afterSanitizeShadowDOM", b, null)
                };
            b.sanitize = function(d, f) {
                var g = void 0,
                    i = void 0,
                    j = void 0,
                    k = void 0;
                d || (d = "<!-->");
                if (typeof d !== "string" && !Z(d))
                    if (typeof d.toString !== "function") throw fa("toString is not a function");
                    else {
                        d = d.toString();
                        if (typeof d !== "string") throw fa("dirty is not a string, aborting")
                    }
                if (!b.isSupported) {
                    if (A(a.toStaticHTML) === "object" || typeof a.toStaticHTML === "function") {
                        if (typeof d === "string") return a.toStaticHTML(d);
                        if (Z(d)) return a.toStaticHTML(d.outerHTML)
                    }
                    return d
                }
                Sa || cb(f);
                b.removed = [];
                typeof d === "string" && (T = !1);
                if (!T)
                    if (d instanceof h) g = kb("<!---->"), f = g.ownerDocument.importNode(d, !0), f.nodeType === 1 && f.nodeName === "BODY" ? g = f : f.nodeName === "HTML" ? g = f : g.appendChild(f);
                    else {
                        if (!Q && !O && !P && d.indexOf("<") === -1) return F && S ? F.createHTML(d) : d;
                        g = kb(d);
                        if (!g) return Q ? null : Ba
                    }
                g && Ta && Y(g.firstChild);
                f = lb(T ? d : g);
                while (i = f.nextNode()) {
                    if (i.nodeType === 3 && i === j) continue;
                    if (nb(i)) continue;
                    i.content instanceof e && qb(i.content);
                    pb(i);
                    j = i
                }
                j = null;
                if (T) return d;
                if (Q) {
                    if (R) {
                        k = Ea.call(g.ownerDocument);
                        while (g.firstChild) k.appendChild(g.firstChild)
                    } else k = g;
                    Ua && (k = Fa.call(c, k, !0));
                    return k
                }
                i = P ? g.outerHTML : g.innerHTML;
                O && (i = o(i, J, " "), i = o(i, K, " "));
                return F && S ? F.createHTML(i) : i
            };
            b.setConfig = function(a) {
                cb(a), Sa = !0
            };
            b.clearConfig = function() {
                V = null, Sa = !1
            };
            b.isValidAttribute = function(a, b, c) {
                V || cb({});
                a = n(a);
                b = n(b);
                return ob(a, b, c)
            };
            b.addHook = function(a, b) {
                if (typeof b !== "function") return;
                I[a] = I[a] || [];
                m(I[a], b)
            };
            b.removeHook = function(a) {
                I[a] && ba(I[a])
            };
            b.removeHooks = function(a) {
                I[a] && (I[a] = [])
            };
            b.removeAllHooks = function() {
                I = {}
            };
            return b
        }
        j = va();
        return j
    })
}), null);
__d("TrustedTypes", ["DOMPurify", "FBLogger", "TrustedTypesConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    if (typeof trustedTypes !== "undefined" && c("TrustedTypesConfig").useTrustedTypes) {
        var h = function(a, b) {
                return function(d) {
                    if (a(d)) return d;
                    try {
                        for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
                        return b.apply(void 0, ["" + d].concat(f))
                    } catch (a) {
                        if (c("TrustedTypesConfig").reportOnly) return "" + d;
                        throw a
                    }
                }
            },
            i = function(a, b) {
                c("FBLogger")("sec_infra").warn("[Trusted-Types]: String '%s' is flowing to DOM XSS sink. Default Trusted Type policy was executed and removed dangerous elements. Returned string is: '%s'. If this is breaking your feature, post in Security Infra group.", a.toString().slice(0, 15), b.toString().slice(0, 15))
            },
            j = trustedTypes;
        a = babelHelpers["extends"]({}, j, {
            createPolicy: function(a, b) {
                a = j.createPolicy(a, b);
                return {
                    createHTML: h(j.isHTML.bind(j), a.createHTML.bind(a)),
                    createScript: h(j.isScript.bind(j), a.createScript.bind(a)),
                    createScriptURL: h(j.isScriptURL.bind(j), a.createScriptURL.bind(a))
                }
            }
        });
        var k = c("DOMPurify")(window);
        j.createPolicy("default", {
            createHTML: function(a, b) {
                b = k.sanitize(a, {
                    RETURN_TRUSTED_TYPE: !0
                });
                if (a == b) return a;
                i(a, b);
                return c("TrustedTypesConfig").reportOnly ? a : b
            }
        });
        b = a
    } else {
        var l = function(a) {
            return a
        };
        d = {
            isHTML: function() {
                return !1
            },
            isScriptURL: function() {
                return !1
            },
            isScript: function() {
                return !1
            },
            createPolicy: function(a, b) {
                return {
                    createHTML: l,
                    createScriptURL: l,
                    createScript: l
                }
            }
        };
        b = d
    }
    e = b;
    g["default"] = e
}), 98);
__d("createTrustedScriptURLFromBootloaderDataURI", ["TrustedTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "bootloader-data-uri",
        i, j = {
            createScriptURL: function(a) {
                return a
            }
        };

    function k() {
        if (i) return;
        i = c("TrustedTypes").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createScriptURL(a)
    }
    g["default"] = a
}), 98);
__d("createTrustedScriptURLFromFacebookURI", ["TrustedTypes", "URI", "err", "isCdnURI", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "fburi-scripturls",
        i, j = {
            createScriptURL: function(a) {
                var b = c("URI").tryParseURI(a);
                if (b != null && (c("isFacebookURI")(b) || c("isCdnURI")(b))) return a;
                throw c("err")("Violating Trusted Type policies, non-fb URI.")
            }
        };

    function k() {
        if (i) return;
        i = c("TrustedTypes").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createScriptURL(a)
    }
    g["default"] = a
}), 98);
__d("Bootloader", ["invariant", "BootloaderConfig", "BootloaderEndpoint", "BootloaderEvents", "BootloaderEventsManager", "CSRBitMap", "CSRIndexUtil", "CSSLoader", "ClientConsistency", "ErrorPubSub", "FBLogger", "JSResourceReference", "NetworkStatus", "RequireDeferredReference", "ResourceHasher", "ResourceTimingsStore", "TimeSlice", "cr:696703", "createTrustedScriptURLFromBootloaderDataURI", "createTrustedScriptURLFromFacebookURI", "err", "fb-error", "ifRequireable", "nullthrows", "performanceAbsoluteNow", "performanceNow", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = b("fb-error").TAAL,
        l = b("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX,
        m = b("CSRIndexUtil").parseCSRIndexes,
        n = function() {},
        o = new Set(),
        p = !!b("BootloaderConfig").deferBootloads;
    p && !a.__comet_ssr_is_server_env_DO_NOT_USE && b("setTimeoutAcrossTransitions")(function() {
        $.undeferBootloads(!0)
    }, 15e3);
    var q = [],
        r = new Map(),
        s = new Map(),
        t = new Map(),
        u = new Map(),
        v = new Map(),
        w = null,
        x = new Map(),
        y = new Map(),
        z = new Map(),
        A = [],
        B = new Map(),
        C = new Set(),
        D = !1,
        E = new Set(),
        F = !1,
        G = new(b("BootloaderEventsManager"))(),
        H = b("BootloaderConfig").jsRetries || [],
        I = b("BootloaderConfig").jsRetryAbortNum,
        J = b("BootloaderConfig").jsRetryAbortTime,
        K = H.length > 0;
    (h || (h = b("ErrorPubSub"))).unshiftListener(function(a) {
        var b = [];
        for (var c = s, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
            f[1];
            if (t.has(g)) continue;
            f = N(g);
            if (f.type === "csr" || f.type === "async") continue;
            b.push(f.src)
        }
        a.loadingUrls = b
    });

    function aa(a) {
        if (p || !F) return !1;
        for (var b = 0; b < a.length; b++) {
            var c, d = a[b];
            d = v.get(d);
            if (!d) return !1;
            d = [d.r, ((c = d.rdfds) == null ? void 0 : c.r) || [], ((c = d.rds) == null ? void 0 : c.r) || []];
            for (var c = 0; c < d.length; c++) {
                var e = d[c];
                for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= e.length) break;
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    if (!x.has(h)) return !1
                }
            }
        }
        return !0
    }

    function L(a) {
        var c = v.get(a);
        if (!c) throw k.blameToPreviousFile(b("err")("Bootloader: %s is not in the component map", a));
        return c
    }

    function M(a) {
        var c = L(a);
        c.be && (delete c.be, $.done(b("ResourceHasher").getAsyncHash(a)))
    }

    function N(a) {
        var c = x.get(a);
        if (!c) throw k.blameToPreviousFile(b("err")("No resource entry for hash: %s", a));
        return c
    }

    function ba(a, c) {
        var d = b("ResourceHasher").getAsyncHash(a);
        if (!x.has(d)) x.set(d, {
            type: "async",
            module: a,
            blocking: !!c
        });
        else {
            a = N(d);
            a.type === "async" || g(0, 21557);
            a.blocking && !c && (a.blocking = !1)
        }
        return d
    }

    function O() {
        w || (w = document.head || document.getElementsByTagName("head")[0] || document.body);
        return w
    }

    function P(a) {
        var b = document.createDocumentFragment();
        a(b);
        O().appendChild(b)
    }

    function Q() {
        if (!K) return !1;
        var a = A.length;
        if (a < I) return !0;
        a = A[a - 1] - A[a - I];
        a < J && (b("FBLogger")("bootloader").warn("JS retry abort"), K = !1);
        return K
    }

    function ca(a, b, c) {
        a = void 0;
        switch (b.type) {
            case "async":
                return;
            case "css":
                a = "style";
                break;
            case "js":
                a = "script";
                break;
            default:
                a = b.type, g(0, 3721)
        }
        if (b.d === 1) return;
        var d = document.createElement("link");
        d.href = b.src;
        d.rel = "preload";
        d.as = a;
        b.nc || (d.crossOrigin = "anonymous");
        c.appendChild(d)
    }

    function R(a, c, d, e) {
        var f = document.createElement("script");
        c.d ? f.src = b("createTrustedScriptURLFromBootloaderDataURI")(c.src) : f.src = b("createTrustedScriptURLFromFacebookURI")(c.src);
        f.async = !0;
        c.nc || (f.crossOrigin = "anonymous");
        S(f, a, c, d);
        e.appendChild(f);
        return f
    }

    function S(a, c, d, e) {
        var f = a.src,
            g = (i || (i = b("performanceAbsoluteNow")))(),
            h = b("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
            j = b("ResourceTimingsStore").getUID("js", f);
        b("ResourceTimingsStore").annotate("js", j).addStringAnnotation("name", c).addStringAnnotation("source", f);
        b("ifRequireable")("TimeSliceInteraction", function(a) {
            a.informGlobally("bootloader._loadJS").addStringAnnotation("source", f).addStringAnnotation("name", c)
        });
        b("ResourceTimingsStore").measureRequestSent("js", j);
        a.onload = h.bind(void 0, function() {
            var a;
            a = (a = z.get(f)) != null ? a : 0;
            a && b("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", c, f, (i || (i = b("performanceAbsoluteNow")))() - g, a);
            b("ResourceTimingsStore").measureResponseReceived("js", j);
            e()
        });
        a.onreadystatechange = function() {
            ["loaded", "complete"].includes(this.readyState) && (b("ResourceTimingsStore").measureResponseReceived("js", j), h.bind(void 0, e)())
        };
        a.onerror = h.bind(void 0, function() {
            var h;
            b("ResourceTimingsStore").measureResponseReceived("js", j);
            h = (h = z.get(f)) != null ? h : 0;
            var k = (i || (i = b("performanceAbsoluteNow")))();
            Q() && h < H.length ? (A.push(k), setTimeout(function() {
                if (!Q()) return;
                var b = a.parentNode;
                b && (b.removeChild(a), R(c, d, e, b))
            }, H[h]), z.set(f, h + 1)) : (u.set(c, k), b("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", c, f, k - g, h, s.size - t.size), b("NetworkStatus").reportError(), e())
        })
    }

    function T(a, c, d) {
        return function() {
            b("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", a, c.src, s.size - t.size), u.set(a, (i || (i = b("performanceAbsoluteNow")))()), b("NetworkStatus").reportError(), d()
        }
    }

    function da(a, c, d, e) {
        if (s.has(a)) return;
        s.set(a, (i || (i = b("performanceAbsoluteNow")))());
        if (c.p && b("BootloaderConfig").hypStep4) {
            var f = m(c.p),
                h = new Set();
            f.forEach(function(b, c) {
                b !== l && y.get(b) !== a && h.add(c)
            });
            if (h.size === f.length) return;
            else if (h.size > 0) {
                f = c.src.replace(/\/y[a-zA-Z0-9_-]\//, "/");
                f.includes("/intern/rsrc.php") ? c.src = f.replace(/(!)(.+)(\.(?:css|js)(?:$|\?))/, function(a, b, c, d) {
                    return b + c.split(",").filter(function(a, b) {
                        return !h.has(b)
                    }).join(",") + d
                }) : f.includes("/rsrc.php") && (c.src = f.replace(/(.*\/)([^.]+)(\.)/, function(a, b, c, d) {
                    return b + c.match(/.{1,11}/g).filter(function(a, b) {
                        return !h.has(b)
                    }).join("") + d
                }))
            }
        }
        ca(a, c, d);
        window.CavalryLogger && window.CavalryLogger.getInstance().measureResources({
            name: a,
            type: c.type
        }, e);
        switch (c.type) {
            case "js":
                R(a, c, function() {
                    return $.done(a)
                }, d);
                break;
            case "css":
                f = function() {
                    return $.done(a)
                };
                b("CSSLoader").loadStyleSheet(a, c.src, d, !c.nc, f, T(a, c, f));
                break;
            case "async":
                b("BootloaderEndpoint").load(c.module, c.blocking, a);
                break;
            default:
                c.type, g(0, 3721)
        }
    }

    function U(a, c, d, e, f) {
        var h = new Map(),
            i = (f = f) != null ? f : b("BootloaderEvents").newResourceMapSet();
        f = [];
        var j = [],
            k = [];
        for (var a = W(a), l = Array.isArray(a), m = 0, a = l ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var n;
            if (l) {
                if (m >= a.length) break;
                n = a[m++]
            } else {
                m = a.next();
                if (m.done) break;
                n = m.value
            }
            n = n;
            var o = n[0];
            n = n[1];
            var p = void 0;
            switch (n.type) {
                case "css":
                    p = n.nonblocking ? "nonblocking" : "blocking";
                    break;
                case "js":
                    p = "default";
                    break;
                case "async":
                    p = n.blocking ? "blocking" : "nonblocking";
                    break;
                default:
                    n.type, g(0, 3721)
            }
            i[p].set(o, n);
            var q = G.rsrcDone(o);
            k.push(q);
            p !== "nonblocking" && (j.push(q), p === "blocking" && f.push(q));
            s.has(o) || h.set(o, n)
        }
        var r, t;
        !b("cr:696703") ? r = t = function(a) {
            return a()
        } : (t = b("cr:696703").scheduleLoggingPriCallback, r = b("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE());
        var u = c.onBlocking,
            v = c.onAll,
            w = c.onLog;
        u && G.registerCallback(function() {
            r(u)
        }, f);
        v && G.registerCallback(function() {
            r(v)
        }, j);
        w && G.registerCallback(function() {
            t(function() {
                return w(i)
            })
        }, k);
        for (var p = h, q = Array.isArray(p), o = 0, p = q ? p : p[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (q) {
                if (o >= p.length) break;
                n = p[o++]
            } else {
                o = p.next();
                if (o.done) break;
                n = o.value
            }
            m = n;
            l = m[0];
            a = m[1];
            da(l, a, d, e)
        }
    }

    function V(a, c, d) {
        x.set(a, c);
        if (c.type === "async" || c.type === "csr") return;
        var e = c.p;
        if (e)
            for (var e = m(e), f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                if (h === l) continue;
                (!y.has(h) || d) && y.set(h, a);
                (b("BootloaderConfig").phdOn ? c.c == 2 : c.c) && b("CSRBitMap").add(h)
            }
    }

    function ea(a, c) {
        var d = G.bootload(c);
        if (C.has(d)) return [d, null];
        C.add(d);
        var e = (i || (i = b("performanceAbsoluteNow")))();
        c = {
            ref: a,
            components: c,
            timesliceContext: b("TimeSlice").getContext(),
            startTime: (a = r.get(d)) != null ? a : e,
            fetchStartTime: e,
            callbackStart: 0,
            callbackEnd: 0,
            tierOne: b("BootloaderEvents").newResourceMapSet(),
            tierTwo: b("BootloaderEvents").newResourceMapSet(),
            tierThree: b("BootloaderEvents").newResourceMapSet(),
            beRequests: new Map()
        };
        b("BootloaderEvents").notifyBootloadStart(c);
        return [d, c]
    }

    function fa(a) {
        return b("ifRequireable").call(null, a, function() {
            return !0
        }, function() {
            return !1
        })
    }

    function ga(a, c, e, f) {
        B.has(a) || B.set(a, {
            firstBootloadStart: (i || (i = b("performanceAbsoluteNow")))(),
            logData: new Set()
        });
        f && b("nullthrows")(B.get(a)).logData.add(f);
        var g = L(a),
            h = g.r,
            j = g.rdfds,
            k = g.rds;
        g = g.be;
        g = fa(a) ? null : ba(a, g);
        g == null && G.notify(G.beDone(a));
        U(g != null ? [g].concat(h) : h, {
            onAll: function() {
                return G.notify(G.tierOne(a))
            },
            onLog: function() {
                return G.notify(G.tierOneLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierOne);
        var l = (j == null ? void 0 : j.m) || [];
        U((j == null ? void 0 : j.r) || [], {
            onBlocking: function() {
                return b("RequireDeferredReference").unblock(l, "css")
            },
            onAll: function() {
                return G.registerCallback(function() {
                    G.notify(G.tierTwoStart(a)), d.call(null, l.map(b("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function() {
                        return G.notify(G.tierTwo(a))
                    })
                }, [G.tierOne(a), c])
            },
            onLog: function() {
                return G.notify(G.tierTwoLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierTwo);
        var m = (k == null ? void 0 : k.m) || [];
        U((k == null ? void 0 : k.r) || [], {
            onBlocking: function() {
                return b("RequireDeferredReference").unblock(m, "css")
            },
            onAll: function() {
                return G.registerCallback(function() {
                    G.notify(G.tierThreeStart(a)), d.call(null, m.map(b("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function() {
                        return G.notify(G.tierThree(a))
                    })
                }, [G.tierTwo(a)])
            },
            onLog: function() {
                return G.notify(G.tierThreeLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierThree)
    }

    function W(a) {
        var c = new Map();
        for (var d = 0; d < a.length; d++) {
            var e = a[d],
                f = x.get(e);
            if (!f) {
                b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", e);
                continue
            }
            var h = void 0;
            if (f.type === "csr") h = m(f.src);
            else if (f.p) h = m(f.p), h.includes(l) && c.set(e, f), h = h.filter(function(a) {
                return a !== l
            });
            else {
                c.set(e, f);
                continue
            }
            for (var e = h, f = Array.isArray(e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (f) {
                    if (h >= e.length) break;
                    i = e[h++]
                } else {
                    h = e.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                i = b("nullthrows")(y.get(i), "No hash for rsrcIndex:" + i);
                var j = N(i);
                j.type !== "csr" || g(0, 20056, i);
                c.set(i, j)
            }
        }
        return c.entries()
    }

    function X(a) {
        var c, d = a.getAttribute("data-bootloader-hash");
        if (d == null) return;
        var e = b("ResourceHasher").getValidResourceHash(d);
        if (a.id) {
            if (E.has(a.id)) return;
            E.add(a.id)
        }
        d = a.tagName == "SCRIPT" ? {
            src: a.src,
            type: "js"
        } : {
            src: a.href,
            type: "css"
        };
        a.crossOrigin == null && (d.nc = 1);
        d.type === "css" && a.getAttribute("data-nonblocking") && (d.nonblocking = 1);
        var f = a.getAttribute("data-c");
        f == "1" ? d.c = 1 : f == "2" && (d.c = 2);
        d.p = a.getAttribute("data-p");
        x.has(e) && !b("BootloaderConfig").silentDups && b("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", e, d.src);
        V(e, d, !0);
        s.set(e, (i || (i = b("performanceAbsoluteNow")))());
        f = function() {
            return $.done(e)
        };
        c = d.type === "js" ? !a.getAttribute("async") : ((c = a.parentNode) == null ? void 0 : c.tagName) === "HEAD";
        c || window._btldr && window._btldr[e] ? f() : d.type === "js" ? S(a, e, d, f) : b("CSSLoader").setupEventListeners(e, d.src, O(), f, T(e, d, f), a)
    }

    function Y() {
        if (D) return;
        D = !0;
        Array.from(document.getElementsByTagName("link")).forEach(function(a) {
            return X(a)
        });
        Array.from(document.getElementsByTagName("script")).forEach(function(a) {
            return X(a)
        })
    }

    function Z() {
        F = !0;
        var a = q;
        q = [];
        a.forEach(function(a) {
            var b = a[0],
                c = a[1],
                d = a[2];
            a = a[3];
            a(function() {
                $.loadModules.apply($, [b, c, d])
            })
        })
    }
    var $ = {
        loadModules: function(a, c, e) {
            c === void 0 && (c = n);
            e === void 0 && (e = "loadModules: unknown caller");
            var f = a,
                g = !1,
                h = function() {
                    g || c.apply(void 0, arguments)
                };
            a = {
                remove: function() {
                    g = !0
                }
            };
            if (!aa(f)) {
                var j = "Deferred: Bootloader.loadModules";
                j = b("TimeSlice").getGuardedContinuation(j);
                q.push([f, h, e, j]);
                j = G.bootload(f);
                r.set(j, (j = r.get(j)) != null ? j : (i || (i = b("performanceAbsoluteNow")))());
                return a
            }
            j = ea(e, f);
            var k = j[0],
                l = j[1];
            G.registerCallback(d.bind(null, f, function() {
                l && (l.callbackStart = (i || (i = b("performanceAbsoluteNow")))()), h.apply(void 0, arguments), l && (l.callbackEnd = (i || (i = b("performanceAbsoluteNow")))()), G.notify(k)
            }), f.map(function(a) {
                return G.tierOne(a)
            }));
            P(function(b) {
                for (var c = 0; c < f.length; c++) {
                    var a = f[c];
                    ga(a, k, b, l)
                }
            });
            if (l) {
                j = new Set([k]);
                for (var m = 0; m < f.length; m++) {
                    var o = f[m];
                    j.add(G.beDone(o));
                    j.add(G.tierThree(o));
                    j.add(G.tierOneLog(o));
                    j.add(G.tierTwoLog(o));
                    j.add(G.tierThreeLog(o))
                }
                G.registerCallback(function() {
                    return b("BootloaderEvents").notifyBootload(l)
                }, Array.from(j));
                b("ifRequireable")("TimeSliceInteraction", function(a) {
                    a.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(l.tierOne).keys())).addSetAnnotation("rdfd_requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(l.tierTwo).keys())).addSetAnnotation("rd_requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(l.tierThree).keys())).addStringAnnotation("bootloader_reference", e).addSetAnnotation("requested_components", f)
                })
            }
            return a
        },
        loadResources: function(a, c, d) {
            d === void 0 && (d = "loadResources: unknown caller"), Y(), P(function(e) {
                var f;
                return U(a.map(function(a) {
                    return b("ResourceHasher").getValidResourceHash(a)
                }), (f = c) != null ? f : Object.freeze({}), e, d)
            })
        },
        requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(a) {
            var c = b("ResourceHasher").createExternalJSHash();
            V(c, {
                type: "js",
                src: a,
                nc: 1
            }, !1);
            $.loadResources([c])
        },
        done: function(a) {
            t.set(a, (i || (i = b("performanceAbsoluteNow")))()), window.CavalryLogger && window.CavalryLogger.done_js([a]), G.notify(G.rsrcDone(a))
        },
        beDone: function(a, b, c) {
            for (var d = (d = (d = B.get(a)) == null ? void 0 : d.logData) != null ? d : [], e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d, g;
                if (e) {
                    if (f >= d.length) break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                g.beRequests.set(b, c)
            }
            G.notify(G.beDone(a))
        },
        handlePayload: function(a, c) {
            for (var d = (d = a.rsrcTags) != null ? d : [], e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d, g;
                if (e) {
                    if (f >= d.length) break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                X(document.getElementById(g))
            }
            $.setResourceMap((g = a.rsrcMap) != null ? g : {}, a.sotUpgrades, (e = (f = a.consistency) == null ? void 0 : f.rev) != null ? e : a.sr_revision, c);
            a.csrUpgrade && m(a.csrUpgrade).forEach(function(a) {
                return b("CSRBitMap").add(a)
            });
            a.compMap && $.enableBootload(a.compMap, c)
        },
        enableBootload: function(a, b) {
            for (var c in a) b && b.comp++, !v.has(c) ? (v.set(c, a[c]), o.has(c) && (o["delete"](c), M(c))) : b && b.dup_comp++;
            Y();
            p || Z()
        },
        undeferBootloads: function(a) {
            a === void 0 && (a = !1);
            if (window.location.search.indexOf("&__deferBootloads=") !== -1) return;
            a && p && b("BootloaderEvents").notifyDeferTimeout({
                componentMapSize: v.size,
                pending: q.map(function(a) {
                    var b = a[0];
                    a[1];
                    var c = a[2];
                    a[3];
                    return {
                        components: b,
                        ref: c
                    }
                }),
                time: (j || (j = b("performanceNow")))()
            });
            p = !1;
            v.size && Z()
        },
        markComponentsAsImmediate: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                v.has(c) ? M(c) : o.add(c)
            }
        },
        setResourceMap: function(a, c, d, e) {
            var f = !1;
            for (var g in a) {
                e && e.rsrc++;
                g = b("ResourceHasher").getValidResourceHash(g);
                var h = a[g],
                    i = x.get(g);
                !i ? (h.type === "js" && (f = !0), V(g, h, !1)) : (e && e.dup_rsrc++, (i.type === "js" && h.type === "js" || i.type === "css" && h.type === "css") && (h.d && !i.d && (h.type === "js" && (f = !0), i.src = h.src, i.d = 1)))
            }
            f && d != null && b("ClientConsistency").addAdditionalRevision(d);
            if (c)
                for (var h = c, i = Array.isArray(h), a = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (i) {
                        if (a >= h.length) break;
                        e = h[a++]
                    } else {
                        a = h.next();
                        if (a.done) break;
                        e = a.value
                    }
                    f = e;
                    d = x.get(f);
                    d && V(f, d, !0)
                }
        },
        getURLToHashMap: function() {
            var a = new Map();
            for (var b = x, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                if (e.type === "async" || e.type === "csr") continue;
                a.set(e.src, f)
            }
            return a
        },
        loadPredictedResourceMap: function(a, b, c) {
            $.setResourceMap(a, null, c), $.loadResources(Object.keys(a), b)
        },
        getCSSResources: function(a) {
            var b = [];
            for (var a = W(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                e.type === "css" && b.push(f)
            }
            return b
        },
        getBootloadedComponents: function() {
            var a = new Map();
            for (var b = B, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                a.set(f, e.firstBootloadStart)
            }
            return a
        },
        getResourceState: function(a) {
            return {
                loadStart: s.get(a),
                loadEnd: t.get(a),
                loadError: u.get(a)
            }
        },
        getComponentTiming: function(a) {
            var b;
            return {
                tierTwoStart: (b = G.getEventTime(G.tierTwoStart(a))) != null ? b : 0,
                tierTwoEnd: (b = G.getEventTime(G.tierTwo(a))) != null ? b : 0,
                tierThreeStart: (b = G.getEventTime(G.tierThreeStart(a))) != null ? b : 0,
                tierThreeEnd: (b = G.getEventTime(G.tierThree(a))) != null ? b : 0
            }
        },
        getLoadedResourceCount: function() {
            return t.size
        },
        getErrorCount: function() {
            return u.size
        },
        forceFlush: function() {
            b("BootloaderEndpoint").forceFlush()
        },
        __debug: {
            componentMap: v,
            requested: s,
            resources: x,
            riMap: y,
            retries: z,
            errors: u,
            loaded: t,
            bootloaded: B,
            queuedToMarkAsImmediate: o,
            _resolveCSRs: W,
            _getQueuedLoadModules: function() {
                return q
            },
            _dequeueLoadModules: function(a) {
                a = q.splice(a, 1);
                if (!a.length) return;
                a = a[0];
                var b = a[0],
                    c = a[1],
                    d = a[2];
                a = a[3];
                var e = p,
                    f = F;
                p = !1;
                F = !0;
                a(function() {
                    $.loadModules.apply($, [b, c, d])
                });
                p = e;
                F = f
            }
        }
    };
    b("JSResourceReference").setBootloader($);
    e.exports = $
}), null);
__d("CSRFGuard", [], (function(a, b, c, d, e, f) {
    "use strict";
    c = "for (;;);";
    var g = /^for ?\(;;\);/;
    d = c.length;

    function a(a) {
        return !!a.match(g)
    }

    function b(a) {
        var b = a.match(g);
        return b ? a.substr(b[0].length) : b
    }
    f.regex = g;
    f.length = d;
    f.exists = a;
    f.clean = b
}), 66);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], (function(a, b, c, d, e, f) {
    c = a.clearImmediate || b("ImmediateImplementation").clearImmediate;
    f["default"] = c
}), 66);
__d("clearImmediate", ["clearImmediatePolyfill"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        c("clearImmediatePolyfill")(a)
    }
    g["default"] = a
}), 98);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], (function(a, b, c, d, e, f) {
    a = {
        getID: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_ID || "0"
        },
        getName: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_NAME || ""
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("DTSG", ["invariant", "DTSGInitialData"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("DTSGInitialData").token || null;

    function a() {
        return i
    }

    function b(a) {
        i = a
    }

    function c() {
        h(0, 5809)
    }
    g.getToken = a;
    g.setToken = b;
    g.refresh = c
}), 98);
__d("isOculusDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("DTSGUtils", ["SprinkleConfig", "isCdnURI", "isFacebookURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getNumericValue: function(a) {
            var c = 0;
            for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
            c = c.toString();
            return b("SprinkleConfig").should_randomize ? c : b("SprinkleConfig").version + c
        },
        shouldAppendToken: function(a) {
            return !b("isCdnURI")(a) && !a.isSubdomainOfDomain("fbsbx.com") && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkplaceDotComURI")(a) || b("isOculusDotComURI")(a) || a.isSubdomainOfDomain("freebasics.com") || a.isSubdomainOfDomain("discoverapp.com"))
        }
    };
    e.exports = a
}), null);
__d("DTSG_ASYNC", ["DTSGInitData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("DTSGInitData").async_get_token || null;

    function a() {
        return h
    }

    function b(a) {
        h = a
    }
    g.getToken = a;
    g.setToken = b
}), 98);
__d("ge", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        if (typeof a !== "string") return a;
        else if (!b) return document.getElementById(a);
        else return g(a, b, c)
    }

    function g(a, b, c) {
        var d;
        if (h(b) == a) return b;
        else if (b.getElementsByTagName) {
            c = b.getElementsByTagName(c || "*");
            for (d = 0; d < c.length; d++)
                if (h(c[d]) == a) return c[d]
        } else {
            c = b.childNodes;
            for (d = 0; d < c.length; d++) {
                b = g(a, c[d]);
                if (b) return b
            }
        }
        return null
    }

    function h(a) {
        return a.getAttribute ? a.getAttribute("id") : null
    }
    f["default"] = a
}), 66);
__d("replaceTransportMarkers", ["BanzaiLazyQueue", "ge", "memoize"], (function(a, b, c, d, e, f, g) {
    var h = new Set();

    function i(a, e, f) {
        var g = f !== void 0 ? e[f] : e,
            j;
        if (Array.isArray(g))
            for (j = 0; j < g.length; j++) i(a, g, j);
        else if (g && typeof g === "object")
            if (g.__m) g.__lazy ? e[f] = c("memoize")(b.bind(null, g.__m)) : e[f] = b.call(null, g.__m);
            else if (g.__jsr) e[f] = new(b.call(null, "JSResourceReference"))(g.__jsr).__setRef("replaceTransportMarkers");
        else if (g.__dr) e[f] = new(b.call(null, "RequireDeferredReference"))(g.__dr).__setRef("replaceTransportMarkers");
        else if (g.__rc) g.__rc[0] === null ? e[f] = null : e[f] = b.call(null, g.__rc[0]), g.__rc[1] && (h.has(g.__rc[1]) || (h.add(g.__rc[1]), d("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
            identifier: g.__rc[1]
        })));
        else if (g.__e) e[f] = c("ge")(g.__e);
        else if (g.__rel) e[f] = a.relativeTo;
        else if (g.__bigPipeContext) e[f] = a.bigPipeContext;
        else if (g.__bbox) e[f] = g.__bbox;
        else {
            for (var k in g) i(a, g, k);
            if (g.__map) e[f] = new Map(g.__map);
            else if (g.__set) e[f] = new Set(g.__set);
            else if (g.__imm) {
                j = g.__imm;
                a = j.method;
                g = j.value;
                e[f] = b.call(null, "immutable")[a](g)
            }
        }
    }
    g["default"] = i
}), 98);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], (function(a, b, c, d, e, f, g) {
    var h = 2,
        i = 8,
        j = new(c("BitMap"))(),
        k = {
            getLoadedModuleHash: function() {
                return j.toCompressedString()
            },
            getModuleNameAndHash: function(a) {
                a = a.split("@");
                return {
                    hash: a[1],
                    name: a[0]
                }
            },
            handleDefine: function(a, b, d, e, g) {
                e >= 0 && j.set(e), define(a, b, function(h, i, j, k, b) {
                    h = {
                        data: d
                    };
                    c("replaceTransportMarkers")({
                        relativeTo: g
                    }, h);
                    if (e === -42) {
                        i = d != null && typeof d === "object" && d.__throw8367__;
                        throw new Error(a + ": " + (typeof i === "string" ? i : ""))
                    }
                    b.exports = h.data
                }, h | i)
            },
            handleDefines: function(a, b) {
                a.forEach(function(a) {
                    var c;
                    b != null ? c = [].concat(a, [b]) : c = [].concat(a, [null]);
                    k.handleDefine.apply(null, c)
                })
            }
        };
    a = k;
    g["default"] = a
}), 98);
__d("StaticSiteData", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        hs_key: "__hs",
        connection_class_server_guess_key: "__ccg",
        dpr_key: "dpr",
        spin_rev_key: "__spin_r",
        spin_time_key: "__spin_t",
        spin_branch_key: "__spin_b",
        spin_mhenv_key: "__spin_dev_mhenv",
        lite_iframe_locale_override_key: "__ltif_locale",
        weblite_key: "__wblt",
        weblite_iframe_key: "__wbltif",
        kite_key: "__ktif",
        kite_legacy_key: "_ktif",
        haste_session_id_key: "__hsi",
        jsmod_key: "__dyn",
        csr_key: "__csr",
        comet_key: "__comet_req"
    })
}), null);
/**
 * License: https://www.facebook.com/legal/license/09P_rcHKL4D/
 */
__d("Alea", [], (function(a, b, c, d, e, f) {
    function g() {
        var a = 4022871197,
            b = function(b) {
                b = b.toString();
                for (var c = 0; c < b.length; c++) {
                    a += b.charCodeAt(c);
                    var d = .02519603282416938 * a;
                    a = d >>> 0;
                    d -= a;
                    d *= a;
                    a = d >>> 0;
                    d -= a;
                    a += d * 4294967296
                }
                return (a >>> 0) * 23283064365386963e-26
            };
        b.version = "Mash 0.9";
        return b
    }

    function a() {
        var a = 0,
            b = 0,
            c = 0,
            d = 1;
        for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
        var i = f.length > 0 ? f : [new Date()],
            j = new g();
        a = j(" ");
        b = j(" ");
        c = j(" ");
        for (var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
        j = null;
        var l = function() {
            var e = 2091639 * a + d * 23283064365386963e-26;
            a = b;
            b = c;
            c = e - (d = e | 0);
            return c
        };
        l.version = "Alea 0.9";
        l.args = i;
        return l
    }
    f["default"] = a
}), 66);
__d("Random", ["Alea", "ServerNonce"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 4294967296,
        h = b("ServerNonce").ServerNonce,
        i;

    function j() {
        i == null && (i = b("Alea")(h));
        return i
    }
    var k = {
        random: function() {
            var b = typeof Uint32Array === "function" ? new Uint32Array(1) : null,
                c = a.crypto || a.msCrypto;
            if (b != null) try {
                var d = c == null ? void 0 : c.getRandomValues;
                if (typeof d === "function") {
                    var e = d.bind(c);
                    return function() {
                        try {
                            e(b)
                        } catch (a) {
                            return j()()
                        }
                        return b[0] / g
                    }
                }
            } catch (a) {}
            return j()
        }(),
        uint32: function() {
            return Math.floor(k.random() * g)
        },
        coinflip: function(a) {
            if (a === 0) return !1;
            return a <= 1 ? !0 : k.random() * a <= 1
        }
    };
    e.exports = k
}), null);
__d("WebSessionDefaultTimeoutMs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 35e3;
    f["default"] = a
}), 66);
__d("CookieConsent", ["InitialCookieConsent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = new Set((g || (g = b("InitialCookieConsent"))).initialConsent),
        i = g.shouldShowCookieBanner;
    a = {
        setConsented: function() {
            h.add(1), i = !1
        },
        hasConsent: function(a) {
            return h.has(a)
        },
        isCookiesBlocked: function() {
            return (g || (g = b("InitialCookieConsent"))).noCookies
        },
        shouldShowCookieBanner: function() {
            return i
        }
    };
    e.exports = a
}), null);
__d("isQuotaExceededError", [], (function(a, b, c, d, e, f) {
    "use strict";

    function b(b, c) {
        return Boolean(c instanceof a.DOMException && (c.code === 22 || c.code === 1014 || c.name === "QuotaExceededError" || c.name === "NS_ERROR_DOM_QUOTA_REACHED") && b && b.length !== 0)
    }
    f["default"] = b
}), 66);
__d("WebStorage", ["CookieConsent", "FBLogger", "err", "isQuotaExceededError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = {},
        j = "localStorage",
        k = "sessionStorage";

    function l(a, b, d) {
        if (c("CookieConsent").isCookiesBlocked() || !c("CookieConsent").hasConsent(1)) return null;
        Object.prototype.hasOwnProperty.call(a, d) || (a[d] = b(d));
        return a[d]
    }

    function m(a) {
        try {
            return window[a]
        } catch (a) {
            c("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message)
        }
        return null
    }

    function n(a) {
        var b = null;
        try {
            b = window[a];
            if (b != null && typeof b.setItem === "function" && typeof b.removeItem === "function") {
                var d = "__test__" + Date.now();
                b.setItem(d, "");
                b.removeItem(d)
            } else return null
        } catch (d) {
            if (c("isQuotaExceededError")(b, d) === !1) {
                c("FBLogger")("web_storage").catching(d).warn("Failed to get WebStorage of type `%s`", a);
                return null
            }
        }
        return b
    }

    function o(a) {
        var b = null;
        try {
            b = window[a];
            if (b != null && typeof b.setItem === "function" && typeof b.removeItem === "function") {
                a = "__test__" + Date.now();
                b.setItem(a, "");
                b.removeItem(a)
            }
        } catch (a) {
            if (c("isQuotaExceededError")(b, a) === !0) return !0
        }
        return !1
    }

    function p(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
        return b
    }

    function a(a, b, d) {
        if (a == null) return new Error("storage cannot be null");
        var e = null;
        try {
            a.setItem(b, d)
        } catch (g) {
            var f = p(a).map(function(b) {
                var c = (a.getItem(b) || "").length;
                return b + "(" + c + ")"
            });
            e = c("err")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", g.name ? g.name + ": " : "", b, d.length, f.join())
        }
        return e
    }
    b = {
        getLocalStorage: function() {
            return l(h, n, j)
        },
        getSessionStorage: function() {
            return l(h, n, k)
        },
        getLocalStorageForRead: function() {
            return l(i, m, j)
        },
        getSessionStorageForRead: function() {
            return l(i, m, k)
        },
        isLocalStorageQuotaExceeded: function() {
            return o(j)
        },
        isSessionStorageQuotaExceeded: function() {
            return o(k)
        },
        setItemGuarded: a,
        clearCaches: function() {
            h = {}, i = {}
        }
    };
    d = b;
    g["default"] = d
}), 98);
__d("WebSession", ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 36,
        i = 6,
        j = Math.pow(h, i);

    function k(a) {
        return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a
    }

    function l(a) {
        if (a == null) return null;
        var b = parseInt(a, 10);
        if ("" + b !== a) {
            c("FBLogger")("web_session").warn("Expected the web session expiry time to parse as an integer. Found `%s`.", String(a));
            return null
        }
        return k(b)
    }

    function m(a) {
        if (a == null) return null;
        if (a.length !== i) {
            c("FBLogger")("web_session").warn("Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.", i, a.length, a);
            return null
        }
        if (/^[a-z0-9]+$/.test(a) === !1) {
            c("FBLogger")("web_session").warn("Expected the web session ID to be a base-%d encoded string. Received `%s`.", h, a);
            return null
        }
        return a
    }

    function n(a) {
        if (a == null) return null;
        if (typeof a !== "string" && a instanceof String === !1) {
            c("FBLogger")("web_session").warn("A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.", a);
            return null
        }
        a = a.split(":");
        var b = a[0];
        a = a[1];
        a = l(a);
        b = m(b);
        return a == null || b == null ? null : {
            expiryTime: a,
            id: b
        }
    }

    function o() {
        var a = Math.floor(d("Random").random() * j);
        a = a.toString(h);
        return "0".repeat(i - a.length) + a
    }
    var p = null;

    function q() {
        p == null && (p = o());
        return p
    }

    function r(a) {
        a === void 0 && (a = Date.now());
        var b = c("WebStorage").getLocalStorageForRead();
        if (b == null) return null;
        b = n(b.getItem("Session"));
        return b && a < b.expiryTime ? b : null
    }

    function s() {
        var a;
        return (a = r()) == null ? void 0 : a.id
    }

    function t() {
        var a = c("WebStorage").getSessionStorageForRead();
        if (a == null) return null;
        a = m(a.getItem("TabId"));
        if (a == null) {
            var b = c("WebStorage").getSessionStorage();
            if (b == null) return null;
            var d = o();
            c("WebStorage").setItemGuarded(b, "TabId", d);
            return d
        }
        return a
    }

    function a(a) {
        if (a !== void 0 && k(a) == null) {
            c("FBLogger")("web_session").warn("`WebSession.extend()` was passed an invalid target expiry time `%s`.", a);
            return
        }
        var b = Date.now();
        a = (a = a) != null ? a : b + c("WebSessionDefaultTimeoutMs");
        var d = r(b);
        if (d && d.expiryTime >= a || a <= b) return;
        b = c("WebStorage").getLocalStorage();
        if (b != null) {
            d = d == null ? o() : d.id;
            c("WebStorage").setItemGuarded(b, "Session", d + ":" + a)
        }
    }

    function b() {
        var a, b, c = q();
        a = (a = s()) != null ? a : "";
        b = (b = t()) != null ? b : "";
        return a + ":" + b + ":" + c
    }

    function e() {
        return q()
    }
    g.extend = a;
    g.getId = b;
    g.getPageId_DO_NOT_USE = e
}), 98);
__d("asyncParams", [], (function(a, b, c, d, e, f) {
    var g = {};

    function a(a, b) {
        g[a] = b
    }

    function b() {
        return g
    }
    f.add = a;
    f.get = b
}), 66);
__d("CSSCore", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function i(a, b) {
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (c instanceof Element) {
            c = c.querySelectorAll(b);
            return Array.prototype.indexOf.call(c, a) !== -1
        }
        return !1
    }

    function j(a, b) {
        /\s/.test(b) && h(0, 11794, b);
        b && (a.classList ? a.classList.add(b) : l(a, b) || (a.className = a.className + " " + b));
        return a
    }

    function k(a, b) {
        /\s/.test(b) && h(0, 11795, b);
        b && (a.classList ? a.classList.remove(b) : l(a, b) && (a.className = a.className.replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")));
        return a
    }

    function a(a, b, c) {
        return (c ? j : k)(a, b)
    }

    function l(a, b) {
        /\s/.test(b) && h(0, 442);
        return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
    }

    function b(a, b) {
        var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || function(b) {
            return i(a, b)
        };
        return c.call(a, b)
    }
    g.addClass = j;
    g.removeClass = k;
    g.conditionClass = a;
    g.hasClass = l;
    g.matchesSelector = b
}), 98);
__d("isSocialPlugin", ["CSSCore"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return !!document.body && d("CSSCore").hasClass(document.body, "plugin")
    }
    g["default"] = a
}), 98);
__d("uniqueRequestID", [], (function(a, b, c, d, e, f) {
    var g = 36,
        h = 1;

    function a() {
        return (h++).toString(g)
    }
    f["default"] = a
}), 66);
__d("getAsyncParams", ["CSRBitMap", "CometPersistQueryParams", "CurrentCommunity", "CurrentUserInitialData", "DTSG", "DTSGUtils", "DTSG_ASYNC", "Env", "ISB", "JSErrorLoggingConfig", "LSD", "ServerJSDefine", "SiteData", "SprinkleConfig", "StaticSiteData", "WebConnectionClassServerGuess", "WebSession", "asyncParams", "isSocialPlugin", "uniqueRequestID"], (function(a, b, c, d, e, f) {
    var g, h, i = b("JSErrorLoggingConfig").sampleWeight,
        j = b("JSErrorLoggingConfig").sampleWeightKey,
        k = {
            locale: !0,
            cxobfus: !0,
            js_debug: !0,
            cquick: !0,
            cquick_token: !0,
            wdplevel: !0,
            prod_graphql: !0,
            sri: !0
        },
        l = {
            ctarget: !0
        };

    function a(a) {
        var c, d, e = babelHelpers["extends"]({}, b("asyncParams").get(), (d = {
            __user: (g || (g = b("CurrentUserInitialData"))).USER_ID,
            __a: 1
        }, d[b("StaticSiteData").jsmod_key] = b("ServerJSDefine").getLoadedModuleHash(), d[b("StaticSiteData").csr_key] = b("CSRBitMap").toCompressedString(), d.__req = b("uniqueRequestID")(), d[b("StaticSiteData").hs_key] = b("SiteData").haste_session, d[b("StaticSiteData").dpr_key] = b("SiteData").pr, d[b("StaticSiteData").connection_class_server_guess_key] = b("WebConnectionClassServerGuess").connectionClass, d.__rev = b("SiteData").client_revision, d.__s = b("WebSession").getId(), d[b("StaticSiteData").haste_session_id_key] = b("SiteData").hsi, d[b("StaticSiteData").comet_key] = (c = b("SiteData").comet_env) != null ? c : b("SiteData").is_comet ? 1 : 0, d));
        b("SiteData").force_blue && (e.force_blue = 1);
        Object.entries(b("CometPersistQueryParams").relative).forEach(function(a) {
            var b = a[0];
            a = a[1];
            a != null && (e[b] = String(a))
        });
        window.location.search.slice(1).split("&").forEach(function(a) {
            a = a.split("=");
            var b = a[0];
            a = a[1];
            (b.substr(0, 4) === "tfc_" || b.substr(0, 4) === "tfi_" || b.substr(0, 3) === "mh_" || k[b] > -1 || l[b] > -1) && (l[b] > -1 ? e[b] = decodeURIComponent(a) : e[b] = a)
        });
        (h || (h = b("Env"))).isCQuick && !e.cquick && (e.cquick = (h || (h = b("Env"))).iframeKey, e.ctarget = h.iframeTarget, e.cquick_token = h.iframeToken);
        if (a == "POST") {
            c = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
            c && (e.fb_dtsg = c, b("SprinkleConfig").param_name && (e[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)));
            b("LSD").token && (e.lsd = b("LSD").token, b("SprinkleConfig").param_name && !c && (e[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
        }
        if (a == "GET") {
            d = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
            d && (e.fb_dtsg_ag = d, b("SprinkleConfig").param_name && (e[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(d)))
        }
        b("ISB").token && (e.fb_isb = b("ISB").token);
        b("CurrentCommunity").getID() !== "0" && (e.__cid = b("CurrentCommunity").getID());
        b("isSocialPlugin")() && (e.__sp = 1);
        if (b("SiteData").spin) {
            e[(c = b("StaticSiteData")).spin_rev_key] = b("SiteData")[c.spin_rev_key];
            e[c.spin_branch_key] = b("SiteData")[c.spin_branch_key];
            e[c.spin_time_key] = b("SiteData")[c.spin_time_key];
            b("SiteData")[b("StaticSiteData").spin_mhenv_key] && (e[b("StaticSiteData").spin_mhenv_key] = b("SiteData")[b("StaticSiteData").spin_mhenv_key])
        }
        i != null && j != null && (e[j] = i);
        return e
    }
    e.exports = a
}), null);
__d("BootloaderEndpoint", ["Bootloader", "BootloaderEndpointConfig", "CSRFGuard", "FBLogger", "HasteResponse", "TimeSlice", "clearImmediate", "fb-error", "getAsyncParams", "getSameOriginTransport", "performanceAbsoluteNow", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("fb-error").ErrorXFBDebug,
        i = b("BootloaderEndpointConfig").endpointURI,
        j = 0,
        k = null,
        l = null,
        m = new Map(),
        n = new Map();

    function o(a) {
        return Array.from(a.keys()).join(",")
    }

    function p(a, c) {
        var d = {};
        a.size && (d.modules = o(a));
        c.size && (d.nb_modules = o(c));
        a = Object.entries(babelHelpers["extends"]({}, d, b("getAsyncParams")("GET"))).map(function(a) {
            var b = a[0];
            a = a[1];
            return encodeURIComponent(b) + "=" + encodeURIComponent(String(a))
        }).join("&");
        return i + (i.includes("?") ? "&" : "?") + a
    }

    function q(a, c) {
        if (a.size === 0 && c.size === 0) return;
        var d = p(a, c),
            e = b("getSameOriginTransport")(),
            f = j++,
            i = (g || (g = b("performanceAbsoluteNow")))();
        e.open("GET", d, !0);
        var k = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
        e.onreadystatechange = function() {
            if (e.readyState !== 4) return;
            k(function() {
                h.addFromXHR(e);
                var g = e.status === 200 ? JSON.parse(b("CSRFGuard").clean(e.responseText)) : null;
                if (g == null) {
                    b("FBLogger")("bootloader").warn('Invalid bootloader response %d, blocking mods: %s; non-blocking mods: %s; "%s"', e.status, o(a), o(c), e.responseText.substr(0, 256));
                    return
                }
                if (g.error) b("FBLogger")("bootloader").warn("Non-fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", o(a), o(c));
                else if (g.__error) {
                    b("FBLogger")("bootloader").warn("Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", o(a), o(c));
                    return
                }
                b("TimeSlice").guard(function() {
                    return r(d, g, a, c, f, i)
                }, "Bootloader receiveEndpointData", {
                    propagationType: b("TimeSlice").PropagationType.CONTINUATION
                })()
            })
        };
        e.send()
    }

    function r(a, c, d, e, f, h) {
        var i = (g || (g = b("performanceAbsoluteNow")))(),
            j = c.serverGenTime,
            k = c.hrp;
        if (k == null) {
            c = c;
            b("FBLogger")("be_null_hrp").mustfix("Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s", o(d), o(e), c.error + ", summary: " + c.errorSummary + ", description: " + c.errorDescription);
            k = c
        }
        b("HasteResponse").handle(k, {
            source: "bootloader_endpoint",
            sourceDetail: JSON.stringify({
                b: Array.from(d.keys()),
                n: Array.from(e.keys())
            }),
            onBlocking: function() {
                var a = [d, e];
                for (var c = 0; c < a.length; c++) {
                    var f = a[c];
                    for (var f = f.values(), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                        b("Bootloader").done(i)
                    }
                }
            },
            onLog: function(c) {
                var g = [d, e];
                for (var k = 0; k < g.length; k++) {
                    var l = g[k];
                    for (var l = l.keys(), m = Array.isArray(l), n = 0, l = m ? l : l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var o;
                        if (m) {
                            if (n >= l.length) break;
                            o = l[n++]
                        } else {
                            n = l.next();
                            if (n.done) break;
                            o = n.value
                        }
                        o = o;
                        b("Bootloader").beDone(o, f, babelHelpers["extends"]({
                            requestStart: h,
                            responseStart: i,
                            serverGenTime: j,
                            uri: a
                        }, c))
                    }
                }
            }
        })
    }

    function s() {
        var a = m,
            c = n;
        b("clearImmediate")(l);
        l = null;
        k = null;
        m = new Map();
        n = new Map();
        q(a, c)
    }
    a = {
        load: function(a, c, d) {
            (c ? m : n).set(a, d);
            if (b("BootloaderEndpointConfig").debugNoBatching) {
                s();
                return
            }
            if (l != null) return;
            k = b("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
            l = b("setImmediateAcrossTransitions")(function() {
                k && k(function() {
                    return s()
                })
            })
        },
        forceFlush: function() {
            k && k(function() {
                return s()
            })
        }
    };
    e.exports = a
}), null);
__d("QPLHasteSupportDataStorage", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
        add: function(a, b) {
            Object.keys(a).forEach(function(c) {
                b && b.entry++;
                if (g[c] == null) {
                    var d = a[c];
                    g[c] = d
                } else b && b.dup_entry++
            })
        },
        get: function(a) {
            return g[a]
        }
    };
    f["default"] = a
}), 66);
__d("bx", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function a(a) {
        var b = h[a];
        if (!b) throw c("unrecoverableViolation")("bx" + ('(...): Unknown file path "' + a + '"'), "staticresources");
        return b
    }
    a.add = function(a, b) {
        var c = !1;
        for (var d in a) b && b.entry++, !(d in h) ? (a[d].loggingID = d, h[d] = a[d]) : b && b.dup_entry++
    };
    a.getURL = function(a) {
        return a.uri
    };
    g["default"] = a
}), 98);
__d("recoverableViolation", ["FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        b = c("FBLogger")(b);
        d ? b = b.catching(d) : b = b.blameToPreviousFrame();
        b.mustfix(a);
        return null
    }
    g["default"] = a
}), 98);
__d("getFalcoLogPolicy_DO_NOT_USE", ["recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            r: 1
        },
        i = {};

    function a(a) {
        var b = i[a];
        if (b == null) {
            c("recoverableViolation")("Failed to find a Haste-supplied log policy for the Falco event ' +\n        'identified by token `" + a + "`. Failing open (ie. with a sampling rate of 1.0).", "staticresources");
            return h
        }
        return b
    }
    a.add = function(a, b) {
        Object.keys(a).forEach(function(c) {
            b && b.entry++, i[c] == null ? i[c] = a[c] : b && b.dup_entry++
        })
    };
    g["default"] = a
}), 98);
__d("ix", ["invariant", "nullthrows"], (function(a, b, c, d, e, f, g, h) {
    var i = {},
        j = new Set();

    function b(b) {
        var d = i[b];
        !d && h(0, 11798, b);
        a.__flight_execution_mode_DO_NOT_USE === "flight" && d.sprited === 1 && j.add(c("nullthrows")(d.origPath, "origPath should be defined on the server in react flight"));
        return d
    }
    b.add = function(a, b) {
        var c = !1;
        for (var d in a) b && b.entry++, !(d in i) ? (a[d].loggingID = d, i[d] = a[d]) : b && b.dup_entry++
    };
    b.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function() {
        a.__flight_execution_mode_DO_NOT_USE === "flight" || h(0, 34547);
        return Array.from(j)
    };
    g["default"] = b
}), 98);
__d("justknobx", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {};
    a = {
        getBool: function(a) {
            h(0, 47459)
        },
        getInt: function(a) {
            h(0, 47459)
        },
        _: function(a) {
            var b = i[a];
            b != null || h(0, 47458, a);
            return b.r
        },
        add: function(a, b) {
            for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("qex", ["invariant", "BanzaiLazyQueue"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {},
        j = {};
    a = {
        _: function(a) {
            var b = i[a];
            b != null || h(0, 11799, a);
            var c = b.r;
            b = b.l;
            b != null && !j[a] && (j[a] = !0, d("BanzaiLazyQueue").queuePost("qex", {
                l: b
            }));
            return c
        },
        add: function(a, b) {
            for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("HasteSupportData", ["ix", "QPLHasteSupportDataStorage", "bx", "getFalcoLogPolicy_DO_NOT_USE", "gkx", "justknobx", "qex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a, b) {
        var d = a.bxData,
            e = a.clpData,
            f = a.gkxData,
            g = a.ixData,
            i = a.qexData,
            j = a.qplData;
        a = a.justknobxData;
        d != null && c("bx").add(d, b);
        e != null && c("getFalcoLogPolicy_DO_NOT_USE").add(e, b);
        f != null && c("gkx").add(f, b);
        g != null && h.add(g, b);
        i != null && c("qex").add(i, b);
        j != null && c("QPLHasteSupportDataStorage").add(j, b);
        a != null && c("justknobx").add(a, b)
    }
    g.handle = a
}), 98);
__d("$-core", ["fb-error-lite"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return h(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function b(a) {
        return h(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function h(a, b) {
        if (!b) {
            a = c("fb-error-lite").err('Tried to get element with id of "%s" but it is not present on the page', String(a));
            a.taalOpcodes = a.taalOpcodes || [];
            a.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FILE];
            throw a
        }
        return b
    }
    a.fromIDOrElement = b;
    g["default"] = a
}), 98);
__d("$", ["$-core"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("$-core")
}), 98);
__d("CSS", ["$", "CSSCore"], (function(a, b, c, d, e, f, g) {
    var h = typeof window != "undefined" ? window.CSS : null,
        i = "hidden_elem";
    h = h && h.supports.bind(h);

    function a(a, b) {
        c("$").fromIDOrElement(a).className = b || "";
        return a
    }

    function j(a, b) {
        return a instanceof Document || a instanceof Text ? !1 : d("CSSCore").hasClass(c("$").fromIDOrElement(a), b)
    }

    function b(a, b) {
        return a instanceof Document || a instanceof Text ? !1 : d("CSSCore").matchesSelector(c("$").fromIDOrElement(a), b)
    }

    function k(a, b) {
        return d("CSSCore").addClass(c("$").fromIDOrElement(a), b)
    }

    function l(a, b) {
        return d("CSSCore").removeClass(c("$").fromIDOrElement(a), b)
    }

    function m(a, b, e) {
        return d("CSSCore").conditionClass(c("$").fromIDOrElement(a), b, !!e)
    }

    function n(a, b) {
        return m(a, b, !j(a, b))
    }

    function e(a) {
        return !j(a, i)
    }

    function f(a) {
        return k(a, i)
    }

    function o(a) {
        return l(a, i)
    }

    function p(a) {
        return n(a, i)
    }

    function q(a, b) {
        return m(a, i, !b)
    }
    g.supports = h;
    g.setClass = a;
    g.hasClass = j;
    g.matchesSelector = b;
    g.addClass = k;
    g.removeClass = l;
    g.conditionClass = m;
    g.toggleClass = n;
    g.shown = e;
    g.hide = f;
    g.show = o;
    g.toggle = p;
    g.conditionShow = q
}), 98);
__d("Parent", ["CSS"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        b = b.toUpperCase();
        a = i(a, function(a) {
            return a.nodeName === b
        });
        return a instanceof Element ? a : null
    }

    function b(a, b) {
        a = i(a, function(a) {
            return a instanceof Element && d("CSS").hasClass(a, b)
        });
        return a instanceof Element ? a : null
    }

    function c(a, b) {
        a = a;
        if (typeof a.matches === "function") {
            while (a && a !== document && !a.matches(b)) a = a.parentNode;
            return a instanceof Element ? a : null
        } else if (typeof a.msMatchesSelector === "function") {
            while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
            return a instanceof Element ? a : null
        } else return h(a, b)
    }

    function h(a, b) {
        a = a;
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (!(c instanceof Element) && !(c instanceof Document)) return null;
        c = c.querySelectorAll(b);
        while (a) {
            if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
            a = a.parentNode
        }
        return a instanceof Element ? a : null
    }

    function e(a, b) {
        a = i(a, function(a) {
            return a instanceof Element && !!a.getAttribute(b)
        });
        return a instanceof Element ? a : null
    }

    function i(a, b) {
        a = a;
        while (a) {
            if (b(a)) return a;
            a = a.parentNode
        }
        return null
    }
    g.byTag = a;
    g.byClass = b;
    g.bySelector = c;
    g.bySelector_SLOW = h;
    g.byAttribute = e;
    g.find = i
}), 98);
__d("ContextualComponent", ["Parent"], (function(a, b, c, d, e, f, g) {
    a = function() {
        a.forNode = function(b) {
            return a.$1.get(b) || null
        };
        a.closestToNode = function(b) {
            b = d("Parent").find(b, function(b) {
                return !!a.forNode(b)
            });
            return b ? a.forNode(b) : null
        };
        a.register = function(b) {
            return new a(b)
        };

        function a(a) {
            var b = a.element,
                c = a.isRoot;
            a = a.parent;
            this.$2 = c;
            this.$3 = b;
            this.$4 = a;
            this.$5 = new Set();
            this.$6 = [];
            this.$7 = [];
            this.$8()
        }
        var b = a.prototype;
        b.onCleanup = function(a) {
            this.$6.push(a)
        };
        b.onUnmount = function(a) {
            this.$7.push(a)
        };
        b.cleanup = function() {
            this.$5.forEach(function(a) {
                return a.cleanup()
            }), this.$6.forEach(function(a) {
                return a()
            }), this.$6 = []
        };
        b.unmount = function() {
            this.cleanup();
            this.$5.forEach(function(a) {
                return a.unmount()
            });
            this.$7.forEach(function(a) {
                return a()
            });
            this.$7 = [];
            var b = this.$4;
            b && (a.$1["delete"](this.$3), b.$9(this))
        };
        b.reinitialize = function() {
            var b = this.$4;
            b && (b.$9(this), this.$4 = void 0);
            a.$1["delete"](this.$3);
            this.$8()
        };
        b.$8 = function() {
            if (!this.$2 && !this.$4) {
                var b = a.closestToNode(this.$3);
                b && (this.$4 = b)
            }
            this.$4 && this.$4.$10(this);
            a.$1.set(this.$3, this)
        };
        b.$10 = function(a) {
            this.$5.add(a)
        };
        b.$9 = function(a) {
            this.$5["delete"](a)
        };
        return a
    }();
    a.$1 = new Map();
    g["default"] = a
}), 98);
__d("__debug", [], (function(a, b, c, d, e, f) {
    a = {};
    f["default"] = a
}), 66);
__d("ServerJS", ["ContextualComponent", "ErrorGuard", "ServerJSDefine", "__debug", "err", "ge", "replaceTransportMarkers"], (function(a, b, c, d, e, f) {
    var g, h = 1,
        i = 2,
        j = 16,
        k = 0;
    a = function() {
        "use strict";

        function a() {
            this.$2 = {}, this.$1 = null, this.$4 = {}, this.$3 = void 0
        }
        var c = a.prototype;
        c.handle = function(a, b) {
            return this.$5(a, b, m)
        };
        c.handleWithCustomApplyEach = function(a, b, c) {
            this.$5(b, c, a)
        };
        c.$5 = function(a, c, d) {
            this.$3 = c;
            if (a.__guard != null) throw b("err")("ServerJS.handle called on data that has already been handled");
            a.__guard = !0;
            d(a.define || [], this.$6, this);
            d(a.markup || [], this.$7, this);
            d(a.elements || [], this.$8, this);
            this.$9(a.contexts || []);
            d(a.instances || [], this.$10, this);
            var e = d(a.pre_display_requires || [], this.$11, this);
            e = e.concat(d(a.require || [], this.$11, this));
            return {
                cancel: function() {
                    e.forEach(function(a) {
                        a && a.cancel()
                    })
                }
            }
        };
        c.handlePartial = function(a, b) {
            var c = this;
            (a.instances || []).forEach(function(a) {
                p(c.$2, a)
            });
            (a.markup || []).forEach(function(a) {
                o(c.$2, a)
            });
            (a.elements || []).forEach(function(a) {
                o(c.$2, a)
            });
            return this.handle(a, b)
        };
        c.setRelativeTo = function(a) {
            this.$1 = a;
            return this
        };
        c.cleanup = function(a) {
            var c = Object.keys(this.$2);
            a ? d.call(null, c, a.guard(function() {}, "SeverJS Cleanup requireLazy", {
                propagationType: a.PropagationType.ORPHAN
            })) : d.call(null, c, function() {});
            this.$2 = {};

            function f(c) {
                var d = this.$4[c],
                    a = d[0],
                    f = d[1];
                d = d[2];
                delete this.$4[c];
                f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
                a = b("__debug").debugUnresolvedDependencies([a, c]);
                throw l(b("err")("%s did not fire because it has missing dependencies.\n%s", f, a), d)
            }
            for (var h in this.$4)(g || (g = b("ErrorGuard"))).applyWithGuard(f, this, [h], {
                name: "ServerJS:cleanup id: " + h,
                project: "ServerJSCleanup"
            })
        };
        c.$6 = function(a, c, d, e) {
            return (g || (g = b("ErrorGuard"))).applyWithGuard(b("ServerJSDefine").handleDefine, b("ServerJSDefine"), [a, c, d, e, this.$1], {
                name: "JS::define"
            })
        };
        c.$11 = function(a, c, d, e) {
            return (g || (g = b("ErrorGuard"))).applyWithGuard(this.$12, this, [a, c, d, e], {
                name: c != null ? "JS::call" : "JS::requireModule"
            })
        };
        c.$12 = function(a, c, d, e) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var f = a.name,
                m = a.hash,
                n;
            typeof c === "object" ? a = c : (a = d, n = c);
            d = [f].concat(a || []);
            var o;
            n != null ? o = "__call__" + f + "." + n : o = "__requireModule__" + f;
            o += "__" + k++;
            this.$4[o] = [f, n, m];
            var p = this.$3 && this.$3.bigPipeContext,
                q = (g || (g = b("ErrorGuard"))).guard(function(a) {
                    a = b.call(null, f);
                    delete this.$4[o];
                    e && b("replaceTransportMarkers")({
                        relativeTo: this.$1,
                        bigPipeContext: p
                    }, e);
                    if (n != null) {
                        if (!a[n]) throw l(b("err")('Module %s has no method "%s"', f, n), m);
                        a[n].apply(a, e || []);
                        q.__SMmeta = a[n].__SMmeta || {};
                        q.__SMmeta.module = q.__SMmeta.module || f;
                        q.__SMmeta.name = q.__SMmeta.name || n
                    }
                }.bind(this), {
                    name: n != null ? "JS::call('" + f + "', '" + n + "', ...)" : "JS::requireModule('" + f + "')"
                });
            c = define(o, d, q, h | j | i, this, 1, this.$3);
            return c
        };
        c.$10 = function(a, c, d, e) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$13, this, [a, c, d, e], {
                name: "JS::instance"
            })
        };
        c.$13 = function(a, c, d, e) {
            var f = null;
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var g = a.name;
            a = a.hash;
            if (c) {
                var h = this.$3 && this.$3.bigPipeContext;
                f = function() {
                    var a = b.call(null, c[0]);
                    b("replaceTransportMarkers")({
                        relativeTo: this.$1,
                        bigPipeContext: h
                    }, d);
                    var e = Object.create(a.prototype);
                    a.apply(e, d);
                    return e
                }.bind(this)
            }
            define(g, c, f, i | j, null, e)
        };
        c.$7 = function(a, c, d) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$14, this, [a, c, d], {
                name: "JS::markup"
            })
        };
        c.$14 = function(a, c, d) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var e = a.name;
            a = a.hash;
            define(e, ["HTML"], function(b) {
                try {
                    return b.replaceJSONWrapper(c).getRootNode()
                } catch (b) {
                    throw l(b, a)
                }
            }, j, null, d)
        };
        c.$8 = function(a, c, d, e) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$15, this, [a, c, d, e], {
                name: "JS::element"
            })
        };
        c.$15 = function(a, c, d, e) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var f = a.name,
                g = a.hash;
            if (c === null && d != null) {
                define(f, null, null, j, null, d);
                return
            }
            a = [];
            var i = j;
            d = d || 0;
            e != null && (a.push(e), i |= h, d++);
            define(f, a, function(a) {
                a = b("ge")(c, a);
                if (!a) {
                    var d = "";
                    throw l(b("err")('Could not find element "%s"%s', c, d), g)
                }
                return a
            }, i, null, d)
        };
        c.$9 = function(a) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$16, this, [a], {
                name: "ContextualComponents"
            })
        };
        c.$16 = function(a) {
            var c = this,
                d = this.$3 && this.$3.bigPipeContext;
            a.map(function(a) {
                b("replaceTransportMarkers")({
                    relativeTo: c.$1,
                    bigPipeContext: d
                }, a);
                var e = a[0];
                return [a, n(e)]
            }).sort(function(a, b) {
                return a[1] - b[1]
            }).forEach(function(a) {
                a = a[0];
                var c = a[0];
                a = a[1];
                b("ContextualComponent").register({
                    element: c,
                    isRoot: a
                })
            })
        };
        return a
    }();

    function l(a, b) {
        a.serverHash = b;
        return a
    }

    function m(a, b, c) {
        return a.map(function(a) {
            return b.apply(c, a)
        })
    }

    function n(a) {
        var b = 0;
        a = a;
        while (a) a = a.parentElement, b++;
        return b
    }

    function o(c, a) {
        var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
        d = d.name;
        d in c || (a[2] = (a[2] || 0) + 1);
        c[d] = !0
    }

    function p(c, a) {
        var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
        d = d.name;
        d in c || (a[3] = (a[3] || 0) + 1);
        c[d] = !0
    }
    e.exports = a
}), null);
__d("HasteResponse", ["Bootloader", "BootloaderEvents", "ClientConsistencyEventEmitter", "HasteSupportData", "ServerJS", "TimeSlice", "__debug", "fb-error", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("fb-error").getSimpleHash,
        i = new Set(),
        j = {
            handleSRPayload: function(a, c) {
                var d = a.hsdp;
                a = a.hblp;
                d && b("HasteSupportData").handle(d, c == null ? void 0 : c.hsdp);
                a && b("Bootloader").handlePayload(a, c == null ? void 0 : c.hblp);
                (a == null ? void 0 : a.consistency) != null && b("ClientConsistencyEventEmitter").emit("newEntry", a.consistency)
            },
            handle: function(a, c) {
                var d = a.jsmods,
                    e = a.allResources;
                a = a.hsrp;
                var f = c.source,
                    k = c.sourceDetail,
                    l = c.onBlocking,
                    m = c.onLog;
                c = c.onAll;
                var n = (g || (g = b("performanceAbsoluteNow")))(),
                    o;
                if (k == null) o = !0;
                else {
                    var p = h(f, k);
                    i.has(p) ? o = !1 : (o = !0, i.add(p))
                }
                var q = {
                    hsdp: {
                        entry: 0,
                        dup_entry: 0
                    },
                    hblp: {
                        rsrc: 0,
                        dup_rsrc: 0,
                        comp: 0,
                        dup_comp: 0
                    },
                    sjsp: {
                        define: 0,
                        dup_user_define: 0,
                        dup_system_define: 0,
                        require: 0
                    }
                };
                a && j.handleSRPayload(a, q);
                var r = 0,
                    s = 0;
                b("Bootloader").loadResources((p = e) != null ? p : [], {
                    onBlocking: function() {
                        q.sjsp.require += ((d == null ? void 0 : d.require) || []).length;
                        q.sjsp.define += ((d == null ? void 0 : d.define) || []).length;
                        var a = b("__debug").getDupCount(),
                            c = a[0];
                        a = a[1];
                        q.sjsp.dup_user_define -= c;
                        q.sjsp.dup_system_define -= a;
                        r = (g || (g = b("performanceAbsoluteNow")))();
                        new(b("ServerJS"))().handle(d || {});
                        s = g();
                        var e = b("__debug").getDupCount();
                        c = e[0];
                        a = e[1];
                        q.sjsp.dup_user_define += c;
                        q.sjsp.dup_system_define += a;
                        l == null ? void 0 : l()
                    },
                    onAll: c,
                    onLog: function(a) {
                        a = {
                            source: f,
                            sourceDetail: k,
                            isFirstIdentical: o,
                            timesliceContext: b("TimeSlice").getContext(),
                            startTime: n,
                            logTime: (g || (g = b("performanceAbsoluteNow")))(),
                            jsmodsStart: r,
                            jsmodsEnd: s,
                            rsrcs: a,
                            payloadStats: q
                        };
                        m == null ? void 0 : m(a);
                        b("BootloaderEvents").notifyHasteResponse(a)
                    }
                }, "HasteResponse:" + f + ":" + ((a = k) != null ? a : "<unknown>"))
            }
        };
    e.exports = j
}), null);
__d("requireDeferred", ["RequireDeferredReference"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {};

    function i(a, b) {
        h[a] = b
    }

    function j(a) {
        return h[a]
    }

    function a(a) {
        var b = j(a);
        if (b) return b;
        b = new(c("RequireDeferredReference"))(a);
        i(a, b);
        return b
    }
    g["default"] = a
}), 98);
__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("requireDeferred")("BanzaiScuba_DEPRECATED").__setRef("CookieStore");

    function i(a, b, c, d, e, f, g, h) {
        return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f != void 0 ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "") + (h ? "; SameSite=" + h : "")
    }

    function j(a, b, c) {
        return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c
    }

    function k() {
        if (b("CookieCoreLoggingConfig").sampleRate > 0) {
            var a = (g || (g = b("performanceNow")))(),
                c = document.cookie;
            a = g() - a;
            var d = a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs && b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
            d && b("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", b("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            return c
        } else return document.cookie
    }
    var l = function() {
        function a() {
            this.$1 = 0
        }
        var c = a.prototype;
        c.setCookie = function(a, b, c, d, e, f, g, h) {
            document.cookie = i(a, b, c, d, e, f, g, h)
        };
        c.clearCookie = function(a, b, c) {
            document.cookie = j(a, b, c)
        };
        c.getCookie = function(a) {
            var c;
            this.$1++;
            var d = (g || (g = b("performanceNow")))();
            c = (c = k()) == null ? void 0 : c.match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
            a = g() - d;
            d = 1 / b("CookieCoreLoggingConfig").sampleRateClassic;
            var e = b("Random").coinflip(d);
            e && m(d, "classic", a, this.$1);
            return c ? decodeURIComponent(c[1]) : null
        };
        return a
    }();

    function m(a, b, c, d, e, f) {
        h.onReady(function(g) {
            g = new g("cookie_perf", null, {
                addBrowserFields: !0
            });
            g.addInteger("sample_rate", Math.floor(a));
            g.addNormal("type", b);
            g.addInteger("duration_usec", c * 1e3);
            g.addInteger("reads", d);
            typeof e === "number" && g.addInteger("misses", e);
            typeof f === "boolean" && g.addNormal("hit", f);
            g.post()
        })
    }
    var n = 10 * 1e3,
        o = function() {
            function a() {
                this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0
            }
            var c = a.prototype;
            c.setCookie = function(a, b, c, d, e, f, g, h) {
                document.cookie = i(a, b, c, d, e, f, g, h), this.$1[b] = {
                    value: c,
                    updated: a
                }
            };
            c.clearCookie = function(a, b, c) {
                document.cookie = j(a, b, c), this.$1[a] = {
                    value: null,
                    updated: Date.now()
                }
            };
            c.getCookie = function(a) {
                var c = (g || (g = b("performanceNow")))();
                a = this.$5(a);
                var d = a.cookie;
                a = a.hit;
                var e = 1 / b("CookieCoreLoggingConfig").sampleRateFastStale,
                    f = b("Random").coinflip(e);
                if (f) {
                    f = (g || (g = b("performanceNow")))() - c;
                    m(e, "fast_stale", f, this.$3, this.$4, a)
                }
                return d
            };
            c.$5 = function(a) {
                var b = Date.now(),
                    c = this.$1[a];
                if (!c) {
                    if (this.$2 + n < b) {
                        this.$6();
                        return {
                            cookie: this.$5(a).cookie,
                            hit: !1
                        }
                    }
                    this.$3++;
                    return {
                        cookie: null,
                        hit: !0
                    }
                }
                if (c.updated + n < b) {
                    this.$6();
                    return {
                        cookie: this.$5(a).cookie,
                        hit: !1
                    }
                }
                this.$3++;
                return {
                    cookie: c.value,
                    hit: !0
                }
            };
            c.$6 = function() {
                var a;
                this.$4++;
                a = (a = (a = k()) == null ? void 0 : a.split(";")) != null ? a : [];
                this.$2 = Date.now();
                this.$1 = {};
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d = d.match("\\s*([^=]+)=(.*)");
                    if (!d) continue;
                    this.$1[d[1]] = {
                        value: decodeURIComponent(d[2]),
                        updated: this.$2
                    }
                }
            };
            return a
        }();
    e.exports = {
        newCookieStore: function() {
            return b("gkx")("676837") ? new o() : new l()
        },
        CookieCacheForTest: o,
        CookieStoreSlowForTest: l
    }
}), null);
__d("CookieCore", ["CookieCoreConfig", "CookieStore"], (function(a, b, c, d, e, f, g) {
    var h = /^.*(\.(facebook|messenger|oculus|instagram|workplace)\..*)$/i,
        i = /_js_(.*)/,
        j;

    function k() {
        j || (j = d("CookieStore").newCookieStore());
        return j
    }

    function l() {
        if (h.test(window.location.hostname)) return window.location.hostname.replace(h, "$1");
        else return window.location.hostname.replace(/^.*(\.(?:[^.]+)\.(?:[^.]+))$/, "$1")
    }

    function m(a) {
        return window.self != window.top ? !1 : !0
    }

    function n(a, b) {
        if (!s(a)) return;
        o(a, b, u(a), v(a), t(a), w(a))
    }

    function o(a, b, c, d, e, f) {
        var g = Date.now();
        if (c != null)
            if (c > g) c -= g;
            else if (c == 1) {
            p(a, d);
            return
        }
        k().setCookie(g, a, b, d, l(), c, e, f)
    }

    function a(a, b) {
        if (!m(a)) return;
        n(a, b)
    }

    function b(a, b, c, d, e) {
        if (!m(a)) return;
        o(a, b, c, d, e)
    }

    function p(a, b) {
        b === void 0 && (b = "/"), b = b || "/", k().clearCookie(a, b, l())
    }

    function e(a) {
        return !s(a) ? null : k().getCookie(a)
    }

    function q(a) {
        return {
            insecure: a.i || !1,
            path: a.p || "/",
            ttlSeconds: a.t || 0,
            sameSite: a.s || "None"
        }
    }

    function r(a) {
        if (c("CookieCoreConfig")[a] !== void 0) return q(c("CookieCoreConfig")[a]);
        a = a.match(i);
        return a && a.length > 1 ? r(a[1]) : null
    }

    function s(a) {
        return r(a) !== null
    }

    function t(a) {
        a = r(a);
        return a == null ? !0 : !a.insecure
    }

    function u(a) {
        a = r(a);
        return a == null ? null : a.ttlSeconds * 1e3
    }

    function v(a) {
        a = r(a);
        return a == null ? "/" : a.path
    }

    function w(a) {
        a = r(a);
        return a == null || a.sameSite == null ? null : a.sameSite
    }
    g.set = n;
    g.setWithoutChecks = o;
    g.setIfFirstPartyContext = a;
    g.setWithoutChecksIfFirstPartyContext = b;
    g.clear = p;
    g.get = e
}), 98);
__d("Cookie", ["Bootloader", "CookieConsent", "CookieCore"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        if (!d("CookieConsent").hasConsent(1)) {
            c("Bootloader").loadModules(["ODS"], function(b) {
                b.bumpEntityKey(2966, "defer_cookies", "set." + a)
            }, "Cookie");
            return !1
        }
        return !0
    }

    function i() {
        return !d("CookieConsent").isCookiesBlocked()
    }

    function a(a, b) {
        if (!i() || !h(a)) return;
        d("CookieCore").set(a, b)
    }

    function b(a, b) {
        if (!i()) return;
        d("CookieCore").set(a, b)
    }

    function e(a, b, c, e, f) {
        if (!i() || !h(a)) return;
        d("CookieCore").setWithoutChecks(a, b, c, e, f)
    }
    f = babelHelpers["extends"]({}, d("CookieCore"), {
        set: a,
        setWithoutChecks: e,
        setWithoutCheckingUserConsent_DANGEROUS: b
    });
    g["default"] = f
}), 98);
__d("DOMEvent", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a) {
            this.event = a || window.event, typeof this.event.srcElement !== "unknown" || h(0, 5798), this.target = this.event.target || this.event.srcElement
        }
        var b = a.prototype;
        b.preventDefault = function() {
            var a = this.event;
            a.preventDefault ? (a.preventDefault(), "defaultPrevented" in a || (a.defaultPrevented = !0)) : a.returnValue = !1;
            return this
        };
        b.isDefaultPrevented = function() {
            var a = this.event;
            return "defaultPrevented" in a ? a.defaultPrevented : a.returnValue === !1
        };
        b.stopPropagation = function() {
            var a = this.event;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        };
        b.kill = function() {
            this.stopPropagation().preventDefault();
            return this
        };
        a.killThenCall = function(b) {
            return function(c) {
                new a(c).kill();
                return b()
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("dedupString", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b;
        return Object.keys((b = {}, b[a] = 0, b))[0]
    }
    f["default"] = a
}), 66);
__d("wrapFunction", [], (function(a, b, c, d, e, f) {
    var g = {};

    function a(a, b, c) {
        var d = b in g ? g[b](a, c) : a;
        return function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            return d.apply(this, b)
        }
    }
    a.setWrapper = function(a, b) {
        g[b] = a
    };
    f["default"] = a
}), 66);
__d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h = !1;
    try {
        a = Object.defineProperty({}, "passive", {
            get: function() {
                h = !0
            }
        });
        window.addEventListener("test", null, a)
    } catch (a) {}
    var i, j;
    window.addEventListener ? (i = function(a, c, d, e) {
        e === void 0 && (e = !1), d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)), a.addEventListener(c, d.wrapper, h ? e : !1)
    }, j = function(a, b, c, d) {
        d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1)
    }) : window.attachEvent ? (i = function(a, c, d, e) {
        e === void 0, d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c), a.attachEvent || g(0, 2798), a.attachEvent("on" + c, d.wrapper)
    }, j = function(a, b, c, d) {
        d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper)
    }) : j = i = b("emptyFunction");
    c = {
        add: function(a, b, c, d) {
            d === void 0 && (d = !1);
            i(a, b, c, d);
            return {
                remove: function() {
                    j(a, b, c, d)
                }
            }
        },
        remove: j
    };
    e.exports = c
}), null);
__d("isNode", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b;
        b = a != null ? (b = a.ownerDocument) != null ? b : a : document;
        b = (b = b.defaultView) != null ? b : window;
        return !!(a != null && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
    }
    f["default"] = a
}), 66);
__d("isTextNode", ["isNode"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return c("isNode")(a) && a.nodeType == 3
    }
    g["default"] = a
}), 98);
__d("containsNode", ["isTextNode"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        if (!a || !b) return !1;
        else if (a === b) return !0;
        else if (c("isTextNode")(a)) return !1;
        else if (c("isTextNode")(b)) return h(a, b.parentNode);
        else if ("contains" in a) return a.contains(b);
        else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(b) & 16);
        else return !1
    }
    g["default"] = h
}), 98);
__d("createArrayFromMixed", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function i(a) {
        var b = a.length;
        !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || h(0, 3914);
        typeof b === "number" || h(0, 3915);
        b === 0 || b - 1 in a || h(0, 3916);
        typeof a.callee !== "function" || h(0, 3917);
        if (a.hasOwnProperty) try {
            return Array.prototype.slice.call(a)
        } catch (a) {}
        var c = Array(b);
        for (var d = 0; d < b; d++) c[d] = a[d];
        return c
    }

    function j(a) {
        return !!a && (typeof a === "object" || typeof a === "function") && "length" in a && !("setInterval" in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee" in a || "item" in a)
    }

    function a(a) {
        if (!j(a)) return [a];
        else if (Array.isArray(a)) return a.slice();
        else return i(a)
    }
    g["default"] = a
}), 98);
__d("isElementNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 1
    }
    e.exports = a
}), null);
__d("DOMQuery", ["CSS", "FBLogger", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "ifRequired", "isElementNode", "isNode"], (function(a, b, c, d, e, f, g) {
    var h = /^\.-?[_a-zA-Z]+[\w-]*$/;

    function i(a, b) {
        return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
    }

    function a(a, b) {
        a = j(a, b);
        return a[0]
    }

    function b(a, b, c) {
        b = j(a, b);
        a = j(a, c);
        b.length === 1 && a.length === 1 && b[0] === a[0] ? c = b : c = b.concat(a);
        return c[0]
    }

    function j(a, b) {
        if (!a || !a.getElementsByTagName) return [];
        b = b.split(" ");
        var e = [a];
        for (var f = 0; f < b.length; f++) {
            if (e.length === 0) break;
            if (b[f] === "") continue;
            var g = b[f],
                j = b[f],
                k = [],
                l = !1;
            if (g.charAt(0) == "^")
                if (f === 0) l = !0, g = g.slice(1);
                else return [];
            g = g.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
            g = g.split(" ");
            var m = g[0] || "*",
                n = m == "*",
                o = g[1] && g[1].charAt(0) == "#";
            if (o) {
                o = c("ge")(g[1].slice(1), a, m);
                if (o && (n || o.tagName.toLowerCase() == m))
                    for (var p = 0; p < e.length; p++)
                        if (l && c("containsNode")(o, e[p])) {
                            k = [o];
                            break
                        } else if (document == e[p] || c("containsNode")(e[p], o) && e[p] !== o) {
                    k = [o];
                    break
                }
            } else {
                o = [];
                p = e.length;
                var q, r = !l && j.indexOf("[") < 0 && document.querySelectorAll;
                for (var s = 0; s < p; s++) {
                    if (l) {
                        q = [];
                        var t = e[s].parentNode;
                        while (c("isElementNode")(t))(n || t.tagName.toLowerCase() == m) && q.push(t), t = t.parentNode
                    } else r ? h.test(j) ? q = e[s].getElementsByClassName(j.substring(1)) : q = e[s].querySelectorAll(j) : q = e[s].getElementsByTagName(m);
                    t = q.length;
                    for (var u = 0; u < t; u++) o.push(q[u])
                }
                if (!r)
                    for (var q = 1; q < g.length; q++) {
                        t = g[q];
                        u = t.charAt(0) == ".";
                        n = t.substring(1);
                        for (s = 0; s < o.length; s++) {
                            p = o[s];
                            if (!p || p.nodeType !== 1) continue;
                            if (u) {
                                d("CSS").hasClass(p, n) || delete o[s];
                                continue
                            } else {
                                j = t.slice(1, t.length - 1);
                                m = j.indexOf("=");
                                if (m < 0) {
                                    if (!i(p, j)) {
                                        delete o[s];
                                        continue
                                    }
                                } else {
                                    r = j.substr(0, m);
                                    j = j.substr(m + 1);
                                    j = j.slice(1, j.length - 1);
                                    if (p.getAttribute(r) != j) {
                                        delete o[s];
                                        continue
                                    }
                                }
                            }
                        }
                    }
                for (s = 0; s < o.length; s++)
                    if (o[s]) {
                        k.push(o[s]);
                        if (l) break
                    }
            }
            e = k
        }
        return e
    }

    function e() {
        var a = window.getSelection;
        if (a) return a() + "";
        else {
            a = document.selection;
            if (a) return a.createRange().text
        }
        return null
    }

    function f(a, b) {
        (typeof a === "string" || typeof b === "string") && c("FBLogger")("dom_query").info("Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead");
        return c("containsNode")(c("ge")(a), c("ge")(b))
    }

    function k() {
        var a = c("ifRequired")("Quickling", function(a) {
            return a.isActive() ? c("ge")("content") : null
        });
        return a || document.body
    }

    function l(a, b) {
        b = c("createArrayFromMixed")(b).join("|").toUpperCase().split("|");
        b = c("createObjectFrom")(b);
        return c("isNode")(a) && a.nodeName in b
    }

    function m(a) {
        return l(a, ["input", "textarea"]) || a.contentEditable === "true"
    }
    g.find = a;
    g.findPushSafe = b;
    g.scry = j;
    g.getSelection = e;
    g.contains = f;
    g.getRootElement = k;
    g.isNodeOfType = l;
    g.isInputNode = m
}), 98);
__d("DataStore", ["DataStoreConfig", "gkx", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("DataStoreConfig").expandoKey,
        i = b("DataStoreConfig").useExpando,
        j = b("gkx")("1073500") && window.WeakMap ? new window.WeakMap() : null,
        k = {},
        l = 1;

    function m(a) {
        if (typeof a === "string") return "str_" + a;
        else {
            var b;
            return "elem_" + ((b = a.__FB_TOKEN) != null ? b : a.__FB_TOKEN = [l++])[0]
        }
    }

    function n(a) {
        if (j != null && typeof a === "object") {
            j.get(a) === void 0 && j.set(a, {});
            return j.get(a)
        } else if (i && typeof a === "object") return a[h] || (a[h] = {});
        a = m(a);
        return k[a] || (k[a] = {})
    }
    var o = {
        set: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
            var d = n(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[b];
            if (e === void 0 && a.getAttribute != null)
                if (a.hasAttribute != null && !a.hasAttribute("data-" + b)) e = void 0;
                else {
                    a = a.getAttribute("data-" + b);
                    e = null === a ? void 0 : a
                }
            c !== void 0 && e === void 0 && (e = d[b] = c);
            return e
        },
        remove: function(a, c) {
            if (!a) throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[c];
            delete d[c];
            (g || (g = b("isEmpty")))(d) && o.purge(a);
            return e
        },
        purge: function(a) {
            if (j != null && typeof a === "object") return j["delete"](a);
            else i && typeof a === "object" ? delete a[h] : delete k[m(a)]
        },
        _storage: k
    };
    e.exports = o
}), null);
__d("EventProfiler", ["cr:708886"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:708886")
}), 98);
__d("Scroll", [], (function(a, b, c, d, e, f) {
    function g(a, b) {
        return !!b && (a === b.documentElement || a === b.body)
    }

    function a(a) {
        var b;
        if (a == null) return 0;
        var c = a.ownerDocument;
        return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollTop) || 0 : a.scrollTop || 0
    }

    function b(a, b) {
        if (a == null) return;
        var c = a.ownerDocument;
        g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollTop = b || 0)) : a.scrollTop = b || 0
    }

    function c(a) {
        var b, c = a.ownerDocument;
        return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollLeft) || 0 : a.scrollLeft || 0
    }

    function d(a, b) {
        var c = a.ownerDocument;
        g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollLeft = b || 0)) : a.scrollLeft = b || 0
    }
    f.getTop = a;
    f.setTop = b;
    f.getLeft = c;
    f.setLeft = d
}), 66);
__d("VersionRange", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = /\./,
        j = /\|\|/,
        k = /\s+\-\s+/,
        l = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        m = /^(\d*)(.*)/;

    function n(a, b) {
        a = a.split(j);
        if (a.length > 1) return a.some(function(a) {
            return E.contains(a, b)
        });
        else return o(a[0].trim(), b)
    }

    function o(a, b) {
        a = a.split(k);
        a.length > 0 && a.length <= 2 || h(0, 11800);
        if (a.length === 1) return p(a[0], b);
        else {
            var c = a[0];
            a = a[1];
            y(c) && y(a) || h(0, 11801);
            return p(">=" + c, b) && p("<=" + a, b)
        }
    }

    function p(a, b) {
        a = a.trim();
        if (a === "") return !0;
        b = b.split(i);
        a = w(a);
        var c = a.modifier;
        a = a.rangeComponents;
        switch (c) {
            case "<":
                return q(b, a);
            case "<=":
                return r(b, a);
            case ">=":
                return t(b, a);
            case ">":
                return u(b, a);
            case "~":
            case "~>":
                return v(b, a);
            default:
                return s(b, a)
        }
    }

    function q(a, b) {
        return D(a, b) === -1
    }

    function r(a, b) {
        a = D(a, b);
        return a === -1 || a === 0
    }

    function s(a, b) {
        return D(a, b) === 0
    }

    function t(a, b) {
        a = D(a, b);
        return a === 1 || a === 0
    }

    function u(a, b) {
        return D(a, b) === 1
    }

    function v(a, b) {
        var c = b.slice();
        b = b.slice();
        b.length > 1 && b.pop();
        var d = b.length - 1,
            e = parseInt(b[d], 10);
        x(e) && (b[d] = e + 1 + "");
        return t(a, c) && q(a, b)
    }

    function w(a) {
        a = a.split(i);
        var b = a[0].match(l);
        b || h(0, 3074);
        return {
            modifier: b[1],
            rangeComponents: [b[2]].concat(a.slice(1))
        }
    }

    function x(a) {
        return !isNaN(a) && isFinite(a)
    }

    function y(a) {
        return !w(a).modifier
    }

    function z(a, b) {
        for (var c = a.length; c < b; c++) a[c] = "0"
    }

    function A(a, b) {
        a = a.slice();
        b = b.slice();
        z(a, b.length);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].match(/^[x*]$/i);
            if (d) {
                b[c] = a[c] = "0";
                if (d[0] === "*" && c === b.length - 1)
                    for (var d = c; d < a.length; d++) a[d] = "0"
            }
        }
        z(b, a.length);
        return [a, b]
    }

    function B(a, b) {
        var c = a.match(m),
            d = b.match(m);
        c = c && c[1];
        d = d && d[1];
        c = parseInt(c, 10);
        d = parseInt(d, 10);
        if (x(c) && x(d) && c !== d) return C(c, d);
        else return C(a, b)
    }

    function C(a, b) {
        typeof a === typeof b || h(0, 11802);
        if (typeof a === "string" && typeof b === "string")
            if (a > b) return 1;
            else if (a < b) return -1;
        else return 0;
        if (typeof a === "number" && typeof b === "number")
            if (a > b) return 1;
            else if (a < b) return -1;
        else return 0;
        typeof a === typeof b || h(0, 11802);
        return 0
    }

    function D(a, b) {
        a = A(a, b);
        b = a[0];
        a = a[1];
        for (var c = 0; c < a.length; c++) {
            var d = B(b[c], a[c]);
            if (d) return d
        }
        return 0
    }
    var E = {
        contains: function(a, b) {
            return n(a.trim(), b.trim())
        }
    };
    a = E;
    g["default"] = a
}), 98);
__d("UserAgent", ["UserAgentData", "VersionRange", "memoizeStringOnly"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, d, e) {
        if (a === d) return !0;
        if (!d.startsWith(a)) return !1;
        d = d.slice(a.length);
        if (b != null) {
            d = e ? e(d) : d;
            return c("VersionRange").contains(d, b)
        }
        return !1
    }

    function i(a) {
        return c("UserAgentData").platformName === "Windows" ? a.replace(/^\s*NT/, "") : a
    }
    a = {
        isBrowser: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").browserName, c("UserAgentData").browserFullVersion, a)
        }),
        isBrowserArchitecture: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").browserArchitecture, null, a)
        }),
        isDevice: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").deviceName, null, a)
        }),
        isEngine: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").engineName, c("UserAgentData").engineVersion, a)
        }),
        isPlatform: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").platformName, c("UserAgentData").platformFullVersion, a, i)
        }),
        isPlatformArchitecture: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").platformArchitecture, null, a)
        })
    };
    b = a;
    g["default"] = b
}), 98);
__d("clickRefAction", ["Arbiter"], (function(a, b, c, d, e, f) {
    function g(b, a, c, d, e) {
        var f = b + "/" + a;
        this.ue = f;
        this.ue_ts = b;
        this.ue_count = a;
        this.context = c;
        this.ns = null;
        this.node = d;
        this.type = e
    }
    g.prototype.set_namespace = function(a) {
        this.ns = a;
        return this
    };
    g.prototype.coalesce_namespace = function(a) {
        this.ns === null && (this.ns = a);
        return this
    };
    g.prototype.add_event = function() {
        return this
    };
    var h = 0,
        i = [],
        j = Date.now() + 6e4;

    function c(a, c, d, e, f) {
        var k = Date.now(),
            l = d && d.type;
        f = f || {};
        !c && d && (c = d.getTarget());
        var m = 50;
        if (c && e != "FORCE")
            for (var n = i.length - 1; n >= 0 && k - i[n].ue_ts < m; --n)
                if (i[n].node == c && i[n].type == l) return i[n];
        n = new g(k, h, a, c, l);
        i.push(n);
        while (i[0].ue_ts + m < k || i.length > 10) i.shift();
        l = k < j ? "persistent" : "event";
        a == "contextmenu" ? b("Arbiter").inform("ClickRefAction/contextmenu", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : a == "middleclick" ? b("Arbiter").inform("ClickRefAction/middleclick", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : b("Arbiter").inform("ClickRefAction/new", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l);
        h++;
        return n
    }
    e.exports = a.clickRefAction = c
}), null);
__d("FlowMigrationUtilsForLegacyFiles", ["FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "flow_typing_for_legacy_code";

    function a(a) {
        c("FBLogger")(h).blameToPreviousFile().event(h + ".bad_call").mustfix(a);
        return new Error("[" + h + "] " + a)
    }
    g.invariantViolation = a
}), 98);
__d("getDocumentScrollElement", ["FlowMigrationUtilsForLegacyFiles"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;

    function a(a) {
        a = a || document;
        if (a.scrollingElement) return a.scrollingElement;
        a = !h && a.compatMode === "CSS1Compat" ? a.documentElement : a.body;
        a || d("FlowMigrationUtilsForLegacyFiles").invariantViolation("null result in getDocumentScrollElement");
        return a
    }
    g["default"] = a
}), 98);
__d("getObjectValues", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }
    f["default"] = a
}), 66);
__d("Event", ["$", "Arbiter", "DOMEvent", "DOMEventListener", "DOMQuery", "DataStore", "Env", "ErrorGuard", "EventProfiler", "ExecutionEnvironment", "FBLogger", "Parent", "Scroll", "TimeSlice", "UserAgent", "clickRefAction", "dedupString", "fb-error", "getDocumentScrollElement", "getObjectValues"], (function(a, b, c, d, e, f) {
    var g, h, i = b("fb-error").TAAL,
        j = "Event.listeners";
    Event.prototype || (Event.prototype = {});

    function k(a) {
        (a.type === "click" || a.type === "mouseover" || a.type === "keydown") && b("Arbiter").inform("Event/stop", {
            event: a
        })
    }
    var l = function() {
        "use strict";

        function a(a, b, c) {
            this.cancelBubble = !1, this.target = a, this.type = b, this.data = c
        }
        var c = a.prototype;
        c.getData = function() {
            this.data = this.data || {};
            return this.data
        };
        c.stop = function() {
            return Event.stop(this)
        };
        c.prevent = function() {
            return Event.prevent(this)
        };
        c.isDefaultPrevented = function() {
            return Event.isDefaultPrevented(this)
        };
        c.kill = function() {
            return Event.kill(this)
        };
        c.getTarget = function() {
            return new(b("DOMEvent"))(this).target || null
        };
        return a
    }();

    function m(a) {
        if (a instanceof l) return a;
        a || (!window.addEventListener && document.createEventObject ? a = window.event ? document.createEventObject(window.event) : {} : a = {});
        if (!a._inherits_from_prototype)
            for (var b in Event.prototype) try {
                a[b] = Event.prototype[b]
            } catch (a) {}
        return a
    }
    Object.assign(Event.prototype, {
        _inherits_from_prototype: !0,
        getRelatedTarget: function() {
            var a = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
            return a && a.nodeType ? a : null
        },
        getModifiers: function() {
            var a = {
                control: !!this.ctrlKey,
                shift: !!this.shiftKey,
                alt: !!this.altKey,
                meta: !!this.metaKey
            };
            a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
            a.any = a.control || a.shift || a.alt || a.meta;
            return a
        },
        isRightClick: function() {
            return this.which ? this.which === 3 : this.button && this.button === 2
        },
        isMiddleClick: function() {
            return this.which ? this.which === 2 : this.button && this.button === 4
        },
        isDefaultRequested: function() {
            return this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
        }
    }, l.prototype);
    c = {
        listen: function(a, c, d, e, f) {
            typeof d === "function" && (d = b("TimeSlice").guard(d, b("dedupString")("Event.js " + c + " handler")));
            !f || typeof f === "boolean" ? f = {
                passive: !1
            } : f = {
                passive: f.passive || !1
            };
            if (!b("ExecutionEnvironment").canUseDOM) return new u(a, d, null, c, e, null, f);
            typeof a === "string" && (a = b("$")(a));
            typeof e === "undefined" && (e = Event.Priority.NORMAL);
            if (typeof c === "object") {
                var g = {};
                for (var h in c) g[h] = Event.listen(a, h, c[h], e, f);
                return g
            }
            if (c.match(/^on/i)) throw new TypeError("Bad event name `" + c + "': use `click', not `onclick'.");
            if (!a) {
                g = i.blameToPreviousFrame(new Error("Cannot listen to an undefined element."));
                b("FBLogger")("event").catching(g).mustfix("Tried to listen to element of type %s", c);
                throw g
            }
            if (a.nodeName == "LABEL" && c == "click") {
                g = a.getElementsByTagName("input");
                a = g.length == 1 ? g[0] : a
            } else if (a === window && c === "scroll") {
                g = b("getDocumentScrollElement")();
                g !== document.documentElement && g !== document.body && (a = g)
            }
            g = b("DataStore").get(a, j, {});
            var k = o[c];
            k && (c = k.base, k.wrap && (d = k.wrap(d)));
            q(a, g, c, f);
            k = g[c];
            e in k || (k[e] = []);
            var l = k[e].length;
            d = new u(a, d, g, c, e, l, f);
            k[e][l] = d;
            k.numHandlers++;
            f.passive || (k.numNonPassiveHandlers++, p(a, g[c], c));
            return d
        },
        stop: function(a) {
            var c = new(b("DOMEvent"))(a).stopPropagation();
            k(c.event);
            return a
        },
        prevent: function(a) {
            new(b("DOMEvent"))(a).preventDefault();
            return a
        },
        isDefaultPrevented: function(a) {
            return new(b("DOMEvent"))(a).isDefaultPrevented(a)
        },
        kill: function(a) {
            a = new(b("DOMEvent"))(a).kill();
            k(a.event);
            return !1
        },
        getKeyCode: function(a) {
            a = new(b("DOMEvent"))(a).event;
            if (!a) return !1;
            switch (a.keyCode) {
                case 63232:
                    return 38;
                case 63233:
                    return 40;
                case 63234:
                    return 37;
                case 63235:
                    return 39;
                case 63272:
                case 63273:
                case 63275:
                    return null;
                case 63276:
                    return 33;
                case 63277:
                    return 34
            }
            if (a.shiftKey) switch (a.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null
            }
            return a.keyCode
        },
        getPriorities: function() {
            if (!n) {
                var a = b("getObjectValues")(Event.Priority);
                a.sort(function(a, b) {
                    return a - b
                });
                n = a
            }
            return n
        },
        fire: function(a, b, c) {
            c = new l(a, b, c);
            var d;
            do {
                var e = Event.__getHandler(a, b);
                e && (d = e(c));
                a = a.parentNode
            } while (a && d !== !1 && !c.cancelBubble);
            return d !== !1
        },
        __fire: function(a, b, c) {
            a = Event.__getHandler(a, b);
            if (a) return a(m(c))
        },
        __getHandler: function(a, c) {
            var d = b("DataStore").get(a, j);
            return d && d[c] ? d[c].domHandler : a["on" + c]
        },
        getPosition: function(a) {
            a = new(b("DOMEvent"))(a).event;
            var c = b("getDocumentScrollElement")(),
                d = a.clientX + b("Scroll").getLeft(c);
            a = a.clientY + b("Scroll").getTop(c);
            return {
                x: d,
                y: a
            }
        }
    };
    Object.assign(Event, c);
    var n = null;
    d = function(a) {
        return function(c) {
            if (!b("DOMQuery").contains(this, c.getRelatedTarget())) return a.call(this, c)
        }
    };
    var o;
    !window.navigator.msPointerEnabled ? o = {
        mouseenter: {
            base: "mouseover",
            wrap: d
        },
        mouseleave: {
            base: "mouseout",
            wrap: d
        }
    } : o = {
        mousedown: {
            base: "MSPointerDown"
        },
        mousemove: {
            base: "MSPointerMove"
        },
        mouseup: {
            base: "MSPointerUp"
        },
        mouseover: {
            base: "MSPointerOver"
        },
        mouseout: {
            base: "MSPointerOut"
        },
        mouseenter: {
            base: "MSPointerOver",
            wrap: d
        },
        mouseleave: {
            base: "MSPointerOut",
            wrap: d
        }
    };
    if (b("UserAgent").isBrowser("Firefox < 52")) {
        f = function(a, b) {
            b = m(b);
            var c = b.getTarget();
            while (c) Event.__fire(c, a, b), c = c.parentNode
        };
        document.documentElement.addEventListener("focus", f.bind(null, "focusin"), !0);
        document.documentElement.addEventListener("blur", f.bind(null, "focusout"), !0)
    }
    var p = function(a, c, d) {
            var e = c.numNonPassiveHandlers == 0;
            e != c.options.passive && (c.domHandlerRemover.remove(), c.options.passive = e, c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
                passive: e
            }))
        },
        q = function(a, c, d, e) {
            if (d in c) return;
            var f = b("TimeSlice").guard(t.bind(a, d), b("dedupString")("Event listenHandler " + d));
            c[d] = {
                numHandlers: 0,
                numNonPassiveHandlers: 0,
                domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
                domHandler: f,
                options: e
            };
            c = "on" + d;
            if (a[c]) {
                f = a === document.documentElement ? Event.Priority._BUBBLE : Event.Priority.TRADITIONAL;
                var g = a[c];
                a[c] = null;
                Event.listen(a, d, g, f, e)
            }
        };

    function r(a) {
        return !a.href.endsWith("#") ? !1 : a.href === document.location.href || a.href === document.location.href + "#"
    }

    function s(a, b) {
        return a.nodeName === "INPUT" && a.type === b
    }
    var t = b("EventProfiler").__wrapEventListenHandler(function(a, c) {
        c = m(c);
        if (!b("DataStore").get(this, j)) throw new Error("Bad listenHandler context.");
        var d = b("DataStore").get(this, j)[a];
        if (!d) throw new Error("No registered handlers for `" + a + "'.");
        if (a == "click" || a == "contextmenu" || a == "mousedown" && c.which == 2) {
            var e = c.getTarget(),
                f = b("Parent").byTag(e, "a");
            f instanceof HTMLAnchorElement && f.href && r(f) && !s(e, "file") && !s(e, "submit") && c.prevent();
            (g || (g = b("Env"))).gk_no_ref_action != !0 && (a == "click" && b("clickRefAction")("click", f, c), a == "contextmenu" && b("clickRefAction")("contextmenu", f, c), a == "mousedown" && c.which == 2 && b("clickRefAction")("middleclick", f, c))
        }
        e = Event.getPriorities();
        for (var a = 0; a < e.length; a++) {
            f = e[a];
            if (f in d) {
                f = d[f];
                for (var h = 0; h < f.length; h++) {
                    if (!f[h]) continue;
                    var i = f[h].fire(this, c);
                    if (i === !1) return c.kill();
                    else c.cancelBubble && c.stop()
                }
            }
        }
        return c.returnValue
    });
    Event.Priority = {
        URGENT: -20,
        TRADITIONAL: -10,
        NORMAL: 0,
        _BUBBLE: 1e3
    };
    var u = function() {
        "use strict";

        function a(a, b, c, d, e, f, g) {
            this.$1 = a, this.$2 = b, this.$3 = c, this.$7 = d, this.$6 = e, this.$4 = f, this.$5 = g
        }
        var c = a.prototype;
        c.isRemoved = function() {
            return !this.$3
        };
        c.remove = function() {
            if (b("ExecutionEnvironment").canUseDOM) {
                if (this.isRemoved()) {
                    b("FBLogger")("Event").warn("Event handler has already been removed");
                    return
                }
                var a = this.$3[this.$7];
                a.numHandlers <= 1 ? (a.domHandlerRemover.remove(), delete this.$3[this.$7]) : (delete a[this.$6][this.$4], a.numHandlers--, this.$5.passive || (a.numNonPassiveHandlers--, p(this.$1, this.$3[this.$7], this.$7)));
                this.$3 = null
            }
        };
        c.fire = function(a, c) {
            return b("ExecutionEnvironment").canUseDOM ? (h || (h = b("ErrorGuard"))).applyWithGuard(this.$2, a, [c], {
                name: "eventhandler:" + c.type + ":" + (typeof a.name == "string" ? a.name : a.id)
            }) : !0
        };
        return a
    }();
    a.$E = Event.$E = m;
    e.exports = Event
}), null);
__d("FbtResultBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a, b) {
            this.$1 = a, this.__errorListener = b, this.$3 = !1, this.$2 = null
        }
        var b = a.prototype;
        b.flattenToArray = function() {
            return a.flattenToArray(this.$1)
        };
        b.getContents = function() {
            return this.$1
        };
        b.toString = function() {
            if (Object.isFrozen(this)) return this.$4();
            if (this.$3) return "<<Reentering fbt.toString() is forbidden>>";
            this.$3 = !0;
            try {
                return this.$4()
            } finally {
                this.$3 = !1
            }
        };
        b.$4 = function() {
            if (this.$2 != null) return this.$2;
            var b = "",
                c = this.flattenToArray();
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                if (typeof e === "string" || e instanceof a) b += e.toString();
                else {
                    var f;
                    (f = this.__errorListener) == null ? void 0 : f.onStringSerializationError == null ? void 0 : f.onStringSerializationError(e)
                }
            }
            Object.isFrozen(this) || (this.$2 = b);
            return b
        };
        b.toJSON = function() {
            return this.toString()
        };
        a.flattenToArray = function(b) {
            var c = [];
            for (var d = 0; d < b.length; ++d) {
                var e = b[d];
                Array.isArray(e) ? c.push.apply(c, a.flattenToArray(e)) : e instanceof a ? c.push.apply(c, e.flattenToArray()) : c.push(e)
            }
            return c
        };
        return a
    }();
    ["anchor", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "contains", "endsWith", "fixed", "fontcolor", "fontsize", "includes", "indexOf", "italics", "lastIndexOf", "link", "localeCompare", "match", "normalize", "repeat", "replace", "search", "slice", "small", "split", "startsWith", "strike", "sub", "substr", "substring", "sup", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"].forEach(function(a) {
        g.prototype[a] = function() {
            var b;
            (b = this.__errorListener) == null ? void 0 : b.onStringMethodUsed == null ? void 0 : b.onStringMethodUsed(a);
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            return String.prototype[a].apply(this, d)
        }
    });
    e.exports = g
}), null);
__d("getMarkupWrap", ["invariant", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g, h) {
    var i = d("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        j = {};
    b = [1, '<select multiple="true">', "</select>"];
    c = [1, "<table>", "</table>"];
    e = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var k = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        l = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: b,
            option: b,
            caption: c,
            colgroup: c,
            tbody: c,
            tfoot: c,
            thead: c,
            td: e,
            th: e
        };
    f = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    f.forEach(function(a) {
        l[a] = k, j[a] = !0
    });

    function a(a) {
        a = a;
        !i && h(0, 144);
        Object.prototype.hasOwnProperty.call(l, a) || (a = "*");
        Object.prototype.hasOwnProperty.call(j, a) || (a === "*" ? i.innerHTML = "<link />" : i.innerHTML = "<" + a + "></" + a + ">", j[a] = !i.firstChild);
        return j[a] ? l[a] : null
    }
    g["default"] = a
}), 98);
__d("createNodesFromMarkup", ["invariant", "ExecutionEnvironment", "getMarkupWrap"], (function(a, b, c, d, e, f, g, h) {
    var i = d("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        j = /^\s*<(\w+)/;

    function k(a) {
        a = a.match(j);
        return a && a[1].toLowerCase()
    }

    function a(a, b) {
        var d = i;
        !i && h(0, 5001);
        var e = k(a);
        e = e && c("getMarkupWrap")(e);
        if (e) {
            d.innerHTML = e[1] + a + e[2];
            e = e[0];
            while (e--) d = d.lastChild
        } else d.innerHTML = a;
        e = d.getElementsByTagName("script");
        e.length && (b || h(0, 5002), Array.from(e).forEach(b));
        a = Array.from(d.childNodes);
        while (d.lastChild) d.removeChild(d.lastChild);
        return a
    }
    g["default"] = a
}), 98);
__d("evalGlobal", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (typeof a !== "string") throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
        if (!a) return;
        var b = document.createElement("script");
        try {
            b.appendChild(document.createTextNode(a))
        } catch (c) {
            b.text = a
        }
        a = document.getElementsByTagName("head")[0] || document.documentElement;
        a.appendChild(b);
        a.removeChild(b)
    }
    f["default"] = a
}), 66);
__d("HTML", ["invariant", "Bootloader", "createNodesFromMarkup", "emptyFunction", "evalGlobal"], (function(a, b, c, d, e, f, g) {
    var h = /(<(\w+)[^>]*?)\/>/g,
        i = {
            abbr: !0,
            area: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0
        };
    a = function() {
        "use strict";

        function a(c) {
            c && typeof c.__html === "string" && (c = c.__html);
            if (!(this instanceof a)) return c instanceof a ? c : new a(c);
            if (c) {
                var d = typeof c;
                d === "string" || g(0, 277, d)
            }
            this._markup = c || "";
            this._defer = !1;
            this._nodes = null;
            this._inlineJS = b("emptyFunction");
            this._rootNode = null
        }
        var c = a.prototype;
        c.toString = function() {
            return this._markup
        };
        c.getContent = function() {
            return this._markup
        };
        c.getNodes = function() {
            this._fillCache();
            return this._nodes
        };
        c.getRootNode = function() {
            this._rootNode && g(0, 278);
            var a = this.getNodes();
            if (a.length === 1) this._rootNode = a[0];
            else {
                var b = document.createDocumentFragment();
                for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
                this._rootNode = b
            }
            return this._rootNode
        };
        c.getAction = function() {
            var a = this;
            this._fillCache();
            var b = function() {
                a._inlineJS()
            };
            return this._defer ? function() {
                setTimeout(b, 0)
            } : b
        };
        c._fillCache = function() {
            if (this._nodes !== null) return;
            if (!this._markup) {
                this._nodes = [];
                return
            }
            var a = this._markup.replace(h, function(a, b, c) {
                    return i[c.toLowerCase()] ? a : b + "></" + c + ">"
                }),
                c = null;
            a = b("createNodesFromMarkup")(a, function(a) {
                c = c || [], c.push(a.src ? b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"), a.src) : b("evalGlobal").bind(null, a.innerHTML)), a.parentNode.removeChild(a)
            });
            c && (this._inlineJS = function() {
                for (var a = 0; a < c.length; a++) c[a]()
            });
            this._nodes = a
        };
        c.setDeferred = function(a) {
            this._defer = !!a;
            return this
        };
        a.isHTML = function(b) {
            return !!b && (b instanceof a || b.__html !== void 0)
        };
        a.replaceJSONWrapper = function(b) {
            return b && b.__html !== void 0 ? new a(b.__html) : b
        };
        return a
    }();
    e.exports = a
}), null);
__d("UserAgent_DEPRECATED", [], (function(a, b, c, d, e, f) {
    var g = !1,
        h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

    function x() {
        if (g) return;
        g = !0;
        var a = navigator.userAgent,
            b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),
            c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
        s = /\b(iPhone|iP[ao]d)/.exec(a);
        t = /\b(iP[ao]d)/.exec(a);
        q = /Android/i.exec(a);
        u = /FBAN\/\w+;/i.exec(a);
        v = /FBAN\/mLite;/i.exec(a);
        w = /Mobile/i.exec(a);
        r = !!/Win64/.exec(a);
        if (b) {
            h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
            h && document && document.documentMode && (h = document.documentMode);
            var d = /(?:Trident\/(\d+.\d+))/.exec(a);
            m = d ? parseFloat(d[1]) + 4 : h;
            i = b[2] ? parseFloat(b[2]) : NaN;
            j = b[3] ? parseFloat(b[3]) : NaN;
            k = b[4] ? parseFloat(b[4]) : NaN;
            k ? (b = /(?:Chrome\/(\d+\.\d+))/.exec(a), l = b && b[1] ? parseFloat(b[1]) : NaN) : l = NaN
        } else h = i = j = l = k = NaN;
        if (c) {
            if (c[1]) {
                d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                n = d ? parseFloat(d[1].replace("_", ".")) : !0
            } else n = !1;
            o = !!c[2];
            p = !!c[3]
        } else n = o = p = !1
    }

    function y() {
        return x() || h
    }

    function a() {
        return x() || m > h
    }

    function b() {
        return y() && r
    }

    function c() {
        return x() || i
    }

    function d() {
        return x() || j
    }

    function z() {
        return x() || k
    }

    function e() {
        return z()
    }

    function A() {
        return x() || l
    }

    function B() {
        return x() || o
    }

    function C() {
        return x() || n
    }

    function D() {
        return x() || p
    }

    function E() {
        return x() || s
    }

    function F() {
        return x() || s || t || q || w
    }

    function G() {
        return x() || v != null ? null : u
    }

    function H() {
        return x() || q
    }

    function I() {
        return x() || t
    }
    f.ie = y;
    f.ieCompatibilityMode = a;
    f.ie64 = b;
    f.firefox = c;
    f.opera = d;
    f.webkit = z;
    f.safari = e;
    f.chrome = A;
    f.windows = B;
    f.osx = C;
    f.linux = D;
    f.iphone = E;
    f.mobile = F;
    f.nativeApp = G;
    f.android = H;
    f.ipad = I
}), 66);
__d("isScalar", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return /string|number|boolean/.test(typeof a)
    }
    f["default"] = a
}), 66);
__d("DOM", ["$", "DOMQuery", "Event", "FBLogger", "FbtResultBase", "HTML", "UserAgent_DEPRECATED", "createArrayFromMixed", "fb-error", "isNode", "isScalar", "isTextNode"], (function(a, b, c, d, e, f, g) {
    a = function(a, b, c) {
        a = document.createElement(a);
        b && h.setAttributes(a, b);
        c != null && h.setContent(a, c);
        return a
    };
    var h = {
        find: d("DOMQuery").find,
        findPushSafe: d("DOMQuery").findPushSafe,
        scry: d("DOMQuery").scry,
        getSelection: d("DOMQuery").getSelection,
        contains: d("DOMQuery").contains,
        getRootElement: d("DOMQuery").getRootElement,
        isNodeOfType: d("DOMQuery").isNodeOfType,
        isInputNode: d("DOMQuery").isInputNode,
        create: a,
        setAttributes: function(a, b) {
            b.type && (a.type = b.type);
            for (var d in b) {
                var e = b[d],
                    f = /^on/i.test(d);
                f && typeof e !== "function" && c("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s", d, typeof e);
                if (d == "type") continue;
                else d == "style" ? typeof e === "string" ? a.style.cssText = e : Object.assign(a.style, e) : f ? c("Event").listen(a, d.substr(2), e) : d in a ? a[d] = e : a.setAttribute && a.setAttribute(d, e)
            }
        },
        prependContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            return j(b, a, function(b) {
                a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b)
            })
        },
        insertAfter: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b)
            })
        },
        insertBefore: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                d.insertBefore(b, a)
            })
        },
        setContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            while (a.firstChild) i(a.firstChild);
            return h.appendContent(a, b)
        },
        appendContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            return j(b, a, function(b) {
                a.appendChild(b)
            })
        },
        replace: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                d.replaceChild(b, a)
            })
        },
        remove: function(a) {
            i(typeof a === "string" ? c("$")(a) : a)
        },
        empty: function(a) {
            a = typeof a === "string" ? c("$")(a) : a;
            while (a.firstChild) i(a.firstChild)
        }
    };

    function i(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function j(a, b, e) {
        a = c("HTML").replaceJSONWrapper(a);
        if (a instanceof c("HTML") && b.firstChild === null && -1 === a.toString().indexOf("<script")) {
            var f = d("UserAgent_DEPRECATED").ie();
            if (!f || f > 7 && !d("DOMQuery").isNodeOfType(b, ["table", "tbody", "thead", "tfoot", "tr", "select", "fieldset"])) {
                var g = f ? '<em style="display:none;">&nbsp;</em>' : "";
                b.innerHTML = g + a;
                f && b.removeChild(b.firstChild);
                return Array.from(b.childNodes)
            }
        } else if (c("isTextNode")(b)) {
            b.data = a;
            return [a]
        }
        g = document.createDocumentFragment();
        var h;
        f = [];
        b = [];
        a = c("createArrayFromMixed")(a);
        a.length === 1 && a[0] instanceof c("FbtResultBase") && (a = a[0].getContents());
        for (var i = 0; i < a.length; i++) {
            h = c("HTML").replaceJSONWrapper(a[i]);
            if (h instanceof c("HTML")) {
                b.push(h.getAction());
                var j = h.getNodes();
                for (var k = 0; k < j.length; k++) f.push(j[k]), g.appendChild(j[k])
            } else if (c("isScalar")(h) || h instanceof c("FbtResultBase")) {
                k = document.createTextNode(h);
                f.push(k);
                g.appendChild(k)
            } else c("isNode")(h) ? (f.push(h), g.appendChild(h)) : (Array.isArray(h) && c("FBLogger")("dom").warn("Nest arrays not supported"), h !== null && c("FBLogger")("dom").warn("No way to set content %s", h))
        }
        e(g);
        b.forEach(function(a) {
            a()
        });
        return f
    }
    b = h;
    g["default"] = b
}), 98);
__d("DOMControl", ["$", "DataStore"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a) {
            this.root = b("$").fromIDOrElement(a), this.updating = !1, b("DataStore").set(a, "DOMControl", this)
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.root
        };
        c.beginUpdate = function() {
            if (this.updating) return !1;
            this.updating = !0;
            return !0
        };
        c.endUpdate = function() {
            this.updating = !1
        };
        c.update = function(a) {
            if (!this.beginUpdate()) return this;
            this.onupdate(a);
            this.endUpdate()
        };
        c.onupdate = function(a) {};
        a.getInstance = function(a) {
            return b("DataStore").get(a, "DOMControl")
        };
        return a
    }();
    e.exports = a
}), null);
__d("Input", ["CSS", "DOMControl", "DOMQuery"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return !/\S/.test(a || "")
    }

    function i(a) {
        return h(a.value)
    }

    function a(a) {
        return i(a) ? "" : a.value
    }

    function b(a) {
        return a.value
    }

    function e(a, b) {
        a.value = b || "";
        b = c("DOMControl").getInstance(a);
        b && b.resetHeight && b.resetHeight()
    }

    function f(a, b) {
        b || (b = ""), a.setAttribute("aria-label", b), a.setAttribute("placeholder", b)
    }

    function j(a) {
        a.value = "", a.style.height = ""
    }

    function k(a, b) {
        d("CSS").conditionClass(a, "enter_submit", b)
    }

    function l(a) {
        return d("CSS").hasClass(a, "enter_submit")
    }

    function m(a, b) {
        b > 0 ? a.setAttribute("maxlength", b.toString()) : a.removeAttribute("maxlength")
    }
    g.isWhiteSpaceOnly = h;
    g.isEmpty = i;
    g.getValue = a;
    g.getValueRaw = b;
    g.setValue = e;
    g.setPlaceholder = f;
    g.reset = j;
    g.setSubmitOnEnter = k;
    g.getSubmitOnEnter = l;
    g.setMaxLength = m
}), 98);
__d("camelize", [], (function(a, b, c, d, e, f) {
    var g = /-(.)/g;

    function a(a) {
        return a.replace(g, function(a, b) {
            return b.toUpperCase()
        })
    }
    f["default"] = a
}), 66);
__d("getOpacityStyleName", [], (function(a, b, c, d, e, f) {
    var g = !1,
        h = null;

    function a() {
        if (!g) {
            if (document.body && "opacity" in document.body.style) h = "opacity";
            else {
                var a = document.createElement("div");
                a.style.filter = "alpha(opacity=100)";
                a.style.filter && (h = "filter")
            }
            g = !0
        }
        return h
    }
    f["default"] = a
}), 66);
__d("hyphenate", [], (function(a, b, c, d, e, f) {
    var g = /([A-Z])/g;

    function a(a) {
        return a.replace(g, "-$1").toLowerCase()
    }
    f["default"] = a
}), 66);
__d("getStyleProperty", ["camelize", "hyphenate"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return a == null ? "" : String(a)
    }

    function a(a, b) {
        var d;
        if (window.getComputedStyle) {
            d = window.getComputedStyle(a, null);
            if (d) return h(d.getPropertyValue(c("hyphenate")(b)))
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            d = document.defaultView.getComputedStyle(a, null);
            if (d) return h(d.getPropertyValue(c("hyphenate")(b)));
            if (b === "display") return "none"
        }
        return a.currentStyle ? b === "float" ? h(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : h(a.currentStyle[c("camelize")(b)]) : h(a.style && a.style[c("camelize")(b)])
    }
    g["default"] = a
}), 98);
__d("StyleCore", ["invariant", "camelize", "containsNode", "err", "getOpacityStyleName", "getStyleProperty", "hyphenate"], (function(a, b, c, d, e, f, g, h) {
    function i(a, b) {
        a = o.get(a, b);
        return a === "auto" || a === "scroll"
    }
    var j = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)", "g");

    function k(a) {
        var b = {};
        a.replace(j, function(a, c, d) {
            b[c] = d;
            return d
        });
        return b
    }

    function l(a) {
        var b = "";
        for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
        return b
    }

    function m(a) {
        return a !== "" ? "alpha(opacity=" + a * 100 + ")" : ""
    }

    function n(a, b, d) {
        switch (c("hyphenate")(b)) {
            case "font-weight":
            case "line-height":
            case "opacity":
            case "z-index":
            case "animation-iteration-count":
            case "-webkit-animation-iteration-count":
                break;
            case "width":
            case "height":
                var e = parseInt(d, 10) < 0;
                e && h(0, 11849, a, b, d);
            default:
                isNaN(d) || !d || d === "0" || h(0, 11850, a, b, d, d + "px");
                break
        }
    }
    var o = {
        set: function(a, b, d) {
            n("Style.set", b, d);
            if (a == null) return;
            a = a.style;
            switch (b) {
                case "opacity":
                    c("getOpacityStyleName")() === "filter" ? a.filter = m(d) : a.opacity = d;
                    break;
                case "float":
                    a.cssFloat = a.styleFloat = d || "";
                    break;
                default:
                    try {
                        a[c("camelize")(b)] = d
                    } catch (a) {
                        throw c("err")('Style.set: "%s" argument is invalid: %s', b, d)
                    }
            }
        },
        apply: function(a, b) {
            var d;
            for (d in b) n("Style.apply", d, b[d]);
            "opacity" in b && c("getOpacityStyleName")() === "filter" && (b.filter = m(b.opacity), delete b.opacity);
            var e = k(a.style.cssText);
            for (d in b) {
                var f = b[d];
                delete b[d];
                var g = c("hyphenate")(d);
                for (var h in e)(h === g || h.indexOf(g + "-") === 0) && delete e[h];
                b[g] = f
            }
            Object.assign(e, b);
            a.style.cssText = l(e)
        },
        get: c("getStyleProperty"),
        getFloat: function(a, b) {
            return parseFloat(o.get(a, b), 10)
        },
        getOpacity: function(a) {
            if (c("getOpacityStyleName")() === "filter") {
                var b = o.get(a, "filter");
                if (b) {
                    b = /(\d+(?:\.\d+)?)/.exec(b);
                    if (b) return parseFloat(b.pop()) / 100
                }
            }
            return o.getFloat(a, "opacity") || 1
        },
        isFixed: function(a) {
            while (c("containsNode")(document.body, a)) {
                if (o.get(a, "position") === "fixed") return !0;
                a = a.parentNode
            }
            return !1
        },
        getScrollParent: function(a) {
            if (!a) return null;
            while (a && a !== document.body) {
                if (i(a, "overflow") || i(a, "overflowY") || i(a, "overflowX")) return a;
                a = a.parentNode
            }
            return window
        }
    };
    a = o;
    g["default"] = a
}), 98);
__d("Style", ["$", "StyleCore"], (function(a, b, c, d, e, f, g) {
    a = babelHelpers["extends"]({}, c("StyleCore"), {
        get: function(a, b) {
            typeof a === "string" && (a = c("$")(a));
            return c("StyleCore").get(a, b)
        },
        getFloat: function(a, b) {
            typeof a === "string" && (a = c("$")(a));
            return c("StyleCore").getFloat(a, b)
        }
    });
    b = a;
    g["default"] = b
}), 98);
__d("FlipDirection", ["DOM", "Input", "Style"], (function(a, b, c, d, e, f) {
    a = {
        setDirection: function(a, c, d) {
            c === void 0 && (c = 5);
            d === void 0 && (d = !1);
            var e = b("DOM").isNodeOfType(a, "input") && a.type == "text",
                f = b("DOM").isNodeOfType(a, "textarea");
            if (!(e || f) || a.getAttribute("data-prevent-auto-flip")) return;
            e = b("Input").getValue(a);
            f = a.style && a.style.direction;
            if (!f || d) {
                f = 0;
                d = !0;
                for (var g = 0; g < e.length; g++) {
                    var h = e.charCodeAt(g);
                    if (h >= 48) {
                        d && (d = !1, f++);
                        if (h >= 1470 && h <= 1920) {
                            b("Style").set(a, "direction", "rtl");
                            a.setAttribute("dir", "rtl");
                            return
                        }
                        if (f == c) {
                            b("Style").set(a, "direction", "ltr");
                            a.setAttribute("dir", "ltr");
                            return
                        }
                    } else d = !0
                }
            } else e.length === 0 && (b("Style").set(a, "direction", ""), a.removeAttribute("dir"))
        }
    };
    e.exports = a
}), null);
__d("FlipDirectionOnKeypress", ["Event", "FlipDirection"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        a = a.getTarget();
        d("FlipDirection").setDirection(a)
    };
    c("Event").listen(document.documentElement, {
        keyup: a,
        input: a
    })
}), 34);
__d("getActiveElement", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a === void 0 && (a = document);
        if (a === void 0) return null;
        try {
            return a.activeElement || a.body
        } catch (b) {
            return a.body
        }
    }
    f["default"] = a
}), 66);
__d("FocusListener", ["Arbiter", "CSS", "Parent", "getActiveElement"], (function(a, b, c, d, e, f) {
    var g = {
        expandInput: function(a) {
            b("CSS").addClass(a, "child_is_active"), b("CSS").addClass(a, "child_is_focused"), b("CSS").addClass(a, "child_was_focused"), b("Arbiter").inform("reflow")
        }
    };

    function h(a, c) {
        if (c.getAttribute("data-silentfocuslistener")) return;
        var d = b("Parent").byClass(c, "focus_target");
        d && ("focus" == a || "focusin" == a ? g.expandInput(d) : (c.value === "" && b("CSS").removeClass(d, "child_is_active"), b("CSS").removeClass(d, "child_is_focused")))
    }
    c = b("getActiveElement")();
    c && h("focus", c);

    function a(a) {
        a = a || window.event, h(a.type, a.target || a.srcElement)
    }
    d = document.documentElement;
    d && (d.addEventListener ? (d.addEventListener("focus", a, !0), d.addEventListener("blur", a, !0)) : (d.attachEvent("onfocusin", a), d.attachEvent("onfocusout", a)));
    e.exports = g
}), null);
__d("guid", [], (function(a, b, c, d, e, f) {
    function a() {
        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
    }
    f["default"] = a
}), 66);
__d("ArbiterMixin", ["Arbiter", "guid"], (function(a, b, c, d, e, f) {
    var g = "arbiter$" + b("guid")(),
        h = Object.prototype.hasOwnProperty;
    a = {
        _getArbiterInstance: function() {
            return h.call(this, g) ? this[g] : this[g] = new(b("Arbiter"))()
        },
        inform: function(a, b, c) {
            return this._getArbiterInstance().inform(a, b, c)
        },
        subscribe: function(a, b, c) {
            return this._getArbiterInstance().subscribe(a, b, c)
        },
        subscribeOnce: function(a, b, c) {
            return this._getArbiterInstance().subscribeOnce(a, b, c)
        },
        unsubscribe: function(a) {
            this._getArbiterInstance().unsubscribe(a)
        },
        unsubscribeCurrentSubscription: function() {
            this._getArbiterInstance().unsubscribeCurrentSubscription()
        },
        releaseCurrentPersistentEvent: function() {
            this._getArbiterInstance().releaseCurrentPersistentEvent()
        },
        registerCallback: function(a, b) {
            return this._getArbiterInstance().registerCallback(a, b)
        },
        query: function(a) {
            return this._getArbiterInstance().query(a)
        }
    };
    e.exports = a
}), null);
__d("mixin", [], (function(a, b, c, d, e, f) {
    function a() {
        var a = function() {},
            b = 0,
            c;
        while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
            c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
            b += 1
        }
        return a
    }
    f["default"] = a
}), 66);
__d("JSONPTransport", ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = 2,
        j = "jsonp",
        k = "iframe";

    function l(a) {
        delete h[a]
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(b, c) {
            var d;
            d = a.call(this) || this;
            d._type = b;
            d._uri = c;
            d._hasResponse = !1;
            h[d.getID()] = babelHelpers.assertThisInitialized(d);
            return d
        }
        var d = c.prototype;
        d.getID = function() {
            return this._id || (this._id = i++)
        };
        d.hasFinished = function() {
            return !(this.getID() in h)
        };
        d.getRequestURI = function() {
            return new(g || (g = b("URI")))(this._uri).addQueryData({
                __a: 1,
                __adt: this.getID(),
                __req: "jsonp_" + this.getID()
            })
        };
        d.getTransportFrame = function() {
            if (this._iframe) return this._iframe;
            var a = "transport_frame_" + this.getID();
            a = b("HTML")('<iframe class="hidden_elem" name="' + a + '" src="javascript:void(0)" />');
            return this._iframe = b("DOM").appendContent(document.body, a)[0]
        };
        d.send = function() {
            this._type === j ? setTimeout(function() {
                b("DOM").appendContent(document.body, b("DOM").create("script", {
                    src: this.getRequestURI().toString(),
                    type: "text/javascript"
                }))
            }.bind(this), 0) : (this.getTransportFrame().onload = this._checkForErrors.bind(this), this.getTransportFrame().src = this.getRequestURI().toString()), this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.createContinuationForFileForm_DO_NOT_USE = function() {
            this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.handleResponse = function(a) {
            var c = this;
            this._continuation(function() {
                c.inform("response", a), c.hasFinished() ? setTimeout(c._cleanup.bind(c), 0) : c._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for next response")
            })
        };
        d.abort = function() {
            if (this._aborted) return;
            this._aborted = !0;
            this._cleanup();
            l(this.getID());
            this.inform("abort")
        };
        d._checkForErrors = function() {
            this._hasResponse || this.abort()
        };
        d._cleanup = function() {
            this._iframe && (b("DOM").remove(this._iframe), this._iframe = null)
        };
        c.respond = function(a, b, c) {
            var d = h[a];
            d && (d._hasResponse = !0, c || l(a), d._type == k && (typeof b === "string" ? b = JSON.parse(b) : b = JSON.parse(JSON.stringify(b))), d.handleResponse(b))
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    a.respond = b("TimeSlice").guard(a.respond, "JSONPTransport.respond", {
        root: !0
    });
    e.exports = a
}), null);
__d("StrSet", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$2 = {}, this.$1 = 0, a && this.addAll(a)
        }
        var b = a.prototype;
        b.add = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) || (this.$2[a] = !0, this.$1++);
            return this
        };
        b.addAll = function(a) {
            a.forEach(this.add, this);
            return this
        };
        b.remove = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) && (delete this.$2[a], this.$1--);
            return this
        };
        b.removeAll = function(a) {
            a.forEach(this.remove, this);
            return this
        };
        b.toArray = function() {
            return Object.keys(this.$2)
        };
        b.toMap = function(a) {
            var b = {};
            Object.keys(this.$2).forEach(function(c) {
                b[c] = typeof a === "function" ? a(c) : a || !0
            });
            return b
        };
        b.contains = function(a) {
            return Object.prototype.hasOwnProperty.call(this.$2, a)
        };
        b.count = function() {
            return this.$1
        };
        b.clear = function() {
            this.$2 = {};
            this.$1 = 0;
            return this
        };
        b.clone = function() {
            return new a(this)
        };
        b.forEach = function(a, b) {
            Object.keys(this.$2).forEach(a, b)
        };
        b.map = function(a, b) {
            return Object.keys(this.$2).map(a, b)
        };
        b.some = function(a, b) {
            return Object.keys(this.$2).some(a, b)
        };
        b.every = function(a, b) {
            return Object.keys(this.$2).every(a, b)
        };
        b.filter = function(b, c) {
            return new a(Object.keys(this.$2).filter(b, c))
        };
        b.union = function(a) {
            return this.clone().addAll(a)
        };
        b.intersect = function(a) {
            return this.filter(function(b) {
                return a.contains(b)
            })
        };
        b.difference = function(a) {
            var b = this;
            return a.filter(function(a) {
                return !b.contains(a)
            })
        };
        b.equals = function(a) {
            var b = function(a, b) {
                    return a === b ? 0 : a < b ? -1 : 1
                },
                c = this.toArray();
            a = a.toArray();
            if (c.length !== a.length) return !1;
            var d = c.length;
            c = c.sort(b);
            a = a.sort(b);
            while (d--)
                if (c[d] !== a[d]) return !1;
            return !0
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("PlatformVersioning", ["invariant", "PlatformVersions", "StrSet", "getObjectValues"], (function(a, b, c, d, e, f, g) {
    var h = new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions)),
        i = location.pathname;
    i = i.substring(1, i.indexOf("/", 1));
    var j = h.contains(i) ? i : b("PlatformVersions").versions.UNVERSIONED;

    function k(a, c) {
        if (c == b("PlatformVersions").versions.UNVERSIONED) return a;
        h.contains(c) || g(0, 3769);
        a = a.indexOf("/") !== 0 ? "/" + a : a;
        return "/" + c + a
    }

    function a() {
        return b("PlatformVersions").LATEST
    }

    function c(a) {
        return a.setPath(k(a.getPath(), j))
    }

    function d(a) {
        return k(a, j)
    }

    function e(a) {
        return h.contains(a.substring(1, a.indexOf("/", 1))) ? a.substring(a.indexOf("/", 1)) : a
    }
    i = {
        addVersionToPath: k,
        getLatestVersion: a,
        versionAwareURI: c,
        versionAwarePath: d,
        getUnversionedPath: e
    };
    a = i;
    f["default"] = a
}), 66);
__d("PluginMessage", ["DOMEventListener"], (function(a, b, c, d, e, f, g) {
    function a() {
        d("DOMEventListener").add(window, "message", function(a) {
            if (/\.facebook\.com$/.test(a.origin) && /^FB_POPUP:/.test(a.data)) {
                a = JSON.parse(a.data.substring(9));
                "reload" in a && /^https?:/.test(a.reload) && document.location.replace(a.reload)
            }
        })
    }
    g.listen = a
}), 98);
__d("DOMDimensions", ["Style", "getDocumentScrollElement"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a ? a.offsetHeight : 0;
        a = a ? a.offsetWidth : 0;
        return {
            height: b,
            width: a
        }
    }

    function b(a) {
        a = c("getDocumentScrollElement")(a);
        var b = a.scrollWidth || 0;
        a = a.scrollHeight || 0;
        return {
            width: b,
            height: a
        }
    }

    function d(a, b, d, e, f) {
        var g;
        switch (b) {
            case "left":
            case "right":
            case "top":
            case "bottom":
                g = [b];
                break;
            case "width":
                g = ["left", "right"];
                break;
            case "height":
                g = ["top", "bottom"];
                break;
            default:
                throw Error("Invalid plane: " + b)
        }
        b = function(b, d) {
            var e = 0;
            for (var f = 0; f < g.length; f++) e += parseFloat(c("Style").get(a, b + "-" + g[f] + d)) || 0;
            return e
        };
        return (d ? b("padding", "") : 0) + (e ? b("border", "-width") : 0) + (f ? b("margin", "") : 0)
    }
    g.getElementDimensions = a;
    g.getDocumentDimensions = b;
    g.measureElementBox = d
}), 98);
__d("BehaviorsMixin", [], (function(a, b, c, d, e, f) {
    var g = function() {
            function a(a) {
                this.$1 = a, this.$2 = !1
            }
            var b = a.prototype;
            b.enable = function() {
                this.$2 || (this.$2 = !0, this.$1.enable())
            };
            b.disable = function() {
                this.$2 && (this.$2 = !1, this.$1.disable())
            };
            return a
        }(),
        h = 1;

    function i(a) {
        a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
        return a.__BEHAVIOR_ID
    }
    a = {
        enableBehavior: function(a) {
            this._behaviors || (this._behaviors = {});
            var b = i(a);
            this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
            this._behaviors[b].enable();
            return this
        },
        disableBehavior: function(a) {
            if (this._behaviors) {
                a = i(a);
                this._behaviors[a] && this._behaviors[a].disable()
            }
            return this
        },
        enableBehaviors: function(a) {
            a.forEach(this.enableBehavior, this);
            return this
        },
        destroyBehaviors: function() {
            if (this._behaviors) {
                for (var a in this._behaviors) this._behaviors[a].disable();
                this._behaviors = {}
            }
        },
        hasBehavior: function(a) {
            return this._behaviors && i(a) in this._behaviors
        }
    };
    b = a;
    f["default"] = b
}), 66);
__d("isValidReactElement", [], (function(a, b, c, d, e, f) {
    var g = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;

    function a(a) {
        return !!(typeof a === "object" && a !== null && a.$$typeof === g)
    }
    f["default"] = a
}), 66);
__d("BootloadedReact", ["Bootloader", "isValidReactElement"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        b("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact")
    };
    a = {
        isValidElement: function(a) {
            return b("isValidReactElement")(a)
        },
        render: function(a, b, c) {
            g(function(d) {
                d.render(a, b, function() {
                    c && c(this)
                })
            })
        },
        unmountComponentAtNode: function(a, b) {
            g(function(c) {
                c.unmountComponentAtNode(a), b && b()
            })
        }
    };
    e.exports = a
}), null);
__d("uniqueID", [], (function(a, b, c, d, e, f) {
    var g = "js_",
        h = 36,
        i = 0;

    function a(a) {
        a === void 0 && (a = g);
        return a + (i++).toString(h)
    }
    f["default"] = a
}), 66);
__d("getOrCreateDOMID", ["uniqueID"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a.id || (a.id = c("uniqueID")());
        return a.id
    }
    g["default"] = a
}), 98);
__d("ContextualThing", ["CSS", "containsNode", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        a.setAttribute("data-ownerid", c("getOrCreateDOMID")(b))
    }

    function b(a, b) {
        b = b;
        while (b) {
            if (c("containsNode")(a, b)) return !0;
            b = h(b)
        }
        return !1
    }

    function h(a) {
        a = a;
        var b;
        while (a) {
            if (a.getAttribute && (b = a.getAttribute("data-ownerid"))) return c("ge")(b);
            a = a.parentNode
        }
        return null
    }

    function e(a, b) {
        a = a;
        var e;
        while (a && !d("CSS").hasClass(a, b)) a.getAttribute && (e = a.getAttribute("data-ownerid")) ? a = c("ge")(e) : a = a.parentNode;
        return a
    }
    g.register = a;
    g.containsIncludingLayers = b;
    g.getContext = h;
    g.parentByClass = e
}), 98);
__d("Run", ["cr:925100"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        __domContentCallback: (a = b("cr:925100")).__domContentCallback,
        __onloadCallback: a.__onloadCallback,
        __removeHook: a.__removeHook,
        onAfterLoad: a.onAfterLoad,
        onAfterUnload: a.onAfterUnload,
        onBeforeUnload: a.onBeforeUnload,
        maybeOnBeforeUnload: a.onBeforeUnload,
        onCleanupOrLeave: a.onCleanupOrLeave,
        onLeave: a.onLeave,
        onLoad: a.onLoad,
        onUnload: a.onUnload
    }
}), null);
__d("getElementText", ["isElementNode", "isTextNode"], (function(a, b, c, d, e, f, g) {
    var h = null;

    function a(a) {
        if (c("isTextNode")(a)) return a.data;
        else if (c("isElementNode")(a)) {
            if (h === null) {
                var b = document.createElement("div");
                h = b.textContent != null ? "textContent" : "innerText"
            }
            return a[h]
        } else return ""
    }
    g["default"] = a
}), 98);
__d("isContentEditable", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a;
        while (a instanceof HTMLElement) {
            if (a.contentEditable === "true" || a.contentEditable === "plaintext-only") return !0;
            a = a.parentElement
        }
        return !1
    }
    f["default"] = a
}), 66);
__d("isElementInteractive", ["isContentEditable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
        i = new Set(["button", "checkbox", "radio", "submit"]);

    function a(a) {
        if (!a instanceof HTMLElement) return !1;
        var b = c("isContentEditable")(a),
            d = h.has(a.nodeName);
        a = a instanceof HTMLInputElement && i.has(a.type);
        return (b || d) && !a
    }
    g["default"] = a
}), 98);
__d("KeyEventController", ["Bootloader", "DOMQuery", "Event", "Run", "emptyFunction", "getElementText", "isContentEditable", "isElementInteractive", "isEmpty"], (function(a, b, c, d, e, f, g) {
    var h = null,
        i = {
            BACKSPACE: [8],
            TAB: [9],
            RETURN: [13],
            ALT: [18],
            ESCAPE: [27],
            LEFT: [37, 63234],
            UP: [38, 63232],
            RIGHT: [39, 63235],
            DOWN: [40, 63233],
            NUMPAD_ADD: [43],
            NUMPAD_SUBSTRACT: [45],
            DELETE: [46],
            COMMA: [188],
            PERIOD: [190],
            SLASH: [191],
            "`": [192],
            "[": [219],
            "]": [221],
            PAGE_UP: [33],
            PAGE_DOWN: [34],
            END: [35],
            HOME: [36],
            SPACE: [32],
            KP_DOT: [46, 110],
            "-": [189],
            "=": [187],
            FORWARD_SLASH: [191]
        },
        j = (a = {}, a[8] = 1, a[9] = 1, a[13] = 1, a[27] = 1, a[32] = 1, a[37] = 1, a[63234] = 1, a[38] = 1, a[63232] = 1, a[39] = 1, a[63235] = 1, a[40] = 1, a[63233] = 1, a[46] = 1, a);
    b = function() {
        function a() {
            var a = this;
            this.handlers = {};
            ["keyup", "keydown", "keypress"].forEach(function(b) {
                return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b))
            })
        }
        var b = a.prototype;
        b.mapKey = function(a) {
            if (/^[0-9]$/.test(a + "")) {
                typeof a !== "number" && (a = a.charCodeAt(0) - 48);
                return [48 + a, 96 + a]
            }
            a += "";
            var b = i[a.toUpperCase()];
            return b ? b : [a.toUpperCase().charCodeAt(0)]
        };
        b.onkeyevent = function(a, b) {
            b = c("Event").$E(b);
            var d = this.handlers[b.keyCode] || this.handlers[b.which];
            if (d)
                for (var e = 0; e < d.length; e++) {
                    var f = d[e].callback,
                        g = d[e].filter;
                    try {
                        if (!g || g(b, a)) {
                            g = function() {
                                var d = f(b, a),
                                    e = b.which || b.keyCode;
                                c("Bootloader").loadModules(["KeyEventTypedLogger"], function(a) {
                                    new a().setAction("key_shortcut").setKey(b.key || "").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted", b.isTrusted).log()
                                }, "KeyEventController");
                                if (d === !1) return {
                                    v: c("Event").kill(b)
                                }
                            }();
                            if (typeof g === "object") return g.v
                        }
                    } catch (a) {}
                }
            return !0
        };
        b.resetHandlers = function() {
            for (var a in this.handlers)
                if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
                    var b = this.handlers[a].filter(function(a) {
                        return a.preserve()
                    });
                    b.length ? this.handlers[a] = b : delete this.handlers[a]
                }
        };
        a.getInstance = function() {
            return h || (h = new a())
        };
        a.defaultFilter = function(b, d) {
            b = c("Event").$E(b);
            return a.filterEventTypes(b, d) && a.filterEventTargets(b, d) && a.filterEventModifiers(b, d)
        };
        a.filterEventTypes = function(a, b) {
            return b === "onkeydown" ? !0 : !1
        };
        a.filterEventTargets = function(a, b) {
            b = a.getTarget();
            return !c("isElementInteractive")(b) || a.keyCode in j && (d("DOMQuery").isNodeOfType(b, ["input", "textarea"]) && b.value.length === 0 || c("isContentEditable")(b) && c("getElementText")(b).length === 0)
        };
        a.filterEventModifiers = function(a, b) {
            return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0
        };
        a.registerKeyAcrossTransitions = function(b, d, e, f) {
            e === void 0 && (e = a.defaultFilter);
            f === void 0 && (f = !1);
            return a.registerKey(b, d, e, f, c("emptyFunction").thatReturnsTrue)
        };
        a.registerKey = function(b, e, f, g, h) {
            f === void 0 && (f = a.defaultFilter);
            g === void 0 && (g = !1);
            h === void 0 && (h = c("emptyFunction").thatReturnsFalse);
            var i = a.getInstance(),
                j = b == null ? [] : i.mapKey(b);
            c("isEmpty")(i.handlers) && d("Run").onLeave(i.resetHandlers.bind(i));
            var k = {};
            for (var l = 0; l < j.length; l++) {
                b = "" + j[l];
                (!i.handlers[b] || g) && (i.handlers[b] = []);
                var m = {
                    callback: e,
                    filter: f,
                    preserve: h
                };
                k[b] = m;
                i.handlers[b].push(m)
            }
            return {
                remove: function() {
                    for (var a in k) {
                        if (i.handlers[a] && i.handlers[a].length) {
                            var b = i.handlers[a].indexOf(k[a]);
                            b >= 0 && i.handlers[a].splice(b, 1)
                        }
                        delete k[a]
                    }
                }
            }
        };
        return a
    }();
    g["default"] = b
}), 98);
__d("KeyStatus", ["Event", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    var h = null,
        i = null;

    function j() {
        i || (i = c("Event").listen(window, "blur", function() {
            h = null, k()
        }))
    }

    function k() {
        i && (i.remove(), i = null)
    }

    function a(a) {
        h = c("Event").getKeyCode(a), j()
    }

    function b() {
        h = null, k()
    }
    if (d("ExecutionEnvironment").canUseDOM) {
        d = document.documentElement;
        if (d)
            if (d.addEventListener) d.addEventListener("keydown", a, !0), d.addEventListener("keyup", b, !0);
            else if (d.attachEvent) {
            d = d.attachEvent;
            d("onkeydown", a);
            d("onkeyup", b)
        }
    }

    function e() {
        return !!h
    }

    function f() {
        return h
    }
    g.isKeyDown = e;
    g.getKeyDownCode = f
}), 98);
__d("TimerStorage", [], (function(a, b, c, d, e, f) {
    a = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    var g = {};
    Object.keys(a).forEach(function(a) {
        return g[a] = {}
    });
    b = babelHelpers["extends"]({}, a, {
        set: function(a, b) {
            g[a][b] = !0
        },
        unset: function(a, b) {
            delete g[a][b]
        },
        clearAll: function(a, b) {
            Object.keys(g[a]).forEach(b), g[a] = {}
        },
        getStorages: function() {
            return {}
        }
    });
    c = b;
    f["default"] = c
}), 66);
__d("setImmediate", ["TimeSlice", "TimerStorage", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b, d = function() {
            c("TimerStorage").unset(c("TimerStorage").IMMEDIATE, b);
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        c("TimeSlice").copyGuardForWrapper(a, d);
        for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
        b = c("setImmediateAcrossTransitions").apply(void 0, [d].concat(f));
        c("TimerStorage").set(c("TimerStorage").IMMEDIATE, b);
        return b
    }
    g["default"] = a
}), 98);
__d("Layer", ["invariant", "ArbiterMixin", "BehaviorsMixin", "BootloadedReact", "CSS", "ContextualThing", "DOM", "DataStore", "Event", "FBLogger", "HTML", "KeyEventController", "KeyStatus", "Parent", "Style", "ge", "isNode", "mixin", "removeFromArray", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    b("KeyStatus");
    var i = [],
        j = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a(a, d) {
                var e;
                e = b.call(this) || this;
                e._config = a || {};
                if (d) {
                    e._configure(e._config, d);
                    a = e._config.addedBehaviors || [];
                    e.enableBehaviors(e._getDefaultBehaviors().concat(a))
                } else c("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");
                return e
            }
            var e = a.prototype;
            e.init = function(a) {
                this._configure(this._config, a);
                a = this._config.addedBehaviors || [];
                this.enableBehaviors(this._getDefaultBehaviors().concat(a));
                this._initialized = !0;
                return this
            };
            e._configure = function(a, b) {
                var e = this;
                if (b) {
                    var f = c("isNode")(b),
                        g = typeof b === "string" || c("HTML").isHTML(b);
                    this.containsReactComponent = d("BootloadedReact").isValidElement(b);
                    !f && !g && !this.containsReactComponent && c("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");
                    if (g) b = c("HTML")(b).getRootNode();
                    else if (this.containsReactComponent) {
                        f = document.createElement("div");
                        var h = !0;
                        d("BootloadedReact").render(b, f, function() {
                            e.inform("reactshow"), h || e.updatePosition()
                        });
                        h = !1;
                        b = this._reactContainer = f
                    }
                }
                this._root = this._buildWrapper(a, b);
                a.attributes && c("DOM").setAttributes(this._root, a.attributes);
                a.classNames && a.classNames.forEach(d("CSS").addClass.bind(null, this._root));
                d("CSS").addClass(this._root, "uiLayer");
                a.causalElement && (this._causalElement = c("ge")(a.causalElement));
                a.permanent && (this._permanent = a.permanent);
                a.isStrictlyControlled && (this._isStrictlyControlled = a.isStrictlyControlled);
                d("DataStore").set(this._root, "layer", this)
            };
            e._getDefaultBehaviors = function() {
                return []
            };
            e.getCausalElement = function() {
                return this._causalElement
            };
            e.setCausalElement = function(a) {
                this._causalElement = a;
                return this
            };
            e.getInsertParent = function() {
                return this._insertParent || document.body
            };
            e.getRoot = function() {
                this._root || (this._destroyed ? c("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.") : c("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));
                return this._root
            };
            e.getContentRoot = function() {
                return this.getRoot()
            };
            e._buildWrapper = function(a, b) {
                return b
            };
            e.setInsertParent = function(a) {
                a && (this._shown && a !== this.getInsertParent() && (c("DOM").appendContent(a, this.getRoot()), this.updatePosition()), this._insertParent = a);
                return this
            };
            e.showAfterDelay = function(a) {
                window.setTimeout(this.show.bind(this), a)
            };
            e.show = function() {
                var b = this;
                if (this._shown) return this;
                var e = this.getRoot();
                e != null || h(0, 5142);
                this.inform("beforeshow");
                c("Style").set(e, "visibility", "hidden");
                c("Style").set(e, "overflow", "hidden");
                d("CSS").show(e);
                c("DOM").appendContent(this.getInsertParent(), e);
                this.updatePosition() !== !1 ? (this._shown = !0, this.inform("show"), a.inform("show", this), this._permanent || window.setTimeout(function() {
                    b._shown && i.push(b)
                }, 0)) : d("CSS").hide(e);
                c("Style").set(e, "visibility", "");
                c("Style").set(e, "overflow", "");
                c("Style").set(e, "opacity", "1");
                this.inform("aftershow");
                return this
            };
            e.hide = function(a) {
                if (this._isStrictlyControlled) {
                    this._shown && this.inform("runhide", a);
                    return this
                }
                return this._hide()
            };
            e._hide = function() {
                if (this._hiding || !this._shown || this.inform("beforehide") === !1) return this;
                this._hiding = !0;
                this.inform("starthide") !== !1 && this.finishHide();
                return this
            };
            e.conditionShow = function(a) {
                return a ? this.show() : this._hide()
            };
            e.finishHide = function() {
                if (this._shown) {
                    this._permanent || c("removeFromArray")(i, this);
                    this._hiding = !1;
                    this._shown = !1;
                    var b = this.getRoot();
                    b != null || h(0, 5143);
                    d("CSS").hide(b);
                    this.inform("hide");
                    a.inform("hide", this)
                }
            };
            e.isShown = function() {
                return this._shown
            };
            e.updatePosition = function() {
                return !0
            };
            e.destroy = function() {
                this.containsReactComponent && d("BootloadedReact").unmountComponentAtNode(this._reactContainer);
                this.finishHide();
                var b = this.getRoot();
                c("DOM").remove(b);
                this.destroyBehaviors();
                this.inform("destroy");
                a.inform("destroy", this);
                d("DataStore").remove(b, "layer");
                this._root = this._causalElement = null;
                this._destroyed = !0
            };
            a.init = function(a, b) {
                a.init(b)
            };
            a.initAndShow = function(a, b) {
                a.init(b).show()
            };
            a.show = function(a) {
                a.show()
            };
            a.showAfterDelay = function(a, b) {
                a.showAfterDelay(b)
            };
            a.getTopmostLayer = function() {
                return i[i.length - 1]
            };
            a.informBlur = function(a) {
                k = null;
                l = null;
                var b = i.length;
                if (!b) return;
                while (b--) {
                    var c = i[b],
                        e = c.getContentRoot();
                    e != null || h(0, 5144);
                    if (d("ContextualThing").containsIncludingLayers(e, a)) return;
                    if (c.inform("blur", {
                            target: a
                        }) === !1 || c.isShown()) return
                }
            };
            return a
        }(c("mixin")(d("ArbiterMixin"), c("BehaviorsMixin")));
    Object.assign(j, d("ArbiterMixin"));
    Object.assign(j.prototype, {
        _destroyed: !1,
        _initialized: !1,
        _root: null,
        _shown: !1,
        _hiding: !1,
        _causalElement: null,
        _reactContainer: null
    });
    c("Event").listen(document.documentElement, "keydown", function(a) {
        if (c("KeyEventController").filterEventTargets(a, "keydown"))
            for (var b = i.length - 1; b >= 0; b--)
                if (i[b].inform("key", a) === !1) return !1;
        return !0
    }, c("Event").Priority.URGENT);
    var k;
    c("Event").listen(document.documentElement, "mousedown", function(a) {
        k = a.getTarget()
    });
    var l;
    c("Event").listen(document.documentElement, "mouseup", function(a) {
        l = a.getTarget(), c("setImmediate")(function() {
            k = null, l = null
        })
    });
    c("Event").listen(document.documentElement, "click", function(a) {
        var b = k,
            e = l;
        k = null;
        l = null;
        var f = i.length;
        if (!f) return;
        f = a.getTarget();
        if (f !== e || f !== b) return;
        if (!c("DOM").contains(document.documentElement, f)) return;
        if (f.offsetWidth != null && !f.offsetWidth) return;
        if (d("Parent").byClass(f, "generic_dialog")) return;
        j.informBlur(f)
    });
    g["default"] = j
}), 98);
__d("isTruthy", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a != null && Boolean(a)
    }
    f["default"] = a
}), 66);
__d("Popup", ["isTruthy"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d, e) {
        var f = [];
        c("isTruthy")(b) && f.push("width=" + b);
        c("isTruthy")(d) && f.push("height=" + d);
        var g = document.body;
        if (g != null && b != null && b !== 0 && d != null && d !== 0) {
            var h = "screenX" in window ? window.screenX : window.screenLeft,
                i = "screenY" in window ? window.screenY : window.screenTop,
                j = "outerWidth" in window ? window.outerWidth : g.clientWidth;
            g = "outerHeight" in window ? window.outerHeight : g.clientHeight - 22;
            h = Math.floor(h + (j - b) / 2);
            j = Math.floor(i + (g - d) / 2.5);
            f.push("left=" + h);
            f.push("top=" + j)
        }
        f.push("scrollbars");
        return window.open(a, e != null && e !== "" ? e : "_blank", f.join(","))
    }
    g.open = a
}), 98);
__d("getViewportDimensions", ["UserAgent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        var a = null;
        return function() {
            var b = document.body;
            if (b == null) return null;
            (a == null || !b.contains(a)) && (a = document.createElement("div"), a.style.left = Number.MAX_SAFE_INTEGER + "px", a.style.width = "100%", a.style.height = "100%", a.style.position = "fixed", b.appendChild(a));
            return a
        }
    }();

    function i() {
        var a;
        document.documentElement && (a = document.documentElement.clientWidth);
        a == null && document.body && (a = document.body.clientWidth);
        return a || 0
    }

    function j() {
        var a;
        document.documentElement && (a = document.documentElement.clientHeight);
        a == null && document.body && (a = document.body.clientHeight);
        return a || 0
    }

    function k() {
        return {
            width: window.innerWidth || i(),
            height: window.innerHeight || j()
        }
    }
    k.withoutScrollbars = function() {
        return c("UserAgent").isPlatform("Android") ? k() : {
            width: i(),
            height: j()
        }
    };
    k.layout = function() {
        var a, b = h();
        return {
            width: (a = b == null ? void 0 : b.clientWidth) != null ? a : i(),
            height: (a = b == null ? void 0 : b.clientHeight) != null ? a : j()
        }
    };
    g["default"] = k
}), 98);
__d("isFalsey", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a == null || !Boolean(a)
    }
    f["default"] = a
}), 66);
__d("PopupWindow", ["DOMDimensions", "DOMQuery", "FlowMigrationUtilsForLegacyFiles", "Layer", "Popup", "getViewportDimensions", "isFalsey"], (function(a, b, c, d, e, f, g) {
    var h = {
        allowShrink: !0,
        strategy: "vector",
        timeout: 100,
        widthElement: null
    };

    function b(a) {
        Object.assign(h, a), window.setInterval(i, h.timeout)
    }

    function i() {
        var a = c("getViewportDimensions")(),
            b = j(),
            e = c("Layer").getTopmostLayer();
        if (e) {
            e = (e = e.getRoot()) == null ? void 0 : e.firstChild;
            e || d("FlowMigrationUtilsForLegacyFiles").invariantViolation("topMostLayer.getRoot().firstChild is null.");
            var f = d("DOMDimensions").getElementDimensions(e);
            f.height += d("DOMDimensions").measureElementBox(e, "height", !0, !0, !0);
            f.width += d("DOMDimensions").measureElementBox(e, "width", !0, !0, !0);
            b.height = Math.max(b.height, f.height);
            b.width = Math.max(b.width, f.width)
        }
        e = b.height - a.height;
        f = b.width - a.width;
        f < 0 && c("isFalsey")(h.widthElement) && (f = 0);
        f = f > 1 ? f : 0;
        c("isFalsey")(h.allowShrink) && e < 0 && (e = 0);
        if (e || f) try {
            window.console && window.console.firebug, window.resizeBy(f, e), f && window.moveBy(f / -2, 0)
        } catch (a) {}
    }

    function j() {
        var b = d("DOMDimensions").getDocumentDimensions();
        if (h.strategy === "offsetHeight") {
            var e = document.body;
            if (!e) d("FlowMigrationUtilsForLegacyFiles").invariantViolation("document.body is null.");
            else {
                b.height = (e = e.offsetHeight) != null ? e : 0
            }
        }
        if (c("isFalsey")(h.widthElement) && typeof h.widthElement === "string") {
            e = d("DOMQuery").scry(document.body, h.widthElement)[0];
            e && (b.width = d("DOMDimensions").getElementDimensions(e).width)
        }
        e = a.Dialog;
        e && e.max_bottom && e.max_bottom > b.height && (b.height = e.max_bottom);
        return b
    }

    function e(a, b, c, e) {
        return d("Popup").open(a, c, b, e)
    }
    g._opts = h;
    g.init = b;
    g._resizeCheck = i;
    g._getDocumentSize = j;
    g.open = e
}), 98);
__d("PluginConfirm", ["DOMEvent", "DOMEventListener", "PlatformVersioning", "PluginMessage", "PopupWindow", "URI"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        Object.assign(this, {
            plugin: a,
            confirm_params: {},
            return_params: (g || (g = b("URI"))).getRequestURI().getQueryData()
        }), this.addReturnParams({
            ret: "sentry"
        }), delete this.return_params.hash
    }
    Object.assign(h.prototype, {
        addConfirmParams: function(a) {
            Object.assign(this.confirm_params, a)
        },
        addReturnParams: function(a) {
            Object.assign(this.return_params, a);
            return this
        },
        start: function() {
            var a = b("PlatformVersioning").versionAwareURI(new(g || (g = b("URI")))("/plugins/error/confirm/" + this.plugin)).addQueryData(this.confirm_params).addQueryData({
                secure: g.getRequestURI().isSecure(),
                plugin: this.plugin,
                return_params: JSON.stringify(this.return_params)
            });
            this.popup = b("PopupWindow").open(a.toString(), 320, 486);
            b("PluginMessage").listen();
            return this
        }
    });
    h.starter = function(a, b, c) {
        a = new h(a);
        a.addConfirmParams(b || {});
        a.addReturnParams(c || {});
        return a.start.bind(a)
    };
    h.listen = function(a, c, d, e) {
        b("DOMEventListener").add(a, "click", function(a) {
            new(b("DOMEvent"))(a).kill(), h.starter(c, d, e)()
        })
    };
    e.exports = h
}), null);
__d("FocusEvent", ["Event", "Run", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = !1;

    function j(a, b) {
        if (h[a]) {
            b = h[a].indexOf(b);
            b >= 0 && h[a].splice(b, 1);
            h[a].length === 0 && delete h[a]
        }
    }

    function k(a) {
        var b = a.getTarget();
        if (h[b.id] && h[b.id].length > 0) {
            var c = a.type === "focusin" || a.type === "focus";
            h[b.id].forEach(function(a) {
                a(c)
            })
        }
    }

    function l() {
        if (i) return;
        c("Event").listen(document.documentElement, "focusout", k);
        c("Event").listen(document.documentElement, "focusin", k);
        i = !0
    }

    function a(a, b) {
        l();
        var e = c("getOrCreateDOMID")(a);
        h[e] || (h[e] = []);
        h[e].push(b);
        var f = !1;

        function g() {
            f || (j(e, b), i && (i.remove(), i = null), f = !0)
        }
        var i = d("Run").onLeave(function() {
            c("ge")(e) || g()
        });
        return {
            remove: function() {
                g()
            }
        }
    }
    g.listen = a
}), 98);
__d("isStringNullOrEmpty", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a == null || a === ""
    }
    f["default"] = a
}), 66);
__d("tooltipPropsFor", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        if (!a) return {};
        a = {
            "data-tooltip-content": a,
            "data-hover": "tooltip"
        };
        b && (a["data-tooltip-position"] = b);
        c && (a["data-tooltip-alignh"] = c);
        return a
    }
    f["default"] = a
}), 66);
__d("TooltipData", ["DOM", "DataStore", "FBLogger", "URI", "getElementText", "ifRequired", "isStringNullOrEmpty", "isTextNode", "killswitch", "tooltipPropsFor"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        var c = a.getAttribute("data-tooltip-delay");
        c = c ? parseInt(c, 10) || 1e3 : 0;
        if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) return babelHelpers["extends"]({
            className: a.getAttribute("data-tooltip-root-class"),
            content: a.getAttribute("data-tooltip-content"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction")
        }, b("DataStore").get(a, "tooltip"));
        else {
            var d;
            d = (d = b("DataStore").get(a, "tooltip")) != null ? d : {};
            var e = d.content;
            d = babelHelpers.objectWithoutPropertiesLoose(d, ["content"]);
            var f = a.getAttribute("data-tooltip-content");
            !b("isStringNullOrEmpty")(e) && !b("isStringNullOrEmpty")(f) && b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore', a.getAttribute("data-tooltip-content"));
            return babelHelpers["extends"]({
                className: a.getAttribute("data-tooltip-root-class"),
                delay: c,
                position: a.getAttribute("data-tooltip-position") || "above",
                alignH: a.getAttribute("data-tooltip-alignh") || "left",
                offsetY: a.getAttribute("data-tooltip-offsety") || 0,
                suppress: !1,
                overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
                persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
                textDirection: a.getAttribute("data-tooltip-text-direction"),
                content: (a = (c = f) != null ? c : e) != null ? a : null
            }, d)
        }
    }

    function i(a, c) {
        var d = h(a);
        if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) b("DataStore").set(a, "tooltip", {
            content: c.content || d.content,
            position: c.position || d.position,
            alignH: c.alignH || d.alignH,
            suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
            overflowDisplay: c.overflowDisplay || d.overflowDisplay,
            persistOnClick: c.persistOnClick || d.persistOnClick
        });
        else {
            !b("isStringNullOrEmpty")(c.content) && !b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content")) && b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid', a.getAttribute("data-tooltip-content"));
            b("DataStore").set(a, "tooltip", {
                content: c.content || ((a = b("DataStore").get(a, "tooltip")) != null ? a : {}).content,
                position: c.position || d.position,
                alignH: c.alignH || d.alignH,
                suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
                overflowDisplay: c.overflowDisplay || d.overflowDisplay,
                persistOnClick: c.persistOnClick || d.persistOnClick
            })
        }
    }

    function j(a, b) {
        i(a, b), a.setAttribute("data-hover", "tooltip")
    }

    function k(a, b) {}
    var l = {
        remove: function(a, c) {
            c = c === void 0 ? {} : c;
            c = c.onlyCleanupDataStore;
            c = c === void 0 ? !1 : c;
            b("DataStore").remove(a, "tooltip");
            c || (a.removeAttribute("data-hover"), a.removeAttribute("data-tooltip-position"), a.removeAttribute("data-tooltip-alignh"), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.hide()
            }))
        },
        set: function(a, c, d, e) {
            k(a, c);
            if (c instanceof(g || (g = b("URI")))) a.setAttribute("data-tooltip-uri", c), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.fetchIfNecessary(a)
            });
            else if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) {
                var f = l._store({
                    context: a,
                    content: c,
                    position: d,
                    alignH: e
                });
                typeof f.content !== "string" ? a.setAttribute("data-tooltip-content", b("getElementText")(f.content)) : a.setAttribute("data-tooltip-content", f.content);
                l.refreshIfActive(a)
            } else a.removeAttribute("data-tooltip-content"), l._store({
                context: a,
                content: c,
                position: d,
                alignH: e
            }), l.refreshIfActive(a)
        },
        refreshIfActive: function(a) {
            b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.show(a)
            })
        },
        _store: function(a) {
            var c = a.context,
                d = a.content,
                e = a.position;
            a = a.alignH;
            k(c, d);
            b("isTextNode")(d) && (d = b("getElementText")(d));
            var f = !1;
            typeof d !== "string" ? d = b("DOM").create("div", {}, d) : f = d === "";
            a = {
                alignH: a,
                content: d,
                position: e,
                suppress: f
            };
            j(c, a);
            return a
        },
        propsFor: b("tooltipPropsFor"),
        enableDisplayOnOverflow: function(a) {
            a.removeAttribute("data-tooltip-display"), j(a, {
                overflowDisplay: !0
            })
        },
        enablePersistOnClick: function(a) {
            a.removeAttribute("data-pitloot-persistOnClick"), j(a, {
                persistOnClick: !0
            })
        },
        suppress: function(a, b) {
            i(a, {
                suppress: b
            })
        },
        _get: h
    };
    e.exports = l
}), null);
__d("cx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("cx: Unexpected class transformation.")
    }
    f["default"] = a
}), 66);
__d("Focus", ["cx", "CSS", "Event", "FocusEvent", "KeyStatus", "TooltipData", "ifRequired"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        b === void 0 && (b = !1);
        if (a) {
            var e = c("ifRequired")("VirtualCursorStatus", function(a) {
                return a.isVirtualCursorTriggered()
            }, function() {
                return !1
            });
            b || d("KeyStatus").isKeyDown() || e ? j(a) : i(a)
        }
    }

    function i(a) {
        if (a) {
            d("CSS").addClass(a, "_5f0v");
            var b = c("Event").listen(a, "blur", function() {
                a && d("CSS").removeClass(a, "_5f0v"), b.remove()
            });
            d("TooltipData").suppress(a, !0);
            j(a);
            d("TooltipData").suppress(a, !1)
        }
    }

    function b(a, b) {
        d("CSS").addClass(a, "_5f0v");
        return d("FocusEvent").listen(a, this.performRelocation.bind(this, a, b))
    }

    function e(a, b, e) {
        d("CSS").addClass(a, "_5f0v");
        a = c("ifRequired")("FocusRing", function(a) {
            return a.usingKeyboardNavigation()
        }, function() {
            return !0
        });
        e = e && a;
        d("CSS").conditionClass(b, "_3oxt", e);
        d("CSS").conditionClass(b, "_16jm", e)
    }

    function j(a) {
        try {
            a.tabIndex = a.tabIndex, a.focus()
        } catch (a) {}
    }
    g.set = a;
    g.setWithoutOutline = i;
    g.relocate = b;
    g.performRelocation = e
}), 98);
__d("AsyncDOM", ["CSS", "DOM", "FBLogger"], (function(a, b, c, d, e, f) {
    a = {
        invoke: function(a, c) {
            for (var d = 0; d < a.length; ++d) {
                var e = a[d],
                    f = e[0],
                    g = e[1],
                    h = e[2];
                e = e[3];
                h = h && c || null;
                g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
                f != "eval" && !h && b("FBLogger")("async_dom").warn("Could not find relativeTo element for %s AsyncDOM operation based on selector: %s", f, g);
                switch (f) {
                    case "eval":
                        new Function(e).apply(h);
                        break;
                    case "hide":
                        b("CSS").hide(h);
                        break;
                    case "show":
                        b("CSS").show(h);
                        break;
                    case "setContent":
                        b("DOM").setContent(h, e);
                        break;
                    case "appendContent":
                        b("DOM").appendContent(h, e);
                        break;
                    case "prependContent":
                        b("DOM").prependContent(h, e);
                        break;
                    case "insertAfter":
                        b("DOM").insertAfter(h, e);
                        break;
                    case "insertBefore":
                        b("DOM").insertBefore(h, e);
                        break;
                    case "remove":
                        b("DOM").remove(h);
                        break;
                    case "replace":
                        b("DOM").replace(h, e);
                        break;
                    default:
                        b("FBLogger")("async_dom").warn("Received invalid command %s for AsyncDOM operation", f)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("AsyncResponse", ["invariant", "Bootloader", "FBLogger", "HTML"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.error = 0, this.errorSummary = null, this.errorDescription = null, this.onload = null, this.replay = !1, this.payload = b, this.request = a, this.silentError = !1, this.transientError = !1, this.blockedAction = !1, this.is_last = !0, this.responseHeaders = null
        }
        var b = a.prototype;
        b.getRequest = function() {
            return this.request
        };
        b.getPayload = function() {
            return this.payload
        };
        b.toError = function() {
            this.error !== 0 || h(0, 5599);
            var a = this.errorSummary || "",
                b = this.getErrorDescriptionString() || "",
                c = new Error(a.toString() + ": " + b);
            Object.assign(c, {
                code: this.error,
                description: this.errorDescription || "",
                descriptionString: b,
                response: this,
                summary: a,
                isSilent: this.silentError,
                isTransient: this.transientError
            });
            return c
        };
        b.getError = function() {
            return this.error
        };
        b.getErrorSummary = function() {
            return this.errorSummary
        };
        b.setErrorSummary = function(a) {
            a = a === void 0 ? null : a;
            this.errorSummary = a;
            return this
        };
        b.getErrorDescription = function() {
            return this.errorDescription
        };
        b.getErrorDescriptionString = function() {
            var a = this.getErrorDescription();
            if (a == null) return null;
            if (c("HTML").isHTML(a)) {
                var b = new(c("HTML"))(a);
                return b.getRootNode().textContent
            }
            return a.toString()
        };
        b.getErrorIsWarning = function() {
            return !!this.errorIsWarning
        };
        b.isSilent = function() {
            return !!this.silentError
        };
        b.isTransient = function() {
            return !!this.transientError
        };
        b.isBlockedAction = function() {
            return !!this.blockedAction
        };
        b.getResponseHeader = function(a) {
            var b = this.responseHeaders;
            if (!b) return null;
            b = b.replace(/^\n/, "");
            a = a.toLowerCase();
            b = b.split("\r\n");
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                    e = d.indexOf(": ");
                if (e <= 0) continue;
                var f = d.substring(0, e).toLowerCase();
                if (f === a) return d.substring(e + 2)
            }
            return null
        };
        a.defaultErrorHandler = function(b) {
            try {
                !b.silentError ? a.verboseErrorHandler(b) : c("FBLogger")("async_response").catching(b.toError()).warn("default error handler called")
            } catch (a) {
                alert(b)
            }
        };
        a.verboseErrorHandler = function(a, b) {
            c("Bootloader").loadModules(["ExceptionDialog"], function(c) {
                return c.showAsyncError(a, b)
            }, "AsyncResponse")
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("Deferred", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    b("Promise").resolve();
    a = function() {
        function a(a) {
            var c = this;
            a = a || b("Promise");
            this.$1 = !1;
            this.$2 = new a(function(a, b) {
                c.$3 = a, c.$4 = b
            })
        }
        var c = a.prototype;
        c.getPromise = function() {
            return this.$2
        };
        c.resolve = function(a) {
            this.$1 = !0, this.$3(a)
        };
        c.reject = function(a) {
            this.$1 = !0, this.$4(a)
        };
        c.isSettled = function() {
            return this.$1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("FetchStreamConfig", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        delim: "/*<!-- fetch-stream -->*/"
    })
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
__d("FetchStreamTransport", ["ArbiterMixin", "FBLogger", "FetchStreamConfig", "StreamBlockReader", "TimeSlice", "URI", "mixin", "nullthrows", "regeneratorRuntime"], (function $module_FetchStreamTransport(global, require, importDefault, importNamespace, requireLazy, module, exports) {
    var instance_count = 0,
        FetchStreamTransport = function(_ref) {
            babelHelpers.inheritsLoose(FetchStreamTransport, _ref);

            function FetchStreamTransport(uri) {
                var _this;
                if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder) throw new Error("fetch stream transport is not supported here");
                _this = _ref.call(this) || this;
                _this.$FetchStreamTransport6 = null;
                _this.$FetchStreamTransport1 = uri;
                _this.$FetchStreamTransport3 = !1;
                _this.$FetchStreamTransport4 = !1;
                _this.$FetchStreamTransport5 = !1;
                _this.$FetchStreamTransport2 = ++instance_count;
                return babelHelpers.assertThisInitialized(_this) || babelHelpers.assertThisInitialized(_this)
            }
            var _proto = FetchStreamTransport.prototype;
            _proto.hasFinished = function hasFinished() {
                return this.$FetchStreamTransport5
            };
            _proto.getRequestURI = function getRequestURI() {
                return new(importDefault("URI"))(this.$FetchStreamTransport1).addQueryData({
                    __a: 1,
                    __adt: this.$FetchStreamTransport2,
                    __req: "fetchstream_" + this.$FetchStreamTransport2,
                    ajaxpipe_fetch_stream: 1
                })
            };
            _proto.send = function send() {
                if (this.$FetchStreamTransport3) throw new Error("FetchStreamTransport instances cannot be re-used.");
                this.$FetchStreamTransport3 = !0;
                var req = new Request(this.getRequestURI().toString(), {
                    mode: "same-origin",
                    credentials: "include"
                });
                this.$FetchStreamTransport6 = importDefault("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on first response");
                var fetchPromise = self.fetch(req, {
                    redirect: "follow"
                });
                this.$FetchStreamTransport7(fetchPromise)
            };
            _proto.$FetchStreamTransport7 = function $FetchStreamTransport7(fetchPromise) {
                var _this = this,
                    response, reader, first, _loop, _ret;
                return require("regeneratorRuntime").async(function $FetchStreamTransport7$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return require("regeneratorRuntime").awrap(fetchPromise);
                        case 3:
                            response = _context2.sent;
                            _context2.next = 9;
                            break;
                        case 6:
                            _context2.prev = 6, _context2.t0 = _context2["catch"](0), this.abort();
                        case 9:
                            if (!(!response || !response.body || !response.ok)) {
                                _context2.next = 12;
                                break
                            }
                            this.abort();
                            return _context2.abrupt("return");
                        case 12:
                            reader = new(importDefault("StreamBlockReader"))(response.body), first = !0, _loop = function _loop() {
                                var nextData;
                                return require("regeneratorRuntime").async(function _loop$(_context) {
                                    while (1) switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return require("regeneratorRuntime").awrap(reader.readUntilStringOrEnd(importDefault("FetchStreamConfig").delim));
                                        case 2:
                                            nextData = _context.sent;
                                            if (!_this.$FetchStreamTransport4) {
                                                _context.next = 5;
                                                break
                                            }
                                            return _context.abrupt("return", "break");
                                        case 5:
                                            importDefault("nullthrows")(_this.$FetchStreamTransport6)(function() {
                                                if (first && nextData.startsWith("<")) {
                                                    importDefault("FBLogger")("FetchStreamTransport").mustfix("Endpoint: %s is sending a raw HTML response instead of properly formatted payload", _this.$FetchStreamTransport1.toString());
                                                    var node = document.createElement("div");
                                                    node.innerHTML = nextData;
                                                    var scripts = node.getElementsByTagName("script");
                                                    for (var i = 0; i < scripts.length; i++) eval(scripts[i].innerHTML);
                                                    _this.$FetchStreamTransport5 = !0;
                                                    return
                                                }
                                                first = !1;
                                                var parsedResponse = JSON.parse(nextData);
                                                reader.isDone() || parsedResponse.finished ? _this.$FetchStreamTransport5 = !0 : _this.$FetchStreamTransport6 = importDefault("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on next response");
                                                _this.inform("response", parsedResponse.content)
                                            });
                                        case 6:
                                        case "end":
                                            return _context.stop()
                                    }
                                }, null, this)
                            };
                        case 15:
                            if (!(!this.$FetchStreamTransport5 && !this.$FetchStreamTransport4)) {
                                _context2.next = 23;
                                break
                            }
                            _context2.next = 18;
                            return require("regeneratorRuntime").awrap(_loop());
                        case 18:
                            _ret = _context2.sent;
                            if (!(_ret === "break")) {
                                _context2.next = 21;
                                break
                            }
                            return _context2.abrupt("break", 23);
                        case 21:
                            _context2.next = 15;
                            break;
                        case 23:
                        case "end":
                            return _context2.stop()
                    }
                }, null, this, [
                    [0, 6]
                ])
            };
            _proto.abort = function abort() {
                var _this2 = this;
                if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
                this.$FetchStreamTransport4 = !0;
                this.$FetchStreamTransport5 = !0;
                if (this.$FetchStreamTransport6) {
                    var continuation = this.$FetchStreamTransport6;
                    continuation(function() {
                        _this2.inform("abort")
                    })
                } else this.inform("abort")
            };
            return FetchStreamTransport
        }(importDefault("mixin")(importNamespace("ArbiterMixin")));
    exports["default"] = FetchStreamTransport
}), 98);
__d("HTTPErrors", ["emptyFunction"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return {
            summary: "HTTP Error",
            description: "Unknown HTTP error #" + a
        }
    }
    b = {
        get: a,
        getAll: c("emptyFunction").thatReturns(new Map())
    };
    d = b;
    g["default"] = d
}), 98);
__d("JSCC", [], (function $module_JSCC(global, require, requireDynamic, requireLazy, module, exports) {
    var factories = {};

    function createFactory(constructor) {
        var instance, constructed = !1;
        return function() {
            constructed || (instance = constructor(), constructed = !0);
            return instance
        }
    }

    function get(key) {
        if (!factories[key]) throw new Error("JSCC entry is missing");
        return factories[key]()
    }

    function init(constructors) {
        for (var key in constructors) factories[key] = createFactory(constructors[key]);
        return function clearJSCC() {
            for (var _key in constructors) delete factories[_key]
        }
    }

    function parse(jsccMapString) {
        return eval(jsccMapString)
    }
    exports.get = get;
    exports.init = init;
    exports.parse = parse
}), 66);
__d("SessionName", ["SessionNameConfig"], (function(a, b, c, d, e, f) {
    e.exports = {
        getName: function() {
            return b("SessionNameConfig").seed
        }
    }
}), null);
__d("getCrossOriginTransport", ["invariant", "ExecutionEnvironment", "err"], (function(a, b, c, d, e, f, g) {
    function h() {
        if (!b("ExecutionEnvironment").canUseDOM) throw b("err")("getCrossOriginTransport: %s", "Cross origin transport unavailable in the server environment.");
        try {
            var a = new XMLHttpRequest();
            !("withCredentials" in a) && typeof XDomainRequest !== "undefined" && (a = new XDomainRequest());
            return a
        } catch (a) {
            throw b("err")("getCrossOriginTransport: %s", a.message)
        }
    }
    h.withCredentials = function() {
        var a = h();
        "withCredentials" in a || g(0, 5150);
        var b = a.open;
        a.open = function() {
            b.apply(this, arguments), this.withCredentials = !0
        };
        return a
    };
    e.exports = h
}), null);
__d("ZeroRewrites", ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"], (function(a, b, c, d, e, f) {
    var g, h = {
        rewriteURI: function(a) {
            if (!b("isFacebookURI")(a) || h._isWhitelisted(a)) return a;
            var c = h._getRewrittenSubdomain(a);
            c !== null && c !== void 0 && (a = a.setSubdomain(c));
            return a
        },
        getTransportBuilderForURI: function(a) {
            return h.isRewritten(a) ? b("getCrossOriginTransport").withCredentials : b("getSameOriginTransport")
        },
        isRewriteSafe: function(a) {
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a)) return !1;
            var c = h._getCurrentURI().getDomain(),
                d = new(g || (g = b("URI")))(a).qualify().getDomain();
            return c === d || h.isRewritten(a)
        },
        isRewritten: function(a) {
            a = a.getQualifiedURI();
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a) || h._isWhitelisted(a)) return !1;
            var c = a.getSubdomain(),
                d = h._getCurrentURI(),
                e = h._getRewrittenSubdomain(d);
            return a.getDomain() !== d.getDomain() && c === e
        },
        _isWhitelisted: function(a) {
            a = a.getPath();
            a.endsWith("/") || (a += "/");
            return b("ZeroRewriteRules").whitelist && b("ZeroRewriteRules").whitelist[a] === 1
        },
        _getRewrittenSubdomain: function(a) {
            a = a.getQualifiedURI().getSubdomain();
            return b("ZeroRewriteRules").rewrite_rules[a]
        },
        _getCurrentURI: function() {
            return new(g || (g = b("URI")))("/").qualify()
        }
    };
    e.exports = h
}), null);
__d("bind", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        if (typeof b !== "string") return Function.prototype.bind.apply(b, [a].concat(c));

        function d() {
            var d = c.concat(Array.prototype.slice.call(arguments));
            if (a[b]) return a[b].apply(a, d)
        }
        d.toString = function() {
            return "bound lazily: " + a[b]
        };
        return d
    }
    e.exports = a
}), null);
__d("errorCode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
    }
    f["default"] = a
}), 66);
__d("executeAfter", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return function() {
            a.apply(c || this, arguments), b.apply(c || this, arguments)
        }
    }
    e.exports = a
}), null);
__d("FbtErrorListenerWWW", ["FBLogger", "killswitch"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = a.hash, this.$2 = a.translation
        }
        var b = a.prototype;
        b.onStringSerializationError = function(a) {
            var b = "Context not logged.";
            if (!c("killswitch")("JS_RELIABILITY_FBT_LOGGING")) try {
                var d = JSON.stringify(a);
                d != null && (b = d.substr(0, 250))
            } catch (a) {
                b = a.message
            }
            d = (a == null ? void 0 : (d = a.constructor) == null ? void 0 : d.name) || "";
            c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)', this.$1, this.$2, b, typeof a, d)
        };
        b.onStringMethodUsed = function(a) {
            c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", a)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FbtReactUtil", [], (function(a, b, c, d, e, f) {
    a = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
    var g = !1;
    b = {
        REACT_ELEMENT_TYPE: a,
        injectReactShim: function(a) {
            var b = {
                validated: !0
            };
            g ? Object.defineProperty(a, "_store", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: b
            }) : a._store = b
        }
    };
    e.exports = b
}), null);
__d("FbtResult", ["FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        return a.content
    };
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            d = a.call(this, c, d) || this;
            d.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
            d.key = null;
            d.ref = null;
            d.type = g;
            d.props = {
                content: c
            };
            return d
        }
        c.get = function(a) {
            return new c(a.contents, a.errorListener)
        };
        return c
    }(b("FbtResultBase"));
    e.exports = a
}), null);
__d("FbtPureStringResult", ["FbtResult"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("FbtResult"));
    e.exports = a
}), null);
__d("getFbsResult", ["FbtPureStringResult"], (function(a, b, c, d, e, f) {
    function a(a) {
        return new(b("FbtPureStringResult"))(a.contents, a.errorListener)
    }
    e.exports = a
}), null);
__d("InlineFbtResult", ["cr:1183579"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1183579")
}), 98);
__d("TransAppInlineMode", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        STRING_MANAGER: "STRING_MANAGER",
        TRANSLATION: "TRANSLATION",
        APPROVE: "APPROVE",
        REPORT: "REPORT",
        NO_INLINE: "NO_INLINE"
    });
    f["default"] = a
}), 66);
__d("getUnwrappedFbt", ["FbtResultGK"], (function(a, b, c, d, e, f) {
    function a(a) {
        a = a.contents;
        var c = b("FbtResultGK").inlineMode,
            d = b("FbtResultGK").shouldReturnFbtResult;
        if (!d && c !== "REPORT") return (a == null ? void 0 : a.length) === 1 && typeof a[0] === "string" ? a[0] : a
    }
    e.exports = a
}), null);
__d("getFbtResult", ["FbtResult", "FbtResultGK", "InlineFbtResult", "getUnwrappedFbt", "gkx", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    if (c("gkx")("708253") && c("FbtResultGK").inlineMode === "TRANSLATION") {
        c("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. " + ("[inlineMode=" + ((b = c("FbtResultGK").inlineMode) != null ? b : "") + "]") + ("[runtime_site_is_comet=" + String(c("gkx")("708253")) + "]"), "internationalization")
    }

    function a(a) {
        var b = c("getUnwrappedFbt")(a);
        if (b != null) return b;
        b = a.contents;
        var d = a.patternString,
            e = a.patternHash;
        return c("FbtResultGK").inlineMode != null && c("FbtResultGK").inlineMode !== "NO_INLINE" ? new(c("InlineFbtResult"))(b, c("FbtResultGK").inlineMode, d, e) : c("FbtResult").get(a)
    }
    g["default"] = a
}), 98);
__d("getTranslatedInput", [], (function(a, b, c, d, e, f) {
    var g = "B!N@$T",
        h = {};

    function a(a) {
        var b = a.table;
        typeof b === "string" && b.startsWith(g) && (b in h || (h[b] = JSON.parse(b.substring(g.length))), b = h[b]);
        return {
            table: b,
            args: a.args
        }
    }
    f["default"] = a
}), 66);
__d("translationOverrideListener", ["requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("IntlQtEventFalcoEvent").__setRef("translationOverrideListener");

    function a(a) {
        h.onReady(function(b) {
            return b.log(function() {
                return {
                    hash: a
                }
            })
        })
    }
    g["default"] = a
}), 98);
__d("FbtEnv", ["FbtErrorListenerWWW", "FbtHooks", "IntlViewerContext", "getFbsResult", "getFbtResult", "getTranslatedInput", "promiseDone", "requireDeferred", "translationOverrideListener"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = c("requireDeferred")("FbtLogging").__setRef("FbtEnv"),
        j = !1;

    function a() {
        if (j) return;
        j = !0;
        (h || (h = b("FbtHooks"))).register({
            errorListener: function(a) {
                return new(c("FbtErrorListenerWWW"))(a)
            },
            getFbsResult: c("getFbsResult"),
            getFbtResult: c("getFbtResult"),
            getTranslatedInput: c("getTranslatedInput"),
            onTranslationOverride: c("translationOverrideListener"),
            getViewerContext: function() {
                return c("IntlViewerContext")
            },
            logImpression: function(a) {
                return c("promiseDone")(i.load().then(function(b) {
                    return b.logImpression == null ? void 0 : b.logImpression(a)
                }))
            }
        })
    }
    g.setupOnce = a
}), 98);
__d("FbtHooksImpl", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        getErrorListener: function(a) {
            return g.errorListener == null ? void 0 : g.errorListener(a)
        },
        logImpression: function(a) {
            g.logImpression == null ? void 0 : g.logImpression(a)
        },
        onTranslationOverride: function(a) {
            g.onTranslationOverride == null ? void 0 : g.onTranslationOverride(a)
        },
        getFbsResult: function(a) {
            return g.getFbsResult(a)
        },
        getFbtResult: function(a) {
            return g.getFbtResult(a)
        },
        getTranslatedInput: function(a) {
            var b;
            return (b = g.getTranslatedInput == null ? void 0 : g.getTranslatedInput(a)) != null ? b : a
        },
        getViewerContext: function() {
            return g.getViewerContext()
        },
        register: function(a) {
            Object.assign(g, a)
        }
    };
    e.exports = a
}), null);
__d("FbtHooks", ["FbtEnv", "FbtHooksImpl"], (function(a, b, c, d, e, f) {
    e.exports = b("FbtHooksImpl"), b("FbtEnv").setupOnce()
}), null);
__d("FbtTable", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        ARG: {
            INDEX: 0,
            SUBSTITUTION: 1
        },
        access: function(a, b, c) {
            if (c >= b.length) {
                typeof a === "string" || Array.isArray(a) || g(0, 21388, JSON.stringify(a));
                return a
            }
            var d = b[c];
            d = d[h.ARG.INDEX];
            if (d == null) return h.access(a, b, c + 1);
            typeof a !== "string" && !Array.isArray(a) || g(0, 20954, typeof a);
            for (var e = 0; e < d.length; ++e) {
                var f = a[d[e]];
                if (f == null) continue;
                f = h.access(f, b, c + 1);
                if (f != null) return f
            }
            return null
        }
    };
    e.exports = h
}), null);
__d("FbtTableAccessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getEnumResult: function(a) {
            return [
                [a], null
            ]
        },
        getGenderResult: function(a, b, c) {
            return [a, b]
        },
        getNumberResult: function(a, b, c) {
            return [a, b]
        },
        getSubstitution: function(a) {
            return [null, a]
        },
        getPronounResult: function(a) {
            return [
                [a, "*"], null
            ]
        }
    };
    e.exports = a
}), null);
__d("GenderConst", [], (function(a, b, c, d, e, f) {
    e.exports = {
        NOT_A_PERSON: 0,
        FEMALE_SINGULAR: 1,
        MALE_SINGULAR: 2,
        FEMALE_SINGULAR_GUESS: 3,
        MALE_SINGULAR_GUESS: 4,
        MIXED_UNKNOWN: 5,
        NEUTER_SINGULAR: 6,
        UNKNOWN_SINGULAR: 7,
        FEMALE_PLURAL: 8,
        MALE_PLURAL: 9,
        NEUTER_PLURAL: 10,
        UNKNOWN_PLURAL: 11
    }
}), null);
__d("IntlVariations", [], (function(a, b, c, d, e, f) {
    e.exports = {
        BITMASK_NUMBER: 28,
        BITMASK_GENDER: 3,
        NUMBER_ZERO: 16,
        NUMBER_ONE: 4,
        NUMBER_TWO: 8,
        NUMBER_FEW: 20,
        NUMBER_MANY: 12,
        NUMBER_OTHER: 24,
        GENDER_MALE: 1,
        GENDER_FEMALE: 2,
        GENDER_UNKNOWN: 3
    }
}), null);
__d("createTrustedFunction", ["TrustedTypes", "TrustedTypesConfig", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "unsafe-function",
        i, j = {
            createScript: function(a) {
                var b = trustedTypes;
                for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
                e.forEach(function(a) {
                    if (!b.isScript(a)) throw c("err")("Trusted Function requires TrustedScripts args only.")
                });
                var g = e.slice(0, -1).join(","),
                    h = e.pop().toString(),
                    i = "(function anonymous(\n    " + g + "\n    ) {\n    " + h + "\n    })";
                return i
            }
        };

    function k() {
        if (i) return;
        i = c("TrustedTypes").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function b() {
        for (var b = arguments.length, d = new Array(b), e = 0; e < b; e++) d[e] = arguments[e];
        if (typeof trustedTypes !== "undefined" && c("TrustedTypesConfig").useTrustedTypes) {
            var f;
            return a.eval((f = l()).createScript.apply(f, [""].concat(d)))
        } else return babelHelpers.construct(Function, d)
    }
    g["default"] = b
}), 98);
__d("createTrustedScriptWithoutValidation_DO_NOT_USE", ["TrustedTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "ls-script",
        i, j = {
            createScript: function(a) {
                return a
            }
        };

    function k() {
        if (i) return;
        i = c("TrustedTypes").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createScript(a)
    }
    g["default"] = a
}), 98);
__d("FbtNumberType", ["IntlNumberTypeConfig", "IntlVariations", "createTrustedFunction", "createTrustedScriptWithoutValidation_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    a = c("createTrustedFunction")(c("createTrustedScriptWithoutValidation_DO_NOT_USE")("IntlVariations"), c("createTrustedScriptWithoutValidation_DO_NOT_USE")('"use strict"; return (function(n) {' + c("IntlNumberTypeConfig").impl + "});"))(c("IntlVariations"));
    b = {
        getVariation: a
    };
    d = b;
    g["default"] = d
}), 98);
__d("IntlNumberType", ["FbtNumberType"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        return c("FbtNumberType")
    };
    g.get = a
}), 98);
__d("IntlVariationResolverImpl", ["invariant", "FbtHooks", "IntlNumberType", "IntlVariations"], (function(a, b, c, d, e, f, g) {
    var h, i = "_1";
    a = {
        EXACTLY_ONE: i,
        getNumberVariations: function(a) {
            var c = b("IntlNumberType").get((h || (h = b("FbtHooks"))).getViewerContext().locale).getVariation(a);
            c & b("IntlVariations").BITMASK_NUMBER || g(0, 11647, c, typeof c);
            return a === 1 ? [i, c, "*"] : [c, "*"]
        },
        getGenderVariations: function(a) {
            a & b("IntlVariations").BITMASK_GENDER || g(0, 11648, a, typeof a);
            return [a, "*"]
        }
    };
    e.exports = a
}), null);
__d("IntlVariationResolver", ["IntlVariationResolverImpl"], (function(a, b, c, d, e, f) {
    a = {
        getNumberVariations: function(a) {
            return b("IntlVariationResolverImpl").getNumberVariations(a)
        },
        getGenderVariations: function(a) {
            return b("IntlVariationResolverImpl").getGenderVariations(a)
        }
    };
    e.exports = a
}), null);
__d("NumberFormatConsts", ["NumberFormatConfig"], (function(a, b, c, d, e, f) {
    a = {
        get: function(a) {
            return b("NumberFormatConfig")
        }
    };
    e.exports = a
}), null);
__d("escapeRegex", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }
    e.exports = a
}), null);
__d("intlNumUtils", ["FbtHooks", "NumberFormatConsts", "escapeRegex"], (function(a, b, c, d, e, f) {
    var g, h = 3;
    f = ["\u0433\u0440\u043d.", "\u0434\u0435\u043d.", "\u043b\u0432.", "\u043c\u0430\u043d.", "\u0564\u0580.", "\u062c.\u0645.", "\u062f.\u0625.", "\u062f.\u0627.", "\u062f.\u0628.", "\u062f.\u062a.", "\u062f.\u062c.", "\u062f.\u0639.", "\u062f.\u0643.", "\u062f.\u0644.", "\u062f.\u0645.", "\u0631.\u0633.", "\u0631.\u0639.", "\u0631.\u0642.", "\u0631.\u064a.", "\u0644.\u0633.", "\u0644.\u0644.", "\u0783.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."];
    var i = {};

    function j(a) {
        i[a] || (i[a] = new RegExp(a, "i"));
        return i[a]
    }
    var k = j(f.reduce(function(a, c, d) {
        return a + (d ? "|" : "") + "(" + b("escapeRegex")(c) + ")"
    }, ""));

    function l(a, c, d, e, f, g, i) {
        d === void 0 && (d = "");
        e === void 0 && (e = ".");
        f === void 0 && (f = 0);
        g === void 0 && (g = {
            primaryGroupSize: h,
            secondaryGroupSize: h
        });
        var k = g.primaryGroupSize || h;
        g = g.secondaryGroupSize || k;
        i = i && i.digits;
        var l;
        c == null ? l = a.toString() : typeof a === "string" ? l = r(a, c) : l = p(a, c);
        a = l.split(".");
        c = a[0];
        l = a[1];
        if (Math.abs(parseInt(c, 10)).toString().length >= f) {
            a = "$1" + d + "$2$3";
            f = "(\\d)(\\d{" + (k - 0) + "})($|\\D)";
            k = c.replace(j(f), a);
            if (k != c) {
                c = k;
                f = "(\\d)(\\d{" + (g - 0) + "})(" + b("escapeRegex")(d) + ")";
                g = j(f);
                while ((k = c.replace(g, a)) != c) c = k
            }
        }
        i != null && (c = m(c, i), l = l && m(l, i));
        d = c;
        l && (d += e + l);
        return d
    }

    function m(a, b) {
        var c = "";
        for (var d = 0; d < a.length; ++d) {
            var e = b[a.charCodeAt(d) - 48];
            c += e !== void 0 ? e : a[d]
        }
        return c
    }

    function a(a, c) {
        var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return l(a, c, "", d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function n(a, c) {
        var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return l(a, c, d.numberDelimiter, d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function o(a) {
        return a && Math.floor(Math.log10(Math.abs(a)))
    }

    function c(a, b, c) {
        var d = o(a),
            e = a;
        d < c && (e = a * Math.pow(10, -d + c));
        a = Math.pow(10, o(e) - c + 1);
        e = Math.round(e / a) * a;
        if (d < c) {
            e /= Math.pow(10, -d + c);
            if (b == null) return n(e, c - d - 1)
        }
        return n(e, b)
    }

    function p(a, b) {
        b = b == null ? 0 : b;
        var c = Math.pow(10, b);
        a = a;
        a = Math.round(a * c) / c;
        a += "";
        if (!b) return a;
        if (a.indexOf("e-") !== -1) return a;
        c = a.indexOf(".");
        var d;
        c == -1 ? (a += ".", d = b) : d = b - (a.length - c - 1);
        for (var b = 0, c = d; b < c; b++) a += "0";
        return a
    }
    var q = function(a, b) {
        a = a;
        for (var c = 0; c < b; c++) a += "0";
        return a
    };

    function r(a, b) {
        var c = a.indexOf("."),
            d = c === -1 ? a : a.slice(0, c);
        a = c === -1 ? "" : a.slice(c + 1);
        return b != null ? d + "." + q(a.slice(0, b), b - a.length) : d
    }

    function s(a, c, d) {
        d === void 0 && (d = "");
        var e = u(),
            f = a;
        e && (f = a.split("").map(function(a) {
            return e[a] || a
        }).join("").trim());
        f = f.replace(/^[^\d]*\-/, "\x02");
        f = f.replace(k, "");
        a = b("escapeRegex")(c);
        c = b("escapeRegex")(d);
        d = j("^[^\\d]*\\d.*" + a + ".*\\d[^\\d]*$");
        if (!d.test(f)) {
            d = j("(^[^\\d]*)" + a + "(\\d*[^\\d]*$)");
            if (d.test(f)) {
                f = f.replace(d, "$1\x01$2");
                return t(f)
            }
            d = j("^[^\\d]*[\\d " + b("escapeRegex")(c) + "]*[^\\d]*$");
            d.test(f) || (f = "");
            return t(f)
        }
        d = j("(^[^\\d]*[\\d " + c + "]*)" + a + "(\\d*[^\\d]*$)");
        f = d.test(f) ? f.replace(d, "$1\x01$2") : "";
        return t(f)
    }

    function t(a) {
        a = a.replace(/[^0-9\u0001\u0002]/g, "").replace("\x01", ".").replace("\x02", "-");
        var b = Number(a);
        return a === "" || isNaN(b) ? null : b
    }

    function u() {
        var a = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale),
            c = {};
        a = a.numberingSystemData && a.numberingSystemData.digits;
        if (a == null) return null;
        for (var d = 0; d < a.length; d++) c[a.charAt(d)] = d.toString();
        return c
    }

    function d(a) {
        var c = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return s(a, c.decimalSeparator || ".", c.numberDelimiter)
    }
    var v = {
        formatNumber: a,
        formatNumberRaw: l,
        formatNumberWithThousandDelimiters: n,
        formatNumberWithLimitedSigFig: c,
        parseNumber: d,
        parseNumberRaw: s,
        truncateLongNumber: r,
        getFloatString: function(a, b, c) {
            a = String(a);
            a = a.split(".");
            b = v.getIntegerString(a[0], b);
            return a.length === 1 ? b : b + c + a[1]
        },
        getIntegerString: function(a, b) {
            b = b;
            b === "" && (b = ",");
            a = String(a);
            var c = /(\d+)(\d{3})/;
            while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
            return a
        }
    };
    e.exports = v
}), null);
__d("IntlPhonologicalRewrites", ["IntlPhonologicalRules"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        get: function(a) {
            return b("IntlPhonologicalRules")
        }
    };
    e.exports = a
}), null);
__d("IntlRedundantStops", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        equivalencies: {
            ".": ["\u0964", "\u104b", "\u3002"],
            "\u2026": ["\u0e2f", "\u0eaf", "\u1801"],
            "!": ["\uff01"],
            "?": ["\uff1f"]
        },
        redundancies: {
            "?": ["?", ".", "!", "\u2026"],
            "!": ["!", "?", "."],
            ".": [".", "!"],
            "\u2026": ["\u2026", ".", "!"]
        }
    })
}), null);
__d("IntlPunctuation", ["FbtHooks", "IntlPhonologicalRewrites", "IntlRedundantStops"], (function(a, b, c, d, e, f, g) {
    d = "[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";
    var h = {};

    function i(a) {
        var b;
        b = (b = a) != null ? b : "";
        var c = h[b];
        c == null && (c = h[b] = j(a));
        return c
    }

    function j(a) {
        var b = [];
        a = c("IntlPhonologicalRewrites").get(a);
        for (var d in a.patterns) {
            var e = a.patterns[d];
            for (var f in a.meta) {
                var g = new RegExp(f.slice(1, -1), "g"),
                    h = a.meta[f];
                d = d.replace(g, h);
                e = e.replace(g, h)
            }
            e === "javascript" && (e = function(a) {
                return a.slice(1).toLowerCase()
            });
            b.push([new RegExp(d.slice(1, -1), "g"), e])
        }
        return b
    }

    function a(a) {
        var b = i(c("FbtHooks").getViewerContext().locale);
        a = a;
        for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = e[0];
            e = e[1];
            a = a.replace(f, e)
        }
        return a.replace(/\x01/g, "")
    }
    var k = new Map();
    for (var l in c("IntlRedundantStops").equivalencies)
        for (var e = [l].concat(c("IntlRedundantStops").equivalencies[l]), f = Array.isArray(e), m = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var n;
            if (f) {
                if (m >= e.length) break;
                n = e[m++]
            } else {
                m = e.next();
                if (m.done) break;
                n = m.value
            }
            n = n;
            k.set(n, l)
        }
    var o = new Map();
    for (var p in c("IntlRedundantStops").redundancies) o.set(p, new Set(c("IntlRedundantStops").redundancies[p]));

    function q(a, b) {
        a = k.get(a);
        b = k.get(b);
        return ((a = o.get(a)) == null ? void 0 : a.has(b)) === !0
    }

    function b(a, b) {
        return q(a[a.length - 1], b) ? "" : b
    }
    g.PUNCT_CHAR_CLASS = d;
    g.applyPhonologicalRules = a;
    g.dedupeStops = b
}), 98);
__d("substituteTokens", ["invariant", "IntlPunctuation"], (function(a, b, c, d, e, f, g, h) {
    var i = new RegExp("\\{([^}]+)\\}(" + d("IntlPunctuation").PUNCT_CHAR_CLASS + "*)", "g");

    function j(a) {
        return a
    }

    function a(a, b) {
        if (b == null) return a;
        typeof b === "object" || h(0, 6041, a);
        var c = [],
            e = [];
        a = a.replace(i, function(a, f, g) {
            a = b[f];
            if (a != null && typeof a === "object") {
                c.push(a);
                e.push(f);
                return "\x17" + g
            } else if (a === null) return "";
            return String(a) + d("IntlPunctuation").dedupeStops(String(a), g)
        }).split("\x17").map(d("IntlPunctuation").applyPhonologicalRules);
        if (a.length === 1) return a[0];
        var f = a[0] !== "" ? [a[0]] : [];
        for (var g = 0; g < c.length; g++) f.push(j(c[g])), a[g + 1] !== "" && f.push(a[g + 1]);
        return f
    }
    f.exports = a
}), 34);
__d("fbt", ["invariant", "FbtEnv", "FbtHooks", "FbtQTOverrides", "FbtResultBase", "FbtTable", "FbtTableAccessor", "GenderConst", "IntlVariationResolver", "intlNumUtils", "substituteTokens"], (function(a, b, c, d, e, f, g) {
    var h;
    b("FbtEnv").setupOnce();
    var i = b("FbtQTOverrides").overrides,
        j = b("IntlVariationResolver").getGenderVariations,
        k = b("IntlVariationResolver").getNumberVariations,
        l = !1,
        m = b("FbtTable").ARG,
        n = {
            number: 0,
            gender: 1
        },
        o = {
            object: 0,
            possessive: 1,
            reflexive: 2,
            subject: 3
        },
        p = {};

    function a(a, c, d) {
        if (((d == null ? void 0 : d.hk) || (d == null ? void 0 : d.ehk)) && l) return {
            text: a,
            fbt: !0,
            hashKey: d.hk
        };
        a = (h || (h = b("FbtHooks"))).getTranslatedInput({
            table: a,
            args: c,
            options: d
        });
        c = a.table;
        d = a.args;
        a = {};
        if (c.__vcg != null) {
            d = d || [];
            var e = (h || (h = b("FbtHooks"))).getViewerContext();
            e = e.GENDER;
            var f = j(e);
            d.unshift(b("FbtTableAccessor").getGenderResult(f, null, e))
        }
        d && (typeof c !== "string" && (c = b("FbtTable").access(c, d, 0)), a = Object.assign.apply(Object, [{}].concat(d.map(function(a) {
            return a[m.SUBSTITUTION] || {}
        }))), c !== null || g(0, 479));
        var k;
        if (Array.isArray(c)) {
            f = c[0];
            k = c[1];
            e = "1_" + k;
            i[e] != null && i[e] !== "" && (f = i[e], (h || (h = b("FbtHooks"))).onTranslationOverride(k));
            (h || (h = b("FbtHooks"))).logImpression(k)
        } else if (typeof c === "string") f = c;
        else throw new Error("Table access did not result in string: " + (c === void 0 ? "undefined" : JSON.stringify(c)) + ", Type: " + typeof c);
        d = p[f];
        e = q(a);
        if (d && !e) return d;
        else {
            c = b("substituteTokens")(f, a);
            d = this._wrapContent(c, f, k);
            e || (p[f] = d);
            return d
        }
    }

    function q(a) {
        for (var b in a) return !0;
        return !1
    }

    function c(a, c) {
        return b("FbtTableAccessor").getEnumResult(a)
    }

    function d(a) {
        return b("FbtTableAccessor").getGenderResult(j(a), null, a)
    }

    function f(a, c, d) {
        var e;
        e = (e = {}, e[a] = c, e);
        if (d)
            if (d[0] === n.number) {
                var f = d.length > 1 ? d[1] : c;
                typeof f === "number" || g(0, 484);
                var h = k(f);
                typeof c === "number" && (e[a] = b("intlNumUtils").formatNumberWithThousandDelimiters(c));
                return b("FbtTableAccessor").getNumberResult(h, e, f)
            } else if (d[0] === n.gender) {
            a = d[1];
            a != null || g(0, 485);
            return b("FbtTableAccessor").getGenderResult(j(a), e, a)
        } else g(0, 486);
        else return b("FbtTableAccessor").getSubstitution(e)
    }

    function r(a, b, c) {
        return this._param(a, b, c)
    }

    function s(a, c, d) {
        var e = k(a),
            f = {};
        c && (typeof d === "number" ? f[c] = b("intlNumUtils").formatNumberWithThousandDelimiters(d) : f[c] = d || b("intlNumUtils").formatNumberWithThousandDelimiters(a));
        return b("FbtTableAccessor").getNumberResult(e, f, a)
    }

    function t(a, c, d) {
        c !== b("GenderConst").NOT_A_PERSON || !d || !d.human || g(0, 11835);
        d = u(a, c);
        return b("FbtTableAccessor").getPronounResult(d)
    }

    function u(a, c) {
        switch (c) {
            case b("GenderConst").NOT_A_PERSON:
                return a === o.object || a === o.reflexive ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").FEMALE_SINGULAR:
            case b("GenderConst").FEMALE_SINGULAR_GUESS:
                return b("GenderConst").FEMALE_SINGULAR;
            case b("GenderConst").MALE_SINGULAR:
            case b("GenderConst").MALE_SINGULAR_GUESS:
                return b("GenderConst").MALE_SINGULAR;
            case b("GenderConst").MIXED_UNKNOWN:
            case b("GenderConst").FEMALE_PLURAL:
            case b("GenderConst").MALE_PLURAL:
            case b("GenderConst").NEUTER_PLURAL:
            case b("GenderConst").UNKNOWN_PLURAL:
                return b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").NEUTER_SINGULAR:
            case b("GenderConst").UNKNOWN_SINGULAR:
                return a === o.reflexive ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL
        }
        return b("GenderConst").NOT_A_PERSON
    }

    function v(a, c, d) {
        var e = j(d),
            f = {};
        f[a] = c;
        return b("FbtTableAccessor").getGenderResult(e, f, d)
    }

    function w(a, c, d) {
        a = typeof a === "string" ? [a] : a;
        var e = (h || (h = b("FbtHooks"))).getErrorListener({
            translation: c,
            hash: d
        });
        a = h.getFbtResult({
            contents: a,
            errorListener: e,
            patternHash: d,
            patternString: c
        });
        return a
    }

    function x() {
        l = !0
    }

    function y() {
        l = !1
    }

    function z(a) {
        return a instanceof b("FbtResultBase")
    }
    var A = function() {};
    A._ = a;
    A._enum = c;
    A._implicitParam = r;
    A._name = v;
    A._param = f;
    A._plural = s;
    A._pronoun = t;
    A._subject = d;
    A._wrapContent = w;
    A.disableJsonExportMode = y;
    A.enableJsonExportMode = x;
    A.isFbtInstance = z;
    e.exports = A
}), null);
__d("getAsyncHeaders", ["LSD", "ZeroCategoryHeader", "isFacebookURI", "killswitch"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = {},
            d = c("isFacebookURI")(a);
        d && c("ZeroCategoryHeader").value && (b[c("ZeroCategoryHeader").header] = c("ZeroCategoryHeader").value);
        d = h(a);
        d && (b["X-FB-LSD"] = d);
        return b
    }

    function h(a) {
        if (c("killswitch")("SAF_JS_FB_X_LSD_HEADER")) return null;
        return !a.toString().startsWith("/") && a.getOrigin() !== document.location.origin ? null : c("LSD").token
    }
    g["default"] = a
}), 98);
__d("goURI", ["URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("URI").go
}), 98);
__d("isBulletinDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)bulletin\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("orEmptyArray", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return (a = a) != null ? a : []
    }
    f["default"] = a
}), 66);
__d("AsyncRequest", ["errorCode", "fbt", "invariant", "Arbiter", "AsyncDOM", "AsyncRequestConfig", "AsyncResponse", "Bootloader", "CSS", "DTSG", "DTSG_ASYNC", "Deferred", "Env", "ErrorGuard", "Event", "FBLogger", "FetchStreamTransport", "HTTPErrors", "HasteResponse", "JSCC", "PHPQuerySerializer", "Parent", "Promise", "ResourceTimingsStore", "ResourceTypes", "ServerJS", "SessionName", "TimeSlice", "URI", "UserAgent_DEPRECATED", "ZeroRewrites", "bind", "clearTimeout", "emptyFunction", "evalGlobal", "executeAfter", "fb-error", "ge", "getAsyncHeaders", "getAsyncParams", "gkx", "goURI", "isBulletinDotComURI", "isEmpty", "isFacebookURI", "isInternalFBURI", "isMessengerDotComURI", "isWorkplaceDotComURI", "killswitch", "orEmptyArray", "performanceAbsoluteNow", "promiseDone", "replaceTransportMarkers", "setTimeout", "setTimeoutAcrossTransitions"], (function $module_AsyncRequest(global, require, importDefault, importNamespace, requireLazy, module, exports, errorCode, fbt, invariant) {
    "use strict";
    var nineteenSecInMs = 19e3,
        INTERNAL_SERVER_ERROR = 500,
        NO_NETWORK_CONNECTION = 1006,
        NETWORK_ERROR = 1004,
        ABORTED_DUE_TO_PAGE_TRANSITION = 1010,
        WARNING_ERROR_CODES = new Set([INTERNAL_SERVER_ERROR, ABORTED_DUE_TO_PAGE_TRANSITION, NETWORK_ERROR, NO_NETWORK_CONNECTION]);

    function hasUnloaded() {
        try {
            return !window.domready
        } catch (_unused) {
            return !0
        }
    }

    function supportsProgress(transport) {
        return "onprogress" in transport
    }

    function supportsUploadProgress(transport) {
        return "upload" in transport && "onprogress" in transport.upload
    }

    function supportsCrossOrigin(transport) {
        return "withCredentials" in transport
    }

    function isNetworkError(transport) {
        return transport.status in {
            0: 1,
            12029: 1,
            12030: 1,
            12031: 1,
            12152: 1
        }
    }

    function validateResponseHandler(handler) {
        var valid = !handler || typeof handler === "function";
        valid || importDefault("FBLogger")("asyncresponse").mustfix("AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.");
        return valid
    }
    var last_id = 2,
        id_threshold = last_id,
        ignore_id_update = !1;
    importDefault("Arbiter").subscribe("page_transition", function(_, message) {
        !ignore_id_update ? id_threshold = message.id : ignore_id_update = !1
    });
    var JSON_HIJACKING_SHIELD = "for (;;);",
        JSON_HIJACKING_SHIELD_LEN = JSON_HIJACKING_SHIELD.length,
        AsyncRequest = function() {
            function AsyncRequest(uri) {
                var _this = this;
                this._allowIrrelevantRequests = !1;
                this._delayPreDisplayJS = !1;
                this._shouldReplaceTransportMarkers = !1;
                this._dispatchErrorResponse = function(asyncResponse, errorHandler) {
                    var error = asyncResponse.getError();
                    _this.clearStatusIndicator();
                    if (!_this._isRelevant() || error === ABORTED_DUE_TO_PAGE_TRANSITION) {
                        _this.abort();
                        return
                    }
                    if (_this._isServerDialogErrorCode(error)) {
                        var is_confirmation = error == 1357008 || error == 1357007;
                        _this.interceptHandler(asyncResponse);
                        error == 1357041 ? _this._solveQuicksandChallenge(asyncResponse) : error == 1357007 ? _this._displayServerDialog(asyncResponse, is_confirmation, !0) : _this._displayServerDialog(asyncResponse, is_confirmation)
                    } else if (_this.initialHandler(asyncResponse) !== !1) {
                        importDefault("clearTimeout")(_this.timer);
                        try {
                            errorHandler(asyncResponse)
                        } catch (e) {
                            _this.finallyHandler(asyncResponse);
                            throw e
                        }
                        _this.finallyHandler(asyncResponse)
                    }
                };
                this._onStateChange = function() {
                    var transport = _this.transport;
                    if (!transport) return;
                    try {
                        AsyncRequest._inflightCount--;
                        importNamespace("ResourceTimingsStore").measureResponseReceived(importDefault("ResourceTypes").XHR, _this.resourceTimingStoreUID);
                        try {
                            transport.getResponseHeader("X-FB-Debug") && (_this._xFbServer = transport.getResponseHeader("X-FB-Debug"), importDefault("fb-error").ErrorXFBDebug.add(_this._xFbServer))
                        } catch (_unused2) {}
                        if (transport.status >= 200 && transport.status < 300) AsyncRequest.lastSuccessTime = Date.now(), _this._handleXHRResponse(transport);
                        else if (importNamespace("UserAgent_DEPRECATED").webkit() && typeof transport.status === "undefined") _this._invokeErrorHandler(1002);
                        else if (importDefault("AsyncRequestConfig").retryOnNetworkError && isNetworkError(transport) && _this.remainingRetries > 0 && !_this._requestTimeout) {
                            _this.remainingRetries--;
                            delete _this.transport;
                            _this.send(!0);
                            return
                        } else _this._invokeErrorHandler();
                        _this.getOption("asynchronous_DEPRECATED") !== !1 && delete _this.transport
                    } catch (exception) {
                        if (hasUnloaded()) return;
                        delete _this.transport;
                        _this.remainingRetries > 0 ? (_this.remainingRetries--, _this.send(!0)) : (_this.getOption("suppressErrorAlerts") || importDefault("FBLogger")("AsyncRequest").catching(exception).mustfix("AsyncRequest exception when attempting to handle a state change"), _this._invokeErrorHandler(1007))
                    }
                };
                this.continuation = importDefault("TimeSlice").getPlaceholderReusableContinuation();
                this.transport = null;
                this.method = "POST";
                this.uri = "";
                this.timeout = null;
                this.timer = null;
                this.initialHandler = importDefault("emptyFunction");
                this.handler = null;
                this.uploadProgressHandler = null;
                this.errorHandler = importDefault("AsyncResponse").defaultErrorHandler;
                this.transportErrorHandler = null;
                this.timeoutHandler = null;
                this.interceptHandler = importDefault("emptyFunction");
                this.finallyHandler = importDefault("emptyFunction");
                this.abortHandler = importDefault("emptyFunction");
                this.serverDialogCancelHandler = null;
                this.relativeTo = null;
                this.statusElement = null;
                this.statusClass = "";
                this.data = {};
                this.headers = {};
                this.file = null;
                this.context = {};
                this.readOnly = !1;
                this.writeRequiredParams = [];
                this.remainingRetries = 0;
                this.userActionID = "-";
                this.resourceTimingStoreUID = importNamespace("ResourceTimingsStore").getUID(importDefault("ResourceTypes").XHR, uri != null ? uri.toString() : "");
                this.flushedResponseTextParseIndex = 0;
                this.option = {
                    asynchronous_DEPRECATED: !0,
                    suppressErrorHandlerWarning: !1,
                    suppressEvaluation: !1,
                    suppressErrorAlerts: !1,
                    retries: 0,
                    jsonp: !1,
                    bundle: !1,
                    useIframeTransport: !1,
                    handleErrorAfterUnload: !1,
                    useFetchWithIframeFallback: !1
                };
                this.transportErrorHandler = importDefault("bind")(this, "errorHandler");
                uri !== void 0 && this.setURI(uri);
                this.setAllowCrossPageTransition(importDefault("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault || !1)
            }
            var _proto = AsyncRequest.prototype;
            _proto._dispatchResponse = function _dispatchResponse(asyncResponse) {
                this.clearStatusIndicator();
                if (!this._isRelevant()) {
                    this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                    return
                }
                if (this.initialHandler(asyncResponse) === !1) return;
                importDefault("clearTimeout")(this.timer);
                if (asyncResponse.jscc_map) {
                    var jsccMap = importNamespace("JSCC").parse(asyncResponse.jscc_map);
                    importNamespace("JSCC").init(jsccMap)
                }
                var suppress_js, handler = this.getHandler();
                if (handler) try {
                    suppress_js = this._shouldSuppressJS(handler(asyncResponse))
                } catch (e) {
                    asyncResponse.is_last && this.finallyHandler(asyncResponse);
                    throw e
                }
                suppress_js || this._handleJSResponse(asyncResponse);
                asyncResponse.is_last && this.finallyHandler(asyncResponse)
            };
            _proto._shouldSuppressJS = function _shouldSuppressJS(handler_return_value) {
                return handler_return_value === AsyncRequest.suppressOnloadToken
            };
            _proto._handlePreDisplayServerJS = function _handlePreDisplayServerJS(serverJS, preDisplayJSMods) {
                var _displayStarted = !1,
                    preDisplayPromises = [],
                    registerToBlockDisplayUntilDone_DONOTUSE = function registerToBlockDisplayUntilDone_DONOTUSE() {
                        if (_displayStarted) {
                            importDefault("FBLogger")("AsyncResponse").warn("registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.");
                            return function() {}
                        }
                        var timeoutId, deferrable = new(importDefault("Deferred"))();
                        preDisplayPromises.push(deferrable.getPromise());
                        return importDefault("TimeSlice").guard(function() {
                            timeoutId && importDefault("clearTimeout")(timeoutId), deferrable.resolve()
                        }, "AsyncRequestDisplayBlockingEvent", {
                            propagationType: importDefault("TimeSlice").PropagationType.EXECUTION
                        })
                    };
                serverJS.handle(preDisplayJSMods, {
                    bigPipeContext: {
                        registerToBlockDisplayUntilDone_DONOTUSE: registerToBlockDisplayUntilDone_DONOTUSE
                    }
                });
                _displayStarted = !0;
                return preDisplayPromises
            };
            _proto._hasEvalDomOp = function _hasEvalDomOp(domOps) {
                return domOps && domOps.length ? domOps.some(function(op) {
                    return op[0] === "eval"
                }) : !1
            };
            _proto._handleJSResponse = function _handleJSResponse(asyncResponse) {
                var relativeTo = this.getRelativeTo(),
                    domOps = asyncResponse.domops,
                    dtsgToken = asyncResponse.dtsgToken,
                    dtsgAsyncGetToken = asyncResponse.dtsgAsyncGetToken,
                    jsMods = asyncResponse.jsmods,
                    serverJS, savedServerJSInstance = asyncResponse.savedServerJSInstance;
                savedServerJSInstance && savedServerJSInstance instanceof importDefault("ServerJS") ? serverJS = savedServerJSInstance : serverJS = new(importDefault("ServerJS"))();
                serverJS.setRelativeTo(relativeTo);
                if (jsMods) {
                    var preDisplayJSMods = {
                        define: jsMods.define,
                        instances: jsMods.instances,
                        markup: jsMods.markup
                    };
                    delete jsMods.define;
                    delete jsMods.instances;
                    delete jsMods.markup;
                    this._hasEvalDomOp(domOps) && (preDisplayJSMods.elements = jsMods.elements, delete jsMods.elements);
                    serverJS.handle(preDisplayJSMods)
                }
                var parsedUri = new(importDefault("URI"))(this.uri);
                (!parsedUri.getDomain() && !parsedUri.getProtocol() || document.location.origin === parsedUri.getOrigin()) && (dtsgToken && importNamespace("DTSG").setToken(dtsgToken), dtsgAsyncGetToken && importNamespace("DTSG_ASYNC").setToken(dtsgAsyncGetToken));
                domOps && importDefault("ErrorGuard").applyWithGuard(function() {
                    return importNamespace("AsyncDOM").invoke(domOps, relativeTo)
                }, null, [], {
                    errorType: "warn"
                });
                jsMods && serverJS.handle(jsMods);
                this._handleJSRegisters(asyncResponse, "onload");
                this._handleJSRegisters(asyncResponse, "onafterload")
            };
            _proto._handleJSRegisters = function _handleJSRegisters(asyncResponse, phase) {
                var registers = asyncResponse[phase];
                if (registers)
                    for (var ii = 0; ii < registers.length; ii++) importDefault("ErrorGuard").applyWithGuard(new Function(registers[ii]), this, [])
            };
            _proto.invokeResponseHandler = function invokeResponseHandler(interpreted) {
                if (typeof interpreted.redirect !== "undefined") {
                    importDefault("setTimeout")(function() {
                        this.setURI(interpreted.redirect, !0).send()
                    }.bind(this), 0);
                    return
                }
                if (interpreted.bootloadOnly !== void 0) {
                    var toBootload = typeof interpreted.bootloadOnly === "string" ? JSON.parse(interpreted.bootloadOnly) : interpreted.bootloadOnly,
                        _loop = function _loop() {
                            if (_isArray) {
                                if (_i >= _iterator.length) return "break";
                                _ref = _iterator[_i++]
                            } else {
                                _i = _iterator.next();
                                if (_i.done) return "break";
                                _ref = _i.value
                            }
                            var rsrcs = _ref;
                            importDefault("TimeSlice").guard(function() {
                                importDefault("Bootloader").loadPredictedResourceMap(rsrcs)
                            }, "Bootloader.loadPredictedResourceMap", {
                                root: !0
                            })()
                        };
                    for (var _iterator = toBootload, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var _ref, _ret = _loop();
                        if (_ret === "break") break
                    }
                    return
                }
                if (!this.handler && !this.errorHandler && !this.transportErrorHandler && !this.preBootloadHandler && this.initialHandler === importDefault("emptyFunction") && this.finallyHandler === importDefault("emptyFunction")) return;
                var response = interpreted.asyncResponse;
                if (typeof response !== "undefined") {
                    var _response$hsrp;
                    if (!this._isRelevant()) {
                        this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                        return
                    }
                    response.inlinejs && importDefault("evalGlobal")(response.inlinejs);
                    response.lid && (this._responseTime = Date.now(), global.CavalryLogger && (this.cavalry = global.CavalryLogger.getInstance(response.lid)), this.lid = response.lid);
                    importNamespace("HasteResponse").handleSRPayload((_response$hsrp = response.hsrp) != null ? _response$hsrp : {});
                    var dispatch, arbiter_event;
                    if (response.getError() && !response.getErrorIsWarning()) {
                        var handler = this.getErrorHandler().bind(this);
                        dispatch = importDefault("ErrorGuard").guard(this._dispatchErrorResponse, {
                            name: "AsyncRequest#_dispatchErrorResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response, handler);
                        arbiter_event = "error"
                    } else {
                        dispatch = importDefault("ErrorGuard").guard(this._dispatchResponse.bind(this), {
                            name: "AsyncRequest#_dispatchResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response);
                        arbiter_event = "response";
                        var domOps = response.domops;
                        if (!this._delayPreDisplayJS && response.jsmods && response.jsmods.pre_display_requires && !this._hasEvalDomOp(domOps) && !importDefault("killswitch")("ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS")) {
                            var jsMods = response.jsmods,
                                preDisplayJSMods = {
                                    define: jsMods.define,
                                    instances: jsMods.instances,
                                    markup: jsMods.markup
                                };
                            delete jsMods.define;
                            delete jsMods.instances;
                            delete jsMods.markup;
                            preDisplayJSMods.pre_display_requires = jsMods.pre_display_requires;
                            delete jsMods.pre_display_requires;
                            var serverJS = new(importDefault("ServerJS"))();
                            serverJS.setRelativeTo(this.getRelativeTo());
                            response.savedServerJSInstance = serverJS;
                            var preDisplayPromises = this._handlePreDisplayServerJS(serverJS, preDisplayJSMods);
                            if (preDisplayPromises && preDisplayPromises.length) {
                                var realDispatch = dispatch;
                                dispatch = function dispatch() {
                                    importDefault("promiseDone")(require("Promise").all(preDisplayPromises).then(realDispatch))
                                }
                            }
                        }
                    }
                    var ts = importDefault("performanceAbsoluteNow")();
                    dispatch = importDefault("executeAfter")(dispatch, function() {
                        importDefault("Arbiter").inform("AsyncRequest/" + arbiter_event, {
                            request: this,
                            response: response,
                            ts: ts
                        })
                    }.bind(this));
                    this.preBootloadHandler && this.preBootloadHandler(response);
                    importDefault("Bootloader").loadResources(importDefault("orEmptyArray")(response.allResources), {
                        onAll: importDefault("AsyncRequestConfig").immediateDispatch ? dispatch : function() {
                            importDefault("setTimeout")(dispatch, 0)
                        }
                    }, this.getURI())
                } else typeof interpreted.transportError !== "undefined" ? this._xFbServer ? this._invokeErrorHandler(1008) : this._invokeErrorHandler(1012) : this._invokeErrorHandler(1007)
            };
            _proto._invokeErrorHandler = function _invokeErrorHandler(explicitError) {
                var transport = this.transport;
                if (!transport) return;
                var error;
                if (this.responseText === "") error = 1002;
                else if (this._requestAborted) error = 1011;
                else {
                    try {
                        error = explicitError || transport.status || NETWORK_ERROR
                    } catch (_unused3) {
                        error = 1005
                    }!1 === navigator.onLine && (error = NO_NETWORK_CONNECTION)
                }
                var desc, summary, silent = !0;
                if (error === NO_NETWORK_CONNECTION) summary = fbt._( /*FBT_CALL*/ "No Network Connection" /*FBT_CALL*/ ), desc = fbt._( /*FBT_CALL*/ "Your browser appears to be offline. Please check your internet connection and try again." /*FBT_CALL*/ );
                else if (error >= 300 && error <= 399) {
                    summary = fbt._( /*FBT_CALL*/ "Redirection" /*FBT_CALL*/ );
                    desc = fbt._( /*FBT_CALL*/ "Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload." /*FBT_CALL*/ );
                    var location = transport.getResponseHeader("Location");
                    location && importDefault("goURI")(location, !0);
                    silent = !0
                } else summary = fbt._( /*FBT_CALL*/ "Oops" /*FBT_CALL*/ ), desc = fbt._( /*FBT_CALL*/ "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again." /*FBT_CALL*/ );
                var async_response = new(importDefault("AsyncResponse"))(this, transport);
                Object.assign(async_response, {
                    error: error,
                    errorSummary: summary,
                    errorDescription: desc,
                    silentError: silent
                });
                importDefault("setTimeout")(function() {
                    importDefault("Arbiter").inform("AsyncRequest/error", {
                        request: this,
                        response: async_response
                    })
                }.bind(this), 0);
                if (hasUnloaded() && !this.getOption("handleErrorAfterUnload")) return;
                if (!this.transportErrorHandler) {
                    importDefault("FBLogger")("asyncresponse").mustfix("Async request to %s failed with a %d error, but there was no error handler available to deal with it.", this.getURI(), error);
                    return
                }
                var error_handler = this.getTransportErrorHandler().bind(this);
                !(this.getOption("suppressErrorAlerts") || WARNING_ERROR_CODES.has(error)) ? importDefault("FBLogger")("asyncresponse").addToCategoryKey(String(error)).mustfix("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI()): WARNING_ERROR_CODES.has(error) && importDefault("FBLogger")("asyncresponse").addToCategoryKey(String(error)).warn("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI());
                importDefault("ErrorGuard").applyWithGuard(this._dispatchErrorResponse, this, [async_response, error_handler])
            };
            _proto._isServerDialogErrorCode = function _isServerDialogErrorCode(error) {
                return error == 1357008 || error == 1357007 || error == 1357041 || error == 1442002 || error == 1357001
            };
            _proto._solveQuicksandChallenge = function _solveQuicksandChallenge(async_response) {
                var payload = async_response.getPayload();
                importDefault("Bootloader").loadModules(["QuickSandSolver"], function(QuickSandSolver) {
                    QuickSandSolver.solveAndSendRequestBack(this, payload)
                }.bind(this), "AsyncRequest")
            };
            _proto._displayServerDialog = function _displayServerDialog(async_response, is_confirmation, allow_get) {
                allow_get === void 0 && (allow_get = !1);
                var payload = async_response.getPayload();
                if (payload.__dialog !== void 0) {
                    this._displayServerLegacyDialog(async_response, is_confirmation);
                    return
                }
                var json = payload.__dialogx;
                new(importDefault("ServerJS"))().handle(json);
                importDefault("Bootloader").loadModules(["ConfirmationDialog"], function(ConfirmationDialog) {
                    ConfirmationDialog.setupConfirmation(async_response, this, allow_get)
                }.bind(this), "AsyncRequest")
            };
            _proto._displayServerLegacyDialog = function _displayServerLegacyDialog(async_response, is_confirmation) {
                var model = async_response.getPayload().__dialog;
                if (importDefault("gkx")("708253")) {
                    var _ref2, _async_response$reque;
                    importDefault("FBLogger")("comet_infra").addMetadata("COMET_INFRA", "ERROR_CODE", async_response.getError().toString()).addMetadata("COMET_INFRA", "ERROR_URL", (_ref2 = (_async_response$reque = async_response.request) == null ? void 0 : _async_response$reque.getURI()) != null ? _ref2 : "unknown").mustfix("AsyncRequest._displayServerLegacyDialog called in Comet")
                }
                importDefault("Bootloader").loadModules(["Dialog"], function(Dialog) {
                    var dialog = new Dialog(model);
                    is_confirmation && dialog.setHandler(this._displayConfirmationHandler.bind(this, dialog));
                    dialog.setCancelHandler(function() {
                        var handler = this.getServerDialogCancelHandler();
                        try {
                            handler && handler(async_response)
                        } catch (e) {
                            throw e
                        } finally {
                            this.finallyHandler(async_response)
                        }
                    }.bind(this)).setCausalElement(this.relativeTo).show()
                }.bind(this), "AsyncRequest")
            };
            _proto._displayConfirmationHandler = function _displayConfirmationHandler(dialog) {
                this.data.confirmed = 1, Object.assign(this.data, dialog.getFormData()), this.send()
            };
            _proto.setJSONPTransport = function setJSONPTransport(transport) {
                transport.subscribe("response", this._handleJSONPResponse.bind(this)), transport.subscribe("abort", this._handleJSONPAbort.bind(this)), this.transport = transport
            };
            _proto._handleJSONPResponse = function _handleJSONPResponse(_, data) {
                var transport = this.transport;
                if (!transport) return;
                data.bootloadOnly || (this.is_first = this.is_first === void 0);
                var interpreted = this._interpretResponse(data);
                interpreted.asyncResponse && (interpreted.asyncResponse.is_first = this.is_first, interpreted.asyncResponse.is_last = transport.hasFinished());
                this.invokeResponseHandler(interpreted);
                transport.hasFinished() && delete this.transport
            };
            _proto._handleJSONPAbort = function _handleJSONPAbort() {
                this._invokeErrorHandler(), delete this.transport
            };
            _proto._handleXHRResponse = function _handleXHRResponse(transport) {
                var interpreted;
                if (this.getOption("suppressEvaluation")) interpreted = {
                    asyncResponse: new(importDefault("AsyncResponse"))(this, transport)
                };
                else try {
                    this._handleFlushedResponse();
                    var text = transport.responseText;
                    text = this._filterOutFlushedText(text);
                    var safe_text = this._unshieldResponseText(text),
                        _response;
                    try {
                        _response = JSON.parse(safe_text)
                    } catch (error) {
                        _response = eval("(" + safe_text + ")"), importDefault("FBLogger")("async_request").catching(error).warn("JSON.parse encountered an exception, fallback to eval. Endpoint: " + new(importDefault("URI"))(this.uri).getPath())
                    }
                    interpreted = this._interpretResponse(_response)
                } catch (error) {
                    interpreted = error.message, importDefault("FBLogger")("async_request").catching(error).warn("Failed to handle response")
                }
                this.invokeResponseHandler(interpreted)
            };
            _proto._handleFlushedResponse = function _handleFlushedResponse() {
                var flushedResponseHandler = this.flushedResponseHandler,
                    transport = this.transport;
                if (flushedResponseHandler && transport) {
                    var jsonShieldIndex = transport.responseText.indexOf(JSON_HIJACKING_SHIELD),
                        flushedTextEndIndex = jsonShieldIndex === -1 ? transport.responseText.length : jsonShieldIndex;
                    flushedResponseHandler(transport.responseText.substring(this.flushedResponseTextParseIndex, flushedTextEndIndex));
                    this.flushedResponseTextParseIndex = flushedTextEndIndex
                }
            };
            _proto._unshieldResponseText = function _unshieldResponseText(text) {
                if (text.length <= JSON_HIJACKING_SHIELD_LEN) throw new Error("Response too short on async");
                var offset = 0;
                while (text.charAt(offset) == " " || text.charAt(offset) == "\n") offset++;
                offset && text.substring(offset, offset + JSON_HIJACKING_SHIELD_LEN) == JSON_HIJACKING_SHIELD;
                return text.substring(offset + JSON_HIJACKING_SHIELD_LEN)
            };
            _proto._filterOutFlushedText = function _filterOutFlushedText(text) {
                if (!this.flushedResponseHandler) return text;
                var index = text.indexOf(JSON_HIJACKING_SHIELD);
                return index < 0 ? text : text.substr(index)
            };
            _proto._interpretResponse = function _interpretResponse(response) {
                if (response.redirect) return {
                    redirect: response.redirect
                };
                if (response.bootloadOnly) return {
                    bootloadOnly: response.bootloadOnly
                };
                var isServerDialog = response.error && this._isServerDialogErrorCode(response.error);
                this._shouldReplaceTransportMarkers && response.payload && !isServerDialog && importDefault("replaceTransportMarkers")({
                    relativeTo: this.getRelativeTo(),
                    bigPipeContext: null
                }, response.payload);
                var r = new(importDefault("AsyncResponse"))(this);
                if (response.__ar != 1) importDefault("FBLogger")("AsyncRequest").warn("AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.", this.getURI()), r.payload = response;
                else {
                    Object.assign(r, response);
                    var transport = this.transport;
                    transport && transport.getAllResponseHeaders !== void 0 && (r.responseHeaders = transport.getAllResponseHeaders())
                }
                return {
                    asyncResponse: r
                }
            };
            _proto._isMultiplexable = function _isMultiplexable() {
                if (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("You cannot bundle AsyncRequest that uses jsonp or iframe transport.");
                    return !1
                }
                if (!importDefault("isFacebookURI")(new(importDefault("URI"))(this.uri))) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s", this.getURI());
                    return !1
                }
                if (!this.getOption("asynchronous_DEPRECATED")) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("We cannot bundle synchronous AsyncRequests");
                    return !1
                }
                return !0
            };
            _proto.handleResponse = function handleResponse(response) {
                var interpreted = this._interpretResponse(response);
                this.invokeResponseHandler(interpreted)
            };
            _proto.setMethod = function setMethod(m) {
                this.method = m.toString().toUpperCase();
                return this
            };
            _proto.getMethod = function getMethod() {
                return this.method
            };
            _proto.setData = function setData(obj) {
                this.data = obj;
                return this
            };
            _proto.setRequestHeader = function setRequestHeader(name, value) {
                this.headers[name] = value;
                return this
            };
            _proto.setRawData = function setRawData(raw_data) {
                this.rawData = raw_data;
                return this
            };
            _proto.getData = function getData() {
                return this.data
            };
            _proto.setContextData = function setContextData(key, value, enabled) {
                enabled = enabled === void 0 ? !0 : enabled;
                enabled && (this.context["_log_" + key] = value);
                return this
            };
            _proto._setUserActionID = function _setUserActionID() {
                this.userActionID = (importNamespace("SessionName").getName() || "-") + "/-"
            };
            _proto.setURI = function setURI(uri, throwOnInvalid) {
                throwOnInvalid === void 0 && (throwOnInvalid = !1);
                typeof uri === "string" && uri.match(/^\/?u_\d+_\d+/) && importDefault("FBLogger")("asyncrequest").warn("Invalid URI %s", uri);
                var uri_obj = new(importDefault("URI"))(uri);
                if ((this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && !importDefault("isFacebookURI")(uri_obj)) {
                    throwOnInvalid && invariant(0, 45284);
                    return this
                }
                if (!this._allowCrossOrigin && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback") && !uri_obj.isSameOrigin()) {
                    throwOnInvalid && invariant(0, 45285);
                    return this
                }
                this._setUserActionID();
                if (!uri || uri_obj.isEmpty()) {
                    importDefault("FBLogger")("async_request").mustfix("URI cannot be empty");
                    return this
                }
                this.uri = importNamespace("ZeroRewrites").rewriteURI(uri_obj);
                return this
            };
            _proto.getURI = function getURI() {
                return this.uri.toString()
            };
            _proto.delayPreDisplayJS = function delayPreDisplayJS(shouldDelayJS) {
                shouldDelayJS === void 0 && (shouldDelayJS = !0);
                this._delayPreDisplayJS = shouldDelayJS;
                return this
            };
            _proto.setInitialHandler = function setInitialHandler(fn) {
                this.initialHandler = fn;
                return this
            };
            _proto.setPayloadHandler = function setPayloadHandler(fn) {
                this.setHandler(function(response) {
                    fn(response.payload)
                });
                return this
            };
            _proto.setHandler = function setHandler(fn) {
                validateResponseHandler(fn) && (this.handler = fn);
                return this
            };
            _proto.setFlushedResponseHandler = function setFlushedResponseHandler(fn) {
                validateResponseHandler(fn) && (this.flushedResponseHandler = fn);
                return this
            };
            _proto.getHandler = function getHandler() {
                return this.handler || importDefault("emptyFunction")
            };
            _proto.setProgressHandler = function setProgressHandler(fn) {
                validateResponseHandler(fn) && (this.progressHandler = fn);
                return this
            };
            _proto.setUploadProgressHandler = function setUploadProgressHandler(fn) {
                validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
                return this
            };
            _proto.setErrorHandler = function setErrorHandler(fn) {
                validateResponseHandler(fn) && (this.errorHandler = fn);
                return this
            };
            _proto.setTransportErrorHandler = function setTransportErrorHandler(fn) {
                this.transportErrorHandler = fn;
                return this
            };
            _proto.getErrorHandler = function getErrorHandler() {
                return this.errorHandler || importDefault("emptyFunction")
            };
            _proto.getTransportErrorHandler = function getTransportErrorHandler() {
                return this.transportErrorHandler || importDefault("emptyFunction")
            };
            _proto.setTimeoutHandler = function setTimeoutHandler(timeout, fn) {
                validateResponseHandler(fn) && (this.timeout = timeout, this.timeoutHandler = fn);
                return this
            };
            _proto.resetTimeout = function resetTimeout(timeout) {
                if (!(this.timeoutHandler === null))
                    if (timeout === null) this.timeout = null, importDefault("clearTimeout")(this.timer), this.timer = null;
                    else {
                        var clear_on_quickling_event = !this._allowCrossPageTransition;
                        this.timeout = timeout;
                        importDefault("clearTimeout")(this.timer);
                        clear_on_quickling_event ? this.timer = importDefault("setTimeout")(this._handleTimeout.bind(this), this.timeout) : this.timer = importDefault("setTimeoutAcrossTransitions")(this._handleTimeout.bind(this), this.timeout)
                    }
                return this
            };
            _proto._handleTimeout = function _handleTimeout() {
                var _this2 = this;
                this.continuation.last(function() {
                    _this2._requestTimeout = !0;
                    var func = _this2.timeoutHandler;
                    _this2.abandon();
                    func && func(_this2);
                    importDefault("setTimeout")(function() {
                        importDefault("Arbiter").inform("AsyncRequest/timeout", {
                            request: this
                        })
                    }.bind(_this2), 0)
                })
            };
            _proto.setNewSerial = function setNewSerial() {
                this.id = ++last_id;
                return this
            };
            _proto.setInterceptHandler = function setInterceptHandler(fn) {
                this.interceptHandler = fn;
                return this
            };
            _proto.setFinallyHandler = function setFinallyHandler(fn) {
                this.finallyHandler = fn;
                return this
            };
            _proto.setAbortHandler = function setAbortHandler(fn) {
                this.abortHandler = fn;
                return this
            };
            _proto.getServerDialogCancelHandler = function getServerDialogCancelHandler() {
                return this.serverDialogCancelHandler
            };
            _proto.setServerDialogCancelHandler = function setServerDialogCancelHandler(fn) {
                this.serverDialogCancelHandler = fn;
                return this
            };
            _proto.setPreBootloadHandler = function setPreBootloadHandler(fn) {
                this.preBootloadHandler = fn;
                return this
            };
            _proto.setReadOnly = function setReadOnly(readOnly) {
                typeof readOnly !== "boolean" || (this.readOnly = readOnly);
                return this
            };
            _proto.getReadOnly = function getReadOnly() {
                return this.readOnly
            };
            _proto.setRelativeTo = function setRelativeTo(element) {
                this.relativeTo = element;
                return this
            };
            _proto.getRelativeTo = function getRelativeTo() {
                return this.relativeTo
            };
            _proto.setStatusClass = function setStatusClass(c) {
                this.statusClass = c;
                return this
            };
            _proto.setStatusElement = function setStatusElement(element) {
                this.statusElement = element;
                return this
            };
            _proto.getStatusElement = function getStatusElement() {
                return importDefault("ge")(this.statusElement)
            };
            _proto._isRelevant = function _isRelevant() {
                if (this._allowCrossPageTransition) return !0;
                return !this.id ? !0 : this.id > id_threshold
            };
            _proto.clearStatusIndicator = function clearStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (importNamespace("CSS").removeClass(statusElem, "async_saving"), importNamespace("CSS").removeClass(statusElem, this.statusClass))
            };
            _proto.addStatusIndicator = function addStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (importNamespace("CSS").addClass(statusElem, "async_saving"), importNamespace("CSS").addClass(statusElem, this.statusClass))
            };
            _proto.specifiesWriteRequiredParams = function specifiesWriteRequiredParams() {
                return this.writeRequiredParams.every(function(param) {
                    this.data[param] = this.data[param] || importDefault("Env")[param] || (importDefault("ge")(param) || {}).value;
                    return this.data[param] !== void 0 ? !0 : !1
                }, this)
            };
            _proto.setOption = function setOption(opt, v) {
                typeof this.option[opt] !== "undefined" && (this.option[opt] = v);
                return this
            };
            _proto.getOption = function getOption(opt) {
                typeof this.option[opt] === "undefined";
                return this.option[opt]
            };
            _proto.abort = function abort() {
                var _this3 = this;
                this.continuation.last(function() {
                    var transport = _this3.transport;
                    if (transport) {
                        var old_handler = _this3.getTransportErrorHandler();
                        _this3.setOption("suppressErrorAlerts", !0);
                        _this3.setTransportErrorHandler(importDefault("emptyFunction"));
                        _this3._requestAborted = !0;
                        transport.abort();
                        _this3.setTransportErrorHandler(old_handler)
                    }
                    _this3.abortHandler();
                    AsyncMultiplex.unschedule(_this3)
                })
            };
            _proto.abandon = function abandon() {
                var _this4 = this;
                this.continuation.last(function() {
                    importDefault("clearTimeout")(_this4.timer);
                    _this4.setOption("suppressErrorAlerts", !0).setHandler(importDefault("emptyFunction")).setErrorHandler(importDefault("emptyFunction")).setTransportErrorHandler(importDefault("emptyFunction")).setProgressHandler(importDefault("emptyFunction")).setUploadProgressHandler(importDefault("emptyFunction"));
                    var transport = _this4.transport;
                    transport && (_this4._requestAborted = !0, supportsProgress(transport) && delete transport.onprogress, supportsUploadProgress(transport) && delete transport.upload.onprogress, transport.abort());
                    _this4.abortHandler();
                    AsyncMultiplex.unschedule(_this4)
                })
            };
            _proto.setNectarModuleDataSafe = function setNectarModuleDataSafe(elem) {
                var setNectarModuleData = this.setNectarModuleData;
                setNectarModuleData && setNectarModuleData.call(this, elem);
                return this
            };
            _proto.setAllowCrossPageTransition = function setAllowCrossPageTransition(allow) {
                this._allowCrossPageTransition = !!allow;
                this.timer && this.resetTimeout(this.timeout);
                return this
            };
            _proto.getAllowIrrelevantRequests = function getAllowIrrelevantRequests() {
                return this._allowIrrelevantRequests
            };
            _proto.setAllowIrrelevantRequests = function setAllowIrrelevantRequests(allowIrrelevantRequests) {
                this._allowIrrelevantRequests = allowIrrelevantRequests;
                return this
            };
            _proto.setAllowCrossOrigin = function setAllowCrossOrigin(allow) {
                this._allowCrossOrigin = allow;
                return this
            };
            _proto.setAllowCredentials = function setAllowCredentials(allow) {
                this._allowCredentials = allow;
                return this
            };
            _proto.setIsBackgroundRequest = function setIsBackgroundRequest(isBackgroundRequest) {
                this._isBackgroundRequest = isBackgroundRequest;
                return this
            };
            _proto.setReplaceTransportMarkers = function setReplaceTransportMarkers(value) {
                value === void 0 && (value = !0);
                this._shouldReplaceTransportMarkers = value;
                return this
            };
            _proto.sendAndReturnAbortHandler = function sendAndReturnAbortHandler() {
                var _this5 = this;
                this.send();
                return function() {
                    return _this5.abort()
                }
            };
            _proto.send = function send(isRetry) {
                var _this6 = this;
                isRetry = isRetry || !1;
                if (!this.uri) return !1;
                this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
                this.getOption("jsonp") && this.method != "GET" && this.setMethod("GET");
                (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && this.method != "GET" && this.setMethod("GET");
                this.timeoutHandler !== null && (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback"));
                if (!this.getReadOnly()) {
                    this.specifiesWriteRequiredParams();
                    if (this.method != "POST") return !1
                }
                if (document.location.search.toString().includes(this.uri.toString())) return !1;
                if (this.uri.toString().includes("/../") || this.uri.toString().includes("\\../") || this.uri.toString().includes("/..\\") || this.uri.toString().includes("\\..\\")) return !1;
                Object.assign(this.data, importDefault("getAsyncParams")(this.method));
                importDefault("isEmpty")(this.context) || (Object.assign(this.data, this.context), this.data.ajax_log = 1);
                importDefault("Env").force_param && Object.assign(this.data, importDefault("Env").force_param);
                this._setUserActionID();
                if (this.getOption("bundle") && this._isMultiplexable()) {
                    AsyncMultiplex.schedule(this);
                    return !0
                }
                this.setNewSerial();
                this.getOption("asynchronous_DEPRECATED") || this.uri.addQueryData({
                    __sjax: 1
                });
                importDefault("Arbiter").inform("AsyncRequest/send", {
                    request: this,
                    ts: importDefault("performanceAbsoluteNow")()
                });
                var uri_str, query;
                this.method == "GET" && this.uri.addQueryData({
                    fb_dtsg_ag: importNamespace("DTSG_ASYNC").getToken()
                });
                this.method == "GET" || this.rawData ? (uri_str = this.uri.addQueryData(this.data).toString(), query = this.rawData || "") : (this._allowCrossOrigin && this.uri.addQueryData({
                    __a: 1
                }), uri_str = this.uri.toString(), query = importNamespace("PHPQuerySerializer").serialize(this.data));
                if (this.transport) return !1;
                if (this.getOption("useFetchWithIframeFallback")) try {
                    var _transport = new(importDefault("FetchStreamTransport"))(this.uri);
                    this.setJSONPTransport(_transport);
                    this._markRequestSent();
                    _transport.send();
                    this.setOption("useIframeTransport", !1);
                    return !0
                } catch (_unused4) {
                    this.setOption("useFetchWithIframeFallback", !1), this.setOption("useIframeTransport", !0)
                }
                if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
                    requireLazy(["JSONPTransport"], function(JSONPTransport) {
                        var transport = new JSONPTransport(this.getOption("jsonp") ? "jsonp" : "iframe", this.uri);
                        this.setJSONPTransport(transport);
                        this._markRequestSent();
                        transport.send()
                    }.bind(this));
                    return !0
                }
                this.flushedResponseHandler && (this.flushedResponseTextParseIndex = 0);
                var transport = importNamespace("ZeroRewrites").getTransportBuilderForURI(this.uri)();
                if (!transport) return !1;
                this.schedule("AsyncRequest.send");
                transport.onreadystatechange = function() {
                    var _transport = _this6.transport;
                    _transport && _transport.readyState >= 2 && _transport.readyState <= 3 && _this6._handleFlushedResponse();
                    transport.readyState === 4 && _this6.continuation.last(_this6._onStateChange)
                };
                this.progressHandler && supportsProgress(transport) && (transport.onprogress = function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    _this6.continuation(function() {
                        _this6.progressHandler && _this6.progressHandler.apply(_this6, args)
                    })
                });
                this.uploadProgressHandler && supportsUploadProgress(transport) && (transport.upload.onprogress = function() {
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    _this6.continuation(function() {
                        _this6.uploadProgressHandler && _this6.uploadProgressHandler.apply(_this6, args)
                    })
                });
                isRetry || (this.remainingRetries = this.getOption("retries"));
                this.transport = transport;
                try {
                    transport.open(this.method, uri_str, importDefault("gkx")("1857581") ? !0 : this.getOption("asynchronous_DEPRECATED"))
                } catch (exception) {
                    return !1
                }
                if (!this.uri.isSameOrigin() && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback")) {
                    if (!supportsCrossOrigin(transport)) return !1;
                    this._canSendCredentials() && (transport.withCredentials = !0)
                }
                this.method == "POST" && !this.rawData && transport.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                this._isBackgroundRequest && transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
                var asyncHeaders = importDefault("getAsyncHeaders")(this.uri);
                Object.keys(asyncHeaders).forEach(function(name) {
                    transport && transport.setRequestHeader(name, asyncHeaders[name])
                });
                importDefault("Arbiter").inform("AsyncRequest/will_send", {
                    request: this
                });
                if (transport)
                    for (var headerName in this.headers) Object.prototype.hasOwnProperty.call(this.headers, headerName) && transport.setRequestHeader(headerName, this.headers[headerName]);
                this.addStatusIndicator();
                this._markRequestSent();
                transport.send(query);
                this.timeout !== null && this.resetTimeout(this.timeout);
                AsyncRequest._inflightCount++;
                return !0
            };
            _proto.schedule = function schedule(name) {
                this.continuation = importDefault("TimeSlice").getReusableContinuation(name)
            };
            _proto._canSendCredentials = function _canSendCredentials() {
                if (this._allowCredentials === !1) return !1;
                var uri = new(importDefault("URI"))(this.uri);
                return importDefault("isBulletinDotComURI")(uri) || importDefault("isFacebookURI")(uri) || importDefault("isInternalFBURI")(uri) || importDefault("isMessengerDotComURI")(uri) || importDefault("isWorkplaceDotComURI")(uri)
            };
            _proto._markRequestSent = function _markRequestSent() {
                var fullURI = new(importDefault("URI"))(this.getURI()).getQualifiedURI().toString();
                importNamespace("ResourceTimingsStore").updateURI(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID, fullURI);
                importNamespace("ResourceTimingsStore").annotate(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID).addStringAnnotation("uri", fullURI);
                importNamespace("ResourceTimingsStore").measureRequestSent(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID)
            };
            _proto.promisePayload = function promisePayload(isRetry) {
                return this.exec().then(function(response) {
                    return response.payload
                }, function(response) {
                    throw response.toError()
                })
            };
            _proto.exec = function exec(isRetry) {
                var _this7 = this;
                if (this.getHandler() !== importDefault("emptyFunction") || this.getErrorHandler() !== importDefault("AsyncResponse").defaultErrorHandler) throw new Error("exec is an async function and does not allow previously set handlers");
                return new(require("Promise"))(function(resolve, reject) {
                    _this7.setHandler(resolve).setErrorHandler(reject).send(isRetry)
                })
            };
            AsyncRequest.bootstrap = function bootstrap(href, elem, is_post) {
                var method = "GET",
                    readonly = !0,
                    data = {};
                (is_post || elem && elem.rel == "async-post") && (method = "POST", readonly = !1, href && (href = new(importDefault("URI"))(href), data = href.getQueryData(), href.setQueryData({})));
                var status_elem = importNamespace("Parent").byClass(elem, "stat_elem") || elem;
                if (status_elem && importNamespace("CSS").hasClass(status_elem, "async_saving")) return !1;
                var async = new AsyncRequest(href).setReadOnly(readonly).setMethod(method).setData(data).setNectarModuleDataSafe(elem).setRelativeTo(elem);
                elem && (async.setHandler(function(response) {
                    importDefault("Event").fire(elem, "success", {
                        response: response
                    })
                }), async.setErrorHandler(function(response) {
                    importDefault("Event").fire(elem, "error", {
                        response: response
                    }) !== !1 && importDefault("AsyncResponse").defaultErrorHandler(response)
                }));
                if (status_elem instanceof HTMLElement) {
                    async.setStatusElement(status_elem);
                    var status_class = status_elem.getAttribute("data-status-class");
                    status_class && async.setStatusClass(status_class)
                }
                async.send();
                return !1
            };
            AsyncRequest.post = function post(href, data) {
                new AsyncRequest(href).setReadOnly(!1).setMethod("POST").setData(data).send();
                return !1
            };
            AsyncRequest.postStatic = function postStatic(href, data) {
                AsyncRequest.post(href, data)
            };
            AsyncRequest.getLastID = function getLastID() {
                return last_id
            };
            AsyncRequest.ignoreUpdate = function ignoreUpdate() {
                ignore_id_update = !0
            };
            AsyncRequest.getInflightCount = function getInflightCount() {
                return this._inflightCount
            };
            return AsyncRequest
        }();
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex, _pendingAsyncMultiplexes = [],
        AsyncMultiplex = function() {
            function AsyncMultiplex() {
                this._requests = []
            }
            var _proto2 = AsyncMultiplex.prototype;
            _proto2.add = function add(request) {
                this._requests.push(request)
            };
            _proto2.remove = function remove(request) {
                var requests = this._requests,
                    requestsSent = this._requestsSent;
                for (var ii = 0, jj = requests.length; ii < jj; ii++) requests[ii] === request && (requestsSent ? requests[ii] = null : requests.splice(ii, 1))
            };
            _proto2.send = function send() {
                this._requestsSent && invariant(0, 4390);
                this._requestsSent = !0;
                this._wrapperRequest = null;
                var requests = this._requests;
                if (!requests.length) return;
                var request;
                if (requests.length === 1) request = requests[0];
                else {
                    var data = requests.filter(Boolean).map(function(request) {
                        return [request.uri.getPath(), importNamespace("PHPQuerySerializer").serialize(request.data)]
                    });
                    request = this._wrapperRequest = new AsyncRequest("/ajax/proxy.php").setAllowCrossPageTransition(!0).setData({
                        data: data
                    }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this))
                }
                request && request.setOption("bundle", !1).send()
            };
            _proto2._handler = function _handler(response) {
                var _this8 = this,
                    responses = response.getPayload().responses;
                if (responses.length !== this._requests.length) return;
                var _loop2 = function _loop2(ii) {
                    var request = _this8._requests[ii];
                    if (!request) return "continue";
                    var request_path = request.uri.getPath();
                    _this8._wrapperRequest && (request.id = _this8._wrapperRequest.id);
                    if (responses[ii][0] !== request_path) {
                        request.continuation.last(function() {
                            request.invokeResponseHandler({
                                transportError: "Wrong response order in bundled request to " + request_path
                            })
                        });
                        return "continue"
                    }
                    request.continuation.last(function() {
                        request.handleResponse(responses[ii][1])
                    })
                };
                for (var ii = 0; ii < this._requests.length; ii++) {
                    var _ret2 = _loop2(ii);
                    if (_ret2 === "continue") continue
                }
                _pendingAsyncMultiplexes.splice(_pendingAsyncMultiplexes.indexOf(this, 1))
            };
            _proto2._transportErrorHandler = function _transportErrorHandler(response) {
                var interpreted = {
                        transportError: response.errorDescription
                    },
                    paths = this._requests.filter(Boolean).map(function(request) {
                        this._wrapperRequest && (request.id = this._wrapperRequest.id);
                        request.invokeResponseHandler(interpreted);
                        return request.uri.getPath()
                    }, this)
            };
            AsyncMultiplex.schedule = function schedule(request) {
                request.schedule("AsyncMultiplex.schedule");
                _asyncMultiplex || (_asyncMultiplex = new AsyncMultiplex(), _pendingAsyncMultiplexes.push(_asyncMultiplex), importDefault("TimeSlice").guard(function() {
                    importDefault("setTimeoutAcrossTransitions")(function() {
                        _asyncMultiplex && (_asyncMultiplex.send(), _asyncMultiplex = null)
                    }, 0)
                }, "AsyncMultiplex.schedule", {
                    propagationType: importDefault("TimeSlice").PropagationType.ORPHAN
                })());
                _asyncMultiplex.add(request);
                return _asyncMultiplex
            };
            AsyncMultiplex.unschedule = function unschedule(request) {
                _pendingAsyncMultiplexes.forEach(function(asyncMultiplex) {
                    asyncMultiplex.remove(request)
                })
            };
            return AsyncMultiplex
        }();
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest;
    exports["default"] = AsyncRequest
}), 98);
__d("normalizeBoundingClientRect", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a = a.ownerDocument.documentElement;
        var c = a ? a.clientLeft : 0;
        a = a ? a.clientTop : 0;
        var d = Math.round(b.left) - c;
        c = Math.round(b.right) - c;
        var e = Math.round(b.top) - a;
        b = Math.round(b.bottom) - a;
        return {
            left: d,
            right: c,
            top: e,
            bottom: b,
            width: c - d,
            height: b - e
        }
    }
    f["default"] = a
}), 66);
__d("getElementRect", ["containsNode", "normalizeBoundingClientRect"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b;
        b = a == null ? void 0 : (b = a.ownerDocument) == null ? void 0 : b.documentElement;
        return !a || !("getBoundingClientRect" in a) || !c("containsNode")(b, a) ? {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
        } : c("normalizeBoundingClientRect")(a, a.getBoundingClientRect())
    }
    g["default"] = a
}), 98);
__d("getElementPosition", ["getElementRect"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a = c("getElementRect")(a);
        return {
            x: a.left,
            y: a.top,
            width: a.right - a.left,
            height: a.bottom - a.top
        }
    }
    g["default"] = a
}), 98);
__d("Form", ["DOM", "DOMQuery", "DTSG", "DTSGUtils", "DataStore", "Input", "LSD", "PHPQuerySerializer", "Random", "SprinkleConfig", "URI", "getElementPosition", "isFacebookURI", "isNode"], (function(a, b, c, d, e, f) {
    var g, h, i = "FileList" in window,
        j = "FormData" in window;

    function k(a) {
        var c = {};
        (g || (g = b("PHPQuerySerializer"))).serialize(a).split("&").forEach(function(a) {
            if (a) {
                a = /^([^=]*)(?:=(.*))?$/.exec(a);
                var d = (h || (h = b("URI"))).decodeComponent(a[1]),
                    e = a[2] !== void 0;
                e = e ? (h || (h = b("URI"))).decodeComponent(a[2]) : null;
                c[d] = e
            }
        });
        return c
    }
    var l = {
        getInputs: function(a) {
            a === void 0 && (a = document);
            return [].concat(b("DOMQuery").scry(a, "input"), b("DOMQuery").scry(a, "select"), b("DOMQuery").scry(a, "textarea"), b("DOMQuery").scry(a, "button"))
        },
        getInputsByName: function(a) {
            var b = {};
            l.getInputs(a).forEach(function(a) {
                var c = b[a.name];
                b[a.name] = typeof c === "undefined" ? a : [a].concat(c)
            });
            return b
        },
        getSelectValue: function(a) {
            return a.options[a.selectedIndex].value
        },
        setSelectValue: function(a, b) {
            for (var c = 0; c < a.options.length; ++c)
                if (a.options[c].value == b) {
                    a.selectedIndex = c;
                    break
                }
        },
        getRadioValue: function(a) {
            for (var b = 0; b < a.length; b++)
                if (a[b].checked) return a[b].value;
            return null
        },
        getElements: function(a) {
            return a.tagName == "FORM" && a.elements != a ? Array.from(a.elements) : l.getInputs(a)
        },
        getAttribute: function(a, b) {
            return (a.getAttributeNode(b) || {}).value || null
        },
        setDisabled: function(a, c) {
            l.getElements(a).forEach(function(a) {
                if (a.disabled !== void 0) {
                    var d = b("DataStore").get(a, "origDisabledState");
                    c ? (d === void 0 && b("DataStore").set(a, "origDisabledState", a.disabled), a.disabled = c) : d === !1 && (a.disabled = !1)
                }
            })
        },
        forEachValue: function(a, c, d) {
            l.getElements(a).forEach(function(a) {
                if (!a.name || a.disabled) return;
                if (a.type === "submit") return;
                if (a.type === "reset" || a.type === "button" || a.type === "image") return;
                if ((a.type === "radio" || a.type === "checkbox") && !a.checked) return;
                if (a.nodeName === "SELECT") {
                    for (var c = 0, e = a.options.length; c < e; c++) {
                        var f = a.options[c];
                        f.selected && d("select", a.name, f.value)
                    }
                    return
                }
                if (a.type === "file") {
                    if (i) {
                        f = a.files;
                        for (var c = 0; c < f.length; c++) d("file", a.name, f.item(c))
                    }
                    return
                }
                d(a.type, a.name, b("Input").getValue(a))
            }), c && c.name && c.type === "submit" && b("DOMQuery").contains(a, c) && b("DOMQuery").isNodeOfType(c, ["input", "button"]) && d("submit", c.name, c.value)
        },
        createFormData: function(a, c) {
            if (!j) return null;
            var d = new FormData();
            if (a)
                if (b("isNode")(a)) l.forEachValue(a, c, function(b, a, c) {
                    d.append(a, c)
                });
                else {
                    c = k(a);
                    for (var e in c) c[e] == null ? d.append(e, "") : d.append(e, c[e])
                }
            return d
        },
        serialize: function(a, b) {
            var c = {};
            l.forEachValue(a, b, function(a, b, d) {
                if (a === "file") return;
                l._serializeHelper(c, b, d)
            });
            return l._serializeFix(c)
        },
        _serializeHelper: function(a, b, c) {
            var d = Object.prototype.hasOwnProperty,
                e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
            if (e) {
                if (!a[e[1]] || !d.call(a, e[1])) {
                    a[e[1]] = d = {};
                    if (a[e[1]] !== d) return
                }
                d = 0;
                if (e[2] === "")
                    while (a[e[1]][d] !== void 0) d++;
                else d = e[2];
                e[3] === "" ? a[e[1]][d] = c : l._serializeHelper(a[e[1]], d.concat(e[3]), c)
            } else a[b] = c
        },
        _serializeFix: function(a) {
            for (var b in a) a[b] instanceof Object && (a[b] = l._serializeFix(a[b]));
            var c = Object.keys(a);
            if (c.length === 0 || c.some(isNaN)) return a;
            c.sort(function(a, b) {
                return a - b
            });
            var d = 0,
                e = c.every(function(a) {
                    return +a === d++
                });
            return e ? c.map(function(b) {
                return a[b]
            }) : a
        },
        post: function(a, c, d, e) {
            e === void 0 && (e = !0);
            a = new(h || (h = b("URI")))(a);
            var f = document.createElement("form");
            f.action = a.toString();
            f.method = "POST";
            f.style.display = "none";
            var g = !b("isFacebookURI")(a);
            if (d) {
                if (g) {
                    f.rel = "noopener";
                    if (d === "_blank") {
                        d = btoa(b("Random").uint32());
                        var i = window.open("about:blank", d);
                        i === void 0 || (i.opener = null)
                    }
                }
                f.target = d
            }
            if (e && (!g && a.getSubdomain() !== "apps")) {
                i = b("DTSG").getToken();
                i && (c.fb_dtsg = i, b("SprinkleConfig").param_name && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(i)));
                b("LSD").token && (c.lsd = b("LSD").token, b("SprinkleConfig").param_name && !i && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            l.createHiddenInputs(c, f);
            b("DOMQuery").getRootElement().appendChild(f);
            f.submit();
            return !1
        },
        createHiddenInputs: function(a, c, d, e) {
            e === void 0 && (e = !1);
            d = d || {};
            a = k(a);
            for (var f in a) {
                if (a[f] === null) continue;
                if (d[f] && e) d[f].value = a[f];
                else {
                    var g = b("DOM").create("input", {
                        type: "hidden",
                        name: f,
                        value: a[f]
                    });
                    d[f] = g;
                    c.appendChild(g)
                }
            }
            return d
        },
        getFirstElement: function(a, c) {
            c === void 0 && (c = ['input[type="text"]', "textarea", 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]']);
            var d = [];
            for (var e = 0; e < c.length; e++) {
                d = b("DOMQuery").scry(a, c[e]);
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    try {
                        var h = b("getElementPosition")(g);
                        if (h.y > 0 && h.x > 0) return g
                    } catch (a) {}
                }
            }
            return null
        },
        focusFirst: function(a) {
            a = l.getFirstElement(a);
            if (a) {
                a.focus();
                return !0
            }
            return !1
        }
    };
    e.exports = l
}), null);
__d("trackReferrer", ["Cookie", "Parent"], (function(a, b, c, d, e, f) {
    var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;

    function h(a) {
        return g.exec(a)[1] || ""
    }

    function a(a, c) {
        a = b("Parent").byAttribute(a, "data-referrer");
        if (a) {
            c = h(c);
            if (!c) return;
            c = c + "|" + a.getAttribute("data-referrer");
            b("Cookie").set("x-src", c)
        }
    }
    e.exports = a
}), null);
__d("FormSubmit", ["AsyncRequest", "AsyncResponse", "CSS", "DOMQuery", "Event", "Form", "Parent", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    var h = {
        buildRequest: function(a, b) {
            var e = (d("Form").getAttribute(a, "method") || "GET").toUpperCase();
            b = b && d("Parent").byTag(b, "button") || b;
            var f = b && d("Parent").byClass(b, "stat_elem") || a;
            if (d("CSS").hasClass(f, "async_saving")) return null;
            if (b && (b.form !== a || b.nodeName != "INPUT" && b.nodeName != "BUTTON" || b.type != "submit")) {
                var g = d("DOMQuery").scry(a, ".enter_submit_target")[0];
                g && (b = g)
            }
            g = d("Form").serialize(a, b);
            d("Form").setDisabled(a, !0);
            b = d("Form").getAttribute(a, "ajaxify") || d("Form").getAttribute(a, "action");
            var h = !!d("Form").getAttribute(a, "data-cors");
            c("trackReferrer")(a, b);
            return new(c("AsyncRequest"))().setAllowCrossOrigin(h).setURI(b).setData(g).setNectarModuleDataSafe(a).setReadOnly(e == "GET").setMethod(e).setRelativeTo(a).setStatusElement(f).setInitialHandler(d("Form").setDisabled.bind(null, a, !1)).setHandler(function(b) {
                c("Event").fire(a, "success", {
                    response: b
                })
            }).setErrorHandler(function(b) {
                c("Event").fire(a, "error", {
                    response: b
                }) !== !1 && c("AsyncResponse").defaultErrorHandler(b)
            }).setFinallyHandler(d("Form").setDisabled.bind(null, a, !1))
        },
        send: function(a, b) {
            a = h.buildRequest(a, b);
            a && a.send();
            return a
        }
    };
    a = h;
    g["default"] = a
}), 98);
__d("PlatformWidgetEndpoint", ["PlatformVersioning"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        return b("PlatformVersioning").versionAwarePath("/dialog/" + a + (c ? "/" + c : ""))
    }

    function c(a, c) {
        return b("PlatformVersioning").versionAwarePath("/plugins/" + a + (c ? "/" + c : ""))
    }

    function d(a) {
        return /^\/plugins\//.test(b("PlatformVersioning").getUnversionedPath(a))
    }

    function f(a) {
        return /^\/dialog\//.test(b("PlatformVersioning").getUnversionedPath(a))
    }
    a = {
        dialog: a,
        plugins: c,
        isPluginEndpoint: d,
        isDialogEndpoint: f
    };
    e.exports = a
}), null);
__d("ArbiterFrame", [], (function(a, b, c, d, e, f) {
    a = {
        inform: function(a, b, c) {
            var d = parent.frames,
                e = d.length,
                f;
            b.crossFrame = !0;
            for (var g = 0; g < e; g++) {
                f = d[g];
                try {
                    if (!f || f == window) continue;
                    f.require ? f.require("Arbiter").inform(a, b, c) : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c)
                } catch (a) {}
            }
        }
    };
    e.exports = a
}), null);
__d("Plugin", ["Arbiter", "ArbiterFrame"], (function(a, b, c, d, e, f) {
    var g = {
        CONNECT: "platform/plugins/connect",
        DISCONNECT: "platform/plugins/disconnect",
        ERROR: "platform/plugins/error",
        RELOAD: "platform/plugins/reload",
        DIALOG: "platform/plugins/dialog",
        connect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.CONNECT, a);
            b("ArbiterFrame").inform(g.CONNECT, a)
        },
        disconnect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.DISCONNECT, a);
            b("ArbiterFrame").inform(g.DISCONNECT, a)
        },
        error: function(a, c) {
            b("Arbiter").inform(g.ERROR, {
                action: a,
                content: c
            })
        },
        reload: function(a) {
            b("Arbiter").inform(g.RELOAD, {
                reloadUrl: a || ""
            }), b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: a || ""
            })
        },
        reloadOtherPlugins: function(a, c) {
            b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: "",
                reload: a || "",
                identifier: c || ""
            })
        }
    };
    e.exports = g
}), null);
__d("Banzai", ["cr:1642797"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1642797")
}), 98);
__d("FBJSON", [], (function(a, b, c, d, e, f) {
    a = JSON.parse;
    b = JSON.stringify;
    f.parse = a;
    f.stringify = b
}), 66);
__d("pageID", ["WebSession"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("WebSession").getPageId_DO_NOT_USE();
    g["default"] = a
}), 98);
__d("WebStorageMutex", ["WebStorage", "clearTimeout", "pageID", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
        i = !1,
        j = c("pageID");

    function k() {
        i || (i = !0, h = c("WebStorage").getLocalStorage());
        return h
    }
    a = function() {
        function a(a) {
            this.name = a
        }
        a.testSetPageID = function(a) {
            j = a
        };
        var b = a.prototype;
        b.$2 = function() {
            var a, b = k();
            if (!b) return j;
            b = b.getItem("mutex_" + this.name);
            b = ((a = b) != null ? a : "").split(":");
            return b && parseInt(b[1], 10) >= Date.now() ? b[0] : null
        };
        b.$3 = function(a) {
            var b = k();
            if (!b) return;
            a = a == null ? 1e3 : a;
            a = Date.now() + a;
            c("WebStorage").setItemGuarded(b, "mutex_" + this.name, j + ":" + a)
        };
        b.hasLock = function() {
            return this.$2() === j
        };
        b.lock = function(a, b, d) {
            var e = this;
            this.$1 && c("clearTimeout")(this.$1);
            j === (this.$2() || j) && this.$3(d);
            this.$1 = c("setTimeout")(function() {
                e.$1 = null;
                var c = e.hasLock() ? a : b;
                c && c(e)
            }, 0)
        };
        b.unlock = function() {
            this.$1 && c("clearTimeout")(this.$1);
            var a = k();
            a && this.hasLock() && a.removeItem("mutex_" + this.name)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("nativeRequestAnimationFrame", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeRequestAnimationFrame || a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
    c = b;
    f["default"] = c
}), 66);
__d("requestAnimationFramePolyfill", ["nativeRequestAnimationFrame", "performanceNow"], (function(a, b, c, d, e, f, g) {
    var h = 0;
    b = c("nativeRequestAnimationFrame") || function(b) {
        var d = c("performanceNow")(),
            e = Math.max(0, 16 - (d - h));
        h = d + e;
        return a.setTimeout(function() {
            b(c("performanceNow")())
        }, e)
    };
    d = b;
    g["default"] = d
}), 98);
__d("requestAnimationFrameAcrossTransitions", ["TimeSlice", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a = c("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: c("TimeSlice").PropagationType.CONTINUATION
        });
        return c("requestAnimationFramePolyfill")(a)
    }
    g["default"] = a
}), 98);
__d("requestAnimationFrame", ["TimeSlice", "TimerStorage", "requestAnimationFrameAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        function b(b) {
            c("TimerStorage").unset(c("TimerStorage").ANIMATION_FRAME, d), a(b)
        }
        c("TimeSlice").copyGuardForWrapper(a, b);
        b.__originalCallback = a;
        var d = c("requestAnimationFrameAcrossTransitions")(b);
        c("TimerStorage").set(c("TimerStorage").ANIMATION_FRAME, d);
        return d
    }
    g["default"] = a
}), 98);
__d("PersistedQueue", ["BaseEventEmitter", "ExecutionEnvironment", "FBJSON", "Run", "WebStorage", "WebStorageMutex", "err", "guid", "nullthrows", "performanceAbsoluteNow", "requestAnimationFrame"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 24 * 60 * 60 * 1e3,
        i = 30 * 1e3,
        j = new(c("BaseEventEmitter"))(),
        k;

    function l() {
        if (k === void 0) {
            var a = "check_quota";
            try {
                var b = c("WebStorage").getLocalStorage();
                b ? (b.setItem(a, a), b.removeItem(a), k = b) : k = null
            } catch (a) {
                k = null
            }
        }
        return k
    }

    function m(a) {
        var b = a.prev,
            c = a.next;
        c && (c.prev = b);
        b && (b.next = c);
        a.next = null;
        a.prev = null
    }

    function n(a) {
        return {
            item: a,
            next: null,
            prev: null
        }
    }
    var o = {},
        p = {};
    a = function() {
        function a(a, b) {
            var d = this;
            this.$5 = 0;
            this.$3 = a;
            this.$9 = a + "^$" + c("guid")();
            if (b) {
                this.$6 = (a = b.max_age_in_ms) != null ? a : h;
                this.$10 = b.migrate
            } else this.$6 = h;
            this.$7 = [j.addListener("active", function() {
                d.$8 != null && (d.$8 = null, d.$11())
            }), j.addListener("inactive", function() {
                d.$8 == null && (d.$8 = Date.now(), d.$12())
            })];
            (c("ExecutionEnvironment").canUseDOM || c("ExecutionEnvironment").isInWorker) && c("requestAnimationFrame")(function() {
                return d.$11()
            })
        }
        var b = a.prototype;
        b.isActive = function() {
            var a = this.$8;
            if (a == null) return !0;
            if (Date.now() - a > i) {
                this.$8 = null;
                j.emit("active", null);
                return !0
            }
            return !1
        };
        b.$11 = function() {
            this.$13(), this.$14()
        };
        b.$12 = function() {
            this.$15()
        };
        a.create = function(b, d) {
            if (b in o) throw c("err")("Duplicate queue created: " + b);
            d = new a(b, d);
            o[b] = d;
            var e = p[b];
            e && (d.setHandler(e), delete p[b]);
            return d
        };
        a.setHandler = function(a, b) {
            var c = o[a];
            c ? c.setHandler(b) : p[a] = b
        };
        b.destroy = function() {
            this.$7.forEach(function(a) {
                return a.remove()
            })
        };
        a.destroy = function(a) {
            o[a].destroy(), delete o[a], delete p[a]
        };
        b.setHandler = function(a) {
            this.$4 = a;
            this.$14();
            return this
        };
        b.$14 = function() {
            this.$5 > 0 && this.$4 && this.$4(this)
        };
        b.length = function() {
            return this.$5
        };
        b.enumeratedLength = function() {
            return this.$16().length
        };
        b.$13 = function() {
            var b = this,
                a = l();
            if (!a) return;
            var e = this.$3 + "^$",
                f = new(c("WebStorageMutex"))(e),
                g = this.$10;
            f.lock(function(f) {
                var h = Date.now() - b.$6;
                for (var i = 0; i < a.length; i++) {
                    var j = a.key(i);
                    if (typeof j === "string" && j.startsWith(e)) {
                        var k = a.getItem(j);
                        a.removeItem(j);
                        if (k != null && k.startsWith("{")) {
                            j = d("FBJSON").parse(c("nullthrows")(k));
                            if (j.ts > h) try {
                                for (var k = j.items, j = Array.isArray(k), l = 0, k = j ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var m;
                                    if (j) {
                                        if (l >= k.length) break;
                                        m = k[l++]
                                    } else {
                                        l = k.next();
                                        if (l.done) break;
                                        m = l.value
                                    }
                                    m = m;
                                    m = g != null ? g(m) : m;
                                    b.$17(m)
                                }
                            } catch (a) {}
                        }
                    }
                }
                f.unlock()
            })
        };
        b.$15 = function() {
            var a = l();
            if (!a) return;
            var b = this.$16();
            if (b.length === 0) {
                a.getItem(this.$9) != null && a.removeItem(this.$9);
                return
            }
            c("WebStorage").setItemGuarded(a, this.$9, d("FBJSON").stringify({
                items: b.map(function(a) {
                    return a
                }),
                ts: c("performanceAbsoluteNow")()
            }))
        };
        b.$16 = function() {
            var a = this.$1,
                b = [];
            if (!a) return b;
            do b.push(a.item); while (a = a.prev);
            return b.reverse()
        };
        b.markItemAsCompleted = function(a) {
            var b = a.prev;
            m(a);
            this.$1 === a && (this.$1 = b);
            this.$5--;
            this.isActive() || this.$15()
        };
        b.markItemAsFailed = function(a) {
            m(a);
            var b = this.$2;
            if (b) {
                var c = b.prev;
                c && (c.next = a, a.prev = c);
                a.next = b;
                b.prev = a
            }
            this.$2 = a;
            this.isActive() && this.$14()
        };
        b.markItem = function(a, b) {
            b ? this.markItemAsCompleted(a) : this.markItemAsFailed(a)
        };
        b.$17 = function(a) {
            a = n(a);
            var b = this.$1;
            b && (b.next = a, a.prev = b);
            this.$1 = a;
            this.$2 || (this.$2 = a);
            this.$5++
        };
        b.wrapAndEnqueueItem = function(a) {
            this.$17(a), this.isActive() ? this.$14() : this.$15()
        };
        b.dequeueItem = function() {
            if (this.$8 != null) return null;
            var a = this.$2;
            if (!a) return null;
            this.$2 = a.next;
            return a
        };
        return a
    }();
    a.eventEmitter = j;
    if (c("ExecutionEnvironment").canUseDOM) {
        var q = d("Run").maybeOnBeforeUnload(function() {
            j.emit("inactive", null), q == null ? void 0 : q.remove()
        }, !1);
        if (!q) var r = d("Run").onUnload(function() {
            j.emit("inactive", null), r.remove()
        })
    }
    g["default"] = a
}), 98);
__d("ServerTime", ["ServerTimeData"], (function(a, b, c, d, e, f, g) {
    var h, i = 0;
    f = 0;
    var j = null;
    h = (h = window.performance) == null ? void 0 : h.timing;
    if (h) {
        var k = h.requestStart;
        h = h.domLoading;
        if (k && h) {
            var l = c("ServerTimeData").timeOfResponseStart - c("ServerTimeData").timeOfRequestStart;
            k = h - k - l;
            f = k / 2;
            l = h - c("ServerTimeData").timeOfResponseStart - f;
            h = Math.max(50, k * .8);
            Math.abs(l) > h && (i = l, j = Date.now())
        }
    } else d(c("ServerTimeData").serverTime);

    function a() {
        return Date.now() - i
    }

    function b() {
        return i
    }

    function d(a) {
        a = Date.now() - a;
        Math.abs(i - a) > 6e4 && (i = a, j = Date.now())
    }

    function e() {
        return j === null ? null : Date.now() - j
    }
    f = a;
    k = b;
    g.getMillis = a;
    g.getOffsetMillis = b;
    g.update = d;
    g.getMillisSinceLastUpdate = e;
    g.get = f;
    g.getSkew = k
}), 98);
__d("isPromise", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return !!a && typeof a.then === "function"
    }
    f["default"] = a
}), 66);
__d("FalcoLoggerInternal", ["AnalyticsCoreData", "BaseEventEmitter", "FBLogger", "PersistedQueue", "Random", "ServerTime", "isPromise", "performanceAbsoluteNow", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 500 * 1024 * .6;

    function a(a) {
        "rate" in a && (a.policy = {
            r: a.rate
        });
        var b = a.extra;
        typeof b !== "string" && (a.extra = JSON.stringify(b));
        return a
    }
    var i = c("PersistedQueue").create("falco_queue_log", {
            migrate: a
        }),
        j = c("PersistedQueue").create("falco_queue_immediately", {
            migrate: a
        }),
        k = c("PersistedQueue").create("falco_queue_critical", {
            migrate: a
        }),
        l = new(c("BaseEventEmitter"))();

    function m(a, e, f, g) {
        var i, j, k, m, n, o;
        return b("regeneratorRuntime").async(function(p) {
            while (1) switch (p.prev = p.next) {
                case 0:
                    i = c("Random").coinflip(e.r);
                    if (!(i || c("AnalyticsCoreData").enable_observer)) {
                        p.next = 18;
                        break
                    }
                    j = c("performanceAbsoluteNow")() - d("ServerTime").getOffsetMillis();
                    if (!i) {
                        p.next = 17;
                        break
                    }
                    k = f();
                    if (!c("isPromise")(k)) {
                        p.next = 11;
                        break
                    }
                    p.next = 8;
                    return b("regeneratorRuntime").awrap(k);
                case 8:
                    m = p.sent;
                    p.next = 12;
                    break;
                case 11:
                    m = k;
                case 12:
                    n = JSON.stringify(m);
                    if (!(n.length > h)) {
                        p.next = 16;
                        break
                    }
                    c("FBLogger")("falco", "oversized_message:" + a).warn('Dropping event "%s" due to exceeding the max size %s at %s', a, h, n.length);
                    return p.abrupt("return");
                case 16:
                    g.wrapAndEnqueueItem({
                        name: a,
                        policy: e,
                        time: j,
                        extra: n
                    });
                case 17:
                    c("AnalyticsCoreData").enable_observer && (o = function() {
                        var a;
                        return (a = k) != null ? a : f()
                    }, l.emit("event", {
                        name: a,
                        time: j,
                        sampled: i,
                        getData: o,
                        policy: e
                    }));
                case 18:
                case "end":
                    return p.stop()
            }
        }, null, this)
    }

    function e(a, b) {
        return {
            log: function(c) {
                m(a, b, c, i)
            },
            logAsync: function(c) {
                m(a, b, c, i)
            },
            logImmediately: function(c) {
                m(a, b, c, j)
            },
            logCritical: function(c) {
                m(a, b, c, k)
            }
        }
    }
    g.observable = l;
    g.create = e
}), 98);
__d("JstlMigrationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1814852");
    c = b("FalcoLoggerInternal").create("jstl_migration", a);
    e.exports = c
}), null);
__d("getDataWithLoggerOptions", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return babelHelpers["extends"]({}, a, {
            __options: babelHelpers["extends"]({}, {
                event_time: Date.now() / 1e3
            }, b)
        })
    }
    f["default"] = a
}), 66);
__d("GeneratedLoggerUtils", ["invariant", "Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = window.location.search.indexOf("showlog") > -1;

    function a(a, c, d, e) {
        var f = b("getDataWithLoggerOptions")(c, e);
        c = a.split(":")[0];
        var g = a.split(":")[1];
        c == "logger" ? b("JstlMigrationFalcoEvent").log(function() {
            return {
                logger_config_name: g,
                payload: f
            }
        }) : b("Banzai").post(a, f, d);
        h
    }
    c = {
        log: a,
        serializeVector: function(a) {
            if (!a) return a;
            if (Array.isArray(a)) return a;
            if (a.toArray) {
                var b = a;
                return b.toArray()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return Array.from(a);
            g(0, 3874, a)
        },
        serializeMap: function(a) {
            if (!a) return a;
            if (a.toJS) {
                var b = a;
                return b.toJS()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
                b = a;
                var c = {};
                for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                    c[f[0]] = f[1]
                }
                return c
            }
            if (Object.prototype.toString.call(a) === "[object Object]") return a;
            g(0, 3875, a)
        },
        checkExtraDataFieldNames: function(a, b) {
            Object.keys(a).forEach(function(a) {
                Object.prototype.hasOwnProperty.call(b, a) && g(0, 3876, a)
            })
        },
        warnForInvalidFieldNames: function(a, b, c, d) {},
        throwIfNull: function(a, b) {
            a || g(0, 3877, b);
            return a
        }
    };
    e.exports = c
}), null);
__d("MessengerWebPluginAnonymousTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setAppID = function(a) {
            this.$1.app_id = a;
            return this
        };
        c.setCallsite = function(a) {
            this.$1.callsite = a;
            return this
        };
        c.setClientFbid = function(a) {
            this.$1.client_fbid = a;
            return this
        };
        c.setDebugData = function(a) {
            this.$1.debug_data = a;
            return this
        };
        c.setDeltaType = function(a) {
            this.$1.delta_type = a;
            return this
        };
        c.setDeviceParam = function(a) {
            this.$1.device_param = a;
            return this
        };
        c.setDomainSource = function(a) {
            this.$1.domain_source = a;
            return this
        };
        c.setDuration = function(a) {
            this.$1.duration = a;
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setEventTimestamp = function(a) {
            this.$1.event_timestamp = a;
            return this
        };
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        };
        c.setExceptionStacktrace = function(a) {
            this.$1.exception_stacktrace = a;
            return this
        };
        c.setExceptionType = function(a) {
            this.$1.exception_type = a;
            return this
        };
        c.setGateway = function(a) {
            this.$1.gateway = a;
            return this
        };
        c.setIsUserLoggedIn = function(a) {
            this.$1.is_user_logged_in = a;
            return this
        };
        c.setNewEventName = function(a) {
            this.$1.new_event_name = a;
            return this
        };
        c.setOtherFields = function(a) {
            this.$1.other_fields = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        };
        c.setPluginExtra = function(a) {
            this.$1.plugin_extra = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setPluginInterface = function(a) {
            this.$1.plugin_interface = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURI = function(a) {
            this.$1.referer_uri = a;
            return this
        };
        c.setRequestHeaders = function(a) {
            this.$1.request_headers = a;
            return this
        };
        c.setRequestID = function(a) {
            this.$1.request_id = a;
            return this
        };
        c.setRequestParam = function(a) {
            this.$1.request_param = a;
            return this
        };
        c.setTabName = function(a) {
            this.$1.tab_name = a;
            return this
        };
        c.setUpgradeLoggedInUserID = function(a) {
            this.$1.upgrade_logged_in_user_id = a;
            return this
        };
        c.setUpstreamEvent = function(a) {
            this.$1.upstream_event = a;
            return this
        };
        c.setWhitelistedDomains = function(a) {
            this.$1.whitelisted_domains = a;
            return this
        };
        return a
    }();
    c = {
        app_id: !0,
        callsite: !0,
        client_fbid: !0,
        debug_data: !0,
        delta_type: !0,
        device_param: !0,
        domain_source: !0,
        duration: !0,
        event: !0,
        event_timestamp: !0,
        exception_message: !0,
        exception_stacktrace: !0,
        exception_type: !0,
        gateway: !0,
        is_user_logged_in: !0,
        new_event_name: !0,
        other_fields: !0,
        page_id: !0,
        plugin_extra: !0,
        plugin_interface: !0,
        plugin_name: !0,
        referer_uri: !0,
        request_headers: !0,
        request_id: !0,
        request_param: !0,
        tab_name: !0,
        upgrade_logged_in_user_id: !0,
        upstream_event: !0,
        whitelisted_domains: !0
    };
    f["default"] = a
}), 66);
__d("PluginLoggedOutUserTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setHref = function(a) {
            this.$1.href = a;
            return this
        };
        c.setIsSDK = function(a) {
            this.$1.is_sdk = a;
            return this
        };
        c.setPluginAppID = function(a) {
            this.$1.plugin_app_id = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURL = function(a) {
            this.$1.referer_url = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        href: !0,
        is_sdk: !0,
        plugin_app_id: !0,
        plugin_name: !0,
        referer_url: !0
    };
    f["default"] = a
}), 66);
__d("PluginOptin", ["DOMEvent", "DOMEventListener", "MessengerWebPluginAnonymousTypedLogger", "PlatformWidgetEndpoint", "PluginLoggedOutUserTypedLogger", "PluginMessage", "PopupWindow", "URI", "UserAgent_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        Object.assign(this, {
            return_params: c("URI").getRequestURI().getQueryData(),
            login_params: {},
            optin_params: {},
            plugin: a,
            api_key: b
        }), this.addReturnParams({
            ret: "optin"
        }), delete this.return_params.hash
    }
    Object.assign(h.prototype, {
        addReturnParams: function(a) {
            Object.assign(this.return_params, a);
            return this
        },
        addLoginParams: function(a) {
            Object.assign(this.login_params, a);
            return this
        },
        addOptinParams: function(a) {
            Object.assign(this.optin_params, a);
            return this
        },
        start: function() {
            var a = this.api_key || 127760087237610;
            c("URI").getRequestURI().getQueryData().kid_directed_site && (this.login_params.kid_directed_site = !0);
            this.login_params.referrer = document.referrer;
            var b = new(c("URI"))(c("PlatformWidgetEndpoint").dialog("plugin.optin")).addQueryData(this.optin_params).addQueryData({
                app_id: a,
                secure: c("URI").getRequestURI().isSecure(),
                social_plugin: this.plugin,
                return_params: JSON.stringify(this.return_params),
                login_params: JSON.stringify(this.login_params)
            });
            d("UserAgent_DEPRECATED").mobile() ? b.setSubdomain("m") : b.addQueryData({
                display: "popup"
            });
            this.return_params.act !== null && this.return_params.act === "send" && new(c("PluginLoggedOutUserTypedLogger"))().setPluginAppID(a).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();
            this.popup = d("PopupWindow").open(b.toString(), 420, 450);
            this.plugin === "customer_chat" && this.login_params.chat_plugin_upgrade != null && this.login_params.chat_plugin_upgrade === !0 && new(c("MessengerWebPluginAnonymousTypedLogger"))().setPageID(this.login_params.page_id).setClientFbid(this.login_params.guest_id).setRequestID(this.login_params.request_id).setNewEventName("upgrade_plugin_optin_popup_opened").log();
            d("PluginMessage").listen();
            return this
        }
    });
    h.starter = function(a, b, c, d) {
        a = new h(a);
        a.addReturnParams(b || {});
        a.addLoginParams(c || {});
        a.addOptinParams(d || {});
        return a.start.bind(a)
    };
    h.listen = function(a, b, d, e, f) {
        c("DOMEventListener").add(a, "click", function(a) {
            new(c("DOMEvent"))(a).kill(), h.starter(b, d, e, f)()
        })
    };
    a = h;
    g["default"] = a
}), 98);
__d("PluginConnectButton", ["Arbiter", "CSS", "DOM", "DOMEvent", "DOMEventListener", "Focus", "FormSubmit", "PlatformWidgetEndpoint", "Plugin", "PluginOptin", "URI"], (function(a, b, c, d, e, f) {
    var g, h = "new",
        i = b("Arbiter").subscribe,
        j = function(a, c) {
            return b("DOMEventListener").add(a, "click", c)
        };

    function a(a) {
        this.config = a;
        this.busy = !1;
        var c = b("DOM").find(a.form, ".pluginConnectButton");
        this.buttons = c;
        this.node_connected = b("DOM").find(c, ".pluginConnectButtonConnected");
        this.node_disconnected = b("DOM").find(c, ".pluginConnectButtonDisconnected");
        var d = function(a) {
            new(b("DOMEvent"))(a).kill(), this.busy || (this.submit(), this.busy = this.canpersonalize)
        }.bind(this);
        j(this.node_disconnected, d);
        a.buttontype === 1 ? j(b("DOM").find(c, ".pluginButtonX button"), d) : a.buttontype === 2 && j(this.node_connected, d);
        j(this.node_connected, function(a) {
            return b("Arbiter").inform(b("Plugin").DIALOG, a)
        });
        c = this.update.bind(this);
        i(b("Plugin").CONNECT, c, h);
        i(b("Plugin").DISCONNECT, c, h);
        i(b("Plugin").ERROR, this.error.bind(this), h)
    }
    Object.assign(a.prototype, {
        update: function(a, c) {
            this.busy = !1;
            var d = this.config;
            if (c.identifier !== d.identifier) return;
            c = a === b("Plugin").CONNECT;
            a = b("PlatformWidgetEndpoint").plugins(d.plugin);
            a += "/" + (c ? "disconnect" : "connect");
            b("CSS")[c ? "show" : "hide"](this.node_connected);
            b("CSS")[c ? "hide" : "show"](this.node_disconnected);
            try {
                if (document.activeElement.nodeName.toLowerCase() === "button") {
                    var e = c ? this.node_connected : this.node_disconnected;
                    e = b("DOM").find(e, "button");
                    e.disabled = !1;
                    b("Focus").set(e)
                }
            } catch (a) {}
            d.connected = c;
            d.form.setAttribute("action", a);
            d.form.setAttribute("ajaxify", a)
        },
        error: function(a, c) {
            this.busy = !1;
            if (c.action in {
                    connect: 1,
                    disconnect: 1
                }) {
                b("DOM").setContent(this.buttons, c.content);
                a = b("DOM").scry(this.buttons, ".confirmButton");
                a.length === 1 && b("Focus").set(a[0])
            }
        },
        submit: function() {
            if (!this.config.canpersonalize) return this.login();
            b("FormSubmit").send(this.config.form);
            this.fireStateToggle()
        },
        fireStateToggle: function() {
            var a = this.config;
            a.connected ? b("Plugin").disconnect(a.identifier) : b("Plugin").connect(a.identifier)
        },
        login: function() {
            var a = this.config.plugin;
            new(b("PluginOptin"))(a, (g || (g = b("URI"))).getRequestURI().getQueryData().api_key).addReturnParams({
                act: "connect"
            }).addLoginParams({
                social_plugin_action: this.config.pluginaction,
                kid_directed_site: this.config.kidDirectedSite
            }).start()
        }
    });
    e.exports = a
}), null);
__d("Locale", ["SiteData"], (function(a, b, c, d, e, f) {
    function a() {
        return b("SiteData").is_rtl
    }
    e.exports = {
        isRTL: a
    }
}), null);
__d("Log", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = -1;
    b = {
        DEBUG: 3,
        INFO: 2,
        WARNING: 1,
        ERROR: 0
    };
    c = function(a, b, c) {
        for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++) e[f - 3] = arguments[f];
        var h = 0,
            i = c.replace(/%s/g, function() {
                return String(e[h++])
            }),
            j = window.console;
        j && g >= b && j[a in j ? a : "log"](i)
    };

    function a(a) {
        g = a
    }
    d = c.bind(null, "debug", b.DEBUG);
    e = c.bind(null, "info", b.INFO);
    var h = c.bind(null, "warn", b.WARNING),
        i = c.bind(null, "error", b.ERROR);
    f.Level = b;
    f.log = c;
    f.setLevel = a;
    f.debug = d;
    f.info = e;
    f.warn = h;
    f.error = i
}), 66);
__d("Queue", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = function() {
        function a(a) {
            this._timeout = null, this._interval = (a == null ? void 0 : a.interval) || 0, this._processor = a == null ? void 0 : a.processor, this._queue = [], this._stopped = !0
        }
        var b = a.prototype;
        b._dispatch = function(a) {
            var b = this;
            a === void 0;
            if (this._stopped || this._queue.length === 0) return;
            a = this._processor;
            if (a == null) {
                this._stopped = !0;
                throw new Error("No processor available")
            }
            var c = this._interval;
            if (c != null) a.call(this, this._queue.shift()), this._timeout = setTimeout(function() {
                return b._dispatch()
            }, c);
            else
                while (this._queue.length) a.call(this, this._queue.shift())
        };
        b.enqueue = function(a) {
            this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
            return this
        };
        b.start = function(a) {
            a && (this._processor = a);
            this._stopped = !1;
            this._dispatch();
            return this
        };
        b.isStarted = function() {
            return !this._stopped
        };
        b.dispatch = function() {
            this._dispatch(!0)
        };
        b.stop = function(a) {
            this._stopped = !0;
            a && this._timeout != null && clearTimeout(this._timeout);
            return this
        };
        b.merge = function(a, b) {
            if (b) {
                (b = this._queue).unshift.apply(b, a._queue)
            } else {
                (b = this._queue).push.apply(b, a._queue)
            }
            a._queue = [];
            this._dispatch();
            return this
        };
        b.getLength = function() {
            return this._queue.length
        };
        a.get = function(b, c) {
            var d;
            b in g ? d = g[b] : d = g[b] = new a(c);
            return d
        };
        a.exists = function(a) {
            return a in g
        };
        a.remove = function(a) {
            return delete g[a]
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("isInIframe", [], (function(a, b, c, d, e, f) {
    var g = window != window.top;

    function a() {
        return g
    }
    f["default"] = a
}), 66);
__d("resolveWindow", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (a == null) return null;
        var b = window;
        a = a.split(".");
        try {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                if (e) b = b.frames[e[1]];
                else if (d === "opener" || d === "parent" || d === "top") b = b[d];
                else return null
            }
        } catch (a) {
            return null
        }
        return b
    }
    f["default"] = a
}), 66);
__d("QueryString", [], (function(a, b, c, d, e, f) {
    function g(a) {
        var b = [];
        Object.keys(a).sort().forEach(function(c) {
            var d = a[c];
            if (d === void 0) return;
            if (d === null) {
                b.push(c);
                return
            }
            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }

    function a(a, b) {
        b === void 0 && (b = !1);
        var c = {};
        if (a === "") return c;
        a = a.split("&");
        for (var d = 0; d < a.length; d++) {
            var e = a[d].split("=", 2),
                f = decodeURIComponent(e[0]);
            if (b && Object.prototype.hasOwnProperty.call(c, f)) throw new URIError("Duplicate key: " + f);
            c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null
        }
        return c
    }

    function b(a, b) {
        return a + (a.indexOf("?") !== -1 ? "&" : "?") + (typeof b === "string" ? b : g(b))
    }
    c = {
        encode: g,
        decode: a,
        appendToUrl: b
    };
    f["default"] = c
}), 66);
__d("ObservableMixin", [], (function(a, b, c, d, e, f) {
    function a() {
        this.__observableEvents = {}
    }
    a.prototype = {
        inform: function(a) {
            var b = Array.prototype.slice.call(arguments, 1),
                c = Array.prototype.slice.call(this.getSubscribers(a));
            for (var d = 0; d < c.length; d++) {
                if (c[d] === null) continue;
                try {
                    c[d].apply(this, b)
                } catch (a) {
                    window.setTimeout(function() {
                        throw a
                    }, 0)
                }
            }
            return this
        },
        getSubscribers: function(a) {
            return this.__observableEvents[a] || (this.__observableEvents[a] = [])
        },
        clearSubscribers: function(a) {
            a && (this.__observableEvents[a] = []);
            return this
        },
        subscribe: function(a, b) {
            a = this.getSubscribers(a);
            a.push(b);
            return this
        },
        unsubscribe: function(a, b) {
            a = this.getSubscribers(a);
            for (var c = 0; c < a.length; c++)
                if (a[c] === b) {
                    a.splice(c, 1);
                    break
                }
            return this
        }
    };
    e.exports = a
}), null);
__d("ManagedError", [], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
            b !== null && b !== void 0 ? d.message = b : d.message = "";
            d.innerError = c;
            return d
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a
}), 66);
__d("AssertionError", ["ManagedError"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            return a.call(this, b) || this
        }
        return b
    }(c("ManagedError"));
    g["default"] = a
}), 98);
__d("Assert", ["AssertionError", "sprintf"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        if (typeof a !== "boolean" || a === !1) throw new(c("AssertionError"))(b);
        return a
    }

    function i(a, b, d) {
        var e;
        if (b === void 0) e = "undefined";
        else if (b === null) e = "null";
        else {
            var f = Object.prototype.toString.call(b);
            f = /\s(\w*)/.exec(f);
            e = f == null ? typeof f : f[1].toLowerCase()
        }
        h(a.indexOf(e) !== -1, (f = d) != null ? f : c("sprintf")("Expression is of type %s, not %s", e, a));
        return b
    }

    function a(a, b, c) {
        h(b instanceof a, (a = c) != null ? a : "Expression not instance of type");
        return b
    }

    function j(a, b) {
        k["is" + a] = b, k["maybe" + a] = function(a, c) {
            return a == null ? a : b(a, c)
        }
    }
    b = function(a, b) {
        return a
    };
    var k = {
        isInstanceOf: a,
        isTrue: h,
        isTruthy: function(a, b) {
            return h(!!a, b)
        },
        isBoolean: b,
        isFunction: b,
        isNumber: b,
        isObject: b,
        isString: b,
        isUndefined: b,
        maybeObject: b,
        maybeNumber: b,
        maybeFunction: b
    };
    ["Boolean", "Function", "Number", "Object", "String", "Undefined"].forEach(function(a) {
        j(a, i.bind(null, a.toLowerCase()))
    });
    d = k;
    g["default"] = d
}), 98);
__d("Type", ["Assert"], (function(a, b, c, d, e, f) {
    function g() {
        var a = this.__mixins;
        if (a)
            for (var b = 0; b < a.length; b++) a[b].apply(this, arguments)
    }

    function h(a, b) {
        if (b instanceof a) return !0;
        if (b instanceof g)
            for (var c = 0; c < b.__mixins.length; c++)
                if (b.__mixins[c] == a) return !0;
        return !1
    }

    function i(a, b) {
        var c = a.prototype;
        Array.isArray(b) || (b = [b]);
        for (var a = 0; a < b.length; a++) {
            var d = b[a];
            typeof d === "function" && (c.__mixins.push(d), d = d.prototype);
            Object.keys(d).forEach(function(a) {
                c[a] = d[a]
            })
        }
    }

    function j(a, c, d) {
        var e = c && Object.prototype.hasOwnProperty.call(c, "constructor") ? c.constructor : function() {
            this.parent.apply(this, arguments)
        };
        b("Assert").isFunction(e);
        if (a && a.prototype instanceof g === !1) throw new Error("parent type does not inherit from Type");
        a = a || g;

        function f() {}
        f.prototype = a.prototype;
        e.prototype = new f();
        c && Object.assign(e.prototype, c);
        e.prototype.constructor = e;
        e.parent = a;
        e.prototype.__mixins = a.prototype.__mixins ? Array.prototype.slice.call(a.prototype.__mixins) : [];
        d && i(e, d);
        e.prototype.parent = function() {
            this.parent = a.prototype.parent, a.apply(this, arguments)
        };
        e.prototype.parentCall = function(b) {
            return a.prototype[b].apply(this, Array.prototype.slice.call(arguments, 1))
        };
        e.extend = function(a, b) {
            return j(this, a, b)
        };
        return e
    }
    Object.assign(g.prototype, {
        instanceOf: function(a) {
            return h(a, this)
        }
    });
    Object.assign(g, {
        extend: function(a, b) {
            return typeof a === "function" ? j.apply(null, arguments) : j(null, a, b)
        },
        instanceOf: h
    });
    e.exports = g
}), null);
__d("sdk.Model", ["ObservableMixin", "Type"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("Type").extend({
        constructor: function(a) {
            this.parent();
            var b = {},
                c = this;
            Object.keys(a).forEach(function(d) {
                b[d] = a[d], c["set" + d] = function(a) {
                    if (a === b[d]) return c;
                    b[d] = a;
                    c.inform(d + ".change", a);
                    return c
                }, c["get" + d] = function() {
                    return b[d]
                }
            })
        }
    }, c("ObservableMixin"));
    b = a;
    g["default"] = b
}), 98);
__d("sdk.Runtime", ["JSSDKRuntimeConfig", "sdk.Model"], (function(a, b, c, d, e, f, g) {
    var h = {
            UNKNOWN: 0,
            PAGETAB: 1,
            CANVAS: 2,
            PLATFORM: 4
        },
        i = new(c("sdk.Model"))({
            AccessToken: "",
            AutoLogAppEvents: !1,
            ClientID: "",
            CookieUserID: "",
            EnforceHttps: !1,
            Environment: h.UNKNOWN,
            FamilyLoginLoaded: !1,
            GraphDomain: "",
            Initialized: !1,
            IsVersioned: !1,
            KidDirectedSite: void 0,
            Locale: d("JSSDKRuntimeConfig").locale,
            LoggedIntoFacebook: void 0,
            LoginStatus: void 0,
            Revision: d("JSSDKRuntimeConfig").revision,
            Rtl: d("JSSDKRuntimeConfig").rtl,
            Scope: void 0,
            SDKAB: d("JSSDKRuntimeConfig").sdkab,
            SDKUrl: d("JSSDKRuntimeConfig").sdkurl,
            SDKNS: d("JSSDKRuntimeConfig").sdkns,
            ShouldLoadFamilyLogin: !1,
            UseCookie: !1,
            UseLocalStorage: !0,
            UserID: "",
            Version: void 0
        });
    Object.assign(i, {
        ENVIRONMENTS: h,
        isEnvironment: function(a) {
            var b = this.getEnvironment();
            return (a | b) === b
        },
        isCanvasEnvironment: function() {
            return this.isEnvironment(h.CANVAS) || this.isEnvironment(h.PAGETAB)
        }
    });
    (function() {
        var a = /app_runner/.test(window.name) ? h.PAGETAB : /iframe_canvas/.test(window.name) ? h.CANVAS : h.UNKNOWN;
        (a | h.PAGETAB) === a && (a |= h.CANVAS);
        i.setEnvironment(a)
    })();
    a = i;
    g["default"] = a
}), 98);
__d("UrlMap", ["invariant", "UrlMapConfig", "sdk.Runtime"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        var b = "https";
        if (a === "graph_domain") {
            var e = c("sdk.Runtime").getGraphDomain();
            e ? a = "graph_".concat(e) : a = "graph"
        }
        if (a in d("UrlMapConfig")) return b + "://" + d("UrlMapConfig")[a];
        a in d("UrlMapConfig") || h(0, 2511, a);
        return ""
    }
    g.resolve = a
}), 98);
__d("sdk.Scribe", ["QueryString", "UrlMap", "sdk.Runtime"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function a(a, b, e) {
        e === void 0 && (e = !1);
        if (a === "jssdk_error") {
            var f = JSON.stringify(b);
            if (Object.prototype.hasOwnProperty.call(h, f)) return;
            else h[f] = !0
        }
        if (b.extra != null && typeof b.extra === "object") {
            f = b.extra;
            f.revision = c("sdk.Runtime").getRevision()
        }
        f = new Image();
        var g = d("UrlMap").resolve("www") + "/platform/scribe_endpoint.php/";
        e || (f.crossOrigin = "anonymous");
        f.src = c("QueryString").appendToUrl(g, {
            c: a,
            m: JSON.stringify(b)
        })
    }
    g.log = a
}), 98);
__d("XD", ["Arbiter", "DOM", "DOMDimensions", "Log", "PHPQuerySerializer", "Queue", "URI", "isFacebookURI", "isInIframe", "resolveWindow", "sdk.Scribe"], (function(a, b, c, d, e, f, g) {
    var h = {
        _callbacks: [],
        _opts: {
            autoResize: !1,
            allowShrink: !0,
            channelUrl: null,
            hideOverflow: !1,
            resizeTimeout: 1e3,
            resizeWidth: !1
        },
        _lastResizeAckId: 0,
        _resizeCount: 0,
        _resizeTimestamp: 0,
        _shrinker: null,
        _forcedMinWidth: 100,
        init: function(a) {
            this._opts = babelHelpers["extends"]({}, this._opts, a), this._opts.autoResize && this._startResizeMonitor(), c("Arbiter").subscribe("Connect.Unsafe.resize.ack", function(a, b) {
                b.id || (b.id = this._resizeCount), b.id > this._lastResizeAckId && (this._lastResizeAckId = b.id)
            }.bind(this))
        },
        getQueue: function() {
            this._queue || (this._queue = new(c("Queue"))());
            return this._queue
        },
        setChannelUrl: function(a) {
            var b = this;
            this.getQueue().start(function(c) {
                return b.send(c, a)
            })
        },
        send: function(a, b) {
            a === void 0 && (a = null);
            b === void 0 && (b = null);
            b = b || this._opts.channelUrl;
            if (!b) {
                this.getQueue().enqueue(a);
                return
            }
            var e = {};
            b = new(c("URI"))(b);
            Object.assign(e, a, d("PHPQuerySerializer").deserialize(b.getFragment()));
            b = new(c("URI"))(e.origin);
            if (b.getDomain() === "") {
                d("Log").error("No valid domain for XD message target.");
                return
            }
            var f = b.getOrigin();
            if (typeof e.relation !== "string") {
                d("Log").error("No relation specified to resolve XD target window.");
                return
            }
            var g = c("resolveWindow")(e.relation.replace(/^parent\./, "")),
                h = 1;
            b = function b() {
                try {
                    g.postMessage(d("PHPQuerySerializer").serialize(e), f)
                } catch (c) {
                    --h ? window.setTimeout(b, 200) : d("sdk.Scribe").log("jssdk_error", {
                        error: "POST_MESSAGE",
                        extra: {
                            message: c.message + ", html/js/modules/XD.js:139",
                            ancestor_origins: JSON.stringify(location.ancestorOrigins),
                            referrer: document.referrer,
                            data: a
                        }
                    })
                }
            };
            b()
        },
        _computeSize: function() {
            var a = d("DOMDimensions").getDocumentDimensions(),
                b = 0;
            if (this._opts.resizeWidth) {
                var e = document.body;
                if (e != null) {
                    if (e.clientWidth < e.scrollWidth) b = a.width;
                    else {
                        e = e.lastElementChild;
                        if (e != null && e instanceof HTMLElement) {
                            e = e;
                            e = e.offsetLeft + e.offsetWidth;
                            e > b && (b = e)
                        }
                    }
                    b = Math.max(b, h._forcedMinWidth)
                } else b = h._forcedMinWidth
            }
            a.width = b;
            this._opts.allowShrink && (this._shrinker || (this._shrinker = c("DOM").create("div")), c("DOM").appendContent(document.body, this._shrinker), a.height = Math.max(this._shrinker.offsetTop, 0));
            return a
        },
        _startResizeMonitor: function() {
            var a, b;
            a = (a = document.documentElement) != null ? a : {};
            if (this._opts.hideOverflow) {
                a.style.overflow = "hidden";
                ((a = document.body) != null ? a : {}).style.overflow = "hidden"
            }
            a = function() {
                var a = this._computeSize(),
                    d = Date.now();
                if (!b || this._opts.allowShrink && b.width != a.width || !this._opts.allowShrink && b.width < a.width || this._opts.allowShrink && b.height != a.height || !this._opts.allowShrink && b.height < a.height) {
                    b = a;
                    this._resizeCount++;
                    this._resizeTimestamp = d;
                    d = {
                        type: "resize",
                        height: a.height,
                        ackData: {
                            id: this._resizeCount
                        },
                        width: 0
                    };
                    a.width && a.width != 0 && (d.width = a.width);
                    try {
                        if (c("isFacebookURI")(new(c("URI"))(document.referrer)) && c("isInIframe")() && window.name && window.parent.location && window.parent.location.toString && c("isFacebookURI")(new(c("URI"))(window.parent.location))) {
                            a = window.parent.document.getElementsByTagName("iframe");
                            for (var e = 0; e < a.length; e++) a[e].name == window.name && (this._opts.resizeWidth && (a[e].style.width = d.width + "px"), a[e].style.height = d.height + "px")
                        }
                        this.send(d)
                    } catch (a) {
                        this.send(d)
                    }
                }
            }.bind(this);
            a();
            window.setInterval(a, this._opts.resizeTimeout)
        }
    };
    b = babelHelpers["extends"]({}, h);
    a.UnverifiedXD = b;
    a.XD = h;
    g.XD = h;
    g.UnverifiedXD = b
}), 98);
__d("UnverifiedXD", ["XD"], (function(a, b, c, d, e, f, g) {
    g["default"] = d("XD").UnverifiedXD
}), 98);
__d("getOffsetParent", ["Style"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a.parentNode;
        if (!a || a === document.documentElement) return document.documentElement;
        return b("Style").get(a, "position") !== "static" ? a : a === document.body ? document.documentElement : g(a)
    }
    e.exports = g
}), null);
__d("PluginResize", ["Locale", "Log", "UnverifiedXD", "getOffsetParent", "getStyleProperty"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a || document.body;
        var c = 0,
            d = b("getOffsetParent")(a);
        b("Locale").isRTL() && d ? c = d.offsetWidth - a.offsetLeft - a.offsetWidth : b("Locale").isRTL() || (c = a.offsetLeft);
        return h(a) + c
    }

    function h(a) {
        return Math.ceil(parseFloat(b("getStyleProperty")(a, "width"))) || a.offsetWidth
    }

    function i(a) {
        a = a || document.body;
        return a.offsetHeight + a.offsetTop
    }

    function j(a, b, c) {
        this.calcWidth = a || g, this.calcHeight = b || i, this.width = void 0, this.height = void 0, this.event = c || "resize"
    }
    Object.assign(j.prototype, {
        resize: function() {
            var a = this.calcWidth(),
                c = this.calcHeight();
            (a !== this.width || c !== this.height) && (b("Log").debug("Resizing Plugin: (%s, %s, %s, %s)", a, c, this.event), this.width = a, this.height = c, b("UnverifiedXD").send({
                type: this.event,
                width: a,
                height: c
            }));
            return this
        },
        auto: function(a) {
            setInterval(this.resize.bind(this), a || 250);
            return this
        }
    });
    j.auto = function(a, b, c) {
        return new j(g.bind(null, a), i.bind(null, a), b).resize().auto(c)
    };
    j.autoHeight = function(a, b, c, d) {
        return new j(function() {
            return a
        }, i.bind(null, b), c).resize().auto(d)
    };
    j.getElementWidth = h;
    e.exports = j
}), null);
__d("PluginConnectButtonResize", ["DOMDimensions", "DOMQuery", "PluginResize", "Style", "getElementPosition"], (function(a, b, c, d, e, f) {
    function a(a, c, d) {
        d && b("Style").set(a, "width", d + "px");
        b("PluginResize").auto(a, "resize.flow");

        function e() {
            var a = b("DOMQuery").scry(document.body, ".uiTypeaheadView")[0];
            if (!a) return {
                x: 0,
                y: 0
            };
            var c = b("getElementPosition")(a);
            a = b("DOMDimensions").getElementDimensions(a);
            return {
                x: c.x + a.width,
                y: c.y + a.height
            }
        }
        new(b("PluginResize"))(function() {
            return Math.max(b("PluginResize").getElementWidth(a), c && c.offsetWidth, e().x)
        }, function() {
            return Math.max(a.offsetHeight, c ? c.offsetHeight + c.offsetTop : 0, e().y)
        }, "resize.iframe", !0).resize().auto()
    }
    e.exports = a
}), null);
__d("sdk.FeatureFunctor", [], (function(a, b, c, d, e, f) {
    function g(a, b, c) {
        if (a.features && b in a.features) {
            a = a.features[b];
            if (typeof a === "object" && typeof a.rate === "number")
                if (a.rate && Math.random() * 100 <= a.rate) return a.value || !0;
                else return a.value ? null : !1;
            else return a
        }
        return c
    }

    function a(a) {
        return function() {
            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            if (c.length < 2) throw new Error("Default value is required");
            var e = c[0],
                f = c[1];
            return g(a, e, f)
        }
    }
    f.create = a
}), 66);
__d("sdk.feature", ["JSSDKConfig", "sdk.FeatureFunctor"], (function(a, b, c, d, e, f, g) {
    a = d("sdk.FeatureFunctor").create(d("JSSDKConfig"));
    g["default"] = a
}), 98);
__d("PluginConsent", ["PluginMessage", "PopupWindow", "URI", "UserAgent_DEPRECATED", "sdk.Scribe", "sdk.feature"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = c("URI").getRequestURI().getQueryData(), this.$2 = a, this.$3 = b, this.addReturnParams({
                ret: "consent"
            }), delete this.$1.hash
        }
        var b = a.prototype;
        b.addReturnParams = function(a) {
            Object.assign(this.$1, a);
            return this
        };
        b.start = function() {
            var a = this.$3 || (this.$2 === "like" ? 107599262613689 : 105440539523),
                b = new(c("URI"))("/dialog/plugin_cookie_consent").addQueryData({
                    app_id: a,
                    secure: c("URI").getRequestURI().isSecure(),
                    plugin: this.$2,
                    return_params: JSON.stringify(this.$1)
                });
            d("UserAgent_DEPRECATED").mobile() ? b.setSubdomain("m") : b.addQueryData({
                display: "popup"
            });
            b = d("PopupWindow").open(b.toString(), 420, 450);
            if (!b) {
                if (c("sdk.feature")("popup_blocker_scribe_logging", !0)) {
                    b = "POPUP_MAYBE_BLOCKED";
                    d("sdk.Scribe").log("jssdk_error", {
                        appId: a,
                        error: b,
                        extra: {
                            message: "plugin_cookie_consent"
                        }
                    })
                }
                return this
            }
            d("PluginMessage").listen();
            return this
        };
        return a
    }();
    g.PluginConsent = a
}), 98);
__d("PluginDOMEventListener", ["DOMEventListener", "Log", "UserAgent", "promiseDone"], (function(a, b, c, d, e, f, g) {
    var h = !c("UserAgent").isBrowser("Safari < 12") && typeof document.hasStorageAccess === "function",
        i = !h,
        j = !1;
    !i && h && c("promiseDone")(document.hasStorageAccess(), function(a) {
        d("Log").debug("hasStorageAccess=%s", a), i = a
    }, function(a) {
        return d("Log").warn("Storage access check failed: %s", a)
    });

    function a(a, b, e, f) {
        f === void 0 && (f = !1);
        if (!h || i || j) return d("DOMEventListener").add.apply(this, arguments);
        else {
            var g = function() {
                for (var a = arguments.length, b = new Array(a), f = 0; f < a; f++) b[f] = arguments[f];
                if (i || j) return e.apply(this, b);
                else {
                    var g = document.requestStorageAccess().then(function(a) {
                        d("Log").debug("Storage access request granted.");
                        i = !0;
                        return e.apply(this, b)
                    }.bind(this), function(a) {
                        d("Log").warn("Storage access request denied.");
                        j = !0;
                        return e.apply(this, b)
                    }.bind(this));
                    c("promiseDone")(g)
                }
            };
            return d("DOMEventListener").add.call(this, a, b, g, f)
        }
    }
    g.add = a;
    g.remove = d("DOMEventListener").remove
}), 98);
__d("PluginConnectButtonWrapIconButton", ["Arbiter", "DOM", "Event", "Focus", "FormSubmit", "PlatformWidgetEndpoint", "Plugin", "PluginConsent", "PluginDOMEventListener", "PluginOptin", "URI"], (function(a, b, c, d, e, f, g) {
    var h = {
        _connected: !1,
        _form: null,
        _href: null,
        _button: null,
        _plugin: null,
        _submitRequest: null,
        initializeButton: function(a, b, e, f, g, i, j, k, l, m, n, o) {
            h._connected = e, h._form = a, h._href = i, h._button = b, h._plugin = j, h._submitRequest = null, h._connecttip = l, h._disconnecttip = m, h._shouldConfirm = n, f ? (c("Event").listen(a, "click", function(a) {
                a.preventDefault(), h.submit()
            }), g && window.setTimeout(function() {
                h.submit(), h._button.toggleButton()
            }, 0), c("Arbiter").subscribe(d("Plugin").CONNECT, h._updatePlugin.bind(h)), c("Arbiter").subscribe(d("Plugin").DISCONNECT, h._updatePlugin.bind(h)), c("Arbiter").subscribe(d("Plugin").ERROR, function(a, b) {
                return h._handleError(b)
            })) : o ? d("PluginDOMEventListener").add(h._form, "click", function(a) {
                a.preventDefault();
                a = c("URI").getRequestURI().getQueryData();
                a = a.api_key || a.app_id || a.appId || a.apiKey || a.client_id;
                new(d("PluginConsent").PluginConsent)(j, a).addReturnParams({
                    act: "connect"
                }).start()
            }) : d("PluginDOMEventListener").add(h._form, "click", function(a) {
                a.preventDefault(), new(c("PluginOptin"))(j, c("URI").getRequestURI().getQueryData().api_key).addReturnParams({
                    act: "connect"
                }).addLoginParams({
                    social_plugin_action: k
                }).start()
            })
        },
        submit: function() {
            h._submitRequest !== null && (h._submitRequest.clearStatusIndicator(), h._submitRequest.abort()), h._submitRequest = c("FormSubmit").send(h._form), h._connected ? d("Plugin").disconnect(h._href) : d("Plugin").connect(h._href)
        },
        _updatePlugin: function(a, b) {
            if (b.identifier !== h._href) return;
            b = a === d("Plugin").CONNECT;
            b !== h._button.isActivated() && h._button.toggleButton();
            h._connected = b;
            h._toggleFormAction();
            h._button.setTitle(b ? h._disconnecttip : h._connecttip)
        },
        _toggleFormAction: function() {
            var a = d("PlatformWidgetEndpoint").plugins(h._plugin) + "/" + (h._connected ? "disconnect" : "connect");
            h._form.setAttribute("action", a);
            h._form.setAttribute("ajaxify", a)
        },
        _handleError: function(a) {
            c("DOM").setContent(h._form, a.content);
            a = c("DOM").scry(h._form, ".confirmButton");
            a.length === 1 && d("Focus").set(a[0])
        }
    };
    a = h;
    g["default"] = a
}), 98);
__d("PluginConnectText", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a.connected.textContent.length - a.disconnected.textContent.length;
        a[b > 0 ? "disconnected" : "connected"].appendChild(document.createTextNode("\xa0".repeat(Math.abs(b))))
    }
    f.init = a
}), 66);
__d("PluginConnection", ["Arbiter", "CSS", "Plugin"], (function(a, b, c, d, e, f, g) {
    function h() {}
    Object.assign(h.prototype, {
        init: function(a, b, e, f) {
            f = f || d("Plugin").CONNECT;
            this.identifier = a;
            this.element = b;
            this.css = e;
            c("Arbiter").subscribe([d("Plugin").CONNECT, d("Plugin").DISCONNECT], function(c, g) {
                a === g.href && d("CSS")[c === f ? "addClass" : "removeClass"](b, e);
                return !0
            });
            return this
        },
        connected: function() {
            return d("CSS").hasClass(this.element, this.css)
        },
        connect: function() {
            return c("Arbiter").inform(d("Plugin").CONNECT, {
                href: this.identifier
            }, "state")
        },
        disconnect: function() {
            return c("Arbiter").inform(d("Plugin").DISCONNECT, {
                href: this.identifier
            }, "state")
        },
        toggle: function() {
            return this.connected() ? this.disconnect() : this.connect()
        }
    });
    h.init = function(a) {
        for (var b, c = 0; c < a.length; c++) b = new h(), b.init.apply(b, a[c])
    };
    g["default"] = h
}), 98);
__d("AsyncFormRequestUtils", ["Arbiter"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        c("Arbiter").subscribe("AsyncRequest/" + b, function(b, c) {
            b = c.request.relativeTo;
            b && b === a && d(c)
        })
    }
    g.subscribe = a
}), 98);
__d("randomInt", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        a = b === void 0 ? [0, a] : [a, b];
        b = a[0];
        a = a[1];
        a > b || h(0, 1180, a, b);
        var c = this.random;
        c = c && typeof c === "function" ? c : Math.random;
        return Math.floor(b + c() * (a - b))
    }
    g["default"] = a
}), 98);
__d("ClientIDs", ["randomInt"], (function(a, b, c, d, e, f, g) {
    var h = new Set();

    function a() {
        var a = Date.now();
        a = a + ":" + (c("randomInt")(0, 4294967295) + 1);
        h.add(a);
        return a
    }

    function b(a) {
        return h.has(a)
    }
    g.getNewClientID = a;
    g.isExistingClientID = b
}), 98);
__d("Keys", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    });
    f["default"] = a
}), 66);
__d("PluginFeedLikeButton", ["Arbiter", "AsyncFormRequestUtils", "CSS", "ClientIDs", "DOM", "DOMEventListener", "FormSubmit", "Keys", "PluginOptin", "URI"], (function(a, b, c, d, e, f, g) {
    window.resetConfirmStoryLike = function(a) {
        d("CSS").show(c("DOM").find(document, "#likeStory_" + a)), c("DOM").remove(c("DOM").find(document, "#confirmStory_" + a))
    };

    function a(a) {
        a.setAttribute("value", d("ClientIDs").getNewClientID())
    }

    function b(a, b, e) {
        var f = "";
        if (b === 23) f = "post";
        else if (b === 50) f = "page";
        else throw new Error("Invalid FBFeedLocation type.");
        b = new(c("PluginOptin"))(f).addReturnParams({
            act: "like_" + a
        });
        d("DOMEventListener").add(e, "click", b.start.bind(b))
    }

    function e(a, b, e, f, g) {
        var h = function(a) {
            if (a.type === "keypress")
                if (a.keyCode === c("Keys").RETURN || a.keyCode === c("Keys").SPACE) c("FormSubmit").send(g);
                else return;
            c("FormSubmit").send(g)
        };
        d("DOMEventListener").add(b, "click", h);
        d("DOMEventListener").add(e, "click", h);
        d("DOMEventListener").add(b, "keypress", h);
        d("DOMEventListener").add(e, "keypress", h);
        h = f.getAttribute("value") === "1";
        d("AsyncFormRequestUtils").subscribe(g, "send", function(g) {
            g = f.getAttribute("value") === "1";
            d("CSS").conditionShow(e, g);
            d("CSS").conditionShow(b, !g);
            c("Arbiter").inform("embeddedUfiToggle", {
                isLike: g,
                storyToken: a
            });
            f.setAttribute("value", g ? "" : "1")
        });
        d("AsyncFormRequestUtils").subscribe(g, "response", function(g) {
            g = g.response.payload;
            if (g && !g.success) {
                g = g.isLike;
                d("CSS").conditionShow(b, g);
                d("CSS").conditionShow(e, !g);
                c("Arbiter").inform("revertLike", {
                    isLike: g,
                    storyToken: a
                });
                f.setAttribute("value", g ? "1" : "")
            }
        });
        var i = new(c("URI"))(window.location.search).getQueryData();
        h && i.act === "like_" + a && c("FormSubmit").send(g)
    }
    g.addClientId = a;
    g.loggedOutLikeButton = b;
    g.init = e
}), 98);
__d("idx", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, d) {
        try {
            return d(a)
        } catch (a) {
            if (a instanceof TypeError)
                if (b(a)) return null;
                else if (c(a)) return void 0;
            throw a
        }
    }
    var g;

    function b(a) {
        a = a.message;
        g || (g = i("null"));
        return g.test(a)
    }
    var h;

    function c(a) {
        a = a.message;
        h || (h = i("undefined"));
        return h.test(a)
    }

    function i(a) {
        return new RegExp("^" + a + " | " + a + "$|^[^\\(]* " + a + " ")
    }
    f["default"] = a
}), 66);
__d("intlSummarizeNumber", ["FbtNumberType", "IntlCompactDecimalNumberFormatConfig", "IntlVariations", "intlNumUtils"], (function(a, b, c, d, e, f) {
    var g = 3,
        h = 14,
        i = {
            ROUND: "ROUND",
            TRUNCATE: "TRUNCATE"
        },
        j = {
            SHORT: "SHORT",
            LONG: "LONG"
        };

    function a(a, c, d, e) {
        d === void 0 && (d = j.SHORT);
        e === void 0 && (e = i.ROUND);
        d = b("IntlCompactDecimalNumberFormatConfig")[d == j.SHORT ? "short_patterns" : "long_patterns"];
        var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
        f > h && (f = h);
        var l = k(a, f, c, e, d),
            m = l[0],
            n = l[1];
        l = l[2];
        if (l) {
            f += 1;
            l = k(a, f, c, e, d);
            m = l[0];
            n = l[1];
            l[2]
        }
        e = b("FbtNumberType").getVariation(m) || b("IntlVariations").NUMBER_OTHER;
        l = f.toString();
        l = (d = d) != null ? (d = d[l]) != null ? d[e.toString()] : d : d;
        if (!l || f < g || l.positive_prefix_pattern === "" && l.positive_suffix_pattern === "") {
            e = c === void 0 ? 0 : c;
            return b("intlNumUtils").formatNumberWithThousandDelimiters(a, e)
        }
        return l && l.min_integer_digits === 0 && m === 1 ? l.positive_prefix_pattern + l.positive_suffix_pattern : (l && l.positive_prefix_pattern || "") + b("intlNumUtils").formatNumberWithThousandDelimiters(m, n) + (l && l.positive_suffix_pattern || "")
    }

    function k(a, c, d, e, f) {
        var g = c.toString();
        g = (f = f) != null ? (f = f[g]) != null ? f[b("IntlVariations").NUMBER_OTHER.toString()] : f : f;
        f = g && g.min_integer_digits || c + 1;
        var j = c - f + 1;
        j = Math.abs(a) / Math.pow(10, j);
        var k = d != null;
        d = k ? d : g && g.min_fraction_digits;
        d == null && (d = c > 2 ? 1 : 0);
        g = e == i.TRUNCATE ? b("intlNumUtils").truncateLongNumber(j.toString(), d) : j.toFixed(d);
        e = parseFloat(g) * (a < 0 ? -1 : 1);
        return [e, e % 1 === 0 && !k ? 0 : d, g.length > f + (d > 0 ? d + 1 : 0) + (j >= 0 ? 0 : 1) && c < h]
    }
    e.exports = a
}), null);
__d("PluginIconButton", ["fbt", "invariant", "CSS", "DOM", "Event", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g, h, i) {
    a = function() {
        function a(a, b, d, e) {
            var f = this;
            a.removeAttribute("id");
            e === null || d !== null || i(0, 2812);
            this.$1 = a;
            this.$2 = d;
            this.$3 = e;
            b === !1 && (c("Event").listen(a, "click", function() {
                return f.toggleButton()
            }), c("Event").listen(a, "toggle", function() {
                return f.toggleButton()
            }))
        }
        var b = a.prototype;
        b.toggleButton = function() {
            var a = this;
            d("CSS").hasClass(this.$1, "active") === !1 ? (d("CSS").addClass(this.$1, "active"), this.$4(!0), d("CSS").addClass(this.$1, "is_animating"), setTimeout(function() {
                d("CSS").removeClass(a.$1, "is_animating")
            }, 240)) : (d("CSS").removeClass(this.$1, "active"), this.$4(!1))
        };
        b.setTitle = function(a) {
            this.$1.setAttribute("title", a)
        };
        b.$4 = function(a) {
            var b = function(a) {
                return h._( /*FBT_CALL*/ "{count}" /*FBT_CALL*/ , [h._param("count", c("intlSummarizeNumber")(a, 0))])
            };
            this.$3 != null && this.$3 < 1e3 && (this.$3 = a ? this.$3 + 1 : this.$3 - 1, c("DOM").setContent(this.$2, b(this.$3)))
        };
        b.isActivated = function() {
            return d("CSS").hasClass(this.$1, "active")
        };
        return a
    }();
    g["default"] = a
}), 98);
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
__d("CurrentUser", ["Cookie", "CurrentUserInitialData", "gkx"], (function(a, b, c, d, e, f) {
    var g, h = {
        getID: function() {
            return (g || (g = b("CurrentUserInitialData"))).USER_ID
        },
        getAccountID: function() {
            return (g || (g = b("CurrentUserInitialData"))).ACCOUNT_ID
        },
        getPossiblyNonFacebookUserID: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).NON_FACEBOOK_USER_ID) != null ? a : this.getID()
        },
        getEIMU: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).IG_USER_EIMU) != null ? a : "0"
        },
        getEmployeeWorkUserID: function() {
            return (g || (g = b("CurrentUserInitialData"))).WORK_USER_ID
        },
        getName: function() {
            return (g || (g = b("CurrentUserInitialData"))).NAME
        },
        getShortName: function() {
            return (g || (g = b("CurrentUserInitialData"))).SHORT_NAME
        },
        isLoggedIn: function() {
            if (b("gkx")("3959")) return h.getPossiblyNonFacebookUserID() !== "0";
            else return (g || (g = b("CurrentUserInitialData"))).USER_ID !== "0"
        },
        isLoggedInNow: function() {
            var a;
            if (!h.isLoggedIn()) return !1;
            if ((g || (g = b("CurrentUserInitialData"))).IS_INTERN_SITE) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).IS_WORK_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != "") return (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID === b("Cookie").get("c_user");
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN === !0 ? (g || (g = b("CurrentUserInitialData"))).USER_ID == b("Cookie").get("c_user") : (g || (g = b("CurrentUserInitialData"))).USER_ID === ((a = b("Cookie").get("i_user")) != null ? a : b("Cookie").get("c_user"))
        },
        isEmployee: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_EMPLOYEE
        },
        isTestUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_TEST_USER
        },
        hasWorkUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).HAS_WORK_USER
        },
        isWorkUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_WORK_USER
        },
        isGray: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_GRAY
        },
        isUnderage: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_UNDERAGE
        },
        isMessengerOnlyUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER
        },
        isMessengerCallGuestUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER
        },
        isBusinessPersonAccount: function() {
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT
        },
        hasSecondaryBusinessPerson: function() {
            return (g || (g = b("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON
        },
        getAppID: function() {
            return (g || (g = b("CurrentUserInitialData"))).APP_ID
        },
        isFacebookWorkAccount: function() {
            return (g || (g = b("CurrentUserInitialData"))).IS_FACEBOOK_WORK_ACCOUNT
        }
    };
    e.exports = h
}), null);
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
__d("BigPipeInstance", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = {
        Events: {
            init: "BigPipe/init",
            tti: "tti_bigpipe",
            displayed: "all_pagelets_displayed",
            loaded: "all_pagelets_loaded"
        },
        setCurrentInstance_DO_NOT_USE: function(a) {
            g = a
        },
        getCurrentInstance: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("EventEmitterWithValidation", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this) || this;
            d.$EventEmitterWithValidation1 = Object.keys(b);
            d.$EventEmitterWithValidation2 = Boolean(c);
            return d
        }
        var c = b.prototype;
        c.emit = function(b) {
            if (this.$EventEmitterWithValidation1.indexOf(b) === -1) {
                if (this.$EventEmitterWithValidation2) return;
                throw new TypeError(g(b, this.$EventEmitterWithValidation1))
            }
            return a.prototype.emit.apply(this, arguments)
        };
        return b
    }(b("BaseEventEmitter"));

    function g(a, b) {
        a = 'Unknown event type "' + a + '". ';
        a += "Known event types: " + b.join(", ") + ".";
        return a
    }
    e.exports = a
}), null);
__d("mixInEventEmitter", ["invariant", "EventEmitterWithHolding", "EventEmitterWithValidation", "EventHolder"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a, b, c) {
        b || h(0, 3159);
        var d = a.prototype || a;
        d.__eventEmitter && h(0, 3160);
        a = a.constructor;
        a && (a === Object || a === Function || h(0, 3161));
        d.__types = babelHelpers["extends"]({}, d.__types, b);
        d.__ignoreUnknownEvents = Boolean(c);
        Object.assign(d, i)
    }
    var i = {
        emit: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emit(a, b, c, d, e, f, g)
        },
        emitAndHold: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g)
        },
        addListener: function(a, b, c) {
            return this.__getEventEmitter().addListener(a, b, c)
        },
        once: function(a, b, c) {
            return this.__getEventEmitter().once(a, b, c)
        },
        addRetroactiveListener: function(a, b, c) {
            return this.__getEventEmitter().addRetroactiveListener(a, b, c)
        },
        listeners: function(a) {
            return this.__getEventEmitter().listeners(a)
        },
        removeAllListeners: function() {
            this.__getEventEmitter().removeAllListeners()
        },
        removeCurrentListener: function() {
            this.__getEventEmitter().removeCurrentListener()
        },
        releaseHeldEventType: function(a) {
            this.__getEventEmitter().releaseHeldEventType(a)
        },
        __getEventEmitter: function() {
            if (!this.__eventEmitter) {
                var a = new(c("EventEmitterWithValidation"))(this.__types, this.__ignoreUnknownEvents),
                    b = new(c("EventHolder"))();
                this.__eventEmitter = new(c("EventEmitterWithHolding"))(a, b)
            }
            return this.__eventEmitter
        }
    };
    g["default"] = a
}), 98);
__d("NavigationMetricsCore", ["mixInEventEmitter", "pageID"], (function(a, b, c, d, e, f, g) {
    var h = {
            NAVIGATION_DONE: "NAVIGATION_DONE",
            EVENT_OCCURRED: "EVENT_OCCURRED"
        },
        i = {
            tti: "tti",
            e2e: "e2e",
            all_pagelets_loaded: "all_pagelets_loaded",
            all_pagelets_displayed: "all_pagelets_displayed"
        },
        j = 0,
        k = {},
        l = function() {
            function a() {
                this.eventTimings = {
                    tti: null,
                    e2e: null,
                    all_pagelets_loaded: null,
                    all_pagelets_displayed: null
                }, this.lid = c("pageID") + ":" + j++, this.extras = {}
            }
            var b = a.prototype;
            b.getLID = function() {
                return this.lid
            };
            b.setRequestStart = function(a) {
                this.start = a;
                return this
            };
            b.setTTI = function(a) {
                this.eventTimings.tti = a;
                this.$1(i.tti, a);
                return this
            };
            b.setE2E = function(a) {
                this.eventTimings.e2e = a;
                this.$1(i.e2e, a);
                return this
            };
            b.setExtra = function(a, b) {
                this.extras[a] = b;
                return this
            };
            b.setDisplayDone = function(a) {
                this.eventTimings.all_pagelets_displayed = a;
                this.setExtra("all_pagelets_displayed", a);
                this.$1(i.all_pagelets_displayed, a);
                return this
            };
            b.setAllPageletsLoaded = function(a) {
                this.eventTimings.all_pagelets_loaded = a;
                this.setExtra("all_pagelets_loaded", a);
                this.$1(i.all_pagelets_loaded, a);
                return this
            };
            b.setServerLID = function(a) {
                this.serverLID = a;
                return this
            };
            b.$1 = function(a, b) {
                var c = {};
                k != null && this.serverLID != null && k[this.serverLID] != null && (c = k[this.serverLID]);
                c = babelHelpers["extends"]({}, c, {
                    event: a,
                    timestamp: b
                });
                m.emitAndHold(h.EVENT_OCCURRED, this.serverLID, c);
                return this
            };
            b.doneNavigation = function() {
                var a = babelHelpers["extends"]({
                    start: this.start,
                    extras: this.extras
                }, this.eventTimings);
                if (this.serverLID && k[this.serverLID]) {
                    var b = this.serverLID;
                    Object.assign(a, k[b]);
                    delete k[b]
                }
                m.emitAndHold(h.NAVIGATION_DONE, this.lid, a)
            };
            return a
        }(),
        m = {
            Events: h,
            postPagelet: function(a, b, c) {},
            siteInit: function(a) {
                a(l)
            },
            setPage: function(a) {
                if (!a.serverLID) return;
                k[a.serverLID] = {
                    page: a.page,
                    pageType: a.page_type,
                    pageURI: a.page_uri,
                    serverLID: a.serverLID
                }
            },
            getFullPageLoadLid: function() {
                throw new Error("getFullPageLoadLid is not implemented on this site")
            }
        };
    c("mixInEventEmitter")(m, h);
    a = m;
    g["default"] = a
}), 98);
__d("PageEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NATIVE_ONLOAD: "onload/onload",
        BIGPIPE_ONLOAD: "onload/onload_callback",
        AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
        NATIVE_DOMREADY: "onload/dom_content_ready",
        BIGPIPE_DOMREADY: "onload/domcontent_callback",
        AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
        NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
        NATIVE_ONUNLOAD: "onload/unload",
        AJAXPIPE_ONUNLOAD: "onload/exit",
        AJAXPIPE_SEND: "ajaxpipe/send",
        AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
        AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas"
    });
    f["default"] = a
}), 66);
__d("NavigationMetrics", ["Arbiter", "BigPipeInstance", "NavigationMetricsCore", "PageEvents", "performance"], (function(a, b, c, d, e, f, g) {
    var h = "0";
    c("NavigationMetricsCore").getFullPageLoadLid = function() {
        return h
    };
    c("NavigationMetricsCore").siteInit(function(a) {
        var b = new a(),
            e = !0;
        c("Arbiter").subscribe(d("BigPipeInstance").Events.init, function(f, g) {
            var i = e ? b : new a();
            e && (h = g.lid);
            e = !1;
            i.setServerLID(g.lid);
            f = g.arbiter;
            f.subscribe(d("BigPipeInstance").Events.tti, function(a, b) {
                a = b.ts;
                i.setTTI(a)
            });
            f.subscribe(c("PageEvents").AJAXPIPE_SEND, function(a, b) {
                a = b.ts;
                i.setRequestStart(a)
            });
            f.subscribe(c("PageEvents").AJAXPIPE_ONLOAD, function(a, b) {
                a = b.ts;
                i.setE2E(a).doneNavigation()
            });
            f.subscribe(d("BigPipeInstance").Events.displayed, function(a, b) {
                a = b.ts;
                i.setDisplayDone(a)
            });
            f.subscribe(d("BigPipeInstance").Events.loaded, function(a, b) {
                a = b.ts;
                i.setAllPageletsLoaded(a)
            })
        });
        c("Arbiter").subscribe(c("PageEvents").BIGPIPE_ONLOAD, function(a, d) {
            a = d.ts;
            e = !1;
            b.setRequestStart(c("performance").timing && c("performance").timing.navigationStart).setE2E(a).doneNavigation()
        })
    });
    g["default"] = c("NavigationMetricsCore")
}), 98);
__d("cancelIdleCallback", ["cr:692209"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:692209")
}), 98);
__d("IdleCallbackImplementation", ["performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f, g) {
    var h = [],
        i = 0,
        j = 0,
        k = -1,
        l = !1,
        m = 1e3 / 60,
        n = 2;

    function o(a) {
        return a
    }

    function p(a) {
        return a
    }

    function b(b, c) {
        var d = j++;
        h[d] = b;
        r();
        if (c != null && c.timeout > 0) {
            var e = o(d);
            a.setTimeout(function() {
                return x(e)
            }, c.timeout)
        }
        return o(d)
    }

    function q(a) {
        a = p(a);
        h[a] = null
    }

    function r() {
        l || (l = !0, c("requestAnimationFramePolyfill")(function(a) {
            l = !1, t(c("performanceNow")() - a)
        }))
    }

    function s(a) {
        var b = m - n;
        if (a < b) return b - a;
        a = a % m;
        if (a > b || a < n) return 0;
        else return b - a
    }

    function t(a) {
        var b = c("performanceNow")();
        if (b > k) {
            a = s(a);
            if (a > 0) {
                b = b + a;
                w(b);
                k = b
            }
        }
        u() && r()
    }

    function u() {
        return i < h.length
    }

    function v() {
        while (u()) {
            var a = h[i];
            i++;
            if (a) return a
        }
        return null
    }

    function w(a) {
        var b;
        while (c("performanceNow")() < a && (b = v())) b(new y(a))
    }

    function x(a) {
        var b = p(a);
        b = h[b];
        b && (q(a), b(new y(null)))
    }
    var y = function() {
        function a(a) {
            this.didTimeout = a == null, this.$1 = a
        }
        var b = a.prototype;
        b.timeRemaining = function() {
            var a = this.$1;
            if (a != null) {
                var b = c("performanceNow")();
                if (b < a) return a - b
            }
            return 0
        };
        return a
    }();
    g.requestIdleCallback = b;
    g.cancelIdleCallback = q
}), 98);
__d("requestIdleCallbackAcrossTransitions", ["IdleCallbackImplementation", "TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h = a.requestIdleCallback || d("IdleCallbackImplementation").requestIdleCallback;

    function b(b, d) {
        b = c("TimeSlice").guard(b, "requestIdleCallback", {
            propagationType: c("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        return h.call(a, b, d)
    }
    g["default"] = b
}), 98);
__d("SetIdleTimeoutAcrossTransitions", ["NavigationMetrics", "cancelIdleCallback", "clearTimeout", "nullthrows", "requestIdleCallbackAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
        i = new Map();

    function b(a, b) {
        if (h) {
            var d = c("setTimeoutAcrossTransitions")(function() {
                var b = c("requestIdleCallbackAcrossTransitions")(function() {
                    a(), i["delete"](b)
                });
                i.set(d, b)
            }, b);
            return d
        } else return c("setTimeoutAcrossTransitions")(a, b)
    }

    function d(a) {
        c("clearTimeout")(a), i.has(a) && (c("cancelIdleCallback")(c("nullthrows")(i.get(a))), i["delete"](a))
    }
    c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.EVENT_OCCURRED, function(b, c) {
        c.event === "all_pagelets_loaded" && (h = !!a.requestIdleCallback)
    });
    g.start = b;
    g.clear = d
}), 98);
__d("BanzaiStorage", ["BanzaiConsts", "BanzaiUtils", "CurrentUser", "FBJSON", "SetIdleTimeoutAcrossTransitions", "WebSession", "WebStorage", "WebStorageMutex", "isInIframe", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = "bz:",
        k = b("isInIframe")(),
        l, m = !1,
        n = null;

    function o() {
        var a = "check_quota";
        try {
            var b = p();
            if (!b) return !1;
            b.setItem(a, a);
            b.removeItem(a);
            return !0
        } catch (a) {
            return !1
        }
    }

    function p() {
        m || (m = !0, l = (g || (g = b("WebStorage"))).getLocalStorage());
        return l
    }
    a = {
        flush: function(a) {
            if (k) return;
            var c = p();
            if (c) {
                n == null && (n = parseInt(c.getItem((h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH), 10));
                var d = n && (i || (i = b("performanceAbsoluteNow")))() - n >= (h || (h = b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
                d && a();
                (d || !n) && (n = (i || (i = b("performanceAbsoluteNow")))(), (g || (g = b("WebStorage"))).setItemGuarded(c, (h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH, n.toString()))
            }
        },
        restore: function(a) {
            if (k) return;
            var c = p();
            if (!c) return;
            var d = function(d) {
                var e = [];
                for (var f = 0; f < c.length; f++) {
                    var g = c.key(f);
                    typeof g === "string" && g.indexOf(j) === 0 && g.indexOf("bz:__") !== 0 && e.push(g)
                }
                e.forEach(function(d) {
                    var e = c.getItem(d);
                    c.removeItem(d);
                    if (e == null || e === "") return;
                    d = b("FBJSON").parse(e);
                    d.forEach(function(c) {
                        if (!c) return;
                        var d = c.__meta = c.pop(),
                            e = b("BanzaiUtils").canSend(c);
                        if (!e) return;
                        e = b("CurrentUser").getPossiblyNonFacebookUserID();
                        (d.userID === e || e === "0") && (b("BanzaiUtils").resetPostStatus(c), a(c))
                    })
                });
                d && d.unlock()
            };
            o() ? new(b("WebStorageMutex"))("banzai").lock(d) : b("SetIdleTimeoutAcrossTransitions").start(d, 0)
        },
        store: function(a) {
            if (k) return;
            var c = p(),
                d = a.filter(function(a) {
                    return a.__meta.status !== (h || (h = b("BanzaiConsts"))).POST_SENT
                });
            if (!c || d.length <= 0) return;
            d = d.map(function(a) {
                return [a[0], a[1], a[2], a[3] || 0, a[4], a.__meta]
            });
            a.splice(0, a.length);
            (g || (g = b("WebStorage"))).setItemGuarded(c, j + b("WebSession").getId() + "." + (i || (i = b("performanceAbsoluteNow")))(), b("FBJSON").stringify(d))
        }
    };
    e.exports = a
}), null);
__d("LowerDomainRegex", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = /(^|\.)(facebook|facebookcorewwwi|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd|workplace|bulletin|www.novi)\..*/;
    b = /\.(facebook\.sg|facebookcorewwwi\.(?:test)?onion|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd\.onion|workplace\.com|novi\.com|bulletin\.com)$/;
    f.domainRegex = a;
    f.hostnameRegex = b
}), 66);
__d("lowerFacebookDomain", ["LowerDomainRegex"], (function(a, b, c, d, e, f, g) {
    b = window.location.hostname.match(d("LowerDomainRegex").hostnameRegex);
    var h = b ? b[1] : "facebook.com";
    a.setDomain = function(a) {
        h = a
    };
    a.isValidDocumentDomain = function() {
        return document.domain == h
    };

    function a() {
        document.domain = h
    }
    c = a;
    g["default"] = c
}), 98);
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
__d("BanzaiAdapter", ["invariant", "Arbiter", "BanzaiConfig", "BanzaiConsts", "BanzaiStorage", "QueryString", "Run", "TimeSlice", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams", "isInIframe", "lowerFacebookDomain", "once"], (function(a, b, c, d, e, f, g, h) {
    var i = [],
        j = new(c("Arbiter"))(),
        k = c("isInIframe")(),
        l = "/ajax/bz",
        m = "POST",
        n = {
            config: c("BanzaiConfig"),
            useBeacon: !0,
            getEndPointUrl: function(a) {
                a = c("getAsyncParams")(m);
                a = c("QueryString").appendToUrl(l, a);
                a.length <= 2e3 || h(0, 21850, a);
                return a
            },
            getStorage: function() {
                return c("BanzaiStorage")
            },
            getTopLevel: function() {
                return k && c("lowerFacebookDomain").isValidDocumentDomain() ? window.top : null
            },
            inform: function(a) {
                j.inform(a)
            },
            subscribe: function(a, b) {
                return j.subscribe(a, b)
            },
            wrapInTimeSlice: function(a, b) {
                return c("TimeSlice").guard(function() {
                    a()
                }, b, {
                    propagationType: c("TimeSlice").PropagationType.ORPHAN
                })
            },
            cleanup: function() {
                var a = i;
                i = [];
                a.forEach(function(a) {
                    a.readyState < 4 && a.abort()
                })
            },
            preferredCompressionMethod: c("once")(function() {
                return "snappy_base64"
            }),
            readyToSend: function() {
                return c("UserAgent").isBrowser("IE <= 8") || navigator.onLine
            },
            send: function(a, b, e, f) {
                var g = n.getEndPointUrl(!1);
                g = d("ZeroRewrites").rewriteURI(new(c("URI"))(g));
                var h = d("ZeroRewrites").getTransportBuilderForURI(g)();
                h.open(m, g.toString(), !0);
                h.onreadystatechange = function() {
                    if (h.readyState >= 4) {
                        var a = i.indexOf(h);
                        a >= 0 && i.splice(a, 1);
                        try {
                            a = h.status
                        } catch (b) {
                            a = 0
                        }
                        a == 200 ? (b && b(), f || n.inform(c("BanzaiConsts").OK)) : (e && e(a), f || n.inform(c("BanzaiConsts").ERROR))
                    }
                };
                i.push(h);
                h.send(a, !1)
            },
            setHooks: function(a) {},
            setUnloadHook: function(a) {
                d("Run").onAfterUnload(a._unload)
            },
            onUnload: function(a) {
                d("Run").onAfterUnload(a)
            },
            isOkToSendViaBeacon: function() {
                return !0
            }
        };
    a = n;
    g["default"] = a
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
__d("Visibility", ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h, i;
    d("ExecutionEnvironment").canUseDOM && (document.hidden !== void 0 ? (h = "hidden", i = "visibilitychange") : document.mozHidden !== void 0 ? (h = "mozHidden", i = "mozvisibilitychange") : document.msHidden !== void 0 ? (h = "msHidden", i = "msvisibilitychange") : document.webkitHidden !== void 0 && (h = "webkitHidden", i = "webkitvisibilitychange"));
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = h, c.hiddenEvent = i, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.isHidden = function() {
            return h ? document[h] : !1
        };
        c.isSupported = function() {
            return d("ExecutionEnvironment").canUseDOM && document.addEventListener && i !== void 0
        };
        return b
    }(c("BaseEventEmitter"));
    var j = new a();
    j.isSupported() && document.addEventListener(j.hiddenEvent, c("TimeSlice").guard(function(a) {
        j.emit(j.isHidden() ? j.HIDDEN : j.VISIBLE, {
            changeTime: a.timeStamp
        })
    }, "visibility change"));
    b = j;
    g["default"] = b
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
__d("ErrorSetup", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSetup
}), 98);
__d("JavascriptWebErrorFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1828905");
    c = b("FalcoLoggerInternal").create("javascript_web_error", a);
    e.exports = c
}), null);
__d("ErrorTransport", ["JavascriptWebErrorFalcoEvent"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        c("JavascriptWebErrorFalcoEvent").log(function() {
            return a
        })
    }
    g.log = a
}), 98);
__d("SubscriptionList", ["recoverableViolation"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b) {
            this.$1 = [], this.$2 = a, this.$3 = b
        }
        var b = a.prototype;
        b.add = function(a) {
            var b = this,
                d = {
                    callback: a
                };
            this.$1.push(d);
            this.$2 && this.$1.length === 1 && this.$2();
            return {
                remove: function() {
                    var a = b.$1.indexOf(d);
                    if (a === -1) {
                        c("recoverableViolation")("SubscriptionList: Callback already removed.", "SubscriptionList");
                        return
                    }
                    b.$1.splice(a, 1);
                    b.$3 && b.$1.length === 0 && b.$3()
                }
            }
        };
        b.getCallbacks = function() {
            return this.$1.map(function(a) {
                return a.callback
            })
        };
        b.fireCallbacks = function(a) {
            this.getCallbacks().forEach(function(b) {
                b(a)
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ScriptPath", ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = "sp_pi",
        j = 1e3 * 30,
        k = null,
        l = null,
        m = new(b("SubscriptionList"))(),
        n = null,
        o = [],
        p = b("TimeSlice").guard(function(a, c) {
            m.getCallbacks().forEach(function(d) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
                    d({
                        source: k,
                        dest: l,
                        cause: a,
                        extraData: c
                    })
                }, null, [])
            })
        }, "ScriptPath Notifying callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        });

    function q() {
        return l ? l.scriptPath : void 0
    }

    function r() {
        var a = (h || (h = b("WebStorage"))).getSessionStorage();
        if (!a || b("isInIframe")()) return;
        h.setItemGuarded(a, i, JSON.stringify({
            pageInfo: l,
            clickPoint: n,
            time: Date.now()
        }))
    }

    function a() {
        var a = (h || (h = b("WebStorage"))).getSessionStorageForRead();
        if (!a) return;
        var c = a.getItem(i);
        if (c) {
            c = JSON.parse(c);
            c && (c.time < Date.now() - j && (a = (h || (h = b("WebStorage"))).getSessionStorage(), a && a.removeItem(i)), l = c.pageInfo, n = c.clickPoint, l && (l.restored = !0))
        }
    }
    a();
    c = {
        set: function(a, b, c) {
            k = l, l = {
                scriptPath: a,
                categoryToken: b,
                extraData: c || {}
            }, o = [], window._script_path = a, p()
        },
        openOverlayView: function(a, b, c) {
            if (!a) return;
            var d = o.length;
            (d === 0 || o[d - 1] !== a) && (k = Object.assign({}, l), l && (l.topViewEndpoint = a), c && c.replaceTopOverlay && d > 0 ? (o[d - 1] = a, p("replace_overlay_view", b)) : (o.push(a), p("open_overlay_view", b)))
        },
        closeOverlayView: function(a, b) {
            a = o.lastIndexOf(a);
            if (a === -1) return;
            k = Object.assign({}, l);
            l && (a > 0 ? l.topViewEndpoint = o[a - 1] : l.topViewEndpoint = null);
            o = o.slice(0, a);
            p("close_overlay_view", b)
        },
        setClickPointInfo: function(a) {
            n = a, r()
        },
        getClickPointInfo: function() {
            return n
        },
        getScriptPath: q,
        getCategoryToken: function() {
            return l ? l.categoryToken : void 0
        },
        getEarlyFlushPage: function() {
            var a;
            return (a = l) == null ? void 0 : (a = a.extraData) == null ? void 0 : a.ef_page
        },
        getTopViewEndpoint: function() {
            var a = o.length;
            return a > 0 ? o[a - 1] : q()
        },
        getPageInfo: function() {
            return l
        },
        getSourcePageInfo: function() {
            return k
        },
        subscribe: function(a) {
            return m.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"))
        },
        shutdown: function() {
            r()
        }
    };
    e.exports = c
}), null);
__d("ErrorLogging", ["ClientConsistency", "Env", "ErrorGuard", "ErrorSetup", "ErrorTransport", "JSErrorLoggingConfig", "ScriptPath", "SiteData", "WebSession", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c("ErrorGuard").skipGuardGlobal(c("Env").nocatch), d("JSErrorLoggingConfig").sampleWeight != null && c("setTimeout")(function() {
        c("ErrorSetup").setup({
            additional_client_revisions: c("ClientConsistency").getAdditionalRevisions(),
            appId: d("JSErrorLoggingConfig").appId,
            client_revision: c("SiteData").client_revision,
            extra: d("JSErrorLoggingConfig").extra,
            loggingFramework: c("SiteData").haste_site === "mobile" ? "mobile" : "blue",
            server_revision: c("SiteData").server_revision,
            spin: c("SiteData").spin,
            push_phase: c("SiteData").push_phase,
            report_source: d("JSErrorLoggingConfig").report_source,
            report_source_ref: d("JSErrorLoggingConfig").report_source_ref,
            sample_weight: d("JSErrorLoggingConfig").sampleWeight,
            script_path: c("ScriptPath").getScriptPath(),
            web_session_id: d("WebSession").getId()
        }, d("ErrorTransport").log)
    }, 0), c("ErrorSetup").preSetup()
}), 34);
__d("ErrorGuardState", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorGuardState
}), 98);
__d("ErrorNormalizeUtils", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorNormalizeUtils
}), 98);
__d("ErrorSerializer", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSerializer
}), 98);
__d("ErrorUtils", ["ErrorGuard", "ErrorGuardState", "ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer", "getErrorSafe"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    h || b("ErrorGuardState");
    b("ErrorNormalizeUtils");
    i || (i = b("ErrorPubSub"));
    b("getErrorSafe");
    j || (j = b("ErrorGuard"));
    b("ErrorSerializer");
    a.getErrorSafe = c("getErrorSafe");
    a.ErrorGuard = c("ErrorGuard");
    a.ErrorSerializer = c("ErrorSerializer");
    d = {
        history: c("ErrorPubSub").history,
        applyWithGuard: function(a, b, d, e, f, g) {
            return c("ErrorGuard").applyWithGuard(a, b, (a = d) != null ? a : [], {
                name: f,
                onNormalizedError: e,
                deferredSource: g == null ? void 0 : g.deferredSource
            })
        },
        guard: function(a, b, d) {
            a = c("ErrorGuard").guard(a, b != null ? {
                name: b
            } : null);
            d != null && (a = a.bind(d));
            return a
        },
        normalizeError: function(a) {
            var b;
            return (b = c("ErrorNormalizeUtils").ifNormalizedError(a)) != null ? b : c("ErrorNormalizeUtils").normalizeError(c("getErrorSafe")(a))
        }
    };
    a.ErrorUtils = d;
    e = d;
    typeof __t === "function" && __t.setHandler && __t.setHandler(c("ErrorPubSub").reportError);
    g["default"] = e
}), 99);
__d("EventProfilerAdsSessionProvider", ["AdsInterfacesSessionConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.sessionID = c("AdsInterfacesSessionConfig").sessionID
}), 98);
__d("EventProfilerSampler", ["EventConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("EventConfig").sampling || {},
        h = {
            canSample: function(a) {
                return !!g[a]
            },
            getEventSampleWeights: function(a) {
                a.__samplingWeights == void 0 && (a.__samplingWeights = {
                    event: i(h.getEventWeight(a))
                });
                return a.__samplingWeights
            },
            getEventWeight: function(a) {
                a = a.type in g ? g[a.type] : 1;
                return a * g.__eventDefault
            },
            getEventInteractionIDs: function(a, b) {
                return []
            }
        };

    function i(a) {
        if (a === 0) return 0;
        var b = g.__min || 1;
        a = Math.round(Math.max(b, a));
        return Math.random() * a < 1 ? a : 0
    }
    e.exports = h
}), null);
__d("getParentClassesForEventProfiler", ["cx"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function i(a) {
        if (!a || !(a instanceof HTMLElement)) return "";
        var b = a.id,
            c = a.nodeName,
            d = a.getAttribute("class");
        c = c ? c.replace(/^#/, "") : "unknown";
        b = b ? "#" + b : "";
        d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
        if (a.getAttribute("rel") === "theater") {
            a = "_342u";
            d = d.length ? d + " " + a : a
        }
        return ":" + c + b + d
    }

    function a(a) {
        var b = [];
        while (a && a instanceof HTMLElement) b.push(i(a)), a = a.parentElement;
        b.reverse();
        return b
    }
    g["default"] = a
}), 98);
__d("EventProfilerImpl", ["Bootloader", "EventConfig", "EventProfilerAdsSessionProvider", "EventProfilerSampler", "ScriptPath", "TimeSlice", "UserAgent", "getParentClassesForEventProfiler", "performanceAbsoluteNow", "requestAnimationFrameAcrossTransitions", "setTimeoutAcrossTransitions", "uniqueID"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = {},
        j = {},
        k = !1,
        l = 0,
        m = new Set(["click", "keydown", "mousewheel", "scroll"]),
        n = null,
        o = null;
    c = {
        __wrapEventListenHandler: function(a) {
            return b("EventConfig").disable_event_profiler ? a : function(c, d) {
                var e = this;
                if (!b("EventProfilerSampler").canSample(c)) return a.call(this, c, d);
                var f = {
                        event: 0
                    },
                    s = (g || (g = b("performanceAbsoluteNow")))();
                d.id = d.id || b("uniqueID")();
                var t = d.id,
                    u, v = j[t],
                    w = null;
                i[t] === void 0 && !v ? (w = b("getParentClassesForEventProfiler")(d.target), f = r(d), o != null && o.beforeHandlers(t, c), u = a.call(this, c, d), j[t] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation")) : (f = r(d), u = v(function() {
                    j[t] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation");
                    return a.call(e, c, d)
                }));
                v = g();
                if (i[t] === void 0) {
                    w = w;
                    var x = q(d);
                    x = x || s;
                    var y = Math.max(s - x, 0),
                        z = null;
                    b("UserAgent").isBrowser("Chrome") && (z = !!d.cancelable);
                    var A = z && (!!d.deliberateSync || b("UserAgent").isBrowser("Chrome < 51"));
                    i[t] = {
                        event_name: c,
                        event_start_ms: Math.round(x),
                        main_thread_wait_ms: Math.round(y),
                        event_handlers_runtime_ms: 0,
                        script_path: b("ScriptPath").getScriptPath() || "<unknown>",
                        request_animation_frame_wait_ms: 0,
                        set_timeout_wait_ms: 0
                    };
                    h[t] = {
                        event_target_raw: w,
                        weight: f.event,
                        cancelable: !!z,
                        deliberate_sync: !!A,
                        ad_account_id: n,
                        event_end_ms: 0
                    };
                    y = b("EventProfilerAdsSessionProvider").sessionID;
                    y && (h[t].ads_session_id = y);
                    var B = !1;
                    m.has(c) && (!k && l < x && (k = !0, B = !0), h[t].is_first_in_frame = B, h[t].is_first_overlapping = B);
                    b("requestAnimationFrameAcrossTransitions")(function() {
                        var a = (g || (g = b("performanceAbsoluteNow")))();
                        i[t].request_animation_frame_wait_ms = Math.round(a - h[t].event_end_ms);
                        delete h[t].event_end_ms;
                        var d = !1;

                        function e() {
                            if (d) return;
                            d = !0;
                            var e = (g || (g = b("performanceAbsoluteNow")))();
                            i[t].set_timeout_wait_ms = Math.round(e - a);
                            p(t, s, e);
                            m.has(c) && B && (k = !1, l = e);
                            e = j[t];
                            e && delete j[t];
                            delete i[t];
                            delete h[t]
                        }
                        b("requestAnimationFrameAcrossTransitions")(e);
                        b("setTimeoutAcrossTransitions")(e, 0)
                    })
                }
                i[t].event_handlers_runtime_ms += v - s;
                h[t].event_end_ms = v;
                o != null && o.afterEachHandler(t, i[t]);
                return u
            }
        },
        setCurrentAdAccountId: function(a) {
            n = a
        },
        setAdsConfig: function(a) {
            o = a
        }
    };

    function p(a, c, d) {
        c = i[a];
        c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
        var e = babelHelpers["extends"]({}, i[a], h[a]);
        o != null && o.beforeLog(a, e);
        e.weight && b("Bootloader").loadModules(["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"], function(a, b) {
            b.addCommonValues(e), new a().updateData(e).log()
        }, "EventProfilerImpl")
    }
    var q = function() {
        function b(a) {
            return null
        }
        if (!a.performance || !a.performance.now || !a.performance.timing || !a.performance.timing.navigationStart) return b;
        var c = a.performance.timing.navigationStart,
            d = a.CustomEvent && (typeof a.CustomEvent === "function" || a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
        d = d ? new a.CustomEvent("test").timeStamp : a.document.createEvent("KeyboardEvent").timeStamp;
        return d && d <= a.performance.now() ? function(a) {
            return a.timeStamp + c
        } : b
    }();

    function r(a) {
        return o != null ? o.getEventSampleWeights(a) : b("EventProfilerSampler").getEventSampleWeights(a)
    }
    e.exports = c
}), null);
__d("Base64", [], (function(a, b, c, d, e, f) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function h(a) {
        a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
        return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63))
    }
    var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

    function j(a) {
        a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
        return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255)
    }
    var k = {
        encode: function(a) {
            a = unescape(encodeURI(a));
            var b = (a.length + 2) % 3;
            a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
            return a.slice(0, a.length + b - 2) + "==".slice(b)
        },
        decode: function(a) {
            a = a.replace(/[^A-Za-z0-9+\/]/g, "");
            var b = a.length + 3 & 3;
            a = (a + "AAA".slice(b)).replace(/..../g, j);
            a = a.slice(0, a.length + b - 3);
            try {
                return decodeURIComponent(escape(a))
            } catch (a) {
                throw new Error("Not valid UTF-8")
            }
        },
        encodeObject: function(a) {
            return k.encode(JSON.stringify(a))
        },
        decodeObject: function(a) {
            return JSON.parse(k.decode(a))
        },
        encodeNums: function(a) {
            return String.fromCharCode.apply(String, a.map(function(a) {
                return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63)
            }))
        }
    };
    a = k;
    f["default"] = a
}), 66);
__d("OdsWebBatchFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1838142");
    c = b("FalcoLoggerInternal").create("ods_web_batch", a);
    e.exports = c
}), null);
__d("ODS", ["ExecutionEnvironment", "OdsWebBatchFalcoEvent", "Random", "Run", "clearTimeout", "gkx", "setTimeout", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    var h, i = c("ExecutionEnvironment").canUseDOM || c("ExecutionEnvironment").isInWorker,
        j = {};

    function k(a, b, c, d, e) {
        var f;
        d === void 0 && (d = 1);
        e === void 0 && (e = 1);
        var g = (f = j[b]) != null ? f : null;
        if (g != null && g <= 0) return;
        h = h || {};
        var i = h[a] || (h[a] = {}),
            k = i[b] || (i[b] = {}),
            l = k[c] || (k[c] = [0, null]),
            n = Number(d),
            o = Number(e);
        g > 0 && (n /= g, o /= g);
        if (!isFinite(n) || !isFinite(o)) return;
        l[0] += n;
        if (arguments.length >= 5) {
            var p = l[1];
            p == null && (p = 0);
            l[1] = p + o
        }
        m()
    }
    var l;

    function m() {
        if (l != null) return;
        l = c("setTimeout")(function() {
            n()
        }, c("gkx")("708253") ? 13e3 / 2 : 5e3)
    }

    function a(a, b) {
        if (!i) return;
        j[a] = d("Random").random() < b ? b : 0
    }

    function b(a, b, c, d) {
        d === void 0 && (d = 1);
        if (!i) return;
        k(a, b, c, d)
    }

    function e(a, b, c, d, e) {
        d === void 0 && (d = 1);
        e === void 0 && (e = 1);
        if (!i) return;
        k(a, b, c, d, e)
    }

    function n(a) {
        a === void 0 && (a = "normal");
        if (!i) return;
        c("clearTimeout")(l);
        l = null;
        if (h == null) return;
        var b = h;
        h = null;

        function d() {
            return {
                batch: b
            }
        }
        a === "critical" ? c("OdsWebBatchFalcoEvent").logCritical(d) : c("OdsWebBatchFalcoEvent").log(d)
    }
    i && d("Run").onUnload(function() {
        n("critical")
    });
    g.setEntitySample = a;
    g.bumpEntityKey = b;
    g.bumpFraction = e;
    g.flush = n
}), 98);
__d("CometLruCache", ["recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        function a(a) {
            this.$1 = a, a <= 0 && c("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.", "CometLruCache"), this.$2 = new Map()
        }
        var b = a.prototype;
        b.set = function(a, b) {
            this.$2["delete"](a);
            this.$2.set(a, b);
            if (this.$2.size > this.$1) {
                a = this.$2.keys().next();
                a.done || this.$2["delete"](a.value)
            }
        };
        b.get = function(a) {
            var b = this.$2.get(a);
            b != null && (this.$2["delete"](a), this.$2.set(a, b));
            return b
        };
        b.has = function(a) {
            return this.$2.has(a)
        };
        b["delete"] = function(a) {
            this.$2["delete"](a)
        };
        b.size = function() {
            return this.$2.size
        };
        b.capacity = function() {
            return this.$1 - this.$2.size
        };
        b.clear = function() {
            this.$2.clear()
        };
        return a
    }();

    function a(a) {
        return new h(a)
    }
    g.create = a
}), 98);
__d("ConstUriUtils", ["CometLruCache", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "URIRFC3986", "URISchemes", "UriNeedRawQuerySVConfig", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("CometLruCache").create(5e3),
        i = new RegExp("(^|\\.)facebook\\.com$", "i"),
        j = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
        k = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        l = c("UriNeedRawQuerySVConfig").uris.map(function(a) {
            return {
                domain: a,
                valid: r(a)
            }
        }),
        m = [];

    function n(a, b) {
        var d = {};
        if (a != null)
            for (var a = a.entries(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                d[g[0]] = g[1]
            } else c("FBLogger")("ConstUriUtils").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");
        return b.serialize(d)
    }

    function o(a, b, c) {
        var e = d("PHPQuerySerializer");
        if (["http", "https"].includes(b) && p(a)) {
            if (a.includes("doubleclick.net") && c != null && !c.startsWith("http")) return e;
            e = d("PHPQuerySerializerNoEncoding")
        }
        return e
    }

    function p(a) {
        return a != null && l.some(function(b) {
            return b.valid && q(a, b.domain)
        })
    }

    function q(a, b) {
        if (b === "" || a === "") return !1;
        if (a.endsWith(b)) {
            b = a.length - b.length - 1;
            if (b === -1 || a[b] === ".") return !0
        }
        return !1
    }

    function r(a) {
        return !k.test(a)
    }

    function s(a, b) {
        var c = b.protocol != null && b.protocol !== "" ? b.protocol : a.getProtocol();
        c = b.domain != null ? o(b.domain, c) : a.getSerializer();
        c = {
            domain: a.getDomain(),
            fragment: a.getFragment(),
            fragmentSeparator: a.hasFragmentSeparator(),
            isGeneric: a.isGeneric(),
            originalRawQuery: a.getOriginalRawQuery(),
            path: a.getPath(),
            port: a.getPort(),
            protocol: a.getProtocol(),
            queryParams: a.getQueryParams(),
            serializer: c,
            subdomain: a.getSubdomain()
        };
        a = babelHelpers["extends"]({}, c, b);
        c = b.queryParams != null && b.queryParams.size !== 0;
        return x.getUribyObject(a, c)
    }

    function t(a, b, c, d) {
        c === void 0 && (c = !1);
        var e = a.protocol !== "" ? a.protocol + ":" + (a.isGeneric ? "" : "//") : "",
            f = a.domain !== "" ? a.domain : "",
            g = a.port !== "" ? ":" + a.port : "",
            h = a.path !== "" ? a.path : e !== "" || f !== "" || g !== "" ? "/" : "";
        c = u(f, a.originalRawQuery, a.queryParams, b, c, (b = d) != null ? b : a.serializer);
        d = c.length > 0 ? "?" : "";
        b = a.fragment !== "" ? "#" + a.fragment : "";
        a = a.fragment === "" && a.fragmentSeparator ? "#" : "";
        return "" + e + f + g + h + d + c + a + b
    }

    function u(a, b, c, d, e, f) {
        e === void 0 && (e = !1);
        if (!d && (e || p(a))) {
            return (d = b) != null ? d : ""
        }
        return n(c, f)
    }

    function v(a) {
        var b = a.trim();
        b = d("URIRFC3986").parse(b) || {
            fragment: null,
            host: null,
            isGenericURI: !1,
            query: null,
            scheme: null,
            userinfo: null
        };
        var c = b.host || "",
            e = c.split(".");
        e = e.length >= 3 ? e[0] : "";
        var f = o(c, b.scheme || "", b.query),
            g = f.deserialize(b.query || "") || {};
        g = new Map(Object.entries(g));
        g = w({
            domain: c,
            fragment: b.fragment || "",
            fragmentSeparator: b.fragment === "",
            isGeneric: b.isGenericURI,
            originalRawQuery: b.query,
            path: b.path || "",
            port: b.port != null ? String(b.port) : "",
            protocol: (b.scheme || "").toLowerCase(),
            queryParams: g,
            serializer: f,
            subdomain: e,
            userInfo: (c = b == null ? void 0 : b.userinfo) != null ? c : ""
        }, a);
        return g
    }

    function w(a, b) {
        var c = {
                components: babelHelpers["extends"]({}, a),
                error: "",
                valid: !0
            },
            e = c.components;
        if (!d("URISchemes").isAllowed(a.protocol)) {
            c.valid = !1;
            c.error = 'The URI protocol "' + String(a.protocol) + '" is not allowed.';
            return c
        }
        if (!r(a.domain || "")) {
            c.valid = !1;
            c.error = "This is an unsafe domain " + String(a.domain);
            return c
        }
        e.port = a.port != null && String(a.port) || "";
        if (Boolean(a.userInfo)) {
            c.valid = !1;
            c.error = "Invalid URI: (userinfo is not allowed in a URI " + String(a.userInfo) + ")";
            return c
        }
        a = b != null && b !== "" ? b : t(e, !1);
        if (e.domain === "" && e.path.indexOf("\\") !== -1) {
            c.valid = !1;
            c.error = "Invalid URI: (no domain but multiple back-slashes " + a + ")";
            return c
        }
        if (!e.protocol && j.test(a)) {
            c.valid = !1;
            c.error = "Invalid URI: (unsafe protocol-relative URI " + a + ")";
            return c
        }
        if (e.domain !== "" && e.path !== "" && !e.path.startsWith("/")) {
            c.valid = !1;
            c.error = "Invalid URI: (domain and pathwhere path lacks leading slash " + a + ")";
            return c
        }
        return c
    }
    var x = function() {
        function a(a) {
            this.queryParams = new Map(), this.domain = a.domain, this.fragment = a.fragment, this.fragmentSeparator = Boolean(a.fragmentSeparator), this.isGenericProtocol = Boolean(a.isGeneric), this.path = a.path, this.originalRawQuery = a.originalRawQuery, this.port = a.port, this.protocol = a.protocol, this.queryParams = a.queryParams, this.serializer = a.serializer, this.subdomain = a.subdomain
        }
        var b = a.prototype;
        b.addQueryParam = function(a, b) {
            if (Boolean(a)) {
                var c = this.getQueryParams();
                c.set(a, b);
                return s(this, {
                    queryParams: c
                })
            }
            return this
        };
        b.addQueryParams = function(a) {
            if (a.size > 0) {
                var b = this.getQueryParams();
                a.forEach(function(a, c) {
                    b.set(c, a)
                });
                return s(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.addQueryParamString = function(a) {
            if (Boolean(a)) {
                a = a.startsWith("?") ? a.slice(1) : a;
                var b = this.getQueryParams();
                a.split("&").map(function(a) {
                    a = a.split("=");
                    var c = a[0];
                    a = a[1];
                    b.set(c, a)
                });
                return s(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.addTrailingSlash = function() {
            var a = this.getPath();
            return a.length > 0 && a[a.length - 1] !== "/" ? this.setPath(a + "/") : this
        };
        b.getDomain = function() {
            return this.domain
        };
        b.getFragment = function() {
            return this.fragment
        };
        b.getOrigin = function() {
            var a = this.getPort();
            return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        };
        b.getOriginalRawQuery = function() {
            return this.originalRawQuery
        };
        b.getPath = function() {
            return this.path
        };
        b.getPort = function() {
            return this.port
        };
        b.getProtocol = function() {
            return this.protocol.toLowerCase()
        };
        b.getQualifiedUri = function() {
            if (!this.getDomain()) {
                var b = String(window.location.href);
                b = b.slice(0, b.indexOf("/", b.indexOf(":") + 3));
                return a.getUri(b + this.toString())
            }
            return this
        };
        b.getQueryParam = function(a) {
            a = this.queryParams.get(a);
            if (typeof a === "string") return a;
            else {
                a = JSON.stringify(a);
                return a == null ? a : JSON.parse(a)
            }
        };
        b.getQueryData = function() {
            return Object.fromEntries(this.getQueryParams())
        };
        b.getQueryParams = function() {
            return new Map(JSON.parse(JSON.stringify(Array.from(this.queryParams))))
        };
        b.getQueryString = function(a) {
            a === void 0 && (a = !1);
            return u(this.domain, this.originalRawQuery, this.queryParams, !1, a, this.serializer)
        };
        b.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!this.isFacebookUri()) return null;
            var a = this.getDomain().split("."),
                b = a.indexOf("facebook");
            b === -1 && (b = a.indexOf("workplace"));
            return a.slice(b).join(".")
        };
        b.getSerializer = function() {
            return this.serializer
        };
        b.getSubdomain = function() {
            return this.subdomain
        };
        b.getUnqualifiedUri = function() {
            if (this.getDomain()) {
                var b = this.toString();
                return a.getUri(b.slice(b.indexOf("/", b.indexOf(":") + 3)))
            }
            return this
        };
        a.getUri = function(b) {
            b = b.trim();
            var d = h.get(b);
            if (d == null) {
                var e = v(b);
                if (e.valid) d = new a(e.components), h.set(b, d);
                else {
                    c("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(e.error);
                    return null
                }
            }
            return d
        };
        a.getUribyObject = function(b, d) {
            var e = t(b, d),
                f = h.get(e);
            if (f == null) {
                d && (b.originalRawQuery = n(b.queryParams, b.serializer));
                d = w(b);
                if (d.valid) f = new a(d.components), h.set(e, f);
                else {
                    c("recoverableViolation")(d.error, "ConstUri");
                    return null
                }
            }
            return f
        };
        b.hasFragmentSeparator = function() {
            return this.fragmentSeparator
        };
        b.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || this.queryParams.size > 0 || this.getFragment())
        };
        b.isFacebookUri = function() {
            var a = this.toString();
            if (a === "") return !1;
            return !this.getDomain() && !this.getProtocol() ? !0 : ["https", "http"].indexOf(this.getProtocol()) !== -1 && i.test(this.getDomain())
        };
        b.isGeneric = function() {
            return this.isGenericProtocol
        };
        b.isSameOrigin = function(a) {
            if (this.getProtocol() && this.getProtocol() !== a.getProtocol()) return !1;
            if (this.getDomain() && this.getDomain() !== a.getDomain()) return !1;
            if (this.getPort() && this.getPort() !== a.getPort()) return !1;
            return this.toString() === "" || a.toString() === "" ? !1 : !0
        };
        b.isSubdomainOfDomain = function(b) {
            var c = a.getUri(b);
            return c != null && q(this.domain, b)
        };
        b.isSecure = function() {
            return this.getProtocol() === "https"
        };
        b.removeQueryParams = function(a) {
            if (Array.isArray(a) && a.length > 0) {
                var b = this.getQueryParams();
                a.map(function(a) {
                    return b["delete"](a)
                });
                return s(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.removeQueryParam = function(a) {
            if (Boolean(a)) {
                var b = this.getQueryParams();
                b["delete"](a);
                return s(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.replaceQueryParam = function(a, b) {
            if (Boolean(a)) {
                var c = this.getQueryParams();
                c.set(a, b);
                return s(this, {
                    queryParams: c
                })
            }
            return this
        };
        b.replaceQueryParams = function(a) {
            return s(this, {
                queryParams: a
            })
        };
        b.replaceQueryParamString = function(a) {
            if (a != null) {
                a = a.startsWith("?") ? a.slice(1) : a;
                var b = this.getQueryParams();
                a.split("&").map(function(a) {
                    a = a.split("=");
                    var c = a[0];
                    a = a[1];
                    b.set(c, a)
                });
                return s(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.setDomain = function(a) {
            if (Boolean(a)) {
                var b = a.split(".");
                b = b.length >= 3 ? b[0] : "";
                return s(this, {
                    domain: a,
                    subdomain: b
                })
            }
            return this
        };
        b.setFragment = function(a) {
            return a === "#" ? s(this, {
                fragment: "",
                fragmentSeparator: !0
            }) : s(this, {
                fragment: a,
                fragmentSeparator: a !== ""
            })
        };
        b.setPath = function(a) {
            return a != null ? s(this, {
                path: a
            }) : this
        };
        b.setPort = function(a) {
            return Boolean(a) ? s(this, {
                port: a
            }) : this
        };
        b.setProtocol = function(a) {
            return Boolean(a) ? s(this, {
                protocol: a
            }) : this
        };
        b.setSecure = function(a) {
            return this.setProtocol(a ? "https" : "http")
        };
        b.setSubDomain = function(a) {
            if (Boolean(a)) {
                var b = this.domain.split(".");
                b.length >= 3 ? b[0] = a : b.unshift(a);
                return s(this, {
                    domain: b.join("."),
                    subdomain: a
                })
            }
            return this
        };
        b.stripTrailingSlash = function() {
            return this.setPath(this.getPath().replace(/\/$/, ""))
        };
        a.$1 = function(a) {
            a = a;
            for (var b = 0; b < m.length; b++) {
                var c = m[b];
                a = c(a)
            }
            return a
        };
        b.$2 = function(b, c) {
            c === void 0 && (c = !1);
            return t({
                domain: a.$1(this.domain),
                fragment: this.fragment,
                fragmentSeparator: this.fragmentSeparator,
                isGeneric: this.isGenericProtocol,
                originalRawQuery: this.originalRawQuery,
                path: this.path,
                port: this.port,
                protocol: this.protocol,
                queryParams: this.queryParams,
                serializer: b,
                subdomain: this.subdomain,
                userInfo: ""
            }, !1, c)
        };
        b.toStringRawQuery = function() {
            this.rawStringValue == null && (this.rawStringValue = this.$2(d("PHPQuerySerializerNoEncoding")));
            return this.rawStringValue
        };
        b.toString = function() {
            this.stringValue == null && (this.stringValue = this.$2(this.serializer));
            return this.stringValue
        };
        b.toStringPreserveQuery = function() {
            return this.$2(this.serializer, !0)
        };
        a.isValidUri = function(b) {
            var c = h.get(b);
            if (c != null) return !0;
            c = v(b);
            if (c.valid) {
                h.set(b, new a(c.components));
                return !0
            }
            return !1
        };
        return a
    }();

    function a(a) {
        if (a instanceof x) return a;
        else return null
    }

    function b(a) {
        m.push(a)
    }
    e = x.getUri;
    f = x.isValidUri;
    g.isSubdomainOfDomain = q;
    g.isConstUri = a;
    g.registerDomainFilter = b;
    g.getUri = e;
    g.isValidUri = f
}), 98);
__d("routeBuilderUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a.split("/");
        return a.filter(function(a) {
            return a !== ""
        }).map(function(a) {
            var b = a.split(/{|}/);
            if (b.length < 3) return {
                isToken: !1,
                part: a
            };
            else {
                a = b[0];
                var c = b[1];
                b = b[2];
                var d = c[0] === "?",
                    e = c[d ? 1 : 0] === "*";
                c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
                return {
                    isToken: !0,
                    optional: d,
                    prefix: a,
                    suffix: b,
                    token: c
                }
            }
        })
    }
    f.getPathParts = a
}), 66);
__d("jsRouteBuilder", ["ConstUriUtils", "FBLogger", "routeBuilderUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "#";

    function a(a, b, e, f, g) {
        g === void 0 && (g = !1);
        var i = d("routeBuilderUtils").getPathParts(a);

        function j(j) {
            try {
                var k = f != null ? babelHelpers["extends"]({}, f, j) : j,
                    l = {};
                j = "";
                var m = !1;
                j = i.reduce(function(a, c) {
                    if (!c.isToken) return a + "/" + c.part;
                    else {
                        var d, e = c.optional,
                            f = c.prefix,
                            g = c.suffix;
                        c = c.token;
                        if (e && m) return a;
                        d = (d = k[c]) != null ? d : b[c];
                        if (d == null && e) {
                            m = !0;
                            return a
                        }
                        if (d == null) throw new Error("Missing required template parameter: " + c);
                        if (d === "") throw new Error("Required template parameter is an empty string: " + c);
                        l[c] = !0;
                        return a + "/" + f + d + g
                    }
                }, "");
                a.slice(-1) === "/" && (j += "/");
                j === "" && (j = "/");
                var n = d("ConstUriUtils").getUri(j);
                for (var o in k) {
                    var p = k[o];
                    !l[o] && p != null && n != null && (e != null && e.has(o) ? p !== !1 && (n = n.addQueryParam(o, null)) : n = n.addQueryParam(o, p))
                }
                return [n, j]
            } catch (b) {
                p = b == null ? void 0 : b.message;
                n = c("FBLogger")("JSRouteBuilder").blameToPreviousFrame();
                g && (n = n.blameToPreviousFrame());
                n.mustfix("Failed building URI for base path: %s message: %s", a, p);
                return [null, h]
            }
        }
        return {
            buildUri: function(a) {
                a = (a = j(a)[0]) != null ? a : d("ConstUriUtils").getUri(h);
                if (a == null) throw new Error("Not even the fallback URL parsed validly!");
                return a
            },
            buildUriNullable: function(a) {
                return j(a)[0]
            },
            buildURLStringDEPRECATED: function(a) {
                a = j(a);
                var b = a[0];
                a = a[1];
                return (b = b == null ? void 0 : b.toString()) != null ? b : a
            },
            buildURL: function(a) {
                a = j(a);
                var b = a[0];
                a = a[1];
                return (b = b == null ? void 0 : b.toString()) != null ? b : a
            }
        }
    }
    g["default"] = a
}), 98);
__d("XLynxAsyncCallbackControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/si/linkclick/ajax_callback/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("FBLynxLogging", ["AsyncRequest", "ODS", "XLynxAsyncCallbackControllerRouteBuilder"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});
        new(c("AsyncRequest"))(b).setData({
            lynx_uri: a
        }).setErrorHandler(function(a) {
            a = a.getError();
            d("ODS").bumpEntityKey(3861, "linkshim", "click_log.post.fail." + a)
        }).setTransportErrorHandler(function(a) {
            a = a.getError();
            d("ODS").bumpEntityKey(3861, "linkshim", "click_log.post.transport_fail." + a)
        }).send()
    }
    g.log = a
}), 98);
__d("isLinkshimURI", ["isBulletinDotComURI", "isFacebookURI", "isMessengerDotComURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.getPath();
        return (b === "/l.php" || b.indexOf("/si/ajax/l/") === 0 || b.indexOf("/l/") === 0 || b.indexOf("l/") === 0) && (c("isFacebookURI")(a) || c("isMessengerDotComURI")(a) || c("isBulletinDotComURI")(a)) ? !0 : !1
    }
    g["default"] = a
}), 98);
__d("FBLynxBase", ["$", "FBLynxLogging", "LinkshimHandlerConfig", "URI", "isLinkshimURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function h(a) {
        if (!b("isLinkshimURI")(a)) return null;
        a = a.getQueryData().u;
        return !a ? null : a
    }
    var i = {
        logAsyncClick: function(a) {
            i.swapLinkWithUnshimmedLink(a);
            a = a.getAttribute("data-lynx-uri");
            if (!a) return;
            b("FBLynxLogging").log(a)
        },
        originReferrerPolicyClick: function(a) {
            var c = b("$")("meta_referrer");
            c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
            i.logAsyncClick(a);
            setTimeout(function() {
                c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy
            }, 100)
        },
        swapLinkWithUnshimmedLink: function(a) {
            var c = a.href,
                d = h(new(g || (g = b("URI")))(c));
            if (!d) return;
            a.setAttribute("data-lynx-uri", c);
            a.href = d
        },
        revertSwapIfLynxURIPresent: function(a) {
            var b = a.getAttribute("data-lynx-uri");
            if (!b) return;
            a.removeAttribute("data-lynx-uri");
            a.href = b
        }
    };
    e.exports = i
}), null);
__d("FBLynx", ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = (g || (g = b("URI"))).goURIOnWindow,
        i = {
            alreadySetup: !1,
            setupDelegation: function(a) {
                a === void 0 && (a = !1);
                if (!document.documentElement) return;
                if (document.body == null) {
                    if (a) return;
                    window.setTimeout(function() {
                        i.setupDelegation(!0)
                    }, 100);
                    return
                }
                if (i.alreadySetup) return;
                i.alreadySetup = !0;
                var c = function(a) {
                    var c = i.getMaybeLynxLink(a.target);
                    if (!c) return;
                    var d = c[0];
                    c = c[1];
                    var e = c,
                        f = new(g || (g = b("URI")))(c.href),
                        j;
                    if (b("LinkshimHandlerConfig").ghl_param_link_shim && d !== "hover" && (c.dataset && c.dataset.attributes)) {
                        j = b("Base64").decodeObject(c.dataset.attributes);
                        if (j && j.open_link) {
                            var k;
                            for (k in j) k !== "open_link" && f.addQueryData(k, j[k]);
                            k = c.cloneNode(!0);
                            k.href = f.toString();
                            e = k
                        }
                    }
                    switch (d) {
                        case "async":
                        case "asynclazy":
                            b("FBLynxBase").logAsyncClick(e);
                            break;
                        case "origin":
                            b("FBLynxBase").originReferrerPolicyClick(e);
                            break;
                        case "hover":
                            i.hoverClick(e);
                            break
                    }
                    b("LinkshimHandlerConfig").ghl_param_link_shim && d !== "hover" && j && j.open_link && (a.preventDefault(), h(f, window.open("", e.target), !0))
                };
                b("Event").listen(document.body, "click", c);
                b("LinkshimHandlerConfig").middle_click_requires_event && b("Event").listen(document.body, "mouseup", function(a) {
                    a.button == 1 && c(a)
                });
                b("Event").listen(document.body, "mouseover", function(a) {
                    a = i.getMaybeLynxLink(a.target);
                    if (!a) return;
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "async":
                        case "asynclazy":
                        case "origin":
                        case "hover":
                            i.mouseover(a);
                            break
                    }
                });
                b("Event").listen(document.body, "contextmenu", function(a) {
                    a = i.getMaybeLynxLink(a.target);
                    if (!a) return;
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "async":
                        case "hover":
                        case "origin":
                            i.contextmenu(a);
                            break;
                        case "asynclazy":
                            break
                    }
                })
            },
            getMaybeLynxLink: function(a) {
                a = b("Parent").byAttribute(a, "data-lynx-mode");
                if (a instanceof HTMLAnchorElement) {
                    var c = a.getAttribute("data-lynx-mode");
                    switch (c) {
                        case "async":
                        case "asynclazy":
                        case "hover":
                        case "origin":
                            return [c, a];
                        default:
                            return null
                    }
                }
                return null
            },
            hoverClick: function(a) {
                b("FBLynxBase").revertSwapIfLynxURIPresent(a)
            },
            mouseover: function(a) {
                b("FBLynxBase").swapLinkWithUnshimmedLink(a)
            },
            contextmenu: function(a) {
                b("FBLynxBase").revertSwapIfLynxURIPresent(a)
            }
        };
    e.exports = i
}), null);
__d("JSResource", ["JSResourceReference"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function i(a, b) {
        h[a] = b
    }

    function j(a) {
        return h[a]
    }

    function a(a) {
        a = a;
        var b = j(a);
        if (b) return b;
        b = new(c("JSResourceReference"))(a);
        i(a, b);
        return b
    }
    a.Reference = c("JSResourceReference");
    a.loadAll = c("JSResourceReference").loadAll;
    g["default"] = a
}), 98);
__d("FalcoLoggerTransports", ["AnalyticsCoreData", "Banzai", "JSResource", "ODS", "PersistedQueue", "Queue", "WebSession", "promiseDone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 5 * 1024,
        i = 60 * 1e3,
        j = 1e3,
        k = "falco:",
        l = new(c("Queue"))(),
        m = [],
        n = 0,
        o, p = !1,
        q = !1,
        r = !1,
        s = !0;

    function t(a, b) {
        var c = b.item.extra.length;
        n + c > h && (clearTimeout(o), u());
        m.push([a, b]);
        n += c
    }

    function u() {
        o = null;
        p = !1;
        var a = m;
        l.enqueue(function(b) {
            return b.log(a.map(function(a) {
                return a[1].item
            }), function(b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c],
                        e = d[0];
                    d = d[1];
                    e.markItem(d, b)
                }
            })
        });
        m = [];
        n = 0
    }

    function v(a) {
        return {
            events: a.map(function(a) {
                return {
                    name: a.name,
                    extra: a.extra,
                    rate: a.policy.r,
                    time: a.time / 1e3
                }
            })
        }
    }

    function w(a) {
        return Object.freeze({
            deviceId: c("AnalyticsCoreData").device_id,
            sessionId: a,
            appId: c("AnalyticsCoreData").app_id,
            pushPhase: c("AnalyticsCoreData").push_phase
        })
    }

    function x(a, b) {
        y("planes.banzai.write", a.length);
        for (var e = 0; e < a.length; e++) {
            var f, g = a[e];
            c("Banzai").post(k + g.name, (f = {}, f.e = g.extra, f.r = g.policy.r, f.d = c("AnalyticsCoreData").device_id, f.s = d("WebSession").getId(), f.t = g.time, f), b)
        }
    }

    function y(a, b) {
        d("ODS").bumpEntityKey(1344, "falco.fabric.www." + c("AnalyticsCoreData").push_phase, a, b)
    }
    var z = {
        log: function(a, b) {
            x(a, c("Banzai").BASIC), b(!0)
        },
        logImmediately: function(a, b) {
            x(a, c("Banzai").VITAL), b(!0)
        },
        logCritical: function(a, b) {
            x(a, {
                signal: !0,
                retry: !0
            }), b(!0)
        }
    };

    function A() {
        if (q) return;
        c("JSResource").loadAll([c("JSResource")("TransportSelectingClientSingleton").__setRef("FalcoLoggerTransports"), c("JSResource")("RequestStreamCommonRequestStreamCommonTypes").__setRef("FalcoLoggerTransports")], function(a, b) {
            var e = b.FlowStatus,
                f;
            b = {
                onTermination: function(a) {
                    a.message === "Stream closed" ? (l.stop(!0), q = !1) : (s = !1, l.start(function(a) {
                        return a(z)
                    }))
                },
                onFlowStatus: function(a) {
                    a === e.Started && l.start(function(a) {
                        return a({
                            log: function(b, a) {
                                y("planes.bladerunner.write", b.length);
                                b = JSON.stringify(v(b));
                                f && (c("AnalyticsCoreData").enable_ack ? c("promiseDone")(f.amendWithAck(b), function() {
                                    return a(!0)
                                }, function() {
                                    y("planes.bladerunner.ack_failed", 1), a(!0)
                                }) : (f.amendWithoutAck(b), a(!0)))
                            },
                            logImmediately: function(b, a) {
                                this.log(b, a)
                            },
                            logCritical: function(b, a) {
                                this.log(b, a)
                            }
                        })
                    })
                }
            };
            c("promiseDone")(a.requestStream({
                method: "Falco"
            }, JSON.stringify(w(d("WebSession").getId())), b, {
                requestId: ""
            }).then(function(a) {
                f = a
            })["catch"](function(a) {
                l.stop(!0), q = !1
            }))
        });
        q = !0
    }

    function B(a) {
        return c("AnalyticsCoreData").enable_bladerunner && s && a.s === 1
    }

    function a() {
        if (r) return;
        r = !0;
        c("PersistedQueue").setHandler("falco_queue_log", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                B(b.item.policy) ? (A(), o == null && (o = setTimeout(u, i)), t(a, b)) : z.log([b.item], function(c) {
                    return a.markItem(b, c)
                })
            })(b)
        });
        c("PersistedQueue").setHandler("falco_queue_immediately", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                B(b.item.policy) ? (A(), (o == null || !p) && (clearTimeout(o), o = setTimeout(u, j), p = !0), t(a, b)) : z.logImmediately([b.item], function(c) {
                    return a.markItem(b, c)
                })
            })(b)
        });
        c("PersistedQueue").setHandler("falco_queue_critical", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                var c = b.item;
                B(c.policy) ? (A(), l.enqueue(function(d) {
                    return d.logCritical([c], function(c) {
                        return a.markItem(b, c)
                    })
                })) : z.logCritical([c], function(c) {
                    return a.markItem(b, c)
                })
            })(b)
        })
    }
    g.attach = a
}), 98);
__d("FbtImpressionsBatchFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743619");
    c = b("FalcoLoggerInternal").create("fbt_impressions_batch", a);
    e.exports = c
}), null);
__d("mapObject", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, b, c) {
        if (!a) return null;
        var d = {};
        Object.keys(a).forEach(function(e) {
            d[e] = b.call(c, a[e], e, a)
        });
        return d
    }

    function a(a, b, c) {
        return g(a, b, c)
    }

    function b(a, b, c) {
        return g(a, b, c)
    }
    g.untyped = a;
    g.shape = b;
    f["default"] = g
}), 66);
__d("BanzaiFbtBatchLogger", ["ExecutionEnvironment", "FbtImpressionsBatchFalcoEvent", "clearTimeout", "mapObject", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g;
    a = 100;
    var h = 1e4,
        i = function() {
            return {
                h: {},
                s: new Set()
            }
        },
        j = function() {
            return {}
        },
        k = j(),
        l = 0,
        m = {
            _getBatch: function() {
                return j()
            },
            MAX_BATCH_SIZE: a,
            POST_INTERVAL: h,
            postTimeout: null,
            _resetBatch: function() {
                k = j(), l = 0
            },
            log: function(a) {
                var c = a.hash,
                    d = a.sample_rate;
                a = a.script_path;
                d = d + "|" + String(a);
                k[d] == null ? (k[d] = i(), k[d].s.add(c), l += 1) : k[d].s.has(c) ? (k[d].s["delete"](c), k[d].h[c] = 2) : k[d].h[c] != null ? k[d].h[c] += 1 : (k[d].s.add(c), l += 1);
                l === 1 && m.postTimeout == null && (b("ExecutionEnvironment").canUseDOM && (m.postTimeout = b("setTimeoutAcrossTransitions")(function() {
                    m.postBatch()
                }, h)));
                l === m.MAX_BATCH_SIZE && (b("clearTimeout")(m.postTimeout), m.postTimeout = null, m.postBatch())
            },
            postBatch: function() {
                if (l === 0) return;
                var a = {
                    e: (g || (g = b("mapObject")))(k, function(a) {
                        return {
                            h: a.h,
                            s: Array.from(a.s)
                        }
                    })
                };
                b("FbtImpressionsBatchFalcoEvent").log(function() {
                    return a
                });
                b("clearTimeout")(m.postTimeout);
                m.postTimeout = null;
                m._resetBatch()
            }
        };
    e.exports = m
}), null);
__d("FbtLoggerImpl", ["BanzaiFbtBatchLogger", "ScriptPath"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        d("BanzaiFbtBatchLogger").log({
            hash: a,
            sample_rate: 1,
            script_path: d("ScriptPath").getScriptPath()
        })
    }
    g.logImpression = a
}), 98);
__d("InlineFbtResultImpl", ["cx", "FbtHooks", "FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f, g, h) {
    function i(a, b, c, e) {
        var f = "_4qba";
        e != null && e != "" && (b === "TRANSLATION" ? f = "_4qbb" : b === "APPROVE" ? f = "_4qbc" : b === "REPORT" && (f = "_4qbd"));
        return {
            $$typeof: d("FbtReactUtil").REACT_ELEMENT_TYPE,
            type: "em",
            key: null,
            ref: null,
            props: {
                className: f,
                "data-intl-hash": e,
                "data-intl-translation": c,
                "data-intl-trid": "",
                children: a,
                suppressHydrationWarning: !0
            },
            _owner: null
        }
    }
    var j = function(a) {
        return i(a.content, a.inlineMode, a.translation, a.hash)
    };
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e, f, g) {
            var h;
            h = a.call(this, b, c("FbtHooks").getErrorListener({
                translation: f,
                hash: g
            })) || this;
            h.$$typeof = d("FbtReactUtil").REACT_ELEMENT_TYPE;
            h.key = null;
            h.ref = null;
            h.type = j;
            h.props = {
                content: b,
                inlineMode: e,
                translation: f,
                hash: g
            };
            return h
        }
        return b
    }(c("FbtResultBase"));
    g["default"] = a
}), 98);
__d("PluginBundleInit", ["DOM"], (function(a, b, c, d, e, f, g) {
    function a() {
        var a = document.getElementById("jsbundle-loader");
        a && c("DOM").remove(a)
    }
    g.init = a
}), 98);
__d("PlatformDialog", ["cx", "CSS", "DOMEvent", "DOMEventListener"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        "use strict";
        a.getInstance = function() {
            return h
        };

        function a(a, c, d) {
            var e = this;
            h = this;
            this.$1 = a;
            this.$2 = c;
            this.$3 = !1;
            b("DOMEventListener").add(this.$1, "submit", function(c) {
                if (e.$3) {
                    new(b("DOMEvent"))(c).kill();
                    return
                }
                e.$3 = !0;
                d && b("CSS").addClass(a, "_32qa")
            })
        }
        var c = a.prototype;
        c.getForm = function() {
            return this.$1
        };
        c.getDisplay = function() {
            return this.$2
        };
        c.hasBeenSubmitted = function() {
            return this.$3
        };
        return a
    }();
    a.RESPONSE = "platform/dialog/response";
    e.exports = a
}), null);
__d("PluginReturn", ["invariant", "Arbiter", "Log", "PlatformDialog", "PlatformWidgetEndpoint", "Plugin", "URI"], (function(a, b, c, d, e, f, g) {
    var h;
    b("Arbiter").subscribe(b("PlatformDialog").RESPONSE, function(a, c) {
        if (c.error_code) {
            b("Log").debug("Plugin Return Error (%s): %s", c.error_code, c.error_message || c.error_description);
            return
        }
        b("Plugin").reload(c.plugin_reload)
    });
    var i = {
        auto: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                a = typeof b === "object" ? b.reloadUrl : b;
                i.reload(a)
            })
        },
        syncPlugins: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                b.crossFrame && i.reload(b.reloadUrl, b.reload, b.identifier)
            })
        },
        reload: function(a, c, d) {
            d = (h || (h = b("URI"))).getRequestURI().removeQueryData("ret").removeQueryData("act").removeQueryData("hash").addQueryData("reload", c).addQueryData("id", d);
            if (a) {
                var c = new(h || (h = b("URI")))(a);
                b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath()) || g(0, 1120);
                d.setPath(c.getPath()).addQueryData(c.getQueryData())
            }
            window.location.replace(d.toString())
        }
    };
    e.exports = i
}), null);
__d("SecurePostMessage", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "*";
    a = {
        sendMessageToSpecificOrigin: function(a, b, c, d) {
            c !== h || g(0, 21157), a.postMessage(b, c, d)
        },
        sendMessageForCurrentOrigin: function(a, b) {
            a.postMessage(b)
        },
        sendMessageAllowAnyOrigin_UNSAFE: function(a, b, c) {
            a.postMessage(b, h, c)
        }
    };
    e.exports = a
}), null);
__d("PluginXDReady", ["Arbiter", "Log", "SecurePostMessage", "UnverifiedXD"], (function(a, b, c, d, e, f, g) {
    b = {
        handleMessage: function(a) {
            d("Log").debug("PluginXDReady at " + window.name + " handleMessage " + JSON.stringify(a));
            if (!a.method) return;
            try {
                c("Arbiter").inform("Connect.Unsafe." + a.method, JSON.parse(a.params), "persistent")
            } catch (a) {}
        }
    };
    window.addEventListener("message", function(a) {
        d("Log").debug("PluginXDReady at " + window.name + " received message " + JSON.stringify(a.data.message));
        if (a.data.xdArbiterSyn) d("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a.source, {
            xdArbiterAck: !0
        });
        else if (a.data.xdArbiterHandleMessage) {
            if (!a.data.message.method) return;
            try {
                c("Arbiter").inform("Connect.Unsafe." + a.data.message.method, JSON.parse(a.data.message.params), "persistent")
            } catch (a) {}
        }
    }, !1);
    a.XdArbiter = b;
    c("UnverifiedXD").send({
        xd_action: "plugin_ready",
        name: window.name
    });
    e = null;
    g["default"] = e
}), 98);
__d("createCancelableFunction", ["emptyFunction"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = a;
        a = function() {
            for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
            return b.apply(this, c)
        };
        a.cancel = function() {
            b = c("emptyFunction")
        };
        return a
    }
    g["default"] = a
}), 98);
__d("RunBlue", ["Arbiter", "BigPipeInstance", "ContextualComponent", "ExecutionEnvironment", "PageEvents", "TimeSlice", "createCancelableFunction", "emptyFunction", "isTruthy", "performanceAbsoluteNow", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "onunloadhooks",
        i = "onafterunloadhooks";

    function j(b, d) {
        var e = a.CavalryLogger && a.CavalryLogger.getInstance();
        if (!e) return;
        c("isTruthy")(d) ? e.setAbsTimeStamp && e.setAbsTimeStamp(b, d) : e.setTimeStamp(b)
    }

    function b(b) {
        var d = a.PageHooks;
        if (window.domready && d) {
            d.runHook(b, "domreadyhooks:late");
            return {
                remove: c("emptyFunction")
            }
        } else return p("domreadyhooks", b)
    }

    function e(b) {
        var c = a.PageHooks;
        if (window.loaded && c) {
            var d = a.setTimeout(function() {
                c.runHook(b, "onloadhooks:late")
            }, 0);
            return {
                remove: function() {
                    return a.clearTimeout(d)
                }
            }
        } else return p("onloadhooks", b)
    }

    function f(a, b) {
        b = b === void 0 ? !window.loading_page_chrome : b;
        return b ? p("onbeforeleavehooks", a) : p("onbeforeunloadhooks", a)
    }

    function k(a, b) {
        window.onunload || (window.onunload = c("TimeSlice").guard(function() {
            c("Arbiter").inform(c("PageEvents").NATIVE_ONUNLOAD, !0, "state")
        }, "window.onunload"));
        return p(a, b)
    }

    function l(a) {
        return k(h, a)
    }

    function m(a) {
        return k(i, a)
    }

    function n(a) {
        return p("onleavehooks", a)
    }

    function o(a, b) {
        var d = c("createCancelableFunction")(b);
        b = function() {
            d(), d.cancel()
        };
        a = c("ContextualComponent").closestToNode(a);
        a && a.onCleanup(b);
        window.onleavehooks = (window.onleavehooks || []).concat(b);
        return {
            remove: function() {
                d.cancel()
            }
        }
    }

    function p(a, b) {
        var d;
        d = (d = b) != null ? d : c("emptyFunction");
        b || c("recoverableViolation")("Undefined handler is not allowed", "web_speed");
        var e = c("createCancelableFunction")(d);
        window[a] = (window[a] || []).concat(e);
        return {
            remove: function() {
                e.cancel()
            }
        }
    }

    function q(a) {
        window[a] = []
    }
    var r = c("TimeSlice").guard(function() {
        c("Arbiter").inform(c("PageEvents").NATIVE_DOMREADY, !0, "state")
    }, "DOMContentLoaded");
    a._domcontentready = r;

    function s() {
        var b = document,
            d = window;
        if (b.addEventListener) {
            var e = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
            if (e && e[1] < 525) var f = a.setInterval(function() {
                /loaded|complete/.test(b.readyState) && (r(), a.clearInterval(f))
            }, 10);
            else b.addEventListener("DOMContentLoaded", r, !0)
        } else {
            e = d.location.protocol === "https:" ? "//:" : "javascript:void(0)";
            b.write('<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' + e + '"></');
            b.write("script>")
        }
        var g = d.onload;
        d.onload = c("TimeSlice").guard(function() {
            j("t_layout"), g && g(), c("Arbiter").inform(c("PageEvents").NATIVE_ONLOAD, !0, "state")
        }, "window.onload");
        d.onbeforeunload = c("TimeSlice").guard(function(a) {
            var b = {};
            c("Arbiter").inform(c("PageEvents").NATIVE_ONBEFOREUNLOAD, b, "state");
            b.warn || c("Arbiter").inform(c("PageEvents").AJAXPIPE_ONUNLOAD, {
                transition_type: "normal"
            });
            if (b.warn !== void 0) {
                b = b.warn.body != null ? b.warn.body : b.warn;
                a && (a.returnValue = b);
                return b
            } else return
        }, "window.onbeforeunload")
    }

    function t() {
        var a, b = c("performanceAbsoluteNow")();
        ((a = window.console) == null ? void 0 : a.timeStamp) && window.console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}');
        j("t_onload", b);
        c("Arbiter").inform(c("PageEvents").BIGPIPE_ONLOAD, {
            ts: b
        }, "state")
    }
    var u = c("Arbiter").registerCallback(function() {
            d("BigPipeInstance").getCurrentInstance() ? c("Arbiter").subscribeOnce(d("BigPipeInstance").Events.displayed, t) : t()
        }, [c("PageEvents").NATIVE_ONLOAD]),
        v = c("Arbiter").registerCallback(function() {
            j("t_domcontent");
            var a = {
                timeTriggered: Date.now()
            };
            c("Arbiter").inform(c("PageEvents").BIGPIPE_DOMREADY, a, "state")
        }, [c("PageEvents").NATIVE_DOMREADY]);
    d("ExecutionEnvironment").canUseDOM && s();
    g.onLoad = b;
    g.onAfterLoad = e;
    g.onBeforeUnload = f;
    g.onUnload = l;
    g.onAfterUnload = m;
    g.onLeave = n;
    g.onCleanupOrLeave = o;
    g.__removeHook = q;
    g.__onloadCallback = u;
    g.__domContentCallback = v
}), 98);
__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorPubSub"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 5e3;
    a = function() {
        function a(a) {
            var b = this;
            this.$6 = 0;
            if (a != null) {
                if (a <= 0) throw new Error("Size for a buffer must be greater than zero.")
            } else a = h;
            this.$4 = a;
            this.$1 = new(c("CircularBuffer"))(a);
            this.$1.onEvict(function() {
                b.$6++
            });
            this.$2 = [];
            this.$3 = 1;
            this.$5 = 0
        }
        var b = a.prototype;
        b.open = function() {
            var a = this,
                b = this.$3++,
                c = !1,
                d, e = this.$5,
                f = {
                    id: b,
                    startIdx: e,
                    hasOverflown: function() {
                        return f.getOverflowSize() > 0
                    },
                    getOverflowSize: function() {
                        return d != null ? d : Math.max(a.$6 - e, 0)
                    },
                    close: function() {
                        if (c) return [];
                        else {
                            c = !0;
                            d = a.$6 - e;
                            return a.$7(b)
                        }
                    }
                };
            this.$2.push(f);
            return f
        };
        b.pushElement = function(a) {
            this.$2.length > 0 && (this.$1.write(a), this.$5++);
            return this
        };
        b.isActive = function() {
            return this.$2.length > 0
        };
        b.$8 = function(a) {
            return Math.max(a - this.$6, 0)
        };
        b.$7 = function(a) {
            var b, d, e, f;
            for (var g = 0; g < this.$2.length; g++) {
                var h = this.$2[g],
                    i = h.startIdx;
                h = h.id;
                h === a ? (e = g, f = i) : (d == null || i < d) && (d = i);
                (b == null || i < b) && (b = i)
            }
            if (e == null || b == null || f == null) {
                c("ErrorPubSub").reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
                return []
            }
            this.$2.splice(e, 1);
            h = this.$8(f);
            i = this.$1.read().slice(h);
            g = this.$8(d == null ? this.$5 : d) - this.$8(b);
            g > 0 && (this.$1.dropFirst(g), this.$6 += g);
            return i
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("WorkerUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function b() {
        try {
            return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope
        } catch (a) {
            return !1
        }
    }

    function c() {
        try {
            return "SharedWorkerGlobalScope" in a && a instanceof a.SharedWorkerGlobalScope
        } catch (a) {
            return !1
        }
    }

    function d() {
        return "SharedWorker" in a && typeof a.SharedWorker === "function"
    }
    f.isWorkerContext = b;
    f.isSharedWorkerContext = c;
    f.isSharedWorkerSupported = d
}), 66);
__d("getReusableTimeSliceContinuation", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        var d = !1,
            e = a.getGuardedContinuation(c),
            f = function(b) {
                e(function() {
                    d || (e = a.getGuardedContinuation(c)), b()
                })
            };
        f.last = function(a) {
            var b = e;
            g();
            b(a)
        };
        f[b] = {};

        function g() {
            d = !0, e = function(a) {
                a()
            }
        }
        return f
    }
    f["default"] = a
}), 66);
__d("TimeSliceImpl", ["invariant", "Env", "ErrorGuard", "FBLogger", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "performanceAbsoluteNow", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k, l = [],
        m = [],
        n = "key" + Math.random(),
        o = 1,
        p = !1;
    c = (h || (h = b("Env"))).timesliceBufferSize;
    c == null && (c = 5e3);
    var q = new(b("IntervalTrackingBoundedBuffer"))(c),
        r = [],
        s = [],
        t = [];

    function u() {
        return v(r)
    }

    function v(a) {
        return a.length > 0 ? a[a.length - 1] : null
    }

    function w(a, c) {
        var d = {};
        (i || (i = b("ErrorGuard"))).applyWithGuard(z, null, [a, c, d]);
        i.applyWithGuard(A, null, [a, c, d]);
        r.push(a);
        s.push(c);
        t.push(d)
    }

    function x(a, b, c) {
        l.forEach(function(d) {
            var e = d.onNewContextCreated(u(), b, c);
            a[d.getBeforeID()] = e
        })
    }

    function y(a, b, c) {
        m.forEach(function(d) {
            d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta)
        })
    }

    function z(a, b, c) {
        l.forEach(function(d) {
            var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function A(a, b, c) {
        l.forEach(function(d) {
            var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function B() {
        var a = u(),
            c = v(s),
            d = v(t);
        if (a == null || c == null || d == null) {
            b("FBLogger")("TimeSlice").mustfix("popped too many times off the timeslice stack");
            p = !1;
            return
        }(i || (i = b("ErrorGuard"))).applyWithGuard(y, null, [a, c, d]);
        p = !a.isRoot;
        r.pop();
        s.pop();
        t.pop()
    }
    var C = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(a, c, d) {
            var e;
            typeof a === "function" || g(0, 3725);
            typeof c === "string" || g(0, 3726);
            var f = D(d);
            if (a[n]) return a;
            var l;
            p && (l = u());
            var m = {},
                r = 0,
                s = void 0;
            e = (e = (h || (h = b("Env"))).deferred_stack_trace_rate) != null ? e : 0;
            d && d.registerCallStack && e > 0 && Math.random() < 1 / e && (s = new Error("deferred execution source"));
            d = function() {
                var d = (j || (j = b("performanceAbsoluteNow")))(),
                    e = o++,
                    g = {
                        contextID: e,
                        name: c,
                        isRoot: !p,
                        executionNumber: r++,
                        meta: f,
                        absBeginTimeMs: d
                    };
                w(g, m);
                if (l != null) {
                    var h = !!f.isContinuation;
                    l.isRoot ? (g.indirectParentID = l.contextID, g.isEdgeContinuation = h) : (g.indirectParentID = l.indirectParentID, g.isEdgeContinuation = !!(h && l.isEdgeContinuation))
                }
                var n = (k || (k = b("WorkerUtils"))).isWorkerContext();
                p = !0;
                try {
                    for (var t = arguments.length, v = new Array(t), x = 0; x < t; x++) v[x] = arguments[x];
                    if (!g.isRoot || n) return a.apply(this, v);
                    else return (i || (i = b("ErrorGuard"))).applyWithGuard(a, this, v, {
                        name: "TimeSlice" + (c ? ": " + c : ""),
                        deferredSource: s
                    })
                } finally {
                    var y = u();
                    if (y == null) b("FBLogger")("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), p = !1;
                    else {
                        var z = y.isRoot,
                            A = y.contextID,
                            C = y.indirectParentID,
                            D = y.isEdgeContinuation,
                            E = (j || (j = b("performanceAbsoluteNow")))();
                        y.absEndTimeMs = E;
                        if (z && d != null) {
                            var F = babelHelpers["extends"]({
                                begin: d,
                                end: E,
                                id: A,
                                indirectParentID: C,
                                representsExecution: !0,
                                isEdgeContinuation: l && D,
                                guard: c
                            }, f, a.__SMmeta);
                            q.pushElement(F)
                        }
                        B()
                    }
                }
            };
            d[n] = {};
            (i || (i = b("ErrorGuard"))).applyWithGuard(x, null, [m, c, f]);
            return d
        },
        copyGuardForWrapper: function(a, b) {
            a && a[n] && (b[n] = a[n]);
            return b
        },
        getContext: function() {
            return u()
        },
        getGuardedContinuation: function(a) {
            function b(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return a.apply(this, c)
            }
            return C.guard(b, a, {
                propagationType: C.PropagationType.CONTINUATION
            })
        },
        getReusableContinuation: function(a) {
            return b("getReusableTimeSliceContinuation")(C, n, a)
        },
        getPlaceholderReusableContinuation: function() {
            var a = function(a) {
                return a()
            };
            a.last = a;
            return a
        },
        getGuardNameStack: function() {
            return r.map(function(a) {
                return a.name
            })
        },
        registerExecutionContextObserver: function(a) {
            var b = !1;
            for (var c = 0; c < l.length; c++)
                if (l[c].getBeforeID() > a.getBeforeID()) {
                    l.splice(c, 0, a);
                    b = !0;
                    break
                }
            b || l.push(a);
            for (var c = 0; c < m.length; c++)
                if (m[c].getAfterID() > a.getAfterID()) {
                    m.splice(c, 0, a);
                    return
                }
            m.push(a)
        },
        catchUpOnDemandExecutionContextObservers: function(a) {
            for (var b = 0; b < r.length; b++) {
                var c = r[b],
                    d = s[b],
                    e = t[b] || {};
                d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
                e[a.getBeforeID()] = d;
                t[b] = e
            }
        },
        getBuffer: function() {
            return q
        }
    };

    function D(a) {
        var b = {};
        a && a.propagateCounterAttribution !== void 0 && (b.propagateCounterAttribution = a.propagateCounterAttribution);
        a && a.root !== void 0 && (b.root = a.root);
        switch (a && a.propagationType) {
            case C.PropagationType.CONTINUATION:
                b.isContinuation = !0;
                b.extendsExecution = !0;
                break;
            case C.PropagationType.ORPHAN:
                b.isContinuation = !1;
                b.extendsExecution = !1;
                break;
            case C.PropagationType.EXECUTION:
            default:
                b.isContinuation = !1, b.extendsExecution = !0
        }
        return b
    }
    b("wrapFunction").setWrapper(function(a, b) {
        return C.guard(a, b, {
            registerCallStack: !0
        })
    }, "entry");
    a.TimeSlice = C;
    e.exports = C
}), 6);
__d("cancelIdleCallbackBlue", ["IdleCallbackImplementation"], (function(a, b, c, d, e, f, g) {
    var h = (c = a.cancelIdleCallback) != null ? c : d("IdleCallbackImplementation").cancelIdleCallback;

    function b(a) {
        h(a)
    }
    g["default"] = b
}), 98);
__d("clearIntervalBlue", [], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function b(a) {
        g(a)
    }
    f["default"] = b
}), 66);
__d("clearTimeoutBlue", [], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function b(a) {
        g(a)
    }
    f["default"] = b
}), 66);
__d("legacy:bootloader", ["Bootloader"], (function(a, b, c, d, e, f) {
    a.Bootloader = b("Bootloader")
}), 3);
__d("isAdsExcelAddinURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("isValidAsyncSignalURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.includes(a.getProtocol()) && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("AsyncSignal", ["ErrorGuard", "Promise", "QueryString", "Run", "TimeSlice", "TrackingConfig", "URI", "ZeroRewrites", "getAsyncParams", "isAdsExcelAddinURI", "isFacebookURI", "isMessengerDotComURI", "isValidAsyncSignalURI", "isWorkplaceDotComURI", "memoize", "promiseDone"], (function(a, b, c, d, e, f) {
    var g, h, i;

    function a(a, c) {
        this.data = c || {}, this.uri = a.toString(), b("TrackingConfig").domain && this.uri.charAt(0) == "/" && (this.uri = b("TrackingConfig").domain + this.uri)
    }
    a.prototype.setHandler = function(a) {
        this.handler = a;
        return this
    };
    a.prototype.setTimeout = function(a) {
        this.timeout = a;
        return this
    };
    a.prototype.send = function() {
        b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    };
    a.prototype._send = function() {
        var a = this.handler,
            c = this.data;
        c.asyncSignal = (Math.random() * 1e4 | 0) + 1;
        var d = b("ZeroRewrites").rewriteURI(new(g || (g = b("URI")))(this.uri));
        d = b("isFacebookURI")(d) || b("isMessengerDotComURI")(d) || b("isAdsExcelAddinURI")(d) || b("isWorkplaceDotComURI")(d) || b("isValidAsyncSignalURI")(d);
        if (d) Object.assign(c, b("getAsyncParams")("POST"));
        else throw new Error("'" + this.uri + "' is an external URL, you should not send async signals to offsite links.");
        var e = b("QueryString").appendToUrl(this.uri, c);
        i || (i = new(b("Promise"))(function(a) {
            b("Run").onAfterLoad(a)
        }));
        d = i.then(function() {
            return new(b("Promise"))(function(a, b) {
                var c = new Image();
                c.onload = a;
                c.onerror = c.onabort = b;
                c.src = e
            })
        });
        if (a) {
            var f = !1,
                j = b("memoize")(function() {
                    (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [f])
                });
            b("promiseDone")(d.then(function() {
                f = !0, j()
            }, j));
            this.timeout && setTimeout(j, this.timeout)
        }
        return this
    };
    e.exports = a
}), null);
__d("LinkshimAsyncLink", ["$", "AsyncSignal", "DOM", "LinkshimHandlerConfig", "UserAgent_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        var e = d("UserAgent_DEPRECATED").ie() <= 8;
        if (e) {
            var f = c("DOM").create("wbr", {}, null);
            c("DOM").appendContent(a, f)
        }
        a.href = b;
        e && c("DOM").remove(f)
    }

    function a(a, b, d) {
        var e = c("$")("meta_referrer");
        e.content = c("LinkshimHandlerConfig").switched_meta_referrer_policy;
        h(a, b);
        setTimeout(function() {
            e.content = c("LinkshimHandlerConfig").default_meta_referrer_policy, new(c("AsyncSignal"))(d, {}).send()
        }, 100)
    }
    g.swap = h;
    g.referrer_log = a
}), 98);
__d("legacy:dom-asynclinkshim", ["LinkshimAsyncLink"], (function(a, b, c, d, e, f) {
    a.LinkshimAsyncLink = b("LinkshimAsyncLink")
}), 3);
__d("lowerDomain", ["LowerDomainRegex", "lowerFacebookDomain"], (function(a, b, c, d, e, f, g) {
    ((a = document.domain) != null ? a : "").toLowerCase().match(d("LowerDomainRegex").domainRegex) && c("lowerFacebookDomain")()
}), 34);
__d("markJSEnabled", [], (function(a, b, c, d, e, f) {
    a = document.documentElement;
    a.className = a.className.replace("no_js", "")
}), null);
__d("requestIdleCallbackBlue", ["TimeSlice", "TimerStorage", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function b(b, d) {
        var e;

        function f(a) {
            c("TimerStorage").unset(c("TimerStorage").IDLE_CALLBACK, e), b(a)
        }
        c("TimeSlice").copyGuardForWrapper(b, f);
        e = c("requestIdleCallbackAcrossTransitions").call(a, f, d);
        c("TimerStorage").set(c("TimerStorage").IDLE_CALLBACK, e);
        return e
    }
    g["default"] = b
}), 98);
__d("setIntervalAcrossTransitionsBlue", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h = a.__fbNativeSetInterval || a.setInterval;

    function b(b, d) {
        var e = c("TimeSlice").guard(b, "setInterval");
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) g[i - 2] = arguments[i];
        return Function.prototype.apply.call(h, a, [e, d].concat(g))
    }
    g["default"] = b
}), 98);
__d("setTimeoutAcrossTransitionsBlue", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h = a.__fbNativeSetTimeout || a.setTimeout;

    function b(b, d) {
        var e = c("TimeSlice").guard(b, "setTimeout", {
            propagationType: c("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) g[i - 2] = arguments[i];
        return Function.prototype.apply.call(h, a, [e, d].concat(g))
    }
    g["default"] = b
}), 98);
__d("setTimeoutBlue", ["TimeSlice", "TimerStorage", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        var d, e = function() {
            c("TimerStorage").unset(c("TimerStorage").TIMEOUT, d);
            for (var b = arguments.length, e = new Array(b), f = 0; f < b; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        c("TimeSlice").copyGuardForWrapper(a, e);
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
        d = c("setTimeoutAcrossTransitions").apply(void 0, [e, b].concat(g));
        c("TimerStorage").set(c("TimerStorage").TIMEOUT, d);
        return d
    }
    g["default"] = a
}), 98);

__d("PluginQuote", ["Arbiter", "DOM", "DOMEventListener", "UnverifiedXD"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        d("DOMEventListener").add(a, "click", function() {
            c("UnverifiedXD").send({
                type: "getTextSelection"
            })
        }), c("Arbiter").subscribe("Connect.Unsafe.setTextSelection", function(b, d) {
            c("DOM").insertAfter(a, c("DOM").create("input", {
                type: "hidden",
                id: "quotationtext",
                value: d.text
            }))
        })
    }
    g.init = a
}), 98);
__d("XSharePluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/share/logging/", {})
}), null);
__d("PluginShareActions", ["AsyncRequest", "Event", "XSharePluginLoggingController"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e, f, g, h) {
        c("Event").listen(f, "click", function(f) {
            new(c("AsyncRequest"))().setURI(c("XSharePluginLoggingController").getURIBuilder().getURI()).setData({
                app_id: g,
                href: a,
                layout: b,
                event: "click",
                has_iframe: d,
                referer_url: e
            }).send()
        })
    }
    g.init = a
}), 98);
__d("PopupLink", ["DOMEvent", "DOMEventListener", "Popup"], (function(a, b, c, d, e, f) {
    a = {
        listen: function(a, c, d) {
            b("DOMEventListener").add(a, "click", function(e) {
                new(b("DOMEvent"))(e).kill(), b("Popup").open(a.href, c, d)
            })
        }
    };
    e.exports = a
}), null);
__d("CSTXCookieRecordConsentControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/cookie/consent/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("CookieConsentDialogFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1746397");
    c = b("FalcoLoggerInternal").create("cookie_consent_dialog", a);
    e.exports = c
}), null);
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
__d("DeferredCookie", ["CSTXCookieRecordConsentControllerRouteBuilder", "Cookie", "CookieConsent", "CookieConsentDialogFalcoEvent", "SubscriptionList", "URLSearchParams", "cr:1069930", "cr:1083116", "cr:1083117", "cr:1697455", "flattenPHPQueryData", "killswitch", "nullthrows", "promiseDone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
        i = !0,
        j, k = !1,
        l = new Map(),
        m = {
            addToQueue: function(a, b, e, f, g, i, j) {
                if (d("CookieConsent").hasConsent(1)) {
                    g ? c("Cookie").setWithoutChecksIfFirstPartyContext(a, b, e, f, j) : c("Cookie").setWithoutChecks(a, b, e, f, j);
                    return
                }
                if (h.has(a)) return;
                h.set(a, {
                    name: a,
                    value: b,
                    nMilliSecs: e,
                    path: f,
                    firstPartyOnly: g,
                    secure: j
                });
                i && m.addDefaultInteractionListener()
            },
            flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT: function() {
                h.forEach(function(a, b) {
                    a.firstPartyOnly ? c("Cookie").setWithoutChecksIfFirstPartyContext(a.name, a.value, a.nMilliSecs, a.path, a.secure) : c("Cookie").setWithoutChecks(a.name, a.value, a.nMilliSecs, a.path, a.secure)
                });
                if (c("killswitch")("DEFERREDCOOKIE_EMPTY_COOKIES_BEFORE_CALLBACK")) {
                    d("CookieConsent").setConsented();
                    for (var a = l, b = Array.isArray(a), e = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var f;
                        if (b) {
                            if (e >= a.length) break;
                            f = a[e++]
                        } else {
                            e = a.next();
                            if (e.done) break;
                            f = e.value
                        }
                        f = f;
                        f[1].fireCallbacks()
                    }
                    h.clear()
                } else {
                    h.clear();
                    d("CookieConsent").setConsented();
                    for (var f = l, e = Array.isArray(f), b = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        if (e) {
                            if (b >= f.length) break;
                            a = f[b++]
                        } else {
                            b = f.next();
                            if (b.done) break;
                            a = b.value
                        }
                        a = a;
                        a[1].fireCallbacks()
                    }
                }
                m.removeDefaultInteractionListener()
            },
            flushAllCookiesINTERNALONLY: function(a, d, e, f, g, h) {
                a === void 0 && (a = !1);
                d === void 0 && (d = !1);
                f === void 0 && (f = !1);
                g === void 0 && (g = !1);
                m.flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT();
                a || c("CookieConsentDialogFalcoEvent").log(function() {
                    return {
                        event: "implicit_consent_given"
                    }
                });
                var i = {
                    accept_consent: a,
                    accept_only_essential: g
                };
                e != null && (e = Object.fromEntries(e), i = {
                    accept_consent: a,
                    optouts: e,
                    accept_only_essential: g
                });
                a = c("flattenPHPQueryData")(i);
                if (!k) {
                    e = c("CSTXCookieRecordConsentControllerRouteBuilder").buildUri({});
                    g = new(c("URLSearchParams"))(location.search).get("ig_3p_controls");
                    if (g === "on") {
                        i = e.addQueryParam("ig_3p_controls", "on");
                        e = (g = i) != null ? g : e
                    }
                    k = !0;
                    var j = function() {
                        h && h();
                        d && location.reload();
                        if (f) {
                            var a = document.getElementsByTagName("iframe");
                            a.length > 0 && location.reload()
                        }
                    };
                    b("cr:1069930") != null ? c("promiseDone")(b("cr:1069930")(e.toString(), {
                        data: a,
                        method: "POST"
                    }), function() {
                        return j()
                    }, function(a) {
                        b("cr:1083117") && b("cr:1083117")("Cookie consent has not been set successfully: " + a.errorMsg, "comet_infra")
                    }) : b("cr:1083116") != null && new(b("cr:1083116"))(e.toString()).setData(a).setHandler(function() {
                        return j()
                    }).send()
                }
            },
            removeDefaultInteractionListener: function() {
                i = !1, j && (window.removeEventListener ? window.removeEventListener("click", j, !0) : document.detachEvent && document.detachEvent("onclick", j), j = null)
            },
            addDefaultInteractionListener: function(a) {
                i && (i = !1, j = a != null ? a : m.baseInteractionHandler.bind(m), m._attachDefaultHandler())
            },
            setDefaultInteractionListener: function(a) {
                m.removeDefaultInteractionListener(), j = a, m._attachDefaultHandler()
            },
            registerCallbackOnCookieFlush: function(a, b) {
                d("CookieConsent").hasConsent(a) ? b() : (l.has(a) || l.set(a, new(c("SubscriptionList"))()), c("nullthrows")(l.get(a)).add(b))
            },
            baseInteractionHandler: function(a) {
                var d = a.target;
                if (!(d instanceof HTMLElement)) return;
                if (a instanceof MouseEvent && !m.isValidClick(a)) return;
                b("cr:1697455") != null && !b("cr:1697455").isClickNotConsideredConsent(d) && (c("CookieConsentDialogFalcoEvent").log(function() {
                    return {
                        event: "base_interaction_implicit_consent_given"
                    }
                }), m.flushAllCookiesINTERNALONLY(!1))
            },
            isValidClick: function(a) {
                return a.which === void 0 ? !0 : a.which == 1
            },
            canEmbedThirdPartyPixel: function() {
                return d("CookieConsent").isCookiesBlocked() || !d("CookieConsent").hasConsent(2) ? !1 : h.size === 0
            },
            _attachDefaultHandler: function() {
                window.addEventListener ? window.addEventListener("click", c("nullthrows")(j), !0) : document.attachEvent && document.attachEvent("onclick", c("nullthrows")(j))
            }
        };
    a = m;
    g["default"] = a
}), 98);
__d("XRefererFrameController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/common/referer_frame.php", {})
}), null);
__d("getRequestConstUri", ["ConstUriUtils", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("ConstUriUtils").getUri(window.location.href);
        if (a == null) throw c("unrecoverableViolation")("Cannot create ConstUriImpl of current request", "comet_infra");
        return a
    }
    g["default"] = a
}), 98);
__d("isInstagramURI", [], (function(a, b, c, d, e, f) {
    var g = null;

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        if (!a.getDomain() && !a.getProtocol()) return !1;
        if (a.getProtocol() !== "https") return !1;
        g || (g = new RegExp("(^|\\.)instagram\\.com$", "i"));
        return g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("ControlledReferer", ["Bootloader", "CookieConsent", "CookieConsentIFrameConfig", "DeferredCookie", "XRefererFrameController", "getRequestConstUri", "isInstagramURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI", "justknobx", "lowerFacebookDomain"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return c("CookieConsent").hasConsent(1) && c("CookieConsentIFrameConfig").allowlisted_iframes.includes(a.id)
    }

    function i(a, b, d) {
        if (!c("DeferredCookie").canEmbedThirdPartyPixel() && !h(a)) {
            c("Bootloader").loadModules(["ODS"], function(a) {
                a.bumpEntityKey(2966, "defer_cookies", "block_controlled_referer_iframe")
            }, "ControlledReferer");
            return
        }
        var e = !1;

        function f() {
            if (e) return;
            var c = a.contentWindow.location.pathname;
            if (c !== "/intern/common/referer_frame.php" && c !== "/common/referer_frame.php") return;
            e = !0;
            a.contentWindow.document.body.style.margin = 0;
            b()
        }
        var g;
        c("isMessengerDotComURI")(c("getRequestConstUri")()) || c("justknobx")._("186") && c("isInstagramURI")(c("getRequestConstUri")()) ? g = c("XRefererFrameController").getURIBuilder().getURI().toString() : c("isOculusDotComURI")(c("getRequestConstUri")()) ? g = "/common/referer_frame.php" : !c("lowerFacebookDomain").isValidDocumentDomain() ? g = "/intern/common/referer_frame.php" : g = c("XRefererFrameController").getURIBuilder().getURI().toString();
        d == null && c("isWorkplaceDotComURI")(c("getRequestConstUri")()) && (d = "workplace");
        d && (g += "?fb_source=" + d);
        a.onload = f;
        a.src = g
    }

    function a(a, b, c) {
        i(a, function() {
            a.contentWindow.document.body.innerHTML = b
        }, c)
    }
    g.shouldUseFacebookReferer = i;
    g.useFacebookRefererHtml = a
}), 98);
__d("TrackingPixel", ["Arbiter", "ControlledReferer", "DeferredCookie", "FBLogger"], (function(a, b, c, d, e, f) {
    var g = {
        _iframe: void 0,
        setIFrame: function(a) {
            g._iframe = a
        },
        loadWithNoReferrer: function(a) {
            if (!b("DeferredCookie").canEmbedThirdPartyPixel()) {
                b("FBLogger")("tracking_pixel").mustfix("Attempting to load a TrackingPixel (%s) while cookies are deferred. This is not allowed because tracking pixels sometimes set cookies.", a);
                return
            }
            if (!g._iframe) {
                var c = document.createElement("iframe");
                c.frameBorder = "0";
                c.width = c.height = "1";
                c.style.position = "absolute";
                c.style.top = "-10px";
                b("ControlledReferer").shouldUseFacebookReferer(c, function() {
                    b("Arbiter").inform("TrackingPixel/iframeIsLoaded", null, "persistent")
                });
                document.body != null && document.body.appendChild(c);
                g._iframe = c
            }
            b("Arbiter").subscribe("TrackingPixel/iframeIsLoaded", function() {
                if (g._iframe != void 0) {
                    var b = g._iframe.contentWindow;
                    b = new b.Image();
                    b.src = a
                }
            })
        }
    };
    e.exports = g
}), null);
__d("areJSONRepresentationsEqual", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        return JSON.stringify(a) == JSON.stringify(b)
    }
    f["default"] = a
}), 66);
__d("UIForm", ["ArbiterMixin", "BehaviorsMixin", "DOM", "Event", "Form", "Run", "areJSONRepresentationsEqual", "mixin"], (function(a, b, c, d, e, f) {
    c = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e, f, g) {
            var h;
            h = a.call(this) || this;
            h._root = c;
            h.controller = c;
            h._message = d;
            f && (h._confirm_dialog = f, f.subscribe("confirm", h._handleDialogConfirm.bind(babelHelpers.assertThisInitialized(h))), b("DOM").prependContent(h._root, b("DOM").create("input", {
                type: "hidden",
                name: "confirmed",
                value: "true"
            })));
            b("Run").onAfterLoad(function() {
                this._originalState = b("Form").serialize(this._root)
            }.bind(babelHelpers.assertThisInitialized(h)));
            h._forceDirty = e;
            h._confirmed = !1;
            h._submitted = !1;
            b("Event").listen(h._root, "submit", h._handleSubmit.bind(babelHelpers.assertThisInitialized(h)));
            g && g.length && h.enableBehaviors(g);
            c = !0;
            b("Run").onBeforeUnload(h.checkUnsaved.bind(babelHelpers.assertThisInitialized(h)), c);
            return h
        }
        var d = c.prototype;
        d.getRoot = function() {
            return this._root
        };
        d._handleSubmit = function() {
            if (this._confirm_dialog && !this._confirmed) {
                this._confirm_dialog.show();
                return !1
            }
            if (this.inform("submit") === !1) return !1;
            this._submitted = !0;
            return !0
        };
        d._handleDialogConfirm = function() {
            this._confirmed = !0, this._confirm_dialog.hide(), this._root.getAttribute("ajaxify") ? b("Event").fire(this._root, "submit") : this._handleSubmit() && this._root.submit()
        };
        d.reset = function() {
            this.inform("reset"), this._submitted = !1, this._confirmed = !1
        };
        d.isDirty = function() {
            if (this._submitted || !b("DOM").contains(document.body, this._root)) return !1;
            if (this._forceDirty) return !0;
            if (!this._originalState) return !1;
            var a = b("Form").serialize(this._root);
            return !b("areJSONRepresentationsEqual")(a, this._originalState)
        };
        d.checkUnsaved = function() {
            return this.isDirty() ? this._message : null
        };
        return c
    }(b("mixin")(b("ArbiterMixin"), b("BehaviorsMixin")));
    e.exports = a.UIForm || c
}), null);
__d("VerifiedXD", ["XD"], (function(a, b, c, d, e, f, g) {
    g["default"] = d("XD").XD
}), 98);
__d("VerifyDomain", ["Arbiter", "CSS", "VerifiedXD", "guid"], (function(a, b, c, d, e, f, g) {
    var h = "platform/plugins/verify_domain";

    function a(a) {
        if (location.ancestorOrigins && location.ancestorOrigins.length > 0) location.ancestorOrigins[0] === a && c("Arbiter").inform(h, null, "state");
        else {
            var b = c("guid")();
            c("Arbiter").subscribe("Connect.Unsafe.xd/verify", function(a, d) {
                d === b && c("Arbiter").inform(h, null, "state")
            });
            c("VerifiedXD").send({
                type: "verify",
                token: b
            })
        }
    }

    function b(a) {
        c("Arbiter").subscribe(h, d("CSS").show.bind(null, a))
    }
    g.VERIFIED = h;
    g.verify = a;
    g.show = b
}), 98);