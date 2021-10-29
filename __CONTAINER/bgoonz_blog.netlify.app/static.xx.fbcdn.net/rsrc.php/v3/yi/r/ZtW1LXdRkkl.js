if (self.CavalryLogger) {
    CavalryLogger.start_js(["Mx9bsBK"]);
}

__d("FleetBeaconSubscriptionNetwork_LogMutation.graphql", ["FleetBeaconSubscriptionNetwork_LogMutation_facebookRelayOperation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            c = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "FleetBeaconLogResponsePayload",
                kind: "LinkedField",
                name: "fleet_beacon_log",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "success",
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                selections: c,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                selections: c
            },
            params: {
                id: b("FleetBeaconSubscriptionNetwork_LogMutation_facebookRelayOperation"),
                metadata: {},
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}), null);
__d("FleetBeaconSubscriptionNetwork_PublishMutation_facebookRelayOperation", [], (function(a, b, c, d, e, f) {
    e.exports = "3918234471547751"
}), null);
__d("FleetBeaconSubscriptionNetwork_PublishMutation.graphql", ["FleetBeaconSubscriptionNetwork_PublishMutation_facebookRelayOperation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            c = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "FleetBeaconPublishResponsePayload",
                kind: "LinkedField",
                name: "fleet_beacon_publish",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "success",
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                selections: c,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                selections: c
            },
            params: {
                id: b("FleetBeaconSubscriptionNetwork_PublishMutation_facebookRelayOperation"),
                metadata: {},
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}), null);
__d("FleetBeaconSubscriptionNetwork_Subscription_facebookRelayOperation", [], (function(a, b, c, d, e, f) {
    e.exports = "3194829573871785"
}), null);
__d("FleetBeaconSubscriptionNetwork_Subscription.graphql", ["FleetBeaconSubscriptionNetwork_Subscription_facebookRelayOperation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            c = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "TestFleetBeaconSubscribeResponsePayload",
                kind: "LinkedField",
                name: "test_fleet_beacon_subscribe",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "client_subscription_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "test_id",
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                selections: c,
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                selections: c
            },
            params: {
                id: b("FleetBeaconSubscriptionNetwork_Subscription_facebookRelayOperation"),
                metadata: {
                    subscriptionName: "test_fleet_beacon_subscribe"
                },
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}), null);
__d("EventListenerImplForCacheStorage", ["cr:1351741"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1351741")
}), 98);
__d("BladeRunnerConfig", ["RTISubscriptionManagerConfig", "WebDriverConfig", "gkx", "isEmpty"], (function(a, b, c, d, e, f, g) {
    var h = "javascript-sandbox",
        i = "OverrideServer",
        j = "www_sandbox";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.patchRequestHeaders = function(a) {
            var b = {},
                d = c("RTISubscriptionManagerConfig").bladerunner_www_sandbox;
            if (!c("isEmpty")(c("WebDriverConfig").auxiliaryServiceInfo)) {
                var e;
                e = (e = c("WebDriverConfig").auxiliaryServiceInfo.BladeRunner) != null ? e : c("WebDriverConfig").auxiliaryServiceInfo["BladeRunner-sandcastle"];
                e != null && (typeof e.ip_address === "string" ? b[i] = e.ip_address + ":18295" : typeof e.hostname === "string" && (b[i] = e.hostname + ":18295"), typeof c("WebDriverConfig").originHost === "string" && (b[j] = "www." + c("WebDriverConfig").originHost))
            } else d != null && (b[h] = d);
            c("gkx")("307") && (b["Accept-Ack"] = "RSAck");
            for (var f in a) b[f] = a[f];
            return b
        };
        return a
    }();
    b = new a();
    d = b;
    g["default"] = d
}), 98);
__d("BladeRunnerLogger", ["FBLogger", "ODS"], (function(a, b, c, d, e, f, g) {
    var h = "bladerunner_js_client",
        i = {
            info: "info",
            warning: "warning",
            exception: "exception"
        };
    a = function() {
        function a() {
            this.setFBLoggerLevel(1)
        }
        var b = a.prototype;
        b.info = function(a) {
            this.$2 >= 2 && c("FBLogger")(h).info("BladeRunner info: %s", a), this.$3(i.info, a)
        };
        b.warn = function(a) {
            this.$2 >= 1 && c("FBLogger")(h).warn("BladeRunner warn: %s", a), this.$3(i.warning, a)
        };
        b.exception = function(a, b) {
            b === void 0 && (b = "");
            var d = b + " " + a.toString();
            this.$2 >= 0 && c("FBLogger")(h).warn("BladeRunner exception: %s, %s", b, a.toString());
            this.$3(i.exception, d)
        };
        b.trimForLogging = function(a) {
            var b = 1024;
            return typeof a === "string" && a.length > b ? "[trimmed]:" + a.substring(0, b) + "..." : a
        };
        b.bumpCounter = function(a, b) {
            b === void 0 && (b = 1), d("ODS").bumpEntityKey(2966, "BladeRunnerClient", a, b)
        };
        b.setClientSessionId = function(a) {
            this.$1 = a
        };
        b.setFBLoggerLevel = function(a) {
            this.$2 = a
        };
        b.$3 = function(a, b) {};
        return a
    }();
    b = new a();
    e = b;
    g["default"] = e
}), 98);
__d("BladeRunnerTypes", [], (function(a, b, c, d, e, f, g) {
    a = {
        REQUEST: 1,
        DATA: 2,
        DATA_ACK: 3,
        STATUS_UPDATE: 4,
        REWRITE_REQUEST: 5,
        LOG: 6
    };
    b = {
        BLADE_RUNNER: 1,
        GATEWAY: 2
    };
    g.StreamFrameType = a;
    g.StreamRequestType = b
}), 98);
__d("BladeRunnerTypesInternal", ["Base64", "BladeRunnerLogger", "BladeRunnerTypes"], (function(a, b, c, d, e, f, g) {
    var h = function() {
            function a() {}
            var b = a.prototype;
            b.getHeaders = function() {
                if (this.headers != null) return this.headers;
                throw new Error("Expected headers")
            };
            b.getInstrumentationData = function() {
                if (this.instrumentationData != null && this.instrumentationData.length > 0) try {
                    return JSON.parse(this.instrumentationData)
                } catch (a) {
                    return null
                } else return null
            };
            b.updateRetryRequestPayload = function(a) {
                a != null ? this.payload = c("Base64").encode(a) : this.payload = null
            };
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.requestType = o(b.requestType);
                c.payload = r(b.payload);
                c.headers = u(b.headers);
                c.extraHeader = r(b.extraHeader);
                c.requestTarget = r(b.requestTarget);
                c.instrumentationData = r(b.instrumentationData);
                return c
            };
            return a
        }(),
        i = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.dataId = p(b.dataId);
                c.data = r(b.data);
                c.shouldAck = w(b.shouldAck);
                return c
            };
            var b = a.prototype;
            b.rawData = function() {
                if (this.data == null) throw new Error("Expected data");
                return this.data
            };
            b.rawDataSize = function() {
                return this.data == null ? 0 : this.data.length
            };
            b.decodeData = function() {
                if (this.data == null) throw new Error("Expected data");
                return c("Base64").decode(this.data)
            };
            b.setData = function(a) {
                this.data = c("Base64").encode(a)
            };
            b.getInstrumentationData = function() {
                if (this.instrumentationData != null) return JSON.parse(this.instrumentationData);
                else return null
            };
            return a
        }(),
        j = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.dataId = o(b.dataId);
                c.success = v(b.success);
                c.message = r(b.message);
                c.code = p(b.code);
                return c
            };
            return a
        }();
    j.ACK_CODE_LANDED_AND_ACCEPTED = 20;
    j.ACK_CODE_LANDED_BUT_NOT_ACCEPTED = 21;
    j.ACK_CODE_FAILED_TO_LAND = 50;
    var k = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = p(b.streamId);
                c.message = r(b.message);
                return c
            };
            return a
        }(),
        l = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.status = o(b.status);
                c.message = r(b.message);
                c.code = p(b.code);
                c.shouldRetry = w(b.shouldRetry);
                c.retryDelayMs = p(b.retryDelayMs);
                return c
            };
            return a
        }(),
        m = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.newBody = r(b.newBody);
                c.newExtraHeader = r(b.newExtraHeader);
                c.patchExtraHeader = r(b.patchExtraHeader);
                c.killBody = w(b.killBody);
                c.temporary = w(b.temporary);
                return c
            };
            return a
        }(),
        n = function() {
            function a() {}
            var b = a.prototype;
            b.getRequest = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.REQUEST && this.request != null) return this.request;
                throw new Error("Expected request")
            };
            b.getData = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.DATA && this.data != null) return this.data;
                throw new Error("Expected data")
            };
            b.getDataAck = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.dataAck != null) return this.dataAck;
                throw new Error("Expected dataAck")
            };
            b.getStatusUpdate = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE && this.statusUpdate != null) return this.statusUpdate;
                throw new Error("Expected status update")
            };
            b.getLog = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.LOG && this.log != null) return this.log;
                throw new Error("Expected log")
            };
            b.getRewriteRequest = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST && this.rewriteRequest != null) return this.rewriteRequest;
                throw new Error("Expected rewrite request")
            };
            b.getStreamId = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.REQUEST && this.request != null) return this.request.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.DATA && this.data != null) return this.data.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE && this.statusUpdate != null) return this.statusUpdate.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.LOG && this.log != null) return this.log.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST && this.rewriteRequest != null) return this.rewriteRequest.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.dataAck != null) return this.dataAck.streamId;
                throw new Error("Frame with unexpected type")
            };
            b.isInstrumented = function() {
                if (this.type === d("BladeRunnerTypes").StreamFrameType.REQUEST) return this.getRequest().instrumentationData != null;
                else if (this.type === d("BladeRunnerTypes").StreamFrameType.DATA) return this.getData().instrumentationData != null;
                else return !1
            };
            a.readObject = function(b) {
                var e = new a();
                e.type = o(b.type);
                switch (e.type) {
                    case d("BladeRunnerTypes").StreamFrameType.REQUEST:
                        e.request = h.readObject(s(b.request));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.DATA:
                        e.data = i.readObject(s(b.data));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                        e.dataAck = j.readObject(s(b.dataAck));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                        e.statusUpdate = l.readObject(s(b.statusUpdate));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.LOG:
                        e.log = k.readObject(s(b.log));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
                        e.rewriteRequest = m.readObject(s(b.rewriteRequest));
                        break;
                    default:
                        c("BladeRunnerLogger").warn("Frame with unexpected type: " + e.type);
                        return null
                }
                return e
            };
            a.newRequestFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.REQUEST;
                c.request = b;
                return c
            };
            a.newDataFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.DATA;
                c.data = b;
                return c
            };
            a.newDataAckFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.DATA_ACK;
                c.dataAck = b;
                return c
            };
            a.newStatusUpdateFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;
                c.statusUpdate = b;
                return c
            };
            a.newLogFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.LOG;
                c.log = b;
                return c
            };
            a.newRewriteRequestFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST;
                c.rewriteRequest = b;
                return c
            };
            return a
        }();
    a = function() {
        function a(a, b, c) {
            this.batchId = a, this.frames = b, this.instrumentationData = c
        }
        var b = a.prototype;
        b.getFrames = function() {
            if (this.frames != null) return this.frames;
            throw new Error("Expected frames")
        };
        b.getInstrumentationData = function() {
            if (this.instrumentationData != null) try {
                return JSON.parse(this.instrumentationData)
            } catch (a) {
                return null
            } else return null
        };
        b.write = function() {
            return JSON.stringify(this)
        };
        b.isInstrumented = function() {
            return this.getFrames().some(function(a) {
                return a.isInstrumented()
            })
        };
        a.read = function(b) {
            b = JSON.parse(b);
            var c = b.batchId || 0,
                d = [];
            for (var e = b.frames, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                h = n.readObject(h);
                h != null && d.push(h)
            }
            h = b.instrumentationData || null;
            return new a(c, d, h)
        };
        return a
    }();

    function o(a) {
        if (typeof a === "number") return a;
        throw new Error("Expected number")
    }

    function p(a) {
        return a == null ? null : o(a)
    }

    function q(a) {
        if (typeof a === "string") return a;
        throw new Error("Expected string")
    }

    function r(a) {
        return a == null ? null : q(a)
    }

    function s(a) {
        if (typeof a === "object" && a != null) return a;
        throw new Error("Expected object")
    }

    function t(a) {
        if (typeof a === "object" && a != null) {
            var b = a,
                c = {};
            Object.keys(b).forEach(function(a) {
                var d = b[a];
                typeof d === "string" && d != null && (c[a] = d)
            });
            return c
        }
        throw new Error("Expected string map")
    }

    function u(a) {
        return a == null ? null : t(a)
    }

    function v(a) {
        if (typeof a === "boolean" && a != null) return a;
        throw new Error("Expected boolean")
    }

    function w(a) {
        return a == null ? null : v(a)
    }
    g.GatewayStreamRequest = h;
    g.GatewayStreamData = i;
    g.GatewayStreamDataAck = j;
    g.GatewayStreamLog = k;
    g.GatewayStreamStatusUpdate = l;
    g.GatewayStreamRewriteRequest = m;
    g.GatewayStreamFrame = n;
    g.GatewayStreamBatch = a
}), 98);
__d("RequestStreamE2EClientLoggerEvent", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        RECEIVED: "received",
        SENT: "sent",
        FAILURE: "failure",
        PUBACK: "puback"
    });
    f["default"] = a
}), 66);
__d("RequestStreamE2EClientLoggerMessageType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        REQUEST_STREAM: "request_stream",
        AMENDMENT: "amendment",
        AMENDMENT_ACK: "amendment_ack",
        CANCEL: "cancel",
        RESPONSE: "response",
        RESPONSE_ACK: "response_ack",
        TIMED_REQUEST: "timed_request",
        INTERRUPT: "interrupt"
    });
    f["default"] = a
}), 66);
__d("BladeRunnerEventHandler", ["BladeRunnerLogger", "BladeRunnerStreamStatus", "BladeRunnerTypes", "BladeRunnerTypesInternal", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    var h = 1e3;
    a = function() {
        function a(a, b, c) {
            this.$2 = a, this.$1 = b, this.$3 = c
        }
        var b = a.prototype;
        b.onProxyResponse = function(a) {
            this.$4(a);
            var b = [];
            for (var e = a.getFrames(), f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                this.$2.witnessFrame(h) && b.push(h)
            }
            h = this.$2.getRequest();
            (g = h.e2eLogger) == null ? void 0 : g.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").SENT, {}, (f = a.getInstrumentationData()) == null ? void 0 : f.auxId);
            b.length > 0 && this.$5(new(d("BladeRunnerTypesInternal").GatewayStreamBatch)(a.batchId, b, a.instrumentationData))
        };
        b.onDisconnect = function() {
            this.$2.resetErrors();
            var a = new(d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
            a.streamId = this.$2.getRequest().streamId;
            a.status = d("BladeRunnerStreamStatus").StreamStatus.CLOSED;
            a.shouldRetry = !0;
            a.retryDelayMs = 0;
            a = new(d("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)]);
            this.onProxyResponse(a)
        };
        b.$4 = function(a) {
            var b = this;
            a = a.getFrames().filter(function(a) {
                return a.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE
            });
            for (var a = a, e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= a.length) break;
                    g = a[f++]
                } else {
                    f = a.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                g = g.getStatusUpdate();
                if (g.status == d("BladeRunnerStreamStatus").StreamStatus.CLOSED || g.status == d("BladeRunnerStreamStatus").StreamStatus.REJECTED) {
                    this.$2.onError();
                    var i = g.shouldRetry != null && g.shouldRetry,
                        j = g.message != null ? g.message : "null";
                    if (i && this.$2.getErrorCount() <= this.$2.getRetriesAllowed()) {
                        g.status = d("BladeRunnerStreamStatus").StreamStatus.STOPPED;
                        var k = h;
                        g.retryDelayMs != null && (k = g.retryDelayMs);
                        c("BladeRunnerLogger").info("Can retry: stream " + g.streamId + " closed with status " + g.status + ", message " + j + ". Error count: " + this.$2.getErrorCount() + ", retryDelay " + k + "ms. Already retrying: " + this.$2.getRetryRequestScheduled().toString());
                        this.$2.getRetryRequestScheduled() ? c("BladeRunnerLogger").bumpCounter("stream_closed_already_retrying") : (c("BladeRunnerLogger").bumpCounter("stream_closed_will_retry"), this.$2.setRetryRequestScheduled(!0), k > 0 ? c("setTimeoutAcrossTransitions")(function() {
                            return b.$6()
                        }, k) : this.$6())
                    } else c("BladeRunnerLogger").info("Will not retry: stream " + g.streamId + " closed with status " + g.status + ", message " + j + ". Error count: " + this.$2.getErrorCount() + ", shouldRetry " + i.toString() + ". Already retrying: " + this.$2.getRetryRequestScheduled().toString()), i ? c("BladeRunnerLogger").bumpCounter("stream_closed_retry_exceeded") : c("BladeRunnerLogger").bumpCounter("stream_closed_no_retry"), this.$3.removeStream(g.streamId)
                }
            }
        };
        b.$6 = function() {
            this.$2.setRetryRequestScheduled(!1);
            if (this.$2.isAlive()) {
                var a = this.$1.getUpdatedRequestBody();
                a != null && this.$2.updateRetryRequestPayload(a);
                this.$3.sendRetryStreamRequest(this.$2)
            }
        };
        b.$5 = function(a) {
            c("BladeRunnerLogger").bumpCounter("send_to_handler");
            var b = [];
            this.$1.onBatch(a);
            for (var a = a.getFrames(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= a.length) break;
                    g = a[f++]
                } else {
                    f = a.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                try {
                    switch (g.type) {
                        case d("BladeRunnerTypes").StreamFrameType.DATA:
                            this.$1.onData(g.getData());
                            b.push(g.getData());
                            break;
                        case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                            this.$1.onStatusUpdate(g.getStatusUpdate().status);
                            break;
                        case d("BladeRunnerTypes").StreamFrameType.LOG:
                            g = g.getLog().message;
                            g != null && this.$1.onLog(g);
                            break;
                        case d("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                            break;
                        default:
                            throw new Error("Frame with unexpected type")
                    }
                } catch (a) {
                    c("BladeRunnerLogger").bumpCounter("send_to_handler_error"), c("BladeRunnerLogger").exception(a, "Failed sending frame to stream handler")
                }
            }
            this.$7(b)
        };
        b.$7 = function(a) {
            var b = [];
            for (var c = 0; c < a.length; c++) {
                var e = a[c];
                if (e.shouldAck === !0 && e.dataId != null) {
                    var f = new(d("BladeRunnerTypesInternal").GatewayStreamDataAck)();
                    f.streamId = e.streamId;
                    f.dataId = e.dataId;
                    f.success = !0;
                    b.push(f)
                }
            }
            this.$3.sendDataAcks(b)
        };
        return a
    }();
    g["default"] = a
}), 98);
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
__d("isFastRefreshEnabledForCurrentDomain", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return !1
    }
    f["default"] = a
}), 66);
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
__d("RequestStreamTransport", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored(["WEB_BR_MQTT", "WEB_RS_MQTT", "WEB_RS_STARGATE"]);
    f.RequestStreamTransport = a
}), 66);
__d("RtiRequestStreamE2eClientBatchFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("819");
    c = b("FalcoLoggerInternal").create("rti_request_stream_e2e_client_batch", a);
    e.exports = c
}), null);
__d("RtiRequestStreamE2eClientFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1857112");
    c = b("FalcoLoggerInternal").create("rti_request_stream_e2e_client", a);
    e.exports = c
}), null);
__d("RequestStreamE2ELogger", ["ConstUriUtils", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "RtiRequestStreamE2eClientBatchFalcoEvent", "RtiRequestStreamE2eClientFalcoEvent", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = ["FBGQLS:COMMENT_CREATE_SUBSCRIBE", "FBGQLS:COMMENT_LIKE_SUBSCRIBE", "FBGQLS:FEEDBACK_COMMENT_PERMISSION_TOGGLE_SUBSCRIBE", "FBGQLS:FEEDBACK_TYPING_SUBSCRIBE"],
        i = 0;

    function j() {
        var a = Date.now();
        i >= a ? i += 1 : i = a;
        return i.toString()
    }
    var k = function() {
        function a(a, b, c, e, f, g, h, i, j, k) {
            this.$10 = [];
            this.$11 = !1;
            this.$1 = a;
            this.$2 = b;
            this.$3 = c;
            this.$4 = e;
            this.$5 = f;
            this.$6 = g;
            this.$7 = h;
            this.$8 = i;
            this.$9 = j;
            this.$12 = (a = k) != null ? a : !1;
            b = d("ConstUriUtils").getUri(window.location.href);
            b && (this.$13 = b.getDomain())
        }
        var b = a.prototype;
        b.logE2EEvent = function(a, b, c, d) {
            c === void 0 && (c = null);
            d === void 0 && (d = null);
            a = {
                request_id: this.$1,
                resume_id: "0",
                transport: this.$2,
                method: this.$3,
                use_case: this.$4,
                request_log_context: this.$5,
                force_log_context: this.$6,
                e2e_sample_rate: this.$7,
                message_type: a,
                event: b,
                timestamp_ms: j(),
                aux_id: d,
                additional_data: c,
                dgw_stream_group_logging_id: this.$8,
                dgw_count_prior_streams_in_group: this.$9,
                domain: this.$13
            };
            this.$14(a)
        };
        b.$14 = function(a) {
            if (!this.$12) {
                c("RtiRequestStreamE2eClientFalcoEvent").log(function() {
                    return a
                });
                return
            }
            this.$10.push(a);
            if (this.$11 || a.event == c("RequestStreamE2EClientLoggerEvent").FAILURE || a.message_type == c("RequestStreamE2EClientLoggerMessageType").RESPONSE) {
                var b = {
                    events: this.$10
                };
                c("RtiRequestStreamE2eClientBatchFalcoEvent").log(function() {
                    return b
                });
                this.$10 = [];
                this.$11 = !0
            }
        };
        b.getRequestId = function() {
            return this.$1
        };
        return a
    }();

    function a(a, b, d) {
        if (a == null || a.method == null) return null;
        var e = !1;
        h.includes(a.method) && !c("gkx")("2810") && (e = !0);
        if (b == null || b.length == 0) return null;
        b = JSON.parse(b);
        return b.requestId == null ? null : new k(b.requestId, d, a.method, l(a.method, a), b.requestLogContext, b.forceLogContext, b.sampleRate, b.dgwStreamGroupLoggingId, b.dgwCountPriorStreamsInGroup, e)
    }

    function l(a, b) {
        if (a === "FBLQ" && b.config_id) return b.config_id;
        if (a === "SKY") {
            if (b.topic) {
                var c = b.topic.lastIndexOf("/");
                return c > 0 ? b.topic.substr(0, c) : b.topic
            }
            return
        }
        return a
    }

    function b(a, b, d, e, f) {
        f === void 0 && (f = null);
        if (a == null || a.requestId == null || a.clientLoggingDisabled != null) return;
        var g = {
            request_id: a.requestId,
            resume_id: "0",
            transport: b,
            e2e_sample_rate: a.sampleRate,
            message_type: d,
            event: e,
            timestamp_ms: j(),
            aux_id: a.auxId,
            additional_data: f
        };
        c("RtiRequestStreamE2eClientFalcoEvent").log(function() {
            return g
        })
    }
    g.RequestStreamE2ELogger = k;
    g.createStreamLogger = a;
    g.logRequestStreamE2EEventStatic = b
}), 98);
__d("BladeRunnerSocket", ["BladeRunnerEventHandler", "BladeRunnerLogger", "BladeRunnerStreamStatus", "BladeRunnerTypes", "BladeRunnerTypesInternal", "CurrentUser", "FBMqttChannel", "MqttPublishListener", "Promise", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "RequestStreamE2ELogger", "RequestStreamTransport", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "Connected",
        i = "Disconnected",
        j = 511 * 1024,
        k = "/br_sr",
        l = "/sr_res",
        m = null;

    function n(a) {
        var b;
        switch (a.type) {
            case d("BladeRunnerTypes").StreamFrameType.REQUEST:
                return (b = a.request) == null ? void 0 : b.getInstrumentationData();
            case d("BladeRunnerTypes").StreamFrameType.DATA:
                return (b = a.data) == null ? void 0 : b.getInstrumentationData()
        }
        return null
    }

    function o(a) {
        switch (a.type) {
            case d("BladeRunnerTypes").StreamFrameType.REQUEST:
                return c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM;
            case d("BladeRunnerTypes").StreamFrameType.DATA:
                return c("RequestStreamE2EClientLoggerMessageType").AMENDMENT
        }
        return null
    }

    function p(a) {
        if (a === null) return null;
        switch (a) {
            case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                return "Accepted";
            case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
                return "Rejected";
            case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
                return "Started";
            case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                return "Stopped";
            case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
                return "Closed"
        }
        return null
    }

    function q(a) {
        var b = {};
        a == null ? void 0 : (a = a.frames) == null ? void 0 : a.forEach(function(a) {
            if (a.type === d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE) {
                a = (a = a.statusUpdate) == null ? void 0 : a.status;
                a = p(a);
                a !== null && (b.flow_status = a)
            }
        });
        return b
    }

    function r(a, b) {
        var c;
        switch (a.type) {
            case d("BladeRunnerTypes").StreamFrameType.REQUEST:
                b.data_base64_size = (c = a.request) == null ? void 0 : (c = c.payload) == null ? void 0 : (c = c.length) == null ? void 0 : c.toString();
                break;
            case d("BladeRunnerTypes").StreamFrameType.DATA:
                b.data_base64_size = (c = a.data) == null ? void 0 : (b = c.rawDataSize()) == null ? void 0 : b.toString();
                break
        }
        return null
    }

    function s(a, b, e) {
        var f = n(a);
        if (f == null) return;
        var g = o(a);
        if (g == null) return;
        var h = null;
        switch (b) {
            case d("MqttPublishListener").MqttPublishEvent.SENT:
                h = c("RequestStreamE2EClientLoggerEvent").SENT;
                break;
            case d("MqttPublishListener").MqttPublishEvent.ACKED:
                h = c("RequestStreamE2EClientLoggerEvent").PUBACK;
                break;
            case d("MqttPublishListener").MqttPublishEvent.NOT_ACKED:
            case d("MqttPublishListener").MqttPublishEvent.NOT_CONNECTED:
            case d("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR:
                h = c("RequestStreamE2EClientLoggerEvent").FAILURE;
                e.reason == null && (e.reason = b);
                break
        }
        if (h == null) return;
        r(a, e);
        if (((b = a.request) == null ? void 0 : b.e2eLogger) != null && f.clientLoggingDisabled == null) {
            (b = a.request) == null ? void 0 : b.e2eLogger.logE2EEvent(g, h, e, f.auxId)
        } else d("RequestStreamE2ELogger").logRequestStreamE2EEventStatic(f, d("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT, g, h, e)
    }
    a = function() {
        function a(a) {
            this.$1 = [], this.$2 = 0, this.$3 = 0, this.$4 = null, this.$5 = 0, this.$6 = new Map(), this.$7 = a != null ? a : c("FBMqttChannel"), this.$8 = new Map(), c("BladeRunnerLogger").setClientSessionId(c("uuid")()), this.$9()
        }
        a.get = function() {
            m == null && (m = new a(c("FBMqttChannel")));
            return m
        };
        var e = a.prototype;
        e.sendNewStreamRequest = function(b, d) {
            d = new(c("BladeRunnerEventHandler"))(b, d, this);
            var e = b.getRequest();
            this.$6.set(e.streamId, d);
            if (!this.$10()) {
                this.$11(d, e.streamId);
                return
            }
            this.getStreamCount() <= a.maxStreamCount ? this.$12(e) : (c("BladeRunnerLogger").bumpCounter("socket_request_throttled_max_streams"), c("BladeRunnerLogger").warn("Maximum stream count reached, will not send request: " + JSON.stringify(b.getRequest().getHeaders())), this.$11(d, e.streamId))
        };
        e.sendRetryStreamRequest = function(a) {
            this.$12(a.getRequest())
        };
        e.sendCancel = function(a) {
            c("BladeRunnerLogger").bumpCounter("socket_send_cancel");
            var b = new(d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
            b.streamId = a.streamId;
            b.status = d("BladeRunnerStreamStatus").StreamStatus.CLOSED;
            this.$13(b, a);
            this.removeStream(a.streamId)
        };
        e.sendAmendment = function(a, b, e) {
            c("BladeRunnerLogger").bumpCounter("socket_send_amendment");
            var f = new(d("BladeRunnerTypesInternal").GatewayStreamData)();
            f.streamId = a;
            f.setData(b);
            e != null && (f.instrumentationData = e);
            this.$14(f)
        };
        e.sendAmendmentWithAck = function(a, e, f) {
            var g = this;
            c("BladeRunnerLogger").bumpCounter("socket_send_amendment");
            var h = this.$15(),
                i = new(d("BladeRunnerTypesInternal").GatewayStreamData)();
            i.streamId = a;
            i.setData(e);
            i.shouldAck = !0;
            i.dataId = h;
            f != null && (i.instrumentationData = f);
            a = new(b("Promise"))(function(a, b) {
                g.$8.set(h, {
                    resolve: a,
                    reject: b
                })
            });
            this.$14(i);
            return a
        };
        e.$14 = function(a) {
            this.$1.push(d("BladeRunnerTypesInternal").GatewayStreamFrame.newDataFrame(a)), this.$16()
        };
        e.sendDataAcks = function(a) {
            c("BladeRunnerLogger").bumpCounter("socket_send_data_ack", a.length), this.$17(a)
        };
        e.removeStream = function(a) {
            this.$6["delete"](a)
        };
        e.getStreamCount = function() {
            return this.$6.size
        };
        e.getNextStreamId = function() {
            this.$5++;
            return this.$5
        };
        e.onMQTTStateChanged = function(a) {
            this.$16();
            if (a != i && a != h || this.$4 == a) return;
            this.$4 = a;
            c("BladeRunnerLogger").info("MQTTStateChanged: " + a);
            a == i ? (c("BladeRunnerLogger").bumpCounter("mqtt_state_disconnected"), this.$18()) : a == h && c("BladeRunnerLogger").bumpCounter("mqtt_state_connected")
        };
        e.$12 = function(a) {
            c("BladeRunnerLogger").bumpCounter("socket_send_request");
            this.$1.push(d("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(a));
            if (!this.$16()) {
                (a = a.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                    reason: "MQTT Not Connected"
                })
            }
        };
        e.$13 = function(a, b) {
            this.$1.push(d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a));
            if (this.$16()) {
                (a = b.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").CANCEL, c("RequestStreamE2EClientLoggerEvent").SENT)
            }
        };
        e.$17 = function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.$1.push(d("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(c))
            }
            this.$16()
        };
        e.$19 = function() {
            this.$2++;
            return this.$2
        };
        e.$15 = function() {
            this.$3++;
            return this.$3
        };
        e.$16 = function() {
            var a = !1;
            if (this.$7.getConnectionState() === h && this.$1.length > 0) try {
                this.$20(this.$1), a = !0
            } catch (a) {} finally {
                this.$1 = []
            }
            return a
        };
        e.$20 = function(a) {
            var b = this,
                e = new(d("BladeRunnerTypesInternal").GatewayStreamBatch)(this.$19(), a),
                f = e.write();
            if (f.length > j) {
                var g = Math.floor(a.length / 2);
                if (g === 0) {
                    a.forEach(function(a) {
                        return s(a, d("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR, {
                            reason: "too long"
                        })
                    });
                    var h = new Error("Publish is too long: " + f.length);
                    h.stack;
                    this.$21(e, h, "Publish is too long");
                    throw h
                }
                this.$20(a.slice(0, g));
                this.$20(a.slice(g, a.length))
            } else try {
                c("BladeRunnerLogger").info("send message to " + k + " (" + f.length + " bytes)");
                h = {
                    qos: 1,
                    skipBuffer: !1
                };
                if (e.isInstrumented()) {
                    var i = Date.now();
                    h.listener = {
                        onEvent: function(b) {
                            var c = (Date.now() - i).toString();
                            a.forEach(function(a) {
                                s(a, b, {
                                    latency: c
                                })
                            })
                        }
                    }
                }
                this.$7.publish(k, f, h)["catch"](function(a) {
                    b.$21(e, a, "Failed publishing to MQTT")
                });
                c("BladeRunnerLogger").bumpCounter("mqtt_publish_success")
            } catch (a) {
                this.$21(e, a, "Failed publishing to MQTT");
                throw a
            }
        };
        e.$9 = function() {
            var a = this;
            c("BladeRunnerLogger").info("Starting socket with endpoint " + this.$7.getEndpoint() + " useragent " + navigator.userAgent);
            this.onMQTTStateChanged(this.$7.getConnectionState());
            this.$7.subscribeChannelEvents({
                onMQTTStateChanged: function(b) {
                    a.onMQTTStateChanged(b)
                },
                onJSError: function(a) {
                    var b = a != null && typeof a.isRecoverable === "boolean" ? a.isRecoverable : !1;
                    b ? c("BladeRunnerLogger").bumpCounter("mqtt_channel_recoverable_error") : (c("BladeRunnerLogger").warn("JS error in MQTTChannel: " + (typeof a == "object" && a != null ? a.toString() : "unknown error") + ", " + JSON.stringify(a)), c("BladeRunnerLogger").bumpCounter("mqtt_channel_error"))
                }
            });
            this.$7.subscribe(k, function(a) {
                throw new Error("Unexpected response: " + k + " " + a.toString())
            });
            this.$7.subscribe(l, function(b) {
                a.$22(b)
            })
        };
        e.$22 = function(a) {
            a = d("BladeRunnerTypesInternal").GatewayStreamBatch.read(a);
            this.processBatch(a)
        };
        e.$21 = function(a, b, e) {
            for (var a = a.getFrames(), f = Array.isArray(a), g = 0, a = f ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= a.length) break;
                    h = a[g++]
                } else {
                    g = a.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                if (h.type === d("BladeRunnerTypes").StreamFrameType.REQUEST) {
                    var i = h.getRequest(),
                        j = this.$6.get(i.streamId);
                    j != null && this.$23(j, i.streamId, d("BladeRunnerStreamStatus").StreamStatus.CLOSED, !0, null)
                } else if (h.type === d("BladeRunnerTypes").StreamFrameType.DATA) {
                    j = h.getData();
                    i = j.dataId;
                    if (j.shouldAck != null && j.shouldAck && i != null) {
                        h = new(d("BladeRunnerTypesInternal").GatewayStreamDataAck)();
                        h.streamId = j.streamId;
                        h.dataId = i;
                        h.success = !1;
                        h.code = d("BladeRunnerTypesInternal").GatewayStreamDataAck.ACK_CODE_FAILED_TO_LAND;
                        h.message = e;
                        this.$24(h)
                    }
                }
            }
            c("BladeRunnerLogger").info("Failed publishing to MQTT: " + b.message);
            c("BladeRunnerLogger").bumpCounter("mqtt_publish_error")
        };
        e.$24 = function(a) {
            var b = this.$8.get(a.dataId);
            b != null && (this.$8["delete"](a.dataId), a.success ? b.resolve(!0) : a.code === d("BladeRunnerTypesInternal").GatewayStreamDataAck.ACK_CODE_LANDED_BUT_NOT_ACCEPTED ? b.resolve(!1) : b.reject(a.message))
        };
        e.processBatch = function(a) {
            try {
                d("RequestStreamE2ELogger").logRequestStreamE2EEventStatic(a.getInstrumentationData(), d("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT, c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").RECEIVED, q(a));
                c("BladeRunnerLogger").bumpCounter("socket_process_batch");
                var b = JSON.stringify(a);
                c("BladeRunnerLogger").info("Received batch (" + b.length + " bytes)");
                b = null;
                for (var e = a.getFrames(), f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= e.length) break;
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    var i = h.getStreamId();
                    b == null && (b = i);
                    if (i != null && b != i) throw new Error("Received batch with frames for multiple streams");
                    h.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.$24(h.getDataAck())
                }
                if (b != null) {
                    i = this.$6.get(b);
                    i != null ? i.onProxyResponse(a) : c("BladeRunnerLogger").info("Received batch with frames for unknown stream id: " + b)
                } else c("BladeRunnerLogger").info("Received batch with no frames")
            } catch (a) {
                c("BladeRunnerLogger").exception(a, "Failed processing batch from MQTT");
                c("BladeRunnerLogger").bumpCounter("socket_process_batch_error");
                throw a
            }
        };
        e.$18 = function() {
            this.$6.forEach(function(a, b, c) {
                a.onDisconnect()
            })
        };
        e.$11 = function(a, b) {
            this.$23(a, b, d("BladeRunnerStreamStatus").StreamStatus.REJECTED, !1, 0)
        };
        e.$23 = function(a, b, c, e, f) {
            var g = new(d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
            g.streamId = b;
            g.status = c;
            g.shouldRetry = e;
            g.retryDelayMs = f;
            b = new(d("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(g)]);
            a.onProxyResponse(b)
        };
        e.$10 = function() {
            if (!c("CurrentUser").isLoggedIn()) {
                c("BladeRunnerLogger").bumpCounter("request_stream_user_logged_out");
                return !1
            }
            return !0
        };
        return a
    }();
    a.maxStreamCount = 2e3;
    g["default"] = a
}), 98);
__d("IRequestStreamRef", [], (function(a, b, c, d, e, f) {
    "use strict"
}), null);
__d("BladeRunnerStream", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getStreamHandler = function() {
            return this.$1
        };
        c.cancel = function() {};
        c.amendWithAck = function(a) {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", !1);
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        c.amendFireAndForget = function(a) {};
        c.amendWithoutAck = function(a) {};
        c.start = function() {
            return b("Promise").resolve()
        };
        c.isAlive = function() {
            return !1
        };
        c.canAmend = function() {
            return !1
        };
        c.getStatus = function() {
            return null
        };
        c.getStreamId = function() {
            return 0
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("BladeRunnerStreamState", ["BladeRunnerLogger", "BladeRunnerStreamStatus", "BladeRunnerTypes"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = a, this.$2 = null, this.$3 = 0, this.$4 = !1, this.$5 = 0, this.$6 = !1
        }
        var b = a.prototype;
        b.getRequest = function() {
            return this.$1
        };
        b.updateRetryRequestPayload = function(a) {
            this.$1.updateRetryRequestPayload(a)
        };
        b.isAlive = function() {
            return !(this.$2 == d("BladeRunnerStreamStatus").StreamStatus.CLOSED || this.$2 == d("BladeRunnerStreamStatus").StreamStatus.REJECTED)
        };
        b.canAmend = function() {
            return this.$2 == d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED || this.$2 == d("BladeRunnerStreamStatus").StreamStatus.STARTED || this.$2 == d("BladeRunnerStreamStatus").StreamStatus.STOPPED
        };
        b.getLastStatus = function() {
            return this.$2
        };
        b.setLastStatus = function(a) {
            this.$2 = a
        };
        b.onError = function() {
            this.$3 += 1
        };
        b.getErrorCount = function() {
            return this.$3
        };
        b.resetErrors = function() {
            this.$3 = 0
        };
        b.getRetryRequestScheduled = function() {
            return this.$6
        };
        b.setRetryRequestScheduled = function(a) {
            this.$6 = a
        };
        b.witnessFrame = function(a) {
            switch (a.type) {
                case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                    var b = a.getStatusUpdate(),
                        c = !0;
                    switch (b.status) {
                        case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                            c = !this.$4;
                            this.$4 || (this.$4 = !0);
                            break;
                        case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
                            c = this.getLastStatus() != d("BladeRunnerStreamStatus").StreamStatus.STARTED;
                            break;
                        case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                            c = this.getLastStatus() == d("BladeRunnerStreamStatus").StreamStatus.STARTED;
                            break;
                        case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
                        case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
                        default:
                            c = !0
                    }
                    this.setLastStatus(b.status);
                    return c;
                case d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
                    this.$7(a.getRewriteRequest());
                    return !1;
                default:
                    return !0
            }
        };
        b.setRetriesAllowed = function(a) {
            this.$5 = a
        };
        b.getRetriesAllowed = function() {
            return this.$5
        };
        b.$7 = function(a) {
            if (!(a.temporary != null || a.temporary == !0)) {
                a.newBody != null && (this.$1.payload = a.newBody);
                a.newExtraHeader != null && (this.$1.extraHeader = a.newExtraHeader, this.$1.headers = JSON.parse(a.newExtraHeader));
                if (a.patchExtraHeader != null) try {
                    var b = JSON.parse(a.patchExtraHeader),
                        d = this.$1.extraHeader != null ? JSON.parse(this.$1.extraHeader) : {};
                    this.$1.headers == null && (this.$1.headers = {});
                    var e = Object.keys(b);
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        this.$1.headers[g] = b[g];
                        d[g] = b[g]
                    }
                    this.$1.extraHeader = JSON.stringify(d)
                } catch (b) {
                    c("BladeRunnerLogger").warn("Failed to patch header: " + a.patchExtraHeader)
                }
                a.killBody != null && a.killBody == !0 && (this.$1.payload = null)
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("BladeRunnerSocketStream", ["BladeRunnerStream", "BladeRunnerStreamState", "BladeRunnerStreamStatus", "Promise", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "regeneratorRuntime", "uuid"], (function(a, b, c, d, e, f, g) {
    var h = 4,
        i = {
            reason: "stream_dead"
        };
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);

        function e(b, d, e) {
            b = a.call(this, b) || this;
            b.$BladeRunnerSocketStream1 = e;
            b.$BladeRunnerSocketStream2 = new(c("BladeRunnerStreamState"))(d);
            b.$BladeRunnerSocketStream2.setRetriesAllowed(h);
            return b
        }
        var f = e.prototype;
        f.start = function() {
            var a = this;
            return new(b("Promise"))(function(b) {
                a.send(), b()
            })
        };
        f.send = function() {
            var a, b = this.$BladeRunnerSocketStream2.getRequest();
            (a = b.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                data_base64_size: (a = b.payload) == null ? void 0 : (b = a.length) == null ? void 0 : b.toString()
            });
            this.$BladeRunnerSocketStream1.sendNewStreamRequest(this.$BladeRunnerSocketStream2, this.getStreamHandler())
        };
        f.amendWithAck = function(a) {
            var d, e, f, g, h, j, k;
            return b("regeneratorRuntime").async(function(l) {
                while (1) switch (l.prev = l.next) {
                    case 0:
                        e = this.$BladeRunnerSocketStream2.getRequest();
                        f = e.getInstrumentationData();
                        f && (f.auxId = c("uuid")(), (g = e.e2eLogger) == null ? void 0 : g.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                            data_size: a == null ? void 0 : (h = a.length) == null ? void 0 : h.toString()
                        }, f.auxId));
                        if (!this.canAmend()) {
                            l.next = 6;
                            break
                        }
                        f && ((j = e.e2eLogger) == null ? void 0 : j.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").SENT, {
                            data_size: a == null ? void 0 : (k = a.length) == null ? void 0 : k.toString()
                        }, f.auxId));
                        return l.abrupt("return", this.$BladeRunnerSocketStream1.sendAmendmentWithAck(e.streamId, this.$BladeRunnerSocketStream3(a), f == null ? null : JSON.stringify(f)));
                    case 6:
                        (d = e.e2eLogger) == null ? void 0 : d.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").FAILURE, i, f == null ? void 0 : f.auxId);
                        return l.abrupt("return", b("Promise").reject("Stream is closed or not accepted"));
                    case 8:
                    case "end":
                        return l.stop()
                }
            }, null, this)
        };
        f.amendFireAndForget = function(a) {
            var b = this.$BladeRunnerSocketStream2.getRequest(),
                d = b.getInstrumentationData();
            if (d) {
                var e;
                d.auxId = c("uuid")();
                (e = b.e2eLogger) == null ? void 0 : e.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                    data_size: a == null ? void 0 : (e = a.length) == null ? void 0 : e.toString()
                }, d.auxId)
            }
            if (this.canAmend()) {
                this.$BladeRunnerSocketStream1.sendAmendment(this.$BladeRunnerSocketStream2.getRequest().streamId, this.$BladeRunnerSocketStream3(a), d == null ? null : JSON.stringify(d));
                if (d) {
                    (e = b.e2eLogger) == null ? void 0 : e.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").SENT, {
                        data_size: a == null ? void 0 : (e = a.length) == null ? void 0 : e.toString()
                    }, d.auxId)
                }
            } else {
                (a = b.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").FAILURE, i, d == null ? void 0 : d.auxId);
                throw new Error("Stream is closed or not accepted")
            }
        };
        f.amendWithoutAck = function(a) {
            this.amendFireAndForget(a)
        };
        f.$BladeRunnerSocketStream3 = function(a) {
            return typeof a == "object" ? btoa(new TextDecoder("utf8").decode(a)) : a
        };
        f.cancel = function() {
            var a = this.$BladeRunnerSocketStream2.getRequest();
            (a = a.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").CANCEL, c("RequestStreamE2EClientLoggerEvent").RECEIVED);
            this.isAlive() && (this.$BladeRunnerSocketStream1.sendCancel(this.$BladeRunnerSocketStream2.getRequest()), this.$BladeRunnerSocketStream2.setLastStatus(d("BladeRunnerStreamStatus").StreamStatus.CLOSED), this.getStreamHandler().onClientCancel())
        };
        f.isAlive = function() {
            return this.$BladeRunnerSocketStream2.isAlive()
        };
        f.canAmend = function() {
            return this.$BladeRunnerSocketStream2.canAmend()
        };
        f.getStatus = function() {
            return this.$BladeRunnerSocketStream2.getLastStatus()
        };
        f.getStreamId = function() {
            return this.$BladeRunnerSocketStream2.getRequest().streamId
        };
        return e
    }(c("BladeRunnerStream"));
    g["default"] = a
}), 98);
__d("RequestStreamE2ESampling", ["invariant", "Random", "RequestStreamE2EClientSamplingConfig", "uuid"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function i(a) {
        return a == null ? !1 : a.requestId != null && typeof a.requestId == "string" && a.forceLogContext != null && typeof a.forceLogContext == "string"
    }

    function j(a, b) {
        var d = c("RequestStreamE2EClientSamplingConfig").sampleRate;
        if (d > 1 && a != null) {
            a = c("RequestStreamE2EClientSamplingConfig").methodToSamplingMultiplier[a];
            a == 0 ? d = 0 : a != null && (d /= a)
        }
        return d == 1 ? 1 : d / b
    }

    function k(a, b, d, e) {
        var f = c("uuid")();
        (b.requestId == null || b.requestId === "" || typeof b.requestId != "string") && (a.requestId != null && typeof a.requestId == "string" ? b.requestId = a.requestId : b.requestId = f);
        b.requestId += "/_" + f.substring(0, 4);
        b.resumeId = "0";
        d != null ? b.sampleRate = d : b.sampleRate = void 0;
        f = "";
        e != null && e.length > 0 && (f = e);
        f.length > 0 && (b.requestLogContext != null && b.requestLogContext.length > 0 ? b.requestLogContext += ":" : b.requestLogContext = "", b.requestLogContext += f);
        (a == null ? void 0 : a.method) === "Falco" && (b.clientLoggingDisabled = "Falco");
        return JSON.stringify(b, Object.keys(b).sort())
    }

    function a(a, b, d, e) {
        b && (!b.requestId.includes("/") && !b.requestId.includes("#") || h(0, 41721));
        e = j(a.method, (e = e) != null ? e : 1);
        if (c("Random").coinflip(e)) return k(a, b || {
            requestId: ""
        }, e, d);
        return i(b) ? k(a, b || {
            requestId: ""
        }, null, d) : ""
    }
    g.isForceLogged = i;
    g.getSampleRateForLogging = j;
    g.normalizeInstrumentationData = k;
    g.validateInstrumentationData = a
}), 98);
__d("BladeRunnerClient", ["Base64", "BladeRunnerConfig", "BladeRunnerLogger", "BladeRunnerSocket", "BladeRunnerSocketStream", "BladeRunnerTypes", "BladeRunnerTypesInternal", "RequestStreamE2ELogger", "RequestStreamE2ESampling", "RequestStreamTransport", "cr:2046346"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b) {
            this.$2 = d("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT, this.$1 = a != null ? a : c("BladeRunnerSocket").get(), b && (this.$2 = b)
        }
        var e = a.prototype;
        e.createStream = function(a, b, c, d) {
            return this.$3(a, b, c, d)
        };
        e.requestStream = function(a, c, d, e) {
            a = this.$3(a, c, d, e);
            a.send();
            b("cr:2046346") != null && b("cr:2046346").startPulsarTest();
            return a
        };
        e.logInfo = function(a) {
            c("BladeRunnerLogger").info(a)
        };
        e.bumpCounter = function(a) {
            c("BladeRunnerLogger").bumpCounter(a)
        };
        e.$3 = function(a, b, e, f) {
            var g = new(d("BladeRunnerTypesInternal").GatewayStreamRequest)();
            g.streamId = this.$1.getNextStreamId();
            g.requestType = d("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER;
            g.headers = c("BladeRunnerConfig").patchRequestHeaders(a);
            g.extraHeader = JSON.stringify(g.headers);
            g.payload = b != null ? c("Base64").encode(b) : null;
            g.instrumentationData = d("RequestStreamE2ESampling").validateInstrumentationData(g.headers || {}, f);
            g.e2eLogger = d("RequestStreamE2ELogger").createStreamLogger(g.headers, g.instrumentationData, this.$2);
            return new(c("BladeRunnerSocketStream"))(e, g, this.$1)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("RequestStreamCloseReason", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored(["UserIntention", "StartStreamFailure", "StreamError", "RemoteTermination", "ServerDataEnd", "ServerDrain", "ReestablishError", "ClientError"]);
    f.RequestStreamCloseReason = a
}), 66);
__d("TWriteBuffer", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(b) {
            b === void 0 && (b = a.DEFAULT_BYTE_BUFFER_SIZE), this.$1 = new DataView(new ArrayBuffer(b)), this.$2 = 0
        }
        var b = a.prototype;
        b.write = function(a) {
            this.$2 + a.length > this.$1.byteLength && this.$3(this.$2 + a.length);
            for (var b = 0; b < a.length; b++) this.$1.setUint8(this.$2 + b, a[b]);
            this.$2 += a.length;
            return a.length
        };
        b.writeByte = function(a) {
            this.$2 + 1 > this.$1.byteLength && this.$3(this.$2 + 1);
            this.$1.setUint8(this.$2, a);
            this.$2++;
            return 1
        };
        b.writeFloatBE = function(a) {
            this.$2 + Float32Array.BYTES_PER_ELEMENT > this.$1.byteLength && this.$3(this.$2 + Float32Array.BYTES_PER_ELEMENT);
            this.$1.setFloat32(this.$2, a);
            this.$2 += Float32Array.BYTES_PER_ELEMENT;
            return Float32Array.BYTES_PER_ELEMENT
        };
        b.writeDoubleBE = function(a) {
            this.$2 + Float64Array.BYTES_PER_ELEMENT > this.$1.byteLength && this.$3(this.$2 + Float64Array.BYTES_PER_ELEMENT);
            this.$1.setFloat64(this.$2, a);
            this.$2 += Float64Array.BYTES_PER_ELEMENT;
            return Float64Array.BYTES_PER_ELEMENT
        };
        b.toByteArray = function() {
            var a = new Uint8Array(this.$1.buffer, 0, this.$2);
            return a
        };
        b.currentSize = function() {
            return this.$2
        };
        b.getUnderlyingDataView = function() {
            return this.$1
        };
        b.$3 = function(a) {
            a = a * 2;
            if (!Number.isSafeInteger(a)) throw new Error("unable to resize");
            a = new DataView(new ArrayBuffer(a));
            for (var b = 0; b < this.$2; b++) a.setUint8(b, this.$1.getUint8(b));
            this.$1 = a
        };
        b.readByte = function() {
            throw new Error("operation not supported")
        };
        b.readBytes = function(a) {
            throw new Error("operation not supported")
        };
        b.readFloatBE = function() {
            throw new Error("operation not supported")
        };
        b.readDoubleBE = function() {
            throw new Error("operation not supported")
        };
        return a
    }();
    a.DEFAULT_BYTE_BUFFER_SIZE = 16;
    f["default"] = a
}), 66);
__d("StringToUtf8", ["TWriteBuffer"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        var b = new(c("TWriteBuffer"))(a.length),
            d;
        for (var e = 0; e < a.length; e++) {
            d = a.charCodeAt(e);
            if (d < 128) b.writeByte(d);
            else if (d < 2048) b.writeByte(d >> 6 | 192), b.writeByte(d & 63 | 128);
            else if ((d & 64512) == 55296) {
                if (e + 1 >= a.length) throw new Error("UTF-16 string is truncated: [" + d.toString(16) + "]");
                if ((a.charCodeAt(e + 1) & 64512) !== 56320) throw new Error("Invalid UTF-16 string: [" + d.toString(16) + ", " + a.charCodeAt(e + 1).toString(16) + "]");
                d = 65536 + ((d & 1023) << 10) + (a.charCodeAt(++e) & 1023);
                b.writeByte(d >> 18 | 240);
                b.writeByte(d >> 12 & 63 | 128);
                b.writeByte(d >> 6 & 63 | 128);
                b.writeByte(d & 63 | 128)
            } else b.writeByte(d >> 12 | 224), b.writeByte(d >> 6 & 63 | 128), b.writeByte(d & 63 | 128)
        }
        return b.toByteArray()
    };
    g.StringToUtf8 = a
}), 98);
__d("ThriftTypes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        STOP: 0,
        VOID: 1,
        BOOL: 2,
        BYTE: 3,
        I08: 3,
        DOUBLE: 4,
        I16: 6,
        I32: 8,
        I64: 10,
        STRING: 11,
        STRUCT: 12,
        MAP: 13,
        SET: 14,
        LIST: 15,
        FLOAT: 19
    });
    b = a;
    f["default"] = b
}), 66);
__d("Utf8ToString", [], (function(a, b, c, d, e, f) {
    var g = function(a, b) {
            throw new Error(a + ": [" + b.map(function(a) {
                return a.toString(16)
            }).toString() + "]")
        },
        h = function(a) {
            g("Invalid UTF-8 sequence", a)
        },
        i = function(a, b) {
            g("Not enough bytes for " + a + "-byte sequence", b)
        };
    a = function(a) {
        var b = 0,
            c = [];
        while (b < a.length) {
            var d = a[b++];
            if (d < 128) c.push(String.fromCharCode(d));
            else if (d >= 128 && d < 194) h([d]);
            else if (d >= 194 && d < 224) {
                b >= a.length && i(2, [d]);
                var e = a[b++];
                (e & 192) !== 128 && h([d, e]);
                c.push(String.fromCharCode((d & 31) << 6 | e & 63))
            } else if (d >= 240 && d < 245) {
                b + 2 >= a.length && i(4, [d]);
                e = a[b++];
                var f = a[b++],
                    g = a[b++];
                (d == 240 && (!(e >= 144 && e < 192) || (f & 192) !== 128 || (g & 192) !== 128) || d >= 241 && d < 244 && ((e & 192) !== 128 || (f & 192) !== 128 || (g & 192) !== 128) || d == 244 && (!(e >= 128 && e < 144) || (f & 192) !== 128 || (g & 192) !== 128)) && h([d, e, f, g]);
                e = ((d & 7) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63) - 65536;
                c.push(String.fromCharCode(55296 + (e >> 10)));
                c.push(String.fromCharCode(56320 + (e & 1023)))
            } else if (d >= 245) h([d]);
            else {
                b + 1 >= a.length && i(3, [d]);
                f = a[b++];
                g = a[b++];
                d == 224 ? f >= 160 && f < 192 || h([d, f, g]) : d >= 225 && d < 237 ? f >= 128 && f < 192 || h([d, f, g]) : d == 237 ? f >= 128 && f < 160 || h([d, f, g]) : d >= 238 && d < 240 && (f >= 128 && f < 192 || h([d, f, g]));
                g >= 128 && g < 192 || h([d, f, g]);
                c.push(String.fromCharCode((d & 15) << 12 | (f & 63) << 6 | g & 63))
            }
        }
        return c.join("")
    };
    f.Utf8ToString = a
}), 66);
__d("jsbi", [], (function(a, b, c, d, e, f) {
    (function(a, b) {
        "object" == typeof f && "undefined" != typeof e ? e.exports = b() : "function" == typeof define && define.amd ? define(b) : a.JSBI = b()
    })(this, function() {
        "use strict";

        function a(b) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            }, a(b)
        }

        function b(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function c(a, b) {
            for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
        }

        function d(a, b, d) {
            return b && c(a.prototype, b), d && c(a, d), a
        }

        function e(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function");
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && g(a, b)
        }

        function f(a) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
                return a.__proto__ || Object.getPrototypeOf(a)
            }, f(a)
        }

        function g(a, b) {
            return g = Object.setPrototypeOf || function(a, b) {
                return a.__proto__ = b, a
            }, g(a, b)
        }

        function h() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (a) {
                return !1
            }
        }

        function i() {
            return i = h() ? Reflect.construct : function(a, b, c) {
                var d = [null];
                d.push.apply(d, b);
                b = Function.bind.apply(a, d);
                a = new b;
                return c && g(a, c.prototype), a
            }, i.apply(null, arguments)
        }

        function j(a) {
            return -1 !== Function.toString.call(a).indexOf("[native code]")
        }

        function k(a) {
            var b = "function" == typeof Map ? new Map : void 0;
            return k = function(a) {
                function c() {
                    return i(a, arguments, f(this).constructor)
                }
                if (null === a || !j(a)) return a;
                if ("function" != typeof a) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" != typeof b) {
                    if (b.has(a)) return b.get(a);
                    b.set(a, c)
                }
                return c.prototype = Object.create(a.prototype, {
                    constructor: {
                        value: c,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), g(c, a)
            }, k(a)
        }

        function l(a) {
            if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a
        }

        function m(a, b) {
            return b && ("object" == typeof b || "function" == typeof b) ? b : l(a)
        }
        var n = function(c) {
            var h = Math.abs,
                i = Math.max,
                j = Math.imul,
                k = Math.clz32;

            function g(a, c) {
                if (b(this, g), a > g.__kMaxLength) throw new RangeError("Maximum BigInt size exceeded");
                return a = m(this, f(g).call(this, a)), a.sign = c, a
            }
            return e(g, c), d(g, [{
                key: "toDebugString",
                value: function() {
                    var a = ["BigInt["],
                        b = !0,
                        c = !1,
                        d = void 0;
                    try {
                        for (var e, e, f = this[Symbol.iterator](); !(b = (e = f.next()).done); b = !0) e = e.value, a.push((e ? (e >>> 0).toString(16) : e) + ", ")
                    } catch (a) {
                        c = !0, d = a
                    } finally {
                        try {
                            b || null == f["return"] || f["return"]()
                        } finally {
                            if (c) throw d
                        }
                    }
                    return a.push("]"), a.join("")
                }
            }, {
                key: "toString",
                value: function() {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 10;
                    if (2 > a || 36 < a) throw new RangeError("toString() radix argument must be between 2 and 36");
                    return 0 === this.length ? "0" : 0 == (a & a - 1) ? g.__toStringBasePowerOfTwo(this, a) : g.__toStringGeneric(this, a, !1)
                }
            }, {
                key: "__copy",
                value: function() {
                    for (var a = new g(this.length, this.sign), b = 0; b < this.length; b++) a[b] = this[b];
                    return a
                }
            }, {
                key: "__trim",
                value: function() {
                    for (var a = this.length, b = this[a - 1]; 0 === b;) a--, b = this[a - 1], this.pop();
                    return 0 === a && (this.sign = !1), this
                }
            }, {
                key: "__initializeDigits",
                value: function() {
                    for (var a = 0; a < this.length; a++) this[a] = 0
                }
            }, {
                key: "__clzmsd",
                value: function() {
                    return k(this[this.length - 1])
                }
            }, {
                key: "__inplaceMultiplyAdd",
                value: function(a, b, c) {
                    c > this.length && (c = this.length);
                    for (var d = 65535 & a, a = a >>> 16, e = 0, f = 65535 & b, b = b >>> 16, i = 0; i < c; i++) {
                        var n = this.__digit(i),
                            m = 65535 & n;
                        n = n >>> 16;
                        var o = j(m, d);
                        m = j(m, a);
                        var p = j(n, d);
                        n = j(n, a);
                        var q = f + (65535 & o);
                        o = b + e + (q >>> 16) + (o >>> 16) + (65535 & m) + (65535 & p);
                        f = (m >>> 16) + (p >>> 16) + (65535 & n) + (o >>> 16), e = f >>> 16, f &= 65535, b = n >>> 16;
                        this.__setDigit(i, 65535 & q | o << 16)
                    }
                    if (0 !== e || 0 !== f || 0 !== b) throw new Error("implementation bug")
                }
            }, {
                key: "__inplaceAdd",
                value: function(a, b, c) {
                    for (var d, e = 0, f = 0; f < c; f++) d = this.__halfDigit(b + f) + a.__halfDigit(f) + e, e = d >>> 16, this.__setHalfDigit(b + f, d);
                    return e
                }
            }, {
                key: "__inplaceSub",
                value: function(a, b, c) {
                    var d = 0;
                    if (1 & b) {
                        b >>= 1;
                        for (var e = this.__digit(b), f = 65535 & e, k = 0; k < c - 1 >>> 1; k++) {
                            var l = a.__digit(k),
                                m = (e >>> 16) - (65535 & l) - d;
                            d = 1 & m >>> 16, this.__setDigit(b + k, m << 16 | 65535 & f), e = this.__digit(b + k + 1), f = (65535 & e) - (l >>> 16) - d, d = 1 & f >>> 16
                        }
                        m = a.__digit(k);
                        l = (e >>> 16) - (65535 & m) - d;
                        d = 1 & l >>> 16, this.__setDigit(b + k, l << 16 | 65535 & f);
                        if (b + k + 1 >= this.length) throw new RangeError("out of bounds");
                        0 == (1 & c) && (e = this.__digit(b + k + 1), f = (65535 & e) - (m >>> 16) - d, d = 1 & f >>> 16, this.__setDigit(b + a.length, 4294901760 & e | 65535 & f))
                    } else {
                        b >>= 1;
                        for (var l = 0; l < a.length - 1; l++) {
                            k = this.__digit(b + l);
                            m = a.__digit(l);
                            e = (65535 & k) - (65535 & m) - d;
                            d = 1 & e >>> 16;
                            f = (k >>> 16) - (m >>> 16) - d;
                            d = 1 & f >>> 16, this.__setDigit(b + l, f << 16 | 65535 & e)
                        }
                        k = this.__digit(b + l);
                        m = a.__digit(l);
                        f = (65535 & k) - (65535 & m) - d;
                        d = 1 & f >>> 16;
                        e = 0;
                        0 == (1 & c) && (e = (k >>> 16) - (m >>> 16) - d, d = 1 & e >>> 16), this.__setDigit(b + l, e << 16 | 65535 & f)
                    }
                    return d
                }
            }, {
                key: "__inplaceRightShift",
                value: function(a) {
                    if (0 !== a) {
                        for (var b, c = this.__digit(0) >>> a, d = this.length - 1, e = 0; e < d; e++) b = this.__digit(e + 1), this.__setDigit(e, b << 32 - a | c), c = b >>> a;
                        this.__setDigit(d, c)
                    }
                }
            }, {
                key: "__digit",
                value: function(a) {
                    return this[a]
                }
            }, {
                key: "__unsignedDigit",
                value: function(a) {
                    return this[a] >>> 0
                }
            }, {
                key: "__setDigit",
                value: function(a, b) {
                    this[a] = 0 | b
                }
            }, {
                key: "__setDigitGrow",
                value: function(a, b) {
                    this[a] = 0 | b
                }
            }, {
                key: "__halfDigitLength",
                value: function() {
                    var a = this.length;
                    return 65535 >= this.__unsignedDigit(a - 1) ? 2 * a - 1 : 2 * a
                }
            }, {
                key: "__halfDigit",
                value: function(a) {
                    return 65535 & this[a >>> 1] >>> ((1 & a) << 4)
                }
            }, {
                key: "__setHalfDigit",
                value: function(a, b) {
                    var c = a >>> 1,
                        d = this.__digit(c);
                    a = 1 & a ? 65535 & d | b << 16 : 4294901760 & d | 65535 & b;
                    this.__setDigit(c, a)
                }
            }], [{
                key: "BigInt",
                value: function(b) {
                    var c = Math.floor,
                        d = Number.isFinite;
                    if ("number" == typeof b) {
                        if (0 === b) return g.__zero();
                        if ((0 | b) === b) return 0 > b ? g.__oneDigit(-b, !0) : g.__oneDigit(b, !1);
                        if (!d(b) || c(b) !== b) throw new RangeError("The number " + b + " cannot be converted to BigInt because it is not an integer");
                        return g.__fromDouble(b)
                    }
                    if ("string" == typeof b) {
                        d = g.__fromString(b);
                        if (null === d) throw new SyntaxError("Cannot convert " + b + " to a BigInt");
                        return d
                    }
                    if ("boolean" == typeof b) return !0 === b ? g.__oneDigit(1, !1) : g.__zero();
                    if ("object" === a(b)) {
                        if (b.constructor === g) return b;
                        c = g.__toPrimitive(b);
                        return g.BigInt(c)
                    }
                    throw new TypeError("Cannot convert " + b + " to a BigInt")
                }
            }, {
                key: "toNumber",
                value: function(a) {
                    var b = a.length;
                    if (0 === b) return 0;
                    if (1 === b) {
                        var c = a.__unsignedDigit(0);
                        return a.sign ? -c : c
                    }
                    c = a.__digit(b - 1);
                    var d = k(c),
                        e = 32 * b - d;
                    if (1024 < e) return a.sign ? -Infinity : 1 / 0;
                    e = e - 1;
                    c = c;
                    b = b - 1;
                    d = d + 1;
                    var f = 32 === d ? 0 : c << d;
                    f >>>= 12;
                    var h = d - 12,
                        i = 12 <= d ? 0 : c << 20 + d;
                    d = 20 + d;
                    0 < h && 0 < b && (b--, c = a.__digit(b), f |= c >>> 32 - h, i = c << h, d = h), 0 < d && 0 < b && (b--, c = a.__digit(b), i |= c >>> 32 - d, d -= 32);
                    h = g.__decideRounding(a, d, b, c);
                    if ((1 === h || 0 === h && 1 == (1 & i)) && (i = i + 1 >>> 0, 0 === i && (f++, 0 != f >>> 20 && (f = 0, e++, 1023 < e)))) return a.sign ? -Infinity : 1 / 0;
                    d = a.sign ? -2147483648 : 0;
                    return e = e + 1023 << 20, g.__kBitConversionInts[1] = d | e | f, g.__kBitConversionInts[0] = i, g.__kBitConversionDouble[0]
                }
            }, {
                key: "unaryMinus",
                value: function(a) {
                    if (0 === a.length) return a;
                    var b = a.__copy();
                    return b.sign = !a.sign, b
                }
            }, {
                key: "bitwiseNot",
                value: function(a) {
                    return a.sign ? g.__absoluteSubOne(a).__trim() : g.__absoluteAddOne(a, !0)
                }
            }, {
                key: "exponentiate",
                value: function(a, b) {
                    if (b.sign) throw new RangeError("Exponent must be positive");
                    if (0 === b.length) return g.__oneDigit(1, !1);
                    if (0 === a.length) return a;
                    if (1 === a.length && 1 === a.__digit(0)) return a.sign && 0 == (1 & b.__digit(0)) ? g.unaryMinus(a) : a;
                    if (1 < b.length) throw new RangeError("BigInt too big");
                    b = b.__unsignedDigit(0);
                    if (1 === b) return a;
                    if (b >= g.__kMaxLengthBits) throw new RangeError("BigInt too big");
                    if (1 === a.length && 2 === a.__digit(0)) {
                        var c = 1 + (b >>> 5),
                            d = a.sign && 0 != (1 & b);
                        d = new g(c, d);
                        d.__initializeDigits();
                        var e = 1 << (31 & b);
                        return d.__setDigit(c - 1, e), d
                    }
                    c = null;
                    e = a;
                    for (0 != (1 & b) && (c = a), b >>= 1; 0 !== b; b >>= 1) e = g.multiply(e, e), 0 != (1 & b) && (null === c ? c = e : c = g.multiply(c, e));
                    return c
                }
            }, {
                key: "multiply",
                value: function(a, b) {
                    if (0 === a.length) return a;
                    if (0 === b.length) return b;
                    var c = a.length + b.length;
                    32 <= a.__clzmsd() + b.__clzmsd() && c--;
                    c = new g(c, a.sign !== b.sign);
                    c.__initializeDigits();
                    for (var d = 0; d < a.length; d++) g.__multiplyAccumulate(b, a.__digit(d), c, d);
                    return c.__trim()
                }
            }, {
                key: "divide",
                value: function(a, b) {
                    if (0 === b.length) throw new RangeError("Division by zero");
                    if (0 > g.__absoluteCompare(a, b)) return g.__zero();
                    var c = a.sign !== b.sign,
                        d = b.__unsignedDigit(0);
                    if (1 === b.length && 65535 >= d) {
                        if (1 === d) return c === a.sign ? a : g.unaryMinus(a);
                        d = g.__absoluteDivSmall(a, d, null)
                    } else d = g.__absoluteDivLarge(a, b, !0, !1);
                    return d.sign = c, d.__trim()
                }
            }, {
                key: "remainder",
                value: function(a, b) {
                    if (0 === b.length) throw new RangeError("Division by zero");
                    if (0 > g.__absoluteCompare(a, b)) return a;
                    var c = b.__unsignedDigit(0);
                    if (1 === b.length && 65535 >= c) {
                        if (1 === c) return g.__zero();
                        c = g.__absoluteModSmall(a, c);
                        return 0 === c ? g.__zero() : g.__oneDigit(c, a.sign)
                    }
                    c = g.__absoluteDivLarge(a, b, !1, !0);
                    return c.sign = a.sign, c.__trim()
                }
            }, {
                key: "add",
                value: function(a, b) {
                    var c = a.sign;
                    return c === b.sign ? g.__absoluteAdd(a, b, c) : 0 <= g.__absoluteCompare(a, b) ? g.__absoluteSub(a, b, c) : g.__absoluteSub(b, a, !c)
                }
            }, {
                key: "subtract",
                value: function(a, b) {
                    var c = a.sign;
                    return c === b.sign ? 0 <= g.__absoluteCompare(a, b) ? g.__absoluteSub(a, b, c) : g.__absoluteSub(b, a, !c) : g.__absoluteAdd(a, b, c)
                }
            }, {
                key: "leftShift",
                value: function(a, b) {
                    return 0 === b.length || 0 === a.length ? a : b.sign ? g.__rightShiftByAbsolute(a, b) : g.__leftShiftByAbsolute(a, b)
                }
            }, {
                key: "signedRightShift",
                value: function(a, b) {
                    return 0 === b.length || 0 === a.length ? a : b.sign ? g.__leftShiftByAbsolute(a, b) : g.__rightShiftByAbsolute(a, b)
                }
            }, {
                key: "unsignedRightShift",
                value: function() {
                    throw new TypeError("BigInts have no unsigned right shift; use >> instead")
                }
            }, {
                key: "lessThan",
                value: function(a, b) {
                    return 0 > g.__compareToBigInt(a, b)
                }
            }, {
                key: "lessThanOrEqual",
                value: function(a, b) {
                    return 0 >= g.__compareToBigInt(a, b)
                }
            }, {
                key: "greaterThan",
                value: function(a, b) {
                    return 0 < g.__compareToBigInt(a, b)
                }
            }, {
                key: "greaterThanOrEqual",
                value: function(a, b) {
                    return 0 <= g.__compareToBigInt(a, b)
                }
            }, {
                key: "equal",
                value: function(a, b) {
                    if (a.sign !== b.sign) return !1;
                    if (a.length !== b.length) return !1;
                    for (var c = 0; c < a.length; c++)
                        if (a.__digit(c) !== b.__digit(c)) return !1;
                    return !0
                }
            }, {
                key: "notEqual",
                value: function(a, b) {
                    return !g.equal(a, b)
                }
            }, {
                key: "bitwiseAnd",
                value: function(a, b) {
                    if (!a.sign && !b.sign) return g.__absoluteAnd(a, b).__trim();
                    if (a.sign && b.sign) {
                        var c = i(a.length, b.length) + 1;
                        c = g.__absoluteSubOne(a, c);
                        var d = g.__absoluteSubOne(b);
                        return c = g.__absoluteOr(c, d, c), g.__absoluteAddOne(c, !0, c).__trim()
                    }
                    if (a.sign) {
                        d = [b, a];
                        a = d[0], b = d[1]
                    }
                    return g.__absoluteAndNot(a, g.__absoluteSubOne(b)).__trim()
                }
            }, {
                key: "bitwiseXor",
                value: function(a, b) {
                    if (!a.sign && !b.sign) return g.__absoluteXor(a, b).__trim();
                    if (a.sign && b.sign) {
                        var c = i(a.length, b.length);
                        c = g.__absoluteSubOne(a, c);
                        var d = g.__absoluteSubOne(b);
                        return g.__absoluteXor(c, d, c).__trim()
                    }
                    d = i(a.length, b.length) + 1;
                    if (a.sign) {
                        c = [b, a];
                        a = c[0], b = c[1]
                    }
                    c = g.__absoluteSubOne(b, d);
                    return c = g.__absoluteXor(c, a, c), g.__absoluteAddOne(c, !0, c).__trim()
                }
            }, {
                key: "bitwiseOr",
                value: function(a, b) {
                    var c = i(a.length, b.length);
                    if (!a.sign && !b.sign) return g.__absoluteOr(a, b).__trim();
                    if (a.sign && b.sign) {
                        var d = g.__absoluteSubOne(a, c),
                            e = g.__absoluteSubOne(b);
                        return d = g.__absoluteAnd(d, e, d), g.__absoluteAddOne(d, !0, d).__trim()
                    }
                    if (a.sign) {
                        e = [b, a];
                        a = e[0], b = e[1]
                    }
                    d = g.__absoluteSubOne(b, c);
                    return d = g.__absoluteAndNot(d, a, d), g.__absoluteAddOne(d, !0, d).__trim()
                }
            }, {
                key: "asIntN",
                value: function(a, b) {
                    if (0 === b.length) return b;
                    if (0 === a) return g.__zero();
                    if (a >= g.__kMaxLengthBits) return b;
                    var c = a + 31 >>> 5;
                    if (b.length < c) return b;
                    var d = b.__unsignedDigit(c - 1),
                        e = 1 << (31 & a - 1);
                    if (b.length === c && d < e) return b;
                    if (!((d & e) === e)) return g.__truncateToNBits(a, b);
                    if (!b.sign) return g.__truncateAndSubFromPowerOfTwo(a, b, !0);
                    if (0 == (d & e - 1)) {
                        for (var f = c - 2; 0 <= f; f--)
                            if (0 !== b.__digit(f)) return g.__truncateAndSubFromPowerOfTwo(a, b, !1);
                        return b.length === c && d === e ? b : g.__truncateToNBits(a, b)
                    }
                    return g.__truncateAndSubFromPowerOfTwo(a, b, !1)
                }
            }, {
                key: "asUintN",
                value: function(a, b) {
                    if (0 === b.length) return b;
                    if (0 === a) return g.__zero();
                    if (b.sign) {
                        if (a > g.__kMaxLengthBits) throw new RangeError("BigInt too big");
                        return g.__truncateAndSubFromPowerOfTwo(a, b, !1)
                    }
                    if (a >= g.__kMaxLengthBits) return b;
                    var c = a + 31 >>> 5;
                    if (b.length < c) return b;
                    var d = 31 & a;
                    if (b.length == c) {
                        if (0 == d) return b;
                        c = b.__digit(c - 1);
                        if (0 == c >>> d) return b
                    }
                    return g.__truncateToNBits(a, b)
                }
            }, {
                key: "ADD",
                value: function(a, b) {
                    if (a = g.__toPrimitive(a), b = g.__toPrimitive(b), "string" == typeof a) return "string" != typeof b && (b = b.toString()), a + b;
                    if ("string" == typeof b) return a.toString() + b;
                    if (a = g.__toNumeric(a), b = g.__toNumeric(b), g.__isBigInt(a) && g.__isBigInt(b)) return g.add(a, b);
                    if ("number" == typeof a && "number" == typeof b) return a + b;
                    throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")
                }
            }, {
                key: "LT",
                value: function(a, b) {
                    return g.__compare(a, b, 0)
                }
            }, {
                key: "LE",
                value: function(a, b) {
                    return g.__compare(a, b, 1)
                }
            }, {
                key: "GT",
                value: function(a, b) {
                    return g.__compare(a, b, 2)
                }
            }, {
                key: "GE",
                value: function(a, b) {
                    return g.__compare(a, b, 3)
                }
            }, {
                key: "EQ",
                value: function(b, c) {
                    for (;;) {
                        if (g.__isBigInt(b)) return g.__isBigInt(c) ? g.equal(b, c) : g.EQ(c, b);
                        if ("number" == typeof b) {
                            if (g.__isBigInt(c)) return g.__equalToNumber(c, b);
                            if ("object" !== a(c)) return b == c;
                            c = g.__toPrimitive(c)
                        } else if ("string" == typeof b) {
                            if (g.__isBigInt(c)) return b = g.__fromString(b), null !== b && g.equal(b, c);
                            if ("object" !== a(c)) return b == c;
                            c = g.__toPrimitive(c)
                        } else if ("boolean" == typeof b) {
                            if (g.__isBigInt(c)) return g.__equalToNumber(c, +b);
                            if ("object" !== a(c)) return b == c;
                            c = g.__toPrimitive(c)
                        } else if ("symbol" === a(b)) {
                            if (g.__isBigInt(c)) return !1;
                            if ("object" !== a(c)) return b == c;
                            c = g.__toPrimitive(c)
                        } else if ("object" === a(b)) {
                            if ("object" === a(c) && c.constructor !== g) return b == c;
                            b = g.__toPrimitive(b)
                        } else return b == c
                    }
                }
            }, {
                key: "NE",
                value: function(a, b) {
                    return !g.EQ(a, b)
                }
            }, {
                key: "__zero",
                value: function() {
                    return new g(0, !1)
                }
            }, {
                key: "__oneDigit",
                value: function(a, b) {
                    b = new g(1, b);
                    return b.__setDigit(0, a), b
                }
            }, {
                key: "__decideRounding",
                value: function(a, b, c, d) {
                    if (0 < b) return -1;
                    if (0 > b) b = -b - 1;
                    else {
                        if (0 === c) return -1;
                        c--, d = a.__digit(c), b = 31
                    }
                    b = 1 << b;
                    if (0 == (d & b)) return -1;
                    if (b -= 1, 0 != (d & b)) return 1;
                    for (; 0 < c;)
                        if (c--, 0 !== a.__digit(c)) return 1;
                    return 0
                }
            }, {
                key: "__fromDouble",
                value: function(a) {
                    g.__kBitConversionDouble[0] = a;
                    var b, c = 2047 & g.__kBitConversionInts[1] >>> 20;
                    c = c - 1023;
                    var d = (c >>> 5) + 1;
                    a = new g(d, 0 > a);
                    var e = 1048575 & g.__kBitConversionInts[1] | 1048576,
                        f = g.__kBitConversionInts[0],
                        k = 20;
                    c = 31 & c;
                    var n = 0;
                    if (c < k) {
                        var m = k - c;
                        n = m + 32, b = e >>> m, e = e << 32 - m | f >>> m, f <<= 32 - m
                    } else if (c === k) n = 32, b = e, e = f;
                    else {
                        m = c - k;
                        n = 32 - m, b = e << m | f >>> 32 - m, e = f << m
                    }
                    a.__setDigit(d - 1, b);
                    for (var c = d - 2; 0 <= c; c--) 0 < n ? (n -= 32, b = e, e = f) : b = 0, a.__setDigit(c, b);
                    return a.__trim()
                }
            }, {
                key: "__isWhitespace",
                value: function(a) {
                    return !!(13 >= a && 9 <= a) || (159 >= a ? 32 == a : 131071 >= a ? 160 == a || 5760 == a : 196607 >= a ? (a &= 131071, 10 >= a || 40 == a || 41 == a || 47 == a || 95 == a || 4096 == a) : 65279 == a)
                }
            }, {
                key: "__fromString",
                value: function(a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        c = 0,
                        d = a.length,
                        e = 0;
                    if (e === d) return g.__zero();
                    for (var f = a.charCodeAt(e); g.__isWhitespace(f);) {
                        if (++e === d) return g.__zero();
                        f = a.charCodeAt(e)
                    }
                    if (43 === f) {
                        if (++e === d) return null;
                        f = a.charCodeAt(e), c = 1
                    } else if (45 === f) {
                        if (++e === d) return null;
                        f = a.charCodeAt(e), c = -1
                    }
                    if (0 === b) {
                        if (b = 10, 48 === f) {
                            if (++e === d) return g.__zero();
                            if (f = a.charCodeAt(e), 88 === f || 120 === f) {
                                if (b = 16, ++e === d) return null;
                                f = a.charCodeAt(e)
                            } else if (79 === f || 111 === f) {
                                if (b = 8, ++e === d) return null;
                                f = a.charCodeAt(e)
                            } else if (66 === f || 98 === f) {
                                if (b = 2, ++e === d) return null;
                                f = a.charCodeAt(e)
                            }
                        }
                    } else if (16 === b && 48 === f) {
                        if (++e === d) return g.__zero();
                        if (f = a.charCodeAt(e), 88 === f || 120 === f) {
                            if (++e === d) return null;
                            f = a.charCodeAt(e)
                        }
                    }
                    for (; 48 === f;) {
                        if (++e === d) return g.__zero();
                        f = a.charCodeAt(e)
                    }
                    var m = d - e,
                        i = g.__kMaxBitsPerChar[b],
                        j = g.__kBitsPerCharTableMultiplier - 1;
                    if (m > 1073741824 / i) return null;
                    var k = i * m + j >>> g.__kBitsPerCharTableShift,
                        l = new g(k + 31 >>> 5, !1),
                        n = 10 > b ? b : 10,
                        o = 10 < b ? b - 10 : 0;
                    if (0 == (b & b - 1)) {
                        i >>= g.__kBitsPerCharTableShift;
                        var p = [],
                            q = [],
                            r = !1;
                        do {
                            for (var s, t = 0, u = 0;;) {
                                if (void 0, f - 48 >>> 0 < n) s = f - 48;
                                else if ((32 | f) - 97 >>> 0 < o) s = (32 | f) - 87;
                                else {
                                    r = !0;
                                    break
                                }
                                if (u += i, t = t << i | s, ++e === d) {
                                    r = !0;
                                    break
                                }
                                if (f = a.charCodeAt(e), 32 < u + i) break
                            }
                            p.push(t), q.push(u)
                        } while (!r);
                        g.__fillFromParts(l, p, q)
                    } else {
                        l.__initializeDigits();
                        var v = !1,
                            w = 0;
                        do {
                            for (var x, y = 0, z = 1;;) {
                                if (void 0, f - 48 >>> 0 < n) x = f - 48;
                                else if ((32 | f) - 97 >>> 0 < o) x = (32 | f) - 87;
                                else {
                                    v = !0;
                                    break
                                }
                                var A = z * b;
                                if (4294967295 < A) break;
                                if (z = A, y = y * b + x, w++, ++e === d) {
                                    v = !0;
                                    break
                                }
                                f = a.charCodeAt(e)
                            }
                            j = 32 * g.__kBitsPerCharTableMultiplier - 1;
                            var B = i * w + j >>> g.__kBitsPerCharTableShift + 5;
                            l.__inplaceMultiplyAdd(z, y, B)
                        } while (!v)
                    }
                    if (e !== d) {
                        if (!g.__isWhitespace(f)) return null;
                        for (e++; e < d; e++)
                            if (f = a.charCodeAt(e), !g.__isWhitespace(f)) return null
                    }
                    return 0 !== c && 10 !== b ? null : (l.sign = -1 === c, l.__trim())
                }
            }, {
                key: "__fillFromParts",
                value: function(a, b, c) {
                    for (var d = 0, e = 0, f = 0, k = b.length - 1; 0 <= k; k--) {
                        var l = b[k],
                            m = c[k];
                        e |= l << f, f += m, 32 === f ? (a.__setDigit(d++, e), f = 0, e = 0) : 32 < f && (a.__setDigit(d++, e), f -= 32, e = l >>> m - f)
                    }
                    if (0 !== e) {
                        if (d >= a.length) throw new Error("implementation bug");
                        a.__setDigit(d++, e)
                    }
                    for (; d < a.length; d++) a.__setDigit(d, 0)
                }
            }, {
                key: "__toStringBasePowerOfTwo",
                value: function(a, b) {
                    var c = a.length,
                        d = b - 1;
                    d = (85 & d >>> 1) + (85 & d), d = (51 & d >>> 2) + (51 & d), d = (15 & d >>> 4) + (15 & d);
                    d = d;
                    b = b - 1;
                    var e = a.__digit(c - 1),
                        f = k(e);
                    f = 0 | (32 * c - f + d - 1) / d;
                    if (a.sign && f++, 268435456 < f) throw new Error("string too long");
                    for (var h = Array(f), f = f - 1, l = 0, n = 0, o = 0; o < c - 1; o++) {
                        var p = a.__digit(o),
                            q = (l | p << n) & b;
                        h[f--] = g.__kConversionChars[q];
                        q = d - n;
                        for (l = p >>> q, n = 32 - q; n >= d;) h[f--] = g.__kConversionChars[l & b], l >>>= d, n -= d
                    }
                    p = (l | e << n) & b;
                    for (h[f--] = g.__kConversionChars[p], l = e >>> d - n; 0 !== l;) h[f--] = g.__kConversionChars[l & b], l >>>= d;
                    if (a.sign && (h[f--] = "-"), -1 !== f) throw new Error("implementation bug");
                    return h.join("")
                }
            }, {
                key: "__toStringGeneric",
                value: function(a, b, c) {
                    var d = a.length;
                    if (0 === d) return "";
                    if (1 === d) {
                        var e = a.__unsignedDigit(0).toString(b);
                        return !1 === c && a.sign && (e = "-" + e), e
                    }
                    e = 32 * d - k(a.__digit(d - 1));
                    d = g.__kMaxBitsPerChar[b];
                    d = d - 1;
                    e = e * g.__kBitsPerCharTableMultiplier;
                    e += d - 1, e = 0 | e / d;
                    var f;
                    d = e + 1 >> 1;
                    e = g.exponentiate(g.__oneDigit(b, !1), g.__oneDigit(d, !1));
                    var h = e.__unsignedDigit(0);
                    if (1 === e.length && 65535 >= h) {
                        f = new g(a.length, !1), f.__initializeDigits();
                        for (var i, j = 0, l = 2 * a.length - 1; 0 <= l; l--) i = j << 16 | a.__halfDigit(l), f.__setHalfDigit(l, 0 | i / h), j = 0 | i % h;
                        i = j.toString(b)
                    } else {
                        h = g.__absoluteDivLarge(a, e, !0, !0);
                        f = h.quotient;
                        l = h.remainder.__trim();
                        i = g.__toStringGeneric(l, b, !0)
                    }
                    f.__trim();
                    for (var j = g.__toStringGeneric(f, b, !0); i.length < d;) i = "0" + i;
                    return !1 === c && a.sign && (j = "-" + j), j + i
                }
            }, {
                key: "__unequalSign",
                value: function(a) {
                    return a ? -1 : 1
                }
            }, {
                key: "__absoluteGreater",
                value: function(a) {
                    return a ? -1 : 1
                }
            }, {
                key: "__absoluteLess",
                value: function(a) {
                    return a ? 1 : -1
                }
            }, {
                key: "__compareToBigInt",
                value: function(a, b) {
                    var c = a.sign;
                    if (c !== b.sign) return g.__unequalSign(c);
                    a = g.__absoluteCompare(a, b);
                    return 0 < a ? g.__absoluteGreater(c) : 0 > a ? g.__absoluteLess(c) : 0
                }
            }, {
                key: "__compareToNumber",
                value: function(a, b) {
                    if (!0 | b) {
                        var c = a.sign,
                            d = 0 > b;
                        if (c !== d) return g.__unequalSign(c);
                        if (0 === a.length) {
                            if (d) throw new Error("implementation bug");
                            return 0 === b ? 0 : -1
                        }
                        if (1 < a.length) return g.__absoluteGreater(c);
                        d = h(b);
                        var e = a.__unsignedDigit(0);
                        return e > d ? g.__absoluteGreater(c) : e < d ? g.__absoluteLess(c) : 0
                    }
                    return g.__compareToDouble(a, b)
                }
            }, {
                key: "__compareToDouble",
                value: function(a, b) {
                    if (b !== b) return b;
                    if (b === 1 / 0) return -1;
                    if (b === -Infinity) return 1;
                    var c = a.sign;
                    if (c !== 0 > b) return g.__unequalSign(c);
                    if (0 === b) throw new Error("implementation bug: should be handled elsewhere");
                    if (0 === a.length) return -1;
                    g.__kBitConversionDouble[0] = b;
                    b = 2047 & g.__kBitConversionInts[1] >>> 20;
                    if (2047 == b) throw new Error("implementation bug: handled elsewhere");
                    b = b - 1023;
                    if (0 > b) return g.__absoluteGreater(c);
                    var d = a.length,
                        e = a.__digit(d - 1),
                        f = k(e),
                        l = 32 * d - f;
                    b = b + 1;
                    if (l < b) return g.__absoluteLess(c);
                    if (l > b) return g.__absoluteGreater(c);
                    b = 1048576 | 1048575 & g.__kBitConversionInts[1];
                    var m = g.__kBitConversionInts[0],
                        o = 20;
                    f = 31 - f;
                    if (f !== (l - 1) % 31) throw new Error("implementation bug");
                    var p;
                    l = 0;
                    if (f < o) {
                        var q = o - f;
                        l = q + 32, p = b >>> q, b = b << 32 - q | m >>> q, m <<= 32 - q
                    } else if (f === o) l = 32, p = b, b = m;
                    else {
                        q = f - o;
                        l = 32 - q, p = b << q | m >>> 32 - q, b = m << q
                    }
                    if (e >>>= 0, p >>>= 0, e > p) return g.__absoluteGreater(c);
                    if (e < p) return g.__absoluteLess(c);
                    for (var f = d - 2; 0 <= f; f--) {
                        0 < l ? (l -= 32, p = b >>> 0, b = m, m = 0) : p = 0;
                        o = a.__unsignedDigit(f);
                        if (o > p) return g.__absoluteGreater(c);
                        if (o < p) return g.__absoluteLess(c)
                    }
                    if (0 !== b || 0 !== m) {
                        if (0 === l) throw new Error("implementation bug");
                        return g.__absoluteLess(c)
                    }
                    return 0
                }
            }, {
                key: "__equalToNumber",
                value: function(a, b) {
                    return b | 0 === b ? 0 === b ? 0 === a.length : 1 === a.length && a.sign === 0 > b && a.__unsignedDigit(0) === h(b) : 0 === g.__compareToDouble(a, b)
                }
            }, {
                key: "__comparisonResultToBool",
                value: function(a, b) {
                    switch (b) {
                        case 0:
                            return 0 > a;
                        case 1:
                            return 0 >= a;
                        case 2:
                            return 0 < a;
                        case 3:
                            return 0 <= a
                    }
                    throw new Error("unreachable")
                }
            }, {
                key: "__compare",
                value: function(a, b, c) {
                    if (a = g.__toPrimitive(a), b = g.__toPrimitive(b), "string" == typeof a && "string" == typeof b) switch (c) {
                        case 0:
                            return a < b;
                        case 1:
                            return a <= b;
                        case 2:
                            return a > b;
                        case 3:
                            return a >= b
                    }
                    if (g.__isBigInt(a) && "string" == typeof b) return b = g.__fromString(b), null !== b && g.__comparisonResultToBool(g.__compareToBigInt(a, b), c);
                    if ("string" == typeof a && g.__isBigInt(b)) return a = g.__fromString(a), null !== a && g.__comparisonResultToBool(g.__compareToBigInt(a, b), c);
                    if (a = g.__toNumeric(a), b = g.__toNumeric(b), g.__isBigInt(a)) {
                        if (g.__isBigInt(b)) return g.__comparisonResultToBool(g.__compareToBigInt(a, b), c);
                        if ("number" != typeof b) throw new Error("implementation bug");
                        return g.__comparisonResultToBool(g.__compareToNumber(a, b), c)
                    }
                    if ("number" != typeof a) throw new Error("implementation bug");
                    if (g.__isBigInt(b)) return g.__comparisonResultToBool(g.__compareToNumber(b, a), 2 ^ c);
                    if ("number" != typeof b) throw new Error("implementation bug");
                    return 0 === c ? a < b : 1 === c ? a <= b : 2 === c ? a > b : 3 === c ? a >= b : void 0
                }
            }, {
                key: "__absoluteAdd",
                value: function(a, b, c) {
                    if (a.length < b.length) return g.__absoluteAdd(b, a, c);
                    if (0 === a.length) return a;
                    if (0 === b.length) return a.sign === c ? a : g.unaryMinus(a);
                    var d = a.length;
                    (0 === a.__clzmsd() || b.length === a.length && 0 === b.__clzmsd()) && d++;
                    for (var d = new g(d, c), c = 0, e = 0; e < b.length; e++) {
                        var f = b.__digit(e),
                            h = a.__digit(e),
                            m = (65535 & h) + (65535 & f) + c;
                        h = (h >>> 16) + (f >>> 16) + (m >>> 16);
                        c = h >>> 16, d.__setDigit(e, 65535 & m | h << 16)
                    }
                    for (; e < a.length; e++) {
                        f = a.__digit(e);
                        m = (65535 & f) + c;
                        h = (f >>> 16) + (m >>> 16);
                        c = h >>> 16, d.__setDigit(e, 65535 & m | h << 16)
                    }
                    return e < d.length && d.__setDigit(e, c), d.__trim()
                }
            }, {
                key: "__absoluteSub",
                value: function(a, b, c) {
                    if (0 === a.length) return a;
                    if (0 === b.length) return a.sign === c ? a : g.unaryMinus(a);
                    for (var c = new g(a.length, c), d = 0, e = 0; e < b.length; e++) {
                        var f = a.__digit(e),
                            l = b.__digit(e),
                            m = (65535 & f) - (65535 & l) - d;
                        d = 1 & m >>> 16;
                        f = (f >>> 16) - (l >>> 16) - d;
                        d = 1 & f >>> 16, c.__setDigit(e, 65535 & m | f << 16)
                    }
                    for (; e < a.length; e++) {
                        l = a.__digit(e);
                        m = (65535 & l) - d;
                        d = 1 & m >>> 16;
                        f = (l >>> 16) - d;
                        d = 1 & f >>> 16, c.__setDigit(e, 65535 & m | f << 16)
                    }
                    return c.__trim()
                }
            }, {
                key: "__absoluteAddOne",
                value: function(a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        d = a.length;
                    null === c ? c = new g(d, b) : c.sign = b;
                    for (var e = !0, f = 0; f < d; f++) {
                        var k = a.__digit(f),
                            l = -1 === k;
                        e && (k = 0 | k + 1), e = l, c.__setDigit(f, k)
                    }
                    return e && c.__setDigitGrow(d, 1), c
                }
            }, {
                key: "__absoluteSubOne",
                value: function(a, b) {
                    var c = a.length;
                    b = b || c;
                    for (var d = new g(b, !1), e = !0, f = 0; f < c; f++) {
                        var k = a.__digit(f),
                            l = 0 === k;
                        e && (k = 0 | k - 1), e = l, d.__setDigit(f, k)
                    }
                    for (var l = c; l < b; l++) d.__setDigit(l, 0);
                    return d
                }
            }, {
                key: "__absoluteAnd",
                value: function(a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        d = a.length,
                        e = b.length,
                        f = e;
                    if (d < e) {
                        f = d;
                        var m = a,
                            n = d;
                        a = b, e, b = m, n
                    }
                    var k = f;
                    null === c ? c = new g(k, !1) : k = c.length;
                    for (var l = 0; l < f; l++) c.__setDigit(l, a.__digit(l) & b.__digit(l));
                    for (; l < k; l++) c.__setDigit(l, 0);
                    return c
                }
            }, {
                key: "__absoluteAndNot",
                value: function(a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        d = a.length,
                        e = b.length,
                        f = e;
                    d < e && (f = d);
                    var k = d;
                    null === c ? c = new g(k, !1) : k = c.length;
                    for (var l = 0; l < f; l++) c.__setDigit(l, a.__digit(l) & ~b.__digit(l));
                    for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                    for (; l < k; l++) c.__setDigit(l, 0);
                    return c
                }
            }, {
                key: "__absoluteOr",
                value: function(a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        d = a.length,
                        e = b.length,
                        f = e;
                    if (d < e) {
                        f = d;
                        var m = a,
                            n = d;
                        a = b, d = e, b = m, n
                    }
                    var k = d;
                    null === c ? c = new g(k, !1) : k = c.length;
                    for (var l = 0; l < f; l++) c.__setDigit(l, a.__digit(l) | b.__digit(l));
                    for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                    for (; l < k; l++) c.__setDigit(l, 0);
                    return c
                }
            }, {
                key: "__absoluteXor",
                value: function(a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        d = a.length,
                        e = b.length,
                        f = e;
                    if (d < e) {
                        f = d;
                        var m = a,
                            n = d;
                        a = b, d = e, b = m, n
                    }
                    var k = d;
                    null === c ? c = new g(k, !1) : k = c.length;
                    for (var l = 0; l < f; l++) c.__setDigit(l, a.__digit(l) ^ b.__digit(l));
                    for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                    for (; l < k; l++) c.__setDigit(l, 0);
                    return c
                }
            }, {
                key: "__absoluteCompare",
                value: function(a, b) {
                    var c = a.length - b.length;
                    if (0 != c) return c;
                    for (var c = a.length - 1; 0 <= c && a.__digit(c) === b.__digit(c);) c--;
                    return 0 > c ? 0 : a.__unsignedDigit(c) > b.__unsignedDigit(c) ? 1 : -1
                }
            }, {
                key: "__multiplyAccumulate",
                value: function(a, b, c, d) {
                    if (0 !== b) {
                        for (var e = 65535 & b, b = b >>> 16, f = 0, g = 0, k = 0, l = 0; l < a.length; l++, d++) {
                            var m = c.__digit(d),
                                n = 65535 & m,
                                o = m >>> 16,
                                p = a.__digit(l),
                                q = 65535 & p;
                            p = p >>> 16;
                            var r = j(q, e);
                            q = j(q, b);
                            var s = j(p, e);
                            p = j(p, b);
                            n += g + (65535 & r), o += k + f + (n >>> 16) + (r >>> 16) + (65535 & q) + (65535 & s), f = o >>> 16, g = (q >>> 16) + (s >>> 16) + (65535 & p) + f, f = g >>> 16, g &= 65535, k = p >>> 16, m = 65535 & n | o << 16, c.__setDigit(d, m)
                        }
                        for (; 0 !== f || 0 !== g || 0 !== k; d++) {
                            r = c.__digit(d);
                            q = (65535 & r) + g;
                            s = (r >>> 16) + (q >>> 16) + k + f;
                            g = 0, k = 0, f = s >>> 16, r = 65535 & q | s << 16, c.__setDigit(d, r)
                        }
                    }
                }
            }, {
                key: "__internalMultiplyAdd",
                value: function(a, b, c, d, e) {
                    for (var c = c, f = 0, h = 0; h < d; h++) {
                        var l = a.__digit(h),
                            m = j(65535 & l, b),
                            n = (65535 & m) + f + c;
                        c = n >>> 16;
                        l = j(l >>> 16, b);
                        m = (65535 & l) + (m >>> 16) + c;
                        c = m >>> 16, f = l >>> 16, e.__setDigit(h, m << 16 | 65535 & n)
                    }
                    if (e.length > d)
                        for (e.__setDigit(d++, c + f); d < e.length;) e.__setDigit(d++, 0);
                    else if (0 !== c + f) throw new Error("implementation bug")
                }
            }, {
                key: "__absoluteDivSmall",
                value: function(a, b, c) {
                    null === c && (c = new g(a.length, !1));
                    for (var d = 0, e = 2 * a.length - 1; 0 <= e; e -= 2) {
                        var f = (d << 16 | a.__halfDigit(e)) >>> 0,
                            k = 0 | f / b;
                        d = 0 | f % b, f = (d << 16 | a.__halfDigit(e - 1)) >>> 0;
                        var l = 0 | f / b;
                        d = 0 | f % b, c.__setDigit(e >>> 1, k << 16 | l)
                    }
                    return c
                }
            }, {
                key: "__absoluteModSmall",
                value: function(a, b) {
                    for (var c, d = 0, e = 2 * a.length - 1; 0 <= e; e--) c = (d << 16 | a.__halfDigit(e)) >>> 0, d = 0 | c % b;
                    return d
                }
            }, {
                key: "__absoluteDivLarge",
                value: function(a, b, c, d) {
                    var f = b.__halfDigitLength(),
                        e = b.length,
                        n = a.__halfDigitLength() - f,
                        i = null;
                    c && (i = new g(n + 2 >>> 1, !1), i.__initializeDigits());
                    var l = new g(f + 2 >>> 1, !1);
                    l.__initializeDigits();
                    var m = g.__clz16(b.__halfDigit(f - 1));
                    0 < m && (b = g.__specialLeftShift(b, m, 0));
                    for (var a = g.__specialLeftShift(a, m, 1), k = b.__halfDigit(f - 1), o = 0, n = n; 0 <= n; n--) {
                        var p = 65535,
                            q = a.__halfDigit(n + f);
                        if (q !== k) {
                            q = (q << 16 | a.__halfDigit(n + f - 1)) >>> 0;
                            p = 0 | q / k;
                            for (var q = 0 | q % k, r = b.__halfDigit(f - 2), s = a.__halfDigit(n + f - 2); j(p, r) >>> 0 > (q << 16 | s) >>> 0 && (p--, q += k, !(65535 < q)););
                        }
                        g.__internalMultiplyAdd(b, p, 0, e, l);
                        r = a.__inplaceSub(l, n, f + 1);
                        0 !== r && (r = a.__inplaceAdd(b, n, f), a.__setHalfDigit(n + f, a.__halfDigit(n + f) + r), p--), c && (1 & n ? o = p << 16 : i.__setDigit(n >>> 1, o | p))
                    }
                    return d ? (a.__inplaceRightShift(m), c ? {
                        quotient: i,
                        remainder: a
                    } : a) : c ? i : void 0
                }
            }, {
                key: "__clz16",
                value: function(a) {
                    return k(a) - 16
                }
            }, {
                key: "__specialLeftShift",
                value: function(a, b, c) {
                    var e = a.length,
                        d = new g(e + c, !1);
                    if (0 === b) {
                        for (var f = 0; f < e; f++) d.__setDigit(f, a.__digit(f));
                        return 0 < c && d.__setDigit(e, 0), d
                    }
                    for (var j, f = 0, l = 0; l < e; l++) j = a.__digit(l), d.__setDigit(l, j << b | f), f = j >>> 32 - b;
                    return 0 < c && d.__setDigit(e, f), d
                }
            }, {
                key: "__leftShiftByAbsolute",
                value: function(a, b) {
                    b = g.__toShiftAmount(b);
                    if (0 > b) throw new RangeError("BigInt too big");
                    var c = b >>> 5;
                    b = 31 & b;
                    var d = a.length,
                        e = 0 !== b && 0 != a.__digit(d - 1) >>> 32 - b,
                        f = d + c + (e ? 1 : 0),
                        m = new g(f, a.sign);
                    if (0 === b) {
                        for (var n = 0; n < c; n++) m.__setDigit(n, 0);
                        for (; n < f; n++) m.__setDigit(n, a.__digit(n - c))
                    } else {
                        for (var n = 0, f = 0; f < c; f++) m.__setDigit(f, 0);
                        for (var o, f = 0; f < d; f++) o = a.__digit(f), m.__setDigit(f + c, o << b | n), n = o >>> 32 - b;
                        if (e) m.__setDigit(d + c, n);
                        else if (0 !== n) throw new Error("implementation bug")
                    }
                    return m.__trim()
                }
            }, {
                key: "__rightShiftByAbsolute",
                value: function(a, b) {
                    var c = a.length,
                        d = a.sign;
                    b = g.__toShiftAmount(b);
                    if (0 > b) return g.__rightShiftByMaximum(d);
                    var e = b >>> 5;
                    b = 31 & b;
                    var f = c - e;
                    if (0 >= f) return g.__rightShiftByMaximum(d);
                    var i = !1;
                    if (d)
                        if (0 != (a.__digit(e) & (1 << b) - 1)) i = !0;
                        else
                            for (var m = 0; m < e; m++)
                                if (0 !== a.__digit(m)) {
                                    i = !0;
                                    break
                                }
                    if (i && 0 === b) {
                        m = a.__digit(c - 1);
                        0 == ~m && f++
                    }
                    m = new g(f, d);
                    if (0 === b)
                        for (var f = e; f < c; f++) m.__setDigit(f - e, a.__digit(f));
                    else {
                        for (var n, d = a.__digit(e) >>> b, f = c - e - 1, c = 0; c < f; c++) n = a.__digit(c + e + 1), m.__setDigit(c, n << 32 - b | d), d = n >>> b;
                        m.__setDigit(f, d)
                    }
                    return i && (m = g.__absoluteAddOne(m, !0, m)), m.__trim()
                }
            }, {
                key: "__rightShiftByMaximum",
                value: function(a) {
                    return a ? g.__oneDigit(1, !0) : g.__zero()
                }
            }, {
                key: "__toShiftAmount",
                value: function(a) {
                    if (1 < a.length) return -1;
                    a = a.__unsignedDigit(0);
                    return a > g.__kMaxLengthBits ? -1 : a
                }
            }, {
                key: "__toPrimitive",
                value: function(b) {
                    var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default";
                    if ("object" !== a(b)) return b;
                    if (b.constructor === g) return b;
                    var d = b[Symbol.toPrimitive];
                    if (d) {
                        var e = d(c);
                        if ("object" !== a(e)) return e;
                        throw new TypeError("Cannot convert object to primitive value")
                    }
                    var f = b.valueOf;
                    if (f) {
                        var k = f.call(b);
                        if ("object" !== a(k)) return k
                    }
                    var l = b.toString;
                    if (l) {
                        var m = l.call(b);
                        if ("object" !== a(m)) return m
                    }
                    throw new TypeError("Cannot convert object to primitive value")
                }
            }, {
                key: "__toNumeric",
                value: function(a) {
                    return g.__isBigInt(a) ? a : +a
                }
            }, {
                key: "__isBigInt",
                value: function(b) {
                    return "object" === a(b) && b.constructor === g
                }
            }, {
                key: "__truncateToNBits",
                value: function(a, b) {
                    for (var c = a + 31 >>> 5, d = new g(c, b.sign), c = c - 1, e = 0; e < c; e++) d.__setDigit(e, b.__digit(e));
                    e = b.__digit(c);
                    if (0 != (31 & a)) {
                        b = 32 - (31 & a);
                        e = e << b >>> b
                    }
                    return d.__setDigit(c, e), d.__trim()
                }
            }, {
                key: "__truncateAndSubFromPowerOfTwo",
                value: function(a, b, c) {
                    for (var d = Math.min, e = a + 31 >>> 5, c = new g(e, c), f = 0, e = e - 1, h = 0, d = d(e, b.length); f < d; f++) {
                        var j = b.__digit(f),
                            l = 0 - (65535 & j) - h;
                        h = 1 & l >>> 16;
                        j = 0 - (j >>> 16) - h;
                        h = 1 & j >>> 16, c.__setDigit(f, 65535 & l | j << 16)
                    }
                    for (; f < e; f++) c.__setDigit(f, 0 | -h);
                    l = e < b.length ? b.__digit(e) : 0;
                    j = 31 & a;
                    if (0 === j) {
                        d = 0 - (65535 & l) - h;
                        h = 1 & d >>> 16;
                        f = 0 - (l >>> 16) - h;
                        b = 65535 & d | f << 16
                    } else {
                        a = 32 - j;
                        l = l << a >>> a;
                        d = 1 << 32 - a;
                        f = (65535 & d) - (65535 & l) - h;
                        h = 1 & f >>> 16;
                        j = (d >>> 16) - (l >>> 16) - h;
                        b = 65535 & f | j << 16, b &= d - 1
                    }
                    return c.__setDigit(e, b), c.__trim()
                }
            }, {
                key: "__digitPow",
                value: function(a, b) {
                    for (var c = 1; 0 < b;) 1 & b && (c *= a), b >>>= 1, a *= a;
                    return c
                }
            }]), g
        }(k(Array));
        return n.__kMaxLength = 33554432, n.__kMaxLengthBits = n.__kMaxLength << 5, n.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166], n.__kBitsPerCharTableShift = 5, n.__kBitsPerCharTableMultiplier = 1 << n.__kBitsPerCharTableShift, n.__kConversionChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], n.__kBitConversionBuffer = new ArrayBuffer(8), n.__kBitConversionDouble = new Float64Array(n.__kBitConversionBuffer), n.__kBitConversionInts = new Int32Array(n.__kBitConversionBuffer), n
    })
}), null);
__d("TCompactProtocolPolyfill", ["StringToUtf8", "ThriftTypes", "Utf8ToString", "jsbi"], (function(a, b, c, d, e, f, g) {
    var h = Object.freeze({
            CT_STOP: 0,
            CT_BOOLEAN_TRUE: 1,
            CT_BOOLEAN_FALSE: 2,
            CT_BYTE: 3,
            CT_I16: 4,
            CT_I32: 5,
            CT_I64: 6,
            CT_DOUBLE: 7,
            CT_BINARY: 8,
            CT_LIST: 9,
            CT_SET: 10,
            CT_MAP: 11,
            CT_STRUCT: 12,
            CT_FLOAT: 13
        }),
        i = Object.freeze({
            NONE: -1,
            CT_BOOLEAN_TRUE: h.CT_BOOLEAN_TRUE,
            CT_BOOLEAN_FALSE: h.CT_BOOLEAN_FALSE
        }),
        j = [h.CT_STOP, 0, h.CT_BOOLEAN_TRUE, h.CT_BYTE, h.CT_DOUBLE, 0, h.CT_I16, 0, h.CT_I32, 0, h.CT_I64, h.CT_BINARY, h.CT_STRUCT, h.CT_MAP, h.CT_SET, h.CT_LIST, 0, 0, 0, h.CT_FLOAT],
        k = Math.pow(2, 7) - 1,
        l = -1 * Math.pow(2, 7),
        m = Math.pow(2, 15) - 1,
        n = -1 * Math.pow(2, 15),
        o = Math.pow(2, 31) - 1,
        p = -1 * Math.pow(2, 31),
        q = Math.pow(2, 32) - 1,
        r = c("jsbi").BigInt("9223372036854775807"),
        s = c("jsbi").BigInt("-9223372036854775808"),
        t = c("jsbi").BigInt("18446744073709551615"),
        u = c("jsbi").BigInt(63),
        v = c("jsbi").BigInt(1),
        w = c("jsbi").BigInt(0),
        x = c("jsbi").BigInt(7),
        y = c("jsbi").BigInt(70),
        z = c("jsbi").BigInt(127),
        A = c("jsbi").BigInt(128),
        B = Math.pow(2, 4);
    a = function() {
        function a(a) {
            this.$4 = null, this.$5 = null, this.$1 = a, this.$2 = [], this.$3 = 0, this.$6 = new DataView(new ArrayBuffer(1))
        }
        var b = a.prototype;
        b.readStructBegin = function() {
            this.$2.push(this.$3), this.$3 = 0
        };
        b.readStructEnd = function() {
            this.$3 = this.$2.pop();
            return 0
        };
        b.writeStructBegin = function(a) {
            this.$2.push(this.$3);
            this.$3 = 0;
            return 0
        };
        b.writeStructEnd = function() {
            this.$3 = this.$2.pop();
            return 0
        };
        b.writeFieldBegin = function(a) {
            if (a.ftype === c("ThriftTypes").BOOL) {
                this.$4 = {
                    fid: a.fid,
                    fname: a.fname,
                    ftype: a.ftype
                };
                return 0
            } else return this.$7(a, i.NONE)
        };
        b.writeListBegin = function(a) {
            return this.$8(a)
        };
        b.writeListEnd = function() {
            return 0
        };
        b.writeSetBegin = function(a) {
            return this.$8(a)
        };
        b.writeSetEnd = function() {
            return 0
        };
        b.writeMapBegin = function(a) {
            var b = 0;
            if (a.size === 0) b += this.$1.writeByte(0);
            else {
                b += this.writeVarint32(a.size);
                if (a.ktype != null && a.vtype != null) b += this.$1.writeByte(this.$9(a.ktype) << 4 | this.$9(a.vtype));
                else throw new Error("received invalid map info: " + JSON.stringify(a))
            }
            return b
        };
        b.writeMapEnd = function() {
            return 0
        };
        b.$7 = function(a, b) {
            var c = 0;
            b = b === i.NONE ? this.$9(a.ftype) : b;
            a.fid > this.$3 && a.fid - this.$3 <= B - 1 ? c += this.$1.writeByte(a.fid - this.$3 << 4 | b) : (c += this.$1.writeByte(b), c += this.writeI16(a.fid));
            this.$3 = a.fid;
            return c
        };
        b.$8 = function(a) {
            var b = 0,
                c = this.$9(a.etype);
            a.size <= B - 2 ? b += this.$1.writeByte(a.size << 4 | c) : (b += this.$1.writeByte(240 | c), b += this.writeVarint32(a.size));
            return b
        };
        b.readFieldBegin = function() {
            var a = this.$1.readByte(),
                b = a & 15;
            if (b === c("ThriftTypes").STOP) return {
                ftype: c("ThriftTypes").STOP,
                fid: 0
            };
            a = (a & 240) >>> 4;
            var d;
            a === 0 ? d = this.readI16() : d = this.$3 + a;
            a = this.$10(b);
            (b === h.CT_BOOLEAN_TRUE || b === h.CT_BOOLEAN_FALSE) && (this.$5 = b === h.CT_BOOLEAN_TRUE);
            this.$3 = d;
            return {
                ftype: a,
                fid: d
            }
        };
        b.readListBegin = function() {
            return this.$11()
        };
        b.readListEnd = function() {
            return 0
        };
        b.readSetBegin = function() {
            return this.$11()
        };
        b.readSetEnd = function() {
            return 0
        };
        b.readMapBegin = function() {
            var a = this.readVarint32();
            if (a > 0) {
                var b = this.$1.readByte(),
                    c = this.$12(b >> 4, "readMapBegin:key");
                b = this.$12(b & 15, "readMapBegin:value");
                return {
                    ktype: this.$10(c),
                    vtype: this.$10(b),
                    size: a
                }
            }
            return {
                size: a
            }
        };
        b.readMapEnd = function() {
            return 0
        };
        b.$12 = function(a, b) {
            if (a < 0 || a > 13) throw new Error(b + " read invalid compact type: " + a);
            return a
        };
        b.$11 = function() {
            var a = this.$1.readByte(),
                b = this.$12(a & 15, "_readListOrSetBegin");
            b = this.$10(b);
            a = a >> 4 & 15;
            a === 15 && (a = this.readVarint32());
            return {
                etype: b,
                size: a
            }
        };
        b.readFieldEnd = function() {
            return 0
        };
        b.readByte = function() {
            this.$6.setUint8(0, this.$1.readByte());
            return this.$6.getInt8(0)
        };
        b.writeByte = function(a) {
            if (a < l || a > k) throw new Error("byte to write is out of range: " + a);
            this.$6.setInt8(0, a);
            return this.$1.writeByte(this.$6.getUint8(0))
        };
        b.readFloat = function() {
            return this.$1.readFloatBE()
        };
        b.writeFloat = function(a) {
            return this.$1.writeFloatBE(a)
        };
        b.readDouble = function() {
            return this.$1.readDoubleBE()
        };
        b.writeDouble = function(a) {
            return this.$1.writeDoubleBE(a)
        };
        b.writeString = function(a) {
            return this.writeBinary(d("StringToUtf8").StringToUtf8(a))
        };
        b.skip = function(a) {
            switch (a) {
                case c("ThriftTypes").STOP:
                    return;
                case c("ThriftTypes").BOOL:
                    this.readBool();
                    break;
                case c("ThriftTypes").BYTE:
                    this.readByte();
                    break;
                case c("ThriftTypes").DOUBLE:
                    this.readDouble();
                    break;
                case c("ThriftTypes").I16:
                    this.readI16();
                    break;
                case c("ThriftTypes").I32:
                    this.readI32();
                    break;
                case c("ThriftTypes").I64:
                    this.readI64();
                    break;
                case c("ThriftTypes").STRING:
                    this.readString();
                    break;
                case c("ThriftTypes").STRUCT:
                    this.readStructBegin();
                    var b;
                    while (!0) {
                        b = this.readFieldBegin();
                        if (b.ftype === c("ThriftTypes").STOP) break;
                        this.skip(b.ftype)
                    }
                    this.readStructEnd();
                    break;
                case c("ThriftTypes").MAP:
                    b = this.readMapBegin();
                    if (b.size > 0 && b.ktype != null && b.vtype != null) {
                        var d = b.ktype,
                            e = b.vtype;
                        for (var f = 0; f < b.size; f++) this.skip(d), this.skip(e)
                    }
                    break;
                case c("ThriftTypes").SET:
                case c("ThriftTypes").LIST:
                    f = this.$11();
                    for (var d = 0; d < f.size; d++) this.skip(f.etype);
                    break;
                case c("ThriftTypes").FLOAT:
                    this.readFloat();
                    break;
                default:
                    throw new Error("encoutered unknow thrift type: " + a + " in skip")
            }
        };
        b.toByteArray = function() {
            return this.$1.toByteArray()
        };
        b.writeFieldEnd = function() {
            return 0
        };
        b.writeFieldStop = function() {
            return this.$1.writeByte(c("ThriftTypes").STOP)
        };
        b.writeI16 = function(a) {
            if (a < n || a > m) throw new Error("trying to write i16 out of range: " + a);
            return this.writeVarint32(this.i32ToZigzag(a))
        };
        b.readI16 = function() {
            var a = this.zigzagToI32(this.readVarint32());
            if (a < n || a > m) throw new Error("read invalid i16: " + a);
            return a
        };
        b.writeI32 = function(a) {
            if (a < p || a > o) throw new Error("i32 out of range: " + a);
            return this.writeVarint32(this.i32ToZigzag(a))
        };
        b.readI32 = function() {
            return this.zigzagToI32(this.readVarint32())
        };
        b.writeI64 = function(a) {
            return this.writeVarint64(this.i64ToZigzag(a))
        };
        b.readI64 = function() {
            return this.zigzagToI64(this.readVarint64())
        };
        b.readBool = function() {
            var a;
            this.$5 != null ? (a = this.$5, this.$5 = null) : a = this.$1.readByte() === h.CT_BOOLEAN_TRUE;
            return a
        };
        b.writeBool = function(a) {
            var b = 0;
            this.$4 != null ? (b += this.$7(this.$4, a ? i.CT_BOOLEAN_TRUE : i.CT_BOOLEAN_FALSE), this.$4 = null) : b += this.$1.writeByte(a ? h.CT_BOOLEAN_TRUE : h.CT_BOOLEAN_FALSE);
            return b
        };
        b.readBinary = function() {
            var a = this.readVarint32();
            return a === 0 ? new Uint8Array(0) : this.$1.readBytes(a)
        };
        b.writeBinary = function(a) {
            var b = 0;
            b += this.writeVarint32(a.length);
            b += this.$1.write(a);
            return b
        };
        b.i32ToZigzag = function(a) {
            if (a < p || a > o) throw new Error("number: " + a + " is out of range of i32");
            return (a << 1 ^ (a < 0 ? 4294967295 : 0)) >>> 0
        };
        b.zigzagToI32 = function(a) {
            if (a < 0 || a > q) throw new Error("number: " + a + " is out of range of uint32");
            return a >>> 1 ^ -1 * (a & 1)
        };
        b.i64ToZigzag = function(a) {
            if (c("jsbi").greaterThan(a, r) || c("jsbi").lessThan(a, s)) throw new Error("i64 out of range: " + a.toString());
            return c("jsbi").bitwiseXor(c("jsbi").signedRightShift(a, u), c("jsbi").leftShift(a, v))
        };
        b.zigzagToI64 = function(a) {
            if (c("jsbi").lessThan(a, 0) || c("jsbi").greaterThan(a, t)) throw new Error("invalid uint64: " + a.toString());
            return c("jsbi").equal(c("jsbi").bitwiseAnd(a, v), v) ? c("jsbi").bitwiseNot(c("jsbi").signedRightShift(a, v)) : c("jsbi").signedRightShift(a, v)
        };
        b.writeVarint32 = function(a) {
            if (a < 0 || a > q) throw new Error("writeVarint32 received out of range uint32: " + a);
            a = a;
            var b = 0;
            while (!0)
                if (a >>> 7 === 0) {
                    this.$1.writeByte(a);
                    b++;
                    break
                } else this.$1.writeByte(a & 127 | 128), b++, a >>>= 7;
            return b
        };
        b.readVarint32 = function() {
            var a = 0,
                b = 0,
                c;
            while (!0) {
                c = this.$1.readByte();
                a = (a | (c & 127) << b) >>> 0;
                b += 7;
                if ((c & 128) == 0) {
                    if (b === 35 && (c & 240) != 0) throw new Error("result exceeded 32 bit limit");
                    break
                }
                if (b > 28) throw new Error("result exceeded 32 bit limit")
            }
            return a
        };
        b.writeVarint64 = function(a) {
            if (c("jsbi").lessThan(a, w) || c("jsbi").greaterThan(a, t)) throw new Error("invalid uint64: " + a.toString());
            a = a;
            var b = 0;
            while (!0)
                if (c("jsbi").equal(c("jsbi").signedRightShift(a, x), w)) {
                    this.$1.writeByte(c("jsbi").toNumber(a));
                    b++;
                    break
                } else {
                    var d = c("jsbi").toNumber(c("jsbi").bitwiseOr(c("jsbi").bitwiseAnd(a, z), A));
                    this.$1.writeByte(d);
                    b++;
                    a = c("jsbi").signedRightShift(a, x)
                }
            return b
        };
        b.readVarint64 = function() {
            var a = w,
                b = w,
                d;
            while (!0) {
                d = c("jsbi").BigInt(this.$1.readByte());
                a = c("jsbi").bitwiseOr(a, c("jsbi").leftShift(c("jsbi").bitwiseAnd(d, z), b));
                b = c("jsbi").add(b, x);
                if (c("jsbi").equal(c("jsbi").bitwiseAnd(d, A), w)) {
                    if (c("jsbi").equal(b, y) && c("jsbi").notEqual(d, v)) throw new Error("result exceeded 64 bit limit");
                    break
                }
                if (c("jsbi").greaterThan(b, u)) throw new Error("result exceeded 64 bit limit")
            }
            return a
        };
        b.readString = function() {
            return d("Utf8ToString").Utf8ToString(this.readBinary())
        };
        b.getLastFieldId = function() {
            return this.$3
        };
        b.getLastField = function() {
            return this.$2
        };
        b.getBooleanFieldInfo = function() {
            return this.$4
        };
        b.getBooleanValue = function() {
            return this.$5
        };
        b.$9 = function(a) {
            return j[a]
        };
        b.$10 = function(a) {
            switch (a) {
                case h.CT_STOP:
                    return c("ThriftTypes").STOP;
                case h.CT_BOOLEAN_FALSE:
                case h.CT_BOOLEAN_TRUE:
                    return c("ThriftTypes").BOOL;
                case h.CT_BYTE:
                    return c("ThriftTypes").BYTE;
                case h.CT_I16:
                    return c("ThriftTypes").I16;
                case h.CT_I32:
                    return c("ThriftTypes").I32;
                case h.CT_I64:
                    return c("ThriftTypes").I64;
                case h.CT_DOUBLE:
                    return c("ThriftTypes").DOUBLE;
                case h.CT_FLOAT:
                    return c("ThriftTypes").FLOAT;
                case h.CT_BINARY:
                    return c("ThriftTypes").STRING;
                case h.CT_LIST:
                    return c("ThriftTypes").LIST;
                case h.CT_SET:
                    return c("ThriftTypes").SET;
                case h.CT_MAP:
                    return c("ThriftTypes").MAP;
                case h.CT_STRUCT:
                    return c("ThriftTypes").STRUCT;
                default:
                    throw new Error("don't know what type")
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("TNoOpWriteBuffer", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {
            this.$1 = 0
        }
        var b = a.prototype;
        b.write = function(a) {
            this.$1 += a.length;
            return a.length
        };
        b.writeByte = function(a) {
            this.$1++;
            return 1
        };
        b.writeFloatBE = function(a) {
            this.$1 += Float32Array.BYTES_PER_ELEMENT;
            return Float32Array.BYTES_PER_ELEMENT
        };
        b.writeDoubleBE = function(a) {
            this.$1 += Float64Array.BYTES_PER_ELEMENT;
            return Float64Array.BYTES_PER_ELEMENT
        };
        b.toByteArray = function() {
            throw new Error("operation not supported")
        };
        b.currentSize = function() {
            return this.$1
        };
        b.readByte = function() {
            throw new Error("operation not supported")
        };
        b.readBytes = function(a) {
            throw new Error("operation not supported")
        };
        b.readFloatBE = function() {
            throw new Error("operation not supported")
        };
        b.readDoubleBE = function() {
            throw new Error("operation not supported")
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("TReadBuffer", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$1 = a, this.$2 = 0
        }
        var b = a.prototype;
        b.readByte = function() {
            if (this.$2 < this.$1.length) return this.$1[this.$2++];
            throw new Error("no available byte to read")
        };
        b.readBytes = function(a) {
            if (a < 0) throw new Error("cannot readBytes of negative length: " + a);
            if (a + this.$2 > this.$1.length) throw new Error("not enough bytes to read");
            var b = new Uint8Array(this.$1.buffer, this.$3(), a);
            this.$2 += a;
            return b
        };
        b.readFloatBE = function() {
            if (Float32Array.BYTES_PER_ELEMENT + this.$2 > this.$1.length) throw new Error("not enough bytes to read");
            var a = new DataView(this.$1.buffer).getFloat32(this.$3());
            this.$2 += Float32Array.BYTES_PER_ELEMENT;
            return a
        };
        b.readDoubleBE = function() {
            if (Float64Array.BYTES_PER_ELEMENT + this.$2 > this.$1.length) throw new Error("not enough bytes to read");
            var a = new DataView(this.$1.buffer).getFloat64(this.$3());
            this.$2 += Float64Array.BYTES_PER_ELEMENT;
            return a
        };
        b.$3 = function() {
            return this.$2 + this.$1.byteOffset
        };
        b.getCurrentCursor = function() {
            return this.$2
        };
        b.writeByte = function(a) {
            throw new Error("operation not supported")
        };
        b.write = function(a) {
            throw new Error("operation not supported")
        };
        b.toByteArray = function() {
            throw new Error("operation not supported")
        };
        b.writeFloatBE = function(a) {
            throw new Error("operation not supported")
        };
        b.writeDoubleBE = function(a) {
            throw new Error("operation not supported")
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("CompactSerializerPolyfill", ["TCompactProtocolPolyfill", "TNoOpWriteBuffer", "TReadBuffer", "TWriteBuffer"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b) {
        a = new(c("TReadBuffer"))(a);
        a = new(c("TCompactProtocolPolyfill"))(a);
        return b(a)
    }

    function a(a, b, c) {
        try {
            return h(a, b)
        } catch (a) {
            c != null && c(a)
        }
        return null
    }

    function i(a, b, d) {
        d === void 0 && (d = !1);
        if (d) {
            d = new(c("TNoOpWriteBuffer"))();
            var e = new(c("TCompactProtocolPolyfill"))(d);
            b(a, e);
            e = new(c("TWriteBuffer"))(d.currentSize())
        } else e = new(c("TWriteBuffer"))();
        d = new(c("TCompactProtocolPolyfill"))(e);
        b(a, d);
        return d.toByteArray()
    }

    function b(a, b, c, d) {
        c === void 0 && (c = !1);
        try {
            return i(a, b, c)
        } catch (a) {
            d != null && d(a)
        }
        return null
    }
    g.deserialize = h;
    g.deserializeNoThrow = a;
    g.serialize = i;
    g.serializeNoThrow = b
}), 98);
__d("DGWRequestStreamUtils", ["Base64"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e) {
        var f = {};
        a = Object.entries(a);
        for (var g = 0; g < a.length; g++) {
            var h = a[g],
                i = h[0];
            h = h[1];
            typeof h == "string" ? f["XRSS-" + i] = h : typeof h == "number" ? f["XRSN-" + i] = h.toString() : typeof h == "boolean" ? f["XRSB-" + i] = h.toString() : typeof h == "object" && h != null && (f["XRSO-" + i] = c("Base64").encode(JSON.stringify(h)))
        }
        b && (f["xrs-body"] = "true");
        d != null && d.length > 0 && (f["xrs-instrumentation"] = c("Base64").encode(d));
        f["XRS-Accept-Ack"] = "RSAck";
        e != null && e.ackTimeoutSec != null && (f["XRS-SRAck-Timeout"] = e.ackTimeoutSec.toString());
        return f
    }

    function h(a) {
        return Object.keys(a).reduce(function(b, c) {
            (typeof a[c] === "string" || typeof a[c] === "boolean" || typeof a[c] === "number" || typeof a[c] === "object") && (b[c] = a[c]);
            return b
        }, {})
    }

    function b(a) {
        if (a.response && a.response.instrumentation_data != null && a.response.instrumentation_data.length > 0) try {
            a = JSON.parse(new TextDecoder("utf-8").decode(a.response.instrumentation_data));
            return a.auxId
        } catch (a) {}
        return null
    }

    function d(a, b) {
        var c = a.headers;
        a = a.body;
        b.kill_body === !0 && (a = null);
        b.new_body != null && (a = b.new_body);
        if (b.new_headers != null) try {
            c = h(JSON.parse(b.new_headers))
        } catch (a) {}
        if (b.patch_headers != null) try {
            c = babelHelpers["extends"]({}, c, h(JSON.parse(b.patch_headers)))
        } catch (a) {}
        return {
            headers: c,
            body: a
        }
    }
    g.convertHeaders = a;
    g.cleanHeaders = h;
    g.getAuxIdFromPayload = b;
    g.transformContextWithRewriteDelta = d
}), 98);
__d("DGWStream", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("$InternalEnum").Mirrored(["ABNORMAL_CLOSURE", "GOING_AWAY", "SERVER_INTERNAL_ERROR", "PREMATURE_CLOSE", "UNKNOWN_ERROR", "KEEPALIVE_TIMEOUT", "TRANSPORT_CLOSED_BEFORE_STREAM_INIT", "ESTABLISHMENT_TIMEOUT", "UNAUTHORIZED", "REJECTED", "BAD_REQUEST", "DGW_SERVER_ERROR"]);

    function a(a) {
        switch (a) {
            case g.UNAUTHORIZED:
            case g.REJECTED:
            case g.BAD_REQUEST:
            case g.UNKNOWN_ERROR:
            case g.SERVER_INTERNAL_ERROR:
                return !1;
            default:
                return !0
        }
    }
    f.StreamError = g;
    f.isRetryableError = a
}), 66);
__d("DGWStreamHandler", [], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c, d, e) {
            this.$2 = a, this.$3 = b, this.$4 = c, this.$5 = d, this.$6 = e, this.$1 = !0
        }
        var b = a.prototype;
        b.onClose = function(a) {
            if (!this.$1) return;
            this.$2(a)
        };
        b.onDataReceived = function(a) {
            if (!this.$1) return;
            this.$3(a)
        };
        b.onError = function(a) {
            if (!this.$1) return;
            this.$4(a)
        };
        b.onStreamMustDrain = function(a, b) {
            if (!this.$1) return;
            this.$5(a, b)
        };
        b.onServerHasFinishedSendingData = function(a) {
            if (!this.$1) return;
            this.$6(a)
        };
        b.stop = function() {
            this.$1 = !1
        };
        b.isStopped = function() {
            return !this.$1
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("InflightAmends", ["Deferred", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "inflight_amends_timeout",
        i = "inflight_amends_duplicate_id";
    a = function() {
        function a(a, b, c) {
            this.$1 = a, this.$3 = b, this.$4 = c, this.$2 = new Map()
        }
        var b = a.prototype;
        b.add = function(a) {
            var b = this;
            if (this.$2.has(a)) throw c("err")(i);
            var d = new(c("Deferred"))(),
                e = Date.now(),
                f = setTimeout(function() {
                    b.$2.has(a) && b.reject(a, c("err")(h))
                }, this.$1);
            this.$2.set(a, {
                id: a,
                deferred: d,
                createdTimestampMs: e,
                timeoutId: f
            });
            return d.getPromise()
        };
        b.getPromise = function(a) {
            return (a = this.$5(a)) == null ? void 0 : a.deferred.getPromise()
        };
        b.resolve = function(a, b) {
            a = this.$5(a);
            a && (a.deferred.resolve == null ? void 0 : a.deferred.resolve(b), this.$3(a.id, Date.now() - a.createdTimestampMs), this.$6(a))
        };
        b.reject = function(a, b) {
            a = this.$5(a);
            a && (a.deferred.reject == null ? void 0 : a.deferred.reject(b), this.$4(a.id, b), this.$6(a))
        };
        b.$6 = function(a) {
            clearTimeout(a.timeoutId), this.$2["delete"](a.id)
        };
        b.$5 = function(a) {
            return this.$2.get(a)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("RequestStreamCommonRequestStreamCommonSerializers", ["RequestStreamCommonRequestStreamCommonTypes", "ThriftTypes", "jsbi"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        return {}
    };
    c = function() {
        return {
            bytes: Uint8Array.of()
        }
    };
    d = function() {
        return {
            message: ""
        }
    };
    f = function() {
        return {
            reason: b("RequestStreamCommonRequestStreamCommonTypes").TerminationReason.cast(0)
        }
    };
    var g = function() {
            return {}
        },
        h = function() {
            return {
                stream_id: "0",
                last_sequencer: 0,
                amendment_count: 0,
                last_status: b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.cast(0)
            }
        },
        i = function() {
            return {
                caller_timestamp_ms: "0"
            }
        },
        j = function() {
            return {
                original_ping_timestamp_ms: "0"
            }
        },
        k = function() {
            return {}
        },
        l = function(a, c) {
            c.writeStructBegin("ResponseRewriteRequest"), a.new_headers != null && (c.writeFieldBegin({
                fname: "new_headers",
                ftype: b("ThriftTypes").STRING,
                fid: 1
            }), c.writeString(a.new_headers), c.writeFieldEnd()), a.new_body != null && (c.writeFieldBegin({
                fname: "new_body",
                ftype: b("ThriftTypes").STRING,
                fid: 2
            }), c.writeBinary(a.new_body), c.writeFieldEnd()), a.patch_headers != null && (c.writeFieldBegin({
                fname: "patch_headers",
                ftype: b("ThriftTypes").STRING,
                fid: 3
            }), c.writeString(a.patch_headers), c.writeFieldEnd()), a.kill_body != null && (c.writeFieldBegin({
                fname: "kill_body",
                ftype: b("ThriftTypes").BOOL,
                fid: 4
            }), c.writeBool(a.kill_body), c.writeFieldEnd()), a.temporary != null && (c.writeFieldBegin({
                fname: "temporary",
                ftype: b("ThriftTypes").BOOL,
                fid: 5
            }), c.writeBool(a.temporary), c.writeFieldEnd()), c.writeFieldStop(), c.writeStructEnd()
        },
        m = function(a, c) {
            c.writeStructBegin("ResponseData");
            c.writeFieldBegin({
                fname: "bytes",
                ftype: b("ThriftTypes").STRING,
                fid: 1
            });
            if (a.bytes != null) c.writeBinary(a.bytes);
            else {
                var d = Uint8Array.of();
                c.writeBinary(d)
            }
            c.writeFieldEnd();
            a.metadata != null && (c.writeFieldBegin({
                fname: "metadata",
                ftype: b("ThriftTypes").STRING,
                fid: 2
            }), c.writeString(a.metadata), c.writeFieldEnd());
            c.writeFieldStop();
            c.writeStructEnd()
        },
        n = function(a, c) {
            c.writeStructBegin("LogMessage");
            c.writeFieldBegin({
                fname: "message",
                ftype: b("ThriftTypes").STRING,
                fid: 1
            });
            if (a.message != null) c.writeString(a.message);
            else {
                a = "";
                c.writeString(a)
            }
            c.writeFieldEnd();
            c.writeFieldStop();
            c.writeStructEnd()
        },
        o = function(a, c) {
            c.writeStructBegin("Termination");
            c.writeFieldBegin({
                fname: "reason",
                ftype: b("ThriftTypes").I32,
                fid: 1
            });
            if (a.reason != null) {
                var d;
                c.writeI32((d = a.reason) != null ? d : 0)
            } else {
                d = b("RequestStreamCommonRequestStreamCommonTypes").TerminationReason.cast(0);
                c.writeI32((d = d) != null ? d : 0)
            }
            c.writeFieldEnd();
            a.message != null && (c.writeFieldBegin({
                fname: "message",
                ftype: b("ThriftTypes").STRING,
                fid: 2
            }), c.writeString(a.message), c.writeFieldEnd());
            a.retry_delay_ms != null && (c.writeFieldBegin({
                fname: "retry_delay_ms",
                ftype: b("ThriftTypes").I64,
                fid: 3
            }), c.writeI64(b("jsbi").BigInt(a.retry_delay_ms)), c.writeFieldEnd());
            c.writeFieldStop();
            c.writeStructEnd()
        },
        p = function(a, c) {
            c.writeStructBegin("AmendStreamAck"), a.amendment_id != null && (c.writeFieldBegin({
                fname: "amendment_id",
                ftype: b("ThriftTypes").I64,
                fid: 1
            }), c.writeI64(b("jsbi").BigInt(a.amendment_id)), c.writeFieldEnd()), a.accepted != null && (c.writeFieldBegin({
                fname: "accepted",
                ftype: b("ThriftTypes").BOOL,
                fid: 2
            }), c.writeBool(a.accepted), c.writeFieldEnd()), a.result != null && (c.writeFieldBegin({
                fname: "result",
                ftype: b("ThriftTypes").STRING,
                fid: 3
            }), c.writeBinary(a.result), c.writeFieldEnd()), c.writeFieldStop(), c.writeStructEnd()
        },
        q = function(a, c) {
            c.writeStructBegin("StreamCheck");
            c.writeFieldBegin({
                fname: "stream_id",
                ftype: b("ThriftTypes").I64,
                fid: 1
            });
            if (a.stream_id != null) c.writeI64(b("jsbi").BigInt(a.stream_id));
            else {
                var d = "0";
                c.writeI64(b("jsbi").BigInt(d))
            }
            c.writeFieldEnd();
            c.writeFieldBegin({
                fname: "last_sequencer",
                ftype: b("ThriftTypes").I32,
                fid: 2
            });
            if (a.last_sequencer != null) c.writeI32(a.last_sequencer);
            else {
                d = 0;
                c.writeI32(d)
            }
            c.writeFieldEnd();
            c.writeFieldBegin({
                fname: "amendment_count",
                ftype: b("ThriftTypes").I32,
                fid: 4
            });
            if (a.amendment_count != null) c.writeI32(a.amendment_count);
            else {
                d = 0;
                c.writeI32(d)
            }
            c.writeFieldEnd();
            c.writeFieldBegin({
                fname: "last_status",
                ftype: b("ThriftTypes").I32,
                fid: 3
            });
            if (a.last_status != null) {
                c.writeI32((d = a.last_status) != null ? d : 0)
            } else {
                a = b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.cast(0);
                c.writeI32((d = a) != null ? d : 0)
            }
            c.writeFieldEnd();
            c.writeFieldStop();
            c.writeStructEnd()
        },
        r = function(a, c) {
            c.writeStructBegin("Ping");
            c.writeFieldBegin({
                fname: "caller_timestamp_ms",
                ftype: b("ThriftTypes").I64,
                fid: 1
            });
            if (a.caller_timestamp_ms != null) c.writeI64(b("jsbi").BigInt(a.caller_timestamp_ms));
            else {
                var d = "0";
                c.writeI64(b("jsbi").BigInt(d))
            }
            c.writeFieldEnd();
            if (a.streams_to_check != null) {
                c.writeFieldBegin({
                    fname: "streams_to_check",
                    ftype: b("ThriftTypes").LIST,
                    fid: 2
                });
                c.writeListBegin({
                    etype: b("ThriftTypes").STRUCT,
                    size: a.streams_to_check.length
                });
                for (var d = a.streams_to_check, a = Array.isArray(d), e = 0, d = a ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (a) {
                        if (e >= d.length) break;
                        f = d[e++]
                    } else {
                        e = d.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    q(f, c)
                }
                c.writeListEnd();
                c.writeFieldEnd()
            }
            c.writeFieldStop();
            c.writeStructEnd()
        },
        s = function(a, c) {
            c.writeStructBegin("Pong");
            c.writeFieldBegin({
                fname: "original_ping_timestamp_ms",
                ftype: b("ThriftTypes").I64,
                fid: 1
            });
            if (a.original_ping_timestamp_ms != null) c.writeI64(b("jsbi").BigInt(a.original_ping_timestamp_ms));
            else {
                var d = "0";
                c.writeI64(b("jsbi").BigInt(d))
            }
            c.writeFieldEnd();
            if (a.stream_ids_missing != null) {
                c.writeFieldBegin({
                    fname: "stream_ids_missing",
                    ftype: b("ThriftTypes").LIST,
                    fid: 2
                });
                c.writeListBegin({
                    etype: b("ThriftTypes").I64,
                    size: a.stream_ids_missing.length
                });
                for (var d = a.stream_ids_missing, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                    c.writeI64(b("jsbi").BigInt(g))
                }
                c.writeListEnd();
                c.writeFieldEnd()
            }
            if (a.stream_ids_behind != null) {
                c.writeFieldBegin({
                    fname: "stream_ids_behind",
                    ftype: b("ThriftTypes").LIST,
                    fid: 3
                });
                c.writeListBegin({
                    etype: b("ThriftTypes").I64,
                    size: a.stream_ids_behind.length
                });
                for (var g = a.stream_ids_behind, f = Array.isArray(g), e = 0, g = f ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (f) {
                        if (e >= g.length) break;
                        d = g[e++]
                    } else {
                        e = g.next();
                        if (e.done) break;
                        d = e.value
                    }
                    d = d;
                    c.writeI64(b("jsbi").BigInt(d))
                }
                c.writeListEnd();
                c.writeFieldEnd()
            }
            if (a.stream_ids_with_lost_amendments != null) {
                c.writeFieldBegin({
                    fname: "stream_ids_with_lost_amendments",
                    ftype: b("ThriftTypes").LIST,
                    fid: 4
                });
                c.writeListBegin({
                    etype: b("ThriftTypes").I64,
                    size: a.stream_ids_with_lost_amendments.length
                });
                for (var d = a.stream_ids_with_lost_amendments, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (e) {
                        if (f >= d.length) break;
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) break;
                        g = f.value
                    }
                    g = g;
                    c.writeI64(b("jsbi").BigInt(g))
                }
                c.writeListEnd();
                c.writeFieldEnd()
            }
            if (a.stream_ids_with_wrong_status != null) {
                c.writeFieldBegin({
                    fname: "stream_ids_with_wrong_status",
                    ftype: b("ThriftTypes").LIST,
                    fid: 5
                });
                c.writeListBegin({
                    etype: b("ThriftTypes").I64,
                    size: a.stream_ids_with_wrong_status.length
                });
                for (var g = a.stream_ids_with_wrong_status, f = Array.isArray(g), e = 0, g = f ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (f) {
                        if (e >= g.length) break;
                        d = g[e++]
                    } else {
                        e = g.next();
                        if (e.done) break;
                        d = e.value
                    }
                    a = d;
                    c.writeI64(b("jsbi").BigInt(a))
                }
                c.writeListEnd();
                c.writeFieldEnd()
            }
            c.writeFieldStop();
            c.writeStructEnd()
        },
        t = function(a, c) {
            c.writeStructBegin("StreamResponseDelta");
            if (a.flow_status != null) {
                var d;
                c.writeFieldBegin({
                    fname: "flow_status",
                    ftype: b("ThriftTypes").I32,
                    fid: 1
                });
                c.writeI32((d = a.flow_status) != null ? d : 0);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.log != null) {
                c.writeFieldBegin({
                    fname: "log",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 2
                });
                n(a.log, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.rewrite != null) {
                c.writeFieldBegin({
                    fname: "rewrite",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 3
                });
                l(a.rewrite, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.data != null) {
                c.writeFieldBegin({
                    fname: "data",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 4
                });
                m(a.data, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.termination != null) {
                c.writeFieldBegin({
                    fname: "termination",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 5
                });
                o(a.termination, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.amend_ack != null) {
                c.writeFieldBegin({
                    fname: "amend_ack",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 6
                });
                p(a.amend_ack, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            c.writeFieldStop();
            c.writeStructEnd()
        },
        u = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").STRING ? c.new_headers = a.readString() : a.skip(e);
                        break;
                    case 2:
                        e === b("ThriftTypes").STRING ? c.new_body = a.readBinary() : a.skip(e);
                        break;
                    case 3:
                        e === b("ThriftTypes").STRING ? c.patch_headers = a.readString() : a.skip(e);
                        break;
                    case 4:
                        e === b("ThriftTypes").BOOL ? c.kill_body = a.readBool() : a.skip(e);
                        break;
                    case 5:
                        e === b("ThriftTypes").BOOL ? c.temporary = a.readBool() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            return c
        },
        v = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").STRING ? c.bytes = a.readBinary() : a.skip(e);
                        break;
                    case 2:
                        e === b("ThriftTypes").STRING ? c.metadata = a.readString() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.bytes === void 0 && (c.bytes = Uint8Array.of());
            return c
        },
        w = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").STRING ? c.message = a.readString() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.message === void 0 && (c.message = "");
            return c
        },
        x = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").I32 ? c.reason = b("RequestStreamCommonRequestStreamCommonTypes").TerminationReason.cast(a.readI32()) : a.skip(e);
                        break;
                    case 2:
                        e === b("ThriftTypes").STRING ? c.message = a.readString() : a.skip(e);
                        break;
                    case 3:
                        e === b("ThriftTypes").I64 ? c.retry_delay_ms = a.readI64().toString() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.reason === void 0 && (c.reason = b("RequestStreamCommonRequestStreamCommonTypes").TerminationReason.cast(0));
            return c
        },
        y = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").I64 ? c.amendment_id = a.readI64().toString() : a.skip(e);
                        break;
                    case 2:
                        e === b("ThriftTypes").BOOL ? c.accepted = a.readBool() : a.skip(e);
                        break;
                    case 3:
                        e === b("ThriftTypes").STRING ? c.result = a.readBinary() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            return c
        },
        z = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").I64 ? c.stream_id = a.readI64().toString() : a.skip(e);
                        break;
                    case 2:
                        e === b("ThriftTypes").I32 ? c.last_sequencer = a.readI32() : a.skip(e);
                        break;
                    case 4:
                        e === b("ThriftTypes").I32 ? c.amendment_count = a.readI32() : a.skip(e);
                        break;
                    case 3:
                        e === b("ThriftTypes").I32 ? c.last_status = b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.cast(a.readI32()) : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.stream_id === void 0 && (c.stream_id = "0");
            c.last_sequencer === void 0 && (c.last_sequencer = 0);
            c.amendment_count === void 0 && (c.amendment_count = 0);
            c.last_status === void 0 && (c.last_status = b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.cast(0));
            return c
        },
        A = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").I64 ? c.caller_timestamp_ms = a.readI64().toString() : a.skip(e);
                        break;
                    case 2:
                        if (e === b("ThriftTypes").LIST) {
                            c.streams_to_check = [];
                            d = a.readListBegin();
                            for (var f = 0; f < d.size; f++) {
                                var g = z(a);
                                c.streams_to_check.push(g)
                            }
                        } else a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.caller_timestamp_ms === void 0 && (c.caller_timestamp_ms = "0");
            return c
        },
        B = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").I64 ? c.original_ping_timestamp_ms = a.readI64().toString() : a.skip(e);
                        break;
                    case 2:
                        if (e === b("ThriftTypes").LIST) {
                            c.stream_ids_missing = [];
                            d = a.readListBegin();
                            for (var f = 0; f < d.size; f++) {
                                var g = a.readI64().toString();
                                c.stream_ids_missing.push(g)
                            }
                        } else a.skip(e);
                        break;
                    case 3:
                        if (e === b("ThriftTypes").LIST) {
                            c.stream_ids_behind = [];
                            g = a.readListBegin();
                            for (var f = 0; f < g.size; f++) {
                                d = a.readI64().toString();
                                c.stream_ids_behind.push(d)
                            }
                        } else a.skip(e);
                        break;
                    case 4:
                        if (e === b("ThriftTypes").LIST) {
                            c.stream_ids_with_lost_amendments = [];
                            d = a.readListBegin();
                            for (var f = 0; f < d.size; f++) {
                                g = a.readI64().toString();
                                c.stream_ids_with_lost_amendments.push(g)
                            }
                        } else a.skip(e);
                        break;
                    case 5:
                        if (e === b("ThriftTypes").LIST) {
                            c.stream_ids_with_wrong_status = [];
                            g = a.readListBegin();
                            for (var f = 0; f < g.size; f++) {
                                d = a.readI64().toString();
                                c.stream_ids_with_wrong_status.push(d)
                            }
                        } else a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.original_ping_timestamp_ms === void 0 && (c.original_ping_timestamp_ms = "0");
            return c
        },
        C = function(a) {
            var c, d = {};
            a.readStructBegin();
            while (!0) {
                var e = a.readFieldBegin(),
                    f = e.ftype;
                e = e.fid;
                if (f === b("ThriftTypes").STOP) break;
                switch (e) {
                    case 1:
                        if (f === b("ThriftTypes").I32)
                            if (c == null) d.flow_status = b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.cast(a.readI32()), c = "flow_status";
                            else throw new Error("more than one field have been deserialized in union type: StreamResponseDelta; current field: flow_status, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 2:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.log = w(a), c = "log";
                            else throw new Error("more than one field have been deserialized in union type: StreamResponseDelta; current field: log, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 3:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.rewrite = u(a), c = "rewrite";
                            else throw new Error("more than one field have been deserialized in union type: StreamResponseDelta; current field: rewrite, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 4:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.data = v(a), c = "data";
                            else throw new Error("more than one field have been deserialized in union type: StreamResponseDelta; current field: data, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 5:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.termination = x(a), c = "termination";
                            else throw new Error("more than one field have been deserialized in union type: StreamResponseDelta; current field: termination, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 6:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.amend_ack = y(a), c = "amend_ack";
                            else throw new Error("more than one field have been deserialized in union type: StreamResponseDelta; current field: amend_ack, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    default:
                        a.skip(f)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            return d
        };
    e.exports = {
        AmendStreamAck$DefaultConstructor: g,
        LogMessage$DefaultConstructor: d,
        Ping$DefaultConstructor: i,
        Pong$DefaultConstructor: j,
        ResponseData$DefaultConstructor: c,
        ResponseRewriteRequest$DefaultConstructor: a,
        StreamCheck$DefaultConstructor: h,
        StreamResponseDelta$DefaultConstructor: k,
        Termination$DefaultConstructor: f,
        deserializeAmendStreamAck: y,
        deserializeLogMessage: w,
        deserializePing: A,
        deserializePong: B,
        deserializeResponseData: v,
        deserializeResponseRewriteRequest: u,
        deserializeStreamCheck: z,
        deserializeStreamResponseDelta: C,
        deserializeTermination: x,
        serializeAmendStreamAck: p,
        serializeLogMessage: n,
        serializePing: r,
        serializePong: s,
        serializeResponseData: m,
        serializeResponseRewriteRequest: l,
        serializeStreamCheck: q,
        serializeStreamResponseDelta: t,
        serializeTermination: o
    }
}), null);
__d("RequestStreamSingleChannelSingleChannelRequestStreamTypes", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        Ignored: 100,
        Success: 200,
        Queued: 250,
        UnknownStream: 400,
        HandledUnknownResult: 450,
        Failure: 500
    });
    c = b("$InternalEnum")({
        Request_headers: "request_headers",
        Request_body: "request_body",
        Amend: "amend",
        Ack: "ack",
        Response: "response",
        Ping: "ping",
        Pong: "pong"
    });
    e.exports = {
        Ack: a,
        Payload$Types: c
    }
}), null);
__d("RequestStreamSingleChannelSingleChannelRequestStreamSerializers", ["RequestStreamCommonRequestStreamCommonSerializers", "RequestStreamCommonRequestStreamCommonTypes", "RequestStreamSingleChannelSingleChannelRequestStreamTypes", "ThriftTypes", "jsbi"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        return {}
    };
    c = function() {
        return {
            body: Uint8Array.of()
        }
    };
    d = function() {
        return {
            amendment: Uint8Array.of()
        }
    };
    f = function() {
        return {
            ack: b("RequestStreamSingleChannelSingleChannelRequestStreamTypes").Ack.cast(0)
        }
    };
    var g = function() {
            return {
                delta: []
            }
        },
        h = function() {
            return {}
        },
        i = function(a, c) {
            c.writeStructBegin("RequestStreamHeaders"), a.headers != null && (c.writeFieldBegin({
                fname: "headers",
                ftype: b("ThriftTypes").STRING,
                fid: 1
            }), c.writeBinary(a.headers), c.writeFieldEnd()), a.instrumentation_data != null && (c.writeFieldBegin({
                fname: "instrumentation_data",
                ftype: b("ThriftTypes").STRING,
                fid: 2
            }), c.writeBinary(a.instrumentation_data), c.writeFieldEnd()), c.writeFieldStop(), c.writeStructEnd()
        },
        j = function(a, c) {
            c.writeStructBegin("RequestStreamBody");
            c.writeFieldBegin({
                fname: "body",
                ftype: b("ThriftTypes").STRING,
                fid: 1
            });
            if (a.body != null) c.writeBinary(a.body);
            else {
                a = Uint8Array.of();
                c.writeBinary(a)
            }
            c.writeFieldEnd();
            c.writeFieldStop();
            c.writeStructEnd()
        },
        k = function(a, c) {
            c.writeStructBegin("AmendStream");
            a.amendment_id != null && (c.writeFieldBegin({
                fname: "amendment_id",
                ftype: b("ThriftTypes").I64,
                fid: 1
            }), c.writeI64(b("jsbi").BigInt(a.amendment_id)), c.writeFieldEnd());
            c.writeFieldBegin({
                fname: "amendment",
                ftype: b("ThriftTypes").STRING,
                fid: 2
            });
            if (a.amendment != null) c.writeBinary(a.amendment);
            else {
                var d = Uint8Array.of();
                c.writeBinary(d)
            }
            c.writeFieldEnd();
            a.is_query != null && (c.writeFieldBegin({
                fname: "is_query",
                ftype: b("ThriftTypes").BOOL,
                fid: 3
            }), c.writeBool(a.is_query), c.writeFieldEnd());
            a.instrumentation_data != null && (c.writeFieldBegin({
                fname: "instrumentation_data",
                ftype: b("ThriftTypes").STRING,
                fid: 4
            }), c.writeBinary(a.instrumentation_data), c.writeFieldEnd());
            c.writeFieldStop();
            c.writeStructEnd()
        },
        l = function(a, c) {
            c.writeStructBegin("StreamResponseAck");
            a.response_id != null && (c.writeFieldBegin({
                fname: "response_id",
                ftype: b("ThriftTypes").I64,
                fid: 1
            }), c.writeI64(b("jsbi").BigInt(a.response_id)), c.writeFieldEnd());
            c.writeFieldBegin({
                fname: "ack",
                ftype: b("ThriftTypes").I32,
                fid: 2
            });
            if (a.ack != null) {
                var d;
                c.writeI32((d = a.ack) != null ? d : 0)
            } else {
                d = b("RequestStreamSingleChannelSingleChannelRequestStreamTypes").Ack.cast(0);
                c.writeI32((d = d) != null ? d : 0)
            }
            c.writeFieldEnd();
            a.query_result != null && (c.writeFieldBegin({
                fname: "query_result",
                ftype: b("ThriftTypes").STRING,
                fid: 3
            }), c.writeBinary(a.query_result), c.writeFieldEnd());
            c.writeFieldStop();
            c.writeStructEnd()
        },
        m = function(a, c) {
            c.writeStructBegin("StreamResponse");
            a.response_id != null && (c.writeFieldBegin({
                fname: "response_id",
                ftype: b("ThriftTypes").I64,
                fid: 1
            }), c.writeI64(b("jsbi").BigInt(a.response_id)), c.writeFieldEnd());
            c.writeFieldBegin({
                fname: "delta",
                ftype: b("ThriftTypes").LIST,
                fid: 2
            });
            if (a.delta != null) {
                c.writeListBegin({
                    etype: b("ThriftTypes").STRUCT,
                    size: a.delta.length
                });
                for (var d = a.delta, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
                    b("RequestStreamCommonRequestStreamCommonSerializers").serializeStreamResponseDelta(g, c)
                }
                c.writeListEnd()
            } else {
                g = [];
                c.writeListBegin({
                    etype: b("ThriftTypes").STRUCT,
                    size: g.length
                });
                for (var f = 0; f < g.length; f++) {
                    e = g[f];
                    b("RequestStreamCommonRequestStreamCommonSerializers").serializeStreamResponseDelta(e, c)
                }
                c.writeListEnd()
            }
            c.writeFieldEnd();
            if (a.ack_level != null) {
                c.writeFieldBegin({
                    fname: "ack_level",
                    ftype: b("ThriftTypes").I32,
                    fid: 3
                });
                c.writeI32((d = a.ack_level) != null ? d : 0);
                c.writeFieldEnd()
            }
            a.query_request != null && (c.writeFieldBegin({
                fname: "query_request",
                ftype: b("ThriftTypes").STRING,
                fid: 4
            }), c.writeBinary(a.query_request), c.writeFieldEnd());
            a.instrumentation_data != null && (c.writeFieldBegin({
                fname: "instrumentation_data",
                ftype: b("ThriftTypes").STRING,
                fid: 5
            }), c.writeBinary(a.instrumentation_data), c.writeFieldEnd());
            c.writeFieldStop();
            c.writeStructEnd()
        },
        n = function(a, c) {
            c.writeStructBegin("Payload");
            if (a.request_headers != null) {
                c.writeFieldBegin({
                    fname: "request_headers",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 1
                });
                i(a.request_headers, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.request_body != null) {
                c.writeFieldBegin({
                    fname: "request_body",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 2
                });
                j(a.request_body, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.amend != null) {
                c.writeFieldBegin({
                    fname: "amend",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 3
                });
                k(a.amend, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.ack != null) {
                c.writeFieldBegin({
                    fname: "ack",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 4
                });
                l(a.ack, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.response != null) {
                c.writeFieldBegin({
                    fname: "response",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 5
                });
                m(a.response, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.ping != null) {
                c.writeFieldBegin({
                    fname: "ping",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 6
                });
                b("RequestStreamCommonRequestStreamCommonSerializers").serializePing(a.ping, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            if (a.pong != null) {
                c.writeFieldBegin({
                    fname: "pong",
                    ftype: b("ThriftTypes").STRUCT,
                    fid: 7
                });
                b("RequestStreamCommonRequestStreamCommonSerializers").serializePong(a.pong, c);
                c.writeFieldEnd();
                c.writeFieldStop();
                c.writeStructEnd();
                return
            }
            c.writeFieldStop();
            c.writeStructEnd()
        },
        o = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").STRING ? c.headers = a.readBinary() : a.skip(e);
                        break;
                    case 2:
                        e === b("ThriftTypes").STRING ? c.instrumentation_data = a.readBinary() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            return c
        },
        p = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").STRING ? c.body = a.readBinary() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.body === void 0 && (c.body = Uint8Array.of());
            return c
        },
        q = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").I64 ? c.amendment_id = a.readI64().toString() : a.skip(e);
                        break;
                    case 2:
                        e === b("ThriftTypes").STRING ? c.amendment = a.readBinary() : a.skip(e);
                        break;
                    case 3:
                        e === b("ThriftTypes").BOOL ? c.is_query = a.readBool() : a.skip(e);
                        break;
                    case 4:
                        e === b("ThriftTypes").STRING ? c.instrumentation_data = a.readBinary() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.amendment === void 0 && (c.amendment = Uint8Array.of());
            return c
        },
        r = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").I64 ? c.response_id = a.readI64().toString() : a.skip(e);
                        break;
                    case 2:
                        e === b("ThriftTypes").I32 ? c.ack = b("RequestStreamSingleChannelSingleChannelRequestStreamTypes").Ack.cast(a.readI32()) : a.skip(e);
                        break;
                    case 3:
                        e === b("ThriftTypes").STRING ? c.query_result = a.readBinary() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.ack === void 0 && (c.ack = b("RequestStreamSingleChannelSingleChannelRequestStreamTypes").Ack.cast(0));
            return c
        },
        s = function(a) {
            var c = {};
            a.readStructBegin();
            while (!0) {
                var d = a.readFieldBegin(),
                    e = d.ftype;
                d = d.fid;
                if (e === b("ThriftTypes").STOP) break;
                switch (d) {
                    case 1:
                        e === b("ThriftTypes").I64 ? c.response_id = a.readI64().toString() : a.skip(e);
                        break;
                    case 2:
                        if (e === b("ThriftTypes").LIST) {
                            c.delta = [];
                            d = a.readListBegin();
                            for (var f = 0; f < d.size; f++) {
                                var g = b("RequestStreamCommonRequestStreamCommonSerializers").deserializeStreamResponseDelta(a);
                                c.delta.push(g)
                            }
                        } else a.skip(e);
                        break;
                    case 3:
                        e === b("ThriftTypes").I32 ? c.ack_level = b("RequestStreamCommonRequestStreamCommonTypes").AckLevel.cast(a.readI32()) : a.skip(e);
                        break;
                    case 4:
                        e === b("ThriftTypes").STRING ? c.query_request = a.readBinary() : a.skip(e);
                        break;
                    case 5:
                        e === b("ThriftTypes").STRING ? c.instrumentation_data = a.readBinary() : a.skip(e);
                        break;
                    default:
                        a.skip(e)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            c.delta === void 0 && (c.delta = []);
            return c
        },
        t = function(a) {
            var c, d = {};
            a.readStructBegin();
            while (!0) {
                var e = a.readFieldBegin(),
                    f = e.ftype;
                e = e.fid;
                if (f === b("ThriftTypes").STOP) break;
                switch (e) {
                    case 1:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.request_headers = o(a), c = "request_headers";
                            else throw new Error("more than one field have been deserialized in union type: Payload; current field: request_headers, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 2:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.request_body = p(a), c = "request_body";
                            else throw new Error("more than one field have been deserialized in union type: Payload; current field: request_body, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 3:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.amend = q(a), c = "amend";
                            else throw new Error("more than one field have been deserialized in union type: Payload; current field: amend, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 4:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.ack = r(a), c = "ack";
                            else throw new Error("more than one field have been deserialized in union type: Payload; current field: ack, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 5:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.response = s(a), c = "response";
                            else throw new Error("more than one field have been deserialized in union type: Payload; current field: response, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 6:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.ping = b("RequestStreamCommonRequestStreamCommonSerializers").deserializePing(a), c = "ping";
                            else throw new Error("more than one field have been deserialized in union type: Payload; current field: ping, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    case 7:
                        if (f === b("ThriftTypes").STRUCT)
                            if (c == null) d.pong = b("RequestStreamCommonRequestStreamCommonSerializers").deserializePong(a), c = "pong";
                            else throw new Error("more than one field have been deserialized in union type: Payload; current field: pong, previous deserialized field: " + c);
                        else a.skip(f);
                        break;
                    default:
                        a.skip(f)
                }
                a.readFieldEnd()
            }
            a.readStructEnd();
            return d
        };
    e.exports = {
        AmendStream$DefaultConstructor: d,
        Payload$DefaultConstructor: h,
        RequestStreamBody$DefaultConstructor: c,
        RequestStreamHeaders$DefaultConstructor: a,
        StreamResponse$DefaultConstructor: g,
        StreamResponseAck$DefaultConstructor: f,
        deserializeAmendStream: q,
        deserializePayload: t,
        deserializeRequestStreamBody: p,
        deserializeRequestStreamHeaders: o,
        deserializeStreamResponse: s,
        deserializeStreamResponseAck: r,
        serializeAmendStream: k,
        serializePayload: n,
        serializeRequestStreamBody: j,
        serializeRequestStreamHeaders: i,
        serializeStreamResponse: m,
        serializeStreamResponseAck: l
    }
}), null);
__d("RequestStreamState", ["RequestStreamCommonRequestStreamCommonTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        switch (b) {
            case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted:
                return a.seenAccepted ? a : {
                    flowStatus: d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted,
                    seenAccepted: !0
                };
            default:
                if (!a.seenAccepted || a.flowStatus === b) return a;
                else return {
                    flowStatus: b,
                    seenAccepted: !0
                }
        }
    }
    g.getNextState = a
}), 98);
__d("DGWRequestStreamRef", ["CompactSerializerPolyfill", "DGWRequestStreamUtils", "DGWStream", "DGWStreamHandler", "InflightAmends", "Promise", "RTISubscriptionManagerConfig", "RequestStreamCloseReason", "RequestStreamCommonRequestStreamCommonTypes", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "RequestStreamE2ELogger", "RequestStreamE2ESampling", "RequestStreamSingleChannelSingleChannelRequestStreamSerializers", "RequestStreamSingleChannelSingleChannelRequestStreamTypes", "RequestStreamState", "RequestStreamTransport", "err", "gkx", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 4,
        i = 0,
        j = 1e3,
        k = 2,
        l = 5e3,
        m = "dgw_stream_send_ack_failure",
        n = "javascript-sandbox";

    function o(a) {
        if (!a) {
            a = c("err")(m);
            a.stack;
            throw a
        }
    }

    function p(a, b) {
        if (a == null || a.length === 0) return null;
        a = JSON.parse(a);
        a.auxId = b;
        return new TextEncoder().encode(JSON.stringify(a))
    }

    function q(a) {
        var b = {};
        a = a.delta;
        a.forEach(function(a) {
            if (a.flow_status) switch (a.flow_status) {
                case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted:
                    b.flow_status = "Accepted";
                    break;
                case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started:
                    b.flow_status = "Started";
                    break;
                case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped:
                    b.flow_status = "Stopped";
                    break
            }
        });
        return b
    }
    a = function() {
        function a(a, b, e, f, g, i) {
            var j = this;
            this.$6 = null;
            this.$7 = {};
            this.$10 = !1;
            this.$15 = 0;
            this.$16 = 0;
            this.$19 = 0;
            var k = null;
            typeof b == "string" ? k = new TextEncoder().encode(b) : typeof b == "object" && (k = b);
            this.$1 = {
                headers: a,
                body: k
            };
            this.$3 = e;
            this.$4 = f;
            this.$12 = h;
            this.$9 = !1;
            this.$14 = !1;
            this.$18 = i;
            g != null && (this.$20() || (g.dgwStreamGroupLoggingId = this.$18.getStreamGroupLoggingId()), g.dgwCountPriorStreamsInGroup = this.$18.guessStreamGroupPriorStreamCount());
            this.$5 = d("RequestStreamE2ESampling").validateInstrumentationData(a, g, f == null ? void 0 : f.requestLogContext, f == null ? void 0 : f.upsampleMultiplier);
            !this.$20() ? this.$6 = d("RequestStreamE2ELogger").createStreamLogger(a, this.$5, d("RequestStreamTransport").RequestStreamTransport.WEB_RS_STARGATE) : this.$7.disableFalcoLogging = !0;
            this.$6 && (this.$7.loggingId = this.$6.getRequestId());
            f && f.overrideUrl != null && (this.$7.overrideUrl = f.overrideUrl);
            this.$8 = {
                flowStatus: d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped,
                seenAccepted: !1
            };
            this.$17 = new(c("InflightAmends"))(l, function(a, b) {
                var d;
                (d = j.$6) == null ? void 0 : d.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                    latency: b.toString()
                }, a)
            }, function(a, b) {
                if (b.message !== m) {
                    var d;
                    (d = j.$6) == null ? void 0 : d.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                        reason: b.message
                    }, a)
                }
            });
            (k = this.$6) == null ? void 0 : k.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                data_size: (i = b == null ? void 0 : (e = b.length) == null ? void 0 : e.toString()) != null ? i : "0"
            }, "0")
        }
        var e = a.prototype;
        e.getInstrumentationData = function() {
            return this.$5
        };
        e.getE2EClientLogger = function() {
            return this.$6
        };
        e.amendWithAck = function(a) {
            a = this.$21(a, !0);
            return a === null || a === void 0 ? b("Promise").resolve(!1) : this.$17.getPromise(a) || b("Promise").resolve(!1)
        };
        e.amendWithoutAck = function(a) {
            this.$21(a, !1)
        };
        e.cancel = function() {
            var a;
            (a = this.$6) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").CANCEL, c("RequestStreamE2EClientLoggerEvent").RECEIVED);
            this.$9 = !0;
            this.$22(d("RequestStreamCloseReason").RequestStreamCloseReason.UserIntention, "user cancel the stream", !0)
        };
        e.start = function(a) {
            var e = this;
            a === void 0 && (a = !1);
            var f = String(this.$15++),
                g = Date.now();
            return this.$23(f).then(function() {
                var a;
                e.$14 = !1;
                e.$19 = 0;
                var b = (Date.now() - g).toString();
                (a = e.$6) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").PUBACK, {
                    latency: b
                }, f)
            })["catch"](function(g) {
                g.stack;
                if (g.message === m && e.$10) return;
                e.$14 = !1;
                if (c("gkx")("1799") || g.message !== "Transport could not be initialized") {
                    var h;
                    (h = e.$6) == null ? void 0 : h.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                        reason: g.message
                    }, f);
                    e.$22(a ? d("RequestStreamCloseReason").RequestStreamCloseReason.ReestablishError : d("RequestStreamCloseReason").RequestStreamCloseReason.StartStreamFailure, g.message, !0);
                    throw g
                } else {
                    if (!e.$19) {
                        (h = e.$6) == null ? void 0 : h.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                            reason: g.message
                        }, f)
                    }
                    var i = j * Math.pow(k, e.$19);
                    return new(b("Promise"))(function(a) {
                        return setTimeout(a, i)
                    }).then(function() {
                        e.$19++;
                        return e.start()
                    })
                }
            })
        };
        e.getFlowStatus = function() {
            return this.$8.flowStatus
        };
        e.shouldTerminateOrRetry = function(a, e, f, g) {
            var h = this;
            if (this.$14) return;
            var j = e;
            this.$12 || (j = "cannot retry for error: " + e + " because of hit max retry limitation");
            if (a !== d("RequestStreamCloseReason").RequestStreamCloseReason.ClientError) {
                (e = this.$6) == null ? void 0 : e.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                    reason: j
                })
            }
            e = f && this.$12;
            this.$22(a, j, !e);
            if (e) {
                var k = (f = g) != null ? f : i;
                this.$14 = !0;
                if (k > 0) return new(b("Promise"))(function(a) {
                    return setTimeout(a, k)
                }).then(function() {
                    return h.$24()
                });
                else return this.$24()
            }
        };
        e.$25 = function() {
            return this.$11 != null
        };
        e.$21 = function(a, b) {
            var e, f = this,
                g = typeof a == "string" ? new TextEncoder().encode(a) : a,
                h = String(this.$16++);
            (e = this.$6) == null ? void 0 : e.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                data_size: (a = a == null ? void 0 : (e = a.length) == null ? void 0 : e.toString()) != null ? a : "0"
            }, h);
            e = p(this.$5, h);
            a = {
                amend: {
                    amendment: g,
                    instrumentation_data: e
                }
            };
            b && a.amend && (a.amend.amendment_id = h);
            g = d("CompactSerializerPolyfill").serialize(a, d("RequestStreamSingleChannelSingleChannelRequestStreamSerializers").serializePayload);
            var i = Date.now();
            if (this.$26() && this.$11 != null) {
                b && this.$17.add(h);
                this.$11.send(g).then(function(a) {
                    var b;
                    o(a);
                    a = (Date.now() - i).toString();
                    (b = f.$6) == null ? void 0 : b.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").PUBACK, {
                        latency: a
                    }, h)
                })["catch"](function(a) {
                    var b;
                    (b = f.$6) == null ? void 0 : b.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                        reason: a.message
                    }, h);
                    f.$17.reject(h, a)
                });
                (e = this.$6) == null ? void 0 : e.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").SENT, {}, h);
                return h
            } else {
                (a = this.$6) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                    reason: "not_started"
                }, h)
            }
        };
        e.$23 = function(a) {
            var e = this,
                f, g, i, j, k, l, m;
            return b("regeneratorRuntime").async(function(n) {
                while (1) switch (n.prev = n.next) {
                    case 0:
                        if (this.$9) {
                            n.next = 32;
                            break
                        }
                        g = this.$2 || this.$1;
                        n.prev = 2;
                        i = this.$27();
                        this.$13 = i;
                        j = d("DGWRequestStreamUtils").convertHeaders(babelHelpers["extends"]({}, g.headers, this.$28()), g.body != null, this.$5);
                        n.next = 8;
                        return b("regeneratorRuntime").awrap(this.$18.establishStream(j, i, this.$7));
                    case 8:
                        this.$11 = n.sent;
                        n.next = 19;
                        break;
                    case 11:
                        n.prev = 11;
                        n.t0 = n["catch"](2);
                        if (!(d("DGWStream").StreamError.isValid(n.t0) && !d("DGWStream").isRetryableError(n.t0))) {
                            n.next = 15;
                            break
                        }
                        throw new Error("StreamError: " + n.t0);
                    case 15:
                        if (!(d("DGWStream").StreamError.isValid(n.t0) && d("DGWStream").isRetryableError(n.t0))) {
                            n.next = 18;
                            break
                        }
                        this.$29(n.t0);
                        return n.abrupt("return");
                    case 18:
                        throw n.t0;
                    case 19:
                        if (!this.$9) {
                            n.next = 22;
                            break
                        }
                        this.$22(d("RequestStreamCloseReason").RequestStreamCloseReason.UserIntention, "user cancel the stream", !0);
                        return n.abrupt("return");
                    case 22:
                        k = new Uint8Array([]);
                        g.body != null && (l = {
                            request_body: {
                                body: g.body
                            }
                        }, k = d("CompactSerializerPolyfill").serialize(l, d("RequestStreamSingleChannelSingleChannelRequestStreamSerializers").serializePayload));
                        if (this.$11) {
                            n.next = 26;
                            break
                        }
                        throw new Error("dgwstream_is_null");
                    case 26:
                        m = this.$11.send(k).then(function(a) {
                            o(a), e.$9 && e.$22(d("RequestStreamCloseReason").RequestStreamCloseReason.UserIntention, "user cancel the stream", !0)
                        });
                        (f = this.$6) == null ? void 0 : f.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").SENT, {}, a);
                        this.$12 = h;
                        return n.abrupt("return", m);
                    case 32:
                        throw new Error("stream_already_canceled");
                    case 33:
                    case "end":
                        return n.stop()
                }
            }, null, this, [
                [2, 11]
            ])
        };
        e.$26 = function() {
            return this.$8.flowStatus === d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started || this.$8.flowStatus === d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted
        };
        e.$22 = function(a, b, c) {
            var e;
            this.$11 && a !== d("RequestStreamCloseReason").RequestStreamCloseReason.StreamError && a !== d("RequestStreamCloseReason").RequestStreamCloseReason.RemoteTermination && this.$11.close();
            (e = this.$13) == null ? void 0 : e.stop();
            this.$11 = null;
            this.$10 = !0;
            this.$30(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped) && this.$3.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped);
            c && !this.$9 && this.$3.onTermination("terminate stream because " + a + " with msg : " + b)
        };
        e.$30 = function(a) {
            var b = this.$8;
            this.$8 = d("RequestStreamState").getNextState(b, a);
            return b !== this.$8
        };
        e.$24 = function() {
            this.$12--;
            return this.start(!0)
        };
        e.$31 = function(a) {
            var b = this;
            a = d("CompactSerializerPolyfill").deserialize(a, d("RequestStreamSingleChannelSingleChannelRequestStreamSerializers").deserializePayload);
            if (a.response) {
                var e = d("DGWRequestStreamUtils").getAuxIdFromPayload(a);
                if (!this.$25()) {
                    var f;
                    (f = this.$6) == null ? void 0 : f.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                        reason: "response_received_after_close"
                    }, e);
                    return
                }(f = this.$6) == null ? void 0 : f.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").RECEIVED, q(a.response), e);
                f = a.response.delta;
                f.forEach(function(a) {
                    if (a.data) b.$8.flowStatus === d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started && b.$3.onData(new TextDecoder("utf-8").decode(a.data.bytes));
                    else if (a.flow_status) {
                        var c = a.flow_status;
                        b.$30(c) && b.$3.onFlowStatus(c)
                    } else if (a.termination) {
                        c = (c = a.termination.message) != null ? c : "unknown termination msg";
                        b.$2 = null;
                        b.shouldTerminateOrRetry(d("RequestStreamCloseReason").RequestStreamCloseReason.RemoteTermination, c, a.termination.reason === d("RequestStreamCommonRequestStreamCommonTypes").TerminationReason.TryAgain, a.termination.retry_delay_ms != null ? parseInt(a.termination.retry_delay_ms, 10) : null)
                    } else if (a.log) b.$3.onLog(a.log.message);
                    else if (a.amend_ack) {
                        c = a.amend_ack.amendment_id;
                        if (c != null) {
                            var e = a.amend_ack.accepted || !1;
                            b.$17.resolve(c, e)
                        }
                    } else if (a.rewrite) {
                        c = d("DGWRequestStreamUtils").transformContextWithRewriteDelta(b.$1, a.rewrite);
                        a.rewrite.temporary === !0 ? b.$2 = c : b.$1 = c
                    }
                });
                (f = this.$6) == null ? void 0 : f.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").SENT, {}, e);
                a.response.ack_level === d("RequestStreamCommonRequestStreamCommonTypes").AckLevel.Device && a.response.response_id != null && this.$32(a.response.response_id, e)
            } else {
                (f = this.$6) == null ? void 0 : f.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                    reason: "unexpected_payload_type"
                })
            }
        };
        e.$32 = function(a, b) {
            a = {
                ack: {
                    response_id: a,
                    ack: d("RequestStreamSingleChannelSingleChannelRequestStreamTypes").Ack.Success
                }
            };
            a = d("CompactSerializerPolyfill").serialize(a, d("RequestStreamSingleChannelSingleChannelRequestStreamSerializers").serializePayload);
            if (this.$11 != null) {
                this.$11.send(a);
                (a = this.$6) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE_ACK, c("RequestStreamE2EClientLoggerEvent").SENT, {}, b)
            } else {
                (a = this.$6) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE_ACK, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                    reason: "not_started"
                }, b)
            }
        };
        e.$20 = function() {
            return this.$1.headers.method === "Falco"
        };
        e.$27 = function() {
            return new(c("DGWStreamHandler"))(this.$33.bind(this), this.$34.bind(this), this.$29.bind(this), this.$35.bind(this), this.$36.bind(this))
        };
        e.$36 = function(a) {
            (a = this.$6) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                reason: "OnClose: Server Has FinishedSendingData"
            });
            this.$22(d("RequestStreamCloseReason").RequestStreamCloseReason.ServerDataEnd, "Client receive OnServerHasFinishedSendingData and Server will not send more data", !0)
        };
        e.$33 = function(a) {
            (a = this.$6) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                reason: "OnClose: Server Close Connection"
            });
            this.$22(d("RequestStreamCloseReason").RequestStreamCloseReason.RemoteTermination, "Client receive OnClose and Server will not send more data", !0)
        };
        e.$34 = function(a) {
            try {
                this.$31(a)
            } catch (b) {
                (a = this.$6) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                    reason: b.message
                });
                this.shouldTerminateOrRetry(d("RequestStreamCloseReason").RequestStreamCloseReason.ClientError, b.message, !1)
            }
        };
        e.$29 = function(a) {
            var b = "",
                c = d("DGWStream").isRetryableError(a);
            b = "StreamError: Received " + a;
            this.shouldTerminateOrRetry(d("RequestStreamCloseReason").RequestStreamCloseReason.StreamError, b, c)
        };
        e.$35 = function(a, b) {
            this.shouldTerminateOrRetry(d("RequestStreamCloseReason").RequestStreamCloseReason.ServerDrain, b, !0)
        };
        e.$28 = function() {
            var a = {},
                b = c("RTISubscriptionManagerConfig").bladerunner_www_sandbox;
            b != null && (a[n] = b);
            return a
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("DGWAuth", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("$InternalEnum")({
        TEST: "0:0",
        FACEBOOK: "1:0",
        INTERNALFB: "2:0",
        ENTERPRISEFB: "7:0",
        RECRUITINGFB: "8:0"
    });

    function a(a) {
        if (a === "TEST") return g.TEST;
        else if (a === "FACEBOOK") return g.FACEBOOK;
        else if (a === "INTERNALFB") return g.INTERNALFB;
        else if (a === "ENTERPRISEFB") return g.ENTERPRISEFB;
        else if (a === "RECRUITINGFB") return g.RECRUITINGFB;
        else {
            a = new Error("failed to convert string (" + a + ") to DGWAuth Type");
            a.stack;
            throw a
        }
    }

    function c(a) {
        if (a === g.FACEBOOK) return "FACEBOOK";
        else if (a === g.INTERNALFB) return "INTERNALFB";
        else if (a === g.ENTERPRISEFB) return "ENTERPRISEFB";
        else if (a === g.RECRUITINGFB) return "RECRUITINGFB";
        else return "TEST"
    }
    f.DGWAuth = g;
    f.fromStringToDGWAuth = a;
    f.fromDGWAuthToString = c
}), 66);
__d("DGWConstants", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    e = 3e4;
    var g = "prod",
        h = 128,
        i = (b = b("$InternalEnum"))({
            NORMAL_CLOSURE: 1e3,
            GOING_AWAY: 1001,
            ABNORMAL_CLOSURE: 1006,
            SERVER_INTERNAL_ERROR: 1011,
            GRACEFUL_CLOSE: 4e3,
            KEEPALIVE_TIMEOUT: 4001,
            DGW_SERVER_ERROR: 4002,
            UNAUTHORIZED: 4003,
            REJECTED: 4004,
            BAD_REQUEST: 4005
        }),
        j = b({
            DrainReason_ELB: 0,
            DrainReason_SLB: 1,
            DrainReason_AppServerPush: 2,
            DrainReason_GracePeriodExpired: 3,
            DrainReason_Unknown: 4
        });

    function a(a) {
        switch (a) {
            case j.DrainReason_ELB:
                return "DrainReason_ELB";
            case j.DrainReason_SLB:
                return "DrainReason_SLB";
            case j.DrainReason_AppServerPush:
                return "DrainReason_AppServerPush";
            case j.DrainReason_GracePeriodExpired:
                return "DrainReason_GracePeriodExpired";
            case j.DrainReason_Unknown:
                return "DrainReason_Unknown"
        }
    }
    var k = b({
        DgwCodecReturnCode_Success: 0,
        DgwCodecReturnCode_Failure: 1,
        DgwCodecReturnCode_NotEnoughData: 2,
        DgwCodecReturnCode_OutOfMemory: 3,
        DgwCodecReturnCode_AckIdOutOfBounds: 4,
        DgwCodecReturnCode_InvalidParameter: 5,
        DgwCodecReturnCode_InvalidFrameType: 6,
        DgwCodecReturnCode_InvalidAckFrameLength: 7,
        DgwCodecReturnCode_InvalidDrainReason: 8,
        DgwCodecReturnCode_InvalidDataFrameLength: 9,
        DgwCodecReturnCode_InvalidDrainFrameLength: 10
    });

    function c(a) {
        switch (a) {
            case k.DgwCodecReturnCode_Success:
                return "DgwCodecReturnCode_Success";
            case k.DgwCodecReturnCode_Failure:
                return "DgwCodecReturnCode_Failure";
            case k.DgwCodecReturnCode_NotEnoughData:
                return "DgwCodecReturnCode_NotEnoughData";
            case k.DgwCodecReturnCode_OutOfMemory:
                return "DgwCodecReturnCode_OutOfMemory";
            case k.DgwCodecReturnCode_AckIdOutOfBounds:
                return "DgwCodecReturnCode_AckIdOutOfBounds";
            case k.DgwCodecReturnCode_InvalidParameter:
                return "DgwCodecReturnCode_InvalidParameter";
            case k.DgwCodecReturnCode_InvalidFrameType:
                return "DgwCodecReturnCode_InvalidFrameType";
            case k.DgwCodecReturnCode_InvalidAckFrameLength:
                return "DgwCodecReturnCode_InvalidAckFrameLength";
            case k.DgwCodecReturnCode_InvalidDrainReason:
                return "DgwCodecReturnCode_InvalidDrainReason";
            case k.DgwCodecReturnCode_InvalidDataFrameLength:
                return "DgwCodecReturnCode_InvalidDataFrameLength";
            case k.DgwCodecReturnCode_InvalidDrainFrameLength:
                return "DgwCodecReturnCode_InvalidDrainFrameLength"
        }
    }
    var l = b({
        DgwFrameType_Data: 0,
        DgwFrameType_SmallAck: 1,
        DgwFrameType_Empty: 2,
        DgwFrameType_Drain: 3,
        DgwFrameType_Deauth: 4,
        DgwFrameType_StreamGroup_DeprecatedEstabStream: 5,
        DgwFrameType_StreamGroup_DeprecatedData: 6,
        DgwFrameType_StreamGroup_SmallAck: 7,
        DgwFrameType_StreamGroup_DeprecatedEndOfData: 8,
        DgwFrameType_Ping: 9,
        DgwFrameType_Pong: 10
    });

    function d(a) {
        switch (a) {
            case l.DgwFrameType_Data:
                return "DgwFrameType_Data";
            case l.DgwFrameType_SmallAck:
                return "DgwFrameType_SmallAck";
            case l.DgwFrameType_Empty:
                return "DgwFrameType_Empty";
            case l.DgwFrameType_Drain:
                return "DgwFrameType_Drain";
            case l.DgwFrameType_Deauth:
                return "DgwFrameType_Deauth";
            case l.DgwFrameType_StreamGroup_DeprecatedEstabStream:
                return "DgwFrameType_StreamGroup_DeprecatedEstabStream";
            case l.DgwFrameType_StreamGroup_DeprecatedData:
                return "DgwFrameType_StreamGroup_DeprecatedData";
            case l.DgwFrameType_StreamGroup_SmallAck:
                return "DgwFrameType_StreamGroup_SmallAck";
            case l.DgwFrameType_StreamGroup_DeprecatedEndOfData:
                return "DgwFrameType_StreamGroup_DeprecatedEndOfData";
            case l.DgwFrameType_Ping:
                return "DgwFrameType_Ping";
            case l.DgwFrameType_Pong:
                return "DgwFrameType_Pong"
        }
    }
    b = {
        HEADER_APPID: "x-dgw-appid",
        HEADER_APPVERSION: "x-dgw-appversion",
        HEADER_AUTHTYPE: "x-dgw-authtype",
        HEADER_AUTHTOKEN: "Authorization",
        HEADER_DGW_VERSION: "x-dgw-version",
        HEADER_LOGGING_ID: "x-dgw-loggingid",
        HEADER_REGIONHINT: "x-dgw-regionhint",
        HEADER_TARGET_TIER: "x-dgw-tier",
        HEADER_UUID: "x-dgw-uuid",
        HEADER_ESTABLISH_STREAM_FRAME_BASE64: "x-dgw-establish-stream-frame-base64",
        kShadowHeader: "x-dgw-shadow",
        APPHEADER_PREFIX: "x-dgw-app-"
    };
    f.DEFAULT_ACK_TIMEOUT_MS = e;
    f.DEFAULT_SERVICE_TIER = g;
    f.MAX_ACK_ID = h;
    f.WebsocketCloseCodes = i;
    f.DrainReason = j;
    f.drainReasonToDrainReasonString = a;
    f.DgwCodecReturnCode = k;
    f.DgwCodecReturnCodeToString = c;
    f.DgwFrameType = l;
    f.frameTypeToString = d;
    f.HEADER_CONSTANTS = b
}), 66);
__d("DgwClientFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1755537");
    c = b("FalcoLoggerInternal").create("dgw_client", a);
    e.exports = c
}), null);
__d("DGWLoggingContext", ["$InternalEnum", "DgwClientFalcoEvent", "ODS", "Random"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = "dgw_client";
    var h = b("$InternalEnum")({
        STREAM_GROUP_COMPONENT: "WebStreamGroup",
        GROUPED_STREAM_COMPONENT: "GroupedWebStream",
        WEBSOCKET_TRANSPORT_COMPONENT: "WebSocketTransport",
        ACK_MANAGER_COMPONENT: "WebStreamAckManager",
        CODEC_COMPONENT: "WebCodec"
    });

    function i(a) {
        switch (a) {
            case h.GROUPED_STREAM_COMPONENT:
            case h.ACK_MANAGER_COMPONENT:
                return !0;
            default:
                return !1
        }
    }
    e = function() {
        function a(a, b, c, d, e, f, g) {
            f === void 0 && (f = !1), g === void 0 && (g = !1), this.$5 = a, this.$1 = b, this.$4 = c, this.$3 = d, this.$6 = e, this.$2 = f, this.$7 = g
        }
        var b = a.prototype;
        b.bumpODSKey = function(a, b, c) {
            c === void 0 && (c = 1);
            if (!d("Random").coinflip(c)) return;
            a = a + "." + b;
            d("ODS").bumpEntityKey(3589, "dgw_web_client", a, c)
        };
        b.logEvent = function(a, b, c, d) {
            d === void 0 && (d = !1), this.$2 || this.$8(a, b, null, c, d)
        };
        b.$8 = function(a, b, d, e, f) {
            var g = this;
            f === void 0 && (f = !1);
            if (f && !this.$7) return;
            (i(a) && this.$1 != null || !i(a) && this.$6 != null) && c("DgwClientFalcoEvent").log(function() {
                return {
                    event: b,
                    logging_id: g.$1,
                    dgw_version: g.$5,
                    error: d,
                    uuid: g.$3,
                    dgw_component: a,
                    extra_info: e,
                    destination_tier: g.$4,
                    sg_transport_id: g.$6
                }
            })
        };
        b.logError = function(a, b, c, d, e) {
            e === void 0 && (e = !1), this.$2 || this.$8(a, b, c, d, e)
        };
        b.logWarn = function(a, b, c, d, e) {
            e === void 0 && (e = !1), this.$2 || this.$8(a, b, c, d, e)
        };
        return a
    }();
    g.DGW_MODULE = a;
    g.DGWLoggingComponent = h;
    g.DGWLoggingContext = e
}), 98);
__d("DGWStreamGroupCallbacks", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        TRANSPORT_SERVER_INTERNAL_ERROR: 0,
        TRANSPORT_ABNORMAL_CLOSURE: 1,
        TRANSPORT_GOING_AWAY: 2,
        TRANSPORT_UNKNOWN_ERROR: 3,
        TRANSPORT_KEEPALIVE_TIMEOUT: 4,
        TRANSPORT_UNAUTHORIZED: 5,
        TRANSPORT_REJECTED: 6,
        TRANSPORT_BAD_REQUEST: 7,
        TRANSPORT_DGW_SERVER_ERROR: 8
    });
    c = function() {
        function a() {}
        var b = a.prototype;
        b.onStreamGroupError = function() {};
        b.onStreamGroupMustDrain = function() {};
        b.onStreamGroupTransportClose = function() {};
        return a
    }();
    f.DGWStreamGroupError = a;
    f.NoOpDGWStreamGroupCallbacks = c
}), 66);
__d("DGWUtils", ["Base64", "DGWConstants", "DGWLoggingContext", "Random", "URI", "cr:1921", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 4;

    function a() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = d("Random").random() * 16 | 0;
            a = a == "x" ? b : b & 3 | 8;
            return a.toString(16)
        })
    }

    function i(a) {
        var b = new TextDecoder();
        b = b.decode(a);
        a = c("Base64").encode(b);
        b = a.replace(/\+/gi, "-").replace(/\//gi, "_").replace(/=/gi, "");
        return b
    }
    var j = null;
    e = function() {
        function a() {}
        a.initialize = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        if (!(j != null)) {
                            a.next = 2;
                            break
                        }
                        return a.abrupt("return");
                    case 2:
                        a.next = 4;
                        return b("regeneratorRuntime").awrap(b("cr:1921")());
                    case 4:
                        j = a.sent;
                    case 5:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        a.constructConnectUrl = function(a) {
            var b, e = a.appId,
                f = a.appVersion,
                g = a.authType,
                h = a.dgwVersion,
                j = a.fbId,
                k = a.tier,
                l = a.loggingId,
                m = a.headers,
                n = a.endpoint,
                o = a.serviceId,
                p = a.regionHint;
            a = a.establishStreamFrame;
            var q = (b = {}, b[d("DGWConstants").HEADER_CONSTANTS.HEADER_APPID] = e, b[d("DGWConstants").HEADER_CONSTANTS.HEADER_APPVERSION] = f, b[d("DGWConstants").HEADER_CONSTANTS.HEADER_AUTHTYPE] = g, b[d("DGWConstants").HEADER_CONSTANTS.HEADER_DGW_VERSION] = h, b[d("DGWConstants").HEADER_CONSTANTS.HEADER_UUID] = j, b[d("DGWConstants").HEADER_CONSTANTS.HEADER_TARGET_TIER] = k, b);
            a !== void 0 && (q[d("DGWConstants").HEADER_CONSTANTS.HEADER_ESTABLISH_STREAM_FRAME_BASE64] = i(a));
            l !== void 0 && (q[d("DGWConstants").HEADER_CONSTANTS.HEADER_LOGGING_ID] = l);
            p !== void 0 && (q[d("DGWConstants").HEADER_CONSTANTS.HEADER_REGIONHINT] = p);
            Object.keys(m).forEach(function(a) {
                var b = d("DGWConstants").HEADER_CONSTANTS.APPHEADER_PREFIX + a;
                Object.prototype.hasOwnProperty.call(q, b) || (q[b] = m[a])
            });
            e = new(c("URI"))(n);
            e.setQueryData(q);
            e.setPath(e.getPath() + "/" + o);
            e.toString().length > 2e3 && (delete q[d("DGWConstants").HEADER_CONSTANTS.HEADER_ESTABLISH_STREAM_FRAME_BASE64], e.setQueryData(q));
            return e.toString()
        };
        return a
    }();
    f = function() {
        function a(a, b) {
            this.$1 = null, this.$2 = a, this.$3 = b
        }
        a.initialize = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        if (!(j != null)) {
                            a.next = 2;
                            break
                        }
                        return a.abrupt("return");
                    case 2:
                        a.next = 4;
                        return b("regeneratorRuntime").awrap(b("cr:1921")());
                    case 4:
                        j = a.sent;
                    case 5:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        var c = a.prototype;
        c.malloc = function(a) {
            try {
                a = j.__malloc(a);
                if (a === 0) {
                    var b;
                    (b = this.$2) == null ? void 0 : b.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "wasm malloc failure", "malloc returned 0");
                    return -1
                }
                return a
            } catch (a) {
                (b = this.$2) == null ? void 0 : b.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "wasm malloc failure", "exception during malloc", a.toString());
                return -1
            }
        };
        c.free = function(a) {
            j.__free(a)
        };
        c.append = function(a) {
            if (this.$1 == null) {
                this.$1 = a;
                return
            }
            var b = this.$1.length,
                c = new Uint8Array(b + a.length);
            c.set(this.$1, 0);
            c.set(a, b);
            this.$1 = c
        };
        c.processData = function() {
            var a = this;
            if (this.$1 == null) return;
            var b = this.$1.length,
                c = this.malloc(b);
            if (c === -1) return;
            var e = j.HEAPU8.subarray(c, c + b);
            if (this.$1)
                for (var f = 0; f < e.length; ++f) e[f] = this.$1[f];
            f = this.malloc(h * 4);
            if (f === -1) return;
            e = f;
            var g = e + h,
                i = g + h,
                k = i + h;
            b = j.__DgwCodecDecode(c, b, e, g, i, k);
            this.free(c);
            if (b !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success) {
                this.free(f);
                (i = this.$2) == null ? void 0 : i.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "Codec Decode Failure", "Failed to decode Frame(s). Received error code " + d("DGWConstants").DgwCodecReturnCodeToString(b));
                return
            }
            c = j.HEAPU32.subarray(k / h, k / h + 1)[0];
            if (this.$1 == null) {
                this.free(f);
                return
            }
            i = this.$1.length - c;
            if (this.$1 && this.$1.length > i) {
                this.$1 = new Uint8Array(((b = this.$1) == null ? void 0 : b.subarray(i)) || [])
            } else this.$1 = null;
            k = j.HEAPU32.subarray(g / h, g / h + 1)[0];
            c = j.HEAPU32.subarray(e / h, e / h + 1)[0];
            var l = [];
            for (var b = 0; b < k; ++b) {
                var m = j.__getDGWFramePtr(c, b);
                i = j.__getFrameType(m);
                switch (i) {
                    case d("DGWConstants").DgwFrameType.DgwFrameType_Drain:
                        g = function() {
                            var b = j.__getDrainReasonFromDrainFrame(m),
                                c = d("DGWConstants").drainReasonToDrainReasonString(b);
                            (b = a.$2) == null ? void 0 : b.logEvent(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "Received Drain Frame from server", "DrainReason: " + c);
                            l.push(function() {
                                var b;
                                return (b = a.$3) == null ? void 0 : b.receivedDrainSignal(c)
                            });
                            return "break"
                        }();
                        if (g === "break") break;
                    case d("DGWConstants").DgwFrameType.DgwFrameType_StreamGroup_DeprecatedEstabStream:
                        e = function() {
                            var b = j.__getStreamIdFromStreamGroupFrame(m),
                                c = j.__getEncodedParamsFromEstablishStreamFrame(m),
                                d = new Uint8Array(j.HEAPU8.subarray(c, c + j.__getEncodedParamsSizeFromEstablishStreamFrame(m)));
                            a.free(c);
                            l.push(function() {
                                var c;
                                return (c = a.$3) == null ? void 0 : c.onGroupedStreamEstablishStreamReceived(b, d)
                            });
                            return "break"
                        }();
                        if (e === "break") break;
                    case d("DGWConstants").DgwFrameType.DgwFrameType_StreamGroup_DeprecatedData:
                        i = function() {
                            var b = j.__getStreamIdFromStreamGroupFrame(m),
                                c = j.__getDataFromGroupedStreamDataFrame(m),
                                d = new Uint8Array(j.HEAPU8.subarray(c, c + j.__getDataSizeFromGroupedStreamDataFrame(m)));
                            a.free(c);
                            var e = j.__getRequiresAckFromGroupedStreamDataFrame(m) ? j.__getAckIdFromGroupedStreamDataFrame(m) : null;
                            l.push(function() {
                                var c;
                                return (c = a.$3) == null ? void 0 : c.onGroupedStreamDataReceived(b, d, e)
                            });
                            return "break"
                        }();
                        if (i === "break") break;
                    case d("DGWConstants").DgwFrameType.DgwFrameType_StreamGroup_SmallAck:
                        g = function() {
                            var b = j.__getStreamIdFromStreamGroupFrame(m),
                                c = j.__getAckIdFromGroupedStreamAckFrame(m);
                            l.push(function() {
                                var d;
                                return (d = a.$3) == null ? void 0 : d.onGroupedStreamAckReceived(b, c)
                            });
                            return "break"
                        }();
                        if (g === "break") break;
                    case d("DGWConstants").DgwFrameType.DgwFrameType_StreamGroup_DeprecatedEndOfData:
                        e = function() {
                            var b = j.__getStreamIdFromStreamGroupFrame(m);
                            l.push(function() {
                                var c;
                                return (c = a.$3) == null ? void 0 : c.onGroupedStreamEndOfDataReceived(b)
                            });
                            return "break"
                        }();
                        if (e === "break") break;
                    case d("DGWConstants").DgwFrameType.DgwFrameType_Ping:
                        l.push(function() {
                            var b;
                            return (b = a.$3) == null ? void 0 : b.onPingReceived()
                        });
                        break;
                    case d("DGWConstants").DgwFrameType.DgwFrameType_Pong:
                        l.push(function() {
                            var b;
                            return (b = a.$3) == null ? void 0 : b.onPongReceived()
                        });
                        break;
                    default:
                        break
                }
                this.free(m)
            }
            this.free(f);
            for (var i = 0; i < l.length; i++) l[i]()
        };
        c.encodeData = function(a, b, c, e) {
            var f = this.malloc(a.length);
            if (f === -1) return null;
            var g = j.HEAPU8.subarray(f, f + a.length);
            for (var i = 0; i < g.length; ++i) g[i] = a[i];
            a = this.malloc(h * 2);
            i = a;
            var k = a + h;
            e = j.__DgwCodecEncodeStreamGroup_DeprecatedData(e, f, g.length, b, c, i, k);
            this.free(f);
            if (e !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success) {
                (g = this.$2) == null ? void 0 : g.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "Data Frame encode failure", "Failed to decode DGW Data Frame. Received error code " + d("DGWConstants").DgwCodecReturnCodeToString(e));
                return null
            }
            b = j.HEAPU32.subarray(i / h, i / h + 1)[0];
            c = j.HEAPU32.subarray(k / h, k / h + 1)[0];
            f = new Uint8Array(j.HEAPU8.subarray(b, b + c));
            this.free(b);
            this.free(a);
            return f
        };
        c.encodeAck = function(a, b) {
            var c = this.malloc(h * 2);
            if (c === -1) return null;
            var e = c,
                f = c + h;
            b = j.__DgwCodecEncodeStreamGroup_SmallAck(b, a, e, f);
            if (b !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success) {
                (a = this.$2) == null ? void 0 : a.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "ACK Frame encode failure", "Failed to encode ACK Frame. Received error code " + d("DGWConstants").DgwCodecReturnCodeToString(b));
                return null
            }
            a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
            b = j.HEAPU32.subarray(f / h, f / h + 1)[0];
            e = new Uint8Array(j.HEAPU8.subarray(a, a + b));
            this.free(a);
            this.free(c);
            return e
        };
        c.encodeDrain = function(a) {
            var b = this.malloc(h * 2);
            if (b === -1) return null;
            var c = b,
                e = b + h;
            a = j.__DgwCodecEncodeDrain(a, c, e);
            if (a !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success) {
                var f;
                (f = this.$2) == null ? void 0 : f.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "Drain Frame encode failure", "Failed to encode Drain Frame. Received error code " + d("DGWConstants").DgwCodecReturnCodeToString(a));
                return null
            }
            f = j.HEAPU32.subarray(c / h, c / h + 1)[0];
            a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
            c = new Uint8Array(j.HEAPU8.subarray(f, f + a));
            this.free(f);
            this.free(b);
            return c
        };
        c.encodeEstablishStream = function(a, b) {
            var c = this.malloc(b.length);
            if (c === -1) return null;
            var e = j.HEAPU8.subarray(c, c + b.length);
            for (var f = 0; f < b.length; ++f) e[f] = b[f];
            e = this.malloc(h * 2);
            f = e;
            var g = e + h;
            b = j.__DgwCodecEncodeStreamGroup_DeprecatedEstabStream(a, c, b.length, f, g);
            this.free(c);
            if (b !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success) {
                (c = this.$2) == null ? void 0 : c.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "EstablishStream Frame encode failure", "Failed to encode EstablishStream Frame. Received error code " + d("DGWConstants").DgwCodecReturnCodeToString(b) + " for StreamId " + a);
                return null
            }
            c = j.HEAPU32.subarray(f / h, f / h + 1)[0];
            b = j.HEAPU32.subarray(g / h, g / h + 1)[0];
            a = new Uint8Array(j.HEAPU8.subarray(c, c + b));
            this.free(c);
            this.free(e);
            return a
        };
        c.encodeEndOfData = function(a) {
            var b = this.malloc(h * 2);
            if (b === -1) return null;
            var c = b,
                e = b + h;
            a = j.__DgwCodecEncodeStreamGroup_DeprecatedEndOfData(a, c, e);
            if (a !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success) {
                var f;
                (f = this.$2) == null ? void 0 : f.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "EndOfData Frame encode failure", "Failed to encode EndOfData Frame. Received error code " + d("DGWConstants").DgwCodecReturnCodeToString(a));
                return null
            }
            f = j.HEAPU32.subarray(c / h, c / h + 1)[0];
            a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
            c = new Uint8Array(j.HEAPU8.subarray(f, f + a));
            this.free(f);
            this.free(b);
            return c
        };
        c.encodePing = function() {
            if (this.$4 != null) return this.$4;
            var a = this.malloc(h * 2);
            if (a === -1) return null;
            var b = a,
                c = a + h,
                e = j.__DgwCodecEncodePing(b, c);
            if (e !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success) {
                var f;
                (f = this.$2) == null ? void 0 : f.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "Ping Frame encode failure", "Failed to encode Ping Frame. Received error code " + d("DGWConstants").DgwCodecReturnCodeToString(e));
                return null
            }
            f = j.HEAPU32.subarray(b / h, b / h + 1)[0];
            e = j.HEAPU32.subarray(c / h, c / h + 1)[0];
            b = new Uint8Array(j.HEAPU8.subarray(f, f + e));
            this.free(f);
            this.free(a);
            this.$4 = b;
            return b
        };
        c.encodePong = function() {
            if (this.$5 != null) return this.$5;
            var a = this.malloc(h * 2);
            if (a === -1) return null;
            var b = a,
                c = a + h,
                e = j.__DgwCodecEncodePong(b, c);
            if (e !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success) {
                var f;
                (f = this.$2) == null ? void 0 : f.logError(d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT, "Pong Frame encode failure", "Failed to encode Pong Frame. Received error code " + d("DGWConstants").DgwCodecReturnCodeToString(e));
                return null
            }
            f = j.HEAPU32.subarray(b / h, b / h + 1)[0];
            e = j.HEAPU32.subarray(c / h, c / h + 1)[0];
            b = new Uint8Array(j.HEAPU8.subarray(f, f + e));
            this.free(f);
            this.free(a);
            this.$5 = b;
            return b
        };
        return a
    }();
    g.uuidv4 = a;
    g.Uint8ArrayToBase64UrlStr = i;
    g.DGWUtils = e;
    g.DGWCodec = f
}), 98);
__d("DGWAckManager", ["DGWLoggingContext", "Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        var b = a.prototype;
        b.stopTracking = function(a) {
            clearTimeout(this.$1), this.$3(a)
        };

        function a(a, b, c) {
            var d = this;
            this.$3 = c;
            this.sendId = a;
            this.$2 = b;
            this.handleAckReceived = function() {
                d.stopTracking(!0)
            };
            this.$1 = setTimeout(function() {
                d.stopTracking(!1)
            }, b)
        }
        return a
    }();
    a = function() {
        function a(a) {
            this.$1 = new Map(), this.$2 = a
        }
        var c = a.prototype;
        c.waitForAck = function(a, c) {
            var e, f;
            return b("regeneratorRuntime").async(function(g) {
                while (1) switch (g.prev = g.next) {
                    case 0:
                        e = this.$1;
                        g.prev = 1;
                        g.next = 4;
                        return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b, d) {
                            e.set(a, new h(a, c, b))
                        }));
                    case 4:
                        f = g.sent;
                        f === !0 ? this.$2.logEvent(d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT, "Received ACK", "sendId: " + a, !0) : this.$2.logWarn(d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT, "ACK timeout", "Request " + a + " timed out after " + c + "ms");
                        e["delete"](a);
                        return g.abrupt("return", f);
                    case 10:
                        g.prev = 10;
                        g.t0 = g["catch"](1);
                        e["delete"](a);
                        throw g.t0;
                    case 14:
                    case "end":
                        return g.stop()
                }
            }, null, this, [
                [1, 10]
            ])
        };
        c.handleAckReceived = function(a) {
            var b = this.$1.get(a);
            if (b === void 0) {
                this.$2.logWarn(d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT, "untracked ACK", "Received ACK for ackId " + a + " which was not being tracked");
                return
            }
            b.handleAckReceived()
        };
        c.clearPendingAcks = function() {
            var a = this;
            this.$2.logEvent(d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT, "Clearing pending acks");
            this.$1.forEach(function(b, c, e) {
                a.$2.logEvent(d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT, "Clearing pending ACK with ackId " + b.sendId, null, !0), b.stopTracking(!1), e["delete"](c)
            })
        };
        return a
    }();
    g.DGWAckManager = a
}), 98);
__d("DGWStreamCallbacks", [], (function(a, b, c, d, e, f) {
    "use strict"
}), null);
__d("DGWStreamEvents", [], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c) {
            this.$4 = new Map(), this.$5 = new Map(), this.$6 = a, this.$1 = b, c != null && (this.$8 = "streamId:" + c + "::")
        }
        var b = a.prototype;
        b.streamEstablished = function() {
            this.$6.logEvent(this.$1, "open", this.$8, !0), this.$6.bumpODSKey(this.$1, "stream_establishment_success")
        };
        b.streamEstablishmentPending = function() {
            this.$2 = Date.now(), this.$6.logEvent(this.$1, "streamPending", this.$8, !0), this.$6.bumpODSKey(this.$1, "stream_establishment_pending")
        };
        b.dataSent = function(a, b, c) {
            var d = c ? "sendWithAckRequested" : "sendWithoutAckRequested";
            this.$6.logEvent(this.$1, d, ((d = this.$8) != null ? d : "") + "sendId:" + a + ", payloadSize:" + b, !0);
            this.$4.set(a, {
                ackRequested: c,
                payloadSize: b,
                sendTimestamp: Date.now()
            })
        };
        b.ackReceived = function(a) {
            var b;
            this.$6.logEvent(this.$1, "AckReceived", ((b = this.$8) != null ? b : "") + "sendId:" + a + "}", !0);
            this.$6.bumpODSKey(this.$1, "ack_received");
            b = this.$4.get(a);
            b != null && (b.ackReceivedTimestamp = Date.now())
        };
        b.ackSent = function(a) {
            var b;
            this.$6.bumpODSKey(this.$1, "ack_sent");
            this.$6.logEvent(this.$1, "ACK sent", ((b = this.$8) != null ? b : "") + "ackId: " + a, !0)
        };
        b.drainSent = function(a) {
            var b;
            this.$6.logEvent(this.$1, "Drain sent", ((b = this.$8) != null ? b : "") + "drainReason: " + a)
        };
        b.dataReceived = function(a, b, c) {
            var d;
            this.$6.bumpODSKey(this.$1, "data_received");
            this.$6.logEvent(this.$1, "Data received", ((d = this.$8) != null ? d : "") + "sendId: " + ((d = c) != null ? d : "null") + ", ackRequested: " + b.toString() + ", payloadSize: " + a, !0);
            c != null && this.$5.set(c, {
                ackRequested: b,
                payloadSize: a,
                receiveTimestamp: Date.now()
            })
        };
        b.endOfDataReceived = function() {
            this.$6.bumpODSKey(this.$1, "end_of_data_received"), this.$6.logEvent(this.$1, "EndOfDataReceived", this.$8, !0)
        };
        b.endOfDataSent = function() {
            this.$6.bumpODSKey(this.$1, "end_of_data_sent"), this.$6.logEvent(this.$1, "EndOfDataSent", this.$8, !0)
        };
        b.streamClosed = function(a, b) {
            this.$7 = Date.now();
            var c = this.$9();
            if (a) {
                this.$6.bumpODSKey(this.$1, "stream_closed_gracefully");
                this.$6.logEvent(this.$1, "Stream closed gracefully", "" + ((a = this.$8) != null ? a : "") + c)
            } else {
                this.$6.bumpODSKey(this.$1, "stream_closed_with_error");
                this.$6.logError(this.$1, "Stream closed abnormally", b, "" + ((a = this.$8) != null ? a : "") + c)
            }
        };
        b.connectionEstablishmentFailure = function(a) {
            this.$6.logEvent(this.$1, "WebSocket connection establishment failure", "WebSocket close code: " + a)
        };
        b.streamEstablishmentFailure = function(a, b) {
            this.$6.logError(this.$1, "Failed to establish DGW Stream", "Last seen error: " + a.toString(), "" + ((a = this.$8) != null ? a : "") + b);
            this.$6.bumpODSKey(this.$1, "stream_establishment_failure")
        };
        b.error = function(a, b) {
            b = {
                msg: b,
                state: this.$9()
            };
            this.$6.logError(this.$1, a, JSON.stringify(b), this.$8)
        };
        b.$9 = function() {
            var a = {
                currentNetworkCondition: window.navigator && window.navigator.onLine == !0,
                establishRequestTimestamp: this.$2,
                establishedTimestamp: this.$3,
                streamClosedTimestamp: this.$7,
                sendHistory: JSON.stringify(Array.from(this.$4.entries())),
                receiveHistory: JSON.stringify(Array.from(this.$5.entries()))
            };
            return JSON.stringify(a)
        };
        return a
    }();
    g.DGWStreamEvents = a
}), 98);
__d("GroupedStream", ["DGWAckManager", "DGWConstants", "DGWLoggingContext", "DGWStream", "DGWStreamEvents", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c, e, f, g, h) {
            this.$1 = a, this.$3 = !1, this.$4 = !1, this.$5 = !1, this.$6 = b, this.$7 = c, this.$8 = e, this.$2 = g, this.$9 = f, this.$10 = new(d("DGWAckManager").DGWAckManager)(this.$9), this.$12 = new(d("DGWStreamEvents").DGWStreamEvents)(this.$9, d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT, this.$1), this.$11 = 0, this.$13 = h
        }
        var c = a.prototype;
        c.send = function(a, c) {
            var e, f, g;
            return b("regeneratorRuntime").async(function(h) {
                while (1) switch (h.prev = h.next) {
                    case 0:
                        f = this.$11++ % d("DGWConstants").MAX_ACK_ID;
                        if (this.$14(a, !0, f)) {
                            h.next = 3;
                            break
                        }
                        return h.abrupt("return", !1);
                    case 3:
                        h.next = 5;
                        return b("regeneratorRuntime").awrap(this.$10.waitForAck(f, (e = c) != null ? e : d("DGWConstants").DEFAULT_ACK_TIMEOUT_MS));
                    case 5:
                        g = h.sent;
                        return h.abrupt("return", g);
                    case 7:
                    case "end":
                        return h.stop()
                }
            }, null, this)
        };
        c.sendAndForget = function(a) {
            return this.$14(a, !1)
        };
        c.close = function() {
            var a = this.$2.encodeEndOfData(this.$1);
            if (a == null) {
                this.$9.logError(d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT, "Failed to encode EndOfData", "streamId: " + this.$1);
                return
            }
            a = this.$8.send(a);
            if (!a) {
                this.$9.logError(d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT, "Failed to send EndOfData", "streamId: " + this.$1 + ". StreamGroupTransport not open during send");
                return
            }
            this.$12.endOfDataSent();
            this.$5 = !0;
            this.$4 && this.$15()
        };
        c.__sendDrain = function(a) {
            var b = d("DGWConstants").drainReasonToDrainReasonString(a);
            if (this.$5) return !1;
            a = this.$2.encodeDrain(a);
            if (a == null) return !1;
            this.$12.drainSent(b);
            b = this.$8.send(a);
            return b
        };
        c.__transportCloseHook = function(a) {
            this.$13(), this.$10.clearPendingAcks(), a ? (this.$12.error("Received StreamError", "StreamErrorType: " + a), this.$6.onError(a)) : this.$5 && this.$4 ? this.$15() : (this.$12.streamClosed(!1, "Stream closed: ClosedLocally: " + this.$5.toString() + ", EndOfDataReceived: " + this.$4.toString()), this.$6.onError(d("DGWStream").StreamError.PREMATURE_CLOSE))
        };
        c.$15 = function() {
            this.$13(), this.$12.streamClosed(!0, "Graceful close"), this.$6.onClose(this)
        };
        c.__dataReceivedHook = function(a, b) {
            this.$12.dataReceived(a.length, b != null, b), b != null && this.$16(b), this.$6.onDataReceived(a)
        };
        c.__ackReceivedHook = function(a) {
            this.$12.ackReceived(a), this.$10.handleAckReceived(a)
        };
        c.__drainReceivedHook = function(a) {
            this.$3 === !1 && (this.$6.onStreamMustDrain(this, a), this.$3 = !0)
        };
        c.__endOfDataHook = function() {
            this.$12.endOfDataReceived(), this.$4 = !0, this.$5 ? this.$15() : this.$6.onServerHasFinishedSendingData(this)
        };
        c.$14 = function(a, b, c) {
            b === void 0 && (b = !1);
            c === void 0 && (c = 0);
            if (this.$5) {
                this.$9.logError(d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT, "Failed to send data", "Stream closed locally");
                return !1
            }
            a = this.$2.encodeData(a, b, c, this.$1);
            if (a == null) return !1;
            var e = this.$8.send(a);
            if (!e) {
                this.$9.logError(d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT, "Failed to send data", "ClosedLocally: " + this.$5.toString());
                return !1
            }
            this.$12.dataSent(c, a.length, b);
            return !0
        };
        c.$16 = function(a) {
            var b = this.$2.encodeAck(a, this.$1);
            if (b == null) {
                this.$9.logError(d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT, "Failed to encode ACK", "ackId: " + a);
                return !1
            }
            b = this.$8.send(b);
            if (!b) {
                this.$9.logError(d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT, "Failed to send ACK", "ackId: " + a);
                return !1
            }
            this.$12.ackSent(a);
            return !0
        };
        return a
    }();
    g.GroupedStream = a
}), 98);
__d("StreamGroupContext", [], (function(a, b, c, d, e, f) {
    "use strict"
}), null);
__d("DGWExponentialBackoff", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
            maxRetries: 5,
            baseRetryInterval: 1e3,
            backoffFactor: Math.sqrt(2)
        },
        h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a(a, c) {
                a = b.call(this, a) || this;
                a.errors = c;
                return a
            }
            return a
        }(babelHelpers.wrapNativeSuper(Error));

    function a(a, c) {
        return b("regeneratorRuntime").async(function(d) {
            while (1) switch (d.prev = d.next) {
                case 0:
                    c === void 0 && (c = g);
                    d.prev = 1;
                    d.next = 4;
                    return b("regeneratorRuntime").awrap(i(a, c));
                case 4:
                    return d.abrupt("return", d.sent);
                case 7:
                    d.prev = 7;
                    d.t0 = d["catch"](1);
                    throw d.t0.errors[d.t0.errors.length - 1];
                case 10:
                case "end":
                    return d.stop()
            }
        }, null, this, [
            [1, 7]
        ])
    }

    function i(a, c) {
        var d, e, f, g, i;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    d = 0, e = [], f = c.baseRetryInterval, g = c.backoffFactor;
                case 4:
                    if (!(d <= c.maxRetries)) {
                        k.next = 20;
                        break
                    }
                    k.prev = 5;
                    k.next = 8;
                    return b("regeneratorRuntime").awrap(a());
                case 8:
                    i = k.sent;
                    return k.abrupt("return", i);
                case 12:
                    k.prev = 12, k.t0 = k["catch"](5), e.push(k.t0);
                case 15:
                    k.next = 17;
                    return b("regeneratorRuntime").awrap(j(f * Math.pow(g, d)));
                case 17:
                    ++d;
                    k.next = 4;
                    break;
                case 20:
                    throw new h("Max call count exceeded", e);
                case 21:
                case "end":
                    return k.stop()
            }
        }, null, this, [
            [5, 12]
        ])
    }

    function j(a) {
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b) {
                        return setTimeout(b, a)
                    }));
                case 2:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }
    f.callWithExponentialBackoff = a
}), 66);
__d("DGWPinger", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b, c) {
            this.$1 = a, this.$4 = b, this.$5 = c, this.$3 = !1
        }
        var b = a.prototype;
        b.$6 = function() {
            var a = this;
            this.$3 ? (this.$3 = !1, this.$4(), this.$2 = setTimeout(function() {
                a.$6()
            }, this.$1)) : this.$5()
        };
        b.reset = function() {
            var a = this;
            this.$3 = !0;
            this.$2 && (clearTimeout(this.$2), this.$2 = null);
            this.$1 > 0 && (this.$2 = setTimeout(function() {
                a.$6()
            }, this.$1))
        };
        b.cancel = function() {
            this.$2 && (clearTimeout(this.$2), this.$2 = null)
        };
        return a
    }();
    f.DGWPinger = a
}), 66);
__d("DGWTransportEvents", ["DGWLoggingContext"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$3 = a
        }
        var b = a.prototype;
        b.transportEstablished = function() {
            this.$3.logEvent(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "open"), this.$2 = Date.now()
        };
        b.transportEstablishmentPending = function() {
            this.$1 = Date.now(), this.$3.logEvent(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "transportPending", null, !0)
        };
        b.transportClosed = function(a, b) {
            this.$4 = Date.now(), a ? (this.$3.bumpODSKey(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "transport_close_graceful"), this.$3.logEvent(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "Transport closed gracefully", null, !0)) : (this.$3.bumpODSKey(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "transport_close_with_error"), this.$3.logError(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "Transport closed abnormally", b))
        };
        b.transportEstablishmentFailure = function(a) {
            this.$3.logError(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "WebSocket transport establishment failure", "WebSocket close code: " + a)
        };
        b.streamEstablishmentTimeout = function(a, b) {
            this.$3.logError(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "Grouped Stream establishment timeout", a, "streamId:" + b)
        };
        b.streamEstablishmentPending = function(a) {
            this.$3.logEvent(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "Grouped Stream establishment pending", "streamId:" + a, !0)
        };
        b.streamEstablishmentSuccess = function(a) {
            this.$3.logEvent(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "Grouped Stream establishment success", "streamId:" + a, !0)
        };
        b.transportError = function(a, b, c) {
            this.$3.logError(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, a, b, c)
        };
        b.receivedFrameForInactiveStream = function(a, b, c) {
            this.$3.logWarn(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "Frame received for inactive stream", "frameType: " + a + ", streamID: " + b, c)
        };
        b.ranOutOfStreamIds = function(a) {
            this.$3.logWarn(d("DGWLoggingContext").DGWLoggingComponent.WEBSOCKET_TRANSPORT_COMPONENT, "Hit max StreamId limit", "Hit max StreamId limit", a)
        };
        return a
    }();
    g.DGWTransportEvents = a
}), 98);
__d("DGWWebSocketTransport", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = new WebSocket(a);
        a.binaryType = "arraybuffer";
        a.onopen = function() {};
        a.onclose = function() {};
        a.onerror = function() {};
        return a
    }
    f.getWebSocketConnection = a
}), 66);
__d("StreamIdGenerator", ["err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 255;
    a = function() {
        function a() {
            this.$1 = new Set();
            for (var a = 1; a <= h; ++a) this.$1.add(a)
        }
        var b = a.prototype;
        b.getNextStreamId = function() {
            var a;
            if (this.$1.size === 0) throw c("err")("Max number of stream IDs reached");
            a = (a = this.$1.values().next().value) != null ? a : 0;
            this.$1["delete"](a);
            return a
        };
        b.putBackStreamId = function(a) {
            this.$1.add(a)
        };
        b.streamIdAvailable = function() {
            return this.$1.size !== 0
        };
        return a
    }();
    g.StreamIdGenerator = a
}), 98);
__d("StreamGroupWebSocketTransport", ["DGWConstants", "DGWExponentialBackoff", "DGWLoggingContext", "DGWPinger", "DGWStream", "DGWStreamGroupCallbacks", "DGWTransportEvents", "DGWUtils", "DGWWebSocketTransport", "GroupedStream", "Promise", "StreamIdGenerator", "err", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b, c, e, f) {
        var g = this;
        this.groupedStream = a;
        this.$1 = setTimeout(function() {
            c(d("DGWStream").StreamError.ESTABLISHMENT_TIMEOUT)
        }, e);
        this.handleEstablishFrameReceived = function() {
            clearTimeout(g.$1), b(g.groupedStream)
        };
        this.abortStream = function(a) {
            f(), c(a)
        }
    };
    a = function() {
        function a(b, e, f, g, h, i, j, k) {
            var l = this;
            this.$15 = h;
            this.$10 = new(d("StreamIdGenerator").StreamIdGenerator)();
            this.$5 = new Map();
            this.$6 = new Map();
            this.$7 = g.keepAliveMs;
            this.$8 = !1;
            this.$3 = !0;
            this.$4 = !1;
            this.$13 = f;
            this.$11 = new TextEncoder();
            this.$12 = new TextDecoder();
            this.$14 = g;
            h = {
                onDataReceived: function() {},
                handleAckReceived: function() {},
                receivedDrainSignal: function(a) {
                    l.$14.streamGroupCallbacks.onStreamGroupMustDrain(a), l.$5.forEach(function(b) {
                        b.__drainReceivedHook(a)
                    })
                },
                onGroupedStreamDataReceived: function(a, b, c) {
                    if (l.$5.has(a)) {
                        var d = l.$5.get(a);
                        d == null ? void 0 : d.__dataReceivedHook(b, c)
                    } else {
                        l.$13.receivedFrameForInactiveStream("Data", a, "sendAckID: " + ((d = c) != null ? d : "null"))
                    }
                },
                onGroupedStreamAckReceived: function(a, b) {
                    if (l.$5.has(a)) {
                        var c = l.$5.get(a);
                        c == null ? void 0 : c.__ackReceivedHook(b)
                    } else {
                        l.$13.receivedFrameForInactiveStream("ACK", a, "ackId: " + ((c = b) != null ? c : "null"))
                    }
                },
                onGroupedStreamEndOfDataReceived: function(a) {
                    if (l.$5.has(a)) {
                        var b = l.$5.get(a);
                        b == null ? void 0 : b.__endOfDataHook()
                    } else l.$13.receivedFrameForInactiveStream("EndOfData", a)
                },
                onGroupedStreamEstablishStreamReceived: function(a, b) {
                    if (l.$6.has(a)) {
                        var c = l.$6.get(a);
                        l.$6["delete"](a);
                        b = JSON.parse(l.$12.decode(b));
                        (b.code === void 0 || b.code !== 200) && (c == null ? void 0 : c.abortStream(d("DGWStream").StreamError.ABNORMAL_CLOSURE));
                        c == null ? void 0 : c.handleEstablishFrameReceived()
                    } else l.$13.receivedFrameForInactiveStream("EstablishStream", a, "EstablishStream received for non-inflight stream")
                },
                onPingReceived: function() {
                    var a = l.$2.encodePing();
                    if (a == null) return;
                    l.send(a)
                },
                onPongReceived: function() {}
            };
            this.$2 = new(d("DGWUtils").DGWCodec)(i, h);
            if (g.enableFirstStreamOnWsHandshake) {
                if (j === void 0) throw c("err")("Missing grouped stream options");
                if (k === void 0) throw c("err")("Missing grouped stream callbacks");
                var m = this.$10.getNextStreamId();
                f = this.createEstablishStreamFrame(m, j);
                i = d("DGWUtils").DGWUtils.constructConnectUrl({
                    appId: g.appId,
                    appVersion: g.appVersion,
                    authType: g.authType,
                    dgwVersion: g.dgwVersion,
                    fbId: g.fbId,
                    tier: g.tier,
                    loggingId: (i = g.loggingId) != null ? i : void 0,
                    headers: a.__prefixAppHeaders(g.headers),
                    endpoint: g.connectEndpoint,
                    serviceId: g.serviceId,
                    regionHint: (h = g.regionHint) != null ? h : void 0,
                    establishStreamFrame: f
                });
                this.$1 = e(i);
                if (!i.includes(d("DGWConstants").HEADER_CONSTANTS.HEADER_ESTABLISH_STREAM_FRAME_BASE64)) return;
                this.$16 = this.waitForEstablishStream(m, k, j, new(d("DGWLoggingContext").DGWLoggingContext)(this.$14.dgwVersion, j.loggingId, this.$14.serviceId, this.$14.fbId, this.$14.loggingId, j.disableFalcoLogging), function(a) {
                    l.$5.set(m, a)
                }, function() {
                    l.$10.putBackStreamId(m)
                })
            } else this.$1 = e(b)
        }
        var e = a.prototype;
        e.send = function(a) {
            try {
                this.$1.send(a);
                return !0
            } catch (a) {
                this.$13.transportError("Failed to send over transport", "readyState: " + this.$1.readyState, a.toString());
                return !1
            }
        };
        e.close = function() {
            this.$1.close(d("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE)
        };
        e.abort = function(a, b, c, d) {
            this.$8 = !0, this.$13.transportClosed(!1, d), this.$5.forEach(function(a) {
                a.__transportCloseHook(b)
            }), this.$6.forEach(function(a) {
                a.abortStream(b)
            }), this.$14.streamGroupCallbacks.onStreamGroupError(a), this.$5.clear(), this.$6.clear(), this.$1.close(c)
        };
        a.getTransportWithInitialStream = function(c, e, f, g, h) {
            var i, j, k, l;
            return b("regeneratorRuntime").async(function(m) {
                while (1) switch (m.prev = m.next) {
                    case 0:
                        m.next = 2;
                        return b("regeneratorRuntime").awrap(d("DGWUtils").DGWCodec.initialize());
                    case 2:
                        i = new(d("DGWTransportEvents").DGWTransportEvents)(g);
                        i.transportEstablishmentPending();
                        j = function() {
                            return a.$17("", f, i, h, g, c, e)
                        };
                        m.prev = 5;
                        m.next = 8;
                        return b("regeneratorRuntime").awrap(d("DGWExponentialBackoff").callWithExponentialBackoff(j));
                    case 8:
                        k = m.sent;
                        l = k.$16 != void 0 ? k.$16 : k.establishGroupedStream(e, c, new(d("DGWLoggingContext").DGWLoggingContext)(f.dgwVersion, c.loggingId, f.serviceId, f.fbId, f.loggingId, c.disableFalcoLogging));
                        return m.abrupt("return", {
                            transport: k,
                            streamPromise: l
                        });
                    case 13:
                        m.prev = 13;
                        m.t0 = m["catch"](5);
                        throw m.t0;
                    case 16:
                    case "end":
                        return m.stop()
                }
            }, null, this, [
                [5, 13]
            ])
        };
        a.getTransport_DEPRECATED = function(c, e, f, g) {
            var h, i;
            return b("regeneratorRuntime").async(function(j) {
                while (1) switch (j.prev = j.next) {
                    case 0:
                        j.next = 2;
                        return b("regeneratorRuntime").awrap(d("DGWUtils").DGWCodec.initialize());
                    case 2:
                        h = new(d("DGWTransportEvents").DGWTransportEvents)(f);
                        h.transportEstablishmentPending();
                        i = function() {
                            return a.$17(c, e, h, g, f)
                        };
                        j.prev = 5;
                        j.next = 8;
                        return b("regeneratorRuntime").awrap(d("DGWExponentialBackoff").callWithExponentialBackoff(i));
                    case 8:
                        return j.abrupt("return", j.sent);
                    case 11:
                        j.prev = 11;
                        j.t0 = j["catch"](5);
                        throw j.t0;
                    case 14:
                    case "end":
                        return j.stop()
                }
            }, null, this, [
                [5, 11]
            ])
        };
        e.establishGroupedStream = function(a, c, d) {
            var e = this,
                f, g, h, i, j;
            return b("regeneratorRuntime").async(function(k) {
                while (1) switch (k.prev = k.next) {
                    case 0:
                        f = this.getStreamId();
                        g = this.createEstablishStreamFrame(f, c);
                        h = this.waitForEstablishStream(f, a, c, d, function(a) {
                            e.$5.set(f, a)
                        }, function() {
                            e.$10.putBackStreamId(f)
                        });
                        if (this.send(g)) {
                            k.next = 7;
                            break
                        }
                        i = new Error("Websocket connection closed before stream established");
                        i.stack;
                        throw i;
                    case 7:
                        k.next = 9;
                        return b("regeneratorRuntime").awrap(h);
                    case 9:
                        j = k.sent;
                        return k.abrupt("return", j);
                    case 11:
                    case "end":
                        return k.stop()
                }
            }, null, this)
        };
        a.__prefixAppHeaders = function(a) {
            return Object.keys(a).reduce(function(b, c) {
                b["" + d("DGWConstants").HEADER_CONSTANTS.APPHEADER_PREFIX + c] = a[c];
                return b
            }, {})
        };
        e.waitForEstablishStream = function(a, c, d, e, f, g) {
            var i = this,
                j, k;
            return b("regeneratorRuntime").async(function(l) {
                while (1) switch (l.prev = l.next) {
                    case 0:
                        this.$13.streamEstablishmentPending(a);
                        j = this.__createGroupedStream(a, c, d, e);
                        l.prev = 2;
                        l.next = 5;
                        return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b, c) {
                            i.$6.set(a, new h(j, b, c, 3e4, function() {
                                i.streamEndCallback(a)
                            }))
                        }));
                    case 5:
                        k = l.sent;
                        f(j);
                        this.$13.streamEstablishmentSuccess(a);
                        return l.abrupt("return", k);
                    case 11:
                        l.prev = 11;
                        l.t0 = l["catch"](2);
                        g();
                        this.$13.streamEstablishmentTimeout("Stream establishment timeout", a);
                        throw l.t0;
                    case 16:
                    case "end":
                        return l.stop()
                }
            }, null, this, [
                [2, 11]
            ])
        };
        a.$17 = function(c, e, f, g, h, i, j) {
            var k, l;
            return b("regeneratorRuntime").async(function(m) {
                while (1) switch (m.prev = m.next) {
                    case 0:
                        k = new a(c, d("DGWWebSocketTransport").getWebSocketConnection, f, e, g, h, i, j);
                        k.$1.onmessage = a.$18(k);
                        k.$1.onopen = function() {
                            f.transportEstablished(), k.$3 = !1, k.$7 != null && (k.$9 = new(d("DGWPinger").DGWPinger)(k.$7, function() {
                                k.$19()
                            }, function() {
                                k.abort(d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_KEEPALIVE_TIMEOUT, d("DGWStream").StreamError.KEEPALIVE_TIMEOUT, d("DGWConstants").WebsocketCloseCodes.KEEPALIVE_TIMEOUT, "Aborting transport because of keepalive timeout")
                            }))
                        };
                        k.$1.onerror = function() {};
                        k.$1.onclose = a.$20(k);
                        m.next = 7;
                        return b("regeneratorRuntime").awrap(a.getTransportPromise(k));
                    case 7:
                        l = m.sent;
                        return m.abrupt("return", l);
                    case 9:
                    case "end":
                        return m.stop()
                }
            }, null, this)
        };
        a.getTransportPromise = function(a) {
            var d;
            return b("regeneratorRuntime").async(function(e) {
                while (1) switch (e.prev = e.next) {
                    case 0:
                        e.next = 2;
                        return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b, d) {
                            var e = a.$1.onerror,
                                f = a.$1.onopen;
                            a.$1.onerror = function() {
                                e(), d(c("err")("Transport could not be initialized"))
                            };
                            a.$1.onopen = function() {
                                f(), b(a)
                            }
                        }));
                    case 2:
                        d = e.sent;
                        return e.abrupt("return", d);
                    case 4:
                    case "end":
                        return e.stop()
                }
            }, null, this)
        };
        a.$18 = function(a) {
            return function(b) {
                var c;
                (c = a.$9) == null ? void 0 : c.reset();
                if (!(b.data instanceof ArrayBuffer)) {
                    a.$13.transportError("Incorrect Data Protocol", "Received " + typeof b.data + " instead of ArrayBuffer");
                    return
                }
                a.$2.append(new Uint8Array(b.data));
                a.$2.processData()
            }
        };
        a.$20 = function(a) {
            return function(b) {
                var c;
                (c = a.$9) == null ? void 0 : c.cancel();
                if (a.$8 === !0 || a.$4) return;
                if (a.$3 === !0) {
                    a.$13.transportEstablishmentFailure(b.code);
                    a.$5.clear();
                    return
                }
                a.$15();
                a.$3 = !0;
                if (b.code !== d("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE) {
                    a.$13.transportClosed(!1, "Websocket connection failure with code " + b.code);
                    c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_UNKNOWN_ERROR;
                    var e = d("DGWStream").StreamError.UNKNOWN_ERROR;
                    switch (b.code) {
                        case d("DGWConstants").WebsocketCloseCodes.NORMAL_CLOSURE:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_ABNORMAL_CLOSURE;
                            e = d("DGWStream").StreamError.ABNORMAL_CLOSURE;
                            break;
                        case d("DGWConstants").WebsocketCloseCodes.ABNORMAL_CLOSURE:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_ABNORMAL_CLOSURE;
                            e = d("DGWStream").StreamError.ABNORMAL_CLOSURE;
                            break;
                        case d("DGWConstants").WebsocketCloseCodes.SERVER_INTERNAL_ERROR:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_SERVER_INTERNAL_ERROR;
                            e = d("DGWStream").StreamError.SERVER_INTERNAL_ERROR;
                            break;
                        case d("DGWConstants").WebsocketCloseCodes.GOING_AWAY:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_GOING_AWAY;
                            e = d("DGWStream").StreamError.GOING_AWAY;
                            break;
                        case d("DGWConstants").WebsocketCloseCodes.UNAUTHORIZED:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_UNAUTHORIZED;
                            e = d("DGWStream").StreamError.UNAUTHORIZED;
                            break;
                        case d("DGWConstants").WebsocketCloseCodes.REJECTED:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_REJECTED;
                            e = d("DGWStream").StreamError.REJECTED;
                            break;
                        case d("DGWConstants").WebsocketCloseCodes.BAD_REQUEST:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_BAD_REQUEST;
                            e = d("DGWStream").StreamError.BAD_REQUEST;
                            break;
                        case d("DGWConstants").WebsocketCloseCodes.DGW_SERVER_ERROR:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_SERVER_INTERNAL_ERROR;
                            e = d("DGWStream").StreamError.DGW_SERVER_ERROR;
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_DGW_SERVER_ERROR;
                            break;
                        default:
                            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_UNKNOWN_ERROR;
                            e = d("DGWStream").StreamError.UNKNOWN_ERROR;
                            break
                    }
                    a.$14.streamGroupCallbacks.onStreamGroupError(c);
                    a.$5.forEach(function(a) {
                        a.__transportCloseHook(e)
                    });
                    a.$6.forEach(function(a) {
                        a.abortStream(e)
                    })
                } else a.$13.transportClosed(!0, ""), a.$14.streamGroupCallbacks.onStreamGroupTransportClose(), a.$5.forEach(function(a) {
                    a.__transportCloseHook()
                }), a.$6.forEach(function(a) {
                    a.abortStream(d("DGWStream").StreamError.TRANSPORT_CLOSED_BEFORE_STREAM_INIT)
                });
                a.$5.clear();
                a.$6.clear()
            }
        };
        e.$19 = function() {
            var a = this.$2.encodePing();
            if (a == null) throw c("err")("Failed to encode Ping Frame");
            this.send(a)
        };
        e.isClosedLocally = function() {
            return this.$3 || this.$8 || this.$4
        };
        e.streamEndCallback = function(a) {
            this.$5["delete"](a), this.$6["delete"](a), this.$10.putBackStreamId(a), this.$5.size === 0 && this.$6.size === 0 && (this.$14.streamGroupCallbacks.onStreamGroupTransportClose(), this.$4 = !0, this.close())
        };
        e.canCreateGroupedStream = function() {
            return this.$10.streamIdAvailable()
        };
        e.createEstablishStreamFrame = function(b, d) {
            d = this.$2.encodeEstablishStream(b, new Uint8Array(this.$11.encode(JSON.stringify(a.__prefixAppHeaders(d.groupedStreamHeaders)))));
            if (d == null) {
                this.$10.putBackStreamId(b);
                throw c("err")("Failed to encode EstablishStreamFrame")
            }
            return d
        };
        e.getStreamId = function() {
            try {
                return this.$10.getNextStreamId()
            } catch (a) {
                this.$13.ranOutOfStreamIds("inFlightGroupedStreamSize: " + this.$6.size + " groupedStreamSize: " + this.$5.size);
                throw a
            }
        };
        e.__createGroupedStream = function(a, b, c, e) {
            var f = this;
            return new(d("GroupedStream").GroupedStream)(a, b, c, this, e, this.$2, function() {
                f.streamEndCallback(a)
            })
        };
        return a
    }();
    g.StreamGroupWebSocketTransport = a
}), 98);
__d("StreamGroup", ["DGWConstants", "DGWLoggingContext", "DGWUtils", "StreamGroupWebSocketTransport", "qex", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, e, f, g, h, i, j, k) {
            this.$2 = k;
            this.$1 = k.getNewStreamGroupId();
            k = (k = i.overrideUrl) != null ? k : g;
            this.$3 = {
                appId: a,
                appVersion: b,
                authType: e,
                dgwVersion: f,
                headers: i.streamGroupAppHeaders,
                tier: (g = i.serviceTier) != null ? g : d("DGWConstants").DEFAULT_SERVICE_TIER,
                connectEndpoint: k,
                fbId: h,
                loggingId: i.loggingId,
                serviceId: i.serviceId,
                streamGroupCallbacks: j,
                keepAliveMs: i.keepAliveMs,
                regionHint: i.regionHint,
                enableFirstStreamOnWsHandshake: c("qex")._("420") === !0
            };
            this.$4 = i;
            this.$5 = new(d("DGWLoggingContext").DGWLoggingContext)(this.$3.dgwVersion, null, this.$3.serviceId, this.$3.fbId, this.$4.loggingId)
        }
        var e = a.prototype;
        e.establishStream = function(a, c) {
            var e = this,
                f, g, h, i, j;
            return b("regeneratorRuntime").async(function(k) {
                while (1) switch (k.prev = k.next) {
                    case 0:
                        if (!(this.$2.containsStreamGroup(this.$1) === !1)) {
                            k.next = 14;
                            break
                        }
                        if (this.$3.enableFirstStreamOnWsHandshake) {
                            k.next = 9;
                            break
                        }
                        h = d("DGWUtils").DGWUtils.constructConnectUrl({
                            appId: this.$3.appId,
                            appVersion: this.$3.appVersion,
                            authType: this.$3.authType,
                            dgwVersion: this.$3.dgwVersion,
                            fbId: this.$3.fbId,
                            headers: babelHelpers["extends"]({}, this.$3.headers),
                            loggingId: (f = this.$3.loggingId) != null ? f : void 0,
                            tier: this.$3.tier,
                            serviceId: this.$3.serviceId,
                            endpoint: this.$3.connectEndpoint,
                            regionHint: (g = this.$3.regionHint) != null ? g : void 0
                        });
                        k.next = 5;
                        return b("regeneratorRuntime").awrap(d("StreamGroupWebSocketTransport").StreamGroupWebSocketTransport.getTransport_DEPRECATED(h, this.$3, this.$5, function() {
                            e.$2.removeStreamGroupAndTransport(e.$1)
                        }));
                    case 5:
                        i = k.sent;
                        this.$2.setStreamGroupAndTransport(this.$1, i);
                        k.next = 14;
                        break;
                    case 9:
                        k.next = 11;
                        return b("regeneratorRuntime").awrap(d("StreamGroupWebSocketTransport").StreamGroupWebSocketTransport.getTransportWithInitialStream(a, c, this.$3, this.$5, function() {
                            e.$2.removeStreamGroupAndTransport(e.$1)
                        }));
                    case 11:
                        j = k.sent;
                        this.$2.setStreamGroupAndTransport(this.$1, j.transport);
                        return k.abrupt("return", j.streamPromise);
                    case 14:
                        return k.abrupt("return", this.establishStreamWithTransport(a, c));
                    case 15:
                    case "end":
                        return k.stop()
                }
            }, null, this)
        };
        e.establishStreamWithTransport = function(a, c) {
            var e, f, g;
            return b("regeneratorRuntime").async(function(h) {
                while (1) switch (h.prev = h.next) {
                    case 0:
                        f = a.loggingId;
                        this.$5.logEvent(d("DGWLoggingContext").DGWLoggingComponent.STREAM_GROUP_COMPONENT, "establishing Stream loggingId: " + ((e = f) != null ? e : ""), null, !0);
                        h.next = 4;
                        return b("regeneratorRuntime").awrap(this.$2.getStreamGroupTransport(this.$1).establishGroupedStream(c, a, new(d("DGWLoggingContext").DGWLoggingContext)(this.$3.dgwVersion, f, this.$3.serviceId, this.$3.fbId, this.$3.loggingId, a.disableFalcoLogging)));
                    case 4:
                        g = h.sent;
                        return h.abrupt("return", g);
                    case 6:
                    case "end":
                        return h.stop()
                }
            }, null, this)
        };
        e.canCreateGroupedStream = function() {
            if (this.$2.containsStreamGroup(this.$1) === !1) return !0;
            else {
                var a = this.$2.getStreamGroupTransport(this.$1);
                return a.canCreateGroupedStream()
            }
        };
        return a
    }();
    g.StreamGroup = a
}), 98);
__d("StreamGroupRegistry", ["Random", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Map(), this.$2 = new Set()
        }
        var b = a.prototype;
        b.setStreamGroupAndTransport = function(a, b) {
            this.$1.set(a, b)
        };
        b.containsStreamGroup = function(a) {
            return this.$1.has(a)
        };
        b.removeStreamGroupAndTransport = function(a) {
            this.$1["delete"](a)
        };
        b.getStreamGroupTransport = function(a) {
            a = this.$1.get(a);
            if (a == void 0) throw c("err")("No stream group transport");
            return a
        };
        b.getNewStreamGroupId = function() {
            var a = d("Random").uint32();
            while (this.$2.has(a)) a = d("Random").uint32();
            this.$2.add(a);
            return a
        };
        return a
    }();
    g.StreamGroupRegistry = a
}), 98);
__d("RawDGWClient", ["CurrentUser", "StreamGroup", "StreamGroupRegistry", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "4";
    a = function() {
        function a(a) {
            var b = a.appId,
                c = a.appVersion,
                e = a.authType,
                f = a.dgwVersion,
                g = a.endpoint;
            a = a.fbId;
            this.$1 = b;
            this.$2 = c;
            this.$3 = e;
            this.$4 = f;
            this.$5 = g;
            this.$6 = a;
            this.$7 = new(d("StreamGroupRegistry").StreamGroupRegistry)()
        }
        var b = a.prototype;
        b.createStreamGroup = function(a, b) {
            return new(d("StreamGroup").StreamGroup)(this.$1, this.$2, this.$3, h, this.$5, this.$6, b, a, this.$7)
        };
        b.handleUserChecks = function() {
            if (!c("CurrentUser").isLoggedInNow()) throw c("err")("DGWClientError: User is not logged in")
        };
        return a
    }();
    g.RawDGWClient = a
}), 98);
__d("DGWClient", ["DGWAuth", "DGWEnvUtil", "DGWWebConfig", "RawDGWClient", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new(d("RawDGWClient").RawDGWClient)({
        appId: c("DGWWebConfig").appId,
        appVersion: c("DGWWebConfig").appVersion,
        authType: d("DGWAuth").fromStringToDGWAuth(c("DGWEnvUtil").getDGWAuthType()),
        dgwVersion: c("DGWWebConfig").dgwVersion,
        endpoint: c("DGWEnvUtil").getDGWEndpoint(),
        fbId: c("DGWWebConfig").fbId
    });

    function a() {
        if (c("DGWEnvUtil").isDGWEnvCompatible()) return h;
        else throw c("err")("unsupported_environment_retry_with_mqtt")
    }
    g["default"] = a
}), 98);
__d("DGWStreamGroupHandler", [], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c) {
            this.$1 = a, this.$2 = b, this.$3 = c
        }
        var b = a.prototype;
        b.onStreamGroupError = function(a) {
            this.$1(a)
        };
        b.onStreamGroupMustDrain = function(a) {
            this.$2(a)
        };
        b.onStreamGroupTransportClose = function() {
            this.$3()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("DGWStreamFactory", ["DGWClient", "DGWStreamGroupHandler", "gkx", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "realtime",
        i = 1e4,
        j = null;
    a = function() {
        function a() {
            this.$3 = 0, this.$1 = null, c("gkx")("2819") && (this.$2 = c("uuid")())
        }
        a.get = function() {
            j == null && (j = new a());
            return j
        };
        var b = a.prototype;
        b.getStreamGroupLoggingId = function() {
            return this.$2
        };
        b.guessStreamGroupPriorStreamCount = function() {
            return this.$3
        };
        b.establishStream = function(a, b, d) {
            var e = this;
            if (this.$1 == null || !this.$1.canCreateGroupedStream()) {
                var f = {
                    serviceId: h,
                    disableFalcoLogging: d.disableFalcoLogging,
                    streamGroupAppHeaders: {
                        "stream-group": "group1"
                    }
                };
                d.overrideUrl != null && (f.overrideUrl = d.overrideUrl);
                c("gkx")("871") && (f.keepAliveMs = i);
                c("gkx")("2819") ? (this.$2 = c("uuid")(), f.loggingId = this.$2) : this.$2 = null;
                this.$3 = 0;
                this.$1 = new(c("DGWClient"))().createStreamGroup(new(c("DGWStreamGroupHandler"))(function() {
                    e.$1 = null
                }, function() {
                    e.$1 = null
                }, function() {
                    e.$1 = null
                }), f)
            }
            this.$3++;
            return this.$1.establishStream({
                loggingId: d.loggingId,
                disableFalcoLogging: d.disableFalcoLogging,
                groupedStreamHeaders: a
            }, b)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("DGWRequestStreamClient", ["DGWRequestStreamRef", "DGWStreamFactory", "Promise"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a != null ? a : c("DGWStreamFactory").get()
        }
        var d = a.prototype;
        d.createStream = function(a, d, e, f, g) {
            return b("Promise").resolve(new(c("DGWRequestStreamRef"))(a, d, f, g, e, this.$1))
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ContextualConfigConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 1e3;
    b = ", ";
    c = {
        SAME: "same",
        NULL: "null",
        NNULL: "nnull",
        CATCH_ALL: "catch_all",
        EQ: "eq",
        NEQ: "neq",
        LT: "lt",
        LTE: "lte",
        GT: "gt",
        GTE: "gte",
        COR: "cor",
        CONTAINS: "contains",
        REGEX: "regex",
        IN: "in",
        NIN: "nin"
    };
    d = {
        DENSE: "dense",
        MULTI_OUTPUT_RESOLVED: "multi-output-resolved",
        TABLE: "table"
    };
    e = [];
    var g = [],
        h = [],
        i = {
            BAD_BOOLEAN_FORMAT: "Bad boolean format",
            BAD_CONFIG: "Bad config",
            BAD_CONTEXT_IDENTIFIER: "Bad context identifier",
            BAD_CONTEXT_VALUE: "Bad context value",
            BAD_MONITORED_CONTEXTS: "Bad monitored contexts",
            BAD_NUMBER_FORMAT: "Bad number format",
            BAD_OUTPUT_NAME: "Bad output name",
            BAD_OUTPUT_TYPE: "Bad output type",
            BAD_VALUE_ORDER: "Bad values order",
            DUPLICATE_OUTPUT_NAME: "Duplicate output name",
            ILLEGAL_BOOLEAN_STRATEGY: "Illegal boolean strategy",
            ILLEGAL_BUCKET_VALUES: "Illegal bucket values",
            ILLEGAL_NUMERIC_STRATEGY: "Illegal numeric strategy",
            ILLEGAL_STRING_STRATEGY: "Illegal string strategy",
            INVALID_BOOLEAN: "Invalid boolean",
            INVALID_FLOAT: "Invalid float",
            INVALID_INTEGER: "Invalid integer",
            INVALID_STRING: "Invalid string",
            INVALID_VALUE_TYPE: "Invalid value type",
            MISMATCH_NUMBER_OF_VALUES: "Mismatching number of values",
            MISSING_BUCKETS: "Missing buckets",
            MISSING_BUCKET_MATCH: "Missing bucket match",
            MISSING_BUCKET_NAME: "Missing bucket name",
            MISSING_BUCKET_STRATEGY: "Missing bucket strategy",
            MISSING_CONTEXT_IN_CONFIG: "Missing context in config",
            MISSING_DEFAULT_VALUE: "Missing default value",
            MISSING_OUTPUTS_DEFINITION: "Missing outputs field definition",
            MISSING_RESULTS: "Missing results",
            MISSING_TABLE: "Missing table",
            MISSING_TABLE_ITEM_BUCKET: "Missing table item bucket",
            MISSING_TABLE_ITEM_VALUES: "Missing table item values",
            MISSING_VECTOR: "Missing vector",
            REGEX_SYNTAX_ERROR: "Regex syntax error",
            REQUESTED_PARAM_NOT_FOUND: "Requested param not found",
            RESULTS_VECTOR_SIZE_MISMATCH: "Results vector size mismatch",
            UNDECLARED_OUTPUT_PARAM: "Undeclared output param",
            UNKNOWN_BUCKET_DEFINITION: "Unknown bucket definition",
            UNKNOWN_CONFIG_TYPE: "Unknown config type",
            UNSUPPORTED_CONFIG_VERSION: "Unsupported config version"
        },
        j = 10,
        k = ", ",
        l = {
            BOOL: "BOOL",
            FLOAT: "FLOAT",
            INT: "INT",
            STRING: "STRING"
        };
    f.ANALYTICS_SAMPLE_RATE = a;
    f.BUCKET_DELIMITER = b;
    f.CONTEXT_BUCKET_STRATEGY = c;
    f.CONFIG_TYPE = d;
    f.EMPTY_RESOLVED_CONTEXTS = e;
    f.EMPTY_RESOLVED_MONITORS = g;
    f.EMPTY_RESULT_PARAMS = h;
    f.ERROR = i;
    f.JSON_SUB_SAMPLE_RATE = j;
    f.LIST_DELIMITER = k;
    f.TYPE = l
}), 66);
__d("ContextualConfigResolvedContextsUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
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
            e = e.bucketIndex;
            if (e == void 0) break;
            b.push(e)
        }
        return b
    };
    b = function(a) {
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
            e = e.bucketName;
            if (e === void 0) break;
            b.push(e)
        }
        return b
    };
    var g = function(a) {
        return a.name
    };
    c = function(a) {
        return a.map(g)
    };
    d = function(a) {
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
            e = e.value;
            if (e === void 0) break;
            b.push(e)
        }
        return b
    };
    f.getBucketIndices = a;
    f.getBucketNames = b;
    f.getContextNames = c;
    f.getContextValues = d
}), 66);
__d("ContextualConfigCollateExposureData", ["ContextualConfigConstants", "ContextualConfigResolvedContextsUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = ["cfg_ver_timestamp", "policy_id", "version", "sample_rate"],
        i = function(a) {
            return a.join(d("ContextualConfigConstants").LIST_DELIMITER)
        },
        j = function(a, b) {
            for (var c = 0; c < h.length; c++) {
                var d = h[c];
                b[d] != null && (a[d] = b[d])
            }
            b.name && (a.config_name = b.name)
        },
        k = function(a, b) {
            var c = b[0],
                e = b[1],
                f = b[2];
            b = b[3];
            c != null && (a.exception = c.message);
            a.result = i(e.map(function(a) {
                return a.value
            })) || "INVALID";
            a.context = i(d("ContextualConfigResolvedContextsUtils").getContextNames(f));
            a.context_value = i(d("ContextualConfigResolvedContextsUtils").getContextValues(f));
            a.bucket_name = i(d("ContextualConfigResolvedContextsUtils").getBucketNames(f));
            a.monitor = i(d("ContextualConfigResolvedContextsUtils").getContextNames(b));
            a.monitor_value = i(d("ContextualConfigResolvedContextsUtils").getContextValues(b))
        };

    function a(a, b, c) {
        var e = {
            sample_rate: d("ContextualConfigConstants").ANALYTICS_SAMPLE_RATE
        };
        j(e, a);
        k(e, b);
        c && (e.config_contents = JSON.stringify(a));
        return e
    }
    g["default"] = a
}), 98);
__d("ContextualConfigExposureEvent", ["Random"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c) {
            this.$2 = a, this.$4 = d("Random").random() < 1 / a.sample_rate, this.$3 = b, this.$1 = c
        }
        var b = a.prototype;
        b.getData = function() {
            return this.$2
        };
        b.log = function(a) {
            var b = this.$2,
                c = this.$3,
                d = this.$4;
            a && c(b);
            d && this.$1(b);
            return this
        };
        b.isSampled = function() {
            return this.$4
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ContextualConfigExposureLoggerFactory", ["ContextualConfigExposureEvent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        function a(a, b) {
            this.$2 = a, this.$1 = b
        }
        var b = a.prototype;
        b.createEvent = function(a) {
            var b = this.$1,
                d = this.$2;
            a = new(c("ContextualConfigExposureEvent"))(a, d, b);
            return a
        };
        return a
    }();

    function a(a, b) {
        return new h(a, b)
    }
    g["default"] = a
}), 98);
__d("CacheStorage", ["ErrorGuard", "EventListenerImplForCacheStorage", "ExecutionEnvironment", "FBJSON", "WebStorage", "emptyFunction", "err", "killswitch"], (function(a, b, c, d, e, f, g) {
    var h = "_@_",
        i = "3b",
        j = "CacheStorageVersion",
        k = {
            length: 0,
            getItem: c("emptyFunction"),
            setItem: c("emptyFunction"),
            clear: c("emptyFunction"),
            removeItem: c("emptyFunction"),
            key: c("emptyFunction")
        };
    a = function() {
        function a(a) {
            this._store = a
        }
        var b = a.prototype;
        b.getStore = function() {
            return this._store
        };
        b.keys = function() {
            var a = [];
            for (var b = 0; b < this._store.length; b++) {
                var c = this._store.key(b);
                c != null && a.push(c)
            }
            return a
        };
        b.get = function(a) {
            return this._store.getItem(a)
        };
        b.set = function(a, b) {
            this._store.setItem(a, b)
        };
        b.remove = function(a) {
            this._store.removeItem(a)
        };
        b.clear = function() {
            this._store.clear()
        };
        b.clearWithPrefix = function(a) {
            a = a || "";
            var b = this.keys();
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d != null && d.startsWith(a) && this.remove(d)
            }
        };
        return a
    }();
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b;
            return a.call(this, (b = c("WebStorage").getLocalStorage()) != null ? b : k) || this
        }
        b.available = function() {
            return !!c("WebStorage").getLocalStorage()
        };
        return b
    }(a);
    e = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b;
            return a.call(this, (b = c("WebStorage").getSessionStorage()) != null ? b : k) || this
        }
        b.available = function() {
            return !!c("WebStorage").getSessionStorage()
        };
        return b
    }(a);
    var l = function() {
            function a() {
                this._store = {}
            }
            var b = a.prototype;
            b.getStore = function() {
                return this._store
            };
            b.keys = function() {
                return Object.keys(this._store)
            };
            b.get = function(a) {
                return this._store[a] === void 0 ? null : this._store[a]
            };
            b.set = function(a, b) {
                this._store[a] = b
            };
            b.remove = function(a) {
                a in this._store && delete this._store[a]
            };
            b.clear = function() {
                this._store = {}
            };
            b.clearWithPrefix = function(a) {
                a = a || "";
                var b = this.keys();
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.startsWith(a) && this.remove(d)
                }
            };
            a.available = function() {
                return !0
            };
            return a
        }(),
        m = {
            memory: l,
            localstorage: b,
            sessionstorage: e
        };
    g = function() {
        function a(a, b) {
            this._changeCallbacks = [];
            this._key_prefix = "_cs_";
            this._exception = null;
            b && (this._key_prefix = b);
            a === "AUTO" || !a ? b = "memory" : b = a;
            b && (!m[b] || !m[b].available() ? (c("ExecutionEnvironment").canUseDOM, this._backend = new l()) : this._backend = new m[b]());
            a = this.useBrowserStorage();
            a && c("EventListenerImplForCacheStorage").listen(window, "storage", this._onBrowserValueChanged.bind(this));
            b = a ? this._backend.getStore().getItem(j) : this._backend.getStore()[j];
            b !== i && (c("killswitch")("CACHE_STORAGE_MODULE_CLEAR_OWN_KEYS") ? this.clear() : this.clearOwnKeys())
        }
        var b = a.prototype;
        b.useBrowserStorage = function() {
            return this._backend.getStore() === c("WebStorage").getLocalStorage() || this._backend.getStore() === c("WebStorage").getSessionStorage()
        };
        b.addValueChangeCallback = function(a) {
            var b = this;
            this._changeCallbacks.push(a);
            return {
                remove: function() {
                    b._changeCallbacks.slice(b._changeCallbacks.indexOf(a), 1)
                }
            }
        };
        b._onBrowserValueChanged = function(a) {
            this._changeCallbacks && String(a.key).startsWith(this._key_prefix) && this._changeCallbacks.forEach(function(b) {
                b(a.key, a.oldValue, a.newValue)
            })
        };
        b.keys = function() {
            var a = this,
                b = [];
            c("ErrorGuard").guard(function() {
                if (a._backend) {
                    var c = a._backend.keys(),
                        d = a._key_prefix.length;
                    for (var e = 0; e < c.length; e++) c[e].substr(0, d) == a._key_prefix && b.push(c[e].substr(d))
                }
            }, {
                name: "CacheStorage"
            })();
            return b
        };
        b.set = function(b, e, f) {
            if (this._backend) {
                if (this.useBrowserStorage() && a._persistentWritesDisabled) {
                    this._exception = c("err")("writes disabled");
                    return !1
                }
                var g;
                typeof e === "string" ? g = h + e : !f ? (g = {
                    __t: Date.now(),
                    __v: e
                }, g = d("FBJSON").stringify(g)) : g = d("FBJSON").stringify(e);
                f = this._backend;
                e = this._key_prefix + b;
                b = !0;
                var i = null;
                while (b) try {
                    i = null, f.set(e, g), b = !1
                } catch (a) {
                    i = a;
                    var j = f.keys().length;
                    this._evictCacheEntries();
                    b = f.keys().length < j
                }
                if (i !== null) {
                    this._exception = i;
                    return !1
                } else {
                    this._exception = null;
                    return !0
                }
            }
            this._exception = c("err")("no back end");
            return !1
        };
        b.getLastSetExceptionMessage = function() {
            return this._exception ? this._exception.message : null
        };
        b.getLastSetException = function() {
            return this._exception
        };
        b.getStorageKeyCount = function() {
            var a = this._backend;
            return a ? a.keys().length : 0
        };
        b._evictCacheEntries = function() {
            var b = [],
                c = this._backend;
            c.keys().forEach(function(e) {
                if (e === j) return;
                var g = c.get(e);
                if (g === void 0) {
                    c.remove(e);
                    return
                }
                if (a._hasMagicPrefix(g)) return;
                try {
                    g = d("FBJSON").parse(g, f.id)
                } catch (a) {
                    c.remove(e);
                    return
                }
                g && g.__t !== void 0 && g.__v !== void 0 && b.push([e, g.__t])
            });
            b.sort(function(a, b) {
                return a[1] - b[1]
            });
            for (var e = 0; e < Math.ceil(b.length / 2); e++) c.remove(b[e][0])
        };
        b.get = function(b, e) {
            var g;
            if (this._backend) {
                c("ErrorGuard").applyWithGuard(function() {
                    g = this._backend.get(this._key_prefix + b)
                }, this, [], {
                    onError: function() {
                        g = null
                    },
                    name: "CacheStorage:get"
                });
                if (g != null)
                    if (a._hasMagicPrefix(g)) g = g.substr(h.length);
                    else try {
                        g = d("FBJSON").parse(g, f.id), g && g.__t !== void 0 && g.__v !== void 0 && (g = g.__v)
                    } catch (a) {
                        g = void 0
                    } else g = void 0
            }
            g === void 0 && e !== void 0 && (g = e, this.set(b, g));
            return g
        };
        b.remove = function(a) {
            this._backend && c("ErrorGuard").applyWithGuard(this._backend.remove, this._backend, [this._key_prefix + a], {
                name: "CacheStorage:remove"
            })
        };
        b._setVersion = function() {
            var a = this;
            c("ErrorGuard").applyWithGuard(function() {
                a.useBrowserStorage() ? a._backend.getStore().setItem(j, i) : a._backend.getStore()[j] = i
            }, this, [], {
                name: "CacheStorage:setVersion"
            })
        };
        b.clear = function() {
            this._backend && (c("ErrorGuard").applyWithGuard(this._backend.clear, this._backend, [], {
                name: "CacheStorage:clear"
            }), this._setVersion())
        };
        b.clearOwnKeys = function() {
            this._backend && (c("ErrorGuard").applyWithGuard(this._backend.clearWithPrefix, this._backend, [this._key_prefix], {
                name: "CacheStorage:clearOwnKeys"
            }), this._setVersion())
        };
        a.getAllStorageTypes = function() {
            return Object.keys(m)
        };
        a._hasMagicPrefix = function(a) {
            return a.substr(0, h.length) === h
        };
        a.disablePersistentWrites = function() {
            a._persistentWritesDisabled = !0
        };
        return a
    }();
    g._persistentWritesDisabled = !1;
    f.exports = g
}), 34);
__d("MarauderLogger", ["Banzai", "CacheStorage", "MarauderConfig"], (function(a, b, c, d, e, f) {
    var g = "client_event",
        h = "navigation",
        i = 18e4,
        j = "marauder",
        k = "marauder_last_event_time",
        l = "marauder_last_session_id",
        m = {},
        n = [],
        o = !1,
        p = null,
        q = null,
        r = null,
        s = 0,
        t, u, v = !1,
        w = null;

    function a() {
        F().set(k, x())
    }
    b("Banzai").subscribe(b("Banzai").SHUTDOWN, a);

    function x() {
        t = t || F().get(k) || 0;
        return t
    }

    function y() {
        v || (u = F().get(l), v = !0);
        var a = Date.now();
        (!u || a - i > x()) && (u = a.toString(16) + "-" + (~~(Math.random() * 16777215)).toString(16), F().set(l, u));
        return u
    }

    function z() {
        return {
            user_agent: window.navigator.userAgent,
            screen_height: window.screen.availHeight,
            screen_width: window.screen.availWidth,
            density: window.screen.devicePixelRatio || null,
            platform: window.navigator.platform || null,
            locale: window.navigator.language || null
        }
    }

    function A() {
        return {
            locale: navigator.language
        }
    }

    function B(a, b, c, d, e, f, g) {
        var h = g != null && g != 0 ? g : Date.now();
        t = g != null && g != 0 ? Date.now() : h;
        g = b != null && b != "" ? b : p;
        return {
            name: a,
            time: h / 1e3,
            module: g,
            obj_type: d,
            obj_id: e,
            uuid: f,
            extra: c
        }
    }

    function C(a, b, c) {
        return B("content", null, {
            flags: b
        }, null, null, a, c)
    }

    function D(a) {
        var b = window.__mrdr;
        if (b)
            for (var c in b) {
                var d = b[c];
                if (d[3] !== 0) {
                    delete b[c];
                    if (c === "1")
                        if (r !== null) c = r;
                        else continue;
                    a.push(C(c, 1, d[1]));
                    a.push(C(c, 2, d[2]));
                    a.push(C(c, 3, d[3]))
                }
            }
    }

    function E(a, c) {
        D(a);
        if (a.length === 0) return;
        o && a.push(B("counters", null, m));
        var d = b("Banzai").BASIC;
        c === "vital" && (d = b("Banzai").VITAL);
        var e = b("MarauderConfig").gk_enabled;
        s === 0 && e && (a.push(B("device_status", null, A())), d = {
            delay: 5e3
        });
        c === "signal" && (d = {
            signal: !0
        });
        e && Math.random() < .01 && a.push(B("device_info", null, z()));
        if (r !== null)
            for (var c = 0; c < a.length; c++) {
                e = a[c];
                (e.uuid === null || e.uuid === void 0) && (e.uuid = r)
            }
        e = {
            app_ver: b("MarauderConfig").app_version,
            data: a,
            device_id: void 0,
            log_type: g,
            seq: s++,
            session_id: y()
        };
        c = F().get("device_id");
        c && (e.device_id = c);
        m = {};
        o = !1;
        b("Banzai").post(j, e, d)
    }

    function F() {
        w || (w = new(b("CacheStorage"))("localstorage", ""));
        return w
    }

    function c(a) {
        m[a] || (m[a] = 0), m[a]++, o = !0
    }

    function G(b, a, c, d, f, g, h, i) {
        E([B(b, a, c, d, f, g, h)], i)
    }

    function H(a, b) {
        p !== b && (n.push(B(h, p, {
            dest_module: b,
            source_url: q,
            destination_url: a
        })), p = b, q = a)
    }

    function d(a, b) {
        p !== b && (r = null, H(a, b))
    }

    function f(a, b, c) {
        G(b ? "show_module" : "hide_module", a, c)
    }

    function I(a) {
        p = a
    }

    function J() {
        return p
    }

    function K(a) {
        r === null && (r = a, a !== null && (E(n), n = []))
    }
    e.exports = {
        count: c,
        log: G,
        navigateTo: d,
        navigateWithinSession: H,
        toggleModule: f,
        setUUID: K,
        setNavigationModule: I,
        getNavigationModule: J
    }
}), null);
__d("ContextualConfigExposureLogger", ["ContextualConfigExposureLoggerFactory", "MarauderLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {};
    b = function(a) {
        d("MarauderLogger").log("contextual_config_exposure", "", a)
    };
    e = c("ContextualConfigExposureLoggerFactory")(a, b);
    g["default"] = e
}), 98);
__d("ContextualConfigAssert", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a === !1) throw new Error(b)
    }
    f["default"] = a
}), 66);
__d("ContextualConfigValidators", ["ContextualConfigConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        return Array.isArray(a)
    };
    b = function(a) {
        return typeof a === "boolean"
    };
    c = function(a) {
        return a != null
    };
    e = function(a) {
        return function(b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
    };
    f = function(a) {
        return i(a) && a % 1 === 0
    };
    var h = function(a) {
            return j(a) && a.length > 0
        },
        i = function(a) {
            return typeof a === "number" && !isNaN(a) && a !== Infinity && a !== -Infinity
        },
        j = function(a) {
            return typeof a === "string"
        },
        k = function(a) {
            switch (a) {
                case d("ContextualConfigConstants").TYPE.BOOL:
                case d("ContextualConfigConstants").TYPE.FLOAT:
                case d("ContextualConfigConstants").TYPE.INT:
                case d("ContextualConfigConstants").TYPE.STRING:
                    return !0;
                default:
                    return !1
            }
        };
    g.isArray = a;
    g.isBoolean = b;
    g.isDefined = c;
    g.isKey = e;
    g.isInteger = f;
    g.isNonEmptyString = h;
    g.isNumber = i;
    g.isString = j;
    g.isType = k
}), 98);
__d("ContextualConfigParseBoolean", ["ContextualConfigConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        switch (a.toUpperCase()) {
            case "TRUE":
                return !0;
            case "FALSE":
                return !1;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.BAD_BOOLEAN_FORMAT)
        }
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParsePredBoolean", ["ContextualConfigConstants", "ContextualConfigParseBoolean"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var e;
        switch (b) {
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
                var f = c("ContextualConfigParseBoolean")(a);
                e = function(a) {
                    return a === f
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
                e = function(a) {
                    return a == null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
                e = function(a) {
                    return a != null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
                e = function(a) {
                    return !0
                };
                break;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.ILLEGAL_BOOLEAN_STRATEGY)
        }
        return function(a) {
            return e(a)
        }
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseFloat", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = /^[-\+]?([1-9]\d*|0)(\.\d+)?$/,
        i = function(a) {
            return h.test(a)
        };

    function a(a) {
        c("ContextualConfigAssert")(i(a), d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT);
        a = parseFloat(a);
        c("ContextualConfigAssert")(d("ContextualConfigValidators").isNumber(a), d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT);
        return a
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseInteger", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = /^[-\+]?([1-9]\d*|0)$/,
        i = function(a) {
            return h.test(a)
        };

    function a(a) {
        c("ContextualConfigAssert")(i(a), d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT);
        a = parseInt(a, 10);
        c("ContextualConfigAssert")(d("ContextualConfigValidators").isNumber(a), d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT);
        return a
    }
    g["default"] = a
}), 98);
__d("ContextualConfigPredAssertions", ["ContextualConfigAssert", "ContextualConfigConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        return c("ContextualConfigAssert")(a > 0, d("ContextualConfigConstants").ERROR.MISMATCH_NUMBER_OF_VALUES)
    };
    b = function(a, b) {
        return c("ContextualConfigAssert")(a === b, d("ContextualConfigConstants").ERROR.MISMATCH_NUMBER_OF_VALUES)
    };
    e = function(a, b) {
        return c("ContextualConfigAssert")(a < b, d("ContextualConfigConstants").ERROR.BAD_VALUE_ORDER)
    };
    g.assertHasValues = a;
    g.assertNumberOfValues = b;
    g.assertValueOrder = e
}), 98);
__d("ContextualConfigParsePredNumeric", ["ContextualConfigConstants", "ContextualConfigParseFloat", "ContextualConfigParseInteger", "ContextualConfigPredAssertions", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, e, f) {
        var g = e.map(f ? c("ContextualConfigParseInteger") : c("ContextualConfigParseFloat")),
            h;
        switch (b) {
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
                var i = f ? c("ContextualConfigParseInteger")(a) : c("ContextualConfigParseFloat")(a);
                h = function(a) {
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a === i
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
                h = function(a) {
                    return a == null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
                h = function(a) {
                    return a != null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
                h = function(a) {
                    return !0
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.COR:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 2);
                d("ContextualConfigPredAssertions").assertValueOrder(g[0], g[1]);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a >= g[0] && a < g[1]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.LT:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a < g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.LTE:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a <= g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.EQ:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a === g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NEQ:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a !== g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.GT:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a > g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.GTE:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a >= g[0]
                };
                break;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.ILLEGAL_NUMERIC_STRATEGY)
        }
        return function(a) {
            return h(a)
        }
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseRegExp", ["ContextualConfigConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = /^\/(.+)\/(.*)$/;

    function a(a) {
        try {
            var b = a.match(h);
            if (b != null) return new RegExp(b[1], b[2]);
            else return new RegExp(a)
        } catch (a) {
            throw new Error(d("ContextualConfigConstants").ERROR.REGEX_SYNTAX_ERROR)
        }
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParsePredString", ["ContextualConfigConstants", "ContextualConfigParseRegExp", "ContextualConfigPredAssertions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            if (typeof a !== "string") throw new Error(d("ContextualConfigConstants").ERROR.INVALID_VALUE_TYPE);
            return a
        },
        i = function(a) {
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
                b.push(h(e))
            }
            return b
        };

    function a(a, b, e) {
        var f = i(e),
            g;
        switch (b) {
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
                g = function(b) {
                    return typeof b !== "string" ? !1 : b === a
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
                g = function(a) {
                    return a == null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
                g = function(a) {
                    return a != null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
                g = function(a) {
                    return !0
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.IN:
                d("ContextualConfigPredAssertions").assertHasValues(f.length);
                g = function(a) {
                    return typeof a !== "string" ? !1 : f.indexOf(a) !== -1
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NIN:
                d("ContextualConfigPredAssertions").assertHasValues(f.length);
                g = function(a) {
                    return typeof a !== "string" ? !1 : f.indexOf(a) === -1
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CONTAINS:
                d("ContextualConfigPredAssertions").assertNumberOfValues(f.length, 1);
                g = function(a) {
                    return typeof a !== "string" ? !1 : a.indexOf(f[0]) !== -1
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.REGEX:
                d("ContextualConfigPredAssertions").assertNumberOfValues(f.length, 1);
                var h = c("ContextualConfigParseRegExp")(f[0]);
                g = function(a) {
                    return typeof a !== "string" ? !1 : h.test(a)
                };
                break;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.ILLEGAL_STRING_STRATEGY)
        }
        return function(a) {
            return g(a)
        }
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseContextBuckets", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParsePredBoolean", "ContextualConfigParsePredNumeric", "ContextualConfigParsePredString", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.MISSING_BUCKETS)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_BUCKETS)
        },
        j = d("ContextualConfigValidators").isKey(d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY),
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isString(a) && j(a.toUpperCase()), d("ContextualConfigConstants").ERROR.MISSING_BUCKET_STRATEGY)
        },
        l = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.ILLEGAL_BUCKET_VALUES)
        },
        m = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.MISSING_BUCKET_NAME)
        },
        n = function(a, b) {
            var e = b.name;
            m(e);
            var f = b.strategy;
            k(f);
            b = b.values || [];
            l(b);
            switch (a) {
                case d("ContextualConfigConstants").TYPE.BOOL:
                    return c("ContextualConfigParsePredBoolean")(e, f);
                case d("ContextualConfigConstants").TYPE.FLOAT:
                    return c("ContextualConfigParsePredNumeric")(e, f, b, !1);
                case d("ContextualConfigConstants").TYPE.INT:
                    return c("ContextualConfigParsePredNumeric")(e, f, b, !0);
                case d("ContextualConfigConstants").TYPE.STRING:
                    return c("ContextualConfigParsePredString")(e, f, b);
                default:
                    throw new Error(d("ContextualConfigConstants").ERROR.UNKNOWN_BUCKET_DEFINITION)
            }
        },
        o = function(a, b) {
            h(b);
            var c = b.name;
            m(c);
            return {
                name: c,
                pred: n(a, b)
            }
        };

    function a(a, b) {
        i(b);
        return b.map(function(b) {
            return o(a, b)
        })
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseContexts", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseContextBuckets", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a) && a.length > 0, d("ContextualConfigConstants").ERROR.MISSING_CONTEXT_IN_CONFIG)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isType(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        l = function(a) {
            h(a);
            var b = a.name,
                d = a.type;
            a = a.buckets;
            j(b);
            k(d);
            return {
                name: b,
                type: d,
                buckets: c("ContextualConfigParseContextBuckets")(d, a)
            }
        };

    function a(a) {
        i(a);
        return a.map(l)
    }
    g["default"] = a
}), 98);
__d("ContextualConfigIsEqualParams", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a.length != b.length) return !1;
        for (var c = 0; c < a.length; c += 1) {
            var d = a[c],
                e = b[c];
            if (d.name !== e.name || d.type !== e.type) return !1
        }
        return !0
    }
    f["default"] = a
}), 66);
__d("ContextualConfigParseResultParamValue", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseBoolean", "ContextualConfigParseFloat", "ContextualConfigParseInteger", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
        return c("ContextualConfigAssert")(d("ContextualConfigValidators").isString(a), d("ContextualConfigConstants").ERROR.INVALID_STRING)
    };

    function a(a, b) {
        h(b);
        switch (a) {
            case d("ContextualConfigConstants").TYPE.BOOL:
                return c("ContextualConfigParseBoolean")(b);
            case d("ContextualConfigConstants").TYPE.FLOAT:
                return c("ContextualConfigParseFloat")(b);
            case d("ContextualConfigConstants").TYPE.INT:
                return c("ContextualConfigParseInteger")(b);
            case d("ContextualConfigConstants").TYPE.STRING:
                return b;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.INVALID_VALUE_TYPE)
        }
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseResultParams", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseResultParamValue", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_RESULTS)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isType(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE)
        },
        l = function(a, b) {
            for (var a = a, c = Array.isArray(a), e = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (c) {
                    if (e >= a.length) break;
                    f = a[e++]
                } else {
                    e = a.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                if (f.name === b) return f.type
            }
            throw new Error(d("ContextualConfigConstants").ERROR.UNDECLARED_OUTPUT_PARAM)
        },
        m = function(a) {
            return function(b) {
                i(b);
                var d = b.name;
                j(d);
                var e = l(a, d);
                k(e);
                b = c("ContextualConfigParseResultParamValue")(e, b.value);
                return {
                    name: d,
                    type: e,
                    value: b
                }
            }
        };

    function a(a, b) {
        h(b);
        return b.map(m(a))
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseDenseResultParams", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigIsEqualParams", "ContextualConfigParseResultParams"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        return c("ContextualConfigAssert")(c("ContextualConfigIsEqualParams")(a, b), d("ContextualConfigConstants").ERROR.RESULTS_VECTOR_SIZE_MISMATCH)
    };

    function a(a, b) {
        b = c("ContextualConfigParseResultParams")(a, b.map(function(b, c) {
            return {
                name: a[c].name,
                value: b
            }
        }));
        h(a, b);
        return b
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseDenseDefaults", ["ContextualConfigConstants", "ContextualConfigParseDenseResultParams"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        try {
            return c("ContextualConfigParseDenseResultParams")(a, b)
        } catch (a) {
            throw new Error(d("ContextualConfigConstants").ERROR.MISSING_DEFAULT_VALUE)
        }
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseMonitors", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.BAD_MONITORED_CONTEXTS)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isType(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        l = function(a) {
            h(a);
            var b = a.name;
            a = a.type;
            j(b);
            k(a);
            return {
                name: b,
                type: a
            }
        };

    function a(a) {
        i(a);
        return a.map(l)
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseOutputParams", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_OUTPUTS_DEFINITION)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isType(a), d("ContextualConfigConstants").ERROR.BAD_OUTPUT_TYPE)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.BAD_OUTPUT_NAME)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(l(a), d("ContextualConfigConstants").ERROR.DUPLICATE_OUTPUT_NAME)
        },
        l = function(a) {
            var b = {};
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
                if (b[e.name]) return !1;
                b[e.name] = !0
            }
            return !0
        },
        m = function(a) {
            j(a.name);
            i(a.type);
            return a
        };

    function a(a) {
        h(a);
        a = a.map(m);
        k(a);
        return a
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseVector", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseResultParamValue", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_VECTOR)
        },
        i = function(a, b) {
            return c("ContextualConfigAssert")(a === b, d("ContextualConfigConstants").ERROR.RESULTS_VECTOR_SIZE_MISMATCH)
        },
        j = function(a, b) {
            i(a.length, b.length);
            for (var d = 0; d < a.length; d += 1) {
                var e = a[d].type,
                    f = b[d];
                c("ContextualConfigParseResultParamValue")(e, f)
            }
        },
        k = function(a) {
            return a.reduce(function(a, b) {
                b = b.buckets;
                return a * b.length
            }, 1)
        };

    function a(a, b, c) {
        h(c);
        b = k(b);
        var d = a.length;
        i(b * d, c.length);
        for (var e = 0; e < b; e += 1) {
            var f = e * d;
            j(a, c.slice(f, f + d))
        }
        return c
    }
    g["default"] = a
}), 98);
__d("ContextualConfigResolveContexts", ["ContextualConfigConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        for (var c = 0; c < a.length; c += 1) {
            var d = a[c];
            try {
                if (d.pred(b)) return [d.name, c]
            } catch (a) {
                return null
            }
        }
        return null
    };

    function a(a, b, c) {
        var e = null;
        a = a.map(function(a) {
            var f = a.name,
                g = {
                    name: f
                };
            if (e != null) return g;
            var i;
            c[f] != null ? i = c[f] : b[f] != null ? i = b[f]() : i = null;
            g.value = i;
            if (a.buckets != null) {
                f = h(a.buckets, i);
                if (f == null) {
                    e = new Error(d("ContextualConfigConstants").ERROR.MISSING_BUCKET_MATCH);
                    return g
                }
                a = f[0];
                i = f[1];
                g.bucketName = a;
                g.bucketIndex = i
            }
            return g
        });
        return [e, a]
    }
    g["default"] = a
}), 98);
__d("DenseContextualConfig", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseContexts", "ContextualConfigParseDenseDefaults", "ContextualConfigParseDenseResultParams", "ContextualConfigParseMonitors", "ContextualConfigParseOutputParams", "ContextualConfigParseVector", "ContextualConfigResolveContexts", "ContextualConfigResolvedContextsUtils", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONFIG)
        },
        i = function(a) {
            var b = [],
                c = 1;
            for (var d = a.length - 1; d >= 0; d -= 1) b.push(c), c *= a[d].buckets.length;
            return b.reverse()
        },
        j = function(a, b, d, e) {
            try {
                b = b.slice(d, d + a.length);
                return [null, c("ContextualConfigParseDenseResultParams")(a, b)]
            } catch (a) {
                return [a, e]
            }
        },
        k = function(a, b, d) {
            try {
                d = d.reduce(function(b, d, e) {
                    c("ContextualConfigAssert")(e < a.length, "Auxillery index out of range.");
                    return b + a[e] * d
                }, 0);
                return [null, d * b]
            } catch (a) {
                return [a, -1]
            }
        };
    a = function() {
        function a(a, b) {
            h(a);
            this.globalContextProviders = babelHelpers["extends"]({}, b);
            b = c("ContextualConfigParseOutputParams")(a.outputs);
            var d = c("ContextualConfigParseContexts")(a.contexts);
            this.aux = i(d);
            this.contexts = d;
            this.defaults = c("ContextualConfigParseDenseDefaults")(b, a.vectorDefaults);
            this.monitors = a.monitors != null ? c("ContextualConfigParseMonitors")(a.monitors) : [];
            this.outputs = b;
            this.vector = c("ContextualConfigParseVector")(b, d, a.vector)
        }
        var b = a.prototype;
        b.resolve = function(a) {
            try {
                return this.unsafeResolve(a)
            } catch (a) {
                return [a, this.defaults, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
            }
        };
        b.unsafeResolve = function(a) {
            var b = this.aux,
                e = this.globalContextProviders,
                f = this.contexts,
                g = this.defaults,
                h = this.monitors,
                i = this.outputs,
                l = this.vector;
            f = c("ContextualConfigResolveContexts")(f, e, a);
            var m = f[0];
            f = f[1];
            if (m != null) return [m, g, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS];
            m = k(b, i.length, d("ContextualConfigResolvedContextsUtils").getBucketIndices(f));
            b = m[0];
            m = m[1];
            if (b != null) return [b, g, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS];
            b = j(i, l, m, g);
            i = b[0];
            l = b[1];
            if (i != null) return [i, l, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS];
            m = c("ContextualConfigResolveContexts")(h, e, a);
            g = m[0];
            b = m[1];
            return g != null ? [g, l, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS] : [null, l, f, b]
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("MultiOutputResolvedContextualConfig", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseMonitors", "ContextualConfigParseOutputParams", "ContextualConfigParseResultParams", "ContextualConfigResolveContexts", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
        return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONFIG)
    };
    a = function() {
        function a(a, b) {
            h(a);
            this.globalContextProviders = babelHelpers["extends"]({}, b);
            b = c("ContextualConfigParseOutputParams")(a.outputs);
            this.monitors = a.monitors != null ? c("ContextualConfigParseMonitors")(a.monitors) : [];
            this.values = c("ContextualConfigParseResultParams")(b, a.values)
        }
        var b = a.prototype;
        b.resolve = function(a) {
            try {
                return this.unsafeResolve(a)
            } catch (a) {
                return [a, this.values, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
            }
        };
        b.unsafeResolve = function(a) {
            var b = this.globalContextProviders,
                e = this.monitors,
                f = this.values;
            e = c("ContextualConfigResolveContexts")(e, b, a);
            b = e[0];
            a = e[1];
            return b != null ? [b, f, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS] : [null, f, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, a]
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ContextualConfigMergePartialResultParams", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        var c = {};
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
            c[f.name] = f
        }
        f = [];
        for (var e = a, d = Array.isArray(e), b = 0, e = d ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (d) {
                if (b >= e.length) break;
                a = e[b++]
            } else {
                b = e.next();
                if (b.done) break;
                a = b.value
            }
            a = a;
            var g = c[a.name];
            f.push(g != null && g.name === a.name && g.type === a.type ? g : a)
        }
        return f
    }
    f["default"] = a
}), 66);
__d("ContextualConfigParseDefaults", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigIsEqualParams", "ContextualConfigParseResultParams"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        return c("ContextualConfigAssert")(c("ContextualConfigIsEqualParams")(a, b), d("ContextualConfigConstants").ERROR.MISSING_DEFAULT_VALUE)
    };

    function a(a, b) {
        b = c("ContextualConfigParseResultParams")(a, b);
        h(a, b);
        return b
    }
    g["default"] = a
}), 98);
__d("ContextualConfigParseTable", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseResultParams", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_TABLE)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.MISSING_TABLE)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.MISSING_TABLE_ITEM_BUCKET)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_TABLE_ITEM_VALUES)
        },
        l = function(a, b) {
            i(b);
            var d = b.bucket;
            b = b.values;
            j(d);
            k(b);
            return {
                bucket: d,
                values: c("ContextualConfigParseResultParams")(a, b)
            }
        };

    function a(a, b) {
        h(b);
        return b.reduce(function(b, c) {
            c = l(a, c);
            b[c.bucket] = c.values;
            return b
        }, {})
    }
    g["default"] = a
}), 98);
__d("TableContextualConfig", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigMergePartialResultParams", "ContextualConfigParseContexts", "ContextualConfigParseDefaults", "ContextualConfigParseMonitors", "ContextualConfigParseOutputParams", "ContextualConfigParseTable", "ContextualConfigResolveContexts", "ContextualConfigResolvedContextsUtils", "ContextualConfigValidators"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONFIG)
        };
    a = function() {
        function a(a, b) {
            i(a);
            this.globalContextProviders = babelHelpers["extends"]({}, b);
            b = c("ContextualConfigParseOutputParams")(a.outputs);
            this.contexts = c("ContextualConfigParseContexts")(a.contexts);
            this.defaults = c("ContextualConfigParseDefaults")(b, a.defaults);
            this.monitors = a.monitors != null ? c("ContextualConfigParseMonitors")(a.monitors) : [];
            this.table = c("ContextualConfigParseTable")(b, a.table)
        }
        var b = a.prototype;
        b.resolve = function(a) {
            try {
                return this.unsafeResolve(a)
            } catch (a) {
                return [a, this.defaults, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
            }
        };
        b.unsafeResolve = function(a) {
            var b = this.globalContextProviders,
                e = this.contexts,
                f = this.defaults,
                g = this.monitors,
                i = this.table;
            e = c("ContextualConfigResolveContexts")(e, b, a);
            var j = e[0];
            e = e[1];
            if (j != null) return [j, f, e, []];
            j = d("ContextualConfigResolvedContextsUtils").getBucketNames(e).join(d("ContextualConfigConstants").BUCKET_DELIMITER);
            i = i[j] || h;
            j = c("ContextualConfigMergePartialResultParams")(f, i);
            f = c("ContextualConfigResolveContexts")(g, b, a);
            i = f[0];
            g = f[1];
            return i != null ? [i, j, e, []] : [null, j, e, g]
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ContextualConfigParseConfig", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators", "DenseContextualConfig", "MultiOutputResolvedContextualConfig", "TableContextualConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [1],
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a) && d("ContextualConfigValidators").isDefined(a.version), d("ContextualConfigConstants").ERROR.BAD_CONFIG)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(h.indexOf(a) !== -1, d("ContextualConfigConstants").ERROR.UNSUPPORTED_CONFIG_VERSION)
        };

    function a(a, b) {
        i(a);
        j(a.version);
        switch (a.cctype) {
            case d("ContextualConfigConstants").CONFIG_TYPE.DENSE:
                return new(c("DenseContextualConfig"))(a, b);
            case d("ContextualConfigConstants").CONFIG_TYPE.MULTI_OUTPUT_RESOLVED:
                return new(c("MultiOutputResolvedContextualConfig"))(a, b);
            case d("ContextualConfigConstants").CONFIG_TYPE.TABLE:
                return new(c("TableContextualConfig"))(a, b);
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.UNKNOWN_CONFIG_TYPE)
        }
    }
    g["default"] = a
}), 98);
__d("ContextualConfigWarn", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {}
    f["default"] = a
}), 66);
__d("ContextualConfigResult", ["ContextualConfigConstants", "ContextualConfigWarn"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a.reduce(function(a, b) {
                var c = b.name;
                b = b.value;
                a[c] = b;
                return a
            }, {}), this.$2 = a
        }
        var b = a.prototype;
        b.get = function(a, b) {
            try {
                a = this.$1[a];
                if (typeof a !== typeof b) {
                    c("ContextualConfigWarn")(d("ContextualConfigConstants").ERROR.REQUESTED_PARAM_NOT_FOUND);
                    return b
                }
                return a
            } catch (a) {
                c("ContextualConfigWarn")(a.message);
                return b
            }
        };
        b.getParams = function() {
            return this.$2
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ErrorContextualConfig", ["ContextualConfigConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.error = a
        }
        var b = a.prototype;
        b.resolve = function(a) {
            return [this.error, d("ContextualConfigConstants").EMPTY_RESULT_PARAMS, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ContextualConfig", ["ContextualConfigCollateExposureData", "ContextualConfigConstants", "ContextualConfigExposureLogger", "ContextualConfigParseConfig", "ContextualConfigResult", "ErrorContextualConfig", "Random"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1 / d("ContextualConfigConstants").JSON_SUB_SAMPLE_RATE,
        i = 1;
    a = function() {
        function a(a, b) {
            b === void 0 && (b = {}), this.isDebugLoggingEnabled = !1, this.$3 = !1, this.$4 = a, this.$2 = b
        }
        var b = a.prototype;
        b.$5 = function() {
            if (this.$1) return this.$1;
            var a = this.$2,
                b = this.$4;
            try {
                b = c("ContextualConfigParseConfig")(b, a)
            } catch (a) {
                b = new(c("ErrorContextualConfig"))(a)
            }
            this.$1 = b;
            return b
        };
        b.$6 = function(a) {
            var b = this.isDebugLoggingEnabled,
                e = this.$4,
                f = this.$3;
            f = !f && d("Random").random() < h;
            f && (this.$3 = !0);
            e = c("ContextualConfigCollateExposureData")(e, a, f);
            a = c("ContextualConfigExposureLogger").createEvent(e);
            a.log(b)
        };
        b.resolve = function(a) {
            a === void 0 && (a = {});
            var b = this.$1 || this.$5();
            b = b.resolve(a);
            this.$6(b);
            return new(c("ContextualConfigResult"))(b[i])
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("DGWCppBridge", [], (function(m, n, o, p, q, r) {
    var s = function() {
        var m = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
        return function(n) {
            n = n || {};
            var n = typeof n !== "undefined" ? n : {},
                o = function() {
                    function n() {}

                    function o(m, n) {
                        return function() {
                            m.apply(n, arguments)
                        }
                    }

                    function m(n) {
                        if (!(this instanceof m)) throw new TypeError("Promises must be constructed via new");
                        if (typeof n !== "function") throw new TypeError("not a function");
                        this._state = 0;
                        this._handled = !1;
                        this._value = void 0;
                        this._deferreds = [];
                        u(n, this)
                    }

                    function p(n, o) {
                        while (n._state === 3) n = n._value;
                        if (n._state === 0) {
                            n._deferreds.push(o);
                            return
                        }
                        n._handled = !0;
                        m._immediateFn(function() {
                            var m = n._state === 1 ? o.onFulfilled : o.onRejected;
                            if (m === null) {
                                (n._state === 1 ? q : r)(o.promise, n._value);
                                return
                            }
                            try {
                                m = m(n._value)
                            } catch (m) {
                                r(o.promise, m);
                                return
                            }
                            q(o.promise, m)
                        })
                    }

                    function q(n, p) {
                        try {
                            if (p === n) throw new TypeError("A promise cannot be resolved with itself.");
                            if (p && (typeof p === "object" || typeof p === "function")) {
                                var q = p.then;
                                if (p instanceof m) {
                                    n._state = 3;
                                    n._value = p;
                                    s(n);
                                    return
                                } else if (typeof q === "function") {
                                    u(o(q, p), n);
                                    return
                                }
                            }
                            n._state = 1;
                            n._value = p;
                            s(n)
                        } catch (m) {
                            r(n, m)
                        }
                    }

                    function r(m, n) {
                        m._state = 2, m._value = n, s(m)
                    }

                    function s(n) {
                        n._state === 2 && n._deferreds.length === 0 && m._immediateFn(function() {
                            n._handled || m._unhandledRejectionFn(n._value)
                        });
                        for (var o = 0, q = n._deferreds.length; o < q; o++) p(n, n._deferreds[o]);
                        n._deferreds = null
                    }

                    function t(m, n, o) {
                        this.onFulfilled = typeof m === "function" ? m : null, this.onRejected = typeof n === "function" ? n : null, this.promise = o
                    }

                    function u(m, n) {
                        var o = !1;
                        try {
                            m(function(m) {
                                if (o) return;
                                o = !0;
                                q(n, m)
                            }, function(m) {
                                if (o) return;
                                o = !0;
                                r(n, m)
                            })
                        } catch (m) {
                            if (o) return;
                            o = !0;
                            r(n, m)
                        }
                    }
                    m.prototype["catch"] = function(m) {
                        return this.then(null, m)
                    };
                    m.prototype.then = function(m, o) {
                        var q = new this.constructor(n);
                        p(this, new t(m, o, q));
                        return q
                    };
                    m.all = function(n) {
                        return new m(function(m, o) {
                            if (!Array.isArray(n)) return o(new TypeError("Promise.all accepts an array"));
                            var p = Array.prototype.slice.call(n);
                            if (p.length === 0) return m([]);
                            var q = p.length;

                            function r(n, s) {
                                try {
                                    if (s && (typeof s === "object" || typeof s === "function")) {
                                        var t = s.then;
                                        if (typeof t === "function") {
                                            t.call(s, function(m) {
                                                r(n, m)
                                            }, o);
                                            return
                                        }
                                    }
                                    p[n] = s;
                                    --q === 0 && m(p)
                                } catch (m) {
                                    o(m)
                                }
                            }
                            for (var s = 0; s < p.length; s++) r(s, p[s])
                        })
                    };
                    m.resolve = function(n) {
                        return n && typeof n === "object" && n.constructor === m ? n : new m(function(m) {
                            m(n)
                        })
                    };
                    m.reject = function(n) {
                        return new m(function(m, o) {
                            o(n)
                        })
                    };
                    m.race = function(n) {
                        return new m(function(o, p) {
                            if (!Array.isArray(n)) return p(new TypeError("Promise.race accepts an array"));
                            for (var q = 0, r = n.length; q < r; q++) m.resolve(n[q]).then(o, p)
                        })
                    };
                    m._immediateFn = typeof setImmediate === "function" && function(m) {
                        setImmediate(m)
                    } || function(m) {
                        setTimeout(m, 0)
                    };
                    m._unhandledRejectionFn = function(m) {
                        typeof console !== "undefined" && console
                    };
                    return m
                }(),
                p, t;
            n.ready = new o(function(m, n) {
                p = m, t = n
            });
            var u = {},
                v;
            for (v in n) Object.prototype.hasOwnProperty.call(n, v) && (u[v] = n[v]);
            var w = [];
            (function(m, n) {
                throw n
            });
            var x = !0,
                y = !1,
                z = "";

            function A(m) {
                return n.locateFile ? n.locateFile(m, z) : z + m
            }
            var B;
            (x || y) && (y ? z = self.location.href : typeof document !== "undefined" && document.currentScript && (z = document.currentScript.src), m && (z = m), z.indexOf("blob:") !== 0 ? z = z.substr(0, z.lastIndexOf("/") + 1) : z = "", (function(m) {
                try {
                    var n = new XMLHttpRequest();
                    n.open("GET", m, !1);
                    n.send(null);
                    return n.responseText
                } catch (o) {
                    n = ha(m);
                    if (n) return fa(n);
                    throw o
                }
            }, y && (B = function(m) {
                try {
                    var n = new XMLHttpRequest();
                    n.open("GET", m, !1);
                    n.responseType = "arraybuffer";
                    n.send(null);
                    return new Uint8Array(n.response)
                } catch (o) {
                    n = ha(m);
                    if (n) return n;
                    throw o
                }
            }), function(m, n, o) {
                var p = new XMLHttpRequest();
                p.open("GET", m, !0);
                p.responseType = "arraybuffer";
                p.onload = function() {
                    if (p.status == 200 || p.status == 0 && p.response) {
                        n(p.response);
                        return
                    }
                    var q = ha(m);
                    if (q) {
                        n(q.buffer);
                        return
                    }
                    o()
                };
                p.onerror = o;
                p.send(null)
            }), function(m) {
                document.title = m
            });
            n.print || emptyFunction.bind(console);
            var C = n.printErr || emptyFunction.bind(console);
            for (v in u) Object.prototype.hasOwnProperty.call(u, v) && (n[v] = u[v]);
            u = null;
            n.arguments && (w = n.arguments);
            n.thisProgram && n.thisProgram;
            n.quit && n.quit;
            var D;
            n.wasmBinary && (D = n.wasmBinary);
            n.noExitRuntime || !0;
            var E = {
                Memory: function(m) {
                    this.buffer = new ArrayBuffer(m.initial * 65536)
                },
                Module: function(m) {},
                Instance: function(m, n) {
                    this.exports = function(m) {
                        function n(m) {
                            m.set = function(m, n) {
                                this[m] = n
                            };
                            m.get = function(m) {
                                return this[m]
                            };
                            return m
                        }
                        var o, p = new Uint8Array(123);
                        for (var q = 25; q >= 0; --q) p[48 + q] = 52 + q, p[65 + q] = q, p[97 + q] = 26 + q;
                        p[43] = 62;
                        p[47] = 63;

                        function r(n, o, q) {
                            var r, s, m = 0,
                                t = o,
                                u = q.length;
                            o = o + (u * 3 >> 2) - (q[u - 2] == "=") - (q[u - 1] == "=");
                            for (; m < u; m += 4) r = p[q.charCodeAt(m + 1)], s = p[q.charCodeAt(m + 2)], n[t++] = p[q.charCodeAt(m)] << 2 | r >> 4, t < o && (n[t++] = r << 4 | s >> 2), t < o && (n[t++] = s << 6 | p[q.charCodeAt(m + 3)])
                        }

                        function s(m) {
                            r(o, 1024, "U3Q5dHlwZV9pbmZvAAAAAOAEAAAABAAATjEwX19jeHhhYml2MTE2X19zaGltX3R5cGVfaW5mb0UAAAAACAUAABgEAAAQBAAATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAAAACAUAAEgEAAA8BAAATjEwX19jeHhhYml2MTE3X19wYmFzZV90eXBlX2luZm9FAAAACAUAAHgEAAA8BAAATjEwX19jeHhhYml2MTE5X19wb2ludGVyX3R5cGVfaW5mb0UACAUAAKgEAACcBAAAAAAAAGwEAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAAAAABQBQAAAQAAAAkAAAADAAAABAAAAAUAAAAKAAAACwAAAAwAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAACAUAACgFAABsBA=="), r(o, 1372, "gAlQ")
                        }

                        function t(m) {
                            var p = m.a,
                                q = p.buffer;
                            p.grow = Ba;
                            var t = new Int8Array(q),
                                u = new Int16Array(q),
                                v = new Int32Array(q),
                                w = new Uint8Array(q),
                                x = new Uint16Array(q),
                                y = new Uint32Array(q);
                            new Float32Array(q);
                            new Float64Array(q);
                            var z = Math.imul;
                            Math.fround;
                            Math.abs;
                            var A = Math.clz32;
                            Math.min;
                            Math.max;
                            Math.floor;
                            Math.ceil;
                            Math.trunc;
                            Math.sqrt;
                            m.abort;
                            NaN;
                            Infinity;
                            var B = m.b,
                                C = 5245312,
                                D;

                            function E(p, q, m, s, n, o) {
                                p = p | 0;
                                q = q | 0;
                                m = m | 0;
                                s = s | 0;
                                n = n | 0;
                                o = o | 0;
                                var A = 0,
                                    B = 0,
                                    D;
                                A = C - 80 | 0;
                                C = A;
                                v[A + 72 >> 2] = p;
                                v[A + 68 >> 2] = q;
                                v[A + 64 >> 2] = m;
                                v[A + 60 >> 2] = s;
                                v[A + 56 >> 2] = n;
                                v[A + 52 >> 2] = o;
                                a: {
                                    if (v[A + 52 >> 2] ? !v[A + 56 >> 2] | (!v[A + 72 >> 2] | !v[A + 68 >> 2] | (!v[A + 64 >> 2] | !v[A + 60 >> 2])) : 1) {
                                        v[A + 76 >> 2] = 5;
                                        break a
                                    }
                                    v[v[A + 64 >> 2] >> 2] = 0;v[v[A + 60 >> 2] >> 2] = 0;q = v[A + 68 >> 2];m = v[A + 56 >> 2];s = v[A + 52 >> 2];p = C + -64 | 0;C = p;v[p + 56 >> 2] = v[A + 72 >> 2];v[p + 52 >> 2] = q;v[p + 48 >> 2] = m;v[p + 44 >> 2] = s;v[p + 40 >> 2] = 0;v[p + 36 >> 2] = v[p + 56 >> 2];b: {
                                        c: {
                                            d: {
                                                while (1) {
                                                    if (!v[p + 52 >> 2]) break c;
                                                    v[p + 32 >> 2] = v[p + 36 >> 2];
                                                    t[p + 31 | 0] = w[v[p + 36 >> 2]];
                                                    v[p + 52 >> 2] = v[p + 52 >> 2] - 1;
                                                    v[p + 36 >> 2] = v[p + 36 >> 2] + 1;
                                                    if (w[p + 31 | 0] != 10 ? w[p + 31 | 0] == 2 | w[p + 31 | 0] == 4 | w[p + 31 | 0] == 9 : 1) {
                                                        v[p + 40 >> 2] = v[p + 40 >> 2] + 1;
                                                        continue
                                                    }
                                                    v[p + 24 >> 2] = 1;
                                                    if (Z(w[p + 31 | 0]) & 1) {
                                                        B = p, D = aa(w[p + 31 | 0]) & 1, t[B + 23 | 0] = D;
                                                        v[p + 16 >> 2] = t[p + 23 | 0] & 1 ? 1 : 2;
                                                        if (y[p + 52 >> 2] < y[p + 16 >> 2]) {
                                                            v[v[p + 48 >> 2] >> 2] = v[p + 32 >> 2];
                                                            v[v[p + 44 >> 2] >> 2] = v[p + 52 >> 2] + v[p + 24 >> 2];
                                                            break b
                                                        }
                                                        v[p + 52 >> 2] = v[p + 52 >> 2] - v[p + 16 >> 2];
                                                        v[p + 24 >> 2] = v[p + 16 >> 2] + v[p + 24 >> 2];
                                                        v[p + 36 >> 2] = v[p + 16 >> 2] + v[p + 36 >> 2];
                                                        if (!(w[p + 31 | 0] != 14 ? w[p + 31 | 0] != 8 : 0)) {
                                                            v[p + 40 >> 2] = v[p + 40 >> 2] + 1;
                                                            continue
                                                        }
                                                    }
                                                    if (y[p + 52 >> 2] < 3) break d;
                                                    v[p + 12 >> 2] = 0;
                                                    q = v[p + 36 >> 2];
                                                    m = w[q | 0] | w[q + 1 | 0] << 8;
                                                    t[p + 12 | 0] = m;
                                                    t[p + 13 | 0] = m >>> 8;
                                                    t[p + 14 | 0] = w[q + 2 | 0];
                                                    v[p + 52 >> 2] = v[p + 52 >> 2] - 3;
                                                    v[p + 24 >> 2] = v[p + 24 >> 2] + 3;
                                                    v[p + 36 >> 2] = v[p + 36 >> 2] + 3;
                                                    if (y[p + 12 >> 2] <= y[p + 52 >> 2]) {
                                                        v[p + 40 >> 2] = v[p + 40 >> 2] + 1;
                                                        v[p + 36 >> 2] = v[p + 12 >> 2] + v[p + 36 >> 2];
                                                        v[p + 52 >> 2] = v[p + 52 >> 2] - v[p + 12 >> 2];
                                                        continue
                                                    }
                                                    break
                                                }
                                                v[v[p + 48 >> 2] >> 2] = v[p + 32 >> 2];v[v[p + 44 >> 2] >> 2] = v[p + 52 >> 2] + v[p + 24 >> 2];
                                                break b
                                            }
                                            v[v[p + 48 >> 2] >> 2] = v[p + 32 >> 2];v[v[p + 44 >> 2] >> 2] = v[p + 52 >> 2] + v[p + 24 >> 2];
                                            break b
                                        }
                                        v[v[p + 44 >> 2] >> 2] = v[p + 52 >> 2]
                                    }
                                    v[p + 60 >> 2] = v[p + 40 >> 2];C = p - -64 | 0;v[A + 48 >> 2] = v[p + 60 >> 2];
                                    if (!v[A + 48 >> 2]) {
                                        v[A + 76 >> 2] = 0;
                                        break a
                                    }
                                    B = A,
                                    D = F(z(v[A + 48 >> 2], 20)),
                                    v[B + 44 >> 2] = D;
                                    if (!v[A + 44 >> 2]) {
                                        v[A + 76 >> 2] = 3;
                                        break a
                                    }
                                    v[A + 40 >> 2] = v[A + 44 >> 2];v[A + 36 >> 2] = v[A + 72 >> 2];v[A + 32 >> 2] = v[A + 68 >> 2] - v[v[A + 52 >> 2] >> 2];v[A + 28 >> 2] = 0;
                                    while (1) {
                                        if (y[A + 28 >> 2] < y[A + 48 >> 2]) {
                                            if (y[A + 32 >> 2] < 1) {
                                                R(v[A + 44 >> 2], v[A + 28 >> 2]);
                                                v[A + 76 >> 2] = 1;
                                                break a
                                            }
                                            t[A + 27 | 0] = w[v[A + 36 >> 2]];
                                            v[A + 36 >> 2] = v[A + 36 >> 2] + 1;
                                            v[A + 32 >> 2] = v[A + 32 >> 2] - 1;
                                            e: {
                                                if (!w[A + 27 | 0] | w[A + 27 | 0] == 1 | (w[A + 27 | 0] == 2 | w[A + 27 | 0] == 3) | (w[A + 27 | 0] == 4 | w[A + 27 | 0] == 9 | w[A + 27 | 0] == 10)) break e;
                                                if (Z(w[A + 27 | 0]) & 1) break e;R(v[A + 44 >> 2], v[A + 28 >> 2]);v[A + 76 >> 2] = 6;
                                                break a
                                            }
                                            p = v[A + 40 >> 2];
                                            v[p >> 2] = w[A + 27 | 0] & 15 | v[p >> 2] & -16;
                                            f: {
                                                if (w[A + 27 | 0] != 10 ? w[A + 27 | 0] == 2 | w[A + 27 | 0] == 4 | w[A + 27 | 0] == 9 : 1) {
                                                    p = v[A + 40 >> 2];
                                                    v[p >> 2] = v[p >> 2] & -268435441;
                                                    v[A + 40 >> 2] = v[A + 40 >> 2] + 20;
                                                    break f
                                                }
                                                if (Z(w[A + 27 | 0]) & 1) {
                                                    p = C - 48 | 0;
                                                    C = p;
                                                    v[p + 40 >> 2] = v[A + 40 >> 2];
                                                    v[p + 36 >> 2] = A + 36;
                                                    v[p + 32 >> 2] = A + 32;
                                                    g: {
                                                        if (!(Z(v[v[p + 40 >> 2] >> 2] & 15) & 1)) {
                                                            v[p + 44 >> 2] = 1;
                                                            break g
                                                        }
                                                        B = p,
                                                        D = aa(v[v[p + 40 >> 2] >> 2] & 15) & 1,
                                                        t[B + 31 | 0] = D;v[p + 24 >> 2] = t[p + 31 | 0] & 1 ? 1 : 2;
                                                        if (y[v[p + 32 >> 2] >> 2] < y[p + 24 >> 2]) {
                                                            v[p + 44 >> 2] = 1;
                                                            break g
                                                        }
                                                        h: {
                                                            if (t[p + 31 | 0] & 1) {
                                                                t[v[p + 40 >> 2] + 4 | 0] = w[v[v[p + 36 >> 2] >> 2]];
                                                                break h
                                                            }
                                                            u[v[p + 40 >> 2] + 4 >> 1] = x[v[v[p + 36 >> 2] >> 2] >> 1]
                                                        }
                                                        q = v[p + 36 >> 2];v[q >> 2] = v[p + 24 >> 2] + v[q >> 2];q = v[p + 32 >> 2];v[q >> 2] = v[q >> 2] - v[p + 24 >> 2];
                                                        if ((v[v[p + 40 >> 2] >> 2] & 15) == 8) {
                                                            q = v[p + 40 >> 2];
                                                            v[q >> 2] = v[q >> 2] & -268435441;
                                                            v[p + 44 >> 2] = 0;
                                                            break g
                                                        }
                                                        if ((v[v[p + 40 >> 2] >> 2] & 15) == 14) {
                                                            q = v[p + 40 >> 2];
                                                            v[q >> 2] = v[q >> 2] & -268435441;
                                                            v[p + 44 >> 2] = 0;
                                                            break g
                                                        }
                                                        if (y[v[p + 32 >> 2] >> 2] < 3) {
                                                            v[p + 44 >> 2] = 11;
                                                            break g
                                                        }
                                                        v[p + 20 >> 2] = 0;q = v[v[p + 36 >> 2] >> 2];m = w[q | 0] | w[q + 1 | 0] << 8;t[p + 20 | 0] = m;t[p + 21 | 0] = m >>> 8;t[p + 22 | 0] = w[q + 2 | 0];q = v[p + 36 >> 2];v[q >> 2] = v[q >> 2] + 3;q = v[p + 32 >> 2];v[q >> 2] = v[q >> 2] - 3;q = v[p + 40 >> 2];v[q >> 2] = v[q >> 2] & -268435441 | (v[p + 20 >> 2] & 16777215) << 4;
                                                        if (y[v[p + 32 >> 2] >> 2] < y[p + 20 >> 2]) {
                                                            v[p + 44 >> 2] = 11;
                                                            break g
                                                        }
                                                        if ((v[v[p + 40 >> 2] >> 2] & 15) == 15) {
                                                            v[v[p + 40 >> 2] + 12 >> 2] = v[p + 20 >> 2];
                                                            q = F(v[p + 20 >> 2]);
                                                            v[v[p + 40 >> 2] + 8 >> 2] = q;
                                                            if (!v[v[p + 40 >> 2] + 8 >> 2]) {
                                                                v[p + 44 >> 2] = 3;
                                                                break g
                                                            }
                                                            da(v[v[p + 40 >> 2] + 8 >> 2], v[v[p + 36 >> 2] >> 2], v[p + 20 >> 2]);
                                                            q = v[p + 36 >> 2];
                                                            v[q >> 2] = v[p + 20 >> 2] + v[q >> 2];
                                                            q = v[p + 32 >> 2];
                                                            v[q >> 2] = v[q >> 2] - v[p + 20 >> 2];
                                                            v[p + 44 >> 2] = 0;
                                                            break g
                                                        }
                                                        if ((v[v[p + 40 >> 2] >> 2] & 15) == 5) {
                                                            v[v[p + 40 >> 2] + 12 >> 2] = v[p + 20 >> 2];
                                                            q = F(v[p + 20 >> 2]);
                                                            v[v[p + 40 >> 2] + 8 >> 2] = q;
                                                            if (!v[v[p + 40 >> 2] + 8 >> 2]) {
                                                                v[p + 44 >> 2] = 3;
                                                                break g
                                                            }
                                                            da(v[v[p + 40 >> 2] + 8 >> 2], v[v[p + 36 >> 2] >> 2], v[p + 20 >> 2]);
                                                            q = v[p + 36 >> 2];
                                                            v[q >> 2] = v[p + 20 >> 2] + v[q >> 2];
                                                            q = v[p + 32 >> 2];
                                                            v[q >> 2] = v[q >> 2] - v[p + 20 >> 2];
                                                            v[p + 44 >> 2] = 0;
                                                            break g
                                                        }
                                                        i: {
                                                            if (!((v[v[p + 40 >> 2] >> 2] & 15) != 6 ? (v[v[p + 40 >> 2] >> 2] & 15) != 7 : 0)) {
                                                                B = p, D = T(v[p + 36 >> 2], v[p + 32 >> 2], p + 19 | 0, p + 18 | 0), v[B + 12 >> 2] = D;
                                                                if (v[p + 12 >> 2]) {
                                                                    v[p + 44 >> 2] = v[p + 12 >> 2];
                                                                    break g
                                                                }
                                                                break i
                                                            }
                                                            if (!((v[v[p + 40 >> 2] >> 2] & 15) != 13 ? (v[v[p + 40 >> 2] >> 2] & 15) != 12 : 0)) {
                                                                m = v[p + 32 >> 2];
                                                                q = C - 32 | 0;
                                                                v[q + 24 >> 2] = v[p + 36 >> 2];
                                                                v[q + 20 >> 2] = m;
                                                                v[q + 16 >> 2] = p + 19;
                                                                v[q + 12 >> 2] = p + 16;
                                                                u[q + 10 >> 1] = 0;
                                                                j: {
                                                                    if (y[v[q + 20 >> 2] >> 2] < 2) {
                                                                        v[q + 28 >> 2] = 1;
                                                                        break j
                                                                    }
                                                                    m = v[v[q + 24 >> 2] >> 2];m = w[m | 0] | w[m + 1 | 0] << 8;t[q + 10 | 0] = m;t[q + 11 | 0] = m >>> 8;m = v[q + 24 >> 2];v[m >> 2] = v[m >> 2] + 2;m = v[q + 20 >> 2];v[m >> 2] = v[m >> 2] - 2;t[v[q + 16 >> 2]] = (x[q + 10 >> 1] & 32768) == 32768;u[v[q + 12 >> 2] >> 1] = x[q + 10 >> 1] & 32767;v[q + 28 >> 2] = 0
                                                                }
                                                                v[p + 12 >> 2] = v[q + 28 >> 2];
                                                                if (v[p + 12 >> 2]) {
                                                                    v[p + 44 >> 2] = v[p + 12 >> 2];
                                                                    break g
                                                                }
                                                            }
                                                        }
                                                        if ((v[v[p + 40 >> 2] >> 2] & 15) == 12) {
                                                            q = v[p + 40 >> 2];
                                                            u[q + 8 >> 1] = u[q + 8 >> 1] & 1 | x[p + 16 >> 1] << 1;
                                                            v[p + 44 >> 2] = 0;
                                                            break g
                                                        }
                                                        if ((v[v[p + 40 >> 2] >> 2] & 15) == 7) {
                                                            q = v[p + 40 >> 2];
                                                            t[q + 8 | 0] = t[q + 8 | 0] & 1 | w[p + 18 | 0] << 1;
                                                            v[p + 44 >> 2] = 0;
                                                            break g
                                                        }
                                                        if ((v[v[p + 40 >> 2] >> 2] & 15) == 13) {
                                                            m = v[p + 32 >> 2];
                                                            s = v[p + 20 >> 2];
                                                            n = v[p + 40 >> 2] + 12 | 0;
                                                            o = v[p + 40 >> 2];
                                                            q = C - 32 | 0;
                                                            C = q;
                                                            v[q + 24 >> 2] = v[p + 36 >> 2];
                                                            v[q + 20 >> 2] = m;
                                                            v[q + 16 >> 2] = s;
                                                            v[q + 12 >> 2] = n;
                                                            v[q + 8 >> 2] = o + 16;
                                                            k: {
                                                                if (y[q + 16 >> 2] < 2) {
                                                                    v[q + 28 >> 2] = 9;
                                                                    break k
                                                                }
                                                                v[v[q + 8 >> 2] >> 2] = v[q + 16 >> 2] - 2;
                                                                if (y[v[q + 20 >> 2] >> 2] < y[v[q + 8 >> 2] >> 2]) {
                                                                    v[q + 28 >> 2] = 1;
                                                                    break k
                                                                }
                                                                m = F(v[v[q + 8 >> 2] >> 2]);v[v[q + 12 >> 2] >> 2] = m;
                                                                if (!v[v[q + 12 >> 2] >> 2]) {
                                                                    v[q + 28 >> 2] = 3;
                                                                    break k
                                                                }
                                                                da(v[v[q + 12 >> 2] >> 2], v[v[q + 24 >> 2] >> 2], v[v[q + 8 >> 2] >> 2]);m = v[q + 24 >> 2];v[m >> 2] = v[v[q + 8 >> 2] >> 2] + v[m >> 2];m = v[q + 20 >> 2];v[m >> 2] = v[m >> 2] - v[v[q + 8 >> 2] >> 2];v[q + 28 >> 2] = 0
                                                            }
                                                            C = q + 32 | 0;
                                                            v[p + 8 >> 2] = v[q + 28 >> 2];
                                                            if (v[p + 8 >> 2]) {
                                                                v[p + 44 >> 2] = v[p + 8 >> 2];
                                                                break g
                                                            }
                                                            q = v[p + 40 >> 2];
                                                            u[q + 8 >> 1] = t[p + 19 | 0] & 1 | x[q + 8 >> 1] & 65534;
                                                            q = v[p + 40 >> 2];
                                                            u[q + 8 >> 1] = u[q + 8 >> 1] & 1 | x[p + 16 >> 1] << 1;
                                                            v[p + 44 >> 2] = 0;
                                                            break g
                                                        }
                                                        if ((v[v[p + 40 >> 2] >> 2] & 15) == 6) {
                                                            B = p, D = P(v[p + 36 >> 2], v[p + 32 >> 2], v[p + 20 >> 2], v[p + 40 >> 2] + 12 | 0, v[p + 40 >> 2] + 16 | 0), v[B + 4 >> 2] = D;
                                                            if (v[p + 4 >> 2]) {
                                                                v[p + 44 >> 2] = v[p + 4 >> 2];
                                                                break g
                                                            }
                                                            q = v[p + 40 >> 2];
                                                            t[q + 8 | 0] = t[p + 19 | 0] & 1 | w[q + 8 | 0] & 254;
                                                            q = v[p + 40 >> 2];
                                                            t[q + 8 | 0] = t[q + 8 | 0] & 1 | w[p + 18 | 0] << 1;
                                                            v[p + 44 >> 2] = 0;
                                                            break g
                                                        }
                                                        v[p + 44 >> 2] = 1
                                                    }
                                                    C = p + 48 | 0;
                                                    v[A + 20 >> 2] = v[p + 44 >> 2];
                                                    if (!v[A + 20 >> 2]) {
                                                        v[A + 40 >> 2] = v[A + 40 >> 2] + 20;
                                                        break f
                                                    }
                                                    R(v[A + 44 >> 2], v[A + 28 >> 2]);
                                                    v[A + 76 >> 2] = v[A + 20 >> 2];
                                                    break a
                                                }
                                                v[A + 16 >> 2] = 0;
                                                if (y[A + 32 >> 2] < 3) {
                                                    R(v[A + 44 >> 2], v[A + 28 >> 2]);
                                                    v[A + 76 >> 2] = 1;
                                                    break a
                                                }
                                                p = v[A + 36 >> 2];q = w[p | 0] | w[p + 1 | 0] << 8;t[A + 16 | 0] = q;t[A + 17 | 0] = q >>> 8;t[A + 18 | 0] = w[p + 2 | 0];v[A + 36 >> 2] = v[A + 36 >> 2] + 3;v[A + 32 >> 2] = v[A + 32 >> 2] - 3;
                                                if (!(v[A + 16 >> 2] == 1 | w[A + 27 | 0] != 1)) {
                                                    R(v[A + 44 >> 2], v[A + 28 >> 2]);
                                                    v[A + 76 >> 2] = 7;
                                                    break a
                                                }
                                                p = v[A + 40 >> 2];v[p >> 2] = v[p >> 2] & -268435441 | (v[A + 16 >> 2] & 16777215) << 4;
                                                if (w[A + 27 | 0] == 3) {
                                                    if (v[A + 16 >> 2] != 1) {
                                                        R(v[A + 44 >> 2], v[A + 28 >> 2]);
                                                        v[A + 76 >> 2] = 10;
                                                        break a
                                                    }
                                                    t[A + 15 | 0] = 0;
                                                    if (y[A + 32 >> 2] < 1) {
                                                        M(v[A + 44 >> 2]);
                                                        v[A + 76 >> 2] = 1;
                                                        break a
                                                    }
                                                    t[A + 15 | 0] = w[v[A + 36 >> 2]];
                                                    v[A + 36 >> 2] = v[A + 36 >> 2] + 1;
                                                    v[A + 32 >> 2] = v[A + 32 >> 2] - 1;
                                                    l: {
                                                        if (w[A + 15 | 0] <= 4) {
                                                            t[v[A + 40 >> 2] + 4 | 0] = w[A + 15 | 0];
                                                            break l
                                                        }
                                                        t[v[A + 40 >> 2] + 4 | 0] = 4
                                                    }
                                                    v[A + 40 >> 2] = v[A + 40 >> 2] + 20;
                                                    break f
                                                }
                                                B = A,
                                                D = T(A + 36 | 0, A + 32 | 0, A + 14 | 0, A + 13 | 0),
                                                v[B + 8 >> 2] = D;
                                                if (v[A + 8 >> 2]) {
                                                    R(v[A + 44 >> 2], v[A + 28 >> 2]);
                                                    v[A + 76 >> 2] = v[A + 8 >> 2];
                                                    break a
                                                }
                                                if (w[A + 27 | 0] == 1) {
                                                    p = v[A + 40 >> 2];
                                                    t[p + 4 | 0] = t[p + 4 | 0] & 1 | w[A + 13 | 0] << 1;
                                                    v[A + 40 >> 2] = v[A + 40 >> 2] + 20;
                                                    break f
                                                }
                                                if (!w[A + 27 | 0]) {
                                                    B = A, D = P(A + 36 | 0, A + 32 | 0, v[A + 16 >> 2], v[A + 40 >> 2] + 8 | 0, v[A + 40 >> 2] + 12 | 0), v[B + 4 >> 2] = D;
                                                    if (v[A + 4 >> 2]) {
                                                        R(v[A + 44 >> 2], v[A + 28 >> 2]);
                                                        v[A + 76 >> 2] = v[A + 4 >> 2];
                                                        break a
                                                    }
                                                    p = v[A + 40 >> 2];
                                                    t[p + 4 | 0] = t[A + 14 | 0] & 1 | w[p + 4 | 0] & 254;
                                                    p = v[A + 40 >> 2];
                                                    t[p + 4 | 0] = t[p + 4 | 0] & 1 | w[A + 13 | 0] << 1;
                                                    v[A + 40 >> 2] = v[A + 40 >> 2] + 20
                                                }
                                            }
                                            v[A + 28 >> 2] = v[A + 28 >> 2] + 1;
                                            continue
                                        }
                                        break
                                    }
                                    if (v[A + 32 >> 2]) {
                                        R(v[A + 44 >> 2], v[A + 48 >> 2]);
                                        v[A + 76 >> 2] = 1;
                                        break a
                                    }
                                    v[v[A + 64 >> 2] >> 2] = v[A + 44 >> 2];v[v[A + 60 >> 2] >> 2] = v[A + 48 >> 2];v[A + 76 >> 2] = 0
                                }
                                C = A + 80 | 0;
                                return v[A + 76 >> 2]
                            }

                            function F(p) {
                                var r = 0,
                                    m = 0,
                                    s = 0,
                                    n = 0,
                                    o = 0,
                                    t = 0,
                                    u = 0,
                                    w, x = 0,
                                    y, q;
                                x = 8;
                                a: {
                                    b: {
                                        if (p >>> 0 > 4294967239) break b;
                                        while (1) {
                                            x = x >>> 0 > 8 ? x : 8;
                                            m = v[603];
                                            o = m;
                                            n = v[602];
                                            u = n;
                                            p = p >>> 0 > 8 ? p + 3 & -4 : 8;
                                            c: {
                                                if (p >>> 0 <= 127) {
                                                    t = (p >>> 3 | 0) - 1 | 0;
                                                    break c
                                                }
                                                s = A(p);t = ((p >>> 29 - s ^ 4) - (s << 2) | 0) + 110 | 0;
                                                if (p >>> 0 <= 4095) break c;s = ((p >>> 30 - s ^ 2) - (s << 1) | 0) + 71 | 0;t = s >>> 0 < 63 ? s : 63
                                            }
                                            r = t;
                                            s = r & 31;
                                            (r & 63) >>> 0 >= 32 ? (r = 0, m = m >>> s | 0) : (r = m >>> s | 0, m = ((1 << s) - 1 & m) << 32 - s | u >>> s);
                                            s = r;
                                            if (m | r) {
                                                while (1) {
                                                    o = m;
                                                    r = s;
                                                    d: {
                                                        if (r | m) {
                                                            n = r - 1 | 0;
                                                            w = n + 1 | 0;
                                                            u = n;
                                                            n = m - 1 | 0;
                                                            u = (n | 0) != -1 ? w : u;
                                                            n = A(m ^ n) + 32 | 0;
                                                            m = A(r ^ u);
                                                            m = (m | 0) == 32 ? n : m;
                                                            r = 63 - m | 0;
                                                            0 - (m >>> 0 > 63) | 0;
                                                            break d
                                                        }
                                                        r = 64
                                                    }
                                                    n = r;
                                                    r = n;
                                                    m = r & 31;
                                                    (r & 63) >>> 0 >= 32 ? (r = 0, u = s >>> m | 0) : (r = s >>> m | 0, u = ((1 << m) - 1 & s) << 32 - m | o >>> m);
                                                    s = r;
                                                    t = n + t | 0;
                                                    o = t << 4;
                                                    r = v[o + 1384 >> 2];
                                                    n = o + 1376 | 0;
                                                    e: {
                                                        if ((r | 0) != (n | 0)) {
                                                            m = K(r, x, p);
                                                            if (m) break b;
                                                            m = v[r + 4 >> 2];
                                                            v[m + 8 >> 2] = v[r + 8 >> 2];
                                                            v[v[r + 8 >> 2] + 4 >> 2] = m;
                                                            v[r + 8 >> 2] = n;
                                                            m = o + 1380 | 0;
                                                            v[r + 4 >> 2] = v[m >> 2];
                                                            v[m >> 2] = r;
                                                            v[v[r + 4 >> 2] + 8 >> 2] = r;
                                                            t = t + 1 | 0;
                                                            m = (s & 1) << 31 | u >>> 1;
                                                            s = s >>> 1 | 0;
                                                            break e
                                                        }
                                                        y = v[603];r = t;w = r & 63;m = w;o = m & 31;m >>> 0 >= 32 ? (m = 0, n = -1 >>> o | 0) : (m = -1 >>> o | 0, n = (1 << o) - 1 << 32 - o | -1 >>> o);n = n & -2;o = w & 31;w >>> 0 >= 32 ? (m = n << o, w = 0) : (m = (1 << o) - 1 & n >>> 32 - o | m << o, w = n << o);o = m;n = 0 - r & 63;m = n;r = m & 31;m >>> 0 >= 32 ? (m = -1 << r, r = 0) : (m = (1 << r) - 1 & -1 >>> 32 - r | -1 << r, r = -1 << r);q = r & -2;r = n & 31;n >>> 0 >= 32 ? (n = 0, r = m >>> r | 0) : (n = m >>> r | 0, r = ((1 << r) - 1 & m) << 32 - r | q >>> r);m = r | w;D = o | n;v[602] = v[602] & m;v[603] = D & y;m = u ^ 1
                                                    }
                                                    if (m | s) continue;
                                                    break
                                                }
                                                n = v[602];
                                                o = v[603]
                                            }
                                            f: {
                                                if (o | n) {
                                                    s = A(o);
                                                    s = 63 - ((s | 0) == 32 ? A(n) + 32 | 0 : s) << 4;
                                                    r = s + 1376 | 0;
                                                    s = v[s + 1384 >> 2];
                                                    g: {
                                                        if (!o & n >>> 0 < 1073741824) break g;t = 98;
                                                        if ((r | 0) == (s | 0)) break g;
                                                        while (1) {
                                                            m = K(s, x, p);
                                                            if (m) break b;
                                                            s = v[s + 8 >> 2];
                                                            if (!t) break g;
                                                            t = t - 1 | 0;
                                                            if ((r | 0) != (s | 0)) continue;
                                                            break
                                                        }
                                                    }
                                                    if (H(p + 48 | 0)) break f;
                                                    if (!s | (r | 0) == (s | 0)) break a;
                                                    while (1) {
                                                        m = K(s, x, p);
                                                        if (m) break b;
                                                        s = v[s + 8 >> 2];
                                                        if ((r | 0) != (s | 0)) continue;
                                                        break
                                                    }
                                                    break a
                                                }
                                                if (!H(p + 48 | 0)) break a
                                            }
                                            m = 0;
                                            if (p >>> 0 > 4294967239) break b;
                                            s = x;
                                            r = 0;
                                            while (1) {
                                                t = r;
                                                if (s) {
                                                    s = s - 1 & s;
                                                    r = r + 1 | 0;
                                                    continue
                                                }
                                                break
                                            }
                                            if (t >>> 0 <= 1) continue;
                                            break
                                        }
                                    }
                                    return m
                                }
                                return 0
                            }

                            function G(p, q, m, r, n, o, s) {
                                p = p | 0;
                                q = q | 0;
                                m = m | 0;
                                r = r | 0;
                                n = n | 0;
                                o = o | 0;
                                s = s | 0;
                                var z = 0,
                                    A = 0;
                                z = C - 32 | 0;
                                C = z;
                                t[z + 27 | 0] = p;
                                v[z + 20 >> 2] = q;
                                v[z + 16 >> 2] = m;
                                t[z + 15 | 0] = r;
                                t[z + 14 | 0] = n;
                                v[z + 8 >> 2] = o;
                                v[z + 4 >> 2] = s;
                                a: {
                                    if (!(!(t[z + 15 | 0] & 1) | w[z + 14 | 0] <= 127)) {
                                        v[z + 28 >> 2] = 4;
                                        break a
                                    }
                                    q = v[z + 20 >> 2];m = v[z + 16 >> 2];r = v[z + 8 >> 2];n = v[z + 4 >> 2];o = t[z + 15 | 0] & 1;p = C + -64 | 0;C = p;v[p + 56 >> 2] = z + 27;v[p + 52 >> 2] = q;v[p + 48 >> 2] = m;v[p + 44 >> 2] = r;v[p + 40 >> 2] = n;t[p + 39 | 0] = 1;t[p + 38 | 0] = 6;v[p + 32 >> 2] = z + 14;t[p + 31 | 0] = o;t[p + 30 | 0] = 1;b: {
                                        c: {
                                            if (!(!v[p + 52 >> 2] | (!v[p + 44 >> 2] | !v[p + 40 >> 2])) && y[p + 48 >> 2] <= 16777215) break c;v[p + 60 >> 2] = 5;
                                            break b
                                        }
                                        v[p + 24 >> 2] = v[p + 48 >> 2] + (w[p + 39 | 0] + (w[p + 30 | 0] + 4 | 0) | 0);A = p,
                                        s = F(v[p + 24 >> 2]),
                                        v[A + 20 >> 2] = s;
                                        if (!v[p + 20 >> 2]) {
                                            v[p + 60 >> 2] = 3;
                                            break b
                                        }
                                        v[p + 16 >> 2] = v[p + 20 >> 2];t[v[p + 16 >> 2]] = w[p + 38 | 0];v[p + 16 >> 2] = v[p + 16 >> 2] + 1;da(v[p + 16 >> 2], v[p + 56 >> 2], w[p + 30 | 0]);v[p + 16 >> 2] = w[p + 30 | 0] + v[p + 16 >> 2];v[p + 12 >> 2] = w[p + 39 | 0] + v[p + 48 >> 2];
                                        if (y[p + 12 >> 2] < y[p + 48 >> 2]) {
                                            M(v[p + 20 >> 2]);
                                            v[p + 60 >> 2] = 9;
                                            break b
                                        }
                                        q = v[p + 16 >> 2];m = w[p + 12 | 0] | w[p + 13 | 0] << 8;t[q | 0] = m;t[q + 1 | 0] = m >>> 8;t[q + 2 | 0] = w[p + 14 | 0];v[p + 16 >> 2] = v[p + 16 >> 2] + 3;
                                        if (t[p + 31 | 0] & 1) d: {
                                            if (w[p + 38 | 0] == 6) {
                                                q = v[p + 32 >> 2];
                                                t[q | 0] = w[q | 0] | 128;
                                                break d
                                            }
                                            e: {
                                                if (w[p + 38 | 0] == 13) {
                                                    q = v[p + 32 >> 2];
                                                    u[q >> 1] = x[q >> 1] | 32768;
                                                    break e
                                                }
                                                M(v[p + 20 >> 2]);v[p + 60 >> 2] = 1;
                                                break b
                                            }
                                        }
                                        da(v[p + 16 >> 2], v[p + 32 >> 2], w[p + 39 | 0]);v[p + 16 >> 2] = w[p + 39 | 0] + v[p + 16 >> 2];da(v[p + 16 >> 2], v[p + 52 >> 2], v[p + 48 >> 2]);v[v[p + 44 >> 2] >> 2] = v[p + 20 >> 2];v[v[p + 40 >> 2] >> 2] = v[p + 24 >> 2];v[p + 60 >> 2] = 0
                                    }
                                    C = p - -64 | 0;v[z + 28 >> 2] = v[p + 60 >> 2]
                                }
                                C = z + 32 | 0;
                                return v[z + 28 >> 2]
                            }

                            function H(p) {
                                var q = 0,
                                    m, r = 0,
                                    n = 0,
                                    o, s = 0;
                                r = v[343];
                                m = p + 3 & -4;
                                q = r + m | 0;
                                a: {
                                    b: {
                                        if (q >>> 0 <= r >>> 0 ? m : 0) break b;
                                        if (q >>> 0 > Aa() << 16 >>> 0 && !(B(q | 0) | 0)) break b;v[343] = q;
                                        break a
                                    }
                                    v[604] = 48;r = -1
                                }
                                if ((r | 0) != -1) {
                                    m = p + r | 0;
                                    q = m - 16 | 0;
                                    v[q + 12 >> 2] = 16;
                                    v[q >> 2] = 16;
                                    p = v[600];
                                    p ? s = v[p + 8 >> 2] : s = 0;
                                    c: {
                                        d: {
                                            if ((s | 0) == (r | 0)) {
                                                n = r - (v[r - 4 >> 2] & -2) | 0;
                                                o = v[n - 4 >> 2];
                                                v[p + 8 >> 2] = m;
                                                p = n - (o & -2) | 0;
                                                m = -16;
                                                if (!(t[(p + v[p >> 2] | 0) - 4 | 0] & 1)) break d;
                                                m = v[p + 4 >> 2];
                                                v[m + 8 >> 2] = v[p + 8 >> 2];
                                                v[v[p + 8 >> 2] + 4 >> 2] = m;
                                                q = q - p | 0;
                                                v[p >> 2] = q;
                                                break c
                                            }
                                            v[r + 12 >> 2] = 16;v[r >> 2] = 16;v[r + 8 >> 2] = m;v[r + 4 >> 2] = p;v[600] = r;m = 16
                                        }
                                        p = r + m | 0;q = q - p | 0;v[p >> 2] = q
                                    }
                                    v[((q & -4) + p | 0) - 4 >> 2] = q | 1;
                                    s = p;
                                    n = v[p >> 2] - 8 | 0;
                                    e: {
                                        if (n >>> 0 <= 127) {
                                            q = (n >>> 3 | 0) - 1 | 0;
                                            break e
                                        }
                                        o = A(n);q = ((n >>> 29 - o ^ 4) - (o << 2) | 0) + 110 | 0;
                                        if (n >>> 0 <= 4095) break e;q = ((n >>> 30 - o ^ 2) - (o << 1) | 0) + 71 | 0;q = q >>> 0 < 63 ? q : 63
                                    }
                                    m = q << 4;
                                    v[s + 4 >> 2] = m + 1376;
                                    m = m + 1384 | 0;
                                    v[p + 8 >> 2] = v[m >> 2];
                                    v[m >> 2] = p;
                                    v[v[p + 8 >> 2] + 4 >> 2] = p;
                                    m = v[603];
                                    p = q & 31;
                                    (q & 63) >>> 0 >= 32 ? (q = 1 << p, p = 0) : (q = (1 << p) - 1 & 1 >>> 32 - p, p = 1 << p);
                                    v[602] = p | v[602];
                                    v[603] = q | m
                                }
                                return (r | 0) != -1
                            }

                            function I(p, q, m, r) {
                                p = p | 0;
                                q = q | 0;
                                m = m | 0;
                                r = r | 0;
                                var n = 0,
                                    o = 0;
                                n = C - 16 | 0;
                                C = n;
                                t[n + 11 | 0] = p;
                                t[n + 10 | 0] = q;
                                v[n + 4 >> 2] = m;
                                v[n >> 2] = r;
                                a: {
                                    if (w[n + 10 | 0] > 127) {
                                        v[n + 12 >> 2] = 4;
                                        break a
                                    }
                                    q = v[n + 4 >> 2];m = v[n >> 2];p = C - 48 | 0;C = p;v[p + 40 >> 2] = n + 11;v[p + 36 >> 2] = q;v[p + 32 >> 2] = m;t[p + 31 | 0] = 1;t[p + 30 | 0] = 7;v[p + 24 >> 2] = n + 10;t[p + 23 | 0] = 1;b: {
                                        if (!(v[p + 32 >> 2] ? v[p + 36 >> 2] : 0)) {
                                            v[p + 44 >> 2] = 5;
                                            break b
                                        }
                                        v[p + 16 >> 2] = w[p + 31 | 0] + (w[p + 23 | 0] + 4 | 0);o = p,
                                        r = F(v[p + 16 >> 2]),
                                        v[o + 12 >> 2] = r;
                                        if (!v[p + 12 >> 2]) {
                                            v[p + 44 >> 2] = 3;
                                            break b
                                        }
                                        v[p + 8 >> 2] = v[p + 12 >> 2];t[v[p + 8 >> 2]] = w[p + 30 | 0];v[p + 8 >> 2] = v[p + 8 >> 2] + 1;da(v[p + 8 >> 2], v[p + 40 >> 2], w[p + 23 | 0]);v[p + 8 >> 2] = w[p + 23 | 0] + v[p + 8 >> 2];v[p + 4 >> 2] = w[p + 31 | 0];q = v[p + 8 >> 2];m = w[p + 4 | 0] | w[p + 5 | 0] << 8;t[q | 0] = m;t[q + 1 | 0] = m >>> 8;t[q + 2 | 0] = w[p + 6 | 0];v[p + 8 >> 2] = v[p + 8 >> 2] + 3;da(v[p + 8 >> 2], v[p + 24 >> 2], w[p + 31 | 0]);v[v[p + 32 >> 2] >> 2] = v[p + 16 >> 2];v[v[p + 36 >> 2] >> 2] = v[p + 12 >> 2];v[p + 44 >> 2] = 0
                                    }
                                    C = p + 48 | 0;v[n + 12 >> 2] = v[p + 44 >> 2]
                                }
                                C = n + 16 | 0;
                                return v[n + 12 >> 2]
                            }

                            function J(p, q, m) {
                                p = p | 0;
                                q = q | 0;
                                m = m | 0;
                                var r = 0,
                                    n = 0,
                                    o = 0,
                                    s = 0,
                                    t = 0;
                                o = C + -64 | 0;
                                C = o;
                                n = 1;
                                a: {
                                    if (U(p, q, 0)) break a;n = 0;
                                    if (!q) break a;r = C + -64 | 0;C = r;n = v[q >> 2];s = v[n - 4 >> 2];t = v[n - 8 >> 2];v[r + 20 >> 2] = 0;v[r + 16 >> 2] = 1084;v[r + 12 >> 2] = q;v[r + 8 >> 2] = 1132;n = 0;ea(r + 24 | 0, 39);q = q + t | 0;b: {
                                        if (U(s, 1132, 0)) {
                                            v[r + 56 >> 2] = 1;
                                            la[v[v[s >> 2] + 20 >> 2]](s, r + 8 | 0, q, q, 1, 0);
                                            n = v[r + 32 >> 2] == 1 ? q : 0;
                                            break b
                                        }
                                        la[v[v[s >> 2] + 24 >> 2]](s, r + 8 | 0, q, 1, 0);c: switch (v[r + 44 >> 2]) {
                                            case 0:
                                                n = v[r + 48 >> 2] == 1 ? v[r + 36 >> 2] == 1 ? v[r + 40 >> 2] == 1 ? v[r + 28 >> 2] : 0 : 0 : 0;
                                                break b;
                                            case 1:
                                                break c;
                                            default:
                                                break b
                                        }
                                        if (v[r + 48 >> 2] | v[r + 36 >> 2] != 1 | v[r + 40 >> 2] != 1 ? v[r + 32 >> 2] != 1 : 0) break b;n = v[r + 24 >> 2]
                                    }
                                    C = r - -64 | 0;q = n;n = 0;
                                    if (!q) break a;ea(o + 8 | 4, 52);v[o + 56 >> 2] = 1;v[o + 20 >> 2] = -1;v[o + 16 >> 2] = p;v[o + 8 >> 2] = q;la[v[v[q >> 2] + 28 >> 2]](q, o + 8 | 0, v[m >> 2], 1);p = v[o + 32 >> 2];
                                    (p | 0) == 1 && (v[m >> 2] = v[o + 24 >> 2]);n = (p | 0) == 1
                                }
                                p = n;
                                C = o - -64 | 0;
                                return p | 0
                            }

                            function K(p, q, m) {
                                var r = 0,
                                    n, o = 0,
                                    s = 0;
                                r = p + 4 | 0;
                                n = (r + q | 0) - 1 & 0 - q;
                                q = v[p >> 2];
                                if (n + m >>> 0 <= (q + p | 0) - 4 >>> 0) {
                                    o = v[p + 4 >> 2];
                                    v[o + 8 >> 2] = v[p + 8 >> 2];
                                    v[v[p + 8 >> 2] + 4 >> 2] = o;
                                    (r | 0) != (n | 0) && (n = n - r | 0, o = p - (v[p - 4 >> 2] & -2) | 0, r = n + v[o >> 2] | 0, v[o >> 2] = r, v[(o + (r & -4) | 0) - 4 >> 2] = r, p = p + n | 0, q = q - n | 0, v[p >> 2] = q);
                                    a: {
                                        if (m + 24 >>> 0 <= q >>> 0) {
                                            r = (p + m | 0) + 8 | 0;
                                            q = (q - m | 0) - 8 | 0;
                                            v[r >> 2] = q;
                                            v[(r + (q & -4) | 0) - 4 >> 2] = q | 1;
                                            s = r;
                                            o = v[r >> 2] - 8 | 0;
                                            b: {
                                                if (o >>> 0 <= 127) {
                                                    n = (o >>> 3 | 0) - 1 | 0;
                                                    break b
                                                }
                                                q = A(o);n = ((o >>> 29 - q ^ 4) - (q << 2) | 0) + 110 | 0;
                                                if (o >>> 0 <= 4095) break b;q = ((o >>> 30 - q ^ 2) - (q << 1) | 0) + 71 | 0;n = q >>> 0 < 63 ? q : 63
                                            }
                                            q = n;
                                            n = q << 4;
                                            v[s + 4 >> 2] = n + 1376;
                                            n = n + 1384 | 0;
                                            v[r + 8 >> 2] = v[n >> 2];
                                            v[n >> 2] = r;
                                            v[v[r + 8 >> 2] + 4 >> 2] = r;
                                            n = v[603];
                                            r = q & 31;
                                            (q & 63) >>> 0 >= 32 ? (q = 1 << r, s = 0) : (q = (1 << r) - 1 & 1 >>> 32 - r, s = 1 << r);
                                            v[602] = s | v[602];
                                            v[603] = q | n;
                                            q = m + 8 | 0;
                                            v[p >> 2] = q;
                                            v[((q & -4) + p | 0) - 4 >> 2] = q;
                                            break a
                                        }
                                        v[(p + q | 0) - 4 >> 2] = q
                                    }
                                    p = p + 4 | 0
                                } else p = 0;
                                return p
                            }

                            function L(p, q, m, r, n, o, s) {
                                var u = 0,
                                    x = 0;
                                u = C - 48 | 0;
                                C = u;
                                v[u + 40 >> 2] = p;
                                v[u + 36 >> 2] = q;
                                v[u + 32 >> 2] = m;
                                v[u + 28 >> 2] = r;
                                v[u + 24 >> 2] = n;
                                t[u + 23 | 0] = o;
                                t[u + 22 | 0] = s;
                                a: {
                                    if (!(v[u + 24 >> 2] ? v[u + 28 >> 2] : 0)) {
                                        v[u + 44 >> 2] = 5;
                                        break a
                                    }
                                    v[v[u + 28 >> 2] >> 2] = 0;v[v[u + 24 >> 2] >> 2] = 0;
                                    if (!(y[u + 32 >> 2] <= 16777215 ? v[u + 36 >> 2] : 0)) {
                                        v[u + 44 >> 2] = 5;
                                        break a
                                    }
                                    v[u + 16 >> 2] = v[u + 32 >> 2] + (w[u + 23 | 0] + 4 | 0);x = u,
                                    m = F(v[u + 16 >> 2]),
                                    v[x + 12 >> 2] = m;
                                    if (!v[u + 12 >> 2]) {
                                        v[u + 44 >> 2] = 3;
                                        break a
                                    }
                                    v[u + 8 >> 2] = v[u + 12 >> 2];t[v[u + 8 >> 2]] = w[u + 22 | 0];v[u + 8 >> 2] = v[u + 8 >> 2] + 1;da(v[u + 8 >> 2], v[u + 40 >> 2], w[u + 23 | 0]);v[u + 8 >> 2] = w[u + 23 | 0] + v[u + 8 >> 2];p = v[u + 8 >> 2];q = w[u + 32 | 0] | w[u + 33 | 0] << 8;t[p | 0] = q;t[p + 1 | 0] = q >>> 8;t[p + 2 | 0] = w[u + 34 | 0];v[u + 8 >> 2] = v[u + 8 >> 2] + 3;da(v[u + 8 >> 2], v[u + 36 >> 2], v[u + 32 >> 2]);v[u + 8 >> 2] = v[u + 32 >> 2] + v[u + 8 >> 2];v[v[u + 28 >> 2] >> 2] = v[u + 12 >> 2];v[v[u + 24 >> 2] >> 2] = v[u + 16 >> 2];v[u + 44 >> 2] = 0
                                }
                                C = u + 48 | 0;
                                return v[u + 44 >> 2]
                            }

                            function M(p) {
                                var q = 0,
                                    m, r = 0,
                                    n, o = 0;
                                if (p) {
                                    m = p - 4 | 0;
                                    n = v[m >> 2];
                                    r = n;
                                    q = m;
                                    o = v[p - 8 >> 2];
                                    p = o & -2;
                                    (p | 0) != (o | 0) && (q = m - p | 0, r = v[q + 4 >> 2], v[r + 8 >> 2] = v[q + 8 >> 2], v[v[q + 8 >> 2] + 4 >> 2] = r, r = p + n | 0);
                                    p = m + n | 0;
                                    m = v[p >> 2];
                                    (m | 0) != v[(p + m | 0) - 4 >> 2] && (n = v[p + 4 >> 2], v[n + 8 >> 2] = v[p + 8 >> 2], v[v[p + 8 >> 2] + 4 >> 2] = n, r = r + m | 0);
                                    v[q >> 2] = r;
                                    v[((r & -4) + q | 0) - 4 >> 2] = r | 1;
                                    o = q;
                                    r = v[q >> 2] - 8 | 0;
                                    a: {
                                        if (r >>> 0 <= 127) {
                                            p = (r >>> 3 | 0) - 1 | 0;
                                            break a
                                        }
                                        n = A(r);p = ((r >>> 29 - n ^ 4) - (n << 2) | 0) + 110 | 0;
                                        if (r >>> 0 <= 4095) break a;p = ((r >>> 30 - n ^ 2) - (n << 1) | 0) + 71 | 0;p = p >>> 0 < 63 ? p : 63
                                    }
                                    m = p << 4;
                                    v[o + 4 >> 2] = m + 1376;
                                    m = m + 1384 | 0;
                                    v[q + 8 >> 2] = v[m >> 2];
                                    v[m >> 2] = q;
                                    v[v[q + 8 >> 2] + 4 >> 2] = q;
                                    m = v[603];
                                    q = p & 31;
                                    (p & 63) >>> 0 >= 32 ? (p = 1 << q, q = 0) : (p = (1 << q) - 1 & 1 >>> 32 - q, q = 1 << q);
                                    v[602] = q | v[602];
                                    v[603] = p | m
                                }
                            }

                            function N(o, p, m) {
                                o = o | 0;
                                p = p | 0;
                                m = m | 0;
                                var q = 0,
                                    n = 0;
                                q = C - 48 | 0;
                                C = q;
                                v[q + 40 >> 2] = o;
                                v[q + 36 >> 2] = p;
                                v[q + 32 >> 2] = m;
                                a: {
                                    if (!(v[q + 32 >> 2] ? v[q + 36 >> 2] : 0)) {
                                        v[q + 44 >> 2] = 5;
                                        break a
                                    }
                                    if (y[q + 40 >> 2] > 4) {
                                        v[q + 44 >> 2] = 8;
                                        break a
                                    }
                                    v[q + 28 >> 2] = 5;n = q,
                                    m = F(v[q + 28 >> 2]),
                                    v[n + 24 >> 2] = m;
                                    if (!v[q + 24 >> 2]) {
                                        v[q + 44 >> 2] = 3;
                                        break a
                                    }
                                    v[q + 20 >> 2] = v[q + 24 >> 2];t[q + 19 | 0] = 3;t[v[q + 20 >> 2]] = w[q + 19 | 0];v[q + 20 >> 2] = v[q + 20 >> 2] + 1;v[q + 12 >> 2] = 1;o = v[q + 20 >> 2];p = w[q + 12 | 0] | w[q + 13 | 0] << 8;t[o | 0] = p;t[o + 1 | 0] = p >>> 8;t[o + 2 | 0] = w[q + 14 | 0];v[q + 20 >> 2] = v[q + 20 >> 2] + 3;t[q + 11 | 0] = v[q + 40 >> 2];t[v[q + 20 >> 2]] = w[q + 11 | 0];v[v[q + 36 >> 2] >> 2] = v[q + 24 >> 2];v[v[q + 32 >> 2] >> 2] = v[q + 28 >> 2];v[q + 44 >> 2] = 0
                                }
                                C = q + 48 | 0;
                                return v[q + 44 >> 2]
                            }

                            function O(o, p, m, q, n) {
                                o = o | 0;
                                p = p | 0;
                                m = m | 0;
                                q = q | 0;
                                n = n | 0;
                                if (U(o, v[p + 8 >> 2], n)) {
                                    fa(p, m, q);
                                    return
                                }
                                a: {
                                    if (U(o, v[p >> 2], n)) {
                                        if (!(v[p + 20 >> 2] != (m | 0) ? v[p + 16 >> 2] != (m | 0) : 0)) {
                                            if ((q | 0) != 1) break a;
                                            v[p + 32 >> 2] = 1;
                                            return
                                        }
                                        v[p + 32 >> 2] = q;
                                        b: {
                                            if (v[p + 44 >> 2] == 4) break b;u[p + 52 >> 1] = 0;o = v[o + 8 >> 2];la[v[v[o >> 2] + 20 >> 2]](o, p, m, m, 1, n);
                                            if (w[p + 53 | 0]) {
                                                v[p + 44 >> 2] = 3;
                                                if (!w[p + 52 | 0]) break b;
                                                break a
                                            }
                                            v[p + 44 >> 2] = 4
                                        }
                                        v[p + 20 >> 2] = m;
                                        v[p + 40 >> 2] = v[p + 40 >> 2] + 1;
                                        if (v[p + 36 >> 2] != 1 | v[p + 24 >> 2] != 2) break a;
                                        t[p + 54 | 0] = 1;
                                        return
                                    }
                                    o = v[o + 8 >> 2];la[v[v[o >> 2] + 24 >> 2]](o, p, m, q, n)
                                }
                            }

                            function P(p, q, m, r, n) {
                                var o = 0;
                                o = C - 32 | 0;
                                C = o;
                                v[o + 24 >> 2] = p;
                                v[o + 20 >> 2] = q;
                                v[o + 16 >> 2] = m;
                                v[o + 12 >> 2] = r;
                                v[o + 8 >> 2] = n;
                                a: {
                                    if (y[o + 16 >> 2] < 1) {
                                        v[o + 28 >> 2] = 9;
                                        break a
                                    }
                                    v[v[o + 8 >> 2] >> 2] = v[o + 16 >> 2] - 1;
                                    if (y[v[o + 20 >> 2] >> 2] < y[v[o + 8 >> 2] >> 2]) {
                                        v[o + 28 >> 2] = 1;
                                        break a
                                    }
                                    p = F(v[v[o + 8 >> 2] >> 2]);v[v[o + 12 >> 2] >> 2] = p;
                                    if (!v[v[o + 12 >> 2] >> 2]) {
                                        v[o + 28 >> 2] = 3;
                                        break a
                                    }
                                    da(v[v[o + 12 >> 2] >> 2], v[v[o + 24 >> 2] >> 2], v[v[o + 8 >> 2] >> 2]);p = v[o + 24 >> 2];v[p >> 2] = v[v[o + 8 >> 2] >> 2] + v[p >> 2];p = v[o + 20 >> 2];v[p >> 2] = v[p >> 2] - v[v[o + 8 >> 2] >> 2];v[o + 28 >> 2] = 0
                                }
                                C = o + 32 | 0;
                                return v[o + 28 >> 2]
                            }

                            function Q(o, p, m) {
                                o = o | 0;
                                p = p | 0;
                                m = m | 0;
                                var q = 0,
                                    n = 0;
                                q = C - 32 | 0;
                                C = q;
                                u[q + 26 >> 1] = o;
                                v[q + 20 >> 2] = p;
                                v[q + 16 >> 2] = m;
                                v[v[q + 16 >> 2] >> 2] = 3;
                                n = q, m = F(v[v[q + 16 >> 2] >> 2]), v[n + 12 >> 2] = m;
                                a: {
                                    if (!v[q + 12 >> 2]) {
                                        v[q + 28 >> 2] = 3;
                                        break a
                                    }
                                    v[v[q + 20 >> 2] >> 2] = v[q + 12 >> 2];t[q + 11 | 0] = 14;t[v[q + 12 >> 2]] = w[q + 11 | 0];v[q + 12 >> 2] = v[q + 12 >> 2] + 1;o = v[q + 12 >> 2];p = w[q + 26 | 0] | w[q + 27 | 0] << 8;t[o | 0] = p;t[o + 1 | 0] = p >>> 8;v[q + 28 >> 2] = 0
                                }
                                C = q + 32 | 0;
                                return v[q + 28 >> 2]
                            }

                            function R(n, o) {
                                var m = 0;
                                m = C - 16 | 0;
                                C = m;
                                v[m + 12 >> 2] = n;
                                v[m + 8 >> 2] = o;
                                v[m + 4 >> 2] = 0;
                                while (1) {
                                    if (y[m + 4 >> 2] < y[m + 8 >> 2]) {
                                        v[m >> 2] = v[m + 12 >> 2] + z(v[m + 4 >> 2], 20);
                                        a: {
                                            if (!(v[v[m >> 2] >> 2] & 15)) {
                                                M(v[v[m >> 2] + 8 >> 2]);
                                                break a
                                            }
                                            b: {
                                                if ((v[v[m >> 2] >> 2] & 15) == 5) {
                                                    M(v[v[m >> 2] + 8 >> 2]);
                                                    break b
                                                }(v[v[m >> 2] >> 2] & 15) == 6 && M(v[v[m >> 2] + 12 >> 2])
                                            }
                                        }
                                        v[m + 4 >> 2] = v[m + 4 >> 2] + 1;
                                        continue
                                    }
                                    break
                                }
                                M(v[m + 12 >> 2]);
                                C = m + 16 | 0
                            }

                            function ma(o, p, m) {
                                o = o | 0;
                                p = p | 0;
                                m = m | 0;
                                var q = 0,
                                    n = 0;
                                q = C - 32 | 0;
                                C = q;
                                t[q + 27 | 0] = o;
                                v[q + 20 >> 2] = p;
                                v[q + 16 >> 2] = m;
                                v[v[q + 16 >> 2] >> 2] = 2;
                                n = q, o = F(v[v[q + 16 >> 2] >> 2]), v[n + 12 >> 2] = o;
                                a: {
                                    if (!v[q + 12 >> 2]) {
                                        v[q + 28 >> 2] = 3;
                                        break a
                                    }
                                    v[v[q + 20 >> 2] >> 2] = v[q + 12 >> 2];t[q + 11 | 0] = 8;t[v[q + 12 >> 2]] = w[q + 11 | 0];v[q + 12 >> 2] = v[q + 12 >> 2] + 1;t[v[q + 12 >> 2]] = w[q + 27 | 0];v[q + 28 >> 2] = 0
                                }
                                C = q + 32 | 0;
                                return v[q + 28 >> 2]
                            }

                            function S(n, o, m, p) {
                                t[n + 53 | 0] = 1;
                                a: {
                                    if (v[n + 4 >> 2] != (m | 0)) break a;t[n + 52 | 0] = 1;m = v[n + 16 >> 2];
                                    if (!m) {
                                        v[n + 36 >> 2] = 1;
                                        v[n + 24 >> 2] = p;
                                        v[n + 16 >> 2] = o;
                                        if ((p | 0) != 1 | v[n + 48 >> 2] != 1) break a;
                                        t[n + 54 | 0] = 1;
                                        return
                                    }
                                    if ((o | 0) == (m | 0)) {
                                        m = v[n + 24 >> 2];
                                        (m | 0) == 2 && (v[n + 24 >> 2] = p, m = p);
                                        if (v[n + 48 >> 2] != 1 | (m | 0) != 1) break a;
                                        t[n + 54 | 0] = 1;
                                        return
                                    }
                                    t[n + 54 | 0] = 1;v[n + 36 >> 2] = v[n + 36 >> 2] + 1
                                }
                            }

                            function T(o, p, m, q) {
                                var n;
                                n = C - 32 | 0;
                                v[n + 24 >> 2] = o;
                                v[n + 20 >> 2] = p;
                                v[n + 16 >> 2] = m;
                                v[n + 12 >> 2] = q;
                                t[n + 11 | 0] = 0;
                                a: {
                                    if (y[v[n + 20 >> 2] >> 2] < 1) {
                                        v[n + 28 >> 2] = 1;
                                        break a
                                    }
                                    t[n + 11 | 0] = w[v[v[n + 24 >> 2] >> 2]];o = v[n + 24 >> 2];v[o >> 2] = v[o >> 2] + 1;o = v[n + 20 >> 2];v[o >> 2] = v[o >> 2] - 1;t[v[n + 16 >> 2]] = (w[n + 11 | 0] & 128) == 128;t[v[n + 12 >> 2]] = w[n + 11 | 0] & 127;v[n + 28 >> 2] = 0
                                }
                                return v[n + 28 >> 2]
                            }

                            function na(o, p, m, q, n) {
                                o = o | 0;
                                p = p | 0;
                                m = m | 0;
                                q = q | 0;
                                n = n | 0;
                                if (U(o, v[p + 8 >> 2], n)) {
                                    fa(p, m, q);
                                    return
                                }
                                a: {
                                    if (!U(o, v[p >> 2], n)) break a;
                                    if (!(v[p + 20 >> 2] != (m | 0) ? v[p + 16 >> 2] != (m | 0) : 0)) {
                                        if ((q | 0) != 1) break a;
                                        v[p + 32 >> 2] = 1;
                                        return
                                    }
                                    v[p + 20 >> 2] = m;v[p + 32 >> 2] = q;v[p + 40 >> 2] = v[p + 40 >> 2] + 1;v[p + 36 >> 2] != 1 | v[p + 24 >> 2] != 2 || (t[p + 54 | 0] = 1);v[p + 44 >> 2] = 4
                                }
                            }

                            function U(n, o, m) {
                                var p;
                                if (!m) return v[n + 4 >> 2] == v[o + 4 >> 2];
                                if ((n | 0) == (o | 0)) return 1;
                                m = v[n + 4 >> 2];
                                n = w[m | 0];
                                o = v[o + 4 >> 2];
                                p = w[o | 0];
                                a: {
                                    if (!n | (p | 0) != (n | 0)) break a;
                                    while (1) {
                                        p = w[o + 1 | 0];
                                        n = w[m + 1 | 0];
                                        if (!n) break a;
                                        o = o + 1 | 0;
                                        m = m + 1 | 0;
                                        if ((n | 0) == (p | 0)) continue;
                                        break
                                    }
                                }
                                return (n | 0) == (p | 0)
                            }

                            function V(n, o) {
                                n = n | 0;
                                o = o | 0;
                                var m = 0,
                                    p = 0;
                                m = C - 32 | 0;
                                C = m;
                                v[m + 24 >> 2] = n;
                                v[m + 20 >> 2] = o;
                                p = m, n = F(1), v[p + 16 >> 2] = n;
                                a: {
                                    if (!v[m + 16 >> 2]) {
                                        v[m + 28 >> 2] = 3;
                                        break a
                                    }
                                    t[m + 15 | 0] = 10;t[v[m + 16 >> 2]] = w[m + 15 | 0];v[v[m + 24 >> 2] >> 2] = v[m + 16 >> 2];v[v[m + 20 >> 2] >> 2] = 1;v[m + 28 >> 2] = 0
                                }
                                C = m + 32 | 0;
                                return v[m + 28 >> 2]
                            }

                            function W(n, o) {
                                n = n | 0;
                                o = o | 0;
                                var m = 0,
                                    p = 0;
                                m = C - 32 | 0;
                                C = m;
                                v[m + 24 >> 2] = n;
                                v[m + 20 >> 2] = o;
                                p = m, n = F(1), v[p + 16 >> 2] = n;
                                a: {
                                    if (!v[m + 16 >> 2]) {
                                        v[m + 28 >> 2] = 3;
                                        break a
                                    }
                                    t[m + 15 | 0] = 9;t[v[m + 16 >> 2]] = w[m + 15 | 0];v[v[m + 24 >> 2] >> 2] = v[m + 16 >> 2];v[v[m + 20 >> 2] >> 2] = 1;v[m + 28 >> 2] = 0
                                }
                                C = m + 32 | 0;
                                return v[m + 28 >> 2]
                            }

                            function X(n, o) {
                                n = n | 0;
                                o = o | 0;
                                var m = 0,
                                    p = 0;
                                m = C - 32 | 0;
                                C = m;
                                v[m + 24 >> 2] = n;
                                v[m + 20 >> 2] = o;
                                p = m, n = F(1), v[p + 16 >> 2] = n;
                                a: {
                                    if (!v[m + 16 >> 2]) {
                                        v[m + 28 >> 2] = 3;
                                        break a
                                    }
                                    t[m + 15 | 0] = 2;t[v[m + 16 >> 2]] = w[m + 15 | 0];v[v[m + 24 >> 2] >> 2] = v[m + 16 >> 2];v[v[m + 20 >> 2] >> 2] = 1;v[m + 28 >> 2] = 0
                                }
                                C = m + 32 | 0;
                                return v[m + 28 >> 2]
                            }

                            function oa(n, o) {
                                n = n | 0;
                                o = o | 0;
                                var m = 0,
                                    p = 0;
                                m = C - 32 | 0;
                                C = m;
                                v[m + 24 >> 2] = n;
                                v[m + 20 >> 2] = o;
                                p = m, n = F(1), v[p + 16 >> 2] = n;
                                a: {
                                    if (!v[m + 16 >> 2]) {
                                        v[m + 28 >> 2] = 3;
                                        break a
                                    }
                                    t[m + 15 | 0] = 4;t[v[m + 16 >> 2]] = w[m + 15 | 0];v[v[m + 24 >> 2] >> 2] = v[m + 16 >> 2];v[v[m + 20 >> 2] >> 2] = 1;v[m + 28 >> 2] = 0
                                }
                                C = m + 32 | 0;
                                return v[m + 28 >> 2]
                            }

                            function pa(p, q, m, r, n) {
                                p = p | 0;
                                q = q | 0;
                                m = m | 0;
                                r = r | 0;
                                n = n | 0;
                                var o = 0;
                                o = C - 32 | 0;
                                C = o;
                                u[o + 30 >> 1] = p;
                                v[o + 24 >> 2] = q;
                                v[o + 20 >> 2] = m;
                                v[o + 16 >> 2] = r;
                                v[o + 12 >> 2] = n;
                                p = L(o + 30 | 0, v[o + 24 >> 2], v[o + 20 >> 2], v[o + 16 >> 2], v[o + 12 >> 2], 2, 15);
                                C = o + 32 | 0;
                                return p | 0
                            }

                            function Y(p, q, m, r, n) {
                                p = p | 0;
                                q = q | 0;
                                m = m | 0;
                                r = r | 0;
                                n = n | 0;
                                var o = 0;
                                o = C - 32 | 0;
                                C = o;
                                t[o + 31 | 0] = p;
                                v[o + 24 >> 2] = q;
                                v[o + 20 >> 2] = m;
                                v[o + 16 >> 2] = r;
                                v[o + 12 >> 2] = n;
                                p = L(o + 31 | 0, v[o + 24 >> 2], v[o + 20 >> 2], v[o + 16 >> 2], v[o + 12 >> 2], 1, 5);
                                C = o + 32 | 0;
                                return p | 0
                            }

                            function Z(m) {
                                var n = 0;
                                n = C - 16 | 0;
                                C = n;
                                v[n + 12 >> 2] = m;
                                m = 1;
                                a: {
                                    if (aa(v[n + 12 >> 2]) & 1) break a;m = 1;
                                    if (v[n + 12 >> 2] == 15) break a;m = 1;
                                    if (v[n + 12 >> 2] == 13) break a;m = 1;
                                    if (v[n + 12 >> 2] == 12) break a;m = v[n + 12 >> 2] == 14
                                }
                                C = n + 16 | 0;
                                return m
                            }

                            function $(n, o, m) {
                                var p;
                                p = v[n + 16 >> 2];
                                if (!p) {
                                    v[n + 36 >> 2] = 1;
                                    v[n + 24 >> 2] = m;
                                    v[n + 16 >> 2] = o;
                                    return
                                }
                                a: {
                                    if ((o | 0) == (p | 0)) {
                                        if (v[n + 24 >> 2] != 2) break a;
                                        v[n + 24 >> 2] = m;
                                        return
                                    }
                                    t[n + 54 | 0] = 1;v[n + 24 >> 2] = 2;v[n + 36 >> 2] = v[n + 36 >> 2] + 1
                                }
                            }

                            function aa(m) {
                                var n;
                                n = C - 16 | 0;
                                v[n + 12 >> 2] = m;
                                m = 1;
                                a: {
                                    if (v[n + 12 >> 2] == 5) break a;m = 1;
                                    if (v[n + 12 >> 2] == 6) break a;m = 1;
                                    if (v[n + 12 >> 2] == 7) break a;m = v[n + 12 >> 2] == 8
                                }
                                return m
                            }

                            function ba(p, q, m, r, n, o) {
                                p = p | 0;
                                q = q | 0;
                                m = m | 0;
                                r = r | 0;
                                n = n | 0;
                                o = o | 0;
                                if (U(p, v[q + 8 >> 2], o)) {
                                    S(q, m, r, n);
                                    return
                                }
                                p = v[p + 8 >> 2];
                                la[v[v[p >> 2] + 20 >> 2]](p, q, m, r, n, o)
                            }

                            function qa() {
                                var n = 0,
                                    o, m;
                                while (1) {
                                    o = n << 4;
                                    m = o + 1376 | 0;
                                    v[o + 1380 >> 2] = m;
                                    v[o + 1384 >> 2] = m;
                                    n = n + 1 | 0;
                                    if ((n | 0) != 64) continue;
                                    break
                                }
                                H(48)
                            }

                            function ra(n, o, m, p) {
                                n = n | 0;
                                o = o | 0;
                                m = m | 0;
                                p = p | 0;
                                if (U(n, v[o + 8 >> 2], 0)) {
                                    $(o, m, p);
                                    return
                                }
                                n = v[n + 8 >> 2];
                                la[v[v[n >> 2] + 28 >> 2]](n, o, m, p)
                            }

                            function ca(p, q, m, r, n, o) {
                                p = p | 0, q = q | 0, m = m | 0, r = r | 0, n = n | 0, o = o | 0, U(p, v[q + 8 >> 2], o) && S(q, m, r, n)
                            }

                            function da(n, o, m) {
                                if (m)
                                    while (1) {
                                        t[n | 0] = w[o | 0];
                                        n = n + 1 | 0;
                                        o = o + 1 | 0;
                                        m = m - 1 | 0;
                                        if (m) continue;
                                        break
                                    }
                            }

                            function ea(m, n) {
                                if (n)
                                    while (1) {
                                        t[m | 0] = 0;
                                        m = m + 1 | 0;
                                        n = n - 1 | 0;
                                        if (n) continue;
                                        break
                                    }
                            }

                            function sa(n, o, m, p) {
                                n = n | 0, o = o | 0, m = m | 0, p = p | 0, U(n, v[o + 8 >> 2], 0) && $(o, m, p)
                            }

                            function fa(n, o, m) {
                                v[n + 28 >> 2] == 1 | v[n + 4 >> 2] != (o | 0) || (v[n + 28 >> 2] = m)
                            }

                            function ta(m, n) {
                                m = m | 0;
                                n = n | 0;
                                return z(n, 20) + m | 0
                            }

                            function ga(m) {
                                m = m | 0;
                                return w[m + 8 | 0] >>> 1 | 0
                            }

                            function ha(m) {
                                m = m | 0;
                                return v[m + 12 >> 2]
                            }

                            function ia(m) {
                                m = m | 0;
                                return v[m >> 2] & 15
                            }

                            function ja(m) {
                                m = m | 0;
                                return v[m + 16 >> 2]
                            }

                            function ka(m) {
                                m = m | 0;
                                return t[m + 8 | 0] & 1
                            }

                            function ua(m) {
                                m = m | 0;
                                return v[m + 8 >> 2]
                            }

                            function va(m) {
                                m = m | 0;
                                return w[m + 4 | 0]
                            }

                            function wa(m) {
                                m = m | 0;
                                return m | 0
                            }

                            function xa(m) {
                                return F(m)
                            }

                            function ya(m) {
                                m = m | 0, M(m)
                            }

                            function za(m) {
                                m | 0
                            }
                            o = w;
                            s(m);
                            var la = n([null, wa, ya, za, za, J, ca, na, sa, ya, ba, O, ra]);

                            function Aa() {
                                return q.byteLength / 65536 | 0
                            }

                            function Ba(m) {
                                m = m | 0;
                                var n = Aa() | 0;
                                m = n + m | 0;
                                if (n < m && m < 65536) {
                                    m = new ArrayBuffer(z(m, 65536));
                                    var r = new Int8Array(m);
                                    r.set(t);
                                    t = new Int8Array(m);
                                    u = new Int16Array(m);
                                    v = new Int32Array(m);
                                    w = new Uint8Array(m);
                                    x = new Uint16Array(m);
                                    y = new Uint32Array(m);
                                    new Float32Array(m);
                                    new Float64Array(m);
                                    q = m;
                                    p.buffer = q;
                                    o = w
                                }
                                return n
                            }
                            return {
                                c: qa,
                                d: xa,
                                e: ya,
                                f: X,
                                g: oa,
                                h: N,
                                i: pa,
                                j: Y,
                                k: Q,
                                l: ma,
                                m: G,
                                n: I,
                                o: W,
                                p: V,
                                q: E,
                                r: ia,
                                s: va,
                                t: ta,
                                u: va,
                                v: ua,
                                w: ha,
                                x: ha,
                                y: ja,
                                z: ga,
                                A: ka,
                                B: ga,
                                C: la
                            }
                        }
                        return t(m)
                    }(ia)
                },
                instantiate: function(m, n) {
                    return {
                        then: function(o) {
                            var n = new E.Module(m);
                            o({
                                instance: new E.Instance(n)
                            })
                        }
                    }
                },
                RuntimeError: Error
            };
            D = [];
            typeof E !== "object" && Y("no native wasm support detected");
            var F, G = !1;

            function H(m, n) {
                m || Y("Assertion failed: " + n)
            }

            function I(m, n) {
                m % n > 0 && (m += n - m % n);
                return m
            }
            var J, K;

            function L(m) {
                J = m, n.HEAP8 = new Int8Array(m), n.HEAP16 = new Int16Array(m), n.HEAP32 = new Int32Array(m), n.HEAPU8 = K = new Uint8Array(m), n.HEAPU16 = new Uint16Array(m), n.HEAPU32 = new Uint32Array(m), n.HEAPF32 = new Float32Array(m), n.HEAPF64 = new Float64Array(m)
            }
            v = n.INITIAL_MEMORY || 8388608;
            n.wasmMemory ? F = n.wasmMemory : F = new E.Memory({
                initial: v / 65536,
                maximum: 2147483648 / 65536
            });
            F && (J = F.buffer);
            J.byteLength;
            L(J);
            var M, N = [],
                O = [],
                P = [];

            function Q() {
                if (n.preRun) {
                    typeof n.preRun == "function" && (n.preRun = [n.preRun]);
                    while (n.preRun.length) S(n.preRun.shift())
                }
                ca(N)
            }

            function R() {
                ca(O)
            }

            function ma() {
                if (n.postRun) {
                    typeof n.postRun == "function" && (n.postRun = [n.postRun]);
                    while (n.postRun.length) na(n.postRun.shift())
                }
                ca(P)
            }

            function S(m) {
                N.unshift(m)
            }

            function T(m) {
                O.unshift(m)
            }

            function na(m) {
                P.unshift(m)
            }(!Math.imul || Math.imul(4294967295, 5) !== -5) && (Math.imul = function(m, n) {
                var o = m >>> 16;
                m = m & 65535;
                var p = n >>> 16;
                n = n & 65535;
                return m * n + (o * n + m * p << 16) | 0
            });
            if (!Math.fround) {
                var U = new Float32Array(1);
                Math.fround = function(m) {
                    U[0] = m;
                    return U[0]
                }
            }
            Math.clz32 || (Math.clz32 = function(m) {
                var n = 32,
                    o = m >> 16;
                o && (n -= 16, m = o);
                o = m >> 8;
                o && (n -= 8, m = o);
                o = m >> 4;
                o && (n -= 4, m = o);
                o = m >> 2;
                o && (n -= 2, m = o);
                o = m >> 1;
                return o ? n - 2 : n - m
            });
            Math.trunc || (Math.trunc = function(m) {
                return m < 0 ? Math.ceil(m) : Math.floor(m)
            });
            var V = 0,
                W = null,
                X = null;

            function oa(m) {
                V++, n.monitorRunDependencies && n.monitorRunDependencies(V)
            }

            function pa(m) {
                V--;
                n.monitorRunDependencies && n.monitorRunDependencies(V);
                if (V == 0) {
                    W !== null && (clearInterval(W), W = null);
                    if (X) {
                        m = X;
                        X = null;
                        m()
                    }
                }
            }
            n.preloadedImages = {};
            n.preloadedAudios = {};

            function Y(m) {
                n.onAbort && n.onAbort(m);
                m += "";
                C(m);
                G = !0;
                m = "abort(" + m + "). Build with -s ASSERTIONS=1 for more info.";
                m = new E.RuntimeError(m);
                t(m);
                throw m
            }
            var Z = "data:application/octet-stream;base64,";

            function $(m) {
                return m.startsWith(Z)
            }
            var aa = "dgwcppbridge.wasm";
            $(aa) || (aa = A(aa));

            function ba(m) {
                try {
                    if (m == aa && D) return new Uint8Array(D);
                    var n = ha(m);
                    if (n) return n;
                    if (B) return B(m);
                    else throw "both async and sync fetching of the wasm failed"
                } catch (m) {
                    Y(m)
                }
            }

            function qa() {
                return !D && (x || y) && typeof fetch === "function" ? fetch(aa, {
                    credentials: "same-origin"
                }).then(function(m) {
                    if (!m.ok) throw "failed to load wasm binary file at '" + aa + "'";
                    return m.arrayBuffer()
                })["catch"](function() {
                    return ba(aa)
                }) : o.resolve().then(function() {
                    return ba(aa)
                })
            }

            function ra() {
                var o = {
                    a: ia
                };

                function p(o, m) {
                    m = o.exports;
                    n.asm = m;
                    M = n.asm.C;
                    T(n.asm.c);
                    pa("wasm-instantiate")
                }
                oa("wasm-instantiate");

                function s(m) {
                    p(m.instance)
                }

                function u(m) {
                    return qa().then(function(m) {
                        m = E.instantiate(m, o);
                        return m
                    }).then(m, function(m) {
                        C("failed to asynchronously prepare wasm: " + m), Y(m)
                    })
                }

                function v() {
                    if (!D && typeof E.instantiateStreaming === "function" && !$(aa) && typeof fetch === "function") return fetch(aa, {
                        credentials: "same-origin"
                    }).then(function(m) {
                        m = E.instantiateStreaming(m, o);
                        return m.then(s, function(m) {
                            C("wasm streaming compile failed: " + m);
                            C("falling back to ArrayBuffer instantiation");
                            return u(s)
                        })
                    });
                    else return u(s)
                }
                if (n.instantiateWasm) try {
                    var m = n.instantiateWasm(o, p);
                    return m
                } catch (m) {
                    C("Module.instantiateWasm callback failed with error: " + m);
                    return !1
                }
                v()["catch"](t);
                return {}
            }

            function ca(m) {
                while (m.length > 0) {
                    var o = m.shift();
                    if (typeof o == "function") {
                        o(n);
                        continue
                    }
                    var p = o.func;
                    typeof p === "number" ? o.arg === void 0 ? M.get(p)() : M.get(p)(o.arg) : p(o.arg === void 0 ? null : o.arg)
                }
            }

            function da(m) {
                try {
                    F.grow(m - J.byteLength + 65535 >>> 16);
                    L(F.buffer);
                    return 1
                } catch (m) {}
            }

            function ea(m) {
                var n = K.length;
                m = m >>> 0;
                var o = 2147483648;
                if (m > o) return !1;
                for (var p = 1; p <= 4; p *= 2) {
                    var q = n * (1 + .2 / p);
                    q = Math.min(q, m + 100663296);
                    q = Math.min(o, I(Math.max(m, q), 65536));
                    q = da(q);
                    if (q) return !0
                }
                return !1
            }
            var sa = !1;

            function fa(m) {
                var n = [];
                for (var o = 0; o < m.length; o++) {
                    var p = m[o];
                    p > 255 && (sa && H(!1, "Character code " + p + " (" + String.fromCharCode(p) + ")  at offset " + o + " not in 0x00-0xFF."), p &= 255);
                    n.push(String.fromCharCode(p))
                }
                return n.join("")
            }
            var ta = typeof atob === "function" ? atob : function(m) {
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    o = "",
                    p, q, r, s, t, u = 0;
                m = m.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do q = n.indexOf(m.charAt(u++)), r = n.indexOf(m.charAt(u++)), s = n.indexOf(m.charAt(u++)), t = n.indexOf(m.charAt(u++)), q = q << 2 | r >> 4, r = (r & 15) << 4 | s >> 2, p = (s & 3) << 6 | t, o = o + String.fromCharCode(q), s !== 64 && (o = o + String.fromCharCode(r)), t !== 64 && (o = o + String.fromCharCode(p)); while (u < m.length);
                return o
            };

            function ga(m) {
                try {
                    m = ta(m);
                    var n = new Uint8Array(m.length);
                    for (var o = 0; o < m.length; ++o) n[o] = m.charCodeAt(o);
                    return n
                } catch (m) {
                    throw new Error("Converting base64 string to bytes failed.")
                }
            }

            function ha(m) {
                if (!$(m)) return;
                return ga(m.slice(Z.length))
            }
            var ia = {
                b: ea,
                a: F
            };
            ra();
            n.___wasm_call_ctors = function() {
                return (n.___wasm_call_ctors = n.asm.c).apply(null, arguments)
            };
            n.__malloc = function() {
                return (n.__malloc = n.asm.d).apply(null, arguments)
            };
            n.__free = function() {
                return (n.__free = n.asm.e).apply(null, arguments)
            };
            n.__DgwCodecEncodeEmpty = function() {
                return (n.__DgwCodecEncodeEmpty = n.asm.f).apply(null, arguments)
            };
            n.__DgwCodecEncodeDeauth = function() {
                return (n.__DgwCodecEncodeDeauth = n.asm.g).apply(null, arguments)
            };
            n.__DgwCodecEncodeDrain = function() {
                return (n.__DgwCodecEncodeDrain = n.asm.h).apply(null, arguments)
            };
            n.__DgwCodecEncodeStreamGroup_EstabStream = function() {
                return (n.__DgwCodecEncodeStreamGroup_EstabStream = n.asm.i).apply(null, arguments)
            };
            n.__DgwCodecEncodeStreamGroup_DeprecatedEstabStream = function() {
                return (n.__DgwCodecEncodeStreamGroup_DeprecatedEstabStream = n.asm.j).apply(null, arguments)
            };
            n.__DgwCodecEncodeStreamGroup_EndOfData = function() {
                return (n.__DgwCodecEncodeStreamGroup_EndOfData = n.asm.k).apply(null, arguments)
            };
            n.__DgwCodecEncodeStreamGroup_DeprecatedEndOfData = function() {
                return (n.__DgwCodecEncodeStreamGroup_DeprecatedEndOfData = n.asm.l).apply(null, arguments)
            };
            n.__DgwCodecEncodeStreamGroup_DeprecatedData = function() {
                return (n.__DgwCodecEncodeStreamGroup_DeprecatedData = n.asm.m).apply(null, arguments)
            };
            n.__DgwCodecEncodeStreamGroup_SmallAck = function() {
                return (n.__DgwCodecEncodeStreamGroup_SmallAck = n.asm.n).apply(null, arguments)
            };
            n.__DgwCodecEncodePing = function() {
                return (n.__DgwCodecEncodePing = n.asm.o).apply(null, arguments)
            };
            n.__DgwCodecEncodePong = function() {
                return (n.__DgwCodecEncodePong = n.asm.p).apply(null, arguments)
            };
            n.__DgwCodecDecode = function() {
                return (n.__DgwCodecDecode = n.asm.q).apply(null, arguments)
            };
            n.__getFrameType = function() {
                return (n.__getFrameType = n.asm.r).apply(null, arguments)
            };
            n.__getDrainReasonFromDrainFrame = function() {
                return (n.__getDrainReasonFromDrainFrame = n.asm.s).apply(null, arguments)
            };
            n.__getDGWFramePtr = function() {
                return (n.__getDGWFramePtr = n.asm.t).apply(null, arguments)
            };
            n.__getStreamIdFromStreamGroupFrame = function() {
                return (n.__getStreamIdFromStreamGroupFrame = n.asm.u).apply(null, arguments)
            };
            n.__getEncodedParamsFromEstablishStreamFrame = function() {
                return (n.__getEncodedParamsFromEstablishStreamFrame = n.asm.v).apply(null, arguments)
            };
            n.__getEncodedParamsSizeFromEstablishStreamFrame = function() {
                return (n.__getEncodedParamsSizeFromEstablishStreamFrame = n.asm.w).apply(null, arguments)
            };
            n.__getDataFromGroupedStreamDataFrame = function() {
                return (n.__getDataFromGroupedStreamDataFrame = n.asm.x).apply(null, arguments)
            };
            n.__getDataSizeFromGroupedStreamDataFrame = function() {
                return (n.__getDataSizeFromGroupedStreamDataFrame = n.asm.y).apply(null, arguments)
            };
            n.__getAckIdFromGroupedStreamDataFrame = function() {
                return (n.__getAckIdFromGroupedStreamDataFrame = n.asm.z).apply(null, arguments)
            };
            n.__getRequiresAckFromGroupedStreamDataFrame = function() {
                return (n.__getRequiresAckFromGroupedStreamDataFrame = n.asm.A).apply(null, arguments)
            };
            n.__getAckIdFromGroupedStreamAckFrame = function() {
                return (n.__getAckIdFromGroupedStreamAckFrame = n.asm.B).apply(null, arguments)
            };
            var ja;
            X = function m() {
                ja || ka(), ja || (X = m)
            };

            function ka(m) {
                m || w;
                if (V > 0) return;
                Q();
                if (V > 0) return;

                function o() {
                    if (ja) return;
                    ja = !0;
                    n.calledRun = !0;
                    if (G) return;
                    R();
                    p(n);
                    n.onRuntimeInitialized && n.onRuntimeInitialized();
                    ma()
                }
                n.setStatus ? (n.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        n.setStatus("")
                    }, 1), o()
                }, 1)) : o()
            }
            n.run = ka;
            if (n.preInit) {
                typeof n.preInit == "function" && (n.preInit = [n.preInit]);
                while (n.preInit.length > 0) n.preInit.pop()()
            }
            ka();
            return n.ready
        }
    }();
    typeof r === "object" && typeof q === "object" ? q.exports = s : typeof define === "function" && define.amd ? define([], function() {
        return s
    }) : typeof r === "object" && (r.Module = s)
}), null);
__d("FleetBeaconStates", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.getName = function() {
            return "initial"
        };
        b.getFleetBeaconRunner = function() {
            return this.$1
        };
        b.prepareFleetBeaconSucceed = function() {
            throw new Error("Invalid transition")
        };
        b.prepareFleetBeaconFailed = function() {
            throw new Error("Invalid transition")
        };
        b.subscribeIssued = function() {
            throw new Error("Invalid transition")
        };
        b.subscribeSuccessSignalReceived = function() {
            throw new Error("Invalid transition")
        };
        b.publishIssued = function() {
            throw new Error("Invalid transition")
        };
        b.publishFailed = function() {
            throw new Error("Invalid transition")
        };
        b.payloadReceived = function() {
            throw new Error("Invalid transition")
        };
        b.waitForPublishTimeout = function() {
            throw new Error("Invalid transition")
        };
        b.subscribeTimeout = function() {
            throw new Error("Invalid transition")
        };
        b.payloadTimeout = function() {
            throw new Error("Invalid transition")
        };
        b.cleanUpFinish = function() {
            throw new Error("Invalid transition")
        };
        return a
    }();
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getName = function() {
            return "preparing"
        };
        c.prepareFleetBeaconSucceed = function() {
            var b = this;
            return {
                newState: new g(a.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    a.prototype.getFleetBeaconRunner.call(b).runFleetBeaconTest()
                }
            }
        };
        c.prepareFleetBeaconFailed = function() {
            var b = this;
            return {
                newState: new m(a.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    b.getFleetBeaconRunner().cleanUpFleetBeacon()
                }
            }
        };
        return b
    }(a);
    var g = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "before_subscribe"
            };
            c.subscribeIssued = function() {
                var a = this;
                return {
                    newState: new h(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        b.prototype.getFleetBeaconRunner.call(a).startSubscribeTimer()
                    }
                }
            };
            return a
        }(a),
        h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "subscribe_issued"
            };
            c.subscribeSuccessSignalReceived = function() {
                var a = this;
                return {
                    newState: new i(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish()
                    }
                }
            };
            c.subscribeTimeout = function() {
                var a = this;
                return {
                    newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            };
            return a
        }(a),
        i = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "waiting_to_publish"
            };
            c.waitForPublishTimeout = function() {
                var a = this;
                return {
                    newState: new j(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        b.prototype.getFleetBeaconRunner.call(a).publish(), b.prototype.getFleetBeaconRunner.call(a).startPayloadTimer()
                    }
                }
            };
            return a
        }(a),
        j = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "publish_issued"
            };
            c.publishFailed = function() {
                var a = this;
                return {
                    newState: new m(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            };
            c.payloadReceived = function() {
                var a = this,
                    c, d;
                (function() {});
                b.prototype.getFleetBeaconRunner.call(this).isLastPayload() ? (c = new l(b.prototype.getFleetBeaconRunner.call(this)), d = function() {
                    a.getFleetBeaconRunner().cleanUpFleetBeacon()
                }) : (c = new i(b.prototype.getFleetBeaconRunner.call(this)), d = function() {
                    b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish()
                });
                return {
                    newState: c,
                    action: d
                }
            };
            c.payloadTimeout = function() {
                var a = this;
                return {
                    newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            };
            return a
        }(a),
        k = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "failed"
            };
            c.cleanUpFinish = function() {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {}
                }
            };
            return a
        }(a),
        l = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "succeed"
            };
            c.cleanUpFinish = function() {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {}
                }
            };
            return a
        }(a),
        m = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "aborted"
            };
            c.cleanUpFinish = function() {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {}
                }
            };
            return a
        }(a),
        n = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "finish"
            };
            return a
        }(a);
    f.FleetBeaconState = a;
    f.FleetBeaconPreparingState = b;
    f.FleetBeaconBeforeSubscribeState = g;
    f.FleetBeaconSubscribedIssuedState = h;
    f.FleetBeaconWaitingToPublishState = i;
    f.FleetBeaconPublishIssuedState = j;
    f.FleetBeaconFailedState = k;
    f.FleetBeaconSucceedState = l;
    f.FleetBeaconAbortedState = m;
    f.FleetBeaconFinishState = n
}), 66);
__d("FleetBeaconRunner", ["FleetBeaconStates", "clearTimeout", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a;
            this.$2 = new(d("FleetBeaconStates").FleetBeaconState)(this);
            var b = new(d("FleetBeaconStates").FleetBeaconPreparingState)(this);
            this.$1.cleanPreviousFleetBeaconResult();
            this.$6(function() {
                return {
                    newState: b,
                    action: function() {}
                }
            });
            this.$3 = 0;
            this.$1.setFleetBeaconRunner(this)
        }
        var b = a.prototype;
        b.getPublishTimes = function() {
            return this.$3
        };
        b.prepareFleetBeaconTest = function() {
            this.$1.prepareFleetBeaconTest()
        };
        b.runFleetBeaconTest = function() {
            var a = this;
            this.$6(function() {
                return a.$2.subscribeIssued()
            });
            this.$7()
        };
        b.$7 = function() {
            this.$1.subscribe()
        };
        b.publish = function() {
            this.$1.publish()
        };
        b.isLastPayload = function() {
            return this.$3 >= this.$1.publishWaitIntervalsMS().length
        };
        b.waitForNextPublish = function() {
            var a = this,
                b = this.$1.publishWaitIntervalsMS()[this.$3];
            this.$3 += 1;
            b === 0 ? this.$8() : c("setTimeout")(function() {
                a.$8()
            }, b)
        };
        b.startSubscribeTimer = function() {
            var a = this,
                b = this.$1.subscribeTimeoutIntervalMS();
            this.$4 = c("setTimeout")(function() {
                a.$9()
            }, b)
        };
        b.startPayloadTimer = function() {
            var a = this,
                b = this.$1.payloadTimeoutIntervalMS();
            this.$5 = c("setTimeout")(function() {
                a.$10()
            }, b)
        };
        b.cleanUpFleetBeacon = function() {
            this.$1.cleanUpFleetBeacon()
        };
        b.onCleanUpFinish = function() {
            var a = this;
            this.$6(function() {
                return a.$2.cleanUpFinish()
            })
        };
        b.$8 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.waitForPublishTimeout()
            })
        };
        b.$9 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.subscribeTimeout()
            })
        };
        b.$10 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.payloadTimeout()
            })
        };
        b.onPrepareFleetBeaconSuccess = function() {
            var a = this;
            this.$6(function() {
                return a.$2.prepareFleetBeaconSucceed()
            })
        };
        b.onPrepareFleetBeaconFailed = function() {
            var a = this;
            this.$6(function() {
                return a.$2.prepareFleetBeaconFailed()
            })
        };
        b.onSubscribe = function() {
            var a = this;
            c("clearTimeout")(this.$4);
            this.$6(function() {
                return a.$2.subscribeSuccessSignalReceived()
            })
        };
        b.onPayloadReceived = function() {
            var a = this;
            c("clearTimeout")(this.$5);
            this.$6(function() {
                return a.$2.payloadReceived()
            })
        };
        b.onPublishFailed = function() {
            var a = this;
            c("clearTimeout")(this.$5);
            this.$6(function() {
                return a.$2.publishFailed()
            })
        };
        b.$6 = function(a) {
            a = a();
            var b = this.$2;
            this.$2 = a.newState;
            var c = this.$2;
            this.$11(b, c);
            a.action()
        };
        b.$11 = function(a, b) {
            this.$1.onFleetBeaconStateTransition(a, b)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FleetBeaconStateTransitionListener", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {}
        var b = a.prototype;
        b.onFleetBeaconStateTransition = function(a, b, c, d) {
            throw new Error("Require implementation")
        };
        b.cleanState = function() {
            throw new Error("Require implementation")
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("FleetBeaconTestBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = null, this.$2 = []
        }
        var b = a.prototype;
        b.addStateTransitionListener = function(a) {
            this.$2.push(a)
        };
        b.cleanPreviousFleetBeaconResult = function() {
            this.$2.forEach(function(a) {
                a.cleanState()
            })
        };
        b.getNumberOfPublishers = function() {
            var a;
            return (a = (a = this.$1) == null ? void 0 : a.getPublishTimes()) != null ? a : -1
        };
        b.getTestID = function() {
            throw new Error("Require implementation")
        };
        b.setFleetBeaconRunner = function(a) {
            this.$1 = a
        };
        b.prepareFleetBeaconTest = function() {
            throw new Error("Require implementation")
        };
        b.onPrepareFleetBeaconSuccess = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconSuccess()
        };
        b.onPrepareFleetBeaconFailed = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconFailed()
        };
        b.subscribe = function() {
            throw new Error("Require implementation")
        };
        b.onSubscribe = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onSubscribe()
        };
        b.publish = function() {
            throw new Error("Require implementation")
        };
        b.cleanUpFleetBeacon = function() {
            throw new Error("Require implementation")
        };
        b.onCleanUpFinish = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onCleanUpFinish()
        };
        b.onPublishFailed = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPublishFailed()
        };
        b.onPayloadReceived = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPayloadReceived()
        };
        b.subscribeTimeoutIntervalMS = function() {
            return 1e4
        };
        b.payloadTimeoutIntervalMS = function() {
            return 2e4
        };
        b.publishWaitIntervalsMS = function() {
            return [1e4, 5e3]
        };
        b.shouldStartTime = function() {
            return !0
        };
        b.onFleetBeaconStateTransition = function(a, b) {
            var c = this,
                d = Date.now();
            this.$2.forEach(function(e) {
                e.onFleetBeaconStateTransition(a, b, d, c)
            })
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("FleetBeaconTestUIAnnouncer", ["FleetBeaconStateTransitionListener"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b;
            b = a.call(this) || this;
            b.$FleetBeaconTestUIAnnouncer1 = [];
            b.$FleetBeaconTestUIAnnouncer3 = !1;
            b.$FleetBeaconTestUIAnnouncer4 = !1;
            b.$FleetBeaconTestUIAnnouncer5 = !1;
            b.$FleetBeaconTestUIAnnouncer6 = !1;
            b.$FleetBeaconTestUIAnnouncer7 = -1;
            b.$FleetBeaconTestUIAnnouncer8 = -1;
            b.$FleetBeaconTestUIAnnouncer9 = 0;
            b.$FleetBeaconTestUIAnnouncer10 = 0;
            b.$FleetBeaconTestUIAnnouncer11 = [];
            b.$FleetBeaconTestUIAnnouncer12 = -1;
            b.$FleetBeaconTestUIAnnouncer13 = -1;
            b.$FleetBeaconTestUIAnnouncer14 = -1;
            return b
        }
        var c = b.prototype;
        c.cleanState = function() {
            this.$FleetBeaconTestUIAnnouncer3 = !1, this.$FleetBeaconTestUIAnnouncer4 = !1, this.$FleetBeaconTestUIAnnouncer5 = !1, this.$FleetBeaconTestUIAnnouncer6 = !1, this.$FleetBeaconTestUIAnnouncer7 = -1, this.$FleetBeaconTestUIAnnouncer8 = -1, this.$FleetBeaconTestUIAnnouncer9 = 0, this.$FleetBeaconTestUIAnnouncer10 = 0, this.$FleetBeaconTestUIAnnouncer11 = [], this.$FleetBeaconTestUIAnnouncer12 = -1, this.$FleetBeaconTestUIAnnouncer13 = -1, this.$FleetBeaconTestUIAnnouncer14 = -1
        };
        c.addSubscriber = function(a) {
            this.$FleetBeaconTestUIAnnouncer1.push(a)
        };
        c.onFleetBeaconStateTransition = function(a, b, c, d) {
            var e = d.getTestID(),
                f = {
                    oldState: a,
                    newState: b,
                    testID: e,
                    timestamp: c,
                    extra: {}
                };
            this.$FleetBeaconTestUIAnnouncer2 == null && (this.$FleetBeaconTestUIAnnouncer2 = d);
            e = "NONE";
            switch (b.getName()) {
                case "initial":
                    break;
                case "preparing":
                    this.$FleetBeaconTestUIAnnouncer12 = Date.now();
                    this.$FleetBeaconTestUIAnnouncer3 = !0;
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        createIssued: !0
                    });
                    break;
                case "before_subscribe":
                    this.$FleetBeaconTestUIAnnouncer13 = Date.now();
                    this.$FleetBeaconTestUIAnnouncer4 = !0;
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        createSuccess: !0
                    });
                    break;
                case "subscribe_issued":
                    this.$FleetBeaconTestUIAnnouncer5 = !0;
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        subscribeIssued: !0,
                        subscribeTimestamp: this.$FleetBeaconTestUIAnnouncer13,
                        subscribeTimeoutIntervalMS: (d = (c = this.$FleetBeaconTestUIAnnouncer2) == null ? void 0 : c.subscribeTimeoutIntervalMS()) != null ? d : -1
                    });
                    break;
                case "waiting_to_publish":
                    a.getName() === "subscribe_issued" && (this.$FleetBeaconTestUIAnnouncer6 = !0, this.$FleetBeaconTestUIAnnouncer7 = Date.now() - this.$FleetBeaconTestUIAnnouncer13, f.extra = babelHelpers["extends"]({}, f.extra, {
                        subscribeSuccess: !0,
                        subscribeLatencyMS: this.$FleetBeaconTestUIAnnouncer7
                    }));
                    a.getName() === "publish_issued" && this.$FleetBeaconTestUIAnnouncer15(f);
                    break;
                case "publish_issued":
                    this.$FleetBeaconTestUIAnnouncer9 += 1;
                    this.$FleetBeaconTestUIAnnouncer14 = Date.now();
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        publishIssued: !0,
                        payloadTimeoutInterval: (c = (b = this.$FleetBeaconTestUIAnnouncer2) == null ? void 0 : b.payloadTimeoutIntervalMS()) != null ? c : -1
                    });
                    break;
                case "failed":
                    a.getName() === "subscribe_issued" && (e = "SUBSCRIBE_FAILED");
                    a.getName() === "publish_issued" && (e = "RECEIVE_PUBLISH_FAILED");
                    this.$FleetBeaconTestUIAnnouncer16(f, "FAILURE", e);
                    break;
                case "succeed":
                    a.getName() === "publish_issued" && this.$FleetBeaconTestUIAnnouncer15(f);
                    this.$FleetBeaconTestUIAnnouncer16(f, "SUCCESS", "NONE");
                    break;
                case "aborted":
                    a.getName() === "preparing" && (e = "CREATE_TEST_FAILED");
                    a.getName() === "publish_issued" && (e = "MUTATE_FIELD_FAILED");
                    this.$FleetBeaconTestUIAnnouncer16(f, "ABORT", e);
                    break;
                case "finish":
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        cleanUpFinish: !0
                    });
                    break;
                default:
            }
            this.$FleetBeaconTestUIAnnouncer1.forEach(function(a) {
                a(f)
            })
        };
        c.$FleetBeaconTestUIAnnouncer15 = function(a) {
            this.$FleetBeaconTestUIAnnouncer10 += 1;
            var b = Date.now() - this.$FleetBeaconTestUIAnnouncer14;
            this.$FleetBeaconTestUIAnnouncer11.push(b);
            a.extra = babelHelpers["extends"]({}, a.extra, {
                payloadSuccess: !0,
                payloadSuccessCnt: this.$FleetBeaconTestUIAnnouncer10,
                payloadLatency: b
            })
        };
        c.$FleetBeaconTestUIAnnouncer16 = function(a, b, c) {
            a.extra = babelHelpers["extends"]({}, a.extra, {
                testResult: b,
                failureReason: c
            })
        };
        return b
    }(c("FleetBeaconStateTransitionListener"));
    g["default"] = a
}), 98);
__d("FleetBeaconSubscriptionNetwork", ["CurrentUser", "FleetBeaconSubscriptionNetwork_LogMutation.graphql", "FleetBeaconSubscriptionNetwork_PublishMutation.graphql", "FleetBeaconSubscriptionNetwork_Subscription.graphql", "Promise", "RelayModern", "regeneratorRuntime", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    a = function() {
        function a(a) {
            this.environment = a
        }
        var e = a.prototype;
        e.subscribe = function(a, c) {
            return d("RelayModern").requestSubscription(this.environment, {
                subscription: h !== void 0 ? h : h = b("FleetBeaconSubscriptionNetwork_Subscription.graphql"),
                variables: {
                    input: {
                        test_id: a
                    }
                },
                onError: c.onError,
                onNext: c.onNext
            })
        };
        e.publish = function(a) {
            var e = this;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        return f.abrupt("return", new(b("Promise"))(function(f, g) {
                            d("RelayModern").commitMutation(e.environment, {
                                mutation: i !== void 0 ? i : i = b("FleetBeaconSubscriptionNetwork_PublishMutation.graphql"),
                                variables: {
                                    input: {
                                        client_mutation_id: c("uuid")(),
                                        actor_id: c("CurrentUser").getAccountID(),
                                        test_id: a
                                    }
                                },
                                onCompleted: function(a) {
                                    return f()
                                },
                                onError: g
                            })
                        }));
                    case 1:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        e.log = function(a) {
            var c = this;
            return b("regeneratorRuntime").async(function(e) {
                while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new(b("Promise"))(function(e, f) {
                            d("RelayModern").commitMutation(c.environment, {
                                mutation: j !== void 0 ? j : j = b("FleetBeaconSubscriptionNetwork_LogMutation.graphql"),
                                variables: {
                                    input: a
                                },
                                onCompleted: function(a) {
                                    return e()
                                },
                                onError: f
                            })
                        }));
                    case 1:
                    case "end":
                        return e.stop()
                }
            }, null, this)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FleetBeaconTestSubscriptionLogger", ["CurrentUser", "FleetBeaconStateTransitionListener", "RelayRTIUtils", "uuid"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            var e;
            e = a.call(this) || this;
            e.$FleetBeaconTestSubscriptionLogger1 = null;
            e.$FleetBeaconTestSubscriptionLogger2 = b;
            e.$FleetBeaconTestSubscriptionLogger3 = !1;
            e.$FleetBeaconTestSubscriptionLogger4 = !1;
            e.$FleetBeaconTestSubscriptionLogger5 = !1;
            e.$FleetBeaconTestSubscriptionLogger6 = !1;
            e.$FleetBeaconTestSubscriptionLogger7 = -1;
            e.$FleetBeaconTestSubscriptionLogger8 = -1;
            e.$FleetBeaconTestSubscriptionLogger9 = 0;
            e.$FleetBeaconTestSubscriptionLogger10 = 0;
            e.$FleetBeaconTestSubscriptionLogger11 = [];
            e.$FleetBeaconTestSubscriptionLogger12 = -1;
            e.$FleetBeaconTestSubscriptionLogger13 = -1;
            e.$FleetBeaconTestSubscriptionLogger14 = -1;
            e.$FleetBeaconTestSubscriptionLogger15 = c;
            e.$FleetBeaconTestSubscriptionLogger16 = d;
            return e
        }
        var e = b.prototype;
        e.cleanState = function() {
            this.$FleetBeaconTestSubscriptionLogger3 = !1, this.$FleetBeaconTestSubscriptionLogger4 = !1, this.$FleetBeaconTestSubscriptionLogger5 = !1, this.$FleetBeaconTestSubscriptionLogger6 = !1, this.$FleetBeaconTestSubscriptionLogger7 = -1, this.$FleetBeaconTestSubscriptionLogger8 = -1, this.$FleetBeaconTestSubscriptionLogger9 = 0, this.$FleetBeaconTestSubscriptionLogger10 = 0, this.$FleetBeaconTestSubscriptionLogger11 = [], this.$FleetBeaconTestSubscriptionLogger12 = -1, this.$FleetBeaconTestSubscriptionLogger13 = -1, this.$FleetBeaconTestSubscriptionLogger14 = -1
        };
        e.onFleetBeaconStateTransition = function(a, b, c, d) {
            this.$FleetBeaconTestSubscriptionLogger1 == null && (this.$FleetBeaconTestSubscriptionLogger1 = d);
            c = "NONE";
            switch (b.getName()) {
                case "initial":
                    break;
                case "preparing":
                    this.$FleetBeaconTestSubscriptionLogger12 = Date.now();
                    this.$FleetBeaconTestSubscriptionLogger3 = !0;
                    break;
                case "before_subscribe":
                    this.$FleetBeaconTestSubscriptionLogger13 = Date.now();
                    this.$FleetBeaconTestSubscriptionLogger4 = !0;
                    break;
                case "subscribe_issued":
                    this.$FleetBeaconTestSubscriptionLogger5 = !0;
                    break;
                case "waiting_to_publish":
                    a.getName() === "subscribe_issued" && (this.$FleetBeaconTestSubscriptionLogger6 = !0, this.$FleetBeaconTestSubscriptionLogger7 = Date.now() - this.$FleetBeaconTestSubscriptionLogger13);
                    a.getName() === "publish_issued" && this.$FleetBeaconTestSubscriptionLogger17();
                    break;
                case "publish_issued":
                    this.$FleetBeaconTestSubscriptionLogger9 += 1;
                    this.$FleetBeaconTestSubscriptionLogger14 = Date.now();
                    break;
                case "failed":
                    a.getName() === "subscribe_issued" && (c = "SUBSCRIBE_FAILED");
                    a.getName() === "publish_issued" && (c = "RECEIVE_PUBLISH_FAILED");
                    this.$FleetBeaconTestSubscriptionLogger18("FAILURE", c);
                    break;
                case "succeed":
                    a.getName() === "publish_issued" && this.$FleetBeaconTestSubscriptionLogger17();
                    this.$FleetBeaconTestSubscriptionLogger18("SUCCESS", "NONE");
                    break;
                case "aborted":
                    a.getName() === "preparing" && (c = "CREATE_TEST_FAILED");
                    a.getName() === "publish_issued" && (c = "MUTATE_FIELD_FAILED");
                    this.$FleetBeaconTestSubscriptionLogger18("ABORT", c);
                    break;
                default:
            }
        };
        e.$FleetBeaconTestSubscriptionLogger17 = function() {
            this.$FleetBeaconTestSubscriptionLogger10 += 1;
            var a = Date.now() - this.$FleetBeaconTestSubscriptionLogger14;
            this.$FleetBeaconTestSubscriptionLogger11.push(a)
        };
        e.$FleetBeaconTestSubscriptionLogger18 = function(a, b) {
            var e, f = this,
                g = this.$FleetBeaconTestSubscriptionLogger12 = Date.now() - this.$FleetBeaconTestSubscriptionLogger12,
                h = parseInt(this.$FleetBeaconTestSubscriptionLogger11.reduce(function(a, b) {
                    return a + b
                }, 0) / this.$FleetBeaconTestSubscriptionLogger10, 10);
            e = (e = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : e.getTestID();
            if (e == null) return;
            this.$FleetBeaconTestSubscriptionLogger2.log({
                client_mutation_id: c("uuid")(),
                actor_id: c("CurrentUser").getAccountID(),
                test_id: e,
                test_name: "Web_Manual",
                test_result: a,
                failure_reason: b,
                subscribe_issued: this.$FleetBeaconTestSubscriptionLogger5,
                subscribe_success: this.$FleetBeaconTestSubscriptionLogger6,
                subscribe_latency_ms: this.$FleetBeaconTestSubscriptionLogger7,
                subscribe_timeout_interval_ms: (e = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : e.subscribeTimeoutIntervalMS(),
                publish_success: this.$FleetBeaconTestSubscriptionLogger10 > 0,
                publish_latency_ms: h,
                publish_timeout_interval_ms: (a = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : a.payloadTimeoutIntervalMS(),
                test_duration_ms: g,
                triggering_subscription: (b = this.$FleetBeaconTestSubscriptionLogger15) != null ? b : "manual",
                app_id: d("RelayRTIUtils").GRAPH_SERVICES_SDK_APP_ID
            }).then(function(a) {
                f.$FleetBeaconTestSubscriptionLogger16(!0)
            })["catch"](function(a) {
                f.$FleetBeaconTestSubscriptionLogger16(!1)
            })
        };
        return b
    }(c("FleetBeaconStateTransitionListener"));
    g["default"] = a
}), 98);
__d("FleetBeaconTestSubscription", ["FleetBeaconTestBase", "FleetBeaconTestSubscriptionLogger", "FleetBeaconTestUIAnnouncer", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d, e) {
            var f;
            f = a.call(this) || this;
            f.onCleanUpFleetBeaconFinish = function(a) {
                f.onCleanUpFinish()
            };
            f.$FleetBeaconTestSubscription1 = b;
            f.$FleetBeaconTestSubscription3 = null;
            f.$FleetBeaconTestSubscription4 = e;
            f.$FleetBeaconTestSubscription6 = new(c("FleetBeaconTestSubscriptionLogger"))(b, d, f.onCleanUpFleetBeaconFinish);
            f.$FleetBeaconTestSubscription5 = new(c("FleetBeaconTestUIAnnouncer"))();
            a.prototype.addStateTransitionListener.call(babelHelpers.assertThisInitialized(f), f.$FleetBeaconTestSubscription6);
            a.prototype.addStateTransitionListener.call(babelHelpers.assertThisInitialized(f), f.$FleetBeaconTestSubscription5);
            f.cleanPreviousFleetBeaconResult();
            return f
        }
        var d = b.prototype;
        d.cleanPreviousFleetBeaconResult = function() {
            a.prototype.cleanPreviousFleetBeaconResult.call(this), this.$FleetBeaconTestSubscription2 = c("uuid")()
        };
        d.getTestID = function() {
            return this.$FleetBeaconTestSubscription2
        };
        d.getFleetBeaconUIAnnouncer = function() {
            return this.$FleetBeaconTestSubscription5
        };
        d.prepareFleetBeaconTest = function() {
            this.onPrepareFleetBeaconSuccess()
        };
        d.subscribe = function() {
            var a = this,
                b = this.$FleetBeaconTestSubscription2;
            if (b == null) return;
            this.$FleetBeaconTestSubscription3 = this.$FleetBeaconTestSubscription1.subscribe(b, {
                onNext: function() {
                    a.onPayloadReceived()
                },
                onError: function() {}
            });
            this.onSubscribe()
        };
        d.publish = function() {
            var b = this,
                c = this.$FleetBeaconTestSubscription2;
            if (c == null) return;
            this.$FleetBeaconTestSubscription1.publish(c)["catch"](function(c) {
                a.prototype.onPublishFailed.call(b)
            })
        };
        d.cleanUpFleetBeacon = function() {};
        d.$FleetBeaconTestSubscription7 = function() {
            var a;
            (a = this.$FleetBeaconTestSubscription3) == null ? void 0 : a.dispose()
        };
        d.onFleetBeaconStateTransition = function(b, c) {
            a.prototype.onFleetBeaconStateTransition.call(this, b, c);
            b = c.getName();
            b === "finish" && (this.$FleetBeaconTestSubscription4(), this.$FleetBeaconTestSubscription7())
        };
        return b
    }(c("FleetBeaconTestBase"));
    g["default"] = a
}), 98);
__d("FleetBeaconSubscriptionLauncher", ["FleetBeaconRunner", "FleetBeaconSubscriptionNetwork", "FleetBeaconTestSubscription"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d) {
        a = new(c("FleetBeaconTestSubscription"))(new(c("FleetBeaconSubscriptionNetwork"))(a), b, d);
        return a
    }

    function b(a) {
        var b = new(c("FleetBeaconRunner"))(a);
        a.setFleetBeaconRunner(b);
        b.prepareFleetBeaconTest()
    }
    g.CreateFleetBeaconTestSubscription = a;
    g.LaunchFleetBeaconTestSubscription = b
}), 98);
__d("SkywalkerUtils", ["CurrentLocale", "RTISubscriptionManagerConfig"], (function(a, b, c, d, e, f) {
    a = {
        patchContext: function(a) {
            a = a || {};
            a.locale = b("CurrentLocale").get();
            if (b("RTISubscriptionManagerConfig").assimilator) {
                var c = b("RTISubscriptionManagerConfig").assimilator;
                c.tierType != null && (a.tierType = c.tierType);
                c.sandboxIP != null && c.sandboxPort != null && c.sandboxHostname != null && (a.sandboxIP = c.sandboxIP, a.sandboxPort = c.sandboxPort, a.sandboxHostname = c.sandboxHostname)
            }
            return a
        }
    };
    e.exports = a
}), null);
__d("MqttLongPollingHookCollection", [], (function(a, b, c, d, e, f) {
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
        b.onPollRequestSent = function() {
            this.$1.forEach(function(a) {
                a.onPollRequestSent()
            })
        };
        b.onPollRequestSuccess = function() {
            this.$1.forEach(function(a) {
                a.onPollRequestSuccess()
            })
        };
        b.onPollResponse = function(a) {
            this.$1.forEach(function(b) {
                b.onPollResponse(a)
            })
        };
        b.onPollFinish = function() {
            this.$1.forEach(function(a) {
                a.onPollFinish()
            })
        };
        b.onPollRequestFailed = function(a) {
            this.$1.forEach(function(b) {
                b.onPollRequestFailed(a)
            })
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("PromiseResult", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            var a = this;
            this.promise = new(b("Promise"))(function(b, c) {
                a.$1 = b, a.$2 = c
            })
        }
        var c = a.prototype;
        c.resolve = function(a) {
            this.$1(a)
        };
        c.reject = function(a) {
            this.$2(a)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("MqttFetchClient", ["MqttEnv", "MqttProtocolCodec", "MqttUtils", "Promise", "PromiseResult"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttProtocolCodec").WireMessage,
        h = b("MqttProtocolCodec").decodeByteMessages,
        i = b("MqttEnv").Env,
        j = b("MqttProtocolCodec").MESSAGE_TYPE,
        k = "fetch_pull",
        l = "fetch_pull_finish",
        m = "fetch_",
        n = 6e4,
        o = "action",
        p = "chunked",
        q = "send",
        r = "true",
        s = 5,
        t = 20,
        u = 10,
        v = 5e3;
    a = function() {
        function a() {
            this.$1 = "", this.$2 = i.getLoggerInstance(), this.$3 = 0, this.$4 = "", this.$6 = function() {}, this.$7 = function(a) {}, this.$8 = function() {}, this.$9 = function(a) {}, this.$10 = 0, this.$11 = 0, this.$12 = 0, this.$13 = 0, this.$14 = "Ready", this.$15 = [], this.$16 = [], this.$17 = null, this.$18 = !1, this.$19 = 0
        }
        a.isSupported = function() {
            return typeof fetch === "function"
        };
        var c = a.prototype;
        c.run = function(a, c, d, e, f, g, h, i) {
            this.$1 = b("MqttUtils").endpointWithSessionId(a, c), this.$3 = c, this.$4 = d, this.$5 = e, this.$6 = f, this.$7 = g, this.$8 = h, this.$9 = i, this.$20()
        };
        c.isTopicSupported = function(a) {
            return !0
        };
        c.publish = function(a, c) {
            if (this.$14 !== "ReceivingData") {
                this.$2.bumpCounter(m + "publish." + a + ".invalidstate");
                return b("Promise").reject("not connected")
            } else {
                this.$2.bumpCounter(m + "publish." + a + ".publish");
                var d = new(b("PromiseResult"))();
                a = {
                    topic: a,
                    payload: c,
                    promiseResult: d
                };
                this.$15.push(a);
                this.$21();
                return d.promise
            }
        };
        c.abort = function() {
            this.$6 = function() {}, this.$7 = function(a) {}, this.$8 = function() {}, this.$9 = function(a) {}
        };
        c.$22 = function(a) {
            var b = this;
            a.forEach(function(a) {
                b.$2.bumpCounter(m + "publish." + a.topic + ".resolved"), a.promiseResult.resolve()
            });
            this.$12 += a.length
        };
        c.$23 = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.$2.bumpCounter(m + "publish." + a.topic + ".rejected"), a.promiseResult.reject(b)
            })
        };
        c.$24 = function(a, b, c, d) {
            var e = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request failed. Publishes:" + e + ", retry:" + c);
            this.$2.bumpCounter(m + "publish_request_failed");
            this.$14 != "ReceivingData" || c === s ? (this.$23(a, d), this.$18 = !1, this.$2.bumpCounter(m + "publish_request_failed_final"), this.$21()) : this.$25(a, b, c + 1)
        };
        c.$26 = function(a, b, c, d) {
            if (!d.ok) {
                this.$2.bumpCounter(m + "publish_request_failed.http." + d.status);
                if (d.status === 409) {
                    this.$19++;
                    if (this.$19 >= u) {
                        this.$2.bumpCounter(m + "409_reset");
                        this.$27(new Error("Too many 409 errors"));
                        return
                    }
                }
                this.$24(a, b, c, this.$28(d));
                return
            }
            this.$2.bumpCounter(m + "publish_request_success");
            b = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request success. Publishes:" + b + ", retry:" + c);
            this.$22(a);
            this.$18 = !1;
            this.$21()
        };
        c.$21 = function() {
            if (this.$14 != "ReceivingData") return;
            if (this.$18) return;
            if (this.$15.length == 0 && this.$16.length == 0) return;
            this.$18 = !0;
            var a = this.$15.slice(0, t);
            this.$15 = this.$15.slice(t, this.$15.length);
            clearTimeout(this.$17);
            this.$17 = null;
            var b = this.$16.slice(0, t);
            this.$16 = this.$16.slice(t, this.$16.length);
            this.$25(a, b, 0)
        };
        c.$25 = function(a, c, d) {
            var e = this,
                f = a.map(function(a) {
                    return a.topic
                }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request sent. Publishes:" + f + ", retry:" + d);
            f = b("MqttUtils").endpointWithExtraParameter(this.$1, o, q);
            var g = a.map(function(a) {
                return {
                    topic: a.topic,
                    payload: a.payload,
                    qos: 0,
                    messageId: i.random()
                }
            });
            g = this.$5.gen(this.$3, [], g, c);
            this.$2.bumpCounter(m + "publish_request");
            b("MqttUtils").promiseDoneWithTimeout(fetch(f, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "include",
                referrer: "no-referrer",
                body: g,
                keepalive: !1
            }), function(b) {
                return e.$26(a, c, d, b)
            }, function(b) {
                return e.$24(a, c, d, b)
            }, n)
        };
        c.$29 = function(a) {
            a = a.message;
            this.$2.debugTrace("FetchClient", "Fetch request failed with error:" + a);
            this.$9(a);
            this.$30(!1, a);
            this.$2.bumpCounter(m + "error");
            this.$14 = "Error"
        };
        c.$31 = function(a) {
            var b = this;
            this.$2.debugTrace("FetchClient", "Fetch response data received");
            a = h(new Uint8Array(a));
            a = a.messages;
            var c = a.filter(function(a) {
                return a.messageType === j.PINGREQ
            });
            a = a.filter(function(a) {
                return a.messageType === j.PUBLISH
            }).map(function(a) {
                if (!(a instanceof g.Publish)) return {};
                a = a;
                a.qos === 1 && a.messageIdentifier != null && (b.$16.push(a.messageIdentifier), b.$17 == null && (b.$17 = i.setTimeout(function() {
                    b.$21()
                }, v)));
                return {
                    topic: a.topic,
                    payload: a.payloadMessage,
                    qos: a.qos
                }
            });
            for (var d = a, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var k;
                if (e) {
                    if (f >= d.length) break;
                    k = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    k = f.value
                }
                k = k;
                this.$2.bumpCounter(m + "response_" + k.topic)
            }
            a && a.length > 0 && (this.$13 += a.length, this.$7(a));
            c && c.length > 0 && this.$32()
        };
        c.$32 = function() {
            this.$2.debugTrace("FetchClient", "Got server ping request"), this.$2.bumpCounter(m + "ping")
        };
        c.$27 = function(a) {
            this.$2.debugTrace("FetchClient", "Fetch request ended: " + a.toString()), this.$2.bumpCounter(m + "done"), this.$33(a.message), this.$8(), this.$14 = "Done"
        };
        c.$34 = function(a, c, d) {
            var e = this;
            if (d !== null && d !== void 0) try {
                this.$31(d)
            } catch (a) {
                this.$27(a);
                this.$2.bumpCounter(m + "dataDecodeException");
                return
            }
            if (c) {
                this.$27(new Error("EOF"));
                return
            }
            b("MqttUtils").promiseDone(a.read(), function(c) {
                var b = c.done;
                c = c.value;
                return e.$34(a, b, c)
            }, function(a) {
                return e.$27(a)
            })
        };
        c.$35 = function(a) {
            if (!a.ok) {
                this.$2.bumpCounter(m + "error.http." + a.status);
                this.$29(this.$28(a));
                return
            }
            a = a.body;
            if (!a) {
                this.$29(new Error("Empty body"));
                return
            }
            a = a.getReader();
            this.$6();
            this.$2.bumpCounter(m + "success");
            this.$30(!0, null);
            this.$11 = Date.now();
            this.$14 = "ReceivingData";
            this.$2.debugTrace("FetchClient", "Fetch request success");
            this.$34(a, !1, null)
        };
        c.$33 = function(a) {
            this.$2.eventLogPullFinish({
                pullEventName: l,
                sessionID: this.$3,
                duration: Date.now() - this.$11,
                errorMessage: a,
                publishReceived: this.$13,
                publishSent: this.$12
            })
        };
        c.$30 = function(a, b) {
            this.$2.eventLogPull({
                pullEventName: k,
                sessionID: this.$3,
                status: a,
                duration: Date.now() - this.$10,
                hostname: this.$1,
                errorMessage: b
            })
        };
        c.$20 = function() {
            var a = this;
            if (this.$14 != "Ready") return;
            this.$2.debugTrace("FetchClient", "Sending fetch request");
            this.$2.bumpCounter(m + "request");
            this.$10 = Date.now();
            var c = b("MqttUtils").endpointWithExtraParameter(this.$1, p, r);
            b("MqttUtils").promiseDoneWithTimeout(fetch(c, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "include",
                referrer: "no-referrer",
                body: this.$4,
                keepalive: !1
            }), function(b) {
                return a.$35(b)
            }, function(b) {
                return a.$29(b)
            }, n)
        };
        c.$28 = function(a) {
            return new Error("Http error, status=" + a.status)
        };
        return a
    }();
    e.exports = a
}), null);
__d("MqttLongPollingClient", ["MqttEnv", "MqttProtocolCodec", "Promise", "XHRRequest", "getCrossOriginTransport"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttProtocolCodec").WireMessage,
        h = b("MqttProtocolCodec").decodeByteMessages,
        i = b("MqttEnv").Env,
        j = 120 * 1e3,
        k = "simple_pull";
    a = function() {
        function a() {
            this.$3 = "", this.$4 = 0, this.$2 = i.getLoggerInstance(), this.$1 = "Ready", this.$5 = "", this.$7 = function() {}, this.$8 = function(a) {}, this.$9 = function() {}, this.$10 = function(a) {}, this.$11 = 0, this.$12 = null, this.$13 = new Set(["/t_ms", "/messenger_sync_get_diffs", "/messenger_sync_create_queue", "/webrtc", "/rtc_multi"])
        }
        var c = a.prototype;
        c.run = function(a, b, c, d, e, f, g, h) {
            this.$3 = a, this.$4 = b, this.$5 = c, this.$6 = d, this.$7 = e, this.$8 = f, this.$9 = g, this.$10 = h, this.$14(this.$5)
        };
        c.isTopicSupported = function(a) {
            return this.$13.has(a)
        };
        c.publish = function(a, c) {
            return b("Promise").reject("not supported")
        };
        c.abort = function() {
            this.$12 != null && this.$12.abort("Disconnected")
        };
        c.$15 = function(a, b) {
            if (this.$1 === a) return;
            this.$1 = a;
            a == "Error" && b != null && this.$10(b)
        };
        c.$16 = function(a) {
            if (this.$1 != "RequestSend") return;
            if (!a) {
                this.$17("EmptyResponse", null);
                return
            }
            this.$7();
            this.$18(!0, null);
            this.$15("ResponseReceived");
            a = h(new Uint8Array(a));
            a = a.messages.filter(function(a) {
                return a instanceof g.Publish
            }).map(function(a) {
                if (a instanceof g.Publish) {
                    a = a;
                    return {
                        topic: a.topic,
                        payload: a.payloadMessage,
                        qos: a.qos
                    }
                } else return {}
            });
            this.$8(a);
            this.$9()
        };
        c.$17 = function(a, b) {
            b = b != null ? b.message : "null";
            this.$2.debugTrace("LongPollingClient Error", "Poll failed with error:" + a + ", errorMsg:" + b);
            this.$18(!1, a + ":" + b);
            this.$15("Error", a)
        };
        c.$18 = function(a, b) {
            this.$2.eventLogPull({
                pullEventName: k,
                sessionID: this.$4,
                status: a,
                duration: Date.now() - this.$11,
                hostname: this.$3,
                errorMessage: b
            })
        };
        c.$14 = function(a) {
            var c = this;
            if (this.$1 != "Ready" || this.$12) return;
            try {
                this.$11 = Date.now(), this.$12 = new(b("XHRRequest"))(this.$3).setResponseType("arraybuffer").setRawData(a).setTransportBuilder(b("getCrossOriginTransport").withCredentials).setResponseHandler(function(a) {
                    return c.$16(a)
                }).setNetworkFailureHandler(function(a) {
                    c.$17("Network", a)
                }).setErrorHandler(function(a) {
                    c.$17("Error", a)
                }).setAbortHandler(function(a) {
                    c.$17("Abort", null)
                }).setTimeoutHandler(function() {
                    c.$17("Timeout", null)
                }).setTimeout(j).send(), this.$15("RequestSend")
            } catch (a) {
                this.$17("Error", a)
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("exponentialBackoff", ["MqttEnv"], (function(a, b, c, d, e, f) {
    var g = b("MqttEnv").Env;

    function a(a, b) {
        b === void 0 && (b = null);
        var c = null,
            d = 0;

        function e() {
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
            var i = function() {
                a.apply(b, f)
            };
            if (c === null) {
                var j = Math.max(0, Math.pow(2, Math.min(d, 6)) * (1e3 + g.random() * 100) - 2e3);
                c = g.setTimeout(function() {
                    i(), c = null
                }, j)
            }
            d++
        }
        e.reset = function() {
            d = 0, c != null && (g.clearTimeout(c), c = null)
        };
        e.isPending = function() {
            return c != null
        };
        return e
    }
    e.exports = a
}), null);
__d("MqttLongPollingRunner", ["MqttEnv", "MqttFetchClient", "MqttLongPollingClient", "MqttLongPollingHookCollection", "MqttProtocolCodec", "MqttTypes", "MqttUtils", "Promise", "exponentialBackoff"], (function(a, b, c, d, e, f) {
    "use strict";
    b("MqttProtocolCodec").Message;
    var g = b("MqttTypes").MqttChannelError,
        h = b("MqttEnv").Env,
        i = b("MqttEnv").MqttGkNames,
        j = 4,
        k = 1e3,
        l = 3e3,
        m = "mqtt_should_longpoll",
        n = "last_lp",
        o = "yes",
        p = "no";
    a = function() {
        function a(a, c, d, e, f, j, k, l, m) {
            var n = this;
            this.$23 = function() {
                try {
                    if (!n.$29()) return;
                    var a = n.$30();
                    n.$14 = a;
                    var c = n.$9(),
                        d = n.$10();
                    c = c.filter(function(b) {
                        return a.isTopicSupported(b)
                    });
                    d = d.filter(function(b) {
                        return a.isTopicSupported(b.topic)
                    });
                    if (c.length == 0 && d.length == 0) {
                        n.$5.debugTrace("LongPollingRunner", "Poll skipped, nothing to do");
                        n.$14 = null;
                        h.setTimeout(function() {
                            n.$23()
                        }, 1e3);
                        return
                    }
                    var e = b("MqttUtils").generateSessionId();
                    a.run(n.$6, e, n.$7.gen(e, c, d), n.$7, function() {
                        return n.$31()
                    }, function(a) {
                        return n.$32(a)
                    }, function() {
                        return n.$33()
                    }, function(a) {
                        return n.$34(a)
                    });
                    n.$19.onPollRequestSent();
                    e = c.join(",");
                    c = d.map(function(a) {
                        return a.topic
                    }).join(",");
                    n.$5.debugTrace("LongPollingRunner", "Making a poll request to " + n.$6 + ". SubscribedTopics:" + e + ". Publishes:" + c)
                } catch (a) {
                    a && n.$5.logErrorWarn(a, "lp_js_error"), n.$11(new g(!1, "js error lp", a)), n.$34("lp_js_error")
                }
            };
            this.$6 = a;
            this.$7 = c;
            this.$1 = e;
            this.$2 = 0;
            this.$3 = d;
            this.$4 = b("MqttUtils").hasWSSupport();
            this.$5 = h.getLoggerInstance();
            this.$8 = f;
            this.$9 = j;
            this.$10 = k;
            this.$11 = l;
            this.$12 = m;
            this.$13 = !1;
            this.$14 = null;
            this.$15 = "LPInactive";
            this.$16 = "NotSent";
            this.$17 = 0;
            this.$19 = new(b("MqttLongPollingHookCollection"))();
            this.$18 = new(b("exponentialBackoff"))(this.$23, this);
            this.$20 = 0;
            this.$21 = p;
            a = h.genGk(i.mqtt_lp_use_fetch);
            c = b("MqttFetchClient").isSupported();
            a ? this.$5.bumpCounter("fetch_gk_pass") : this.$5.bumpCounter("fetch_gk_fail");
            c ? this.$5.bumpCounter("fetch_api_supported") : this.$5.bumpCounter("fetch_api_not_supported");
            this.$22 = a && c
        }
        var c = a.prototype;
        c.addHook = function(a) {
            this.$19.addHook(a)
        };
        c.start = function() {
            var a = this;
            this.$21 = h.configRead(n, p);
            this.$5.debugTrace("LongPollingRunner", "Runner loaded, last status " + this.$21);
            this.$20 = Date.now();
            this.$23();
            h.setTimeout(function() {
                a.$23()
            }, k + 100);
            h.setTimeout(function() {
                a.$23()
            }, l + 100)
        };
        c.canPublish = function() {
            return this.$15 === "LPActive" && this.$16 === "ReceivingData"
        };
        c.publish = function(a, c, d) {
            return h.genGk(i.mqtt_enable_publish_over_polling) && (this.$14 && this.$14.isTopicSupported(a)) ? this.$14.publish(a, c) : b("Promise").reject()
        };
        c.onConnectAttempt = function() {};
        c.onConnectFailure = function() {
            this.$2++, this.$23()
        };
        c.onConnected = function() {};
        c.onConnectSuccess = function() {
            this.$1 = !0, h.configWrite(n, null)
        };
        c.onConnectionLost = function() {};
        c.onSubscribe = function(a) {};
        c.onUnsubscribe = function(a) {};
        c.onPublish = function(a) {};
        c.onMessage = function(a) {};
        c.onWSFatal = function() {
            this.$3 = !0, this.$23()
        };
        c.getStatus = function() {
            return this.$15
        };
        c.getRequestStatus = function() {
            return this.$16
        };
        c.$24 = function(a) {
            a != this.$15 && (this.$5.debugTrace("LongPollingRunner", "status changed to " + a + " from " + this.$15), this.$15 = a, this.$12(this.$15, this.$16))
        };
        c.$25 = function(a) {
            if (!this.$22) return;
            a !== this.$16 && (this.$5.debugTrace("LongPollingRunner", "request status changed to " + a + " from " + this.$16), this.$16 = a, this.$12(this.$15, this.$16))
        };
        c.$26 = function() {
            this.$17 = 0
        };
        c.$27 = function() {
            this.$17++, this.$17 >= j && this.$24("LPError")
        };
        c.$28 = function() {
            var a = h.genGk(i.mqtt_lp_no_delay),
                b = h.genGk(i.mqtt_ws_polling_enabled),
                c = h.genGk(i.mqtt_fast_lp);
            this.$5.debugTrace("LongPollingRunner", "_shouldPoll? pollNow:" + String(a) + " enabled:" + String(b) + " fastPoll:" + String(c) + " hasWSSupport:" + String(this.$4) + " hasSuccess:" + String(this.$1) + " failureCount:" + this.$2 + " wsFatal:" + String(this.$3));
            if (!b) return !1;
            if (a) {
                this.$5.bumpCounter(m + ".nd");
                return !0
            }
            if (!this.$4) {
                this.$5.bumpCounter(m + ".na");
                return !0
            }
            if (this.$3) {
                this.$5.bumpCounter(m + ".fatal");
                return !0
            }
            if (this.$1) return !1;
            if (c) {
                b = Date.now() - this.$20;
                if (this.$21 === o) {
                    if (this.$2 >= 1) return !0;
                    if (b > k) {
                        this.$5.bumpCounter(m + ".fastdelay");
                        return !0
                    }
                } else if (b > l) {
                    this.$5.bumpCounter(m + ".regulardelay");
                    return !0
                }
            }
            if (this.$2 >= 3) {
                this.$5.bumpCounter(m + ".failure");
                return !0
            }
            return !1
        };
        c.$29 = function() {
            if (this.$14 != null) return !1;
            var a = this.$28();
            !this.$13 && a && (this.$5.bumpCounter("polling_kickin"), this.$13 = !0, this.$24("LPActive"), this.$26());
            this.$13 && !a && (this.$5.bumpCounter("polling_stopped"), this.$13 = !1, this.$24("LPInactive"), this.$26());
            return a
        };
        c.$30 = function() {
            if (this.$22) {
                this.$5.debugTrace("LongPollingRunner", "Creating polling client using Fetch API");
                return new(b("MqttFetchClient"))()
            } else {
                this.$5.debugTrace("LongPollingRunner", "Creating regular Polling client");
                return new(b("MqttLongPollingClient"))()
            }
        };
        c.$31 = function() {
            this.$5.debugTrace("LongPollingRunner", "Poll success"), this.$19.onPollRequestSuccess(), this.$18.reset(), this.$24("LPActive"), this.$26(), h.configWrite(n, o), this.$25("ReceivingData")
        };
        c.$32 = function(a) {
            var b = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$5.debugTrace("LongPollingRunner", "Poll response received, message received:" + b);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.$19.onPollResponse(c.topic);
                this.$8(c.topic, c.payload, c.qos)
            }
        };
        c.$33 = function() {
            this.$5.debugTrace("LongPollingRunner", "Poll finish"), this.$19.onPollFinish(), this.$14 && this.$14.abort(), this.$14 = null, this.$23(), this.$25("NotSent")
        };
        c.$34 = function(a) {
            this.$19.onPollRequestFailed(a), this.$14 && this.$14.abort(), this.$14 = null, this.$18(), this.$27(), this.$25("NotSent")
        };
        return a
    }();
    e.exports = a
}), null);