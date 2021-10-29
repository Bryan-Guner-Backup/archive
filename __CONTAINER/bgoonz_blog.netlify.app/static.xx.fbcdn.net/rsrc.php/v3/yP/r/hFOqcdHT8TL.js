if (self.CavalryLogger) {
    CavalryLogger.start_js(["CnTtmNw"]);
}

__d("SearchResultPageLoggingInlineActionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744351");
    c = b("FalcoLoggerInternal").create("search_result_page_logging_inline_action", a);
    e.exports = c
}), null);
__d("SearchResultPageLoggingItemClickedFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744352");
    c = b("FalcoLoggerInternal").create("search_result_page_logging_item_clicked", a);
    e.exports = c
}), null);
__d("SearchCometResultsLoggerUtil", ["SearchResultPageLoggingInlineActionFalcoEvent", "SearchResultPageLoggingItemClickedFalcoEvent", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a, b) {
        c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function() {
            var c = {
                click_type: "graph_search_results_module_tapped",
                common: {
                    logging_unit_id: a,
                    session_id: b,
                    timestamp: Date.now().toString()
                }
            };
            return c
        })
    };
    b = function(a, b, d) {
        c("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(function() {
            var c = {
                common: {
                    logging_unit_id: a,
                    session_id: b,
                    timestamp: Date.now().toString()
                },
                inline_action_name: d
            };
            return c
        })
    };
    d = function(a, b, d) {
        c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function() {
            var c = {
                click_type: "graph_search_results_item_in_module_tapped",
                common: {
                    logging_unit_id: a,
                    session_id: b,
                    timestamp: Date.now().toString()
                },
                unit_id_result_id: d
            };
            return c
        })
    };
    e = function(a, b, d) {
        c("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(function() {
            var c = {
                common: {
                    logging_unit_id: a,
                    session_id: b,
                    timestamp: Date.now().toString()
                },
                inline_action_name: d
            };
            return c
        })
    };
    f = function(a, b) {
        c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function() {
            var c = {
                click_type: "graph_search_results_see_more_on_module_tapped",
                common: {
                    logging_unit_id: a,
                    session_id: b,
                    timestamp: Date.now().toString()
                }
            };
            return c
        })
    };
    g.logModuleClick = a;
    g.logModuleInlineAction = b;
    g.logResultClick = d;
    g.logResultInlineAction = e;
    g.logSeeMoreClick = f
}), 98);
__d("BrowseClientEventLogger", ["csx", "DOMQuery", "SearchCometResultsLoggerUtil", "ge", "ifRequired"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "21.",
        j;

    function k(a, b, c, e) {
        e === void 0 && (e = {});
        if (!a || !b) return;
        e.event = a;
        e.client_time = Math.floor(Date.now());
        e.client_time_2 = Date.now() / 1e3;
        e.session_id = b;
        e.vertical = c;
        j = j || [];
        if (j.indexOf(b) !== -1) return;
        if (e.event === "click") switch (e.click_type) {
            case "see_more":
                d("SearchCometResultsLoggerUtil").logSeeMoreClick(e.unit_id, e.session_id);
                break;
            case "result":
                d("SearchCometResultsLoggerUtil").logResultClick(e.unit_id, e.session_id, e.unit_id_result_id);
                break
        }
        return
    }

    function a(a) {
        a.gt.event = "click", l(a, !0), c("ifRequired")("FacebarTypeaheadRefreshNullstate", function(a) {
            a.setIsNullstateStale(!0)
        })
    }

    function b(a) {
        a.event = "client_view", l(a)
    }

    function l(a, b) {
        b === void 0 && (b = !1);
        var c = null;
        b && (c = a, a = a.gt);
        if (!a || !a.xt || a.xt.indexOf(i) !== 0) return;
        var d = JSON.parse(a.xt.substring(3));
        b && (d.click_type = a.click_type, d.tn = a.tn, d.clicked_href = a.clicked_href, c && c.bt && c.bt.ct && (c.bt.ct === "feedback" && (d.feedback_score = c.bt.feedback_score, d.feedback_type = c.bt.feedback_type)));
        b = a.event;
        c = m(d.unit_id);
        d.position = c;
        if (d.display_style === "context_hscroll" && (b === "client_view" || b === "vpvd" || b === "visible" || b === "hidden")) return;
        if (b === "vpvd") {
            if (!a.ft) return;
            d.vpvd_time = a.ft.vpvd_time_delta
        }
        k(b, d.session_id, d.vertical, d)
    }

    function m(a) {
        if (a == null || a === void 0) return null;
        var b = 0,
            e = c("ge")("browse_result_area");
        if (e == null || e === void 0) return null;
        e = d("DOMQuery").scry(e, "._401d");
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            g = g.getAttribute("data-gt");
            if (g !== null || g !== void 0) {
                g = JSON.parse(JSON.parse(g).xt.substring(3));
                if (g.item_type === "result" && g.id !== "" && g.id !== null) {
                    if (g.unit_id === a) return b;
                    b++
                }
            }
        }
        return null
    }

    function e(a) {
        a.event = "impression", l(a)
    }
    g.logData = k;
    g.logClick = a;
    g.maybeLogClientViewEvent = b;
    g.maybeLogVisiblityEvent = l;
    g.logImpression = e
}), 98);
__d("XFollowPrivacyNuxLogViewAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/follow/follow_privacy/nux/log/view/", {})
}), null);
__d("XPubcontentChainedSuggestionsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pubcontent/chained_suggestions/", {
        pageid: {
            type: "String"
        },
        profileid: {
            type: "Int"
        },
        eh: {
            type: "Bool",
            defaultValue: !1
        },
        friendid: {
            type: "Int"
        }
    })
}), null);
__d("SubscribeButton", ["Arbiter", "AsyncRequest", "Button", "CSS", "Event", "TooltipData", "XFollowPrivacyNuxLogViewAsyncController", "XPubcontentChainedSuggestionsController"], (function(a, b, c, d, e, f) {
    var g = {
        SUBSCRIBED: "FollowingUser",
        UNSUBSCRIBED: "UnfollowingUser",
        _enable: function(a) {
            b("Button").setEnabled(a, !0), b("TooltipData").remove(a)
        },
        _disable: function(a, c) {
            b("Button").setEnabled(a, !1), c && b("TooltipData").set(a, c)
        },
        init: function(a, c, d, e, f, h, i, j, k, l, m, n, o) {
            var p = !m && !o,
                q = !(k === void 0 || k === null);
            q && !i && !j && g._disable(c, k);
            b("Event").listen(c, "click", function() {
                b("Arbiter").inform(g.SUBSCRIBED, {
                    profile_id: e,
                    contextID: n,
                    suppress: !0
                });
                if (l) {
                    l.show();
                    var a = b("XFollowPrivacyNuxLogViewAsyncController").getURIBuilder().getURI();
                    new(b("AsyncRequest"))(a).send()
                }
            });
            b("Arbiter").subscribe(g.SUBSCRIBED, function(k, l) {
                if (e == l.profile_id) {
                    f || d.suppressNextMouseEnter && d.suppressNextMouseEnter();
                    q && (typeof l.connected !== "undefined" && (i = l.connected), (i || j) && g._enable(c));
                    l.focusOnClick !== void 0 && (p = l.focusOnClick);
                    a.swap(p);
                    if (h === !0 && l.chaining !== !1) {
                        k = b("XPubcontentChainedSuggestionsController").getURIBuilder().setInt("profileid", e).getURI();
                        new(b("AsyncRequest"))().setURI(k).send()
                    }
                }
            });
            b("Arbiter").subscribe(g.UNSUBSCRIBED, function(f, h) {
                e == h.profile_id && (a.unswap(p), d.hideFlyout && d.hideFlyout(), q && (typeof h.connected !== "undefined" && (i = h.connected), !i && !j && g._disable(c, k)), b("Arbiter").inform("SubMenu/Reset"))
            })
        },
        initSubscribe: function(a, c) {
            b("Event").listen(a, "click", function() {
                setTimeout(b("Arbiter").inform.bind(b("Arbiter"), g.SUBSCRIBED, {
                    profile_id: c
                }), 0)
            })
        },
        initUnsubscribe: function(a, c, d) {
            b("Event").listen(a, "click", function() {
                setTimeout(b("Arbiter").inform.bind(b("Arbiter"), g.UNSUBSCRIBED, {
                    profile_id: c,
                    contextID: d
                }), 0)
            })
        },
        initSubscribeMenuItem: function(a, c, d) {
            b("CSS").hide(c), this._initMenuItem(a, c, d)
        },
        initUnsubscribeMenuItem: function(a, c, d) {
            b("CSS").hide(a), this._initMenuItem(a, c, d)
        },
        _initMenuItem: function(a, c, d) {
            this.initSubscribe(a, d), this.initUnsubscribe(c, d), b("Arbiter").subscribe(g.SUBSCRIBED, function(d, e) {
                b("CSS").hide(a), b("CSS").show(c)
            }), b("Arbiter").subscribe(g.UNSUBSCRIBED, function(d, e) {
                b("CSS").hide(c), b("CSS").show(a)
            })
        }
    };
    e.exports = g
}), null);
__d("tidyEvent", ["Run"], (function(a, b, c, d, e, f, g) {
    var h = [];

    function i() {
        while (h.length) {
            var a = h.shift();
            a.remove ? a.remove() : a.unsubscribe && a.unsubscribe()
        }
    }

    function j(a) {
        var b, c = a;

        function d() {
            if (!b) return;
            b.apply(c, arguments);
            b = null;
            c = null
        }
        if (c && c.remove) b = c.remove, c.remove = d;
        else {
            b = (a = c) == null ? void 0 : a.unsubscribe;
            c.unsubscribe = d
        }
        return c
    }

    function a(a) {
        h.length || d("Run").onLeave(i);
        if (Array.isArray(a))
            for (var b = 0; b < a.length; b++) a[b] && h.push(j(a[b]));
        else a && h.push(j(a));
        return a
    }
    g["default"] = a
}), 98);
__d("EntstreamAttachmentRelatedShare", ["csx", "cx", "Arbiter", "AsyncRequest", "CSS", "DOM", "Event", "SubscribeButton", "ThisControllerNoLongerExists", "ge", "tidyEvent"], (function(a, b, c, d, e, f, g, h) {
    var i = 2,
        j = 3;
    a = {
        loadSuggestedShowsPivotAttachment: function(a, c, d) {
            var e = b("ge")(a);
            if (!e) return;
            var f = b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED, function(a, g) {
                f.unsubscribe();
                if (g.profile_id !== c.toString()) return;
                b("Arbiter").inform("show_follow_click", {
                    attachment: e,
                    pageID: c,
                    storyID: d
                })
            })
        },
        loadRelatedAttachment: function(a, c, d) {
            var e = null;
            typeof a === "string" ? e = b("ge")(a) : e = a;
            if (!e) return;
            var f = b("Event").listen(e, "click", function() {
                    f.remove(), b("Arbiter").inform("article_click", {
                        attachment: e,
                        global_share_id: c,
                        is_right_click: !1,
                        share_id: d
                    })
                }),
                g = b("Event").listen(e, "mousedown", function(a) {
                    (a.which === j || a.button === i) && (g.remove(), b("Arbiter").inform("article_click", {
                        attachment: e,
                        global_share_id: c,
                        is_right_click: !0
                    }))
                })
        },
        loadInlineStoryPivotAttachment: function(a, c) {
            var d = b("ge")(a);
            if (!d) return;
            var e = b("Event").listen(d, "click", function() {
                e.remove(), b("Arbiter").inform("photo_click", {
                    attachment: d,
                    storyid: c
                })
            })
        },
        loadRelatedGameAttachment: function(a, c) {
            var d = null;
            typeof a === "string" ? d = b("ge")(a) : d = a;
            if (!d) return;
            b("tidyEvent")(b("Event").listen(d, "click", function() {
                b("Arbiter").inform("game_click", {
                    attachment: d,
                    global_share_id: c
                })
            }));
            b("tidyEvent")(b("Event").listen(d, "mousedown", function(a) {
                (a.which === j || a.button === i) && b("Arbiter").inform("game_click", {
                    attachment: d,
                    global_share_id: c
                })
            }))
        },
        loadRelatedLSCVideoAttachment: function(a, c) {
            var d = null;
            typeof a === "string" ? d = b("ge")(a) : d = a;
            if (!d) return;
            var e = b("Event").listen(d, "click", function() {
                e.remove(), b("Arbiter").inform("video_click", {
                    attachment: d,
                    global_share_id: c
                })
            })
        },
        loadRelatedEventsPivotAttachment: function(a, c) {
            var d = null;
            typeof a === "string" ? d = b("ge")(a) : d = a;
            if (!d) return;
            b("tidyEvent")(b("Event").listen(d, "click", function() {
                b("Arbiter").inform("event_join", {
                    attachment: d,
                    event_id: c
                })
            }))
        },
        loadMapAttachment: function(a, c, d) {
            a = typeof a === "string" ? b("ge")(a) : a;
            if (!a) return;
            var e = typeof c === "string" ? b("ge")(c) : c;
            if (!e) return;
            b("tidyEvent")(b("Event").listen(a, "click", function() {
                b("Arbiter").inform("map_click", {
                    attachment: e,
                    story_id: d
                })
            }))
        },
        loadMapAttachmentActionButton: function(a, c) {
            var d = typeof a === "string" ? b("ge")(a) : a;
            if (!d) return;
            b("tidyEvent")(b("Event").listen(d, "click", function() {
                b("Arbiter").inform("action_button_click", {
                    button: d,
                    story_id: c
                })
            }))
        },
        closeButton: function(a, c) {
            b("Event").listen(a, "click", function() {
                b("DOM").remove(c)
            })
        },
        closeButtonPhotoPivots: function(a, c, d, e) {
            b("Event").listen(a, "click", function() {
                var a = b("ThisControllerNoLongerExists").__DEADBUILDER__("ac8f3xt4"),
                    f = {
                        story_id: d,
                        search_query_type: e,
                        event: "hide"
                    };
                new(b("AsyncRequest"))().setMethod("POST").setURI(a.getURI()).setData(f).send();
                b("DOM").remove(c)
            })
        },
        seeAllLinkPhotoPivots: function(a, c, d) {
            b("Event").listen(a, "click", function() {
                var a = b("ThisControllerNoLongerExists").__DEADBUILDER__("0pr7u8i9i"),
                    e = {
                        story_id: c,
                        search_query_type: d,
                        event: "see_all"
                    };
                new(b("AsyncRequest"))().setMethod("POST").setURI(a.getURI()).setData(e).send()
            })
        },
        removeOldSuggestions: function(a) {
            a = b("ge")(a);
            if (!a) return;
            var c = b("DOM").scry(a.parentNode, "._5d73");
            for (var a = 1; a < c.length; a++) b("DOM").remove(c[a]);
            window.setTimeout(function() {
                b("CSS").show(c[0])
            }, 1e3)
        },
        showHiddenSuggestions: function(a) {
            var c = b("Event").listen(a, "click", function() {
                c.remove();
                var d = "^._1ui8";
                d = b("DOM").scry(a, d);
                if (!d) return;
                b("CSS").hide(d[0]);
                d = d[0].previousSibling;
                while (d) b("CSS").show(d), d = d.previousSibling
            })
        }
    };
    e.exports = a
}), null);
__d("FBStoriesLoggingConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "event";
    b = "followee";
    c = "friend";
    d = "group";
    e = "missingStoryData";
    var g = "page",
        h = "self",
        i = "promotion",
        j = "open_media",
        k = "delete_media_attempted",
        l = "attempt_to_send_reply",
        m = "reaction_sticker_interacted",
        n = "open_seen_summary",
        o = "open_story",
        p = "close_story",
        q = "story_tray_load",
        r = "send_story_failed",
        s = "send_story_succeed",
        t = "reply_attempt_completed",
        u = "story_navigation",
        v = "reshared_story_tap",
        w = "reshared_story_view_story_tap",
        x = {
            CLOSE_STORY: {
                CLICK_RIGHT: "click_right",
                CLICK_LEFT: "click_left",
                AUTO_JUMP: "auto_jump",
                AUTO_EXIT: "auto_exit",
                CLICK_EXIT: "click_exit",
                SWIPE_RIGHT: "swipe_right",
                SWIPE_LEFT: "swipe_left",
                SWIPE_EXIT: "swipe_exit",
                SWIPE_DOWN_EXIT: "swipe_down_exit",
                CLOSE_BUTTON_EXIT: "close_button_exit",
                BACK_BUTTON_EXIT: "back_button_exit"
            }
        },
        y = "closeFromClickingOnModal",
        z = "closeFromClickingOnModalCloseButton",
        A = "closeFromLastStoryFinishing",
        B = {
            ARCHIVE: "archive",
            POST_HEADER: "post_header_actor_photo",
            STORY_TRAY: "story_tray",
            IN_FEED: "in_feed",
            UNKNOWN: "unknown"
        };
    f.EVENT_STORY = a;
    f.FOLLOWEE_STORY = b;
    f.FRIEND_STORY = c;
    f.GROUP_STORY = d;
    f.MISSING_STORY_DATA = e;
    f.PAGE_STORY = g;
    f.SELF_STORY = h;
    f.STORY_PROMOTION = i;
    f.ACTION_OPEN_MEDIA = j;
    f.ACTION_DELETE_MEDIA = k;
    f.ACTION_SEND_REPLY_ATTEMPT = l;
    f.ACTION_SEND_REACTION_STICKER_INTERACTED = m;
    f.ACTION_OPEN_SEEN_SUMMARY = n;
    f.ACTION_OPEN_STORY = o;
    f.ACTION_CLOSE_STORY = p;
    f.ACTION_TRAY_LOAD = q;
    f.ACTION_SEND_STORY_FAILED = r;
    f.ACTION_SEND_STORY_SUCCEEDED = s;
    f.ACTION_REPLY_ATTEMPT_COMPLETED = t;
    f.ACTION_STORY_NAVIGATION = u;
    f.INTERACTION_TAP_RESHARED_STORY = v;
    f.INTERACTION_TAP_RESHARED_TOOLTIP = w;
    f.GESTURES = x;
    f.SOURCE_CLOSE_FROM_MODAL = y;
    f.SOURCE_CLOSE_FROM_MODAL_CLOSE_BUTTON = z;
    f.SOURCE_CLOSE_FROM_LAST_STORY_FINISHING = A;
    f.SOURCES = B
}), 66);
__d("XFBStoriesSingleStoryAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/stories/view/async/", {
        card_id: {
            type: "FBID"
        },
        story_id: {
            type: "FBID"
        },
        auto_open_viewersheet: {
            type: "Bool",
            defaultValue: !1
        },
        story_action_source: {
            type: "String"
        }
    })
}), null);
__d("FBStoriesRing", ["csx", "cx", "Arbiter", "CSS", "DOM", "FBStoriesLoggingConstants", "XFBStoriesSingleStoryAsyncController"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a.element;
            this.$2 = a.profileId;
            this.$3 = a.storyId;
            this.$4 = !1;
            a = c("DOM").scry(this.$1, "._6_ut");
            a.length > 0 && (this.$4 = !0);
            this.$5()
        }
        var b = a.prototype;
        b.$5 = function() {
            var a = this;
            c("Arbiter").subscribe("has_story_bucket_been_seen", function(b, e) {
                if (a.$2 === e) {
                    b = c("DOM").scry(a.$1, "._6_ut");
                    b.length > 0 && (d("CSS").removeClass(b[0], "_6_ut"), a.$4 = !1)
                }
            });
            c("Arbiter").subscribe("update_next_thread_to_view", function(b, e) {
                b = e.bucketOwnerId;
                e = e.threadId;
                if (a.$2 === b && a.$4) {
                    b = c("XFBStoriesSingleStoryAsyncController").getURIBuilder().setFBID("story_id", a.$3).setFBID("card_id", e).setBool("auto_open_viewersheet", !1).setString("story_action_source", d("FBStoriesLoggingConstants").SOURCES.POST_HEADER).getURI();
                    a.$1.setAttribute("ajaxify", b)
                }
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("LitestandMessages", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NEWSFEED_LOAD: "LitestandMessages/NewsFeedLoad",
        LEAVE_HOME: "LitestandMessages/LeaveHome",
        STORIES_REQUESTED: "LitestandMessages/StoriesRequested",
        STORIES_INSERTED: "LitestandMessages/StoriesInserted",
        NEWER_STORIES_REQUESTED: "LitestandMessages/NewerStoriesRequested",
        NEWER_STORIES_INSERTED: "LitestandMessages/NewerStoriesInserted",
        NEW_STORIES_CONTAINER_CREATED: "LitestandMessages/NewStoriesContainer",
        RHC_RELOADED: "LitestandMessages/RHCReloaded",
        STREAM_LOAD_ERROR: "LitestandMessages/StreamLoadError",
        DUPLICATE_CURSOR_ERROR: "LitestandMessages/DuplicateCursorError",
        STREAM_LOAD_RETRY: "LitestandMessages/StreamLoadRetry"
    });
    f["default"] = a
}), 66);
__d("ViewableImpressionUtils", ["csx", "CSS"], (function(a, b, c, d, e, f, g) {
    a = {
        isHorizontallyOffscreen: function(a, c, d) {
            var e = Math.max(c.x, 0);
            d = Math.min(c.x + c.width, d.width);
            return d - e < c.width || b("CSS").matchesSelector(a, ".desktop_hscroll_offscreen")
        }
    };
    e.exports = a
}), null);
__d("VisibilityTrackingHelper", ["Arbiter", "DesktopHscrollUnitEventConstants", "Event", "getViewportDimensions"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        var e = [c("Event").listen(document, "DOMContentLoaded", a), c("Event").listen(window, "scroll", a), c("Event").listen(window, "resize", a), c("Arbiter").subscribe(d("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT, a)];
        b.considerSubtreeModification === !0 && e.push(c("Event").listen(document, "DOMSubtreeModified", a));
        return e
    }

    function b() {
        return c("getViewportDimensions")()
    }

    function e() {
        return !1
    }
    g.getEventListeners = a;
    g.getViewportInfo = b;
    g.isSnippetFlyoutVisible = e
}), 98);
__d("MsiteFullViewFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1962677");
    c = b("FalcoLoggerInternal").create("msite_full_view", a);
    e.exports = c
}), null);
__d("FullViewLogger", ["Banzai", "MsiteFullViewFalcoEvent", "ScriptPath", "SubscriptionsHandler", "URI", "killswitch", "uuid"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a() {}
        a.logFromViewableImpressionTracker = function(b) {
            var c = new a();
            c.subscribeToTrackerEvents(b)
        };
        var b = a.prototype;
        b.subscribeToTrackerEvents = function(a) {
            this.$1 = new(c("SubscriptionsHandler"))(), this.$1.addSubscriptions(a.addListener("full_view", this.onFullView.bind(this)))
        };
        b.onFullView = function(a) {
            this.$2() && this.$3(a);
            var b = c("uuid")(),
                d = {
                    token: a.token,
                    fullViewType: a.fullViewType,
                    scriptPath: c("ScriptPath").getTopViewEndpoint(),
                    eventTraceID: b
                };
            c("Banzai").post("xtrackable:full_view", d);
            c("killswitch")("MSITE_STOP_FULLVIEW_LOGGING_VIA_FALCO") || c("MsiteFullViewFalcoEvent").log(function() {
                return d
            });
            this.$2() && this.$4(d)
        };
        b.$2 = function() {
            return 0
        };
        b.$3 = function(a) {};
        b.$4 = function(a) {};
        return a
    }();
    g["default"] = a
}), 98);
__d("MsiteViewabilityFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1958033");
    c = b("FalcoLoggerInternal").create("msite_viewability", a);
    e.exports = c
}), null);
__d("ViewabilityDurationSegmentLogger", ["Banzai", "MsiteViewabilityFalcoEvent", "PercentVisible", "killswitch", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 8e3;
    a = function() {
        a.logFromViewableImpressionTracker = function(b) {
            var c = new a();
            c.subscribeToTrackerEvents(b)
        };

        function a() {
            this.$1 = new Map(), this.$2 = new Map(), this.$3 = new Map(), this.$4 = new Map(), this.$5 = new Map()
        }
        var b = a.prototype;
        b.subscribeToTrackerEvents = function(a) {
            a.addListener("viewability", this.onViewable.bind(this)), a.addListener("viewport_viewability", this.onViewport.bind(this)), a.addListener("hidden", this.onHidden.bind(this))
        };
        b.onViewable = function(a) {
            var b = a.id,
                c = a.percentVisible,
                e = Date.now(),
                f;
            switch (c) {
                case d("PercentVisible").VISIBLE_0_PCT:
                    c = this.$1.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_0_PCT, e, "feed_unit") : this.$7(c, b, e);
                    c = this.$2.get(b);
                    c && (f = this.$8(c, b, e, !0), this.$9(f, b));
                    c = this.$4.get(b);
                    c && (f = this.$8(c, b, e, !0), this.$9(f, b));
                    break;
                case d("PercentVisible").VISIBLE_50_PCT:
                    c = this.$1.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_0_PCT, e, "feed_unit") : this.$7(c, b, e);
                    c = this.$2.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_50_PCT, e, "feed_unit") : this.$7(c, b, e);
                    c = this.$4.get(b);
                    c && (f = this.$8(c, b, e, !0), this.$9(f, b));
                    break;
                case d("PercentVisible").VISIBLE_100_PCT:
                    c = this.$1.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_0_PCT, e, "feed_unit") : this.$7(c, b, e);
                    c = this.$2.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_50_PCT, e, "feed_unit") : this.$7(c, b, e);
                    c = this.$4.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_100_PCT, e, "feed_unit") : this.$7(c, b, e);
                    break
            }
        };
        b.onViewport = function(a) {
            var b = a.id,
                c = a.percentVisible,
                e = Date.now(),
                f;
            switch (c) {
                case d("PercentVisible").VISIBLE_0_PCT:
                    c = this.$3.get(b);
                    c && (f = this.$8(c, b, e, !0), this.$9(f, b));
                    c = this.$5.get(b);
                    c && (f = this.$8(c, b, e, !0), this.$9(f, b));
                    break;
                case d("PercentVisible").VISIBLE_50_PCT:
                    c = this.$3.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_50_PCT, e, "viewport") : this.$7(c, b, e);
                    c = this.$5.get(b);
                    c && (f = this.$8(c, b, e, !0), this.$9(f, b));
                    break;
                case d("PercentVisible").VISIBLE_100_PCT:
                    c = this.$3.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_50_PCT, e, "viewport") : this.$7(c, b, e);
                    c = this.$5.get(b);
                    !c ? this.$6(a, d("PercentVisible").VISIBLE_100_PCT, e, "viewport") : this.$7(c, b, e);
                    break
            }
        };
        b.onHidden = function(a) {
            a = a.id;
            var b = Date.now(),
                c = this.$1.get(a),
                d = this.$2.get(a),
                e = this.$3.get(a),
                f = this.$4.get(a),
                g = this.$5.get(a);
            c && this.$9(this.$8(c, a, b, !0), a);
            d && this.$9(this.$8(d, a, b, !0), a);
            e && this.$9(this.$8(e, a, b, !0), a);
            f && this.$9(this.$8(f, a, b, !0), a);
            g && this.$9(this.$8(g, a, b, !0), a)
        };
        b.$6 = function(a, b, c, e) {
            c = {
                token: a.token,
                startedTrackingTS: c,
                percentVisible: b,
                visibilityUnit: e,
                intervalMs: 0,
                cumulativeMs: 0,
                segmentIdx: 0,
                eventTraceID: ""
            };
            switch (b) {
                case d("PercentVisible").VISIBLE_0_PCT:
                    this.$1.set(a.id, c);
                    break;
                case d("PercentVisible").VISIBLE_50_PCT:
                    e === "feed_unit" ? this.$2.set(a.id, c) : this.$3.set(a.id, c);
                    break;
                case d("PercentVisible").VISIBLE_100_PCT:
                    e === "feed_unit" ? this.$4.set(a.id, c) : this.$5.set(a.id, c);
                    break
            }
        };
        b.$8 = function(a, b, c, e) {
            c = c - a.startedTrackingTS;
            var f = c - a.cumulativeMs,
                g = a.percentVisible;
            f = {
                token: a.token,
                startedTrackingTS: a.startedTrackingTS,
                percentVisible: g,
                visibilityUnit: a.visibilityUnit,
                intervalMs: f,
                cumulativeMs: c,
                segmentIdx: ++a.segmentIdx,
                eventTraceID: ""
            };
            e && (f.duration = c);
            switch (g) {
                case d("PercentVisible").VISIBLE_0_PCT:
                    this.$1.set(b, f);
                    break;
                case d("PercentVisible").VISIBLE_50_PCT:
                    a.visibilityUnit === "feed_unit" ? this.$2.set(b, f) : this.$3.set(b, f);
                    break;
                case d("PercentVisible").VISIBLE_100_PCT:
                    a.visibilityUnit === "feed_unit" ? this.$4.set(b, f) : this.$5.set(b, f);
                    break
            }
            return f
        };
        b.$7 = function(a, b, d) {
            var e = this,
                f = a.intervalMs,
                g = d - a.startedTrackingTS - a.cumulativeMs;
            if (this.$10(f, g)) {
                var h = this.$8(a, b, d, !1);
                f = c("uuid")();
                h.eventTraceID = f;
                c("Banzai").post("xtrackable:viewability", h, c("Banzai").VITAL);
                c("killswitch")("MSITE_STOP_VIEWABILITY_LOGGING_VIA_FALCO") || c("MsiteViewabilityFalcoEvent").logImmediately(function() {
                    return e.$11(h)
                })
            }
        };
        b.$10 = function(a, b) {
            if (a >= h) return !1;
            if (a == 0) return !0;
            if (a < 1e3) return b >= 1e3;
            a = a / 1e3;
            b = b / 1e3;
            return b >= 2 * a
        };
        b.$9 = function(a, b) {
            var e = this,
                f = a.percentVisible;
            switch (f) {
                case d("PercentVisible").VISIBLE_0_PCT:
                    this.$1["delete"](b);
                    break;
                case d("PercentVisible").VISIBLE_50_PCT:
                    a.visibilityUnit === "feed_unit" ? this.$2["delete"](b) : this.$3["delete"](b);
                    break;
                case d("PercentVisible").VISIBLE_100_PCT:
                    a.visibilityUnit === "feed_unit" ? this.$4["delete"](b) : this.$5["delete"](b);
                    break
            }
            f = c("uuid")();
            a.eventTraceID = f;
            c("Banzai").post("xtrackable:viewability", a, c("Banzai").VITAL);
            c("killswitch")("MSITE_STOP_VIEWABILITY_LOGGING_VIA_FALCO") || c("MsiteViewabilityFalcoEvent").logImmediately(function() {
                return e.$11(a)
            })
        };
        b.$11 = function(a) {
            return {
                token: a.token,
                startedTrackingTS: a.startedTrackingTS.toString(),
                segmentIdx: a.segmentIdx.toString(),
                percentVisible: a.percentVisible.toString(),
                visibilityUnit: a.visibilityUnit,
                intervalMs: a.intervalMs.toString(),
                cumulativeMs: a.cumulativeMs.toString(),
                eventTraceID: a.eventTraceID,
                duration: (a = a.duration) == null ? void 0 : a.toString()
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ViewableImpressionDurationLogger", ["Banzai"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        a.logFromViewableImpressionTracker = function(b) {
            var c = new a();
            c.subscribeToTrackerEvents(b)
        };

        function a() {
            this.$1 = new Map()
        }
        var b = a.prototype;
        b.subscribeToTrackerEvents = function(a) {
            a.addListener("visible", this.onElementVisible.bind(this)), a.addListener("hidden", this.onElementHidden.bind(this))
        };
        b.onElementVisible = function(a) {
            if (this.$1.get(a.id)) return null;
            var b = {
                token: a.token,
                startedTrackingTS: this.getTimeNow()
            };
            this.$1.set(a.id, b);
            return b
        };
        b.onElementHidden = function(a) {
            var b = this.$1.get(a.id);
            if (!b) return !1;
            b.trackingDuration = this.getTimeNow() - b.startedTrackingTS;
            return this.sendLog(a.id)
        };
        b.sendLog = function(a) {
            var b = this.$1.get(a);
            if (!b || !b.trackingDuration) return !1;
            c("Banzai").post("xtrackable:duration", b);
            this.$1["delete"](a);
            return !0
        };
        b.getTimeNow = function() {
            return parseFloat((Date.now() / 1e3).toFixed(2))
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ViewableImpressionHeatmapLogger", ["Banzai"], (function(a, b, c, d, e, f, g) {
    a = function() {
        a.logFromViewableImpressionTracker = function(b, c) {
            c = new a(c);
            c.subscribeToTrackerEvents(b)
        };

        function a(a) {
            this.$1 = a, this.$2 = new Map()
        }
        var b = a.prototype;
        b.subscribeToTrackerEvents = function(a) {
            a.addListener("visible", this.onElementVisible.bind(this)), a.addListener("hidden", this.onElementHidden.bind(this))
        };
        b.onElementVisible = function(a) {
            var b = this.getCurrentTimestamp(),
                c = this.$2[a.id];
            c || (c = this.createTrackingEntry(a), this.beginTracking(a.id, c), b = c.startedTrackingTS);
            c.viewportProgressEvents.push({
                timestamp: b,
                percentInViewport: a.percentInViewport.toFixed(2)
            })
        };
        b.onElementHidden = function(a) {
            var b = this.getCurrentTimestamp();
            a = this.$2[a.id];
            if (!a) return;
            a.viewportProgressEvents.push({
                timestamp: b,
                percentInViewport: 0
            })
        };
        b.onTrackingCompleted = function(a) {
            var b = this.$2.get(a);
            if (!b) return;
            b.viewportProgressEvents.push({
                timestamp: this.getCurrentTimestamp(),
                percentInViewport: b.tracker.getPercentInViewport().toFixed(2)
            });
            this.$3() && this.$4(a, b);
            this.logToServer(b);
            this.$2["delete"](a)
        };
        b.logToServer = function(a) {
            a = a;
            delete a.tracker;
            c("Banzai").post("xtrackable:heatmap", a)
        };
        b.beginTracking = function(a, b) {
            var c = this;
            this.$2.set(a, b);
            setTimeout(function() {
                return c.onTrackingCompleted(a)
            }, this.$1)
        };
        b.createTrackingEntry = function(a) {
            return {
                tracker: a.tracker,
                token: a.token,
                startedTrackingTS: this.getCurrentTimestamp(),
                viewportProgressEvents: []
            }
        };
        b.getCurrentTimestamp = function() {
            return (Date.now() / 1e3).toFixed(2)
        };
        b.$3 = function() {
            return 0
        };
        b.$4 = function(a, b) {
            var c = "Completed tracking for id " + a + " token=" + b.token + " startedTrackingTS=" + b.startedTrackingTS + "\n";
            b.viewportProgressEvents.forEach(function(a) {
                c += "% in view: " + a.percentInViewport + " timestamp=" + a.timestamp + "\n"
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FBFeedImpressionTopMarginGetter", ["getElementPosition", "getStyleProperty"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null;

    function i() {
        try {
            if (h == null) return 0;
            var a = c("getStyleProperty")(h, "position");
            if (a === "fixed") {
                a = c("getElementPosition")(h);
                return a.height > 0 ? Math.max(0, a.y + a.height) : 0
            }
            return 0
        } catch (a) {
            return 0
        }
    }

    function j() {
        try {
            var a = document.getElementById("bluebarRoot");
            if (a == null) return 0;
            a = a.firstChild;
            if (a == null) return 0;
            a = c("getElementPosition")(a);
            return Math.max(0, a.y + a.height)
        } catch (a) {
            return 0
        }
    }

    function a(a) {
        h = a
    }

    function b() {
        var a = j(),
            b = i();
        return Math.max(a, b)
    }
    g.setActionBar = a;
    g.getTopMargin = b
}), 98);
__d("FBImpressionValidationUtils", ["DataAttributeUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getFBFeedLocation: function(a) {
            try {
                a = JSON.parse(b("DataAttributeUtils").getDataFt(a));
                return a ? a.fbfeed_location : null
            } catch (a) {
                return null
            }
        }
    };
    e.exports = a
}), null);
__d("FeedAdXoutEventTracker", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set();

    function a(a) {
        c("gkx")("983221") && h.add(a)
    }

    function b(a) {
        c("gkx")("983221") && h["delete"](a)
    }

    function d(a) {
        return c("gkx")("983221") ? h.has(a) : !1
    }
    g.markHidden = a;
    g.undoHidden = b;
    g.checkIfHidden = d
}), 98);
__d("GHLDelay", ["AdImpressionLoggingConfig"], (function(a, b, c, d, e, f) {
    var g = null;
    a = {
        getEnabled: function() {
            return g === null ? b("AdImpressionLoggingConfig").enableDelayedHiddenCheck : g
        },
        setEnabled: function(a) {
            g = a
        }
    };
    e.exports = a
}), null);
__d("GHLTestElement", ["csx", "invariant", "ODS", "Parent", "URI", "containsNode", "getElementPosition", "gkx"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    a = function(a, c) {
        var d = Array.from(a.querySelectorAll("img"));
        if (b("gkx")("1059877")) {
            var e = (i || (i = b("URI"))).getRequestURI();
            e = e != null ? e.getPath() : "";
            var f = "images" + c,
                g = "length_" + String(d.length);
            m(f + "." + g);
            m(f + ".path_" + e + "." + g)
        }
        d.length > 0 || h(0, 13937);
        f = d.filter(j);
        if (f.length === 0) {
            b("gkx")("1059877") && j(a) && m("images_removed_but_element_exists");
            m("skipping_check_for_incompatible_element" + c);
            return !1
        }
        e = f.filter(function(a) {
            a = b("getElementPosition")(a);
            return a.width > 0 || a.height > 0
        });
        g = e.length === 0;
        return g && !k(a)
    };
    var j = function(a) {
            var c;
            return b("containsNode")(a == null ? void 0 : (c = a.ownerDocument) == null ? void 0 : c.documentElement, a)
        },
        k = function(a) {
            return !!b("Parent").bySelector(a, l)
        },
        l = [".hidden_elem", "._5ds2", "._i6m"].join(","),
        m = function(a) {
            return b("ODS").bumpEntityKey(2966, "feed_ads", "GHLTestElement.testElementI." + a)
        };
    e.exports = {
        testElementI: a
    }
}), null);
__d("MsiteViewableImpressionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1953926");
    c = b("FalcoLoggerInternal").create("msite_viewable_impression", a);
    e.exports = c
}), null);
__d("NonBlockingIFrame", ["DOM", "Promise", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = {},
        h, i;

    function j(a, c) {
        a === void 0 && (a = g);
        c === void 0 && (c = document.body);
        var d = {
            className: "nonBlockingIframe",
            width: 0,
            height: 0,
            frameborder: 0,
            scrolling: "no",
            "aria-hidden": "true"
        };
        a !== g && (d.src = a);
        d = b("DOM").create("iframe", d);
        d.style.left = "-1000px";
        d.style.position = "absolute";
        b("DOM").appendContent(c, d);
        a === g && (d.contentDocument.open(), d.contentDocument.close());
        return d
    }

    function k() {
        return new(b("Promise"))(function(a) {
            h || (h = j()), h.contentDocument.readyState === "complete" ? a(h) : (i || (i = new(b("Promise"))(function(a) {
                h.contentWindow.onload = b("TimeSlice").guard(function() {
                    a(h)
                }, "NonBlockingIFrame window.onload")
            })), a(i))
        })
    }
    a = {
        loadImage: function(a) {
            return k().then(function(c) {
                return new(b("Promise"))(function(d, e) {
                    var f = c.contentWindow.Image,
                        g = new f();
                    g.onload = b("TimeSlice").guard(function() {
                        d(g)
                    }, "NonBlockingIFrame image.onload");
                    g.onerror = b("TimeSlice").guard(function() {
                        e(g)
                    }, "NonBlockingIFrame image.onerror");
                    g.onabort = b("TimeSlice").guard(function() {
                        e(g)
                    }, "NonBlockingIFrame image.onabort");
                    g.src = a
                })
            })
        },
        loadIFrame: function(a) {
            a === void 0 && (a = g);
            return k().then(function(b) {
                b = b.contentDocument.body;
                return j(a, b)
            })
        }
    };
    e.exports = a
}), null);
__d("ViewabilityFramework", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        VIEWABLE_TRACKER_BLUE: "current_blue",
        VIEWABLE_TRACKER_BLUE_RHC: "current_blue_rhc",
        VIEWABLE_TRACKER_BLUE_EXIT: "current_blue_exit",
        VIEWABLE_TRACKER_BLUE_AFTER_DEDUP: "current_blue_after_dedup",
        IMPRESSION_API_COMET_ENTER: "impression_api_comet_enter",
        IMPRESSION_API_COMET_EXIT: "impression_api_comet_exit",
        IMPRESSION_API_COMET_AFTER_DEDUP: "impression_api_comet_after_dedup",
        IMPRESSION_API_COMET_AFTER_DEDUP_ORIGINAL: "impression_api_comet_after_dedup_original",
        INTERSECTION_OBSERVER_BLUE: "intersection_observer_blue",
        INTERSECTION_OBSERVER_BLUE_RHC: "intersection_observer_blue_rhc",
        INTERSECTION_OBSERVER_BLUE_EXIT: "intersection_observer_blue_exit",
        INTERSECTION_OBSERVER_BLUE_AFTER_DEDUP: "intersection_observer_blue_after_dedup",
        SCROLL_BASED_BLUE: "scroll_based_blue",
        SCROLL_BASED_BLUE_RHC: "scroll_based_blue_rhc",
        SCROLL_COMET: "scroll_comet",
        SCROLL_COMET_AFTER_DEDUP: "scroll_comet_after_dedup",
        SCROLL_COMET_EXIT: "scroll_comet_exit",
        AD_UNIT_GENERIC_API_COMET: "ad_unit_generic_api_comet",
        AD_UNIT_GENERIC_API_COMET_EXIT: "ad_unit_generic_api_comet_exit",
        AD_UNIT_GENERIC_API_COMET_AFTER_DEDUP: "ad_unit_generic_api_comet_after_dedup",
        AD_UNIT_SCROLL_COMET: "ad_unit_scroll_comet",
        AD_UNIT_SCROLL_COMET_EXIT: "ad_unit_scroll_comet_exit",
        AD_UNIT_SCROLL_COMET_AFTER_DEDUP: "ad_unit_scroll_comet_after_dedup",
        COMET_FULL_VIEW: "comet_full_view"
    });
    f["default"] = a
}), 66);
__d("ViewableSessionValidationWebResultTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setExtras = function(a) {
            this.$1.extras = a;
            return this
        };
        c.setFailureReason = function(a) {
            this.$1.failure_reason = a;
            return this
        };
        c.setFbFeedLocation = function(a) {
            this.$1.fb_feed_location = a;
            return this
        };
        c.setPrimaryImpressionChannel = function(a) {
            this.$1.primary_impression_channel = a;
            return this
        };
        c.setScrollSpeed = function(a) {
            this.$1.scroll_speed = a;
            return this
        };
        c.setSecondaryImpressionChannel = function(a) {
            this.$1.secondary_impression_channel = a;
            return this
        };
        c.setSessionEndTime = function(a) {
            this.$1.session_end_time = a;
            return this
        };
        c.setSessionKey = function(a) {
            this.$1.session_key = a;
            return this
        };
        c.setSessionStartTime = function(a) {
            this.$1.session_start_time = a;
            return this
        };
        c.setTimeFromLoad = function(a) {
            this.$1.time_from_load = a;
            return this
        };
        c.setVerificationTime = function(a) {
            this.$1.verification_time = a;
            return this
        };
        c.setVerifyResult = function(a) {
            this.$1.verify_result = a;
            return this
        };
        return a
    }();
    c = {
        extras: !0,
        failure_reason: !0,
        fb_feed_location: !0,
        primary_impression_channel: !0,
        scroll_speed: !0,
        secondary_impression_channel: !0,
        session_end_time: !0,
        session_key: !0,
        session_start_time: !0,
        time_from_load: !0,
        verification_time: !0,
        verify_result: !0
    };
    f["default"] = a
}), 66);
__d("ViewableSessionStore", ["ODS", "ViewableSessionValidationWebResultTypedLogger", "ge", "getCentralImpressionScrollSpeed", "getCentralImpressionTimeAfterRefresh", "getViewportDimensions", "setTimeout"], (function(a, b, c, d, e, f, g) {
    var h = "viewable_session_validation",
        i = [],
        j = {};

    function a(a, b, c) {
        try {
            var e = m(a);
            j[e] || (j[e] = {
                context: a,
                isValid: !1
            });
            k(e, b, c);
            !j[e].isValid ? l(e) && (j[e].enterTime = Date.now(), j[e].exitTime = null, j[e].isValid = !0) : l(e) || (j[e].isValid = !1, j[e].exitTime = Date.now())
        } catch (a) {
            d("ODS").bumpEntityKey(2966, h, "error.onViewUpdate." + a.message)
        }
    }

    function k(a, b, c) {
        var d;
        c = c.getBoundingClientRect();
        var e = c.bottom,
            f = c.top,
            g = c.left;
        c = c.right;
        var h = {};
        d = (d = (d = j[a]) == null ? void 0 : (d = d.boundaryDimensions) == null ? void 0 : d.ref) != null ? d : 0;
        switch (b) {
            case "top":
                h = {
                    top: e,
                    left: g,
                    right: c,
                    ref: ++d
                };
                break;
            case "bottom":
                h = {
                    bottom: f,
                    left: g,
                    right: c,
                    ref: --d
                };
                break
        }
        j[a] = babelHelpers["extends"]({}, j[a], {
            boundaryDimensions: babelHelpers["extends"]({}, (b = j[a]) == null ? void 0 : b.boundaryDimensions, h)
        })
    }

    function l(a) {
        a = (a = j[a]) == null ? void 0 : a.boundaryDimensions;
        if (a == void 0) return !1;
        var b = c("ge")("pagelet_bluebar"),
            d = c("getViewportDimensions")(),
            e = d.width;
        d = d.height;
        var f = document.elementFromPoint(0, 0);
        b = b != null && f != null && b.contains(f) ? f.getBoundingClientRect().bottom : 0;
        f = i.reduce(function(a, b) {
            return Math.max(b.getBoundingClientRect().bottom, a)
        }, b);
        return a.top != void 0 && a.bottom != void 0 && a.top < a.bottom && a.top < d && a.bottom > f && a.left < a.right && a.left < e && a.right > 0
    }

    function m(a) {
        return a.postId
    }

    function n(a) {
        var b = j[a];
        if (b == void 0) return !1;
        var c = b.exitTime;
        return b.isValid === !0 || c != null && Date.now() - c < 1e3 || l(a)
    }

    function o(a, b, e, f) {
        f === void 0 && (f = 1);
        try {
            var g, i = c("getCentralImpressionScrollSpeed")(),
                k = c("getCentralImpressionTimeAfterRefresh")(),
                l = "event_logged." + a + "." + e.toString() + ".";
            g = new(c("ViewableSessionValidationWebResultTypedLogger"))().setVerificationTime(Date.now()).setExtras(JSON.stringify({
                pageId: j[b].context.pageId,
                boundaryDimension: JSON.stringify((g = j[b].boundaryDimensions) != null ? g : "null"),
                viewportDimension: JSON.stringify(c("getViewportDimensions")())
            })).setFbFeedLocation(e).setSessionStartTime(j[b].enterTime).setSessionEndTime(j[b].exitTime).setPrimaryImpressionChannel("viewable_impression_tracker").setSecondaryImpressionChannel("two_div_boundary").setSessionKey(b).setScrollSpeed(i).setTimeFromLoad(k);
            if (n(b)) g.setVerifyResult(1), d("ODS").bumpEntityKey(2966, h, l + "pass");
            else {
                if (f > 0) {
                    c("setTimeout")(function() {
                        o(a, b, e, f - 1)
                    }, 500);
                    return
                }
                g.setVerifyResult(0).setFailureReason("over-logging");
                d("ODS").bumpEntityKey(2966, h, l + "overlogging")
            }
            g.log()
        } catch (a) {
            d("ODS").bumpEntityKey(2966, h, "error.onEventLogged." + a.message)
        }
    }

    function b(a) {
        i.push(a)
    }
    g.ViewableSessionStore = j;
    g.onViewUpdate = a;
    g.onEventLogged = o;
    g.setupTopRef = b
}), 98);
__d("ViewableImpressionTracker", ["csx", "cx", "AdImpressionLoggingConfig", "Banzai", "BrowseClientEventLogger", "CometMetricsChannel2ViewabilityFalcoEvent", "DOM", "DataAttributeUtils", "FBFeedImpressionTopMarginGetter", "FBImpressionValidationUtils", "FeedAdXoutEventTracker", "GHLDelay", "GHLTestElement", "MsiteViewableImpressionFalcoEvent", "NonBlockingIFrame", "ODS", "PercentVisible", "Run", "ScriptPath", "Style", "URI", "ViewabilityFramework", "ViewableImpressionUtils", "ViewableSessionStore", "Visibility", "WebSession", "WebStorage", "cr:1095627", "cr:1095628", "cr:943110", "ge", "getCentralImpressionTimeAfterRefresh", "getElementPosition", "getViewportDimensions", "ghlTestUBT", "gkx", "isImpressionTargetOccluded", "killswitch", "mixInEventEmitter", "randomInt", "uuid"], (function(a, b, c, d, e, f, g, h, i) {
    var j = c("WebStorage").getLocalStorage(),
        k = "imp_seq_num";
    a = function() {
        function a(a, b, e) {
            var f = this;
            this.checkAndLogImpressionIfPendingOnExit = function() {
                c("AdImpressionLoggingConfig").enableFlushDelayLogOnCleanup && f.waitForDelayLogged && (clearTimeout(f.delayedLoggingTimeout), f.delayLogImpression())
            };
            this.delayLogImpression = function() {
                f.waitForDelayLogged = !1;
                var a = "other";
                f.element.id.startsWith("hyperfeed") && (a = "16");
                a = c("GHLTestElement").testElementI(f.element, ".vit." + a);
                if (a) {
                    f.$14();
                    c("AdImpressionLoggingConfig").logForHiddenAds && f.logImpression(1, !0, {});
                    return
                }
                f.logImpression(1, !1, {});
                f.$12()
            };
            this.id = a;
            this.element = b;
            this.config = e;
            this.iframe = null;
            this.viewableTimeout = null;
            this.delayedLoggingTimeout = null;
            this.clearSubsequentTimeout = null;
            this.waitForSubsequent = !1;
            this.waitForLogged = !1;
            this.waitForDelayLogged = !1;
            this.isNonViewableLogged = !1;
            this.isVisible = !1;
            this.iframeLogged = !1;
            this.banzaiLogged = !1;
            this.falcoLogged = !1;
            this.topLeftInViewport = !1;
            this.bottomRightInViewport = !1;
            this.isHidden = !0;
            this.lastInvisibleReason = null;
            this.isSubsequentImp = !1;
            this.lastHiddenCause = "none";
            this.lastImpressedAt = null;
            this.lastEnterWithPercent = null;
            d("Run").onUnload(this.checkAndLogImpressionIfPendingOnExit);
            d("Run").onLeave(this.checkAndLogImpressionIfPendingOnExit);
            c("ghlTestUBT")(function(a) {
                a === !0 && c("GHLDelay").setEnabled(!0)
            })
        }
        var e = a.prototype;
        e.getID = function() {
            return this.id
        };
        e.getConfig = function() {
            return this.config
        };
        e.getPercentInViewport = function() {
            var a = c("getViewportDimensions")(),
                b = c("getElementPosition")(this.element);
            return this.$1(a, b)
        };
        e.$2 = function(a, b, d, e) {
            d === void 0 && (d = 0);
            e === void 0 && (e = !1);
            var f = {
                target_rect: b,
                root: {
                    x: 0,
                    y: d,
                    height: a.height - d,
                    width: a.width
                }
            };
            if (b.height === 0 || b.width === 0) return {
                rects: f,
                percentage: 0,
                invisibleReason: "TARGET_SIZE_0"
            };
            var g = c("Style").get(this.element, "visibility") === "hidden",
                h = c("Style").get(this.element, "opacity") === "0";
            if (b.x < a.width && b.x + b.width > 0 && b.y < a.height && b.y + b.height > d && !g && !h) {
                var i = Math.max(b.x, 0),
                    j = Math.min(b.x + b.width, a.width);
                d = Math.max(b.y, d);
                a = Math.min(b.y + b.height, a.height);
                if (b.height * b.width === 0) return {
                    rects: f,
                    percentage: 100,
                    invisibleReason: null
                };
                b = 100 * (j - i) * (a - d) / (b.height * b.width);
                var k = !1;
                if (b > 0 && (e || this.config.should_not_log_on_occlusion)) {
                    k = c("isImpressionTargetOccluded")(this.element, {
                        x: i,
                        y: d,
                        width: j - i,
                        height: a - d
                    });
                    if (this.config.should_not_log_on_occlusion && k) return {
                        rects: f,
                        percentage: 0,
                        invisibleReason: "IS_OCCLUDED"
                    }
                }
                return {
                    rects: f,
                    percentage: b,
                    invisibleReason: b > 0 ? null : "NOT_IN_VIEWPORT",
                    isOccluded: k
                }
            }
            return {
                rects: f,
                percentage: 0,
                invisibleReason: g ? "TARGET_HIDDEN" : h ? "TARGET_TRANSPARENT" : "NOT_IN_VIEWPORT"
            }
        };
        e.$3 = function(a, b, c) {
            c === void 0 && (c = 0);
            return this.$2(a, b, c).percentage
        };
        e.$4 = function(a, b, d, e) {
            d === void 0 && (d = 0);
            e === void 0 && (e = !1);
            return this.config.require_horizontally_onscreen && c("ViewableImpressionUtils").isHorizontallyOffscreen(this.element, b, a) ? {
                rects: {
                    target_rect: b
                },
                percentage: 0,
                invisibleReason: "NOT_IN_VIEWPORT"
            } : this.$2(a, b, d, e)
        };
        e.$1 = function(a, b, c) {
            c === void 0 && (c = 0);
            return this.$4(a, b, c).percentage
        };
        e.$5 = function(a, b, c) {
            a = this.$3(a, b, c);
            if (a === 0) return d("PercentVisible").NO_VISIBLE;
            else if (a < 50) return d("PercentVisible").VISIBLE_0_PCT;
            else if (a < 100) return d("PercentVisible").VISIBLE_50_PCT;
            else return d("PercentVisible").VISIBLE_100_PCT
        };
        e.$6 = function(a, b, c) {
            c === void 0 && (c = 0);
            var e = Math.max(b.y, c);
            b = Math.min(b.y + b.height, a.height);
            b = 100 * (b - e) / (a.height - c);
            if (b < 50) return d("PercentVisible").VISIBLE_0_PCT;
            else if (b < 100) return d("PercentVisible").VISIBLE_50_PCT;
            else return d("PercentVisible").VISIBLE_100_PCT
        };
        e.$7 = function(a, b) {
            var e = 0,
                f = c("ge")("pagelet_bluebar");
            f && f.offsetHeight && (e = f.offsetHeight + f.offsetTop);
            if (this.config.should_log_viewport_duration) {
                f = this.$6(a, b, e);
                switch (f) {
                    case d("PercentVisible").VISIBLE_0_PCT:
                    case d("PercentVisible").VISIBLE_50_PCT:
                    case d("PercentVisible").VISIBLE_100_PCT:
                        this.emit("viewport_viewability", {
                            tracker: this,
                            id: this.getID(),
                            token: this.getToken(),
                            percentVisible: f
                        });
                        break;
                    default:
                        break
                }
            }
            f = this.$5(a, b, e);
            switch (f) {
                case d("PercentVisible").VISIBLE_0_PCT:
                case d("PercentVisible").VISIBLE_50_PCT:
                case d("PercentVisible").VISIBLE_100_PCT:
                    this.emit("viewability", {
                        tracker: this,
                        id: this.getID(),
                        token: this.getToken(),
                        percentVisible: f
                    });
                    break;
                default:
                    this.emit("hidden", {
                        id: this.getID(),
                        token: this.getToken()
                    });
                    break
            }
        };
        e.$8 = function(a, b) {
            if (c("Style").get(this.element, "visibility") === "hidden" || c("Style").get(this.element, "opacity") === "0") return !1;
            var d = b.x,
                e = b.y,
                f = b.x + b.width;
            b = b.y + b.height;
            this.topLeftInViewport = this.topLeftInViewport || d >= 0 && d <= a.width && e >= 0 && e <= a.height;
            this.bottomRightInViewport = this.bottomRightInViewport || f >= 0 && f <= a.width && b >= 0 && b <= a.height;
            return this.topLeftInViewport && this.bottomRightInViewport
        };
        e.$9 = function(a, b) {
            if (this.hasEmittedFullViewEvent) return;
            this.$8(a, b) && (this.emit("full_view", {
                tracker: this,
                id: this.getID(),
                token: this.getToken(),
                fullViewType: 1
            }), this.hasEmittedFullViewEvent = !0)
        };
        e.$10 = function(a, d, e, f, g) {
            g === void 0 && (g = !1);
            a = a > 0;
            e = e;
            a && c("Visibility").isHidden() && (a = !1, e = "PAGE_VISIBILITY_HIDDEN");
            a && this.isHidden ? (this.lastImpressedAt = Date.now(), this.lastEnterWithPercent = d, this.logViewabilityEventsForAudit(d, this.lastInvisibleReason, f, g), this.isHidden = !1, b("cr:1095627") && b("cr:1095627").onItemEnterViewport(c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element), b("cr:1095628") && b("cr:1095628")(c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element, "enter", "blue")) : !a && !this.isHidden && (this.isHidden = !0, this.lastInvisibleReason = e, this.lastHiddenCause = "none", b("cr:1095627") && b("cr:1095627").onItemExitViewport(c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element), b("cr:1095628") && b("cr:1095628")(c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element, "exit", "blue"))
        };
        e.onVisible = function(a) {
            var b = this;
            a = this.isVisible;
            var e = c("getViewportDimensions")(),
                f = c("getElementPosition")(this.element),
                g = this.config.count_blue_bar_height ? d("FBFeedImpressionTopMarginGetter").getTopMargin() : 0;
            g = this.$4(e, f, g, this.config.detect_occlusion || !1);
            var h = g.percentage,
                i = g.invisibleReason,
                j = g.rects;
            g = g.isOccluded;
            var k = h > this.config.pixel_in_percentage;
            this.config.log_viewability_events_for_infra_validation && this.$10(k, h, i, j, g);
            var l = [];
            i = [];
            (this.config.skip_imp_if_no_images || this.config.check_images_before_log) && (l = Array.from(this.element.querySelectorAll("img")), i = Array.from(this.element.getElementsByClassName("_7cqq")), d("ODS").bumpEntityKey(2966, "feed_ads", "ViewableImpressionTracker.delayLogImpression.isFeedLoadedCheck." + (l.length === 0) + "." + (i.length === 0)));
            if (this.config.skip_imp_if_no_images && l.length === 0) {
                this.handleLogNonViewableOnInvisible(a);
                this.isVisible = !1;
                return
            }
            this.emit("visible", {
                tracker: this,
                id: this.getID(),
                token: this.getToken(),
                percentInViewport: h
            });
            this.config.should_log_viewability_duration && this.$7(e, f);
            this.$9(e, f);
            if (!k) {
                this.$11();
                this.handleLogNonViewableOnInvisible(a);
                this.isVisible = !1;
                return
            }
            this.isLogged() ? this.$12() : this.$13();
            j = this.config.fam_delivery_integrity_enable_user_hide_ads_check_and_is_feed ? d("FeedAdXoutEventTracker").checkIfHidden(this.element) : !1;
            this.isVisible = !(c("AdImpressionLoggingConfig").blockInvisible && c("Visibility").isHidden()) && !j;
            g = this.isVisible && !a;
            this.isVisible || this.handleLogNonViewableOnInvisible(a);
            if ((this.config.client_no_dedup ? g : this.isVisible) && !this.waitForLogged && !this.waitForDelayLogged && !this.isLogged()) {
                i = function() {
                    b.waitForLogged = !1;
                    if (c("AdImpressionLoggingConfig").blockInvisible && c("Visibility").isHidden()) return;
                    var a = b.getPercentInViewport();
                    a = a > b.config.pixel_in_percentage;
                    if (!a) {
                        b.$14();
                        return
                    }
                    b.config.check_images_before_log && (l.length === 0 && d("ODS").bumpEntityKey(2966, "feed_ads", "ViewableImpressionTracker.log_without_load." + b.config.trackable_identifier));
                    if (c("GHLDelay").getEnabled() && b.config.can_delay_log_impression === !0) {
                        b.waitForDelayLogged = !0;
                        a = c("AdImpressionLoggingConfig").maxHiddenCheckDelay;
                        a = a - b.config.duration_in_ms;
                        a < 0 && (a = 0);
                        b.delayedLoggingTimeout = setTimeout(b.delayLogImpression, a)
                    } else b.logImpression(1, !1, {}), b.$12()
                };
                this.waitForLogged = !0;
                this.viewableTimeout = setTimeout(i, this.config.duration_in_ms)
            }
        };
        e.handleLogNonViewableOnInvisible = function(a) {
            this.config.log_initial_nonviewable && !this.isLogged() && !this.isNonViewableLogged ? this.logNonViewableImpression() : !this.config.log_initial_nonviewable && !this.isLogged() && a && this.logNonViewableImpression()
        };
        e.onHidden = function(a) {
            var d = this;
            this.lastHiddenCause = a;
            this.isHidden || (this.isHidden = !0, this.lastInvisibleReason = "NOT_IN_VIEWPORT", b("cr:1095627") && b("cr:1095627").onItemExitViewport(c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element), b("cr:1095628") && b("cr:1095628")(c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element, "exit", "blue"));
            this.emit("hidden", {
                id: this.getID(),
                token: this.getToken()
            });
            a = this.isVisible;
            this.handleLogNonViewableOnInvisible(a);
            this.isVisible = !1;
            this.waitForLogged && (this.waitForLogged = !1, clearTimeout(this.viewableTimeout));
            this.config.client_no_dedup && this.config.subsequent_gap_in_ms === 0 && this.config.client_track_subsequent_impression ? this.reset() : this.isLogged() && !this.waitForSubsequent && this.config.subsequent_gap_in_ms >= 0 && this.config.client_track_subsequent_impression && (this.waitForSubsequent = !0, this.clearSubsequentTimeout = setTimeout(function() {
                d.waitForSubsequent = !1, d.reset(), d.isVisible && d.onVisible()
            }, this.config.subsequent_gap_in_ms));
            this.$14()
        };
        e.onRemoved = function() {
            this.isVisible = !1
        };
        e.getToken = function() {
            return c("DataAttributeUtils").getDataAttribute(this.element, "data-xt")
        };
        e.logViewabilityEventsForAudit = function(a, e, f, g) {
            var h = this,
                i = this.getToken(),
                j = Math.floor(Date.now() / 1e3),
                k = this.$15(),
                l = c("FBImpressionValidationUtils").getFBFeedLocation(this.element),
                m = b("ScriptPath").getTopViewEndpoint(),
                n = b("cr:943110") ? b("cr:943110")() : null,
                o = c("getCentralImpressionTimeAfterRefresh")(),
                p = d("WebSession").getId(),
                q = c("uuid")(),
                r = this.config.is_rhc ? c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE_RHC : c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE,
                s = {
                    event_trace_id: q,
                    xt: i,
                    cts: j,
                    csp: k,
                    endpoint: m,
                    vp: a,
                    fbfeed_location: l,
                    scroll_speed: n,
                    time_from_load: o,
                    sk: p,
                    pre_rs: e,
                    sub_imp: this.isSubsequentImp,
                    last_hidden_cause: this.lastHiddenCause,
                    rects: f,
                    behind_popout: g
                };
            c("CometMetricsChannel2ViewabilityFalcoEvent").logImmediately(function() {
                return {
                    framework: r,
                    event_trace_id: q,
                    xt: i,
                    cts: String(j),
                    csp: String(k),
                    me: m,
                    vp: String(a),
                    fbfeed_location: String(l),
                    scroll_speed: String(n),
                    time_from_load: String(o),
                    sk: p,
                    pre_rs: e,
                    sub_imp: h.isSubsequentImp,
                    last_hidden_cause: h.lastHiddenCause,
                    rects: f,
                    behind_popout: g
                }
            });
            var t = babelHelpers["extends"]({}, c("Banzai").VITAL);
            t.signal = !0;
            c("Banzai").post("viewability_events:" + r, s, t);
            this.isSubsequentImp = !0
        };
        e.logImpression = function(a, e, f) {
            if (this.isLogged()) return;
            var g = this.getToken(),
                h = Math.floor(Date.now() / 1e3),
                i = this.$15(),
                l = Date.now() + "_" + (c("randomInt")(0, 4294967295) + 1);
            g = {
                xt: g,
                isv: a,
                cts: h,
                csp: i,
                hba: e,
                etid: l,
                sender: "ViewableImpressionTracker"
            };
            this.config.should_log_endpoint_info && (g.me = b("ScriptPath").getTopViewEndpoint());
            if (c("gkx")("940796") && j) {
                a = j.getItem(k);
                a == null && (a = 0);
                g.event_count = parseInt(a, 10);
                j.setItem(k, g.event_count + 1)
            }
            if (this.config.should_batch || this.config.vital_mode_for_ss || this.config.signal_mode_for_ss) {
                g.transmission_channel = "banzai";
                h = this.config.vital_mode_for_ss ? babelHelpers["extends"]({}, c("Banzai").VITAL) : {};
                h.signal = this.config.signal_mode_for_ss;
                g.event_trace_id = c("uuid")();
                this.logWithBanzai(g, h);
                this.logWithFalco(g)
            } else g.transmission_channel = "iframe", this.logWithIFrame(Object.assign(g, f));
            if (c("gkx")("876709")) try {
                i = JSON.parse(c("DataAttributeUtils").getDataFt(this.element));
                e = i.page_id;
                l = i.top_level_post_id;
                a = i.fbfeed_location;
                e && l && d("ViewableSessionStore").onEventLogged("page_post_impression", l, a)
            } catch (a) {
                d("ODS").bumpEntityKey(2966, "impression_logging_debug", "viewable_session_validation_exception." + a.message)
            }
        };
        e.logNonViewableImpression = function() {
            if (this.config.nonviewableEnabled) {
                var a = this.getToken();
                c("Banzai").post("xtrackable:nonviewable", {
                    xt: a
                })
            }
            this.isNonViewableLogged = !0
        };
        e.isLogged = function() {
            return this.iframeLogged || this.banzaiLogged || this.falcoLogged
        };
        e.reset = function() {
            this.iframeLogged && (this.iframeLogged = !1), this.iframe && (c("DOM").remove(this.iframe), this.iframe = null), this.banzaiLogged && (this.banzaiLogged = !1), this.falcoLogged && (this.falcoLogged = !1), this.isNonViewableLogged = !1, this.isVisible = !1, this.waitForLogged = !1, this.waitForDelayLogged = !1, this.waitForSubsequent = !1
        };
        e.logWithFalco = function(a) {
            var e = this;
            c("killswitch")("MSITE_STOP_IMPS_LOGGING_VIA_FALCO") || (this.falcoLogged = !0, c("MsiteViewableImpressionFalcoEvent").logImmediately(function() {
                return a
            }), this.config.log_viewability_events_for_infra_validation && c("CometMetricsChannel2ViewabilityFalcoEvent").logImmediately(function() {
                return {
                    framework: c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE_AFTER_DEDUP,
                    xt: String(a.xt),
                    isv: String(a.isv),
                    cts: String(a.cts),
                    csp: String(a.csp),
                    hba: a.hba,
                    etid: String(a.etid),
                    sender: a.sender,
                    event_count: String(a.eventCount),
                    transmission_channel: a.transmission_channel,
                    event_trace_id: a.event_trace_id,
                    me: a.me,
                    fbfeed_location: String(c("FBImpressionValidationUtils").getFBFeedLocation(e.element)),
                    scroll_speed: b("cr:943110") ? String(b("cr:943110")()) : null,
                    time_from_load: String(c("getCentralImpressionTimeAfterRefresh")()),
                    sk: d("WebSession").getId()
                }
            }))
        };
        e.logWithBanzai = function(a, e) {
            this.banzaiLogged = !0;
            d("BrowseClientEventLogger").maybeLogClientViewEvent(a);
            c("Banzai").post("xtrackable:clientview_batch", a, e);
            b("cr:1095628") && b("cr:1095628")(c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE, this.element, "log", "blue");
            if (this.config.log_viewability_events_for_infra_validation) {
                e = babelHelpers["extends"]({}, c("Banzai").VITAL);
                e.signal = !0;
                c("Banzai").post("viewability_events:" + c("ViewabilityFramework").VIEWABLE_TRACKER_BLUE_AFTER_DEDUP, babelHelpers["extends"]({}, a, {
                    fbfeed_location: c("FBImpressionValidationUtils").getFBFeedLocation(this.element),
                    scroll_speed: b("cr:943110") ? b("cr:943110")() : null,
                    time_from_load: c("getCentralImpressionTimeAfterRefresh")(),
                    sk: d("WebSession").getId()
                }), e)
            }
        };
        e.logWithIFrame = function(a) {
            this.iframeLogged = !0, this.config.is_instream_story ? c("NonBlockingIFrame").loadIFrame(new(c("URI"))(this.config.impressionURL).addQueryData(a).toString()) : (this.iframe = c("DOM").create("iframe", {
                src: new(c("URI"))(this.config.impressionURL).addQueryData(a).toString(),
                width: 0,
                height: 0,
                frameborder: 0,
                scrolling: "no",
                className: "fbEmuTracking"
            }), this.iframe.setAttribute("aria-hidden", "true"), c("DOM").appendContent(this.element, this.iframe))
        };
        e.$15 = function() {
            var a = c("DataAttributeUtils").getDataAttribute(this.element, "data-dedupekey");
            if (a === null) return null;
            var b = this.$16();
            if (b === null || b.length === 0) return null;
            var d = b.length;
            while (--d >= 0) {
                var e = c("DataAttributeUtils").getDataAttribute(b[d], "data-dedupekey");
                if (e !== null && a === e) break
            }
            return d + 1
        };
        e.$16 = function() {
            var a = c("ge")("contentArea");
            if (a) {
                var b = "._5jmm";
                a = c("DOM").scry(a, b);
                return a.filter(function(a) {
                    return c("DataAttributeUtils").getDataAttribute(a, "data-dedupekey")
                })
            } else {
                c("gkx")("917") ? b = c("ge")("m_news_feed_stream") : b = c("ge")("m_newsfeed_stream");
                return b === null ? null : b.getElementsByTagName("article")
            }
        };
        e.$17 = function() {
            return 0
        };
        e.$11 = function() {
            this.$17() && (c("Style").set(this.element, "background-color", "#abab9a"), c("Style").set(this.element, "outline", "3px solid #abab9a"))
        };
        e.$13 = function() {
            this.$17() && (c("Style").set(this.element, "background-color", "#e4f70a"), c("Style").set(this.element, "outline", "3px solid #e4f70a"))
        };
        e.$14 = function() {
            this.$17() && (c("Style").set(this.element, "background-color", null), c("Style").set(this.element, "outline", null))
        };
        e.$12 = function() {
            this.$17() && (c("Style").set(this.element, "background-color", "#047515"), c("Style").set(this.element, "outline", "3px solid #047515"))
        };
        return a
    }();
    c("mixInEventEmitter")(a, {
        visible: !0,
        hidden: !0,
        full_view: !0,
        viewability: !0,
        viewport_viewability: !0,
        viewability_debug: !0
    });
    e = a;
    g["default"] = e
}), 98);
__d("VisibilityTracking", ["Banzai", "BrowseClientEventLogger", "DataAttributeUtils", "ErrorUtils", "ScriptPath", "SubscriptionsHandler", "Visibility", "VisibilityTrackingHelper", "collectDataAttributes", "getElementPosition", "gkx", "pageID", "throttle"], (function(a, b, c, d, e, f, g) {
    var h = "visibility_tracking",
        i = "[data-vistracking]",
        j = 500,
        k = 50,
        l = 50,
        m = 50,
        n = 50,
        o = 0;
    a = function() {
        function a(a) {
            var b = this;
            a = a || {};
            if (!a.bypass_banzai_check && !c("Banzai").isEnabled(h)) return;
            this.visibleElementInfo = {};
            this.doNotForceExitOnUpdateVisible = !1;
            this.getDataFromConfig(a);
            c("Visibility").addListener(c("Visibility").VISIBLE, c("ErrorUtils").guard(function() {
                return b.fireEvent("browser")
            }, "VisibilityTracking:visible", this));
            c("Visibility").addListener(c("Visibility").HIDDEN, c("ErrorUtils").guard(function() {
                return b.clearAllVisibleElements("browser")
            }, "VisibilityTracking:hidden", this));
            c("ScriptPath").subscribe(c("ErrorUtils").guard(function() {
                return b.updateVisibleElements()
            }, "VisibilityTracking:scriptPath", this));
            c("Banzai").subscribe(c("Banzai").SHUTDOWN, c("ErrorUtils").guard(function() {
                return b.onUnload()
            }, "VisibilityTracking:banzaiShutdown", this));
            this.fireEventCallback = c("throttle").acrossTransitions(c("ErrorUtils").guard(function(a) {
                return b.fireEvent(a)
            }, "VisibilityTracking:fireEventCallback", this), this.timeout, this);
            this.listeners = new(c("SubscriptionsHandler"))();
            d("VisibilityTrackingHelper").getEventListeners(function() {
                return b.fireEventCallback()
            }, a).forEach(function(a) {
                this.listeners.addSubscriptions(a)
            }, this);
            this.extraInit && c("ErrorUtils").applyWithGuard(this.extraInit.bind(this))
        }
        var b = a.prototype;
        b.getDataFromConfig = function(a) {
            this.config = a, this.root = a.root || document.documentElement, this.selector = a.selector || i, this.visibleEventCallBack = a.visibleEventCallBack || function() {}, this.timeout = a.timeout !== void 0 ? a.timeout : j, this.minOffsetVisibleFromBottom = a.minOffsetVisibleFromBottom !== void 0 ? a.minOffsetVisibleFromBottom : k, this.minOffsetVisibleFromTop = a.minOffsetVisibleFromTop !== void 0 ? a.minOffsetVisibleFromTop : l, this.minOffsetVisibleFromLeft = a.minOffsetVisibleFromLeft !== void 0 ? a.minOffsetVisibleFromLeft : m, this.minOffsetVisibleFromRight = a.minOffsetVisibleFromRight !== void 0 ? a.minOffsetVisibleFromRight : n, this.handleAllHiddenEvents = a.handleAllHiddenEvents !== void 0 ? a.handleAllHiddenEvents : !1, this.handleAllVisibleEvents = a.handleAllVisibleEvents !== void 0 ? a.handleAllVisibleEvents : !1, this.cacheTrackedElements = a.cacheTrackedElements !== void 0 ? a.cacheTrackedElements : !1, this.addCauseToAllHiddenEvents = a.addCauseToAllHiddenEvents != void 0 ? a.addCauseToAllHiddenEvents : !1, this.doNotForceExitOnUpdateVisible = a.doNotForceExitOnUpdateVisible != void 0 ? a.doNotForceExitOnUpdateVisible : !1
        };
        b.getAllTrackedElements = function() {
            if (!this.allTrackedElements) {
                this.allTrackedElements = {};
                var a = [];
                this.config.is_xtrackable ? a = c("DataAttributeUtils").getXTrackableElements() : this.root && this.root.querySelectorAll && (a = this.root.querySelectorAll(this.selector));
                for (var b = 0; b < a.length; b++) {
                    var d = this.getElementID(a[b]);
                    this.allTrackedElements[d.toString()] = a[b]
                }
            }
            return this.allTrackedElements
        };
        b.refreshAllTrackedElements = function() {
            delete this.allTrackedElements;
            return this.getAllTrackedElements()
        };
        b.getDataToLog = function(a) {
            a = Object.assign(c("collectDataAttributes")(a, ["gt"]).gt, {
                client_time: Date.now() / 1e3,
                time_spent_id: c("pageID"),
                script_path: c("ScriptPath").getScriptPath()
            });
            return a
        };
        b.getElementID = function(a) {
            var b = a.$1;
            if (b) return b;
            a.$1 = ++o;
            return o
        };
        b.sendDataToLog = function(a) {
            d("BrowseClientEventLogger").maybeLogVisiblityEvent(a), c("Banzai").post(h, a)
        };
        b.isInstreamAdStoryElement = function(a) {
            return !1
        };
        b.fireEvent = function(a) {
            a === void 0 && (a = "default");
            var b = this.cacheTrackedElements ? this.allTrackedElements : this.refreshAllTrackedElements();
            for (var c in b) {
                var e = b[c],
                    f = d("VisibilityTrackingHelper").getViewportInfo();
                f = this.isVisible(e, f);
                !f && (c in this.visibleElementInfo || this.handleAllHiddenEvents) ? this.handleEvent(e, {
                    name: "hidden",
                    cause: a
                }) : f && (!(c in this.visibleElementInfo) || this.handleAllVisibleEvents) && this.handleEvent(e, {
                    name: "visible",
                    cause: a
                })
            }
            this.clearUntrackedVisibleElements()
        };
        b.isVisible = function(a, b) {
            if (a == null) return !1;
            if (c("gkx")("820050") && d("VisibilityTrackingHelper").isSnippetFlyoutVisible()) return !1;
            a = c("getElementPosition")(a);
            return !!(a.x || a.y || a.width || a.height) && a.y + a.height >= this.minOffsetVisibleFromTop && a.y <= b.height - this.minOffsetVisibleFromBottom && a.x + a.width >= this.minOffsetVisibleFromLeft && a.x <= b.width - this.minOffsetVisibleFromRight
        };
        b.handleEvent = function(a, b) {
            var d = this.getElementID(a).toString(),
                e = this.getDataToLog(a),
                f;
            if (b.name === "visible") {
                var g = Math.floor(Date.now() / 1e3);
                f = c("pageID").concat(":", g.toString(), ":", this.getElementID(a).toString());
                this.visibleElementInfo[d] = {
                    visibility_id: f,
                    elem: a
                }
            } else if (b.name === "hidden") {
                d in this.visibleElementInfo && (f = this.visibleElementInfo[d].visibility_id, delete this.visibleElementInfo[d]);
                if (b.cause === "browser" || this.doNotForceExitOnUpdateVisible && b.cause === "updateVisible") return
            }
            this.sendDataToLog(Object.assign(e, {
                event: b.name,
                visibility_id: f
            }))
        };
        b.clearUntrackedVisibleElements = function() {
            var a = this.getAllTrackedElements();
            for (var b in this.visibleElementInfo)
                if (!(b in a)) {
                    var c = this.visibleElementInfo[b];
                    c.elem && this.handleEvent(c.elem, {
                        name: "hidden",
                        cause: "removed"
                    })
                }
        };
        b.clearAllVisibleElements = function(a) {
            a === void 0 && (a = "default");
            var b = this.getAllTrackedElements();
            for (var c in b) c in this.visibleElementInfo && this.handleEvent(b[c], {
                name: "hidden",
                cause: a
            });
            this.clearUntrackedVisibleElements()
        };
        b.updateVisibleElements = function() {
            this.addCauseToAllHiddenEvents ? this.clearAllVisibleElements("updateVisible") : this.clearAllVisibleElements(), this.fireEvent()
        };
        b.refreshAndFireEvent = function(a) {
            this.refreshAllTrackedElements(), this.fireEventCallback(a)
        };
        b.onUnload = function() {
            this.addCauseToAllHiddenEvents ? this.clearAllVisibleElements("unload") : this.clearAllVisibleElements(), this.listeners && (this.listeners.release(), this.listeners = null), this.extraCleanup && c("ErrorUtils").applyWithGuard(this.extraCleanup.bind(this))
        };
        a.init = function(b) {
            return new a(b)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ViewableImpressionEventHandler", ["DataAttributeUtils", "FullViewLogger", "ViewabilityDurationSegmentLogger", "ViewableImpressionDurationLogger", "ViewableImpressionHeatmapLogger", "ViewableImpressionTracker", "VisibilityTracking", "pageID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.extraInit = function() {
            this.$ViewableImpressionEventHandler1 = new Map()
        };
        d.getDataFromConfig = function(b) {
            a.prototype.getDataFromConfig.call(this, b), this.$ViewableImpressionEventHandler2 = b.$ViewableImpressionEventHandler2, this.$ViewableImpressionEventHandler3 = b.heatmapLoggingDurationMS, b.impressionURL = b.impressionURL !== void 0 ? b.impressionURL : "/xti.php", b.nonviewableEnabled = b.nonviewableEnabled !== void 0 ? b.nonviewableEnabled : !1
        };
        d.getImpressionTracking = function(a) {
            var b = this.getElementID(a),
                d = this.$ViewableImpressionEventHandler1.get(b);
            if (!d) {
                var e = babelHelpers["extends"]({}, this.getConfigFromElement(a), this.config);
                d = new(c("ViewableImpressionTracker"))(b, a, e);
                this.$ViewableImpressionEventHandler1.set(b, d);
                e.log_impression_duration && c("ViewableImpressionDurationLogger").logFromViewableImpressionTracker(d);
                this.$ViewableImpressionEventHandler2 && c("ViewableImpressionHeatmapLogger").logFromViewableImpressionTracker(d, this.$ViewableImpressionEventHandler3);
                e.should_log_full_views && c("FullViewLogger").logFromViewableImpressionTracker(d);
                e.should_log_viewability_duration && c("ViewabilityDurationSegmentLogger").logFromViewableImpressionTracker(d)
            }
            return d
        };
        d.handleEvent = function(a, b) {
            var d = this.getImpressionTracking(a);
            if (!d) return;
            if (b.name === "visible") {
                var e = Math.floor(Date.now() / 1e3);
                e = c("pageID").concat(":", e.toString(), ":", this.getElementID(a).toString());
                d.onVisible(b);
                this.visibleElementInfo[d.getID()] || (this.visibleElementInfo[d.getID()] = {
                    visibility_id: e,
                    elem: a
                })
            } else if (b.name === "hidden") {
                e = d.getConfig();
                b.cause === "default" || e.log_visibility_hidden_when_browser_inactive && b.cause === "browser" || e.addCauseToAllHiddenEvents && (b.cause === "updateVisible" || b.cause === "unload") ? (d.onHidden(b.cause), delete this.visibleElementInfo[d.getID()]) : b.cause === "removed" && (d.onRemoved(), delete this.visibleElementInfo[d.getID()], this.$ViewableImpressionEventHandler1["delete"](d.getID()))
            }
        };
        d.isInstreamAdStoryElement = function(a) {
            a = babelHelpers["extends"]({}, this.getConfigFromElement(a), this.config);
            return !!a.is_instream_story
        };
        d.getConfigFromElement = function(a) {
            return JSON.parse(c("DataAttributeUtils").getDataAttribute(a, "data-xt-vimp"))
        };
        d.getElementID = function(a) {
            a.getAttribute("id") || a.setAttribute("id", "xt_uniq_" + h++);
            return a.getAttribute("id")
        };
        return b
    }(c("VisibilityTracking"));
    g["default"] = a
}), 98);
__d("ViewableImpressionTracking", ["Arbiter", "DesktopHscrollUnitEventConstants", "ErrorUtils", "LitestandMessages", "Run", "ViewableImpressionConfig", "ViewableImpressionEventHandler"], (function(a, b, c, d, e, f, g) {
    function a() {
        c("ViewableImpressionEventHandler").instance === void 0 && (c("ViewableImpressionEventHandler").instance = new(c("ViewableImpressionEventHandler"))(c("ViewableImpressionConfig")), c("ViewableImpressionEventHandler").instance.listeners !== null && c("ViewableImpressionEventHandler").instance.listeners !== void 0 && c("ViewableImpressionEventHandler").instance.listeners.addSubscriptions(c("Arbiter").subscribe([c("LitestandMessages").STORIES_INSERTED, "AdsRefreshHandler/AdsLoaded", "MPPInsights/ChartView", "PhotoSnowliftAds/displayUnits", "WebMessengerAdsControl/adjustAds", d("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT, "WebVideoChannelAds/AdsLoaded", "Stories/cardChanged"], c("ErrorUtils").guard(function(a) {
            c("ViewableImpressionEventHandler").instance.refreshAndFireEvent(a)
        }, "ViewableImpressionTracking")))), d("Run").onLoad(function() {
            c("ViewableImpressionEventHandler").instance.refreshAndFireEvent()
        })
    }
    g.init = a
}), 98);
__d("PluginTabLoadMore", ["CSS", "Event"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        c("Event").fire(this.root, "noMoreContent"), d("CSS").hide(this.spinner)
    }

    function b(a) {
        c("Event").fire(this.root, "setCursor", a)
    }

    function e(a, b) {
        this.root = a, this.spinner = b
    }
    g.noMoreContent = a;
    g.setCursor = b;
    g.init = e
}), 98);