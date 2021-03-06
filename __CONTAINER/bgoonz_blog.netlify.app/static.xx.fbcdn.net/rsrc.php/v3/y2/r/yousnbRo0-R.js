if (self.CavalryLogger) {
    CavalryLogger.start_js(["dkT7ShL"]);
}

__d("PagePluginEvents", ["ImmutableObject", "keyMirrorRecursive"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = new(c("ImmutableObject"))(c("keyMirrorRecursive")({
        page_plugin: {
            tab: {
                configured: "",
                click: "",
                render: ""
            },
            messages: {
                send: "",
                logged_out: "",
                invalid_height: ""
            }
        }
    }));
    b = a;
    g["default"] = b
}), 98);
__d("XPagePluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/page/logging/", {})
}), null);
__d("PagePluginLogger", ["AsyncRequest", "XPagePluginLoggingController"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.notify = function(a, b, d) {
            var e = c("XPagePluginLoggingController").getURIBuilder().getURI();
            new(c("AsyncRequest"))().setURI(e).setMethod("POST").setData({
                event_name: a,
                page_id: this.$1,
                tab: b,
                data: Object.assign(d ? d : {}, {
                    refererURL: this.$2
                })
            }).send()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("GridItem.react", ["cx", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.alignv,
            d = a.alignh,
            e = a.className;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["alignv", "alignh", "className"]);
        return i.jsx("td", babelHelpers["extends"]({}, a, {
            className: c("joinClasses")(e, "_51m-" + (b === "top" ? " vTop" : "") + (b === "middle" ? " vMid" : "") + (b === "bottom" ? " vBot" : "") + (d === "left" ? " hLeft" : "") + (d === "center" ? " hCent" : "") + (d === "right" ? " hRght" : ""))
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("Grid.react", ["cx", "GridItem.react", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            var a = this.props,
                d = a.alignh,
                e = a.alignv,
                f = a.children,
                g = a.cols,
                h = a.fixed,
                j = a.spacing,
                k = i.Children.count(f),
                l = [],
                m = [],
                n = 0;
            i.Children.forEach(f, function(a, f) {
                if (a === null || a === void 0) return;
                var o = a.type === b.GridItem;
                n += o ? Math.max(a.props.colSpan || 0, 1) : 1;
                var p = n === g ? "_51mw" : "";
                o = o ? i.cloneElement(a, {
                    key: a.key || f,
                    alignh: a.props.alignh || d,
                    alignv: a.props.alignv || e,
                    className: c("joinClasses")(a.props.className, j, p)
                }) : i.jsx(c("GridItem.react"), {
                    alignh: d,
                    alignv: e,
                    className: c("joinClasses")(j, p),
                    children: a
                }, a.key || f);
                m.push(o);
                if (n % g === 0 || f + 1 === k) {
                    if (h === !0 && n < g) {
                        for (var p = n; p < g; p++) m.push(i.jsx(c("GridItem.react"), {}, f + p));
                        n = g
                    }
                    l.push(i.jsx("tr", {
                        className: "_51mx",
                        children: m
                    }, f));
                    m = [];
                    n = 0
                }
            });
            return i.jsx("table", babelHelpers["extends"]({}, this.props, {
                className: c("joinClasses")(this.props.className, "uiGrid _51mz" + (h === !0 ? " _5f0n" : "")),
                cellSpacing: "0",
                cellPadding: "0",
                children: i.jsx("tbody", {
                    children: l
                })
            }))
        };
        return b
    }(i.Component);
    a.GridItem = c("GridItem.react");
    g["default"] = a
}), 98);
__d("PluginTabItem.react", ["cx", "ShimButton.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            var a = this,
                b = this.props.tab.key;
            return i.jsx(c("ShimButton.react"), {
                className: "_eg_" + (this.props.activeTabKey === b ? " _eh2" : ""),
                onClick: function() {
                    return a.props.onSelected(b)
                },
                children: i.jsx("div", {
                    className: "_eh3",
                    children: this.props.tab.title
                })
            })
        };
        return b
    }(i.Component);
    g["default"] = a
}), 98);
__d("PluginTabControl.react", ["cx", "Grid.react", "PluginTabItem.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            var a = this;
            return i.jsx(c("Grid.react"), {
                className: "_4v3l",
                cols: this.props.tabs.length,
                fixed: !0,
                children: this.props.tabs.map(function(b) {
                    return i.jsx(c("Grid.react").GridItem, {
                        className: "_4v3m",
                        children: i.jsx(c("PluginTabItem.react"), {
                            activeTabKey: a.props.activeTabKey,
                            tab: b,
                            onSelected: a.props.onTabSelected
                        })
                    }, b.key)
                })
            })
        };
        return b
    }(i.Component);
    g["default"] = a
}), 98);
__d("XPluginTabAsyncRendererController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/tab/renderer/", {
        key: {
            type: "String",
            required: !0
        },
        config_json: {
            type: "String",
            required: !0
        },
        cursor: {
            type: "String"
        }
    })
}), null);
__d("PluginTabFetcher.react", ["csx", "cx", "AsyncRequest", "DOM", "DOMQuery", "Event", "ReactDOM", "XPluginTabAsyncRendererController", "XUISpinner.react", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            b = a.call(this, b, c) || this;
            b.state = {
                isFetchingComponent: !1,
                asyncContentLoaded: !1
            };
            b.hasMoreContent = !0;
            b.isLoadingContent = !1;
            return b
        }
        var e = b.prototype;
        e.UNSAFE_componentWillReceiveProps = function(a) {
            if (a.isActive === this.props.isActive || !a.isActive) return;
            this.$1()
        };
        e.componentDidMount = function() {
            this.props.isActive && this.$1()
        };
        e.$2 = function() {
            var a = this.refs.container,
                b = a.clientHeight,
                c = a.children[0].clientHeight;
            a = a.scrollTop;
            var d = 100;
            !this.isLoadingContent && this.hasMoreContent && a + b + d > c && (this.isLoadingContent = !0, this.$3())
        };
        e.$3 = function() {
            var a = this,
                b = this.props.tab.configData;
            b = c("XPluginTabAsyncRendererController").getURIBuilder().setString("key", this.props.tab.key).setString("config_json", JSON.stringify(b)).setString("cursor", this.cursor).getURI();
            new(c("AsyncRequest"))().setURI(b).setMethod("GET").setReadOnly(!0).setHandler(function(b) {
                a.setState({
                    isFetchingComponent: !1,
                    asyncContentLoaded: !0
                }, function() {
                    var e = b.payload;
                    a.isLoadingContent = !1;
                    if (a.hasMoreContent) {
                        var f = d("DOMQuery").scry(a.refs.container, "._1_lk");
                        f = f[f.length - 1];
                        c("DOM").appendContent(f, e.content.markup)
                    }
                })
            }).send()
        };
        e.$4 = function() {
            var a = this;
            this.scrollListener = c("Event").listen(this.refs.container, "scroll", function() {
                a.scrollTimeout && (clearTimeout(a.scrollTimeout), a.scrollTimeout = null), a.scrollTimeout = setTimeout(function() {
                    return a.$2()
                }, 250)
            });
            var b = d("DOMQuery").find(this.refs.container, "._10b6");
            c("Event").listen(b, "noMoreContent", function() {
                a.hasMoreContent = !1, a.scrollListener.remove()
            });
            c("Event").listen(b, "setCursor", function(b) {
                a.cursor = b.getData()
            })
        };
        e.$1 = function() {
            var a = this;
            if (!this.state.asyncContentLoaded && !this.state.isFetchingComponent) {
                this.setState({
                    isFetchingComponent: !0
                });
                var b = c("XPluginTabAsyncRendererController").getURIBuilder().setString("key", this.props.tab.key).setString("config_json", JSON.stringify(this.props.tab.configData)).getURI();
                new(c("AsyncRequest"))().setURI(b).setMethod("GET").setReadOnly(!0).setHandler(function(b) {
                    a.setState({
                        isFetchingComponent: !1,
                        asyncContentLoaded: !0
                    }, function() {
                        var e = b.payload;
                        c("DOM").setContent(d("ReactDOM").findDOMNode(a.refs.container), e.content.markup);
                        a.props.tab.canLoadMore && (a.cursor = "", a.$4())
                    })
                }).send()
            }
        };
        e.render = function() {
            return j.jsxs("div", {
                className: this.props.isActive ? "" : "hidden_elem",
                children: [j.jsx("div", {
                    style: {
                        maxHeight: this.props.tabHeight + "px"
                    },
                    className: "_10b4" + (this.state.isFetchingComponent ? " hidden_elem" : ""),
                    ref: "container"
                }), j.jsx("div", {
                    className: "_10b5" + (this.state.isFetchingComponent ? "" : " hidden_elem"),
                    children: j.jsx(c("XUISpinner.react"), {
                        className: "_4g7o",
                        size: "large"
                    })
                })]
            })
        };
        return b
    }(j.Component);
    g["default"] = a
}), 98);
__d("PluginTabContainer.react", ["cx", "PluginTabControl.react", "PluginTabFetcher.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            b = a.call(this, b, c) || this;
            b.state = {
                activeTabKey: b.props.activeTabKey
            };
            return b
        }
        var d = b.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.props.tabs.map(function(b) {
                return a.onTabLoaded(b)
            })
        };
        d.onTabLoaded = function(a) {};
        d.onTabSelected = function(a) {
            this.setState({
                activeTabKey: a
            })
        };
        d.render = function() {
            var a = this,
                b = this.props.tabs.length;
            return b === 0 ? null : i.jsxs("div", {
                children: [b > 1 ? i.jsx(c("PluginTabControl.react"), {
                    tabs: this.props.tabs,
                    activeTabKey: this.state.activeTabKey,
                    onTabSelected: function(b) {
                        return a.onTabSelected(b)
                    }
                }) : null, i.jsx("div", {
                    className: "_2hkj",
                    children: this.props.tabs.map(function(b) {
                        return i.jsx(c("PluginTabFetcher.react"), {
                            tab: b,
                            isActive: b.key === a.state.activeTabKey,
                            tabHeight: a.props.tabHeight
                        }, b.key)
                    })
                })]
            })
        };
        return b
    }(i.Component);
    g["default"] = a
}), 98);
__d("PagePluginTabContainer.react", ["PagePluginEvents", "PagePluginLogger", "PluginTabContainer.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            d = a.call(this, b, d) || this;
            d.$PagePluginTabContainer1 = new(c("PagePluginLogger"))(b.pageID, b.refererURI);
            return d
        }
        var d = b.prototype;
        d.onTabLoaded = function(a) {
            this.$PagePluginTabContainer1.notify(c("PagePluginEvents").page_plugin.tab.configured, a.key)
        };
        d.onTabSelected = function(b) {
            this.$PagePluginTabContainer1.notify(c("PagePluginEvents").page_plugin.tab.click, b), a.prototype.onTabSelected.call(this, b)
        };
        return b
    }(c("PluginTabContainer.react"));
    g["default"] = a
}), 98);