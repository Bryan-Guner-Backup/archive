if (self.CavalryLogger) {
    CavalryLogger.start_js(["hX3fcCs"]);
}

__d("GHLBox", ["Promise", "WebStorage", "gkx", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("json-bigint").__setRef("GHLBox"),
        i = atob("YXJlc19sYXN0X3NpZ25hbF9mbHVzaA=="),
        j = atob("YmR6X3BsYXliYWNrX3N0YXRl"),
        k = 36,
        l = c("gkx")("3499"),
        m = 5 * 24 * 60 * 60 * 1e3,
        n = 10 * 24 * 60 * 60 * 1e3;
    a = 3;
    d = function() {
        return new(b("Promise"))(function(a) {
            h.onReady(function(b) {
                var c = o(b, !0);
                b = o(b);
                if (c === 0 && b === 0) return a(!1);
                if (c !== b) {
                    p(Date.now());
                    return a(!0)
                }
                return Date.now() - b <= m ? a(!0) : a(!1)
            })
        })
    };
    var o = function(a, b) {
        b === void 0 && (b = !1);
        var d = c("WebStorage").getLocalStorageForRead();
        if (!d || !l) return 0;
        var e;
        if (!b) {
            b = (b = d.getItem(i)) != null ? b : "";
            e = Number.parseInt(b, 10)
        } else {
            b = (d = (a = a.parse(d.getItem(j))) == null ? void 0 : a.session_key) != null ? d : "";
            e = Number.parseInt(b, k)
        }
        return !Number.isFinite(e) ? 0 : e
    };
    e = function() {
        var a = c("WebStorage").getLocalStorage();
        if (!a || !l) return;
        if (a.getItem(i) !== null) return;
        if (a.getItem(j) !== null) return;
        p(Date.now() - n)
    };
    var p = function(a) {
        h.onReady(function(b) {
            var d = c("WebStorage").getLocalStorage();
            if (d && l) {
                d.setItem(i, a.toString());
                var e = {
                    session_key: a.toString(k),
                    buffer_length: 60
                };
                d.setItem(j, b.stringify(e))
            }
        })
    };
    f = p;
    d = d;
    e = e;
    g.MinimumHiddenAdsToUpdateLocalStorage = a;
    g.s = f;
    g.r = d;
    g.i = e
}), 98);