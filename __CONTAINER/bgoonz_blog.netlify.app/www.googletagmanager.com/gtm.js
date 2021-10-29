// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "4",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [{
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_autoLinkDomains": ["template", ["macro", 1],
                    ["macro", 1]
                ],
                "vtp_trackingId": ["macro", 2],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 3
            }, {
                "function": "__html",
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _smartsupp=_smartsupp||{};_smartsupp.key=\"d80a99a57a43d9ecbb6c5b86f2ae419b8f6c47ca\";window.smartsupp||function(a){var b=smartsupp=function(){b._.push(arguments)};b._=[];var c=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.charset=\"utf-8\";a.async=!0;a.src=\"https:\/\/www.smartsuppchat.com\/loader.js?\";c.parentNode.insertBefore(a,c)}(document);\u003C\/script\u003E\n",
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 5
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.__lc=window.__lc||{};window.__lc.license=13199361;\n(function(e,f,c){function d(a){return b._h?b._h.apply(null,a):b._q.push(a)}var b={_q:[],_h:null,_v:\"2.0\",on:function(){d([\"on\",c.call(arguments)])},once:function(){d([\"once\",c.call(arguments)])},off:function(){d([\"off\",c.call(arguments)])},get:function(){if(!b._h)throw Error(\"[LiveChatWidget] You can't use getters before load.\");return d([\"get\",c.call(arguments)])},call:function(){d([\"call\",c.call(arguments)])},init:function(){var a=f.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=\n\"https:\/\/cdn.livechatinc.com\/tracking.js\";f.head.appendChild(a)}};!e.__lc.asyncInit\u0026\u0026b.init();e.LiveChatWidget=e.LiveChatWidget||b})(window,document,[].slice);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Ca href=\"https:\/\/www.livechatinc.com\/chat-with\/13199361\/\" rel=\"nofollow\"\u003EChat with us\u003C\/a\u003E, powered by \u003Ca href=\"https:\/\/www.livechatinc.com\/?welcome\" rel=\"noopener nofollow\" target=\"_blank\"\u003ELiveChat\u003C\/a\u003E\u003C\/noscript\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 6
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1, 2]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {}
            fa = !1
        }
        ca = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ca,
        la = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Gj = b.prototype
        },
        ma = this || self,
        na = function(a) {
            return a
        };
    var oa = function() {},
        qa = function(a) {
            return "function" == typeof a
        },
        ra = function(a) {
            return "string" == typeof a
        },
        sa = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        ta = Array.isArray,
        ua = function(a, b) {
            if (a && ta(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        va = function(a, b) {
            if (!sa(a) || !sa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        xa = function(a, b) {
            for (var c = new wa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        ya = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        za = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ca = function(a) {
            return Math.round(Number(a)) || 0
        },
        Da = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Ea = function(a) {
            var b = [];
            if (ta(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Fa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ia = function() {
            return new Date(Date.now())
        },
        La = function() {
            return Ia().getTime()
        },
        wa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    wa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    wa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ma = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Pa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Qa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ra = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Sa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ta = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ua = /^\w{1,9}$/,
        Va = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            ya(a, function(d, e) {
                Ua.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    var Wa, Xa = function() {
        if (void 0 === Wa) {
            var a = null,
                b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                Wa = a
            } else Wa = a
        }
        return Wa
    };
    var Za = function(a, b) {
        this.m = b === Ya ? a : ""
    };
    Za.prototype.toString = function() {
        return this.m + ""
    };
    var Ya = {},
        $a = function(a) {
            var b = Xa(),
                c = b ? b.createScriptURL(a) : a;
            return new Za(c, Ya)
        };
    var ab = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var bb;
    a: {
        var cb = ma.navigator;
        if (cb) {
            var db = cb.userAgent;
            if (db) {
                bb = db;
                break a
            }
        }
        bb = ""
    }

    function eb(a) {
        return -1 != bb.indexOf(a)
    };
    var ib = {},
        jb = function(a, b, c) {
            this.m = c === ib ? a : ""
        };
    jb.prototype.toString = function() {
        return this.m.toString()
    };
    var kb = function(a) {
            return a instanceof jb && a.constructor === jb ? a.m : "type_error:SafeHtml"
        },
        lb = function(a) {
            var b = Xa(),
                c = b ? b.createHTML(a) : a;
            return new jb(c, null, ib)
        },
        mb = new jb(ma.trustedTypes && ma.trustedTypes.emptyHTML || "", 0, ib);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function ob(a, b) {
        a.src = b instanceof Za && b.constructor === Za ? b.m : "type_error:TrustedResourceUrl";
        var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var pb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        qb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var rb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = kb(mb);
        return !c.parentElement
    });
    var l = window,
        B = document,
        sb = navigator,
        tb = B.currentScript && B.currentScript.src,
        ub = function(a, b) {
            var c = l[a];
            l[a] = void 0 === c ? b : c;
            return l[a]
        },
        vb = function(a) {
            var b = B.getElementsByTagName("script")[0] || B.body || B.head;
            b.parentNode.insertBefore(a, b)
        },
        wb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        xb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        yb = function(a, b, c, d) {
            var e = B.createElement("script");
            d && ya(d, function(f, g) {
                f = f.toLowerCase();
                xb.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            ob(e, $a(a));
            wb(e, b);
            c && (e.onerror = c);
            vb(e);
            return e
        },
        zb = function() {
            if (tb) {
                var a = tb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Ab = function(a, b) {
            var c = B.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = B.body && B.body.lastChild || B.body || B.head;
            d.parentNode.insertBefore(c,
                d);
            wb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Bb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Cb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Db = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            l.setTimeout(a, 0)
        },
        Eb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        },
        Fb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Gb = function(a) {
            var b = B.createElement("div"),
                c = lb("A<div>" + a + "</div>"),
                d = b;
            if (rb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = kb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Hb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Ib = function(a) {
            var b;
            try {
                b = sb.sendBeacon && sb.sendBeacon(a)
            } catch (c) {}
            b || Bb(a)
        },
        Jb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Kb = function(a) {
            var b = B.featurePolicy;
            return b && qa(b.features) ? -1 !== b.features().indexOf(a) : !1
        },
        Lb = function() {
            return sb.userLanguage || sb.language
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Nb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ob = function(a) {
            if (null == a) return String(a);
            var b = Nb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Pb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Qb = function(a) {
            if (!a || "object" != Ob(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Pb(a, "constructor") && !Pb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Pb(a, b)
        },
        H = function(a, b) {
            var c = b || ("array" == Ob(a) ? [] : {}),
                d;
            for (d in a)
                if (Pb(a, d)) {
                    var e = a[d];
                    "array" == Ob(e) ? ("array" != Ob(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : Qb(e) ? (Qb(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e
                }
            return c
        };
    var Rb = function(a) {
        if (void 0 === a || ta(a) || Qb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Sb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Wg: a("consent"),
            Xg: a("consent_always_fire"),
            Ye: a("convert_case_to"),
            Ze: a("convert_false_to"),
            $e: a("convert_null_to"),
            af: a("convert_true_to"),
            bf: a("convert_undefined_to"),
            sj: a("debug_mode_metadata"),
            tj: a("event_data_overrides"),
            qb: a("function"),
            Hh: a("instance_name"),
            Lh: a("live_only"),
            Mh: a("malware_disabled"),
            Nh: a("metadata"),
            uj: a("original_activity_id"),
            vj: a("original_vendor_template_id"),
            Rh: a("once_per_event"),
            Jf: a("once_per_load"),
            xj: a("priority_override"),
            yj: a("respected_consent_types"),
            Nf: a("setup_tags"),
            Pf: a("tag_id"),
            Qf: a("teardown_tags")
        }
    }();
    var sc;
    var zc = [],
        Ac = [],
        Bc = [],
        Cc = [],
        Dc = [],
        Ec = {},
        Fc, Gc, Hc, Ic = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = Ec[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_")) d && b && b.ag && b.ag(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f];
                    else if (f === Sb.Xg.toString() && a[f]) {}
            d && b && b.$f && (e.vtp_gtmCachedValues = b.$f);
            return void 0 !== d ? d(e) : sc(c, e, b)
        },
        Kc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Jc(a[e], b, c));
            return d
        },
        Jc = function(a, b, c) {
            if (ta(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Jc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = zc[f];
                        if (!g || b.Ge(g)) return;
                        c[f] = !0;
                        try {
                            var k = Kc(g, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Ic(k, b);
                            Hc && (d = Hc.ei(d, k))
                        } catch (z) {
                            b.rg && b.rg(z, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var m = 1; m < a.length; m += 2) d[Jc(a[m], b, c)] = Jc(a[m + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = Jc(a[p], b, c);
                            Gc && (n = n || r === Gc.$c);
                            d.push(r)
                        }
                        return Gc && n ? Gc.ii(d) : d.join("");
                    case "escape":
                        d = Jc(a[1], b, c);
                        if (Gc && ta(a[1]) && "macro" === a[1][0] && Gc.Hi(a)) return Gc.Wi(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Tb[a[u]] && (d = Tb[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!Cc[t]) throw Error("Unable to resolve tag reference " +
                            t + ".");
                        return d = {
                            hg: a[2],
                            index: t
                        };
                    case "zb":
                        var q = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        q["function"] = a[1];
                        var v = Lc(q, b, c),
                            x = !!a[4];
                        return x || 2 !== v ? x !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Lc = function(a, b, c) {
            try {
                return Fc(Kc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Oc = function(a) {
            function b(u) {
                for (var t = 0; t < u.length; t++) d[u[t]] = !0
            }
            for (var c = [], d = [], e = Mc(a), f = 0; f < Ac.length; f++) {
                var g = Ac[f],
                    k = Nc(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === k && b(g.block || []);
            }
            for (var p = [], r = 0; r < Cc.length; r++) c[r] && !d[r] && (p[r] = !0);
            return p
        },
        Nc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        Mc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Lc(Bc[c], a));
                return b[c]
            }
        };
    var Pc = {
        ei: function(a, b) {
            b[Sb.Ye] && "string" === typeof a && (a = 1 == b[Sb.Ye] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Sb.$e) && null === a && (a = b[Sb.$e]);
            b.hasOwnProperty(Sb.bf) && void 0 === a && (a = b[Sb.bf]);
            b.hasOwnProperty(Sb.af) && !0 === a && (a = b[Sb.af]);
            b.hasOwnProperty(Sb.Ze) && !1 === a && (a = b[Sb.Ze]);
            return a
        }
    };
    var N = {
        ic: "_ee",
        fd: "_syn_or_mod",
        zj: "_uei",
        ae: "_eu",
        wj: "_pci",
        Hb: "event_callback",
        Pc: "event_timeout",
        Aa: "gtag.config",
        Ia: "gtag.get",
        va: "purchase",
        Eb: "refund",
        ib: "begin_checkout",
        Cb: "add_to_cart",
        Db: "remove_from_cart",
        gh: "view_cart",
        df: "add_to_wishlist",
        wa: "view_item",
        jb: "view_promotion",
        Lc: "select_promotion",
        Ed: "select_item",
        Ua: "view_item_list",
        cf: "add_payment_info",
        fh: "add_shipping_info",
        Ka: "value_key",
        Wa: "value_callback",
        Ba: "allow_ad_personalization_signals",
        bc: "restricted_data_processing",
        Xb: "allow_google_signals",
        na: "cookie_expires",
        Gb: "cookie_update",
        cc: "session_duration",
        Vc: "session_engaged_time",
        Ma: "user_properties",
        qa: "transport_url",
        R: "ads_data_redaction",
        xa: "user_data",
        $b: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        We: "region",
        Xe: "wait_for_update",
        ma: "conversion_linker",
        Ca: "conversion_cookie_prefix",
        ca: "value",
        aa: "currency",
        Ff: "trip_type",
        V: "items",
        xf: "passengers",
        Hd: "allow_custom_scripts",
        fc: "session_id",
        Cf: "quantity",
        Ya: "transaction_id",
        mb: "language",
        Nc: "country",
        Mc: "allow_enhanced_conversions",
        Md: "aw_merchant_id",
        Kd: "aw_feed_country",
        Ld: "aw_feed_language",
        Jd: "discount",
        ba: "developer_id",
        Wc: "delivery_postal_code",
        Sd: "estimated_delivery_date",
        Qd: "shipping",
        Xd: "new_customer",
        Nd: "customer_lifetime_value",
        Rd: "enhanced_conversions",
        Wb: "page_view",
        fa: "linker",
        N: "domains",
        Kb: "decorate_forms",
        tf: "enhanced_conversions_automatic_settings",
        ph: "auto_detection_enabled",
        uf: "ga_temp_client_id",
        Fd: "user_engagement",
        $g: "app_remove",
        ah: "app_store_refund",
        bh: "app_store_subscription_cancel",
        dh: "app_store_subscription_convert",
        eh: "app_store_subscription_renew",
        hh: "first_open",
        ih: "first_visit",
        jh: "in_app_purchase",
        kh: "session_start",
        lh: "user_data_login",
        mh: "user_data_logout",
        nh: "allow_display_features",
        Yb: "campaign",
        ff: "campaign_content",
        hf: "campaign_id",
        jf: "campaign_medium",
        kf: "campaign_name",
        lf: "campaign_source",
        nf: "campaign_term",
        kb: "client_id",
        da: "cookie_domain",
        Fb: "cookie_name",
        Va: "cookie_path",
        Da: "cookie_flags",
        Zb: "custom_map",
        Ud: "groups",
        wf: "non_interaction",
        nb: "page_location",
        Yd: "page_path",
        La: "page_referrer",
        Tc: "page_title",
        Lb: "send_page_view",
        ob: "send_to",
        Zd: "session_engaged",
        Sc: "_logged_in_state",
        $d: "session_number",
        Dh: "tracking_id",
        Za: "url_passthrough",
        Jb: "accept_incoming",
        ac: "url_position",
        Af: "phone_conversion_number",
        yf: "phone_conversion_callback",
        zf: "phone_conversion_css_class",
        Bf: "phone_conversion_options",
        Ah: "phone_conversion_ids",
        zh: "phone_conversion_country_code",
        ef: "aw_remarketing",
        Id: "aw_remarketing_only",
        Gd: "gclid",
        oh: "auid",
        uh: "affiliation",
        sf: "tax",
        Pd: "list_name",
        rf: "checkout_step",
        qf: "checkout_option",
        vh: "coupon",
        wh: "promotions",
        pb: "user_id",
        Bh: "retoken",
        oa: "cookie_prefix",
        pf: "disable_merchant_reported_purchases",
        th: "dc_natural_search",
        sh: "dc_custom_params",
        vf: "method",
        Ch: "search_term",
        rh: "content_type",
        yh: "optimize_id",
        xh: "experiments",
        Xa: "google_signals",
        Rc: "google_tld",
        Xc: "update",
        Td: "firebase_id",
        Ib: "ga_restrict_domain",
        Oc: "event_settings",
        Od: "dynamic_event_settings",
        hc: "user_data_settings",
        Df: "screen_name",
        Ja: "_x_19",
        lb: "_ecid",
        Qc: "_x_20",
        Wd: "internal_traffic_results",
        Ef: "traffic_type",
        Uc: "referral_exclusion_definition",
        Vd: "ignore_referrer",
        qh: "content_group"
    };
    var vd = {};
    N.Hf = Object.freeze((vd[N.cf] = 1, vd[N.fh] = 1, vd[N.Cb] = 1, vd[N.Db] = 1, vd[N.gh] = 1, vd[N.ib] = 1, vd[N.Ed] = 1, vd[N.Ua] = 1, vd[N.Lc] = 1, vd[N.jb] = 1, vd[N.va] = 1, vd[N.Eb] = 1, vd[N.wa] = 1, vd[N.df] = 1, vd));
    N.ce = Object.freeze([N.Ba, N.Xb, N.Gb]);
    N.Ph = Object.freeze([].concat(N.ce));
    N.de = Object.freeze([N.na, N.Pc, N.cc, N.Vc]);
    N.Qh = Object.freeze([].concat(N.de));
    var xd = {},
        yd = function(a, b) {
            xd[a] = xd[a] || [];
            xd[a][b] = !0
        },
        zd = function(a) {
            for (var b = [], c = xd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Ad = function(a) {
        yd("GTM", a)
    };
    var Bd = {},
        P = null,
        Cd = Math.random();
    Bd.J = "GTM-5S5XXNR";
    Bd.dd = "ar0";
    Bd.Zg = "ChEI8JTpiwYQu7+S/vWSwLXPARIkANDEKqy2kHR2lh99f7ugbr4ekhdpaJV6A/kKq1F+0I+/RiEeGgKGxw\x3d\x3d";
    var Dd = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Ed = {
            __paused: !0,
            __tg: !0
        },
        Fd;
    for (Fd in Dd) Dd.hasOwnProperty(Fd) && (Ed[Fd] = !0);
    Bd.Cd = "www.googletagmanager.com";
    var Gd = Bd.Cd + "/gtm.js";
    var Hd = Gd,
        Id = Da(""),
        Jd = null,
        Kd = null,
        Ld = "https://www.googletagmanager.com/a?id=" + Bd.J + "&cv=4",
        Sd = {},
        Td = {},
        Ud = function() {
            var a = P.sequence || 1;
            P.sequence = a + 1;
            return a
        };
    Bd.Yg = "";
    var Vd = "";
    Bd.ed = Vd;
    var Wd = {},
        Xd = new wa,
        Yd = {},
        Zd = {},
        be = {
            name: "dataLayer",
            set: function(a, b) {
                H(Ta(a, b), Yd);
                $d()
            },
            get: function(a) {
                return ae(a, 2)
            },
            reset: function() {
                Xd = new wa;
                Yd = {};
                $d()
            }
        },
        ae = function(a, b) {
            return 2 != b ? Xd.get(a) : ce(a)
        },
        ce = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Yd, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        de = function(a, b) {
            Zd.hasOwnProperty(a) || (Xd.set(a, b), H(Ta(a, b), Yd), $d())
        },
        $d = function(a) {
            ya(Zd, function(b, c) {
                Xd.set(b, c);
                H(Ta(b,
                    void 0), Yd);
                H(Ta(b, c), Yd);
                a && delete Zd[b]
            })
        },
        fe = function(a, b, c) {
            Wd[a] = Wd[a] || {};
            Wd[a][b] = ee(b, c)
        },
        ee = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? ce(a) : Xd.get(a);
            "array" === Ob(d) || "object" === Ob(d) ? c = H(d) : c = d;
            return c
        },
        ge = function(a, b) {
            if (Wd[a]) return Wd[a][b]
        },
        he = function(a, b) {
            Wd[a] && delete Wd[a][b]
        };
    var ie = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        je = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        ke = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        le = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var me = function() {
            var a = !1;
            return a
        },
        oe = function(a) {
            var b = ae("gtm.allowlist") || ae("gtm.whitelist");
            b && Ad(9);
            me() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Sa(Ea(b), je),
                d = ae("gtm.blocklist") ||
                ae("gtm.blacklist");
            d || (d = ae("tagTypeBlacklist")) && Ad(3);
            d ? Ad(8) : d = [];
            ne() && (d = Ea(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ea(d).indexOf("google") && Ad(2);
            var e = d && Sa(Ea(d), ke),
                f = {};
            return function(g) {
                var k = g && g[Sb.qb];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = Td[k] || [],
                    n = a(k, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var r = 0; r < m.length; r++) {
                                    if (0 > c.indexOf(m[r])) {
                                        Ad(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var u = !1;
                if (d) {
                    var t = 0 <= e.indexOf(k);
                    if (t) u = t;
                    else {
                        var q = xa(e, m || []);
                        q && Ad(10);
                        u = q
                    }
                }
                var v = !n || u;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = xa(e, le));
                return f[k] = v
            }
        },
        ne = function() {
            return ie.test(l.location && l.location.hostname)
        };
    var pe = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        qe = function(a) {
            var b = P.zones;
            return b ? b.checkState(Bd.J, a) : pe
        },
        re = function(a) {
            var b = P.zones;
            !b && a && (b = P.zones = a());
            return b
        };
    var se = function(a) {
        this.m = a;
        this.defaultValue = !1
    };
    var te = new se(1933),
        ue = new se(1956);
    var we = function() {
        var a = ve,
            b = "Ee";
        if (a.Ee && a.hasOwnProperty(b)) return a.Ee;
        var c = new a;
        a.Ee = c;
        a.hasOwnProperty(b);
        return c
    };
    var ve = function() {
            var a = {};
            this.m = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.o = function() {
                a[te.m] = !0
            }
        },
        xe = function(a) {
            return we().m(a.m, a.defaultValue)
        };
    var ye = [];

    function ze() {
        var a = ub("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ae,
            update: Be,
            addListener: Ce,
            notifyListeners: De,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function Ae(a, b, c, d, e, f) {
        var g = ze();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries,
                m = k[a] || {},
                n = m.region,
                p = c && ra(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === m.update),
                    u = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: r
                    };
                if ("" !== d || !1 !== m.initial) k[a] = u;
                r && l.setTimeout(function() {
                    k[a] === u && u.quiet && (u.quiet = !1, Ee(a), De(), yd("TAGGING", 2))
                }, f)
            }
        }
    }

    function Be(a, b) {
        var c = ze();
        c.active = !0;
        if (void 0 != b) {
            var d = Fe(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Fe(a);
            f.quiet ? (f.quiet = !1, Ee(a)) : g !== d && Ee(a)
        }
    }

    function Ce(a, b) {
        ye.push({
            ve: a,
            ui: b
        })
    }

    function Ee(a) {
        for (var b = 0; b < ye.length; ++b) {
            var c = ye[b];
            ta(c.ve) && -1 !== c.ve.indexOf(a) && (c.xg = !0)
        }
    }

    function De(a) {
        for (var b = 0; b < ye.length; ++b) {
            var c = ye[b];
            if (c.xg) {
                c.xg = !1;
                try {
                    c.ui({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var Fe = function(a) {
            var b = ze().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        },
        Ge = function(a) {
            return (ze().entries[a] || {}).initial
        },
        He = function(a) {
            return !(ze().entries[a] || {}).quiet
        },
        Ie = function() {
            return xe(te) ? ze().active : !1
        },
        Je = function() {
            return ze().usedDefault
        },
        Ke = function(a, b) {
            ze().addListener(a, b)
        },
        Le = function(a) {
            ze().notifyListeners(a)
        },
        Me = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!He(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Ke(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Ne = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === Fe(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = ra(b) ? [b] : b,
                e = {};
            c().length !== d.length && Ke(d, function(f) {
                var g = c();
                0 < g.length && (f.ve = g, a(f))
            })
        };

    function Ve() {}

    function We() {};

    function Xe(a) {
        for (var b = [], c = 0; c < Ye.length; c++) {
            var d = a(Ye[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Ye = [N.C, N.H],
        Ze = function(a) {
            var b = a[N.We];
            b && Ad(40);
            var c = a[N.Xe];
            c && Ad(41);
            for (var d = ta(b) ? b : [b], e = {
                    Tb: 0
                }; e.Tb < d.length; e = {
                    Tb: e.Tb
                }, ++e.Tb) ya(a, function(f) {
                return function(g, k) {
                    if (g !== N.We && g !== N.Xe) {
                        var m = d[f.Tb];
                        ze().set(g, k, m, "US", "US-NJ", c)
                    }
                }
            }(e))
        },
        $e = 0,
        af = function(a, b) {
            ya(a, function(e, f) {
                ze().update(e, f)
            });
            Le(b);
            var c = La(),
                d = c - $e;
            $e && 0 <= d && 1E3 > d && Ad(66);
            $e = c
        },
        bf = function(a) {
            var b = Fe(a);
            return void 0 != b ? b : !0
        },
        cf = function() {
            return "G1" + Xe(Fe)
        },
        df = function() {
            return "G1" +
                Xe(Ge)
        },
        ef = function(a, b) {
            Ne(a, b)
        },
        ff = function(a, b) {
            Me(a, b)
        };
    var hf = function(a) {
            return gf ? B.querySelectorAll(a) : null
        },
        jf = function(a, b) {
            if (!gf) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!B.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        kf = !1;
    if (B.querySelectorAll) try {
        var lf = B.querySelectorAll(":root");
        lf && 1 == lf.length && lf[0] == B.documentElement && (kf = !0)
    } catch (a) {}
    var gf = kf;
    var Ff = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Gf = function(a) {
            var b = new Ff;
            b.eventModel = a;
            return b
        },
        Hf = function(a, b) {
            a.targetConfig = b;
            return a
        },
        If = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Jf = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Kf = function(a,
            b) {
            a.remoteConfig = b;
            return a
        },
        Lf = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Mf = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Nf = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Of = function(a, b) {
            a.onFailure = b;
            return a
        };
    Ff.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    var Pf = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        Qf = function(a, b, c) {
            function d(g) {
                Qb(g) && ya(g, function(k, m) {
                    f = !0;
                    e[k] = m
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        Rf = function(a) {
            var b = [N.Yb, N.ff, N.hf, N.jf, N.kf, N.lf, N.nf],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        };
    var Sf, Tf = !1,
        Uf = function(a) {
            if (!Tf) {
                Tf = !0;
                Sf = Sf || {}
            }
            return Sf[a]
        };
    var Vf = function(a) {
        if (B.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !l.getComputedStyle) return !0;
        var c = l.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = l.getComputedStyle(d,
                null))
        }
        return !1
    };
    var dg = /:[0-9]+$/,
        eg = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        hg = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = fg(a.protocol) || fg(l.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : l.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || l.location.hostname).replace(dg, "").toLowerCase());
            return gg(a, b, c, d, e)
        },
        gg = function(a, b, c, d, e) {
            var f, g = fg(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ig(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(dg, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || yd("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = eg(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        fg = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        ig = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        jg = function(a) {
            var b = B.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || yd("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(dg, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        kg = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 != p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = jg(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        };
    var lg = {};
    var Jg = {},
        Kg = function(a, b) {
            if (l._gtmexpgrp && l._gtmexpgrp.hasOwnProperty(a)) return l._gtmexpgrp[a];
            void 0 === Jg[a] && (Jg[a] = Math.floor(Math.random() * b));
            return Jg[a]
        };
    var Lg = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Mg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };

    function Ng(a) {
        return "null" !== a.origin
    };
    var Qg = function(a, b, c, d) {
            return Og(d) ? Mg(a, String(b || Pg()), c) : []
        },
        Tg = function(a, b, c, d, e) {
            if (Og(e)) {
                var f = Rg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Sg(f, function(g) {
                        return g.md
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Sg(f, function(g) {
                        return g.Ac
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Ug(a, b, c, d) {
        var e = Pg(),
            f = window;
        Ng(f) && (f.document.cookie = a);
        var g = Pg();
        return e != g || void 0 != c && 0 <= Qg(b, g, !1, d).indexOf(c)
    }
    var Yg = function(a, b, c) {
            function d(t, q, v) {
                if (null == v) return delete g[q], t;
                g[q] = v;
                return t + "; " + q + "=" + v
            }

            function e(t, q) {
                if (null == q) return delete g[q], t;
                g[q] = !0;
                return t + "; " + q
            }
            if (!Og(c.Ga)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Vg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.Cj);
            f = d(f, "samesite",
                c.Ej);
            c.Fj && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Wg(), p = 0; p < n.length; ++p) {
                    var r = "none" !== n[p] ? n[p] : void 0,
                        u = d(f, "domain", r);
                    u = e(u, c.flags);
                    if (!Xg(r, c.path) && Ug(u, a, b, c.Ga)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Xg(m, c.path) ? 1 : Ug(f, a, b, c.Ga) ? 0 : 1
        },
        Zg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Yg(a, b, c)
        };

    function Sg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Rg(a, b, c) {
        for (var d = [], e = Qg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    md: 1 * m[0] || 1,
                    Ac: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Vg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        $g = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ah = /(^|\.)doubleclick\.net$/i,
        Xg = function(a, b) {
            return ah.test(window.document.location.hostname) || "/" === b && $g.test(a)
        },
        Pg = function() {
            return Ng(window) ? window.document.cookie : ""
        },
        Wg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            ah.test(e) || $g.test(e) || a.push("none");
            return a
        },
        Og = function(a) {
            if (!xe(te) || !a || !Ie()) return !0;
            if (!He(a)) return !1;
            var b = Fe(a);
            return null == b ? !0 : !!b
        };
    var bh = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c = b;
            a && (c = b ^ Lg(a) & 2147483647);
            return [c, Math.round(La() / 1E3)].join(".")
        },
        eh = function(a, b, c, d, e) {
            var f = ch(b);
            return Tg(a, f, dh(c), d, e)
        },
        fh = function(a, b, c, d) {
            var e = "" + ch(c),
                f = dh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        ch = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        dh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function gh(a, b, c) {
        var d, e = Number(null != a.eb ? a.eb : void 0);
        0 !== e && (d = new Date((b || La()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var hh = ["1"],
        ih = {},
        lh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = jh(a.prefix);
            if (!ih[c] && !kh(c, a.path, a.domain) && b) {
                var d = jh(a.prefix),
                    e = bh(),
                    f = fh(e, "1", a.domain, a.path),
                    g = gh(a);
                g.Ga = "ad_storage";
                if (0 === Zg(d, f, g)) {
                    var k = ub("google_tag_data", {});
                    k._gcl_au ? yd("GTM", 57) : k._gcl_au = e
                }
                kh(c, a.path, a.domain)
            }
        };

    function kh(a, b, c) {
        var d = eh(a, b, c, hh, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (ih[a] = e.slice(0, 2).join("."), e.slice(2, 4).join(".")) : 3 === e.length ? e.slice(0, 2).join(".") : ih[a] = d;
        return !0
    }

    function jh(a) {
        return (a || "_gcl") + "_au"
    };
    var mh = function(a) {
        for (var b = [], c = B.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Te: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function nh(a, b) {
        var c = mh(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Te] || (d[c[e].Te] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ra: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Te].push(g)
            }
        }
        return d
    };

    function oh() {
        for (var a = ph, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function qh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ph, rh;

    function sh(a) {
        ph = ph || qh();
        rh = rh || oh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                r = k & 63;
            e || (r = 64, d || (p = 64));
            b.push(ph[m], ph[n], ph[p], ph[r])
        }
        return b.join("")
    }

    function th(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = rh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        ph = ph || qh();
        rh = rh || oh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var uh, vh = function(a) {
        var b;
        if (!(b = uh)) {
            for (var c = Array(256), d = 0; 256 > d; d++) {
                for (var e = d, f = 0; 8 > f; f++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                c[d] = e
            }
            b = c
        }
        uh = b;
        for (var g = 4294967295, k = 0; k < a.length; k++) g = g >>> 8 ^ uh[(g ^ a.charCodeAt(k)) & 255];
        return (g ^ -1) >>> 0
    };
    var zh = function() {
            var a = wh,
                b = xh,
                c = yh(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Cb(B, "mousedown", d);
                Cb(B, "keyup", d);
                Cb(B, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Ah = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            yh().decorators.push(f)
        },
        Bh = function(a, b, c) {
            for (var d = yh().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== B.location.hostname))
                        for (var r = 0; r < m.length; r++)
                            if (m[r] instanceof RegExp) {
                                if (m[r].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[r]) || p && 0 <= m[r].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var u = g.placement;
                    void 0 == u && (u = g.fragment ? 2 : 1);
                    u === b && Qa(e, g.callback())
                }
            }
            return e
        };

    function yh() {
        var a = ub("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Ch = /(.*?)\*(.*?)\*(.*)/,
        Dh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Eh = /^(?:www\.|m\.|amp\.)+/,
        Fh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Gh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Jh = function(a, b) {
        var c = [],
            d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(sh(String(e))))
            }
        var f = c.join("*");
        if (void 0 !== b) {
            var g = "xp_" + b,
                k = Hh[b](f);
            f = f + "*" + [g, sh(String(k))].join("*")
        }
        return ["1", Ih(f), f].join("*")
    };

    function Ih(a, b) {
        var c = [l.navigator.userAgent, (new Date).getTimezoneOffset(), Lb(), Math.floor(La() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return vh(c).toString(36)
    }
    var Kh = {},
        Hh = (Kh[1] = Lh, Kh[2] = Mh, Kh);

    function Lh(a, b) {
        var c = [(new Date).getTimezoneOffset(), Lb(), Math.floor(La() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return vh(c).toString(36)
    }

    function Mh(a, b) {
        if (sb.userAgentData) {
            var c = [(new Date).getTimezoneOffset(), Lb(), Math.floor(La() / 60 / 1E3) - (void 0 === b ? 0 : b), sb.userAgentData.brands, sb.userAgentData.mobile, sb.userAgentData.platform, a].join("*");
            return vh(c).toString(36)
        }
    }

    function Nh() {
        return function(a) {
            var b = jg(l.location.href),
                c = b.search.replace("?", ""),
                d = eg(c, "_gl", !0) || "";
            a.query = Oh(d) || {};
            var e = hg(b, "fragment").match(Gh("_gl"));
            a.fragment = Oh(e && e[3] || "") || {}
        }
    }
    var Ph = function(a) {
            var b = Nh(),
                c = yh();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Qa(d, e.query), a && Qa(d, e.fragment));
            return d
        },
        Oh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Ch.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var k = g[3],
                            m;
                        a: {
                            for (var n = g[2], p = 0; p < b; ++p)
                                if (n === Ih(k, p)) {
                                    m = !0;
                                    break a
                                }
                            m = !1
                        }
                        if (m) {
                            for (var r = {}, u = k ? k.split("*") : [], t = 0; t < u.length; t += 2) r[u[t]] = th(u[t + 1]);
                            return r
                        }
                    }
                }
            } catch (q) {}
        };

    function Qh(a, b, c, d) {
        function e(p) {
            var r = p,
                u = Gh(a).exec(r),
                t = r;
            if (u) {
                var q = u[2],
                    v = u[4];
                t = u[1];
                v && (t = t + q + v)
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Fh.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function Rh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Bh(b, 1, c),
            e = Bh(b, 2, c),
            f = Bh(b, 3, c);
        if (Ra(d)) {
            var g = Jh(d, void 0);
            c ? Sh("_gl", g, a) : Th("_gl", g, a, !1)
        }
        if (!c && Ra(e)) {
            var k = Jh(e);
            Th("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    r = a;
                if (r.tagName) {
                    if ("a" === r.tagName.toLowerCase()) {
                        Th(n, p, r, void 0);
                        break a
                    }
                    if ("form" === r.tagName.toLowerCase()) {
                        Sh(n, p, r);
                        break a
                    }
                }
                "string" == typeof r && Qh(n, p, r, void 0)
            }
    }

    function Th(a, b, c, d) {
        if (c.href) {
            var e = Qh(a, b, c.href, void 0 === d ? !1 : d);
            ab.test(e) && (c.href = e)
        }
    }

    function Sh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = B.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Qh(a, b, c.action);
                ab.test(n) && (c.action = n)
            }
        }
    }

    function wh(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Rh(e, e.hostname)
            }
        } catch (g) {}
    }

    function xh(a) {
        try {
            if (a.action) {
                var b = hg(jg(a.action), "host");
                Rh(a, b)
            }
        } catch (c) {}
    }
    var Uh = function(a, b, c, d) {
            zh();
            Ah(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Vh = function(a, b) {
            zh();
            Ah(a, [gg(l.location, "host", !0)], b, !0, !0)
        },
        Wh = function() {
            var a = B.location.hostname,
                b = Dh.exec(B.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Eh, ""),
                m = e.replace(Eh, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length,
                    k.length) === p
            }
            return n
        },
        Xh = function(a, b) {
            return !1 === a ? !1 : a || b || Wh()
        };
    var Yh = {};
    var Zh = /^\w+$/,
        $h = /^[\w-]+$/,
        ai = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        bi = function() {
            if (!xe(te) || !Ie()) return !0;
            var a = Fe("ad_storage");
            return null == a ? !0 : !!a
        },
        ci = function(a, b) {
            He("ad_storage") ? bi() ? a() : Ne(a, "ad_storage") : b ? yd("TAGGING", 3) : Me(function() {
                ci(a, !0)
            }, ["ad_storage"])
        },
        ei = function(a) {
            return di(a).map(function(b) {
                return b.ra
            })
        },
        di = function(a) {
            var b = [];
            if (!Ng(l) || !B.cookie) return b;
            var c = Qg(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Hc: d.Hc
                }, e++) {
                var f = fi(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.Hc = g.ra;
                    var m = g.timestamp,
                        n = g.labels,
                        p = ua(b, function(r) {
                            return function(u) {
                                return u.ra === r.Hc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = gi(p.labels, n || [])) : b.push({
                        version: k,
                        ra: d.Hc,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(r, u) {
                return u.timestamp - r.timestamp
            });
            return hi(b)
        };

    function gi(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function ii(a) {
        return a && "string" == typeof a && a.match(Zh) ? a : "_gcl"
    }
    var ki = function() {
            var a = jg(l.location.href),
                b = hg(a, "query", !1, void 0, "gclid"),
                c = hg(a, "query", !1, void 0, "gclsrc"),
                d = hg(a, "query", !1, void 0, "wbraid"),
                e = hg(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || eg(f, "gclid", void 0);
                c = c || eg(f, "gclsrc", void 0);
                d = d || eg(f, "wbraid", void 0)
            }
            return ji(b, c, e, d)
        },
        ji = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && $h.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match($h)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        mi = function(a) {
            var b = ki();
            ci(function() {
                li(b, !1, a)
            })
        };

    function li(a, b, c, d, e) {
        function f(x, z) {
            var w = ni(x, g);
            w && (Zg(w, z, k), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = ii(c.prefix);
        d = d || La();
        var k = gh(c, d, !0);
        k.Ga = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var z = ["GCL", n, x];
                0 < e.length && z.push(e.join("."));
                return z.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Yh.enable_gbraid_cookie_write ? 0 : Yh.enable_gbraid_cookie_write) && !m && a.gb) {
            var r = a.gb[0],
                u = ni("gb",
                    g),
                t = !1;
            if (!b)
                for (var q = di(u), v = 0; v < q.length; v++) q[v].ra === r && q[v].labels && 0 < q[v].labels.length && (t = !0);
            t || f("gb", p(r))
        }
    }
    var pi = function(a, b) {
            var c = Ph(!0);
            ci(function() {
                for (var d = ii(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ai[f]) {
                        var g = ni(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(oi(k), La()),
                                n;
                            b: {
                                var p = m;
                                if (Ng(l))
                                    for (var r = Qg(g, B.cookie, void 0, "ad_storage"), u = 0; u < r.length; ++u)
                                        if (oi(r[u]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = gh(b, m, !0);
                                t.Ga = "ad_storage";
                                Zg(g, k, t)
                            }
                        }
                    }
                }
                li(ji(c.gclid, c.gclsrc), !1, b)
            })
        },
        ni = function(a, b) {
            var c = ai[a];
            if (void 0 !== c) return b + c
        },
        oi = function(a) {
            return 0 !== qi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function fi(a) {
        var b = qi(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ra: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function qi(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !$h.test(a[2]) ? [] : a
    }
    var ri = function(a, b, c, d, e) {
            if (ta(b) && Ng(l)) {
                var f = ii(e),
                    g = function() {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = ni(a[m], f);
                            if (n) {
                                var p = Qg(n, B.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                ci(function() {
                    Uh(g, b, c, d)
                })
            }
        },
        hi = function(a) {
            return a.filter(function(b) {
                return $h.test(b.ra)
            })
        },
        si = function(a, b) {
            if (Ng(l)) {
                for (var c = ii(b.prefix), d = {}, e = 0; e < a.length; e++) ai[a[e]] && (d[a[e]] = ai[a[e]]);
                ci(function() {
                    ya(d, function(f, g) {
                        var k = Qg(c + g, B.cookie, void 0, "ad_storage");
                        k.sort(function(t,
                            q) {
                            return oi(q) - oi(t)
                        });
                        if (k.length) {
                            var m = k[0],
                                n = oi(m),
                                p = 0 !== qi(m.split(".")).length ? m.split(".").slice(3) : [],
                                r = {},
                                u;
                            u = 0 !== qi(m.split(".")).length ? m.split(".")[2] : void 0;
                            r[f] = [u];
                            li(r, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function ti(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var ui = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Ie()) {
            var c = ki();
            if (ti(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Vh(function() {
                    return d
                }, 3);
                Vh(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function vi(a, b) {
        var c = ii(b),
            d = ni(a, c);
        if (!d) return 0;
        for (var e = di(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function wi(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Qi = !1,
        Ri = 0,
        Si = [];

    function Ti(a) {
        if (!Qi) {
            var b = B.createEventObject,
                c = "complete" == B.readyState,
                d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Qi = !0;
                for (var e = 0; e < Si.length; e++) G(Si[e])
            }
            Si.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function Ui() {
        if (!Qi && 140 > Ri) {
            Ri++;
            try {
                B.documentElement.doScroll("left"), Ti()
            } catch (a) {
                l.setTimeout(Ui, 50)
            }
        }
    }
    var Vi = function(a) {
        Qi ? a() : Si.push(a)
    };
    var Xi = function(a, b) {
            this.m = !1;
            this.D = [];
            this.I = {
                tags: []
            };
            this.Z = !1;
            this.o = this.s = 0;
            Wi(this, a, b)
        },
        Yi = function(a, b, c, d) {
            if (Ed.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Qb(d) && (e = H(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1
        },
        Zi = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        $i = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        Wi = function(a, b, c) {
            qa(b) && aj(a, b);
            c && l.setTimeout(function() {
                return $i(a)
            }, Number(c))
        },
        aj = function(a,
            b) {
            var c = Pa(function() {
                return G(function() {
                    b(Bd.J, a.I)
                })
            });
            a.m ? c() : a.D.push(c)
        },
        bj = function(a) {
            a.s++;
            return Pa(function() {
                a.o++;
                a.Z && a.o >= a.s && $i(a)
            })
        };
    var cj = function() {
            function a(d) {
                return !sa(d) || 0 > d ? 0 : d
            }
            if (!P._li && l.performance && l.performance.timing) {
                var b = l.performance.timing.navigationStart,
                    c = sa(be.get("gtm.start")) ? be.get("gtm.start") : 0;
                P._li = {
                    cst: a(c - b),
                    cbt: a(Kd - b)
                }
            }
        },
        dj = function(a) {
            l.performance && l.performance.mark(Bd.J + "_" + a + "_start")
        },
        ej = function(a) {
            if (l.performance) {
                var b = Bd.J + "_" + a + "_start",
                    c = Bd.J + "_" + a + "_duration";
                l.performance.measure(c, b);
                var d = l.performance.getEntriesByName(c)[0];
                l.performance.clearMarks(b);
                l.performance.clearMeasures(c);
                var e = P._p || {};
                void 0 === e[a] && (e[a] = d.duration, P._p = e);
                return d.duration
            }
        },
        fj = function() {
            if (l.performance && l.performance.now) {
                var a = P._p || {};
                a.PAGEVIEW = l.performance.now();
                P._p = a
            }
        };
    var gj = {},
        hj = function() {
            return l.GoogleAnalyticsObject && l[l.GoogleAnalyticsObject]
        },
        ij = !1;
    var jj = function(a) {
            l.GoogleAnalyticsObject || (l.GoogleAnalyticsObject = a || "ga");
            var b = l.GoogleAnalyticsObject;
            if (l[b]) l.hasOwnProperty(b) || Ad(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ia());
                l[b] = c
            }
            cj();
            return l[b]
        },
        kj = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = hj();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        },
        lj = function(a) {
            if (!Ie()) return;
            var b = hj();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0);
        };

    function mj() {
        return l.GoogleAnalyticsObject || "ga"
    }
    var nj = function(a) {},
        oj = function(a, b) {
            return function() {
                var c = hj(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var vj = function(a) {},
        zj = function(a) {},
        Aj =
        function() {
            return "&tc=" + Cc.filter(function(a) {
                return a
            }).length
        },
        Dj = function() {
            2022 <= Bj().length && Cj()
        },
        Ej = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Gj = function() {
            Fj || (Fj = l.setTimeout(Cj, 500))
        },
        Cj = function() {
            Fj && (l.clearTimeout(Fj), Fj = void 0);
            void 0 === Hj || Ij[Hj] && !Jj && !Kj || (Lj[Hj] || Mj.Ii() || 0 >= Nj-- ? (Ad(1), Lj[Hj] = !0) : (Mj.cj(), Bb(Bj(!0)), Ij[Hj] = !0, Oj = Pj = Qj = Kj = Jj = ""))
        },
        Bj = function(a) {
            var b = Hj;
            if (void 0 === b) return "";
            var c = zd("GTM"),
                d = zd("TAGGING");
            return [Rj, Ij[b] ? "" : "&es=1",
                Sj[b], vj(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Aj(), Jj, Kj, Qj, Pj, zj(a), Oj, "&z=0"
            ].join("")
        },
        Uj = function() {
            Rj = Tj()
        },
        Tj = function() {
            return [Ld, "&v=3&t=t", "&pid=" + va(), "&rv=" + Bd.dd].join("")
        },
        yj = ["L", "S", "Y"],
        uj = ["S", "E"],
        Vj = {
            sampleRate: "0.005000",
            Rg: "",
            Qg: Number("5")
        },
        Wj = 0 <= B.location.search.indexOf("?gtm_latency=") || 0 <= B.location.search.indexOf("&gtm_latency="),
        Xj;
    if (!(Xj = Wj)) {
        var Yj = Math.random(),
            Zj = Vj.sampleRate;
        Xj = Yj < Zj
    }
    var ak = Xj,
        bk = {
            label: Bd.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Rj = Tj(),
        Ij = {},
        Jj = "",
        Kj = "",
        Oj = "",
        Pj = "",
        xj = {},
        wj = !1,
        tj = {},
        ck = {},
        Qj = "",
        Hj = void 0,
        Sj = {},
        Lj = {},
        Fj = void 0,
        dk = 5;
    0 < Vj.Qg && (dk = Vj.Qg);
    var Mj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Ii: function() {
                    return c < a ? !1 : La() - d[c % a] < b
                },
                cj: function() {
                    var f = c++ % a;
                    d[f] = La()
                }
            }
        }(dk, 1E3),
        Nj = 1E3,
        fk = function(a, b) {
            if (ak && !Lj[a] && Hj !==
                a) {
                Cj();
                Hj = a;
                Oj = Jj = "";
                Sj[a] = "&e=" + Ej(b) + "&eid=" + a;
                Gj();
            }
        },
        gk = function(a, b, c, d) {
            if (ak && b) {
                var e, f = String(b[Sb.qb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Lj[a]) {
                    a !== Hj && (Cj(), Hj = a);
                    Jj = Jj ? Jj + "." + g : "&tr=" + g;
                    var k = b["function"];
                    if (!k) throw Error("Error: No function name given for function call.");
                    var m = (Ec[k] ? "1" : "2") + e;
                    Oj = Oj ? Oj + "." + m : "&ti=" + m;
                    Gj();
                    Dj()
                }
            }
        };
    var nk = function(a, b, c) {
            if (ak && !Lj[a]) {
                a !== Hj && (Cj(), Hj = a);
                var d = c + b;
                Kj = Kj ? Kj + "." + d : "&epr=" + d;
                Gj();
                Dj()
            }
        },
        ok = function(a, b, c) {};

    function pk(a, b, c, d) {
        var e = Cc[a],
            f = qk(a, b, c, d);
        if (!f) return null;
        var g = Jc(e[Sb.Nf], c, []);
        if (g && g.length) {
            var k = g[0];
            f = pk(k.index, {
                onSuccess: f,
                onFailure: 1 === k.hg ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function qk(a, b, c, d) {
        function e() {
            if (f[Sb.Mh]) k();
            else {
                var x = Kc(f, c, []);
                var z = x[Sb.Wg];
                if (null != z)
                    for (var w = 0; w < z.length; w++)
                        if (!bf(z[w])) {
                            k();
                            return
                        }
                var y = Yi(c.rb, String(f[Sb.qb]), Number(f[Sb.Pf]), x[Sb.Nh]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var D = La() - F;
                        gk(c.id, Cc[a], "5", D);
                        Zi(c.rb, y, "success",
                            D);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var D = La() - F;
                        gk(c.id, Cc[a], "6", D);
                        Zi(c.rb, y, "failure", D);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                gk(c.id, f, "1");
                var C = function() {
                    var D = La() - F;
                    gk(c.id, f, "7", D);
                    Zi(c.rb, y, "exception", D);
                    A || (A = !0, k())
                };
                var F = La();
                try {
                    Ic(x, c)
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = Cc[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.Ge(f)) return null;
        var n = Jc(f[Sb.Qf], c, []);
        if (n && n.length) {
            var p = n[0],
                r = pk(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!r) return null;
            g = r;
            k = 2 === p.hg ? m : r
        }
        if (f[Sb.Jf] || f[Sb.Rh]) {
            var u = f[Sb.Jf] ? Dc :
                c.mj,
                t = g,
                q = k;
            if (!u[a]) {
                e = Pa(e);
                var v = rk(a, u, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                u[a](t, q)
            }
        }
        return e
    }

    function rk(a, b, c) {
        var d = [],
            e = [];
        b[a] = sk(d, e, c);
        return {
            onSuccess: function() {
                b[a] = tk;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = uk;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function sk(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function tk(a) {
        a()
    }

    function uk(a, b) {
        b()
    };
    var xk = function(a, b) {
        for (var c = [], d = 0; d < Cc.length; d++)
            if (a[d]) {
                var e = Cc[d];
                var f = bj(b.rb);
                try {
                    var g = pk(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c,
                            m = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var r = Ec[p];
                        m.call(k, {
                            Jg: n,
                            yg: r ? r.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else vk(d, b), f()
                } catch (q) {
                    f()
                }
            }
        var u = b.rb;
        u.Z = !0;
        u.o >= u.s && $i(u);
        c.sort(wk);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function wk(a, b) {
        var c, d = b.yg,
            e = a.yg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Jg,
                k = b.Jg;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function vk(a, b) {
        if (!ak) return;
        var c = function(d) {
            var e = b.Ge(Cc[d]) ? "3" : "4",
                f = Jc(Cc[d][Sb.Nf], b, []);
            f && f.length && c(f[0].index);
            gk(b.id, Cc[d], e);
            var g = Jc(Cc[d][Sb.Qf], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var yk = !1,
        Ek = function(a) {
            var b = La(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (yk) return !1;
                yk = !0;
            }
            var g = qe(c),
                k = !1;
            if (!g.active) {
                if ("gtm.js" !== d) return !1;
                k = !0;
                g = qe(Number.MAX_SAFE_INTEGER)
            }
            fk(c, d);
            var m = a.eventCallback,
                n = a.eventTimeout,
                p = m;
            var r = {
                id: c,
                name: d,
                Ge: oe(g.isAllowed),
                mj: [],
                rg: function() {
                    Ad(6)
                },
                ag: zk(c),
                rb: new Xi(p, n)
            };
            r.$f = Ak();
            Bk(c, r.rb);
            var u = Oc(r);
            k && (u = Ck(u));
            var t = xk(u, r);
            "gtm.js" !== d && "gtm.sync" !== d || nj(Bd.J);
            return Dk(u, t)
        };

    function zk(a) {
        return function(b) {
            ak && (Rb(b) || ok(a, "input", b))
        }
    }

    function Bk(a, b) {
        fe(a, "event", 1);
        fe(a, "ecommerce", 1);
        fe(a, "gtm");
        fe(a, "eventModel");
    }

    function Ak() {
        var a = {};
        a.event = ee("event", 1);
        a.ecommerce = ee("ecommerce", 1);
        a.gtm = ee("gtm");
        a.eventModel = ee("eventModel");
        return a
    }

    function Ck(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Dd[String(Cc[c][Sb.qb])] && (b[c] = !0);
        return b
    }

    function Dk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Cc[c] && !Ed[String(Cc[c][Sb.qb])]) return !0;
        return !1
    }

    function Fk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return jg("" + c + b).href
        }
    }

    function Gk(a, b) {
        return Hk() ? Fk(a, b) : void 0
    }

    function Hk() {
        var a = !1;
        return a
    }

    function Ik() {
        return !!Bd.ed && "SGTM_TOKEN" !== Bd.ed.replaceAll("@@", "")
    };
    var Jk = function() {
        var a = !1;
        return a
    };
    var Kk;
    if (3 === Bd.dd.length) Kk = "g";
    else {
        var Lk = "G";
        Kk = Lk
    }
    var Mk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Kk,
            OPT: "o"
        },
        Nk = function(a) {
            var b = Bd.J.split("-"),
                c = b[0].toUpperCase(),
                d = Mk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === Bd.dd.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + Bd.dd + e
        };

    function Ok(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Pk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Qk() {
        return eb("iPhone") && !eb("iPod") && !eb("iPad")
    };
    eb("Opera");
    eb("Trident") || eb("MSIE");
    eb("Edge");
    !eb("Gecko") || -1 != bb.toLowerCase().indexOf("webkit") && !eb("Edge") || eb("Trident") || eb("MSIE") || eb("Edge"); - 1 != bb.toLowerCase().indexOf("webkit") && !eb("Edge") && eb("Mobile");
    eb("Macintosh");
    eb("Windows");
    eb("Linux") || eb("CrOS");
    var Rk = ma.navigator || null;
    Rk && (Rk.appVersion || "").indexOf("X11");
    eb("Android");
    Qk();
    eb("iPad");
    eb("iPod");
    Qk() || eb("iPad") || eb("iPod");
    bb.toLowerCase().indexOf("kaios");
    var Sk = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (k) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (k) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        Tk = function(a) {
            var b = B;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c, d, e;
            e = void 0 === e ? document : e;
            d = "META";
            "application/xhtml+xml" === (null == e ? void 0 : e.contentType) && (d = d.toLowerCase());
            c = e.createElement(d);
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c
        };
    var Uk = function() {};
    var Vk = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Wk = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.Z = 0;
            this.I = void 0 === b ? 500 : b;
            this.s = null
        };
    la(Wk, Uk);
    var Yk = function(a) {
        return "function" === typeof a.o.__tcfapi || null != Xk(a)
    };
    Wk.prototype.addEventListener = function(a) {
        var b = {},
            c = qb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.I && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.I));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Vk(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Zk(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Wk.prototype.removeEventListener = function(a) {
        a && a.listenerId && Zk(this, "removeEventListener", null, a.listenerId)
    };
    var al = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = $k(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && ((xe(ue) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && $k(a.purpose.consents, b)
                } else m = !0;
            else m =
                1 === k ? a.purpose && a.vendor ? $k(a.purpose.legitimateInterests, b) && $k(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        $k = function(a, b) {
            return !(!a || !a[b])
        },
        Zk = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Xk(a)) {
                bl(a);
                var f = ++a.Z;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Xk = function(a) {
            if (a.m) return a.m;
            a.m = Sk(a.o, "__tcfapiLocator");
            return a.m
        },
        bl = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Pk(a.o, a.s))
        };
    var cl = !0;
    cl = !1;
    var dl = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        el = Ok("", 550),
        fl = Ok("", 500);

    function gl() {
        var a = P.tcf || {};
        return P.tcf = a
    }
    var hl = function(a, b) {
            this.s = a;
            this.m = b;
            this.o = La();
        },
        il = function(a) {},
        jl = function(a) {},
        pl = function() {
            var a = gl(),
                b = new Wk(l, cl ? 3E3 : -1),
                c = new hl(b, a);
            if ((kl() ? !0 === l.gtag_enable_tcf_support : !1 !== l.gtag_enable_tcf_support) && !a.active && ("function" === typeof l.__tcfapi || Yk(b))) {
                a.active = !0;
                a.Cc = {};
                ll();
                var d = null;
                cl ? d = l.setTimeout(function() {
                    ml(a);
                    nl(a);
                    d = null
                }, fl) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) ml(a), nl(a), il(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = ol(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    k;
                                for (k in dl)
                                    if (dl.hasOwnProperty(k))
                                        if ("1" === k) {
                                            var m, n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var r;
                                            var u = n;
                                            !1 === u.gdprApplies ? r = !0 : (void 0 === u.internalErrorState && (u.internalErrorState = Vk(u)), r = "error" === u.cmpStatus || 0 !== u.internalErrorState || "loaded" === u.cmpStatus && ("tcloaded" === u.eventStatus || "useractioncomplete" ===
                                                u.eventStatus) ? !0 : !1);
                                            m = r ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : al(n, "1", 0) : !1;
                                            g["1"] = m
                                        } else g[k] = al(e, k, dl[k]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Cc = f, nl(a), il(c))
                        }
                    }), jl(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), ml(a), nl(a)
                }
            }
        };

    function ml(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        cl && (a.Cc = ol())
    }

    function ll() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = el, a);
        Ze(b)
    }
    var kl = function() {
        var a = !1;
        a = !0;
        return a
    };

    function ol() {
        var a = {},
            b;
        for (b in dl) dl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function nl(a) {
        var b = {},
            c = (b.ad_storage = a.Cc["1"] ? "granted" : "denied", b);
        af(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: ql()
        })
    }
    var rl = function() {
            var a = gl();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        ql = function() {
            var a = gl();
            return a.active ? a.tcString || "" : ""
        },
        sl = function() {
            var a = gl();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        tl = function(a) {
            if (!dl.hasOwnProperty(String(a))) return !0;
            var b = gl();
            return b.active && b.Cc ? !!b.Cc[String(a)] : !0
        };
    var Bl = !1;
    var Cl = function() {
            this.m = {}
        },
        Dl = function(a, b, c) {
            null != c && (a.m[b] = c)
        },
        El = function(a) {
            return Object.keys(a.m).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
            }).join("&")
        },
        Gl = function(a, b, c, d, e) {};
    var Il = /[A-Z]+/,
        Jl = /\s/,
        Kl = function(a) {
            if (ra(a)) {
                a = Fa(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Il.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || Jl.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            M: e
                        }
                    }
                }
            }
        },
        Ml = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                    Kl(a[c]);
                d && (b[d.id] = d)
            }
            Ll(b);
            var e = [];
            ya(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Ll(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Ol = function(a, b, c, d) {
            return (2 === Nl() || d || "http:" != l.location.protocol ? a : b) + c
        },
        Nl = function() {
            var a = zb(),
                b;
            if (1 === a) a: {
                var c = Hd;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = B.getElementsByTagName("script"), k = 0; k < g.length && 100 > k; k++) {
                    var m = g[k].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Ql = function(a, b, c) {
            if (l[a.functionName]) return b.Le && G(b.Le), l[a.functionName];
            var d = Pl();
            l[a.functionName] = d;
            if (a.hd)
                for (var e = 0; e < a.hd.length; e++) l[a.hd[e]] = l[a.hd[e]] || Pl();
            a.td && void 0 === l[a.td] && (l[a.td] = c);
            yb(Ol("https://", "http://", a.Re), b.Le, b.Ti);
            return d
        },
        Pl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Rl = {
            functionName: "_googWcmImpl",
            td: "_googWcmAk",
            Re: "www.gstatic.com/wcm/loader.js"
        },
        Sl = {
            functionName: "_gaPhoneImpl",
            td: "ga_wpid",
            Re: "www.gstatic.com/gaphone/loader.js"
        },
        Tl = {
            Vg: "",
            Sh: "5"
        },
        Ul = {
            functionName: "_googCallTrackingImpl",
            hd: [Sl.functionName, Rl.functionName],
            Re: "www.gstatic.com/call-tracking/call-tracking_" + (Tl.Vg || Tl.Sh) + ".js"
        },
        Vl = {},
        Wl = function(a, b, c, d) {
            Ad(22);
            if (c) {
                d = d || {};
                var e = Ql(Rl, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Pa && (f.autoreplace = c);
                e(2, d.Pa, f, c, 0, Ia(), d.options)
            }
        },
        Xl = function(a, b, c, d) {
            Ad(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ia()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Vl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? (e.adData = {
                            ak: g.M[0],
                            cl: g.M[1]
                        }, Vl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, Vl[g.id] = !0))
                }(e.gaData || e.adData) && Ql(Ul, d)(d.Pa, e, d.options)
            }
        },
        Yl = function() {
            var a = !1;
            return a
        },
        Zl = function(a, b) {
            if (a)
                if (Jk()) {} else {
                    if (ra(a)) {
                        var c =
                            Kl(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(N.Ah);
                    if (f && ta(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = Kl(f[g]);
                            k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = b.getWithConfig(N.Af),
                            n;
                        if (m) {
                            ta(m) ? n = m : n = [m];
                            var p = b.getWithConfig(N.yf),
                                r = b.getWithConfig(N.zf),
                                u = b.getWithConfig(N.Bf),
                                t = b.getWithConfig(N.zh),
                                q = p || r,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d) Xl(d, n[x], t, {
                                        Pa: q,
                                        options: u
                                    });
                                    else if ("AW" === a.prefix &&
                                a.M[1]) Yl() ? Xl([a], n[x], t || "US", {
                                Pa: q,
                                options: u
                            }) : Wl(a.M[0], a.M[1], n[x], {
                                Pa: q,
                                options: u
                            });
                            else if ("UA" === a.prefix)
                                if (Yl()) Xl([a], n[x], t || "US", {
                                    Pa: q
                                });
                                else {
                                    var z = a.containerId,
                                        w = n[x],
                                        y = {
                                            Pa: q
                                        };
                                    Ad(23);
                                    if (w) {
                                        y = y || {};
                                        var A = Ql(Sl, y, z),
                                            C = {};
                                        void 0 !== y.Pa ? C.receiver = y.Pa : C.replace = w;
                                        C.ga_wpid = z;
                                        C.destination = w;
                                        A(2, Ia(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var en = function() {
            var a = !0;
            tl(7) && tl(9) && tl(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !dn() && (a = !1);
            return a
        },
        dn = function() {
            var a = !0;
            tl(3) && tl(4) || (a = !1);
            return a
        };
    var jn = function(a, b) {},
        kn = function(a, b) {
            var c = a[N.ac];
            kj(b + ".", a[N.N] || "", void 0 === c ? !!a.use_anchor : "fragment" === c, !!a[N.Kb])
        },
        on = function(a, b, c) {
            if (Ie() && (!c.isGtmEvent || !ln[a])) {
                var d = !bf(N.H),
                    e = function() {
                        var f, g, k = hj(),
                            m = mn(b, "", c),
                            n, p = m.ja._useUp;
                        if (c.isGtmEvent || nn(b, m.ja)) {
                            var r = !0;
                            if (c.isGtmEvent) {
                                f = "gtm" + Ud();
                                g = m.ja;
                                m.gtmTrackerName && (g.name = f);
                                r = !1;
                                r = !0;
                            }
                            r && k(function() {
                                var t = k.getByName(b);
                                t && (n = t.get("clientId"));
                                c.isGtmEvent || k.remove(b)
                            });
                            k("create", a, c.isGtmEvent ? g : m.ja);
                            d && bf(N.H) && (d = !1, k(function() {
                                var t = hj().getByName(c.isGtmEvent ? f : b);
                                !t || t.get("clientId") == n && p || (c.isGtmEvent ? m.qc["&gcu"] = "1" : m.ka["&gcu"] = "1", t.set(m.qc), c.isGtmEvent ? t.send("pageview") : t.send("pageview", m.ka))
                            }));
                            c.isGtmEvent && k(function() {
                                k.remove(f)
                            })
                        }
                    };
                Ne(e, N.H);
                Ne(e, N.C);
                c.isGtmEvent &&
                    (ln[a] = !0)
            }
        },
        xn = function(a, b, c) {
            function d() {
                var O = c.getWithConfig(N.Zb);
                k(function() {
                    if (!c.isGtmEvent && Qb(O)) {
                        var K = q.ka,
                            L = m().getByName(n),
                            M;
                        for (M in O)
                            if (O.hasOwnProperty(M) && /^(dimension|metric)\d+$/.test(M) && void 0 != O[M]) {
                                var J = L.get(hn(O[M]));
                                pn(K, M, J)
                            }
                    }
                })
            }

            function e() {
                if (q.displayfeatures) {
                    var O = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: O
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                k = c.isGtmEvent ? jj(c.getWithConfig("gaFunctionName")) :
                jj();
            if (qa(k)) {
                var m = hj,
                    n;
                c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(O) {
                        var K = [].slice.call(arguments, 0);
                        K[0] = n ? n + "." + K[0] : "" + K[0];
                        k.apply(window, K)
                    },
                    r = function(O) {
                        var K = function(T, X) {
                                for (var S = 0; X && S < X.length; S++) p(T, X[S])
                            },
                            L = c.isGtmEvent,
                            M = L ? qn(q) : rn(b, c);
                        if (M) {
                            var J = {};
                            Ik() && O && (J[N.Ja] = O);
                            p("require", "ec", "ec.js", J);
                            L && M.we && p("set", "&cu", M.we);
                            var I = M.action;
                            if (L || "impressions" === I)
                                if (K("ec:addImpression", M.og), !L) return;
                            if ("promo_click" === I || "promo_view" === I || L && M.Bc) {
                                var V = M.Bc;
                                K("ec:addPromo", V);
                                if (V && 0 < V.length && "promo_click" === I) {
                                    L ? p("ec:setAction", I, M.$a) : p("ec:setAction", I);
                                    return
                                }
                                if (!L) return
                            }
                            "promo_view" !== I && "impressions" !== I && (K("ec:addProduct", M.wb), p("ec:setAction", I, M.$a))
                        }
                    },
                    u = function(O) {
                        if (O) {
                            var K = {};
                            if (Qb(O))
                                for (var L in sn) sn.hasOwnProperty(L) && tn(sn[L], L, O[L], K);
                            p("require", "linkid", K)
                        }
                    },
                    t = function() {
                        if (Jk()) {} else {
                            var O =
                                c.getWithConfig(N.yh);
                            O && (p("require", O, {
                                dataLayer: "dataLayer"
                            }), p("require", "render"))
                        }
                    },
                    q = mn(n, b, c),
                    v = function(O, K, L) {
                        L && (K = "" + K);
                        q.ka[O] = K
                    };
                !c.isGtmEvent && nn(n, q.ja) && (k(function() {
                    m() && m().remove(n)
                }), un[n] = !1);
                k("create", f, q.ja);
                if (q.ja[N.Ja] && !c.isGtmEvent) {
                    var x = Gk(q.ja[N.Ja], "/analytics.js");
                    x && (g = x)
                }
                if (c.isGtmEvent ? q.qc[N.Ja] : q.ja[N.Ja]) {
                    var z = c.isGtmEvent ? q.qc[N.Qc] : q.ja[N.Qc];
                    z && !un[n] && (un[n] = !0, k(oj(n, z)))
                }
                c.isGtmEvent ? q.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
                    u(q.linkAttribution));
                var w = q[N.fa];
                w && w[N.N] && kn(w, n);
                p("set", q.qc);
                c.isGtmEvent && q.enableLinkId && p("require", "linkid", "linkid.js");
                c.isGtmEvent && Ie() && on(f, n, c);
                var y = q.ja[N.Ja] ? q.ja[N.Ja] : void 0;
                if (b === N.Wb)
                    if (c.isGtmEvent) {
                        e();
                        if (q.remarketingLists) {
                            var A = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: A
                            })
                        }
                        r(y);
                        p("send", "pageview");
                        q.ja._useUp && lj(n + ".")
                    } else t(), p("send", "pageview", q.ka);
                else b === N.Aa ? (t(), Zl(f, c), c.getWithConfig(N.Za) && (ui(["aw", "dc"]), lj(n + ".")),
                    0 != q.sendPageView && p("send", "pageview", q.ka), on(f, n, c)) : b === N.Ia ? jn(n, c) : "screen_view" === b ? p("send", "screenview", q.ka) : "timing_complete" === b ? (q.ka.hitType = "timing", v("timingCategory", q.eventCategory, !0), c.isGtmEvent ? v("timingVar", q.timingVar, !0) : v("timingVar", q.name, !0), v("timingValue", Ca(q.value)), void 0 !== q.eventLabel && v("timingLabel", q.eventLabel, !0), p("send", q.ka)) : "exception" === b ? p("send", "exception", q.ka) : "optimize.callback" === b || "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (q.ka.hitType =
                    "social", v("socialNetwork", q.socialNetwork, !0), v("socialAction", q.socialAction, !0), v("socialTarget", q.socialTarget, !0)) : ((c.isGtmEvent || vn[b]) && r(y), c.isGtmEvent && e(), q.ka.hitType = "event", v("eventCategory", q.eventCategory, !0), v("eventAction", q.eventAction || b, !0), void 0 !== q.eventLabel && v("eventLabel", q.eventLabel, !0), void 0 !== q.value && v("eventValue", Ca(q.value))), p("send", q.ka));
                var C = !1;
                var F = wn;
                C && (F = c.getContainerTypeLoaded("UA"));
                if (!F && !c.isGtmEvent) {
                    wn = !0;
                    C && c.setContainerTypeLoaded("UA", !0);
                    cj();
                    var D = function() {
                            C && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure()
                        },
                        E = function() {
                            m().loaded || D()
                        };
                    Jk() ? G(E) : yb(g, E, D)
                }
            } else G(c.onFailure)
        },
        yn = function(a, b, c, d) {
            ff(function() {
                xn(a, b, d)
            }, [N.H, N.C])
        },
        An = function(a, b) {
            function c(f) {
                function g(p, r) {
                    for (var u = 0; u < r.length; u++) {
                        var t = r[u];
                        if (f[t]) {
                            m[p] = f[t];
                            break
                        }
                    }
                }

                function k() {
                    if (f.category) m.category = f.category;
                    else {
                        for (var p = "", r = 0; r <
                            zn.length; r++) void 0 !== f[zn[r]] && (p && (p += "/"), p += f[zn[r]]);
                        p && (m.category = p)
                    }
                }
                var m = H(f),
                    n = !1;
                if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position", "creative_slot", "index"]),
                    k();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return m
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++) a[e] && Qb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0
        },
        Bn = function(a) {
            return bf(a)
        },
        Cn = !1;
    var Dn = !1;
    var wn, un = {},
        ln = {},
        En = {},
        fn = Object.freeze((En.client_storage = "storage", En.sample_rate = 1, En.site_speed_sample_rate = 1, En.store_gac = 1, En.use_amp_client_id = 1, En[N.kb] = 1, En[N.ma] = "storeGac", En[N.da] = 1, En[N.na] = 1, En[N.Da] = 1, En[N.Fb] = 1, En[N.Va] = 1, En[N.Gb] = 1, En)),
        Fn = {},
        Gn = Object.freeze((Fn._cs = 1, Fn._useUp = 1, Fn.allowAnchor = 1, Fn.allowLinker = 1, Fn.alwaysSendReferrer = 1, Fn.clientId = 1, Fn.cookieDomain = 1, Fn.cookieExpires = 1, Fn.cookieFlags = 1, Fn.cookieName = 1, Fn.cookiePath = 1, Fn.cookieUpdate = 1, Fn.legacyCookieDomain = 1,
            Fn.legacyHistoryImport = 1, Fn.name = 1, Fn.sampleRate = 1, Fn.siteSpeedSampleRate = 1, Fn.storage = 1, Fn.storeGac = 1, Fn.useAmpClientId = 1, Fn._cd2l = 1, Fn)),
        Hn = Object.freeze({
            anonymize_ip: 1
        }),
        In = {},
        gn = Object.freeze((In.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, In.app_id = 1, In.app_installer_id = 1, In.app_name = 1, In.app_version = 1, In.description = "exDescription", In.fatal = "exFatal", In.language = 1, In.page_hostname = "hostname",
            In.transport_type = "transport", In[N.aa] = "currencyCode", In[N.wf] = 1, In[N.nb] = "location", In[N.Yd] = "page", In[N.La] = "referrer", In[N.Tc] = "title", In[N.Df] = 1, In[N.pb] = 1, In)),
        Jn = {},
        Kn = Object.freeze((Jn.content_id = 1, Jn.event_action = 1, Jn.event_category = 1, Jn.event_label = 1, Jn.link_attribution = 1, Jn.name = 1, Jn[N.fa] = 1, Jn[N.vf] = 1, Jn[N.Lb] = 1, Jn[N.ca] = 1, Jn)),
        Ln = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        zn = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        Mn = {},
        sn = Object.freeze((Mn.levels = 1, Mn[N.na] = "duration", Mn[N.Fb] = 1, Mn)),
        Nn = {},
        On = Object.freeze((Nn.anonymize_ip = 1, Nn.fatal = 1, Nn.send_page_view = 1, Nn.store_gac = 1, Nn.use_amp_client_id = 1, Nn[N.ma] = 1, Nn[N.wf] = 1, Nn)),
        tn = function(a, b, c, d) {
            if (void 0 !== c)
                if (On[b] && (c = Da(c)), "anonymize_ip" !== b || c || (c = void 0), 1 ===
                    a) d[hn(b)] = c;
                else if (ra(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        hn = function(a) {
            return a && ra(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        Pn = {},
        vn = Object.freeze((Pn.checkout_progress = 1, Pn.select_content = 1, Pn.set_checkout_option = 1, Pn[N.Cb] = 1, Pn[N.Db] = 1, Pn[N.ib] = 1, Pn[N.Ua] = 1, Pn[N.jb] = 1, Pn[N.va] = 1, Pn[N.Eb] = 1, Pn[N.wa] = 1, Pn)),
        Qn = {},
        Rn = Object.freeze((Qn.checkout_progress = 1, Qn.set_checkout_option = 1, Qn[N.cf] = 1, Qn[N.Cb] = 1, Qn[N.Db] = 1, Qn[N.ib] =
            1, Qn[N.va] = 1, Qn[N.Eb] = 1, Qn[N.df] = 1, Qn)),
        Sn = {},
        Tn = Object.freeze((Sn.generate_lead = 1, Sn.login = 1, Sn.search = 1, Sn.select_content = 1, Sn.share = 1, Sn.sign_up = 1, Sn.view_search_results = 1, Sn[N.Ua] = 1, Sn[N.jb] = 1, Sn[N.wa] = 1, Sn)),
        Un = function(a) {
            var b = "general";
            Rn[a] ? b = "ecommerce" : Tn[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Vn = {},
        Wn = Object.freeze((Vn.view_search_results = 1, Vn[N.Ua] = 1, Vn[N.jb] = 1, Vn[N.wa] = 1, Vn)),
        pn = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        Xn = function(a) {
            if (ta(a)) {
                for (var b = [], c =
                        0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        mn = function(a, b, c) {
            function d(L, M) {
                void 0 !== M && (k[L] = M)
            }
            var e = function(L) {
                    return c.getWithConfig(L)
                },
                f = {},
                g = {},
                k = {},
                m = {},
                n = Xn(e(N.xh));
            !c.isGtmEvent && n && pn(g, "exp", n);
            k["&gtm"] = Nk(!0);
            Ie() && (m._cs = Bn);
            var p = e(N.Zb);
            if (!c.isGtmEvent && Qb(p))
                for (var r in p)
                    if (p.hasOwnProperty(r) && /^(dimension|metric)\d+$/.test(r) && void 0 != p[r]) {
                        var u = e(String(p[r]));
                        void 0 !== u && pn(g, r, u)
                    }
            for (var t = Pf(c), q = 0; q < t.length; ++q) {
                var v = t[q];
                if (c.isGtmEvent) {
                    var x = e(v);
                    Ln.hasOwnProperty(v) ? f[v] = x : Gn.hasOwnProperty(v) ? m[v] = x : "currencyCode" != v && (k[v] = x)
                } else {
                    var z = void 0;
                    z = v !== N.ba ? e(v) : Qf(c, v);
                    if (Kn.hasOwnProperty(v)) tn(Kn[v], v, z, f);
                    else if (Hn.hasOwnProperty(v)) tn(Hn[v], v, z, k);
                    else if (gn.hasOwnProperty(v)) tn(gn[v], v, z, g);
                    else if (fn.hasOwnProperty(v)) tn(fn[v], v, z, m);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) tn(1, v, z, g);
                    else if (v === N.ba) {
                        if (!Cn) {
                            var w = Va(z);
                            w && (g["&did"] = w)
                        }
                        if (Dn) {
                            var y = Va(Qf(c, v, 1), ".");
                            y && (g["&gdid"] = y);
                            var A = Va(Qf(c, v, 2), ".");
                            A && (g["&edid"] = A)
                        }
                    } else v === N.oa && 0 > t.indexOf(N.Fb) && (m.cookieName = z + "_ga")
                }
            }!1 !== e(N.nh) && !1 !== e(N.Xb) && en() || (k.allowAdFeatures = !1);
            if (!1 === e(N.Ba) || !dn()) {
                var C = c.isGtmEvent ? "allowAdPersonalizationSignals" : "allowAdFeatures";
                C = "allowAdPersonalizationSignals";
                k[C] = !1
            }!c.isGtmEvent && e(N.Za) && (m._useUp = !0);
            if (c.isGtmEvent) {
                m.name =
                    m.name || f.gtmTrackerName;
                var F = k.hitCallback;
                k.hitCallback = function() {
                    qa(F) && F();
                    c.onSuccess()
                }
            } else {
                pn(m, "cookieDomain", "auto");
                pn(k, "forceSSL", !0);
                pn(f, "eventCategory", Un(b));
                Wn[b] && pn(g, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? pn(f, "eventLabel", e(N.vf)) : "search" === b || "view_search_results" === b ? pn(f, "eventLabel", e(N.Ch)) : "select_content" === b && pn(f, "eventLabel", e(N.rh));
                var D = f[N.fa] || {},
                    E = D[N.Jb];
                E || 0 != E && D[N.N] ? m.allowLinker = !0 : !1 === E && pn(m, "useAmpClientId", !1);
                g.hitCallback =
                    c.onSuccess;
                m.name = a
            }
            Ie() && (k["&gcs"] = cf(), bf(N.H) || (m.storage = "none"), bf(N.C) || (k.allowAdFeatures = !1, m.storeGac = !1));
            var O = e(N.qa) || e(N.Ja),
                K = e(N.Qc);
            if (O) {
                c.isGtmEvent || (m[N.Ja] = O);
                m._cd2l = !0;
            }
            K && !c.isGtmEvent && (m[N.Qc] = K);
            f.ka = g;
            f.qc = k;
            f.ja = m;
            return f
        },
        qn = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.we = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.og = "impressions" === b.translateIfKeyEquals ? An(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Bc = "promoView" === b.translateIfKeyEquals ? An(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Bc = "promoClick" === b.translateIfKeyEquals ? An(f, !0) : f;
                c.$a = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var k = b[g].products;
                    c.wb = "products" === b.translateIfKeyEquals ? An(k, !0) : k;
                    c.$a = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        rn = function(a, b) {
            function c(t) {
                return {
                    id: d(N.Ya),
                    affiliation: d(N.uh),
                    revenue: d(N.ca),
                    tax: d(N.sf),
                    shipping: d(N.Qd),
                    coupon: d(N.vh),
                    list: d(N.Pd) || t
                }
            }
            for (var d = function(t) {
                    return b.getWithConfig(t)
                }, e = d(N.V), f, g = 0; e && g < e.length && !(f = e[g][N.Pd]); g++);
            var k = d(N.Zb);
            if (Qb(k))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && pn(n, p, n[k[p]])
                }
            var r = null,
                u = d(N.wh);
            a === N.va || a === N.Eb ? r = {
                action: a,
                $a: c(),
                wb: An(e)
            } : a === N.Cb ? r = {
                action: "add",
                wb: An(e)
            } : a === N.Db ? r = {
                action: "remove",
                wb: An(e)
            } : a === N.wa ? r = {
                action: "detail",
                $a: c(f),
                wb: An(e)
            } : a === N.Ua ? r = {
                action: "impressions",
                og: An(e)
            } : "view_promotion" === a ? r = {
                action: "promo_view",
                Bc: An(u)
            } : "select_content" === a && u && 0 < u.length ? r = {
                action: "promo_click",
                Bc: An(u)
            } : "select_content" === a ? r = {
                action: "click",
                $a: {
                    list: d(N.Pd) || f
                },
                wb: An(e)
            } : a === N.ib || "checkout_progress" === a ? r = {
                action: "checkout",
                wb: An(e),
                $a: {
                    step: a === N.ib ? 1 : d(N.rf),
                    option: d(N.qf)
                }
            } : "set_checkout_option" === a && (r = {
                action: "checkout_option",
                $a: {
                    step: d(N.rf),
                    option: d(N.qf)
                }
            });
            r && (r.we = d(N.aa));
            return r
        },
        Yn = {},
        nn = function(a, b) {
            var c = Yn[a];
            Yn[a] = H(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var Zn = !1;
    Zn = !0;

    function $n() {
        var a = P;
        return a.gcq = a.gcq || new ao
    }
    var bo = function(a, b, c) {
            $n().register(a, b, c)
        },
        co = function(a, b, c, d) {
            $n().push("event", [b, a], c, d)
        },
        eo = function(a, b) {
            $n().push("config", [a], b)
        },
        fo = function(a, b, c, d) {
            $n().push("get", [a, b], c, d)
        },
        go = {},
        ho = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.m = !1
        },
        io = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.P = c || "";
            this.m = d;
            this.o = e
        },
        ao = function() {
            this.o = {};
            this.s = {};
            this.m = [];
            this.D = {
                AW: !1,
                UA: !1
            }
        },
        jo = function(a, b) {
            var c = Kl(b);
            return a.o[c.containerId] =
                a.o[c.containerId] || new ho
        },
        ko = function(a, b, c) {
            if (b) {
                var d = Kl(b);
                if (d && 1 === jo(a, b).status) {
                    jo(a, b).status = 2;
                    var e = {};
                    ak && (e.timeoutId = l.setTimeout(function() {
                        Ad(38);
                        Gj()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    go[d.containerId] = La();
                    if (Jk()) {} else {
                        var g =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c";
                        Ik() && (g += "&sign=" + Bd.ed);
                        var k = ("http:" != l.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            m = Gk(c, g) || k;
                        yb(m)
                    }
                }
            }
        },
        lo = function(a, b, c, d) {
            if (d.P) {
                var e = jo(a, d.P),
                    f = e.s;
                if (f) {
                    var g = H(c),
                        k = H(e.targetConfig[d.P]),
                        m = H(e.containerConfig),
                        n = H(e.remoteConfig),
                        p = H(a.s),
                        r = ae("gtm.uniqueEventId"),
                        u = Kl(d.P).prefix,
                        t = Pa(function() {
                            var v = g[N.Hb];
                            v && G(v)
                        }),
                        q = Nf(Mf(Of(Lf(Jf(Kf(If(Hf(Gf(g), k), m), n), p), function() {
                            nk(r, u, "2");
                            Zn && t()
                        }), function() {
                            nk(r, u, "3");
                            Zn && t()
                        }), function(v, x) {
                            a.D[v] = x
                        }), function(v) {
                            return a.D[v]
                        });
                    try {
                        nk(r, u, "1");
                        f(d.P, b, d.s, q)
                    } catch (v) {
                        nk(r, u, "4");
                    }
                }
            }
        };
    ao.prototype.register = function(a, b, c) {
        var d = jo(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), d.remoteConfig = c);
            var e = Kl(a),
                f = go[e.containerId];
            if (void 0 !== f) {
                var g = P[e.containerId].bootstrap,
                    k = e.prefix.toUpperCase();
                P[e.containerId]._spx && (k = k.toLowerCase());
                var m = ae("gtm.uniqueEventId"),
                    n = k,
                    p = La() - g;
                if (ak && !Lj[m]) {
                    m !== Hj && (Cj(), Hj = m);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Pj = Pj ? Pj + "," + r : "&cl=" + r
                }
                delete go[e.containerId]
            }
            this.flush()
        }
    };
    ao.prototype.push = function(a, b, c, d) {
        var e = Math.floor(La() / 1E3);
        ko(this, c, b[0][N.qa] || this.s[N.qa]);
        c && jo(this, c).m && (d = !1);
        this.m.push(new io(a, e, c, b, d));
        d || this.flush()
    };
    ao.prototype.insert = function(a, b, c) {
        var d = Math.floor(La() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new io(a, d, c, b, !1)) : this.m.push(new io(a, d, c, b, !1))
    };
    ao.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) !f.P || jo(this, f.P).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== jo(this, f.P).status && !a) {
                            this.m.push.apply(this.m, c);
                            return
                        }
                        ak && l.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        ya(f.m[0], function(u, t) {
                            H(Ta(u, t), b.s)
                        });
                        break;
                    case "config":
                        e.Ha = {};
                        ya(f.m[0], function(u) {
                            return function(t, q) {
                                H(Ta(t, q), u.Ha)
                            }
                        }(e));
                        var g = !!e.Ha[N.Xc];
                        delete e.Ha[N.Xc];
                        var k =
                            jo(this, f.P),
                            m = Kl(f.P),
                            n = m.containerId === m.id;
                        g || (n ? k.containerConfig = {} : k.targetConfig[f.P] = {});
                        k.m && g || lo(this, N.Aa, e.Ha, f);
                        k.m = !0;
                        delete e.Ha[N.ic];
                        n ? H(e.Ha, k.containerConfig) : H(e.Ha, k.targetConfig[f.P]);
                        d = !0;
                        break;
                    case "event":
                        e.Gc = {};
                        ya(f.m[0], function(u) {
                            return function(t, q) {
                                H(Ta(t, q), u.Gc)
                            }
                        }(e));
                        lo(this, f.m[1], e.Gc, f);
                        break;
                    case "get":
                        var p = {},
                            r = (p[N.Ka] = f.m[0], p[N.Wa] = f.m[1], p);
                        lo(this, N.Ia, r, f)
                }
                this.m.shift();
                mo(this, f)
            }
            e = {
                Ha: e.Ha,
                Gc: e.Gc
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var mo = function(a, b) {
        if ("require" !== b.type)
            if (b.P)
                for (var c = a.getCommandListeners(b.P)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], k = 0; k < g.length; k++) g[k]()
                    }
    };
    ao.prototype.getRemoteConfig = function(a) {
        return jo(this, a).remoteConfig
    };
    ao.prototype.getCommandListeners = function(a) {
        return jo(this, a).o
    };
    var no = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Jb(a, "className"),
                "gtm.elementId": a["for"] || Eb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Jb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Jb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        oo = function(a) {
            P.hasOwnProperty("autoEventsSettings") || (P.autoEventsSettings = {});
            var b = P.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        po = function(a, b, c) {
            oo(a)[b] = c
        },
        qo = function(a, b, c, d) {
            var e = oo(a),
                f = Ma(e, b, d);
            e[b] = c(f)
        },
        ro = function(a, b, c) {
            var d = oo(a);
            return Ma(d, b, c)
        };
    var Bo = !1,
        Co = [];

    function Do() {
        if (!Bo) {
            Bo = !0;
            for (var a = 0; a < Co.length; a++) G(Co[a])
        }
    }
    var Eo = function(a) {
        Bo ? G(a) : Co.push(a)
    };

    function Fo(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Go = new wa;

    function Ho(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Go.get(e);
            f || (f = new RegExp(b, d), Go.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Io(a, b) {
        function c(g) {
            var k = jg(g),
                m = hg(k, "protocol"),
                n = hg(k, "host", !0),
                p = hg(k, "port"),
                r = hg(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" == m && "80" == p || "https" == m && "443" == p) m = "web", p = "default";
            return [m, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Jo(a) {
        return Ko(a) ? 1 : 0
    }

    function Ko(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ta(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = H(a, {});
                H({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Jo(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var k = 0; k < g.length; k++)
                                if (b[g[k]]) {
                                    f = b[g[k]](c);
                                    break a
                                }
                        } catch (m) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Fo(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Ho(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Io(b, c)
        }
        return !1
    };
    var Lo = function(a) {
        if (P.addTargetToGroup) P.addTargetToGroup(a);
        else {}
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Po = "HA GF G UA AW DC".split(" "),
        Qo = !1;
    Qo = !0;
    var Ro = !1,
        So = !1;

    function To(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = H(b), b[N.Hb] && (c.eventCallback = b[N.Hb]), b[N.Pc] && (c.eventTimeout = b[N.Pc]));
        return c
    }

    function Uo(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ud()
        });
        return a["gtm.uniqueEventId"]
    }

    function Vo() {
        return Ro
    }
    var Wo = {
            config: function(a) {
                var b, c = Uo(a);
                return b
            },
            consent: function(a) {
                function b() {
                    Vo() && H(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Ad(39);
                    var c = Ud(),
                        d = a[1];
                    "default" === d ? (b(), Ze(a[2])) : "update" === d && (b(), af(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && ra(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Qb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = To(b, c),
                        e = Uo(a);
                    d["gtm.uniqueEventId"] = e;
                    return d
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    So = !0;
                    Vo();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Uo(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Qb(a[1]) ?
                    b = H(a[1]) : 3 == a.length && ra(a[1]) && (b = {}, Qb(a[2]) || ta(a[2]) ? b[a[1]] = H(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    b._clear = !0;
                    return b
                }
            }
        },
        Xo = {
            policy: !0
        };
    var Yo = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(), c.end = null)
            }
        },
        $o = function(a) {
            var b = Zo(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var qp = function(a) {
        if (pp(a)) return a;
        this.m = a
    };
    qp.prototype.Ai = function() {
        return this.m
    };
    var pp = function(a) {
        return !a || "object" !== Ob(a) || Qb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    qp.prototype.getUntrustedUpdateValue = qp.prototype.Ai;
    var rp = [],
        sp = !1,
        tp = !1,
        up = function(a) {
            return l["dataLayer"].push(a)
        },
        vp = function(a, b) {
            var c = P["dataLayer"],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = l.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (l.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function wp(a) {
        var b = a._clear;
        ya(a, function(d, e) {
            "_clear" !== d && (b && de(d, void 0), de(d, e))
        });
        Jd || (Jd = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Ud(), a["gtm.uniqueEventId"] = c, de("gtm.uniqueEventId", c));
        return Ek(a)
    }

    function xp() {
        var a = rp[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (za(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function yp() {
        for (var a = !1; !tp && 0 < rp.length;) {
            if (!sp && xp()) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = rp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                rp.unshift(c, e);
                sp = !0
            }
            tp = !0;
            delete Yd.eventModel;
            $d();
            var g = rp.shift();
            if (null != g) {
                var k = pp(g);
                if (k) {
                    var m = g;
                    g = pp(m) ? m.getUntrustedUpdateValue() : void 0;
                    for (var n = ["gtm.allowlist",
                            "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"
                        ], p = 0; p < n.length; p++) {
                        var r = n[p],
                            u = ae(r, 1);
                        if (ta(u) || Qb(u)) u = H(u);
                        Zd[r] = u
                    }
                }
                try {
                    if (qa(g)) try {
                        g.call(be)
                    } catch (A) {} else if (ta(g)) {
                        var t = g;
                        if (ra(t[0])) {
                            var q = t[0].split("."),
                                v = q.pop(),
                                x = t.slice(1),
                                z = ae(q.join("."), 2);
                            if (void 0 !== z && null !== z) try {
                                z[v].apply(z, x)
                            } catch (A) {}
                        }
                    } else {
                        if (za(g)) {
                            a: {
                                var w = g;
                                if (w.length && ra(w[0])) {
                                    var y = Wo[w[0]];
                                    if (y && (!k || !Xo[w[0]])) {
                                        g = y(w);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                tp = !1;
                                continue
                            }
                        }
                        a = wp(g) || a
                    }
                } finally {
                    k && $d(!0)
                }
            }
            tp = !1
        }
        return !a
    }

    function zp() {
        var b = yp();
        try {
            Yo(l["dataLayer"], Bd.J)
        } catch (c) {}
        return b
    }
    var Bp = function() {
            var a = ub("dataLayer", []),
                b = ub("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Vi(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Eo(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < P.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new qp(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var g, k = !0;
                g = k;
                !g && rp.push.apply(rp, e);
                var m = c.apply(a, e);
                g && rp.push.apply(rp, e);
                if (300 < this.length)
                    for (Ad(4); 300 < this.length;) this.shift();
                var n = "boolean" !== typeof m || m;
                return yp() && n
            };
            var d = a.slice(0);
            rp.push.apply(rp, d);
            if (Ap()) {
                G(zp)
            }
        },
        Ap = function() {
            var a = !0;
            return a
        };

    function Cp(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = La();
        return b < c + 3E5 && b > c - 9E5
    };
    var Dp = {};
    Dp.$c = new String("undefined");
    var Ep = function(a) {
        this.m = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Dp.$c ? b : a[d]);
            return c.join("")
        }
    };
    Ep.prototype.toString = function() {
        return this.m("undefined")
    };
    Ep.prototype.valueOf = Ep.prototype.toString;
    Dp.Th = Ep;
    Dp.oe = {};
    Dp.ii = function(a) {
        return new Ep(a)
    };
    var Fp = {};
    Dp.dj = function(a, b) {
        var c = Ud();
        Fp[c] = [a, b];
        return c
    };
    Dp.cg = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Fp[c];
            if (d && "function" === typeof d[b]) d[b]();
            Fp[c] = void 0
        }
    };
    Dp.Hi = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Dp.Wi = function(a) {
        if (a === Dp.$c) return a;
        var b = Ud();
        Dp.oe[b] = a;
        return 'google_tag_manager["' + Bd.J + '"].macro(' + b + ")"
    };
    Dp.Ri = function(a, b, c) {
        a instanceof Dp.Th && (a = a.m(Dp.dj(b, c)), b = oa);
        return {
            Ei: a,
            onSuccess: b
        }
    };
    var Qp = l.clearTimeout,
        Rp = l.setTimeout,
        R = function(a, b, c, d) {
            if (Jk()) {
                b && G(b)
            } else return yb(a, b, c, d)
        },
        Sp = function() {
            return new Date
        },
        Tp = function() {
            return l.location.href
        },
        Up = function(a) {
            return hg(jg(a), "fragment")
        },
        Vp = function(a) {
            return ig(jg(a))
        },
        Wp = function(a, b) {
            return ae(a, b || 2)
        },
        Xp = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = up(a)) : d = up(a);
            return d
        },
        Yp = function(a, b) {
            l[a] = b
        },
        U = function(a, b,
            c) {
            b && (void 0 === l[a] || c && !l[a]) && (l[a] = b);
            return l[a]
        },
        Zp = function(a, b, c) {
            return Qg(a, b, void 0 === c ? !0 : !!c)
        },
        $p = function(a, b, c) {
            return 0 === Zg(a, b, c)
        },
        aq = function(a, b) {
            if (Jk()) {
                b && G(b)
            } else Ab(a, b)
        },
        bq = function(a) {
            return !!ro(a, "init", !1)
        },
        cq = function(a) {
            po(a, "init", !0)
        },
        dq = function(a) {
            var b = Hd,
                c = "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            Ik() && (c += "&sign=" + Bd.ed, tb && (b = tb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = Ol("https://", "http://", b + c);
            R(d)
        },
        eq = function(a, b, c) {
            ak && (Rb(a) || ok(c, b, a))
        };
    var fq = Dp.Ri;
    var Cq = encodeURI,
        Y = encodeURIComponent,
        Dq = Bb;
    var Eq = function(a, b) {
        if (!a) return !1;
        var c = hg(jg(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Fq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function es() {
        return l.gaGlobal = l.gaGlobal || {}
    }
    var fs = function() {
            var a = es();
            a.hid = a.hid || va();
            return a.hid
        },
        gs = function(a, b) {
            var c = es();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Hs = function() {
        if (qa(l.__uspapi)) {
            var a = "";
            try {
                l.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var gt = window,
        ht = document,
        it = function(a) {
            var b = gt._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === gt["ga-disable-" + a]) return !0;
            try {
                var c = gt.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Mg("AMP_TOKEN", String(ht.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return ht.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var jt = {};

    function mt(a) {
        delete a.eventModel[N.ic];
        ot(a.eventModel)
    }
    var ot = function(a) {
        ya(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.Ma] || {};
        ya(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var rt = function(a, b, c) {
            co(b, c, a)
        },
        st = function(a, b, c) {
            co(b, c, a, !0)
        },
        wt = function(a, b) {};

    function tt(a, b) {}
    var Z = {
        g: {}
    };





    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(ge(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();
    Z.g.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.h = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = Wp("gtm.referrer", 1) || B.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? hg(jg(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Vp(String(b)) : String(b)
            })
        }();
    Z.g.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.h = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Wp("gtm.url", 1)) || Tp();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Vp(String(c));
                var e = jg(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? ta(k) ?
                    n = k : n = String(k).replace(/\s+/g, "").split(",") : n = [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var r = hg(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != r && (!m || "" !== r)) {
                            f = r;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = hg(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.g.ua = ["google"],
        function() {
            function a(q) {
                return bf(q)
            }

            function b(q, v, x) {
                var z = !1;
                if (Ie() && !z && !f[q]) {
                    var w = !bf(N.H),
                        y = function() {
                            var A = hj(),
                                C = "gtm" + Ud(),
                                F = r(v);
                            F["&gtm"] = Nk(!0);
                            var D = {
                                name: C
                            };
                            p(F, D, !0);
                            var E = void 0,
                                O = D._useUp;
                            A(function() {
                                var K = A.getByName(x);
                                K && (E = K.get("clientId"))
                            });
                            A("create", q, D);
                            w && bf(N.H) && (w = !1, A(function() {
                                var K = hj().getByName(C);
                                !K || K.get("clientId") === E && O || (F["&gcs"] = cf(), F["&gcu"] = "1", K.set(F), K.send("pageview"))
                            }));
                            A(function() {
                                A.remove(C)
                            })
                        };
                    Ne(y, N.H);
                    Ne(y, N.C);
                    f[q] = !0
                }
            }
            var c = !1;
            c = !0;
            var d, e = {},
                f = {},
                g = {
                    name: !0,
                    clientId: !0,
                    sampleRate: !0,
                    siteSpeedSampleRate: !0,
                    alwaysSendReferrer: !0,
                    allowAnchor: !0,
                    allowLinker: !0,
                    cookieName: !0,
                    cookieDomain: !0,
                    cookieExpires: !0,
                    cookiePath: !0,
                    cookieUpdate: !0,
                    cookieFlags: !0,
                    legacyCookieDomain: !0,
                    legacyHistoryImport: !0,
                    storage: !0,
                    useAmpClientId: !0,
                    storeGac: !0,
                    _cd2l: !0,
                    _useUp: !0,
                    _cs: !0
                },
                k = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                m = {
                    urlPassthrough: !0
                };
            var n = function(q, v) {
                if (q)
                    for (var x in q)
                        if (!m[x] && q.hasOwnProperty(x)) {
                            var z = k[x] ? Da(q[x]) : q[x];
                            "anonymizeIp" != x || z || (z = void 0);
                            v[x] = z
                        }
            };
            var p = function(q, v, x) {
                    var z = 0;
                    if (q)
                        for (var w in q)
                            if (!m[w] &&
                                q.hasOwnProperty(w) && (x && g[w] || !x && void 0 === g[w])) {
                                var y = k[w] ? Da(q[w]) : q[w];
                                "anonymizeIp" != w || y || (y = void 0);
                                v[w] = y;
                                z++
                            }
                    return z
                },
                r = function(q) {
                    var v = {};
                    q.vtp_gaSettings && H(Fq(q.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), v);
                    H(Fq(q.vtp_fieldsToSet, "fieldName", "value"), v);
                    Da(v.urlPassthrough) && (v._useUp = !0);
                    q.vtp_transportUrl && (v._x_19 = q.vtp_transportUrl);
                    if (!c) {
                        v._x_19 && (v._cd2l = !0);
                        bf(N.H) || (v.storage = "none");
                        bf(N.C) || (v.allowAdFeatures = !1, v.storeGac = !1);
                        en() || (v.allowAdFeatures = !1);
                        dn() || (v.allowAdPersonalizationSignals = !1);
                        if (Da(v.urlPassthrough)) {
                            var x = !1;
                            Ie() && !x && (v._cs = a)
                        }
                    }
                    return v
                },
                u = function(q, v) {
                    var x = q.vtp_autoLinkDomains || "";
                    x && kj(v, x, !!q.vtp_useHashAutoLink, !!q.vtp_decorateFormsAutoLink);
                },
                t = function(q) {
                    function v(pa, ea) {
                        void 0 !== q[ea] && M("set", pa, q[ea])
                    }

                    function x() {
                        if (q.vtp_doubleClick || "DISPLAY_FEATURES" == q.vtp_advertisingFeaturesType) {
                            var pa = "_dc_gtm_" + String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                            M("require", "displayfeatures", void 0, {
                                cookieName: pa
                            })
                        }
                    }
                    var z = {},
                        w = {},
                        y = {},
                        A = {};
                    if (q.vtp_gaSettings) {
                        var C = q.vtp_gaSettings;
                        H(Fq(C.vtp_contentGroup, "index", "group"), w);
                        H(Fq(C.vtp_dimension, "index", "dimension"), y);
                        H(Fq(C.vtp_metric, "index", "metric"), A);
                        var F = H(C);
                        F.vtp_fieldsToSet =
                            void 0;
                        F.vtp_contentGroup = void 0;
                        F.vtp_dimension = void 0;
                        F.vtp_metric = void 0;
                        q = H(q, F)
                    }
                    H(Fq(q.vtp_contentGroup, "index", "group"), w);
                    H(Fq(q.vtp_dimension, "index", "dimension"), y);
                    H(Fq(q.vtp_metric, "index", "metric"), A);
                    var D = r(q),
                        E = "",
                        O = jj(q.vtp_functionName);
                    if (qa(O)) {
                        var K = "",
                            L = "";
                        q.vtp_setTrackerName && "string" == typeof q.vtp_trackerName ? "" !== q.vtp_trackerName && (L = q.vtp_trackerName, K = L + ".") : (L = "gtm" + Ud(), K = L + ".");
                        var M = function(pa) {
                                var ea = [].slice.call(arguments, 0);
                                ea[0] = K + ea[0];
                                O.apply(window, ea)
                            },
                            J =
                            function(pa, ea) {
                                return void 0 === ea ? ea : pa(ea)
                            },
                            I = function(pa, ea) {
                                if (ea)
                                    for (var Na in ea) ea.hasOwnProperty(Na) && (c ? D[pa + Na] = ea[Na] : M("set", pa + Na, ea[Na]))
                            },
                            V = function() {
                                return null
                            },
                            T = function(pa, ea) {
                                return void 0 === q[pa] ? z[ea] : q[pa]
                            },
                            X = String(q.vtp_trackingId || z.trackingId || "");
                        if (c) {
                            var S = function() {
                                if (q.vtp_doubleClick || "DISPLAY_FEATURES" == q.vtp_advertisingFeaturesType) D.displayfeatures = !0
                            };
                            I("contentGroup", w);
                            I("dimension", y);
                            I("metric", A);
                            var W = {};
                            q.vtp_enableEcommerce && (D.gtmEcommerceData = V());
                            if ("TRACK_EVENT" === q.vtp_trackType) E = "track_event", S(), D.eventCategory = String(T("vtp_eventCategory", "category")), D.eventAction = String(T("vtp_eventAction", "action")), D.eventLabel = J(String, T("vtp_eventLabel", "label")), D.value = J(Ca, T("vtp_eventValue", "value"));
                            else if ("TRACK_PAGEVIEW" == q.vtp_trackType) {
                                if (E = N.Wb, S(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == q.vtp_advertisingFeaturesType && (D.remarketingLists = !0), q.vtp_autoLinkDomains) {
                                    var da = {};
                                    da[N.N] =
                                        q.vtp_autoLinkDomains;
                                    da.use_anchor = q.vtp_useHashAutoLink;
                                    da[N.Kb] = q.vtp_decorateFormsAutoLink;
                                    D[N.fa] = da
                                }
                            } else "TRACK_SOCIAL" === q.vtp_trackType ? (E = "track_social", D.socialNetwork = String(q.vtp_socialNetwork), D.socialAction = String(q.vtp_socialAction), D.socialTarget = String(q.vtp_socialActionTarget)) : "TRACK_TIMING" == q.vtp_trackType && (E = "timing_complete", D.eventCategory = String(T("vtp_timingCategory", "category")), D.timingVar = String(T("vtp_timingVar", "name")), D.value = Ca(T("vtp_timingValue", "value")), D.eventLabel =
                                J(String, T("vtp_timingLabel", "label")));
                            q.vtp_enableRecaptcha && (D.enableRecaptcha = !0);
                            q.vtp_enableLinkId && (D.enableLinkId = !0);
                            n(D, W);
                            D.name || (W.gtmTrackerName = L);
                            W.gaFunctionName = q.vtp_functionName;
                            void 0 !== q.vtp_nonInteraction && (W.nonInteraction = q.vtp_nonInteraction);
                            var ka = Of(Lf(Gf(W), q.vtp_gtmOnSuccess), q.vtp_gtmOnFailure);
                            ka.isGtmEvent = !0;
                            yn(X, E, Date.now(), ka)
                        }
                        if (!c) {
                            var Aa = function(pa, ea) {
                                    void 0 !== ea && M("set", pa, ea)
                                },
                                Ja = {
                                    name: L
                                };
                            p(D, Ja, !0);
                            O("create", X, Ja);
                            M("set", "&gtm", Nk(!0));
                            I("contentGroup", w);
                            I("dimension", y);
                            I("metric", A);
                            var md = !1;
                            Ie() && !md && (M("set", "&gcs", cf()), b(X, q, L));
                            D._x_19 && D._x_20 && !e[L] && (e[L] = !0, O(oj(L, String(D._x_20))));
                            q.vtp_enableRecaptcha && M("require", "recaptcha", "recaptcha.js");
                            v("nonInteraction", "vtp_nonInteraction");
                            var Oe = {};
                            p(D, Oe, !1) && M("set", Oe);
                            q.vtp_enableLinkId && M("require", "linkid", "linkid.js");
                            M("set", "hitCallback", function() {
                                var pa = D && D.hitCallback;
                                qa(pa) && pa();
                                q.vtp_gtmOnSuccess()
                            })
                        }
                        var $b;
                        if ("TRACK_EVENT" == q.vtp_trackType) {
                            if (!c) {}
                        } else if ("TRACK_SOCIAL" == q.vtp_trackType) {
                            if (!c) {}
                        } else if ("TRACK_TRANSACTION" == q.vtp_trackType) {} else if ("TRACK_TIMING" == q.vtp_trackType) {
                            if (!c) {}
                        } else if ("DECORATE_LINK" == q.vtp_trackType) {} else if ("DECORATE_FORM" == q.vtp_trackType) {} else if ("TRACK_DATA" == q.vtp_trackType) {} else if (!c) {
                            if (q.vtp_enableEcommerce) {
                                var Nd = {};
                                Ik() && D._x_19 && (Nd._x_19 = D._x_19);
                                M("require", "ec", "ec.js", Nd);
                                V()
                            }
                            x();
                            if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == q.vtp_advertisingFeaturesType) {
                                var Cg =
                                    "_dc_gtm_" + String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                M("require", "adfeatures", {
                                    cookieName: Cg
                                })
                            }
                            $b ? M("send", "pageview", $b) : M("send", "pageview");
                            u(q, K);
                            Da(D.urlPassthrough) && lj(K)
                        }
                        if (!d) {
                            var dc = q.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                            q.vtp_useInternalVersion && !q.vtp_useDebugVersion && (dc = "internal/" + dc);
                            d = !0;
                            var uc = Gk(D._x_19, "/analytics.js"),
                                Dg = Ol("https:", "http:", "//www.google-analytics.com/" + dc, D && !!D.forceSSL);
                            R("analytics.js" === dc && uc ? uc : Dg, function() {
                                var pa = hj();
                                pa && pa.loaded || q.vtp_gtmOnFailure();
                            }, q.vtp_gtmOnFailure)
                        }
                    } else G(q.vtp_gtmOnFailure)
                };
            (function(q) {
                Z.__ua = q;
                Z.__ua.h = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0
            })(function(q) {
                ff(function() {
                    t(q)
                }, [N.H, N.C])
            })
        }();









    Z.g.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var k = e.shift(),
                                m = a(d, e, f, g);
                            if ("SCRIPT" == String(k.nodeName).toUpperCase() && "text/gtmscript" == k.type) {
                                var n = B.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = k.id;
                                n.text = k.text || k.textContent || k.innerHTML || "";
                                k.charset && (n.charset = k.charset);
                                var p = k.getAttribute("data-gtmsrc");
                                p && (n.src = p, wb(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var r = []; k.firstChild;) r.push(k.removeChild(k.firstChild));
                                d.insertBefore(k, null);
                                a(k, r, m, g)()
                            } else d.insertBefore(k, null), m()
                        } else f()
                    } catch (u) {
                        G(g)
                    }
                }
            }
            var c = function(d) {
                if (B.body) {
                    var e =
                        d.vtp_gtmOnFailure,
                        f = fq(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.Ei,
                        k = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(g, k, e) : a(B.body, Gb(g), k, e)()
                } else Rp(function() {
                        c(d)
                    },
                    200)
            };
            Z.__html = c;
            Z.__html.h = "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0
        }();








    var xt = {};
    xt.macro = function(a) {
        if (Dp.oe.hasOwnProperty(a)) return Dp.oe[a]
    }, xt.onHtmlSuccess = Dp.cg(!0), xt.onHtmlFailure = Dp.cg(!1);
    xt.dataLayer = be;
    xt.callback = function(a) {
        Sd.hasOwnProperty(a) && qa(Sd[a]) && Sd[a]();
        delete Sd[a]
    };
    xt.bootstrap = 0;
    xt._spx = !1;

    function yt() {
        P[Bd.J] = xt;
        Qa(Td, Z.g);
        Gc = Gc || Dp;
        Hc = Pc
    }

    function zt() {
        var a = !1;
        a && dj("INIT");
        we().o();
        P = l.google_tag_manager = l.google_tag_manager || {};
        pl();
        Yh.enable_gbraid_cookie_write = !0;
        var b = !!P[Bd.J];
        if (b) {
            var c = P.zones;
            c && c.unregisterChild(Bd.J);
        } else {
            for (var g = data.resource || {}, k = g.macros || [], m = 0; m < k.length; m++) zc.push(k[m]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) Cc.push(n[p]);
            for (var r = g.predicates || [], u = 0; u < r.length; u++) Bc.push(r[u]);
            for (var t = g.rules || [], q = 0; q < t.length; q++) {
                for (var v =
                        t[q], x = {}, z = 0; z < v.length; z++) x[v[z][0]] = Array.prototype.slice.call(v[z], 1);
                Ac.push(x)
            }
            Ec = Z;
            Fc = Jo;
            yt();
            Bp();
            Qi = !1;
            Ri = 0;
            if ("interactive" == B.readyState && !B.createEventObject || "complete" == B.readyState) Ti();
            else {
                Cb(B, "DOMContentLoaded", Ti);
                Cb(B, "readystatechange", Ti);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var w = !0;
                    try {
                        w = !l.frameElement
                    } catch (D) {}
                    w && Ui()
                }
                Cb(l, "load", Ti)
            }
            Bo = !1;
            "complete" === B.readyState ? Do() : Cb(l, "load", Do);
            ak && l.setInterval(Uj, 864E5);
            Kd = (new Date).getTime();
            if (a) {
                var F = ej("INIT");
            }
        }
    }
    (function(a) {
        if (!l["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (B.referrer) {
                var c = jg(B.referrer);
                b = "cct.google" === gg(c, "host")
            }
            if (!b) {
                var d = Qg("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (l["__TAGGY_INSTALLED"] = !0, yb("https://cct.google/taggy/agent.js"))
        }
        var f = function(r) {
                var u = "GTM",
                    t = "GTM";
                var q = l["google.tagmanager.debugui2.queue"];
                q || (q = [], l["google.tagmanager.debugui2.queue"] = q, yb("https://" + Bd.Cd + "/debug/bootstrap?id=" + Bd.J + "&src=" + t + "&cond=" + r + "&gtm=" + Nk()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: tb,
                        containerProduct: u,
                        debug: !1,
                        id: Bd.J
                    }
                };
                v.data.resume = function() {
                    a()
                };
                Bd.Yg && (v.data.initialPublish = !0);
                q.push(v)
            },
            g = void 0,
            k = hg(l.location, "query", !1, void 0, "gtm_debug");
        Cp(k) && (g = 2);
        if (!g && B.referrer) {
            var m = jg(B.referrer);
            "tagassistant.google.com" === gg(m, "host") && (g = 3)
        }
        if (!g) {
            var n = Qg("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = B.documentElement.getAttribute("data-tag-assistant-present");
            Cp(p) && (g = 5)
        }
        g && tb ? f(g) : a()
    })(zt);

})()