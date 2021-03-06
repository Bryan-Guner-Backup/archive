if (self.CavalryLogger) {
    CavalryLogger.start_js(["rJSRItr"]);
}

__d("DesktopHscrollUnitEventConstants", [], (function(a, b, c, d, e, f) {
    a = "DesktopHScrollUnit/itemInserted";
    b = "DesktopHScrollUnit/itemShown";
    c = "DesktopHScrollUnit/HideIndividualItem";
    d = "DesktopHScrollUnit/scrollItemBeforeXout";
    e = "DesktopHScrollUnit/unhideIndividualItem";
    var g = "logLastAdXout",
        h = "onXoutIndividualItem";
    f.HSCROLL_ITEM_INSERTED_EVENT = a;
    f.HSCROLL_ITEM_SHOWN_EVENT = b;
    f.HSCROLL_ITEM_HIDE_EVENT = c;
    f.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT = d;
    f.HSCROLL_ITEM_UNHIDE_EVENT = e;
    f.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN = g;
    f.HSCROLL_PAGER_ITEM_HIDE_EVENT = h
}), 66);
__d("EntstreamFeedObject", ["csx", "CSS", "Parent"], (function(a, b, c, d, e, f, g) {
    var h = {
        getRoot: function(a) {
            return b("Parent").bySelector(a, "._5jmm")
        },
        getHscrollOuterRootIfAvailable: function(a) {
            a = a;
            b("CSS").matchesSelector(a, "._170y") && (a = h.getRoot(a.parentNode));
            return a
        }
    };
    e.exports = h
}), null);
__d("EntstreamFeedObjectTracking", ["csx", "CSS", "DOM", "EntstreamFeedObject", "Focus", "ge"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = new Map();

    function a(a) {
        var b = this.getRoot(a.nodeID);
        if (!b) return;
        var d = c("DOM").scry(b, "._5v9_"),
            e = d && d.length ? d : [b];
        a.actorIDs.forEach(function(a) {
            var b = [].concat(i.get(a) || []);
            b.push.apply(b, e);
            i.set(a, b)
        })
    }

    function b(a) {
        var b = this.getRoot(a.nodeID);
        (i.get(a.actorID) || []).forEach(function(a) {
            if (a === b) return;
            d("CSS").hide(a)
        })
    }

    function e(a) {
        var b = this.getRoot(a.nodeID);
        (i.get(a.actorID) || []).forEach(function(a) {
            d("CSS").show(a)
        });
        b && d("Focus").setWithoutOutline(b)
    }

    function f(a) {
        a = c("ge")(a);
        return a ? d("EntstreamFeedObject").getRoot(a) : null
    }
    g.register = a;
    g.hideAllFromActor = b;
    g.unhideAllFromActor = e;
    g.getRoot = f
}), 98);
__d("collectDataAttributes", ["DataAttributeUtils", "getContextualParent"], (function(a, b, c, d, e, f) {
    var g = "normal";

    function a(a, c, d) {
        var e = {},
            f = [],
            h = c.length,
            i;
        for (i = 0; i < h; ++i) e[c[i]] = {}, f.push("data-" + c[i]);
        if (d) {
            e[g] = {};
            for (i = 0; i < (d || []).length; ++i) f.push(d[i])
        }
        d = {
            tn: "",
            "tn-debug": ","
        };
        a = a;
        while (a) {
            if (a.getAttribute)
                for (i = 0; i < f.length; ++i) {
                    var j = f[i],
                        k = b("DataAttributeUtils").getDataAttribute(a, j);
                    if (k) {
                        if (i >= h) {
                            e[g][j] === void 0 && (e[g][j] = k);
                            continue
                        }
                        j = JSON.parse(k);
                        for (var l in j) d[l] !== void 0 ? (e[c[i]][l] === void 0 && (e[c[i]][l] = []), e[c[i]][l].push(j[l])) : e[c[i]][l] === void 0 && (e[c[i]][l] = j[l])
                    }
                }
            a = b("getContextualParent")(a)
        }
        for (var m in e)
            for (var n in d) e[m][n] !== void 0 && (e[m][n] = e[m][n].join(d[n]));
        return e
    }
    e.exports = a
}), null);
__d("FeedTrackingAsync", ["Arbiter", "Run", "collectDataAttributes"], (function(a, b, c, d, e, f, g) {
    var h;

    function a() {
        if (h) return;
        h = c("Arbiter").subscribe("AsyncRequest/send", function(a, b) {
            a = b.request;
            b = a.getRelativeTo();
            if (b) {
                a = a.getData();
                b = c("collectDataAttributes")(b, ["ft"]);
                b.ft && Object.keys(b.ft).length && Object.assign(a, b)
            }
        });
        d("Run").onLeave(function() {
            h && (h.unsubscribe(), h = null)
        })
    }
    g.init = a
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
__d("XPostPluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/post/logging/", {})
}), null);
__d("PluginFeedFooterActionLogger", ["AsyncRequest", "DOM", "Event", "XPostPluginLoggingController"], (function(a, b, c, d, e, f, g) {
    a = {
        initializeClickLoggers: function(a, b, d, e, f, g, h, i, j, k) {
            var l = function(b, d) {
                try {
                    b = c("DOM").find(a, "." + b);
                    c("Event").listen(b, "click", function(a) {
                        new(c("AsyncRequest"))().setURI(c("XPostPluginLoggingController").getURIBuilder().getURI()).setData({
                            action: d,
                            action_type: "click",
                            source: g,
                            story_token: h,
                            referer_url: i,
                            is_sdk: j,
                            post_url: k
                        }).send()
                    })
                } catch (a) {}
            };
            l(b, "embedded_post_like");
            l(d, "embedded_post_unlike");
            l(e, "embedded_post_comment");
            l(f, "embedded_post_share")
        }
    };
    f.exports = a
}), 34);
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
__d("getCentralImpressionScrollSpeed", ["Event"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 0,
        h = Date.now(),
        i = null,
        j = null;

    function a(a) {
        b("Event").listen(window, "scroll", function() {
            j && clearTimeout(j), j = setTimeout(function() {
                return a()
            }, 100)
        }, b("Event").Priority.NORMAL, {
            passive: !0
        })
    }

    function k() {
        var a = window.scrollY,
            b = Date.now();
        if (i != null && b !== h) {
            var c = a - i;
            g = c / (b - h) * 1e3
        }
        i = a;
        h = b
    }
    a(function() {
        g = 0, i = null
    });
    b("Event").listen(window, "scroll", function() {
        return k()
    }, b("Event").Priority.NORMAL, {
        passive: !0
    });
    e.exports = function() {
        return g
    }
}), null);
__d("getCentralImpressionTimeAfterRefresh", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    window.addEventListener("load", function() {
        g = Date.now()
    }, {
        passive: !0
    });

    function a() {
        return g != null ? Date.now() - g : 0
    }
    f["default"] = a
}), 66);
__d("isImpressionTargetOccluded", ["containsNode", "getViewportDimensions"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d) {
        d === void 0 && (d = {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        });
        try {
            if (!a || !b || !document.elementFromPoint) return !1;
            var e = c("getViewportDimensions")();
            if (e.height === 0 || e.width === 0) return !1;
            var f = b.x,
                g = b.y,
                h = b.width;
            b = b.height;
            h = Math.min(f + h, e.width - 1);
            b = Math.min(g + b, e.height - 1);
            e = [{
                x: f,
                y: g
            }, {
                x: f,
                y: b
            }, {
                x: h,
                y: g
            }, {
                x: h,
                y: b
            }, {
                x: (f + h) / 2,
                y: (g + b) / 2
            }];
            d.top !== 0 && d.top > g && d.top < b && e.push({
                x: (f + h) / 2,
                y: (d.top + b) / 2
            });
            return e.every(function(b) {
                b = document.elementFromPoint(b.x, b.y);
                b = !!b && !c("containsNode")(b, a) && !c("containsNode")(a, b);
                return b
            })
        } catch (a) {
            return !1
        }
    }
    g["default"] = a
}), 98);
__d("ghlTestUBT", ["cr:1543261", "cr:334"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1543261") && b("cr:1543261")(), g["default"] = b("cr:334")
}), 98);
__d("ghlInternalBumpODSKey", ["ODS"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        return d("ODS").bumpEntityKey(2966, "feed_ads", a + "." + b)
    }
    g["default"] = a
}), 98);
__d("ghlTestUBTFacebook", ["ConstUriUtils", "GHLBox", "Promise", "cr:1088657", "ghlInternalBumpODSKey", "promiseDone", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            a = d("ConstUriUtils").getUri(a);
            if (a == null) throw c("unrecoverableViolation")("URI cannot be null in ghlTestUBTFacebook.", "ad_blocker_defense_ghost_owl");
            return a
        },
        i = function(a) {
            return new(b("Promise"))(function(b) {
                var c = window.atob,
                    d = document.body;
                if (c == null || d == null) {
                    b(!1);
                    return
                }
                var e = document.createElement("div");
                e.className = a.map(c).join(" ");
                d.appendChild(e);
                c = l(e);
                if (c && c.MozBinding && c.MozBinding.startsWith("url")) {
                    setTimeout(function() {
                        return b(e.clientWidth === 0)
                    }, 5e3);
                    return
                }
                b((c == null ? void 0 : c.display) === "none")
            })
        },
        j = function() {
            return new(b("Promise"))(function(a) {
                var b = document.body;
                if (b == null) {
                    a(!1);
                    return
                }
                var c = document.createElement("img");
                c.setAttribute("alt", "");
                b.appendChild(c);
                c.onload = function() {
                    var b = l(c);
                    a((b == null ? void 0 : b.display) === "none");
                    c.parentNode && c.parentNode.removeChild(c)
                };
                c.onerror = function() {
                    a(!0), c.parentNode && c.parentNode.removeChild(c)
                };
                c.src = h("https://scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png").toString()
            })
        },
        k = null;
    a = function(a) {
        k == null && (p("init"), k = new(b("Promise"))(function(a) {
            return c("promiseDone")(b("Promise").all([i(m), j(), i([n(o)]), d("GHLBox").r()]), function(b) {
                var c = b[0],
                    e = b[1],
                    f = b[2];
                b = b[3];
                p("done", c, e, f);
                c = c || e || f;
                c ? d("GHLBox").s(Date.now()) : d("GHLBox").i();
                a([c, b])
            })
        })), c("promiseDone")(k, function(b) {
            return a(b[0], b[1])
        }), b("cr:1088657") && b("cr:1088657").i()
    };
    var l = function(a) {
            return window.getComputedStyle(a)
        },
        m = ["QWRCb3g=", "QWQ=", "YWR2ZXJ0", "cG9zdC1hZHM="],
        n = function(a) {
            return a[Math.floor(Math.random() * a.length)]
        },
        o = ["UmVjdGFuZ2xlQWQ=", "YWR2ZXJ0aXNpbmdfd2lkZ2V0", "ZG93bmxvYWRfbGlua19zcG9uc29yZWQ=", "c3BvbnNvclBvc3Q=", "d2lkZ2V0U3BvbnNvcnM=", "b2ItaG92ZXI=", "ZGZwX3VuaXQ="],
        p = function() {
            for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
            return c("ghlInternalBumpODSKey")("ghlTestUBT", String(b.join(".")))
        };
    e = a;
    g["default"] = e
}), 98);
__d("CometMetricsChannel2ViewabilityFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1960868");
    c = b("FalcoLoggerInternal").create("comet_metrics_channel2_viewability", a);
    e.exports = c
}), null);
__d("PercentVisible", [], (function(a, b, c, d, e, f) {
    a = -1;
    b = 0;
    c = 50;
    d = 100;
    f.NO_VISIBLE = a;
    f.VISIBLE_0_PCT = b;
    f.VISIBLE_50_PCT = c;
    f.VISIBLE_100_PCT = d
}), 66);