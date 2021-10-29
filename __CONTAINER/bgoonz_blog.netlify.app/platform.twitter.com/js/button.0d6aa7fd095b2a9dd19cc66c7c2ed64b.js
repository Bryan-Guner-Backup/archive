(window.__twttrll = window.__twttrll || []).push([
    [3], {
        169: function(t, e, a) {
            var r = a(39),
                n = a(171),
                s = a(7);
            (r = Object.create(r)).build = s(r.build, null, n), t.exports = r
        },
        170: function(t, e, a) {
            var r = a(42),
                n = a(37),
                s = a(38),
                i = a(0),
                o = a(7),
                u = a(33),
                c = a(5),
                l = a(175);
            t.exports = function(t) {
                t.params({
                    partner: {
                        fallback: o(u.val, u, "partner")
                    }
                }), t.define("scribeItems", function() {
                    return {}
                }), t.define("scribeNamespace", function() {
                    return {
                        client: "tfw"
                    }
                }), t.define("scribeData", function() {
                    return {
                        widget_origin: s.rootDocumentLocation(),
                        widget_frame: s.isFramed() && s.currentDocumentLocation(),
                        widget_partner: this.params.partner,
                        widget_site_screen_name: l(u.val("site")),
                        widget_site_user_id: c.asNumber(u.val("site:id")),
                        widget_creator_screen_name: l(u.val("creator")),
                        widget_creator_user_id: c.asNumber(u.val("creator:id"))
                    }
                }), t.define("scribe", function(t, e, a) {
                    t = i.aug(this.scribeNamespace(), t || {}), e = i.aug(this.scribeData(), e || {}), r.scribe(t, e, !1, a)
                }), t.define("scribeInteraction", function(t, e, a) {
                    var r = n.extractTermsFromDOM(t.target);
                    r.action = t.type, "url" === r.element && (r.element = n.clickEventElement(t.target)), this.scribe(r, e, a)
                })
            }
        },
        171: function(t, e, a) {
            var r = a(40),
                n = a(0),
                s = a(172);

            function i() {
                r.apply(this, arguments), this.Widget = this.Component
            }
            i.prototype = Object.create(r.prototype), n.aug(i.prototype, {
                factory: s,
                build: function() {
                    return r.prototype.build.apply(this, arguments)
                },
                selectors: function(t) {
                    var e = this.Widget.prototype.selectors;
                    t = t || {}, this.Widget.prototype.selectors = n.aug({}, t, e)
                }
            }), t.exports = i
        },
        172: function(t, e, a) {
            var r = a(6),
                n = a(35),
                s = a(41),
                i = a(0),
                o = a(7),
                u = a(173),
                c = "twitter-widget-";
            t.exports = function() {
                var t = s();

                function e(e, a) {
                    t.apply(this, arguments), this.id = c + u(), this.sandbox = a
                }
                return e.prototype = Object.create(t.prototype), i.aug(e.prototype, {
                    selectors: {},
                    hydrate: function() {
                        return r.resolve()
                    },
                    prepForInsertion: function() {},
                    render: function() {
                        return r.resolve()
                    },
                    show: function() {
                        return r.resolve()
                    },
                    resize: function() {
                        return r.resolve()
                    },
                    select: function(t, e) {
                        return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, i.toRealArray(t.querySelectorAll(e))) : []
                    },
                    selectOne: function() {
                        return this.select.apply(this, arguments)[0]
                    },
                    selectLast: function() {
                        return this.select.apply(this, arguments).pop()
                    },
                    on: function(t, e, a) {
                        var r, s = this.el;
                        this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? a = e : r = e, r = this.selectors[r] || r, a = o(a, this), t.forEach(r ? function(t) {
                            n.delegate(s, t, r, a)
                        } : function(t) {
                            s.addEventListener(t, a, !1)
                        }))
                    }
                }), e
            }
        },
        173: function(t, e) {
            var a = 0;
            t.exports = function() {
                return String(a++)
            }
        },
        174: function(t, e, a) {
            var r = a(5),
                n = a(0);
            t.exports = function(t) {
                t.define("widgetDataAttributes", function() {
                    return {}
                }), t.define("setDataAttributes", function() {
                    var t = this.sandbox.sandboxEl;
                    n.forIn(this.widgetDataAttributes(), function(e, a) {
                        r.hasValue(a) && t.setAttribute("data-" + e, a)
                    })
                }), t.after("render", function() {
                    this.setDataAttributes()
                })
            }
        },
        175: function(t, e) {
            t.exports = function(t) {
                return t && "@" === t[0] ? t.substr(1) : t
            }
        },
        192: function(t, e) {
            var a = /\{\{([\w_]+)\}\}/g;
            t.exports = function(t, e) {
                return t.replace(a, function(t, a) {
                    return void 0 !== e[a] ? e[a] : t
                })
            }
        },
        209: function(t, e, a) {
            var r = a(6),
                n = a(169),
                s = a(33),
                i = a(19),
                o = a(192),
                u = a(0),
                c = a(11),
                l = a(7),
                p = a(72),
                h = a(71),
                m = p.followButtonHtmlPath,
                f = "Twitter Follow Button",
                d = "twitter-follow-button";

            function g(t) {
                return "large" === t ? "l" : "m"
            }
            t.exports = n.couple(a(170), a(174), function(t) {
                t.params({
                    screenName: {
                        required: !0
                    },
                    lang: {
                        required: !0,
                        transform: h.matchLanguage,
                        fallback: "en"
                    },
                    size: {
                        fallback: "medium",
                        transform: g
                    },
                    showScreenName: {
                        fallback: !0
                    },
                    showCount: {
                        fallback: !0
                    },
                    partner: {
                        fallback: l(s.val, s, "partner")
                    },
                    count: {},
                    preview: {}
                }), t.define("getUrlParams", function() {
                    return u.compact({
                        id: this.id,
                        lang: this.params.lang,
                        size: this.params.size,
                        screen_name: this.params.screenName,
                        show_count: "none" !== this.params.count && this.params.showCount,
                        show_screen_name: this.params.showScreenName,
                        preview: this.params.preview,
                        partner: this.params.partner,
                        dnt: i.enabled(),
                        time: +new Date
                    })
                }), t.around("widgetDataAttributes", function(t) {
                    return u.aug({
                        "screen-name": this.params.screenName
                    }, t())
                }), t.around("scribeNamespace", function(t) {
                    return u.aug(t(), {
                        page: "button",
                        section: "follow"
                    })
                }), t.define("scribeImpression", function() {
                    this.scribe({
                        action: "impression"
                    }, {
                        language: this.params.lang,
                        message: [this.params.size, "none" === this.params.count ? "nocount" : "withcount"].join(":") + ":"
                    })
                }), t.override("render", function() {
                    var t = o(m, {
                            lang: this.params.lang
                        }),
                        e = c.encode(this.getUrlParams()),
                        a = p.resourceBaseUrl + t + "#" + e;
                    return this.scribeImpression(), r.all([this.sandbox.setTitle(f), this.sandbox.addClass(d), this.sandbox.loadDocument(a)])
                })
            })
        },
        242: function(t, e, a) {
            var r = a(6),
                n = a(4),
                s = a(9),
                i = a(33),
                o = a(19),
                u = a(192),
                c = a(75),
                l = a(0),
                p = a(11),
                h = a(3),
                m = a(169),
                f = a(7),
                d = a(72),
                g = a(71),
                b = d.tweetButtonHtmlPath,
                w = "Twitter Tweet Button",
                v = "twitter-tweet-button",
                y = "twitter-share-button",
                _ = "twitter-hashtag-button",
                x = "twitter-mention-button",
                N = ["share", "hashtag", "mention"];

            function D(t) {
                return "large" === t ? "l" : "m"
            }

            function k(t) {
                return l.contains(N, t)
            }

            function z(t) {
                return h.hashTag(t, !1)
            }

            function A(t) {
                return /\+/.test(t) && !/ /.test(t) ? t.replace(/\+/g, " ") : t
            }
            t.exports = m.couple(a(170), a(174), function(t) {
                t.params({
                    lang: {
                        required: !0,
                        transform: g.matchLanguage,
                        fallback: "en"
                    },
                    size: {
                        fallback: "medium",
                        transform: D
                    },
                    type: {
                        fallback: "share",
                        validate: k
                    },
                    text: {
                        transform: A
                    },
                    screenName: {
                        transform: h.screenName
                    },
                    buttonHashtag: {
                        transform: z
                    },
                    partner: {
                        fallback: f(i.val, i, "partner")
                    },
                    via: {},
                    related: {},
                    hashtags: {},
                    url: {}
                }), t.define("getUrlParams", function() {
                    var t = this.params.text,
                        e = this.params.url,
                        a = this.params.via,
                        r = this.params.related,
                        i = c.getScreenNameFromPage();
                    return "share" === this.params.type ? (t = t || n.title, e = e || c.getCanonicalURL() || s.href, a = a || i) : i && (r = r ? i + "," + r : i), l.compact({
                        id: this.id,
                        lang: this.params.lang,
                        size: this.params.size,
                        type: this.params.type,
                        text: t,
                        url: e,
                        via: a,
                        related: r,
                        button_hashtag: this.params.buttonHashtag,
                        screen_name: this.params.screenName,
                        hashtags: this.params.hashtags,
                        partner: this.params.partner,
                        original_referer: s.href,
                        dnt: o.enabled(),
                        time: +new Date
                    })
                }), t.around("widgetDataAttributes", function(t) {
                    return "mention" == this.params.type ? l.aug({
                        "screen-name": this.params.screenName
                    }, t()) : "hashtag" == this.params.type ? l.aug({
                        hashtag: this.params.buttonHashtag
                    }, t()) : l.aug({
                        url: this.params.url
                    }, t())
                }), t.around("scribeNamespace", function(t) {
                    return l.aug(t(), {
                        page: "button",
                        section: this.params.type
                    })
                }), t.define("scribeImpression", function() {
                    this.scribe({
                        action: "impression"
                    }, {
                        language: this.params.lang,
                        message: [this.params.size, "nocount"].join(":") + ":"
                    })
                }), t.override("render", function() {
                    var t, e = u(b, {
                            lang: this.params.lang
                        }),
                        a = p.encode(this.getUrlParams()),
                        n = d.resourceBaseUrl + e + "#" + a;
                    switch (this.params.type) {
                        case "hashtag":
                            t = _;
                            break;
                        case "mention":
                            t = x;
                            break;
                        default:
                            t = y
                    }
                    return this.scribeImpression(), r.all([this.sandbox.setTitle(w), this.sandbox.addClass(v), this.sandbox.addClass(t), this.sandbox.loadDocument(n)])
                })
            })
        },
        84: function(t, e, a) {
            var r = a(169);
            t.exports = r.build([a(209)])
        },
        90: function(t, e, a) {
            var r = a(169);
            t.exports = r.build([a(242)])
        }
    }
]);