(this["webpackJsonpsmartsupp-widget2"] = this["webpackJsonpsmartsupp-widget2"] || []).push([
    [1], {
        104: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return g
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "e", (function() {
                return O
            }));
            var a = n(8),
                r = n(15),
                i = n(16),
                o = n(77),
                c = n(221);

            function s() {
                var e = Object(a.a)(["\n\t.app {\n\t\tfont-family: ", ";\n\t\theight: 100%;\n\t}\n\t.emoji {\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin-bottom: -3px;\n\t\tmargin-left: 3px;\n\t\tmargin-right: 3px;\n\t}\n\t.material-icons {\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-feature-settings: 'liga';\n\t\t-webkit-font-smoothing: antialiased;\n\t}\n\t:-ms-input-placeholder {\n\t\topacity: 0.5 !important;\n\t\tcolor: ", ";\n\t}\n\tdiv[id^='__lpform_'] {\n\t\tdisplay: none;\n\t}\n\thtml {\n\t\t-webkit-backface-visibility: hidden;\n\t\t-webkit-font-smoothing: antialiased; // is here for Safari flickering\n\t}\n\n\t#chat-application {\n\t\tuser-select: none !important;\n\t}\n"]);
                return s = function() {
                    return e
                }, e
            }

            function u() {
                var e = Object(a.a)(["\n\tpadding: 0px !important;\n"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = Object(a.a)(["\n\tcolor: ", ";\n"]);
                return d = function() {
                    return e
                }, e
            }

            function l() {
                var e = Object(a.a)(["\n\tpadding-top: ", "px;\n"]);
                return l = function() {
                    return e
                }, e
            }
            var g = Object(r.a)(l(), 2 * i.c),
                f = Object(r.a)(d(), o.a.darkerGrey),
                p = Object(r.a)(u()),
                b = 5,
                O = Object(r.a)(s(), c.b, o.a.grey)
        },
        105: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            }));
            var a = n(51),
                r = n(6),
                i = n(14),
                o = "personalDataProcessingConsent",
                c = function(e, t) {
                    var n, c = Object(r.a)().options,
                        s = c.nameControl,
                        u = c.numberControl,
                        d = c.emailControl,
                        l = c.privacyNoticeCheckRequired,
                        g = c.privacyNoticeEnabled,
                        f = c.groupSelectEnabled,
                        p = Boolean(null === t || void 0 === t ? void 0 : t.name),
                        b = Boolean(null === t || void 0 === t ? void 0 : t.email),
                        O = Boolean(null === t || void 0 === t ? void 0 : t.group),
                        h = Boolean(null === t || void 0 === t ? void 0 : t.phone),
                        m = Boolean(null === t || void 0 === t || null === (n = t.variables) || void 0 === n ? void 0 : n.personalDataProcessingConsent),
                        v = [];
                    d && !b && v.unshift({
                        type: a.a.Text,
                        name: "email",
                        fullWidth: !0,
                        label: i.a.translate("authForm.yourEmail"),
                        multiline: !1,
                        placeHolder: i.a.translate("authForm.yourEmail"),
                        validations: ["required", "isEmail"],
                        value: ""
                    }), s && !p && v.unshift({
                        type: a.a.Text,
                        name: "name",
                        fullWidth: !0,
                        label: i.a.translate("authForm.yourName"),
                        multiline: !1,
                        placeHolder: i.a.translate("authForm.yourName"),
                        validations: ["required"],
                        value: ""
                    }), u && !h && v.push({
                        type: a.a.Text,
                        name: "phone",
                        placeHolder: i.a.translate("authForm.yourPhone"),
                        label: i.a.translate("authForm.yourPhone"),
                        validations: ["required", a.b.phone],
                        multiline: !1,
                        fullWidth: !0,
                        value: ""
                    });
                    var j = null === t || void 0 === t ? void 0 : t.group;
                    return f && e && e.length > 0 && v.push({
                            type: a.a.DropDown,
                            name: "group",
                            fullWidth: !0,
                            label: "",
                            multiline: !1,
                            placeHolder: i.a.translate("authForm.group"),
                            validations: ["required"],
                            value: O && j ? j : "",
                            greyBg: !0,
                            choices: e || []
                        }),
                        function(e, t, n, a) {
                            return a && e.length > 0 && !t || a && !t && n
                        }(v, m, l, g) && v.push({
                            type: a.a.Checkbox,
                            name: o,
                            fullWidth: !0,
                            label: "",
                            multiline: !1,
                            placeHolder: "",
                            validations: l ? ["required"] : [],
                            requiredCheck: !!l,
                            value: ""
                        }), v
                }
        },
        106: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "g", (function() {
                return u
            })), n.d(t, "h", (function() {
                return d
            }));
            var a = 1212,
                r = 1102,
                i = 1215,
                o = 1211,
                c = 1213,
                s = 1209,
                u = 1214,
                d = 2147483647
        },
        11: function(e, t, n) {
            "use strict";
            var a, r, i, o, c, s, u;
            n.d(t, "e", (function() {
                    return a
                })), n.d(t, "f", (function() {
                    return r
                })), n.d(t, "c", (function() {
                    return i
                })), n.d(t, "a", (function() {
                    return o
                })), n.d(t, "g", (function() {
                    return c
                })), n.d(t, "b", (function() {
                    return s
                })), n.d(t, "d", (function() {
                    return u
                })),
                function(e) {
                    e.Initial = "INITIAL", e.Loading = "LOADING", e.Success = "SUCCESS", e.Failure = "FAILURE"
                }(a || (a = {})),
                function(e) {
                    e.Initial = "INITIAL", e.Failure = "FAILURE", e.NotAllowedAsFirstMessage = "NOT_ALLOWED_AS_FIRST_MESSAGE", e.FileTooBig = "FILE_TOO_BIG", e.TooManyFiles = "TOO_MANY_FILES", e.FilesWerentProcessed = "FILES_WERENT_PROCESSED", e.BadExtension = "BAD_EXTENSION", e.SameMessageTwice = "SAME_MESSAGE_TWICE"
                }(r || (r = {})),
                function(e) {
                    e.Initial = "INITIAL", e.Loading = "LOADING"
                }(i || (i = {})),
                function(e) {
                    e[e.Good = 5] = "Good", e[e.Normal = 3] = "Normal", e[e.Bad = 1] = "Bad"
                }(o || (o = {})),
                function(e) {
                    e.Disconnect = "DISCONNECT", e.UploadFailure = "UPLOAD_FAILURE", e.FileRestricted = "FILE_RESTRICTED", e.MessageRestricted = "MESSAGE_RESTRICTED"
                }(c || (c = {})),
                function(e) {
                    e.ClosedByVisitor = "CLOSED_BY_VISITOR", e.Opened = "OPENED", e.Pending = "PENDING", e.Resolved = "RESOLVED", e.Served = "SERVED"
                }(s || (s = {})),
                function(e) {
                    e.Closed = "closed", e.Open = "open", e.Pending = "pending", e.Served = "served"
                }(u || (u = {}))
        },
        12: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return a
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            })), n.d(t, "h", (function() {
                return i
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "i", (function() {
                return g
            }));
            var a, r = n(6);
            ! function(e) {
                e.Internal = "internal", e.Universal = "universal"
            }(a || (a = {}));
            var i, o = "Smartsupp.com",
                c = Object(r.a)().getBaseUrl();
            ! function(e) {
                e.Free = "free", e.Trial = "trial", e.Standard = "standard", e.Pro = "pro"
            }(i || (i = {}));
            var s, u, d = 5;
            ! function(e) {
                e.Telefon = "telefon", e.Telephone = "telephone", e.Name = "name", e.Group = "group", e.Email = "email", e.Phone = "phone", e.Variables = "variables", e.Language = "language", e.ChatClose = "chat:close", e.ChatOpen = "chat:open", e.ChatShow = "chat:show", e.ChatHide = "chat:hide", e.ThemeColor = "theme:color", e.Logout = "logout", e.ChatMessage = "chat:message", e.RecordingDisable = "recording:disable", e.RecordingOff = "recording:off", e.SettingsGetTranslates = "settings:get_translates", e.HtmlApply = "html:apply", e.On = "on"
            }(s || (s = {})),
            function(e) {
                e.MessageSent = "message_sent", e.MessageReceived = "message_received"
            }(u || (u = {}));
            var l = "?size=80",
                g = Object(r.a)().options.orientation
        },
        124: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            }));
            var a = n(5),
                r = n(54),
                i = n(528),
                o = n(1),
                c = n(21),
                s = n(17),
                u = {
                    agents: [],
                    connectedAgents: [],
                    rating: void 0,
                    isTyping: !1,
                    status: o.AccountStatus.Offline
                },
                d = Object(i.a)(u, Object(r.a)(c.a.setAgents, (function(e, t) {
                    var n = t.payload;
                    e.agents = n
                })), Object(r.a)(c.a.setConnectedAgents, (function(e, t) {
                    var n = t.payload;
                    e.connectedAgents = n
                })), Object(r.a)(c.a.setRating, (function(e, t) {
                    var n = t.payload;
                    e.rating = n
                })), Object(r.a)(c.a.setIsAgentTyping, (function(e, t) {
                    var n = t.payload;
                    e.isTyping = n
                })), Object(r.a)(c.a.setStatus, (function(e, t) {
                    var n = t.payload;
                    e.status = n
                })), Object(r.a)(c.a.updateAgentStatus, (function(e, t) {
                    var n = t.payload;
                    e.agents = e.agents.map((function(e) {
                        return e.id === n.id ? Object(a.a)(Object(a.a)({}, e), {}, {
                            status: n.status
                        }) : e
                    })), e.connectedAgents = e.connectedAgents.map((function(e) {
                        return e.id === n.id ? Object(a.a)(Object(a.a)({}, e), {}, {
                            status: n.status
                        }) : e
                    }))
                })), Object(r.a)(c.a.updateAgent, (function(e, t) {
                    var n = t.payload;
                    e.agents = e.agents.map((function(e) {
                        return e.id === n.id ? Object(a.a)(Object(a.a)({}, e), n.changes) : e
                    })), e.connectedAgents = e.connectedAgents.map((function(e) {
                        return e.id === n.id ? Object(a.a)(Object(a.a)({}, e), n.changes) : e
                    }))
                })), Object(r.a)(c.a.addConnectedAgent, (function(e, t) {
                    var n = t.payload,
                        a = Object(s.f)(n);
                    e.connectedAgents.push(a)
                })), Object(r.a)(c.a.addConnectedAgentFromTransfer, (function(e, t) {
                    var n = t.payload,
                        a = Object(s.f)(n.assigned);
                    e.connectedAgents.push(a)
                })), Object(r.a)(c.a.removeConnectedAgentFromTransfer, (function(e, t) {
                    var n = t.payload,
                        a = Object(s.f)(n.unassigned);
                    e.connectedAgents = e.connectedAgents.filter((function(e) {
                        return e.id !== a.id
                    }))
                })), Object(r.a)(c.a.removeAllConnectedAgents, (function(e, t) {
                    e.connectedAgents = []
                })), Object(r.a)(c.a.removeConnectedAgent, (function(e, t) {
                    var n = t.payload;
                    e.connectedAgents = e.connectedAgents.filter((function(e) {
                        return e.id !== n
                    }))
                })), Object(r.a)(c.a.deleteAgent, (function(e, t) {
                    var n = t.payload;
                    e.agents = e.agents.filter((function(e) {
                        return e.id !== n
                    })), e.connectedAgents = e.connectedAgents.filter((function(e) {
                        return e.id !== n
                    }))
                })))
        },
        126: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return T
            })), n.d(t, "b", (function() {
                return S
            }));
            var a = n(5),
                r = n(52),
                i = n(528),
                o = n(54),
                c = n(549),
                s = n(1),
                u = n(13),
                d = n(19),
                l = n(51),
                g = n(11),
                f = n(27),
                p = n(6),
                b = "_ss.enableSounds",
                O = localStorage.getItem(b),
                h = n(41),
                m = n(17),
                v = n(14),
                j = n(53),
                y = n(26),
                T = {
                    currentTriggerMessageId: void 0,
                    messages: [],
                    enableSounds: O ? "true" === O : void 0 === Object(p.a)().options.enableSounds || Object(p.a)().options.enableSounds,
                    emojiPickerState: !1,
                    inputText: Object(h.b)(y.i) || "",
                    isTyping: !1,
                    fakeTyping: !1,
                    warningBarState: g.f.Initial,
                    fileUploadState: g.c.Initial,
                    lastReadAt: null,
                    messageSendingState: g.e.Initial,
                    acceptedFileTypes: [],
                    acceptedFileExtensions: [],
                    acceptedFileMaxSize: 0,
                    currentBotName: void 0
                },
                S = Object(i.a)(T, Object(o.a)(u.MessageAction.setEnableSoundsState, (function(e, t) {
                    localStorage.setItem(b, "".concat(!e.enableSounds)), e.enableSounds = !e.enableSounds
                })), Object(o.a)(u.MessageAction.finishTranscript, (function(e, t) {
                    var n = t.payload;
                    e.messages.push({
                        type: s.MessageContent.Type.Text,
                        author: s.MessageSubType.System,
                        created: new Date,
                        agentId: null,
                        id: Object(c.a)(),
                        text: v.a.translate("emailTranscript.positiveFeedback").replace("$$", n)
                    })
                })), Object(o.a)(u.MessageAction.setInputValue, (function(e, t) {
                    var n = t.payload,
                        a = n.value,
                        r = n.messageId,
                        i = n.name,
                        o = e.messages.find((function(e) {
                            return e.id === r && (e.type === s.MessageContent.Type.QuestionForm || e.type === s.MessageContent.Type.RateForm)
                        }));
                    if (o) {
                        var c = o.inputs.find((function(e) {
                            return e.name === i
                        }));
                        c ? c.value = a : console.error("'MessageAction.setInputValue' called with wrong input ID, please check the code that called this")
                    } else console.error("'MessageAction.setInputValue' called with wrong message ID, please check the code that called this")
                })), Object(o.a)(u.MessageAction.updateRatingMessage, (function(e, t) {
                    var n = t.payload,
                        a = n.rating,
                        r = n.messageId,
                        i = n.text,
                        o = n.inputName,
                        c = e.messages.find((function(e) {
                            return e.id === r && e.type === s.MessageContent.Type.RateForm
                        }));
                    if (c) {
                        var u = c.inputs.find((function(e) {
                            return e.name === o
                        }));
                        u ? (u.value = i || "", c.finishedRatingText = i, c.finished = !!i, c.rating = a, Object(j.g)(a)) : console.error("'MessageAction.updateRatingMessage' called with wrong input ID, please check the code that called this")
                    } else console.error("'MessageAction.updateRatingMessage' called with wrong message ID, please check the code that called this")
                })), Object(o.a)(u.MessageAction.submitForm, (function(e, t) {
                    var n = t.payload,
                        a = e.messages.find((function(e) {
                            return e.id === n && (e.type === s.MessageContent.Type.QuestionForm || e.type === s.MessageContent.Type.RateForm)
                        }));
                    a ? a.type === s.MessageContent.Type.QuestionForm && (a.finished = !0, a.author = s.MessageSubType.Contact) : console.error("'MessageAction.submitForm' called with wrong message ID, please check the code that called this")
                })), Object(o.a)(u.MessageAction.addMessageFromServer, (function(e, t) {
                    var n = t.payload.message;
                    if (Array.isArray(n)) {
                        var a = n.map((function(e) {
                            return Object(m.g)(e)
                        })).filter((function(e) {
                            return void 0 !== e
                        }));
                        e.messages = Object(r.a)(a)
                    } else {
                        var i = Object(m.g)(n);
                        i && e.messages.push(i)
                    }
                })), Object(o.a)(u.MessageAction.markAllAsRead, (function(e, t) {
                    e.messages.length > 0 && f.a.client.chatRead(), e.lastReadAt = (new Date).toISOString()
                })), Object(o.a)(u.MessageAction.setEmojiPickerState, (function(e, t) {
                    var n = t.payload;
                    e.emojiPickerState = n
                })), Object(o.a)(u.MessageAction.setWarningBarState, (function(e, t) {
                    var n = t.payload;
                    e.warningBarState = n
                })), Object(o.a)(u.MessageAction.setFileUploadState, (function(e, t) {
                    var n = t.payload;
                    e.fileUploadState = n
                })), Object(o.a)(u.MessageAction.setIsTyping, (function(e, t) {
                    var n = t.payload;
                    e.isTyping = n
                })), Object(o.a)(u.MessageAction.setIsFakeTyping, (function(e, t) {
                    var n = t.payload;
                    e.fakeTyping = n
                })), Object(o.a)(u.MessageAction.addImageMessage, (function(e, t) {
                    var n = t.payload,
                        a = {
                            author: s.MessageSubType.Contact,
                            created: new Date,
                            id: Object(c.a)(),
                            type: s.MessageContent.Type.Upload,
                            url: n.url,
                            name: n.name,
                            fileType: n.type,
                            uploadedWithError: n.uploadedWithError,
                            isImage: n.isImage,
                            thumb400: {
                                url: n.url400
                            }
                        };
                    e.messages.push(a)
                })), Object(o.a)(u.MessageAction.addRatingForm, (function(e, t) {
                    var n = t.payload;
                    e.messages.push(function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Date,
                            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object(c.a)(),
                            i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
                        return {
                            type: s.MessageContent.Type.RateForm,
                            author: s.MessageSubType.System,
                            created: a,
                            finished: t,
                            id: r,
                            headline: v.a.translate(e.formText),
                            inputs: [{
                                type: l.a.Text,
                                name: "rating",
                                placeHolder: v.a.translate(e.formPlaceholder),
                                label: v.a.translate(e.formText),
                                validations: ["required"],
                                multiline: !0,
                                fullWidth: !0,
                                value: n
                            }],
                            rating: e.type,
                            finishedRatingText: i
                        }
                    }(n, !1))
                })), Object(o.a)(u.MessageAction.setFormLoadingState, (function(e, t) {
                    var n = t.payload,
                        a = n.messageId,
                        r = n.loadingState,
                        i = e.messages.find((function(e) {
                            return e.id === a && e.type === s.MessageContent.Type.QuestionForm
                        }));
                    i ? i.formSendingState = r : console.error("'MessageAction.setFormLoadingState' called with wrong message ID, please check the code that called this")
                })), Object(o.a)(u.MessageAction.addAgentActivity, (function(e, t) {
                    var n = t.payload,
                        a = {
                            agentStatus: n.content.type,
                            author: n.subType,
                            created: new Date(n.createdAt),
                            agentId: n.agentId || null,
                            id: n.id,
                            type: n.content.type
                        };
                    e.messages.push(a)
                })), Object(o.a)(u.MessageAction.addSendTranscript, (function(e, t) {
                    var n = {
                        actionType: d.b.SendTranscript,
                        author: s.MessageSubType.System,
                        created: new Date,
                        id: Object(c.a)(),
                        type: s.MessageContent.Type.QuestionForm,
                        finished: !1,
                        text: v.a.translate("emailTranscript.sendCopy"),
                        inputs: [{
                            type: l.a.Text,
                            label: v.a.translate("emailTranscript.sendCopy"),
                            name: "email",
                            placeHolder: "email@address.com",
                            validations: ["required", "isEmail"],
                            multiline: !1,
                            fullWidth: !1,
                            value: ""
                        }]
                    };
                    e.messages.push(n)
                })), Object(o.a)(u.MessageAction.setInputText, (function(e, t) {
                    var n = t.payload;
                    e.inputText = n
                })), Object(o.a)(u.MessageAction.hideChatbotMessageOptions, (function(e, t) {
                    var n = t.payload,
                        r = e.messages.find((function(e) {
                            return e.id === n
                        }));
                    if (r) {
                        var i = e.messages.indexOf(r),
                            o = Object(a.a)(Object(a.a)({}, r), {}, {
                                showReplies: !1
                            });
                        e.messages[i] = o
                    }
                })), Object(o.a)(u.MessageAction.setLastRead, (function(e, t) {
                    var n = t.payload;
                    e.lastReadAt = n
                })), Object(o.a)(u.MessageAction.setMessageSendingState, (function(e, t) {
                    var n = t.payload;
                    e.messageSendingState = n
                })), Object(o.a)(u.MessageAction.setAcceptedFileTypes, (function(e, t) {
                    var n = t.payload;
                    e.acceptedFileTypes = n
                })), Object(o.a)(u.MessageAction.setAcceptedFileExtensions, (function(e, t) {
                    var n = t.payload;
                    e.acceptedFileExtensions = n
                })), Object(o.a)(u.MessageAction.setAcceptedFileMaxSize, (function(e, t) {
                    var n = t.payload;
                    e.acceptedFileMaxSize = n
                })), Object(o.a)(u.MessageAction.setBotName, (function(e, t) {
                    var n = t.payload;
                    e.currentBotName = n
                })))
        },
        127: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return A
            })), n.d(t, "a", (function() {
                return w
            }));
            var a, r, i, o = n(5),
                c = n(528),
                s = n(54),
                u = n(7),
                d = n(11),
                l = n(6),
                g = 1e3,
                f = 700,
                p = n(308),
                b = n.n(p),
                O = n(16),
                h = n(77),
                m = null !== (a = null === (r = Object(l.a)().options) || void 0 === r ? void 0 : r.color) && void 0 !== a ? a : O.b,
                v = function(e) {
                    var t = e.rgb().array(),
                        n = t[0],
                        a = t[1],
                        r = t[2];
                    return Math.sqrt(n * n * .299 + a * a * .587 + r * r * .114) < 180
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                        t = b()(e),
                        n = v(t),
                        a = t.hex(),
                        r = t.rotate(-15).saturate(-.25).lighten(.2).hex(),
                        i = t.rotate(0).saturate(.03).darken(.5).hex(),
                        o = n ? "white" : i,
                        c = n ? "white" : h.a.inputText,
                        s = n ? r : a,
                        u = n ? a : i;
                    return {
                        primary: a,
                        light: r,
                        dark: i,
                        isDark: n,
                        themeColorContrast: o,
                        textColor: c,
                        lightVariant: s,
                        darkVariant: u
                    }
                },
                y = n(105),
                T = n(41),
                S = n(26),
                A = {
                    requestState: d.e.Loading,
                    isWidgetOpen: "true" === Object(T.a)()[S.h],
                    theme: j(),
                    userData: void 0,
                    parentSize: {
                        height: window.parent.innerHeight || f,
                        width: window.parent.innerWidth || g
                    },
                    isWidgetOnline: !0,
                    isInputFocused: !1,
                    showMorePopper: !1,
                    authFormState: !1,
                    dataPrivacyState: !1,
                    authFormInputs: Object(y.a)([], void 0),
                    isWidgetDisplayedViaAPI: void 0,
                    isWidgetOpening: !1,
                    isWidgetLoaded: !1,
                    closeModalOpenedState: !1,
                    chatStatus: void 0,
                    documentFocus: !1,
                    openOnTrigger: null === (i = Object(l.a)().options) || void 0 === i ? void 0 : i.openOnTrigger
                },
                w = Object(c.a)(A, Object(s.a)(u.GeneralAction.setRequestState, (function(e, t) {
                    var n = t.payload;
                    e.requestState = n
                })), Object(s.a)(u.GeneralAction.widgetOpen, (function(e) {
                    e.isWidgetOpen = !0
                })), Object(s.a)(u.GeneralAction.widgetClose, (function(e) {
                    e.showMorePopper = !1, e.isWidgetOpen && (e.isInputFocused = !1), e.isWidgetOpen = !1
                })), Object(s.a)(u.GeneralAction.setUser, (function(e, t) {
                    var n = t.payload;
                    e.userData = n
                })), Object(s.a)(u.GeneralAction.widgetLoadedToggle, (function(e) {
                    e.isWidgetLoaded = !e.isWidgetLoaded
                })), Object(s.a)(u.GeneralAction.widgetOpeningToggle, (function(e) {
                    e.isWidgetOpening = !e.isWidgetOpening
                })), Object(s.a)(u.GeneralAction.dataPrivacyStateToggle, (function(e) {
                    e.dataPrivacyState = !e.dataPrivacyState
                })), Object(s.a)(u.GeneralAction.setThemeColor, (function(e, t) {
                    var n = t.payload;
                    e.theme = j(n)
                })), Object(s.a)(u.GeneralAction.updateUserStatus, (function(e, t) {
                    var n = t.payload;
                    e.userData && (e.userData = Object(o.a)(Object(o.a)({}, e.userData), {}, {
                        account: Object(o.a)(Object(o.a)({}, e.userData.account), {}, {
                            status: n
                        })
                    }))
                })), Object(s.a)(u.GeneralAction.updateUser, (function(e, t) {
                    var n = t.payload;
                    e.userData && (e.userData = Object(o.a)(Object(o.a)({}, e.userData), {}, {
                        visitor: Object(o.a)(Object(o.a)({}, e.userData.visitor), n)
                    }))
                })), Object(s.a)(u.GeneralAction.authFormStateToggle, (function(e) {
                    e.authFormState = !e.authFormState
                })), Object(s.a)(u.GeneralAction.createAuthFormInputs, (function(e, t) {
                    var n = t.payload;
                    e.authFormInputs = n
                })), Object(s.a)(u.GeneralAction.setSize, (function(e, t) {
                    var n = t.payload;
                    e.parentSize = n
                })), Object(s.a)(u.GeneralAction.widgetHide, (function(e) {
                    e.isWidgetDisplayedViaAPI = !1
                })), Object(s.a)(u.GeneralAction.widgetShow, (function(e) {
                    e.isWidgetDisplayedViaAPI = !0
                })), Object(s.a)(u.GeneralAction.widgetOffline, (function(e) {
                    e.isWidgetOnline = !1
                })), Object(s.a)(u.GeneralAction.widgetOnline, (function(e) {
                    e.isWidgetOnline = !0
                })), Object(s.a)(u.GeneralAction.setAuthFormInput, (function(e, t) {
                    var n = t.payload,
                        a = n.name,
                        r = n.value,
                        i = e.authFormInputs.find((function(e) {
                            return e.name === a
                        }));
                    i ? i.value = r : console.error("Input in auth not found")
                })), Object(s.a)(u.GeneralAction.inputFocusToggle, (function(e) {
                    e.isInputFocused = !e.isInputFocused
                })), Object(s.a)(u.GeneralAction.showMorePopperClose, (function(e) {
                    e.showMorePopper = !1
                })), Object(s.a)(u.GeneralAction.showMorePopperToggle, (function(e) {
                    e.showMorePopper = !e.showMorePopper
                })), Object(s.a)(u.GeneralAction.closeConversationModalToggle, (function(e) {
                    e.closeModalOpenedState = !e.closeModalOpenedState
                })), Object(s.a)(u.GeneralAction.setChatStatus, (function(e, t) {
                    var n = t.payload;
                    e.chatStatus = n
                })), Object(s.a)(u.GeneralAction.documentFocusToggle, (function(e) {
                    e.documentFocus = !e.documentFocus
                })))
        },
        13: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "MessageAction", (function() {
                return R
            })), n.d(t, "addAgent", (function() {
                return D
            })), n.d(t, "assignAgent", (function() {
                return W
            })), n.d(t, "setIsTyping", (function() {
                return B
            })), n.d(t, "addSendTranscript", (function() {
                return N
            })), n.d(t, "checkMessagesAndMarkAsRead", (function() {
                return P
            })), n.d(t, "setRating", (function() {
                return L
            })), n.d(t, "removeAgent", (function() {
                return U
            })), n.d(t, "unassignAgent", (function() {
                return V
            })), n.d(t, "removeAllAgents", (function() {
                return z
            })), n.d(t, "addRating", (function() {
                return H
            })), n.d(t, "createBotResponse", (function() {
                return Y
            })), n.d(t, "createMessage", (function() {
                return q
            })), n.d(t, "uploadFile", (function() {
                return Z
            })), n.d(t, "submitForm", (function() {
                return J
            })), n.d(t, "submitAuthForm", (function() {
                return $
            })), n.d(t, "addMessageFromServer", (function() {
                return Q
            })), n.d(t, "setWarningBar", (function() {
                return ee
            }));
            var a, r = n(5),
                i = n(10),
                o = n.n(i),
                c = n(20),
                s = n(305),
                u = n.n(s),
                d = n(30),
                l = n(43),
                g = n(1),
                f = n(306),
                p = n.n(f),
                b = n(4),
                O = n(25),
                h = n(7),
                m = n(21),
                v = n(136),
                j = function(e, t) {
                    var n = new Promise((function(t, n) {
                        var a = setTimeout((function() {
                            clearTimeout(a), n("Timed out in ".concat(e, "ms."))
                        }), e)
                    }));
                    return Promise.race([t, n])
                },
                y = n(11),
                T = n(19),
                S = n(44),
                A = n(105),
                w = n(27),
                E = n(75),
                M = n(6),
                x = n(17),
                C = n(22),
                I = n(12),
                _ = n(298),
                F = n(158),
                k = n(63),
                R = {
                    addRatingForm: Object(d.a)("messages/ADD_RATING_FORM", Object(d.b)()),
                    setInputValue: Object(d.a)("messages/SET_INPUT_VALUE", Object(d.b)()),
                    setLoadingState: Object(d.a)("messages/SET_LOADING_STATE", Object(d.b)()),
                    setEmojiPickerState: Object(d.a)("messages/SET_EMOJI_PICKER_STATE", Object(d.b)()),
                    setIsTyping: Object(d.a)("messages/SET_IS_TYPING", Object(d.b)()),
                    setIsFakeTyping: Object(d.a)("messages/SET_IS_FAKE_TYPING", Object(d.b)()),
                    updateRatingMessage: Object(d.a)("messages/UPDATE_RATING_MESSAGE", Object(d.b)()),
                    addMessageFromServer: Object(d.a)("messages/ADD_MESSAGE_FROM_SERVER", Object(d.b)()),
                    submitForm: Object(d.a)("messages/SUBMIT_FORM", Object(d.b)()),
                    setFormLoadingState: Object(d.a)("messages/SET_FORM_LOADING_STATE", Object(d.b)()),
                    addAgentActivity: Object(d.a)("messages/ADD_AGENT_ACTIVITY", Object(d.b)()),
                    setEnableSoundsState: Object(d.a)("general/SET_SOUNDS_ALLOWED_STATE", Object(d.b)()),
                    finishTranscript: Object(d.a)("messages/FINISH_TRANSCRIPT", Object(d.b)()),
                    markAllAsRead: Object(d.a)("messages/MARK_ALL_AS_READ"),
                    addSendTranscript: Object(d.a)("messages/ADD_SEND_TRANSCRIPT"),
                    addImageMessage: Object(d.a)("messages/ADD_IMAGE_MESSAGE", Object(d.b)()),
                    hideChatbotMessageOptions: Object(d.a)("messages/HIDE_CHATBOT_MESSAGE_OPTIONS", Object(d.b)()),
                    setInputText: Object(d.a)("messages/SET_INPUT_TEXT", Object(d.b)()),
                    setWarningBarState: Object(d.a)("messages/SET_WARNING_BAR_STATE", Object(d.b)()),
                    setFileUploadState: Object(d.a)("messages/SET_FILE_UPLOAD_STATE", Object(d.b)()),
                    setLastRead: Object(d.a)("messages/SET_UNREAD_INFO", Object(d.b)()),
                    setMessageSendingState: Object(d.a)("messages/SET_SENDING_STATE", Object(d.b)()),
                    setAcceptedFileTypes: Object(d.a)("messages/SET_ACCEPTED_FILE_TYPES", Object(d.b)()),
                    setAcceptedFileExtensions: Object(d.a)("messages/SET_ACCEPTED_FILE_EXTENSIONS", Object(d.b)()),
                    setAcceptedFileMaxSize: Object(d.a)("messages/SET_ACCEPTED_FILE_MAX_SIZE", Object(d.b)()),
                    createBotResponse: Object(d.a)("messages/CREATE_BOT_RESPONSE", Object(d.b)()),
                    setBotName: Object(d.a)("messages/SET_BOT_NAME", Object(d.b)())
                },
                D = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = a().agent.agents, n(m.a.addConnectedAgent(e && e.agent)), n(Q({
                                            message: e.message,
                                            agents: r
                                        })), setTimeout((function() {
                                            return n(P())
                                        }), 0);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                W = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(m.a.addConnectedAgentFromTransfer(e)), r = a().agent.agents, n(Q({
                                            message: e.message,
                                            agents: r
                                        }));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                G = p()((function(e) {
                    w.a.client.chatTyping(!1), e(R.setIsTyping(!1))
                }), F.a),
                B = function() {
                    return function() {
                        var e = Object(c.a)(o.a.mark((function e(t, n) {
                            var a, r;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a = n(), r = a.messages, r.isTyping || (t(R.setIsTyping(!0)), w.a.client.chatTyping(!0)), G(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                N = function() {
                    return function() {
                        var e = Object(c.a)(o.a.mark((function e(t, n) {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t(R.addSendTranscript()), setTimeout((function() {
                                            return t(P())
                                        }), 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                P = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r, i, c, s, u, d, l, f, p, b;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = a(), i = r.messages, c = r.general, s = i.lastReadAt, u = c.isWidgetOpen, d = i.messages, l = d.filter((function(e) {
                                            return e.author !== g.MessageSubType.Contact
                                        })), f = Object(x.n)(l), p = f.length > 0 ? f[f.length - 1].created : void 0, e && n(R.markAllAsRead()), u && (b = s ? new Date(s) : p, p && b && p.getTime() >= b.getTime() && !document.hidden && n(R.markAllAsRead()));
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                L = function(e, t) {
                    return function() {
                        var n = Object(c.a)(o.a.mark((function n(a, i) {
                            var c;
                            return o.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (c = i().messages.messages.find((function(t) {
                                                return t.id === e && t.type === g.MessageContent.Type.RateForm
                                            }))) {
                                            n.next = 4;
                                            break
                                        }
                                        return console.error("'MessageAction.submitForm' called with wrong message ID, please check the code that called this"), n.abrupt("return");
                                    case 4:
                                        c = Object(r.a)(Object(r.a)({}, c), {}, {
                                            rating: t.type
                                        }), a(R.updateRatingMessage({
                                            messageId: e,
                                            inputName: "rating",
                                            rating: t.type
                                        })), X(c, (function() {
                                            a(R.submitForm(e)), setTimeout((function() {
                                                return a(P())
                                            }), 0)
                                        }));
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                U = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return function() {
                        var n = Object(c.a)(o.a.mark((function n(a, r) {
                            var i, c, s;
                            return o.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        r().agent.connectedAgents.length <= 1 && !1 === t && (null === (i = Object(M.a)().options) || void 0 === i ? void 0 : i.ratingEnabled) && O.b.chatStatus(r()) === y.b.Served && a(H()), c = r().agent.agents, a(Q({
                                            message: e.message,
                                            agents: c
                                        })), (s = e.message.content.data.agentId) && a(m.a.removeConnectedAgent(s));
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                V = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = a().agent.agents, n(Q({
                                            message: e.message,
                                            agents: r
                                        })), n(m.a.removeConnectedAgentFromTransfer(e));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                z = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r, i;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        (null === (r = Object(M.a)().options) || void 0 === r ? void 0 : r.ratingEnabled) && O.b.chatStatus(a()) === y.b.Served && (n(H()), n(h.GeneralAction.setChatStatus(y.b.Resolved))), i = a().agent.agents, n(Q({
                                            message: e.message,
                                            agents: i
                                        })), n(m.a.removeAllConnectedAgents());
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                H = function() {
                    return function() {
                        var e = Object(c.a)(o.a.mark((function e(t, n) {
                            var a, r;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, w.a.client.chatRateInit();
                                    case 3:
                                        a = e.sent, r = n().agent.agents, t(Q({
                                            message: a.message,
                                            agents: r
                                        })), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                Y = function(e, t, n) {
                    return Object(c.a)(o.a.mark((function a() {
                        var r, i;
                        return o.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    r = Object(x.k)(e), Object(k.c)(e), i = function() {
                                        return new Promise((function(e, a) {
                                            e(w.a.client.chatMessage({
                                                content: {
                                                    type: g.MessageContent.Type.Text,
                                                    text: r
                                                },
                                                quickReply: {
                                                    replyTo: n,
                                                    payload: t
                                                }
                                            }))
                                        }))
                                    }, j(F.b, i());
                                case 4:
                                case "end":
                                    return a.stop()
                            }
                        }), a)
                    })))
                },
                q = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return function() {
                        var n = Object(c.a)(o.a.mark((function n(a, r) {
                            var i, c, s, u, d, l, f, p, b, m, T, C, _;
                            return o.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (s = r().messages, u = r().general, d = s.messages, l = r().agent, f = l.status, a(R.setMessageSendingState(y.e.Loading)), p = O.b.isUserAuthenticated(r()) || !1, b = Object(A.a)(null === (i = u.userData) || void 0 === i ? void 0 : i.account.groups, null === (c = u.userData) || void 0 === c ? void 0 : c.visitor), a(h.GeneralAction.createAuthFormInputs(b)), !(t && f === g.AccountStatus.Offline && !p && b.length > 0 || Object(M.a)().options.requireLogin && !p && b.length > 0)) {
                                            n.next = 13;
                                            break
                                        }
                                        return a(h.GeneralAction.authFormStateToggle()), a(R.setMessageSendingState(y.e.Initial)), n.abrupt("return");
                                    case 13:
                                        if (!Object(x.o)(d, e)) {
                                            n.next = 17;
                                            break
                                        }
                                        return a(ee(y.f.SameMessageTwice)), a(R.setMessageSendingState(y.e.Initial)), n.abrupt("return");
                                    case 17:
                                        m = Object(x.k)(e), T = v.a.status(r()) === g.AccountStatus.Offline;
                                        try {
                                            a(R.setInputText("")), C = function() {
                                                return new Promise((function(e, t) {
                                                    e(w.a.client.chatMessage({
                                                        isOffline: T,
                                                        content: {
                                                            type: g.MessageContent.Type.Text,
                                                            text: m
                                                        }
                                                    }))
                                                }))
                                            }, (_ = j(F.b, C())).then((function(e) {
                                                a(Q({
                                                    message: e,
                                                    agents: l.agents
                                                })), S.b.emit(I.e.MessageSent, e)
                                            })), _.catch((function(e) {
                                                a(R.setMessageSendingState(y.e.Initial)), Object(E.a)("error.sendingMessageTooLong", e)
                                            })), Object(k.g)(f), a(R.setMessageSendingState(y.e.Success))
                                        } catch (o) {
                                            a(R.setMessageSendingState(y.e.Failure)), Object(E.a)("error.sendingMessage", o)
                                        }
                                    case 20:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                X = function() {
                    var e = Object(c.a)(o.a.mark((function e(t, n) {
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, w.a.client.chatRate({
                                        messageId: t.id,
                                        text: t.inputs[0].value ? t.inputs[0].value.toString() : void 0,
                                        value: t.rating
                                    });
                                case 3:
                                    n(), e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0), Object(E.a)("error.sendingRating", e.t0);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                K = function() {
                    var e = Object(c.a)(o.a.mark((function e(t, n, a) {
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, w.a.client.chatTranscript(t, n);
                                case 3:
                                    a(), e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0), Object(E.a)("error.sendingTranscript", e.t0);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n) {
                            var a, r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, n(R.setFileUploadState(y.c.Loading)), t.next = 4, w.a.client.chatUploadInit();
                                    case 4:
                                        return a = t.sent, (r = new FormData).append("file", e, e.name), t.next = 9, u.a.post(a.url, r, {
                                            headers: {
                                                "content-type": "multipart/form-data"
                                            },
                                            maxContentLength: 1 / 0
                                        });
                                    case 9:
                                        return t.next = 11, w.a.client.chatUploadFinish(a.token);
                                    case 11:
                                        n(R.setFileUploadState(y.c.Initial)), t.next = 18;
                                        break;
                                    case 14:
                                        t.prev = 14, t.t0 = t.catch(0), n(R.setWarningBarState(y.f.Failure)), Object(E.a)("error.uploadingImage", t.t0);
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 14]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                J = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r, i;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = a().messages.messages.find((function(t) {
                                                return t.id === e && (t.type === g.MessageContent.Type.QuestionForm || t.type === g.MessageContent.Type.RateForm)
                                            }))) {
                                            t.next = 4;
                                            break
                                        }
                                        return console.error("'MessageAction.submitForm' called with wrong message ID, please check the code that called this"), t.abrupt("return");
                                    case 4:
                                        if (r.type !== g.MessageContent.Type.RateForm) {
                                            t.next = 8;
                                            break
                                        }
                                        return n(R.updateRatingMessage({
                                            messageId: e,
                                            inputName: "rating",
                                            rating: r.rating,
                                            text: r.inputs[0].value.toString() || ""
                                        })), X(r, (function() {
                                            n(R.submitForm(e)), setTimeout((function() {
                                                return n(P())
                                            }), 0)
                                        })), t.abrupt("return");
                                    case 8:
                                        if (r.type !== g.MessageContent.Type.QuestionForm || r.actionType !== T.b.SendTranscript) {
                                            t.next = 12;
                                            break
                                        }
                                        return i = r.inputs[0].value.toString(), K(i, Object(M.a)().options.lang, (function() {
                                            n(R.finishTranscript(i)), n(R.submitForm(e)), setTimeout((function() {
                                                return n(P())
                                            }), 0)
                                        })), t.abrupt("return");
                                    case 12:
                                        n(R.submitForm(e));
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                $ = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var i, c, s, u, d, g, f, p, b, O, m;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        i = a(), c = i.general, s = Object(x.d)(c.authFormInputs), u = c.userData, d = null === u || void 0 === u ? void 0 : u.visitor, g = Object(M.a)().options.privacyNoticeCheckRequired, f = null === d || void 0 === d ? void 0 : d.email, p = null === d || void 0 === d ? void 0 : d.name, b = null === d || void 0 === d ? void 0 : d.group, O = null === d || void 0 === d ? void 0 : d.phone, m = Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({}, (Boolean(f) || Boolean(s.email)) && {
                                            email: f || s.email
                                        }), (Boolean(p) || Boolean(s.name)) && {
                                            name: p || s.name
                                        }), (Boolean(s.group) || Boolean(b)) && {
                                            group: s.group || b
                                        }), (Boolean(O) || Boolean(s.phone)) && {
                                            phone: O || s.phone
                                        }), Boolean(s.personalDataProcessingConsent) && g && {
                                            personalDataProcessingConsent: s.personalDataProcessingConsent
                                        });
                                        try {
                                            Object(C.b)("visitorClient.client.authenticate", w.a.client.authenticate, m), w.a.client.authenticate(m).then((function() {
                                                setTimeout((function() {
                                                    return n(q(e, !1))
                                                }), _.a), n(h.GeneralAction.authFormStateToggle())
                                            })), Object(k.a)()
                                        } catch (o) {
                                            console.error("authentication fail", o), l.b((function(e) {
                                                l.a({
                                                    name: "authentication fail",
                                                    error: o
                                                })
                                            }))
                                        }
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                Q = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(R.addMessageFromServer(e)), r = e.message, O.b.shouldPlaySound(a()) && !Array.isArray(r) && Object(x.i)(r.subType, r.type);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                ee = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, r) {
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        clearTimeout(a), n(R.setWarningBarState(e)), a = setTimeout((function() {
                                            return n(R.setWarningBarState(y.f.Initial))
                                        }), 5e3);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            document.addEventListener("visibilitychange", (function() {
                var e = b.a.getState().general.isWidgetOnline,
                    t = b.a.getState().general.isWidgetOpen,
                    n = b.a.getState().messages.messages.length > 0;
                t && !document.hidden && n && w.a.client.chatRead(), Object(C.b)("event listener visibilty", "isWidgetOnline", e), e || document.hidden || (Object(C.b)("reconnecting..."), w.a.client.connect())
            }))
        },
        133: function(e, t, n) {
            "use strict";
            var a = n(13);
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(94);
            n.d(t, "b", (function() {
                return r
            }));
            n(126)
        },
        136: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = {};
            n.r(a), n.d(a, "allAgents", (function() {
                return l
            })), n.d(a, "agents", (function() {
                return g
            })), n.d(a, "status", (function() {
                return p
            })), n.d(a, "reversedJoinedAgents", (function() {
                return b
            })), n.d(a, "agentToShowInTrigger", (function() {
                return O
            }));
            n(21);
            var r = n(52),
                i = n(23),
                o = n(1),
                c = n(6),
                s = n(161),
                u = n(69),
                d = Object(c.a)().options.visitorData || {},
                l = function(e) {
                    return e.agent.agents
                },
                g = Object(i.a)(l, u.userData, (function(e, t) {
                    var n = e.filter((function(e) {
                        return !e.disabled
                    }));
                    return Object(s.b)(n, d && d.group || t && t.visitor && t.visitor.group)
                })),
                f = Object(i.a)((function(e) {
                    return e.agent.connectedAgents
                }), (function(e) {
                    return e.filter((function(e) {
                        return !e.disabled
                    }))
                })),
                p = Object(i.a)(f, (function(e) {
                    return e.agent.status
                }), (function(e, t) {
                    var n = e.some((function(e) {
                        return e.status === o.AgentStatus.Online
                    })) ? o.AccountStatus.Online : o.AccountStatus.Offline;
                    return e.length > 0 ? n : t
                })),
                b = Object(i.a)(f, (function(e) {
                    return Object(r.a)(e).reverse()
                })),
                O = Object(i.a)(b, g, (function(e, t) {
                    var n = t.filter((function(e) {
                            return e.status === o.AgentStatus.Online
                        })),
                        a = t.filter((function(e) {
                            return e.status !== o.AgentStatus.Online
                        }));
                    return e.length ? e[0] : n.length ? n[Math.floor(Math.random() * n.length)] : a.length ? a[Math.floor(Math.random() * a.length)] : void 0
                }));
            n(124)
        },
        14: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(166),
                r = n(6),
                i = {
                    data: {},
                    defaultData: {},
                    customData: {}
                },
                o = function e() {
                    Object(a.a)(this, e)
                };
            o.translate = function(e) {
                return i.customData[e] || i.data[e] || i.defaultData[e] || "|".concat(e, "|")
            }, o.setData = function(e) {
                e && (i.data = e)
            }, o.setDefaultLanguageData = function(e) {
                e && (i.defaultData = e)
            }, o.setCustomLanguageData = function(e) {
                var t = Object(r.a)().options.translates;
                t[e] && (i.customData = t[e])
            }
        },
        158: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = 1e3,
                r = 5e3,
                i = 5e3
        },
        16: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            }));
            var a = "#1233DF",
                r = .9,
                i = 8
        },
        160: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return f
            }));
            var a = n(52),
                r = n(5),
                i = n(174),
                o = n(6),
                c = n(12),
                s = n(22),
                u = [],
                d = {
                    titleCase: !1
                },
                l = function() {
                    var e = Object(o.a)().options || {};
                    if (e.gaKey) {
                        var t = {
                            key: e.gaKey,
                            options: Object(r.a)(Object(r.a)({}, d), e.gaOptions),
                            type: c.f.Internal
                        };
                        u.push(t)
                    } else if (window.top.ga) try {
                        window.top.ga((function() {
                            var e = window.top.ga.getAll();
                            if (Object(s.b)("topTrackers", e), e)
                                for (var t = 0; t < e.length; t += 1) {
                                    var n = {
                                        key: e[t].get("trackingId"),
                                        type: c.f.Universal,
                                        options: Object(r.a)(Object(r.a)({}, d), {}, {
                                            cookieDomain: e[t].get("cookieDomain") || "auto",
                                            name: e[t].get("name") || ""
                                        })
                                    };
                                    if (Object(o.a)().options.gaName && n.options && n.options.name === Object(o.a)().options.gaName) {
                                        u.push(n);
                                        break
                                    }
                                    u.push(n)
                                }
                        }))
                    } catch (i) {
                        console.error("Error during GA top trackers", i.message)
                    }
                    var n = Object(o.a)().options.gaAccounts;
                    n && (u = [].concat(Object(a.a)(u), Object(a.a)(n))), u.forEach((function(e) {
                        return g(e)
                    }))
                },
                g = function(e) {
                    if (e.options = e.options || {}, e.options.cookieDomain || (e.options.cookieDomain = window.top.document.domain), e.type === c.f.Internal) {
                        var t = Object(o.a)().options && Object(o.a)().options.gaName;
                        t ? i.a.initialize(e.key, {
                            gaOptions: Object(r.a)(Object(r.a)({}, e.options), {}, {
                                name: t
                            })
                        }) : i.a.initialize(e.key, {
                            gaOptions: e.options
                        })
                    }
                },
                f = function(e) {
                    var t = e.category,
                        n = e.action,
                        a = e.label,
                        r = e.value,
                        d = e.nonInteraction;
                    if (Object(o.a)().options.features.ga)
                        for (var l = 0; l < u.length; l += 1) try {
                            if (u[l].type === c.f.Universal && window.top.ga)
                                for (var g = window.top.ga.getAll(), f = 0; f < g.length; f += 1) !u[l].options || u[l].options.name && u[l].options.name !== g[f].get("name") || g[f].send("event", t, n, a, r, {
                                    nonInteraction: d
                                });
                            u[l].type === c.f.Internal && i.a.event({
                                action: n,
                                label: a,
                                category: t,
                                nonInteraction: d,
                                value: r
                            })
                        } catch (p) {
                            Object(s.b)("Smartsupp: GA error:", p.message)
                        }
                }
        },
        161: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return o
            }));
            var a = n(17),
                r = function(e, t) {
                    return e.find((function(e) {
                        return e.id === t
                    }))
                },
                i = function(e, t) {
                    return t ? "default" === t ? e : e.filter((function(e) {
                        return e.groups && e.groups.length > 0 && e.groups.includes(t) || e.groups && 0 === e.groups.length
                    })) : e
                },
                o = function(e, t) {
                    var n = [];
                    return e && e.length ? (e.map((function(e) {
                        var a = t.find((function(t) {
                            return t.id === e
                        }));
                        return a && n.push(a)
                    })), n.map(a.f)) : []
                }
        },
        167: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function() {
                var e = {};
                return {
                    publish: function(t, n) {
                        Array.isArray(e[t]) && e[t].forEach((function(e) {
                            e(n)
                        }))
                    },
                    subscribe: function(t, n) {
                        Array.isArray(e[t]) || (e[t] = []), e[t].push(n)
                    }
                }
            }()
        },
        17: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return z
            })), n.d(t, "n", (function() {
                return Y
            })), n.d(t, "j", (function() {
                return q
            })), n.d(t, "e", (function() {
                return X
            })), n.d(t, "g", (function() {
                return K
            })), n.d(t, "f", (function() {
                return Z
            })), n.d(t, "a", (function() {
                return J
            })), n.d(t, "h", (function() {
                return $
            })), n.d(t, "b", (function() {
                return Q
            })), n.d(t, "k", (function() {
                return ee
            })), n.d(t, "m", (function() {
                return te
            })), n.d(t, "l", (function() {
                return ne
            })), n.d(t, "d", (function() {
                return ae
            })), n.d(t, "o", (function() {
                return re
            })), n.d(t, "c", (function() {
                return ie
            }));
            var a = n(52),
                r = n(10),
                i = n.n(r),
                o = n(20),
                c = n(552),
                s = n(1),
                u = n(19),
                d = n(51),
                l = n(41),
                g = n(22),
                f = n(14),
                p = n(12),
                b = n(26),
                O = {
                    ":)": "\ud83d\ude42",
                    ":D": "\ud83d\ude00",
                    ";)": "\ud83d\ude09",
                    "<3": "\u2764\ufe0f",
                    ":(": "\ud83d\ude41",
                    ":P": "\ud83d\ude1b"
                },
                h = n(5),
                m = n(8),
                v = n(15),
                j = n(16),
                y = n(35);

            function T() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: 0 ", "px ", "px ", "px;\n\t\t\t", ";\n\t\t"]);
                return T = function() {
                    return e
                }, e
            }

            function S() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: 0 ", "px ", "px 0;\n\t\t\t", ";\n\t\t"]);
                return S = function() {
                    return e
                }, e
            }

            function A() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px ", "px ", "px 0;\n\t\t\t", ";\n\t\t"]);
                return A = function() {
                    return e
                }, e
            }

            function w() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return w = function() {
                    return e
                }, e
            }

            function E() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return E = function() {
                    return e
                }, e
            }

            function M() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return M = function() {
                    return e
                }, e
            }

            function x() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return x = function() {
                    return e
                }, e
            }

            function C() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return C = function() {
                    return e
                }, e
            }

            function I() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return I = function() {
                    return e
                }, e
            }

            function _() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return _ = function() {
                    return e
                }, e
            }

            function F() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return F = function() {
                    return e
                }, e
            }

            function k() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return k = function() {
                    return e
                }, e
            }

            function R() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px 0 ", "px ", "px;\n\t\t\t", ";\n\t\t"]);
                return R = function() {
                    return e
                }, e
            }

            function D() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px 0 0 ", "px;\n\t\t\t", ";\n\t\t"]);
                return D = function() {
                    return e
                }, e
            }

            function W() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px ", "px 0 ", "px;\n\t\t\t", ";\n\t\t"]);
                return W = function() {
                    return e
                }, e
            }

            function G() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return G = function() {
                    return e
                }, e
            }

            function B() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: 0 ", "px ", "px ", "px;\n\t\t\t", ";\n\t\t"]);
                return B = function() {
                    return e
                }, e
            }

            function N() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: 0 ", "px ", "px 0;\n\t\t\t", ";\n\t\t"]);
                return N = function() {
                    return e
                }, e
            }

            function P() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px ", "px ", "px 0;\n\t\t\t", ";\n\t\t"]);
                return P = function() {
                    return e
                }, e
            }

            function L() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return L = function() {
                    return e
                }, e
            }
            var U = [{
                    author: s.MessageSubType.Agent,
                    position: u.c.Standalone,
                    css: Object(v.a)(L(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Agent,
                    position: u.c.Top,
                    css: Object(v.a)(P(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.e))
                }, {
                    author: s.MessageSubType.Agent,
                    position: u.c.Middle,
                    css: Object(v.a)(N(), 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.c))
                }, {
                    author: s.MessageSubType.Agent,
                    position: u.c.Bottom,
                    css: Object(v.a)(B(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.b))
                }, {
                    author: s.MessageSubType.Contact,
                    position: u.c.Standalone,
                    css: Object(v.a)(G(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Contact,
                    position: u.c.Top,
                    css: Object(v.a)(W(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.e))
                }, {
                    author: s.MessageSubType.Contact,
                    position: u.c.Middle,
                    css: Object(v.a)(D(), 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.c))
                }, {
                    author: s.MessageSubType.Contact,
                    position: u.c.Bottom,
                    css: Object(v.a)(R(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.b))
                }, {
                    author: s.MessageSubType.System,
                    position: u.c.Standalone,
                    css: Object(v.a)(k(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.System,
                    position: u.c.Top,
                    css: Object(v.a)(F(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.System,
                    position: u.c.Middle,
                    css: Object(v.a)(_(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.System,
                    position: u.c.Bottom,
                    css: Object(v.a)(I(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Trigger,
                    position: u.c.Standalone,
                    css: Object(v.a)(C(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Trigger,
                    position: u.c.Top,
                    css: Object(v.a)(x(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Trigger,
                    position: u.c.Middle,
                    css: Object(v.a)(M(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Trigger,
                    position: u.c.Bottom,
                    css: Object(v.a)(E(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Bot,
                    position: u.c.Standalone,
                    css: Object(v.a)(w(), Object(h.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Bot,
                    position: u.c.Top,
                    css: Object(v.a)(A(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.e))
                }, {
                    author: s.MessageSubType.Bot,
                    position: u.c.Middle,
                    css: Object(v.a)(S(), 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.c))
                }, {
                    author: s.MessageSubType.Bot,
                    position: u.c.Bottom,
                    css: Object(v.a)(T(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(h.a)({}, y.b))
                }],
                V = n(105),
                z = function() {
                    var e = Object(o.a)(i.a.mark((function e(t, n) {
                        var a, r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t === s.MessageSubType.Contact || n === s.MessageContent.Type.RateForm || n === s.MessageEventContent.Type.AgentJoin || n === s.MessageEventContent.Type.AgentLeave || n === s.MessageEventContent.Type.ChatTransfer) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3, new Audio("".concat(p.a, "/assets/sounds/blackberry2.mp3"));
                                case 3:
                                    a = e.sent, (r = a.play()) && r.catch((function(e) {
                                        Object(g.b)("Could not play sound.", e)
                                    }));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                H = function(e, t, n) {
                    return Math.abs(Object(c.a)(new Date(e.created), new Date(t.created))) < n && e.author === t.author
                },
                Y = function(e) {
                    return Object(a.a)(e).sort((function(e, t) {
                        return e.created.getTime() - t.created.getTime()
                    }))
                },
                q = function(e) {
                    var t = [],
                        n = e.filter((function(e) {
                            return e.type === s.MessageContent.Type.QuestionFormSubmit
                        })).map((function(e) {
                            return e.parentMessageId
                        }));
                    return e.forEach((function(e) {
                        return e.id !== n.find((function(t) {
                            return t === e.id
                        })) && t.push(e)
                    })), t
                },
                X = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
                        n = e.map((function(e) {
                            return {
                                id: e.id,
                                position: u.c.Standalone
                            }
                        }));
                    if (e.length <= 1) return n;
                    H(e[0], e[1], t) && (n[0].position = u.c.Top), H(e[e.length - 2], e[e.length - 1], t) && (n[e.length - 1].position = u.c.Bottom);
                    for (var a = 1; a < e.length - 1; a += 1) {
                        var r = H(e[a - 1], e[a], t),
                            i = H(e[a], e[a + 1], t);
                        i && r && (n[a].position = u.c.Middle), i && !r && (n[a].position = u.c.Top), !i && r && (n[a].position = u.c.Bottom)
                    }
                    return n
                },
                K = function(e) {
                    if (e.subType === s.MessageSubType.Trigger) return {
                        trigger: e.trigger,
                        author: s.MessageSubType.Trigger,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentId: null,
                        text: e.content.text,
                        type: u.d.Trigger
                    };
                    if (e.content.type === s.MessageContent.Type.Upload) return {
                        type: e.content.type,
                        created: new Date(e.createdAt),
                        id: e.id,
                        author: e.subType === s.MessageSubType.Contact ? s.MessageSubType.Contact : s.MessageSubType.Agent,
                        fileType: e.content.data.fileType,
                        name: e.content.data.fileName,
                        uploadedWithError: !1,
                        url: e.content.data.url,
                        expireAt: e.content.data.expireAt,
                        isImage: e.content.data.type === u.a.Image,
                        thumb400: {
                            url: e.content.data.thumb400 && e.content.data.thumb400.url || void 0
                        }
                    };
                    if (e.subType === s.MessageSubType.Contact || e.subType === s.MessageSubType.Agent) return {
                        type: s.MessageContent.Type.Text,
                        agentId: e.agentId,
                        created: new Date(e.createdAt),
                        id: e.id,
                        text: e.content.text,
                        author: e.subType === s.MessageSubType.Contact ? s.MessageSubType.Contact : s.MessageSubType.Agent
                    };
                    if (e.subType === s.MessageSubType.Bot) {
                        var t = e;
                        return {
                            type: s.MessageContent.Type.Text,
                            agentId: t.agentId,
                            created: new Date(t.createdAt),
                            id: t.id,
                            text: t.content.text,
                            author: s.MessageSubType.Bot,
                            quickReplies: t.quickReplies,
                            showReplies: !0
                        }
                    }
                    if (e.content.type === s.MessageEventContent.Type.AgentLeave || e.content.type === s.MessageEventContent.Type.AgentAssign || e.content.type === s.MessageEventContent.Type.AgentJoin || e.content.type === s.MessageEventContent.Type.AgentUnassign) return {
                        type: e.content.type,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentStatus: e.content.type,
                        agentId: e.content && e.content.data && e.content.data.agentId || "",
                        author: s.MessageSubType.System,
                        assigned: e.content.data.assigned,
                        unassigned: e.content.data.unassigned
                    };
                    if (e.content.type === s.MessageEventContent.Type.ChatClose && "agent_close" === e.content.data.closeType) return {
                        type: e.content.type,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentStatus: e.content.type,
                        agentId: e.content.data.agentId || "",
                        author: s.MessageSubType.System
                    };
                    if (e.content.type === s.MessageEventContent.Type.ChatVisitorClose) return {
                        type: e.content.type,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentStatus: e.content.type,
                        agentId: null,
                        author: s.MessageSubType.System
                    };
                    if (e.content.type === s.MessageContent.Type.RateForm) {
                        var n = e.content.data && e.content.data.text;
                        return {
                            type: s.MessageContent.Type.RateForm,
                            author: s.MessageSubType.System,
                            created: new Date(e.createdAt),
                            finished: !!n,
                            id: e.id,
                            headline: f.a.translate("agentRating.all.placeholder"),
                            inputs: [{
                                type: d.a.Text,
                                name: "rating",
                                placeHolder: f.a.translate("agentRating.all.placeholder"),
                                label: f.a.translate("agentRating.all.placeholder"),
                                validations: ["required"],
                                multiline: !0,
                                fullWidth: !0,
                                value: n
                            }],
                            rating: e.content.data && e.content.data.value,
                            finishedRatingText: n || ""
                        }
                    }
                    if (e.content.type === s.MessageEventContent.Type.ChatTransfer) return {
                        type: s.MessageEventContent.Type.ChatTransfer,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentStatus: s.MessageEventContent.Type.AgentJoin,
                        agentId: e.agentId,
                        author: s.MessageSubType.System
                    };
                    console.error("Unknown message", e)
                },
                Z = function(e) {
                    return {
                        avatar: e.avatar ? "".concat(e.avatar).concat(p.b) : void 0,
                        fullname: e.fullname,
                        name: e.fullname,
                        id: e.id,
                        status: e.status,
                        description: e.description,
                        email: "",
                        groups: e.groups,
                        disabled: e.disabled
                    }
                },
                J = function(e) {
                    return e.filter((function(e) {
                        return (e.type === u.d.Trigger || e.type === s.MessageContent.Type.Text) && e.author !== s.MessageSubType.Contact
                    })).sort((function(e, t) {
                        return t.created.getTime() - e.created.getTime()
                    }))
                },
                $ = function(e) {
                    return e.filter((function(e) {
                        return e.author !== s.MessageSubType.System
                    }))
                },
                Q = function(e) {
                    return e.filter((function(e) {
                        return e.author === s.MessageSubType.Agent || e.author === s.MessageSubType.Contact
                    }))
                },
                ee = function(e) {
                    return function(e, t) {
                        var n = new RegExp(Object.keys(t).map((function(e) {
                            return "(^| )".concat(function(e) {
                                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                            }(e), "($| )")
                        })).join("|"), "gi");
                        return e.replace(n, (function(e) {
                            var n = Object.keys(t).filter((function(t) {
                                return e.includes(t)
                            }))[0];
                            return t[n].toString()
                        }))
                    }(e, O)
                },
                te = function(e) {
                    Object(l.c)(b.h, "".concat(e), !1, !0)
                },
                ne = function(e) {
                    Object(l.c)(b.i, e, !1, !0)
                },
                ae = function(e) {
                    var t = e.find((function(e) {
                            return "name" === e.name
                        })),
                        n = e.find((function(e) {
                            return "email" === e.name
                        })),
                        a = e.find((function(e) {
                            return "phone" === e.name
                        })),
                        r = e.find((function(e) {
                            return "group" === e.name
                        })),
                        i = e.find((function(e) {
                            return e.name === V.b
                        }));
                    return {
                        name: t ? t.value.toString() : void 0,
                        email: n ? n.value.toString() : void 0,
                        phone: a ? a.value.toString() : void 0,
                        group: r ? r.value.toString() : void 0,
                        personalDataProcessingConsent: i ? !!i.value : void 0
                    }
                },
                re = function(e, t) {
                    var n = function(e) {
                        if (e.length) {
                            var t = Y(e).filter((function(e) {
                                return e.type === s.MessageContent.Type.Text && e.text
                            }));
                            if (t.length) return t[t.length - 1]
                        }
                    }(e);
                    return !(!n || t !== n.text || n.author !== s.MessageSubType.Contact)
                },
                ie = function(e, t) {
                    return U.find((function(n) {
                        return n.author === e && n.position === t
                    })).css
                }
        },
        172: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            })), n.d(t, "b", (function() {
                return j
            }));
            var a = n(10),
                r = n.n(a),
                i = n(222),
                o = n(20),
                c = n(30),
                s = n(14),
                u = n(5),
                d = n(309),
                l = n(44),
                g = n(72),
                f = n(12),
                p = n(167),
                b = n(6),
                O = function() {
                    var e = l.a.language ? l.a.language : g.c.lang,
                        t = g.a.includes(e) ? e : g.b;
                    return Array.from(new Set([t, g.b]))
                },
                h = function(e) {
                    return "".concat(f.a, "/translates/").concat(e, ".json?v=").concat("ee77c8ef593f0f63ef8ba86a9abe3abe64835f2a")
                },
                m = function(e, t) {
                    var n = Object(b.a)().options.translates;
                    p.a.publish(f.c.SettingsGetTranslates, {
                        translates: Object(d.mergeWith)(Object(u.a)({}, e), t, e, (function(e, t) {
                            return "" === t ? e : void 0
                        })),
                        customText: n
                    })
                },
                v = {
                    isFetchingTranslations: Object(c.a)("translations/SET_IS_FETCHING_TRANSLATIONS", Object(c.b)())
                },
                j = function() {
                    var e = Object(o.a)(r.a.mark((function e(t) {
                        var n, a, o, c, u, d;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t(v.isFetchingTranslations(!0)), n = O(), a = n.map((function(e) {
                                        return fetch(h(e)).then((function(e) {
                                            return e.json()
                                        }))
                                    })), e.next = 5, Promise.all(a);
                                case 5:
                                    o = e.sent, c = Object(i.a)(o, 2), u = c[0], d = c[1], s.a.setData(u), s.a.setDefaultLanguageData(d), s.a.setCustomLanguageData(n[0]), m(u, d), t(v.isFetchingTranslations(!1));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        18: function(e, t, n) {
            "use strict";
            n.d(t, "o", (function() {
                return a
            })), n.d(t, "p", (function() {
                return r
            })), n.d(t, "n", (function() {
                return i
            })), n.d(t, "q", (function() {
                return o
            })), n.d(t, "g", (function() {
                return c
            })), n.d(t, "j", (function() {
                return s
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "i", (function() {
                return d
            })), n.d(t, "k", (function() {
                return l
            })), n.d(t, "l", (function() {
                return g
            })), n.d(t, "m", (function() {
                return f
            })), n.d(t, "f", (function() {
                return p
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "r", (function() {
                return O
            })), n.d(t, "d", (function() {
                return h
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "a", (function() {
                return j
            }));
            var a = "600px",
                r = "366px",
                i = "calc(100vh - 36px)",
                o = "100%",
                c = "65px",
                s = "72px",
                u = "58px",
                d = "61px",
                l = "200px",
                g = "300px",
                f = "265px",
                p = "47px",
                b = 60,
                O = 5,
                h = "".concat(b, "px"),
                m = 11,
                v = 24,
                j = 9
        },
        19: function(e, t, n) {
            "use strict";
            var a, r, i, o, c, s;
            n.d(t, "c", (function() {
                    return a
                })), n.d(t, "d", (function() {
                    return r
                })), n.d(t, "a", (function() {
                    return o
                })), n.d(t, "b", (function() {
                    return s
                })),
                function(e) {
                    e.Top = "TOP", e.Middle = "MIDDLE", e.Bottom = "BOTTOM", e.Standalone = "STANDALONE"
                }(a || (a = {})),
                function(e) {
                    e.Text = "TEXT", e.Rating = "RATING", e.File = "FILE", e.AgentActivity = "AGENTACTIVITY", e.Form = "FORM", e.Trigger = "TRIGGER", e.FilledForm = "FILLEDFORM"
                }(r || (r = {})),
                function(e) {
                    e.Yes = "YES", e.No = "NO"
                }(i || (i = {})),
                function(e) {
                    e.Image = "image", e.File = "file"
                }(o || (o = {})),
                function(e) {
                    e.Join = "JOIN", e.Leave = "LEAVE", e.RedirectToAnother = "REDIRECTTOANOTHER"
                }(c || (c = {})),
                function(e) {
                    e.SendTranscript = "TRANSCRIPT", e.PreForm = "PREFORM", e.AwayForm = "AWAY_FORM"
                }(s || (s = {}))
        },
        21: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return g
            })), n.d(t, "c", (function() {
                return f
            }));
            var a = n(10),
                r = n.n(a),
                i = n(20),
                o = n(30),
                c = n(1),
                s = n(25),
                u = n(27),
                d = n(6),
                l = {
                    setRating: Object(o.a)("agent/SET_RATING", Object(o.b)()),
                    setAgents: Object(o.a)("agent/SET_AGENT", Object(o.b)()),
                    updateAgentStatus: Object(o.a)("agent/UPDATE_AGENT_STATUS", Object(o.b)()),
                    updateAgent: Object(o.a)("agent/UPDATE_AGENT", Object(o.b)()),
                    setConnectedAgents: Object(o.a)("agent/SET_CONNECTED_AGENTS", Object(o.b)()),
                    setIsAgentTyping: Object(o.a)("agent/SET_IS_AGENT_TYPING", Object(o.b)()),
                    setStatus: Object(o.a)("agent/SET_STATUS", Object(o.b)()),
                    addConnectedAgent: Object(o.a)("agent/ADD_AGENT", Object(o.b)()),
                    addConnectedAgentFromTransfer: Object(o.a)("agent/ADD_AGENT_FROM_TRANSFER", Object(o.b)()),
                    removeConnectedAgentFromTransfer: Object(o.a)("agent/REMOVE_AGENT_FROM_TRANSFER", Object(o.b)()),
                    removeConnectedAgent: Object(o.a)("agent/REMOVE_AGENT_FROM_CONNECTED", Object(o.b)()),
                    deleteAgent: Object(o.a)("agent/DELETE_AGENT", Object(o.b)()),
                    removeAllConnectedAgents: Object(o.a)("agent/REMOVE__ALL_AGENTS")
                },
                g = function(e) {
                    return function() {
                        var t = Object(i.a)(r.a.mark((function t(n, a) {
                            var i;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(l.setStatus(e)), s.b.isWidgetVisible(a()) && (null === (i = Object(d.a)().options) || void 0 === i ? void 0 : i.hideOfflineChat) && u.a.client.notify(c.VisitorEventName.WidgetShow);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                f = function(e) {
                    return function() {
                        var t = Object(i.a)(r.a.mark((function t(n, a) {
                            var i;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(l.setStatus(e)), s.b.isWidgetVisible(a()) && (null === (i = Object(d.a)().options) || void 0 === i ? void 0 : i.hideOfflineChat) && e === c.AccountStatus.Online && u.a.client.notify(c.VisitorEventName.WidgetShow);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
        },
        22: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return o
            }));
            var a = n(165),
                r = n.n(a),
                i = r()("smartsupp:widget"),
                o = r()("smartsupp:ga")
        },
        220: function(e, t, n) {
            "use strict";
            var a = n(318);
            t.a = a.a
        },
        221: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return o
            }));
            var a = n(4),
                r = n(69),
                i = Object(r.isWidgetMobile)(a.a.getState()) ? 16 : 15,
                o = "'Segoe UI','-apple-system', 'BlinkMacSystemFont', 'Ubuntu', 'sans-serif'"
        },
        223: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "c", (function() {
                return O.a
            })), n.d(t, "d", (function() {
                return m
            }));
            var a = n(8),
                r = n(175),
                i = n(9);

            function o() {
                var e = Object(a.a)(["\n\tpadding: 0px !important;\n"]);
                return o = function() {
                    return e
                }, e
            }
            var c = function(e) {
                    return Object(i.d)(r.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64",
                        css: s
                    }), Object(i.d)("path", {
                        d: "M30.59 28.55a2.26 2.26 0 0 0-3.2-3.2l-12 11.94a10.67 10.67 0 0 0 15.14 15.09l27-27a14.89 14.89 0 1 0-21.09-21L9.49 31.31a19.15 19.15 0 1 0 27.1 27.07l11.94-11.94a2.26 2.26 0 0 0-3.2-3.2L33.39 55.18a14.64 14.64 0 0 1-21.06-20.34l.36-.35L39.62 7.56a10.26 10.26 0 0 1 7.32-3 10.4 10.4 0 0 1 7.32 3 10.26 10.26 0 0 1 3 7.32 10.39 10.39 0 0 1-3 7.32l-27 27a6.21 6.21 0 0 1-8.7 0 6.12 6.12 0 0 1 0-8.65l12-11.95z"
                    }))
                },
                s = Object(i.c)(o()),
                u = (n(224), n(225), n(226), n(0)),
                d = n.n(u),
                l = n(15),
                g = n(16);

            function f() {
                var e = Object(a.a)(["\n\tpadding: 0 ", "px;\n\tbox-shadow: none !important;\n"]);
                return f = function() {
                    return e
                }, e
            }
            var p = function(e) {
                    return d.a.createElement(r.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64",
                        css: b
                    }), d.a.createElement("path", {
                        d: "M.86 18.51v-.16C3.65 7.05 19.39 3 32 3s28.39 4 31.18 15.5a66.22 66.22 0 0 1 0 20.46C62 43.7 58.13 47.59 51.82 50.37l4 5A3.47 3.47 0 0 1 53.09 61a3.39 3.39 0 0 1-1.44-.31L37.11 54c-1.79.18-3.49.27-5.07.27C21 54.31 3.63 50.23.86 38.84a60.33 60.33 0 0 1 0-20.33z"
                    }))
                },
                b = Object(l.a)(f(), .5 * g.c),
                O = n(227);

            function h() {
                var e = Object(a.a)(["\n\tpadding: 0 3px;\n"]);
                return h = function() {
                    return e
                }, e
            }
            var m = function(e) {
                    return d.a.createElement(r.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64",
                        css: v
                    }), d.a.createElement("path", {
                        d: "M32 0a32 32 0 1 0 32 32A32 32 0 0 0 32 0zm0 59.24A27.24 27.24 0 1 1 59.24 32 27.23 27.23 0 0 1 32 59.24z"
                    }), d.a.createElement("path", {
                        d: "M40.53 40.7a1.63 1.63 0 0 0-1.14.53 10 10 0 0 1-14.07.71 9.51 9.51 0 0 1-.71-.71 1.65 1.65 0 1 0-2.45 2.2 13.26 13.26 0 0 0 18.72 1c.34-.31.66-.63 1-1a1.66 1.66 0 0 0-.14-2.33 1.59 1.59 0 0 0-1.21-.4z"
                    }), d.a.createElement("circle", {
                        cx: "21.17",
                        cy: "25.5",
                        r: "2.75",
                        "data-name": "Ellipse 74"
                    }), d.a.createElement("circle", {
                        cx: "42.83",
                        cy: "25.5",
                        r: "2.75",
                        "data-name": "Ellipse 75"
                    }))
                },
                v = Object(l.a)(h())
        },
        224: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(0),
                r = n.n(a),
                i = n(175),
                o = function(e) {
                    return r.a.createElement(i.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64"
                    }), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#ee5f54"
                        },
                        cx: "32",
                        cy: "32",
                        r: "32"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#9b241e"
                        },
                        d: "M43.74,48.3263a1.4221,1.4221,0,0,0,2.1191-1.8972,18.6664,18.6664,0,0,0-27.7191,0,1.4221,1.4221,0,0,0,2.1191,1.8972,15.8224,15.8224,0,0,1,23.4809,0Z"
                    }), r.a.createElement("circle", {
                        cx: "20.8",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#9b241e"
                        },
                        cx: "43.2",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("path", {
                        style: {
                            fill: "#fff"
                        },
                        d: "M42.7638,20c3.7355,0,6.7638,2.0319,6.7638,5.7674a6.7638,6.7638,0,1,1-13.5276,0C36,22.0319,39.0283,20,42.7638,20Z"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M42.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,39.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    })), r.a.createElement("g", null, r.a.createElement("path", {
                        style: {
                            fill: "#fff"
                        },
                        d: "M20.7638,20c3.7355,0,6.7638,2.0319,6.7638,5.7674a6.7638,6.7638,0,0,1-13.5276,0C14,22.0319,17.0283,20,20.7638,20Z"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M20.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,17.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    }))), r.a.createElement("rect", {
                        style: {
                            fill: "#9b241e"
                        },
                        x: "12",
                        y: "20",
                        width: "15",
                        height: "3",
                        rx: "1.5"
                    }), r.a.createElement("rect", {
                        style: {
                            fill: "#9b241e"
                        },
                        x: "37",
                        y: "20",
                        width: "15",
                        height: "3",
                        rx: "1.5"
                    })))
                }
        },
        225: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(0),
                r = n.n(a),
                i = n(175),
                o = function(e) {
                    return r.a.createElement(i.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64"
                    }), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#69d622"
                        },
                        cx: "32",
                        cy: "32",
                        r: "32"
                    }), r.a.createElement("g", null, r.a.createElement("path", {
                        style: {
                            fill: "#3d7c28"
                        },
                        d: "M20.26,40.74A1.4222,1.4222,0,1,0,18.14,42.6375a18.6665,18.6665,0,0,0,27.7192,0A1.4222,1.4222,0,1,0,43.74,40.74a15.8223,15.8223,0,0,1-23.4808,0Z"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#3d7c28"
                        },
                        cx: "20.8",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#3d7c28"
                        },
                        cx: "43.2",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#fff"
                        },
                        cx: "42.7638",
                        cy: "25.7674",
                        r: "6.7638"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M42.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,39.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    })), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#fff"
                        },
                        cx: "20.7638",
                        cy: "25.7674",
                        r: "6.7638"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M20.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,17.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    })))))
                }
        },
        226: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(0),
                r = n.n(a),
                i = n(175),
                o = function(e) {
                    return r.a.createElement(i.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64"
                    }), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#efd739"
                        },
                        cx: "32",
                        cy: "32",
                        r: "32"
                    }), r.a.createElement("g", null, r.a.createElement("path", {
                        style: {
                            fill: "#af6e0e"
                        },
                        d: "M40.1469,46.8344l-15.8341,2.298a1.6,1.6,0,1,1-.46-3.1668l15.8341-2.298a1.6,1.6,0,1,1,.46,3.1668Z"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#af6e0e"
                        },
                        cx: "20.8",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#af6e0e"
                        },
                        cx: "43.2",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#fff"
                        },
                        cx: "42.7638",
                        cy: "25.7674",
                        r: "6.7638"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M42.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,39.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    })), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#fff"
                        },
                        cx: "20.7638",
                        cy: "25.7674",
                        r: "6.7638"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M20.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,17.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    }))))))
                }
        },
        227: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n(135),
                r = n(0),
                i = n.n(r),
                o = n(175),
                c = function(e) {
                    var t = e.customFontSize,
                        n = Object(a.a)(e, ["customFontSize"]),
                        c = Object(r.useMemo)((function() {
                            return {
                                fontSize: t || "default"
                            }
                        }), [t]);
                    return i.a.createElement(o.a, Object.assign({}, n, {
                        viewBox: "0 0 64 64",
                        style: c
                    }), i.a.createElement("path", {
                        d: "M7.47,62.62c-3.85,2-6.2.24-5.24-4L6.29,40.53a6,6,0,0,1,4.79-4.33l24.41-2.84c6.5-.74,6.52-2,0-2.71l-24.4-2.79A5.89,5.89,0,0,1,6.3,23.58L2.22,5.33c-1-4.23,1.38-6,5.24-3.95L58.11,28.29c3.85,2.05,3.86,5.36,0,7.41L7.46,62.62Z"
                    }))
                }
        },
        25: function(e, t, n) {
            "use strict";
            var a = n(7);
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(69);
            n.d(t, "b", (function() {
                return r
            }));
            n(127)
        },
        26: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "g", (function() {
                return c
            })), n.d(t, "j", (function() {
                return s
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "i", (function() {
                return d
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "e", (function() {
                return g
            })), n.d(t, "c", (function() {
                return f
            })), n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return b
            }));
            var a = n(6),
                r = "ssupp",
                i = Object(a.a)().options.cookiePrefix ? Object(a.a)().options.cookiePrefix : "",
                o = function(e) {
                    return "".concat(i).concat(r, ".").concat(e)
                },
                c = "vid",
                s = "visits",
                u = "opened",
                d = "message",
                l = "showButtonAnimation",
                g = 182,
                f = "".concat(r, "_").concat(Object(a.a)().options.key),
                p = [c, s],
                b = 22
        },
        27: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return R
            }));
            var a, r, i, o, c, s = n(10),
                u = n.n(s),
                d = n(20),
                l = n(52),
                g = n(1),
                f = n(4),
                p = n(13),
                b = n(72),
                O = n(7),
                h = n(69),
                m = n(21),
                v = n(11),
                j = n(17),
                y = n(75),
                T = n(6),
                S = n(63),
                A = n(161),
                w = function() {
                    var e = "http" === Object(T.a)().options.protocol ? "http" : "https",
                        t = Object(T.a)().options.host;
                    return "".concat(e, "://").concat(t)
                },
                E = n(41),
                M = n(44),
                x = n(22),
                C = n(26),
                I = n(12),
                _ = n(45);
            ! function(e) {
                e.Updated = "account.updated"
            }(a || (a = {})),
            function(e) {
                e.StatusUpdated = "agent.status_updated", e.Removed = "agent.removed", e.Updated = "agent.updated"
            }(r || (r = {})),
            function(e) {
                e.AgentAssigned = "chat.agent_assigned", e.AgentJoined = "chat.agent_joined", e.AgentTyping = "chat.agent_typing", e.AgentLeft = "chat.agent_left", e.AgentUnassigned = "chat.agent_unassigned", e.Closed = "chat.closed", e.ContactRead = "chat.contact_read", e.MessageReceived = "chat.message_received", e.MessageUpdated = "chat.message_updated", e.Opened = "chat.opened", e.Served = "chat.served", e.Updated = "chat.updated", e.VisitorClosed = "chat.visitor_closed"
            }(i || (i = {})),
            function(e) {
                e.Connect = "visitor.connect", e.Connected = "visitor.connected", e.Updated = "visitor.updated"
            }(o || (o = {})),
            function(e) {
                e.Connect = "connect", e.Disconnect = "disconnect", e.Error = "error", e.Initialized = "initialized"
            }(c || (c = {}));
            var F = Object(T.a)().options.visitorData || {},
                k = Object(E.b)(C.j) ? Number(Object(E.b)(C.j)) : null,
                R = function() {
                    var e = {
                        client: {}
                    };
                    return Object(T.a)().options.host ? (setTimeout((function() {
                        e.client = Object(g.createVisitorClient)({
                                data: {
                                    key: Object(T.a)().options.key,
                                    userAgent: window.top.navigator.userAgent,
                                    id: Object(E.b)(C.g) || null,
                                    group: M.a.group || F.group,
                                    email: M.a.email || F.email,
                                    lang: M.a.language || b.c.lang,
                                    pageUrl: window.top.location.href,
                                    pageTitle: window.top.document.title,
                                    visits: k || 0,
                                    variables: M.a.variables || F.variables,
                                    name: M.a.name || F.name,
                                    domain: window.location.hostname,
                                    phone: M.a.phone || F.phone,
                                    referer: window.top.document.referrer,
                                    bundleVersion: "ee77c8ef593f0f63ef8ba86a9abe3abe64835f2a",
                                    sitePlatform: Object(T.a)().options.sitePlatform,
                                    triggerable: Object(T.a)().options.triggerable,
                                    isWidgetVisible: Object(h.isWidgetVisible)(f.a.getState()),
                                    isPreviewMode: Object(T.a)().options.isPreviewMode
                                },
                                connection: {
                                    url: "".concat(w()),
                                    options: {
                                        path: "/socket",
                                        autoConnect: !1,
                                        reconnection: !0,
                                        reconnectionDelay: 1e3,
                                        reconnectionDelayMax: 3e4
                                    }
                                }
                            }), Object(T.a)().options.onClientCreated && Object(T.a)().options.onClientCreated(e.client), e.client.on(r.StatusUpdated, (function(e) {
                                f.a.dispatch(m.a.updateAgentStatus(e))
                            })), e.client.on(r.Updated, (function(e) {
                                f.a.dispatch(m.a.updateAgent(e))
                            })), e.client.on(r.Removed, (function(e) {
                                f.a.dispatch(m.a.deleteAgent(e.id))
                            })), e.client.on(a.Updated, (function(e) {
                                f.a.dispatch(Object(m.c)(e.status)), f.a.dispatch(O.GeneralAction.widgetOnline())
                            })), e.client.on(i.AgentAssigned, (function(e) {
                                f.a.dispatch(Object(p.assignAgent)(e))
                            })), e.client.on(i.AgentUnassigned, (function(e) {
                                f.a.dispatch(Object(p.unassignAgent)(e))
                            })), e.client.on(i.AgentTyping, (function(e) {
                                setTimeout((function() {
                                    return f.a.dispatch(m.a.setIsAgentTyping(e.typing.is))
                                }), e.typing.is ? 0 : _.a)
                            })), e.client.on(i.AgentJoined, (function(e) {
                                f.a.dispatch(Object(p.addAgent)(e)), Object(S.e)(e.agent.fullname)
                            })), e.client.on(i.AgentLeft, (function(e) {
                                f.a.dispatch(Object(p.removeAgent)(e))
                            })), e.client.on(i.ContactRead, (function(e) {
                                f.a.dispatch(p.MessageAction.setLastRead(e.lastReadAt)), f.a.dispatch(O.GeneralAction.widgetOnline())
                            })), e.client.on(i.MessageReceived, (function(e) {
                                var t = Object(l.a)(f.a.getState().messages.messages);
                                if (!t.find((function(t) {
                                        return t.id === e.message.id
                                    }))) {
                                    f.a.dispatch(m.a.setIsAgentTyping(!1));
                                    var n, a = e.message;
                                    if (a.subType !== g.MessageSubType.Contact && f.a.dispatch(p.MessageAction.setIsFakeTyping(!0)), setTimeout((function() {
                                            f.a.dispatch(Object(p.addMessageFromServer)({
                                                message: a,
                                                agents: f.a.getState().agent.agents
                                            })), f.a.dispatch(p.MessageAction.setIsFakeTyping(!1))
                                        }), _.d), f.a.dispatch(Object(p.checkMessagesAndMarkAsRead)()), f.a.getState().general.isWidgetOnline || f.a.dispatch(O.GeneralAction.widgetOnline()), a.subType === g.MessageSubType.Bot) f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Pending)), f.a.dispatch(p.MessageAction.setBotName(null === (n = a.trigger) || void 0 === n ? void 0 : n.name));
                                    !Object(h.openWidgetOnTrigger)(f.a.getState()) || a.subType !== g.MessageSubType.Bot && a.subType !== g.MessageSubType.Trigger || f.a.dispatch(Object(O.toggleOpenCloseWidget)(!0)), Object(S.f)(t, a), Object(S.b)(t, a), M.b.emit(I.e.MessageReceived, a)
                                }
                            })), e.client.on(i.VisitorClosed, (function() {
                                f.a.dispatch(O.GeneralAction.setChatStatus(v.b.ClosedByVisitor))
                            })), e.client.on(i.Updated, (function() {
                                f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Served))
                            })), e.client.on(i.Served, (function() {
                                f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Served))
                            })), e.client.on(i.Opened, (function() {
                                f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Opened))
                            })), e.client.on(i.Closed, (function(e) {
                                "agent_close" === e.closeType && (f.a.dispatch(Object(p.removeAllAgents)(e)), f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Resolved)))
                            })), e.client.on(i.MessageUpdated, (function(e) {
                                f.a.dispatch(p.MessageAction.hideChatbotMessageOptions(e.message.id))
                            })), e.client.on(o.Connect, (function() {
                                f.a.dispatch(O.GeneralAction.widgetOnline())
                            })), e.client.on(o.Connected, (function() {
                                Object(x.b)("visitor.connected listened"), f.a.dispatch(O.GeneralAction.widgetOnline())
                            })), e.client.on(o.Updated, (function(e) {
                                f.a.dispatch(O.GeneralAction.updateUser(e))
                            })), e.client.on(c.Initialized, (function() {
                                Object(x.b)("initialized in widget listened"), setTimeout((function() {
                                    f.a.dispatch(O.GeneralAction.widgetOnline()), Object(x.b)("initialized timeout ran")
                                }), _.c), Object(x.b)("initialized listened and ran all the function inside itself")
                            })), e.client.on(c.Connect, (function() {
                                Object(x.b)("connect listened"), f.a.dispatch(O.GeneralAction.widgetOnline())
                            })), e.client.on(c.Disconnect, (function() {
                                setTimeout((function() {
                                    return f.a.dispatch(O.GeneralAction.widgetOffline())
                                }), _.c)
                            })), e.client.on(c.Error, (function(e) {
                                Object(y.a)("error.serverError", e)
                            })),
                            function() {
                                var t = Object(d.a)(u.a.mark((function t() {
                                    var n, a, r, i, o, c, s;
                                    return u.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.client.connect();
                                            case 3:
                                                if (n = t.sent, Object(x.b)("data", n), f.a.dispatch(O.GeneralAction.widgetOnline()), a = e.client.identity, r = a.id, Object(E.c)(C.g, "".concat(r || "")), Object(E.c)(C.j, "".concat(n.visitor.visits)), !n) {
                                                    t.next = 33;
                                                    break
                                                }
                                                if (f.a.dispatch(O.GeneralAction.setUser(n)), f.a.dispatch(Object(m.b)(n.account.status)), f.a.dispatch(p.MessageAction.setAcceptedFileTypes(n.fileUpload.acceptedFileTypes)), f.a.dispatch(p.MessageAction.setAcceptedFileExtensions(n.fileUpload.acceptedFileExtensions)), f.a.dispatch(p.MessageAction.setAcceptedFileMaxSize(n.fileUpload.maxFileSize)), !n.chat) {
                                                    t.next = 33;
                                                    break
                                                }
                                                if (f.a.dispatch(p.MessageAction.setLastRead(n.chat.unreadInfo.lastReadAt)), !n.chat.isClosed) {
                                                    t.next = 21;
                                                    break
                                                }
                                                f.a.dispatch(O.GeneralAction.setChatStatus(v.b.ClosedByVisitor)), t.next = 33;
                                                break;
                                            case 21:
                                                t.t0 = n.chat.status, t.next = t.t0 === v.d.Closed ? 24 : t.t0 === v.d.Open ? 26 : t.t0 === v.d.Served ? 28 : t.t0 === v.d.Pending ? 30 : 32;
                                                break;
                                            case 24:
                                                return f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Resolved)), t.abrupt("break", 33);
                                            case 26:
                                                return f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Opened)), t.abrupt("break", 33);
                                            case 28:
                                                return f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Served)), t.abrupt("break", 33);
                                            case 30:
                                                return f.a.dispatch(O.GeneralAction.setChatStatus(v.b.Pending)), t.abrupt("break", 33);
                                            case 32:
                                                return t.abrupt("break", 33);
                                            case 33:
                                                i = n.account.agents, o = i.map(j.f), f.a.dispatch(m.a.setAgents(o)), c = n.chat && n.chat.assignedIds, s = Object(A.a)(c, i), f.a.dispatch(m.a.setConnectedAgents(s)), n.chat && n.chat.messages && n.chat.messages.length && f.a.dispatch(Object(p.addMessageFromServer)({
                                                    message: n.chat.messages,
                                                    agents: f.a.getState().agent.agents
                                                })), f.a.dispatch(m.a.setAgents(o)), f.a.dispatch(O.GeneralAction.widgetOnline()), setTimeout((function() {
                                                    return f.a.dispatch(O.GeneralAction.widgetLoadedToggle())
                                                }), _.e), Object(E.c)(C.f, "false", !1, !0), f.a.dispatch(Object(p.checkMessagesAndMarkAsRead)()), t.next = 51;
                                                break;
                                            case 47:
                                                t.prev = 47, t.t1 = t.catch(0), f.a.dispatch(O.GeneralAction.widgetHide()), Object(y.a)("error.serverError", t.t1);
                                            case 51:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 47]
                                    ])
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()()
                    }), 0), e) : e
                }()
        },
        298: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            }));
            var a = 15,
                r = 600
        },
        301: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            }));
            var a = n(219),
                r = n(14),
                i = "timeago-custom-locale",
                o = function() {
                    Object(a.b)(i, (function(e, t) {
                        return [
                            [r.a.translate("timeago.justNow"), r.a.translate("timeago.rightNow")],
                            [r.a.translate("timeago.XSecondsAgo"), r.a.translate("timeago.seconds")],
                            [r.a.translate("timeago.oneMinuteAgo"), ""],
                            [r.a.translate("timeago.XMinutesAgo"), ""],
                            [r.a.translate("timeago.oneHourAgo"), ""],
                            [r.a.translate("timeago.XHoursAgo"), ""],
                            [r.a.translate("timeago.oneDayAgo"), ""],
                            [r.a.translate("timeago.XDaysAgo"), ""],
                            [r.a.translate("timeago.oneWeekAgo"), ""],
                            [r.a.translate("timeago.XWeeksAgo"), ""],
                            [r.a.translate("timeago.oneMonthAgo"), ""],
                            [r.a.translate("timeago.XMonthsAgo"), ""],
                            [r.a.translate("timeago.oneYearAgo"), ""],
                            [r.a.translate("timeago.XYearsAgo"), ""]
                        ][t]
                    }))
                },
                c = function(e) {
                    return Object(a.a)(e, i)
                }
        },
        34: function(e, t, n) {
            "use strict";
            var a, r, i;
            n.d(t, "b", (function() {
                    return a
                })), n.d(t, "c", (function() {
                    return r
                })), n.d(t, "a", (function() {
                    return i
                })),
                function(e) {
                    e.Right = "right", e.Left = "left"
                }(a || (a = {})),
                function(e) {
                    e.Auto = "auto", e.Relative = "relative", e.Fixed = "fixed"
                }(r || (r = {})),
                function(e) {
                    e.Bubble = "bubble", e.Greeting = "greeting"
                }(i || (i = {}))
        },
        35: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            })), n.d(t, "f", (function() {
                return f
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "c", (function() {
                return O
            })), n.d(t, "b", (function() {
                return h
            }));
            var a = n(8),
                r = n(15),
                i = n(16);

            function o() {
                var e = Object(a.a)(["\n\tmargin-top: 2px;\n\tmargin-bottom: 0;\n"]);
                return o = function() {
                    return e
                }, e
            }

            function c() {
                var e = Object(a.a)(["\n\tmargin-top: 2px;\n\tmargin-bottom: 0;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function s() {
                var e = Object(a.a)(["\n\tmargin-top: ", "px;\n\tmargin-bottom: 0;\n"]);
                return s = function() {
                    return e
                }, e
            }

            function u() {
                var e = Object(a.a)(["\n\tmargin-top: ", "px;\n\tmargin-bottom: 0;\n\tborder-radius: 10px;\n"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = Object(a.a)(["\n\tpadding: 11px 14px;\n\tmin-height: ", "px;\n"]);
                return d = function() {
                    return e
                }, e
            }

            function l() {
                var e = Object(a.a)(["\n\twidth: 70%;\n\tmax-width: 300px;\n"]);
                return l = function() {
                    return e
                }, e
            }
            var g = Object(r.a)(l()),
                f = Object(r.a)(d(), 3 * i.c),
                p = Object(r.a)(u(), 1.5 * i.c),
                b = Object(r.a)(s(), i.c),
                O = Object(r.a)(c()),
                h = Object(r.a)(o())
        },
        4: function(e, t, n) {
            "use strict";
            var a = n(131),
                r = n(303),
                i = n(127),
                o = n(126),
                c = n(124),
                s = n(528),
                u = n(54),
                d = n(172),
                l = {
                    isFetching: !1
                },
                g = Object(s.a)(l, Object(u.a)(d.a.isFetchingTranslations, (function(e, t) {
                    var n = t.payload;
                    e.isFetching = n
                }))),
                f = (i.b, o.a, c.b, Object(a.b)({
                    general: i.a,
                    messages: o.b,
                    agent: c.a,
                    translation: g
                })),
                p = Object(a.c)(f, Object(a.a)(r.a));
            t.a = p
        },
        41: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "b", (function() {
                return O
            }));
            var a = n(61),
                r = n(5),
                i = n(43),
                o = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) e[a] = n[a]
                    }
                    return e
                },
                c = {
                    read: function(e) {
                        return e.replace(/%3B/g, ";")
                    },
                    write: function(e) {
                        return e.replace(/;/g, "%3B")
                    }
                };
            var s = function e(t, n) {
                    function a(e, a, r) {
                        if ("undefined" !== typeof top.document) {
                            "number" === typeof(r = o({}, n, r)).expires && (r.expires = new Date(Date.now() + 864e5 * r.expires)), r.expires && (r.expires = r.expires.toUTCString()), e = c.write(e).replace(/=/g, "%3D"), a = t.write(String(a), e);
                            var i = "";
                            for (var s in r) r[s] && (i += "; ".concat(s), !0 !== r[s] && (i += "=".concat(r[s].split(";")[0])));
                            return top.document.cookie = "".concat(e, "=").concat(a).concat(i)
                        }
                    }
                    return Object.create({
                        set: a,
                        get: function(e) {
                            if ("undefined" !== typeof top.document && (!arguments.length || e)) {
                                for (var n = top.document.cookie ? top.document.cookie.split("; ") : [], a = {}, r = 0; r < n.length; r++) {
                                    var i = n[r].split("="),
                                        o = i.slice(1).join("="),
                                        s = c.read(i[0]).replace(/%3D/g, "=");
                                    if (a[s] = t.read(o, s), e === s) break
                                }
                                return e ? a[e] : a
                            }
                        },
                        remove: function(e, t) {
                            a(e, "", o({}, t, {
                                expires: -1
                            }))
                        },
                        withAttributes: function(t) {
                            return e(this.converter, o({}, this.attributes, t))
                        },
                        withConverter: function(t) {
                            return e(o({}, this.converter, t), this.attributes)
                        }
                    }, {
                        attributes: {
                            value: Object.freeze(n)
                        },
                        converter: {
                            value: Object.freeze(t)
                        }
                    })
                }(c, {
                    path: "/"
                }),
                u = n(6),
                d = n(26),
                l = n(22),
                g = n(45),
                f = function() {
                    return JSON.parse(localStorage.getItem(d.c) || "{}")
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.e;
                    return {
                        expires: e,
                        domain: Object(u.a)().options.cookieDomain,
                        path: Object(u.a)().options.cookiePath,
                        sameSite: "strict",
                        secure: "https:" === window.top.location.protocol
                    }
                },
                b = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.e,
                        u = arguments.length > 5 ? arguments[5] : void 0;
                    if (o || s.set(Object(d.d)(e), t, Object(r.a)(Object(r.a)({}, p(c)), u)), !n) {
                        var b = f(),
                            h = Object(r.a)(Object(r.a)({}, b), {}, Object(a.a)({}, e, t.toString()));
                        try {
                            localStorage.setItem(d.c, JSON.stringify(h))
                        } catch (m) {
                            m.code === d.b && console.error("localStorage is full", m), console.error("error setting localStorage", m)
                        }
                    }
                    setTimeout((function() {
                        var n = s.get(Object(d.d)(e)),
                            a = O(e);
                        n !== t && a !== t.toString() && (Object(l.b)("cookie not set debug", n, t), Object(l.b)("localStorage not set debug", a, t), d.a.includes(e) && (i.b((function(r) {
                            i.a({
                                message: "Cookie and localStorage not set",
                                name: e,
                                cookieData: n,
                                localStorageData: a,
                                value: t
                            })
                        })), console.error("Cookie not set!")))
                    }), g.b)
                },
                O = function(e) {
                    var t = s.get(Object(d.d)(e)),
                        n = f(),
                        a = n[e] ? n[e] : void 0;
                    return t || a
                }
        },
        44: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            })), n.d(t, "a", (function() {
                return p
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "d", (function() {
                return v
            }));
            var a = n(61),
                r = n(307),
                i = n(4),
                o = n(7),
                c = n(72),
                s = n(13),
                u = n(12),
                d = n(27),
                l = n(167),
                g = n(6),
                f = new r.TinyEmitter,
                p = {},
                b = function(e, t) {
                    if (t) return "".concat(t, "?name=").concat(e)
                },
                O = function(e) {
                    return "object" === typeof e && null !== e
                },
                h = function(e) {
                    return O(e) ? (Object.keys(e).forEach((function(t) {
                        e[t] = O(e[t]) ? e[t].value : e[t]
                    })), e) : e
                },
                m = function(e, t) {
                    if ("function" === typeof t) switch (e) {
                        case u.e.MessageSent:
                            f.on(u.e.MessageSent, (function(e) {
                                t(e)
                            }));
                            break;
                        case u.e.MessageReceived:
                            f.on(u.e.MessageReceived, (function(e) {
                                t(e)
                            }));
                            break;
                        default:
                            console.error("Unknown event.")
                    } else console.error("".concat(t, " is not a function."))
                },
                v = function(e, t) {
                    var n = Object(g.a)().options.package;
                    if (n !== u.h.Free) switch (e !== u.c.Telefon && e !== u.c.Telephone || (e = u.c.Phone), e) {
                        case u.c.SettingsGetTranslates:
                            l.a.subscribe(e, t);
                            break;
                        case u.c.Variables:
                            p[e] = h(t), i.a.dispatch(o.GeneralAction.updateUser(Object(a.a)({}, e, h(t))));
                            try {
                                d.a.client.update(Object(a.a)({}, e, h(t)))
                            } catch (r) {}
                            break;
                        case u.c.Name:
                        case u.c.Group:
                        case u.c.Email:
                        case u.c.Phone:
                            p[e] = t, i.a.dispatch(o.GeneralAction.updateUser(Object(a.a)({}, e, t)));
                            try {
                                d.a.client.update(Object(a.a)({}, e, t))
                            } catch (r) {}
                            break;
                        case u.c.Language:
                            p[e] = t || c.b;
                            break;
                        case u.c.ChatClose:
                            i.a.dispatch(Object(o.toggleOpenCloseWidget)(!1, !1));
                            break;
                        case u.c.ChatOpen:
                            i.a.dispatch(Object(o.toggleOpenCloseWidget)(!0, !0)), i.a.dispatch(Object(o.showWidget)());
                            break;
                        case u.c.ChatShow:
                            i.a.dispatch(Object(o.showWidget)());
                            break;
                        case u.c.ChatHide:
                            i.a.dispatch(o.GeneralAction.widgetHide());
                            break;
                        case u.c.ThemeColor:
                            Object(g.a)().options.features.api && i.a.dispatch(o.GeneralAction.setThemeColor(t));
                            break;
                        case u.c.ChatMessage:
                            i.a.dispatch(s.MessageAction.setInputText(t));
                            break;
                        case u.c.RecordingDisable:
                        case u.c.RecordingOff:
                            break;
                        case u.c.On:
                            m(t, arguments.length <= 2 ? void 0 : arguments[2]);
                            break;
                        case u.c.HtmlApply:
                            break;
                        default:
                            console.warn("unknown API", e, t)
                    }
                }
        },
        45: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "i", (function() {
                return c
            })), n.d(t, "h", (function() {
                return s
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "e", (function() {
                return f
            }));
            var a = 500,
                r = 1e3,
                i = 1500,
                o = 1e3,
                c = 200,
                s = 350,
                u = 400,
                d = 280,
                l = c + s + 500,
                g = u + d + 500,
                f = Math.max(l, g)
        },
        482: function(e, t) {},
        51: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "b", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e.phone = "matchRegexp:^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"
                }(a || (a = {})),
                function(e) {
                    e.Text = "TEXT", e.DropDown = "DROP_DOWN", e.Checkbox = "CHECKBOX"
                }(r || (r = {}))
        },
        526: function(e, t, n) {
            "use strict";
            n.r(t);
            n(327), n(338), n(343), n(344), n(346), n(347), n(348), n(349), n(350), n(351), n(353), n(362), n(363), n(364), n(369), n(370), n(372), n(373), n(374), n(375), n(376), n(377), n(378), n(379), n(384), n(386), n(387), n(388), n(389);
            var a = n(52),
                r = (n(391), n(268), n(9)),
                i = n(33),
                o = n(78),
                c = n.n(o),
                s = n(546),
                u = n(554),
                d = n(548),
                l = n(4),
                g = n(7),
                f = n(6),
                p = n(44),
                b = n(172),
                O = n(8),
                h = n(15);

            function m() {
                var e = Object(O.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\ttop: 0;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: flex-end;\n"]);
                return m = function() {
                    return e
                }, e
            }
            var v = Object(h.a)(m()),
                j = n(0),
                y = n.n(j),
                T = n(310),
                S = n(547),
                A = n(544),
                w = n(137),
                E = n(1),
                M = n(34),
                x = n(25),
                C = n(136),
                I = n(12),
                _ = n(220),
                F = n(551),
                k = n(550),
                R = n(77),
                D = Object(k.a)((function() {
                    return Object(F.a)({
                        unreadMessagesBadge: {
                            top: "9px !important",
                            right: "9px !important",
                            background: "".concat(R.a.red, " !important"),
                            color: "white",
                            boxShadow: "1px 1px 2px rgba(0,0,0,0.4) !important"
                        },
                        onlineBadge: {
                            padding: "6px",
                            borderRadius: "50%",
                            background: "".concat(R.a.green, " !important"),
                            border: "2px solid white",
                            "&.MuiBadge-anchorOriginTopLeftCircle": {
                                left: "10px"
                            },
                            "&.MuiBadge-anchorOriginTopRightCircle": {
                                right: "10px"
                            },
                            "&.MuiBadge-anchorOriginBottomLeftCircle": {
                                left: "55px",
                                bottom: "15px"
                            }
                        }
                    })
                }), {
                    name: "SmartBadge"
                }),
                W = function(e, t, n) {
                    return e ? {
                        vertical: "top",
                        horizontal: "left" === t ? "right" : "left"
                    } : n ? {
                        vertical: "bottom",
                        horizontal: "right"
                    } : {
                        vertical: "bottom",
                        horizontal: "left"
                    }
                },
                G = n(545),
                B = n(133),
                N = n(84),
                P = n(18),
                L = n(223),
                U = function() {
                    var e = Object(i.d)(B.b.unreadMessagesCount),
                        t = Object(i.d)(x.b.isWidgetMobile),
                        n = Object(i.d)(x.b.isBubbleOrGreeting),
                        a = D({}),
                        o = n === M.a.Greeting,
                        c = {
                            badge: a.unreadMessagesBadge
                        };
                    return Object(r.d)(S.a, {
                        p: .5
                    }, Object(r.d)(A.a, {
                        badgeContent: e,
                        classes: c,
                        "data-testid": "widgetButtonBadge"
                    }, Object(r.d)(G.a, {
                        "data-testid": "widgetButton",
                        css: [V(o, t), z],
                        variant: "round",
                        "aria-label": "Chat",
                        className: "fab",
                        disableRipple: !0
                    }, Object(r.d)(L.b, {
                        "data-testid": "widgetButtonClose",
                        fontSizeAdjust: 22,
                        transform: "scale(-1,1)"
                    }))))
                },
                V = function(e, t) {
                    return Object(r.c)({
                        height: "".concat(e || t ? P.f : P.d, " !important"),
                        width: "".concat(e || t ? P.f : P.d, " !important"),
                        background: e ? "rgba(255, 255, 255, 0.1) !important" : void 0
                    })
                },
                z = Object(r.c)({
                    animation: "".concat(N.i, " 350ms cubic-bezier(0.165, 0.84, 0.44, 1) !important"),
                    willChange: "transform",
                    boxShadow: "none !important"
                }),
                H = n(5),
                Y = n(14),
                q = n(41),
                X = n(61),
                K = n(22),
                Z = [{
                    getElementStyle: function(e) {
                        return e.body.style
                    },
                    newStyle: {
                        overflow: "hidden",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0"
                    },
                    prevStyle: {}
                }, {
                    getElementStyle: function(e) {
                        return e.documentElement.style
                    },
                    newStyle: {
                        overflow: "hidden",
                        margin: "0px"
                    },
                    prevStyle: {}
                }],
                J = !1,
                $ = 0,
                Q = n(106),
                ee = n(16),
                te = [{
                    showTrigger: !0,
                    moreEngagementBtn: !0,
                    size: P.l
                }, {
                    showTrigger: !1,
                    moreEngagementBtn: !0,
                    size: P.g
                }, {
                    showTrigger: !0,
                    moreEngagementBtn: !1,
                    size: P.l
                }, {
                    showTrigger: !1,
                    moreEngagementBtn: !1,
                    size: P.j
                }],
                ne = [{
                    showTrigger: !0,
                    moreEngagementBtn: !0,
                    size: P.m
                }, {
                    showTrigger: !1,
                    moreEngagementBtn: !0,
                    size: P.k
                }, {
                    showTrigger: !0,
                    moreEngagementBtn: !1,
                    size: P.m
                }, {
                    showTrigger: !1,
                    moreEngagementBtn: !1,
                    size: P.j
                }],
                ae = function(e, t, n) {
                    var a = n.find((function(n) {
                        return n.showTrigger === e && n.moreEngagementBtn === t
                    }));
                    return a ? a.size : P.g
                },
                re = function(e) {
                    var t = e.showTrigger,
                        n = e.widerVersion,
                        a = e.actualWidthOfWidget;
                    return 0 !== a && !t && n ? "".concat(a + P.r + P.e, "px") : ae(t, n, ne)
                },
                ie = function(e) {
                    var t = e.showTrigger,
                        n = e.widerVersion,
                        a = e.actualHeightOfWidget;
                    return function(e, t) {
                        return 0 !== t && t > P.e && e
                    }(t, a) ? "".concat(a + P.r + P.a * ee.c, "px") : ae(t, n, te)
                },
                oe = function(e) {
                    var t = e.isWidgetMobile,
                        n = e.isWidgetOpen,
                        a = e.offsetMobile,
                        r = e.offsetDesktop;
                    return t ? n ? "0px" : "".concat(a, "px") : "".concat(r, "px")
                },
                ce = function(e) {
                    var t = e.isWidgetOpen,
                        n = e.isWidgetMobile,
                        a = e.showTrigger,
                        r = e.isWidgetVisible,
                        i = e.widerVersion,
                        o = void 0 !== i && i,
                        c = e.actualWidthOfWidget,
                        s = void 0 === c ? 0 : c,
                        u = e.actualHeightOfWidget,
                        d = void 0 === u ? 0 : u,
                        l = Object(f.a)().el,
                        g = Object(f.a)().options,
                        p = g.orientation,
                        b = g.position,
                        O = g.offsetX,
                        h = g.offsetY;
                    if (l)
                        if (r) {
                            ! function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z;
                                e !== (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : J) && (e && ($ = window.top.pageYOffset, Object(K.b)("prevY", $)), t.forEach((function(t) {
                                    var n = t.getElementStyle(window.top.document);
                                    e ? (t.prevStyle = Object.keys(t.newStyle).reduce((function(e, t) {
                                        return Object.assign(e, Object(X.a)({}, t, n[t]))
                                    }), {}), Object.keys(t.newStyle).forEach((function(e) {
                                        n[e] = t.newStyle[e]
                                    }))) : (Object.keys(t.newStyle).forEach((function(e) {
                                        n[e] = t.prevStyle[e]
                                    })), Object(K.b)("scrollTo", window.top, $), window.top.scrollTo({
                                        top: $
                                    }))
                                })), J = e)
                            }(t && n);
                            var m = function(e) {
                                    var t = e.isWidgetMobile,
                                        n = e.isWidgetOpen,
                                        a = e.offset,
                                        r = null !== a && void 0 !== a ? a : .75 * ee.c,
                                        i = !n && a ? a : P.b;
                                    return oe({
                                        isWidgetMobile: t,
                                        isWidgetOpen: n,
                                        offsetMobile: r,
                                        offsetDesktop: i
                                    })
                                }({
                                    isWidgetMobile: n,
                                    isWidgetOpen: t,
                                    offset: O
                                }),
                                v = function(e) {
                                    var t = e.isWidgetMobile,
                                        n = e.isWidgetOpen,
                                        a = e.offset,
                                        r = null !== a && void 0 !== a ? a : ee.c,
                                        i = !n && a ? a : P.c;
                                    return oe({
                                        isWidgetMobile: t,
                                        isWidgetOpen: n,
                                        offsetMobile: r,
                                        offsetDesktop: i
                                    })
                                }({
                                    isWidgetMobile: n,
                                    isWidgetOpen: t,
                                    offset: h
                                });
                            l.style.display = "block", l.style.overflow = "hidden", l.style.zIndex = "".concat(Q.h), b === M.c.Fixed && (l.style.position = "fixed", l.style.bottom = v, p && (p === M.b.Right ? (l.style.left = "initial", l.style.right = m) : (l.style.left = m, l.style.right = "initial"))), n ? t ? (l.style.height = P.q, l.style.maxHeight = P.q, l.style.height = "100%", l.style.maxWidth = "100%", l.style.width = "100%", l.style.background = "white") : (l.style.maxHeight = P.h, l.style.maxWidth = o ? P.k : P.i, l.style.height = P.h, l.style.width = o ? P.k : P.i, l.style.background = "transparent") : t ? (l.style.maxHeight = P.o, l.style.height = P.n, l.style.maxWidth = P.p, l.style.width = P.p, l.style.background = "transparent") : (l.style.maxHeight = ie({
                                showTrigger: a,
                                widerVersion: o,
                                actualHeightOfWidget: d
                            }), l.style.maxWidth = re({
                                showTrigger: a,
                                widerVersion: o,
                                actualWidthOfWidget: s
                            }), l.style.height = ie({
                                showTrigger: a,
                                widerVersion: o,
                                actualHeightOfWidget: d
                            }), l.style.width = re({
                                showTrigger: a,
                                widerVersion: o,
                                actualWidthOfWidget: s
                            }), l.style.background = "transparent")
                        } else l.style.display = "none"
                },
                se = n(26),
                ue = n(45);

            function de() {
                var e = Object(O.a)(["\n\t\t\t\t\t", "\n\t\t\t  "]);
                return de = function() {
                    return e
                }, e
            }

            function le() {
                var e = Object(O.a)(["\n\t\t\t\t\tanimation: ", "\n\t\t\t\t\t\t", "ms ease-in-out both ", "ms;\n\t\t\t  "]);
                return le = function() {
                    return e
                }, e
            }

            function ge() {
                var e = Object(O.a)(["\n\ttransition: transform 300ms linear;\n\t", "};\n"]);
                return ge = function() {
                    return e
                }, e
            }

            function fe() {
                var e = Object(O.a)(["\n\t\t\t\t", "\n\t\t  "]);
                return fe = function() {
                    return e
                }, e
            }

            function pe() {
                var e = Object(O.a)(["\n\t\t\t\tanimation: ", " ", "ms ease-in-out both\n\t\t\t\t\t", "ms !important;\n\t\t  "]);
                return pe = function() {
                    return e
                }, e
            }

            function be() {
                var e = Object(O.a)(["\n\t", "\n\twill-change: transform;\n\ttransition: width 1s ease-in-out;\n"]);
                return be = function() {
                    return e
                }, e
            }
            var Oe = function(e) {
                    var t = e.widgetButtonRef,
                        n = Object(i.d)(x.b.isWidgetMobile),
                        a = !Object(q.b)(se.f);
                    return Object(j.useEffect)((function() {
                        var e;
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = Object(f.a)().el;
                            t && (t.style.maxWidth = re({
                                showTrigger: !1,
                                widerVersion: !0,
                                actualWidthOfWidget: e
                            }), t.style.width = re({
                                showTrigger: !1,
                                widerVersion: !0,
                                actualWidthOfWidget: e
                            }))
                        }(null === (e = t.current) || void 0 === e ? void 0 : e.clientWidth)
                    }), [t]), y.a.createElement(S.a, {
                        display: "flex",
                        flexDirection: "row",
                        className: "wrapper",
                        borderRadius: 32,
                        boxShadow: 3
                    }, I.i === M.b.Left && y.a.createElement(U, null), y.a.createElement(S.a, {
                        display: "flex",
                        alignItems: "center",
                        css: he(a)
                    }, y.a.createElement("div", {
                        ref: t,
                        style: {
                            paddingLeft: I.i === M.b.Right ? 2 * ee.c : 0,
                            paddingRight: I.i === M.b.Left ? 2 * ee.c : 0
                        }
                    }, y.a.createElement(S.a, {
                        css: me(I.i, a),
                        fontSize: n ? "14px" : "16px",
                        letterSpacing: "-0.2px",
                        maxWidth: 120
                    }, Y.a.translate("button.greeting")))), I.i === M.b.Right && y.a.createElement(U, null))
                },
                he = function(e) {
                    return Object(r.c)(be(), e ? Object(r.c)(pe(), Object(N.h)(), ue.i, ue.h) : Object(r.c)(fe(), Object(N.f)()))
                },
                me = function(e, t) {
                    return Object(r.c)(ge(), t ? Object(r.c)(le(), Object(N.e)(e === M.b.Left), ue.g, ue.f) : Object(r.c)(de(), Object(H.a)({}, N.g)))
                };

            function ve() {
                var e = Object(O.a)(["\n\t.wrapper {\n\t\tcolor: ", ";\n\t\twidth: auto;\n\t\tbackground-image: linear-gradient(80deg, ", ", ", ");\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t\tbackground-image: linear-gradient(\n\t\t\t\t80deg,\n\t\t\t\t", ",\n\t\t\t\t", "\n\t\t\t);\n\t\t}\n\t}\n\n\t.fab {\n\t\tcolor: ", " !important;\n\t\tbackground-image: linear-gradient(80deg, ", ", ", ");\n\t\t&:hover {\n\t\t\tbackground-image: linear-gradient(\n\t\t\t\t80deg,\n\t\t\t\t", ",\n\t\t\t\t", "\n\t\t\t);\n\t\t}\n\t}\n"]);
                return ve = function() {
                    return e
                }, e
            }
            var je = .1,
                ye = Object(_.a)((function(e) {
                    var t = e.className,
                        n = e.widgetButtonRef,
                        a = Object(i.d)(x.b.isWidgetMobile),
                        r = Object(i.d)(x.b.isBubbleOrGreeting),
                        o = Object(i.d)(C.a.status),
                        c = Object(i.c)(),
                        s = D({}),
                        u = r === M.a.Greeting,
                        d = {
                            badge: s.onlineBadge
                        };
                    return y.a.createElement(S.a, {
                        "data-testid": "widgetButtonWrapper",
                        className: t,
                        display: "flex",
                        position: "absolute",
                        bottom: 5,
                        right: I.i === M.b.Right ? 5 : void 0,
                        left: I.i === M.b.Left ? 5 : void 0,
                        onClick: function() {
                            return c(Object(g.toggleOpenCloseWidget)(!0))
                        }
                    }, y.a.createElement(A.a, {
                        classes: d,
                        invisible: o === E.AccountStatus.Offline,
                        overlap: "circle",
                        variant: "dot",
                        anchorOrigin: W(u, I.i, a)
                    }, u ? y.a.createElement(Oe, {
                        widgetButtonRef: n
                    }) : y.a.createElement(U, null)))
                }))(ve(), (function(e) {
                    return e.theme.textColor
                }), (function(e) {
                    return e.theme.primary
                }), (function(e) {
                    return e.theme.light
                }), (function(e) {
                    return Object(w.b)(e.theme.primary, je)
                }), (function(e) {
                    return Object(w.b)(e.theme.light, je)
                }), (function(e) {
                    return e.theme.textColor
                }), (function(e) {
                    return e.theme.primary
                }), (function(e) {
                    return e.theme.light
                }), (function(e) {
                    return Object(w.b)(e.theme.primary, je)
                }), (function(e) {
                    return Object(w.b)(e.theme.light, je)
                })),
                Te = n(301),
                Se = function(e) {
                    return e.translation.isFetching
                },
                Ae = n(63),
                we = n(104),
                Ee = [{
                    isWidgetMobile: !1,
                    isWidgetOpen: !0,
                    padding: "".concat(we.a, "px")
                }, {
                    isWidgetMobile: !1,
                    isWidgetOpen: !1,
                    padding: "".concat(we.a, "px")
                }, {
                    isWidgetMobile: !0,
                    isWidgetOpen: !0,
                    padding: "0px"
                }, {
                    isWidgetMobile: !0,
                    isWidgetOpen: !1,
                    padding: "0px 0px ".concat(we.a, "px 0px !important")
                }],
                Me = function(e, t) {
                    return Ee.find((function(n) {
                        return n.isWidgetMobile === e && n.isWidgetOpen === t
                    })).padding
                },
                xe = n(166),
                Ce = n(315),
                Ie = n(319),
                _e = n(317),
                Fe = n(43),
                ke = function(e) {
                    Object(Ie.a)(n, e);
                    var t = Object(_e.a)(n);

                    function n() {
                        var e;
                        Object(xe.a)(this, n);
                        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            error: null
                        }, e
                    }
                    return Object(Ce.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            this.setState({
                                error: e
                            }), Fe.b((function(n) {
                                n.setExtras(t), Fe.a(e), console.error(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.error ? null : this.props.children
                        }
                    }]), n
                }(j.Component),
                Re = y.a.lazy((function() {
                    return Promise.all([n.e(0), n.e(4), n.e(5)]).then(n.bind(null, 666))
                })),
                De = y.a.lazy((function() {
                    return Promise.all([n.e(0), n.e(8), n.e(6)]).then(n.bind(null, 670))
                })),
                We = window.parent,
                Ge = We._smartsupp || {};
            Ge.widgetVersion = "ee77c8ef593f0f63ef8ba86a9abe3abe64835f2a", We._smartsupp = Ge, Object(Ae.d)(), Object(Te.b)();
            var Be = function() {
                var e = Object(i.d)(x.b.isBubbleOrGreeting),
                    t = Object(i.d)(x.b.theme),
                    n = Object(i.d)(x.b.isWidgetVisible),
                    a = Object(i.d)(x.b.isWidgetMobile),
                    o = Object(i.d)(x.b.isWidgetOpen),
                    c = Object(i.d)(Se),
                    s = Object(i.d)(x.b.showTrigger),
                    u = Object(i.d)(B.b.showTriggerTypingAnimation),
                    d = Object(j.useRef)(null),
                    l = Object(j.useRef)(null);
                return Object(j.useEffect)((function() {
                    var t, r;
                    ce({
                        isWidgetOpen: o,
                        isWidgetMobile: a,
                        showTrigger: s,
                        isWidgetVisible: n,
                        widerVersion: e === M.a.Greeting,
                        actualWidthOfWidget: null === (t = l.current) || void 0 === t ? void 0 : t.clientWidth,
                        actualHeightOfWidget: null === (r = d.current) || void 0 === r ? void 0 : r.clientHeight
                    })
                }), [o, a, s, e, n, u]), Object(r.d)(T.a, {
                    theme: t
                }, Object(r.d)(ke, null, Object(r.d)(r.a, {
                    styles: we.e
                }), n && !c && Object(r.d)(S.a, {
                    position: "relative",
                    overflow: "hidden",
                    height: a ? "100%" : P.o,
                    width: a ? "100%" : P.p,
                    maxHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                    padding: Me(a, o)
                }, s && Object(r.d)(j.Suspense, {
                    fallback: Object(r.d)("div", null, " \xa0 ")
                }, Object(r.d)(De, {
                    reference: d
                })), o ? Object(r.d)(j.Suspense, {
                    fallback: Object(r.d)("div", null, " \xa0 ")
                }, Object(r.d)(Re, null)) : Object(r.d)(ye, {
                    widgetButtonRef: l
                }))))
            };
            n.p = "".concat(Object(f.a)().getBaseUrl(), "/"), Object(f.a)().installApi({
                version: "ee77c8ef593f0f63ef8ba86a9abe3abe64835f2a",
                execute: function(e) {
                    p.d.apply(void 0, [e[0], e[1]].concat(Object(a.a)(e.slice(2))))
                },
                exec: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.execute(t)
                }
            }), Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_VERSION: "ee77c8ef593f0f63ef8ba86a9abe3abe64835f2a",
                REACT_APP_SMARTLOOK_KEY: "9184926a2e22d5fca4ae8423f3b8fad09dc36339"
            }).REACT_APP_SENTRY_DSN && s.a({
                dsn: Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_VERSION: "ee77c8ef593f0f63ef8ba86a9abe3abe64835f2a",
                    REACT_APP_SMARTLOOK_KEY: "9184926a2e22d5fca4ae8423f3b8fad09dc36339"
                }).REACT_APP_SENTRY_DSN
            }), l.a.dispatch(b.b);
            var Ne = Object(u.a)({
                productionPrefix: "smart-"
            });
            window.addEventListener("focus", (function() {
                l.a.dispatch(g.GeneralAction.documentFocusToggle())
            })), window.addEventListener("blur", (function() {
                l.a.dispatch(g.GeneralAction.documentFocusToggle())
            }));
            c.a.render(Object(r.d)(i.a, {
                store: l.a
            }, Object(r.d)(d.b, {
                generateClassName: Ne
            }, Object(r.d)("div", {
                css: v,
                className: "app"
            }, Object(r.d)(Be, null)))), document.getElementById("root"))
        },
        53: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return b
            })), n.d(t, "h", (function() {
                return O
            })), n.d(t, "j", (function() {
                return h
            })), n.d(t, "l", (function() {
                return m
            })), n.d(t, "f", (function() {
                return v
            })), n.d(t, "a", (function() {
                return j
            })), n.d(t, "k", (function() {
                return y
            })), n.d(t, "g", (function() {
                return T
            })), n.d(t, "d", (function() {
                return S
            })), n.d(t, "c", (function() {
                return A
            })), n.d(t, "b", (function() {
                return w
            })), n.d(t, "e", (function() {
                return E
            }));
            var a = n(5),
                r = n(160),
                i = n(11),
                o = n(22),
                c = "Triggered message sent",
                s = "Trigger started conversation",
                u = "Chatbot sent",
                d = "Chatbot interaction",
                l = "Chatbot button interaction",
                g = "Chatbot started conversation ",
                f = {
                    category: "SmartSupp",
                    nonInteraction: !0,
                    value: 1
                },
                p = function(e, t) {
                    var n = Object(a.a)(Object(a.a)({}, f), {}, {
                        action: e,
                        label: t
                    });
                    Object(o.a)(n), Object(r.b)(n)
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(c, e)
                },
                O = function(e) {
                    return p("Trigger message viewed", e)
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(s, e)
                },
                m = function() {
                    return p("Visitor started conversation", "")
                },
                v = function(e) {
                    return p("Conversation served", e)
                },
                j = function() {
                    return p("Auth form filled", "")
                },
                y = function() {
                    p("Offline message sent", "")
                },
                T = function(e) {
                    var t = [{
                        rating: i.a.Bad,
                        text: "Bad"
                    }, {
                        rating: i.a.Normal,
                        text: "Normal"
                    }, {
                        rating: i.a.Good,
                        text: "Good"
                    }].find((function(t) {
                        return t.rating === e
                    }));
                    p("Feedback sent", (null === t || void 0 === t ? void 0 : t.text) || "")
                },
                S = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(u, e)
                },
                A = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(d, e)
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(l, e)
                },
                E = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(g, e)
                }
        },
        6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n(5),
                r = n(135),
                i = n(34),
                o = n(22),
                c = window.parent,
                s = window,
                u = "data-smartsupp-id",
                d = function(e) {
                    var t = e.installApi,
                        n = e.getBaseUrl,
                        o = Object(r.a)(e, ["installApi", "getBaseUrl"]);
                    return Object(a.a)(Object(a.a)({}, o), {}, {
                        options: Object(a.a)(Object(a.a)({}, o.options), {}, {
                            orientation: o.options.alignX || o.options.orientation || i.b.Right,
                            cookieDomain: o.options.cookieDomain || "",
                            cookiePath: o.options.cookiePath || "/",
                            buttonStyle: o.options.buttonStyle || i.a.Greeting
                        }),
                        installApi: t.bind(e),
                        getBaseUrl: n.bind(e)
                    })
                },
                l = function() {
                    if (s.$smartsuppTest) {
                        var e = s.$smartsuppTest;
                        return d(e)
                    }
                    if (c.$smartsupp) {
                        var t = document.getElementsByTagName("body")[0].getAttribute(u);
                        if (!t) throw new Error('Missing attribute "'.concat(u, '" on body element.'));
                        return d((c.$smartsupp ? c.$smartsupp : {
                            getChat: function() {},
                            on: function() {},
                            fire: function() {}
                        }).getChat(t))
                    }
                    return {
                        options: {},
                        installApi: function() {},
                        getBaseUrl: function() {
                            return ""
                        }
                    }
                };
            Object(o.b)("User options", l().options)
        },
        63: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return a.f
            })), n.d(t, "a", (function() {
                return a.a
            })), n.d(t, "c", (function() {
                return a.b
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "d", (function() {
                return l.a
            }));
            var a = n(53),
                r = n(1),
                i = n(4),
                o = n(17),
                c = function(e, t) {
                    var n = i.a.getState().messages.currentBotName;
                    ! function(e, t) {
                        return 0 === Object(o.h)(e).length && t === r.MessageSubType.Bot
                    }(e, t.subType) ? ! function(e, t) {
                        var n = Object(o.h)(e);
                        return t.subType === r.MessageSubType.Contact && !t.groupId && n[n.length - 1].author === r.MessageSubType.Bot
                    }(e, t) ? function(e, t) {
                        var n = Object(o.h)(e);
                        return t.subType === r.MessageSubType.Contact && t.groupId && n.every((function(e) {
                            return e.author === r.MessageSubType.Bot
                        }))
                    }(e, t) && Object(a.c)(n): Object(a.e)(n): Object(a.d)(n)
                },
                s = function(e, t) {
                    var n;
                    t.subType === r.MessageSubType.Trigger && Object(a.i)(null === t || void 0 === t || null === (n = t.trigger) || void 0 === n ? void 0 : n.name);
                    if (function(e, t) {
                            return 0 === Object(o.h)(e).length && t === r.MessageSubType.Contact
                        }(e, t.subType)) Object(a.l)();
                    else if (function(e, t) {
                            var n = Object(o.h)(e);
                            return t.subType === r.MessageSubType.Contact && n.every((function(e) {
                                return e.author === r.MessageSubType.Trigger
                            }))
                        }(e, t)) {
                        var i, c = Object(o.h)(e)[0];
                        Object(a.j)(null === (i = c.trigger) || void 0 === i ? void 0 : i.name)
                    }
                },
                u = function(e) {
                    e && Object(a.h)(e)
                },
                d = function(e) {
                    e === r.AccountStatus.Offline && Object(a.k)()
                },
                l = n(160)
        },
        69: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "isWidgetOpen", (function() {
                return g
            })), n.d(t, "enableSounds", (function() {
                return f
            })), n.d(t, "theme", (function() {
                return p
            })), n.d(t, "isWidgetOpening", (function() {
                return b
            })), n.d(t, "authFormInputs", (function() {
                return O
            })), n.d(t, "chatStatus", (function() {
                return h
            })), n.d(t, "isAuthFormShown", (function() {
                return m
            })), n.d(t, "isCloseModalOpened", (function() {
                return v
            })), n.d(t, "isWidgetLoaded", (function() {
                return j
            })), n.d(t, "isWidgetVisible", (function() {
                return y
            })), n.d(t, "userData", (function() {
                return T
            })), n.d(t, "isIE", (function() {
                return S
            })), n.d(t, "isWidgetMobile", (function() {
                return A
            })), n.d(t, "isUserAuthenticated", (function() {
                return w
            })), n.d(t, "isWidgetOnline", (function() {
                return E
            })), n.d(t, "isInputFocused", (function() {
                return M
            })), n.d(t, "showMorePopper", (function() {
                return x
            })), n.d(t, "isBubbleOrGreeting", (function() {
                return C
            })), n.d(t, "isWidgetDesktop", (function() {
                return I
            })), n.d(t, "showSendIcon", (function() {
                return _
            })), n.d(t, "showTrigger", (function() {
                return F
            })), n.d(t, "shouldPlaySound", (function() {
                return k
            })), n.d(t, "isBackdropDisplayed", (function() {
                return R
            })), n.d(t, "isPrivacyDisplayed", (function() {
                return D
            })), n.d(t, "openWidgetOnTrigger", (function() {
                return W
            }));
            var a = n(23),
                r = n(94),
                i = n(1),
                o = n(6),
                c = n(17),
                s = n(11),
                u = n(34),
                d = n(22),
                l = function(e) {
                    return e.general.dataPrivacyState
                },
                g = function(e) {
                    return e.general.isWidgetOpen
                },
                f = function(e) {
                    return e.messages.enableSounds
                },
                p = function(e) {
                    return e.general.theme
                },
                b = function(e) {
                    return e.general.isWidgetOpening
                },
                O = function(e) {
                    return e.general.authFormInputs
                },
                h = function(e) {
                    return e.general.chatStatus
                },
                m = function(e) {
                    return e.general.authFormState && !w(e) && O(e).length > 0
                },
                v = function(e) {
                    return e.general.closeModalOpenedState
                },
                j = function(e) {
                    return e.general.isWidgetLoaded
                },
                y = function(e) {
                    var t, n, a, r;
                    return !(null === (t = e.general.userData) || void 0 === t ? void 0 : t.visitor.bannedAt) && ((!A(e) || !(null === (n = Object(o.a)().options) || void 0 === n ? void 0 : n.hideMobileWidget)) && (void 0 !== e.general.isWidgetDisplayedViaAPI ? e.general.isWidgetDisplayedViaAPI : !! function(e) {
                        return h(e) === s.b.Opened || h(e) === s.b.Served || h(e) === s.b.ClosedByVisitor || h(e) === s.b.Resolved
                    }(e) || ! function(e) {
                        var t, n;
                        return (null === (t = Object(o.a)().options) || void 0 === t ? void 0 : t.hideOfflineChat) && e.agent.status === i.AccountStatus.Offline && 0 === Object(c.b)(e.messages.messages).length && 0 === e.messages.inputText.length && h(e) !== s.b.Pending && !(null === (n = Object(o.a)().options) || void 0 === n ? void 0 : n.isPreviewMode)
                    }(e) && (null !== (a = !(null === (r = Object(o.a)().options) || void 0 === r ? void 0 : r.hideWidget)) && void 0 !== a && a)))
                },
                T = function(e) {
                    return e.general.userData
                },
                S = Object(a.a)(T, (function(e) {
                    return !e || !e.browser || e.browser.isIE
                })),
                A = Object(a.a)((function(e) {
                    return e.general.parentSize
                }), T, S, (function(e, t, n) {
                    var a = e.height > e.width;
                    if (t && t.browser) {
                        var r = t.browser,
                            i = r.isTablet,
                            o = r.isMobile;
                        if (n) return !1;
                        if (i) return !a;
                        if (o) return !0
                    }
                    return e.width < 450 || e.height < 550
                })),
                w = Object(a.a)(T, (function(e) {
                    var t, n, a, r, i = Boolean(null === e || void 0 === e || null === (t = e.visitor) || void 0 === t || null === (n = t.variables) || void 0 === n ? void 0 : n.authenticated),
                        o = null === e || void 0 === e || null === (a = e.visitor) || void 0 === a || null === (r = a.variables) || void 0 === r ? void 0 : r.authenticated;
                    return Object(d.b)("authVariable should show auth form", typeof o, o, "item.visitor", e), i
                })),
                E = function(e) {
                    return e.general.isWidgetOnline
                },
                M = function(e) {
                    return e.general.isInputFocused
                },
                x = function(e) {
                    return e.general.showMorePopper
                },
                C = function(e) {
                    var t = Object(o.a)().options.buttonStyle;
                    return A(e) ? u.a.Bubble : t
                },
                I = Object(a.a)(T, (function(e) {
                    var t, n = !!(e && e.browser && e.browser.isDesktop);
                    try {
                        t = window.screen.width > 550 && window.screen.width < 1200
                    } catch (a) {
                        t = void 0
                    }
                    return Object(d.b)("window", window.screen.width), Object(d.b)("is device tablet by width", t), n && !!!t
                })),
                _ = Object(a.a)(r.inputText, m, r.getMessages, (function(e, t, n) {
                    return e && e.trim().length > 0 || t || 0 === Object(c.b)(n).length
                })),
                F = Object(a.a)(g, A, r.lastUnreadTriggers, r.showTriggerTypingAnimation, (function(e, t, n, a) {
                    return !e && !t && (n.length > 0 || a)
                })),
                k = Object(a.a)(f, y, (function(e) {
                    return e.general.documentFocus
                }), g, (function(e, t, n, a) {
                    return e && t && !(n && a)
                })),
                R = Object(a.a)(m, l, v, (function(e, t, n) {
                    return e || t || n
                })),
                D = Object(a.a)(l, v, (function(e, t) {
                    return e && !t
                })),
                W = Object(a.a)((function(e) {
                    return e.general.openOnTrigger
                }), A, (function(e, t) {
                    return e && !t
                }))
        },
        7: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "GeneralAction", (function() {
                return b
            })), n.d(t, "toggleOpenCloseWidget", (function() {
                return O
            })), n.d(t, "closeWidgetByCustomer", (function() {
                return h
            })), n.d(t, "showWidget", (function() {
                return m
            }));
            var a = n(10),
                r = n.n(a),
                i = n(20),
                o = n(30),
                c = n(1),
                s = n(25),
                u = n(13),
                d = n(11),
                l = n(17),
                g = n(27),
                f = n(6),
                p = n(45),
                b = {
                    authFormStateToggle: Object(o.a)("general/AUTH_FORM_STATE_TOGGLE"),
                    closeConversationModalToggle: Object(o.a)("general/CLOSE_CONVERSATION_MODAL_TOGGLE"),
                    createAuthFormInputs: Object(o.a)("general/CREATE_AUTH_FORM_INPUTS", Object(o.b)()),
                    dataPrivacyStateToggle: Object(o.a)("general/DATA_PRIVACY_STATE_TOGGLE"),
                    documentFocusToggle: Object(o.a)("general/DOCUMENT_FOCUS_TOGGLE"),
                    inputFocusToggle: Object(o.a)("general/INPUT_FOCUS_TOGGLE"),
                    setAuthFormInput: Object(o.a)("general/SET_AUTH_FORM_INPUT", Object(o.b)()),
                    setChatStatus: Object(o.a)("general/SET_CHAT_STATE", Object(o.b)()),
                    setRequestState: Object(o.a)("general/SET_REQUEST_STATE", Object(o.b)()),
                    setSize: Object(o.a)("general/SET_SIZE", Object(o.b)()),
                    setThemeColor: Object(o.a)("general/SET_THEME_COLOR", Object(o.b)()),
                    setUser: Object(o.a)("general/SET_USER", Object(o.b)()),
                    showMorePopperClose: Object(o.a)("general/SHOW_MORE_POPPER_CLOSE"),
                    showMorePopperToggle: Object(o.a)("general/SHOW_MORE_POPPER_TOGGLE"),
                    updateUser: Object(o.a)("general/UPDATE_USER", Object(o.b)()),
                    updateUserStatus: Object(o.a)("general/UPDATE_USER_STATUS", Object(o.b)()),
                    widgetHide: Object(o.a)("general/WIDGET_HIDE"),
                    widgetShow: Object(o.a)("general/WIDGET_SHOW"),
                    widgetLoadedToggle: Object(o.a)("general/WIDGET_LOADED_TOGGLE"),
                    widgetOffline: Object(o.a)("general/WIDGET_OFFLINE"),
                    widgetOnline: Object(o.a)("general/WIDGET_ONLINE"),
                    widgetOpeningToggle: Object(o.a)("general/WIDGET_OPENING_TOGGLE"),
                    widgetClose: Object(o.a)("general/WIDGET_OPEN"),
                    widgetOpen: Object(o.a)("general/WIDGET_CLOSE")
                },
                O = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return function() {
                        var n = Object(i.a)(r.a.mark((function n(a, i) {
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        a(b.widgetOpeningToggle()), e ? (a(b.widgetOpen()), t && g.a.client.notify(c.VisitorEventName.WidgetOpen)) : a(b.widgetClose()), a(Object(u.checkMessagesAndMarkAsRead)(!0)), a(b.widgetLoadedToggle()), setTimeout((function() {
                                            return a(b.widgetLoadedToggle())
                                        }), p.e), s.b.isWidgetDesktop(i()) && Object(l.m)(e), setTimeout((function() {
                                            a(b.widgetOpeningToggle())
                                        }), 300);
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                h = function() {
                    return function() {
                        var e = Object(i.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t(b.setChatStatus(d.b.ClosedByVisitor)), g.a.client.chatClose(), (null === (n = Object(f.a)().options) || void 0 === n ? void 0 : n.ratingEnabled) ? t(Object(u.addRating)()) : t(b.widgetClose());
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                m = function() {
                    return function() {
                        var e = Object(i.a)(r.a.mark((function e(t, n) {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t(b.widgetShow()), s.b.isWidgetVisible(n()) && g.a.client.notify(c.VisitorEventName.WidgetShow);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
        },
        72: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            }));
            var a = n(6),
                r = "en",
                i = ["ar", "az", "bg", "br", "bs", "ca", "cn", "cs", "da", "de", "el", "en", "es", "fa", "fi", "fil", "fr", "he", "hi", "hr", "hu", "is", "it", "ja", "ka", "lt", "lv", "mk", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sl", "sr", "sv", "th", "tr", "tw", "uk"],
                o = {
                    lang: Object(a.a)().options.lang
                }
        },
        75: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n(43),
                r = n(22),
                i = function(e, t) {
                    Object(r.b)("message", t), a.a(t)
                }
        },
        77: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = {
                lightGrey: "#f0f2f7",
                lightGrey95: "rgba(240, 242, 247, 0.94)",
                borderGrey: "#E2E2E2",
                blackTextColor: "black",
                green: "#3CF64F",
                red: "#FF0000",
                darkerGrey: "#B4B5C5",
                darkGrey: "#DCDFEB",
                white: "white",
                grey: "#717284",
                icons: "#A6B2BD",
                inputText: "#06132B",
                inputPlaceholderText: "#717284",
                inputPlaceholderText95: "rgba(113,114,132,0.95)",
                warning: "#ffcf00",
                orange: "#F8A000"
            }
        },
        84: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return j
            })), n.d(t, "j", (function() {
                return y
            })), n.d(t, "i", (function() {
                return T
            })), n.d(t, "g", (function() {
                return S
            })), n.d(t, "f", (function() {
                return A
            })), n.d(t, "h", (function() {
                return w
            })), n.d(t, "e", (function() {
                return E
            })), n.d(t, "d", (function() {
                return M
            })), n.d(t, "b", (function() {
                return x
            })), n.d(t, "c", (function() {
                return C
            }));
            var a = n(5),
                r = n(8),
                i = n(9),
                o = n(106);

            function c() {
                var e = Object(r.a)(["\n\tanimation: ", " 0.25s ease-out both 0ms;\n\ttransition: all 50ms;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function s() {
                var e = Object(r.a)(["\n  0% {\n    opacity: 0.8;\n    transform: translateY(6px);\n    transition: all 250ms;\n  }\n  100% {\n    opacity: 1;\n    transition: all 250ms;\n    transform: translateY(0px);\n  }\n"]);
                return s = function() {
                    return e
                }, e
            }

            function u() {
                var e = Object(r.a)(["\n  0% {\n    opacity: 0.8;\n    transform: translateY(72px);\n    z-index: ", ";\n    overflow: hidden !important;\n  }\n  99% {\n    overflow: hidden !important;\n  }\n  100% {\n    opacity: 1;\n    overflow: hidden !important;\n    transform: translateY(0px);\n    z-index: ", ";\n  }\n"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = Object(r.a)(["\n\t\t\t", "\n\t\t"]);
                return d = function() {
                    return e
                }, e
            }

            function l() {
                var e = Object(r.a)(["\n\t\t\t\t\t\ttransform: translateX(90px);\n\t\t\t\t  "]);
                return l = function() {
                    return e
                }, e
            }

            function g() {
                var e = Object(r.a)(["\n\t\t\t\t\t\ttransform: translateX(-90px);\n\t\t\t\t  "]);
                return g = function() {
                    return e
                }, e
            }

            function f() {
                var e = Object(r.a)(["\n  0% {\n    ", ";\n    overflow: hidden !important;\n    white-space: pre;\n    opacity: 0;\n    box-shadow: 0px 0px 0px;\n  }\n  30% {\n    opacity: 0;\n  }\n  100% {\n    ", "\n\n  }\n"]);
                return f = function() {
                    return e
                }, e
            }

            function p() {
                var e = Object(r.a)(["\n\t\t", "\n\t"]);
                return p = function() {
                    return e
                }, e
            }

            function b() {
                var e = Object(r.a)(["\n0% {\n  width: 0px;\n}\n100% {\n  ", "\n}\n"]);
                return b = function() {
                    return e
                }, e
            }

            function O() {
                var e = Object(r.a)(["\n  0% {\n    transform: scale(0.2);\n  }\n  100% {\n    transform: scale(1);\n}\n"]);
                return O = function() {
                    return e
                }, e
            }

            function h() {
                var e = Object(r.a)(["\n  0% {\n    transform: scale(0.3) rotate(65deg);\n  }\n  100% {\n    transform: scale(1) rotate(0);\n}\n"]);
                return h = function() {
                    return e
                }, e
            }

            function m() {
                var e = Object(r.a)(["\n\t0%,\n\t60%,\n\t100% {\n\t\ttransform: initial;\n\t}\n\n\t30% {\n\t\ttransform: translateY(-9px);\n\t}\n"]);
                return m = function() {
                    return e
                }, e
            }

            function v() {
                var e = Object(r.a)(["\n  0% {\n    opacity: 0;\n  }\n  80% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);
                return v = function() {
                    return e
                }, e
            }
            var j = Object(i.e)(v()),
                y = Object(i.e)(m()),
                T = (Object(i.e)(h()), Object(i.e)(O())),
                S = Object(i.c)({
                    transform: "translateX(0)",
                    opacity: 1,
                    overflow: "hidden",
                    whiteSpace: "pre"
                }),
                A = function() {
                    return Object(i.c)({
                        overflow: "hidden",
                        transform: "rotate(0deg)",
                        width: "auto",
                        padding: "4px 0px"
                    })
                },
                w = function() {
                    return Object(i.e)(b(), Object(i.c)(p(), Object(a.a)({}, A())))
                },
                E = function(e) {
                    return Object(i.e)(f(), e ? Object(i.c)(g()) : Object(i.c)(l()), Object(i.c)(d(), Object(a.a)({}, S)))
                },
                M = Object(i.e)(u(), o.d, o.d),
                x = Object(i.e)(s()),
                C = Object(i.c)(c(), x)
        },
        94: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getMessages", (function() {
                return l
            })), n.d(t, "isTyping", (function() {
                return g
            })), n.d(t, "showTriggerTypingAnimation", (function() {
                return f
            })), n.d(t, "emojiPickerState", (function() {
                return p
            })), n.d(t, "inputText", (function() {
                return b
            })), n.d(t, "sendingMessageState", (function() {
                return O
            })), n.d(t, "warningBarState", (function() {
                return h
            })), n.d(t, "fileUploadState", (function() {
                return m
            })), n.d(t, "acceptedFileExtensions", (function() {
                return v
            })), n.d(t, "acceptedFileMaxSize", (function() {
                return j
            })), n.d(t, "getAcceptedFileTypes", (function() {
                return S
            })), n.d(t, "isSendingBtnDisabled", (function() {
                return A
            })), n.d(t, "showWarningBar", (function() {
                return w
            })), n.d(t, "showFileUploadState", (function() {
                return E
            })), n.d(t, "messagesWithPosition", (function() {
                return M
            })), n.d(t, "unreadMessagesCount", (function() {
                return x
            })), n.d(t, "lastUnreadTriggers", (function() {
                return C
            })), n.d(t, "lastUnreadTriggerMessage", (function() {
                return I
            })), n.d(t, "fileUploadDisabled", (function() {
                return _
            })), n.d(t, "makeGetMessageById", (function() {
                return F
            })), n.d(t, "getLastMessage", (function() {
                return k
            })), n.d(t, "getLastMessageId", (function() {
                return R
            })), n.d(t, "isLastMessageRating", (function() {
                return D
            }));
            var a = n(5),
                r = n(23),
                i = n(304),
                o = n.n(i),
                c = n(1),
                s = function(e) {
                    return e.author === c.MessageSubType.Agent || e.author === c.MessageSubType.Bot || e.author === c.MessageSubType.Trigger || e.type === c.MessageContent.Type.RateForm
                },
                u = n(17),
                d = n(11),
                l = function(e) {
                    return e.messages.messages
                },
                g = function(e) {
                    return e.agent.isTyping
                },
                f = function(e) {
                    return e.messages.fakeTyping
                },
                p = function(e) {
                    return e.messages.emojiPickerState
                },
                b = function(e) {
                    return e.messages.inputText
                },
                O = function(e) {
                    return e.messages.messageSendingState
                },
                h = function(e) {
                    return e.messages.warningBarState
                },
                m = function(e) {
                    return e.messages.fileUploadState
                },
                v = function(e) {
                    return e.messages.acceptedFileExtensions
                },
                j = function(e) {
                    return e.messages.acceptedFileMaxSize
                },
                y = function(e) {
                    return e.messages.lastReadAt
                },
                T = function(e, t) {
                    return t
                },
                S = Object(r.a)((function(e) {
                    return e.messages.acceptedFileTypes
                }), (function(e) {
                    return e.map((function(e) {
                        return o()(e)
                    }))
                })),
                A = Object(r.a)(O, b, (function(e, t) {
                    return e === d.e.Loading || 0 === t.trim().length
                })),
                w = Object(r.a)(h, (function(e) {
                    return e === d.f.NotAllowedAsFirstMessage || e === d.f.FileTooBig || e === d.f.TooManyFiles || e === d.f.FilesWerentProcessed || e === d.f.BadExtension || e === d.f.SameMessageTwice
                })),
                E = Object(r.a)(m, (function(e) {
                    return e === d.c.Loading || e === d.c.Initial
                })),
                M = Object(r.a)(l, (function(e) {
                    var t = Object(u.n)(e),
                        n = Object(u.j)(t);
                    return Object(u.e)(n).map((function(t) {
                        return Object(a.a)(Object(a.a)({}, e.find((function(e) {
                            return e.id === t.id
                        }))), {}, {
                            position: t.position
                        })
                    }))
                })),
                x = Object(r.a)(M, y, (function(e) {
                    return e.general.isWidgetOpen
                }), (function(e, t, n) {
                    return n ? 0 : function(e, t) {
                        return t ? e.filter((function(e) {
                            return e.created > new Date(t) && s(e)
                        })) : e.filter((function(e) {
                            return s(e)
                        }))
                    }(e, t).length
                })),
                C = Object(r.a)(M, y, (function(e, t) {
                    if (t) {
                        var n = e.filter((function(e) {
                            return e.author !== c.MessageSubType.Contact && e.created > new Date(t)
                        }));
                        return Object(u.a)(n)
                    }
                    return Object(u.a)(e)
                })),
                I = Object(r.a)(C, (function(e) {
                    return e[0] || null
                })),
                _ = Object(r.a)(l, (function(e) {
                    return 0 === Object(u.b)(e).length
                })),
                F = function() {
                    return Object(r.a)([M, T], (function(e, t) {
                        return e.find((function(e) {
                            return e.id === t
                        }))
                    }))
                },
                k = Object(r.a)(M, (function(e) {
                    return (null === e || void 0 === e ? void 0 : e.length) < 1 ? null : e[e.length - 1]
                })),
                R = Object(r.a)(k, (function(e) {
                    return e ? e.id : null
                })),
                D = Object(r.a)(k, (function(e) {
                    return !!e && e.type === c.MessageContent.Type.RateForm
                }))
        }
    },
    [
        [526, 2, 3]
    ]
]);
//# sourceMappingURL=main.31b930db.chunk.js.map