if (self.CavalryLogger) {
    CavalryLogger.start_js(["rkIlzRu"]);
}

__d("camelize", [], (function(a, b, c, d, e, f) {
    var g = /-(.)/g;

    function a(a) {
        return a.replace(g, function(a, b) {
            return b.toUpperCase()
        })
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
__d("FBJSON", [], (function(a, b, c, d, e, f) {
    a = JSON.parse;
    b = JSON.stringify;
    f.parse = a;
    f.stringify = b
}), 66);
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
__d("WebPixelRatio", ["SiteData"], (function(a, b, c, d, e, f, g) {
    function a() {
        return c("SiteData").pr != null && c("SiteData").pr > 0 ? c("SiteData").pr : window.devicePixelRatio || 1
    }
    g.get = a
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
__d("Locale", ["SiteData"], (function(a, b, c, d, e, f) {
    function a() {
        return b("SiteData").is_rtl
    }
    e.exports = {
        isRTL: a
    }
}), null);
__d("Banzai", ["cr:1642797"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1642797")
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
__d("DateConsts", [], (function(a, b, c, d, e, f) {
    var g = 1e3;
    c = 60;
    d = 60;
    e = 24;
    var h = 7,
        i = 12,
        j = 1e3,
        k = 30.43,
        l = 4.333,
        m = 365.242,
        n = c * d,
        o = n * e,
        p = o * h,
        q = o * m,
        r = g * c,
        s = r * d,
        t = g * o,
        u = t * h,
        v = t * m,
        w = {
            SUNDAY: 0,
            MONDAY: 1,
            TUESDAY: 2,
            WEDNESDAY: 3,
            THURSDAY: 4,
            FRIDAY: 5,
            SATURDAY: 6
        };
    Object.freeze(w);

    function a(a, b) {
        return new Date(a, b, 0).getDate()
    }

    function b() {
        return Date.now() / g
    }
    var x = {
        instantRange: {
            since: -864e10,
            until: 864e10 + 1
        }
    };
    f.MS_PER_SEC = g;
    f.SEC_PER_MIN = c;
    f.MIN_PER_HOUR = d;
    f.HOUR_PER_DAY = e;
    f.DAYS_PER_WEEK = h;
    f.MONTHS_PER_YEAR = i;
    f.US_PER_MS = j;
    f.AVG_DAYS_PER_MONTH = k;
    f.AVG_WEEKS_PER_MONTH = l;
    f.AVG_DAYS_PER_YEAR = m;
    f.SEC_PER_HOUR = n;
    f.SEC_PER_DAY = o;
    f.SEC_PER_WEEK = p;
    f.SEC_PER_YEAR = q;
    f.MS_PER_MIN = r;
    f.MS_PER_HOUR = s;
    f.MS_PER_DAY = t;
    f.MS_PER_WEEK = u;
    f.MS_PER_YEAR = v;
    f.DAYS = w;
    f.getDaysInMonth = a;
    f.getCurrentTimeInSeconds = b;
    f["private"] = x
}), 66);
__d("CurrentLocale", ["IntlCurrentLocale"], (function(a, b, c, d, e, f, g) {
    a = {
        get: function() {
            return c("IntlCurrentLocale").code
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("forEachObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;

    function a(a, b, c) {
        for (var d in a) {
            var e = d;
            g.call(a, e) && b.call(c, a[e], e, a)
        }
    }
    f["default"] = a
}), 66);
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
__d("PerfXSharedFields", ["CurrentLocale", "Locale", "SiteData"], (function(a, b, c, d, e, f, g) {
    var h = {
        addCommonValues: function(a) {
            var b = window.navigator;
            b && b.hardwareConcurrency !== void 0 && (a.num_cores = b.hardwareConcurrency);
            b && b.deviceMemory && (a.ram_gb = b.deviceMemory);
            b && b.connection && (typeof b.connection.downlink === "number" && (a.downlink_megabits = b.connection.downlink), typeof b.connection.effectiveType === "string" && (a.effective_connection_type = b.connection.effectiveType), typeof b.connection.rtt === "number" && (a.rtt_ms = b.connection.rtt));
            a.client_push_phase = c("SiteData").push_phase;
            a.client_revision = c("SiteData").client_revision;
            c("SiteData").server_revision != null && (a.server_revision = c("SiteData").server_revision);
            a.locale = c("CurrentLocale").get();
            a.isRTL = Number(c("Locale").isRTL());
            return a
        },
        getCommonData: function() {
            var a = {};
            h.addCommonValues(a);
            return a
        }
    };
    f.exports = h
}), 34);
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