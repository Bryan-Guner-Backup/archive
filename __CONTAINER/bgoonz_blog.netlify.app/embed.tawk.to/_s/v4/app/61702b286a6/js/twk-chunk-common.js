(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-common"], {
        "028e": function(e, t, i) {
            "use strict";
            (function(e) {
                i.d(t, "a", (function() {
                    return h
                }));
                var n = i("5868"),
                    a = i("7f46"),
                    o = i("e8f9"),
                    s = i("f0b0"),
                    r = i("27a6");

                function c(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), i.push.apply(i, n)
                    }
                    return i
                }

                function u(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(i), !0).forEach((function(t) {
                            d(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }

                function d(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function l(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                var h = function() {
                    function t(e) {
                        (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), this.store = e, this.keyDownTimeout = null, this.webrtcWin = null, this.maxNumberFileUpload = 5, this.maxSizeFileUpload = 52428800, this.regSurvey = /\[option\](.*?)(<br\/>|$)/gm, this.regSurveyQuestion = /^(.*?)\[option\]/g, this.regOption = /\[option\]/g
                    }
                    return function(e, t, i) {
                        t && l(e.prototype, t), i && l(e, i)
                    }(t, [{
                        key: "processHistoryMessages",
                        value: function(e) {
                            for (var t = [], i = {}, o = 0; o < e.length; o++) {
                                var r = void 0,
                                    c = void 0,
                                    d = void 0,
                                    l = void 0,
                                    h = !1,
                                    f = null,
                                    p = e[o],
                                    m = s.Helper.generateUUID(),
                                    w = new Date(p.co).getTime(),
                                    g = {};
                                if ("WEBRTC_CALL" === p.m && p.md && p.md.webrtc && (h = !0, f = p.md.clid), "n" !== p.t || "WEBRTC_CALL" === p.m) {
                                    if (l = p.n, r = p.uid, "a" === p.ut) {
                                        var v = i[p.md.rsc];
                                        v && (r = v.pid, c = v.pi ? "".concat("https://s3.amazonaws.com/tawk-to-pi", "/").concat(v.pi) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg"))
                                    } else "s" === p.ut && (r = s.Helper.generateUUID(), c = p.md && p.md.pi ? "".concat("https://tawk.link", "/").concat(p.md.pi) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg"));
                                    d = this.parseText(a.a.rawEncode(p.m));
                                    var k = this.parseSurvey(d);
                                    p.md && p.md.file && (g.isUpload = !0, g.humanizeFileSize = n.a.formatFileSize(p.md.file.size), g.fileName = a.a.rawEncode(p.md.file.fileName), g.fileLink = "".concat("https://tawk.link", "/").concat(p.md.file.name), p.md.file.type.match(/(jpg|jpeg|png|gif)$/i) ? g.fileType = "image" : -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(p.md.file.mimeType) ? g.fileType = "video" : -1 !== ["audio/mp3", "audio/ogg", "audio/mpeg", "audio/wav"].indexOf(p.md.file.mimeType) && (g.fileType = "audio")), t.push(u(u({}, g), {}, {
                                        timeStamp: w,
                                        message: d,
                                        name: l,
                                        type: p.t,
                                        time: p.co,
                                        data: p.md,
                                        isPending: !1,
                                        senderType: p.ut,
                                        ownerId: r,
                                        profileImage: c,
                                        cver: p.cver,
                                        messageId: m,
                                        isCallView: h,
                                        callId: f,
                                        callData: null,
                                        surveyObj: k,
                                        rawMessage: p
                                    }))
                                } else "AGENT_JOIN_CONVERSATION" === p.m && p.md && (i[p.md.rsc] = p.md)
                            }
                            return t
                        }
                    }, {
                        key: "parseChatMessage",
                        value: function(t, i) {
                            var o, r, c, d, l, h = !1,
                                f = null,
                                p = {},
                                m = s.Helper.generateUUID(),
                                w = new Date(t.co).getTime(),
                                g = this.store.getters["widget/emojiEnabled"];
                            if (t.n = a.a.rawDecode(t.n), "n" === t.t && ("AGENT_JOIN_CONVERSATION" === t.m || "AGENT_LEFT_CONVERSATION" === t.m)) return this.updateAgentPresence(t, i), this.store.dispatch("chat/updateChatMessage", {
                                rawMessage: t,
                                type: "n"
                            }), null;
                            if ("n" === t.t && "v" === t.ut) {
                                if ("VISITOR_RATING" !== t.m) return;
                                "VISITOR_RATING" === t.m && (i && this.changeRating(t.md.rt, !0), t.md.rt < 0 ? (t.m = g && void 0 !== window.emojione ? ":thumbsdown_tone2:" : "&#128078;", t.t = "c") : t.md.rt > 0 ? (t.m = g && void 0 !== window.emojione ? ":thumbsup_tone2:" : "&#128077;", t.t = "c") : t.m = e.Tawk_Window.app.$i18n("chat", "remove_rate"))
                            }
                            if ("v" === t.ut) o = this.store.getters["visitor/displayName"], r = t.uid;
                            else if (o = t.n, "a" === t.ut) {
                                var v = this.store.getters["chat/agents"];
                                v[t.md.rsc] && (r = v[t.md.rsc].profileId);
                                var k = this.store.getters["chat/agentProfile"](t.md.rsc);
                                c = k ? k.profileImage : null
                            } else "s" === t.ut && (c = t.md && t.md.pi ? "".concat("https://tawk.link", "/").concat(t.md.pi) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg"));
                            return "WEBRTC_CALL" === t.m && t.md && t.md.webrtc ? (h = !0, f = t.md.clid) : ("c" === t.t && ("v" === t.ut ? this.store.commit("chat/setVisitorHasMessaged", !0) : "a" === t.ut ? (this.store.commit("chat/setAgentHasMessaged", !0), i && e.Tawk_Window.jsApi.triggerApiHandlers("onChatMessageAgent", t.m)) : "s" === t.ut && i && e.Tawk_Window.jsApi.triggerApiHandlers("onChatMessageSystem", t.m)), d || (d = this.parseText(t.m), l = this.parseSurvey(d))), w > this.store.getters["session/lastMessageTimestamp"] && ("v" === t.ut ? this.store.commit("session/setLastMessageTimestamp", w) : (this.store.dispatch("chat/updateUnseenMessages", m), i && e.Tawk_Window.jsApi.triggerApiHandlers("onUnreadCountChanged", this.store.getters["chat/unreadMessageCount"]))), t.md && t.md.file && (p.isUpload = !0, p.humanizeFileSize = n.a.formatFileSize(t.md.file.size), p.fileName = a.a.rawEncode(t.md.file.fileName), p.fileLink = "".concat("https://tawk.link", "/").concat(t.md.file.name), t.md.file.type.match(/(jpg|jpeg|png|gif)$/i) ? p.fileType = "image" : -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(t.md.file.mimeType) ? p.fileType = "video" : -1 !== ["audio/mp3", "audio/ogg", "audio/mpeg", "audio/wav"].indexOf(t.md.file.mimeType) ? p.fileType = "audio" : p.fileType = "other"), p = u(u({}, p), {}, {
                                timeStamp: w,
                                message: d,
                                name: o,
                                type: t.t,
                                time: t.co,
                                data: t.md,
                                isPending: !w,
                                senderType: t.ut,
                                ownerId: r,
                                profileImage: c,
                                cver: t.cver,
                                messageId: m,
                                isCallView: h,
                                callId: f,
                                callData: null,
                                surveyObj: l,
                                rawMessage: t
                            })
                        }
                    }, {
                        key: "parseText",
                        value: function(e) {
                            if (e) return e = e.replace(n.a.regLineBreaks, n.a.br), e = this.createUrl(e.split(/\s/), " ")
                        }
                    }, {
                        key: "createUrl",
                        value: function(e, t) {
                            var i, a, o, s = this,
                                r = function(e) {
                                    return s.parseUrl(e)
                                },
                                c = function(e) {
                                    return s.parseEmail(e)
                                };
                            for (a = 0, o = e.length; a < o; a++) - 1 !== e[a].indexOf(n.a.br) ? (i = e[a].split(n.a.regBr), e[a] = this.createUrl(i, n.a.br)) : e[a].match(n.a.regEmailMatch) ? e[a] = e[a].replace(n.a.regEmailMatch, c) : (e[a] = e[a].replace(n.a.regMatchUrl, r), e[a] = e[a].replace(n.a.regMatchIp, r));
                            return e.join(t)
                        }
                    }, {
                        key: "parseUrl",
                        value: function(e) {
                            var t, i = "";
                            return void 0 !== window.emojione && window.emojione.unifyUnicode(e) !== e ? e : (e.match(n.a.regEmailMatch) && (i = "mailto:"), "mailto:" === i ? (-1 !== (t = e.match(n.a.regEmailMatch)[0]).indexOf("mailto") && (i = ""), e.replace(n.a.regEmailMatch, '<a class="tawk-link" href="' + (i + t) + '" title="' + (i + t) + '" style="word-wrap:break-word; white-space:normal;>' + t + "</a> ")) : (0 !== e.toLowerCase().indexOf("http") && 0 !== e.toLowerCase().indexOf("ftp") && (i = "http://"), '<a class="tawk-link" target="_blank" href="' + (i + e) + '" title="' + (i + e) + '" style="word-wrap:break-word; white-space:normal;">' + e + "</a> "))
                        }
                    }, {
                        key: "parseEmail",
                        value: function(e) {
                            var t = "";
                            return void 0 !== window.emojione && window.emojione.unifyUnicode(e) !== e ? e : (-1 === e.indexOf("mailto") && (t = "mailto:"), '<a href="' + (t + e) + '" title="' + (t + e) + '">' + e + "</a> ")
                        }
                    }, {
                        key: "parseSurvey",
                        value: function(e) {
                            var t = [],
                                i = e.match(this.regSurvey);
                            if (!i) return null;
                            for (var o = e.match(this.regSurveyQuestion), s = 0, r = i.length; s < r; s++) {
                                var c = i[s].replace(this.regOption, "");
                                c = c.replace(n.a.regBr, ""), c = a.a.trim(c), t.push(c)
                            }
                            return {
                                options: t,
                                question: o[0].replace(this.regOption, "")
                            }
                        }
                    }, {
                        key: "updateAgentPresence",
                        value: function(e, t) {
                            return ("AGENT_JOIN_CONVERSATION" === e.m || "AGENT_LEFT_CONVERSATION" === e.m) && ("AGENT_JOIN_CONVERSATION" === e.m ? this.addAgentToList(e, t) : this.removeAgentFromList(e, t))
                        }
                    }, {
                        key: "addAgentToList",
                        value: function(t, i) {
                            var n = t.md || {},
                                o = n.rsc,
                                s = this.store.getters["chat/agents"][t],
                                r = {
                                    profileImage: n.pi ? "".concat("https://s3.amazonaws.com/tawk-to-pi", "/").concat(n.pi) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg"),
                                    profileTitle: a.a.rawDecode(n.pst) || "",
                                    profileId: n.pid,
                                    displayName: t.n,
                                    count: 1
                                };
                            if (s) {
                                if (!(s.seq.time < n.seq.time || s.seq.time === n.seq.time && s.seq.inc < n.seq.inc)) return;
                                if (s.profileId === n.pid) return !1
                            }
                            i && e.Tawk_Window.jsApi.triggerApiHandlers("onAgentJoinChat", {
                                name: r.displayName,
                                position: r.profileTitle,
                                image: r.profileImage,
                                id: t.uid
                            }), this.store.dispatch("chat/agentJoined", {
                                resourceId: o,
                                agentData: n,
                                profileData: r
                            })
                        }
                    }, {
                        key: "removeAgentFromList",
                        value: function(t, i) {
                            var n = t.md || {},
                                a = n.rsc,
                                o = this.store.getters["chat/agents"][a];
                            if (!(!o || o.seq.time > n.seq.time || o.seq.time === n.seq.time && o.seq.inc > n.seq.inc)) {
                                if (i) {
                                    var s = this.store.getters["chat/agentProfile"](a);
                                    s && e.Tawk_Window.jsApi.triggerApiHandlers("onAgentLeaveChat", {
                                        name: s.displayName,
                                        position: s.profileTitle,
                                        image: s.profileImage,
                                        id: t.uid
                                    })
                                }
                                this.store.dispatch("chat/agentLeft", {
                                    resourceId: a,
                                    agentData: n
                                })
                            }
                        }
                    }, {
                        key: "sendMessagePreview",
                        value: function(t) {
                            var i, o = this,
                                s = n.a.getTargetElement(t);
                            if (13 === t.keyCode && !t.shiftKey && !this.store.getters["browserData/mobileBrowserName"]) return i = a.a.trim(s.value), s.value = "", this.sendMessage(i);
                            !this.keyDownTimeout && this.store.getters["widget/showVisitorTyping"] && (this.keyDownTimeout = setTimeout((function() {
                                i = a.a.trim(s.value), void 0 !== window.emojione && (i = window.emojione.toShort(i)), e.Tawk_Window.app.$socket.publish("notifyMessagePreview", i), clearTimeout(o.keyDownTimeout), o.keyDownTimeout = null
                            }), 1e3))
                        }
                    }, {
                        key: "sendMessage",
                        value: function(e, t) {
                            if (e = a.a.rawDecode(a.a.trim(e)), t = t || function() {}, clearTimeout(this.keyDownTimeout), this.keyDownTimeout = 0, !e) return !!t && t();
                            void 0 !== window.emojione && (e = window.emojione.toShort(e)), this.sendMessageToServer(e, t)
                        }
                    }, {
                        key: "sendMessageToServer",
                        value: function(t, i) {
                            var n = this;
                            i = i || function() {};
                            var o = this.parseChatMessage({
                                ut: "v",
                                t: "c",
                                m: a.a.rawEncode(t),
                                co: null,
                                uid: this.store.getters["visitor/visitorId"]
                            });
                            this.store.commit("chat/setOutgoingMessage", o), e.Tawk_Window.app.$socket.publish("sendChatMessage", t, (function(a, s, r) {
                                a ? (o.sendFailed = !0, o.isPending = !1) : (o.cver = r, o.timeStamp = new Date(s).getTime(), o.time = s, o.isPending = !1, o.rawMessage.co = s, o.sendFailed = !1, e.Tawk_Window.jsApi.triggerApiHandlers("onChatMessageVisitor", t), n.store.dispatch("session/addWaitTime"), n.store.dispatch("chat/outgoingChatMessage", o)), i()
                            }))
                        }
                    }, {
                        key: "changeRating",
                        value: function(t, i) {
                            var n, a = "c",
                                o = this.store.getters["widget/features"].emoji;
                            this.store.getters["chat/rating"] === t && (t = 0), this.store.commit("chat/setRating", t), i || (e.Tawk_Window.app.$socket.publish("setRating", t), e.Tawk_Window.jsApi.triggerApiHandlers("onChatSatisfaction", t)), t < 0 ? n = o && void 0 !== window.emojione ? ":thumbsdown_tone2:" : "&#128078;" : t > 0 ? n = o && void 0 !== window.emojione ? ":thumbsup_tone2:" : "&#128077;" : (n = e.Tawk_Window.app.$i18n("chat", "remove_rate"), a = "n");
                            var s = this.parseChatMessage({
                                ut: "v",
                                t: a,
                                m: n,
                                co: new Date,
                                uid: this.store.getters["visitor/visitorId"]
                            });
                            i || (this.store.commit("chat/setOutgoingMessage", s), this.store.dispatch("chat/updateRatingMessage", s))
                        }
                    }, {
                        key: "uploadFiles",
                        value: function(t) {
                            for (var i = this, n = [], a = [], c = [], u = function(e) {
                                    var r = t[e],
                                        u = {
                                            uuid: s.Helper.generateUUID(),
                                            handle: null,
                                            fileName: r.file.name,
                                            percentage: 0,
                                            hasError: !1,
                                            fileData: r
                                        };
                                    return r.file.size > i.maxSizeFileUpload ? (a.push(r.file.name), "continue") : e >= i.maxNumberFileUpload ? (c.push(r), "continue") : (i.store.commit("chat/addFileUpload", u), void n.push(new Promise((function(e, t) {
                                        o.a.getUploadHandler((function(t) {
                                            u.handle = t, o.a.uploadFile(t, i.store.getters["session/sessionKey"], r.file, (function(t) {
                                                e(t), i.store.commit("chat/removeFileUpload", u.uuid)
                                            }))
                                        }), t)
                                    }))))
                                }, d = 0; d < t.length; d++) u(d);
                            a.length && e.Tawk_Window.eventBus.$emit("tooBigFileList", a), Object(r.a)(n).then((function(t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    if ("fulfilled" === a.status && a.value) ! function() {
                                        var t = {
                                            fileName: a.value.filename,
                                            name: a.value.name,
                                            type: a.value.extension,
                                            mimeType: a.value.mimeType,
                                            size: a.value.size
                                        };
                                        e.Tawk_Window.app.$socket.publish("fileUploadMessage", t, (function(n, a, o) {
                                            if (!n) {
                                                var s = i.parseChatMessage({
                                                    ut: "v",
                                                    t: "c",
                                                    m: "FILE",
                                                    co: a,
                                                    uid: i.store.getters["visitor/visitorId"],
                                                    md: {
                                                        file: t
                                                    },
                                                    cver: o
                                                });
                                                i.store.commit("chat/setOutgoingMessage", s), i.store.dispatch("chat/outgoingChatMessage", s), e.Tawk_Window.jsApi.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + t.name)
                                            }
                                        }))
                                    }();
                                    else i.store.getters["chat/uploadFiles"].forEach((function(e) {
                                        e.hasError || (e.hasError = !0)
                                    }))
                                }
                            }))
                        }
                    }, {
                        key: "callStatusUpdate",
                        value: function(t) {
                            var i = this,
                                n = this.store.getters["chat/callData"](t.clid);
                            n || (n = {
                                callId: t.clid,
                                status: t.stts,
                                version: t.ver,
                                isMissed: t.mssd,
                                isRejected: t.rjctd,
                                isRinging: "ringing" === t.stts,
                                isDone: "completed" === t.stts,
                                isVideo: !!t.f && t.f.vid,
                                isScreenshare: !!t.f && t.f.scrn,
                                hasError: !1
                            }, this.store.dispatch("chat/updateCallData", n)), e.Tawk_Window.app.$socket.publish("getCallStatus", {
                                callId: t.clid
                            }, (function(t, a) {
                                if (t || !a.data.call.f || n.version > a.data.call.ver) return n.hasError = !0, void i.store.dispatch("chat/updateCallData", n);
                                var o, s = a.data.call;
                                ("a" !== s.cllr.t || (o = i.store.getters["chat/agentProfile"](s.cllr.urid))) && ((n = {
                                    callId: s.clid,
                                    status: s.stts,
                                    version: s.ver,
                                    isMissed: s.mssd,
                                    isRejected: s.rjctd,
                                    isRinging: "ringing" === s.stts,
                                    isDone: "completed" === s.stts,
                                    isVideo: s.f.vid,
                                    isScreenshare: s.f.scrn,
                                    hasError: !1,
                                    caller: o || s.cllr,
                                    startedAt: s.so,
                                    endedAt: s.eo
                                }).isRinging && n.caller && "a" === s.cllr.t ? i.store.commit("chat/setIncomingCall", n) : n.isDone && i.store.getters["chat/incomingCall"] && i.store.getters["chat/incomingCall"].callId == n.callId && i.store.commit("chat/setIncomingCall", null), i.store.dispatch("chat/updateCallData", n), e.Tawk_Window.eventBus.$emit("callDataUpdated", n))
                            }))
                        }
                    }, {
                        key: "acceptCall",
                        value: function() {
                            var t = this;
                            this.store.getters["browserData/isWebRTCAvailable"] && (this.webrtcWin = window.open("", ""), e.Tawk_Window.app.$socket.publish("getWebRTCToken", {}, (function(e, i) {
                                t.store.commit("chat/setIncomingCall", null), e && t.webrtcWin.close(), t.webrtcWin.location.href = "".concat("https://video.tawk.to", "/v2/call?token=").concat(i.data.token)
                            })))
                        }
                    }, {
                        key: "declineCall",
                        value: function(t) {
                            var i = this,
                                n = {
                                    callId: t
                                };
                            e.Tawk_Window.app.$socket.publish("declineCall", n, (function() {
                                i.store.commit("chat/setIncomingCall", null)
                            }))
                        }
                    }, {
                        key: "initiateCall",
                        value: function(t, i) {
                            var n = this;
                            this.webrtcWin = window.open("", ""), e.Tawk_Window.app.$socket.publish("getWebRTCToken", {
                                video: t,
                                screen: i
                            }, (function(e, t) {
                                e && n.webrtcWin.close(), n.webrtcWin.location.href = "".concat("https://video.tawk.to", "/v2/call?token=").concat(t.data.token)
                            }))
                        }
                    }, {
                        key: "clearUnseenNotification",
                        value: function() {
                            this.store.dispatch("chat/clearUnseenMessages"), e.Tawk_Window.jsApi.triggerApiHandlers("onUnreadCountChanged", this.store.getters["chat/unreadMessageCount"])
                        }
                    }, {
                        key: "updateFileProgress",
                        value: function(e, t, i) {
                            for (var n, a = this.store.getters["chat/uploadFiles"], o = 0; o < a.length; o++)
                                if (a[o].handle === e.handle) {
                                    t ? a.splice(o, 1) : n = a[o];
                                    break
                                }
                            n && (i ? n.hasError = !0 : n.percentage = e.progress)
                        }
                    }, {
                        key: "sendApiEvent",
                        value: function(t, i, n) {
                            var a;
                            "function" == typeof i && (n = i, i = null), n = n || function() {}, (a = e.Tawk_Window.jsApi.secureWrapper({})).name = t, a.data = i, e.Tawk_Window.app.$socket.publish("addEvent", a, n)
                        }
                    }, {
                        key: "sendApiAttributes",
                        value: function(t, i) {
                            var n = this;
                            i = i || function() {}, t = e.Tawk_Window.jsApi.secureWrapper(t), e.Tawk_Window.app.$socket.publish("setAttributes", t, (function(e) {
                                e || (t.name || t.email) && n.store.dispatch("visitor/updateVisitorInformation", {
                                    n: t.name || void 0,
                                    e: t.email || void 0
                                }), i(e)
                            }))
                        }
                    }, {
                        key: "addTags",
                        value: function(t, i) {
                            var n;
                            i = i || function() {}, (n = e.Tawk_Window.jsApi.secureWrapper({})).tags = t, e.Tawk_Window.app.$socket.publish("addTags", n, i)
                        }
                    }, {
                        key: "removeTags",
                        value: function(t, i) {
                            var n;
                            i = i || function() {}, (n = e.Tawk_Window.jsApi.secureWrapper({})).tags = t, e.Tawk_Window.app.$socket.publish("removeTags", n, i)
                        }
                    }]), t
                }()
            }).call(this, i("c8ba"))
        },
        "0ad2": function(e, t, i) {
            "use strict";
            (function(e) {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                i.d(t, "a", (function() {
                    return a
                }));
                var a = function() {
                    function t(e) {
                        (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), this.store = e, this.incomingMessage = null, this.audioContext = null, this.isReadyForInit = !1, this.play = null, this.soundEl = null, this.soundFile = "".concat("https://embed.tawk.to/_s/v4/assets", "/audio/chat_sound.mp3")
                    }
                    return function(e, t, i) {
                        t && n(e.prototype, t), i && n(e, i)
                    }(t, [{
                        key: "init",
                        value: function() {
                            var e, t = this,
                                i = this.store.getters["browserData/html5audio"];
                            i && i.supported && (this.audioContext || /Firefox/.test(navigator.userAgent) || "undefined" == typeof AudioBuffer || void 0 === window.AudioContext && void 0 === window.webkitAudioContext || (window.AudioContext = window.AudioContext || window.webkitAudioContext, this.audioContext = new window.AudioContext), this.audioContext ? this.incomingMessage = this.audioContextPlayer() : this.incomingMessage = this.htmlAudioPlayer(), this.audioContext && (e = function() {
                                t.isReadyForInit && !t.touchstartInited && (t.incomingMessage.volume = 0, t.incomingMessage.play(), t.incomingMessage.source.stop(0), t.incomingMessage.volume = 1, window && "function" == typeof window.removeEventListener && window.removeEventListener("touchstart", e, {
                                    passive: !0
                                }), t.touchstartInited = !0)
                            }, this.store.getters["browserData/mobileBrowserName"] && "ontouchstart" in window && window.addEventListener("touchstart", e, {
                                passive: !0
                            })))
                        }
                    }, {
                        key: "playSound",
                        value: function() {
                            e.Tawk_Window.jsApi.local_API.disableSound || this.store.getters["widget/isSoundEnabled"] && this.store.getters["widget/localSoundEnabled"] && this.incomingMessage && this.incomingMessage.play()
                        }
                    }, {
                        key: "audioContextPlayer",
                        value: function() {
                            var e = this,
                                t = {
                                    sourcePath: e.soundFile,
                                    buffer: null,
                                    source: null,
                                    volume: 1,
                                    play: function() {
                                        if (this.buffer) {
                                            var t = e.audioContext.createGain();
                                            t.gain.value = this.volume, this.source = e.audioContext.createBufferSource(), this.source.buffer = this.buffer, this.source.connect(t), t.connect(e.audioContext.destination), this.source.start(0)
                                        }
                                    },
                                    loadBuffer: function() {
                                        var t = this,
                                            i = new XMLHttpRequest;
                                        i.open("GET", this.sourcePath, !0), i.responseType = "arraybuffer", i.onload = function() {
                                            e.audioContext.decodeAudioData(i.response, (function(i) {
                                                i && (t.buffer = i, e.isReadyForInit || (e.isReadyForInit = !0))
                                            }), (function(e) {
                                                throw new Error(e)
                                            }))
                                        }, i.onerror = function() {
                                            throw new Error("BufferLoader: XHR error for " + this.sourcePath)
                                        }, i.send()
                                    }
                                };
                            return t.loadBuffer(), t
                        }
                    }, {
                        key: "htmlAudioPlayer",
                        value: function() {
                            var e = {};
                            if ("symbian" !== this.store.getters["browserData/mobileBrowserName"]) return "safari" === this.store.getters["browserData/mobileBrowserName"] ? (e.sound = document.createElement("audio"), e.sound.src = this.soundFile, e.sound.style.cssText = "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;", document.body.appendChild(e.sound)) : e.sound = new Audio(this.soundFile), e.sound.addEventListener("timeupdate", (function() {
                                e.sound.currentTime >= .2 && e.sound.pause()
                            }), !1), e.sound.load(), e.play = function() {
                                try {
                                    this.sound.currentTime = 0, this.sound.autoplay = !0, this.sound.load(), this.sound.play()
                                } catch (e) {}
                            }, e;
                            e.play = function() {}
                        }
                    }]), t
                }()
            }).call(this, i("c8ba"))
        },
        "0dc3": function(e, t, i) {
            "use strict";
            i.r(t);
            t.default = {
                namespaced: !0,
                state: {
                    isIe: !1,
                    html5audio: null,
                    mobileBrowserName: null,
                    searchEngine: null,
                    vendor: null,
                    version: null,
                    isWebRTCAvailable: !0,
                    os: null
                },
                getters: {
                    isIE: function(e) {
                        return e.isIE
                    },
                    html5audio: function(e) {
                        return e.html5audio
                    },
                    mobileBrowserName: function(e) {
                        return e.mobileBrowserName
                    },
                    searchEngine: function(e) {
                        return e.searchEngine
                    },
                    vendor: function(e) {
                        return e.vendor
                    },
                    version: function(e) {
                        return e.version
                    },
                    isWebRTCAvailable: function(e) {
                        return e.isWebRTCAvailable
                    },
                    os: function(e) {
                        return e.os
                    }
                },
                actions: {
                    updateInitialData: function(e, t) {
                        (0, e.commit)("setInitialData", t)
                    },
                    resetState: function(e) {
                        (0, e.commit)("unsetData")
                    }
                },
                mutations: {
                    setInitialData: function(e, t) {
                        e.vendor = t.vendor, e.version = t.version, e.isIE = t.isIE, e.mobileBrowserName = t.mobileBrowserName, e.html5audio = t.html5audio, e.searchEngine = t.searchEngine, e.isWebRTCAvailable = t.isWebRTCAvailable, e.os = t.os
                    },
                    setMobileBrowserName: function(e, t) {
                        e.mobileBrowserName = t
                    },
                    unsetData: function(e) {
                        for (var t = {
                                isIe: !1,
                                html5audio: null,
                                mobileBrowserName: null,
                                searchEngine: null,
                                vendor: null,
                                version: null,
                                isWebRTCAvailable: !0,
                                os: null
                            }, i = Object.keys(t), n = 0; n < i.length; n++) {
                            var a = i[n];
                            e[a] = t[a]
                        }
                    }
                }
            }
        },
        "24ca": function(e, t, i) {
            "use strict";
            var n = new(i("2b0e").a);
            t.a = n
        },
        "27a6": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return n
            }));
            var n = function(e) {
                var t = e.map((function(e) {
                    return e.then((function(e) {
                        return {
                            status: "fulfilled",
                            value: e
                        }
                    })).catch((function(e) {
                        return {
                            status: "rejected",
                            reason: e
                        }
                    }))
                }));
                return Promise.all(t)
            }
        },
        "27c6": function(e, t, i) {
            "use strict";

            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            i.d(t, "a", (function() {
                return a
            }));
            var a = function() {
                function e(t) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.store = t, this.setupTimeout = null, this.agentCountSubscription = null, this.originalPageStatus = null, this.utcOffset = 0, this.isSetup = !1, this.agentCountListener = null
                }
                return function(e, t, i) {
                    t && n(e.prototype, t), i && n(e, i)
                }(e, [{
                    key: "setup",
                    value: function() {
                        this.clear(), null === this.originalPageStatus && (this.originalPageStatus = this.store.getters["session/pageStatus"]), this.store.getters["schedule/isEnabled"] ? (this.utcOffset = -1 * ((new Date).getTime() - this.store.getters["schedule/timezone"].utc), this.isSetup = !0, this.calculate()) : this.store.dispatch("session/updatePageStatus", this.originalPageStatus)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        clearTimeout(this.setupTimeout), this.setupTimeout = null
                    }
                }, {
                    key: "cleanUp",
                    value: function() {
                        this.clear(), this.originalPageStatus = null, this.isSetup = !1, this.unwatchAgentCount()
                    }
                }, {
                    key: "calculate",
                    value: function() {
                        var e = this;
                        if (this.clear(), this.isSetup && this.store.getters["schedule/isEnabled"]) {
                            var t = this.store.getters["schedule/slots"];
                            if (0 !== t.length) {
                                for (var i, n, a, o = new Date, s = -6e4 * o.getTimezoneOffset(), r = this.store.getters["schedule/timezone"].tzo - s, c = new Date(o.getTime() + this.utcOffset + r), u = c.getDay(), d = 60 * c.getHours() + c.getMinutes(), l = 60 * d + c.getSeconds(), h = 0; h < t.length; h++) {
                                    var f = t[h];
                                    if (f.day === u) {
                                        if (d >= f.start && d < f.end) {
                                            i = f;
                                            break
                                        }
                                        if (d < f.start) {
                                            n = f;
                                            break
                                        }
                                    }
                                }
                                void 0 !== i ? (this.goOnline(), a = 60 * i.end - l) : (this.goOffline(), a = void 0 !== n ? 60 * n.start - l : 86400 - l + 1), void 0 !== a && (this.setupTimeout = setTimeout((function() {
                                    e.calculate()
                                }), 1e3 * a))
                            } else this.goOffline()
                        }
                    }
                }, {
                    key: "goOnline",
                    value: function() {
                        this.unwatchAgentCount(), this.originalPageStatus && this.store.dispatch("session/updatePageStatus", this.originalPageStatus)
                    }
                }, {
                    key: "goOffline",
                    value: function() {
                        var e = this;
                        0 === this.store.getters["chat/agentsCount"] && this.store.dispatch("session/updatePageStatus", "offline"), this.agentCountListener = this.store.watch((function(e) {
                            return e.chat.agentsCount
                        }), (function(t) {
                            0 === t && e.store.dispatch("session/updatePageStatus", "offline")
                        }))
                    }
                }, {
                    key: "unwatchAgentCount",
                    value: function() {
                        "function" == typeof this.agentCountListener && (this.agentCountListener(), this.agentCountListener = null)
                    }
                }]), e
            }()
        },
        "284b": function(e, t, i) {
            "use strict";
            i.r(t);
            t.default = {
                namespaced: !0,
                state: {
                    isOpen: !1
                },
                getters: {
                    isOpen: function(e) {
                        return e.isOpen
                    }
                },
                actions: {
                    showOverlay: function(e, t) {
                        var i = e.commit;
                        e.state.isOpen !== t && i("setOverlayOpen", t)
                    },
                    resetState: function(e) {
                        (0, e.commit)("unsetData")
                    }
                },
                mutations: {
                    setOverlayOpen: function(e, t) {
                        e.isOpen = t
                    },
                    unsetData: function(e) {
                        for (var t = {
                                isOpen: !1
                            }, i = Object.keys(t), n = 0; n < i.length; n++) {
                            var a = i[n];
                            e[a] = t[a]
                        }
                    }
                }
            }
        },
        "32d9": function(e, t, i) {
            "use strict";
            i.r(t),
                function(e) {
                    t.default = {
                        namespaced: !0,
                        state: function() {
                            return {
                                branding: {},
                                components: {},
                                consentData: {},
                                desktopVisibility: {},
                                id: null,
                                isPopup: !1,
                                generalVisibility: {},
                                maxDesktop: {},
                                minDesktop: {},
                                minMobile: {},
                                mobileVisibility: {},
                                onClick: "max",
                                show: null,
                                states: {},
                                theme: {},
                                type: "inline",
                                version: void 0,
                                bubble: {},
                                isRTL: !1,
                                yOffset: 0,
                                xOffsetMobile: 0,
                                yOffsetMobile: 0,
                                xOffset: 0,
                                language: "en",
                                notification: {},
                                features: {},
                                webrtcOptions: {},
                                isEmbedded: !1,
                                localSoundEnabled: !0,
                                zoomRatio: 1,
                                toolbarOptions: {
                                    showAgentAvatars: !1
                                }
                            }
                        },
                        getters: {
                            branding: function(e) {
                                return e.branding
                            },
                            consentData: function(e) {
                                return e.consentData
                            },
                            desktopVisibility: function(e) {
                                return e.desktopVisibility
                            },
                            generalVisibility: function(e) {
                                return e.generalVisibility
                            },
                            headerBgColor: function(e) {
                                return e.theme.header.background
                            },
                            headerTxtColor: function(e) {
                                return e.theme.header.text
                            },
                            id: function(e) {
                                return e.id
                            },
                            isRight: function(e, t, i) {
                                var n = ["br", "cr", "tr"];
                                return i.browserData.mobileBrowserName ? -1 !== n.indexOf(e.mobileVisibility.position) : -1 !== n.indexOf(e.desktopVisibility.position)
                            },
                            isBottom: function(e, t, i) {
                                var n = ["br", "bl"];
                                return i.browserData.mobileBrowserName ? -1 !== n.indexOf(e.mobileVisibility.position) : -1 !== n.indexOf(e.desktopVisibility.position)
                            },
                            isCenter: function(e, t, i) {
                                var n = ["cr", "cl"];
                                return i.browserData.mobileBrowserName ? -1 !== n.indexOf(e.mobileVisibility.position) : -1 !== n.indexOf(e.desktopVisibility.position)
                            },
                            isPopup: function(e) {
                                return e.isPopup
                            },
                            isRoundWidget: function(e, t, i) {
                                return i.browserData.mobileBrowserName ? "round" === e.minMobile.type : "round" === e.minDesktop.type
                            },
                            maxDesktop: function(e) {
                                return e.maxDesktop
                            },
                            minDesktop: function(e) {
                                return e.minDesktop
                            },
                            mobileVisibility: function(e) {
                                return e.mobileVisibility
                            },
                            states: function(e) {
                                return e.states
                            },
                            version: function(e) {
                                return e.version
                            },
                            yOffset: function(e) {
                                return e.yOffset
                            },
                            xOffset: function(e) {
                                return e.xOffset
                            },
                            yOffsetMobile: function(e) {
                                return e.yOffsetMobile
                            },
                            xOffsetMobile: function(e) {
                                return e.xOffsetMobile
                            },
                            isRTL: function(e) {
                                return e.isRTL
                            },
                            bubble: function(e) {
                                return e.bubble
                            },
                            showMessagePreview: function(e, t, i) {
                                return i.browserData.mobileBrowserName ? e.notification.mobile.preview : e.notification.desktop.preview
                            },
                            features: function(e) {
                                return e.features
                            },
                            showVisitorTyping: function(e) {
                                return e.notification.all.visitorTyping
                            },
                            webrtcOptions: function(e) {
                                return e.webrtcOptions
                            },
                            language: function(e) {
                                return e.language
                            },
                            visitorBgColor: function(e) {
                                return e.theme.visitor.messageBackground
                            },
                            visitorTxtColor: function(e) {
                                return e.theme.visitor.messageText
                            },
                            agentBgColor: function(e) {
                                return e.theme.agent.messageBackground
                            },
                            agentTxtColor: function(e) {
                                return e.theme.agent.messageText
                            },
                            showEstimatedWaitTime: function(e) {
                                return e.notification && e.notification.all && e.notification.all.estimatedWaitTime
                            },
                            showAgentTyping: function(e) {
                                return e.notification && e.notification.all && e.notification.all.agentTyping
                            },
                            isPrechatEnabled: function(e) {
                                return e.states.prechat && e.states.prechat.handlers && e.states.prechat.handlers.form
                            },
                            isEmbedded: function(e) {
                                return e.isEmbedded
                            },
                            isSoundEnabled: function(e) {
                                return e.notification && e.notification.all && e.notification.all.sound && e.localSoundEnabled
                            },
                            localSoundEnabled: function(e) {
                                return e.localSoundEnabled
                            },
                            show: function(e) {
                                return e.show
                            },
                            onClick: function(e) {
                                return e.onClick
                            },
                            isVisible: function(e, t, i) {
                                return null !== t.show ? e.show : !("offline" === i.session.pageStatus && !t.generalVisibility.showWhenOffline) && (i.browserData.mobileBrowserName ? e.mobileVisibility.show : e.desktopVisibility.show)
                            },
                            showTitleNotification: function(e) {
                                return !(!e.notification || !e.notification.all) && e.notification.all.tab
                            },
                            hasLiveChat: function(e) {
                                return e.components.liveChat
                            },
                            minMobile: function(e) {
                                return e.minMobile
                            },
                            zoomRatio: function(e) {
                                return e.zoomRatio
                            },
                            components: function(e) {
                                return e.components
                            },
                            emailTranscriptEnabled: function(e) {
                                return e.features.transcript
                            },
                            emojiEnabled: function(e) {
                                return e.features && e.features.emoji
                            },
                            toolbarOptions: function(e) {
                                return e.toolbarOptions
                            }
                        },
                        actions: {
                            toggleVisibility: function(e) {
                                (0, e.commit)("setVisibility", !e.state.show)
                            },
                            updateBranding: function(e, t) {
                                (0, e.commit)("setBranding", t)
                            },
                            updateId: function(e, t) {
                                (0, e.commit)("setId", t)
                            },
                            toggleLocalSound: function(t, i) {
                                var n = t.state;
                                void 0 !== i ? n.localSoundEnabled = i : (n.localSoundEnabled = !n.localSoundEnabled, e.Tawk_Window.app.$socket.publish("toggleSound", n.localSoundEnabled))
                            },
                            resetState: function(e) {
                                (0, e.commit)("unsetData")
                            },
                            toggleAgentAvatarToolbar: function(e, t) {
                                (0, e.commit)("setAgentAvatarToolbar", t)
                            }
                        },
                        mutations: {
                            setBranding: function(e, t) {
                                e.branding = t
                            },
                            setId: function(e, t) {
                                e.id = t
                            },
                            setData: function(e, t) {
                                e.version = t.version, e.onClick = t.behavior.click, e.components = t.components, e.theme = t.theme, e.states = t.states, e.bubble = t.bubble, e.maxDesktop = {
                                    width: parseInt(t.maximized.desktop.width, 10) || 350,
                                    height: parseInt(t.maximized.desktop.height, 10) || 520
                                }, e.minDesktop = t.minimized.desktop, "rectangle" === t.minimized.desktop.type ? (e.minDesktop.width = parseInt(t.minimized.desktop.width, 10) || 320, e.minDesktop.height = parseInt(t.minimized.desktop.height, 10) || 40, e.yOffset = 0, e.xOffset = 10) : (e.minDesktop.width = 60, e.minDesktop.height = 60, e.yOffset = 20, e.xOffset = 20), e.minMobile = t.minimized.mobile, "rectangle" === t.minimized.mobile.type ? (e.minMobile.width = 110, e.minMobile.height = 48, e.yOffsetMobile = 15, e.xOffsetMobile = 15) : (e.minMobile.width = 60, e.minMobile.height = 60, e.yOffsetMobile = 20, e.xOffsetMobile = 20), e.generalVisibility = t.visibility.all, e.desktopVisibility = t.visibility.desktop, e.mobileVisibility = t.visibility.mobile, e.consentData = t.consent, e.language = t.language, e.isRTL = -1 !== ["ar", "he", "fa"].indexOf(t.language), e.notification = t.notification, e.features = t.features, t.scheduler && t.scheduler.config ? this.dispatch("schedule/addSlots", t.scheduler) : this.dispatch("schedule/addSlots")
                            },
                            setVisibility: function(t, i) {
                                t.show = i, t.show || e.Tawk_Window.jsApi.triggerApiHandlers("onChatHidden")
                            },
                            setWebrtcOptions: function(e, t) {
                                e.webrtcOptions = t
                            },
                            setIsPopup: function(e, t) {
                                e.isPopup = t
                            },
                            setIsEmbedded: function(e, t) {
                                e.isEmbedded = t
                            },
                            setZoomRatio: function(e, t) {
                                e.zoomRatio = t
                            },
                            unsetData: function(e) {
                                e.localSoundEnabled = !0
                            },
                            setAgentAvatarToolbar: function(e, t) {
                                e.toolbarOptions.showAgentAvatars = t
                            }
                        }
                    }
                }.call(this, i("c8ba"))
        },
        "3b35": function(e, t, i) {
            "use strict";
            i.r(t),
                function(e) {
                    var n = i("a34a"),
                        a = i.n(n),
                        o = i("7f46");

                    function s(e, t, i, n, a, o, s) {
                        try {
                            var r = e[o](s),
                                c = r.value
                        } catch (e) {
                            return void i(e)
                        }
                        r.done ? t(c) : Promise.resolve(c).then(n, a)
                    }

                    function r(e) {
                        return function() {
                            var t = this,
                                i = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, i);

                                function r(e) {
                                    s(o, n, a, r, c, "next", e)
                                }

                                function c(e) {
                                    s(o, n, a, r, c, "throw", e)
                                }
                                r(void 0)
                            }))
                        }
                    }
                    t.default = {
                        namespaced: !0,
                        state: {
                            chatBubbleClosed: !1,
                            chatWindowState: "min",
                            criticalVersion: 0,
                            departments: [],
                            isPopupFocused: !1,
                            needConsent: !1,
                            pageStatus: "online",
                            pageStatusVersion: 0,
                            prechatFormSubmitted: !1,
                            previousSessionKey: null,
                            restarted: !1,
                            serverVersion: 0,
                            sessionKey: "",
                            transferKey: "",
                            transferedSession: !1,
                            visitorSocketServer: "",
                            waitTime: 6e4,
                            lastMessageTimestamp: 0,
                            token: null,
                            tokenExpiry: 0,
                            isInactive: null,
                            originalPageTitle: null,
                            pageReferrer: null,
                            waitTimeTimeout: null,
                            waitTimeFirstTime: !1,
                            waitTimeInitialized: !1,
                            isReconnecting: !1
                        },
                        getters: {
                            chatBubbleClosed: function(e) {
                                return e.chatBubbleClosed
                            },
                            chatWindowState: function(e) {
                                return e.chatWindowState
                            },
                            isPopupFocused: function(e) {
                                return e.isPopupFocused
                            },
                            previousSessionKey: function(e) {
                                return e.previousSessionKey
                            },
                            pageStatus: function(e) {
                                return e.pageStatus
                            },
                            pageStatusVersion: function(e) {
                                return e.pageStatusVersion
                            },
                            sessionKey: function(e) {
                                return e.sessionKey
                            },
                            transferKey: function(e) {
                                return e.transferKey
                            },
                            transferedSession: function(e) {
                                return e.transferedSession
                            },
                            visitorSocketServer: function(e) {
                                return e.visitorSocketServer
                            },
                            prechatFormSubmitted: function(e) {
                                return e.prechatFormSubmitted
                            },
                            lastMessageTimestamp: function(e) {
                                return e.lastMessageTimestamp
                            },
                            token: function(e) {
                                return e.token
                            },
                            departments: function(e) {
                                return e.departments
                            },
                            waitTime: function(e) {
                                return e.waitTime
                            },
                            serverVersion: function(e) {
                                return e.serverVersion
                            },
                            needConsent: function(e) {
                                return e.needConsent
                            },
                            isInactive: function(e) {
                                return e.isInactive
                            },
                            originalPageTitle: function(e) {
                                return e.originalPageTitle
                            },
                            isReconnecting: function(e) {
                                return e.isReconnecting
                            }
                        },
                        actions: {
                            closeChatBubble: function(t) {
                                (0, t.commit)("setChatBubbleClosed", !0), e.Tawk_Window.app.$socket.publish("notifyChatBubbleClosed")
                            },
                            sendNavigationEvent: function(t) {
                                var i = t.state,
                                    n = t.rootGetters;
                                e.Tawk_Window.webStorage.getSessionStorage("previousNav") !== window.location.href && setTimeout((function() {
                                    var t = {
                                        u: window.location.href,
                                        t: document.title
                                    };
                                    null !== n["session/originalPageTitle"] && (t.t = n["session/originalPageTitle"]), document.referrer && i.pageReferrer !== document.referrer && (i.pageReferrer = document.referrer, t.r = document.referrer), e.Tawk_Window.app.$socket.publish("nav", t), e.Tawk_Window.webStorage.setSessionStorage("previousNav", t.u)
                                }), 500)
                            },
                            setPageStatus: function(t, i) {
                                var n, a = t.state,
                                    s = t.commit;
                                i && ((n = i.ast) && o.a.isString(n) && (!i.dptst || Array.isArray(i.dptst)) && i.asver > a.pageStatusVersion && (e.Tawk_Window.scheduler.originalPageStatus = i.ast, a.pageStatusVersion = i.asver, s("setDepartment", i.dptst), a.pageStatus = i.ast, e.Tawk_Window.scheduler.calculate(), e.Tawk_Window.jsApi.triggerApiHandlers("onStatusChange", a.pageStatus)))
                            },
                            toggleWidget: function(e) {
                                var t = e.dispatch,
                                    i = e.state;
                                e.rootGetters["widget/isPopup"] ? window.close() : "min" === i.chatWindowState ? t("updateChatWindowState", "max") : t("updateChatWindowState", "min")
                            },
                            updateChatWindowState: function(t, i) {
                                var n = t.commit,
                                    a = t.state,
                                    o = t.rootGetters;
                                a.chatWindowState !== i && (n("setChatWindowState", i), "max" === i && "pop" === o["widget/onClick"] || ("max" === i ? e.Tawk_Window.jsApi.triggerApiHandlers("onChatMaximized") : "min" === i && e.Tawk_Window.jsApi.triggerApiHandlers("onChatMinimized"), e.Tawk_Window.app.$socket.publish("notifyWindowState", i)))
                            },
                            updateConnectionData: function(e, t) {
                                var i = e.state,
                                    n = e.commit,
                                    a = e.dispatch;
                                i.sessionKey && i.sessionKey !== t.sk && a("router/routerPush", "/", {
                                    root: !0
                                }), n("setConnectionData", t)
                            },
                            updateConsentFlag: function(e, t) {
                                (0, e.commit)("setConsentFlag", t)
                            },
                            updateCriticalVersion: function(e, t) {
                                (0, e.commit)("setCriticalVersion", t)
                            },
                            updatePrechatSubmitted: function(e, t) {
                                (0, e.commit)("setPrechatSubmitted", t)
                            },
                            updatePreviousSessionKey: function(e, t) {
                                (0, e.commit)("setPreviousSessionKey", t)
                            },
                            updateIsPopupFocused: function(e, t) {
                                (0, e.commit)("setIsPopupFocused", t)
                            },
                            updateToken: function(t, i) {
                                var n = t.state,
                                    a = new Date;
                                a.setSeconds(i.expiry), i.token ? (n.token = i.token, e.Tawk_Window.webStorage.setLocalStorage("twk_token", i.token)) : n.token = e.Tawk_Window.webStorage.getLocalStorage("twk_token"), n.tokenExpiry = a.getTime()
                            },
                            retrieveNewToken: function(t) {
                                return r(a.a.mark((function i() {
                                    var n;
                                    return a.a.wrap((function(i) {
                                        for (;;) switch (i.prev = i.next) {
                                            case 0:
                                                return n = t.dispatch, i.abrupt("return", new Promise((function(t, i) {
                                                    e.Tawk_Window.register.init((function(e) {
                                                        n("updateToken", {
                                                            token: e.tkn,
                                                            expiry: e.tknExp
                                                        }), t()
                                                    }), i)
                                                })));
                                            case 2:
                                            case "end":
                                                return i.stop()
                                        }
                                    }), i)
                                })))()
                            },
                            updateVisitorChatSeen: function(t, i) {
                                (0, t.commit)("setLastMessageTimestamp", i), e.Tawk_Window.app.$socket.publish("visitorChatSeen", {
                                    timestamp: i
                                }, (function() {}))
                            },
                            resetState: function(e) {
                                var t = e.commit,
                                    i = e.state;
                                t("unsetData"), clearTimeout(i.waitTimeTimeout), t("setWaitTimeFirstTime", !1), t("setWaitTimeInitialized", !1)
                            },
                            updateWaitTime: function(e, t) {
                                (0, e.commit)("setWaitTime", t)
                            },
                            addWaitTime: function(e) {
                                var t = e.commit,
                                    i = e.state,
                                    n = e.dispatch;
                                i.waitTimeInitialized || (t("setWaitTimeInitialized", !0), n("waitTimeUpdater"))
                            },
                            waitTimeUpdater: function(e) {
                                var t = e.commit,
                                    i = e.state,
                                    n = e.dispatch;
                                clearTimeout(i.waitTimeTimeout), i.waitTime <= 6e4 || (i.waitTimeFirstTime ? (t("setWaitTime", i.waitTime - 6e4), i.waitTimeTimeout = setTimeout((function() {
                                    n("waitTimeUpdater")
                                }), 6e4)) : (t("setWaitTimeFirstTime", !0), i.waitTimeTimeout = setTimeout((function() {
                                    n("waitTimeUpdater")
                                }), 6e4)))
                            },
                            updatePageStatus: function(e, t) {
                                var i = e.state;
                                t && (i.pageStatus = t)
                            },
                            checkTokenValidity: function(e) {
                                return r(a.a.mark((function t() {
                                    var i, n;
                                    return a.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (i = e.dispatch, n = e.state, !((new Date).getTime() >= n.tokenExpiry)) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.next = 5, i("retrieveNewToken");
                                            case 5:
                                                return t.abrupt("return");
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            reconnectSession: function(e, t) {
                                e.state.isReconnecting = !!t
                            }
                        },
                        mutations: {
                            setChatBubbleClosed: function(e, t) {
                                e.chatBubbleClosed = t
                            },
                            setConnectionData: function(e, t) {
                                e.visitorSocketServer = t.vss, e.sessionKey = t.sk, e.transferKey = t.tk, e.transferedSession = !!t.transferedSession, e.serverVersion = t.jsv || 0
                            },
                            setConsentFlag: function(e, t) {
                                e.needConsent = t
                            },
                            setCriticalVersion: function(e, t) {
                                e.criticalVersion = t
                            },
                            setPreviousSessionKey: function(e, t) {
                                e.previousSessionKey = t
                            },
                            setChatWindowState: function(e, t) {
                                e.chatWindowState = t
                            },
                            setIsPopupFocused: function(e, t) {
                                e.isPopupFocused = t
                            },
                            setPrechatSubmitted: function(e, t) {
                                e.prechatFormSubmitted = t
                            },
                            setLastMessageTimestamp: function(e, t) {
                                e.lastMessageTimestamp = t
                            },
                            setWaitTime: function(e, t) {
                                e.waitTime = t
                            },
                            setIsInactive: function(t, i) {
                                t.isInactive = i, e.Tawk_Window.webStorage.setSessionStorage("previousNav", null)
                            },
                            setOriginalPageTitle: function(e, t) {
                                e.originalPageTitle = t
                            },
                            setWaitTimeFirstTime: function(e, t) {
                                e.waitTimeFirstTime = t
                            },
                            setWaitTimeInitialized: function(e, t) {
                                e.waitTimeInitialized = t
                            },
                            setDepartment: function(e, t) {
                                e.departments = t
                            },
                            unsetData: function(e) {
                                for (var t = {
                                        chatBubbleClosed: !1,
                                        chatWindowState: "min",
                                        criticalVersion: 0,
                                        departments: [],
                                        isPopupFocused: !1,
                                        needConsent: !1,
                                        pageStatus: "online",
                                        pageStatusVersion: 0,
                                        prechatFormSubmitted: !1,
                                        previousSessionKey: null,
                                        restarted: !1,
                                        serverVersion: 0,
                                        sessionKey: "",
                                        transferKey: "",
                                        transferedSession: !1,
                                        visitorSocketServer: "",
                                        waitTime: 6e4,
                                        lastMessageTimestamp: 0,
                                        token: null,
                                        tokenExpiry: 0,
                                        isInactive: null,
                                        originalPageTitle: null,
                                        pageReferrer: null,
                                        waitTimeTimeout: null,
                                        waitTimeFirstTime: !1,
                                        waitTimeInitialized: !1,
                                        isReconnecting: !1
                                    }, i = Object.keys(t), n = 0; n < i.length; n++) {
                                    var a = i[n];
                                    e[a] = t[a]
                                }
                            }
                        }
                    }
                }.call(this, i("c8ba"))
        },
        "3dfd": function(e, t, i) {
            "use strict";
            var n = i("e8cc").a,
                a = i("2877"),
                o = Object(a.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        style: e.isVisible ? "display: block !important" : "display: none !important",
                        attrs: {
                            id: e.elementId
                        }
                    }, [i("div", {
                        attrs: {
                            id: "min-widget"
                        }
                    }), i("div", {
                        attrs: {
                            id: "max-widget"
                        }
                    }), i("div", {
                        attrs: {
                            id: "message-preview"
                        }
                    }), i("div", {
                        attrs: {
                            id: "chat-bubble"
                        }
                    })])
                }), [], !1, null, null, null);
            t.a = o.exports
        },
        4360: function(e, t, i) {
            "use strict";
            var n = i("2b0e"),
                a = i("2f62");

            function o(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function s(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            i("cca6");
            var r = {},
                c = {
                    modules: {}
                };
            ! function() {
                var e = i("c3e1");
                e.keys().forEach((function(t) {
                    var i = e(t);
                    if (r[t] !== i) {
                        r[t] = i;
                        var n = t.replace(/^\.\//, "").replace(/\.\w+$/, "").split(/\//).map((function(e) {
                                var t, i, n = e.split("-");
                                n.length && ((t = n.splice(0, 1)).length && (i = (t = t[0].toLowerCase()).charAt(0).toLowerCase() + t.slice(1)));
                                for (var a = 0; a < n.length; a++) {
                                    var o = n[a].toLowerCase();
                                    i += o.charAt(0).toUpperCase() + o.slice(1)
                                }
                                return i
                            })),
                            a = {};
                        a[n.pop()] = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? o(Object(i), !0).forEach((function(t) {
                                    s(e, t, i[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                }))
                            }
                            return e
                        }({}, i.default), c.modules = Object.assign(a, c.modules)
                    }
                }))
            }();
            var u = c.modules;
            n.a.use(a.a), void 0 !== window.Prototype && "string" == typeof window.Prototype.Version && parseFloat(window.Prototype.Version.substr(0, 3), 10) <= 1.6 && Object.defineProperty(Array.prototype, "reduce", {
                value: function(e) {
                    if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                    if ("function" != typeof e) throw new TypeError("".concat(e, " is not a function"));
                    var t, i = Object(this),
                        n = i.length >>> 0,
                        a = 0;
                    if (arguments.length >= 2) t = arguments[1];
                    else {
                        for (; a < n && !(a in i);) a++;
                        if (a >= n) throw new TypeError("Reduce of empty array with no initial value");
                        t = i[a++]
                    }
                    for (; a < n;) a in i && (t = e(t, i[a], a, i)), a++;
                    return t
                }
            }), t.a = new a.a.Store({
                actions: {
                    reset: function(e) {
                        for (var t = e.dispatch, i = Object.keys(u), n = 0; n < i.length; n++) {
                            var a = i[n];
                            t("".concat(a, "/resetState"))
                        }
                    }
                },
                modules: u
            })
        },
        "43af": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return o
            }));
            var n = i("bdd0");

            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var o = function() {
                function e(t) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.store = t, this.languageScript
                }
                return function(e, t, i) {
                    t && a(e.prototype, t), i && a(e, i)
                }(e, [{
                    key: "getSettings",
                    value: function(e, t) {
                        var i = this;
                        n.a.get("".concat("https://va.tawk.to", "/v1/widget-settings"), {
                            propertyId: this.store.getters["property/id"],
                            widgetId: this.store.getters["widget/id"],
                            sv: this.version
                        }, null, (function(n, a) {
                            if (n) return t(n);
                            i.languageScript && i.languageScript.parentNode && i.languageScript.parentNode.removeChild(i.languageScript), i.languageScript = document.createElement("script"), document.body.appendChild(i.languageScript), i.languageScript.onload = function() {
                                i.processSettings(a.data), e(a.data.settingsVersion)
                            }, i.languageScript.async = !0, i.languageScript.charset = "UTF-8", i.languageScript.src = "".concat("https://embed.tawk.to/_s/v4/app/61702b286a6", "/languages/").concat(a.data.widget.language, ".js")
                        }))
                    }
                }, {
                    key: "processSettings",
                    value: function(e) {
                        e && (this.version = e.settingsVersion, this.store.commit("widget/setData", e.widget), this.store.commit("widget/setWebrtcOptions", e.webrtc), this.store.dispatch("widget/updateBranding", e.branding))
                    }
                }]), e
            }()
        },
        "56d7": function(e, t, i) {
            "use strict";
            i.r(t),
                function(e) {
                    var t = i("2b0e"),
                        n = i("c7b8"),
                        a = i("65b3"),
                        o = i("868e"),
                        s = i("43af"),
                        r = i("77b4"),
                        c = i("9be8"),
                        u = i("b7cc"),
                        d = i("0ad2"),
                        l = i("27c6"),
                        h = i("028e"),
                        f = i("99e1"),
                        p = i("d3a4"),
                        m = i("3dfd"),
                        w = i("4360"),
                        g = i("f0b0"),
                        v = i("24ca"),
                        k = i("27a6"),
                        y = i("d046"),
                        b = i("a18c");

                    function T() {
                        if (w.a.dispatch("reset"), w.a.dispatch("property/updateId", window.$_Tawk_AccountKey), w.a.dispatch("widget/updateId", window.$_Tawk_WidgetId), w.a.dispatch("router/addRoutes", y.a), new r.a(w.a), e.Tawk_Window.jsApi.local_API.isPopup) {
                            var t = function(e) {
                                var t, i, n, a, o = {};
                                for (t = 0, i = (a = (e ? e.replace(/(.*)\?/, "") : window.location.search.substring(1)).split("&")).length; t < i; t += 1) o[(n = a[t].split("="))[0]] = n[1];
                                return o
                            }();
                            w.a.commit("session/setConnectionData", {
                                tk: t.$_tawk_tk,
                                sk: t.$_tawk_sk
                            }), w.a.commit("widget/setIsPopup", !0)
                        }
                        e.Tawk_Window.jsApi.local_API.embedded && (w.a.commit("widget/setIsEmbedded", !0), w.a.commit("browserData/setMobileBrowserName", null)), e.Tawk_Window.jsApi.triggerApiHandlers("onBeforeLoad"), e.Tawk_Window.maximize = !1;
                        var i = [new Promise((function(t, i) {
                            e.Tawk_Window.register.init(t, i)
                        })), new Promise((function(t, i) {
                            e.Tawk_Window.widgetSettings.getSettings(t, i)
                        }))];
                        try {
                            Object(k.a)(i).then((function(t) {
                                "fulfilled" === t[0].status && "fulfilled" === t[1].status && (t[0].value.settingsVersion === t[1].value ? (S(t[0].value), _()) : (e.Tawk_Window.widgetSettings.version = t[0].value.settingsVersion, e.Tawk_Window.widgetSettings.getSettings((function() {
                                    S(t[0].value), _()
                                }), (function(e) {
                                    console.error(e)
                                }))))
                            }))
                        } catch (e) {
                            console.error(e)
                        }
                    }

                    function _() {
                        var i, n;
                        e.Tawk_Window.app ? e.Tawk_Window.eventBus.$emit("resetState") : (t.a.use(p.a), e.Tawk_Window.app = new t.a({
                            render: function(e) {
                                return e(m.a)
                            },
                            store: w.a
                        }).$mount(), window.$_Tawk.language && (i = {
                            type: Function,
                            default: window.$_Tawk.language.pluralFormFunction
                        }, n = {
                            type: Object,
                            default: function() {
                                return {
                                    just: e.Tawk_Window.app.$i18n("chat", "justNow"),
                                    past: window.$_Tawk.language.chat.past.message,
                                    today: window.$_Tawk.language.chat.today_time.message,
                                    second: window.$_Tawk.language.chat.seconds.message,
                                    minute: window.$_Tawk.language.chat.minutes.message,
                                    hour: window.$_Tawk.language.chat.hours.message,
                                    days: [e.Tawk_Window.app.$i18n("days", "0"), e.Tawk_Window.app.$i18n("days", "1"), e.Tawk_Window.app.$i18n("days", "2"), e.Tawk_Window.app.$i18n("days", "3"), e.Tawk_Window.app.$i18n("days", "4"), e.Tawk_Window.app.$i18n("days", "5"), e.Tawk_Window.app.$i18n("days", "6")],
                                    months: [e.Tawk_Window.app.$i18n("months", "0"), e.Tawk_Window.app.$i18n("months", "1"), e.Tawk_Window.app.$i18n("months", "2"), e.Tawk_Window.app.$i18n("months", "3"), e.Tawk_Window.app.$i18n("months", "4"), e.Tawk_Window.app.$i18n("months", "5"), e.Tawk_Window.app.$i18n("months", "6"), e.Tawk_Window.app.$i18n("months", "7"), e.Tawk_Window.app.$i18n("months", "8"), e.Tawk_Window.app.$i18n("months", "9"), e.Tawk_Window.app.$i18n("months", "10"), e.Tawk_Window.app.$i18n("months", "11")]
                                }
                            }
                        }), t.a.component("tawk-timeago", {
                            extends: g.TawkTimeago,
                            props: {
                                pluralize: i,
                                format: n
                            }
                        })), w.a.dispatch("chat/setPreviousMessages"), e.Tawk_Window && e.Tawk_Window.scheduler && e.Tawk_Window.scheduler.setup(), e.Tawk_Window.activityMonitor.initActivityReset(), w.a.getters["session/needConsent"] || e.Tawk_Window.app.$socket.connect(), e.Tawk_Window.jsApi.triggerApiHandlers("onLoad"), !w.a.getters["browserData/mobileBrowserName"] && e.Tawk_Window.maximize && w.a.commit("session/setChatWindowState", "max"), e.Tawk_Window.jsApi.setVisitorAttributes()
                    }

                    function S(t) {
                        var i = t.rcf && w.a.getters["widget/consentData"];
                        w.a.dispatch("chat/updateVersion", t.cver || 0), w.a.dispatch("session/updateConsentFlag", i), "max" === t.cw && (e.Tawk_Window.maximize = !0), w.a.dispatch("session/updateConnectionData", t), w.a.dispatch("session/updateCriticalVersion", t.cjsv || 0), i || (w.a.dispatch("visitor/updateUUID", t), w.a.dispatch("visitor/updateVisitorInformation", t), t.dpt && w.a.dispatch("chat/updateDepartment", t.dpt)), t.pcfs && w.a.dispatch("session/updatePrechatSubmitted", t.pcfs), w.a.dispatch("session/setPageStatus", t || {
                            ast: "offline"
                        }), w.a.commit("session/setChatBubbleClosed", !!t.bblc), w.a.commit("session/setLastMessageTimestamp", t.lmst), w.a.commit("session/setWaitTime", t.ewt ? 1e3 * t.ewt : 6e4), w.a.dispatch("schedule/updateTimezone", t.wstz), w.a.commit("chat/setHistoryMessages", t.c || []), w.a.commit("chat/setChatId", t.chid), w.a.dispatch("session/updateToken", {
                            token: t.tkn,
                            expiry: t.tknExp
                        })
                    }
                    t.a.config.productionTip = !1, e.Tawk_Window = {
                            maximize: !1
                        }, e.Tawk_Window.registerWithConsent = function() {
                            e.Tawk_Window.maximize = !0, e.Tawk_Window.webStorage.storeSessionInformation(!0), new Promise((function(t, i) {
                                e.Tawk_Window.register.init(t, i)
                            })).then((function(t) {
                                S(t), e.Tawk_Window.app.$socket.connect(), w.a.dispatch("router/clearHistory"), e.Tawk_Window.webStorage.storeSessionInformation(!0)
                            }))
                        }, e.Tawk_Window.retryRegister = function() {
                            new Promise((function(t, i) {
                                e.Tawk_Window.register.init(t, i)
                            })).then((function(t) {
                                S(t), e.Tawk_Window.app.$socket.connect()
                            }))
                        }, e.Tawk_Window.popoutWidget = function() {
                            var t = w.a.getters["property/id"],
                                i = w.a.getters["widget/id"],
                                n = w.a.getters["widget/branding"],
                                a = w.a.getters["session/sessionKey"],
                                o = w.a.getters["session/transferKey"],
                                s = w.a.getters["session/serverVersion"],
                                r = "".concat("https://tawk.to", "/chat/").concat(t, "/");
                            w.a.dispatch("session/updateChatWindowState", "min"), e.Tawk_Window.popoutWin && !e.Tawk_Window.popoutWin.closed && e.Tawk_Window.popoutWin.focus ? e.Tawk_Window.popoutWin.focus() : (n && n.whitelabeled && n.popoutBaseUrl && (r = "".concat(n.popoutBaseUrl, "/chat/")), e.Tawk_Window.popoutWin = window.open(r + i + "?$_tawk_sk=" + a + "&$_tawk_tk=" + o + "&v=" + s, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no"))
                        }, e.Tawk_Window.criticalRefresh = function(e) {
                            if (w.a.getters["widget/isPopup"]) return window.location.reload(!!e);
                            delete window.$_Tawk.downloaded, w.a.dispatch("router/clearHistory"), T()
                        },
                        function() {
                            if (void 0 === window.$_Tawk.downloaded) {
                                if (window.$_Tawk.downloaded = !0, void 0 !== window.Prototype && "string" == typeof window.Prototype.Version && parseFloat(window.Prototype.Version.substr(0, 3), 10) < 1.7 && void 0 !== Array.prototype.toJSON) {
                                    var i = JSON.stringify;
                                    JSON.stringify = function(e) {
                                        var t = Array.prototype.toJSON;
                                        delete Array.prototype.toJSON;
                                        var n = i(e);
                                        return Array.prototype.toJSON = t, n
                                    }
                                }
                                e.Tawk_Window.logger = new n.a, e.Tawk_Window.register = new c.a(w.a), e.Tawk_Window.webStorage = new o.a(w.a), e.Tawk_Window.widgetSettings = new s.a(w.a), e.Tawk_Window.jsApi = new u.a(w.a), e.Tawk_Window.audioPlayer = new d.a(w.a), e.Tawk_Window.scheduler = new l.a(w.a), e.Tawk_Window.chatManager = new h.a(w.a), e.Tawk_Window.activityMonitor = new f.a(w.a), e.$_Tawk.startTime = (new Date).getTime().toString(), e.$_Tawk.loaded = !1, e.$_Tawk.connected = !1, e.$_Tawk.ready = !1, e.Tawk_Window.eventBus = v.a, t.a.use(a.a, {
                                        store: w.a
                                    }), t.a.use(b.a),
                                    function() {
                                        for (var t, i = {}, n = document.getElementsByTagName("meta"), a = "", o = [], s = 0, r = n.length; s < r; s++) n[s].getAttribute("name") && "viewport" === n[s].getAttribute("name").toLowerCase() && (a = n[s].getAttribute("content") || "");
                                        for (var c = 0, u = (o = (a = a.replace(/ /g, "")).split(",")).length; c < u; c++) i[(t = o[c].split("="))[0]] = t[1];
                                        var d = !(!i.width && !i.height),
                                            l = i["minimum-scale"] && i["maximum-scale"] && i["minimum-scale"] === i["maximum-scale"],
                                            h = i["initial-scale"] && i["maximum-scale"] && i["initial-scale"] === i["maximum-scale"];
                                        e.Tawk_Window.metaContent = a && a.length ? a : null, e.Tawk_Window.hasNoScale = "no" === i["user-scalable"] || "0" === i["user-scalable"], e.Tawk_Window.isMobileOptimizedWebsite = !!(l && (d || e.Tawk_Window.hasNoScale) || h)
                                    }(), window.addEventListener("beforeunload", (function() {
                                        e.Tawk_Window && e.Tawk_Window.logger && (e.Tawk_Window.logger.unloading = !0)
                                    })), T()
                            }
                        }()
                }.call(this, i("c8ba"))
        },
        5868: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            }));
            var n = ["(?:(?:[a-z]+:)?//)?", "(?:\\S+(?::\\S*)?@)?", "(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))", "(?::\\d{2,5})?", '(?:[/?#][^\\s"]*)?'].join(""),
                a = {
                    regLineBreaks: /(\r\n|\n|\r)/gm,
                    regBr: /<br\/>/,
                    regMatchUrl: new RegExp("(?:^" + n + "$)", "i"),
                    regMatchIp: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\\/\\?#]+)+)\b/gi,
                    regEmailMatch: /^((mailto:){0,1}[a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]+)$/,
                    br: "<br/>",
                    getTargetElement: function(e) {
                        var t = e.target || e.srcElement;
                        return 3 === t.nodeType && (t = t.parentNode), t
                    },
                    formatFileSize: function(e) {
                        var t = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                        if (!(e = parseInt(e, 10))) return "0Bytes";
                        for (var i = 1; i < t.length; i++)
                            if (e < Math.pow(1024, i)) return Math.round(e / Math.pow(1024, i - 1) * 100) / 100 + t[i - 1];
                        return e
                    }
                }
        },
        "65b3": function(e, t, i) {
            "use strict";
            (function(e) {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                i("cc70"), t.a = new(function() {
                    function t() {
                        (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), this.chatWindowStates = {
                            min: !0,
                            max: !0
                        }, this.io = null, this.selfOrigin = null, this.disconnect = !1, this.ready = !1, this.banned = !1, this.forceDisconnected = !1, this.clearRegisterRetryTimeout = null, this.events = {}, this.stack = [], this.connectCount = 0
                    }
                    return function(e, t, i) {
                        t && n(e.prototype, t), i && n(e, i)
                    }(t, [{
                        key: "install",
                        value: function(e, t) {
                            var i = t.store;
                            e.prototype.$socket = this, this.store = i
                        }
                    }, {
                        key: "connect",
                        value: function() {
                            var t, i = this,
                                n = (new Date).getTime();
                            window.$_Tawk.connected = !1, this.disconnect = !1, this.forceDisconnected = !1, 5 !== this.connectCount ? (this.io && (this.io.removeAllListeners(), this.io.disconnect()), t = {
                                k: this.store.getters["session/sessionKey"],
                                cver: this.store.getters["chat/chatVersion"],
                                pop: this.store.getters["widget/isPopup"],
                                asver: this.store.getters["session/pageStatusVersion"],
                                tkn: this.store.getters["session/token"]
                            }, this.connectCount++, this.io = new window.$__TawkSocket("wss://".concat(this.store.getters["session/visitorSocketServer"], "/"), {
                                engineIo: window.$__TawkEngine,
                                path: "/s",
                                query: t
                            }), this.io.on("disconnect", (function() {
                                i.disconnectHandler()
                            })), this.io.on("error", (function(t) {
                                var n, a = "socket on error";
                                if (t instanceof Error) {
                                    if (n = {
                                            toString: t.toString(),
                                            stack: t.stack,
                                            lineNumber: t.lineNumber,
                                            fileName: t.fileName
                                        }, e.Tawk_Window.logger.unloading && -1 === n.toString.indexOf("post")) return;
                                    "TransportError" === t.type && (n.description = t.description), -1 !== n.toString.indexOf("post") && (a = "socket post error")
                                } else n = t;
                                e.Tawk_Window.logger.reportIncident(a, n), i.io.disconnect(), i.disconnectHandler()
                            })), this.io.on("connect", (function() {
                                i.disconnect = !1, i.store.dispatch("session/reconnectSession", !1)
                            })), this.io.on("ready", (function(t, a, o) {
                                if (!e.Tawk_Window) return i.disconnectSocket();
                                i.selfOrigin = t, window.$_Tawk.connected = !0, i.ready || (window.$_Tawk.loaded = !0, void 0 !== window.Tawk_LoadStart && e.Tawk_Window.logger.reportPerformance({
                                    socket: (new Date).getTime() - n,
                                    register: e.Tawk_Window.register.registerTime,
                                    widget: (new Date).getTime() - window.Tawk_LoadStart,
                                    script: (new Date).getTime() - e.$_Tawk.startTime,
                                    download: e.$_Tawk.startTime - window.Tawk_LoadStart
                                })), i.ready = !0, i.store.dispatch("chat/updateConversation", a), i.store.dispatch("session/setPageStatus", o), i.store.dispatch("socket/updateIsReady", !0), i.clearStack(), clearTimeout(i.clearRegisterRetryTimeout), i.clearRegisterRetryTimeout = setTimeout((function() {
                                    i.disconnect || e.Tawk_Window.register.resetRetryCount(), i.clearRegisterRetryTimeout = null
                                }), 5e3)
                            })), this.io.on("remoteDisconnect", (function(t) {
                                if ("BANNED" !== (t = t || {}).msg) i.io.disconnect(), i.disconnectHandler();
                                else {
                                    i.banned = !0;
                                    try {
                                        i.io.disconnect()
                                    } catch (e) {}
                                    e.Tawk_Window.eventBus.$emit("removeWidget")
                                }
                            })), this.addEventListeners()) : this.store.commit("widget/setVisibility", !1)
                        }
                    }, {
                        key: "disconnectSocket",
                        value: function() {
                            this.forceDisconnected = !0, this.io && (this.io.disconnect(), this.disconnectHandler())
                        }
                    }, {
                        key: "disconnectHandler",
                        value: function() {
                            window.$_Tawk.connected = !1, this.io.removeAllListeners(), e.Tawk_Window.scheduler.cleanUp(), this.banned || this.forceDisconnected || this.disconnect ? this.connectCount = 0 : (this.disconnect = !0, this.store.dispatch("session/reconnectSession", !0), e.Tawk_Window.retryRegister())
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            var t = this;
                            this.io.on("visitorChatWindowState", (function(e) {
                                t.selfOrigin !== e.origin && t.store.commit("session/setChatWindowState", e.cw)
                            })), this.io.on("visitorSound", (function(e) {
                                e.origin !== t.selfOrigin && t.store.dispatch("widget/toggleLocalSound", !!e.sdo)
                            })), this.io.on("pageStatus", (function(e) {
                                t.store.dispatch("session/setPageStatus", e)
                            })), this.io.on("visitorPopupFocus", (function(e) {
                                e = e || {}, t.store.dispatch("session/updateIsPopupFocused", !!e.hasFocus)
                            })), this.io.on("chatBubbleClosed", (function(e) {
                                e.origin !== t.selfOrigin && t.store.dispatch("session/closeChatBubble")
                            })), this.io.on("pageDisable", (function() {
                                t.disconnectSocket(), e.Tawk_Window.eventBus.$emit("removeWidget")
                            })), this.io.on("vCallStatus", (function(t) {
                                e.Tawk_Window.chatManager.callStatusUpdate(t)
                            })), this.io.on("widgetScheduleUpdate", (function(i) {
                                t.store.dispatch("schedule/addSlots", i.ws ? {
                                    config: {
                                        schedule: i.ws.sch
                                    }
                                } : null), t.store.dispatch("schedule/updateTimezone", i.wstz), e.Tawk_Window.scheduler.calculate()
                            })), (this.store.getters["widget/hasLiveChat"] || this.store.getters["chat/hasChatStarted"] && (!this.store.getters["chat/hasChatStarted"] || 0 !== this.store.getters["chat/agentsCount"])) && (this.io.on("visitorDataUpdate", (function(e) {
                                t.selfOrigin !== e.origin && (t.store.dispatch("visitor/updateVisitorInformation", e), e.dpt && t.store.dispatch("chat/updateDepartment", e.dpt), e.pcfs && t.store.dispatch("session/updatePrechatSubmitted", !0))
                            })), this.io.on("visitorMessage", (function(e) {
                                t.selfOrigin !== e.origin && t.store.dispatch("chat/incomingChatMessage", e)
                            })), this.io.on("visitorConversationPresenceUpdate", (function(e) {
                                t.store.dispatch("chat/incomingChatMessage", e)
                            })), this.io.on("visitorChatSeen", (function(t) {
                                e.Tawk_Window.chatManager.clearUnseenNotification(t)
                            })), this.io.on("visitorChatDismiss", (function(t) {
                                e.Tawk_Window.eventBus.$emit("dismissPreview", t)
                            })), this.io.on("visitorTagsUpdate", (function(t) {
                                e.Tawk_Window.jsApi.triggerApiHandlers("onTagsUpdated", t)
                            })), this.io.on("uploadProgress", (function(t) {
                                e.Tawk_Window.chatManager.updateFileProgress(t)
                            })), this.io.on("uploadFinished", (function(t) {
                                e.Tawk_Window.chatManager.updateFileProgress(t, !0)
                            })), this.io.on("uploadError", (function(t) {
                                e.Tawk_Window.chatManager.updateFileProgress(t, !1, !0)
                            })), this.io.on("agentIsTyping", (function(t) {
                                e.Tawk_Window.eventBus.$emit("agentIsTyping", t)
                            })), this.io.on("agentStopedTyping", (function(t) {
                                e.Tawk_Window.eventBus.$emit("agentStopedTyping", t)
                            })))
                        }
                    }, {
                        key: "isForcedDisconnect",
                        value: function() {
                            return this.forceDisconnected
                        }
                    }, {
                        key: "publish",
                        value: function(e, t, i) {
                            if (window.$_Tawk.connected)
                                if (void 0 !== i || "function" == typeof t) this.wrapCallback(e, t, i);
                                else try {
                                    this.send(e, t, i)
                                } catch (e) {} else this.addToStack(e, t, i)
                        }
                    }, {
                        key: "addToStack",
                        value: function(e, t, i) {
                            "sendChatMessage" === e && delete this.events.notifyMessagePreview, "notifyMessagePreview" === e ? this.events[e] = {
                                command: e,
                                data: t,
                                callback: i
                            } : this.stack.push({
                                command: e,
                                data: t,
                                callback: i
                            })
                        }
                    }, {
                        key: "clearStack",
                        value: function() {
                            var e = this;
                            for (var t in this.stack.forEach((function(t) {
                                    e.publish(t.command, t.data, t.callback)
                                })), this.events) this.publish(this.events[t].command, this.events[t].data, this.events[t].callback);
                            this.stack = [], this.events = {}
                        }
                    }, {
                        key: "wrapCallback",
                        value: function(e, t, i) {
                            var n, a;
                            "function" == typeof t && (i = t, t = null), n = setTimeout((function() {
                                throw i(!0), new Error("Socket server did not execute the callback for " + e + " with data : " + JSON.stringify(t))
                            }), 35e3), a = function() {
                                clearTimeout(n), a = function() {}, i.apply(null, arguments)
                            };
                            try {
                                null === t ? this.send(e, a) : this.send(e, t, a)
                            } catch (e) {}
                        }
                    }, {
                        key: "send",
                        value: function(e, t, i) {
                            this[e](t, i)
                        }
                    }, {
                        key: "nav",
                        value: function(e, t) {
                            this.io.send("nav", e, t)
                        }
                    }, {
                        key: "notifyMessagePreview",
                        value: function(e) {
                            this.io.send("messagePreview", e, (new Date).getTime())
                        }
                    }, {
                        key: "sendChatMessage",
                        value: function(e, t) {
                            this.io.send("chatMessage", e, t)
                        }
                    }, {
                        key: "getCallStatus",
                        value: function(e, t) {
                            this.io.send("service", "webrtc", "/v1/vcall/status/visitor", e, t)
                        }
                    }, {
                        key: "getWebRTCToken",
                        value: function(e, t) {
                            this.io.send("service", "webrtc", "/v1/vcall/init/visitor", e, t)
                        }
                    }, {
                        key: "declineCall",
                        value: function(e, t) {
                            this.io.send("service", "webrtc", "/v1/vcall/reject/visitor", e, t)
                        }
                    }, {
                        key: "notifyOfflineMessage",
                        value: function(e, t) {
                            this.io.send("service", "visitor-chat", "/v1/visitor/offline-form", e, t)
                        }
                    }, {
                        key: "visitorChatSeen",
                        value: function(e, t) {
                            this.io.send("service", "visitor-chat", "/v1/visitor/messages-seen", e, t)
                        }
                    }, {
                        key: "notifyPrechat",
                        value: function(e, t) {
                            this.io.send("savePrechatForm", e, t)
                        }
                    }, {
                        key: "notifyNameChange",
                        value: function(e, t) {
                            this.io.send("saveNameChangeForm", e, t)
                        }
                    }, {
                        key: "notifyEmailTranscript",
                        value: function(e, t) {
                            this.io.send("saveTranscriptEmailForm", e, t)
                        }
                    }, {
                        key: "notifyEndChatTranscript",
                        value: function(e, t) {
                            this.io.send("sendTranscript", e, t)
                        }
                    }, {
                        key: "endVisitorChat",
                        value: function(e) {
                            this.io.send("endChat", e)
                        }
                    }, {
                        key: "addEvent",
                        value: function(e, t) {
                            this.io.send("addEvent", e, t)
                        }
                    }, {
                        key: "setAttributes",
                        value: function(e, t) {
                            this.io.send("setAttributes", e, t)
                        }
                    }, {
                        key: "addTags",
                        value: function(e, t) {
                            this.io.send("addTags", e, t)
                        }
                    }, {
                        key: "removeTags",
                        value: function(e, t) {
                            this.io.send("removeTags", e, t)
                        }
                    }, {
                        key: "fileUploadMessage",
                        value: function(e, t) {
                            this.io.send("fileUploadMessage", e, t)
                        }
                    }, {
                        key: "popupOnFocus",
                        value: function(e) {
                            this.io.send("visitorPopupFocus", e)
                        }
                    }, {
                        key: "notifySocketStatusUpdate",
                        value: function(e) {
                            this.io.send("socketStatusUpdate", e)
                        }
                    }, {
                        key: "setRating",
                        value: function(e) {
                            this.io.send("visitorRating", e)
                        }
                    }, {
                        key: "visitorChatDismiss",
                        value: function(e, t) {
                            this.io.send("service", "visitor-chat", "/v1/visitor/dismiss-preview", e, t)
                        }
                    }, {
                        key: "notifyChatBubbleClosed",
                        value: function() {
                            this.io.send("chatBubbleClose")
                        }
                    }, {
                        key: "notifyWindowState",
                        value: function(e) {
                            this.io.send("chatWindowState", e)
                        }
                    }, {
                        key: "toggleSound",
                        value: function(e) {
                            this.io.send("visitorSound", e)
                        }
                    }, {
                        key: "notifyWidgetResized",
                        value: function() {
                            this.io.send("notifyWidgetResized")
                        }
                    }]), t
                }())
            }).call(this, i("c8ba"))
        },
        "77b4": function(e, t, i) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function o(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            i.d(t, "a", (function() {
                return s
            }));
            var s = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    n(this, e), o(this, "browserIdentifier", [{
                        string: navigator.userAgent,
                        subString: "Edge",
                        identity: "explorer",
                        versionSearch: "Edge"
                    }, {
                        string: navigator.userAgent,
                        subString: "Trident/7.0",
                        identity: "explorer",
                        versionSearch: "rv"
                    }, {
                        string: navigator.userAgent,
                        subString: "(Opera|OPR)",
                        identity: "opera",
                        versionSearch: "Version"
                    }, {
                        string: navigator.userAgent,
                        subString: "Chrome",
                        identity: "chrome",
                        versionSearch: "Chrome"
                    }, {
                        string: navigator.userAgent,
                        subString: "Mobile Safari",
                        identity: "android",
                        versionSearch: "Version"
                    }, {
                        string: navigator.userAgent,
                        subString: "Firefox",
                        identity: "firefox",
                        versionSearch: "Firefox"
                    }, {
                        string: navigator.userAgent,
                        subString: "MSIE",
                        identity: "explorer",
                        versionSearch: "MSIE"
                    }, {
                        string: navigator.userAgent,
                        subString: "IEMobile",
                        identity: "explorer",
                        versionSearch: "IEMobile"
                    }, {
                        string: navigator.userAgent,
                        subString: "Safari",
                        identity: "safari",
                        versionSearch: "Version"
                    }, {
                        string: navigator.userAgent,
                        subString: "Gecko",
                        identity: "mozilla",
                        versionSearch: "rv"
                    }]), o(this, "osIdentifier", [{
                        string: navigator.userAgent,
                        subString: "Windows Phone",
                        identity: "windows_phone"
                    }, {
                        string: navigator.platform,
                        subString: "Win",
                        identity: "windows"
                    }, {
                        string: navigator.platform,
                        subString: "Mac",
                        identity: "mac"
                    }, {
                        string: navigator.userAgent,
                        subString: "iPhone",
                        identity: "iphone"
                    }, {
                        string: navigator.userAgent,
                        subString: "Android",
                        identity: "android"
                    }, {
                        string: navigator.platform,
                        subString: "Linux",
                        identity: "linux"
                    }, {
                        string: navigator.userAgent,
                        subString: "iPad",
                        identity: "ipad"
                    }]), o(this, "searchEngines", {
                        google: "q",
                        yahoo: "p",
                        baidu: "wd",
                        yandex: "text",
                        bing: "q",
                        soso: "w",
                        ask: "q",
                        aol: "q",
                        sogou: "query",
                        mywebsearch: "searchfor",
                        youdao: "q",
                        lycos: "q",
                        infospace: "q",
                        blekko: "q",
                        info: "q",
                        dogpile: "q",
                        duckduckgo: "q",
                        webcrawler: "q"
                    }), o(this, "mobileBrowserIdentifier", {
                        nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
                        blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
                        chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/],
                        ie: [/(IEMobile)[ /](\d+)\.(\d+)/],
                        firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
                        operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
                        opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/, /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/, /(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/, /Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/],
                        safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
                        uc: [/(UCBrowser)[ /](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ /](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
                        "android2.3": [/(Android) 2\.3(?:[.-]([a-z0-9]+))?/],
                        android2: [/(Android) 2\.(\d+)(?:[.-]([a-z0-9]+))?/],
                        android: [/Android[- ][\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; WOWMobile (.+) Build/, /Android[- ][\d]+\.[\d]+-update1; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}-[A-Za-z]{0,2};(.+) Build/, /Android[- ][\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[- ][\d]+\.[\d]+; (.+) Build/]
                    }), o(this, "searchVersion", (function(e, t) {
                        var i = e.indexOf(t);
                        if (-1 !== i) return parseFloat(e.substring(i + t.length + 1))
                    })), o(this, "getMobileBrowser", (function() {
                        for (var e = !1, t = navigator.userAgent, i = Object.keys(this.mobileBrowserIdentifier), n = 0; !e && n < i.length;) {
                            for (var a = i[n], o = 0; o < this.mobileBrowserIdentifier[a].length; o++) {
                                var s = this.mobileBrowserIdentifier[a][o];
                                if (t.match(s)) {
                                    e = a;
                                    break
                                }
                            }
                            n++
                        }
                        return e
                    })), o(this, "getHostname", (function(e) {
                        var t = new RegExp("^(?:f|ht)tp(?:s)?://([^/]+)", "im"),
                            i = e.match(t);
                        return null === i || !Array.isArray(i) || i.length < 2 ? null : i[1] ? i[1].toString() : null
                    })), o(this, "getPlugins", (function() {
                        var e, t, i = [];
                        for (e = 0, t = navigator.plugins.length; e < t; e++) navigator.plugins[e].name && i.push(navigator.plugins[e].name);
                        return i
                    })), this.store = t, this.init()
                }
                return function(e, t, i) {
                    t && a(e.prototype, t), i && a(e, i)
                }(e, [{
                    key: "init",
                    value: function() {
                        var e, t = "other",
                            i = !1,
                            n = this.searchString(this.browserIdentifier) || {};
                        n.identity && (t = n.identity, e = n.versionSearch || n.identity, "explorer" === t && (i = !0));
                        var a = this.searchVersion(navigator.userAgent, e) || this.searchVersion(navigator.appVersion, e) || "other",
                            o = this.searchString(this.osIdentifier) || "other",
                            s = this.getPlugins(),
                            r = this.getMobileBrowser(),
                            c = this.getReferredSearchEngine(),
                            u = {
                                mp3: this.hasHtmlAudio("mp3"),
                                ogg: this.hasHtmlAudio("ogg"),
                                wav: this.hasHtmlAudio("wav")
                            };
                        u.supported = u.mp3 || u.ogg || u.wav;
                        var d = !i;
                        this.store.dispatch("browserData/updateInitialData", {
                            version: a,
                            os: o,
                            plugins: s,
                            mobileBrowserName: r,
                            html5audio: u,
                            isIE: i,
                            searchEngine: c,
                            isWebRTCAvailable: d
                        })
                    }
                }, {
                    key: "searchString",
                    value: function(e) {
                        var t, i;
                        for (t = 0; t < e.length; t++)
                            if (i = e[t].string, new RegExp(e[t].subString).test(i)) return e[t]
                    }
                }, {
                    key: "getReferredSearchEngine",
                    value: function() {
                        var e, t, i = "";
                        if (document.referrer && (t = this.getHostname(document.referrer)))
                            for (e in t = t.toLowerCase(), this.searchEngines)
                                if (t.indexOf(e) >= 0) {
                                    var n = this.getQuerystring(document.referrer, this.searchEngines[e]);
                                    "blekko" === e && "" === n && (n = this.getQuerystring(document.referrer.replace("/ws/", "/?q="), "q")), i = e;
                                    break
                                }
                        return i
                    }
                }, {
                    key: "getQuerystring",
                    value: function(e, t) {
                        t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                        var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                        return null === i || !Array.isArray(i) || i.length < 2 ? null : i[1] ? unescape(i[1].replace(/\+/g, " ")) : null
                    }
                }, {
                    key: "hasHtmlAudio",
                    value: function(e) {
                        var t = document.createElement("audio");
                        try {
                            if (!t.canPlayType || "no" === t.canPlayType("audio/" + e) || "" === t.canPlayType("audio/" + e)) return !1
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }
                }]), e
            }()
        },
        "7c03": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return u
            }));
            var n = 2147483647,
                a = /[^\x20-\x7E]/,
                o = /[\x2E\u3002\uFF0E\uFF61]/g,
                s = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                r = Math.floor,
                c = String.fromCharCode,
                u = {
                    error: function(e) {
                        throw new RangeError(s[e])
                    },
                    map: function(e, t) {
                        for (var i = e.length, n = []; i--;) n[i] = t(e[i]);
                        return n
                    },
                    mapDomain: function(e, t) {
                        var i = e.split("@"),
                            n = "";
                        i.length > 1 && (n = i[0] + "@", e = i[1]);
                        var a = (e = e.replace(o, ".")).split(".");
                        return n + this.map(a, t).join(".")
                    },
                    ucs2decode: function(e) {
                        for (var t, i, n = [], a = 0, o = e.length; a < o;)(t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < o ? 56320 == (64512 & (i = e.charCodeAt(a++))) ? n.push(((1023 & t) << 10) + (1023 & i) + 65536) : (n.push(t), a--) : n.push(t);
                        return n
                    },
                    digitToBasic: function(e, t) {
                        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                    },
                    adapt: function(e, t, i) {
                        var n = 0;
                        for (e = i ? r(e / 700) : e >> 1, e += r(e / t); e > 455; n += 36) e = r(e / 35);
                        return r(n + 36 * e / (e + 38))
                    },
                    encode: function(e) {
                        var t, i, a, o, s, u, d, l, h, f, p, m, w, g, v, k = [];
                        for (m = (e = this.ucs2decode(e)).length, t = 128, i = 0, s = 72, u = 0; u < m; ++u)(p = e[u]) < 128 && k.push(c(p));
                        for (a = o = k.length, o && k.push("-"); a < m;) {
                            for (d = n, u = 0; u < m; ++u)(p = e[u]) >= t && p < d && (d = p);
                            for (d - t > r((n - i) / (w = a + 1)) && this.error("overflow"), i += (d - t) * w, t = d, u = 0; u < m; ++u)
                                if ((p = e[u]) < t && ++i > n && this.error("overflow"), p == t) {
                                    for (l = i, h = 36; !(l < (f = h <= s ? 1 : h >= s + 26 ? 26 : h - s)); h += 36) v = l - f, g = 36 - f, k.push(c(this.digitToBasic(f + v % g, 0))), l = r(v / g);
                                    k.push(c(this.digitToBasic(l, 0))), s = this.adapt(i, w, a == o), i = 0, ++a
                                }++i, ++t
                        }
                        return k.join("")
                    },
                    toASCII: function(e) {
                        return this.mapDomain(e, (function(e) {
                            return a.test(e) ? "xn--" + this.encode(e) : e
                        }))
                    }
                }
        },
        "7f46": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return v
            }));
            var n = "&quot;",
                a = "&#39;",
                o = "&lt;",
                s = "&gt;",
                r = "&amp;",
                c = new RegExp("&", "g"),
                u = new RegExp('"', "g"),
                d = new RegExp("'", "g"),
                l = new RegExp("<", "g"),
                h = new RegExp(">", "g"),
                f = new RegExp(n, "g"),
                p = new RegExp(a, "g"),
                m = new RegExp(o, "g"),
                w = new RegExp(s, "g"),
                g = new RegExp(r, "g"),
                v = {
                    regTrim: /^\s+|\s+$/g,
                    rawEncode: function(e) {
                        return e ? e.replace(c, r).replace(u, n).replace(d, a).replace(l, o).replace(h, s) : e
                    },
                    rawDecode: function(e) {
                        return e ? e.replace(f, '"').replace(p, "'").replace(m, "<").replace(w, ">").replace(g, "&") : e
                    },
                    h: function(e) {
                        var t = 0;
                        if (0 === e.length) return t;
                        for (var i = 0; i < e.length; i++) {
                            t = (t << 5) - t + e.charCodeAt(i), t &= t
                        }
                        return t
                    },
                    isString: function(e) {
                        return void 0 !== e && "string" == typeof e
                    },
                    trim: function(e) {
                        return this.isString(e) ? String.prototype.trim ? e.trim().toString() : e.replace(this.regTrim, "") : null
                    },
                    toLinkable: function(e) {
                        for (var t, i, n, a = /\[([^)]+)\]/, o = /\(([^)]+)\)/, s = /\[[^\]\\(\\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b){1}[^\]\\(\\)]+\)/i, r = "_blank", c = e; null !== (t = s.exec(c));)
                            if (i = a.exec(t[0]), (n = o.exec(t[0]))[0].indexOf("(mailto:") || (r = "_top"), (c = c.replace(i[0] + n[0], '<a target="' + r + '" href="' + n[1] + '" class="link">' + i[1] + "</a>")) === e) return c;
                        return c
                    },
                    markdownToHtml: function(e) {
                        return e = this.rawEncode(e), e = (e = (e = this.toLinkable(e)).replace(/(?!<a[^>]*>[^<])_(.*?)_(?![^<]*<\/a>)/gim, "<i>$1</i>")).replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>").replace(/\*(.*?)\*/gim, "<b>$1</b>")
                    },
                    removeHTMLTags: function(e) {
                        return e.replace(/<br\/>|<br>/g, " ")
                    },
                    cleanupCssValue: function(e) {
                        return this.isString(e) ? e.replace(/(!important)|(;)/g, "") : e
                    }
                }
        },
        "868e": function(e, t, i) {
            "use strict";

            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            i.d(t, "a", (function() {
                return a
            }));
            var a = function() {
                function e(t) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.store = t, this.isCookieEnabled = this._checkCookieEnabled(), this.hasSessionStorage = this.isCookieEnabled && !!window.sessionStorage, this._checkLocalStorageUsage()
                }
                return function(e, t, i) {
                    t && n(e.prototype, t), i && n(e, i)
                }(e, [{
                    key: "_checkCookieEnabled",
                    value: function() {
                        var e = !!navigator.cookieEnabled;
                        return void 0 !== navigator.cookieEnabled || e || (document.cookie = "testcookie", e = -1 != document.cookie.indexOf("testcookie")), e
                    }
                }, {
                    key: "_checkLocalStorageUsage",
                    value: function() {
                        try {
                            localStorage.setItem("exist_test", "yes"), localStorage.removeItem("exist_test"), this.hasLocalStorage = !0
                        } catch (e) {
                            this.hasLocalStorage = !1
                        }
                    }
                }, {
                    key: "setHTTPCookie",
                    value: function(e, t, i, n) {
                        var a, o = "";
                        i || ((a = new Date).setTime(a.getTime() + 15552e6), o = "; expires=" + a.toGMTString()), n = n ? ";domain=" + n : "", document.cookie = e + "=" + t + o + "; path=/" + n + "; SameSite=Lax;"
                    }
                }, {
                    key: "getHTTPCookie",
                    value: function(e) {
                        var t, i, n, a = [],
                            o = e + "=",
                            s = document.cookie.split(";");
                        for (t = 0, i = s.length; t < i; t++) {
                            for (n = s[t];
                                " " === n.charAt(0);) n = n.substring(1, n.length);
                            0 === n.indexOf(o) && a.push(n.substring(o.length, n.length))
                        }
                        return a
                    }
                }, {
                    key: "setSessionStorage",
                    value: function(e, t) {
                        if (this.hasSessionStorage && sessionStorage.setItem) try {
                            sessionStorage.setItem(e, t)
                        } catch (e) {
                            return
                        }
                    }
                }, {
                    key: "getSessionStorage",
                    value: function(e) {
                        return this.hasSessionStorage && sessionStorage.getItem ? sessionStorage.getItem(e) : null
                    }
                }, {
                    key: "setLocalStorage",
                    value: function(e, t) {
                        window.localStorage.setItem(e, t)
                    }
                }, {
                    key: "getLocalStorage",
                    value: function(e) {
                        return window.localStorage.getItem(e)
                    }
                }, {
                    key: "storeUUID",
                    value: function() {
                        var e = this;
                        this.store.getters["session/transferedSession"] || this.store.state.visitor.uuids && this.store.state.visitor.uuids.length > 0 && this.store.state.visitor.uuids.forEach((function(t) {
                            var i = (t.isExact ? "e::" : "p::") + t.domain + "::" + t.uuid + "::" + e.store.state.visitor.uuidVer;
                            e.isCookieEnabled && e.setHTTPCookie("__tawkuuid", i, !1, t.domain)
                        })), this.storeSessionInformation()
                    }
                }, {
                    key: "getSessionInformation",
                    value: function() {
                        var e, t = this.store.getters["property/id"];
                        return this.sessionInformation && (e = this.sessionInformation), this.hasLocalStorage && (e = this.getLocalStorage("twk_" + t)), e || (e = this.getHTTPCookie("Tawk_" + t)[0]), this.parseSessionInformation(e)
                    }
                }, {
                    key: "storeSessionInformation",
                    value: function(e) {
                        var t = this.store.getters["session/visitorSocketServer"],
                            i = t || "",
                            n = this.store.getters["session/needConsent"],
                            a = this.store.getters["widget/consentData"];
                        (t || e) && ((e || !n && a) && (i += "::cf"), this.hasLocalStorage ? this.setLocalStorage("twk_" + this.store.getters["property/id"], i) : this.setHTTPCookie("Tawk_" + this.store.getters["property/id"], i, !1), this.sessionInformation = i)
                    }
                }, {
                    key: "parseSessionInformation",
                    value: function(e) {
                        var t = [];
                        return e ? ((t = e.split("::")).length <= 1 && (t = e.split("||")), t) : t
                    }
                }, {
                    key: "getStoredUUID",
                    value: function() {
                        var e;
                        return this.isCookieEnabled && (e = this.getHTTPCookie("__tawkuuid")), e && e.length > 0 ? e : []
                    }
                }]), e
            }()
        },
        "87dd": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return n
            }));
            var n = {
                data: function() {
                    return {
                        genericStyles: {
                            "outline:": "none !important;",
                            "visibility:": "visible !important;",
                            "resize:": "none !important;",
                            "box-shadow:": "none !important;",
                            "overflow:": "visible !important;",
                            "background:": "none !important;",
                            "opacity:": "1 !important;",
                            "filter:": "alpha(opacity=100) !important;",
                            "-ms-filter:": "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important;",
                            "-mz-opacity:": "1 !important;",
                            "-khtml-opacity:": "1 !important;",
                            "top:": "auto !important;",
                            "right:": "auto !important;",
                            "bottom:": "auto !important;",
                            "left:": "auto !important;",
                            "position:": "absolute !important;",
                            "border:": "0 !important;",
                            "min-height:": "auto !important;",
                            "min-width:": "auto !important;",
                            "max-height:": "none !important;",
                            "max-width:": "none !important;",
                            "padding:": "0 !important;",
                            "margin:": "0 !important;",
                            "-moz-transition-property:": "none !important;",
                            "-webkit-transition-property:": "none !important;",
                            "-o-transition-property:": "none !important;",
                            "transition-property:": "none !important;",
                            "transform:": "none !important;",
                            "-webkit-transform:": "none !important;",
                            "-ms-transform:": "none !important;",
                            "width:": "auto !important;",
                            "height:": "auto !important;",
                            "display:": "block !important;",
                            "z-index:": "auto !important;",
                            "background-color:": "transparent !important;",
                            "cursor:": "none !important;",
                            "float:": "none !important;",
                            "border-radius:": "unset !important;",
                            "pointer-events:": "auto !important;",
                            "clip:": "auto !important;"
                        }
                    }
                }
            }
        },
        "99e1": function(e, t, i) {
            "use strict";
            (function(e) {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                i.d(t, "a", (function() {
                    return a
                }));
                var a = function() {
                    function t(i) {
                        var n = this;
                        (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), this.store = i, this.focusReconnectCalled = !1, this.hasFocus = !1, this.active = !1, this.away = !1, this.inactivityTimeout = null, this.awayTimeout = null, this.interval = null, this.onActivityHandler = function() {
                            e.Tawk_Window && (n.away && window.$_Tawk.connected && e.Tawk_Window.app.$socket.publish("notifySocketStatusUpdate", "online"), n.active = !0, n.away = !1)
                        }, this.popupOnFocusHandler = function() {
                            e.Tawk_Window && (!window.$_Tawk.connected && e.Tawk_Window.app.$socket.isForcedDisconnect() ? (n.store.commit("session/setIsInactive", !1), e.Tawk_Window.criticalRefresh()) : (n.hasFocus || (n.active = !0, n.hasFocus = !0, window.$_Tawk.connected && e.Tawk_Window.app.$socket.publish("popupOnFocus", !0)), n.away && window.$_Tawk.connected && e.Tawk_Window.app.$socket.publish("notifySocketStatusUpdate", "online"), n.away = !1))
                        }, this.popupOnBlurHandler = function() {
                            e.Tawk_Window && (n.hasFocus = !1, window.$_Tawk.connected && e.Tawk_Window.app.$socket.publish("popupOnFocus", !1))
                        }, this.reconnectOnActivity = function() {
                            e.Tawk_Window && !n.focusReconnectCalled && (n.focusReconnectCalled = !0, n.store.commit("session/setIsInactive", !1), e.Tawk_Window.criticalRefresh())
                        }, this.initActivityReset = function() {
                            n.cleanUp(), n.resetTimeout(), n.setupListeners(), n.setupMaxWidgetListeners(), n.interval = setInterval((function() {
                                n.active && (n.resetTimeout(), n.active = !1)
                            }), 1e4)
                        }
                    }
                    return function(e, t, i) {
                        t && n(e.prototype, t), i && n(e, i)
                    }(t, [{
                        key: "resetTimeout",
                        value: function() {
                            var t = this;
                            clearTimeout(this.inactivityTimeout), clearTimeout(this.awayTimeout), e.Tawk_Window && !e.Tawk_Window.app.$socket.isForcedDisconnect() && (this.awayTimeout = setTimeout((function() {
                                !t.away && e.Tawk_Window && (t.away = !0, e.Tawk_Window && e.Tawk_Window.app.$socket && window.$_Tawk.connected && e.Tawk_Window.app.$socket.publish("notifySocketStatusUpdate", "away"))
                            }), 6e5), this.inactivityTimeout = setTimeout((function() {
                                t.inactivityTimeoutHandler()
                            }), 12e5))
                        }
                    }, {
                        key: "inactivityTimeoutHandler",
                        value: function() {
                            e.Tawk_Window && (this.store.dispatch("chat/clearUnseenMessages"), e.Tawk_Window.app.$socket.disconnectSocket(), this.store.commit("session/setChatWindowState", "min"), this.store.commit("session/setIsInactive", !0), this.setupMaxWidgetListenersReconnect(), this.store.getters["browserData/mobileBrowserName"] ? (document.addEventListener("touchmove", this.reconnectOnActivity, {
                                once: !0
                            }), document.addEventListener("touchend", this.reconnectOnActivity, {
                                once: !0
                            }), document.addEventListener("keydown", this.reconnectOnActivity, {
                                once: !0
                            })) : (document.addEventListener("mousemove", this.reconnectOnActivity, {
                                once: !0
                            }), document.addEventListener("click", this.reconnectOnActivity, {
                                once: !0
                            }), document.addEventListener("keydown", this.reconnectOnActivity, {
                                once: !0
                            }), document.onfocusin ? document.addEventListener("focusin", this.reconnectOnActivity, {
                                once: !0
                            }) : window.addEventListener("focus", this.reconnectOnActivity, {
                                once: !0
                            })))
                        }
                    }, {
                        key: "cleanUp",
                        value: function() {
                            clearInterval(this.interval), clearTimeout(this.inactivityTimeout), clearTimeout(this.awayTimeout), document.removeEventListener("mousemove", this.onActivityHandler), document.removeEventListener("click", this.onActivityHandler), document.removeEventListener("keydown", this.onActivityHandler), document.removeEventListener("click", this.reconnectOnActivity, {
                                once: !0
                            }), document.removeEventListener("keydown", this.reconnectOnActivity, {
                                once: !0
                            }), document.removeEventListener("focus", this.reconnectOnActivity, {
                                once: !0
                            }), document.removeEventListener("focusin", this.popupOnFocusHandler), document.removeEventListener("focusout", this.popupOnBlurHandler), window.removeEventListener("focus", this.popupOnFocusHandler), window.removeEventListener("blur", this.popupOnBlurHandler), e && e.Tawk_Window && e.Tawk_Window.maxWidget && e.Tawk_Window.maxWidget.$el && e.Tawk_Window.maxWidget.$el.contentDocument && (e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("mousemove", this.onActivityHandler), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("click", this.onActivityHandler), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("keydown", this.onActivityHandler), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("touchmove", this.onActivityHandler), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("touchend", this.onActivityHandler), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("mousemove", this.reconnectOnActivity, {
                                once: !0
                            }), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("click", this.reconnectOnActivity, {
                                once: !0
                            }), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("keydown", this.reconnectOnActivity, {
                                once: !0
                            }), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("touchmove", this.reconnectOnActivity, {
                                once: !0
                            }), e.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("touchend", this.reconnectOnActivity, {
                                once: !0
                            })), this.hasFocus = !1, this.active = !1, this.away = !1, this.inactivityTimeout = null, this.awayTimeout = null, this.interval = null, this.focusReconnectCalled = !1
                        }
                    }, {
                        key: "setupListeners",
                        value: function() {
                            this.store.getters["browserData/mobileBrowserName"] ? (document.addEventListener("touchmove", this.onActivityHandler), document.addEventListener("touchend", this.onActivityHandler), document.addEventListener("keydown", this.onActivityHandler)) : this.store.getters["widget/isPopup"] ? (document.onfocusin ? (document.addEventListener("focusin", this.popupOnFocusHandler), document.addEventListener("focusout", this.popupOnBlurHandler)) : (window.addEventListener("focus", this.popupOnFocusHandler), window.addEventListener("blur", this.popupOnBlurHandler)), document.addEventListener("click", this.popupOnFocusHandler), document.addEventListener("keydown", this.popupOnFocusHandler)) : (document.addEventListener("mousemove", this.onActivityHandler), document.addEventListener("click", this.onActivityHandler), document.addEventListener("keydown", this.onActivityHandler))
                        }
                    }, {
                        key: "setupMaxWidgetListeners",
                        value: function() {
                            e && e.Tawk_Window && e.Tawk_Window.maxWidget && e.Tawk_Window.maxWidget.$el && e.Tawk_Window.maxWidget.$el.contentDocument && (e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("mousemove", this.onActivityHandler), e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("click", this.onActivityHandler), e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("keydown", this.onActivityHandler), this.store.getters["browserData/mobileBrowserName"] && (e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("touchmove", this.onActivityHandler), e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("touchend", this.onActivityHandler)))
                        }
                    }, {
                        key: "setupMaxWidgetListenersReconnect",
                        value: function() {
                            e && e.Tawk_Window && e.Tawk_Window.maxWidget && e.Tawk_Window.maxWidget.$el && e.Tawk_Window.maxWidget.$el.contentDocument && (e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("mousemove", this.reconnectOnActivity, {
                                once: !0
                            }), e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("click", this.reconnectOnActivity, {
                                once: !0
                            }), e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("keydown", this.reconnectOnActivity, {
                                once: !0
                            }), this.store.getters["browserData/mobileBrowserName"] && (e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("touchmove", this.reconnectOnActivity, {
                                once: !0
                            }), e.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("touchend", this.reconnectOnActivity, {
                                once: !0
                            })))
                        }
                    }]), t
                }()
            }).call(this, i("c8ba"))
        },
        "9a05": function(e, t, i) {
            "use strict";
            i.r(t);
            t.default = {
                namespaced: !0,
                state: {
                    id: null,
                    pageName: ""
                },
                getters: {
                    id: function(e) {
                        return e.id
                    }
                },
                actions: {
                    updateId: function(e, t) {
                        (0, e.commit)("setId", t)
                    },
                    resetState: function(e) {
                        (0, e.commit)("unsetData")
                    }
                },
                mutations: {
                    setId: function(e, t) {
                        e.id = t
                    },
                    unsetData: function(e) {
                        for (var t = {
                                id: null,
                                pageName: ""
                            }, i = Object.keys(t), n = 0; n < i.length; n++) {
                            var a = i[n];
                            e[a] = t[a]
                        }
                    }
                }
            }
        },
        "9b4f": function(e, t, i) {
            "use strict";
            i.r(t),
                function(e) {
                    var n = i("7f46");
                    t.default = {
                        namespaced: !0,
                        state: {
                            agents: {},
                            agentsCount: 0,
                            activeProfiles: [],
                            chat: {
                                buffer: [],
                                department: "any",
                                endVersion: 1,
                                history: [],
                                id: null,
                                order: 0,
                                version: 0,
                                unreadMessage: 0,
                                synced: !1,
                                messages: {},
                                unseenMessages: [],
                                historyProcessed: !1,
                                endedChats: [],
                                lastMessage: {}
                            },
                            allProfiles: {},
                            rating: null,
                            incomingMessage: null,
                            calls: {},
                            incomingCall: null,
                            hasChatStarted: !1,
                            messageBlocks: [],
                            visitorHasMessaged: !1,
                            agentHasMessaged: !1,
                            hasChatEnded: !1,
                            uploadFiles: [],
                            lastScrollPositon: null,
                            outgoingMessage: null,
                            firstIncoming: !1
                        },
                        getters: {
                            activeProfiles: function(e) {
                                return e.activeProfiles
                            },
                            agents: function(e) {
                                return e.agents
                            },
                            agentsCount: function(e) {
                                return e.agentsCount
                            },
                            agentProfile: function(e) {
                                return function(t) {
                                    var i = e.agents[t];
                                    return i && i.profileId ? e.allProfiles[i.profileId] : null
                                }
                            },
                            allProfiles: function(e) {
                                return e.allProfiles
                            },
                            chatOrder: function(e) {
                                return e.chat.order
                            },
                            chatVersion: function(e) {
                                return e.chat.version
                            },
                            incomingMessage: function(e) {
                                return e.incomingMessage
                            },
                            profiles: function(e) {
                                return e.profiles
                            },
                            rating: function(e) {
                                return e.rating
                            },
                            chatMessages: function(e) {
                                return e.chat.messages
                            },
                            unreadMessageCount: function(e) {
                                return e.chat.unreadMessage
                            },
                            incomingCall: function(e) {
                                return e.incomingCall
                            },
                            callData: function(e) {
                                return function(t) {
                                    return e.calls[t]
                                }
                            },
                            hasChatStarted: function(e) {
                                return e.hasChatStarted
                            },
                            visitorHasMessaged: function(e) {
                                return e.visitorHasMessaged
                            },
                            agentHasMessaged: function(e) {
                                return e.agentHasMessaged
                            },
                            chatEndVersion: function(e) {
                                return e.chat.endVersion
                            },
                            hasChatEnded: function(e) {
                                return e.hasChatEnded
                            },
                            uploadFiles: function(e) {
                                return e.uploadFiles
                            },
                            lastScrollPositon: function(e) {
                                return e.lastScrollPositon
                            },
                            outgoingMessage: function(e) {
                                return e.outgoingMessage
                            },
                            historyProcessed: function(e) {
                                return e.chat.historyProcessed
                            },
                            isChatOngoing: function(e) {
                                return !e.hasChatEnded && e.visitorHasMessaged && e.agentsCount > 0
                            },
                            isVisitorEngaged: function(e) {
                                return !e.hasChatEnded && e.visitorHasMessaged
                            },
                            messageBlocks: function(e) {
                                return e.messageBlocks
                            },
                            endedChats: function(e) {
                                return e.chat.endedChats
                            },
                            lastMessage: function(e) {
                                return e.chat.lastMessage
                            },
                            firstIncoming: function(e) {
                                return e.firstIncoming
                            }
                        },
                        actions: {
                            updateConversation: function(t, i) {
                                var n = t.dispatch,
                                    a = t.state,
                                    o = t.getters,
                                    s = (i = i || {}).cver || 0,
                                    r = i.c || [];
                                if (a.chat.synced = !0, !(a.chat.version >= s)) {
                                    for (var c = 0, u = a.chat.buffer.length; c < u; c++) a.chat.buffer[c].cver > s && r.push(a.chat.buffer[c]);
                                    for (var d = 0, l = r.length; d < l; d++) {
                                        var h = r[d];
                                        h.md && h.md.ao || e.Tawk_Window.chatManager.parseChatMessage(h)
                                    }
                                    a.visitorHasMessaged && !a.agentHasMessaged && o["widget/showEstimatedWaitTime"] && n("session/addWaitTime", {}, {
                                        root: !0
                                    }), a.chat.version = s
                                }
                            },
                            updateAgentCount: function(e, t) {
                                e.state.agentsCount += t
                            },
                            updateVersion: function(e, t) {
                                (0, e.commit)("setVersion", t)
                            },
                            updateDepartment: function(e, t) {
                                (0, e.commit)("setDepartment", t)
                            },
                            incomingChatMessage: function(t, i) {
                                var n = t.commit,
                                    a = t.state,
                                    o = t.dispatch;
                                if ("offline" === t.rootGetters["session/pageStatus"]) {
                                    if ("a" !== i.ut) return;
                                    o("session/updatePageStatus", "online", {
                                        root: !0
                                    })
                                }
                                if (i.cver > a.chat.version) {
                                    if (i.md && i.md.ao) return void n("setVersion", i.cver);
                                    var s = e.Tawk_Window.chatManager.parseChatMessage(i, !0);
                                    s && (e.Tawk_Window.audioPlayer.playSound(), n("setIncomingMessage", s), n("setVersion", i.cver), o("updateChatMessage", s))
                                }
                            },
                            outgoingChatMessage: function(e, t) {
                                var i = e.commit,
                                    n = e.state,
                                    a = e.dispatch;
                                t && t.cver > n.chat.version && (i("setVersion", t.cver), a("updateChatMessage", t))
                            },
                            agentJoined: function(e, t) {
                                for (var i, n = e.state, a = e.commit, o = e.dispatch, s = n.allProfiles[t.profileData.profileId], r = 0; r < n.activeProfiles.length; r++)
                                    if (n.activeProfiles[r].profileId === t.profileData.profileId) {
                                        i = n.activeProfiles[r];
                                        break
                                    }
                                i ? (i.count++, i.profileImage !== t.profileData.profileImage && (i.profileImage = t.profileData.profileImage, s && (s.profileImage = t.profileData.profileImage))) : n.activeProfiles.push(t.profileData), s || (n.allProfiles[t.profileData.profileId] = t.profileData), a("setAgent", t), o("updateAgentCount", 1)
                            },
                            agentLeft: function(e, t) {
                                var i = e.state,
                                    n = e.commit,
                                    a = e.dispatch,
                                    o = e.getters.agentProfile(t.resourceId);
                                if (o && o.profileId) {
                                    for (var s = 1, r = 0; r < i.activeProfiles.length; r++)
                                        if (i.activeProfiles[r].profileId === o.profileId) {
                                            var c = i.activeProfiles[r];
                                            s = c.count, --s < 1 ? i.activeProfiles.splice(r, 1) : c.count = s;
                                            break
                                        }
                                    t.agentData.pid = o.profileId, n("setAgent", t), a("updateAgentCount", -1)
                                }
                            },
                            setPreviousMessages: function(t) {
                                var i, n, a, o, s, r = t.state,
                                    c = t.commit,
                                    u = t.rootGetters,
                                    d = t.dispatch,
                                    l = 0,
                                    h = r.chat.history,
                                    f = 0;
                                for (r.chat.endVersion = 0, i = 0, n = h.length; i < n; i++) "CHAT_ENDED" === h[i].m && (d("processEndedChat", h.slice(f, i + 1)), l = i + 1, r.chat.endVersion += 1, f = i);
                                for (o = r.chat.order > 0 ? r.chat.messages[r.chat.order] : null, i = l, n = h.length; i < n; i++)
                                    if (!(a = h[i]).md || a.md && !a.md.ao) {
                                        if (o && o.timeStamp > new Date(a.co).getTime()) continue;
                                        "v" !== a.ut || r.visitorHasMessaged || "c" !== a.t || (s = (new Date).getTime() - new Date(a.co).getTime());
                                        var p = e.Tawk_Window.chatManager.parseChatMessage(a);
                                        p && (c("incrementChatOrder"), r.chat.messages[r.chat.order] = p, ("c" === p.type || p.callData) && c("setLastMessage", p))
                                    }
                                r.visitorHasMessaged && !r.agentHasMessaged && u["widget/showEstimatedWaitTime"] && (u["session/waitTime"] < s ? c("session/setWaitTime", 6e4, {
                                    root: !0
                                }) : c("session/setWaitTime", u["session/waitTime"] - s, {
                                    root: !0
                                }), d("session/addWaitTime", {}, {
                                    root: !0
                                })), r.hasChatStarted = r.visitorHasMessaged || r.agentHasMessaged, r.hasChatEnded = !!r.chat.endVersion && !r.hasChatStarted, c("setHistoryProcessed", !0)
                            },
                            updateUnseenMessages: function(e, t) {
                                var i = e.state;
                                i.chat.unseenMessages.push(t), i.chat.unreadMessage += 1
                            },
                            clearUnseenMessages: function(e) {
                                var t = e.state;
                                t.chat.unseenMessages = [], t.chat.unreadMessage = 0
                            },
                            clearProfiles: function(e) {
                                var t = e.state;
                                t.activeProfiles = [], t.allProfiles = {}, t.agents = {}, t.agentsCount = 0
                            },
                            endChat: function(t, i) {
                                var n = t.state,
                                    a = t.commit,
                                    o = t.dispatch;
                                i = i || function() {}, e.Tawk_Window.app.$socket.publish("endVisitorChat", (function(t, s) {
                                    if (t) i(!0);
                                    else {
                                        for (var r = Object.keys(n.chat.messages), c = [], u = 0; u < r.length; u++) {
                                            var d = r[u];
                                            c.push(n.chat.messages[d].rawMessage)
                                        }
                                        c.push({
                                            m: "CHAT_ENDED",
                                            t: "n",
                                            co: new Date
                                        }), n.chat.endVersion = s.chatEndVersion, n.chat.messages = {}, n.hasChatStarted = !1, n.hasChatEnded = !0, n.chat.order = 0, o("processEndedChat", c), a("setChatId", s.nextChatId), o("clearProfiles"), o("session/toggleWidget", "", {
                                            root: !0
                                        }), o("clearMessageBlock"), e.Tawk_Window.jsApi.triggerApiHandlers("onChatEnded"), i()
                                    }
                                }))
                            },
                            resetState: function(e) {
                                (0, e.commit)("unsetData")
                            },
                            updateCallData: function(e, t) {
                                var i = e.state;
                                for (var n in i.calls[t.callId] = t, i.chat.messages)
                                    if (i.chat.messages[n].callId === t.callId) {
                                        i.chat.messages[n].callData = t;
                                        break
                                    }
                            },
                            updateRatingMessage: function(e, t) {
                                var i = e.commit,
                                    n = e.state;
                                t && (i("incrementChatOrder"), n.chat.messages[n.chat.order] = t)
                            },
                            addMessageBlock: function(e, t) {
                                (0, e.commit)("pushMessageBlock", t)
                            },
                            clearMessageBlock: function(e) {
                                (0, e.commit)("unsetMessageBlock")
                            },
                            updateChatMessage: function(t, i) {
                                var n = t.commit,
                                    a = t.state,
                                    o = t.rootGetters;
                                n("incrementChatOrder"), a.chat.messages[a.chat.order] = i, ("c" === i.type || i.callData) && n("setLastMessage", i), "c" !== i.type || "s" === i.senderType || a.hasChatStarted || "offline" === o["session/pageStatus"] || (n("setChatHasStarted", !0), e.Tawk_Window.jsApi.triggerApiHandlers("onChatStarted", {
                                    chatId: a.chat.id
                                }))
                            },
                            processEndedChat: function(e, t) {
                                for (var i, a, o = e.state, s = [], r = [], c = o.chat.id, u = 0; u < t.length; u++) {
                                    var d = t[u];
                                    "c" !== d.t ? "n" === d.t && "AGENT_JOIN_CONVERSATION" === d.m && d.md ? (s.push({
                                        displayName: n.a.rawDecode(d.n),
                                        profileId: d.md.pid,
                                        profileImage: d.md.pi,
                                        profileTitle: n.a.rawDecode(d.md.pst)
                                    }), -1 === r.indexOf(d.uid) && r.push(d.uid)) : "CHAT_ENDED" === d.m && (i = d.co) : a = d.m
                                }
                                o.chat.endedChats.unshift({
                                    id: c + o.chat.endedChats.length,
                                    agentAliases: s,
                                    agentIds: r,
                                    snippet: a,
                                    messages: t,
                                    endedOn: i,
                                    isTemp: !0
                                })
                            }
                        },
                        mutations: {
                            setVersion: function(e, t) {
                                e.chat.version = t
                            },
                            setDepartment: function(e, t) {
                                e.chat.department = t
                            },
                            setIncomingMessage: function(e, t) {
                                e.incomingMessage = t, e.firstIncoming = !1, 0 !== Object.keys(e.chat.lastMessage).length || e.firstIncoming || (e.firstIncoming = !0)
                            },
                            incrementChatOrder: function(e) {
                                e.chat.order += 1
                            },
                            setRating: function(e, t) {
                                e.rating = t
                            },
                            setAgent: function(e, t) {
                                e.agents[t.resourceId] = {
                                    profileId: t.agentData.pid,
                                    seq: t.agentData.seq
                                }
                            },
                            setChatId: function(e, t) {
                                e.chat.id = t
                            },
                            setIncomingCall: function(e, t) {
                                e.incomingCall = t
                            },
                            setChatHasStarted: function(e, t) {
                                e.hasChatStarted = t, e.hasChatEnded = !t
                            },
                            setVisitorHasMessaged: function(e, t) {
                                e.visitorHasMessaged = t
                            },
                            setAgentHasMessaged: function(e, t) {
                                e.agentHasMessaged = t
                            },
                            setHistoryMessages: function(e, t) {
                                e.chat.history = t
                            },
                            addFileUpload: function(e, t) {
                                e.uploadFiles.push(t)
                            },
                            removeFileUpload: function(e, t) {
                                var i = e.uploadFiles.findIndex((function(e) {
                                    return e.uuid === t
                                })); - 1 !== i && e.uploadFiles.splice(i, 1)
                            },
                            setLastScrollPosition: function(e, t) {
                                e.lastScrollPositon = t
                            },
                            setOutgoingMessage: function(e, t) {
                                e.outgoingMessage = t
                            },
                            setHistoryProcessed: function(e, t) {
                                e.chat.historyProcessed = t
                            },
                            unsetData: function(e) {
                                for (var t = {
                                        agents: {},
                                        agentsCount: 0,
                                        activeProfiles: [],
                                        chat: {
                                            buffer: [],
                                            department: "any",
                                            endVersion: 1,
                                            history: [],
                                            id: null,
                                            order: 0,
                                            version: 0,
                                            unreadMessage: 0,
                                            synced: !1,
                                            messages: {},
                                            unseenMessages: [],
                                            historyProcessed: !1,
                                            endedChats: [],
                                            lastMessage: {}
                                        },
                                        allProfiles: {},
                                        rating: null,
                                        incomingMessage: null,
                                        calls: {},
                                        incomingCall: null,
                                        hasChatStarted: !1,
                                        messageBlocks: [],
                                        visitorHasMessaged: !1,
                                        agentHasMessaged: !1,
                                        hasChatEnded: !1,
                                        uploadFiles: [],
                                        lastScrollPositon: null,
                                        outgoingMessage: null,
                                        firstIncoming: !1
                                    }, i = Object.keys(t), n = 0; n < i.length; n++) {
                                    var a = i[n];
                                    e[a] = t[a]
                                }
                            },
                            pushMessageBlock: function(e, t) {
                                e.messageBlocks.push(t)
                            },
                            unsetMessageBlock: function(e) {
                                e.messageBlocks = []
                            },
                            setLastMessage: function(e, t) {
                                e.chat.lastMessage = t
                            }
                        }
                    }
                }.call(this, i("c8ba"))
        },
        "9be8": function(e, t, i) {
            "use strict";
            (function(e) {
                i.d(t, "a", (function() {
                    return s
                }));
                var n = i("bdd0"),
                    a = i("7c03");

                function o(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                var s = function() {
                    function t(e) {
                        (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), this.registerTime = 0, this.maxRetrycount = 3, this.retryCount = 0, this.previousRegisterCall = null, this.requestCancelTimeout = null, this.connectionCookieInterval = null, this.registerDelayTimeout = null, this.registerData = null, this.registerStarted = !1, this.retryDelay = null, this.retryInitialDelay = 30, this.retryMultiplier = 1.5, this.minRandom = .5, this.maxRandom = 1.5, this.maxDelay = 120, this.retryRegisterTimeout = null, this.store = e
                    }
                    return function(e, t, i) {
                        t && o(e.prototype, t), i && o(e, i)
                    }(t, [{
                        key: "clearTimers",
                        value: function() {
                            this.abort(), clearTimeout(this.requestCancelTimeout), clearTimeout(this.registerDelayTimeout), clearTimeout(this.retryRegisterTimeout), clearInterval(this.connectionCookieInterval), e && e.Tawk_Window && e.Tawk_Window.webStorage && e.Tawk_Window.webStorage.setHTTPCookie("TawkConnectionTime", 0, !0), this.retryRegisterTimeout = null, this.registerDelayTimeout = null, this.requestCancelTimeout = null, this.connectionCookieInterval = null
                        }
                    }, {
                        key: "init",
                        value: function(e, t) {
                            this.registerStarted = !0, this.clearTimers(), this.prepareData(), this.startRegister(e, t)
                        }
                    }, {
                        key: "prepareData",
                        value: function() {
                            if (e.Tawk_Window) {
                                var t = "",
                                    i = this.store.getters,
                                    n = e.Tawk_Window.webStorage.getSessionInformation(),
                                    a = i["session/sessionKey"] || void 0;
                                n.length && (t = n[0]);
                                var o = (new Date).getTimezoneOffset();
                                (o < -900 || o > 900) && (o = 0), this.registerData ? (this.registerData.k = a, this.registerData.d = t) : this.registerData = {
                                    a: i["property/id"] || "",
                                    k: a,
                                    w: i["widget/id"],
                                    d: t,
                                    mb: i["browserData/mobileBrowserName"] ? 1 : 0,
                                    m: o,
                                    s: i["browserData/searchEngine"],
                                    q: "",
                                    r: document.referrer,
                                    p: document.location.href
                                }, this.registerData.cf = 0;
                                for (var s = 0; s < n.length; s++)
                                    if ("cf" === n[s]) {
                                        this.registerData.cf = 1;
                                        break
                                    }
                                e.Tawk_Window.maximize && (this.registerData.h = "max"), this.registerData.wv = i["widget/version"], i["widget/isPopup"] && i["session/transferKey"] && i["session/sessionKey"] && (this.registerData.tk = i["session/transferKey"]), this.store.dispatch("session/updatePreviousSessionKey", this.registerData.k), this.getUUID()
                            }
                        }
                    }, {
                        key: "getUUID",
                        value: function() {
                            var t, i, n, o = !1,
                                s = 1 / 0,
                                r = a.a.toASCII(window.location.hostname);
                            "www." === r.substring(0, 4) && (r = r.replace("www.", ""));
                            for (var c = 0, u = (t = e.Tawk_Window.webStorage.getStoredUUID()).length; c < u; c++) {
                                var d = void 0,
                                    l = void 0,
                                    h = void 0,
                                    f = void 0,
                                    p = void 0,
                                    m = e.Tawk_Window.webStorage.parseSessionInformation(t[c]);
                                if (4 === m.length)
                                    if (d = m[0], l = m[1], h = m[2], f = m[3], "e" === d) {
                                        if (r === l) {
                                            i = h, n = f;
                                            break
                                        }
                                    } else "p" === d && ((p = r.match(l)) && r.substr(p.index) === l && p.index < s && (s = p.index, i = h, n = f, o = !0))
                            }
                            this.registerData && (this.registerData.u = i, this.registerData.uv = n, o && (this.registerData.uw = !0))
                        }
                    }, {
                        key: "startRegister",
                        value: function(t, i) {
                            var n = e.Tawk_Window.webStorage.getHTTPCookie("TawkConnectionTime"),
                                a = parseInt(n.length ? n[0] : null, 10);
                            !a || (new Date).getTime() - new Date(a).getTime() > 1e3 ? (e.Tawk_Window.webStorage.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0), this.connectionCookieInterval = setInterval((function() {
                                e && e.Tawk_Window && e.Tawk_Window.webStorage && e.Tawk_Window.webStorage.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0)
                            }), 100), this.doRegister(t, i)) : this.delayRegister(t, i)
                        }
                    }, {
                        key: "delayRegister",
                        value: function(e, t) {
                            var i = this;
                            clearTimeout(this.registerDelayTimeout), this.registerDelayTimeout = setTimeout((function() {
                                i.init(e, t)
                            }), 1e3)
                        }
                    }, {
                        key: "doRegister",
                        value: function(t, i) {
                            var a = this;
                            this.setupRegisterTimeout();
                            var o, s = "".concat("https://va.tawk.to", "/register"),
                                r = e.Tawk_Window.webStorage.getLocalStorage("twk_token");
                            r && (o = {
                                "X-Tawk-Token": r
                            }), this.previousRegisterCall = n.a.post(s, this.registerData, o, (function(e, n) {
                                return e || !e && !n ? (a.clearTimers(), a.retryRegister(t, i)) : !n.error || "USER_ERROR" !== n.error && "SERVER_DOWN" !== n.error ? (a.clearTimers(), void t(n)) : i()
                            }))
                        }
                    }, {
                        key: "setupRegisterTimeout",
                        value: function() {
                            var e = this;
                            clearTimeout(this.requestCancelTimeout), this.requestCancelTimeout = setTimeout((function() {
                                e.abort(), e.retryRegister()
                            }), 9e4)
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            null !== this.previousRegisterCall && (this.previousRegisterCall = null)
                        }
                    }, {
                        key: "retryRegister",
                        value: function(e, t) {
                            var i, n = this;
                            if (null === this.retryRegisterTimeout) {
                                if (this.retryCount >= this.maxRetrycount) return this.clearTimers(), void this.store.commit("widget/setVisibility", !1);
                                this.retryCount++, i = this.getRetryWaitDelay(), this.retryRegisterTimeout = setTimeout((function() {
                                    n.init(e, t)
                                }), i)
                            }
                        }
                    }, {
                        key: "getRetryWaitDelay",
                        value: function() {
                            var e, t = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
                            return null === this.retryDelay ? this.retryDelay = this.retryInitialDelay : (e = this.retryDelay * this.retryMultiplier, this.retryDelay > this.maxDelay || e > this.maxDelay ? this.retryDelay = this.maxDelay : this.retryDelay = e), 1e3 * Math.round(this.retryDelay * t)
                        }
                    }, {
                        key: "resetRetryCount",
                        value: function() {
                            this.retryCount = 0, this.retryDelay = 10
                        }
                    }]), t
                }()
            }).call(this, i("c8ba"))
        },
        a18c: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return r
            }));
            var n = i("4360"),
                a = {
                    name: "TawkRouterView",
                    render: function(e) {
                        var t;
                        return n.a.getters["router/getCurrentView"] && (t = e(n.a.getters["router/getCurrentView"].component)), e("transition", {
                            props: {
                                name: "slide-fade",
                                mode: "out-in"
                            },
                            ref: "router-view"
                        }, [t])
                    }
                },
                o = i("d046");

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s(this, e), this.matcher = t.routes
            };
            r.install = function(e) {
                n.a.dispatch("router/addRoutes", o.a), e.component("TawkRouterView", a)
            }
        },
        a3cc: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("a34a"),
                a = i.n(n),
                o = i("bdd0"),
                s = i("7f46");

            function r(e, t, i, n, a, o, s) {
                try {
                    var r = e[o](s),
                        c = r.value
                } catch (e) {
                    return void i(e)
                }
                r.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function c(e) {
                return function() {
                    var t = this,
                        i = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, i);

                        function s(e) {
                            r(o, n, a, s, c, "next", e)
                        }

                        function c(e) {
                            r(o, n, a, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            t.default = {
                namespaced: !0,
                state: {
                    baseUrl: "/v1/kb",
                    id: null,
                    items: [],
                    options: [],
                    loading: {
                        index: !1,
                        show: !1,
                        search: !1
                    },
                    selected: {},
                    isLoadingCodeMirror: !1,
                    isCodeMirrorLoaded: !1,
                    searchData: {
                        query: null,
                        results: [],
                        hasNext: !1,
                        token: null,
                        total: 0,
                        error: !1,
                        linkTarget: "self"
                    },
                    siteId: null,
                    scrollPosition: 0
                },
                getters: {
                    items: function(e) {
                        return e.items
                    },
                    isLoading: function(e) {
                        return function(t) {
                            return e.loading[t]
                        }
                    },
                    selected: function(e) {
                        return e.selected
                    },
                    options: function(e) {
                        return e.options
                    },
                    isLoadingCodeMirror: function(e) {
                        return e.isLoadingCodeMirror
                    },
                    isCodeMirrorLoaded: function(e) {
                        return e.isCodeMirrorLoaded
                    },
                    searchData: function(e) {
                        return e.searchData
                    },
                    siteId: function(e) {
                        return e.siteId
                    },
                    scrollPosition: function(e) {
                        return e.scrollPosition
                    }
                },
                actions: {
                    show: function() {
                        var e = c(a.a.mark((function e(t, i) {
                            var n, s, r;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.state, s = t.commit, r = t.rootGetters, i.siteId && i.articleId) {
                                            e.next = 3;
                                            break
                                        }
                                        throw "Please set article ID before calling the action.show";
                                    case 3:
                                        return s("setLoading", {
                                            action: "show",
                                            value: !0
                                        }), e.next = 6, o.a.get("".concat("https://va.tawk.to").concat(n.baseUrl).concat(i.url), {
                                            propertyId: r["property/id"],
                                            siteId: i.siteId,
                                            articleId: i.articleId
                                        }, null, (function(e, t) {
                                            if (e) throw s("setLoading", {
                                                action: "show",
                                                value: !1
                                            }), e;
                                            t.data.siteId = i.siteId, s("setSelected", t.data), s("setLoading", {
                                                action: "show",
                                                value: !1
                                            })
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, i) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    updateOptions: function(e, t) {
                        (0, e.commit)("setOptions", t)
                    },
                    updateId: function(e, t) {
                        (0, e.commit)("setId", t)
                    },
                    unsetSelected: function(e) {
                        (0, e.commit)("setSelected", {})
                    },
                    setCodeMirrorIsLoading: function(e) {
                        var t = e.state;
                        t.isCodeMirrorLoaded = !1, t.isLoadingCodeMirror = !0
                    },
                    setCodeMirrorIsLoaded: function(e) {
                        var t = e.state;
                        t.isCodeMirrorLoaded = !0, t.isLoadingCodeMirror = !1
                    },
                    searchArticles: function() {
                        var e = c(a.a.mark((function e(t, i) {
                            var n, s, r, c, u;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.commit, s = t.rootGetters, r = t.state, c = t.dispatch, n("setLoading", {
                                                action: "search",
                                                value: !0
                                            }), i && void 0 !== i.siteId && n("setSiteId", i.siteId), i && void 0 !== i.search && n("setSearchQuery", i.search), r.searchData.query) {
                                            e.next = 7;
                                            break
                                        }
                                        return n("setLoading", {
                                            action: "search",
                                            value: !1
                                        }), e.abrupt("return");
                                    case 7:
                                        return u = {
                                            propertyId: s["property/id"],
                                            siteId: r.siteId,
                                            query: r.searchData.query,
                                            limit: i && i.limit ? i.limit : 10,
                                            from: r.searchData.results.length
                                        }, e.next = 10, o.a.get("".concat("https://va.tawk.to", "/v1/kb/article/search"), u, null, (function(e, t) {
                                            n("setLoading", {
                                                action: "search",
                                                value: !1
                                            }), e ? r.searchData.error = !0 : (n("setSearchResults", t.data), c("searchPerformedAnalytics"))
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, i) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    articleClickedAnalytics: function(e, t) {
                        var i = e.state;
                        o.a.post("".concat("https://va.tawk.to", "/v1/kb/analytics/search-result-clicked"), {
                            token: i.searchData.token,
                            articleId: t
                        }, null, (function(e, t) {
                            if (e) return t
                        }), !1)
                    },
                    searchPerformedAnalytics: function(e) {
                        var t = e.state;
                        o.a.post("".concat("https://va.tawk.to", "/v1/kb/analytics/search-performed"), {
                            token: t.searchData.token
                        }, null, (function(e, t) {
                            if (e) return t
                        }), !1)
                    },
                    resetState: function(e) {
                        (0, e.commit)("unsetData")
                    },
                    setSearchLoading: function(e, t) {
                        (0, e.commit)("setLoading", {
                            action: "search",
                            value: t
                        })
                    },
                    updateSearchDataLinkTarget: function(e, t) {
                        (0, e.commit)("setSearchDataLinkTarget", t)
                    },
                    unsetSearchData: function(e) {
                        (0, e.commit)("resetSearchQuery")
                    },
                    setScrollPosition: function(e, t) {
                        (0, e.commit)("modifyScrollPosition", t)
                    },
                    unsetScrollPosition: function(e) {
                        (0, e.commit)("modifyScrollPosition", 0)
                    },
                    unsetSearchDataResults: function(e) {
                        (0, e.commit)("softResetSearchData")
                    }
                },
                mutations: {
                    setId: function(e, t) {
                        e.id = t
                    },
                    setItems: function(e, t) {
                        e.items = t
                    },
                    setLoading: function(e, t) {
                        var i = t.action,
                            n = t.value;
                        e.loading[i] = n
                    },
                    setSelected: function(e, t) {
                        e.selected = t
                    },
                    setOptions: function(e, t) {
                        e.options = t
                    },
                    setSearchResults: function(e, t) {
                        t.articles.forEach((function(e) {
                            if (e.highlight) {
                                if (e.highlight.title && e.highlight.title.length)
                                    for (var t = 0; t < e.highlight.title.length; t++) e.title = s.a.rawEncode(e.highlight.title[t]).replace(/\[em\]/gi, '<span class="tawk-text-bold">').replace(/\[\/em\]/gi, "</span>");
                                if (e.highlight.subtitle && e.highlight.subtitle.length)
                                    for (var i = 0; i < e.highlight.subtitle.length; i++) e.subtitle = s.a.rawEncode(e.highlight.subtitle[i]).replace(/\[em]/gi, '<span class="tawk-text-bold">').replace(/\[\/em\]/gi, "</span>")
                            }
                        })), e.searchData.results = e.searchData.results.concat(t.articles), e.searchData.hasNext = t.total > e.searchData.results.length, e.searchData.token = t.token, e.searchData.total = t.total, e.searchData.error = !1
                    },
                    setSearchQuery: function(e, t) {
                        e.searchData.query = t, e.searchData.results = [], e.searchData.hasNext = !1, e.searchData.token = null, e.searchData.total = 0, e.searchData.error = !1
                    },
                    setSiteId: function(e, t) {
                        e.siteId = t
                    },
                    unsetData: function(e) {
                        for (var t = {
                                baseUrl: "/v1/kb",
                                id: null,
                                items: [],
                                options: [],
                                loading: {
                                    index: !1,
                                    show: !1,
                                    search: !1
                                },
                                selected: {},
                                isLoadingCodeMirror: !1,
                                isCodeMirrorLoaded: !1,
                                searchData: {
                                    query: null,
                                    results: [],
                                    hasNext: !1,
                                    token: null,
                                    total: 0,
                                    error: !1,
                                    linkTarget: "self"
                                },
                                siteId: null,
                                scrollPosition: 0
                            }, i = Object.keys(t), n = 0; n < i.length; n++) {
                            var a = i[n];
                            e[a] = t[a]
                        }
                    },
                    setSearchDataLinkTarget: function(e, t) {
                        e.searchData.linkTarget = t
                    },
                    resetSearchQuery: function(e) {
                        e.searchData.query = null, e.searchData.results = [], e.searchData.hasNext = !1, e.searchData.token = null, e.searchData.total = 0, e.searchData.error = !1, e.searchData.linkTarget = "self"
                    },
                    modifyScrollPosition: function(e, t) {
                        e.scrollPosition = t
                    },
                    softResetSearchData: function(e) {
                        e.searchData.results = [], e.searchData.hasNext = !1, e.searchData.total = 0, e.searchData.error = !1
                    }
                }
            }
        },
        b250: function(e, t, i) {
            "use strict";
            i.r(t),
                function(e) {
                    var n = i("fad2"),
                        a = i("7f46");
                    t.default = {
                        namespaced: !0,
                        state: {
                            email: null,
                            displayName: null,
                            name: null,
                            transcriptEmail: null,
                            uuid: null,
                            uuids: [],
                            uuidVer: 0,
                            visitorId: null
                        },
                        getters: {
                            getEmailValue: function(e) {
                                return e.email || e.transcriptEmail
                            },
                            name: function(e) {
                                return n.a.isGeneratedName(e.name) ? "" : e.name
                            },
                            uuid: function(e) {
                                return e.uuid
                            },
                            uuidVer: function(e) {
                                return e.uuidVer
                            },
                            uuids: function(e) {
                                return e.uuids
                            },
                            transcriptEmail: function(e) {
                                return e.transcriptEmail
                            },
                            visitorId: function(e) {
                                return e.visitorId
                            }
                        },
                        actions: {
                            updateUUID: function(t, i) {
                                var n = t.commit,
                                    a = JSON.parse(i.uuids),
                                    o = [];
                                a && (Object.keys(a.e).forEach((function(e) {
                                    o.push({
                                        isExact: !0,
                                        domain: e,
                                        uuid: a.e[e]
                                    })
                                })), Object.keys(a.p).forEach((function(e) {
                                    o.push({
                                        isExact: !1,
                                        domain: e,
                                        uuid: a.p[e]
                                    })
                                }))), n("setVisitorUUID", {
                                    uuid: i.uuid,
                                    uver: i.uver,
                                    uuids: o
                                }), e.Tawk_Window.webStorage.storeUUID()
                            },
                            updateVisitorInformation: function(e, t) {
                                var i = e.commit,
                                    n = e.state,
                                    o = {
                                        visitorId: n.visitorId,
                                        name: n.name,
                                        email: n.email,
                                        transcriptEmail: n.transcriptEmail
                                    };
                                t.n && a.a.isString(t.n) && (o.name = t.n), t.te && a.a.isString(t.te) && (o.transcriptEmail = t.te), t.e && a.a.isString(t.e) && (o.email = t.e), t.vid && (o.visitorId = t.vid), i("setVisitorInformation", o)
                            },
                            resetState: function(e) {
                                (0, e.commit)("unsetData")
                            }
                        },
                        mutations: {
                            setVisitorUUID: function(e, t) {
                                e.uuid = t.uuid, e.uuidVer = t.uver || 0, e.uuids = t.uuids
                            },
                            setVisitorInformation: function(e, t) {
                                e.visitorId = t.visitorId, e.name = a.a.rawDecode(t.name), e.displayName = n.a.parseVisitorName(t.name), e.email = t.email, e.transcriptEmail = t.transcriptEmail
                            },
                            unsetData: function(e) {
                                for (var t = {
                                        email: null,
                                        displayName: null,
                                        name: null,
                                        transcriptEmail: null,
                                        uuid: null,
                                        uuids: [],
                                        uuidVer: 0,
                                        visitorId: null
                                    }, i = Object.keys(t), n = 0; n < i.length; n++) {
                                    var a = i[n];
                                    e[a] = t[a]
                                }
                            }
                        }
                    }
                }.call(this, i("c8ba"))
        },
        b7cc: function(e, t, i) {
            "use strict";
            (function(e) {
                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function a(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                i.d(t, "a", (function() {
                    return o
                }));
                var o = function() {
                    function t(e) {
                        if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.store = e, this.local_API = {}, window.$_Tawk = window.$_Tawk || {}, window.Tawk_API = window.Tawk_API || {}, "object" === n(window.$_Tawk_API))
                            for (var i in window.$_Tawk_API) Object.prototype.hasOwnProperty.call(window.$_Tawk_API, i) && (window.Tawk_API[i] = window.$_Tawk_API[i]);
                        "function" != typeof window.CustomEvent && (this.CustomEventIE(), this.CustomEventIE.prototype = window.Event.prototype), this.init()
                    }
                    return function(e, t, i) {
                        t && a(e.prototype, t), i && a(e, i)
                    }(t, [{
                        key: "CustomEventIE",
                        value: function(e, t) {
                            t = t || {
                                bubbles: !1,
                                cancelable: !1,
                                detail: void 0
                            };
                            var i = document.createEvent("CustomEvent");
                            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                        }
                    }, {
                        key: "_apiCheck",
                        value: function() {
                            return window.$_Tawk.ready
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.local_API = {
                                disableSound: !!window.Tawk_API.disableSound,
                                embedded: window.Tawk_API.embedded || null,
                                visitor: window.Tawk_API.visitor || null,
                                disableMobileBackHistory: !!window.Tawk_API.disableMobileBackHistory,
                                isPopup: !!window.Tawk_API.isPopup,
                                customStyle: window.Tawk_API.customStyle || null,
                                onBeforeLoad: {
                                    eventName: "tawkBeforeLoad",
                                    func: window.Tawk_API.onBeforeLoad
                                },
                                onLoad: {
                                    eventName: "tawkLoad",
                                    func: window.Tawk_API.onLoad
                                },
                                onStatusChange: {
                                    eventName: "tawkStatusChange",
                                    func: window.Tawk_API.onStatusChange
                                },
                                onChatMaximized: {
                                    eventName: "tawkChatMaximized",
                                    func: window.Tawk_API.onChatMaximized
                                },
                                onChatMinimized: {
                                    eventName: "tawkChatMinimized",
                                    func: window.Tawk_API.onChatMinimized
                                },
                                onChatHidden: {
                                    eventName: "tawkChatHidden",
                                    func: window.Tawk_API.onChatHidden
                                },
                                onChatStarted: {
                                    eventName: "tawkChatStarted",
                                    func: window.Tawk_API.onChatStarted
                                },
                                onChatEnded: {
                                    eventName: "tawkChatEnded",
                                    func: window.Tawk_API.onChatEnded
                                },
                                onPrechatSubmit: {
                                    eventName: "tawkPrechatSubmit",
                                    func: window.Tawk_API.onPrechatSubmit
                                },
                                onOfflineSubmit: {
                                    eventName: "tawkOfflineSubmit",
                                    func: window.Tawk_API.onOfflineSubmit
                                },
                                onChatMessageVisitor: {
                                    eventName: "tawkChatMessageVisitor",
                                    func: window.Tawk_API.onChatMessageVisitor
                                },
                                onChatMessageAgent: {
                                    eventName: "tawkChatMessageAgent",
                                    func: window.Tawk_API.onChatMessageAgent
                                },
                                onChatMessageSystem: {
                                    eventName: "tawkChatMessageSystem",
                                    func: window.Tawk_API.onChatMessageSystem
                                },
                                onAgentJoinChat: {
                                    eventName: "tawkAgentJoinChat",
                                    func: window.Tawk_API.onAgentJoinChat
                                },
                                onAgentLeaveChat: {
                                    eventName: "tawkAgentLeaveChat",
                                    func: window.Tawk_API.onAgentLeaveChat
                                },
                                onChatSatisfaction: {
                                    eventName: "tawkChatSatisfaction",
                                    func: window.Tawk_API.onChatSatisfaction
                                },
                                onVisitorNameChanged: {
                                    eventName: "tawkVisitorNameChanged",
                                    func: window.Tawk_API.onVisitorNameChanged
                                },
                                onFileUpload: {
                                    eventName: "tawkFileUpload",
                                    func: window.Tawk_API.onFileUpload
                                },
                                onTagsUpdated: {
                                    eventName: "tawkTagsUpdated",
                                    func: window.Tawk_API.onTagsUpdated
                                },
                                onUnreadCountChanged: {
                                    eventName: "tawkUnreadCountChanged",
                                    func: window.Tawk_API.onUnreadCountChanged
                                }
                            }, window.$_Tawk.maximize = window.Tawk_API.maximize = function() {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.jsApi.store.dispatch("session/updateChatWindowState", "max")
                            }, window.$_Tawk.minimize = window.Tawk_API.minimize = function() {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.jsApi.store.dispatch("session/updateChatWindowState", "min")
                            }, window.$_Tawk.toggle = window.Tawk_API.toggle = function() {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.jsApi.store.dispatch("session/toggleWidget")
                            }, window.$_Tawk.popup = window.Tawk_API.popup = function() {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.popoutWidget()
                            }, window.$_Tawk.getWindowType = window.Tawk_API.getWindowType = function() {
                                if (!e.Tawk_Window.jsApi._apiCheck()) return e.Tawk_Window.jsApi.store.getters["widget/isEmbedded"] ? "embed" : e.Tawk_Window.jsApi.store.getters["widget/isPopup"] ? "popup" : "inline"
                            }, window.$_Tawk.showWidget = window.Tawk_API.showWidget = function() {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.jsApi.store.commit("widget/setVisibility", !0)
                            }, window.$_Tawk.hideWidget = window.Tawk_API.hideWidget = function() {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.jsApi.store.commit("widget/setVisibility", !1)
                            }, window.$_Tawk.toggleVisibility = window.Tawk_API.toggleVisibility = function() {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.jsApi.store.dispatch("widget/toggleVisibility")
                            }, window.$_Tawk.getStatus = window.Tawk_API.getStatus = function() {
                                if (!e.Tawk_Window.jsApi._apiCheck()) return e.Tawk_Window.jsApi.store.getters["session/pageStatus"]
                            }, window.$_Tawk.isChatMaximized = window.Tawk_API.isChatMaximized = function() {
                                if (!e.Tawk_Window.jsApi._apiCheck()) return "max" === e.Tawk_Window.jsApi.store.getters["session/chatWindowState"]
                            }, window.$_Tawk.isChatMinimized = window.Tawk_API.isChatMinimized = function() {
                                if (!e.Tawk_Window.jsApi._apiCheck()) return "min" === e.Tawk_Window.jsApi.store.getters["session/chatWindowState"]
                            }, window.$_Tawk.isChatHidden = window.Tawk_API.isChatHidden = function() {
                                if (!e.Tawk_Window.jsApi._apiCheck()) return !e.Tawk_Window.jsApi.store.getters["widget/isVisible"]
                            }, window.$_Tawk.isChatOngoing = window.Tawk_API.isChatOngoing = function() {
                                if (!e.Tawk_Window.jsApi._apiCheck()) return e.Tawk_Window.jsApi.store.getters["chat/isChatOngoing"]
                            }, window.$_Tawk.isVisitorEngaged = window.Tawk_API.isVisitorEngaged = function() {
                                if (!e.Tawk_Window.jsApi._apiCheck()) return e.Tawk_Window.jsApi.store.getters["chat/isVisitorEngaged"]
                            }, window.$_Tawk.endChat = window.Tawk_API.endChat = function() {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.jsApi.store.dispatch("chat/endChat")
                            }, window.$_Tawk.addEvent = window.Tawk_API.addEvent = function(t, i, n) {
                                e.Tawk_Window.jsApi._apiCheck() || e.Tawk_Window.chatManager.sendApiEvent(t, i, n)
                            }, window.$_Tawk.setAttributes = window.Tawk_API.setAttributes = function(t, i) {
                                e.Tawk_Window.jsApi.local_API.visitor = e.Tawk_Window.jsApi.local_API.visitor || {}, t.name && (e.Tawk_Window.jsApi.local_API.visitor.name = t.name), t.email && (e.Tawk_Window.jsApi.local_API.visitor.email = t.email), t.hash && (e.Tawk_Window.jsApi.local_API.visitor.hash = t.hash), e.Tawk_Window.chatManager.sendApiAttributes(t, i)
                            }, window.$_Tawk.addTags = window.Tawk_API.addTags = function(t, i) {
                                e.Tawk_Window.chatManager.addTags(t, i)
                            }, window.$_Tawk.removeTags = window.Tawk_API.removeTags = function(t, i) {
                                e.Tawk_Window.chatManager.removeTags(t, i)
                            }, window.$_Tawk.widgetPosition = window.Tawk_API.widgetPosition = function() {
                                if (!e.Tawk_Window.jsApi._apiCheck()) return e.Tawk_Window.jsApi.store.getters["widget/desktopVisibility"] ? e.Tawk_Window.jsApi.store.getters["widget/desktopVisibility"].position : null
                            }
                        }
                    }, {
                        key: "triggerApiHandlers",
                        value: function(t, i) {
                            var n = this.local_API[t];
                            if (void 0 !== n) {
                                if ("onBeforeLoad" === t) {
                                    if (window.Tawk_API.onBeforeLoaded) return;
                                    window.Tawk_API.onBeforeLoaded = !0
                                } else if ("onLoad" === t) {
                                    if (window.Tawk_API.onLoaded) return;
                                    window.Tawk_API.onLoaded = !0
                                }
                                if (this.dispatch(n.eventName, i), "function" == typeof n.func) try {
                                    n.func(i)
                                } catch (e) {}
                                e.Tawk_Window.eventBus.$on("resetState", (function() {
                                    window.Tawk_API.onBeforeLoaded = !1, window.Tawk_API.onLoaded = !1
                                }))
                            }
                        }
                    }, {
                        key: "dispatch",
                        value: function(e, t) {
                            var i;
                            e && (i = "function" == typeof window.CustomEvent ? new CustomEvent(e, {
                                detail: t
                            }) : new this.CustomEventIE(e, {
                                detail: t
                            }), window.dispatchEvent(i))
                        }
                    }, {
                        key: "secureWrapper",
                        value: function(e) {
                            return void 0 === e && (e = {}), this.local_API && this.local_API.visitor && (this.local_API.visitor.email && (e.email = this.local_API.visitor.email), this.local_API.visitor.hash && (e.hash = this.local_API.visitor.hash)), e
                        }
                    }, {
                        key: "setVisitorAttributes",
                        value: function() {
                            var t = {};
                            this.local_API && this.local_API.visitor && (this.local_API.visitor.name && (t.name = this.local_API.visitor.name), this.local_API.visitor.email && (t.email = this.local_API.visitor.email), this.local_API.visitor.hash && (t.hash = this.local_API.visitor.hash), e.Tawk_Window.chatManager.sendApiAttributes(t))
                        }
                    }]), t
                }()
            }).call(this, i("c8ba"))
        },
        bdd0: function(e, t, i) {
            "use strict";

            function n(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(i), !0).forEach((function(t) {
                        o(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function o(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            i.d(t, "a", (function() {
                return s
            }));
            var s = {
                post: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        s = [],
                        r = r,
                        c = a({}, i);
                    if (t instanceof FormData) s = t, r = !1;
                    else {
                        for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && s.push("".concat(encodeURIComponent(u), "=").concat(encodeURIComponent(t[u])));
                        s.length && (s = s.join("&")), c["Content-Type"] = "application/x-www-form-urlencoded", r = !0
                    }
                    if (void 0 !== window.fetch && void 0 !== window.AbortController) {
                        var d;
                        d = o ? {
                            method: "POST",
                            headers: c,
                            signal: h,
                            credentials: r ? "include" : "same-origin",
                            body: s
                        } : {
                            method: "POST",
                            headers: c,
                            signal: h,
                            body: s
                        };
                        var l = new window.AbortController,
                            h = l.signal;
                        return fetch(e, d).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            n(null, e)
                        })).catch((function() {
                            n(!0)
                        })), h
                    }
                    var f = new XMLHttpRequest;
                    if (f.onerror = n, f.open("POST", e, !0), !(t instanceof FormData)) {
                        for (var p in c) f.setRequestHeader(p, c[p]);
                        f.withCredentials = !0
                    }
                    return f.onload = function() {
                        f.status >= 200 & f.status < 300 ? n(null, JSON.parse(f.responseText)) : n(!0)
                    }, f.send(s), f
                },
                get: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        o = [],
                        s = a({}, i);
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && o.push("".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(t[r])));
                    if (o.length && (e += "?".concat(o.join("&"))), void 0 !== window.fetch && void 0 !== window.AbortController) {
                        var c = new window.AbortController,
                            u = c.signal;
                        return fetch(e, {
                            headers: s,
                            signal: u
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            n(null, e)
                        })).catch((function() {
                            n(!0)
                        })), u
                    }
                    var d = new XMLHttpRequest;
                    for (var l in d.onerror = n, d.open("GET", e, !0), s) d.setRequestHeader(l, s[l]);
                    return d.onload = function() {
                        d.status >= 200 & d.status < 300 ? n(null, JSON.parse(d.responseText)) : n(!0)
                    }, d.send(), d
                }
            }
        },
        c3e1: function(e, t, i) {
            var n = {
                "./browser-data.js": "0dc3",
                "./chat.js": "9b4f",
                "./history.js": "c99a",
                "./knowledge-base.js": "a3cc",
                "./overlay.js": "284b",
                "./property.js": "9a05",
                "./router.js": "d3e9",
                "./schedule.js": "e4b3",
                "./session.js": "3b35",
                "./socket.js": "f406",
                "./visitor.js": "b250",
                "./widget.js": "32d9"
            };

            function a(e) {
                var t = o(e);
                return i(t)
            }

            function o(e) {
                if (!i.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            a.keys = function() {
                return Object.keys(n)
            }, a.resolve = o, e.exports = a, a.id = "c3e1"
        },
        c7b8: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return o
            }));
            var n = i("bdd0");

            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var o = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return function(e, t, i) {
                    t && a(e.prototype, t), i && a(e, i)
                }(e, [{
                    key: "reportPerformance",
                    value: function(e) {
                        n.a.post("".concat("https://va.tawk.to", "/log-performance/v3"), {
                            logData: JSON.stringify(e)
                        }, {}, (function(e) {
                            e && console.error(e)
                        }), !1)
                    }
                }, {
                    key: "reportIncident",
                    value: function() {}
                }, {
                    key: "reportError",
                    value: function() {}
                }]), e
            }()
        },
        c99a: function(e, t, i) {
            "use strict";
            i.r(t),
                function(e) {
                    var n = i("a34a"),
                        a = i.n(n),
                        o = i("bdd0");

                    function s(e, t, i, n, a, o, s) {
                        try {
                            var r = e[o](s),
                                c = r.value
                        } catch (e) {
                            return void i(e)
                        }
                        r.done ? t(c) : Promise.resolve(c).then(n, a)
                    }

                    function r(e) {
                        return function() {
                            var t = this,
                                i = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, i);

                                function r(e) {
                                    s(o, n, a, r, c, "next", e)
                                }

                                function c(e) {
                                    s(o, n, a, r, c, "throw", e)
                                }
                                r(void 0)
                            }))
                        }
                    }
                    t.default = {
                        namespaced: !0,
                        state: {
                            baseUrl: "/v1/chat/",
                            items: [],
                            loading: {
                                index: !1,
                                chat: !1
                            },
                            nextListHash: null,
                            lastMessageTimestamp: null,
                            loadError: !1,
                            messageBlocks: [],
                            selectedChat: null,
                            chatError: !1,
                            selectedChatMessages: null,
                            scrollPosition: 0,
                            calls: {}
                        },
                        getters: {
                            items: function(e) {
                                return e.items
                            },
                            isLoading: function(e) {
                                return function(t) {
                                    return e.loading[t]
                                }
                            },
                            lastMessageTimestamp: function(e) {
                                return e.lastMessageTimestamp
                            },
                            nextListHash: function(e) {
                                return e.nextListHash
                            },
                            loadError: function(e) {
                                return e.loadError
                            },
                            chatError: function(e) {
                                return e.chatError
                            },
                            messageBlocks: function(e) {
                                return e.messageBlocks
                            },
                            selectedChat: function(e) {
                                return e.selectedChat
                            },
                            selectedChatMessages: function(e) {
                                return e.selectedChatMessages
                            },
                            scrollPosition: function(e) {
                                return e.scrollPosition
                            },
                            callData: function(e) {
                                return function(t) {
                                    return e.calls[t]
                                }
                            }
                        },
                        actions: {
                            load: function() {
                                var e = r(a.a.mark((function e(t) {
                                    var i, n, s, r, c, u, d, l = arguments;
                                    return a.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return i = t.state, n = t.commit, s = t.rootGetters, r = t.dispatch, c = l.length > 1 && void 0 !== l[1] ? l[1] : {}, n("setLoading", {
                                                    action: "index",
                                                    value: !0
                                                }), n("setLoadError", !1), e.prev = 4, e.next = 7, r("session/checkTokenValidity", {}, {
                                                    root: !0
                                                });
                                            case 7:
                                                e.next = 13;
                                                break;
                                            case 9:
                                                return e.prev = 9, e.t0 = e.catch(4), n("setLoadError", !0), e.abrupt("return");
                                            case 13:
                                                u = s["session/token"], d = {
                                                    limit: c.limit || 10
                                                }, c.loadNext && (d.next = i.nextListHash), o.a.get("".concat("https://va.tawk.to").concat(i.baseUrl, "list"), d, {
                                                    "X-Tawk-Token": u
                                                }, (function(e, t) {
                                                    n("setLoading", {
                                                        action: "index",
                                                        value: !1
                                                    }), e ? n("setLoadError", !0) : (t.data && t.data.chats.length && (c.loadNext ? n("appendItems", t.data.chats) : n("setItems", t.data.chats)), t.data.hasNext ? n("setNextListHash", t.data.next) : n("setNextListHash", null))
                                                }));
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [4, 9]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            getLastMessageTimestamp: function() {
                                var e = r(a.a.mark((function e(t) {
                                    var i, n, s, r, c;
                                    return a.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return i = t.state, n = t.commit, s = t.rootGetters, r = t.dispatch, e.prev = 1, e.next = 4, r("session/checkTokenValidity", {}, {
                                                    root: !0
                                                });
                                            case 4:
                                                e.next = 9;
                                                break;
                                            case 6:
                                                return e.prev = 6, e.t0 = e.catch(1), e.abrupt("return");
                                            case 9:
                                                c = s["session/token"], o.a.get("".concat("https://va.tawk.to").concat(i.baseUrl, "list"), {
                                                    limit: 1
                                                }, {
                                                    "X-Tawk-Token": c
                                                }, (function(e, t) {
                                                    e || t.data && t.data.chats.length && n("setLastMessageTimestamp", t.data.chats[0].endedOn)
                                                }));
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 6]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            getHistory: function() {
                                var t = r(a.a.mark((function t(i) {
                                    var n, s, r, c, u, d;
                                    return a.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (n = i.state, s = i.commit, r = i.rootGetters, c = i.dispatch, s("setChatError", !1), s("setLoading", {
                                                        action: "chat",
                                                        value: !0
                                                    }), n.selectedChat) {
                                                    t.next = 6;
                                                    break
                                                }
                                                throw s("setChatError", !0), new Error("Invalid Id");
                                            case 6:
                                                return t.prev = 6, t.next = 9, c("session/checkTokenValidity", {}, {
                                                    root: !0
                                                });
                                            case 9:
                                                t.next = 15;
                                                break;
                                            case 11:
                                                return t.prev = 11, t.t0 = t.catch(6), s("setChatError", !0), t.abrupt("return");
                                            case 15:
                                                u = r["session/token"], d = {
                                                    chatId: n.selectedChat.id
                                                }, o.a.get("".concat("https://va.tawk.to").concat(n.baseUrl, "get"), d, {
                                                    "X-Tawk-Token": u
                                                }, (function(t, i) {
                                                    if (t) s("setChatError", !0);
                                                    else if (i.data && i.data.error) s("setChatError", !0);
                                                    else {
                                                        var n = e.Tawk_Window.chatManager.processHistoryMessages(i.data.chat.messages);
                                                        c("setSelectedChatMessages", n), c("setCalls", i.data.chat.calls)
                                                    }
                                                }));
                                            case 18:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [6, 11]
                                    ])
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            resetState: function(e) {
                                (0, e.commit)("unsetData")
                            },
                            unsetItems: function(e) {
                                (0, e.commit)("setItems", [])
                            },
                            addMessageBlock: function(e, t) {
                                (0, e.commit)("pushMessageBlock", t)
                            },
                            clearMessageBlock: function(e) {
                                (0, e.commit)("unsetMessageBlock")
                            },
                            setSelectedChatMessages: function(e, t) {
                                var i = e.commit;
                                i("setSelectedChatMessages", t), i("setLoading", {
                                    action: "chat",
                                    value: !1
                                })
                            },
                            setCalls: function(e, t) {
                                (0, e.commit)("updateCalls", t)
                            },
                            unsetSelectedChat: function(e) {
                                (0, e.commit)("setSelectedChat", null)
                            },
                            setScrollPosition: function(e, t) {
                                (0, e.commit)("modifyScrollPosition", t)
                            },
                            unsetScrollPosition: function(e) {
                                (0, e.commit)("modifyScrollPosition", 0)
                            }
                        },
                        mutations: {
                            setItems: function(e, t) {
                                e.items = t
                            },
                            setLoading: function(e, t) {
                                var i = t.action,
                                    n = t.value;
                                e.loading[i] = n
                            },
                            setLastMessageTimestamp: function(e, t) {
                                e.lastMessageTimestamp = t
                            },
                            setNextListHash: function(e, t) {
                                e.nextListHash = t
                            },
                            appendItems: function(e, t) {
                                e.items = e.items.concat(t)
                            },
                            setLoadError: function(e, t) {
                                e.loadError = t
                            },
                            setSelectedChat: function(e, t) {
                                e.selectedChat = t
                            },
                            setChatError: function(e, t) {
                                e.chatError = t
                            },
                            setSelectedChatMessages: function(e, t) {
                                e.selectedChatMessages = t
                            },
                            updateCalls: function(e, t) {
                                e.calls = t
                            },
                            pushMessageBlock: function(e, t) {
                                if ("call" === t.messageType) {
                                    var i;
                                    if (e.calls.length)
                                        for (var n = 0; n < e.calls.length; n++)
                                            if (e.calls[n].id === t.callId) {
                                                var a = e.calls[n];
                                                i = {
                                                    callId: a.id,
                                                    status: a.status,
                                                    version: null,
                                                    isMissed: a.missed,
                                                    isRejected: a.rejected,
                                                    isRinging: !1,
                                                    isDone: "completed",
                                                    isVideo: a.features && a.features.video,
                                                    isScreenshare: a.features && a.features.screenShare,
                                                    hasError: !1,
                                                    caller: a.caller,
                                                    startedAt: a.startedOn,
                                                    endedAt: a.expiredOn
                                                };
                                                break
                                            }
                                    i || (i = {
                                        hasError: !0
                                    }), t.callData = i
                                }
                                e.messageBlocks.push(t)
                            },
                            unsetMessageBlock: function(e) {
                                e.messageBlocks = []
                            },
                            modifyScrollPosition: function(e, t) {
                                e.scrollPosition = t
                            },
                            unsetData: function(e) {
                                for (var t = {
                                        baseUrl: "/v1/chat/",
                                        items: [],
                                        loading: {
                                            index: !1,
                                            chat: !1
                                        },
                                        nextListHash: null,
                                        lastMessageTimestamp: null,
                                        loadError: !1,
                                        messageBlocks: [],
                                        selectedChat: null,
                                        chatError: !1,
                                        selectedChatMessages: null,
                                        scrollPosition: 0,
                                        calls: {}
                                    }, i = Object.keys(t), n = 0; n < i.length; n++) {
                                    var a = i[n];
                                    e[a] = t[a]
                                }
                            }
                        }
                    }
                }.call(this, i("c8ba"))
        },
        d046: function(e, t, i) {
            "use strict";
            (function(e) {
                var n = [{
                    path: "/",
                    component: function() {
                        return function() {}
                    }
                }, {
                    path: "chat",
                    component: function() {
                        return function() {}
                    }
                }, {
                    path: "kb-article",
                    component: function() {
                        return Promise.all([i.e("chunk-4fe9d5dd"), i.e("chunk-2d0cba65")]).then(i.bind(null, "4b23"))
                    },
                    hasBack: !0
                }, {
                    path: "kb-search",
                    component: function() {
                        return Promise.all([i.e("chunk-4fe9d5dd"), i.e("chunk-2d221830"), i.e("chunk-2d228873")]).then(i.bind(null, "da22"))
                    },
                    hasBack: !0,
                    title: function() {
                        return e.Tawk_Window && e.Tawk_Window.app && e.Tawk_Window.app.$i18n ? e.Tawk_Window.app.$i18n("kb", "search_results") : "Search Results"
                    }
                }, {
                    path: "history-list",
                    component: function() {
                        return Promise.all([i.e("chunk-4fe9d5dd"), i.e("chunk-2d0bd292")]).then(i.bind(null, "2b8d"))
                    },
                    hasBack: !0,
                    title: function() {
                        return e.Tawk_Window && e.Tawk_Window.app && e.Tawk_Window.app.$i18n ? e.Tawk_Window.app.$i18n("routes", "conversations") : "Conversations"
                    }
                }, {
                    path: "history-chat",
                    component: function() {
                        return Promise.all([i.e("chunk-4fe9d5dd"), i.e("chunk-2d0b9454"), i.e("chunk-f163fcd0"), i.e("chunk-286b2360")]).then(i.bind(null, "002e"))
                    },
                    hasBack: !0
                }, {
                    path: "agents",
                    component: function() {
                        return Promise.all([i.e("chunk-4fe9d5dd"), i.e("chunk-2d0e5ed2")]).then(i.bind(null, "9720"))
                    },
                    hasBack: !0,
                    title: function() {
                        return e.Tawk_Window && e.Tawk_Window.app && e.Tawk_Window.app.$i18n ? e.Tawk_Window.app.$i18n("routes", "all_agents") : "All Agents"
                    }
                }, {
                    path: "offline-success",
                    component: function() {
                        return i.e("chunk-2d2089ad").then(i.bind(null, "a602"))
                    }
                }, {
                    path: "prechat",
                    component: function() {
                        return function() {}
                    }
                }, {
                    path: "name-form",
                    component: function() {
                        return Promise.all([i.e("chunk-4fe9d5dd"), i.e("chunk-2d0b9454"), i.e("chunk-47bf17e2")]).then(i.bind(null, "2d70"))
                    }
                }, {
                    path: "email-transcript-form",
                    component: function() {
                        return Promise.all([i.e("chunk-4fe9d5dd"), i.e("chunk-2d0b9454"), i.e("chunk-78d1b56c")]).then(i.bind(null, "e6ae"))
                    }
                }, {
                    path: "restart-chat",
                    component: function() {
                        return i.e("chunk-3c7eb82e").then(i.bind(null, "a3af"))
                    }
                }];
                t.a = n
            }).call(this, i("c8ba"))
        },
        d3a4: function(e, t, i) {
            "use strict";
            t.a = {
                install: function(e) {
                    var t = function(e) {
                        return "string" == typeof e ? e.replace(/\$/g, "$$$") : e
                    };
                    e.prototype.$i18n = function(e, i, n) {
                        var a, o = [],
                            s = window.$_Tawk && window.$_Tawk.language ? window.$_Tawk.language : {};
                        if (!s[e]) return i;
                        var r = s[e][i];
                        if (!r) return console.error("Missing key : {" + e + "}, {" + i + "}"), i;
                        var c = r.pluralVars ? r.pluralVars.length : 0,
                            u = r.vars ? r.vars.length : 0;
                        if (c > 0) {
                            for (var d = 0; d < c; d++) o.push(s.pluralFormFunction(n[r.pluralVars[d]]));
                            a = r.message[o.join("_")];
                            for (var l = 0; l < c; l++) a = a.replace(new RegExp("#" + r.pluralVars[l], "g"), t(n[r.pluralVars[l]]))
                        } else a = r.message;
                        if (u > 0)
                            for (var h = 0; h < u; h++) a = a.replace(new RegExp("#" + r.vars[h], "g"), t(n[r.vars[h]]));
                        return a
                    }
                }
            }
        },
        d3e9: function(e, t, i) {
            "use strict";
            i.r(t);
            t.default = {
                namespaced: !0,
                state: {
                    root: null,
                    current: "/",
                    history: [],
                    routes: []
                },
                getters: {
                    current: function(e) {
                        return e.current
                    },
                    getCurrentView: function(e) {
                        for (var t = 0; t < e.routes.length; t++)
                            if (e.routes[t].path === e.current) return e.routes[t];
                        return null
                    },
                    getRoute: function(e) {
                        return function(t) {
                            for (var i = 0; i < e.routes.length; i++)
                                if (e.routes[i].path === t) return e.routes[i]
                        }
                    },
                    getHistory: function(e) {
                        return e.history
                    }
                },
                actions: {
                    routerPush: function(e, t) {
                        var i = e.commit,
                            n = e.state;
                        if (!n.routes.some((function(e) {
                                return e.path === t
                            }))) throw "Unrecognised route";
                        n.current && n.current === t || (i("changeCurrentView", t), i("addHistory", t))
                    },
                    routerBack: function(e) {
                        var t = e.commit,
                            i = e.dispatch;
                        t("previousRoute"), i("hideOverlay")
                    },
                    addRoutes: function(e, t) {
                        var i = e.commit;
                        if (t.map((function(e) {
                                return e.path
                            })).size < t.length) throw "Duplicate routes";
                        i("registerRoutes", t)
                    },
                    updateRoute: function(e, t) {
                        for (var i = e.state, n = 0; n < i.routes.length; n++)
                            if (i.routes[n].path === t.path) {
                                void 0 !== t.hasBack && (i.routes[n].hasBack = t.hasBack);
                                break
                            }
                    },
                    clearHistory: function(e) {
                        (0, e.commit)("unsetHistory")
                    },
                    resetState: function(e) {
                        (0, e.commit)("unsetData")
                    },
                    hideOverlay: function(e) {
                        var t = e.state,
                            i = e.dispatch;
                        "/" !== t.current && "chat" !== t.current && "prechat" !== t.current && 0 !== t.history.length || i("overlay/showOverlay", !1, {
                            root: !0
                        })
                    },
                    removeRoute: function(e, t) {
                        (0, e.commit)("ejectRoute", t)
                    }
                },
                mutations: {
                    changeCurrentView: function(e, t) {
                        e.current = t
                    },
                    addHistory: function(e, t) {
                        e.history.length > 14 && e.history.splice(0, 1), e.history.push(t)
                    },
                    previousRoute: function(e) {
                        e.history.pop();
                        var t = e.history.length - 1,
                            i = e.history[t];
                        e.current = i || "/"
                    },
                    registerRoutes: function(e, t) {
                        e.routes = t
                    },
                    unsetHistory: function(e) {
                        e.history = []
                    },
                    ejectRoute: function(e, t) {
                        for (var i = 0; i < e.history.length; i++)
                            if (e.history[i] === t) {
                                e.history.splice(i, 1);
                                break
                            }
                    },
                    unsetData: function(e) {
                        for (var t = {
                                root: null,
                                current: "/",
                                history: [],
                                routes: []
                            }, i = Object.keys(t), n = 0; n < i.length; n++) {
                            var a = i[n];
                            e[a] = t[a]
                        }
                    }
                }
            }
        },
        e4b3: function(e, t, i) {
            "use strict";
            i.r(t);
            t.default = {
                namespaced: !0,
                state: {
                    isEnabled: !1,
                    slots: [],
                    timezone: {}
                },
                getters: {
                    isEnabled: function(e) {
                        return e.isEnabled
                    },
                    slots: function(e) {
                        return e.slots
                    },
                    timezone: function(e) {
                        return e.timezone
                    }
                },
                actions: {
                    addSlots: function(e, t) {
                        var i = e.commit,
                            n = e.state,
                            a = [];
                        if (t && void 0 !== t.enabled ? i("setStatus", t.enabled) : i("setStatus", !!t), n.isEnabled) {
                            var o = t.config ? t.config.schedule : [];
                            Array.isArray(o) ? a = o : Object.keys(o).forEach((function(e) {
                                var t = o[e];
                                0 === t.start && 0 === t.end || a.push({
                                    day: parseInt(e, 10),
                                    start: Math.floor(t.start / 6e4),
                                    end: Math.floor(t.end / 6e4)
                                })
                            })), i("setSlots", a)
                        } else i("resetSlots")
                    },
                    updateTimezone: function(e, t) {
                        (0, e.commit)("setTimezone", t ? {
                            tzo: void 0 !== t.tzo ? t.tzo : t.offset,
                            utc: t.utc
                        } : null)
                    },
                    resetState: function(e) {
                        (0, e.commit)("unsetData")
                    }
                },
                mutations: {
                    resetSlots: function(e) {
                        e.slots = []
                    },
                    setTimezone: function(e, t) {
                        e.timezone = t
                    },
                    setSlots: function(e, t) {
                        e.slots = t
                    },
                    setStatus: function(e, t) {
                        e.isEnabled = !!t
                    },
                    unsetData: function(e) {
                        for (var t = {
                                isEnabled: !1,
                                slots: [],
                                timezone: {}
                            }, i = Object.keys(t), n = 0; n < i.length; n++) {
                            var a = i[n];
                            e[a] = t[a]
                        }
                    }
                }
            }
        },
        e8cc: function(e, t, i) {
            "use strict";
            (function(e) {
                var n = i("2b0e"),
                    a = i("2f62"),
                    o = i("f0b0"),
                    s = i("87dd"),
                    r = i("7f46");

                function c(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, o = [],
                                s = !0,
                                r = !1;
                            try {
                                for (i = i.call(e); !(s = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                            } catch (e) {
                                r = !0, a = e
                            } finally {
                                try {
                                    s || null == i.return || i.return()
                                } finally {
                                    if (r) throw a
                                }
                            }
                            return o
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return u(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n
                }

                function d(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), i.push.apply(i, n)
                    }
                    return i
                }

                function l(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(i), !0).forEach((function(t) {
                            h(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }

                function h(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }
                var f = function() {
                        return Promise.all([i.e("chunk-2d0d2b7c"), i.e("chunk-2d224aff")]).then(i.bind(null, "e0ca"))
                    },
                    p = function() {
                        return Promise.all([i.e("chunk-4fe9d5dd"), i.e("chunk-2d0d2b7c"), i.e("chunk-2d0b9454"), i.e("chunk-f163fcd0"), i.e("chunk-35f53b3a")]).then(i.bind(null, "d6a3"))
                    },
                    m = function() {
                        return Promise.all([i.e("chunk-2d0d2b7c"), i.e("chunk-f1596d96")]).then(i.bind(null, "0bdc"))
                    },
                    w = function() {
                        return Promise.all([i.e("chunk-2d0d2b7c"), i.e("chunk-48f46bef")]).then(i.bind(null, "6b5b"))
                    };
                n.a.directive("tawk-scroll", o.TawkScroll), t.a = {
                    mixins: [s.a],
                    data: function() {
                        return {
                            elementId: o.Helper.generateUUID(),
                            width: "auto",
                            minWidth: "0px",
                            height: "auto",
                            minHeight: "0px",
                            initialDocumentClick: null,
                            isManualHash: !1,
                            titleFlashTimeout: null
                        }
                    },
                    computed: l(l({}, Object(a.c)({
                        isRight: "widget/isRight",
                        isBottom: "widget/isBottom",
                        isCenter: "widget/isCenter",
                        isRoundWidget: "widget/isRoundWidget",
                        pageStatus: "session/pageStatus",
                        bubble: "widget/bubble",
                        chatBubbleClosed: "session/chatBubbleClosed",
                        showMessagePreview: "widget/showMessagePreview",
                        isPopup: "widget/isPopup",
                        isEmbedded: "widget/isEmbedded",
                        maxDimension: "widget/maxDesktop",
                        widgetIsVisible: "widget/isVisible",
                        onClick: "widget/onClick",
                        chatWindowState: "session/chatWindowState",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        unreadMessageCount: "chat/unreadMessageCount",
                        showTitleNotification: "widget/showTitleNotification",
                        originalPageTitle: "session/originalPageTitle",
                        hasLiveChat: "widget/hasLiveChat",
                        hasChatStarted: "chat/hasChatStarted",
                        agentsCount: "chat/agentsCount",
                        generalVisibility: "widget/generalVisibility",
                        widgetShow: "widget/show"
                    })), {}, {
                        isVisible: function() {
                            return !!this.isPopup || !("offline" === this.pageStatus && !this.generalVisibility.showWhenOffline) && (!this.widgetIsVisible && "max" === this.chatWindowState || (null !== this.widgetShow ? this.widgetShow : this.widgetIsVisible))
                        },
                        styleObject: function() {
                            var t, i, n, a = {
                                "transition-property:": "none !important;",
                                "margin:": "0px !important;",
                                "padding:": "0px !important;",
                                "z-index:": "2000000000 !important;",
                                "width:": "".concat(this.width, " !important;"),
                                "height:": "".concat(this.height, "  !important;"),
                                "max-height:": "".concat("auto" === this.height ? "none" : this.height, "  !important;"),
                                "max-width:": "".concat("auto" === this.width ? "none" : this.width, "  !important;"),
                                "min-width:": "".concat(this.minWidth, "  !important;"),
                                "min-height:": "".concat(this.minHeight, "  !important;")
                            };
                            return this.isEmbedded ? a["position:"] = "relative !important;" : this.isPopup ? a["position:"] = "fixed !important;" : (a["position:"] = "fixed !important;", this.isBottom || this.isCenter ? (i = "".concat("0px", " !important;"), n = "auto !important;") : (i = "auto !important;", n = "".concat("0px", " !important;")), this.isVisible ? a["display:"] = "block !important;" : a["display:"] = "none !important;", a["left:"] = this.isRight ? "auto !important;" : "".concat("0px", " !important;"), a["right:"] = this.isRight ? "".concat("0px", " !important;") : "auto !important;", a["bottom:"] = i, a["top:"] = n, a["transform:"] = "none !important;"), e.Tawk_Window.jsApi.local_API && e.Tawk_Window.jsApi.local_API.customStyle && Object.keys(e.Tawk_Window.jsApi.local_API.customStyle).length && e.Tawk_Window.jsApi.local_API.customStyle.zIndex && (a["z-index:"] = "".concat(r.a.cleanupCssValue(e.Tawk_Window.jsApi.local_API.customStyle.zIndex), " !important;")), t = l(l({}, this.genericStyles), a), Object.entries(t).map((function(e) {
                                var t = c(e, 2);
                                return t[0] + t[1]
                            })).join("\n")
                        }
                    }),
                    watch: {
                        chatWindowState: function(t) {
                            "pop" === this.onClick && "max" === t ? e.Tawk_Window.popoutWidget() : this.mobileBrowserName && !e.Tawk_Window.jsApi.local_API.disableMobileBackHistory && ("max" !== t || window.location.hash && "#max-widget" !== window.location.hash ? "min" === t && "#max-widget" === window.location.hash && (this.isManualHash = !0, window.history.back()) : (this.isManualHash = !0, window.history.pushState ? window.history.pushState({
                                page: 1
                            }, null, window.location.href + "#max-widget") : window.location.hash = "max-widget"))
                        },
                        unreadMessageCount: function(e) {
                            this.showTitleNotification && (this.hasLiveChat || this.hasChatStarted && 0 !== this.agentsCount) && (e > 0 ? this.updatePageTitle() : this.updatePageTitle(!0))
                        },
                        pageStatus: function(e) {
                            "offline" === e && this.updatePageTitle(!0)
                        }
                    },
                    methods: {
                        updatePageTitle: function(e) {
                            var t = this;
                            clearInterval(this.titleFlashTimeout), e || "offline" === this.pageStatus ? null !== this.originalPageTitle && (document.title = this.originalPageTitle, this.$store.commit("session/setOriginalPageTitle", null)) : (null === this.originalPageTitle && this.$store.commit("session/setOriginalPageTitle", document.title), this.titleFlashTimeout = setInterval((function() {
                                document.title = t.originalPageTitle === document.title ? t.$i18n("chat", "newMessage", {
                                    num: t.unreadMessageCount
                                }) : t.originalPageTitle
                            }), 1e3))
                        },
                        resizeHandler: function() {
                            var t, i = this;
                            clearTimeout(t), t = setTimeout((function() {
                                i.mobileBrowserName && (e.Tawk_Window.isMobileOptimizedWebsite && "opera" !== i.mobileBrowserName && "android2.3" !== i.mobileBrowserName || i.calculateZoom())
                            }), 100)
                        },
                        isLandscape: function() {
                            return "safari" === this.mobileBrowserName || "android" === this.mobileBrowserName ? 0 !== window.orientation : screen.height < screen.width || window.innerHeight < window.innerWidth
                        },
                        calculateZoom: function() {
                            var e, t;
                            "safari" === this.mobileBrowserName || "android" === this.mobileBrowserName ? e = (this.isLandscape() ? screen.height : screen.width) / window.innerWidth : e = screen.width / window.innerWidth, t = (1 / e.toFixed(2)).toFixed(2), "chrome" !== this.mobileBrowserName && "ie" !== this.mobileBrowserName || (t = t < .2 ? .2 : t), this.$store.commit("widget/setZoomRatio", t)
                        },
                        injectNodeStyle: function() {
                            var e = document.createElement("style");
                            e.setAttribute("type", "text/css"), e.innerHTML = "#".concat(this.elementId, " {").concat(this.styleObject, "}"), document.head.appendChild(e)
                        }
                    },
                    mounted: function() {
                        var t = this;
                        if ((this.isEmbedded || this.isPopup) && (this.width = "100%", this.height = "100%", this.minWidth = "100%", this.minHeight = "100%"), this.isEmbedded) {
                            var i = document.getElementById(e.Tawk_Window.jsApi.local_API.embedded);
                            i && (i.appendChild(this.$el), (i.clientWidth < 280 || i.clientHeight < 330) && (this.width = "".concat(this.maxDimension.width, "px"), this.height = "".concat(this.maxDimension.height, "px"), this.minWidth = "".concat(this.maxDimension.width, "px"), this.minHeight = "".concat(this.maxDimension.height, "px")))
                        } else document.body.appendChild(this.$el);
                        this.isPopup || this.isEmbedded || (e.Tawk_Window.minWidget = new n.a({
                            render: function(e) {
                                return e(f)
                            },
                            store: this.$store
                        }).$mount("#min-widget"), !this.bubble || this.chatBubbleClosed || this.mobileBrowserName || (e.Tawk_Window.bubbleWidget = new n.a({
                            render: function(e) {
                                return e(m)
                            },
                            store: this.$store
                        }).$mount("#chat-bubble")), this.showMessagePreview && (e.Tawk_Window.messagePreview = new n.a({
                            render: function(e) {
                                return e(w)
                            },
                            store: this.$store
                        }).$mount("#message-preview"))), ("max" === this.onClick || this.isPopup || this.isEmbedded) && (e.Tawk_Window.maxWidget = new n.a({
                            render: function(e) {
                                return e(p)
                            },
                            store: this.$store
                        }).$mount("#max-widget")), this.initialDocumentClick = function() {
                            e.Tawk_Window.audioPlayer.init(), window.removeEventListener("click", t.initialDocumentClick)
                        }, window.addEventListener("click", this.initialDocumentClick, !1), e.Tawk_Window.eventBus.$on("removeWidget", (function() {
                            e.Tawk_Window.app.$destroy(), e.Tawk_Window.app.$el.parentNode && e.Tawk_Window.app.$el.parentNode.removeChild(e.Tawk_Window.app.$el)
                        }));
                        var a = window.history.pushState,
                            o = window.history.replaceState;
                        "#max-widget" === window.location.hash && (window.history ? window.history.replaceState({}, document.title, ".") : window.location.hash = ""), window.history.pushState = function(e, i, n) {
                            for (var o = arguments.length, s = new Array(o > 3 ? o - 3 : 0), r = 3; r < o; r++) s[r - 3] = arguments[r];
                            a.apply(window.history, [e, i, n].concat(s));
                            var c = n && "string" == typeof n ? n.indexOf("#max-widget") : -1; - 1 === c ? t.$store.dispatch("session/sendNavigationEvent", {}, {
                                root: !0
                            }) : t.isManualHash = !1
                        }, window.history.replaceState = function(e, i, n) {
                            for (var a = n && "string" == typeof n ? n.indexOf("#max-widget") : -1, s = arguments.length, r = new Array(s > 3 ? s - 3 : 0), c = 3; c < s; c++) r[c - 3] = arguments[c];
                            o.apply(window.history, [e, i, n].concat(r)), -1 === a ? t.$store.dispatch("session/sendNavigationEvent", {}, {
                                root: !0
                            }) : t.isManualHash = !1
                        }, window.addEventListener("popstate", (function() {
                            if ("max" === t.chatWindowState && t.mobileBrowserName) return t.isManualHash = !0, t.$store.dispatch("session/updateChatWindowState", "min");
                            t.isManualHash || t.$store.dispatch("session/sendNavigationEvent", {}, {
                                root: !0
                            })
                        })), window.addEventListener("hashchange", (function() {
                            t.isManualHash || window.location && window.location.hash && ("#" === window.location.hash || "#max-widget" === window.location.hash) || t.$store.dispatch("session/sendNavigationEvent", {}, {
                                root: !0
                            })
                        })), window.addEventListener("resize", (function() {
                            t.resizeHandler()
                        })), this.resizeHandler(), this.injectNodeStyle()
                    }
                }
            }).call(this, i("c8ba"))
        },
        e8f9: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            }));
            var n = i("bdd0"),
                a = {
                    getUploadHandler: function(e, t) {
                        n.a.get("".concat("https://upload.tawk.to", "/upload/handle?_t=").concat((new Date).getTime()), null, null, (function(i, n) {
                            if (i) return t();
                            e(n.handle)
                        }))
                    },
                    uploadFile: function(e, t, i, a) {
                        var o = new FormData;
                        o.append("upload", i, i.name || i.filename), n.a.post("".concat("https://upload.tawk.to", "/upload/visitor-chat/visitor?handle=").concat(e, "&visitorSessionId=").concat(t), o, {}, (function(e, t) {
                            if (e) return a(!0);
                            a(t)
                        }))
                    }
                }
        },
        f406: function(e, t, i) {
            "use strict";
            i.r(t);
            t.default = {
                namespaced: !0,
                state: {
                    agentIsTyping: !1,
                    isReady: !1,
                    stack: []
                },
                getters: {
                    agentIsTyping: function(e) {
                        return e.agentIsTyping
                    },
                    isReady: function(e) {
                        return e.isReady
                    }
                },
                actions: {
                    updateEvent: function(e, t) {
                        (0, e.commit)("setEvent", t)
                    },
                    updateIsReady: function(e, t) {
                        var i = e.commit;
                        (0, e.dispatch)("session/sendNavigationEvent", {}, {
                            root: !0
                        }), i("setIsReady", t)
                    },
                    resetState: function(e) {
                        (0, e.commit)("unsetData")
                    }
                },
                mutations: {
                    setEvent: function(e, t) {
                        e[t.event] = t.value
                    },
                    setIsReady: function(e, t) {
                        e.isReady = t
                    },
                    unsetData: function(e) {
                        for (var t = {
                                agentIsTyping: !1,
                                isReady: !1,
                                stack: []
                            }, i = Object.keys(t), n = 0; n < i.length; n++) {
                            var a = i[n];
                            e[a] = t[a]
                        }
                    }
                }
            }
        },
        fad2: function(e, t, i) {
            "use strict";
            (function(e) {
                i.d(t, "a", (function() {
                    return n
                }));
                var n = {
                    isGeneratedName: function(e) {
                        return /^V[0-9]{16}$/.test(e)
                    },
                    parseVisitorName: function() {
                        return this.isGeneratedName(name) ? e.Tawk_Window.app.$i18n("chat", "defaultName") : name
                    }
                }
            }).call(this, i("c8ba"))
        }
    }
]);