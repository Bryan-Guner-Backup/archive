if (self.CavalryLogger) {
    CavalryLogger.start_js(["d9hPhvM"]);
}

/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("bignumber-js-7.2.1", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = {
            exports: b
        },
        h;

    function i() {
        (function(a) {
            var b, c = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                d = Math.ceil,
                e = Math.floor,
                f = "[BigNumber Error] ",
                i = f + "Number primitive has more than 15 significant digits: ",
                j = 1e14,
                k = 14,
                l = 9007199254740991,
                m = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                n = 1e7,
                o = 1e9;

            function p(b) {
                var g, h, y, z = a.prototype = {
                        constructor: a,
                        toString: null,
                        valueOf: null
                    },
                    A = new a(1),
                    B = 20,
                    C = 4,
                    D = -7,
                    E = 21,
                    F = -1e7,
                    G = 1e7,
                    H = !1,
                    I = 1,
                    J = 0,
                    K = {
                        decimalSeparator: ".",
                        groupSeparator: ",",
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        fractionGroupSeparator: "\xa0",
                        fractionGroupSize: 0
                    },
                    L = "0123456789abcdefghijklmnopqrstuvwxyz";

                function a(b, d) {
                    var f, g, j, m, n, o, p, q, r = this;
                    if (!(r instanceof a)) return new a(b, d);
                    if (d == null) {
                        if (b instanceof a) {
                            r.s = b.s;
                            r.e = b.e;
                            r.c = (b = b.c) ? b.slice() : b;
                            return
                        }
                        o = typeof b == "number";
                        if (o && b * 0 == 0) {
                            r.s = 1 / b < 0 ? (b = -b, -1) : 1;
                            if (b === ~~b) {
                                for (m = 0, n = b; n >= 10; n /= 10, m++);
                                r.e = m;
                                r.c = [b];
                                return
                            }
                            q = b + ""
                        } else {
                            if (!c.test(q = b + "")) return y(r, q, o);
                            r.s = q.charCodeAt(0) == 45 ? (q = q.slice(1), -1) : 1
                        }(m = q.indexOf(".")) > -1 && (q = q.replace(".", ""));
                        (n = q.search(/e/i)) > 0 ? (m < 0 && (m = n), m += +q.slice(n + 1), q = q.substring(0, n)) : m < 0 && (m = q.length)
                    } else {
                        t(d, 2, L.length, "Base");
                        q = b + "";
                        if (d == 10) {
                            r = new a(b instanceof a ? b : q);
                            return P(r, B + r.e + 1, C)
                        }
                        o = typeof b == "number";
                        if (o) {
                            if (b * 0 != 0) return y(r, q, o, d);
                            r.s = 1 / b < 0 ? (q = q.slice(1), -1) : 1;
                            if (a.DEBUG && q.replace(/^0\.0*|\./, "").length > 15) throw Error(i + b);
                            o = !1
                        } else r.s = q.charCodeAt(0) === 45 ? (q = q.slice(1), -1) : 1;
                        f = L.slice(0, d);
                        m = n = 0;
                        for (p = q.length; n < p; n++)
                            if (f.indexOf(g = q.charAt(n)) < 0) {
                                if (g == ".") {
                                    if (n > m) {
                                        m = p;
                                        continue
                                    }
                                } else if (!j && (q == q.toUpperCase() && (q = q.toLowerCase()) || q == q.toLowerCase() && (q = q.toUpperCase()))) {
                                    j = !0;
                                    n = -1;
                                    m = 0;
                                    continue
                                }
                                return y(r, b + "", o, d)
                            }
                        q = h(q, d, 10, r.s);
                        (m = q.indexOf(".")) > -1 ? q = q.replace(".", "") : m = q.length
                    }
                    for (n = 0; q.charCodeAt(n) === 48; n++);
                    for (p = q.length; q.charCodeAt(--p) === 48;);
                    q = q.slice(n, ++p);
                    if (q) {
                        p -= n;
                        if (o && a.DEBUG && p > 15 && (b > l || b !== e(b))) throw Error(i + r.s * b);
                        m = m - n - 1;
                        if (m > G) r.c = r.e = null;
                        else if (m < F) r.c = [r.e = 0];
                        else {
                            r.e = m;
                            r.c = [];
                            n = (m + 1) % k;
                            m < 0 && (n += k);
                            if (n < p) {
                                n && r.c.push(+q.slice(0, n));
                                for (p -= k; n < p;) r.c.push(+q.slice(n, n += k));
                                q = q.slice(n);
                                n = k - q.length
                            } else n -= p;
                            for (; n--; q += "0");
                            r.c.push(+q)
                        }
                    } else r.c = [r.e = 0]
                }
                a.clone = p;
                a.ROUND_UP = 0;
                a.ROUND_DOWN = 1;
                a.ROUND_CEIL = 2;
                a.ROUND_FLOOR = 3;
                a.ROUND_HALF_UP = 4;
                a.ROUND_HALF_DOWN = 5;
                a.ROUND_HALF_EVEN = 6;
                a.ROUND_HALF_CEIL = 7;
                a.ROUND_HALF_FLOOR = 8;
                a.EUCLID = 9;
                a.config = a.set = function(a) {
                    var b, c;
                    if (a != null)
                        if (typeof a == "object") {
                            a.hasOwnProperty(b = "DECIMAL_PLACES") && (c = a[b], t(c, 0, o, b), B = c);
                            a.hasOwnProperty(b = "ROUNDING_MODE") && (c = a[b], t(c, 0, 8, b), C = c);
                            a.hasOwnProperty(b = "EXPONENTIAL_AT") && (c = a[b], u(c) ? (t(c[0], -o, 0, b), t(c[1], 0, o, b), D = c[0], E = c[1]) : (t(c, -o, o, b), D = -(E = c < 0 ? -c : c)));
                            if (a.hasOwnProperty(b = "RANGE")) {
                                c = a[b];
                                if (u(c)) t(c[0], -o, -1, b), t(c[1], 1, o, b), F = c[0], G = c[1];
                                else {
                                    t(c, -o, o, b);
                                    if (c) F = -(G = c < 0 ? -c : c);
                                    else throw Error(f + b + " cannot be zero: " + c)
                                }
                            }
                            if (a.hasOwnProperty(b = "CRYPTO")) {
                                c = a[b];
                                if (c === !!c)
                                    if (c)
                                        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) H = c;
                                        else {
                                            H = !c;
                                            throw Error(f + "crypto unavailable")
                                        }
                                else H = c;
                                else throw Error(f + b + " not true or false: " + c)
                            }
                            a.hasOwnProperty(b = "MODULO_MODE") && (c = a[b], t(c, 0, 9, b), I = c);
                            a.hasOwnProperty(b = "POW_PRECISION") && (c = a[b], t(c, 0, o, b), J = c);
                            if (a.hasOwnProperty(b = "FORMAT")) {
                                c = a[b];
                                if (typeof c == "object") K = c;
                                else throw Error(f + b + " not an object: " + c)
                            }
                            if (a.hasOwnProperty(b = "ALPHABET")) {
                                c = a[b];
                                if (typeof c == "string" && !/^.$|\.|(.).*\1/.test(c)) L = c;
                                else throw Error(f + b + " invalid: " + c)
                            }
                        } else throw Error(f + "Object expected: " + a);
                    return {
                        DECIMAL_PLACES: B,
                        ROUNDING_MODE: C,
                        EXPONENTIAL_AT: [D, E],
                        RANGE: [F, G],
                        CRYPTO: H,
                        MODULO_MODE: I,
                        POW_PRECISION: J,
                        FORMAT: K,
                        ALPHABET: L
                    }
                };
                a.isBigNumber = function(b) {
                    return b instanceof a || b && b._isBigNumber === !0 || !1
                };
                a.maximum = a.max = function() {
                    return N(arguments, z.lt)
                };
                a.minimum = a.min = function() {
                    return N(arguments, z.gt)
                };
                a.random = function() {
                    var b = 9007199254740992,
                        c = Math.random() * b & 2097151 ? function() {
                            return e(Math.random() * b)
                        } : function() {
                            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
                        };
                    return function(b) {
                        var g, h, i, j, l = 0,
                            n = [],
                            p = new a(A);
                        b == null ? b = B : t(b, 0, o);
                        i = d(b / k);
                        if (H)
                            if (crypto.getRandomValues) {
                                g = crypto.getRandomValues(new Uint32Array(i *= 2));
                                for (; l < i;) j = g[l] * 131072 + (g[l + 1] >>> 11), j >= 9e15 ? (h = crypto.getRandomValues(new Uint32Array(2)), g[l] = h[0], g[l + 1] = h[1]) : (n.push(j % 1e14), l += 2);
                                l = i / 2
                            } else if (crypto.randomBytes) {
                            g = crypto.randomBytes(i *= 7);
                            for (; l < i;) j = (g[l] & 31) * 281474976710656 + g[l + 1] * 1099511627776 + g[l + 2] * 4294967296 + g[l + 3] * 16777216 + (g[l + 4] << 16) + (g[l + 5] << 8) + g[l + 6], j >= 9e15 ? crypto.randomBytes(7).copy(g, l) : (n.push(j % 1e14), l += 7);
                            l = i / 7
                        } else {
                            H = !1;
                            throw Error(f + "crypto unavailable")
                        }
                        if (!H)
                            for (; l < i;) j = c(), j < 9e15 && (n[l++] = j % 1e14);
                        i = n[--l];
                        b %= k;
                        i && b && (j = m[k - b], n[l] = e(i / j) * j);
                        for (; n[l] === 0; n.pop(), l--);
                        if (l < 0) n = [h = 0];
                        else {
                            for (h = -1; n[0] === 0; n.splice(0, 1), h -= k);
                            for (l = 1, j = n[0]; j >= 10; j /= 10, l++);
                            l < k && (h -= k - l)
                        }
                        p.e = h;
                        p.c = n;
                        return p
                    }
                }();
                h = function() {
                    var b = "0123456789";

                    function c(a, b, c, d) {
                        var e = [0],
                            f, g = 0,
                            h = a.length;
                        for (; g < h;) {
                            for (f = e.length; f--; e[f] *= b);
                            e[0] += d.indexOf(a.charAt(g++));
                            for (f = 0; f < e.length; f++) e[f] > c - 1 && (e[f + 1] == null && (e[f + 1] = 0), e[f + 1] += e[f] / c | 0, e[f] %= c)
                        }
                        return e.reverse()
                    }
                    return function(d, e, f, h, i) {
                        var j, k, l, m, n, o = d.indexOf("."),
                            p = B,
                            q = C;
                        o >= 0 && (k = J, J = 0, d = d.replace(".", ""), n = new a(e), m = n.pow(d.length - o), J = k, n.c = c(x(r(m.c), m.e, "0"), 10, f, b), n.e = n.c.length);
                        i = c(d, e, f, i ? (e = L, b) : (e = b, L));
                        j = k = i.length;
                        for (; i[--k] == 0; i.pop());
                        if (!i[0]) return e.charAt(0);
                        o < 0 ? --j : (m.c = i, m.e = j, m.s = h, m = g(m, n, p, q, f), i = m.c, l = m.r, j = m.e);
                        h = j + p + 1;
                        o = i[h];
                        k = f / 2;
                        l = l || h < 0 || i[h + 1] != null;
                        l = q < 4 ? (o != null || l) && (q == 0 || q == (m.s < 0 ? 3 : 2)) : o > k || o == k && (q == 4 || l || q == 6 && i[h - 1] & 1 || q == (m.s < 0 ? 8 : 7));
                        if (h < 1 || !i[0]) d = l ? x(e.charAt(1), -p, e.charAt(0)) : e.charAt(0);
                        else {
                            i.length = h;
                            if (l)
                                for (--f; ++i[--h] > f;) i[h] = 0, h || (++j, i = [1].concat(i));
                            for (k = i.length; !i[--k];);
                            for (o = 0, d = ""; o <= k; d += e.charAt(i[o++]));
                            d = x(d, j, e.charAt(0))
                        }
                        return d
                    }
                }();
                g = function() {
                    function c(a, b, c) {
                        var d, e, f, g = 0,
                            h = a.length,
                            i = b % n;
                        b = b / n | 0;
                        for (a = a.slice(); h--;) e = a[h] % n, f = a[h] / n | 0, d = b * e + f * i, e = i * e + d % n * n + g, g = (e / c | 0) + (d / n | 0) + b * f, a[h] = e % c;
                        g && (a = [g].concat(a));
                        return a
                    }

                    function b(a, b, c, d) {
                        var e;
                        if (c != d) d = c > d ? 1 : -1;
                        else
                            for (e = d = 0; e < c; e++)
                                if (a[e] != b[e]) {
                                    d = a[e] > b[e] ? 1 : -1;
                                    break
                                } return d
                    }

                    function d(a, b, c, d) {
                        var e = 0;
                        for (; c--;) a[c] -= e, e = a[c] < b[c] ? 1 : 0, a[c] = e * d + a[c] - b[c];
                        for (; !a[0] && a.length > 1; a.splice(0, 1));
                    }
                    return function(f, g, h, i, l) {
                        var m, n, o, p, r, s, t, u, v, w, x, y, z, A, B = f.s == g.s ? 1 : -1,
                            C = f.c,
                            D = g.c;
                        if (!C || !C[0] || !D || !D[0]) return new a(!f.s || !g.s || (C ? D && C[0] == D[0] : !D) ? NaN : C && C[0] == 0 || !D ? B * 0 : B / 0);
                        r = new a(B);
                        s = r.c = [];
                        n = f.e - g.e;
                        B = h + n + 1;
                        l || (l = j, n = q(f.e / k) - q(g.e / k), B = B / k | 0);
                        for (f = 0; D[f] == (C[f] || 0); f++);
                        D[f] > (C[f] || 0) && n--;
                        if (B < 0) s.push(1), g = !0;
                        else {
                            x = C.length;
                            z = D.length;
                            f = 0;
                            B += 2;
                            o = e(l / (D[0] + 1));
                            o > 1 && (D = c(D, o, l), C = c(C, o, l), z = D.length, x = C.length);
                            w = z;
                            t = C.slice(0, z);
                            u = t.length;
                            for (; u < z; t[u++] = 0);
                            A = D.slice();
                            A = [0].concat(A);
                            y = D[0];
                            D[1] >= l / 2 && y++;
                            do {
                                o = 0;
                                m = b(D, t, z, u);
                                if (m < 0) {
                                    v = t[0];
                                    z != u && (v = v * l + (t[1] || 0));
                                    o = e(v / y);
                                    if (o > 1) {
                                        o >= l && (o = l - 1);
                                        v = c(D, o, l);
                                        p = v.length;
                                        u = t.length;
                                        while (b(v, t, p, u) == 1) o--, d(v, z < p ? A : D, p, l), p = v.length, m = 1
                                    } else o == 0 && (m = o = 1), v = D.slice(), p = v.length;
                                    p < u && (v = [0].concat(v));
                                    d(t, v, u, l);
                                    u = t.length;
                                    if (m == -1)
                                        while (b(D, t, z, u) < 1) o++, d(t, z < u ? A : D, u, l), u = t.length
                                } else m === 0 && (o++, t = [0]);
                                s[f++] = o;
                                t[0] ? t[u++] = C[w] || 0 : (t = [C[w]], u = 1)
                            } while ((w++ < x || t[0] != null) && B--);
                            g = t[0] != null;
                            s[0] || s.splice(0, 1)
                        }
                        if (l == j) {
                            for (f = 1, B = s[0]; B >= 10; B /= 10, f++);
                            P(r, h + (r.e = f + n * k - 1) + 1, i, g)
                        } else r.e = n, r.r = +g;
                        return r
                    }
                }();

                function M(b, c, d, e) {
                    var f, g, h, i;
                    d == null ? d = C : t(d, 0, 8);
                    if (!b.c) return b.toString();
                    f = b.c[0];
                    g = b.e;
                    if (c == null) i = r(b.c), i = e == 1 || e == 2 && g <= D ? w(i, g) : x(i, g, "0");
                    else {
                        b = P(new a(b), c, d);
                        d = b.e;
                        i = r(b.c);
                        h = i.length;
                        if (e == 1 || e == 2 && (c <= d || d <= D)) {
                            for (; h < c; i += "0", h++);
                            i = w(i, d)
                        } else {
                            c -= g;
                            i = x(i, d, "0");
                            if (d + 1 > h) {
                                if (--c > 0)
                                    for (i += "."; c--; i += "0");
                            } else {
                                c += d - h;
                                if (c > 0) {
                                    d + 1 == h && (i += ".");
                                    for (; c--; i += "0");
                                }
                            }
                        }
                    }
                    return b.s < 0 && f ? "-" + i : i
                }

                function N(b, c) {
                    var d, e, f = 0;
                    u(b[0]) && (b = b[0]);
                    d = new a(b[0]);
                    for (; ++f < b.length;) {
                        e = new a(b[f]);
                        if (!e.s) {
                            d = e;
                            break
                        } else c.call(d, e) && (d = e)
                    }
                    return d
                }

                function O(a, b, c) {
                    var d = 1,
                        e = b.length;
                    for (; !b[--e]; b.pop());
                    for (e = b[0]; e >= 10; e /= 10, d++);
                    (c = d + c * k - 1) > G ? a.c = a.e = null : c < F ? a.c = [a.e = 0] : (a.e = c, a.c = b);
                    return a
                }
                y = function() {
                    var b = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                        c = /^([^.]+)\.$/,
                        d = /^\.([^.]+)$/,
                        e = /^-?(Infinity|NaN)$/,
                        g = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                    return function(h, i, j, k) {
                        var l, m = j ? i : i.replace(g, "");
                        if (e.test(m)) h.s = isNaN(m) ? null : m < 0 ? -1 : 1, h.c = h.e = null;
                        else {
                            if (!j) {
                                m = m.replace(b, function(a, b, c) {
                                    l = (c = c.toLowerCase()) == "x" ? 16 : c == "b" ? 2 : 8;
                                    return !k || k == l ? b : a
                                });
                                k && (l = k, m = m.replace(c, "$1").replace(d, "0.$1"));
                                if (i != m) return new a(m, l)
                            }
                            if (a.DEBUG) throw Error(f + "Not a" + (k ? " base " + k : "") + " number: " + i);
                            h.c = h.e = h.s = null
                        }
                    }
                }();

                function P(a, b, c, f) {
                    var g, h, i, l, n, o, p, q = a.c,
                        r = m;
                    if (q) {
                        out: {
                            for (g = 1, l = q[0]; l >= 10; l /= 10, g++);h = b - g;
                            if (h < 0) h += k,
                            i = b,
                            n = q[o = 0],
                            p = n / r[g - i - 1] % 10 | 0;
                            else {
                                o = d((h + 1) / k);
                                if (o >= q.length)
                                    if (f) {
                                        for (; q.length <= o; q.push(0));
                                        n = p = 0;
                                        g = 1;
                                        h %= k;
                                        i = h - k + 1
                                    } else break out;
                                else {
                                    n = l = q[o];
                                    for (g = 1; l >= 10; l /= 10, g++);
                                    h %= k;
                                    i = h - k + g;
                                    p = i < 0 ? 0 : n / r[g - i - 1] % 10 | 0
                                }
                            }
                            f = f || b < 0 || q[o + 1] != null || (i < 0 ? n : n % r[g - i - 1]);f = c < 4 ? (p || f) && (c == 0 || c == (a.s < 0 ? 3 : 2)) : p > 5 || p == 5 && (c == 4 || f || c == 6 && (h > 0 ? i > 0 ? n / r[g - i] : 0 : q[o - 1]) % 10 & 1 || c == (a.s < 0 ? 8 : 7));
                            if (b < 1 || !q[0]) {
                                q.length = 0;
                                f ? (b -= a.e + 1, q[0] = r[(k - b % k) % k], a.e = -b || 0) : q[0] = a.e = 0;
                                return a
                            }
                            h == 0 ? (q.length = o, l = 1, o--) : (q.length = o + 1, l = r[k - h], q[o] = i > 0 ? e(n / r[g - i] % r[i]) * l : 0);
                            if (f)
                                for (;;)
                                    if (o == 0) {
                                        for (h = 1, i = q[0]; i >= 10; i /= 10, h++);
                                        i = q[0] += l;
                                        for (l = 1; i >= 10; i /= 10, l++);
                                        h != l && (a.e++, q[0] == j && (q[0] = 1));
                                        break
                                    } else {
                                        q[o] += l;
                                        if (q[o] != j) break;
                                        q[o--] = 0;
                                        l = 1
                                    }
                            for (h = q.length; q[--h] === 0; q.pop());
                        }
                        a.e > G ? a.c = a.e = null : a.e < F && (a.c = [a.e = 0])
                    }
                    return a
                }
                z.absoluteValue = z.abs = function() {
                    var b = new a(this);
                    b.s < 0 && (b.s = 1);
                    return b
                };
                z.comparedTo = function(b, c) {
                    return s(this, new a(b, c))
                };
                z.decimalPlaces = z.dp = function(b, c) {
                    var d = this;
                    if (b != null) {
                        t(b, 0, o);
                        c == null ? c = C : t(c, 0, 8);
                        return P(new a(d), b + d.e + 1, c)
                    }
                    if (!(b = d.c)) return null;
                    d = ((c = b.length - 1) - q(this.e / k)) * k;
                    if (c = b[c])
                        for (; c % 10 == 0; c /= 10, d--);
                    d < 0 && (d = 0);
                    return d
                };
                z.dividedBy = z.div = function(b, c) {
                    return g(this, new a(b, c), B, C)
                };
                z.dividedToIntegerBy = z.idiv = function(b, c) {
                    return g(this, new a(b, c), 0, 1)
                };
                z.exponentiatedBy = z.pow = function(b, c) {
                    var g, h, i, j, l, m, n, o, p = this;
                    b = new a(b);
                    if (b.c && !b.isInteger()) throw Error(f + "Exponent not an integer: " + b);
                    c != null && (c = new a(c));
                    l = b.e > 14;
                    if (!p.c || !p.c[0] || p.c[0] == 1 && !p.e && p.c.length == 1 || !b.c || !b.c[0]) {
                        o = new a(Math.pow(+p.valueOf(), l ? 2 - v(b) : +b));
                        return c ? o.mod(c) : o
                    }
                    m = b.s < 0;
                    if (c) {
                        if (c.c ? !c.c[0] : !c.s) return new a(NaN);
                        h = !m && p.isInteger() && c.isInteger();
                        h && (p = p.mod(c))
                    } else if (b.e > 9 && (p.e > 0 || p.e < -1 || (p.e == 0 ? p.c[0] > 1 || l && p.c[1] >= 24e7 : p.c[0] < 8e13 || l && p.c[0] <= 9999975e7))) {
                        i = p.s < 0 && v(b) ? -0 : 0;
                        p.e > -1 && (i = 1 / i);
                        return new a(m ? 1 / i : i)
                    } else J && (i = d(J / k + 2));
                    l ? (g = new a(.5), n = v(b)) : n = b % 2;
                    m && (b.s = 1);
                    o = new a(A);
                    for (;;) {
                        if (n) {
                            o = o.times(p);
                            if (!o.c) break;
                            i ? o.c.length > i && (o.c.length = i) : h && (o = o.mod(c))
                        }
                        if (l) {
                            b = b.times(g);
                            P(b, b.e + 1, 1);
                            if (!b.c[0]) break;
                            l = b.e > 14;
                            n = v(b)
                        } else {
                            b = e(b / 2);
                            if (!b) break;
                            n = b % 2
                        }
                        p = p.times(p);
                        i ? p.c && p.c.length > i && (p.c.length = i) : h && (p = p.mod(c))
                    }
                    if (h) return o;
                    m && (o = A.div(o));
                    return c ? o.mod(c) : i ? P(o, J, C, j) : o
                };
                z.integerValue = function(b) {
                    var c = new a(this);
                    b == null ? b = C : t(b, 0, 8);
                    return P(c, c.e + 1, b)
                };
                z.isEqualTo = z.eq = function(b, c) {
                    return s(this, new a(b, c)) === 0
                };
                z.isFinite = function() {
                    return !!this.c
                };
                z.isGreaterThan = z.gt = function(b, c) {
                    return s(this, new a(b, c)) > 0
                };
                z.isGreaterThanOrEqualTo = z.gte = function(b, c) {
                    return (c = s(this, new a(b, c))) === 1 || c === 0
                };
                z.isInteger = function() {
                    return !!this.c && q(this.e / k) > this.c.length - 2
                };
                z.isLessThan = z.lt = function(b, c) {
                    return s(this, new a(b, c)) < 0
                };
                z.isLessThanOrEqualTo = z.lte = function(b, c) {
                    return (c = s(this, new a(b, c))) === -1 || c === 0
                };
                z.isNaN = function() {
                    return !this.s
                };
                z.isNegative = function() {
                    return this.s < 0
                };
                z.isPositive = function() {
                    return this.s > 0
                };
                z.isZero = function() {
                    return !!this.c && this.c[0] == 0
                };
                z.minus = function(b, c) {
                    var d, e = this,
                        f = e.s;
                    b = new a(b, c);
                    c = b.s;
                    if (!f || !c) return new a(NaN);
                    if (f != c) {
                        b.s = -c;
                        return e.plus(b)
                    }
                    var g = e.e / k,
                        h = b.e / k,
                        i = e.c,
                        l = b.c;
                    if (!g || !h) {
                        if (!i || !l) return i ? (b.s = -c, b) : new a(l ? e : NaN);
                        if (!i[0] || !l[0]) return l[0] ? (b.s = -c, b) : new a(i[0] ? e : C == 3 ? -0 : 0)
                    }
                    g = q(g);
                    h = q(h);
                    i = i.slice();
                    if (f = g - h) {
                        (e = f < 0) ? (f = -f, d = i) : (h = g, d = l);
                        d.reverse();
                        for (c = f; c--; d.push(0));
                        d.reverse()
                    } else {
                        g = (e = (f = i.length) < (c = l.length)) ? f : c;
                        for (f = c = 0; c < g; c++)
                            if (i[c] != l[c]) {
                                e = i[c] < l[c];
                                break
                            }
                    }
                    e && (d = i, i = l, l = d, b.s = -b.s);
                    c = (g = l.length) - (e = i.length);
                    if (c > 0)
                        for (; c--; i[e++] = 0);
                    c = j - 1;
                    for (; g > f;) {
                        if (i[--g] < l[g]) {
                            for (e = g; e && !i[--e]; i[e] = c);
                            --i[e];
                            i[g] += j
                        }
                        i[g] -= l[g]
                    }
                    for (; i[0] == 0; i.splice(0, 1), --h);
                    if (!i[0]) {
                        b.s = C == 3 ? -1 : 1;
                        b.c = [b.e = 0];
                        return b
                    }
                    return O(b, i, h)
                };
                z.modulo = z.mod = function(b, c) {
                    var d, e = this;
                    b = new a(b, c);
                    if (!e.c || !b.s || b.c && !b.c[0]) return new a(NaN);
                    else if (!b.c || e.c && !e.c[0]) return new a(e);
                    I == 9 ? (c = b.s, b.s = 1, d = g(e, b, 0, 3), b.s = c, d.s *= c) : d = g(e, b, 0, I);
                    b = e.minus(d.times(b));
                    !b.c[0] && I == 1 && (b.s = e.s);
                    return b
                };
                z.multipliedBy = z.times = function(b, c) {
                    var d, e, f, g, h, i, l, m, o, p, r, s, t, u = this,
                        v = u.c;
                    c = (b = new a(b, c)).c;
                    if (!v || !c || !v[0] || !c[0]) {
                        !u.s || !b.s || v && !v[0] && !c || c && !c[0] && !v ? b.c = b.e = b.s = null : (b.s *= u.s, !v || !c ? b.c = b.e = null : (b.c = [0], b.e = 0));
                        return b
                    }
                    e = q(u.e / k) + q(b.e / k);
                    b.s *= u.s;
                    u = v.length;
                    o = c.length;
                    u < o && (r = v, v = c, c = r, f = u, u = o, o = f);
                    for (f = u + o, r = []; f--; r.push(0));
                    s = j;
                    t = n;
                    for (f = o; --f >= 0;) {
                        d = 0;
                        o = c[f] % t;
                        p = c[f] / t | 0;
                        for (h = u, g = f + h; g > f;) l = v[--h] % t, m = v[h] / t | 0, i = p * l + m * o, l = o * l + i % t * t + r[g] + d, d = (l / s | 0) + (i / t | 0) + p * m, r[g--] = l % s;
                        r[g] = d
                    }
                    d ? ++e : r.splice(0, 1);
                    return O(b, r, e)
                };
                z.negated = function() {
                    var b = new a(this);
                    b.s = -b.s || null;
                    return b
                };
                z.plus = function(b, c) {
                    var d = this,
                        e = d.s;
                    b = new a(b, c);
                    c = b.s;
                    if (!e || !c) return new a(NaN);
                    if (e != c) {
                        b.s = -c;
                        return d.minus(b)
                    }
                    var f = d.e / k,
                        g = b.e / k,
                        h = d.c,
                        i = b.c;
                    if (!f || !g) {
                        if (!h || !i) return new a(e / 0);
                        if (!h[0] || !i[0]) return i[0] ? b : new a(h[0] ? d : e * 0)
                    }
                    f = q(f);
                    g = q(g);
                    h = h.slice();
                    if (e = f - g) {
                        e > 0 ? (g = f, d = i) : (e = -e, d = h);
                        d.reverse();
                        for (; e--; d.push(0));
                        d.reverse()
                    }
                    e = h.length;
                    c = i.length;
                    e - c < 0 && (d = i, i = h, h = d, c = e);
                    for (e = 0; c;) e = (h[--c] = h[c] + i[c] + e) / j | 0, h[c] = j === h[c] ? 0 : h[c] % j;
                    e && (h = [e].concat(h), ++g);
                    return O(b, h, g)
                };
                z.precision = z.sd = function(b, c) {
                    var d, e, f = this;
                    if (b != null && b !== !!b) {
                        t(b, 1, o);
                        c == null ? c = C : t(c, 0, 8);
                        return P(new a(f), b, c)
                    }
                    if (!(c = f.c)) return null;
                    e = c.length - 1;
                    d = e * k + 1;
                    if (e = c[e]) {
                        for (; e % 10 == 0; e /= 10, d--);
                        for (e = c[0]; e >= 10; e /= 10, d++);
                    }
                    b && f.e + 1 > d && (d = f.e + 1);
                    return d
                };
                z.shiftedBy = function(a) {
                    t(a, -l, l);
                    return this.times("1e" + a)
                };
                z.squareRoot = z.sqrt = function() {
                    var b, c, d, e, f = this,
                        h = f.c,
                        i = f.s,
                        j = f.e,
                        k = B + 4,
                        l = new a("0.5");
                    if (i !== 1 || !h || !h[0]) return new a(!i || i < 0 && (!h || h[0]) ? NaN : h ? f : 1 / 0);
                    i = Math.sqrt(+f);
                    i == 0 || i == 1 / 0 ? (h = r(h), (h.length + j) % 2 == 0 && (h += "0"), i = Math.sqrt(h), j = q((j + 1) / 2) - (j < 0 || j % 2), i == 1 / 0 ? h = "1e" + j : (h = i.toExponential(), h = h.slice(0, h.indexOf("e") + 1) + j), c = new a(h)) : c = new a(i + "");
                    if (c.c[0]) {
                        j = c.e;
                        i = j + k;
                        i < 3 && (i = 0);
                        for (;;) {
                            e = c;
                            c = l.times(e.plus(g(f, e, k, 1)));
                            if (r(e.c).slice(0, i) === (h = r(c.c)).slice(0, i)) {
                                c.e < j && --i;
                                h = h.slice(i - 3, i + 1);
                                if (h == "9999" || !d && h == "4999") {
                                    if (!d) {
                                        P(e, e.e + B + 2, 0);
                                        if (e.times(e).eq(f)) {
                                            c = e;
                                            break
                                        }
                                    }
                                    k += 4;
                                    i += 4;
                                    d = 1
                                } else {
                                    (!+h || !+h.slice(1) && h.charAt(0) == "5") && (P(c, c.e + B + 2, 1), b = !c.times(c).eq(f));
                                    break
                                }
                            }
                        }
                    }
                    return P(c, c.e + B + 1, C, b)
                };
                z.toExponential = function(a, b) {
                    a != null && (t(a, 0, o), a++);
                    return M(this, a, b, 1)
                };
                z.toFixed = function(a, b) {
                    a != null && (t(a, 0, o), a = a + this.e + 1);
                    return M(this, a, b)
                };
                z.toFormat = function(a, b) {
                    a = this.toFixed(a, b);
                    if (this.c) {
                        var c;
                        b = a.split(".");
                        var d = +K.groupSize,
                            e = +K.secondaryGroupSize,
                            f = K.groupSeparator,
                            g = b[0];
                        b = b[1];
                        var h = this.s < 0,
                            i = h ? g.slice(1) : g,
                            j = i.length;
                        e && (c = d, d = e, e = c, j -= c);
                        if (d > 0 && j > 0) {
                            c = j % d || d;
                            g = i.substr(0, c);
                            for (; c < j; c += d) g += f + i.substr(c, d);
                            e > 0 && (g += f + i.slice(c));
                            h && (g = "-" + g)
                        }
                        a = b ? g + K.decimalSeparator + ((e = +K.fractionGroupSize) ? b.replace(new RegExp("\\d{" + e + "}\\B", "g"), "$&" + K.fractionGroupSeparator) : b) : g
                    }
                    return a
                };
                z.toFraction = function(b) {
                    var c, d, e, h, i, j, l, n, o, p = this,
                        q = p.c;
                    if (b != null) {
                        l = new a(b);
                        if (!l.isInteger() && (l.c || l.s !== 1) || l.lt(A)) throw Error(f + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + b)
                    }
                    if (!q) return p.toString();
                    c = new a(A);
                    o = d = new a(A);
                    e = n = new a(A);
                    q = r(q);
                    i = c.e = q.length - p.e - 1;
                    c.c[0] = m[(j = i % k) < 0 ? k + j : j];
                    b = !b || l.comparedTo(c) > 0 ? i > 0 ? c : o : l;
                    j = G;
                    G = 1 / 0;
                    l = new a(q);
                    n.c[0] = 0;
                    for (;;) {
                        q = g(l, c, 0, 1);
                        h = d.plus(q.times(e));
                        if (h.comparedTo(b) == 1) break;
                        d = e;
                        e = h;
                        o = n.plus(q.times(h = o));
                        n = h;
                        c = l.minus(q.times(h = c));
                        l = h
                    }
                    h = g(b.minus(d), e, 0, 1);
                    n = n.plus(h.times(o));
                    d = d.plus(h.times(e));
                    n.s = o.s = p.s;
                    i *= 2;
                    q = g(o, e, i, C).minus(p).abs().comparedTo(g(n, d, i, C).minus(p).abs()) < 1 ? [o.toString(), e.toString()] : [n.toString(), d.toString()];
                    G = j;
                    return q
                };
                z.toNumber = function() {
                    return +this
                };
                z.toPrecision = function(a, b) {
                    a != null && t(a, 1, o);
                    return M(this, a, b, 2)
                };
                z.toString = function(a) {
                    var b, c = this,
                        d = c.s,
                        e = c.e;
                    e === null ? d ? (b = "Infinity", d < 0 && (b = "-" + b)) : b = "NaN" : (b = r(c.c), a == null ? b = e <= D || e >= E ? w(b, e) : x(b, e, "0") : (t(a, 2, L.length, "Base"), b = h(x(b, e, "0"), 10, a, d, !0)), d < 0 && c.c[0] && (b = "-" + b));
                    return b
                };
                z.valueOf = z.toJSON = function() {
                    var a, b = this,
                        c = b.e;
                    if (c === null) return b.toString();
                    a = r(b.c);
                    a = c <= D || c >= E ? w(a, c) : x(a, c, "0");
                    return b.s < 0 ? "-" + a : a
                };
                z._isBigNumber = !0;
                b != null && a.set(b);
                return a
            }

            function q(a) {
                var b = a | 0;
                return a > 0 || a === b ? b : b - 1
            }

            function r(a) {
                var b, c, d = 1,
                    e = a.length,
                    f = a[0] + "";
                for (; d < e;) {
                    b = a[d++] + "";
                    c = k - b.length;
                    for (; c--; b = "0" + b);
                    f += b
                }
                for (e = f.length; f.charCodeAt(--e) === 48;);
                return f.slice(0, e + 1 || 1)
            }

            function s(a, b) {
                var c, d, e = a.c,
                    f = b.c,
                    g = a.s,
                    h = b.s;
                a = a.e;
                b = b.e;
                if (!g || !h) return null;
                c = e && !e[0];
                d = f && !f[0];
                if (c || d) return c ? d ? 0 : -h : g;
                if (g != h) return g;
                c = g < 0;
                d = a == b;
                if (!e || !f) return d ? 0 : !e ^ c ? 1 : -1;
                if (!d) return a > b ^ c ? 1 : -1;
                h = (a = e.length) < (b = f.length) ? a : b;
                for (g = 0; g < h; g++)
                    if (e[g] != f[g]) return e[g] > f[g] ^ c ? 1 : -1;
                return a == b ? 0 : a > b ^ c ? 1 : -1
            }

            function t(a, b, c, g) {
                if (a < b || a > c || a !== (a < 0 ? d(a) : e(a))) throw Error(f + (g || "Argument") + (typeof a == "number" ? a < b || a > c ? " out of range: " : " not an integer: " : " not a primitive number: ") + a)
            }

            function u(a) {
                return Object.prototype.toString.call(a) == "[object Array]"
            }

            function v(a) {
                var b = a.c.length - 1;
                return q(a.e / k) == b && a.c[b] % 2 != 0
            }

            function w(a, b) {
                return (a.length > 1 ? a.charAt(0) + "." + a.slice(1) : a) + (b < 0 ? "e" : "e+") + b
            }

            function x(a, b, c) {
                var d, e;
                if (b < 0) {
                    for (e = c + "."; ++b; e += c);
                    a = e + a
                } else {
                    d = a.length;
                    if (++b > d) {
                        for (e = c, b -= d; --b; e += c);
                        a += e
                    } else b < d && (a = a.slice(0, b) + "." + a.slice(b))
                }
                return a
            }
            b = p();
            b["default"] = b.BigNumber = b;
            typeof h == "function" && h.amd ? h(function() {
                return b
            }) : typeof g != "undefined" && g.exports ? g.exports = b : (a || (a = typeof self != "undefined" && self ? self : window), a.BigNumber = b)
        })(this)
    }
    var j = !1;

    function k() {
        j || (j = !0, i());
        return g.exports
    }

    function a(a) {
        switch (a) {
            case void 0:
                return k()
        }
    }
    e.exports = a
}), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("json-bigint-0.3.0", ["bignumber-js-7.2.1"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a && typeof a === "object" && "default" in a ? a["default"] : a
    }
    var g = a(b("bignumber-js-7.2.1"));
    d = {};
    var h = {
        exports: d
    };

    function i() {
        var a = g(),
            b = h.exports;
        (function() {
            var c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                d, e, f = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                g;

            function h(a) {
                c.lastIndex = 0;
                return c.test(a) ? '"' + a.replace(c, function(a) {
                    var b = f[a];
                    return typeof b === "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }

            function i(b, c) {
                var f, j = d,
                    k, l = c[b],
                    m = l != null && (l instanceof a || a.isBigNumber(l));
                l && typeof l === "object" && typeof l.toJSON === "function" && (l = l.toJSON(b));
                typeof g === "function" && (l = g.call(c, b, l));
                switch (typeof l) {
                    case "string":
                        if (m) return l;
                        else return h(l);
                    case "number":
                        return isFinite(l) ? String(l) : "null";
                    case "boolean":
                    case "null":
                        return String(l);
                    case "object":
                        if (!l) return "null";
                        d += e;
                        k = [];
                        if (Object.prototype.toString.apply(l) === "[object Array]") {
                            c = l.length;
                            for (b = 0; b < c; b += 1) k[b] = i(b, l) || "null";
                            m = k.length === 0 ? "[]" : d ? "[\n" + d + k.join(",\n" + d) + "\n" + j + "]" : "[" + k.join(",") + "]";
                            d = j;
                            return m
                        }
                        if (g && typeof g === "object") {
                            c = g.length;
                            for (b = 0; b < c; b += 1) typeof g[b] === "string" && (f = g[b], m = i(f, l), m && k.push(h(f) + (d ? ": " : ":") + m))
                        } else Object.keys(l).forEach(function(a) {
                            var b = i(a, l);
                            b && k.push(h(a) + (d ? ": " : ":") + b)
                        });
                        m = k.length === 0 ? "{}" : d ? "{\n" + d + k.join(",\n" + d) + "\n" + j + "}" : "{" + k.join(",") + "}";
                        d = j;
                        return m
                }
            }
            typeof b.stringify !== "function" && (b.stringify = function(a, b, c) {
                var f;
                d = "";
                e = "";
                if (typeof c === "number")
                    for (f = 0; f < c; f += 1) e += " ";
                else typeof c === "string" && (e = c);
                g = b;
                if (b && typeof b !== "function" && (typeof b !== "object" || typeof b.length !== "number")) throw new Error("JSON.stringify");
                return i("", {
                    "": a
                })
            })
        })()
    }
    var j = !1;

    function k() {
        j || (j = !0, i());
        return h.exports
    }
    f = {};
    var l = {
        exports: f
    };

    function m() {
        var a = null,
            b = function(b) {
                var c = {
                    strict: !1,
                    storeAsString: !1
                };
                b !== void 0 && b !== null && (b.strict === !0 && (c.strict = !0), b.storeAsString === !0 && (c.storeAsString = !0));
                var d, e, f = {
                        '"': '"',
                        "\\": "\\",
                        "/": "/",
                        b: "\b",
                        f: "\f",
                        n: "\n",
                        r: "\r",
                        t: "\t"
                    },
                    h, i = function(a) {
                        throw {
                            name: "SyntaxError",
                            message: a,
                            at: d,
                            text: h
                        }
                    },
                    j = function(a) {
                        a && a !== e && i("Expected '" + a + "' instead of '" + e + "'");
                        e = h.charAt(d);
                        d += 1;
                        return e
                    },
                    k = function() {
                        var b, d = "";
                        e === "-" && (d = "-", j("-"));
                        while (e >= "0" && e <= "9") d += e, j();
                        if (e === ".") {
                            d += ".";
                            while (j() && e >= "0" && e <= "9") d += e
                        }
                        if (e === "e" || e === "E") {
                            d += e;
                            j();
                            (e === "-" || e === "+") && (d += e, j());
                            while (e >= "0" && e <= "9") d += e, j()
                        }
                        b = +d;
                        if (!isFinite(b)) i("Bad number");
                        else {
                            a == null && (a = g());
                            return d.length > 15 ? c.storeAsString === !0 ? d : new a(d) : b
                        }
                    },
                    l = function() {
                        var b, c, a = "",
                            d;
                        if (e === '"')
                            while (j()) {
                                if (e === '"') {
                                    j();
                                    return a
                                }
                                if (e === "\\") {
                                    j();
                                    if (e === "u") {
                                        d = 0;
                                        for (c = 0; c < 4; c += 1) {
                                            b = parseInt(j(), 16);
                                            if (!isFinite(b)) break;
                                            d = d * 16 + b
                                        }
                                        a += String.fromCharCode(d)
                                    } else if (typeof f[e] === "string") a += f[e];
                                    else break
                                } else a += e
                            }
                        i("Bad string")
                    },
                    m = function() {
                        while (e && e <= " ") j()
                    },
                    n = function() {
                        switch (e) {
                            case "t":
                                j("t");
                                j("r");
                                j("u");
                                j("e");
                                return !0;
                            case "f":
                                j("f");
                                j("a");
                                j("l");
                                j("s");
                                j("e");
                                return !1;
                            case "n":
                                j("n");
                                j("u");
                                j("l");
                                j("l");
                                return null
                        }
                        i("Unexpected '" + e + "'")
                    },
                    o, p = function() {
                        var a = [];
                        if (e === "[") {
                            j("[");
                            m();
                            if (e === "]") {
                                j("]");
                                return a
                            }
                            while (e) {
                                a.push(o());
                                m();
                                if (e === "]") {
                                    j("]");
                                    return a
                                }
                                j(",");
                                m()
                            }
                        }
                        i("Bad array")
                    },
                    q = function() {
                        var b, a = {};
                        if (e === "{") {
                            j("{");
                            m();
                            if (e === "}") {
                                j("}");
                                return a
                            }
                            while (e) {
                                b = l();
                                m();
                                j(":");
                                c.strict === !0 && Object.hasOwnProperty.call(a, b) && i('Duplicate key "' + b + '"');
                                a[b] = o();
                                m();
                                if (e === "}") {
                                    j("}");
                                    return a
                                }
                                j(",");
                                m()
                            }
                        }
                        i("Bad object")
                    };
                o = function() {
                    m();
                    switch (e) {
                        case "{":
                            return q();
                        case "[":
                            return p();
                        case '"':
                            return l();
                        case "-":
                            return k();
                        default:
                            return e >= "0" && e <= "9" ? k() : n()
                    }
                };
                return function(a, b) {
                    h = a + "";
                    d = 0;
                    e = " ";
                    a = o();
                    m();
                    e && i("Syntax error");
                    return typeof b === "function" ? function a(d, e) {
                        var f, c = d[e];
                        c && typeof c === "object" && Object.keys(c).forEach(function(b) {
                            f = a(c, b), f !== void 0 ? c[b] = f : delete c[b]
                        });
                        return b.call(d, e, c)
                    }({
                        "": a
                    }, "") : a
                }
            };
        l.exports = b
    }
    var n = !1;

    function o() {
        n || (n = !0, m());
        return l.exports
    }
    a = {};
    var p = {
        exports: a
    };

    function q() {
        var a = k().stringify,
            b = o();
        p.exports = function(c) {
            return {
                parse: b(c),
                stringify: a
            }
        };
        p.exports.parse = b();
        p.exports.stringify = a
    }
    var r = !1;

    function s() {
        r || (r = !0, q());
        return p.exports
    }

    function c(a) {
        switch (a) {
            case void 0:
                return s()
        }
    }
    e.exports = c
}), null);
__d("json-bigint", ["json-bigint-0.3.0"], (function(a, b, c, d, e, f) {
    e.exports = b("json-bigint-0.3.0")()
}), null);