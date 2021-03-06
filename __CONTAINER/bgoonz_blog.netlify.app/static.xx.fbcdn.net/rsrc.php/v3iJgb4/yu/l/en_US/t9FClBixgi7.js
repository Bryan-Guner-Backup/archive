if (self.CavalryLogger) {
    CavalryLogger.start_js(["0a00uDn"]);
}

__d("AvailableListConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
        ON_UPDATE_ERROR: "buddylist/update-error",
        ON_UPDATED: "buddylist/updated",
        ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
        OFFLINE: 0,
        IDLE: 1,
        ACTIVE: 2,
        MOBILE: 3,
        WEB_STATUS: "webStatus",
        FB_APP_STATUS: "fbAppStatus",
        MESSENGER_STATUS: "messengerStatus",
        OTHER_STATUS: "otherStatus",
        STATUS_ACTIVE: "active",
        STATUS_IDLE: "idle",
        STATUS_OFFLINE: "offline"
    });
    f["default"] = a
}), 66);
__d("CometAccessibilityAnnouncement.react", ["cr:1465733", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useRef;

    function a(a) {
        var c = a.assertive;
        c = c === void 0 ? !1 : c;
        var d = a.children;
        d = d === void 0 ? null : d;
        var e = a.isVisible;
        e = e === void 0 ? !1 : e;
        a = a.role;
        a = a === void 0 ? "alert" : a;
        var f = i(null);
        b("cr:1465733")({
            assertive: c,
            nodeRef: f
        });
        return h.jsx("div", {
            "aria-atomic": !0,
            "aria-live": c ? "assertive" : "polite",
            className: e === !1 ? "rfua0xdk pmk7jnqg pfx3uekm ay7djpcl ema1e40h q45zohi1" : null,
            ref: f,
            role: a,
            children: d
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometLegacyListItemBase.react", ["joinClasses", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.addon,
            d = a.children,
            e = a.className;
        a = a.right;
        return h.jsxs("div", {
            className: c("joinClasses")("j83agx80", e),
            children: [b != null ? h.jsx("div", {
                className: "tvfksri0 taijpn5t j83agx80 ll8tlv6m",
                children: b
            }) : null, h.jsx("div", {
                className: "hpfvmrgz g5gj957u buofh1pr rj1gh0hx o8rfisnq",
                children: d
            }), a != null ? h.jsx("div", {
                className: "ozuftl9m taijpn5t cbu4d94t j83agx80",
                children: a
            }) : null]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometListCellGlimmer.react", ["BaseGlimmer.react", "BaseLoadingStateElement.react", "CometColumn.react", "CometColumnItem.react", "CometLegacyListItemBase.react", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useMemo;

    function a(a) {
        var b = a.imageSize,
            d = b === void 0 ? 36 : b;
        b = a.imageStyle;
        var e = b === void 0 ? "none" : b;
        b = a.numberOfItems;
        var f = b === void 0 ? 1 : b;
        b = a.paddingHorizontal;
        b = b === void 0 ? 16 : b;
        var g = a.removeFirstItemPadding,
            j = g === void 0 ? !0 : g;
        g = a.spacing;
        a = i(function() {
            return Array(f).fill().map(function(a, b) {
                return Math.floor(Math.PI * Math.pow(10, b % 10) % 4)
            })
        }, [f]);
        return h.jsx(c("BaseLoadingStateElement.react"), {
            children: h.jsx(c("CometColumn.react"), {
                paddingHorizontal: b,
                spacing: g,
                children: a.map(function(a, b) {
                    return h.jsx(c("CometColumnItem.react"), {
                        children: h.jsx(c("CometLegacyListItemBase.react"), {
                            addon: e !== "none" ? h.jsx(c("BaseGlimmer.react"), {
                                className: c("stylex").dedupe(d === 20 ? {
                                    "height-1": "jnigpg78",
                                    "width-1": "odw8uiq3"
                                } : {}, d === 36 ? {
                                    "height-1": "tv7at329",
                                    "width-1": "thwo4zme"
                                } : null, d === 40 ? {
                                    "height-1": "qypqp5cg",
                                    "width-1": "q676j6op"
                                } : null, d === 48 ? {
                                    "height-1": "m7zwrmfr",
                                    "width-1": "tmrshh9y"
                                } : null, d === 56 ? {
                                    "height-1": "e5d9fub0",
                                    "width-1": "oeao4gh3"
                                } : null, d === 60 ? {
                                    "height-1": "cb02d2ww",
                                    "width-1": "ljni7pan"
                                } : null, e === "circle" ? {
                                    "border-top-start-radius-1": "s45kfl79",
                                    "border-top-end-radius-1": "emlxlaya",
                                    "border-bottom-end-radius-1": "bkmhp75w",
                                    "border-bottom-start-radius-1": "spb7xbtv"
                                } : null, e === "roundedRect" ? {
                                    "border-top-start-radius-1": "ue3kfks5",
                                    "border-top-end-radius-1": "pw54ja7n",
                                    "border-bottom-end-radius-1": "uo3d90p7",
                                    "border-bottom-start-radius-1": "l82x9zwi"
                                } : null),
                                index: b
                            }) : null,
                            className: c("stylex").dedupe({
                                "padding-top-1": "cxgpxx05",
                                "padding-bottom-1": "sj5x9vvc"
                            }, b === 0 && j ? {
                                "padding-top-1": "jb3vyjys"
                            } : null),
                            children: h.jsx(c("BaseGlimmer.react"), {
                                className: c("stylex").dedupe({
                                    "border-top-start-radius-1": "ue3kfks5",
                                    "border-top-end-radius-1": "pw54ja7n",
                                    "border-bottom-end-radius-1": "uo3d90p7",
                                    "border-bottom-start-radius-1": "l82x9zwi",
                                    "height-1": "ed3p1gfi"
                                }, a === 0 ? {
                                    "width-1": "n99xedck"
                                } : null, a === 1 ? {
                                    "width-1": "jico2p30"
                                } : null, a === 2 ? {
                                    "width-1": "ptrm0iwj"
                                } : null, a === 3 ? {
                                    "width-1": "k4urcfbm"
                                } : null),
                                index: b
                            })
                        })
                    }, b)
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometSettingsListDropdownLoadingState.react", ["CometListCellGlimmer.react", "CometPopover.react", "TetraText.react", "qex", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = c("qex")._("1875564");

    function j(a) {
        var b = a.glimmerSize;
        b = b === void 0 ? 56 : b;
        var d = a.hasActions;
        d = d === void 0 ? !1 : d;
        var e = a.numberOfItems;
        a = a.title;
        return i === !0 ? h.jsx(j.WithoutPopover, {
            glimmerSize: b,
            hasActions: d,
            numberOfItems: e,
            title: a
        }) : h.jsx("div", {
            className: "knvmm38d oi9244e8",
            children: h.jsx(c("CometPopover.react"), {
                children: h.jsx(j.WithoutPopover, {
                    glimmerSize: b,
                    hasActions: d,
                    numberOfItems: e,
                    title: a
                })
            })
        })
    }
    j.displayName = j.name + " [from " + f.id + "]";
    var k = 76;
    j.InnerGlimmer = function(a) {
        var b = a.numberOfItems;
        a = a.size;
        a = a === void 0 ? 56 : a;
        return h.jsx(c("CometListCellGlimmer.react"), {
            imageSize: a,
            imageStyle: "circle",
            numberOfItems: b != null ? b : Math.max(Math.ceil((window.innerHeight - 72 - 45) / k), 1)
        })
    };
    j.WithoutPopover = function(a) {
        var b = a.glimmerSize;
        b = b === void 0 ? 56 : b;
        var d = a.hasActions;
        d = d === void 0 ? !1 : d;
        var e = a.numberOfItems;
        a = a.title;
        return h.jsxs("div", {
            className: "o36gj0jk" + (e == null ? " h77mwsce s5ah0qfl" : ""),
            children: [h.jsxs("div", {
                className: "dati1w0a e5nlhep0 hv4rvrfc pybr56ya jklb3kyz i1fnvgqd pfnyh3mw j83agx80 bp9cbjyn",
                children: [h.jsx(c("TetraText.react"), {
                    isSemanticHeading: !0,
                    type: "headlineEmphasized1",
                    children: a
                }), d && h.jsx("div", {
                    className: "b73ngqbp p1ueia1e"
                })]
            }), h.jsx(j.InnerGlimmer, {
                numberOfItems: e,
                size: b
            })]
        })
    };
    g["default"] = j
}), 98);
__d("useCometRouterLinkQueryPrefetcher", ["ODS", "clearTimeout", "react", "setTimeout", "useCometRouterDispatcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.startTransition,
        i = b.useCallback,
        j = b.useRef,
        k = 30 * 1e3;

    function a(a) {
        var b = a.dispatcherExtras,
            e = a.href,
            f = a.preloadTriggerType,
            g = a.routeHandledByCometRouter,
            l = c("useCometRouterDispatcher")(),
            m = j(null),
            n = j(null),
            o = i(function() {
                var a = m.current;
                a && (h(function() {
                    a.cancel()
                }), m.current = null)
            }, []);
        a = i(function() {
            var a = m.current;
            m.current = null;
            n.current != null && (c("clearTimeout")(n.current), d("ODS").bumpFraction(2994, "comet_preloading", "prefetch_route_queries." + f + ".usage", 1, 1));
            return a
        }, [f]);
        var p = i(function() {
                n.current = c("setTimeout")(function() {
                    n.current = null, o(), d("ODS").bumpFraction(2994, "comet_preloading", "prefetch_route_queries." + f + ".usage", 0, 1)
                }, k)
            }, [o, f]),
            q = i(function() {
                if (l != null && e != null && g && m.current == null) {
                    var a;
                    m.current = l.prefetchRouteQueries(e, (a = b) != null ? a : {});
                    p()
                }
            }, [l, e, g, b, p]);
        return {
            cancelPrefetchRouteQueries: o,
            getPrefetchedQueryContainerAndMarkAsUsed: a,
            prefetchRouteQueries: q
        }
    }
    g["default"] = a
}), 98);
__d("useCometRouterLinkEventHandlers", ["JSScheduler", "gkx", "react", "useCometPreloader", "useCometRouterDispatcher", "useCometRouterLinkQueryPrefetcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect,
        j = b.useMemo,
        k = b.useRef,
        l = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;

    function a(a) {
        var b = a.dispatcherExtras,
            e = a.href,
            f = a.isRouterLink,
            g = a.onHoverEnd,
            m = a.onHoverStart,
            n = a.onPress,
            o = a.onPressStart,
            p = a.prefetchQueriesOnHover,
            q = a.preloadCodeOnMount,
            r = a.preventLocalNavigation,
            s = a.rel,
            t = a.target;
        a = p === !0 ? "button_aggressive" : "button";
        var u = c("useCometRouterDispatcher")(),
            v = k(null),
            w = j(function() {
                var a = t == null || t === "_self",
                    b = !c("gkx")("708253") && s != null && s.match(l) != null;
                return f && r !== !0 && a && !b
            }, [f, r, t, s]);
        p = (p = b) != null ? p : {};
        p.onNavigate;
        p = babelHelpers.objectWithoutPropertiesLoose(p, ["onNavigate"]);
        p = c("useCometRouterLinkQueryPrefetcher")({
            dispatcherExtras: p,
            href: e,
            preloadTriggerType: a,
            routeHandledByCometRouter: w
        });
        var x = p.cancelPrefetchRouteQueries,
            y = p.getPrefetchedQueryContainerAndMarkAsUsed;
        p = p.prefetchRouteQueries;
        var z = function(a) {
                n && n(a);
                var c = !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
                if (c && w && (u && e != null)) {
                    c = y();
                    u.go(e, babelHelpers["extends"]({
                        eventTimestamp: a.timeStamp,
                        prefetcher: c
                    }, b))
                }
            },
            A = b == null ? void 0 : b.target,
            B = h(function() {
                e != null && v.current !== e && w && d("JSScheduler").scheduleSpeculativeCallback(function() {
                    u != null && v.current !== e && (v.current = e, u.preloadRouteCode(e, A))
                })
            }, [u, e, A, w]);
        i(function() {
            e != null && w && (q === !0 ? B() : d("JSScheduler").scheduleSpeculativeCallback(function() {
                u == null ? void 0 : u.prefetchRouteDefinition(e)
            }))
        }, [B, q, u, w, e]);
        a = c("useCometPreloader")(a, B, p, x);
        var C = a[0],
            D = a[1],
            E = a[2];
        p = function(a) {
            o && o(a), E(a)
        };
        x = function(a) {
            m && m(a);
            if (!f) return;
            C(a)
        };
        a = function(a) {
            g && g(a), D()
        };
        return {
            onHoverEnd: a,
            onHoverStart: x,
            onPress: z,
            onPressStart: p
        }
    }
    g["default"] = a
}), 98);
__d("useCometRouterLinkShimEventHandlers", ["ReactDOMComet", "gkx", "react", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState,
        i = c("requireDeferred")("LynxAsyncCallbackFalcoEvent").__setRef("useCometRouterLinkShimEventHandlers");

    function a(a) {
        var b = a.href,
            e = a.lynxMode,
            f = a.onContextMenu,
            g = a.onHoverStart,
            j = a.onPress,
            k = a.shimmed,
            l = a.unshimmedHref;
        a = h(!1);
        var m = a[0],
            n = a[1];

        function o(a) {
            f && f(a), m && d("ReactDOMComet").flushSync(function() {
                n(!1)
            })
        }

        function p(a) {
            j && j(a), k === !0 && e === "ASYNCLAZY" && b != null && l != null && c("gkx")("1642984") ? (m || d("ReactDOMComet").flushSync(function() {
                n(!0)
            }), i.onReadyImmediately(function(a) {
                a.log(function() {
                    return {
                        lynx_uri: b,
                        next_uri: l
                    }
                })
            })) : m && d("ReactDOMComet").flushSync(function() {
                n(!1)
            })
        }

        function q(a) {
            g && g(a), k === !0 && n(!0)
        }
        return {
            onContextMenu: o,
            onHoverStart: q,
            onPress: p,
            useOrigHref: m
        }
    }
    g["default"] = a
}), 98);
__d("TetraCircleButton.react", ["CometCircleButton.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        return h.jsx(c("CometCircleButton.react"), babelHelpers["extends"]({}, a, {
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometTopNavListDropdown.react", ["fbt", "ix", "BaseHeading.react", "CometPopover.react", "CometRow.react", "CometRowItem.react", "Locale", "TetraCircleButton.react", "TetraText.react", "fbicon", "qex", "react", "stylex"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = c("qex")._("1875564"),
        l = {
            card: {
                display: "j83agx80",
                flexDirection: "cbu4d94t",
                maxWidth: "h77mwsce",
                minHeight: "dp1hu0rb"
            },
            cardMaxHeight: {
                maxHeight: "h58bhtfz"
            },
            cardWidth: {
                width: "o36gj0jk"
            },
            heading: {
                alignItems: "bp9cbjyn",
                display: "j83agx80",
                flexShrink: "pfnyh3mw",
                justifyContent: "i1fnvgqd",
                minHeight: "jklb3kyz",
                paddingTop: "pybr56ya",
                paddingEnd: "hv4rvrfc",
                paddingBottom: "e5nlhep0",
                paddingStart: "dati1w0a"
            },
            root: {
                marginEnd: "oi9244e8",
                marginTop: "knvmm38d"
            }
        },
        m = {
            "base-wash": {
                backgroundColor: "g6srhlxm"
            },
            "card-flat": {
                backgroundColor: "i94ygzvd"
            },
            "dark-wash": {
                backgroundColor: "ora8z2hr"
            },
            error: {
                backgroundColor: "l44iypv3"
            },
            highlight: {
                backgroundColor: "is6700om"
            },
            "light-wash": {
                backgroundColor: "qsy8amke"
            },
            transparent: {
                backgroundColor: "g5ia77u1"
            },
            white: {
                backgroundColor: "hybvsw6c"
            }
        };

    function a(a) {
        var b = a.children,
            d = a.label;
        a = a.name;
        return k === !0 ? j.jsx(j.Fragment, {
            children: b
        }) : j.jsx("div", {
            className: c("stylex")(l.root),
            children: j.jsx(c("CometPopover.react"), {
                label: d,
                popoverName: a,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.Card = function(a) {
        var b = a.background;
        b = b === void 0 ? "white" : b;
        var d = a.children,
            e = a.testid;
        e = a.useFullWidth;
        e = e === void 0 ? !1 : e;
        a = a.useMaxHeight;
        return j.jsx("div", {
            className: c("stylex")(l.card, e === !1 && l.cardWidth, a === !0 && l.cardMaxHeight, m[b]),
            "data-testid": void 0,
            children: d
        })
    };
    a.Title = function(a) {
        var b = a.actions;
        b = b === void 0 ? [] : b;
        var e = a.onReturn;
        a = a.title;
        return j.jsxs("div", {
            className: c("stylex")(l.heading),
            children: [j.jsxs(c("CometRow.react"), {
                paddingHorizontal: 0,
                paddingTop: 0,
                spacingHorizontal: 8,
                children: [e != null ? j.jsx(c("CometRowItem.react"), {
                    children: j.jsx(c("TetraCircleButton.react"), {
                        icon: d("Locale").isRTL() ? d("fbicon")._(i("514454"), 20) : d("fbicon")._(i("512647"), 20),
                        label: h._( /*FBT_CALL*/ "Back" /*FBT_CALL*/ ),
                        onPress: e,
                        size: 32,
                        type: "deemphasized"
                    })
                }) : null, j.jsx(c("CometRowItem.react"), {
                    verticalAlign: "center",
                    children: j.jsx(c("BaseHeading.react"), {
                        isPrimaryHeading: !0,
                        children: j.jsx(c("TetraText.react"), {
                            type: "headlineEmphasized1",
                            children: a
                        })
                    })
                })]
            }), j.jsx(c("CometRow.react"), {
                paddingHorizontal: 0,
                paddingTop: 0,
                spacingHorizontal: 8,
                children: b.map(function(a, b) {
                    return j.jsx(c("CometRowItem.react"), {
                        children: a
                    }, b)
                })
            })]
        })
    };
    a.styles = {
        cardWidth: l.cardWidth
    };
    g["default"] = a
}), 98);
__d("CometTranslationDetectorContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(!1);
    g["default"] = b
}), 98);
__d("CometTranslationDetectorProvider.react", ["CometTranslationDetectorContext", "react", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
        j = e.useEffect,
        k = e.useState;

    function a(a) {
        a = a.children;
        var b = k(!1),
            d = b[0],
            e = b[1];
        j(function() {
            var a = document.documentElement;
            if (a == null) return;
            var b = new MutationObserver(function() {
                a.className.match("translated") ? e(!0) : e(!1)
            });
            b.observe(a, {
                attributeFilter: ["class"],
                attributes: !0,
                characterData: !1,
                childList: !1
            });
            a.className.match("translated") && e(!0);
            return function() {
                return b.disconnect()
            }
        }, []);
        return h.jsx(c("CometTranslationDetectorContext").Provider, {
            value: d,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b() {
        var a = i(c("CometTranslationDetectorContext"));
        if (a) return c("uuid")();
        else return ""
    }
    g.CometTranslationDetectorProvider = a;
    g.useTranslationFixKeyForTextParent = b
}), 98);
__d("CometTriggerAccessibilityAlertContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function() {
        return function() {}
    });
    g["default"] = b
}), 98);
__d("HiddenSubtreeContextProvider.react", ["HiddenSubtreeContext", "HiddenSubtreePassiveContext", "react", "removeFromArray", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useEffect,
        l = b.useMemo,
        m = b.useRef;

    function n(a, b) {
        return a.backgrounded === b.backgrounded && a.hidden === b.hidden
    }

    function o(a, b) {
        var c = a.backgrounded || b.backgrounded;
        a = a.hidden || b.hidden;
        return {
            backgrounded: c,
            hidden: a,
            hiddenOrBackgrounded: c || a,
            hiddenOrBackgrounded_FIXME: c || a
        }
    }

    function a(a) {
        var b = a.children,
            d = a.ignoreParent,
            e = a.isBackgrounded,
            f = e === void 0 ? !1 : e,
            g = a.isHidden;
        e = j(c("HiddenSubtreeContext"));
        var p = j(c("HiddenSubtreePassiveContext")),
            q = l(function() {
                return {
                    backgrounded: f,
                    hidden: g,
                    hiddenOrBackgrounded: f || g,
                    hiddenOrBackgrounded_FIXME: f || g
                }
            }, [f, g]),
            r = m(q),
            s = m(null),
            t = m([]),
            u = i(function() {
                var a = d === !0 ? r.current : o(r.current, p.getCurrentState());
                if (s.current == null || !n(a, s.current)) {
                    s.current = a;
                    var b = Array.from(t.current);
                    b.forEach(function(b) {
                        b(a)
                    })
                }
            }, [d, p]);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            r.current = q, u()
        }, [q, u]);
        k(function() {
            if (d !== !0) {
                var a = p.subscribeToChanges(u);
                return function() {
                    return a.remove()
                }
            }
        }, [d, u, p]);
        a = l(function() {
            return {
                getCurrentState: function() {
                    return d === !0 ? r.current : o(r.current, p.getCurrentState())
                },
                subscribeToChanges: function(a) {
                    var b = t.current;
                    b.push(a);
                    return {
                        remove: function() {
                            c("removeFromArray")(b, a)
                        }
                    }
                }
            }
        }, [p, d]);
        var v = d === !0 ? q : o(q, e);
        e = l(function() {
            return {
                backgrounded: v.backgrounded,
                hidden: v.hidden,
                hiddenOrBackgrounded: v.backgrounded || v.hidden,
                hiddenOrBackgrounded_FIXME: v.backgrounded || v.hidden
            }
        }, [v.backgrounded, v.hidden]);
        return h.jsx(c("HiddenSubtreeContext").Provider, {
            value: e,
            children: h.jsx(c("HiddenSubtreePassiveContext").Provider, {
                value: a,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometDialogContextComet", ["react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");

    function a() {
        c("recoverableViolation")("Attempted to imperatively render a dialog without CometTransientDialogProvider in the tree. This is not allowed in Comet code. Please add a CometTransientDialogProvider to render a dialog.", "comet_ui")
    }
    e = b.createContext(a);
    g["default"] = e
}), 98);
__d("getCometKey", ["CometKeys"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            8: "Backspace",
            13: "Enter",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            46: "Delete"
        },
        i = new Set(Object.values(c("CometKeys")));

    function a(a) {
        var b = a.key;
        a = a.which || a.keyCode;
        (a >= 48 && a <= 57 || a >= 65 && a <= 90) && (b = String.fromCharCode(a));
        a >= 96 && a <= 105 && (b = String.fromCharCode(a - 48));
        if (b != null && b !== "") {
            b = b.toLowerCase();
            if (i.has(b)) return b
        }
        if (Object.prototype.hasOwnProperty.call(h, a)) {
            b = h[a].toLowerCase();
            if (i.has(b)) return b
        }
        return null
    }
    g["default"] = a
}), 98);
__d("getKeyCommand", ["UserAgent", "createKeyCommand", "getCometKey"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("getCometKey")(a);
        if (b === void 0 || b === null) return null;
        var d = !1;
        c("UserAgent").isPlatform("Mac OS X") ? a.metaKey && (d = !0) : a.ctrlKey && (d = !0);
        d = {
            alt: a.altKey,
            command: d,
            key: b,
            shift: a.shiftKey
        };
        return c("createKeyCommand")(d)
    }
    g["default"] = a
}), 98);
__d("applyKeyCommand", ["getKeyCommand"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e) {
        var f = c("getKeyCommand")(a);
        if (f === void 0 || f === null) return !1;
        b = b;
        while (b !== null && b !== void 0) {
            if (b && b.applyCommand(f, a)) return !0;
            b = b && b.getParent()
        }
        if (d != null && d.applyCommand(f, a)) return !0;
        return e != null && e.applyCommand(f, a) ? !0 : !1
    }
    g["default"] = a
}), 98);
__d("getActiveCommands", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        var d = new Map();

        function e(a) {
            a.forEach(function(a, b) {
                var c = d.get(b);
                if (c) {
                    var e = c.every(function(a) {
                        return a.shouldStopPropagation === !1
                    });
                    e && c.push(a)
                } else d.set(b, [a])
            })
        }
        a = a;
        while (a !== null && a !== void 0) {
            var f = a && a.getCommandMap();
            e(f);
            a = a && a.getParent()
        }
        b && e(b.getCommandMap());
        c && e(c.getCommandMap());
        return d
    }
    f["default"] = a
}), 66);
__d("useGetComposingState", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect,
        j = b.useRef;

    function a() {
        var a = j(!1),
            b = h(function(b) {
                a.current = !0
            }, [a]),
            c = h(function(b) {
                a.current = !1
            }, [a]);
        i(function() {
            window.addEventListener("compositionstart", b);
            window.addEventListener("compositionend", c);
            return function() {
                window.removeEventListener("compositionstart", b), window.removeEventListener("compositionend", c)
            }
        }, [c, b]);
        return function(b) {
            return b.isComposing || a.current
        }
    }
    g["default"] = a
}), 98);
__d("BaseKeyCommandListener.react", ["CometGlobalKeyCommandWidget", "CometKeyCommandUtilsContext", "ReactDOMComet", "applyKeyCommand", "getActiveCommands", "getKeyCommand", "react", "recoverableViolation", "useGetComposingState", "useGlobalEventListener"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useMemo,
        l = b.useRef;

    function m(a, b) {
        var c;
        return function() {
            window.clearTimeout(c), c = window.setTimeout(a, b)
        }
    }
    var n = 100;

    function a(a) {
        var b = l(null),
            e = l(null),
            f = l(new Set()),
            g = j(c("CometGlobalKeyCommandWidget").Context),
            o = i(function(d) {
                if (!a.observersEnabled) return {
                    getActiveCommands: function() {
                        c("recoverableViolation")("Key Command observers are not supported in this context", "comet_ax");
                        return null
                    },
                    remove: function() {}
                };
                var h = f.current;
                h.add(d);
                return {
                    getActiveCommands: function() {
                        return c("getActiveCommands")(e.current, b.current, g)
                    },
                    remove: function() {
                        h["delete"](d)
                    }
                }
            }, [g, a.observersEnabled]),
            p = i(function(b) {
                a.observersEnabled && f.current.forEach(function(a) {
                    return a({
                        key: b,
                        type: "triggered"
                    })
                })
            }, [a.observersEnabled]),
            q = k(function() {
                return m(function() {
                    a.observersEnabled && f.current.forEach(function(a) {
                        return a({
                            type: "update"
                        })
                    })
                }, n)
            }, [a.observersEnabled]),
            r = i(function(a) {
                var c = b.current !== a;
                b.current = a;
                c && q()
            }, [q]),
            s = i(function(a) {
                var b = e.current !== a;
                e.current = a;
                b && q()
            }, [q]);
        o = l({
            addObserver: o,
            notifyCommandUpdate: q,
            setActiveLayer: r,
            setActiveWrapper: s
        });
        r = i(function() {
            var a = e.current !== null;
            e.current = null;
            a && q()
        }, [q]);
        var t = c("useGetComposingState")();
        s = i(function(a) {
            if (t(a)) return;
            d("ReactDOMComet").flushSync(function() {
                var d = c("applyKeyCommand")(a, e.current, b.current, g);
                if (d) {
                    d = c("getKeyCommand")(a);
                    p(d)
                }
            })
        }, [t, g, p]);
        c("useGlobalEventListener")("keydown", s);
        c("useGlobalEventListener")("keyup", s);
        return h.jsx(c("CometKeyCommandUtilsContext").Provider, {
            value: o.current,
            children: h.jsx("div", {
                onBlurCapture: r,
                children: a.children
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometLayerKeyCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")(!1);
    g["default"] = a
}), 98);
__d("SetActiveLayerIfAttached.react", ["CometKeyCommandUtilsContext", "CometLayerKeyCommandWidget", "HiddenSubtreeContext", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
        i = b.useEffect;

    function a(a) {
        var b = h(c("HiddenSubtreeContext"));
        a = h(c("CometKeyCommandUtilsContext"));
        var d = a && a.setActiveLayer,
            e = h(c("CometLayerKeyCommandWidget").Context);
        i(function() {
            if (!d) {
                c("recoverableViolation")("The current layer is not wrapped in a *KeyCommandListener", "comet_ax");
                return
            }
            if (!e) {
                c("recoverableViolation")("setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper", "comet_ax");
                return
            }
            b.hiddenOrBackgrounded || d(e)
        }, [e, b, d]);
        return null
    }
    g["default"] = a
}), 98);
__d("CometLayerKeyCommandWrapper.react", ["CometLayerKeyCommandWidget", "SetActiveLayerIfAttached.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children;
        a = a.debugName;
        return h.jsxs(c("CometLayerKeyCommandWidget").Wrapper, {
            debugName: a,
            children: [h.jsx(c("SetActiveLayerIfAttached.react"), {
                debugName: a
            }), b]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("OutsideExceptionKeyCommandListener.react", ["BaseKeyCommandListener.react", "CometLayerKeyCommandWrapper.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("BaseKeyCommandListener.react"), {
            observersEnabled: !1,
            children: h.jsx(c("CometLayerKeyCommandWrapper.react"), {
                debugName: "outside exception layer",
                children: a.children
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useLayerKeyCommands", ["CometLayerKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("CometLayerKeyCommandWidget").useKeyCommands
}), 98);
__d("CometSection.react", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        var c = a.children,
            d = a.className,
            e = a.name,
            f = a.role;
        a = a.testid;
        return h.jsx("div", {
            "aria-label": e,
            className: d,
            "data-testid": void 0,
            ref: b,
            role: f,
            children: c
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometContentArea.react", ["CometSection.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children,
            d = a.hasNoRole;
        d = d === void 0 ? !1 : d;
        a = a.verticalAlign;
        a = a === void 0 ? "top" : a;
        return h.jsx("div", {
            className: "dp1hu0rb d2edcug0 taijpn5t j83agx80 gs1a9yip",
            children: h.jsx(c("CometSection.react"), {
                className: "k4urcfbm dp1hu0rb d2edcug0 cbu4d94t j83agx80 bp9cbjyn" + (a === "middle" ? " taijpn5t" : ""),
                role: d ? void 0 : "main",
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("NullState404FailedLoading", ["IconSource", "bx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        dark: new(c("IconSource"))("nullStateGlyphs", c("bx").getURL(c("bx")("1160057")), 112),
        "default": new(c("IconSource"))("nullStateGlyphs", c("bx").getURL(c("bx")("1160058")), 112)
    };
    g["default"] = a
}), 98);
__d("NullStateGeneral", ["IconSource", "bx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        dark: new(c("IconSource"))("nullStateGlyphs", c("bx").getURL(c("bx")("1160060")), 112),
        "default": new(c("IconSource"))("nullStateGlyphs", c("bx").getURL(c("bx")("1160061")), 112)
    };
    g["default"] = a
}), 98);
__d("NullStatePermissions", ["IconSource"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        dark: new(c("IconSource"))("nullStateGlyphs", "/images/comet/empty_states_icons/permissions/permissions_dark_mode.svg", 112),
        "default": new(c("IconSource"))("nullStateGlyphs", "/images/comet/empty_states_icons/permissions/permissions_gray_wash.svg", 112)
    };
    g["default"] = a
}), 98);
__d("BaseStyledButton.react", ["BaseRow.react", "BaseRowItem.react", "CometPressable.react", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useRef,
        j = .96,
        k = 10,
        l = {
            button: {
                boxSizing: "rq0escxv",
                display: "pq6dq46d",
                flexDirection: "cbu4d94t",
                justifyContent: "taijpn5t",
                position: "l9j0dhe7",
                width: "k4urcfbm"
            },
            content: {
                borderTopStartRadius: "kt9q3ron",
                borderTopEndRadius: "ak7q8e6j",
                borderBottomEndRadius: "isp2s0ed",
                borderBottomStartRadius: "ri5dt5u2",
                borderTopWidth: "rt8b4zig",
                borderEndWidth: "n8ej3o3l",
                borderBottomWidth: "agehan2d",
                borderStartWidth: "sk4xxmp2",
                boxSizing: "rq0escxv",
                paddingEnd: "d1544ag0",
                paddingStart: "tw6a2znq"
            },
            disabled: {
                backgroundColor: "c98fg2ug"
            },
            item: {
                alignItems: "bp9cbjyn",
                display: "j83agx80",
                flexShrink: "pfnyh3mw",
                marginEnd: "j5wkysh0",
                marginStart: "hytbnt81"
            },
            offset: {
                alignItems: "bp9cbjyn",
                display: "j83agx80",
                justifyContent: "taijpn5t",
                marginEnd: "c4xchbtz",
                marginStart: "by2jbhx6",
                width: "a0jftqn4"
            },
            paddingWide: {
                paddingEnd: "tkv8g59h",
                paddingStart: "fl8dtwsd"
            }
        };

    function a(a, b) {
        var d = a.addOnAbsolute,
            e = a.addOnEnd,
            f = a.addOnStart,
            g = a.content,
            m = a.contentXstyle,
            n = a.disabled,
            o = n === void 0 ? !1 : n;
        n = a.display;
        n = n === void 0 ? "inline" : n;
        var p = a.focusable,
            q = a.icon,
            r = a.id,
            s = a.linkProps,
            t = a.onFocusIn,
            u = a.onFocusOut,
            v = a.onHoverIn,
            w = a.onHoverOut,
            x = a.onPress,
            y = a.onPressIn,
            z = a.onPressOut,
            A = a.overlayHoveredStyle,
            B = a.overlayPressedStyle,
            C = a.padding,
            D = C === void 0 ? "normal" : C;
        C = a.suppressHydrationWarning;
        C = C === void 0 ? !1 : C;
        var E = a.testid;
        E = a.testOnly_pressed;
        E = E === void 0 ? !1 : E;
        var F = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["addOnAbsolute", "addOnEnd", "addOnStart", "content", "contentXstyle", "disabled", "display", "focusable", "icon", "id", "linkProps", "onFocusIn", "onFocusOut", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "overlayHoveredStyle", "overlayPressedStyle", "padding", "suppressHydrationWarning", "testid", "testOnly_pressed", "xstyle"]);
        var G = i(null),
            H = function(a) {
                if (G.current != null) {
                    var b = G.current;
                    b.style.transform = "scale(" + Math.max(j, (b.offsetWidth - k) / b.offsetWidth) + ")"
                }
                typeof y === "function" && y(a)
            },
            I = function(a) {
                if (G.current != null) {
                    var b = G.current;
                    b.style.transform = "none"
                }
                typeof z === "function" && z(a)
            };
        F = c("stylex").compose(F);
        var J = F.alignSelf,
            K = F.flexBasis,
            L = F.flexGrow,
            M = F.flexShrink,
            N = F.height,
            O = F.justifySelf,
            P = F.margin,
            Q = F.marginBottom,
            R = F.marginEnd,
            S = F.marginStart,
            T = F.marginTop,
            U = F.maxHeight,
            V = F.maxWidth,
            W = F.minHeight,
            X = F.minWidth,
            Y = F.position,
            Z = F.width,
            $ = babelHelpers.objectWithoutPropertiesLoose(F, ["alignSelf", "flexBasis", "flexGrow", "flexShrink", "height", "justifySelf", "margin", "marginBottom", "marginEnd", "marginStart", "marginTop", "maxHeight", "maxWidth", "minHeight", "minWidth", "position", "width"]);
        F = function(a) {
            a = a.overlay;
            return h.jsxs(c("BaseRow.react"), {
                align: "center",
                ref: G,
                verticalAlign: "center",
                xstyle: [l.content, D === "wide" && l.paddingWide, o && l.disabled, $, m],
                children: [h.jsxs("div", {
                    className: c("stylex")(l.offset),
                    children: [f != null ? h.jsx(c("BaseRowItem.react"), {
                        useDeprecatedStyles: !0,
                        xstyle: l.item,
                        children: f
                    }) : q != null ? h.jsx(c("BaseRowItem.react"), {
                        useDeprecatedStyles: !0,
                        xstyle: l.item,
                        children: q
                    }) : null, g != null ? h.jsx(c("BaseRowItem.react"), {
                        useDeprecatedStyles: !0,
                        xstyle: l.item,
                        children: g
                    }) : null, e != null ? h.jsx(c("BaseRowItem.react"), {
                        useDeprecatedStyles: !0,
                        xstyle: l.item,
                        children: e
                    }) : null]
                }), a, d != null ? d : null]
            })
        };
        a = h.jsx(c("CometPressable.react"), babelHelpers["extends"]({}, a, {
            disabled: o,
            display: n,
            focusable: p,
            id: r,
            linkProps: s,
            onFocusIn: t,
            onFocusOut: u,
            onHoverIn: v,
            onHoverOut: w,
            onPress: x,
            onPressIn: H,
            onPressOut: I,
            overlayHoveredStyle: A,
            overlayPressedStyle: B,
            ref: b,
            suppressHydrationWarning: C,
            testOnly_pressed: E,
            testid: void 0,
            xstyle: [l.button, {
                alignSelf: J,
                flexBasis: K,
                flexGrow: L,
                flexShrink: M,
                height: N,
                justifySelf: O,
                margin: P,
                marginBottom: Q,
                marginEnd: R,
                marginStart: S,
                marginTop: T,
                maxHeight: U,
                maxWidth: V,
                minHeight: W,
                minWidth: X,
                position: Y,
                width: Z
            }],
            children: F
        }));
        return a
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("TetraButton.react", ["BaseStyledButton.react", "CometIcon.react", "CometTooltip.react", "TetraText.react", "gkx", "mergeRefs", "react", "useCometTheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useRef,
        j = {
            contentDisabled: {
                opacity: "akz8cqyu"
            },
            darkOverlay: {
                backgroundColor: "d6rk862h",
                color: "ljqsnud1"
            },
            darkOverlayPressed: {
                backgroundColor: "sx5rzos5"
            },
            disabled: {
                backgroundColor: "c98fg2ug"
            },
            fdsOverrideBlack: {
                backgroundColor: "tqsryivl"
            },
            fdsOverrideCollaborativePostCTA: {
                backgroundColor: "q2y6ezfg",
                mixBlendMode: "br5bkhab"
            },
            fdsOverrideNegative: {
                backgroundColor: "l44iypv3"
            },
            fdsOverridePositive: {
                backgroundColor: "jllm4f4h"
            },
            overlay: {
                backgroundColor: "q2y6ezfg"
            },
            overlayDeemphasized: {
                backgroundColor: "cubx1xtm"
            },
            overlayDeemphasizedOverlayPressed: {
                backgroundColor: "cubx1xtm"
            },
            overlayDisabled: {
                backgroundColor: "nc12k21y"
            },
            overlayOverlayPressed: {
                backgroundColor: "r898ja9m"
            },
            paddingIconOnly: {
                paddingEnd: "hv4rvrfc",
                paddingStart: "dati1w0a"
            },
            primary: {
                backgroundColor: "s1i5eluu"
            },
            primaryDeemphasized: {
                backgroundColor: "oo1teu6h"
            },
            primaryDeemphasizedOverlayPressed: {
                backgroundColor: "l4sirx1s"
            },
            primaryExperiment: {
                backgroundColor: "synb87wq"
            },
            primaryOverlayPressed: {
                backgroundColor: "k19f6yf2"
            },
            secondary: {
                backgroundColor: "tdjehn4e"
            },
            secondaryDeemphasized: {
                backgroundColor: "g5ia77u1"
            },
            secondaryDeemphasizedOverlayPressed: {
                backgroundColor: "l4sirx1s"
            },
            secondaryOverlayPressed: {
                backgroundColor: "k19f6yf2"
            },
            sizeLarge: {
                height: "qypqp5cg"
            },
            sizeMedium: {
                height: "tv7at329"
            }
        },
        k = {
            iconColor: "white",
            overlayPressedStyle: j.primaryOverlayPressed,
            textColor: "white",
            ":deemphasized": {
                iconColor: "highlight",
                overlayPressedStyle: j.primaryDeemphasizedOverlayPressed,
                textColor: "highlight"
            },
            ":disabled": {
                iconColor: "disabled",
                textColor: "disabled"
            }
        },
        l = {
            iconColor: "primary",
            overlayPressedStyle: j.secondaryOverlayPressed,
            textColor: "secondary",
            ":deemphasized": {
                iconColor: "highlight",
                overlayPressedStyle: j.secondaryDeemphasizedOverlayPressed,
                textColor: "highlight"
            },
            ":disabled": {
                iconColor: "disabled",
                textColor: "disabled"
            }
        },
        m = {
            iconColor: "primary",
            overlayPressedStyle: j.overlayOverlayPressed,
            textColor: "primary",
            ":deemphasized": {
                iconColor: "white",
                overlayPressedStyle: j.overlayDeemphasizedOverlayPressed,
                textColor: "white"
            },
            ":disabled": {
                iconColor: "disabled",
                textColor: "disabled"
            }
        },
        n = {
            iconColor: "white",
            overlayPressedStyle: j.darkOverlayPressed,
            textColor: "white",
            ":deemphasized": {
                iconColor: "white",
                overlayPressedStyle: j.overlayDeemphasizedOverlayPressed,
                textColor: "white"
            },
            ":disabled": {
                iconColor: "disabled",
                textColor: "disabled"
            }
        };

    function o(a) {
        switch (a) {
            case "fdsOverride_collaborativePostCTA":
            case "secondary":
                return l;
            case "overlay":
                return m;
            case "dark-overlay":
                return n;
            case "primary":
            default:
                return k
        }
    }

    function p(a, b) {
        var c = b.disabled;
        b = b.reduceEmphasis;
        a = o(a);
        return (c ? a[":disabled"] : null) || (b ? a[":deemphasized"] : null) || a
    }

    function a(a, b) {
        var d = a.addOnPrimary,
            e = a.addOnSecondary,
            f = a.disabled;
        f = f === void 0 ? !1 : f;
        var g = a.icon,
            k = a.label,
            l = a.labelIsHidden;
        l = l === void 0 ? !1 : l;
        var m = a.linkProps,
            n = a.onFocusIn,
            o = a.onFocusOut,
            q = a.onHoverIn,
            r = a.onHoverOut,
            s = a.onPress,
            t = a.onPressIn,
            u = a.onPressOut,
            v = a.padding;
        v = v === void 0 ? "normal" : v;
        var w = a.reduceEmphasis;
        w = w === void 0 ? !1 : w;
        var x = a.size;
        x = x === void 0 ? "medium" : x;
        var y = a.suppressHydrationWarning;
        y = y === void 0 ? !1 : y;
        var z = a.testid;
        z = a.testOnly_pressed;
        z = z === void 0 ? !1 : z;
        var A = a.tooltip,
            B = a.type;
        B = B === void 0 ? "primary" : B;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["addOnPrimary", "addOnSecondary", "disabled", "icon", "label", "labelIsHidden", "linkProps", "onFocusIn", "onFocusOut", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "padding", "reduceEmphasis", "size", "suppressHydrationWarning", "testid", "testOnly_pressed", "tooltip", "type"]);
        var C = p(B, {
                disabled: f,
                reduceEmphasis: w
            }),
            D = C.iconColor,
            E = C.overlayPressedStyle;
        C = C.textColor;
        var F = i(null),
            G = c("useCometTheme")("light"),
            H = G[0];
        G = G[1];
        d = h.jsx(c("BaseStyledButton.react"), babelHelpers["extends"]({}, a, {
            addOnEnd: e,
            addOnStart: d,
            "aria-label": (e = a["aria-label"]) != null ? e : k,
            content: l ? null : h.jsx(c("TetraText.react"), {
                color: C,
                numberOfLines: 1,
                type: x === "large" ? "button1" : "button2",
                children: k
            }),
            contentXstyle: [B === "overlay" && f && j.contentDisabled, B === "overlay" && G, x === "medium" && j.sizeMedium, x === "large" && j.sizeLarge, g != null && l && j.paddingIconOnly],
            disabled: f,
            icon: g && h.jsx(c("CometIcon.react"), {
                color: D,
                icon: g,
                size: 16
            }),
            linkProps: m,
            onFocusIn: n,
            onFocusOut: o,
            onHoverIn: q,
            onHoverOut: r,
            onPress: s,
            onPressIn: t,
            onPressOut: u,
            overlayPressedStyle: E,
            padding: v,
            ref: c("mergeRefs")(F, b),
            suppressHydrationWarning: y,
            testOnly_pressed: z,
            testid: void 0,
            xstyle: [c("gkx")("1738831") ? B === "primary" && j.primaryExperiment : B === "primary" && j.primary, B === "primary" && w && j.primaryDeemphasized, B === "secondary" && j.secondary, B === "secondary" && w && j.secondaryDeemphasized, B === "fdsOverride_black" && j.fdsOverrideBlack, B === "fdsOverride_negative" && j.fdsOverrideNegative, B === "fdsOverride_positive" && j.fdsOverridePositive, B === "fdsOverride_collaborativePostCTA" && j.fdsOverrideCollaborativePostCTA, B === "overlay" && j.overlay, B === "overlay" && w && j.overlayDeemphasized, f && j.disabled, B === "overlay" && f && j.overlayDisabled, B === "dark-overlay" && j.darkOverlay]
        }));
        a = B === "overlay" ? h.jsx(H, {
            children: d
        }) : d;
        return A != null ? h.jsx(c("CometTooltip.react"), {
            position: "above",
            tooltip: A,
            children: a
        }) : a
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometNullState.react", ["CometIcon.react", "FlightSerializableIcon", "IconSource", "TetraTextPairing.react", "react", "useCurrentDisplayMode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.action,
            e = a.body;
        e = e === void 0 ? null : e;
        var f = a.bodyColor;
        f = f === void 0 ? "secondary" : f;
        var g = a.headline,
            i = a.headlineColor;
        i = i === void 0 ? "secondary" : i;
        var j = a.icon,
            k = a.iconColor,
            l = a.small;
        l = l === void 0 ? !1 : l;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["action", "body", "bodyColor", "headline", "headlineColor", "icon", "iconColor", "small"]);
        var m = c("useCurrentDisplayMode")();
        m = m === "dark";
        l = l ? 4 : 2;
        j = d("FlightSerializableIcon").parseFlightIcon(j);
        k = j != null ? j instanceof c("IconSource") ? h.jsx(c("CometIcon.react"), {
            color: k,
            icon: j
        }) : h.jsx(c("CometIcon.react"), {
            icon: m && j.dark != null ? j.dark : j["default"]
        }) : null;
        return h.jsxs("div", babelHelpers["extends"]({
            className: "gm7ombtx jbae33se gpl4oick bjjx79mm taijpn5t cbu4d94t j83agx80 bp9cbjyn"
        }, a, {
            children: [h.jsx("div", {
                className: "sej5wr8e",
                children: k
            }), h.jsx(c("TetraTextPairing.react"), {
                body: e,
                bodyColor: f,
                headline: g,
                headlineColor: i,
                level: l,
                textAlign: "center"
            }), b != null ? h.jsx("div", {
                className: "gh1tjcio",
                children: b
            }) : null]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("TetraNullState.react", ["CometNullState.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("CometNullState.react"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("XCometHomeControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("XCometProfileReactivationControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/settings/reactivation/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("CometErrorRoot.react", ["fbt", "CometContentArea.react", "CometLink.react", "ConstUriUtils", "InteractionTracingMetrics", "NullState404FailedLoading", "NullStateGeneral", "NullStatePermissions", "TetraButton.react", "TetraNullState.react", "TetraText.react", "XCometHomeControllerRouteBuilder", "XCometProfileReactivationControllerRouteBuilder", "clearTimeout", "react", "setTimeout", "unrecoverableViolation", "useCometRouterDispatcher"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useEffect,
        l = b.useState,
        m = 8460,
        n = 6e3;

    function o() {
        var a = 0,
            b = 0;
        while (a === 0) a = Math.random();
        while (b === 0) b = Math.random();
        return Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * b)
    }

    function a(a) {
        var b, e, f, g = c("NullStateGeneral");
        (a == null ? void 0 : (b = a.routeProps) == null ? void 0 : b.privacy) && (g = c("NullStatePermissions"));
        (a == null ? void 0 : (b = a.routeProps) == null ? void 0 : b.fourZerofour) && (g = c("NullState404FailedLoading"));
        b = c("XCometHomeControllerRouteBuilder").buildURL({});
        var p = c("useCometRouterDispatcher")(),
            q = j(function() {
                p && p.goBack && p.goBack()
            }, [p]);
        c("InteractionTracingMetrics").currentInteractionLogger().addMetadata("isError", 1);
        var r = i.jsx(c("TetraButton.react"), {
            label: h._( /*FBT_CALL*/ "Reload Page" /*FBT_CALL*/ ),
            onPress: function() {
                return window.location.reload(!0)
            },
            padding: "wide",
            size: "large"
        });
        e = (e = d("ConstUriUtils").getUri("/help")) == null ? void 0 : (e = e.getQualifiedUri()) == null ? void 0 : e.toString();
        if (e == null) throw c("unrecoverableViolation")("help URL was null", "comet_infra");
        var s;
        if ((a == null ? void 0 : (f = a.routeProps) == null ? void 0 : f.isAdminViewingDeactivatedProfile) === !0) {
            f = c("XCometProfileReactivationControllerRouteBuilder").buildURL({});
            r = i.jsx(c("TetraButton.react"), {
                label: h._( /*FBT_CALL*/ "Reactivate Page" /*FBT_CALL*/ ),
                linkProps: {
                    url: f
                },
                padding: "wide",
                size: "large"
            });
            s = i.jsx("div", {
                className: "sv5sfqaa cbu4d94t j83agx80 bp9cbjyn",
                children: i.jsx("div", {
                    className: "tr9rh885",
                    children: i.jsx(c("CometLink.react"), {
                        href: b,
                        target: "_blank",
                        children: i.jsx(c("TetraText.react"), {
                            color: "blueLink",
                            type: "bodyLink2",
                            children: h._( /*FBT_CALL*/ "Go to News Feed" /*FBT_CALL*/ )
                        })
                    })
                })
            })
        } else((a == null ? void 0 : (f = a.routeProps) == null ? void 0 : f.fourZerofour) || (a == null ? void 0 : (f = a.routeProps) == null ? void 0 : f.privacy)) && (r = i.jsx(c("TetraButton.react"), {
            label: h._( /*FBT_CALL*/ "Go to News Feed" /*FBT_CALL*/ ),
            linkProps: {
                url: b
            },
            padding: "wide",
            size: "large"
        }), s = i.jsxs("div", {
            className: "sv5sfqaa cbu4d94t j83agx80 bp9cbjyn",
            children: [i.jsx(c("CometLink.react"), {
                onClick: q,
                target: "_blank",
                children: i.jsx(c("TetraText.react"), {
                    color: "blueLink",
                    type: "bodyLink2",
                    children: h._( /*FBT_CALL*/ "Go Back" /*FBT_CALL*/ )
                })
            }), i.jsx("div", {
                className: "tr9rh885",
                children: i.jsx(c("CometLink.react"), {
                    href: e,
                    target: "_blank",
                    children: i.jsx(c("TetraText.react"), {
                        color: "blueLink",
                        type: "bodyLink2",
                        children: h._( /*FBT_CALL*/ "Visit Help Center" /*FBT_CALL*/ )
                    })
                })
            })]
        }));
        f = l(null);
        b = f[0];
        var t = f[1],
            u = a == null ? void 0 : (q = a.routeProps) == null ? void 0 : q.isBOC;
        k(function() {
            if (u === !0) {
                var a = Math.abs(m + o() * n),
                    b = c("setTimeout")(function() {
                        t(i.jsx("iframe", {
                            className: "ttbfdpzt do00u71z sk4xxmp2 agehan2d n8ej3o3l rt8b4zig"
                        }))
                    }, a);
                return function() {
                    return c("clearTimeout")(b)
                }
            }
        }, [u]);
        return i.jsx(c("CometContentArea.react"), {
            verticalAlign: "middle",
            children: i.jsxs("div", {
                className: "qublvx3c oh7imozk cbu4d94t j83agx80 bp9cbjyn",
                "data-testid": void 0,
                children: [i.jsx(c("TetraNullState.react"), {
                    action: r,
                    body: ((e = a.routeProps) == null ? void 0 : e.body) || h._( /*FBT_CALL*/ "This may be because of a technical error that we're working to get fixed. Try reloading this page." /*FBT_CALL*/ ),
                    headline: ((f = a.routeProps) == null ? void 0 : f.title) || h._( /*FBT_CALL*/ "This Page Isn't Available Right Now" /*FBT_CALL*/ ),
                    icon: g
                }), s, b]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometPassiveGetRouterStateContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("CometRoutePassthroughPropsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("CometRouteProductAttributionContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("CometRouteReferrerContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("CometRouterHostedRouteContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometRouterParentRouteContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometRouterRefreshKeyContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometRouterRenderTypeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("CometRouterRouteMutableStateContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("getCometRouteKey", ["stableStringify"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof WeakMap === "function" ? new WeakMap() : new Map();

    function a(a) {
        var b = h.get(a);
        if (b != null) return b;
        b = a.rootView.resource.getModuleId();
        b = b + "||" + c("stableStringify")(a.rootView.props);
        var d = a.hostableView;
        if (d != null) {
            var e = d.resource.getModuleId();
            b = b + "||" + e + "||" + c("stableStringify")(d.props)
        }
        e = a.actorID;
        e != null && (b = b + "||" + e);
        h.set(a, b);
        return b
    }
    g["default"] = a
}), 98);
__d("normalizeCometRouterUrl", ["absoluteToRelative", "isCometRouterUrl", "memoizeStringOnly"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [c("absoluteToRelative"), a, b];

    function a(a) {
        return a[a.length - 1] === "/" ? a.substring(0, a.length - 1) : a
    }

    function b(a) {
        return a[0] !== "/" ? "/" + a : a
    }
    d = c("memoizeStringOnly")(function(a) {
        return !c("isCometRouterUrl")(a) ? a : h.reduce(function(a, b) {
            return b(a)
        }, a)
    });
    g["default"] = d
}), 98);
__d("useHostedRoute", ["CometRouterHostedRouteContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometRouterHostedRouteContext"))
    }
    g["default"] = a
}), 98);
__d("useParentRoute", ["CometRouterParentRouteContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometRouterParentRouteContext"))
    }
    g["default"] = a
}), 98);
__d("CometRouteMatch", ["ConstUriUtils", "getCometRouteKey", "normalizeCometRouterUrl", "useCurrentRoute", "useHostedRoute", "useParentRoute"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        return !1
    };

    function i(a, b) {
        return a == null ? h : function(c) {
            return b(c, a)
        }
    }

    function j(a, b) {
        return a != null && b != null && c("normalizeCometRouterUrl")(a) === c("normalizeCometRouterUrl")(b)
    }

    function k(a, b) {
        return a != null && b != null && j((a = d("ConstUriUtils").getUri(a)) == null ? void 0 : a.getPath(), (a = d("ConstUriUtils").getUri(b)) == null ? void 0 : a.getPath())
    }
    f = function(a, b) {
        return c("getCometRouteKey")(a) === c("getCometRouteKey")(b)
    };
    var l = function(a, b) {
            return j(a, b.url)
        },
        m = function(a, b) {
            return k(a, b.url)
        },
        n = function(a, b) {
            return k(a, (a = b.canonicalUrl) != null ? a : b.url)
        };
    n = {
        canonicalPathMatchFunction: n,
        pathMatchFunction: m,
        routeMatchFunction: f,
        urlMatchFunction: l
    };

    function a(a) {
        var b = c("useCurrentRoute")();
        return i(b, a)
    }

    function b(a) {
        var b = c("useHostedRoute")();
        return i(b, a)
    }

    function e(a) {
        var b = c("useParentRoute")();
        return i(b, a)
    }
    g.MatchFunctions = n;
    g.useCurrentRouteMatcher = a;
    g.useHostedRouteMatcher = b;
    g.useParentRouteMatcher = e
}), 98);
__d("CometRouteRenderType", ["CometRouterRenderTypeContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        var a = h(c("CometRouterRenderTypeContext"));
        return a === "pushView"
    }

    function b() {
        var a = h(c("CometRouterRenderTypeContext"));
        return a === "hosted"
    }

    function e() {
        var a = h(c("CometRouterRenderTypeContext"));
        return a === "main"
    }
    g.useIsPushView = a;
    g.useIsHosted = b;
    g.useIsMain = e
}), 98);
__d("useRoutePassthroughProps", ["CometRoutePassthroughPropsContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometRoutePassthroughPropsContext"))
    }
    g["default"] = a
}), 98);
__d("useRouteReferrer", ["CometRouteReferrerContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometRouteReferrerContext"))
    }
    g["default"] = a
}), 98);
__d("CometRouteCache", ["normalizeCometRouterUrl"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {};

    function a(a, b) {
        a = c("normalizeCometRouterUrl")(a);
        h[a] = (b == null ? void 0 : b.prefetchable) === !1 ? {
            type: "nonprefetchable_route",
            url: b.url
        } : b
    }

    function b(a) {
        a = c("normalizeCometRouterUrl")(a);
        return h[a]
    }

    function d(a) {
        Object.keys(h).forEach(function(b) {
            b.startsWith(a) && delete h[b]
        })
    }
    e = null;
    g.install = a;
    g.getRoute = b;
    g.invalidatePath = d;
    g.dump = e
}), 98);
__d("buildCometRouteFromDefinition", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c, d) {
        return babelHelpers["extends"]({}, a, {
            params: c,
            routePath: d,
            type: "valid_route",
            url: b
        })
    }
    f["default"] = a
}), 66);
__d("buildRouteParams", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        return Object.keys(a).reduce(function(d, e) {
            var f = a[e];
            if (f != null && (c == null || f[c] === !0)) {
                var h, i = (h = g(b[e], f.coercibleType)) != null ? h : f["default"];
                d[e] = i;
                f.legacyNames.forEach(function(a) {
                    d[a] = i
                })
            }
            return d
        }, {})
    }

    function g(a, b) {
        if (a == null) return null;
        switch (b) {
            case "BOOL":
                if (typeof a === "boolean") return a;
                b = String(a).toLowerCase();
                return b === "0" || b === "false" ? !1 : Boolean(a)
        }
        return a
    }
    f["default"] = a
}), 66);
__d("normalizeCometRouterConstUri", ["ConstUriUtils", "isCometRouterUrl", "memoizeStringOnly"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("memoizeStringOnly")(function(a) {
        if (!c("isCometRouterUrl")(a)) return a;
        var b = d("ConstUriUtils").getUri(a);
        b != null && (b = b.getUnqualifiedUri());
        b != null && (b = b.stripTrailingSlash());
        b != null && !b.getPath().startsWith("/") && (b = b.setPath("/" + b.getPath()));
        return b != null ? b.toString() : a
    });
    g["default"] = a
}), 98);
__d("CometRouteMapper", ["ConstUriUtils", "buildCometRouteFromDefinition", "buildRouteParams", "normalizeCometRouterConstUri", "recoverableViolation", "stableStringify"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    f = function(a) {
        return c("normalizeCometRouterConstUri")(a.getPath())
    };

    function i(a, b) {
        return c("stableStringify")(c("buildRouteParams")(a, b, "significant"))
    }

    function j(a) {
        var b = a.instanceParams,
            d = a.routeParams;
        a = a.routePath;
        b = c("buildRouteParams")(d, b, "path");
        return {
            pathParams: b,
            results: {},
            routeParams: d,
            routePath: a
        }
    }

    function k(a, b, e, f) {
        var g = i(b.routeParams, babelHelpers["extends"]({}, b.pathParams, e));
        g = b.results[g];
        if (g == null) return null;
        if (g.type === "routeMatch") return k(a, g.routeMatch, e, f);
        if (g.type === "routeRedirect") {
            var h = d("ConstUriUtils").getUri(g.routeRedirect.url);
            g.routeRedirect.useCurrentParams === !0 && h != null && (h = h.addQueryParams(new Map(Object.entries(e))));
            g.routeRedirect.currentUrlParam != null && h != null && (h = h.addQueryParam(g.routeRedirect.currentUrlParam, a));
            h != null && (h = h.removeQueryParams(g.routeRedirect.strip));
            h = h != null ? h.toString() : "";
            return l(h, f)
        }
        if (g.type === "routeDefinition") {
            h = babelHelpers["extends"]({}, b.pathParams, e);
            return c("buildCometRouteFromDefinition")(g.routeDefinition, a, c("buildRouteParams")(b.routeParams, h, null), b.routePath)
        }
        c("recoverableViolation")("CometRouteMapper encountered an invalid result type " + g.type, "comet_infra");
        return null
    }

    function l(a, b) {
        b === void 0 && (b = {});
        var e = c("normalizeCometRouterConstUri")(a);
        if (b[a] === !0) {
            c("recoverableViolation")("CometRouteMapper encountered cyclic redirect " + a, "comet_infra");
            return null
        }
        b[a] = !0;
        a = "";
        var f = {},
            g = d("ConstUriUtils").getUri(e);
        g != null && (f = Object.fromEntries(g.getQueryParams()), a = g.getPath());
        g = h[a];
        return g == null ? null : k(e, g, f, b)
    }

    function m(a, b, e) {
        var f = "",
            g = {};
        a = c("normalizeCometRouterConstUri")(a);
        a = d("ConstUriUtils").getUri(a);
        a != null && (g = Object.fromEntries(a.getQueryParams()), f = a.getPath());
        a = h[f];
        a == null && (a = h[f] = j(e[0]));
        var k = a;
        e.slice(1).forEach(function(a) {
            var b = k;
            b = b.results;
            var c = i(k.routeParams, babelHelpers["extends"]({}, k.pathParams, g));
            a = j(a);
            b[c] = {
                routeMatch: a,
                type: "routeMatch"
            };
            k = a
        });
        f = i(k.routeParams, babelHelpers["extends"]({}, k.pathParams, g));
        k.results[f] = b
    }

    function a(a, b, c) {
        if (b.prefetchable === !1) return;
        b = {
            routeDefinition: b,
            type: "routeDefinition"
        };
        m(a, b, c)
    }

    function b(a, b, c) {
        if (b.prefetchable === !1) return;
        b = {
            routeRedirect: b,
            type: "routeRedirect"
        };
        m(a, b, c)
    }

    function e(a) {
        Object.keys(h).forEach(function(b) {
            b.startsWith(a) && delete h[b]
        })
    }
    var n = null;
    g.getURIPath = f;
    g.getRoute = l;
    g.installRoute = a;
    g.installRedirect = b;
    g.invalidatePath = e;
    g.dump = n
}), 98);
__d("buildCometErrorRoute", ["JSResourceForInteraction"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")("CometErrorRoot.react").__setRef("buildCometErrorRoute");

    function a(a) {
        return {
            hostableView: {
                allResources: [h],
                props: {},
                resource: h
            },
            params: {},
            rootView: {
                allResources: [h],
                props: {},
                resource: h
            },
            routePath: null,
            tracePolicy: "comet.error",
            type: "valid_route",
            url: a
        }
    }
    g["default"] = a
}), 98);
__d("currentCometRouterInstance", ["FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null;

    function a() {
        h == null && c("FBLogger")("CometRouter").warn("Something attempted to access the Comet router before it was initialized.");
        return h
    }

    function b(a) {
        h = a
    }
    g.get = a;
    g.register = b
}), 98);
__d("CometAsyncFetchError", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        if (a == null) return "";
        if (typeof a === "string") return a;
        try {
            return String.fromCharCode.apply(null, new Uint16Array(a))
        } catch (a) {
            return "<error parsing ArrayBuffer>"
        }
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f) {
            var g;
            g = a.call(this, b) || this;
            g.errorMsg = b;
            g.errorCode = c;
            g.errorRawResponseHeaders = d;
            g.errorRawTransport = e;
            g.errorType = f;
            return g
        }
        var c = b.prototype;
        c.toString = function() {
            var a;
            a = ((a = this.errorCode) != null ? a : "") + "." + g(this.errorMsg) + "." + ((a = this.errorRawResponseHeaders) != null ? a : "") + "." + ((a = this.errorRawTransport) != null ? a : "") + "." + ((a = this.errorType) != null ? a : "") + "." + ((a = this.errorRawTransportStatus) != null ? a : "");
            return "CometAyncFetchError: " + a
        };
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a
}), 66);
__d("CometErrorOverlay", ["ReactDOMComet", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");

    function h() {
        var a = document.body;
        if (a == null) return null;
        var b = document.createElement("div");
        a.appendChild(b);
        return b
    }

    function a(a) {
        var b = h();
        if (b != null) {
            var c = function() {
                    window.setTimeout(function() {
                        e.unmount(), b.remove()
                    }, 0)
                },
                e = d("ReactDOMComet").createRoot(b, {
                    unstable_concurrentUpdatesByDefault: !0,
                    unstable_strictMode: !0
                });
            a = a(c);
            e.render(a);
            return c
        }
    }
    g.injectComponent = a
}), 98);
__d("ServerHTML.react", ["react"], (function(a, b, c, d, e, f, g) {
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.elementRef = h.createRef(), b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.render = function() {
            var a = this.props,
                b = a.blob;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["blob"]);
            return typeof b === "string" ? h.jsx("div", babelHelpers["extends"]({}, a, {
                ref: this.elementRef,
                children: b
            })) : h.jsx("div", babelHelpers["extends"]({}, a, {
                ref: this.elementRef,
                dangerouslySetInnerHTML: b
            }))
        };
        return b
    }(h.Component);
    g["default"] = a
}), 98);
__d("CometExceptionDialog.react", ["fbt", "BaseModal.react", "CometCardedDialog.react", "TetraButton.react", "TetraText.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.closeButtonText,
            d = a.errorDescription,
            e = a.errorSummary,
            f = a.onClose,
            g = a.testid;
        g = a.withCloseButton;
        a = g === void 0 ? !0 : g;
        return i.jsx(c("BaseModal.react"), {
            stackingBehavior: "above-everything",
            children: i.jsxs(c("CometCardedDialog.react"), {
                onClose: f,
                testid: void 0,
                title: e,
                withCloseButton: a,
                children: [i.jsx("div", {
                    className: "dati1w0a jbae33se hv4rvrfc bjjx79mm",
                    children: i.jsx(c("TetraText.react"), {
                        color: "secondary",
                        type: "body2",
                        children: d
                    })
                }), i.jsx("div", {
                    className: "gjzvkazv dati1w0a f10w8fjw hv4rvrfc ecm0bbzt cbu4d94t j83agx80 c4hnarmi",
                    children: i.jsx(c("TetraButton.react"), {
                        label: (g = b) != null ? g : h._( /*FBT_CALL*/ "OK" /*FBT_CALL*/ ),
                        onPress: f,
                        testid: void 0,
                        type: "primary"
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("goForceFullPageRedirectTo", ["ConstUriUtils", "FBLogger", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var e = typeof a === "string" ? d("ConstUriUtils").getUri(a) : a;
        if (e) b === !0 ? window.location.replace(e.toString()) : window.location = e.toString();
        else {
            b = "Invalid URI " + a.toString() + " provided to goFullPageRedirectTo";
            c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(b)
        }
    }
    g["default"] = a
}), 98);
__d("handleCheckpointRedirect", ["ConstUriUtils", "goForceFullPageRedirectTo"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        a = (a = d("ConstUriUtils").getUri(a)) == null ? void 0 : a.addQueryParam("next", location.toString());
        c("goForceFullPageRedirectTo")((a = a) != null ? a : "/")
    }
    g["default"] = a
}), 98);
__d("UserMismatchExpected", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = !1;

    function a(a) {
        g = a
    }

    function b() {
        return g
    }
    f.setIsUserMismatchExpected = a;
    f.getIsUserMismatchExpected = b
}), 66);
__d("handleErrorCodeBasicSideEffects", ["errorCode", "UserMismatchExpected"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a) {
        if (a === 1357032 && d("UserMismatchExpected").getIsUserMismatchExpected() === !0) return !0;
        if (a === 1357001 || a === 1357032) {
            window.location.reload(!0);
            return !0
        }
        return !1
    }
    g["default"] = a
}), 98);
__d("handleCometErrorCodeSideEffects", ["errorCode", "fbt", "CometErrorOverlay", "CometExceptionDialog.react", "OutsideExceptionKeyCommandListener.react", "ServerHTML.react", "handleCheckpointRedirect", "handleErrorCodeBasicSideEffects", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = new Set();

    function l(a) {
        return typeof a === "object" && a != null && Object.prototype.hasOwnProperty.call(a, "__html")
    }

    function m(a, b, e) {
        var f = e,
            g = b;
        f = j.jsx(c("ServerHTML.react"), {
            blob: f
        });
        l(g) && (g = i._( /*FBT_CALL*/ "Something went wrong." /*FBT_CALL*/ ));
        d("CometErrorOverlay").injectComponent(function(b) {
            return j.jsx(c("OutsideExceptionKeyCommandListener.react"), {
                children: j.jsx(c("CometExceptionDialog.react"), {
                    errorDescription: f,
                    errorSummary: g,
                    onClose: function() {
                        k["delete"](a), b()
                    },
                    testid: void 0
                })
            })
        })
    }

    function a(a, b, d, e, f) {
        e === void 0 && (e = null), f === void 0 && (f = !0), c("handleErrorCodeBasicSideEffects")(a) || (a === 1357053 && e != null ? c("handleCheckpointRedirect")(e) : k.has(a) || (k.add(a), f && m(a, b, d)))
    }
    g["default"] = a
}), 98);
__d("cometAsyncFetch", ["CSRFGuard", "CometAsyncFetchError", "ConstUriUtils", "DTSG", "DTSG_ASYNC", "NetworkStatus", "PHPQuerySerializer", "Promise", "XHRRequest", "getAsyncParams", "handleCometErrorCodeSideEffects", "isFacebookURI", "isInternalFBURI", "isMessengerDotComURI", "isWorkplaceDotComURI", "recoverableViolation", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 250,
        i = [];

    function a(a, e) {
        e === void 0 && (e = {
            data: {},
            method: "GET"
        });
        var f = 0,
            g;
        return new(b("Promise"))(function(b, l) {
            var m;

            function n(f) {
                if (e.ignoreResponse === !0) return b();
                f = f.trim();
                try {
                    d("CSRFGuard").exists(f) && (f = d("CSRFGuard").clean(f)), f = JSON.parse(f)
                } catch (b) {
                    c("recoverableViolation")('Unable to parse uri "' + a.toString() + '" response. ' + (b == null ? void 0 : b.message), "comet_infra");
                    l(b);
                    return
                }
                if (f.error) {
                    c("handleCometErrorCodeSideEffects")(f.error, f.errorSummary, f.errorDescription, f.redirectTo, e.shouldShowErrorDialog);
                    l({
                        error: f.error,
                        errorMsg: f.errorDescription,
                        errorType: f.errorSummary,
                        redirectTo: f.redirectTo
                    });
                    return
                }
                if (k(a)) {
                    var g, h;
                    g = (g = f) == null ? void 0 : g.dtsgToken;
                    h = (h = f) == null ? void 0 : h.dtsgAsyncGetToken;
                    g && d("DTSG").setToken(g);
                    h && d("DTSG_ASYNC").setToken(h)
                }
                if (((g = e) == null ? void 0 : g.getFullPayload) === !0) {
                    b(f);
                    return
                }
                b((h = f) == null ? void 0 : h.payload)
            }

            function o(a) {
                var b = e.retryCount != null && e.retryCount > 0 && f <= e.retryCount;
                if (b) c("setTimeout")(q, h);
                else {
                    b = new(c("CometAsyncFetchError"))(a.errorMsg, a.errorCode, a.errorRawResponseHeaders, a.errorRawTransport, a.errorType);
                    return l(b)
                }
            }

            function p() {
                var b = new(c("CometAsyncFetchError"))("Request to " + a + " was aborted", null, null, null, "Abort");
                return l(b)
            }

            function q() {
                var a;
                if (((a = e.abortSignal) == null ? void 0 : a.aborted) === !0) return p();
                r();
                s()
            }

            function r() {
                m != null && (m.abort(), m = null)
            }

            function s() {
                var b, d = (b = e.requestHeaders) != null ? b : {};
                i.forEach(function(a) {
                    a = a();
                    d = Object.assign(a, d)
                });
                b = Object.keys(d).reduce(function(a, b) {
                    return a.setRequestHeader(b, d[b])
                }, new(c("XHRRequest"))(a)).setMethod(e.method).setData(babelHelpers["extends"]({}, e.data, c("getAsyncParams")(e.method))).setRawData(e.formData).setResponseHandler(n).setErrorHandler(o).setAbortHandler(p).setUploadProgressHandler(e.onUploadProgress).setDataSerializer(c("PHPQuerySerializer").serialize);
                m = b;
                e.withCredentials === !0 && j(a) && b.setWithCredentials(!0);
                b.send();
                f++
            }
            e.abortSignal && (e.abortSignal.onabort = function() {
                r()
            });
            c("NetworkStatus").isOnline() ? q() : g = c("NetworkStatus").onChange(function(a) {
                a = a.online;
                a && (q(), g.remove())
            })
        })
    }
    a.registerHeaderProvider = function(a) {
        i.push(a)
    };

    function j(a) {
        a = d("ConstUriUtils").getUri(a);
        return a == null ? !1 : c("isFacebookURI")(a) || c("isInternalFBURI")(a) || c("isMessengerDotComURI")(a) || c("isWorkplaceDotComURI")(a)
    }

    function k(a) {
        a = d("ConstUriUtils").getUri(a);
        if (a == null) return !1;
        return !a.getProtocol() && !a.getDomain() ? !0 : document.location.origin === a.getOrigin()
    }
    g["default"] = a
}), 98);
__d("parseCometRouteFetchPayload", ["recoverableViolation", "replaceTransportMarkers"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        if (a == null) return null;
        if (a.type === "route_redirect") {
            var b = a.exports,
                d = a.redirect_url,
                e = a.redirect_result,
                f = a.route_match_infos;
            if (f != null && Array.isArray(f) && f.length > 0 && b != null && d != null) {
                c("replaceTransportMarkers")({
                    relativeTo: null
                }, b);
                return {
                    redirectResult: h(e),
                    redirectUrl: d,
                    routeMatchInfos: f,
                    routeRedirect: b,
                    type: "routeRedirect"
                }
            }
        }
        if (a.type === "route_definition") {
            e = a.exports;
            d = a.route_match_infos;
            if (d != null && Array.isArray(d) && d.length > 0 && e != null) {
                c("replaceTransportMarkers")({
                    relativeTo: null
                }, e);
                return {
                    routeDefinition: e,
                    routeMatchInfos: d,
                    timeSpentMetaData: a.time_spent_meta_data,
                    type: "routeDefinition"
                }
            }
        }
        c("recoverableViolation")("parseCometRouteFetchPayload encountered a bad payload result: " + a, "comet_infra");
        return null
    }

    function a(a) {
        return a == null || a.error == null ? {
            error: !0
        } : {
            error: !1,
            result: h(a.result)
        }
    }
    g["default"] = a
}), 98);
__d("stringifyCyclicJson", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a) {
        return ["Element", a.localName].concat(a.className.split(" ")).join(".")
    };

    function a(a) {
        try {
            var b = new Set();
            return JSON.stringify(a, function(a, c) {
                if (c != null && typeof c === "object") {
                    if (c instanceof Element) return g(c);
                    else if (b.has(c)) return "<Cyclic Dependency>";
                    b.add(c)
                }
                return c
            })
        } catch (a) {
            return "<Error Stringifying Trace>"
        }
    }
    f["default"] = a
}), 66);
__d("fetchAnonymousCometRoute", ["CSRFGuard", "CometAsyncFetchError", "Env", "HasteResponse", "JSScheduler", "PHPQuerySerializer", "Promise", "RelayAPIConfig", "RelayPrefetchedStreamCache", "XHRRequest", "cometAsyncFetch", "createChunkedResponseParser", "err", "getAsyncParams", "gkx", "parseCometRouteFetchPayload", "promiseDone", "recoverableViolation", "setTimeout", "stringifyCyclicJson", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = {},
        j = null,
        k = [],
        l = 2,
        m = 3e3,
        n = 15;

    function o(a) {
        if (a != null && typeof a === "object" && Object.prototype.hasOwnProperty.call(a, "payloads") && Object.prototype.hasOwnProperty.call(a, "sr_payload")) return a;
        else {
            throw c("err")("Routing payload expected, but got " + ((a = JSON.stringify(a)) != null ? a : "<unstringifiable>"))
        }
    }

    function p(a, b) {
        var d, e = a == null ? void 0 : a.payloads;
        t((d = a == null ? void 0 : a.sr_payload) != null ? d : Object.freeze({}), b, a.log_roots);
        var f = {};
        typeof e === "object" && e != null && Object.keys(e).forEach(function(a) {
            f[a] = c("parseCometRouteFetchPayload")(e[a])
        });
        return f
    }

    function q(a, d) {
        d === void 0 && (d = l);
        return a()["catch"](function(e) {
            if (d > 0) return new(b("Promise"))(function(b, e) {
                c("setTimeout")(function() {
                    c("promiseDone")(q(a, d - 1), b, e)
                }, m)
            });
            throw e
        })
    }

    function r(a) {
        var b = function() {
            return c("cometAsyncFetch")(c("gkx")("3521") ? "/ajax/multi-site-bulk-route-definitions/" : "/ajax/bulk-route-definitions/", {
                data: {
                    route_urls: a,
                    routing_namespace: c("Env").routing_namespace
                },
                method: "POST",
                shouldShowErrorDialog: !1
            })
        };
        return q(b).then(function(a) {
            a = o(a);
            return p(a, "comet_route_fetch")
        })
    }

    function s(a) {
        if (a instanceof c("CometAsyncFetchError")) return a.toString();
        if (typeof a === "object") {
            var b;
            return (b = c("stringifyCyclicJson")(a)) != null ? b : "<unstringifiable>"
        }
        return a
    }

    function a(a) {
        if (i[a] != null) return i[a];
        var e = new(b("Promise"))(function(b, c) {
            k.push({
                reject: c,
                resolve: b,
                url: a
            })
        });
        i[a] = e;
        e["finally"](function() {
            return delete i[a]
        });
        j == null && (j = d("JSScheduler").scheduleSpeculativeCallback(function() {
            j = null;
            var a = function() {
                var a = k.splice(0, n);
                c("promiseDone")(r(a.map(function(a) {
                    a = a.url;
                    return a
                })), function(b) {
                    a.forEach(function(a) {
                        var d = a.resolve;
                        a = a.url;
                        var e = b[a];
                        e == null ? (c("recoverableViolation")("Unable to find route for " + a, "comet_infra"), d({
                            error: !0
                        })) : d(e)
                    })
                }, function(b) {
                    c("recoverableViolation")("Failed call to /ajax/bulk-route-definitions/: " + s(b), "comet_infra"), a.forEach(function(a) {
                        a = a.resolve;
                        return a({
                            error: !0
                        })
                    })
                })
            };
            while (k.length > 0) a()
        }));
        return e
    }

    function e(a, e) {
        if (h[a] != null) return h[a];
        var f = function() {
            return new(b("Promise"))(function(b, f) {
                var g = !1,
                    h = c("createChunkedResponseParser")(function(e) {
                        var f;
                        e = e.trim();
                        try {
                            d("CSRFGuard").exists(e) && (e = d("CSRFGuard").clean(e)), f = JSON.parse(e)
                        } catch (a) {
                            g || c("recoverableViolation")("Unable to parse /ajax/route-definition/ response " + e + ", " + a, "comet_infra");
                            b({
                                error: !0
                            });
                            return
                        }
                        if ((!f || !f.__type) && !g) {
                            e = "Routing payload expected for " + a + ", but got " + ((e = JSON.stringify(f)) != null ? e : "<unstringifiable>");
                            c("recoverableViolation")(e, "comet_infra");
                            b({
                                error: !0
                            })
                        }
                        if (f.__type === "error_response") {
                            b({
                                error: !0
                            });
                            return
                        }
                        if (f.__type === "first_response") {
                            if (g) throw c("unrecoverableViolation")("There cannot be two first responses to one request", "comet_infra");
                            g = !0;
                            u(f);
                            b(f.payload)
                        } else if (f.__type === "preloader") {
                            e = f.id;
                            var h = f.result;
                            h ? d("RelayPrefetchedStreamCache").next(e, h) : d("RelayPrefetchedStreamCache").error(e, {})
                        } else if (f.__type === "preloader_error") {
                            h = f.id;
                            d("RelayPrefetchedStreamCache").error(h, {})
                        }
                    });
                new(c("XHRRequest"))(c("gkx")("3521") ? "/ajax/multi-site-route-definition/" : "/ajax/route-definition/").setMethod("POST").setData(babelHelpers["extends"]({
                    client_previous_actor_id: e !== "0" ? e : null,
                    route_url: a,
                    routing_namespace: c("Env").routing_namespace
                }, c("getAsyncParams")("POST"))).setResponseHandler(h).setErrorHandler(function(a) {
                    f(a)
                }).setDataSerializer(c("PHPQuerySerializer").serialize).send()
            })
        };
        f = q(f).then(c("parseCometRouteFetchPayload"));
        h[a] = f;
        f["finally"](function() {
            return delete h[a]
        });
        return f
    }

    function t(a, b, c) {
        d("HasteResponse").handle(a, {
            source: b,
            sourceDetail: JSON.stringify(c)
        })
    }

    function u(a) {
        var b;
        t((b = a.sr_payload) != null ? b : {}, "comet_route_first_response", null);
        if (a.preloaders && a.preloaders.length)
            for (var b = a.preloaders, a = Array.isArray(b), e = 0, b = a ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (a) {
                    if (e >= b.length) break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                d("RelayPrefetchedStreamCache").registerPreloader(f.preloaderID, f.queryID, f.variables, (f = f.actorID) != null ? f : c("RelayAPIConfig").actorID)
            }
    }
    g.assertRoutingPayload = o;
    g.responseHandler = p;
    g.retryFetchOnError = q;
    g.fetchAnonymousCometRouteForPreload = a;
    g.fetchAnonymousCometRouteForTransition = e;
    g.handleSRandJSModules = t
}), 98);
__d("getTopMostRouteInfo", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a.hosted,
            c = a.main;
        a = a.pushViewStack;
        if (a && a.length > 0) {
            a = a[a.length - 1];
            a.depth;
            a.key;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["depth", "key"]);
            return a
        }
        return b ? b : c
    }
    f["default"] = a
}), 66);
__d("getTopMostRoute", ["getTopMostRouteInfo"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return c("getTopMostRouteInfo")(a).route
    }
    g["default"] = a
}), 98);
__d("isRouteTransparent", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a.routeType === "routable_dialog") return !0;
        return a.transparent === !0 ? !0 : !1
    }
    f["default"] = a
}), 66);
__d("notifyServerOnNavigation", ["Env", "JSScheduler", "Promise", "cometAsyncFetch", "fetchAnonymousCometRoute", "gkx", "parseCometRouteFetchPayload", "promiseDone"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, e) {
        var f = function() {
            return new(b("Promise"))(function(b, f) {
                d("JSScheduler").scheduleLoggingPriCallback(function() {
                    c("promiseDone")(c("cometAsyncFetch")(c("gkx")("3521") ? "/ajax/multi-site-navigation/" : "/ajax/navigation/", {
                        data: {
                            client_previous_actor_id: e !== "0" ? e : null,
                            route_url: a,
                            routing_namespace: c("Env").routing_namespace
                        },
                        method: "POST"
                    }), b, f)
                })
            })
        };
        return d("fetchAnonymousCometRoute").retryFetchOnError(f).then(function(a) {
            d("fetchAnonymousCometRoute").handleSRandJSModules(a.sr_payload, "comet_route_navigation", a.log_roots);
            return c("parseCometRouteFetchPayload")(a.payload)
        })
    }
    g["default"] = a
}), 98);
__d("CometRelayRoutePrefetchCache", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = new Map();
    b = a;
    f["default"] = b
}), 66);
__d("parseCometRouteFetchResult", ["ConstUriUtils", "buildCometRouteFromDefinition", "buildRouteParams", "normalizeCometRouterConstUri"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b) {
        if (b != null && b.type === "routeRedirect") {
            var e = h(b.redirectUrl, b.redirectResult);
            return babelHelpers["extends"]({}, e, {
                prefetchable: e.prefetchable === !0 && b.routeRedirect.prefetchable !== !1
            })
        }
        if (b == null || b.type !== "routeDefinition") return {
            prefetchable: !0,
            route: {
                type: "unmatched_route",
                url: a
            }
        };
        ({});
        e = d("ConstUriUtils").getUri(c("normalizeCometRouterConstUri")(a));
        e = e != null ? Object.fromEntries(e.getQueryParams()) : {};
        var f = b.routeDefinition,
            g = b.routeMatchInfos;
        b = b.timeSpentMetaData;
        g = g[g.length - 1];
        var i = g.instanceParams,
            j = g.routeParams;
        g = g.routePath;
        i = babelHelpers["extends"]({}, i, e);
        return {
            initialTimeSpentMetaData: b,
            prefetchable: f.prefetchable !== !1,
            route: c("buildCometRouteFromDefinition")(f, a, c("buildRouteParams")(j, i, null), g)
        }
    }
    g["default"] = h
}), 98);
__d("getCometRouteFetchRouteData", ["buildCometErrorRoute", "parseCometRouteFetchResult"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        return b.error ? {
            prefetchable: !0,
            route: c("buildCometErrorRoute")(a)
        } : c("parseCometRouteFetchResult")(a, b.result)
    }
    g["default"] = a
}), 98);
__d("installToCometRouteMapper", ["CometRouteMapper", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        if (b.error) return;
        h(a, b.result)
    }

    function h(a, b) {
        if (b == null) return;
        if (b.type === "routeRedirect") {
            d("CometRouteMapper").installRedirect(a, b.routeRedirect, b.routeMatchInfos);
            h(b.redirectUrl, b.redirectResult);
            return
        }
        if (b.type === "routeDefinition") {
            d("CometRouteMapper").installRoute(a, b.routeDefinition, b.routeMatchInfos);
            return
        }
        c("recoverableViolation")("CometRouteStore encountered a bad fetch result: " + b.type, "comet_infra");
        return
    }
    g["default"] = a
}), 98);
__d("normalizeCometRouteStorePrefetchUrl", ["ConstUriUtils", "normalizeCometRouterUrl"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = ["__cft__", "__tn__", "fnr_t", "sw_fnr_id"];

    function a(a) {
        var b;
        b = (b = d("ConstUriUtils").getUri(a)) == null ? void 0 : (b = b.removeQueryParams(h)) == null ? void 0 : b.toString();
        return c("normalizeCometRouterUrl")((b = b) != null ? b : a)
    }
    g["default"] = a
}), 98);
__d("CometRouteStore", ["CometRelayRoutePrefetchCache", "CometRouteCache", "CometRouteMapper", "ConstUriUtils", "Promise", "fetchAnonymousCometRoute", "getCometRouteFetchRouteData", "getCometRouteKey", "installToCometRouteMapper", "normalizeCometRouteStorePrefetchUrl", "normalizeCometRouterConstUri", "notifyServerOnNavigation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        var b = d("CometRouteCache").getRoute(a);
        if (b != null) return b;
        b = d("CometRouteMapper").getRoute(a);
        if (b != null) {
            d("CometRouteCache").install(a, b);
            return b
        }
        return null
    }

    function a(a) {
        var d = h(a);
        if (d != null) return b("Promise").resolve(d);
        d = c("normalizeCometRouteStorePrefetchUrl")(a);
        d = c("CometRelayRoutePrefetchCache").get(d);
        return d ? d.promise["catch"](function() {
            return i(a)
        }) : i(a)
    }

    function i(a) {
        return d("fetchAnonymousCometRoute").fetchAnonymousCometRouteForPreload(a).then(function(b) {
            var e = c("getCometRouteFetchRouteData")(a, b);
            e = e.prefetchable ? e.route : {
                type: "nonprefetchable_route",
                url: a
            };
            b.error || (c("installToCometRouteMapper")(a, b), d("CometRouteCache").install(a, e));
            return e
        })
    }

    function e(a, e) {
        var f = h(a);
        return f != null && f.type !== "nonprefetchable_route" ? b("Promise").resolve({
            prefetchable: !0,
            route: f
        }) : d("fetchAnonymousCometRoute").fetchAnonymousCometRouteForTransition(a, e).then(function(b) {
            var e = c("getCometRouteFetchRouteData")(a, b),
                f = e.prefetchable ? e.route : {
                    type: "nonprefetchable_route",
                    url: a
                };
            c("installToCometRouteMapper")(a, b);
            d("CometRouteCache").install(a, f);
            return e
        })
    }

    function f(a, b, e) {
        return c("notifyServerOnNavigation")(b, e).then(function(e) {
            var f = c("getCometRouteFetchRouteData")(b, e),
                g = f.route;
            if ((g == null ? void 0 : g.type) === "valid_route" && c("getCometRouteKey")(g) === c("getCometRouteKey")(a)) return null;
            c("installToCometRouteMapper")(b, e);
            e = f.prefetchable ? f.route : {
                type: "nonprefetchable_route",
                url: b
            };
            d("CometRouteCache").install(b, e);
            return g
        })
    }

    function j(a) {
        var b = "";
        a = d("ConstUriUtils").getUri(c("normalizeCometRouterConstUri")(a));
        b = a != null ? a.getPath() : "";
        d("CometRouteMapper").invalidatePath(b);
        d("CometRouteCache").invalidatePath(b)
    }
    e = {
        fetchForNavigation: e,
        fetchForValidation: f,
        fetchRoute: a,
        getRoute: h,
        invalidatePath: j
    };
    g["default"] = e
}), 98);
__d("handleCometRelayRoutingPayload", ["CometRelayRoutePrefetchCache", "CometRouteCache", "CometRouteStore", "ODS", "Promise", "fetchAnonymousCometRoute", "getCometRouteFetchRouteData", "gkx", "installToCometRouteMapper", "normalizeCometRouteStorePrefetchUrl", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("1401861"),
        i = 15e3;

    function a(a, e) {
        if (!h) return;
        Array.isArray(a) && a.forEach(function(a) {
            if (typeof a !== "string") return;
            var d = c("normalizeCometRouteStorePrefetchUrl")(a);
            a = c("CometRouteStore").getRoute(d);
            if ((a == null ? void 0 : a.type) === "valid_route") return;
            if (!c("CometRelayRoutePrefetchCache").has(d)) {
                a = null;
                var f = null,
                    g = new(b("Promise"))(function(b, c) {
                        a = c, f = b
                    });
                if (a != null && f != null) {
                    var e = {
                        promise: g,
                        reject: a,
                        resolve: f
                    };
                    c("CometRelayRoutePrefetchCache").set(d, e);
                    c("setTimeout")(function() {
                        c("CometRelayRoutePrefetchCache")["delete"](d), e.reject()
                    }, i)
                }
            }
        });
        if (e != null) {
            a = d("fetchAnonymousCometRoute").assertRoutingPayload(e);
            e = d("fetchAnonymousCometRoute").responseHandler(a, "comet_route_prefetch");
            for (var f in e) {
                a = e[f];
                var g = c("normalizeCometRouteStorePrefetchUrl")(f);
                a = a != null ? j(g, a) : null;
                var k = c("CometRelayRoutePrefetchCache").get(g);
                k != null && (c("CometRelayRoutePrefetchCache")["delete"](g), a != null ? k.resolve(a) : k.reject())
            }
        }
    }

    function j(a, b) {
        var e = c("getCometRouteFetchRouteData")(a, b);
        e = e.prefetchable ? e.route : {
            type: "nonprefetchable_route",
            url: a
        };
        if (!b.error) {
            var f = c("CometRouteStore").getRoute(a);
            d("ODS").bumpEntityKey(2994, "comet_route_store", "relay_fetch." + (f != null ? "install_override" : "install"));
            c("installToCometRouteMapper")(a, b);
            d("CometRouteCache").install(a, e);
            return e
        }
    }
    g["default"] = a
}), 98);
__d("CometDarkModeContext", ["emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        currentSetting: "DISABLED",
        onDarkModeToggle: c("emptyFunction"),
        setDarkModeSetting: c("emptyFunction")
    });
    g["default"] = b
}), 98);
__d("PushNotificationsEventEmitterQueue", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = [];
    f["default"] = a
}), 66);
__d("PushNotificationsEventEmitter", ["BaseEventEmitter", "PushNotificationsEventEmitterQueue"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = new(c("BaseEventEmitter"))();
    b = a;
    a.once("openInstallPush", function() {
        for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
        c("PushNotificationsEventEmitterQueue").push({
            args: b,
            type: "openInstallPush"
        })
    });
    g["default"] = b
}), 98);
__d("CometNUXManagerContext", ["emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = new Set(),
        i = new Map();
    b = a.createContext({
        registerNUX: function(a, b) {
            if (h.has(a) || i.has(a)) return c("emptyFunction");
            b(!0);
            i.set(a, b);
            return function() {
                i["delete"](a)
            }
        },
        removeNUX: function(a) {
            h.add(a), i.get(a) == null ? void 0 : i.get(a)(!1)
        }
    });
    g["default"] = b
}), 98);
__d("useCometNUXInlineSurvey", ["Random", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useMemo,
        i = b.useRef,
        j = 100,
        k = Object.freeze({});

    function a(a) {
        a === void 0 && (a = k);
        a = a;
        var b = a.persistAfterAnswering,
            c = b === void 0 ? !1 : b;
        b = a.inlineSurveySampleRate_testOnlyDONOTUSE;
        var e = b === void 0 ? j : b,
            f = i(!1),
            g = i(null);
        return h(function() {
            return {
                getShouldShowInlineSurvey: function() {
                    if (c === !1 && f.current === !0) return !1;
                    g.current == null && (g.current = d("Random").coinflip(e));
                    return g.current
                },
                initialHasAnsweredSurvey: function() {
                    return f.current
                },
                onAnswer: f.current === !0 ? void 0 : function() {
                    f.current = !0
                }
            }
        }, [e, c])
    }
    g["default"] = a
}), 98);
__d("CometEdfFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1922996");
    c = b("FalcoLoggerInternal").create("comet_edf", a);
    e.exports = c
}), null);
__d("useNUX", ["CometEdfFalcoEvent", "CometNUXManagerContext", "react", "recoverableViolation", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
        i = b.useEffect,
        j = b.useMemo,
        k = b.useRef,
        l = b.useState;

    function a(a, b) {
        b === void 0 && (b = !0);
        var d = c("useStable")(function() {
            return a
        });
        if (d !== a) {
            var e;
            c("recoverableViolation")("Error nux changed at runtime from " + ((e = d) != null ? e : "null") + " to " + ((e = a) != null ? e : "null") + ", this is not supported and will lead to erratic behavior, we have continued to use your initially supplied nux", "comet_ui")
        }
        e = l(!1);
        var f = e[0],
            g = e[1];
        e = h(c("CometNUXManagerContext"));
        var m = e.registerNUX,
            n = e.removeNUX;
        i(function() {
            if (d == null || !b) return;
            return m(d, g)
        }, [d, m, b]);
        var o = k({
            hidden: !1,
            visible: !1
        });
        e = j(function() {
            return {
                onDismiss: function() {
                    if (d == null || !b) return;
                    n(d);
                    c("CometEdfFalcoEvent").logImmediately(function() {
                        return {
                            nux: d,
                            type: "dismiss"
                        }
                    })
                },
                onHelpful: function(a) {
                    if (d == null || !b) return;
                    c("CometEdfFalcoEvent").log(function() {
                        return {
                            nux: d,
                            step_key: a,
                            type: "helpful"
                        }
                    })
                },
                onHidden: function() {
                    if (d == null || !b || o.current.hidden || o.current.visible !== !0) return;
                    o.current.hidden = !0;
                    c("CometEdfFalcoEvent").log(function() {
                        return {
                            nux: d,
                            type: "hidden"
                        }
                    })
                },
                onNotHelpful: function(a) {
                    if (d == null || !b) return;
                    c("CometEdfFalcoEvent").log(function() {
                        return {
                            nux: d,
                            step_key: a,
                            type: "not_helpful"
                        }
                    })
                },
                onRemoved: function() {
                    if (d == null) return;
                    n(d)
                },
                onVisible: function() {
                    if (d == null || !b || o.current.visible) return;
                    o.current.visible = !0;
                    c("CometEdfFalcoEvent").logCritical(function() {
                        return {
                            nux: d,
                            type: "visible"
                        }
                    })
                }
            }
        }, [b, d, n]);
        return [f, e]
    }
    g["default"] = a
}), 98);
__d("useCometCalloutNUX", ["react", "useCometCallout", "useCometNUXInlineSurvey", "useMergeRefs", "useNUX", "useRefEffect"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useMemo,
        j = {
            arrowStyle: "inset",
            hasCloseButton: !0,
            type: "accent"
        };

    function a(a, b, d) {
        d === void 0 && (d = !0);
        var e = b.onClose,
            f = b.onHelpful,
            g = b.onHide,
            k = b.onNotHelpful,
            l = b.onShow;
        a = c("useNUX")(a, d);
        d = a[0];
        var m = a[1],
            n = h(function() {
                m.onDismiss(), e && e()
            }, [m, e]),
            o = h(function() {
                m.onRemoved(), m.onHidden(), g && g()
            }, [m, g]),
            p = h(function() {
                m.onVisible(), l && l()
            }, [m, l]),
            q = h(function() {
                m.onHelpful(), f && f()
            }, [m, f]),
            r = h(function() {
                m.onNotHelpful(), k && k()
            }, [m, k]),
            s = c("useCometNUXInlineSurvey")();
        a = c("useRefEffect")(function(a) {
            var b = function() {
                m.onDismiss()
            };
            a.addEventListener("click", b, {
                passive: !0
            });
            return function() {
                return a.removeEventListener("click", b, {
                    passive: !0
                })
            }
        }, [m]);
        d = c("useCometCallout")(i(function() {
            return babelHelpers["extends"]({}, j, b, {
                inlineSurvey: s,
                onClose: n,
                onHelpful: q,
                onHide: o,
                onNotHelpful: r,
                onShow: p
            })
        }, [b, s, n, q, o, r, p]), d);
        return c("useMergeRefs")(d, a)
    }
    g["default"] = a
}), 98);
__d("CometCompatModalDialogResource", ["JSResourceForInteraction"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")("CometCompatModal.react").__setRef("CometCompatModalDialogResource");
    b = a;
    g["default"] = b
}), 98);
__d("useCometVisualChangeTracker", ["cr:683059", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c = d("react");
    var h = c.useCallback,
        i = c.useEffect,
        j = c.useRef;

    function a() {
        var a = j(null),
            c = j(null);
        i(function() {
            return function() {
                c.current && c.current(), c.current = null, a.current = null
            }
        }, []);
        return h(function(d) {
            if (a.current !== d) {
                c.current && (c.current(), c.current = null);
                a.current = d;
                if (d && b("cr:683059")) {
                    var e = b("cr:683059").getCurrentNavigationTrace();
                    e && (c.current = e.addMutationRoot(d))
                }
            }
        }, [])
    }
    g["default"] = a
}), 98);
__d("CometContextualLayer.react", ["BaseContextualLayer.react", "react", "useCometVisualChangeTracker", "useMergeRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        var d = c("useCometVisualChangeTracker")();
        b = c("useMergeRefs")(b, d);
        return h.jsx(c("BaseContextualLayer.react"), babelHelpers["extends"]({}, a, {
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("isPrimitive", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        switch (Object.prototype.toString.call(a)) {
            case "[object String]":
            case "[object Number]":
            case "[object Boolean]":
            case "[object Null]":
            case "[object Undefined]":
                return !0
        }
        return !1
    }
    f["default"] = a
}), 66);
__d("deepEquals", ["isPrimitive"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return function(b, c) {
                return l(b, a[c])
            }
        },
        i = function(a, b) {
            return function(c) {
                return c in a && c in b && l(a[c], b[c])
            }
        },
        j = function(a, b) {
            if (a.size !== b.size) return !1;
            b = new Set(b);
            for (var a = a.keys(), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                if (b.has(f)) b["delete"](f);
                else if (c("isPrimitive")(f)) return !1;
                else {
                    f = k(b, f);
                    if (f != null) b["delete"](f);
                    else return !1
                }
            }
            return b.size === 0
        };

    function k(a, b) {
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
            if (l(e, b)) return e
        }
        return null
    }

    function l(a, b) {
        if (a === b) return !0;
        if (c("isPrimitive")(a)) return !1;
        if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) return !1;
        if (Array.isArray(a)) return a.length === b.length && a.every(h(b));
        if (a instanceof Set) return j(a, b);
        var d = Object.keys(a);
        return d.length !== Object.keys(b).length ? !1 : d.every(i(a, b))
    }
    g["default"] = l
}), 98);
__d("MemoryUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {
        return window.performance && window.performance.memory
    }

    function a() {
        return window.performance && typeof window.performance.measureMemory === "function"
    }

    function b() {
        if (g()) {
            var a = window.performance.memory;
            return {
                usedJSHeapSize: a.usedJSHeapSize
            }
        }
        return {
            usedJSHeapSize: null
        }
    }
    f.isMemoryAPISupported = g;
    f.isMeasureMemoryOriginTrialSupported = a;
    f.getCurrentMemory = b
}), 66);
__d("QuickLogActionType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        START: 1,
        SUCCESS: 2,
        FAIL: 3,
        CANCEL: 4,
        DRAW_COMPLETE: 5,
        ON_RESUME: 6,
        ACTIVITY_CREATED: 7,
        CONSISTENCY_MODEL_UPDATER: 8,
        SEND_MESSAGE: 9,
        SUCCESS_COLD: 10,
        SUCCESS_WARM: 11,
        UI_IDLE: 12,
        PHASE_ONE: 13,
        PHASE_TWO: 14,
        DEQUEUE: 15,
        NETWORK_COMPLETE: 16,
        MEMORY_CACHE_VISIT: 17,
        DISK_CACHE_VISIT: 18,
        CONSISTENCY_UPDATE: 19,
        RETURN_TO_CALLER: 20,
        PHOTO_UPLOAD_COMPLETE: 21,
        USER_NAVIGATION_CANCELLATION: 22,
        DB_FETCH: 23,
        SERVER_FETCH: 24,
        SUCCESS_CACHE: 25,
        SUCCESS_DB: 26,
        SUCCESS_NETWORK: 27,
        SUCCESS_LOCAL_UNSPECIFIED: 28,
        CACHE_UPDATED: 29,
        DB_UPDATED: 30,
        DATA_RECEIVED: 31,
        DRAW_VIEW: 32,
        DATA_EMPTY: 33,
        CACHE_FETCH: 34,
        PREPARE_BEGIN: 35,
        PREPARE_END: 36,
        ASYNC_BEGIN: 37,
        ASYNC_END: 38,
        REMOVE_BEGIN: 39,
        REMOVE_END: 40,
        BROADCAST_DONE: 41,
        ON_RESUME_END: 42,
        ON_ATTACH_END: 43,
        ON_FRAGMENT_CREATE_END: 44,
        ON_CREATE_VIEW_END: 45,
        ON_ACTIVITY_CREATED_END: 46,
        ON_START_END: 47,
        QUEUED: 48,
        IN_PROGRESS: 49,
        INIT: 50,
        UNKNOWN: 51,
        RETRY_AFTER_FAILURE: 52,
        RETRY_AFTER_RECONNECT: 53,
        QUEUEING_BEGIN: 54,
        QUEUEING_SUCCESS: 55,
        QUEUEING_FAIL: 56,
        MESSAGE_UPDATE_START: 57,
        MESSAGE_UPDATE_END: 58,
        PHOTO_CAPTURED: 59,
        MEDIA_PREVIEW_VISIBLE: 60,
        COUNTER: 61,
        INTERACTION_LOAD_TIMELINE_HEADER: 62,
        INTERACTION_LOAD_EVENT_PERMALINK: 63,
        INTERACTION_LOAD_GROUPS_FEED: 64,
        INTERACTION_LOAD_PAGE_HEADER: 65,
        INTERACTION_LOAD_PAGE_HEADER_ADMIN: 66,
        INTERACTION_LOAD_PERMALINK: 67,
        INTERACTION_OPEN_COMPOSER: 68,
        INTERACTION_OPEN_MEDIA_PICKER: 69,
        INTERACTION_OPEN_PHOTO_GALLERY: 70,
        INTERACTION_OPEN_CHECK_IN: 71,
        INTERACTION_LOAD_WEB_VIEW: 72,
        INTENT_MAPPED: 73,
        ACTIVITY_LAUNCHED: 74,
        ACTIVITY_PAUSED: 75,
        ACTIVITY_STARTED: 76,
        ACTIVITY_RESUMED: 77,
        FRAGMENT_CREATED: 78,
        FRAGMENT_RESUMED: 79,
        ACTIVITY_ON_CREATE: 80,
        INTENT_MAPPING_BEGIN: 81,
        FRAGMENT_ON_CREATE: 82,
        FRAGMENT_NEW_INSTANCE: 83,
        MARKER_SWAPPED: 84,
        FRAGMENT_INSTANCE_CREATED: 85,
        PREV_ACTIVITY_PAUSED: 86,
        ERROR: 87,
        METHOD_INVOKE: 88,
        FINALLY: 89,
        PHOTO_DOWNLOAD_COMPLETE: 90,
        MINIPREVIEW_COMPLETE: 91,
        SEARCH_TYPEAHEAD: 92,
        ANIMATION_END: 93,
        UDP_REQUEST_SEND: 94,
        MAIN_COMPLETE: 95,
        INTERRUPTED: 96,
        NETWORK_FAILED: 97,
        NETWORK_RESPONSE: 98,
        EDGE_PROCESSING_BEGIN: 99,
        NEWSFEED_PROCESS_RESPONSE: 100,
        ON_VIEW_CREATED_END: 101,
        DATA_LOAD_START: 102,
        LEGACY_MARKER: 103,
        ACTION_BAR_COMPLETE: 104,
        ABORTED: 105,
        QUERY_READY: 106,
        RTMP_PACKET_RECEIVED: 107,
        REQUESTED_PLAYING: 108,
        RTMP_CONNECTION_REQUESTED: 109,
        RTMP_CONNECTION_RELEASE: 110,
        NEW_START_FOUND: 111,
        MISSED_EVENT: 112,
        TIMEOUT: 113,
        CONTROLLER_INITIATED: 114,
        RTMP_STREAM_PREPARED: 115,
        VIDEO_PLAYING: 116,
        RTMP_CONNECTION_CONNECTED: 117,
        RTMP_CONNECTION_FAILED: 118,
        RTMP_CONNECTION_INTERCEPTED: 119,
        VIDEO_SET_RENDERER_CONTEXT: 120,
        HEADER_DATA_LOADED: 121,
        CARD_DATA_LOADED: 122,
        VIEW_WILL_APPEAR_BEGIN: 123,
        VIEW_DID_LOAD_BEGIN: 124,
        COMPONENTS_DATA_SOURCE_WILL_BEGIN_UPDATES: 125,
        COMPONENTS_DATA_SOURCE_DID_END_UPDATES: 126,
        LOAD_VIEW_BEGIN: 127,
        RTMP_FIRST_KEY_FRAME_RECEIVED: 128,
        MESSENGER_QUEUE_CREATION: 129,
        APP_DID_FINISH_LAUNCHING: 130,
        APP_DID_BECOME_ACTIVE: 131,
        APP_WILL_ENTER_FOREGROUND: 132,
        APP_DID_ENTER_BACKGROUND: 133,
        APP_MAIN: 134,
        MQTT_CONNECTING: 135,
        MQTT_CONNECTED: 136,
        MQTT_DISCONNECTED: 137,
        MESSENGER_DELTA_REQUEST: 138,
        APP_FIRST_VIEW_CONTROLLER: 139,
        MESSENGER_THREAD_LIST_LOADED: 140,
        MESSENGER_THREAD_LIST_DISPLAYED: 141,
        PREV_ACTIVITY_PAUSE: 142,
        ACTIVITY_RESUME: 143,
        ACTIVITY_START: 144,
        BEGIN_START_ACTIVITY: 145,
        END_START_ACTIVITY: 146,
        FILE_SYSTEM_FAIL: 147,
        FORMAT_ERROR: 148,
        PRIVACY_VIOLATION: 149,
        NETWORK_RESPONSE_INITIAL_SCAN: 150,
        POPULATE_CONSISTENCY_MEMORY_CACHE: 151,
        APPLY_OPTIMISTICS: 152,
        APPLY_FINISHED_LIST: 153,
        APPLY_FINISHED_LIST_AGAIN: 154,
        FUTURE_LISTENERS_COMPLETE: 155,
        SERVICE_ON_START_COMMAND: 156,
        WAIT_FOR_BLOCKERS: 157,
        NOTIFY_SUBSCRIBERS: 158,
        FAIL_FILE_TOO_LARGE: 159,
        OFFLINE: 160,
        ASNYC_FAILED: 161,
        ASYNC_FAIL: 162,
        ON_ATTACH_FRAGMENT: 163,
        VIEW_DID_APPEAR_BEGIN: 164,
        DISPLAYED: 165,
        DISPLAYED_ON_SCREEN: 166,
        ASYNC_ACTION_SUCCESS: 167,
        ASYNC_ACTION_FAIL: 168,
        CONNECTIVITY_CHANGED: 169,
        VIDEO_DISPLAYED: 170,
        VIDEO_REQUESTED_PLAYING: 171,
        LOADED_AUDIO_SESSION: 172,
        LOADED_CAMERA_SESSION: 173,
        SUCCESS_OPTIMISTIC: 174,
        OUT_OF_ORDER: 175,
        NOT_READY: 176,
        JSON_PARSE: 177,
        FILE_NOT_FOUND: 178,
        METABOX_COMPLETE: 179,
        CALL_TO_ACTION_COMPLETE: 180,
        HEADER_DRAW_COMPLETE: 181,
        COVER_PHOTO_COMPLETE: 182,
        COMPONENT_WILL_CREATE: 183,
        COMPONENT_DID_CREATE: 184,
        COMPONENT_WILL_LAYOUT: 185,
        COMPONENT_DID_LAYOUT: 186,
        COMPONENT_WILL_MOUNT: 187,
        COMPONENT_DID_MOUNT: 188,
        PRECALCULATE_EDGES: 189,
        UI_THREAD_DEQUEUE: 190,
        CALLBACKS_COMPLETE: 191,
        CALLBACKS_DISPATCHED: 192,
        NETWORK_PARSE_COMPLETE: 193,
        START_LOADING_JS_BUNDLE: 194,
        FINISH_LOADING_JS_BUNDLE: 195,
        START_EXECUTING_JS_BUNDLE: 196,
        FINISH_EXECUTING_JS_BUNDLE: 197,
        START_CALLING_JS_FUNCTION: 198,
        FINISH_CALLING_JS_FUNCTION: 199,
        CREATED_MODEL_FILE: 200,
        DB_SUPPLIER_GET: 201,
        BEGIN_TRANSACTION: 202,
        FILE_FLUSHED: 203,
        OPTIMISTIC_UPDATES_APPLIED: 204,
        FRAGMENT_VISIBLE: 205,
        STALE: 206,
        SUCCESS_GET_MODEL: 207,
        FAIL_GET_MODEL: 208,
        ALREADY_SEEN: 209,
        UNKNOWN_SEEN_STATE: 210,
        CREATED_INTENT: 211,
        INVALID_INTENT: 212,
        SHOW_NOTIFICATION: 213,
        SUCCESS_FETCH_IMAGE: 214,
        FAIL_FETCH_IMAGE: 215,
        DROPPED: 216,
        QUERY_CHUNKS: 217,
        QUERY_ROWS: 218,
        COMPUTE_CHUNKS: 219,
        SCROLL_COMPLETE: 220,
        USE_INSTANCE_STATE: 221,
        USE_ARGUMENTS: 222,
        OFFSCREEN: 223,
        LOG_READ: 224,
        LOG_COMPACTED: 225,
        LOG_WRITER_OPENED: 226,
        TAB_SWITCH: 227,
        EXIT_VIEW_CONTROLLER: 228,
        TAGS_PREPARED: 229,
        VIEW_DID_APPEAR: 230,
        MEDIA_TOO_SMALL: 231,
        ITEM_SELECTED: 232,
        REPOSITIONED: 233,
        PHOTO_UPLOAD_START: 234,
        MEDIA_EDIT: 235,
        MEDIA_EDIT_COMPLETE: 236,
        VIDEO_PAUSE: 237,
        VIDEO_COMPLETE: 238,
        VIDEO_PLAYING_TIMEOUT: 239,
        VIDEO_PLAYING_QPL_TIMEOUT: 240,
        SESSION_OPEN: 241,
        SCHEMA_HASH_MISMATCH: 242,
        OVERRIDES_EXIST: 243,
        DI_DONE: 244,
        FLATBUFFER_SCHEMA_ABSENT: 245,
        SUCCESS_NONEXISTENCE: 246,
        VIDEO_CANCELLED: 247,
        MESSENGER_QUEUE_CREATION_FAILURE: 248,
        MESSENGER_DELTA_REQUEST_FAILURE: 249,
        RETURN_EXCEPTION_TO_CALLER: 250,
        SURFACE_TEXTURE_AVAILABLE: 251,
        NEWS_FEED_FRAGMENT: 252,
        HEADER_CACHE_FETCH_STARTED: 253,
        CHANGESET_ENQUEUED: 258,
        RTC_BROADCAST_INITIALIZED: 259,
        RTC_STREAMING_INITIALIZED: 260,
        RTC_STREAMING_STARTED: 261,
        CAMERA_VIDEO_OUTPUT_SWITCHED: 262,
        RTMP_STREAM_STOPPED: 263,
        LOCATION_FETCH_BEGIN: 264,
        LOCATION_FETCH_SUCCESS: 265,
        LOCATION_FETCH_FAILED: 266,
        FIRST_UPDATE_SUCCESS: 267,
        FIRST_UPDATE_FAILURE: 268,
        RTMP_STREAMING_HANDLED_FRAME: 269,
        RTMP_DVR_HANDLED_FRAME: 274,
        LIVE_RTMP_STREAMING_HANDLED_FRAME: 275,
        LIVE_RTMP_DVR_HANDLED_FRAME: 276,
        PASS_QE_CHECK: 277,
        PASS_AD_CHECK: 278,
        PASS_SAMPLE_RATE_CHECK: 279,
        HAS_VALID_HTML: 280,
        FOUND_IMAGES: 281,
        TIGON_REQUEST_BEGIN: 282,
        TIGON_REQUEST_END: 283,
        TIGON_RESPONSE_BEGIN: 284,
        TIGON_RESPONSE_END: 285,
        TIGON_PARSE_BEGIN: 286,
        TIGON_PARSE_END: 287,
        GRAPHQL_CACHE_FETCH_START: 288,
        GRAPHQL_CACHE_FETCH_END: 289,
        VIDEO_START_STALL: 290,
        VIDEO_END_STALL: 291,
        MERGE_LOCAL_FIELDS: 292,
        LOAD_QUERY_STRING: 293,
        CONFIG_TABLE_SCHEMA_HASH_MISMATCH: 294,
        CONFIG_TABLE_SCHEMA_ABSENT: 295,
        CONFIG_TABLE_MAGIC_MISMATCH: 296,
        OBJSEL_FETCH: 297,
        GO_TO_AD_ACTIVITY: 298,
        SAVE_AD: 299,
        UNSAVE_AD: 300,
        SAVE_MODE: 301,
        GO_AD_ACTIVITY_MODE: 302,
        ACCESSIBILITY_ACTIVATE: 303,
        ACCESSIBILITY_CUSTOM: 304,
        ACCESSIBILITY_MAGIC_TAP: 305,
        FINAL_IMAGE_SET: 306,
        INTERMEDIATE_IMAGE_SET: 307,
        INTERMEDIATE_IMAGE_FAIL: 308,
        INTERMEDIATE_IMAGE_GOOD_ENOUGH_SET: 309,
        APP_BACKGROUND: 310,
        APP_FOREGROUND: 311,
        RECEIVED_HARDWARE_FRAME: 312,
        CAMERA_COMPONENT_MOUNTED: 313,
        MQTT_CONNECTION_ATTEMPTED: 314,
        DELTA_APPLICATION_COMPLETED: 325,
        DELTAS_RECEIVED_AFTER_CONNECT: 326,
        MESSENGER_DAY_UNIT_DISPLAYED: 327,
        DATA_LOAD_END: 328,
        VIEW_DID_BECOME_VISIBLE: 329,
        DELTA_APPLICATION_INTERRUPTED: 330,
        DELTA_BATCH_APPLICATION_COMPLETED: 331,
        MESSAGE_LIST_DID_UPDATE: 332,
        MESSAGE_LIST_WILL_UPDATE: 333,
        SUCCESS_ZERO_WAIT_TIME: 334,
        USER_SCROLLED: 335,
        SPINNER_APPEARED: 336,
        MODEL_ENQUEUED: 337,
        VIEW_MODEL_APPLIED: 338,
        PRESENTED: 339,
        VIEW_DID_BECOME_VISIBLE_END: 340,
        MESSENGER_DELTA_REQUEST_INIT: 341,
        FEED_REQUEST_STARTED: 342,
        FEED_REQUEST_FAILED: 343,
        FEED_REQUEST_SUCCEEDED: 344,
        FEED_LOAD_FROM_DISK_FINISHED: 345,
        STORIES_REQUEST_STARTED: 346,
        STORIES_REQUEST_FAILED: 392,
        STORIES_REQUEST_SUCCEEDED: 393,
        STORIES_LOAD_FROM_DISK_FINISHED: 394,
        USER_INFO_LOADED: 395,
        APP_CREATED: 396,
        INIT_TO_USABLE: 397,
        INIT_TO_NETWORK_CONTENT: 398,
        TOTAL: 399,
        HEAD: 400,
        TAIL: 401,
        INITIAL: 402,
        OTHER: 403,
        ANR_START_DATA_CAPTURE: 404,
        ANR_ENQUEUE: 405,
        NOTIF_NOT_ALERTED: 406,
        NOTIF_DUPLICATE: 407,
        NOTIF_MUTED: 408,
        NOTIF_BUZZED: 409,
        FEED_RESPONSE_PROCESSED: 410,
        STORIES_RESPONSE_PROCESSED: 411,
        APP_DID_FINISH_LAUNCHING_ENDED: 412,
        ASYNC_BEGIN_DB: 413,
        DELTA_APPLICATION_STARTED: 414,
        ASYNC_SUCCESS_DB: 415,
        ASYNC_FAIL_DB: 416,
        ASYNC_BEGIN_SERVER: 417,
        ASYNC_SUCCESS_SERVER: 418,
        ASYNC_FAIL_SERVER: 419,
        LEAVE: 420,
        ASYNC_SUCCESS_DB_NO_DATA: 429,
        ASYNC_FAIL_SERVER_NO_DATA: 430,
        SUCCESS_MEMORY: 431,
        SUCCESS_SERVER: 432,
        FAIL_NO_DATA: 433,
        ACTIVITY_NEW_INTENT: 434,
        GRID_MEDIA_LOADED: 435,
        STORY_TRAY_MEDIA_LOADED: 436,
        INTERACTION_OPEN_QRCODE_SCANNER: 437,
        MEDIA_LOAD_CACHE: 438,
        MEDIA_LOAD_NETWORK: 439,
        COMMENTS_LOAD_START: 440,
        COMMENTS_LOAD_COMPLETE: 441,
        MEDIA_LOAD_START: 442,
        SCROLL_START: 443,
        QRCODE_SCANNER_SCAN_SUCCESS: 444,
        QRCODE_SCANNER_SCAN_FAILURE: 445,
        APP_CREATED_MAIN_PROCESS: 446,
        FINISH_REGISTERING_JS_NATIVE_MODULES: 447,
        NON_ANR: 448,
        FINISH_INITIALIZING_JS_BRIDGE: 449,
        FINISH_INJECTING_JS_HOOKS: 450,
        FINISH_RUNNING_JS_INITIALIZER: 451,
        UI_RESPONSIVE: 452,
        PHASE_ONE_COMPLETE: 453,
        PHASE_TWO_COMPLETE: 454,
        LS_HEADER_START: 455,
        LS_HEADER_LOAD: 456,
        LS_BODY_START: 457,
        LS_BODY_LOAD: 458,
        APP_ONCREATE: 459,
        START_FETCH_IMAGE: 460,
        LOGGED_OUT: 461,
        LS_HEADER_LAYOUT_SUCCESS: 462,
        STARTED_CAPTURE_SESSION: 463,
        CAMERA_VIEW_READY: 464,
        CAMERA_FIRST_FRAME: 465,
        PHOTO_BITMAP_READY: 466,
        END: 467,
        FRAME_RENDERED: 468,
        LS_MAP_LIST_START: 469,
        LS_MAP_LIST_LOADED: 470,
        LS_MAP_LIST_SUCCESS: 471,
        FETCH_THREAD_STARTED: 472,
        FETCH_THREAD_SUCCEEDED: 473,
        FETCH_THREAD_FAILED: 474,
        STRUCTURE_FETCH_COMPLETE: 475,
        FOLLOWED_SHOWS_FETCHED: 476,
        ABANDONED: 477,
        ENTERED: 478,
        LS_FILTER_START: 479,
        LS_FILTER_LOAD: 480,
        LS_FILTER_SUCCESS: 481,
        LS_SEARCH_RESULT_START: 482,
        LS_SEARCH_RESULT_LOAD: 483,
        NETWORK_PARSE_START: 484,
        NETWORK_REQUEST_SENT: 485,
        COMPONENT_DATA_MODEL_UPDATE_START: 486,
        COMPONENT_DATA_MODEL_UPDATE_COMPLETE: 487,
        HIGH_RES_PHOTO_FILE_READY: 488,
        NATIVE_PHOTO_BITMAP_READY: 489,
        REEL_JSON_RECEIVED: 490,
        REEL_MEDIA_RECEIVED: 491,
        STORY_VIEWER_APPEAR: 492,
        FETCH_INBOX_STARTED: 493,
        FETCH_INBOX_SUCCEEDED: 494,
        FETCH_INBOX_FAILED: 495,
        REQUEST_ADDED: 496,
        INIT_QE_START: 497,
        INIT_QE_END: 498,
        MULTIDEX_INSTALLED: 499,
        PREPARE_CAMERA_SESSION: 500,
        START_CAMERA_SESSION: 501,
        DID_START_CAMERA_SESSION: 502,
        FIRST_HARDWARE_FRAME: 503,
        START_RENDERING_FIRST_USER_FRAME: 504,
        FIRST_MEDIA_RENDERED: 505,
        FIRST_CACHED_MEDIA_RENDERED: 506,
        CAMERA_INITIALIZED: 507,
        HTTP_TRANSACTION_STARTED: 508,
        REMOTE_PROCESS: 509,
        PRE_REQUEST_SEND_CALLED: 510,
        BRIDGE_STARTUP_WILL_START: 511,
        BRIDGE_STARTUP_DID_FINISH: 512,
        COVER_PHOTO_LOW_RES: 513,
        COVER_PHOTO_HIGH_RES: 514,
        PROFILE_PIC_LOW_RES: 515,
        PROFILE_PIC_HIGH_RES: 516,
        CONTEXT_ITEMS: 517,
        MEDIA_LOADED: 518,
        STATE_UPDATE: 519,
        ON_SHOW_LOGIN: 520,
        EMPTY_REQUEST: 521,
        METERED_CONNECTION: 522,
        VIDEO_DOWNSTREAM_FORMAT_CHANGED: 523,
        DISABLED: 524,
        NO_METADATA: 525,
        INCOMPLETE_METADATA: 526,
        PHOTO_CAPTURE_READY: 527,
        CAMERA_START_READY: 528,
        DELAY_START: 529,
        DELAY_STOP: 530,
        RANK_START: 531,
        RANK_STOP: 532,
        DB_WRITE_START: 533,
        DB_WRITE_STOP: 534,
        ADD_STORY_TO_UI: 535,
        WEBVIEW_URI_REDIRECTOR_CONSTRUCTION: 536,
        UNINTERRUPTED: 537,
        VIDEO_TOGGLE_FULL_SCREEN: 538,
        CONFIGURE_START: 539,
        CONFIGURE_END: 540,
        BROWSER_OPEN: 541,
        FIRST_DATA_RECEIVED: 542,
        RVP_WILL_LOAD: 543,
        RVP_DID_LOAD: 544,
        CACHE_WRITE_START: 545,
        CACHE_WRITE_SUCCESS: 546,
        CACHE_WRITE_FAIL: 547,
        RVP_WILL_PAUSE: 548,
        RVP_DID_PAUSE: 549,
        RVP_WILL_PLAY: 550,
        RVP_DID_PLAY: 551,
        RVP_WILL_PREPARE: 552,
        RVP_DID_PREPARE: 553,
        RVP_WILL_RELOAD: 554,
        RVP_DID_RELOAD: 555,
        RVP_WILL_CREATE: 556,
        RVP_DID_CREATE: 557,
        RVP_WILL_FINISH_INFLATE: 558,
        RVP_DID_FINISH_INFLATE: 559,
        RVP_WILL_MOUNT: 560,
        RVP_DID_MOUNT: 561,
        START_COMPRESSING_MESSAGE: 562,
        MESSAGE_COMPRESSED: 563,
        START_DECOMPRESSING_MESSAGE: 564,
        MESSAGE_DECOMPRESSED: 565,
        START_SENDING_MESSAGE: 566,
        CAMERA_PREVIEW_FROZEN: 567,
        VC_INIT_START: 569,
        VC_INIT_BEGIN: 570,
        VC_INIT_END: 571,
        VC_VIEW_DID_LOAD_BEGIN: 572,
        VC_VIEW_DID_LOAD_END: 573,
        ROOT_QUERY_START: 574,
        ROOT_QUERY_SUCCESS: 575,
        ROOT_QUERY_FAIL: 576,
        CACHE_INITIALIZED: 577,
        FETCH_BEGIN: 578,
        FETCH_FINISHED: 579,
        PARSING_FINISHED: 580,
        LOAD_VIEW_END: 581,
        LOAD_URL_BEGIN: 582,
        LOAD_URL_END: 583,
        SHOULD_LOAD_URL_BEGIN: 598,
        SHOULD_LOAD_URL_END: 599,
        BLOCKING_RESOURCES_LOADED: 600,
        WEB_PAGE_LOADED: 601,
        JS_TEARDOWN: 603,
        JS_SETUP: 604,
        PREP_STATE: 605,
        PREP_FORMS: 606,
        RUN_FUNCTION: 610,
        LOAD_MODULES: 613,
        VIDEO_READY_TO_PLAY: 614,
        CANCEL_NAVIGATION: 615,
        BEGIN_HANDLE_EVENT: 626,
        END_HANDLE_EVENT: 627,
        BEGIN_PROCESS_EVENT: 628,
        END_PROCESS_EVENT: 629,
        CANCEL_BACKGROUND: 630,
        SC_TRACKER_SETUP_BEGIN: 631,
        SC_TRACKER_SETUP_END: 632,
        PROFILE_TOOLBOX_SETUP_BEGIN: 633,
        PROFILE_TOOLBOX_SETUP_END: 634,
        FEED_TOOLBOX_SETUP_BEGIN: 635,
        FEED_TOOLBOX_SETUP_END: 636,
        SCREEN_PART_RECEIVED: 637,
        RVP_DID_FAIL_AUTOPLAY: 638,
        VIEW_WILL_APPEAR_END: 639,
        VIDEO_RENDERED: 640,
        VIEW_DID_APPEAR_END: 641,
        SHARE_FLOW_LOADED: 642,
        START_DOWNLOAD_FACE_DETECTION_EFFECT: 643,
        APPLY_FACE_DETECTION_EFFECT: 644,
        INTERACTION_SWIPE_UP: 645,
        LOOM_PROVIDER_FAILURE: 646,
        ADS_SELECT_POST_VIEW: 647,
        ADS_SELECT_IMAGE_VIEW: 648,
        ADS_SELECT_BUDGET_VIEW: 649,
        ADS_SELECT_AUDIENCE_VIEW: 650,
        ADS_SELECT_CREATIVE_VIEW: 651,
        VIDEO_FETCH_REQUEST_START: 652,
        VIDEO_FETCH_REQUEST_RECEIVED: 653,
        VIDEO_FETCH_REQUEST_ENTER_NETWORK_QUEUE: 654,
        VIDEO_FETCH_REQUEST_NETWORK_REQUEST_START: 655,
        VIDEO_FETCH_REQUEST_NETWORK_RESPONSE_RECEIVED: 656,
        VIDEO_FETCH_REQUEST_NETWORK_FIRST_BYTE_ARRIVED: 657,
        VIDEO_FETCH_REQUEST_NETWORK_TRANSFER_COMPLETE: 658,
        VIDEO_FETCH_REQUEST_SATISFIED_BY_CACHE: 659,
        VIDEO_FETCH_REQUEST_COMPLETE: 660,
        VIDEO_FETCH_REQUEST_CACHE_CHECK_START: 661,
        VIDEO_FETCH_REQUEST_CACHE_CHECK_END: 662,
        VIDEO_FETCH_REQUEST_DID_ATTACH_TO_NETWORK_REQUEST: 663,
        SELECT_PHOTOS_FAILED_SCORE: 664,
        SELECT_PHOTOS_FAILED_TIMESTAMP: 665,
        INTERACTION_CLICK: 666,
        VIDEO_SCRUBBER_FIRST_THUMBNAIL_SHOWN: 667,
        VIDEO_SCRUBBER_THUMBNAIL_SHOWN: 668,
        COLD_START_BEGIN: 669,
        COLD_START_END: 670,
        COLD_START_LOAD_APP_JS: 671,
        COLD_START_QUERY_SEND: 672,
        COLD_START_APP_SHELL_COMPONENT_DID_MOUNT: 673,
        VIDEO_RECORDING_START_CALLED: 674,
        VIDEO_RECORDING_STOP_CALLED: 675,
        WIKTORK_TEST: 676,
        WIKTORK_TEST_TWO: 677,
        ON_VIDEO_RECORDING_FINISHED: 678,
        MEASURE_IMAGE: 679,
        PDP_RENDER_LOADING: 680,
        PDP_RENDER_FETCHED: 681,
        VIDEO_FETCH_REQUEST_FAILED: 682,
        LOGIN_FLOW_STARTED: 683,
        LOGIN_FLOW_COMPLETED: 684,
        VIDEO_DOWNLOAD_STARTED: 685,
        VIDEO_DOWNLOAD_READY_TO_PLAY: 686,
        VIDEO_DOWNLOAD_FAILED: 687,
        FBLITE_SCREEN_RECEIVED: 688,
        FBLITE_SERVER_START: 689,
        FBLITE_SERVER_END: 690,
        FBLITE_INCOMPLETE: 691,
        BACKGROUND_THREAD: 692,
        MAIN_THREAD: 693,
        BWE_ESTIMATE_COMPLETE: 694,
        WIKTORK_TEST_THREE: 695,
        FBLITE_UNEXPECTED: 696,
        THREAD_ASYNC_BEGIN_SERVER: 697,
        THREAD_ASYNC_SUCCESS_SERVER: 698,
        CARD_ASYNC_BEGIN_SERVER: 699,
        CARD_ASYNC_SUCCESS_SERVER: 700,
        FBLITE_INSTANT_TRANSITION_FAILED: 701,
        BB_TRACE_REQUESTED: 702,
        CANCEL_PSP: 703,
        AGGREGATED: 704,
        UNINSTRUMENTED: 705,
        CANCEL_UNLOAD: 706,
        DOWNLOAD_FAILED: 707,
        UNZIP_FAILED: 708,
        NO_ACTIVE_TRACE: 709,
        LOOM_MMAP_TRACE_NOT_RECOVERED: 710,
        PLUGIN_LOAD_END: 711,
        UNPACKER_CHECK_START: 712,
        PLUGIN_LOAD_START: 713,
        UNPACKER_CHECK_END: 714,
        UNPACKING_END: 715,
        CREATE_UI_MANAGER_MODULE_START: 716,
        CREATE_UI_MANAGER_MODULE_END: 717,
        TEST_NUBBEL: 718,
        CONDITION_NOT_MET: 719,
        FAIL_FALSE_POSITIVE: 720,
        FAIL_FALSE_NEGATIVE: 721,
        APP_CRASH: 722,
        TEST_GINDI: 723,
        TTTT: 724,
        BUG_BASH_ACTION: 725,
        BUG_BASH_TEST: 726,
        INIT_MOBILE_CONFIG: 727,
        SUCCESS_WITH_VC_DISABLED: 1008,
        DELETE_RECORD: 1115,
        NORMAL_SEARCH_LEAVE: 1171,
        UPLOAD_FILE_CANCELLED: 1428,
        SAVE_RECORD: 1492,
        APP_EXIT: 2001,
        CREATE_ATTACHMENT: 2266,
        NEW_RECORD_FAILED: 2394,
        TOGGLE_MODE: 3077,
        SKIP: 3376,
        ACQUIRED: 3377,
        SAVE_RECORD_CANCELLED: 3563,
        SUCCESS_PYTORCH: 3653,
        INITIAL_LOAD: 3921,
        NAVIGATION: 3922,
        CREATE_ATTACHMENT_FAILED: 3955,
        INVALID: 4158,
        CANCEL_ACCOUNT_SWITCH: 4340,
        DISPLAY_RECORD_FAILED: 6050,
        SAVE_RECORD_FAILED: 6087,
        SET_SOURCE: 6596,
        FRX_FLOW_END: 6646,
        NORMAL_SEARCH: 7381,
        EDIT_RECORD: 7420,
        CREATE_ATTACHMENT_SUCCEEDED: 7618,
        FAIL_VALIDATION: 7952,
        LIGHT_MODE_ENABLED: 8101,
        OPEN_ATTACHMENT_SUCCEEDED: 8213,
        UPLOAD_FILE_SUCCEEDED: 8511,
        GENERATE_SHAREABLE_LINK: 8759,
        SAVE_RECORD_SUCCEEDED: 8902,
        NEW_RECORD_SUCCEEDED: 9099,
        DELETE_RECORD_FAILED: 9234,
        UPLOAD_FILE: 9473,
        DISPLAY: 10283,
        INVALID_END_MISSING_START: 10294,
        SET_SEARCH_KEYWORD_SUCCEEDED: 10326,
        SET_REGION_SUCCEEDED: 10609,
        NEW_RECORD: 10618,
        NEW_RECORD_CANCELLED: 11146,
        TELEMETRY_UNEXPECTED_EVENT: 11289,
        TOGGLE_SEARCH: 11313,
        QPL_END_TO_END: 11445,
        SET_SEARCH_KEYWORD: 11787,
        SET_POWER_SEARCH_FIELD_SUCCEEDED: 11893,
        PROMOTE_AUTH_BUAT_ELIGIBLITY_START: 11927,
        PROMOTE_AUTH_BUAT_ELIGIBLE: 11928,
        PROMOTE_AUTH_BUAT_NOT_ELIGIBLE: 11929,
        PROMOTE_AUTH_FB_ELIGIBLITY_START: 11930,
        PROMOTE_AUTH_BUAT_FETCH_SUCCESS: 11931,
        PROMOTE_AUTH_BUAT_FETCH_FAIL: 11932,
        PROMOTE_AUTH_FB_VALID_THIRD_PARTY_TOKEN_FETCHED: 11933,
        PROMOTE_AUTH_FB_LOGIN_START: 11934,
        PROMOTE_AUTH_FB_LOGIN_SUCCESS: 11935,
        PROMOTE_AUTH_FB_LOGIN_FAIL: 11936,
        PROMOTE_AUTH_SUCCESS: 11937,
        PROMOTE_AUTH_FAIL: 11938,
        SUCCESS_CACHE_NOT_MODIFIED: 11947,
        OPEN__ATTACHMENT: 12040,
        DELETE_RECORD_CONFIRMED: 12147,
        DARK_MODE_ENABLED: 12223,
        DISPLAY_RECORD: 12456,
        DUMMY: 12524,
        SET_SOURCE_SUCCEEDED: 12560,
        PERMISSION_DIALOG_SHOWN: 13061,
        NO_EMAIL_FETCHED: 13062,
        HAVE_EXACTLY_ONE_GMAIL: 13063,
        NUMBER_OF_GMAILS: 13064,
        HAVE_ONE_GMAIL_MATCHED_CP: 13065,
        NO_GMAIL_MATCHED: 13066,
        OAUTH_DIALOG_SHOWN: 13067,
        OAUTH_DIALOG_ACCEPT: 13068,
        OAUTH_DIALOG_DENY: 13069,
        OAUTH_TOKEN_FETCHED: 13070,
        OAUTH_TOKEN_FAILURE: 13071,
        OAUTH_SUCCESS: 13072,
        OAUTH_FAIL_TIMEOUT: 13073,
        OAUTH_FAIL_OTHER: 13074,
        SUCCESS_NOTPRESENTED: 13170,
        REMOVE_ATTACHMENT_CANCELLED: 13176,
        DISPLAY_RECORD_SUCCEEDED: 13246,
        DARK_MODE: 13325,
        SET_REGION: 13504,
        POWER_SEARCH_LEAVE: 13551,
        UPLOAD_FILE_FAILED: 13557,
        LIGHT_MODE: 13744,
        REMOVE_ATTACHMENT: 13825,
        OPEN_ATTACHMENT_FAILED: 14290,
        TOGGELE_SEARCH: 14341,
        POWER_SEARCH: 14472,
        REMOVE_ATTACHMENT_SUCCEEDED: 14513,
        POWER_SEARCH_ENTERED: 14634,
        GENERATE_SHAREABLE_LINK_FAILED: 14817,
        REMOVE_ATTACHMENT_FAILED: 15262,
        SET_POWER_SEARCH_FIELD: 15268,
        GENERATE_SHAREABLE_LINK_SUCCEEDED: 15431,
        DELETE_RECORD_SUCCEEDED: 15465,
        IG_PROMOTE_DEFAULT_AD_ACCOUNT_NULL: 15469,
        IG_PROMOTE_DEFAULT_AD_ACCOUNT_NON_NULL: 15470,
        DISPLAY_RECORD_COLLAPSED: 15554,
        OPEN_ATTACHMENT: 15957,
        NORMAL_SEARCH_ENTERED: 15969,
        REMOVE_ATTACHMENT_CONFIRMED: 16034,
        DELETE_RECORD_CANCELLED: 16296,
        TEST_ACTION_FOR_CALLER_CONTEXT_TWO: 29998,
        GINANDI_TEST: 32339
    });
    f["default"] = a
}), 66);
__d("ImageDownloadTracker", ["NetworkStatus", "Promise", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 2,
        i = 250;

    function a(a, d) {
        var e = 0,
            f;
        return new(b("Promise"))(function(b, g) {
            function j() {
                var f = new Image();
                f.onload = function() {
                    c("NetworkStatus").reportSuccess(), b()
                };
                f.onerror = function() {
                    var a = e <= h;
                    a ? c("setTimeout")(j, i) : (c("NetworkStatus").reportError(), g())
                };
                e++;
                d();
                f.src = a
            }
            c("NetworkStatus").isOnline() ? j() : f = c("NetworkStatus").onChange(function(a) {
                a = a.online;
                a && (j(), f.remove())
            })
        })
    }
    g["default"] = a
}), 98);
__d("vc-tracker", ["ImageDownloadTracker", "VisualCompletionUtil", "performance", "performanceAbsoluteNow", "performanceNavigationStart", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = document.visibilityState !== void 0 || document.hidden !== void 0;

    function k() {
        if (j) return document.visibilityState !== void 0 ? document.visibilityState === "hidden" : document.hidden;
        else return !1
    }
    var l = 1e3,
        m = [],
        n = null;
    d = !1;
    var o = new Set();
    d || (k() && (n = 0), d = !0);
    j && document.addEventListener("visibilitychange", function(a) {
        var c = (a = a === null || a === void 0 ? void 0 : a.timeStamp) !== null && a !== void 0 ? a : (g || (g = b("performanceNow")))();
        p(c, k());
        o.forEach(function(a) {
            a(c, k())
        })
    });

    function p(a, b) {
        b ? n = a : n != null && (m.push({
            start: n,
            end: a
        }), m.length > l && m.shift(), n = null)
    }

    function a(a) {
        o.add(a);
        return function() {
            o["delete"](a)
        }
    }

    function q(a, c) {
        var d = [];
        m.concat(n != null ? [{
            start: n,
            end: (g || (g = b("performanceNow")))()
        }] : []).forEach(function(b) {
            b.start <= a && b.end > a ? b.end <= c ? d.push({
                start: a,
                end: b.end
            }) : d.push({
                start: a,
                end: c
            }) : b.start > a && b.start <= c && (b.end <= c ? d.push({
                start: b.start,
                end: b.end
            }) : d.push({
                start: b.start,
                end: c
            }))
        });
        return d
    }

    function r(a, b) {
        var c = 0;
        a = q(a, b);
        a.forEach(function(a) {
            c += a.end - a.start
        });
        return c
    }

    function s(a, b) {
        a = r(a, b);
        return a > 0
    }
    var t = {
        ATTRIBUTE_NAME: "data-visualcompletion",
        HERO_TRACING_HOLD: "HeroTracing",
        HERO_LATE_PLACEHOLDER_DETECTION: "HeroLatePlaceholderDetection",
        INTERACTION_TRACING_HOLD: "InteractionTracing",
        IGNORE: "ignore",
        IGNORE_DYNAMIC: "ignore-dynamic",
        IGNORE_LATE_MUTATION: "ignore-late-mutation",
        LOADING_STATE: "loading-state",
        MEDIA_VC_IMAGE: "media-vc-image",
        CSS_IMG: "css-img"
    };
    f = t.ATTRIBUTE_NAME;
    f = {
        IGNORE: (d = {}, d[f] = t.IGNORE, d),
        IGNORE_DYNAMIC: (d = {}, d[f] = t.IGNORE_DYNAMIC, d),
        IGNORE_LATE_MUTATION: (d = {}, d[f] = t.IGNORE_LATE_MUTATION, d),
        LOADING_STATE: (d = {}, d[f] = t.LOADING_STATE, d),
        MEDIA_VC_IMAGE: (d = {}, d[f] = t.MEDIA_VC_IMAGE, d),
        CSS_IMG: (d = {}, d[f] = t.CSS_IMG, d)
    };
    var u = [],
        v = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? window.IntersectionObserver : null;

    function w(a) {
        return a.isIntersecting != null ? a.isIntersecting : a.intersectionRatio > 0 || a.intersectionRect && (a.intersectionRect.height > 0 || a.intersectionRect.width > 0)
    }
    v == null && u.push("IntersectionObserver");
    var x = window.MutationObserver || window.WebKitMutationObserver;
    x == null && u.push("MutationObserver");
    j || u.push("VisibilityAPI");
    d = window.requestAnimationFrame;
    d == null && u.push("requestAnimationFrame");
    d == null && u.push("cancelAnimationFrame");
    var y = !1,
        z = !1;

    function A() {
        y || (typeof((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (h || (h = b("performance"))).getEntriesByName) !== "function" || typeof((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (h || (h = b("performance"))).getEntriesByType) !== "function" ? (z = !1, y = !0) : (h || (h = b("performance"))).getEntriesByType("resource").length > 0 && (z = !0, y = !0));
        return z
    }

    function B(a) {
        if (typeof(h || (h = b("performance"))).getEntriesByName !== "function") return null;
        var c = (h || (h = b("performance"))).getEntriesByName(a);
        c.length === 0 && a.indexOf("#") >= 0 && (c = (h || (h = b("performance"))).getEntriesByName(a.split("#")[0]));
        return c && c[0]
    }

    function C(a) {
        var b = a.indexOf("?");
        return b === -1 ? a : a.substring(0, b)
    }

    function D(a, b) {
        b = b.substring(b.lastIndexOf(".") + 1);
        if (b === "js" || b === "css") return b;
        else if (a === "css") return "cssImg";
        else return a
    }

    function E() {
        return {
            css: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            },
            cssImg: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            },
            img: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            },
            js: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            }
        }
    }

    function F(a, c) {
        if (typeof(h || (h = b("performance"))).getEntriesByType !== "function") return new Map();
        var d = E(),
            e = (h || (h = b("performance"))).getEntriesByType("resource").filter(function(b) {
                return b.startTime >= a && b.startTime <= c
            }).map(function(a) {
                return {
                    encodedBodySize: a.encodedBodySize,
                    transferSize: a.transferSize,
                    type: D(a.initiatorType, C(a.name))
                }
            }).filter(function(a) {
                return d[a.type]
            });
        e.forEach(function(a) {
            var b = d[a.type];
            b.encodedBodySize += a.encodedBodySize;
            b.transferSize += a.transferSize;
            b.totalCount++;
            a.transferSize === 0 && b.cacheCount++
        });
        e = new Map();
        for (var f in d) {
            var g = d[f];
            for (var i in g) e.set(f + "_" + i, g[i])
        }
        return e
    }
    var G = [],
        H = [],
        I = {
            subscribe: function(a) {
                G.push(a)
            },
            subscribeStart: function(a) {
                H.push(a)
            },
            unsubscribe: function(a) {
                G = G.filter(function(b) {
                    return b !== a
                })
            },
            unsubscribeStart: function(a) {
                H = H.filter(function(b) {
                    return b !== a
                })
            },
            emit: function(a) {
                G.forEach(function(b) {
                    return b(a)
                })
            },
            emitStart: function(a) {
                H.forEach(function(b) {
                    return b(a)
                })
            }
        },
        J = b("performanceNavigationStart")(),
        K = /url\(.*(http.*)\)/gi,
        L = 4,
        M = "manualVCPointCandidate";

    function N() {
        return {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        }
    }

    function O(a) {
        return {
            bottom: a.bottom,
            left: a.left,
            right: a.right,
            top: a.top
        }
    }
    d = function() {
        function a(a, c, d, e, f) {
            var g = this;
            this.$1 = 0;
            this.$2 = 0;
            this.cssBgScanOverhead = 0;
            this.initialScrollY = 0;
            this.scrolledVC = 0;
            this.reported = !1;
            this.measureOriginalViewport = !0;
            this.mutationRoots = new Set();
            this.mutatedElementCount = 0;
            this.scrollEventHandler = function() {
                g.$14 = !0, g.markerPoints.has("scroll_start") || g.addMarkerPoint("scroll_start", (i || (i = b("performanceAbsoluteNow")))()), window.removeEventListener("scroll", g.scrollEventHandler)
            };
            this.config = f;
            this.$4 = new Map();
            this.$5 = new Map();
            this.$6 = [];
            this.$7 = [];
            this.cssBgElements = new Map();
            this.$8 = 0;
            this.$9 = [];
            this.$10 = new Set();
            this.$11 = new Map();
            this.startTime = a;
            this.$12 = {
                height: 0,
                width: 0
            };
            this.initialScrollY = e === "INITIAL_LOAD" ? 0 : window.scrollY;
            this.$13 = this.initialScrollY;
            this.currentScrollY = this.initialScrollY;
            this.navSequence = c;
            this.traceID = d;
            this.markerPoints = new Map();
            this.stateLog = new Map();
            this.annotations = new Map();
            this.tagSet = new Map();
            this.navDone = !1;
            this.interactionType = e;
            this.$14 = !1;
            I.emitStart(e);
            window.addEventListener("scroll", this.scrollEventHandler, {
                passive: !0
            })
        }
        var c = a.prototype;
        c.addAnnotation = function(a, b) {
            this.annotations.set(a, b)
        };
        c.addFirstMarkerPoint = function(a, b, c) {
            c === void 0 && (c = {});
            var d = this.markerPoints.get(a);
            b >= this.startTime && (!d || d.timestamp > b - this.startTime) && this.markerPoints.set(a, {
                data: c,
                timestamp: b - this.startTime
            })
        };
        c.addMarkerPoint = function(a, b, c) {
            c === void 0 && (c = {}), b >= this.startTime && this.markerPoints.set(a, {
                data: c,
                timestamp: b - this.startTime
            })
        };
        c.addVCPointCandidate = function(a, b) {
            b === void 0 && (b = {}), this.addMarkerPoint(M, a, b)
        };
        c.addMountPoint = function(a, b, c) {
            this.$11.has(c) || this.$11.set(c, {
                data: {},
                element: a,
                timestamp: b
            })
        };
        c.addMountPointMetadata = function(a, b) {
            var c = this.$11.get(a);
            c && Object.keys(b).forEach(function(a) {
                c.data[a] = b[a]
            })
        };
        c.addVisualElement = function(a, b, c, d, e) {
            this.$14 && (this.currentScrollY = window.scrollY, this.$14 = !1, window.addEventListener("scroll", this.scrollEventHandler, {
                passive: !0
            }));
            a = {
                mutationSeq: a,
                element: b,
                timestamp: d,
                mutationType: c,
                scrollY: this.currentScrollY,
                visible: e
            };
            b instanceof HTMLImageElement && (a.naturalWidth = b.naturalWidth, a.naturalHeight = b.naturalHeight);
            this.$9.push(a)
        };
        c.trackPagelet = function(a, b, c, d, e, f) {
            f === void 0 && (f = !1), this.$5.set(a, {
                data: {},
                element: a,
                excludeFromMainVC: this.interactionType !== "INTERACTION" && f,
                mutationSeq: 0,
                name: b,
                pageletTypeName: e,
                points: {
                    hydration: c - this.startTime
                },
                vcCallback: d
            })
        };
        c.addTag = function(a, b) {
            this.tagSet.has(a) || this.tagSet.set(a, new Set());
            a = this.tagSet.get(a);
            a && a.add(b)
        };
        c.checkViewport = function() {
            this.$12 = b("VisualCompletionUtil").getViewportSize()
        };
        c.calculate = function(a) {
            var c = this;
            a === void 0 && (a = !1);
            window.removeEventListener("scroll", this.scrollEventHandler);
            this.checkViewport();
            var d = (i || (i = b("performanceAbsoluteNow")))();
            this.$2 = 0;
            this.initTree();
            !a && A() && this.getBackgroundImages();
            this.calculatePaintedPixels();
            var e = {
                annotations: this.annotations,
                bgCheckLatency: this.cssBgScanOverhead,
                bgChecked: this.$8,
                bgNum: 0,
                bgPixels: 0,
                calcLatency: 0,
                compNum: 0,
                compPixels: 0,
                cssBgElements: Array.from(this.cssBgElements.values()),
                elements: this.$7,
                finalScrollY: this.$13,
                imgNum: 0,
                imgPixels: 0,
                initialScrollY: this.initialScrollY,
                interactionType: this.interactionType,
                markerPoints: this.markerPoints,
                navComplete: i() - this.startTime,
                navSequence: this.navSequence,
                pagelets: Array.from(this.$5.values()),
                paintedPixels: this.$2,
                scrollY: window.scrollY,
                scrolledVC: this.scrolledVC,
                speedIndex: 0,
                startTime: this.startTime,
                tagSet: this.tagSet,
                totalPixels: this.$1,
                traceId: this.traceID,
                tracePolicy: this.tracePolicy,
                stateLog: this.stateLog,
                vcWithoutImage: 0,
                viewport: this.$12,
                visuallyComplete: 0
            };
            this.addAnnotation("mutationRootCount", this.mutationRoots.size);
            this.addAnnotation("mutatedElementCount", this.mutatedElementCount);
            this.addAnnotation("visualChangeRecordCount", this.$9.length);
            this.addAnnotation("paintedElementCount", this.$7.length);
            this.$7.length && u.length === 0 && (this.addMarkerPoint("FP", this.$7[this.$7.length - 1].timestamp), this.$7.forEach(function(a) {
                var b = a.element;
                if (!b) return;
                var d = a.pagelet;
                if (d !== null && d !== void 0 && d.excludeFromMainVC) {
                    var f = "vcIncluding" + d.name;
                    c.markerPoints.has(f) || e.markerPoints.set(f, {
                        timestamp: Math.max(a.latency, e.visuallyComplete)
                    })
                } else {
                    if (e.vcWithoutImage === 0 && a.type === "component") {
                        f = {
                            height: a.rectangle.bottom - a.rectangle.top,
                            mutationType: a.mutationType,
                            tagName: b.tagName || "",
                            type: a.type,
                            width: a.rectangle.right - a.rectangle.left
                        };
                        d && (f.pagelet = d.name);
                        e.vcWithoutImage = a.latency;
                        e.markerPoints.set("vcWithoutImage", {
                            data: f,
                            element: b,
                            timestamp: a.latency
                        })
                    }
                    if (e.visuallyComplete === 0) {
                        f = {
                            height: a.rectangle.bottom - a.rectangle.top,
                            mutationType: a.mutationType,
                            tagName: b.tagName || "",
                            type: a.type,
                            width: a.rectangle.right - a.rectangle.left
                        };
                        d && (f.pagelet = d.name);
                        e.visuallyComplete = a.latency;
                        e.markerPoints.set("visuallyComplete", {
                            data: f,
                            element: b,
                            timestamp: a.latency
                        });
                        e.scrollY = a.scrollY
                    }
                }
                e.speedIndex += a.pixels / c.$2 * a.latency;
                switch (a.type) {
                    case "component":
                        e.compNum++;
                        e.compPixels += a.pixels;
                        break;
                    case "img":
                        e.imgNum++;
                        e.imgPixels += a.pixels;
                        break;
                    case "bg":
                        e.bgNum++;
                        e.bgPixels += a.pixels;
                        break
                }
            }));
            this.logPagelets();
            this.logPixelProgress();
            a && (e.visuallyComplete = e.vcWithoutImage = (i || (i = b("performanceAbsoluteNow")))() - this.startTime, e.markerPoints.set("visuallyComplete", {
                data: {},
                timestamp: e.visuallyComplete
            }), e.markerPoints.set("vcWithoutImage", {
                data: {},
                timestamp: e.vcWithoutImage
            }));
            e.calcLatency = i() - d;
            this.setupMetaData(e);
            this.logCssBgElementsMetaData();
            this.reported = !0;
            return e
        };
        c.tearDown = function() {
            this.$4.clear(), this.$6 = [], this.$9 = [], this.$10.clear(), this.$11.clear(), this.mutationRoots.clear(), this.config.retain_element_reference || (this.$7.forEach(function(a) {
                delete a.element
            }), this.cssBgElements.forEach(function(a) {
                delete a.element
            }), this.$5.forEach(function(a) {
                delete a.element
            })), this.$5.clear(), this.markerPoints.forEach(function(a) {
                delete a.element
            }), this.cssBgElements.clear()
        };
        c.findPagelet = function(a) {
            a = a;
            while (a) {
                if (this.$5.has(a)) return this.$5.get(a);
                a = a.parentElement
            }
            return null
        };
        c.findParent = function(a) {
            a = a.parentElement;
            while (a) {
                if (this.$4.has(a)) return this.$4.get(a);
                a = a.parentElement
            }
            return null
        };
        c.checkExcluded = function(a) {
            a = a;
            while (a) {
                if (this.$10.has(a)) return !0;
                else if (this.$4.has(a) || this.mutationRoots.has(a)) return !1;
                else if (typeof a.getAttribute === "function" && a.getAttribute(t.ATTRIBUTE_NAME) === t.IGNORE) return !0;
                a = a.parentElement
            }
            return !1
        };
        c.getBackgroundImages = function() {
            var c = this;
            this.cssBgElements.forEach(function(d) {
                if (d.element) {
                    var e, f = d.element,
                        g = c.findParent(f);
                    if (!g) return;
                    var h = b("VisualCompletionUtil").offsetTop(f, c.initialScrollY),
                        i = c.getRelativeBoundingClientRect(f, c.measureOriginalViewport ? h : void 0);
                    i = b("VisualCompletionUtil").getRectIntersection(i, g.rectangle);
                    var j = b("VisualCompletionUtil").getPixels(i);
                    if (j === 0 || c.measureOriginalViewport && h > c.$12.height) return;
                    ((e = d.resourceTiming) === null || e === void 0 ? void 0 : e.responseEnd) == null && (d.resourceTiming = B(d.url));
                    if (((e = d.resourceTiming) === null || e === void 0 ? void 0 : e.responseEnd) != null) {
                        e = d.resourceTiming;
                        d = e.responseEnd + J;
                        var k = c.findPagelet(f);
                        if (e.startTime + J >= c.startTime && d > g.timestamp) {
                            e = {
                                children: [],
                                element: f,
                                hadLateMutationExpected: !1,
                                hadLateMutationUnexpected: !1,
                                latency: d - c.startTime,
                                mutationSeq: g.mutationSeq,
                                mutationType: "bg",
                                offsetTop: h,
                                pagelet: k,
                                parent: g,
                                pixels: k !== null && k !== void 0 && k.excludeFromMainVC ? 0 : j,
                                rectangle: i,
                                scrollY: g.scrollY,
                                timestamp: d,
                                type: "bg",
                                veid: String(a.$3++)
                            };
                            g.children.push(e);
                            c.$4.set(f, e);
                            c.$7.push(e)
                        }
                    }
                }
            })
        };
        c.getRelativeBoundingClientRect = function(a, b) {
            var c = N();
            if (typeof a.getBoundingClientRect !== "function") return c;
            c = O(a.getBoundingClientRect());
            return {
                bottom: b != null ? b + (c.bottom - c.top) : c.bottom,
                left: c.left,
                right: c.right,
                top: b != null ? b : c.top
            }
        };
        c.findFirstVisibleChild = function(a) {
            var c = this,
                d = [a];
            a = function() {
                var a = [],
                    e = 0,
                    f = void 0;
                d.forEach(function(d) {
                    if (typeof d.getBoundingClientRect !== "function") return;
                    var g = O(d.getBoundingClientRect()),
                        h = b("VisualCompletionUtil").getPixels(g);
                    if (h > 0 && (g.bottom <= 0 || g.right <= 0 || g.left >= c.$12.width || g.top >= c.$12.height)) return;
                    h > e && !c.checkExcluded(d) && (e = h, f = d);
                    a = a.concat(Array.from(d.children))
                });
                if (e > 0 && f) return {
                    v: f
                };
                d = a
            };
            while (d && d.length) {
                var e = a();
                if (typeof e === "object") return e.v
            }
            return null
        };
        c.getRectangle = function(a, c) {
            a = this.findFirstVisibleChild(a);
            if (a == null) return N();
            a = this.getRelativeBoundingClientRect(a);
            var d = a.bottom,
                e = a.left,
                f = a.right;
            a = a.top;
            d = {
                bottom: d,
                left: e,
                right: f,
                top: a
            };
            return b("VisualCompletionUtil").getRectIntersection(d, c)
        };
        c.getStyleBackground = function(a) {
            if (typeof window.getComputedStyle !== "function") return null;
            this.$8++;
            a = window.getComputedStyle(a);
            var b = a["background-image"];
            if (a.visibility !== "hidden" && b && b !== "none") {
                K.lastIndex = 0;
                a = K.exec(b);
                if (a && a.length > 1) return a[1].replace('"', "")
            }
            return null
        };
        c.excludeElement = function(a) {
            this.$10.add(a)
        };
        c.initTree = function() {
            var c = this,
                d = {
                    bottom: this.$12.height,
                    left: 0,
                    right: this.$12.width,
                    top: -this.initialScrollY
                };
            this.$9 = this.$9.sort(function(a, b) {
                return a.timestamp - b.timestamp
            });
            var e = 0,
                f = 0;
            this.$9.forEach(function(g) {
                var h = g.element,
                    i = g.mutationSeq,
                    j = g.mutationType,
                    k = g.naturalHeight,
                    l = g.naturalWidth,
                    m = g.scrollY,
                    n = g.timestamp;
                g = g.visible;
                if (h.getAttribute(t.ATTRIBUTE_NAME) === t.MEDIA_VC_IMAGE && g === !0 && k != null && l != null) {
                    g = k * l;
                    var o = Number(g < e * L);
                    l = {
                        ignored: o,
                        resolution: g,
                        mutationType: j,
                        naturalWidth: l,
                        naturalHeight: k
                    };
                    e > 0 && (l.ratio = g / e);
                    c.addMarkerPoint("mediaVCImage_" + f++, n, l);
                    if (o) return;
                    else c.addMarkerPoint("ImageMediaVC", n), e = g
                }
                k = c.findFirstVisibleChild(h);
                if (k == null) return;
                l = b("VisualCompletionUtil").offsetTop(k, c.initialScrollY);
                o = c.getRelativeBoundingClientRect(k, c.measureOriginalViewport ? l : void 0);
                g = b("VisualCompletionUtil").getRectIntersection(o, d);
                if (c.inAboveTheFold(k)) {
                    n - c.startTime > c.scrolledVC && (c.scrolledVC = n - c.startTime, c.$13 = m);
                    if (c.measureOriginalViewport && l > c.$12.height) return;
                    h = c.findPagelet(k);
                    o = {
                        children: [],
                        element: k,
                        hadLateMutationExpected: !1,
                        hadLateMutationUnexpected: !1,
                        latency: n - c.startTime,
                        mutationSeq: i,
                        mutationType: j,
                        offsetTop: l,
                        pagelet: h,
                        parent: null,
                        pixels: h !== null && h !== void 0 && h.excludeFromMainVC ? 0 : b("VisualCompletionUtil").getPixels(g),
                        rectangle: g,
                        scrollY: m,
                        timestamp: n,
                        type: j === "imgLoad" || j === "mutationImageAttribute" ? "img" : "component",
                        veid: String(a.$3++)
                    };
                    c.$4.set(k, o)
                }
            });
            this.$4.forEach(function(a) {
                var b = a.element;
                if (b) {
                    b = c.findParent(b);
                    b ? (a.type !== "component" && (a.scrollY = b.scrollY), b.children.push(a), a.parent = b) : c.$6.push(a)
                }
            });
            this.$4.forEach(function(a, b) {
                var d = a.parent;
                while (d) {
                    if (a.timestamp < d.timestamp) {
                        c.$4["delete"](b);
                        return
                    }
                    d = d.parent
                }
                c.$7.push(a)
            })
        };
        c.logPixelProgress = function() {
            var a = this,
                b = new Map([
                    ["vc98", .02],
                    ["vc95", .05]
                ]),
                c = 0,
                d = 0,
                e = function(e) {
                    var f = a.$7[e];
                    c += f.pixels;
                    if (b.size === 0) return "break";
                    b.forEach(function(b, d) {
                        !a.markerPoints.has(d) && c / a.$2 >= b && a.addMarkerPoint(d, f.latency + a.startTime)
                    });
                    f.type === "component" && (d += f.pixels, f.children.forEach(function(a) {
                        a.type !== "component" && (d += a.pixels)
                    }), b.forEach(function(c, e) {
                        !a.markerPoints.has(e + "WithoutImage") && d / a.$2 >= c && (a.addMarkerPoint(e + "WithoutImage", f.latency + a.startTime), b["delete"](e))
                    }))
                };
            for (var f = 0; f < this.$7.length; f++) {
                var g = e(f);
                if (g === "break") break
            }
        };
        c.logPagelets = function() {
            var a = this;
            this.$5.forEach(function(b, c) {
                if (!a.inViewport(c)) {
                    b.vcCallback != null && b.vcCallback(null, null, b.data);
                    a.$5["delete"](c);
                    return
                }
                c = a.$4.has(c) ? a.$4.get(c) : a.findParent(c);
                if (c) {
                    var d = c.latency;
                    b.points.firstPaint = d;
                    b.points.visuallyComplete = d;
                    b.points.vcWithoutImage = d;
                    b.mutationSeq = c.mutationSeq
                }
            });
            this.$7.forEach(function(b) {
                var c = b.pagelet;
                while (c != null) {
                    var d, e = b.latency;
                    c.points.visuallyComplete = Math.max((d = c.points.visuallyComplete) !== null && d !== void 0 ? d : 0, e);
                    if (b.type === "component") {
                        c.points.vcWithoutImage = Math.max((d = c.points.vcWithoutImage) !== null && d !== void 0 ? d : 0, e)
                    }
                    c = c.element && c.element.parentElement ? a.findPagelet(c.element.parentElement) : null
                }
            });
            this.$5.forEach(function(b) {
                b.points.visuallyComplete != null && b.pageletTypeName != null && b.pageletTypeName !== "" && a.markerPoints.set(b.pageletTypeName + "VC", {
                    timestamp: b.points.visuallyComplete
                }), b.points.vcWithoutImage != null && a.markerPoints.set("VC_" + b.name, {
                    data: b.data,
                    timestamp: b.points.vcWithoutImage
                }), b.vcCallback != null && b.points.visuallyComplete != null && b.points.vcWithoutImage != null && b.vcCallback(a.startTime + b.points.visuallyComplete - J, a.startTime + b.points.vcWithoutImage - J, b.data), a.config.retain_element_reference || delete b.element
            });
            this.$11.forEach(function(b, c) {
                var d = b.data;
                b = b.timestamp;
                a.addMarkerPoint("Mount_" + c, b, d)
            });
            this.$11.clear()
        };
        c.calculatePaintedPixels = function() {
            var a = this;
            this.$7 = this.$7.sort(function(a, b) {
                return b.latency - a.latency
            });
            this.$7.forEach(function(c) {
                var d = c.pixels,
                    e = c.parent;
                while (e) {
                    var f;
                    c.rectangle = b("VisualCompletionUtil").getRectIntersection(c.rectangle, e.rectangle);
                    c.pixels = (f = c.pagelet) !== null && f !== void 0 && f.excludeFromMainVC ? 0 : b("VisualCompletionUtil").getPixels(c.rectangle);
                    d = Math.min(d, c.pixels, e.pixels);
                    e = e.parent
                }
                c.pixels = d;
                e = c.parent;
                while (e) e.pixels -= d, e = e.parent;
                a.$2 += d
            });
            this.$1 = this.$2
        };
        c.inAboveTheFold = function(a) {
            a = a;
            var c = b("VisualCompletionUtil").getViewportSize();
            a = b("VisualCompletionUtil").getPixels(this.getRectangle(a, {
                bottom: c.height,
                left: 0,
                right: c.width,
                top: -window.scrollY
            }));
            return a > 0
        };
        c.inOriginalViewport = function(a) {
            return this.inAboveTheFold(a) && b("VisualCompletionUtil").offsetTop(a, this.initialScrollY) <= this.$12.height
        };
        c.inViewport = function(a) {
            return this.measureOriginalViewport ? this.inOriginalViewport(a) : this.inAboveTheFold(a)
        };
        c.setInitialScrollY = function(a) {
            this.initialScrollY = a, this.currentScrollY = a
        };
        c.setTracePolicy = function(a) {
            this.tracePolicy = a
        };
        c.setupMetaData = function(a) {
            var c = this,
                d = this.markerPoints.get(M);
            d && d.timestamp > a.visuallyComplete && (a.visuallyComplete = d.timestamp, this.markerPoints.set("visuallyComplete", d), a.annotations.set("isVCOverriden", 1));
            a.tracePolicy != null && a.tracePolicy !== "" && a.annotations.set("tracePolicy", a.tracePolicy);
            a.annotations.set("interactionId", a.traceId);
            a.annotations.set("height", a.viewport.height);
            a.annotations.set("width", a.viewport.width);
            a.annotations.set("scrollY", a.scrollY);
            typeof window.devicePixelRatio === "number" && a.annotations.set("devicePixelRatio", window.devicePixelRatio);
            a.annotations.set("finalScrollY", a.finalScrollY);
            a.annotations.set("initialScrollY", a.initialScrollY);
            a.annotations.set("vcCalculationOverhead", a.calcLatency);
            a.annotations.set("cssBgScanOverhead", a.bgCheckLatency);
            a.annotations.set("navSequence", a.navSequence);
            a.markerPoints.set("logVC", {
                timestamp: a.navComplete
            });
            a.speedIndex > 0 && a.markerPoints.set("speedIndex", {
                timestamp: a.speedIndex
            });
            a.navSequence === 1 && (h || (h = b("performance"))) && (h || (h = b("performance"))).timing && ((h || (h = b("performance"))).timing.responseStart && a.markerPoints.set("TTFB", {
                timestamp: (h || (h = b("performance"))).timing.responseStart - a.startTime
            }));
            a.elements.length && (this.measureOriginalViewport && a.scrolledVC > 0 && a.markerPoints.set("scrolledVC", {
                timestamp: a.scrolledVC
            }));
            d = q(a.startTime - J, a.visuallyComplete + a.startTime - J);
            d.length > 0 && this.addMarkerPoint("backgrounded", d[0].start + J);
            a.annotations.set("hidden", Number(s(a.startTime - J, a.visuallyComplete + a.startTime - J)));
            d = F(a.startTime - J, a.startTime + a.visuallyComplete - J);
            d.forEach(function(b, c) {
                a.annotations.set(c, b)
            });
            u.forEach(function(a) {
                c.addTag("unavailableAPIs", a)
            })
        };
        c.logCssBgElementsMetaData = function() {
            var a = 0;
            this.cssBgElements.forEach(function(b) {
                ((b = b.resourceTiming) === null || b === void 0 ? void 0 : b.responseEnd) != null && a++
            });
            this.addAnnotation("cssBgElementCount", this.cssBgElements.size);
            this.addAnnotation("cssBgTimingCount", a)
        };
        return a
    }();
    d.$3 = 1;
    var P = b("performanceNavigationStart")(),
        Q = new Set(),
        R = new Map();

    function c() {
        return new Map(R)
    }

    function S(a) {
        if (a == null || a === "") return !1;
        a = a.replace(/ /g, "");
        return a.indexOf("display:none") >= 0 || a.indexOf("visibility:hidden") >= 0 || a.indexOf("content-visibility:hidden") >= 0
    }
    var T = !1;
    !T && j && a(function(a, b) {
        b && R.forEach(function(a) {
            a.pendingMutations.forEach(function(b, c) {
                a.addVisualElement(b.mutationSeq, c, b.mutationType, b.displayTimestamp), a.intersectionObserver && a.intersectionObserver.unobserve(c), a.unlock(b.lockId)
            }), a.pendingMutations.clear()
        })
    });
    T = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(b, c, d, e, f) {
            var g;
            g = a.call(this, b, c, d, e, f) || this;
            g.pendingLocks = new Map();
            g.pendingImages = new Map();
            g.$VisualCompletionTraceBase1 = new Map();
            g.loadingStateObserver = null;
            g.$VisualCompletionTraceBase2 = [];
            g.pendingLoadingElements = new Map();
            g.$VisualCompletionTraceBase3 = 0;
            g.$VisualCompletionTraceBase4 = [];
            g.$VisualCompletionTraceBase5 = [];
            g.mutationSeq = 0;
            g.mutationObserver = null;
            g.mutationObserverConfig = {
                attributeFilter: ["hidden", "style", "href", "src"],
                attributeOldValue: !0,
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0
            };
            g.intersectionObserver = null;
            g.pendingMutations = new Map();
            g.loggingScheduled = !1;
            g.intersectionObserverCallback = function(a) {
                Array.prototype.forEach.call(a, function(a) {
                    var b = g.pendingMutations.get(a.target);
                    b && (g.addVisualElement(b.mutationSeq, a.target, b.mutationType, a.time + P, w(a)), g.intersectionObserver != null && g.intersectionObserver.unobserve(a.target), g.unlock(b.lockId), g.pendingMutations["delete"](a.target))
                })
            };
            g.mutationRecordHandler = function(a) {
                g.mutationSeq++;
                var b = [];
                Array.from(a).forEach(function(a) {
                    if (a.target.nodeType !== Node.ELEMENT_NODE) return;
                    var c = a.target;
                    if (a.type === "childList" && a.addedNodes && a.addedNodes.length) Array.from(a.addedNodes).forEach(function(a) {
                        a = a;
                        if (g.shouldIgnoreMutation(a)) return;
                        if (a.tagName === "IMG" || a.tagName === "image") {
                            g.trackImage(g.mutationSeq, a, "imgLoad");
                            return
                        } else if (typeof a.querySelectorAll === "function") {
                            var c = a.querySelectorAll("img, image");
                            Array.from(c).forEach(function(a) {
                                if (g.shouldIgnoreMutation(a)) return;
                                g.trackImage(g.mutationSeq, a, "imgLoad")
                            })
                        }
                        b.push([a, "mutationAdd"])
                    });
                    else if (a.type === "attributes" && !g.shouldIgnoreMutation(c))
                        if (a.attributeName === "hidden") c.hasAttribute("hidden") || b.push([c, "mutationHiddenAttribute"]);
                        else if (a.attributeName === "style") {
                        var d = c.getAttribute("style"),
                            e = a.oldValue;
                        S(e) && !S(d) && b.push([c, "mutationStyleAttribute"])
                    } else(c.tagName === "image" && a.attributeName === "href" || c.tagName === "IMG" && a.attributeName === "src") && g.trackImage(g.mutationSeq, c, "mutationImageAttribute")
                });
                g.trackElements(b, g.mutationSeq)
            };
            g.loadingStateObserverCallback = function(a) {
                Array.from(a).forEach(function(a) {
                    w(a) ? g.loadingElementAdded(a.target, a.time + P) : g.loadingElementRemoved(a.target, a.time + P)
                })
            };
            x && (g.mutationObserver = new x(g.mutationRecordHandler));
            v && (g.loadingStateObserver = new v(g.loadingStateObserverCallback), g.intersectionObserver = new v(g.intersectionObserverCallback));
            R.set(d, babelHelpers.assertThisInitialized(g));
            (e === "INITIAL_LOAD" || e === "NAVIGATION") && Q.forEach(function(a) {
                g.observeMutation(a)
            });
            return g
        }
        var d = c.prototype;
        d.addMutationRoot = function(a) {
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            this.mutationSeq++;
            this.trackElements([
                [a, "mutationRoot"]
            ], this.mutationSeq);
            return this.observeMutation(a)
        };
        d.checkInvisibleStyleElement = function(a) {
            a = a;
            while (a && typeof a.getAttribute === "function" && typeof a.hasAttribute === "function") {
                if (S(a.getAttribute("style")) || a.hasAttribute("hidden")) return !0;
                a = a.parentElement
            }
            return !1
        };
        d.shouldIgnoreMutation = function(a) {
            if (this.checkInvisibleStyleElement(a)) return !0;
            var b = a;
            while (b) {
                if (this.mutationRoots.has(b)) return !1;
                if (typeof b.getAttribute === "function") {
                    var c = b.getAttribute(t.ATTRIBUTE_NAME);
                    if (c === t.IGNORE) return !0;
                    if (b !== a && c === t.IGNORE_DYNAMIC) {
                        this.excludeElement(a);
                        return !0
                    }
                }
                b = b.parentElement
            }
            return !1
        };
        d.dumpLocks = function() {
            return [this.pendingLocks, this.pendingLoadingElements, this.pendingImages]
        };
        d.lock = function(a) {
            var c = this;
            this.pendingLocks.set(a, (g || (g = b("performanceNow")))());
            return function() {
                c.unlock(a)
            }
        };
        d.imageDone = function(a) {
            var c = this.pendingImages.get(a);
            if (c == null) return;
            this.stateLog.set("imgLoad_" + this.$VisualCompletionTraceBase3++, [c, (g || (g = b("performanceNow")))()]);
            this.pendingImages["delete"](a);
            this.attemptMeasurement()
        };
        d.imageWait = function(a) {
            if (this.reported) return;
            this.pendingImages.set(a, (g || (g = b("performanceNow")))())
        };
        d.loadingElementRemoved = function(a, c) {
            var d = this.pendingLoadingElements.get(a);
            d != null && (this.stateLog.set("loadingState_" + this.$VisualCompletionTraceBase3++, [d, (g || (g = b("performanceNow")))()]), this.pendingLoadingElements["delete"](a), this.addMarkerPoint("loadingState_end", c), this.attemptMeasurement())
        };
        d.loadingElementAdded = function(a, c) {
            if (this.reported) return;
            this.addFirstMarkerPoint("loadingState_start", c);
            this.pendingLoadingElements.set(a, (g || (g = b("performanceNow")))())
        };
        d.waitLoadingState = function(a) {
            var c = this;
            if (this.reported) return function() {};
            var d = this.$VisualCompletionTraceBase1.get(a);
            if (d) return function() {
                d(), c.loadingElementRemoved(a, (i || (i = b("performanceAbsoluteNow")))())
            };
            if (typeof a.getAttribute === "function" && a.getAttribute(t.ATTRIBUTE_NAME) === t.IGNORE) return function() {};
            this.loadingStateObserver && this.loadingStateObserver.observe(a);
            (j && !k() || b("VisualCompletionUtil").isInAboveTheFold(a)) && this.loadingElementAdded(a, (i || (i = b("performanceAbsoluteNow")))());
            var e = function() {
                c.loadingStateObserver && c.loadingStateObserver.unobserve(a), c.$VisualCompletionTraceBase1["delete"](a)
            };
            this.$VisualCompletionTraceBase1.set(a, e);
            return function() {
                e(), c.loadingElementRemoved(a, (i || (i = b("performanceAbsoluteNow")))())
            }
        };
        d.trackImage = function(a, c, d) {
            var e = this;
            if (c.complete) {
                c.getAttribute(t.ATTRIBUTE_NAME) === t.MEDIA_VC_IMAGE && this.scheduleIntersectionObserver(a, c, d, (i || (i = b("performanceAbsoluteNow")))());
                return
            }
            var f = c.currentSrc || c.src;
            if (c.tagName === "image" && typeof c.getAttribute === "function") {
                var g = c.getAttribute("xlink:href");
                g != null && (f = g)
            }
            if (f == null || f === "" || f.indexOf("http") !== 0) return;
            var h = function() {
                e.imageDone(c)
            };
            g = function() {
                e.imageWait(c)
            };
            b("ImageDownloadTracker")(f, g).then(function() {
                var f = (i || (i = b("performanceAbsoluteNow")))();
                e.scheduleIntersectionObserver(a, c, d, f);
                h()
            })["catch"](function() {
                return h()
            })
        };
        d.unlock = function(a) {
            var c = this.pendingLocks.get(a);
            if (c == null) return;
            this.pendingLocks["delete"](a);
            this.stateLog.set("Lock(" + a + ")", [c, (g || (g = b("performanceNow")))()]);
            this.attemptMeasurement()
        };
        d.checkLoadingStates = function(a) {
            var b = this;
            if (typeof a.getAttribute === "function" && a.getAttribute(t.ATTRIBUTE_NAME) === t.LOADING_STATE) this.waitLoadingState(a);
            else if (typeof a.querySelectorAll === "function") {
                a = a.querySelectorAll("[" + t.ATTRIBUTE_NAME + "=" + t.LOADING_STATE + "]");
                Array.from(a).forEach(function(a) {
                    b.waitLoadingState(a)
                })
            }
        };
        d.checkDuplicatedMutationRoot = function(a) {
            a = a;
            while (a != null) {
                if (this.mutationRoots.has(a)) return !0;
                a = a.parentElement
            }
            return !1
        };
        d.observeMutation = function(a) {
            var b = this;
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            a.nodeType === Node.ELEMENT_NODE && this.mutationObserver && this.mutationObserver.observe(a, this.mutationObserverConfig);
            this.mutationRoots.add(a);
            return function() {
                b.mutationRoots["delete"](a)
            }
        };
        d.registerNavigationMutationRoot = function(a) {
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            Q.add(a);
            return function() {
                Q["delete"](a)
            }
        };
        d.scheduleIntersectionObserver = function(a, c, d, e) {
            var f = this;
            if (this.reported) return;
            this.mutatedElementCount++;
            if (j && k()) this.addVisualElement(a, c, d, e);
            else if (v) {
                var g = this.pendingMutations.get(c);
                g && (this.intersectionObserver && this.intersectionObserver.unobserve(c), this.pendingMutations["delete"](c), this.pendingLocks["delete"](g.lockId));
                g = d + "_paint_" + this.$VisualCompletionTraceBase3++;
                this.intersectionObserver && this.intersectionObserver.observe(c);
                this.lock(g);
                this.pendingMutations.set(c, {
                    displayTimestamp: e,
                    lockId: g,
                    mutationType: d,
                    mutationSeq: a
                })
            } else {
                var h = d + "_paint_" + this.$VisualCompletionTraceBase3++;
                this.lock(h);
                b("VisualCompletionUtil").foregroundRequestAnimationFrame(function() {
                    f.addVisualElement(a, c, d, (i || (i = b("performanceAbsoluteNow")))()), f.unlock(h)
                })
            }
        };
        d.trackElements = function(a, c) {
            var d = this,
                e = [];
            a.forEach(function(a) {
                var b = a[0];
                b.nodeType === Node.ELEMENT_NODE && b.tagName !== "IMG" && b.tagName !== "image" && e.push(a)
            });
            var f = (i || (i = b("performanceAbsoluteNow")))();
            e.forEach(function(a) {
                var b = a[0];
                a = a[1];
                d.checkLoadingStates(b);
                d.scheduleIntersectionObserver(c, b, a, f)
            })
        };
        d.onBeforeComplete = function(a) {
            if (this.reported) return;
            this.$VisualCompletionTraceBase4.push(a)
        };
        d.onComplete = function(a) {
            if (this.reported) return;
            this.$VisualCompletionTraceBase5.push(a)
        };
        d.scanCssBgElements = function() {
            var a = this;
            if (this.reported) return;
            var c = (i || (i = b("performanceAbsoluteNow")))();
            this.checkViewport();
            this.mutationRoots.forEach(function(b) {
                if (b && typeof b.querySelectorAll === "function") {
                    b = b.querySelectorAll("div,i,span,li");
                    Array.prototype.forEach.call(b, function(b) {
                        if (b.textContent || b.children.length || a.cssBgElements.has(b) || a.shouldIgnoreMutation(b) || !a.inViewport(b)) return;
                        var c = a.getStyleBackground(b);
                        if (c == null) return;
                        c = {
                            element: b,
                            url: c,
                            resourceTiming: B(c)
                        };
                        a.cssBgElements.set(b, c)
                    })
                }
            });
            this.cssBgScanOverhead = i() - c
        };
        d.attemptMeasurement = function(a) {
            var b = this;
            a === void 0 && (a = !1);
            if (!a && (this.loggingScheduled || this.reported || this.pendingLocks.size > 0 || this.pendingLoadingElements.size > 0 || this.pendingImages.size > 0)) return;
            this.loggingScheduled = !0;
            var c = function() {
                    b.mutationObserver && b.mutationObserver.disconnect();
                    b.$VisualCompletionTraceBase1.forEach(function(a) {
                        a()
                    });
                    b.loadingStateObserver && b.loadingStateObserver.disconnect();
                    b.$VisualCompletionTraceBase1.clear();
                    b.$VisualCompletionTraceBase2.forEach(function(a) {
                        a && a.disconnect()
                    });
                    R["delete"](b.traceID);
                    b.intersectionObserver && b.intersectionObserver.disconnect();
                    b.pendingMutations.clear();
                    !a && A() && b.scanCssBgElements();
                    var c = b.calculate(a);
                    b.$VisualCompletionTraceBase4.forEach(function(a) {
                        a(c)
                    });
                    b.$VisualCompletionTraceBase4 = [];
                    I.emit(c);
                    b.$VisualCompletionTraceBase5.forEach(function(a) {
                        a(c)
                    });
                    b.$VisualCompletionTraceBase5 = [];
                    b.tearDown()
                },
                d = this.config.defer_expensive_calculation && !a ? this.config.defer_expensive_calculation : function(a) {
                    return a()
                };
            d(c)
        };
        d.forceMeasurement = function() {
            var a = this;
            if (this.reported) return;
            this.pendingLocks.size > 0 && (this.addAnnotation("incompleteLockCount", this.pendingLocks.size), this.pendingLocks.forEach(function(c, d) {
                a.addTag("incompleteLocks", d), a.stateLog.set("incomplete_" + d, [c, (g || (g = b("performanceNow")))()])
            }));
            this.pendingLoadingElements.size > 0 && (this.addAnnotation("incompleteLoadingElementsCount", this.pendingLoadingElements.size), this.pendingLoadingElements.forEach(function(c) {
                a.stateLog.set("incomplete_loadingState_" + a.$VisualCompletionTraceBase3++, [c, (g || (g = b("performanceNow")))()])
            }));
            this.pendingImages.size > 0 && (this.addAnnotation("incompleteImageCount", this.pendingImages.size), this.pendingImages.forEach(function(c) {
                a.stateLog.set("incomplete_imgLoad_" + a.$VisualCompletionTraceBase3++, [c, (g || (g = b("performanceNow")))()])
            }));
            this.pendingLocks.clear();
            this.pendingLoadingElements.clear();
            this.pendingImages.clear();
            this.attemptMeasurement(!0)
        };
        return c
    }(d);
    var U = null,
        V = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a(a, c, d, e, f) {
                a = b.call(this, a, c, d, e, f) || this;
                U = babelHelpers.assertThisInitialized(a);
                f.measureOriginalViewportOnNavigation != null && (a.measureOriginalViewport = f.measureOriginalViewportOnNavigation);
                return a
            }
            a.excludeElement = function(a) {
                U != null && !U.reported && U.excludeElement(a)
            };
            return a
        }(T);
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f) {
            b = a.call(this, b, c, d, e, f) || this;
            b.measureOriginalViewport = !1;
            return b
        }
        var c = b.prototype;
        c.trackElements = function(b, c) {
            var d = this;
            if (this.reported) return;
            a.prototype.trackElements.call(this, b, c);
            b.forEach(function(a) {
                a = a[0];
                d.interactionType === "INTERACTION" && V.excludeElement(a)
            })
        };
        return b
    }(T);
    T = {
        getCurrentVCTraces: c,
        performanceAbsoluteNow: i || (i = b("performanceAbsoluteNow")),
        performanceNavigationStart: b("performanceNavigationStart"),
        performanceNow: g || (g = b("performanceNow")),
        VisibilityState: {
            canUseVisibilityAPI: j,
            subscribe: a
        },
        VisualCompletionAttributes: f,
        VisualCompletionConstants: t,
        VisualCompletionTraceForInteraction: d,
        VisualCompletionTraceForNavigation: V,
        VisualCompletionTraceObserver: I
    };
    e.exports = T
}), null);
__d("interaction-tracing", ["JSScheduler", "MemoryUtils", "NetworkStatus", "Promise", "QPLEvent", "QuickLogActionType", "Run", "clearTimeout", "hero-tracing", "hero-tracing-placeholder", "interaction-tracing-metrics", "one-trace", "performance", "performanceNavigationStart", "performanceNow", "regeneratorRuntime", "setTimeoutAcrossTransitions", "uuid", "vc-tracker"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = document.visibilityState !== void 0 || document.hidden !== void 0;

    function j() {
        if (i) return document.visibilityState !== void 0 ? document.visibilityState === "hidden" : document.hidden;
        else return !1
    }
    var k = 1e3,
        l = [],
        m = null;
    f = !1;
    var n = new Set();
    f || (j() && (m = 0), f = !0);
    i && document.addEventListener("visibilitychange", function(a) {
        var c = (a = a === null || a === void 0 ? void 0 : a.timeStamp) !== null && a !== void 0 ? a : (g || (g = b("performanceNow")))();
        o(c, j());
        n.forEach(function(a) {
            a(c, j())
        })
    });

    function o(a, b) {
        b ? m = a : m != null && (l.push({
            start: m,
            end: a
        }), l.length > k && l.shift(), m = null)
    }

    function p(a, c) {
        var d = [];
        l.concat(m != null ? [{
            start: m,
            end: (g || (g = b("performanceNow")))()
        }] : []).forEach(function(b) {
            b.start <= a && b.end > a ? b.end <= c ? d.push({
                start: a,
                end: b.end
            }) : d.push({
                start: a,
                end: c
            }) : b.start > a && b.start <= c && (b.end <= c ? d.push({
                start: b.start,
                end: b.end
            }) : d.push({
                start: b.start,
                end: c
            }))
        });
        return d
    }

    function q(a, b) {
        var c = 0;
        a = p(a, b);
        a.forEach(function(a) {
            c += a.end - a.start
        });
        return c
    }

    function r(a, b) {
        a = q(a, b);
        return a > 0
    }
    var s = 600,
        t = 150,
        u = 5;

    function v(a) {
        var c = a === null || a === void 0 ? void 0 : a.metadata.tracePolicy;
        return ((a = a !== null && a !== void 0 && a.qplEvent ? b("QPLEvent").getMarkerId(a.qplEvent) : null) !== null && a !== void 0 ? a : "unknown") + ":" + (typeof c === "string" ? c : "unknown")
    }

    function w(a, c, d, e, f) {
        var g;
        if (d.interactionID !== a.traceId) g = "OtherInteraction";
        else if (c.has(d.placeholderID)) g = "LatePlaceholder";
        else if (!e) g = "IncompletePlaceholder";
        else return;
        c = {};
        c.type = g;
        e !== null && e !== void 0 && e.spanType && (c.spanType = e === null || e === void 0 ? void 0 : e.spanType);
        if (g === "OtherInteraction") {
            var h = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(d.interactionID);
            c.interactionType = v(h)
        }
        h = (h = e === null || e === void 0 ? void 0 : e.endTime) !== null && h !== void 0 ? h : f;
        f = (e = (f = e === null || e === void 0 ? void 0 : e.name) !== null && f !== void 0 ? f : d.description) !== null && e !== void 0 ? e : "[No Description]";
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(a.traceId, g === "OtherInteraction" ? "OtherInteraction: " + f : f, g === "OtherInteraction" ? "HeroDebug" : "LatePlaceholder", d.startTime, Math.max(h, d.startTime), c)
    }

    function x(a, c, d, e) {
        if (!(d.heroLatePlaceholderDetection || d.heroDebugTracing)) return;
        var f = a.getTraceId(),
            h = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(f);
        if (!h) return;
        var i = h.vcTracker,
            j = new Map(),
            k = new Map(),
            l = new Set(),
            m = 0,
            n = b("hero-tracing").HeroLogger.subscribeToPlaceholders({
                onStart: function(a) {
                    if (a.interactionID !== f && !d.heroDebugTracing) return;
                    a.interactionID === f && h.completed != null && l.add(a.placeholderID);
                    j.set(a.placeholderID, a)
                },
                onEnd: function(a) {
                    if (a.interactionID !== f && !d.heroDebugTracing) return;
                    k.set(a.placeholderID, a)
                }
            });

        function o() {
            n(), c.VCTracker && i && i.unlock(c.VCTracker.VisualCompletionConstants.HERO_LATE_PLACEHOLDER_DETECTION)
        }

        function p() {
            var a = (g || (g = b("performanceNow")))(),
                c = new Set();
            j.forEach(function(b) {
                var d = k.get(b.placeholderID);
                b.interactionID !== f && c.add(b.interactionID);
                w(h, l, b, d, a)
            });
            d.heroDebugTracing && c.forEach(function(c) {
                var d = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(c);
                if (d) {
                    b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(f, "OtherInteraction: " + v(d), "HeroDebug", Math.max(d.start, h.start), Math.min((d = d.completed) !== null && d !== void 0 ? d : a, a), {
                        otherInteractionID: c
                    })
                }
            });
            o()
        }

        function q() {
            m === 0 || m <= u && Array.from(l).some(function(a) {
                return !k.has(a)
            }) ? (setTimeout(q, m === 0 ? s : t), m++) : p()
        }
        c.VCTracker && i && i.lock(c.VCTracker.VisualCompletionConstants.HERO_LATE_PLACEHOLDER_DETECTION);
        a.onCompleteSync(function() {
            if (!e()) {
                o();
                return
            }
            d.heroLatePlaceholderDetection ? setTimeout(function() {
                q()
            }) : p()
        })
    }
    var y = b("performanceNavigationStart")(),
        z = /^((server_)?adp_|Relay_)/,
        A = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/),
        B = new Set(["HeroTracing", "GraphAPI", "FluxAction", "Debug", "Longtask"]),
        C = 4;

    function D(a, b, c, d) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            "int": {
                numReactCommit: c.size
            }
        }, {
            instanceKey: d
        })
    }

    function E(a, b, c, d, e) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            string: (a = {}, a[c] = d, a)
        }, {
            instanceKey: e
        })
    }

    function F(a, b, c, d, e) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            "int": (a = {}, a[c] = d, a)
        }, {
            instanceKey: e
        })
    }

    function G(a, b, c, d, e) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            bool: (a = {}, a[c] = d, a)
        }, {
            instanceKey: e
        })
    }

    function H(a, b, c, d, e) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            string_array: (a = {}, a[c] = d, a)
        }, {
            instanceKey: e
        })
    }

    function I(a, b, c, d, e, f) {
        a.QuickPerformanceLogger.markerPoint(b, c, {
            data: d != null ? {
                string: {
                    __key: d
                }
            } : null,
            instanceKey: e,
            timestamp: f
        })
    }

    function J(a, b, c, d) {
        for (var e in c.metadata) {
            var f = c.metadata[e];
            typeof f === "string" ? E(a, b, e, f, d) : typeof f === "number" ? F(a, b, e, f, d) : typeof f === "boolean" && G(a, b, e, f, d)
        }
        for (var g in c.tagSet) {
            f = Array.from(c.tagSet[g]).sort();
            H(a, b, g, f, d)
        }
    }

    function K(b, c, d, e, a) {
        for (var f in d) {
            var g = d[f],
                h = g.data,
                i = g.timestamp;
            g = g.type;
            if (B.has(g) || a.exec(f)) continue;
            g = h;
            A.test(f) && f !== "late_mutation/unexpected_1" && h !== null && h !== void 0 && h.reactStack && (g = L(d[f], ["reactStack"]));
            I(b, c, f, g && Object.keys(g).length ? JSON.stringify(g) : void 0, e, i + y)
        }
    }

    function L(a, b) {
        a = a.data;
        var c = a != null ? JSON.parse(JSON.stringify(a)) : null;
        c != null && b.forEach(function(a) {
            return delete c[a]
        });
        return c
    }

    function M(b, c, d, e, a) {
        for (var f in d) {
            if (a.exec(f)) continue;
            for (var g = 0; g < d[f].length; g++) {
                var h = d[f][g],
                    i = h.data,
                    j = h.end,
                    k = h.start;
                h = h.type;
                if (B.has(h)) continue;
                h = d[f].length === 1 ? f : f + "_" + (g >= C ? "MAX" : g + 1);
                I(b, c, h + "_start", void 0, e, k + y);
                I(b, c, h + "_end", Object.keys(i).length ? JSON.stringify(i) : void 0, e, j + y)
            }
        }
    }

    function N(a, b, c, d) {
        a.QuickPerformanceLogger.markerStart(b, d, c + y)
    }

    function O(a, b, c, d, e, f) {
        D(b, c, e.commitSet, f);
        J(b, c, e, f);
        K(b, c, e.markerPoints, f, z);
        M(b, c, e.subSpans, f, z);
        e = a.qplActionMap[d];
        b.QuickPerformanceLogger.markerEnd(c, e, f);
        return e
    }

    function a(a, c, d, e) {
        var f = typeof window.qpl_inl === "function" ? window.qpl_inl() : {};
        f = f[d + "-server"];
        if (f) {
            d = ((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (h || (h = b("performance"))).timing) || {};
            var g = y;
            d.requestStart && d.responseStart && f.earlyFlush && (g = (d.requestStart + d.responseStart - f.earlyFlush) / 2);
            a.QuickPerformanceLogger.markerStart(c, 0, g);
            J(a, c, e, 0);
            d = 0;
            for (var i in f) d = Math.max(d, f[i]), a.QuickPerformanceLogger.markerPoint(c, i, {
                timestamp: f[i] + g
            });
            a.QuickPerformanceLogger.markerEnd(c, b("QuickLogActionType").SUCCESS, 0, d + g)
        }
    }

    function aa(a, b, c) {
        if (a.UserTimingUtils == null) return;
        b.markerPoints.visuallyComplete && a.UserTimingUtils.measureModern("VisuallyComplete(" + c + ")[" + b.traceId.slice(0, 3) + "]", {
            end: b.markerPoints.visuallyComplete.timestamp,
            start: b.start
        }, "VC");
        b.markerPoints.vcWithoutImage && a.UserTimingUtils.measureModern("VCWithoutImage(" + c + ")[" + b.traceId.slice(0, 3) + "]", {
            end: b.markerPoints.vcWithoutImage.timestamp,
            start: b.start
        }, "VCWithoutImage")
    }
    var P = b("vc-tracker").VisualCompletionConstants;

    function ba(a, b, c, d) {
        ca(c, d, a) && (ea(c, d), ha(a, b, c), ja(c), ka(c))
    }

    function ca(a, b, c) {
        return a.interactionType === "INITIAL_LOAD" && !a.markerPoints.has("INTERACTION_1_start") && Object.prototype.hasOwnProperty.call(b.markerPoints, "ssr_shown") && !c.ssrProgressiveLoadEnabled
    }

    function da(a, b, c) {
        b = b.getReactComponentStackFromDOMElement;
        var d = !1;
        for (var e = c.elements.length - 1; e >= 0; e--) {
            var f = c.elements[e];
            if (a.logLateMutationReactStack && b && f.element && (f.hadLateMutationExpected || f.hadLateMutationUnexpected)) {
                var g = b(f.element);
                if (g != null) {
                    var h = g.indexOf("HeroPagelet");
                    h >= 0 && g.splice(h);
                    !d && f.hadLateMutationUnexpected && (c.annotations.set("lateMutationStack", g.join(",")), d = !0);
                    f.reactStack = g
                }
            }
        }
    }

    function ea(a, b) {
        var c = null;
        a.pagelets.forEach(function(a) {
            a.name === "root" && (c = a.mutationSeq)
        });
        a.elements.forEach(function(a) {
            var d = a.pagelet;
            d != null && c != null && a.mutationSeq > c && a.type === "component" && (fa(a, b) ? (d.data.hadLateMutationExpected = 1, a.hadLateMutationExpected = !0) : (d.data.hadLateMutationUnexpected = 1, a.hadLateMutationUnexpected = !0))
        })
    }

    function fa(a, b) {
        var c;
        return ((c = a.pagelet) === null || c === void 0 ? void 0 : c.excludeFromMainVC) || ga(a, b)
    }

    function ga(a, b) {
        a = a.element;
        while (a) {
            if (a.getAttribute(P.ATTRIBUTE_NAME) === P.IGNORE_LATE_MUTATION || b.lateMutationIgnoreElements.has(a)) return !0;
            a = a.parentElement
        }
        return !1
    }

    function ha(a, b, c) {
        da(a, b, c);
        a = 10;
        b = 0;
        var d = 0,
            e = 0;
        for (var f = c.elements.length - 1; f >= 0; f--) {
            var g = c.elements[f];
            (g.hadLateMutationExpected || g.hadLateMutationUnexpected) && (d += g.hadLateMutationExpected ? 1 : 0, e += g.hadLateMutationUnexpected ? 1 : 0, b = g.hadLateMutationExpected && d + e >= a ? 1 : 0)
        }
        c.annotations.set("hadLateMutationExpected", d > 0);
        c.annotations.set("hadLateMutationUnexpected", e > 0);
        c.annotations.set("lmCountExpected", d);
        c.annotations.set("lmCountUnexpected", e);
        g = a - e - b;
        f = [];
        var h;
        b = !1;
        var i = 1;
        d = 1;
        e = 1;
        for (var j = c.elements.length - 1; j >= 0; j--) {
            var k = c.elements[j];
            if (k.hadLateMutationUnexpected || k.hadLateMutationExpected) {
                var l = {
                    hadLateMutationExpected: k.hadLateMutationExpected,
                    hadLateMutationUnexpected: k.hadLateMutationUnexpected,
                    mutationType: k.mutationType,
                    type: k.type,
                    height: k.rectangle.bottom - k.rectangle.top,
                    width: k.rectangle.right - k.rectangle.left
                };
                k.element && (l.tagName = k.element.tagName);
                k.pagelet && (l.pagelet = k.pagelet.name);
                !b && k.hadLateMutationUnexpected && (l.reactStack = k.reactStack, b = !0);
                h = {
                    markerPointData: l,
                    markerPointTitle: ia(l, k.hadLateMutationUnexpected ? e : d),
                    element: k,
                    timestamp: k.latency
                };
                (d <= g || k.hadLateMutationUnexpected) && i < a && (k.hadLateMutationUnexpected ? e++ : d++, f.push(h), i++)
            }
        }
        h && i === a && f.push(h);
        l = f.length;
        if (l > 1) {
            k = f[l - 1];
            k.markerPointData.reactStack = k.element.reactStack
        }
        f.forEach(function(a) {
            return c.markerPoints.set(a.markerPointTitle, {
                data: a.markerPointData,
                timestamp: a.timestamp
            })
        })
    }

    function ia(a, b) {
        return "late_mutation/" + (a.hadLateMutationUnexpected ? "unexpected" : "expected") + "_" + b
    }

    function ja(a) {
        var b = a.pagelets.reduce(function(a, b) {
            return "firstPaint" in b.points ? Math.min(a, b.points.firstPaint) : a
        }, Number.MAX_SAFE_INTEGER);
        b != Number.MAX_SAFE_INTEGER && a.annotations.set("progressiveRenderCost", a.vcWithoutImage - b)
    }

    function ka(a) {
        var b = a.pagelets.reduce(function(a, b) {
                return "firstPaint" in b.points && b.data.lateMutation ? Math.min(a, b.points.firstPaint) : a
            }, Number.MAX_SAFE_INTEGER),
            c = a.pagelets.reduce(function(a, b) {
                return "vcWithoutImage" in b.points && b.data.lateMutation ? Math.max(a, b.points.vcWithoutImage) : a
            }, Number.MIN_SAFE_INTEGER);
        b !== Number.MAX_SAFE_INTEGER && c !== Number.MIN_SAFE_INTEGER && a.annotations.set("SsrPageletLmCost", c - b)
    }
    var Q = b("performanceNavigationStart")(),
        R = new Set(),
        S, T = null,
        U = new Set(),
        la = 1;

    function ma(a, b) {
        if (typeof window.qpl_tag === "function") {
            b.tagSet.CometTags || (b.tagSet.CometTags = new Set());
            var c = b.type === "INITIAL_LOAD" || b.type === "NAVIGATION",
                d = b.tagSet.CometTags;
            b = window.qpl_tag();
            b && b.length && b.forEach(function(b) {
                b && b.length && b.forEach(function(b) {
                    d.add(b), c && a.VisualCompletion && a.VisualCompletion.addTag("CometTags", b)
                })
            })
        }
    }

    function na(c, d, e, f, g) {
        var a = p(d, e);
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addHiddenTiming(c, a);
        a.length > 0 && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(c, "backgrounded", "AppTiming", a[0].start);
        f.metadata.hidden === void 0 && g.addMetadata("hidden", r(d, e))
    }

    function oa(a, c) {
        var d;
        d = (d = c.completed) !== null && d !== void 0 ? d : (g || (g = b("performanceNow")))();
        var e = c.markerPoints.visuallyComplete ? c.markerPoints.visuallyComplete.timestamp : d,
            f = [],
            h = null;
        a.forEach(function(a) {
            !a.isOnline ? (h = a.timestamp, h < e && (c.wasOffline = !0)) : h != null && (f.push({
                end: a.timestamp,
                start: h
            }), h = null)
        });
        h != null && f.push({
            end: d,
            start: h
        });
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addOfflineTiming(c.traceId, f)
    }

    function pa(a, c, d) {
        var e;
        d.interactionClass && c.addMetadata("interactionClass", d.interactionClass);
        var f = d.start;
        e = (e = d.completed) !== null && e !== void 0 ? e : (g || (g = b("performanceNow")))();
        na(d.traceId, f, e, d, c);
        c.addMetadata("navStartOffset", d.start);
        if (a.getMetadata) {
            var h = a.getMetadata();
            Object.keys(h).forEach(function(a) {
                c.addMetadata(a, h[a])
            })
        }
        a.pkgCohort != null && c.addMetadata("pkg_cohort", a.pkgCohort)
    }

    function qa(a) {
        var c = a.traceId;
        a = b("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(c);
        a.forEach(function(a) {
            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(c, "pendingPlaceholder", a)
        })
    }

    function ra(a, b, c) {
        var d = b.getReactComponentStackFromDOMElement;
        d && a.logVCReactStack && c.onBeforeComplete(function(a) {
            a && ["vcWithoutImage", "visuallyComplete"].forEach(function(b) {
                b = a.markerPoints.get(b);
                if (b && b.element) {
                    var c = d(b.element);
                    if (c != null) {
                        var e = c.indexOf("HeroPagelet");
                        e >= 0 && c.splice(e);
                        e = b.data || {};
                        e.reactStack = c;
                        b.data = e
                    }
                }
            })
        })
    }

    function sa(a, b, c, d) {
        c.onBeforeComplete(function(c) {
            if (!c) return;
            ba(a, b, c, d)
        })
    }

    function ta(a, b) {
        var c;
        (c = a.vcTracker) === null || c === void 0 ? void 0 : c.onComplete(function(c) {
            c && (a.vcStateLog = c.stateLog, a.hasVcReport = !0, c.annotations.forEach(function(b, c) {
                a.metadata[c] = b
            }), c.markerPoints.forEach(function(b, c) {
                var d = b.data;
                b = b.timestamp;
                a.markerPoints[c] = {
                    data: d,
                    timestamp: b + a.start,
                    type: "VisualCompletion"
                }
            }), c.tagSet.forEach(function(a, c) {
                a.forEach(function(a) {
                    b.addTag(c, a)
                })
            }))
        })
    }

    function V(a) {
        return a.metadata.isError ? "ERROR" : a.wasOffline ? "OFFLINE" : a.metadata.cancelType === "timeout" ? "TIMEOUT" : a.wasCanceled || a.metadata.aborted ? "CANCEL" : "SUCCESS"
    }
    var ua = 0,
        W = new Map(),
        X = {
            checkAndMarkRevisit: function(a) {
                if (a == null) return !1;
                var b = U.has(a);
                U.add(a);
                return b
            },
            getCurrentTabTracePolicy: function() {
                var a;
                return (a = T) !== null && a !== void 0 ? a : "comet.app"
            },
            setCurrentTabTracePolicy: function(a) {
                T = a
            },
            onStartInteraction: function(a) {
                var b = ua++;
                W.set(b, a);
                return function() {
                    W["delete"](b)
                }
            },
            startInteraction: function(a, c) {
                c === void 0 && (c = function() {});
                var d = b("hero-tracing").HeroLogger.genHeroInteractionUUIDAndMarkStart(a.interactionID);
                return X.trace(a.cfg, a.deps, a.qplEvent, c, a.interactionClass, a.traceType, a.tracePolicy, d, a.startTime, a.eventQueueTime, a.debugName)
            },
            trace: function(a, c, d, e, f, h, i, j, k, l, m) {
                j === void 0 && (j = b("uuid")());
                l === void 0 && (l = null);
                var n = k !== null && k !== void 0 ? k : h === "INITIAL_LOAD" ? 0 : (g || (g = b("performanceNow")))(),
                    o = [],
                    p = T,
                    q = la++,
                    r = i,
                    s = a.enableMemoryLogging ? b("MemoryUtils").getCurrentMemory().usedJSHeapSize : null;
                S || (S = b("Run").onBeforeUnload(function() {
                    R.forEach(function(a) {
                        a.cancelTrace("unload", !0)
                    }), S && S.remove(), S = null
                }, !1));

                function t(a, d) {
                    return b("regeneratorRuntime").async(function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (!(y != null)) {
                                    e.next = 5;
                                    break
                                }
                                if (!(F.length > 0)) {
                                    e.next = 4;
                                    break
                                }
                                e.next = 4;
                                return b("regeneratorRuntime").awrap(b("Promise").all(F));
                            case 4:
                                c.WebLoom.endTraceForInteraction(a, d);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, null, this)
                }
                var u = {
                        addGlobalMetadata: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addGlobalMetadata(j, a, c)
                        },
                        addLoomTraceEndDependency: function(a) {
                            F.push(a)
                        },
                        addMarkerPoint: function(a, c, d) {
                            d === void 0 && (d = (g || (g = b("performanceNow")))()), b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(j, a, c, d)
                        },
                        addMetadata: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(j, a, c)
                        },
                        addTag: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(j, a, c)
                        },
                        cancelTrace: function(a, c) {
                            var d = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(j);
                            if (!d || !R.has(u)) return;
                            d.completed == null && (d.completed = (g || (g = b("performanceNow")))());
                            qa(d);
                            var e = [].concat(B);
                            B.length = 0;
                            e.forEach(function(a) {
                                a(d)
                            });
                            u.addMetadata("cancelType", a);
                            d.wasCanceled = !0;
                            c ? v(d, !0) : b("JSScheduler").scheduleLoggingPriCallback(function() {
                                v(d, !0)
                            })
                        },
                        getTraceId: function() {
                            return j
                        },
                        observeMutation: function(a) {
                            c.InteractionVC && c.InteractionVC.observeMutation(j, a)
                        },
                        onComplete: function(a) {
                            A.push(a)
                        },
                        onCompleteSync: function(a) {
                            B.push(a)
                        },
                        onLog: function(a) {
                            C.push(a)
                        },
                        onBeforeLog: function(a) {
                            D.push(a)
                        },
                        onVcMetricsComplete: function(a) {
                            E.push(a)
                        },
                        setTracePolicy: function(e) {
                            if (e == null) return;
                            b("one-trace").setTracePolicy(j, e);
                            r = e;
                            u.addMetadata("tracePolicy", r);
                            if (y == null && a.disableLoomTrace !== !0) {
                                e = c.WebLoom.maybeStartTraceForInteraction(j, f, d, r, n);
                                y = e === null || e === void 0 ? void 0 : e.traceReferenceId;
                                z = e === null || e === void 0 ? void 0 : e.loomProviders
                            }
                            e = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(j);
                            e && e.vcTracker && e.vcTracker.setTracePolicy(r)
                        }
                    },
                    v = function(e, f) {
                        var g;
                        if (!R.has(u)) return;
                        ma(c, e);
                        u.addMetadata("tracePolicy", (g = r) !== null && g !== void 0 ? g : a.defaultTracePolicy);
                        p != null && u.addMetadata("referrer", p);
                        u.addMetadata("interactionId", j);
                        if (s != null) {
                            g = b("MemoryUtils").getCurrentMemory().usedJSHeapSize;
                            g != null && (u.addMetadata("usedJSHeapSizeStart", s), u.addMetadata("usedJSHeapSizeEnd", g))
                        }
                        pa(a, u, e);
                        c.VisualCompletion && G != null && G();
                        g = [].concat(A);
                        A.length = 0;
                        g.forEach(function(a) {
                            a(e)
                        });
                        y != null && u.addMetadata("loomRefId", y);
                        z != null && z.forEach(function(a) {
                            return u.addTag("loomProviders", a)
                        });
                        var i = function() {
                            var f;
                            if (!R.has(u)) return;
                            b("clearTimeout")(I);
                            w.remove();
                            R["delete"](u);
                            oa(o, e);
                            (f = c.HeroBootloadPerfStore) === null || f === void 0 ? void 0 : f.addStaticResourcesStats(e);
                            f = [].concat(D);
                            D.length = 0;
                            f.forEach(function(a) {
                                a(e)
                            });
                            f = V(e);
                            var g = O(a, c, d, f, e, q);
                            e.qplAction = g;
                            e.traceStatus = f;
                            e.debugName = m;
                            f = [].concat(C);
                            C.length = 0;
                            f.forEach(function(a) {
                                a(e, V(e))
                            });
                            delete e.vcTracker;
                            e.lateMutationIgnoreElements.clear();
                            t(e, g);
                            aa(c, e, h);
                            setTimeout(function() {
                                b("interaction-tracing-metrics").InteractionTracingMetricsCore["delete"](j)
                            }, 30 * 6e4)
                        };
                        g = e.vcTracker;
                        g && !e.hasVcReport ? (g.onComplete(function() {
                            i()
                        }), f && g.forceMeasurement()) : i()
                    };
                b("NetworkStatus").isOnline() || o.push({
                    isOnline: !1,
                    timestamp: (g || (g = b("performanceNow")))()
                });
                var w = b("NetworkStatus").onChange(function(a) {
                        o.push({
                            isOnline: a.online,
                            timestamp: (g || (g = b("performanceNow")))()
                        })
                    }),
                    y, z;
                if (r != null && a.disableLoomTrace !== !0) {
                    k = c.WebLoom.maybeStartTraceForInteraction(j, f, d, r, n);
                    y = k === null || k === void 0 ? void 0 : k.traceReferenceId;
                    z = k === null || k === void 0 ? void 0 : k.loomProviders
                }
                N(c, d, n, q);
                var A = [],
                    B = [],
                    C = [],
                    D = [],
                    E = [],
                    F = [],
                    G = null;
                c.VisualCompletion && (G = c.VisualCompletion.addTracedInteraction(h, j, d));
                b("one-trace").startTrace(j, i, h, n);
                var H = b("one-trace").subscribe("trace-end", function(a) {
                    if (a.traceType === "LONGTASK" || a.traceType === "INPUT_DELAY") {
                        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(j, a.traceType, "Longtask", a.startTime, (a = a.endTime) !== null && a !== void 0 ? a : (g || (g = b("performanceNow")))(), {})
                    }
                });
                u.onLog(function(a, c) {
                    H();
                    b("one-trace").endTrace(j, (c = a.completed) !== null && c !== void 0 ? c : (g || (g = b("performanceNow")))(), V(a))
                });
                var I = b("setTimeoutAcrossTransitions")(function() {
                    u.cancelTrace("timeout", !1)
                }, a.timeout);
                k = function(a) {
                    var d;
                    if (!R.has(u)) return;
                    c.VCTracker && ((d = a.vcTracker) === null || d === void 0 ? void 0 : d.unlock(c.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD));
                    a.completed == null && (a.completed = (g || (g = b("performanceNow")))());
                    d = [].concat(B);
                    B.length = 0;
                    d.forEach(function(b) {
                        b(a)
                    });
                    if (a.type === "INITIAL_LOAD" && document.readyState === "loading") {
                        d = function c() {
                            b("JSScheduler").scheduleLoggingPriCallback(function() {
                                v(a, !1)
                            }), document.removeEventListener("DOMContentLoaded", c)
                        };
                        document.addEventListener("DOMContentLoaded", d)
                    } else b("JSScheduler").scheduleLoggingPriCallback(function() {
                        v(a, !1)
                    })
                };
                b("interaction-tracing-metrics").InteractionTracingMetricsCore.addTracedInteraction(j, n, k);
                b("interaction-tracing-metrics").InteractionTracingMetricsCore.setInteractionType(j, f, h, d);
                var J = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(j);
                switch (h) {
                    case "INITIAL_LOAD":
                        if (c.VisualCompletion) {
                            i = c.VisualCompletion.traceNavigation(j, Q, "INITIAL_LOAD");
                            J && (J.vcTracker = i);
                            a.useDocumentBodyForVCRoot === !0 && (i.observeMutation(window.document.body), i.registerNavigationMutationRoot(window.document.body))
                        }
                        break;
                    case "NAVIGATION":
                        R.forEach(function(d) {
                            var c = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(d.getTraceId());
                            if (!a.navigationCancelsInteractions && c && c.type === "INTERACTION") return;
                            d.cancelTrace("navigation", !1)
                        });
                        if (c.VisualCompletion) {
                            k = c.VisualCompletion.traceNavigation(j, Q + n, "NAVIGATION");
                            J && (J.vcTracker = k);
                            a.useDocumentBodyForVCRoot === !0 && (k.observeMutation(window.document.body), k.registerNavigationMutationRoot(window.document.body))
                        }
                        break;
                    case "INTERACTION":
                        if (c.InteractionVC) {
                            i = c.InteractionVC.startVisualCompletionTrace(j, Q + n, h);
                            J && (J.vcTracker = i)
                        }
                        break
                }
                R.add(u);
                x(u, c, a, function() {
                    return y != null
                });
                r != null && u.setTracePolicy(r);
                if (J && J.vcTracker) {
                    k = J.vcTracker;
                    c.VCTracker && k.lock(c.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD);
                    ra(a, c, k);
                    sa(a, c, k, J);
                    k.onComplete(function(a) {
                        var b = [].concat(E);
                        E.length = 0;
                        a && b.forEach(function(b) {
                            b(J, a)
                        })
                    });
                    ta(J, u);
                    a.setupVcTracker && a.setupVcTracker(k)
                }
                e(u);
                W.forEach(function(a) {
                    return a(u)
                });
                if (l != null) {
                    i = n;
                    b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(j, "EventQueued", "DOMEventTiming", i, i + l, {})
                }
                return j
            },
            getPendingInteractions: function() {
                return new Set(R)
            }
        },
        Y = b("performanceNavigationStart")();

    function Z(a) {
        var c, d = ((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (h || (h = b("performance"))).timing) || {};
        c = ((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (c = (h || (h = b("performance"))).navigation) === null || c === void 0 ? void 0 : c.redirectCount) || 0;
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(a, "redirectCount", c);
        c = typeof(h || (h = b("performance"))).getEntriesByType === "function" ? (h || (h = b("performance"))).getEntriesByType("navigation")[0] : null;
        c !== null && c !== void 0 && c.nextHopProtocol && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(a, "httpProtocol", c.nextHopProtocol);
        c !== null && c !== void 0 && c.type ? b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(a, "navigationType", c.type) : ((c = (h || (h = b("performance"))).navigation) === null || c === void 0 ? void 0 : c.type) != null && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(a, "navigationType", (h || (h = b("performance"))).navigation.type);
        for (var e in d) typeof d[e] === "number" && d[e] >= Y && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(a, e, "NavigationTiming", d[e] - Y)
    }

    function va(a) {
        var c = document.referrer;
        if (typeof c === "string") {
            c = /^\w+:\/\/[^\/]+/.exec(c);
            c && c[0] && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(a, "referrer", c[0])
        }
    }

    function $(a, c) {
        if (c != null) {
            X.setCurrentTabTracePolicy(c);
            c = X.checkAndMarkRevisit(c);
            c ? b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(a, "revisit", 1) : b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(a, "revisit", 0)
        }
    }

    function c(a, c) {
        var d, e = (d = a.traceStartTime) !== null && d !== void 0 ? d : (g || (g = b("performanceNow")))();
        return X.startInteraction(a, function(b) {
            var d = b.getTraceId();
            $(d, a.tracePolicy);
            b.setTracePolicy(a.tracePolicy);
            b.addMarkerPoint("traceStart", "AppTiming", e);
            b.onComplete(function(a) {
                Z(d), va(d)
            });
            c && c(b)
        })
    }

    function d(a, b) {
        return X.startInteraction(a, function(c) {
            var d = c.getTraceId(),
                e = a.tracePolicy;
            $(d, a.tracePolicy);
            c.onComplete(function(a) {
                Z(d)
            });
            var f = babelHelpers["extends"]({}, c, {
                setTracePolicy: function(a) {
                    if (e == null) {
                        a = a;
                        $(d, a);
                        a != null && c.setTracePolicy(a)
                    }
                }
            });
            b && b(f)
        })
    }
    f = {
        traceInitialLoad: c,
        traceNavigation: d
    };
    c = {
        InteractionTracingCore: X,
        NavigationTracing: f,
        logServerTimings: a
    };
    e.exports = c
}), null);
__d("CometEntryPointPopoverTrigger.react", ["BasePopoverTrigger.react", "CometPopoverLoadingState.react", "CometRelay", "deepEquals", "react", "tracePolicyFromResource", "useCometPopoverInteractionTracing", "useCometRelayEntrypointContextualEnvironmentProvider"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useLayoutEffect,
        k = b.useMemo,
        l = b.useRef;

    function m(a) {
        a.entryPointParams;
        var b = a.entryPointReference,
            c = a.load,
            e = a.otherProps,
            f = babelHelpers.objectWithoutPropertiesLoose(a, ["entryPointParams", "entryPointReference", "load", "otherProps"]);
        a = k(function() {
            return babelHelpers["extends"]({}, e, f)
        }, [e, f]);
        j(function() {
            b == null && c()
        }, [b, c]);
        return b == null ? null : h.jsx(d("CometRelay").EntryPointContainer, {
            entryPointReference: b,
            props: a
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.doNotCloseOnOutsideClick,
            e = a.entryPointParams,
            f = a.fallback,
            g = a.onVisibilityChange,
            j = a.otherProps,
            n = a.popoverEntryPoint,
            o = a.preloadTrigger,
            p = a.tracePolicy;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["doNotCloseOnOutsideClick", "entryPointParams", "fallback", "onVisibilityChange", "otherProps", "popoverEntryPoint", "preloadTrigger", "tracePolicy"]);
        p = c("useCometPopoverInteractionTracing")((p = p) != null ? p : c("tracePolicyFromResource")("comet.popover", n.root), "entrypoint", o);
        var q = c("useCometRelayEntrypointContextualEnvironmentProvider")();
        q = d("CometRelay").useEntryPointLoader(q, n);
        var r = q[0],
            s = q[1];
        q = q[2];
        var t = l(null),
            u = i(function() {
                if (e == null) return;
                if (r !== null && c("deepEquals")(t.current, e)) return;
                t.current = e;
                s(e)
            }, [e, r, s]),
            v = k(function() {
                return {
                    entryPointParams: e,
                    entryPointReference: r,
                    load: u,
                    otherProps: j
                }
            }, [e, r, u, j]),
            w = i(function() {
                (arguments.length <= 0 ? void 0 : arguments[0]) && u(), g && g.apply(void 0, arguments)
            }, [u, g]);
        return h.jsx(c("BasePopoverTrigger.react"), babelHelpers["extends"]({
            doNotCloseOnOutsideClick: b,
            fallback: (b = f) != null ? b : h.jsx(c("CometPopoverLoadingState.react"), {
                withArrow: !0
            }),
            interactionTracker: p,
            onHighIntentPreload: u,
            onLayerDetached: q,
            onVisibilityChange: w,
            popover: m,
            popoverPreloadResource: n.root,
            popoverProps: v,
            preloadTrigger: o
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometImage.react", ["BaseImage.react", "CometImageFromIXValue.react", "cr:2010754", "gkx", "mergeRefs", "react", "useFeedImageErrorEventLoggerCbs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useMemo,
        j = e.useRef,
        k = "1";

    function a(a, d) {
        var e = j(null),
            f = i(function() {
                return c("mergeRefs")(e, d)
            }, [e, d]),
            g = a.alt,
            l = a.objectFit,
            m = a.onError,
            n = a.onLoad,
            o = a.src,
            p = a.testid;
        p = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "objectFit", "onError", "onLoad", "src", "testid"]);
        a = c("useFeedImageErrorEventLoggerCbs")({
            onError: m,
            onLoad: n,
            src: o
        });
        m = a._onError;
        n = a._onLoad;
        a = c("gkx")("1690028") ? k : void 0;

        function q(a, c, d, f, g, h) {
            b("cr:2010754") && c === "mount" && e.current != null && typeof o === "string" && b("cr:2010754").trackImagePerf(e.current, h, o, {
                mutationType: "reactCommit"
            })
        }
        if (typeof o === "string") {
            p = h.jsx(c("BaseImage.react"), babelHelpers["extends"]({}, p, {
                alt: g,
                elementtiming: a,
                objectFit: l,
                onError: m,
                onLoad: n,
                ref: f,
                src: o,
                testid: void 0
            }));
            return c("gkx")("1690028") ? h.jsx(h.Profiler, {
                id: k,
                onRender: q,
                children: p
            }) : p
        }
        return h.jsx(c("CometImageFromIXValue.react"), {
            alt: g,
            ref: f,
            source: o,
            testid: void 0
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = h.forwardRef(a);
    g["default"] = d
}), 98);
__d("CometMenuSeparator.react", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        return h.jsx("hr", {
            className: "aov4n071 dhix69tm wkznzc2l bi6gxh9e pwoa4pd7",
            ref: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("BaseMultiStepContainerContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("BaseMultiStepContainer.react", ["BaseMultiStepContainerContext", "BaseView.react", "FocusRegion.react", "HiddenSubtreeContextProvider.react", "Locale", "emptyFunction", "focusScopeQueries", "mergeRefs", "react", "recoverableViolation", "stylex", "testID", "useDebounced", "useDynamicCallbackDANGEROUS", "usePrevious", "useResizeObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useEffect,
        k = b.useMemo,
        l = b.useRef,
        m = b.useState,
        n = d("Locale").isRTL(),
        o = {
            page: {
                opacity: "b5wmifdl",
                pointerEvents: "hzruof5a",
                transitionDuration: "ms05siws",
                transitionProperty: "pnx7fd3z",
                transitionTimingFunction: "b7h9ocf4"
            },
            pageAbsolute: {
                position: "pmk7jnqg",
                start: "j9ispegn"
            },
            pageFullWidth: {
                width: "k4urcfbm"
            },
            pageHidden: {
                visibility: "kr9hpln1"
            },
            pageVisible: {
                opacity: "pedkr2u6",
                pointerEvents: "oqq733wu"
            },
            root: {
                height: "idiwt2bm",
                outline: "lzcic4wl",
                overflowX: "ni8dbmo4",
                overflowY: "stjgntxs",
                position: "l9j0dhe7",
                width: "dbpd2lw6"
            },
            rootWithAnimations: {
                transform: "h3qk65th",
                transitionDuration: "ms05siws",
                transitionProperty: "s48hqc9n",
                transitionTimingFunction: "b7h9ocf4"
            }
        },
        p = {
            bottom: {
                bottom: "i09qtzwb"
            },
            top: {
                top: "kr520xx4"
            }
        };

    function q(a) {
        var b = a.children,
            d = a.currentPageComponent,
            e = a.fallback,
            f = a.popPage,
            g = a.pushPage;
        a = k(function() {
            return d != null ? {
                fallback: e,
                popPage: function(a) {
                    f(d, a)
                },
                pushPage: g
            } : {
                fallback: e,
                pushPage: g
            }
        }, [d, e, f, g]);
        return h.jsx(c("BaseMultiStepContainerContext").Provider, {
            value: a,
            children: b
        })
    }
    q.displayName = q.name + " [from " + f.id + "]";

    function a(a, b) {
        var e = a.align,
            f = e === void 0 ? "top" : e;
        e = a.children;
        var g = a.disableFocusContainment,
            r = g === void 0 ? !1 : g;
        g = a.disableInitialAutoFocus;
        g = g === void 0 ? !1 : g;
        var s = a.fallback,
            t = a.fitContentWidth,
            u = t === void 0 ? !1 : t;
        t = a.onPageChange;
        a = t === void 0 ? c("emptyFunction") : t;
        t = m([]);
        var v = t[0],
            w = t[1];
        t = m(!1);
        var x = t[0],
            y = t[1];
        t = m(0);
        var z = t[0],
            A = t[1],
            B = l(null);
        t = m(!1);
        var C = t[0],
            D = t[1],
            E = i(function(a, b) {
                var c = B.current;
                c != null && (c.style.setProperty("height", a + "px"), u ? c.style.setProperty("width", b + "px") : c.style.removeProperty("width"), D(!0))
            }, [u]);
        t = i(function(a) {
            return E(a.height, a.width)
        }, [E]);
        var F = c("useResizeObserver")(t),
            G = i(function(a) {
                a != null && E(a.clientHeight, a.clientWidth), F(a)
            }, [F, E]),
            H = c("useDebounced")(function(a) {
                window.requestAnimationFrame(function() {
                    y(!0), A(function(b) {
                        w(function(c) {
                            return c.slice(0, b).concat(a)
                        });
                        return b + 1
                    })
                })
            }, 350, !0),
            I = i(function(a, b) {
                window.requestAnimationFrame(function() {
                    var d = v.indexOf(a),
                        e = b == null ? void 0 : b.index;
                    if (e != null && e > d) {
                        c("recoverableViolation")("Attempting to return to page with index " + e + ", which does not  exist. Please provide an index less than " + d + " and greater than or equal to 0.", "BaseMultiStepContainer");
                        return
                    }
                    e = (e = e) != null ? e : d;
                    if (e < 0) {
                        c("recoverableViolation")("Attempting to close a page that does not exist anymore.", "BaseMultiStepContainer");
                        return
                    }
                    y(!0);
                    A(e)
                })
            }, [v]),
            J = c("useDynamicCallbackDANGEROUS")(a);
        j(function() {
            J && J(z)
        }, [J, z]);
        t = i(function() {
            return y(!1)
        }, []);
        a = i(function(a) {
            a.currentTarget.scrollLeft = 0, a.currentTarget.scrollTop = 0
        }, []);
        var K = k(function() {
                return c("mergeRefs")(B, b)
            }, [b]),
            L = c("usePrevious")(z);
        return h.jsx(d("FocusRegion.react").FocusRegion, {
            autoRestoreFocus: !0,
            recoverFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
            children: h.jsx("div", babelHelpers["extends"]({}, c("testID")("BaseMultiStepContainer"), {
                className: c("stylex")(o.root, x && o.rootWithAnimations),
                onScroll: a,
                onTransitionEnd: t,
                ref: K,
                children: [h.jsx(c("BaseView.react"), {
                    "aria-hidden": z !== 0 ? !0 : void 0,
                    ref: z === 0 ? G : null,
                    style: {
                        transform: "translateX(" + (n ? 1 : -1) * z + "00%) translateZ(1px)"
                    },
                    testid: void 0,
                    xstyle: [o.page, C && o.pageAbsolute, p[f], z === 0 ? o.pageVisible : !x && o.pageHidden, !u && o.pageFullWidth],
                    children: h.jsx(d("FocusRegion.react").FocusRegion, {
                        autoFocusQuery: z === 0 && (!g || L === 1) ? d("focusScopeQueries").tabbableScopeQuery : null,
                        containFocusQuery: r ? null : d("focusScopeQueries").tabbableScopeQuery,
                        children: h.jsx(c("HiddenSubtreeContextProvider.react"), {
                            isHidden: z !== 0,
                            children: h.jsx(q, {
                                fallback: s,
                                popPage: I,
                                pushPage: H,
                                children: typeof e === "function" ? e(H) : e
                            })
                        })
                    })
                }, 0)].concat(v.map(function(a, b) {
                    return h.jsx(c("BaseView.react"), {
                        "aria-hidden": z !== b + 1 ? !0 : void 0,
                        ref: z === b + 1 ? G : null,
                        style: {
                            transform: "translateX(" + (n ? 1 : -1) * (z - b - 1) + "00%) translateZ(1px)"
                        },
                        xstyle: [o.page, o.pageAbsolute, p[f], z === b + 1 ? o.pageVisible : !x && o.pageHidden, !u && o.pageFullWidth],
                        children: h.jsx(d("FocusRegion.react").FocusRegion, {
                            autoFocusQuery: z === b + 1 ? d("focusScopeQueries").tabbableScopeQuery : null,
                            containFocusQuery: r ? null : d("focusScopeQueries").tabbableScopeQuery,
                            children: h.jsx(c("HiddenSubtreeContextProvider.react"), {
                                isHidden: z !== b + 1,
                                children: h.jsx(q, {
                                    currentPageComponent: a,
                                    fallback: s,
                                    popPage: I,
                                    pushPage: H,
                                    children: h.jsx(a, {
                                        onReturn: function(b) {
                                            return I(a, b)
                                        }
                                    })
                                })
                            })
                        })
                    }, b + 1)
                }), [h.jsx(c("BaseView.react"), {
                    "aria-hidden": !0,
                    style: {
                        transform: "translateX(" + (n ? 1 : -1) * (z - v.length - 1) + "00%) translateZ(1px)"
                    },
                    xstyle: [o.page, o.pageAbsolute, !u && o.pageFullWidth]
                }, v.length + 1)])
            }))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("CometMultiStepDialogCloseContext", ["react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function() {
        c("recoverableViolation")("Trying to consume CometMultiStepDialogCloseContext with no Provider", "comet_ui")
    });
    g["default"] = b
}), 98);
__d("CometMultiStepDialogHeader.react", ["fbt", "ix", "CometCircleButton.react", "CometTrackingNodeProvider.react", "Locale", "TetraText.react", "fbicon", "react", "useIsCometOnMobile.hybrid"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = c("Locale").isRTL();

    function a(a) {
        var b = a.buttonType,
            e = a.closeButtonTestId;
        e = e === void 0 ? "close_button" : e;
        e = a.iconCssSelectorId;
        var f = a.onBack,
            g = a.onClose,
            l = a.title,
            m = a.withCloseButton;
        m = m === void 0 ? !1 : m;
        var n = a.withoutBackButton;
        n = n === void 0 ? !1 : n;
        a = a.withoutBottomBorder;
        a = a === void 0 ? !1 : a;
        var o = c("useIsCometOnMobile.hybrid")(),
            p = b == null ? "secondary" : void 0;
        return j.jsxs(j.Fragment, {
            children: [l != null ? j.jsx("div", {
                className: "taijpn5t cb02d2ww j83agx80 linmgsc8 bp9cbjyn" + (m || !n ? " bjjun2dj clqubjjj" : "") + (a ? " d06cv69u" : ""),
                children: j.jsx(c("TetraText.react"), {
                    isSemanticHeading: !0,
                    numberOfLines: 1,
                    type: o ? "headlineEmphasized3" : "headlineEmphasized2",
                    children: l
                })
            }) : null, n ? null : j.jsx("div", {
                className: "tkr6xdv7 fcg2cn6m re5koujm pmk7jnqg",
                "data-testid": void 0,
                id: e,
                children: j.jsx(c("CometCircleButton.react"), {
                    color: p,
                    icon: k ? d("fbicon")._(i("514454"), 20) : d("fbicon")._(i("512647"), 20),
                    label: h._( /*FBT_CALL*/ "Back" /*FBT_CALL*/ ),
                    onPress: f,
                    size: 36,
                    type: b
                })
            }), m ? j.jsx(c("CometTrackingNodeProvider.react"), {
                trackingNode: 141,
                children: j.jsx("div", {
                    className: "tkr6xdv7 fcg2cn6m pmk7jnqg cypi58rs",
                    "data-testid": void 0,
                    id: e,
                    children: j.jsx(c("CometCircleButton.react"), {
                        color: p,
                        icon: d("fbicon")._(i("478233"), 20),
                        label: h._( /*FBT_CALL*/ "Close" /*FBT_CALL*/ ),
                        onPress: g,
                        size: 36,
                        type: b
                    })
                })
            }) : null]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometMultiStepDialogClosingHeader.react", ["CometMultiStepDialogCloseContext", "CometMultiStepDialogHeader.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext;

    function a(a) {
        var b = i(c("CometMultiStepDialogCloseContext"));
        return h.jsx(c("CometMultiStepDialogHeader.react"), babelHelpers["extends"]({}, a, {
            onClose: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometMultiStepDialogOnReturnContext.react", ["react", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
        i = b.createContext(function() {
            throw c("unrecoverableViolation")("CometMultiStepDialogContext onReturn called outside of a CometMultiStepDialog!", "comet_ui")
        });

    function a() {
        return h(i)
    }
    g.CometMultiStepDialogOnReturnContext = i;
    g.useCometMultiStepDialogOnReturn = a
}), 98);
__d("CometMultiStepDialogPushPageContext.react", ["react", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
        i = b.createContext(function() {
            throw c("unrecoverableViolation")("CometMultiStepDialogContext pushPage called outside of a CometMultiStepDialog!", "comet_ui")
        });

    function a() {
        return h(i)
    }
    g.CometMultiStepDialogPushPageContext = i;
    g.useCometMultiStepDialogPushPage = a
}), 98);
__d("CometMultiStepDialog.react", ["BaseDialog.react", "BaseHeadingContextWrapper.react", "BaseMultiStepContainer.react", "CometHideLayerOnEscape.react", "CometMultiStepDialogCloseContext", "CometMultiStepDialogClosingHeader.react", "CometMultiStepDialogOnReturnContext.react", "CometMultiStepDialogPushPageContext.react", "emptyFunction", "react", "recoverableViolation", "useIsCometOnMobile.hybrid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useState,
        k = {
            anchor: {
                paddingEnd: "dflh9lhu",
                paddingStart: "scb9dxdr",
                paddingTop: "q5pvgw0d",
                paddingBottom: "l7iv3u6u",
                "@media (max-width: 564px)": {
                    paddingEnd: "f59ohtjy",
                    paddingStart: "aw1xchsf"
                }
            },
            anchorInMobileEnvironment: {
                paddingTop: "jb3vyjys",
                paddingBottom: "qt6c0cv9"
            },
            card: {
                backgroundColor: "cwj9ozl2",
                borderTopStartRadius: "io0zqebd",
                borderTopEndRadius: "m5lcvass",
                borderBottomEndRadius: "fbipl8qg",
                borderBottomStartRadius: "nwvqtn77",
                boxShadow: "nwpbqux9",
                "@media (max-width: 564px)": {
                    borderTopStartRadius: "iy3k6uwz",
                    borderTopEndRadius: "e9a99x49",
                    borderBottomEndRadius: "g8p4j16d",
                    borderBottomStartRadius: "bv25afu3"
                }
            },
            rootInMobileEnvironment: {
                justifyContent: "jifvfom9"
            }
        },
        l = {
            content: {
                maxWidth: "d2edcug0"
            },
            "content-mobile-safe": {
                width: "k4urcfbm"
            },
            medium: {
                maxWidth: "pwh3vvf2",
                width: "k4urcfbm"
            },
            small: {
                maxWidth: "gc7gaz0o",
                width: "k4urcfbm"
            }
        };

    function a(a, b) {
        var d = a.anchorXStyle,
            e = a.buttonType,
            f = a.children,
            g = a.closeButtonTestId,
            i = g === void 0 ? "close_button" : g;
        g = a.disableClosingWithMask;
        g = g === void 0 ? !1 : g;
        var j = a.iconCssSelectorId,
            n = a.onClose;
        n = n === void 0 ? c("emptyFunction") : n;
        var o = a.onPageChange,
            p = a.size;
        p = p === void 0 ? "small" : p;
        var q = a.testid,
            r = a.title;
        q = a.labelledBy;
        var s = a.withCloseButton,
            t = s === void 0 ? !1 : s;
        s = a.withDeprecatedStyles;
        s = s === void 0 ? !0 : s;
        a = a.xstyle;
        var u = c("useIsCometOnMobile.hybrid")();
        p = p === "content-mobile-safe" && !u ? "content" : p;
        t === !0 && n == null && c("recoverableViolation")("CometMultiStepDialog: withCloseButton is set to true without being provided an onClose handler. Please provide an onClose handler, or set withCloseButton to false", "comet_ui");
        return h.jsx(c("BaseDialog.react"), {
            anchorXStyle: [k.anchor, u && k.anchorInMobileEnvironment, d],
            "aria-label": q != null ? void 0 : (d = r) != null ? d : void 0,
            "aria-labelledby": q,
            disableClosingWithMask: g,
            onClose: n,
            rootXStyle: u && k.rootInMobileEnvironment,
            testid: void 0,
            withDeprecatedStyles: s,
            xstyle: [k.card, l[p], a],
            children: h.jsx(c("CometMultiStepDialogCloseContext").Provider, {
                value: n,
                children: h.jsx(c("BaseMultiStepContainer.react"), {
                    fitContentWidth: p === "content",
                    onPageChange: o,
                    ref: b,
                    children: function(a) {
                        return h.jsxs(h.Fragment, {
                            children: [h.jsx(c("CometMultiStepDialogClosingHeader.react"), {
                                buttonType: e,
                                closeButtonTestId: i,
                                iconCssSelectorId: j,
                                title: r,
                                withCloseButton: t,
                                withoutBackButton: !0
                            }), h.jsx(c("BaseHeadingContextWrapper.react"), {
                                children: h.jsx(m, {
                                    buttonType: e,
                                    closeButtonTestId: i,
                                    iconCssSelectorId: j,
                                    pushMultiStepContainerPage: a,
                                    withCloseButton: t,
                                    children: f
                                })
                            })]
                        })
                    }
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m(a) {
        var b = a.buttonType,
            e = a.children,
            f = a.closeButtonTestId,
            g = a.iconCssSelectorId,
            k = a.pushMultiStepContainerPage,
            l = a.withCloseButton,
            m = i(function(a, e) {
                e = e === void 0 ? {} : e;
                var i = e.title,
                    n = e.withoutBackButton,
                    o = n === void 0 ? !1 : n;
                n = e.withoutCloseButton;
                var p = n === void 0 ? !1 : n;
                k(function(e) {
                    e = e.onReturn;
                    var k = j(i),
                        n = k[0];
                    k = k[1];
                    return h.jsxs(c("CometHideLayerOnEscape.react"), {
                        onHide: e,
                        children: [h.jsx(c("CometMultiStepDialogClosingHeader.react"), {
                            buttonType: b,
                            closeButtonTestId: f,
                            iconCssSelectorId: g,
                            onBack: e,
                            title: n,
                            withCloseButton: p ? !1 : l,
                            withoutBackButton: o
                        }), h.jsx(c("BaseHeadingContextWrapper.react"), {
                            children: h.jsx(d("CometMultiStepDialogPushPageContext.react").CometMultiStepDialogPushPageContext.Provider, {
                                value: m,
                                children: h.jsx(d("CometMultiStepDialogOnReturnContext.react").CometMultiStepDialogOnReturnContext.Provider, {
                                    value: e,
                                    children: h.jsx(a, {
                                        onReturn: e,
                                        setTitle: k
                                    })
                                })
                            })
                        })]
                    })
                })
            }, [b, f, g, k, l]);
        return h.jsx(d("CometMultiStepDialogPushPageContext.react").CometMultiStepDialogPushPageContext.Provider, {
            value: m,
            children: e(m)
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("CometMouseActivity", ["clearTimeout", "removeFromArray", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 50,
        i = [],
        j = null;

    function k() {
        i.length > 0 && i.forEach(function(a) {
            return a()
        }), j = null
    }

    function l() {
        c("clearTimeout")(j), j = c("setTimeout")(function() {
            k()
        }, h)
    }
    var m = !1;

    function n() {
        m || (window.addEventListener("mousemove", l), m = !0);
        return function() {
            window.removeEventListener("mousemove", l)
        }
    }

    function a(a) {
        m || n();
        i.push(a);
        return function() {
            c("removeFromArray")(i, a)
        }
    }
    b = {
        addOnMouseStopCallback: a,
        init: n
    };
    d = b;
    g["default"] = d
}), 98);
__d("useCometPreloaderImpl", ["Bootloader", "CometMouseActivity", "JSScheduler", "clearTimeout", "ifRequired", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect,
        j = b.useRef;

    function k(a) {
        return a.pointerType === "mouse"
    }

    function l(a) {
        a && (typeof a === "function" ? a() : a.preload())
    }
    var m = 50;

    function a(a, b, d, e) {
        var f = j(null),
            g = j(null),
            n = j(null),
            o = function(a) {
                c("ifRequired")("setTimeoutCometInternals", function(b) {
                    f.current = b.setTimeoutAtPriority_DO_NOT_USE(c("JSScheduler").priorities.unstable_UserBlocking, a, m)
                }, function() {
                    f.current = c("setTimeout")(a, m)
                })
            },
            p = h(function(e, f) {
                if (a === "tooltip" || (a === "button" || a === "button_aggressive") && b != null) {
                    e = function() {
                        a === "tooltip" ? (l(d), l(b), c("Bootloader").forceFlush()) : (a === "button" || a === "button_aggressive") && (l(b), c("Bootloader").forceFlush()), f && f()
                    };
                    o(e)
                }
                if (a === "button_aggressive") {
                    e = function() {
                        l(d)
                    };
                    n.current != null && (n.current(), n.current = null);
                    n.current = c("CometMouseActivity").addOnMouseStopCallback(e)
                }
            }, [d, b, a]),
            q = h(function() {
                c("clearTimeout")(f.current), f.current = null, e && e(), g.current != null && g.current(), n.current != null && n.current()
            }, [e]),
            r = h(function(b) {
                if (!k(b)) return;
                (a === "button" || a === "button_aggressive") && (l(d), c("Bootloader").forceFlush())
            }, [d, a]),
            s = h(function(a) {
                c("JSScheduler").scheduleSpeculativeCallback(function() {
                    a === !0 && (l(d), l(b), c("Bootloader").forceFlush())
                })
            }, [d, b]);
        i(function() {
            return function() {
                g.current != null && g.current(), n.current != null && n.current(), c("clearTimeout")(f.current)
            }
        }, []);
        return [p, q, r, s]
    }
    g["default"] = a
}), 98);
__d("CometPrerenderer.react", ["HiddenSubtreeContextProvider.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children;
        a = a.prerenderingProps;
        a = a === void 0 ? {} : a;
        var d = a.isVisible;
        d = d === void 0 ? !0 : d;
        a = a.shouldPrerender;
        a = a === void 0 ? !1 : a;
        return d || a ? h.jsx(c("HiddenSubtreeContextProvider.react"), {
            isHidden: !d && a,
            children: b({
                hidden: !d && a
            })
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useCometPrerendererImpl", ["emptyFunction", "react", "useCometPreloader"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = a.useCallback,
        i = a.useState;
    b = function(a, b, d, e, f) {
        var g = i(!1),
            j = g[0],
            k = g[1];
        g = i(!1);
        var l = g[0],
            m = g[1];
        g = c("useCometPreloader")(a, d, e, f);
        var n = g[0],
            o = g[1],
            p = g[2],
            q = g[3];
        d = h(function(b) {
            var c = function() {
                a === "tooltip" && k(!0)
            };
            n(b, c)
        }, [n, a]);
        e = h(function() {
            o(), k(!1)
        }, [o]);
        f = h(function(b) {
            p(b), (a === "button" || a === "button_aggressive") && k(!0)
        }, [p, a]);
        g = h(function(a) {
            q(a), m(a)
        }, [q]);
        if (a == null) return [{
            isVisible: b,
            shouldPrerender: !1
        }, c("emptyFunction"), c("emptyFunction"), c("emptyFunction"), c("emptyFunction")];
        b = {
            isVisible: b,
            shouldPrerender: j || l
        };
        return [b, d, e, f, g]
    };
    e = b;
    g["default"] = e
}), 98);
__d("TetraProfilePhoto.react", ["CometProfilePhoto.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        return h.jsx(c("CometProfilePhoto.react"), babelHelpers["extends"]({}, a, {
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometPulsePressable.react", ["CometPressable.react", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            positive: {
                backgroundColor: "jllm4f4h"
            },
            primary: {
                backgroundColor: "s1i5eluu"
            }
        },
        j = {
            pulse: {
                animationIterationCount: "ee40wjg4",
                animationName: "q6qhlgob",
                animationTimingFunction: "a5zjgiyk",
                backgroundColor: "s1i5eluu",
                borderTopStartRadius: "qavdm89g",
                borderTopEndRadius: "gsh9l1b6",
                borderBottomEndRadius: "lwukve8w",
                borderBottomStartRadius: "jpyiy761",
                height: "t6na6p9t",
                position: "pmk7jnqg",
                transform: "g3zh7qmp",
                transitionDuration: "ms05siws",
                transitionProperty: "flx89l3n",
                transitionTimingFunction: "heur4gxb",
                width: "c9rrlmt1"
            },
            pulseOne: {
                animationDuration: "jxa0bdb2"
            },
            pulseTwo: {
                animationDelay: "bp95nads",
                animationDuration: "jxa0bdb2"
            },
            pulseZeroHovered: {
                transform: "kjcj55uu"
            },
            wrapper: {
                display: "j83agx80",
                height: "do00u71z",
                transform: "p8redwq5",
                width: "ttbfdpzt"
            }
        };
    a = h.forwardRef(function(a, b) {
        var d = a.pulseColor,
            e = d === void 0 ? "primary" : d;
        d = babelHelpers.objectWithoutPropertiesLoose(a, ["pulseColor"]);
        return h.jsx("span", {
            className: c("stylex")(j.wrapper),
            children: h.jsx(c("CometPressable.react"), babelHelpers["extends"]({
                ref: b
            }, d, {
                xstyle: d.xstyle,
                children: function(a) {
                    a = a.hovered;
                    return h.jsxs(h.Fragment, {
                        children: [h.jsx("span", {
                            className: c("stylex")(j.pulse, a && j.pulseZeroHovered, i[e])
                        }), h.jsx("span", {
                            className: c("stylex")(j.pulse, j.pulseOne, i[e])
                        }), h.jsx("span", {
                            className: c("stylex")(j.pulse, j.pulseTwo, i[e])
                        })]
                    })
                }
            }))
        })
    });
    g["default"] = a
}), 98);
__d("CometPulse.react", ["CometContextualLayer.react", "CometPulsePressable.react", "react", "useCometDisplayTimingTrackerForInteraction"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.contextualLayerProps,
            d = a.pulseProps;
        a = a.targetRef;
        var e = c("useCometDisplayTimingTrackerForInteraction")("pulse-mount");
        return a == null || b == null ? null : h.jsx(c("CometContextualLayer.react"), {
            align: b.align,
            contextRef: a,
            disableAutoAlign: b.disableAutoAlign,
            disableAutoFlip: b.disableAutoFlip,
            position: b.position,
            ref: e,
            children: h.jsx(c("CometPulsePressable.react"), babelHelpers["extends"]({}, d))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useCometPulseBase", ["CometPulse.react", "react", "useMergeRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useRef;

    function a(a) {
        var b = a.additionalPulseProps,
            d = a.calloutRef,
            e = a.contextualLayerProps;
        a = a.shouldShowPulse;
        var f = i(null);
        d = c("useMergeRefs")(d, f);
        return {
            targetRef: d,
            view: a ? h.jsx(c("CometPulse.react"), {
                contextualLayerProps: e,
                pulseProps: b,
                targetRef: f
            }) : null
        }
    }
    g["default"] = a
}), 98);
__d("useCometPulseBaseProps", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;

    function a(a) {
        var b = a.calloutProps,
            c = a.pulseProps;
        a = h(!1);
        var d = a[0],
            e = a[1];
        a = h(!0);
        var f = a[0],
            g = a[1];
        a = babelHelpers["extends"]({}, b, {
            onClose: function() {
                for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                b == null ? void 0 : b.onClose == null ? void 0 : b.onClose.apply(b, c);
                e(!1);
                g(!1)
            }
        });
        var i = babelHelpers["extends"]({}, c, {
            onPress: function() {
                for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
                c == null ? void 0 : c.onPress == null ? void 0 : c.onPress.apply(c, b);
                e(!0);
                g(!1)
            }
        });
        return [f, i, [a, d]]
    }
    g["default"] = a
}), 98);
__d("useCometPulseNUX", ["react", "useCometCallout", "useCometNUXInlineSurvey", "useCometPulseBase", "useCometPulseBaseProps", "useMergeRefs", "useNUX", "useRefEffect", "useVisibilityObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useMemo;

    function a(a, b, d) {
        var e = b.calloutProps,
            f = b.contextualLayerProps,
            g = b.pulseProps,
            j = e.onClose,
            k = e.onHelpful,
            l = e.onHide,
            m = e.onNotHelpful,
            n = e.onShow;
        b = c("useNUX")(a, d);
        a = b[0];
        var o = b[1],
            p = h(function() {
                o.onDismiss(), j && j()
            }, [o, j]),
            q = h(function() {
                o.onRemoved(), o.onHidden(), l && l()
            }, [o, l]),
            r = h(function() {
                o.onVisible(), n && n()
            }, [o, n]),
            s = h(function() {
                o.onHelpful(), k && k()
            }, [o, k]),
            t = h(function() {
                o.onNotHelpful(), m && m()
            }, [o, m]),
            u = c("useCometNUXInlineSurvey")();
        d = i(function() {
            return babelHelpers["extends"]({
                arrowStyle: "inset",
                type: "accent"
            }, e, {
                hasCloseButton: !0,
                inlineSurvey: u,
                onClose: p,
                onHelpful: s,
                onHide: q,
                onNotHelpful: t,
                onShow: r
            })
        }, [e, u, p, s, q, t, r]);
        var v = c("useVisibilityObserver")({
            onVisible: o.onVisible
        });
        b = i(function() {
            return babelHelpers["extends"]({}, g, {
                ref: v
            })
        }, [g, v]);
        d = c("useCometPulseBaseProps")({
            calloutProps: d,
            pulseProps: b
        });
        b = d[0];
        var w = d[1];
        d = d[2];
        var x = d[0];
        d = d[1];
        var y = c("useRefEffect")(function(a) {
            var b = function() {
                o.onDismiss()
            };
            a.addEventListener("click", b, {
                passive: !0
            });
            return function() {
                return a.removeEventListener("click", b, {
                    passive: !0
                })
            }
        }, [o]);
        x = c("useCometCallout")(x, a && d);
        d = c("useCometPulseBase")({
            additionalPulseProps: w,
            calloutRef: x,
            contextualLayerProps: f,
            shouldShowPulse: b
        });
        w = d.targetRef;
        x = d.view;
        return {
            targetRef: c("useMergeRefs")(y, w),
            view: a ? x : null
        }
    }
    g["default"] = a
}), 98);
__d("CometFocusTableContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        FocusCell: null,
        FocusRow: null,
        FocusTable: null
    });
    g["default"] = b
}), 98);
__d("BaseDocumentScrollView.react", ["BaseView.react", "DocumentScrollViewPageOffsetsContext", "HiddenSubtreeContext", "HiddenSubtreeContextProvider.react", "qex", "react", "useLayoutEffect_SAFE_FOR_SSR", "usePrevious", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
        j = e.useContext,
        k = e.useRef,
        l = e.useState,
        m = {
            detached: {
                MsOverflowStyle: "q5bimw55",
                height: "datstx6m",
                overflowX: "d76ob5m9",
                overflowY: "eg9m0zos",
                position: "poy2od1o",
                scrollbarWidth: "ofs802cu",
                start: "j9ispegn",
                top: "kr520xx4",
                width: "k4urcfbm",
                "::-webkit-scrollbar": {
                    display: "pohlnb88",
                    height: "dkue75c7",
                    width: "mb9wzai9"
                }
            }
        },
        n = new Map(),
        o = new Set(),
        p = null;

    function q(a, b) {
        return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING)
    }

    function r() {
        var a = null;
        n.forEach(function(b, c) {
            a == null ? a = c : a != null && c != null && q(a, c) && !o.has(c) && (a = c)
        });
        return a
    }

    function s(a) {
        return p == null || q(p, a)
    }

    function b(b) {
        var d = b.contextKey,
            e = d === void 0 ? null : d;
        d = b.detached;
        d = d === void 0 ? !1 : d;
        var f = b.detachedPageOffsets,
            g = b.hiddenWhenDetached;
        g = g === void 0 ? !1 : g;
        var q = b.maintainScrollForContext,
            t = q === void 0 ? !1 : q,
            u = b.onInitialScroll;
        q = b.resetScrollOnMount;
        var v = q === void 0 ? !0 : q;
        q = babelHelpers.objectWithoutPropertiesLoose(b, ["contextKey", "detached", "detachedPageOffsets", "hiddenWhenDetached", "maintainScrollForContext", "onInitialScroll", "resetScrollOnMount"]);
        var w = k(),
            x = k({
                x: 0,
                y: 0
            }),
            y = c("useStable")(function() {
                return {}
            }),
            z = c("usePrevious")(e);
        b = l(!1);
        var A = b[0],
            B = b[1];
        b = l({
            x: 0,
            y: 0
        });
        var C = b[0],
            D = b[1],
            E = c("usePrevious")(A);
        b = j(c("HiddenSubtreeContext"));
        var F = b.hidden;
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            var a = w.current;
            if (a != null) {
                if (s(a)) {
                    if (p != null) {
                        var b = n.get(p);
                        b && b(!1)
                    }
                    p = a
                } else B(!0);
                n.set(a, function(a) {
                    a || D(babelHelpers["extends"]({}, x.current)), B(!a)
                });
                return function() {
                    n["delete"](a);
                    if (p === a) {
                        p = r();
                        if (p != null) {
                            var b = n.get(p);
                            b && b(!0)
                        }
                    }
                }
            }
        }, []);
        var G = i(function(b, c) {
            a.scrollTo && a.scrollTo(b, c), typeof u === "function" && u(b, c)
        }, [u]);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            (v || E != null) && !A && A !== E && G(C.x, C.y)
        }, [A, C, E, G, v]);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if ((v || z != null) && e !== z) {
                var a = t && e != null && e in y ? y[e] : {
                    x: 0,
                    y: 0
                };
                A ? D(a) : G(a.x, a.y)
            }
        }, [e, y, A, t, z, G, v]);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if (!A) {
                var b = function() {
                    var b = a.pageXOffset,
                        c = a.pageYOffset;
                    x.current = {
                        x: b,
                        y: c
                    };
                    e != null && (y[e] = {
                        x: b,
                        y: c
                    })
                };
                window.addEventListener("scroll", b, {
                    passive: !0
                });
                return function() {
                    return window.removeEventListener("scroll", b, {
                        passive: !0
                    })
                }
            }
        }, [A, e, y]);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            var a = w.current;
            if (a != null)
                if (F) {
                    o.add(a);
                    if (!A) {
                        B(!0);
                        p = r();
                        if (p != null) {
                            var b = n.get(p);
                            b && b(!0)
                        }
                    }
                    return function() {
                        o["delete"](a)
                    }
                } else if (A && a !== p && a === r()) {
                if (p != null) {
                    b = n.get(p);
                    b && b(!1)
                }
                p = a;
                b = n.get(p);
                b && b(!0)
            }
        }, [A, F]);
        b = d || A;
        d = g;
        var H = (c("qex")._("1839372") ? b : A) && !g,
            I = f && c("qex")._("1839372") ? f : C;
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            var a = w.current;
            H && a != null && (a.scrollTop = I.y)
        }, [I.y, H]);
        return h.jsx(c("DocumentScrollViewPageOffsetsContext").Provider, {
            value: x,
            children: h.jsx(c("HiddenSubtreeContextProvider.react"), {
                ignoreParent: !0,
                isBackgrounded: b,
                isHidden: d,
                children: h.jsx(c("BaseView.react"), babelHelpers["extends"]({}, q, {
                    hidden: d
                }, H && {
                    "aria-hidden": !0,
                    id: "scrollview",
                    style: {
                        left: -I.x
                    },
                    xstyle: m.detached
                }, {
                    ref: w
                }))
            })
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b
}), 98);
__d("BaseRadio.react", ["BaseFocusRing.react", "BaseInput.react", "BaseView.react", "mergeRefs", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
        j = b.useMemo,
        k = b.useRef,
        l = {
            radio: {
                cursor: "nhd2j8a9",
                height: "datstx6m",
                marginTop: "kvgmc6g5",
                marginEnd: "cxmmr5t8",
                marginBottom: "oygrvhab",
                marginStart: "hcukyx3x",
                opacity: "b5wmifdl",
                outline: "lzcic4wl",
                paddingTop: "jb3vyjys",
                paddingEnd: "rz4wbd8a",
                paddingBottom: "qt6c0cv9",
                paddingStart: "a8nywdso",
                position: "pmk7jnqg",
                start: "j9ispegn",
                top: "kr520xx4",
                width: "k4urcfbm"
            },
            wrapper: {
                position: "l9j0dhe7"
            }
        };

    function a(a, b) {
        var d = a.children,
            e = a.indeterminate,
            f = e === void 0 ? !1 : e;
        e = a.suppressFocusRing;
        var g = a.testid,
            m = a.xstyle,
            n = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "indeterminate", "suppressFocusRing", "testid", "xstyle"]),
            o = k(null);
        i(function() {
            o.current != null && (o.current.indeterminate = f)
        }, [f]);
        var p = j(function() {
            return c("mergeRefs")(b, o)
        }, [b]);
        return h.jsx(c("BaseFocusRing.react"), {
            suppressFocusRing: e,
            children: function(a) {
                return h.jsxs(c("BaseView.react"), {
                    testid: void 0,
                    xstyle: [l.wrapper, a, m],
                    children: [d, h.jsx(c("BaseInput.react"), babelHelpers["extends"]({}, n, {
                        "aria-checked": f ? "mixed" : (a = n.checked) != null ? a : !1,
                        ref: p,
                        type: "radio",
                        xstyle: l.radio
                    }))]
                })
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.memo(h.forwardRef(a));
    g["default"] = e
}), 98);
__d("CometLinkTrackingUtils.facebook", ["ConstUriUtils", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, e) {
        if (a != null && a !== "#" && (e.length || b.length)) {
            var f = d("ConstUriUtils").getUri(a);
            if (f != null) {
                if (!c("isFacebookURI")(f)) return a;
                e.length && (f = f.addQueryParam("__cft__", e));
                b.length && f != null && (f = f.addQueryParam("__tn__", b.join("")));
                return f != null ? f.toString() : a
            }
        }
        return a
    }
    g.decorateHrefWithTrackingInfo = a
}), 98);
__d("BaseCometModal.react", ["BaseContextualLayerAnchorRoot.react", "BaseDocumentScrollView.react", "BaseHeadingContext", "BasePortal.react", "CometHeroInteractionContextPassthrough.react", "CometHeroInteractionWithDiv.react", "CometLayerKeyCommandWrapper.react", "FocusRegion.react", "HiddenSubtreeContext", "cr:1829844", "focusScopeQueries", "react", "stylex", "useCometVisualChangeTracker", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext,
        j = {
            content: {
                display: "j83agx80",
                flexDirection: "cbu4d94t",
                minHeight: "h3gjbzrl",
                position: "l9j0dhe7"
            },
            hidden: {
                visibility: "kr9hpln1"
            },
            mask: {
                bottom: "i09qtzwb",
                end: "n7fi1qx3",
                position: "poy2od1o",
                start: "j9ispegn",
                top: "kr520xx4"
            },
            maskOverlay: {
                backgroundColor: "ms7hmo2b"
            },
            root: {
                position: "l9j0dhe7"
            },
            rootStatic: {
                position: "hwddc3l5"
            }
        },
        k = {
            "above-everything": {
                zIndex: "tkr6xdv7"
            },
            normal: {
                zIndex: "du4w35lb"
            }
        };

    function a(a) {
        var e = a.blockKeyCommands;
        e = e === void 0 ? !1 : e;
        var f = a.children,
            g = a.contextKey,
            l = a.hidden;
        l = l === void 0 ? !1 : l;
        var m = a.interactionDesc,
            n = a.interactionUUID,
            o = a.isOverlayTransparent;
        o = o === void 0 ? !1 : o;
        a = a.stackingBehavior;
        a = a === void 0 ? "auto" : a;
        var p = i(c("HiddenSubtreeContext"));
        p = p.hidden;
        var q = c("useStable")(function() {
                return n !== void 0
            }),
            r = c("useCometVisualChangeTracker")();
        o = h.jsxs(h.Fragment, {
            children: [h.jsx("div", {
                className: c("stylex")(j.mask, !o && j.maskOverlay)
            }), h.jsx(c("BaseContextualLayerAnchorRoot.react"), {
                children: h.jsx(d("FocusRegion.react").FocusRegion, {
                    autoFocusQuery: d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                    autoRestoreFocus: !0,
                    containFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
                    recoverFocusQuery: d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                    children: e ? f : h.jsx(c("CometLayerKeyCommandWrapper.react"), {
                        debugName: "modal layer",
                        children: f
                    })
                })
            })]
        });
        b("cr:1829844") != null && (o = h.jsx(b("cr:1829844"), {
            name: "modal",
            children: o
        }));
        e = p ? "normal" : a;
        return h.jsx(c("BasePortal.react"), {
            hidden: p,
            xstyle: [e === "auto" ? j.rootStatic : j.root, l && j.hidden, e !== "auto" && k[e]],
            children: h.jsx(c("BaseDocumentScrollView.react"), {
                contextKey: g,
                hiddenWhenDetached: l,
                children: h.jsx(c("BaseHeadingContext").Provider, {
                    value: 1,
                    children: q ? h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
                        clear: !0,
                        children: h.jsx(c("CometHeroInteractionWithDiv.react"), {
                            interactionDesc: m,
                            interactionUUID: n,
                            ref: r,
                            xstyle: j.content,
                            children: o
                        })
                    }) : h.jsx("div", {
                        className: c("stylex")(j.content),
                        ref: r,
                        children: o
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometLazyDialogTrigger.react", ["react", "useCometLazyDialog"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useCallback;

    function a(a) {
        var b = a.children,
            d = a.dialogProps,
            e = a.dialogResource,
            f = a.fallback,
            g = a.onHide,
            i = a.onShow;
        a = c("useCometLazyDialog")(e, f);
        var j = a[0];
        e = a[1];
        f = a[2];
        a = h(function() {
            j(d, g), i == null ? void 0 : i()
        }, [j, d, g, i]);
        return b(a, e, f)
    }
    g["default"] = a
}), 98);
__d("useCometDeferredDialog", ["CometDialogContext", "CometSuspendedDialogImpl.react", "deferredLoadComponent", "react", "tracePolicyFromResource"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useContext,
        j = b.useRef;

    function a(a, b) {
        var d = j(null),
            e = i(c("CometDialogContext")),
            f = h(function(d, f) {
                var g = c("deferredLoadComponent")(a);
                e(c("CometSuspendedDialogImpl.react"), {
                    dialog: g,
                    dialogProps: babelHelpers["extends"]({}, d, {
                        loadImmediately: !0
                    }),
                    fallback: b
                }, {
                    loadType: "deferred",
                    tracePolicy: c("tracePolicyFromResource")("comet.dialog", a)
                }, f)
            }, [e, a, b]);
        return [f, d]
    }
    g["default"] = a
}), 98);
__d("CometIconAppFacebookCircleFilled.react", ["CometSVGIcon.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("CometSVGIcon.react"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 36 36",
            children: [h.jsx("path", {
                d: "M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
            }), h.jsx("path", {
                className: "p361ku9c",
                d: "M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometIconLogo.react", ["CometIconAppFacebookCircleFilled.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.color;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["color"]);
        return h.jsx(c("CometIconAppFacebookCircleFilled.react"), babelHelpers["extends"]({}, a, {
            color: (a = b) != null ? a : h.jsxs("linearGradient", {
                x1: "50%",
                x2: "50%",
                y1: "97.0782153%",
                y2: "0%",
                children: [h.jsx("stop", {
                    offset: "0%",
                    stopColor: "#0062E0"
                }), h.jsx("stop", {
                    offset: "100%",
                    stopColor: "#19AFFF"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("TriangleDownFilled20.svg.react", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs("svg", babelHelpers["extends"]({
            viewBox: "0 0 20 20",
            width: "1em",
            height: "1em"
        }, a, {
            children: [a.title != null && h.jsx("title", {
                children: a.title
            }), a.children != null && h.jsx("defs", {
                children: a.children
            }), h.jsx("path", {
                d: "M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b
}), 98);
__d("CometBackgroundImage.react", ["BaseImage_DEPRECATED.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("BaseImage_DEPRECATED.react"), babelHelpers["extends"]({
            alt: a.alt,
            className: "k4urcfbm bixrwtb6 datstx6m",
            draggable: a.draggable,
            onError: a.onError,
            onLoad: a.onLoad
        }, a.loading ? {
            loading: a.loading
        } : {}, {
            src: a.src
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometCard.react", ["cr:1798173", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react"), g["default"] = b("cr:1798173")
}), 98);
__d("TetraButtonGroup.react", ["CometFocusTableContext", "CometRow.react", "CometRowItem.react", "TetraButton.react", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext,
        j = {
            hiddenButton: {
                height: "do00u71z",
                visibility: "kr9hpln1"
            },
            resetFlexBasis: {
                flexBasis: "mg4g778l"
            }
        };

    function k(a) {
        var b = i(c("CometFocusTableContext"));
        b = b.FocusCell;
        a = a.children;
        return b != null ? h.jsx(b, {
            children: a
        }) : a
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.align,
            d = b === void 0 ? "justify" : b;
        b = a.direction;
        b = b === void 0 ? "forward" : b;
        var e = a.expanding;
        e = e === void 0 ? !1 : e;
        var f = a.paddingHorizontal,
            g = a.paddingTop,
            i = a.primary,
            l = a.secondary,
            m = a.size,
            n = a.verticalAlign,
            o = a.wrap;
        o = o === void 0 ? "none" : o;
        var p = [],
            q = [],
            r = null;
        if (i != null) {
            var s = i.ref,
                t = i.testid;
            t = babelHelpers.objectWithoutPropertiesLoose(i, ["ref", "testid"]);
            r = h.jsx(k, {
                children: h.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, t, {
                    ref: s,
                    size: m,
                    testid: void 0
                }))
            });
            p.push({
                hidden: h.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, t, {
                    disabled: !0,
                    padding: "normal",
                    size: m
                })),
                visible: r
            })
        }
        if (l != null) {
            i = l.ref;
            s = l.testid;
            t = babelHelpers.objectWithoutPropertiesLoose(l, ["ref", "testid"]);
            p.push({
                hidden: h.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, t, {
                    disabled: !0,
                    padding: "normal",
                    size: m,
                    type: "secondary"
                })),
                visible: h.jsx(k, {
                    children: h.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, t, {
                        ref: i,
                        size: m,
                        testid: void 0,
                        type: "secondary"
                    }))
                })
            })
        } else if (a.secondaryIcon != null) q.push(h.jsx(c("CometRowItem.react"), {
            children: h.jsx(k, {
                children: h.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, a.secondaryIcon, {
                    labelIsHidden: !0,
                    size: m,
                    type: "secondary"
                }))
            })
        }, "secondary-icon"));
        else if (a.secondaryIconGroup != null) {
            s = a.secondaryIconGroup;
            l = s.primaryIcon;
            t = s.secondaryIcon;
            q.push(h.jsx(c("CometRowItem.react"), {
                children: h.jsx(k, {
                    children: h.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, l, {
                        labelIsHidden: !0,
                        size: m,
                        type: "secondary"
                    }))
                })
            }, "secondary-icon-1"), h.jsx(c("CometRowItem.react"), {
                children: h.jsx(k, {
                    children: h.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, t, {
                        labelIsHidden: !0,
                        size: m,
                        type: "secondary"
                    }))
                })
            }, "secondary-icon-2"))
        }
        i = p.map(function(a, b) {
            return h.jsx(c("CometRowItem.react"), {
                expanding: d === "justify",
                xstyle: j.resetFlexBasis,
                children: p.map(function(a, d) {
                    return h.jsx(h.Fragment, {
                        children: b !== d ? h.jsx("div", {
                            "aria-hidden": !0,
                            className: c("stylex")(j.hiddenButton),
                            children: a.hidden
                        }) : a.visible
                    }, d)
                })
            }, b)
        });
        a = r != null ? h.jsx(c("CometRowItem.react"), {
            expanding: d === "justify",
            xstyle: j.resetFlexBasis,
            children: r
        }, "primary") : null;
        s = [a].concat(q);
        l = p.length === 2;
        return h.jsx(c("CometRow.react"), {
            align: d,
            direction: b,
            expanding: e,
            paddingHorizontal: f,
            paddingTop: g,
            spacing: 8,
            verticalAlign: n,
            wrap: o,
            children: l || r == null ? i : s
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometTooltipGroup.react", ["BaseTooltipGroup.react", "CometTooltipImpl.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(d("BaseTooltipGroup.react").Container, babelHelpers["extends"]({}, a, {
            tooltipImpl: c("CometTooltipImpl.react")
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometSuspendWhileWaitingOnDOM.react", ["ExecutionEnvironment", "Promise", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");

    function a() {
        if (!d("ExecutionEnvironment").canUseDOM) throw b("Promise").reject();
        return null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometDOMOnlyBoundary.react", ["CometPlaceholder.react", "CometSuspendWhileWaitingOnDOM.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children;
        a = a.fallback;
        return h.jsxs(c("CometPlaceholder.react"), {
            fallback: a,
            children: [h.jsx(c("CometSuspendWhileWaitingOnDOM.react"), {}), b]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometComposerMinutiaeBarLoading.react", ["BaseGlimmer.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a() {
        return h.jsxs("div", {
            className: "k4urcfbm discj3wi j83agx80 rq0escxv bp9cbjyn",
            children: [h.jsx(c("BaseGlimmer.react"), {
                className: "q676j6op qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",
                index: 1
            }), h.jsx("div", {
                className: "n99xedck",
                children: h.jsx(c("BaseGlimmer.react"), {
                    className: "ozuftl9m n851cfcs tvfksri0 n1l5q3vz p1ueia1e l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                    index: 1
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("createEmptyCometComposerViewState", ["uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        return a != null ? a : {
            audience: {},
            creationSessionID: c("uuid")(),
            editorState: babelHelpers["extends"]({
                __type: "plain-text",
                hasFocus: !1,
                isComposing: !1,
                isPendingSelection: !1,
                selectionOffsets: null,
                text: ""
            }, b)
        }
    }
    g["default"] = a
}), 98);
__d("useResumableComposerViewState", ["Actor", "createEmptyCometComposerViewState", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef;

    function i(a) {
        var b = a.mediaAttachments != null ? a.mediaAttachments.map(function(a) {
            if (a.state === "UPLOADING" || a.state === "QUEUED") switch (a.fileType) {
                case "PHOTO":
                    return {
                        data: a.data,
                        file: a.file,
                        fileObjectURL: a.fileObjectURL,
                        fileType: "PHOTO",
                        state: "NEW"
                    };
                case "VIDEO":
                    return {
                        data: a.data,
                        file: a.file,
                        fileObjectURL: a.fileObjectURL,
                        fileType: "VIDEO",
                        state: "NEW"
                    };
                default:
                    return {
                        data: a.data,
                        file: a.file,
                        fileObjectURL: a.fileObjectURL,
                        fileType: "FILE",
                        state: "NEW"
                    }
            }
            return a
        }) : void 0;
        return babelHelpers["extends"]({}, a, {
            mediaAttachments: b
        })
    }

    function a(a) {
        var b = d("Actor").useActor();
        b = b[0];
        var e = (a = a) != null ? a : b,
            f = h(e),
            g = h(null);
        a = function(a) {
            f.current = e, g.current = a != null ? i(a) : null
        };
        b = function() {
            f.current = e, g.current = null
        };
        var j = function(a, b) {
            b = g.current != null && f.current === e ? g.current : c("createEmptyCometComposerViewState")(null, b);
            return a != null ? babelHelpers["extends"]({}, b, {
                attachmentArea: {
                    activeAttachmentType: "MEDIA"
                },
                mediaAttachments: (b.mediaAttachments || []).concat(a)
            }) : b
        };
        return {
            clearResumableViewState: b,
            getResumableViewState: j,
            saveResumableViewState: a
        }
    }
    g["default"] = a
}), 98);
__d("ComposerCancelFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743444");
    c = b("FalcoLoggerInternal").create("composer_cancel", a);
    e.exports = c
}), null);
__d("ComposerEntryFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743449");
    c = b("FalcoLoggerInternal").create("composer_entry", a);
    e.exports = c
}), null);
__d("ComposerFeatureIntentFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743450");
    c = b("FalcoLoggerInternal").create("composer_feature_intent", a);
    e.exports = c
}), null);
__d("ComposerPostCancelFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743454");
    c = b("FalcoLoggerInternal").create("composer_post_cancel", a);
    e.exports = c
}), null);
__d("ComposerPostFailureFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743455");
    c = b("FalcoLoggerInternal").create("composer_post_failure", a);
    e.exports = c
}), null);
__d("ComposerPostFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743456");
    c = b("FalcoLoggerInternal").create("composer_post", a);
    e.exports = c
}), null);
__d("ComposerPostMutationStartFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743457");
    c = b("FalcoLoggerInternal").create("composer_post_mutation_start", a);
    e.exports = c
}), null);
__d("ComposerPostServerContentRenderedFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743458");
    c = b("FalcoLoggerInternal").create("composer_post_server_content_rendered", a);
    e.exports = c
}), null);
__d("ComposerPostSuccessFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743459");
    c = b("FalcoLoggerInternal").create("composer_post_success", a);
    e.exports = c
}), null);
__d("ComposerPostTerminalFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743460");
    c = b("FalcoLoggerInternal").create("composer_post_terminal", a);
    e.exports = c
}), null);
__d("ComposerPublishFlowFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743461");
    c = b("FalcoLoggerInternal").create("composer_publish_flow", a);
    e.exports = c
}), null);
__d("cometComposerLogger", ["ComposerCancelFalcoEvent", "ComposerEntryFalcoEvent", "ComposerFeatureIntentFalcoEvent", "ComposerPostCancelFalcoEvent", "ComposerPostFailureFalcoEvent", "ComposerPostFalcoEvent", "ComposerPostMutationStartFalcoEvent", "ComposerPostServerContentRenderedFalcoEvent", "ComposerPostSuccessFalcoEvent", "ComposerPostTerminalFalcoEvent", "ComposerPublishFlowFalcoEvent", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("cometComposerQPLLogger").__setRef("cometComposerLogger");

    function a(a, b, c) {
        t(a);
        switch (a.type) {
            case "COMPOSER_ENTRY":
                i(a.fields, b, c);
                break;
            case "COMPOSER_FEATURE_INTENT":
                j(a.fields, b, c);
                break;
            case "COMPOSER_CANCEL":
                k(a.fields, b, c);
                break;
            case "COMPOSER_POST":
                l(a.fields, b);
                break;
            case "COMPOSER_POST_MUTATION_START":
                m(a.fields, b);
                break;
            case "COMPOSER_POST_SUCCESS":
                n(a.fields, b);
                break;
            case "COMPOSER_POST_FAILURE":
                o(a.fields, b);
                break;
            case "COMPOSER_POST_CANCEL":
                p(a.fields, b);
                break;
            case "COMPOSER_POST_TERMINAL":
                q(a.fields, b);
                break;
            case "COMPOSER_POST_SERVER_CONTENT_RENDERED":
                r(a.fields, b);
                break;
            case "COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS":
                s(a.fields, b);
                break;
            default:
                break
        }
    }

    function i(a, b, d) {
        c("ComposerEntryFalcoEvent").log(function() {
            var c;
            return {
                composer_entry_point_name: a == null ? void 0 : a.composerEntryPointName,
                composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
                composer_type: a == null ? void 0 : a.composerType,
                creation_session_id: b,
                target_id: d == null ? void 0 : (c = d.target) == null ? void 0 : c.id,
                target_type: (d == null ? void 0 : (c = d.target) == null ? void 0 : c.type) ? d == null ? void 0 : d.target.type : null
            }
        })
    }

    function j(a, b, d) {
        c("ComposerFeatureIntentFalcoEvent").log(function() {
            var c;
            return {
                creation_session_id: b,
                feature_type: a == null ? void 0 : a.featureType,
                source: a == null ? void 0 : a.source,
                target_type: (d == null ? void 0 : (c = d.target) == null ? void 0 : c.type) ? d == null ? void 0 : d.target.type : null
            }
        })
    }

    function k(a, b, d) {
        c("ComposerCancelFalcoEvent").log(function() {
            var c;
            return {
                composer_entry_point_name: a == null ? void 0 : a.composerEntryPointName,
                composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
                composer_type: a == null ? void 0 : a.composerType,
                creation_session_id: b,
                target_id: d == null ? void 0 : (c = d.target) == null ? void 0 : c.id,
                target_type: (d == null ? void 0 : (c = d.target) == null ? void 0 : c.type) ? d == null ? void 0 : d.target.type : null
            }
        })
    }

    function l(a, b) {
        c("ComposerPostFalcoEvent").log(function() {
            return {
                composer_entry_point_name: a == null ? void 0 : a.composerEntryPointName,
                composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
                composer_type: a == null ? void 0 : a.composerType,
                creation_session_id: b,
                is_my_story_selected: a == null ? void 0 : a.isMyStorySelected,
                is_news_feed_selected: a == null ? void 0 : a.isNewsFeedSelected,
                payload: a == null ? void 0 : a.payload,
                unpublished_content_type: a == null ? void 0 : a.unpublishedContentType
            }
        })
    }

    function m(a, b) {
        c("ComposerPostMutationStartFalcoEvent").log(function() {
            return {
                creation_session_id: b,
                destination: a == null ? void 0 : a.destination
            }
        })
    }

    function n(a, b) {
        c("ComposerPostSuccessFalcoEvent").log(function() {
            var c;
            return {
                composer_type: a == null ? void 0 : a.composerType,
                creation_session_id: b,
                logging_ids: a == null ? void 0 : a.loggingIds,
                payload: a == null ? void 0 : a.payload,
                retry_count: (c = a == null ? void 0 : a.retryCount) != null ? c : "0",
                unpublished_content_type: a == null ? void 0 : a.unpublishedContentType
            }
        })
    }

    function o(a, b) {
        c("ComposerPostFailureFalcoEvent").log(function() {
            var c;
            return {
                composer_type: a == null ? void 0 : a.composerType,
                creation_session_id: b,
                error_details: a == null ? void 0 : a.errorDescription,
                error_info: a == null ? void 0 : a.errorInfo,
                payload: a == null ? void 0 : a.payload,
                retry_count: (c = a == null ? void 0 : a.retryCount) != null ? c : "0",
                unpublished_content_type: a == null ? void 0 : a.unpublishedContentType
            }
        })
    }

    function p(a, b) {
        c("ComposerPostCancelFalcoEvent").log(function() {
            return {
                cancel_source: a == null ? void 0 : a.cancelSource,
                creation_session_id: b
            }
        })
    }

    function q(a, b) {
        c("ComposerPostTerminalFalcoEvent").log(function() {
            var c;
            return {
                creation_session_id: b,
                terminal_reason: (c = a == null ? void 0 : a.terminalReason) != null ? c : ""
            }
        })
    }

    function r(a, b) {
        c("ComposerPostServerContentRenderedFalcoEvent").log(function() {
            var c;
            return {
                creation_session_id: b,
                destination: (c = a == null ? void 0 : a.destination) != null ? c : ""
            }
        })
    }

    function s(a, b) {
        var d = a == null ? void 0 : a.publishFlowOptimisticStep;
        if (d == null) return;
        var e = {
            creation_session_id: b,
            publish_flow: d
        };
        (d === "CREATE_OPTIMISTIC_RESPONSE" || d === "INSERT_OPTIMISTIC_POST") && (e = babelHelpers["extends"]({}, e, {
            debug_info: JSON.stringify({
                type_of_optimistic_post: a == null ? void 0 : a.typeOfOptimisticPost
            })
        }));
        c("ComposerPublishFlowFalcoEvent").log(function() {
            return e
        })
    }

    function t(a) {
        if (a.fields && a.fields.payload != null) {
            var b = a.fields.payload.qplEvent;
            b != null && h.onReady(function(b) {
                return b(a)
            })
        }
    }
    g["default"] = a
}), 98);
__d("composerCometCardedDialogProps", [], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        anchor: {
            minHeight: "pnzxbu4t"
        }
    };
    b = {
        anchorXStyle: a.anchor,
        size: "content"
    };
    g["default"] = b
}), 98);
__d("CometComposerStylingConstants", ["gkx", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = 16;
    d = 500;
    e = 500;
    f = a();
    a = 1e3;
    var h = 1,
        i = 60,
        j = 1080 / 750,
        k = 500 / 500;

    function a() {
        return c("gkx")("170") || c("qex")._("322") ? 680 : 584
    }
    g.COMPOSER_PADDING_SIDE = b;
    g.COMPOSER_ORIGINAL_HEIGHT = d;
    g.COMPOSER_ORIGINAL_WIDTH = e;
    g.GEMINI_COMPOSER_WIDTH = f;
    g.GEMINI_MULTILINGUAL_COMPOSER_MAX_WIDTH = a;
    g.COMPOSER_ATTACHMENT_AREA_BORDER = h;
    g.PUSH_PAGE_HEADER_HEIGHT = i;
    g.SATP_ASPECT_RATIO = j;
    g.AVATAR_SATP_ASPECT_RATIO = k
}), 98);
__d("useFeedComposerCometDialog", ["cr:1810733"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1810733")
}), 98);
__d("FbtReactWrapper.react", ["react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            approvable: {
                borderBottom: "gxc8q7yd"
            },
            inlineFbtResult: {
                paddingTop: "jb3vyjys",
                paddingEnd: "rz4wbd8a",
                paddingBottom: "qt6c0cv9",
                paddingStart: "a8nywdso",
                width: "dbpd2lw6",
                ":hover": {
                    backgroundColor: "mtxbttiu",
                    borderBottom: "np3d2iit",
                    borderTopStartRadius: "jyjmi8dg",
                    borderTopEndRadius: "fajzdwjs",
                    borderBottomEndRadius: "dquvm9fb",
                    borderBottomStartRadius: "retmwcca",
                    boxShadow: "s7v3p2ys",
                    cursor: "b66fqkgy"
                }
            },
            reportable: {
                borderBottom: "gxc8q7yd"
            },
            translatable: {
                borderBottom: "gxc8q7yd"
            }
        },
        j = {
            APPROVE: i.approvable,
            REPORT: i.reportable,
            TRANSLATION: i.translatable
        };

    function a(a, b) {
        var d = a.content,
            e = a.hash,
            f = a.inlineMode,
            g = a.onTrigger;
        a = a.translation;
        f = c("stylex")(i.inlineFbtResult, j[f] != null && j[f]);
        return h.jsx("span", {
            className: f,
            "data-intl-hash": e,
            "data-intl-translation": a,
            "data-intl-trid": "",
            onContextMenu: function(a) {
                a.preventDefault(), g()
            },
            ref: b,
            children: d
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("XIntlInlineDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/translations/inline/dialog/", {
        __asyncDialog: {
            type: "Int"
        },
        appid: {
            type: "Int"
        },
        displayed_locale: {
            type: "String"
        },
        hash: {
            type: "String",
            required: !0
        },
        loc: {
            type: "String"
        },
        location: {
            type: "String",
            defaultValue: "inline"
        },
        phash: {
            type: "String"
        },
        project: {
            type: "String"
        },
        show_app: {
            type: "Bool",
            defaultValue: !1
        },
        translation: {
            type: "String"
        },
        trid: {
            type: "Int"
        }
    })
}), null);
__d("InlineFbtResultImplComet", ["CometCompatModalDialogResource", "CometLazyDialogTrigger.react", "FbtHooks", "FbtReactUtil", "FbtReactWrapper.react", "FbtResultBase", "XIntlInlineDialogController", "emptyFunction", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i(a) {
        var b = a.content,
            d = a.hash,
            e = a.inlineMode,
            f = a.translation;
        if (d != null && (e === "TRANSLATION" || e === "APPROVE" || e === "REPORT")) {
            a = c("XIntlInlineDialogController").getURIBuilder().setString("hash", d).getURI().toString();
            return h.jsx(c("CometLazyDialogTrigger.react"), {
                dialogProps: {
                    onClose: c("emptyFunction"),
                    params: {
                        rel: "dialog",
                        uri: a
                    }
                },
                dialogResource: c("CometCompatModalDialogResource"),
                children: function(a, g) {
                    return h.jsx(c("FbtReactWrapper.react"), {
                        content: b,
                        hash: d,
                        inlineMode: e,
                        onTrigger: a,
                        ref: g,
                        translation: f
                    })
                }
            })
        } else {
            d == null && c("recoverableViolation")('Fbt string hash should not be null for translated string "' + f + '" ' + ("[inlineMode=" + e + "]"), "internationalization");
            return h.jsx("span", {
                "data-intl-hash": d,
                "data-intl-translation": f,
                "data-intl-trid": "",
                children: b
            })
        }
    }
    i.displayName = i.name + " [from " + f.id + "]";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e, f, g) {
            var h;
            h = a.call(this, b, c("FbtHooks").getErrorListener({
                hash: g,
                translation: f
            })) || this;
            h.$$typeof = d("FbtReactUtil").REACT_ELEMENT_TYPE;
            h.key = null;
            h.ref = null;
            h.type = i;
            h.props = {
                content: b,
                hash: g,
                inlineMode: e,
                translation: f
            };
            return h
        }
        return b
    }(c("FbtResultBase"));
    g["default"] = a
}), 98);
__d("RunComet", ["ExecutionEnvironment", "FBLogger", "createCancelableFunction", "emptyFunction", "recoverableViolation", "setTimeout", "unexpectedUseInComet"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = !1,
        j = !1,
        k = {
            remove: c("emptyFunction")
        };

    function l(a, b) {
        h.unload == null && (h.unload = [], h.afterunload = [], d("ExecutionEnvironment").canUseEventListeners && window.addEventListener("unload", function() {
            o("unload"), o("afterunload")
        })), h[a] == null ? (c("recoverableViolation")("EVENT_LISTENERS." + a + " wasn't initialized but should have been!", "comet_infra"), h[a] = [b]) : h[a].push(b)
    }

    function m(a) {
        a || c("recoverableViolation")("Undefined event listener handler is not allowed", "comet_infra");
        return c("createCancelableFunction")((a = a) != null ? a : c("emptyFunction"))
    }

    function n(a) {
        return {
            remove: function() {
                a.cancel()
            }
        }
    }

    function o(a) {
        var b = h[a] || [];
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            try {
                e()
            } catch (b) {
                c("FBLogger")("comet_infra").catching(b).mustfix("Hit an error while executing '" + a + "' event listeners.")
            }
        }
        h[a] = []
    }

    function p(a) {
        if (i) {
            a();
            return n(m(c("emptyFunction")))
        }
        a = m(a);
        h.domcontentloaded == null ? (h.domcontentloaded = [a], d("ExecutionEnvironment").canUseEventListeners && window.addEventListener("DOMContentLoaded", function() {
            o("domcontentloaded")
        }, !0)) : h.domcontentloaded.push(a);
        return n(a)
    }

    function a(a) {
        a = m(a);
        l("afterunload", a);
        return n(a)
    }

    function b(a) {
        a = m(a);
        h.load == null ? (h.load = [a], d("ExecutionEnvironment").canUseEventListeners && window.addEventListener("load", function() {
            o("domcontentloaded"), o("load")
        })) : h.load.push(a);
        j && c("setTimeout")(function() {
            o("domcontentloaded"), o("load")
        }, 0);
        return n(a)
    }

    function e(a) {
        a = m(a);
        l("unload", a);
        return n(a)
    }

    function f(a, b) {
        if (b !== !1) {
            b = "Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.";
            c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(b)
        }
        b = m(a);
        h.beforeunload == null && (h.beforeunload = [], d("ExecutionEnvironment").canUseEventListeners && window.addEventListener("beforeunload", function(a) {
            var b = h.beforeunload || [];
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
                var g = void 0;
                try {
                    g = f()
                } catch (a) {
                    c("FBLogger")("comet_infra").catching(a).mustfix("Hit an error while executing onBeforeUnload event listeners.")
                }
                if (g !== void 0) {
                    g != null && g.body != null && (g = g.body);
                    a.preventDefault();
                    a.returnValue = g;
                    return g
                }
            }
        }));
        h.beforeunload.push(b);
        return n(b)
    }
    var q = f;

    function r(a) {
        c("unexpectedUseInComet")("Run.onLeave");
        return k
    }

    function s(a, b) {
        c("unexpectedUseInComet")("Run.onCleanupOrLeave");
        return k
    }

    function t(a) {
        c("unexpectedUseInComet")("Run.removeHook")
    }

    function u() {
        document.readyState === "loading" ? p(function() {
            i = !0
        }) : i = !0;
        if (document.readyState === "complete") j = !0;
        else {
            var a = window.onload;
            window.onload = function() {
                a && a(), j = !0
            }
        }
    }
    d("ExecutionEnvironment").canUseDOM && u();
    u = null;
    var v = null;
    g.onLoad = p;
    g.onAfterUnload = a;
    g.onAfterLoad = b;
    g.onUnload = e;
    g.onBeforeUnload = f;
    g.maybeOnBeforeUnload = q;
    g.onLeave = r;
    g.onCleanupOrLeave = s;
    g.__removeHook = t;
    g.__domContentCallback = u;
    g.__onloadCallback = v
}), 98);
__d("BanzaiAdapterComet", ["BanzaiConfig", "BanzaiConsts", "BanzaiStorage", "BaseEventEmitter", "FBLogger", "JSScheduler", "NetworkStatus", "QueryString", "ReactDOMComet", "Run", "SiteData", "StaticSiteData", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams", "gkx", "isInIframe", "justknobx", "lowerFacebookDomain", "once", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
        i = new(c("BaseEventEmitter"))(),
        j = c("isInIframe")(),
        k = "/ajax/bz",
        l = "POST",
        m = {
            cleanup: function() {
                var a = h;
                h = [];
                a.forEach(function(a) {
                    a.readyState < 4 && a.abort()
                })
            },
            config: c("BanzaiConfig"),
            getEndPointUrl: function(a) {
                a = c("getAsyncParams")(l);
                delete a[c("StaticSiteData").csr_key];
                delete a[c("StaticSiteData").jsmod_key];
                a.ph = c("SiteData").push_phase;
                var b = c("justknobx")._("55") && c("gkx")("517") ? "/a/bz" : c("gkx")("1703425") ? "/ajax/bnzai" : k;
                b = c("QueryString").appendToUrl(b, a);
                if (b.length > 2e3) throw c("unrecoverableViolation")("url is too long: ${url}", "comet_infra");
                return b
            },
            getStorage: function() {
                return c("BanzaiStorage")
            },
            getTopLevel: function() {
                return j && c("lowerFacebookDomain").isValidDocumentDomain() ? window.top : null
            },
            inform: function(a) {
                Array.isArray(a) ? a.forEach(function(a) {
                    return i.emit(a)
                }) : i.emit(a)
            },
            isOkToSendViaBeacon: function() {
                return !1
            },
            onUnload: function(a) {
                d("Run").onAfterUnload(a)
            },
            preferredCompressionMethod: c("once")(function() {
                return "deflate"
            }),
            readyToSend: function() {
                return c("UserAgent").isBrowser("IE <= 8") || navigator.onLine
            },
            send: function(a, b, e, f) {
                var g, i = m.getEndPointUrl(!1);
                i = c("ZeroRewrites").rewriteURI(new(c("URI"))(i));
                var j = c("ZeroRewrites").getTransportBuilderForURI(i)();
                j.open(l, i.toString(), !0);
                f === !0 ? j.onreadystatechange = function() {
                    d("ReactDOMComet").flushSync(function() {
                        if (j.readyState >= 4) {
                            var a = h.indexOf(j);
                            a >= 0 && h.splice(a, 1);
                            try {
                                a = j.status
                            } catch (b) {
                                a = 0
                            }
                            a === 200 ? (b && b(), c("NetworkStatus").reportSuccess()) : (e && e(a), c("NetworkStatus").reportError())
                        }
                    })
                } : j.onreadystatechange = function() {
                    c("JSScheduler").scheduleNormalPriCallback(function() {
                        if (j.readyState >= 4) {
                            var a = h.indexOf(j);
                            a >= 0 && h.splice(a, 1);
                            try {
                                a = j.status
                            } catch (b) {
                                a = 0
                            }
                            a === 200 ? (b && b(), c("NetworkStatus").reportSuccess(), m.inform(c("BanzaiConsts").OK)) : (e && e(a), c("NetworkStatus").reportError(), m.inform(c("BanzaiConsts").ERROR))
                        }
                    })
                };
                h.push(j);
                c("NetworkStatus").isOnline() ? j.send(a) : g = c("NetworkStatus").onChange(function(b) {
                    b = b.online;
                    b && (j.send(a), g.remove())
                })
            },
            setHooks: function() {},
            setUnloadHook: function(a) {
                d("Run").onAfterUnload(a._unload)
            },
            subscribe: function(a, b) {
                if (Array.isArray(a)) {
                    var c = [];
                    a.forEach(function(a) {
                        return c.push(i.addListener(a, b))
                    });
                    return {
                        remove: function() {
                            c.forEach(function(a) {
                                return a.remove()
                            })
                        }
                    }
                } else return i.addListener(a, b)
            },
            useBeacon: !1,
            wrapInTimeSlice: function(a, b) {
                c("FBLogger")("banzai").mustfix("wrapInTimeSlice is not implemented");
                return function() {}
            }
        };
    a = m;
    g["default"] = a
}), 98);
__d("setTimeoutCometLoggingPriWithFallback", ["cr:1268629"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1268629")
}), 98);
__d("setTimeoutCometSpeculativeWithFallback", ["cr:1268630"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1268630")
}), 98);
__d("BanzaiComet", ["BanzaiAdapterComet", "BanzaiCompressionUtils", "BanzaiConsts", "BanzaiLazyQueue", "BanzaiUtils", "CurrentUser", "ErrorGuard", "ExecutionEnvironment", "FBLogger", "Promise", "Run", "Visibility", "WebSession", "clearTimeout", "performanceAbsoluteNow", "recoverableViolation", "setTimeout", "setTimeoutCometLoggingPriWithFallback", "setTimeoutCometSpeculativeWithFallback"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            basic: [],
            vital: []
        },
        i = [],
        j = {
            basic: null,
            vital: null
        },
        k = {
            basic: null,
            vital: null
        },
        l = new Map(),
        m, n = null,
        o = {
            _expiredBatchMap: function() {
                var a = c("performanceAbsoluteNow")();
                for (var b = l.entries(), d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                    var g = f[1];
                    if (g.expiryTime <= a) {
                        var h = g.posts[0];
                        h = (h = h.__meta.priority) != null ? h : c("BanzaiConsts").BASIC;
                        (h = o._getPostBuffer(h)).push.apply(h, g.posts);
                        l["delete"](f[0])
                    }
                }
                l.size > 0 && (m = c("setTimeout")(o._expiredBatchMap, c("BanzaiConsts").BATCH_TIMEOUT))
            },
            _flushBatchMap: function() {
                c("clearTimeout")(m);
                m = null;
                for (var a = l.values(), b = Array.isArray(a), d = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (b) {
                        if (d >= a.length) break;
                        e = a[d++]
                    } else {
                        d = a.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    var f = e.posts[0];
                    f = (f = f.__meta.priority) != null ? f : c("BanzaiConsts").BASIC;
                    (f = o._getPostBuffer(f)).push.apply(f, e.posts)
                }
                l.clear()
            },
            _gatherWadsAndPostsFromBuffer: function(a, b, d, e, f, g) {
                var h = {
                    currentSize: 0,
                    keepRetryable: d,
                    overlimit: !1,
                    sendMinimumOnePost: g,
                    wadMap: new Map()
                };
                d = f[e].filter(function(d) {
                    return c("BanzaiUtils").filterPost(d, a, b, h)
                });
                !h.overlimit && e === "vital" && (f.basic = f.basic.filter(function(d) {
                    return c("BanzaiUtils").filterPost(d, a, b, h)
                }));
                return d
            },
            _getPostBuffer: function(a) {
                return a == null ? h.basic : h[a] || []
            },
            _handleBatchPost: function(a, b, d) {
                if (d == null) return !1;
                var e = a[2],
                    f = a[0],
                    g = l.get(f);
                if (g != null && g.expiryTime <= e) {
                    (b = o._getPostBuffer(b)).push.apply(b, g.posts);
                    l["delete"](f);
                    return !1
                }
                if (g != null && g.expiryTime > e) {
                    g.posts.push(a);
                    return !0
                }
                b = {
                    expiryTime: e + d,
                    posts: [a]
                };
                l.set(f, b);
                m || (m = c("setTimeout")(o._expiredBatchMap, c("BanzaiConsts").BATCH_TIMEOUT));
                return !0
            },
            _handlePostPreflightChecks: function(a, b, d) {
                if (o.adapter.config.disabled === !0) return !0;
                if (!c("ExecutionEnvironment").canUseDOM) return !0;
                var e = c("BanzaiAdapterComet").getTopLevel();
                if (e) {
                    var f;
                    try {
                        f = e.require("Banzai")
                    } catch (a) {
                        f = null
                    }
                    if (f) {
                        f.post.apply(f, arguments);
                        return !0
                    }
                }
                if (c("BanzaiAdapterComet").config.disabled === !0) return !0;
                var g = c("BanzaiAdapterComet").config.blacklist;
                return g != null && typeof g.indexOf === "function" && g.indexOf(a) !== -1 ? !0 : !1
            },
            _handleSignalPost: function(a, b, e) {
                if (!e) return !1;
                var f = a;
                f.__meta.status = c("BanzaiConsts").POST_INFLIGHT;
                e = [{
                    app_id: c("CurrentUser").getAppID(),
                    posts: [a],
                    trigger: a[0],
                    user: c("CurrentUser").getPossiblyNonFacebookUserID(),
                    webSessionId: d("WebSession").getId()
                }];
                c("BanzaiAdapterComet").send(o._prepForTransit(e), function() {
                    f.__meta.status = c("BanzaiConsts").POST_SENT, f.__meta.callback != null && f.__meta.callback()
                }, function(d) {
                    c("BanzaiUtils").retryPost(a, d, h[b])
                }, !0);
                return !f.__meta.retry
            },
            _initialize: function() {
                var a = [c("BanzaiConsts").VITAL, c("BanzaiConsts").BASIC];
                c("ExecutionEnvironment").canUseDOM && (c("Visibility").isSupported() ? (c("Visibility").addListener(c("Visibility").HIDDEN, function() {
                    a.forEach(function(a) {
                        o._getPostBuffer(a).length > 0 && o._tryToSendViaBeacon(a)
                    }), o._store()
                }), c("Visibility").addListener(c("Visibility").VISIBLE, function() {
                    a.forEach(function(a) {
                        o._tryToSendViaBeacon(a)
                    }), o._restore()
                })) : o.adapter.setHooks(o), d("Run").onBeforeUnload(function() {
                    o._flushBatchMap(), o._sendBeacon(c("BanzaiConsts").VITAL), o._sendBeacon(c("BanzaiConsts").BASIC)
                }, !1), o.adapter.setUnloadHook(o), d("Run").onAfterLoad(function() {
                    o._restore()
                }))
            },
            _isShutdown: !1,
            _prepForTransit: function(a) {
                var b = new FormData();
                b.append("ts", String(Date.now()));
                var d = c("BanzaiCompressionUtils").outOfBandsPosts(a);
                Object.keys(d).forEach(function(a) {
                    b.append(a, d[a])
                });
                b.append("q", JSON.stringify(a));
                return b
            },
            _prepWadForTransit: function(a) {
                c("BanzaiCompressionUtils").compressWad(a, c("BanzaiAdapterComet").preferredCompressionMethod())
            },
            _prepWadForTransitAsync: function(a) {
                return c("BanzaiCompressionUtils").compressWadAsync(a, c("BanzaiAdapterComet").preferredCompressionMethod())
            },
            _restore: function() {
                var a = function(a) {
                        var b = a.__meta;
                        b = b.priority === c("BanzaiConsts").VITAL ? c("BanzaiConsts").VITAL : c("BanzaiConsts").BASIC;
                        o._getPostBuffer(b).push(a)
                    },
                    b = c("BanzaiAdapterComet").getStorage();
                c("ErrorGuard").applyWithGuard(b.restore, b, [a]);
                o._schedule(c("BanzaiConsts").VITAL_WAIT, c("BanzaiConsts").VITAL)
            },
            _schedule: function(a, b) {
                if (b == null) return !1;
                var d = function() {
                        k[b] = null, j[b] = null, o._sendWithCallbacks(b, null, null)
                    },
                    e = c("performanceAbsoluteNow")() + a;
                if (j[b] == null || e < j[b]) {
                    j[b] = e;
                    k[b] !== null && c("clearTimeout")(k[b]);
                    b === c("BanzaiConsts").VITAL ? k.vital = c("setTimeoutCometLoggingPriWithFallback")(d, a) : k.basic = c("setTimeoutCometSpeculativeWithFallback")(d, a);
                    return !0
                }
                return !1
            },
            _sendBeacon: function(a) {
                o._getPostBuffer(a).length > 0 && o._tryToSendViaBeacon(a)
            },
            _sendWithCallbacks: function(a, d, e) {
                h[a].length > 0 && o._schedule(a === "vital" ? c("BanzaiConsts").VITAL_WAIT : c("BanzaiConsts").BASIC_WAIT_COMET, a);
                if (!c("BanzaiAdapterComet").readyToSend()) {
                    e && e();
                    return
                }
                var f = c("BanzaiAdapterComet").getStorage();
                c("ErrorGuard").applyWithGuard(f.flush, f, [o._restore]);
                c("BanzaiAdapterComet").inform(c("BanzaiConsts").SEND);
                var g = [],
                    j = [];
                h[a] = o._gatherWadsAndPostsFromBuffer(g, j, !0, a, h, !0);
                if (g.length <= 0) {
                    c("BanzaiAdapterComet").inform(c("BanzaiConsts").OK);
                    d && d();
                    return
                }
                g[0].trigger = n;
                n = null;
                g.forEach(function(a) {
                    return a.send_method = "ajax"
                });
                i.push.apply(i, j);
                b("Promise").all(g.map(o._prepWadForTransitAsync))["finally"](function() {
                    if (o._isShutdown) return;
                    j.forEach(function(a) {
                        a = i.indexOf(a);
                        if (a === -1) {
                            c("recoverableViolation")("inflight post not found in inPreparationPosts", "comet_infra");
                            return
                        }
                        i.splice(a, 1)
                    });
                    c("BanzaiAdapterComet").send(o._prepForTransit(g), function() {
                        j.forEach(function(a) {
                            a = a;
                            a.__meta.status = c("BanzaiConsts").POST_SENT;
                            typeof a.__meta.callback === "function" && a.__meta.callback()
                        }), d && d()
                    }, function(b) {
                        j.forEach(function(d) {
                            c("BanzaiUtils").retryPost(d, b, h[a])
                        }), o._store(), e && e()
                    })
                })
            },
            _store: function() {
                var a = c("BanzaiAdapterComet").getStorage();
                c("ErrorGuard").applyWithGuard(a.store, a, [h[c("BanzaiConsts").VITAL]]);
                c("ErrorGuard").applyWithGuard(a.store, a, [h[c("BanzaiConsts").BASIC]])
            },
            _testState: function() {
                return {
                    postBuffer: h.basic,
                    triggerRoute: n
                }
            },
            _tryToSendViaBeacon: function(b) {
                if (!(navigator && navigator.sendBeacon)) return !1;
                var d = !0,
                    e = [],
                    f = [];
                h[b] = o._gatherWadsAndPostsFromBuffer(e, f, !1, b, h, !1);
                if (e.length <= 0) return !1;
                e.forEach(function(a) {
                    return a.send_method = "beacon"
                });
                e.map(o._prepWadForTransit);
                e = o._prepForTransit(e);
                var g = o.adapter.getEndPointUrl(!0);
                g = a.navigator.sendBeacon(g, e);
                g || (d = !1, f.forEach(function(a) {
                    c("BanzaiUtils").resetPostStatus(a), o._getPostBuffer(b).push(a)
                }));
                return d
            },
            _unload: function() {
                o._flushBatchMap(), c("BanzaiAdapterComet").cleanup(), c("BanzaiAdapterComet").inform(c("BanzaiConsts").SHUTDOWN), o._isShutdown = !0, i.forEach(function(a) {
                    var b = a;
                    b = b.__meta.priority;
                    c("BanzaiUtils").retryPost(a, 444, o._getPostBuffer((a = b) != null ? a : c("BanzaiConsts").VITAL))
                }), o._sendBeacon(c("BanzaiConsts").VITAL), o._sendBeacon(c("BanzaiConsts").BASIC), o._store()
            },
            _validateRouteAndSize: function(a, b) {
                a || c("FBLogger")("banzai").blameToPreviousFrame().blameToPreviousFrame().mustfix("BanzaiComet.post called without specifying a route");
                return ((a = JSON.stringify(b)) != null ? a : "").length
            },
            BASIC: {
                delay: c("BanzaiConsts").BASIC_WAIT
            },
            BASIC_WAIT: c("BanzaiConsts").BASIC_WAIT,
            ERROR: c("BanzaiConsts").ERROR,
            EXPIRY: void 0,
            OK: c("BanzaiConsts").OK,
            SEND: c("BanzaiConsts").SEND,
            SHUTDOWN: c("BanzaiConsts").SHUTDOWN,
            VITAL: {
                delay: c("BanzaiConsts").VITAL_WAIT
            },
            VITAL_WAIT: c("BanzaiConsts").VITAL_WAIT,
            adapter: c("BanzaiAdapterComet"),
            canUseNavigatorBeacon: function() {
                return !!(navigator && navigator.sendBeacon && c("BanzaiAdapterComet").isOkToSendViaBeacon())
            },
            flush: function(a, b) {
                o.flushHelper(c("BanzaiConsts").VITAL, a, b), o.flushHelper(c("BanzaiConsts").BASIC, a, b)
            },
            flushHelper: function(a, b, d) {
                j[a] = null, k[a] !== null && (c("clearTimeout")(k[a]), k[a] = null), o._sendWithCallbacks(a, b, d)
            },
            isEnabled: function(a) {
                return !!(c("BanzaiAdapterComet").config.gks && c("BanzaiAdapterComet").config.gks[a])
            },
            post: function(a, b, d) {
                var e;
                c("BanzaiLazyQueue").flushQueue().forEach(function(a) {
                    return o.post.apply(o, a)
                });
                if (o._handlePostPreflightChecks(a, b, d)) return;
                var f = a.split(":");
                if ((c("BanzaiAdapterComet").config.known_routes || []).indexOf(f[0]) === -1) {
                    c("BanzaiAdapterComet").config.should_log_unknown_routes === !0 && c("FBLogger")("banzai").blameToPreviousFrame().mustfix("Attempted to post to invalid Banzai route '" + a + "'. This call site should be cleaned up.");
                    if (c("BanzaiAdapterComet").config.should_drop_unknown_routes === !0) return
                }
                f = o._validateRouteAndSize(a, b);
                d = d || {};
                b = c("BanzaiUtils").wrapData(a, b, c("performanceAbsoluteNow")(), d.retry, f);
                f = b;
                d.callback && (f.__meta.callback = d.callback);
                d.compress != null && (f.__meta.compress = d.compress);
                e = (e = d.delay) != null ? e : c("BanzaiConsts").BASIC_WAIT_COMET;
                var g = e > c("BanzaiConsts").VITAL_WAIT ? c("BanzaiConsts").BASIC : c("BanzaiConsts").VITAL;
                f.__meta.priority = g;
                if (o._handleSignalPost(b, g, (f = d.signal) != null ? f : !1)) return;
                if (o._handleBatchPost(b, g, d.batch)) return;
                o._getPostBuffer(g).push(b);
                (o._schedule(e, g) || n == null) && (n = a)
            },
            postsCount: new Map(),
            subscribe: c("BanzaiAdapterComet").subscribe
        };
    o._initialize();
    e = o;
    g["default"] = e
}), 98);
__d("CometProductAttribution", ["Random", "WebSession", "getTopMostRouteInfo", "orEmptyArray", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            var b = a.bookmark_id,
                c = a.bookmark_type_name,
                e = a.link_context,
                f = a.tap_point;
            a = a.trace_policy;
            return {
                bookmark_id: b,
                bookmark_type_name: c,
                link_context: e,
                session: d("WebSession").getId(),
                subsession: 1,
                tap_point: f,
                timestamp: Date.now(),
                trace_policy: a
            }
        },
        i = function(a) {
            var b = a.bookmark_id,
                c = a.link_context,
                e = a.rootName,
                f = a.tap_point,
                g = a.tracePolicy;
            a = a.trackingNodes;
            return {
                bookmark_id: b,
                "class": e,
                link_context: c,
                module: g,
                scope_id: Math.floor(d("Random").random() * 1e6),
                tap_point: f,
                tracking_nodes: a,
                ts: Date.now()
            }
        },
        j = function(a) {
            var b = a.productAttributionId;
            a = a.tracePolicy;
            if (typeof b === "string") return b;
            return typeof a === "string" ? "tp-" + a : "missing"
        },
        k = new Set(["create_jewel", "mega_menu", "tap_tabbar", "tap_search_bar", "tap_bookmark", "topnav-link", "logo", "via_notification"]),
        l = function(a) {
            return k.has(a)
        };
    a = function(a, b, d, e, f, g) {
        var k;
        g === void 0 && (g = !1);
        k = (k = d == null ? void 0 : d.route) != null ? k : {};
        k = k.tracePolicy;
        b = typeof b === "string" ? {
            tap_point: b
        } : b != null ? b : {
            tap_point: "unexpected"
        };
        var m = b.bookmark_id != null ? String(b.bookmark_id) : j(a);
        k = h({
            bookmark_id: m,
            bookmark_type_name: (m = b == null ? void 0 : b.bookmark_type_name) != null ? m : "",
            link_context: e,
            tap_point: b.tap_point,
            trace_policy: k != null ? k : (m = a.tracePolicy) != null ? m : "missing"
        });
        a.productAttributionId != null && b.bookmark_id != null && a.productAttributionId !== String(b.bookmark_id) && (k = babelHelpers["extends"]({}, k, {
            route_bookmark_id: a.productAttributionId
        }));
        e = [i({
            bookmark_id: b.bookmark_id != null ? String(b.bookmark_id) : a.productAttributionId,
            link_context: e,
            rootName: a.rootView.resource.getModuleId(),
            tap_point: b.tap_point,
            tracePolicy: (m = a.tracePolicy) != null ? m : "missing",
            trackingNodes: f
        })];
        if (d != null && !l(b.tap_point))
            if (g && d.productAttribution.v2 != null) {
                a = [].concat(d.productAttribution.v2);
                a[0] = e[0];
                e = a
            } else e = [].concat(e, c("orEmptyArray")(d.productAttribution.v2)), e.length > 10 && (e = [].concat(e.slice(0, 9), [e[e.length - 1]]));
        return {
            0: k,
            v2: e
        }
    };
    var m = function(a) {
            return a.replace(/,;/g, "_")
        },
        n = function(a) {
            return (a = a == null ? void 0 : (a = a.v2) == null ? void 0 : a.map(function(a) {
                return [a["class"], a.module, a.tap_point, a.ts.toString(), a.scope_id.toString(), (a = a.bookmark_id) != null ? a : ""].map(m).join()
            }).join(";")) != null ? a : ""
        };
    b = function(a) {
        return a != null ? n((a = c("getTopMostRouteInfo")(a())) == null ? void 0 : a.productAttribution) : null
    };
    e = function(a, b) {
        if (b != null) switch (b) {
            case "rootView":
                return a.main;
            case "hostedView":
                b = a.hosted;
                if (b) return b;
                c("recoverableViolation")("Navigation was dispatched from hostedView, but no hosted route in previous state", "comet_infra");
                break;
            case "pushView":
                b = a.pushViewStack;
                if (b && b.length > 0) {
                    b = b[b.length - 1];
                    b.depth;
                    b.key;
                    b = babelHelpers.objectWithoutPropertiesLoose(b, ["depth", "key"]);
                    return b
                }
                c("recoverableViolation")("Navigation was dispatched from pushView, but no push view route in previous state", "comet_infra");
                break
        }
        return a.main
    };
    g.getProductAttributionEntry = h;
    g.getProductAttributionEntryV2 = i;
    g.getProductAttributionIdFromRoute = j;
    g.isSpecialTapPoint = l;
    g.getProductAttributionFromRoute = a;
    g.filterEntryValue = m;
    g.minifyProductAttributionV2 = n;
    g.getMinifiedTopMostRouteProductAttribution = b;
    g.getRouteInfoForDispatch = e
}), 98);
__d("CometHeroInteractionImpl.react", ["hero-tracing", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        var e = a.htmlAttributes,
            f = a.pageletAriaProps,
            g = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["htmlAttributes", "pageletAriaProps", "xstyle"]);
        return h.jsx(d("hero-tracing").HeroInteraction, babelHelpers["extends"]({
            htmlAttributes: babelHelpers["extends"]({}, f, {
                className: c("stylex")(g),
                onMouseLeave: e == null ? void 0 : e.onMouseLeave,
                style: e == null ? void 0 : e.style
            }),
            ref: b
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "CometHeroInteraction";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("TimeSpentArray", ["Banzai", "TimeSlice", "clearTimeout", "pageID", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    var h = 2,
        i = h * 32,
        j, k, l, m, n, o, p, q, r, s, t = {},
        u;

    function v() {
        return {
            timeoutDelayMap: t,
            nextDelay: u,
            timeoutInSeconds: m
        }
    }

    function w() {
        if (j) {
            var a = Date.now();
            a > o && (q = Math.min(i, Math.ceil(a / 1e3 - n)));
            a = B();
            a && j(a, u)
        }
        A()
    }

    function x() {
        y(), l = c("setTimeoutAcrossTransitions")(c("TimeSlice").guard(w, "TimeSpentArray Timeout", {
            propagationType: c("TimeSlice").PropagationType.ORPHAN
        }), m * 1e3)
    }

    function y() {
        l && (c("clearTimeout")(l), l = null)
    }

    function z(a) {
        n = a;
        o = n * 1e3;
        p = [1];
        for (var a = 1; a < h; a++) p.push(0);
        q = 1;
        r += 1;
        s += 1;
        a = s.toString() + "_delay";
        u = t[a];
        u === void 0 && (u = t.delay);
        a = s.toString() + "_timeout";
        a = t[a];
        a === void 0 && (a = t.timeout);
        a = Math.min(a, i);
        m = a || i;
        x()
    }

    function A() {
        y(), p = null
    }

    function B() {
        return !p ? null : {
            tos_id: c("pageID"),
            start_time: n,
            tos_array: p.slice(0),
            tos_len: q,
            tos_seq: s,
            tos_cum: r
        }
    }

    function C(a) {
        if (a >= o && a - o < 1e3) return;
        k && k(a);
        D(Math.floor(a / 1e3))
    }

    function D(a) {
        var b = a - n;
        (b < 0 || b >= i) && w();
        !p ? z(a) : (p[b >> 5] |= 1 << (b & 31), q = b + 1, r += 1, o = a * 1e3)
    }

    function a(a, b, d, e) {
        r = 0, s = -1, j = a, k = e, typeof b === "object" && b !== null ? t = b : t = {}, z(Math.floor((d === void 0 || d === null || d === 0 ? Date.now() : d) / 1e3)), c("Banzai").subscribe(c("Banzai").SHUTDOWN, w)
    }

    function b(a) {
        C(a)
    }

    function d() {
        return B()
    }

    function e() {
        w()
    }

    function f() {
        A()
    }

    function E() {
        return v()
    }
    g.init = a;
    g.update = b;
    g.get = d;
    g.ship = e;
    g.reset = f;
    g.testState = E
}), 98);
__d("TimeSpentImmediateActiveSecondsLogger", ["cr:844180"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:844180")
}), 98);
__d("WebTimeSpentBitArrayFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1829320");
    c = b("FalcoLoggerInternal").create("web_time_spent_bit_array", a);
    e.exports = c
}), null);
__d("CometTimeSpentBitArrayLogger", ["ODS", "Random", "TimeSpentArray", "TimeSpentImmediateActiveSecondsLogger", "TimeSpentWWWCometConfig", "WebSession", "WebTimeSpentBitArrayFalcoEvent", "cr:1999269", "isInIframe"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "";

    function i(a, b) {
        a.sid_raw = h, c("WebTimeSpentBitArrayFalcoEvent").logImmediately(function() {
            return {
                sid_raw: a.sid_raw,
                start_time: a.start_time,
                tos_array: a.tos_array,
                tos_cum: a.tos_cum,
                tos_id: a.tos_id,
                tos_len: a.tos_len,
                tos_seq: a.tos_seq
            }
        })
    }

    function j(a) {
        a = k();
        a !== h && (d("TimeSpentArray").ship(), h = a)
    }

    function k() {
        d("WebSession").extend();
        return d("WebSession").getId()
    }

    function l(a) {
        return a === "XWorkPostPluginCometController" || a === "XWorkGroupFeedPluginCometController" || a === "XWorkMSTeamsAppFeedCometController" ? !0 : !1
    }

    function a(a) {
        if (c("isInIframe")() && !l(a)) return;
        a = Date.now();
        d("TimeSpentArray").init(i, c("TimeSpentWWWCometConfig").CONFIG, a, j);
        h = k();
        c("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(a);
        a = 772;
        d("Random").coinflip(a) && d("ODS").bumpEntityKey(2966, "ms.time_spent.qa.www", "time_spent.bits.js_initialized", a)
    }

    function e(a) {
        if (b("cr:1999269") != null) {
            b("cr:1999269").getBroker().sendMessage("update_time_spent_bit_array", {
                eventTimeInMs: a
            });
            return
        }
        d("TimeSpentArray").update(a);
        c("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(a)
    }
    g.init = a;
    g.updateTimeSpentArray = e
}), 98);
__d("CometTimeSpentUtils", ["forEachObject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b, d) {
        a = (a = a.timeSpentConfig) == null ? void 0 : a.session_ids;
        if (d == null || a == null) return b;
        c("forEachObject")(a, function(a, c) {
            a = a.extradata_key;
            if (a != null) {
                b[a] = (a = d[c]) != null ? a : void 0
            }
        });
        return b
    };
    a = function(a, b, c) {
        if (c == null) return b;
        c = c || Object.freeze({});
        var d = c.session_ids;
        c = babelHelpers.objectWithoutPropertiesLoose(c, ["session_ids"]);
        return h(a, babelHelpers["extends"]({}, b, c), d)
    };
    g.addSessionIDsInfo = h;
    g.addTimeSpentMetaData = a
}), 98);
__d("CometVisitationManager", ["FBLogger", "isSearchCometGlobalResultPageTracePolicy", "pageID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            "comet.marketplace.category": "comet.marketplace.home",
            "comet.marketplace.home.hoisted_pdp": "comet.marketplace.home"
        },
        i = {},
        j = null,
        k = null,
        l = !1;

    function m(a) {
        return a.tracePolicy + ":" + a.instanceId + ":" + a.subsessionCount + ":" + a.timeStampMs / 1e3
    }

    function n(a) {
        if (a == null) return;
        a = h[a] ? h[a] : a;
        if (j === a) return;
        var b = i[a];
        b ? (b.subsessionCount++, b.timeStampMs = Date.now()) : i[a] = {
            instanceId: c("pageID"),
            subsessionCount: 1,
            timeStampMs: Date.now(),
            tracePolicy: a
        };
        k = j;
        j = a
    }

    function a() {
        if (!l) {
            c("FBLogger")("CometVisitationManager").mustfix("Attempting to get the current visitation id without initialization.");
            return null
        }
        if (!l || j == null || !i[j]) return null;
        var a = m(i[j]);
        if (c("isSearchCometGlobalResultPageTracePolicy")(j) && k != null && i[k]) {
            var b = m(i[k]);
            return a + "|" + b
        }
        return a
    }

    function b(a) {
        if (l) return;
        n(a);
        l = !0
    }

    function o(a) {
        if (!l) {
            c("FBLogger")("CometVisitationManager").mustfix("Updating the visitation manager without initialization");
            return
        }
        n(a)
    }

    function d(a) {
        o(a.main.route.tracePolicy)
    }
    g.getCurrentVisitationId = a;
    g.init = b;
    g.update = o;
    g.updateFromRouterState = d
}), 98);
__d("ProfileCometSessionConfig", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "ps";
    b = 3e4;
    f.PREFIX = a;
    f.TIMEOUT_MS = b
}), 66);
__d("ProfileCometRoutingUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a != null && a.startsWith("comet.profile.")
    }
    f.isProfilePolicy = a
}), 66);
__d("ProfileCometSessionUtil", ["ProfileCometRoutingUtils", "ProfileCometSessionConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        var b = a.tracePolicy;
        if (d("ProfileCometRoutingUtils").isProfilePolicy(b)) {
            b = a.params.vanity;
            return typeof b === "string" ? b : null
        }
        return null
    }

    function i(a) {
        var b = a.tracePolicy;
        if (d("ProfileCometRoutingUtils").isProfilePolicy(b)) {
            b = a.params.id;
            return typeof b === "string" ? b : null
        }
        return null
    }

    function a(a, b) {
        if (b == null) return !1;
        var c = b.tracePolicy;
        if (!d("ProfileCometRoutingUtils").isProfilePolicy(c)) return !1;
        if (a == null) return !0;
        c = a.tracePolicy;
        if (!d("ProfileCometRoutingUtils").isProfilePolicy(c)) return !1;
        c = h(b);
        var e = h(a);
        b = i(b);
        a = i(a);
        return c != null && c === e || b != null && b === a
    }

    function b(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) {
            var e = a.key(c);
            e != null && e.startsWith(d("ProfileCometSessionConfig").PREFIX) && b.push(e)
        }
        return b
    }
    g.isSameProfileSession = a;
    g.getStorageKeys = b
}), 98);
__d("ProfileEngagementFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744234");
    c = b("FalcoLoggerInternal").create("profile_engagement", a);
    e.exports = c
}), null);
__d("ProfileCometSession", ["ProfileCometSessionConfig", "ProfileCometSessionUtil", "ProfileEngagementFalcoEvent", "WebStorage", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        var b = i();
        return b === null ? null : d("ProfileCometSessionConfig").PREFIX + ":" + a + ":" + b
    }

    function i() {
        var a = c("WebStorage").getSessionStorageForRead();
        if (!a) return null;
        var b = d("ProfileCometSessionConfig").PREFIX + ":tabID";
        a = a.getItem(b);
        if (a == null) {
            a = c("uuid")();
            var e = c("WebStorage").getSessionStorage();
            if (!e) return null;
            e.setItem(b, a)
        }
        return a
    }

    function j(a) {
        if (a == null) return "timeline";
        if (a === "comet.profile.timeline.grid") return "timeline_overview";
        if (a.startsWith("comet.profile.collection.friend")) return "friends_page";
        return a.startsWith("comet.profile.collection") ? "about_page" : "timeline"
    }

    function k(a, b, d) {
        c("ProfileEngagementFalcoEvent").log(function() {
            return {
                content_id: null,
                profile_event_type: "profile_session_impression",
                profile_id: a,
                profile_product_bucket: "profile_core",
                profile_session_id: b,
                profile_surface: j(d)
            }
        })
    }

    function l(a, b) {
        var d = c("WebStorage").getLocalStorage();
        if (!d) return null;
        d = c("uuid")();
        p(a, d);
        k(a, d, b == null ? void 0 : b.tracePolicy);
        return d
    }

    function m(a, b) {
        var c = o(a);
        return c === null ? l(a, b) : c
    }

    function n(a) {
        a = h(a);
        var b = c("WebStorage").getLocalStorageForRead();
        if (a === null || !b) return null;
        b = b.getItem(a);
        if (b == null) return null;
        a = b.split(":");
        b = a[0];
        a = a[1];
        a = parseInt(a, 10);
        return [b, a]
    }

    function o(a) {
        a = n(a);
        if (a !== null) {
            var b = a[0];
            a = a[1];
            if (Date.now() - a < d("ProfileCometSessionConfig").TIMEOUT_MS) return b
        }
        return null
    }

    function p(a, b) {
        var d = Date.now();
        a = h(a);
        var e = c("WebStorage").getLocalStorage();
        if (e && a !== null) {
            c("WebStorage").setItemGuarded(e, a, b + ":" + d);
            return b
        }
        return null
    }

    function q(a, b) {
        b = m(a, b);
        if (b == null) return null;
        p(a, b);
        return b
    }

    function a(a, b) {
        return m(a, b)
    }

    function b(a, b, c) {
        if (b != null) {
            var d = o(a);
            if (d === null) {
                k(a, b, c);
                return p(a, b)
            }
        }
        return q(a)
    }

    function e(a, b, c, e) {
        return d("ProfileCometSessionUtil").isSameProfileSession(b, c) || e === "popstate" || e === "initial" ? q(a, c) : l(a, c)
    }
    g.extend = q;
    g.get = a;
    g.initOrExtend = b;
    g.navigate = e
}), 98);
__d("CometTimeSpentNavigation", ["CometProductAttribution", "CometTimeSpentUtils", "CometVisitationManager", "ProfileCometSession"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
        i = null,
        j = new Set();

    function k() {
        j.forEach(function(a) {
            return a({
                destPathInfo: i,
                sourcePathInfo: h
            })
        })
    }
    a = {
        changePath: function(a, b, c) {
            c === void 0 && (c = null);
            h = i;
            var e = a.entityID,
                f = a.parentContainerId,
                g = a.tracePolicy,
                j = a.url;
            if (c && c.profile_session_id != null && e != null) {
                var l;
                c.profile_session_id = (l = d("ProfileCometSession").initOrExtend(e, (l = c) == null ? void 0 : l.profile_session_id, g)) != null ? l : (l = c) == null ? void 0 : l.profile_session_id
            }
            l = babelHelpers["extends"]({}, b);
            delete l.v2;
            b = d("CometProductAttribution").minifyProductAttributionV2(b);
            l = {
                pa: JSON.stringify(l),
                pav2: b,
                uri: j
            };
            l = d("CometTimeSpentUtils").addTimeSpentMetaData(a, l, c);
            b = d("CometVisitationManager").getCurrentVisitationId();
            b != null && (l.visitation_id = b);
            l.container_id == null && (e != null && (l.container_id = e));
            l.parent_container_id == null && f != null && (l.parent_container_id = f);
            i = {
                extraData: l,
                name: g
            };
            k()
        },
        getPathInfo: function() {
            return i
        },
        getSourcePathInfo: function() {
            return h
        },
        listenToPathChange: function(a) {
            j.add(a);
            return {
                cancelListen: function() {
                    return j["delete"](a)
                }
            }
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("CometVCTracker", ["vc-tracker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("vc-tracker")
}), 98);
__d("CometInteractionVC", ["CometVCTracker", "InteractionTracingMetrics", "JSScheduler", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        defer_expensive_calculation: function(a) {
            d("JSScheduler").scheduleLoggingPriCallback(a)
        },
        retain_element_reference: c("gkx")("950768") || c("gkx")("1293035") || c("gkx")("1537962")
    };

    function a(a, b, d) {
        a = c("InteractionTracingMetrics").get(a);
        a = a && a.vcTracker;
        a && a.addMountPointMetadata(b, d)
    }

    function b(a, b) {
        a = c("InteractionTracingMetrics").get(a);
        a = a && a.vcTracker;
        a && a.addMutationRoot(b)
    }

    function e(a, b) {
        var d = c("InteractionTracingMetrics").currentInteractionLogger();
        d.forEach(function(c) {
            var d = c && c.vcTracker;
            d && c.type === b && d.addMutationRoot(a)
        })
    }

    function f(a, b) {
        a = c("InteractionTracingMetrics").get(a);
        a && a.vcTracker && a.vcTracker.observeMutation(b)
    }

    function i(a, b, d) {
        return new(c("CometVCTracker").VisualCompletionTraceForInteraction)(b, 0, a, d, h)
    }

    function j(a) {
        var b = [];
        c("InteractionTracingMetrics").currentInteractionLogger().forEach(function(c) {
            c.vcTracker && b.push(c.vcTracker.waitLoadingState(a))
        });
        return b
    }
    g.addMountPointMetaData = a;
    g.addMutationRootForTraceId = b;
    g.addMutationRootForTraceType = e;
    g.observeMutation = f;
    g.startVisualCompletionTrace = i;
    g.trackLoadingState = j
}), 98);
__d("CometVisualCompletion", ["CometVCTracker", "JSScheduler", "QPLEvent", "gkx", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            defer_expensive_calculation: function(a) {
                d("JSScheduler").scheduleLoggingPriCallback(a)
            },
            retain_element_reference: c("gkx")("950768") || c("gkx")("1293035") || c("gkx")("1537962")
        },
        i = 0,
        j = null,
        k = new Map(),
        l = 4,
        m;
    a = {
        addAnnotation: function(a, b) {
            j != null && j.addAnnotation(a, b)
        },
        addFirstMarkerPoint: function(a, b, d) {
            b === void 0 && (b = c("performanceAbsoluteNow")()), d === void 0 && (d = {}), j != null && b != null && b > 0 && j.addFirstMarkerPoint(a, b, d)
        },
        addMarkerPoint: function(a, b, d) {
            b === void 0 && (b = c("performanceAbsoluteNow")()), d === void 0 && (d = {}), j != null && b != null && b > 0 && j.addMarkerPoint(a, b, d)
        },
        addTag: function(a, b) {
            j != null && j.addTag(a, b)
        },
        addTracedInteraction: function(a, b, e) {
            var f = 1,
                g = null;
            k.get(a) && (f = k.get(a) + 1);
            k.set(a, f);
            if (j != null) {
                if (f >= l) return function() {};
                g = j.traceID;
                j.addMarkerPoint(a + "_" + f + "_start", c("performanceAbsoluteNow")(), {
                    interactionId: b,
                    qplEvent: d("QPLEvent").getMarkerId(e)
                })
            }
            return function() {
                j != null && j.traceID === g && j.addMarkerPoint(a + "_" + f + "_end", c("performanceAbsoluteNow")())
            }
        },
        addVisualElement: function(a, b, d) {
            d === void 0 && (d = c("performanceAbsoluteNow")()), j != null && a != null && (j.mutationSeq++, j.addVisualElement(j.mutationSeq, a, b, d))
        },
        dumpLocks: function() {
            if (j != null) return j.dumpLocks()
        },
        excludeElement: function(a) {
            j != null && m == null && j.excludeElement(a)
        },
        getCurrentNavigationTrace: function() {
            return j
        },
        getReport: function() {
            return m
        },
        holdTrigger: function(a) {
            if (j != null) return j.lock(a);
            else return function() {}
        },
        resumeTrigger: function(a) {
            j != null && j.unlock(a)
        },
        setInitialScrollY: function(a) {
            j != null && j.setInitialScrollY(a)
        },
        setRoute: function(a) {
            j != null && a != null && j.setTracePolicy(a)
        },
        setupNavigationMutationRoot: function(a) {
            j != null && (j.observeMutation(a), j.registerNavigationMutationRoot(a))
        },
        traceNavigation: function(a, b, d) {
            j = new(c("CometVCTracker").VisualCompletionTraceForNavigation)(b, ++i, a, d, h);
            j.onComplete(function(a) {
                m = a
            });
            m = null;
            k.clear();
            return j
        },
        trackLoadingState: function(a) {
            if (j != null) return j.waitLoadingState(a);
            else return function() {}
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("cancelIdleCallbackComet", ["IdleCallbackImplementation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        d("IdleCallbackImplementation").cancelIdleCallback(a)
    }
    g["default"] = a
}), 98);
__d("clearIntervalComet", ["setTimeoutCometInternals"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("setTimeoutCometInternals").clearInterval_DO_NOT_USE
}), 98);
__d("clearTimeoutComet", ["setTimeoutCometInternals"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("setTimeoutCometInternals").clearTimeout_DO_NOT_USE
}), 98);
__d("setIntervalComet", ["JSScheduler", "setTimeoutCometInternals"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var c = d("JSScheduler").getCurrentPriorityLevel() === d("JSScheduler").priorities.unstable_Idle ? d("JSScheduler").priorities.unstable_Idle : d("JSScheduler").priorities.unstable_Low;
        for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
        return d("setTimeoutCometInternals").setIntervalAtPriority_DO_NOT_USE.apply(d("setTimeoutCometInternals"), [c, a, b].concat(f))
    }
    g["default"] = a
}), 98);
__d("setTimeoutComet", ["JSScheduler", "setTimeoutCometInternals"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var c = d("JSScheduler").getCurrentPriorityLevel() === d("JSScheduler").priorities.unstable_Idle ? d("JSScheduler").priorities.unstable_Idle : d("JSScheduler").priorities.unstable_Low;
        for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
        return d("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(d("setTimeoutCometInternals"), [c, a, b].concat(f))
    }
    g["default"] = a
}), 98);
__d("setTimeoutCometSpeculative", ["JSScheduler", "setTimeoutCometInternals"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        for (var c = arguments.length, e = new Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++) e[f - 2] = arguments[f];
        return d("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(d("setTimeoutCometInternals"), [d("JSScheduler").priorities.unstable_Idle, a, b].concat(e))
    }
    g["default"] = a
}), 98);
__d("CometChromeDome", ["JSScheduler", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("Chromedome").__setRef("CometChromeDome");

    function a() {
        h.onReady(function(a) {
            d("JSScheduler").scheduleLoggingPriCallback(function() {
                a.start({})
            })
        })
    }
    g.init = a
}), 98);
__d("useTopNavigationLogging", ["CometPassiveGetRouterStateContext", "CometProductAttribution", "WebSession", "react", "requireDeferred", "useVisibilityObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = a.useCallback,
        i = a.useContext,
        j = a.useMemo,
        k = c("requireDeferred")("CometTopnavItemClickFalcoEvent").__setRef("useTopNavigationLogging"),
        l = c("requireDeferred")("CometTopnavItemImpressionFalcoEvent").__setRef("useTopNavigationLogging"),
        m = function(a) {
            var b = a.badgeValue;
            b = b === void 0 ? "" : b;
            var c = a.itemKey,
                e = a.navItemType,
                f = a.passiveGetRouterState,
                g = a.position;
            g = g === void 0 ? 0 : g;
            a = a.selected;
            a = a === void 0 ? !1 : a;
            return {
                bt: "number",
                bv: b,
                nii: null,
                nin: c,
                nip: g,
                nit: e,
                pa: d("CometProductAttribution").getMinifiedTopMostRouteProductAttribution(f),
                sel: a,
                si: d("WebSession").getId()
            }
        },
        n = function(a) {
            var b = h(function() {
                k.onReady(function(b) {
                    b.log(function() {
                        return m(a)
                    })
                })
            }, [a]);
            return b
        },
        o = function(a) {
            var b = h(function() {
                l.onReady(function(b) {
                    b.log(function() {
                        return m(a)
                    })
                })
            }, [a]);
            return c("useVisibilityObserver")({
                onVisible: b
            })
        },
        p = function(a) {
            var b = a.badgeValue,
                d = b === void 0 ? "" : b,
                e = a.itemKey,
                f = a.navItemType,
                g = a.position;
            b = a.selected;
            var h = b === void 0 ? !1 : b,
                k = i(c("CometPassiveGetRouterStateContext"));
            a = j(function() {
                return {
                    badgeValue: d,
                    itemKey: e,
                    navItemType: f,
                    passiveGetRouterState: k,
                    position: g,
                    selected: h
                }
            }, [k, d, e, f, g, h]);
            return [n(a), o(a)]
        };
    b = function() {
        return p({
            itemKey: "logo",
            navItemType: "logo"
        })
    };
    e = function() {
        return p({
            itemKey: "create-button",
            navItemType: "create"
        })
    };
    f = function() {
        return p({
            itemKey: "mega-menu-jewel",
            navItemType: "mega_menu"
        })
    };
    a = function(a, b) {
        return p({
            itemKey: a,
            navItemType: "create",
            position: b
        })
    };
    var q = function() {
            return p({
                itemKey: "settings-button",
                navItemType: "jewel"
            })
        },
        r = function() {
            return p({
                itemKey: "home-link",
                navItemType: "topnav-link"
            })
        },
        s = function() {
            return p({
                itemKey: "profile-link",
                navItemType: "topnav-link"
            })
        },
        t = function() {
            return p({
                itemKey: "find-friends",
                navItemType: "topnav-link"
            })
        },
        u = function(a, b, c) {
            return p({
                itemKey: a,
                navItemType: "settings",
                position: b,
                selected: c
            })
        },
        v = function() {
            return p({
                itemKey: "messenger-jewel",
                navItemType: "jewel"
            })
        },
        w = function() {
            return p({
                itemKey: "friends-jewel",
                navItemType: "jewel"
            })
        },
        x = function(a) {
            return p({
                badgeValue: a,
                itemKey: "notifications-jewel",
                navItemType: "jewel"
            })
        },
        y = function() {
            return p({
                itemKey: "birthdays",
                navItemType: "birthdays"
            })
        },
        z = function() {
            return p({
                itemKey: "inline-friends-rhc",
                navItemType: "inline_friends_rhc"
            })
        },
        A = function() {
            return p({
                itemKey: "pages-rhc",
                navItemType: "pages_rhc"
            })
        },
        B = function() {
            return p({
                itemKey: "friends-count-rhc",
                navItemType: "friend_count_rhc"
            })
        },
        C = function() {
            return p({
                itemKey: "event",
                navItemType: "events"
            })
        },
        D = function() {
            return p({
                itemKey: "live-video-rhc",
                navItemType: "live_video_rhc"
            })
        },
        E = function() {
            return p({
                itemKey: "watch-video-rhc",
                navItemType: "watch_video_rhc"
            })
        };
    g.useLogoLoggingCallbacks = b;
    g.useCreateButtonLoggingCallbacks = e;
    g.useMegaMenuLoggingCallbacks = f;
    g.useCreateItemLoggingCallbacks = a;
    g.useSettingsButtonLoggingCallbacks = q;
    g.useHomeLinkLoggingCallbacks = r;
    g.useProfileLinkLoggingCallbacks = s;
    g.useFindFriendsLinkLoggingCallbacks = t;
    g.useSettingsItemLoggingCallbacks = u;
    g.useMessengerButtonLoggingCallbacks = v;
    g.useFriendsButtonLoggingCallbacks = w;
    g.useNotificationsButtonLoggingCallbacks = x;
    g.useBirthdaysButtonLoggingCallbacks = y;
    g.useInlineFriendRequestsRHCLoggingCallbacks = z;
    g.usePagesRHCLoggingCallbacks = A;
    g.useFriendRequestsCountRHCLoggingCallbacks = B;
    g.useEventsButtonLoggingCallbacks = C;
    g.useLiveVideoRHCLoggingCallbacks = D;
    g.useWatchVideoRHCLoggingCallbacks = E
}), 98);
__d("CometIsInNotificationsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(!1);
    g["default"] = b
}), 98);
__d("MWChatTabEntryPoints.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {};
    f.tabEntryPoints = a
}), null);
__d("PresenceStatusContext", ["emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = [];
    b = a.createContext({
        addListener: function() {
            return c("emptyFunction")
        },
        get: function() {
            return 0
        },
        getChatVisibility: function() {
            return !1
        },
        getOnlineIDs: function() {
            return h
        },
        getStatus: function() {
            return null
        }
    });
    g["default"] = b
}), 98);
__d("LsSystemFolderInterop.bs", ["LsSystemFolder.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    c = (a = b("LsSystemFolder.bs")).inbox;
    d = a.mplace;
    e = a.other;
    b = a.pending;
    a = a.jobs;
    f.inbox = c;
    f.mplace = d;
    f.other = e;
    f.pending = b;
    f.jobs = a
}), null);
__d("LsSystemFolderInterop.re", ["LsSystemFolderInterop.bs"], (function(a, b, c, d, e, f) {
    c = (a = b("LsSystemFolderInterop.bs")).inbox;
    f.inbox = c;
    d = a.mplace;
    f.mplace = d;
    e = a.other;
    f.other = e;
    b = a.pending;
    f.pending = b;
    c = a.jobs;
    f.jobs = c
}), null);
__d("CometRelayScheduler", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").startTransition;
    a = {
        cancel: function() {},
        schedule: function(a) {
            h(a);
            return ""
        }
    };
    g["default"] = a
}), 98);
__d("RTWebCallWindowControllerLoader", ["FBLogger", "JSResourceForInteraction", "Promise", "regeneratorRuntime", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("RTWebCallWindowOpener").__setRef("RTWebCallWindowControllerLoader"),
        i = c("requireDeferred")("ZenonCallWindowController").__setRef("RTWebCallWindowControllerLoader"),
        j = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            return a
        }(babelHelpers.wrapNativeSuper(Error));
    a = function() {
        function a(a, b) {
            this.$1 = null, this.$2 = a, this.$3 = b
        }
        var d = a.prototype;
        d.init = function() {
            var a, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        f.prev = 0;
                        f.next = 3;
                        return b("regeneratorRuntime").awrap(b("Promise").all([i.load(), h.load()]));
                    case 3:
                        a = f.sent;
                        d = a[0];
                        e = a[1];
                        this.$1 = new d(this.$2, {
                            callWindowInitializerResource: this.$3,
                            callWindowOpener: new e(),
                            uriBuilderResource: c("JSResourceForInteraction")("ZenonUriBuilder").__setRef("RTWebCallWindowControllerLoader")
                        });
                        f.next = 12;
                        break;
                    case 9:
                        f.prev = 9, f.t0 = f["catch"](0), c("FBLogger")("rtc_www").catching(f.t0).warn("Failed to initialize call window controller");
                    case 12:
                    case "end":
                        return f.stop()
                }
            }, null, this, [
                [0, 9]
            ])
        };
        d.initCall = function(a) {
            if (this.$1) return this.$1.initCall(a);
            else throw new j()
        };
        return a
    }();
    a.ResourceNotReadyError = j;
    g["default"] = a
}), 98);
__d("ZenonSignalingProtocol", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        P2P: "p2p",
        MW: "mw",
        MWPP: "mw++"
    });
    c = a;
    f["default"] = c
}), 66);
__d("RTWebIncomingRingConfiguration", ["UserAgent", "ZenonSignalingProtocol", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (a === c("ZenonSignalingProtocol").P2P) return (c("gkx")("1582") ? c("UserAgent").isBrowser("Chrome >= 67") : c("UserAgent").isBrowser("Chrome >= 49")) || c("UserAgent").isBrowser("Firefox >= 52") || c("UserAgent").isBrowser("Edge >= 15.15042") && c("gkx")("1341692") && !c("gkx")("1680228") || c("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") || c("UserAgent").isBrowser("Opera >= 58") || c("UserAgent").isBrowser("Oculus Browser >= 6") && c("gkx")("1188589");
        else if (a === c("ZenonSignalingProtocol").MW) return (c("gkx")("1582") ? c("UserAgent").isBrowser("Chrome >= 67") : c("UserAgent").isBrowser("Chrome >= 49")) || c("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") || c("UserAgent").isBrowser("Opera >= 58") || c("UserAgent").isBrowser("Firefox >= 59") || c("UserAgent").isBrowser("Safari >= 14") && c("gkx")("1451") || c("UserAgent").isBrowser("Oculus Browser >= 6") && c("gkx")("1188589");
        return !1
    }
    g.isSupportedClientForProtocol = a
}), 98);
__d("RTWebPreCallContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = a(null);
    g["default"] = b
}), 98);
__d("ZenonCallInviteModelLoader", ["BaseEventEmitter", "Promise", "emptyFunction", "regeneratorRuntime", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("ZenonCallInviteModel").__setRef("ZenonCallInviteModelLoader"),
        i = c("requireDeferred")("delegateZenonCallInviteModel").__setRef("ZenonCallInviteModelLoader");
    a = function(a) {
        babelHelpers.inheritsLoose(d, a);

        function d(b) {
            var d;
            d = a.call(this) || this;
            d.$ZenonCallInviteModelLoader1 = null;
            d.getCurrentInvite = function() {
                return null
            };
            d.startListening = function(a) {
                this.$ZenonCallInviteModelLoader1 = a
            };
            d.stopListening = function() {
                this.$ZenonCallInviteModelLoader1 = null
            };
            d.dismiss = c("emptyFunction");
            d.accept = c("emptyFunction");
            d.decline = c("emptyFunction");
            d.$ZenonCallInviteModelLoader2 = b;
            return d
        }
        var e = d.prototype;
        e.init = function() {
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        f.next = 2;
                        return b("regeneratorRuntime").awrap(b("Promise").all([h.load(), i.load()]));
                    case 2:
                        a = f.sent, c = a[0], d = a[1], e = new c(this.$ZenonCallInviteModelLoader2), d(this, e), this.$ZenonCallInviteModelLoader1 !== null && e.startListening(this.$ZenonCallInviteModelLoader1);
                    case 8:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        return d
    }(c("BaseEventEmitter"));
    g["default"] = a
}), 98);
__d("CometTypeaheadBackButton.react", ["fbt", "CometVisualCompletionAttributes", "Locale", "TetraIcon.react", "cr:12146", "cr:12147", "emptyFunction", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var e = a.onPress;
        e = e === void 0 ? c("emptyFunction") : e;
        a = a.testid;
        a = d("Locale").isRTL() ? b("cr:12147") : b("cr:12146");
        return i.jsx("div", babelHelpers["extends"]({
            className: "thwo4zme"
        }, c("CometVisualCompletionAttributes").IGNORE, {
            children: i.jsx("div", {
                className: "ciadx1gn",
                children: i.jsx(c("TetraIcon.react"), {
                    "aria-hidden": !0,
                    "aria-label": h._( /*FBT_CALL*/ "Exit typeahead" /*FBT_CALL*/ ),
                    color: "secondary",
                    focusable: !1,
                    icon: a,
                    onPress: e,
                    size: 20,
                    testid: void 0
                })
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometSSREntrypoint", ["objectValues"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        var b;
        b = {
            actor_id: (b = (b = a.environmentProviderOptions) == null ? void 0 : b.actorID) != null ? b : null,
            id: a.parameters.params.id,
            name: a.parameters.params.name,
            ssr_boundary: (b = (b = a.environmentProviderOptions) == null ? void 0 : b.ssrBoundary) != null ? b : null,
            variables: a.variables
        };
        return b
    }

    function i(a, b) {
        b = a.getPreloadProps(b);
        var d = b.entryPoints;
        b = b.queries;
        b = (b = b) != null ? b : {};
        var e = c("objectValues")(b).filter(function(a) {
                return a != null
            }),
            f = [a.root.getModuleId()];
        if (d != null) {
            b = Object.keys(d);
            b.forEach(function(a) {
                a = d[a];
                if (a == null) return;
                var b = a.entryPoint;
                a = a.entryPointParams;
                b = i(b, a);
                e = e.concat(b.queries);
                f = f.concat(b.roots)
            })
        }
        return {
            queries: e,
            roots: f
        }
    }

    function a(a, b) {
        a = i(a, b);
        b = a.queries;
        return b.map(h)
    }

    function b(a) {
        a = a.map(function(a) {
            return i(a.entryPoint, a.entryPointParams)
        });
        return a.map(function(a) {
            var b = a.queries;
            a = a.roots;
            return {
                quries: b.map(h),
                roots: a
            }
        })
    }

    function d(a, b) {
        a = i(a, b);
        b = a.queries;
        a = a.roots;
        return {
            queries: b.map(h),
            roots: a
        }
    }

    function e() {
        throw new Error("This function should not be called. It exists solely for the type-generation")
    }
    g.processRootEntryPoint = a;
    g.processRootEntryPoints = b;
    g.processRootEntryPointData = d;
    g.preloadQuery = e
}), 98);
__d("CometUsabilityTaskCustomModule.flow", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        MARKETPLACE_COMPOSER: "marketplace_composer",
        WATCH_TAB: "watch_tab",
        WATCH_AND_SCROLL: "watch_and_scroll"
    });
    f.CometUsabilityTaskCustomModule = a
}), 66);
__d("useCometUBTReportCustomEvent", ["CometUBTContext", "QPLUserFlow", "cr:12284", "qpl", "react", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext,
        i = c("requireDeferred")("handleCometUBTCheckSuccessMarker").__setRef("useCometUBTReportCustomEvent"),
        j = c("qpl")._(42795009, "8382");

    function a(a) {
        var d = b("cr:12284")(),
            e = h(c("CometUBTContext"));
        if (e == null || e.state.taskState !== "ACTIVE") return;
        var g = e.state.successMarkers,
            k = String(a);
        return function(a) {
            c("QPLUserFlow").addPoint(j, k + "." + a), i.onReadyImmediately(function(b) {
                return b(e.dispatch, {
                    event: a,
                    extraData: null,
                    module: k
                }, g, e.state.taskResult, function(a) {
                    d && d.validateSuccessMarker(a)
                })
            })
        }
    }
    g["default"] = a
}), 98);
__d("CometEventListener", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, d, e) {
        if (a.addEventListener) {
            a.addEventListener(b, d, e);
            return {
                remove: function() {
                    a.removeEventListener(b, d, e)
                }
            }
        } else throw c("unrecoverableViolation")('Attempted to listen to eventType "' + b + '" on a target that does not have addEventListener.', "comet_ui")
    }
    a = {
        bubbleWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                capture: !1,
                passive: d
            })
        },
        capture: function(a, b, c) {
            return h(a, b, c, !0)
        },
        captureWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                capture: !0,
                passive: d
            })
        },
        listen: function(a, b, c) {
            return h(a, b, c, !1)
        },
        registerDefault: function(a, b) {
            throw c("unrecoverableViolation")("EventListener.registerDefault is not implemented.", "comet_ui")
        },
        suppress: function(a) {
            a.preventDefault(), a.stopPropagation()
        }
    };
    g["default"] = a
}), 98);
__d("CometAudioManagerContexts", ["cometUniqueID", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react").createContext;

    function a() {
        return c("cometUniqueID")()
    }
    e = b({
        muted: !0,
        setMuted: function() {},
        setVolume: function() {},
        volume: 1
    });
    f = b(null);
    d = b(null);
    g.makeAudioGroupID = a;
    g.CometAudioLocalScopeContext = e;
    g.CometAudioGroupContext = f;
    g.AudioApiContext = d
}), 98);
__d("CoreVideoPlayerAutoplayClientUtils", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {}

    function b(a, b, c, d) {
        return a === "PAUSE" && b === "PAUSE" && !c && d
    }
    g.log = a;
    g.componentShouldPause = b
}), 98);
__d("createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule", ["qex"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        function b(b) {
            var d;
            d = (d = c("qex")._("1849989")) != null ? d : !1;
            return (!d || b.paused) && b.bandwidthEstimate < a ? "IGNORE" : "SKIP"
        }
        b.displayName = "evaluateVideoAutoplayIgnoreOnLowBandwidthRule";
        return b
    }
    g["default"] = a
}), 98);
__d("createEvaluateVideoAutoplayPauseOnInvisibleRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        function b(b) {
            b = b.videoPlayerPassiveViewabilityInfo;
            b = b && b.getCurrent();
            b = b ? b.visiblePercentage : null;
            b = b === null || b >= a;
            return b ? "SKIP" : "PAUSE"
        }
        b.displayName = "evaluateVideoAutoplayPauseOnInvisibleRule:" + a + "%";
        return b
    }
    f["default"] = a
}), 66);
__d("createEvaluateVideoAutoplayPauseOnInvisibleUsingExtraViewabilityRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        c === void 0 && (c = !0);

        function d(d) {
            var e = d.muted;
            d = d.videoPlayerExtendedPassiveViewabilityInfo;
            if (c && e) return "SKIP";
            e = d == null ? void 0 : d.getCurrent();
            d = e == null ? void 0 : e.visiblePercentage;
            var f = d == null || d >= a;
            if (f) return "SKIP";
            e = e == null ? void 0 : (f = e.positionToViewport) == null ? void 0 : f.height;
            return e != null && d != null && d * e >= window.innerHeight * b ? "SKIP" : "PAUSE"
        }
        d.displayName = "evaluateVideoAutoplayPauseOnInvisibleUsingExtendedViewabilityRule:" + a + ":" + b + "%";
        return d
    }
    f["default"] = a
}), 66);
__d("createEvaluateVideoAutoplayPauseOnMutedInvisibleRule", ["createEvaluateVideoAutoplayPauseOnInvisibleRule"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(a);

        function d(a) {
            return a.muted ? b(a) : "SKIP"
        }
        d.displayName = "evaluateVideoAutoplayPauseOnMutedInvisibleRule:" + a + "%";
        return d
    }
    g["default"] = a
}), 98);
__d("evaluateVideoAutoplayDefaultIgnoreRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return "IGNORE"
    }
    a.displayName = "evaluateVideoAutoplayDefaultIgnoreRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayIgnoreExternalMediaRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.isExternalMedia ? "IGNORE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayIgnoreExternalMediaRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayIgnoreOnBroadcastEndedRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a.ended;
        a = a.broadcastStatus != null;
        return a && b ? "IGNORE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnBroadcastEndedRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayIgnoreOnEndedRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a.ended;
        return a ? "IGNORE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnEndedRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayIgnoreOnFrozenRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a.isFrozenPassive;
        a = a.getCurrentState();
        return a ? "IGNORE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnFrozenRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayIgnoreOnUnmuteRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a.muted;
        a = a.paused;
        return !b && !a ? "IGNORE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnUnmuteRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayIgnoreOnUserPausedRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a.paused;
        a = a.lastPauseReason;
        return b && (a === "user_initiated" || a === "other_user_initiated") ? "IGNORE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnUserPausedRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayIgnoreOnUserPlayRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a.paused,
            c = a.muted;
        a = a.lastPlayReason;
        return !c && !b && (a === "user_initiated" || a === "other_user_initiated") ? "IGNORE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnUserPlayRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayPauseOnAdInvisibleRule", ["VideoPlayerViewabilityConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.adClientToken;
        a = a.videoPlayerPassiveViewabilityInfo;
        a = a && a.getCurrent();
        a = a ? a.visiblePercentage : null;
        a = a === null || a >= c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE;
        return b != null && !a ? "PAUSE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayPauseOnAdInvisibleRule";
    g["default"] = a
}), 98);
__d("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = !1;

    function a(a) {
        var b = a.adClientToken,
            c = a.hiddenSubtreePassive,
            d = a.muted;
        a = a.isBackgrounded || c.getCurrentState().backgrounded;
        c = b != null;
        return !a || !d ? "SKIP" : a && d && c ? "PAUSE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayPauseOnHiddenSubtreeRule", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a.hiddenSubtreePassive;
        return a.getCurrentState().hidden ? "PAUSE" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayPauseOnHiddenSubtreeRule";
    f["default"] = a
}), 66);
__d("evaluateVideoAutoplayPauseOnMutedBackgroundedRule", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = !1;

    function a(a) {
        var b = a.hiddenSubtreePassive,
            c = a.muted;
        a = a.isBackgrounded || b.getCurrentState().backgrounded;
        return a ? a && c ? "PAUSE" : "SKIP" : "SKIP"
    }
    a.displayName = "evaluateVideoAutoplayPauseOnMutedBackgroundedRule";
    f["default"] = a
}), 66);
__d("VideoPlayerAutoplayRulesProvider", ["VideoPlayerViewabilityConstants", "createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule", "createEvaluateVideoAutoplayPauseOnInvisibleRule", "createEvaluateVideoAutoplayPauseOnInvisibleUsingExtraViewabilityRule", "createEvaluateVideoAutoplayPauseOnMutedInvisibleRule", "evaluateVideoAutoplayDefaultIgnoreRule", "evaluateVideoAutoplayIgnoreExternalMediaRule", "evaluateVideoAutoplayIgnoreOnBroadcastEndedRule", "evaluateVideoAutoplayIgnoreOnEndedRule", "evaluateVideoAutoplayIgnoreOnFrozenRule", "evaluateVideoAutoplayIgnoreOnUnmuteRule", "evaluateVideoAutoplayIgnoreOnUserPausedRule", "evaluateVideoAutoplayIgnoreOnUserPlayRule", "evaluateVideoAutoplayPauseOnAdInvisibleRule", "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule", "evaluateVideoAutoplayPauseOnHiddenSubtreeRule", "evaluateVideoAutoplayPauseOnMutedBackgroundedRule", "gkx", "qex", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnAdInvisibleRule"), c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE), c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUnmuteRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")];
    e = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnAdInvisibleRule"), c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE), c("createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule")((d = c("qex")._("1678524")) != null ? d : 25e4), c("evaluateVideoAutoplayPauseOnMutedBackgroundedRule"), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUnmuteRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")];
    f = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")];
    d = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnAdInvisibleRule"), c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule")((d = c("qex")._("1788354")) != null ? d : 25e4), c("evaluateVideoAutoplayIgnoreOnUserPausedRule")];
    !c("gkx")("2988") ? (d.push(c("createEvaluateVideoAutoplayPauseOnInvisibleUsingExtraViewabilityRule")(c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE, .75)), d.push(c("createEvaluateVideoAutoplayPauseOnMutedInvisibleRule")(c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE))) : d.push(c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE));
    c("gkx")("1564135") ? d.push(c("evaluateVideoAutoplayIgnoreOnBroadcastEndedRule")) : d.push(c("evaluateVideoAutoplayIgnoreOnEndedRule"));
    d = d.slice();
    var h = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnAdInvisibleRule"), c("createEvaluateVideoAutoplayPauseOnMutedInvisibleRule")(.01), c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUnmuteRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")].filter(Boolean),
        i = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUnmuteRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")],
        j = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnAdInvisibleRule"), c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUnmuteRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")],
        k = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnAdInvisibleRule"), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")],
        l = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUnmuteRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")],
        m = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"), c("evaluateVideoAutoplayIgnoreOnUnmuteRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")],
        n = [c("evaluateVideoAutoplayIgnoreOnFrozenRule"), c("evaluateVideoAutoplayPauseOnAdInvisibleRule"), c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE), c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"), c("evaluateVideoAutoplayIgnoreOnUnmuteRule"), c("evaluateVideoAutoplayIgnoreOnUserPausedRule"), c("evaluateVideoAutoplayIgnoreOnUserPlayRule"), c("evaluateVideoAutoplayIgnoreOnEndedRule")],
        o = [c("evaluateVideoAutoplayDefaultIgnoreRule")],
        p = [c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(0)],
        q = {
            always_disable: o,
            basic: b,
            bulletin: p,
            creator_studio: n,
            default_feed: e,
            gif: f,
            live_producer: i,
            stages: m,
            tournament_hero: j,
            watch_feed: d,
            watch_live_tab: h,
            wns: k,
            work_knowledge: l
        };
    for (var r in q) q[r].push(c("evaluateVideoAutoplayIgnoreExternalMediaRule"));
    o = function(a) {
        a = q[a];
        if (!a) throw c("unrecoverableViolation")("Unknown VideoPlayerAutoplayRulesType passed to VideoPlayerAutoplayRulesProvider", "comet_video_player");
        return a
    };

    function a(a) {
        return a
    }
    g.provideAutoplayRules = o;
    g.makeVideoPlayerAutoplayRules = a
}), 98);
__d("VideoPlayerAutoplayContexts", ["VideoPlayerAutoplayRulesProvider", "cometUniqueID", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react").createContext;
    e = b({
        autoplayLocalRules: d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("basic"),
        autoplayScopeID: "null"
    });
    f = b(null);

    function a() {
        return c("cometUniqueID")()
    }
    g.VideoAutoplayLocalScopeContext = e;
    g.AutoplayApiContext = f;
    g.makeAutoplayScopeID = a
}), 98);
__d("VideoAutoplayLocalScopeProvider.react", ["VideoPlayerAutoplayContexts", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
        j = b.useRef;

    function a(a) {
        var b = a.autoplayLocalRules,
            c = a.customAutoplaySelectionFunc,
            e = a.disableScrollBeforePlayWhenOffscreen,
            f = d("VideoPlayerAutoplayContexts").makeAutoplayScopeID(),
            g = j(f);
        f = i(function() {
            return {
                autoplayLocalRules: b,
                autoplayScopeID: g.current,
                customAutoplaySelectionFunc: c,
                disableScrollBeforePlayWhenOffscreen: e
            }
        }, [g, c, b, e]);
        return h.jsx(d("VideoPlayerAutoplayContexts").VideoAutoplayLocalScopeContext.Provider, {
            value: f,
            children: a.children
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CastingContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    c = a.createContext(null);
    e = a.createContext(null);
    f = a.createContext(null);
    g.CastingStateContext = b;
    g.CastingExperienceStateContext = c;
    g.SetCastingControllerContext = e;
    g.CastingControllerContext = f
}), 98);
__d("CastingStateHooks", ["CastingContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        var a = h(d("CastingContext").CastingStateContext);
        return (a == null ? void 0 : a.receiverIsConnected) || !1
    }

    function i() {
        var a = s();
        return a == null ? null : a.currentVideoID
    }

    function b() {
        var a = i();
        return a != null
    }

    function c() {
        var a = s();
        return a == null ? 0 : a.currentPosition || 0
    }

    function e() {
        var a = s();
        return a == null ? 0 : a.currentDuration || 0
    }

    function f() {
        var a = s();
        if (a == null) return !1;
        a = a.currentPlaybackState;
        return a === "play" || a === "seeking"
    }

    function j() {
        var a = s();
        if (a == null) return !1;
        a = a.currentPlaybackState;
        return a === "paused"
    }

    function k() {
        var a = s();
        if (a == null) return !1;
        a = a.currentPlaybackState;
        return a === "ended"
    }

    function l() {
        var a = h(d("CastingContext").CastingStateContext);
        return a == null || !a.receiverIsConnected ? !1 : a.receiverIsMuted === !0
    }

    function m() {
        var a = h(d("CastingContext").CastingStateContext);
        return a == null || !a.receiverIsConnected ? 0 : a.receiverVolume || 0
    }

    function n() {
        var a = h(d("CastingContext").CastingStateContext);
        return a == null || !a.receiverIsConnected ? null : a.receiverFriendlyName
    }

    function o() {
        var a = t();
        return a == null ? !1 : !0
    }

    function p() {
        var a = u();
        return a == null ? !1 : a.currentPlaybackState === "paused"
    }

    function q() {
        var a = u();
        return a == null ? !1 : a.currentPlaybackState === "play"
    }

    function r() {
        var a = u();
        return a == null ? null : a.currentAssetID
    }

    function s() {
        var a = h(d("CastingContext").CastingStateContext),
            b = h(d("CastingContext").CastingExperienceStateContext);
        if (a == null || !a.receiverIsConnected) return null;
        return (b == null ? void 0 : b.type) !== "video_channel" ? null : b
    }

    function t() {
        var a = h(d("CastingContext").CastingStateContext),
            b = h(d("CastingContext").CastingExperienceStateContext);
        if (a == null || !a.receiverIsConnected) return null;
        return (b == null ? void 0 : b.type) !== "photo" ? null : b
    }

    function u() {
        var a = h(d("CastingContext").CastingStateContext),
            b = h(d("CastingContext").CastingExperienceStateContext);
        if (a == null || !a.receiverIsConnected) return null;
        return (b == null ? void 0 : b.type) !== "photo_album" ? null : b
    }
    g.useIsCastingConnected = a;
    g.useCastingVideoID = i;
    g.useIsCastingAnyVideo = b;
    g.useCastingCurrentTime = c;
    g.useCastingDuration = e;
    g.useCastingIsPlaying = f;
    g.useCastingIsPaused = j;
    g.useCastingIsEnded = k;
    g.useCastingIsMuted = l;
    g.useCastingVolume = m;
    g.useCastingReceiverFriendlyName = n;
    g.useIsCastingPhotoExperience = o;
    g.useCastingIsAlbumPaused = p;
    g.useCastingIsAlbumPlaying = q;
    g.useCastingAlbumAssetID = r
}), 98);
__d("CometWatchAndScrollTriggerContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
        isControlShown: !1,
        isTriggerDisabled: !1,
        setIsControlShown: null,
        setIsTriggerDisabled: null
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("VideoPlayerWithWatchAndScrollTrigger.react", ["$InternalEnum", "CastingStateHooks", "CometWatchAndScrollTriggerContext", "CometWatchAndScrollVideoContext", "VideoPlayerHooks", "react", "requireDeferred", "useVisibilityObserver", "useWatchAndScrollTrigger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
        j = e.useContext,
        k = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef("VideoPlayerWithWatchAndScrollTrigger.react"),
        l = 5,
        m = 30,
        n = b("$InternalEnum")({
            BROADCAST: "broadcast",
            HERO: "hero",
            PAGE_SPOTLIGHT_CARD: "page_spotlight_card",
            TAHOE: "tahoe",
            VOD: "vod",
            WNS_CONTROL: "wns_control"
        });

    function a(a) {
        var b = a.subOrigin,
            e = a.triggerType;
        a = a.videoID;
        var f = j(c("CometWatchAndScrollTriggerContext")),
            g = f.isControlShown;
        f = f.isTriggerDisabled;
        var o = d("VideoPlayerHooks").useController(),
            p = d("useWatchAndScrollTrigger").useWatchAndScrollTrigger(b, e, a),
            q = j(c("CometWatchAndScrollVideoContext")),
            r = d("CastingStateHooks").useIsCastingAnyVideo();
        b = i(function(a) {
            if (a.hiddenReason !== "NOT_IN_VIEWPORT") return;
            a = o.getCurrentState();
            var b = a.paused,
                c = !a.muted,
                d = o.getPlayheadPosition();
            a = a.duration;
            var f = l;
            a >= 30 && (f = Math.max(l, Math.min(m, Math.ceil(a * 0 / 100))));
            if (!b && !r && q == null) switch (e) {
                case n.HERO:
                    p();
                    k.onReady(function(a) {
                        a.log({
                            event: "watch_and_scroll_trigger",
                            event_target: "hero"
                        })
                    });
                    break;
                case n.BROADCAST:
                    c && (p(), k.onReady(function(a) {
                        a.log({
                            event: "watch_and_scroll_trigger",
                            event_target: "newsfeed_live"
                        })
                    }));
                    break;
                case n.VOD:
                    c && d >= f && (p(), k.onReady(function(a) {
                        a.log({
                            event: "watch_and_scroll_trigger",
                            event_target: "newsfeed_vod"
                        })
                    }));
                    break;
                default:
                    break
            }
        }, [o, q, e, p, r]);
        a = c("useVisibilityObserver")({
            onHidden: b
        });
        if (!g || f) return null;
        switch (e) {
            case n.HERO:
            case n.BROADCAST:
                return h.jsx("div", {
                    className: "k4urcfbm oqujnh0m",
                    ref: a
                });
            case n.VOD:
                return h.jsx("div", {
                    className: "k4urcfbm oqujnh0m",
                    ref: a
                });
            default:
                return null
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.WatchAndScrollTriggerType = n;
    g.VideoPlayerWithWatchAndScrollTrigger = a
}), 98);
__d("CometWatchAndScrollVideoContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometSetWatchAndScrollVideoContext", ["react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function() {
        c("recoverableViolation")("No provider of CometSetWatchAndScrollVideoContext exists", "comet_video_player")
    });
    g["default"] = b
}), 98);
__d("CometWatchAndScrollSoundContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        muted: null,
        setMuted: function() {},
        setVolume: function() {},
        volume: null
    });
    g["default"] = b
}), 98);
__d("usePlayerOriginRouteTracePolicy", ["CometIsInNotificationsContext", "CometRouteRenderType", "react", "useCometRouteTracePolicy", "useParentRoute", "useRoutePassthroughProps"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        var a = h(c("CometIsInNotificationsContext")),
            b = c("useCometRouteTracePolicy")(),
            e = d("CometRouteRenderType").useIsPushView(),
            f = c("useParentRoute")(),
            g = c("useRoutePassthroughProps")();
        if ((g == null ? void 0 : g.isARLTW) === !0) return "comet.watch.arltw";
        g = b === "comet.videos.tahoe";
        var i = b === "comet.stories.viewer";
        if (e) {
            if (g) return "unknown";
            if (i) return b
        }
        return a && !g ? b : (e = f == null ? void 0 : f.tracePolicy) != null ? e : b
    }
    g["default"] = a
}), 98);
__d("VideoPlayerViewabilityHooks", ["VideoPlayerHooks"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.useVideoPlayerExtendedPassiveViewabilityInfo = d("VideoPlayerHooks").useVideoPlayerExtendedPassiveViewabilityInfo, g.useVideoPlayerPassiveViewabilityInfo = d("VideoPlayerHooks").useVideoPlayerPassiveViewabilityInfo, g.useVideoPlayerViewabilityInfo = d("VideoPlayerHooks").useVideoPlayerViewabilityInfo
}), 98);
__d("useVideoPlayerPortalingPassthroughProps", ["VideoPlayerPortalingPlaceInfoProvider.react", "VideoPlayerViewabilityHooks", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;

    function a() {
        var a = d("VideoPlayerPortalingPlaceInfoProvider.react").useVideoPlayerPortalingPlaceInfo(),
            b = a.currentVideoID,
            c = a.thisPlaceID;
        a = d("VideoPlayerViewabilityHooks").useVideoPlayerViewabilityInfo();
        var e = a ? a.positionToViewport : null;
        a = h(function() {
            return {
                portableVideoID: b,
                portalingPlaceID: c,
                positionToViewport: e
            }
        }, [b, e]);
        return a
    }
    g["default"] = a
}), 98);
__d("useWatchAndScrollTrigger", ["CometSetWatchAndScrollVideoContext", "CometUsabilityTaskCustomModule.flow", "CometWatchAndScrollSoundContext", "VideoPlayerHooks", "react", "recoverableViolation", "useCometUBTReportCustomEvent", "usePlayerOriginRouteTracePolicy", "useVideoPlayerPortalingPassthroughProps"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useContext;

    function a(a, b, e) {
        var f = c("useVideoPlayerPortalingPassthroughProps")(),
            g = c("usePlayerOriginRouteTracePolicy")(),
            j = d("VideoPlayerHooks").useController(),
            k = i(c("CometSetWatchAndScrollVideoContext")),
            l = i(c("CometWatchAndScrollSoundContext")),
            m = c("useCometUBTReportCustomEvent")(d("CometUsabilityTaskCustomModule.flow").CometUsabilityTaskCustomModule.WATCH_AND_SCROLL),
            n = h(function() {
                var d = f.portableVideoID,
                    h = f.portalingPlaceID;
                l != null && (l.setMuted(null), l.setVolume(null));
                m && m("watch_video_wns");
                d != null && h != null ? k({
                    controller: j,
                    portableVideoID: d,
                    portalingPlaceID: h,
                    routeTracePolicy: g,
                    sessionStartTime: new Date(),
                    sessionTrigger: b,
                    subOrigin: a,
                    videoID: e
                }) : c("recoverableViolation")("Could not transition to Watch and Scroll player because portableVideoID was null", "comet_video_player")
            }, [m, f, k, j, g, l, a, b, e]);
        return n
    }
    g.useWatchAndScrollTrigger = a
}), 98);
__d("generateChainingSessionID", ["Random"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return "f" + (d("Random").random() * (1 << 30)).toString(16).replace(".", "")
    }
    g["default"] = a
}), 98);
__d("useCometTahoeChainingDepth", ["generateChainingSessionID", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = d("react");
    b = a.createContext;
    var i = a.useContext,
        j = a.useMemo,
        k = a.useReducer,
        l = a.useState,
        m = b({
            chainingDepthDispatch: null,
            chainingDepthState: 0,
            chainingSessionID: null
        });
    e = function() {
        var a = 0,
            b = function(a, b) {
                switch (b.type) {
                    case "INCREMENT":
                        return a + 1;
                    default:
                        return a
                }
            };
        b = k(b, a);
        var d = b[0],
            e = b[1];
        a = l(function() {
            return c("generateChainingSessionID")()
        });
        var f = a[0];
        a[1];
        return j(function() {
            return {
                chainingDepthDispatch: e,
                chainingDepthState: d,
                chainingSessionID: f
            }
        }, [e, d, f])
    };
    f = function() {
        return i(m)
    };
    d = function(a) {
        var b = a.children;
        a = a.value;
        return h.jsx(m.Provider, {
            value: a,
            children: b
        })
    };
    g.useChainingDepth = e;
    g.useChainingDepthContext = f;
    g.CometTahoeChainingDepthContextProvider = d
}), 98);
__d("CometWatchAndScrollSetStoryViewabilityLoggerContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function() {});
    g["default"] = b
}), 98);
__d("CometWatchAndScrollStoryViewabilityLoggerContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("warningComet", ["SiteData", "cr:1072546", "cr:1072547", "cr:1072549", "cr:983844", "err", "fb-error"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {}
    b = a;
    c = b;
    g["default"] = c
}), 98);
__d("ZenonIncomingRingSDK", ["BaseEventEmitter", "ZenonSignalingProtocol", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("ZenonParentCallsManager").__setRef("ZenonIncomingRingSDK");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$ZenonIncomingRingSDK1 = [], c.$ZenonIncomingRingSDK2 = [], b) || babelHelpers.assertThisInitialized(c)
        }
        var d = b.prototype;
        d.init = function(a) {
            var b = this;
            this.$ZenonIncomingRingSDK3 = a;
            h.onReady(function(c) {
                b.callsManager == null && (b.callsManager = new c(a));
                c = b.callsManager;
                c.addListener("unsupportedRing", function(a) {
                    return b.emit("unsupportedRing", a)
                });
                c.addListener("incomingRing", function(a) {
                    return b.emit("incomingRing", a)
                });
                c.addListener("ringCancel", function(a) {
                    return b.emit("ringCancel", a)
                });
                c.initListeners(b.$ZenonIncomingRingSDK1);
                while (b.$ZenonIncomingRingSDK2.length > 0) {
                    var d = b.$ZenonIncomingRingSDK2.shift();
                    c.startOutgoingCallIntent(d.nonce, d.callSummaryParams)
                }
            })
        };
        d.initListeners = function(a) {
            var b = this.callsManager;
            if (b != null) b.initListeners(a);
            else {
                (b = this.$ZenonIncomingRingSDK1).push.apply(b, a)
            }
        };
        d.removeListeners = function(a) {
            var b = this;
            if (this.callsManager != null) this.callsManager.removeListeners(a);
            else {
                var c = function() {
                    if (e) {
                        if (f >= d.length) return "break";
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) return "break";
                        g = f.value
                    }
                    var a = g;
                    b.$ZenonIncomingRingSDK1 = b.$ZenonIncomingRingSDK1.filter(function(b) {
                        return b !== a
                    })
                };
                for (var d = a, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    a = c();
                    if (a === "break") break
                }
            }
        };
        d.isCallSupported = function(a) {
            if (this.$ZenonIncomingRingSDK3) switch (a.type) {
                case "thread":
                    if (a.threadType === 1) return this.$ZenonIncomingRingSDK3.isSupportedClientForProtocol(c("ZenonSignalingProtocol").P2P);
                    else if (a.threadType === 2) return this.$ZenonIncomingRingSDK3.isSupportedClientForProtocol(c("ZenonSignalingProtocol").MW);
                    break;
                default:
                    return !1
            }
            return !1
        };
        d.startCallIntent = function(a, b) {
            this.callsManager ? this.callsManager.startOutgoingCallIntent(a, b) : this.$ZenonIncomingRingSDK2.push({
                callSummaryParams: b,
                nonce: a
            })
        };
        return b
    }(c("BaseEventEmitter"));
    g["default"] = a
}), 98);
__d("UserActivity", ["cr:1634616"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1634616")
}), null);
__d("translateKey", ["fbt", "invariant"], (function(a, b, c, d, e, f, g, h, i) {
    var j = {
        alt: h._( /*FBT_CALL*/ "alt" /*FBT_CALL*/ ),
        enter: h._( /*FBT_CALL*/ "enter" /*FBT_CALL*/ ),
        "delete": h._( /*FBT_CALL*/ "delete" /*FBT_CALL*/ ),
        shift: h._( /*FBT_CALL*/ "shift" /*FBT_CALL*/ ),
        opt: h._( /*FBT_CALL*/ "opt" /*FBT_CALL*/ ),
        ctrl: h._( /*FBT_CALL*/ "ctrl" /*FBT_CALL*/ ),
        cmd: h._( /*FBT_CALL*/ "cmd" /*FBT_CALL*/ ),
        esc: h._( /*FBT_CALL*/ "esc" /*FBT_CALL*/ ),
        tab: h._( /*FBT_CALL*/ "tab" /*FBT_CALL*/ ),
        up: h._( /*FBT_CALL*/ "up" /*FBT_CALL*/ ),
        down: h._( /*FBT_CALL*/ "down" /*FBT_CALL*/ ),
        right: h._( /*FBT_CALL*/ "right" /*FBT_CALL*/ ),
        left: h._( /*FBT_CALL*/ "left" /*FBT_CALL*/ ),
        page_up: h._( /*FBT_CALL*/ "page up" /*FBT_CALL*/ ),
        page_down: h._( /*FBT_CALL*/ "page down" /*FBT_CALL*/ ),
        home: h._( /*FBT_CALL*/ "home" /*FBT_CALL*/ ),
        end: h._( /*FBT_CALL*/ "end" /*FBT_CALL*/ )
    };

    function a(a) {
        if (Object.prototype.hasOwnProperty.call(j, a)) return j[a];
        a.length === 1 || i(0, 2507);
        return a
    }
    g["default"] = a
}), 98);
__d("persistentQueryParams", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = ["__DEV__", "__hs", "__xtrace__", "_country_override_", "artillery_sample", "big_pipe", "break_on_name", "break_on_pass", "browserlab_logging", "browserlab_test", "cacheobs_sample", "cavalry_cohort", "demo_ad", "dpr", "ego_services", "egodebug", "fbtrace", "feed_demo_ad", "flog", "force_logging", "force_megaphone_reload", "forced_qp_id", "gk_debug", "gk_disable", "gk_enable", "gomez_sample", "hide_dev_console", "js_debug", "js_nocatch", "killabyte", "locale", "mh_function_visitor_off", "mh_function_visitor_on", "mh_p_content_refs", "mh_p_function_visitor", "mh_p_inline_require", "mh_p_min", "nobatch", "nocache", "no_dev_console", "pagelet_ts", "pagelet_whitelist", "profiling_mode", "prod_graphql", "public_mode", "qe", "qrt_version", "react_log_top_level_renders", "react_perf", "ro_group", "ro_name", "rollout", "se_default", "se_gs", "sk", "sr_sourcemaps", "sri", "story_type", "teak_sample", "test_id_inspector", "__tier", "theme", "tlog", "tti", "vid", "webdriver", "wirehog_sample", "showlog", "__spin_b", "__spin_t", "__spin_r", "__spin_dev_mhenv"];
    f["default"] = a
}), 66);
__d("scrollTo", ["debounce", "emptyFunction"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b, d = a.onScrollComplete,
            e = babelHelpers.objectWithoutPropertiesLoose(a, ["onScrollComplete"]);
        b = (b = a.top) != null ? b : window.pageYOffset;
        a = (a = a.left) != null ? a : window.pageXOffset;
        if (window.pageYOffset === b && window.pageXOffset === a) {
            d && d();
            return {
                dispose: c("emptyFunction")
            }
        }
        var f = !1;
        try {
            var g = document.documentElement;
            if (g == null) {
                d && d();
                return {
                    dispose: c("emptyFunction")
                }
            }
            g = "scrollBehavior" in g.style;
            g ? window.scrollTo(e) : f = !0
        } catch (a) {
            f = !0
        }
        if (f) {
            window.scrollTo(a, b);
            d && d();
            return {
                dispose: c("emptyFunction")
            }
        }
        var h, i = !1;
        d != null && (h = c("debounce")(function() {
            i = !0, window.removeEventListener("scroll", h), d && d()
        }, 200), window.addEventListener("scroll", h, {
            passive: !0
        }), window.dispatchEvent(new Event("scroll")));
        return {
            dispose: function() {
                if (i) return;
                h && h.reset();
                window.removeEventListener("scroll", h);
                window.scrollTo(window.pageYOffset, window.pageXOffset)
            }
        }
    }
    g["default"] = a
}), 98);
__d("scrollIntoView", ["debounce", "emptyFunction", "recoverableViolation", "scrollTo"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        center: "center",
        top: "start",
        bottom: "end",
        closest: "nearest"
    };

    function a(a, b) {
        b === void 0 && (b = Object.freeze({}));
        var d = b,
            e = d.behavior;
        e = e === void 0 ? "auto" : e;
        var f = d.onScrollComplete,
            g = f === void 0 ? c("emptyFunction") : f;
        f = d.force;
        d = f === void 0 ? !1 : f;
        f = a.getBoundingClientRect();
        var i = document.documentElement;
        if (i == null) {
            c("recoverableViolation")("There is no documentElement accessible on document, something is seriously wrong and I couldn't imagine the situation you have found yourself in", "comet_ui");
            return {
                dispose: c("emptyFunction")
            }
        }
        var j = i.clientHeight,
            k = f.top <= j && f.bottom >= 0;
        if (!d && k) {
            g != null && g();
            return {
                dispose: c("emptyFunction")
            }
        }
        k = (d = b.verticalAlign) != null ? d : "closest";
        try {
            b = "scrollBehavior" in i.style;
            if (b) {
                a.scrollIntoView({
                    behavior: e,
                    block: k != null ? h[k] : void 0
                });
                var l, m = !1;
                g != null && (l = c("debounce")(function() {
                    m = !0, window.removeEventListener("scroll", l, {
                        capture: !0
                    }), g()
                }, 200), window.addEventListener("scroll", l, {
                    passive: !0,
                    capture: !0
                }), window.dispatchEvent(new Event("scroll")));
                return {
                    dispose: function() {
                        if (m) return;
                        l && l.reset();
                        window.removeEventListener("scroll", l, {
                            capture: !0
                        });
                        window.scrollTo(window.pageYOffset, window.pageXOffset)
                    }
                }
            }
        } catch (a) {}
        k === "closest" && (f.top >= j ? k = "bottom" : k = "top");
        var n;
        switch (k) {
            case "top":
                n = window.pageYOffset + f.top;
                break;
            case "bottom":
                n = window.pageYOffset + f.bottom - j;
                break;
            case "center":
                n = window.pageYOffset + f.bottom - j + (j - f.height) / 2;
                break
        }
        return c("scrollTo")({
            behavior: e,
            top: n,
            onScrollComplete: g
        })
    }
    g["default"] = a
}), 98);
__d("RTWebPreCallContextSingleton", ["FBLogger", "JSResource", "RTWebCallWindowControllerLoader", "RTWebIncomingRingConfiguration", "ZenonCallInviteModelLoader", "ZenonIncomingRingSDK", "gkx", "promiseDone", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("RTWebSignalingListener").__setRef("RTWebPreCallContextSingleton"),
        i = !1,
        j;

    function a(a) {
        if (!c("gkx")("1811099")) return null;
        if (j != null) return j;
        try {
            var b = new(c("ZenonIncomingRingSDK"))();
            j = {
                callInviteModel: new(c("ZenonCallInviteModelLoader"))(b),
                callWindowController: new(c("RTWebCallWindowControllerLoader"))(a, c("JSResource")("RTWebMercuryCallWindowInitializer").__setRef("RTWebPreCallContextSingleton")),
                incomingRingSDK: b
            };
            return j
        } catch (a) {
            c("FBLogger")("rtc_www").catching(a).mustfix("Pre-call context initialization failed! This breaks all calling!");
            return null
        }
    }

    function b() {
        if (!c("gkx")("1811099")) return null;
        if (i) return j;
        i = !0;
        j.callInviteModel.init();
        j.callWindowController.init();
        j.incomingRingSDK.init({
            isSupportedClientForProtocol: d("RTWebIncomingRingConfiguration").isSupportedClientForProtocol
        });
        c("promiseDone")(h.load(), function(a) {
            j.incomingRingSDK.initListeners([new a()])
        });
        return j
    }

    function e() {
        return j
    }
    g.create = a;
    g.init = b;
    g.get = e
}), 98);
__d("WebPerformanceDeviceInfo", ["Promise", "WebDevicePerfClassData", "regeneratorRuntime", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("WebDevicePerfInfoLogging").__setRef("WebPerformanceDeviceInfo"),
        i = c("WebDevicePerfClassData").deviceLevel,
        j = null;

    function k() {
        var a, c;
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(new(b("Promise"))(function(a, b) {
                        h.onReady(function(b) {
                            a(b)
                        })
                    }));
                case 2:
                    a = d.sent;
                    d.next = 5;
                    return b("regeneratorRuntime").awrap(a.doLogPromise());
                case 5:
                    c = d.sent, c && (i = c);
                case 7:
                case "end":
                    return d.stop()
            }
        }, null, this)
    }

    function a() {
        return i
    }

    function d() {
        return c("WebDevicePerfClassData").yearClass
    }

    function e() {
        h.onReady(function(a) {
            a.doLog()
        })
    }

    function f() {
        j == null && (j = k());
        return j
    }
    g.getDeviceLevel = a;
    g.getMobileYearClass = d;
    g.initWebDevicePerfLoggingPassive = e;
    g.initWebDevicePerfLoggingAndUpdateValue = f
}), 98);
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
__d("ResourceTimingStore", ["gkx", "performance"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 4e3,
        i = 3e3,
        j = new Map(),
        k = !1;

    function l() {
        var a = Array.from(j.entries());
        j = new Map(a.slice(-i))
    }

    function m(a) {
        var b = a.indexOf("#");
        return b === -1 ? a : a.slice(0, b)
    }

    function n(a) {
        for (var a = a, b = Array.isArray(a), d = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (b) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            if (!(e instanceof PerformanceResourceTiming)) continue;
            var f = "";
            try {
                f = new URL(e.name).pathname
            } catch (a) {}
            if (!/\.(css|js)$/.test(f) && c("gkx")("1924716")) continue;
            f = e;
            if (!(f != null && typeof f === "object" && typeof f.encodedBodySize === "number" && typeof f.decodedBodySize === "number" && typeof f.transferSize === "number")) continue;
            j.set(m(e.name), f)
        }
        j.size > h && c("gkx")("1924716") && l()
    }

    function o(a) {
        n(a.getEntries())
    }

    function p() {
        if (k) return;
        k = !0;
        var a;
        if (typeof PerformanceObserver !== "undefined") {
            a = new PerformanceObserver(o);
            try {
                a.observe({
                    buffered: !0,
                    type: "resource"
                })
            } catch (a) {}
        }
        typeof c("performance").getEntriesByType === "function" && n(c("performance").getEntriesByType("resource"))
    }

    function a(a) {
        p();
        return j.get(m(a))
    }
    g.init = p;
    g.getEntryForURL = a
}), 98);
__d("getRequestConstUri", ["ConstUriUtils", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("ConstUriUtils").getUri(window.location.href);
        if (a == null) throw c("unrecoverableViolation")("Cannot create ConstUriImpl of current request", "comet_infra");
        return a
    }
    g["default"] = a
}), 98);
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
__d("TimeSliceSham", ["Env", "ErrorGuard", "IntervalTrackingBoundedBuffer"], (function(a, b, c, d, e, f) {
    var g, h;
    c = (g || (g = b("Env"))).timesliceBufferSize;
    c == null && (c = 5e3);
    var i = new(b("IntervalTrackingBoundedBuffer"))(c),
        j = {
            PropagationType: {
                CONTINUATION: 0,
                EXECUTION: 1,
                ORPHAN: 2
            },
            guard: function(a, c, d) {
                var e, f;
                e = (e = (g || (g = b("Env"))).deferred_stack_trace_rate) != null ? e : 0;
                (d == null ? void 0 : d.registerCallStack) && e > 0 && Math.random() < 1 / e && (f = new Error("deferred execution source"));
                return (h || (h = b("ErrorGuard"))).guard(a, {
                    deferredSource: f,
                    name: "TimeSlice" + (c ? ": " + c : "")
                })
            },
            copyGuardForWrapper: function(a, b) {
                return a
            },
            checkCoverage: function() {},
            setLogging: function(a, b) {},
            getContext: function() {
                return null
            },
            getGuardedContinuation: function(a) {
                function a(a) {
                    for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                    return a.apply(this, c)
                }
                return a
            },
            getReusableContinuation: function(a) {
                return j.getPlaceholderReusableContinuation()
            },
            getPlaceholderReusableContinuation: function() {
                var a = function(a) {
                    return a()
                };
                a.last = a;
                return a
            },
            getGuardNameStack: function() {
                return []
            },
            registerExecutionContextObserver: function(a) {},
            catchUpOnDemandExecutionContextObservers: function(a) {},
            getBuffer: function() {
                return i
            }
        };
    a.TimeSlice = j;
    e.exports = j
}), 6);
__d("getJSEnumSafe", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (b == null) return null;
        if (!Object.prototype.hasOwnProperty.call(a, b)) return null;
        b = b;
        return a[b]
    }
    f["default"] = a
}), 66);
__d("useInterval", ["clearInterval", "react", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
        i = b.useRef;

    function a(a, b, d) {
        d === void 0 && (d = []);
        var e = i(a);
        h(function() {
            e.current = a
        }, [a]);
        var f = a != null;
        h(function() {
            if (!f || b <= 0) return;
            var a = c("setIntervalAcrossTransitions")(function() {
                var a = e.current;
                if (a == null) return;
                a()
            }, b);
            return function() {
                return c("clearInterval")(a)
            }
        }, [f, b].concat(d))
    }
    g["default"] = a
}), 98);
__d("QuickMarkersSrcFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1836368");
    c = b("FalcoLoggerInternal").create("quick_markers_src", a);
    e.exports = c
}), null);
__d("WebImmediateActiveSecondsFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1843988");
    c = b("FalcoLoggerInternal").create("web_immediate_active_seconds", a);
    e.exports = c
}), null);
__d("WwwCometVideoAutoplayFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744552");
    c = b("FalcoLoggerInternal").create("www_comet_video_autoplay", a);
    e.exports = c
}), null);
__d("XCometGamingControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/gaming/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("XCometGroupsTabControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/groups/", Object.freeze({
        from_ad: !1
    }), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("XCometNotificationsControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/notifications/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("XCometWatchControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/watch/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("ReactFlightDOMRelayClientIntegration", ["RelayFBModuleLoader"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return d("RelayFBModuleLoader").getModuleReference(a)
    }

    function b(a) {
        a.preload()
    }

    function c(a) {
        return d("RelayFBModuleLoader").read(a)
    }
    g.resolveModuleReference = a;
    g.preloadModule = b;
    g.requireModule = c
}), 98);
__d("ReactFlightDOMRelayClient-prod.modern", ["ReactFlightDOMRelayClientIntegration"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var h = Array.isArray;

    function i(a, b, c) {
        if ("string" === typeof c) return u(a, b, c);
        if ("object" === typeof c && null !== c) {
            if (h(c)) {
                var d = [];
                for (b = 0; b < c.length; b++) d[b] = i(a, c, c[b]);
                a = d[0] === k ? {
                    $$typeof: k,
                    type: d[1],
                    key: d[2],
                    ref: null,
                    props: d[3],
                    _owner: null
                } : d;
                return a
            }
            b = {};
            for (d in c) b[d] = i(a, c, c[d]);
            return b
        }
        return c
    }
    var j = {},
        k = 60103,
        l = 60116;
    if ("function" === typeof Symbol && Symbol["for"]) {
        a = Symbol["for"];
        k = a("react.element");
        l = a("react.lazy")
    }

    function m(a, b, c) {
        this._status = a, this._value = b, this._response = c
    }
    m.prototype.then = function(a) {
        0 === this._status ? (null === this._value && (this._value = []), this._value.push(a)) : a()
    };

    function n(a) {
        switch (a._status) {
            case 3:
                return a._value;
            case 1:
                var c = i(a._response, j, a._value);
                a._status = 3;
                return a._value = c;
            case 2:
                return c = b("ReactFlightDOMRelayClientIntegration").requireModule(a._value), a._status = 3, a._value = c;
            case 0:
                throw a;
            default:
                throw a._value
        }
    }

    function o() {
        var a = t(this, 0);
        return n(a)
    }

    function p(a, b) {
        return new m(3, b, a)
    }

    function q(a) {
        if (null !== a)
            for (var b = 0; b < a.length; b++) a[b]()
    }

    function r(a, b) {
        if (0 === a._status) {
            var c = a._value;
            a._status = 4;
            a._value = b;
            q(c)
        }
    }

    function s(a, b) {
        a._chunks.forEach(function(a) {
            r(a, b)
        })
    }

    function t(a, b) {
        var c = a._chunks,
            d = c.get(b);
        d || (d = new m(0, null, a), c.set(b, d));
        return d
    }

    function u(a, b, c) {
        switch (c[0]) {
            case "$":
                if ("$" === c) return k;
                if ("$" === c[1] || "@" === c[1]) return c.substring(1);
                b = parseInt(c.substring(1), 16);
                a = t(a, b);
                return n(a);
            case "@":
                return b = parseInt(c.substring(1), 16), a = t(a, b), {
                    $$typeof: l,
                    _payload: a,
                    _init: n
                }
        }
        return c
    }
    f.close = function(a) {
        s(a, Error(g(412)))
    };
    f.createResponse = function() {
        return {
            _chunks: new Map(),
            readRoot: o
        }
    };
    f.resolveRow = function(a, c) {
        if ("J" === c[0]) {
            var d = c[1];
            c = c[2];
            var e = a._chunks,
                f = e.get(d);
            f ? 0 === f._status && (a = f._value, f._status = 1, f._value = c, q(a)) : e.set(d, new m(1, c, a))
        } else "M" === c[0] ? (d = c[1], e = c[2], f = a._chunks, c = f.get(d), e = i(a, j, e), e = b("ReactFlightDOMRelayClientIntegration").resolveModuleReference(e), b("ReactFlightDOMRelayClientIntegration").preloadModule(e), c ? 0 === c._status && (a = c._value, c._status = 2, c._value = e, q(a)) : f.set(d, new m(2, e, a))) : "S" === c[0] ? a._chunks.set(c[1], p(a, Symbol["for"](c[2]))) : (d = c[1], f = Error(c[2].message), f.stack = c[2].stack, c = a._chunks, (e = c.get(d)) ? r(e, f) : c.set(d, new m(4, f, a)))
    }
}), null);
__d("react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react", ["react", "react-relay/relay-hooks/ProfilerContext", "react-relay/relay-hooks/preloadQuery_DEPRECATED", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || (g = b("react"));
    c = g;
    var i = c.useContext,
        j = c.useEffect,
        k = c.useMemo,
        l = b("relay-runtime").stableCopy;

    function m(a) {
        return (a = JSON.stringify(l(a))) != null ? a : "null"
    }

    function n(a, c, d) {
        var e = null;
        c.root.getModuleIfRequired() == null && (e = c.root.load());
        d = c.getPreloadProps(d);
        var f = d.queries,
            g = d.entryPoints;
        d = d.extraProps;
        var h = {},
            i = {};
        if (f != null) {
            var j = Object.keys(f);
            j.forEach(function(c) {
                var d = f[c],
                    e = d.environmentProviderOptions,
                    g = d.options,
                    i = d.parameters;
                d = d.variables;
                var j = a.getEnvironment(e);
                h[c] = b("react-relay/relay-hooks/preloadQuery_DEPRECATED")(j, i, d, g, e)
            })
        }
        if (g != null) {
            j = Object.keys(g);
            j.forEach(function(b) {
                var c = g[b];
                if (c == null) return;
                var d = c.entryPoint;
                c = c.entryPointParams;
                i[b] = n(a, d, c)
            })
        }
        return {
            entryPoints: i,
            extraProps: (j = d) != null ? j : null,
            getComponent: function() {
                var a = c.root.getModuleIfRequired();
                if (a == null) {
                    var b;
                    e = (b = e) != null ? b : c.root.load();
                    throw e
                }
                return a
            },
            queries: h,
            rootModuleID: c.root.getModuleId()
        }
    }

    function a(a) {
        var c = a.entryPoint,
            d = a.entryPointParams,
            e = a.props,
            f = a.environmentProvider,
            g = b("react-relay/relay-hooks/useRelayEnvironment")();
        a = c.getPreloadProps;
        var l = m(d);
        a = k(function() {
            var a;
            return n((a = f) != null ? a : {
                getEnvironment: function() {
                    return g
                }
            }, c, d)
        }, [g, f, a, l]);
        var o = a.getComponent;
        l = a.queries;
        var p = a.entryPoints,
            q = a.extraProps,
            r = a.rootModuleID;
        a = k(function() {
            return o()
        }, [o]);
        var s = i(b("react-relay/relay-hooks/ProfilerContext"));
        j(function() {
            g.__log({
                name: "entrypoint.root.consume",
                profilerContext: s,
                rootModuleID: r
            })
        }, [g, s, r]);
        return h.jsx(a, {
            entryPoints: p,
            extraProps: q,
            props: e,
            queries: l
        })
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a
}), null);
__d("CometMessagingJewelDropdownQPBannerContainerQuery_facebookRelayOperation", [], (function(a, b, c, d, e, f) {
    e.exports = "3425873140871061"
}), null);
__d("FeedComposerCometRootQuery_facebookRelayOperation", [], (function(a, b, c, d, e, f) {
    e.exports = "4779959548704799"
}), null);