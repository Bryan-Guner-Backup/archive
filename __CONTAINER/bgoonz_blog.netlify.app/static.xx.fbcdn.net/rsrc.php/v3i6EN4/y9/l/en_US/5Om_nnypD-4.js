if (self.CavalryLogger) {
    CavalryLogger.start_js(["vknjMB+"]);
}

__d("CometSkittleIcon.react", ["CometIcon.react", "profilePhotoUtils", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            circle: {
                borderTopStartRadius: "s45kfl79",
                borderTopEndRadius: "emlxlaya",
                borderBottomEndRadius: "bkmhp75w",
                borderBottomStartRadius: "spb7xbtv"
            },
            iconBadge: {
                alignItems: "bp9cbjyn",
                backgroundColor: "is6700om",
                borderTopColor: "np69z8it",
                borderEndColor: "et4y5ytx",
                borderBottomColor: "j7g94pet",
                borderStartColor: "b74d5cxt",
                borderTopStartRadius: "s45kfl79",
                borderTopEndRadius: "emlxlaya",
                borderBottomEndRadius: "bkmhp75w",
                borderBottomStartRadius: "spb7xbtv",
                borderTopStyle: "goun2846",
                borderEndStyle: "ccm00jje",
                borderBottomStyle: "s44p3ltw",
                borderStartStyle: "mk2mc5f4",
                borderTopWidth: "qxh1up0x",
                borderEndWidth: "qtyiw8t4",
                borderBottomWidth: "tpcyxxvw",
                borderStartWidth: "k0bpgpbk",
                display: "j83agx80",
                justifyContent: "taijpn5t",
                overflowX: "ni8dbmo4",
                overflowY: "stjgntxs",
                paddingTop: "jwdofwj8",
                paddingEnd: "n8tt0mok",
                paddingBottom: "r8blr3vg",
                paddingStart: "hyh9befq",
                position: "pmk7jnqg"
            },
            roundedRect: {
                borderTopStartRadius: "ue3kfks5",
                borderTopEndRadius: "pw54ja7n",
                borderBottomEndRadius: "uo3d90p7",
                borderBottomStartRadius: "l82x9zwi"
            },
            skittle: {
                alignItems: "bp9cbjyn",
                borderTopWidth: "rt8b4zig",
                borderEndWidth: "n8ej3o3l",
                borderBottomWidth: "agehan2d",
                borderStartWidth: "sk4xxmp2",
                boxSizing: "rq0escxv",
                display: "pq6dq46d",
                justifyContent: "taijpn5t",
                position: "l9j0dhe7"
            }
        },
        j = {
            accent: {
                backgroundColor: "is6700om"
            },
            blue: {
                backgroundColor: "nfl8ryma"
            },
            cherry: {
                backgroundColor: "cvgnql8j"
            },
            grape: {
                backgroundColor: "oxqh0ovx"
            },
            gray: {
                backgroundColor: "tdjehn4e"
            },
            green: {
                backgroundColor: "jllm4f4h"
            },
            lemon: {
                backgroundColor: "tutozmqo"
            },
            lightblue: {
                backgroundColor: "oo1teu6h"
            },
            lime: {
                backgroundColor: "x2my2bqz"
            },
            pink: {
                backgroundColor: "g1i5egrt"
            },
            red: {
                backgroundColor: "l44iypv3"
            },
            seafoam: {
                backgroundColor: "p43b5e0k"
            },
            teal: {
                backgroundColor: "gbrvaats"
            },
            tomato: {
                backgroundColor: "d8rukodm"
            },
            white: {
                backgroundColor: "q2y6ezfg"
            }
        },
        k = {
            36: {
                height: "tv7at329",
                width: "thwo4zme"
            },
            40: {
                height: "qypqp5cg",
                width: "q676j6op"
            },
            48: {
                height: "m7zwrmfr",
                width: "tmrshh9y"
            },
            56: {
                height: "e5d9fub0",
                width: "oeao4gh3"
            },
            60: {
                height: "cb02d2ww",
                width: "ljni7pan"
            }
        },
        l = (b = {}, b[36] = 20, b[40] = 24, b[48] = 24, b[56] = 24, b[60] = 24, b);

    function m(a) {
        switch (a) {
            case "gray":
                return "primary";
            case "white":
                return "primary";
            case "lightblue":
                return "highlight";
            default:
                return "white"
        }
    }

    function a(a, b) {
        var e = a.color,
            f = a.disabled;
        f = f === void 0 ? !1 : f;
        var g = a.icon,
            n = a.iconAria,
            o = a.iconBadge,
            p = a.iconBadgeAria,
            q = a.shape;
        q = q === void 0 ? "circle" : q;
        a = a.size;
        return h.jsxs("div", {
            className: c("stylex")(q === "circle" && i.circle, q === "roundedRect" && i.roundedRect, i.skittle, j[e], k[a]),
            ref: b,
            children: [h.jsx(c("CometIcon.react"), babelHelpers["extends"]({}, n, {
                color: f ? "disabled" : m(e),
                icon: g,
                size: l[a]
            })), o && h.jsx("div", {
                className: c("stylex")(i.iconBadge),
                style: d("profilePhotoUtils").getBadgePosition(a / 2),
                children: h.jsx(c("CometIcon.react"), babelHelpers["extends"]({}, p, {
                    color: "white",
                    icon: o,
                    size: 8
                }))
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("getItemRoleFromCompositeRole", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        switch (a) {
            case "grid":
                return "row";
            case "listbox":
                return "option";
            case "list":
                return "listitem";
            case "radiogroup":
                return "radio";
            case "row":
                return "gridcell";
            case "tablist":
                return "tab"
        }
        return null
    }
    f["default"] = a
}), 66);
__d("BaseInput.react", ["CometContainerPressableContext", "Locale", "react", "stylex", "testID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
        j = b.useMemo,
        k = {
            root: {
                WebkitTapHighlightColor: "oajrlxb2",
                boxSizing: "rq0escxv",
                touchAction: "f1sip0of",
                ":disabled": {
                    cursor: "hidtqoto"
                }
            },
            zIndex: {
                zIndex: "tkr6xdv7"
            }
        },
        l = d("Locale").isRTL();

    function a(a, b) {
        var d = a.onChange,
            e = a.onClick,
            f = a.onValueChange,
            g = a.testid,
            m = a.type,
            n = m === void 0 ? "text" : m;
        m = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange", "onClick", "onValueChange", "testid", "type", "xstyle"]);
        var o = j(function() {
                switch (n) {
                    case "switch":
                        return "checkbox";
                    default:
                        return n
                }
            }, [n]),
            p = o === "checkbox" || o === "radio",
            q = o === "textarea",
            r = i(c("CometContainerPressableContext")) != null;
        a = Object.assign({}, {
            dir: l ? "rtl" : "ltr"
        }, a, c("testID")(g), {
            className: c("stylex")(k.root, m, r && k.zIndex),
            onChange: function(a) {
                p || f && f(a.target.value), d && d(a)
            },
            onClick: function(a) {
                p && (f && f(a.target.checked)), e && e(a)
            }
        });
        return q ? h.jsx("textarea", babelHelpers["extends"]({}, a, {
            ref: b
        })) : h.jsx("input", babelHelpers["extends"]({}, a, {
            ref: b,
            type: o
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.memo(h.forwardRef(a));
    g["default"] = e
}), 98);
__d("BaseTextInput.react", ["BaseFocusRing.react", "BaseInput.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            root: {
                ":disabled": {
                    color: "e70eycc3"
                }
            }
        };

    function a(a, b) {
        var d = a.suppressFocusRing,
            e = a.xstyle,
            f = babelHelpers.objectWithoutPropertiesLoose(a, ["suppressFocusRing", "xstyle"]);
        return h.jsx(c("BaseFocusRing.react"), {
            suppressFocusRing: d,
            children: function(a) {
                return h.jsx(c("BaseInput.react"), babelHelpers["extends"]({}, f, {
                    ref: b,
                    xstyle: [i.root, a, e]
                }))
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b
}), 98);
__d("processBaseInputValidators", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, b) {
        if (typeof b === "function") return [b(a)];
        var c = [];
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
            Array.isArray(f) ? c.push.apply(c, g(a, f)) : typeof f === "function" && c.push(f(a))
        }
        return c.filter(function(a) {
            return a.type !== "CORRECT"
        })
    }
    f["default"] = g
}), 66);
__d("useBaseInputValidators", ["processBaseInputValidators", "react", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useMemo,
        i = b.useState;

    function a(a) {
        var b = a.validator,
            d = a.value;
        a = i(!0);
        var e = a[0];
        a = a[1];
        var f = c("useStable")(function() {
            return d
        });
        e && d !== f && a(!1);
        return h(function() {
            var a, f = b != null && !e ? c("processBaseInputValidators")(d, b) : [];
            if (f.length === 0) return {
                allResults: f,
                topResultReason: null,
                topResultType: "CORRECT"
            };
            var g = f.some(function(a) {
                return a.type === "ERROR"
            });
            a = (a = f.find(function(a) {
                return a.type === (g ? "ERROR" : "WARN")
            })) != null ? a : null;
            return {
                allResults: f,
                topResultReason: a != null && a.reason != null ? a.reason : null,
                topResultType: a != null ? a.type : "CORRECT"
            }
        }, [e, b, d])
    }
    g["default"] = a
}), 98);
__d("useFadeEffect", ["clearTimeout", "react", "setTimeout", "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useReducer,
        j = b.useRef,
        k = 1e3;

    function l(a, b) {
        switch (b.type) {
            case "start":
                return {
                    isTransitioning: !0,
                    shouldBeVisible: b.shouldBeVisible
                };
            case "finish":
                return {
                    isTransitioning: !1,
                    shouldBeVisible: a.shouldBeVisible
                };
            default:
                return a
        }
    }

    function a(a) {
        var b = j(null),
            d = i(l, {
                isTransitioning: !1,
                shouldBeVisible: !1
            }),
            e = d[0],
            f = e.isTransitioning;
        e = e.shouldBeVisible;
        var g = d[1],
            m = j(null),
            n = j(null);
        c("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(function() {
            return function() {
                m.current != null && c("clearTimeout")(m.current), n.current != null && window.cancelAnimationFrame(n.current)
            }
        }, []);
        var o = h(function() {
                g({
                    type: "finish"
                }), m.current != null && c("clearTimeout")(m.current), m.current = null
            }, []),
            p = h(function(a) {
                n.current != null && window.cancelAnimationFrame(n.current), n.current = window.requestAnimationFrame(function() {
                    g({
                        shouldBeVisible: a,
                        type: "start"
                    }), n.current = null, m.current != null && c("clearTimeout")(m.current), m.current = c("setTimeout")(o, k)
                })
            }, [o]),
            q = j(!1);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            q.current !== a && (!a || b.current != null) && p(a), q.current = a
        }, [a, p]);
        d = h(function(a) {
            var c = b.current;
            b.current = a;
            a != null ? (a.addEventListener != null && (a.addEventListener("transitionend", o), a.addEventListener("webkitTransitionEnd", o)), q.current === !0 && p(!0)) : c != null && c.removeEventListener != null && (c.removeEventListener("transitionend", o), c.removeEventListener("webkitTransitionEnd", o))
        }, [o, p]);
        f = f || e || a;
        return [f, e, d]
    }
    g["default"] = a
}), 98);
__d("CometImageIcon_DEPRECATED.react", ["BaseImage_DEPRECATED.react", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.auxiliary,
            d = a.size;
        d = d === void 0 ? 24 : d;
        var e = a.src,
            f = a.style;
        f = f === void 0 ? "circle" : f;
        a = a.testid;
        return h.jsxs("div", {
            className: "l9j0dhe7",
            children: [h.jsx(c("BaseImage_DEPRECATED.react"), {
                className: c("stylex").dedupe(f === "circle" ? {
                    "border-top-start-radius-1": "s45kfl79",
                    "border-top-end-radius-1": "emlxlaya",
                    "border-bottom-end-radius-1": "bkmhp75w",
                    "border-bottom-start-radius-1": "spb7xbtv"
                } : {}, {
                    "display-1": "a8c37x1j"
                }, f === "roundedRect" ? {
                    "border-top-start-radius-1": "ue3kfks5",
                    "border-top-end-radius-1": "pw54ja7n",
                    "border-bottom-end-radius-1": "uo3d90p7",
                    "border-bottom-start-radius-1": "l82x9zwi"
                } : null),
                height: d,
                src: e,
                testid: void 0,
                width: d
            }), f !== "square" ? h.jsx("div", {
                className: c("stylex").dedupe(f === "circle" ? {
                    "border-top-start-radius-1": "s45kfl79",
                    "border-top-end-radius-1": "emlxlaya",
                    "border-bottom-end-radius-1": "bkmhp75w",
                    "border-bottom-start-radius-1": "spb7xbtv"
                } : {}, {
                    "box-shadow-1": "oaz4zybt",
                    "position-1": "pmk7jnqg",
                    "start-1": "j9ispegn",
                    "top-1": "kr520xx4"
                }, f === "roundedRect" ? {
                    "border-top-start-radius-1": "ue3kfks5",
                    "border-top-end-radius-1": "pw54ja7n",
                    "border-bottom-end-radius-1": "uo3d90p7",
                    "border-bottom-start-radius-1": "l82x9zwi"
                } : null),
                style: {
                    height: d,
                    width: d
                }
            }) : null, b != null ? h.jsx("div", {
                className: "pmk7jnqg n7fi1qx3 i09qtzwb",
                children: b
            }) : null]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometRoundedTextInput.react", ["BaseTextInput.react", "CometScreenReaderText.react", "Locale", "react", "stylex", "useBaseInputValidators", "useCometUniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState,
        j = {
            button: {
                position: "pmk7jnqg"
            },
            disabledInput: {
                color: "erlsw9ld",
                cursor: "rj84mg9z"
            },
            fontPlaceholder: {
                backgroundColor: "b3i9ofy5",
                color: "pipptul6",
                "::placeholder": {
                    color: "b1f16np4"
                },
                ":focus::placeholder": {
                    color: "hdh3q7d8"
                }
            },
            fontSecondary: {
                backgroundColor: "tdjehn4e",
                color: "m9osqain"
            },
            hideIconAnimation: {
                transitionDuration: "ijkhr0an",
                transitionProperty: "pnx7fd3z",
                transitionTimingFunction: "sgqwj88q"
            },
            icon: {
                pointerEvents: "hzruof5a",
                position: "pmk7jnqg"
            },
            iconFocused: {
                opacity: "b5wmifdl",
                pointerEvents: "hzruof5a",
                transform: "jax01cp1"
            },
            iconFocusedRTL: {
                transform: "h13w3u8k"
            },
            root: {
                boxSizing: "rq0escxv",
                display: "a8c37x1j",
                minWidth: "a5nuqjux",
                position: "l9j0dhe7",
                width: "k4urcfbm"
            },
            textInput: {
                appearance: "dwo3fsh8",
                borderTop: "qu0x051f",
                borderEnd: "esr5mh6w",
                borderBottom: "e9989ue4",
                borderStart: "r7d6kgcz",
                borderTopStartRadius: "br7hx15l",
                borderTopEndRadius: "h2jyy9rg",
                borderBottomEndRadius: "n3ddgdk9",
                borderBottomStartRadius: "owxd89k7",
                boxSizing: "rq0escxv",
                color: "oo9gr5id",
                fontFamily: "ihxqhq3m",
                fontSize: "jq4qci2q",
                outline: "lzcic4wl",
                transitionProperty: "aaoq3grb",
                width: "k4urcfbm",
                "::-ms-clear": {
                    display: "iu8raji3"
                }
            }
        },
        k = {
            large: {
                start: "rnx8an3s",
                top: "fcg2cn6m"
            },
            medium: {
                start: "ax37mqq2",
                top: "c0p38np4"
            }
        },
        l = {
            large: {
                end: "swmj3c3o",
                top: "plgsh5y4"
            },
            medium: {
                end: "oqnctjl6",
                top: "ginu6rux"
            }
        },
        m = {
            center: {
                textAlign: "oqcyycmt"
            },
            end: {
                textAlign: "ftzlm3b6"
            },
            inherit: {
                textAlign: "i1ao9s8h"
            },
            start: {
                textAlign: "hzawbc8m"
            }
        },
        n = {
            large: {
                height: "qypqp5cg",
                paddingTop: "l60d2q6s",
                paddingEnd: "hv4rvrfc",
                paddingBottom: "hwnh5xvq",
                paddingStart: "dati1w0a"
            },
            medium: {
                height: "tv7at329",
                paddingTop: "l60d2q6s",
                paddingEnd: "d1544ag0",
                paddingBottom: "hwnh5xvq",
                paddingStart: "tw6a2znq"
            }
        },
        o = {
            large: {
                paddingStart: "ez2duhqw"
            },
            medium: {
                paddingStart: "fjf4s8hc"
            }
        },
        p = d("Locale").isRTL();

    function a(a, b) {
        var d, e = a.addOnEnd,
            f = a["aria-describedby"],
            g = a.disabled;
        g = g === void 0 ? !1 : g;
        var q = a.hideIconAnimation;
        q = q === void 0 ? !1 : q;
        var r = a.hideIconOnFocus;
        r = r === void 0 ? !1 : r;
        var s = a.icon,
            t = a.label,
            u = a.onBlur,
            v = a.onFocus,
            w = a.onMouseUp,
            x = a.placeholderFontUse;
        x = x === void 0 ? "placeholder" : x;
        var y = a.size;
        y = y === void 0 ? "medium" : y;
        var z = a.textAlign;
        z = z === void 0 ? "start" : z;
        var A = a.validator,
            B = a.value,
            C = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["addOnEnd", "aria-describedby", "disabled", "hideIconAnimation", "hideIconOnFocus", "icon", "label", "onBlur", "onFocus", "onMouseUp", "placeholderFontUse", "size", "textAlign", "validator", "value", "xstyle"]);
        var D = c("useCometUniqueID")();
        A = c("useBaseInputValidators")({
            validator: A,
            value: String(B)
        });
        var E = A.topResultReason;
        A = A.topResultType;
        var F = i(!1),
            G = F[0],
            H = F[1];
        F = function(a) {
            H(!0), v && v(a)
        };
        var I = function(a) {
                H(!1), u && u(a)
            },
            J = function(a) {
                w && w(a)
            };
        d = E != null ? D + " " + ((d = f) != null ? d : "") : f;
        return h.jsxs("label", {
            className: c("stylex")(j.root),
            children: [s != null ? h.jsx("div", {
                className: c("stylex")(!q && j.hideIconAnimation, j.icon, k[y], r && G && j.iconFocused, r && G && p && j.iconFocusedRTL),
                children: s
            }) : null, h.jsx(c("BaseTextInput.react"), babelHelpers["extends"]({}, a, {
                "aria-describedby": d,
                "aria-invalid": A === "ERROR",
                "aria-label": t || a["aria-label"],
                disabled: g,
                onBlur: I,
                onFocus: F,
                onMouseUp: J,
                ref: b,
                value: B,
                xstyle: [m[z], j.hideIconAnimation, x === "placeholder" && j.fontPlaceholder, x === "secondary" && j.fontSecondary, j.textInput, n[y], g && j.disabledInput, s != null && (!r || !G) && o[y], C]
            })), e != null && h.jsx("div", {
                className: c("stylex")(j.button, l[y]),
                children: e
            }), E != null ? h.jsx(c("CometScreenReaderText.react"), {
                id: D,
                text: E
            }) : null]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("MagnifyingGlassFilled16IconFbicon.react", ["ix", "fbicon"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = d("fbicon")._(h("491282"), 16);
    g["default"] = a
}), 98);
__d("CometTooltipDeferredImpl.react", ["BaseContextualLayer.react", "CometHeroInteractionContextPassthrough.react", "CometPlaceholder.react", "CometProgressRingIndeterminate.react", "TetraTextPairing.react", "clearTimeout", "react", "setTimeout", "stylex", "useCometDisplayTimingTrackerForInteraction", "useCometTheme", "useFadeEffect", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
        j = b.useRef,
        k = b.useState,
        l = {
            container: {
                backgroundColor: "ms7hmo2b",
                borderTopStartRadius: "ue3kfks5",
                borderTopEndRadius: "pw54ja7n",
                borderBottomEndRadius: "uo3d90p7",
                borderBottomStartRadius: "l82x9zwi",
                boxShadow: "r92hip7p",
                display: "a8c37x1j",
                marginBottom: "dicw6rsg",
                marginTop: "rs0gx3tq",
                maxWidth: "bkm5gps7",
                opacity: "b5wmifdl",
                paddingTop: "pybr56ya",
                paddingEnd: "d1544ag0",
                paddingBottom: "f10w8fjw",
                paddingStart: "tw6a2znq",
                position: "l9j0dhe7",
                transitionDuration: "c5ndavph",
                transitionProperty: "art1omkt",
                transitionTimingFunction: "ot9fgl3s"
            },
            containerVisible: {
                opacity: "pedkr2u6",
                transitionDuration: "ijkhr0an",
                transitionTimingFunction: "s13u9afw"
            },
            contextualLayer: {
                pointerEvents: "hzruof5a"
            },
            loadingState: {
                display: "j83agx80",
                justifyContent: "taijpn5t"
            }
        };

    function m(a) {
        var b = a.contextualLayerRef;
        i(function() {
            var a = b.current;
            a && a.reposition({
                autoflip: !0
            })
        }, [b]);
        return null
    }

    function a(a) {
        var b = a.contentKey,
            d = a.delayContentMs,
            e = d === void 0 ? 0 : d;
        d = a.headline;
        var f = a.id,
            g = a.isVisible,
            i = a.tooltip,
            n = a.tooltipTheme;
        n = n === void 0 ? "invert" : n;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["contentKey", "delayContentMs", "headline", "id", "isVisible", "tooltip", "tooltipTheme"]);
        var o = j(null),
            p = c("useFadeEffect")(g),
            q = p[0],
            r = p[1];
        p = p[2];
        var s = c("useCometDisplayTimingTrackerForInteraction")("ToolTip"),
            t = j(null),
            u = j(g),
            v = k(function() {
                return g === !0 && u.current === !1 && e > 0
            }),
            w = v[0],
            x = v[1];
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if (g === !0 && u.current === !1 && e > 0) {
                x(!0);
                t.current = c("setTimeout")(function() {
                    x(!1), t.current = null
                }, e);
                return function() {
                    c("clearTimeout")(t.current), t.current = null
                }
            } else t.current != null && (x(!1), c("clearTimeout")(t.current), t.current = null);
            u.current = g
        }, [e, g]);
        v = c("useCometTheme")(n);
        n = v[0];
        v = v[1];
        if (i == null || !q) return null;
        q = h.jsx("div", {
            className: c("stylex")(l.loadingState),
            children: h.jsx(c("CometProgressRingIndeterminate.react"), {
                color: "dark",
                size: 20
            })
        });
        return h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
            clear: !0,
            children: h.jsx(c("BaseContextualLayer.react"), babelHelpers["extends"]({
                align: "middle"
            }, a, {
                imperativeRef: o,
                ref: s,
                xstyle: l.contextualLayer,
                children: h.jsx(n, {
                    children: h.jsx("span", {
                        className: c("stylex")(v, l.container, r && l.containerVisible),
                        "data-testid": void 0,
                        id: f,
                        ref: p,
                        role: "tooltip",
                        children: h.jsx(c("TetraTextPairing.react"), {
                            body: w ? q : h.jsxs(c("CometPlaceholder.react"), {
                                fallback: q,
                                children: [h.jsx(m, {
                                    contextualLayerRef: o
                                }), i]
                            }, b),
                            bodyColor: "primary",
                            headline: d,
                            headlineColor: "primary",
                            level: 4
                        })
                    })
                })
            }))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometObjectFitContainer.react", ["cr:964538", "react", "stylex", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            inner: {
                height: "datstx6m",
                position: "l9j0dhe7",
                width: "k4urcfbm"
            },
            innerWithAspectRatio: {
                bottom: "i09qtzwb",
                boxSizing: "rq0escxv",
                end: "n7fi1qx3",
                position: "pmk7jnqg",
                start: "j9ispegn",
                top: "kr520xx4"
            },
            outer: {
                height: "datstx6m",
                position: "l9j0dhe7",
                width: "k4urcfbm"
            },
            outerWithAspectRatio: {
                height: "idiwt2bm"
            }
        };

    function j(a) {
        var b = a.children,
            d = a.debugRole;
        d = a.innerInlineStyle;
        var e = a.innerXStyle,
            f = a.outerInlineStyle,
            g = a.outerRef,
            j = a.outerXStyle;
        a = a.testid;
        var k = a != null && a !== "" ? a + "-outer" : void 0;
        k = a != null && a !== "" ? a + "-inner" : void 0;
        return h.jsx("div", babelHelpers["extends"]({}, {}, {
            className: c("stylex")(i.outer, j),
            "data-testid": void 0,
            ref: g,
            style: f,
            children: h.jsx("div", babelHelpers["extends"]({}, {}, {
                className: c("stylex")(i.inner, e),
                "data-testid": void 0,
                style: d,
                children: b
            }))
        }))
    }
    j.displayName = j.name + " [from " + f.id + "]";

    function a(a, b) {
        var d = a.children,
            e = a.contentAspectRatio,
            f = a.debugRole,
            g = a.objectFitMode;
        g = g === void 0 ? "CONTAINER_SIZE" : g;
        a = a.testid;
        a = 16 / 9;
        e = e != null && isFinite(e) && e > 0 ? e : a;
        if (g === "CONTAINER_WIDTH_BASED_ASPECT_RATIO") {
            a = isFinite(e) && e > 0 ? 100 / e : 100;
            e = {
                paddingBottom: a.toFixed(5) + "%"
            };
            return h.jsx(j, {
                children: d,
                debugRole: f,
                innerXStyle: i.innerWithAspectRatio,
                outerInlineStyle: e,
                outerRef: b,
                outerXStyle: i.outerWithAspectRatio,
                testid: void 0
            })
        } else if (g === "CONTAINER_SIZE") return h.jsx(j, {
            children: d,
            debugRole: f,
            outerRef: b,
            testid: void 0
        });
        else throw c("unrecoverableViolation")("Unsupported objectFitMode " + g, "comet_ui")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("useCometSize_DO_NOT_USE", ["CometThrottle", "ExecutionEnvironment", "HiddenSubtreePassiveContext", "react", "unrecoverableViolation", "useLayoutEffect_SAFE_FOR_SSR", "useResizeObserver", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
        i = b.useEffect,
        j = b.useRef,
        k = b.useState;

    function l(a) {
        var b = a.setBoxStateStable,
            d = null,
            e = function(a) {
                var c;
                if (((c = d) == null ? void 0 : c.height) === a.height && ((c = d) == null ? void 0 : c.width) === a.width) return;
                d = a;
                b(a)
            };
        a = function(a) {
            a = a.getBoundingClientRect();
            var b = a.height;
            a = a.width;
            e({
                height: b,
                width: a
            })
        };
        var f = c("CometThrottle")(function(a) {
            var b = a.height;
            a = a.width;
            if (b === 0 && a === 0) return;
            e({
                height: b,
                width: a
            })
        }, 200, {
            leading: !0,
            trailing: !0
        });
        return {
            measure: a,
            onResizeThrottled: f
        }
    }

    function a() {
        if (!d("ExecutionEnvironment").canUseDOM) throw c("unrecoverableViolation")("useCometSize is not compatible with Server Rendering. This will break SSR! See https://fburl.com/wiki/xrzohrqb", "comet_ssr");
        var a = j(null),
            b = k(null),
            e = b[0],
            f = b[1],
            g = h(c("HiddenSubtreePassiveContext")),
            m = c("useStable")(function() {
                return l({
                    setBoxStateStable: f
                })
            }),
            n = c("useResizeObserver")(m.onResizeThrottled),
            o = j(n);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            o.current = n
        }, [n]);
        b = j(function(b) {
            b !== a.current && (a.current = b, b != null && m.measure(b)), o.current(a.current)
        });
        i(function() {
            if (!g.getCurrentState().hidden) return;
            var b = g.subscribeToChanges(function(c) {
                !c.hidden && a.current != null && (m.measure(a.current), b.remove())
            });
            return function() {
                return b.remove()
            }
        }, [g, m]);
        i(function() {
            return function() {
                m.onResizeThrottled.cancel()
            }
        }, [m]);
        return [b.current, e]
    }
    g["default"] = a
}), 98);
__d("CometMetricsNavigationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1956659");
    c = b("FalcoLoggerInternal").create("comet_metrics_navigation", a);
    e.exports = c
}), null);
__d("CometFeedNoRoutingNavigationEventsLoggerImpl", ["CometMetricsNavigationFalcoEvent", "JSScheduler", "react", "requireDeferred", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
        i = c("requireDeferred")("Banzai").__setRef("CometFeedNoRoutingNavigationEventsLoggerImpl");

    function a(a, b, e) {
        var f = h(function(d, f, g, h) {
            if (b == null || b === "") return;
            var i = c("uuid")();
            c("CometMetricsNavigationFalcoEvent").logImmediately(function() {
                return {
                    dest_module: h,
                    event_trace_id: i,
                    extra_fields: e,
                    href: g,
                    tn: a.join(""),
                    ts: f.toString(),
                    xt: b
                }
            });
            var j = babelHelpers["extends"]({}, d.VITAL, {
                signal: !0
            });
            d.post("comet_metrics:navigation", {
                dest_module: h,
                event_trace_id: i,
                extra: e,
                href: g,
                tn: a.join(""),
                ts: f,
                xt: b
            }, j)
        }, [a, b, e]);
        return h(function(a, b, c) {
            d("JSScheduler").scheduleLoggingPriCallback(function() {
                return i.onReady(function(d) {
                    return f(d, a, b, c)
                })
            })
        }, [f])
    }
    g["default"] = a
}), 98);
__d("useCometFeedNoRoutingNavigationEventLogger", ["CometFeedLoggingExtraFieldsContext", "CometFeedNoRoutingNavigationEventsLoggerImpl", "CometTrackingCodeContext", "CometTrackingNodesContext", "emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a(a) {
        var b = h(c("CometTrackingNodesContext")),
            d = h(c("CometTrackingCodeContext"));
        d = d.encrypted_tracking[0];
        var e = h(c("CometFeedLoggingExtraFieldsContext"));
        return d === null || d === void 0 ? c("emptyFunction") : c("CometFeedNoRoutingNavigationEventsLoggerImpl")((a = a) != null ? a : b, d, e)
    }
    g["default"] = a
}), 98);
__d("MWChatStateThread.bs", ["MWChatThreadId.bs"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a) return "thread:" + b("MWChatThreadId.bs").serializeFuture(a._0);
        else return "search"
    }
    c = a;
    f.toString = a;
    f.toInteractionIDKey = c
}), null);
__d("MWChatStateV2IsClosed.bs", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.closeWatermark > Math.max(a.openWatermark, a.minimizeWatermark, a.clientForcedMinimizeWatermark)
    }
    f.isClosed = a
}), null);
__d("bs_caml_splice_call", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b) {
        var c, d;
        d = b.length;
        var e = [];
        for (c = 0; c < d - 1; ++c) e.push(b[c]);
        b = b[d - 1];
        for (c = 0; c < b.length; ++c) e.push(b[c]);
        return a.apply(null, e)
    };
    b = function(a, b, c) {
        var d, e;
        e = c.length;
        var f = [];
        for (d = 0; d < e - 1; ++d) f.push(c[d]);
        c = c[e - 1];
        for (d = 0; d < c.length; ++d) f.push(c[d]);
        return a[b].apply(a, f)
    };
    f.spliceApply = a;
    f.spliceObjApply = b
}), null);
__d("MWChatStateV2IsOpen.bs", ["bs_caml_option", "bs_caml_splice_call"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c) {
        a = a !== void 0 ? b("bs_caml_option").valFromOption(a) : void 0;
        return c.openWatermark > b("bs_caml_splice_call").spliceApply(Math.max, [a !== void 0 ? [c.closeWatermark, c.minimizeWatermark, c.clientForcedMinimizeWatermark, a] : [c.closeWatermark, c.minimizeWatermark, c.clientForcedMinimizeWatermark]])
    }
    f.isOpen = a
}), null);
__d("MWChatStateV2IsMinimized.bs", ["MWChatStateV2IsClosed.bs", "MWChatStateV2IsOpen.bs", "bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c) {
        a = a !== void 0 ? b("bs_caml_option").valFromOption(a) : void 0;
        if (a !== void 0)
            if (b("MWChatStateV2IsOpen.bs").isOpen(b("bs_caml_option").some(a), c)) return !1;
            else return !b("MWChatStateV2IsClosed.bs").isClosed(c);
        else return Math.max(c.minimizeWatermark, c.clientForcedMinimizeWatermark) > Math.max(c.openWatermark, c.closeWatermark)
    }
    f.isMinimized = a
}), null);
__d("MWChatStateActions.bs", ["MWChatStateV2IsClosed.bs", "MWChatStateV2IsMinimized.bs", "bs_caml_obj"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return [{
            TAG: 0,
            _0: function(c) {
                var d = c.tabs.get(a);
                if (!(d == null) && !b("bs_caml_obj").caml_equal(c.focusedTabId, a)) return {
                    tabs: c.tabs,
                    mediaViewerOpenWatermark: c.mediaViewerOpenWatermark,
                    focusedTabId: a,
                    nextTabId: c.nextTabId
                };
                else return c
            }
        }]
    }

    function c(a) {
        return [{
            TAG: 0,
            _0: function(a) {
                var b = a.focusedTabId;
                if (b !== void 0) return {
                    tabs: a.tabs,
                    mediaViewerOpenWatermark: a.mediaViewerOpenWatermark,
                    focusedTabId: void 0,
                    nextTabId: a.nextTabId
                };
                else return a
            }
        }]
    }

    function d(a, b) {
        return [{
            TAG: 1,
            _0: b,
            _1: {
                shouldFocus: !1
            },
            _2: function(b) {
                if (a <= b.closeWatermark) return b;
                else return {
                    tabId: b.tabId,
                    tabType: b.tabType,
                    openWatermark: b.openWatermark,
                    minimizeWatermark: b.minimizeWatermark,
                    clientForcedMinimizeWatermark: b.clientForcedMinimizeWatermark,
                    closeWatermark: a,
                    openFlyoutWatermark: b.openFlyoutWatermark
                }
            }
        }]
    }

    function e(a, b) {
        return [{
            TAG: 2,
            _0: b,
            _1: {
                shouldFocus: !1
            },
            _2: function(b) {
                if (a <= b.closeWatermark) return b;
                else return {
                    tabId: b.tabId,
                    tabType: b.tabType,
                    openWatermark: b.openWatermark,
                    minimizeWatermark: b.minimizeWatermark,
                    clientForcedMinimizeWatermark: b.clientForcedMinimizeWatermark,
                    closeWatermark: a,
                    openFlyoutWatermark: b.openFlyoutWatermark
                }
            }
        }]
    }

    function g(a, b, c) {
        var d = function(b) {
            if (a <= b.openWatermark) return b;
            else return {
                tabId: b.tabId,
                tabType: c,
                openWatermark: a,
                minimizeWatermark: b.minimizeWatermark,
                clientForcedMinimizeWatermark: b.clientForcedMinimizeWatermark,
                closeWatermark: b.closeWatermark,
                openFlyoutWatermark: b.openFlyoutWatermark
            }
        };
        return [{
            TAG: 3,
            _0: c,
            _1: b,
            _2: d,
            _3: d
        }]
    }

    function h(a, b) {
        return [{
            TAG: 1,
            _0: b,
            _1: {
                shouldFocus: !0
            },
            _2: function(b) {
                if (a <= b.openWatermark) return b;
                else return {
                    tabId: b.tabId,
                    tabType: b.tabType,
                    openWatermark: a,
                    minimizeWatermark: b.minimizeWatermark,
                    clientForcedMinimizeWatermark: b.clientForcedMinimizeWatermark,
                    closeWatermark: b.closeWatermark,
                    openFlyoutWatermark: b.openFlyoutWatermark
                }
            }
        }]
    }

    function i(a, b) {
        return [{
            TAG: 1,
            _0: b,
            _1: {
                shouldFocus: !1
            },
            _2: function(b) {
                if (a <= b.minimizeWatermark) return b;
                else return {
                    tabId: b.tabId,
                    tabType: b.tabType,
                    openWatermark: b.openWatermark,
                    minimizeWatermark: a,
                    clientForcedMinimizeWatermark: b.clientForcedMinimizeWatermark,
                    closeWatermark: b.closeWatermark,
                    openFlyoutWatermark: b.openFlyoutWatermark
                }
            }
        }]
    }

    function j(a, b) {
        return [{
            TAG: 1,
            _0: b,
            _1: {
                shouldFocus: !1
            },
            _2: function(b) {
                if (a <= b.clientForcedMinimizeWatermark) return b;
                else return {
                    tabId: b.tabId,
                    tabType: b.tabType,
                    openWatermark: b.openWatermark,
                    minimizeWatermark: b.minimizeWatermark,
                    clientForcedMinimizeWatermark: a,
                    closeWatermark: b.closeWatermark,
                    openFlyoutWatermark: b.openFlyoutWatermark
                }
            }
        }]
    }

    function k(a, b) {
        return [{
            TAG: 2,
            _0: b,
            _1: {
                shouldFocus: !1
            },
            _2: function(b) {
                if (a <= b.minimizeWatermark) return b;
                else return {
                    tabId: b.tabId,
                    tabType: b.tabType,
                    openWatermark: b.openWatermark,
                    minimizeWatermark: a,
                    clientForcedMinimizeWatermark: b.clientForcedMinimizeWatermark,
                    closeWatermark: b.closeWatermark,
                    openFlyoutWatermark: b.openFlyoutWatermark
                }
            }
        }]
    }

    function l(a, b, c) {
        return [{
            TAG: 1,
            _0: b,
            _1: {
                shouldFocus: !0
            },
            _2: function(a) {
                return {
                    tabId: a.tabId,
                    tabType: {
                        TAG: 1,
                        _0: c
                    },
                    openWatermark: a.openWatermark,
                    minimizeWatermark: a.minimizeWatermark,
                    clientForcedMinimizeWatermark: a.clientForcedMinimizeWatermark,
                    closeWatermark: a.closeWatermark,
                    openFlyoutWatermark: a.openFlyoutWatermark
                }
            }
        }]
    }

    function m(a, b, c) {
        return [{
            TAG: 1,
            _0: a,
            _1: {
                shouldFocus: !1
            },
            _2: function(a) {
                var d = a.tabType;
                if (d.TAG === 0) return a;
                else return {
                    tabId: a.tabId,
                    tabType: {
                        TAG: 1,
                        _0: {
                            threadKey: b,
                            clientThreadKey: c,
                            threadType: d._0.threadType
                        }
                    },
                    openWatermark: a.openWatermark,
                    minimizeWatermark: a.minimizeWatermark,
                    clientForcedMinimizeWatermark: a.clientForcedMinimizeWatermark,
                    closeWatermark: a.closeWatermark,
                    openFlyoutWatermark: a.openFlyoutWatermark
                }
            }
        }]
    }

    function n(a, c, d) {
        var e = function(c) {
                if (b("MWChatStateV2IsClosed.bs").isClosed(c)) return {
                    tabId: c.tabId,
                    tabType: d,
                    openWatermark: a,
                    minimizeWatermark: c.minimizeWatermark,
                    clientForcedMinimizeWatermark: c.clientForcedMinimizeWatermark,
                    closeWatermark: c.closeWatermark,
                    openFlyoutWatermark: c.openFlyoutWatermark
                };
                else if (b("MWChatStateV2IsMinimized.bs").isMinimized(void 0, c)) return {
                    tabId: c.tabId,
                    tabType: d,
                    openWatermark: c.openWatermark,
                    minimizeWatermark: c.minimizeWatermark,
                    clientForcedMinimizeWatermark: c.clientForcedMinimizeWatermark,
                    closeWatermark: c.closeWatermark,
                    openFlyoutWatermark: a
                };
                else return c
            },
            f = function(b) {
                if (a <= b.openWatermark) return b;
                else return {
                    tabId: b.tabId,
                    tabType: d,
                    openWatermark: a,
                    minimizeWatermark: b.minimizeWatermark,
                    clientForcedMinimizeWatermark: b.clientForcedMinimizeWatermark,
                    closeWatermark: b.closeWatermark,
                    openFlyoutWatermark: b.openFlyoutWatermark
                }
            };
        return [{
            TAG: 3,
            _0: d,
            _1: c,
            _2: e,
            _3: f
        }]
    }

    function o(a, b) {
        return [{
            TAG: 2,
            _0: b,
            _1: {
                shouldFocus: !1
            },
            _2: function(b) {
                if (a === b.openFlyoutWatermark) return {
                    tabId: b.tabId,
                    tabType: b.tabType,
                    openWatermark: b.openWatermark,
                    minimizeWatermark: b.minimizeWatermark,
                    clientForcedMinimizeWatermark: b.clientForcedMinimizeWatermark,
                    closeWatermark: b.closeWatermark,
                    openFlyoutWatermark: 0
                };
                else return b
            }
        }]
    }

    function p(a) {
        return [{
            TAG: 0,
            _0: function(b) {
                return {
                    tabs: b.tabs,
                    mediaViewerOpenWatermark: a,
                    focusedTabId: b.focusedTabId,
                    nextTabId: b.nextTabId
                }
            }
        }]
    }
    f.focusTab = a;
    f.blurTab = c;
    f.closeTab = d;
    f.closeTabByThreadKey = e;
    f.openTab = g;
    f.maximizeTab = h;
    f.minimizeTab = i;
    f.forceMinimizeTab = j;
    f.notificationBringHeadToTop = k;
    f.lockInTab = l;
    f.updateThreadKeyDescriptor = m;
    f.openTabOrFlyout = n;
    f.closeFlyout = o;
    f.updateMediaViewerOpenWatermark = p
}), null);
__d("useMWChatOpenTabTraceProvider", ["CometHeroLogging", "ODS", "qpl", "react", "useCometInteractionTracing"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
        i = !1;

    function a() {
        var a = c("useCometInteractionTracing")(c("qpl")._(30605380, "18"), "responsive", "INTERACTION"),
            b = h(function(b, e, f) {
                a(function(a) {
                    var g = c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(a.getTraceId());
                    a.onComplete(function() {
                        d("ODS").bumpEntityKey(3185, "mwchat_tab", "open_user_completed"), a.addMetadata("threadType", e), a.addMetadata("entrypoint", f), i ? a.addMetadata("revisit", 1) : (a.addMetadata("revisit", 0), i = !0)
                    });
                    b(g)
                })
            }, [a]);
        return b
    }
    g["default"] = a
}), 98);
__d("MWChatOpenNewTab.bs", ["LSThreadAttributionStore.bs", "MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs", "MWChatStateActions.bs", "MessengerWebEntryPointsUtil.bs", "MessengerWebEvent", "MessengerWebEventsFalcoEvent.bs", "ODS", "bs_curry", "cr:12115", "react", "useCometFeedNoRoutingNavigationEventLogger", "useMWChatOpenTabTraceProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || b("react");

    function i(a) {
        if (!(b("cr:12115") == null)) return b("bs_curry")._1(b("cr:12115").useDispatch, void 0)
    }

    function a(a) {
        var c = b("useMWChatOpenTabTraceProvider")(),
            d = b("useCometFeedNoRoutingNavigationEventLogger")(),
            e = h.useContext(b("MWChatMultitabContext.bs").context),
            f = i(void 0);
        if (f !== void 0) return function(e) {
            d(Date.now(), "", "messenger");
            b("ODS").bumpEntityKey(3185, "mwchat_tab", "open_new");
            var g = b("MessengerWebEntryPointsUtil.bs").cast(a);
            b("MessengerWebEventsFalcoEvent.bs").log(function() {
                return {
                    entry_point: g,
                    event_name: b("MessengerWebEvent").OPEN_CHAT_TAB
                }
            });
            b("LSThreadAttributionStore.bs").setSourceForNewThread(a);
            return c(function(a) {
                return b("bs_curry")._1(f, b("MWChatStateActions.bs").openTab(Date.now(), {
                    shouldFocus: !0
                }, {
                    TAG: 0,
                    _0: []
                }))
            }, "new_message", g)
        };
        else return h.useCallback(function(f) {
            d(Date.now(), "", "messenger");
            b("ODS").bumpEntityKey(3185, "mwchat_tab", "open_new");
            var g = b("MessengerWebEntryPointsUtil.bs").cast(a);
            b("MessengerWebEventsFalcoEvent.bs").log(function() {
                return {
                    entry_point: g,
                    event_name: b("MessengerWebEvent").OPEN_CHAT_TAB
                }
            });
            b("LSThreadAttributionStore.bs").setSourceForNewThread(a);
            return c(function(a) {
                if (e !== void 0) return b("MWChatMultitabDispatcher.bs").dispatch(void 0, e, {
                    TAG: 0,
                    _0: f
                })
            }, "new_message", g)
        }, [a, e, d, c])
    }
    c = b("cr:12115");
    f.$MWChatStateV2$requireCond = b("cr:12115");
    f.mwChatStateV2 = c;
    f.useDispatch = i;
    f.useHook = a
}), null);
__d("useMWNewChatTabContainerPreload", ["JSResourceForInteraction", "JSScheduler", "react", "useCometPreloader"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
        i = c("JSResourceForInteraction")("MWNewChatTabContainer.bs").__setRef("useMWNewChatTabContainerPreload");

    function a() {
        var a = h(function() {
            d("JSScheduler").scheduleSpeculativeCallback(function() {
                return i.preload()
            })
        }, []);
        a = c("useCometPreloader")("button", a, a);
        var b = a[0];
        a = a[1];
        return [b, a]
    }
    g["default"] = a
}), 98);
__d("MWChatInteraction.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};

    function a(a, b) {
        g[a] = b
    }

    function b(a) {
        return g[a]
    }
    f.interactions = g;
    f.set = a;
    f.get = b
}), null);
__d("MAWGating.bs", ["gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("qex")._("867") === !0
    }

    function c(a) {
        return b("qex")._("366") === !0
    }

    function d(a) {
        return b("qex")._("391") === !0
    }

    function e(a) {
        return b("qex")._("475") === !0
    }

    function g(a) {
        return b("qex")._("84") === !0
    }

    function h(a) {
        return b("qex")._("530") === !0
    }

    function i(a) {
        return b("qex")._("940") === !0
    }

    function j(a) {
        return b("qex")._("447") === !0
    }

    function k(a) {
        return b("qex")._("772") === !0
    }

    function l(a) {
        return b("qex")._("62") === !0
    }

    function m(a) {
        return b("qex")._("932") === !0
    }

    function n(a) {
        return b("qex")._("357") === !0
    }

    function o(a) {
        return b("qex")._("922") === !0
    }

    function p(a) {
        return b("qex")._("222") === !0
    }

    function q(a) {
        return b("qex")._("280") === !0
    }
    var r = b("gkx")("3890");

    function s(a) {
        return b("qex")._("515") === !0
    }

    function t(a) {
        return b("qex")._("151") === !0
    }
    f.isArmadillo = a;
    f.isGifEnabled = c;
    f.isStickerEnabled = d;
    f.wellBeingFeaturesEnabled = e;
    f.isEphemeralMessagesEnabled = g;
    f.isCachedDBEnabled = h;
    f.isDualSend = i;
    f.isForwardEnabled = j;
    f.isVaultingEnabled = k;
    f.isSharedWorkerEnabled = l;
    f.isReportingEnabled = m;
    f.isFeatureLimitEnabled = n;
    f.isReactionsEnabled = o;
    f.isClientTimeoutsEnabled = p;
    f.isUnsendGlobalEnabled = q;
    f.isOccamadillo = r;
    f.isEncryptionAtRestEnabled = s;
    f.isDevserverDeviceEnabled = t
}), null);
__d("MAWGating.re", ["MAWGating.bs"], (function(a, b, c, d, e, f) {
    c = (a = b("MAWGating.bs")).isArmadillo;
    f.isArmadillo = c;
    d = a.isGifEnabled;
    f.isGifEnabled = d;
    e = a.isStickerEnabled;
    f.isStickerEnabled = e;
    b = a.wellBeingFeaturesEnabled;
    f.wellBeingFeaturesEnabled = b;
    c = a.isEphemeralMessagesEnabled;
    f.isEphemeralMessagesEnabled = c;
    d = a.isCachedDBEnabled;
    f.isCachedDBEnabled = d;
    e = a.isDualSend;
    f.isDualSend = e;
    b = a.isForwardEnabled;
    f.isForwardEnabled = b;
    c = a.isVaultingEnabled;
    f.isVaultingEnabled = c;
    d = a.isSharedWorkerEnabled;
    f.isSharedWorkerEnabled = d;
    e = a.isReportingEnabled;
    f.isReportingEnabled = e;
    b = a.isFeatureLimitEnabled;
    f.isFeatureLimitEnabled = b;
    c = a.isReactionsEnabled;
    f.isReactionsEnabled = c;
    d = a.isClientTimeoutsEnabled;
    f.isClientTimeoutsEnabled = d;
    e = a.isOccamadillo;
    f.isOccamadillo = e;
    b = a.isEncryptionAtRestEnabled;
    f.isEncryptionAtRestEnabled = b;
    c = a.isDevserverDeviceEnabled;
    f.isDevserverDeviceEnabled = c
}), null);
__d("bs_int64", ["bs_caml", "bs_caml_format", "bs_caml_int64", "bs_caml_js_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function a(a) {
        return b("bs_caml_int64").sub(a, b("bs_caml_int64").one)
    }

    function c(a) {
        if (b("bs_caml").i64_ge(a, b("bs_caml_int64").zero)) return a;
        else return b("bs_caml_int64").neg(a)
    }

    function d(a) {
        return b("bs_caml_int64").xor(a, b("bs_caml_int64").neg_one)
    }

    function e(a) {
        try {
            return b("bs_caml_format").caml_int64_of_string(a)
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a.RE_EXN_ID === "Failure") return;
            throw a
        }
    }
    var h = (g = b("bs_caml_int64")).compare;

    function i(a, c) {
        return b("bs_caml_int64").compare(a, c) === 0
    }
    var j = g.zero,
        k = g.one,
        l = g.neg_one,
        m = g.succ,
        n = g.max_int,
        o = g.min_int;
    g = g.to_string;
    f.zero = j;
    f.one = k;
    f.minus_one = l;
    f.succ = m;
    f.pred = a;
    f.abs = c;
    f.max_int = n;
    f.min_int = o;
    f.lognot = d;
    f.of_string_opt = e;
    f.to_string = g;
    f.compare = h;
    f.equal = i
}), null);
__d("MWThreadKey.bs", ["bs_int64", "react", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || b("react"),
        i = h.createContext(void 0);

    function a(a) {
        var c = a.id;
        a = a.children;
        var d = b("bs_int64").to_string(c),
            e = h.useMemo(function() {
                return c
            }, [d]),
            f = h.useContext(i);
        if (f !== void 0) return b("unrecoverableViolation")("You can't nest MWThreadKey in another MWThreadKey. This will cause SEVs as things might think they're in the wrong thread", "messenger_web_product");
        else return h.jsx(i.Provider, {
            value: e,
            children: a
        }, d)
    }

    function c(a) {
        return h.useContext(i)
    }

    function d(a) {
        a = h.useContext(i);
        if (a !== void 0) return a;
        else return b("unrecoverableViolation")("Tried to get a thread key when there was none", "messenger_web_product")
    }
    e = a;
    f.make = e;
    f.useIdMemoized = c;
    f.useIdMemoizedExn = d
}), null);
__d("MWThread_DEPRECATED.bs", ["bs_caml_format", "react", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || b("react"),
        i = h.createContext(void 0);

    function a(a) {
        return h.useContext(i)
    }

    function j(a) {
        a = h.useContext(i);
        if (a !== void 0) return a;
        else return b("unrecoverableViolation")("This hook can only be used in a component wrapped with a MWThread provider", "messenger_privacy_web")
    }

    function c(a) {
        return b("bs_caml_format").caml_int64_of_string(a.VAL)
    }

    function d(a) {
        return j(void 0).VAL
    }

    function e(a) {
        return a.VAL
    }

    function k(a) {
        var c = a.id;
        a = a.children;
        var d = h.useContext(i);
        if (d !== void 0) return b("unrecoverableViolation")("You can't nest MWThread in another MWThread_DEPRECATED. This will cause SEVs as things might think they're in the wrong thread", "messenger_web_product");
        else return h.createElement(i.Provider, {
            value: c,
            children: a
        })
    }
    k = k;
    f.context = i;
    f.useId = a;
    f.useIdExn = j;
    f.toThreadKey = c;
    f.useFBID = d;
    f.key = e;
    f.make = k
}), null);
__d("mediaViewerExperimentRoutes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = new Set(["comet.stories.viewer.archive", "comet.stories.viewer", "comet.videos.tahoe", "comet.marketplace.item", "comet.mediaviewer.video", "comet.mediaviewer.photo"]);
    f.ROUTES = a
}), 66);
__d("MWLSThreadDisplayContext.bs", ["react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || b("react"),
        i = h.createContext(void 0);

    function a(a) {
        var b = a.children;
        a = a.value;
        return h.createElement(i.Provider, {
            value: a,
            children: b
        })
    }
    d = {
        make: a
    };

    function c(a) {
        return h.useContext(i)
    }
    f.context = i;
    f.Provider = d;
    f.useHook = c
}), null);
__d("LSDict", ["nativePromiseRegeneratorRuntime", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        a.tag = "ls-array";
        return a
    }

    function i(a) {
        var b = this,
            d = new Map([].concat(a || []).map(function(a) {
                var b = a[0];
                a = a[1];
                return [JSON.stringify(b), a]
            }));
        this.get = function(a) {
            return d.get(JSON.stringify(a))
        };
        this.set = function(a, c) {
            d.set(JSON.stringify(a), c);
            return b
        };
        this["delete"] = function(a) {
            return d["delete"](JSON.stringify(a))
        };
        this.clear = function() {
            return d.clear()
        };
        this.forEach = function(a, c) {
            return d.forEach(function(c, d) {
                return a(c, JSON.parse(d), b)
            }, c)
        };
        this._getSize = function() {
            return d.size
        };
        Object.defineProperties(this, {
            size: {
                get: function() {
                    return d.size
                }
            }
        });
        this.has = function(a) {
            return d.has(JSON.stringify(a))
        };
        this.entries = c("nativePromiseRegeneratorRuntime").mark(function a() {
            var b, e, f, g, h, i, j;
            return c("nativePromiseRegeneratorRuntime").wrap(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        b = d.entries(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    case 1:
                        if (!e) {
                            a.next = 7;
                            break
                        }
                        if (!(f >= b.length)) {
                            a.next = 4;
                            break
                        }
                        return a.abrupt("break", 18);
                    case 4:
                        g = b[f++];
                        a.next = 11;
                        break;
                    case 7:
                        f = b.next();
                        if (!f.done) {
                            a.next = 10;
                            break
                        }
                        return a.abrupt("break", 18);
                    case 10:
                        g = f.value;
                    case 11:
                        h = g;
                        i = h[0];
                        j = h[1];
                        a.next = 16;
                        return [JSON.parse(i), j];
                    case 16:
                        a.next = 1;
                        break;
                    case 18:
                    case "end":
                        return a.stop()
                }
            }, a, this)
        });
        this[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = this.entries;
        this.keys = function() {
            return h(Array.from(d.keys()).map(function(a) {
                return JSON.parse(a)
            }))
        };
        this.values = d.values.bind(d)
    }
    i.fromObject = function(a) {
        return new i(Object.entries(a))
    };
    i.shapeToRecord = function(a) {
        return Array.from(a).reduce(function(a, b) {
            var d = b[0];
            b = b[1];
            if (typeof d !== "string") throw c("unrecoverableViolation")("Cannot convert dicts with mixed keys to records", "messenger_web_product");
            return babelHelpers["extends"]({}, a, (a = {}, a[d] = b, a))
        }, {})
    };
    g["default"] = i
}), 98);
__d("LSJson", ["LSDict", "bs_caml_int64", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 512;

    function i(a, b) {
        b === void 0 && (b = 0);
        if (b > h) throw c("unrecoverableViolation")("recursion limit exceeded", "messenger_comet");
        if (typeof a === "string" || typeof a === "number" || typeof a === "boolean") return JSON.stringify(a);
        else if (a === void 0) return "null";
        else if (typeof a === "object")
            if (Array.isArray(a)) return a.tag === "ls-array" ? "[" + a.map(function(a) {
                return i(a, b + 1)
            }).join(",") + "]" : d("bs_caml_int64").to_string(a);
            else if (a instanceof c("LSDict")) return "{" + Array.from(a.entries()).map(function(a) {
            var d = a[0];
            a = a[1];
            if (typeof d === "string") return JSON.stringify(d) + ":" + i(a, b + 1);
            else throw c("unrecoverableViolation")("key must be a string", "messenger_comet")
        }).join(",") + "}";
        throw c("unrecoverableViolation")("type not supported: %s" + typeof a, "messenger_comet")
    }
    g.stringify = i
}), 98);
__d("Actor.re", ["Actor"], (function(a, b, c, d, e, f) {
    a = b("Actor").useActor;
    f.useActorTypeChecked = a;
    c = a;
    f.useActor = c
}), null);
__d("MWLSActor.bs", ["Actor.re", "bs_caml_format", "bs_int64", "react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || b("react"),
        i = h.createContext(void 0);

    function a(a) {
        var c = h.useContext(i);
        a = b("Actor.re").useActor();
        var d = a[0],
            e = h.useMemo(function() {
                return b("bs_caml_format").caml_int64_of_string(d)
            }, [d]);
        return h.useMemo(function() {
            if (c !== void 0) return c;
            else return e
        }, [e, c])
    }

    function c(a) {
        var c = a.actorId;
        a = a.children;
        if (c !== void 0) return h.jsx(i.Provider, {
            value: c,
            children: a
        }, b("bs_int64").to_string(c));
        else return a
    }
    d = c;
    f.useActor = a;
    f.make = d
}), null);
__d("LSTransaction.bs", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        return a.runInTransaction(b, function() {
            switch (c) {
                case "readOnly":
                    return "readonly";
                case "readWrite":
                    return "readwrite"
            }
        }())
    }
    f.run = a
}), null);
__d("ReQLTable.bs", ["bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";
    c = {};
    d = {};

    function a(a, c, d) {
        return a.get(c).then(function(e) {
            return a.upsert(c, b("bs_curry")._1(d, e))
        })
    }
    f.Direction = c;
    f.Index = d;
    f.update = a
}), null);
__d("LSClearEpochBeforeResumeSync.bs", ["LSTransaction.bs", "Promise", "ReQL.bs", "ReQLTable", "bs_caml_int64", "gkx", "killswitch"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (!b("killswitch")("MESSENGER_WEB_PERSISTED_DB") && b("gkx")("3174")) return b("LSTransaction.bs").run(a, function(a) {
            return b("ReQL.bs").toArray(b("ReQL.bs").mergeJoin(b("ReQLTable").table(a, "sync_groups").asc, b("ReQL.bs").getKeyRange(b("ReQLTable").table(a, "network_requests").asc, {
                hd: "",
                tl: 0
            }))).then(function(c) {
                return b("Promise").all(c.map(function(c) {
                    var d = c[1];
                    c = c[0].b;
                    if (c !== void 0) return b("ReQLTable").table(a, "network_requests").put({
                        a: d.a,
                        b: d.b,
                        c: void 0,
                        d: d.d,
                        e: d.e,
                        f: d.f,
                        g: d.g,
                        h: d.h
                    });
                    else return window.Promise.resolve(void 0)
                }))
            }).then(function(c) {
                return b("ReQL.bs").toArray(b("ReQL.bs").bounds(b("ReQLTable").table(a, "network_requests").asc, {
                    NAME: "range",
                    VAL: [{
                        NAME: "greaterThanOrEqual",
                        VAL: {
                            hd: "",
                            tl: {
                                hd: b("bs_caml_int64").neg_one,
                                tl: 0
                            }
                        }
                    }, {
                        NAME: "lessThanOrEqual",
                        VAL: {
                            hd: "\ud869\udea5",
                            tl: {
                                hd: b("bs_caml_int64").neg_one,
                                tl: 0
                            }
                        }
                    }]
                })).then(function(c) {
                    return b("Promise").all(c.map(function(c) {
                        return b("ReQLTable").table(a, "network_requests").put({
                            a: c.a,
                            b: c.b,
                            c: void 0,
                            d: c.d,
                            e: c.e,
                            f: c.f,
                            g: c.g,
                            h: c.h
                        })
                    }))
                })
            })
        }, "readWrite").then(function(a) {
            return b("Promise").resolve(void 0)
        });
        else return b("Promise").resolve(void 0)
    }
    f.call = a
}), null);
__d("LSRequestType.bs", ["bs_caml_int64"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").one;
    c = [0, 2];
    d = [0, 3];
    e = [0, 4];
    f.initSync = a;
    f.resumeSync = c;
    f.taskBatch = d;
    f.fireForget = e
}), null);
__d("LSPlatformRealtimeTransport.bs", ["LSDict", "LSJson", "LSRequestType.bs", "Promise", "bs_caml", "bs_caml_exceptions", "bs_curry", "clearTimeout", "promiseDone", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("bs_caml_exceptions").create("LSPlatformRealtimeTransport.NotConnected"),
        h = b("bs_caml_exceptions").create("LSPlatformRealtimeTransport.Timeout");

    function a(a) {
        return function(a) {}
    }

    function c(a) {
        return function(a) {}
    }

    function d(a, c, d) {
        return b("Promise").resolve(void 0)
    }

    function e() {}
    a = {
        subscribe: a,
        onReconnect: c,
        publish: d,
        cleanup: e
    };

    function i(a, c) {
        var d = new Map(),
            e = function(e, f, i, j) {
                return new(b("Promise"))(function(k, l) {
                    if (b("bs_caml").i64_eq(i, b("LSRequestType.bs").taskBatch)) {
                        var m = b("setTimeout")(function(a) {
                            return l({
                                RE_EXN_ID: h
                            })
                        }, 3e4);
                        d.set(f, {
                            timestamp: Date.now(),
                            queueName: e,
                            timeoutId: m,
                            resolve: k,
                            reject: l
                        })
                    }
                    b("promiseDone")(b("bs_curry")._3(a.publish, "/ls_req", b("LSJson").stringify(b("LSDict").fromObject({
                        request_id: f,
                        type: i,
                        payload: j,
                        app_id: c
                    })), {
                        qos: b("bs_caml").i64_eq(i, b("LSRequestType.bs").fireForget) ? 0 : 1,
                        skipBuffer: !1,
                        listener: {
                            onEvent: function(a) {
                                if (a === "NOT_CONNECTED") return l({
                                    RE_EXN_ID: g
                                })
                            }
                        }
                    }), function(a) {
                        if (b("bs_caml").i64_neq(i, b("LSRequestType.bs").taskBatch)) return k(0)
                    }, function(a) {
                        return l(a)
                    })
                })
            },
            f = new Map(),
            i = function(a) {
                var b = {};
                f.set(b, a);
                return function(a) {
                    f["delete"](b)
                }
            },
            j = a.subscribe(function(a) {
                var c = JSON.parse(a);
                a = c.request_id;
                var e;
                if (a !== void 0) {
                    a = d.get(a);
                    a == null ? e = !1 : (b("clearTimeout")(a.timeoutId), a.resolve({
                        _0: c
                    }), e = !0)
                } else e = !1;
                if (!e) {
                    Array.from(f.entries()).forEach(function(a) {
                        return a[1](c)
                    });
                    return
                }
            });
        return {
            subscribeToNonTaskResponses: i,
            onReconnect: a.onReconnect,
            publish: e,
            cleanup: function() {
                b("bs_curry")._1(j, void 0);
                return a.cleanup()
            }
        }
    }
    f.NotConnected = g;
    f.Timeout = h;
    f.defaultUnderlyingApi = a;
    f.make = i
}), null);
__d("LSVersion.bs", ["MessengerWebSyncScripts", "cr:394"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("MessengerWebSyncScripts").schemaVersionV2;
    c = a == null ? b("cr:394").version : a;
    f.$LSSecureVersion$OR$LSOpenVersion$requireCondXplat = b("cr:394");
    f.version = c
}), null);
__d("bs_js_json", ["bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = typeof a;
        if (b === "string") return {
            TAG: 0,
            _0: a
        };
        else if (b === "number") return {
            TAG: 1,
            _0: a
        };
        else if (b === "boolean")
            if (a === !0) return 1;
            else return 0;
        else if (a === null) return 2;
        else if (Array.isArray(a)) return {
            TAG: 3,
            _0: a
        };
        else return {
            TAG: 2,
            _0: a
        }
    }

    function c(a, b) {
        switch (b) {
            case 0:
                return typeof a === "string";
            case 1:
                return typeof a === "number";
            case 2:
                if (a !== null && typeof a === "object") return !Array.isArray(a);
                else return !1;
            case 3:
                return Array.isArray(a);
            case 4:
                return typeof a === "boolean";
            case 5:
                return a === null
        }
    }

    function d(a) {
        if (typeof a === "string") return a
    }

    function e(a) {
        if (typeof a === "number") return a
    }

    function g(a) {
        if (typeof a === "object" && !Array.isArray(a) && a !== null) return b("bs_caml_option").some(a)
    }

    function h(a) {
        if (Array.isArray(a)) return a
    }

    function i(a) {
        if (typeof a === "boolean") return a
    }

    function j(a) {
        if (a === null) return null
    }
    var k = function(a) {
        a = [a];
        var b = [{
            kind: 0,
            i: 0,
            parent: a
        }];
        while (b.length !== 0) {
            var c = b[b.length - 1];
            c.kind === 0 ? (c.val = c.parent[c.i], ++c.i === c.parent.length && b.pop()) : b.pop();
            var d = c.val;
            if (typeof d === "object")
                if (Array.isArray(d) && d.length !== 0) b.push({
                    kind: 0,
                    i: 0,
                    parent: d,
                    val: void 0
                });
                else
                    for (var e in d) {
                        if (e === "RE_PRIVATE_NONE") {
                            c.kind === 0 ? c.parent[c.i - 1] = void 0 : c.parent[c.i] = void 0;
                            continue
                        }
                        b.push({
                            kind: 1,
                            i: e,
                            parent: d,
                            val: d[e]
                        })
                    }
        }
        return a[0]
    };

    function l(a) {
        return function(a) {
            a = JSON.stringify(a, function(a, b) {
                return b === void 0 ? {
                    RE_PRIVATE_NONE: !0
                } : b
            });
            if (a === void 0) throw new TypeError("output is undefined");
            return a
        }(a)
    }

    function m(a) {
        return k(JSON.parse(a))
    }
    f.classify = a;
    f.test = c;
    f.decodeString = d;
    f.decodeNumber = e;
    f.decodeObject = g;
    f.decodeArray = h;
    f.decodeBoolean = i;
    f.decodeNull = j;
    f.deserializeUnsafe = m;
    f.serializeExn = l
}), null);
__d("LSCookie.bs", ["Cookie", "LSVersion.bs", "MqttWebDeviceID", "Promise", "bs_belt_Option", "bs_js_dict", "bs_js_json", "gkx", "killswitch", "promiseDone", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "m_ls";
    c = {};
    var h = {
            d: b("MqttWebDeviceID").clientID,
            s: b("LSVersion.bs").version,
            c: c
        },
        i = {
            contents: void 0
        };

    function j(a) {
        if (!(!b("killswitch")("MESSENGER_WEB_PERSISTED_DB") && b("gkx")("3174"))) return b("Promise").resolve(i.contents);
        var c = JSON.stringify(a);
        if (c !== void 0) try {
            return cookieStore.set(g, encodeURIComponent(c), {
                domain: window.location.hostname
            }).then(function(c) {
                i.contents = a;
                return b("Promise").resolve(i.contents)
            })
        } catch (d) {
            b("Cookie").set(g, c);
            i.contents = a;
            return b("Promise").resolve(i.contents)
        } else {
            b("recoverableViolation")("Failed to serialize Cookie", "messenger");
            return b("Promise").resolve(i.contents)
        }
    }

    function a(a) {
        if (!(!b("killswitch")("MESSENGER_WEB_PERSISTED_DB") && b("gkx")("3174"))) return h;
        a = i.contents;
        if (a !== void 0) return a;
        else {
            a = b("Cookie").get("m_ls");
            if (a !== void 0) try {
                a = b("bs_belt_Option").getExn(b("bs_js_json").decodeObject(JSON.parse(a)));
                var c = b("bs_belt_Option").getExn(b("bs_js_json").decodeString(b("bs_belt_Option").getExn(b("bs_js_dict").get(a, "d"))));
                c = c !== "" ? c : void 0;
                var d = b("bs_belt_Option").getWithDefault(c, b("MqttWebDeviceID").clientID);
                a = b("bs_js_dict").fromArray(b("bs_js_dict").entries(b("bs_belt_Option").getExn(b("bs_js_json").decodeObject(b("bs_belt_Option").getExn(b("bs_js_dict").get(a, "c"))))).map(function(a) {
                    return [a[0], b("bs_belt_Option").getExn(b("bs_js_json").decodeString(a[1]))]
                }));
                d = {
                    d: d,
                    s: b("LSVersion.bs").version,
                    c: a
                };
                if (c !== void 0) i.contents = d;
                else {
                    a = j(d);
                    b("promiseDone")(a, void 0, void 0)
                }
                return d
            } catch (a) {
                c = j(h);
                b("promiseDone")(c, void 0, void 0);
                return h
            } else {
                a = j(h);
                b("promiseDone")(a, void 0, void 0);
                return h
            }
        }
    }
    f.cookie = i;
    f.writeCookie = j;
    f.get = a
}), null);
__d("cometTypeaheadMouseUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a != null && (a.ctrlKey || a.metaKey || a.shiftKey)
    }
    f.hasModifierKeyPressed = a
}), 66);
__d("CometInternalTypeaheadFetchContext", ["emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        fetch: c("emptyFunction"),
        isLoading: !1,
        refetch: c("emptyFunction"),
        source: "all"
    });
    g["default"] = b
}), 98);
__d("useCometInternalTypeaheadFetch", ["CometInternalTypeaheadFetchContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometInternalTypeaheadFetchContext"))
    }
    g["default"] = a
}), 98);
__d("CometInternalTypeaheadStateContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        activeEntries: [],
        highlightedEntry: null,
        highlightedEntrySource: null,
        isOpened: !1
    });
    g["default"] = b
}), 98);
__d("useCometInternalTypeaheadState", ["CometInternalTypeaheadStateContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometInternalTypeaheadStateContext"))
    }
    g["default"] = a
}), 98);
__d("useCometInternalTypeaheadFetchHandler", ["react", "useCometInternalTypeaheadFetch", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect;

    function a(a) {
        var b = a.loggingProvider,
            d = a.queryString,
            e = a.traceProvider;
        a = c("useCometInternalTypeaheadState")();
        var f = a.activeEntries,
            g = a.isOpened;
        a = c("useCometInternalTypeaheadFetch")();
        var j = a.fetch;
        a = h(function() {
            function a(a, c) {
                var d = null;
                b != null && (d = b.addEvent({
                    action: "keystroke",
                    entries: f,
                    queryString: a
                }, "useCometInternalTypeaheadFetchHandler"));
                d = d != null ? {
                    loggingEventTrace: d,
                    perfTraceAPI: c,
                    query: a
                } : {
                    perfTraceAPI: c,
                    query: a
                };
                j(d)
            }
            var c = d.trimLeft();
            if (!g) return;
            e ? e.trace(function(b) {
                return a(c, b)
            }, c) : a(c)
        }, [f, j, g, b, d, e]);
        i(a, [g, d])
    }
    g["default"] = a
}), 98);
__d("useCometInternalTypeaheadOnAbandonLoggingHandler", ["react", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.callback,
            d = a.loggingProvider,
            e = a.queryString;
        a = c("useCometInternalTypeaheadState")();
        var f = a.activeEntries;
        return h(function() {
            d != null && d.isSessionActive() && (d.addEvent({
                action: "abandon",
                entries: f,
                queryString: e
            }, "useCometInternalTypeaheadOnAbandonLoggingHandler"), d.endSession()), b && b()
        }, [f, d, b, e])
    }
    g["default"] = a
}), 98);
__d("useCometInternalTypeaheadOnEnterLoggingHandler", ["react", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.loggingProvider,
            d = a.onEnter,
            e = a.queryString;
        a = c("useCometInternalTypeaheadState")();
        var f = a.activeEntries,
            g = a.highlightedEntry;
        return h(function() {
            g != null && (b && b.addEvent({
                action: "click",
                entries: f,
                entry: g,
                queryString: e
            }, "useCometInternalTypeaheadOnEnterLoggingHandler:without_highlightedEntry")), g == null && (b && b.addEvent({
                action: "enter",
                entries: f,
                queryString: e
            }, "useCometInternalTypeaheadOnEnterLoggingHandler:with_highlightedEntry")), b && b.endSession(), d && d()
        }, [f, g, b, d, e])
    }
    g["default"] = a
}), 98);
__d("useCometInternalTypeaheadOnFocusLoggingHandler", ["react", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.loggingProvider,
            d = a.onFocus,
            e = a.queryString;
        a = c("useCometInternalTypeaheadState")();
        var f = a.activeEntries;
        return h(function() {
            b != null && (b.startSession(), b.addEvent({
                action: "typeahead_appeared",
                entries: f,
                queryString: e
            }, "useCometInternalTypeaheadOnFocusLoggingHandler")), d && d()
        }, [f, b, d, e])
    }
    g["default"] = a
}), 98);
__d("useCometInternalTypeaheadOnPressEntryLoggingHandler", ["react", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.loggingProvider,
            d = a.onPressEntry,
            e = a.queryString;
        a = c("useCometInternalTypeaheadState")();
        var f = a.activeEntries;
        return h(function(a, c) {
            b != null && (b.addEvent({
                action: "click",
                entries: f,
                entry: a,
                queryString: e
            }, "useCometInternalTypeaheadOnPressEntryLoggingHandler"), b.endSession()), d && d(a, c)
        }, [f, b, d, e])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadInputRefs", ["mergeRefs", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useMemo,
        i = b.useRef;

    function a(a) {
        var b = i(null),
            d = h(function() {
                return c("mergeRefs")(b, a)
            }, [b, a]);
        return {
            composedRef: d,
            inputRef: b
        }
    }
    g["default"] = a
}), 98);
__d("CometInternalTypeahead.react", ["cometTypeaheadMouseUtils", "emptyFunction", "react", "useCometInternalTypeaheadFetchHandler", "useCometInternalTypeaheadOnAbandonLoggingHandler", "useCometInternalTypeaheadOnEnterLoggingHandler", "useCometInternalTypeaheadOnFocusLoggingHandler", "useCometInternalTypeaheadOnPressEntryLoggingHandler", "useCometInternalTypeaheadState", "useCometTypeaheadInputRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useCallback;

    function a(a, b) {
        var e = a.layoutStrategyRenderer,
            f = a.loggingProvider,
            g = a.onEnter,
            j = a.onFocus,
            k = a.onPressEntry,
            l = a.onSelectFreeformQuery,
            m = a.onShiftTab,
            n = a.onTab,
            o = a.queryString,
            p = a.traceProvider;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["layoutStrategyRenderer", "loggingProvider", "onEnter", "onFocus", "onPressEntry", "onSelectFreeformQuery", "onShiftTab", "onTab", "queryString", "traceProvider"]);
        b = c("useCometTypeaheadInputRefs")(b);
        var q = b.composedRef,
            r = b.inputRef;
        b = c("useCometInternalTypeaheadState")();
        var s = b.highlightedEntry;
        c("useCometInternalTypeaheadFetchHandler")({
            loggingProvider: f,
            queryString: o,
            traceProvider: p
        });
        b = c("useCometInternalTypeaheadOnEnterLoggingHandler")({
            loggingProvider: f,
            onEnter: i(function() {
                s != null ? k && k(s) : l && l(o), g && g()
            }, [s, g, k, l, o]),
            queryString: o
        });
        j = c("useCometInternalTypeaheadOnFocusLoggingHandler")({
            loggingProvider: f,
            onFocus: j,
            queryString: o
        });
        var t = c("useCometInternalTypeaheadOnPressEntryLoggingHandler")({
            loggingProvider: f,
            onPressEntry: i(function(a, b) {
                if (d("cometTypeaheadMouseUtils").hasModifierKeyPressed(b)) {
                    r.current && r.current.focus();
                    return
                }
                k && k(a)
            }, [r, k]),
            queryString: o
        });
        m = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
            callback: m,
            loggingProvider: f,
            queryString: o
        });
        n = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
            callback: n,
            loggingProvider: f,
            queryString: o
        });
        var u = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
            callback: c("emptyFunction"),
            loggingProvider: f,
            queryString: o
        });
        f = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
            callback: c("emptyFunction"),
            loggingProvider: f,
            queryString: o
        });
        return h.jsx(e, babelHelpers["extends"]({}, a, {
            onAbandonTypeahead_DO_NOT_USE: f,
            onClick: c("emptyFunction"),
            onEnter: b,
            onFocus: j,
            onHighlightEntry: a.onHighlightEntry,
            onOutsideClick: u,
            onPressEntry: t,
            onShiftTab: m,
            onTab: n,
            queryString: o,
            ref: q,
            traceProvider: p,
            xstyles: a.xstyles
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometInternalTypeaheadStateDispatcherContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("useCometInternalTypeaheadStateDispatcher", ["CometInternalTypeaheadStateDispatcherContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometInternalTypeaheadStateDispatcherContext"))
    }
    g["default"] = a
}), 98);
__d("cometTypeaheadODSLogFetchCacheEvent", ["requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("ODS").__setRef("cometTypeaheadODSLogFetchCacheEvent");

    function a(a, b, c) {
        b === void 0 && (b = !0);
        c === void 0 && (c = 1);
        if (!b) return;
        h.onReady(function(b) {
            b.bumpEntityKey(354, a, "fetched-cache", c)
        })
    }
    g["default"] = a
}), 98);
__d("cometTypeaheadODSLogFetchNetworkEvent", ["requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("ODS").__setRef("cometTypeaheadODSLogFetchNetworkEvent");

    function a(a, b, c) {
        b === void 0 && (b = !0);
        c === void 0 && (c = 1);
        if (!b) return;
        h.onReady(function(b) {
            b.bumpEntityKey(354, a, "fetched-network", c)
        })
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadDataSourceFetchResolverCache", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.dataSource;
        return h(function(a) {
            var c = a.onResolvePayload;
            a = a.requestParams;
            var d = a.perfTraceAPI;
            a = b.fetchCache(a);
            d && d.addMarkerPoint("cachedResponse", "AppTiming");
            c(a);
            return a
        }, [b])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadDataSourceFetchResolverNetwork", ["promiseDone", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect,
        j = b.useRef,
        k = b.useState;

    function a(a) {
        var b = a.dataSource;
        a = k(!1);
        var d = a[0],
            e = a[1],
            f = j(0),
            g = j(!1);
        i(function() {
            g.current = !1;
            return function() {
                g.current = !0
            }
        }, []);
        a = h(function(a) {
            var d = a.onResolvePayload;
            a = a.requestParams;
            f.current++;
            var h = f.current,
                i = a.perfTraceAPI;
            e(!0);
            c("promiseDone")(b.fetchNetwork(a).then(function(a) {
                !g.current && h === f.current && (d(a), i && i.addMarkerPoint("networkResponse", "AppTiming"))
            })["finally"](function() {
                !g.current && h === f.current && (f.current = 0, e(!1))
            }))
        }, [b]);
        return [{
            isLoading: d
        }, a]
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadDataSourceFetchResolver", ["cometTypeaheadODSLogFetchCacheEvent", "cometTypeaheadODSLogFetchNetworkEvent", "cr:1846070", "gkx", "react", "recoverableViolation", "useCometTypeaheadDataSourceFetchResolverCache", "useCometTypeaheadDataSourceFetchResolverNetwork", "useDebounced"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useEffect,
        i = e.useRef,
        j = 8;

    function a(a, d) {
        var e = a.dataSource,
            f = a.dataSourceFetchConfigParams;
        f = f === void 0 ? {} : f;
        var g = f.renderLimit,
            k = g === void 0 ? j : g;
        g = f.shouldDebounceNetwork;
        var l = g === void 0 ? !0 : g;
        g = f.requestFlow;
        var m = a.onResolvePayload,
            n = i(g),
            o = c("useCometTypeaheadDataSourceFetchResolverCache")({
                dataSource: e
            });
        f = c("useCometTypeaheadDataSourceFetchResolverNetwork")({
            dataSource: e
        });
        a = f[0].isLoading;
        var p = f[1],
            q = c("useDebounced")(p);

        function r() {
            var a = !1;

            function f(b, d) {
                var e = d.isTraceComplete;
                d = d.source;
                try {
                    a || m(b, {
                        isTraceComplete: e,
                        source: d
                    })
                } catch (b) {
                    a || c("recoverableViolation")("Failed to resolve fetched payload", "search")
                }
            }

            function g(a) {
                var d = a.requestParams,
                    g = a.source;
                a = d.requestFlow;
                a != null && (n.current = a);
                if (typeof e.fetchCache === "function" && ["all", "cache"].includes(g)) {
                    a = o({
                        onResolvePayload: function(a) {
                            f(a, {
                                isTraceComplete: a.entries.length >= k,
                                source: "cache"
                            });
                            c("cometTypeaheadODSLogFetchCacheEvent") && c("cometTypeaheadODSLogFetchCacheEvent")("comet.ta.fetch", !0, 1);
                            if (c("gkx")("1265894")) {
                                var d = g === "all" ? ["all", "cache"] : ["cache"];
                                b("cr:1846070") && b("cr:1846070")(d, a)
                            }
                        },
                        requestParams: d
                    });
                    a = a;
                    a = a.entries;
                    if (a.length >= k) return
                }
                if (typeof e.fetchNetwork === "function" && ["all", "network"].includes(g)) {
                    a = {
                        onResolvePayload: function(a) {
                            f(a, {
                                isTraceComplete: !0,
                                source: a.entries.length > 0 ? "network" : "network-no-results"
                            });
                            c("cometTypeaheadODSLogFetchNetworkEvent") && c("cometTypeaheadODSLogFetchNetworkEvent")("comet.ta.fetch", !0, 1);
                            if (c("gkx")("1265894")) {
                                var d = g === "all" ? ["all", "network"] : ["network"];
                                b("cr:1846070") && b("cr:1846070")(d, a)
                            }
                        },
                        requestParams: babelHelpers["extends"]({}, d, {
                            requestFlow: n.current
                        })
                    };
                    Boolean(l) ? q(a) : p(a)
                }
            }
            d != null && g(d);
            return function() {
                a = !0
            }
        }
        h(r, [d]);
        return [{
            isLoading: a
        }]
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadDataSourceFetch", ["react", "recoverableViolation", "useCometTypeaheadDataSourceFetchResolver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useState;

    function a(a) {
        var b = i(null),
            d = b[0],
            e = b[1];
        b = c("useCometTypeaheadDataSourceFetchResolver")(a, d);
        a = b[0].isLoading;
        var f = h(function(a, b) {
            b === void 0 && (b = "all"), e({
                requestParams: a,
                source: b
            })
        }, []);
        b = h(function(a) {
            a = a || {};
            var b = a.requestFlow;
            a = a.source;
            if (d == null) {
                c("recoverableViolation")("Refetch cannot be called with undefined `fetchParams`", "search");
                return
            }
            var e = d.requestParams,
                g = e.loggingEventTrace;
            e = babelHelpers.objectWithoutPropertiesLoose(e, ["loggingEventTrace"]);
            g = babelHelpers["extends"]({
                loggingEventTrace: babelHelpers["extends"]({}, g, {
                    sequenceID: String(Date.now())
                }),
                requestFlow: b
            }, e);
            f(g, a)
        }, [f, d]);
        return [{
            isLoading: a,
            source: (a = d == null ? void 0 : d.source) != null ? a : "all"
        }, f, b]
    }
    g["default"] = a
}), 98);
__d("TypeaheadLoggingFetchRequestFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1880031");
    c = b("FalcoLoggerInternal").create("typeahead_logging_fetch_request", a);
    e.exports = c
}), null);
__d("CometTypeaheadVolumeLoggingProvider", ["TypeaheadLoggingFetchRequestFalcoEvent", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        return Math.random().toString()
    };
    a = function() {
        function a(a) {
            this.$2 = null, this.$1 = a, this.$2 = h()
        }
        var b = a.prototype;
        b.getContext = function() {
            return this.$1
        };
        b.getSessionID = function() {
            this.$2 == null && c("recoverableViolation")("Logging sessionID requested from " + this.getContext() + " surface does not exist.", "search");
            return this.$2
        };
        b.logRequest = function(a) {
            var b = {
                context: this.getContext(),
                requestType: a,
                sessionID: this.getSessionID()
            };
            c("TypeaheadLoggingFetchRequestFalcoEvent").log(function() {
                return {
                    fetchRequest: b
                }
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("useCometTypeaheadVolumeLoggingProvider", ["CometTypeaheadVolumeLoggingProvider", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;

    function a(a) {
        a === void 0 && (a = "UNKNOWN");
        return h(function() {
            return new(c("CometTypeaheadVolumeLoggingProvider"))(a)
        }, [a])
    }
    g["default"] = a
}), 98);
__d("CometInternalTypeaheadFetchProvider", ["CometInternalTypeaheadFetchContext", "orEmptyArray", "react", "useCometInternalTypeaheadStateDispatcher", "useCometTypeaheadDataSourceFetch", "useCometTypeaheadVolumeLoggingProvider"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useMemo;

    function a(a) {
        var b = a.children,
            d = a.dataSource,
            e = a.dataSourceFetchConfigParams,
            f = a.loggingContext,
            g = a.onFetchEntries_DO_NOT_USE,
            k = a.traceProvider;
        a = c("useCometInternalTypeaheadStateDispatcher")();
        var l = a.dispatchActiveEntries,
            m = c("useCometTypeaheadVolumeLoggingProvider")(f);
        a = c("useCometTypeaheadDataSourceFetch")({
            dataSource: d,
            dataSourceFetchConfigParams: e,
            onResolvePayload: i(function(a, b) {
                a = a.entries;
                var d = b.isTraceComplete;
                b = b.source;
                l(c("orEmptyArray")(a));
                m.logRequest(o);
                g && g(a);
                k && !k.isResolved() && (d && (b === "cache" && a.length >= k.getEntriesCountForVisualComplete() ? k.setEndReason("max_suggestions_reached") : b === "network" ? k.setEndReason("all_queries_completed") : b === "network-no-results" && k.setEndReason("all_queries_completed_no_network_results"), k.resolve()))
            }, [l, g, k])
        });
        f = a[0];
        var n = f.isLoading,
            o = f.source,
            p = a[1],
            q = a[2];
        d = j(function() {
            return {
                fetch: p,
                isLoading: n,
                refetch: q,
                source: o
            }
        }, [p, n, q, o]);
        return h.jsx(c("CometInternalTypeaheadFetchContext").Provider, {
            value: d,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometInternalTypeaheadStateProvider", ["CometInternalTypeaheadStateContext", "CometInternalTypeaheadStateDispatcherContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useEffect,
        k = b.useMemo,
        l = b.useRef,
        m = b.useState,
        n = [];

    function a(a) {
        var b = a.children,
            d = a.emptyEntries_DO_NOT_USE,
            e = d === void 0 ? n : d,
            f = a.onClose,
            g = a.onOpen;
        d = m(!1);
        var o = d[0],
            p = d[1];
        a = m(null);
        var q = a[0],
            r = a[1];
        d = m(null);
        var s = d[0],
            t = d[1];
        a = m(e);
        var u = a[0],
            v = a[1],
            w = l(e);
        j(function() {
            if (w.current === e) return;
            w.current = e;
            v(function(a) {
                return a.length ? a : e
            })
        }, [v, w, e]);
        var x = i(function(a) {
                v(function(b) {
                    b = Array.isArray(a) ? a : a(b);
                    return b.length > 0 ? b : w.current
                })
            }, [v, w]),
            y = i(function(a) {
                var b = a.entry;
                a = a.source;
                r(b);
                t(a)
            }, []),
            z = i(function(a) {
                if (a === o) return;
                p(a);
                a ? g && g() : f && f()
            }, [o, f, g]);
        d = k(function() {
            return {
                dispatchActiveEntries: x,
                dispatchHighlightedEntry: y,
                dispatchIsOpened: z
            }
        }, [x, y, z]);
        a = k(function() {
            return {
                activeEntries: u,
                highlightedEntry: q,
                highlightedEntrySource: s,
                isOpened: o
            }
        }, [u, q, s, o]);
        return h.jsx(c("CometInternalTypeaheadStateDispatcherContext").Provider, {
            value: d,
            children: h.jsx(c("CometInternalTypeaheadStateContext").Provider, {
                value: a,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry", ["react", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        var d = b.shouldQueryStringFollowHighlightedEntry;
        return h.forwardRef(function(b, e) {
            var f = b.queryString;
            b = babelHelpers.objectWithoutPropertiesLoose(b, ["queryString"]);
            var g = c("useCometInternalTypeaheadState")(),
                i = g.highlightedEntry;
            g = g.highlightedEntrySource;
            g = d && g === "keyboard" && i != null ? i.getLabel() : f;
            return h.jsx(a, babelHelpers["extends"]({}, b, {
                queryString: g,
                ref: e
            }))
        })
    }
    g["default"] = a
}), 98);
__d("BaseTypeahead.react", ["CometHeroInteractionContextPassthrough.react", "CometInternalTypeahead.react", "CometInternalTypeaheadFetchProvider", "CometInternalTypeaheadStateProvider", "emptyFunction", "react", "useCometUniqueID", "withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useMemo;

    function a(a, b) {
        var d = a.autoFocus;
        d = d === void 0 ? !1 : d;
        var e = a.inputStrategyRenderer,
            f = a.dataSource,
            g = a.dataSourceFetchConfigParams,
            k = a.decorators,
            l = k === void 0 ? [] : k;
        k = a.emptyEntries_DO_NOT_USE;
        var m = a.id,
            n = a.isDisabled;
        n = n === void 0 ? !1 : n;
        var o = a.label;
        o = o === void 0 ? "" : o;
        var p = a.loggingContext,
            q = a.onBackspace;
        q = q === void 0 ? c("emptyFunction") : q;
        var r = a.onBlur;
        r = r === void 0 ? c("emptyFunction") : r;
        var s = a.onChange,
            t = a.onClose,
            u = a.onEnter;
        u = u === void 0 ? c("emptyFunction") : u;
        var v = a.onEscape;
        v = v === void 0 ? c("emptyFunction") : v;
        var w = a.onFetchEntries_DO_NOT_USE,
            x = a.onFocus;
        x = x === void 0 ? c("emptyFunction") : x;
        var y = a.onOpen,
            z = a.onPressEntry,
            A = a.placeholder;
        A = A === void 0 ? "" : A;
        var B = a.shouldQueryStringFollowHighlightedEntry,
            C = B === void 0 ? !0 : B;
        B = a.shouldQueryStringUpdateFromSelectedEntryOnClick;
        var D = B === void 0 ? !0 : B;
        B = a.testid;
        B = B === void 0 ? "" : B;
        B = a.traceProvider;
        var E = a.viewRole;
        E = E === void 0 ? "listbox" : E;
        var F = a.viewStrategyRenderer;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["autoFocus", "inputStrategyRenderer", "dataSource", "dataSourceFetchConfigParams", "decorators", "emptyEntries_DO_NOT_USE", "id", "isDisabled", "label", "loggingContext", "onBackspace", "onBlur", "onChange", "onClose", "onEnter", "onEscape", "onFetchEntries_DO_NOT_USE", "onFocus", "onOpen", "onPressEntry", "placeholder", "shouldQueryStringFollowHighlightedEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick", "testid", "traceProvider", "viewRole", "viewStrategyRenderer"]);
        var G = c("useCometUniqueID")(),
            H = j(function() {
                var a = c("CometInternalTypeahead.react");
                l.forEach(function(b) {
                    var c = b.decorate;
                    b = b.params;
                    a = c(a, b)
                });
                return a
            }, [l]),
            I = i(function(a) {
                D && s(a.getLabel()), z && z(a)
            }, [s, z, D]),
            J = j(function() {
                return c("withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry")(e, {
                    shouldQueryStringFollowHighlightedEntry: C
                })
            }, [e, C]);
        o = o || A;
        return h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
            clear: !0,
            children: h.jsx(c("CometInternalTypeaheadStateProvider"), {
                emptyEntries_DO_NOT_USE: k,
                onClose: t,
                onOpen: y,
                children: h.jsx(c("CometInternalTypeaheadFetchProvider"), {
                    dataSource: f,
                    dataSourceFetchConfigParams: g,
                    loggingContext: p,
                    onFetchEntries_DO_NOT_USE: w,
                    traceProvider: B,
                    children: h.jsx(H, babelHelpers["extends"]({}, a, {
                        autoFocus: d,
                        id: (k = m) != null ? k : G,
                        inputStrategyRenderer: J,
                        isDisabled: n,
                        label: o,
                        onBackspace: q,
                        onBlur: r,
                        onChange: s,
                        onDownArrow: c("emptyFunction"),
                        onEnter: u,
                        onEscape: v,
                        onFocus: x,
                        onHighlightEntry: c("emptyFunction"),
                        onPressEntry: I,
                        onShiftTab: c("emptyFunction"),
                        onTab: c("emptyFunction"),
                        onUpArrow: c("emptyFunction"),
                        placeholder: A,
                        ref: b,
                        testid: void 0,
                        traceProvider: B,
                        viewRole: E,
                        viewStrategyRenderer: F
                    }))
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("CometTypeaheadInMemoryMapDataCache", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Map()
        }
        var b = a.prototype;
        b.clear = function() {
            this.$1.clear()
        };
        b.get = function(a) {
            return this.$1.get(a)
        };
        b.has = function(a) {
            return this.$1.has(a)
        };
        b.remove = function(a) {
            this.$1["delete"](a)
        };
        b.set = function(a, b) {
            this.$1.set(a, b)
        };
        b.values = function() {
            return Array.from(this.$1.values())
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("CometTypeaheadNetworkDataSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.fetchNetwork = function(a) {
            var b = this;
            return this.$1.fetch(a).then(function(c) {
                var d = c.requestQueryVariables;
                c = c.response;
                return {
                    entries: b.$2(c, d),
                    params: a
                }
            })
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("CometTypeaheadNetworkCacheDataSource", ["CometTypeaheadNetworkDataSource"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d) {
            d = d.normalizeFunc;
            this.$1 = new(c("CometTypeaheadNetworkDataSource"))(a, d);
            this.$2 = b
        }
        var b = a.prototype;
        b.fetchCache = function(a) {
            var b = a.query;
            b = this.$2.match(b);
            return {
                entries: b,
                params: a
            }
        };
        b.fetchNetwork = function(a) {
            var b = this,
                c = a.query;
            return this.$1.fetchNetwork(a).then(function(d) {
                d = d.entries;
                d != null && b.$2.add(d, c);
                return {
                    entries: b.$2.match(c),
                    params: a
                }
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("cometTypeaheadLabelSuffixBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a = a.getLabel().trimLeft().toLowerCase();
        return b == null || !a.startsWith(b) ? "" : a.slice(b.length)
    }
    f["default"] = a
}), 66);
__d("cometTypeaheadQueryMatchBuilder", ["TokenizeUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.query;
        return function(a) {
            return c("TokenizeUtil").isQueryMatch(b, a.getLabel())
        }
    }
    g["default"] = a
}), 98);
__d("cometTypeaheadStartsWithMatchBuilder", ["escapeRegex"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        a = a.query;
        var b = new RegExp("^" + c("escapeRegex")(a), "i");
        return function(a) {
            return b.test((a = a.getLabel()) != null ? a : "")
        }
    }
    g["default"] = a
}), 98);
__d("cometTypeaheadFetchPayloadDecorate", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        b === void 0 && (b = []);
        var c = a;
        b.forEach(function(a) {
            c = a(c)
        });
        return c
    }
    f["default"] = a
}), 66);
__d("CometTypeaheadBootstrapDataProviderStorageKey", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = "_SearchBootstrapCache_";
    c = b("$InternalEnum").Mirrored(["FeedComposerMentionsIntentfulMentionsBootstrap", "FeedComposerMentionsNonIntentfulMentionsBootstrap", "FeedComposerMentionsWithTagBootstrap", "GlobalTypeaheadBootstrapEntities", "GlobalTypeaheadBootstrapKeywords"]);
    f.StorageKeyPrefix = a;
    f.StorageKey = c
}), 66);
__d("CometTypeaheadDataProvider", ["CometRelay", "CometRelayErrorHandling", "Promise", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.onError,
                c = a.options,
                d = a.query,
                e = a.queryVariablesBuilder;
            a = a.relayEnvironment;
            this.$1 = b;
            this.$2 = d;
            this.$3 = e;
            this.$4 = a;
            this.$5 = c
        }
        var e = a.prototype;
        e.fetch = function(a) {
            var e = this,
                f = this.$3.build(),
                g = f(a);
            return new(b("Promise"))(function(a, b) {
                var f, h = !1;
                d("CometRelay").fetchQuery(e.$4, e.$2, g, {
                    fetchPolicy: c("gkx")("1300") ? "store-or-network" : (f = e.$5) == null ? void 0 : f.fetchPolicy
                }).subscribe({
                    error: function(a) {
                        d("CometRelayErrorHandling").markErrorAsHandled(a), e.$1 != null && e.$1(a), b(a)
                    },
                    next: function(b) {
                        h || (h = !0, a({
                            requestQueryVariables: g,
                            response: b
                        }))
                    }
                })
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("CometTypeaheadBootstrapDataProvider", ["CometTypeaheadBootstrapDataProviderStorageKey", "CometTypeaheadDataProvider", "Promise", "WebStorage", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e3 * 60 * 60 * 24;
    a = function() {
        function a(a) {
            var b = a.storageKey,
                e = a.storageTimespan;
            e = e === void 0 ? h : e;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["storageKey", "storageTimespan"]);
            this.$1 = new(c("CometTypeaheadDataProvider"))(a);
            this.$3 = b != null ? d("CometTypeaheadBootstrapDataProviderStorageKey").StorageKeyPrefix + b : null;
            this.$4 = e;
            b = a.queryVariablesBuilder;
            this.$2 = b
        }
        var e = a.prototype;
        e.fetch = function(a) {
            var c = this,
                d = this.$3 != null ? this.$5(a) : null;
            if (d != null) {
                var e = this.$2.build();
                e = e(a);
                return b("Promise").resolve({
                    requestQueryVariables: e,
                    response: d
                })
            }
            return this.$1.fetch(a).then(function(b) {
                var d = b.response;
                d != null && c.$3 != null && c.$6(a, d);
                return b
            })
        };
        e.clearLocalStorage = function() {
            var a = this.$3,
                b = c("WebStorage").getLocalStorage();
            if (b == null || a == null) return;
            b.removeItem(a)
        };
        e.$5 = function(a) {
            var b = this.$3,
                d = c("WebStorage").getLocalStorage();
            if (d == null || b == null) return null;
            var e = d.getItem(b);
            if (e == null) return null;
            try {
                e = JSON.parse(e)
            } catch (a) {
                c("recoverableViolation")("Cannot deserialize bootstrap response from local storage due to error: " + a, "search")
            }
            if (e == null) return null;
            e = e;
            var f = e.queryVariables,
                g = e.response;
            e = e.timestamp;
            var h = this.$2.build();
            h = h(a);
            if (JSON.stringify(f) !== JSON.stringify(h)) {
                d.removeItem(b);
                return null
            }
            a = Date.now();
            if (e + Number(this.$4) >= a) return g;
            d.removeItem(b);
            return null
        };
        e.$6 = function(a, b) {
            var d = this.$3,
                e = c("WebStorage").getLocalStorage();
            if (e == null || d == null) return;
            var f = this.$2.build();
            f = f(a);
            try {
                a = Date.now();
                f = JSON.stringify({
                    queryVariables: f,
                    response: b,
                    timestamp: a
                });
                e.setItem(d, f)
            } catch (a) {
                c("recoverableViolation")("Cannot save bootstrap response to local storage due to error: " + a, "search")
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("cometDataEntryLabelKeyBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.getLabel().trimLeft().toLowerCase()
    }
    f["default"] = a
}), 66);
__d("CometTypeaheadDataCacheProvider", ["cometDataEntryLabelKeyBuilder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.cache,
                d = a.matchBuilder,
                e = a.mergeBuilder;
            a = a.keyBuilder;
            a = a === void 0 ? c("cometDataEntryLabelKeyBuilder") : a;
            this.$1 = b;
            this.$2 = d;
            this.$3 = e;
            this.$4 = a
        }
        var b = a.prototype;
        b.add = function(a) {
            var b = this;
            a.forEach(function(a) {
                var c = b.$4(a),
                    d = b.$1.get(c);
                b.$1.set(c, d != null && b.$3 != null ? b.$3(a, d) : a)
            })
        };
        b.clear = function() {
            this.$1.clear()
        };
        b.remove = function(a) {
            a = this.$4(a);
            this.$1.remove(a)
        };
        b.match = function(a) {
            var b = this.$2({
                query: a
            });
            return this.$1.values().filter(function(a) {
                return b(a)
            })
        };
        b.values = function() {
            return this.$1.values()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("CometTypeaheadDataProviderQueryVariablesBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = null, this.$2 = null, this.$3 = a
        }
        var b = a.prototype;
        b.build = function() {
            return this.$3(this.$1, this.$2)
        };
        b.setComputedVariables = function(a) {
            this.$2 = a;
            return this
        };
        b.setDefaultVariables = function(a) {
            this.$1 = a;
            return this
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("cometCacheEntryLabelKeyBuilder", ["cometDataEntryLabelKeyBuilder"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return c("cometDataEntryLabelKeyBuilder")(a.entry)
    }
    g["default"] = a
}), 98);
__d("cometTypeaheadDedupEntriesBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return function(b, c) {
            var d = new Set(b.map(function(b) {
                return a(b)
            }));
            c = c.filter(function(b) {
                return !d.has(a(b))
            });
            return [].concat(b, c)
        }
    }
    f["default"] = a
}), 66);
__d("CometTypeaheadQueryDataCacheProvider", ["CometTypeaheadInMemoryMapDataCache", "cometCacheEntryLabelKeyBuilder", "cometTypeaheadDedupEntriesBuilder", "cometTypeaheadLabelSuffixBuilder", "orEmptyArray", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            a = a === void 0 ? {} : a;
            var b = a.dedupe;
            a = a.suffixBuilder;
            this.$1 = new(c("CometTypeaheadInMemoryMapDataCache"))();
            this.$2 = (b = b) != null ? b : c("cometTypeaheadDedupEntriesBuilder")(c("cometCacheEntryLabelKeyBuilder"));
            this.$3 = (b = a) != null ? b : c("cometTypeaheadLabelSuffixBuilder")
        }
        var b = a.prototype;
        b.add = function(a, b) {
            b === void 0 && (b = "");
            b = ((b = b) != null ? b : "").trimLeft().toLowerCase();
            a = this.$4(a, b);
            this.$1.set(b, a)
        };
        b.clear = function() {
            this.$1.clear()
        };
        b.match = function(a) {
            a = a.trimLeft().toLowerCase();
            if (a === "") return c("orEmptyArray")(this.$1.get(a)).map(function(a) {
                a = a.entry;
                return a
            });
            var b = [];
            for (var d = 1; d <= a.length; d++) {
                var e = a.substring(0, d),
                    f = a.substring(d, a.length);
                e = this.$5(e, f);
                b = this.$2(b, e)
            }
            return b.map(function(a) {
                a = a.entry;
                return a
            })
        };
        b.remove = function(a) {
            c("recoverableViolation")("'remove' is not implemented for CometTypeaheadQueryDataCacheProvider", "search")
        };
        b.$5 = function(a, b) {
            a = c("orEmptyArray")(this.$1.get(a));
            return a.map(function(a) {
                return !a.suffix.startsWith(b) && a.suffix !== b.trim() ? null : a
            }).filter(Boolean)
        };
        b.$4 = function(a, b) {
            var c = this;
            return a.map(function(a) {
                return {
                    entry: a,
                    suffix: c.$3(a, b)
                }
            })
        };
        b.values = function() {
            c("recoverableViolation")("'entries' is not implemented for CometTypeaheadQueryDataCacheProvider", "search");
            return []
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("cometDataEntryKeyBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.getKey().trimLeft().toLowerCase()
    }
    f["default"] = a
}), 66);
__d("cometCacheEntryKeyBuilder", ["cometDataEntryKeyBuilder"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return c("cometDataEntryKeyBuilder")(a.entry)
    }
    g["default"] = a
}), 98);
__d("cometTypeaheadMemoizeEntryKey", ["cometUniqueID", "memoizeStringOnly"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("memoizeStringOnly")(function(a) {
        return c("cometUniqueID")()
    });

    function a(a) {
        return h(a)
    }
    g["default"] = a
}), 98);
__d("CometTypeaheadProgressGlimmer.react", ["CometProgressRingIndeterminate.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a() {
        return h.jsx("div", {
            className: "taijpn5t pi1r6xr4 buofh1pr j83agx80 bp9cbjyn",
            children: h.jsx(c("CometProgressRingIndeterminate.react"), {
                color: "disabled",
                size: 24
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useCometTypeaheadInputStrategyOnBlurHandler", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.onBlur;
        return h(function() {
            b && b()
        }, [b])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadInputStrategyOnFocusHandler", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.inputRef,
            c = a.onFocus;
        return h(function() {
            b.current != null && b.current.select(), c && c()
        }, [b, c])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadInputHandlers", ["useCometTypeaheadInputStrategyOnBlurHandler", "useCometTypeaheadInputStrategyOnFocusHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.inputRef,
            d = a.onBlur,
            e = a.onFocus;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["inputRef", "onBlur", "onFocus"]);
        b = c("useCometTypeaheadInputStrategyOnFocusHandler")({
            inputRef: b,
            onFocus: e
        });
        e = c("useCometTypeaheadInputStrategyOnBlurHandler")({
            onBlur: d
        });
        return babelHelpers["extends"]({}, a, {
            onBlur: e,
            onFocus: b
        })
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadInputStrategyOnChangeHandler", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.onChange;
        return h(function(a) {
            var c = a.target.value;
            b && b(c, a)
        }, [b])
    }
    g["default"] = a
}), 98);
__d("CometTypeaheadInputStrategyEventListener.react", ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "react", "useCometTypeaheadInputHandlers", "useCometTypeaheadInputRefs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useMemo,
        k = {
            root: {
                width: "k4urcfbm"
            }
        };

    function a(a, b) {
        var d = a.children,
            e = a.isInline,
            f = a.onBackspace,
            g = a.onDownArrow,
            l = a.onEnter,
            m = a.onEscape,
            n = a.onShiftTab,
            o = a.onTab,
            p = a.onUpArrow;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "isInline", "onBackspace", "onDownArrow", "onEnter", "onEscape", "onShiftTab", "onTab", "onUpArrow"]);
        var q = j(function() {
            return [{
                command: {
                    key: c("CometKeys").DELETE
                },
                description: h._( /*FBT_CALL*/ "Remove last character from input query." /*FBT_CALL*/ ),
                handler: function() {
                    return f && f()
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                triggerFromInputs: !0
            }, {
                command: {
                    key: c("CometKeys").DOWN
                },
                description: h._( /*FBT_CALL*/ "Next suggestion" /*FBT_CALL*/ ),
                handler: function() {
                    return g && g()
                },
                triggerFromInputs: !0
            }, {
                command: {
                    key: c("CometKeys").UP
                },
                description: h._( /*FBT_CALL*/ "Previous suggestion" /*FBT_CALL*/ ),
                handler: function() {
                    return p && p()
                },
                triggerFromInputs: !0
            }, {
                command: {
                    key: c("CometKeys").ESCAPE
                },
                description: h._( /*FBT_CALL*/ "Close suggestions" /*FBT_CALL*/ ),
                handler: function() {
                    return m && m()
                },
                triggerFromInputs: !0
            }, {
                command: {
                    key: c("CometKeys").ENTER
                },
                description: h._( /*FBT_CALL*/ "Select suggestion" /*FBT_CALL*/ ),
                handler: function() {
                    return l && l()
                },
                triggerFromInputs: !0
            }, {
                command: {
                    key: c("CometKeys").TAB
                },
                description: h._( /*FBT_CALL*/ "Leave input" /*FBT_CALL*/ ),
                handler: function() {
                    return o && o()
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                shouldStopPropagation: !1,
                triggerFromInputs: !0
            }, {
                command: {
                    key: c("CometKeys").TAB,
                    shift: !0
                },
                description: h._( /*FBT_CALL*/ "Leave input" /*FBT_CALL*/ ),
                handler: function() {
                    return n && n()
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                shouldStopPropagation: !1,
                triggerFromInputs: !0
            }]
        }, [f, g, l, m, n, o, p]);
        b = c("useCometTypeaheadInputRefs")(b);
        var r = b.composedRef;
        b = b.inputRef;
        b = c("useCometTypeaheadInputHandlers")(babelHelpers["extends"]({
            inputRef: b
        }, a));
        return i.jsx(c("CometComponentWithKeyCommands.react"), {
            commandConfigs: q,
            elementType: e === !0 ? "span" : "div",
            xstyle: k.root,
            children: d(r, b)
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b
}), 98);
__d("cometTypeaheadInputWebkitStyles", [], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        "default": {
            WebkitAppearance: "aj8hi1zk",
            "::-webkit-search-decoration": {
                appearance: "r4fl40cc"
            },
            "::-webkit-search-cancel-button": {
                appearance: "kd8v7px7"
            },
            "::-webkit-search-results-button": {
                appearance: "m07ooulj"
            },
            "::-webkit-search-results-decoration": {
                appearance: "mzan44vs"
            }
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("useCometTypeaheadInputDirection", ["UnicodeBidi", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo,
        i = new Map([
            ["LTR", "ltr"],
            ["RTL", "rtl"],
            ["NEUTRAL", "auto"]
        ]);

    function a(a) {
        var b = a.fallback,
            c = a.queryString;
        return h(function() {
            var a = d("UnicodeBidi").getDirection(c, b);
            return i.get(a)
        }, [b, c])
    }
    g["default"] = a
}), 98);
__d("CometTypeaheadInputRoundedStrategy.react", ["CometRoundedTextInput.react", "TetraIcon.react", "cometTypeaheadInputWebkitStyles", "cr:12151", "react", "useCometTypeaheadInputDirection", "useCometTypeaheadInputStrategyOnChangeHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, d) {
        var e = a.ariaProps;
        a.description;
        a.errorMessage;
        a.id;
        var f = a.inputEndContent,
            g = a.inputStartContent,
            i = a.inputExtraProps;
        i = i === void 0 ? {} : i;
        var j = i.hideIconOnFocus;
        j = j === void 0 ? !1 : j;
        var k = i.hideIconAnimation;
        k = k === void 0 ? !1 : k;
        var l = i.icon;
        l = l === void 0 ? h.jsx(c("TetraIcon.react"), {
            color: "secondary",
            icon: b("cr:12151"),
            size: 16
        }) : l;
        var m = i.size;
        i = i.xstyle;
        i = i === void 0 ? {} : i;
        var n = a.isDisabled,
            o = a.onChange,
            p = a.label;
        p = p === void 0 ? "" : p;
        var q = a.queryString,
            r = a.testid;
        r = babelHelpers.objectWithoutPropertiesLoose(a, ["ariaProps", "description", "errorMessage", "id", "inputEndContent", "inputStartContent", "inputExtraProps", "isDisabled", "onChange", "label", "queryString", "testid"]);
        a = c("useCometTypeaheadInputDirection")({
            queryString: q
        });
        o = c("useCometTypeaheadInputStrategyOnChangeHandler")({
            onChange: o
        });
        return h.jsxs("div", {
            className: "k4urcfbm j83agx80 bp9cbjyn",
            children: [g, h.jsx(c("CometRoundedTextInput.react"), babelHelpers["extends"]({}, e, r, {
                autoComplete: "off",
                "data-testid": void 0,
                dir: a,
                disabled: n,
                hideIconAnimation: k,
                hideIconOnFocus: j,
                icon: l,
                label: p,
                onChange: o,
                ref: d,
                size: m,
                spellCheck: !1,
                suppressHydrationWarning: !0,
                type: "search",
                value: q,
                xstyle: [i, c("cometTypeaheadInputWebkitStyles")["default"]]
            })), f]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("cometTypeaheadKeyboardNavigationUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        if (a.length === 0) {
            c(null);
            return
        }
        var d = b != null ? a.findIndex(function(a) {
            return a.getKey() === b
        }) + 1 : 0;
        d === a.length && (d = 0);
        c(a[d])
    }

    function b(a, b, c) {
        if (a.length === 0) {
            c(null);
            return
        }
        var d = b != null ? a.findIndex(function(a) {
            return a.getKey() === b
        }) - 1 : a.length - 1;
        d === -1 && (d = a.length - 1);
        c(a[d])
    }
    f.moveDown = a;
    f.moveUp = b
}), 66);
__d("useCometTypeaheadLayoutStrategyOnBlurHandler", ["react", "useCometInternalTypeaheadStateDispatcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.onBlur;
        a = c("useCometInternalTypeaheadStateDispatcher")();
        var d = a.dispatchHighlightedEntry;
        return h(function() {
            d({
                entry: null,
                source: null
            }), b && b()
        }, [d, b])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutStrategyOnChangeHandler", ["react", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.onChange,
            d = a.onHighlightEntry;
        a = c("useCometInternalTypeaheadState")();
        var e = a.highlightedEntry;
        return h(function(a, c) {
            e != null && d(null, "keyboard"), b && b(a, c)
        }, [e, b, d])
    }
    g["default"] = a
}), 98);
__d("useCometInternalTypeaheadKeyboardNavigation", ["cometTypeaheadKeyboardNavigationUtils", "react", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a() {
        var a = c("useCometInternalTypeaheadState")(),
            b = a.activeEntries;
        a = a.highlightedEntry;
        var e = a != null ? a.getKey() : null;
        a = h(function(a) {
            return d("cometTypeaheadKeyboardNavigationUtils").moveDown(b, e, function(b) {
                a(b, "keyboard")
            })
        }, [e, b]);
        var f = h(function(a) {
            return d("cometTypeaheadKeyboardNavigationUtils").moveUp(b, e, function(b) {
                a(b, "keyboard")
            })
        }, [e, b]);
        return {
            onKeyboardDownArrow: a,
            onKeyboardUpArrow: f
        }
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutStrategyOnDownArrowHandler", ["react", "useCometInternalTypeaheadKeyboardNavigation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.onDownArrow,
            d = a.onHighlightEntry;
        a = c("useCometInternalTypeaheadKeyboardNavigation")();
        var e = a.onKeyboardDownArrow;
        return h(function() {
            e(d), b && b()
        }, [b, d, e])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutStrategyOnEnterHandler", ["react", "useCometInternalTypeaheadState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.inputRef,
            d = a.onEnter;
        a = c("useCometInternalTypeaheadState")();
        var e = a.highlightedEntry,
            f = a.highlightedEntrySource,
            g = b.current;
        return h(function() {
            var a;
            a = (a = g == null ? void 0 : g.value) != null ? a : "";
            var b = e != null && f === "keyboard";
            if (a.trim().length === 0 && !b) return;
            d && d()
        }, [g, e, f, d])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutStrategyOnHighlightEntryHandler", ["react", "useCometInternalTypeaheadStateDispatcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.onHighlightEntry;
        a = c("useCometInternalTypeaheadStateDispatcher")();
        var d = a.dispatchHighlightedEntry;
        return h(function(a, c) {
            d({
                entry: a,
                source: c
            }), b && b(a, c)
        }, [d, b])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutStrategyOnOutsideClickHandler", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.inputRef,
            c = a.onOutsideClick;
        return h(function() {
            if (b.current === document.activeElement) return;
            c && c()
        }, [b, c])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutStrategyOnPressEntryHandler", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.onPressEntry;
        return h(function(a, c) {
            b(a, c)
        }, [b])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutStrategyOnUpArrowHandler", ["react", "useCometInternalTypeaheadKeyboardNavigation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.onHighlightEntry,
            d = a.onUpArrow;
        a = c("useCometInternalTypeaheadKeyboardNavigation")();
        var e = a.onKeyboardUpArrow;
        return h(function() {
            e(b), d && d()
        }, [b, e, d])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadViewLabel", ["fbt", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useMemo;

    function a(a) {
        var b = a.activeEntries;
        return i(function() {
            var a = b.length;
            return a === 0 ? h._( /*FBT_CALL*/ "No suggested searches." /*FBT_CALL*/ ) : h._( /*FBT_CALL*/ {
                "*": "{number} suggested searches",
                "_1": "1 suggested search"
            } /*FBT_CALL*/ , [h._plural(a, "number")])
        }, [b])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutContextualStrategyARIAProps", ["react", "useCometInternalTypeaheadFetch", "useCometTypeaheadViewLabel", "useCometUniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;

    function a(a) {
        var b = a.activeEntries,
            d = a.helperText,
            e = a.highlightedEntry,
            f = a.inputLabel,
            g = f === void 0 ? "" : f,
            i = a.isOpened,
            j = a.viewRole,
            k = c("useCometUniqueID")();
        f = c("useCometInternalTypeaheadFetch")();
        var l = f.isLoading,
            m = c("useCometUniqueID")(),
            n = c("useCometTypeaheadViewLabel")({
                activeEntries: b
            });
        return h(function() {
            var a = e != null ? {
                    "aria-activedescendant": e.getKey()
                } : {},
                c = i ? {
                    "aria-controls": k
                } : null,
                f = d != null && String(d).length > 0 ? {
                    "aria-describedby": m
                } : null,
                h = {
                    "aria-busy": l,
                    "aria-label": n,
                    id: k,
                    role: j
                };
            return {
                ariaDescribedByProps: {
                    id: m
                },
                ariaInputProps: babelHelpers["extends"]({}, a, c, f, {
                    "aria-autocomplete": "list",
                    "aria-expanded": b.length > 0 && i,
                    "aria-label": g,
                    role: "combobox"
                }),
                ariaViewProps: h
            }
        }, [b.length, m, d, e, g, l, i, k, j, n])
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadLayoutStrategyStyles", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo,
        i = {
            defaultLayout: {
                boxSizing: "rq0escxv",
                display: "j83agx80",
                flexDirection: "cbu4d94t",
                width: "k4urcfbm"
            },
            stateDisabled: {},
            stateError: {},
            stateOpened: {},
            stateWarning: {}
        };

    function a(a) {
        var b = a.isDisabled,
            c = b === void 0 ? !1 : b;
        b = a.isError;
        var d = b === void 0 ? !1 : b;
        b = a.isOpened;
        var e = b === void 0 ? !1 : b;
        b = a.isWarning;
        var f = b === void 0 ? !1 : b;
        b = a.xstyles;
        var g = b.inputXStyle,
            j = b.layoutOpenedXStyle,
            k = b.layoutXStyle,
            l = b.viewXStyle_DO_NOT_USE;
        a = h(function() {
            return {
                inputXStyle: g,
                layoutXStyle: [i.defaultLayout, k, e && j, c && i.stateDisabled, e && i.stateOpened, d && i.stateError, f && i.stateWarning],
                viewXStyle_DO_NOT_USE: [l]
            }
        }, [g, c, d, e, f, j, k, l]);
        return a
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadInternalLayoutInlineStrategyHandlers", ["react", "useCometTypeaheadLayoutStrategyOnBlurHandler", "useCometTypeaheadLayoutStrategyOnChangeHandler", "useCometTypeaheadLayoutStrategyOnDownArrowHandler", "useCometTypeaheadLayoutStrategyOnEnterHandler", "useCometTypeaheadLayoutStrategyOnHighlightEntryHandler", "useCometTypeaheadLayoutStrategyOnOutsideClickHandler", "useCometTypeaheadLayoutStrategyOnPressEntryHandler", "useCometTypeaheadLayoutStrategyOnUpArrowHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.inputRef,
            d = a.onBlur,
            e = a.onChange,
            f = a.onDownArrow,
            g = a.onEnter,
            i = a.onEscape,
            j = a.onHighlightEntry,
            k = a.onOutsideClick,
            l = a.onPressEntry;
        a = a.onUpArrow;
        j = c("useCometTypeaheadLayoutStrategyOnHighlightEntryHandler")({
            onHighlightEntry: j
        });
        d = c("useCometTypeaheadLayoutStrategyOnBlurHandler")({
            onBlur: d
        });
        var m = c("useCometTypeaheadLayoutStrategyOnChangeHandler")({
            onChange: e,
            onHighlightEntry: j
        });
        e = c("useCometTypeaheadLayoutStrategyOnEnterHandler")({
            inputRef: b,
            onEnter: g
        });
        g = h(function() {
            m(""), i && i()
        }, [m, i]);
        f = c("useCometTypeaheadLayoutStrategyOnDownArrowHandler")({
            onDownArrow: f,
            onHighlightEntry: j
        });
        a = c("useCometTypeaheadLayoutStrategyOnUpArrowHandler")({
            onHighlightEntry: j,
            onUpArrow: a
        });
        l = c("useCometTypeaheadLayoutStrategyOnPressEntryHandler")({
            onPressEntry: l
        });
        b = c("useCometTypeaheadLayoutStrategyOnOutsideClickHandler")({
            inputRef: b,
            onOutsideClick: k
        });
        return {
            onBlur: d,
            onChange: m,
            onDownArrow: f,
            onEnter: e,
            onEscape: g,
            onHighlightEntry: j,
            onOutsideClick: b,
            onPressEntry: l,
            onUpArrow: a
        }
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadInternalLayoutContextualStrategyHandlers", ["react", "useCometInternalTypeaheadState", "useCometInternalTypeaheadStateDispatcher", "useCometTypeaheadInternalLayoutInlineStrategyHandlers"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function a(a) {
        var b = a.inputRef,
            d = a.onAbandonTypeahead_DO_NOT_USE,
            e = a.onClick,
            f = a.onOutsideClick,
            g = a.onShiftTab,
            i = a.onTab,
            j = babelHelpers.objectWithoutPropertiesLoose(a, ["inputRef", "onAbandonTypeahead_DO_NOT_USE", "onClick", "onOutsideClick", "onShiftTab", "onTab"]);
        a = c("useCometInternalTypeaheadState")();
        var k = a.isOpened;
        a = c("useCometInternalTypeaheadStateDispatcher")();
        var l = a.dispatchIsOpened;
        a = h(function() {
            l(!1), f && f()
        }, [l, f]);
        b = c("useCometTypeaheadInternalLayoutInlineStrategyHandlers")(babelHelpers["extends"]({
            inputRef: b,
            onOutsideClick: a
        }, j));
        a = b.onBlur;
        var m = b.onChange,
            n = b.onDownArrow,
            o = b.onEnter,
            p = b.onEscape,
            q = b.onHighlightEntry,
            r = b.onOutsideClick,
            s = b.onPressEntry,
            t = b.onUpArrow;
        b = h(function() {
            l(!1), d && d()
        }, [l, d]);
        var u = h(function() {
                l(!0), e && e()
            }, [l, e]),
            v = h(function(a, b) {
                l(!0), m && m(a, b)
            }, [l, m]),
            w = h(function() {
                k ? n && n() : l(!0)
            }, [l, k, n]),
            x = h(function() {
                l(!1), o && o()
            }, [l, o]),
            y = h(function() {
                k ? (l(!1), j.onEscape && j.onEscape()) : p && p()
            }, [l, j, k, p]),
            z = h(function(a, b) {
                l(!1), s && s(a, b)
            }, [l, s]),
            A = h(function() {
                l(!1), g && g()
            }, [l, g]),
            B = h(function() {
                l(!1), i && i()
            }, [l, i]),
            C = h(function() {
                !k ? l(!0) : t && t()
            }, [l, k, t]);
        return {
            onAbandonTypeahead_DO_NOT_USE: b,
            onBlur: a,
            onChange: v,
            onClick: u,
            onDownArrow: w,
            onEnter: x,
            onEscape: y,
            onHighlightEntry: q,
            onOutsideClick: r,
            onPressEntry: z,
            onShiftTab: A,
            onTab: B,
            onUpArrow: C
        }
    }
    g["default"] = a
}), 98);
__d("useCometTypeaheadEmptyState", ["react", "useCometInternalTypeaheadFetch"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
        i = b.useState;

    function a() {
        var a = i(!0),
            b = a[0],
            d = a[1];
        a = c("useCometInternalTypeaheadFetch")();
        var e = a.isLoading;
        a = a.source;
        h(function() {
            e && d(!1)
        }, [e]);
        a = ["all", "network"].includes(a);
        return !(a && b || e)
    }
    g["default"] = a
}), 98);
__d("CometTypeaheadViewItem.react", ["CometPressable.react", "CometRow.react", "CometRowItem.react", "emptyFunction", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useCallback,
        j = {
            root: {
                borderTopStartRadius: "ue3kfks5",
                borderTopEndRadius: "pw54ja7n",
                borderBottomEndRadius: "uo3d90p7",
                borderBottomStartRadius: "l82x9zwi",
                marginTop: "kvgmc6g5",
                marginBottom: "oygrvhab",
                paddingTop: "cxgpxx05",
                paddingEnd: "dflh9lhu",
                paddingBottom: "sj5x9vvc",
                paddingStart: "scb9dxdr"
            }
        },
        k = {
            contentRoot: {
                alignItems: "bp9cbjyn",
                cursor: "nhd2j8a9",
                display: "j83agx80",
                overflowX: "ni8dbmo4",
                overflowY: "stjgntxs",
                position: "l9j0dhe7"
            },
            contentRootActive: {
                backgroundColor: "rnr61an3"
            },
            contentRootDisabled: {
                bottom: "i09qtzwb",
                cursor: "rj84mg9z",
                end: "n7fi1qx3",
                position: "pmk7jnqg",
                start: "j9ispegn",
                top: "kr520xx4"
            },
            contentRootEmphasized: {
                backgroundColor: "i94ygzvd"
            },
            contentRootHover: {
                ":hover": {
                    backgroundColor: "dwzzwef6"
                }
            },
            itemIcon: {
                borderTopStartRadius: "s45kfl79",
                borderTopEndRadius: "emlxlaya",
                borderBottomEndRadius: "bkmhp75w",
                borderBottomStartRadius: "spb7xbtv"
            },
            pressable: {
                width: "k4urcfbm"
            },
            root: {
                width: "k4urcfbm"
            }
        };

    function a(a) {
        var b = a.children,
            d = a.cursorDisabled_SEARCH_ONLY;
        d = d === void 0 ? !1 : d;
        var e = a.entry,
            f = a.isActive,
            g = a.isEmphasized;
        g = g === void 0 ? !1 : g;
        var l = a.isDisabled;
        l = l === void 0 ? !1 : l;
        var m = a.itemEndContent,
            n = a.itemStartContent,
            o = a.linkProps;
        a.onHighlightEntry;
        var p = a.onPressEntry,
            q = a.onPressEntryIn,
            r = a.overlayDisabled_SEARCH_ONLY;
        r = r === void 0 ? !1 : r;
        var s = a.role,
            t = a.testid;
        t = a.xstyle;
        t = t === void 0 ? j.root : t;
        a = a.debugElement;
        var u = i(function(a) {
                p && p(e, a)
            }, [e, p]),
            v = i(function(a) {
                q && q(e, a)
            }, [e, q]),
            w = s === "row" ? "gridcell" : "none";
        return h.jsxs("li", {
            "aria-selected": f,
            className: c("stylex")(k.root),
            "data-testid": void 0,
            id: e.getKey(),
            role: s,
            children: [a, h.jsxs("div", {
                className: c("stylex")([k.contentRoot, !r && k.contentRootHover, f && k.contentRootActive, g && k.contentRootEmphasized, t]),
                role: w,
                children: [h.jsx(c("CometPressable.react"), {
                    cursorDisabled: d,
                    disabled: l,
                    display: "block",
                    expanding: !0,
                    focusable: !1,
                    label: e.getLabel(),
                    linkProps: o,
                    onPress: l ? c("emptyFunction") : u,
                    onPressIn: l ? c("emptyFunction") : v,
                    overlayDisabled: !0,
                    role: "none",
                    xstyle: k.pressable,
                    children: h.jsxs(c("CometRow.react"), {
                        expanding: !0,
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        verticalAlign: "center",
                        children: [n != null ? h.jsx(c("CometRowItem.react"), {
                            children: h.jsx("div", {
                                className: c("stylex")(k.itemIcon),
                                children: n
                            })
                        }) : null, h.jsx(c("CometRowItem.react"), {
                            expanding: !0,
                            children: b
                        }), m != null ? h.jsx(c("CometRowItem.react"), {
                            children: m
                        }) : null]
                    })
                }), h.jsx("div", {
                    className: c("stylex")(l && k.contentRootDisabled)
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useCometTypeaheadViewStrategyOutsideClickListener", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect;

    function a(a, b) {
        var c = h(function(c) {
            var d = a.current;
            c = c.target;
            d != null && c instanceof Node && !d.contains(c) && b()
        }, [a, b]);
        i(function() {
            document.addEventListener("click", c);
            return function() {
                document.removeEventListener("click", c)
            }
        }, [c])
    }
    g["default"] = a
}), 98);
__d("CometTypeaheadViewStrategyEventListener.react", ["react", "useCometTypeaheadViewStrategyOutsideClickListener"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useRef;

    function a(a) {
        var b = a.children;
        a = a.onOutsideClick;
        var d = h(null);
        c("useCometTypeaheadViewStrategyOutsideClickListener")(d, a);
        return b(d)
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometTypeaheadViewList.react", ["CometCompositeStructureContext", "getItemRoleFromCompositeRole", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useMemo;

    function a(a) {
        var b = a.ariaProps,
            d = a.children,
            e = a.entries,
            f = a.highlightedEntry;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["ariaProps", "children", "entries", "highlightedEntry"]);
        var g = f != null ? f.getKey() : null,
            j = b.role;
        a = i(function() {
            if (j != null) return {
                role: j
            };
            else return {}
        }, [j]);
        var k = c("getItemRoleFromCompositeRole")(j);
        return e != null && e.length > 0 ? h.jsx("ul", babelHelpers["extends"]({}, b, {
            className: "buofh1pr cbu4d94t j83agx80",
            "data-testid": void 0,
            children: h.jsx(c("CometCompositeStructureContext").Provider, {
                value: a,
                children: e.map(function(a, b) {
                    var c = g === a.getKey();
                    return d({
                        entry: a,
                        index: b,
                        isActive: c,
                        itemRole: k
                    })
                })
            })
        })) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("cometHandleHighlightDropOnMouseLeave", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return function() {
            a(null, "mouse")
        }
    }
    f["default"] = a
}), 66);
__d("cometSearchTypeaheadPayloadDecoratorAddLimit", ["orEmptyArray"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return function(b) {
            var d = b.entries;
            d = c("orEmptyArray")(d).slice(0, a);
            return babelHelpers["extends"]({}, b, {
                entries: d
            })
        }
    }
    g["default"] = a
}), 98);
__d("DataViewReader", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = 0, this.$2 = a
        }
        var b = a.prototype;
        b.seek = function(a) {
            this.$1 = a
        };
        b.skip = function(a) {
            var b = this.$1;
            this.$1 += a;
            return b
        };
        b.readUint8 = function() {
            return this.$2.getUint8(this.skip(8 / 8))
        };
        b.readUint16 = function(a) {
            a === void 0 && (a = !1);
            return this.$2.getUint16(this.skip(16 / 8), a)
        };
        b.readUint32 = function(a) {
            a === void 0 && (a = !1);
            return this.$2.getUint32(this.skip(32 / 8), a)
        };
        b.readUint64 = function(a) {
            a === void 0 && (a = !1);
            var b;
            a ? (a = this.$2.getUint32(this.skip(32 / 8), !0), b = this.$2.getUint32(this.skip(32 / 8), !0)) : (b = this.$2.getUint32(this.skip(32 / 8)), a = this.$2.getUint32(this.skip(32 / 8)));
            if (b > 2097151) throw new RangeError("Overflow reading 64-bit value.");
            return Math.pow(2, 32) * b + a
        };
        b.readInt64 = function(a) {
            a === void 0 && (a = !1);
            var b;
            a ? (a = this.$2.getInt32(this.skip(32 / 8), !0), b = this.$2.getInt32(this.skip(32 / 8), !0)) : (b = this.$2.getInt32(this.skip(32 / 8)), a = this.$2.getInt32(this.skip(32 / 8)));
            if (b > 2097151) throw new RangeError("Overflow reading 64-bit value.");
            return Math.pow(2, 32) * (b | 0) + a
        };
        b.readInt16 = function(a) {
            a === void 0 && (a = !1);
            return this.$2.getInt16(this.skip(16 / 8), a)
        };
        b.readInt32 = function(a) {
            a === void 0 && (a = !1);
            return this.$2.getInt32(this.skip(32 / 8), a)
        };
        b.readZeroTerminatedString = function(a) {
            var b = "",
                c = 0,
                d;
            while (c++ < a && (d = this.readUint8())) b += String.fromCharCode(d);
            return b
        };
        b.readChars = function(a) {
            var b = "";
            while (a-- > 0) b += String.fromCharCode(this.$2.getUint8(this.skip(8 / 8)));
            return b
        };
        b.readBytes = function(a) {
            var b = [];
            while (a-- > 0) b.push(this.$2.getUint8(this.skip(8 / 8)));
            return b
        };
        b.getDataView = function() {
            return this.$2
        };
        b.getCursor = function() {
            return this.$1
        };
        b.hasMoreData = function() {
            return this.$2.byteLength - this.getCursor() > 0
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("LiveTraceWwwVideoPlayerFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743810");
    c = b("FalcoLoggerInternal").create("live_trace_www_video_player", a);
    e.exports = c
}), null);
__d("Mp4DASHEventMessageBox", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b) {
            this.$1 = b, this.$2 = null, b.getVersion() == 0 ? this.$2 = {
                version: 0,
                schemeIdUri: a.readZeroTerminatedString(this.$4(a, b)),
                value: a.readZeroTerminatedString(this.$4(a, b)),
                timescale: a.readUint32(),
                presentationTimeDelta: a.readUint32(),
                eventDuration: a.readUint32(),
                id: a.readUint32()
            } : b.getVersion() == 1 && (this.$2 = {
                version: 1,
                timescale: a.readUint32(),
                presentationTime: a.readUint64(),
                eventDuration: a.readUint32(),
                id: a.readUint32(),
                schemeIdUri: a.readZeroTerminatedString(this.$4(a, b)),
                value: a.readZeroTerminatedString(this.$4(a, b))
            }), this.$3 = new DataView(a.getDataView().buffer, a.getCursor())
        }
        var b = a.prototype;
        b.getFullBox = function() {
            return this.$1
        };
        b.getEmsgFields = function() {
            return this.$2
        };
        b.getMessageData = function() {
            return this.$3
        };
        b.getStartTime = function() {
            var a = this.$2;
            if (a == null) return null;
            switch (a.version) {
                case 0:
                    return null;
                case 1:
                    return this.$5(a)
            }
        };
        b.getDuration = function() {
            var a = this.$2;
            if (a == null) return null;
            var b = a.eventDuration;
            a = a.timescale;
            return a !== 0 ? b / a : b
        };
        b.$5 = function(a) {
            var b = a.timescale;
            a = a.presentationTime;
            return b !== 0 ? a / b : a
        };
        b.$4 = function(a, b) {
            a = b.getBox().getSize() - (a.getCursor() - b.getBox().getStart());
            return a
        };
        return a
    }();
    a.canonicalType = "emsg";
    f["default"] = a
}), 66);
__d("Mp4Box", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$4 = a.getCursor(), this.$1 = a.readUint32(), this.$2 = a.readChars(4), this.$1 === 1 ? this.$1 = a.readUint64() : this.$1 === 0 && (this.$1 = a.getDataView().byteLength - this.$4), this.$2 === "uuid" && (this.$3 = a.readChars(16)), this.$5 = a.getCursor()
        }
        var b = a.prototype;
        b.getBodyStart = function() {
            return this.$5
        };
        b.getBodySize = function() {
            var a = this.$5 - this.$4;
            return this.getSize() - a
        };
        b.getSize = function() {
            return this.$1
        };
        b.getType = function() {
            return this.$2
        };
        b.getUuid = function() {
            return this.$3
        };
        b.getStart = function() {
            return this.$4
        };
        b.inspect = function() {
            return "{ size: " + this.$1 + ", type: " + this.$2 + " }"
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("Mp4FullBox", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$2 = a.readUint8(), this.$1 = a.readUint8(), this.$1 = a.readUint8() + (this.$1 << 8), this.$1 = a.readUint8() + (this.$1 << 8), this.$3 = b
        }
        var b = a.prototype;
        b.getVersion = function() {
            return this.$2
        };
        b.getFlags = function() {
            return this.$1
        };
        b.getBox = function() {
            return this.$3
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("Mp4Demuxer", ["DataViewReader", "Mp4Box", "Mp4FullBox"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = new(c("DataViewReader"))(a)
        }
        var b = a.prototype;
        b.parseBox = function() {
            return new(c("Mp4Box"))(this.$1)
        };
        b.parseFullBox = function(a) {
            return new(c("Mp4FullBox"))(this.$1, a)
        };
        b.parseCanonicalBox = function(a, b) {
            return new a(this.$1, b)
        };
        b.skipBox = function(a) {
            this.$1.seek(a.getStart() + a.getSize())
        };
        b.withinBox = function(a) {
            var b = this.$1.getCursor();
            return b >= a.getStart() && b < a.getStart() + a.getSize()
        };
        b.atEnd = function() {
            return this.$1.getCursor() >= this.$1.getDataView().byteLength
        };
        b.reset = function() {
            this.$1.seek(0)
        };
        b.readBoxBodyText = function(a) {
            this.$1.seek(a.getBodyStart());
            var b = new TextDecoder();
            a = new Uint8Array(this.$1.readBytes(a.getBodySize()));
            return b.decode(a)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoLiveTrace", ["DataViewReader", "LiveTraceWwwVideoPlayerFalcoEvent", "Mp4DASHEventMessageBox", "Mp4Demuxer", "throttle"], (function(a, b, c, d, e, f, g) {
    var h = "x-fb-video-livetrace-ids",
        i = "x-fb-video-livetrace-parentsource",
        j = "x-fb-video-livetrace-streamtype",
        k = "x-fb-origin-hit",
        l = "x-fb-edge-hit",
        m = "PLY:WWW:",
        n = m + "DL:",
        o = m + "DIS:",
        p = 1e3,
        q = /[\r\n]+/;
    a = function() {
        function a(a, b, d) {
            var e = this;
            this.$6 = [];
            this.$1 = a;
            this.$2 = null;
            a = d + ":" + b.substring(0, 5);
            this.$3 = m + a;
            this.$4 = n + a;
            this.$5 = o + a;
            this.$7 = c("throttle")(function(a) {
                return e.$8(a)
            }, p)
        }
        var b = a.prototype;
        b.setStreamType = function(a) {
            this.$2 = a
        };
        b.$9 = function(a, b, d, e, f, g) {
            var h, i = this,
                j = Date.now(),
                k = (h = this.$2) != null ? h : 0;
            c("LiveTraceWwwVideoPlayerFalcoEvent").log(function() {
                return {
                    stream_id: i.$1,
                    stream_type: k,
                    event_name: b,
                    event_severity: f,
                    event_creation_time: j,
                    source: a,
                    trace_id: d,
                    parent_source: e,
                    metadata: g
                }
            })
        };
        b.onUpdateStatus = function(a) {
            this.$7(a)
        };
        b.$8 = function(a) {
            a = a.position * 1e3;
            for (var b = this.$6.length - 1; b >= 0; b--) {
                var c = this.$6[b];
                if (c.presentationTimestamp > a) continue;
                if (c.displayTimestamp == null) c.displayTimestamp = Date.now();
                else continue;
                this.$9(this.$5, "FRAME", c.traceId, this.$4, "SUCCESS", null)
            }
        };
        b.getAndFlushTracedFrames = function() {
            var a, b = {
                    currentTimeMs: Date.now(),
                    streamId: this.$1
                },
                c = {
                    dl: [],
                    dis: []
                },
                d = [];
            this.$6.forEach(function(a) {
                a.hasBeenFlushedAsDownloaded || (c.dl.push({
                    id: a.traceId,
                    timeMs: a.downloadTimestamp
                }), a.hasBeenFlushedAsDownloaded = !0), a.displayTimestamp != null ? c.dis.push({
                    id: a.traceId,
                    timeMs: a.displayTimestamp
                }) : d.push(a)
            });
            this.$6 = d;
            b[(a = this.$2) != null ? a : 0] = c;
            return c.dl.length > 0 || c.dis.length > 0 ? b : null
        };
        b.handleHeadersString = function(a, b) {
            a = a.trim().split(q);
            this.$10(a.map(function(a) {
                a = a.split(": ");
                return [a.shift().toLowerCase(), a.shift()]
            }), b)
        };
        b.handleHeaders = function(a, b) {
            this.$10(this.$11(a), b)
        };
        b.handleHeadersAndBody = function(a, b, c) {
            this.$12(this.$11(a), b, c)
        };
        b.$11 = function(a) {
            var b = [];
            for (var a = a.entries(), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                b.push(e)
            }
            return b
        };
        b.$13 = function(a) {
            var b = Date.now(),
                d = new Map(),
                e = a.reduce(function(a, b) {
                    return a + b.byteLength
                }, 0),
                f = new Uint8Array(e),
                g = 0;
            a.forEach(function(a) {
                f.set(a, g), g += a.byteLength
            });
            e = new(c("Mp4Demuxer"))(new DataView(f.buffer, f.byteOffset, f.byteLength));
            while (!e.atEnd()) {
                a = e.parseBox();
                if (a.getType() === c("Mp4DASHEventMessageBox").canonicalType) {
                    var h = e.parseCanonicalBox(c("Mp4DASHEventMessageBox"), e.parseFullBox(a));
                    if (h instanceof c("Mp4DASHEventMessageBox")) {
                        h = h.getMessageData();
                        h = new(c("DataViewReader"))(h).readZeroTerminatedString(h.byteLength);
                        try {
                            h = JSON.parse(h);
                            Array.isArray(h) && h.filter(function(a) {
                                return Array.isArray(a) && a.length === 2
                            }).forEach(function(a) {
                                var c = a[0];
                                a = a[1];
                                d.set(c, {
                                    displayTimestamp: null,
                                    downloadTimestamp: b,
                                    hasBeenFlushedAsDownloaded: !1,
                                    presentationTimestamp: a,
                                    traceId: c
                                })
                            })
                        } catch (a) {}
                    }
                }
                e.skipBox(a)
            }
            return d
        };
        b.$14 = function(a, b) {
            var c = this,
                d = "null",
                e = Date.now(),
                f = new Map(),
                g = "";
            a.forEach(function(a) {
                var b = a[0].toLowerCase();
                a = a[1];
                if (b === h && a) {
                    var m = a.split(",");
                    m.forEach(function(a) {
                        a = a.split(":");
                        var b = +a[0];
                        a = +a[1];
                        f.set(b, {
                            displayTimestamp: null,
                            downloadTimestamp: e,
                            hasBeenFlushedAsDownloaded: !1,
                            presentationTimestamp: a,
                            traceId: b
                        })
                    })
                }
                b === i && (g = a);
                c.$2 === null && b === j && (c.$2 = parseInt(a, 10));
                (b === k || b === l) && parseInt(a, 10) && (d = b === k ? "origin" : "edge")
            });
            a = b || {};
            a.hit = d;
            return f.size && g !== "" ? {
                tracedFrames: f,
                eventMetaData: a,
                parentSource: g,
                streamType: this.$2
            } : null
        };
        b.$12 = function(a, b, c) {
            var d = this.$14(a, c);
            if (d === null || d === void 0 || d.parentSource === "") return;
            if (b == null ? void 0 : b.length) {
                a = this.$13(b);
                a.forEach(function(a, b) {
                    d.tracedFrames.set(b, a)
                })
            }
            this.$6 = this.$6.concat(Array.from(d.tracedFrames.values()));
            c = d.tracedFrames.keys();
            for (var b = c, a = Array.isArray(b), c = 0, b = a ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (a) {
                    if (c >= b.length) break;
                    e = b[c++]
                } else {
                    c = b.next();
                    if (c.done) break;
                    e = c.value
                }
                e = e;
                this.$9(this.$4, "SEGMENT", e, d.parentSource, "SUCCESS", d.eventMetaData)
            }
        };
        b.$10 = function(a, b) {
            this.$12(a, null, b)
        };
        b.handleXHR = function(a, b) {
            this.handleHeadersString(a.getAllResponseHeaders(), b)
        };
        b.getLiveTraceContext = function() {
            return {
                streamId: this.$1,
                streamType: this.$2 || 0,
                sourceId: this.$3
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerOnViewability.react", ["DOMRectIsEqual", "DOMRectReadOnly", "VideoPlayerViewabilityConstants", "emptyFunction", "react", "useIntersectionObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useMemo,
        k = b.useRef,
        l = 10,
        m = [.25, .75, .99, 1].concat(new Array(10).fill().map(function(a, b) {
            return b / 10
        }));

    function a(a) {
        var b = a.viewportMargins,
            d = k(-1),
            e = k(-1),
            f = k(c("DOMRectReadOnly").fromRect({
                height: 0,
                width: 0,
                x: 0,
                y: 0
            })),
            g = k(null),
            n = k(null);
        b = -b.top + "px " + -b.right + "px " + -b.bottom + "px " + -b.left + "px";
        var o = a.onVideoPlayerViewabilityInfoChange || c("emptyFunction"),
            p = l,
            q = i(function(a) {
                if (a.time > e.current && !c("DOMRectIsEqual")(a.boundingClientRect, f.current)) {
                    var b = a.boundingClientRect,
                        d = b.height,
                        h = b.width,
                        i = b.x;
                    b = b.y;
                    var j = g.current;
                    d = c("DOMRectReadOnly").fromRect({
                        height: d,
                        width: h,
                        x: i,
                        y: b
                    });
                    f.current = d;
                    e.current = a.time;
                    if (j === null || j <= 0) return;
                    if (j <= c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE) return;
                    o({
                        positionToViewport: d,
                        visiblePercentage: j
                    })
                }
            }, [f, g, o]),
            r = i(function(a) {
                if (a.time > d.current && (a.intersectionRatio !== g.current || !c("DOMRectIsEqual")(a.boundingClientRect, f.current))) {
                    var b = a.boundingClientRect,
                        h = b.height,
                        i = b.width,
                        j = b.x;
                    b = b.y;
                    var k = a.intersectionRatio;
                    h = c("DOMRectReadOnly").fromRect({
                        height: h,
                        width: i,
                        x: j,
                        y: b
                    });
                    i = n.current;
                    j = i;
                    b = !1;
                    var l = Math.abs((i || 0) * 100 - (k || 0) * 100);
                    (k !== null && l >= 1 || l > 0 && k < (i || 0)) && (j = k, n.current = k, b = !0);
                    g.current = k;
                    d.current = a.time;
                    l = f.current;
                    f.current = h;
                    e.current = a.time;
                    if (!b && c("DOMRectIsEqual")(l, h)) return;
                    j !== null && o({
                        positionToViewport: h,
                        visiblePercentage: j
                    })
                }
            }, [e, f, g, o, d]),
            s = j(function() {
                var b = [];
                for (var a = 1; a <= p; a++) b.push("-" + (100 - a / p * 100) + "% 0% 0% 0%");
                return b
            }, [p]),
            t = k([]);
        t.current = [];
        for (var u = 0; u < s.length; u++) t.current.push(i(c("useIntersectionObserver")(q, {
            root: null,
            rootMargin: s[u],
            threshold: m
        }), [s[u], m, c("useIntersectionObserver")]));
        var v = t.current.length,
            w = i(function(a) {
                for (var b = 0; b < v; b++) t.current[b](a)
            }, [v, t]),
            x = i(c("useIntersectionObserver")(r, {
                root: null,
                rootMargin: b,
                threshold: m
            }), [r, b, m, c("useIntersectionObserver")]);
        u = i(function(a) {
            x(a), w(a)
        }, [x, w]);
        return h.jsx("div", {
            className: "k4urcfbm hwddc3l5 datstx6m",
            ref: u,
            children: h.Children.only(a.children)
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("createVideoStateHook", ["VideoPlayerHooks", "gkx", "react", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useEffect,
        i = e.useRef,
        j = e.useState,
        k = new Set();

    function a(a) {
        var b = new Map();
        k.add(b);

        function e() {
            var a = d("VideoPlayerHooks").useInstanceKey();
            b.has(a) || b.set(a, {
                consumers: new Set(),
                key: a,
                lastValue: void 0
            });
            var e = b.get(a);
            if (e == null) throw c("unrecoverableViolation")('createVideoStateHook useInstance missing instance by key "' + a + '"', "comet_video_player");
            return e
        }

        function f(a, b) {
            a.consumers.add(b)
        }

        function g(a, b) {
            a.consumers["delete"](b)
        }

        function l(a, b, c) {
            a.lastValue = b, a.consumers.forEach(function(a) {
                c !== a && a(b)
            })
        }

        function m(a) {
            var b = e(),
                c = i(b);
            c.current = b;
            a = b.lastValue != null ? b.lastValue : a;
            var d = i(a);
            d.current = a;
            a = j(a);
            var k = a[0],
                m = a[1];
            h(function() {
                m(d.current);
                f(b, m);
                return function() {
                    g(b, m)
                }
            }, [b]);
            h(function() {
                l(c.current, k, m)
            }, [k]);
            return [k, m]
        }

        function a(a) {
            a = m(a);
            a[0];
            a = a[1];
            return a
        }

        function n(a) {
            a = m(a);
            var b = a[0];
            a[1];
            return b
        }
        return {
            setterHook: a,
            stateHook: m,
            valueHook: n
        }
    }

    function b(a) {
        h(function() {
            return function() {
                k.forEach(function(b) {
                    b["delete"](a)
                })
            }
        }, [a])
    }
    f = b;
    g.createVideoStateHook = a;
    g.useCleanupVideoStateHooks_INTERNAL = f
}), 98);
__d("renderVideoPlayerImplementation", ["react", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        if (a.typename === "VideoPlayerMockImplementation") return h.jsx(a.Component, babelHelpers["extends"]({}, b, a.data));
        else if (a.typename === "VideoPlayerOzImplementation") return h.jsx(a.Component, babelHelpers["extends"]({}, b, a.data));
        else if (a.typename === "VideoPlayerProgressiveImplementation") return h.jsx(a.Component, babelHelpers["extends"]({}, b, a.data));
        else if (a.typename === "VideoPlayerShakaImplementation") return h.jsx(a.Component, babelHelpers["extends"]({}, b, a.data));
        else throw new(c("unrecoverableViolation"))('CoreVideoPlayer: Unrecognized implementation typename "' + a.typename + '".', "comet_video_player")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useCreateVideoPlayerPassiveViewabilityInfo", ["DOMRectReadOnly", "react", "removeFromArray"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;

    function a() {
        var a = h(function() {
            var a = [],
                b = {
                    positionToViewport: c("DOMRectReadOnly").fromRect({
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0
                    }),
                    visiblePercentage: 0
                };
            b = null;
            return {
                setVideoPlayerPassiveViewabilityInfo: function(c) {
                    b = c, a.forEach(function(a) {
                        return a()
                    })
                },
                videoPlayerPassiveViewabilityInfo: {
                    getCurrent: function() {
                        return b
                    },
                    subscribe: function(b) {
                        a.push(b);
                        return {
                            remove: function() {
                                c("removeFromArray")(a, b)
                            }
                        }
                    }
                }
            }
        });
        a = a[0];
        var b = a.setVideoPlayerPassiveViewabilityInfo;
        a = a.videoPlayerPassiveViewabilityInfo;
        return {
            setVideoPlayerPassiveViewabilityInfo: b,
            videoPlayerPassiveViewabilityInfo: a
        }
    }
    g["default"] = a
}), 98);
__d("videoPlayerUniqueID", ["guid"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = "id-vpuid-" + c("guid")();
        return a
    }
    g["default"] = a
}), 98);
__d("CoreVideoPlayer.react", ["CometObjectFitContainer.react", "CurrentUser", "ErrorMetadata", "VideoLiveTrace", "VideoPlayerAudioAvailabilityInfo", "VideoPlayerOnViewability.react", "createVideoStateHook", "err", "gkx", "react", "renderVideoPlayerImplementation", "unrecoverableViolation", "useCometSize_DO_NOT_USE", "useCreateVideoPlayerPassiveViewabilityInfo", "videoPlayerUniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useEffect,
        k = b.useRef,
        l = b.useState,
        m = 584;

    function n(a) {
        return a != null && isFinite(a) && a > 0 ? a : 0
    }

    function o(a) {
        if (a === "video_home_inline" || a === "inline") return {
            height: m,
            width: m
        };
        else return {
            height: 1080,
            width: 1920
        }
    }
    var p = function(a) {
        var b = c("useCometSize_DO_NOT_USE")(),
            d = b[0];
        b = b[1];
        b = (b = b) != null ? b : o(a);
        return [b, function(a) {
            return h.jsx(c("CometObjectFitContainer.react"), {
                debugRole: null,
                objectFitMode: "CONTAINER_SIZE",
                ref: d,
                children: a
            })
        }]
    };

    function a(a) {
        var b = a.accessToken,
            e = a.expiredVideoUrlRefreshHandler,
            f = a.fullscreenController,
            g = a.implementations,
            m = a.isFullscreen,
            o = a.onCoreVideoStatesChanged,
            q = a.productAttribution,
            r = a.renderWithCoreVideoStates,
            s = a.trackingDataEncrypted,
            t = a.trackingNodes,
            u = a.viewportMarginsForViewability,
            v = babelHelpers.objectWithoutPropertiesLoose(a, ["accessToken", "expiredVideoUrlRefreshHandler", "fullscreenController", "implementations", "isFullscreen", "onCoreVideoStatesChanged", "productAttribution", "renderWithCoreVideoStates", "trackingDataEncrypted", "trackingNodes", "viewportMarginsForViewability"]);
        a = l(function() {
            return c("videoPlayerUniqueID")()
        });
        var w = a[0];
        d("createVideoStateHook").useCleanupVideoStateHooks_INTERNAL(w);
        a = k(0);
        var x = k(null),
            y = c("useCreateVideoPlayerPassiveViewabilityInfo")(),
            z = y.setVideoPlayerPassiveViewabilityInfo,
            A = y.videoPlayerPassiveViewabilityInfo,
            B = v.broadcastId,
            C = v.isLiveStreaming,
            D = v.isLiveTraceEnabled;
        j(function() {
            x.current = Boolean(C) && Boolean(D) && B != null ? new(c("VideoLiveTrace"))(B, w, c("CurrentUser").getAccountID()) : null;
            return function() {
                x.current != null && (x.current = null)
            }
        }, [B, w, C, D]);
        y = p(v.subOrigin);
        var E = y[0];
        y = y[1];
        var F = i(function(a) {
                z(a)
            }, [z]),
            G = i(function(a) {
                var b, c = a.implementationController;
                a = a.videoState;
                b = {
                    adClientToken: v.adClientToken,
                    audioAvailabilityInfo: (b = v.audioAvailabilityInfo) != null ? b : d("VideoPlayerAudioAvailabilityInfo").VideoPlayerAudioAvailabilityInfoDefault,
                    autoplayGatingResult: v.autoplayGatingResult != null ? v.autoplayGatingResult : "unknown",
                    autoplaySetting: v.autoplaySetting,
                    broadcastStatus: v.broadcastStatus,
                    canAutoplay: v.canAutoplay != null ? v.canAutoplay : "allow",
                    controller: c,
                    dimensions: E,
                    duration: a.duration,
                    initialTracePolicy: v.initialTracePolicy,
                    instanceKey: w,
                    isFullscreen: m,
                    isNCSR: Boolean(v.isNCSR),
                    isPremiumMusicVideo: Boolean(v.isPremiumMusicVideo),
                    lastMuteReason: a.lastMuteReason,
                    lastPauseReason: a.lastPauseReason,
                    lastPlayReason: a.lastPlayReason,
                    loopCount: a.loopCount,
                    loopCurrent: a.loopCurrent,
                    originalHeight: v.originalHeight,
                    originalWidth: v.originalWidth,
                    videoFBID: v.videoFBID,
                    videoPlayerPassiveViewabilityInfo: A,
                    videoState: a,
                    volumeSetting: v.volumeSetting
                };
                o && o(b);
                return r(b)
            }, [v.adClientToken, v.autoplayGatingResult, v.autoplaySetting, v.broadcastStatus, v.canAutoplay, v.audioAvailabilityInfo, v.initialTracePolicy, v.originalHeight, v.originalWidth, v.videoFBID, E, w, m, o, r, A]);
        b = {
            accessToken: b,
            coreVideoPlayerMetaData: v,
            dimensions: E,
            instanceKey: w,
            playerImplementationInstanceCountRef: a,
            productAttribution: q,
            trackingDataEncrypted: s,
            trackingNodes: t,
            videoLiveTraceRef: x
        };
        if (g.length === 0) {
            if (!c("gkx")("1611172")) return null;
            a = c("err")("No implementations given to CoreVideoPlayer");
            a.metadata = new(c("ErrorMetadata"))();
            a.metadata.addEntry("COMET_VIDEO", "VIDEO_ID", String(v.videoFBID));
            throw c("unrecoverableViolation")("No implementations given to CoreVideoPlayer", "comet_video_player", {
                error: a
            })
        }
        q = Boolean(v.captionsUrl);
        s = Boolean(v.isLiveStreaming);
        e = {
            VideoPlayerShakaPerformanceLoggerClass: v.VideoPlayerShakaPerformanceLoggerClass,
            alt: v.alt,
            alwaysShowCaptions: v.alwaysShowCaptions,
            areCaptionsAutogenerated: v.areCaptionsAutogenerated,
            audioOnly: v.audioOnly,
            bufferEndLimit: v.bufferEndLimit,
            captionDisplayStyle: v.captionDisplayStyle,
            captionsUrl: v.captionsUrl,
            dimensions: E,
            disableLogging: v.disableLogging === !0,
            expiredVideoUrlRefreshHandler: e,
            fullscreenController: f,
            graphQLVideoDRMInfo: (t = v.graphQLVideoDRMInfo) != null ? t : null,
            graphQLVideoP2PSettings: (a = v.graphQLVideoP2PSettings) != null ? a : null,
            inbandCaptionsExpected: s,
            initialDesiredLatencyMs: v.desiredLatencyMs,
            initialLatencyToleranceMs: v.latencyToleranceMs,
            initialRepresentationIds: v.initialRepresentationIds,
            loadSequence: v.loadSequence,
            loggingMetaData: b,
            loopCount: v.loopCount,
            renderWithVideoImplementationStates: G,
            sideLoadCaptionsExpected: q,
            startTimestamp: n(v.startTimestamp),
            videoFBID: v.videoFBID,
            videoLiveTraceRef: x,
            videoPlayerPassiveViewabilityInfo: A,
            videoPlayerShakaPerformanceLoggerBuilder: v.videoPlayerShakaPerformanceLoggerBuilder
        };
        f = g[0];
        t = c("renderVideoPlayerImplementation")(f, e);
        t != null && (t = h.jsx(c("VideoPlayerOnViewability.react"), {
            onVideoPlayerViewabilityInfoChange: F,
            viewportMargins: u,
            children: t
        }));
        return y(t)
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CoreVideoPlayerFitParentContainer.react", ["DOMContainer.react", "cr:964538", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = h.forwardRef(function(a, b) {
        var c = a.children;
        a = a.debugRole;
        return h.jsx("div", babelHelpers["extends"]({}, null, {
            className: "k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb",
            ref: b,
            children: c
        }))
    });
    e = h.forwardRef(function(a, b) {
        var d = a.debugRole;
        d = a.domElement;
        return h.jsx(c("DOMContainer.react"), babelHelpers["extends"]({}, null, {
            className: "k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb",
            display: "block",
            ref: b,
            children: d
        }))
    });

    function a(a) {
        a = a.debugRole;
        a = document.createElement("div");
        a.className = "k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb";
        return a
    }
    g.CoreVideoPlayerFitParentContainer = b;
    g.CoreVideoPlayerFitParentDOMContainer = e;
    g.createFitParentContainerDiv = a
}), 98);
__d("GlobalVideoPortsRenderers.react", ["CoreVideoPlayer.react", "VideoPlayerContexts", "VideoPlayerPortalingPlaceInfoProvider.react", "emptyFunction", "gkx", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react"),
        j = i.useEffect,
        k = i.useLayoutEffect,
        l = i.useState,
        m = c("gkx")("3501") ? j : k;

    function a(a) {
        var b = a.coreVideoPlayerMetaData,
            e = a.currentPlaceID,
            f = a.currentVideoID,
            g = a.fullscreenController,
            i = a.implementations,
            j = a.isFullscreen,
            k = a.onCoreVideoStatesChanged,
            l = a.previousPlaceMetaData,
            m = a.trackingDataEncrypted,
            n = a.trackingNodes;
        a = a.viewportMarginsForViewability;
        var o = c("emptyFunction");
        return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider, {
            currentPlaceID: e,
            currentVideoID: f,
            portalingEnabled: !0,
            previousPlaceMetaData: l,
            thisPlaceID: e,
            children: h.jsx(c("CoreVideoPlayer.react"), babelHelpers["extends"]({}, b, {
                fullscreenController: g,
                implementations: i,
                isFullscreen: j,
                onCoreVideoStatesChanged: k,
                renderWithCoreVideoStates: o,
                trackingDataEncrypted: m,
                trackingNodes: n,
                viewportMarginsForViewability: a
            }))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a) {
        var b = a.currentPlaceID,
            c = a.currentVideoID,
            e = a.originalHeight,
            f = a.originalWidth,
            g = a.previousPlaceMetaData,
            i = a.renderPlaceholder;
        a = a.thisPlaceID;
        return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider, {
            currentPlaceID: b,
            currentVideoID: c,
            portalingEnabled: !0,
            previousPlaceMetaData: g,
            thisPlaceID: a,
            children: h.jsx(d("VideoPlayerContexts").VideoOriginalDimensionsContextMemoProvider, {
                originalHeight: e,
                originalWidth: f,
                children: i != null ? i() : null
            })
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";

    function e(a) {
        var b = a.currentPlaceID,
            c = a.currentVideoID,
            e = a.injectCoreVideoStatesRef,
            f = a.previousPlaceMetaData,
            g = a.renderComponents;
        a = a.thisPlaceID;
        var i = l(null),
            j = i[0],
            k = i[1];
        i = l(null);
        var n = i[0],
            o = i[1];
        m(function() {
            e.current = function(b, a) {
                b != null && o(function() {
                    return b
                }), k(a)
            };
            return function() {
                e.current = null
            }
        }, [e]);
        if (a === b && j != null) {
            if (n != null) throw n;
            return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider, {
                currentPlaceID: b,
                currentVideoID: c,
                portalingEnabled: !0,
                previousPlaceMetaData: f,
                thisPlaceID: a,
                children: g(j)
            })
        } else return null
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.GlobalVideoPortsPlayerRenderer = a;
    g.GlobalVideoPortsPlaceholderRenderer = b;
    g.GlobalVideoPortsVideoComponentsRenderer = e
}), 98);
__d("LSContactBlockedByViewerStatus.bs", ["bs_caml_int64"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 2];
    f.unblocked = a;
    f.messageBlocked = c;
    f.fullyBlocked = d
}), null);
__d("LSContactType.bs", ["bs_caml_int64"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 2];
    e = [0, 3];
    f.unknown = a;
    f.user = c;
    f.page = d;
    f.pagePersona = e
}), null);
__d("LSDatabaseType.bs", ["bs_caml_int64"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 2];
    e = [0, 3];
    b = [0, 4];
    var g = [0, 5],
        h = [0, 6],
        i = [0, 7],
        j = [0, 8],
        k = [0, 9],
        l = [0, 10],
        m = [0, 11],
        n = [0, 12],
        o = [0, 13],
        p = [0, 14],
        q = [0, 15],
        r = [0, 16],
        s = [0, 17],
        t = [0, 18],
        u = [0, 19],
        v = [0, 20],
        w = [0, 21],
        x = [0, 22],
        y = [0, 23],
        z = [0, 24],
        A = [0, 25],
        B = [0, 26],
        C = [0, 27],
        D = [0, 28],
        E = [0, 29],
        F = [0, 30],
        G = [0, 31],
        H = [0, 32],
        I = [0, 33],
        J = [0, 34],
        K = [0, 35],
        L = [0, 36],
        M = [0, 37],
        N = [0, 38],
        O = [0, 39],
        P = [0, 40],
        Q = [0, 41],
        R = [0, 42],
        S = [0, 43],
        T = [0, 44],
        U = [0, 45],
        V = [0, 46],
        W = [0, 47],
        X = [0, 48],
        Y = [0, 49],
        Z = [0, 50],
        $ = [0, 51],
        aa = [0, 52],
        ba = [0, 53],
        ca = [0, 54],
        da = [0, 55],
        ea = [0, 56],
        fa = [0, 57],
        ga = [0, 59],
        ha = [0, 60],
        ia = [0, 61],
        ja = [0, 62],
        ka = [0, 63],
        la = [0, 64],
        ma = [0, 65],
        na = [0, 66],
        oa = [0, 67],
        pa = [0, 68],
        qa = [0, 69],
        ra = [0, 70],
        sa = [0, 71],
        ta = [0, 72],
        ua = [0, 73],
        va = [0, 74],
        wa = [0, 75],
        xa = [0, 76],
        ya = [0, 77],
        za = [0, 78],
        Aa = [0, 79],
        Ba = [0, 80],
        Ca = [0, 81],
        Da = [0, 82],
        Ea = [0, 84],
        Fa = [0, 85],
        Ga = [0, 86],
        Ha = [0, 87],
        Ia = [0, 88],
        Ja = [0, 89],
        Ka = [0, 90],
        La = [0, 91],
        Ma = [0, 92],
        Na = [0, 93],
        Oa = [0, 94],
        Pa = [0, 95],
        Qa = [0, 96],
        Ra = [0, 97],
        Sa = [0, 98],
        Ta = [0, 99],
        Ua = [0, 100],
        Va = [0, 101],
        Wa = [0, 102],
        Xa = [0, 103],
        Ya = [0, 104],
        Za = [0, 105],
        $a = [0, 106];
    f.test = a;
    f.mailbox = c;
    f.contact = d;
    f.appAlerts = e;
    f.core = b;
    f.stories = g;
    f.presence = h;
    f.ranking = i;
    f.experiment = j;
    f.search = k;
    f.securemailbox = l;
    f.inboxAds = m;
    f.sticker = n;
    f.omnistoreRevisionTest = o;
    f.frx = p;
    f.payments = q;
    f.settings = r;
    f.gif = s;
    f.arEffects = t;
    f.platformExtensionSdk = u;
    f.businessTab = v;
    f.composerMenus = w;
    f.experimentalContactPhoneNumber = x;
    f.forwardContents = y;
    f.typing = z;
    f.qp = A;
    f.inthreadbanner = B;
    f.logSampling = C;
    f.threadTheme = D;
    f.mediaSend = E;
    f.contactUpload = F;
    f.aloha = G;
    f.omnistoreSimpleTest = H;
    f.booking = I;
    f.oneTimeSyncTest = J;
    f.threadEmoji = K;
    f.universalLinks = L;
    f.counters = M;
    f.emptyTest = N;
    f.accountSettings = O;
    f.videoChatLink = P;
    f.zeroRating = Q;
    f.connectivity = R;
    f.switchAccountBadging = S;
    f.emergencyPoll = T;
    f.cowatch = U;
    f.switchAccountProfiles = V;
    f.$$location = W;
    f.syncWatchdog = X;
    f.bloks = Y;
    f.mediaEditing = Z;
    f.pushNotifications = $;
    f.switchAccountBadgingRealtime = aa;
    f.dasmDebug = ba;
    f.testTwo = ca;
    f.dataTrace = da;
    f.mediaSharing = ea;
    f.pluginExtensions = fa;
    f.localUserSettings = ga;
    f.groups = ha;
    f.dabl = ia;
    f.linkedGroups = ja;
    f.fxcal = ka;
    f.rooms = la;
    f.proactiveWarnings = ma;
    f.messagingAds = na;
    f.supportInbox = oa;
    f.coreClient = pa;
    f.threadCoPresence = qa;
    f.marketplace = ra;
    f.carrierMessaging = sa;
    f.notificationsClient = ta;
    f.cat = ua;
    f.composerSettings = va;
    f.groupThreadImage = wa;
    f.coplayMetadata = xa;
    f.searchUserGroups = ya;
    f.tutorial = za;
    f.paidAds = Aa;
    f.avatarsCoPresence = Ba;
    f.graphql = Ca;
    f.transcribe = Da;
    f.ixtServerTrigger = Ea;
    f.novi = Fa;
    f.testFramework = Ga;
    f.broker = Ha;
    f.openMessenger = Ia;
    f.anonymousCredentials = Ja;
    f.mlModel = Ka;
    f.localAuth = La;
    f.soundBite = Ma;
    f.encryptedBackups = Na;
    f.businessOrderManagement = Oa;
    f.e2eeMessagingMetadataMailbox = Pa;
    f.communitiesMailbox = Qa;
    f.mostLikelyToPollQuestions = Ra;
    f.breakoutSessions = Sa;
    f.messagingNotificationConfigs = Ta;
    f.sandboxSelector = Ua;
    f.gamesBotThread = Va;
    f.fakeMessageStreamInternalOnly = Wa;
    f.coPresence = Xa;
    f.communityExclusive = Ya;
    f.clientOnlySample = Za;
    f.urlBlackhole = $a
}), null);
__d("LSSyncChannel.bs", ["bs_caml_int64"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").one;
    c = [0, 2];
    d = [0, 3];
    f.mqtt = a;
    f.http = c;
    f.dgw = d
}), null);
__d("isFastRefreshEnabledForCurrentDomain", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return !1
    }
    f["default"] = a
}), 66);
__d("MqttUnifiedClientConnectFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744057");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_connect", a);
    e.exports = c
}), null);
__d("MqttUnifiedClientDisconnectFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744058");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_disconnect", a);
    e.exports = c
}), null);
__d("MqttUnifiedClientIncomingPublishFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744059");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_incoming_publish", a);
    e.exports = c
}), null);
__d("MqttUnifiedClientOutgoingPublishFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744060");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_outgoing_publish", a);
    e.exports = c
}), null);
__d("MqttWsClientTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:MqttWsClientLoggerConfig")
}), null);
__d("MqttEnv", ["killswitch"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = Object.freeze({
        mqtt_waterfall_log_client_sampling: 1,
        mqtt_ws_polling_enabled: 3,
        mqtt_lp_use_fetch: 9,
        mqtt_fast_lp: 11,
        mqtt_lp_no_delay: 12,
        mqtt_enable_publish_over_polling: 13
    });
    d = function() {
        var a = b.prototype;
        a.random = function() {
            return this.$1 != null ? this.$1() : Math.random()
        };
        a.isUserLoggedInNow = function() {
            return this.$2 != null ? this.$2() : !0
        };
        a.setIsUserLoggedInNow = function(a) {
            this.$2 = a
        };
        a.clearTimeout = function(a) {
            function b(b) {
                return a.apply(this, arguments)
            }
            b.toString = function() {
                return a.toString()
            };
            return b
        }(function(a) {
            if (this.$3 != null) {
                this.$3(a);
                return
            }
            clearTimeout(a)
        });
        a.setTimeout = function(a) {
            function b(b, c) {
                return a.apply(this, arguments)
            }
            b.toString = function() {
                return a.toString()
            };
            return b
        }(function(a, b) {
            for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++) d[e - 2] = arguments[e];
            return this.$4 != null ? this.$4.apply(null, arguments) : setTimeout.apply(null, arguments)
        });
        a.getLoggerInstance = function() {
            return this.$5 != null ? this.$5() : h.getInstance()
        };
        a.genGk = function(a) {
            return this.$6 != null ? this.$6(a) : !1
        };
        a.killswitch = function(a) {
            return this.$7 != null ? this.$7(a) : c("killswitch")(a)
        };
        a.createSocket = function(a, b) {
            return this.$8 != null ? this.$8(a, b) : new WebSocket(a)
        };
        a.scheduleCallback = function(a) {
            return this.$9 != null ? this.$9(a) : a()
        };
        a.scheduleLoggingCallback = function(a) {
            return this.$10 != null ? this.$10(a) : a()
        };
        a.configRead = function(a, b) {
            return this.$11 != null ? this.$11(a, b) : b
        };
        a.configWrite = function(a, b) {
            this.$12 != null && this.$12(a, b)
        };

        function b() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = null, this.$5 = null, this.$6 = null, this.$7 = null, this.$8 = null, this.$9 = null, this.$10 = null, this.$11 = null, this.$12 = null
        }
        a.initialize = function(a, b, c, d, e, f, g, h, i, j, k, l) {
            this.$1 = a, this.$2 = b, this.$3 = c, this.$4 = d, this.$5 = e, this.$6 = f, this.$7 = l, this.$8 = g, this.$9 = h, this.$10 = i, this.$11 = j, this.$12 = k
        };
        return b
    }();
    var h = function() {
            function a() {}
            a.getInstance = function() {
                return new a()
            };
            var b = a.prototype;
            b.setAppId = function(a) {};
            b.eventLogConnect = function(a) {};
            b.eventLogPull = function(a) {};
            b.eventLogPullFinish = function(a) {};
            b.eventLogDisconnect = function(a) {};
            b.eventLogOutgoingPublish = function(a) {};
            b.eventLogIncomingPublish = function(a) {};
            b.eventLogPublishTimeout = function(a) {};
            b.eventLogMiscellaneousError = function(a) {};
            b.logIfLoggedOut = function() {};
            b.logError = function(a) {};
            b.logErrorWarn = function(a) {};
            b.logWarn = function(a) {};
            b.debugTrace = function(a) {};
            b.bumpCounter = function(a) {};
            return a
        }(),
        i = new d();

    function a(a) {
        i.setIsUserLoggedInNow(a)
    }
    g.MqttGkNames = b;
    g.Env = i;
    g.setIsUserLoggedInNow = a
}), 98);
__d("IrisSubscribeChecker", ["MqttEnv"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = d("MqttEnv").Env.getLoggerInstance();
            this.$2 = null;
            this.$3 = !1;
            this.$4 = !1;
            this.$5 = !1;
            this.$6 = !0;
            this.$7 = 0;
            this.$8 = a;
            if (typeof window !== "undefined") {
                a = window.location.hostname;
                (a === "m.facebook.com" || a === "mobile.facebook.com" || a === "mtouch.facebook.com") && (this.$6 = !1)
            }
        }
        var b = a.prototype;
        b.start = function() {
            this.$6 = !0
        };
        b.stop = function() {
            this.$6 = !1, this.$9()
        };
        b.onConnectAttempt = function() {};
        b.onConnectFailure = function() {
            this.$9()
        };
        b.onConnected = function() {
            var a = this;
            this.$7++;
            this.$9();
            this.$3 = !1;
            this.$4 = !1;
            this.$5 = !1;
            this.$6 && (this.$2 = d("MqttEnv").Env.setTimeout(function() {
                a.$10()
            }, 8e3))
        };
        b.onConnectSuccess = function() {};
        b.onConnectionLost = function() {
            this.$9()
        };
        b.onSubscribe = function(a) {
            a === "/t_ms" && (this.$3 = !0)
        };
        b.onUnsubscribe = function(a) {};
        b.onPublish = function(a) {
            (a === "/messenger_sync_get_diffs" || a === "/messenger_sync_create_queue") && (this.$4 = !0, this.$3 && (this.$5 = !0, this.$9()))
        };
        b.onMessage = function(a) {};
        b.onWSFatal = function() {};
        b.$9 = function() {
            this.$2 && (d("MqttEnv").Env.clearTimeout(this.$2), this.$2 = null)
        };
        b.$10 = function() {
            if (this.$4 === !1) {
                var a = this.$7 == 1 ? "no_iris_session_initialConnect" : "no_iris_session";
                this.$1.bumpCounter(a);
                this.$8() ? this.$1.bumpCounter(a + ".withProvider") : this.$1.bumpCounter(a + ".withoutProvider");
                this.$3 === !0 ? this.$1.bumpCounter(a + ".withTopicSubscribe") : this.$1.bumpCounter(a + ".withoutTopicSubscribe")
            }
            this.$3 === !1 && this.$1.bumpCounter("no_iris_topic_subscribe");
            this.$3 === !0 && this.$4 === !0 && this.$5 === !1 && this.$1.bumpCounter("session_before_topic_subscribe")
        };
        return a
    }();
    f.exports = a
}), 34);
__d("MqttConnectionHookCollection", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Set()
        }
        var b = a.prototype;
        b.addHook = function(a) {
            this.$1.add(a)
        };
        b.removeHook = function(a) {
            this.$1["delete"](a)
        };
        b.onConnectAttempt = function() {
            this.$1.forEach(function(a) {
                a.onConnectAttempt()
            })
        };
        b.onConnectFailure = function() {
            this.$1.forEach(function(a) {
                a.onConnectFailure()
            })
        };
        b.onConnected = function() {
            this.$1.forEach(function(a) {
                a.onConnected()
            })
        };
        b.onConnectSuccess = function() {
            this.$1.forEach(function(a) {
                a.onConnectSuccess()
            })
        };
        b.onConnectionLost = function() {
            this.$1.forEach(function(a) {
                a.onConnectionLost()
            })
        };
        b.onSubscribe = function(a) {
            this.$1.forEach(function(b) {
                b.onSubscribe(a)
            })
        };
        b.onUnsubscribe = function(a) {
            this.$1.forEach(function(b) {
                b.onUnsubscribe(a)
            })
        };
        b.onPublish = function(a) {
            this.$1.forEach(function(b) {
                b.onPublish(a)
            })
        };
        b.onMessage = function(a) {
            this.$1.forEach(function(b) {
                b.onMessage(a)
            })
        };
        b.onWSFatal = function() {
            this.$1.forEach(function(a) {
                a.onWSFatal()
            })
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("MqttAnalyticsHook", ["MqttEnv"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = function() {
        function a() {
            this.$1 = g.getLoggerInstance(), this.$2 = 0, this.$3 = 0, this.$4 = 0, this.$5 = 0, this.$1.bumpCounter("session_start"), g.isUserLoggedInNow() || this.$1.bumpCounter("session_start.logout")
        }
        var b = a.prototype;
        b.onConnectAttempt = function() {
            this.$1.bumpCounter("ws_connect_attempt")
        };
        b.onConnectFailure = function() {
            this.$3++, this.$1.bumpCounter("ws_connect_failure")
        };
        b.onConnected = function() {
            this.$1.bumpCounter("ws_connect_connected")
        };
        b.onConnectSuccess = function() {
            this.$2 === 0 && this.$1.bumpCounter("ws_connect_first_success"), this.$2++, this.$1.bumpCounter("ws_connect_success")
        };
        b.onConnectionLost = function() {
            this.$1.bumpCounter("ws_disconnect")
        };
        b.onSubscribe = function(a) {};
        b.onUnsubscribe = function(a) {};
        b.onPublish = function(a) {
            this.$1.bumpCounter("ws_publish." + a)
        };
        b.onMessage = function(a) {
            this.$1.bumpCounter("message_arrived." + a)
        };
        b.onWSFatal = function() {
            this.$1.bumpCounter("ws_fatal")
        };
        b.onPollRequestSent = function() {
            this.$1.bumpCounter("polling_request_send")
        };
        b.onPollRequestSuccess = function() {
            this.$1.bumpCounter("polling_request_succeed"), this.$4 === 0 && this.$1.bumpCounter("polling_first_success"), this.$4++
        };
        b.onPollResponse = function(a) {
            this.$1.bumpCounter("lp.message_arrived." + a)
        };
        b.onPollFinish = function() {
            this.$1.bumpCounter("polling_request_finish")
        };
        b.onPollRequestFailed = function(a) {
            this.$1.bumpCounter("polling_request_failed"), this.$1.bumpCounter("polling_request_failed_" + a), this.$5++
        };
        return a
    }();
    e.exports = a
}), null);
__d("MqttProtocolUtils", ["MqttEnv"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        if (a == null) return b;
        var c = new Uint8Array(a.length + b.length);
        c.set(a);
        c.set(b, a.length);
        return c
    }

    function b(a, b) {
        b = b;
        var c = 0,
            d = 1,
            e;
        do {
            if (b === a.length) return null;
            e = a[b++];
            c += (e & 127) * d;
            d *= 128
        } while ((e & 128) !== 0);
        return {
            value: c,
            offset: b
        }
    }

    function c(a) {
        a = a;
        var b = new Array(1);
        for (var c = 0; c < 4; c++) {
            var d = a % 128;
            a >>= 7;
            if (a > 0) b[c] = d | 128;
            else {
                b[c] = d;
                break
            }
        }
        return b
    }

    function h(a, b, c) {
        c = c;
        b[c++] = a >> 8;
        b[c++] = a % 256;
        return c
    }

    function e(a, b) {
        return 256 * a[b] + a[b + 1]
    }

    function g(a) {
        var b = 0;
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a.charCodeAt(c);
            e < 128 ? b += 1 : e < 2048 ? b += 2 : e >= 55296 && e <= 56319 ? (b += 4, c++) : b += 3
        }
        return b
    }

    function i(a, b, c, d) {
        d = h(b, c, d);
        j(a, c, d);
        return d + b
    }

    function j(a, b, c) {
        c = c;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a.charCodeAt(d);
            f < 128 ? b[c++] = f : f < 2048 ? (b[c++] = 192 | f >> 6, b[c++] = 128 | f & 63) : f < 55296 || f >= 57344 ? (b[c++] = 224 | f >> 12, b[c++] = 128 | f >> 6 & 63, b[c++] = 128 | f & 63) : (f = 65536 + ((f & 1023) << 10 | a.charCodeAt(++d) & 1023), b[c++] = 240 | f >> 18, b[c++] = 128 | f >> 12 & 63, b[c++] = 128 | f >> 6 & 63, b[c++] = 128 | f & 63)
        }
    }

    function k(a, b, c) {
        var d = [],
            e = b,
            f = 0;
        while (e < b + c) {
            var g = a[e++];
            if (g < 128) d[f++] = String.fromCharCode(g);
            else if (g > 191 && g < 224) {
                var h = a[e++];
                d[f++] = String.fromCharCode((g & 31) << 6 | h & 63)
            } else if (g > 239 && g < 365) {
                h = a[e++];
                var i = a[e++],
                    j = a[e++];
                h = ((g & 7) << 18 | (h & 63) << 12 | (i & 63) << 6 | j & 63) - 65536;
                d[f++] = String.fromCharCode(55296 + (h >> 10));
                d[f++] = String.fromCharCode(56320 + (h & 1023))
            } else {
                i = a[e++];
                j = a[e++];
                d[f++] = String.fromCharCode((g & 15) << 12 | (i & 63) << 6 | j & 63)
            }
        }
        return d.join("")
    }
    var l = function() {
        function a(a, b, c, d) {
            this.$1 = a, this.$2 = b, this.$5 = c, this.$6 = d, this.$4 = !1
        }
        var b = a.prototype;
        b.$7 = function() {
            var a = this;
            this.$4 ? (this.$4 = !1, this.$5(), this.$3 = d("MqttEnv").Env.setTimeout(function() {
                a.$7()
            }, this.$2() * 1e3)) : this.$6()
        };
        b.reset = function() {
            var a = this;
            this.$4 = !0;
            this.$3 && (d("MqttEnv").Env.clearTimeout(this.$3), this.$3 = null);
            var b = this.$1() * 1e3;
            b > 0 && (this.$3 = d("MqttEnv").Env.setTimeout(function() {
                a.$7()
            }, b))
        };
        b.cancel = function() {
            this.$3 && (d("MqttEnv").Env.clearTimeout(this.$3), this.$3 = null)
        };
        return a
    }();
    f.exports = {
        UTF8Length: g,
        convertStringToUTF8: j,
        concatBuffers: a,
        decodeMultiByteInt: b,
        convertUTF8ToString: k,
        encodeMultiByteInt: c,
        writeUInt16BE: h,
        readUInt16BE: e,
        writeString: i,
        Pinger: l
    }
}), 34);
__d("MqttUtils", ["MqttEnv"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env,
        h = {
            endpointWithSessionId: function(a, b) {
                return h.endpointWithExtraParameter(a, "sid", b.toString())
            },
            endpointWithExtraParameters: function(a, b) {
                var c = a;
                b.forEach(function(a, b, d) {
                    c = h.endpointWithExtraParameter(c, b, a)
                });
                return c
            },
            endpointWithExtraParameter: function(a, b, c) {
                if (a.indexOf("?") > 0) return a + "&" + b + "=" + c;
                else return a + "?" + b + "=" + c
            },
            generateSessionId: function() {
                return Math.floor(g.random() * Number.MAX_SAFE_INTEGER)
            },
            promiseDone: function(a, b, c) {
                var d = arguments.length > 1 ? a.then(b, c) : a;
                d.then(null, function(a) {
                    g.setTimeout(function() {
                        if (a instanceof Error) throw a;
                        else throw new Error("promiseDone")
                    }, 0)
                })
            },
            promiseDoneWithTimeout: function(a, b, c, d) {
                var e = !1;
                g.setTimeout(function() {
                    e || (e = !0, c(new Error("promise timeout")))
                }, d);
                h.promiseDone(a, function(a) {
                    e || (e = !0, b(a))
                }, function(a) {
                    e || (e = !0, c(a))
                })
            },
            sprintf: function(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                var e = 0;
                return a.replace(/%s/g, function() {
                    return String(c[e++])
                })
            },
            hasWSSupport: function() {
                return "WebSocket" in a && a.WebSocket != null && "CLOSING" in a.WebSocket.prototype
            },
            getWSAvailability: function() {
                var b = "";
                if ("WebSocket" in a && a.WebSocket !== null) b += "W";
                else return "none";
                "CLOSING" in a.WebSocket.prototype && (b += "C");
                return b
            }
        };
    e.exports = h
}), null);
__d("MqttProtocolCodec", ["MqttProtocolUtils", "MqttUtils"], (function(a, b, c, d, e, f) {
    var g = (c = b("MqttProtocolUtils")).UTF8Length,
        h = c.convertStringToUTF8,
        i = c.convertUTF8ToString,
        j = c.decodeMultiByteInt,
        k = c.encodeMultiByteInt,
        l = c.readUInt16BE,
        m = c.writeString,
        n = c.writeUInt16BE,
        o = b("MqttUtils").sprintf,
        p = Object.freeze({
            CONNECT: 1,
            CONNACK: 2,
            PUBLISH: 3,
            PUBACK: 4,
            SUBSCRIBE: 8,
            SUBACK: 9,
            UNSUBSCRIBE: 10,
            UNSUBACK: 11,
            PINGREQ: 12,
            PINGRESP: 13,
            DISCONNECT: 14
        }),
        q = [0, 6, 77, 81, 73, 115, 100, 112, 3];

    function r(a, b) {
        b = b;
        var c = b,
            d = a[b],
            e = d >> 4;
        b += 1;
        var f = j(a, b);
        if (f == null) return {
            wireMessage: null,
            position: c
        };
        b = f.offset;
        f = b + f.value;
        if (f > a.length) return {
            wireMessage: null,
            position: c
        };
        var g;
        switch (e) {
            case p.CONNACK:
                c = a[b++];
                c = !!(c & 1);
                var h = a[b++];
                g = new u(c, h);
                break;
            case p.PUBLISH:
                c = d & 15;
                h = c >> 1 & 3;
                d = l(a, b);
                b += 2;
                var k = i(a, b, d);
                b += d;
                d = null;
                h === 1 && (d = l(a, b), b += 2);
                var m = w.createWithBytes(a.subarray(b, f)),
                    n = (c & 1) === 1;
                c = (c & 8) === 8;
                g = new x(k, m, h, d, n, c);
                break;
            case p.PINGREQ:
                g = new s("PINGREQ");
                break;
            case p.PINGRESP:
                g = new s("PINGRESP");
                break;
            case p.PUBACK:
            case p.UNSUBACK:
                k = l(a, b);
                g = new v(e === p.PUBACK ? "PUBACK" : "UNSUBACK", k);
                break;
            case p.SUBACK:
                m = l(a, b);
                b += 2;
                h = a.subarray(b, f);
                g = new t(m, h);
                break;
            default:
                throw new Error(o("Invalid MQTT message type %s.", e))
        }
        return {
            wireMessage: g,
            position: f
        }
    }

    function a(a) {
        var b = [],
            c = 0;
        while (c < a.length) {
            var d = r(a, c),
                e = d.wireMessage;
            c = d.position;
            if (e) b.push(e);
            else break
        }
        d = null;
        c < a.length && (d = a.subarray(c));
        return {
            messages: b,
            remaining: d
        }
    }
    d = function() {
        "use strict";

        function a(a) {
            this.messageType = p[a]
        }
        var b = a.prototype;
        b.encode = function() {
            throw new TypeError("Cannot abstract class WireMessage")
        };
        return a
    }();
    var s = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);

        function a(a) {
            return b.call(this, a) || this
        }
        var c = a.prototype;
        c.encode = function() {
            var a = new ArrayBuffer(2),
                b = new Uint8Array(a);
            b[0] = (this.messageType & 15) << 4;
            return a
        };
        return a
    }(d);
    f = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.call(this, "DISCONNECT") || this
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4,
                b = new ArrayBuffer(2),
                c = new Uint8Array(b);
            c[0] = a;
            c.set(k(0), 1);
            return b
        };
        return b
    }(d);
    var t = function(b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a, c) {
                var d;
                d = b.call(this, "SUBACK") || this;
                d.messageIdentifier = a;
                d.returnCode = c;
                return d
            }
            return a
        }(d),
        u = function(b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a, c) {
                var d;
                d = b.call(this, "CONNACK") || this;
                d.sessionPresent = a;
                d.returnCode = c;
                return d
            }
            return a
        }(d),
        v = function(b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a, c) {
                a = b.call(this, a) || this;
                a.messageIdentifier = c;
                return a
            }
            var c = a.prototype;
            c.encode = function() {
                var a = (this.messageType & 15) << 4,
                    b = 2,
                    c = k(b),
                    d = c.length + 1;
                b = new ArrayBuffer(b + d);
                var e = new Uint8Array(b);
                e[0] = a;
                e.set(c, 1);
                d = n(this.messageIdentifier, e, d);
                return b
            };
            return a
        }(d);
    c = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this, "CONNECT") || this;
            d.clientId = b;
            d.connectOptions = c;
            return d
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4,
                b = q.length + 3;
            b += g(this.clientId) + 2;
            b += g(this.connectOptions.userName) + 2;
            var c = k(b);
            b = new ArrayBuffer(1 + c.length + b);
            var d = new Uint8Array(b);
            d[0] = a;
            a = 1;
            d.set(c, 1);
            a += c.length;
            d.set(q, a);
            a += q.length;
            c = 2 | 128;
            d[a++] = c;
            a = n(this.connectOptions.getKeepAliveIntervalSeconds(), d, a);
            a = m(this.clientId, g(this.clientId), d, a);
            a = m(this.connectOptions.userName, g(this.connectOptions.userName), d, a);
            return b
        };
        return b
    }(d);
    b = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e) {
            var f;
            f = a.call(this, b) || this;
            f.topic = c;
            if (d < 0 && d > 1 || d === 1 && e == null) throw new TypeError(o("Argument Invalid. qos: %s messageType: %s.", d, b));
            f.qos = d;
            f.messageIdentifier = e;
            return f
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4;
            a |= 2;
            var b = g(this.topic),
                c = 2 + b + 2;
            this.messageType === p.SUBSCRIBE && (c += 1);
            var d = k(c);
            c = new ArrayBuffer(1 + d.length + c);
            var e = new Uint8Array(c);
            e[0] = a;
            a = 1;
            e.set(d, 1);
            a += d.length;
            this.messageIdentifier != null && (a = n(this.messageIdentifier, e, a));
            a = m(this.topic, b, e, a);
            this.messageType === p.SUBSCRIBE && this.qos != null && (e[a++] = this.qos);
            return c
        };
        return b
    }(d);
    var w = function() {
            "use strict";

            function a(a, b) {
                this.payloadString = a, this.payloadBytes = b
            }
            a.createWithString = function(b) {
                var c = new Uint8Array(new ArrayBuffer(g(b)));
                h(b, c, 0);
                return new a(b, c)
            };
            a.createWithBytes = function(b) {
                var c = i(b, 0, b.length);
                return new a(c, b)
            };
            var b = a.prototype;
            b.string = function() {
                return this.payloadString
            };
            b.bytes = function() {
                return this.payloadBytes
            };
            return a
        }(),
        x = function(b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a, c, d, e, f, g) {
                var h;
                h = b.call(this, "PUBLISH") || this;
                h.topic = a;
                h.payloadMessage = c;
                h.qos = d;
                h.messageIdentifier = e;
                h.retained = f != null ? f : !1;
                h.duplicate = g != null ? g : !1;
                if (h.qos === 1 && h.messageIdentifier == null) throw new TypeError("Argument Invalid. messageIdentifier: null and qos: 1");
                return h
            }
            var c = a.prototype;
            c.encode = function() {
                var a = (this.messageType & 15) << 4;
                this.duplicate && (a |= 8);
                a = a |= this.qos << 1;
                this.retained && a != 1;
                var b = g(this.topic),
                    c = b + 2,
                    d = this.qos === 0 ? 0 : 2;
                c += d;
                d = this.payloadMessage.bytes();
                c += d.byteLength;
                var e = k(c);
                c = new ArrayBuffer(1 + e.length + c);
                var f = new Uint8Array(c);
                f[0] = a;
                f.set(e, 1);
                a = 1 + e.length;
                a = m(this.topic, b, f, a);
                this.qos !== 0 && this.messageIdentifier != null && (a = n(this.messageIdentifier, f, a));
                f.set(d, a);
                return c
            };
            return a
        }(d);
    e.exports = {
        MESSAGE_TYPE: p,
        WireMessage: {
            Base: d,
            PubAckUnsubAck: v,
            Ping: s,
            ConnAck: u,
            Connect: c,
            Disconnect: f,
            Subscription: b,
            Publish: x
        },
        createMessageWithString: w.createWithString,
        decodeMessage: r,
        decodeByteMessages: a,
        Message: w
    }
}), null);
__d("MqttTypes", [], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a, b, c) {
        this.errorCode = a, this.errorName = b, this.errorMessage = c
    };
    b = function(a, b) {
        this.mqttError = a, this.connAck = b
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            d === void 0 && (d = null);
            c = a.call(this, c) || this;
            c.isRecoverable = b;
            c.originalError = d;
            return c
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    g.MqttError = a;
    g.ConnectFailure = b;
    g.MqttChannelError = c
}), 98);
__d("MqttProtocolClient", ["MqttEnv", "MqttProtocolCodec", "MqttProtocolUtils", "MqttTypes", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 30,
        i = 6e4,
        j = {
            SOCKET_ERROR: new(d("MqttTypes").MqttError)(1, "SOCKET_ERROR", "Socket error"),
            SOCKET_MESSAGE: new(d("MqttTypes").MqttError)(2, "SOCKET_MESSAGE", "Unable to parse invalid socket message"),
            INVALID_DATA_TYPE: new(d("MqttTypes").MqttError)(3, "INVALID_DATA_TYPE", "Received non-arraybuffer from socket."),
            CONNECT_TIMEOUT: new(d("MqttTypes").MqttError)(4, "CONNECT_TIMEOUT", "Connect timed out"),
            CONNACK_FAILURE: new(d("MqttTypes").MqttError)(5, "CONNACK_FAILURE", "Connection failure due to connack"),
            PING_TIMEOUT: new(d("MqttTypes").MqttError)(6, "PING_TIMEOUT", "Ping timeout"),
            APP_DISCONNECT: new(d("MqttTypes").MqttError)(7, "APP_DISCONNECT", "Disconnect initiated by app"),
            SERVER_DISCONNECT: new(d("MqttTypes").MqttError)(8, "SERVER_DISCONNECT", "Disconnect message sent my server"),
            SOCKET_CLOSE: new(d("MqttTypes").MqttError)(9, "SOCKET_CLOSE", "Socket connection closed")
        };
    a = function() {
        function a(a) {
            this.$3 = a, this.$2 = {
                userName: "",
                mqttVersion: 3,
                getKeepAliveIntervalSeconds: function() {
                    return 10
                },
                getKeepAliveTimeoutSeconds: function() {
                    return 10
                },
                ignoreSubProtocol: !1,
                onConnectSuccess: function() {},
                onConnectFailure: function(a, b) {},
                onConnection: function() {},
                onConnectionLost: function(a, b) {},
                onMessageArrived: function(a, b, c) {},
                onMessageDelivered: function(a, b) {}
            }, this.$1 = "mqttwsclient", this.$4 = 0, this.$5 = !1, this.$9 = d("MqttEnv").Env.getLoggerInstance()
        }
        var b = a.prototype;
        b.connect = function(a) {
            var b, e = this;
            if (this.$5) throw new Error("Invalid state: connect - already connected");
            this.$2 = a;
            this.setConnected(!1);
            this.$7 != null && (d("MqttEnv").Env.clearTimeout(this.$7), this.$7 = null);
            b = (b = c("qex")._("525")) != null ? b : h;
            this.$7 = d("MqttEnv").Env.setTimeout(function() {
                e.$9.bumpCounter("protocol.error.connect.timeout"), e.$11(j.CONNECT_TIMEOUT)
            }, b * 1e3);
            this.$6 = d("MqttEnv").Env.createSocket(this.$3);
            this.$6.binaryType = "arraybuffer";
            this.$6.onopen = function() {
                e.setConnected(!0), e.$12(new(d("MqttProtocolCodec").WireMessage.Connect)(e.$1, a)), a.onConnection()
            };
            this.$6.onmessage = function(a) {
                a = a.data;
                if (!(a instanceof ArrayBuffer)) {
                    e.$9.bumpCounter("protocol.error.onmessage.type");
                    e.$11(j.INVALID_DATA_TYPE);
                    return
                }
                try {
                    a = new Uint8Array(a);
                    e.$10 != null && (a = d("MqttProtocolUtils").concatBuffers(e.$10, a), e.$9.bumpCounter("protocol.debug.usingMessagesBuffer"), delete e.$10, e.$10 = null);
                    a = d("MqttProtocolCodec").decodeByteMessages(a);
                    var b = a.messages;
                    e.$10 = a.remaining;
                    for (var a = 0; a < b.length; a++) e.handleMessage(b[a])
                } catch (a) {
                    e.$10 = null, e.$9.logError(a, j.SOCKET_MESSAGE.errorMessage), e.$9.bumpCounter("protocol.error.onmessage.parse"), e.$11(j.SOCKET_MESSAGE, a.message)
                }
            };
            this.$6.onerror = function(a) {
                e.$9.bumpCounter("protocol.error.socket"), e.$11(j.SOCKET_ERROR)
            };
            this.$6.onclose = function(a) {
                e.$9.bumpCounter("protocol.socket.close"), e.$11(j.SOCKET_CLOSE, a.code + " : " + a.reason)
            };
            this.$8 != null && this.$8.cancel();
            this.$8 = new(d("MqttProtocolUtils").Pinger)(a.getKeepAliveIntervalSeconds, a.getKeepAliveTimeoutSeconds, this.$12.bind(this, new(d("MqttProtocolCodec").WireMessage.Ping)("PINGREQ")), this.$11.bind(this, j.PING_TIMEOUT))
        };
        b.$13 = function() {
            this.setConnected(!1), this.$8 != null && this.$8.cancel(), this.$7 != null && (d("MqttEnv").Env.clearTimeout(this.$7), this.$7 = null), this.$6 != null && (this.$6.onopen = function(a) {}, this.$6.onmessage = function(a) {}, this.$6.onerror = function(a) {}, this.$6.onclose = function(a) {}, this.$6.readyState === this.$6.OPEN && this.$6.close(), delete this.$6, this.$6 = null), this.$2.onConnectSuccess = function() {}, this.$2.onConnectFailure = function(a) {}, this.$2.onConnection = function() {}, this.$2.onConnectionLost = function(a) {}, this.$2.onMessageArrived = function(a, b, c) {}, this.$2.onMessageDelivered = function(a, b) {}
        };
        b.disconnect = function() {
            if (this.$6 == null || this.$6.readyState !== this.$6.OPEN || !this.$5) {
                this.$13();
                return
            }
            this.$12(new(d("MqttProtocolCodec").WireMessage.Disconnect)());
            this.$9.bumpCounter("protocol.debug.disconnect");
            this.$11(j.APP_DISCONNECT)
        };
        b.isConnected = function() {
            return this.$5
        };
        b.setConnected = function(a) {
            this.$5 = a
        };
        b.subscribe = function(a) {
            if (!this.$5) {
                this.$9.bumpCounter("protocol.error.subscribe.notconnected");
                throw new Error("Invalid state: subscribe - not connected")
            }
            this.$9.bumpCounter("protocol.subscribe." + a);
            a = new(d("MqttProtocolCodec").WireMessage.Subscription)("SUBSCRIBE", a, 0, this.$14());
            this.$12(a)
        };
        b.unsubscribe = function(a) {
            if (!this.$5) {
                this.$9.bumpCounter("protocol.error.unsubscribe.notconnected");
                throw new Error("Invalid state: unsubscribe - not connected")
            }
            this.$9.bumpCounter("protocol.unsubscribe." + a);
            a = new(d("MqttProtocolCodec").WireMessage.Subscription)("UNSUBSCRIBE", a, 0, this.$14());
            this.$12(a)
        };
        b.publish = function(a, b, c) {
            this.$5 || this.$9.bumpCounter("protocol.error.publish.notconnected");
            this.$9.bumpCounter("protocol.publish." + a);
            var e = this.$14();
            a = new(d("MqttProtocolCodec").WireMessage.Publish)(a, d("MqttProtocolCodec").createMessageWithString(b), c, e);
            this.$12(a);
            return e
        };
        b.$14 = function() {
            ++this.$4 === i && (this.$4 = 1);
            return this.$4
        };
        b.$11 = function(a, b, c) {
            b === void 0 && (b = null);
            this.$9.bumpCounter("protocol.debug.disconnect.internal." + a.errorName);
            this.$9.bumpCounter("protocol.debug.disconnect.internal");
            var e = this.$5,
                f = this.$2,
                g = f.onConnectionLost,
                h = f.onConnectFailure;
            this.setConnected(!1);
            this.$13();
            e ? d("MqttEnv").Env.scheduleCallback(function() {
                g(a, b)
            }) : d("MqttEnv").Env.scheduleCallback(function() {
                h(new(d("MqttTypes").ConnectFailure)(a, c != null ? c : -1), b)
            })
        };
        b.$12 = function(a) {
            var b = this.$6;
            if (b == null) return;
            if (b.readyState != b.OPEN) return;
            b.send(a.encode())
        };
        b.handleMessage = function(a) {
            var b = this;
            switch (a.messageType) {
                case d("MqttProtocolCodec").MESSAGE_TYPE.CONNACK:
                    this.$7 != null && (d("MqttEnv").Env.clearTimeout(this.$7), this.$7 = null);
                    if (a instanceof d("MqttProtocolCodec").WireMessage.ConnAck) {
                        var c = a;
                        if (c.returnCode !== 0) {
                            this.$9.bumpCounter("protocol.error.connack.invalidreturncode");
                            this.setConnected(!1);
                            this.$11(j.CONNACK_FAILURE, "connack code=" + c.returnCode, c.returnCode);
                            return
                        }
                        d("MqttEnv").Env.scheduleCallback(function() {
                            b.$2.onConnectSuccess()
                        });
                        this.$8 != null && this.$8.reset()
                    }
                    break;
                case d("MqttProtocolCodec").MESSAGE_TYPE.PUBLISH:
                    if (a instanceof d("MqttProtocolCodec").WireMessage.Publish) {
                        var e = a;
                        d("MqttEnv").Env.scheduleCallback(function() {
                            b.$2.onMessageArrived(e.topic, e.payloadMessage, e.qos)
                        });
                        c = e.messageIdentifier;
                        this.$9.bumpCounter("protocol.publish.received");
                        if (e.qos === 1 && c != null) {
                            c = new(d("MqttProtocolCodec").WireMessage.PubAckUnsubAck)("PUBACK", c);
                            this.$12(c)
                        }
                    }
                    break;
                case d("MqttProtocolCodec").MESSAGE_TYPE.PUBACK:
                    if (a instanceof d("MqttProtocolCodec").WireMessage.PubAckUnsubAck) {
                        c = a;
                        var f = c.messageIdentifier;
                        this.$9.bumpCounter("protocol.puback.received");
                        d("MqttEnv").Env.scheduleCallback(function() {
                            b.$2.onMessageDelivered("", f)
                        })
                    }
                    break;
                case d("MqttProtocolCodec").MESSAGE_TYPE.PINGRESP:
                    this.$8 != null && this.$8.reset();
                    break;
                case d("MqttProtocolCodec").MESSAGE_TYPE.DISCONNECT:
                    this.$11(j.SERVER_DISCONNECT);
                    break;
                case d("MqttProtocolCodec").MESSAGE_TYPE.SUBACK:
                    this.$9.bumpCounter("protocol.suback.received");
                    break;
                case d("MqttProtocolCodec").MESSAGE_TYPE.UNSUBACK:
                    this.$9.bumpCounter("protocol.unsuback.received");
                    break;
                default:
                    this.$9.logError(new Error("MqttProtocolClient: Received unhandled message type: " + a.messageType), "Received unhandled message type");
                    this.$9.bumpCounter("protocol.error.handlemessage.unsupportedtype");
                    break
            }
        };
        return a
    }();
    f.exports = a
}), 34);
__d("MqttPublishListener", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        NOT_CONNECTED: "NOT_CONNECTED",
        PUBLISH_ERROR: "PUBLISH_ERROR",
        QUEUED: "QUEUED",
        SENT: "SENT",
        ACKED: "ACKED",
        NOT_ACKED: "NOT_ACKED"
    });
    f.MqttPublishEvent = a
}), 66);
__d("MqttUserName", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d, e, f, g, h, i, j) {
            h === void 0 && (h = null), i === void 0 && (i = ""), j === void 0 && (j = "websocket"), this.$1 = a, this.$2 = b, this.$3 = d, this.$4 = e, this.$5 = f, this.$6 = g, this.$7 = c("gkx")("1166607") ? !1 : typeof document === "object" && document && document.hasFocus && document.hasFocus(), this.$8 = h, this.$9 = i, this.$10 = j
        }
        var b = a.prototype;
        b.gen = function(a, b, d, e) {
            e === void 0 && (e = []);
            var f = c("gkx")("1166607") ? !1 : this.$7;
            a = {
                u: this.$1,
                s: a,
                cp: this.$3,
                ecp: this.$2,
                chat_on: this.$6,
                fg: f,
                d: this.$4,
                ct: this.$10,
                mqtt_sid: "",
                aid: this.$5,
                st: b,
                pm: d,
                dc: "",
                no_auto_fg: !0,
                gas: this.$8,
                pack: e,
                php_override: this.$9
            };
            return JSON.stringify(a)
        };
        b.setForegroundState = function(a) {
            this.$7 = a
        };
        b.setChatVisibility = function(a) {
            this.$6 = a
        };
        b.getEndpointCapabilities = function() {
            return this.$2
        };
        b.getDeviceId = function() {
            return this.$4
        };
        b.setEndpointCapabilities = function(a) {
            this.$2 = a
        };
        b.getIsGuestAuthStringPresent = function() {
            return this.$8 !== null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("MqttConnection", ["MqttConnectionHookCollection", "MqttEnv", "MqttProtocolClient", "MqttPublishListener", "MqttTypes", "MqttUserName", "MqttUtils", "Promise", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 10,
        i = "publish",
        j = "subscribe",
        k = "unsubscribe",
        l = "/rtc_multi",
        m = function(a) {},
        n = 18e4,
        o = 5 * 1e3,
        p = 15,
        q = 21;
    a = function() {
        function a() {
            var a = this;
            this.$38 = function() {
                return a.$20
            };
            this.$39 = function() {
                return a.$21
            };
            this.$8 = !1;
            this.$10 = d("MqttEnv").Env.getLoggerInstance();
            this.$11 = "Disconnected";
            this.$17 = new Set();
            this.$23 = new Map();
            this.$12 = 0;
            this.$13 = 0;
            this.$14 = 0;
            this.$15 = 0;
            this.$16 = 0;
            this.$8 = !1;
            this.$5 = "";
            this.$6 = new(c("MqttUserName"))("", 0, 1, "", 0, !0);
            this.$9 = 0;
            this.$18 = 0;
            this.$19 = !1;
            this.$7 = null;
            var b = function() {};
            this.$1 = b;
            this.$2 = b;
            this.$3 = b;
            this.$24 = !1;
            this.$25 = !1;
            this.$26 = new(c("MqttConnectionHookCollection"))();
            this.$4 = function() {
                return []
            };
            this.$20 = h;
            this.$21 = h;
            this.$22 = !1
        }
        var e = a.prototype;
        e.run = function(a) {
            var b = this,
                d = a.onStateChange,
                e = a.onJSError,
                f = a.onMessageReceived,
                g = a.endpoint,
                i = a.mqttUserName,
                j = a.subscribedTopics;
            a = a.extraConnectMessageProvider;
            if (this.$8) {
                this.$10.debugTrace("run", "Run called while in running state.");
                return
            }
            this.$1 = d;
            this.$3 = f;
            this.$5 = g;
            this.$6 = i;
            this.$8 = !0;
            this.$12 = 0;
            this.$13 = 0;
            this.$2 = e || m;
            j && j.forEach(function(a) {
                return b.$17.add(a)
            });
            this.$4 = a;
            this.$20 = (d = c("qex")._("523")) != null ? d : h;
            this.$21 = (f = c("qex")._("524")) != null ? f : h;
            this.$27();
            this.$28()
        };
        e.shutdown = function() {
            this.$29(), this.$30("shutdown"), this.$8 = !1, this.$10.debugTrace("shutdown", "Shutdown")
        };
        e.subscribe = function(a) {
            this.$17.add(a);
            this.ensureConnected(j) && this.$31(a);
            return !0
        };
        e.publish = function(a, e, f, g) {
            if (!this.$22 && a == l) {
                var h;
                this.$22 = !0;
                this.$20 = (h = c("qex")._("166")) != null ? h : this.$21;
                this.$21 = (h = c("qex")._("337")) != null ? h : this.$21
            }
            var j = {
                resolve: function() {},
                reject: function(a) {}
            };
            g != null && (j.listener = g);
            h = new(b("Promise"))(function(a, b) {
                j.resolve = a, j.reject = b
            });
            var k = this.ensureConnected(i);
            !k ? (g == null ? void 0 : g.onEvent(d("MqttPublishListener").MqttPublishEvent.NOT_CONNECTED), j.reject(new Error("Client disconnected"))) : this.$32(a, e, f, j);
            return h
        };
        e.unsubscribe = function(a) {
            this.$17["delete"](a);
            this.ensureConnected(k) && this.$33(a);
            return !0
        };
        e.addHook = function(a) {
            this.$26.addHook(a)
        };
        e.removeHook = function(a) {
            this.$26.removeHook(a)
        };
        e.isRunning = function() {
            return this.$8
        };
        e.getSessionId = function() {
            return this.$9
        };
        e.hasFatal = function() {
            return this.$24
        };
        e.hasConnectSuccess = function() {
            return this.$25
        };
        e.canPublish = function() {
            return this.ensureConnected("canPublish")
        };
        e.ensureConnected = function(a) {
            return !this.$8 || this.$7 == null || !this.$7.isConnected() ? !1 : !0
        };
        e.connectionState = function() {
            return this.$11
        };
        e.mqttStateFromConnectionState = function(a) {
            switch (a) {
                case "Connecting":
                case "TransportConnected":
                    return "Connecting";
                case "Connected":
                    return "Connected";
                case "Disconnected":
                    return "Disconnected"
            }
            throw new Error("Unknown state " + a)
        };
        e.testOnlyGetSubscribedTopics = function() {
            return this.$17
        };
        e.$27 = function() {
            var a = this;
            typeof window !== "undefined" && window.addEventListener("unload", function(b) {
                return a.$34(b)
            })
        };
        e.$34 = function(a) {
            this.publish("/browser_close", "{}", 0)
        };
        e.$29 = function() {
            this.$8 && this.$7 != null && (this.$35("Disconnected"), this.$7 != null && this.$7.disconnect(), this.$7 = null)
        };
        e.$36 = function(a) {
            if (this.$11 === "Connected" && a === "Disconnected" && this.$18 === 0) {
                this.$18 = Date.now();
                return
            }
            if (a === "Connecting" && this.$18 !== 0 && !this.$19) {
                this.$10.bumpCounter("protocol.reconnectstarted");
                this.$19 = !0;
                return
            }
            if (a === "Connected" && this.$18 !== 0) {
                a = Date.now() - this.$18;
                switch (Math.floor(a / 3e4)) {
                    case 0:
                        this.$10.bumpCounter("protocol.reconnectedwithin30s");
                        break;
                    case 1:
                        this.$10.bumpCounter("protocol.reconnectedwithin60s");
                        break;
                    case 2:
                        this.$10.bumpCounter("protocol.reconnectedwithin90s");
                        break;
                    case 3:
                        this.$10.bumpCounter("protocol.reconnectedwithin120s");
                        break;
                    default:
                        this.$10.bumpCounter("protocol.reconnectedmorethan120s");
                        break
                }
                this.$18 = 0;
                this.$19 = !1;
                return
            }
        };
        e.$35 = function(a) {
            a !== this.$11 && (this.$36(a), this.$11 = a, this.$1(a))
        };
        e.$28 = function() {
            var a = this;
            if (!this.$8) return;
            this.$35("Connecting");
            var b = Date.now();
            this.$9 = c("MqttUtils").generateSessionId();
            var e = Array.from(this.$17),
                f = c("MqttUtils").endpointWithSessionId(this.$5, this.$9);
            f = c("MqttUtils").endpointWithExtraParameter(f, "cid", this.$6.getDeviceId());
            try {
                this.$7 = new(c("MqttProtocolClient"))(f);
                var g = this.$37(),
                    h = g.map(function(a) {
                        return a.topic
                    });
                f = this.$6.gen(this.$9, e, g);
                this.$7 != null && (this.$13 += 1, this.$7.connect({
                    userName: f,
                    mqttVersion: 3,
                    getKeepAliveIntervalSeconds: this.$38,
                    getKeepAliveTimeoutSeconds: this.$39,
                    ignoreSubProtocol: !0,
                    onConnectFailure: function(c) {
                        return a.$40(c, b, e, h)
                    },
                    onConnectSuccess: function() {
                        return a.$41(b, e, h)
                    },
                    onConnection: function() {
                        return a.$42(g, e)
                    },
                    onConnectionLost: function(b, c) {
                        return a.$43(b, c)
                    },
                    onMessageArrived: function(b, c, d) {
                        return a.$44(b, c, d)
                    },
                    onMessageDelivered: function(b, c) {
                        return a.$45(b, c)
                    }
                }), this.$10.bumpCounter("protocol.connectattempt"), this.$26.onConnectAttempt(), this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.connectattempt"))
            } catch (a) {
                this.$10.bumpCounter("js_error_in_init_exception"), this.$35("Disconnected"), this.$46(!1, !1, b, e, [], 14, "init error - " + a.message), a && this.$10.logErrorWarn(a, "ws_js_error"), this.$26.onWSFatal(), this.$47(new(d("MqttTypes").MqttChannelError)(!1, "ws_js_error", a), "client_init")
            }
        };
        e.$37 = function() {
            var a = this.$4(),
                b = 65536;
            a = a.map(function(a) {
                a.messageId = b--;
                return a
            });
            return a
        };
        e.$31 = function(a) {
            try {
                if (this.$7 != null) {
                    this.$7.subscribe(a);
                    this.$10.debugTrace("_doSubscribe", "Subscribing to " + a);
                    this.$26.onSubscribe(a);
                    this.$10.bumpCounter("protocol.subscribe");
                    return !0
                }
            } catch (b) {
                this.$10.logError(b, "Exception subscribing"), this.$10.bumpCounter("subscribe_exception." + a), this.$10.bumpCounter("protocol.subscribe.error")
            }
            return !1
        };
        e.$33 = function(a) {
            try {
                if (this.$7 != null) {
                    this.$7.unsubscribe(a);
                    this.$10.debugTrace("_doUnsubscribe", "Unsubscribing to " + a);
                    this.$26.onUnsubscribe(a);
                    this.$10.bumpCounter("protocol.unsubscribe");
                    return !0
                }
            } catch (b) {
                this.$10.logError(b, "Exception unsubscribing"), this.$10.bumpCounter("unsubscribe_exception." + a), this.$10.bumpCounter("protocol.unsubscribe.error")
            }
            return !1
        };
        e.$32 = function(a, b, c, e) {
            if (this.$7 != null) try {
                b = this.$7.publish(a, b, c);
                this.$10.bumpCounter("protocol.publish");
                var f = b != null ? b : "null";
                this.$10.debugTrace("_doPublish", "publish " + a + " with messageId:" + f + " qos:" + c);
                this.$26.onPublish(a);
                (f = e.listener) == null ? void 0 : f.onEvent(d("MqttPublishListener").MqttPublishEvent.SENT);
                b != null ? (this.$10.bumpCounter("publish.ack_expected"), this.$23.set(b, e)) : e.resolve();
                return !0
            } catch (b) {
                this.$10.logError(b, "Exception publishing");
                this.$10.bumpCounter("publish_exception." + a);
                e.reject(b);
                this.$10.bumpCounter("protocol.publish.error");
                return !1
            } else return !1
        };
        e.$48 = function(a) {
            var b = this;
            a === void 0 && (a = null);
            if (!this.$8) return;
            this.$29();
            this.$30("reconnect");
            this.$49();
            this.$9 = -1;
            this.$16 = 0;
            a = a != null ? a : Math.pow(2, Math.min(this.$12, 6)) * (1e3 + d("MqttEnv").Env.random() * 200);
            this.$10.debugTrace("_scheduleReconnect", "Reconnect in " + a + " ms");
            d("MqttEnv").Env.setTimeout(function() {
                b.$28()
            }, a);
            this.$12 += 1
        };
        e.$49 = function() {
            var a = Date.now() - this.$16,
                b = this.$16 !== 0 && a > o,
                c = this.$12 > p;
            (b || c) && (this.$12 = 0);
            this.$16 !== 0 && a <= o && this.$10.bumpCounter("short_lived_session");
            c && this.$10.bumpCounter("connection_attempt_limit")
        };
        e.$46 = function(a, b, c, d, e, f, g) {
            a ? this.$14++ : this.$15++, this.$10.eventLogConnect({
                sessionID: this.$9,
                connectionStatus: a,
                connectionState: this.mqttStateFromConnectionState(this.$11),
                ackReceived: b,
                duration: Date.now() - c,
                hostname: this.$5,
                attemptNumber: this.$13,
                successTotal: this.$14,
                failTotal: this.$15,
                subscribedTopics: d,
                publishes: e,
                errorCode: f,
                errorMessage: g
            }), a && (this.$13 = 0)
        };
        e.$40 = function(a, b, c, d, e) {
            var f = a.mqttError;
            e = e != null ? f.errorMessage + " - " + e : f.errorMessage;
            this.$10.debugTrace("connect", "Connect failed " + e);
            this.$10.bumpCounter("protocol.onconnectfailure");
            this.$26.onConnectFailure();
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectfailure");
            this.$46(!1, a.connAck != -1, b, c, d, f.errorCode, e);
            if (a.connAck != null) {
                this.$10.bumpCounter("protocol.connect_failure." + a.connAck);
                if (a.connAck === q) {
                    this.$48(n);
                    return
                }
            }
            this.$48()
        };
        e.$42 = function(a, b) {
            var c = this;
            this.$10.bumpCounter("protocol.onconnection");
            this.$10.debugTrace("Connect", "Socket established");
            this.$26.onConnected();
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnection");
            b.forEach(function(a) {
                c.$26.onSubscribe(a)
            });
            a.forEach(function(a) {
                c.$26.onPublish(a.topic)
            });
            this.$35("TransportConnected")
        };
        e.$41 = function(a, b, c) {
            this.$10.bumpCounter("protocol.onconnectsuccess"), this.$10.debugTrace("connect", "Connect success"), this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectsucess"), this.$26.onConnectSuccess(), this.$25 = !0, this.$35("Connected"), this.$46(!0, !0, a, b, c), this.$50(b), this.$16 = Date.now()
        };
        e.$43 = function(a, b) {
            this.$10.bumpCounter("protocol.onconnectionlost");
            if (a.errorCode) {
                b = b != null ? a.errorMessage + " - " + b : a.errorMessage;
                this.$10.eventLogDisconnect({
                    sessionID: this.$9,
                    errorCode: a.errorCode,
                    errorMessage: b,
                    duration: Date.now() - this.$16
                })
            }
            this.$10.debugTrace("connect", "connection lost");
            this.$26.onConnectionLost();
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectionlost");
            this.$48()
        };
        e.$44 = function(a, b, c) {
            this.$10.bumpCounter("protocol.onmessagearrived");
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onmessagearrived");
            this.$10.debugTrace("onMessageArrived", "Message received on " + a);
            this.$26.onMessage(a);
            try {
                this.$3(a, b, c)
            } catch (b) {
                this.$10.logError(b, "Listener threw error"), this.$10.bumpCounter("listener_error." + a)
            }
        };
        e.$45 = function(a, b) {
            this.$10.bumpCounter("protocol.onmessagedelivered");
            a = b != null ? b : "null";
            this.$10.debugTrace("onMessageDelivered", "Delivered Message {ID: " + a + "}");
            if (b == null) return;
            a = this.$23.get(b);
            if (a == null) {
                this.$10.bumpCounter("protocol.message_with_unknown_id");
                return
            }
            this.$23["delete"](b);
            (b = a.listener) == null ? void 0 : b.onEvent(d("MqttPublishListener").MqttPublishEvent.ACKED);
            a.resolve();
            this.$10.bumpCounter("publish.ack_received")
        };
        e.$30 = function(a) {
            this.$10.bumpCounter("protocol.fail_all_unacked_publishes." + a), this.$23.forEach(function(b, c, e) {
                (c = b.listener) == null ? void 0 : c.onEvent(d("MqttPublishListener").MqttPublishEvent.NOT_ACKED);
                b.reject(new Error(a))
            }), this.$23.clear()
        };
        e.$50 = function(a) {
            var b = this,
                c = new Set(a);
            c.forEach(function(a) {
                b.$17.has(a) || b.unsubscribe(a)
            });
            a = new Set(this.$17);
            a.forEach(function(a) {
                c.has(a) || b.subscribe(a)
            })
        };
        e.$47 = function(a, b) {
            try {
                this.$10.bumpCounter("js_error_in_init");
                this.$10.bumpCounter(b + ".error");
                this.$24 = !0;
                var c = a ? a.message : "error";
                this.$10.debugTrace("onError", b + ": " + c);
                this.$2(a)
            } catch (a) {
                this.$10.bumpCounter("js_error_in_error_logging"), this.$10.logError(a, "JS error while trying to log previous error")
            }
        };
        return a
    }();
    f.exports = a
}), 34);
__d("MqttChannel", ["ChannelClientID", "IrisSubscribeChecker", "MqttAnalyticsHook", "MqttConnection", "MqttEnv", "MqttPublishListener", "MqttPublishTimeoutConfig", "MqttUserName", "MqttUtils", "Promise", "isFastRefreshEnabledForCurrentDomain", "promiseDone", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("MqttPublishTimeoutConfig").mqttPublishTimeoutMs || 60 * 1e3;
    a = function() {
        function a(a) {
            var b = this,
                e = a.endpoint,
                f = a.pollingEndpoint,
                g = a.userFbid,
                h = a.appId,
                i = a.initialSubscribedTopics,
                j = a.capabilities,
                k = a.clientCapabilities,
                l = a.chatVisibility;
            l = l === void 0 ? !0 : l;
            var m = a.guestAuthString;
            m = m === void 0 ? null : m;
            var n = a.phpOverride;
            n = n === void 0 ? "" : n;
            var o = a.clientType;
            o = o === void 0 ? "websocket" : o;
            a = a.deviceId;
            a = a === void 0 ? c("ChannelClientID").getID() : a;
            this.$11 = d("MqttEnv").Env.getLoggerInstance();
            this.$11.setAppId(h);
            this.$12 = new(c("MqttUserName"))(g, j, k, a, h, l, m, n, o);
            this.$1 = e;
            this.$2 = f;
            this.$5 = "Disconnected";
            this.$7 = "LPInactive";
            this.$6 = "Disconnected";
            this.$3 = [];
            this.$4 = new Set();
            this.$8 = new Map();
            this.$9 = new Map();
            this.$10 = new(c("MqttConnection"))();
            this.$13 = null;
            this.$16 = new(c("MqttAnalyticsHook"))();
            this.$15 = new Map();
            this.$14 = [];
            if (!d("MqttEnv").Env.isUserLoggedInNow() && !c("isFastRefreshEnabledForCurrentDomain")() && (m == null || m == "")) {
                this.$11.bumpCounter("logged_out_init");
                return
            }
            this.$10.addHook(this.$16);
            this.$10.addHook(new(c("IrisSubscribeChecker"))(function() {
                return b.$4.size > 0
            }));
            this.$17(i);
            this.$18()
        }
        var e = a.prototype;
        e.$17 = function(a) {
            var b = this;
            if (this.$10.isRunning()) {
                this.$19("run", "Connection started calling run again");
                return
            }
            if (d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled)) {
                var e = d("MqttEnv").Env.killswitch("MQTT_WS_FORCE_LONG_POLLING");
                if (e) {
                    this.$19("MqttChannel", "Websocket disabled, will do long polling only");
                    return
                } else if (!c("MqttUtils").hasWSSupport()) {
                    this.$19("MqttChannel", "Websocket Unavailable, will do long polling only");
                    this.$11.bumpCounter("ws_unavailable_polling");
                    return
                }
            }
            this.$10.run({
                onStateChange: function(a) {
                    b.$20(a)
                },
                onJSError: function(a) {
                    b.$21(a)
                },
                onMessageReceived: function(a, c, d) {
                    b.$22(a, c, d)
                },
                endpoint: this.$1,
                mqttUserName: this.$12,
                subscribedTopics: a,
                extraConnectMessageProvider: function() {
                    return b.$23()
                }
            })
        };
        e.shutdown = function() {
            this.$10 && this.$10.shutdown()
        };
        e.publish = function(a, b, e) {
            e === void 0 && (e = {
                qos: 1,
                skipBuffer: !1
            });
            var f;
            e.qos === 0 ? f = this.$24(a, b, e.listener) : f = this.$25(a, b, e);
            c("MqttUtils").promiseDone(f, function() {}, function(a) {
                (a = e.listener) == null ? void 0 : a.onEvent(d("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR)
            });
            return f
        };
        e.$24 = function(a, b, c) {
            return this.$26(a, b, 0, c)
        };
        e.$25 = function(a, c, e) {
            var f = {
                    resolve: function() {},
                    reject: function(a) {}
                },
                g = new(b("Promise"))(function(a, b) {
                    f.resolve = a, f.reject = b
                }),
                h = d("MqttEnv").Env.random();
            a = {
                topic: a,
                payload: c,
                options: e,
                ack: f,
                publishToken: h,
                timeoutId: null
            };
            if (e.skipBuffer)
                if (this.$10.connectionState() === "Connecting") {
                    this.$14.push(a);
                    (c = e.listener) == null ? void 0 : c.onEvent(d("MqttPublishListener").MqttPublishEvent.QUEUED)
                } else this.$27(a);
            else {
                a.timeoutId = this.$28(h);
                this.$15.set(h, a);
                (c = e.listener) == null ? void 0 : c.onEvent(d("MqttPublishListener").MqttPublishEvent.QUEUED);
                this.$29(a)
            }
            return g
        };
        e.$27 = function(a) {
            c("MqttUtils").promiseDone(this.$26(a.topic, a.payload, a.options.qos, a.options.listener), function() {
                a.ack.resolve()
            }, function(b) {
                a.ack.reject(b)
            })
        };
        e.$29 = function(a) {
            var b = this;
            c("MqttUtils").promiseDone(this.$26(a.topic, a.payload, a.options.qos, a.options.listener), function() {
                return b.$30(a)
            }, function(a) {})
        };
        e.$26 = function(a, b, e, f) {
            var g = this,
                h, i, j = this.getConnectionState(),
                k = Date.now();
            !this.$10.canPublish() && this.$13 && this.$13.canPublish() ? (h = this.$13.publish(a, b, e), i = "lp", f != null && (h = h.then(function() {
                return f.onEvent(d("MqttPublishListener").MqttPublishEvent.SENT)
            })), this.$11.bumpCounter("try_publish_lp")) : (h = this.$10.publish(a, b, e, f), i = "ws", this.$11.bumpCounter("try_publish_ws"));
            c("promiseDone")(h, function() {
                g.$11.eventLogOutgoingPublish({
                    sessionID: g.$10.getSessionId(),
                    topic: a,
                    qos: e,
                    payloadSizeBytes: b.length * 2,
                    success: !0,
                    protocol: i,
                    errorMessage: null,
                    connectionState: j,
                    startTime: k
                })
            }, function(c) {
                g.$11.eventLogOutgoingPublish({
                    sessionID: g.$10.getSessionId(),
                    topic: a,
                    qos: e,
                    payloadSizeBytes: b.length * 2,
                    success: !1,
                    protocol: i,
                    errorMessage: c.toString(),
                    connectionState: j,
                    startTime: k
                })
            });
            return h
        };
        e.subscribe = function(a, b) {
            var c = this;
            this.$10.subscribe(a);
            var d = this.$8.get(a);
            !d ? (d = [b], this.$8.set(a, d)) : d.push(b);
            return function() {
                var d = c.$8.get(a) || [];
                d = d.filter(function(a) {
                    return a !== b
                });
                c.$8.set(a, d);
                d.length === 0 && c.unsubscribeAll(a)
            }
        };
        e.subscribeBinary = function(a, b) {
            var c = this;
            this.$10.subscribe(a);
            var d = this.$9.get(a);
            !d ? (d = [b], this.$9.set(a, d)) : d.push(b);
            return function() {
                var d = c.$9.get(a) || [];
                d = d.filter(function(a) {
                    return a !== b
                });
                c.$9.set(a, d);
                d.length === 0 && c.unsubscribeAll(a)
            }
        };
        e.subscribeChannelEvents = function(a) {
            this.$3.push(a)
        };
        e.unsubscribeChannelEvents = function(a) {
            a = this.$3.indexOf(a);
            a > -1 && this.$3.splice(a, 1)
        };
        e.registerExtraConnectPayloadProvider = function(a) {
            var b = this;
            this.$19("MqttChannel", "registerExtraConnectPayloadProvider called");
            this.$4.add(a);
            if (this.$10.isRunning()) {
                a = a.getPublishMessages();
                a.forEach(function(a) {
                    b.publish(a.topic, a.payload, {
                        qos: a.qos,
                        skipBuffer: !0
                    })
                })
            }
        };
        e.unregisterExtraConnectPayloadProvider = function(a) {
            this.$4["delete"](a)
        };
        e.unsubscribeAll = function(a) {
            this.$10.unsubscribe(a), this.$8["delete"](a), this.$9["delete"](a)
        };
        e.getConnectionState = function() {
            return this.$5
        };
        e.getLongPollingStatus = function() {
            return this.$7
        };
        e.getEndpoint = function() {
            return this.$1
        };
        e.addHook = function(a) {
            this.$10.addHook(a)
        };
        e.removeHook = function(a) {
            this.$10.removeHook(a)
        };
        e.testOnlyMessageReceived = function(a, b) {
            this.$22(a, b, -1)
        };
        e.$31 = function(a) {
            var b = this.$15.get(a);
            b != null && b.timeoutId != null && d("MqttEnv").Env.clearTimeout(b.timeoutId);
            this.$15["delete"](a)
        };
        e.$28 = function(a) {
            var b = this;
            a = d("MqttEnv").Env.setTimeout(function(a) {
                var c = b.$15.get(a);
                if (!c) return;
                var d = c.topic;
                b.$11.bumpCounter("publish_timeout." + d);
                b.$11.debugTrace("publish_timeout", "Timeout publishing topic: " + d + " publishToken: " + a);
                b.$31(a);
                c.ack.reject(new Error("Publish Timed Out"))
            }, h, a);
            return a
        };
        e.$30 = function(a) {
            var b = a.publishToken,
                c = this.$15.get(b);
            if (!c) return;
            this.$31(b);
            a.ack.resolve();
            this.$11.debugTrace("publish_success", "Topic: " + a.topic + " publishToken: " + a.publishToken);
            this.$11.bumpCounter("publish_success." + a.topic)
        };
        e.$22 = function(a, b, c) {
            var d = this.$8.get(a);
            this.$11.eventLogIncomingPublish({
                sessionID: this.$10.getSessionId(),
                topic: a,
                connectionState: this.getConnectionState(),
                qos: c,
                payloadSizeBytes: b.payloadString.length * 2
            });
            if (!d) this.$11.debugTrace("_onMessageReceived", a + " being dropped, no listeners");
            else
                for (var d = d, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    if (e) {
                        if (f >= d.length) break;
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) break;
                        g = f.value
                    }
                    g = g;
                    try {
                        g(b.payloadString)
                    } catch (a) {
                        this.$11.logError(a, "Listener exception"), this.$11.bumpCounter("listener_error")
                    }
                }
            g = this.$9.get(a);
            this.$11.eventLogIncomingPublish({
                sessionID: this.$10.getSessionId(),
                topic: a,
                connectionState: this.getConnectionState(),
                qos: c,
                payloadSizeBytes: b.payloadBytes.length
            });
            if (!g) this.$11.debugTrace("_onMessageReceived", a + " being dropped, no binary listeners");
            else
                for (var f = g, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (e) {
                        if (d >= f.length) break;
                        c = f[d++]
                    } else {
                        d = f.next();
                        if (d.done) break;
                        c = d.value
                    }
                    a = c;
                    try {
                        a(b.payloadBytes)
                    } catch (a) {
                        this.$11.logError(a, "Binary Listener exception"), this.$11.bumpCounter("listener_error")
                    }
                }
        };
        e.$21 = function(a) {
            if (d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled)) {
                a.isRecoverable ? this.$11.bumpCounter("recoverable_error_skipped") : this.$11.bumpCounter("unrecoverable_error_skipped");
                return
            }
            a.isRecoverable ? this.$11.bumpCounter("recoverable_error_not_skipped") : this.$11.bumpCounter("unrecoverable_error_not_skipped");
            this.$32(a)
        };
        e.$33 = function(a) {
            this.$32(a)
        };
        e.$32 = function(a) {
            for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                e.onJSError && e.onJSError(a)
            }
        };
        e.$34 = function() {
            var a = this;
            this.$14.forEach(function(b) {
                a.$27(b)
            });
            this.$14 = [];
            this.$15.forEach(function(b, c, d) {
                a.$29(b)
            })
        };
        e.$20 = function(a) {
            a === "Connecting" ? (this.$14.forEach(function(a) {
                a.ack.reject(new Error("Client Reconnecting"))
            }), this.$14 = []) : a === "TransportConnected" && this.$34(), this.$19("_changeState", "Connection state = " + a), this.$35(a, this.$7)
        };
        e.$36 = function(a, b) {
            this.$13 && this.$13.canPublish() && this.$34(), this.$19("_changeLPStatus", "LP status = " + a + ", LP Request status = " + b), this.$35(this.$6, a)
        };
        e.$35 = function(a, b) {
            var c = this.$10.mqttStateFromConnectionState(a);
            this.$13 && this.$13.canPublish() && (c = "Connected");
            this.$6 = a;
            (c !== this.$5 || b != this.$7) && (this.$5 = c, this.$7 = b, this.$37(c))
        };
        e.$37 = function(a) {
            for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                e.onMQTTStateChanged(a)
            }
        };
        e.$23 = function() {
            var a = this,
                b = [];
            this.$4.forEach(function(c) {
                try {
                    c = c.getPublishMessages();
                    Array.prototype.push.apply(b, c)
                } catch (b) {
                    a.$11.logError(b, "ConnectPayload provider exception"), a.$11.bumpCounter("connectPayloadProvider_error")
                }
            });
            return b
        };
        e.$18 = function() {
            var a = this;
            d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled) && this.$2 && this.$2 != "" && c("requireDeferred")("MqttLongPollingRunner").__setRef("MqttChannel").onReady(function(b) {
                b = new b(a.$2, a.$12, a.$10.hasFatal(), a.$10.hasConnectSuccess(), function(b, c, d) {
                    return a.$22(b, c, d)
                }, function() {
                    var b = Array.from(a.$8.keys()),
                        c = Array.from(a.$9.keys());
                    return Array.from(new Set(b.concat(c)))
                }, function() {
                    return a.$23()
                }, function(b) {
                    a.$33(b)
                }, function(b, c) {
                    a.$36(b, c)
                });
                b.start();
                a.$10.addHook(b);
                b.addHook(a.$16);
                a.$13 = b;
                a.$11.debugTrace("MqttChannel", "longPollingRunner loaded")
            })
        };
        e.$19 = function(a, b) {
            this.$11.debugTrace(a, "Mqtt channel: " + b)
        };
        e.setForegroundState = function(a) {
            this.$12 && this.$12.setForegroundState(a)
        };
        e.setChatVisibility = function(a) {
            this.$12 && this.$12.setChatVisibility(a)
        };
        e.getEndpointCapabilities = function() {
            return this.$12.getEndpointCapabilities()
        };
        e.setEndpointCapabilities = function(a) {
            this.$12.setEndpointCapabilities(a)
        };
        return a
    }();
    f.exports = a
}), 34);
__d("MqttLogger", ["ChannelClientID", "FBLogger", "Log", "LogHistory", "MqttEnv", "MqttUnifiedClientConnectFalcoEvent", "MqttUnifiedClientDisconnectFalcoEvent", "MqttUnifiedClientIncomingPublishFalcoEvent", "MqttUnifiedClientOutgoingPublishFalcoEvent", "MqttWsClientTypedLoggerLite", "NetworkStatus", "ODS", "Random", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "mqtt_client",
        i = 100,
        j = "WEBSOCKET",
        k = null,
        l = {
            CONNECT: "mqtt_client_connect",
            DISCONNECT: "mqtt_client_disconnect",
            PUBLISH: "mqtt_client_publish",
            CLIENT_ERROR: "mqtt_client_error",
            PUBLISH_TIMEOUT: "mqtt_qos1_publish_timeout",
            SOCKET_DISCONNECT: "mqtt_protocol_error"
        },
        m = {
            CONNECT: "connect",
            DISCONNECT: "disconnect",
            OUTGOING_PUBLISH: "outgoing_publish",
            INCOMING_PUBLISH: "incoming_publish"
        };
    a = function() {
        a.getInstance = function() {
            k || (k = new a());
            return k
        };

        function a() {
            this.$1 = d("LogHistory").getInstance(h), this.$2 = 0, this.$3 = c("gkx")("778292"), this.$4 = Date.now(), this.$5 = c("ChannelClientID").getID(), this.$6()
        }
        var b = a.prototype;
        b.setAppId = function(a) {
            this.$2 === 0 && (this.$2 = a)
        };
        b.eventLogConnect = function(a) {
            var b = a.sessionID,
                d = a.connectionStatus,
                e = a.connectionState,
                f = a.ackReceived,
                g = a.duration,
                h = a.hostname,
                i = a.attemptNumber,
                k = a.successTotal,
                n = a.failTotal;
            a.subscribedTopics;
            a.publishes;
            a.errorCode;
            a = a.errorMessage;
            d = d ? "success" : "failed";
            this.bumpCounter(l.CONNECT + "." + d);
            d = k / (k + n);
            var o = {
                event_type: m.CONNECT,
                acked: f,
                attempt_number: i.toString(),
                connection_state: e,
                client_type: j,
                duration: g.toString(),
                error: a,
                session_id: b.toString(),
                os_connectivity: this.$7(),
                extra_data: {
                    device_id: this.$5,
                    connect_success_rate: d.toString(),
                    hostname: h
                }
            };
            this.$8(function() {
                c("MqttUnifiedClientConnectFalcoEvent").log(function() {
                    return o
                })
            })
        };
        b.eventLogPull = function(a) {
            var b = a.pullEventName,
                c = a.sessionID,
                e = a.status,
                f = a.duration,
                g = a.hostname;
            a = a.errorMessage;
            c = {
                device_id: this.$5,
                session_id: c,
                logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
                href: window.location.hostname,
                connection_status: e,
                duration: f,
                hostname: g,
                error_message: a
            };
            this.$9(b, c)
        };
        b.eventLogPullFinish = function(a) {
            var b = a.pullEventName,
                c = a.sessionID,
                e = a.duration,
                f = a.errorMessage,
                g = a.publishReceived;
            a = a.publishSent;
            c = {
                device_id: this.$5,
                session_id: c,
                logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
                href: window.location.hostname,
                duration: e,
                error_message: f,
                publish_received: g,
                publish_sent: a
            };
            this.$9(b, c)
        };
        b.eventLogDisconnect = function(a) {
            var b = a.sessionID;
            a.errorCode;
            var d = a.errorMessage;
            a = a.duration;
            this.bumpCounter(l.DISCONNECT);
            var e = {
                event_type: m.DISCONNECT,
                connection_state: "Disconnected",
                client_type: j,
                duration: a.toString(),
                error: d,
                session_id: b.toString(),
                os_connectivity: this.$7(),
                extra_data: {
                    device_id: this.$5
                }
            };
            this.$8(function() {
                c("MqttUnifiedClientDisconnectFalcoEvent").log(function() {
                    return e
                })
            })
        };
        b.eventLogOutgoingPublish = function(a) {
            var b = a.sessionID,
                d = a.topic,
                e = a.qos,
                f = a.payloadSizeBytes,
                g = a.success,
                h = a.protocol,
                i = a.errorMessage,
                k = a.connectionState;
            a = a.startTime;
            this.bumpCounter(l.PUBLISH + "." + d);
            var n = {
                event_type: m.OUTGOING_PUBLISH,
                session_id: b.toString(),
                topic: d,
                client_type: j,
                connection_state: k,
                qos: e.toString(),
                acked: e == 1 ? g : null,
                duration: (Date.now() - a).toString(),
                error: i,
                payload_size: f.toString(),
                os_connectivity: this.$7(),
                extra_data: {
                    device_id: this.$5,
                    protocol: h
                }
            };
            this.$8(function() {
                c("MqttUnifiedClientOutgoingPublishFalcoEvent").log(function() {
                    return n
                })
            })
        };
        b.eventLogIncomingPublish = function(a) {
            var b = a.sessionID,
                d = a.topic,
                e = a.connectionState,
                f = a.qos;
            a = a.payloadSizeBytes;
            var g = {
                event_type: m.INCOMING_PUBLISH,
                session_id: b.toString(),
                topic: d,
                client_type: j,
                connection_state: e,
                qos: f.toString(),
                payload_size: a.toString(),
                os_connectivity: this.$7(),
                extra_data: {
                    device_id: this.$5
                }
            };
            b = d == "/webrtc" || d == "/rtc_multi";
            this.$10(function() {
                c("MqttUnifiedClientIncomingPublishFalcoEvent").log(function() {
                    return g
                })
            }, 50, b)
        };
        b.logError = function(a, b) {
            var e = this;
            d("MqttEnv").Env.scheduleLoggingCallback(function() {
                try {
                    c("FBLogger")(h).catching(a).mustfix(b)
                } catch (a) {}
            })
        };
        b.logErrorWarn = function(a, b) {
            var e = this;
            d("MqttEnv").Env.scheduleLoggingCallback(function() {
                try {
                    c("FBLogger")(h).catching(a).warn(b)
                } catch (a) {}
            })
        };
        b.logWarn = function(a, b) {
            var c = this;
            d("MqttEnv").Env.scheduleLoggingCallback(function() {
                try {
                    c.$1.warn(a, b)
                } catch (a) {}
            })
        };
        b.debugTrace = function(a, b) {
            var c = this;
            d("MqttEnv").Env.scheduleLoggingCallback(function() {
                try {
                    c.$1.debug(a, b)
                } catch (a) {}
            })
        };
        b.bumpCounter = function(a) {
            var b = this;
            if (!d("Random").coinflip(i)) return;
            d("MqttEnv").Env.scheduleLoggingCallback(function() {
                b.$2 !== 0 && d("ODS").bumpEntityKey(2966, "mqtt_ws_client", b.$2 + "." + a, i), d("ODS").bumpEntityKey(2966, "mqtt_ws_client", a, i)
            })
        };
        b.$9 = function(a, b, e) {
            var f = this;
            d("MqttEnv").Env.scheduleLoggingCallback(function() {
                b.event_type = a;
                b.app_id = f.$2;
                b.online = f.$11();
                var d = JSON.stringify(b);
                f.$1.log(a, d, {
                    weight: e
                });
                a !== l.DISCONNECT && c("MqttWsClientTypedLoggerLite").log(b)
            })
        };
        b.$10 = function(a, b, e) {
            c("gkx")("1272991") && c("gkx")("762") ? b !== 0 ? e = e == !0 || d("Random").coinflip(b) : e = !0 : e = c("gkx")("1272991");
            e && d("MqttEnv").Env.scheduleCallback(a)
        };
        b.$8 = function(a) {
            this.$10(a, 0, !1)
        };
        b.$11 = function() {
            return window.navigator && window.navigator.onLine !== void 0 ? window.navigator.onLine : !1
        };
        b.$7 = function() {
            return c("NetworkStatus").isOnline()
        };
        b.$6 = function() {
            var a = this;
            if (window.navigator && window.navigator.onLine !== void 0) {
                var b = function(b) {
                    b = b.online;
                    b || a.bumpCounter("browser_disconnect")
                };
                c("NetworkStatus").onChange(b)
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("MqttEnvInitializer", ["CurrentUser", "MqttEnv", "MqttLogger", "Random", "WebStorage", "clearTimeout", "gkx", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "mqtt:",
        i = {
            genGk: function(a) {
                switch (a) {
                    case d("MqttEnv").MqttGkNames.mqtt_waterfall_log_client_sampling:
                        return c("gkx")("832242");
                    case d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled:
                        return !0;
                    case d("MqttEnv").MqttGkNames.mqtt_lp_use_fetch:
                        return c("gkx")("945829");
                    case d("MqttEnv").MqttGkNames.mqtt_fast_lp:
                        return c("gkx")("1001007");
                    case d("MqttEnv").MqttGkNames.mqtt_lp_no_delay:
                        return c("gkx")("1066746");
                    case d("MqttEnv").MqttGkNames.mqtt_enable_publish_over_polling:
                        return c("gkx")("968609");
                    default:
                        c("MqttLogger").getInstance().logError(new Error("unknown gk"), "Unknown GK value " + a);
                        return !1
                }
            },
            initialize: function() {
                d("MqttEnv").Env.initialize(c("Random").random, c("CurrentUser").isLoggedInNow, c("clearTimeout"), c("setTimeoutAcrossTransitions"), function() {
                    return c("MqttLogger").getInstance()
                }, i.genGk, null, null, null, function(a, b) {
                    var d = c("WebStorage").getLocalStorage();
                    if (d) {
                        d = d.getItem(h + a);
                        if (d != null) return d
                    }
                    return b
                }, function(a, b) {
                    var d = c("WebStorage").getLocalStorage();
                    d && (b == null ? d.removeItem(h + a) : c("WebStorage").setItemGuarded(d, h + a, b))
                })
            }
        };
    f.exports = i
}), 34);
__d("FBMqttChannel", ["MqttChannel", "MqttEnvInitializer", "MqttWebConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    b("MqttEnvInitializer").initialize();
    e.exports = new(b("MqttChannel"))({
        endpoint: (a = b("MqttWebConfig")).endpoint,
        pollingEndpoint: a.pollingEndpoint,
        userFbid: a.fbid,
        appId: a.appID,
        initialSubscribedTopics: a.subscribedTopics,
        capabilities: a.capabilities,
        clientCapabilities: a.clientCapabilities,
        chatVisibility: a.chatVisibility
    })
}), null);
__d("filterNulls", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
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
            e != null && b.push(e)
        }
        return b
    }
    f["default"] = a
}), 66);