if (self.CavalryLogger) {
    CavalryLogger.start_js(["oMPKeM6"]);
}

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
__d("pageID", ["WebSession"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("WebSession").getPageId_DO_NOT_USE();
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
__d("FBJSON", [], (function(a, b, c, d, e, f) {
    a = JSON.parse;
    b = JSON.stringify;
    f.parse = a;
    f.stringify = b
}), 66);
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
__d("WebPixelRatio", ["SiteData"], (function(a, b, c, d, e, f, g) {
    function a() {
        return c("SiteData").pr != null && c("SiteData").pr > 0 ? c("SiteData").pr : window.devicePixelRatio || 1
    }
    g.get = a
}), 98);
__d("PixelRatioConst", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        cookieName: "dpr"
    })
}), null);
__d("WebPixelRatioDetector", ["Cookie", "DOMEventListener", "PixelRatioConst", "Run", "WebPixelRatio"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
        i = !1,
        j = !1;

    function k() {
        return window.devicePixelRatio || 1
    }

    function l() {
        c("Cookie").set(c("PixelRatioConst").cookieName, String(k()))
    }

    function m() {
        c("Cookie").clear(c("PixelRatioConst").cookieName)
    }

    function n() {
        if (i) return;
        i = !0;
        j && m();
        k() !== d("WebPixelRatio").get() && l()
    }

    function a(a) {
        a && (j = !0);
        if (h) return;
        h = !0;
        "onpagehide" in window && d("DOMEventListener").add(window, "pagehide", n);
        d("Run").onBeforeUnload(n, !1)
    }
    g.startDetecting = a
}), 98);
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
__d("UnverifiedXD", ["XD"], (function(a, b, c, d, e, f, g) {
    g["default"] = d("XD").UnverifiedXD
}), 98);
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
__d("Banzai", ["cr:1642797"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1642797")
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
__d("guid", [], (function(a, b, c, d, e, f) {
    function a() {
        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
    }
    f["default"] = a
}), 66);
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
__d("BanzaiScubaMigrationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1949898");
    c = b("FalcoLoggerInternal").create("banzai_scuba_migration", a);
    e.exports = c
}), null);
__d("BanzaiScuba_DEPRECATED", ["BanzaiScubaMigrationFalcoEvent", "FBLogger"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b, d) {
            this.posted = !1, a || c("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"), this.dataset = a, this.$1 = b, this.options = d
        }
        var b = a.prototype;
        b.$2 = function(a, b, d) {
            if (this.posted) {
                c("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");
                return a
            }
            a = a || {};
            a[b] = d;
            return a
        };
        b.addNormal = function(a, b) {
            this.normal = this.$2(this.normal, a, b);
            return this
        };
        b.addInteger = function(a, b) {
            this["int"] = this.$2(this["int"], a, b);
            return this
        };
        b.addDenorm = function(a, b) {
            this.denorm = this.$2(this.denorm, a, b);
            return this
        };
        b.addTagSet = function(a, b) {
            this.tags = this.$2(this.tags, a, b);
            return this
        };
        b.addNormVector = function(a, b) {
            this.normvector = this.$2(this.normvector, a, b);
            return this
        };
        b.post = function() {
            var a = this;
            if (this.posted) {
                c("FBLogger")("BanzaiScuba").warn("Trying to re-post");
                return
            }
            if (!this.dataset) return;
            var b = {};
            b._ds = this.dataset;
            b._options = this.options;
            this.normal && (b.normal = this.normal);
            this["int"] && (b["int"] = this["int"]);
            this.denorm && (b.denorm = this.denorm);
            this.tags && (b.tags = this.tags);
            this.normvector && (b.normvector = this.normvector);
            this.$1 !== null && this.$1 !== "" && this.$1 !== void 0 && (b._lid = this.$1);
            c("BanzaiScubaMigrationFalcoEvent").log(function() {
                return {
                    dataset: a.dataset,
                    payload: b
                }
            });
            this.posted = !0
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FbtLogging", ["cr:1094907"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("cr:1094907") == null ? void 0 : b("cr:1094907").logImpression;
    g.logImpression = a
}), 98);
__d("IntlQtEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1848815");
    c = b("FalcoLoggerInternal").create("intl_qt_event", a);
    e.exports = c
}), null);
__d("OdsWebBatchFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1838142");
    c = b("FalcoLoggerInternal").create("ods_web_batch", a);
    e.exports = c
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