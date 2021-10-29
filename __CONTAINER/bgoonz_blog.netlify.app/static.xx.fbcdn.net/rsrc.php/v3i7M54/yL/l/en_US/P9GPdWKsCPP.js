if (self.CavalryLogger) {
    CavalryLogger.start_js(["EFdTyN\/"]);
}

__d("GenderConst", [], (function(a, b, c, d, e, f) {
    e.exports = {
        NOT_A_PERSON: 0,
        FEMALE_SINGULAR: 1,
        MALE_SINGULAR: 2,
        FEMALE_SINGULAR_GUESS: 3,
        MALE_SINGULAR_GUESS: 4,
        MIXED_UNKNOWN: 5,
        NEUTER_SINGULAR: 6,
        UNKNOWN_SINGULAR: 7,
        FEMALE_PLURAL: 8,
        MALE_PLURAL: 9,
        NEUTER_PLURAL: 10,
        UNKNOWN_PLURAL: 11
    }
}), null);
__d("IntlVariations", [], (function(a, b, c, d, e, f) {
    e.exports = {
        BITMASK_NUMBER: 28,
        BITMASK_GENDER: 3,
        NUMBER_ZERO: 16,
        NUMBER_ONE: 4,
        NUMBER_TWO: 8,
        NUMBER_FEW: 20,
        NUMBER_MANY: 12,
        NUMBER_OTHER: 24,
        GENDER_MALE: 1,
        GENDER_FEMALE: 2,
        GENDER_UNKNOWN: 3
    }
}), null);
__d("csx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("csx: Unexpected class selector transformation.")
    }
    f["default"] = a
}), 66);
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
__d("InlineFbtResult", ["cr:1183579"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1183579")
}), 98);
__d("FbtReactUtil", [], (function(a, b, c, d, e, f) {
    a = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
    var g = !1;
    b = {
        REACT_ELEMENT_TYPE: a,
        injectReactShim: function(a) {
            var b = {
                validated: !0
            };
            g ? Object.defineProperty(a, "_store", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: b
            }) : a._store = b
        }
    };
    e.exports = b
}), null);
__d("FbtResult", ["FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        return a.content
    };
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            d = a.call(this, c, d) || this;
            d.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
            d.key = null;
            d.ref = null;
            d.type = g;
            d.props = {
                content: c
            };
            return d
        }
        c.get = function(a) {
            return new c(a.contents, a.errorListener)
        };
        return c
    }(b("FbtResultBase"));
    e.exports = a
}), null);
__d("TransAppInlineMode", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        STRING_MANAGER: "STRING_MANAGER",
        TRANSLATION: "TRANSLATION",
        APPROVE: "APPROVE",
        REPORT: "REPORT",
        NO_INLINE: "NO_INLINE"
    });
    f["default"] = a
}), 66);
__d("getUnwrappedFbt", ["FbtResultGK"], (function(a, b, c, d, e, f) {
    function a(a) {
        a = a.contents;
        var c = b("FbtResultGK").inlineMode,
            d = b("FbtResultGK").shouldReturnFbtResult;
        if (!d && c !== "REPORT") return (a == null ? void 0 : a.length) === 1 && typeof a[0] === "string" ? a[0] : a
    }
    e.exports = a
}), null);
__d("getFbtResult", ["FbtResult", "FbtResultGK", "InlineFbtResult", "getUnwrappedFbt", "gkx", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    if (c("gkx")("708253") && c("FbtResultGK").inlineMode === "TRANSLATION") {
        c("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. " + ("[inlineMode=" + ((b = c("FbtResultGK").inlineMode) != null ? b : "") + "]") + ("[runtime_site_is_comet=" + String(c("gkx")("708253")) + "]"), "internationalization")
    }

    function a(a) {
        var b = c("getUnwrappedFbt")(a);
        if (b != null) return b;
        b = a.contents;
        var d = a.patternString,
            e = a.patternHash;
        return c("FbtResultGK").inlineMode != null && c("FbtResultGK").inlineMode !== "NO_INLINE" ? new(c("InlineFbtResult"))(b, c("FbtResultGK").inlineMode, d, e) : c("FbtResult").get(a)
    }
    g["default"] = a
}), 98);
__d("ArbiterMixin", ["Arbiter", "guid"], (function(a, b, c, d, e, f) {
    var g = "arbiter$" + b("guid")(),
        h = Object.prototype.hasOwnProperty;
    a = {
        _getArbiterInstance: function() {
            return h.call(this, g) ? this[g] : this[g] = new(b("Arbiter"))()
        },
        inform: function(a, b, c) {
            return this._getArbiterInstance().inform(a, b, c)
        },
        subscribe: function(a, b, c) {
            return this._getArbiterInstance().subscribe(a, b, c)
        },
        subscribeOnce: function(a, b, c) {
            return this._getArbiterInstance().subscribeOnce(a, b, c)
        },
        unsubscribe: function(a) {
            this._getArbiterInstance().unsubscribe(a)
        },
        unsubscribeCurrentSubscription: function() {
            this._getArbiterInstance().unsubscribeCurrentSubscription()
        },
        releaseCurrentPersistentEvent: function() {
            this._getArbiterInstance().releaseCurrentPersistentEvent()
        },
        registerCallback: function(a, b) {
            return this._getArbiterInstance().registerCallback(a, b)
        },
        query: function(a) {
            return this._getArbiterInstance().query(a)
        }
    };
    e.exports = a
}), null);
__d("AsyncDOM", ["CSS", "DOM", "FBLogger"], (function(a, b, c, d, e, f) {
    a = {
        invoke: function(a, c) {
            for (var d = 0; d < a.length; ++d) {
                var e = a[d],
                    f = e[0],
                    g = e[1],
                    h = e[2];
                e = e[3];
                h = h && c || null;
                g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
                f != "eval" && !h && b("FBLogger")("async_dom").warn("Could not find relativeTo element for %s AsyncDOM operation based on selector: %s", f, g);
                switch (f) {
                    case "eval":
                        new Function(e).apply(h);
                        break;
                    case "hide":
                        b("CSS").hide(h);
                        break;
                    case "show":
                        b("CSS").show(h);
                        break;
                    case "setContent":
                        b("DOM").setContent(h, e);
                        break;
                    case "appendContent":
                        b("DOM").appendContent(h, e);
                        break;
                    case "prependContent":
                        b("DOM").prependContent(h, e);
                        break;
                    case "insertAfter":
                        b("DOM").insertAfter(h, e);
                        break;
                    case "insertBefore":
                        b("DOM").insertBefore(h, e);
                        break;
                    case "remove":
                        b("DOM").remove(h);
                        break;
                    case "replace":
                        b("DOM").replace(h, e);
                        break;
                    default:
                        b("FBLogger")("async_dom").warn("Received invalid command %s for AsyncDOM operation", f)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("AsyncResponse", ["invariant", "Bootloader", "FBLogger", "HTML"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.error = 0, this.errorSummary = null, this.errorDescription = null, this.onload = null, this.replay = !1, this.payload = b, this.request = a, this.silentError = !1, this.transientError = !1, this.blockedAction = !1, this.is_last = !0, this.responseHeaders = null
        }
        var b = a.prototype;
        b.getRequest = function() {
            return this.request
        };
        b.getPayload = function() {
            return this.payload
        };
        b.toError = function() {
            this.error !== 0 || h(0, 5599);
            var a = this.errorSummary || "",
                b = this.getErrorDescriptionString() || "",
                c = new Error(a.toString() + ": " + b);
            Object.assign(c, {
                code: this.error,
                description: this.errorDescription || "",
                descriptionString: b,
                response: this,
                summary: a,
                isSilent: this.silentError,
                isTransient: this.transientError
            });
            return c
        };
        b.getError = function() {
            return this.error
        };
        b.getErrorSummary = function() {
            return this.errorSummary
        };
        b.setErrorSummary = function(a) {
            a = a === void 0 ? null : a;
            this.errorSummary = a;
            return this
        };
        b.getErrorDescription = function() {
            return this.errorDescription
        };
        b.getErrorDescriptionString = function() {
            var a = this.getErrorDescription();
            if (a == null) return null;
            if (c("HTML").isHTML(a)) {
                var b = new(c("HTML"))(a);
                return b.getRootNode().textContent
            }
            return a.toString()
        };
        b.getErrorIsWarning = function() {
            return !!this.errorIsWarning
        };
        b.isSilent = function() {
            return !!this.silentError
        };
        b.isTransient = function() {
            return !!this.transientError
        };
        b.isBlockedAction = function() {
            return !!this.blockedAction
        };
        b.getResponseHeader = function(a) {
            var b = this.responseHeaders;
            if (!b) return null;
            b = b.replace(/^\n/, "");
            a = a.toLowerCase();
            b = b.split("\r\n");
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                    e = d.indexOf(": ");
                if (e <= 0) continue;
                var f = d.substring(0, e).toLowerCase();
                if (f === a) return d.substring(e + 2)
            }
            return null
        };
        a.defaultErrorHandler = function(b) {
            try {
                !b.silentError ? a.verboseErrorHandler(b) : c("FBLogger")("async_response").catching(b.toError()).warn("default error handler called")
            } catch (a) {
                alert(b)
            }
        };
        a.verboseErrorHandler = function(a, b) {
            c("Bootloader").loadModules(["ExceptionDialog"], function(c) {
                return c.showAsyncError(a, b)
            }, "AsyncResponse")
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("Deferred", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    b("Promise").resolve();
    a = function() {
        function a(a) {
            var c = this;
            a = a || b("Promise");
            this.$1 = !1;
            this.$2 = new a(function(a, b) {
                c.$3 = a, c.$4 = b
            })
        }
        var c = a.prototype;
        c.getPromise = function() {
            return this.$2
        };
        c.resolve = function(a) {
            this.$1 = !0, this.$3(a)
        };
        c.reject = function(a) {
            this.$1 = !0, this.$4(a)
        };
        c.isSettled = function() {
            return this.$1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("FetchStreamConfig", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        delim: "/*<!-- fetch-stream -->*/"
    })
}), null);
__d("StreamBlockReader", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            var c = this;
            if (!a.getReader) throw new Error("No getReader method found on given object");
            this.$3 = a.getReader();
            this.$1 = "";
            this.$2 = null;
            this.$4 = !1;
            this.$5 = "utf-8";
            this.$6 = "";
            this.$9 = !1;
            this.$8 = function() {
                return b("Promise").reject("Sorry, you are somehow using this too early.")
            };
            this.$7 = new(b("Promise"))(function(a, b) {
                c.$8 = a
            })
        }
        var c = a.prototype;
        c.changeEncoding = function(a) {
            if (this.$2) throw new Error("Decoder already in use, encoding cannot be changed");
            this.$5 = a
        };
        c.$10 = function() {
            if (!self.TextDecoder) throw new Error("TextDecoder is not supported here");
            this.$2 || (this.$2 = new self.TextDecoder(this.$5));
            return this.$2
        };
        c.$11 = function() {
            if (this.$9) throw new Error("Something else is already reading from this reader");
            this.$9 = !0
        };
        c.$12 = function() {
            this.$9 = !1
        };
        c.isDone = function() {
            return this.$4
        };
        c.$13 = function() {
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (!(this.$6 !== "")) {
                            f.next = 4;
                            break
                        }
                        a = this.$6;
                        this.$6 = "";
                        return f.abrupt("return", a);
                    case 4:
                        if (!this.isDone()) {
                            f.next = 6;
                            break
                        }
                        throw new Error("You cannot read from a stream that is done");
                    case 6:
                        f.next = 8;
                        return b("regeneratorRuntime").awrap(this.$3.read());
                    case 8:
                        c = f.sent;
                        d = c.done;
                        e = c.value;
                        this.$4 = d;
                        d && this.$8();
                        return f.abrupt("return", e ? this.$10().decode(e, {
                            stream: !d
                        }) : "");
                    case 14:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readNextBlock = function() {
            var a;
            return b("regeneratorRuntime").async(function(b) {
                while (1) switch (b.prev = b.next) {
                    case 0:
                        this.$11();
                        a = this.$13();
                        this.$12();
                        return b.abrupt("return", a);
                    case 4:
                    case "end":
                        return b.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrEnd = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]));
                    case 2:
                        return c.abrupt("return", c.sent);
                    case 3:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrThrow = function(a) {
            var c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (a) {
                            f.next = 2;
                            break
                        }
                        throw new Error("cannot read empty string");
                    case 2:
                        this.$11(), c = "", d = 0;
                    case 5:
                        if (this.isDone()) {
                            f.next = 23;
                            break
                        }
                        f.t0 = c;
                        f.next = 9;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 9:
                        c = f.t0 += f.sent;
                        if (!(c.length < a.length)) {
                            f.next = 12;
                            break
                        }
                        return f.abrupt("continue", 5);
                    case 12:
                        e = c.substring(d).indexOf(a);
                        if (!(e !== -1)) {
                            f.next = 20;
                            break
                        }
                        e += d;
                        this.$6 = c.substring(e + a.length);
                        this.$12();
                        return f.abrupt("return", c.substring(0, e));
                    case 20:
                        d = c.length - a.length + 1;
                    case 21:
                        f.next = 5;
                        break;
                    case 23:
                        this.$6 = c;
                        this.$12();
                        throw new Error("Breakpoint not found");
                    case 26:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readUntilOneOfStringOrEnd_DO_NOT_USE = function(a) {
            var c, d, e, f;
            return b("regeneratorRuntime").async(function(g) {
                while (1) switch (g.prev = g.next) {
                    case 0:
                        this.$11(), c = "";
                    case 2:
                        if (this.isDone()) {
                            g.next = 20;
                            break
                        }
                        g.t0 = c;
                        g.next = 6;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 6:
                        c = g.t0 += g.sent, d = 0;
                    case 8:
                        if (!(d < a.length)) {
                            g.next = 18;
                            break
                        }
                        e = a[d];
                        f = c.indexOf(e);
                        if (!(f !== -1)) {
                            g.next = 15;
                            break
                        }
                        this.$6 = c.substring(f + e.length);
                        this.$12();
                        return g.abrupt("return", c.substring(0, f));
                    case 15:
                        d++;
                        g.next = 8;
                        break;
                    case 18:
                        g.next = 2;
                        break;
                    case 20:
                        this.$12();
                        return g.abrupt("return", c);
                    case 22:
                    case "end":
                        return g.stop()
                }
            }, null, this)
        };
        c.waitUntilDone = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", this.$7);
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("mixin", [], (function(a, b, c, d, e, f) {
    function a() {
        var a = function() {},
            b = 0,
            c;
        while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
            c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
            b += 1
        }
        return a
    }
    f["default"] = a
}), 66);
__d("FetchStreamTransport", ["ArbiterMixin", "FBLogger", "FetchStreamConfig", "StreamBlockReader", "TimeSlice", "URI", "mixin", "nullthrows", "regeneratorRuntime"], (function $module_FetchStreamTransport(global, require, importDefault, importNamespace, requireLazy, module, exports) {
    var instance_count = 0,
        FetchStreamTransport = function(_ref) {
            babelHelpers.inheritsLoose(FetchStreamTransport, _ref);

            function FetchStreamTransport(uri) {
                var _this;
                if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder) throw new Error("fetch stream transport is not supported here");
                _this = _ref.call(this) || this;
                _this.$FetchStreamTransport6 = null;
                _this.$FetchStreamTransport1 = uri;
                _this.$FetchStreamTransport3 = !1;
                _this.$FetchStreamTransport4 = !1;
                _this.$FetchStreamTransport5 = !1;
                _this.$FetchStreamTransport2 = ++instance_count;
                return babelHelpers.assertThisInitialized(_this) || babelHelpers.assertThisInitialized(_this)
            }
            var _proto = FetchStreamTransport.prototype;
            _proto.hasFinished = function hasFinished() {
                return this.$FetchStreamTransport5
            };
            _proto.getRequestURI = function getRequestURI() {
                return new(importDefault("URI"))(this.$FetchStreamTransport1).addQueryData({
                    __a: 1,
                    __adt: this.$FetchStreamTransport2,
                    __req: "fetchstream_" + this.$FetchStreamTransport2,
                    ajaxpipe_fetch_stream: 1
                })
            };
            _proto.send = function send() {
                if (this.$FetchStreamTransport3) throw new Error("FetchStreamTransport instances cannot be re-used.");
                this.$FetchStreamTransport3 = !0;
                var req = new Request(this.getRequestURI().toString(), {
                    mode: "same-origin",
                    credentials: "include"
                });
                this.$FetchStreamTransport6 = importDefault("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on first response");
                var fetchPromise = self.fetch(req, {
                    redirect: "follow"
                });
                this.$FetchStreamTransport7(fetchPromise)
            };
            _proto.$FetchStreamTransport7 = function $FetchStreamTransport7(fetchPromise) {
                var _this = this,
                    response, reader, first, _loop, _ret;
                return require("regeneratorRuntime").async(function $FetchStreamTransport7$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return require("regeneratorRuntime").awrap(fetchPromise);
                        case 3:
                            response = _context2.sent;
                            _context2.next = 9;
                            break;
                        case 6:
                            _context2.prev = 6, _context2.t0 = _context2["catch"](0), this.abort();
                        case 9:
                            if (!(!response || !response.body || !response.ok)) {
                                _context2.next = 12;
                                break
                            }
                            this.abort();
                            return _context2.abrupt("return");
                        case 12:
                            reader = new(importDefault("StreamBlockReader"))(response.body), first = !0, _loop = function _loop() {
                                var nextData;
                                return require("regeneratorRuntime").async(function _loop$(_context) {
                                    while (1) switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return require("regeneratorRuntime").awrap(reader.readUntilStringOrEnd(importDefault("FetchStreamConfig").delim));
                                        case 2:
                                            nextData = _context.sent;
                                            if (!_this.$FetchStreamTransport4) {
                                                _context.next = 5;
                                                break
                                            }
                                            return _context.abrupt("return", "break");
                                        case 5:
                                            importDefault("nullthrows")(_this.$FetchStreamTransport6)(function() {
                                                if (first && nextData.startsWith("<")) {
                                                    importDefault("FBLogger")("FetchStreamTransport").mustfix("Endpoint: %s is sending a raw HTML response instead of properly formatted payload", _this.$FetchStreamTransport1.toString());
                                                    var node = document.createElement("div");
                                                    node.innerHTML = nextData;
                                                    var scripts = node.getElementsByTagName("script");
                                                    for (var i = 0; i < scripts.length; i++) eval(scripts[i].innerHTML);
                                                    _this.$FetchStreamTransport5 = !0;
                                                    return
                                                }
                                                first = !1;
                                                var parsedResponse = JSON.parse(nextData);
                                                reader.isDone() || parsedResponse.finished ? _this.$FetchStreamTransport5 = !0 : _this.$FetchStreamTransport6 = importDefault("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on next response");
                                                _this.inform("response", parsedResponse.content)
                                            });
                                        case 6:
                                        case "end":
                                            return _context.stop()
                                    }
                                }, null, this)
                            };
                        case 15:
                            if (!(!this.$FetchStreamTransport5 && !this.$FetchStreamTransport4)) {
                                _context2.next = 23;
                                break
                            }
                            _context2.next = 18;
                            return require("regeneratorRuntime").awrap(_loop());
                        case 18:
                            _ret = _context2.sent;
                            if (!(_ret === "break")) {
                                _context2.next = 21;
                                break
                            }
                            return _context2.abrupt("break", 23);
                        case 21:
                            _context2.next = 15;
                            break;
                        case 23:
                        case "end":
                            return _context2.stop()
                    }
                }, null, this, [
                    [0, 6]
                ])
            };
            _proto.abort = function abort() {
                var _this2 = this;
                if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
                this.$FetchStreamTransport4 = !0;
                this.$FetchStreamTransport5 = !0;
                if (this.$FetchStreamTransport6) {
                    var continuation = this.$FetchStreamTransport6;
                    continuation(function() {
                        _this2.inform("abort")
                    })
                } else this.inform("abort")
            };
            return FetchStreamTransport
        }(importDefault("mixin")(importNamespace("ArbiterMixin")));
    exports["default"] = FetchStreamTransport
}), 98);
__d("HTTPErrors", ["emptyFunction"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return {
            summary: "HTTP Error",
            description: "Unknown HTTP error #" + a
        }
    }
    b = {
        get: a,
        getAll: c("emptyFunction").thatReturns(new Map())
    };
    d = b;
    g["default"] = d
}), 98);
__d("JSONPTransport", ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = 2,
        j = "jsonp",
        k = "iframe";

    function l(a) {
        delete h[a]
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(b, c) {
            var d;
            d = a.call(this) || this;
            d._type = b;
            d._uri = c;
            d._hasResponse = !1;
            h[d.getID()] = babelHelpers.assertThisInitialized(d);
            return d
        }
        var d = c.prototype;
        d.getID = function() {
            return this._id || (this._id = i++)
        };
        d.hasFinished = function() {
            return !(this.getID() in h)
        };
        d.getRequestURI = function() {
            return new(g || (g = b("URI")))(this._uri).addQueryData({
                __a: 1,
                __adt: this.getID(),
                __req: "jsonp_" + this.getID()
            })
        };
        d.getTransportFrame = function() {
            if (this._iframe) return this._iframe;
            var a = "transport_frame_" + this.getID();
            a = b("HTML")('<iframe class="hidden_elem" name="' + a + '" src="javascript:void(0)" />');
            return this._iframe = b("DOM").appendContent(document.body, a)[0]
        };
        d.send = function() {
            this._type === j ? setTimeout(function() {
                b("DOM").appendContent(document.body, b("DOM").create("script", {
                    src: this.getRequestURI().toString(),
                    type: "text/javascript"
                }))
            }.bind(this), 0) : (this.getTransportFrame().onload = this._checkForErrors.bind(this), this.getTransportFrame().src = this.getRequestURI().toString()), this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.createContinuationForFileForm_DO_NOT_USE = function() {
            this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.handleResponse = function(a) {
            var c = this;
            this._continuation(function() {
                c.inform("response", a), c.hasFinished() ? setTimeout(c._cleanup.bind(c), 0) : c._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for next response")
            })
        };
        d.abort = function() {
            if (this._aborted) return;
            this._aborted = !0;
            this._cleanup();
            l(this.getID());
            this.inform("abort")
        };
        d._checkForErrors = function() {
            this._hasResponse || this.abort()
        };
        d._cleanup = function() {
            this._iframe && (b("DOM").remove(this._iframe), this._iframe = null)
        };
        c.respond = function(a, b, c) {
            var d = h[a];
            d && (d._hasResponse = !0, c || l(a), d._type == k && (typeof b === "string" ? b = JSON.parse(b) : b = JSON.parse(JSON.stringify(b))), d.handleResponse(b))
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    a.respond = b("TimeSlice").guard(a.respond, "JSONPTransport.respond", {
        root: !0
    });
    e.exports = a
}), null);
__d("SessionName", ["SessionNameConfig"], (function(a, b, c, d, e, f) {
    e.exports = {
        getName: function() {
            return b("SessionNameConfig").seed
        }
    }
}), null);
__d("bind", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        if (typeof b !== "string") return Function.prototype.bind.apply(b, [a].concat(c));

        function d() {
            var d = c.concat(Array.prototype.slice.call(arguments));
            if (a[b]) return a[b].apply(a, d)
        }
        d.toString = function() {
            return "bound lazily: " + a[b]
        };
        return d
    }
    e.exports = a
}), null);
__d("errorCode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
    }
    f["default"] = a
}), 66);
__d("executeAfter", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return function() {
            a.apply(c || this, arguments), b.apply(c || this, arguments)
        }
    }
    e.exports = a
}), null);
__d("FbtErrorListenerWWW", ["FBLogger", "killswitch"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = a.hash, this.$2 = a.translation
        }
        var b = a.prototype;
        b.onStringSerializationError = function(a) {
            var b = "Context not logged.";
            if (!c("killswitch")("JS_RELIABILITY_FBT_LOGGING")) try {
                var d = JSON.stringify(a);
                d != null && (b = d.substr(0, 250))
            } catch (a) {
                b = a.message
            }
            d = (a == null ? void 0 : (d = a.constructor) == null ? void 0 : d.name) || "";
            c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)', this.$1, this.$2, b, typeof a, d)
        };
        b.onStringMethodUsed = function(a) {
            c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", a)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FbtPureStringResult", ["FbtResult"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("FbtResult"));
    e.exports = a
}), null);
__d("getFbsResult", ["FbtPureStringResult"], (function(a, b, c, d, e, f) {
    function a(a) {
        return new(b("FbtPureStringResult"))(a.contents, a.errorListener)
    }
    e.exports = a
}), null);
__d("getTranslatedInput", [], (function(a, b, c, d, e, f) {
    var g = "B!N@$T",
        h = {};

    function a(a) {
        var b = a.table;
        typeof b === "string" && b.startsWith(g) && (b in h || (h[b] = JSON.parse(b.substring(g.length))), b = h[b]);
        return {
            table: b,
            args: a.args
        }
    }
    f["default"] = a
}), 66);
__d("translationOverrideListener", ["requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("IntlQtEventFalcoEvent").__setRef("translationOverrideListener");

    function a(a) {
        h.onReady(function(b) {
            return b.log(function() {
                return {
                    hash: a
                }
            })
        })
    }
    g["default"] = a
}), 98);
__d("FbtEnv", ["FbtErrorListenerWWW", "FbtHooks", "IntlViewerContext", "getFbsResult", "getFbtResult", "getTranslatedInput", "promiseDone", "requireDeferred", "translationOverrideListener"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = c("requireDeferred")("FbtLogging").__setRef("FbtEnv"),
        j = !1;

    function a() {
        if (j) return;
        j = !0;
        (h || (h = b("FbtHooks"))).register({
            errorListener: function(a) {
                return new(c("FbtErrorListenerWWW"))(a)
            },
            getFbsResult: c("getFbsResult"),
            getFbtResult: c("getFbtResult"),
            getTranslatedInput: c("getTranslatedInput"),
            onTranslationOverride: c("translationOverrideListener"),
            getViewerContext: function() {
                return c("IntlViewerContext")
            },
            logImpression: function(a) {
                return c("promiseDone")(i.load().then(function(b) {
                    return b.logImpression == null ? void 0 : b.logImpression(a)
                }))
            }
        })
    }
    g.setupOnce = a
}), 98);
__d("FbtHooksImpl", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        getErrorListener: function(a) {
            return g.errorListener == null ? void 0 : g.errorListener(a)
        },
        logImpression: function(a) {
            g.logImpression == null ? void 0 : g.logImpression(a)
        },
        onTranslationOverride: function(a) {
            g.onTranslationOverride == null ? void 0 : g.onTranslationOverride(a)
        },
        getFbsResult: function(a) {
            return g.getFbsResult(a)
        },
        getFbtResult: function(a) {
            return g.getFbtResult(a)
        },
        getTranslatedInput: function(a) {
            var b;
            return (b = g.getTranslatedInput == null ? void 0 : g.getTranslatedInput(a)) != null ? b : a
        },
        getViewerContext: function() {
            return g.getViewerContext()
        },
        register: function(a) {
            Object.assign(g, a)
        }
    };
    e.exports = a
}), null);
__d("FbtHooks", ["FbtEnv", "FbtHooksImpl"], (function(a, b, c, d, e, f) {
    e.exports = b("FbtHooksImpl"), b("FbtEnv").setupOnce()
}), null);
__d("FbtTable", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        ARG: {
            INDEX: 0,
            SUBSTITUTION: 1
        },
        access: function(a, b, c) {
            if (c >= b.length) {
                typeof a === "string" || Array.isArray(a) || g(0, 21388, JSON.stringify(a));
                return a
            }
            var d = b[c];
            d = d[h.ARG.INDEX];
            if (d == null) return h.access(a, b, c + 1);
            typeof a !== "string" && !Array.isArray(a) || g(0, 20954, typeof a);
            for (var e = 0; e < d.length; ++e) {
                var f = a[d[e]];
                if (f == null) continue;
                f = h.access(f, b, c + 1);
                if (f != null) return f
            }
            return null
        }
    };
    e.exports = h
}), null);
__d("FbtTableAccessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getEnumResult: function(a) {
            return [
                [a], null
            ]
        },
        getGenderResult: function(a, b, c) {
            return [a, b]
        },
        getNumberResult: function(a, b, c) {
            return [a, b]
        },
        getSubstitution: function(a) {
            return [null, a]
        },
        getPronounResult: function(a) {
            return [
                [a, "*"], null
            ]
        }
    };
    e.exports = a
}), null);
__d("FbtNumberType", ["IntlNumberTypeConfig", "IntlVariations", "createTrustedFunction", "createTrustedScriptWithoutValidation_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    a = c("createTrustedFunction")(c("createTrustedScriptWithoutValidation_DO_NOT_USE")("IntlVariations"), c("createTrustedScriptWithoutValidation_DO_NOT_USE")('"use strict"; return (function(n) {' + c("IntlNumberTypeConfig").impl + "});"))(c("IntlVariations"));
    b = {
        getVariation: a
    };
    d = b;
    g["default"] = d
}), 98);
__d("IntlNumberType", ["FbtNumberType"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        return c("FbtNumberType")
    };
    g.get = a
}), 98);
__d("IntlVariationResolverImpl", ["invariant", "FbtHooks", "IntlNumberType", "IntlVariations"], (function(a, b, c, d, e, f, g) {
    var h, i = "_1";
    a = {
        EXACTLY_ONE: i,
        getNumberVariations: function(a) {
            var c = b("IntlNumberType").get((h || (h = b("FbtHooks"))).getViewerContext().locale).getVariation(a);
            c & b("IntlVariations").BITMASK_NUMBER || g(0, 11647, c, typeof c);
            return a === 1 ? [i, c, "*"] : [c, "*"]
        },
        getGenderVariations: function(a) {
            a & b("IntlVariations").BITMASK_GENDER || g(0, 11648, a, typeof a);
            return [a, "*"]
        }
    };
    e.exports = a
}), null);
__d("IntlVariationResolver", ["IntlVariationResolverImpl"], (function(a, b, c, d, e, f) {
    a = {
        getNumberVariations: function(a) {
            return b("IntlVariationResolverImpl").getNumberVariations(a)
        },
        getGenderVariations: function(a) {
            return b("IntlVariationResolverImpl").getGenderVariations(a)
        }
    };
    e.exports = a
}), null);
__d("NumberFormatConsts", ["NumberFormatConfig"], (function(a, b, c, d, e, f) {
    a = {
        get: function(a) {
            return b("NumberFormatConfig")
        }
    };
    e.exports = a
}), null);
__d("escapeRegex", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }
    e.exports = a
}), null);
__d("intlNumUtils", ["FbtHooks", "NumberFormatConsts", "escapeRegex"], (function(a, b, c, d, e, f) {
    var g, h = 3;
    f = ["\u0433\u0440\u043d.", "\u0434\u0435\u043d.", "\u043b\u0432.", "\u043c\u0430\u043d.", "\u0564\u0580.", "\u062c.\u0645.", "\u062f.\u0625.", "\u062f.\u0627.", "\u062f.\u0628.", "\u062f.\u062a.", "\u062f.\u062c.", "\u062f.\u0639.", "\u062f.\u0643.", "\u062f.\u0644.", "\u062f.\u0645.", "\u0631.\u0633.", "\u0631.\u0639.", "\u0631.\u0642.", "\u0631.\u064a.", "\u0644.\u0633.", "\u0644.\u0644.", "\u0783.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."];
    var i = {};

    function j(a) {
        i[a] || (i[a] = new RegExp(a, "i"));
        return i[a]
    }
    var k = j(f.reduce(function(a, c, d) {
        return a + (d ? "|" : "") + "(" + b("escapeRegex")(c) + ")"
    }, ""));

    function l(a, c, d, e, f, g, i) {
        d === void 0 && (d = "");
        e === void 0 && (e = ".");
        f === void 0 && (f = 0);
        g === void 0 && (g = {
            primaryGroupSize: h,
            secondaryGroupSize: h
        });
        var k = g.primaryGroupSize || h;
        g = g.secondaryGroupSize || k;
        i = i && i.digits;
        var l;
        c == null ? l = a.toString() : typeof a === "string" ? l = r(a, c) : l = p(a, c);
        a = l.split(".");
        c = a[0];
        l = a[1];
        if (Math.abs(parseInt(c, 10)).toString().length >= f) {
            a = "$1" + d + "$2$3";
            f = "(\\d)(\\d{" + (k - 0) + "})($|\\D)";
            k = c.replace(j(f), a);
            if (k != c) {
                c = k;
                f = "(\\d)(\\d{" + (g - 0) + "})(" + b("escapeRegex")(d) + ")";
                g = j(f);
                while ((k = c.replace(g, a)) != c) c = k
            }
        }
        i != null && (c = m(c, i), l = l && m(l, i));
        d = c;
        l && (d += e + l);
        return d
    }

    function m(a, b) {
        var c = "";
        for (var d = 0; d < a.length; ++d) {
            var e = b[a.charCodeAt(d) - 48];
            c += e !== void 0 ? e : a[d]
        }
        return c
    }

    function a(a, c) {
        var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return l(a, c, "", d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function n(a, c) {
        var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return l(a, c, d.numberDelimiter, d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function o(a) {
        return a && Math.floor(Math.log10(Math.abs(a)))
    }

    function c(a, b, c) {
        var d = o(a),
            e = a;
        d < c && (e = a * Math.pow(10, -d + c));
        a = Math.pow(10, o(e) - c + 1);
        e = Math.round(e / a) * a;
        if (d < c) {
            e /= Math.pow(10, -d + c);
            if (b == null) return n(e, c - d - 1)
        }
        return n(e, b)
    }

    function p(a, b) {
        b = b == null ? 0 : b;
        var c = Math.pow(10, b);
        a = a;
        a = Math.round(a * c) / c;
        a += "";
        if (!b) return a;
        if (a.indexOf("e-") !== -1) return a;
        c = a.indexOf(".");
        var d;
        c == -1 ? (a += ".", d = b) : d = b - (a.length - c - 1);
        for (var b = 0, c = d; b < c; b++) a += "0";
        return a
    }
    var q = function(a, b) {
        a = a;
        for (var c = 0; c < b; c++) a += "0";
        return a
    };

    function r(a, b) {
        var c = a.indexOf("."),
            d = c === -1 ? a : a.slice(0, c);
        a = c === -1 ? "" : a.slice(c + 1);
        return b != null ? d + "." + q(a.slice(0, b), b - a.length) : d
    }

    function s(a, c, d) {
        d === void 0 && (d = "");
        var e = u(),
            f = a;
        e && (f = a.split("").map(function(a) {
            return e[a] || a
        }).join("").trim());
        f = f.replace(/^[^\d]*\-/, "\x02");
        f = f.replace(k, "");
        a = b("escapeRegex")(c);
        c = b("escapeRegex")(d);
        d = j("^[^\\d]*\\d.*" + a + ".*\\d[^\\d]*$");
        if (!d.test(f)) {
            d = j("(^[^\\d]*)" + a + "(\\d*[^\\d]*$)");
            if (d.test(f)) {
                f = f.replace(d, "$1\x01$2");
                return t(f)
            }
            d = j("^[^\\d]*[\\d " + b("escapeRegex")(c) + "]*[^\\d]*$");
            d.test(f) || (f = "");
            return t(f)
        }
        d = j("(^[^\\d]*[\\d " + c + "]*)" + a + "(\\d*[^\\d]*$)");
        f = d.test(f) ? f.replace(d, "$1\x01$2") : "";
        return t(f)
    }

    function t(a) {
        a = a.replace(/[^0-9\u0001\u0002]/g, "").replace("\x01", ".").replace("\x02", "-");
        var b = Number(a);
        return a === "" || isNaN(b) ? null : b
    }

    function u() {
        var a = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale),
            c = {};
        a = a.numberingSystemData && a.numberingSystemData.digits;
        if (a == null) return null;
        for (var d = 0; d < a.length; d++) c[a.charAt(d)] = d.toString();
        return c
    }

    function d(a) {
        var c = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return s(a, c.decimalSeparator || ".", c.numberDelimiter)
    }
    var v = {
        formatNumber: a,
        formatNumberRaw: l,
        formatNumberWithThousandDelimiters: n,
        formatNumberWithLimitedSigFig: c,
        parseNumber: d,
        parseNumberRaw: s,
        truncateLongNumber: r,
        getFloatString: function(a, b, c) {
            a = String(a);
            a = a.split(".");
            b = v.getIntegerString(a[0], b);
            return a.length === 1 ? b : b + c + a[1]
        },
        getIntegerString: function(a, b) {
            b = b;
            b === "" && (b = ",");
            a = String(a);
            var c = /(\d+)(\d{3})/;
            while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
            return a
        }
    };
    e.exports = v
}), null);
__d("IntlPhonologicalRewrites", ["IntlPhonologicalRules"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        get: function(a) {
            return b("IntlPhonologicalRules")
        }
    };
    e.exports = a
}), null);
__d("IntlRedundantStops", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        equivalencies: {
            ".": ["\u0964", "\u104b", "\u3002"],
            "\u2026": ["\u0e2f", "\u0eaf", "\u1801"],
            "!": ["\uff01"],
            "?": ["\uff1f"]
        },
        redundancies: {
            "?": ["?", ".", "!", "\u2026"],
            "!": ["!", "?", "."],
            ".": [".", "!"],
            "\u2026": ["\u2026", ".", "!"]
        }
    })
}), null);
__d("IntlPunctuation", ["FbtHooks", "IntlPhonologicalRewrites", "IntlRedundantStops"], (function(a, b, c, d, e, f, g) {
    d = "[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";
    var h = {};

    function i(a) {
        var b;
        b = (b = a) != null ? b : "";
        var c = h[b];
        c == null && (c = h[b] = j(a));
        return c
    }

    function j(a) {
        var b = [];
        a = c("IntlPhonologicalRewrites").get(a);
        for (var d in a.patterns) {
            var e = a.patterns[d];
            for (var f in a.meta) {
                var g = new RegExp(f.slice(1, -1), "g"),
                    h = a.meta[f];
                d = d.replace(g, h);
                e = e.replace(g, h)
            }
            e === "javascript" && (e = function(a) {
                return a.slice(1).toLowerCase()
            });
            b.push([new RegExp(d.slice(1, -1), "g"), e])
        }
        return b
    }

    function a(a) {
        var b = i(c("FbtHooks").getViewerContext().locale);
        a = a;
        for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = e[0];
            e = e[1];
            a = a.replace(f, e)
        }
        return a.replace(/\x01/g, "")
    }
    var k = new Map();
    for (var l in c("IntlRedundantStops").equivalencies)
        for (var e = [l].concat(c("IntlRedundantStops").equivalencies[l]), f = Array.isArray(e), m = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var n;
            if (f) {
                if (m >= e.length) break;
                n = e[m++]
            } else {
                m = e.next();
                if (m.done) break;
                n = m.value
            }
            n = n;
            k.set(n, l)
        }
    var o = new Map();
    for (var p in c("IntlRedundantStops").redundancies) o.set(p, new Set(c("IntlRedundantStops").redundancies[p]));

    function q(a, b) {
        a = k.get(a);
        b = k.get(b);
        return ((a = o.get(a)) == null ? void 0 : a.has(b)) === !0
    }

    function b(a, b) {
        return q(a[a.length - 1], b) ? "" : b
    }
    g.PUNCT_CHAR_CLASS = d;
    g.applyPhonologicalRules = a;
    g.dedupeStops = b
}), 98);
__d("substituteTokens", ["invariant", "IntlPunctuation"], (function(a, b, c, d, e, f, g, h) {
    var i = new RegExp("\\{([^}]+)\\}(" + d("IntlPunctuation").PUNCT_CHAR_CLASS + "*)", "g");

    function j(a) {
        return a
    }

    function a(a, b) {
        if (b == null) return a;
        typeof b === "object" || h(0, 6041, a);
        var c = [],
            e = [];
        a = a.replace(i, function(a, f, g) {
            a = b[f];
            if (a != null && typeof a === "object") {
                c.push(a);
                e.push(f);
                return "\x17" + g
            } else if (a === null) return "";
            return String(a) + d("IntlPunctuation").dedupeStops(String(a), g)
        }).split("\x17").map(d("IntlPunctuation").applyPhonologicalRules);
        if (a.length === 1) return a[0];
        var f = a[0] !== "" ? [a[0]] : [];
        for (var g = 0; g < c.length; g++) f.push(j(c[g])), a[g + 1] !== "" && f.push(a[g + 1]);
        return f
    }
    f.exports = a
}), 34);
__d("fbt", ["invariant", "FbtEnv", "FbtHooks", "FbtQTOverrides", "FbtResultBase", "FbtTable", "FbtTableAccessor", "GenderConst", "IntlVariationResolver", "intlNumUtils", "substituteTokens"], (function(a, b, c, d, e, f, g) {
    var h;
    b("FbtEnv").setupOnce();
    var i = b("FbtQTOverrides").overrides,
        j = b("IntlVariationResolver").getGenderVariations,
        k = b("IntlVariationResolver").getNumberVariations,
        l = !1,
        m = b("FbtTable").ARG,
        n = {
            number: 0,
            gender: 1
        },
        o = {
            object: 0,
            possessive: 1,
            reflexive: 2,
            subject: 3
        },
        p = {};

    function a(a, c, d) {
        if (((d == null ? void 0 : d.hk) || (d == null ? void 0 : d.ehk)) && l) return {
            text: a,
            fbt: !0,
            hashKey: d.hk
        };
        a = (h || (h = b("FbtHooks"))).getTranslatedInput({
            table: a,
            args: c,
            options: d
        });
        c = a.table;
        d = a.args;
        a = {};
        if (c.__vcg != null) {
            d = d || [];
            var e = (h || (h = b("FbtHooks"))).getViewerContext();
            e = e.GENDER;
            var f = j(e);
            d.unshift(b("FbtTableAccessor").getGenderResult(f, null, e))
        }
        d && (typeof c !== "string" && (c = b("FbtTable").access(c, d, 0)), a = Object.assign.apply(Object, [{}].concat(d.map(function(a) {
            return a[m.SUBSTITUTION] || {}
        }))), c !== null || g(0, 479));
        var k;
        if (Array.isArray(c)) {
            f = c[0];
            k = c[1];
            e = "1_" + k;
            i[e] != null && i[e] !== "" && (f = i[e], (h || (h = b("FbtHooks"))).onTranslationOverride(k));
            (h || (h = b("FbtHooks"))).logImpression(k)
        } else if (typeof c === "string") f = c;
        else throw new Error("Table access did not result in string: " + (c === void 0 ? "undefined" : JSON.stringify(c)) + ", Type: " + typeof c);
        d = p[f];
        e = q(a);
        if (d && !e) return d;
        else {
            c = b("substituteTokens")(f, a);
            d = this._wrapContent(c, f, k);
            e || (p[f] = d);
            return d
        }
    }

    function q(a) {
        for (var b in a) return !0;
        return !1
    }

    function c(a, c) {
        return b("FbtTableAccessor").getEnumResult(a)
    }

    function d(a) {
        return b("FbtTableAccessor").getGenderResult(j(a), null, a)
    }

    function f(a, c, d) {
        var e;
        e = (e = {}, e[a] = c, e);
        if (d)
            if (d[0] === n.number) {
                var f = d.length > 1 ? d[1] : c;
                typeof f === "number" || g(0, 484);
                var h = k(f);
                typeof c === "number" && (e[a] = b("intlNumUtils").formatNumberWithThousandDelimiters(c));
                return b("FbtTableAccessor").getNumberResult(h, e, f)
            } else if (d[0] === n.gender) {
            a = d[1];
            a != null || g(0, 485);
            return b("FbtTableAccessor").getGenderResult(j(a), e, a)
        } else g(0, 486);
        else return b("FbtTableAccessor").getSubstitution(e)
    }

    function r(a, b, c) {
        return this._param(a, b, c)
    }

    function s(a, c, d) {
        var e = k(a),
            f = {};
        c && (typeof d === "number" ? f[c] = b("intlNumUtils").formatNumberWithThousandDelimiters(d) : f[c] = d || b("intlNumUtils").formatNumberWithThousandDelimiters(a));
        return b("FbtTableAccessor").getNumberResult(e, f, a)
    }

    function t(a, c, d) {
        c !== b("GenderConst").NOT_A_PERSON || !d || !d.human || g(0, 11835);
        d = u(a, c);
        return b("FbtTableAccessor").getPronounResult(d)
    }

    function u(a, c) {
        switch (c) {
            case b("GenderConst").NOT_A_PERSON:
                return a === o.object || a === o.reflexive ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").FEMALE_SINGULAR:
            case b("GenderConst").FEMALE_SINGULAR_GUESS:
                return b("GenderConst").FEMALE_SINGULAR;
            case b("GenderConst").MALE_SINGULAR:
            case b("GenderConst").MALE_SINGULAR_GUESS:
                return b("GenderConst").MALE_SINGULAR;
            case b("GenderConst").MIXED_UNKNOWN:
            case b("GenderConst").FEMALE_PLURAL:
            case b("GenderConst").MALE_PLURAL:
            case b("GenderConst").NEUTER_PLURAL:
            case b("GenderConst").UNKNOWN_PLURAL:
                return b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").NEUTER_SINGULAR:
            case b("GenderConst").UNKNOWN_SINGULAR:
                return a === o.reflexive ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL
        }
        return b("GenderConst").NOT_A_PERSON
    }

    function v(a, c, d) {
        var e = j(d),
            f = {};
        f[a] = c;
        return b("FbtTableAccessor").getGenderResult(e, f, d)
    }

    function w(a, c, d) {
        a = typeof a === "string" ? [a] : a;
        var e = (h || (h = b("FbtHooks"))).getErrorListener({
            translation: c,
            hash: d
        });
        a = h.getFbtResult({
            contents: a,
            errorListener: e,
            patternHash: d,
            patternString: c
        });
        return a
    }

    function x() {
        l = !0
    }

    function y() {
        l = !1
    }

    function z(a) {
        return a instanceof b("FbtResultBase")
    }
    var A = function() {};
    A._ = a;
    A._enum = c;
    A._implicitParam = r;
    A._name = v;
    A._param = f;
    A._plural = s;
    A._pronoun = t;
    A._subject = d;
    A._wrapContent = w;
    A.disableJsonExportMode = y;
    A.enableJsonExportMode = x;
    A.isFbtInstance = z;
    e.exports = A
}), null);
__d("getAsyncHeaders", ["LSD", "ZeroCategoryHeader", "isFacebookURI", "killswitch"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = {},
            d = c("isFacebookURI")(a);
        d && c("ZeroCategoryHeader").value && (b[c("ZeroCategoryHeader").header] = c("ZeroCategoryHeader").value);
        d = h(a);
        d && (b["X-FB-LSD"] = d);
        return b
    }

    function h(a) {
        if (c("killswitch")("SAF_JS_FB_X_LSD_HEADER")) return null;
        return !a.toString().startsWith("/") && a.getOrigin() !== document.location.origin ? null : c("LSD").token
    }
    g["default"] = a
}), 98);
__d("isBulletinDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)bulletin\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("orEmptyArray", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return (a = a) != null ? a : []
    }
    f["default"] = a
}), 66);
__d("AsyncRequest", ["errorCode", "fbt", "invariant", "Arbiter", "AsyncDOM", "AsyncRequestConfig", "AsyncResponse", "Bootloader", "CSS", "DTSG", "DTSG_ASYNC", "Deferred", "Env", "ErrorGuard", "Event", "FBLogger", "FetchStreamTransport", "HTTPErrors", "HasteResponse", "JSCC", "PHPQuerySerializer", "Parent", "Promise", "ResourceTimingsStore", "ResourceTypes", "ServerJS", "SessionName", "TimeSlice", "URI", "UserAgent_DEPRECATED", "ZeroRewrites", "bind", "clearTimeout", "emptyFunction", "evalGlobal", "executeAfter", "fb-error", "ge", "getAsyncHeaders", "getAsyncParams", "gkx", "goURI", "isBulletinDotComURI", "isEmpty", "isFacebookURI", "isInternalFBURI", "isMessengerDotComURI", "isWorkplaceDotComURI", "killswitch", "orEmptyArray", "performanceAbsoluteNow", "promiseDone", "replaceTransportMarkers", "setTimeout", "setTimeoutAcrossTransitions"], (function $module_AsyncRequest(global, require, importDefault, importNamespace, requireLazy, module, exports, errorCode, fbt, invariant) {
    "use strict";
    var nineteenSecInMs = 19e3,
        INTERNAL_SERVER_ERROR = 500,
        NO_NETWORK_CONNECTION = 1006,
        NETWORK_ERROR = 1004,
        ABORTED_DUE_TO_PAGE_TRANSITION = 1010,
        WARNING_ERROR_CODES = new Set([INTERNAL_SERVER_ERROR, ABORTED_DUE_TO_PAGE_TRANSITION, NETWORK_ERROR, NO_NETWORK_CONNECTION]);

    function hasUnloaded() {
        try {
            return !window.domready
        } catch (_unused) {
            return !0
        }
    }

    function supportsProgress(transport) {
        return "onprogress" in transport
    }

    function supportsUploadProgress(transport) {
        return "upload" in transport && "onprogress" in transport.upload
    }

    function supportsCrossOrigin(transport) {
        return "withCredentials" in transport
    }

    function isNetworkError(transport) {
        return transport.status in {
            0: 1,
            12029: 1,
            12030: 1,
            12031: 1,
            12152: 1
        }
    }

    function validateResponseHandler(handler) {
        var valid = !handler || typeof handler === "function";
        valid || importDefault("FBLogger")("asyncresponse").mustfix("AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.");
        return valid
    }
    var last_id = 2,
        id_threshold = last_id,
        ignore_id_update = !1;
    importDefault("Arbiter").subscribe("page_transition", function(_, message) {
        !ignore_id_update ? id_threshold = message.id : ignore_id_update = !1
    });
    var JSON_HIJACKING_SHIELD = "for (;;);",
        JSON_HIJACKING_SHIELD_LEN = JSON_HIJACKING_SHIELD.length,
        AsyncRequest = function() {
            function AsyncRequest(uri) {
                var _this = this;
                this._allowIrrelevantRequests = !1;
                this._delayPreDisplayJS = !1;
                this._shouldReplaceTransportMarkers = !1;
                this._dispatchErrorResponse = function(asyncResponse, errorHandler) {
                    var error = asyncResponse.getError();
                    _this.clearStatusIndicator();
                    if (!_this._isRelevant() || error === ABORTED_DUE_TO_PAGE_TRANSITION) {
                        _this.abort();
                        return
                    }
                    if (_this._isServerDialogErrorCode(error)) {
                        var is_confirmation = error == 1357008 || error == 1357007;
                        _this.interceptHandler(asyncResponse);
                        error == 1357041 ? _this._solveQuicksandChallenge(asyncResponse) : error == 1357007 ? _this._displayServerDialog(asyncResponse, is_confirmation, !0) : _this._displayServerDialog(asyncResponse, is_confirmation)
                    } else if (_this.initialHandler(asyncResponse) !== !1) {
                        importDefault("clearTimeout")(_this.timer);
                        try {
                            errorHandler(asyncResponse)
                        } catch (e) {
                            _this.finallyHandler(asyncResponse);
                            throw e
                        }
                        _this.finallyHandler(asyncResponse)
                    }
                };
                this._onStateChange = function() {
                    var transport = _this.transport;
                    if (!transport) return;
                    try {
                        AsyncRequest._inflightCount--;
                        importNamespace("ResourceTimingsStore").measureResponseReceived(importDefault("ResourceTypes").XHR, _this.resourceTimingStoreUID);
                        try {
                            transport.getResponseHeader("X-FB-Debug") && (_this._xFbServer = transport.getResponseHeader("X-FB-Debug"), importDefault("fb-error").ErrorXFBDebug.add(_this._xFbServer))
                        } catch (_unused2) {}
                        if (transport.status >= 200 && transport.status < 300) AsyncRequest.lastSuccessTime = Date.now(), _this._handleXHRResponse(transport);
                        else if (importNamespace("UserAgent_DEPRECATED").webkit() && typeof transport.status === "undefined") _this._invokeErrorHandler(1002);
                        else if (importDefault("AsyncRequestConfig").retryOnNetworkError && isNetworkError(transport) && _this.remainingRetries > 0 && !_this._requestTimeout) {
                            _this.remainingRetries--;
                            delete _this.transport;
                            _this.send(!0);
                            return
                        } else _this._invokeErrorHandler();
                        _this.getOption("asynchronous_DEPRECATED") !== !1 && delete _this.transport
                    } catch (exception) {
                        if (hasUnloaded()) return;
                        delete _this.transport;
                        _this.remainingRetries > 0 ? (_this.remainingRetries--, _this.send(!0)) : (_this.getOption("suppressErrorAlerts") || importDefault("FBLogger")("AsyncRequest").catching(exception).mustfix("AsyncRequest exception when attempting to handle a state change"), _this._invokeErrorHandler(1007))
                    }
                };
                this.continuation = importDefault("TimeSlice").getPlaceholderReusableContinuation();
                this.transport = null;
                this.method = "POST";
                this.uri = "";
                this.timeout = null;
                this.timer = null;
                this.initialHandler = importDefault("emptyFunction");
                this.handler = null;
                this.uploadProgressHandler = null;
                this.errorHandler = importDefault("AsyncResponse").defaultErrorHandler;
                this.transportErrorHandler = null;
                this.timeoutHandler = null;
                this.interceptHandler = importDefault("emptyFunction");
                this.finallyHandler = importDefault("emptyFunction");
                this.abortHandler = importDefault("emptyFunction");
                this.serverDialogCancelHandler = null;
                this.relativeTo = null;
                this.statusElement = null;
                this.statusClass = "";
                this.data = {};
                this.headers = {};
                this.file = null;
                this.context = {};
                this.readOnly = !1;
                this.writeRequiredParams = [];
                this.remainingRetries = 0;
                this.userActionID = "-";
                this.resourceTimingStoreUID = importNamespace("ResourceTimingsStore").getUID(importDefault("ResourceTypes").XHR, uri != null ? uri.toString() : "");
                this.flushedResponseTextParseIndex = 0;
                this.option = {
                    asynchronous_DEPRECATED: !0,
                    suppressErrorHandlerWarning: !1,
                    suppressEvaluation: !1,
                    suppressErrorAlerts: !1,
                    retries: 0,
                    jsonp: !1,
                    bundle: !1,
                    useIframeTransport: !1,
                    handleErrorAfterUnload: !1,
                    useFetchWithIframeFallback: !1
                };
                this.transportErrorHandler = importDefault("bind")(this, "errorHandler");
                uri !== void 0 && this.setURI(uri);
                this.setAllowCrossPageTransition(importDefault("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault || !1)
            }
            var _proto = AsyncRequest.prototype;
            _proto._dispatchResponse = function _dispatchResponse(asyncResponse) {
                this.clearStatusIndicator();
                if (!this._isRelevant()) {
                    this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                    return
                }
                if (this.initialHandler(asyncResponse) === !1) return;
                importDefault("clearTimeout")(this.timer);
                if (asyncResponse.jscc_map) {
                    var jsccMap = importNamespace("JSCC").parse(asyncResponse.jscc_map);
                    importNamespace("JSCC").init(jsccMap)
                }
                var suppress_js, handler = this.getHandler();
                if (handler) try {
                    suppress_js = this._shouldSuppressJS(handler(asyncResponse))
                } catch (e) {
                    asyncResponse.is_last && this.finallyHandler(asyncResponse);
                    throw e
                }
                suppress_js || this._handleJSResponse(asyncResponse);
                asyncResponse.is_last && this.finallyHandler(asyncResponse)
            };
            _proto._shouldSuppressJS = function _shouldSuppressJS(handler_return_value) {
                return handler_return_value === AsyncRequest.suppressOnloadToken
            };
            _proto._handlePreDisplayServerJS = function _handlePreDisplayServerJS(serverJS, preDisplayJSMods) {
                var _displayStarted = !1,
                    preDisplayPromises = [],
                    registerToBlockDisplayUntilDone_DONOTUSE = function registerToBlockDisplayUntilDone_DONOTUSE() {
                        if (_displayStarted) {
                            importDefault("FBLogger")("AsyncResponse").warn("registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.");
                            return function() {}
                        }
                        var timeoutId, deferrable = new(importDefault("Deferred"))();
                        preDisplayPromises.push(deferrable.getPromise());
                        return importDefault("TimeSlice").guard(function() {
                            timeoutId && importDefault("clearTimeout")(timeoutId), deferrable.resolve()
                        }, "AsyncRequestDisplayBlockingEvent", {
                            propagationType: importDefault("TimeSlice").PropagationType.EXECUTION
                        })
                    };
                serverJS.handle(preDisplayJSMods, {
                    bigPipeContext: {
                        registerToBlockDisplayUntilDone_DONOTUSE: registerToBlockDisplayUntilDone_DONOTUSE
                    }
                });
                _displayStarted = !0;
                return preDisplayPromises
            };
            _proto._hasEvalDomOp = function _hasEvalDomOp(domOps) {
                return domOps && domOps.length ? domOps.some(function(op) {
                    return op[0] === "eval"
                }) : !1
            };
            _proto._handleJSResponse = function _handleJSResponse(asyncResponse) {
                var relativeTo = this.getRelativeTo(),
                    domOps = asyncResponse.domops,
                    dtsgToken = asyncResponse.dtsgToken,
                    dtsgAsyncGetToken = asyncResponse.dtsgAsyncGetToken,
                    jsMods = asyncResponse.jsmods,
                    serverJS, savedServerJSInstance = asyncResponse.savedServerJSInstance;
                savedServerJSInstance && savedServerJSInstance instanceof importDefault("ServerJS") ? serverJS = savedServerJSInstance : serverJS = new(importDefault("ServerJS"))();
                serverJS.setRelativeTo(relativeTo);
                if (jsMods) {
                    var preDisplayJSMods = {
                        define: jsMods.define,
                        instances: jsMods.instances,
                        markup: jsMods.markup
                    };
                    delete jsMods.define;
                    delete jsMods.instances;
                    delete jsMods.markup;
                    this._hasEvalDomOp(domOps) && (preDisplayJSMods.elements = jsMods.elements, delete jsMods.elements);
                    serverJS.handle(preDisplayJSMods)
                }
                var parsedUri = new(importDefault("URI"))(this.uri);
                (!parsedUri.getDomain() && !parsedUri.getProtocol() || document.location.origin === parsedUri.getOrigin()) && (dtsgToken && importNamespace("DTSG").setToken(dtsgToken), dtsgAsyncGetToken && importNamespace("DTSG_ASYNC").setToken(dtsgAsyncGetToken));
                domOps && importDefault("ErrorGuard").applyWithGuard(function() {
                    return importNamespace("AsyncDOM").invoke(domOps, relativeTo)
                }, null, [], {
                    errorType: "warn"
                });
                jsMods && serverJS.handle(jsMods);
                this._handleJSRegisters(asyncResponse, "onload");
                this._handleJSRegisters(asyncResponse, "onafterload")
            };
            _proto._handleJSRegisters = function _handleJSRegisters(asyncResponse, phase) {
                var registers = asyncResponse[phase];
                if (registers)
                    for (var ii = 0; ii < registers.length; ii++) importDefault("ErrorGuard").applyWithGuard(new Function(registers[ii]), this, [])
            };
            _proto.invokeResponseHandler = function invokeResponseHandler(interpreted) {
                if (typeof interpreted.redirect !== "undefined") {
                    importDefault("setTimeout")(function() {
                        this.setURI(interpreted.redirect, !0).send()
                    }.bind(this), 0);
                    return
                }
                if (interpreted.bootloadOnly !== void 0) {
                    var toBootload = typeof interpreted.bootloadOnly === "string" ? JSON.parse(interpreted.bootloadOnly) : interpreted.bootloadOnly,
                        _loop = function _loop() {
                            if (_isArray) {
                                if (_i >= _iterator.length) return "break";
                                _ref = _iterator[_i++]
                            } else {
                                _i = _iterator.next();
                                if (_i.done) return "break";
                                _ref = _i.value
                            }
                            var rsrcs = _ref;
                            importDefault("TimeSlice").guard(function() {
                                importDefault("Bootloader").loadPredictedResourceMap(rsrcs)
                            }, "Bootloader.loadPredictedResourceMap", {
                                root: !0
                            })()
                        };
                    for (var _iterator = toBootload, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var _ref, _ret = _loop();
                        if (_ret === "break") break
                    }
                    return
                }
                if (!this.handler && !this.errorHandler && !this.transportErrorHandler && !this.preBootloadHandler && this.initialHandler === importDefault("emptyFunction") && this.finallyHandler === importDefault("emptyFunction")) return;
                var response = interpreted.asyncResponse;
                if (typeof response !== "undefined") {
                    var _response$hsrp;
                    if (!this._isRelevant()) {
                        this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                        return
                    }
                    response.inlinejs && importDefault("evalGlobal")(response.inlinejs);
                    response.lid && (this._responseTime = Date.now(), global.CavalryLogger && (this.cavalry = global.CavalryLogger.getInstance(response.lid)), this.lid = response.lid);
                    importNamespace("HasteResponse").handleSRPayload((_response$hsrp = response.hsrp) != null ? _response$hsrp : {});
                    var dispatch, arbiter_event;
                    if (response.getError() && !response.getErrorIsWarning()) {
                        var handler = this.getErrorHandler().bind(this);
                        dispatch = importDefault("ErrorGuard").guard(this._dispatchErrorResponse, {
                            name: "AsyncRequest#_dispatchErrorResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response, handler);
                        arbiter_event = "error"
                    } else {
                        dispatch = importDefault("ErrorGuard").guard(this._dispatchResponse.bind(this), {
                            name: "AsyncRequest#_dispatchResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response);
                        arbiter_event = "response";
                        var domOps = response.domops;
                        if (!this._delayPreDisplayJS && response.jsmods && response.jsmods.pre_display_requires && !this._hasEvalDomOp(domOps) && !importDefault("killswitch")("ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS")) {
                            var jsMods = response.jsmods,
                                preDisplayJSMods = {
                                    define: jsMods.define,
                                    instances: jsMods.instances,
                                    markup: jsMods.markup
                                };
                            delete jsMods.define;
                            delete jsMods.instances;
                            delete jsMods.markup;
                            preDisplayJSMods.pre_display_requires = jsMods.pre_display_requires;
                            delete jsMods.pre_display_requires;
                            var serverJS = new(importDefault("ServerJS"))();
                            serverJS.setRelativeTo(this.getRelativeTo());
                            response.savedServerJSInstance = serverJS;
                            var preDisplayPromises = this._handlePreDisplayServerJS(serverJS, preDisplayJSMods);
                            if (preDisplayPromises && preDisplayPromises.length) {
                                var realDispatch = dispatch;
                                dispatch = function dispatch() {
                                    importDefault("promiseDone")(require("Promise").all(preDisplayPromises).then(realDispatch))
                                }
                            }
                        }
                    }
                    var ts = importDefault("performanceAbsoluteNow")();
                    dispatch = importDefault("executeAfter")(dispatch, function() {
                        importDefault("Arbiter").inform("AsyncRequest/" + arbiter_event, {
                            request: this,
                            response: response,
                            ts: ts
                        })
                    }.bind(this));
                    this.preBootloadHandler && this.preBootloadHandler(response);
                    importDefault("Bootloader").loadResources(importDefault("orEmptyArray")(response.allResources), {
                        onAll: importDefault("AsyncRequestConfig").immediateDispatch ? dispatch : function() {
                            importDefault("setTimeout")(dispatch, 0)
                        }
                    }, this.getURI())
                } else typeof interpreted.transportError !== "undefined" ? this._xFbServer ? this._invokeErrorHandler(1008) : this._invokeErrorHandler(1012) : this._invokeErrorHandler(1007)
            };
            _proto._invokeErrorHandler = function _invokeErrorHandler(explicitError) {
                var transport = this.transport;
                if (!transport) return;
                var error;
                if (this.responseText === "") error = 1002;
                else if (this._requestAborted) error = 1011;
                else {
                    try {
                        error = explicitError || transport.status || NETWORK_ERROR
                    } catch (_unused3) {
                        error = 1005
                    }!1 === navigator.onLine && (error = NO_NETWORK_CONNECTION)
                }
                var desc, summary, silent = !0;
                if (error === NO_NETWORK_CONNECTION) summary = fbt._( /*FBT_CALL*/ "No Network Connection" /*FBT_CALL*/ ), desc = fbt._( /*FBT_CALL*/ "Your browser appears to be offline. Please check your internet connection and try again." /*FBT_CALL*/ );
                else if (error >= 300 && error <= 399) {
                    summary = fbt._( /*FBT_CALL*/ "Redirection" /*FBT_CALL*/ );
                    desc = fbt._( /*FBT_CALL*/ "Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload." /*FBT_CALL*/ );
                    var location = transport.getResponseHeader("Location");
                    location && importDefault("goURI")(location, !0);
                    silent = !0
                } else summary = fbt._( /*FBT_CALL*/ "Oops" /*FBT_CALL*/ ), desc = fbt._( /*FBT_CALL*/ "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again." /*FBT_CALL*/ );
                var async_response = new(importDefault("AsyncResponse"))(this, transport);
                Object.assign(async_response, {
                    error: error,
                    errorSummary: summary,
                    errorDescription: desc,
                    silentError: silent
                });
                importDefault("setTimeout")(function() {
                    importDefault("Arbiter").inform("AsyncRequest/error", {
                        request: this,
                        response: async_response
                    })
                }.bind(this), 0);
                if (hasUnloaded() && !this.getOption("handleErrorAfterUnload")) return;
                if (!this.transportErrorHandler) {
                    importDefault("FBLogger")("asyncresponse").mustfix("Async request to %s failed with a %d error, but there was no error handler available to deal with it.", this.getURI(), error);
                    return
                }
                var error_handler = this.getTransportErrorHandler().bind(this);
                !(this.getOption("suppressErrorAlerts") || WARNING_ERROR_CODES.has(error)) ? importDefault("FBLogger")("asyncresponse").addToCategoryKey(String(error)).mustfix("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI()): WARNING_ERROR_CODES.has(error) && importDefault("FBLogger")("asyncresponse").addToCategoryKey(String(error)).warn("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI());
                importDefault("ErrorGuard").applyWithGuard(this._dispatchErrorResponse, this, [async_response, error_handler])
            };
            _proto._isServerDialogErrorCode = function _isServerDialogErrorCode(error) {
                return error == 1357008 || error == 1357007 || error == 1357041 || error == 1442002 || error == 1357001
            };
            _proto._solveQuicksandChallenge = function _solveQuicksandChallenge(async_response) {
                var payload = async_response.getPayload();
                importDefault("Bootloader").loadModules(["QuickSandSolver"], function(QuickSandSolver) {
                    QuickSandSolver.solveAndSendRequestBack(this, payload)
                }.bind(this), "AsyncRequest")
            };
            _proto._displayServerDialog = function _displayServerDialog(async_response, is_confirmation, allow_get) {
                allow_get === void 0 && (allow_get = !1);
                var payload = async_response.getPayload();
                if (payload.__dialog !== void 0) {
                    this._displayServerLegacyDialog(async_response, is_confirmation);
                    return
                }
                var json = payload.__dialogx;
                new(importDefault("ServerJS"))().handle(json);
                importDefault("Bootloader").loadModules(["ConfirmationDialog"], function(ConfirmationDialog) {
                    ConfirmationDialog.setupConfirmation(async_response, this, allow_get)
                }.bind(this), "AsyncRequest")
            };
            _proto._displayServerLegacyDialog = function _displayServerLegacyDialog(async_response, is_confirmation) {
                var model = async_response.getPayload().__dialog;
                if (importDefault("gkx")("708253")) {
                    var _ref2, _async_response$reque;
                    importDefault("FBLogger")("comet_infra").addMetadata("COMET_INFRA", "ERROR_CODE", async_response.getError().toString()).addMetadata("COMET_INFRA", "ERROR_URL", (_ref2 = (_async_response$reque = async_response.request) == null ? void 0 : _async_response$reque.getURI()) != null ? _ref2 : "unknown").mustfix("AsyncRequest._displayServerLegacyDialog called in Comet")
                }
                importDefault("Bootloader").loadModules(["Dialog"], function(Dialog) {
                    var dialog = new Dialog(model);
                    is_confirmation && dialog.setHandler(this._displayConfirmationHandler.bind(this, dialog));
                    dialog.setCancelHandler(function() {
                        var handler = this.getServerDialogCancelHandler();
                        try {
                            handler && handler(async_response)
                        } catch (e) {
                            throw e
                        } finally {
                            this.finallyHandler(async_response)
                        }
                    }.bind(this)).setCausalElement(this.relativeTo).show()
                }.bind(this), "AsyncRequest")
            };
            _proto._displayConfirmationHandler = function _displayConfirmationHandler(dialog) {
                this.data.confirmed = 1, Object.assign(this.data, dialog.getFormData()), this.send()
            };
            _proto.setJSONPTransport = function setJSONPTransport(transport) {
                transport.subscribe("response", this._handleJSONPResponse.bind(this)), transport.subscribe("abort", this._handleJSONPAbort.bind(this)), this.transport = transport
            };
            _proto._handleJSONPResponse = function _handleJSONPResponse(_, data) {
                var transport = this.transport;
                if (!transport) return;
                data.bootloadOnly || (this.is_first = this.is_first === void 0);
                var interpreted = this._interpretResponse(data);
                interpreted.asyncResponse && (interpreted.asyncResponse.is_first = this.is_first, interpreted.asyncResponse.is_last = transport.hasFinished());
                this.invokeResponseHandler(interpreted);
                transport.hasFinished() && delete this.transport
            };
            _proto._handleJSONPAbort = function _handleJSONPAbort() {
                this._invokeErrorHandler(), delete this.transport
            };
            _proto._handleXHRResponse = function _handleXHRResponse(transport) {
                var interpreted;
                if (this.getOption("suppressEvaluation")) interpreted = {
                    asyncResponse: new(importDefault("AsyncResponse"))(this, transport)
                };
                else try {
                    this._handleFlushedResponse();
                    var text = transport.responseText;
                    text = this._filterOutFlushedText(text);
                    var safe_text = this._unshieldResponseText(text),
                        _response;
                    try {
                        _response = JSON.parse(safe_text)
                    } catch (error) {
                        _response = eval("(" + safe_text + ")"), importDefault("FBLogger")("async_request").catching(error).warn("JSON.parse encountered an exception, fallback to eval. Endpoint: " + new(importDefault("URI"))(this.uri).getPath())
                    }
                    interpreted = this._interpretResponse(_response)
                } catch (error) {
                    interpreted = error.message, importDefault("FBLogger")("async_request").catching(error).warn("Failed to handle response")
                }
                this.invokeResponseHandler(interpreted)
            };
            _proto._handleFlushedResponse = function _handleFlushedResponse() {
                var flushedResponseHandler = this.flushedResponseHandler,
                    transport = this.transport;
                if (flushedResponseHandler && transport) {
                    var jsonShieldIndex = transport.responseText.indexOf(JSON_HIJACKING_SHIELD),
                        flushedTextEndIndex = jsonShieldIndex === -1 ? transport.responseText.length : jsonShieldIndex;
                    flushedResponseHandler(transport.responseText.substring(this.flushedResponseTextParseIndex, flushedTextEndIndex));
                    this.flushedResponseTextParseIndex = flushedTextEndIndex
                }
            };
            _proto._unshieldResponseText = function _unshieldResponseText(text) {
                if (text.length <= JSON_HIJACKING_SHIELD_LEN) throw new Error("Response too short on async");
                var offset = 0;
                while (text.charAt(offset) == " " || text.charAt(offset) == "\n") offset++;
                offset && text.substring(offset, offset + JSON_HIJACKING_SHIELD_LEN) == JSON_HIJACKING_SHIELD;
                return text.substring(offset + JSON_HIJACKING_SHIELD_LEN)
            };
            _proto._filterOutFlushedText = function _filterOutFlushedText(text) {
                if (!this.flushedResponseHandler) return text;
                var index = text.indexOf(JSON_HIJACKING_SHIELD);
                return index < 0 ? text : text.substr(index)
            };
            _proto._interpretResponse = function _interpretResponse(response) {
                if (response.redirect) return {
                    redirect: response.redirect
                };
                if (response.bootloadOnly) return {
                    bootloadOnly: response.bootloadOnly
                };
                var isServerDialog = response.error && this._isServerDialogErrorCode(response.error);
                this._shouldReplaceTransportMarkers && response.payload && !isServerDialog && importDefault("replaceTransportMarkers")({
                    relativeTo: this.getRelativeTo(),
                    bigPipeContext: null
                }, response.payload);
                var r = new(importDefault("AsyncResponse"))(this);
                if (response.__ar != 1) importDefault("FBLogger")("AsyncRequest").warn("AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.", this.getURI()), r.payload = response;
                else {
                    Object.assign(r, response);
                    var transport = this.transport;
                    transport && transport.getAllResponseHeaders !== void 0 && (r.responseHeaders = transport.getAllResponseHeaders())
                }
                return {
                    asyncResponse: r
                }
            };
            _proto._isMultiplexable = function _isMultiplexable() {
                if (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("You cannot bundle AsyncRequest that uses jsonp or iframe transport.");
                    return !1
                }
                if (!importDefault("isFacebookURI")(new(importDefault("URI"))(this.uri))) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s", this.getURI());
                    return !1
                }
                if (!this.getOption("asynchronous_DEPRECATED")) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("We cannot bundle synchronous AsyncRequests");
                    return !1
                }
                return !0
            };
            _proto.handleResponse = function handleResponse(response) {
                var interpreted = this._interpretResponse(response);
                this.invokeResponseHandler(interpreted)
            };
            _proto.setMethod = function setMethod(m) {
                this.method = m.toString().toUpperCase();
                return this
            };
            _proto.getMethod = function getMethod() {
                return this.method
            };
            _proto.setData = function setData(obj) {
                this.data = obj;
                return this
            };
            _proto.setRequestHeader = function setRequestHeader(name, value) {
                this.headers[name] = value;
                return this
            };
            _proto.setRawData = function setRawData(raw_data) {
                this.rawData = raw_data;
                return this
            };
            _proto.getData = function getData() {
                return this.data
            };
            _proto.setContextData = function setContextData(key, value, enabled) {
                enabled = enabled === void 0 ? !0 : enabled;
                enabled && (this.context["_log_" + key] = value);
                return this
            };
            _proto._setUserActionID = function _setUserActionID() {
                this.userActionID = (importNamespace("SessionName").getName() || "-") + "/-"
            };
            _proto.setURI = function setURI(uri, throwOnInvalid) {
                throwOnInvalid === void 0 && (throwOnInvalid = !1);
                typeof uri === "string" && uri.match(/^\/?u_\d+_\d+/) && importDefault("FBLogger")("asyncrequest").warn("Invalid URI %s", uri);
                var uri_obj = new(importDefault("URI"))(uri);
                if ((this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && !importDefault("isFacebookURI")(uri_obj)) {
                    throwOnInvalid && invariant(0, 45284);
                    return this
                }
                if (!this._allowCrossOrigin && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback") && !uri_obj.isSameOrigin()) {
                    throwOnInvalid && invariant(0, 45285);
                    return this
                }
                this._setUserActionID();
                if (!uri || uri_obj.isEmpty()) {
                    importDefault("FBLogger")("async_request").mustfix("URI cannot be empty");
                    return this
                }
                this.uri = importNamespace("ZeroRewrites").rewriteURI(uri_obj);
                return this
            };
            _proto.getURI = function getURI() {
                return this.uri.toString()
            };
            _proto.delayPreDisplayJS = function delayPreDisplayJS(shouldDelayJS) {
                shouldDelayJS === void 0 && (shouldDelayJS = !0);
                this._delayPreDisplayJS = shouldDelayJS;
                return this
            };
            _proto.setInitialHandler = function setInitialHandler(fn) {
                this.initialHandler = fn;
                return this
            };
            _proto.setPayloadHandler = function setPayloadHandler(fn) {
                this.setHandler(function(response) {
                    fn(response.payload)
                });
                return this
            };
            _proto.setHandler = function setHandler(fn) {
                validateResponseHandler(fn) && (this.handler = fn);
                return this
            };
            _proto.setFlushedResponseHandler = function setFlushedResponseHandler(fn) {
                validateResponseHandler(fn) && (this.flushedResponseHandler = fn);
                return this
            };
            _proto.getHandler = function getHandler() {
                return this.handler || importDefault("emptyFunction")
            };
            _proto.setProgressHandler = function setProgressHandler(fn) {
                validateResponseHandler(fn) && (this.progressHandler = fn);
                return this
            };
            _proto.setUploadProgressHandler = function setUploadProgressHandler(fn) {
                validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
                return this
            };
            _proto.setErrorHandler = function setErrorHandler(fn) {
                validateResponseHandler(fn) && (this.errorHandler = fn);
                return this
            };
            _proto.setTransportErrorHandler = function setTransportErrorHandler(fn) {
                this.transportErrorHandler = fn;
                return this
            };
            _proto.getErrorHandler = function getErrorHandler() {
                return this.errorHandler || importDefault("emptyFunction")
            };
            _proto.getTransportErrorHandler = function getTransportErrorHandler() {
                return this.transportErrorHandler || importDefault("emptyFunction")
            };
            _proto.setTimeoutHandler = function setTimeoutHandler(timeout, fn) {
                validateResponseHandler(fn) && (this.timeout = timeout, this.timeoutHandler = fn);
                return this
            };
            _proto.resetTimeout = function resetTimeout(timeout) {
                if (!(this.timeoutHandler === null))
                    if (timeout === null) this.timeout = null, importDefault("clearTimeout")(this.timer), this.timer = null;
                    else {
                        var clear_on_quickling_event = !this._allowCrossPageTransition;
                        this.timeout = timeout;
                        importDefault("clearTimeout")(this.timer);
                        clear_on_quickling_event ? this.timer = importDefault("setTimeout")(this._handleTimeout.bind(this), this.timeout) : this.timer = importDefault("setTimeoutAcrossTransitions")(this._handleTimeout.bind(this), this.timeout)
                    }
                return this
            };
            _proto._handleTimeout = function _handleTimeout() {
                var _this2 = this;
                this.continuation.last(function() {
                    _this2._requestTimeout = !0;
                    var func = _this2.timeoutHandler;
                    _this2.abandon();
                    func && func(_this2);
                    importDefault("setTimeout")(function() {
                        importDefault("Arbiter").inform("AsyncRequest/timeout", {
                            request: this
                        })
                    }.bind(_this2), 0)
                })
            };
            _proto.setNewSerial = function setNewSerial() {
                this.id = ++last_id;
                return this
            };
            _proto.setInterceptHandler = function setInterceptHandler(fn) {
                this.interceptHandler = fn;
                return this
            };
            _proto.setFinallyHandler = function setFinallyHandler(fn) {
                this.finallyHandler = fn;
                return this
            };
            _proto.setAbortHandler = function setAbortHandler(fn) {
                this.abortHandler = fn;
                return this
            };
            _proto.getServerDialogCancelHandler = function getServerDialogCancelHandler() {
                return this.serverDialogCancelHandler
            };
            _proto.setServerDialogCancelHandler = function setServerDialogCancelHandler(fn) {
                this.serverDialogCancelHandler = fn;
                return this
            };
            _proto.setPreBootloadHandler = function setPreBootloadHandler(fn) {
                this.preBootloadHandler = fn;
                return this
            };
            _proto.setReadOnly = function setReadOnly(readOnly) {
                typeof readOnly !== "boolean" || (this.readOnly = readOnly);
                return this
            };
            _proto.getReadOnly = function getReadOnly() {
                return this.readOnly
            };
            _proto.setRelativeTo = function setRelativeTo(element) {
                this.relativeTo = element;
                return this
            };
            _proto.getRelativeTo = function getRelativeTo() {
                return this.relativeTo
            };
            _proto.setStatusClass = function setStatusClass(c) {
                this.statusClass = c;
                return this
            };
            _proto.setStatusElement = function setStatusElement(element) {
                this.statusElement = element;
                return this
            };
            _proto.getStatusElement = function getStatusElement() {
                return importDefault("ge")(this.statusElement)
            };
            _proto._isRelevant = function _isRelevant() {
                if (this._allowCrossPageTransition) return !0;
                return !this.id ? !0 : this.id > id_threshold
            };
            _proto.clearStatusIndicator = function clearStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (importNamespace("CSS").removeClass(statusElem, "async_saving"), importNamespace("CSS").removeClass(statusElem, this.statusClass))
            };
            _proto.addStatusIndicator = function addStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (importNamespace("CSS").addClass(statusElem, "async_saving"), importNamespace("CSS").addClass(statusElem, this.statusClass))
            };
            _proto.specifiesWriteRequiredParams = function specifiesWriteRequiredParams() {
                return this.writeRequiredParams.every(function(param) {
                    this.data[param] = this.data[param] || importDefault("Env")[param] || (importDefault("ge")(param) || {}).value;
                    return this.data[param] !== void 0 ? !0 : !1
                }, this)
            };
            _proto.setOption = function setOption(opt, v) {
                typeof this.option[opt] !== "undefined" && (this.option[opt] = v);
                return this
            };
            _proto.getOption = function getOption(opt) {
                typeof this.option[opt] === "undefined";
                return this.option[opt]
            };
            _proto.abort = function abort() {
                var _this3 = this;
                this.continuation.last(function() {
                    var transport = _this3.transport;
                    if (transport) {
                        var old_handler = _this3.getTransportErrorHandler();
                        _this3.setOption("suppressErrorAlerts", !0);
                        _this3.setTransportErrorHandler(importDefault("emptyFunction"));
                        _this3._requestAborted = !0;
                        transport.abort();
                        _this3.setTransportErrorHandler(old_handler)
                    }
                    _this3.abortHandler();
                    AsyncMultiplex.unschedule(_this3)
                })
            };
            _proto.abandon = function abandon() {
                var _this4 = this;
                this.continuation.last(function() {
                    importDefault("clearTimeout")(_this4.timer);
                    _this4.setOption("suppressErrorAlerts", !0).setHandler(importDefault("emptyFunction")).setErrorHandler(importDefault("emptyFunction")).setTransportErrorHandler(importDefault("emptyFunction")).setProgressHandler(importDefault("emptyFunction")).setUploadProgressHandler(importDefault("emptyFunction"));
                    var transport = _this4.transport;
                    transport && (_this4._requestAborted = !0, supportsProgress(transport) && delete transport.onprogress, supportsUploadProgress(transport) && delete transport.upload.onprogress, transport.abort());
                    _this4.abortHandler();
                    AsyncMultiplex.unschedule(_this4)
                })
            };
            _proto.setNectarModuleDataSafe = function setNectarModuleDataSafe(elem) {
                var setNectarModuleData = this.setNectarModuleData;
                setNectarModuleData && setNectarModuleData.call(this, elem);
                return this
            };
            _proto.setAllowCrossPageTransition = function setAllowCrossPageTransition(allow) {
                this._allowCrossPageTransition = !!allow;
                this.timer && this.resetTimeout(this.timeout);
                return this
            };
            _proto.getAllowIrrelevantRequests = function getAllowIrrelevantRequests() {
                return this._allowIrrelevantRequests
            };
            _proto.setAllowIrrelevantRequests = function setAllowIrrelevantRequests(allowIrrelevantRequests) {
                this._allowIrrelevantRequests = allowIrrelevantRequests;
                return this
            };
            _proto.setAllowCrossOrigin = function setAllowCrossOrigin(allow) {
                this._allowCrossOrigin = allow;
                return this
            };
            _proto.setAllowCredentials = function setAllowCredentials(allow) {
                this._allowCredentials = allow;
                return this
            };
            _proto.setIsBackgroundRequest = function setIsBackgroundRequest(isBackgroundRequest) {
                this._isBackgroundRequest = isBackgroundRequest;
                return this
            };
            _proto.setReplaceTransportMarkers = function setReplaceTransportMarkers(value) {
                value === void 0 && (value = !0);
                this._shouldReplaceTransportMarkers = value;
                return this
            };
            _proto.sendAndReturnAbortHandler = function sendAndReturnAbortHandler() {
                var _this5 = this;
                this.send();
                return function() {
                    return _this5.abort()
                }
            };
            _proto.send = function send(isRetry) {
                var _this6 = this;
                isRetry = isRetry || !1;
                if (!this.uri) return !1;
                this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
                this.getOption("jsonp") && this.method != "GET" && this.setMethod("GET");
                (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && this.method != "GET" && this.setMethod("GET");
                this.timeoutHandler !== null && (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback"));
                if (!this.getReadOnly()) {
                    this.specifiesWriteRequiredParams();
                    if (this.method != "POST") return !1
                }
                if (document.location.search.toString().includes(this.uri.toString())) return !1;
                if (this.uri.toString().includes("/../") || this.uri.toString().includes("\\../") || this.uri.toString().includes("/..\\") || this.uri.toString().includes("\\..\\")) return !1;
                Object.assign(this.data, importDefault("getAsyncParams")(this.method));
                importDefault("isEmpty")(this.context) || (Object.assign(this.data, this.context), this.data.ajax_log = 1);
                importDefault("Env").force_param && Object.assign(this.data, importDefault("Env").force_param);
                this._setUserActionID();
                if (this.getOption("bundle") && this._isMultiplexable()) {
                    AsyncMultiplex.schedule(this);
                    return !0
                }
                this.setNewSerial();
                this.getOption("asynchronous_DEPRECATED") || this.uri.addQueryData({
                    __sjax: 1
                });
                importDefault("Arbiter").inform("AsyncRequest/send", {
                    request: this,
                    ts: importDefault("performanceAbsoluteNow")()
                });
                var uri_str, query;
                this.method == "GET" && this.uri.addQueryData({
                    fb_dtsg_ag: importNamespace("DTSG_ASYNC").getToken()
                });
                this.method == "GET" || this.rawData ? (uri_str = this.uri.addQueryData(this.data).toString(), query = this.rawData || "") : (this._allowCrossOrigin && this.uri.addQueryData({
                    __a: 1
                }), uri_str = this.uri.toString(), query = importNamespace("PHPQuerySerializer").serialize(this.data));
                if (this.transport) return !1;
                if (this.getOption("useFetchWithIframeFallback")) try {
                    var _transport = new(importDefault("FetchStreamTransport"))(this.uri);
                    this.setJSONPTransport(_transport);
                    this._markRequestSent();
                    _transport.send();
                    this.setOption("useIframeTransport", !1);
                    return !0
                } catch (_unused4) {
                    this.setOption("useFetchWithIframeFallback", !1), this.setOption("useIframeTransport", !0)
                }
                if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
                    requireLazy(["JSONPTransport"], function(JSONPTransport) {
                        var transport = new JSONPTransport(this.getOption("jsonp") ? "jsonp" : "iframe", this.uri);
                        this.setJSONPTransport(transport);
                        this._markRequestSent();
                        transport.send()
                    }.bind(this));
                    return !0
                }
                this.flushedResponseHandler && (this.flushedResponseTextParseIndex = 0);
                var transport = importNamespace("ZeroRewrites").getTransportBuilderForURI(this.uri)();
                if (!transport) return !1;
                this.schedule("AsyncRequest.send");
                transport.onreadystatechange = function() {
                    var _transport = _this6.transport;
                    _transport && _transport.readyState >= 2 && _transport.readyState <= 3 && _this6._handleFlushedResponse();
                    transport.readyState === 4 && _this6.continuation.last(_this6._onStateChange)
                };
                this.progressHandler && supportsProgress(transport) && (transport.onprogress = function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    _this6.continuation(function() {
                        _this6.progressHandler && _this6.progressHandler.apply(_this6, args)
                    })
                });
                this.uploadProgressHandler && supportsUploadProgress(transport) && (transport.upload.onprogress = function() {
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    _this6.continuation(function() {
                        _this6.uploadProgressHandler && _this6.uploadProgressHandler.apply(_this6, args)
                    })
                });
                isRetry || (this.remainingRetries = this.getOption("retries"));
                this.transport = transport;
                try {
                    transport.open(this.method, uri_str, importDefault("gkx")("1857581") ? !0 : this.getOption("asynchronous_DEPRECATED"))
                } catch (exception) {
                    return !1
                }
                if (!this.uri.isSameOrigin() && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback")) {
                    if (!supportsCrossOrigin(transport)) return !1;
                    this._canSendCredentials() && (transport.withCredentials = !0)
                }
                this.method == "POST" && !this.rawData && transport.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                this._isBackgroundRequest && transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
                var asyncHeaders = importDefault("getAsyncHeaders")(this.uri);
                Object.keys(asyncHeaders).forEach(function(name) {
                    transport && transport.setRequestHeader(name, asyncHeaders[name])
                });
                importDefault("Arbiter").inform("AsyncRequest/will_send", {
                    request: this
                });
                if (transport)
                    for (var headerName in this.headers) Object.prototype.hasOwnProperty.call(this.headers, headerName) && transport.setRequestHeader(headerName, this.headers[headerName]);
                this.addStatusIndicator();
                this._markRequestSent();
                transport.send(query);
                this.timeout !== null && this.resetTimeout(this.timeout);
                AsyncRequest._inflightCount++;
                return !0
            };
            _proto.schedule = function schedule(name) {
                this.continuation = importDefault("TimeSlice").getReusableContinuation(name)
            };
            _proto._canSendCredentials = function _canSendCredentials() {
                if (this._allowCredentials === !1) return !1;
                var uri = new(importDefault("URI"))(this.uri);
                return importDefault("isBulletinDotComURI")(uri) || importDefault("isFacebookURI")(uri) || importDefault("isInternalFBURI")(uri) || importDefault("isMessengerDotComURI")(uri) || importDefault("isWorkplaceDotComURI")(uri)
            };
            _proto._markRequestSent = function _markRequestSent() {
                var fullURI = new(importDefault("URI"))(this.getURI()).getQualifiedURI().toString();
                importNamespace("ResourceTimingsStore").updateURI(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID, fullURI);
                importNamespace("ResourceTimingsStore").annotate(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID).addStringAnnotation("uri", fullURI);
                importNamespace("ResourceTimingsStore").measureRequestSent(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID)
            };
            _proto.promisePayload = function promisePayload(isRetry) {
                return this.exec().then(function(response) {
                    return response.payload
                }, function(response) {
                    throw response.toError()
                })
            };
            _proto.exec = function exec(isRetry) {
                var _this7 = this;
                if (this.getHandler() !== importDefault("emptyFunction") || this.getErrorHandler() !== importDefault("AsyncResponse").defaultErrorHandler) throw new Error("exec is an async function and does not allow previously set handlers");
                return new(require("Promise"))(function(resolve, reject) {
                    _this7.setHandler(resolve).setErrorHandler(reject).send(isRetry)
                })
            };
            AsyncRequest.bootstrap = function bootstrap(href, elem, is_post) {
                var method = "GET",
                    readonly = !0,
                    data = {};
                (is_post || elem && elem.rel == "async-post") && (method = "POST", readonly = !1, href && (href = new(importDefault("URI"))(href), data = href.getQueryData(), href.setQueryData({})));
                var status_elem = importNamespace("Parent").byClass(elem, "stat_elem") || elem;
                if (status_elem && importNamespace("CSS").hasClass(status_elem, "async_saving")) return !1;
                var async = new AsyncRequest(href).setReadOnly(readonly).setMethod(method).setData(data).setNectarModuleDataSafe(elem).setRelativeTo(elem);
                elem && (async.setHandler(function(response) {
                    importDefault("Event").fire(elem, "success", {
                        response: response
                    })
                }), async.setErrorHandler(function(response) {
                    importDefault("Event").fire(elem, "error", {
                        response: response
                    }) !== !1 && importDefault("AsyncResponse").defaultErrorHandler(response)
                }));
                if (status_elem instanceof HTMLElement) {
                    async.setStatusElement(status_elem);
                    var status_class = status_elem.getAttribute("data-status-class");
                    status_class && async.setStatusClass(status_class)
                }
                async.send();
                return !1
            };
            AsyncRequest.post = function post(href, data) {
                new AsyncRequest(href).setReadOnly(!1).setMethod("POST").setData(data).send();
                return !1
            };
            AsyncRequest.postStatic = function postStatic(href, data) {
                AsyncRequest.post(href, data)
            };
            AsyncRequest.getLastID = function getLastID() {
                return last_id
            };
            AsyncRequest.ignoreUpdate = function ignoreUpdate() {
                ignore_id_update = !0
            };
            AsyncRequest.getInflightCount = function getInflightCount() {
                return this._inflightCount
            };
            return AsyncRequest
        }();
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex, _pendingAsyncMultiplexes = [],
        AsyncMultiplex = function() {
            function AsyncMultiplex() {
                this._requests = []
            }
            var _proto2 = AsyncMultiplex.prototype;
            _proto2.add = function add(request) {
                this._requests.push(request)
            };
            _proto2.remove = function remove(request) {
                var requests = this._requests,
                    requestsSent = this._requestsSent;
                for (var ii = 0, jj = requests.length; ii < jj; ii++) requests[ii] === request && (requestsSent ? requests[ii] = null : requests.splice(ii, 1))
            };
            _proto2.send = function send() {
                this._requestsSent && invariant(0, 4390);
                this._requestsSent = !0;
                this._wrapperRequest = null;
                var requests = this._requests;
                if (!requests.length) return;
                var request;
                if (requests.length === 1) request = requests[0];
                else {
                    var data = requests.filter(Boolean).map(function(request) {
                        return [request.uri.getPath(), importNamespace("PHPQuerySerializer").serialize(request.data)]
                    });
                    request = this._wrapperRequest = new AsyncRequest("/ajax/proxy.php").setAllowCrossPageTransition(!0).setData({
                        data: data
                    }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this))
                }
                request && request.setOption("bundle", !1).send()
            };
            _proto2._handler = function _handler(response) {
                var _this8 = this,
                    responses = response.getPayload().responses;
                if (responses.length !== this._requests.length) return;
                var _loop2 = function _loop2(ii) {
                    var request = _this8._requests[ii];
                    if (!request) return "continue";
                    var request_path = request.uri.getPath();
                    _this8._wrapperRequest && (request.id = _this8._wrapperRequest.id);
                    if (responses[ii][0] !== request_path) {
                        request.continuation.last(function() {
                            request.invokeResponseHandler({
                                transportError: "Wrong response order in bundled request to " + request_path
                            })
                        });
                        return "continue"
                    }
                    request.continuation.last(function() {
                        request.handleResponse(responses[ii][1])
                    })
                };
                for (var ii = 0; ii < this._requests.length; ii++) {
                    var _ret2 = _loop2(ii);
                    if (_ret2 === "continue") continue
                }
                _pendingAsyncMultiplexes.splice(_pendingAsyncMultiplexes.indexOf(this, 1))
            };
            _proto2._transportErrorHandler = function _transportErrorHandler(response) {
                var interpreted = {
                        transportError: response.errorDescription
                    },
                    paths = this._requests.filter(Boolean).map(function(request) {
                        this._wrapperRequest && (request.id = this._wrapperRequest.id);
                        request.invokeResponseHandler(interpreted);
                        return request.uri.getPath()
                    }, this)
            };
            AsyncMultiplex.schedule = function schedule(request) {
                request.schedule("AsyncMultiplex.schedule");
                _asyncMultiplex || (_asyncMultiplex = new AsyncMultiplex(), _pendingAsyncMultiplexes.push(_asyncMultiplex), importDefault("TimeSlice").guard(function() {
                    importDefault("setTimeoutAcrossTransitions")(function() {
                        _asyncMultiplex && (_asyncMultiplex.send(), _asyncMultiplex = null)
                    }, 0)
                }, "AsyncMultiplex.schedule", {
                    propagationType: importDefault("TimeSlice").PropagationType.ORPHAN
                })());
                _asyncMultiplex.add(request);
                return _asyncMultiplex
            };
            AsyncMultiplex.unschedule = function unschedule(request) {
                _pendingAsyncMultiplexes.forEach(function(asyncMultiplex) {
                    asyncMultiplex.remove(request)
                })
            };
            return AsyncMultiplex
        }();
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest;
    exports["default"] = AsyncRequest
}), 98);
__d("DOMControl", ["$", "DataStore"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a) {
            this.root = b("$").fromIDOrElement(a), this.updating = !1, b("DataStore").set(a, "DOMControl", this)
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.root
        };
        c.beginUpdate = function() {
            if (this.updating) return !1;
            this.updating = !0;
            return !0
        };
        c.endUpdate = function() {
            this.updating = !1
        };
        c.update = function(a) {
            if (!this.beginUpdate()) return this;
            this.onupdate(a);
            this.endUpdate()
        };
        c.onupdate = function(a) {};
        a.getInstance = function(a) {
            return b("DataStore").get(a, "DOMControl")
        };
        return a
    }();
    e.exports = a
}), null);
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
__d("normalizeBoundingClientRect", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a = a.ownerDocument.documentElement;
        var c = a ? a.clientLeft : 0;
        a = a ? a.clientTop : 0;
        var d = Math.round(b.left) - c;
        c = Math.round(b.right) - c;
        var e = Math.round(b.top) - a;
        b = Math.round(b.bottom) - a;
        return {
            left: d,
            right: c,
            top: e,
            bottom: b,
            width: c - d,
            height: b - e
        }
    }
    f["default"] = a
}), 66);
__d("getElementRect", ["containsNode", "normalizeBoundingClientRect"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b;
        b = a == null ? void 0 : (b = a.ownerDocument) == null ? void 0 : b.documentElement;
        return !a || !("getBoundingClientRect" in a) || !c("containsNode")(b, a) ? {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
        } : c("normalizeBoundingClientRect")(a, a.getBoundingClientRect())
    }
    g["default"] = a
}), 98);
__d("getElementPosition", ["getElementRect"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a = c("getElementRect")(a);
        return {
            x: a.left,
            y: a.top,
            width: a.right - a.left,
            height: a.bottom - a.top
        }
    }
    g["default"] = a
}), 98);
__d("getUnboundedScrollPosition", ["Scroll"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a === window) {
            var c;
            return {
                x: (c = window.pageXOffset) != null ? c : b("Scroll").getLeft(document.documentElement),
                y: (c = window.pageYOffset) != null ? c : b("Scroll").getTop(document.documentElement)
            }
        }
        return {
            x: b("Scroll").getLeft(a),
            y: b("Scroll").getTop(a)
        }
    }
    e.exports = a
}), null);
__d("getViewportDimensions", ["UserAgent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        var a = null;
        return function() {
            var b = document.body;
            if (b == null) return null;
            (a == null || !b.contains(a)) && (a = document.createElement("div"), a.style.left = Number.MAX_SAFE_INTEGER + "px", a.style.width = "100%", a.style.height = "100%", a.style.position = "fixed", b.appendChild(a));
            return a
        }
    }();

    function i() {
        var a;
        document.documentElement && (a = document.documentElement.clientWidth);
        a == null && document.body && (a = document.body.clientWidth);
        return a || 0
    }

    function j() {
        var a;
        document.documentElement && (a = document.documentElement.clientHeight);
        a == null && document.body && (a = document.body.clientHeight);
        return a || 0
    }

    function k() {
        return {
            width: window.innerWidth || i(),
            height: window.innerHeight || j()
        }
    }
    k.withoutScrollbars = function() {
        return c("UserAgent").isPlatform("Android") ? k() : {
            width: i(),
            height: j()
        }
    };
    k.layout = function() {
        var a, b = h();
        return {
            width: (a = b == null ? void 0 : b.clientWidth) != null ? a : i(),
            height: (a = b == null ? void 0 : b.clientHeight) != null ? a : j()
        }
    };
    g["default"] = k
}), 98);
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
__d("DOMScroll", ["Arbiter", "DOM", "DOMQuery", "Vector", "ViewportBounds", "emptyFunction", "ge", "isAsyncScrollQuery", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f) {
    var g = b("requireDeferred")("Animation").__setRef("DOMScroll"),
        h = {
            SCROLL: "dom-scroll",
            _scrolling: !1,
            _scrollingFinishedTimeout: null,
            getScrollState: function() {
                var a = b("Vector").getViewportDimensions(),
                    c = b("Vector").getDocumentDimensions(),
                    d = c.x > a.x;
                c = c.y > a.y;
                d += 0;
                c += 0;
                return new(b("Vector"))(d, c)
            },
            _scrollbarSize: null,
            _initScrollbarSize: function() {
                var a = b("DOM").create("p");
                a.style.width = "100%";
                a.style.height = "200px";
                var c = b("DOM").create("div");
                c.style.position = "absolute";
                c.style.top = "0px";
                c.style.left = "0px";
                c.style.visibility = "hidden";
                c.style.width = "200px";
                c.style.height = "150px";
                c.style.overflow = "hidden";
                c.appendChild(a);
                b("nullthrows")(document.body).appendChild(c);
                var d = a.offsetWidth;
                c.style.overflow = "scroll";
                a = a.offsetWidth;
                d == a && (a = c.clientWidth);
                b("nullthrows")(document.body).removeChild(c);
                h._scrollbarSize = d - a
            },
            getScrollbarSize: function() {
                h._scrollbarSize === null && h._initScrollbarSize();
                return b("nullthrows")(h._scrollbarSize)
            },
            scrollTo: function(a, c, d, e, f, i) {
                var j, k = 0;
                c == null || c === !0 ? k = 750 : typeof c === "number" ? k = c : parseInt(c, 10) && (k = parseInt(c, 10));
                b("isAsyncScrollQuery")() && (k = 0);
                if (a instanceof b("Vector")) c = a;
                else {
                    var l = b("Vector").getScrollPosition().x;
                    a = b("Vector").getElementPosition(b("ge")(a)).y;
                    c = new(b("Vector"))(l, a, "document");
                    e || (c.y -= b("ViewportBounds").getTop() / (d ? 2 : 1))
                }
                d ? c.y -= b("Vector").getViewportDimensions().y / 2 : e && (c.y -= b("Vector").getViewportDimensions().y, c.y += e);
                f && (c.y -= f);
                c = c.convertTo("document");
                if (k)
                    if ("scrollBehavior" in b("nullthrows")(document.documentElement).style && k === 750 && !i) try {
                        window.scrollTo({
                            left: c.x,
                            top: c.y,
                            behavior: "smooth"
                        })
                    } catch (a) {
                        window.scrollTo(c.x, c.y)
                    } else {
                        l = g.getModuleIfRequired();
                        if (l != null) {
                            h._setScrollingForDuration(k);
                            var m = new l(b("nullthrows")(document.body)).to("scrollTop", c.y).to("scrollLeft", c.x).ease(l.ease.end).duration(k).ondone(i).go();
                            j = function() {
                                m.stop()
                            }
                        } else window.scrollTo(c.x, c.y), i && i()
                    } else window.scrollTo(c.x, c.y), i && i();
                b("Arbiter").inform(h.SCROLL);
                return j || b("emptyFunction")
            },
            scrollToID: function(a) {
                h.scrollTo(a)
            },
            ensureVisible: function(a, c, d, e, f) {
                var g = b("Vector").getScrollPosition().x;
                a = h._getBounds(a, c, d);
                c = a[0];
                d = a[1];
                var i = a[2];
                a = a[3];
                i < c ? h.scrollTo(new(b("Vector"))(g, i, "document"), e, !1, 0, 0, f) : a > d ? i - (a - d) < c ? h.scrollTo(new(b("Vector"))(g, i, "document"), e, !1, 0, 0, f) : h.scrollTo(new(b("Vector"))(g, a, "document"), e, !1, 1, 0, f) : f && f()
            },
            isCurrentlyVisible: function(a, b, c) {
                a = h._getBounds(a, b, c);
                b = a[0];
                c = a[1];
                var d = a[2];
                a = a[3];
                return d >= b && a <= c
            },
            _getBounds: function(a, c, d) {
                d == null && (d = 10);
                a = b("ge")(a);
                c && (a = b("DOMQuery").find(a, c));
                c = b("Vector").getScrollPosition().y;
                var e = c + b("Vector").getViewportDimensions().y,
                    f = b("Vector").getElementPosition(a).y;
                a = f + b("Vector").getElementDimensions(a).y;
                f -= b("ViewportBounds").getTop();
                f -= d;
                a += d;
                return [c, e, f, a]
            },
            scrollToTop: function(a) {
                var c = b("Vector").getScrollPosition();
                h.scrollTo(new(b("Vector"))(c.x, 0, "document"), a !== !1)
            },
            currentlyScrolling: function() {
                return h._scrolling
            },
            _setScrollingForDuration: function(a) {
                h._scrolling = !0, h._scrollingFinishedTimeout && (clearTimeout(h._scrollingFinishedTimeout), h._scrollingFinishedTimeout = null), h._scrollingFinishedTimeout = setTimeout(function() {
                    h._scrolling = !1, h._scrollingFinishedTimeout = null
                }, a)
            }
        };
    e.exports = h
}), null);
__d("Input", ["CSS", "DOMControl", "DOMQuery"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return !/\S/.test(a || "")
    }

    function i(a) {
        return h(a.value)
    }

    function a(a) {
        return i(a) ? "" : a.value
    }

    function b(a) {
        return a.value
    }

    function e(a, b) {
        a.value = b || "";
        b = c("DOMControl").getInstance(a);
        b && b.resetHeight && b.resetHeight()
    }

    function f(a, b) {
        b || (b = ""), a.setAttribute("aria-label", b), a.setAttribute("placeholder", b)
    }

    function j(a) {
        a.value = "", a.style.height = ""
    }

    function k(a, b) {
        d("CSS").conditionClass(a, "enter_submit", b)
    }

    function l(a) {
        return d("CSS").hasClass(a, "enter_submit")
    }

    function m(a, b) {
        b > 0 ? a.setAttribute("maxlength", b.toString()) : a.removeAttribute("maxlength")
    }
    g.isWhiteSpaceOnly = h;
    g.isEmpty = i;
    g.getValue = a;
    g.getValueRaw = b;
    g.setValue = e;
    g.setPlaceholder = f;
    g.reset = j;
    g.setSubmitOnEnter = k;
    g.getSubmitOnEnter = l;
    g.setMaxLength = m
}), 98);
__d("Form", ["DOM", "DOMQuery", "DTSG", "DTSGUtils", "DataStore", "Input", "LSD", "PHPQuerySerializer", "Random", "SprinkleConfig", "URI", "getElementPosition", "isFacebookURI", "isNode"], (function(a, b, c, d, e, f) {
    var g, h, i = "FileList" in window,
        j = "FormData" in window;

    function k(a) {
        var c = {};
        (g || (g = b("PHPQuerySerializer"))).serialize(a).split("&").forEach(function(a) {
            if (a) {
                a = /^([^=]*)(?:=(.*))?$/.exec(a);
                var d = (h || (h = b("URI"))).decodeComponent(a[1]),
                    e = a[2] !== void 0;
                e = e ? (h || (h = b("URI"))).decodeComponent(a[2]) : null;
                c[d] = e
            }
        });
        return c
    }
    var l = {
        getInputs: function(a) {
            a === void 0 && (a = document);
            return [].concat(b("DOMQuery").scry(a, "input"), b("DOMQuery").scry(a, "select"), b("DOMQuery").scry(a, "textarea"), b("DOMQuery").scry(a, "button"))
        },
        getInputsByName: function(a) {
            var b = {};
            l.getInputs(a).forEach(function(a) {
                var c = b[a.name];
                b[a.name] = typeof c === "undefined" ? a : [a].concat(c)
            });
            return b
        },
        getSelectValue: function(a) {
            return a.options[a.selectedIndex].value
        },
        setSelectValue: function(a, b) {
            for (var c = 0; c < a.options.length; ++c)
                if (a.options[c].value == b) {
                    a.selectedIndex = c;
                    break
                }
        },
        getRadioValue: function(a) {
            for (var b = 0; b < a.length; b++)
                if (a[b].checked) return a[b].value;
            return null
        },
        getElements: function(a) {
            return a.tagName == "FORM" && a.elements != a ? Array.from(a.elements) : l.getInputs(a)
        },
        getAttribute: function(a, b) {
            return (a.getAttributeNode(b) || {}).value || null
        },
        setDisabled: function(a, c) {
            l.getElements(a).forEach(function(a) {
                if (a.disabled !== void 0) {
                    var d = b("DataStore").get(a, "origDisabledState");
                    c ? (d === void 0 && b("DataStore").set(a, "origDisabledState", a.disabled), a.disabled = c) : d === !1 && (a.disabled = !1)
                }
            })
        },
        forEachValue: function(a, c, d) {
            l.getElements(a).forEach(function(a) {
                if (!a.name || a.disabled) return;
                if (a.type === "submit") return;
                if (a.type === "reset" || a.type === "button" || a.type === "image") return;
                if ((a.type === "radio" || a.type === "checkbox") && !a.checked) return;
                if (a.nodeName === "SELECT") {
                    for (var c = 0, e = a.options.length; c < e; c++) {
                        var f = a.options[c];
                        f.selected && d("select", a.name, f.value)
                    }
                    return
                }
                if (a.type === "file") {
                    if (i) {
                        f = a.files;
                        for (var c = 0; c < f.length; c++) d("file", a.name, f.item(c))
                    }
                    return
                }
                d(a.type, a.name, b("Input").getValue(a))
            }), c && c.name && c.type === "submit" && b("DOMQuery").contains(a, c) && b("DOMQuery").isNodeOfType(c, ["input", "button"]) && d("submit", c.name, c.value)
        },
        createFormData: function(a, c) {
            if (!j) return null;
            var d = new FormData();
            if (a)
                if (b("isNode")(a)) l.forEachValue(a, c, function(b, a, c) {
                    d.append(a, c)
                });
                else {
                    c = k(a);
                    for (var e in c) c[e] == null ? d.append(e, "") : d.append(e, c[e])
                }
            return d
        },
        serialize: function(a, b) {
            var c = {};
            l.forEachValue(a, b, function(a, b, d) {
                if (a === "file") return;
                l._serializeHelper(c, b, d)
            });
            return l._serializeFix(c)
        },
        _serializeHelper: function(a, b, c) {
            var d = Object.prototype.hasOwnProperty,
                e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
            if (e) {
                if (!a[e[1]] || !d.call(a, e[1])) {
                    a[e[1]] = d = {};
                    if (a[e[1]] !== d) return
                }
                d = 0;
                if (e[2] === "")
                    while (a[e[1]][d] !== void 0) d++;
                else d = e[2];
                e[3] === "" ? a[e[1]][d] = c : l._serializeHelper(a[e[1]], d.concat(e[3]), c)
            } else a[b] = c
        },
        _serializeFix: function(a) {
            for (var b in a) a[b] instanceof Object && (a[b] = l._serializeFix(a[b]));
            var c = Object.keys(a);
            if (c.length === 0 || c.some(isNaN)) return a;
            c.sort(function(a, b) {
                return a - b
            });
            var d = 0,
                e = c.every(function(a) {
                    return +a === d++
                });
            return e ? c.map(function(b) {
                return a[b]
            }) : a
        },
        post: function(a, c, d, e) {
            e === void 0 && (e = !0);
            a = new(h || (h = b("URI")))(a);
            var f = document.createElement("form");
            f.action = a.toString();
            f.method = "POST";
            f.style.display = "none";
            var g = !b("isFacebookURI")(a);
            if (d) {
                if (g) {
                    f.rel = "noopener";
                    if (d === "_blank") {
                        d = btoa(b("Random").uint32());
                        var i = window.open("about:blank", d);
                        i === void 0 || (i.opener = null)
                    }
                }
                f.target = d
            }
            if (e && (!g && a.getSubdomain() !== "apps")) {
                i = b("DTSG").getToken();
                i && (c.fb_dtsg = i, b("SprinkleConfig").param_name && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(i)));
                b("LSD").token && (c.lsd = b("LSD").token, b("SprinkleConfig").param_name && !i && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            l.createHiddenInputs(c, f);
            b("DOMQuery").getRootElement().appendChild(f);
            f.submit();
            return !1
        },
        createHiddenInputs: function(a, c, d, e) {
            e === void 0 && (e = !1);
            d = d || {};
            a = k(a);
            for (var f in a) {
                if (a[f] === null) continue;
                if (d[f] && e) d[f].value = a[f];
                else {
                    var g = b("DOM").create("input", {
                        type: "hidden",
                        name: f,
                        value: a[f]
                    });
                    d[f] = g;
                    c.appendChild(g)
                }
            }
            return d
        },
        getFirstElement: function(a, c) {
            c === void 0 && (c = ['input[type="text"]', "textarea", 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]']);
            var d = [];
            for (var e = 0; e < c.length; e++) {
                d = b("DOMQuery").scry(a, c[e]);
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    try {
                        var h = b("getElementPosition")(g);
                        if (h.y > 0 && h.x > 0) return g
                    } catch (a) {}
                }
            }
            return null
        },
        focusFirst: function(a) {
            a = l.getFirstElement(a);
            if (a) {
                a.focus();
                return !0
            }
            return !1
        }
    };
    e.exports = l
}), null);
__d("LinkController", ["DataStore", "Event", "Parent", "removeFromArray", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    var h = "@@LinkController",
        i = [],
        j = [];

    function a(a) {
        i.push(a);
        return {
            remove: function() {
                return c("removeFromArray")(i, a)
            }
        }
    }

    function b(a) {
        j.push(a);
        return {
            remove: function() {
                return c("removeFromArray")(j, a)
            }
        }
    }

    function e(a) {
        a = a.getTarget();
        var b = d("Parent").byTag(a, "a");
        if (!(b instanceof HTMLAnchorElement)) return;
        var e = l(b);
        if (!e || n(a) || d("DataStore").get(b, h) || e.endsWith("#")) return;
        a = c("Event").listen(b, "click", function(a) {
            c("trackReferrer")(b, e), !b.rel && (!b.target || b.target === "_self") && !m(a) && k(b, a)
        });
        d("DataStore").set(b, h, a)
    }

    function k(a, b) {
        i.concat(j).every(function(c) {
            if (c(a, b) === !1) {
                b.prevent();
                return !1
            }
            return !0
        })
    }

    function l(a) {
        if (a && !a.rel) {
            a = a.getAttribute("href");
            if (a) {
                var b = a.match(/^(\w+):/);
                if (!b || b[1].match(/^http/i)) return a
            }
        }
        return null
    }

    function m(a) {
        return a.getModifiers().any || a.which && a.which !== 1
    }

    function n(a) {
        return a.nodeName === "INPUT" && a.type === "file"
    }
    c("Event").listen(document.documentElement, "mousedown", e, c("Event").Priority.URGENT);
    c("Event").listen(document.documentElement, "keydown", e, c("Event").Priority.URGENT);
    g.registerHandler = a;
    g.registerFallbackHandler = b
}), 98);
__d("PageTransitionPriorities", [], (function(a, b, c, d, e, f) {
    a = 5;
    b = a + 1;
    c = b + 1;
    f.DEFAULT = a;
    f.LEFT_NAV = b;
    f.SOCIAL_SEARCH_DIALOG = c
}), 66);
__d("computeRelativeURI", ["URI", "isEmpty", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        if (!b) return a;
        if (b.charAt(0) == "/") return b;
        var c = a.split("/").slice(0, -1);
        c[0] !== "";
        b.split("/").forEach(function(a) {
            a === "." || (a === ".." ? c.length > 1 && (c = c.slice(0, -1)) : c.push(a))
        });
        return c.join("/")
    }

    function a(a, b) {
        var d = new(c("URI"))(),
            e = new(c("URI"))(a),
            f = new(c("URI"))(b);
        if (f.getDomain() && !c("isFacebookURI")(f)) return b;
        var g = e;
        a = ["Protocol", "Domain", "Port", "Path", "QueryData", "Fragment"];
        a.forEach(function(a) {
            var b = a === "Path" && g === e;
            b && d.setPath(h(e.getPath(), f.getPath()));
            c("isEmpty")(f["get" + a]()) || (g = f);
            b || d["set" + a](g["get" + a]())
        });
        return d
    }
    g["default"] = a
}), 98);
__d("getReferrerURI", ["ErrorGuard", "URI", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function b() {
        if (a.PageTransitions && a.PageTransitions.isInitialized()) return a.PageTransitions.getReferrerURI();
        else {
            var b = c("ErrorGuard").applyWithGuard(function(a) {
                return c("URI").tryParseURI(a)
            }, null, [document.referrer]);
            return b && c("isFacebookURI")(b) ? b : null
        }
    }
    g["default"] = b
}), 98);
__d("PageTransitionsRegistrar", ["invariant", "DOMQuery", "Form", "LinkController", "PageTransitionPriorities", "Parent", "URI", "computeRelativeURI", "getReferrerURI", "goURI", "requireDeferred", "setTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h) {
    var i = c("requireDeferred")("PageTransitions").__setRef("PageTransitionsRegistrar");
    c("setTimeout")(function() {
        i.onReady(function(a) {
            a && a._init && a._init()
        })
    }, 0);
    var j = [],
        k = [];
    e = {
        DELAY_HISTORY: "delay_history_PTR",
        registerHandler: function(a, b) {
            a != null || h(0, 5202), b = b || d("PageTransitionPriorities").DEFAULT, j[b] || (j[b] = []), j[b].push(a)
        },
        removeHandler: function(a, b) {
            b = b || d("PageTransitionPriorities").DEFAULT;
            var c = -1;
            j[b] && (c = j[b].indexOf(a));
            c > -1 && j[b].splice(c, 1)
        },
        registerCompletionCallback: function(a) {
            k.push(a)
        },
        getMostRecentURI: n,
        getReferrerURI: c("getReferrerURI"),
        _getTransitionHandlers: function() {
            return j
        },
        _getCompletionCallbacks: function() {
            return k
        },
        _resetCompletionCallbacks: function() {
            k = []
        },
        __onClick: e,
        __onSubmit: f
    };
    var l = null;

    function b(a) {
        l = a, c("setTimeoutAcrossTransitions")(function() {
            l = null
        }, 0)
    }

    function e(a) {
        if (l) {
            if (!a.isDefaultPrevented()) {
                m(l);
                var b = l.getAttribute("href");
                b && c("goURI")(b)
            }
            a.kill()
        }
    }

    function m(a) {
        var b = a.getAttribute("href") || "",
            d = c("computeRelativeURI")(n().getQualifiedURI().toString(), b).toString();
        b != d && a.setAttribute("href", d)
    }

    function f(a, b) {
        b = b;
        var e = a.getTarget();
        if (d("Form").getAttribute(e, "rel") || d("Form").getAttribute(e, "target")) return;
        var f = new(c("URI"))(d("Form").getAttribute(e, "action"));
        f = c("computeRelativeURI")(n().toString(), f.toString());
        e.setAttribute("action", f.toString());
        if ((d("Form").getAttribute(e, "method") || "GET").toUpperCase() == "GET") {
            e = d("Form").serialize(e);
            b && (d("DOMQuery").isNodeOfType(b, "input") && b.type === "submit" || (b = d("Parent").byTag(b, "button"))) && b.name && (e[b.name] = b.value);
            typeof f === "string" && (f = new(c("URI"))(f));
            c("goURI")(f.addQueryData(e));
            a.kill()
        }
    }
    d("LinkController").registerFallbackHandler(b);

    function n() {
        if (a.PageTransitions && a.PageTransitions.isInitialized()) return a.PageTransitions.getMostRecentURI();
        else {
            var b = c("URI").getRequestURI(!1);
            b = b.getUnqualifiedURI();
            var d = new(c("URI"))(b).setFragment(""),
                e = b.getFragment();
            e.charAt(0) === "!" && d.toString() === e.substr(1) && (b = d);
            return b
        }
    }
    f = e;
    g["default"] = f
}), 98);
__d("Keys", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    });
    f["default"] = a
}), 66);
__d("LayerHideSources", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BLUR: "blur",
        ESCAPE: "escape",
        LAYER_CANCEL_BUTTON: "layerCancelButton",
        LAYER_HIDE_BUTTON: "layerHideButton",
        TRANSITION: "transition"
    });
    b = a;
    f["default"] = b
}), 66);
__d("LayerHideOnEscape", ["Event", "Keys", "LayerHideSources"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this._layer = a
        }
        var b = a.prototype;
        b.enable = function() {
            this._subscription = this._layer.subscribe("key", this.handle.bind(this))
        };
        b.disable = function() {
            this._subscription != null && this._subscription.unsubscribe(), this._subscription = null
        };
        b.handle = function(a, b) {
            if (c("Event").getKeyCode(b) === c("Keys").ESC) {
                this._layer.hide(c("LayerHideSources").ESCAPE);
                return !1
            }
            return void 0
        };
        return a
    }();
    Object.assign(a.prototype, {
        _subscription: null
    });
    g["default"] = a
}), 98);
__d("Base64", [], (function(a, b, c, d, e, f) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function h(a) {
        a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
        return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63))
    }
    var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

    function j(a) {
        a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
        return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255)
    }
    var k = {
        encode: function(a) {
            a = unescape(encodeURI(a));
            var b = (a.length + 2) % 3;
            a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
            return a.slice(0, a.length + b - 2) + "==".slice(b)
        },
        decode: function(a) {
            a = a.replace(/[^A-Za-z0-9+\/]/g, "");
            var b = a.length + 3 & 3;
            a = (a + "AAA".slice(b)).replace(/..../g, j);
            a = a.slice(0, a.length + b - 3);
            try {
                return decodeURIComponent(escape(a))
            } catch (a) {
                throw new Error("Not valid UTF-8")
            }
        },
        encodeObject: function(a) {
            return k.encode(JSON.stringify(a))
        },
        decodeObject: function(a) {
            return JSON.parse(k.decode(a))
        },
        encodeNums: function(a) {
            return String.fromCharCode.apply(String, a.map(function(a) {
                return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63)
            }))
        }
    };
    a = k;
    f["default"] = a
}), 66);
__d("getVendorPrefixedName", ["invariant", "ExecutionEnvironment", "UserAgent", "camelize"], (function(a, b, c, d, e, f, g, h) {
    var i = {},
        j = ["Webkit", "ms", "Moz", "O"],
        k = new RegExp("^(" + j.join("|") + ")"),
        l = d("ExecutionEnvironment").canUseDOM ? document.createElement("div").style : {};

    function m(a) {
        for (var b = 0; b < j.length; b++) {
            var c = j[b] + a;
            if (c in l) return c
        }
        return null
    }

    function n(a) {
        switch (a) {
            case "lineClamp":
                return c("UserAgent").isEngine("WebKit >= 315.14.2") ? "WebkitLineClamp" : null;
            default:
                return null
        }
    }

    function a(a) {
        var b = c("camelize")(a);
        if (i[b] === void 0) {
            var e = b.charAt(0).toUpperCase() + b.slice(1);
            k.test(e) && h(0, 957, a);
            d("ExecutionEnvironment").canUseDOM ? i[b] = b in l ? b : m(e) : i[b] = n(b)
        }
        return i[b]
    }
    g["default"] = a
}), 98);
__d("shield", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++) d[e - 2] = arguments[e];
        if (typeof a !== "function") throw new TypeError("shield expects a function as the first argument");
        return function() {
            return a.apply(b, d)
        }
    }
    f["default"] = a
}), 66);
__d("BrowserSupportCore", ["getVendorPrefixedName"], (function(a, b, c, d, e, f) {
    a = {
        hasCSSAnimations: function() {
            return !!b("getVendorPrefixedName")("animationName")
        },
        hasCSSTransforms: function() {
            return !!b("getVendorPrefixedName")("transform")
        },
        hasCSS3DTransforms: function() {
            return !!b("getVendorPrefixedName")("perspective")
        },
        hasCSSTransitions: function() {
            return !!b("getVendorPrefixedName")("transition")
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("BrowserSupport", ["BrowserSupportCore", "ExecutionEnvironment", "UserAgent_DEPRECATED", "getVendorPrefixedName", "memoize"], (function(a, b, c, d, e, f, g) {
    var h = null;

    function i() {
        if (d("ExecutionEnvironment").canUseDOM) {
            h || (h = document.createElement("div"));
            return h
        }
        return null
    }
    b = function(a) {
        return c("memoize")(function() {
            var b = i();
            return !b ? !1 : a(b)
        })
    };
    e = b(function(a) {
        a.style.cssText = "position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";
        return /sticky/.test(a.style.position)
    });
    f = b(function(a) {
        return "scrollSnapType" in a.style || "webkitScrollSnapType" in a.style || "msScrollSnapType" in a.style
    });
    var j = b(function(a) {
        return "scrollBehavior" in a.style
    });
    b = b(function(a) {
        if (!("pointerEvents" in a.style)) return !1;
        a.style.cssText = "pointer-events:auto";
        return a.style.pointerEvents === "auto"
    });
    var k = c("memoize")(function() {
            return !(d("UserAgent_DEPRECATED").webkit() && !d("UserAgent_DEPRECATED").chrome() && d("UserAgent_DEPRECATED").windows()) && "FileList" in window && "FormData" in window
        }),
        l = c("memoize")(function() {
            return !!a.blob
        }),
        m = c("memoize")(function() {
            return d("ExecutionEnvironment").canUseDOM && document.createElementNS && document.createElementNS("http://www.w3.org/2000/svg", "foreignObject").toString().includes("SVGForeignObject")
        }),
        n = c("memoize")(function() {
            return !!window.MutationObserver
        }),
        o = c("memoize")(function() {
            var a = {
                    transition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "mozTransitionEnd",
                    OTransition: "oTransitionEnd"
                },
                b = c("getVendorPrefixedName")("transition");
            return a[b] || null
        }),
        p = function() {
            return !!window.CanvasRenderingContext2D
        };
    g.hasCSSAnimations = c("BrowserSupportCore").hasCSSAnimations;
    g.hasCSSTransforms = c("BrowserSupportCore").hasCSSTransforms;
    g.hasCSS3DTransforms = c("BrowserSupportCore").hasCSS3DTransforms;
    g.hasCSSTransitions = c("BrowserSupportCore").hasCSSTransitions;
    g.hasPositionSticky = e;
    g.hasScrollSnapPoints = f;
    g.hasScrollBehavior = j;
    g.hasPointerEvents = b;
    g.hasFileAPI = k;
    g.hasBlobFactory = l;
    g.hasSVGForeignObject = m;
    g.hasMutationObserver = n;
    g.getTransitionEndEvent = o;
    g.hasCanvasRenderingContext2D = p
}), 98);
__d("React", ["cr:1108857", "cr:1294158", "gkx"], (function(a, b, c, d, e, f) {
    var g = b("cr:1294158").useSyncExternalStore;

    function a(a, b, c) {
        return g(b, c)
    }
    b("gkx")("4166") && (b("cr:1294158").useMutableSource = a, b("cr:1294158").unstable_useMutableSource = a);
    e.exports = b("cr:1294158")
}), null);
/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-0.0.0", ["React"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a && typeof a === "object" && "default" in a ? a["default"] : a
    }
    var g = a(b("React"));
    d = {};
    var h = {
        exports: d
    };

    function i() {
        h.exports = g
    }
    var j = !1;

    function k() {
        j || (j = !0, i());
        return h.exports
    }

    function c(a) {
        switch (a) {
            case void 0:
                return k()
        }
    }
    e.exports = c
}), null);
__d("react", ["react-0.0.0"], (function(a, b, c, d, e, f) {
    e.exports = b("react-0.0.0")()
}), null);