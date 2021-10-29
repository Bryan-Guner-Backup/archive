if (self.CavalryLogger) {
    CavalryLogger.start_js(["Qxyw1\/V"]);
}

__d("CometVisualCompletionAttributes", ["CometVisualCompletionConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = {
        CSS_IMG: (a = {}, a[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").CSS_IMG, a),
        IGNORE: (b = {}, b[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").IGNORE, b),
        IGNORE_DYNAMIC: (c = {}, c[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").IGNORE_DYNAMIC, c),
        IGNORE_LATE_MUTATION: (e = {}, e[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").IGNORE_LATE_MUTATION, e),
        LOADING_STATE: (f = {}, f[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").LOADING_STATE, f),
        MEDIA_VC_IMAGE: (a = {}, a[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").MEDIA_VC_IMAGE, a)
    };
    g["default"] = b
}), 98);
__d("coerceImageishSprited", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (!a || typeof a !== "object" || !a.sprited) return null;
        return a.sprited === 1 ? {
            type: "css",
            className: a.spriteMapCssClass + " " + a.spriteCssClass,
            identifier: a.loggingID
        } : {
            type: "cssless",
            style: {
                backgroundImage: "url('" + a.spi + "')",
                backgroundPosition: a.p,
                backgroundSize: a.sz,
                width: a.w + "px",
                height: a.h + "px",
                backgroundRepeat: "no-repeat",
                display: "inline-block"
            },
            identifier: a.loggingID
        }
    }
    f["default"] = a
}), 66);
__d("coerceImageishURL", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a && typeof a === "object" && !a.sprited && typeof a.uri === "string" && a.width !== void 0 && a.height !== void 0) return a;
        else return null
    }
    f["default"] = a
}), 66);
__d("DGWRequestStreamDeferredClient", ["Promise", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.createStream = function(a, b, d, e, f) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(c) {
                return c.createStream(a, b, d, e, f)
            })
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(b("Promise"))(function(a) {
                c("requireDeferred")("DGWRequestStreamClient").__setRef("DGWRequestStreamDeferredClient").onReady(function(b) {
                    a(new b())
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("MemoizationInstrumentation", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = null;

    function a(a) {
        i == null || h(0, 2221), i = a
    }

    function b(a, b) {
        return i ? i.functionCall(a, b) : null
    }
    g.inject = a;
    g.onFunctionCall = b
}), 98);
__d("emptyObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {};
    b = a;
    f["default"] = b
}), 66);
__d("memoizeWithArgs", ["MemoizationInstrumentation"], (function(a, b, c, d, e, f, g) {
    var h = Object.prototype.hasOwnProperty;

    function a(a, b, c) {
        var e, f = c || a.name || "unknown";
        c = function() {
            e || (e = {});
            var c = d("MemoizationInstrumentation").onFunctionCall("memoizeWithArgs", f),
                g = b.apply(void 0, arguments),
                i = !0;
            h.call(e, g) || (i = !1, e[g] = a.apply(void 0, arguments));
            c && c(i);
            return e[g]
        };
        return c
    }
    g["default"] = a
}), 98);
__d("shallowEqual", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;

    function h(a, b) {
        if (a === b) return a !== 0 || b !== 0 || 1 / a === 1 / b;
        else return a !== a && b !== b
    }

    function a(a, b) {
        if (h(a, b)) return !0;
        if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) return !1;
        var c = Object.keys(a),
            d = Object.keys(b);
        if (c.length !== d.length) return !1;
        for (var d = 0; d < c.length; d++)
            if (!g.call(b, c[d]) || !h(a[c[d]], b[c[d]])) return !1;
        return !0
    }
    f["default"] = a
}), 66);
__d("isClickIDBlacklistSVDomainURI", ["ClickIDDomainBlacklistSVConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = ["http", "https"];

    function a(a) {
        return !g.includes(a.getProtocol()) ? !1 : b("ClickIDDomainBlacklistSVConfig").domains.some(function(b) {
            if (a.isSubdomainOfDomain(b)) return !0;
            if (!b.includes(".")) {
                var c = a.getDomain().split(".");
                return c.includes(b)
            }
            return !1
        })
    }
    e.exports = a
}), null);
__d("isExpressWifiDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)expresswifi\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("isFacebookSVDomainURI", ["FBDomainsSVConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = ["http", "https"];

    function a(a) {
        if (g.indexOf(a.getProtocol()) === -1) return !1;
        a = b("FBDomainsSVConfig").domains.get(a.getDomain());
        return a != null
    }
    e.exports = a
}), null);
__d("isFbDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fb\\.com?$", "i"),
        h = ["http", "https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("asset", [], (function(a, b, c, d, e, f) {
    function a() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
        throw new Error("asset(" + b.join(",") + "): Unexpected asset reference")
    }
    e.exports = a
}), null);
__d("expectationViolation", ["ErrorNormalizeUtils", "ExecutionEnvironment", "FBLogger", "cr:840411", "emptyFunction", "sprintf"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d = c("emptyFunction");

    function a(a) {
        var b;
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        (b = c("FBLogger")("expectation_violation").blameToPreviousFrame()).warn.apply(b, [a].concat(e))
    }
    a.setHandler = b;

    function b(a) {
        d = a
    }
    g["default"] = a
}), 98);