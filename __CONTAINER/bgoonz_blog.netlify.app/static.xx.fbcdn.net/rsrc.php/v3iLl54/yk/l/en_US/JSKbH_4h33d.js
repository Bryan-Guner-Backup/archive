if (self.CavalryLogger) {
    CavalryLogger.start_js(["HDAL12N"]);
}

__d("BlueBar", ["csx", "CSS", "DOMQuery", "Style", "ge"], (function(a, b, c, d, e, f, g, h) {
    var i = document,
        j = {};

    function k(a) {
        return d("DOMQuery").scry(i, a)[0]
    }

    function l(a, b) {
        return j[a] ? j[a] : j[a] = k(b)
    }

    function a() {
        i = c("ge")("blueBarDOMInspector") || document, j = {}
    }

    function b() {
        var a = this.getMaybeFixedRoot();
        return !a ? !1 : d("CSS").matchesSelector(a, "._5rmj") || c("Style").isFixed(a)
    }

    function m() {
        return l("bar", "div._1s4v")
    }

    function e() {
        return l("navRoot", "div._cx4") || m()
    }

    function f() {
        return l("maybeFixedRoot", "div._26aw")
    }

    function h() {
        return l("maybeFixedRootLoggedOut", "div._1pmx")
    }

    function n() {
        return l("maybeFixedRootLogin", "div._53jh")
    }
    a();
    g.hasFixedBlueBar = b;
    g.getBar = m;
    g.getNavRoot = e;
    g.getMaybeFixedRoot = f;
    g.getLoggedOutRoot = h;
    g.getNewLoggedOutRoot = n
}), 98);
__d("CometHeroHoldTrigger.react", ["hero-tracing-placeholder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("hero-tracing-placeholder").HeroHoldTrigger
}), 98);
__d("mediaViewerExperimentRoutes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = new Set(["comet.stories.viewer.archive", "comet.stories.viewer", "comet.videos.tahoe", "comet.marketplace.item", "comet.mediaviewer.video", "comet.mediaviewer.photo"]);
    f.ROUTES = a
}), 66);
__d("WaitTimeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
        waitTimeAreaName: void 0,
        waitTimeAreaOwner: void 0
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("LoadingMarker.react", ["CometHeroHoldTrigger.react", "LoadingMarkerGated", "WaitTimeContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext;

    function a(a) {
        return a.children
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a) {
        return function(b) {
            var d = i(c("WaitTimeContext"));
            return h.jsxs(h.Fragment, {
                children: [h.jsx(c("CometHeroHoldTrigger.react"), {
                    hold: !0,
                    description: "LoadingMarker(" + ((d = d.waitTimeAreaName) != null ? d : "unnamed") + ")"
                }), h.jsx(a, babelHelpers["extends"]({}, b))]
            })
        }
    }
    e = b(c("LoadingMarkerGated").component || a);
    d = e;
    g["default"] = d
}), 98);
__d("ReactFbPropTypes", ["FbtResultBase", "warning"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = function(c, d, e, f, g, h, i) {
                var j = d[e];
                if (j instanceof b("FbtResultBase")) return null;
                if (c) return a.isRequired(d, e, f, g, h, i);
                else return a(d, e, f, g, h, i)
            },
            d = c.bind(null, !1);
        d.isRequired = c.bind(null, !0);
        return d
    }
    f.wrapStringTypeChecker = a
}), null);
__d("fbjs/lib/emptyFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("emptyFunction")
}), null);
__d("fbjs/lib/invariant", ["invariant"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("invariant")
}), null);
__d("fbjs/lib/warning", ["warning"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("warning")
}), null);
__d("prop-types/lib/ReactPropTypesSecret", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = a
}), null);
__d("prop-types/checkPropTypes", ["fbjs/lib/invariant", "fbjs/lib/warning", "prop-types/lib/ReactPropTypesSecret"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function a(a, b, c, d, e) {}
    e.exports = a
}), null);
__d("prop-types/prop-types", ["fbjs/lib/emptyFunction", "fbjs/lib/invariant", "fbjs/lib/warning", "prop-types/checkPropTypes", "prop-types/lib/ReactPropTypesSecret"], (function(a, b, c, d, e, f) {
    var g, h = function() {
        b("fbjs/lib/invariant")(0, 1492)
    };
    a = function() {
        return h
    };
    h.isRequired = h;
    c = {
        array: h,
        bool: h,
        func: h,
        number: h,
        object: h,
        string: h,
        symbol: h,
        any: h,
        arrayOf: a,
        element: h,
        instanceOf: a,
        node: h,
        objectOf: a,
        oneOf: a,
        oneOfType: a,
        shape: a
    };
    c.checkPropTypes = b("fbjs/lib/emptyFunction");
    c.PropTypes = c;
    e.exports = c
}), null);
__d("prop-types", ["ReactFbPropTypes", "prop-types/prop-types"], (function(a, b, c, d, e, f) {
    e.exports = b("prop-types/prop-types")
}), null);
__d("XUISpinner.react", ["cx", "fbt", "BrowserSupport", "LoadingMarker.react", "UserAgent", "joinClasses", "prop-types", "react"], (function(a, b, c, d, e, f, g, h, i) {
    var j = d("react"),
        k = d("BrowserSupport").hasCSSAnimations() && !(c("UserAgent").isEngine("Trident < 6") || c("UserAgent").isEngine("Gecko < 39") || c("UserAgent").isBrowser("Safari < 6"));
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = j.createRef(), b) || babelHelpers.assertThisInitialized(c)
        }
        var d = b.prototype;
        d.render = function() {
            var a = this.props,
                b = a.showOnAsync,
                d = a.background,
                e = a.paused;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["showOnAsync", "background", "paused"]);
            d = "img _55ym" + (this.props.size == "small" ? " _55yn" : "") + (this.props.size == "large" ? " _55yq" : "") + (d == "light" ? " _55yo" : "") + (d == "dark" ? " _55yp" : "") + (b ? " _5tqs" : "") + (k ? "" : " _5d9-") + (k && e ? " _2y32" : "");
            return j.jsx(c("LoadingMarker.react"), {
                nodeRef: this.$1,
                children: j.jsx("span", babelHelpers["extends"]({}, a, {
                    className: c("joinClasses")(this.props.className, d),
                    ref: this.$1,
                    role: "progressbar",
                    "aria-valuetext": i._( /*FBT_CALL*/ "Loading..." /*FBT_CALL*/ ),
                    "aria-busy": "true",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }))
            })
        };
        return b
    }(j.Component);
    a.propTypes = {
        paused: c("prop-types").bool,
        showOnAsync: c("prop-types").bool,
        size: c("prop-types").oneOf(["small", "large"]),
        background: c("prop-types").oneOf(["light", "dark"])
    };
    a.defaultProps = {
        showOnAsync: !1,
        size: "small",
        background: "light"
    };
    g["default"] = a
}), 98);
__d("WarningFilter", ["CoreWarningGK"], (function(a, b, c, d, e, f) {
    var g = 23;
    b = a;
    c = function() {
        return {}
    };

    function a(a) {
        return {
            finalFormat: a,
            forceDialogImmediately: !1,
            monitorEvent: null,
            monitorListVersion: g,
            monitorSampleRate: 1,
            suppressCompletely: !1,
            suppressDialog_LEGACY: !0
        }
    }
    e.exports = {
        prepareWarning: b,
        getReactWarnings: c
    }
}), null);
__d("warningBlue", ["Bootloader", "SiteData", "WarningFilter", "cr:983844"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {}
    b = a;
    c = b;
    g["default"] = c
}), 98);
__d("BasicVector", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b) {
            this.x = a, this.y = b
        }
        var b = a.prototype;
        b.derive = function(b, c) {
            return new a(b, c)
        };
        b.toString = function() {
            return "(" + this.x + ", " + this.y + ")"
        };
        b.add = function(a, b) {
            b === void 0 && (b = a.y, a = a.x);
            a = parseFloat(a);
            b = parseFloat(b);
            return this.derive(this.x + a, this.y + b)
        };
        b.mul = function(a, b) {
            b === void 0 && (b = a);
            return this.derive(this.x * a, this.y * b)
        };
        b.div = function(a, b) {
            b === void 0 && (b = a);
            return this.derive(this.x * 1 / a, this.y * 1 / b)
        };
        b.sub = function(a, b) {
            if (arguments.length === 1) return this.add(a.mul(-1));
            else return this.add(-a, -b)
        };
        b.distanceTo = function(a) {
            return this.sub(a).magnitude()
        };
        b.magnitude = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        };
        b.rotate = function(a) {
            return this.derive(this.x * Math.cos(a) - this.y * Math.sin(a), this.x * Math.sin(a) + this.y * Math.cos(a))
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("DOMVector", ["BasicVector", "getDocumentScrollElement", "getElementPosition", "getUnboundedScrollPosition", "getViewportDimensions"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            b = a.call(this, b, c) || this;
            b.domain = d || "pure";
            return b
        }
        var d = b.prototype;
        d.derive = function(a, c, d) {
            return new b(a, c, d || this.domain)
        };
        d.add = function(c, d) {
            c instanceof b && c.getDomain() !== "pure" && (c = c.convertTo(this.domain));
            return a.prototype.add.call(this, c, d)
        };
        d.convertTo = function(a) {
            if (a != "pure" && a != "viewport" && a != "document") return this.derive(0, 0);
            if (a == this.domain) return this.derive(this.x, this.y, this.domain);
            if (a == "pure") return this.derive(this.x, this.y);
            if (this.domain == "pure") return this.derive(0, 0);
            var c = b.getScrollPosition("document"),
                d = this.x,
                e = this.y;
            this.domain == "document" ? (d -= c.x, e -= c.y) : (d += c.x, e += c.y);
            return this.derive(d, e, a)
        };
        d.getDomain = function() {
            return this.domain
        };
        b.from = function(a, c, d) {
            return new b(a, c, d)
        };
        b.getScrollPosition = function(a) {
            a = a || "document";
            var b = c("getUnboundedScrollPosition")(window);
            return this.from(b.x, b.y, "document").convertTo(a)
        };
        b.getElementPosition = function(a, b) {
            b = b || "document";
            a = c("getElementPosition")(a);
            return this.from(a.x, a.y, "viewport").convertTo(b)
        };
        b.getElementDimensions = function(a) {
            return this.from(a.offsetWidth || 0, a.offsetHeight || 0)
        };
        b.getViewportDimensions = function() {
            var a = c("getViewportDimensions")();
            return this.from(a.width, a.height, "viewport")
        };
        b.getLayoutViewportDimensions = function() {
            var a = c("getViewportDimensions").layout();
            return this.from(a.width, a.height, "viewport")
        };
        b.getViewportWithoutScrollbarDimensions = function() {
            var a = c("getViewportDimensions").withoutScrollbars();
            return this.from(a.width, a.height, "viewport")
        };
        b.getDocumentDimensions = function(a) {
            a = c("getDocumentScrollElement")(a);
            return this.from(a.scrollWidth, a.scrollHeight, "document")
        };
        return b
    }(c("BasicVector"));
    g["default"] = a
}), 98);
__d("Vector", ["DOMVector", "Event", "Scroll"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            return a.call(this, parseFloat(b), parseFloat(c), d) || this
        }
        var e = b.prototype;
        e.derive = function(a, c, d) {
            return new b(a, c, d || this.domain)
        };
        e.setElementPosition = function(a) {
            var b = this.convertTo("document");
            a.style.left = parseInt(b.x, 10) + "px";
            a.style.top = parseInt(b.y, 10) + "px";
            return this
        };
        e.setElementDimensions = function(a) {
            return this.setElementWidth(a).setElementHeight(a)
        };
        e.setElementWidth = function(a) {
            a.style.width = parseInt(this.x, 10) + "px";
            return this
        };
        e.setElementHeight = function(a) {
            a.style.height = parseInt(this.y, 10) + "px";
            return this
        };
        e.scrollElementBy = function(a) {
            a == document.body ? window.scrollBy(this.x, this.y) : (d("Scroll").setLeft(a, d("Scroll").getLeft(a) + this.x), d("Scroll").setTop(a, d("Scroll").getTop(a) + this.y));
            return this
        };
        b.from = function(a, c, d) {
            return new b(a, c, d)
        };
        b.getEventPosition = function(a, b) {
            b === void 0 && (b = "document");
            a = c("Event").getPosition(a);
            a = this.from(a.x, a.y, "document");
            return a.convertTo(b)
        };
        b.getTouchEventPosition = function(a, b) {
            b === void 0 && (b = "document");
            a = a.touches[0];
            a = this.from(a.pageX, a.pageY, "document");
            return a.convertTo(b)
        };
        b.deserialize = function(a) {
            a = a.split(",");
            return this.from(a[0], a[1])
        };
        return b
    }(c("DOMVector"));
    g["default"] = a
}), 98);
__d("ViewportBounds", ["Arbiter", "ArbiterMixin", "BlueBar", "ExecutionEnvironment", "PageEvents", "Vector", "emptyFunction", "removeFromArray"], (function(a, b, c, d, e, f) {
    var g = {
        top: [],
        right: [],
        bottom: [],
        left: []
    };

    function a(a) {
        return function() {
            return g[a].reduce(function(a, b) {
                return Math.max(a, b.getSize())
            }, 0)
        }
    }

    function c(a, b) {
        return function(c) {
            return new h(a, c, b)
        }
    }
    var h = function() {
        "use strict";

        function a(a, c, d) {
            d === void 0 && (d = !1), this.getSide = b("emptyFunction").thatReturns(a), this.getSize = function() {
                return typeof c === "function" ? c() : c
            }, this.isPersistent = b("emptyFunction").thatReturns(d), g[a].push(this), i.inform("change")
        }
        var c = a.prototype;
        c.remove = function() {
            b("removeFromArray")(g[this.getSide()], this), i.inform("change")
        };
        return a
    }();
    b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD, function() {
        ["top", "right", "bottom", "left"].forEach(function(a) {
            a = g[a];
            for (var b = a.length - 1; b >= 0; b--) {
                var c = a[b];
                c.isPersistent() || c.remove()
            }
        })
    });
    var i = babelHelpers["extends"]({}, b("ArbiterMixin"), {
        getTop: a("top"),
        getRight: a("right"),
        getBottom: a("bottom"),
        getLeft: a("left"),
        getElementPosition: function(a) {
            a = b("Vector").getElementPosition(a);
            a.y -= i.getTop();
            return a
        },
        addTop: c("top"),
        addRight: c("right"),
        addBottom: c("bottom"),
        addLeft: c("left"),
        addPersistentTop: c("top", !0),
        addPersistentRight: c("right", !0),
        addPersistentBottom: c("bottom", !0),
        addPersistentLeft: c("left", !0)
    });
    i.addPersistentTop(function() {
        if (b("ExecutionEnvironment").canUseDOM && b("BlueBar").hasFixedBlueBar()) {
            var a = b("BlueBar").getMaybeFixedRoot();
            return a ? a.offsetHeight : 0
        }
        return 0
    });
    e.exports = i
}), null);
__d("isAsyncScrollQuery", ["UserAgent"], (function(a, b, c, d, e, f, g) {
    var h = null;

    function a() {
        h === null && (h = c("UserAgent").isPlatform("Mac OS X >= 10.8") && c("UserAgent").isBrowser("Safari >= 6.0"));
        return h
    }
    g["default"] = a
}), 98);
__d("ScrollAwareDOM", ["ArbiterMixin", "CSS", "DOM", "DOMDimensions", "HTML", "Vector", "ViewportBounds", "getDocumentScrollElement", "getElementPosition", "getViewportDimensions", "isAsyncScrollQuery", "isNode"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        return function() {
            var c = arguments;
            k.monitor(arguments[a], function() {
                b.apply(null, c)
            })
        }
    }

    function h(a) {
        a instanceof Array || (a = [a]);
        for (var b = 0; b < a.length; b++) {
            var d = c("HTML").replaceJSONWrapper(a[b]);
            if (d instanceof c("HTML")) return d.getRootNode();
            else if (c("isNode")(d)) return d
        }
        return null
    }

    function i(a) {
        return c("getElementPosition")(a).y > c("ViewportBounds").getTop()
    }

    function j(a) {
        a = c("getElementPosition")(a).y + d("DOMDimensions").getElementDimensions(a).height;
        var b = c("getViewportDimensions")().height - c("ViewportBounds").getBottom();
        return a >= b
    }
    var k = babelHelpers["extends"]({
        monitor: function(a, b) {
            if (c("isAsyncScrollQuery")()) return b();
            a = h(a);
            if (a) {
                var d = !!a.offsetParent;
                if (d && (i(a) || j(a))) return b();
                var e = c("Vector").getDocumentDimensions(),
                    f = b();
                if (d || a.offsetParent && !i(a)) {
                    d = c("Vector").getDocumentDimensions().sub(e);
                    e = {
                        delta: d,
                        target: a
                    };
                    k.inform("scroll", e) !== !1 && d.scrollElementBy(c("getDocumentScrollElement")())
                }
                return f
            } else return b()
        },
        replace: function(a, b) {
            var e = h(b);
            (!e || d("CSS").hasClass(e, "hidden_elem")) && (e = a);
            return k.monitor(e, function() {
                c("DOM").replace(a, b)
            })
        },
        prependContent: a(1, c("DOM").prependContent),
        insertAfter: a(1, c("DOM").insertAfter),
        insertBefore: a(1, c("DOM").insertBefore),
        setContent: a(0, c("DOM").setContent),
        appendContent: a(1, c("DOM").appendContent),
        remove: a(0, c("DOM").remove),
        empty: a(0, c("DOM").empty)
    }, d("ArbiterMixin"));
    b = k;
    g["default"] = b
}), 98);
__d("ModalLayer", ["csx", "cx", "Arbiter", "ArbiterMixin", "CSS", "CometVisualCompletionConstants", "DOM", "DOMDimensions", "DOMQuery", "DataStore", "Event", "Scroll", "ScrollAwareDOM", "Style", "UserAgent", "Vector", "debounceAcrossTransitions", "ge", "getDocumentScrollElement", "isAsyncScrollQuery", "removeFromArray", "setTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i) {
    var j = [],
        k = null,
        l = null,
        m = null;

    function n() {
        m || (m = d("DOMQuery").scry(document.body, "._li")[0] || c("ge")("FB4BResponsiveMain"));
        return m
    }

    function o(a) {
        var b = {
                position: c("Vector").getScrollPosition(),
                listener: void 0
            },
            e = a.offsetTop - b.position.y;
        d("CSS").addClass(a, "_31e");
        n().id !== "FB4BResponsiveMain" && c("Style").set(a, "top", e + "px");
        c("Arbiter").inform("reflow");
        b.listener = c("ScrollAwareDOM").subscribe("scroll", function(e, f) {
            if (d("DOMQuery").contains(a, f.target)) {
                e = a.offsetTop - f.delta.y;
                c("Style").set(a, "top", e + "px");
                b.position = b.position.add(f.delta);
                return !1
            }
            return !0
        });
        d("DataStore").set(a, "ModalLayerData", b)
    }

    function p(a, b) {
        var e = d("DataStore").get(a, "ModalLayerData");
        if (e) {
            var f = function() {
                d("CSS").removeClass(a, "_31e");
                c("Style").set(a, "top", "");
                if (b) {
                    var f = c("getDocumentScrollElement")();
                    d("Scroll").setTop(f, e.position.y);
                    d("Scroll").getTop(f) !== e.position.y && (d("Scroll").setTop(f, e.position.y + 1), d("Scroll").setTop(f, e.position.y))
                }
                c("Arbiter").inform("reflow");
                e.listener.unsubscribe();
                e.listener = null;
                d("DataStore").remove(a, "ModalLayerData")
            };
            if (b && c("isAsyncScrollQuery")()) {
                var g = c("DOM").create("div", {
                    className: "_42w"
                });
                c("Style").set(g, "height", a.offsetHeight + "px");
                c("DOM").appendContent(document.body, g);
                var h = c("getDocumentScrollElement")();
                d("Scroll").setTop(h, e.position.y);
                b = !1;
                c("setTimeout")(function() {
                    f(), c("DOM").remove(g)
                }, 0)
            } else f()
        }
    }

    function q() {
        var a = n();
        a != null && !d("CSS").matchesSelector(a, "._31e") && o(a)
    }

    function r() {
        j.length || p(n(), !0)
    }

    function s() {
        var a = j.length;
        while (a--) {
            var b = j[a],
                c = b.getLayerRoot();
            if (c) {
                t(c, 0);
                b = b.getLayerContentRoot();
                if (b) {
                    b = b.offsetWidth + d("DOMDimensions").measureElementBox(b, "width", !1, !1, !0);
                    t(c, b)
                }
            }
        }
    }

    function t(a, b) {
        c("Style").set(a, "min-width", b + (b ? "px" : ""))
    }
    a = function() {
        function a(a) {
            this._layer = a, this._enabled = !1
        }
        var b = a.prototype;
        b.enable = function() {
            if (!n()) return;
            this._subscription = this._layer.subscribe(["show", "hide"], function(a) {
                a == "show" ? this._addModal() : this._removeModal()
            }.bind(this));
            this._layer.isShown() && this._addModal();
            this._enabled = !0
        };
        b.disable = function() {
            if (!n()) return;
            this._subscription && this._subscription.unsubscribe();
            this._layer.isShown() && this._removeModal();
            this._enabled = !1
        };
        b._addModal = function() {
            var b = this.getLayerRoot();
            d("CSS").addClass(b, "_3qw");
            this._wash = c("DOM").create("div", {
                className: "_3ixn"
            });
            c("DOM").prependContent(b, this._wash);
            b && this._layer._config.ignoreVC && b.setAttribute(d("CometVisualCompletionConstants").ATTRIBUTE_NAME, d("CometVisualCompletionConstants").IGNORE);
            b = j[j.length - 1];
            b ? o(b.getLayerRoot()) : q();
            b = c("getDocumentScrollElement")();
            d("Scroll").setTop(b, 0);
            if (!j.length) {
                b = c("debounceAcrossTransitions")(s, 100);
                k = c("Event").listen(window, "resize", b);
                l = c("Arbiter").subscribe("reflow", b)
            }
            j.push(this);
            a.inform("show", this);
            c("setTimeout")(s, 0)
        };
        b._removeModal = function() {
            var b = this,
                e = this.getLayerRoot();
            d("CSS").removeClass(e, "_3qw");
            c("DOM").remove(this._wash);
            this._wash = null;
            t(e, 0);
            var f = this === j[j.length - 1];
            c("removeFromArray")(j, this);
            j.length || (k && k.remove(), k = null, l && l.unsubscribe(), l = null);
            var g;
            c("UserAgent").isBrowser("Safari") && (e = c("Event").listen(document.documentElement, "mousewheel", c("Event").prevent), g = e.remove.bind(e));
            c("setTimeoutAcrossTransitions")(function() {
                var d = j[j.length - 1];
                d ? (p(d.getLayerRoot(), f), a.inform("show", d)) : (r(), a.inform("hide", b));
                j.length && c("setTimeout")(s, 0);
                c("UserAgent").isBrowser("Safari") && c("setTimeout")(function() {
                    g()
                }, 0)
            }, 200)
        };
        b.getLayerRoot = function() {
            return this._enabled ? this._layer.getRoot() : null
        };
        b.getLayerContentRoot = function() {
            return this._enabled ? this._layer.getContentRoot() : null
        };
        a.getTopmostModalLayer = function() {
            return j[j.length - 1]
        };
        return a
    }();
    Object.assign(a, d("ArbiterMixin"));
    g["default"] = a
}), 98);
__d("isKeyActivation", ["Keys"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = 0,
            d = a.charCode;
        a = a.keyCode;
        d != null && d !== 0 ? b = d : a != null && a !== 0 && (b = a);
        return [c("Keys").RETURN, c("Keys").SPACE].includes(b)
    }
    g["default"] = a
}), 98);
__d("KeyActivationToClickHOC.react", ["isKeyActivation", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b, d;
        return d = b = function(b) {
            babelHelpers.inheritsLoose(d, b);

            function d() {
                var a;
                for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                a = b.call.apply(b, [this].concat(e)) || this;
                a.$2 = function(b) {
                    c("isKeyActivation")(b) && (b.preventDefault(), b.stopPropagation(), a.$1 && a.$1.click())
                };
                a.$3 = function(b) {
                    a.$1 = b
                };
                a.$1 = null;
                return a
            }
            var e = d.prototype;
            e.render = function() {
                return h.jsx(a, babelHelpers["extends"]({
                    keyActivationToClickEvent: this.$2,
                    keyActivationToClickRef: this.$3
                }, this.props))
            };
            return d
        }(h.Component), b.displayName = "KeyActivationToClickHOC", d
    }
    g["default"] = a
}), 98);
__d("ShimButton.react", ["KeyActivationToClickHOC.react", "emptyFunction", "killswitch", "prop-types", "react"], (function(a, b, c, d, e, f) {
    var g, h = g || b("react");
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = function(a) {
                c.props.keyActivationToClickRef(a), c.props.onRef(a)
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props,
                c = a.children,
                d = a.form,
                e = a.inline,
                f = a.keyActivationToClickEvent;
            a.keyActivationToClickRef;
            a.onRef;
            var g = a.pressed;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "form", "inline", "keyActivationToClickEvent", "keyActivationToClickRef", "onRef", "pressed"]);
            e = e ? "span" : "div";
            d === "link" && (e = "a");
            f = (d = {}, d[b("killswitch")("SHIM_BUTTON_USE_ONKEYDOWN_INSTEAD_OF_ONKEYPRESS") ? "onKeyPress" : "onKeyDown"] = f, d);
            return h.jsx(e, babelHelpers["extends"]({}, a, {
                "aria-pressed": g,
                ref: this.$1,
                role: "button"
            }, f, {
                children: c
            }))
        };
        return c
    }(h.Component);
    a.defaultProps = {
        form: "none",
        inline: !1,
        keyActivationToClickEvent: b("emptyFunction"),
        keyActivationToClickRef: b("emptyFunction"),
        onClick: b("emptyFunction"),
        onRef: b("emptyFunction"),
        tabIndex: "0"
    };
    a.propTypes = {
        children: b("prop-types").any,
        form: b("prop-types").oneOf(["none", "link"]),
        inline: b("prop-types").bool,
        tabIndex: b("prop-types").oneOf(["-1", "0", -1, 0]),
        onClick: b("prop-types").func,
        onRef: b("prop-types").func
    };
    e.exports = b("KeyActivationToClickHOC.react")(a)
}), null);
__d("keyMirrorRecursive", ["invariant", "isTruthy"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function a(b, d) {
        var e = {};
        i(b) || h(0, 580);
        for (var f in b) {
            if (!Object.prototype.hasOwnProperty.call(b, f)) continue;
            var g = b[f],
                j = c("isTruthy")(d) ? d + "." + f : f;
            i(g) ? g = a(g, j) : g = j;
            e[f] = g
        }
        return e
    };

    function i(a) {
        return a instanceof Object && !Array.isArray(a)
    }
    b = a;
    g["default"] = b
}), 98);
__d("ImmutableValue", ["invariant", "isNode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "_DONT_EVER_TYPE_THIS_SECRET_KEY";
    a = function() {
        function a(b) {
            b === a[h] || g(0, 5608)
        }
        a.mergeAllPropertiesInto = function(a, b) {
            var c = b.length;
            for (var d = 0; d < c; d++) Object.assign(a, b[d])
        };
        a.deepFreezeRootNode = function(c) {
            if (b("isNode")(c)) return;
            Object.freeze(c);
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && a.recurseDeepFreeze(c[d]);
            Object.seal(c)
        };
        a.recurseDeepFreeze = function(c) {
            if (b("isNode")(c) || !a.shouldRecurseFreeze(c)) return;
            Object.freeze(c);
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && a.recurseDeepFreeze(c[d]);
            Object.seal(c)
        };
        a.shouldRecurseFreeze = function(b) {
            return typeof b === "object" && !(b instanceof a) && b !== null
        };
        return a
    }();
    a._DONT_EVER_TYPE_THIS_SECRET_KEY = Math.random();
    f["default"] = a
}), 66);
__d("mergeHelpers", ["invariant", "FbtResultBase"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 36,
        j = function(a) {
            return typeof a !== "object" || a instanceof Date || a === null || a instanceof c("FbtResultBase")
        },
        k = {
            MAX_MERGE_DEPTH: i,
            isTerminal: j,
            normalizeMergeArg: function(a) {
                return a == null ? {} : a
            },
            checkMergeArrayArgs: function(a, b) {
                Array.isArray(a) && Array.isArray(b) || h(0, 3714, a, b)
            },
            checkMergeObjectArgs: function(a, b) {
                k.checkMergeObjectArg(a), k.checkMergeObjectArg(b)
            },
            checkMergeObjectArg: function(a) {
                !j(a) && !Array.isArray(a) || h(0, 3715, a)
            },
            checkMergeIntoObjectArg: function(a) {
                (!j(a) || typeof a === "function") && !Array.isArray(a) || h(0, 3716, a)
            },
            checkMergeLevel: function(a) {
                a < i || h(0, 3717)
            },
            checkArrayStrategy: function(a) {
                a == null || a in k.ArrayStrategies || h(0, 3718)
            },
            ArrayStrategies: {
                Clobber: "Clobber",
                Concat: "Concat",
                IndexByIndex: "IndexByIndex"
            }
        };
    a = k;
    g["default"] = a
}), 98);
__d("ImmutableObject", ["invariant", "ImmutableValue", "mergeHelpers"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("mergeHelpers").checkMergeObjectArgs,
        i = b("mergeHelpers").isTerminal,
        j = "_DONT_EVER_TYPE_THIS_SECRET_KEY";

    function k(a) {
        a instanceof b("ImmutableValue") || g(0, 3884)
    }
    var l = function(c) {
        babelHelpers.inheritsLoose(a, c);

        function a() {
            var a;
            a = c.call(this, b("ImmutableValue")[j]) || this;
            b("ImmutableValue").mergeAllPropertiesInto(babelHelpers.assertThisInitialized(a), arguments);
            return a
        }
        a.set = function(b, c) {
            k(b);
            typeof c === "object" && c !== void 0 && !Array.isArray(c) || g(0, 3885);
            return new a(b, c)
        };
        a.setProperty = function(b, c, d) {
            var e = {};
            e[c] = d;
            return a.set(b, e)
        };
        a.deleteProperty = function(b, c) {
            var d = {};
            for (var e in b) e !== c && Object.prototype.hasOwnProperty.call(b, e) && (d[e] = b[e]);
            return new a(d)
        };
        a.setDeep = function(a, b) {
            k(a);
            return m(a, b)
        };
        a.values = function(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        };
        return a
    }(b("ImmutableValue"));

    function m(a, c) {
        h(a, c);
        var d = {},
            e = Object.keys(a);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            !Object.prototype.hasOwnProperty.call(c, g) ? d[g] = a[g] : i(a[g]) || i(c[g]) ? d[g] = c[g] : d[g] = m(a[g], c[g])
        }
        g = Object.keys(c);
        for (f = 0; f < g.length; f++) {
            e = g[f];
            if (Object.prototype.hasOwnProperty.call(a, e)) continue;
            d[e] = c[e]
        }
        return a instanceof b("ImmutableValue") ? new l(d) : c instanceof b("ImmutableValue") ? new l(d) : d
    }
    e.exports = l
}), null);
__d("TabbableElements", ["Style"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        if (a.tabIndex < 0) return !1;
        if (a.tabIndex > 0 || a.tabIndex === 0 && a.getAttribute("tabIndex") !== null) return !0;
        var b = a;
        switch (a.tagName) {
            case "A":
                a = b;
                return !!a.href && a.rel != "ignore";
            case "INPUT":
                a = b;
                return a.type != "hidden" && a.type != "file" && !a.disabled;
            case "BUTTON":
            case "SELECT":
            case "TEXTAREA":
                a = b;
                return !a.disabled
        }
        return !1
    }

    function i(a) {
        a = a;
        while (a && a !== document && c("Style").get(a, "visibility") != "hidden" && c("Style").get(a, "display") != "none") a = a.parentNode;
        return a === document
    }

    function a(a) {
        return Array.from(a.getElementsByTagName("*")).filter(j)
    }

    function b(a) {
        return Array.from(a.getElementsByTagName("*")).find(j)
    }

    function d(a) {
        a = Array.from(a.getElementsByTagName("*"));
        for (var b = a.length - 1; b >= 0; b--)
            if (j(a[b])) return a[b];
        return null
    }

    function j(a) {
        return h(a) && i(a)
    }

    function e(a) {
        return i(a)
    }
    g.find = a;
    g.findFirst = b;
    g.findLast = d;
    g.isTabbable = j;
    g.isVisible = e
}), 98);
__d("XBasicFBNuxDismissController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/megaphone/dismiss_fbnux/", {
        nux_id: {
            type: "Int",
            required: !0
        }
    })
}), null);