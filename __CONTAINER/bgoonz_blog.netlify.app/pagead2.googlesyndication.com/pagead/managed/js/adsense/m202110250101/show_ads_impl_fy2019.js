(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = {},
        t = this || self;

    function ba() {}

    function ca(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function da(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ea(a) {
        return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ia)
    }
    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
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

    function la(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la = ja : la = ka;
        return la.apply(null, arguments)
    }

    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function na() {
        return Date.now()
    }

    function oa(a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function pa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ci = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Uh = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function ra(a) {
        return a
    };

    function sa(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, sa);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    pa(sa, Error);
    sa.prototype.name = "CustomError";
    var ta;

    function ua(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        sa.call(this, c + a[d])
    }
    pa(ua, sa);
    ua.prototype.name = "AssertionError";

    function va(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function wa(a, b) {
        if (b) a = a.replace(xa, "&amp;").replace(ya, "&lt;").replace(za, "&gt;").replace(Aa, "&quot;").replace(Ba, "&#39;").replace(Ca, "&#0;");
        else {
            if (!Da.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(xa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ya, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(za, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ba, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ca, "&#0;"))
        }
        return a
    }
    var xa = /&/g,
        ya = /</g,
        za = />/g,
        Aa = /"/g,
        Ba = /'/g,
        Ca = /\x00/g,
        Da = /[\x00&<>"']/;

    function Ea(a, b) {
        let c = 0;
        a = va(String(a)).split(".");
        b = va(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Fa(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Fa(0 == e[2].length, 0 == f[2].length) || Fa(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Fa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ga;
    a: {
        const a = t.navigator;
        if (a) {
            const b = a.userAgent;
            if (b) {
                Ga = b;
                break a
            }
        }
        Ga = ""
    }
    let Ha = Ga;

    function u(a) {
        return -1 != Ha.indexOf(a)
    };

    function Ia() {
        return u("Opera")
    }

    function Ja() {
        return u("Trident") || u("MSIE")
    }

    function Ka() {
        return u("Firefox") || u("FxiOS")
    }

    function La() {
        return u("Safari") && !(Ma() || u("Coast") || Ia() || u("Edge") || u("Edg/") || u("OPR") || Ka() || u("Silk") || u("Android"))
    }

    function Ma() {
        return (u("Chrome") || u("CriOS")) && !u("Edge")
    }

    function Oa() {
        return u("Android") && !(Ma() || Ka() || Ia() || u("Silk"))
    }

    function Pa(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Qa() {
        if (Ja()) {
            var a;
            if ((a = /rv: *([\d\.]*)/.exec(Ha)) && a[1]) a = a[1];
            else {
                a = "";
                var b = /MSIE +([\d\.]+)/.exec(Ha);
                if (b && b[1]) {
                    var c = /Trident\/(\d.\d)/.exec(Ha);
                    if ("7.0" == b[1])
                        if (c && c[1]) switch (c[1]) {
                            case "4.0":
                                a = "8.0";
                                break;
                            case "5.0":
                                a = "9.0";
                                break;
                            case "6.0":
                                a = "10.0";
                                break;
                            case "7.0":
                                a = "11.0"
                        } else a = "7.0";
                        else a = b[1]
                }
            }
            return a
        }
        b = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        for (a = []; c = b.exec(Ha);) a.push([c[1], c[2], c[3] || void 0]);
        b = Pa(a);
        return Ia() ? b(["Version", "Opera"]) : u("Edge") ?
            b(["Edge"]) : u("Edg/") ? b(["Edg"]) : Ma() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };

    function Ra(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Sa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ta(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ua(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Va(a, b, c) {
        let d = c;
        Sa(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Wa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Xa(a, b) {
        return 0 <= Ra(a, b)
    }

    function Ya(a, b) {
        b = Ra(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Za(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function $a(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ab(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function bb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = bb.apply(null, ab(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function cb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function db(a) {
        db[" "](a);
        return a
    }
    db[" "] = ba;

    function eb(a, b) {
        try {
            return db(a[b]), !0
        } catch (c) {}
        return !1
    }

    function fb(a, b) {
        var c = gb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var hb = Ia(),
        ib = Ja(),
        jb = u("Edge"),
        kb = jb || ib,
        lb = u("Gecko") && !(-1 != Ha.toLowerCase().indexOf("webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        mb = -1 != Ha.toLowerCase().indexOf("webkit") && !u("Edge");

    function nb() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var ob;
    a: {
        var pb = "",
            qb = function() {
                if (lb) return /rv:([^\);]+)(\)|;)/.exec(Ha);
                if (jb) return /Edge\/([\d\.]+)/.exec(Ha);
                if (ib) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ha);
                if (mb) return /WebKit\/(\S+)/.exec(Ha);
                if (hb) return /(?:Version)[ \/]?(\S+)/.exec(Ha)
            }();qb && (pb = qb ? qb[1] : "");
        if (ib) {
            var rb = nb();
            if (null != rb && rb > parseFloat(pb)) {
                ob = String(rb);
                break a
            }
        }
        ob = pb
    }
    var sb = ob,
        gb = {};

    function tb(a) {
        return fb(a, function() {
            return 0 <= Ea(sb, a)
        })
    }
    var ub;
    if (t.document && ib) {
        var vb = nb();
        ub = vb ? vb : parseInt(sb, 10) || void 0
    } else ub = void 0;
    var wb = ub;
    Oa();
    Ma();
    La();
    var xb = {},
        yb = null;

    function zb(a, b) {
        void 0 === b && (b = 0);
        if (!yb) {
            yb = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                xb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === yb[h] && (yb[h] = g)
                }
            }
        }
        b = xb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
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
                g =
                    a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    }

    function Ab(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return zb(b, 3)
    };
    var Bb = "function" === typeof Uint8Array;

    function Cb(a) {
        return null !== a && "object" === typeof a && a.constructor === Object
    }

    function Db(a, b) {
        if (null != a) return Array.isArray(a) || Cb(a) ? Eb(a, b) : b(a)
    }

    function Eb(a, b) {
        if (Array.isArray(a)) {
            var c = Array(a.length);
            for (var d = 0; d < a.length; d++) c[d] = Db(a[d], b);
            Array.isArray(a) && a[Fb] && Gb(c);
            return c
        }
        c = {};
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Db(a[d], b));
        return c
    }

    function Hb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                return Bb && null != a && a instanceof Uint8Array ? zb(a) : a;
            default:
                return a
        }
    }

    function Ib(a) {
        return Bb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    }
    const Fb = Symbol("IS_REPEATED_FIELD");

    function Gb(a) {
        Array.isArray(a) && !Object.isFrozen(a) && (a[Fb] = !0);
        return a
    }
    let Jb;

    function Kb(a) {
        a = a.map;
        const b = [];
        for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
        return b
    }

    function Lb(a, b) {
        return a.l ? (b.j || (b.j = new a.l(b.value), a.isFrozen() && null(b.j)), b.j) : b.value
    }

    function Mb(a, b) {
        const c = Kb(a);
        c.sort();
        for (let d = 0; d < c.length; d++) {
            const e = a.map[c[d]];
            b.call(void 0, Lb(a, e), e.key, a)
        }
    }
    class Nb {
        constructor(a, b) {
            this.j = a;
            this.l = b;
            this.map = {};
            this.A = !0;
            if (0 < this.j.length) {
                for (a = 0; a < this.j.length; a++) {
                    b = this.j[a];
                    const c = b[0];
                    this.map[c.toString()] = new Ob(c, b[1])
                }
                this.A = !0
            }
        }
        isFrozen() {
            return !1
        }
        toJSON() {
            const a = this.ea();
            return Jb ? a : Eb(a, Hb)
        }
        ea() {
            if (this.A) {
                if (this.l) {
                    var a = this.map;
                    for (var b in a)
                        if (Object.prototype.hasOwnProperty.call(a, b)) {
                            var c = a[b].j;
                            c && c.ea()
                        }
                }
            } else {
                this.j.length = 0;
                a = Kb(this);
                a.sort();
                for (b = 0; b < a.length; b++) {
                    c = this.map[a[b]];
                    const d = c.j;
                    d && d.ea();
                    this.j.push([c.key,
                        c.value
                    ])
                }
                this.A = !0
            }
            return this.j
        }
        clear() {
            this.map = {};
            this.A = !1
        }
        entries() {
            const a = [],
                b = Kb(this);
            b.sort();
            for (let c = 0; c < b.length; c++) {
                const d = this.map[b[c]];
                a.push([d.key, Lb(this, d)])
            }
            return new Pb(a)
        }
        keys() {
            const a = [],
                b = Kb(this);
            b.sort();
            for (let c = 0; c < b.length; c++) a.push(this.map[b[c]].key);
            return new Pb(a)
        }
        values() {
            const a = [],
                b = Kb(this);
            b.sort();
            for (let c = 0; c < b.length; c++) a.push(Lb(this, this.map[b[c]]));
            return new Pb(a)
        }
        set(a, b) {
            const c = new Ob(a);
            this.l ? (c.j = b, c.value = b.ea()) : c.value = b;
            this.map[a.toString()] =
                c;
            this.A = !1;
            return this
        }
        get(a) {
            if (a = this.map[a.toString()]) return Lb(this, a)
        }
        has(a) {
            return a.toString() in this.map
        }[Symbol.iterator]() {
            return this.entries()
        }
    }
    class Ob {
        constructor(a, b) {
            this.key = a;
            this.value = b;
            this.j = void 0
        }
    }
    class Pb {
        constructor(a) {
            this.l = 0;
            this.j = a
        }
        next() {
            return this.l < this.j.length ? {
                done: !1,
                value: this.j[this.l++]
            } : {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return this
        }
    };
    let Qb;

    function Rb(a, b) {
        Qb = b;
        a = new a(b);
        Qb = null;
        return a
    };

    function v(a, b, c) {
        var d = Qb;
        Qb = null;
        a || (a = d);
        d = this.constructor.Yh;
        a || (a = d ? [d] : []);
        this.C = (d ? 0 : -1) - (this.constructor.Xh || 0);
        this.j = null;
        this.A = a;
        a: {
            d = this.A.length;a = d - 1;
            if (d && (d = this.A[a], Cb(d))) {
                this.D = a - this.C;
                this.B = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.D = Math.max(b, a + 1 - this.C), this.B = null) : this.D = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++) a = c[b], a < this.D ? (a += this.C, (d = this.A[a]) ? Gb(d) : this.A[a] = Tb) : (Ub(this), (d = this.B[a]) ? Gb(d) : this.B[a] = Tb)
    }
    const Tb = Object.freeze(Gb([]));

    function Ub(a) {
        let b = a.D + a.C;
        a.A[b] || (a.B = a.A[b] = {})
    }

    function y(a, b, c = !1) {
        return -1 === b ? null : c || b >= a.D ? a.B ? a.B[b] : void 0 : a.A[b + a.C]
    }

    function Vb(a, b) {
        return null != y(a, b)
    }

    function Wb(a, b) {
        let c = y(a, b, !1);
        null == c && (c = Tb);
        c === Tb && (c = Gb([]), z(a, b, c, !1));
        return c
    }

    function Xb(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function B(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function Yb(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function Zb(a, b, c = !1) {
        a = B(a, b);
        return null == a ? c : a
    }

    function $b(a, b, c) {
        a.j || (a.j = {});
        if (b in a.j) return a.j[b];
        let d = y(a, b);
        d || (d = Gb([]), z(a, b, d));
        c = new Nb(d, c);
        return a.j[b] = c
    }

    function z(a, b, c, d = !1) {
        d || b >= a.D ? (Ub(a), a.B[b] = c) : a.A[b + a.C] = c;
        return a
    }

    function ac(a, b, c, d) {
        c !== d ? z(a, b, c) : z(a, b, void 0);
        return a
    }

    function C(a, b, c, d, e = !1) {
        if (-1 === c) return null;
        a.j || (a.j = {});
        !a.j[c] && (e = y(a, c, e), d || e) && (a.j[c] = new b(e));
        return a.j[c]
    }

    function G(a, b, c) {
        a.j || (a.j = {});
        let d = a.j[c];
        if (!d) {
            let e = Wb(a, c);
            d = [];
            for (let f = 0; f < e.length; f++) d[f] = new b(e[f]);
            a.j[c] = d
        }
        return d
    }

    function bc(a, b, c) {
        a.j || (a.j = {});
        let d = c ? c.ea() : c;
        a.j[b] = c;
        return z(a, b, d, !1)
    }
    v.prototype.toJSON = function() {
        const a = this.ea();
        return Jb ? a : Eb(a, Hb)
    };
    v.prototype.ea = function() {
        if (this.j)
            for (let a in this.j) {
                if (!Object.prototype.hasOwnProperty.call(this.j, a)) continue;
                const b = this.j[a];
                if (Array.isArray(b))
                    for (let c = 0; c < b.length; c++) b[c] && b[c].ea();
                else b && b.ea()
            }
        return this.A
    };

    function cc(a, b) {
        return Hb(b)
    }

    function dc(a) {
        Jb = !0;
        try {
            return JSON.stringify(a.toJSON(), cc)
        } finally {
            Jb = !1
        }
    }

    function ec(a, b) {
        return Rb(a, b ? JSON.parse(b) : null)
    }

    function fc(a, b) {
        b.J && (a.J = b.J.slice());
        const c = b.j;
        if (c) {
            b = b.B;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = G(a, g[0].constructor, e), e = 0; e < Math.min(d.length, g.length); e++) fc(d[e], g[e])
                    } else if (g instanceof Nb) {
                        if (g.l) {
                            const h = $b(a, e, g.l);
                            Mb(g, (k, l) => fc(h.get(l), k))
                        }
                    } else(d = C(a, g.constructor, e, void 0, d)) && fc(d, g)
                }
            }
        }
    }

    function I(a, b) {
        return Yb(a, b, "")
    }

    function gc(a, b, c, d) {
        let e = 0;
        for (let f = 0; f < d.length; f++) {
            let g = d[f];
            null != y(a, g) && (0 !== e && z(a, e, void 0), e = g)
        }
        return C(a, b, e === c ? c : -1)
    }

    function hc(a, b) {
        return ac(a, b, 1, 0)
    };

    function ic(a, b) {
        this.j = a === jc && b || "";
        this.l = kc
    }
    ic.prototype.ia = !0;
    ic.prototype.$ = function() {
        return this.j
    };

    function lc(a) {
        return a instanceof ic && a.constructor === ic && a.l === kc ? a.j : "type_error:Const"
    }

    function mc(a) {
        return new ic(jc, a)
    }
    var kc = {},
        jc = {};

    function nc(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (l) {
                    e(l)
                }
            }

            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (l) {
                    e(l)
                }
            }

            function h(k) {
                k.done ? d(k.value) : (new c(function(l) {
                    l(k.value)
                })).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };
    var oc = mc("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function pc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function qc(a) {
        var b = rc;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function sc(a) {
        let b = 0;
        for (const c in a) b++
    }

    function tc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const uc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function vc(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < uc.length; f++) c = uc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var wc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var xc;

    function yc() {
        if (void 0 === xc) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                xc = a
            } else xc = a
        }
        return xc
    };
    const zc = {};
    class Ac {
        constructor(a, b) {
            this.j = b === zc ? a : "";
            this.ia = !0
        }
        $() {
            return this.j.toString()
        }
    }
    Ac.prototype.toString = function() {
        return this.j.toString()
    };
    var Cc = class {
        constructor(a, b) {
            this.j = b === Bc ? a : ""
        }
    };
    p = Cc.prototype;
    p.ia = !0;
    p.$ = function() {
        return this.j.toString()
    };
    p.Vb = !0;
    p.Ba = function() {
        return 1
    };

    function Dc(a, b) {
        a = Ec.exec(Fc(a).toString());
        var c = a[3] || "";
        return Gc(a[1] + Hc("?", a[2] || "", b) + Hc("#", c, void 0))
    }
    p.toString = function() {
        return this.j + ""
    };

    function Fc(a) {
        return a instanceof Cc && a.constructor === Cc ? a.j : "type_error:TrustedResourceUrl"
    }

    function Ic(a, b) {
        var c = lc(a);
        if (!Jc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Kc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof ic ? lc(d) : encodeURIComponent(String(d))
        });
        return Gc(a)
    }
    var Kc = /%{(\w+)}/g,
        Jc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Ec = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Bc = {};

    function Gc(a) {
        const b = yc();
        a = b ? b.createScriptURL(a) : a;
        return new Cc(a, Bc)
    }

    function Hc(a, b, c) {
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
    var Mc = class {
        constructor(a, b) {
            this.j = b === Lc ? a : ""
        }
    };
    p = Mc.prototype;
    p.ia = !0;
    p.$ = function() {
        return this.j.toString()
    };
    p.Vb = !0;
    p.Ba = function() {
        return 1
    };
    p.toString = function() {
        return this.j.toString()
    };

    function Nc(a) {
        return a instanceof Mc && a.constructor === Mc ? a.j : "type_error:SafeUrl"
    }
    var Oc = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
        Pc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

    function Qc(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(Pc);
        return b && Oc.test(b[1]) ? new Mc(a, Lc) : null
    }
    var Rc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Sc(a) {
        if (a instanceof Mc) return a;
        a = "object" == typeof a && a.ia ? a.$() : String(a);
        return Rc.test(a) ? new Mc(a, Lc) : Qc(a)
    }

    function Tc(a, b) {
        if (a instanceof Mc) return a;
        a = "object" == typeof a && a.ia ? a.$() : String(a);
        if (b && /^data:/i.test(a) && (b = Qc(a) || Uc, b.$() == a)) return b;
        Rc.test(a) || (a = "about:invalid#zClosurez");
        return new Mc(a, Lc)
    }
    var Lc = {},
        Uc = new Mc("about:invalid#zClosurez", Lc);
    const Vc = {};

    function Wc(a) {
        return a instanceof Xc && a.constructor === Xc ? a.j : "type_error:SafeStyle"
    }

    function Yc(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Zc).join(" ") : Zc(d), b += `${c}:${d};`)
            }
        return b ? new Xc(b, Vc) : $c
    }
    class Xc {
        constructor(a, b) {
            this.j = b === Vc ? a : "";
            this.ia = !0
        }
        $() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var $c = new Xc("", Vc);

    function Zc(a) {
        if (a instanceof Mc) return 'url("' + Nc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof ic) a = lc(a);
        else {
            a = String(a);
            var b = a.replace(ad, "$1").replace(ad, "$1").replace(bd, "url");
            if (cd.test(b)) {
                if (b = !dd.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && ed(a)
                }
                a = b ? fd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new ua("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function ed(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const cd = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        bd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        ad = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-z.%#\\[\\], ]+\\)", "g"),
        dd = /\/\*/;

    function fd(a) {
        return a.replace(bd, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (Sc(d) || Uc).$();
            return c + f + b + f + e
        })
    };
    const gd = {};

    function hd(a) {
        return a instanceof id && a.constructor === id ? a.j : "type_error:SafeHtml"
    }

    function jd(a) {
        if (a instanceof id) return a;
        const b = "object" == typeof a;
        let c = null;
        b && a.Vb && (c = a.Ba());
        return kd(wa(b && a.ia ? a.$() : String(a)), c)
    }

    function kd(a, b) {
        const c = yc();
        a = c ? c.createHTML(a) : a;
        return new id(a, b, gd)
    }

    function ld(a) {
        if (!md.test(a)) throw Error("");
        if (a.toUpperCase() in nd) throw Error("");
    }

    function od(a) {
        const b = jd(pd);
        let c = b.Ba();
        const d = [],
            e = f => {
                Array.isArray(f) ? f.forEach(e) : (f = jd(f), d.push(hd(f).toString()), f = f.Ba(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
        a.forEach(e);
        return kd(d.join(hd(b).toString()), c)
    }

    function qd(a) {
        return od(Array.prototype.slice.call(arguments))
    }

    function rd(a) {
        var b = "";
        if (a)
            for (let e in a)
                if (Object.prototype.hasOwnProperty.call(a, e)) {
                    if (!md.test(e)) throw Error("");
                    var c = a[e];
                    if (null != c) {
                        var d = e;
                        if (c instanceof ic) c = lc(c);
                        else if ("style" == d.toLowerCase()) {
                            if (!da(c)) throw Error("");
                            c instanceof Xc || (c = Yc(c));
                            c = Wc(c)
                        } else {
                            if (/^on/i.test(d)) throw Error("");
                            if (d.toLowerCase() in sd)
                                if (c instanceof Cc) c = Fc(c).toString();
                                else if (c instanceof Mc) c = Nc(c);
                            else if ("string" === typeof c) c = (Sc(c) || Uc).$();
                            else throw Error("");
                        }
                        c.ia && (c = c.$());
                        d = `${d}="` +
                            wa(String(c)) + '"';
                        b += " " + d
                    }
                }
        return b
    }
    class id {
        constructor(a, b, c) {
            this.j = c === gd ? a : "";
            this.l = b;
            this.ia = this.Vb = !0
        }
        Ba() {
            return this.l
        }
        $() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const md = /^[a-zA-Z0-9-]+$/,
        sd = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        nd = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var td = kd("<!DOCTYPE html>", 0),
        pd = new id(t.trustedTypes && t.trustedTypes.emptyHTML || "", 0, gd);
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ud = class {};
    class vd extends ud {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j
        }
    }
    var wd = new vd("about:invalid#zTSz");

    function xd() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    let yd;

    function zd() {
        var a, b;
        if (void 0 === yd) try {
            yd = null !== (b = null === (a = xd()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: c => c,
                createScript: c => c,
                createScriptURL: c => c
            })) && void 0 !== b ? b : null
        } catch (c) {
            yd = null
        }
        return yd
    };
    var Ad = class {};
    class Bd extends Ad {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    }

    function Cd(a) {
        var b;
        const c = null === (b = zd()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Bd(null !== c && void 0 !== c ? c : a)
    }

    function Dd(a) {
        if (a instanceof Bd) return a.j;
        throw Error("");
    }

    function Ed(a) {
        var b;
        a = Dd(a);
        return (null === (b = xd()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
    };
    class Fd {
        constructor(a) {
            this.Pd = a
        }
    }

    function Gd(a) {
        return new Fd(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Id = [Gd("data"), Gd("http"), Gd("https"), Gd("mailto"), Gd("ftp"), new Fd(a => /^[^:]*([/?#]|$)/.test(a))];

    function Jd(a = Id) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Fd && c.Pd("#")) return new vd("#")
        }
    };
    var Kd = class {};
    class Ld extends Kd {
        constructor(a) {
            super();
            this.l = a
        }
        toString() {
            return this.l.toString()
        }
    }

    function Md(a) {
        var b, c = null === (b = zd()) || void 0 === b ? void 0 : b.createScript(a);
        return new Ld(null !== c && void 0 !== c ? c : a)
    };

    function Nd(a) {
        return Md(a[0])
    }

    function Od(a) {
        return (...b) => {
            b = b.map(c => Md(JSON.stringify(c).replace(/</g, "\\x3c")).toString());
            return Md(`(${a.join("")})(${b.join(",")})`)
        }
    };

    function J(a, ...b) {
        if (0 === b.length) return Cd(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Cd(c.join(""))
    }

    function Pd(a, b) {
        let c = Ed(a);
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Cd(c)
    };

    function Qd(a) {
        return hd(a)
    }

    function Rd(a) {
        return a instanceof Ad ? Dd(a) : Fc(a)
    }

    function Sd(a) {
        if (a instanceof ud)
            if (a instanceof vd) a = a.j;
            else throw Error("");
        else a = Nc(a);
        return a
    }

    function Td(a) {
        return Gc(Rd(a).toString())
    };

    function Ud(a, b) {
        a.href = Sd(b)
    };

    function Vd(a, b) {
        a.style.cssText = Wc(b)
    };

    function Wd(a) {
        var b;
        const c = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function Xd(a, b) {
        if (b instanceof Kd)
            if (b instanceof Ld) b = b.l;
            else throw Error("");
        else b = b instanceof Ac && b.constructor === Ac ? b.j : "type_error:SafeScript";
        a.textContent = b;
        Wd(a)
    }

    function Yd(a, b) {
        a.src = Rd(b);
        Wd(a)
    };

    function Zd() {
        return !1
    }

    function $d() {
        return !0
    }

    function ae(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function be(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function ce(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function de(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function ee(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function fe(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var ge = {
            passive: !0
        },
        he = ce(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function ie(a) {
        return a ? a.passive && he() ? a : a.capture || !1 : !1
    }

    function L(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ie(d)), !0) : !1
    }

    function je(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ie(d)), !0) : !1
    };

    function ke(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                var g;
                f.onload = null;
                f.onerror = null;
                null === (g = f.parentElement) || void 0 === g ? void 0 : g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Yd(f, a);
            "complete" !== b.document.readyState ? L(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };

    function le(a) {
        return nc(this, function*() {
            var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.Ha}`;
            let c = void 0;
            try {
                c = yield me(b)
            } catch (g) {}
            if (c) {
                b = a.Sa || c.sodar_query_id;
                var d = void 0 === c.rc_enable ? "n" : c.rc_enable,
                    e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                    f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                if (b && c.bg_hash_basename && c.bg_binary) return {
                    context: a.A,
                    wd: c.bg_hash_basename,
                    vd: c.bg_binary,
                    Qd: a.j + "_" + a.l,
                    Sa: b,
                    Ha: a.Ha,
                    xb: d,
                    Gb: e,
                    vb: f
                }
            }
        })
    }
    let me = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });

    function ne(a) {
        nc(this, function*() {
            const b = yield le(a);
            if (b) {
                var c = window,
                    d = c.GoogleGcLKhOms;
                d && "function" === typeof d.push || (d = c.GoogleGcLKhOms = []);
                d.push({
                    ["_ctx_"]: b.context,
                    ["_bgv_"]: b.wd,
                    ["_bgp_"]: b.vd,
                    ["_li_"]: b.Qd,
                    ["_jk_"]: b.Sa,
                    ["_st_"]: b.Ha,
                    ["_rc_"]: b.xb,
                    ["_dl_"]: b.Gb,
                    ["_g2_"]: b.vb
                });
                if (d = c.GoogleDX5YKUSk) c.GoogleDX5YKUSk = void 0, d[1]();
                c = Ic(oc, {
                    basename: "sodar2"
                });
                ke(c)
            }
            return b
        })
    };

    function oe(a, b) {
        return bc(a, 5, b)
    }

    function pe(a, b) {
        return ac(a, 3, b, "")
    }
    var qe = class extends v {
        constructor() {
            super(void 0)
        }
    };

    function re(a, b) {
        return ac(a, 1, b, "")
    }
    var se = class extends v {
        constructor(a) {
            super(a)
        }
    };

    function te(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var ue = class {
            constructor(a) {
                this.j = a.j;
                this.l = a.l;
                this.A = a.A;
                this.Sa = a.Sa;
                this.ka = a.L();
                this.Ha = a.Ha;
                this.xb = a.xb;
                this.Gb = a.Gb;
                this.vb = a.vb
            }
        },
        ve = class {
            constructor(a, b, c) {
                this.j = a;
                this.l = b;
                this.A = c;
                this.ka = window;
                this.Ha = "env";
                this.xb = "n";
                this.Gb = "0";
                this.vb = "1"
            }
            L() {
                return this.ka
            }
            build() {
                return new ue(this)
            }
        };
    var xe = class extends v {
            constructor(a) {
                super(a, -1, we)
            }
        },
        we = [2, 3];
    var ye = class extends v {
        constructor(a) {
            super(a)
        }
        l() {
            return y(this, 1)
        }
        H() {
            return y(this, 2)
        }
        I() {
            return y(this, 3)
        }
        G() {
            return y(this, 4)
        }
    };
    var ze = class extends v {
        constructor() {
            super(void 0)
        }
        l() {
            return y(this, 1)
        }
        H() {
            return y(this, 2)
        }
        I() {
            return y(this, 3)
        }
        G() {
            return y(this, 4)
        }
    };
    var Ae = class extends v {
        constructor() {
            super(void 0)
        }
        l() {
            return y(this, 1)
        }
        H() {
            return y(this, 2)
        }
        I() {
            return y(this, 3)
        }
        G() {
            return y(this, 4)
        }
    };
    var Be = document,
        Ce = window;
    var De = ce(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = hd(pd);
        return !b.parentElement
    });

    function Ee(a, b) {
        if (De())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = hd(b)
    }

    function Fe(a, b) {
        b = b instanceof Mc ? b : Tc(b, /^data:image\//i.test(b));
        a.src = Nc(b)
    }
    var Ge = /^[\w+/_-]+[=]{0,2}$/;

    function He() {
        var a = t.document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ge.test(a) ? a : "" : ""
    };

    function Ie(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Je(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Ke(a) {
        return Je.apply(null, arguments) / arguments.length
    };

    function Le(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    Le.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Le.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Le.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Me(a, b) {
        this.width = a;
        this.height = b
    }
    p = Me.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ne(a) {
        return a = wa(a, void 0)
    }

    function Oe(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Pe, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = kd(e + " ", null), Ee(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Pe = /&([^;\s<&]+);?/g;

    function Qe() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ na()).toString(36)
    }

    function Re(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Se(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Te(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Ue(a) {
        return a ? new Ve(We(a)) : ta || (ta = new Ve)
    }

    function Xe(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Me(a.clientWidth, a.clientHeight)
    }

    function Ye(a) {
        var b = a.scrollingElement ? a.scrollingElement : mb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return ib && tb("10") && a.pageYOffset != b.scrollTop ? new Le(b.scrollLeft, b.scrollTop) : new Le(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Ze(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function $e(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ca(f) || da(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (da(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Sa(g ? $a(f) : f, d)
            }
        }
    }

    function af(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function bf(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function We(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var cf = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        df = {
            IMG: " ",
            BR: "\n"
        };

    function ef(a) {
        var b = [];
        ff(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function ff(a, b, c) {
        if (!(a.nodeName in cf))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in df) b.push(df[a.nodeName]);
        else
            for (a = a.firstChild; a;) ff(a, b, c), a = a.nextSibling
    }

    function gf(a, b, c, d) {
        if (!b && !c) return null;
        var e = b ? String(b).toUpperCase() : null;
        return hf(a, function(f) {
            return (!e || f.nodeName == e) && (!c || "string" === typeof f.className && Xa(f.className.split(/\s+/), c))
        }, d)
    }

    function hf(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    }

    function Ve(a) {
        this.j = a || t.document || document
    }
    p = Ve.prototype;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };

    function jf(a, b) {
        return af(a.j, b)
    }
    p.L = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.append = function(a, b) {
        $e(We(a), a, arguments)
    };
    p.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    p.Hd = bf;

    function kf() {
        return !(u("iPad") || u("Android") && !u("Mobile") || u("Silk")) && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    };
    var lf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    let mf = !1;

    function of (a) {
        try {
            return !!a && null != a.location.href && eb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function pf(a, b, c, d) {
        d = d || t;
        c && (d = qf(d));
        for (c = 0; d && 40 > c++ && (!b && ! of (d) || !a(d));) d = qf(d)
    }

    function qf(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function rf(a, b) {
        const c = sf("SCRIPT", a);
        Yd(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function tf(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function uf(a, b) {
        if (!vf()) {
            let c = Math.random();
            if (c < b) return c = wf(t), a[Math.floor(c * a.length)]
        }
        return null
    }

    function wf(a) {
        if (!a.crypto) return Math.random();
        try {
            const b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function xf(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function yf(a) {
        const b = [];
        xf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function zf(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var vf = ce(() => Wa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Af) || 1E-4 > Math.random());
    const Af = a => -1 != Ha.indexOf(a);
    var Bf = /^([0-9.]+)px$/,
        Cf = /^(-?[0-9.]{1,30})$/;

    function Df(a, b) {
        return Cf.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    }

    function Ef(a) {
        return /^true$/.test(a)
    }

    function Ff(a) {
        return (a = Bf.exec(a)) ? +a[1] : null
    }

    function Gf() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var Hf = {
        We: "allow-forms",
        Xe: "allow-modals",
        Ye: "allow-orientation-lock",
        Ze: "allow-pointer-lock",
        $e: "allow-popups",
        bf: "allow-popups-to-escape-sandbox",
        cf: "allow-presentation",
        df: "allow-same-origin",
        ef: "allow-scripts",
        ff: "allow-top-navigation",
        gf: "allow-top-navigation-by-user-activation"
    };
    const If = ce(() => yf(Hf));

    function Jf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = If();
        return a.length ? Ta(b, c => !Xa(a, c)) : b
    }

    function Kf() {
        const a = sf("IFRAME"),
            b = {};
        Sa(If(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Lf = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        Mf = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (Lf(a, b)) return a;
                if (!(a = qf(a))) break
            }
            return null
        },
        M = (a, b) => {
            xf(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Nf = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Of = /\.proxy\.googleprod\.com(:\d+)?$/;
    const Pf = /.*domain\.test$/,
        Qf = /\.prod\.google\.com(:\d+)?$/;
    var Rf = a => !!Nf[a] || Of.test(a) || Pf.test(a) || Qf.test(a),
        Sf = (a, b) => {
            a: {
                var c = a.length;
                const d = "string" === typeof a ? a.split("") : a;
                for (let e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 <= b ? (c = a[b], Array.prototype.splice.call(a, b, 1), c) : null
        },
        Tf = (a, b) => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52),
                    configurable: !1
                })
            } catch (c) {
                b && b.ta(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || 0 >= a) && b.ta(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        };

    function Uf(a, b, c, d) {
        d = void 0 === d ? [] : d;
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || bf(h, b))) {
                        for (const k of d) k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        pf(f => {
            if (!f.parent || ! of (f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++) try {
                a: {
                    var h = g[l];
                    try {
                        var k = h.contentWindow || (h.contentDocument ? Ze(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    k =
                    null
                }
                if (k == f) {
                    Uf(f.parent, g[l], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var Vf = (a, b) => {
            Uf(Ze(We(a)), a, b)
        },
        Wf = (a, b) => {
            const c = sf("DIV");
            c.id = a;
            c.textContent = b;
            M(c, {
                height: "24px",
                "line-height": "24px",
                "text-align": "center",
                "vertical-align": "middle",
                color: "white",
                "background-color": "black",
                margin: "0",
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "11px",
                "letter-spacing": "0.08em"
            });
            return c
        },
        Xf = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Yf(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    }

    function sf(a, b) {
        b = void 0 === b ? document : b;
        a = String(a);
        let c;
        if (mf || "application/xhtml+xml" === (null == (c = b) ? void 0 : c.contentType)) a = a.toLowerCase();
        return b.createElement(a)
    }
    var Zf = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, of (a) && (b = a);
        return b
    };

    function $f(a, b, c = null) {
        ag(a, b, c)
    }

    function ag(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        const d = sf("IMG", a.document);
        if (c) {
            const e = f => {
                c && c(f);
                je(d, "load", e);
                je(d, "error", e)
            };
            L(d, "load", e);
            L(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var cg = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gfp_cw_status";
            xf(a, (c, d) => {
                c && (b += `&${d}=${encodeURIComponent(c)}`)
            });
            bg(b)
        },
        bg = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : $f(b, a)
        };
    var dg = {
        Ae: "google_adtest",
        Ee: "google_ad_client",
        Fe: "google_ad_format",
        He: "google_ad_height",
        Ue: "google_ad_width",
        Le: "google_ad_layout",
        Me: "google_ad_layout_key",
        Ne: "google_ad_output",
        Oe: "google_ad_region",
        Re: "google_ad_slot",
        Se: "google_ad_type",
        Te: "google_ad_url",
        Ve: "google_allow_expandable_ads",
        kf: "google_analytics_domain_name",
        lf: "google_analytics_uacct",
        Af: "google_container_id",
        Kf: "google_gl",
        dg: "google_enable_ose",
        ng: "google_full_width_responsive",
        jh: "google_rl_filtering",
        ih: "google_rl_mode",
        kh: "google_rt",
        hh: "google_rl_dest_url",
        Rg: "google_max_radlink_len",
        Wg: "google_num_radlinks",
        Xg: "google_num_radlinks_per_unit",
        De: "google_ad_channel",
        Qg: "google_max_num_ads",
        Sg: "google_max_responsive_height",
        vf: "google_color_border",
        cg: "google_enable_content_recommendations",
        Hf: "google_content_recommendation_ui_type",
        Gf: "google_source_type",
        Ff: "google_content_recommendation_rows_num",
        Ef: "google_content_recommendation_columns_num",
        Df: "google_content_recommendation_ad_positions",
        If: "google_content_recommendation_use_square_imgs",
        xf: "google_color_link",
        wf: "google_color_line",
        zf: "google_color_url",
        Be: "google_ad_block",
        Qe: "google_ad_section",
        Ce: "google_ad_callback",
        sf: "google_captcha_token",
        yf: "google_color_text",
        hf: "google_alternate_ad_url",
        Ke: "google_ad_host_tier_id",
        tf: "google_city",
        Ie: "google_ad_host",
        Je: "google_ad_host_channel",
        jf: "google_alternate_color",
        uf: "google_color_bg",
        eg: "google_encoding",
        lg: "google_font_face",
        Nf: "google_cust_ch",
        Qf: "google_cust_job",
        Pf: "google_cust_interests",
        Of: "google_cust_id",
        Rf: "google_cust_u_url",
        pg: "google_hints",
        Eg: "google_image_size",
        Tg: "google_mtl",
        Nh: "google_cpm",
        Cf: "google_contents",
        Vg: "google_native_settings_key",
        Jf: "google_country",
        Fh: "google_targeting",
        mg: "google_font_size",
        Uf: "google_disable_video_autoplay",
        Sh: "google_video_product_type",
        Rh: "google_video_doc_id",
        Qh: "google_cust_gender",
        Bh: "google_cust_lh",
        Ah: "google_cust_l",
        Mh: "google_tfs",
        Ug: "google_native_ad_template",
        Jg: "google_kw",
        Ch: "google_tag_for_child_directed_treatment",
        Dh: "google_tag_for_under_age_of_consent",
        mh: "google_region",
        Mf: "google_cust_criteria",
        Pe: "google_safe",
        Lf: "google_ctr_threshold",
        oh: "google_resizing_allowed",
        rh: "google_resizing_width",
        qh: "google_resizing_height",
        Ph: "google_cust_age",
        LANGUAGE: "google_language",
        Kg: "google_kw_type",
        bh: "google_pucrd",
        ah: "google_page_url",
        Eh: "google_tag_partner",
        wh: "google_restrict_data_processing",
        xe: "google_adbreak_test",
        Ge: "google_ad_frequency_hint",
        ye: "google_admob_interstitial_slot",
        ze: "google_admob_rewarded_slot",
        Pg: "google_max_ad_content_rating",
        gh: "google_ad_public_floor",
        eh: "google_ad_private_floor"
    };

    function eg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = eg.prototype;
    p.sa = function() {
        return this.bottom - this.top
    };

    function fg(a) {
        return new eg(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof eg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function gg(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function hg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function ig(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new hg(c, e, d - c, a - e)
        }
        return null
    }

    function jg(a, b) {
        var c = ig(a, b);
        if (!c || !c.height || !c.width) return [new hg(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new hg(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new hg(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new hg(a.left, d, b.left - a.left, e));
        h < f && c.push(new hg(h, d, f - h, e));
        return c
    }
    hg.prototype.contains = function(a) {
        return a instanceof Le ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    hg.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    hg.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    hg.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const kg = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function lg(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function mg() {
        const a = lg();
        return a && a.initialIntersection
    }

    function ng() {
        const a = mg();
        return a && da(a.rootBounds) ? new Me(a.rootBounds.width, a.rootBounds.height) : null
    }

    function og(a) {
        return (a = a || lg()) ? of (a.master) ? a.master : null : null
    }

    function pg(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Ya(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || rf(a.document, g ? Ic(mc("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Gc(lc(mc("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, L(a, "message", f), d = () => {
            je(a, "message", f)
        });
        return e
    };

    function qg(a, b, c) {
        if ("string" === typeof b)(b = rg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = rg(c, d);
                f && (c.style[f] = e)
            }
    }
    var sg = {};

    function rg(a, b) {
        var c = sg[b];
        if (!c) {
            var d = Se(b);
            c = d;
            void 0 === a.style[d] && (d = (mb ? "Webkit" : lb ? "Moz" : ib ? "ms" : null) + Te(d), void 0 !== a.style[d] && (c = d));
            sg[b] = c
        }
        return c
    }

    function tg(a, b) {
        var c = We(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function ug(a, b) {
        return tg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function vg(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function wg(a) {
        var b = We(a),
            c = new Le(0, 0);
        var d = b ? We(b) : document;
        d = !ib || 9 <= Number(wb) || "CSS1Compat" == Ue(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = vg(a);
        b = Ye(Ue(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function xg(a) {
        var b = yg;
        if ("none" != ug(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function yg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = mb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = vg(a), new Me(a.right - a.left, a.bottom - a.top)) : new Me(b, c)
    }

    function zg(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Ag(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? zg(a, b) : 0
    }
    var Bg = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Cg(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Bg ? Bg[b] : zg(a, b)
    };
    var Dg = (a, b) => {
            if (a)
                for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Eg = a => "number" === typeof a && 0 < a,
        Fg = () => {
            var a = N();
            "google_onload_fired" in a || (a.google_onload_fired = !1, L(a, "load", () => {
                a.google_onload_fired = !0
            }))
        },
        Hg = (a, b) => {
            a = Gg(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        Gg = a => Object.entries(Ig(a)).map(b => {
            var [c, d] = b;
            return `${c}=${encodeURIComponent(String(d))}`
        }).join("&"),
        Ig = a => {
            const b = {};
            Dg(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" ===
                    typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        Jg = () => {
            var a = void 0 === a ? Ce : a;
            try {
                return a.history.length
            } catch (b) {
                return 0
            }
        },
        Kg = () => {
            var a = void 0 === a ? Ce : a;
            return "http:" === a.location.protocol
        },
        Lg = a => {
            var b = void 0 === b ? 1 : b;
            a = og(lg(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + b
        },
        Mg = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        Ng = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = Jg();
            let b;
            a.u_h = null == (b = Ce.screen) ? void 0 : b.height;
            let c;
            a.u_w = null == (c = Ce.screen) ? void 0 : c.width;
            let d;
            a.u_ah = null ==
                (d = Ce.screen) ? void 0 : d.availHeight;
            let e;
            a.u_aw = null == (e = Ce.screen) ? void 0 : e.availWidth;
            let f;
            a.u_cd = null == (f = Ce.screen) ? void 0 : f.colorDepth
        },
        Og = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") +
                c
        },
        Pg = !!window.google_async_iframe_id;
    let Qg = Pg && window.parent || window;
    var N = () => {
            if (Pg && ! of (Qg)) {
                let a = "." + Be.domain;
                try {
                    for (; 2 < a.split(".").length && ! of (Qg);) Be.domain = a = a.substr(a.indexOf(".") + 1), Qg = window.parent
                } catch (b) {} of (Qg) || (Qg = window)
            }
            return Qg
        },
        Rg = RegExp("(^| )adsbygoogle($| )"),
        Sg = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        Tg = () => {
            var a;
            let b;
            const c = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/,
                    ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    b = 3;
                    for (a = 1; a;) try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)), b++
                    } catch (d) {
                        a = null
                    }
                    return b.toString()
                }
                if (Ja()) {
                    a = null;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        b = 0;
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === b) return b.toString()
                        }
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return b = a.GetVariable("$version").split(" ")[1], b.replace(/,/g,
                        ".")
                }
            }
            return "0"
        },
        Ug = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        Vg = a => {
            a = a.top;
            return of(a) ? a : null
        },
        Wg = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        Xg = (a, b) => a.source !== b.contentWindow &&
        a.source.parent !== b.contentWindow ? !1 : !0;
    class Yg {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Zg = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var $g = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        ah = class {
            constructor(a, b, c) {
                this.url = a;
                this.ka = b;
                this.Bc = !!c;
                this.depth = null
            }
        };

    function bh(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function ch(a, b, c, d, e) {
        const f = [];
        xf(a, function(g, h) {
            (g = dh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function dh(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(dh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ch(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function eh(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function fh(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = eh(a) - c.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let l = ch(h[k], a.A, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.A;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    class gh {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function hh(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }

    function ih(a, b, c, d, e, f) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let g;
            c instanceof gh ? g = c : (g = new gh, xf(c, (k, l) => {
                var m = g,
                    n = m.B++;
                k = bh(l, k);
                m.j.push(n);
                m.l[n] = k
            }));
            const h = fh(g, a.l, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? $f(t, h, f) : $f(t, h))
        } catch (g) {}
    }
    class jh {
        constructor(a) {
            this.l = a;
            this.j = Math.random()
        }
    };
    let kh = null;

    function lh() {
        if (null === kh) {
            kh = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    kh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return kh
    };
    var mh = () => {
            const a = t.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : na()
        },
        nh = () => {
            const a = t.performance;
            return a && a.now ? a.now() : null
        };
    class oh {
        constructor(a, b) {
            var c = nh() || mh();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const ph = t.performance,
        qh = !!(ph && ph.mark && ph.measure && ph.clearMarks),
        rh = ce(() => {
            var a;
            if (a = qh) a = lh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function sh(a) {
        a && ph && rh() && (ph.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), ph.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function th(a) {
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (rh() && Sa(a.events, sh), a.events.length = 0)
    }

    function uh(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw sh(c), e;
        }
        a.end(c);
        return d
    }
    class vh {
        constructor(a) {
            this.events = [];
            this.l = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = rh() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new oh(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            ph && rh() && ph.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (nh() || mh()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                ph && rh() && ph.mark(b);
                !this.j ||
                    2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function wh(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = xh(a.stack, b));
        return b
    }

    function xh(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }

    function yh(a, b) {
        a.A = b
    }

    function zh(a, b, c, d) {
        let e, f;
        try {
            a.j && a.j.j ? (f = a.j.start(b.toString(), 3), e = c(), a.j.end(f)) : e = c()
        } catch (g) {
            c = !0;
            try {
                sh(f), c = a.C(b, new Yg(g, {
                    message: wh(g)
                }), void 0, d)
            } catch (h) {
                a.ta(217, h)
            }
            if (c) {
                let h, k;
                null == (h = window.console) || null == (k = h.error) || k.call(h, g)
            } else throw g;
        }
        return e
    }

    function Ah(a, b, c, d, e) {
        return (...f) => zh(a, b, () => c.apply(d, f), e)
    }
    class Bh {
        constructor(a, b) {
            this.B = a;
            this.A = null;
            this.C = this.ta;
            this.j = void 0 === b ? null : b;
            this.l = !1
        }
        ta(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const K = new gh;
                var g = K;
                g.j.push(1);
                g.l[1] = bh("context", a);
                b.error && b.meta && b.id || (b = new Yg(b, {
                    message: wh(b)
                }));
                if (b.msg) {
                    g = K;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = bh("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.A) try {
                    this.A(b)
                } catch (Na) {}
                if (d) try {
                    d(b)
                } catch (Na) {}
                d = K;
                k = [k];
                d.j.push(3);
                d.l[3] = k;
                d = t;
                k = [];
                b = null;
                do {
                    var l = d;
                    if ( of (l)) {
                        var m = l.location.href;
                        b = l.document &&
                            l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new ah(m || "", l));
                    try {
                        d = l.parent
                    } catch (Na) {
                        d = null
                    }
                } while (d && l != d);
                for (let Na = 0, Sb = k.length - 1; Na <= Sb; ++Na) k[Na].depth = Sb - Na;
                l = t;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.Bc = !0)
                    }
                var q = k;
                let ha = new ah(t.location.href, t, !1);
                l = null;
                const qa = q.length - 1;
                for (n = qa; 0 <= n; --n) {
                    var r = q[n];
                    !l && Zg.test(r.url) && (l = r);
                    if (r.url && !r.Bc) {
                        ha =
                            r;
                        break
                    }
                }
                r = null;
                const Q = q.length && q[qa].url;
                0 != ha.depth && Q && (r = q[qa]);
                f = new $g(ha, r);
                if (f.l) {
                    q = K;
                    var x = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = bh("top", x)
                }
                var w = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var D = f.j.url.match(lf),
                        A = D[1],
                        E = D[3],
                        F = D[4];
                    x = "";
                    A && (x += A + ":");
                    E && (x += "//", x += E, F && (x += ":" + F));
                    var H = x
                } else H = "";
                A = K;
                w = [w, {
                    url: H
                }];
                A.j.push(5);
                A.l[5] = w;
                ih(this.B, e, K, this.l, c)
            } catch (K) {
                try {
                    ih(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: wh(K),
                        url: f && f.j.url
                    }, this.l, c)
                } catch (ha) {}
            }
            return !0
        }
    };
    const Ch = a => null !== a && void 0 !== a;

    function Dh(a, b) {
        if (!b(a)) throw Error(String(a));
    };
    var Eh = a => "string" === typeof a,
        Fh = a => void 0 === a;
    var Gh;
    Gh = {
        fh: 0,
        Vc: 3,
        Wc: 4,
        Yc: 5
    };
    var Hh = Gh.Vc,
        Ih = Gh.Wc,
        Jh = Gh.Yc;
    var Kh = a => {
        var b = "Wb";
        if (a.Wb && a.hasOwnProperty(b)) return a.Wb;
        b = new a;
        return a.Wb = b
    };
    class Lh {
        constructor(a) {
            this.methodName = a
        }
    }
    var Mh = new Lh(15),
        Nh = new Lh(2),
        Oh = new Lh(3),
        Ph = new Lh(5),
        Qh = new Lh(6),
        Rh = new Lh(7),
        Sh = new Lh(8),
        Th = new Lh(14),
        Uh = (a, b, c) => b[a.methodName] || c || (() => {});

    function Vh(a, b, c) {
        a.j = d => {
            Uh(Nh, b, () => [])(d, c)
        };
        a.l = () => Uh(Oh, b, () => [])(c)
    }
    class Wh {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    }
    var Xh = (a, b = 0) => {
        Vh(Kh(Wh), a, b)
    };
    let Yh, Zh;
    const $h = N(),
        ai = new vh($h);
    (a => {
        Yh = null != a ? a : new jh(Kg() ? "http:" : "https:");
        "number" !== typeof $h.google_srt && ($h.google_srt = Math.random());
        hh(Yh, $h.google_srt);
        Zh = new Bh(Yh, ai);
        yh(Zh, () => {});
        Zh.l = !0;
        "complete" == $h.document.readyState ? $h.google_measure_js_timing || th(ai) : ai.j && L($h, "load", () => {
            $h.google_measure_js_timing || th(ai)
        })
    })();
    var bi = (a, b, c) => zh(Zh, a, b, c),
        O = (a, b) => Ah(Zh, a, b, void 0, void 0),
        P = (a, b, c) => {
            const d = Kh(Wh).l();
            !b.eid && d.length && (b.eid = d.toString());
            ih(Yh, a, b, !0, c, void 0)
        },
        ci = (a, b) => Zh.ta(a, b, void 0, void 0),
        di = () => a => {
            ci(915, a instanceof Error ? a : Error(a))
        };
    var ei = (a, b) => {
        const c = Gf();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
    };
    Gc(lc(mc("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var fi = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            L(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = je(a, "message", e));
                return g
            }
        },
        gi = (a, b, c, d = null) => {
            const e = fi(a, b, ae(c, () => e()), d);
            return e
        },
        hi = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && hi(a[f], b, c, d, --e)
        };

    function ii(a, b, c, d) {
        Rf(d.origin) && "expandable-xpc-ready" == c.notify && ji(a, b)
    }

    function ji(a, b) {
        var c = a.Ub;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.pc,
            f: a.ce,
            g: a.md,
            h: a.Od,
            i: void 0
        });
        t.setTimeout(O(220, Sg(() => {
            rf(c.document, Td(b))
        })), 0)
    };
    var li = class extends v {
            constructor() {
                super(void 0, -1, ki)
            }
        },
        ki = [15];
    var mi = class extends v {
        constructor() {
            super(void 0)
        }
    };
    var ni = class extends v {
        constructor() {
            super(void 0)
        }
    };
    let oi = null,
        pi = null;
    var qi = () => {
            if (null != oi) return oi;
            oi = !1;
            try {
                const a = Vg(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (oi = !0);
                t.localStorage.getItem("google_logging") && (oi = !0)
            } catch (a) {}
            return oi
        },
        ri = () => {
            if (null != pi) return pi;
            pi = !1;
            try {
                const a = Vg(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) pi = !0
            } catch (a) {}
            return pi
        },
        si = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && qi() && rf(t.document,
                Gc(lc(mc("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    Gc(lc(mc("https://pagead2.googlesyndication.com/pagead/osd.js")));

    function ti() {
        var a = ui,
            b = vi;
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (d) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            let d;
            !0 === c ? d = 2 : !1 !== c && (d = uf([0], a), null == d && ((d = uf([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };

    function wi(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function xi(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function yi(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function zi() {
        let a = N();
        const b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new Ai
    }
    class Ai {
        getNewBlocks() {}
        setupOse() {}
        getOseId() {
            return -1
        }
        getCorrelator() {
            return ""
        }
        numBlocks() {
            return 0
        }
        registerAdBlock() {}
        unloadAdBlock() {}
    };
    const Bi = new vh(N());
    var Ci = () => {
        const a = N();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || th(Bi))
    };
    (() => {
        const a = N();
        a && a.document && ("complete" == a.document.readyState ? Ci() : Bi.j && L(a, "load", () => {
            Ci()
        }))
    })();
    var Ei = () => {
            var a = Di;
            const b = N() || t;
            return b.google_osd_loaded ? !1 : (rf(b.document, a), b.google_osd_loaded = !0)
        },
        Fi = (a, b, c) => {
            a && (c ? L(a, "load", b) : je(a, "load", b))
        },
        Gi = () => {
            const a = (N() || t).google_osd_amcb;
            return "function" === typeof a ? a : null
        },
        Hi = Gc(lc(mc("https://www.googletagservices.com/activeview/js/current/osd.js")));

    function Ii() {
        const a = N(),
            b = a.__google_ad_urls;
        if (!b) return a.__google_ad_urls = new Ji(a);
        try {
            if (0 <= b.getOseId()) return b
        } catch (c) {}
        try {
            return a.__google_ad_urls = new Ji(a, b)
        } catch (c) {
            return a.__google_ad_urls = new Ji(a)
        }
    }
    class Ji {
        constructor(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.A = b ? b.A : "";
            this.j = b && b.j ? b.j : [];
            if (b)
                for (a = 0; a < this.j.length; ++a) this.j[a].B = !0
        }
        getNewBlocks(a, b) {
            let c = this.j.length;
            for (let d = 0; d < c; d++) {
                let e = this.j[d];
                !e.A && e.j && (e.A = !0, a(e.j, e.D, e.J, e.l, void 0, e.B, e.G, e.I, e.H))
            }
            b && ((N() || t).google_osd_amcb = a)
        }
        setupOse(a) {
            if (this.getOseId()) return this.getOseId();
            let b = ti();
            if (!b) return 0;
            this.l = b;
            this.A = String(a || 0);
            return this.getOseId()
        }
        getOseId() {
            return window && Math.random && navigator ? this.l : -1
        }
        getCorrelator() {
            return this.A
        }
        numBlocks() {
            return this.j.length
        }
        registerAdBlock(a,
            b, c, d, e, f, g = () => {}) {
            c = Gi();
            e = mh() || -1;
            f = t.pageYOffset;
            0 <= f || (f = -1);
            c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new Ki(a, b, d, g, e, f), this.j.push(g), Fi(d, g.C, !0), Di || ($f(t, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om" + `&rs=${b}` + `&req=${a}`), Di = Hi), Ei() && Fg())
        }
        unloadAdBlock(a, b, c = !1) {
            b = N();
            void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
            c && (c = Sf(this.j, d => d.j == a)) && Fi(a, c.C, !1)
        }
    }
    var Di = null,
        vi = 0,
        ui = 0,
        Ki = class {
            constructor(a, b, c, d = ba, e = -1, f = -1) {
                this.D = a;
                this.J = b;
                this.j = c;
                this.B = this.A = this.l = !1;
                this.G = d;
                this.I = e;
                this.H = f;
                this.C = () => this.l = !0
            }
        };
    window.Goog_AdSense_getAdAdapterInstance = Ii;
    oa("Goog_AdSense_OsdAdapter", Ji);
    var Li = (a, b, c, d) => {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (a && a.top == a) return !1;
            const e = b.documentElement;
            if (c && d) {
                let f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        Mi = (a, b) => {
            Dg(a, (c, d) => {
                b[d] = c
            })
        },
        Ni = a => {
            let b = a.location.href;
            if (a == a.top) return {
                url: b,
                yb: !0
            };
            let c = !1;
            const d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                yb: c
            }
        },
        Oi = () => {
            var a = N();
            if (a == a.top) return 0;
            for (; a && a != a.top && of (a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var Pi = class extends v {
        constructor(a) {
            super(a)
        }
    };
    var Ri = class extends v {
            constructor(a) {
                super(a, -1, Qi)
            }
        },
        Qi = [4];
    var Si = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Ti = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Vi = class extends v {
            constructor(a) {
                super(a, -1, Ui)
            }
        },
        Wi = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Xi = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Ui = [1];
    var Yi = class extends v {
        constructor(a) {
            super(a)
        }
    };
    var $i = class extends v {
            constructor(a) {
                super(a, -1, Zi)
            }
        },
        aj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        bj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Zi = [3];
    var dj = class extends v {
            constructor(a) {
                super(a, -1, cj)
            }
        },
        cj = [2];
    var ej = class extends v {
        constructor(a) {
            super(a)
        }
    };
    var gj = class extends v {
            constructor(a) {
                super(a, -1, fj)
            }
        },
        fj = [1];
    var hj = class extends v {
        constructor(a) {
            super(a)
        }
        V() {
            return C(this, Ri, 1)
        }
        l() {
            return y(this, 2)
        }
    };
    var ij = class extends v {
            constructor(a) {
                super(a)
            }
        },
        jj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        kj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        lj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        mj = [1, 2, 3];
    var nj = class extends v {
        constructor(a) {
            super(a)
        }
    };
    var pj = class extends v {
            constructor(a) {
                super(a, -1, oj)
            }
        },
        qj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        oj = [1];
    var sj = class extends v {
            constructor(a) {
                super(a, -1, rj)
            }
        },
        rj = [3, 4];
    var tj = class extends v {
        constructor(a) {
            super(a)
        }
    };

    function uj() {
        var a = new vj;
        return z(a, 2, 1)
    }
    var vj = class extends v {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return z(this, 1, a)
        }
    };
    var xj = class extends v {
            constructor(a) {
                super(a, -1, wj)
            }
            V() {
                return C(this, Ri, 1)
            }
            l() {
                return y(this, 2)
            }
        },
        wj = [6, 7, 9, 10, 11];
    var zj = class extends v {
            constructor(a) {
                super(a, -1, yj)
            }
        },
        yj = [4];
    var Bj = class extends v {
            constructor(a) {
                super(a, -1, Aj)
            }
        },
        Dj = class extends v {
            constructor(a) {
                super(a, -1, Cj)
            }
        },
        Ej = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Fj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Gj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Hj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Aj = [1],
        Cj = [1],
        Ij = [1, 2];

    function Jj(a) {
        return C(a, Kj, 13)
    }

    function Lj(a) {
        return C(a, Mj, 15)
    }
    var Oj = class extends v {
            constructor(a) {
                super(a, -1, Nj)
            }
        },
        Pj = class extends v {
            constructor() {
                super(void 0)
            }
        },
        Qj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Sj = class extends v {
            constructor(a) {
                super(a, -1, Rj)
            }
        },
        Tj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Uj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Kj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Vj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Mj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Wj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Xj = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Nj = [1, 2, 5, 7],
        Rj = [2, 5, 6, 11];
    var Yj = class extends v {
        constructor() {
            super(void 0)
        }
    };
    var rc = {
        lh: 0,
        fg: 1,
        ig: 2,
        gg: 3,
        hg: 4,
        og: 8,
        zh: 9,
        Ng: 10,
        Og: 11,
        uh: 16,
        Tf: 17,
        Sf: 24,
        Lg: 25,
        nf: 26,
        mf: 27,
        Xc: 30,
        Gg: 32,
        Ig: 40
    };
    var Zj = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        ak = {
            [1]: 1,
            [2]: 1,
            [3]: 1,
            [4]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function bk(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.eb = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                da(c) && (a.F = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                Eg(a.B) && Eg(a.l) || P("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.H(b)
    }
    class ck {
        constructor() {
            this.D = this.F = this.A = this.eb = null;
            this.l = this.B = 0
        }
        H() {
            return !0
        }
    };
    var R = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        dk = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        ek = class {
            constructor(a, b = []) {
                this.j = a;
                this.defaultValue = b
            }
        };
    var fk = new R(1084),
        gk = new R(1082),
        hk = new R(236),
        ik = new R(383, !0),
        jk = new R(1043),
        kk = new dk(1032),
        lk = new class {
            constructor(a, b = "") {
                this.j = a;
                this.defaultValue = b
            }
        }(14),
        mk = new dk(1044),
        nk = new dk(1103),
        ok = new dk(1017, -1),
        pk = new dk(1077),
        qk = new R(316),
        rk = new R(1021, !0),
        sk = new R(334),
        tk = new dk(54),
        uk = new R(1091),
        vk = new R(313),
        wk = new dk(66, -1),
        xk = new dk(65, -1),
        yk = new R(369),
        zk = new R(368),
        Ak = new R(1087),
        Bk = new R(1096),
        Ck = new R(348),
        Dk = new R(265),
        Ek = new R(1102),
        Fk = new R(260),
        Gk = new R(1076),
        Hk = new dk(29, 2),
        Ik =
        new dk(30, 3),
        Jk = new dk(1072),
        Kk = new R(290),
        Lk = new R(190),
        Mk = new dk(1068),
        Nk = new R(1036, !0),
        Ok = new R(154),
        Pk = new R(1095),
        Qk = new R(1045),
        Rk = new R(1118),
        Sk = new R(251),
        Tk = new R(380254521),
        Uk = new R(381914117),
        Vk = new R(83),
        Wk = new R(360245598),
        Xk = new dk(1927),
        Yk = new R(1931, !0),
        Zk = new ek(1934, ["A/OOU4XAFfeAV4kM4+W9WBwNAHqq/bvtrRcJ1wpnNyO/i076BSUy1d14l2kBEgVmEuvxojSpD23172C6hBg2AQYAAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "AwrB+XVH/KV6HfZNVtSEqlUJi3yUbtCp0/TJRj+38NDIw19/9P1h7ECTtdLdhIzG0Bsl4n/0rVmttJtGUCcewgAAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "Ax15QOERqai2A5XWrDY38Eg07xh2T0pkhpDPJuDlxr7D2Ka8wHvklgK7tTPZOnT+8H31lwHto5JpvYV8jRn1WgIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
        ]),
        $k = new R(377431981, !0),
        al = new R(77),
        bl = new R(78),
        cl = new R(309),
        dl = new R(1953, !0),
        el = new R(80),
        fl = new R(76),
        gl = new R(81),
        hl = new R(380025941),
        il = new R(84),
        jl = new R(1950, !0),
        kl = new R(188),
        ll = new R(1956),
        ml = new R(1928),
        nl = new R(1941),
        ol = new R(370946349),
        pl = new R(392736476),
        ql = new R(379841917),
        rl = new R(397079674),
        sl = new ek(1932, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
            "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        tl = new dk(397907552),
        ul = new R(396382471, !0),
        vl = new R(393546021),
        wl = new R(401243724),
        xl = new dk(1935),
        yl = new R(398305417);
    var zl = class {
            constructor() {
                const a = {};
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {};
                this.A = () => {}
            }
        },
        S = a => Kh(zl).B(a.j, a.defaultValue),
        T = a => Kh(zl).C(a.j, a.defaultValue);

    function Al(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Bl) : a.google_reactive_ads_global_state = new Cl;
        return a.google_reactive_ads_global_state
    }
    class Cl {
        constructor() {
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
            this.floatingAdsStacking = new Bl
        }
    }
    var Bl = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Dl = 728 * 1.38,
        El = (a, b = 420) => (a = V(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        Fl = a => {
            var b = V(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        Hl = a => Math.max(0, Gl(a, !0) - V(a).clientHeight),
        V = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        Gl = (a, b) => {
            const c = V(a);
            return b ? c.scrollHeight == V(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        Jl = (a, b) => Il(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        Kl = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Ll = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Ml = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Nl = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Ol = (a, b, c, d, e) => {
            ih(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        Il = a => 26 === a || 27 === a || 40 === a;

    function Pl(a, b) {
        b = void 0 === b ? [] : b;
        const c = Date.now();
        return Ta(b, d => c - d < 1E3 * a)
    }

    function Ql(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Wa(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = Pl(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function Rl(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : Ql(a, b)
    };
    var Sl = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= Fl(a);
            d |= El(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Rl(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            S(hl) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Tl extends ck {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.G = !1
        }
        H(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = ec(Oj, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.G = !0);
            return !0
        }
    };
    var Ul = (a, b = !1) => {
        try {
            return b ? (new Me(a.innerWidth, a.innerHeight)).round() : Xe(a || window).round()
        } catch (c) {
            return new Me(-12245933, -12245933)
        }
    };

    function Vl(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function Wl(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Le(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Xl(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var Yl = !ib && !La();

    function Zl(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (Yl && a.dataset) {
            if (Oa() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var $l = (a, b, c) => {
            if (!b) return null;
            const d = af(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = V(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        bm = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, kf() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), am(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        am = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == Zl(a[b])) return !0;
            return !1
        };
    let cm = (new Date).getTime();
    var dm = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var em = {
        Ag: 0,
        zg: 1,
        wg: 2,
        rg: 3,
        xg: 4,
        sg: 5,
        yg: 6,
        ug: 7,
        vg: 8,
        qg: 9,
        tg: 10
    };
    var fm = {
        Cg: 0,
        Dg: 1,
        Bg: 2
    };

    function gm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function hm(a) {
        a = Ua(a, b => new eg(b.top, b.right, b.bottom, b.left));
        a = im(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function im(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Va(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, fg(a[0]))
    };

    function jm(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var lm = class {
        constructor() {
            this.l = new km(this);
            this.j = 0
        }
    };

    function mm(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var km = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            mm(this)
        }
    };

    function nm(a, b) {
        om(a).forEach(b, void 0)
    }

    function om(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function pm(a, b) {
        return void 0 !== a.j[qm(b)]
    }

    function rm(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function sm(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const tm = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = qm(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = qm(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = qm(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Qa() {
            return rm(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function qm(a) {
        return a instanceof Object ? String(ea(a)) : a + ""
    };
    const um = class {
        constructor(a) {
            this.j = new tm;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return pm(this.j, a)
        }
    };
    const vm = new um("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    var ym = (a, b) => {
        const c = new wm(a, b);
        return () => xm(c)
    };

    function xm(a) {
        if (a.j) return !1;
        if (null == a.l) return zm(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return zm(a), !0;
        Am(a, b);
        return !0
    }

    function zm(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function Am(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            zm(a)
        }, b)
    }
    class wm {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function Bm(a, b, c) {
        return {
            top: a.j - c,
            right: a.A + a.l + b,
            bottom: a.j + c,
            left: a.A - b
        }
    }
    class Cm {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Dm(a, b) {
        a = a.getBoundingClientRect();
        return new Em(a.top + Ll(b), a.bottom - a.top)
    }

    function Fm(a) {
        return new Em(Math.round(a.wa), Math.round(a.j))
    }
    class Em {
        constructor(a, b) {
            this.wa = a;
            this.j = b
        }
        sa() {
            return this.j
        }
    };

    function Gm(a, b) {
        a.D ? b(a.A) : a.l.push(b)
    }

    function Hm(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class Im {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.G = ym(a, () => {
                if (null != this.C) {
                    var b = Gl(this.j, !0) - this.C;
                    1E3 < b && Hm(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = Gl(this.j, !0), this.j.addEventListener("scroll", this.G), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        lb() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.G);
            this.l = [];
            this.A = null
        }
    };
    var Jm = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Km {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Lm(a, b) {
        a.j.forEach((c, d) => void b(c, d, a))
    }

    function Mm(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Nm(d)
    }

    function Om(a, b = 1) {
        a = a.j.slice(0);
        const c = new Km(b);
        cb(a, () => c.next());
        return new Nm(a)
    }
    const Nm = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        filter(a) {
            return new Nm(Ta(this.j, a))
        }
        apply(a) {
            return new Nm(a(this.j.slice(0)))
        }
        sort(a) {
            return new Nm(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new Nm(b)
        }
    };
    class Pm {
        constructor(a) {
            this.j = new um(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function Qm(a, b, c = !1) {
        a.l.push(b);
        c && b(a.j)
    }

    function Rm(a, b) {
        a.j = b;
        Sa(a.l, c => {
            c(a.j)
        })
    }

    function Sm(a, b) {
        Qm(b, c => Rm(a, c), !0)
    }
    class Tm {
        constructor(a) {
            this.j = a;
            this.l = []
        }
        map(a) {
            const b = new Tm(a(this.j));
            Qm(this, c => Rm(b, a(c)));
            return b
        }
    };

    function Um(a) {
        return new Vm({
            value: a
        }, null)
    }

    function Wm(a) {
        return new Vm(null, Error(a))
    }

    function Xm(a) {
        try {
            return Um(a())
        } catch (b) {
            return new Vm(null, b)
        }
    }

    function Ym(a) {
        return null != a.j ? a.j.value : null
    }

    function Zm(a, b) {
        null != a.j && b(a.j.value)
    }

    function $m(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Vm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Vm ? a : Um(a)) : this
        }
    };
    class an {
        constructor() {
            this.j = new tm
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new um, this.j.set(a, c));
            c.add(b)
        }
    };
    class bn {
        constructor(a, {
            nc: b,
            cd: c,
            Md: d,
            Nc: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new Nm(b || []);
            this.l = e;
            this.j = d
        }
    };
    var cn = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new tm;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        en = a => {
            var b = dn(a);
            a = [];
            for (let c of b) b = String(c.Ka), a.push(c.va + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const dn = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                va: "a",
                Ka: fn(c)
            });
            null != a.A && b.push({
                va: "as",
                Ka: a.A
            });
            null != a.j && b.push({
                va: "i",
                Ka: String(a.j)
            });
            null != a.l && b.push({
                va: "rp",
                Ka: String(a.l)
            });
            b.sort(function(d, e) {
                return d.va.localeCompare(e.va)
            });
            b.unshift({
                va: "t",
                Ka: gn(a.C)
            });
            return b
        },
        gn = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        fn = a => {
            a = a.j.slice(0).map(hn);
            a = JSON.stringify(a);
            return zf(a)
        },
        hn = a => {
            const b = {};
            null != y(a, 7) && (b.q = y(a, 7));
            null !=
                y(a, 2) && (b.o = y(a, 2));
            null != y(a, 5) && (b.p = y(a, 5));
            return b
        };

    function jn(a) {
        const b = [].slice.call(arguments).filter(be(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.qc || []);
            d = Object.assign(d, e.Ra())
        });
        return new kn(c, d)
    }

    function ln(a) {
        switch (a) {
            case 1:
                return new kn(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new kn(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new kn(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new kn(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function mn(a) {
        return null == a ? null : new kn(null, {
            google_placement_id: en(a)
        })
    }
    class kn {
        constructor(a, b) {
            this.qc = a;
            this.j = b
        }
        Ra() {
            return this.j
        }
    };
    var nn = class extends v {
        constructor(a) {
            super(a)
        }
    };

    function on(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? ec(nn, b) : null
        } catch (b) {
            return null
        }
    }

    function pn(a, b) {
        if (void 0 !== a.Pb) {
            let c = on(b);
            c || (c = new nn);
            void 0 !== a.Pb && z(c, 2, a.Pb);
            z(c, 1, na() + 864E5);
            a = dc(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = on(b)) && y(a, 1) < na()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function qn(a) {
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
    }

    function rn(a) {
        return om(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function sn(a, b) {
        a = jf(new Ve(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function tn(a, b, c) {
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
        qn(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function un(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            qn(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var wn = (a, b, c, d = 0) => {
            var e = vn(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.ob(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Db
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            tn(a, e.anchor, e.position)
        },
        xn = (a, b, c, d = 0) => {
            S(vk) ? wn(a, b, c, d) : tn(a, b, c)
        };

    function vn(a, b, c) {
        const d = f => {
                f = yn(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = yn(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: zn(a.previousSibling, d),
                    ob: f => zn(f.previousSibling, d),
                    Db: 0
                };
            case 2:
                return {
                    init: zn(a.lastChild, d),
                    ob: f => zn(f.previousSibling, d),
                    Db: 0
                };
            case 3:
                return {
                    init: zn(a.nextSibling, e),
                    ob: f => zn(f.nextSibling, e),
                    Db: 3
                };
            case 1:
                return {
                    init: zn(a.firstChild, e),
                    ob: f => zn(f.nextSibling, e),
                    Db: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function yn(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function zn(a, b) {
        return a && b(a) ? a : null
    };
    var An = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Bn = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = !!a.rss || 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b.top == b
        },
        Cn = (a, b, c) => {
            a = a.style;
            "rtl" == b ? S(Sk) ? a.setProperty("margin-right", c, "important") :
                a.marginRight = c : S(Sk) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
        };
    const Dn = (a, b, c) => {
        a = An(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var En = (a, b) => {
            b = b.parentElement;
            return b ? (a = tf(b, a)) ? a.direction : "" : ""
        },
        Fn = (a, b, c) => {
            if (0 === Dn(a, b, c)) return !1;
            Cn(b, c, "0px");
            const d = Dn(a, b, c);
            Cn(b, c, -1 * d + "px");
            a = Dn(a, b, c);
            0 !== a && a !== d && Cn(b, c, d / (a - d) * d + "px");
            return !0
        };

    function Gn(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Se(d.cc);
            a[e] = d.value
        }
    }

    function Hn(a, b, c, d, e, f) {
        a = In(a, e);
        a.ca.setAttribute("data-ad-format", d ? d : "auto");
        Jn(a, b, c, f);
        return a
    }

    function Kn(a, b, c = null) {
        a = In(a, {});
        Jn(a, b, null, c);
        return a
    }

    function Jn(a, b, c, d) {
        var e = [];
        if (d = d && d.qc) a.Aa.className = d.join(" ");
        a = a.ca;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function In(a, b) {
        var c = sn(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.Cb && Gn(d, b.Cb);
        a = jf(new Ve(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.lc && (d.marginTop = b.lc);
        b.Mb && (d.marginBottom = b.Mb);
        b.Ia && Gn(d, b.Ia);
        c.appendChild(a);
        return {
            Aa: c,
            ca: a
        }
    }

    function Ln(a, b, c) {
        b.setAttribute("data-adsbygoogle-status", "reserved");
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.Ra();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Mn(a) {
        var b = rn(a.document);
        Sa(b, function(c) {
            var d = Nn(a, c),
                e;
            if (e = d) e = An(c, a), e = !((e ? e.y : 0) < V(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Ln(a, c))
        })
    }

    function Nn(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in dg) a[dg[c]] && (b[dg[c]] = a[dg[c]]);
        return b
    };
    const On = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? Oe(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && vm.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (On(a, b[c])) return !0
        }
        return !1
    };
    var Pn = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    var Qn = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return Hn(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return Pn(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Rn(a) {
        var b = [];
        nm(a.getElementsByTagName("p"), function(c) {
            100 <= Sn(c) && b.push(c)
        });
        return b
    }

    function Sn(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        nm(a.childNodes, function(c) {
            b += Sn(c)
        });
        return b
    }

    function Tn(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Un(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function Vn(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.B)
        } catch (g) {}
        if (!c.length) return [];
        b = $a(c);
        b = Un(a, b);
        "number" === typeof a.l && (c = a.l, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.A) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Rn(b[d]),
                    f = a.A;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Wn = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };

    function Xn(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || y(a, 3) || 0 < Wb(a, 4).length) {
            b = Wb(a, 4);
            var c = y(a, 3),
                d = y(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Tn(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Tn(b[c]);
            a = (b = e) ? new Wn(b, y(a, 2), y(a, 5), Yn(y(a, 6))) : null
        } else a = b ? new Wn(b, y(a, 2), y(a, 5), Yn(y(a, 6))) : null;
        return a
    }
    var Zn = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Yn(a) {
        return null == a ? a : Zn[a]
    }

    function $n(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = y(a[c], 1),
                e = y(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.cc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function ao(a, b) {
        var c = {};
        a && (c.lc = y(a, 1), c.Mb = y(a, 2), c.clearBoth = !!B(a, 3));
        b && (c.Cb = $n(G(b, Pi, 3)), c.Ia = $n(G(b, Pi, 4)));
        return c
    }
    var bo = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        co = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const eo = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return Hn(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    class fo {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Pn(a);
            return new kn(["ap_container"], {
                ["google_reactive_ad_format"]: 27,
                ["google_responsive_auto_format"]: 16,
                ["google_max_num_ads"]: 1,
                ["google_ad_type"]: this.l,
                ["google_ad_format"]: a + "x" + b,
                ["google_ad_width"]: a,
                ["google_ad_height"]: b
            })
        }
    };
    var go = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const ho = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < G(this.j, sj, 9).length ? G(this.j, sj, 9)[0] : null,
                f = ao(C(this.j, tj, 3), e);
            if (!e) return null;
            if (e = y(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = jf(new Ve(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Cb && Gn(c.style, f.Cb);
                d = jf(new Ve(d), "INS");
                f.Ia && Gn(d.style, f.Ia);
                c.appendChild(d);
                f = {
                    Aa: c,
                    ca: d
                };
                f.ca.setAttribute("data-ad-type", "text");
                f.ca.setAttribute("data-native-settings-key",
                    e);
                Jn(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < G(this.j, sj, 9).length ? G(this.j, sj, 9)[0] : null;
            if (!a) return null;
            a = G(a, Pi, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == y(c, 1) && 0 < parseInt(y(c, 2), 10)) return parseInt(y(c, 2), 10)
            }
            return null
        }
    };
    var io = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        cc: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Ia: g
                }
            } else c = {};
            a = Hn(d.document, a, f, e, c, b);
            a.ca.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        Ra() {
            return this.j
        }
    };
    class jo {
        constructor(a) {
            this.l = a
        }
        j() {
            return new kn([], {
                ["google_ad_type"]: this.l,
                ["google_reactive_ad_format"]: 26,
                ["google_ad_format"]: "fluid"
            })
        }
    };
    var ko = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = Vn(this.B, a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function lo(a, b, c, d) {
        var e = a.V();
        if (!e) return null;
        var f = Xn(e);
        if (!f) return null;
        var g = bo[a.l()];
        var h = void 0 === g ? null : g;
        if (null === h) return null;
        g = (g = C(a, tj, 3)) ? B(g, 3) : null;
        f = new ko(f, h);
        h = Wb(a, 10).slice(0);
        Vb(e, 5) && h.push(1);
        var k = d ? d : {};
        d = y(a, 12);
        e = Vb(a, 4) ? C(a, vj, 4) : null;
        switch (y(a, 8)) {
            case 1:
                return k = k.ud || null, new mo(f, new eo(ao(C(a, tj, 3), null)), k, g, 0, h, e, c, b, d, a);
            case 2:
                return new mo(f, new ho(a), k.Nd || new jo("text"), g, 1, h, e, c, b, d, a)
        }
        return null
    }

    function no(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = lo(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }

    function oo(a) {
        return a.B
    }

    function po(a) {
        return a.D instanceof io ? a.D.Ra() : null
    }

    function qo(a, b, c) {
        pm(a.K, b) || a.K.set(b, []);
        a.K.get(b).push(c)
    }

    function ro(a) {
        return sn(a.j.document, a.I || !1)
    }

    function so(a) {
        return a.D.A(a.j)
    }

    function to(a, b = null, c = null) {
        return new mo(a.H, b || a.D, c || a.P, a.I, a.Da, a.Yb, a.Ua, a.j, a.Y, a.G, a.A, a.C, a.U)
    }
    class mo {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, q = null) {
            this.H = a;
            this.D = b;
            this.P = c;
            this.I = d;
            this.Da = e;
            this.Yb = f;
            this.Ua = g ? g : new vj;
            this.j = h;
            this.Y = k;
            this.G = l;
            this.A = m;
            this.C = n;
            this.U = q;
            this.J = [];
            this.B = !1;
            this.K = new tm
        }
        L() {
            return this.j
        }
        l() {
            return this.H.l()
        }
    };
    const uo = {
        TABLE: {
            Ma: new Pm([1, 2])
        },
        THEAD: {
            Ma: new Pm([0, 3, 1, 2])
        },
        TBODY: {
            Ma: new Pm([0, 3, 1, 2])
        },
        TR: {
            Ma: new Pm([0, 3, 1, 2])
        },
        TD: {
            Ma: new Pm([0, 3])
        }
    };

    function vo(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Ra(e, f), 0 > c || b.push(new wo(a, [f], c, f, 3, ef(f).trim(), d));
        return b
    }

    function xo(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && k && e.push(new wo(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = ef(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new wo(a, d, h, b, 2, k, c));
        return e
    }

    function yo(a, b) {
        return a.j - b.j
    }

    function zo(a) {
        const b = uj();
        return new mo(new go(a.Ib, a.Jb), new eo({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class wo {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.La = b.slice(0);
            this.j = c;
            this.Ib = d;
            this.Jb = e;
            this.B = f;
            this.l = g
        }
        L() {
            return this.l
        }
    };

    function Ao(a) {
        return Za(a.B ? xo(a.j, a.na, a.l) : [], a.A ? vo(a.j, a.A, a.na, a.l) : []).filter(b => {
            var c = b.Ib.tagName;
            c ? (c = uo[c.toUpperCase()], b = null != c && c.Ma.contains(b.Jb)) : b = !1;
            return !b
        })
    }
    class Bo {
        constructor(a, b, c) {
            this.na = a;
            this.A = b.jb;
            this.B = b.vc;
            this.j = b.articleStructure;
            this.l = c
        }
    };

    function Co(a, b) {
        if (!b) return !1;
        const c = ea(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = Co(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function Do(a, b) {
        return Wa(b.La, c => Co(a, c))
    }
    class Eo {
        constructor(a) {
            this.j = new tm;
            this.l = a
        }
    };
    class Fo {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var Ho = (a, {
            Wh: b = !1,
            Zh: c = 3,
            qe: d = null
        } = {}) => {
            a = Ao(a);
            return Go(a, b, c, d)
        },
        Go = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(yo);
            a = [];
            b = new Fo(b, d);
            for (const l of e) {
                d = b;
                e = {
                    Eb: l,
                    tb: 51 > l.B.length ? !1 : null != d.A ? !Do(d.A, l) : !0
                };
                if (d.B || e.tb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].Eb;
                        b: {
                            var g = f.L();
                            var h = f.La[f.La.length - 1];f = e.Eb.La[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const m = f.parentElement;
                            if (k && m && k == m) {
                                k = 0;
                                for (h = h.nextSibling; 10 >
                                    k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (On(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.tb && d.l.push(e.Eb)) : (d.j = [e], d.l = e.tb ? [e.Eb] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].tb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Jo = (a, b) => {
            a = Io(a, b);
            const c = new Eo(b);
            return Jm(a, d => Ho(d, {
                qe: c
            }))
        },
        Io = (a, b) => {
            const c = new tm;
            a.forEach(d => {
                var e = Xn(C(d, Ri, 1));
                if (e) {
                    const f = e.toString();
                    pm(c, f) || c.set(f, {
                        articleStructure: d,
                        ld: e,
                        jb: null,
                        vc: !1
                    });
                    e = c.get(f);
                    (d = (d = C(d, Ri, 2)) ? y(d, 7) : null) ? e.jb = e.jb ? e.jb + "," + d : d: e.vc = !0
                }
            });
            return sm(c).map(d => {
                const e = Vn(d.ld, b.document);
                return e.length ? new Bo(e[0], d, b) : null
            }).filter(d => null != d)
        };
    const Ko = a => {
            a = a.na.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        Lo = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.na.getBoundingClientRect().width));
            return c => c.na.getBoundingClientRect().width > .5 * b
        },
        Mo = a => {
            const b = V(a).clientHeight || 0;
            return c => c.na.getBoundingClientRect().height >= .75 * b
        },
        No = (a, b) => a.na.getBoundingClientRect().top - b.na.getBoundingClientRect().top;
    var Oo = a => (null == a ? 0 : a.google_ad_slot) ? Um(new bn(1, {
            cd: a.google_ad_slot
        })) : Wm("Missing dimension when creating placement id"),
        Qo = a => {
            switch (a.Da) {
                case 0:
                case 1:
                    var b = a.A;
                    null == b ? a = null : (a = b.V(), null == a ? a = null : (b = b.l(), a = null == b ? null : new bn(0, {
                        nc: [a],
                        Nc: b
                    })));
                    return null != a ? Um(a) : Wm("Missing dimension when creating placement id");
                case 2:
                    return a = Po(a), null != a ? Um(a) : Wm("Missing dimension when creating placement id");
                default:
                    return Wm("Invalid type: " + a.Da)
            }
        };
    const Po = a => {
        if (null == a || null == a.C) return null;
        const b = C(a.C, Ri, 1),
            c = C(a.C, Ri, 2);
        if (null == b || null == c) return null;
        const d = a.U;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new bn(0, {
            nc: [b, c],
            Md: d,
            Nc: co[a]
        })
    };

    function So(a) {
        const b = po(a.N);
        return (b ? Oo(b) : Qo(a.N)).map(c => en(c))
    }

    function To(a) {
        a.j = a.j || So(a);
        return a.j
    }

    function Uo(a, b) {
        if (a.N.B) throw Error("AMA:AP:AP");
        xn(b, a.V(), a.N.l());
        a = a.N;
        a.B = !0;
        null != b && a.J.push(b)
    }
    var Vo = class {
        constructor(a, b, c) {
            this.N = a;
            this.l = b;
            this.O = c;
            this.j = null
        }
        V() {
            return this.l
        }
        fill(a, b) {
            var c = this.N;
            (a = c.D.l(a, b, this.l, c.j)) && Uo(this, a.Aa);
            return a
        }
    };
    var Wo = O(754, function(a, b) {
        var c = [],
            d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f],
                    h = g.H.j(g.j);
                h && e.push({
                    Jc: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++) {
                a = d;
                var k = a.push;
                var l = e[f],
                    m = l.anchorElement,
                    n = l.Jc,
                    q = n.I,
                    r = n.j.document.createElement("div");
                r.className = "google-auto-placed";
                var x = r.style;
                x.textAlign = "center";
                x.width = "100%";
                x.height = "0px";
                x.clear = q ? "both" : "none";
                var w = r;
                try {
                    xn(w, m, n.l());
                    var D = w
                } catch (K) {
                    throw un(w), K;
                }
                k.call(a, D)
            }
            var A = Ll(b),
                E = Ml(b);
            for (f = 0; f < d.length; f++) {
                b = E;
                k = A;
                var F =
                    d[f].getBoundingClientRect(),
                    H = e[f];
                c.push(new Vo(H.Jc, H.anchorElement, new Cm(F.left + b, F.top + k, F.right - F.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++) un(d[f])
        }
        return c
    });

    function Xo(a, b) {
        const c = Ao(b);
        c.sort(yo);
        return new Yo(a, b, c)
    }

    function Zo(a, b, c) {
        return new mo(new go(b, c), new eo({}), null, !0, 2, [], null, a.j, null, null, null, a.C.j, null)
    }
    var Yo = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
        next() {
            if (!this.l) {
                if (this.A >= this.B.length) var a = null;
                else {
                    {
                        const b = this.B[this.A++].La[0];
                        da(b) && 1 == b.nodeType ? a = Zo(this, b, 0) : (a = this.j.document.createElement("div"), M(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = Zo(this, a, 3))
                    }
                    a = Wo([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var $o = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const ap = {
            1: "0.5vp",
            2: "300px"
        },
        bp = {
            1: 700,
            2: 1200
        },
        cp = {
            [1]: {
                Sc: "3vp",
                jc: "1vp",
                Rc: "0.3vp"
            },
            [2]: {
                Sc: "900px",
                jc: "300px",
                Rc: "90px"
            }
        };

    function dp(a) {
        const b = ep(a);
        return fp(b, V(a).clientHeight || bp[b])
    }
    class gp {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function hp(a, b) {
        for (let c of a)
            if (y(c, 1) == b) return c;
        return null
    }

    function ip(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = y(d, 1);
            const e = jp(y(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                ic: {
                    Bb: e,
                    ua: jp(y(d, 3), b)
                }
            })
        }
        return c
    }

    function kp(a, b) {
        const c = jp(y(a, 2), b),
            d = jp(y(a, 5), b);
        if (null === c) return null;
        const e = y(a, 4);
        if (null == e) return null;
        var f = G(a, aj, 3);
        f = ip(f, b);
        if (null === f) return null;
        const g = C(a, bj, 7);
        return new gp(c, d, f, e, Xb(a, 6), g ? lp(g, b) : void 0)
    }

    function fp(a, b) {
        a = jp(ap[a], b);
        return new gp(null === a ? Infinity : a, null, [], 3, null)
    }

    function jp(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function ep(a) {
        a = 900 <= V(a).clientWidth;
        return kf() && !a ? 1 : 2
    }

    function mp(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            ic: {
                Bb: 2 * a,
                ua: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            ic: {
                Bb: 3 * a,
                ua: 3 * b
            }
        }]
    }

    function lp(a, b) {
        return {
            Fc: jp(y(a, 2), b) || 0,
            Ec: y(a, 3) || 1,
            Ja: jp(y(a, 1), b) || 0
        }
    };

    function np(a, b, c) {
        return gm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function op(a) {
        if (!a.length) return null;
        const b = hm(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new pp(b, a)
    }
    class pp {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    var vp = (a, b) => {
        const c = $a(b.document.querySelectorAll(".google-auto-placed")),
            d = qp(b),
            e = rp(b),
            f = sp(b),
            g = tp(b),
            h = $a(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = $a(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let l = [].concat($a(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), $a(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [m, n] of [
                [a.qb, c],
                [a.Ca, d],
                [a.Ld, e],
                [a.rb, f],
                [a.sb, g],
                [a.Id, h],
                [a.Kd, k]
            ]) a = n, !1 === m ? b = b.concat(a) :
            l = l.concat(a);
        a = up(l);
        b = up(b);
        a = a.slice(0);
        for (const m of b)
            for (b = 0; b < a.length; b++)(m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
        return a
    };
    const wp = a => {
            try {
                return Ta(Ua(a.googletag.pubads().getSlots(), b => a.document.getElementById(b.getSlotElementId())), b => null != b)
            } catch (b) {}
            return null
        },
        qp = a => $a(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
        rp = a => $a(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        sp = a => (wp(a) || $a(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat($a(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        tp = a => $a(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var up = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var xp = O(453, vp),
        yp = O(454, (a, b) => {
            const c = $a(b.document.querySelectorAll(".google-auto-placed")),
                d = qp(b),
                e = rp(b),
                f = sp(b),
                g = tp(b),
                h = $a(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
            b = $a(b.document.querySelectorAll("div.googlepublisherpluginad"));
            return up([].concat(!0 === a.qb ? c : [], !0 === a.Ca ? d : [], !0 === a.Ld ? e : [], !0 === a.rb ? f : [], !0 === a.sb ? g : [], !0 === a.Id ? h : [], !0 === a.Kd ? b : []))
        });

    function zp(a, b, c) {
        const d = Ap(a);
        b = Bp(d, b, c);
        return new Cp(a, d, b)
    }

    function Dp(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Ep(a) {
        return a.j.map(b => b.box)
    }

    function Fp(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Cp {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function Ap(a) {
        const b = xp({
                Ca: !1
            }, a),
            c = Ml(a),
            d = Ll(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || Dp(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Th: e ? 1 : 0
            } : null
        }).filter(be(e => null === e))
    }

    function Bp(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Gp(a, b) : Ua(a, d => new pp(d.box, 1))
    }

    function Gp(a, b) {
        a = Ua(a, d => new pp(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (np(d, a[f], b)) {
                        d = op([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Hp(a, b, c) {
        const d = S(uk) ? 0 : 1,
            e = Bm(c, d, b + d);
        return !Wa(a, f => gm(f, e))
    }

    function Ip(a, b, c, d, e) {
        e = e.O;
        const f = Bm(e, 0, b),
            g = Bm(e, 0, c),
            h = Bm(e, 0, d);
        return !Wa(a, k => gm(k, g) || gm(k, f) && !gm(k, h))
    }

    function Jp(a, b, c, d) {
        const e = Ep(a);
        if (Hp(e, b, d.O)) return !0;
        if (!Ip(e, b, c.Fc, c.Ja, d)) return !1;
        const f = new pp(Bm(d.O, 0, 0), 1);
        a = Ta(a.B, g => np(g, f, c.Ja));
        b = Va(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Ec ? !1 : !0
    };
    var Kp = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Lp(a, b) {
        const c = new an,
            d = new um;
        b.forEach(e => {
            if (gc(e, jj, 1, mj)) {
                e = gc(e, jj, 1, mj);
                if (C(e, hj, 1) && C(e, hj, 1).V() && C(e, hj, 2) && C(e, hj, 2).V()) {
                    const g = Mp(a, C(e, hj, 1).V()),
                        h = Mp(a, C(e, hj, 2).V());
                    if (g && h)
                        for (var f of Kp({
                                anchor: g,
                                position: C(e, hj, 1).l()
                            }, {
                                anchor: h,
                                position: C(e, hj, 2).l()
                            })) c.set(ea(f.anchor), f.position)
                }
                C(e, hj, 3) && C(e, hj, 3).V() && (f = Mp(a, C(e, hj, 3).V())) && c.set(ea(f), C(e, hj, 3).l())
            } else gc(e, kj, 2, mj) ? Np(a, gc(e, kj, 2, mj), c) : gc(e, lj, 3, mj) && Op(a, gc(e, lj, 3, mj), d)
        });
        return new Pp(c, d)
    }
    class Pp {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Np = (a, b, c) => {
            C(b, Ri, 1) && (a = Qp(a, C(b, Ri, 1))) && a.forEach(d => {
                d = ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Op = (a, b, c) => {
            C(b, Ri, 1) && (a = Qp(a, C(b, Ri, 1))) && a.forEach(d => {
                c.add(ea(d))
            })
        },
        Mp = (a, b) => (a = Qp(a, b)) && 0 < a.length ? a[0] : null,
        Qp = (a, b) => (b = Xn(b)) ? Vn(b, a) : null;

    function Rp(a) {
        return function(b) {
            return Wo(b, a)
        }
    }

    function Sp(a) {
        const b = V(a).clientHeight;
        return b ? ma(Tp, b + Ll(a)) : Zd
    }

    function Up(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Zd;
        const d = Ep(c || zp(b));
        return e => Hp(d, a, e.O)
    }

    function Vp(a, b, c, d) {
        if (0 > a || 0 > b.Fc || 0 > b.Ec || 0 > b.Ja) throw Error("ama::ead:nd");
        return Infinity === a ? Zd : e => Jp(d || zp(c, b.Ja), a, b, e)
    }

    function Wp(a) {
        if (!a.length) return Zd;
        const b = new Pm(a);
        return c => b.contains(c.Da)
    }

    function Xp(a) {
        return function(b) {
            for (let c of b.Yb)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Yp(a) {
        return a.length ? function(b) {
            const c = b.Yb;
            return a.some(d => -1 < c.indexOf(d))
        } : $d
    }

    function Zp(a, b) {
        if (0 >= a) return $d;
        const c = V(b).scrollHeight - a;
        return function(d) {
            return d.O.j <= c
        }
    }

    function $p(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[y(c.Ua, 2) || 0]
        }
    }

    function aq(a) {
        return a.length ? b => a.includes(y(b.Ua, 2) || 0) : $d
    }

    function bq(a) {
        return a.length ? b => a.includes(y(b.Ua, 1) || 0) : $d
    }

    function cq(a, b) {
        const c = Lp(a, b);
        return function(d) {
            var e = d.V();
            d = co[d.N.l()];
            var f = ea(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(ea(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(ea(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }
    const Tp = (a, b) => b.O.j >= a,
        dq = (a, b, c) => {
            c = c.O.l;
            return a <= c && c <= b
        };
    var eq = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = Sp(this.A);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var fq = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new xj;
            var b = C(this.A.j, Ri, 1);
            a = bc(a, 1, b);
            a = z(a, 2, 2);
            a = z(a, 8, 1);
            a = no([a], this.l);
            return Wo(a, this.l)[0] || null
        }
    };
    const gq = (a, b, c) => {
            a = a.createElement("script");
            Yd(a, Gc(lc(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        hq = {
            [1]: "out_of_view"
        };
    class iq {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.j = a;
                this.l = b
            })
        }
    };
    var jq = class {
            constructor() {
                const a = new iq;
                this.promise = a.promise;
                this.resolve = a.j
            }
        },
        kq = (a, b, c) => {
            b.google_llp || (b.google_llp = {});
            b = b.google_llp;
            b[a] || (b[a] = new jq, c && c());
            return b[a]
        };

    function lq(a, b, c) {
        return kq(a, b, function() {
            rf(b.document, c)
        }).promise
    };

    function mq(a, b, c) {
        return new nq(lq(7, a, c).then(d => {
            d.init(b);
            d.handleAdConfig({
                preloadAdBreaks: "on",
                sound: "on"
            });
            return d
        }).catch(di()))
    }

    function oq(a, b) {
        a.j || (a.l.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        }), a.j = !0)
    }
    var nq = class {
        constructor(a) {
            this.l = a;
            this.j = !1
        }
    };
    var pq = {
            da: "ama_success",
            aa: .1,
            pa: !0
        },
        qq = {
            da: "ama_failure",
            aa: .1,
            pa: !0
        },
        rq = {
            da: "ama_inf_scr",
            aa: .1,
            pa: !0
        },
        sq = {
            da: "ama_inf_scr",
            aa: .1,
            pa: !0
        },
        tq = {
            da: "ama_coverage",
            aa: .1,
            pa: !0
        },
        uq = {
            da: "ama_inf_scr",
            aa: 1,
            pa: !0
        },
        vq = {
            da: "ama_opt",
            aa: .1,
            pa: !0
        },
        wq = {
            da: "ama_aud_sen",
            aa: 1,
            pa: !0
        };

    function xq(a, b) {
        a.G.wpc = b;
        return a
    }

    function yq(a, b) {
        for (var c = 0; c < b.length; c++) a.ha(b[c]);
        return a
    }

    function zq(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class Aq {
        constructor(a) {
            this.G = {};
            this.G.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.H = 0
        }
        ha(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = tc(this.G);
            0 < this.H && (b.t = this.H);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && xh(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function Bq(a, b, c) {
        c = c.B(a.j);
        b.pa && (c.pvc = Tf(a.j));
        0 < b.aa && (c.r = b.aa, P(b.da, c, b.aa))
    }
    var Cq = class {
        constructor(a) {
            this.j = a
        }
    };

    function Dq(a, b, c, d) {
        let e;
        const f = null == (e = C(b, pj, 6)) ? void 0 : G(e, qj, 1);
        return f && 0 != f.length ? (b = C(b, Si, 27)) ? C(b, Ti, 2) ? Um(new Eq(a, f, b, c, d)) : Wm("No AudioSenseConfig.PlacementConfig found") : Wm("No AudioSenseConfig found") : Wm("No ArticleStructure found")
    }

    function Fq(a) {
        a.A.addEventListener("playing", () => {
            a.C.j || (a.A.pause(), oq(a.C, () => a.A.play()))
        })
    }

    function Gq(a) {
        return (a = C(a.l, Vi, 3)) ? G(a, Wi, 1).some(b => 1 === Yb(b, 1, 0)) : !1
    }

    function Hq(a, b) {
        let c;
        a = Object.assign({}, b, {
            vh: V(a.j).clientHeight,
            eid: null == (c = C(a.l, Xi, 4)) ? void 0 : I(c, 2)
        });
        P(wq.da, a, wq.aa)
    }
    var Eq = class {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.G = b;
            this.l = c;
            this.B = d;
            this.D = e;
            this.A = this.C = null
        }
    };
    const Iq = ["-webkit-text-fill-color"];

    function Jq(a) {
        if (kb) {
            {
                const c = tf(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Kq(a)
                } else a = Lq()
            }
        } else a = Lq();
        return a
    }
    var Lq = () => {
        const a = {
            all: "initial"
        };
        Sa(Iq, b => {
            a[b] = "unset"
        });
        return a
    };

    function Kq(a) {
        Sa(Iq, b => {
            delete a[b]
        });
        return a
    };
    var Mq = class {
        constructor(a) {
            this.j = a
        }
        Pa(a) {
            const b = a.document.createElement("div");
            M(b, Jq(a));
            M(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, Jq(a));
            M(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var Nq = (a, b) => (b = C(b, pj, 6)) ? Jo(G(b, qj, 1), a).map(c => zo(c)) : [];

    function Oq(a) {
        const b = Pq(a);
        Sa(a.j.maxZIndexListeners, c => c(b))
    }

    function Pq(a) {
        a = yf(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class Qq {
        constructor(a) {
            this.j = Al(a).floatingAdsStacking
        }
    }

    function Rq(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            Oq(b);
            a.j = d
        }
    }

    function Sq(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Oq(b);
            a.j = null
        }
    }
    class Tq {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function Uq(a, b) {
        a.j++;
        const c = "{SafeHtmlFormatter:" + a.j + "_" + Qe() + "}";
        a.l[Ne(c)] = b;
        return c
    }
    class Vq {
        constructor() {
            this.l = {};
            this.j = 0
        }
        A(a, b) {
            a = this.l[b];
            if (!a) return b;
            b = "";
            a.Hb && (b += "<" + a.Hb + a.attributes + ">");
            a.yc && (b += a.yc);
            a.mb && (b += "</" + a.mb + ">");
            return b
        }
        Hb(a, b) {
            ld(a);
            return Uq(this, {
                Hb: a,
                attributes: rd(b)
            })
        }
        mb(a) {
            ld(a);
            return Uq(this, {
                mb: a
            })
        }
        text(a) {
            return Uq(this, {
                yc: Ne(a)
            })
        }
    };

    function Wq(a) {
        a.A.id = "cse-overlay-div";
        Vd(a.A, Yc({
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        }));
        const b = jf(a.l, "DIV");
        b.id = "cse-overlay-close-button";
        Vd(b, Yc({
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        }));
        a.B.classList.add("gsc-modal-background-image");
        a.B.setAttribute("tabindex", 0);
        a.j.document.body.appendChild(a.A);
        a.j.document.body.appendChild(a.B);
        var c = () => {
            "block" === a.A.style.display && (a.A.style.display = "none");
            a.B.classList.remove("gsc-modal-background-image-visible");
            Sq(a.H)
        };
        b.onclick = c;
        a.B.onclick = c;
        c = jf(a.l, "DIV");
        c.classList.add("gcse-search");
        c.setAttribute("data-gname", "auto-rs-prose");
        c.setAttribute("data-adclient", a.D);
        c.setAttribute("data-as_sitesearch", a.j.location.host);
        c.setAttribute("data-gl", a.C);
        a.A.appendChild(b);
        a.A.appendChild(c)
    }

    function Xq(a) {
        a.j.__gcse || (a.j.__gcse = {});
        a.j.__gcse.searchCallbacks = {
            web: {
                rendered: () => {
                    Rq(a.H);
                    a.B.classList.add("gsc-modal-background-image-visible");
                    a.A.style.display = "block";
                    const b = a.j.document.getElementsByClassName("gsc-input")[0];
                    if (b) {
                        var c = a.j.document.getElementsByClassName("gsc-search-button-v2")[0];
                        c && (c.style.height = a.j.getComputedStyle(b).getPropertyValue("height"))
                    }
                }
            }
        }
    }

    function Yq(a) {
        const b = jf(a.l, "SCRIPT");
        b.type = "text/javascript";
        var c = a.G.map(d => ({
            container: d,
            relatedSearches: 5
        }));
        oa("google.ads.autorscse.innerPerformSearch", (d, e, f) => {
            d(e, void 0, {
                rsToken: f
            });
            if ((d = a.j.document.getElementsByClassName("gsc-control-cse")[0]) && 1 === d.childElementCount) {
                var g = a.j.location.host;
                e = jf(a.l, "IMG");
                f = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(g);
                f = Sc(f) || Uc;
                e.src = Sd(f);
                e.style.height = "16px";
                e.style.marginRight = "5px";
                e.style.display = "inline-block";
                f = jf(a.l, "P");
                var h = a.C.trim().substring(0, 2);
                var k = g.startsWith("www.") ? g.slice(4) : g;
                g = new Vq;
                const l = g.Hb("strong"),
                    m = g.mb("strong");
                k = {
                    en: `Search results from ${l}${k}${m}`,
                    de: `Suchergebnisse von ${l}${k}${m}`,
                    ja: `${l}${k}${m}\u304b\u3089\u306e\u691c\u7d22\u7d50\u679c`,
                    fr: `R\u00e9sultats de recherche sur ${l}${k}${m}`,
                    es: `Resultados de b\u00fasqueda de ${l}${k}${m}`
                };
                h = k[h] || k.en;
                k = Ne("SafeHtmlFormatter:");
                h = Ne(h).replace(new RegExp(`\\{${k}[\\w&#;]+\\}`, "g"), la(g.A, g, []));
                h = kd(h, null);
                g = f;
                if (null !==
                    g && void 0 !== g.tagName) {
                    if ("script" === g.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
                    if ("style" === g.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
                }
                g.innerHTML = hd(h);
                f.style.fontSize = "16px";
                f.style.display = "inline-block";
                d.insertBefore(f, d.firstChild);
                d.insertBefore(e, d.firstChild);
                if (d = a.j.document.getElementsByClassName("gsc-search-box")[0])
                    if (d.style.maxWidth = "520px", d = a.j.document.getElementsByClassName("gsc-input")[0])
                        if (d.style.paddingRight =
                            0, d = a.j.document.getElementsByClassName("gsc-input-box")[0])
                            if (d.style.borderRadius = "16px 0px 0px 16px", d = a.j.document.getElementsByClassName("gsc-search-button-v2")[0]) d.style.borderRadius = "0px 16px 16px 0px", d.style.marginLeft = 0, d.style.borderLeft = "0"
            }
        });
        c = Od `function(afsProperty, cseElementName, rsBlocks, language){ 
          function performSearch(query, rsToken) { 
            const element = google.search.cse.element.getElement(cseElementName); 
            google.ads.autorscse.innerPerformSearch(element.execute, query, rsToken); 
          } 
          const pageOptions = { 
            pubId: afsProperty, 
            styleId: '5134551505', 
            hl: language, 
            resultsPageBaseUrl: 'http://google.com', 
            resultsPageQueryParam: 'q', 
            relatedSearchTargeting: 'content', 
            relatedSearchResultClickedCallback: performSearch, 
            relatedSearchUseResultCallback: true, 
          }; 
          _googCsa('relatedsearch', pageOptions, rsBlocks); 
        }` (a.D, "auto-rs-prose", c, a.C);
        Xd(b, c);
        a.j.document.body.appendChild(b)
    }
    var Zq = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.G = b;
            this.C = d || "en";
            this.D = c.replace("ca", "partner");
            a = new Qq(a);
            this.H = new Tq(a, 1E5);
            this.l = new Ve(this.j.document);
            this.A = jf(this.l, "DIV");
            this.B = jf(this.l, "DIV")
        }
        init() {
            if (0 != this.G.length && !this.j.document.querySelector('script[src*="cse.google.com/cse"]')) {
                Wq(this);
                var a = jf(this.l, "SCRIPT");
                Yd(a, J `https://www.google.com/adsense/search/async-ads.js`);
                this.j.document.head.appendChild(a);
                a = jf(this.l, "SCRIPT");
                a.type = "text/javascript";
                var b = Nd `(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');`;
                Xd(a, b);
                this.j.document.head.appendChild(a);
                a = jf(this.l, "SCRIPT");
                b = J `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                b = Pd(b, new Map([
                    ["language", this.C]
                ]));
                Yd(a, b);
                this.j.document.head.appendChild(a);
                Xq(this);
                Yq(this)
            }
        }
    };

    function $q(a) {
        const b = ro(a.A.N),
            c = a.C.Pa(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Dd: b,
            Ad: c
        }
    }
    class ar {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new Tm(null)
        }
        init() {
            const a = $q(this);
            this.j = a.Dd;
            Uo(this.A, this.j);
            Rm(this.l, a.Ad)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            Rm(this.l, null)
        }
        G() {
            return this.l
        }
    };
    var br = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.A = c
        }
    };

    function cr(a, b) {
        return a.O.j - b.O.j
    };

    function dr(a, b) {
        const c = a.document.createElement("img");
        er(a, c);
        Fe(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function fr(a, b) {
        const c = b.document.createElement("button");
        er(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function gr(a, b, c) {
        const d = b.document.createElement("img");
        Fe(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.B);
        er(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function hr(a) {
        const b = a.document.createElement("ins");
        er(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class ir {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new Tm(!1)
        }
        Pa(a, b, c, d) {
            const e = dr(a, d),
                f = dr(a),
                g = fr(this, a),
                h = gr(this, a, c);
            a = hr(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            Qm(this.j, k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        xc() {
            return 40
        }
        Gc() {
            Rm(this.j, !1);
            return 0
        }
        Hc() {
            Rm(this.j, !0)
        }
    }

    function er(a, b) {
        M(b, Jq(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function jr(a, b) {
        const c = b.document.createElement("button");
        kr(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function lr(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, Jq(b));
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, Jq(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function kr(a, b, c) {
        M(c, Jq(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.G,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.H,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class mr {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.H = c;
            this.l = d;
            this.G = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        Pa(a) {
            const b = a.document.createElement("div");
            kr(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = a.document.createElement("img");
                Fe(c, this.B);
                kr(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            kr(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = jr(this, a);
            c.appendChild(b);
            return this.A ? lr(this, a, c, this.A) : c
        }
    };
    var nr = (a, b) => {
        b = b.filter(c => 5 == y(C(c, vj, 4), 1) && 1 == y(c, 8));
        b = no(b, a);
        a = Wo(b, a);
        a.sort((c, d) => d.O.j - c.O.j);
        return a[0] || null
    };
    var qr = (a, b, c = null, d, e = !1) => {
            let f = 0;
            try {
                f = d ? f | (a.innerHeight >= d ? 0 : 1024) : f | (a.innerHeight >= a.innerWidth ? 0 : 8), f |= El(a, 3E3), f |= Fl(a)
            } catch (g) {
                f |= 32
            }
            switch (b) {
                case 2:
                    or(a, e, c) && (f |= 16777216);
                    break;
                case 1:
                    pr(a, e, c) && (f |= 16777216)
            }
            return f
        },
        or = (a, b, c = null) => {
            const d = a.innerWidth;
            b = rr(d, b ? Math.max(2, Math.min(10, Math.ceil(d / 300))) + 1 : 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), sr) + 15);
            return tr(a, b, c)
        },
        pr = (a, b, c = null) => {
            const d = a.innerWidth,
                e = a.innerHeight,
                f = Math.min(Math.round(a.innerWidth / 320 * 50), sr) +
                15;
            b = rr(d, b ? Math.max(2, Math.min(10, Math.ceil(d / 300))) + 1 : 3, e - f, e);
            25 < f && b.push({
                x: d - 25,
                y: e - 25
            });
            return tr(a, b, c)
        },
        vr = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = rr(c, 3, e - b, e);
                f = ur(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        tr = (a, b, c = null) => null != ur(a, b, c);

    function ur(a, b, c = null) {
        for (const d of b)
            if (b = wr(a, d, c)) return b;
        return null
    }

    function wr(a, b, c = null) {
        var d = a.document;
        var e = b.x,
            f = b.y;
        d.hasOwnProperty("_goog_efp_called_") || (d._goog_efp_called_ = d.elementFromPoint(e, f));
        return (d = d.elementFromPoint(e, f)) ? xr(d, a, b, c) || yr(d, a, b, c) || null : null
    }

    function yr(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = xr(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var rr = (a, b, c, d) => {
        const e = [];
        for (let h = 0; 3 > h; h++)
            for (let k = 0; k < b; k++) {
                var f = e,
                    g = b - 1;
                f.push.call(f, {
                    x: (0 == g ? 0 : k / g) * a,
                    y: c + h / 2 * (d - c)
                })
            }
        return e
    };

    function xr(a, b, c, d = null) {
        if ("fixed" !== ug(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= xg(a).width && 1 >= xg(a).height ? !0 : !1;
        d && ih(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const sr = 90 * 1.38;

    function zr(a) {
        if (a.H) {
            const b = Ll(a.j);
            if (b > a.l + 100 || b < a.l - 100) Ar(a), a.l = Hl(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => Br(a), 200)
    }

    function Br(a) {
        var b = Hl(a.j);
        a.l && a.l > b && (a.l = b);
        b = Ll(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), Cr(a))
    }

    function Dr(a) {
        a.j.removeEventListener("scroll", a.K)
    }

    function Ar(a) {
        a.H = !1;
        const b = a.C.Gc();
        switch (b) {
            case 0:
                Rm(a.B, a.D);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), Rm(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function Cr(a) {
        a.A || (a.A = Er(a));
        M(a.A, {
            display: "block"
        });
        a.H = !0;
        a.C.Hc();
        Rm(a.B, a.D)
    }

    function Er(a) {
        var b = vr(a.j, a.C.xc() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, Jq(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.Pa(a.j, () => a.remove(), () => {
            Dr(a);
            Ar(a)
        }, () => {
            Dr(a);
            Cr(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class Fr {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new Tm(null);
            this.J = c || null;
            this.A = null;
            this.H = !1;
            this.l = 0;
            this.I = null;
            this.K = () => zr(this)
        }
        init() {
            this.j.addEventListener("scroll", this.K);
            this.l = Hl(this.j);
            Br(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            Dr(this);
            Rm(this.B, null)
        }
        G() {
            return this.B
        }
    };

    function Gr(a) {
        Rm(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function Hr(a) {
        a.l = new Fr(a.C, a.J, a.H);
        a.l.init();
        Sm(a.B, a.l.G());
        Rm(a.D, 2)
    }
    class Ir {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.K = c;
            this.J = d;
            this.H = e;
            this.D = new Tm(0);
            this.B = new Tm(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new ar(this.C, this.I, this.K, this.H), this.A.init(), Sm(this.B, this.A.G()), Rm(this.D, 1), null == this.j && (this.j = new Im(this.C), this.j.init(2E3)), Gm(this.j, () => {
                Gr(this);
                Hr(this)
            })) : Hr(this)
        }
        remove() {
            Gr(this);
            this.j && (this.j.lb(), this.j = null)
        }
        G() {
            return this.B
        }
    };
    var Jr = (a, b, c, d, e) => {
        a = new Ir(a, nr(a, e), new mr(b, d, "#FFF", "#4A4A4A", "normal"), new ir(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var Kr = a => a.googlefc = a.googlefc || {},
        Lr = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function Mr(a) {
        var b = Lr(a.j);
        if (Nr(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = Jr(a.j, c, b, () => Or(a), a.B))
        }
    }

    function Pr(a) {
        const b = Kr(a.j);
        Lr(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => Mr(a)
        })
    }

    function Or(a) {
        Rq(a.A);
        Lr(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            Sq(a.A)
        })
    }
    class Qr {
        constructor(a, b, c) {
            this.j = a;
            this.A = new Tq(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function Nr(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function Rr(a) {
        const b = a.document.createElement("ins");
        Sr(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function Tr(a, b, c, d) {
        const e = a.document.createElement("img");
        Fe(e, b);
        d && e.setAttribute("aria-label", d);
        Sr(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function Ur(a, b) {
        const c = b.document.createElement("span");
        Sr(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function Vr(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, Jq(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function Wr(a) {
        const b = a.document.createElement("div");
        M(b, Jq(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class Xr {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new Tm(!1)
        }
        Pa(a, b, c, d) {
            c = Rr(a);
            const e = Tr(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = Tr(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = Ur(this, a),
                h = Tr(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = Vr(this, a);
            a = Wr(a);
            a.appendChild(c);
            a.appendChild(k);
            Qm(this.j, l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        xc() {
            return 71
        }
        Gc() {
            Rm(this.j, !1);
            return 0
        }
        Hc() {
            Rm(this.j, !0)
        }
    }

    function Sr(a, b) {
        M(b, Jq(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function Yr(a) {
        Zr(a.l, b => {
            var c = a.B,
                d = b.me,
                e = b.yd,
                f = b.nd;
            b = b.showRevocationMessage;
            (new Ir(c, nr(c, a.A), new mr(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new Xr(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            Sq(a.j)
        })
    }
    class $r {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = new Tq(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var as = a => {
        if (!a || !Vb(a, 1)) return !1;
        a = y(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function bs(a) {
        if (!0 !== a.j.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            as(a.l) && (b = new $r(a.j, a.C, a.B || G(a.l, xj, 4), a.A), Rq(b.j), Yr(b), b = !0);
            var c;
            a: if ((c = a.l) && Vb(c, 3)) switch (c = y(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (Pr(new Qr(a.j, a.C, a.B || G(a.l, xj, 4))), b = !0);
            b && (a.A.start(), a.j.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class cs {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.C = d;
            this.B = e || null
        }
    };
    var ds = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = sf("SCRIPT", g);
                h.async = !0;
                Yd(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? ds(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        es = (a, b, c = () => {}, d = () => {}) => {
            ds(Ue(a), b, 0, !1, c, d)
        };
    var fs = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    sc(em);
    sc(fm);
    var gs = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = sf("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function hs() {
        this.U = this.U;
        this.Y = this.Y
    }
    hs.prototype.U = !1;
    hs.prototype.lb = function() {
        this.U || (this.U = !0, this.B())
    };
    hs.prototype.B = function() {
        if (this.Y)
            for (; this.Y.length;) this.Y.shift()()
    };
    const is = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function js(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = is(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    }

    function ks(a) {
        if (js(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && ((S(ll) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return a
    }

    function ls(a) {
        if (a.l) return a.l;
        a.l = Mf(a.j, "__tcfapiLocator");
        return a.l
    }

    function ms(a) {
        return "function" === typeof a.j.__tcfapi || null != ls(a)
    }

    function ns(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (ls(a)) {
            os(a);
            const e = ++a.G;
            a.D[e] = c;
            a.l && a.l.postMessage({
                ["__tcfapiCall"]: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function ps(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = de(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        ns(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = is(c), js(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"), ns(a, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()))
        })
    }

    function qs(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = de(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        ns(a, "addEventListener", (f, g) => {
            e && (clearTimeout(e), e = 0);
            g && (c = f);
            c.internalErrorState = is(c);
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (0 != c.internalErrorState || js(c)) ns(a, "removeEventListener", null, c.listenerId), d()
        })
    }

    function rs(a) {
        return new Promise(b => {
            qs(a, b)
        })
    }

    function os(a) {
        a.A || (a.A = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.D[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.j, "message", a.A))
    }
    class ss extends hs {
        constructor(a, b = 500) {
            super();
            this.j = a;
            this.l = null;
            this.D = {};
            this.G = 0;
            this.C = b;
            this.A = null
        }
        B() {
            this.D = {};
            this.A && (je(this.j, "message", this.A), delete this.A);
            delete this.D;
            delete this.j;
            delete this.l;
            super.B()
        }
        addEventListener(a) {
            let b = {};
            const c = de(() => a(b));
            let d = 0; - 1 !== this.C && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.C));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = is(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                    g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                ns(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && ns(this, "removeEventListener", null, a.listenerId)
        }
    };

    function Zr(a, b, c) {
        const d = fs(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = fs(a.j),
                    f = new ss(a.j);
                ms(f) && ps(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        me: e.getDefaultConsentRevocationText(),
                        yd: e.getDefaultConsentRevocationCloseText(),
                        nd: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function ts(a) {
        const b = Ic(mc("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        es(a.j, b, () => {}, () => {})
    }
    class us {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            try {
                gs(this.j, "googlefcPresent"), ts(this)
            } catch (a) {}
        }
    };
    var vs = (a, b, c) => {
        const d = C(a, pj, 6);
        if (!d) return [];
        c = Jo(G(d, qj, 1), c);
        return (a = Lj(a)) && B(a, 11) ? c.map(e => zo(e)) : c.map(e => {
            const f = uj();
            return new mo(new go(e.Ib, e.Jb), new Qn, new fo(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };

    function ws(a) {
        return new kn(["pedestal_container"], {
            ["google_reactive_ad_format"]: 30,
            ["google_phwr"]: 2.189,
            ["google_ad_width"]: Math.floor(a),
            ["google_ad_format"]: "autorelaxed",
            ["google_full_width_responsive"]: !0,
            ["google_enable_content_recommendations"]: !0,
            ["google_content_recommendation_ui_type"]: "pedestal"
        })
    }
    class xs {
        j(a) {
            return ws(Math.floor(a.l))
        }
    };
    var ys = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        yh: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function zs(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c, d;
        a = null === (c = Al(a)) || void 0 === c ? void 0 : c.tagSpecificState[1];
        (c = null == a ? null : 4 === (null === (d = a.debugCard) || void 0 === d ? void 0 : d.getAdType()) ? a.debugCard : null) && c.displayAdLoadedContent(b)
    };
    var As = {};

    function Bs(a, b, c) {
        let d = Cs(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.Ta && d.Ta.length;) {
            const h = d.Ta.shift();
            var g = so(h.N);
            const k = h.O.j,
                l = !!c.l.Va || !!c.l.Xa || Ds(c) || !!c.l.tc || k > e;
            g = !g || g <= d.ib;
            if (l && g && Es(c, h, {
                    Cc: d.ib
                })) {
                e = k;
                if (d.gb.j.length + 1 >= f) return !0;
                d = Cs(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    var Cs = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = zp(b.L(), f.j ? f.j.Ja : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = V(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Fp(f)) : e = void 0;
        a = null == e || 50 <= e ? Fs(b, f, {
            types: a
        }, c) : null;
        return {
            gb: f,
            ib: e,
            Ta: a
        }
    };
    As[2] = ma(function(a, b) {
        a = Fs(b, zp(b.L()), {
            types: a,
            xa: dp(b.L())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Es(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    As[5] = ma(Bs, [0], 5);
    As[3] = function(a) {
        if (!a.B) return !1;
        var b = Fs(a, zp(a.L()), {
            types: [0],
            xa: dp(a.L())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Es(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    var Gs = a => {
            var b;
            a.l.Tc ? b = new gp(0, null, [], 3, null) : b = dp(a.L());
            return {
                types: [0],
                xa: b
            }
        },
        Is = a => {
            var b = a.L().document.body.getBoundingClientRect().width;
            b = ws(b);
            var c = a.j;
            var d = c.document.body,
                e = $l(c, d, null);
            if (e) c = e;
            else {
                if (c.document.body) {
                    e = Math.floor(c.document.body.getBoundingClientRect().width);
                    for (var f = [{
                            element: c.document.body,
                            depth: 0,
                            height: 0
                        }], g = -1, h = null; 0 < f.length;) {
                        const l = f.pop(),
                            m = l.element;
                        var k = l.height;
                        0 < l.depth && k > g && (g = k, h = m);
                        if (5 > l.depth)
                            for (let n = 0; n < m.children.length; n++) {
                                const q =
                                    m.children[n];
                                k = e;
                                const r = q.getBoundingClientRect().width;
                                (null == r || null == k ? 0 : r >= .9 * k && r <= 1.01 * k) && f.push({
                                    element: q,
                                    depth: l.depth + 1,
                                    height: q.getBoundingClientRect().height
                                })
                            }
                    }
                    e = h
                } else e = null;
                c = e ? $l(c, e.parentNode || d, e) : null
            }
            c && (b = jn(a.J, b), d = Hn(a.j.document, a.G, null, null, {}, b)) && (xn(d.Aa, c, 2, 256), Hs(a, d, b))
        },
        Ks = (a, b) => {
            var c = Gs(a);
            c.hc = [5];
            c = Fs(a, zp(a.L()), c, 8);
            Js(a, c.reverse(), b)
        },
        Js = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.O), Es(a, d, {
                        bd: b
                    })) return !0;
            return !1
        };
    As[8] = function(a) {
        var b = a.L().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => As[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.wb()) return !0;
        b = Gs(a);
        b.ec = [2, 4, 5];
        b = Fs(a, zp(a.L()), b, 8);
        const c = new xs;
        if (Js(a, b, c)) return !0;
        if (a.l.uc) switch (a.l.Ic || 0) {
            case 1:
                Ks(a, c);
                break;
            default:
                Is(a)
        }
        return !0
    };
    As[6] = ma(Bs, [2], 6);
    As[7] = ma(Bs, [1], 7);
    As[9] = function(a) {
        const b = Cs([0, 2], a, 9);
        if (!b || !b.Ta) return a.C.push(17), zs(a.L()), a.B;
        for (var c of b.Ta) {
            var d = c;
            var e = a.l.Rb || null;
            null == e ? d = null : (e = to(d.N, new Ls, new Ms(e, a.L())), d = new Vo(e, d.V(), d.O));
            if (d && !(so(d.N) > b.ib) && Es(a, d, {
                    Cc: b.ib,
                    xd: !0
                })) return a = d.N.J, c = c.N, a = 0 < a.length ? a[0] : null, c.B = !0, null != a && c.J.push(a), !0
        }
        a.C.push(17);
        zs(a.L());
        return a.B
    };
    class Ls {
        l(a, b, c, d) {
            return Kn(d.document, a, b)
        }
        A(a) {
            return V(a).clientHeight || 0
        }
    };
    class Ms {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.F || {};
            c.google_ad_client = a.eb;
            c.google_ad_height = V(b).clientHeight || 0;
            c.google_ad_width = V(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Yj;
            z(b, 1, a.C);
            a.j && bc(b, 2, a.j);
            a.G && z(b, 3, !0);
            c.google_rasc = dc(b);
            a.A && (c.google_adtest = "on");
            return new kn(["fsi_container"], c)
        }
    };
    var Ns = en(new bn(0, {})),
        Os = en(new bn(1, {})),
        Ps = a => a === Ns || a === Os;

    function Qs(a, b, c) {
        pm(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class Rs {
        constructor() {
            this.j = new tm
        }
    };

    function Ss(a, b) {
        b && (a.l.apv = y(b, 4), Vb(b, 23) && (a.l.sat = "" + y(C(b, Qj, 23), 1)));
        return a
    }

    function Ts(a, b) {
        a.l.afm = b.join(",");
        return a
    }
    class Us extends Aq {
        constructor(a) {
            super(a);
            this.l = {}
        }
        B(a) {
            try {
                this.l.su = a.location.hostname
            } catch (b) {
                this.l.su = "_ex"
            }
            a = super.B(a);
            vc(a, this.l);
            return a
        }
    }

    function Vs(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Ws(a, b) {
        a.j.op = Xs(b)
    }

    function Ys(a, b, c) {
        30 >= c.length ? a.j[b] = Zs(c) : (a.j[b] = Zs(c.slice(0, 30)), a.j[b + "_c"] = c.length.toString())
    }

    function $s(a, b, c) {
        Ys(a, "fap", b);
        a.j.fad = Xs(c)
    }

    function at(a, b, c) {
        Ys(a, "fmp", b);
        a.j.fmd = Xs(c)
    }

    function bt(a, b, c) {
        Ys(a, "vap", b);
        a.j.vad = Xs(c)
    }

    function ct(a, b, c) {
        Ys(a, "vmp", b);
        a.j.vmd = Xs(c)
    }

    function dt(a, b, c) {
        Ys(a, "pap", b);
        a.j.pad = Xs(c)
    }

    function et(a, b, c) {
        Ys(a, "pmp", b);
        a.j.pmd = Xs(c)
    }

    function ft(a, b) {
        Ys(a, "psq", b)
    }
    var gt = class extends Us {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.j = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.j);
            return a
        }
    };

    function Zs(a) {
        let b, c;
        return a.map(d => null != (c = null == (b = d) ? void 0 : b.toString()) ? c : "null").join("~")
    }

    function Xs(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    class ht {
        constructor(a) {
            this.j = this.A = this.l = !1;
            this.zb = null;
            this.Ga = a
        }
    }

    function it(a, b, c) {
        const d = b.N;
        if (!pm(a.j, d)) {
            let e;
            a.j.set(d, new ht(null != (e = Ym(To(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function jt(a) {
        it(kt, a, b => {
            b.l = !0
        })
    }

    function lt(a) {
        it(kt, a, b => {
            b.A = !0
        })
    }

    function mt(a) {
        var b = kt;
        it(b, a, c => {
            c.j = !0
        });
        b.H.push(a.N)
    }

    function nt(a, b) {
        it(kt, a, c => {
            c.zb = b
        })
    }

    function ot(a, b, c) {
        const d = [];
        let e = 0;
        for (const h of c.filter(b)) {
            let k;
            if (Ps(null != (k = h.zb) ? k : "")) ++e;
            else {
                let l;
                b = a.l.get(null != (l = h.zb) ? l : "", null);
                d.push(b)
            }
        }
        let f, g;
        return {
            list: d.sort((h, k) => (null != (f = h) ? f : -1) - (null != (g = k) ? g : -1)),
            Fa: e
        }
    }

    function pt(a, b) {
        Ws(b, a.l.Qa());
        var c = sm(a.j).filter(h => 0 === (h.Ga.startsWith(Ns) ? 0 : 1)),
            d = sm(a.j).filter(h => 1 === (h.Ga.startsWith(Ns) ? 0 : 1)),
            e = ot(a, h => h.l, c);
        $s(b, e.list, e.Fa);
        e = ot(a, h => h.l, d);
        at(b, e.list, e.Fa);
        e = ot(a, h => h.A, c);
        bt(b, e.list, e.Fa);
        e = ot(a, h => h.A, d);
        ct(b, e.list, e.Fa);
        c = ot(a, h => h.j, c);
        dt(b, c.list, c.Fa);
        d = ot(a, h => h.j, d);
        et(b, d.list, d.Fa);
        let f, g;
        ft(b, a.H.map(h => null == (f = a.j.get(h)) ? void 0 : f.zb).map(h => null != (g = a.l.get(h)) ? g : null))
    }
    var kt = new class {
        constructor() {
            this.C = null;
            this.G = this.D = !1;
            this.A = null;
            this.J = this.I = !1;
            this.B = null;
            this.l = new tm;
            this.j = new tm;
            this.H = []
        }
    };
    class qt {
        constructor(a = 0) {
            this.j = a
        }
    };
    class rt {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function st(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function tt(a, b) {
        const c = a.B.filter(d => rm(d.kb).every(e => d.kb.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.kb.Qa() > e.kb.Qa() ? d : e, c[0])
    }

    function ut(a, b) {
        b = To(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (pm(a.A, b)) return a.A.get(b);
        var c = cn(b);
        c = tt(a, c);
        a.A.set(b, c);
        return c
    }

    function vt(a, b) {
        let c;
        return (null == (c = ut(a, b)) ? void 0 : c.ee) || Number.MAX_VALUE
    }

    function wt(a, b) {
        const c = T(Jk) || 0;
        if (0 == b.length || 0 == c) return !0;
        const d = (new Nm(b)).filter(e => {
            let f;
            e = (null == (f = ut(a, e)) ? void 0 : f.Ga) || "";
            return "" != e && !(e === Ns || e === Os)
        });
        return c <= d.j.length / b.length
    }
    var xt = class {
        constructor(a) {
            this.j = a;
            this.A = new tm;
            let b;
            this.B = ((null == (b = C(a, Dj, 2)) ? void 0 : G(b, Ej, 1)) || []).map(c => ({
                kb: cn(I(c, 1)),
                ee: Yb(c, 2, 0),
                Ga: I(c, 1)
            }));
            this.l = []
        }
    };

    function yt(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => vt(a.j, c) - vt(a.j, d))
    }

    function zt(a, b) {
        var c = b.O.j,
            d = Math,
            e = d.min;
        const f = b.V(),
            g = b.N.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? st(f.parentElement) : st(f));
        d = a.A;
        0 > d.j && (d.j = V(d.l).scrollHeight || 0);
        d = d.j - b.O.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.V();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function At(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => zt(a, c) - zt(a, d))
    }

    function Bt(a, b) {
        return b.sort((c, d) => {
            const e = c.N.G,
                f = d.N.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? zt(a, c) - zt(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class Ct {
        constructor(a, b = 0, c = null) {
            this.A = new rt(a);
            this.l = new qt(b);
            this.j = c && new xt(c)
        }
    };
    class Dt {
        constructor(a, b, c, d) {
            this.A = new Nm(a);
            this.l = new Ct(b, void 0 === c ? 0 : c, void 0 === d ? null : d);
            this.j = b;
            this.B = new Rs
        }
        find(a, b) {
            b = void 0 === b ? 0 : b;
            const c = a.Zb ? a.Zb : [0],
                d = "number" === typeof a.$b || null === a.$b ? a.$b : 0,
                e = "number" === typeof a.minWidth ? a.minWidth : 0,
                f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
                g = "number" === typeof a.ua ? a.ua : 0;
            let h = this.A;
            h = Mm(Mm(Mm(Mm(Mm(Mm(Mm(h, Wp(c), Et(1, b)), Xp(a.Oa || []), Et(2, b)), $p(a.Qb || []), Et(3, b)), aq(a.$h || []), Et(4, b)), bq(a.hc || []), Et(5, b)), Yp(a.ec || []), Et(6, b)),
                be(oo), Et(7, b));
            let k = h = h.apply(Rp(this.j));
            null !== d && (k = a.hb && a.sc ? Mm(k, Vp(d, a.sc, this.j, a.gb), Ft(16, b)) : Mm(k, Up(d, this.j, a.gb), Ft(9, b)));
            k = Mm(k, ma(dq, e, f), Ft(10, b));
            a.fb && (k = Mm(k, cq(this.j.document, a.fb), Ft(11, b)));
            k = Mm(Mm(k, Sp(this.j), Ft(12, b)), Zp(g, this.j), Ft(13, b));
            a.Xa ? k = Bt(this.l, k) : a.te ? (k = yt(this.l, k), Lm(h, l => {
                jt(l);
                var m;
                null != (m = this.l.j) && (m = ut(m, l), null != (null == m ? void 0 : m.Ga) && nt(l, m.Ga))
            }), Lm(k, l => lt(l))) : k = At(this.l, k);
            a.Va && (k = Om(k, Re(this.j.location.href + this.j.localStorage.google_experiment_mod)));
            1 === c.length && Qs(this.B, c[0], {
                pd: h.j.length,
                ue: k.j.length
            });
            return k.j.slice(0)
        }
    }
    const Et = (a, b) => c => qo(c, b, a),
        Ft = (a, b) => c => qo(c.N, b, a);

    function Gt(a, b) {
        if (!a) return !1;
        a = tf(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Ht(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function It(a) {
        return !!a.nextSibling || !!a.parentNode && It(a.parentNode)
    };

    function Jt(a) {
        const b = Gl(a, !0),
            c = V(a).scrollWidth,
            d = V(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Ll(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            x = 0,
            w = Infinity,
            D = Infinity,
            A = null;
        var E = vp({
            Ca: !1
        }, a);
        for (var F of E) {
            E = F.getBoundingClientRect();
            const ha = b - (E.bottom + f);
            var H = void 0,
                K = void 0;
            if (F.className && -1 != F.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                H = F.getAttribute("google_element_uid");
                K = a.google_sv_map;
                if (!H ||
                    !K || !K[H]) continue;
                H = (K = Wg(K[H])) ? K.height : 0;
                K = K ? K.width : 0
            } else if (H = E.bottom - E.top, K = E.right - E.left, 1 >= H || 1 >= K) continue;
            g.push(H);
            k.push(K);
            l.push(H * K);
            F.className && -1 != F.className.indexOf("google-auto-placed") ? (x += 1, F.className && -1 != F.className.indexOf("pedestal_container") && (A = H)) : (w = Math.min(w, ha), n.push(E), r += 1, h.push(H), m.push(H * K));
            D = Math.min(D, ha);
            q.push(E)
        }
        w = Infinity === w ? null : w;
        D = Infinity === D ? null : D;
        f = Kt(n);
        q = Kt(q);
        h = Lt(b, h);
        n = Lt(b, g);
        m = Lt(b * c, m);
        F = Lt(b * c, l);
        return new Mt(a, {
            Cd: e,
            ac: b,
            Zd: c,
            Yd: d,
            Rd: r,
            od: x,
            rd: Nt(g),
            sd: Nt(k),
            qd: Nt(l),
            Wd: f,
            Vd: q,
            Ud: w,
            Td: D,
            Ob: h,
            Nb: n,
            kd: m,
            jd: F,
            $d: A
        })
    }

    function Ot(a, b, c, d) {
        const e = kf() && !(900 <= V(a.l).clientWidth);
        d = Ta(d, f => Xa(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Cd,
            pg_h: Pt(a.j.ac),
            pg_w: Pt(a.j.Zd),
            pg_hs: Pt(a.j.Yd),
            c: Pt(a.j.Rd),
            aa_c: Pt(a.j.od),
            av_h: Pt(a.j.rd),
            av_w: Pt(a.j.sd),
            av_a: Pt(a.j.qd),
            s: Pt(a.j.Wd),
            all_s: Pt(a.j.Vd),
            b: Pt(a.j.Ud),
            all_b: Pt(a.j.Td),
            d: Pt(a.j.Ob),
            all_d: Pt(a.j.Nb),
            ard: Pt(a.j.kd),
            all_ard: Pt(a.j.jd),
            pd_h: Pt(a.j.$d),
            dt: e ? "m" : "d"
        }
    }
    class Mt {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function Nt(a) {
        return Ke.apply(null, Ta(a, b => 0 < b)) || null
    }

    function Lt(a, b) {
        return 0 >= a ? null : Je.apply(null, b) / a
    }

    function Kt(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Pt(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Qt(a, b) {
        b = (V(b).clientHeight || 0) - Ll(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Dp(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function Rt(a) {
        const b = {};
        var c = xp({
            Ca: !1,
            qb: !1,
            rb: !1,
            sb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Dp);
        b.dd = c.length;
        c = yp({
            rb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Dp);
        b.Ed = c.length;
        c = yp({
            sb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Dp);
        b.Xd = c.length;
        c = yp({
            qb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Dp);
        b.hd = c.length;
        c = (V(a).clientHeight || 0) - Ll(a);
        c = xp({
            Ca: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Dp).filter(la(St, null, c));
        b.ed = c.length;
        a = Jt(a);
        c = null != a.j.Ob ? a.j.Ob :
            null;
        null != c && (b.Sd = c);
        a = null != a.j.Nb ? a.j.Nb : null;
        null != a && (b.gd = a);
        return b
    }

    function Ds(a) {
        var b;
        let c;
        if (0 == (null != (c = null == (b = a.A.l.j) ? void 0 : [...Wb(b.j, 1)].length) ? c : 0)) return !1;
        if (0 == (T(Jk) || 0)) return !0;
        if (void 0 === a.I) {
            b = a.A.find({
                Zb: [0, 1, 2]
            });
            let d;
            a.I = (null == (d = a.A.l.j) ? void 0 : wt(d, b)) || !1
        }
        return a.I
    }

    function Es(a, b, c) {
        var {
            Cc: d,
            bd: e,
            xd: f
        } = void 0 === c ? {} : c;
        c = b.N;
        if (c.B) return !1;
        var g = b.V(),
            h = c.l(),
            k = a.B;
        a: {
            var l = a.j;
            switch (h) {
                case 0:
                    l = Gt(Ht(g), l);
                    break a;
                case 3:
                    l = Gt(g, l);
                    break a;
                case 2:
                    var m = g.lastChild;
                    l = Gt(m ? 1 == m.nodeType ? m : Ht(m) : null, l);
                    break a
            }
            l = !1
        }
        if (k = !l && !(!k && 2 == h && !It(g))) g = 1 == h || 2 == h ? g : g.parentNode, k = !(g && !qn(g) && 0 >= g.offsetWidth);
        if (!k) return !1;
        g = null == d ? null : new kn(null, {
            google_max_responsive_height: d
        });
        h = ln(y(c.Ua, 2) || 0);
        k = c.G;
        k = null == k ? null : new kn(null, {
            google_ml_rank: k
        });
        l = Tt(a,
            c);
        g = jn(a.J, c.P ? c.P.j(b.O) : null, g, e || null, h, k, l);
        h = b.fill(a.G, g);
        if (k = f) {
            if (h) {
                k = h.ca;
                l = k.style.width;
                k.style.width = "100%";
                m = k.offsetWidth;
                k.style.width = l;
                k = m;
                l = a.j;
                m = h.ca;
                var n = g && g.Ra() || {};
                if (l.top != l) var q = Vg(l) ? 3 : 16;
                else if (488 > V(l).clientWidth)
                    if (l.innerHeight >= l.innerWidth)
                        if (q = V(l).clientWidth, !q || .3 < (q - k) / q) q = 6;
                        else {
                            if (q = "true" != n.google_full_width_responsive) c: {
                                var r = m.parentElement;
                                for (q = V(l).clientWidth; r; r = r.parentElement) {
                                    const x = tf(r, l);
                                    if (!x) continue;
                                    const w = Ff(x.width);
                                    if (w && !(w >=
                                            q) && "visible" != x.overflow) {
                                        q = !0;
                                        break c
                                    }
                                }
                                q = !1
                            }
                            q = q ? 7 : !0
                        }
                else q = 5;
                else q = 4;
                if (!0 !== q) k = q;
                else {
                    if (!(n = "true" == n.google_full_width_responsive)) b: {
                        do
                            if ((n = tf(m, l)) && "fixed" == n.position) {
                                n = !1;
                                break b
                            }
                        while (m = m.parentElement);
                        n = !0
                    }
                    n ? (l = V(l).clientWidth, k = l - k, k = l && 0 <= k ? !0 : l ? -10 > k ? 11 : 0 > k ? 14 : 12 : 10) : k = 9
                }
                if (k) {
                    k = a.j;
                    l = h.ca;
                    if (m = En(k, l)) l.style.border = l.style.borderStyle = l.style.outline = l.style.outlineStyle = l.style.transition = "none", l.style.borderSpacing = l.style.padding = "0", Cn(l, m, "0px"), l.style.width = V(k).clientWidth +
                        "px", Fn(k, l, m), l.style.zIndex = 30;
                    k = !0
                } else un(h.Aa), k = !1
            } else k = !1;
            k = !k
        }
        if (k || !Hs(a, h, g)) return !1;
        si(9, [c.G, c.Da]);
        Ds(a) && mt(b);
        return !0
    }

    function Fs(a, b, c, d) {
        const e = c.xa ? c.xa : a.D;
        var f = {
            Bb: e.A,
            ua: e.C
        };
        for (let g of e.D) g.adCount <= b.j.length && (f = g.ic);
        return a.A.find({
            Zb: c.types,
            $b: f.Bb,
            gb: b,
            Oa: a.Y,
            ua: f.ua || void 0,
            Va: !!a.l.Va,
            Xa: !!a.l.Xa,
            te: Ds(a),
            ec: c.ec,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            Qb: a.U,
            fb: a.P,
            hc: c.hc,
            hb: !!a.l.hb,
            sc: e.j
        }, d)
    }

    function Ut(a) {
        return a.H ? a.H : a.H = a.j.google_ama_state
    }

    function Tt(a, b) {
        return Ym($m(Qo(b).map(mn), () => {
            a.C.push(18)
        }))
    }

    function Hs(a, b, c) {
        if (!b) return !1;
        try {
            Ln(a.j, b.ca, c)
        } catch (d) {
            return un(b.Aa), a.C.push(6), !1
        }
        return !0
    }
    class Vt {
        constructor(a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            this.A = a;
            this.G = b;
            this.j = c;
            this.D = d.xa;
            this.Y = d.Oa || [];
            this.J = d.Fd || null;
            this.U = d.Qb || [];
            this.P = d.fb || [];
            this.l = e;
            this.B = !1;
            this.K = [];
            this.C = [];
            this.I = this.H = void 0
        }
        L() {
            return this.j
        }
        ha(a) {
            this.K.push(a)
        }
        Xb() {
            return !!this.l.Pc
        }
        wb() {
            return !am(this.j)
        }
    }
    const St = (a, b) => b.top <= a;

    function Wt(a, b, c, d, e) {
        this.ya = a;
        this.errors = b;
        this.Ya = c;
        this.j = d;
        this.l = e
    };
    var Xt = (a, b, {
        wb: c = !1,
        Xb: d = !1,
        ne: e = !1
    } = {}) => {
        const f = [];
        e && f.push(9); - 1 < b.indexOf(3) && f.push(6); - 1 < b.indexOf(4) && !d && c && f.push(8); - 1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3)); - 1 < b.indexOf(2) && f.push(7); - 1 < b.indexOf(4) && d && c && f.push(8);
        return f
    };
    class Yt {
        constructor(a, b) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = Ya(this.l, 1);
            this.j = b
        }
    };
    const Zt = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class $t {
        j() {
            return new kn([], {
                ["google_reactive_ad_format"]: 40,
                ["google_tag_origin"]: "qs"
            })
        }
    };
    class au {
        j() {
            return new kn(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function bu(a) {
        return rn(a.j.document).map(b => {
            const c = new go(b, 3);
            b = new io(Nn(a.j, b));
            return new mo(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class cu {
        constructor(a) {
            var b = new au;
            this.j = a;
            this.l = b || null
        }
    };
    const du = {
        lc: "10px",
        Mb: "10px"
    };

    function eu(a) {
        return om(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new mo(new go(b, 1), new eo(du), a.l, !1, 0, [], null, a.j, null))
    }
    class fu {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function gu(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function hu(a) {
        return Ut(a.A) && Ut(a.A).placed || []
    }

    function iu(a) {
        return hu(a).map(b => Fm(Dm(b.element, a.j)))
    }

    function ju(a) {
        return hu(a).map(b => b.index)
    }

    function ku(a, b) {
        const c = b.N;
        return !a.D && c.A && Vb(c.A, 8) && 1 == y(c.A, 8) ? [] : c.B ? (c.J || []).map(d => Fm(Dm(d, a.j))) : [Fm(new Em(b.O.j, 0))]
    }

    function lu(a) {
        a.sort((e, f) => e.wa - f.wa);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.wa;
            d = d.wa + d.j;
            f <= c ? c = Math.max(c, d) : (b.push(new Em(c, f - c)), c = d)
        }
        return b
    }

    function mu(a, b) {
        const c = [];
        let d = 0;
        for (const e of rm(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.sa() - g.sa());
            a.I || f.splice(a.C, f.length);
            !a.G && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(e + "G" + f.map(g => g.wa + "~" + g.sa()).join("G"));
            d += f.length;
            if (!a.G && d >= a.l) break
        }
        return c
    }
    var nu = class {
        constructor(a, b, c) {
            this.H = -1 == c.Sb;
            this.B = c.Sb;
            this.I = -1 == c.nb;
            this.C = c.nb;
            this.G = -1 == c.Ab;
            this.l = c.Ab;
            this.D = c.Jd;
            this.A = b;
            this.j = a
        }
    };
    const ou = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        pu = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var qu = (a, b) => {
        a = Wb(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const su = (a, b) => {
            a = pu(ou(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = zf(a),
                d = ru(a);
            return b.find(e => {
                const f = Vb(e, 7) ? y(C(e, Tj, 7), 1) : y(e, 1);
                e = Vb(e, 7) ? y(C(e, Tj, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        ru = a => {
            const b = {};
            for (;;) {
                b[zf(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };

    function tu(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    uu(a);
                    break;
                case 1:
                    b = new br(a.l, a.j, a.C);
                    var c = Nq(b.j, b.l);
                    c = Wo(c, b.j).sort(cr);
                    c = 0 == c.length ? [] : [c[Math.floor(c.length / 2)]];
                    var d = b.j;
                    const e = [];
                    for (let f = 0; f < c.length; f++) {
                        const g = c[f],
                            h = "autors-container-" + f,
                            k = d.document.createElement("div");
                        k.setAttribute("id", h);
                        (new ar(d, g, new Mq(k))).init();
                        e.push(h)
                    }(new Zq(b.j, e, b.A, y(C(b.l, nj, 22), 1))).init();
                    break;
                case 2:
                    (b = C(a.j, zj, 18)) && bs(new cs(a.l, a.ba || new us(a.l, a.C), b, new Qq(a.l), G(a.j, xj, 1)));
                    break;
                case 3:
                    vu(a)
            }
        })
    }

    function uu(a) {
        wu(a) && xu(a, "p", yu(a));
        if (Jj(a.j) && 1 === y(Jj(a.j), 1)) {
            var b = C(Jj(a.j), Vj, 6);
            b && 2 === y(b, 1) && Mn(a.l)
        }
        b = a.A.be;
        a: {
            var c = a.l;
            var d = ep(c);c = V(c).clientHeight || bp[d];
            var e = hp(G(b, $i, 2), d);
            if (e && (e = kp(e, c))) {
                d = e;
                break a
            }
            d = fp(d, c)
        }
        if (a.A.R && Vb(a.A.R, 10) && (c = Xb(C(a.A.R, Uj, 10), 1), null !== c && void 0 !== c)) {
            var f = a.l;
            d = c;
            c = ep(f);
            e = V(f).clientHeight || bp[c];
            var g = void 0;
            b && (g = (g = (g = hp(G(b, $i, 2), c)) ? C(g, bj, 7) : void 0) ? lp(g, e) : void 0);
            var h = ep(f);
            f = V(f).clientHeight || bp[h];
            const Q = jp(cp[h].jc, f);
            f = null ===
                Q ? fp(h, f) : new gp(Q, Q, mp(Q, Q, 8), 8, .3, g);
            g = jp(cp[c].Sc, e);
            h = jp(cp[c].jc, e);
            e = jp(cp[c].Rc, e);
            c = f.A;
            g && e && h && void 0 !== d && (c = .5 >= d ? h + (1 - 2 * d) * (g - h) : e + (2 - 2 * d) * (h - e));
            d = c;
            d = new gp(c, d, mp(c, d, f.l), f.l, f.B, f.j)
        }
        if (Vb(a.j, 26)) {
            c = C(a.j, Xj, 26);
            e = a.l;
            g = B(c, 2);
            c = C(c, $i, 1);
            f = V(e).clientHeight || bp[ep(e)];
            var k;
            e = null != (k = jp(null == c ? void 0 : y(c, 2), f)) ? k : d.A;
            var l;
            k = null != (l = jp(null == c ? void 0 : y(c, 5), f)) ? l : d.C;
            var m;
            l = g ? [] : null != (m = ip(null == c ? void 0 : G(c, aj, 3), f)) ? m : d.D;
            var n;
            m = null != (n = null == c ? void 0 : y(c, 4)) ? n : d.l;
            var q;
            n = null != (q = null == c ? void 0 : Xb(c, 6)) ? q : d.B;
            var r;
            q = null != (r = (null == c ? 0 : Vb(c, 7)) ? lp(C(c, bj, 7), f) : null) ? r : d.j;
            d = new gp(e, k, l, m, n, q)
        }
        r = a.A.R ? Wb(a.A.R, 6) : [];
        q = a.A.R ? G(a.A.R, ij, 5) : [];
        var x;
        m = a.j;
        k = G(m, xj, 1);
        l = a.A.R && qu(a.A.R, 1) ? "text_image" : "text";
        c = new $t;
        n = no(k, a.l, {
            ud: c,
            Nd: new jo(l)
        });
        k.length != n.length && a.K.push(13);
        n = n.concat(eu(new fu(a.l, c)));
        k = 0;
        c = S(yk);
        e = !1;
        Jj(m) && 1 === y(Jj(m), 1) && (f = C(Jj(m), Vj, 6)) && (k = y(f, 2) || 0, 1 === y(f, 1) && (e = !0));
        var w, D;
        f = (null == (x = C(m, Bj, 24)) ? void 0 : null == (w = C(x, Fj, 3)) ? void 0 :
            null == (D = C(w, Gj, 3)) ? void 0 : gc(D, Hj, 2, Ij)) || !1;
        if (c || e || f) x = bu(new cu(a.l)), n = n.concat(x), kt.I = !0, kt.B = x.length;
        n = n.concat(vs(m, l, a.l));
        x = C(m, Bj, 24);
        x = new Dt(n, a.l, k, x);
        w = a.C;
        D = a.l;
        r = {
            xa: d,
            Fd: a.Y,
            Oa: a.A.Oa,
            Qb: r,
            fb: q
        };
        n = S(zk);
        Lj(a.j) ? (q = Lj(a.j), m = Xb(q, 8), q = {
            Va: n || Zb(q, 14, !1),
            Xa: Zb(q, 2, !1),
            tc: Zb(q, 3, !1),
            Tc: Zb(q, 4, !1),
            uc: Zb(q, 5, !1),
            Pc: Zb(q, 6, !1),
            ae: null == m ? 0 : m,
            Ic: y(q, 10),
            hb: zu(a),
            Rb: a.P
        }) : q = {
            Va: n,
            Xa: !1,
            tc: !1,
            Tc: !1,
            uc: !1,
            Pc: !1,
            ae: 0,
            Ic: 0,
            hb: zu(a),
            Rb: a.P
        };
        a.B = new Vt(x, w, D, r, q);
        var A, E;
        (null == (A = Ut(a.B)) ?
            0 : null == (E = A.optimization) ? 0 : E.ablatingThisPageview) && !Ds(a.B) && Mn(a.l);
        E = a.A.R ? Wb(a.A.R, 2) : [];
        A = a.B;
        b = Xt(y(b, 1), E, {
            wb: A.wb(),
            Xb: A.Xb(),
            ne: !!A.l.Rb
        });
        b = new Yt(b, A);
        a.H = b;
        A = a.H;
        b = new lm;
        for (A.j.B = !0; 0 < A.l.length;) E = A, (x = As[A.l[0]]) ? E = x(E.j) : (E.j.ha(12), E = !0), E || A.j.ha(5), A.l.shift();
        try {
            var F = A.j.A.A.filter(oo).j.length,
                H = A.j.K.slice(0),
                K = A.j;
            let Q;
            var ha = [...K.C, ...((null == (Q = K.A.l.j) ? void 0 : [...Q.l]) || [])];
            var qa = new Zt(new Wt(F, H, ha, A.j.A.A.j.length, A.j.A.B.j));
            jm(b);
            b.j = 1;
            b.B = qa;
            mm(b.l)
        } catch (Q) {
            F =
                Q, jm(b), b.j = 2, b.A = F, mm(b.l)
        }
        b.l.then(la(a.ma, a), la(a.U, a))
    }

    function vu(a) {
        Zm(Dq(a.l, a.j, a.la, {
            ["google_ad_client"]: a.C
        }), b => {
            const c = !!b.B.Wa && Gq(b);
            c && (b.C = mq(b.j, b.D, b.B.Wa));
            var d = b.j;
            var e = C(b.l, Ti, 2);
            var f = Io(b.G, d);
            f = f.filter(Ko).filter(Lo(f)).filter(Mo(d));
            f.sort(No);
            if (f = f[0] || null) {
                a: switch (Yb(e, 1, 0)) {
                    case 1:
                        d = new fq(d, f);
                        break a;
                    case 2:
                        d = new $o(Xo(d, f));
                        break a;
                    case 3:
                        d = new eq(d, Xo(d, f));
                        break a;
                    default:
                        throw Error(`Unknown player position: ${Yb(e,1,0)}`);
                }
                d = d.j()
            }
            else d = null;
            if (d) {
                e = b.j;
                f = C(b.l, Xi, 4) || void 0;
                if (0 < e.document.getElementsByTagName("google-read-aloud-player").length) e =
                    Wm("Player already created");
                else {
                    var g = b.B,
                        h = e.document;
                    const k = h.createElement("div");
                    k.id = "google-auto-placed-read-aloud-player";
                    M(k, {
                        margin: "5px"
                    });
                    const l = h.createElement("script");
                    Xd(l, Nd `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`);
                    k.appendChild(l);
                    gq(h, k, mc("https://www.google-analytics.com/analytics.js"));
                    gq(h, k, mc("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
                    h = h.createElement("google-read-aloud-player");
                    h.setAttribute("data-api-key",
                        "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
                    h.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
                    h.setAttribute("data-url", g.url);
                    h.setAttribute("data-voice", "en-us-f-1");
                    f && (Vb(f, 1) && 0 != Yb(f, 1, 0) && h.setAttribute("data-docking-begin-trigger", hq[Yb(f, 1, 0)]), Vb(f, 2) && h.setAttribute("data-experiment", I(f, 2)));
                    k.appendChild(h);
                    Uo(d, k);
                    e = Um(e.document.getElementsByTagName("google-read-aloud-player")[0])
                }
                null != e.j ? (b.A = e.j.value, c && Fq(b), Hq(b, {
                    sts: "ok",
                    pp: d.O.j
                })) : Hq(b, {
                    sts: "wf"
                })
            } else Hq(b, {
                sts: "pf"
            })
        })
    }

    function zu(a) {
        return a.A.R && Vb(a.A.R, 10) ? .5 <= (Xb(C(a.A.R, Uj, 10), 1) || 0) : !0
    }

    function Au(a, b) {
        for (var c = yq(yq(new Us(b.ya), b.errors), a.K), d = b.Ya, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.l.ppos = b.Kc;
        c.l.eatf = b.Lb;
        c.l.reatf = b.pb;
        c.l.a = a.H.B.slice(0).join(",");
        a = xq(Ts(Ss(c, a.j), a.G), a.C);
        if (c = b.Kb) a.l.as_count = c.dd, a.l.d_count = c.Ed, a.l.ng_count = c.Xd, a.l.am_count = c.hd, a.l.atf_count = c.ed, a.l.mdns = Vs(c.Sd), a.l.alldns = Vs(c.gd);
        c = b.Fb;
        null != c && (a.l.allp = c);
        if (c = b.Gd) {
            d = [];
            for (var h of rm(c)) 0 < c.get(h).length && (e = c.get(h)[0], d.push("(" + [h, e.pd, e.ue].join() + ")"));
            a.l.fd = d.join(",")
        }
        h = b.ac;
        null != h && (a.l.pgh = h);
        void 0 !== b.exception && zq(a, b.exception).ha(1);
        return a
    }

    function Bu(a, b) {
        var c = Au(a, b);
        Bq(a.D, 0 < b.errors.length || 0 < a.K.length || void 0 !== b.exception ? 0 < a.J ? sq : qq : 0 < a.J ? rq : pq, c);
        if (C(a.j, Bj, 24)) {
            if (null != (b = a.B.A.l.j)) {
                kt.C = [...Wb(b.j, 1)];
                var d;
                let l;
                kt.G = !!(null == (d = C(b.j, Fj, 3)) ? 0 : null == (l = C(d, Gj, 3)) ? 0 : gc(l, Hj, 2, Ij));
                d = new tm;
                var e;
                let m;
                for (const n of null != (m = null == (e = C(b.j, Dj, 2)) ? void 0 : G(e, Ej, 1)) ? m : []) d.set(I(n, 1), Yb(n, 2, 0));
                kt.l = d
            }
            e = Ut(a.B);
            var f;
            kt.A = !!(null == e ? 0 : null == (f = e.optimization) ? 0 : f.ablationFromStorage);
            var g;
            if (null == e ? 0 : null == (g = e.optimization) ?
                0 : g.ablatingThisPageview) kt.D = !0;
            let k;
            kt.J = !!(null == e ? 0 : null == (k = e.optimization) ? 0 : k.availableAbg);
            var h;
            f = kt;
            c = new gt(c);
            f.C ? (g = null != (h = f.C) ? h : [], c.j.sl = g.join("~"), c.j.ab = Xs(f.D), c.j.rr = Xs(f.I), c.j.oab = Xs(f.G), null != f.A && (c.j.sab = Xs(f.A)), c.j.ls = Xs(f.J), Ws(c, f.l.Qa()), null != f.B && (c.j.rp = Xs(f.B)), pt(f, c)) : (h = c, f = "irr".replace(RegExp("~", "g"), ""), h.j.e = h.j.e ? h.j.e + ("~" + f) : f);
            h = c;
            Bq(a.D, vq, h)
        }
    }

    function Cu(a) {
        return Jj(a.j) && 1 === y(Jj(a.j), 1) ? !(C(Jj(a.j), Vj, 6) && 1 <= (y(C(Jj(a.j), Vj, 6), 3) || 0)) : !1
    }

    function Du(a) {
        if (Cu(a)) {
            a = a.B;
            var b = yp({
                rb: !0,
                sb: !0
            }, a.j);
            a = 0 < Qt(b, a.j)
        } else a = a.B.j, b = xp({
            Ca: !1,
            qb: !1
        }, a), a = 0 < Qt(b, a);
        return a
    }

    function Eu(a) {
        if (wu(a)) {
            var b = yu(a);
            a.I.init(null == b ? void 0 : b, () => {
                xu(a, "s", b)
            });
            Gm(a.I, c => {
                xu(a, "d", yu(a), c);
                a.I.lb();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = Lj(d)) ? 0 : Zb(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = Lj(f)) && z(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.G) ? 0 : h.includes(0)) a.J++, uu(a), xu(a, "r", yu(a), c)
                    } catch (h) {
                        xu(a, "f", yu(a), c), Bq(a.D, sq, zq(Ts(Ss(xq(new Us(0), a.C), a.j), a.G).ha(1), h))
                    }
                }
            })
        }
    }

    function Fu(a, b, c) {
        {
            var d = Ut(a.B),
                e = b.j;
            const f = e.j;
            let g = e.ya,
                h = e.errors.slice(),
                k = e.Ya.slice(),
                l = b.exception;
            d ? (d.numAutoAdsPlaced ? g += d.numAutoAdsPlaced : a.H.A && k.push(13), void 0 !== d.exception && (l = d.exception), c = {
                ya: g,
                Fb: f,
                errors: e.errors.slice(),
                Ya: k,
                exception: l,
                pb: c,
                Lb: !!d.eatf
            }) : (k.push(12), a.H.A && k.push(13), c = {
                ya: g,
                Fb: f,
                errors: h,
                Ya: k,
                exception: l,
                pb: c,
                Lb: !1
            })
        }
        c.Kb = Rt(a.B.j);
        if (b = b.j.l) c.Gd = b;
        c.ac = V(a.l).scrollHeight;
        if (ri()) {
            d = a.B.A.A.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.K;
                for (const g of rm(e)) d[g] =
                    e.get(g);
                d = {
                    anchorElement: f.H.j(f.j),
                    position: f.l(),
                    clearBoth: f.I,
                    locationType: f.Da,
                    placed: f.B,
                    placementProto: f.A ? f.A.toJSON() : null,
                    articleStructure: f.C ? f.C.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            si(14, [{
                placementIdentifiers: b
            }, a.B.G, c.Kb])
        }
        return c
    }

    function Gu(a, b) {
        a = a.B.j;
        a = a.googleSimulationState = a.googleSimulationState || {};
        a.amaConfigPlacementCount = b.Fb;
        a.numAutoAdsPlaced = b.ya;
        a.hasAtfAd = b.pb;
        void 0 !== b.exception && (a.exception = b.exception)
    }

    function xu(a, b, c, d) {
        a = {
            r: b,
            pg_h: V(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (a.pg_hd = d);
        P(uq.da, a, uq.aa)
    }

    function wu(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = Lj(b)) ? void 0 : Zb(c, 18, !1)) ? d : !1
    }

    function yu(a) {
        let b = null;
        Lj(a.j) && Vb(Lj(a.j), 19) && (b = y(Lj(a.j), 19));
        return b
    }
    class Hu {
        constructor(a, b, c, d, e, f, g, h, k, l, m) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.A = e;
            this.G = f;
            this.Y = g || null;
            this.K = [];
            this.ba = h;
            this.I = k;
            this.P = l;
            this.J = 0;
            this.la = m ? m : {
                url: a.location.href,
                Wa: void 0
            }
        }
        ma(a) {
            try {
                const b = Du(this) || Cu(this) ? Du(this) : void 0;
                pn({
                    Pb: b
                }, this.l);
                Eu(this);
                const c = Fu(this, a, Du(this));
                Vb(this.j, 25) && B(C(this.j, Wj, 25), 1) && Gu(this, c);
                Bu(this, c);
                O(753, () => {
                    if (S(sk) && null != this.B) {
                        var d = this.l;
                        var e = this.B;
                        var f = {
                                Sb: T(xk),
                                nb: T(wk),
                                Ab: T(tk),
                                Jd: S(rk)
                            },
                            g = gu(f.Sb, "gapsMeasurementWindow") ||
                            gu(f.nb, "gapsPerMeasurementWindow") || gu(f.Ab, "maxGapsToReport");
                        e = null != g ? Wm(g) : -1 == f.nb && -1 == f.Ab ? Wm("ShouldHaveLimits") : Um(new nu(d, e, f));
                        d = tc(c);
                        if (null != e.j) {
                            e = e.j.value;
                            f = Wo(e.A.A.A.j.slice(0), e.j);
                            g = iu(e);
                            var h = new um(ju(e));
                            for (var k = 0; k < f.length; ++k)
                                if (!h.contains(k)) {
                                    var l = ku(e, f[k]);
                                    g.push(...l)
                                }
                            g.push(new Em(0, 0));
                            g.push(Fm(new Em(V(e.j).scrollHeight, 0)));
                            f = lu(g);
                            g = new tm;
                            for (h = 0; h < f.length; ++h) k = f[h], l = e.H ? 0 : Math.floor(k.wa / e.B), pm(g, l) || g.set(l, []), g.get(l).push(k);
                            f = mu(e, g);
                            d.Kc = `M${e.l}H${e.B}C${e.C}B${Number(!!e.D)}W${f.join("W")}`
                        } else d.Kc =
                            "E" + e.l.message;
                        d = Au(this, d);
                        Bq(this.D, tq, d)
                    }
                })()
            } catch (b) {
                this.U(b)
            }
        }
        U(a) {
            Bu(this, {
                ya: 0,
                Fb: void 0,
                errors: [],
                Ya: [],
                exception: a,
                pb: void 0,
                Lb: void 0,
                Kb: void 0
            })
        }
    };
    var Iu = class extends v {
        constructor(a) {
            super(a)
        }
    };

    function Ju(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Xm(() => ec(Iu, c)) : Um(null)
    };

    function Ku() {
        var a = N(),
            b = lg(a);
        if (b) return (b = b || lg()) ? (a = b.pageViewId, b = b.clientId, "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null, +a;
        a = Zf(a);
        (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }

    function Lu() {
        if (Mu) return Mu;
        const a = og() || N(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Mu = b : a.google_persistent_state_async = Mu = new Nu
    }

    function Ou(a) {
        return Pu[a] || "google_ps_" + a
    }

    function W(a, b, c) {
        b = Ou(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function Qu(a, b) {
        var c = W(a, b, 0) + 1;
        return a.S[Ou(b)] = c
    }

    function Ru() {
        var a = Lu();
        return W(a, 20, {})
    }

    function Su() {
        var a = Lu();
        return W(a, 28, [])
    }
    class Nu {
        constructor() {
            this.S = {}
        }
    }
    var Mu = null;
    const Pu = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Tu(a) {
        this.j = a || {
            cookie: ""
        }
    }
    p = Tu.prototype;
    p.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.ai, g = c.pe || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Dc);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    p.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = va(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            Dc: 0,
            path: b,
            domain: c
        });
        return d
    };
    p.isEmpty = function() {
        return !this.j.cookie
    };
    p.Qa = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    p.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = va(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function Uu(a, b = window) {
        if (B(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function Vu(a) {
        return "null" !== a.origin
    }

    function Wu(a, b, c) {
        b = B(b, 5) && Vu(c) ? c.document.cookie : null;
        return null === b ? null : (new Tu({
            cookie: b
        })).get(a) || ""
    };

    function Xu(a, b) {
        return z(a, 5, b)
    }
    var Yu = class extends v {
        constructor() {
            super(void 0)
        }
    };
    var av = ({
        ka: a,
        ub: b,
        zc: c = !1,
        Ac: d = !1
    }) => {
        if (!Zu({
                ka: a,
                ub: b,
                zc: c,
                Ac: d
            })) return $u(a, Xu(new Yu, !0));
        b = Lu();
        (b = W(b, 24, void 0)) ? (b = Xu(new Yu, ks(b)), a = $u(a, b)) : a = new Vm(null, Error("tcunav"));
        return a
    };

    function Zu({
        ka: a,
        ub: b,
        zc: c,
        Ac: d
    }) {
        if (!(d = !d && ms(new ss(a)))) {
            if (c = !c) {
                if (b) {
                    a = Ju(a);
                    if (null != a.j)
                        if ((a = a.j.value) && Vb(a, 1)) b: switch (a = y(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else ci(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function $u(a, b) {
        return (a = Uu(b, a)) ? Um(a) : new Vm(null, Error("unav"))
    };
    var bv = class extends v {
        constructor(a) {
            super(a)
        }
    };
    class cv {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };
    sc(em);
    sc(fm);
    var dv = class extends v {
            constructor(a) {
                super(a)
            }
        },
        ev = class extends v {
            constructor(a) {
                super(a)
            }
        },
        fv = class extends v {
            constructor(a) {
                super(a)
            }
        };

    function gv(a) {
        a = (new Tu(a)).get("FCCDCF", "");
        try {
            return a ? ec(dv, a) : null
        } catch (b) {
            return null
        }
    }

    function hv(a) {
        (a = gv(a)) && C(a, ev, 4)
    };

    function iv(a) {
        a.__uspapi || a.frames.__uspapiLocator || (a = new jv(a), kv(a))
    }

    function kv(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", gs(a.j, "__uspapiLocator"), oa("__uspapi", (...b) => lv(a, ...b)))
    }

    function lv(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.A
        }, !0)
    }
    class jv {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.A = (a = (a = gv(this.l)) ? C(a, fv, 5) || null : null) ? y(a, 2) : null;
            hv(this.l);
            hv(this.l)
        }
    };

    function mv(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function nv(a, b) {
        a = mv(a);
        b = mv(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    const ov = {
        ["google_ad_channel"]: !0,
        ["google_ad_host"]: !0
    };
    var pv = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            P("ama", b, .01)
        },
        qv = a => {
            const b = {};
            xf(ov, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const sv = (a, b, c) => {
        var d = new Pj;
        bc(c, 3, d);
        var e = Lj(c) && y(Lj(c), 13) ? y(Lj(c), 13) : 1;
        z(d, 1, Date.now() + 864E5 * e);
        d = c.constructor;
        e = Eb(c.ea(), Ib);
        d = Rb(d, e);
        fc(d, c);
        if (Lj(c)) {
            e = new Mj;
            var f = B(Lj(c), 23);
            e = z(e, 23, f);
            f = Zb(Lj(c), 12, !1);
            e = z(e, 12, f);
            c = Zb(Lj(c), 15, !1);
            c = z(e, 15, c);
            bc(d, 15, c)
        }
        c = G(d, xj, 1);
        for (e = 0; e < c.length; e++) z(c[e], 11, Tb);
        bc(d, 22, void 0);
        if (S(qk)) rv(a);
        else try {
            (b || a.localStorage).setItem("google_ama_config", dc(d))
        } catch (g) {
            pv(a, {
                lserr: 1
            })
        }
    };
    var rv = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                pv(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            pv(a, {
                lserr: 1
            })
        }
    };
    var tv = a => {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        },
        uv = a => {
            a = tv(a);
            a.eids || (a.eids = []);
            return a.eids
        },
        vv = (a, b) => {
            a = tv(a);
            a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
            const c = !a.processed_sra_frame_pingbacks[b];
            a.processed_sra_frame_pingbacks[b] = !0;
            return c
        };
    var wv = (a, b, c, d, e, f = null, g) => {
        try {
            var h = a.localStorage
        } catch (q) {
            h = null
        }
        if (h) {
            if (S(qk)) var k = null;
            else try {
                k = h.getItem("google_ama_config")
            } catch (q) {
                k = null
            }
            try {
                var l = k ? ec(Oj, k) : null
            } catch (q) {
                l = null
            }
            k = l
        } else k = null;
        a: {
            if (d) try {
                var m = ec(Oj, d);
                break a
            } catch (q) {
                pv(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            m = null
        }
        if (d = m) {
            S(Ak) ? e && sv(a, e, d) : sv(a, null, d);
            e = su(a, G(d, Sj, 7));
            a: {
                if (e && (m = y(e, 3), k = C(d, gj, 9), m && k)) {
                    b: {
                        k = G(k, ej, 1);
                        for (n of k)
                            if (y(n, 1) == m) {
                                var n = C(n, dj, 2) || null;
                                break b
                            }
                        n = null
                    }
                    if (n) break a
                }
                n = C(d, dj, 8) || new dj
            }
            n = {
                be: n
            };
            e &&
                (n.R = e);
            e && qu(e, 3) && (n.Oa = [1]);
            if (7 == c.google_pgb_reactive && (e = n.R, !e || !B(e, 8))) return !1;
            if (vv(a, 2))
                if (si(5, [d.toJSON()]), e = qv(c), c = n.R, e.google_package = c && y(c, 4) || "", e = new kn(["google-auto-placed"], e), c = new Cq(a), e = void 0 === e ? null : e, m = new Im(a), f = void 0 === f ? null : f, g = {
                        url: a.location.href,
                        Wa: g
                    }, k = null, e = void 0 === e ? null : e, k = void 0 === k ? null : k, m = void 0 === m ? null : m, f = void 0 === f ? null : f, b)
                    if (d) {
                        l = [];
                        C(d, zj, 18) && l.push(2);
                        n.R && l.push(0);
                        h = Lj(d) && B(Lj(d), 22);
                        const q = C(d, Yi, 28) && 1 == Yb(C(d, Yi, 28), 1, 0);
                        (h || q) &&
                        l.push(1);
                        C(d, Si, 27) && 1 == Yb(C(d, Si, 27), 1, 0) && l.push(3);
                        try {
                            tu(new Hu(a, c, b, d, n, l, e, k, m, f, g))
                        } catch (r) {
                            ri() && si(15, [r]), Bq(c, qq, zq(Ts(Ss(xq(new Us(0), b), d), l).ha(1), r))
                        }
                    } else Bq(c, qq, xq(new Us(0), b).ha(8));
            else Bq(c, qq, (new Us(0)).ha(9));
            return !0
        }
        k && (pv(a, {
            cfg: 1,
            cl: 1
        }), rv(a));
        return !1
    };
    const xv = [255, 255, 255];

    function yv(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function zv(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = yv(b.backgroundColor);
        var c = Av(b);
        if (c) return c;
        a = (a = a.parentElement) ? zv(a) : xv;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function Av(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var Bv = class {
        constructor(a, b, c, d = !1) {
            this.B = a;
            this.j = b;
            this.A = c;
            this.l = d
        }
    };
    var Cv = function(a, ...b) {
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return new vd(c.join(""))
    }
    `https://support.google.com/adsense/answer/11188578`;
    const Dv = /[\s!'",:;\\(\\)\\?\\.]/,
        Ev = "\u00bf\u00a1\u037e\u061f\u3002\uff0c\u00b7\u2019".split(""),
        Fv = ["ja", "zh_CN", "zh_TW"];
    class Gv {
        constructor() {
            this.l = null;
            this.j = Infinity
        }
    }

    function Hv(a, b, c, d, e, f) {
        var g;
        for (let D = 0; D < b.childNodes.length; D++) {
            var h = b.childNodes[D];
            if (h.nodeType === Node.TEXT_NODE && "" !== h.textContent) {
                a: {
                    var k = a;
                    var l = c,
                        m = h.textContent,
                        n = e,
                        q = f;
                    const A = l.j,
                        E = [];
                    let F = 0;
                    for (;;) {
                        var r = m.length;
                        let H = null;
                        var x = "";
                        for (const K of G(A, Iv, 2))
                            for (const ha of G(K, Jv, 2)) {
                                const qa = I(ha, 1);
                                for (var w = F; w < m.length;) {
                                    w = m.indexOf(qa, w);
                                    if (-1 === w) break;
                                    if (w > r || w === r && null !== H && qa.length < H.length) break;
                                    if (!Kv(m.charAt(w - 1)) || !Kv(m.charAt(w + qa.length))) break;
                                    if (n.j + Lv(m.substr(F,
                                            w - F)) >= Yb(A, 5, 0)) {
                                        r = w;
                                        H = qa;
                                        x = I(K, 1);
                                        break
                                    }
                                    w += 1
                                }
                            }
                        if (null === H) {
                            if (0 === F) {
                                n.j += Lv(m);
                                k = null;
                                break a
                            }
                            F < m.length && (l = m.substr(F), E.push(k.document.createTextNode(l)), n.j += Lv(l));
                            k = E;
                            break a
                        }
                        r > F && E.push(k.document.createTextNode(m.substr(F, r - F)));
                        E.push(Mv(k, l, x, H));
                        n.j = 0;
                        F = r + H.length;
                        r = q;
                        r.j++;
                        r.l.add(x)
                    }
                }
                if (k) {
                    if (!Zb(c.j, 9)) {
                        for (const A of k) b.insertBefore(A, h), Nv(A);
                        b.removeChild(h);
                        D += k.length - 1
                    }
                    if (null !== (g = e.l) && void 0 !== g) g;
                    else {
                        a: {
                            for (k = b; k;) {
                                b: switch (k.tagName) {
                                    case "DIV":
                                    case "DL":
                                    case "P":
                                    case "UL":
                                    case "OL":
                                    case "TABLE":
                                        h = !0;
                                        break b;
                                    default:
                                        h = !1
                                }
                                if (h) {
                                    h = k;
                                    break a
                                }
                                k = k.parentElement
                            }
                            h = a.document.body.childNodes[0]
                        }
                        e.l = h
                    }
                }
            }
            else {
                a: if (k = h, k.nodeType !== Node.ELEMENT_NODE || k.classList.contains("google-adfil-skip")) k = !1;
                    else switch (k.tagName) {
                        case "A":
                        case "IFRAME":
                        case "BUTTON":
                        case "CANVAS":
                        case "CODE":
                        case "EMBED":
                        case "FOOTER":
                        case "H1":
                        case "H2":
                        case "H3":
                        case "H4":
                        case "H5":
                        case "H6":
                        case "OBJECT":
                        case "PRE":
                        case "SAMP":
                        case "SCRIPT":
                        case "SELECT":
                        case "SUB":
                        case "SUPER":
                        case "SVG":
                        case "TEXTAREA":
                        case "VIDEO":
                            k = !1;
                            break a;
                        default:
                            k = !0
                    }
                k && Hv(a, h, c, d, e, f)
            }
        }
    }

    function Nv(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                {
                    var b = Av(yv(getComputedStyle(a.parentElement).color)),
                        c = Av(yv(getComputedStyle(a).color));
                    const e = zv(a);
                    if (b && c && e) {
                        var d = nv(b, e);
                        d = nv(c, e) < (4.5 > d ? d : 7 > d ? 4.5 : 7) ? b : null
                    } else d = b
                }
                if (c = d) {
                    d = c[0];
                    b = c[1];
                    c = c[2];
                    d = Number(d);
                    b = Number(b);
                    c = Number(c);
                    if (d != (d & 255) || b != (b & 255) || c != (c & 255)) throw Error('"(' + d + "," + b + "," + c + '") is not a valid RGB color');
                    b = d << 16 | b << 8 | c;
                    d = 16 > d ? "#" + (16777216 | b).toString(16).substr(1) : "#" + b.toString(16);
                    X(a, "color",
                        d)
                }
            }
            for (d = 0; d < a.childElementCount; d++) Nv(a.children[d])
        }
    }

    function Kv(a) {
        return "" === a || !!a.match(Dv) || Xa(Ev, a)
    }

    function Mv(a, b, c, d) {
        const e = b.j,
            f = a.document.createElement("A");
        f.className = "google-adfil";
        f.appendChild(a.document.createTextNode(d));
        Ud(f, Jd(Id) || wd);
        Ov(f);
        const g = a.performance.now();
        f.addEventListener("click", h => {
            var k = a.performance.now();
            k = {
                wp: b.B,
                c: b.A,
                e: T(nk),
                m: d,
                q: c,
                v: Math.round(k - g)
            };
            P("adfil-clk", k, 1);
            k = `goog-${Math.random()}`;
            var l = a.document,
                m = l.createElement("DIV");
            m.className = "google-adfil-overlay";
            X(m, "position", "fixed");
            X(m, "background-color", "rgba(0,0,0,.92)");
            X(m, "width", "80%");
            X(m, "height", "90%");
            X(m, "top", "5%");
            X(m, "left", "10%");
            X(m, "z-index", "2147483647");
            X(m, "border", "3px outset");
            const n = l.createElement("INPUT");
            n.type = "TEXT";
            n.value = c;
            X(n, "margin", "0");
            X(n, "padding", "8pt");
            X(n, "background-color", "#eee");
            m.appendChild(n);
            l = l.createElement("DIV");
            l.setAttribute("id", k);
            m.appendChild(l);
            a.document.body.appendChild(m);
            m = {
                pubId: "vert-pla-adfiliates-srp",
                styleId: "1138882718",
                query: c,
                hl: I(e, 7),
                personalizedAds: "false",
                fexp: T(nk)
            };
            b.l && (m.adtest = "on");
            k = {
                container: k,
                number: 4,
                width: Math.round(.8 * a.document.body.offsetWidth - 6)
            };
            (a._googCsa = a._googCsa || Pv(a))("plas", m, k);
            h.preventDefault();
            return !1
        });
        return f
    }

    function Pv(a) {
        return (b, c, d) => {
            const e = a._googCsa;
            (e.q = e.q || []).push([b, c, d]);
            e.t = Number(new Date)
        }
    }

    function X(a, b, c) {
        a.style.setProperty(b, c, "important")
    }

    function Ov(a) {
        X(a, "text-decoration", "underline");
        X(a, "text-decoration-style", "dotted");
        X(a, "-webkit-text-decoration-line", "underline");
        X(a, "-webkit-text-decoration-style", "dotted");
        X(a, "border", "0");
        X(a, "outline", "0")
    }

    function Lv(a) {
        a = a.trim();
        return "" === a ? 0 : a.split(/\s+/).length
    };
    var Qv = class {
        constructor() {
            this.j = 0;
            this.l = new Set;
            this.A = 0
        }
    };
    var Sv = class extends v {
            constructor(a) {
                super(a, -1, Rv)
            }
        },
        Jv = class extends v {
            constructor(a) {
                super(a)
            }
        },
        Iv = class extends v {
            constructor(a) {
                super(a, -1, Tv)
            }
        },
        Rv = [2],
        Tv = [2];

    function Uv(a, b, c, d) {
        const e = Vv(a) || Wv(c);
        e && bi(898, () => {
            a: {
                var f;
                if (!b.hasOwnProperty("adfcb")) {
                    var g = vf() ? null : Math.floor(20 * wf(a));
                    b.adfcb = g
                }
                g = b.adfcb;
                if (null != g) {
                    var h = new Bv(d, e, g, "on" === b.google_adtest);
                    try {
                        if (!a.document.body) break a
                    } catch (n) {
                        break a
                    }
                    if (a.performance) {
                        var k = a.document.body;
                        if (null !== (f = k.classList) && void 0 !== f && f.contains && !k.hasAttribute("data-google-affiliate-annotated")) {
                            k.setAttribute("data-google-affiliate-annotated", "1");
                            k = a.performance.now();
                            f = new Qv;
                            var l = Lv(a.document.body.innerText);
                            f.A = l;
                            if (l >= Yb(e, 4, 0)) {
                                l = h.j;
                                var m = new Gv;
                                Hv(a, a.document.body, h, Xa(Fv, I(l, 7)) ? 1 : 0, m, f);
                                if (m.l) {
                                    h = h.j;
                                    const n = a.document.createElement("A");
                                    n.appendChild(a.document.createTextNode(I(h, 6)));
                                    Ud(n, Cv);
                                    n.setAttribute("target", "_blank");
                                    Ov(n);
                                    X(n, "padding", "0 8px");
                                    const q = a.document.createElement("P");
                                    q.className = "google-adfil-skip";
                                    q.appendChild(a.document.createTextNode(I(h, 3)));
                                    q.appendChild(n);
                                    X(q, "border", "0 solid #bdc1c6");
                                    X(q, "border-width", "1px 0");
                                    X(q, "margin", "6pt 0");
                                    X(q, "padding", "21px");
                                    X(q, "text-align", "center");
                                    X(q, "width", "auto");
                                    h = q;
                                    Zb(l, 9) || (l = m.l, l.parentNode && l.parentNode.insertBefore(h, l), Nv(h))
                                }
                            }
                            k = a.performance.now() - k;
                            !Zb(e, 9) && 0 < f.j && (l = a.document, m = l.createElement("SCRIPT"), m.setAttribute("async", "async"), Yd(m, J `https://www.google.com/adsense/search/ads.js`), l.body.appendChild(m));
                            g = {
                                wp: d,
                                c: g,
                                e: T(nk),
                                n: f.j,
                                p: G(e, Iv, 2).length,
                                t: f.l.size,
                                w: f.A,
                                x: Math.round(k)
                            };
                            P("adfil-imp", g, 1)
                        }
                    }
                }
            }
        }, f => {
            f.e = `${T(nk)}`
        })
    }

    function Vv(a) {
        var b, c;
        try {
            const d = null === (c = null === (b = a.location) || void 0 === b ? void 0 : b.hash) || void 0 === c ? void 0 : c.match(/\bgoog_cpmi=([^&]*)/);
            if (!d) return null;
            const e = decodeURIComponent(d[1]);
            return new Sv(JSON.parse(e))
        } catch (d) {
            return null
        }
    }

    function Wv(a) {
        return T(pk) ? C(a, Sv, 11) : null
    };
    var Xv = class extends v {
        constructor(a) {
            super(a)
        }
    };
    var Yv = class {
        constructor(a) {
            this.M = a.M;
            this.pubWin = a.pubWin;
            this.F = a.F;
            this.T = a.T;
            this.Z = a.Z;
            this.Ea = a.Ea;
            this.W = a.W;
            this.X = a.X;
            this.B = -1;
            this.j = 0;
            this.A = this.G = null;
            this.H = this.C = 0;
            this.l = [];
            this.Na = this.D = ""
        }
    };
    var Zv = (a, b, c) => {
        a.j |= 2;
        return b[c % b.length]
    };
    var $v = (a, b) => {
        var c = Zh,
            d;
        var e;
        d = (e = (e = lg()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new hg(d.left, d.top, d.width, d.height) : null) ? new Le(e.left, e.top) : (d = mg()) && da(d.rootBounds) ? new Le(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new Le(0, 0),
                g = Ze(We(b));
            if (eb(g, "parent")) {
                do {
                    if (g == a) var h = wg(b);
                    else {
                        var k = vg(b);
                        h = new Le(k.left, k.top)
                    }
                    d = h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (l) {
            return c.ta(888, l), new Le(-12245933, -12245933)
        }
    };
    var aw = {
            pf: "google_ads_preview",
            Vf: "google_mc_lab",
            kg: "google_anchor_debug",
            jg: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Fg: "google_scr_debug",
            Hg: "google_ia_debug_allow_onclick",
            $g: "googleads",
            Xc: "google_pedestal_debug",
            th: "google_responsive_slot_preview",
            sh: "google_responsive_dummy_ad"
        },
        bw = {
            ["google_bottom_anchor_debug"]: 1,
            ["google_anchor_debug"]: 2,
            ["google_ia_debug"]: 8,
            ["google_scr_debug"]: 9,
            ["googleads"]: 2,
            ["google_pedestal_debug"]: 30
        };
    var dw = (a, b) => {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = cw(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        cw = a => {
            let b = "";
            Dg(a.split("_"), c => {
                b += c.substr(0, 2)
            });
            return b
        },
        ew = () => {
            var a = t.location;
            let b = !1;
            Dg(aw, c => {
                dw(a, c) && (b = !0)
            });
            return b
        },
        fw = (a, b) => {
            switch (a) {
                case 1:
                    return dw(b, "google_ia_debug");
                case 2:
                    return dw(b, "google_bottom_anchor_debug");
                case 3:
                    return dw(b, "google_anchor_debug") || dw(b, "googleads");
                case 4:
                    return dw(b, "google_scr_debug")
            }
            return !1
        };

    function gw(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var hw = class {
            constructor() {
                this.j = null;
                this.l = {
                    [Hh]: {},
                    [Ih]: {},
                    [Jh]: {}
                };
                const a = b => this.j ? zf(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[Ih] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        iw;
    let jw = void 0;

    function kw() {
        Dh(jw, Ch);
        return jw
    };

    function lw(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : pc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function mw(a) {
        S(fk) && P("abg_adsensesettings_lserr", {
            s: a,
            g: S(gk),
            c: kw(),
            r: .01
        }, .01)
    };
    var nw = (a = t) => a.ggeac || (a.ggeac = {});
    class ow {
        constructor() {
            this.j = () => {}
        }
    };
    var qw = a => {
            var b = 1;
            a = void 0 === a ? nw() : a;
            b = void 0 === b ? 0 : b;
            Xh(a, b);
            pw(a, b);
            Kh(ow).j = Uh(Th, a);
            Kh(zl).A()
        },
        pw = (a, b) => {
            const c = Kh(zl);
            c.B = (d, e) => Uh(Ph, a, () => !1)(d, e, b);
            c.C = (d, e) => Uh(Qh, a, () => 0)(d, e, b);
            c.j = (d, e) => Uh(Rh, a, () => "")(d, e, b);
            c.l = (d, e) => {
                Uh(Sh, a, () => [])(d, e, b)
            };
            c.A = () => {
                Uh(Mh, a)(b)
            }
        };
    var rw = a => {
        const b = Kh(Wh).l();
        a = uv(a);
        return b.concat(a).join(",")
    };

    function sw(a, b) {
        return b ? b ? Wu("__gads", b, a.j) : null : null
    }

    function tw(a, b, c, d) {
        if (d) {
            var e = {
                Dc: c.H() - Date.now() / 1E3,
                path: c.I(),
                domain: c.G(),
                pe: !1
            };
            a = a.j;
            B(d, 5) && Vu(a) && (new Tu(a.document)).set(b, c.l(), e)
        }
    }
    var uw = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };
    var vw = (a, b) => {
            const c = new XMLHttpRequest;
            try {
                c.open("GET", a)
            } catch (d) {
                throw Error("Error opening XHR: " + d);
            }
            return new Promise(d => {
                const e = () => {
                    c.readyState != XMLHttpRequest.DONE || 300 <= c.status || d(b(c.responseText))
                };
                c.onreadystatechange = e;
                c.onload = e;
                c.onerror = () => {
                    throw Error("XHR error: " + a);
                };
                c.send()
            })
        },
        ww = a => vw(a, b => b.includes('"_cookies_":') ? JSON.parse(b) : b);

    function xw(a, b, c) {
        return O(629, d => {
            if ("string" === typeof d) {
                if ("[]" === d) return Promise.resolve();
                var e = ec(ye, d)
            } else {
                delete a._gfp_s_;
                if (!d) throw Error("Invalid JSONP response");
                d = d._cookies_;
                if (!d) return Promise.resolve();
                var f = d[0];
                if (!f) throw Error("Invalid JSONP response");
                const k = f._expires_;
                var g = f._path_;
                d = f._domain_;
                if ("string" !== typeof d) throw Error("Invalid JSONP response");
                const l = f._value_;
                if (l) {
                    if ("string" !== typeof l || "number" !== typeof k || "string" !== typeof g) throw Error("Invalid JSONP response");
                    e = new ye;
                    e = z(e, 1, l);
                    e = z(e, 2, k);
                    e = z(e, 3, g);
                    e = z(e, 4, d)
                }
                if (S(Tk) && "1" !== (b ? Wu("__gpi_opt_out", b, c.j) : null) && (f = f._gpid_)) {
                    if ("string" !== typeof f || "number" !== typeof k || "string" !== typeof g) throw Error("Invalid JSONP response");
                    var h = new ze;
                    h = z(h, 1, f);
                    h = z(h, 2, k);
                    h = z(h, 3, g);
                    h = z(h, 4, d)
                }
            }
            e && (d = e, b && (tw(c, "__gads", d, b), B(b, 5) && .01 > c.j.Math.random() && (g = sw(c, b), cg({
                domain: d.G(),
                host: c.j.location.host,
                success: g === d.l() ? "1" : "0"
            }))));
            S(Tk) && h && tw(c, "__gpi", h, b);
            return Promise.resolve()
        })
    }

    function yw(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (sw(a, b)) var e = !0;
            else if (e = a.j, B(b, 5) && Vu(e) && (new Tu(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === Wu("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                B(b, 5) && Vu(f) && (new Tu(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = xw(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function zw(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = sw(b, a);
        e && (d.cookie = e);
        S(Tk) && ((e = a ? Wu("__gpi", a, b.j) : null) && !e.includes("&") && (d.gpi_cookie = e), d.gpid_exp = "1");
        const f = Dc(Gc(lc(mc("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = yw(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            rf(c.document, f)
        }) : Promise.resolve()
    }
    var Aw = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        var d = new uw(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : S(jk) ? (c = `${"https://partner.googleadservices.com/gampad/cookie.js"}?domain=${b.location.hostname}&client=${c}`, (e = sw(d, a) || "") && (c += `&cookie=${e}`), (b = yw(d, a, b)) ? ww(c).then(b) : Promise.resolve()) :
                zw(a, d, b, c)
        } else Promise.resolve();
        a = sw(d, a) || "";
        iw || (iw = new hw);
        d = iw;
        gw(d, a);
        a = d.l;
        Kh(ow).j(a);
        Kh(Wh).j(20);
        Kh(Wh).j(17)
    };
    var Bw = (a, b) => {
        let c = 0;
        try {
            c |= a != a.top ? 512 : 0;
            const f = Math.min(a.screen.width || 0, a.screen.height || 0);
            c |= f ? 320 > f ? 8192 : 0 : 2048;
            var d;
            if (d = a.navigator) {
                var e = a.navigator.userAgent;
                d = /Firefox/.test(e) || /Android 2/.test(e) || /iPhone OS [34]_/.test(e) || /Windows Phone (?:OS )?[67]/.test(e) || /MSIE.*Windows NT/.test(e) || /Windows NT.*Trident/.test(e)
            }
            c |= d ? 1048576 : 0
        } catch (f) {
            c |= 32
        }
        return a = 0 | c | qr(a, b, Yh, a.innerWidth > Dl ? 650 : 0, S(Gk))
    };
    var Cw = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= El(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var Dw = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= El(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var Ew = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        Fw = (a, b, c) => {
            let d = 0;
            try {
                d |= El(a, 2500);
                if (S(cl)) {
                    const g = V(a).clientHeight;
                    d |= g ? 320 > g ? -2147483648 : 0 : 1073741824
                }
                d |= Fl(a);
                var e;
                if (e = 0 < b) {
                    var f = Rl(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };
    const Gw = {
        [27]: 512,
        [26]: 128
    };
    var Hw = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === Bw(a, c);
                case 3:
                case 4:
                    return !1;
                case 8:
                    return b = "on" === b.google_adtest || dw(a.location, "google_ia_debug") ? -1 : 3600, 0 == (Ew(a) | Fw(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || dw(a.location, "google_scr_debug")), !Sl(a, b, d);
                case 30:
                    return 0 == bm(a);
                case 26:
                    return 0 == Dw(a);
                case 27:
                    return 0 === Cw(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        Iw = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return Bw(a, c);
                case 3:
                case 4:
                    return 32;
                case 8:
                    return b = "on" === b.google_adtest || dw(a.location, "google_ia_debug") ? -1 : 3600, Ew(a) | Fw(a, b, d);
                case 9:
                    return Sl(a, !("on" === b.google_adtest || dw(a.location, "google_scr_debug")), d);
                case 16:
                    return Bn(b, a) ? 0 : 8388608;
                case 30:
                    return bm(a);
                case 26:
                    return Dw(a);
                case 27:
                    return Cw(a);
                default:
                    return 32
            }
        },
        Jw = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!qc(d)) return !1;
            a = Vg(a);
            if (!a || !Hw(a, b, d, c)) return !1;
            b = Al(a);
            if (Jl(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        Lw = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && Kw(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        Mw = a => {
            if (!a.hash) return null;
            let b = null;
            Dg(aw, c => {
                !b && dw(a, c) && (b = bw[c])
            });
            return b
        },
        Ow = (a, b) => {
            const c = Al(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Dg(ys, d => {
                !c.debugCardRequested && "number" === typeof d && fw(d, a.location) && (c.debugCardRequested = !0, Nw(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        Qw = (a, b, c) => {
            if (!b) return null;
            const d = Al(b);
            let e = 0;
            Dg(rc, f => {
                const g = Gw[f];
                g && 0 === Pw(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed &&
                (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        Rw = (a, b, c) => {
            const d = [];
            Dg(rc, e => {
                const f = Pw(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        Sw = a => {
            const b = [],
                c = {};
            Dg(a, (d, e) => {
                if ((e = Zj[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        Tw = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        Pw = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = Al(b),
                g = Jl(f, c);
            if (a.google_reactive_ad_format == c ||
                g) e |= 64;
            let h = !1;
            Dg(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === l && (h = !0)
            });
            h && Mw(b.location) !== c && (e |= 128);
            return e | Iw(b, a, c, d)
        },
        Uw = (a, b) => {
            if (a) {
                var c = Al(a),
                    d = {};
                Dg(b, (e, f) => {
                    (f = Zj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Dg(rc, e => {
                    d[ak[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        Vw = (a, b, c) => {
            b = O(b, c);
            return lq(1, N(), Dc(Td(a), Kh(zl).j(lk.j, lk.defaultValue) ? {
                bust: Kh(zl).j(lk.j, lk.defaultValue)
            } : {})).then(b)
        },
        Nw = (a, b, c) => {
            c = O(212, c);
            lq(3, a, Td(b)).then(c)
        };
    const Ww = a => {
        a.adsbygoogle || (a.adsbygoogle = [], rf(a.document, Td(J `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)))
    };
    var Xw = (a, b) => {
            L(a, "load", () => {
                Ww(a);
                a.adsbygoogle.push(b)
            })
        },
        Yw = a => {
            a = a.google_reactive_ad_format;
            return qc(a) ? "" + a : null
        },
        Kw = a => !!Yw(a) || null != a.google_pgb_reactive,
        Zw = a => {
            a = Yw(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    var $w = a => "number" === typeof a.google_reactive_sra_index,
        ex = (a, b, c) => {
            const d = b.M || b.pubWin,
                e = b.F;
            e.google_reactive_plat = Rw(d, e, c);
            var f = Sw(a);
            f && (e.google_reactive_plaf = f);
            (f = Tw(a)) && (e.google_reactive_fba = f);
            ax(a, e);
            f = Mw(b.pubWin.location);
            bx(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            ng() || Ul(b.pubWin.top);
            f = O(429, (h, k) => cx(b, d, e.google_ad_client, a, h, k, c));
            const g = O(430, ma(Ol, b.pubWin, 431, Yh));
            gi(b.pubWin, "rsrai", f, g);
            Al(d).wasReactiveTagRequestSent = !0;
            dx(b, a, c)
        };
    const dx = (a, b, c) => {
        const d = a.F,
            e = da(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = O(353, (g, h) => {
            var k = a.pubWin,
                l = d.google_ad_client,
                m = Td(a.Z.Wa);
            return Rf(h.origin) ? wv(k, l, e, g.config, c, null, m) : !1
        });
        const f = O(353, ma(Ol, a.pubWin, 353, Yh));
        gi(a.pubWin, "apcnf", b, f)
    };
    var cx = (a, b, c, d, e, f, g) => {
            if (!Rf(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!vv(b, 1)) return !0;
            f && si(6, [f]);
            e = e.amaConfig;
            const h = [],
                k = [],
                l = Al(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const q = f[n],
                    r = q.adFormat;
                l && q.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
                if (!q.noCreative) {
                    q.google_reactive_sra_index = n;
                    if (9 === r && e) {
                        q.pubVars = Object.assign(q.pubVars || {}, fx(d, q));
                        const x = new Tl;
                        if (bk(x, q)) {
                            m = x;
                            continue
                        }
                    }
                    h.push(q);
                    k.push(r)
                }
            }
            h.length && (P("rasra::pm", {
                rt: k.join(","),
                c
            }, .1), Vw(a.Z.Lc, 522, n => {
                gx(h, b, c, n, d, g)
            }));
            e && wv(b, c, d, e, g, m);
            return !0
        },
        fx = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            da(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        gx = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const k = a[h],
                    l = k.adFormat,
                    m = k.adKey,
                    n = d.configProcessorForAdFormat(l);
                l && n && m ? (k.pubVars = fx(e, k), delete k.google_reactive_sra_index, g.push(l), bi(466, () => n.verifyAndProcessConfig(b, k, f))) : P("rasra::ivc", {
                    af: l,
                    ak: m,
                    c
                }, .1)
            }
            P("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        ax = (a, b) => {
            const c = [];
            let d = !1;
            Dg(Zj, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    da(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = Zj[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        bx = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    db("script");
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
    var hx = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function ix(a, b) {
        if (!Bn(b, a)) return () => {};
        a = jx(b, a);
        if (!a) return () => {};
        const c = Su();
        b = tc(b);
        const d = {
            dc: a,
            F: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Ya(c, d)
    }

    function jx(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Rg.test(a.className);) a = a.parentElement;
        return a
    }

    function kx(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = Ff(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function lx(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function mx(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 0 : 90;
        if (a.j != c) {
            a.j = c;
            a = Su();
            for (const d of a)
                if (d.dc.offsetWidth != d.offsetWidth || d.F.google_full_width_responsive_allowed) d.offsetWidth = d.dc.offsetWidth, bi(467, () => {
                    var e = d.dc,
                        f = d.F;
                    const g = kx(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    N().google_spfd(e, f, b);
                    const h = kx(e, f);
                    !h && g && 1 == e.childNodes.length ? (lx(g, !1), S(Qk) ? f.rss = 1 : (f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize"), e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", Ww(b), b.adsbygoogle.push({
                        element: e,
                        params: f
                    })) : h && g ? h != g && (lx(g, !1), lx(h, !0)) : P("auto_size_refresh", {
                        context: "showOrHideElm",
                        url: b.location.href,
                        nodes: e.childNodes.length
                    })
                })
        }
    }
    class nx {
        constructor() {
            this.j = null
        }
        init(a) {
            const b = Lu();
            W(b, 27, !1) || (b.S[Ou(27)] = !0, this.j = a.innerHeight >= a.innerWidth ? 0 : 90, L(a, "resize", () => mx(this, a)))
        }
    };
    var ox = class {
        constructor(a, b, c) {
            this.B = a;
            this.A = b;
            this.j = c;
            this.l = null;
            this.C = this.D = 0
        }
        G() {
            10 <= ++this.D && t.clearInterval(this.l);
            var a = En(this.B, this.A);
            a = Fn(this.B, this.A, a);
            const b = An(this.A, this.B);
            null != b && 0 === b.x || t.clearInterval(this.l);
            a && (this.C++, P("rspv:al", {
                aligns: this.C,
                attempt: this.D,
                client: this.j.google_ad_client,
                eoffs: null != b ? b.x : null,
                eids: rw(this.j),
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, .01))
        }
    };
    var qx = a => {
            const b = {};
            b.dtd = px((new Date).getTime(), cm);
            return Hg(b, a)
        },
        px = (a, b, c = 1E5) => {
            a -= b;
            return a >= c ? "M" : 0 <= a ? a : "-M"
        };
    var sx = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => rx(e));
        return gi(a, "adpnt", (f, g) => {
            var h;
            if (Kl(g, c.contentWindow)) {
                f = Nl(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    var k;
                    null !== (h = a.googletag) && void 0 !== h ? h : a.googletag = {};
                    const l = null !== (k = a.googletag.queryIds) && void 0 !== k ? k : [];
                    l.push(f);
                    500 < l.length && l.shift();
                    a.googletag.queryIds = l
                } catch (l) {}
                e.dataset.adStatus && P("adsense_late_fill", {
                    status: e.dataset.adStatus
                });
                e.dataset.adStatus = "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function rx(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function tx(a, b, c) {
        try {
            if (!Rf(c.origin)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.bb[d]) && zh(a.la, 168, () => {
            e.call(a, b, c)
        })
    }
    class ux extends hs {
        constructor(a) {
            var b = Zh,
                c = Yh;
            super();
            this.j = a;
            this.la = b;
            this.Zc = c;
            this.bb = {};
            this.Uc = Ah(this.la, 168, (d, e) => void tx(this, d, e));
            this.td = Ah(this.la, 169, (d, e) => Ol(this.j, "ras::xsf", this.Zc, d, e));
            this.ma = [];
            this.P(this.bb);
            this.ma.push(fi(this.j, "sth", this.Uc, this.td))
        }
        B() {
            for (const a of this.ma) a();
            this.ma.length = 0;
            super.B()
        }
    };
    class vx extends ux {
        constructor(a) {
            super(a);
            this.j = a
        }
    };
    var wx = class extends vx {
        constructor(a, b) {
            super(a);
            this.l = b;
            this.A = () => {};
            L(this.l, "load", this.A)
        }
        B() {
            this.l && je(this.l, "load", this.A);
            super.B();
            this.l = null
        }
        P(a) {
            a["adsense-labs"] = b => {
                if (b = Nl(b).settings) try {
                    var c = new xe(JSON.parse(b));
                    if (Vb(c, 1)) {
                        var d = this.j,
                            e = y(c, 1) || "";
                        if (S(gk) ? null != av({
                                ka: d,
                                ub: kw()
                            }).j : 1) {
                            if (S(gk)) {
                                var f = av({
                                    ka: d,
                                    ub: kw()
                                });
                                if (null != f.j) {
                                    mw("ok");
                                    var g = lw(f.j.value)
                                } else mw(f.l.message), g = {}
                            } else g = lw(d.localStorage);
                            null !== c && (g[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings",
                                    JSON.stringify(g))
                            } catch (h) {}
                        }
                    }
                } catch (h) {}
            }
        }
    };

    function xx(a) {
        a.A = a.D;
        a.H.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.G.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        yx(a)
    }

    function zx(a, b) {
        (a.l.contentWindow || a.l.contentWindow).postMessage(JSON.stringify({
            ["msg_type"]: "expand-on-scroll-result",
            ["eos_success"]: !0,
            ["eos_amount"]: b,
            googMsgType: "sth"
        }), "*")
    }

    function yx(a) {
        const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
        a.l.style.clip = b;
        a.G.style.clip = b;
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.G.setAttribute("height", a.A);
        a.G.style.height = a.A + "px";
        a.C.style.height = a.A + "px";
        a.H.style.height = a.A + "px"
    }

    function Ax(a, b) {
        b = Df(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.J = wg(a.H).y;
        a.I = Ll(a.j);
        if (a.J + a.A < a.I) return "2";
        if (a.J > Gl(a.j) - a.j.innerHeight) return "3";
        b = a.I;
        a.l.setAttribute("height", a.D);
        a.l.style.height = a.D + "px";
        a.G.style.overflow = "hidden";
        a.H.style.position = "relative";
        a.H.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.G.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.J, a.A);
        qg(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
        qg(a.l, {
            clip: b
        });
        qg(a.G, {
            clip: b
        });
        return "0"
    }

    function Bx(a, b = {}) {
        a.ba && (b.eid = a.ba);
        b.qid = a.qa;
        P("eoscrl", b, dm(String(a.Za)))
    }
    class Cx extends vx {
        constructor(a, b) {
            super(a.M);
            this.l = b;
            this.G = a.X.firstElementChild;
            this.C = a.X;
            this.H = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.A = parseInt(this.C.style.height, 10);
            this.ba = null;
            this.cb = this.$a = !1;
            this.qa = "";
            this.ga = this.I = this.D = 0;
            this.ad = this.A / 5;
            this.J = wg(this.H).y;
            this.Za = null;
            this.$c = fe(O(651, () => {
                this.J = wg(this.H).y;
                var c = this.I;
                this.I = Ll(this.j);
                this.A < this.D ? (c = this.I - c, 0 < c && (this.ga += c, this.ga >= this.ad ? (xx(this),
                    zx(this, this.D)) : (this.A = Math.min(this.D, this.A + c), zx(this, c), yx(this)))) : je(this.j, "scroll", this.K)
            }), this);
            this.K = () => {
                var c = this.$c;
                Ce.requestAnimationFrame ? Ce.requestAnimationFrame(c) : c()
            }
        }
        P(a) {
            a["expand-on-scroll"] = (b, c) => {
                Xg(c, this.l) && (b = Nl(b), this.ba = b.i_expid, this.qa = b.qid, this.Za = b.gen204_fraction, this.$a || (this.$a = !0, b = Ax(this, b), "0" === b && L(this.j, "scroll", this.K, ge), c.source.postMessage(JSON.stringify({
                        ["msg_type"]: "expand-on-scroll-result",
                        ["eos_success"]: "0" === b,
                        googMsgType: "sth"
                    }),
                    "*"), Bx(this, {
                    err: b
                })))
            };
            a["expand-on-scroll-force-expand"] = (b, c) => {
                Xg(c, this.l) && !this.cb && (this.cb = !0, xx(this), je(this.j, "scroll", this.K))
            }
        }
        B() {
            this.K && je(this.j, "scroll", this.K, ge);
            super.B()
        }
    };

    function Dx(a) {
        const b = a.I.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    class Ex extends hs {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.C = b;
            this.I = c;
            this.D = 0;
            this.A = Dx(this);
            this.H = ee(this.G, this);
            this.j = O(433, () => {
                var d = this.H;
                Ce.requestAnimationFrame ? Ce.requestAnimationFrame(d) : d()
            });
            L(this.l, "scroll", this.j, ge)
        }
        G() {
            const a = Dx(this);
            if (a && !this.A) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && (hi(c, "ig", b, "*", 2), 10 <= ++this.D && this.j && je(this.l, "scroll", this.j, ge))
            }
            this.A = a
        }
    };
    class Fx extends vx {
        constructor(a, b) {
            a.M && super(a.M);
            this.l = b;
            this.C = a.X;
            this.A = a.W
        }
        P(a) {
            a.interscroller = (b, c) => {
                if (Xg(c, this.l) && (c = Nl(b), b = c.i_h, c = c.i_f, null != b && "" !== b && null != c && "" !== c)) {
                    this.C.style.position = "relative";
                    M(this.A, {
                        position: "absolute",
                        clip: "rect(0, auto, auto, 0)"
                    });
                    var d = this.A.firstElementChild;
                    d && d.id == this.l.id && M(d, {
                        position: "fixed"
                    });
                    d = Df(ug(this.A, "zIndex").toString(), 0) + 1;
                    b = Wf(this.l.id + "_header", b);
                    M(b, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("afterbegin", b);
                    b = Wf(this.l.id + "_footer", c);
                    M(b, {
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("beforeend", b)
                }
            }
        }
    };
    const Gx = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };

    function Hx(a, b) {
        if (!a.qa) return "1";
        b = Df(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "2";
        a.C = wg(a.A).y;
        b = a.j.innerHeight;
        if (a.C + a.ba < b) return "4";
        if (a.C > Gl(a.j) - b) return "3";
        a.A.setAttribute("height", a.D);
        a.A.style.height = a.D + "px";
        qg(a.l, Gx);
        a.l.style.height = a.D + "px";
        a.K.style.position = "relative";
        a.ga();
        return "0"
    }

    function Ix(a, b = {}) {
        a.G && (b.eid = a.G);
        b.qid = a.H;
        P("pscrl", b, dm(String(a.I)))
    }
    class Jx extends vx {
        constructor(a, b) {
            a.M && super(a.M);
            this.A = b;
            this.l = a.X;
            this.K = this.l.parentElement;
            this.ba = parseInt(this.l.style.height, 10);
            this.G = null;
            this.J = !1;
            this.H = "";
            this.D = 0;
            this.C = wg(this.A).y;
            this.I = null;
            this.qa = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame;
            this.ga = O(636, () => {
                this.qa.call(this.j, this.ga);
                var c = this.j.innerHeight,
                    d = Ll(this.j);
                this.C = wg(this.K).y;
                d + c > this.C ? (d = d + c - this.C, c = Math.min(d,
                    this.ba), d = this.D - d, d = Math.max(0, d), 0 >= d ? qg(this.l, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : qg(this.l, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }), qg(this.l, {
                    clip: "rect(" + d + "px, " + this.A.width + "px, " + (d + c) + "px, 0px)"
                })) : qg(this.l, {
                    clip: "rect(3000px, " + this.A.width + "px, 0px, 0px)"
                })
            })
        }
        P(a) {
            a["parallax-scroll"] = (b, c) => {
                b = Nl(b);
                this.G = b.i_expid;
                this.H = b.qid;
                this.I = b.gen204_fraction;
                !this.J && Xg(c, this.A) && (this.J = !0, b = Hx(this, b), c.source.postMessage(JSON.stringify({
                    ["msg_type"]: "parallax-scroll-result",
                    ["ps_success"]: "0" === b,
                    googMsgType: "sth"
                }), "*"), Ix(this, {
                    err: b
                }))
            }
        }
    };

    function Kx(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Xe(a.j.L() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = Lx(a, b, c, a.j.j.elementsFromPoint(Ie(c.left + c.width / 2, c.left, c.right - 1), Ie(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = Lx(a, b, c, a.j.j.elementsFromPoint(Ie(c.left + c.width / 2, c.left, c.right - 1), Ie(c.top + 2, c.top, c.bottom - 1)), 2, e.ra),
            g = Lx(a, b, c, a.j.j.elementsFromPoint(Ie(c.left + 2, c.left, c.right - 1), Ie(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ra, ...f.ra]);
        const h = Lx(a, b, c, a.j.j.elementsFromPoint(Ie(c.right - 1 - 2, c.left, c.right - 1), Ie(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ra, ...f.ra, ...g.ra]);
        var k = Mx(a, b, c),
            l = n => Xa(a.A, n.overlapType) && Xa(a.B, n.overlapDepth) && Xa(a.l, n.overlapDetectionPoint);
        e = Ta([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Ta(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = Ye(a.j.j);
        const m = new hg(c.left, c.top, c.width, c.height);
        e = [...Ua(e, n => new hg(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...bb(Ua(l, n => jg(m, n.elementRect))), ...Ta(jg(m, new hg(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? Nx(m, e) : Ox(c, e)
        }
    }

    function Px(a, b) {
        const c = a.j.L(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new vh,
                                        m = uh(l, () => Kx(a, k));
                                    m && (l.events.length && (m.executionTime = Math.round(Number(l.events[0].duration))), h.disconnect(), e(m))
                                }, Qx);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function Lx(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            ra: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const q = d[n];
            if (q === b) continue;
            if (Xa(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(Rx(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(Rx(a, c, q, r, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = q;
                const D = k.j.Hd(l, m);
                if (!D) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: A,
                    za: E
                } = Sx(k, l, D, m) || {},
                {
                    suspectAncestor: F,
                    za: H
                } = Sx(k, m, D, l) || {};k = A && E && F && H ? E <= H ? {
                    suspectAncestor: A,
                    overlapType: Tx[E]
                } : {
                    suspectAncestor: F,
                    overlapType: Ux[H]
                } : A && E ? {
                    suspectAncestor: A,
                    overlapType: Tx[E]
                } : F && H ? {
                    suspectAncestor: F,
                    overlapType: Ux[H]
                } : null
            }
            const {
                suspectAncestor: x,
                overlapType: w
            } = k || {};
            x && w ? g.push(Rx(a, c, q, r, w, e, x)) : g.push(Rx(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            ra: h
        }
    }

    function Mx(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = tf(b, a.j.L());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(Rx(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(Rx(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(Rx(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function Nx(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = ig(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Ox(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Rx(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Xa(a.A, e) && Xa(a.l, f)) {
            b = new eg(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = Vx(a, c)) && gg(b, a)) c = 4;
            else {
                a = Wx(c, d);
                if (ib) {
                    e = Ag(c, "paddingLeft");
                    f = Ag(c, "paddingRight");
                    var k = Ag(c, "paddingTop"),
                        l = Ag(c, "paddingBottom");
                    e = new eg(k, f, l, e)
                } else e = tg(c, "paddingLeft"), f = tg(c, "paddingRight"), k = tg(c, "paddingTop"), l = tg(c, "paddingBottom"), e = new eg(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                gg(b, new eg(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = Wx(c, d), c = gg(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function Sx(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.L();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = tf(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    za: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    za: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    za: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = Xx(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        za: 4
                    }
                }
            }
        }
        return (a = Xx(a, e, b)) ? {
                suspectAncestor: a,
                za: 5
            } :
            null
    }

    function Xx(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = tf(f, a.j.L());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function Vx(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new eg(a.top, a.right, a.bottom, a.left)
    }

    function Wx(a, b) {
        if (!ib || 9 <= Number(wb)) {
            var c = tg(a, "borderLeftWidth");
            d = tg(a, "borderRightWidth");
            e = tg(a, "borderTopWidth");
            a = tg(a, "borderBottomWidth");
            c = new eg(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Cg(a, "borderLeft");
            var d = Cg(a, "borderRight"),
                e = Cg(a, "borderTop");
            a = Cg(a, "borderBottom");
            c = new eg(e, d, a, c)
        }
        return new eg(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class Yx {
        constructor(a, b = Zx) {
            this.j = Ue(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const Tx = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        Ux = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Ta(yf({
        ag: 1,
        bg: 2,
        Hh: 3,
        Ih: 4,
        Kh: 5,
        Xf: 6,
        Yf: 7,
        $f: 8,
        Yg: 9,
        Jh: 10,
        Zf: 11,
        Gh: 12,
        Wf: 13
    }), a => !Xa([1, 2], a));
    yf({
        qf: 1,
        Zg: 2,
        Bf: 3,
        Lh: 4
    });
    const Zx = yf({
            rf: 1,
            Oh: 2,
            Mg: 3,
            xh: 4
        }),
        Qx = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function $x(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.cc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        qg(a, "transition", b.join(","))
    }
    var ay = ce(function() {
        if (ib) return tb("10.0");
        var a = af(document, "DIV"),
            b = mb ? "-webkit" : lb ? "-moz" : ib ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        c = {
            style: c
        };
        ld("div");
        var d = void 0,
            e = null;
        b = "<div" + rd(c);
        null == d ? d = [] : Array.isArray(d) || (d = [d]);
        !0 === wc.div ? b += ">" : (e = qd(d), b += ">" + hd(e).toString() + "</div>", e = e.Ba());
        (c = c && c.dir) && (/^(ltr|rtl|auto)$/i.test(c) ? e = 0 : e = null);
        b = kd(b, e);
        Ee(a, b);
        a = a.firstChild;
        b = a.style[Se("transition")];
        return "" != ("undefined" !== typeof b ?
            b : a.style[rg(a, "transition")] || "")
    });

    function by(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function cy(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function dy(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function ey(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(fy, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function gy(a) {
        var b = ey(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var hy = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function iy(a) {
        let b = a.ba;
        a.J = function() {};
        jy(a, a.I, b);
        let c = a.I.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : tf(c, b)
            } catch (g) {
                dy(a.j, "c")
            }
            const f = ky(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.Y = !0);
            if (d && !f && ly(e)) {
                cy(a.j, "l");
                a.K = c;
                break
            }
            d = d && f;
            if (e && my(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.bb) break;
                try {
                    if (c = b.frameElement, b = b.parent, ! of (b)) {
                        cy(a.j, "c");
                        break
                    }
                } catch (g) {
                    cy(a.j,
                        "c");
                    break
                }
            }
        }
        a.H && a.B && ny(a);
        return a.j
    }

    function oy(a) {
        function b() {
            py(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let n = 0; n < m.length; n++) qg(h, m[n], "0px")
                };
                l(qy);
                l(ry)
            }
        }
        const c = a.I;
        c.style.overflow = a.$a ? "visible" : "hidden";
        a.H && (a.K ? ($x(c, sy), $x(a.K, sy)) : $x(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.U && (c.style.opacity = a.U);
        const d = null != a.G && null != a.A && (a.ma || a.A > a.G) ? a.A : null,
            e = null != a.D && null != a.l && (a.ma || a.l > a.D) ? a.l : null;
        if (a.P) {
            const l = a.P.length;
            for (let m = 0; m < l; m++) py(a.P[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.K,
            k = a.Y;
        a.H ? t.setTimeout(b, 1E3) : b()
    }

    function ty(a) {
        if (a.B && !a.qa || null == a.A && null == a.l && null == a.U && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        iy(a);
        a.B = b;
        if (!b || null != a.la && !ey(a.j, a.la, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.G = null, a.D = null);
        if (null == a.G && null !== a.A || null == a.D && null !== a.l) a.H = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        oy(a);
        return iy(a)
    }

    function my(a, b) {
        let c = !1;
        "none" == b.display && (cy(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || cy(a.j, "v");
        "hidden" == b.overflow && cy(a.j, "o");
        "absolute" == b.position ? (cy(a.j, "a"), c = !0) : "fixed" == b.position && (cy(a.j, "f"), c = !0);
        return c
    }

    function jy(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = uy(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && by(a.j, 0, "o"), d & 4 && by(a.j, 1, "o"));
        return !(d & 1)
    }

    function ky(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (D) {
            dy(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = Df(f),
            h = c.getAttribute("height"),
            k = Df(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const m = jy(a, c, b);
        var n = d && d.width,
            q = d && d.height,
            r = e && e.width,
            x = e && e.height,
            w = Ff(n) == a.G && Ff(q) == a.D;
        n = w ? n : r;
        x = w ? q : x;
        r = Ff(n);
        w = Ff(x);
        g = null !== a.G && (null !== r && a.G >= r || null !== g && a.G >= g);
        w = null !== a.D && (null !== w && a.D >= w || null !== k && a.D >= k);
        k = !m && ly(d);
        w = m || w || k || !(f || n || d && (!vy(String(d.minWidth)) || !wy(String(d.maxWidth))));
        l = m || g || k || l || !(h || x || d && (!vy(String(d.minHeight)) || !wy(String(d.maxHeight))));
        xy(a, 0, w, c, "width", f, a.G, a.A);
        yy(a, 0, "d", w, e, d, "width", n, a.G, a.A);
        yy(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.G, a.A);
        yy(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.G, a.A);
        if (a.cb) {
            c = /^html|body$/i.test(c.nodeName);
            q = Ff(q);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && q && Math.round(q) !== a.l) && !(f = !h) && (f = q, f = (S(Fk) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.B && !c && f) c = !(a.Za && d && (S(Dk) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round(Ff(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"), d && !vy(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !wy(String(d.maxHeight)) && a.l && Math.round(q) < a.l && e.setProperty("max-height", "none", "important"))
        } else xy(a, 1, l, c, "height", h, a.D, a.l), yy(a, 1, "d", l, e, d, "height", x, a.D, a.l), yy(a, 1, "m", l, e, d, "minHeight", e && e.minHeight,
            a.D, a.l), yy(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.D, a.l);
        return m
    }

    function ny(a) {
        function b() {
            if (0 < c) {
                var l = tf(e, d) || {};
                const m = Ff(l.width);
                l = Ff(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.ba,
            e = a.I,
            f = a.A,
            g = a.l,
            h = a.J;
        let k;
        t.setTimeout(function() {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function uy(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = tf(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function xy(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Df(f);
                null == f && (dy(a.j, "n"), by(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.H) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else by(a.j, b, "d")
        }
    }

    function yy(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? vy(f) : wy(f)) || (f = Ff(f), null == f ? cy(a.j, "p") : null != k && cy(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? vy(h) : wy(h)) return;
                h = Ff(h);
                null == h && (dy(a.j, "p"), by(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.H) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.J;
                            a.J = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                n && n(q, r)
                            }
                        } else e[g] = l + "px"
                } else by(a.j, b, c)
        }
    }
    var Dy = class {
        constructor(a, b, c, d, e, f, g) {
            this.bb = a;
            this.P = c;
            this.I = b;
            this.ba = (a = this.I.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new zy(this.I);
            this.B = g;
            this.qa = Ay(this.C, d.kc, d.height, d.Qc);
            this.G = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = By(d.width);
            this.l = By(d.height);
            this.U = this.B ? By(d.opacity) : null;
            this.la =
                d.check;
            this.H = "animate" == d.kc && !Cy(this.C, this.l, this.ga) && ay();
            this.$a = !!d.mc;
            this.j = new hy;
            Cy(this.C, this.l, this.ga) && cy(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && cy(this.j, "b");
            this.K = this.J = null;
            this.Y = !1;
            this.ma = !!d.le;
            this.cb = !!d.Oc;
            this.ga = !!d.Qc;
            this.Za = d.eb
        }
    };

    function Cy(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, By(a.sa())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var zy = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow),
                d;
            if (d = c) d = of (c.top) ? c.top : null;
            c = d;
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement :
                c.document.body).clientHeight;
            b = b && wi(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        sa() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function Ay(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return Cy(a, c, d)
        }
    }

    function ly(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function Ey(a, b, c, d) {
        return ty(new Dy(a, b, d, c, null, null, !0))
    }
    var Fy = new hy("s", ""),
        fy = RegExp("[lonvafrbpEe]", "g");

    function wy(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function vy(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function py(a, b, c) {
        null !== b && null !== Df(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Df(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var qy = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        ry = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let Gy = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        Hy = qy;
    for (let a = 0; a < Hy.length; a++) Gy += ", " + Hy[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    Hy = ry;
    for (let a = 0; a < Hy.length; a++) Gy += ", " + Hy[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var sy = Gy;

    function By(a) {
        return "string" === typeof a ? Df(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function Iy(a, b, c, d, e, f, g, h, k, l) {
        const m = N();
        if (!a.l || !m) return l.err = "2", Jy(a, l, null), !1;
        if ("no_rsz" === f) return l.err = "7", Jy(a, l, null), !0;
        const n = new zy(a.l);
        if (!n.j) return l.err = "3", Jy(a, l, null), !1;
        var q = n.boundingClientRect ? n.boundingClientRect.right - n.boundingClientRect.left : null;
        null != q && (l.w = q);
        q = n.sa();
        null != q && (l.h = q);
        if (Ay(n, f, d, k)) {
            var r = a.l.ownerDocument.getElementById(a.l.id + "_anchor");
            q = r ? [a.l] : null;
            r = r || a.l;
            const x = S(Ok);
            b = Ey(m, r, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                kc: f,
                mc: g,
                le: h,
                Oc: x,
                Qc: k
            }, q);
            l.r_cui && Ef(l.r_cui.toString()) && M(r, {
                height: (null === d ? 0 : d - 48) + "px",
                top: "24px"
            });
            null != c && (l.nw = c);
            null != d && (l.nh = d);
            l.rsz = b.toString();
            l.abl = gy(b);
            l.frsz = ("force" === f).toString();
            l.err = "0";
            Jy(a, l, n);
            Wa(Kh(Wh).l(), w => Xa([248427477, 248427478], w)) && a.j === m && Px(new Yx(a.j, void 0), r).then(w => {
                si(8, [w]);
                return w
            }).then(w => {
                P("resize-ovlp", {
                        adf: a.A,
                        eid: a.G,
                        io: Number(w.isOverlappingOrOutsideViewport),
                        oa: w.overlappedArea.toFixed(2),
                        qid: l.qid || "",
                        slot: a.H,
                        url: a.I,
                        vp: w.viewportSize.width + "x" + w.viewportSize.height
                    },
                    1)
            }).catch(w => {
                P("resize-ovlp-err", {
                    err: w.message
                }, 1)
            });
            return !0
        }
        l.err = "1";
        Jy(a, l, n);
        return !1
    }

    function Ky(a, b, c) {
        const d = {
            scrl: Ll(a.j || N()),
            adk: a.D,
            adf: a.A,
            fmt: a.C
        };
        b && (d.str = Cy(b, Df(c.r_nh), Ef(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        Dg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function Jy(a, b, c) {
        const d = dm(String(b.gen204_fraction));
        b = Ky(a, c, b);
        b.url = a.j.document.URL;
        P("resize", b, d)
    }
    class Ly extends vx {
        constructor(a, b, c) {
            super(a);
            this.l = b;
            this.D = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.C = String(c.google_ad_format || "");
            this.G = rw(c);
            this.H = String(c.google_ad_slot || "");
            this.I = String(c.google_page_url || "")
        }
        P(a) {
            a["resize-me"] = (b, c) => {
                if (Kl(c, this.l.contentWindow)) {
                    b = Nl(b);
                    var d = b.r_chk;
                    if (null == d || "" === d) {
                        var e = Df(b.r_nw),
                            f = Df(b.r_nh),
                            g = Df(b.r_no);
                        null != g || 0 !== e && 0 !== f || (g = 0);
                        var h = b.r_str;
                        h = h ? h : null;
                        e = Iy(this, d, e, f, g, h, Ef(b.r_ao), Ef(b.r_ifr),
                            Ef(b.r_cab), b);
                        d = {
                            msg_type: "resize-result"
                        };
                        d.r_str = h;
                        d.r_status = e;
                        c = c.source;
                        d.googMsgType = "sth";
                        c.postMessage(JSON.stringify(d), "*");
                        this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid)
                    }
                }
            }
        }
        B() {
            super.B();
            this.l = null
        }
    };
    const My = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const Ny = /^blogger$/,
        Oy = /^wordpress(.|\s|$)/i,
        Py = /^joomla!/i,
        Qy = /^drupal/i,
        Ry = /\/wp-content\//,
        Sy = /\/wp-content\/plugins\/advanced-ads/,
        Ty = /\/wp-content\/themes\/genesis/,
        Uy = /\/wp-content\/plugins\/genesis/;
    var Vy = a => {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (Sy.test(e)) return 5;
                if (Uy.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"), Ty.test(e) || Uy.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (Ny.test(f)) return 1;
                if (Oy.test(f)) return 2;
                if (Py.test(f)) return 3;
                if (Qy.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), Ry.test(d))) return 2;
        return 0
    };
    let Wy = navigator;
    var Xy = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Yy = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Xy(a.toLowerCase())
        };
    const Zy = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        $y = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        az = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var bz = {
        ["google_ad_block"]: "ad_block",
        ["google_ad_client"]: "client",
        ["google_ad_output"]: "output",
        ["google_ad_callback"]: "callback",
        ["google_ad_height"]: "h",
        ["google_ad_resize"]: "twa",
        ["google_ad_slot"]: "slotname",
        ["google_ad_unit_key"]: "adk",
        ["google_ad_dom_fingerprint"]: "adf",
        ["google_placement_id"]: "pi",
        ["google_ad_width"]: "w",
        ["google_captcha_token"]: "captok",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_ctr_threshold"]: "ctr_t",
        ["google_cust_criteria"]: "cust_params",
        ["gfwrnwer"]: "fwrn",
        ["gfwrnher"]: "fwrnh",
        ["google_image_size"]: "image_size",
        ["google_last_modified_time"]: "lmt",
        ["google_loeid"]: "loeid",
        ["google_max_num_ads"]: "num_ads",
        ["google_max_radlink_len"]: "max_radlink_len",
        ["google_mtl"]: "mtl",
        ["google_native_settings_key"]: "nsk",
        ["google_enable_content_recommendations"]: "ecr",
        ["google_num_radlinks"]: "num_radlinks",
        ["google_num_radlinks_per_unit"]: "num_radlinks_per_unit",
        ["google_pucrd"]: "pucrd",
        ["google_reactive_plaf"]: "plaf",
        ["google_reactive_plat"]: "plat",
        ["google_reactive_fba"]: "fba",
        ["google_reactive_sra_channels"]: "plach",
        ["google_responsive_auto_format"]: "rafmt",
        ["armr"]: "armr",
        ["google_rl_dest_url"]: "rl_dest_url",
        ["google_rl_filtering"]: "rl_filtering",
        ["google_rl_mode"]: "rl_mode",
        ["google_rt"]: "rt",
        ["google_video_play_muted"]: "vpmute",
        ["google_source_type"]: "src_type",
        ["google_restrict_data_processing"]: "rdp",
        ["google_tag_for_child_directed_treatment"]: "tfcd",
        ["google_tag_for_under_age_of_consent"]: "tfua",
        ["google_tag_origin"]: "to",
        ["google_ad_semantic_area"]: "sem",
        ["google_tfs"]: "tfs",
        ["google_package"]: "pwprc",
        ["google_tag_partner"]: "tp",
        ["fra"]: "fpla",
        ["google_ml_rank"]: "mlr",
        ["google_apsail"]: "psa",
        ["google_ad_channel"]: "channel",
        ["google_ad_type"]: "ad_type",
        ["google_ad_format"]: "format",
        ["google_color_bg"]: "color_bg",
        ["google_color_border"]: "color_border",
        ["google_color_link"]: "color_link",
        ["google_color_text"]: "color_text",
        ["google_color_url"]: "color_url",
        ["google_page_url"]: "url",
        ["google_allow_expandable_ads"]: "ea",
        ["google_ad_section"]: "region",
        ["google_cpm"]: "cpm",
        ["google_encoding"]: "oe",
        ["google_safe"]: "adsafe",
        ["google_flash_version"]: "flash",
        ["google_font_face"]: "f",
        ["google_font_size"]: "fs",
        ["google_hints"]: "hints",
        ["google_ad_host"]: "host",
        ["google_ad_host_channel"]: "h_ch",
        ["google_ad_host_tier_id"]: "ht_id",
        ["google_kw_type"]: "kw_type",
        ["google_kw"]: "kw",
        ["google_contents"]: "contents",
        ["google_targeting"]: "targeting",
        ["google_adtest"]: "adtest",
        ["google_alternate_color"]: "alt_color",
        ["google_alternate_ad_url"]: "alternate_ad_url",
        ["google_cust_age"]: "cust_age",
        ["google_cust_ch"]: "cust_ch",
        ["google_cust_gender"]: "cust_gender",
        ["google_cust_interests"]: "cust_interests",
        ["google_cust_job"]: "cust_job",
        ["google_cust_l"]: "cust_l",
        ["google_cust_lh"]: "cust_lh",
        ["google_cust_u_url"]: "cust_u_url",
        ["google_cust_id"]: "cust_id",
        ["google_language"]: "hl",
        ["google_city"]: "gcs",
        ["google_country"]: "gl",
        ["google_region"]: "gr",
        ["google_content_recommendation_ad_positions"]: "ad_pos",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_content_recommendation_ui_type"]: "crui",
        ["google_content_recommendation_use_square_imgs"]: "cr_sq_img",
        ["google_color_line"]: "color_line",
        ["google_disable_video_autoplay"]: "disable_video_autoplay",
        ["google_full_width_responsive_allowed"]: "fwr",
        ["google_full_width_responsive"]: "fwrattr",
        ["efwr"]: "efwr",
        ["google_pgb_reactive"]: "pra",
        ["google_resizing_allowed"]: "rs",
        ["google_resizing_height"]: "rh",
        ["google_resizing_width"]: "rw",
        ["rpe"]: "rpe",
        ["google_responsive_formats"]: "resp_fmts",
        ["google_safe_for_responsive_override"]: "sfro",
        ["google_video_doc_id"]: "video_doc_id",
        ["google_video_product_type"]: "video_product_type",
        ["google_webgl_support"]: "wgl"
    };

    function cz(a) {
        -1 == a.l && (a.l = Va(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class dz {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    var ez = () => {
        const a = new dz;
        t.SVGElement && t.document.createElementNS && a.set(0);
        const b = Kf();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        t.TextDecoder && t.TextEncoder && a.set(4);
        return cz(a)
    };
    var fz = new Map([
        [".google.com", a => J `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => J `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => J `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => J `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => J `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => J `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => J `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => J `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => J `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => J `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => J `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => J `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => J `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => J `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => J `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => J `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => J `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => J `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => J `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => J `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => J `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => J `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => J `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => J `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => J `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => J `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => J `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => J `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => J `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => J `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => J `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => J `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => J `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => J `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => J `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => J `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => J `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => J `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => J `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => J `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => J `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => J `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => J `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => J `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => J `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => J `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => J `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => J `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => J `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => J `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => J `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => J `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => J `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => J `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => J `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => J `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => J `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => J `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => J `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => J `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => J `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => J `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => J `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => J `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => J `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => J `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => J `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => J `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => J `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => J `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => J `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => J `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => J `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => J `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => J `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => J `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => J `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => J `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => J `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => J `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => J `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => J `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => J `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => J `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => J `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => J `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => J `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => J `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => J `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => J `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => J `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => J `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => J `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => J `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => J `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => J `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => J `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => J `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => J `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => J `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => J `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => J `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => J `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => J `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => J `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => J `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => J `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => J `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => J `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => J `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => J `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => J `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => J `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => J `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => J `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => J `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => J `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => J `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => J `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => J `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => J `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => J `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => J `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => J `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => J `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => J `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => J `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => J `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => J `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => J `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => J `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => J `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => J `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => J `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => J `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => J `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => J `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => J `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.ru", a => J `https://adservice.google.ru/adsid/integrator.${a}`],
        [".google.rw", a => J `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => J `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => J `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => J `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => J `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => J `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => J `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => J `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => J `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => J `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => J `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => J `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => J `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => J `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => J `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => J `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => J `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => J `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => J `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => J `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => J `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => J `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => J `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => J `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => J `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => J `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => J `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => J `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => J `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => J `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => J `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => J `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => J `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => J `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => J `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => J `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => J `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => J `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => J `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => J `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => J `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => J `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => J `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => J `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a, b]) => [a, {
        ["json"]: b("json"),
        ["js"]: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function gz(a, b, c) {
        const d = sf("LINK", a);
        try {
            d.rel = "preload", d.href = b instanceof Cc ? Fc(b).toString() : b instanceof Mc ? Nc(b) : Nc(Tc(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    let hz = () => t,
        iz = t;
    const kz = a => {
        const b = new Map([
            ["domain", t.location.hostname]
        ]);
        jz[3] >= na() && b.set("adsid", jz[1]);
        return Pd(fz.get(a).js, b)
    };
    let jz, lz;
    const mz = () => {
        iz = hz();
        jz = iz.googleToken = iz.googleToken || {};
        const a = na();
        jz[1] && jz[3] > a && 0 < jz[2] || (jz[1] = "", jz[2] = -1, jz[3] = -1, jz[4] = "", jz[6] = "");
        lz = iz.googleIMState = iz.googleIMState || {};
        fz.has(lz[1]) || (lz[1] = ".google.com");
        Array.isArray(lz[5]) || (lz[5] = []);
        "boolean" !== typeof lz[6] && (lz[6] = !1);
        Array.isArray(lz[7]) || (lz[7] = []);
        "number" !== typeof lz[8] && (lz[8] = 0)
    };
    var nz = a => {
        mz();
        fz.has(a) && (lz[1] = a)
    };
    const oz = {
        Tb: () => 0 < lz[8],
        he: () => {
            lz[8]++
        },
        ie: () => {
            0 < lz[8] && lz[8]--
        },
        je: () => {
            lz[8] = 0
        },
        bi: () => !1,
        wc: () => lz[5],
        oc: a => {
            try {
                a()
            } catch (b) {
                t.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        Mc: () => {
            if (!oz.Tb()) {
                var a = t.document,
                    b = e => {
                        e = kz(e);
                        a: {
                            try {
                                var f = He();
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        gz(a, e.toString(), f);
                        f = sf("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => t.processGoogleToken({}, 2);
                        Yd(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), oz.he()
                        } catch (g) {}
                    },
                    c = lz[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    ["newToken"]: "FBT"
                };
                t.setTimeout(() => t.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function pz(a) {
        mz();
        const b = iz.googleToken[5] || 0;
        a && (0 != b || jz[3] >= na() ? oz.oc(a) : (oz.wc().push(a), oz.Mc()));
        jz[3] >= na() && jz[2] >= na() || oz.Mc()
    }
    var rz = a => {
        t.processGoogleToken = t.processGoogleToken || ((b, c) => qz(b, c));
        pz(a)
    };
    const qz = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        mz();
        1 == b ? oz.je() : oz.ie();
        var h = iz.googleToken = iz.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !oz.Tb() && (!(jz[3] >= na()) || "NT" == jz[1]);
        var l = !(jz[3] >= na()) && 0 != b;
        if (k || d || l) d = na(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && $f(t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, mz();
        if (k || !oz.Tb()) {
            b = oz.wc();
            for (c = 0; c < b.length; c++) oz.oc(b[c]);
            b.length = 0
        }
    };
    const sz = (a = window) => !a.PeriodicSyncManager;
    var tz = () => {
            var a = window;
            if (!sz(a) && S(ml) || sz(a) && S(nl)) {
                a = a.navigator.userAgent;
                const b = /Chrome/.test(a);
                return /Android/.test(a) && b
            }
            return !1
        },
        uz = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: () => tz(),
            shouldRequestToken: () => tz()
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s",
            shouldRedeemToken: () => !0,
            shouldRequestToken: () => !0
        };
    Kh(zl).l(sl.j, sl.defaultValue);

    function vz(a = window) {
        return a.goog_tt_state
    }

    function wz(a) {
        return S(vl) ? a.some(b => b.hasRedemptionRecord) : a.some(b => 6 === b.state)
    }

    function xz(a, b, c) {
        return S(rl) || b && (S(wl) || ".google.de" != c) || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function yz(a, b) {
        a = S(vl) ? a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin) : a.filter(c => 6 === c.state).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        b && 0 < Object.keys(b).length && (a.additionalSigningData = Ab(JSON.stringify(b)));
        return a
    }

    function zz(a) {
        return a.j.map(b => ({
            issuerOrigin: b.issuerOrigin,
            state: S(ql) && !a.l ? 12 : 1
        }))
    }

    function Z(a, b, c) {
        const d = window.goog_tt_state.find(e => e.issuerOrigin === a);
        d && (d.state = b, S(vl) && void 0 != c && (d.hasRedemptionRecord = c))
    }

    function Az() {
        const a = window.goog_tt_state;
        return Array.isArray(a) && a.some(b => 1 != b.state)
    }

    function Bz(a) {
        const b = `${a.issuerOrigin}${a.redemptionPath}`,
            c = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: a.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(a.issuerOrigin, 2);
        return window.fetch(b, c).then(d => {
            if (!d.ok) throw Error(`${d.status}: Network response was not ok!`);
            Z(a.issuerOrigin, 6, !0)
        }).catch(d => {
            d && "NoModificationAllowedError" === d.name ? Z(a.issuerOrigin, 6, !0) : Z(a.issuerOrigin, 5)
        })
    }

    function Cz(a, b) {
        const c = `${a.issuerOrigin}${a.issuancePath}`,
            d = {
                trustToken: {
                    type: "token-request"
                }
            };
        S(ul) && (d.keepalive = !0);
        Z(a.issuerOrigin, 8);
        return window.fetch(c, d).then(e => {
            if (!e.ok) throw Error(`${e.status}: Network response was not ok!`);
            Z(a.issuerOrigin, 10);
            if (b) return Bz(a)
        }).catch(e => {
            if (e && "NoModificationAllowedError" === e.name) {
                if (Z(a.issuerOrigin, 10), b) return Bz(a)
            } else Z(a.issuerOrigin, 9)
        })
    }

    function Dz() {
        Z(uz.issuerOrigin, 13);
        return document.hasTrustToken(uz.issuerOrigin).then(a => a ? Bz(uz) : Cz(uz, !0))
    }

    function Ez() {
        Z(Y.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(() => window.Promise.reject(19));
            const b = `${Y.issuerOrigin}${Y.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                Z(Y.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) Z(Y.issuerOrigin, 18, !0);
                else {
                    if (e) return window.Promise.reject(17);
                    Z(Y.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(() => window.Promise.reject(19))).then(e => {
                const f = `${Y.issuerOrigin}${Y.getStatePath}`;
                Z(Y.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(h => JSON.parse(h))
                }).catch(() => window.Promise.reject(21))
            });
            const d = Tf(window);
            return a.then(e => {
                const f = `${Y.issuerOrigin}${Y.issuancePath}`;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(() => window.Promise.reject(24))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(() => window.Promise.reject(27))
            }).then(() => {
                Z(Y.issuerOrigin, 29)
            }).catch(e => {
                if (19 == e || 17 == e || 21 == e || 24 == e || 27 == e) Z(Y.issuerOrigin, e);
                else throw e;
            })
        }
    }

    function Fz(a) {
        if (document.hasTrustToken && !S(ol) && (!S(ql) || a.l)) {
            if (Az()) return window.goog_tt_promise;
            var b = [];
            S(vl) ? tz() && b.push(Dz()) : a.j.forEach(c => {
                Z(c.issuerOrigin, 13);
                const d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken();
                if (d || e) {
                    var f = document.hasTrustToken(c.issuerOrigin).then(g => {
                        if (g) {
                            if (d) return Bz(c)
                        } else {
                            if (e) return Cz(c, d);
                            Z(c.issuerOrigin, 3)
                        }
                    });
                    b.push(f)
                } else Z(c.issuerOrigin, 7)
            });
            S(pl) && b.push(Ez());
            if (window.Promise && window.Promise.all) return a = window.Promise.all(b), "object" != typeof window.goog_tt_promise &&
                Object.defineProperty(window, "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }), a
        }
    }
    var Gz = class extends hs {
        constructor(a = !1) {
            super();
            this.l = a;
            this.j = [];
            S(vl) ? (tz() && this.j.push(uz), S(pl) && this.j.push(Y)) : this.j = [uz];
            if (document.hasTrustToken && !S(ol) && !Array.isArray(window.goog_tt_state)) {
                const b = zz(this);
                Object.defineProperty(window, "goog_tt_state", {
                    configurable: !1,
                    get() {
                        return b.slice()
                    }
                })
            }
        }
    };
    const Hz = /[+, ]/;
    var Kz = (a, b) => {
            const c = a.F;
            var d = N().document,
                e = {},
                f = N(),
                g;
            var h = Zf(N());
            var k = Ni(h);
            var l = g = Li(N(), d, c.google_ad_width, c.google_ad_height);
            k = k.yb;
            var m = N();
            m = m.top == m ? 0 : of (m.top) ? 1 : 2;
            let n = 4;
            l || 1 != m ? l || 2 != m ? l && 1 == m ? n = 7 : l && 2 == m && (n = 8) : n = 6 : n = 5;
            k && (n |= 16);
            l = "" + n;
            k = Oi();
            m = !!c.google_page_url;
            e.google_iframing = l;
            0 != k && (e.google_iframing_environment = k);
            if (!m && "ad.yieldmanager.com" == d.domain) {
                for (l = d.URL.substring(d.URL.lastIndexOf("http")); - 1 < l.indexOf("%");) try {
                    l = decodeURIComponent(l)
                } catch (r) {
                    break
                }
                c.google_page_url = l;
                m = !!l
            }
            m ? (e.google_page_url = c.google_page_url, e.google_page_location = (g ? d.referrer : d.URL) || "EMPTY") : (g && of (f.top) && d.referrer && f.top.document.referrer === d.referrer ? e.google_page_url = f.top.document.URL : e.google_page_url = g ? d.referrer : d.URL, e.google_page_location = null);
            if (d.URL === e.google_page_url) try {
                var q = Math.round(Date.parse(d.lastModified) / 1E3) || null
            } catch (r) {
                q = null
            } else q = null;
            e.google_last_modified_time = q;
            d = h == h.top ? h.document.referrer : (d = lg()) && d.referrer || "";
            e.google_referrer_url = d;
            Mi(e, c);
            e =
                c.google_page_location || c.google_page_url;
            "EMPTY" == e && (e = c.google_page_url);
            e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in My), 2 <= e.length && (d = d || e[e.length - 2] in My), e = d) : e = !1;
            e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
            b = Iz(a, b);
            d = a.F;
            f = d.google_ad_channel;
            q = "/pagead/ads?";
            "ca-pub-6219811747049371" ===
            d.google_ad_client && Jz.test(f) && (q = "/pagead/lopri?");
            a = Hg(b, `https://${e}${q}` + (Zb(a.T, 9) && c.google_debug_params ? c.google_debug_params : ""));
            return c.google_ad_url = a
        },
        Lz = a => encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + Gg({
            ["adk"]: a.google_ad_unit_key,
            ["client"]: a.google_ad_client,
            ["fa"]: a.google_reactive_ad_format
        }),
        Mz = a => {
            try {
                if (a.parentNode) return a.parentNode
            } catch (c) {
                return null
            }
            if (9 === a.nodeType) a: {
                try {
                    const c = Ze(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && of (c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b =
                null
            }
            else b = null;
            return b
        },
        Nz = (a, b) => {
            b.eid = rw(a.pubWin);
            const c = a.F.google_loeid;
            "string" === typeof c && (a.j |= 4096, b.loeid = c)
        },
        Oz = (a, b) => {
            a = (a = Vg(a.pubWin)) && a.document ? Wl(a.document, a) : new Le(-12245933, -12245933);
            b.scr_x = Math.round(a.x);
            b.scr_y = Math.round(a.y)
        };
    const Pz = a => {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    };
    var Qz = a => {
            const b = lh();
            b && (a.debug_experiment_id = b);
            a.creatives = Pz(/\b(?:creatives)=([\d,]+)/);
            a.adgroups = Pz(/\b(?:adgroups)=([\d,]+)/);
            a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
        },
        Rz = (a, b, c) => {
            const d = a.F;
            var e = a.pubWin,
                f = a.M,
                g = Zf(window);
            b.ref = d.google_referrer_url;
            b.loc = d.google_page_location;
            var h;
            (h = lg(e)) && da(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null :
                h) : h = null;
            h && (b.apn = h.substr(0, 10));
            g = 0 < T(mk) && a.Na ? {
                url: a.Na,
                yb: !0
            } : Ni(g);
            b.url || b.loc || !g.url || (b.url = g.url, g.yb || (b.usrc = 1));
            h = d.google_trust_token_additional_signing_data || {};
            h.url = b.url;
            d.google_trust_token_additional_signing_data = h;
            g.url != (b.loc || b.url) && (b.top = g.url);
            0 <= a.B && (b.eae = a.B);
            (c = Qw(d, f, f ? Uu(c, f) : null)) && (b.fc = c);
            if (!Ug(d)) {
                c = a.pubWin.document;
                g = "";
                if (c.documentMode && (h = jf(new Ve(c), "IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                    c.body.appendChild(h);
                    try {
                        const U = h.contentWindow.document;
                        U.open();
                        U.write(...[td].map(Qd));
                        U.close();
                        g += U.documentMode
                    } catch (U) {}
                    c.body.removeChild(h)
                }
                b.docm = g
            }
            let k, l, m, n, q, r, x, w, D;
            try {
                var A = e.screenX;
                k = e.screenY
            } catch (U) {}
            try {
                l = e.outerWidth, m = e.outerHeight
            } catch (U) {}
            try {
                n = e.innerWidth, q = e.innerHeight
            } catch (U) {}
            try {
                r = e.screenLeft, x = e.screenTop
            } catch (U) {}
            try {
                n = e.innerWidth, q = e.innerHeight
            } catch (U) {}
            try {
                w = e.screen.availWidth, D = e.screen.availTop
            } catch (U) {}
            b.brdim = [r, x, A, k, w, D, l, m, n, q].join();
            A = 0;
            void 0 === t.postMessage &&
                (A |= 1);
            0 < A && (b.osd = A);
            b.vis = wi(e.document);
            A = a.W;
            e = Kw(d) ? Fy : ty(new Dy(e, A, null, {
                width: 0,
                height: 0
            }, d.google_ad_width, d.google_ad_height, !1));
            b.rsz = e.toString();
            b.abl = gy(e);
            if (!Kw(d) && (e = Wg(d))) {
                A = 0;
                a: {
                    try {
                        {
                            var E = d.google_async_iframe_id;
                            const U = N().document;
                            if (E) var F = U.getElementById(E);
                            else {
                                var H = U.getElementsByTagName("script"),
                                    K = H[H.length - 1];
                                F = K && K.parentNode || null
                            }
                        }
                        if (E = F) {
                            F = [];
                            H = 0;
                            for (var ha = Date.now(); 100 >= ++H && 50 > Date.now() - ha && (E = Mz(E));) 1 === E.nodeType && F.push(E);
                            var qa = F;
                            b: {
                                for (ha = 0; ha <
                                    qa.length; ha++) {
                                    c: {
                                        var Q = qa[ha];
                                        try {
                                            if (Q.parentNode && 0 < Q.offsetWidth && 0 < Q.offsetHeight && Q.style && "none" !== Q.style.display && "hidden" !== Q.style.visibility && (!Q.style.opacity || 0 !== Number(Q.style.opacity))) {
                                                const U = Q.getBoundingClientRect();
                                                var Na = 0 < U.right && 0 < U.bottom;
                                                break c
                                            }
                                        } catch (U) {}
                                        Na = !1
                                    }
                                    if (!Na) {
                                        var Sb = !1;
                                        break b
                                    }
                                }
                                Sb = !0
                            }
                            if (Sb) {
                                b: {
                                    const U = Date.now();Sb = /^html|body$/i;Na = /^fixed/i;
                                    for (Q = 0; Q < qa.length && 50 > Date.now() - U; Q++) {
                                        const nf = qa[Q];
                                        if (!Sb.test(nf.tagName) && Na.test(nf.style.position || ug(nf, "position"))) {
                                            var Hd =
                                                nf;
                                            break b
                                        }
                                    }
                                    Hd = null
                                }
                                break a
                            }
                        }
                    } catch (U) {}
                    Hd = null
                }
                Hd && Hd.offsetWidth * Hd.offsetHeight <= 4 * e.width * e.height && (A = 1);
                b.pfx = A
            }
            a: {
                if (.05 > Math.random() && f) try {
                    const U = f.document.getElementsByTagName("head")[0];
                    var Ro = U ? Vy(U) : 0;
                    break a
                } catch (U) {}
                Ro = 0
            }
            f = Ro;
            0 !== f && (b.cms = f);
            d.google_lrv !== I(a.T, 2) && (b.alvm = d.google_lrv || "none")
        },
        Sz = (a, b) => {
            let c = 0;
            a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : pf(() => {
                c++;
                return !1
            }, !0, !0, a);
            c && (b.nhd = c)
        },
        Tz = (a, b) => {
            const c = W(b, 8, {});
            b = W(b, 9, {});
            const d =
                a.google_ad_section,
                e = a.google_ad_format;
            a = a.google_ad_slot;
            e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
        },
        Uz = (a, b, c) => {
            const d = a.F;
            var e = a.F;
            b.dt = cm;
            e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
            e = N();
            a: {
                var f = N();
                try {
                    var g = f.performance;
                    if (g && g.timing && g.now) {
                        var h = g.timing.navigationStart + Math.round(g.now()) - g.timing.domLoading;
                        break a
                    }
                } catch (K) {}
                h = null
            }(e = h ? px(h, e.Date.now() - cm, 1E6) : null) && (b.bdt = e);
            b.idt = px(a.H, cm);
            e = a.F;
            b.shv = I(a.T, 2);
            a.Ea && (b.mjsv = a.Ea);
            "sa" == e.google_loader_used ?
                b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
            /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
            if (e = lg(a.pubWin)) {
                b.is_amp = 1;
                h = e || lg();
                b.amp_v = h && h.mode ? +h.mode.version || null : null;
                if ((e = e || lg()) && e.container) {
                    e = e.container.split(",");
                    h = [];
                    for (g = 0; g < e.length; g++) h.push(kg[e[g]] || "x");
                    e = h.join()
                } else e = null;
                e && (b.act = e)
            }
            N() == window.top && (b.abxe = 1);
            if ("_gfp_a_" in a.pubWin) {
                e = a.pubWin._gfp_a_;
                if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
                e && (e = new uw(a.pubWin),
                    (h = sw(e, c)) && (b.cookie = h), S(Tk) && (h = c ? Wu("__gpi", c, e.j) : null) && !h.includes("&") && (b.gpic = h), S(Uk) && "1" === (c ? Wu("__gpi_opt_out", c, e.j) : null) && (b.gpico = "1"))
            }
            e = Lu();
            g = W(e, 8, {});
            h = d.google_ad_section;
            g[h] && (b.prev_fmts = g[h]);
            g = W(e, 9, {});
            g[h] && (b.prev_slotnames = g[h].toLowerCase());
            Tz(d, e);
            h = W(e, 15, 0);
            0 < h && (b.nras = String(h));
            b.correlator = W(e, 7, Ku());
            S(Vk) && (b.rume = 1);
            if (d.google_ad_channel) {
                h = W(e, 10, {});
                g = "";
                f = d.google_ad_channel.split(Hz);
                for (var k = 0; k < f.length; k++) {
                    var l = f[k];
                    h[l] ? g += l + "+" : h[l] = !0
                }
                b.pv_ch =
                    g
            }
            if (d.google_ad_host_channel) {
                g = W(e, 11, []);
                f = d.google_ad_host_channel.split("|");
                e = -1;
                h = [];
                for (k = 0; k < f.length; k++) {
                    l = f[k].split(Hz);
                    g[k] || (g[k] = {});
                    var m = "";
                    for (var n = 0; n < l.length; n++) {
                        var q = l[n];
                        "" !== q && (g[k][q] ? m += "+" + q : g[k][q] = !0)
                    }
                    m = m.slice(1);
                    h[k] = m;
                    "" !== m && (e = k)
                }
                g = "";
                if (-1 < e) {
                    for (f = 0; f < e; f++) g += h[f] + "|";
                    g += h[e]
                }
                b.pv_h_ch = g
            }
            b.frm = d.google_iframing;
            b.ife = d.google_iframing_environment;
            e = d.google_ad_client;
            try {
                var r = Zf(window),
                    x = r.google_prev_clients;
                x || (x = r.google_prev_clients = {});
                if (e in x) var w =
                    1;
                else x[e] = !0, w = 2
            } catch (K) {
                w = 0
            }
            b.pv = w;
            x = a.pubWin.document;
            w = a.F;
            e = a.pubWin;
            r = x.domain;
            e = (B(c, 5) && Vu(e) ? e.document.cookie : null) || "";
            f = a.pubWin.screen;
            k = x.referrer;
            m = Jg();
            if (lg()) var D = N().gaGlobal || {};
            else {
                h = Math.round((new Date).getTime() / 1E3);
                g = w.google_analytics_domain_name;
                c = "undefined" == typeof g ? Yy("auto", r) : Yy(g, r);
                n = -1 < e.indexOf("__utma=" + c + ".");
                l = -1 < e.indexOf("__utmb=" + c);
                (r = (og() || N()).gaGlobal) || (r = {}, (og() || N()).gaGlobal = r);
                x = !1;
                if (n) {
                    var A = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                    l ? r.sid = A[3] : r.sid || (r.sid = h + "");
                    r.vid = A[0] + "." + A[1];
                    r.from_cookie = !0
                } else {
                    r.sid || (r.sid = h + "");
                    if (!r.vid) {
                        x = !0;
                        l = Math.round(2147483647 * Math.random());
                        n = Wy.appName;
                        q = Wy.version;
                        var E = Wy.language ? Wy.language : Wy.browserLanguage,
                            F = Wy.platform,
                            H = Wy.userAgent;
                        try {
                            A = Wy.javaEnabled()
                        } catch (K) {
                            A = !1
                        }
                        A = [n, q, E, F, H, A ? 1 : 0].join("");
                        f ? A += f.width + "x" + f.height + f.colorDepth : t.java && t.java.awt && (f = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), A += f.screen.width + "x" + f.screen.height);
                        A = A + e + (k || "");
                        for (f = A.length; 0 <
                            m;) A += m-- ^ f++;
                        r.vid = (l ^ Xy(A) & 2147483647) + "." + h
                    }
                    S(dl) && r.from_cookie || (r.from_cookie = !1)
                }
                if (!r.cid) {
                    b: for (h = g, A = 999, h && (h = 0 == h.indexOf(".") ? h.substr(1) : h, A = h.split(".").length), h = 999, e = e.split(";"), g = 0; g < e.length; g++)
                        if (f = Zy.exec(e[g]) || $y.exec(e[g]) || az.exec(e[g])) {
                            k = f[1] || 0;
                            if (k == A) {
                                D = f[2];
                                break b
                            }
                            k < h && (h = k, D = f[2])
                        }x && D && -1 != D.search(/^\d+\.\d+$/) ? (r.vid = D, r.from_cookie = !0) : D != r.vid && (r.cid = D)
                }
                r.dh = c;
                r.hid || (r.hid = Math.round(2147483647 * Math.random()));
                D = r
            }
            b.ga_vid = D.vid;
            b.ga_sid = D.sid;
            b.ga_hid = D.hid;
            b.ga_fc = D.from_cookie;
            b.ga_cid = D.cid;
            b.ga_wpids = w.google_analytics_uacct;
            Sz(a.pubWin, b);
            (a = d.google_ad_layout) && 0 <= hx[a] && (b.rplot = hx[a])
        };
    const Vz = (a, b) => {
        a = a.A;
        var c;
        (c = null == a ? 0 : B(a, 6)) || (c = Lu(), c = W(c, 26, void 0));
        c && (b.npa = 1);
        a && (Vb(a, 3) && (b.gdpr = B(a, 3) ? "1" : "0"), (c = y(a, 1)) && (b.us_privacy = c), (c = y(a, 2)) && (b.gdpr_consent = c), (c = y(a, 4)) && (b.addtl_consent = c), (a = y(a, 7)) && (b.tcfe = a))
    };
    var Wz = (a, b) => {
            const c = a.F;
            Vz(a, b);
            Dg(bz, (d, e) => {
                b[d] = c[e]
            });
            Kw(c) && (a = Yw(c), b.fa = a);
            b.pi || null == c.google_ad_slot || (a = Oo(c), null != a.j && (a = en(a.j.value), b.pi = a))
        },
        Xz = (a, b) => {
            var c = ng() || Ul(a.pubWin.top);
            c && (b.biw = c.width, b.bih = c.height);
            c = a.pubWin;
            c.top != c && (a = Ul(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
        },
        Yz = (a, b) => {
            var c = a.pubWin;
            null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Ul(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = zf(a.join(""))) : a = 0;
            0 !== a && (b.ifk = a)
        },
        Zz = (a, b) => {
            (a = Ru()[a.F.google_ad_client]) && (b.psts = a.join())
        },
        $z = (a, b, c) => {
            a: {
                c = Uu(c, a.pubWin);
                let d = -1;
                try {
                    c && (d = parseInt(c.getItem("goog_pem_mod"), 10))
                } catch (e) {
                    c = null;
                    break a
                }
                c = 0 <= d && 1E3 > d ? d : null
            }
            b.pem = c;S(Ek) && (a = a.pubWin.tmod) && (b.tmod = a)
        },
        aA = (a, b) => {
            (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Ab(a))
        },
        bA = (a, b) => {
            (a = vz(a.pubWin)) && 0 < a.length && (b.tt_state = Ab(JSON.stringify(a)))
        },
        cA = (a, b) => {
            if (a = a.pubWin.google_floc) b.floc_id = a.id, b.floc_ver = a.version
        },
        dA = (a, b) => {
            try {
                const d = a.pubWin && a.pubWin.external &&
                    a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
                if (d) {
                    var c = parseInt(JSON.parse(d("os-mode"))["os-mode"], 10);
                    0 <= c && (b.wsm = c + 1)
                }
            } catch (d) {}
        };

    function eA(a, b) {
        S(Rk) && (0 <= a.F.google_ad_public_floor && (b.pubf = a.F.google_ad_public_floor), 0 <= a.F.google_ad_private_floor && (b.pvtf = a.F.google_ad_private_floor))
    }
    var Iz = (a, b) => {
        const c = {};
        Wz(a, c);
        mz();
        c.adsid = jz[1];
        mz();
        c.pucrd = jz[6];
        aA(a, c);
        bA(a, c);
        cA(a, c);
        Uz(a, c, b);
        Ng(c);
        S(Pk) && (c.u_sd = Vl(a.pubWin));
        if (S(Bk)) {
            let d;
            c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory
        }
        bi(889, () => {
            if (null == a.M) c.adx = -12245933, c.ady = -12245933;
            else {
                var d = $v(a.M, a.W);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(d.x), c.ady = Math.round(d.y));
                Xl(a.W) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        Xz(a, c);
        Yz(a, c);
        Oz(a, c);
        Nz(a, c);
        a.C && (c.oid = a.C);
        Zz(a,
            c);
        c.pvsid = Tf(a.pubWin, Zh);
        $z(a, c, b);
        dA(a, c);
        a.D && (c.scar = a.D);
        Rz(a, c, b);
        c.fu = a.j;
        c.bc = ez();
        mz();
        c.jar = jz[4];
        Zb(a.T, 9) && Qz(c);
        qi() && (c.atl = !0);
        c.rc = a.F.rss;
        eA(a, c);
        return c
    };
    const Jz = /YtLoPri/;
    let fA, gA;
    const hA = new vh(t);
    (a => {
        fA = a || new jh("https:");
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        hh(fA, t.google_srt);
        gA = new Bh(fA, hA);
        gA.l = !0;
        "complete" == t.document.readyState ? t.google_measure_js_timing || th(hA) : hA.j && L(t, "load", () => {
            t.google_measure_js_timing || th(hA)
        })
    })();

    function iA(a, b) {
        yh(a, c => {
            c.shv = String(b);
            c.mjsv = "m202110250101";
            c.eid = rw(t)
        })
    }

    function jA(a) {
        iA(Zh, I(a, 2));
        iA(gA, I(a, 2));
        a = Zb(a, 6);
        Dh(jw, Fh);
        jw = a
    };

    function kA({
        zd: a,
        re: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var lA = "undefined" === typeof sttc ? void 0 : sttc;

    function mA(a) {
        var b = Zh;
        try {
            return Dh(a, Eh), new Xv(JSON.parse(a))
        } catch (c) {
            b.ta(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new Xv
    };
    Kh(zl).l(Zk.j, Zk.defaultValue);

    function nA(a, b, c, d) {
        var e, f, g, h, k, l, m;
        const n = new iq;
        let q = "";
        const r = x => {
            try {
                const w = "object" === typeof x.data ? x.data : JSON.parse(x.data);
                q === w.paw_id && (je(a, "message", r), w.error ? n.l(Error(w.error)) : n.j(d(w)))
            } catch (w) {}
        };
        return "function" === typeof(null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (L(a, "message", r), q = c(a.gmaSdk), n.promise) : "function" === typeof(null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 :
            h.postMessage) || "function" === typeof(null === (m = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (q = String(Math.floor(2147483647 * wf(a))), L(a, "message", r), b(a.webkit.messageHandlers, q), n.promise) : null
    }

    function oA(a) {
        return nA(a, (b, c) => {
            var d;
            return void(null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function pA(a) {
        if (a.j) return a.j;
        a.j = Mf(a.l, "__uspapiLocator");
        return a.j
    }

    function qA(a) {
        var b;
        return "function" === typeof(null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != pA(a)
    }

    function rA(a, b) {
        var c, d;
        if ("function" === typeof(null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi))(null === (d = a.l) || void 0 === d ? void 0 : d.__uspapi)("getUSPData", 1, b);
        else if (pA(a)) {
            sA(a);
            const e = ++a.D;
            a.C[e] = b;
            a.j && a.j.postMessage({
                ["__uspapiCall"]: {
                    command: "getUSPData",
                    version: 1,
                    callId: e
                }
            }, "*")
        }
    }

    function tA(a, b) {
        let c = {};
        if (qA(a)) {
            var d = de(() => b(c));
            rA(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function sA(a) {
        a.A || (a.A = b => {
            var c;
            try {
                let e = {};
                "string" === typeof b.data ? e = JSON.parse(b.data) : e = b.data;
                var d = e.__uspapiReturn;
                null === (c = a.C) || void 0 === c ? void 0 : c[d.callId](d.returnValue, d.success)
            } catch (e) {}
        }, L(a.l, "message", a.A))
    }
    var uA = class extends hs {
        constructor(a) {
            super();
            this.l = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.A = null
        }
        B() {
            this.C = {};
            this.A && (je(this.l, "message", this.A), delete this.A);
            delete this.C;
            delete this.l;
            delete this.j;
            super.B()
        }
    };
    var vA = class extends v {
        constructor(a) {
            super(a)
        }
    };
    var xA = class extends v {
            constructor(a) {
                super(a, -1, wA)
            }
        },
        wA = [1, 2];
    var yA = class extends v {
        constructor(a) {
            super(a)
        }
    };
    var zA = class extends v {
        constructor(a) {
            super(a)
        }
    };

    function AA(a) {
        a.D || (a.l || (a.j.googlefc ? a.l = a.j : a.l = Mf(a.j, "googlefcPresent")), a.D = !0);
        return !!a.l
    }

    function BA(a) {
        a.A || (a.A = b => {
            try {
                const c = ec(zA, b.data.__fciReturn);
                (0, a.C[y(c, 1)])(c)
            } catch (c) {}
        }, L(a.j, "message", a.A))
    }

    function CA(a, b, c) {
        if (AA(a))
            if (a.l === a.j) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, d => {
                c(ec(zA, d))
            });
            else {
                BA(a);
                const d = a.G++;
                a.C[d] = c;
                a.l.postMessage({
                    ["__fciCall"]: {
                        command: b,
                        callId: d
                    }
                }, "*")
            }
    }

    function DA(a, b) {
        return new Promise(c => {
            CA(a, b, c)
        })
    }
    var EA = class extends hs {
            constructor(a) {
                super();
                this.j = a;
                this.A = this.l = null;
                this.C = {};
                this.G = 0;
                this.D = !1
            }
        },
        FA = (a, b, c, d) => {
            if (!b) return Promise.resolve(null);
            const e = C(b, vA, 3);
            b = C(b, yA, 2);
            return e && b && 1 === y(b, 1) && 2 === y(e, 1) ? DA(a, "getM25Consent").then(f => {
                var g = C(f, xA, 4);
                if (g) {
                    if (f = d, c) {
                        const h = Wb(g, 1);
                        h && h.includes(c) && (f = !1);
                        (g = Wb(g, 2)) && g.includes(c) && (f = !0)
                    }
                } else f = null;
                return f
            }) : Promise.resolve(null)
        };
    const GA = (a, b) => {
        try {
            var c, d;
            a: switch (Yb(b, 4, 0)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new ve(te(Yb(b, 2, 0)), I(b, 3), e),
                g = null !== (d = null === (c = C(b, se, 5)) || void 0 === c ? void 0 : I(c, 1)) && void 0 !== d ? d : "";
            f.Sa = g;
            f.ka = a;
            var h = f.build();
            ne(h)
        } catch (k) {}
    };

    function HA(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? GA(a, b) : L(a, "load", () => void GA(a, b)))
    };

    function IA(a) {
        var b, c;
        try {
            return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }

    function JA(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function KA(a) {
        if (a === a.top || of (a.top)) return Promise.resolve({
            status: 4
        });
        const b = IA(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && JA(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new iq;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.j({
                Na: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function LA(a, b) {
        const c = a.document.getElementById(b.google_async_iframe_id + "_anchor");
        a = a.document.getElementById(b.google_async_iframe_id + "_expand");
        if (null == c || null == a) throw Error("no_ins");
        return {
            W: c,
            X: a
        }
    }
    var NA = async a => {
            var {
                T: b,
                Z: c,
                Ea: d,
                slot: e
            } = a;
            a = e.vars;
            const {
                W: f,
                X: g
            } = LA(e.pubWin, e.vars), h = new Yv({
                M: Vg(e.pubWin),
                pubWin: e.pubWin,
                F: a,
                T: b,
                Z: c,
                Ea: d,
                W: f,
                X: g
            });
            h.H = Date.now();
            si(1, [h.F]);
            try {
                await MA(h)
            } catch (k) {
                if (!ci(159, k)) throw k;
            }
            bi(639, () => {
                {
                    var k = h.F;
                    const m = h.M;
                    if (m && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                        var l;
                        (l = (l = m.document.getElementById(k.google_async_iframe_id)) ? gf(l, "INS", "adsbygoogle") : null) ? (k = new ox(m, l, k), k.l = t.setInterval(la(k.G, k), 500),
                            k.G(), k = !0) : k = !1
                    } else k = !1
                }
                return k
            });
            bi(914, () => {
                Uv(e.pubWin.top, e.vars, b, e.vars.google_ad_client)
            })
        },
        MA = a => {
            if (/_sdo/.test(a.F.google_ad_format)) return Promise.resolve();
            var b = Lu(),
                c = W(b, 22, !1);
            c || (b.S[Ou(22)] = !0);
            c || (c = a.F, b = a.T, Kh(Wh).j(13), Kh(Wh).j(11), c = uv(c), (b = I(b, 10)) && c.push(b));
            S(yl) && (mf = !0);
            b = Lu();
            (c = W(b, 23, !1)) || (b.S[Ou(23)] = !0);
            if (!c) {
                b = C(a.T, bv, 5) || new bv;
                b = new cv(a.pubWin, a.F.google_ad_client, b, Zb(a.T, 6));
                c = S(Nk);
                b.l = c;
                const e = C(b.C, zj, 1);
                if (b.l) {
                    c = b.j;
                    if (b.B && !as(e)) {
                        var d = new Iu;
                        d = z(d, 1, 1)
                    } else d = null;
                    if (d) {
                        d = dc(d);
                        try {
                            c.localStorage.setItem("google_auto_fc_cmp_setting", d)
                        } catch (f) {}
                    }
                }
                e && bs(new cs(b.j, new us(b.j, b.A), e, new Qq(b.j)))
            }
            b = !lg() && !Ia();
            return !b || b && !OA(a) ? PA(a) : Promise.resolve()
        };
    const QA = (a, b, c) => {
        c = void 0 === c ? !1 : c;
        b = $v(a.M, b);
        const d = ng() || Ul(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = Wl(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    };

    function OA(a) {
        return RA(a) || SA(a)
    }

    function RA(a) {
        const b = a.F;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                P("abg:cmppar", {
                    client: a.F.google_ad_client,
                    url: a.F.google_page_url
                })
            }, 1E4),
            d = O(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                OA(a) || PA(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function SA(a) {
        const b = a.pubWin.document,
            c = TA();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.W,
            e = xi(b);
        if (!e) return !1;
        if (!yi(b)) return UA(a, c.visible, d);
        const f = 3 === wi(b);
        if (QA(a, d) <= c.hidden && !f) return !1;
        let g = O(332, () => {
            !yi(b) && g && (je(b, e, g), UA(a, c.visible, d) || PA(a), g = null)
        });
        return L(b, e, g)
    }

    function TA() {
        const a = {
            hidden: 0,
            visible: T(Ik) || 4
        };
        if (!t.IntersectionObserver || S(Ck)) a.visible = -1;
        if (kf()) {
            const b = T(Hk) || 1;
            a.visible *= b
        }
        return a
    }

    function UA(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.F;
        if (!Il(d.google_reactive_ad_format) && (Kw(d) || d.google_reactive_ads_config) || !Xl(c) || QA(a, c) <= b) return !1;
        var e = Lu();
        const f = W(e, 8, {});
        e = W(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        a.G = new t.IntersectionObserver((h, k) => {
            Sa(h, l => {
                0 >= l.intersectionRatio || (k.unobserve(l.target), bi(294, () => {
                    PA(a)
                }))
            })
        }, {
            rootMargin: 100 * b + "%"
        });
        a.G.observe(c);
        return !0
    }
    var PA = async a => {
            bi(326, () => {
                if (1 === Mg(a.F)) {
                    var c = S(kl),
                        d = c || S(il),
                        e = a.pubWin;
                    if (d && e === e.top) {
                        var f = new mi;
                        d = new ni;
                        var g = Tf(a.pubWin);
                        ac(f, 1, g, 0);
                        g = rw(a.pubWin);
                        ac(f, 5, g, "");
                        hc(f, 2);
                        bc(d, 1, f);
                        f = new li;
                        f = ac(f, 10, !0, !1);
                        g = S(al);
                        f = ac(f, 8, g, !1);
                        g = S(bl);
                        f = ac(f, 9, g, !1);
                        g = S(fl);
                        f = ac(f, 7, g, !1);
                        g = S(el);
                        f = ac(f, 13, g, !1);
                        g = S(gl);
                        f = ac(f, 14, g, !1);
                        bc(d, 2, f);
                        e.google_rum_config = d.toJSON();
                        rf(e.document, Td(Zb(a.T, 9) && c ? a.Z.fe : a.Z.ge))
                    } else th(ai)
                }
            });
            try {
                await VA(a)
            } catch (c) {
                ci(827, c)
            }
            a.F.google_ad_channel = WA(a,
                a.F.google_ad_channel);
            a.F.google_tag_partner = XA(a, a.F.google_tag_partner);
            YA(a);
            const b = a.F.google_start_time;
            "number" === typeof b && (cm = b, a.F.google_start_time = null);
            bi(161, () => {
                const c = a.F;
                null == c.google_ad_output && (c.google_ad_output = "html");
                if (null != c.google_ad_client) {
                    var d;
                    (d = String(c.google_ad_client)) ? (d = d.toLowerCase(), "ca-" != d.substring(0, 3) && (d = "ca-" + d)) : d = "";
                    c.google_ad_client = d
                }
                null != c.google_ad_slot && (c.google_ad_slot = String(c.google_ad_slot));
                if (null == c.google_flash_version) {
                    try {
                        var e =
                            Tg()
                    } catch (f) {
                        e = "0"
                    }
                    c.google_flash_version = e
                }
                c.google_webgl_support = !!Ce.WebGLRenderingContext;
                c.google_ad_section = c.google_ad_section || c.google_ad_region || "";
                c.google_country = c.google_country || c.google_gl || "";
                e = (new Date).getTime();
                Array.isArray(c.google_color_bg) && (c.google_color_bg = Zv(a, c.google_color_bg, e));
                Array.isArray(c.google_color_text) && (c.google_color_text = Zv(a, c.google_color_text, e));
                Array.isArray(c.google_color_link) && (c.google_color_link = Zv(a, c.google_color_link, e));
                Array.isArray(c.google_color_url) &&
                    (c.google_color_url = Zv(a, c.google_color_url, e));
                Array.isArray(c.google_color_border) && (c.google_color_border = Zv(a, c.google_color_border, e));
                Array.isArray(c.google_color_line) && (c.google_color_line = Zv(a, c.google_color_line, e))
            });
            ZA(a);
            Kw(a.F) && (ew() && (a.F.google_adtest = a.F.google_adtest || "on"), a.F.google_pgb_reactive = a.F.google_pgb_reactive || 3);
            $A(a.M);
            return aB(a)
        },
        ZA = a => {
            a.M && (Ow(a.M, a.Z.Bd), Mw(a.M.location) && Xw(a.M, {
                enable_page_level_ads: {
                    ["pltais"]: !0
                },
                google_ad_client: a.F.google_ad_client
            }))
        },
        WA = (a, b) => (b ? [b] : []).concat(tv(a.F).ad_channels || []).join("+"),
        XA = (a, b) => (b ? [b] : []).concat(tv(a.F).tag_partners || []).join("+"),
        dB = (a, b, c, d) => {
            c.src = qx(a);
            const e = d.pubWin.document;
            a = N() == window.top;
            c = bB(c);
            a && d.l.push(pg(d.pubWin, c));
            cB(d.W, c);
            S(hk) && t.setTimeout(O(644, () => {
                const f = e.getElementById(b);
                Vf(f, () => {
                    t.setTimeout(() => {
                        for (const g of d.l) g();
                        d.l.length = 0
                    }, 200)
                })
            }), 0);
            return Promise.resolve(c)
        };

    function bB(a) {
        const b = sf("IFRAME");
        xf(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }
    var eB = (a, b, c) => 9 == a.F.google_reactive_ad_format && gf(a.X, null, "fsi_container", void 0) ? (a.W.appendChild(b), Promise.resolve(b)) : Vw(a.Z.Lc, 525, d => {
        a.W.appendChild(b);
        d.createAdSlot(a.M, a.F, b, a.X.parentElement, Uu(c, a.pubWin));
        return b
    });

    function fB(a, b, c, d) {
        HA(a.pubWin, pe(hc(hc(oe(new qe, re(new se, String(Tf(a.pubWin)))), 4), 2), I(a.T, 2)));
        const e = a.M;
        a.F.google_acr && a.F.google_acr(b);
        L(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const g = e ? tv(e).enable_overlap_observer || !1 : !1;
            (a.F.ovlp || S(Lk) || g) && e && e === a.pubWin && gB(e, a, a.X, b)
        });
        var f = g => {
            g && a.l.push(() => g.lb())
        };
        hB(a, b);
        S(Uk) && iB(a, b);
        !e || Kw(a.F) && !Zw(a.F) || (f(new Fx(a, b)), f(new Ly(e, b, a.F)), f(new Jx(a, b)), f(new Cx(a, b)), f(e.IntersectionObserver ? null : new Ex(e, b, a.W)));
        e && (f(new wx(e, b)), a.l.push(ix(e, a.F)), Kh(nx).init(e), a.l.push(sx(e, a.X, b)));
        S(jl) || jB(a, c, b);
        b && b.setAttribute("data-google-container-id", d);
        c = a.F.iaaso;
        null != c && (d = a.X, f = d.parentElement, (f && Rg.test(f.className) ? f : d).setAttribute("data-auto-ad-size", c));
        c = a.X;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        kB(a)
    }
    var hB = (a, b) => {
            const c = a.pubWin,
                d = a.F.google_ad_client,
                e = Ru();
            let f = null;
            const g = fi(c, "pvt", (h, k) => {
                "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
            })
        },
        iB = (a, b) => {
            fi(a.pubWin, "gpi-uoo", (c, d) => {
                if (d.source === b.contentWindow) {
                    d = new Ae;
                    d = z(d, 1, c.userOptOut ? "1" : "0");
                    d = z(d, 2, 2147483647);
                    d = z(d, 3, "/");
                    var e = (e = a.F.google_page_url.match(lf)[3] || null) ? decodeURI(e) : e;
                    e = z(d, 4, e);
                    d = new uw(a.pubWin);
                    tw(d, "__gpi_opt_out", e, a.A);
                    if (c.clearAdsData &&
                        (c = a.A) && Wu("__gpi", c, d.j))
                        for (const f of Yf(d.j.location.hostname)) e = d.j, B(c, 5) && Vu(e) && (new Tu(e.document)).remove("__gpi", "/", f)
                }
            })
        };
    const kB = a => {
            const b = lg(a.pubWin);
            if (b)
                if ("AMP-STICKY-AD" === b.container) {
                    const c = e => {
                            "fill_sticky" === e.data && b.renderStart && b.renderStart()
                        },
                        d = O(616, c);
                    L(a.pubWin, "message", d);
                    a.l.push(() => {
                        je(a.pubWin, "message", c)
                    })
                } else b.renderStart && b.renderStart()
        },
        gB = (a, b, c, d) => {
            Px(new Yx(a, void 0), c).then(e => {
                si(8, [e]);
                return e
            }).then(e => {
                const f = c.parentElement;
                (f && Rg.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
                return e
            }).then(e => {
                const f = b.F.armr || "",
                    g =
                    e.executionTime || "",
                    h = null == b.F.iaaso ? "" : Number(b.F.iaaso),
                    k = Number(e.isOverlappingOrOutsideViewport),
                    l = Ua(e.entries, D => `${D.overlapType}:${D.overlapDepth}:${D.overlapDetectionPoint}`),
                    m = e.overlappedArea.toFixed(2),
                    n = d.dataset.googleQueryId || "",
                    q = m * e.targetRect.width * e.targetRect.height,
                    r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                    x = Og(e.target),
                    w = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
                e = e.viewportSize.width + "x" + e.viewportSize.height;
                P("ovlp", {
                    adf: b.F.google_ad_dom_fingerprint,
                    armr: f,
                    client: b.F.google_ad_client,
                    eid: rw(b.F),
                    et: g,
                    fwrattr: b.F.google_full_width_responsive,
                    iaaso: h,
                    io: k,
                    saldr: b.F.google_loader_used,
                    oa: m,
                    oe: l.join(","),
                    qid: n,
                    rafmt: b.F.google_responsive_auto_format,
                    roa: q,
                    slot: b.F.google_ad_slot,
                    sp: r,
                    tgt: x,
                    tr: w,
                    url: b.F.google_page_url,
                    vp: e
                }, 1)
            }).catch(e => {
                si(8, ["Error:", e.message, c]);
                P("ovlp-err", {
                    err: e.message
                }, 1)
            })
        };
    var lB = a => {
            var b = u("Edge") ? 4E3 : 8100;
            var c = a;
            c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
            if (c !== a) {
                b -= 8;
                let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
                P("trn", {
                    ol: a.length,
                    tr: -1 === d ? "" : a.substring(d + 1),
                    url: a
                }, .01)
            }
            return c
        },
        mB = (a, b, c) => {
            var d = b,
                e = 0 === a.B;
            b = a.F;
            const f = b.google_async_iframe_id,
                g = b.google_ad_width,
                h = b.google_ad_height,
                k = $w(b),
                l = {
                    id: f,
                    name: f
                };
            k || (l.style = "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`);
            var m = Kf();
            if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
                m = d;
                if (d = "fsb=" + encodeURIComponent("1")) {
                    var n = m.indexOf("#");
                    0 > n && (n = m.length);
                    var q = m.indexOf("?");
                    if (0 > q || q > n) {
                        q = n;
                        var r = ""
                    } else r = m.substring(q + 1, n);
                    m = [m.substr(0, q), r, m.substr(n)];
                    n = m[1];
                    m[1] = d ? n ? n + "&" + d : d : n;
                    d = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
                } else d = m;
                l.sandbox = Jf().join(" ")
            }
            n = d;
            d = lB(d);
            q = e ? d.replace(/&ea=[^&]*/, "") + "&ea=0" : d;
            m = k ? d : qx(q);
            null != g && (l.width = String(g));
            null != h && (l.height = String(h));
            l.frameborder =
                "0";
            l.src = m;
            l.marginwidth = "0";
            l.marginheight = "0";
            l.vspace = "0";
            l.hspace = "0";
            l.allowtransparency = "true";
            l.scrolling = "no";
            l.allowfullscreen = "true";
            m = "";
            if (e) {
                m = 10;
                for (q = ""; 0 < m--;) q += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
                m = q;
                d = ei(d, m);
                ei(n, m)
            } else d = q;
            b.dash && (l.srcdoc = b.dash);
            n = vz(a.pubWin);
            q = b.google_trust_token_additional_signing_data;
            n && wz(n) && (n = yz(n, q)) && (l.trustToken = JSON.stringify(n));
            if (S(Yk)) {
                n = a.pubWin.document;
                S($k) ? q = (q = window.navigator.userAgent.match(/Chrome\/([0-9]+)/)) &&
                    92 > Number(q[1]) ? "conversion-measurement" : "attribution-reporting" : q = "conversion-measurement";
                var x;
                if (null == (x = n.featurePolicy) ? 0 : x.features().includes(q)) l.allow = q
            }
            k ? (l.name = "", x = bB(l), c = eB(a, x, c)) : c = dB(d, f, l, a);
            e && (e = a.Z.ve, b = {
                id: f,
                url: d,
                width: g,
                height: h,
                pc: m,
                ce: a.pubWin,
                md: f,
                Vh: "google_expandable_ad_slot" + Mg(b),
                Od: e.toString(),
                Ub: a.pubWin
            }, b = !b.id || !b.url || 0 >= b.width || 0 >= b.height || !b.pc || !b.Ub ? void 0 : fi(b.Ub, "ct", ma(ii, b, e)), b && a.l.push(b));
            return c
        },
        jB = (a, b, c) => {
            const d = !Ja() || 0 <= Ea(Qa(), 11) ? Ii() :
                zi();
            d.getOseId() && (N().Goog_AdSense_getAdAdapterInstance = Ii, d.registerAdBlock(b, 1, "", c), a.l.push(() => {
                d.unloadAdBlock(c, !1, !0)
            }))
        };
    async function nB(a) {
        var b = a.F,
            c = a.pubWin,
            d = a.A,
            e = Uu(d, a.pubWin);
        if (!B(d, 5) && S(ik)) return Promise.resolve();
        B(d, 5) && Aw(d, a.pubWin, a.F.google_ad_client);
        var f = a.F.google_reactive_ads_config;
        f && (Uw(a.M, f), ex(f, a, Uu(d)), f = f.page_level_pubvars, da(f) && vc(a.F, f));
        B(d, 5) && await oB(a.F);
        if (!S(ql) || !xz(a.pubWin, kw(), I(a.T, 8))) {
            const g = T(xl);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => h(), g))])
        }
        f = "";
        $w(b) ? (f = a.Z.we.toString() + "#" + Lz(b), Tz(b, Lu()),
            pB(b)) : (5 == b.google_pgb_reactive && b.google_reactive_ads_config || !Lw(b) || Jw(c, b, e)) && pB(b) && (f = Kz(a, d));
        si(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || Lg(c);
        e = Mg(b);
        b = t.window === t.window.top ? "a!" + e.toString(36) : `${e.toString(36)}.${Qe()}`;
        c = 0 < QA(a, a.W, !0);
        e = {
            ["ifi"]: e,
            ["uci"]: b
        };
        c && (c = Lu(), e.btvi = W(c, 21, 1), Qu(c, 21));
        f = Hg(e, f);
        d = mB(a, f, d);
        f = lB(f);
        a.F.rpe && Ey(a.pubWin, a.W, {
            height: a.F.google_ad_height,
            kc: "force",
            mc: !0,
            Oc: !0,
            eb: a.F.google_ad_client
        });
        d = await d;
        try {
            fB(a, d, f, b)
        } catch (g) {
            ci(223,
                g)
        }
    }
    const oB = a => "aa" !== a.google_loader_used && "sa" !== a.google_loader_used || !(La() ? 0 <= Ea(Qa(), 11) : Ka() && 0 <= Ea(Qa(), 65)) ? (rz(null), Promise.resolve()) : new Promise(b => {
            rz(b.bind(null, !0))
        }),
        qB = a => {
            const b = new uA(a);
            return new Promise(c => {
                tA(b, d => {
                    d && "string" === typeof d.uspString ? c(d.uspString) : c()
                })
            })
        },
        rB = a => {
            let b = T(ok);
            0 > b && (b = -1);
            a = new ss(a, b);
            return ms(a) ? rs(a) : Promise.resolve()
        },
        sB = a => {
            var b = Lf(t.top, "googlefcPresent");
            t.googlefc && !b && P("adsense_fc_has_namespace_but_no_iframes", {
                publisherId: a
            }, 1)
        },
        tB =
        a => AA(a) ? DA(a, "loaded") : Promise.resolve(),
        uB = (a, b) => {
            const c = b.se,
                d = b.uspString;
            b = b.ke;
            const e = new Yu;
            if (c) {
                var f = Xu(e, ks(c));
                f = z(f, 2, c.tcString);
                f = z(f, 4, c.addtlConsent || "");
                z(f, 7, c.internalErrorState);
                void 0 !== c.gdprApplies && z(e, 3, c.gdprApplies)
            } else Xu(e, !0);
            d && z(e, 1, d);
            null !== b && z(e, 6, b);
            a.A = e
        },
        vB = async a => {
            var b = T(kk);
            if (0 >= b) return Promise.resolve();
            const c = bi(809, () => oA(a));
            if (c) try {
                return await Promise.race([c, Xf(b, "0")])
            } catch (d) {
                return ci(809, d), "0"
            }
        },
        wB = a => {
            var b = T(mk);
            if (0 >= b) return Promise.resolve();
            const c = mh();
            return Promise.race([bi(832, () => KA(a)), Xf(b)]).then(d => {
                let e;
                const f = null != (e = null == d ? void 0 : d.status) ? e : 100;
                P("afc_etu", {
                    etus: f,
                    sig: mh() - c,
                    tms: b
                });
                return null == d ? void 0 : d.Na
            })
        },
        xB = a => {
            var b = T(tl);
            const c = O(779, () => Fz(new Gz(a)));
            return Promise.race([c(), Xf(b)])
        };
    var yB = async a => {
            hz = N;
            nz(I(a.T, 8));
            iv(a.pubWin);
            sB(a.F.google_ad_client);
            var b = new EA(a.pubWin),
                c = await tB(b);
            b = [rB(a.pubWin), qB(a.pubWin), FA(b, c, a.F.google_ad_client, Zb(a.T, 6))];
            b = await Promise.all(b);
            uB(a, {
                se: b[0],
                uspString: b[1],
                ke: b[2]
            });
            S(ql) && xz(a.pubWin, kw(), I(a.T, 8)) && await xB(!!B(a.A, 5));
            b = vB(a.pubWin);
            c = bi(868, () => wB(a.pubWin));
            a.D = await b || "";
            a.Na = await c || "";
            await nB(a)
        },
        aB = a => {
            var b = a.pubWin.document,
                c = a.F,
                d = c.google_ad_width;
            const e = c.google_ad_height;
            let f = 0;
            try {
                !1 === c.google_allow_expandable_ads &&
                    (f |= 1);
                if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2;
                a: {
                    c = navigator;
                    const h = c.userAgent,
                        k = c.platform,
                        l = /WebKit\/(\d+)/,
                        m = /rv:(\d+\.\d+)/,
                        n = /rv:1\.8([^.]|\.0)/;
                    if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(h)) {
                        const q = (l.exec(h) || [0, 0])[1],
                            r = (m.exec(h) || [0, 0])[1];
                        if (/Win/.test(k) && /Trident/.test(h) && 11 <= b.documentMode || !q && "Gecko" === c.product && 27 <= r && !n.test(h) || 536 <= q) {
                            var g = !0;
                            break a
                        }
                    }
                    g = !1
                }
                g || (f |= 4);
                Li(a.pubWin, a.pubWin.document,
                    d, e) && (f |= 2)
            } catch (h) {
                f |= 8
            }
            a.B = f;
            0 === a.B || (a.F.google_allow_expandable_ads = !1);
            Zf(a.pubWin) != a.pubWin && (a.j |= 4);
            3 === wi(a.pubWin.document) && (a.j |= 32);
            if (b = a.M) b = a.M, b = !(V(b).scrollWidth <= V(b).clientWidth);
            b && (a.j |= 1024);
            a.pubWin.Prototype && a.pubWin.Prototype.Version && (a.j |= 16384);
            a.F.google_loader_features_used && (a.j |= a.F.google_loader_features_used);
            S(jl) ? a.C = 2 : (b = T(Mk), Di = Hi, vi = .02, ui = b, b = !Ja() || 0 <= Ea(Qa(), 11) ? Ii() : zi(), d = Lu(), a.C = b.setupOse(W(d, 7, Ku())));
            return yB(a)
        };

    function cB(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }
    var pB = a => {
            const b = Lu(),
                c = a.google_ad_section;
            Kw(a) && Qu(b, 15);
            if (Ug(a)) {
                if (100 < Qu(b, 5)) return !1
            } else if (100 < Qu(b, 6) - W(b, 15, 0) && "" == c) return !1;
            return !0
        },
        YA = a => {
            const b = a.M;
            if (b && !tv(b).ads_density_stats_processed && !lg(b) && (tv(b).ads_density_stats_processed = !0, S(Kk) || .01 > wf(b))) {
                const c = () => {
                    if (b) {
                        var d = Ot(Jt(b), a.F.google_ad_client, b.location.hostname, rw(a.F).split(","));
                        P("ama_stats", d, 1)
                    }
                };
                "complete" === b.document.readyState ? t.setTimeout(c, 1E3) : L(b, "load", () => {
                    t.setTimeout(c, 1E3)
                })
            }
        },
        $A = a => {
            a && !tv(a).host_pinged_back &&
                (tv(a).host_pinged_back = !0, P("abg_host", {
                    host: a.location.host
                }, .01))
        },
        VA = async a => {
            const b = a.pubWin.document;
            if ("function" === typeof b.interestCohort && S(Wk)) {
                const c = T(Xk),
                    d = await Promise.race([(async () => {
                        const e = performance.now(),
                            f = await b.interestCohort();
                        P("flocapi", {
                            time: performance.now() - e
                        }, 1);
                        return f
                    })(), new Promise(e => void setTimeout(() => e(), c))]);
                d && (a.pubWin.google_floc = d)
            }
        };
    ((a, b, c) => {
        bi(843, () => {
            var d = t.google_sl_win || t;
            if (!d.google_sa_impl) {
                var e = mA(a);
                jA(e);
                si(16, [3, e.toJSON()]);
                var f = kA({
                        zd: b,
                        re: I(e, 2)
                    }),
                    g = c(f, e);
                d.google_sa_impl = async h => {
                    await NA({
                        T: e,
                        Z: g,
                        Ea: f,
                        slot: h
                    })
                };
                qw(nw(d));
                d.google_process_slots && d.google_process_slots();
                d = (t.Prototype || {}).Version;
                null != d && P("prtpjs", {
                    version: d
                })
            }
        })
    })(lA, "m202110250101", function(a, b) {
        const c = 2012 < Yb(b, 1, 0) ? `_fy${Yb(b,1,0)}` : "",
            d = I(b, 3),
            e = I(b, 2);
        return {
            ge: J `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum${c}.js`,
            fe: J `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum_debug${c}.js`,
            Lc: a ? J `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js` : J `https://pagead2.googlesyndication.com/pagead/js/${I(b,2)}/${d}/reactive_library${c}.js`,
            Bd: a ? J `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js` : J `https://pagead2.googlesyndication.com/pagead/js/${I(b,2)}/${d}/debug_card_library${c}.js`,
            ve: J `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/creativetoolset/xpc_expansion_embed.js`,
            we: J `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`,
            Wa: a ? J `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js` : J `https://pagead2.googlesyndication.com/pagead/js/${I(b,2)}/${d}/slotcar_library${c}.js`
        }
    });
}).call(this, "[2019,\"r20211026\",\"r20110914\",null,[],null,null,null,null,null,[],null,[],null,null,null,null,-1]");