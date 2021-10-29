(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var aa, ba;

    function ca(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var da = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this),
        ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        n = {},
        ia = {};

    function p(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in n ? f = n : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? da(n, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = ha ? fa.Symbol(d) : "$jscp$" + a + "$" + d), da(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            da(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    ja("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, n.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && da(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ka(ca(this))
                }
            })
        }
        return a
    }, "es6");

    function ka(a) {
        a = {
            next: a
        };
        a[p(n.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function la(a) {
        return a.raw = a
    }

    function q(a) {
        var b = "undefined" != typeof n.Symbol && p(n.Symbol, "iterator") && a[p(n.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ca(a)
        }
    }

    function ma(a) {
        if (!(a instanceof Array)) {
            a = q(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (ha && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function t(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.zb = b.prototype
    }
    ja("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.D = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.O),
                reject: g(this.m)
            }
        };
        b.prototype.O = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.R(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.N(g) : this.v(g)
            }
        };
        b.prototype.N = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.ea(h, g) : this.v(g)
        };
        b.prototype.m = function(g) {
            this.A(2, g)
        };
        b.prototype.v = function(g) {
            this.A(1, g)
        };
        b.prototype.A = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.P();
            this.H()
        };
        b.prototype.P = function() {
            var g = this;
            e(function() {
                if (g.M()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.M =
            function() {
                if (this.D) return !1;
                var g = fa.CustomEvent,
                    h = fa.Event,
                    k = fa.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.H = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.R = function(g) {
            var h = this.l();
            g.ga(h.resolve, h.reject)
        };
        b.prototype.ea = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(u, y) {
                return "function" == typeof u ? function(E) {
                    try {
                        l(u(E))
                    } catch (A) {
                        m(A)
                    }
                } : y
            }
            var l, m, r = new b(function(u, y) {
                l = u;
                m = y
            });
            this.ga(k(g, l), k(h, m));
            return r
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.ga = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.D = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = q(g), m = l.next(); !m.done; m = l.next()) d(m.value).ga(h, k)
            })
        };
        b.all = function(g) {
            var h = q(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function r(E) {
                    return function(A) {
                        u[E] = A;
                        y--;
                        0 == y && l(u)
                    }
                }
                var u = [],
                    y = 0;
                do u.push(void 0), y++, d(k.value).ga(r(u.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    ja("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");

    function ua(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ja("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = q(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!ua(g, e)) {
                var k = new c;
                da(g, e, {
                    value: k
                })
            }
            if (!ua(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ua(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ua(g, e) && ua(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && ua(g, e) && ua(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    ja("Map", function(a) {
        function b() {
            var h = {};
            return h.L = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ka(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.L;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && ua(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var r = m[h];
                    if (k !== k && r.key !== r.key || k === r.key) return {
                        id: l,
                        list: m,
                        index: h,
                        u: r
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                u: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = q(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(q([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var f = new n.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.u ? l.u.value = k : (l.u = {
                next: this.h,
                L: this.h.L,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.u), this.h.L.next = l.u, this.h.L = l.u, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.u && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.u.L.next = h.u.next, h.u.next.L = h.u.L, h.u.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.L = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).u
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).u) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[p(n.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function va(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[p(n.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    var wa = ha && "function" == typeof p(Object, "assign") ? p(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ua(d, e) && (a[e] = d[e])
        }
        return a
    };
    ja("Object.assign", function(a) {
        return a || wa
    }, "es6");
    ja("Set", function(a) {
        function b(c) {
            this.h = new n.Map;
            if (c) {
                c = q(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(q([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return p(this.h, "values").call(this.h)
        };
        b.prototype.keys = p(b.prototype,
            "values");
        b.prototype[p(n.Symbol, "iterator")] = p(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    ja("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var d = this.length,
                e = b.length;
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var f = 0; f < e && c < d;)
                if (this[c++] != b[f++]) return !1;
            return f >= e
        }
    }, "es6");
    ja("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    ja("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    ja("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return n.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return n.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var v = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = v, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
    }
    var Aa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ba = 0;

    function Ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Da(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ea(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea = Ca : Ea = Da;
        return Ea.apply(null, arguments)
    }

    function Fa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ga(a) {
        var b = ["__uspapi"],
            c = v;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function Ha(a) {
        return a
    };
    var Ia = (new Date).getTime();

    function Ja(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ka(a, b) {
        var c = 0;
        a = Ja(String(a)).split(".");
        b = Ja(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function La(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ma;
    a: {
        var Na = v.navigator;
        if (Na) {
            var Oa = Na.userAgent;
            if (Oa) {
                Ma = Oa;
                break a
            }
        }
        Ma = ""
    }

    function w(a) {
        return -1 != Ma.indexOf(a)
    };

    function Pa() {
        return w("Trident") || w("MSIE")
    }

    function Qa() {
        return (w("Chrome") || w("CriOS")) && !w("Edge")
    }

    function Ra(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[p(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Sa() {
        var a = Ma;
        if (Pa()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ra(b);
        return w("Opera") ? a(["Version", "Opera"]) :
            w("Edge") ? a(["Edge"]) : w("Edg/") ? a(["Edg"]) : Qa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ta(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ua(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Va(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Wa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Xa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ya(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Za(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    };

    function $a(a) {
        $a[" "](a);
        return a
    }
    $a[" "] = function() {};
    var ab = Pa();
    !w("Android") || Qa();
    Qa();
    !w("Safari") || Qa();
    var bb = {},
        cb = null;
    var db = "function" === typeof Uint8Array;

    function eb(a) {
        return null !== a && "object" === typeof a && a.constructor === Object
    }

    function fb(a, b) {
        if (null != a) return Array.isArray(a) || eb(a) ? gb(a, b) : b(a)
    }

    function gb(a, b) {
        if (Array.isArray(a)) {
            for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = fb(a[d], b);
            Array.isArray(a) && a.fb && hb(c);
            return c
        }
        c = {};
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = fb(a[d], b));
        return c
    }

    function jb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (db && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    if (!cb) {
                        cb = {};
                        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                            var f = c.concat(d[e].split(""));
                            bb[e] = f;
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g];
                                void 0 === cb[h] && (cb[h] = g)
                            }
                        }
                    }
                    b = bb[b];
                    c = Array(Math.floor(a.length / 3));
                    d = b[64] || "";
                    for (e = f = 0; f < a.length - 2; f += 3) {
                        var k = a[f],
                            l = a[f +
                                1];
                        h = a[f + 2];
                        g = b[k >> 2];
                        k = b[(k & 3) << 4 | l >> 4];
                        l = b[(l & 15) << 2 | h >> 6];
                        h = b[h & 63];
                        c[e++] = g + k + l + h
                    }
                    g = 0;
                    h = d;
                    switch (a.length - f) {
                        case 2:
                            g = a[f + 1], h = b[(g & 15) << 2] || d;
                        case 1:
                            a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                    }
                    a = c.join("")
                }
                return a;
            default:
                return a
        }
    }
    var kb = {
        fb: {
            value: !0,
            configurable: !0
        }
    };

    function hb(a) {
        Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, kb);
        return a
    }
    var lb;
    var mb;

    function nb(a, b) {
        mb = b;
        a = new a(b);
        mb = null;
        return a
    };

    function x(a, b, c) {
        var d = mb;
        mb = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.l = (d ? 0 : -1) - (this.constructor.vb || 0);
        this.h = null;
        this.i = a;
        a: {
            d = this.i.length;a = d - 1;
            if (d && (d = this.i[a], eb(d))) {
                this.m = a - this.l;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.l), this.j = null) : this.m = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++) a = c[b], a < this.m ? (a += this.l, (d = this.i[a]) ? hb(d) : this.i[a] = ob) : (pb(this), (d = this.j[a]) ? hb(d) : this.j[a] = ob)
    }
    var ob = Object.freeze(hb([]));

    function pb(a) {
        var b = a.m + a.l;
        a.i[b] || (a.j = a.i[b] = {})
    }

    function z(a, b, c) {
        return -1 === b ? null : (void 0 === c ? 0 : c) || b >= a.m ? a.j ? a.j[b] : void 0 : a.i[b + a.l]
    }

    function qb(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = z(a, b, c);
        null == d && (d = ob);
        d === ob && (d = hb([]), B(a, b, d, c));
        return d
    }

    function rb(a, b) {
        a = z(a, b);
        return null == a ? a : !!a
    }

    function C(a, b, c) {
        a = z(a, b);
        return null == a ? c : a
    }

    function sb(a, b, c) {
        a = rb(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }

    function tb(a, b, c) {
        a = z(a, b);
        a = null == a ? a : +a;
        return null == a ? void 0 === c ? 0 : c : a
    }

    function B(a, b, c, d) {
        (void 0 === d ? 0 : d) || b >= a.m ? (pb(a), a.j[b] = c) : a.i[b + a.l] = c;
        return a
    }

    function ub(a, b, c) {
        0 !== c ? B(a, b, c) : B(a, b, void 0);
        return a
    }

    function vb(a, b, c, d) {
        (c = wb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), B(a, c, void 0));
        return B(a, b, d)
    }

    function wb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != z(a, e) && (0 === c || B(a, c, void 0), c = e)
        }
        return c
    }

    function D(a, b, c) {
        if (-1 === c) return null;
        a.h || (a.h = {});
        if (!a.h[c]) {
            var d = z(a, c, !1);
            d && (a.h[c] = new b(d))
        }
        return a.h[c]
    }

    function F(a, b, c) {
        a.h || (a.h = {});
        var d = a.h[c];
        if (!d) {
            var e = qb(a, c);
            d = [];
            for (var f = 0; f < e.length; f++) d[f] = new b(e[f]);
            a.h[c] = d
        }
        return d
    }

    function xb(a, b, c) {
        var d = yb;
        a.h || (a.h = {});
        var e = c ? zb(c) : c;
        a.h[b] = c;
        return vb(a, b, d, e)
    }

    function Ab(a, b, c) {
        var d = void 0 === d ? !1 : d;
        if (c) {
            var e = hb([]);
            for (var f = 0; f < c.length; f++) e[f] = zb(c[f]);
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0), e = ob;
        return B(a, b, e, d)
    }
    x.prototype.toJSON = function() {
        var a = zb(this);
        return lb ? a : gb(a, jb)
    };

    function zb(a) {
        if (a.h)
            for (var b in a.h)
                if (Object.prototype.hasOwnProperty.call(a.h, b)) {
                    var c = a.h[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && zb(c[d]);
                    else c && zb(c)
                }
        return a.i
    }

    function Bb(a, b) {
        return jb(b)
    }

    function Cb(a) {
        lb = !0;
        try {
            return JSON.stringify(a.toJSON(), Bb)
        } finally {
            lb = !1
        }
    }

    function Db(a, b, c) {
        return wb(a, b) === c ? c : -1
    }

    function H(a, b, c) {
        return C(a, b, void 0 === c ? "" : c)
    }

    function Eb(a, b, c) {
        return C(a, Db(a, c, b), 0)
    }

    function Fb(a, b, c, d) {
        return D(a, b, Db(a, d, c))
    };

    function Gb(a) {
        x.call(this, a, -1, Hb)
    }
    t(Gb, x);

    function Ib(a) {
        x.call(this, a)
    }
    t(Ib, x);
    var Hb = [2, 3];

    function Jb(a, b) {
        this.i = a === Kb && b || "";
        this.h = Lb
    }
    var Lb = {},
        Kb = {};

    function Mb(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Nb(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Ob(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var Pb;

    function Qb(a, b) {
        this.h = b === Rb ? a : ""
    }

    function Sb(a, b) {
        a = Tb.exec(Ub(a).toString());
        var c = a[3] || "";
        return Vb(a[1] + Wb("?", a[2] || "", b) + Wb("#", c, void 0))
    }
    Qb.prototype.toString = function() {
        return this.h + ""
    };

    function Ub(a) {
        return a instanceof Qb && a.constructor === Qb ? a.h : "type_error:TrustedResourceUrl"
    }
    var Tb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Rb = {};

    function Vb(a) {
        if (void 0 === Pb) {
            var b = null;
            var c = v.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: Ha,
                        createScript: Ha,
                        createScriptURL: Ha
                    })
                } catch (d) {
                    v.console && v.console.error(d.message)
                }
                Pb = b
            } else Pb = b
        }
        a = (b = Pb) ? b.createScriptURL(a) : a;
        return new Qb(a, Rb)
    }

    function Wb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var Xb = {};

    function Yb() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var Zb;

    function $b() {
        var a, b;
        if (void 0 === Zb) try {
            Zb = null !== (b = null === (a = Yb()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null
        } catch (c) {
            Zb = null
        }
        return Zb
    };

    function ac() {}

    function bc(a) {
        this.h = a
    }
    t(bc, ac);
    bc.prototype.toString = function() {
        return this.h.toString()
    };

    function cc(a) {
        var b, c = null === (b = $b()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new bc(null !== c && void 0 !== c ? c : a, Xb)
    }

    function dc(a) {
        if (a instanceof bc) return a.h;
        throw Error("");
    };

    function ec(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (0 === c.length) return cc(a[0]);
        d = [a[0]];
        for (var e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return cc(d.join(""))
    };

    function fc(a) {
        return a instanceof ac ? dc(a) : Ub(a)
    };

    function gc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function hc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function ic(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function jc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function kc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function lc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function mc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function nc(a) {
        this.h = a || v.document || document
    }
    nc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function oc() {
        return !pc() && (w("iPod") || w("iPhone") || w("Android") || w("IEMobile"))
    }

    function pc() {
        return w("iPad") || w("Android") && !w("Mobile") || w("Silk")
    };
    var qc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        rc = /#|$/;

    function uc(a) {
        var b = a.search(rc),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
                c += 7
            }
            c = -1
        }
        if (0 > c) return null;
        d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        c += 7;
        return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, " "))
    };
    var vc = !1;

    function wc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    $a(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function xc(a, b) {
        var c = yc("SCRIPT", a);
        c.src = fc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        var e = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]");
        (d = e ? e.nonce || e.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function zc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Ac(a, b) {
        if (!Bc() && !Cc()) {
            var c = Math.random();
            if (c < b) return c = Dc(v), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Dc(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function Ec(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Fc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Cc = hc(function() {
        return Wa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Gc) || 1E-4 > Math.random()
    });

    function Hc(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function Ic(a, b, c) {
        a = Cc() ? null : Math.floor(1E3 * Dc(a));
        var d;
        if (d = null != a && b) a: {
            var e = String(a);
            try {
                if (b) {
                    b.setItem(c, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? a : null
    }
    var Bc = hc(function() {
        return Gc("MSIE")
    });

    function Gc(a) {
        return -1 != Ma.indexOf(a)
    }
    var Jc = /^([0-9.]+)px$/,
        Kc = /^(-?[0-9.]{1,30})$/;

    function Lc(a) {
        return Kc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function I(a) {
        return (a = Jc.exec(a)) ? +a[1] : null
    }

    function Mc(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var Nc = hc(function() {
        return oc() ? 2 : pc() ? 1 : 0
    });

    function Oc(a) {
        Ec({
            display: "none"
        }, function(b, c) {
            a.style.setProperty(c, b, "important")
        })
    }
    var Pc = [];

    function Qc() {
        var a = Pc;
        Pc = [];
        a = q(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function Rc(a, b) {
        b = void 0 === b ? window.document : b;
        0 != a.length && b.head && a.forEach(function(c) {
            if (c) {
                var d = b;
                d = void 0 === d ? window.document : d;
                if (c && d.head) {
                    var e = yc("META");
                    d.head.appendChild(e);
                    e.httpEquiv = "origin-trial";
                    e.content = c
                }
            }
        })
    }

    function Sc(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function Tc(a) {
        var b = Uc;
        "complete" === b.readyState || "interactive" === b.readyState ? (Pc.push(a), 1 == Pc.length && (n.Promise ? n.Promise.resolve().then(Qc) : window.setImmediate ? setImmediate(Qc) : setTimeout(Qc, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function yc(a, b) {
        b = void 0 === b ? document : b;
        a = String(a);
        var c;
        if (vc || "application/xhtml+xml" === (null == (c = b) ? void 0 : c.contentType)) a = a.toLowerCase();
        return b.createElement(a)
    };

    function Vc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = yc("IMG", a.document);
        if (c) {
            var e = function(f) {
                c && c(f);
                kc(d, "load", e);
                kc(d, "error", e)
            };
            jc(d, "load", e);
            jc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function Wc(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Ec(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        Xc(c)
    }

    function Xc(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Vc(b, a, null)
    };
    var Yc = null;
    var Uc = document,
        J = window;
    var Zc = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function $c(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function ad(a) {
        a = void 0 === a ? v : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function bd(a) {
        return (a = a || ad()) ? wc(a.master) ? a.master : null : null
    };

    function cd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function dd(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function ed() {
        var a = void 0 === a ? J : a;
        return "http:" === a.location.protocol
    }

    function fd(a) {
        var b = void 0 === b ? 1 : b;
        a = bd(ad(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function gd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var hd = !!window.google_async_iframe_id,
        id = hd && window.parent || window;

    function jd() {
        if (hd && !wc(id)) {
            var a = "." + Uc.domain;
            try {
                for (; 2 < a.split(".").length && !wc(id);) Uc.domain = a = a.substr(a.indexOf(".") + 1), id = window.parent
            } catch (b) {}
            wc(id) || (id = window)
        }
        return id
    }
    var kd = RegExp("(^| )adsbygoogle($| )");

    function ld() {
        var a = void 0 === a ? J : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function md(a) {
        a = a.top;
        return wc(a) ? a : null
    }

    function nd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var od = null;

    function pd(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        v.google_logging_queue || (c = !0, v.google_logging_queue = []);
        v.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == od) {
                od = !1;
                try {
                    var d = md(v);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (od = !0);
                    v.localStorage.getItem("google_logging") && (od = !0)
                } catch (e) {}
            }
            a = od
        }
        a && (d = v.document, a = new Jb(Kb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Vb(a instanceof Jb && a.constructor === Jb && a.h === Lb ? a.i : "type_error:Const"), xc(d, a))
    };

    function qd(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function rd(a) {
        return !!(a.error && a.meta && a.id)
    };
    var sd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function td(a, b) {
        this.h = a;
        this.i = b
    }

    function ud(a, b, c) {
        this.url = a;
        this.ba = b;
        this.La = !!c;
        this.depth = null
    };

    function vd() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function wd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function xd(a, b, c, d, e) {
        var f = [];
        Ec(a, function(g, h) {
            (g = yd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function yd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(yd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(xd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function zd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Ad(a) - c.length;
        if (0 > d) return "";
        a.h.sort(function(m, r) {
            return m - r
        });
        c = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = xd(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.j;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Ad(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function Bd(a) {
        this.i = a;
        this.h = Math.random()
    }

    function Cd(a, b) {
        0 <= b && 1 >= b && (a.h = b)
    }

    function Dd(a, b, c, d, e, f) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof vd) var g = c;
            else g = new vd, Ec(c, function(k, l) {
                var m = g,
                    r = m.l++;
                k = wd(l, k);
                m.h.push(r);
                m.i[r] = k
            });
            var h = zd(g, a.i, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? Vc(v, h, void 0 === f ? null : f) : Vc(v, h, null))
        } catch (k) {}
    };
    var Ed = null;

    function Fd() {
        if (null === Ed) {
            Ed = "";
            try {
                var a = "";
                try {
                    a = v.top.location.hash
                } catch (c) {
                    a = v.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ed = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Ed
    };

    function Gd() {
        var a = v.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Hd() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Id(a, b) {
        var c = Hd() || Gd();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Jd = v.performance,
        Kd = !!(Jd && Jd.mark && Jd.measure && Jd.clearMarks),
        Ld = hc(function() {
            var a;
            if (a = Kd) a = Fd(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Md(a) {
        this.events = [];
        this.i = a || v;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.h = Ld() || (null != b ? b : 1 > Math.random())
    }

    function Nd(a) {
        a.h = !1;
        a.events != a.i.google_js_reporting_queue && (Ld() && Ta(a.events, Od), a.events.length = 0)
    }

    function Od(a) {
        a && Jd && Ld() && (Jd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Jd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Md.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new Id(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Jd && Ld() && Jd.mark(b);
        return a
    };
    Md.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (Hd() || Gd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Jd && Ld() && Jd.mark(b);
            !this.h || 2048 < this.events.length || this.events.push(a)
        }
    };

    function Pd(a, b) {
        this.m = a;
        this.i = null;
        this.l = this.I;
        this.h = void 0 === b ? null : b;
        this.j = !1
    }
    aa = Pd.prototype;
    aa.Ra = function(a) {
        this.l = a
    };
    aa.sa = function(a) {
        this.i = a
    };
    aa.ta = function(a) {
        this.j = a
    };
    aa.ma = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                Od(d), b = this.l(a, new qd(h, {
                    message: Qd(h)
                }), void 0, c)
            } catch (k) {
                this.I(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    aa.Oa = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.ma(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    aa.I = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new vd;
            f.h.push(1);
            f.i[1] = wd("context", a);
            rd(b) || (b = new qd(b, {
                message: Qd(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = wd("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (sc) {}
            if (d) try {
                d(h)
            } catch (sc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = v;
            b = [];
            g = null;
            do {
                var k = d;
                if (wc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new ud(l || "", k));
                try {
                    d = k.parent
                } catch (sc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = v;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var r = b[m];
                    r.url || (r.url = k.location.ancestorOrigins[m - 1] || "", r.La = !0)
                }
            var u = new ud(v.location.href, v, !1);
            k = null;
            var y = b.length - 1;
            for (r = y; 0 <= r; --r) {
                var E = b[r];
                !k && sd.test(E.url) && (k = E);
                if (E.url && !E.La) {
                    u = E;
                    break
                }
            }
            E = null;
            var A = b.length && b[y].url;
            0 != u.depth && A && (E = b[y]);
            var G = new td(u, E);
            if (G.i) {
                var ta = G.i.url || "";
                f.h.push(4);
                f.i[4] = wd("top", ta)
            }
            var ib = {
                url: G.h.url || ""
            };
            if (G.h.url) {
                var tc = G.h.url.match(qc),
                    Of = tc[1],
                    Pf = tc[3],
                    Qf = tc[4];
                u = "";
                Of && (u += Of + ":");
                Pf && (u += "//", u += Pf, Qf && (u += ":" + Qf));
                var Rf = u
            } else Rf = "";
            ib = [ib, {
                url: Rf
            }];
            f.h.push(5);
            f.i[5] = ib;
            Dd(this.m, e, f, this.j, c)
        } catch (sc) {
            try {
                Dd(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Qd(sc),
                    url: G && G.h.url
                }, this.j, c)
            } catch (Lo) {}
        }
        return !0
    };

    function Qd(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };

    function K(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, K) : this.stack = Error().stack || ""
    }
    t(K, Error);

    function Rd(a) {
        return null !== a && void 0 !== a
    }

    function Sd(a, b) {
        if (!b(a)) throw Error(String(a));
    };

    function Td(a) {
        return "string" === typeof a
    }

    function Ud(a) {
        return void 0 === a
    };

    function Vd(a) {
        x.call(this, a, -1, Wd)
    }
    t(Vd, x);
    var Wd = [2, 8],
        Xd = [3, 4, 5],
        Yd = [6, 7];
    var Zd;
    Zd = {
        ub: 0,
        Ua: 3,
        Va: 4,
        Wa: 5
    };
    var $d = Zd.Ua,
        ae = Zd.Va,
        be = Zd.Wa;

    function ce(a) {
        return null != a ? !a : a
    }

    function de(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function ee(a, b) {
        var c = F(a, Vd, 2);
        if (!c.length) return fe(a, b);
        a = C(a, 1, 0);
        if (1 === a) return ce(ee(c[0], b));
        c = Va(c, function(d) {
            return function() {
                return ee(d, b)
            }
        });
        switch (a) {
            case 2:
                return de(c, !1);
            case 3:
                return de(c, !0)
        }
    }

    function fe(a, b) {
        var c = wb(a, Xd);
        a: {
            switch (c) {
                case $d:
                    var d = Eb(a, 3, Xd);
                    break a;
                case ae:
                    d = Eb(a, 4, Xd);
                    break a;
                case be:
                    d = Eb(a, 5, Xd);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ma(qb(a, 8)))
            } catch (f) {
                return
            }
            b = C(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = H(a, Db(a, Yd, 7), void 0);
            else a: {
                switch (c) {
                    case ae:
                        a = tb(a, Db(a, Yd, 6), void 0);
                        break a;
                    case be:
                        a = H(a, Db(a, Yd, 7), void 0);
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Ka(String(e),
                    a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return Td(a) && Td(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Ka(String(e), a);
                    case 11:
                        return null != e && 1 === Ka(String(e), a)
                }
            }
        }
    }

    function ge(a, b) {
        return !a || !(!b || !ee(a, b))
    };

    function he(a) {
        x.call(this, a, -1, ie)
    }
    t(he, x);
    var ie = [4];

    function je(a) {
        x.call(this, a)
    }
    t(je, x);

    function ke(a) {
        x.call(this, a, -1, le)
    }
    t(ke, x);
    var le = [5],
        me = [1, 2, 3, 6, 7];

    function ne(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        a.hb.apply(a, ma(c.map(function(e) {
            return function() {
                return {
                    rb: 4,
                    message: e()
                }
            }
        })))
    };

    function oe(a) {
        return function() {
            return Dc(window) <= a
        }
    }

    function pe(a) {
        return function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            try {
                return a.apply(this, c)
            } catch (e) {}
        }
    }

    function qe(a) {
        var b = [],
            c = {};
        a = q(a);
        for (var d = a.next(); !d.done; c = {
                oa: c.oa
            }, d = a.next()) c.oa = d.value, pe(function(e) {
            return function() {
                b.push(e.oa())
            }
        }(c))();
        return b
    }
    var re = pe(function(a) {
        var b = [],
            c = {};
        a = q(a);
        for (var d = a.next(); !d.done; c = {
                ca: c.ca
            }, d = a.next()) c.ca = d.value, pe(function(e) {
            return function() {
                b.push('[{"' + e.ca.rb + '":' + Cb(e.ca.message) + "}]")
            }
        }(c))();
        return "[[" + b.join(",") + "]]"
    });

    function se(a, b) {
        if (window.fetch) fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function te(a, b) {
        var c = void 0 === c ? se : c;
        this.j = a;
        this.m = void 0 === b ? 1E3 : b;
        this.l = c;
        this.i = [];
        this.h = null
    }
    te.prototype.hb = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d = this;
        pe(function() {
            if (d.j()) {
                d.i.push.apply(d.i, ma(qe(b)));
                var e = pe(function() {
                    var f = re(d.i);
                    d.l("https://pagead2.googlesyndication.com/pagead/ping?e=1", f);
                    d.i = [];
                    d.h = null
                });
                100 <= d.i.length ? (null !== d.h && window.clearTimeout(d.h), d.h = window.setTimeout(e, 0)) : null === d.h && (d.h = window.setTimeout(e, d.m))
            }
        })()
    };

    function ue(a) {
        x.call(this, a, -1, ve)
    }
    t(ue, x);

    function we(a, b) {
        var c = void 0 === c ? !1 : c;
        a.h || (a.h = {});
        var d = b ? zb(b) : b;
        a.h[1] = b;
        return B(a, 1, d, c)
    }

    function xe(a, b) {
        return Ab(a, 2, b)
    }

    function ye(a, b) {
        var c = void 0 === c ? !1 : c;
        return B(a, 4, hb(b || []), c)
    }

    function ze(a, b) {
        return Ab(a, 5, b)
    }

    function Ae(a) {
        x.call(this, a)
    }
    t(Ae, x);
    Ae.prototype.$ = function() {
        return C(this, 1, 0)
    };

    function Be(a, b) {
        return ub(a, 1, b)
    }

    function Ce(a, b) {
        return ub(a, 2, b)
    }

    function De(a) {
        x.call(this, a)
    }
    t(De, x);
    var ve = [2, 4, 5],
        Ee = [1, 2];

    function Fe(a) {
        x.call(this, a, -1, Ge)
    }
    t(Fe, x);

    function He(a, b) {
        return Ab(a, 2, b)
    }

    function Ie(a, b) {
        return Ab(a, 3, b)
    }

    function Je(a) {
        x.call(this, a)
    }
    t(Je, x);
    var Ge = [2, 3],
        Ke = [1, 2, 3, 4];

    function Le(a) {
        x.call(this, a)
    }
    t(Le, x);
    Le.prototype.getTagSessionCorrelator = function() {
        return C(this, 2, 0)
    };

    function Me(a) {
        var b = Sc(window);
        return ub(a, 2, b)
    }

    function Ne(a) {
        var b = new Le;
        return xb(b, 4, a)
    }

    function Oe(a) {
        var b = new Le;
        return xb(b, 7, a)
    }
    var yb = [4, 5, 7];

    function Pe(a, b, c) {
        var d = void 0 === d ? new te(hc(oe(0 < a ? 1 / a : 0)), b) : d;
        this.j = a;
        this.l = c;
        this.i = d;
        this.h = []
    }

    function Qe(a, b, c, d, e) {
        b = Ce(Be(new Ae, b), c);
        d = xe(we(ze(ye(new ue, d), e), b), a.h);
        var f = Ne(d);
        ne(a.i, function() {
            var g = Me(ub(f, 1, Date.now()));
            return ub(g, 6, a.j)
        });
        a.h.push(b);
        100 < a.h.length && a.h.shift()
    }

    function Re(a, b, c, d) {
        if (a.l) {
            b = Ie(He(new Fe, b), c);
            d && ub(b, 1, d);
            var e = Oe(b);
            ne(a.i, function() {
                var f = Me(ub(e, 1, Date.now()));
                return ub(f, 6, a.j)
            })
        }
    };

    function L(a) {
        var b = "ra";
        if (a.ra && a.hasOwnProperty(b)) return a.ra;
        b = new a;
        return a.ra = b
    };

    function Se() {
        var a = {};
        this.h = (a[$d] = {}, a[ae] = {}, a[be] = {}, a)
    };
    var Te = /^true$/.test("false");

    function Ue(a, b) {
        switch (b) {
            case 1:
                return Eb(a, 1, me);
            case 2:
                return Eb(a, 2, me);
            case 3:
                return Eb(a, 3, me);
            case 6:
                return Eb(a, 6, me);
            default:
                return null
        }
    }

    function Ve(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return sb(a, 1);
            case 7:
                return H(a, 3);
            case 2:
                return tb(a, 2);
            case 3:
                return H(a, 3);
            case 6:
                return qb(a, 4);
            default:
                return null
        }
    }
    var We = hc(function() {
        if (!Te) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Xe(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        L(Ye).j[e] = null != (g = null == (f = L(Ye).j[e]) ? void 0 : f.add(b)) ? g : (new n.Set).add(b);
        e = We();
        if (null != e[b]) return e[b];
        b = Ze(d)[b];
        if (!b) return c;
        b = new ke(b);
        b = $e(b);
        a = Ve(b, a);
        return null != a ? a : c
    }

    function $e(a) {
        var b = L(Se).h;
        if (b) {
            var c = Ya(F(a, je, 5), function(d) {
                return ge(D(d, Vd, 1), b)
            });
            if (c) return D(c, he, 2)
        }
        return D(a, he, 4)
    }

    function Ye() {
        this.h = {};
        this.l = [];
        this.j = {};
        this.i = {}
    }

    function af(a, b, c) {
        return !!Xe(1, a, void 0 === b ? !1 : b, c)
    }

    function bf(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Xe(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function cf(a, b, c) {
        return Xe(3, a, void 0 === b ? "" : b, c)
    }

    function df(a, b, c) {
        b = void 0 === b ? [] : b;
        return Xe(6, a, b, c)
    }

    function Ze(a) {
        return L(Ye).h[a] || (L(Ye).h[a] = {})
    }

    function ef(a, b) {
        var c = Ze(b);
        Ec(a, function(d, e) {
            return c[e] = d
        })
    }

    function ff(a, b, c, d) {
        var e = [],
            f = [];
        Ta(b, function(g) {
            var h = Ze(g);
            Ta(a, function(k) {
                var l = wb(k, me),
                    m = Ue(k, l);
                if (m) {
                    a: {
                        var r = new Je;
                        switch (l) {
                            case 1:
                                vb(r, 1, Ke, m);
                                break;
                            case 2:
                                vb(r, 2, Ke, m);
                                break;
                            case 3:
                                vb(r, 3, Ke, m);
                                break;
                            case 6:
                                vb(r, 4, Ke, m);
                                break;
                            default:
                                l = void 0;
                                break a
                        }
                        l = r
                    }
                    if (r = l) {
                        var u;
                        r = !(null == (u = L(Ye).j[g]) || !u.has(m))
                    }
                    r && e.push(l);
                    if (u = l) {
                        var y;
                        u = !(null == (y = L(Ye).i[g]) || !y.has(m))
                    }
                    u && f.push(l);
                    var E, A;L(Ye).i[g] = null != (A = null == (E = L(Ye).i[g]) ? void 0 : E.add(m)) ? A : (new n.Set).add(m);h[m] = k.toJSON()
                }
            })
        });
        (e.length || f.length) && Re(c, e, f, null != d ? d : void 0)
    }

    function gf(a, b) {
        var c = Ze(b);
        Ta(a, function(d) {
            var e = new ke(d),
                f = wb(e, me);
            (e = Ue(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function hf() {
        return Va(p(Object, "keys").call(Object, L(Ye).h), function(a) {
            return Number(a)
        })
    }

    function jf(a) {
        Za(L(Ye).l, a) || ef(Ze(4), a)
    };

    function M(a) {
        this.methodName = a
    }
    var kf = new M(1),
        lf = new M(16),
        mf = new M(15),
        nf = new M(2),
        of = new M(3),
        pf = new M(4),
        qf = new M(5),
        rf = new M(6),
        sf = new M(7),
        tf = new M(8),
        uf = new M(9),
        vf = new M(10),
        wf = new M(11),
        xf = new M(12),
        yf = new M(13),
        zf = new M(14);

    function N(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function Af(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function Bf(a) {
        N(qf, af, a);
        N(rf, bf, a);
        N(sf, cf, a);
        N(tf, df, a);
        N(yf, gf, a);
        N(mf, jf, a)
    }

    function Cf(a) {
        N(pf, function(b) {
            L(Se).h = b
        }, a);
        N(uf, function(b, c) {
            var d = L(Se);
            d.h[$d][b] || (d.h[$d][b] = c)
        }, a);
        N(vf, function(b, c) {
            var d = L(Se);
            d.h[ae][b] || (d.h[ae][b] = c)
        }, a);
        N(wf, function(b, c) {
            var d = L(Se);
            d.h[be][b] || (d.h[be][b] = c)
        }, a);
        N(zf, function(b) {
            for (var c = L(Se), d = q([$d, ae, be]), e = d.next(); !e.done; e = d.next()) e = e.value, p(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function Df(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Ef() {
        this.l = function() {};
        this.j = function() {};
        this.i = function() {};
        this.h = function() {
            return []
        }
    }

    function Ff(a, b, c) {
        a.l = Af(kf, b, function() {});
        a.i = function(d) {
            Af(nf, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return Af( of , b, function() {
                return []
            })(c)
        };
        a.j = function(d) {
            Af(lf, b, function() {})(d, c)
        }
    };
    var Gf, Hf, If = jd(),
        Jf = new Md(If);

    function Kf(a) {
        null != a && (If.google_measure_js_timing = a);
        If.google_measure_js_timing || Nd(Jf)
    }(function(a) {
        Gf = null != a ? a : new Bd(ed() ? "http:" : "https:");
        "number" !== typeof If.google_srt && (If.google_srt = Math.random());
        Cd(Gf, If.google_srt);
        Hf = new Pd(Gf, Jf);
        Hf.sa(function() {});
        Hf.ta(!0);
        "complete" == If.document.readyState ? Kf() : Jf.h && jc(If, "load", function() {
            Kf()
        })
    })();

    function Lf(a, b, c) {
        return Hf.ma(a, b, c)
    }

    function Mf(a, b) {
        return Hf.Oa(a, b, void 0, void 0)
    }

    function Nf(a, b, c) {
        var d = L(Ef).h();
        !b.eid && d.length && (b.eid = d.toString());
        Dd(Gf, a, b, !0, c, void 0)
    }

    function Sf(a) {
        return function(b) {
            Hf.I(a, b instanceof Error ? b : Error(b), void 0, void 0)
        }
    }

    function Tf(a, b, c, d) {
        var e;
        rd(b) ? e = b.msg || Qd(b.error) : e = Qd(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof qd ? b.error : b, c.pbr || (c.pbr = !0, Hf.I(a, b, .1, d, "puberror")), !1) : Hf.I(a, b, c, d)
    };
    var Uf = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function Vf() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Wf
    }

    function Xf(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Wf) : a.google_reactive_ads_global_state = new Vf;
        return a.google_reactive_ads_global_state
    }

    function Wf() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Yf(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function O(a) {
        return Yf(a).clientWidth
    };
    ab || !w("Safari") || Qa();

    function Zf() {
        this.i = new $f(this);
        this.h = 0
    }
    Zf.prototype.resolve = function(a) {
        ag(this);
        this.h = 1;
        this.l = a;
        bg(this.i)
    };
    Zf.prototype.reject = function(a) {
        ag(this);
        this.h = 2;
        this.j = a;
        bg(this.i)
    };

    function ag(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function $f(a) {
        this.h = a
    }
    $f.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        bg(this)
    };

    function bg(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function cg(a) {
        this.h = a.slice(0)
    }
    cg.prototype.apply = function(a) {
        return new cg(a(this.h.slice(0)))
    };
    cg.prototype.get = function(a) {
        return this.h[a]
    };
    cg.prototype.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new cg(b)
    };

    function dg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function eg() {
        this.h = {};
        this.i = {}
    }
    eg.prototype.set = function(a, b) {
        var c = fg(a);
        this.h[c] = b;
        this.i[c] = a
    };
    eg.prototype.get = function(a, b) {
        a = fg(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    eg.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function fg(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    };

    function gg(a, b) {
        this.h = a;
        this.i = b
    }

    function hg(a) {
        return null != a.h ? a.h.value : null
    }

    function ig(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    gg.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof gg ? a : jg(a)) : this
    };

    function kg(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function jg(a) {
        return new gg({
            value: a
        }, null)
    }

    function lg(a) {
        return new gg(null, a)
    }

    function mg(a) {
        try {
            return jg(a())
        } catch (b) {
            return lg(b)
        }
    };

    function ng(a) {
        this.h = new eg;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    ng.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    ng.prototype.contains = function(a) {
        return void 0 !== this.h.h[fg(a)]
    };

    function og() {
        this.h = new eg
    }
    og.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new ng, this.h.set(a, c));
        c.add(b)
    };

    function pg(a) {
        x.call(this, a, -1, qg)
    }
    t(pg, x);
    pg.prototype.getId = function() {
        return z(this, 3)
    };
    var qg = [4];

    function rg(a) {
        var b = void 0 === a.Ha ? void 0 : a.Ha,
            c = void 0 === a.bb ? void 0 : a.bb,
            d = void 0 === a.Qa ? void 0 : a.Qa;
        this.h = void 0 === a.Ya ? void 0 : a.Ya;
        this.l = new cg(b || []);
        this.j = d;
        this.i = c
    };

    function sg(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            U: "a",
            Z: tg(c)
        });
        null != a.h && b.push({
            U: "as",
            Z: a.h
        });
        null != a.i && b.push({
            U: "i",
            Z: String(a.i)
        });
        null != a.j && b.push({
            U: "rp",
            Z: String(a.j)
        });
        b.sort(function(d, e) {
            return d.U.localeCompare(e.U)
        });
        b.unshift({
            U: "t",
            Z: "aa"
        });
        return b
    }

    function tg(a) {
        a = a.h.slice(0).map(ug);
        a = JSON.stringify(a);
        return Fc(a)
    }

    function ug(a) {
        var b = {};
        null != z(a, 7) && (b.q = z(a, 7));
        null != z(a, 2) && (b.o = z(a, 2));
        null != z(a, 5) && (b.p = z(a, 5));
        return b
    };

    function vg(a) {
        x.call(this, a)
    }
    t(vg, x);
    vg.prototype.setLocation = function(a) {
        return B(this, 1, a)
    };

    function wg(a, b) {
        this.Ja = a;
        this.Pa = b
    }

    function xg(a) {
        var b = [].slice.call(arguments).filter(gc(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ja || []);
            d = p(Object, "assign").call(Object, d, e.Pa)
        });
        return new wg(c, d)
    }

    function yg(a) {
        switch (a) {
            case 1:
                return new wg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new wg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new wg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new wg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function zg(a) {
        if (null == a) a = null;
        else {
            var b = sg(a);
            a = [];
            b = q(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.Z);
                a.push(c.U + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new wg(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var Ag = {},
        Bg = new wg(["google-auto-placed"], (Ag.google_reactive_ad_format = 40, Ag.google_tag_origin = "qs", Ag));

    function Cg(a) {
        x.call(this, a)
    }
    t(Cg, x);

    function Dg(a) {
        x.call(this, a)
    }
    t(Dg, x);
    Dg.prototype.getName = function() {
        return z(this, 4)
    };

    function Eg(a) {
        x.call(this, a)
    }
    t(Eg, x);

    function Fg(a) {
        x.call(this, a)
    }
    t(Fg, x);

    function Gg(a) {
        x.call(this, a)
    }
    t(Gg, x);
    var Hg = [1, 2, 3];

    function Ig(a) {
        x.call(this, a)
    }
    t(Ig, x);

    function Jg(a) {
        x.call(this, a, -1, Kg)
    }
    t(Jg, x);
    var Kg = [6, 7, 9, 10, 11];

    function Lg(a) {
        x.call(this, a, -1, Mg)
    }
    t(Lg, x);

    function Ng(a) {
        x.call(this, a)
    }
    t(Ng, x);

    function Og(a) {
        x.call(this, a)
    }
    t(Og, x);
    var Mg = [1],
        Pg = [1, 2];

    function Qg(a) {
        x.call(this, a, -1, Rg)
    }
    t(Qg, x);

    function Sg(a) {
        x.call(this, a)
    }
    t(Sg, x);

    function Tg(a) {
        x.call(this, a, -1, Ug)
    }
    t(Tg, x);

    function Vg(a) {
        x.call(this, a)
    }
    t(Vg, x);

    function Wg(a) {
        x.call(this, a)
    }
    t(Wg, x);

    function Xg(a) {
        x.call(this, a)
    }
    t(Xg, x);

    function Yg(a) {
        x.call(this, a)
    }
    t(Yg, x);
    var Rg = [1, 2, 5, 7],
        Ug = [2, 5, 6, 11];

    function Zg(a) {
        x.call(this, a)
    }
    t(Zg, x);

    function $g(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function ah(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        $g(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function P(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function Q(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function bh(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var ch = new P(1084),
        dh = new P(1082),
        eh = new Q(62, .001),
        fh = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        gh = new Q(1114, 1),
        hh = new Q(1110),
        ih = new Q(1111),
        jh = new Q(1112),
        kh = new Q(1113),
        lh = new Q(1104),
        mh = new Q(1108),
        nh = new Q(1106),
        oh = new Q(1107),
        ph = new Q(1105),
        qh = new Q(1115, 1),
        rh = new Q(1077),
        sh = new P(316),
        th = new P(313),
        uh = new P(369),
        vh = new P(1093),
        wh = new Q(1098),
        xh = new P(1026),
        yh = new P(1090),
        zh = new P(1053),
        Ah = new P(1100),
        Bh = new P(1109),
        Ch = new Q(1046),
        Dh = new P(1092, !0),
        Eh = new P(1102),
        Fh =
        new P(218),
        Gh = new P(216),
        Hh = new P(217),
        Ih = new P(1101),
        Jh = new P(227),
        Kh = new P(208),
        Lh = new P(282),
        Mh = new P(1086),
        Nh = new Q(1079, 5),
        Oh = new P(251),
        Ph = new bh(1939),
        Qh = new bh(1934, ["A/OOU4XAFfeAV4kM4+W9WBwNAHqq/bvtrRcJ1wpnNyO/i076BSUy1d14l2kBEgVmEuvxojSpD23172C6hBg2AQYAAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "AwrB+XVH/KV6HfZNVtSEqlUJi3yUbtCp0/TJRj+38NDIw19/9P1h7ECTtdLdhIzG0Bsl4n/0rVmttJtGUCcewgAAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "Ax15QOERqai2A5XWrDY38Eg07xh2T0pkhpDPJuDlxr7D2Ka8wHvklgK7tTPZOnT+8H31lwHto5JpvYV8jRn1WgIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
        ]),
        Rh = new P(203),
        Sh = new P(241),
        Th = new P(84),
        Uh = new Q(1929, 50),
        Vh = new Q(1905),
        Wh = new P(1956),
        Xh = new P(240),
        Yh = new P(1928),
        Zh = new P(1941),
        $h = new P(370946349),
        ai = new P(392736476),
        bi = new P(379841917),
        ci =
        new P(397079674),
        di = new bh(1932, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        ei = new P(396382471, !0),
        fi = new P(393546021),
        gi = new P(401243724),
        hi = new Q(1935),
        ii = new P(398305417);

    function ji() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    }

    function R(a) {
        return L(ji).i(a.h, a.defaultValue)
    }

    function S(a) {
        return L(ji).j(a.h, a.defaultValue)
    }

    function ki() {
        return L(ji).l(fh.h, fh.defaultValue)
    };

    function li(a, b, c) {
        function d(f) {
            f = mi(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = mi(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: ni(a.previousSibling, e),
                    ha: function(f) {
                        return ni(f.previousSibling, e)
                    },
                    la: 0
                };
            case 2:
                return {
                    init: ni(a.lastChild, e),
                    ha: function(f) {
                        return ni(f.previousSibling, e)
                    },
                    la: 0
                };
            case 3:
                return {
                    init: ni(a.nextSibling, d),
                    ha: function(f) {
                        return ni(f.nextSibling, d)
                    },
                    la: 3
                };
            case 1:
                return {
                    init: ni(a.firstChild, d),
                    ha: function(f) {
                        return ni(f.nextSibling, d)
                    },
                    la: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function mi(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function ni(a, b) {
        return a && b(a) ? a : null
    };
    var oi = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function pi(a, b) {
        do {
            var c = zc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function qi(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = I(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function ri(a, b) {
        return !((Kc.test(b.google_ad_width) || Jc.test(a.style.width)) && (Kc.test(b.google_ad_height) || Jc.test(a.style.height)))
    }

    function si(a, b) {
        return (a = ti(a, b)) ? a.y : 0
    }

    function ti(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function ui(a) {
        var b = 0,
            c;
        for (c in oi) - 1 != a.indexOf(c) && (b |= oi[c]);
        return b
    }

    function vi(a, b, c, d, e) {
        if (a.top != a) return md(a) ? 3 : 16;
        if (!(488 > O(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = O(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = O(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = zc(b, a)) && (e = I(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function wi(a, b, c, d) {
        var e = vi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || pi(c, b) ? (b = O(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function xi(a, b, c) {
        a = a.style;
        "rtl" == b ? R(Oh) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : R(Oh) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
    }

    function yi(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = zc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function zi(a, b, c) {
        a = ti(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Ai(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = zc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            xi(b, c, "0px");
            b.style.width = O(a) + "px";
            if (0 !== zi(a, b, c)) {
                xi(b, c, "0px");
                var d = zi(a, b, c);
                xi(b, c, -1 * d + "px");
                a = zi(a, b, c);
                0 !== a && a !== d && xi(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function T(a, b) {
        this.l = a;
        this.j = b
    }
    T.prototype.minWidth = function() {
        return this.l
    };
    T.prototype.height = function() {
        return this.j
    };
    T.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    T.prototype.i = function() {};

    function Bi(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = zc(a, b)) && e[c] && d(e[c]) || null
    }

    function Ci(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Di(a, b, c, d) {
        var e = a && Ei(c, b),
            f = Fi(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Gi(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Ei(a, b) {
        return si(a, b) < Yf(b).clientHeight - 100
    }

    function Hi(a, b) {
        var c = Bi(b, a, "height", I);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Bi(b, a, "height", I);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && I(b.style.height)) && (c = Math.min(c, d)), (d = Bi(b, a, "maxHeight", I)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Fi(a, b) {
        var c = 0 == gd(a);
        return b && c ? Math.max(250, 2 * Yf(a).clientHeight / 3) : 250
    };

    function Ii(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = lc(d.wb);
            a[e] = d.value
        }
    };

    function Ji(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function Ki(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (g) {}
        if (!c.length) return [];
        b = c;
        c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d
        } else b = [];
        b = Li(a, b);
        "number" === typeof a.i && (c = a.i, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.j) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = Mi(b[d]);
                var f = a.j;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    Ji.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function Li(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function Mi(a) {
        var b = [];
        dg(a.getElementsByTagName("p"), function(c) {
            100 <= Ni(c) && b.push(c)
        });
        return b
    }

    function Ni(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        dg(a.childNodes, function(c) {
            b += Ni(c)
        });
        return b
    }

    function Oi(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Pi(a) {
        if (!a) return null;
        var b = z(a, 7);
        if (z(a, 1) || a.getId() || 0 < qb(a, 4).length) {
            var c = a.getId();
            b = qb(a, 4);
            var d = z(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Oi(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Oi(b[c]);
            a = (b = e) ? new Ji(b, z(a, 2), z(a, 5), Qi(z(a, 6))) : null
        } else a = b ? new Ji(b, z(a, 2), z(a, 5), Qi(z(a, 6))) : null;
        return a
    }
    var Ri = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Qi(a) {
        return null == a ? a : Ri[a]
    }
    var Si = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Ti(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Ui(a) {
        a = Ti(a);
        return a.optimization = a.optimization || {}
    };

    function Vi(a) {
        switch (z(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = D(a, pg, 1), null == b ? b = null : (a = z(a, 2), b = null == a ? null : new rg({
                    Ha: [b],
                    Qa: a
                }));
                return null != b ? jg(b) : lg(Error("Missing dimension when creating placement id"));
            case 3:
                return lg(Error("Missing dimension when creating placement id"));
            default:
                return lg(Error("Invalid type: " + z(a, 8)))
        }
    };

    function Wi(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function Xi(a, b) {
        this.i = a;
        this.h = b
    }

    function Yi(a, b) {
        var c = new og,
            d = new ng;
        b.forEach(function(e) {
            if (Fb(e, Eg, 1, Hg)) {
                e = Fb(e, Eg, 1, Hg);
                if (D(e, Cg, 1) && D(D(e, Cg, 1), pg, 1) && D(e, Cg, 2) && D(D(e, Cg, 2), pg, 1)) {
                    var f = Zi(a, D(D(e, Cg, 1), pg, 1)),
                        g = Zi(a, D(D(e, Cg, 2), pg, 1));
                    if (f && g)
                        for (f = q(Wi({
                                anchor: f,
                                position: z(D(e, Cg, 1), 2)
                            }, {
                                anchor: g,
                                position: z(D(e, Cg, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(za(g.anchor), g.position)
                }
                D(e, Cg, 3) && D(D(e, Cg, 3), pg, 1) && (f = Zi(a, D(D(e, Cg, 3), pg, 1))) && c.set(za(f), z(D(e, Cg, 3), 2))
            } else Fb(e, Fg, 2, Hg) ? $i(a, Fb(e, Fg, 2, Hg),
                c) : Fb(e, Gg, 3, Hg) && aj(a, Fb(e, Gg, 3, Hg), d)
        });
        return new Xi(c, d)
    }

    function $i(a, b, c) {
        D(b, pg, 1) && (a = bj(a, D(b, pg, 1))) && a.forEach(function(d) {
            d = za(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function aj(a, b, c) {
        D(b, pg, 1) && (a = bj(a, D(b, pg, 1))) && a.forEach(function(d) {
            c.add(za(d))
        })
    }

    function Zi(a, b) {
        return (a = bj(a, b)) && 0 < a.length ? a[0] : null
    }

    function bj(a, b) {
        return (b = Pi(b)) ? Ki(b, a) : null
    };

    function cj(a, b) {
        if (!a) return !1;
        a = zc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function dj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function ej(a) {
        return !!a.nextSibling || !!a.parentNode && ej(a.parentNode)
    };

    function fj(a) {
        var b = {};
        a && qb(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function gj(a, b, c, d, e) {
        this.h = a;
        this.A = b;
        this.j = c;
        this.m = e || null;
        this.v = (this.D = d) ? Yi(a.document, F(d, Dg, 5)) : Yi(a.document, []);
        this.i = 0;
        this.l = !1
    }

    function hj(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = F(a.j, Jg, 1);
        a.i = 0;
        var d = fj(a.D);
        try {
            var e = a.h.localStorage.getItem("google_ama_settings");
            var f = e ? nb(Zg, e ? JSON.parse(e) : null) : null
        } catch (m) {
            f = null
        }
        if (null !== f && sb(f, 2, !1)) return Ti(a.h).eatf = !0, pd(7, [!0, 0, !1]), !0;
        f = new ng([2]);
        for (e = 0; e < c.length; e++) {
            var g = a;
            var h = c[e],
                k = e,
                l = b;
            if (!D(h, vg, 4) || !f.contains(z(D(h, vg, 4), 1)) || 1 !== z(h, 8) || h && null != z(h, 4) && d[z(D(h, vg, 4), 2)]) g = null;
            else {
                g.i++;
                if (h = ij(g, h, l, d)) l = Ti(g.h), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0),
                    null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
                        index: k,
                        element: h.fa
                    }), pd(7, [!1, g.i, !0]);
                g = h
            }
            if (g) return !0
        }
        pd(7, [!1, a.i, !1]);
        return !1
    }

    function ij(a, b, c, d) {
        if (b && null != z(b, 4) && d[z(D(b, vg, 4), 2)] || 1 != z(b, 8)) return null;
        d = D(b, pg, 1);
        if (!d) return null;
        d = Pi(d);
        if (!d) return null;
        d = Ki(d, a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Si[z(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = cj(dj(d), f);
                        break a;
                    case 3:
                        f = cj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = cj(g ? 1 == g.nodeType ? g : dj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !ej(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !$g(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c =
                f)) {
            c = a.v;
            f = z(b, 2);
            g = za(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(za(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(za(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (c) return null;
        c = D(b, Ig, 3);
        f = {};
        c && (f.Ta = z(c, 1), f.Ia = z(c, 2), f.$a = !!rb(c, 3));
        c = D(b, vg, 4) && z(D(b, vg, 4), 2) ? z(D(b, vg, 4), 2) : null;
        c = yg(c);
        g = null == z(b, 12) ? null : z(b, 12);
        g = null == g ? null : new wg(null, {
            google_ml_rank: g
        });
        b = jj(a, b);
        b = xg(a.m, c, g, b);
        c = a.h;
        a = a.A;
        var h = c.document,
            k = f.$a || !1;
        g = mc((new nc(h)).h, "DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.jb && Ii(k, f.jb);
        h = mc((new nc(h)).h, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Ta && (k.marginTop = f.Ta);
        f.Ia && (k.marginBottom = f.Ia);
        f.Xa && Ii(k, f.Xa);
        g.appendChild(h);
        f = {
            qa: g,
            fa: h
        };
        f.fa.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ja) f.qa.className = h.join(" ");
        h = f.fa;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client",
            a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.qa;
                var r = void 0 === r ? 0 : r;
                if (R(th)) {
                    r = void 0 === r ? 0 : r;
                    var u = li(d, e, r);
                    if (u.init) {
                        var y = u.init;
                        for (d = y; d = u.ha(d);) y = d;
                        var E = {
                            anchor: y,
                            position: u.la
                        }
                    } else E = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = r;
                    ah(m, E.anchor, E.position)
                } else ah(m, d, e);
                b: {
                    var A = f.fa;A.setAttribute("data-adsbygoogle-status", "reserved");A.className += " adsbygoogle-noablate";m = {
                        element: A
                    };
                    var G = b && b.Pa;
                    if (A.hasAttribute("data-pub-vars")) {
                        try {
                            G = JSON.parse(A.getAttribute("data-pub-vars"))
                        } catch (ta) {
                            break b
                        }
                        A.removeAttribute("data-pub-vars")
                    }
                    G &&
                    (m.params = G);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (ta) {
                (A = f.qa) && A.parentNode && (G = A.parentNode, G.removeChild(A), $g(G) && (G.style.display = G.getAttribute("data-init-display") || "none"));
                A = !1;
                break a
            }
            A = !0
        }
        return A ? f : null
    }

    function jj(a, b) {
        return hg(kg(Vi(b).map(zg), function(c) {
            Ti(a.h).exception = c
        }))
    };

    function kj(a) {
        if (R(sh)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? nb(Qg, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function lj(a) {
        x.call(this, a)
    }
    t(lj, x);

    function mj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? mg(function() {
            return nb(lj, c ? JSON.parse(c) : null)
        }) : jg(null)
    };

    function nj() {
        this.S = {}
    }

    function oj() {
        if (pj) return pj;
        var a = bd() || jd(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? pj = b : a.google_persistent_state_async = pj = new nj
    }

    function qj(a) {
        return rj[a] || "google_ps_" + a
    }

    function sj(a, b, c) {
        b = qj(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var pj = null,
        tj = {},
        rj = (tj[8] = "google_prev_ad_formats_by_region", tj[9] = "google_prev_ad_slotnames_by_region", tj);

    function uj(a) {
        this.h = a || {
            cookie: ""
        }
    }
    uj.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.xb;
            d = c.yb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.gb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    uj.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ja(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    uj.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    uj.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ja(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            gb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function vj(a) {
        x.call(this, a)
    }
    t(vj, x);

    function wj(a) {
        var b = new vj;
        return B(b, 5, a)
    };

    function xj() {
        this.v = this.v;
        this.D = this.D
    }
    xj.prototype.v = !1;
    xj.prototype.j = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function yj(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function zj(a, b) {
        b = void 0 === b ? 500 : b;
        xj.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.H = 0;
        this.A = b;
        this.l = null
    }
    t(zj, xj);
    zj.prototype.j = function() {
        this.m = {};
        this.l && (kc(this.h, "message", this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        xj.prototype.j.call(this)
    };

    function Aj(a) {
        return "function" === typeof a.h.__tcfapi || null != Bj(a)
    }
    zj.prototype.addEventListener = function(a) {
        function b(f, g) {
            clearTimeout(e);
            f ? (c = f, c.internalErrorState = yj(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        }
        var c = {},
            d = ic(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.A && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.A));
        try {
            Cj(this, "addEventListener", b)
        } catch (f) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
                e = 0), d()
        }
    };
    zj.prototype.removeEventListener = function(a) {
        a && a.listenerId && Cj(this, "removeEventListener", null, a.listenerId)
    };

    function Cj(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (Bj(a)) {
            Dj(a);
            var e = ++a.H;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Bj(a) {
        if (a.i) return a.i;
        a.i = Mc(a.h, "__tcfapiLocator");
        return a.i
    }

    function Dj(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, jc(a.h, "message", a.l))
    };

    function Ej(a) {
        var b = a.ba,
            c = a.Sa,
            d = a.Za;
        a = Fj({
            ba: b,
            ka: a.ka,
            ia: void 0 === a.ia ? !1 : a.ia,
            ja: void 0 === a.ja ? !1 : a.ja
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Gj(b, c).then(function(e) {
            return e.map(Hj)
        }).then(function(e) {
            return e.map(function(f) {
                return Ij(b, f)
            })
        }).then(d)
    }

    function Fj(a) {
        var b = a.ba,
            c = a.ka,
            d = void 0 === a.ia ? !1 : a.ia;
        if (!(a = !(void 0 === a.ja ? 0 : a.ja) && Aj(new zj(b)))) {
            if (d = !d) {
                if (c) {
                    c = mj(b);
                    if (null == c.h) Hf.I(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != z(c, 1)) b: switch (c = z(c, 1), c) {
                        case 1:
                            c = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                    } else c = !1;
                    c = !c
                }
                d = c
            }
            a = d
        }
        if (!a) return Ij(b, wj(!0));
        c = oj();
        return (c = sj(c, 24, void 0)) ? Ij(b, Hj(c)) : lg(Error("tcunav"))
    }

    function Gj(a, b) {
        return n.Promise.race([Jj(), Kj(a, b)])
    }

    function Jj() {
        return (new n.Promise(function(a) {
            var b = oj();
            a = {
                resolve: a
            };
            var c = sj(b, 25, []);
            c.push(a);
            b.S[qj(25)] = c
        })).then(Lj)
    }

    function Kj(a, b) {
        return new n.Promise(function(c) {
            a.setTimeout(c, b, lg(Error("tcto")))
        })
    }

    function Lj(a) {
        return a ? jg(a) : lg(Error("tcnull"))
    }

    function Hj(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = yj(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                            void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && ((R(Wh) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return wj(a)
    }

    function Ij(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (rb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? jg(b) : lg(Error("unav"))
    };

    function Mj(a) {
        this.exception = a
    }

    function Nj(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    Nj.prototype.start = function() {
        this.l()
    };
    Nj.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    hj(this.h, !0);
                    Oj(this);
                    break;
                default:
                    hj(this.h, !1) ? Oj(this) : this.j.setTimeout(Ea(this.l, this), 100)
            }
        } catch (a) {
            Oj(this, a)
        }
    };

    function Oj(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            Ti(e.h);
            F(e.j, Jg, 1);
            d.call(c, new Mj(b))
        } catch (f) {
            a.i.reject(f)
        }
    };

    function Pj(a) {
        x.call(this, a, -1, Qj)
    }
    t(Pj, x);
    var Qj = [6];

    function Rj(a) {
        x.call(this, a)
    }
    t(Rj, x);

    function Sj(a) {
        x.call(this, a)
    }
    t(Sj, x);

    function Tj(a) {
        x.call(this, a)
    }
    t(Tj, x);

    function Uj(a) {
        a = (new uj(a)).get("FCCDCF", "");
        try {
            return a ? nb(Rj, a ? JSON.parse(a) : null) : null
        } catch (b) {
            return null
        }
    };

    function Vj(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var d = yc("IFRAME", c);
                    d.style.display = "none";
                    d.style.width = "0px";
                    d.style.height = "0px";
                    d.style.border = "none";
                    d.style.zIndex = "-1000";
                    d.style.left = "-1000px";
                    d.style.top = "-1000px";
                    d.name = "__uspapiLocator";
                    c.body.appendChild(d)
                } else a.setTimeout(b, 5)
        }
        var c = a.document;
        b()
    };

    function Wj(a) {
        this.h = a;
        this.i = a.document;
        this.j = (a = (a = Uj(this.i)) ? D(a, Tj, 5) || null : null) ? z(a, 2) : null;
        (a = Uj(this.i)) && D(a, Sj, 4);
        (a = Uj(this.i)) && D(a, Sj, 4)
    }

    function Xj() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new Wj(a), Yj(a))
    }

    function Yj(a) {
        !a.j || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Vj(a.h), Ga(function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.l.apply(a, ma(c))
        }))
    }
    Wj.prototype.l = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.j
        }, !0)
    };

    function Zj(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function ak(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function bk(a, b) {
        a = ak(Zj(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Fc(a),
            d = ck(a);
        return p(b, "find").call(b, function(e) {
            var f = null != z(e, 7) ? z(D(e, Vg, 7), 1) : z(e, 1);
            e = null != z(e, 7) ? z(D(e, Vg, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function ck(a) {
        for (var b = {};;) {
            b[Fc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var dk = {},
        ek = (dk.google_ad_channel = !0, dk.google_ad_host = !0, dk);

    function fk(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Nf("ama", b, .01)
    }

    function gk(a) {
        var b = {};
        Ec(ek, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function hk(a) {
        a = D(a, Sg, 3);
        return !a || z(a, 1) <= Date.now() ? !1 : !0
    }

    function ik(a) {
        return (a = kj(a)) ? hk(a) ? a : null : null
    }

    function jk(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            fk(a, {
                lserr: 1
            })
        }
    };

    function kk(a) {
        fk(a, {
            atf: 1
        })
    }

    function lk(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        fk(a, {
            atf: 0
        })
    };

    function U(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function mk(a) {
        a = U(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ga: !0,
            qb: b,
            pa: a.ablation_viewport_offset
        } : null
    }

    function nk(a, b) {
        a = U(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function ok(a, b) {
        a = U(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function pk(a) {
        U(J).allow_second_reactive_tag = a
    }

    function qk() {
        var a = U(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };
    var V = {},
        rk = (V.google_ad_channel = !0, V.google_ad_client = !0, V.google_ad_host = !0, V.google_ad_host_channel = !0, V.google_adtest = !0, V.google_tag_for_child_directed_treatment = !0, V.google_tag_for_under_age_of_consent = !0, V.google_tag_partner = !0, V.google_restrict_data_processing = !0, V.google_page_url = !0, V.google_debug_params = !0, V.google_adbreak_test = !0, V.google_ad_frequency_hint = !0, V.google_admob_interstitial_slot = !0, V.google_admob_rewarded_slot = !0, V.google_max_ad_content_rating = !0, V);

    function sk(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = tk(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function tk(a) {
        var b = "";
        cd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function uk() {
        var a = this;
        this.promise = new n.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function vk() {
        var a = new uk;
        this.promise = a.promise;
        this.resolve = a.resolve
    }

    function wk(a) {
        v.google_llp || (v.google_llp = {});
        var b = v.google_llp;
        b[7] || (b[7] = new vk, a && a());
        return b[7]
    }

    function xk(a) {
        return wk(function() {
            xc(v.document, a)
        }).promise
    };

    function yk(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function zk(a) {
        if (v.google_apltlad || v.top != v || !a.google_ad_client) return null;
        v.google_apltlad = !0;
        var b = yk(a.google_ad_client),
            c = b.enable_page_level_ads;
        Ec(a, function(d, e) {
            rk[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    }

    function Ak(a) {
        return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Bk(a, b) {
        this.h = v;
        this.j = a;
        this.i = b
    }

    function Ck(a) {
        Ej({
            ba: a.h,
            ka: a.i,
            Sa: 50,
            Za: function(b) {
                return Dk(a, b)
            }
        })
    }

    function Dk(a, b) {
        kg(ig(b, function(c) {
            Ek("ok");
            Fk(a.h, a.j, c)
        }), function(c) {
            return Ek(c.message)
        })
    }

    function Ek(a) {
        Nf("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function Fk(a, b, c) {
        if (!U(J).ama_ran_on_page) {
            var d = ik(c);
            if (d) {
                if (null != z(d, 24)) {
                    c = Ui(a);
                    c.availableAbg = !0;
                    var e, f;
                    c.ablationFromStorage = !!(null == (e = D(d, Lg, 24)) ? 0 : null == (f = D(e, Ng, 3)) ? 0 : Fb(f, Og, 2, Pg))
                }
                if (Ak(b) && (e = bk(a, F(d, Tg, 7)), !e || !rb(e, 8))) return;
                U(J).ama_ran_on_page = !0;
                var g;
                if (null == (g = D(d, Yg, 15)) ? 0 : rb(g, 23)) U(a).enable_overlap_observer = !0;
                if ((g = D(d, Wg, 13)) && 1 === z(g, 1)) {
                    var h = 0,
                        k = D(g, Xg, 6);
                    k && z(k, 3) && (h = z(k, 3) || 0);
                    ok(a, h)
                } else if (null == (h = D(d, Lg, 24)) ? 0 : null == (k = D(h, Ng, 3)) ? 0 : Fb(k, Og, 2, Pg)) Ui(a).ablatingThisPageview = !0, ok(a, 1);
                pd(3, [d.toJSON()]);
                var l = b.google_ad_client || "";
                b = gk(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
                var m = xg(Bg, new wg(null, b));
                Lf(782, function() {
                    var r = m;
                    try {
                        var u = bk(a, F(d, Tg, 7)),
                            y;
                        if (y = u) a: {
                            var E = qb(u, 2);
                            if (E)
                                for (var A = 0; A < E.length; A++)
                                    if (1 == E[A]) {
                                        y = !0;
                                        break a
                                    }
                            y = !1
                        }
                        if (y) {
                            if (z(u, 4)) {
                                y = {};
                                var G = new wg(null, (y.google_package = z(u, 4), y));
                                r = xg(r, G)
                            }
                            var ta = new gj(a, l, d, u, r),
                                ib = new Zf;
                            (new Nj(a, ta, ib)).start();
                            ib.i.then(Fa(kk, a), Fa(lk, a))
                        }
                    } catch (tc) {
                        fk(a, {
                            atf: -1
                        })
                    }
                })
            } else jk(a, c)
        }
    };

    function Gk(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };

    function W(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        T.call(this, a, b);
        this.aa = c;
        this.eb = d
    }
    t(W, T);
    W.prototype.na = function() {
        return this.aa
    };
    W.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function Hk(a) {
        return function(b) {
            return !!(b.aa & a)
        }
    };
    var Ik = $a("script");

    function Jk(a, b, c, d, e, f, g, h, k, l, m, r) {
        this.v = a;
        this.R = b;
        this.aa = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.O = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.H = void 0 === h ? null : h;
        this.M = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.N = void 0 === r ? null : r;
        this.P = this.A = this.D = null
    }
    Jk.prototype.size = function() {
        return this.R
    };

    function Kk(a, b, c) {
        null != a.aa && (c.google_responsive_formats = a.aa);
        null != a.O && (c.google_safe_for_responsive_override = a.O);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.H && (c.gfwroml = a.H);
        null != a.M && (c.gfwromr = a.M);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.N && (c.gfwroz = a.N);
        null != a.D && (c.gml = a.D);
        null != a.A && (c.gmr = a.A);
        null != a.P && (c.gzi = a.P);
        b = jd();
        b = md(b) || b;
        sk(b.location, "google_responsive_dummy_ad") &&
            (Za([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + Ik + ">window.top.postMessage('" + a + "', '*');\n          </" + Ik + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    /* 
     
     Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
     
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
     
          http://www.apache.org/licenses/LICENSE-2.0 
     
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS-IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
    var Lk = {},
        Mk = (Lk.image_stacked = 1 / 1.91, Lk.image_sidebyside = 1 / 3.82, Lk.mobile_banner_image_sidebyside = 1 / 3.82, Lk.pub_control_image_stacked = 1 / 1.91, Lk.pub_control_image_sidebyside = 1 / 3.82, Lk.pub_control_image_card_stacked = 1 / 1.91, Lk.pub_control_image_card_sidebyside = 1 / 3.74, Lk.pub_control_text = 0, Lk.pub_control_text_card = 0, Lk),
        Nk = {},
        Ok = (Nk.image_stacked = 80, Nk.image_sidebyside = 0, Nk.mobile_banner_image_sidebyside = 0, Nk.pub_control_image_stacked = 80, Nk.pub_control_image_sidebyside = 0, Nk.pub_control_image_card_stacked =
            85, Nk.pub_control_image_card_sidebyside = 0, Nk.pub_control_text = 80, Nk.pub_control_text_card = 80, Nk),
        Pk = {},
        Qk = (Pk.pub_control_image_stacked = 100, Pk.pub_control_image_sidebyside = 200, Pk.pub_control_image_card_stacked = 150, Pk.pub_control_image_card_sidebyside = 250, Pk.pub_control_text = 100, Pk.pub_control_text_card = 150, Pk);

    function Rk(a) {
        var b = 0;
        a.K && b++;
        a.F && b++;
        a.G && b++;
        if (3 > b) return {
            J: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.K.split(",");
        var c = a.G.split(",");
        a = a.F.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            J: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            J: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (isNaN(g) || 0 === g) return {
                J: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {
                J: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            G: d,
            F: e,
            Na: b
        }
    }

    function Sk(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Tk = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Uk(a, b) {
        T.call(this, a, b)
    }
    t(Uk, T);
    Uk.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Vk(a, b) {
        Wk(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new Jk(9, new Uk(a, Math.floor(a * b.google_phwr)));
        var c = oc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Mk.mobile_banner_image_sidebyside + Ok.mobile_banner_image_sidebyside) + 96), a = {
            X: a,
            V: c,
            F: 1,
            G: 12,
            K: "mobile_banner_image_sidebyside"
        }) : (a = Sk(a), a = {
            X: a.width,
            V: a.height,
            F: 1,
            G: 13,
            K: "image_sidebyside"
        }) : (a = Sk(a), a = {
            X: a.width,
            V: a.height,
            F: 4,
            G: 2,
            K: "image_stacked"
        });
        Xk(b, a);
        return new Jk(9, new Uk(a.X, a.V))
    }

    function Yk(a, b) {
        Wk(a, b);
        var c = Rk({
            G: b.google_content_recommendation_rows_num,
            F: b.google_content_recommendation_columns_num,
            K: b.google_content_recommendation_ui_type
        });
        if (c.J) a = {
            X: 0,
            V: 0,
            F: 0,
            G: 0,
            K: "image_stacked",
            J: c.J
        };
        else {
            var d = 2 === c.Na.length && 468 <= a ? 1 : 0;
            var e = c.Na[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Qk[e];
            for (var g = c.F[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.G[d];
            d = Math.floor(((a - 8 * f - 8) / f * Mk[e] + Ok[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    ua: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    ua: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = a.ua ? {
                X: 0,
                V: 0,
                F: 0,
                G: 0,
                K: e,
                J: a.ua
            } : {
                X: a.width,
                V: a.height,
                F: f,
                G: c,
                K: e
            }
        }
        if (a.J) throw new K(a.J);
        Xk(b, a);
        return new Jk(9, new Uk(a.X, a.V))
    }

    function Wk(a, b) {
        if (0 >= a) throw new K("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Xk(a, b) {
        a.google_content_recommendation_ui_type = b.K;
        a.google_content_recommendation_columns_num = b.F;
        a.google_content_recommendation_rows_num = b.G
    };

    function Zk(a, b) {
        T.call(this, a, b)
    }
    t(Zk, T);
    Zk.prototype.h = function() {
        return this.minWidth()
    };
    Zk.prototype.i = function(a, b, c) {
        Ai(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var $k = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function al(a, b) {
        T.call(this, a, b)
    }
    t(al, T);
    al.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function bl(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = vi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = O(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && yi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Ai(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new K("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new K("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new Jk(11, new T(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new K("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new K("Invalid height: height=" + f);
            if (50 > f) throw new K("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new K("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Jk(11, new T(a, f))
        }
        d = $k[f];
        if (!d) throw new K("Invalid data-ad-layout value: " + f);
        c = Ei(c, b);
        b = O(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new Jk(11, "in-article" == f ? new al(a, b) : new T(a, b))
    };

    function cl(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function dl(a, b) {
        for (var c = el.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var X = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
        el = [X[6], X[12], X[3], X[0], X[7], X[14], X[1], X[8], X[10], X[4], X[15], X[2], X[11], X[5], X[13], X[9], X[16]];

    function fl(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            B: a,
            C: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || gl(b) || e.google_ad_resize ? (b = wi(a, c, d, e), c = !0 !== b ? {
            B: a,
            C: b
        } : {
            B: O(c) || a,
            C: !0
        }) : c = {
            B: a,
            C: 2
        };
        b = c.C;
        return !0 !== b ? {
            B: a,
            C: b
        } : d.parentElement ? {
            B: c.B,
            C: b
        } : {
            B: a,
            C: b
        }
    }

    function hl(a, b, c, d, e) {
        var f = Lf(247, function() {
                return fl(a, b, c, d, e)
            }),
            g = f.B;
        f = f.C;
        var h = !0 === f,
            k = I(d.style.width),
            l = I(d.style.height),
            m = il(g, b, c, d, e, h);
        g = m.W;
        h = m.T;
        var r = m.na;
        m = m.Ma;
        var u = jl(b, r),
            y, E = (y = Bi(d, c, "marginLeft", I)) ? y + "px" : "",
            A = (y = Bi(d, c, "marginRight", I)) ? y + "px" : "";
        y = Bi(d, c, "zIndex") || "";
        return new Jk(u, g, r, null, m, f, h, E, A, l, k, y)
    }

    function gl(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function il(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, O(c)) ? 4 : 3 : ui(b);
        var g = !1,
            h = !1;
        if (488 > O(c)) {
            var k = pi(d, c);
            var l = Ei(d, c);
            g = !l && k;
            h = l && k
        }
        l = [Ci(a), Hk(b)];
        l.push(Di(488 > O(c), c, d, h));
        null != e.google_max_responsive_height && l.push(Gi(e.google_max_responsive_height));
        var m = [function(u) {
            return !u.eb
        }];
        if (g || h) g = Hi(c, d), m.push(Gi(g));
        var r = dl(cl(l), cl(m));
        if (!r) throw new K("No slot size for availableWidth=" + a);
        l = Lf(248, function() {
            var u;
            a: if (f) {
                if (e.gfwrnh && (u = I(e.gfwrnh))) {
                    u = {
                        W: new Zk(a, u),
                        T: !0
                    };
                    break a
                }
                u =
                    a / 1.2;
                var y = Math;
                var E = y.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var A = Infinity;
                else {
                    A = d;
                    var G = Infinity;
                    do {
                        var ta = Bi(A, c, "height", I);
                        ta && (G = Math.min(G, ta));
                        (ta = Bi(A, c, "maxHeight", I)) && (G = Math.min(G, ta))
                    } while ((A = A.parentElement) && "HTML" != A.tagName);
                    A = G
                }
                y = E.call(y, u, A);
                if (y < .5 * u || 100 > y) y = u;
                R(Lh) && !Ei(d, c) && (y = Math.max(y, .5 * Yf(c).clientHeight));
                u = {
                    W: new Zk(a, Math.floor(y)),
                    T: y < u ? 102 : !0
                }
            } else u = {
                W: r,
                T: 100
            };
            return u
        });
        g = l.W;
        l = l.T;
        return "in-article" === e.google_ad_layout &&
            kl(c) ? {
                W: ll(a, c, d, g, e),
                T: !1,
                na: b,
                Ma: k
            } : {
                W: g,
                T: l,
                na: b,
                Ma: k
            }
    }

    function jl(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function ll(a, b, c, d, e) {
        var f = e.google_ad_height || Bi(c, b, "height", I);
        b = bl(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new W(b.minWidth(), b.height(), 1) : d
    }

    function kl(a) {
        return R(Jh) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function ml(a, b, c, d, e) {
        var f;
        (f = O(b)) ? 488 > O(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Ai(b, c), f = {
            B: f,
            C: !0
        }) : f = {
            B: a,
            C: 5
        } : f = {
            B: a,
            C: 4
        }: f = {
            B: a,
            C: 10
        };
        var g = f;
        f = g.B;
        g = g.C;
        if (!0 !== g || a == f) return new Jk(12, new T(a, d), null, null, !0, g, 100);
        a = il(f, "auto", b, c, e, !0);
        return new Jk(1, a.W, a.na, 2, !0, g, a.T)
    };

    function nl(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = q(Tk), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (gl(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = R(Kh) || R(Jh) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (ol(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return ol(b), 1
    }

    function pl(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Bi(b, d, "width", I) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = ql(a, e, b, c, d)) ? f : hl(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        Kk(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function ql(a, b, c, d, e) {
        var f = d.google_ad_height || Bi(c, e, "height", I);
        switch (a) {
            case 5:
                return f = Lf(247, function() {
                    return fl(b, d.google_ad_format, e, c, d)
                }), a = f.B, f = f.C, !0 === f && b != a && Ai(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Vk(a, d);
            case 9:
                return Yk(b, d);
            case 8:
                return bl(b, e, c, f, d);
            case 10:
                return ml(b, e, c, f, d)
        }
    }

    function ol(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function rl(a, b) {
        var c = md(b);
        if (c) {
            c = O(c);
            var d = zc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var sl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        tl = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
        ul = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        vl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        wl = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
        xl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
            "/show_ads_impl_with_ama", ".js"
        ]),
        yl = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
        zl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]),
        Al = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);

    function Bl(a) {
        x.call(this, a)
    }
    t(Bl, x);

    function Cl(a) {
        x.call(this, a, -1, Dl)
    }
    t(Cl, x);
    var Dl = [1];

    function El(a) {
        x.call(this, a, -1, Fl)
    }
    t(El, x);
    El.prototype.getId = function() {
        return C(this, 1, 0)
    };
    El.prototype.$ = function() {
        return C(this, 7, 0)
    };
    var Fl = [2];

    function Gl(a) {
        x.call(this, a, -1, Hl)
    }
    t(Gl, x);
    Gl.prototype.$ = function() {
        return C(this, 5, 0)
    };
    var Hl = [2];

    function Il(a) {
        x.call(this, a, -1, Jl)
    }
    t(Il, x);

    function Kl(a) {
        x.call(this, a, -1, Ll)
    }
    t(Kl, x);
    Kl.prototype.$ = function() {
        return C(this, 1, 0)
    };

    function Ml(a) {
        x.call(this, a)
    }
    t(Ml, x);
    var Jl = [1, 4, 2, 3],
        Ll = [2];

    function Nl(a) {
        x.call(this, a)
    }
    t(Nl, x);
    var Ol = [13, 14];
    var Pl = void 0;

    function Ql() {
        Sd(Pl, Rd);
        return Pl
    }

    function Rl(a) {
        Sd(Pl, Ud);
        Pl = a
    };

    function Sl(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? null : d;
        return Tl(a, c, function(e) {
            return Wa(F(e, Ib, 2), function(f) {
                return z(f, 1) === b
            })
        }) ? !0 : 1 === b ? Ul(c, d) : !1
    }

    function Ul(a, b) {
        return b ? 13 === wb(b, Ol) ? sb(Fb(b, Bl, 13, Ol), 1) : 14 === wb(b, Ol) && "" !== a && H(b, 7) === a ? sb(D(Fb(b, Cl, 14, Ol), Bl, 2), 1) : !1 : !1
    }

    function Vl(a, b) {
        b = C(b, 18, 0); - 1 !== b && (a.tmod = b)
    }

    function Wl(a) {
        var b = void 0 === b ? "" : b;
        var c = md(J) || J;
        return Xl(c, a) ? !0 : Tl(J, b, function(d) {
            return Wa(qb(d, 3), function(e) {
                return e === a
            })
        })
    }

    function Yl(a) {
        return Tl(v, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function Xl(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Za(a.split(","), b.toString())
    }

    function Tl(a, b, c) {
        a = md(a) || a;
        var d = Zl(a);
        b && (b = nd(String(b)));
        return Nb(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function Zl(a) {
        a = $l(a);
        var b = {};
        cd(a, function(c, d) {
            try {
                var e = new Gb(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function $l(a) {
        return R(dh) ? (a = Fj({
            ba: a,
            ka: Ql()
        }), null != a.h ? (am("ok"), a = bm(a.h.value)) : (am(a.i.message), a = {}), a) : bm(a.localStorage)
    }

    function bm(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Mb(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function am(a) {
        R(ch) && Nf("abg_adsensesettings_lserr", {
            s: a,
            g: R(dh),
            c: Ql(),
            r: .01
        }, .01)
    };

    function cm(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function dm(a) {
        var b = J.document;
        if (b.currentScript) return cm(b.currentScript, a);
        b = q(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === cm(c.value, a)) return 0;
        return 1
    };

    function em(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[$d] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return Sl(J, Number(g))
        }, c[24] = function(g) {
            return Wl(Number(g))
        }, c[61] = function() {
            return sb(b, 6)
        }, c[63] = function() {
            return sb(b, 6) || ".google.ch" === H(b, 8)
        }, c), f[ae] = (d[7] = function(g) {
                try {
                    var h = window.localStorage
                } catch (m) {
                    h = null
                }
                var k = Number(g);
                g = window;
                k = void 0 === k ? 0 : k;
                k = 0 != k ? "google_experiment_mod" + k : "google_experiment_mod";
                var l = Hc(h, k);
                h = null === l ? Ic(g, h, k) : l;
                return null !== h && void 0 !== h ? h : void 0
            },
            d), f[be] = (e[6] = function() {
            return H(b, 15)
        }, e), f
    };

    function fm(a) {
        a = void 0 === a ? v : a;
        return a.ggeac || (a.ggeac = {})
    };

    function gm(a, b) {
        try {
            var c = a.split(".");
            a = v;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function hm() {
        var a = {};
        this[$d] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Za(L(Ef).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = gm(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!v.document.querySelector(b)
            } catch (c) {}
        }, a);
        a = {};
        this[ae] =
            (a[3] = function() {
                return Nc()
            }, a[6] = function(b) {
                b = gm(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = v;
                b = void 0 === b ? "" : b;
                c = void 0 === c ? window : c;
                b = (c = (c = c.location.href.match(qc)[3] || null) ? decodeURI(c) : c) ? Fc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
        a = {};
        this[be] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = gm(b, "string");
            return void 0 !== b ? b : void 0
        }, a)
    };
    var im = [12, 13, 20];

    function jm() {}
    jm.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.Ka ? !1 : d.Ka,
            g = void 0 === d.ib ? {} : d.ib;
        d = void 0 === d.kb ? [] : d.kb;
        this.l = a;
        this.v = {};
        this.D = f;
        this.m = g;
        a = {};
        this.h = (a[b] = [], a[4] = [], a);
        this.j = {};
        (b = Fd()) && Ta(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.j[h] = !0)
        });
        Ta(d, function(h) {
            e.j[h] = !0
        });
        this.i = c;
        return this
    };

    function km(a, b, c) {
        if (a.v[b]) return .001 >= Math.random() && Wc({
            b: c,
            dp: b
        }, "tagging_dupdiv"), !0;
        a.v[b] = !0;
        return !1
    }

    function lm(a, b, c) {
        var d = [],
            e = mm(a.l, b);
        if (9 !== b && km(a, b, c) || !e.length) {
            var f;
            null == (f = a.i) || Qe(f, b, c, d, []);
            return d
        }
        var g = Za(im, b),
            h = [];
        Ta(e, function(l) {
            var m = new De;
            if (l = nm(a, l, c, m)) 0 !== wb(m, Ee) && h.push(m), m = l.getId(), d.push(m), om(a, m, g ? 4 : c), (l = F(l, ke, 2)) && (g ? ff(l, hf(), a.i, m) : ff(l, [c], a.i, m))
        });
        var k;
        null == (k = a.i) || Qe(k, b, c, d, h);
        return d
    }

    function om(a, b, c) {
        a.h[c] || (a.h[c] = []);
        a = a.h[c];
        Za(a, b) ? Wc({
            eids: JSON.stringify(a),
            dup: b
        }, "gpt_dupeid") : a.push(b)
    }

    function pm(a, b) {
        a.l.push.apply(a.l, ma(Ua(Va(b, function(c) {
            return new Kl(c)
        }), function(c) {
            return !Za(im, c.$())
        })))
    }

    function nm(a, b, c, d) {
        var e = L(Se).h;
        if (!ge(D(b, Vd, 3), e)) return null;
        var f = F(b, El, 2),
            g = f.length * C(b, 1, 0),
            h = C(b, 6, 0);
        if (h) {
            vb(d, 1, Ee, h);
            g = e[ae];
            switch (c) {
                case 2:
                    var k = g[8];
                    break;
                case 1:
                    k = g[7]
            }
            c = void 0;
            if (k) try {
                c = k(h), ub(d, 3, c)
            } catch (l) {}
            return (b = qm(b, c)) ? rm(a, [b], 1) : null
        }
        if (h = C(b, 10, 0)) {
            vb(d, 2, Ee, h);
            g = null;
            switch (c) {
                case 1:
                    g = e[ae][9];
                    break;
                case 2:
                    g = e[ae][10];
                    break;
                default:
                    return null
            }
            c = g ? g(String(h)) : void 0;
            if (void 0 === c && 1 === C(b, 11, 0)) return null;
            void 0 !== c && ub(d, 3, c);
            return (b = qm(b, c)) ? rm(a, [b], 1) :
                null
        }
        d = e ? Ua(f, function(l) {
            return ge(D(l, Vd, 3), e)
        }) : f;
        return d.length ? (b = C(b, 4, 0)) ? sm(a, b, g, d) : rm(a, d, g / 1E3) : null
    }

    function sm(a, b, c, d) {
        var e = null != a.m[b] ? a.m[b] : 1E3;
        if (0 >= e) return null;
        d = rm(a, d, c / e);
        a.m[b] = d ? 0 : e - c;
        return d
    }

    function rm(a, b, c) {
        var d = a.j,
            e = Xa(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.D ? null : Ac(b, c)
    }

    function tm(a, b) {
        N(kf, function(c) {
            a.j[c] = !0
        }, b);
        N(nf, function(c, d) {
            return lm(a, c, d)
        }, b);
        N( of , function(c) {
            return (a.h[c] || []).concat(a.h[4])
        }, b);
        N(xf, function(c) {
            return pm(a, c)
        }, b);
        N(lf, function(c, d) {
            return om(a, c, d)
        }, b)
    }

    function mm(a, b) {
        return (a = Xa(a, function(c) {
            return c.$() == b
        })) && F(a, Gl, 2) || []
    }

    function qm(a, b) {
        var c = F(a, El, 2),
            d = c.length,
            e = C(a, 8, 0);
        a = d * C(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Dc(window));
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = L(Se).h;
        return !c || e && !ge(D(c, Vd, 3), e) ? null : c
    };

    function um() {
        this.h = function() {}
    }

    function vm(a) {
        L(um).h(a)
    };
    var wm, xm, ym, zm, Am, Bm;

    function Cm(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? fm() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new Pe(null != (zm = null == (wm = D(a, Ml, 5)) ? void 0 : C(wm, 2, 0)) ? zm : 0, null != (Am = null == (xm = D(a, Ml, 5)) ? void 0 : C(xm, 4, 0)) ? Am : 0, null != (Bm = null == (ym = D(a, Ml, 5)) ? void 0 : sb(ym, 3)) ? Bm : !1) : f;
        d.hasOwnProperty("init-done") ? (Af(xf, d)(Va(F(a, Kl, 2), function(g) {
            return g.toJSON()
        })), Af(yf, d)(Va(F(a, ke, 1), function(g) {
            return g.toJSON()
        }), e), b && Af(zf, d)(b), Dm(d, e)) : (tm(L(jm).init(F(a, Kl, 2), e, f, c), d), Bf(d), Cf(d), Df(d), Dm(d, e), ff(F(a, ke, 1), [e], f),
            Te = Te || !(!c || !c.cb), vm(L(hm)), b && vm(b))
    }

    function Dm(a, b) {
        a = void 0 === a ? fm() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        Ff(L(Ef), c, d);
        Em(a, b);
        L(um).h = Af(zf, a);
        L(ji).m()
    }

    function Em(a, b) {
        var c = L(ji);
        c.i = function(d, e) {
            return Af(qf, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Af(rf, a, function() {
                return 0
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Af(sf, a, function() {
                return ""
            })(d, e, b)
        };
        c.h = function(d, e) {
            return Af(tf, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            Af(mf, a)(b)
        }
    };

    function Fm(a, b, c) {
        var d = U(a);
        if (d.plle) Dm(fm(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == Hc(d, "goog_pem_mod") && Ic(a, d, "goog_pem_mod");
            d = D(b, Il, 12);
            e = sb(b, 9);
            Cm(d, em(c, b), {
                Ka: e && !!a.google_disable_experiments,
                cb: e
            }, fm(a));
            if (c = H(b, 15)) c = Number(c), L(Ef).l(c);
            if (b = H(b, 10)) b = Number(b), L(Ef).j(b);
            L(Ef).i(12);
            L(Ef).i(10);
            a = md(a) || a;
            sk(a.location, "google_mc_lab") && L(Ef).j(44738307)
        }
    };
    var Gm, Hm, Im = new Md(v);
    (function(a) {
        Gm = a || new Bd("https:");
        "number" !== typeof v.google_srt && (v.google_srt = Math.random());
        Cd(Gm, v.google_srt);
        Hm = new Pd(Gm, Im);
        Hm.ta(!0);
        "complete" == v.document.readyState ? v.google_measure_js_timing || Nd(Im) : Im.h && jc(v, "load", function() {
            v.google_measure_js_timing || Nd(Im)
        })
    })();

    function Jm(a, b) {
        a.sa(function(c) {
            c.shv = String(b);
            c.mjsv = "m202110250101";
            var d = L(Ef).h(),
                e = U(v);
            e.eids || (e.eids = []);
            c.eid = d.concat(e.eids).join(",")
        })
    };

    function Km(a) {
        var b = a.lb;
        return a.ab || ("dev" === b ? "dev" : "")
    };
    var Lm = {},
        Mm = (Lm.google_ad_modifications = !0, Lm.google_analytics_domain_name = !0, Lm.google_analytics_uacct = !0, Lm.google_pause_ad_requests = !0, Lm.google_user_agent_client_hint = !0, Lm);

    function Nm(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function Om(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function Pm(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };
    var Qm = "undefined" === typeof sttc ? void 0 : sttc;

    function Rm(a) {
        var b = Hf;
        try {
            return Sd(a, Td), new Nl(JSON.parse(a))
        } catch (c) {
            b.I(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new Nl
    };
    var Sm = L(ji).h(Ph.h, Ph.defaultValue);

    function Tm() {
        var a = J.document;
        a = void 0 === a ? window.document : a;
        Rc(Sm, a)
    };
    var Um = L(ji).h(Qh.h, Qh.defaultValue);

    function Vm() {
        var a = J.document;
        a = void 0 === a ? window.document : a;
        Rc(Um, a)
    };
    var Wm = la(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function Xm() {
        this.h = null;
        this.j = !1;
        this.l = Math.random();
        this.i = this.I;
        this.m = null
    }
    aa = Xm.prototype;
    aa.sa = function(a) {
        this.h = a
    };
    aa.ta = function(a) {
        this.j = a
    };
    aa.Ra = function(a) {
        this.i = a
    };
    aa.I = function(a, b, c, d, e) {
        if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        rd(b) || (b = new qd(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        v.google_js_errors = v.google_js_errors || [];
        v.google_js_errors.push(b);
        if (!v.error_rep_loaded) {
            a = ec(Wm);
            var f;
            xc(v.document, null != (f = this.m) ? f : Vb(fc(a).toString()));
            v.error_rep_loaded = !0
        }
        return !1
    };
    aa.ma = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.i(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    aa.Oa = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.ma(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };

    function Ym(a, b, c) {
        var d = window;
        return function() {
            var e = Hd(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (Hd() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function Zm(a, b) {
        return Ym(a, b, function(c, d) {
            (new Xm).I(c, d)
        })
    };

    function $m(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function an(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function bn() {
        var a = new n.Set;
        try {
            if ("undefined" === typeof googletag || !googletag.pubads) return a;
            for (var b = googletag.pubads(), c = q(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId())
        } catch (e) {}
        return a
    }

    function cn(a) {
        a = a.id;
        return null != a && (bn().has(a) || p(a, "startsWith").call(a, "google_ads_iframe_") || p(a, "startsWith").call(a, "aswift"))
    }

    function dn(a, b, c) {
        if (!a.sources) return !1;
        var d = S(Uh);
        switch (en(a)) {
            case 2:
                var e = fn(a);
                if (e) return c.some(function(g) {
                    return gn(e, g, d)
                });
            case 1:
                var f = hn(a);
                if (f) return b.some(function(g) {
                    return gn(f, g, d)
                })
        }
        return !1
    }

    function en(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function hn(a) {
        return jn(a, function(b) {
            return b.currentRect
        })
    }

    function fn(a) {
        return jn(a, function(b) {
            return b.previousRect
        })
    }

    function jn(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function kn() {
        xj.call(this);
        this.i = this.h = this.O = this.N = this.H = 0;
        this.Ca = this.za = Number.NEGATIVE_INFINITY;
        this.va = this.xa = this.ya = this.Aa = this.Fa = this.m = this.Ea = this.R = 0;
        this.wa = !1;
        this.P = this.M = this.A = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Da = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.Ba = !1;
        this.ea = function() {}
    }
    t(kn, xj);

    function ln() {
        var a = new kn;
        if (R(Rh) && !window.google_plmetrics && window.PerformanceObserver) {
            window.google_plmetrics = !0;
            for (var b = q(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, mn(a).observe({
                type: c,
                buffered: !R(Xh)
            });
            nn(a)
        }
    }

    function mn(a) {
        a.l || (a.l = new PerformanceObserver(Zm(640, function(b) {
            var c = on !== window.scrollX || pn !== window.scrollY ? [] : qn,
                d = rn();
            b = q(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput && (!R(Sh) || .01 < e.value)) {
                        f.H += Number(e.value);
                        Number(e.value) > f.N && (f.N = Number(e.value));
                        f.O += 1;
                        var g = dn(e, c, d);
                        g && (f.m += e.value, f.Aa++);
                        if (5E3 < e.startTime - f.za || 1E3 < e.startTime - f.Ca) f.za = e.startTime, f.h = 0, f.i = 0;
                        f.Ca = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.R && (f.R = f.h, f.Fa = f.i, f.Ea = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.ya = Math.floor(e.renderTime || e.loadTime);
                    a.xa = e.size;
                    break;
                case "first-input":
                    a.va = Number((e.processingStart - e.startTime).toFixed(3));
                    a.wa = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.A += e, a.M = Math.max(a.M, e), a.P += 1
            }
        })));
        return a.l
    }

    function nn(a) {
        var b = Zm(641, function() {
                var f = document;
                2 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && sn(a)
            }),
            c = Zm(641, function() {
                return void sn(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        var d = S(Vh),
            e;
        0 < d && (e = setTimeout(c, 1E3 * d));
        a.ea = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            mn(a).disconnect();
            e && clearTimeout(e)
        }
    }
    kn.prototype.j = function() {
        xj.prototype.j.call(this);
        this.ea()
    };

    function sn(a) {
        if (!a.Ba) {
            a.Ba = !0;
            mn(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += an("cls", a.H), b += an("mls", a.N), b += $m("nls", a.O), window.LayoutShiftAttribution && (b += an("cas", a.m), b += $m("nas", a.Aa)), b += an("wls", a.R), b += an("tls", a.Ea), window.LayoutShiftAttribution && (b += an("was", a.Fa)));
            window.LargestContentfulPaint && (b += $m("lcp", a.ya), b += $m("lcps", a.xa));
            window.PerformanceEventTiming && a.wa && (b += $m("fid", a.va));
            window.PerformanceLongTaskTiming &&
                (b += $m("cbt", a.A), b += $m("mbt", a.M), b += $m("nlt", a.P));
            for (var c = 0, d = q(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) cn(e.value) && c++;
            b += $m("nif", c);
            b += $m("ifi", gd(window));
            c = L(Ef).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (v === v.top ? 1 : 0);
            b += a.Da ? "&qqid=" + encodeURIComponent(a.Da) : $m("pvsid", Sc(v));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.v || (a.v = !0, a.j())
        }
    }

    function gn(a, b, c) {
        if (0 === c) return !0;
        var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= d || 0 >= a ? !1 : 100 * d * a / ((b.right - b.left) * (b.bottom - b.top)) >= c
    }

    function rn() {
        var a = [].concat(ma(document.getElementsByTagName("iframe"))).filter(cn),
            b = [].concat(ma(bn())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        on = window.scrollX;
        pn = window.scrollY;
        return qn = [].concat(ma(a), ma(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var on = void 0,
        pn = void 0,
        qn = [];

    function tn(a) {
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }

    function un() {
        var a = void 0 === a ? window : a;
        if (!tn(a) && R(Yh) || tn(a) && R(Zh)) {
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        }
        return !1
    }
    var vn = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: function() {
                return un()
            },
            shouldRequestToken: function() {
                return un()
            }
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s",
            shouldRedeemToken: function() {
                return !0
            },
            shouldRequestToken: function() {
                return !0
            }
        };
    var wn = L(ji).h(di.h, di.defaultValue);

    function xn(a, b) {
        a = void 0 === a ? null : a;
        b = void 0 === b ? !1 : b;
        xj.call(this);
        this.i = b;
        this.h = [];
        R(fi) ? (un() && this.h.push(vn), R(ai) && this.h.push(Y)) : this.h = a || [vn];
        if (document.hasTrustToken && !R($h) && !Array.isArray(window.goog_tt_state)) {
            var c = yn(this);
            Object.defineProperty(window, "goog_tt_state", {
                configurable: !1,
                get: function() {
                    return c.slice()
                }
            })
        }
    }
    t(xn, xj);

    function zn() {
        var a = void 0 === a ? window.document : a;
        Rc(wn, a)
    }

    function An(a, b) {
        return R(ci) || a && (R(gi) || ".google.de" != b) || ".google.ch" === b || "function" === typeof J.__tcfapi
    }

    function yn(a) {
        return a.h.map(function(b) {
            return {
                issuerOrigin: b.issuerOrigin,
                state: R(bi) && !a.i ? 12 : 1
            }
        })
    }

    function Z(a, b, c) {
        var d = p(window.goog_tt_state, "find").call(window.goog_tt_state, function(e) {
            return e.issuerOrigin === a
        });
        d && (d.state = b, R(fi) && void 0 != c && (d.hasRedemptionRecord = c))
    }

    function Bn() {
        var a = window.goog_tt_state;
        return Array.isArray(a) && a.some(function(b) {
            return 1 != b.state
        })
    }

    function Cn(a) {
        var b = a.issuerOrigin + a.redemptionPath,
            c = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: a.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(a.issuerOrigin, 2);
        return window.fetch(b, c).then(function(d) {
            if (!d.ok) throw Error(d.status + ": Network response was not ok!");
            Z(a.issuerOrigin, 6, !0)
        }).catch(function(d) {
            d && "NoModificationAllowedError" === d.name ? Z(a.issuerOrigin, 6, !0) : Z(a.issuerOrigin, 5)
        })
    }

    function Dn(a, b) {
        var c = a.issuerOrigin + a.issuancePath,
            d = {
                trustToken: {
                    type: "token-request"
                }
            };
        R(ei) && (d.keepalive = !0);
        Z(a.issuerOrigin, 8);
        return window.fetch(c, d).then(function(e) {
            if (!e.ok) throw Error(e.status + ": Network response was not ok!");
            Z(a.issuerOrigin, 10);
            if (b) return Cn(a)
        }).catch(function(e) {
            if (e && "NoModificationAllowedError" === e.name) {
                if (Z(a.issuerOrigin, 10), b) return Cn(a)
            } else Z(a.issuerOrigin, 9)
        })
    }

    function En() {
        Z(vn.issuerOrigin, 13);
        return document.hasTrustToken(vn.issuerOrigin).then(function(a) {
            return a ? Cn(vn) : Dn(vn, !0)
        })
    }

    function Fn() {
        Z(Y.issuerOrigin, 13);
        if (n.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function() {
                    return n.Promise.reject(19)
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return n.Promise.reject(17);
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function() {
                    return n.Promise.reject(19)
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin,
                        22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function() {
                    return n.Promise.reject(21)
                })
            });
            var d = Sc(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function() {
                    return n.Promise.reject(24)
                })) : e
            }).then(function(e) {
                if (e &&
                    e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function() {
                    return n.Promise.reject(27)
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (19 == e || 17 == e || 21 == e || 24 == e || 27 == e) Z(Y.issuerOrigin, e);
                else throw e;
            })
        }
    }

    function Gn(a) {
        if (document.hasTrustToken && !R($h) && (!R(bi) || a.i)) {
            if (Bn()) return window.goog_tt_promise;
            var b = [];
            R(fi) ? un() && b.push(En()) : a.h.forEach(function(c) {
                Z(c.issuerOrigin, 13);
                var d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken();
                if (d || e) {
                    var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                        if (g) {
                            if (d) return Cn(c)
                        } else {
                            if (e) return Dn(c, d);
                            Z(c.issuerOrigin, 3)
                        }
                    });
                    b.push(f)
                } else Z(c.issuerOrigin, 7)
            });
            R(ai) && b.push(Fn());
            if (n.Promise && n.Promise.all) return a = n.Promise.all(b), "object" != typeof window.goog_tt_promise &&
                Object.defineProperty(window, "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }), a
        }
    };
    var Hn = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function In() {
        return J.navigator && J.navigator.userAgentData && "function" === typeof J.navigator.userAgentData.getHighEntropyValues ? J.navigator.userAgentData.getHighEntropyValues(Hn).then(function(a) {
            var b = new Pj;
            b = B(b, 1, a.platform);
            b = B(b, 2, a.platformVersion);
            b = B(b, 3, a.architecture);
            b = B(b, 4, a.model);
            b = B(b, 5, a.uaFullVersion);
            return B(b, 9, a.bitness)
        }) : null
    };

    function Jn(a, b) {
        b.google_ad_host || (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute("content"))
    }

    function Kn(a, b, c) {
        c = void 0 === c ? "" : c;
        J.google_sa_impl && !J.document.getElementById("google_shimpl") && (J.google_sa_queue = null, J.google_sl_win = null, J.google_sa_impl = null);
        J.google_sa_queue || (J.google_sa_queue = [], J.google_sl_win = J, J.google_process_slots = Mf(215, function() {
            return Ln(J)
        }), a = Mn(c, a, b), xc(J.document, a).id = "google_shimpl")
    }

    function Ln(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || Nf("shimpl", {
            t: "no_fn"
        });
        "function" === typeof c && Lf(216, c);
        b.length && a.setTimeout(Mf(215, function() {
            return Ln(a)
        }), 0)
    }

    function Nn(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Mn(a, b, c) {
        var d = Math.random() < S(Ch) ? Vb(fc(b.nb).toString()) : null;
        b = sb(c, 4) ? b.mb : b.ob;
        d = d ? d : Vb(fc(b).toString());
        b = {};
        a: {
            if (sb(c, 4)) {
                if (c = a || On()) {
                    var e = {};
                    c = (e.client = c, e.plah = J.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        Pn(c, b);
        a: {
            if (c = S(rh))
                if (a = a || On()) {
                    e = {};
                    a = (e.client = a, e.plah = J.location.host, e.eid = "" + c, e.ama_t = "adsense", e.asntp = S(lh), e.asntpv = S(ph), e.asntpl = S(nh), e.asntpm = S(oh), e.asntpc = S(mh), e.asna = S(hh), e.asnd = S(ih), e.asnp = S(jh), e.asns = S(kh), e.asmat =
                        S(gh), e.asptt = S(qh), e);
                    break a
                }
            a = {}
        }
        Pn(a, b);
        Pn(ki() ? {
            bust: ki()
        } : {}, b);
        return Sb(d, b)
    }

    function Pn(a, b) {
        Ec(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function On() {
        if (J.google_ad_client) return J.google_ad_client;
        var a = U(J).head_tag_slot_vars;
        if (a && a.google_ad_client) return a.google_ad_client;
        if (a = J.document.querySelector(".adsbygoogle[data-ad-client]")) return a.getAttribute("data-ad-client");
        b: {
            a = J.document.getElementsByTagName("script");
            var b = J.navigator && J.navigator.userAgent || "";b = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(b) ||
            /i(phone|pad|pod)/i.test(b) && /applewebkit/i.test(b) && !/version|safari/i.test(b) && !ld() ? Nm : Om;
            for (var c = a.length - 1; 0 <= c; c--) {
                var d = a[c];
                if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = b(d))) {
                    a = d;
                    break b
                }
            }
            a = null
        }
        if (a) {
            b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            for (c = {}; d = b.exec(a);) c[d[1]] = Pm(d[2]);
            a = c.google_ad_client ? c.google_ad_client : ""
        } else a = "";
        return a ? a : ""
    }

    function Qn(a) {
        if (!Yc) a: {
            for (var b = [v.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (l) {}
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    Yc = h;
                    break a
                }
            } catch (l) {}
            Yc = null
        }
        if (Yc) return null;
        c = yc("IFRAME");
        c.id = "google_esf";
        c.name = "google_esf";
        a = a.tb;
        if (a instanceof ac) {
            var k;
            h = dc(a);
            a = (null === (k = Yb()) || void 0 === k ? 0 : k.isScriptURL(h)) ? TrustedScriptURL.prototype.toString.apply(h) : h
        } else a = Ub(a).toString();
        c.src = a;
        c.style.display = "none";
        return c
    }

    function Rn(a, b, c, d) {
        Sn(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_anchor");) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            h = yc("INS");
            h.id = e + "_anchor";
            Gk(h, g, f);
            h.style.display = "block";
            var k = yc("INS");
            k.id = e + "_expand";
            Gk(k, g, f);
            k.style.display = "inline-table";
            k.appendChild(h);
            c.appendChild(k);
            return e
        })
    }

    function Sn(a, b, c, d, e) {
        var f = e(a, b);
        Tn(a, c, b);
        c = Ia;
        e = (new Date).getTime();
        b.google_lrv = H(d, 2);
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        b.dninfo = b.google_loader_used;
        c = (d = !!a.document.getElementById(f + "_anchor")) ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        b.dninfo += "_" + d;
        var g = {
            pubWin: a,
            iframeWin: null,
            vars: b
        };
        Nn(a, function() {
            var h = !!a.document.getElementById(f + "_anchor");
            b.dninfo += "_" + h;
            (h = a.google_sa_impl(g)) && h.catch && h.catch(Sf(911))
        }, c)
    }

    function Tn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Zc[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Fc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var r = k[m];
                            if (r.nodeName && r.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === r) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var u = a.parent;
                for (e = 0; u && u !== a && 25 > e; ++e) {
                    var y = u.frames;
                    for (d = 0; d < y.length; ++d)
                        if (a === y[d]) {
                            b.push(d);
                            break
                        }
                    a = u;
                    u = a.parent
                }
            } catch (E) {}
            c.google_ad_dom_fingerprint = Fc(h + b.join()).toString()
        }
    }

    function Un() {
        var a = md(v);
        a && (a = Xf(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Vn(a) {
        zn();
        R(bi) && An(Ql(), H(a, 8)) || Mf(779, function() {
            var b = new xn(null, !0);
            0 < S(hi) ? J.google_trust_token_operation_promise = Gn(b) : Gn(b)
        })();
        a = In();
        null != a && a.then(function(b) {
            J.google_user_agent_client_hint = Cb(b)
        });
        Vm();
        Tm()
    };

    function Wn(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Xn(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            (c = uc(c)) && (b.google_ad_client = Wn("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ja(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Wn(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Yn(a) {
        if (a = ad(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Zn(a, b, c, d) {
        Xn(a, b);
        if (c.document && c.document.body && !nl(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = rl(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Zc[e + "x" + g];
                var h = f;
                if (e) {
                    var k = $c(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new K("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = hl(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                Kk(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || Bi(a, c, "width", I) || b.google_ad_width || 0;
        f = Fa(hl, e, "auto", c, a, b, !1, !0);
        if (R(yh) || R(Ih) && !(488 > O(c) || R(Gh))) d = !1;
        else {
            g = md(c) || c;
            h = b.google_ad_client;
            d = g.location && "#ftptohbh" === g.location.hash ? 2 : sk(g.location, "google_responsive_slot_preview") || R(Hh) ? 1 : R(Fh) ? 2 : Sl(g, 1, h, d) ? 1 : 0;
            if (g = 0 !== d) b: if (!(R(Ih) || 488 > O(c) || R(Gh)) || b.google_reactive_ad_format ||
                    nl(c, b) || ri(a, b)) g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = zc(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!Za(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    if (!R(Gh) && (g = vi(c, a, e, .3, b), !0 !== g)) {
                        b.gfwrnwer = g;
                        g = !1;
                        break b
                    }
                    g = c.top == c ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, Kk(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
        }
        if (e = nl(c, b)) pl(e, a, b, c, d);
        else {
            if (ri(a, b)) {
                if (d = zc(a, c)) a.style.width = d.width, a.style.height = d.height, qi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Yn(c)
            } else qi(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? pl(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = wi(a.offsetWidth || parseInt(a.style.width,
                10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function $n(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        jc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function ao(a, b) {
        b = void 0 === b ? 500 : b;
        xj.call(this);
        this.i = a;
        this.Sa = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    t(ao, xj);
    ao.prototype.j = function() {
        this.m = {};
        this.l && (kc(this.i, "message", this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        xj.prototype.j.call(this)
    };

    function bo(a) {
        xj.call(this);
        this.i = a;
        this.h = null;
        this.l = !1
    }
    t(bo, xj);
    var co = null,
        eo = [],
        fo = new n.Map,
        go = -1;

    function ho(a) {
        return kd.test(a.className) && "done" != a.dataset.adsbygoogleStatus
    }

    function io(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        jo(a, b, c)
    }

    function jo(a, b, c) {
        var d = window,
            e = jd();
        e.google_spfd || (e.google_spfd = Zn);
        (e = b.google_reactive_ads_config) || Zn(a, b, d, c);
        Jn(d, b);
        if (!ko(a, b, d)) {
            e || (d.google_lpabyc = si(a, d) + Bi(a, d, "height", I));
            if (e) {
                e = e.page_level_pubvars || {};
                if (U(J).page_contains_reactive_tag && !U(J).allow_second_reactive_tag) {
                    if (e.pltais) {
                        pk(!1);
                        return
                    }
                    throw new K("Only one 'enable_page_level_ads' allowed per page.");
                }
                U(J).page_contains_reactive_tag = !0;
                pk(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = fd(d);
            cd(Mm, function(f, g) {
                b[g] =
                    b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (U(J).first_tag_on_page || 0);
            Lf(164, function() {
                Rn(d, b, a, c)
            })
        }
    }

    function ko(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = mk(c);
        if (f && f.Ga && "on" != b.google_adtest && !e) {
            e = si(a, c);
            var g = Yf(c).clientHeight;
            if (!f.pa || f.pa && ((0 == g ? null : e / g) || 0) >= f.pa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = za(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.qb && (null !== Lc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Lc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = zc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (v.console && v.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function lo(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (ho(e) && "reserved" != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d
        }
        return null
    }

    function mo(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    no(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function oo() {
        var a = yc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Oc(a);
        return a
    }

    function po(a, b) {
        var c = {};
        cd(Uf, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = oo();
        Uc.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!U(J).pause_ad_requests;
        io(d, e, b)
    }

    function qo(a, b) {
        function c() {
            return po(a, b)
        }
        Xf(v).wasPlaTagProcessed = !0;
        var d = v.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = ic(Mf(191, c));
            jc(d, "DOMContentLoaded", e);
            (new v.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function no(a, b, c) {
        var d = {};
        Lf(165, function() {
            ro(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function so(a) {
        delete a.google_checked_head;
        Ec(a, function(b, c) {
            rk[c] || (delete a[c], v.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function to(a, b) {
        var c = J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = U(window);
            if (d.head_tag_slot_vars) {
                if (R(Bh)) {
                    uo(c);
                    return
                }
                throw new K("Only one AdSense head tag supported per page. The second tag is ignored.");
            }
            var e = {};
            Xn(c, e);
            so(e);
            var f = Ob(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            J.adsbygoogle || (J.adsbygoogle = []);
            d = J.adsbygoogle;
            d.loaded ? d.push(c) : d.splice(0, 0, c);
            var g;
            e.google_adbreak_test || (null == (g = Fb(b, Bl, 13, Ol)) ? 0 : sb(g, 3)) && R(Mh) ? vo(f, a) : $n(function() {
                vo(f, a)
            })
        }
    }

    function uo(a) {
        var b = U(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = uc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new K("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function wo(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function ro(a, b, c, d) {
        if (null == a) throw new K("push() called with no parameters.");
        xo(a, H(d, 7), H(d, 2));
        var e = wo(a);
        if (0 !== e) R(Ah) && (d = qk(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ia)), null == co ? (yo(a), eo.push(a)) : 3 === e ? Lf(787, function() {
            co.handleAdConfig(a)
        }) : co.handleAdBreak(a).catch(Sf(730));
        else {
            Ia = (new Date).getTime();
            Kn(c, d, zo(a));
            Ao();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new K("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Bo(a, d, b);
            else if ((e = a.params) && cd(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Co(a.element);
                Xn(e, b);
                c = U(v).head_tag_slot_vars || {};
                Ec(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !U(v).head_tag_slot_vars) throw new K("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new K("Ad client is missing from the slot.");
                b.google_apsail = Yl(b.google_ad_client);
                var f = (c = 0 === (U(J).first_tag_on_page || 0) && zk(b)) && Ak(c);
                c && !f && (Bo(c, d), U(J).skip_next_reactive_tag = !0);
                0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!U(J).pause_ad_requests;
                io(e, b, d);
                c && f && Do(c)
            }
        }
    }
    var Eo = !1;

    function xo(a, b, c) {
        R(zh) && !Eo && (Eo = !0, (a = zo(a)) || (a = On()), Nf("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, 1))
    }

    function zo(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Ao() {
        if (R(uh)) {
            var a = mk(J);
            if (!(a = a && a.Ga)) {
                try {
                    var b = J.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? kj(b) : null;
                a = !(b && hk(b) && b)
            }
            a || ok(J, 1)
        }
    }

    function Do(a) {
        Tc(function() {
            Xf(v).wasPlaTagProcessed || v.adsbygoogle && v.adsbygoogle.push(a)
        })
    }

    function Bo(a, b, c) {
        U(J).skip_next_reactive_tag ? U(J).skip_next_reactive_tag = !1 : (0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 1), c && a.tag_partner && (nk(v, a.tag_partner), nk(c, a.tag_partner)), c = sb(b, 6), U(J).ama_ran_on_page || Ck(new Bk(a, c)), qo(a, b))
    }

    function Co(a) {
        if (a) {
            if (!ho(a) && (a.id ? a = lo(a.id) : a = null, !a)) throw new K("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new K("'element' is not a good DOM element.");
        } else if (a = lo(), !a) throw new K("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Fo() {
        var a = new zj(J),
            b = new ao(J),
            c = new bo(J),
            d = J.__cmp ? 1 : 0;
        a = Aj(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = Mc(b.i, "__uspapiLocator"), b = b.h), f = null != b);
        c.l || (c.h || (c.i.googlefc ? c.h = c.i : c.h = Mc(c.i, "googlefcPresent")), c.l = !0);
        Nf("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.h ? 1 : 0,
            ptt: 9
        }, S(eh))
    }

    function Go(a) {
        oj().S[qj(26)] = !!Number(a)
    }

    function Ho(a) {
        Number(a) ? U(J).pause_ad_requests = !0 : (U(J).pause_ad_requests = !1, a = function() {
            if (!U(J).pause_ad_requests) {
                var b = jd(),
                    c = jd();
                try {
                    if (Uc.createEvent) {
                        var d = Uc.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (dd(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (dd(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1
                        });
                        b.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, v.setTimeout(a, 0), v.setTimeout(a, 1E3))
    }

    function Io(a) {
        Nf("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        J._gfp_a_ = a
    }

    function Jo(a) {
        dd(a) && window.setTimeout(a, 0)
    }

    function vo(a, b) {
        (ba = xk(Sb(Vb(fc(b.pb).toString()), ki() ? {
            bust: ki()
        } : {})).then(function(c) {
            null == co && (c.init(a), co = c, Ko())
        }).catch(Sf(723)), p(ba, "finally")).call(ba, function() {
            eo.length = 0;
            Nf("slotcar", {
                event: "api_ld",
                time: Date.now() - Ia,
                time_pr: Date.now() - go
            })
        })
    }

    function Ko() {
        for (var a = q(p(fo, "keys").call(fo)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = fo.get(b); - 1 !== c && (v.clearTimeout(c), fo.delete(b))
        }
        a = {};
        for (b = 0; b < eo.length; a = {
                da: a.da,
                Y: a.Y
            }, b++) fo.has(b) || (a.Y = eo[b], a.da = wo(a.Y), Lf(723, function(d) {
            return function() {
                3 === d.da ? co.handleAdConfig(d.Y) : 2 === d.da && co.handleAdBreakBeforeReady(d.Y).catch(Sf(730))
            }
        }(a)))
    }

    function yo(a) {
        var b = eo.length;
        if (2 === wo(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === go && (go = Date.now());
            var c = v.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), fo.set(b, -1), Nf("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * S(Nh));
            fo.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        Hf.Ra(Tf);
        Lf(166, function() {
            var e = Rm(b);
            Jm(Hf, H(e, 2));
            Jm(Hm, H(e, 2));
            Rl(sb(e, 6));
            d();
            pd(16, [1, e.toJSON()]);
            var f = bd(ad(J)) || J,
                g = c(Km({
                    ab: a,
                    lb: H(e, 2)
                }), e);
            R(Eh) && Vl(f, e);
            Fm(f, e, null === J.document.currentScript ? 1 : dm(g.sb));
            R(ii) && (vc = !0);
            if ((!Pa() || 0 <= Ka(Sa(), 11)) && (null == (J.Prototype || {}).Version || !R(xh))) {
                Kf(R(Th));
                Vn(e);
                Xj();
                try {
                    ln()
                } catch (r) {}
                Un();
                to(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    if (R(vh) && !sb(e, 16)) try {
                        if (J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
                    } catch (r) {}
                    if (R(Dh)) {
                        var k = {
                                value: sb(e, 16)
                            },
                            l = .01;
                        S(wh) && (k.eid = S(wh), l = 1);
                        k.frequency = l;
                        Nf("new_abg_tag", k, l)
                    }
                    S(eh) && Fo();
                    k = {
                        push: function(r) {
                            no(r, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: Go
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: Ho
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: Io
                        }), Object.defineProperty(k, "onload", {
                            set: Jo
                        })
                    } catch (r) {}
                    if (h) {
                        l = q(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]);
                        for (var m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] =
                            h[m])
                    }
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    mo(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload = h.onload);
                    (f = Qn(g)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("m202110250101", Qm, function(a, b) {
        var c = 2012 < C(b, 1, 0) ? "_fy" + C(b, 1, 0) : "",
            d = H(b, 3);
        b = H(b, 2);
        var e = a ? ec(sl, a, c) : ec(tl, b, d, c),
            f = ec(ul, b, d);
        return {
            pb: e,
            ob: a ? ec(vl, a, c) : ec(wl, b, d, c),
            mb: a ? ec(xl, a, c) : ec(yl, b, d, c),
            nb: a ? ec(zl, a, c) : ec(Al, b, d, c),
            tb: f,
            sb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20211026\",\"r20190131\",null,[],null,null,null,null,null,[],[[[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1010,null,[null,1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1089,null,null,[1]],[1097,null,null,[1]],[1092,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1074,null,null,[1]],[1059,null,null,[1]],[230,null,null,[1]],[1931,null,null,[1]],[null,null,null,[null,null,null,[\"A\/OOU4XAFfeAV4kM4+W9WBwNAHqq\/bvtrRcJ1wpnNyO\/i076BSUy1d14l2kBEgVmEuvxojSpD23172C6hBg2AQYAAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"AwrB+XVH\/KV6HfZNVtSEqlUJi3yUbtCp0\/TJRj+38NDIw19\/9P1h7ECTtdLdhIzG0Bsl4n\/0rVmttJtGUCcewgAAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"Ax15QOERqai2A5XWrDY38Eg07xh2T0pkhpDPJuDlxr7D2Ka8wHvklgK7tTPZOnT+8H31lwHto5JpvYV8jRn1WgIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\"]],null,1934],[377431981,null,null,[1]],[1903,null,null,[1]],[1953,null,null,[1]],[1950,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[379841917,null,null,[1]],[null,null,null,[null,null,null,[\"AxujKG9INjsZ8\/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=\",\"Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt\/P\/H4\/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"AxBHdr0J44vFBQtZUqX9sjiqf5yWZ\/OcHRcRMN3H9TH+t90V\/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1932],[null,397907552,null,[null,500]],[396382471,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[42531329],[42531330,[[1091,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[10,[[44750884],[44750885],[44750886]]],[10,[[44753738,[[290,null,null,[]]]],[44753739,[[null,1072,null,[null,0.5]],[290,null,null,[]]]],[44753740,[[null,1072,null,[null,0.75]],[290,null,null,[]]]],[44753741,[[null,1072,null,[null,0.9]],[290,null,null,[]]]],[44753742,[[null,1072,null,[null,1]],[290,null,null,[]]]],[44753743,[[null,1072,null,[null,1.01]],[290,null,null,[]]]]],null,null,null,53,null,200],[50,[[44751036],[44751037,[[1090,null,null,[1]]]]]],[50,[[44752093],[44752094,[[1084,null,null,[1]],[1082,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[100,[[31062937],[31062938,[[1095,null,null,[1]]]]]],[100,[[31062944],[31062945,[[1096,null,null,[1]]]]]],[100,[[31063294],[31063295,[[1101,null,null,[1]]]]]],[100,[[31063300],[31063301,[[1100,null,null,[1]]]]]],[100,[[31063306],[31063307,[[1102,null,null,[1]]]]]],[1000,[[31063316,[[null,null,14,[null,null,\"31063316\"]]],[6,null,null,null,6,null,\"31063316\"]],[31063317,[[null,null,14,[null,null,\"31063317\"]]],[6,null,null,null,6,null,\"31063317\"]]],[4,null,55]],[1000,[[31063329,[[null,null,14,[null,null,\"31063329\"]]],[6,null,null,null,6,null,\"31063329\"]],[31063330,[[null,null,14,[null,null,\"31063330\"]]],[6,null,null,null,6,null,\"31063330\"]]],[4,null,55]],[1000,[[31063348,[[null,null,14,[null,null,\"31063348\"]]],[6,null,null,null,6,null,\"31063348\"]],[31063349,[[null,null,14,[null,null,\"31063349\"]]],[6,null,null,null,6,null,\"31063349\"]]],[4,null,55]],[10,[[31063354],[31063355,[[1109,null,null,[1]]]]]],[10,[[31063360],[31063361,[[1118,null,null,[1]]]]]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.01]]]]]],[1000,[[44750599,null,[4,null,6,null,null,null,null,[\"44750686\"]]],[44750600,[[1086,null,null,[1]]],[4,null,6,null,null,null,null,[\"44750687\"]]]]],[null,[[44751428,[[null,1103,null,[null,44751428]],[null,1077,null,[null,44750690]]]],[44751429,[[null,1103,null,[null,44751429]],[null,1077,null,[null,44751427]]]],[44751430,[[null,1103,null,[null,44751430]],[null,1077,null,[null,44750691]]]],[44751431,[[null,1103,null,[null,44751431]],[null,1077,null,[null,44750692]]]],[44751432,[[null,1103,null,[null,44751432]],[null,1077,null,[null,44750693]]]],[44751433,[[null,1103,null,[null,44751433]],[null,1077,null,[null,44750694]]]],[44751434,[[null,1103,null,[null,44751434]],[null,1077,null,[null,44750695]]]]]],[null,[[44751877,[[null,1103,null,[null,44751877]],[1121,null,null,[1]]]],[44751878,[[null,1103,null,[null,44751878]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44751879,[[null,1103,null,[null,44751879]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]]]],[1,[[44752103],[44752104]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31062229],[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]],[10,[[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[44753814]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]],[10,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063122]],[4,null,61]],[100,[[31063139],[31063140,[[398305417,null,null,[1]]]]]],[1,[[31063150]],[4,null,63]],[200,[[31063166],[31063167,[[393546021,null,null,[1]]]]]],[50,[[31063182],[31063183,[[1956,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]],[393546021,null,null,[1]]]]]],[10,[[31063246],[31063247,[[392736476,null,null,[1]],[393546021,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/(9[3456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[50,[[44748552],[44748553,[[1948,null,null,[1]]]]]]]],[13,[[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]],[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"31061691\"]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,[\"document.prerendering\"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,[\"document.prerendering\"]]]]],[1000,[[31063168,null,[4,null,6,null,null,null,null,[\"31063166\"]]],[31063169,null,[4,null,6,null,null,null,null,[\"31063167\"]]]],[4,null,6,null,null,null,null,[\"31060007\"]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[],null,null,null,null,-1]");