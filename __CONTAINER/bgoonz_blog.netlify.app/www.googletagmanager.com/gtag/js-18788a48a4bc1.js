// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "IS_OUTBOUND",
                "vtp_affiliatedDomains": ["list"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "URL_NO_FRAGMENT"
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "HOST",
                "vtp_stripWww": true
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "EXTENSION"
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "PATH"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "q,s,search,query,keyword",
                "vtp_multiQueryKeys": true,
                "vtp_ignoreEmptyQueryParam": true,
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.historyChangeSource",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__c",
                "vtp_value": ""
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 1,
                "function": "__c",
                "vtp_value": 1
            }],
            "tags": [{
                "function": "__gct",
                "vtp_trackingId": "G-F56YP2Y17L",
                "vtp_sessionDuration": 0,
                "tag_id": 1
            }, {
                "function": "__get",
                "vtp_eventName": "click",
                "vtp_settings": ["map", "streamId", "G-F56YP2Y17L", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]],
                "vtp_deferrable": false,
                "tag_id": 11
            }, {
                "function": "__get",
                "vtp_eventName": "file_download",
                "vtp_settings": ["map", "streamId", "G-F56YP2Y17L", "eventParameters", ["map", "link_id", ["macro", 3], "link_text", ["macro", 8], "link_url", ["macro", 5], "file_name", ["macro", 9], "file_extension", ["macro", 7]]],
                "vtp_deferrable": false,
                "tag_id": 18
            }, {
                "function": "__get",
                "vtp_eventName": ["template", "video_", ["macro", 10]],
                "vtp_settings": ["map", "streamId", "G-F56YP2Y17L", "eventParameters", ["map", "video_url", ["macro", 11], "video_title", ["macro", 12], "video_provider", ["macro", 13], "video_current_time", ["macro", 14], "video_duration", ["macro", 15], "video_percent", ["macro", 16], "visible", ["macro", 17]]],
                "vtp_deferrable": false,
                "tag_id": 21
            }, {
                "function": "__get",
                "vtp_eventName": "view_search_results",
                "vtp_settings": ["map", "streamId", "G-F56YP2Y17L", "eventParameters", ["map", "search_term", ["macro", 18]]],
                "vtp_deferrable": true,
                "tag_id": 26
            }, {
                "function": "__get",
                "vtp_eventName": "scroll",
                "vtp_settings": ["map", "streamId", "G-F56YP2Y17L", "eventParameters", ["map", "percent_scrolled", ["macro", 19]]],
                "vtp_deferrable": false,
                "tag_id": 29
            }, {
                "function": "__get",
                "vtp_eventName": "page_view",
                "vtp_settings": ["map", "streamId", "G-F56YP2Y17L", "eventParameters", ["map", "page_referrer", ["macro", 21]]],
                "vtp_deferrable": false,
                "tag_id": 32
            }, {
                "function": "__dlm",
                "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-F56YP2Y17L", "value", ["macro", 21]]],
                "tag_id": 33
            }, {
                "function": "__set_product_settings",
                "original_activity_id": 3001,
                "vtp_foreignTldMacroResult": ["macro", 23],
                "vtp_isChinaVipRegionMacroResult": ["macro", 24],
                "tag_id": 36
            }, {
                "function": "__ogt_event_settings",
                "original_activity_id": 3002,
                "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true]],
                "tag_id": 37
            }, {
                "function": "__ogt_google_signals",
                "original_activity_id": 3003,
                "vtp_googleSignals": "ENABLED",
                "vtp_serverMacroResult": ["macro", 25],
                "tag_id": 38
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": true,
                "vtp_uniqueTriggerId": "1_9",
                "tag_id": 39
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": true,
                "vtp_uniqueTriggerId": "1_16",
                "tag_id": 40
            }, {
                "function": "__ytl",
                "vtp_captureStart": true,
                "vtp_captureComplete": true,
                "vtp_captureProgress": true,
                "vtp_progressThresholdsPercent": "10,25,50,75",
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_uniqueTriggerId": "1_19",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 41
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "90",
                "vtp_verticalThresholdOn": true,
                "vtp_horizontalThresholdOn": false,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_uniqueTriggerId": "1_27",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 42
            }, {
                "function": "__ehl",
                "vtp_groupEvents": true,
                "vtp_groupEventsInterval": 1000,
                "vtp_uniqueTriggerId": "1_30",
                "tag_id": 43
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_9($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_16($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_19($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 18],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_27($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 20],
                "arg1": ["list", "pushState", "popstate", "replaceState"],
                "any_of": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 21],
                "arg1": ["macro", 22]
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.historyChange-v2"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_30($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.dom"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 11, 12, 15]
                ],
                [
                    ["if", 1, 2, 3],
                    ["add", 1]
                ],
                [
                    ["if", 2, 4, 5],
                    ["add", 2]
                ],
                [
                    ["if", 6, 7],
                    ["add", 3]
                ],
                [
                    ["if", 0],
                    ["unless", 8],
                    ["add", 4]
                ],
                [
                    ["if", 9, 10],
                    ["add", 5]
                ],
                [
                    ["if", 11, 13, 14],
                    ["unless", 12],
                    ["add", 6, 7]
                ],
                [
                    ["if", 15],
                    ["add", 8, 9, 10]
                ],
                [
                    ["if", 16],
                    ["add", 13]
                ],
                [
                    ["if", 17],
                    ["add", 14]
                ]
            ]
        },
        "runtime": [
            [50, "__set_product_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [17, ["c"], "containerId"]],
                ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
                ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_google_signals", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [17, ["c"], "containerId"]],
                ["b", [15, "d"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_event_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [8]],
                [53, [41, "f"],
                    [3, "f", 0],
                    [63, [7, "f"],
                        [23, [15, "f"],
                            [17, [17, [15, "a"], "eventSettings"], "length"]
                        ],
                        [33, [15, "f"],
                            [3, "f", [0, [15, "f"], 1]]
                        ],
                        [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"],
                                [15, "f"]
                            ], "name"]],
                            [43, [15, "d"],
                                [15, "g"],
                                [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"],
                                    [15, "f"]
                                ], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"],
                                    [15, "f"]
                                ], "conversion"]]
                            ]
                        ]]
                    ]
                ],
                [52, "e", [17, ["c"], "containerId"]],
                ["b", [15, "e"], "event_settings", [15, "d"]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ]
        ],
        "permissions": {
            "__set_product_settings": {
                "read_container_data": {}
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            },
            "__ogt_event_settings": {
                "read_container_data": {}
            }
        }

        ,
        "security_groups": {
            "google": ["__set_product_settings", "__ogt_google_signals", "__ogt_event_settings"]
        }

    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        da = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = ha,
        ma = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.nk = b.prototype
        },
        pa = this || self,
        qa = function(a) {
            return a
        };
    var ra = function(a, b) {
        this.g = a;
        this.o = b
    };
    var sa = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        ta = function() {
            this.C = {};
            this.s = !1;
            this.F = {}
        },
        ua = function(a, b) {
            var c = [],
                d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    ta.prototype.get = function(a) {
        return this.C["dust." + a]
    };
    ta.prototype.set = function(a, b) {
        this.s || (a = "dust." + a, this.F.hasOwnProperty(a) || (this.C[a] = b))
    };
    ta.prototype.has = function(a) {
        return this.C.hasOwnProperty("dust." + a)
    };
    var wa = function(a, b) {
        b = "dust." + b;
        a.s || a.F.hasOwnProperty(b) || delete a.C[b]
    };
    ta.prototype.zb = function() {
        this.s = !0
    };
    var xa = function(a) {
        this.o = new ta;
        this.g = [];
        this.s = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (sa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
    };
    k = xa.prototype;
    k.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof xa ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    k.set = function(a, b) {
        if (!this.s)
            if ("length" === a) {
                if (!sa(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b)
            } else sa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
    };
    k.get = function(a) {
        return "length" === a ? this.length() : sa(a) ? this.g[Number(a)] : this.o.get(a)
    };
    k.length = function() {
        return this.g.length
    };
    k.yb = function() {
        for (var a = ua(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
        return new xa(a)
    };
    var ya = function(a, b) {
        sa(b) ? delete a.g[Number(b)] : wa(a.o, b)
    };
    k = xa.prototype;
    k.pop = function() {
        return this.g.pop()
    };
    k.push = function(a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
    };
    k.shift = function() {
        return this.g.shift()
    };
    k.splice = function(a, b, c) {
        return new xa(this.g.splice.apply(this.g, arguments))
    };
    k.unshift = function(a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
    };
    k.has = function(a) {
        return sa(a) && this.g.hasOwnProperty(a) || this.o.has(a)
    };
    k.zb = function() {
        this.s = !0;
        Object.freeze(this.g);
        this.o.zb()
    };
    var za = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].Dd + g > b[f].max) throw Error("Quota exceeded");
                b[f].Dd += g
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                zj: function(f) {
                    c = f
                },
                Fg: function() {
                    c && a(c, 1)
                },
                Bj: function(f) {
                    d = f
                },
                Ab: function(f) {
                    d && a(d, f)
                },
                Tj: function(f, g) {
                    b[f] = b[f] || {
                        Dd: 0
                    };
                    b[f].max = g
                },
                aj: function(f) {
                    return b[f] && b[f].Dd || 0
                },
                reset: function() {
                    b = {}
                },
                Mi: a
            };
        e.onFnConsume = e.zj;
        e.consumeFn = e.Fg;
        e.onStorageConsume = e.Bj;
        e.consumeStorage = e.Ab;
        e.setMax = e.Tj;
        e.getConsumed = e.aj;
        e.reset = e.reset;
        e.consume = e.Mi;
        return e
    };
    var Aa = function(a, b) {
        this.s = a;
        this.N = function(c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.o = new ta;
        this.g = this.F = void 0
    };
    Aa.prototype.add = function(a, b) {
        Ca(this, a, b, !1)
    };
    var Ca = function(a, b, c, d) {
        if (!a.o.s)
            if (a.s.Ab(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
                var e = a.o;
                e.set(b, c);
                e.F["dust." + b] = !0
            } else a.o.set(b, c)
    };
    Aa.prototype.set = function(a, b) {
        this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Ab(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
    };
    Aa.prototype.get = function(a) {
        return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
    };
    Aa.prototype.has = function(a) {
        return !!this.o.has(a) || !(!this.C || !this.C.has(a))
    };
    var Da = function(a) {
        var b = new Aa(a.s, a);
        a.F && (b.F = a.F);
        b.N = a.N;
        b.g = a.g;
        return b
    };
    var Ea = function() {},
        Fa = function(a) {
            return "function" == typeof a
        },
        m = function(a) {
            return "string" == typeof a
        },
        Ga = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        Ha = Array.isArray,
        Ia = function(a, b) {
            if (a && Ha(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ja = function(a, b) {
            if (!Ga(a) || !Ga(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Na = function(a, b) {
            for (var c = new Ma, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Oa = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Pa = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Qa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ra = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Ua = function(a) {
            var b = [];
            if (Ha(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Va = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ya = function() {
            return new Date(Date.now())
        },
        Za = function() {
            return Ya().getTime()
        },
        Ma = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ma.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ma.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var bb = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        cb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        db = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        eb = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        fb = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        gb = function(a, b) {
            var c = A;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        hb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ib = /^\w{1,9}$/,
        jb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Oa(a, function(d, e) {
                ib.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        kb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var lb = function(a, b) {
        ta.call(this);
        this.N = a;
        this.Ma = b
    };
    ma(lb, ta);
    lb.prototype.toString = function() {
        return this.N
    };
    lb.prototype.yb = function() {
        return new xa(ua(this, 1))
    };
    lb.prototype.g = function(a, b) {
        a.s.Fg();
        return this.Ma.apply(new mb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    lb.prototype.o = function(a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var ob = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = nb(a, b[d]), c instanceof ra); d++);
            return c
        },
        nb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof lb)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.g.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.F;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        mb = function(a, b) {
            this.o = a;
            this.g = b
        },
        G = function(a, b) {
            return Ha(b) ? nb(a.g, b) : b
        },
        H = function(a) {
            return a.o.N
        };
    var pb = function() {
        ta.call(this)
    };
    ma(pb, ta);
    pb.prototype.yb = function() {
        return new xa(ua(this, 1))
    };
    var qb = {
        control: function(a, b) {
            return new ra(a, G(this, b))
        },
        fn: function(a, b, c) {
            var d = this.g,
                e = G(this, b);
            if (!(e instanceof xa)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Ab(a.length + f.length);
            return new lb(a, function() {
                return function(g) {
                    var h = Da(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = G(this, l[n]), l[n] instanceof ra) return l[n];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new xa(l));
                    var t = ob(h, f);
                    if (t instanceof ra) return "return" === t.g ? t.o : t
                }
            }())
        },
        list: function(a) {
            var b = this.g.s;
            b.Ab(arguments.length);
            for (var c = new xa, d = 0; d < arguments.length; d++) {
                var e = G(this, arguments[d]);
                "string" === typeof e && b.Ab(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.g.s, c = new pb, d = 0; d < arguments.length - 1; d += 2) {
                var e = G(this, arguments[d]) + "",
                    f = G(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.Ab(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var rb = function() {
            this.s = za();
            this.g = new Aa(this.s)
        },
        sb = function(a, b, c) {
            var d = new lb(b, c);
            d.zb();
            a.g.set(b, d)
        },
        tb = function(a, b, c) {
            qb.hasOwnProperty(b) && sb(a, c || b, qb[b])
        };
    rb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.o(c)
    };
    rb.prototype.o = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = nb(this.g, arguments[c]);
        return b
    };
    rb.prototype.C = function(a, b) {
        var c = Da(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = nb(c, arguments[e]);
        return d
    };
    var ub, vb = function() {
        if (void 0 === ub) {
            var a = null,
                b = pa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: qa,
                        createScript: qa,
                        createScriptURL: qa
                    })
                } catch (c) {
                    pa.console && pa.console.error(c.message)
                }
                ub = a
            } else ub = a
        }
        return ub
    };
    var Ab = function(a, b) {
        this.s = b === zb ? a : ""
    };
    Ab.prototype.o = !0;
    Ab.prototype.g = function() {
        return this.s.toString()
    };
    Ab.prototype.toString = function() {
        return this.s + ""
    };
    var zb = {},
        Bb = function(a) {
            var b = vb(),
                c = b ? b.createScriptURL(a) : a;
            return new Ab(c, zb)
        };
    var Db = function(a, b) {
        this.s = b === Cb ? a : ""
    };
    Db.prototype.o = !0;
    Db.prototype.g = function() {
        return this.s.toString()
    };
    Db.prototype.toString = function() {
        return this.s.toString()
    };
    var Eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Cb = {};
    var Gb;
    a: {
        var Hb = pa.navigator;
        if (Hb) {
            var Ib = Hb.userAgent;
            if (Ib) {
                Gb = Ib;
                break a
            }
        }
        Gb = ""
    }

    function Jb(a) {
        return -1 != Gb.indexOf(a)
    };
    var Kb = {},
        Lb = function(a, b, c) {
            this.s = c === Kb ? a : "";
            this.o = !0
        };
    Lb.prototype.g = function() {
        return this.s.toString()
    };
    Lb.prototype.toString = function() {
        return this.s.toString()
    };
    var Mb = function(a) {
            return a instanceof Lb && a.constructor === Lb ? a.s : "type_error:SafeHtml"
        },
        Nb = function(a) {
            var b = vb(),
                c = b ? b.createHTML(a) : a;
            return new Lb(c, null, Kb)
        },
        Ob = new Lb(pa.trustedTypes && pa.trustedTypes.emptyHTML || "", 0, Kb);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Pb(a, b) {
        a.src = b instanceof Ab && b.constructor === Ab ? b.s : "type_error:TrustedResourceUrl";
        var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var Qb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Rb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Sb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = Mb(Ob);
        return !c.parentElement
    });
    var A = window,
        I = document,
        Tb = navigator,
        Ub = I.currentScript && I.currentScript.src,
        Vb = function(a, b) {
            var c = A[a];
            A[a] = void 0 === c ? b : c;
            return A[a]
        },
        Wb = function(a) {
            var b = I.getElementsByTagName("script")[0] || I.body || I.head;
            b.parentNode.insertBefore(a, b)
        },
        Xb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Yb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Zb = function(a, b, c, d) {
            var e = I.createElement("script");
            d && Oa(d, function(f, g) {
                f = f.toLowerCase();
                Yb.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            Pb(e, Bb(a));
            Xb(e, b);
            c && (e.onerror = c);
            Wb(e);
            return e
        },
        $b = function() {
            if (Ub) {
                var a = Ub.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        ac = function(a, b) {
            var c = I.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = I.body && I.body.lastChild || I.body || I.head;
            d.parentNode.insertBefore(c,
                d);
            Xb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        bc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        cc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        dc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        J = function(a) {
            A.setTimeout(a, 0)
        },
        fc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        },
        gc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        hc = function(a) {
            var b = I.createElement("div"),
                c = Nb("A<div>" + a + "</div>"),
                d = b;
            if (Sb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = Mb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        ic = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        jc = function(a) {
            var b;
            try {
                b = Tb.sendBeacon && Tb.sendBeacon(a)
            } catch (c) {}
            b || bc(a)
        },
        kc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        lc = function(a) {
            var b = I.featurePolicy;
            return b && Fa(b.features) ? -1 !== b.features().indexOf(a) : !1
        },
        mc = function() {
            return Tb.userLanguage || Tb.language
        };
    var nc = function(a, b) {
            return G(this, a) && G(this, b)
        },
        oc = function(a, b) {
            return G(this, a) === G(this, b)
        },
        pc = function(a, b) {
            return G(this, a) || G(this, b)
        },
        qc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        rc = function(a, b) {
            a = String(G(this, a));
            b = String(G(this, b));
            return a.substring(0, b.length) === b
        },
        sc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            switch (a) {
                case "pageLocation":
                    var c = A.location.href;
                    b instanceof pb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var uc = function() {
        this.g = new rb;
        tc(this)
    };
    uc.prototype.execute = function(a) {
        return this.g.o(a)
    };
    var tc = function(a) {
        tb(a.g, "map");
        var b = function(c, d) {
            sb(a.g, c, d)
        };
        b("and", nc);
        b("contains", qc);
        b("equals", oc);
        b("or", pc);
        b("startsWith", rc);
        b("variable", sc)
    };
    var vc = function(a) {
        if (a instanceof vc) return a;
        this.Sa = a
    };
    vc.prototype.toString = function() {
        return String(this.Sa)
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var wc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        xc = function(a) {
            if (null == a) return String(a);
            var b = wc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Dc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ec = function(a) {
            if (!a || "object" != xc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Dc(a, "constructor") && !Dc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Dc(a, b)
        },
        Fc = function(a, b) {
            var c = b || ("array" == xc(a) ? [] : {}),
                d;
            for (d in a)
                if (Dc(a, d)) {
                    var e = a[d];
                    "array" == xc(e) ? ("array" != xc(c[d]) && (c[d] = []), c[d] = Fc(e, c[d])) : Ec(e) ? (Ec(c[d]) || (c[d] = {}), c[d] = Fc(e, c[d])) : c[d] = e
                }
            return c
        };
    var Hc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n = ua(h, 1), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var l = d.indexOf(h);
                    if (-1 < l) return e[l];
                    if (h instanceof xa) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.yb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof pb) {
                        var t = {};
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    if (h instanceof lb) {
                        var u = function() {
                            for (var r = Array.prototype.slice.call(arguments, 0), v = 0; v < r.length; v++) r[v] = Gc(r[v], b, !!c);
                            var w = b ? b.s : za(),
                                y = new Aa(w);
                            b && (y.g = b.g);
                            return g(h.g.apply(h, [y].concat(r)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        Gc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]))
                },
                g = function(h) {
                    var l =
                        d.indexOf(h);
                    if (-1 < l) return e[l];
                    if (Ha(h) || Pa(h)) {
                        var n = new xa([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (Ec(h)) {
                        var q = new pb;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var t = new lb("", function(r) {
                            for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++) v[w] = Hc(G(this, v[w]), b, !!c);
                            return g((0, this.g.N)(h, h, v))
                        });
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    var u = typeof h;
                    if (null === h || "string" === u || "number" === u || "boolean" === u) return h;
                };
            return g(a)
        };
    var Ic = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        Jc = function(a) {
            if (void 0 === a || Ha(a) || Ec(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var Kc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof xa)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new xa(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new xa(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new xa(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Ic(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ya(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new xa(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Ic(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.g(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ya(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Lc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Mc = new ra("break"),
        Nc = new ra("continue"),
        Oc = function(a, b) {
            return G(this, a) + G(this, b)
        },
        Pc = function(a, b) {
            return G(this, a) && G(this, b)
        },
        Qc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (!(c instanceof xa)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Hc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (q) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= Lc.indexOf(b)) {
                    var f = Hc(c);
                    return Gc(a[b].apply(a, f), this.g)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof xa) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof lb) {
                        var h = Ic(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= Kc.supportedMethods.indexOf(b)) {
                    var l = Ic(c);
                    l.unshift(this.g);
                    return Kc[b].apply(a, l)
                }
            }
            if (a instanceof lb || a instanceof pb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof lb) {
                        var p = Ic(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof lb ? a.N : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Ic(c))
            }
            if (a instanceof vc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Xc = function(a, b) {
            a = G(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = G(this, b);
            c.set(a, d);
            return d
        },
        Yc = function(a) {
            var b = Da(this.g),
                c = ob(b, Array.prototype.slice.apply(arguments));
            if (c instanceof ra) return c
        },
        Zc = function() {
            return Mc
        },
        $c = function(a) {
            for (var b = G(this, a), c = 0; c < b.length; c++) {
                var d = G(this, b[c]);
                if (d instanceof ra) return d
            }
        },
        ad = function(a) {
            for (var b =
                    this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = G(this, arguments[c + 1]);
                    Ca(b, d, e, !0)
                }
            }
        },
        bd = function() {
            return Nc
        },
        cd = function(a, b, c) {
            var d = new xa;
            b = G(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, G(this, f))
        },
        dd = function(a, b) {
            return G(this, a) / G(this, b)
        },
        ed = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            var c = a instanceof vc,
                d = b instanceof vc;
            return c || d ? c && d ? a.Sa == b.Sa : !1 : a ==
                b
        },
        fd = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
            return b
        };

    function gd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = ob(f, d);
            if (g instanceof ra) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g
            }
        }
    }

    function hd(a, b, c) {
        if ("string" === typeof b) return gd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof pb || b instanceof xa || b instanceof lb) {
            var d = b.yb(),
                e = d.length();
            return gd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var id = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return hd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        jd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return hd(function(e) {
                var f = Da(d);
                Ca(f, a, e, !0);
                return f
            }, b, c)
        },
        kd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return hd(function(e) {
                var f = Da(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        md = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return ld(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        qd =
        function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return ld(function(e) {
                var f = Da(d);
                Ca(f, a, e, !0);
                return f
            }, b, c)
        },
        rd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return ld(function(e) {
                var f = Da(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function ld(a, b, c) {
        if ("string" === typeof b) return gd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof xa) return gd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var sd = function(a, b, c, d) {
            function e(p, q) {
                for (var t = 0; t < f.length(); t++) {
                    var u = f.get(t);
                    q.add(u, p.get(u))
                }
            }
            var f = G(this, a);
            if (!(f instanceof xa)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.g;
            d = G(this, d);
            var h = Da(g);
            for (e(g, h); nb(h, b);) {
                var l = ob(h, d);
                if (l instanceof ra) {
                    if ("break" === l.g) break;
                    if ("return" === l.g) return l
                }
                var n = Da(g);
                e(h, n);
                nb(n, c);
                h = n
            }
        },
        td = function(a) {
            a = G(this, a);
            var b = this.g,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        ud = function(a, b) {
            var c;
            a = G(this, a);
            b = G(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof pb || a instanceof xa || a instanceof lb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : sa(b) && (c = a[b]);
            else if (a instanceof vc) return;
            return c
        },
        vd = function(a, b) {
            return G(this, a) > G(this,
                b)
        },
        wd = function(a, b) {
            return G(this, a) >= G(this, b)
        },
        xd = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            a instanceof vc && (a = a.Sa);
            b instanceof vc && (b = b.Sa);
            return a === b
        },
        yd = function(a, b) {
            return !xd.call(this, a, b)
        },
        zd = function(a, b, c) {
            var d = [];
            G(this, a) ? d = G(this, b) : c && (d = G(this, c));
            var e = ob(this.g, d);
            if (e instanceof ra) return e
        },
        Ad = function(a, b) {
            return G(this, a) < G(this, b)
        },
        Bd = function(a, b) {
            return G(this, a) <= G(this, b)
        },
        Cd = function(a, b) {
            return G(this, a) % G(this, b)
        },
        Dd = function(a, b) {
            return G(this, a) * G(this, b)
        },
        Ed = function(a) {
            return -G(this,
                a)
        },
        Fd = function(a) {
            return !G(this, a)
        },
        Gd = function(a, b) {
            return !ed.call(this, a, b)
        },
        Hd = function() {
            return null
        },
        Id = function(a, b) {
            return G(this, a) || G(this, b)
        },
        Jd = function(a, b) {
            var c = G(this, a);
            G(this, b);
            return c
        },
        Kd = function(a) {
            return G(this, a)
        },
        Ld = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        Md = function(a) {
            return new ra("return", G(this, a))
        },
        Nd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof lb || a instanceof xa || a instanceof pb) && a.set(b, c);
            return c
        },
        Od = function(a, b) {
            return G(this, a) - G(this, b)
        },
        Wd = function(a, b, c) {
            a = G(this, a);
            var d = G(this, b),
                e = G(this, c);
            if (!Ha(d) || !Ha(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === G(this, d[h]))
                    if (f = G(this, e[h]), f instanceof ra) {
                        var l = f.g;
                        if ("break" === l) return;
                        if ("return" === l || "continue" === l) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = G(this, e[e.length - 1]), f instanceof ra && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        Xd = function(a, b, c) {
            return G(this, a) ? G(this, b) : G(this, c)
        },
        Yd = function(a) {
            a = G(this, a);
            return a instanceof lb ? "function" : typeof a
        },
        Zd = function(a) {
            for (var b = this.g, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        $d = function(a, b, c, d) {
            var e = G(this, d);
            if (G(this, c)) {
                var f = ob(this.g, e);
                if (f instanceof ra) {
                    if ("break" === f.g) return;
                    if ("return" === f.g) return f
                }
            }
            for (; G(this, a);) {
                var g = ob(this.g, e);
                if (g instanceof ra) {
                    if ("break" === g.g) break;
                    if ("return" === g.g) return g
                }
                G(this,
                    b)
            }
        },
        ae = function(a) {
            return ~Number(G(this, a))
        },
        be = function(a, b) {
            return Number(G(this, a)) << Number(G(this, b))
        },
        ce = function(a, b) {
            return Number(G(this, a)) >> Number(G(this, b))
        },
        de = function(a, b) {
            return Number(G(this, a)) >>> Number(G(this, b))
        },
        ee = function(a, b) {
            return Number(G(this, a)) & Number(G(this, b))
        },
        fe = function(a, b) {
            return Number(G(this, a)) ^ Number(G(this, b))
        },
        ge = function(a, b) {
            return Number(G(this, a)) | Number(G(this, b))
        };
    var ie = function() {
        this.g = new rb;
        he(this)
    };
    ie.prototype.execute = function(a) {
        return je(this.g.o(a))
    };
    var le = function(a, b) {
            return je(ke.g.C(a, b))
        },
        he = function(a) {
            var b = function(d, e) {
                tb(a.g, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                sb(a.g, String(d), e)
            };
            c(0, Oc);
            c(1, Pc);
            c(2, Qc);
            c(3, Xc);
            c(53, Yc);
            c(4, Zc);
            c(5, $c);
            c(52, ad);
            c(6, bd);
            c(9, $c);
            c(50, cd);
            c(10, dd);
            c(12, ed);
            c(13, fd);
            c(47, id);
            c(54, jd);
            c(55, kd);
            c(63, sd);
            c(64, md);
            c(65, qd);
            c(66, rd);
            c(15, td);
            c(16, ud);
            c(17, ud);
            c(18, vd);
            c(19, wd);
            c(20, xd);
            c(21, yd);
            c(22, zd);
            c(23, Ad);
            c(24, Bd);
            c(25, Cd);
            c(26, Dd);
            c(27,
                Ed);
            c(28, Fd);
            c(29, Gd);
            c(45, Hd);
            c(30, Id);
            c(32, Jd);
            c(33, Jd);
            c(34, Kd);
            c(35, Kd);
            c(46, Ld);
            c(36, Md);
            c(43, Nd);
            c(37, Od);
            c(38, Wd);
            c(39, Xd);
            c(40, Yd);
            c(41, Zd);
            c(42, $d);
            c(58, ae);
            c(57, be);
            c(60, ce);
            c(61, de);
            c(56, ee);
            c(62, fe);
            c(59, ge)
        },
        ne = function() {
            var a = ke,
                b = me();
            sb(a.g, "require", b)
        },
        oe = function(a, b) {
            a.g.g.N = b
        };

    function je(a) {
        if (a instanceof ra || a instanceof lb || a instanceof xa || a instanceof pb || a instanceof vc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };
    var pe = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Bh: a("consent"),
            Wd: a("consent_always_fire"),
            Df: a("convert_case_to"),
            Ef: a("convert_false_to"),
            Ff: a("convert_null_to"),
            Gf: a("convert_true_to"),
            Hf: a("convert_undefined_to"),
            ck: a("debug_mode_metadata"),
            dk: a("event_data_overrides"),
            xb: a("function"),
            ki: a("instance_name"),
            oi: a("live_only"),
            ri: a("malware_disabled"),
            si: a("metadata"),
            ek: a("original_activity_id"),
            fk: a("original_vendor_template_id"),
            xi: a("once_per_event"),
            kg: a("once_per_load"),
            hk: a("priority_override"),
            ik: a("respected_consent_types"),
            og: a("setup_tags"),
            qg: a("tag_id"),
            rg: a("teardown_tags")
        }
    }();
    var Re;
    var Se = [],
        Te = [],
        Ue = [],
        Ve = [],
        We = [],
        Xe = {},
        Ye, Ze, $e, af = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        bf = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = Xe[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_")) d && b && b.Eg && b.Eg(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f];
                    else if (f === pe.Wd.toString() && a[f]) {}
            d && b && b.Dg && (e.vtp_gtmCachedValues = b.Dg);
            return void 0 !== d ? d(e) : Re(c, e, b)
        },
        df = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = cf(a[e], b, c));
            return d
        },
        cf = function(a, b, c) {
            if (Ha(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(cf(a[e], b, c));
                        return d;
                    case "macro":
                        var f =
                            a[1];
                        if (c[f]) return;
                        var g = Se[f];
                        if (!g || b.ef(g)) return;
                        c[f] = !0;
                        try {
                            var h = df(g, b, c);
                            h.vtp_gtmEventId = b.id;
                            d = bf(h, b);
                            $e && (d = $e.Ni(d, h))
                        } catch (y) {
                            b.Yg && b.Yg(y, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[cf(a[l], b, c)] = cf(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = cf(a[p], b, c);
                            Ze && (n = n || q === Ze.td);
                            d.push(q)
                        }
                        return Ze && n ? Ze.Ri(d) : d.join("");
                    case "escape":
                        d = cf(a[1], b, c);
                        if (Ze && Ha(a[1]) && "macro" === a[1][0] && Ze.mj(a)) return Ze.Ej(d);
                        d =
                            String(d);
                        for (var t = 2; t < a.length; t++) qe[a[t]] && (d = qe[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Ve[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Ng: a[2],
                            index: u
                        };
                    case "zb":
                        var r = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        r["function"] = a[1];
                        var v = ef(r, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        ef = function(a, b, c) {
            try {
                return Ye(df(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var ff = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c
    };
    ma(ff, Error);

    function gf(a, b) {
        if (Ha(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) gf(a[c], b[c])
        }
    };
    var hf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.s = a;
        this.o = b;
        this.g = []
    };
    ma(hf, Error);
    var kf = function() {
        return function(a, b) {
            a instanceof hf || (a = new hf(a, jf));
            b && a.g.push(b);
            throw a;
        }
    };

    function jf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var nf = function(a) {
            function b(t) {
                for (var u = 0; u < t.length; u++) d[t[u]] = !0
            }
            for (var c = [], d = [], e = lf(a), f = 0; f < Te.length; f++) {
                var g = Te[f],
                    h = mf(g, e);
                if (h) {
                    for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < Ve.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        mf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        lf = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = ef(Ue[c], a));
                return b[c]
            }
        };
    var of = {
        Ni: function(a, b) {
            b[pe.Df] && "string" === typeof a && (a = 1 == b[pe.Df] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(pe.Ff) && null === a && (a = b[pe.Ff]);
            b.hasOwnProperty(pe.Hf) && void 0 === a && (a = b[pe.Hf]);
            b.hasOwnProperty(pe.Gf) && !0 === a && (a = b[pe.Gf]);
            b.hasOwnProperty(pe.Ef) && !1 === a && (a = b[pe.Ef]);
            return a
        }
    };
    var pf = function() {
        this.g = {}
    };

    function qf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new ff(c, d, g);
            }
    }

    function rf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d],
                    f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    qf(e, b, d, g);
                    qf(f, b, d, g)
                }
            }
        }
    };
    var vf = function(a) {
            var b = sf.J,
                c = this;
            this.o = new pf;
            this.g = {};
            var d = {},
                e = rf(this.o, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            Oa(a, function(f, g) {
                var h = {};
                Oa(g, function(l, n) {
                    var p = tf(l, n);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.T)
                });
                c.g[f] = function(l, n) {
                    var p = h[l];
                    if (!p) throw uf(l, {}, "The requested permission " + l + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        xf = function(a) {
            return wf.g[a] ||
                function() {}
        };

    function tf(a, b) {
        var c = af(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = uf;
        try {
            return bf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new ff(e, {}, "Permission " + e + " is unknown.");
                },
                T: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function uf(a, b, c) {
        return new ff(a, b, c)
    };
    var yf = !1;
    var zf = {};
    zf.bk = Ra('');
    zf.Vi = Ra('');
    var Af = yf,
        Bf = zf.Vi,
        Cf = zf.bk;
    var Df = function(a, b) {
        var c = String(a);
        return c
    };
    var Pf = function(a) {
            var b = {},
                c = 0;
            Oa(a, function(e, f) {
                if (void 0 !== f)
                    if (f = Df(f, 100), Ef.hasOwnProperty(e)) b[Ef[e]] = Ff(f);
                    else if (Gf.hasOwnProperty(e)) {
                    var g = Gf[e],
                        h = Ff(f);
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e)
                    for (var l = Ff(f).split("/", 5), n = 0; n < l.length; n++) {
                        var p = Of[n],
                            q = l[n];
                        b.hasOwnProperty(p) || (b[p] = q)
                    } else 10 > c && (b["k" + c] = Ff(Df(e, 40)), b["v" + c] = Ff(f), c++)
            });
            var d = [];
            Oa(b, function(e, f) {
                d.push("" + e + f)
            });
            return d.join("~")
        },
        Ff = function(a) {
            return ("" + a).replace(/~/g, function() {
                return "~~"
            })
        },
        Ef = {
            item_id: "id",
            item_name: "nm",
            item_brand: "br",
            item_category: "ca",
            item_category2: "c2",
            item_category3: "c3",
            item_category4: "c4",
            item_category5: "c5",
            item_variant: "va",
            price: "pr",
            quantity: "qt",
            coupon: "cp",
            item_list_name: "ln",
            index: "lp",
            item_list_id: "li",
            discount: "ds",
            affiliation: "af",
            promotion_id: "pi",
            promotion_name: "pn",
            creative_name: "cn",
            creative_slot: "cs",
            location_id: "lo"
        },
        Gf = {
            id: "id",
            name: "nm",
            brand: "br",
            variant: "va",
            list_name: "ln",
            list_position: "lp",
            list: "ln",
            position: "lp",
            creative: "cn"
        },
        Of = ["ca",
            "c2", "c3", "c4", "c5"
        ];
    var Qf = function(a) {
            var b = [];
            Oa(a, function(c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
            });
            return b.join("&")
        },
        Rf = function(a, b, c, d) {
            this.Wa = a.Wa;
            this.Gb = a.Gb;
            this.K = a.K;
            this.o = b;
            this.C = c;
            this.s = Qf(a.Wa);
            this.g = Qf(a.K);
            this.F = d ? this.g.length : 0;
            if (16384 < this.F) throw Error("EVENT_TOO_LARGE");
        };
    var Sf = function() {
        this.events = [];
        this.g = this.Wa = "";
        this.s = 0;
        this.o = !1
    };
    Sf.prototype.add = function(a) {
        return this.C(a) ? (this.events.push(a), this.Wa = a.s, this.g = a.o, this.s += a.F, this.o = a.C, !0) : !1
    };
    Sf.prototype.C = function(a) {
        var b = 20 > this.events.length && 16384 > a.F + this.s,
            c = this.Wa === a.s && this.g === a.o && this.o === a.C;
        return 0 == this.events.length || b && c
    };
    var Tf = function(a, b) {
            Oa(a, function(c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            })
        },
        Uf = function(a, b) {
            var c = [];
            a.s && c.push(a.s);
            b && c.push("_s=" + b);
            Tf(a.Gb, c);
            var d = !1;
            a.g && (c.push(a.g), d = !0);
            var e = c.join("&"),
                f = "",
                g = e.length + a.o.length + 1;
            d && 2048 < g && (f = c.pop(), e = c.join("&"));
            return {
                rf: e,
                body: f
            }
        },
        Vf = function(a, b) {
            var c = a.events;
            if (1 == c.length) return Uf(c[0], b);
            var d = [];
            a.Wa && d.push(a.Wa);
            for (var e = {}, f = 0; f < c.length; f++) Oa(c[f].Gb, function(u, r) {
                null != r && (e[u] = e[u] || {}, e[u][String(r)] =
                    e[u][String(r)] + 1 || 1)
            });
            var g = {};
            Oa(e, function(u, r) {
                var v, w = -1,
                    y = 0;
                Oa(r, function(x, z) {
                    y += z;
                    var B = (x.length + u.length + 2) * (z - 1);
                    B > w && (v = x, w = B)
                });
                y == c.length && (g[u] = v)
            });
            Tf(g, d);
            b && d.push("_s=" + b);
            for (var h = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = {
                    $c: n.$c
                }, p++) {
                var q = [];
                n.$c = {};
                Oa(c[p].Gb, function(u) {
                    return function(r, v) {
                        g[r] != "" + v && (u.$c[r] = v)
                    }
                }(n));
                c[p].g && q.push(c[p].g);
                Tf(n.$c, q);
                l.push(q.join("&"))
            }
            var t = l.join("\r\n");
            return {
                rf: h,
                body: t
            }
        };
    var dg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        eg = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        Q = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = dg.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    l = c[d],
                    n = typeof l;
                if (null === l || "undefined" === n) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var p = typeof l;
                    l instanceof lb ? p = "Fn" : l instanceof xa ? p = "List" : l instanceof pb ? p = "DustMap" :
                        l instanceof vc && (p = "OpaqueValue");
                    if (p != h) throw Error("Error in " + a + ". Argument " + f + " has type " + p + ", which does not match required type " + (eg[h] || h) + ".");
                }
            }
        };

    function fg(a) {
        return "" + a
    }

    function gg(a, b) {
        var c = [];
        return c
    };
    var hg = function(a, b) {
            var c = new lb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = G(this, d[e]);
                return b.apply(this, d)
            });
            c.zb();
            return c
        },
        ig = function(a, b) {
            var c = new pb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Fa(e) ? c.set(d, hg(a + "_" + d, e)) : (Ga(e) || m(e) || "boolean" == typeof e) && c.set(d, e)
                }
            c.zb();
            return c
        };
    var jg = function(a, b) {
        Q(H(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new pb;
        return d = ig("AssertApiSubject", c)
    };
    var kg = function(a, b) {
        Q(H(this), ["actual:?*", "message:?string"], arguments);
        var c = {},
            d = new pb;
        return d = ig("AssertThatSubject", c)
    };

    function lg(a) {
        return function() {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(Hc(arguments[d], c));
            return Gc(a.apply(null, b))
        }
    }
    var ng = function() {
        for (var a = Math, b = mg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = lg(a[e].bind(a)))
        }
        return c
    };
    var og = function(a) {
        var b;
        return b
    };
    var pg = function(a) {
        var b;
        return b
    };
    var qg = function(a) {
        return encodeURI(a)
    };
    var rg = function(a) {
        return encodeURIComponent(a)
    };
    var sg = function(a) {
        Q(H(this), ["message:?string"], arguments);
    };
    var tg = function(a, b) {
        Q(H(this), ["min:!number", "max:!number"], arguments);
        return Ja(a, b)
    };
    var ug = function(a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.Hi.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var vg = function() {
        ug(this, "read_container_data");
        var a = new pb;
        a.set("containerId", 'G-F56YP2Y17L');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", Af);
        a.set("previewMode", Cf);
        a.set("environmentMode", Bf);
        a.zb();
        return a
    };
    var wg = {};
    wg.sstECEnableData = !0;
    wg.enableAdsEc = !0;
    wg.enableCrossDomain = !1;
    wg.enableCrossDomain = !0;
    wg.sstFFConversionEnabled = !0;
    wg.sstEnableAuid = !0;
    wg.enableGbraidUpdate = !0;
    wg.enable1pScripts = !0;
    wg.requireGtagUserDataTos = !0;

    function xg() {
        return Gc(wg)
    };
    var yg = function() {
        return (new Date).getTime()
    };
    var zg = function(a) {
        if (null === a) return "null";
        if (a instanceof xa) return "array";
        if (a instanceof lb) return "function";
        if (a instanceof vc) {
            a = a.Sa;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Ag = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Af || Cf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Gc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Hc(c))
            })
        }
    };
    var Bg = function(a) {
        return Qa(Hc(a, this.g))
    };
    var Cg = function(a) {
        return Number(Hc(a, this.g))
    };
    var Dg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Eg = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var mg = "floor ceil round max min abs pow sqrt".split(" ");
    var Fg = function() {
            var a = {};
            return {
                bj: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Uj: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        Gg = function(a, b) {
            Q(H(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Hg = {};
    Hg.keys = function(a) {
        return new xa
    };
    Hg.values = function(a) {
        return new xa
    };
    Hg.entries = function(a) {
        return new xa
    };
    Hg.freeze = function(a) {
        return a
    };
    Hg.delete = function(a, b) {
        return !1
    };
    var Jg = function() {
        this.g = {};
        this.o = {};
    };
    Jg.prototype.get = function(a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c
    };
    Jg.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Fa(b) ? hg(a, b) : ig(a, b)
    };
    var Lg = function(a, b, c) {
        if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Fa(c) ? hg(b, c) : ig(b, c)
    };

    function Kg(a, b) {
        var c = void 0;
        return c
    };

    function Mg() {
        var a = {};
        return a
    };
    var R = {
        wc: "_ee",
        zd: "_syn_or_mod",
        jk: "_uei",
        ze: "_eu",
        gk: "_pci",
        Pb: "event_callback",
        gd: "event_timeout",
        Da: "gtag.config",
        Na: "gtag.get",
        xa: "purchase",
        Mb: "refund",
        pb: "begin_checkout",
        Kb: "add_to_cart",
        Lb: "remove_from_cart",
        Kh: "view_cart",
        Jf: "add_to_wishlist",
        ya: "view_item",
        qb: "view_promotion",
        cd: "select_promotion",
        $d: "select_item",
        $a: "view_item_list",
        If: "add_payment_info",
        Jh: "add_shipping_info",
        Pa: "value_key",
        cb: "value_callback",
        Ea: "allow_ad_personalization_signals",
        qc: "restricted_data_processing",
        jc: "allow_google_signals",
        qa: "cookie_expires",
        Ob: "cookie_update",
        sc: "session_duration",
        nd: "session_engaged_time",
        Ra: "user_properties",
        sa: "transport_url",
        V: "ads_data_redaction",
        za: "user_data",
        nc: "first_party_collection",
        D: "ad_storage",
        I: "analytics_storage",
        Xd: "region",
        Cf: "wait_for_update",
        oa: "conversion_linker",
        Fa: "conversion_cookie_prefix",
        da: "value",
        ba: "currency",
        gg: "trip_type",
        X: "items",
        Zf: "passengers",
        ce: "allow_custom_scripts",
        uc: "session_id",
        dg: "quantity",
        fb: "transaction_id",
        tb: "language",
        ed: "country",
        dd: "allow_enhanced_conversions",
        ie: "aw_merchant_id",
        fe: "aw_feed_country",
        he: "aw_feed_language",
        ee: "discount",
        ca: "developer_id",
        od: "delivery_postal_code",
        pe: "estimated_delivery_date",
        ne: "shipping",
        ve: "new_customer",
        je: "customer_lifetime_value",
        oe: "enhanced_conversions",
        ic: "page_view",
        ia: "linker",
        O: "domains",
        Sb: "decorate_forms",
        Vf: "enhanced_conversions_automatic_settings",
        Th: "auto_detection_enabled",
        Wf: "ga_temp_client_id",
        ae: "user_engagement",
        Eh: "app_remove",
        Fh: "app_store_refund",
        Gh: "app_store_subscription_cancel",
        Hh: "app_store_subscription_convert",
        Ih: "app_store_subscription_renew",
        Lh: "first_open",
        Mh: "first_visit",
        Nh: "in_app_purchase",
        Oh: "session_start",
        Ph: "user_data_login",
        Qh: "user_data_logout",
        Rh: "allow_display_features",
        kc: "campaign",
        Lf: "campaign_content",
        Mf: "campaign_id",
        Nf: "campaign_medium",
        Of: "campaign_name",
        Pf: "campaign_source",
        Qf: "campaign_term",
        rb: "client_id",
        fa: "cookie_domain",
        Nb: "cookie_name",
        ab: "cookie_path",
        Ga: "cookie_flags",
        mc: "custom_map",
        se: "groups",
        Yf: "non_interaction",
        ub: "page_location",
        we: "page_path",
        Qa: "page_referrer",
        ld: "page_title",
        Tb: "send_page_view",
        vb: "send_to",
        xe: "session_engaged",
        kd: "_logged_in_state",
        ye: "session_number",
        gi: "tracking_id",
        hb: "url_passthrough",
        Rb: "accept_incoming",
        oc: "url_position",
        bg: "phone_conversion_number",
        $f: "phone_conversion_callback",
        ag: "phone_conversion_css_class",
        cg: "phone_conversion_options",
        di: "phone_conversion_ids",
        ci: "phone_conversion_country_code",
        Kf: "aw_remarketing",
        de: "aw_remarketing_only",
        be: "gclid",
        Sh: "auid",
        Yh: "affiliation",
        Uf: "tax",
        me: "list_name",
        Tf: "checkout_step",
        Sf: "checkout_option",
        Zh: "coupon",
        $h: "promotions",
        wb: "user_id",
        ei: "retoken",
        ra: "cookie_prefix",
        Rf: "disable_merchant_reported_purchases",
        Xh: "dc_natural_search",
        Wh: "dc_custom_params",
        Xf: "method",
        fi: "search_term",
        Vh: "content_type",
        bi: "optimize_id",
        ai: "experiments",
        eb: "google_signals",
        jd: "google_tld",
        pd: "update",
        qe: "firebase_id",
        Qb: "ga_restrict_domain",
        fd: "event_settings",
        ke: "dynamic_event_settings",
        vc: "user_data_settings",
        eg: "screen_name",
        Oa: "_x_19",
        sb: "_ecid",
        hd: "_x_20",
        ue: "internal_traffic_results",
        fg: "traffic_type",
        md: "referral_exclusion_definition",
        te: "ignore_referrer",
        Uh: "content_group"
    };
    var Ng = {};
    R.hi = Object.freeze((Ng[R.Ea] = 1, Ng[R.dd] = 1, Ng[R.jc] = 1, Ng[R.X] = 1, Ng[R.fa] = 1, Ng[R.qa] = 1, Ng[R.Ga] = 1, Ng[R.Nb] = 1, Ng[R.ab] = 1, Ng[R.ra] = 1, Ng[R.Ob] = 1, Ng[R.mc] = 1, Ng[R.ca] = 1, Ng[R.ke] = 1, Ng[R.Pb] = 1, Ng[R.fd] = 1, Ng[R.gd] = 1, Ng[R.nc] = 1, Ng[R.Qb] = 1, Ng[R.eb] = 1, Ng[R.jd] = 1, Ng[R.se] = 1, Ng[R.ue] = 1, Ng[R.ia] = 1, Ng[R.md] = 1, Ng[R.qc] = 1, Ng[R.Tb] = 1, Ng[R.vb] = 1, Ng[R.sc] = 1, Ng[R.nd] = 1, Ng[R.od] = 1, Ng[R.sa] = 1, Ng[R.pd] = 1, Ng[R.vc] = 1, Ng[R.Ra] = 1, Ng[R.ze] = 1, Ng));
    R.hg = Object.freeze([R.ub, R.Qa, R.ld, R.tb, R.eg, R.wb, R.qe, R.Uh]);
    var Og = {};
    R.ji = Object.freeze((Og[R.Eh] = 1, Og[R.Fh] = 1, Og[R.Gh] = 1, Og[R.Hh] = 1, Og[R.Ih] = 1, Og[R.Lh] = 1, Og[R.Mh] = 1, Og[R.Nh] = 1, Og[R.Oh] = 1, Og[R.ae] = 1, Og));
    var Pg = {};
    R.ig = Object.freeze((Pg[R.If] = 1, Pg[R.Jh] = 1, Pg[R.Kb] = 1, Pg[R.Lb] = 1, Pg[R.Kh] = 1, Pg[R.pb] = 1, Pg[R.$d] = 1, Pg[R.$a] = 1, Pg[R.cd] = 1, Pg[R.qb] = 1, Pg[R.xa] = 1, Pg[R.Mb] = 1, Pg[R.ya] = 1, Pg[R.Jf] = 1, Pg));
    R.Be = Object.freeze([R.Ea, R.jc, R.Ob]);
    R.vi = Object.freeze([].concat(R.Be));
    R.Ce = Object.freeze([R.qa, R.gd, R.sc, R.nd]);
    R.wi = Object.freeze([].concat(R.Ce));
    var Rg = {},
        Sg = function(a, b) {
            Rg[a] = Rg[a] || [];
            Rg[a][b] = !0
        },
        Tg = function(a) {
            for (var b = [], c = Rg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Ug = function(a) {
        Sg("GTM", a)
    };
    var sf = {},
        S = null,
        Vg = Math.random();
    sf.J = "G-F56YP2Y17L";
    sf.xd = "ar0";
    sf.Dh = "ChEI8JTpiwYQu7+S/vWSwLXPARIlANDEKqzwK4W1kFme25ewAs6qGFmmSQx/I8RvmZew9S6iCGhvNRoCQRE\x3d";
    var Wg = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Xg = {
            __paused: !0,
            __tg: !0
        },
        Yg;
    for (Yg in Wg) Wg.hasOwnProperty(Yg) && (Xg[Yg] = !0);
    sf.Yd = "www.googletagmanager.com";
    var Zg = sf.Yd + "/gtm.js";
    Zg = sf.Yd + "/gtag/js";
    var $g = Zg,
        ah = Ra(""),
        bh = null,
        ch = null,
        dh = "https://www.googletagmanager.com/a?id=" + sf.J + "&cv=1",
        eh = {},
        fh = {},
        gh = function() {
            var a = S.sequence || 1;
            S.sequence = a + 1;
            return a
        };
    sf.Ch = "";
    var hh = "";
    sf.yd = hh;
    var ih = {},
        jh = new Ma,
        kh = {},
        lh = {},
        oh = {
            name: "dataLayer",
            set: function(a, b) {
                Fc(hb(a, b), kh);
                mh()
            },
            get: function(a) {
                return nh(a, 2)
            },
            reset: function() {
                jh = new Ma;
                kh = {};
                mh()
            }
        },
        nh = function(a, b) {
            return 2 != b ? jh.get(a) : ph(a)
        },
        ph = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = kh, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        qh = function(a, b) {
            lh.hasOwnProperty(a) || (jh.set(a, b), Fc(hb(a, b), kh), mh())
        },
        rh = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist",
                    "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = nh(c, 1);
                if (Ha(d) || Ec(d)) d = Fc(d);
                lh[c] = d
            }
        },
        mh = function(a) {
            Oa(lh, function(b, c) {
                jh.set(b, c);
                Fc(hb(b, void 0), kh);
                Fc(hb(b, c), kh);
                a && delete lh[b]
            })
        },
        th = function(a, b, c) {
            ih[a] = ih[a] || {};
            ih[a][b] = sh(b, c)
        },
        sh = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? ph(a) : jh.get(a);
            "array" === xc(d) || "object" === xc(d) ? c = Fc(d) : c = d;
            return c
        },
        uh = function(a, b) {
            if (ih[a]) return ih[a][b]
        },
        vh = function(a, b) {
            ih[a] && delete ih[a][b]
        };
    var wh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        xh = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        yh = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        zh = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ah = function() {
            var a = !1;
            a = !0;
            return a
        },
        Ch = function(a) {
            var b = nh("gtm.allowlist") || nh("gtm.whitelist");
            b && Ug(9);
            Ah() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && fb(Ua(b), xh),
                d = nh("gtm.blocklist") ||
                nh("gtm.blacklist");
            d || (d = nh("tagTypeBlacklist")) && Ug(3);
            d ? Ug(8) : d = [];
            Bh() && (d = Ua(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ua(d).indexOf("google") && Ug(2);
            var e = d && fb(Ua(d), yh),
                f = {};
            return function(g) {
                var h = g && g[pe.xb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var l = fh[h] || [],
                    n = a(h, l);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(h))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > c.indexOf(l[q])) {
                                        Ug(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(h);
                    if (u) t = u;
                    else {
                        var r = Na(e, l || []);
                        r && Ug(10);
                        t = r
                    }
                }
                var v = !n || t;
                v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Na(e, zh));
                return f[h] = v
            }
        },
        Bh = function() {
            return wh.test(A.location && A.location.hostname)
        };
    var Dh = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        Jh = function(a) {
            var b = S.zones;
            return b ? b.checkState(sf.J, a) : Dh
        },
        Kh = function(a) {
            var b = S.zones;
            !b && a && (b = S.zones = a());
            return b
        };
    var Lh = function(a) {
        this.g = a;
        this.defaultValue = !1
    };
    var Mh = new Lh(1933),
        Nh = new Lh(1956);
    var Ph = function() {
        var a = Oh,
            b = "cf";
        if (a.cf && a.hasOwnProperty(b)) return a.cf;
        var c = new a;
        a.cf = c;
        a.hasOwnProperty(b);
        return c
    };
    var Oh = function() {
            var a = {};
            this.g = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.o = function() {
                a[Mh.g] = !0
            }
        },
        Qh = function(a) {
            return Ph().g(a.g, a.defaultValue)
        };
    var Rh = [];

    function Sh() {
        var a = Vb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Th,
            update: Uh,
            addListener: Vh,
            notifyListeners: Wh,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function Th(a, b, c, d, e, f) {
        var g = Sh();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                l = h[a] || {},
                n = l.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== l.initial) h[a] = t;
                q && A.setTimeout(function() {
                    h[a] === t && t.quiet && (t.quiet = !1, Xh(a), Wh(), Sg("TAGGING", 2))
                }, f)
            }
        }
    }

    function Uh(a, b) {
        var c = Sh();
        c.active = !0;
        if (void 0 != b) {
            var d = Yh(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Yh(a);
            f.quiet ? (f.quiet = !1, Xh(a)) : g !== d && Xh(a)
        }
    }

    function Vh(a, b) {
        Rh.push({
            Te: a,
            Yi: b
        })
    }

    function Xh(a) {
        for (var b = 0; b < Rh.length; ++b) {
            var c = Rh[b];
            Ha(c.Te) && -1 !== c.Te.indexOf(a) && (c.bh = !0)
        }
    }

    function Wh(a) {
        for (var b = 0; b < Rh.length; ++b) {
            var c = Rh[b];
            if (c.bh) {
                c.bh = !1;
                try {
                    c.Yi({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var Yh = function(a) {
            var b = Sh().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        },
        Zh = function(a) {
            return (Sh().entries[a] || {}).initial
        },
        $h = function(a) {
            return !(Sh().entries[a] || {}).quiet
        },
        ai = function() {
            return Qh(Mh) ? Sh().active : !1
        },
        bi = function() {
            return Sh().usedDefault
        },
        ci = function(a, b) {
            Sh().addListener(a, b)
        },
        di = function(a) {
            Sh().notifyListeners(a)
        },
        ei = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!$h(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                ci(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        fi = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === Yh(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = m(b) ? [b] : b,
                e = {};
            c().length !== d.length && ci(d, function(f) {
                var g = c();
                0 < g.length && (f.Te = g, a(f))
            })
        };

    function gi() {}

    function hi() {};

    function ii(a) {
        for (var b = [], c = 0; c < ji.length; c++) {
            var d = a(ji[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var ji = [R.D, R.I],
        ki = function(a) {
            var b = a[R.Xd];
            b && Ug(40);
            var c = a[R.Cf];
            c && Ug(41);
            for (var d = Ha(b) ? b : [b], e = {
                    bc: 0
                }; e.bc < d.length; e = {
                    bc: e.bc
                }, ++e.bc) Oa(a, function(f) {
                return function(g, h) {
                    if (g !== R.Xd && g !== R.Cf) {
                        var l = d[f.bc];
                        Sh().set(g, h, l, "US", "US-NJ", c)
                    }
                }
            }(e))
        },
        li = 0,
        mi = function(a, b) {
            Oa(a, function(e, f) {
                Sh().update(e, f)
            });
            di(b);
            var c = Za(),
                d = c - li;
            li && 0 <= d && 1E3 > d && Ug(66);
            li = c
        },
        ni = function(a) {
            var b = Yh(a);
            return void 0 != b ? b : !0
        },
        oi = function() {
            return "G1" + ii(Yh)
        },
        pi = function() {
            return "G1" +
                ii(Zh)
        },
        qi = function(a, b) {
            ci(a, b)
        },
        ri = function(a, b) {
            fi(a, b)
        },
        si = function(a, b) {
            ei(a, b)
        };
    var ui = function(a) {
            return ti ? I.querySelectorAll(a) : null
        },
        vi = function(a, b) {
            if (!ti) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        wi = !1;
    if (I.querySelectorAll) try {
        var xi = I.querySelectorAll(":root");
        xi && 1 == xi.length && xi[0] == I.documentElement && (wi = !0)
    } catch (a) {}
    var ti = wi;
    var yi = function(a) {
            return void 0 === a || null === a ? "" : m(a) ? Va(String(a)) : "e0"
        },
        Ai = function(a) {
            return a.replace(zi, "")
        },
        Ci = function(a) {
            return Bi(a.replace(/\s/g, ""))
        },
        Bi = function(a) {
            return Va(a.replace(Di, "").toLowerCase())
        },
        Fi = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return Ei.test(a) ? a : "e0"
        },
        Hi = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Gi.test(c)) return c
            }
            return "e0"
        },
        Ki = function(a, b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Ii.indexOf(c.name) ? Ji(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        Ji = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (A.crypto && A.crypto.subtle) try {
                var b = Li(a);
                return A.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return A.btoa(d).replace(/\+/g,
                        "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        Li = function(a) {
            var b;
            if (A.TextEncoder) b = (new A.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        Di = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Gi = /^\S+@\S+\.\S+$/,
        Ei = /^\+\d{11,15}$/,
        zi = /[.~]/g,
        Mi = {},
        Ni = (Mi.email = "em", Mi.phone_number = "pn", Mi.first_name = "fn", Mi.last_name = "ln", Mi.street = "sa", Mi.city = "ct", Mi.region = "rg", Mi.country = "co", Mi.postal_code = "pc", Mi.error_code = "ec", Mi),
        Oi = function(a, b) {
            function c(n, p, q) {
                var t = n[p];
                Ha(t) || (t = [t]);
                for (var u = 0; u < t.length; ++u) {
                    var r = yi(t[u]);
                    "" !== r && f.push({
                        name: p,
                        value: q(r),
                        index: void 0
                    })
                }
            }

            function d(n, p, q, t) {
                var u = yi(n[p]);
                "" !== u && f.push({
                    name: p,
                    value: q(u),
                    index: t
                })
            }

            function e(n) {
                return function(p) {
                    Ug(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === A.location.protocol) {
                c(a, "email", Hi);
                c(a, "phone_number", Fi);
                c(a, "first_name", e(Ci));
                c(a, "last_name", e(Ci));
                var g = a.home_address || {};
                c(g, "street", e(Bi));
                c(g, "city", e(Bi));
                c(g, "postal_code", e(Ai));
                c(g, "region", e(Bi));
                c(g, "country", e(Ai));
                var h = a.address || {};
                Ha(h) || (h = [h]);
                for (var l = 0; l < h.length; l++) d(h[l], "first_name", Ci, l), d(h[l], "last_name", Ci, l), d(h[l], "street", Bi, l), d(h[l], "city", Bi, l), d(h[l], "postal_code", Ai, l), d(h[l],
                    "region", Bi, l), d(h[l], "country", Ai, l);
                Ki(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        Pi = function(a, b) {
            Oi(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        l = c[f].index,
                        n = Ni[g];
                    n && h && (-1 === Ii.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== l && (n += l), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Qi = function(a) {
            if (A.Promise) try {
                return new Promise(function(b) {
                    Pi(a,
                        function(c, d) {
                            b({
                                Oc: c,
                                mk: d
                            })
                        })
                })
            } catch (b) {}
        },
        Ii = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Ri = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Si = function(a) {
            var b = new Ri;
            b.eventModel = a;
            return b
        },
        Ti = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Ui = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Vi = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Wi = function(a,
            b) {
            a.remoteConfig = b;
            return a
        },
        Xi = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Yi = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Zi = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        $i = function(a, b) {
            a.onFailure = b;
            return a
        };
    Ri.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    var aj = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        bj = function(a, b, c) {
            function d(g) {
                Ec(g) && Oa(g, function(h, l) {
                    f = !0;
                    e[h] = l
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        cj = function(a) {
            var b = [R.kc, R.Lf, R.Mf, R.Nf, R.Of, R.Pf, R.Qf],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        };
    var dj, ej = !1;

    function fj() {
        ej = !0;
        dj = dj || {}
    }
    var gj = function(a) {
        ej || fj();
        return dj[a]
    };
    var hj = function(a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle) return !0;
        var c = A.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = A.getComputedStyle(d,
                null))
        }
        return !1
    };
    var ij = function() {
            var a = I.body,
                b = I.documentElement || a && a.parentElement,
                c, d;
            if (I.compatMode && "BackCompat" !== I.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                Ug(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        jj = function(a) {
            var b = ij(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var qj = /:[0-9]+$/,
        rj = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var l = h.slice(1).join("=");
                    if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        uj = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = sj(a.protocol) || sj(A.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                A.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || A.location.hostname).replace(qj, "").toLowerCase());
            return tj(a, b, c, d, e)
        },
        tj = function(a, b, c, d, e) {
            var f, g = sj(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = vj(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(qj, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ==
                        g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Sg("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = rj(f, e, !1, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        sj = function(a) {
            return a ?
                a.replace(":", "").toLowerCase() : ""
        },
        vj = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        wj = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Sg("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(qj, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        xj = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !=
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = wj(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var yj = {};
    var Bj = function(a) {
            if (0 == a.length) return null;
            var b;
            b = zj(a, function(c) {
                return !Aj.test(c.Ka)
            });
            b = zj(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = zj(b, function(c) {
                return !hj(c.element)
            });
            return b[0]
        },
        zj = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        Cj = function(a) {
            var b;
            if (a === I.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e =
                                            g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = Cj(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        Dj = !0,
        Ej = !1;
    yj.zh = "true";
    var Fj = function(a) {
            if ("false" === yj.zh || !Dj) return !1;
            if (Ej) return !0;
            var b = gj("AW-" +
                a);
            return !!b && !!b.preAutoPii
        },
        Gj = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        Hj = new RegExp(/@(gmail|googlemail)\./i),
        Aj = new RegExp(/support|noreply/i),
        Ij = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        Jj = ["BR"],
        Kj = {},
        Lj = function(a) {
            a = a || {
                Od: !0,
                Pd: !0
            };
            a.lb = a.lb || {
                email: !0,
                phone: !0,
                Ag: !0
            };
            var b, c = a,
                d = !!c.Od + "." + !!c.Pd;
            c && c.Ec && c.Ec.length && (d += "." + c.Ec.join("."));
            c && c.lb && (d += "." + c.lb.email + "." + c.lb.phone + "." + c.lb.Ag);
            b = d;
            var e = Kj[b];
            if (e && 200 > Za() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = I.body;
            if (h) {
                for (var l = h.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) {
                    var p = l[n];
                    if (!(0 <= Ij.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
                            if (!(0 <= Jj.indexOf(p.children[t].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < l.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var u = f,
                r = u.status,
                v;
            if (a.lb && a.lb.email) {
                for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
                    var z = w[x],
                        B = z.textContent;
                    "INPUT" === z.tagName.toUpperCase() &&
                        z.value && (B = z.value);
                    if (B) {
                        var C = B.match(Gj);
                        if (C) {
                            var F = C[0],
                                D;
                            if (A.location) {
                                var E = tj(A.location, "host", !0);
                                D = 0 <= F.toLowerCase().indexOf(E)
                            } else D = !1;
                            D || y.push({
                                element: z,
                                Ka: F
                            })
                        }
                    }
                }
                var O;
                var M = a && a.Ec;
                if (M && 0 !== M.length) {
                    for (var N = [], P = 0; P < y.length; P++) {
                        for (var L = !0, K = 0; K < M.length; K++) {
                            var ca = M[K];
                            if (ca && vi(y[P].element, ca)) {
                                L = !1;
                                break
                            }
                        }
                        L && N.push(y[P])
                    }
                    O = N
                } else O = y;
                v = Bj(O);
                10 < y.length && (r = "3")
            }
            var Y = [];
            if (v) {
                var fa = v.element,
                    V = {
                        Ka: v.Ka,
                        tagName: fa.tagName,
                        type: 1
                    };
                a.Od && (V.querySelector = Cj(fa));
                a.Pd &&
                    (V.isVisible = !hj(fa));
                Y.push(V)
            }
            var ea = {
                elements: Y,
                status: r
            };
            Kj[b] = {
                timestamp: Za(),
                result: ea
            };
            return ea
        },
        Mj = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Ka.length + ":" + Hj.test(a.Ka)
        };
    var Nj = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), h = 0; h < g.length; h++) {
                        var l = g[h].trim();
                        if (l) {
                            if (0 === l.indexOf("dataLayer.")) f = nh(l.substring(10));
                            else {
                                var n = l.split(".");
                                f = A[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && ti) {
                    var q = ui(e);
                    q && 0 < q.length && (f = gc(q[0]) || Va(q[0].value))
                }
                f && (a[b] = f)
            }
        },
        Oj = function(a) {
            if (a) {
                var b = {};
                Nj(b, "email",
                    a.email);
                Nj(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Nj(e, "first_name", c[d].first_name);
                    Nj(e, "last_name", c[d].last_name);
                    Nj(e, "street", c[d].street);
                    Nj(e, "city", c[d].city);
                    Nj(e, "region", c[d].region);
                    Nj(e, "country", c[d].country);
                    Nj(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        Pj = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return Oj(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Lj({
                                Od: !1,
                                Pd: !1,
                                Ec: c.exclude_element_selectors,
                                lb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    Ag: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.Ka;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        Qj = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : A.enhanced_conversion_data;
                case "automatic":
                    return Oj(a[R.Vf])
            }
        };
    var Rj = {},
        Sj = function(a, b) {
            if (A._gtmexpgrp && A._gtmexpgrp.hasOwnProperty(a)) return A._gtmexpgrp[a];
            void 0 === Rj[a] && (Rj[a] = Math.floor(Math.random() * b));
            return Rj[a]
        };
    var Tj = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Uj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };

    function Vj(a) {
        return "null" !== a.origin
    };
    var Yj = function(a, b, c, d) {
            return Wj(d) ? Uj(a, String(b || Xj()), c) : []
        },
        bk = function(a, b, c, d, e) {
            if (Wj(e)) {
                var f = Zj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = ak(f, function(g) {
                        return g.Gd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = ak(f, function(g) {
                        return g.Pc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function ck(a, b, c, d) {
        var e = Xj(),
            f = window;
        Vj(f) && (f.document.cookie = a);
        var g = Xj();
        return e != g || void 0 != c && 0 <= Yj(b, g, !1, d).indexOf(c)
    }
    var gk = function(a, b, c, d) {
            function e(w, y, x) {
                if (null == x) return delete h[y], w;
                h[y] = x;
                return w + "; " + y + "=" + x
            }

            function f(w, y) {
                if (null == y) return delete h[y], w;
                h[y] = !0;
                return w + "; " + y
            }
            if (!Wj(c.Ja)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = dk(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.wj);
            g = e(g, "samesite",
                c.Oj);
            c.Qj && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = ek(), q = void 0, t = !1, u = 0; u < p.length; ++u) {
                    var r = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", r);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    t = !0;
                    if (!fk(r, c.path) && ck(v, a, b, c.Ja)) return 0
                }
                if (q && !t) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return fk(n, c.path) ? 1 : ck(g, a, b, c.Ja) ? 0 : 1
        },
        hk = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return gk(a,
                b, c)
        };

    function ak(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function Zj(a, b, c) {
        for (var d = [], e = Yj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({
                    id: g.join("."),
                    Gd: 1 * l[0] || 1,
                    Pc: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var dk = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        ik = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        jk = /(^|\.)doubleclick\.net$/i,
        fk = function(a, b) {
            return jk.test(window.document.location.hostname) || "/" === b && ik.test(a)
        },
        Xj = function() {
            return Vj(window) ? window.document.cookie : ""
        },
        ek = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            jk.test(e) || ik.test(e) || a.push("none");
            return a
        },
        Wj = function(a) {
            if (!Qh(Mh) || !a || !ai()) return !0;
            if (!$h(a)) return !1;
            var b = Yh(a);
            return null == b ? !0 : !!b
        };
    var kk = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c = b;
            a && (c = b ^ Tj(a) & 2147483647);
            return [c, Math.round(Za() / 1E3)].join(".")
        },
        nk = function(a, b, c, d, e) {
            var f = lk(b);
            return bk(a, f, mk(c), d, e)
        },
        ok = function(a, b, c, d) {
            var e = "" + lk(c),
                f = mk(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        lk = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        mk = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function pk(a, b, c) {
        var d, e = Number(null != a.mb ? a.mb : void 0);
        0 !== e && (d = new Date((b || Za()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var qk = ["1"],
        rk = {},
        uk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = sk(a.prefix);
            if (!rk[c] && !tk(c, a.path, a.domain) && b) {
                var d = sk(a.prefix),
                    e = kk(),
                    f = ok(e, "1", a.domain, a.path),
                    g = pk(a);
                g.Ja = "ad_storage";
                if (0 === hk(d, f, g)) {
                    var h = Vb("google_tag_data", {});
                    h._gcl_au ? Sg("GTM", 57) : h._gcl_au = e
                }
                tk(c, a.path, a.domain)
            }
        };

    function tk(a, b, c) {
        var d = nk(a, b, c, qk, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (rk[a] = e.slice(0, 2).join("."), e.slice(2, 4).join(".")) : 3 === e.length ? e.slice(0, 2).join(".") : rk[a] = d;
        return !0
    }

    function sk(a) {
        return (a || "_gcl") + "_au"
    };
    var vk = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                zf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function wk(a, b) {
        var c = vk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].zf] || (d[c[e].zf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    va: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].zf].push(g)
            }
        }
        return d
    };

    function xk() {
        for (var a = yk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function zk() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var yk, Ak;

    function Bk(a) {
        yk = yk || zk();
        Ak = Ak || xk();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(yk[l], yk[n], yk[p], yk[q])
        }
        return b.join("")
    }

    function Ck(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Ak[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        yk = yk || zk();
        Ak = Ak || xk();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var Dk, Ek = function(a) {
        var b;
        if (!(b = Dk)) {
            for (var c = Array(256), d = 0; 256 > d; d++) {
                for (var e = d, f = 0; 8 > f; f++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                c[d] = e
            }
            b = c
        }
        Dk = b;
        for (var g = 4294967295, h = 0; h < a.length; h++) g = g >>> 8 ^ Dk[(g ^ a.charCodeAt(h)) & 255];
        return (g ^ -1) >>> 0
    };
    var Ik = function() {
            var a = Fk,
                b = Gk,
                c = Hk(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                cc(I, "mousedown", d);
                cc(I, "keyup", d);
                cc(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Jk = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Hk().decorators.push(f)
        },
        Kk = function(a, b, c) {
            for (var d = Hk().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var l = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (l && (p || n !== I.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) {
                                if (l[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && db(e, g.callback())
                }
            }
            return e
        };

    function Hk() {
        var a = Vb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Lk = /(.*?)\*(.*?)\*(.*)/,
        Mk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Nk = /^(?:www\.|m\.|amp\.)+/,
        Ok = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Pk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Sk = function(a, b) {
        var c = [],
            d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(Bk(String(e))))
            }
        var f = c.join("*");
        if (void 0 !== b) {
            var g = "xp_" + b,
                h = Qk[b](f);
            f = f + "*" + [g, Bk(String(h))].join("*")
        }
        return ["1", Rk(f), f].join("*")
    };

    function Rk(a, b) {
        var c = [A.navigator.userAgent, (new Date).getTimezoneOffset(), mc(), Math.floor(Za() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return Ek(c).toString(36)
    }
    var Tk = {},
        Qk = (Tk[1] = Uk, Tk[2] = Vk, Tk);

    function Uk(a, b) {
        var c = [(new Date).getTimezoneOffset(), mc(), Math.floor(Za() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return Ek(c).toString(36)
    }

    function Vk(a, b) {
        if (Tb.userAgentData) {
            var c = [(new Date).getTimezoneOffset(), mc(), Math.floor(Za() / 60 / 1E3) - (void 0 === b ? 0 : b), Tb.userAgentData.brands, Tb.userAgentData.mobile, Tb.userAgentData.platform, a].join("*");
            return Ek(c).toString(36)
        }
    }

    function Wk() {
        return function(a) {
            var b = wj(A.location.href),
                c = b.search.replace("?", ""),
                d = rj(c, "_gl", !1, !0) || "";
            a.query = Xk(d) || {};
            var e = uj(b, "fragment").match(Pk("_gl"));
            a.fragment = Xk(e && e[3] || "") || {}
        }
    }
    var Yk = function(a) {
            var b = Wk(),
                c = Hk();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (db(d, e.query), a && db(d, e.fragment));
            return d
        },
        Xk = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Lk.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var h = g[3],
                            l;
                        a: {
                            for (var n = g[2], p = 0; p < b; ++p)
                                if (n === Rk(h, p)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var q = {}, t = h ? h.split("*") : [], u = 0; u < t.length; u += 2) q[t[u]] = Ck(t[u + 1]);
                            return q
                        }
                    }
                }
            } catch (r) {}
        };

    function Zk(a, b, c, d) {
        function e(p) {
            var q = p,
                t = Pk(a).exec(q),
                u = q;
            if (t) {
                var r = t[2],
                    v = t[4];
                u = t[1];
                v && (u = u + r + v)
            }
            p = u;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Ok.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }

    function $k(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Kk(b, 1, c),
            e = Kk(b, 2, c),
            f = Kk(b, 3, c);
        if (eb(d)) {
            var g = Sk(d, void 0);
            c ? al("_gl", g, a) : bl("_gl", g, a, !1)
        }
        if (!c && eb(e)) {
            var h = Sk(e);
            bl("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    p = f[l],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        bl(n, p, q, void 0);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        al(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Zk(n, p, q, void 0)
            }
    }

    function bl(a, b, c, d) {
        if (c.href) {
            var e = Zk(a, b, c.href, void 0 === d ? !1 : d);
            Eb.test(e) && (c.href = e)
        }
    }

    function al(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = I.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Zk(a, b, c.action);
                Eb.test(n) && (c.action = n)
            }
        }
    }

    function Fk(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || $k(e, e.hostname)
            }
        } catch (g) {}
    }

    function Gk(a) {
        try {
            if (a.action) {
                var b = uj(wj(a.action), "host");
                $k(a, b)
            }
        } catch (c) {}
    }
    var cl = function(a, b, c, d) {
            Ik();
            Jk(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        dl = function(a, b) {
            Ik();
            Jk(a, [tj(A.location, "host", !0)], b, !0, !0)
        },
        el = function() {
            var a = I.location.hostname,
                b = Mk.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(Nk, ""),
                l = e.replace(Nk, ""),
                n;
            if (!(n = h === l)) {
                var p = "." + l;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        fl = function(a, b) {
            return !1 === a ? !1 : a || b || el()
        };
    var gl = {};
    var hl = /^\w+$/,
        il = /^[\w-]+$/,
        jl = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        kl = function() {
            if (!Qh(Mh) || !ai()) return !0;
            var a = Yh("ad_storage");
            return null == a ? !0 : !!a
        },
        ll = function(a, b) {
            $h("ad_storage") ? kl() ? a() : fi(a, "ad_storage") : b ? Sg("TAGGING", 3) : ei(function() {
                ll(a, !0)
            }, ["ad_storage"])
        },
        nl = function(a) {
            return ml(a).map(function(b) {
                return b.va
            })
        },
        ml = function(a) {
            var b = [];
            if (!Vj(A) || !I.cookie) return b;
            var c = Yj(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Zc: d.Zc
                }, e++) {
                var f = ol(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Zc = g.va;
                    var l = g.timestamp,
                        n = g.labels,
                        p = Ia(b, function(q) {
                            return function(t) {
                                return t.va === q.Zc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = pl(p.labels, n || [])) : b.push({
                        version: h,
                        va: d.Zc,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function(q, t) {
                return t.timestamp - q.timestamp
            });
            return ql(b)
        };

    function pl(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function rl(a) {
        return a && "string" == typeof a && a.match(hl) ? a : "_gcl"
    }
    var tl = function() {
            var a = wj(A.location.href),
                b = uj(a, "query", !1, void 0, "gclid"),
                c = uj(a, "query", !1, void 0, "gclsrc"),
                d = uj(a, "query", !1, void 0, "wbraid"),
                e = uj(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || rj(f, "gclid", !1, void 0);
                c = c || rj(f, "gclsrc", !1, void 0);
                d = d || rj(f, "wbraid", !1, void 0)
            }
            return sl(b, c, e, d)
        },
        sl = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && il.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !==
                a && a.match(il)) switch (b) {
                case void 0:
                    f(a, "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        vl = function(a) {
            var b = tl();
            ll(function() {
                ul(b, !1, a)
            })
        };

    function ul(a, b, c, d, e) {
        function f(w, y) {
            var x = wl(w, g);
            x && (hk(x, y, h), l = !0)
        }
        c = c || {};
        e = e || [];
        var g = rl(c.prefix);
        d = d || Za();
        var h = pk(c, d, !0);
        h.Ja = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == gl.enable_gbraid_cookie_write ? 0 : gl.enable_gbraid_cookie_write) && !l && a.gb) {
            var q = a.gb[0],
                t = wl("gb",
                    g),
                u = !1;
            if (!b)
                for (var r = ml(t), v = 0; v < r.length; v++) r[v].va === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var yl = function(a, b) {
            var c = Yk(!0);
            ll(function() {
                for (var d = rl(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== jl[f]) {
                        var g = wl(f, d),
                            h = c[g];
                        if (h) {
                            var l = Math.min(xl(h), Za()),
                                n;
                            b: {
                                var p = l;
                                if (Vj(A))
                                    for (var q = Yj(g, I.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                        if (xl(q[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = pk(b, l, !0);
                                u.Ja = "ad_storage";
                                hk(g, h, u)
                            }
                        }
                    }
                }
                ul(sl(c.gclid, c.gclsrc), !1, b)
            })
        },
        wl = function(a, b) {
            var c = jl[a];
            if (void 0 !== c) return b + c
        },
        xl = function(a) {
            return 0 !== zl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function ol(a) {
        var b = zl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            va: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function zl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !il.test(a[2]) ? [] : a
    }
    var Al = function(a, b, c, d, e) {
            if (Ha(b) && Vj(A)) {
                var f = rl(e),
                    g = function() {
                        for (var h = {}, l = 0; l < a.length; ++l) {
                            var n = wl(a[l], f);
                            if (n) {
                                var p = Yj(n, I.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                ll(function() {
                    cl(g, b, c, d)
                })
            }
        },
        ql = function(a) {
            return a.filter(function(b) {
                return il.test(b.va)
            })
        },
        Bl = function(a, b) {
            if (Vj(A)) {
                for (var c = rl(b.prefix), d = {}, e = 0; e < a.length; e++) jl[a[e]] && (d[a[e]] = jl[a[e]]);
                ll(function() {
                    Oa(d, function(f, g) {
                        var h = Yj(c + g, I.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                            r) {
                            return xl(r) - xl(u)
                        });
                        if (h.length) {
                            var l = h[0],
                                n = xl(l),
                                p = 0 !== zl(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== zl(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [t];
                            ul(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Cl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Dl = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (ai()) {
            var c = tl();
            if (Cl(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                dl(function() {
                    return d
                }, 3);
                dl(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function El(a, b) {
        var c = rl(b),
            d = wl(a, c);
        if (!d) return 0;
        for (var e = ml(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Fl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Zl = !1,
        $l = 0,
        am = [];

    function bm(a) {
        if (!Zl) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Zl = !0;
                for (var e = 0; e < am.length; e++) J(am[e])
            }
            am.push = function() {
                for (var f = 0; f < arguments.length; f++) J(arguments[f]);
                return 0
            }
        }
    }

    function cm() {
        if (!Zl && 140 > $l) {
            $l++;
            try {
                I.documentElement.doScroll("left"), bm()
            } catch (a) {
                A.setTimeout(cm, 50)
            }
        }
    }
    var dm = function(a) {
        Zl ? a() : am.push(a)
    };
    var fm = function(a, b) {
            this.g = !1;
            this.C = [];
            this.F = {
                tags: []
            };
            this.N = !1;
            this.o = this.s = 0;
            em(this, a, b)
        },
        gm = function(a, b, c, d) {
            if (Xg.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Ec(d) && (e = Fc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.F.tags.push(e) - 1
        },
        hm = function(a, b, c, d) {
            var e = a.F.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        im = function(a) {
            if (!a.g) {
                for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.C.length = 0
            }
        },
        em = function(a, b, c) {
            Fa(b) && a.zc(b);
            c && A.setTimeout(function() {
                return im(a)
            }, Number(c))
        };
    fm.prototype.zc = function(a) {
        var b = this,
            c = cb(function() {
                return J(function() {
                    a(sf.J, b.F)
                })
            });
        this.g ? c() : this.C.push(c)
    };
    var jm = function(a) {
        a.s++;
        return cb(function() {
            a.o++;
            a.N && a.o >= a.s && im(a)
        })
    };
    var km = function() {
            function a(d) {
                return !Ga(d) || 0 > d ? 0 : d
            }
            if (!S._li && A.performance && A.performance.timing) {
                var b = A.performance.timing.navigationStart,
                    c = Ga(oh.get("gtm.start")) ? oh.get("gtm.start") : 0;
                S._li = {
                    cst: a(c - b),
                    cbt: a(ch - b)
                }
            }
        },
        lm = function(a) {
            A.performance && A.performance.mark(sf.J + "_" + a + "_start")
        },
        mm = function(a) {
            if (A.performance) {
                var b = sf.J + "_" + a + "_start",
                    c = sf.J + "_" + a + "_duration";
                A.performance.measure(c, b);
                var d = A.performance.getEntriesByName(c)[0];
                A.performance.clearMarks(b);
                A.performance.clearMeasures(c);
                var e = S._p || {};
                void 0 === e[a] && (e[a] = d.duration, S._p = e);
                return d.duration
            }
        },
        nm = function() {
            if (A.performance && A.performance.now) {
                var a = S._p || {};
                a.PAGEVIEW = A.performance.now();
                S._p = a
            }
        };
    var om = {},
        pm = function() {
            return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
        },
        qm = !1;

    function um() {
        return A.GoogleAnalyticsObject || "ga"
    }
    var vm = function(a) {},
        wm = function(a, b) {
            return function() {
                var c = pm(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Dm = function(a) {},
        Hm = function(a) {},
        Im =
        function() {
            return "&tc=" + Ve.filter(function(a) {
                return a
            }).length
        },
        Lm = function() {
            2022 <= Jm().length && Km()
        },
        Mm = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Om = function() {
            Nm || (Nm = A.setTimeout(Km, 500))
        },
        Km = function() {
            Nm && (A.clearTimeout(Nm), Nm = void 0);
            void 0 === Pm || Qm[Pm] && !Rm && !Sm || (Tm[Pm] || Um.nj() || 0 >= Vm-- ? (Ug(1), Tm[Pm] = !0) : (Um.Jj(), bc(Jm(!0)), Qm[Pm] = !0, Wm = Xm = Ym = Sm = Rm = ""))
        },
        Jm = function(a) {
            var b = Pm;
            if (void 0 === b) return "";
            var c = Tg("GTM"),
                d = Tg("TAGGING");
            return [Zm, Qm[b] ? "" : "&es=1",
                $m[b], Dm(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Im(), Rm, Sm, Ym, Xm, Hm(a), Wm, "&z=0"
            ].join("")
        },
        bn = function() {
            Zm = an()
        },
        an = function() {
            return [dh, "&v=3&t=t", "&pid=" + Ja(), "&rv=" + sf.xd].join("")
        },
        Gm = ["L", "S", "Y"],
        Cm = ["S", "E"],
        cn = {
            sampleRate: "0.005000",
            vh: "",
            uh: Number("5")
        },
        dn = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        en;
    if (!(en = dn)) {
        var fn = Math.random(),
            gn = cn.sampleRate;
        en = fn < gn
    }
    var hn = en,
        jn = {
            label: sf.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Zm = an(),
        Qm = {},
        Rm = "",
        Sm = "",
        Wm = "",
        Xm = "",
        Fm = {},
        Em = !1,
        Bm = {},
        kn = {},
        Ym = "",
        Pm = void 0,
        $m = {},
        Tm = {},
        Nm = void 0,
        ln = 5;
    0 < cn.uh && (ln = cn.uh);
    var Um = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                nj: function() {
                    return c < a ? !1 : Za() - d[c % a] < b
                },
                Jj: function() {
                    var f = c++ % a;
                    d[f] = Za()
                }
            }
        }(ln, 1E3),
        Vm = 1E3,
        nn = function(a, b) {
            if (hn && !Tm[a] && Pm !==
                a) {
                Km();
                Pm = a;
                Wm = Rm = "";
                $m[a] = "&e=" + Mm(b) + "&eid=" + a;
                Om();
            }
        },
        on = function(a, b, c, d) {
            if (hn && b) {
                var e, f = String(b[pe.xb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Tm[a]) {
                    a !== Pm && (Km(), Pm = a);
                    Rm = Rm ? Rm + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var l = (Xe[h] ? "1" : "2") + e;
                    Wm = Wm ? Wm + "." + l : "&ti=" + l;
                    Om();
                    Lm()
                }
            }
        };
    var vn = function(a, b, c) {
            if (hn && !Tm[a]) {
                a !== Pm && (Km(), Pm = a);
                var d = c + b;
                Sm = Sm ? Sm + "." + d : "&epr=" + d;
                Om();
                Lm()
            }
        },
        wn = function(a, b, c) {};

    function xn(a, b, c, d) {
        var e = Ve[a],
            f = yn(a, b, c, d);
        if (!f) return null;
        var g = cf(e[pe.og], c, []);
        if (g && g.length) {
            var h = g[0];
            f = xn(h.index, {
                onSuccess: f,
                onFailure: 1 === h.Ng ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function yn(a, b, c, d) {
        function e() {
            if (f[pe.ri]) h();
            else {
                var w = df(f, c, []);
                var y = w[pe.Bh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!ni(y[x])) {
                            h();
                            return
                        }
                var z = gm(c.kb, String(f[pe.xb]), Number(f[pe.qg]), w[pe.si]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = Za() - F;
                        on(c.id, Ve[a], "5", D);
                        hm(c.kb, z, "success",
                            D);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = Za() - F;
                        on(c.id, Ve[a], "6", D);
                        hm(c.kb, z, "failure", D);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                on(c.id, f, "1");
                var C = function() {
                    var D = Za() - F;
                    on(c.id, f, "7", D);
                    hm(c.kb, z, "exception", D);
                    B || (B = !0, h())
                };
                var F = Za();
                try {
                    bf(w, c)
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = Ve[a],
            g = b.onSuccess,
            h = b.onFailure,
            l = b.terminate;
        if (c.ef(f)) return null;
        var n = cf(f[pe.rg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = xn(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: l
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.Ng ? l : q
        }
        if (f[pe.kg] || f[pe.xi]) {
            var t = f[pe.kg] ? We :
                c.Vj,
                u = g,
                r = h;
            if (!t[a]) {
                e = cb(e);
                var v = zn(a, t, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                t[a](u, r)
            }
        }
        return e
    }

    function zn(a, b, c) {
        var d = [],
            e = [];
        b[a] = An(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Bn;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Cn;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function An(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Bn(a) {
        a()
    }

    function Cn(a, b) {
        b()
    };
    var Fn = function(a, b) {
        for (var c = [], d = 0; d < Ve.length; d++)
            if (a[d]) {
                var e = Ve[d];
                var f = jm(b.kb);
                try {
                    var g = xn(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c,
                            l = h.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = Xe[p];
                        l.call(h, {
                            nh: n,
                            dh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Dn(d, b), f()
                } catch (r) {
                    f()
                }
            }
        var t = b.kb;
        t.N = !0;
        t.o >= t.s && im(t);
        c.sort(En);
        for (var u = 0; u < c.length; u++) c[u].execute();
        return 0 < c.length
    };

    function En(a, b) {
        var c, d = b.dh,
            e = a.dh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.nh,
                h = b.nh;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Dn(a, b) {
        if (!hn) return;
        var c = function(d) {
            var e = b.ef(Ve[d]) ? "3" : "4",
                f = cf(Ve[d][pe.og], b, []);
            f && f.length && c(f[0].index);
            on(b.id, Ve[d], e);
            var g = cf(Ve[d][pe.rg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Gn = !1,
        Mn = function(a) {
            var b = Za(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (Gn) return !1;
                Gn = !0;
            }
            var g = Jh(c),
                h = !1;
            if (!g.active) {
                if ("gtm.js" !== d) return !1;
                h = !0;
                g = Jh(Number.MAX_SAFE_INTEGER)
            }
            nn(c, d);
            var l = a.eventCallback,
                n = a.eventTimeout,
                p = l;
            var q = {
                id: c,
                name: d,
                ef: Ch(g.isAllowed),
                Vj: [],
                Yg: function() {
                    Ug(6)
                },
                Eg: Hn(c),
                kb: new fm(p, n)
            };
            q.Dg = In();
            Jn(c, q.kb);
            var t = nf(q);
            h && (t = Kn(t));
            var u = Fn(t, q);
            "gtm.js" !== d && "gtm.sync" !== d || vm(sf.J);
            return Ln(t, u)
        };

    function Hn(a) {
        return function(b) {
            hn && (Jc(b) || wn(a, "input", b))
        }
    }

    function Jn(a, b) {
        th(a, "event", 1);
        th(a, "ecommerce", 1);
        th(a, "gtm");
        th(a, "eventModel");
    }

    function In() {
        var a = {};
        a.event = sh("event", 1);
        a.ecommerce = sh("ecommerce", 1);
        a.gtm = sh("gtm");
        a.eventModel = sh("eventModel");
        return a
    }

    function Kn(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Wg[String(Ve[c][pe.xb])] && (b[c] = !0);
        return b
    }

    function Ln(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Ve[c] && !Xg[String(Ve[c][pe.xb])]) return !0;
        return !1
    }

    function Nn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return wj("" + c + b).href
        }
    }

    function On(a, b) {
        return Pn() ? Nn(a, b) : void 0
    }

    function Pn() {
        var a = !1;
        return a
    }

    function Qn() {
        return !!sf.yd && "SGTM_TOKEN" !== sf.yd.replaceAll("@@", "")
    };
    var Rn = function() {
        var a = !1;
        return a
    };
    var Sn;
    if (3 === sf.xd.length) Sn = "g";
    else {
        var Tn = "G";
        Tn = "g";
        Sn = Tn
    }
    var Un = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Sn,
            OPT: "o"
        },
        Vn = function(a) {
            var b = sf.J.split("-"),
                c = b[0].toUpperCase(),
                d = Un[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === sf.xd.length) {
                var g = "w";
                g = Rn() ? "s" : "o";
                f = "2" + g
            } else f = "";
            return f + d + sf.xd + e
        };

    function Wn(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Xn = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Yn() {
        return Jb("iPhone") && !Jb("iPod") && !Jb("iPad")
    };
    Jb("Opera");
    Jb("Trident") || Jb("MSIE");
    Jb("Edge");
    !Jb("Gecko") || -1 != Gb.toLowerCase().indexOf("webkit") && !Jb("Edge") || Jb("Trident") || Jb("MSIE") || Jb("Edge"); - 1 != Gb.toLowerCase().indexOf("webkit") && !Jb("Edge") && Jb("Mobile");
    Jb("Macintosh");
    Jb("Windows");
    Jb("Linux") || Jb("CrOS");
    var Zn = pa.navigator || null;
    Zn && (Zn.appVersion || "").indexOf("X11");
    Jb("Android");
    Yn();
    Jb("iPad");
    Jb("iPod");
    Yn() || Jb("iPad") || Jb("iPod");
    Gb.toLowerCase().indexOf("kaios");
    var $n = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (h) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        ao = function(a) {
            var b = I;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c, d, e;
            e = void 0 === e ? document : e;
            d = "META";
            "application/xhtml+xml" === (null == e ? void 0 : e.contentType) && (d = d.toLowerCase());
            c = e.createElement(d);
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c
        };
    var bo = function() {};
    var co = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        eo = function(a, b) {
            this.o = a;
            this.g = null;
            this.C = {};
            this.N = 0;
            this.F = void 0 === b ? 500 : b;
            this.s = null
        };
    ma(eo, bo);
    var go = function(a) {
        return "function" === typeof a.o.__tcfapi || null != fo(a)
    };
    eo.prototype.addEventListener = function(a) {
        var b = {},
            c = Rb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.F && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.F));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = co(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            ho(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    eo.prototype.removeEventListener = function(a) {
        a && a.listenerId && ho(this, "removeEventListener", null, a.listenerId)
    };
    var jo = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = io(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && ((Qh(Nh) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && io(a.purpose.consents, b)
                } else l = !0;
            else l =
                1 === h ? a.purpose && a.vendor ? io(a.purpose.legitimateInterests, b) && io(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        io = function(a, b) {
            return !(!a || !a[b])
        },
        ho = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (fo(a)) {
                ko(a);
                var f = ++a.N;
                a.C[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        fo = function(a) {
            if (a.g) return a.g;
            a.g = $n(a.o, "__tcfapiLocator");
            return a.g
        },
        ko = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.C[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Xn(a.o, a.s))
        };
    var lo = !0;
    lo = !1;
    var mo = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        no = Wn("", 550),
        oo = Wn("", 500);

    function po() {
        var a = S.tcf || {};
        return S.tcf = a
    }
    var qo = function(a, b) {
            this.s = a;
            this.g = b;
            this.o = Za();
        },
        ro = function(a) {},
        so = function(a) {},
        yo = function() {
            var a = po(),
                b = new eo(A, lo ? 3E3 : -1),
                c = new qo(b, a);
            if ((to() ? !0 === A.gtag_enable_tcf_support : !1 !== A.gtag_enable_tcf_support) && !a.active && ("function" === typeof A.__tcfapi || go(b))) {
                a.active = !0;
                a.Sc = {};
                uo();
                var d = null;
                lo ? d = A.setTimeout(function() {
                    vo(a);
                    wo(a);
                    d = null
                }, oo) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) vo(a), wo(a), ro(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = xo(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    h;
                                for (h in mo)
                                    if (mo.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var l, n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var q;
                                            var t = n;
                                            !1 === t.gdprApplies ? q = !0 : (void 0 === t.internalErrorState && (t.internalErrorState = co(t)), q = "error" === t.cmpStatus || 0 !== t.internalErrorState || "loaded" === t.cmpStatus && ("tcloaded" === t.eventStatus || "useractioncomplete" ===
                                                t.eventStatus) ? !0 : !1);
                                            l = q ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : jo(n, "1", 0) : !1;
                                            g["1"] = l
                                        } else g[h] = jo(e, h, mo[h]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Sc = f, wo(a), ro(c))
                        }
                    }), so(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), vo(a), wo(a)
                }
            }
        };

    function vo(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        lo && (a.Sc = xo())
    }

    function uo() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = no, a);
        ki(b)
    }
    var to = function() {
        var a = !1;
        a = !0;
        return a
    };

    function xo() {
        var a = {},
            b;
        for (b in mo) mo.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function wo(a) {
        var b = {},
            c = (b.ad_storage = a.Sc["1"] ? "granted" : "denied", b);
        mi(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: zo()
        })
    }
    var Ao = function() {
            var a = po();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        zo = function() {
            var a = po();
            return a.active ? a.tcString || "" : ""
        },
        Bo = function() {
            var a = po();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Co = function(a) {
            if (!mo.hasOwnProperty(String(a))) return !0;
            var b = po();
            return b.active && b.Sc ? !!b.Sc[String(a)] : !0
        };
    var Ko = !1;
    var Lo = function() {
            this.g = {}
        },
        Mo = function(a, b, c) {
            null != c && (a.g[b] = c)
        },
        No = function(a) {
            return Object.keys(a.g).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
            }).join("&")
        },
        Po = function(a, b, c, d, e) {};
    var Ro = /[A-Z]+/,
        So = /\s/,
        To = function(a) {
            if (m(a)) {
                a = Va(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ro.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || So.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            M: e
                        }
                    }
                }
            }
        },
        Vo = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                    To(a[c]);
                d && (b[d.id] = d)
            }
            Uo(b);
            var e = [];
            Oa(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Uo(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Xo = function(a, b, c, d) {
            return (2 === Wo() || d || "http:" != A.location.protocol ? a : b) + c
        },
        Wo = function() {
            var a = $b(),
                b;
            if (1 === a) a: {
                var c = $g;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var l = g[h].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var nq = function() {
            var a = !0;
            Co(7) && Co(9) && Co(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !mq() && (a = !1);
            return a
        },
        mq = function() {
            var a = !0;
            Co(3) && Co(4) || (a = !1);
            return a
        };
    var gr = !1;
    gr = !0;

    function hr() {
        var a = S;
        return a.gcq = a.gcq || new ir
    }
    var jr = function(a, b, c) {
            hr().register(a, b, c)
        },
        kr = function(a, b, c, d) {
            hr().push("event", [b, a], c, d)
        },
        lr = function(a, b) {
            hr().push("config", [a], b)
        },
        mr = function(a, b, c, d) {
            hr().push("get", [a, b], c, d)
        },
        nr = function(a) {
            return hr().getRemoteConfig(a)
        },
        or = {},
        pr = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.g = !1
        },
        qr = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.U = c || "";
            this.g = d;
            this.o = e
        },
        ir = function() {
            this.o = {};
            this.s = {};
            this.g = [];
            this.C = {
                AW: !1,
                UA: !1
            }
        },
        rr = function(a, b) {
            var c = To(b);
            return a.o[c.containerId] = a.o[c.containerId] || new pr
        },
        sr = function(a, b, c) {
            if (b) {
                var d = To(b);
                if (d && 1 === rr(a, b).status) {
                    rr(a, b).status = 2;
                    var e = {};
                    hn && (e.timeoutId = A.setTimeout(function() {
                        Ug(38);
                        Om()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    or[d.containerId] = Za();
                    if (Rn()) {} else {
                        var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c";
                        Qn() && (g += "&sign=" + sf.yd);
                        var h = ("http:" != A.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            l = On(c, g) || h;
                        Zb(l)
                    }
                }
            }
        },
        tr = function(a, b, c, d) {
            if (d.U) {
                var e = rr(a, d.U),
                    f = e.s;
                if (f) {
                    var g = Fc(c),
                        h = Fc(e.targetConfig[d.U]),
                        l = Fc(e.containerConfig),
                        n = Fc(e.remoteConfig),
                        p = Fc(a.s),
                        q = nh("gtm.uniqueEventId"),
                        t = To(d.U).prefix,
                        u = cb(function() {
                            var v = g[R.Pb];
                            v && J(v)
                        }),
                        r = Zi(Yi($i(Xi(Vi(Wi(Ui(Ti(Si(g), h), l), n), p), function() {
                            vn(q, t, "2");
                            gr && u()
                        }), function() {
                            vn(q, t, "3");
                            gr && u()
                        }), function(v, w) {
                            a.C[v] = w
                        }), function(v) {
                            return a.C[v]
                        });
                    try {
                        vn(q, t, "1");
                        f(d.U, b, d.s, r)
                    } catch (v) {
                        vn(q, t, "4");
                    }
                }
            }
        };
    ir.prototype.register = function(a, b, c) {
        var d = rr(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (Fc(d.remoteConfig, c), d.remoteConfig = c);
            var e = To(a),
                f = or[e.containerId];
            if (void 0 !== f) {
                var g = S[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                S[e.containerId]._spx && (h = h.toLowerCase());
                var l = nh("gtm.uniqueEventId"),
                    n = h,
                    p = Za() - g;
                if (hn && !Tm[l]) {
                    l !== Pm && (Km(), Pm = l);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Xm = Xm ? Xm + "," + q : "&cl=" + q
                }
                delete or[e.containerId]
            }
            this.flush()
        }
    };
    ir.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Za() / 1E3);
        sr(this, c, b[0][R.sa] || this.s[R.sa]);
        c && rr(this, c).g && (d = !1);
        this.g.push(new qr(a, e, c, b, d));
        d || this.flush()
    };
    ir.prototype.insert = function(a, b, c) {
        var d = Math.floor(Za() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new qr(a, d, c, b, !1)) : this.g.push(new qr(a, d, c, b, !1))
    };
    ir.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.o) !f.U || rr(this, f.U).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== rr(this, f.U).status && !a) {
                            this.g.push.apply(this.g, c);
                            return
                        }
                        hn && A.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        Oa(f.g[0], function(t, u) {
                            Fc(hb(t, u), b.s)
                        });
                        break;
                    case "config":
                        e.La = {};
                        Oa(f.g[0], function(t) {
                            return function(u, r) {
                                Fc(hb(u, r), t.La)
                            }
                        }(e));
                        var g = !!e.La[R.pd];
                        delete e.La[R.pd];
                        var h =
                            rr(this, f.U),
                            l = To(f.U),
                            n = l.containerId === l.id;
                        g || (n ? h.containerConfig = {} : h.targetConfig[f.U] = {});
                        h.g && g || tr(this, R.Da, e.La, f);
                        h.g = !0;
                        delete e.La[R.wc];
                        n ? Fc(e.La, h.containerConfig) : Fc(e.La, h.targetConfig[f.U]);
                        d = !0;
                        break;
                    case "event":
                        e.Yc = {};
                        Oa(f.g[0], function(t) {
                            return function(u, r) {
                                Fc(hb(u, r), t.Yc)
                            }
                        }(e));
                        tr(this, f.g[1], e.Yc, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[R.Pa] = f.g[0], p[R.cb] = f.g[1], p);
                        tr(this, R.Na, q, f)
                }
                this.g.shift();
                ur(this, f)
            }
            e = {
                La: e.La,
                Yc: e.Yc
            }
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var ur = function(a, b) {
        if ("require" !== b.type)
            if (b.U)
                for (var c = a.getCommandListeners(b.U)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
                    }
    };
    ir.prototype.getRemoteConfig = function(a) {
        return rr(this, a).remoteConfig
    };
    ir.prototype.getCommandListeners = function(a) {
        return rr(this, a).o
    };

    function vr(a, b) {
        var c = this;
    };

    function wr(a, b, c) {};

    function xr(a, b, c, d) {};

    function yr(a) {};
    var zr = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": kc(a, "className"),
                "gtm.elementId": a["for"] || fc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || kc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || kc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Ar = function(a) {
            S.hasOwnProperty("autoEventsSettings") || (S.autoEventsSettings = {});
            var b = S.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Br = function(a, b, c) {
            Ar(a)[b] = c
        },
        Cr = function(a, b, c, d) {
            var e = Ar(a),
                f = bb(e, b, d);
            e[b] = c(f)
        },
        Dr = function(a, b, c) {
            var d = Ar(a);
            return bb(d, b, c)
        };

    function Mr(a) {};
    var Nr = {},
        Or = [],
        Pr = {},
        Qr = 0,
        Rr = 0;

    function Yr(a, b) {}

    function es(a, b) {};

    function js(a) {};
    var ks = {},
        ls = [];
    var ss = function(a, b) {};

    function zs(a, b) {};
    var As = /^\s*$/,
        Bs, Cs = !1;

    function Ns(a, b) {}

    function Os(a, b, c) {};
    var Ps = !!A.MutationObserver,
        Qs = void 0,
        Rs = function(a) {
            if (!Qs) {
                var b = function() {
                    var c = I.body;
                    if (c)
                        if (Ps)(new MutationObserver(function() {
                            for (var e = 0; e < Qs.length; e++) J(Qs[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            cc(c, "DOMNodeInserted", function() {
                                d || (d = !0, J(function() {
                                    d = !1;
                                    for (var e = 0; e < Qs.length; e++) J(Qs[e])
                                }))
                            })
                        }
                };
                Qs = [];
                I.body ? b() : J(b)
            }
            Qs.push(a)
        };
    var Ss = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Za() - e) * g.playbackRate / 1E3 : 0;
            e = Za()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, h, l) {
                var n = a(),
                    p = n.Xe,
                    q = void 0 !== l ? Math.round(l) : void 0 !== h ? Math.round(n.Xe * h) : Math.round(n.Ig),
                    t = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    u = I.hidden ? !1 : .5 <= jj(c);
                d();
                var r = void 0;
                void 0 !== b && (r = [b]);
                var v = zr(c, "gtm.video", r);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = t;
                v["gtm.videoVisible"] = u;
                return v
            },
            ih: function() {
                e = Za()
            },
            Wb: function() {
                d()
            }
        }
    };
    var Ts = ["www.youtube.com", "www.youtube-nocookie.com"],
        Us, Vs = !1,
        Ws = 0;

    function ft(a, b) {}

    function gt(a, b) {
        return !0
    };

    function ht(a, b, c) {};

    function it(a, b) {
        var c;
        return c
    };

    function jt(a) {};

    function kt(a) {};
    var lt = !1,
        mt = [];

    function nt() {
        if (!lt) {
            lt = !0;
            for (var a = 0; a < mt.length; a++) J(mt[a])
        }
    }
    var ot = function(a) {
        lt ? J(a) : mt.push(a)
    };

    function pt(a) {
        Q(H(this), ["listener:!Fn"], arguments);
        ug(this, "process_dom_events", "window", "load");
        ot(Hc(a))
    };

    function qt(a) {
        var b;
        return b
    };

    function rt(a, b) {
        var c;
        var d = !1;
        var e = Gc(c, this.g, d);
        void 0 === e && void 0 !== c && Ug(45);
        return e
    };

    function st(a) {
        var b;
        return b
    };

    function tt(a, b) {
        var c = null,
            d = !1;
        return Gc(c, this.g, d)
    };

    function ut(a) {
        var b;
        var g = !1;
        return Gc(b, this.g, g)
    };

    function vt(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var wt = new Ma;

    function xt(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = wt.get(e);
            f || (f = new RegExp(b, d), wt.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function yt(a, b) {
        function c(g) {
            var h = wj(g),
                l = uj(h, "protocol"),
                n = uj(h, "host", !0),
                p = uj(h, "port"),
                q = uj(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function zt(a) {
        return At(a) ? 1 : 0
    }

    function At(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Ha(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Fc(a, {});
                Fc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (zt(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) {
                                    f = b[g[h]](c);
                                    break a
                                }
                        } catch (l) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return vt(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return xt(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return yt(b, c)
        }
        return !1
    };

    function Bt(a) {
        return !1
    }
    var Ct;

    function Dt(a) {
        var b = !1;
        return b
    };
    var Et = function(a) {
        var b;
        return b
    };

    function Ft(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    };
    var Gt = function(a) {
        if (S.addTargetToGroup) S.addTargetToGroup(a);
        else {}
    };
    var Ht = function() {
        var a = [];
        return a
    };

    function It() {
        var a = [];
        return Gc(a)
    };

    function Jt(a) {
        var b = null;
        return b
    };

    function Kt(a, b) {
        var c;
        return c
    };

    function Lt(a, b) {
        var c;
        return c
    };

    function Mt(a, b) {
        var c;
        return c
    };

    function Nt(a) {
        var b = "";
        return b
    };

    function Ot(a, b) {
        var c;
        return c
    };

    function Pt(a) {
        var b = "";
        return b
    };

    function Qt() {
        ug(this, "get_user_agent");
        return A.navigator.userAgent
    };

    function Rt(a, b) {};
    var St = {};

    function Tt(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], Zb(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) J(g[h]);
            g.push = function(l) {
                J(l);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) J(g[h]);
            e[f] = null
        }, b)) : Zb(a, c, d, b)
    }

    function Ut(a, b, c, d) {}
    var Vt = Object.freeze({
            dl: 1,
            id: 1
        }),
        Wt = {};

    function Xt(a, b, c, d) {};

    function Yt(a) {
        var b = !0;
        return b
    };
    var Zt = function() {
            return !1
        },
        $t = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var au = ["textContent", "value", "tagName", "children", "childElementCount"];

    function bu(a) {
        var b;
        return b
    };

    function cu() {};

    function du(a, b) {
        var c;
        return c
    };

    function eu(a) {
        var b = void 0;
        return b
    };

    function fu(a, b) {
        var c = !1;
        return c
    };

    function gu() {
        var a = "";
        return a
    };

    function hu() {
        var a = "";
        return a
    };
    var iu = Object.freeze(["config", "event", "get", "set"]);

    function ju(a, b, c) {};

    function ku() {};

    function lu(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    };

    function mu(a, b, c) {};

    function nu(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    };

    function ou(a) {
        Q(H(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.yb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== R.Xd && ug(this, "access_consent", e, "write")
        }
        ki(Hc(a))
    };

    function pu(a, b, c) {
        return !1
    };

    function qu(a, b, c) {
        Q(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = gj(a) || {};
        d[b] = Hc(c, this.g);
        var e = a;
        ej || fj();
        dj[e] = d;
    };

    function ru(a, b, c) {};
    var su = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function tu(a, b, c, d) {
        var e = this;
    };

    function uu(a, b, c) {};
    var vu = {},
        wu = {};
    vu.getItem = function(a) {
        var b = null;
        return b
    };
    vu.setItem = function(a, b) {};
    vu.removeItem = function(a) {};
    vu.clear = function() {};
    var xu = function(a) {
        var b;
        return b
    };

    function yu(a) {
        Q(H(this), ["consentSettings:!DustMap"], arguments);
        var b = Hc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && ug(this, "access_consent", c, "write");
        var d = this.g.g;
        mi(b, d && d.eventId)
    };
    var me = function() {
        var a = new Jg;
        Rn() ? (a.add("injectHiddenIframe", Ea), a.add("injectScript", Ea)) : (a.add("injectHiddenIframe", Rt), a.add("injectScript", Ut));
        var b = mu;
        a.add("Math", ng());
        a.add("Object", Hg);
        a.add("TestHelper", Mg());
        a.add("addConsentListener", vr);
        a.add("addEventCallback", yr);
        a.add("aliasInWindow", gt);
        a.add("assertApi",
            jg);
        a.add("assertThat", kg);
        a.add("callInWindow", it);
        a.add("callLater", jt);
        a.add("copyFromDataLayer", rt);
        a.add("copyFromWindow", st);
        a.add("createArgumentsQueue", tt);
        a.add("createQueue", ut);
        a.add("decodeUri", og);
        a.add("decodeUriComponent", pg);
        a.add("encodeUri", qg);
        a.add("encodeUriComponent", rg);
        a.add("fail", sg);
        a.add("fromBase64", Et, !("atob" in A));
        a.add("generateRandom", tg);
        a.add("getContainerVersion", vg);
        a.add("getCookieValues", Ft);
        a.add("getQueryParameters", Lt);
        a.add("getReferrerQueryParameters",
            Mt);
        a.add("getReferrerUrl", Nt);
        a.add("getTimestamp", yg);
        a.add("getTimestampMillis", yg);
        a.add("getType", zg);
        a.add("getUrl", Pt);
        a.add("localStorage", $t, !Zt());
        a.add("isConsentGranted", Yt);
        a.add("logToConsole", cu);
        a.add("makeInteger", Bg);
        a.add("makeNumber", Cg);
        a.add("makeString", Dg);
        a.add("makeTableMap", Eg);
        a.add("mock", Gg);
        a.add("parseUrl", eu);
        a.add("queryPermission", fu);
        a.add("readCharacterSet", gu);
        a.add("readTitle", hu);
        a.add("sendPixel", b);
        a.add("setCookie", nu);
        a.add("setDefaultConsentState", ou);
        a.add("setInWindow", pu);
        a.add("sha256", tu);
        a.add("templateStorage", vu);
        a.add("toBase64", xu, !("btoa" in A));
        a.add("updateConsentState", yu);
        Lg(a, "callOnWindowLoad", pt);
        a.add("JSON", Ag(function(c) {
            var d = this.g.g;
            d && d.log.call(this, "error", c)
        }));
        Lg(a, "internal.appendRemoteConfigParameter", ht);
        Lg(a, "internal.getRemoteConfigParameter", Ot);
        Lg(a, "internal.setRemoteConfigParameter", ru);
        Lg(a, "internal.sortRemoteConfigParameters", uu);
        Lg(a, "internal.evaluateMatchingRules",
            Dt), Lg(a, "internal.registerGtagCommandListener", ju);
        Lg(a, "internal.addGaSendListener", js);
        Lg(a, "internal.evaluateFilteringRules", Bt);
        Lg(a, "internal.getProductSettingsParameter", Kt);
        Lg(a, "internal.setProductSettingsParameter",
            qu);
        Lg(a, "internal.addHistoryChangeListener", ss);
        Lg(a, "internal.sendGtagEvent", lu);
        Rn() ? Lg(a, "internal.injectScript", Ea) : Lg(a, "internal.injectScript", Xt);
        Lg(a, "internal.locateUserData", bu);
        Lg(a, "internal.addFormInteractionListener", Yr);
        Lg(a, "internal.addFormSubmitListener", es);
        Lg(a, "internal.getFlags", xg);
        return function(c) {
            var d;
            if (a.g.hasOwnProperty(c)) d = a.get(c, this);
            else {
                var e;
                if (e = a.o.hasOwnProperty(c)) {
                    var f = !1,
                        g = this.g.g;
                    if (g) {
                        var h = g.Ic();
                        if (h) {
                            0 !== h.indexOf("__cvt_") && (f = !0);
                        }
                    }
                    e = f
                }
                if (e) {
                    var l = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                    d = l
                } else throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var zu = function() {
            return !1
        },
        Au = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var ke, wf;

    function Bu() {
        var a = data.runtime || [],
            b = data.runtime_lines;
        ke = new ie;
        Cu();
        Re = function(e, f, g) {
            Du(f);
            var h = new pb;
            Oa(f, function(u, r) {
                var v = Gc(r);
                void 0 === v && void 0 !== r && Ug(44);
                h.set(u, v)
            });
            ke.g.g.F = kf();
            var l = {
                Hi: xf(e),
                eventId: void 0 !== g ? g.id : void 0,
                zc: void 0 !== g ? function(u) {
                    return g.kb.zc(u)
                } : void 0,
                Ic: function() {
                    return e
                },
                log: function() {}
            };
            if (zu()) {
                var n = Au(),
                    p = void 0,
                    q = void 0;
                l.Ca = {
                    Ac: {},
                    Zb: function(u, r, v) {
                        1 === r && (p = u);
                        7 === r && (q = v);
                        n(u, r, v)
                    },
                    lf: Fg()
                };
                l.log = function(u, r) {
                    if (p) {
                        var v = Array.prototype.slice.call(arguments, 1);
                        n(p, 4, {
                            level: u,
                            source: q,
                            message: v
                        })
                    }
                }
            }
            var t = le(l, [e, h]);
            ke.g.g.F = void 0;
            t instanceof ra && "return" === t.g && (t = t.o);
            return Hc(t)
        };
        ne();
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (!Ha(d) || 3 > d.length) {
                if (0 === d.length) continue;
                break
            }
            b && b[c] && b[c].length && gf(d, b[c]);
            ke.execute(d)
        }
    }

    function Du(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Fa(b) && (a.gtmOnSuccess = function() {
            J(b)
        });
        Fa(c) && (a.gtmOnFailure = function() {
            J(c)
        })
    }

    function Cu() {
        var a = ke;
        S.SANDBOXED_JS_SEMAPHORE = S.SANDBOXED_JS_SEMAPHORE || 0;
        oe(a, function(b, c, d) {
            S.SANDBOXED_JS_SEMAPHORE++;
            try {
                return b.apply(c, d)
            } finally {
                S.SANDBOXED_JS_SEMAPHORE--
            }
        })
    }

    function Eu(a) {
        void 0 !== a && Oa(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                fh[e] = fh[e] || [];
                fh[e].push(b)
            }
        })
    };
    var Fu = {},
        Gu = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = Fu[b[c]] || [];
                Fu[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        Hu = function(a) {
            Oa(Fu, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Iu = "HA GF G UA AW DC".split(" "),
        Ju = !1;
    Ju = !0;
    var Ku = !1,
        Lu = !1;

    function Mu(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = Fc(b), b[R.Pb] && (c.eventCallback = b[R.Pb]), b[R.gd] && (c.eventTimeout = b[R.gd]));
        return c
    }

    function Nu(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: gh()
        });
        return a["gtm.uniqueEventId"]
    }

    function Ou() {
        if (!Ku && !S.gtagRegistered) {
            Ku = S.gtagRegistered = !0;
            S.addTargetToGroup = function(c) {
                Gu(c, "default")
            };
        }
        return Ku
    }
    var Pu = {
            config: function(a) {
                var b, c = Nu(a);
                if (2 > a.length || !m(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Ec(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = To(a[1]);
                if (!e) return;
                Hu(e.id);
                Gu(e.id, d[R.se] || "default");
                delete d[R.se];
                Lu || Ug(43);
                if (Ou() && -1 !== Iu.indexOf(e.prefix)) {
                    "G" === e.prefix && (d[R.wc] = !0);
                    Ju && delete d[R.Pb];
                    lr(d, e.id);
                    return
                }
                qh("gtag.targets." + e.id, void 0);
                qh("gtag.targets." + e.id, Fc(d));
                var f = {};
                f[R.vb] = e.id;
                b = Mu(R.Da, f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function(a) {
                function b() {
                    Ou() && Fc(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Ug(39);
                    var c = gh(),
                        d = a[1];
                    "default" === d ? (b(), ki(a[2])) : "update" === d && (b(), mi(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && m(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Ec(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = Mu(b, c),
                        e = Nu(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[R.vb];
                    void 0 === g && (g = nh(R.vb, 2), void 0 === g && (g = "default"));
                    if (m(g) || Ha(g)) {
                        for (var h = g.toString().replace(/\s+/g,
                                "").split(","), l = [], n = 0; n < h.length; n++)
                            if (0 <= h[n].indexOf("-")) l.push(h[n]);
                            else {
                                var p = Fu[h[n]];
                                p && p.length && (l = l.concat(p))
                            }
                        f = Vo(l)
                    } else f = void 0;
                    var q = f;
                    if (!q) return;
                    for (var t = Ou(), u = [], r = 0; t && r < q.length; r++) {
                        var v = q[r];
                        if (-1 !== Iu.indexOf(v.prefix)) {
                            var w = Fc(c);
                            "G" === v.prefix && (w[R.wc] = !0);
                            Ju && delete w[R.Pb];
                            kr(b, w, v.id)
                        }
                        u.push(v.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < q.length ? d.eventModel[R.vb] = u.join() : delete d.eventModel[R.vb];
                    Lu || Ug(43);
                    return d
                }
            },
            get: function(a) {
                Ug(53);
                if (4 !== a.length || !m(a[1]) || !m(a[2]) || !Fa(a[3])) return;
                var b = To(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                Lu || Ug(43);
                if (!Ou() || -1 === Iu.indexOf(b.prefix)) return;
                gh();
                var e = {};
                gi(Fc((e[R.Pa] = c, e[R.cb] = d, e)));
                mr(c, function(f) {
                    J(function() {
                        return d(f)
                    })
                }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    Lu = !0;
                    Ou();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Nu(a), b
                }
            },
            policy: function(a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2],
                        d = wf.o;
                    d.g[b] ? d.g[b].push(c) : d.g[b] = [c]
                }
            },
            set: function(a) {
                var b;
                2 == a.length && Ec(a[1]) ? b = Fc(a[1]) : 3 == a.length && m(a[1]) && (b = {}, Ec(a[2]) || Ha(a[2]) ? b[a[1]] = Fc(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (gh(), Ou()) {
                        Fc(b);
                        var c = Fc(b);
                        hr().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        Qu = {
            policy: !0
        };
    var Ru = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(), c.end = null)
            }
        },
        Tu = function(a) {
            var b = Su(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var jv = function(a) {
        if (iv(a)) return a;
        this.g = a
    };
    jv.prototype.fj = function() {
        return this.g
    };
    var iv = function(a) {
        return !a || "object" !== xc(a) || Ec(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    jv.prototype.getUntrustedUpdateValue = jv.prototype.fj;
    var kv = [],
        lv = !1,
        mv = !1,
        nv = function(a) {
            return A["dataLayer"].push(a)
        },
        ov = function(a, b) {
            var c = S["dataLayer"],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = A.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (A.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function pv(a) {
        var b = a._clear;
        Oa(a, function(d, e) {
            "_clear" !== d && (b && qh(d, void 0), qh(d, e))
        });
        bh || (bh = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = gh(), a["gtm.uniqueEventId"] = c, qh("gtm.uniqueEventId", c));
        return Mn(a)
    }

    function qv() {
        var a = kv[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Pa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function rv() {
        for (var a = !1; !mv && 0 < kv.length;) {
            if (!lv && qv()) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = kv[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                kv.unshift(c, e);
                lv = !0
            }
            mv = !0;
            delete kh.eventModel;
            mh();
            var g = kv.shift();
            if (null != g) {
                var h = iv(g);
                if (h) {
                    var l = g;
                    g = iv(l) ? l.getUntrustedUpdateValue() : void 0;
                    rh()
                }
                try {
                    if (Fa(g)) try {
                        g.call(oh)
                    } catch (w) {} else if (Ha(g)) {
                        var n =
                            g;
                        if (m(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                u = nh(p.join("."), 2);
                            if (void 0 !== u && null !== u) try {
                                u[q].apply(u, t)
                            } catch (w) {}
                        }
                    } else {
                        if (Pa(g)) {
                            a: {
                                var r = g;
                                if (r.length && m(r[0])) {
                                    var v = Pu[r[0]];
                                    if (v && (!h || !Qu[r[0]])) {
                                        g = v(r);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                mv = !1;
                                continue
                            }
                        }
                        a = pv(g) || a
                    }
                } finally {
                    h && mh(!0)
                }
            }
            mv = !1
        }
        return !a
    }

    function sv() {
        var b = rv();
        try {
            Ru(A["dataLayer"], sf.J)
        } catch (c) {}
        return b
    }
    var uv = function() {
            var a = Vb("dataLayer", []),
                b = Vb("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            dm(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            ot(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < S.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new jv(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var g, h = !0;
                g = h;
                !g && kv.push.apply(kv, e);
                var l = c.apply(a, e);
                g && kv.push.apply(kv, e);
                if (300 < this.length)
                    for (Ug(4); 300 < this.length;) this.shift();
                var n = "boolean" !== typeof l || l;
                return rv() && n
            };
            var d = a.slice(0);
            kv.push.apply(kv, d);
            if (tv()) {
                J(sv)
            }
        },
        tv = function() {
            var a = !0;
            return a
        };

    function vv(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Za();
        return b < c + 3E5 && b > c - 9E5
    };
    var wv = {};
    wv.td = new String("undefined");
    var Jv = A.clearTimeout,
        Kv = A.setTimeout,
        U = function(a, b, c, d) {
            if (Rn()) {
                b && J(b)
            } else return Zb(a, b, c, d)
        },
        Lv = function() {
            return new Date
        },
        Mv = function() {
            return A.location.href
        },
        Nv = function(a) {
            return uj(wj(a), "fragment")
        },
        Ov = function(a) {
            return vj(wj(a))
        },
        Pv = function(a, b) {
            return nh(a, b || 2)
        },
        Qv = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = nv(a)) : d = nv(a);
            return d
        },
        Rv = function(a, b) {
            A[a] = b
        },
        W = function(a, b,
            c) {
            b && (void 0 === A[a] || c && !A[a]) && (A[a] = b);
            return A[a]
        },
        Sv = function(a, b, c) {
            return Yj(a, b, void 0 === c ? !0 : !!c)
        },
        Tv = function(a, b, c) {
            return 0 === hk(a, b, c)
        },
        Uv = function(a, b) {
            if (Rn()) {
                b && J(b)
            } else ac(a, b)
        },
        Vv = function(a) {
            return !!Dr(a, "init", !1)
        },
        Wv = function(a) {
            Br(a, "init", !0)
        },
        Xv = function(a) {
            var b = $g,
                c = "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            Qn() && (c += "&sign=" + sf.yd, Ub && (b = Ub.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = Xo("https://", "http://", b + c);
            U(d)
        },
        Yv = function(a, b, c) {
            hn && (Jc(a) || wn(c, b, a))
        };
    var vw = encodeURI,
        X = encodeURIComponent,
        ww = bc;
    var xw = function(a, b) {
        if (!a) return !1;
        var c = uj(wj(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var yw = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    var Ix = {};
    Ix[R.Nb] = "";
    Ix[R.ra] = "";
    Ix[R.Ga] = "";
    Ix[R.fa] = "auto";
    Ix[R.ab] = "/";
    Ix[R.qa] = 63072E3;
    Ix[R.sc] = 30;
    Ix[R.nd] = 1E4;
    Ix[R.Tb] = !0;
    var Jx = function(a, b, c, d, e) {
        this.s = a;
        this.eventName = b;
        this.C = c;
        this.K = d.eventModel;
        this.Ai = d.containerConfig;
        this.o = d;
        this.Ma = d.getWithConfig(R.rb) ? 1 : 7;
        this.Fe = d.getWithConfig(R.sb) ? 1 : 7;
        this.N = e;
        this.ob = this.Ee = this.yg = this.F = this.ug = this.wg = this.sd = !1;
        this.Eb = 0;
        this.Ie = this.Je = this.rd = !1;
        this.Ke = void 0;
        this.Ub = 0;
        this.pg = this.He = this.xg = this.g = this.sg = this.Ge = void 0
    };
    k = Jx.prototype;
    k.Ha = function(a, b) {
        void 0 === this.B(a) && (this.K[a] = b)
    };
    k.kh = function(a, b) {
        b <= this.Ma && (this.K[R.rb] = a, this.Ma = b)
    };
    k.lh = function(a, b) {
        b <= this.Fe && (this.K[R.sb] = a, this.Fe = b)
    };
    k.B = function(a) {
        return void 0 !== this.K[a] ? this.K[a] : void 0 !== this.o.getWithConfig(a) ? this.o.getWithConfig(a) : void 0 !== this.N[a] ? this.N[a] : Ix[a]
    };
    k.getRemoteConfig = function(a) {
        return void 0 !== this.o.remoteConfig[a] ? this.o.remoteConfig[a] : this.N[a]
    };
    k.Ld = function(a) {
        var b = this.Db(R.fd, this.N[R.fd]);
        if (b && void 0 !== b[a || this.eventName]) return b[a ||
            this.eventName]
    };
    k.Db = function(a, b) {
        var c = gj(this.s);
        if (c && c.hasOwnProperty(a)) return c[a];
        return b
    };
    k.Qg = function() {
        var a = this.B(R.za);
        if ("object" === typeof a) return a
    };
    k.Rg = function() {
        return !!this.Qg()
    };
    k.abort = function() {
        throw "ABORT";
    };
    k.Ua = function() {
        return !(!0 !== this.B(R.nc) && "true" !== this.B(R.nc) || !this.B(R.sa))
    };
    k.yj = function() {
        return this.F || !!this.B(R.Wf)
    };
    var Kx = !1,
        Lx = function() {
            Kx = !0;
            Kx = !0;
        },
        Mx = function(a) {
            var b = !1;
            b = a.eventName === R.ic && ai() && a.Ua();
            return !(!Tb.sendBeacon || a.rd || a.Je || a.F || a.Ee || a.ob || b || Kx)
        };
    var Nx = function(a) {
        Sg("GA4_EVENT", a)
    };
    var Px = function(a) {
            return !a || Ox.test(a) || R.ji.hasOwnProperty(a)
        },
        Qx = function(a) {
            var b = a[R.we];
            if (b) return b;
            var c = a[R.ub];
            if (m(c)) {
                if ("function" === typeof URL) try {
                    return (new URL(c)).pathname
                } catch (e) {
                    return
                }
                var d = wj(c);
                return d.hostname ? uj(d, "path") : void 0
            }
        },
        Rx = function(a, b, c) {
            if (c) switch (c.type) {
                case "event_name":
                    return a;
                case "const":
                    return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name,
                        e = b[d];
                    return e
            }
        },
        Sx = function(a, b, c) {
            for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.edit_param) {
                    var g = f.edit_param.param_name,
                        h = Rx(a, b, f.edit_param.param_value),
                        l;
                    if (h) {
                        var n = Number(h);
                        l = isNaN(n) ? h : n
                    } else l = h;
                    b[g] = l
                } else f.delete_param && delete b[f.delete_param.param_name]
            }
        },
        Tx = function(a, b) {
            var c = b.values || [],
                d = Rx(a.eventName, a.K, c[0]),
                e = Rx(a.eventName, a.K, c[1]),
                f = b.type;
            if ("eqi" === f || "swi" === f || "ewi" === f || "cni" === f) d = "string" === typeof d ? d.toLowerCase() : d, e = "string" === typeof e ? e.toLowerCase() :
                e;
            var g = !1;
            switch (f) {
                case "eq":
                case "eqi":
                    g = String(d) == String(e);
                    break;
                case "sw":
                case "swi":
                    g = 0 == String(d).indexOf(String(e));
                    break;
                case "ew":
                case "ewi":
                    g = vt(d, e);
                    break;
                case "cn":
                case "cni":
                    g = 0 <= String(d).indexOf(String(e));
                    break;
                case "lt":
                    g = Number(d) < Number(e);
                    break;
                case "le":
                    g = Number(d) <= Number(e);
                    break;
                case "gt":
                    g = Number(d) > Number(e);
                    break;
                case "ge":
                    g = Number(d) >= Number(e);
                    break;
                case "re":
                case "rei":
                    g = xt(d, e, "rei" === f)
            }
            return !!b.negate !== g
        },
        Ux = function(a, b) {
            var c = b.event_name_predicate;
            if (c && !Tx(a,
                    c)) return !1;
            var d = b.conditions || [];
            if (0 === d.length) return !0;
            for (var e = 0; e < d.length; e++) {
                for (var f = d[e].predicates || [], g = !0, h = 0; h < f.length; h++)
                    if (!Tx(a, f[h])) {
                        g = !1;
                        break
                    }
                if (g) return !0
            }
            return !1
        },
        Ox = /^(_|ga_|google_|gtag\.|firebase_).*$/,
        Vx = !1;
    Vx = !0;
    var Wx = function(a) {
            var b = 0,
                c = 0;
            return {
                start: function() {
                    b = Za()
                },
                stop: function() {
                    c = this.get()
                },
                get: function() {
                    var d = 0;
                    a.hf() && (d = Za() - b);
                    return d + c
                }
            }
        },
        Xx = function() {
            this.g = void 0;
            this.o = 0;
            this.isActive = this.isVisible = this.s = !1;
            this.F = this.C = void 0
        };
    k = Xx.prototype;
    k.mi = function(a) {
        var b = this;
        if (!this.g) {
            this.s = I.hasFocus();
            this.isVisible = !I.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                cc(d, e, function(g) {
                    b.g.stop();
                    f(g);
                    b.hf() && b.g.start()
                })
            };
            c(A, "focus", function() {
                b.s = !0
            });
            c(A, "blur", function() {
                b.s = !1
            });
            c(A, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && Ug(56);
                b.F && b.F()
            });
            c(A, "pagehide", function() {
                b.isActive = !1;
                b.C && b.C()
            });
            c(I, "visibilitychange", function() {
                b.isVisible = !I.hidden
            });
            a.Ua() && -1 === (Tb.userAgent || "").indexOf("Firefox") && -1 === (Tb.userAgent || "").indexOf("FxiOS") && c(A, "beforeunload", function() {
                Lx()
            });
            this.vf();
            this.o = 0
        }
    };
    k.vf = function() {
        this.o +=
            this.Kd();
        this.g = Wx(this);
        this.hf() && this.g.start()
    };
    k.Xj = function(a) {
        a.Ub = this.Kd()
    };
    k.jj = function(a) {
        a.Ub = 0;
        this.vf();
        this.o = 0
    };
    k.hf = function() {
        return this.s && this.isVisible && this.isActive
    };
    k.dj = function() {
        return this.o + this.Kd()
    };
    k.Kd = function() {
        return this.g && this.g.get() || 0
    };
    k.Lj = function(a) {
        this.C = a
    };
    k.gh = function(a) {
        this.F = a
    };

    function Yx() {
        return A.gaGlobal = A.gaGlobal || {}
    }
    var Zx = function() {
            var a = Yx();
            a.hid = a.hid || Ja();
            return a.hid
        },
        $x = function(a, b) {
            var c = Yx();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var cy = function(a, b) {
            var c = !0;
            return c
        },
        ey = function(a) {
            var b;
            return b
        },
        ay = function(a, b, c) {
            var d = String(c.B(R.fa)),
                e = String(c.B(R.ab)),
                f = Number(c.B(R.qa)),
                g = c.B(R.Ob),
                h = {
                    Ja: R.I,
                    domain: d,
                    path: e,
                    expires: f ? new Date(Za() + 1E3 * f) : void 0,
                    flags: "" + c.B(R.Ga)
                };
            if (!1 === g && fy(c) === b) return !0;
            var l = ok(b, gy[0], d, e);
            return 1 !== hk(a, l, h)
        },
        dy = function(a, b) {
            var c = "" + b.B(R.fa),
                d = "" + b.B(R.ab),
                e = nk(a, c, d, gy, R.I);
            if (!e) {
                var f = String(b.B(R.Nb));
                f && f != a && (e = nk(f, c, d, gy, R.I))
            }
            return e
        },
        by = function(a) {
            return a.B(R.ra) + "_ga_ecid"
        },
        iy = function(a, b) {
            return ay(hy(b), a, b)
        },
        fy = function(a) {
            return dy(hy(a), a)
        },
        hy = function(a) {
            return String(a.B(R.ra)) + "_ga"
        },
        gy = ["GA1"];
    var ly = function(a, b) {
            var c = jy(b),
                d = String(b.B(R.fa)),
                e = String(b.B(R.ab)),
                f = Number(b.B(R.qa)),
                g = ok(a, ky[0], d, e),
                h = {
                    Ja: R.I,
                    domain: d,
                    path: e,
                    expires: f ? new Date(Za() + 1E3 * f) : void 0,
                    flags: String(b.B(R.Ga))
                };
            return 1 !== hk(c, g, h)
        },
        my = function(a) {
            var b = jy(a),
                c = String(a.B(R.fa)),
                d = String(a.B(R.ab));
            return nk(b, c, d, ky, R.I)
        },
        ky = ["GS1"],
        jy = function(a) {
            return String(a.B(R.ra)) + "_ga_" + a.s.substr(2)
        },
        ny = function(a) {
            var b;
            var c = a.K[R.uc],
                d = a.K[R.ye],
                e = !!a.K[R.kd];
            if (c && d) {
                var f = [c, d, Qa(a.K[R.xe]), a.C, a.Eb];
                b = f.join(".")
            } else b = void 0;
            return b
        };
    var oy = function(a) {
            var b = a.B(R.ia),
                c = a.getRemoteConfig(R.ia);
            if (c === b) return c;
            var d = Fc(b);
            c && c[R.O] && (d[R.O] = (d[R.O] || []).concat(c[R.O]));
            return d
        },
        py = function(a, b, c, d) {
            var e = Yk(!0);
            if ("1" !== e._up) return {};
            var f = e[b],
                g = e[d],
                h;
            a.g && (h = e[c]);
            return {
                clientId: f,
                Lg: h,
                jh: g
            }
        },
        qy = function(a, b, c, d) {
            var e = Yk(!0),
                f = e[b];
            f && (a.kh(f, 2), iy(f, a));
            var g = e[c];
            a.g && g && (a.lh(g, 2), cy(g, a));
            var h = e[d];
            h && ly(h, a);
            return a.g ? !!(f && g && h) : !(!f || !h)
        },
        ry = !1,
        sy = function(a) {
            var b = oy(a) || {},
                c = hy(a),
                d = by(a),
                e = jy(a);
            fl(b[R.Rb], !!b[R.O]) && qy(a, c, d, e) && (ry = !0);
            b[R.O] && cl(function() {
                var f = {},
                    g = fy(a);
                g && (f[c] = g);
                if (a.g) {
                    var h = ey(a);
                    h && (f[d] = h)
                }
                var l = my(a);
                l && (f[e] = l);
                var n = Yj("FPLC", void 0, void 0, R.I);
                n.length && (f._fplc = n[0]);
                return f
            }, b[R.O], b[R.oc], !!b[R.Sb])
        },
        uy = function(a) {
            if (!a.B(R.hb)) return {};
            var b = hy(a),
                c = by(a),
                d = jy(a);
            dl(function() {
                var e;
                if (ni("analytics_storage")) e = {};
                else {
                    var f = {},
                        g = (f._up = "1", f[b] = a.K[R.rb], f[d] = ny(a), f);
                    a.g && (g[c] = a.K[R.sb]);
                    e = g
                }
                return e
            }, 1);
            if (!ni("analytics_storage") && ty()) return py(a, b, c, d);
            return {}
        },
        ty = function() {
            var a = tj(A.location, "host"),
                b = tj(wj(I.referrer), "host");
            return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
        };
    var vy = function() {
        var a = Za(),
            b = a + 864E5,
            c = 20,
            d = 5E3;
        return function() {
            var e = Za();
            e >= b && (b = e + 864E5, d = 5E3);
            if (1 > d) return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c) return !1;
            d--;
            c--;
            return !0
        }
    };
    var wy = !1;
    wy = !0;
    var xy = "" + Ja(),
        yy = !1,
        zy = void 0;
    var Ay = function() {
        if (Fa(A.__uspapi)) {
            var a = "";
            try {
                A.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var By = function(a, b) {
            if (b.Ua()) {
                var c = Ay();
                c && (a.us_privacy = c);
                var d = Bo();
                d && (a.gdpr = d);
                var e = zo();
                e && (a.gdpr_consent = e)
            }
        },
        Dy = function(a, b) {
            if (ai() && (a.gcs = oi(), b.He && (a.gcu = "1"), b.Ua())) {
                bi() && (a.gcd = pi());
                var c = b.B(R.V);
                a.adr = void 0 !== c && !1 !== c ? "1" : "0";
                b.He && (a.gcut = Cy[b.pg || ""]);
            }
        },
        Ey = function(a, b, c) {
            void 0 === c && (c = {});
            if ("object" === typeof b)
                for (var d in b) Ey(a + "." + d, b[d], c);
            else c[a] = b;
            return c
        },
        Fy = function(a) {
            var b = "https://www.google-analytics.com/g/collect",
                c = Nn(a.B(R.sa), "/g/collect");
            if (c) return c;
            var d = !0;
            ni(R.D) && ni(R.I) || (d = !1);
            var e = !1 !== a.B(R.Ea);
            e = !0;
            var f = a.Db(R.eb, a.B(R.eb)),
                g = a.Db(R.Qb, a.B(R.Qb));
            f && !g && e && !1 !== a.B(R.jc) && nq() && d && (b = "https://analytics.google.com/g/collect");
            return b
        },
        Gy = !1;
    var Hy = {},
        Cy = (Hy[R.D] = "1", Hy[R.I] = "2", Hy),
        Iy = {};
    Iy[R.gi] = "tid";
    Iy[R.rb] = "cid";
    Iy[R.tb] = "ul";
    Iy[R.qe] = "_fid";
    Iy[R.fg] = "tt";
    Iy[R.te] = "ir";
    var Jy = {};
    Jy[R.uc] = "sid";
    Jy[R.ye] = "sct";
    Jy[R.xe] = "seg";
    Jy[R.ub] = "dl";
    Jy[R.Qa] = "dr";
    Jy[R.ld] = "dt";
    Jy[R.ba] = "cu";
    Jy[R.wb] = "uid";
    var Ky = {};
    Ky[R.Lf] = "cc";
    Ky[R.Mf] = "ci";
    Ky[R.Nf] = "cm";
    Ky[R.Of] = "cn";
    Ky[R.Pf] = "cs";
    Ky[R.Qf] = "ck";
    var Ly = function(a, b,
        c) {
        function d(z, B) {
            if (void 0 !== B && !R.hi.hasOwnProperty(z)) {
                null === B && (B = "");
                var C;
                if ("_" === z.charAt(0)) {
                    e[z] = Df(B, 300)
                } else if (Iy[z]) C = Iy[z], e[C] = Df(B, 300);
                else if (Jy[z]) C = Jy[z], g[C] = Df(B, 300);
                else if (!t(z, B)) {
                    q(z, B)
                }
            }
        }
        var e = {},
            f = {},
            g = {};
        e.v = "2";
        e.tid = a.s;
        e.gtm = Vn();
        e._p = Zx();
        a.Ke && (e.sr = a.Ke);
        a.sg && (e._z = a.sg);
        c && (e.em = c);
        a.ob && (e._gaz = 1);
        Dy(e, a);
        By(e, a);
        a.xg && (e.gtm_up = "1");
        if (Gy) {
            var h = jb(bj(a.o, R.ca, 1), ".");
            h && (e.gdid = h)
        }
        f.en = Df(a.eventName, 40);
        a.sd && (f._fv = a.wg ? 2 : 1);
        a.ug && (f._nsi =
            1);
        a.F && (f._ss = a.yg ? 2 : 1);
        a.rd && (f._c = 1);
        0 < a.Ub && (f._et = a.Ub);
        if (a.Ie) {
            var l = a.B(R.X);
            if (Ha(l))
                for (var n = 0; n < l.length && 200 > n; n++) f["pr" + (n + 1)] = Pf(l[n])
        }
        a.Ge && (f._eu = a.Ge);
        if (Gy) {
            var p = jb(bj(a.o, R.ca, 2), ".");
            p && (f.edid = p)
        }
        for (var q = function(z, B) {
                z = Df(z, 40);
                var C = "ep." + z,
                    F = "epn." + z;
                z = Ga(B) ? F : C;
                var D = Ga(B) ? C : F;
                f.hasOwnProperty(D) && delete f[D];
                f[z] = Df(B, 100)
            }, t = function(z, B) {
                var C = z.split(".");
                if (z === R.za && "object" !== typeof B) return q(z, B), !0;
                if (C[0] === R.za) {
                    if ((1 < C.length || "object" === typeof B) && a.Ua()) {
                        var F =
                            Ey(z, B);
                        Oa(F, function(D, E) {
                            return void q(D, E)
                        })
                    }
                    return !0
                }
                return !1
            }, u = 0; u < R.hg.length; ++u) {
            var r = R.hg[u];
            d(r, a.B(r))
        }
        a.Ie && d(R.ba, a.B(R.ba));
        Oa(a.Ai, d);
        Oa(a.K, d);
        var y = a.B(R.Ra) || {};
        !1 !== a.B(R.Ea) && mq() || (y._npa = "1");
        Oa(y, function(z, B) {
            if (void 0 !== B && (null === B && (B = ""), b[z] !== B)) {
                if (z !== R.wb || g.uid) {
                    var C = (Ga(B) ? "upn." : "up.") + Df(z, 24);
                    f[C] = Df(B, 36)
                } else g.uid = Df(B, 36);
                b[z] = B
            }
        });
        var x = !1;
        return Rf.call(this, {
            Wa: e,
            Gb: g,
            K: f
        }, Fy(a), a.Ua(), x) || this
    };
    ma(Ly, Rf);

    var My = function(a, b) {
            return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
                return b[d] || c
            })
        },
        Ny = function(a) {
            var b = a.search;
            return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
        },
        Oy = function(a) {
            var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            0 <= d && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c;
            return b
        },
        Py = function(a, b) {
            var c = new A.XMLHttpRequest;
            c.withCredentials = !0;
            var d = b ? "POST" : "GET",
                e = "",
                f = 0,
                g = wj(a),
                h = Oy(g),
                l = Ny(g);
            c.onprogress = function(n) {
                if (200 === c.status) {
                    e += c.responseText.substring(f);
                    f = n.loaded;
                    for (var p = My(e, h), q = p.indexOf("\n\n"); - 1 !== q;) {
                        var t;
                        a: {
                            var u = ba(p.substring(0, q).split("\n")),
                                r = u.next().value,
                                v = u.next().value;
                            if (r.startsWith("event: message") && v.startsWith("data: ")) try {
                                t = JSON.parse(v.substring(v.indexOf(":") + 1));
                                break a
                            } catch (x) {}
                            t = void 0
                        }
                        if (t) {
                            var w = t.send_pixel || [];
                            if (Array.isArray(w))
                                for (var y = 0; y < w.length; y++) bc(w[y])
                        }
                        p = p.substring(q + 2);
                        q = p.indexOf("\n\n")
                    }
                    e = p
                }
            };
            c.open(d, l);
            c.send(b);
        };
    var Ty = function(a, b, c, d) {
            var e = a + "?" + b;
            Qy && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect")));
            Ry && d && !Kx ? Py(e, c) : Sy(a, b, c)
        },
        Uy = function(a) {
            return a && 0 === a.indexOf("google.") && "google.com" != a ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", a) : void 0
        },
        Ry = !1;
    Ry = !0;
    var Qy = !1;
    var Vy = function() {
        this.C = 1;
        this.F = {};
        this.g = new Sf;
        this.o = -1
    };
    Vy.prototype.s = function(a, b) {
        var c = this,
            d;
        try {
            d = new Ly(a, this.F, b)
        } catch (n) {
            a.abort()
        }
        var e = Mx(a);
        e && this.g.C(d) || this.flush();
        if (e && this.g.add(d)) {
            if (0 > this.o) {
                var f = A,
                    g = f.setTimeout,
                    h;
                a.Ua() ? Wy ? (Wy = !1, h = Xy) : h = Yy : h = 5E3;
                this.o = g.call(f, function() {
                    return c.flush()
                }, h)
            }
        } else {
            var l = Uf(d, this.C++);
            Ty(d.o, l.rf, l.body, d.C);
            Zy(d, a.Ee, a.ob, String(a.Db(R.jd, a.B(R.jd))))
        }
    };
    Vy.prototype.add = function(a) {
        a.Je ? this.N(a) : this.s(a)
    };
    Vy.prototype.flush = function() {
        if (this.g.events.length) {
            var a = Vf(this.g, this.C++);
            Ty(this.g.g, a.rf, a.body, this.g.o);
            this.g = new Sf;
            0 <= this.o && (A.clearTimeout(this.o), this.o = -1)
        }
    };
    Vy.prototype.N = function(a) {
        var b = this,
            c = a.Qg();
        c ? Pi(c, function(d) {
            b.s(a, d)
        }) : this.s(a)
    };
    var Zy = function(a, b, c, d) {
            function e(h) {
                f.push(h + "=" + encodeURIComponent("" + a.Wa[h]))
            }
            if (b || c) {
                var f = [];
                e("tid");
                e("cid");
                e("gtm");
                f.push("aip=1");
                a.Gb.uid && f.push("uid=" + encodeURIComponent("" +
                    a.Gb.uid));
                b && (Sy("https://stats.g.doubleclick.net/g/collect", "v=2&" + f.join("&")), hi("https://stats.g.doubleclick.net/g/collect?v=2&" + f.join("&")));
                if (c) {
                    f.push("z=" + Ja());
                    var g = Uy(d);
                    g && bc(g + f.join("&"))
                }
            }
        },
        Sy = function(a, b, c) {
            var d = a + "?" + b;
            c ? Tb.sendBeacon && Tb.sendBeacon(d, c) : jc(d)
        },
        Xy = Wn('', 500),
        Yy = Wn('', 5E3),
        Wy = !0;
    var $y = window,
        az = document,
        bz = function(a) {
            var b = $y._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === $y["ga-disable-" + a]) return !0;
            try {
                var c = $y.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Uj("AMP_TOKEN", String(az.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return az.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var cz = {};
    var dz = function(a, b) {
        var c = R.D;
        ni(c) || ri(function() {
            b.He = !0;
            b.pg = c;
            a.zg(b)
        }, c)
    };
    cz.ii = "";
    var ez = function(a, b) {
        this.ob = a;
        this.Ub = b;
        this.Ma = new Vy;
        this.o = void 0;
        this.F = new Xx;
        this.g = this.C = this.s = void 0;
        this.N = !1
    };
    k = ez.prototype;
    k.Fj = function(a, b, c) {
        var d = this;
        if (c.eventModel[R.wc]) {
            if ("_" === a.charAt(0)) return;
            a !== R.Da && a !== R.Na && Px(a) && Ug(58);
            fz(c)
        }
        var e = new Jx(this.ob, a, b, c, this.Ub),
            f = [R.I],
            g = !1;
        g = e.Ua();
        (e.Db(R.eb, e.B(R.eb)) || g) && f.push(R.D);
        si(function() {
            d.Gj(e)
        }, f)
    };
    k.Gj = function(a) {
        this.g = a;
        try {
            bz(a.s) && (Ug(28), a.abort());
            0 <= cz.ii.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (Ug(33), a.abort());
            var b = a.Ld();
            b && b.blacklisted && (Ug(34), a.abort());
            var c = I.location.protocol;
            "http:" != c && "https:" != c && (Ug(29), a.abort());
            Tb && "preview" == Tb.loadPurpose && (Ug(30), a.abort());
            var d = S.grl;
            d || (d = vy(), S.grl = d);
            d() || (Ug(35), a.abort());
            this.ni(a);
            this.F.Xj(a);
            var g = this.fh,
                h;
            b: {
                if (!a.B(R.hb) || ni(R.I) || 1 === a.Ma) break b;a.xg = !0;
            }
            a.eventName === R.Da ? (a.B(R.hb) && Dl(["aw", "dc"]), sy(a), h = uy(a)) : h = {};
            g.call(this, h);
            a.eventName ==
                R.Da && (a.B(R.Tb) || a.abort(), a.eventName = R.ic);
            var l = this.o,
                n = this.s,
                p = this.C,
                q = this.F,
                t = my(a);
            t || (t = p);
            var u = Qa(a.B(R.sc)),
                r;
            r = Qa(a.B(R.nd));
            var v;
            a: {
                if (t) {
                    var w = t.split(".");
                    if (!(5 > w.length || 6 < w.length)) {
                        v = {
                            sessionId: w[0],
                            yf: Number(w[1]),
                            Sd: !!Number(w[2]),
                            jf: Number(w[3]),
                            Eb: Number(w[4] || 0),
                            Nc: "1" === w[5]
                        };
                        break a
                    }
                }
                v = void 0
            }
            v && v.Eb && (a.Eb = Math.max(0, v.Eb - Math.max(0, a.C - v.jf)));
            var y = !1;
            v || (y = a.sd = !0, v = {
                sessionId: String(a.C),
                yf: 1,
                Sd: !1,
                jf: a.C,
                Nc: !1
            });
            a.C > v.jf + 60 * u && (y = !0, v.sessionId = String(a.C), v.yf++, v.Sd = !1);
            if (y) a.F = !0, q.jj(a);
            else if (q.dj() > r || a.eventName == R.ic) v.Sd = !0;
            a.Ha(R.uc, v.sessionId);
            a.Ha(R.ye, v.yf);
            a.Ha(R.xe, v.Sd ? 1 : 0);
            var x = a.B(R.rb),
                z = a.Ma;
            x || (x = fy(a), z = 3);
            x || (x = l, z = 4);
            if (!x) {
                var B = ni(R.I),
                    C = Yx();
                x = !C.from_cookie || B ? C.vid : void 0;
                z = 5
            }
            x ? x = "" + x : (a.sd = a.ug = !0, x = kk(), z = 6);
            a.kh(x, z);
            a: {}
            var E = "",
                O = I.location;
            if (O) {
                var M = O.pathname || "";
                "/" != M.charAt(0) && (M = "/" + M);
                E = O.protocol +
                    "//" + O.hostname + M + O.search
            }
            a.Ha(R.ub, E);
            var N;
            a: {
                var P = Yj("_opt_expid", void 0, void 0, R.I)[0];
                if (P) {
                    var L = decodeURIComponent(P).split("$");
                    if (3 === L.length) {
                        N = L[2];
                        break a
                    }
                }
                if (void 0 !== S.ga4_referrer_override) N = S.ga4_referrer_override;
                else {
                    var K = nh("gtm.gtagReferrer." + a.s);
                    N = K ? "" + K : I.referrer
                }
            }
            var ca = N;
            ca && a.Ha(R.Qa, ca);
            a.Ha(R.ld, I.title);
            a.Ha(R.tb, (Tb.language || "").toLowerCase());
            var Y = A.screen,
                fa = Y ? Y.width : 0,
                V = Y ? Y.height : 0;
            a.Ke = fa + "x" + V;
            var ea = !1 !== a.B(R.Ea);
            ea = !0;
            if (ea && !1 !== a.B(R.jc) && nq() && ni(R.D)) {
                var na = a.Db(R.eb, a.B(R.eb)),
                    va = a.Db(R.Qb, a.B(R.Qb));
                a.yj() && (a.Ee = !!na);
                na && !va && 0 === a.Eb && (a.Eb = 60, a.ob = !0)
            }
            gz(a);
            a.Ie = R.ig.hasOwnProperty(a.eventName);
            for (var Ka = a.B(R.ue) || [], Wa = 0; Wa < Ka.length; Wa++) {
                var Pd = Ka[Wa];
                if (Pd.rule_result) {
                    a.Ha(R.fg, Pd.traffic_type);
                    Nx(3);
                    break
                }
            }
            if (a.B(R.sa)) {
                var Hf = oy(a) || {},
                    yc = fl(Hf[R.Rb], !!Hf[R.O]) ? Yk(!0)._fplc : void 0;
                a.K._fplc = yc || (0 < Yj("FPLC", void 0, void 0, R.I).length ? void 0 : "0")
            }
            if (void 0 === a.B(R.te)) {
                var If = a.B(R.md),
                    Ae, Qd;
                a: {
                    if (ry) {
                        var zc = oy(a) || {};
                        if (zc && zc[R.O])
                            for (var Jf = uj(wj(a.B(R.Qa)), "host", !0), Rd = zc[R.O], Rc = 0; Rc < Rd.length; Rc++)
                                if (Rd[Rc] instanceof RegExp) {
                                    if (Rd[Rc].test(Jf)) {
                                        Qd = !0;
                                        break a
                                    }
                                } else if (0 <= Jf.indexOf(Rd[Rc])) {
                            Qd = !0;
                            break a
                        }
                    }
                    Qd = !1
                }
                var Ac;
                if (!(Ac = Qd))
                    if (wy) Ac = !1;
                    else {
                        var Eh = uj(wj(a.B(R.Qa)), "host", !0),
                            Bc;
                        var Be = String(a.B(R.fa));
                        if ("none" !==
                            Be)
                            if ("auto" !== Be) Bc = Be;
                            else {
                                if (!yy) {
                                    for (var Fh = String(a.B(R.ab)), Cc = ek(), Sc = 0; Sc < Cc.length; Sc++)
                                        if ("none" !== Cc[Sc]) {
                                            var Gh = String(a.B(R.ra)) + "_ga_autodomain";
                                            if (0 === hk(Gh, xy, {
                                                    Ja: R.I,
                                                    domain: Cc[Sc],
                                                    path: Fh
                                                })) {
                                                hk(Gh, void 0, {
                                                    Ja: R.I,
                                                    domain: Cc[Sc],
                                                    path: Fh
                                                });
                                                zy = Cc[Sc];
                                                break
                                            }
                                        }
                                    yy = !0
                                }
                                Bc = zy
                            }
                        else Bc = void 0;
                        var Ba = Bc;
                        Ac = Ba ? 0 <= Eh.indexOf(Ba) : !1
                    }
                if (!(Ae = Ac)) {
                    var oa;
                    if (oa = If) a: {
                        for (var $a = If.include_conditions || [], Tc = 0; Tc < $a.length; Tc++)
                            if ($a[Tc].test(a.B(R.Qa))) {
                                oa = !0;
                                break a
                            }
                        oa = !1
                    }
                    Ae = oa
                }
                Ae && (a.Ha(R.te, 1), Nx(4))
            }
            if (a.eventName ==
                R.Na) {
                var nd = a.B(R.Pa);
                a.B(R.cb)(a.B(nd));
                a.abort()
            }
            if (a.K[R.zd]) delete a.K[R.zd];
            else {
                var wb = a.B(R.ke);
                if (wb) {
                    for (var ec = wb.edit_rules || [], xb = 0; xb < ec.length; xb++) a: {
                        var Xa = a,
                            T = ec[xb];
                        if (Ux(Xa, T)) {
                            if (T.new_event_name) {
                                var Sd = "string" === typeof T.new_event_name ? String(T.new_event_name) : Rx(Xa.eventName, Xa.K, T.new_event_name);
                                if (Px(Sd)) break a;
                                Xa.eventName = String(Sd)
                            }
                            Sx(Xa.eventName, Xa.K, T);
                            if (Vx) {
                                Xa.K[R.zd] = !0;
                                var Ce = Xa.eventName,
                                    La = Xa.K,
                                    Kf = Xa.s;
                                hr().insert("event", [La, Ce], Kf);
                                Nx(2);
                                Xa.abort()
                            } else Nx(2)
                        }
                    }
                    for (var Td =
                            wb.synthesis_rules || [], od = 0; od < Td.length; od++) {
                        var De = a,
                            Uc = Td[od];
                        if (Ux(De, Uc)) {
                            var Ee = Uc.new_event_name;
                            if (!Px(Ee)) {
                                var Vc = Uc.merge_source_event_params ? Fc(De.K) : {};
                                Vc[R.zd] = !0;
                                Sx(Ee, Vc, Uc);
                                var Ud = Ee,
                                    Lf = Vc,
                                    Hh = De.s;
                                hr().insert("event", [Lf, Ud], Hh);
                                Nx(1)
                            }
                        }
                    }
                }
            }
            var yb = a.K[R.ze];
            if (Ha(yb))
                for (var ab = 0; ab < yb.length; ab++) Nx(yb[ab]);
            var Sa = Tg("GA4_EVENT");
            Sa && (a.Ge = Sa);
            var Ta = this.fh,
                Fb = this.o,
                Fe = this.s,
                Wc;
            var Vd = ny(a);
            Vd ? (ly(Vd, a) || (Ug(25), a.abort()), Wc = Vd) : Wc = void 0;
            var nz = Wc,
                Ih;
            var pd = a.K[R.rb];
            Fb && pd ===
                Fb ? Ih = pd : pd ? (pd = "" + pd, iy(pd, a) || (Ug(31), a.abort()), $x(pd, ni(R.I)), Ih = pd) : (Ug(32), a.abort(), Ih = "");
            var oz = Ih,
                Mf;
            a: {
                Mf = void 0
            }
            Ta.call(this, {
                clientId: oz,
                Lg: Mf,
                jh: nz
            });
            this.Wj();
            a.Ua() && ("page_view" === a.eventName || a.rd) &&
                dz(this, a);
            this.F.vf();
            this.zg(a);
            a.o.onSuccess()
        } catch (tz) {
            a.o.onFailure()
        }
        delete Rg.GA4_EVENT
    };
    k.zg = function(a) {
        this.Ma.add(a)
    };
    k.fh = function(a) {
        var b = a.clientId,
            c = a.Lg,
            d = a.jh;
        b && d && (this.o = b, this.s = c, this.C = d)
    };
    k.flush = function() {
        this.Ma.flush()
    };
    k.Wj = function() {
        var a = this;
        if (!this.N) {
            var b = ni(R.I);
            qi([R.I], function() {
                var c = ni(R.I);
                if (b ^ c && a.g && a.C && a.o) {
                    var d = a.o;
                    if (c) {
                        var e = fy(a.g);
                        e ? (a.o = e, a.C = my(a.g), a.g.g && (a.s = ey(a.g))) : (iy(a.o, a.g), ly(a.C,
                            a.g), $x(a.o, !0), a.g.g && a.s && cy(a.s, a.g));
                    } else {
                        a.C = void 0;
                        a.o = void 0;
                        a.s = void 0;
                    }
                    b = c
                }
            });
            this.N = !0
        }
    };
    k.ni = function(a) {
        a.eventName !== R.Na && this.F.mi(a)
    };
    var gz = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        a.rd = b(a.Ld());
        a.sd && (a.wg = b(a.Ld("first_visit")));
        a.F && (a.yg = b(a.Ld("session_start")))
    };

    function fz(a) {
        delete a.eventModel[R.wc];
        hz(a.eventModel)
    }
    var hz = function(a) {
        Oa(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[R.Ra] || {};
        Oa(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var iz = function(a) {
            if ("prerender" == I.visibilityState) return !1;
            a();
            return !0
        },
        jz = function(a) {
            if (!iz(a)) {
                var b = !1,
                    c = function() {
                        !b && iz(a) && (b = !0, dc(I, "visibilitychange", c), Ug(55))
                    };
                cc(I, "visibilitychange", c);
                Ug(54)
            }
        };
    var kz = function(a, b, c) {
            kr(b, c, a)
        },
        lz = function(a, b, c) {
            kr(b, c, a, !0)
        },
        pz = function(a, b) {
            var c = new ez(a, b);
            jz(function() {
                mz(a, c)
            });
        };

    function mz(a, b) {
        var c = b.F;
        jr(a, function(d, e, f, g) {
            b.Fj(e, f, g)
        });
        c.Lj(function() {
            hr().flush();
            1E3 <= c.Kd() && Tb.sendBeacon && kz(a, R.ae, {});
            Lx();
            b.flush();
            c.gh(function() {
                Kx = !1;
                Kx = !1;
                c.gh(void 0)
            })
        });
    }
    var Z = {
        h: {}
    };


    Z.h.ehl = ["google"],
        function() {
            function a(l) {
                return l.target && l.target.location && l.target.location.href ? l.target.location.href : Mv()
            }

            function b(l, n) {
                cc(l, "hashchange", function(p) {
                    var q = a(p);
                    n({
                        source: "hashchange",
                        state: null,
                        url: Ov(q),
                        P: Nv(q)
                    })
                })
            }

            function c(l, n) {
                cc(l, "popstate", function(p) {
                    var q = a(p);
                    n({
                        source: "popstate",
                        state: p.state,
                        url: Ov(q),
                        P: Nv(q)
                    })
                })
            }

            function d(l, n, p) {
                var q = n.history,
                    t = q[l];
                if (Fa(t)) try {
                    q[l] = function(u, r, v) {
                        t.apply(q, [].slice.call(arguments, 0));
                        p({
                            source: l,
                            state: u,
                            url: Ov(Mv()),
                            P: Nv(Mv())
                        })
                    }
                } catch (u) {}
            }

            function e() {
                var l = {
                    source: null,
                    state: W("history").state || null,
                    url: Ov(Mv()),
                    P: Nv(Mv())
                };
                return function(n, p) {
                    var q = l,
                        t = {};
                    t[q.source] = !0;
                    t[n.source] = !0;
                    if (!t.popstate || !t.hashchange || q.P != n.P) {
                        var u = {
                            event: "gtm.historyChange-v2",
                            "gtm.historyChangeSource": n.source,
                            "gtm.oldUrlFragment": l.P,
                            "gtm.newUrlFragment": n.P,
                            "gtm.oldHistoryState": l.state,
                            "gtm.newHistoryState": n.state,
                            "gtm.oldUrl": l.url,
                            "gtm.newUrl": n.url,
                            "gtm.triggers": p.join(",")
                        };
                        l = n;
                        Qv(u)
                    }
                }
            }

            function f(l, n) {
                var p = "" +
                    n;
                if (g[p]) g[p].push(l);
                else {
                    var q = [l];
                    g[p] = q;
                    var t = e(),
                        u = -1;
                    h.push(function(r) {
                        0 <= u && Jv(u);
                        n ? u = Kv(function() {
                            t(r, q);
                            u = -1
                        }, n) : t(r, q)
                    })
                }
            }
            var g = {},
                h = [];
            (function(l) {
                Z.__ehl = l;
                Z.__ehl.m = "ehl";
                Z.__ehl.isVendorTemplate = !0;
                Z.__ehl.priorityOverride = 0
            })(function(l) {
                var n = W("self"),
                    p = l.vtp_uniqueTriggerId || "0",
                    q = l.vtp_groupEvents ? Number(l.vtp_groupEventsInterval) : 0;
                0 > q ? q = 0 : isNaN(q) && (q = 1E3);
                if (Vv("ehl")) {
                    var t = Dr("ehl", "reg");
                    t ? (t(p, q),
                        J(l.vtp_gtmOnSuccess)) : J(l.vtp_gtmOnFailure)
                } else {
                    var u = function(r) {
                        for (var v = 0; v < h.length; v++) h[v](r)
                    };
                    b(n, u);
                    c(n, u);
                    d("pushState", n, u);
                    d("replaceState", n, u);
                    f(p, q);
                    Br("ehl", "reg", f);
                    Wv("ehl");
                    J(l.vtp_gtmOnSuccess)
                }
            })
        }();
    Z.h.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(l("horiz.pix")).length || Object.keys(l("horiz.pct")).length || Object.keys(l("vert.pix")).length || Object.keys(l("vert.pct")).length)
            }

            function b(x) {
                for (var z = [], B = x.split(","), C = 0; C < B.length; C++) {
                    var F = Number(B[C]);
                    if (isNaN(F)) return [];
                    p.test(B[C]) || z.push(F)
                }
                return z
            }

            function c() {
                var x = 0,
                    z = 0;
                return function() {
                    var B = ij(),
                        C = B.height;
                    x = Math.max(v.scrollLeft + B.width, x);
                    z = Math.max(v.scrollTop + C, z);
                    return {
                        Ve: x,
                        We: z
                    }
                }
            }

            function d() {
                u = W("self");
                r = u.document;
                v = r.scrollingElement || r.body && r.body.parentNode;
                y = c()
            }

            function e(x, z, B, C) {
                var F = l(z),
                    D = {},
                    E;
                for (E in F) {
                    D.Jb = E;
                    if (F.hasOwnProperty(D.Jb)) {
                        var O = Number(D.Jb);
                        x < O || (Qv({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": O,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": C,
                            "gtm.triggers": F[D.Jb].join(",")
                        }), Cr("sdl", z, function(M) {
                            return function(N) {
                                delete N[M.Jb];
                                return N
                            }
                        }(D), {}))
                    }
                    D = {
                        Jb: D.Jb
                    }
                }
            }

            function f() {
                var x = y(),
                    z = x.Ve,
                    B = x.We,
                    C = z / v.scrollWidth * 100,
                    F = B / v.scrollHeight * 100;
                e(z, "horiz.pix",
                    q.vd, t.jg);
                e(C, "horiz.pct", q.ud, t.jg);
                e(B, "vert.pix", q.vd, t.vg);
                e(F, "vert.pct", q.ud, t.vg);
                Br("sdl", "pending", !1)
            }

            function g() {
                var x = 250,
                    z = !1;
                r.scrollingElement && r.documentElement && u.addEventListener && (x = 50, z = !0);
                var B = 0,
                    C = !1,
                    F = function() {
                        C ? B = Kv(F, x) : (B = 0, f(), Vv("sdl") && !a() && (dc(u, "scroll", D), dc(u, "resize", D), Br("sdl", "init", !1)));
                        C = !1
                    },
                    D = function() {
                        z && y();
                        B ? C = !0 : (B = Kv(F, x), Br("sdl", "pending", !0))
                    };
                return D
            }

            function h(x, z, B) {
                if (z) {
                    var C = b(String(x));
                    Cr("sdl", B, function(F) {
                        for (var D = 0; D < C.length; D++) {
                            var E =
                                String(C[D]);
                            F.hasOwnProperty(E) || (F[E] = []);
                            F[E].push(z)
                        }
                        return F
                    }, {})
                }
            }

            function l(x) {
                return Dr("sdl", x, {})
            }

            function n(x) {
                J(x.vtp_gtmOnSuccess);
                var z = x.vtp_uniqueTriggerId,
                    B = x.vtp_horizontalThresholdsPixels,
                    C = x.vtp_horizontalThresholdsPercent,
                    F = x.vtp_verticalThresholdUnits,
                    D = x.vtp_verticalThresholdsPixels,
                    E = x.vtp_verticalThresholdsPercent;
                switch (x.vtp_horizontalThresholdUnits) {
                    case q.vd:
                        h(B, z, "horiz.pix");
                        break;
                    case q.ud:
                        h(C, z, "horiz.pct")
                }
                switch (F) {
                    case q.vd:
                        h(D, z, "vert.pix");
                        break;
                    case q.ud:
                        h(E,
                            z, "vert.pct")
                }
                Vv("sdl") ? Dr("sdl", "pending") || (w || (d(), w = !0), J(function() {
                    return f()
                })) : (d(), w = !0, v && (Wv("sdl"), Br("sdl", "pending", !0), J(function() {
                    f();
                    if (a()) {
                        var O = g();
                        cc(u, "scroll", O);
                        cc(u, "resize", O)
                    } else Br("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    ud: "PERCENT",
                    vd: "PIXELS"
                },
                t = {
                    vg: "vertical",
                    jg: "horizontal"
                },
                u, r, v, w = !1,
                y;
            (function(x) {
                Z.__sdl = x;
                Z.__sdl.m = "sdl";
                Z.__sdl.isVendorTemplate = !0;
                Z.__sdl.priorityOverride = 0
            })(function(x) {
                x.vtp_triggerStartOption ? n(x) : ot(function() {
                    n(x)
                })
            })
        }();



    Z.h.read_container_data = ["google"],
        function() {
            (function(a) {
                Z.__read_container_data = a;
                Z.__read_container_data.m = "read_container_data";
                Z.__read_container_data.isVendorTemplate = !0;
                Z.__read_container_data.priorityOverride = 0
            })(function() {
                return {
                    assert: function() {},
                    T: function() {
                        return {}
                    }
                }
            })
        }();
    Z.h.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.m = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0
            })(function(a) {
                Yv(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.h.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(uh(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();
    Z.h.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Pv("gtm.url", 1)) || Mv();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Ov(String(c));
                var e = wj(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ha(h) ?
                    n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = uj(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!l || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = uj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.h.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.m = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Pv(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Yv(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.h.ytl = ["google"],
        function() {
            function a() {
                var r = Math.round(1E9 * Math.random()) + "";
                return I.getElementById(r) ? a() : r
            }

            function b(r, v) {
                if (!r) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= r.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(r, v) {
                var w = r.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var y = r.setAttribute,
                            x;
                        var z = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) x = w + z + "enablejsapi=1";
                        else {
                            if (!t) {
                                var B = W("document");
                                t = B.location.protocol + "//" + B.location.hostname;
                                B.location.port && (t += ":" + B.location.port)
                            }
                            x = w + z + "enablejsapi=1&origin=" + encodeURIComponent(t)
                        }
                        y.call(r, "src", x);
                        return !0
                    }
                }
                return !1
            }

            function d(r, v) {
                if (!r.getAttribute("data-gtm-yt-inspected-" + v.Af) && (r.setAttribute("data-gtm-yt-inspected-" + v.Af, "true"), c(r, v.Hc))) {
                    r.id || (r.id = a());
                    var w = W("YT"),
                        y = w.get(r.id);
                    y || (y = new w.Player(r.id));
                    var x = f(y, v),
                        z = {},
                        B;
                    for (B in x) z.hc = B, x.hasOwnProperty(z.hc) && y.addEventListener(z.hc, function(C) {
                        return function(F) {
                            return x[C.hc](F.data)
                        }
                    }(z)), z = {
                        hc: z.hc
                    }
                }
            }

            function e(r) {
                J(function() {
                    function v() {
                        for (var y =
                                w.getElementsByTagName("iframe"), x = y.length, z = 0; z < x; z++) d(y[z], r)
                    }
                    var w = W("document");
                    v();
                    Rs(v)
                })
            }

            function f(r, v) {
                var w, y;

                function x() {
                    N = Ss(function() {
                        return {
                            url: K,
                            title: ca,
                            Xe: L,
                            Ig: r.getCurrentTime(),
                            playbackRate: Y
                        }
                    }, v.Af, r.getIframe());
                    L = 0;
                    ca = K = "";
                    Y = 1;
                    return z
                }

                function z(na) {
                    switch (na) {
                        case q.PLAYING:
                            L = Math.round(r.getDuration());
                            K = r.getVideoUrl();
                            if (r.getVideoData) {
                                var va = r.getVideoData();
                                ca = va ? va.title : ""
                            }
                            Y = r.getPlaybackRate();
                            v.Re ? Qv(N.createEvent("start")) : N.Wb();
                            P = l(v.tf, v.sf, r.getDuration());
                            return B(na);
                        default:
                            return z
                    }
                }

                function B() {
                    fa = r.getCurrentTime();
                    V = Lv().getTime();
                    N.ih();
                    M();
                    return C
                }

                function C(na) {
                    var va;
                    switch (na) {
                        case q.ENDED:
                            return D(na);
                        case q.PAUSED:
                            va = "pause";
                        case q.BUFFERING:
                            var Ka = r.getCurrentTime() - fa;
                            va = 1 < Math.abs((Lv().getTime() - V) / 1E3 * Y - Ka) ? "seek" : va || "buffering";
                            r.getCurrentTime() && (v.Qe ? Qv(N.createEvent(va)) : N.Wb());
                            O();
                            return F;
                        case q.UNSTARTED:
                            return x(na);
                        default:
                            return C
                    }
                }

                function F(na) {
                    switch (na) {
                        case q.ENDED:
                            return D(na);
                        case q.PLAYING:
                            return B(na);
                        case q.UNSTARTED:
                            return x(na);
                        default:
                            return F
                    }
                }

                function D() {
                    for (; y;) {
                        var na = w;
                        Jv(y);
                        na()
                    }
                    v.Pe && Qv(N.createEvent("complete", 1));
                    return x(q.UNSTARTED)
                }

                function E() {}

                function O() {
                    y && (Jv(y), y = 0, w = E)
                }

                function M() {
                    if (P.length && 0 !== Y) {
                        var na = -1,
                            va;
                        do {
                            va = P[0];
                            if (va.aa > r.getDuration()) return;
                            na = (va.aa - r.getCurrentTime()) / Y;
                            if (0 > na && (P.shift(), 0 === P.length)) return
                        } while (0 > na);
                        w = function() {
                            y = 0;
                            w = E;
                            0 < P.length && P[0].aa === va.aa && (P.shift(), Qv(N.createEvent("progress", va.Qc, va.Tc)));
                            M()
                        };
                        y = Kv(w, 1E3 * na)
                    }
                }
                var N, P = [],
                    L, K, ca, Y, fa, V, ea = x(q.UNSTARTED);
                y = 0;
                w = E;
                return {
                    onStateChange: function(na) {
                        ea = ea(na)
                    },
                    onPlaybackRateChange: function(na) {
                        fa = r.getCurrentTime();
                        V = Lv().getTime();
                        N.Wb();
                        Y = na;
                        O();
                        M()
                    }
                }
            }

            function g(r) {
                for (var v = r.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                    var z = parseInt(v[x], 10);
                    isNaN(z) || 100 < z || 0 > z || y.push(z / 100)
                }
                y.sort(function(B, C) {
                    return B - C
                });
                return y
            }

            function h(r) {
                for (var v = r.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                    var z = parseInt(v[x], 10);
                    isNaN(z) || 0 > z || y.push(z)
                }
                y.sort(function(B, C) {
                    return B - C
                });
                return y
            }

            function l(r, v, w) {
                var y = r.map(function(B) {
                    return {
                        aa: B,
                        Tc: B,
                        Qc: void 0
                    }
                });
                if (!v.length) return y;
                var x = v.map(function(B) {
                    return {
                        aa: B * w,
                        Tc: void 0,
                        Qc: B
                    }
                });
                if (!y.length) return x;
                var z = y.concat(x);
                z.sort(function(B, C) {
                    return B.aa - C.aa
                });
                return z
            }

            function n(r) {
                var v = !!r.vtp_captureStart,
                    w = !!r.vtp_captureComplete,
                    y = !!r.vtp_capturePause,
                    x = g(r.vtp_progressThresholdsPercent + ""),
                    z = h(r.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!r.vtp_fixMissingApi;
                if (v || w || y || x.length || z.length) {
                    var C = {
                            Re: v,
                            Pe: w,
                            Qe: y,
                            sf: x,
                            tf: z,
                            Hc: B,
                            Af: void 0 === r.vtp_uniqueTriggerId ? "" : r.vtp_uniqueTriggerId
                        },
                        F = W("YT"),
                        D = function() {
                            e(C)
                        };
                    J(r.vtp_gtmOnSuccess);
                    if (F) F.ready && F.ready(D);
                    else {
                        var E = W("onYouTubeIframeAPIReady");
                        Rv("onYouTubeIframeAPIReady", function() {
                            E && E();
                            D()
                        });
                        J(function() {
                            for (var O = W("document"), M = O.getElementsByTagName("script"), N = M.length, P = 0; P < N; P++) {
                                var L = M[P].getAttribute("src");
                                if (b(L, "iframe_api") || b(L, "player_api")) return
                            }
                            for (var K = O.getElementsByTagName("iframe"), ca = K.length, Y = 0; Y < ca; Y++)
                                if (!u && c(K[Y], C.Hc)) {
                                    U("https://www.youtube.com/iframe_api");
                                    u = !0;
                                    break
                                }
                        })
                    }
                } else J(r.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                t, u = !1;
            (function(r) {
                Z.__ytl = r;
                Z.__ytl.m = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0
            })(function(r) {
                r.vtp_triggerStartOption ? n(r) : dm(function() {
                    n(r)
                })
            })
        }();

    Z.h.aev = ["google"],
        function() {
            function a(u, r, v) {
                var w = u || uh(r, "gtm");
                if (w) return w[v]
            }

            function b(u, r, v, w, y) {
                y || (y = "element");
                var x = r + "." + v,
                    z;
                if (p.hasOwnProperty(x)) z = p[x];
                else {
                    var B = a(u, r, y);
                    if (B && (z = w(B), p[x] = z, q.push(x), 35 < q.length)) {
                        var C = q.shift();
                        delete p[C]
                    }
                }
                return z
            }

            function c(u, r, v, w) {
                var y = a(u, r, t[v]);
                return void 0 !== y ? y : w
            }

            function d(u, r) {
                if (!u) return !1;
                var v = e(Mv());
                Ha(r) || (r = String(r || "").replace(/\s+/g, "").split(","));
                for (var w = [v], y = 0; y < r.length; y++) {
                    var x = r[y];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x =
                                new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x = x.domain;
                    if (x instanceof RegExp) {
                        if (x.test(u)) return !1
                    } else {
                        var z = x;
                        if (0 != z.length) {
                            if (0 <= e(u).indexOf(z)) return !1;
                            w.push(e(z))
                        }
                    }
                }
                return !xw(u, w)
            }

            function e(u) {
                n.test(u) || (u = "http://" + u);
                return uj(wj(u), "HOST", !0)
            }

            function f(u, r, v, w) {
                switch (u) {
                    case "SUBMIT_TEXT":
                        return b(r, v, "FORM." + u, g, "formSubmitElement") || w;
                    case "LENGTH":
                        var y = b(r, v, "FORM." + u, h);
                        return void 0 === y ? w : y;
                    case "INTERACTED_FIELD_ID":
                        return l(r, v, "id", w);
                    case "INTERACTED_FIELD_NAME":
                        return l(r,
                            v, "name", w);
                    case "INTERACTED_FIELD_TYPE":
                        return l(r, v, "type", w);
                    case "INTERACTED_FIELD_POSITION":
                        var x = a(r, v, "interactedFormFieldPosition");
                        return void 0 === x ? w : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var z = a(r, v, "interactSequenceNumber");
                        return void 0 === z ? w : z;
                    default:
                        return w
                }
            }

            function g(u) {
                switch (u.tagName.toLowerCase()) {
                    case "input":
                        return fc(u, "value");
                    case "button":
                        return gc(u);
                    default:
                        return null
                }
            }

            function h(u) {
                if ("form" === u.tagName.toLowerCase() && u.elements) {
                    for (var r = 0, v = 0; v < u.elements.length; v++) Gr(u.elements[v]) &&
                        r++;
                    return r
                }
            }

            function l(u, r, v, w) {
                var y = a(u, r, "interactedFormField");
                return y && fc(y, v) || w
            }
            var n = /^https?:\/\//i,
                p = {},
                q = [],
                t = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(u) {
                Z.__aev = u;
                Z.__aev.m = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0
            })(function(u) {
                var r = u.vtp_gtmEventId,
                    v = u.vtp_defaultValue,
                    w = u.vtp_varType,
                    y;
                u.vtp_gtmCachedValues && (y = u.vtp_gtmCachedValues.gtm);
                switch (w) {
                    case "TAG_NAME":
                        var x = a(y, r, "element");
                        return x && x.tagName || v;
                    case "TEXT":
                        return b(y, r, w, gc) || v;
                    case "URL":
                        var z;
                        a: {
                            var B = String(a(y, r, "elementUrl") || v || ""),
                                C = wj(B),
                                F = String(u.vtp_component || "URL");
                            switch (F) {
                                case "URL":
                                    z = B;
                                    break a;
                                case "IS_OUTBOUND":
                                    z = d(B, u.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    z = uj(C, F, u.vtp_stripWww, u.vtp_defaultPages, u.vtp_queryKey)
                            }
                        }
                        return z;
                    case "ATTRIBUTE":
                        var D;
                        if (void 0 === u.vtp_attribute) D = c(y, r, w, v);
                        else {
                            var E = u.vtp_attribute,
                                O = a(y, r, "element");
                            D = O && fc(O, E) || v || ""
                        }
                        return D;
                    case "MD":
                        var M = u.vtp_mdValue,
                            N = b(y, r, "MD", Fv);
                        return M && N ? Iv(N, M) || v : N || v;
                    case "FORM":
                        return f(String(u.vtp_component || "SUBMIT_TEXT"), y, r, v);
                    default:
                        var P = c(y, r, w, v);
                        Yv(P, "aev", u.vtp_gtmEventId);
                        return P
                }
            })
        }();

    Z.h.dlm = ["google"],
        function() {
            (function(a) {
                Z.__dlm = a;
                Z.__dlm.m = "dlm";
                Z.__dlm.isVendorTemplate = !0;
                Z.__dlm.priorityOverride = 0
            })(function(a) {
                var b = yw(a.vtp_userInput || [], "key", "value") || {};
                a.vtp_synchronousWrite ? Oa(b, function(c, d) {
                    qh(c, d)
                }) : Qv(b);
                J(a.vtp_gtmOnSuccess)
            })
        }();

    Z.h.gct = ["google"],
        function() {
            function a(d) {
                for (var e = [], f = 0; f < d.length; f++) try {
                    e.push(new RegExp(d[f]))
                } catch (g) {}
                return e
            }

            function b(d) {
                return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
            }

            function c(d) {
                for (var e = [], f = 0; f < d.length; f++) {
                    var g = d[f].matchValue,
                        h;
                    switch (d[f].matchType) {
                        case "BEGINS_WITH":
                            h = "^" + b(g);
                            break;
                        case "ENDS_WITH":
                            h = b(g) + "$";
                            break;
                        case "EQUALS":
                            h = "^" + b(g) + "$";
                            break;
                        case "REGEX":
                            h = g;
                            break;
                        default:
                            h = b(g)
                    }
                    e.push(h)
                }
                return e
            }(function(d) {
                Z.__gct = d;
                Z.__gct.m = "gct";
                Z.__gct.isVendorTemplate = !0;
                Z.__gct.priorityOverride = 0
            })(function(d) {
                var e = {};
                0 < d.vtp_sessionDuration && (e[R.sc] = d.vtp_sessionDuration);
                e[R.fd] = d.vtp_eventSettings;
                e[R.ke] = d.vtp_dynamicEventSettings;
                e[R.eb] = 1 === d.vtp_googleSignals;
                e[R.jd] = d.vtp_foreignTld;
                e[R.Qb] = 1 === d.vtp_restrictDomain;
                e[R.ue] = d.vtp_internalTrafficResults;
                var f = R.ia,
                    g = d.vtp_linker;
                g && g[R.O] && (g[R.O] = a(g[R.O]));
                e[f] = g;
                var h = R.md,
                    l = d.vtp_referralExclusionDefinition;
                l && l.include_conditions && (l.include_conditions = a(l.include_conditions));
                e[h] = l;
                var n = nr(d.vtp_trackingId),
                    p = n.referral_exclusion_conditions;
                p && (p.length && "object" === typeof p[0] && (p = c(p)), e[R.md] = {
                    include_conditions: a(p)
                });
                var q = n.cross_domain_conditions;
                if (q) {
                    q.length && "object" === typeof q[0] && (q = c(q));
                    var t = {};
                    e[R.ia] = (t[R.O] = a(q), t[R.Sb] = !0, t[R.Rb] = !0, t[R.oc] = "query", t)
                }
                pz(d.vtp_trackingId, e);
                J(d.vtp_gtmOnSuccess)
            })
        }();




    Z.h.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.m = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable ? lz : kz)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess()
            })
        }();








    Z.h.lcl = [],
        function() {
            function a() {
                var c = W("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.ff || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = ic(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue,
                                l = Dr("lcl", h ? "nv.mwt" : "mwt", 0),
                                n;
                            n = h ? Dr("lcl", "nv.ids", []) : Dr("lcl", "ids", []);
                            if (n.length) {
                                var p = zr(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !h && l && g.href) {
                                    var q = !!Ia(String(kc(g, "rel") || "").split(" "), function(v) {
                                        return "noreferrer" === v.toLowerCase()
                                    });
                                    q && Ug(36);
                                    var t = W((kc(g, "target") || "_self").substring(1)),
                                        u = !0,
                                        r = ov(function() {
                                            var v;
                                            if (v = u && t) {
                                                var w;
                                                a: if (q) {
                                                    var y;
                                                    try {
                                                        y = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (x) {
                                                        if (!c.createEvent) {
                                                            w = !1;
                                                            break a
                                                        }
                                                        y = c.createEvent("MouseEvents");
                                                        y.initEvent(f.type, !0, !0)
                                                    }
                                                    y.ff = !0;
                                                    f.target.dispatchEvent(y);
                                                    w = !0
                                                } else w = !1;
                                                v = !w
                                            }
                                            v && (t.location.href = kc(g, "href"))
                                        }, l);
                                    if (Qv(p, r, l)) u = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Qv(p, function() {}, l || 2E3);
                                return !0
                            }
                        }
                    };
                cc(c, "click", e, !1);
                cc(c, "auxclick",
                    e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = kc(d, "href"),
                    g = f.indexOf("#"),
                    h = kc(d, "target");
                if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
                if (0 < g) {
                    var l = Ov(f),
                        n = Ov(e.location);
                    return l !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.m = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var h = function(n) {
                        return Math.max(f, n)
                    };
                    Cr("lcl", "mwt", h, 0);
                    e || Cr("lcl", "nv.mwt", h, 0)
                }
                var l = function(n) {
                    n.push(g);
                    return n
                };
                Cr("lcl", "ids", l, []);
                e || Cr("lcl", "nv.ids", l, []);
                Vv("lcl") || (a(), Wv("lcl"));
                J(c.vtp_gtmOnSuccess)
            })
        }();
    var qz = {};
    qz.dataLayer = oh;
    qz.callback = function(a) {
        eh.hasOwnProperty(a) && Fa(eh[a]) && eh[a]();
        delete eh[a]
    };
    qz.bootstrap = 0;
    qz._spx = !1;

    function rz() {
        S[sf.J] = qz;
        db(fh, Z.h);
        $e = of
    }

    function sz() {
        var a = !1;
        a && lm("INIT");
        Ph().o();
        S = A.google_tag_manager = A.google_tag_manager || {};
        yo();
        gl.enable_gbraid_cookie_write = !0;
        var b = !!S[sf.J];
        if (b) {
            var c = S.zones;
            c && c.unregisterChild(sf.J);
        } else {
            for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) Se.push(g[h]);
            for (var l = f.tags || [], n = 0; n < l.length; n++) Ve.push(l[n]);
            for (var p = f.predicates || [], q = 0; q < p.length; q++) Ue.push(p[q]);
            for (var t = f.rules || [], u = 0; u < t.length; u++) {
                for (var r = t[u], v = {}, w = 0; w < r.length; w++) v[r[w][0]] = Array.prototype.slice.call(r[w], 1);
                Te.push(v)
            }
            Xe = Z;
            Ye = zt;
            var y = data.permissions || {},
                x = data.sandboxed_scripts,
                z = data.security_groups;
            Bu();
            wf = new vf(y);
            if (void 0 !== x)
                for (var B = ["sandboxedScripts"], C = 0; C < x.length; C++) {
                    var F = x[C].replace(/^_*/, "");
                    fh[F] = B
                }
            Eu(z);
            rz();
            uv();
            Zl = !1;
            $l = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) bm();
            else {
                cc(I, "DOMContentLoaded", bm);
                cc(I, "readystatechange", bm);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var D = !0;
                    try {
                        D = !A.frameElement
                    } catch (P) {}
                    D && cm()
                }
                cc(A, "load", bm)
            }
            lt = !1;
            "complete" === I.readyState ? nt() : cc(A, "load", nt);
            hn && A.setInterval(bn, 864E5);
            ch = (new Date).getTime();
            qz.bootstrap = ch;
            if (a) {
                var N = mm("INIT");
            }
        }
    }
    (function(a) {
        if (!A["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = wj(I.referrer);
                b = "cct.google" === tj(c, "host")
            }
            if (!b) {
                var d = Yj("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (A["__TAGGY_INSTALLED"] = !0, Zb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
                var t = "GTM",
                    u = "GTM";
                t = "OGT", u = "GTAG";
                var r = A["google.tagmanager.debugui2.queue"];
                r || (r = [], A["google.tagmanager.debugui2.queue"] = r, Zb("https://" + sf.Yd + "/debug/bootstrap?id=" + sf.J + "&src=" + u + "&cond=" + q + "&gtm=" + Vn()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Ub,
                        containerProduct: t,
                        debug: !1,
                        id: sf.J
                    }
                };
                v.data.resume = function() {
                    a()
                };
                sf.Ch && (v.data.initialPublish = !0);
                r.push(v)
            },
            g = void 0,
            h = uj(A.location, "query", !1, void 0, "gtm_debug");
        vv(h) && (g = 2);
        if (!g && I.referrer) {
            var l = wj(I.referrer);
            "tagassistant.google.com" === tj(l, "host") && (g = 3)
        }
        if (!g) {
            var n = Yj("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = I.documentElement.getAttribute("data-tag-assistant-present");
            vv(p) && (g = 5)
        }
        g && Ub ? f(g) : a()
    })(sz);

})()