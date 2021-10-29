/*! For license information please see index.ZAEVhIamqDV6.b2f01387562e775ba768.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  [
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return Y;
      }),
        n.d(t, "b", function () {
          return Ae;
        }),
        n.d(t, "c", function () {
          return Oe;
        }),
        n.d(t, "d", function () {
          return D;
        }),
        n.d(t, "e", function () {
          return se;
        }),
        n.d(t, "f", function () {
          return U;
        }),
        n.d(t, "g", function () {
          return ce;
        });
      n(34),
        n(21),
        n(103),
        n(36),
        n(55),
        n(39),
        n(10),
        n(12),
        n(16),
        n(26),
        n(48),
        n(13),
        n(130),
        n(19),
        n(17),
        n(18),
        n(93),
        n(67),
        n(35),
        n(45),
        n(129),
        n(29),
        n(54),
        n(33),
        n(27),
        n(160),
        n(40),
        n(28),
        n(161),
        n(102);
      function r(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function i(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (i = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return o(e, arguments, h(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            u(r, e)
          );
        })(e);
      }
      function o(e, t, n) {
        return (o = d()
          ? Reflect.construct
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new (Function.bind.apply(e, r))();
              return n && u(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s(e, t, n) {
        return (s =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = h(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && u(e, t);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function l(e) {
        var t = d();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return y(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          m(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function v(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = m(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function m(e, t) {
        if (e) {
          if ("string" == typeof e) return y(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? y(e, t)
              : void 0
          );
        }
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function b(e, t, n) {
        return t && g(e.prototype, t), n && g(e, n), e;
      }
      function w(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var k =
          "undefined" != typeof window &&
          null != window.customElements &&
          void 0 !== window.customElements.polyfillWrapFlushCallback,
        x = function (e, t) {
          for (
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            t !== n;

          ) {
            var r = t.nextSibling;
            e.removeChild(t), (t = r);
          }
        },
        S = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
        O = "\x3c!--".concat(S, "--\x3e"),
        E = new RegExp("".concat(S, "|").concat(O)),
        A = "$lit$",
        C = function e(t, n) {
          w(this, e), (this.parts = []), (this.element = n);
          for (
            var r = [],
              i = [],
              o = document.createTreeWalker(n.content, 133, null, !1),
              a = 0,
              s = -1,
              c = 0,
              u = t.strings,
              l = t.values.length;
            c < l;

          ) {
            var f = o.nextNode();
            if (null !== f) {
              if ((s++, 1 === f.nodeType)) {
                if (f.hasAttributes()) {
                  for (
                    var d = f.attributes, h = d.length, p = 0, v = 0;
                    v < h;
                    v++
                  )
                    P(d[v].name, A) && p++;
                  for (; p-- > 0; ) {
                    var m = u[c],
                      y = I.exec(m)[2],
                      g = y.toLowerCase() + A,
                      b = f.getAttribute(g);
                    f.removeAttribute(g);
                    var k = b.split(E);
                    this.parts.push({
                      type: "attribute",
                      index: s,
                      name: y,
                      strings: k,
                    }),
                      (c += k.length - 1);
                  }
                }
                "TEMPLATE" === f.tagName &&
                  (i.push(f), (o.currentNode = f.content));
              } else if (3 === f.nodeType) {
                var x = f.data;
                if (x.indexOf(S) >= 0) {
                  for (
                    var O = f.parentNode,
                      C = x.split(E),
                      _ = C.length - 1,
                      T = 0;
                    T < _;
                    T++
                  ) {
                    var R = void 0,
                      L = C[T];
                    if ("" === L) R = j();
                    else {
                      var M = I.exec(L);
                      null !== M &&
                        P(M[2], A) &&
                        (L =
                          L.slice(0, M.index) +
                          M[1] +
                          M[2].slice(0, -A.length) +
                          M[3]),
                        (R = document.createTextNode(L));
                    }
                    O.insertBefore(R, f),
                      this.parts.push({ type: "node", index: ++s });
                  }
                  "" === C[_]
                    ? (O.insertBefore(j(), f), r.push(f))
                    : (f.data = C[_]),
                    (c += _);
                }
              } else if (8 === f.nodeType)
                if (f.data === S) {
                  var N = f.parentNode;
                  (null !== f.previousSibling && s !== a) ||
                    (s++, N.insertBefore(j(), f)),
                    (a = s),
                    this.parts.push({ type: "node", index: s }),
                    null === f.nextSibling ? (f.data = "") : (r.push(f), s--),
                    c++;
                } else
                  for (var D = -1; -1 !== (D = f.data.indexOf(S, D + 1)); )
                    this.parts.push({ type: "node", index: -1 }), c++;
            } else o.currentNode = i.pop();
          }
          for (var z = 0, B = r; z < B.length; z++) {
            var U = B[z];
            U.parentNode.removeChild(U);
          }
        },
        P = function (e, t) {
          var n = e.length - t.length;
          return n >= 0 && e.slice(n) === t;
        },
        _ = function (e) {
          return -1 !== e.index;
        },
        j = function () {
          return document.createComment("");
        },
        I =
          /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,
        T = 133;
      function R(e, t) {
        for (
          var n = e.element.content,
            r = e.parts,
            i = document.createTreeWalker(n, T, null, !1),
            o = M(r),
            a = r[o],
            s = -1,
            c = 0,
            u = [],
            l = null;
          i.nextNode();

        ) {
          s++;
          var f = i.currentNode;
          for (
            f.previousSibling === l && (l = null),
              t.has(f) && (u.push(f), null === l && (l = f)),
              null !== l && c++;
            void 0 !== a && a.index === s;

          )
            (a.index = null !== l ? -1 : a.index - c), (a = r[(o = M(r, o))]);
        }
        u.forEach(function (e) {
          return e.parentNode.removeChild(e);
        });
      }
      var L = function (e) {
          for (
            var t = 11 === e.nodeType ? 0 : 1,
              n = document.createTreeWalker(e, T, null, !1);
            n.nextNode();

          )
            t++;
          return t;
        },
        M = function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : -1,
              n = t + 1;
            n < e.length;
            n++
          ) {
            var r = e[n];
            if (_(r)) return n;
          }
          return -1;
        };
      var N = new WeakMap(),
        D = function (e) {
          return function () {
            var t = e.apply(void 0, arguments);
            return N.set(t, !0), t;
          };
        },
        z = function (e) {
          return "function" == typeof e && N.has(e);
        },
        B = {},
        U = {},
        H = (function () {
          function e(t, n, r) {
            w(this, e),
              (this.__parts = []),
              (this.template = t),
              (this.processor = n),
              (this.options = r);
          }
          return (
            b(e, [
              {
                key: "update",
                value: function (e) {
                  var t,
                    n = 0,
                    r = v(this.__parts);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var i = t.value;
                      void 0 !== i && i.setValue(e[n]), n++;
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                  var o,
                    a = v(this.__parts);
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var s = o.value;
                      void 0 !== s && s.commit();
                    }
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                },
              },
              {
                key: "_clone",
                value: function () {
                  for (
                    var e,
                      t = k
                        ? this.template.element.content.cloneNode(!0)
                        : document.importNode(
                            this.template.element.content,
                            !0
                          ),
                      n = [],
                      r = this.template.parts,
                      i = document.createTreeWalker(t, 133, null, !1),
                      o = 0,
                      a = 0,
                      s = i.nextNode();
                    o < r.length;

                  )
                    if (((e = r[o]), _(e))) {
                      for (; a < e.index; )
                        a++,
                          "TEMPLATE" === s.nodeName &&
                            (n.push(s), (i.currentNode = s.content)),
                          null === (s = i.nextNode()) &&
                            ((i.currentNode = n.pop()), (s = i.nextNode()));
                      if ("node" === e.type) {
                        var c = this.processor.handleTextExpression(
                          this.options
                        );
                        c.insertAfterNode(s.previousSibling),
                          this.__parts.push(c);
                      } else {
                        var u;
                        (u = this.__parts).push.apply(
                          u,
                          p(
                            this.processor.handleAttributeExpressions(
                              s,
                              e.name,
                              e.strings,
                              this.options
                            )
                          )
                        );
                      }
                      o++;
                    } else this.__parts.push(void 0), o++;
                  return (
                    k && (document.adoptNode(t), customElements.upgrade(t)), t
                  );
                },
              },
            ]),
            e
          );
        })(),
        F =
          window.trustedTypes &&
          trustedTypes.createPolicy("lit-html", {
            createHTML: function (e) {
              return e;
            },
          }),
        W = " ".concat(S, " "),
        V = (function () {
          function e(t, n, r, i) {
            w(this, e),
              (this.strings = t),
              (this.values = n),
              (this.type = r),
              (this.processor = i);
          }
          return (
            b(e, [
              {
                key: "getHTML",
                value: function () {
                  for (
                    var e = this.strings.length - 1, t = "", n = !1, r = 0;
                    r < e;
                    r++
                  ) {
                    var i = this.strings[r],
                      o = i.lastIndexOf("\x3c!--");
                    n = (o > -1 || n) && -1 === i.indexOf("--\x3e", o + 1);
                    var a = I.exec(i);
                    t +=
                      null === a
                        ? i + (n ? W : O)
                        : i.substr(0, a.index) + a[1] + a[2] + A + a[3] + S;
                  }
                  return (t += this.strings[e]);
                },
              },
              {
                key: "getTemplateElement",
                value: function () {
                  var e = document.createElement("template"),
                    t = this.getHTML();
                  return (
                    void 0 !== F && (t = F.createHTML(t)), (e.innerHTML = t), e
                  );
                },
              },
            ]),
            e
          );
        })(),
        q = (function (e) {
          c(n, e);
          var t = l(n);
          function n() {
            return w(this, n), t.apply(this, arguments);
          }
          return (
            b(n, [
              {
                key: "getHTML",
                value: function () {
                  return "<svg>".concat(
                    s(h(n.prototype), "getHTML", this).call(this),
                    "</svg>"
                  );
                },
              },
              {
                key: "getTemplateElement",
                value: function () {
                  var e = s(h(n.prototype), "getTemplateElement", this).call(
                      this
                    ),
                    t = e.content,
                    r = t.firstChild;
                  return (
                    t.removeChild(r),
                    (function (e, t) {
                      for (
                        var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : null,
                          r =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : null;
                        t !== n;

                      ) {
                        var i = t.nextSibling;
                        e.insertBefore(t, r), (t = i);
                      }
                    })(t, r.firstChild),
                    e
                  );
                },
              },
            ]),
            n
          );
        })(V),
        $ = function (e) {
          return null === e || !("object" === a(e) || "function" == typeof e);
        },
        K = function (e) {
          return Array.isArray(e) || !(!e || !e[Symbol.iterator]);
        },
        G = (function () {
          function e(t, n, r) {
            w(this, e),
              (this.dirty = !0),
              (this.element = t),
              (this.name = n),
              (this.strings = r),
              (this.parts = []);
            for (var i = 0; i < r.length - 1; i++)
              this.parts[i] = this._createPart();
          }
          return (
            b(e, [
              {
                key: "_createPart",
                value: function () {
                  return new Y(this);
                },
              },
              {
                key: "_getValue",
                value: function () {
                  var e = this.strings,
                    t = e.length - 1,
                    n = this.parts;
                  if (1 === t && "" === e[0] && "" === e[1]) {
                    var r = n[0].value;
                    if ("symbol" === a(r)) return String(r);
                    if ("string" == typeof r || !K(r)) return r;
                  }
                  for (var i = "", o = 0; o < t; o++) {
                    i += e[o];
                    var s = n[o];
                    if (void 0 !== s) {
                      var c = s.value;
                      if ($(c) || !K(c))
                        i += "string" == typeof c ? c : String(c);
                      else {
                        var u,
                          l = v(c);
                        try {
                          for (l.s(); !(u = l.n()).done; ) {
                            var f = u.value;
                            i += "string" == typeof f ? f : String(f);
                          }
                        } catch (e) {
                          l.e(e);
                        } finally {
                          l.f();
                        }
                      }
                    }
                  }
                  return (i += e[t]);
                },
              },
              {
                key: "commit",
                value: function () {
                  this.dirty &&
                    ((this.dirty = !1),
                    this.element.setAttribute(this.name, this._getValue()));
                },
              },
            ]),
            e
          );
        })(),
        Y = (function () {
          function e(t) {
            w(this, e), (this.value = void 0), (this.committer = t);
          }
          return (
            b(e, [
              {
                key: "setValue",
                value: function (e) {
                  e === B ||
                    ($(e) && e === this.value) ||
                    ((this.value = e), z(e) || (this.committer.dirty = !0));
                },
              },
              {
                key: "commit",
                value: function () {
                  for (; z(this.value); ) {
                    var e = this.value;
                    (this.value = B), e(this);
                  }
                  this.value !== B && this.committer.commit();
                },
              },
            ]),
            e
          );
        })(),
        J = (function () {
          function e(t) {
            w(this, e),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              (this.options = t);
          }
          return (
            b(e, [
              {
                key: "appendInto",
                value: function (e) {
                  (this.startNode = e.appendChild(j())),
                    (this.endNode = e.appendChild(j()));
                },
              },
              {
                key: "insertAfterNode",
                value: function (e) {
                  (this.startNode = e), (this.endNode = e.nextSibling);
                },
              },
              {
                key: "appendIntoPart",
                value: function (e) {
                  e.__insert((this.startNode = j())),
                    e.__insert((this.endNode = j()));
                },
              },
              {
                key: "insertAfterPart",
                value: function (e) {
                  e.__insert((this.startNode = j())),
                    (this.endNode = e.endNode),
                    (e.endNode = this.startNode);
                },
              },
              {
                key: "setValue",
                value: function (e) {
                  this.__pendingValue = e;
                },
              },
              {
                key: "commit",
                value: function () {
                  if (null !== this.startNode.parentNode) {
                    for (; z(this.__pendingValue); ) {
                      var e = this.__pendingValue;
                      (this.__pendingValue = B), e(this);
                    }
                    var t = this.__pendingValue;
                    t !== B &&
                      ($(t)
                        ? t !== this.value && this.__commitText(t)
                        : t instanceof V
                        ? this.__commitTemplateResult(t)
                        : t instanceof Node
                        ? this.__commitNode(t)
                        : K(t)
                        ? this.__commitIterable(t)
                        : t === U
                        ? ((this.value = U), this.clear())
                        : this.__commitText(t));
                  }
                },
              },
              {
                key: "__insert",
                value: function (e) {
                  this.endNode.parentNode.insertBefore(e, this.endNode);
                },
              },
              {
                key: "__commitNode",
                value: function (e) {
                  this.value !== e &&
                    (this.clear(), this.__insert(e), (this.value = e));
                },
              },
              {
                key: "__commitText",
                value: function (e) {
                  var t = this.startNode.nextSibling,
                    n =
                      "string" == typeof (e = null == e ? "" : e)
                        ? e
                        : String(e);
                  t === this.endNode.previousSibling && 3 === t.nodeType
                    ? (t.data = n)
                    : this.__commitNode(document.createTextNode(n)),
                    (this.value = e);
                },
              },
              {
                key: "__commitTemplateResult",
                value: function (e) {
                  var t = this.options.templateFactory(e);
                  if (this.value instanceof H && this.value.template === t)
                    this.value.update(e.values);
                  else {
                    var n = new H(t, e.processor, this.options),
                      r = n._clone();
                    n.update(e.values), this.__commitNode(r), (this.value = n);
                  }
                },
              },
              {
                key: "__commitIterable",
                value: function (t) {
                  Array.isArray(this.value) ||
                    ((this.value = []), this.clear());
                  var n,
                    r,
                    i = this.value,
                    o = 0,
                    a = v(t);
                  try {
                    for (a.s(); !(r = a.n()).done; ) {
                      var s = r.value;
                      void 0 === (n = i[o]) &&
                        ((n = new e(this.options)),
                        i.push(n),
                        0 === o
                          ? n.appendIntoPart(this)
                          : n.insertAfterPart(i[o - 1])),
                        n.setValue(s),
                        n.commit(),
                        o++;
                    }
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                  o < i.length && ((i.length = o), this.clear(n && n.endNode));
                },
              },
              {
                key: "clear",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.startNode;
                  x(this.startNode.parentNode, e.nextSibling, this.endNode);
                },
              },
            ]),
            e
          );
        })(),
        Z = (function () {
          function e(t, n, r) {
            if (
              (w(this, e),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              2 !== r.length || "" !== r[0] || "" !== r[1])
            )
              throw new Error(
                "Boolean attributes can only contain a single expression"
              );
            (this.element = t), (this.name = n), (this.strings = r);
          }
          return (
            b(e, [
              {
                key: "setValue",
                value: function (e) {
                  this.__pendingValue = e;
                },
              },
              {
                key: "commit",
                value: function () {
                  for (; z(this.__pendingValue); ) {
                    var e = this.__pendingValue;
                    (this.__pendingValue = B), e(this);
                  }
                  if (this.__pendingValue !== B) {
                    var t = !!this.__pendingValue;
                    this.value !== t &&
                      (t
                        ? this.element.setAttribute(this.name, "")
                        : this.element.removeAttribute(this.name),
                      (this.value = t)),
                      (this.__pendingValue = B);
                  }
                },
              },
            ]),
            e
          );
        })(),
        Q = (function (e) {
          c(n, e);
          var t = l(n);
          function n(e, r, i) {
            var o;
            return (
              w(this, n),
              ((o = t.call(this, e, r, i)).single =
                2 === i.length && "" === i[0] && "" === i[1]),
              o
            );
          }
          return (
            b(n, [
              {
                key: "_createPart",
                value: function () {
                  return new X(this);
                },
              },
              {
                key: "_getValue",
                value: function () {
                  return this.single
                    ? this.parts[0].value
                    : s(h(n.prototype), "_getValue", this).call(this);
                },
              },
              {
                key: "commit",
                value: function () {
                  this.dirty &&
                    ((this.dirty = !1),
                    (this.element[this.name] = this._getValue()));
                },
              },
            ]),
            n
          );
        })(G),
        X = (function (e) {
          c(n, e);
          var t = l(n);
          function n() {
            return w(this, n), t.apply(this, arguments);
          }
          return n;
        })(Y),
        ee = !1;
      !(function () {
        try {
          var e = {
            get capture() {
              return (ee = !0), !1;
            },
          };
          window.addEventListener("test", e, e),
            window.removeEventListener("test", e, e);
        } catch (e) {}
      })();
      var te = (function () {
          function e(t, n, r) {
            var i = this;
            w(this, e),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              (this.element = t),
              (this.eventName = n),
              (this.eventContext = r),
              (this.__boundHandleEvent = function (e) {
                return i.handleEvent(e);
              });
          }
          return (
            b(e, [
              {
                key: "setValue",
                value: function (e) {
                  this.__pendingValue = e;
                },
              },
              {
                key: "commit",
                value: function () {
                  for (; z(this.__pendingValue); ) {
                    var e = this.__pendingValue;
                    (this.__pendingValue = B), e(this);
                  }
                  if (this.__pendingValue !== B) {
                    var t = this.__pendingValue,
                      n = this.value,
                      r =
                        null == t ||
                        (null != n &&
                          (t.capture !== n.capture ||
                            t.once !== n.once ||
                            t.passive !== n.passive)),
                      i = null != t && (null == n || r);
                    r &&
                      this.element.removeEventListener(
                        this.eventName,
                        this.__boundHandleEvent,
                        this.__options
                      ),
                      i &&
                        ((this.__options = ne(t)),
                        this.element.addEventListener(
                          this.eventName,
                          this.__boundHandleEvent,
                          this.__options
                        )),
                      (this.value = t),
                      (this.__pendingValue = B);
                  }
                },
              },
              {
                key: "handleEvent",
                value: function (e) {
                  "function" == typeof this.value
                    ? this.value.call(this.eventContext || this.element, e)
                    : this.value.handleEvent(e);
                },
              },
            ]),
            e
          );
        })(),
        ne = function (e) {
          return (
            e &&
            (ee
              ? { capture: e.capture, passive: e.passive, once: e.once }
              : e.capture)
          );
        };
      function re(e) {
        var t = ie.get(e.type);
        void 0 === t &&
          ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
          ie.set(e.type, t));
        var n = t.stringsArray.get(e.strings);
        if (void 0 !== n) return n;
        var r = e.strings.join(S);
        return (
          void 0 === (n = t.keyString.get(r)) &&
            ((n = new C(e, e.getTemplateElement())), t.keyString.set(r, n)),
          t.stringsArray.set(e.strings, n),
          n
        );
      }
      var ie = new Map(),
        oe = new WeakMap(),
        ae = new ((function () {
          function e() {
            w(this, e);
          }
          return (
            b(e, [
              {
                key: "handleAttributeExpressions",
                value: function (e, t, n, r) {
                  var i = t[0];
                  return "." === i
                    ? new Q(e, t.slice(1), n).parts
                    : "@" === i
                    ? [new te(e, t.slice(1), r.eventContext)]
                    : "?" === i
                    ? [new Z(e, t.slice(1), n)]
                    : new G(e, t, n).parts;
                },
              },
              {
                key: "handleTextExpression",
                value: function (e) {
                  return new J(e);
                },
              },
            ]),
            e
          );
        })())();
      "undefined" != typeof window &&
        (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
      var se = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return new V(e, n, "html", ae);
        },
        ce = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return new q(e, n, "svg", ae);
        },
        ue = function (e, t) {
          return "".concat(e, "--").concat(t);
        },
        le = !0;
      void 0 === window.ShadyCSS
        ? (le = !1)
        : void 0 === window.ShadyCSS.prepareTemplateDom &&
          (console.warn(
            "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
          ),
          (le = !1));
      var fe = function (e) {
          return function (t) {
            var n = ue(t.type, e),
              r = ie.get(n);
            void 0 === r &&
              ((r = { stringsArray: new WeakMap(), keyString: new Map() }),
              ie.set(n, r));
            var i = r.stringsArray.get(t.strings);
            if (void 0 !== i) return i;
            var o = t.strings.join(S);
            if (void 0 === (i = r.keyString.get(o))) {
              var a = t.getTemplateElement();
              le && window.ShadyCSS.prepareTemplateDom(a, e),
                (i = new C(t, a)),
                r.keyString.set(o, i);
            }
            return r.stringsArray.set(t.strings, i), i;
          };
        },
        de = ["html", "svg"],
        he = new Set(),
        pe = function (e, t, n) {
          he.add(e);
          var r = n ? n.element : document.createElement("template"),
            i = t.querySelectorAll("style"),
            o = i.length;
          if (0 !== o) {
            for (var a = document.createElement("style"), s = 0; s < o; s++) {
              var c = i[s];
              c.parentNode.removeChild(c), (a.textContent += c.textContent);
            }
            !(function (e) {
              de.forEach(function (t) {
                var n = ie.get(ue(t, e));
                void 0 !== n &&
                  n.keyString.forEach(function (e) {
                    var t = e.element.content,
                      n = new Set();
                    Array.from(t.querySelectorAll("style")).forEach(function (
                      e
                    ) {
                      n.add(e);
                    }),
                      R(e, n);
                  });
              });
            })(e);
            var u = r.content;
            n
              ? (function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    r = e.element.content,
                    i = e.parts;
                  if (null != n)
                    for (
                      var o = document.createTreeWalker(r, T, null, !1),
                        a = M(i),
                        s = 0,
                        c = -1;
                      o.nextNode();

                    ) {
                      for (
                        c++,
                          o.currentNode === n &&
                            ((s = L(t)), n.parentNode.insertBefore(t, n));
                        -1 !== a && i[a].index === c;

                      ) {
                        if (s > 0) {
                          for (; -1 !== a; ) (i[a].index += s), (a = M(i, a));
                          return;
                        }
                        a = M(i, a);
                      }
                    }
                  else r.appendChild(t);
                })(n, a, u.firstChild)
              : u.insertBefore(a, u.firstChild),
              window.ShadyCSS.prepareTemplateStyles(r, e);
            var l = u.querySelector("style");
            if (window.ShadyCSS.nativeShadow && null !== l)
              t.insertBefore(l.cloneNode(!0), t.firstChild);
            else if (n) {
              u.insertBefore(a, u.firstChild);
              var f = new Set();
              f.add(a), R(n, f);
            }
          } else window.ShadyCSS.prepareTemplateStyles(r, e);
        };
      window.JSCompiler_renameProperty = function (e, t) {
        return e;
      };
      var ve = {
          toAttribute: function (e, t) {
            switch (t) {
              case Boolean:
                return e ? "" : null;
              case Object:
              case Array:
                return null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute: function (e, t) {
            switch (t) {
              case Boolean:
                return null !== e;
              case Number:
                return null === e ? null : Number(e);
              case Object:
              case Array:
                return JSON.parse(e);
            }
            return e;
          },
        },
        me = function (e, t) {
          return t !== e && (t == t || e == e);
        },
        ye = {
          attribute: !0,
          type: String,
          converter: ve,
          reflect: !1,
          hasChanged: me,
        },
        ge = "finalized",
        be = (function (e) {
          c(o, e);
          var t,
            n,
            i = l(o);
          function o() {
            var e;
            return w(this, o), (e = i.call(this)).initialize(), e;
          }
          return (
            b(
              o,
              [
                {
                  key: "initialize",
                  value: function () {
                    var e = this;
                    (this._updateState = 0),
                      (this._updatePromise = new Promise(function (t) {
                        return (e._enableUpdatingResolver = t);
                      })),
                      (this._changedProperties = new Map()),
                      this._saveInstanceProperties(),
                      this.requestUpdateInternal();
                  },
                },
                {
                  key: "_saveInstanceProperties",
                  value: function () {
                    var e = this;
                    this.constructor._classProperties.forEach(function (t, n) {
                      if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        delete e[n],
                          e._instanceProperties ||
                            (e._instanceProperties = new Map()),
                          e._instanceProperties.set(n, r);
                      }
                    });
                  },
                },
                {
                  key: "_applyInstanceProperties",
                  value: function () {
                    var e = this;
                    this._instanceProperties.forEach(function (t, n) {
                      return (e[n] = t);
                    }),
                      (this._instanceProperties = void 0);
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    this.enableUpdating();
                  },
                },
                {
                  key: "enableUpdating",
                  value: function () {
                    void 0 !== this._enableUpdatingResolver &&
                      (this._enableUpdatingResolver(),
                      (this._enableUpdatingResolver = void 0));
                  },
                },
                { key: "disconnectedCallback", value: function () {} },
                {
                  key: "attributeChangedCallback",
                  value: function (e, t, n) {
                    t !== n && this._attributeToProperty(e, n);
                  },
                },
                {
                  key: "_propertyToAttribute",
                  value: function (e, t) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : ye,
                      r = this.constructor,
                      i = r._attributeNameForProperty(e, n);
                    if (void 0 !== i) {
                      var o = r._propertyValueToAttribute(t, n);
                      if (void 0 === o) return;
                      (this._updateState = 8 | this._updateState),
                        null == o
                          ? this.removeAttribute(i)
                          : this.setAttribute(i, o),
                        (this._updateState = -9 & this._updateState);
                    }
                  },
                },
                {
                  key: "_attributeToProperty",
                  value: function (e, t) {
                    if (!(8 & this._updateState)) {
                      var n = this.constructor,
                        r = n._attributeToPropertyMap.get(e);
                      if (void 0 !== r) {
                        var i = n.getPropertyOptions(r);
                        (this._updateState = 16 | this._updateState),
                          (this[r] = n._propertyValueFromAttribute(t, i)),
                          (this._updateState = -17 & this._updateState);
                      }
                    }
                  },
                },
                {
                  key: "requestUpdateInternal",
                  value: function (e, t, n) {
                    var r = !0;
                    if (void 0 !== e) {
                      var i = this.constructor;
                      (n = n || i.getPropertyOptions(e)),
                        i._valueHasChanged(this[e], t, n.hasChanged)
                          ? (this._changedProperties.has(e) ||
                              this._changedProperties.set(e, t),
                            !0 !== n.reflect ||
                              16 & this._updateState ||
                              (void 0 === this._reflectingProperties &&
                                (this._reflectingProperties = new Map()),
                              this._reflectingProperties.set(e, n)))
                          : (r = !1);
                    }
                    !this._hasRequestedUpdate &&
                      r &&
                      (this._updatePromise = this._enqueueUpdate());
                  },
                },
                {
                  key: "requestUpdate",
                  value: function (e, t) {
                    return (
                      this.requestUpdateInternal(e, t), this.updateComplete
                    );
                  },
                },
                {
                  key: "_enqueueUpdate",
                  value:
                    ((t = regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._updateState = 4 | this._updateState),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this._updatePromise
                                );
                              case 4:
                                e.next = 8;
                                break;
                              case 6:
                                (e.prev = 6), (e.t0 = e.catch(1));
                              case 8:
                                if (null == (t = this.performUpdate())) {
                                  e.next = 12;
                                  break;
                                }
                                return (e.next = 12), t;
                              case 12:
                                return e.abrupt(
                                  "return",
                                  !this._hasRequestedUpdate
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 6]]
                      );
                    })),
                    (n = function () {
                      var e = this,
                        n = arguments;
                      return new Promise(function (i, o) {
                        var a = t.apply(e, n);
                        function s(e) {
                          r(a, i, o, s, c, "next", e);
                        }
                        function c(e) {
                          r(a, i, o, s, c, "throw", e);
                        }
                        s(void 0);
                      });
                    }),
                    function () {
                      return n.apply(this, arguments);
                    }),
                },
                {
                  key: "_hasRequestedUpdate",
                  get: function () {
                    return 4 & this._updateState;
                  },
                },
                {
                  key: "hasUpdated",
                  get: function () {
                    return 1 & this._updateState;
                  },
                },
                {
                  key: "performUpdate",
                  value: function () {
                    if (this._hasRequestedUpdate) {
                      this._instanceProperties &&
                        this._applyInstanceProperties();
                      var e = !1,
                        t = this._changedProperties;
                      try {
                        (e = this.shouldUpdate(t))
                          ? this.update(t)
                          : this._markUpdated();
                      } catch (t) {
                        throw ((e = !1), this._markUpdated(), t);
                      }
                      e &&
                        (1 & this._updateState ||
                          ((this._updateState = 1 | this._updateState),
                          this.firstUpdated(t)),
                        this.updated(t));
                    }
                  },
                },
                {
                  key: "_markUpdated",
                  value: function () {
                    (this._changedProperties = new Map()),
                      (this._updateState = -5 & this._updateState);
                  },
                },
                {
                  key: "updateComplete",
                  get: function () {
                    return this._getUpdateComplete();
                  },
                },
                {
                  key: "_getUpdateComplete",
                  value: function () {
                    return this.getUpdateComplete();
                  },
                },
                {
                  key: "getUpdateComplete",
                  value: function () {
                    return this._updatePromise;
                  },
                },
                {
                  key: "shouldUpdate",
                  value: function (e) {
                    return !0;
                  },
                },
                {
                  key: "update",
                  value: function (e) {
                    var t = this;
                    void 0 !== this._reflectingProperties &&
                      this._reflectingProperties.size > 0 &&
                      (this._reflectingProperties.forEach(function (e, n) {
                        return t._propertyToAttribute(n, t[n], e);
                      }),
                      (this._reflectingProperties = void 0)),
                      this._markUpdated();
                  },
                },
                { key: "updated", value: function (e) {} },
                { key: "firstUpdated", value: function (e) {} },
              ],
              [
                {
                  key: "observedAttributes",
                  get: function () {
                    var e = this;
                    this.finalize();
                    var t = [];
                    return (
                      this._classProperties.forEach(function (n, r) {
                        var i = e._attributeNameForProperty(r, n);
                        void 0 !== i &&
                          (e._attributeToPropertyMap.set(i, r), t.push(i));
                      }),
                      t
                    );
                  },
                },
                {
                  key: "_ensureClassProperties",
                  value: function () {
                    var e = this;
                    if (
                      !this.hasOwnProperty(
                        JSCompiler_renameProperty("_classProperties", this)
                      )
                    ) {
                      this._classProperties = new Map();
                      var t = Object.getPrototypeOf(this)._classProperties;
                      void 0 !== t &&
                        t.forEach(function (t, n) {
                          return e._classProperties.set(n, t);
                        });
                    }
                  },
                },
                {
                  key: "createProperty",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : ye;
                    if (
                      (this._ensureClassProperties(),
                      this._classProperties.set(e, t),
                      !t.noAccessor && !this.prototype.hasOwnProperty(e))
                    ) {
                      var n = "symbol" === a(e) ? Symbol() : "__".concat(e),
                        r = this.getPropertyDescriptor(e, n, t);
                      void 0 !== r &&
                        Object.defineProperty(this.prototype, e, r);
                    }
                  },
                },
                {
                  key: "getPropertyDescriptor",
                  value: function (e, t, n) {
                    return {
                      get: function () {
                        return this[t];
                      },
                      set: function (r) {
                        var i = this[e];
                        (this[t] = r), this.requestUpdateInternal(e, i, n);
                      },
                      configurable: !0,
                      enumerable: !0,
                    };
                  },
                },
                {
                  key: "getPropertyOptions",
                  value: function (e) {
                    return (
                      (this._classProperties && this._classProperties.get(e)) ||
                      ye
                    );
                  },
                },
                {
                  key: "finalize",
                  value: function () {
                    var e = Object.getPrototypeOf(this);
                    if (
                      (e.hasOwnProperty(ge) || e.finalize(),
                      (this.finalized = !0),
                      this._ensureClassProperties(),
                      (this._attributeToPropertyMap = new Map()),
                      this.hasOwnProperty(
                        JSCompiler_renameProperty("properties", this)
                      ))
                    ) {
                      var t,
                        n = this.properties,
                        r = v(
                          [].concat(
                            p(Object.getOwnPropertyNames(n)),
                            p(
                              "function" == typeof Object.getOwnPropertySymbols
                                ? Object.getOwnPropertySymbols(n)
                                : []
                            )
                          )
                        );
                      try {
                        for (r.s(); !(t = r.n()).done; ) {
                          var i = t.value;
                          this.createProperty(i, n[i]);
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                    }
                  },
                },
                {
                  key: "_attributeNameForProperty",
                  value: function (e, t) {
                    var n = t.attribute;
                    return !1 === n
                      ? void 0
                      : "string" == typeof n
                      ? n
                      : "string" == typeof e
                      ? e.toLowerCase()
                      : void 0;
                  },
                },
                {
                  key: "_valueHasChanged",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : me;
                    return n(e, t);
                  },
                },
                {
                  key: "_propertyValueFromAttribute",
                  value: function (e, t) {
                    var n = t.type,
                      r = t.converter || ve,
                      i = "function" == typeof r ? r : r.fromAttribute;
                    return i ? i(e, n) : e;
                  },
                },
                {
                  key: "_propertyValueToAttribute",
                  value: function (e, t) {
                    if (void 0 !== t.reflect) {
                      var n = t.type,
                        r = t.converter;
                      return ((r && r.toAttribute) || ve.toAttribute)(e, n);
                    }
                  },
                },
              ]
            ),
            o
          );
        })(i(HTMLElement));
      be.finalized = !0;
      var we =
          window.ShadowRoot &&
          (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        ke = Symbol(),
        xe = (function () {
          function e(t, n) {
            if ((w(this, e), n !== ke))
              throw new Error(
                "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
              );
            this.cssText = t;
          }
          return (
            b(e, [
              {
                key: "styleSheet",
                get: function () {
                  return (
                    void 0 === this._styleSheet &&
                      (we
                        ? ((this._styleSheet = new CSSStyleSheet()),
                          this._styleSheet.replaceSync(this.cssText))
                        : (this._styleSheet = null)),
                    this._styleSheet
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return this.cssText;
                },
              },
            ]),
            e
          );
        })(),
        Se = function (e) {
          if (e instanceof xe) return e.cssText;
          if ("number" == typeof e) return e;
          throw new Error(
            "Value passed to 'css' function must be a 'css' function result: ".concat(
              e,
              ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."
            )
          );
        },
        Oe = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var i = n.reduce(function (t, n, r) {
            return t + Se(n) + e[r + 1];
          }, e[0]);
          return new xe(i, ke);
        };
      (window.litElementVersions || (window.litElementVersions = [])).push(
        "2.5.1"
      );
      var Ee = {},
        Ae = (function (e) {
          c(n, e);
          var t = l(n);
          function n() {
            return w(this, n), t.apply(this, arguments);
          }
          return (
            b(
              n,
              [
                {
                  key: "initialize",
                  value: function () {
                    s(h(n.prototype), "initialize", this).call(this),
                      this.constructor._getUniqueStyles(),
                      (this.renderRoot = this.createRenderRoot()),
                      window.ShadowRoot &&
                        this.renderRoot instanceof window.ShadowRoot &&
                        this.adoptStyles();
                  },
                },
                {
                  key: "createRenderRoot",
                  value: function () {
                    return this.attachShadow(
                      this.constructor.shadowRootOptions
                    );
                  },
                },
                {
                  key: "adoptStyles",
                  value: function () {
                    var e = this.constructor._styles;
                    0 !== e.length &&
                      (void 0 === window.ShadyCSS ||
                      window.ShadyCSS.nativeShadow
                        ? we
                          ? (this.renderRoot.adoptedStyleSheets = e.map(
                              function (e) {
                                return e instanceof CSSStyleSheet
                                  ? e
                                  : e.styleSheet;
                              }
                            ))
                          : (this._needsShimAdoptedStyleSheets = !0)
                        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                            e.map(function (e) {
                              return e.cssText;
                            }),
                            this.localName
                          ));
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    s(h(n.prototype), "connectedCallback", this).call(this),
                      this.hasUpdated &&
                        void 0 !== window.ShadyCSS &&
                        window.ShadyCSS.styleElement(this);
                  },
                },
                {
                  key: "update",
                  value: function (e) {
                    var t = this,
                      r = this.render();
                    s(h(n.prototype), "update", this).call(this, e),
                      r !== Ee &&
                        this.constructor.render(r, this.renderRoot, {
                          scopeName: this.localName,
                          eventContext: this,
                        }),
                      this._needsShimAdoptedStyleSheets &&
                        ((this._needsShimAdoptedStyleSheets = !1),
                        this.constructor._styles.forEach(function (e) {
                          var n = document.createElement("style");
                          (n.textContent = e.cssText),
                            t.renderRoot.appendChild(n);
                        }));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Ee;
                  },
                },
              ],
              [
                {
                  key: "getStyles",
                  value: function () {
                    return this.styles;
                  },
                },
                {
                  key: "_getUniqueStyles",
                  value: function () {
                    if (
                      !this.hasOwnProperty(
                        JSCompiler_renameProperty("_styles", this)
                      )
                    ) {
                      var e = this.getStyles();
                      if (Array.isArray(e)) {
                        var t = (function e(t, n) {
                            return t.reduceRight(function (t, n) {
                              return Array.isArray(n) ? e(n, t) : (t.add(n), t);
                            }, n);
                          })(e, new Set()),
                          n = [];
                        t.forEach(function (e) {
                          return n.unshift(e);
                        }),
                          (this._styles = n);
                      } else this._styles = void 0 === e ? [] : [e];
                      this._styles = this._styles.map(function (e) {
                        if (e instanceof CSSStyleSheet && !we) {
                          var t = Array.prototype.slice
                            .call(e.cssRules)
                            .reduce(function (e, t) {
                              return e + t.cssText;
                            }, "");
                          return new xe(String(t), ke);
                        }
                        return e;
                      });
                    }
                  },
                },
              ]
            ),
            n
          );
        })(be);
      (Ae.finalized = !0),
        (Ae.render = function (e, t, n) {
          if (!n || "object" !== a(n) || !n.scopeName)
            throw new Error("The `scopeName` option is required.");
          var r = n.scopeName,
            i = oe.has(t),
            o = le && 11 === t.nodeType && !!t.host,
            s = o && !he.has(r),
            c = s ? document.createDocumentFragment() : t;
          if (
            ((function (e, t, n) {
              var r = oe.get(t);
              void 0 === r &&
                (x(t, t.firstChild),
                oe.set(
                  t,
                  (r = new J(Object.assign({ templateFactory: re }, n)))
                ),
                r.appendInto(t)),
                r.setValue(e),
                r.commit();
            })(e, c, Object.assign({ templateFactory: fe(r) }, n)),
            s)
          ) {
            var u = oe.get(c);
            oe.delete(c);
            var l = u.value instanceof H ? u.value.template : void 0;
            pe(r, c, l), x(t, t.firstChild), t.appendChild(c), oe.set(t, u);
          }
          !i && o && window.ShadyCSS.styleElement(t.host);
        }),
        (Ae.shadowRootOptions = { mode: "open" });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return V;
      }),
        n.d(t, "b", function () {
          return z;
        });
      n(34),
        n(36),
        n(17),
        n(18),
        n(12),
        n(10),
        n(93),
        n(13),
        n(16),
        n(40),
        n(45),
        n(54),
        n(33),
        n(65),
        n(27),
        n(39),
        n(160),
        n(129),
        n(191),
        n(21),
        n(26),
        n(29),
        n(19),
        n(55),
        n(28),
        n(161),
        n(102);
      var r = n(44);
      function i(e, t, n) {
        return (i =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = m(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return b(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          g(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && v(e, t);
      }
      function u(e) {
        var t = p();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var i = m(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      function l(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t) ? f(e) : t;
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (d = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return h(e, arguments, m(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            v(r, e)
          );
        })(e);
      }
      function h(e, t, n) {
        return (h = p()
          ? Reflect.construct
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new (Function.bind.apply(e, r))();
              return n && v(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function p() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = g(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function g(e, t) {
        if (e) {
          if ("string" == typeof e) return b(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? b(e, t)
              : void 0
          );
        }
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function w(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function x(e, t, n) {
        return t && k(e.prototype, t), n && k(e, n), e;
      }
      n.d(t, "c", function () {
        return r.b;
      }),
        n.d(t, "d", function () {
          return r.a;
        }),
        n.d(t, "e", function () {
          return r.c;
        });
      var S,
        O,
        E,
        A,
        C,
        P,
        _,
        j,
        I,
        T,
        R =
          window.ShadowRoot &&
          (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        L = Symbol(),
        M = (function () {
          function e(t, n) {
            if ((w(this, e), n !== L))
              throw Error(
                "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
              );
            this.cssText = t;
          }
          return (
            x(e, [
              {
                key: "styleSheet",
                get: function () {
                  return (
                    R &&
                      void 0 === this.t &&
                      ((this.t = new CSSStyleSheet()),
                      this.t.replaceSync(this.cssText)),
                    this.t
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return this.cssText;
                },
              },
            ]),
            e
          );
        })(),
        N = new Map(),
        D = function (e) {
          var t = N.get(e);
          return void 0 === t && N.set(e, (t = new M(e, L))), t;
        },
        z = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var i =
            1 === e.length
              ? e[0]
              : n.reduce(function (t, n, r) {
                  return (
                    t +
                    (function (e) {
                      if (e instanceof M) return e.cssText;
                      if ("number" == typeof e) return e;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          e +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(n) +
                    e[r + 1]
                  );
                }, e[0]);
          return D(i);
        },
        B = R
          ? function (e) {
              return e;
            }
          : function (e) {
              return e instanceof CSSStyleSheet
                ? (function (e) {
                    var t,
                      n = "",
                      r = y(e.cssRules);
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        n += t.value.cssText;
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                    return (function (e) {
                      return D("string" == typeof e ? e : e + "");
                    })(n);
                  })(e)
                : e;
            },
        U = {
          toAttribute: function (e, t) {
            switch (t) {
              case Boolean:
                e = e ? "" : null;
                break;
              case Object:
              case Array:
                e = null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute: function (e, t) {
            var n = e;
            switch (t) {
              case Boolean:
                n = null !== e;
                break;
              case Number:
                n = null === e ? null : Number(e);
                break;
              case Object:
              case Array:
                try {
                  n = JSON.parse(e);
                } catch (e) {
                  n = null;
                }
            }
            return n;
          },
        },
        H = function (e, t) {
          return t !== e && (t == t || e == e);
        },
        F = {
          attribute: !0,
          type: String,
          converter: U,
          reflect: !1,
          hasChanged: H,
        },
        W = (function (e) {
          c(i, e);
          var t,
            n,
            r = u(i);
          function i() {
            var e;
            return (
              w(this, i),
              ((e = r.call(this)).Πi = new Map()),
              (e.Πo = void 0),
              (e.Πl = void 0),
              (e.isUpdatePending = !1),
              (e.hasUpdated = !1),
              (e.Πh = null),
              e.u(),
              e
            );
          }
          return (
            x(
              i,
              [
                {
                  key: "u",
                  value: function () {
                    var e,
                      t = this;
                    (this.Πg = new Promise(function (e) {
                      return (t.enableUpdating = e);
                    })),
                      (this.L = new Map()),
                      this.Π_(),
                      this.requestUpdate(),
                      null === (e = this.constructor.v) ||
                        void 0 === e ||
                        e.forEach(function (e) {
                          return e(t);
                        });
                  },
                },
                {
                  key: "addController",
                  value: function (e) {
                    var t, n;
                    (null !== (t = this.ΠU) && void 0 !== t
                      ? t
                      : (this.ΠU = [])
                    ).push(e),
                      void 0 !== this.renderRoot &&
                        this.isConnected &&
                        (null === (n = e.hostConnected) ||
                          void 0 === n ||
                          n.call(e));
                  },
                },
                {
                  key: "removeController",
                  value: function (e) {
                    var t;
                    null === (t = this.ΠU) ||
                      void 0 === t ||
                      t.splice(this.ΠU.indexOf(e) >>> 0, 1);
                  },
                },
                {
                  key: "Π_",
                  value: function () {
                    var e = this;
                    this.constructor.elementProperties.forEach(function (t, n) {
                      e.hasOwnProperty(n) && (e.Πi.set(n, e[n]), delete e[n]);
                    });
                  },
                },
                {
                  key: "createRenderRoot",
                  value: function () {
                    var e,
                      t =
                        null !== (e = this.shadowRoot) && void 0 !== e
                          ? e
                          : this.attachShadow(
                              this.constructor.shadowRootOptions
                            );
                    return (
                      (function (e, t) {
                        R
                          ? (e.adoptedStyleSheets = t.map(function (e) {
                              return e instanceof CSSStyleSheet
                                ? e
                                : e.styleSheet;
                            }))
                          : t.forEach(function (t) {
                              var n = document.createElement("style");
                              (n.textContent = t.cssText), e.appendChild(n);
                            });
                      })(t, this.constructor.elementStyles),
                      t
                    );
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    var e;
                    void 0 === this.renderRoot &&
                      (this.renderRoot = this.createRenderRoot()),
                      this.enableUpdating(!0),
                      null === (e = this.ΠU) ||
                        void 0 === e ||
                        e.forEach(function (e) {
                          var t;
                          return null === (t = e.hostConnected) || void 0 === t
                            ? void 0
                            : t.call(e);
                        }),
                      this.Πl && (this.Πl(), (this.Πo = this.Πl = void 0));
                  },
                },
                { key: "enableUpdating", value: function (e) {} },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    var e,
                      t = this;
                    null === (e = this.ΠU) ||
                      void 0 === e ||
                      e.forEach(function (e) {
                        var t;
                        return null === (t = e.hostDisconnected) || void 0 === t
                          ? void 0
                          : t.call(e);
                      }),
                      (this.Πo = new Promise(function (e) {
                        return (t.Πl = e);
                      }));
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function (e, t, n) {
                    this.K(e, n);
                  },
                },
                {
                  key: "Πj",
                  value: function (e, t) {
                    var n,
                      r,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : F,
                      o = this.constructor.Πp(e, i);
                    if (void 0 !== o && !0 === i.reflect) {
                      var a = (
                        null !==
                          (r =
                            null === (n = i.converter) || void 0 === n
                              ? void 0
                              : n.toAttribute) && void 0 !== r
                          ? r
                          : U.toAttribute
                      )(t, i.type);
                      (this.Πh = e),
                        null == a
                          ? this.removeAttribute(o)
                          : this.setAttribute(o, a),
                        (this.Πh = null);
                    }
                  },
                },
                {
                  key: "K",
                  value: function (e, t) {
                    var n,
                      r,
                      i,
                      o = this.constructor,
                      a = o.Πm.get(e);
                    if (void 0 !== a && this.Πh !== a) {
                      var s = o.getPropertyOptions(a),
                        c = s.converter,
                        u =
                          null !==
                            (i =
                              null !==
                                (r =
                                  null === (n = c) || void 0 === n
                                    ? void 0
                                    : n.fromAttribute) && void 0 !== r
                                ? r
                                : "function" == typeof c
                                ? c
                                : null) && void 0 !== i
                            ? i
                            : U.fromAttribute;
                      (this.Πh = a), (this[a] = u(t, s.type)), (this.Πh = null);
                    }
                  },
                },
                {
                  key: "requestUpdate",
                  value: function (e, t, n) {
                    var r = !0;
                    void 0 !== e &&
                      ((
                        (n = n || this.constructor.getPropertyOptions(e))
                          .hasChanged || H
                      )(this[e], t)
                        ? (this.L.has(e) || this.L.set(e, t),
                          !0 === n.reflect &&
                            this.Πh !== e &&
                            (void 0 === this.Πk && (this.Πk = new Map()),
                            this.Πk.set(e, n)))
                        : (r = !1)),
                      !this.isUpdatePending && r && (this.Πg = this.Πq());
                  },
                },
                {
                  key: "Πq",
                  value:
                    ((t = regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this.isUpdatePending = !0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this.Πg
                                );
                              case 4:
                                if (!this.Πo) {
                                  e.next = 9;
                                  break;
                                }
                                return (e.next = 7), this.Πo;
                              case 7:
                                e.next = 4;
                                break;
                              case 9:
                                e.next = 14;
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(1)),
                                  Promise.reject(e.t0);
                              case 14:
                                if (
                                  ((t = this.performUpdate()),
                                  (e.t1 = null != t),
                                  !e.t1)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                return (e.next = 19), t;
                              case 19:
                                return e.abrupt(
                                  "return",
                                  !this.isUpdatePending
                                );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 11]]
                      );
                    })),
                    (n = function () {
                      var e = this,
                        n = arguments;
                      return new Promise(function (r, i) {
                        var o = t.apply(e, n);
                        function a(e) {
                          s(o, r, i, a, c, "next", e);
                        }
                        function c(e) {
                          s(o, r, i, a, c, "throw", e);
                        }
                        a(void 0);
                      });
                    }),
                    function () {
                      return n.apply(this, arguments);
                    }),
                },
                {
                  key: "performUpdate",
                  value: function () {
                    var e,
                      t = this;
                    if (this.isUpdatePending) {
                      this.hasUpdated,
                        this.Πi &&
                          (this.Πi.forEach(function (e, n) {
                            return (t[n] = e);
                          }),
                          (this.Πi = void 0));
                      var n = !1,
                        r = this.L;
                      try {
                        (n = this.shouldUpdate(r))
                          ? (this.willUpdate(r),
                            null === (e = this.ΠU) ||
                              void 0 === e ||
                              e.forEach(function (e) {
                                var t;
                                return null === (t = e.hostUpdate) ||
                                  void 0 === t
                                  ? void 0
                                  : t.call(e);
                              }),
                            this.update(r))
                          : this.Π$();
                      } catch (e) {
                        throw ((n = !1), this.Π$(), e);
                      }
                      n && this.E(r);
                    }
                  },
                },
                { key: "willUpdate", value: function (e) {} },
                {
                  key: "E",
                  value: function (e) {
                    var t;
                    null === (t = this.ΠU) ||
                      void 0 === t ||
                      t.forEach(function (e) {
                        var t;
                        return null === (t = e.hostUpdated) || void 0 === t
                          ? void 0
                          : t.call(e);
                      }),
                      this.hasUpdated ||
                        ((this.hasUpdated = !0), this.firstUpdated(e)),
                      this.updated(e);
                  },
                },
                {
                  key: "Π$",
                  value: function () {
                    (this.L = new Map()), (this.isUpdatePending = !1);
                  },
                },
                {
                  key: "updateComplete",
                  get: function () {
                    return this.getUpdateComplete();
                  },
                },
                {
                  key: "getUpdateComplete",
                  value: function () {
                    return this.Πg;
                  },
                },
                {
                  key: "shouldUpdate",
                  value: function (e) {
                    return !0;
                  },
                },
                {
                  key: "update",
                  value: function (e) {
                    var t = this;
                    void 0 !== this.Πk &&
                      (this.Πk.forEach(function (e, n) {
                        return t.Πj(n, t[n], e);
                      }),
                      (this.Πk = void 0)),
                      this.Π$();
                  },
                },
                { key: "updated", value: function (e) {} },
                { key: "firstUpdated", value: function (e) {} },
              ],
              [
                {
                  key: "addInitializer",
                  value: function (e) {
                    var t;
                    (null !== (t = this.v) && void 0 !== t) || (this.v = []),
                      this.v.push(e);
                  },
                },
                {
                  key: "observedAttributes",
                  get: function () {
                    var e = this;
                    this.finalize();
                    var t = [];
                    return (
                      this.elementProperties.forEach(function (n, r) {
                        var i = e.Πp(r, n);
                        void 0 !== i && (e.Πm.set(i, r), t.push(i));
                      }),
                      t
                    );
                  },
                },
                {
                  key: "createProperty",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : F;
                    if (
                      (t.state && (t.attribute = !1),
                      this.finalize(),
                      this.elementProperties.set(e, t),
                      !t.noAccessor && !this.prototype.hasOwnProperty(e))
                    ) {
                      var n = "symbol" == a(e) ? Symbol() : "__" + e,
                        r = this.getPropertyDescriptor(e, n, t);
                      void 0 !== r &&
                        Object.defineProperty(this.prototype, e, r);
                    }
                  },
                },
                {
                  key: "getPropertyDescriptor",
                  value: function (e, t, n) {
                    return {
                      get: function () {
                        return this[t];
                      },
                      set: function (r) {
                        var i = this[e];
                        (this[t] = r), this.requestUpdate(e, i, n);
                      },
                      configurable: !0,
                      enumerable: !0,
                    };
                  },
                },
                {
                  key: "getPropertyOptions",
                  value: function (e) {
                    return this.elementProperties.get(e) || F;
                  },
                },
                {
                  key: "finalize",
                  value: function () {
                    if (this.hasOwnProperty("finalized")) return !1;
                    this.finalized = !0;
                    var e = Object.getPrototypeOf(this);
                    if (
                      (e.finalize(),
                      (this.elementProperties = new Map(e.elementProperties)),
                      (this.Πm = new Map()),
                      this.hasOwnProperty("properties"))
                    ) {
                      var t,
                        n = this.properties,
                        r = y(
                          [].concat(
                            o(Object.getOwnPropertyNames(n)),
                            o(Object.getOwnPropertySymbols(n))
                          )
                        );
                      try {
                        for (r.s(); !(t = r.n()).done; ) {
                          var i = t.value;
                          this.createProperty(i, n[i]);
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                    }
                    return (
                      (this.elementStyles = this.finalizeStyles(this.styles)),
                      !0
                    );
                  },
                },
                {
                  key: "finalizeStyles",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e)) {
                      var n,
                        r = y(new Set(e.flat(1 / 0).reverse()));
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var i = n.value;
                          t.unshift(B(i));
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                    } else void 0 !== e && t.push(B(e));
                    return t;
                  },
                },
                {
                  key: "Πp",
                  value: function (e, t) {
                    var n = t.attribute;
                    return !1 === n
                      ? void 0
                      : "string" == typeof n
                      ? n
                      : "string" == typeof e
                      ? e.toLowerCase()
                      : void 0;
                  },
                },
              ]
            ),
            i
          );
        })(d(HTMLElement));
      (W.finalized = !0),
        (W.elementProperties = new Map()),
        (W.elementStyles = []),
        (W.shadowRootOptions = { mode: "open" }),
        null === (O = (S = globalThis).reactiveElementPlatformSupport) ||
          void 0 === O ||
          O.call(S, { ReactiveElement: W }),
        (null !== (E = (A = globalThis).reactiveElementVersions) && void 0 !== E
          ? E
          : (A.reactiveElementVersions = [])
        ).push("1.0.0-rc.2"),
        (null !== (C = (T = globalThis).litElementVersions) && void 0 !== C
          ? C
          : (T.litElementVersions = [])
        ).push("3.0.0-rc.2");
      var V = (function (e) {
        c(n, e);
        var t = u(n);
        function n() {
          var e;
          return (
            w(this, n),
            ((e = t.apply(this, arguments)).renderOptions = { host: f(e) }),
            (e.Φt = void 0),
            e
          );
        }
        return (
          x(n, [
            {
              key: "createRenderRoot",
              value: function () {
                var e,
                  t,
                  r = i(m(n.prototype), "createRenderRoot", this).call(this);
                return (
                  (null !== (e = (t = this.renderOptions).renderBefore) &&
                    void 0 !== e) ||
                    (t.renderBefore = r.firstChild),
                  r
                );
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this.render();
                i(m(n.prototype), "update", this).call(this, e),
                  (this.Φt = Object(r.c)(
                    t,
                    this.renderRoot,
                    this.renderOptions
                  ));
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e;
                i(m(n.prototype), "connectedCallback", this).call(this),
                  null === (e = this.Φt) || void 0 === e || e.setConnected(!0);
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                var e;
                i(m(n.prototype), "disconnectedCallback", this).call(this),
                  null === (e = this.Φt) || void 0 === e || e.setConnected(!1);
              },
            },
            {
              key: "render",
              value: function () {
                return r.e;
              },
            },
          ]),
          n
        );
      })(W);
      (V.finalized = !0),
        (V._$litElement$ = !0),
        null === (_ = (P = globalThis).litElementHydrateSupport) ||
          void 0 === _ ||
          _.call(P, { LitElement: V }),
        null === (I = (j = globalThis).litElementPlatformSupport) ||
          void 0 === I ||
          I.call(j, { LitElement: V });
    },
    function (e, t, n) {
      var r = n(4),
        i = n(31).f,
        o = n(23),
        a = n(20),
        s = n(107),
        c = n(139),
        u = n(59);
      e.exports = function (e, t) {
        var n,
          l,
          f,
          d,
          h,
          p = e.target,
          v = e.global,
          m = e.stat;
        if ((n = v ? r : m ? r[p] || s(p, {}) : (r[p] || {}).prototype))
          for (l in t) {
            if (
              ((d = t[l]),
              (f = e.noTargetGet ? (h = i(n, l)) && h.value : n[l]),
              !u(v ? l : p + (m ? "." : "#") + l, e.forced) && void 0 !== f)
            ) {
              if (typeof d == typeof f) continue;
              c(d, f);
            }
            (e.sham || (f && f.sham)) && o(d, "sham", !0), a(n, l, d, e);
          }
      };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "e", function () {
          return s;
        });
      n(35), n(17), n(18), n(12), n(19), n(10), n(13), n(16);
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var i = Object.assign,
        o = function (e) {
          return function (t) {
            return "function" == typeof t
              ? ((n = e), (r = t), window.customElements.define(n, r), r)
              : (function (e, t) {
                  return {
                    kind: t.kind,
                    elements: t.elements,
                    finisher: function (t) {
                      window.customElements.define(e, t);
                    },
                  };
                })(e, t);
            var n, r;
          };
        };
      function a(e) {
        return function (t, n) {
          return void 0 !== n
            ? ((r = e), (o = n), void t.constructor.createProperty(o, r))
            : (function (e, t) {
                return "method" === t.kind &&
                  t.descriptor &&
                  !("value" in t.descriptor)
                  ? i(i({}, t), {
                      finisher: function (n) {
                        n.createProperty(t.key, e);
                      },
                    })
                  : {
                      kind: "field",
                      key: Symbol(),
                      placement: "own",
                      descriptor: {},
                      originalKey: t.key,
                      initializer: function () {
                        "function" == typeof t.initializer &&
                          (this[t.key] = t.initializer.call(this));
                      },
                      finisher: function (n) {
                        n.createProperty(t.key, e);
                      },
                    };
              })(e, t);
          var r, o;
        };
      }
      function s(e) {
        return a(i(i({}, e), { state: !0, attribute: !1 }));
      }
      var c = function (e) {
        var t = e.finisher,
          n = e.descriptor;
        return function (e, r) {
          var o;
          if (void 0 === r) {
            var a = null !== (o = e.originalKey) && void 0 !== o ? o : e.key,
              s =
                null != n
                  ? {
                      kind: "method",
                      placement: "prototype",
                      key: a,
                      descriptor: n(e.key),
                    }
                  : i(i({}, e), { key: a });
            return (
              null != t &&
                (s.finisher = function (e) {
                  t(e, a);
                }),
              s
            );
          }
          var c = e.constructor;
          void 0 !== n && Object.defineProperty(e, r, n(r)),
            null == t || t(c, r);
        };
      };
      function u(e, t) {
        return c({
          descriptor: function (n) {
            var i = {
              get: function () {
                var t;
                return null === (t = this.renderRoot) || void 0 === t
                  ? void 0
                  : t.querySelector(e);
              },
              enumerable: !0,
              configurable: !0,
            };
            if (t) {
              var o = "symbol" == r(n) ? Symbol() : "__" + n;
              i.get = function () {
                var t;
                return (
                  void 0 === this[o] &&
                    (this[o] =
                      null === (t = this.renderRoot) || void 0 === t
                        ? void 0
                        : t.querySelector(e)),
                  this[o]
                );
              };
            }
            return i;
          },
        });
      }
      function l(e) {
        return c({
          descriptor: function (t) {
            return {
              get: function () {
                var t;
                return null === (t = this.renderRoot) || void 0 === t
                  ? void 0
                  : t.querySelectorAll(e);
              },
              enumerable: !0,
              configurable: !0,
            };
          },
        });
      }
    },
    function (e, t, n) {
      (function (t) {
        var n = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof t && t) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      }.call(this, n(133)));
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    function (e, t, n) {
      var r = n(4),
        i = n(78),
        o = n(9),
        a = n(73),
        s = n(112),
        c = n(146),
        u = i("wks"),
        l = r.Symbol,
        f = c ? l : (l && l.withoutSetter) || a;
      e.exports = function (e) {
        return (
          (o(u, e) && (s || "string" == typeof u[e])) ||
            (s && o(l, e) ? (u[e] = l[e]) : (u[e] = f("Symbol." + e))),
          u[e]
        );
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function (e, t, n) {
      var r = n(7);
      e.exports = function (e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e;
      };
    },
    function (e, t, n) {
      var r = n(22),
        i = {}.hasOwnProperty;
      e.exports =
        Object.hasOwn ||
        function (e, t) {
          return i.call(r(e), t);
        };
    },
    function (e, t, n) {
      "use strict";
      var r = n(30),
        i = n(82),
        o = n(63),
        a = n(25),
        s = n(115),
        c = "Array Iterator",
        u = a.set,
        l = a.getterFor(c);
      (e.exports = s(
        Array,
        "Array",
        function (e, t) {
          u(this, { type: c, target: r(e), index: 0, kind: t });
        },
        function () {
          var e = l(this),
            t = e.target,
            n = e.kind,
            r = e.index++;
          return !t || r >= t.length
            ? ((e.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: t[r], done: !1 }
            : { value: [r, t[r]], done: !1 };
        },
        "values"
      )),
        (o.Arguments = o.Array),
        i("keys"),
        i("values"),
        i("entries");
    },
    function (e, t, n) {
      var r = n(5);
      e.exports = !r(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    function (e, t, n) {
      var r = n(113),
        i = n(20),
        o = n(178);
      r || i(Object.prototype, "toString", o, { unsafe: !0 });
    },
    function (e, t, n) {
      "use strict";
      var r = n(114).charAt,
        i = n(25),
        o = n(115),
        a = "String Iterator",
        s = i.set,
        c = i.getterFor(a);
      o(
        String,
        "String",
        function (e) {
          s(this, { type: a, string: String(e), index: 0 });
        },
        function () {
          var e,
            t = c(this),
            n = t.string,
            i = t.index;
          return i >= n.length
            ? { value: void 0, done: !0 }
            : ((e = r(n, i)), (t.index += e.length), { value: e, done: !1 });
        }
      );
    },
    function (e, t, n) {
      var r = n(47),
        i = Math.min;
      e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0;
      };
    },
    function (e, t, n) {
      var r = n(11),
        i = n(137),
        o = n(8),
        a = n(52),
        s = Object.defineProperty;
      t.f = r
        ? s
        : function (e, t, n) {
            if ((o(e), (t = a(t, !0)), o(n), i))
              try {
                return s(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          };
    },
    function (e, t, n) {
      var r = n(4),
        i = n(147),
        o = n(10),
        a = n(23),
        s = n(6),
        c = s("iterator"),
        u = s("toStringTag"),
        l = o.values;
      for (var f in i) {
        var d = r[f],
          h = d && d.prototype;
        if (h) {
          if (h[c] !== l)
            try {
              a(h, c, l);
            } catch (e) {
              h[c] = l;
            }
          if ((h[u] || a(h, u, f), i[f]))
            for (var p in o)
              if (h[p] !== o[p])
                try {
                  a(h, p, o[p]);
                } catch (e) {
                  h[p] = o[p];
                }
        }
      }
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(4),
        o = n(38),
        a = n(37),
        s = n(11),
        c = n(112),
        u = n(146),
        l = n(5),
        f = n(9),
        d = n(61),
        h = n(7),
        p = n(8),
        v = n(22),
        m = n(30),
        y = n(52),
        g = n(51),
        b = n(42),
        w = n(74),
        k = n(56),
        x = n(149),
        S = n(111),
        O = n(31),
        E = n(15),
        A = n(76),
        C = n(23),
        P = n(20),
        _ = n(78),
        j = n(77),
        I = n(58),
        T = n(73),
        R = n(6),
        L = n(148),
        M = n(81),
        N = n(32),
        D = n(25),
        z = n(46).forEach,
        B = j("hidden"),
        U = "Symbol",
        H = R("toPrimitive"),
        F = D.set,
        W = D.getterFor(U),
        V = Object.prototype,
        q = i.Symbol,
        $ = o("JSON", "stringify"),
        K = O.f,
        G = E.f,
        Y = x.f,
        J = A.f,
        Z = _("symbols"),
        Q = _("op-symbols"),
        X = _("string-to-symbol-registry"),
        ee = _("symbol-to-string-registry"),
        te = _("wks"),
        ne = i.QObject,
        re = !ne || !ne.prototype || !ne.prototype.findChild,
        ie =
          s &&
          l(function () {
            return (
              7 !=
              b(
                G({}, "a", {
                  get: function () {
                    return G(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (e, t, n) {
                var r = K(V, t);
                r && delete V[t], G(e, t, n), r && e !== V && G(V, t, r);
              }
            : G,
        oe = function (e, t) {
          var n = (Z[e] = b(q.prototype));
          return (
            F(n, { type: U, tag: e, description: t }),
            s || (n.description = t),
            n
          );
        },
        ae = u
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              return Object(e) instanceof q;
            },
        se = function (e, t, n) {
          e === V && se(Q, t, n), p(e);
          var r = y(t, !0);
          return (
            p(n),
            f(Z, r)
              ? (n.enumerable
                  ? (f(e, B) && e[B][r] && (e[B][r] = !1),
                    (n = b(n, { enumerable: g(0, !1) })))
                  : (f(e, B) || G(e, B, g(1, {})), (e[B][r] = !0)),
                ie(e, r, n))
              : G(e, r, n)
          );
        },
        ce = function (e, t) {
          p(e);
          var n = m(t),
            r = w(n).concat(de(n));
          return (
            z(r, function (t) {
              (s && !ue.call(n, t)) || se(e, t, n[t]);
            }),
            e
          );
        },
        ue = function (e) {
          var t = y(e, !0),
            n = J.call(this, t);
          return (
            !(this === V && f(Z, t) && !f(Q, t)) &&
            (!(n || !f(this, t) || !f(Z, t) || (f(this, B) && this[B][t])) || n)
          );
        },
        le = function (e, t) {
          var n = m(e),
            r = y(t, !0);
          if (n !== V || !f(Z, r) || f(Q, r)) {
            var i = K(n, r);
            return (
              !i || !f(Z, r) || (f(n, B) && n[B][r]) || (i.enumerable = !0), i
            );
          }
        },
        fe = function (e) {
          var t = Y(m(e)),
            n = [];
          return (
            z(t, function (e) {
              f(Z, e) || f(I, e) || n.push(e);
            }),
            n
          );
        },
        de = function (e) {
          var t = e === V,
            n = Y(t ? Q : m(e)),
            r = [];
          return (
            z(n, function (e) {
              !f(Z, e) || (t && !f(V, e)) || r.push(Z[e]);
            }),
            r
          );
        };
      (c ||
        (P(
          (q = function () {
            if (this instanceof q)
              throw TypeError("Symbol is not a constructor");
            var e =
                arguments.length && void 0 !== arguments[0]
                  ? String(arguments[0])
                  : void 0,
              t = T(e),
              n = function (e) {
                this === V && n.call(Q, e),
                  f(this, B) && f(this[B], t) && (this[B][t] = !1),
                  ie(this, t, g(1, e));
              };
            return s && re && ie(V, t, { configurable: !0, set: n }), oe(t, e);
          }).prototype,
          "toString",
          function () {
            return W(this).tag;
          }
        ),
        P(q, "withoutSetter", function (e) {
          return oe(T(e), e);
        }),
        (A.f = ue),
        (E.f = se),
        (O.f = le),
        (k.f = x.f = fe),
        (S.f = de),
        (L.f = function (e) {
          return oe(R(e), e);
        }),
        s &&
          (G(q.prototype, "description", {
            configurable: !0,
            get: function () {
              return W(this).description;
            },
          }),
          a || P(V, "propertyIsEnumerable", ue, { unsafe: !0 }))),
      r({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: q }),
      z(w(te), function (e) {
        M(e);
      }),
      r(
        { target: U, stat: !0, forced: !c },
        {
          for: function (e) {
            var t = String(e);
            if (f(X, t)) return X[t];
            var n = q(t);
            return (X[t] = n), (ee[n] = t), n;
          },
          keyFor: function (e) {
            if (!ae(e)) throw TypeError(e + " is not a symbol");
            if (f(ee, e)) return ee[e];
          },
          useSetter: function () {
            re = !0;
          },
          useSimple: function () {
            re = !1;
          },
        }
      ),
      r(
        { target: "Object", stat: !0, forced: !c, sham: !s },
        {
          create: function (e, t) {
            return void 0 === t ? b(e) : ce(b(e), t);
          },
          defineProperty: se,
          defineProperties: ce,
          getOwnPropertyDescriptor: le,
        }
      ),
      r(
        { target: "Object", stat: !0, forced: !c },
        { getOwnPropertyNames: fe, getOwnPropertySymbols: de }
      ),
      r(
        {
          target: "Object",
          stat: !0,
          forced: l(function () {
            S.f(1);
          }),
        },
        {
          getOwnPropertySymbols: function (e) {
            return S.f(v(e));
          },
        }
      ),
      $) &&
        r(
          {
            target: "JSON",
            stat: !0,
            forced:
              !c ||
              l(function () {
                var e = q();
                return (
                  "[null]" != $([e]) ||
                  "{}" != $({ a: e }) ||
                  "{}" != $(Object(e))
                );
              }),
          },
          {
            stringify: function (e, t, n) {
              for (var r, i = [e], o = 1; arguments.length > o; )
                i.push(arguments[o++]);
              if (((r = t), (h(t) || void 0 !== e) && !ae(e)))
                return (
                  d(t) ||
                    (t = function (e, t) {
                      if (
                        ("function" == typeof r && (t = r.call(this, e, t)),
                        !ae(t))
                      )
                        return t;
                    }),
                  (i[1] = t),
                  $.apply(null, i)
                );
            },
          }
        );
      q.prototype[H] || C(q.prototype, H, q.prototype.valueOf),
        N(q, U),
        (I[B] = !0);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(11),
        o = n(4),
        a = n(9),
        s = n(7),
        c = n(15).f,
        u = n(139),
        l = o.Symbol;
      if (
        i &&
        "function" == typeof l &&
        (!("description" in l.prototype) || void 0 !== l().description)
      ) {
        var f = {},
          d = function () {
            var e =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              t = this instanceof d ? new l(e) : void 0 === e ? l() : l(e);
            return "" === e && (f[t] = !0), t;
          };
        u(d, l);
        var h = (d.prototype = l.prototype);
        h.constructor = d;
        var p = h.toString,
          v = "Symbol(test)" == String(l("test")),
          m = /^Symbol\((.*)\)[^)]+$/;
        c(h, "description", {
          configurable: !0,
          get: function () {
            var e = s(this) ? this.valueOf() : this,
              t = p.call(e);
            if (a(f, e)) return "";
            var n = v ? t.slice(7, -1) : t.replace(m, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          r({ global: !0, forced: !0 }, { Symbol: d });
      }
    },
    function (e, t, n) {
      n(81)("iterator");
    },
    function (e, t, n) {
      var r = n(4),
        i = n(23),
        o = n(9),
        a = n(107),
        s = n(108),
        c = n(25),
        u = c.get,
        l = c.enforce,
        f = String(String).split("String");
      (e.exports = function (e, t, n, s) {
        var c,
          u = !!s && !!s.unsafe,
          d = !!s && !!s.enumerable,
          h = !!s && !!s.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof t || o(n, "name") || i(n, "name", t),
          (c = l(n)).source ||
            (c.source = f.join("string" == typeof t ? t : ""))),
          e !== r
            ? (u ? !h && e[t] && (d = !0) : delete e[t],
              d ? (e[t] = n) : i(e, t, n))
            : d
            ? (e[t] = n)
            : a(t, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && u(this).source) || s(this);
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(7),
        o = n(61),
        a = n(68),
        s = n(14),
        c = n(30),
        u = n(80),
        l = n(6),
        f = n(62)("slice"),
        d = l("species"),
        h = [].slice,
        p = Math.max;
      r(
        { target: "Array", proto: !0, forced: !f },
        {
          slice: function (e, t) {
            var n,
              r,
              l,
              f = c(this),
              v = s(f.length),
              m = a(e, v),
              y = a(void 0 === t ? v : t, v);
            if (
              o(f) &&
              ("function" != typeof (n = f.constructor) ||
              (n !== Array && !o(n.prototype))
                ? i(n) && null === (n = n[d]) && (n = void 0)
                : (n = void 0),
              n === Array || void 0 === n)
            )
              return h.call(f, m, y);
            for (
              r = new (void 0 === n ? Array : n)(p(y - m, 0)), l = 0;
              m < y;
              m++, l++
            )
              m in f && u(r, l, f[m]);
            return (r.length = l), r;
          },
        }
      );
    },
    function (e, t, n) {
      var r = n(24);
      e.exports = function (e) {
        return Object(r(e));
      };
    },
    function (e, t, n) {
      var r = n(11),
        i = n(15),
        o = n(51);
      e.exports = r
        ? function (e, t, n) {
            return i.f(e, t, o(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    function (e, t) {
      e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
    function (e, t, n) {
      var r,
        i,
        o,
        a = n(138),
        s = n(4),
        c = n(7),
        u = n(23),
        l = n(9),
        f = n(109),
        d = n(77),
        h = n(58),
        p = "Object already initialized",
        v = s.WeakMap;
      if (a || f.state) {
        var m = f.state || (f.state = new v()),
          y = m.get,
          g = m.has,
          b = m.set;
        (r = function (e, t) {
          if (g.call(m, e)) throw new TypeError(p);
          return (t.facade = e), b.call(m, e, t), t;
        }),
          (i = function (e) {
            return y.call(m, e) || {};
          }),
          (o = function (e) {
            return g.call(m, e);
          });
      } else {
        var w = d("state");
        (h[w] = !0),
          (r = function (e, t) {
            if (l(e, w)) throw new TypeError(p);
            return (t.facade = e), u(e, w, t), t;
          }),
          (i = function (e) {
            return l(e, w) ? e[w] : {};
          }),
          (o = function (e) {
            return l(e, w);
          });
      }
      e.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function (e) {
          return o(e) ? i(e) : r(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!c(t) || (n = i(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      };
    },
    function (e, t, n) {
      var r = n(11),
        i = n(15).f,
        o = Function.prototype,
        a = o.toString,
        s = /^\s*function ([^ (]*)/,
        c = "name";
      r &&
        !(c in o) &&
        i(o, c, {
          configurable: !0,
          get: function () {
            try {
              return a.call(this).match(s)[1];
            } catch (e) {
              return "";
            }
          },
        });
    },
    function (e, t, n) {
      var r = n(2),
        i = n(5),
        o = n(22),
        a = n(69),
        s = n(142);
      r(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            a(1);
          }),
          sham: !s,
        },
        {
          getPrototypeOf: function (e) {
            return a(o(e));
          },
        }
      );
    },
    function (e, t, n) {
      var r = n(2),
        i = n(38),
        o = n(49),
        a = n(8),
        s = n(7),
        c = n(42),
        u = n(176),
        l = n(5),
        f = i("Reflect", "construct"),
        d = l(function () {
          function e() {}
          return !(f(function () {}, [], e) instanceof e);
        }),
        h = !l(function () {
          f(function () {});
        }),
        p = d || h;
      r(
        { target: "Reflect", stat: !0, forced: p, sham: p },
        {
          construct: function (e, t) {
            o(e), a(t);
            var n = arguments.length < 3 ? e : o(arguments[2]);
            if (h && !d) return f(e, t, n);
            if (e == n) {
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
              }
              var r = [null];
              return r.push.apply(r, t), new (u.apply(e, r))();
            }
            var i = n.prototype,
              l = c(s(i) ? i : Object.prototype),
              p = Function.apply.call(e, l, t);
            return s(p) ? p : l;
          },
        }
      );
    },
    function (e, t, n) {
      var r = n(2),
        i = n(151);
      r(
        {
          target: "Array",
          stat: !0,
          forced: !n(99)(function (e) {
            Array.from(e);
          }),
        },
        { from: i }
      );
    },
    function (e, t, n) {
      var r = n(72),
        i = n(24);
      e.exports = function (e) {
        return r(i(e));
      };
    },
    function (e, t, n) {
      var r = n(11),
        i = n(76),
        o = n(51),
        a = n(30),
        s = n(52),
        c = n(9),
        u = n(137),
        l = Object.getOwnPropertyDescriptor;
      t.f = r
        ? l
        : function (e, t) {
            if (((e = a(e)), (t = s(t, !0)), u))
              try {
                return l(e, t);
              } catch (e) {}
            if (c(e, t)) return o(!i.f.call(e, t), e[t]);
          };
    },
    function (e, t, n) {
      var r = n(15).f,
        i = n(9),
        o = n(6)("toStringTag");
      e.exports = function (e, t, n) {
        e &&
          !i((e = n ? e : e.prototype), o) &&
          r(e, o, { configurable: !0, value: t });
      };
    },
    function (e, t, n) {
      "use strict";
      var r,
        i,
        o,
        a,
        s = n(2),
        c = n(37),
        u = n(4),
        l = n(38),
        f = n(171),
        d = n(20),
        h = n(57),
        p = n(95),
        v = n(32),
        m = n(100),
        y = n(7),
        g = n(49),
        b = n(50),
        w = n(108),
        k = n(83),
        x = n(99),
        S = n(125),
        O = n(155).set,
        E = n(182),
        A = n(172),
        C = n(184),
        P = n(157),
        _ = n(185),
        j = n(25),
        I = n(59),
        T = n(6),
        R = n(186),
        L = n(116),
        M = n(70),
        N = T("species"),
        D = "Promise",
        z = j.get,
        B = j.set,
        U = j.getterFor(D),
        H = f && f.prototype,
        F = f,
        W = H,
        V = u.TypeError,
        q = u.document,
        $ = u.process,
        K = P.f,
        G = K,
        Y = !!(q && q.createEvent && u.dispatchEvent),
        J = "function" == typeof PromiseRejectionEvent,
        Z = "unhandledrejection",
        Q = !1,
        X = I(D, function () {
          var e = w(F) !== String(F);
          if (!e && 66 === M) return !0;
          if (c && !W.finally) return !0;
          if (M >= 51 && /native code/.test(F)) return !1;
          var t = new F(function (e) {
              e(1);
            }),
            n = function (e) {
              e(
                function () {},
                function () {}
              );
            };
          return (
            ((t.constructor = {})[N] = n),
            !(Q = t.then(function () {}) instanceof n) || (!e && R && !J)
          );
        }),
        ee =
          X ||
          !x(function (e) {
            F.all(e).catch(function () {});
          }),
        te = function (e) {
          var t;
          return !(!y(e) || "function" != typeof (t = e.then)) && t;
        },
        ne = function (e, t) {
          if (!e.notified) {
            e.notified = !0;
            var n = e.reactions;
            E(function () {
              for (var r = e.value, i = 1 == e.state, o = 0; n.length > o; ) {
                var a,
                  s,
                  c,
                  u = n[o++],
                  l = i ? u.ok : u.fail,
                  f = u.resolve,
                  d = u.reject,
                  h = u.domain;
                try {
                  l
                    ? (i || (2 === e.rejection && ae(e), (e.rejection = 1)),
                      !0 === l
                        ? (a = r)
                        : (h && h.enter(),
                          (a = l(r)),
                          h && (h.exit(), (c = !0))),
                      a === u.promise
                        ? d(V("Promise-chain cycle"))
                        : (s = te(a))
                        ? s.call(a, f, d)
                        : f(a))
                    : d(r);
                } catch (e) {
                  h && !c && h.exit(), d(e);
                }
              }
              (e.reactions = []), (e.notified = !1), t && !e.rejection && ie(e);
            });
          }
        },
        re = function (e, t, n) {
          var r, i;
          Y
            ? (((r = q.createEvent("Event")).promise = t),
              (r.reason = n),
              r.initEvent(e, !1, !0),
              u.dispatchEvent(r))
            : (r = { promise: t, reason: n }),
            !J && (i = u["on" + e])
              ? i(r)
              : e === Z && C("Unhandled promise rejection", n);
        },
        ie = function (e) {
          O.call(u, function () {
            var t,
              n = e.facade,
              r = e.value;
            if (
              oe(e) &&
              ((t = _(function () {
                L ? $.emit("unhandledRejection", r, n) : re(Z, n, r);
              })),
              (e.rejection = L || oe(e) ? 2 : 1),
              t.error)
            )
              throw t.value;
          });
        },
        oe = function (e) {
          return 1 !== e.rejection && !e.parent;
        },
        ae = function (e) {
          O.call(u, function () {
            var t = e.facade;
            L
              ? $.emit("rejectionHandled", t)
              : re("rejectionhandled", t, e.value);
          });
        },
        se = function (e, t, n) {
          return function (r) {
            e(t, r, n);
          };
        },
        ce = function (e, t, n) {
          e.done ||
            ((e.done = !0),
            n && (e = n),
            (e.value = t),
            (e.state = 2),
            ne(e, !0));
        },
        ue = function (e, t, n) {
          if (!e.done) {
            (e.done = !0), n && (e = n);
            try {
              if (e.facade === t) throw V("Promise can't be resolved itself");
              var r = te(t);
              r
                ? E(function () {
                    var n = { done: !1 };
                    try {
                      r.call(t, se(ue, n, e), se(ce, n, e));
                    } catch (t) {
                      ce(n, t, e);
                    }
                  })
                : ((e.value = t), (e.state = 1), ne(e, !1));
            } catch (t) {
              ce({ done: !1 }, t, e);
            }
          }
        };
      if (
        X &&
        ((W = (F = function (e) {
          b(this, F, D), g(e), r.call(this);
          var t = z(this);
          try {
            e(se(ue, t), se(ce, t));
          } catch (e) {
            ce(t, e);
          }
        }).prototype),
        ((r = function (e) {
          B(this, {
            type: D,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = h(W, {
          then: function (e, t) {
            var n = U(this),
              r = K(S(this, F));
            return (
              (r.ok = "function" != typeof e || e),
              (r.fail = "function" == typeof t && t),
              (r.domain = L ? $.domain : void 0),
              (n.parent = !0),
              n.reactions.push(r),
              0 != n.state && ne(n, !1),
              r.promise
            );
          },
          catch: function (e) {
            return this.then(void 0, e);
          },
        })),
        (i = function () {
          var e = new r(),
            t = z(e);
          (this.promise = e),
            (this.resolve = se(ue, t)),
            (this.reject = se(ce, t));
        }),
        (P.f = K =
          function (e) {
            return e === F || e === o ? new i(e) : G(e);
          }),
        !c && "function" == typeof f && H !== Object.prototype)
      ) {
        (a = H.then),
          Q ||
            (d(
              H,
              "then",
              function (e, t) {
                var n = this;
                return new F(function (e, t) {
                  a.call(n, e, t);
                }).then(e, t);
              },
              { unsafe: !0 }
            ),
            d(H, "catch", W.catch, { unsafe: !0 }));
        try {
          delete H.constructor;
        } catch (e) {}
        p && p(H, W);
      }
      s({ global: !0, wrap: !0, forced: X }, { Promise: F }),
        v(F, D, !1, !0),
        m(D),
        (o = l(D)),
        s(
          { target: D, stat: !0, forced: X },
          {
            reject: function (e) {
              var t = K(this);
              return t.reject.call(void 0, e), t.promise;
            },
          }
        ),
        s(
          { target: D, stat: !0, forced: c || X },
          {
            resolve: function (e) {
              return A(c && this === o ? F : this, e);
            },
          }
        ),
        s(
          { target: D, stat: !0, forced: ee },
          {
            all: function (e) {
              var t = this,
                n = K(t),
                r = n.resolve,
                i = n.reject,
                o = _(function () {
                  var n = g(t.resolve),
                    o = [],
                    a = 0,
                    s = 1;
                  k(e, function (e) {
                    var c = a++,
                      u = !1;
                    o.push(void 0),
                      s++,
                      n.call(t, e).then(function (e) {
                        u || ((u = !0), (o[c] = e), --s || r(o));
                      }, i);
                  }),
                    --s || r(o);
                });
              return o.error && i(o.value), n.promise;
            },
            race: function (e) {
              var t = this,
                n = K(t),
                r = n.reject,
                i = _(function () {
                  var i = g(t.resolve);
                  k(e, function (e) {
                    i.call(t, e).then(n.resolve, r);
                  });
                });
              return i.error && r(i.value), n.promise;
            },
          }
        );
    },
    function (e, t, n) {
      var r = (function (e) {
        "use strict";
        var t,
          n = Object.prototype,
          r = n.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var i = t && t.prototype instanceof m ? t : m,
            o = Object.create(i.prototype),
            a = new P(r || []);
          return (
            (o._invoke = (function (e, t, n) {
              var r = f;
              return function (i, o) {
                if (r === h) throw new Error("Generator is already running");
                if (r === p) {
                  if ("throw" === i) throw o;
                  return j();
                }
                for (n.method = i, n.arg = o; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = E(a, n);
                    if (s) {
                      if (s === v) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if (r === f) throw ((r = p), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = h;
                  var c = l(e, t, n);
                  if ("normal" === c.type) {
                    if (((r = n.done ? p : d), c.arg === v)) continue;
                    return { value: c.arg, done: n.done };
                  }
                  "throw" === c.type &&
                    ((r = p), (n.method = "throw"), (n.arg = c.arg));
                }
              };
            })(e, n, a)),
            o
          );
        }
        function l(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          h = "executing",
          p = "completed",
          v = {};
        function m() {}
        function y() {}
        function g() {}
        var b = {};
        b[o] = function () {
          return this;
        };
        var w = Object.getPrototypeOf,
          k = w && w(w(_([])));
        k && k !== n && r.call(k, o) && (b = k);
        var x = (g.prototype = m.prototype = Object.create(b));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function O(e, t) {
          function n(i, o, a, s) {
            var c = l(e[i], e, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                f = u.value;
              return f && "object" == typeof f && r.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (u.value = e), a(u);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          this._invoke = function (e, r) {
            function o() {
              return new t(function (t, i) {
                n(e, r, t, i);
              });
            }
            return (i = i ? i.then(o, o) : o());
          };
        }
        function E(e, n) {
          var r = e.iterator[n.method];
          if (r === t) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                E(e, n),
                "throw" === n.method)
              )
                return v;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return v;
          }
          var i = l(r, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var o = i.arg;
          return o
            ? o.done
              ? ((n[e.resultName] = o.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : o
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function A(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(A, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var n = e[o];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                a = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: t, done: !0 };
        }
        return (
          (y.prototype = x.constructor = g),
          (g.constructor = y),
          (y.displayName = c(g, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), c(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(x)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          S(O.prototype),
          (O.prototype[a] = function () {
            return this;
          }),
          (e.AsyncIterator = O),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new O(u(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(x),
          c(x, s, "Generator"),
          (x[o] = function () {
            return this;
          }),
          (x.toString = function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = _),
          (P.prototype = {
            constructor: P,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                v
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), v;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    C(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: _(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = r;
      } catch (e) {
        Function("r", "regeneratorRuntime = r")(r);
      }
    },
    function (e, t, n) {
      var r = n(2),
        i = n(150);
      r(
        { target: "Object", stat: !0, forced: Object.assign !== i },
        { assign: i }
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(84);
      r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
    },
    function (e, t) {
      e.exports = !1;
    },
    function (e, t, n) {
      var r = n(140),
        i = n(4),
        o = function (e) {
          return "function" == typeof e ? e : void 0;
        };
      e.exports = function (e, t) {
        return arguments.length < 2
          ? o(r[e]) || o(i[e])
          : (r[e] && r[e][t]) || (i[e] && i[e][t]);
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(5),
        o = n(61),
        a = n(7),
        s = n(22),
        c = n(14),
        u = n(80),
        l = n(79),
        f = n(62),
        d = n(6),
        h = n(70),
        p = d("isConcatSpreadable"),
        v = 9007199254740991,
        m = "Maximum allowed index exceeded",
        y =
          h >= 51 ||
          !i(function () {
            var e = [];
            return (e[p] = !1), e.concat()[0] !== e;
          }),
        g = f("concat"),
        b = function (e) {
          if (!a(e)) return !1;
          var t = e[p];
          return void 0 !== t ? !!t : o(e);
        };
      r(
        { target: "Array", proto: !0, forced: !y || !g },
        {
          concat: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a = s(this),
              f = l(a, 0),
              d = 0;
            for (t = -1, r = arguments.length; t < r; t++)
              if (b((o = -1 === t ? a : arguments[t]))) {
                if (d + (i = c(o.length)) > v) throw TypeError(m);
                for (n = 0; n < i; n++, d++) n in o && u(f, d, o[n]);
              } else {
                if (d >= v) throw TypeError(m);
                u(f, d++, o);
              }
            return (f.length = d), f;
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(46).map;
      r(
        { target: "Array", proto: !0, forced: !n(62)("map") },
        {
          map: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (e, t) {
      var n = {}.toString;
      e.exports = function (e) {
        return n.call(e).slice(8, -1);
      };
    },
    function (e, t, n) {
      var r,
        i = n(8),
        o = n(143),
        a = n(110),
        s = n(58),
        c = n(144),
        u = n(106),
        l = n(77),
        f = l("IE_PROTO"),
        d = function () {},
        h = function (e) {
          return "<script>" + e + "</" + "script>";
        },
        p = function () {
          try {
            r = document.domain && new ActiveXObject("htmlfile");
          } catch (e) {}
          var e, t;
          p = r
            ? (function (e) {
                e.write(h("")), e.close();
                var t = e.parentWindow.Object;
                return (e = null), t;
              })(r)
            : (((t = u("iframe")).style.display = "none"),
              c.appendChild(t),
              (t.src = String("javascript:")),
              (e = t.contentWindow.document).open(),
              e.write(h("document.F=Object")),
              e.close(),
              e.F);
          for (var n = a.length; n--; ) delete p.prototype[a[n]];
          return p();
        };
      (s[f] = !0),
        (e.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((d.prototype = i(e)),
                  (n = new d()),
                  (d.prototype = null),
                  (n[f] = e))
                : (n = p()),
              void 0 === t ? n : o(n, t)
            );
          });
    },
    function (e, t, n) {
      var r = n(49);
      e.exports = function (e, t, n) {
        if ((r(e), void 0 === t)) return e;
        switch (n) {
          case 0:
            return function () {
              return e.call(t);
            };
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return H;
      }),
        n.d(t, "b", function () {
          return B;
        }),
        n.d(t, "c", function () {
          return W;
        }),
        n.d(t, "d", function () {
          return te;
        }),
        n.d(t, "e", function () {
          return U;
        });
      var r, i, o, a;
      n(21),
        n(19),
        n(10),
        n(12),
        n(13),
        n(16),
        n(17),
        n(18),
        n(130),
        n(36),
        n(103),
        n(55),
        n(104),
        n(163),
        n(48),
        n(26),
        n(164),
        n(29),
        n(27),
        n(28);
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && c(e, t);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function u(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = f(e);
          if (t) {
            var i = f(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      function l(e, t) {
        return !t || ("object" !== w(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = v(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function h(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return m(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          v(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          v(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function v(e, t) {
        if (e) {
          if ("string" == typeof e) return m(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? m(e, t)
              : void 0
          );
        }
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function y(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function b(e, t, n) {
        return t && g(e.prototype, t), n && g(e, n), e;
      }
      function w(e) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var k,
        x = globalThis.trustedTypes,
        S = x
          ? x.createPolicy("lit-html", {
              createHTML: function (e) {
                return e;
              },
            })
          : void 0,
        O = "lit$".concat((Math.random() + "").slice(9), "$"),
        E = "?" + O,
        A = "<".concat(E, ">"),
        C = document,
        P = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return C.createComment(e);
        },
        _ = function (e) {
          return null === e || ("object" != w(e) && "function" != typeof e);
        },
        j = Array.isArray,
        I = function (e) {
          var t;
          return (
            j(e) ||
            "function" ==
              typeof (null === (t = e) || void 0 === t
                ? void 0
                : t[Symbol.iterator])
          );
        },
        T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        R = /-->/g,
        L = />/g,
        M =
          />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
        N = /'/g,
        D = /"/g,
        z = /^(?:script|style|textarea)$/i,
        B =
          ((k = 1),
          function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return { _$litType$: k, strings: e, values: n };
          }),
        U = Symbol.for("lit-noChange"),
        H = Symbol.for("lit-nothing"),
        F = new WeakMap(),
        W = function (e, t, n) {
          var r,
            i,
            o =
              null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r
                ? r
                : t,
            a = o._$litPart$;
          if (void 0 === a) {
            var s =
              null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i
                ? i
                : null;
            o._$litPart$ = a = new Y(t.insertBefore(P(), s), s, void 0, n);
          }
          return a.I(e), a;
        },
        V = C.createTreeWalker(C, 129, null, !1),
        q = function (e, t) {
          for (
            var n,
              r = e.length - 1,
              i = [],
              o = 2 === t ? "<svg>" : "",
              a = T,
              s = 0;
            s < r;
            s++
          ) {
            for (
              var c = e[s], u = void 0, l = void 0, f = -1, d = 0;
              d < c.length && ((a.lastIndex = d), null !== (l = a.exec(c)));

            )
              (d = a.lastIndex),
                a === T
                  ? "!--" === l[1]
                    ? (a = R)
                    : void 0 !== l[1]
                    ? (a = L)
                    : void 0 !== l[2]
                    ? (z.test(l[2]) && (n = RegExp("</" + l[2], "g")), (a = M))
                    : void 0 !== l[3] && (a = M)
                  : a === M
                  ? ">" === l[0]
                    ? ((a = null != n ? n : T), (f = -1))
                    : void 0 === l[1]
                    ? (f = -2)
                    : ((f = a.lastIndex - l[2].length),
                      (u = l[1]),
                      (a = void 0 === l[3] ? M : '"' === l[3] ? D : N))
                  : a === D || a === N
                  ? (a = M)
                  : a === R || a === L
                  ? (a = T)
                  : ((a = M), (n = void 0));
            var h = a === M && e[s + 1].startsWith("/>") ? " " : "";
            o +=
              a === T
                ? c + A
                : f >= 0
                ? (i.push(u), c.slice(0, f) + "$lit$" + c.slice(f) + O + h)
                : c + O + (-2 === f ? (i.push(void 0), s) : h);
          }
          var p = o + (e[r] || "<?>") + (2 === t ? "</svg>" : "");
          return [void 0 !== S ? S.createHTML(p) : p, i];
        },
        $ = (function () {
          function e(t, n) {
            var r,
              i = t.strings,
              o = t._$litType$;
            y(this, e), (this.parts = []);
            var a = 0,
              s = 0,
              c = i.length - 1,
              u = this.parts,
              l = p(q(i, o), 2),
              f = l[0],
              v = l[1];
            if (
              ((this.el = e.createElement(f, n)),
              (V.currentNode = this.el.content),
              2 === o)
            ) {
              var m = this.el.content,
                g = m.firstChild;
              g.remove(), m.append.apply(m, h(g.childNodes));
            }
            for (; null !== (r = V.nextNode()) && u.length < c; ) {
              if (1 === r.nodeType) {
                if (r.hasAttributes()) {
                  var b,
                    w = [],
                    k = d(r.getAttributeNames());
                  try {
                    for (k.s(); !(b = k.n()).done; ) {
                      var S = b.value;
                      if (S.endsWith("$lit$") || S.startsWith(O)) {
                        var A = v[s++];
                        if ((w.push(S), void 0 !== A)) {
                          var C = r
                              .getAttribute(A.toLowerCase() + "$lit$")
                              .split(O),
                            _ = /([.?@])?(.*)/.exec(A);
                          u.push({
                            type: 1,
                            index: a,
                            name: _[2],
                            strings: C,
                            ctor:
                              "." === _[1]
                                ? Z
                                : "?" === _[1]
                                ? Q
                                : "@" === _[1]
                                ? X
                                : J,
                          });
                        } else u.push({ type: 6, index: a });
                      }
                    }
                  } catch (e) {
                    k.e(e);
                  } finally {
                    k.f();
                  }
                  for (var j = 0, I = w; j < I.length; j++) {
                    var T = I[j];
                    r.removeAttribute(T);
                  }
                }
                if (z.test(r.tagName)) {
                  var R = r.textContent.split(O),
                    L = R.length - 1;
                  if (L > 0) {
                    r.textContent = x ? x.emptyScript : "";
                    for (var M = 0; M < L; M++)
                      r.append(R[M], P()),
                        V.nextNode(),
                        u.push({ type: 2, index: ++a });
                    r.append(R[L], P());
                  }
                }
              } else if (8 === r.nodeType)
                if (r.data === E) u.push({ type: 2, index: a });
                else
                  for (var N = -1; -1 !== (N = r.data.indexOf(O, N + 1)); )
                    u.push({ type: 7, index: a }), (N += O.length - 1);
              a++;
            }
          }
          return (
            b(e, null, [
              {
                key: "createElement",
                value: function (e, t) {
                  var n = C.createElement("template");
                  return (n.innerHTML = e), n;
                },
              },
            ]),
            e
          );
        })();
      function K(e, t) {
        var n,
          r,
          i,
          o,
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
          s = arguments.length > 3 ? arguments[3] : void 0;
        if (t === U) return t;
        var c =
            void 0 !== s
              ? null === (n = a.Σi) || void 0 === n
                ? void 0
                : n[s]
              : a.Σo,
          u = _(t) ? void 0 : t._$litDirective$;
        return (
          (null == c ? void 0 : c.constructor) !== u &&
            (null === (r = null == c ? void 0 : c.O) ||
              void 0 === r ||
              r.call(c, !1),
            void 0 === u ? (c = void 0) : (c = new u(e)).T(e, a, s),
            void 0 !== s
              ? ((null !== (i = (o = a).Σi) && void 0 !== i ? i : (o.Σi = []))[
                  s
                ] = c)
              : (a.Σo = c)),
          void 0 !== c && (t = K(e, c.S(e, t.values), c, s)),
          t
        );
      }
      var G = (function () {
          function e(t, n) {
            y(this, e),
              (this.l = []),
              (this.N = void 0),
              (this.D = t),
              (this.M = n);
          }
          return (
            b(e, [
              {
                key: "u",
                value: function (e) {
                  var t,
                    n = this.D,
                    r = n.el.content,
                    i = n.parts,
                    o = (
                      null !== (t = null == e ? void 0 : e.creationScope) &&
                      void 0 !== t
                        ? t
                        : C
                    ).importNode(r, !0);
                  V.currentNode = o;
                  for (
                    var a = V.nextNode(), s = 0, c = 0, u = i[0];
                    void 0 !== u;

                  ) {
                    if (s === u.index) {
                      var l = void 0;
                      2 === u.type
                        ? (l = new Y(a, a.nextSibling, this, e))
                        : 1 === u.type
                        ? (l = new u.ctor(a, u.name, u.strings, this, e))
                        : 6 === u.type && (l = new ee(a, this, e)),
                        this.l.push(l),
                        (u = i[++c]);
                    }
                    s !== (null == u ? void 0 : u.index) &&
                      ((a = V.nextNode()), s++);
                  }
                  return o;
                },
              },
              {
                key: "v",
                value: function (e) {
                  var t,
                    n = 0,
                    r = d(this.l);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var i = t.value;
                      void 0 !== i &&
                        (void 0 !== i.strings
                          ? (i.I(e, i, n), (n += i.strings.length - 2))
                          : i.I(e[n])),
                        n++;
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                },
              },
            ]),
            e
          );
        })(),
        Y = (function () {
          function e(t, n, r, i) {
            y(this, e),
              (this.type = 2),
              (this.N = void 0),
              (this.A = t),
              (this.B = n),
              (this.M = r),
              (this.options = i);
          }
          return (
            b(e, [
              {
                key: "setConnected",
                value: function (e) {
                  var t;
                  null === (t = this.P) || void 0 === t || t.call(this, e);
                },
              },
              {
                key: "parentNode",
                get: function () {
                  return this.A.parentNode;
                },
              },
              {
                key: "startNode",
                get: function () {
                  return this.A;
                },
              },
              {
                key: "endNode",
                get: function () {
                  return this.B;
                },
              },
              {
                key: "I",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this;
                  (e = K(this, e, t)),
                    _(e)
                      ? e === H || null == e || "" === e
                        ? (this.H !== H && this.R(), (this.H = H))
                        : e !== this.H && e !== U && this.m(e)
                      : void 0 !== e._$litType$
                      ? this._(e)
                      : void 0 !== e.nodeType
                      ? this.$(e)
                      : I(e)
                      ? this.g(e)
                      : this.m(e);
                },
              },
              {
                key: "k",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.B;
                  return this.A.parentNode.insertBefore(e, t);
                },
              },
              {
                key: "$",
                value: function (e) {
                  this.H !== e && (this.R(), (this.H = this.k(e)));
                },
              },
              {
                key: "m",
                value: function (e) {
                  var t = this.A.nextSibling;
                  null !== t &&
                  3 === t.nodeType &&
                  (null === this.B
                    ? null === t.nextSibling
                    : t === this.B.previousSibling)
                    ? (t.data = e)
                    : this.$(C.createTextNode(e)),
                    (this.H = e);
                },
              },
              {
                key: "_",
                value: function (e) {
                  var t,
                    n = e.values,
                    r = e._$litType$,
                    i =
                      "number" == typeof r
                        ? this.C(e)
                        : (void 0 === r.el &&
                            (r.el = $.createElement(r.h, this.options)),
                          r);
                  if (
                    (null === (t = this.H) || void 0 === t ? void 0 : t.D) === i
                  )
                    this.H.v(n);
                  else {
                    var o = new G(i, this),
                      a = o.u(this.options);
                    o.v(n), this.$(a), (this.H = o);
                  }
                },
              },
              {
                key: "C",
                value: function (e) {
                  var t = F.get(e.strings);
                  return void 0 === t && F.set(e.strings, (t = new $(e))), t;
                },
              },
              {
                key: "g",
                value: function (t) {
                  j(this.H) || ((this.H = []), this.R());
                  var n,
                    r,
                    i = this.H,
                    o = 0,
                    a = d(t);
                  try {
                    for (a.s(); !(r = a.n()).done; ) {
                      var s = r.value;
                      o === i.length
                        ? i.push(
                            (n = new e(
                              this.k(P()),
                              this.k(P()),
                              this,
                              this.options
                            ))
                          )
                        : (n = i[o]),
                        n.I(s),
                        o++;
                    }
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                  o < i.length &&
                    (this.R(n && n.B.nextSibling, o), (i.length = o));
                },
              },
              {
                key: "R",
                value: function () {
                  var e,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.A.nextSibling,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  for (
                    null === (e = this.P) ||
                    void 0 === e ||
                    e.call(this, !1, !0, n);
                    t && t !== this.B;

                  ) {
                    var r = t.nextSibling;
                    t.remove(), (t = r);
                  }
                },
              },
            ]),
            e
          );
        })(),
        J = (function () {
          function e(t, n, r, i, o) {
            y(this, e),
              (this.type = 1),
              (this.H = H),
              (this.N = void 0),
              (this.V = void 0),
              (this.element = t),
              (this.name = n),
              (this.M = i),
              (this.options = o),
              r.length > 2 || "" !== r[0] || "" !== r[1]
                ? ((this.H = Array(r.length - 1).fill(H)), (this.strings = r))
                : (this.H = H);
          }
          return (
            b(e, [
              {
                key: "tagName",
                get: function () {
                  return this.element.tagName;
                },
              },
              {
                key: "I",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = this.strings,
                    o = !1;
                  if (void 0 === i)
                    (e = K(this, e, t, 0)),
                      (o = !_(e) || (e !== this.H && e !== U)) && (this.H = e);
                  else {
                    var a,
                      s,
                      c = e;
                    for (e = i[0], a = 0; a < i.length - 1; a++)
                      (s = K(this, c[n + a], t, a)) === U && (s = this.H[a]),
                        o || (o = !_(s) || s !== this.H[a]),
                        s === H
                          ? (e = H)
                          : e !== H && (e += (null != s ? s : "") + i[a + 1]),
                        (this.H[a] = s);
                  }
                  o && !r && this.W(e);
                },
              },
              {
                key: "W",
                value: function (e) {
                  e === H
                    ? this.element.removeAttribute(this.name)
                    : this.element.setAttribute(this.name, null != e ? e : "");
                },
              },
            ]),
            e
          );
        })(),
        Z = (function (e) {
          s(n, e);
          var t = u(n);
          function n() {
            var e;
            return y(this, n), ((e = t.apply(this, arguments)).type = 3), e;
          }
          return (
            b(n, [
              {
                key: "W",
                value: function (e) {
                  this.element[this.name] = e === H ? void 0 : e;
                },
              },
            ]),
            n
          );
        })(J),
        Q = (function (e) {
          s(n, e);
          var t = u(n);
          function n() {
            var e;
            return y(this, n), ((e = t.apply(this, arguments)).type = 4), e;
          }
          return (
            b(n, [
              {
                key: "W",
                value: function (e) {
                  e && e !== H
                    ? this.element.setAttribute(this.name, "")
                    : this.element.removeAttribute(this.name);
                },
              },
            ]),
            n
          );
        })(J),
        X = (function (e) {
          s(n, e);
          var t = u(n);
          function n() {
            var e;
            return y(this, n), ((e = t.apply(this, arguments)).type = 5), e;
          }
          return (
            b(n, [
              {
                key: "I",
                value: function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this;
                  if (
                    (e =
                      null !== (t = K(this, e, n, 0)) && void 0 !== t
                        ? t
                        : H) !== U
                  ) {
                    var r = this.H,
                      i =
                        (e === H && r !== H) ||
                        e.capture !== r.capture ||
                        e.once !== r.once ||
                        e.passive !== r.passive,
                      o = e !== H && (r === H || i);
                    i && this.element.removeEventListener(this.name, this, r),
                      o && this.element.addEventListener(this.name, this, e),
                      (this.H = e);
                  }
                },
              },
              {
                key: "handleEvent",
                value: function (e) {
                  var t, n;
                  "function" == typeof this.H
                    ? this.H.call(
                        null !==
                          (n =
                            null === (t = this.options) || void 0 === t
                              ? void 0
                              : t.host) && void 0 !== n
                          ? n
                          : this.element,
                        e
                      )
                    : this.H.handleEvent(e);
                },
              },
            ]),
            n
          );
        })(J),
        ee = (function () {
          function e(t, n, r) {
            y(this, e),
              (this.element = t),
              (this.type = 6),
              (this.N = void 0),
              (this.V = void 0),
              (this.M = n),
              (this.options = r);
          }
          return (
            b(e, [
              {
                key: "I",
                value: function (e) {
                  K(this, e);
                },
              },
            ]),
            e
          );
        })(),
        te = {
          Z: "$lit$",
          U: O,
          Y: E,
          q: 1,
          X: q,
          tt: G,
          it: I,
          st: K,
          et: Y,
          ot: J,
          nt: Q,
          rt: X,
          lt: Z,
          ht: ee,
        };
      null === (i = (r = globalThis).litHtmlPlatformSupport) ||
        void 0 === i ||
        i.call(r, $, Y),
        (null !== (o = (a = globalThis).litHtmlVersions) && void 0 !== o
          ? o
          : (a.litHtmlVersions = [])
        ).push("2.0.0-rc.3");
    },
    function (e, t, n) {
      var r = n(4),
        i = n(147),
        o = n(177),
        a = n(23);
      for (var s in i) {
        var c = r[s],
          u = c && c.prototype;
        if (u && u.forEach !== o)
          try {
            a(u, "forEach", o);
          } catch (e) {
            u.forEach = o;
          }
      }
    },
    function (e, t, n) {
      var r = n(43),
        i = n(72),
        o = n(22),
        a = n(14),
        s = n(79),
        c = [].push,
        u = function (e) {
          var t = 1 == e,
            n = 2 == e,
            u = 3 == e,
            l = 4 == e,
            f = 6 == e,
            d = 7 == e,
            h = 5 == e || f;
          return function (p, v, m, y) {
            for (
              var g,
                b,
                w = o(p),
                k = i(w),
                x = r(v, m, 3),
                S = a(k.length),
                O = 0,
                E = y || s,
                A = t ? E(p, S) : n || d ? E(p, 0) : void 0;
              S > O;
              O++
            )
              if ((h || O in k) && ((b = x((g = k[O]), O, w)), e))
                if (t) A[O] = b;
                else if (b)
                  switch (e) {
                    case 3:
                      return !0;
                    case 5:
                      return g;
                    case 6:
                      return O;
                    case 2:
                      c.call(A, g);
                  }
                else
                  switch (e) {
                    case 4:
                      return !1;
                    case 7:
                      c.call(A, g);
                  }
            return f ? -1 : u || l ? l : A;
          };
        };
      e.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6),
        filterOut: u(7),
      };
    },
    function (e, t) {
      var n = Math.ceil,
        r = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(85),
        i = n(120),
        o = n(8),
        a = n(24),
        s = n(125),
        c = n(122),
        u = n(14),
        l = n(86),
        f = n(84),
        d = n(118).UNSUPPORTED_Y,
        h = [].push,
        p = Math.min,
        v = 4294967295;
      r(
        "split",
        2,
        function (e, t, n) {
          var r;
          return (
            (r =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (e, n) {
                    var r = String(a(this)),
                      o = void 0 === n ? v : n >>> 0;
                    if (0 === o) return [];
                    if (void 0 === e) return [r];
                    if (!i(e)) return t.call(r, e, o);
                    for (
                      var s,
                        c,
                        u,
                        l = [],
                        d =
                          (e.ignoreCase ? "i" : "") +
                          (e.multiline ? "m" : "") +
                          (e.unicode ? "u" : "") +
                          (e.sticky ? "y" : ""),
                        p = 0,
                        m = new RegExp(e.source, d + "g");
                      (s = f.call(m, r)) &&
                      !(
                        (c = m.lastIndex) > p &&
                        (l.push(r.slice(p, s.index)),
                        s.length > 1 &&
                          s.index < r.length &&
                          h.apply(l, s.slice(1)),
                        (u = s[0].length),
                        (p = c),
                        l.length >= o)
                      );

                    )
                      m.lastIndex === s.index && m.lastIndex++;
                    return (
                      p === r.length
                        ? (!u && m.test("")) || l.push("")
                        : l.push(r.slice(p)),
                      l.length > o ? l.slice(0, o) : l
                    );
                  }
                : "0".split(void 0, 0).length
                ? function (e, n) {
                    return void 0 === e && 0 === n ? [] : t.call(this, e, n);
                  }
                : t),
            [
              function (t, n) {
                var i = a(this),
                  o = null == t ? void 0 : t[e];
                return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n);
              },
              function (e, i) {
                var a = n(r, e, this, i, r !== t);
                if (a.done) return a.value;
                var f = o(e),
                  h = String(this),
                  m = s(f, RegExp),
                  y = f.unicode,
                  g =
                    (f.ignoreCase ? "i" : "") +
                    (f.multiline ? "m" : "") +
                    (f.unicode ? "u" : "") +
                    (d ? "g" : "y"),
                  b = new m(d ? "^(?:" + f.source + ")" : f, g),
                  w = void 0 === i ? v : i >>> 0;
                if (0 === w) return [];
                if (0 === h.length) return null === l(b, h) ? [h] : [];
                for (var k = 0, x = 0, S = []; x < h.length; ) {
                  b.lastIndex = d ? 0 : x;
                  var O,
                    E = l(b, d ? h.slice(x) : h);
                  if (
                    null === E ||
                    (O = p(u(b.lastIndex + (d ? x : 0)), h.length)) === k
                  )
                    x = c(h, x, y);
                  else {
                    if ((S.push(h.slice(k, x)), S.length === w)) return S;
                    for (var A = 1; A <= E.length - 1; A++)
                      if ((S.push(E[A]), S.length === w)) return S;
                    x = k = O;
                  }
                }
                return S.push(h.slice(k)), S;
              },
            ]
          );
        },
        d
      );
    },
    function (e, t) {
      e.exports = function (e) {
        if ("function" != typeof e)
          throw TypeError(String(e) + " is not a function");
        return e;
      };
    },
    function (e, t) {
      e.exports = function (e, t, n) {
        if (!(e instanceof t))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    function (e, t, n) {
      var r = n(7);
      e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
          return i;
        if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e))))
          return i;
        if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (e, t, n) {
      var r = n(2),
        i = n(145),
        o = n(5),
        a = n(7),
        s = n(60).onFreeze,
        c = Object.freeze;
      r(
        {
          target: "Object",
          stat: !0,
          forced: o(function () {
            c(1);
          }),
          sham: !i,
        },
        {
          freeze: function (e) {
            return c && a(e) ? c(s(e)) : e;
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(11),
        i = n(4),
        o = n(59),
        a = n(20),
        s = n(9),
        c = n(41),
        u = n(98),
        l = n(52),
        f = n(5),
        d = n(42),
        h = n(56).f,
        p = n(31).f,
        v = n(15).f,
        m = n(169).trim,
        y = "Number",
        g = i.Number,
        b = g.prototype,
        w = c(d(b)) == y,
        k = function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            c,
            u = l(e, !1);
          if ("string" == typeof u && u.length > 2)
            if (43 === (t = (u = m(u)).charCodeAt(0)) || 45 === t) {
              if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === t) {
              switch (u.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (i = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (i = 55);
                  break;
                default:
                  return +u;
              }
              for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
                if ((c = o.charCodeAt(s)) < 48 || c > i) return NaN;
              return parseInt(o, r);
            }
          return +u;
        };
      if (o(y, !g(" 0o1") || !g("0b1") || g("+0x1"))) {
        for (
          var x,
            S = function (e) {
              var t = arguments.length < 1 ? 0 : e,
                n = this;
              return n instanceof S &&
                (w
                  ? f(function () {
                      b.valueOf.call(n);
                    })
                  : c(n) != y)
                ? u(new g(k(t)), n, S)
                : k(t);
            },
            O = r
              ? h(g)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
                  ","
                ),
            E = 0;
          O.length > E;
          E++
        )
          s(g, (x = O[E])) && !s(S, x) && v(S, x, p(g, x));
        (S.prototype = b), (b.constructor = S), a(i, y, S);
      }
    },
    function (e, t, n) {
      "use strict";
      var r = n(20),
        i = n(8),
        o = n(5),
        a = n(117),
        s = "toString",
        c = RegExp.prototype,
        u = c.toString,
        l = o(function () {
          return "/a/b" != u.call({ source: "a", flags: "b" });
        }),
        f = u.name != s;
      (l || f) &&
        r(
          RegExp.prototype,
          s,
          function () {
            var e = i(this),
              t = String(e.source),
              n = e.flags;
            return (
              "/" +
              t +
              "/" +
              String(
                void 0 === n && e instanceof RegExp && !("flags" in c)
                  ? a.call(e)
                  : n
              )
            );
          },
          { unsafe: !0 }
        );
    },
    function (e, t, n) {
      var r = n(141),
        i = n(110).concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, i);
        };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e, t, n) {
        for (var i in t) r(e, i, t[i], n);
        return e;
      };
    },
    function (e, t) {
      e.exports = {};
    },
    function (e, t, n) {
      var r = n(5),
        i = /#|\.prototype\./,
        o = function (e, t) {
          var n = s[a(e)];
          return n == u || (n != c && ("function" == typeof t ? r(t) : !!t));
        },
        a = (o.normalize = function (e) {
          return String(e).replace(i, ".").toLowerCase();
        }),
        s = (o.data = {}),
        c = (o.NATIVE = "N"),
        u = (o.POLYFILL = "P");
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(58),
        i = n(7),
        o = n(9),
        a = n(15).f,
        s = n(73),
        c = n(145),
        u = s("meta"),
        l = 0,
        f =
          Object.isExtensible ||
          function () {
            return !0;
          },
        d = function (e) {
          a(e, u, { value: { objectID: "O" + ++l, weakData: {} } });
        },
        h = (e.exports = {
          REQUIRED: !1,
          fastKey: function (e, t) {
            if (!i(e))
              return "symbol" == typeof e
                ? e
                : ("string" == typeof e ? "S" : "P") + e;
            if (!o(e, u)) {
              if (!f(e)) return "F";
              if (!t) return "E";
              d(e);
            }
            return e[u].objectID;
          },
          getWeakData: function (e, t) {
            if (!o(e, u)) {
              if (!f(e)) return !0;
              if (!t) return !1;
              d(e);
            }
            return e[u].weakData;
          },
          onFreeze: function (e) {
            return c && h.REQUIRED && f(e) && !o(e, u) && d(e), e;
          },
        });
      r[u] = !0;
    },
    function (e, t, n) {
      var r = n(41);
      e.exports =
        Array.isArray ||
        function (e) {
          return "Array" == r(e);
        };
    },
    function (e, t, n) {
      var r = n(5),
        i = n(6),
        o = n(70),
        a = i("species");
      e.exports = function (e) {
        return (
          o >= 51 ||
          !r(function () {
            var t = [];
            return (
              ((t.constructor = {})[a] = function () {
                return { foo: 1 };
              }),
              1 !== t[e](Boolean).foo
            );
          })
        );
      };
    },
    function (e, t) {
      e.exports = {};
    },
    function (e, t, n) {
      "use strict";
      var r = n(136);
      n.d(t, "a", function () {
        return r.a;
      });
      n(71);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(68),
        o = n(47),
        a = n(14),
        s = n(22),
        c = n(79),
        u = n(80),
        l = n(62)("splice"),
        f = Math.max,
        d = Math.min,
        h = 9007199254740991,
        p = "Maximum allowed length exceeded";
      r(
        { target: "Array", proto: !0, forced: !l },
        {
          splice: function (e, t) {
            var n,
              r,
              l,
              v,
              m,
              y,
              g = s(this),
              b = a(g.length),
              w = i(e, b),
              k = arguments.length;
            if (
              (0 === k
                ? (n = r = 0)
                : 1 === k
                ? ((n = 0), (r = b - w))
                : ((n = k - 2), (r = d(f(o(t), 0), b - w))),
              b + n - r > h)
            )
              throw TypeError(p);
            for (l = c(g, r), v = 0; v < r; v++)
              (m = w + v) in g && u(l, v, g[m]);
            if (((l.length = r), n < r)) {
              for (v = w; v < b - r; v++)
                (y = v + n), (m = v + r) in g ? (g[y] = g[m]) : delete g[y];
              for (v = b; v > b - r + n; v--) delete g[v - 1];
            } else if (n > r)
              for (v = b - r; v > w; v--)
                (y = v + n - 1),
                  (m = v + r - 1) in g ? (g[y] = g[m]) : delete g[y];
            for (v = 0; v < n; v++) g[v + w] = arguments[v + 2];
            return (g.length = b - r + n), l;
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(46).find,
        o = n(82),
        a = "find",
        s = !0;
      a in [] &&
        Array(1).find(function () {
          s = !1;
        }),
        r(
          { target: "Array", proto: !0, forced: s },
          {
            find: function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        o(a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(72),
        o = n(30),
        a = n(132),
        s = [].join,
        c = i != Object,
        u = a("join", ",");
      r(
        { target: "Array", proto: !0, forced: c || !u },
        {
          join: function (e) {
            return s.call(o(this), void 0 === e ? "," : e);
          },
        }
      );
    },
    function (e, t, n) {
      var r = n(47),
        i = Math.max,
        o = Math.min;
      e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? i(n + t, 0) : o(n, t);
      };
    },
    function (e, t, n) {
      var r = n(9),
        i = n(22),
        o = n(77),
        a = n(142),
        s = o("IE_PROTO"),
        c = Object.prototype;
      e.exports = a
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = i(e)),
              r(e, s)
                ? e[s]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? c
                : null
            );
          };
    },
    function (e, t, n) {
      var r,
        i,
        o = n(4),
        a = n(94),
        s = o.process,
        c = s && s.versions,
        u = c && c.v8;
      u
        ? (i = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1])
        : a &&
          (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = a.match(/Chrome\/(\d+)/)) &&
          (i = r[1]),
        (e.exports = i && +i);
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        });
      n(102), n(12), n(33), n(17), n(18), n(19), n(10), n(13), n(16);
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t, n, i) {
        var o,
          a = arguments.length,
          s =
            a < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, n))
              : i;
        if (
          "object" ===
            ("undefined" == typeof Reflect ? "undefined" : r(Reflect)) &&
          "function" == typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, n, i);
        else
          for (var c = e.length - 1; c >= 0; c--)
            (o = e[c]) &&
              (s = (a < 3 ? o(s) : a > 3 ? o(t, n, s) : o(t, n)) || s);
        return a > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function o(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
    },
    function (e, t, n) {
      var r = n(5),
        i = n(41),
        o = "".split;
      e.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == i(e) ? o.call(e, "") : Object(e);
          }
        : Object;
    },
    function (e, t) {
      var n = 0,
        r = Math.random();
      e.exports = function (e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++n + r).toString(36)
        );
      };
    },
    function (e, t, n) {
      var r = n(141),
        i = n(110);
      e.exports =
        Object.keys ||
        function (e) {
          return r(e, i);
        };
    },
    function (e, t, n) {
      var r = n(96),
        i = n(63),
        o = n(6)("iterator");
      e.exports = function (e) {
        if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
      };
    },
    function (e, t, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({ 1: 2 }, 1);
      t.f = o
        ? function (e) {
            var t = i(this, e);
            return !!t && t.enumerable;
          }
        : r;
    },
    function (e, t, n) {
      var r = n(78),
        i = n(73),
        o = r("keys");
      e.exports = function (e) {
        return o[e] || (o[e] = i(e));
      };
    },
    function (e, t, n) {
      var r = n(37),
        i = n(109);
      (e.exports = function (e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.14.0",
        mode: r ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (e, t, n) {
      var r = n(7),
        i = n(61),
        o = n(6)("species");
      e.exports = function (e, t) {
        var n;
        return (
          i(e) &&
            ("function" != typeof (n = e.constructor) ||
            (n !== Array && !i(n.prototype))
              ? r(n) && null === (n = n[o]) && (n = void 0)
              : (n = void 0)),
          new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(52),
        i = n(15),
        o = n(51);
      e.exports = function (e, t, n) {
        var a = r(t);
        a in e ? i.f(e, a, o(0, n)) : (e[a] = n);
      };
    },
    function (e, t, n) {
      var r = n(140),
        i = n(9),
        o = n(148),
        a = n(15).f;
      e.exports = function (e) {
        var t = r.Symbol || (r.Symbol = {});
        i(t, e) || a(t, e, { value: o.f(e) });
      };
    },
    function (e, t, n) {
      var r = n(6),
        i = n(42),
        o = n(15),
        a = r("unscopables"),
        s = Array.prototype;
      null == s[a] && o.f(s, a, { configurable: !0, value: i(null) }),
        (e.exports = function (e) {
          s[a][e] = !0;
        });
    },
    function (e, t, n) {
      var r = n(8),
        i = n(134),
        o = n(14),
        a = n(43),
        s = n(75),
        c = n(152),
        u = function (e, t) {
          (this.stopped = e), (this.result = t);
        };
      e.exports = function (e, t, n) {
        var l,
          f,
          d,
          h,
          p,
          v,
          m,
          y = n && n.that,
          g = !(!n || !n.AS_ENTRIES),
          b = !(!n || !n.IS_ITERATOR),
          w = !(!n || !n.INTERRUPTED),
          k = a(t, y, 1 + g + w),
          x = function (e) {
            return l && c(l), new u(!0, e);
          },
          S = function (e) {
            return g
              ? (r(e), w ? k(e[0], e[1], x) : k(e[0], e[1]))
              : w
              ? k(e, x)
              : k(e);
          };
        if (b) l = e;
        else {
          if ("function" != typeof (f = s(e)))
            throw TypeError("Target is not iterable");
          if (i(f)) {
            for (d = 0, h = o(e.length); h > d; d++)
              if ((p = S(e[d])) && p instanceof u) return p;
            return new u(!1);
          }
          l = f.call(e);
        }
        for (v = l.next; !(m = v.call(l)).done; ) {
          try {
            p = S(m.value);
          } catch (e) {
            throw (c(l), e);
          }
          if ("object" == typeof p && p && p instanceof u) return p;
        }
        return new u(!1);
      };
    },
    function (e, t, n) {
      "use strict";
      var r,
        i,
        o = n(117),
        a = n(118),
        s = n(78),
        c = RegExp.prototype.exec,
        u = s("native-string-replace", String.prototype.replace),
        l = c,
        f =
          ((r = /a/),
          (i = /b*/g),
          c.call(r, "a"),
          c.call(i, "a"),
          0 !== r.lastIndex || 0 !== i.lastIndex),
        d = a.UNSUPPORTED_Y || a.BROKEN_CARET,
        h = void 0 !== /()??/.exec("")[1];
      (f || h || d) &&
        (l = function (e) {
          var t,
            n,
            r,
            i,
            a = this,
            s = d && a.sticky,
            l = o.call(a),
            p = a.source,
            v = 0,
            m = e;
          return (
            s &&
              (-1 === (l = l.replace("y", "")).indexOf("g") && (l += "g"),
              (m = String(e).slice(a.lastIndex)),
              a.lastIndex > 0 &&
                (!a.multiline ||
                  (a.multiline && "\n" !== e[a.lastIndex - 1])) &&
                ((p = "(?: " + p + ")"), (m = " " + m), v++),
              (n = new RegExp("^(?:" + p + ")", l))),
            h && (n = new RegExp("^" + p + "$(?!\\s)", l)),
            f && (t = a.lastIndex),
            (r = c.call(s ? n : a, m)),
            s
              ? r
                ? ((r.input = r.input.slice(v)),
                  (r[0] = r[0].slice(v)),
                  (r.index = a.lastIndex),
                  (a.lastIndex += r[0].length))
                : (a.lastIndex = 0)
              : f && r && (a.lastIndex = a.global ? r.index + r[0].length : t),
            h &&
              r &&
              r.length > 1 &&
              u.call(r[0], n, function () {
                for (i = 1; i < arguments.length - 2; i++)
                  void 0 === arguments[i] && (r[i] = void 0);
              }),
            r
          );
        }),
        (e.exports = l);
    },
    function (e, t, n) {
      "use strict";
      n(36);
      var r = n(20),
        i = n(84),
        o = n(5),
        a = n(6),
        s = n(23),
        c = a("species"),
        u = RegExp.prototype,
        l = !o(function () {
          var e = /./;
          return (
            (e.exec = function () {
              var e = [];
              return (e.groups = { a: "7" }), e;
            }),
            "7" !== "".replace(e, "$<a>")
          );
        }),
        f = "$0" === "a".replace(/./, "$0"),
        d = a("replace"),
        h = !!/./[d] && "" === /./[d]("a", "$0"),
        p = !o(function () {
          var e = /(?:)/,
            t = e.exec;
          e.exec = function () {
            return t.apply(this, arguments);
          };
          var n = "ab".split(e);
          return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
        });
      e.exports = function (e, t, n, d) {
        var v = a(e),
          m = !o(function () {
            var t = {};
            return (
              (t[v] = function () {
                return 7;
              }),
              7 != ""[e](t)
            );
          }),
          y =
            m &&
            !o(function () {
              var t = !1,
                n = /a/;
              return (
                "split" === e &&
                  (((n = {}).constructor = {}),
                  (n.constructor[c] = function () {
                    return n;
                  }),
                  (n.flags = ""),
                  (n[v] = /./[v])),
                (n.exec = function () {
                  return (t = !0), null;
                }),
                n[v](""),
                !t
              );
            });
        if (
          !m ||
          !y ||
          ("replace" === e && (!l || !f || h)) ||
          ("split" === e && !p)
        ) {
          var g = /./[v],
            b = n(
              v,
              ""[e],
              function (e, t, n, r, o) {
                var a = t.exec;
                return a === i || a === u.exec
                  ? m && !o
                    ? { done: !0, value: g.call(t, n, r) }
                    : { done: !0, value: e.call(n, t, r) }
                  : { done: !1 };
              },
              {
                REPLACE_KEEPS_$0: f,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: h,
              }
            ),
            w = b[0],
            k = b[1];
          r(String.prototype, e, w),
            r(
              u,
              v,
              2 == t
                ? function (e, t) {
                    return k.call(e, this, t);
                  }
                : function (e) {
                    return k.call(e, this);
                  }
            );
        }
        d && s(u[v], "sham", !0);
      };
    },
    function (e, t, n) {
      var r = n(41),
        i = n(84);
      e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
          var o = n.call(e, t);
          if ("object" != typeof o)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return o;
        }
        if ("RegExp" !== r(e))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return i.call(e, t);
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(4),
        o = n(59),
        a = n(20),
        s = n(60),
        c = n(83),
        u = n(50),
        l = n(7),
        f = n(5),
        d = n(99),
        h = n(32),
        p = n(98);
      e.exports = function (e, t, n) {
        var v = -1 !== e.indexOf("Map"),
          m = -1 !== e.indexOf("Weak"),
          y = v ? "set" : "add",
          g = i[e],
          b = g && g.prototype,
          w = g,
          k = {},
          x = function (e) {
            var t = b[e];
            a(
              b,
              e,
              "add" == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : "delete" == e
                ? function (e) {
                    return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : "get" == e
                ? function (e) {
                    return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : "has" == e
                ? function (e) {
                    return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  }
            );
          };
        if (
          o(
            e,
            "function" != typeof g ||
              !(
                m ||
                (b.forEach &&
                  !f(function () {
                    new g().entries().next();
                  }))
              )
          )
        )
          (w = n.getConstructor(t, e, v, y)), (s.REQUIRED = !0);
        else if (o(e, !0)) {
          var S = new w(),
            O = S[y](m ? {} : -0, 1) != S,
            E = f(function () {
              S.has(1);
            }),
            A = d(function (e) {
              new g(e);
            }),
            C =
              !m &&
              f(function () {
                for (var e = new g(), t = 5; t--; ) e[y](t, t);
                return !e.has(-0);
              });
          A ||
            (((w = t(function (t, n) {
              u(t, w, e);
              var r = p(new g(), t, w);
              return null != n && c(n, r[y], { that: r, AS_ENTRIES: v }), r;
            })).prototype = b),
            (b.constructor = w)),
            (E || C) && (x("delete"), x("has"), v && x("get")),
            (C || O) && x(y),
            m && b.clear && delete b.clear;
        }
        return (
          (k[e] = w),
          r({ global: !0, forced: w != g }, k),
          h(w, e),
          m || n.setStrong(w, e, v),
          w
        );
      };
    },
    function (e, t, n) {
      n(81)("toStringTag");
    },
    function (e, t, n) {
      var r = n(4);
      n(32)(r.JSON, "JSON", !0);
    },
    function (e, t, n) {
      n(32)(Math, "Math", !0);
    },
    function (e, t, n) {
      n(81)("toPrimitive");
    },
    function (e, t, n) {
      var r = n(23),
        i = n(179),
        o = n(6)("toPrimitive"),
        a = Date.prototype;
      o in a || r(a, o, i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(87),
        i = n(159);
      e.exports = r(
        "Map",
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        i
      );
    },
    function (e, t, n) {
      var r = n(38);
      e.exports = r("navigator", "userAgent") || "";
    },
    function (e, t, n) {
      var r = n(8),
        i = n(180);
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(n, []),
                  (t = n instanceof Array);
              } catch (e) {}
              return function (n, o) {
                return r(n), i(o), t ? e.call(n, o) : (n.__proto__ = o), n;
              };
            })()
          : void 0);
    },
    function (e, t, n) {
      var r = n(113),
        i = n(41),
        o = n(6)("toStringTag"),
        a =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          );
      e.exports = r
        ? i
        : function (e) {
            var t, n, r;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = Object(e)), o))
              ? n
              : a
              ? i(t)
              : "Object" == (r = i(t)) && "function" == typeof t.callee
              ? "Arguments"
              : r;
          };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return a;
        });
      n(17), n(18), n(12), n(19), n(10), n(13), n(16), n(29), n(21), n(26);
      function r(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return i(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = {
          ATTRIBUTE: 1,
          CHILD: 2,
          PROPERTY: 3,
          BOOLEAN_ATTRIBUTE: 4,
          EVENT: 5,
          ELEMENT: 6,
        },
        s = function (e) {
          return function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return { _$litDirective$: e, values: n };
          };
        },
        c = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: "T",
                value: function (e, t, n) {
                  (this.Σdt = e), (this.M = t), (this.Σct = n);
                },
              },
              {
                key: "S",
                value: function (e, t) {
                  return this.update(e, t);
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  return this.render.apply(this, r(t));
                },
              },
            ]) && o(t.prototype, n),
            i && o(t, i),
            e
          );
        })();
    },
    function (e, t, n) {
      var r = n(7),
        i = n(95);
      e.exports = function (e, t, n) {
        var o, a;
        return (
          i &&
            "function" == typeof (o = t.constructor) &&
            o !== n &&
            r((a = o.prototype)) &&
            a !== n.prototype &&
            i(e, a),
          e
        );
      };
    },
    function (e, t, n) {
      var r = n(6)("iterator"),
        i = !1;
      try {
        var o = 0,
          a = {
            next: function () {
              return { done: !!o++ };
            },
            return: function () {
              i = !0;
            },
          };
        (a[r] = function () {
          return this;
        }),
          Array.from(a, function () {
            throw 2;
          });
      } catch (e) {}
      e.exports = function (e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
          var o = {};
          (o[r] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              },
            };
          }),
            e(o);
        } catch (e) {}
        return n;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(38),
        i = n(15),
        o = n(6),
        a = n(11),
        s = o("species");
      e.exports = function (e) {
        var t = r(e),
          n = i.f;
        a &&
          t &&
          !t[s] &&
          n(t, s, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(85),
        i = n(8),
        o = n(24),
        a = n(190),
        s = n(86);
      r("search", 1, function (e, t, n) {
        return [
          function (t) {
            var n = o(this),
              r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
          },
          function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var o = i(e),
              c = String(this),
              u = o.lastIndex;
            a(u, 0) || (o.lastIndex = 0);
            var l = s(o, c);
            return (
              a(o.lastIndex, u) || (o.lastIndex = u), null === l ? -1 : l.index
            );
          },
        ];
      });
    },
    function (e, t, n) {
      var r = n(2),
        i = n(5),
        o = n(30),
        a = n(31).f,
        s = n(11),
        c = i(function () {
          a(1);
        });
      r(
        { target: "Object", stat: !0, forced: !s || c, sham: !s },
        {
          getOwnPropertyDescriptor: function (e, t) {
            return a(o(e), t);
          },
        }
      );
    },
    function (e, t, n) {
      var r = n(11),
        i = n(4),
        o = n(59),
        a = n(98),
        s = n(15).f,
        c = n(56).f,
        u = n(120),
        l = n(117),
        f = n(118),
        d = n(20),
        h = n(5),
        p = n(25).enforce,
        v = n(100),
        m = n(6)("match"),
        y = i.RegExp,
        g = y.prototype,
        b = /a/g,
        w = /a/g,
        k = new y(b) !== b,
        x = f.UNSUPPORTED_Y;
      if (
        r &&
        o(
          "RegExp",
          !k ||
            x ||
            h(function () {
              return (w[m] = !1), y(b) != b || y(w) == w || "/a/i" != y(b, "i");
            })
        )
      ) {
        for (
          var S = function (e, t) {
              var n,
                r = this instanceof S,
                i = u(e),
                o = void 0 === t;
              if (!r && i && e.constructor === S && o) return e;
              k
                ? i && !o && (e = e.source)
                : e instanceof S && (o && (t = l.call(e)), (e = e.source)),
                x &&
                  (n = !!t && t.indexOf("y") > -1) &&
                  (t = t.replace(/y/g, ""));
              var s = a(k ? new y(e, t) : y(e, t), r ? this : g, S);
              x && n && (p(s).sticky = !0);
              return s;
            },
            O = function (e) {
              (e in S) ||
                s(S, e, {
                  configurable: !0,
                  get: function () {
                    return y[e];
                  },
                  set: function (t) {
                    y[e] = t;
                  },
                });
            },
            E = c(y),
            A = 0;
          E.length > A;

        )
          O(E[A++]);
        (g.constructor = S), (S.prototype = g), d(i, "RegExp", S);
      }
      v("RegExp");
    },
    function (e, t, n) {
      "use strict";
      var r,
        i = n(2),
        o = n(31).f,
        a = n(14),
        s = n(119),
        c = n(24),
        u = n(121),
        l = n(37),
        f = "".startsWith,
        d = Math.min,
        h = u("startsWith");
      i(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              l ||
              h ||
              ((r = o(String.prototype, "startsWith")), !r || r.writable)
            ) && !h,
        },
        {
          startsWith: function (e) {
            var t = String(c(this));
            s(e);
            var n = a(
                d(arguments.length > 1 ? arguments[1] : void 0, t.length)
              ),
              r = String(e);
            return f ? f.call(t, r, n) : t.slice(n, n + r.length) === r;
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      n(21),
        n(53),
        n(27),
        n(28),
        n(17),
        n(18),
        n(12),
        n(19),
        n(10),
        n(13),
        n(16);
      var r,
        i,
        o,
        a,
        s = n(0);
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== c(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var v = Object(s.c)(
          r ||
            (r = p([
              "\n  :host {\n    font: normal 1.2rem/1.5 var(--themeFontFamily);\n  }\n\n  form {\n    max-width: 600px;\n  }\n\n  p {\n    margin-top: 0;\n    font-weight: 200;\n  }\n\n  a {\n    font-weight: 500;\n    text-decoration: none;\n    color: var(--activeColor);\n  }\n\n  fieldset {\n    padding: 0.7rem 2rem;\n    margin: 1.5rem 0;\n    box-sizing: border-box;\n    text-align: center;\n    border: none;\n    border-radius: 7px;\n    background-color: #fcf5e6;\n    box-shadow: 3px 3px 0 0 #c3ad97;\n  }\n\n  label {\n    display: none;\n  }\n\n  img {\n    width: 100%;\n    max-width: 215px;\n    max-height: 60px;\n    margin-bottom: 1.3rem;\n    vertical-align: middle;\n  }\n\n  input {\n    display: block;\n    width: 100%;\n    height: 3rem;\n    padding: 0.5rem 1rem 0.5rem 2.5rem;\n    font: normal 1.2rem/1.5 var(--themeFontFamily);\n    color: #858585;\n    box-sizing: border-box;\n    border: 1px solid var(--grey80);\n    border-radius: 2rem;\n    background: #eee;\n  }\n\n  input:focus {\n    border-color: #66afe9;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    outline: none;\n  }\n\n  .search-field {\n    position: relative;\n    overflow: hidden;\n  }\n\n  .search-field svg {\n    position: absolute;\n    top: 2px;\n    left: 3px;\n    width: 24px;\n    height: 24px;\n  }\n\n  .search-field .fill-color {\n    fill: var(--iconFill);\n  }\n\n  input:focus + svg {\n    display: none;\n  }\n\n  @media (min-width: 890px) {\n    form {\n      margin: 0 auto;\n    }\n\n    p {\n      margin-bottom: 3rem;\n      font-size: 1.6rem;\n      text-align: center;\n    }\n\n    img {\n      margin: 0;\n    }\n\n    fieldset {\n      margin: 0 auto;\n      font-size: 0;\n    }\n\n    fieldset a,\n    .search-field {\n      display: inline-block;\n      width: 50%;\n      vertical-align: middle;\n    }\n\n    fieldset a {\n      text-align: center;\n    }\n\n    .search-field svg {\n      width: 28px;\n      height: 28px;\n    }\n\n    .search-field .fill-color {\n      fill: var(--desktopSearchIconFill);\n    }\n  }\n",
            ]))
        ),
        m = Object(s.e)(
          i ||
            (i = p([
              '\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="searchTitleID searchDescID"\n  >\n    <title id="searchTitleID">Search icon</title>\n    <desc id="searchDescID">An illustration of a magnifying glass.</desc>\n    <path class="fill-color" d="m32.4526364 29.8875889-8.1719472-7.9751279c1.1046135-1.4876138 1.7652549-3.3102407 1.7652549-5.2846451 0-.101185-.0142895-.1981539-.030573-.2944743.0166158-.0976175.0309053-.196208.0309053-.2990145 0-4.9814145-4.152935-9.0343271-9.2572866-9.0343271-.0907218 0-.1781206.01394537-.2655193.02594487-.0880633-.0119995-.1747974-.02594487-.2655193-.02594487-5.1046839 0-9.25761889 4.0529126-9.25761889 9.0343271 0 .1011849.01395722.1981539.03057294.2947985-.01694804.0976176-.03090525.1958838-.03090525.2986903 0 4.9814145 4.1526027 9.0346514 9.2572866 9.0346514.0907218 0 .1777882-.0139454.2658516-.0262692.0873987.0123238.1741328.0262692.265187.0262692 1.7306942 0 3.3467399-.4747911 4.7338208-1.2852439l8.2882574 8.0886366c.3652137.3564177.843082.53414 1.3212826.53414.4782007 0 .9567336-.1780467 1.3212827-.53414.7294304-.7118622.7294304-1.8660845-.0003323-2.5782711zm-15.9526364-7.8875889c-.0832667-.0118703-.1652765-.0253024-.2513711-.0253024-2.8781993 0-5.2197212-2.3278242-5.2197212-5.1891862 0-.0974612-.013197-.1908615-.0289077-.2836371.0160249-.0940251.0292219-.1889874.0292219-.2880105 0-2.861362 2.3418361-5.1891861 5.2200354-5.1891861.0854662 0 .1677902-.0131198.2510569-.0246777.0826383.0115579.1649623.0246777.2510569.0246777 2.8781993 0 5.2197212 2.3278241 5.2197212 5.1891861 0 .0974612.0135112.1908616.0289077.2839496-.0157107.0940251-.0295361.1886749-.0295361.287698 0 2.861362-2.3415219 5.1891862-5.2197212 5.1891862-.0860946 0-.1684187.0134321-.2507427.0253024z" fill-rule="evenodd" />\n  </svg>\n',
            ]))
        ),
        y = Object(s.e)(
          o ||
            (o = p([
              '\n<svg height="55" viewBox="0 0 205 55" width="205" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m41.5442526 5.47625158v36.05869762s-.0825635.8039669.6808836.8039669c.7634442 0 .5779563-.8039669.5779563-.8039669v-36.05869762h5.4674088l.0001982 44.76728562c.0070059.1547261.1602174 4.7191467-6.1484876 4.7191467-6.1999371 0-6.1018528-4.697561-6.0880787-5.0160398l.0008628-1.7899844h5.5092566l.0006247 1.8215446c.0064131.111431.0698016.5292973.6598981.5292973.6808836 0 .5564693-.5981684.5564693-.5981684v-4.3726361s-.9489378 1.6294184-3.4044061 1.2370455c-2.4554712-.39237-2.8060919-1.8148639-2.9712219-2.4967105-.1651328-.6795829-.2680542-1.174855-.2680542-2.0625 0-.8599178-.0383122-34.61864321-.0406109-36.64339281l-.0001077-.09488771zm30.6351382 1.09344342c6.9117365 0 6.7805382 5.4445918 6.7805382 5.4445918v39.5210721h-5.7365952v-1.1522413s-2.086754 2.4978424-5.1507198.8955592c-3.0650979-1.6011513-2.5436924-5.1879097-2.5436924-5.1879097l.0000351-8.8028589c.0025794-.2398669.0684122-2.0251881 1.4352444-3.3674745 1.4669498-1.4405832 3.4553051-1.2178245 3.4553051-1.2178245h2.5425603v-20.4327721s-.0656021-.8966882-.7170766-.8966882c-.6526037 0-.6854033.9566179-.6854033.9566179v16.080489h-6.030665l-.0005626-16.2852138c-.0087587-.3366877-.0366527-5.555347 6.6510318-5.555347zm28.5031432-6.569695v31.41468l.711418.0192211c.593792 0 .593792-.4941403.593792-.4941403v-24.86759869h5.897202v21.90049339s.079171 1.404399-.791723 2.512539c-.870895 1.1081429-1.820962 1.1477197-1.820962 1.1477197s.989654.3946337 1.860548 1.4439758c.870894 1.0482132.791724 2.4921889.791724 2.4921889v14.4024477h-5.936789l-.000309-13.3243353c-.002165-.043998-.019484-.2297601-.158037-.3860879-.158343-.1775284-.277102-.1775284-.277102-.1775284h-.890123v13.8879516h-5.8180296v-49.9715266zm-14.2340414 8.02384579c5.9675612 0 6.2060902 4.59291681 6.2148001 5.06804611l.0002664 15.2041578h-5.556805v-15.4269123s-.0531603-.5009227-.6062332-.5009227c-.5519582 0-.5790885.42064-.5790885.42064v32.2254321s.079173.4477782.6582614.4477782c.4900102 0 .5467595-.3205986.552623-.4192443l.00045-8.2163433h5.4775891l.000339 7.8754281c.0126595.1654646.3391417 5.1294029-6.0570166 5.1294029-6.504565 0-6.1358477-5.1867779-6.1358477-5.1867779l-.0006428-31.5032204c-.0096883-.3249184-.0495263-5.11746431 6.0313048-5.11746431zm-73.7580006-5.70016816v42.49270187h.5575988s.2081099.2374581.5010473-.0554082.1956685-.3901121.1956685-.3901121v-42.04605262l5.7004019.00115789.0007682 41.01721663c.015678.1470376.248026 2.5994908-1.4903372 4.3374305-1.792686 1.7922473-4.4053704 1.6101973-4.4053704 1.6101973h-7.83579091s-2.61381542.18205-4.40650134-1.6101973c-1.79268592-1.7922503-1.48843833-4.344369-1.48843833-4.344369v-41.01027813l5.69927118-.00115789v42.04605262s-.09726862.0972458.19566849.3901121c.29293741.2928663.50217829.0554082.50217829.0554082h.55646783v-42.49270187zm44.8442957-.59701342s2.8128759.11081342 4.2515488 1.54913579 1.3572386 4.52302632 1.3572386 4.52302632v20.17269738s.1085791 1.6825658-.8324397 2.4967105c-.9410187.8141447-1.5743967.9950658-1.5743967.9950658s1.0495978.5789474 1.6105898 1.3026316c.5609919.7236842.7419571 1.3930921.7419571 2.3881579l.0007115 7.6426204c.0126941.1435677.1783816 2.2493941-.8874408 3.6468533-1.1038873 1.4473684-2.4430294 2.1348684-5.2298927 2.1348684h-6.4604558v-46.85176739zm14.5337626 35.74095399s-.1673942-.0203558-.3777654.1843136c-.2092421.2069274-.1459043.3301795-.1459043.3301795v8.4524058s.1673942.4523026.7329089.4523026c.5643854 0 .648084-.4523026.648084-.4523026v-8.9465489zm-44.3104484-34.72101373c5.9643432 0 6.16707 4.5349604 6.1720848 5.00409423l-.0000412 36.6461958h-5.2231058v-1.0674342s-1.8990049 2.3135258-4.6881295.8299731c-2.7891246-1.4824208-2.3140925-4.8057147-2.3140925-4.8057147l.0000416-8.1558683c.0025667-.229176.064831-1.8776574 1.3051717-3.1166422 1.3357486-1.3354261 3.1454001-1.1273669 3.1454001-1.1273669h2.3140896v-18.92660288s-.0588122-.831105-.6526037-.831105-.6232005.88538132-.6232005.88538132v14.89545606h-5.4888988l-.0005553-15.08585244c-.0080458-.3266358-.0237133-5.14451389 6.0538395-5.14451389zm28.932117 33.13115253-.4776089-.0000064v8.3947599h.705764c.5067025 0 .560992-.7236842.560992-.7236842v-6.712171c0-.9769737-.7962466-.9589047-.7962466-.9589047zm-29.0339092-4.5105709s-.1526883-.0203529-.3438338.1707431c-.1900134.191099-.1323304.305305-.1323304.305305v7.8282282s.1515591.419511.6661776.419511c.5146186 0 .5915302-.419511.5915302-.419511v-8.2861842zm29.0087131-25.54039926c-.6808813 0-.5443092.01385177-.4995274.01731471l.0109215.0007774v25.52796055s1.3391421.1085526 1.3391421-1.3569079v-23.35690792s.1085791-.83223684-.8505362-.83223684z" fill="#ab2e33"/><path d="m164.347608 2.25946661v7.4442539c.21729-.35229187 1.198489-1.67028746 3.735798-1.67028746 3.534354 0 3.281982 3.91684325 3.281982 3.91684325v39.9180342h-3.988173l-.000094-38.4191634c-.002249-.1296195-.058484-1.7498629-1.464346-1.7498629-1.087582 0-1.450864.5267465-1.565167 1.1683005v39.1020256h-4.190748v-49.71014369zm23.367699 5.4959617c3.58528 0 3.32838 3.94160559 3.32838 3.94160559v40.1712766h-4.045888l-.000761-38.6884533c-.008742-.2394578-.118025-1.7360686-1.484053-1.7360686-1.103423 0-1.471231.5301234-1.587799 1.1750516v39.3496435h-4.250729v-43.92154285h4.250729v1.38890288c.220685-.35566881 1.216596-1.68041542 3.790121-1.68041542zm11.392998-.52112204c6.124855 0 5.736674 5.39691513 5.736674 5.39691513v24.2844279h-7.17056l.000077 9.2728055c.001997 1.1852594.055922 2.3291557 1.511897 2.3291557 1.511974 0 1.588933-1.3483852 1.588933-1.3483852v-6.1679026h4.108134l-.00035 5.6892637c-.01289 1.7887967-.410235 4.8333128-5.736327 4.8333128-5.22451 0-5.490421-3.8596058-5.502952-4.1455025l-.000589-34.6706379s-.65866-5.47345253 5.465063-5.47345253zm-72.839588-6.23430627c4.55044 0 4.748706 4.49835393 4.756437 5.01739476l.000233 44.68489444h-4.246265l-.000015-45.39546442c-.001065-.11122824-.038841-1.27912478-1.155468-1.27912478-.689016 0-1.239407-.0003988-1.575847-.00072723l-.366181-.00042531v46.67574174h-4.288077v-46.69262361h-1.942025c-1.0608 0-1.147931 1.05402663-1.154906 1.2547936l-.00058 45.43783001h-4.296023l.000269-45.03840883c.008379-.46638804.223774-4.66388037 5.263374-4.66388037zm12.746531 4.73059864c5.939252 0 5.529572 4.80151166 5.529572 4.80151166v39.1864407h-3.791254v-1.7040541s-.748065 1.776088-2.920962 1.8481219-4.418224-.1913422-4.418224-3.9371049l.000537-10.0356421c.009666-.3007246.1911-3.4583326 3.548528-3.4583326h3.5253l-.000596-22.2422593c-.009853-.1121552-.157986-1.45801702-1.592862-1.45801702-1.497271 0-1.484813 1.94491522-1.484813 1.94491522v17.4051907h-3.99949l-.000952-17.7112484c-.014831-.304231-.125641-4.63952176 5.605216-4.63952176zm12.457944.74622797c5.704988 0 5.452616 4.56852529 5.452616 4.56852529v16.2188817h-3.836522v-16.7703934s-.202578-1.40578478-1.51537-1.40578478c-1.193447 0-1.427274 1.16180558-1.459925 1.37304298l-.004518.0327418v32.5368129c0 .9038006.353096 1.9584201 1.565167 1.9584201 1.212068 0 1.363719-1.3551363 1.363719-1.3551363v-9.239474h3.786725l.000848 7.3579585c.013087 2.5821014.10472 5.9480539-5.301813 5.9480539-5.604264 0-5.201371-4.7699955-5.201371-4.7699955l-.000475-31.3866454c-.017056-.171763-.453979-5.06700779 5.150919-5.06700779zm26.215101 3.66584829v37.0051649h-3.533221v-37.0051649zm-37.199548 25.1702202h-1.714552s-.530775.0720339-.917823.4558391c-.385924.3838082-.409681.9848389-.409681.9848389v8.5236357s.096195 1.56111 1.568559 1.56111c1.473497 0 1.473497-1.6095052 1.473497-1.6095052zm58.697648-25.2264959c-1.433886 0-1.511974 1.7344408-1.511974 1.7344408v21.9725922h3.100907v-22.1256642s-.155047-1.5813688-1.588933-1.5813688zm-23.264712-5.31700073c1.129455 0 2.045015.68657238 2.045015 1.53184407 0 .84639831-.91556 1.53184695-2.045015 1.53184695s-2.045012-.68544864-2.045012-1.53184695c0-.84527169.915557-1.53184407 2.045012-1.53184407z" fill="#211e1e"/></g></svg>\n',
            ]))
        ),
        g = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && l(e, t);
          })(o, e);
          var t,
            n,
            r,
            i = f(o);
          function o() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              ((e = i.call(this)).waybackPagesArchived = ""),
              e
            );
          }
          return (
            (t = o),
            (r = [
              {
                key: "styles",
                get: function () {
                  return v;
                },
              },
              {
                key: "properties",
                get: function () {
                  return {
                    baseHost: { type: String },
                    queryHandler: { type: Object },
                    waybackPagesArchived: { type: String },
                  };
                },
              },
            ]),
            (n = [
              {
                key: "handleSubmit",
                value: function (e) {
                  e.preventDefault();
                  var t = e.target.querySelector("#url").value;
                  this.emitWaybackSearchSubmitted(t),
                    this.queryHandler.performQuery(t);
                },
              },
              {
                key: "emitWaybackSearchSubmitted",
                value: function (e) {
                  this.dispatchEvent(
                    new CustomEvent("waybackSearchSubmitted", {
                      detail: { query: e },
                    })
                  );
                },
              },
              {
                key: "emitWaybackMachineStatsLinkClicked",
                value: function () {
                  this.dispatchEvent(
                    new CustomEvent("waybackMachineStatsLinkClicked")
                  );
                },
              },
              {
                key: "emitWaybackMachineLogoLinkClicked",
                value: function () {
                  this.dispatchEvent(new CustomEvent("waybackMachineLogoLink"));
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(s.e)(
                    a ||
                      (a = p([
                        '\n      <form action="" method="post" @submit=',
                        ">\n        <p>\n          Search the history of over ",
                        "\n          <a\n            @click=",
                        '\n            data-event-click-tracking="TopNav|WaybackMachineStatsLink"\n            href="https://blog.archive.org/2016/10/23/defining-web-pages-web-sites-and-web-captures/"\n            >web pages</a\n          >\n          on the Internet.\n        </p>\n        <fieldset>\n          <a\n            @click=',
                        '\n            data-event-click-tracking="TopNav|WaybackMachineLogoLink"\n            href=',
                        "\n            >",
                        '</a>\n          <label for="url">Search the Wayback Machine</label>\n          <div class="search-field">\n            <input type="text" name="url" id="url" placeholder="enter URL or keywords" />\n            ',
                        "\n          </div>\n        </fieldset>\n      </form>\n    ",
                      ])),
                    this.handleSubmit,
                    this.waybackPagesArchived,
                    this.emitWaybackMachineStatsLinkClicked,
                    this.emitWaybackMachineLogoLinkClicked,
                    "".concat(this.baseHost, "/web/"),
                    y,
                    m
                  );
                },
              },
            ]) && u(t.prototype, n),
            r && u(t, r),
            o
          );
        })(s.b);
      customElements.define("ia-wayback-search", g);
    },
    function (e, t, n) {
      var r = n(4),
        i = n(7),
        o = r.document,
        a = i(o) && i(o.createElement);
      e.exports = function (e) {
        return a ? o.createElement(e) : {};
      };
    },
    function (e, t, n) {
      var r = n(4),
        i = n(23);
      e.exports = function (e, t) {
        try {
          i(r, e, t);
        } catch (n) {
          r[e] = t;
        }
        return t;
      };
    },
    function (e, t, n) {
      var r = n(109),
        i = Function.toString;
      "function" != typeof r.inspectSource &&
        (r.inspectSource = function (e) {
          return i.call(e);
        }),
        (e.exports = r.inspectSource);
    },
    function (e, t, n) {
      var r = n(4),
        i = n(107),
        o = "__core-js_shared__",
        a = r[o] || i(o, {});
      e.exports = a;
    },
    function (e, t) {
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
      var r = n(70),
        i = n(5);
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !i(function () {
          var e = Symbol();
          return (
            !String(e) ||
            !(Object(e) instanceof Symbol) ||
            (!Symbol.sham && r && r < 41)
          );
        });
    },
    function (e, t, n) {
      var r = {};
      (r[n(6)("toStringTag")] = "z"), (e.exports = "[object z]" === String(r));
    },
    function (e, t, n) {
      var r = n(47),
        i = n(24),
        o = function (e) {
          return function (t, n) {
            var o,
              a,
              s = String(i(t)),
              c = r(n),
              u = s.length;
            return c < 0 || c >= u
              ? e
                ? ""
                : void 0
              : (o = s.charCodeAt(c)) < 55296 ||
                o > 56319 ||
                c + 1 === u ||
                (a = s.charCodeAt(c + 1)) < 56320 ||
                a > 57343
              ? e
                ? s.charAt(c)
                : o
              : e
              ? s.slice(c, c + 2)
              : a - 56320 + ((o - 55296) << 10) + 65536;
          };
        };
      e.exports = { codeAt: o(!1), charAt: o(!0) };
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(153),
        o = n(69),
        a = n(95),
        s = n(32),
        c = n(23),
        u = n(20),
        l = n(6),
        f = n(37),
        d = n(63),
        h = n(154),
        p = h.IteratorPrototype,
        v = h.BUGGY_SAFARI_ITERATORS,
        m = l("iterator"),
        y = "keys",
        g = "values",
        b = "entries",
        w = function () {
          return this;
        };
      e.exports = function (e, t, n, l, h, k, x) {
        i(n, t, l);
        var S,
          O,
          E,
          A = function (e) {
            if (e === h && I) return I;
            if (!v && e in _) return _[e];
            switch (e) {
              case y:
              case g:
              case b:
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this);
            };
          },
          C = t + " Iterator",
          P = !1,
          _ = e.prototype,
          j = _[m] || _["@@iterator"] || (h && _[h]),
          I = (!v && j) || A(h),
          T = ("Array" == t && _.entries) || j;
        if (
          (T &&
            ((S = o(T.call(new e()))),
            p !== Object.prototype &&
              S.next &&
              (f ||
                o(S) === p ||
                (a ? a(S, p) : "function" != typeof S[m] && c(S, m, w)),
              s(S, C, !0, !0),
              f && (d[C] = w))),
          h == g &&
            j &&
            j.name !== g &&
            ((P = !0),
            (I = function () {
              return j.call(this);
            })),
          (f && !x) || _[m] === I || c(_, m, I),
          (d[t] = I),
          h)
        )
          if (((O = { values: A(g), keys: k ? I : A(y), entries: A(b) }), x))
            for (E in O) (v || P || !(E in _)) && u(_, E, O[E]);
          else r({ target: t, proto: !0, forced: v || P }, O);
        return O;
      };
    },
    function (e, t, n) {
      var r = n(41),
        i = n(4);
      e.exports = "process" == r(i.process);
    },
    function (e, t, n) {
      "use strict";
      var r = n(8);
      e.exports = function () {
        var e = r(this),
          t = "";
        return (
          e.global && (t += "g"),
          e.ignoreCase && (t += "i"),
          e.multiline && (t += "m"),
          e.dotAll && (t += "s"),
          e.unicode && (t += "u"),
          e.sticky && (t += "y"),
          t
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(5);
      function i(e, t) {
        return RegExp(e, t);
      }
      (t.UNSUPPORTED_Y = r(function () {
        var e = i("a", "y");
        return (e.lastIndex = 2), null != e.exec("abcd");
      })),
        (t.BROKEN_CARET = r(function () {
          var e = i("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        }));
    },
    function (e, t, n) {
      var r = n(120);
      e.exports = function (e) {
        if (r(e))
          throw TypeError("The method doesn't accept regular expressions");
        return e;
      };
    },
    function (e, t, n) {
      var r = n(7),
        i = n(41),
        o = n(6)("match");
      e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
      };
    },
    function (e, t, n) {
      var r = n(6)("match");
      e.exports = function (e) {
        var t = /./;
        try {
          "/./"[e](t);
        } catch (n) {
          try {
            return (t[r] = !1), "/./"[e](t);
          } catch (e) {}
        }
        return !1;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(114).charAt;
      e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1);
      };
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return o;
        }),
          n.d(t, "b", function () {
            return a;
          });
        n(35), n(36), n(124), n(48), n(67), n(21);
        var r =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : "undefined" != typeof self
            ? self
            : {};
        var i = (function (e, t, n) {
            return (
              e(
                (n = {
                  path: t,
                  exports: {},
                  require: function (e, t) {
                    return (function () {
                      throw new Error(
                        "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                      );
                    })(null == t && n.path);
                  },
                }),
                n.exports
              ),
              n.exports
            );
          })(function (e, t) {
            var n =
              (r && r.__assign) ||
              function () {
                return (n =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var i in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, i) &&
                          (e[i] = t[i]);
                    return e;
                  }).apply(this, arguments);
              };
            function i(e, t) {
              if (!t) return "";
              var n = "; " + e;
              return !0 === t ? n : n + "=" + t;
            }
            function o(e, t, n) {
              return (
                encodeURIComponent(e)
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/\(/g, "%28")
                  .replace(/\)/g, "%29") +
                "=" +
                encodeURIComponent(t).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                ) +
                (function (e) {
                  if ("number" == typeof e.expires) {
                    var t = new Date();
                    t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
                      (e.expires = t);
                  }
                  return (
                    i("Expires", e.expires ? e.expires.toUTCString() : "") +
                    i("Domain", e.domain) +
                    i("Path", e.path) +
                    i("Secure", e.secure) +
                    i("SameSite", e.sameSite)
                  );
                })(n)
              );
            }
            function a(e) {
              for (
                var t = {},
                  n = e ? e.split("; ") : [],
                  r = /(%[\dA-F]{2})+/gi,
                  i = 0;
                i < n.length;
                i++
              ) {
                var o = n[i].split("="),
                  a = o.slice(1).join("=");
                '"' === a.charAt(0) && (a = a.slice(1, -1));
                try {
                  t[o[0].replace(r, decodeURIComponent)] = a.replace(
                    r,
                    decodeURIComponent
                  );
                } catch (e) {}
              }
              return t;
            }
            function s() {
              return a(document.cookie);
            }
            function c(e, t, r) {
              document.cookie = o(e, t, n({ path: "/" }, r));
            }
            (t.__esModule = !0),
              (t.encode = o),
              (t.parse = a),
              (t.getAll = s),
              (t.get = function (e) {
                return s()[e];
              }),
              (t.set = c),
              (t.remove = function (e, t) {
                c(e, "", n(n({}, t), { expires: -1 }));
              });
          }),
          o = (i.encode, i.get),
          a = (i.getAll, i.parse, i.remove, i.set);
      }.call(this, n(133)));
    },
    function (e, t, n) {
      "use strict";
      var r = n(85),
        i = n(8),
        o = n(14),
        a = n(47),
        s = n(24),
        c = n(122),
        u = n(193),
        l = n(86),
        f = Math.max,
        d = Math.min;
      r("replace", 2, function (e, t, n, r) {
        var h = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
          p = r.REPLACE_KEEPS_$0,
          v = h ? "$" : "$0";
        return [
          function (n, r) {
            var i = s(this),
              o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r);
          },
          function (e, r) {
            if ((!h && p) || ("string" == typeof r && -1 === r.indexOf(v))) {
              var s = n(t, e, this, r);
              if (s.done) return s.value;
            }
            var m = i(e),
              y = String(this),
              g = "function" == typeof r;
            g || (r = String(r));
            var b = m.global;
            if (b) {
              var w = m.unicode;
              m.lastIndex = 0;
            }
            for (var k = []; ; ) {
              var x = l(m, y);
              if (null === x) break;
              if ((k.push(x), !b)) break;
              "" === String(x[0]) && (m.lastIndex = c(y, o(m.lastIndex), w));
            }
            for (var S, O = "", E = 0, A = 0; A < k.length; A++) {
              x = k[A];
              for (
                var C = String(x[0]),
                  P = f(d(a(x.index), y.length), 0),
                  _ = [],
                  j = 1;
                j < x.length;
                j++
              )
                _.push(void 0 === (S = x[j]) ? S : String(S));
              var I = x.groups;
              if (g) {
                var T = [C].concat(_, P, y);
                void 0 !== I && T.push(I);
                var R = String(r.apply(void 0, T));
              } else R = u(C, y, P, _, I, r);
              P >= E && ((O += y.slice(E, P) + R), (E = P + C.length));
            }
            return O + y.slice(E);
          },
        ];
      });
    },
    function (e, t, n) {
      var r = n(8),
        i = n(49),
        o = n(6)("species");
      e.exports = function (e, t) {
        var n,
          a = r(e).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? t : i(n);
      };
    },
    function (e, t, n) {
      "use strict";
      n(13);
      var r,
        i = n(2),
        o = n(11),
        a = n(158),
        s = n(4),
        c = n(143),
        u = n(20),
        l = n(50),
        f = n(9),
        d = n(150),
        h = n(151),
        p = n(114).codeAt,
        v = n(187),
        m = n(32),
        y = n(188),
        g = n(25),
        b = s.URL,
        w = y.URLSearchParams,
        k = y.getState,
        x = g.set,
        S = g.getterFor("URL"),
        O = Math.floor,
        E = Math.pow,
        A = "Invalid scheme",
        C = "Invalid host",
        P = "Invalid port",
        _ = /[A-Za-z]/,
        j = /[\d+-.A-Za-z]/,
        I = /\d/,
        T = /^(0x|0X)/,
        R = /^[0-7]+$/,
        L = /^\d+$/,
        M = /^[\dA-Fa-f]+$/,
        N = /[\0\t\n\r #%/:?@[\\]]/,
        D = /[\0\t\n\r #/:?@[\\]]/,
        z = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        B = /[\t\n\r]/g,
        U = function (e, t) {
          var n, r, i;
          if ("[" == t.charAt(0)) {
            if ("]" != t.charAt(t.length - 1)) return C;
            if (!(n = F(t.slice(1, -1)))) return C;
            e.host = n;
          } else if (J(e)) {
            if (((t = v(t)), N.test(t))) return C;
            if (null === (n = H(t))) return C;
            e.host = n;
          } else {
            if (D.test(t)) return C;
            for (n = "", r = h(t), i = 0; i < r.length; i++) n += G(r[i], V);
            e.host = n;
          }
        },
        H = function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            c = e.split(".");
          if (
            (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4)
          )
            return e;
          for (n = [], r = 0; r < t; r++) {
            if ("" == (i = c[r])) return e;
            if (
              ((o = 10),
              i.length > 1 &&
                "0" == i.charAt(0) &&
                ((o = T.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
              "" === i)
            )
              a = 0;
            else {
              if (!(10 == o ? L : 8 == o ? R : M).test(i)) return e;
              a = parseInt(i, o);
            }
            n.push(a);
          }
          for (r = 0; r < t; r++)
            if (((a = n[r]), r == t - 1)) {
              if (a >= E(256, 5 - t)) return null;
            } else if (a > 255) return null;
          for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * E(256, 3 - r);
          return s;
        },
        F = function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            c = [0, 0, 0, 0, 0, 0, 0, 0],
            u = 0,
            l = null,
            f = 0,
            d = function () {
              return e.charAt(f);
            };
          if (":" == d()) {
            if (":" != e.charAt(1)) return;
            (f += 2), (l = ++u);
          }
          for (; d(); ) {
            if (8 == u) return;
            if (":" != d()) {
              for (t = n = 0; n < 4 && M.test(d()); )
                (t = 16 * t + parseInt(d(), 16)), f++, n++;
              if ("." == d()) {
                if (0 == n) return;
                if (((f -= n), u > 6)) return;
                for (r = 0; d(); ) {
                  if (((i = null), r > 0)) {
                    if (!("." == d() && r < 4)) return;
                    f++;
                  }
                  if (!I.test(d())) return;
                  for (; I.test(d()); ) {
                    if (((o = parseInt(d(), 10)), null === i)) i = o;
                    else {
                      if (0 == i) return;
                      i = 10 * i + o;
                    }
                    if (i > 255) return;
                    f++;
                  }
                  (c[u] = 256 * c[u] + i), (2 != ++r && 4 != r) || u++;
                }
                if (4 != r) return;
                break;
              }
              if (":" == d()) {
                if ((f++, !d())) return;
              } else if (d()) return;
              c[u++] = t;
            } else {
              if (null !== l) return;
              f++, (l = ++u);
            }
          }
          if (null !== l)
            for (a = u - l, u = 7; 0 != u && a > 0; )
              (s = c[u]), (c[u--] = c[l + a - 1]), (c[l + --a] = s);
          else if (8 != u) return;
          return c;
        },
        W = function (e) {
          var t, n, r, i;
          if ("number" == typeof e) {
            for (t = [], n = 0; n < 4; n++)
              t.unshift(e % 256), (e = O(e / 256));
            return t.join(".");
          }
          if ("object" == typeof e) {
            for (
              t = "",
                r = (function (e) {
                  for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
                    0 !== e[o]
                      ? (i > n && ((t = r), (n = i)), (r = null), (i = 0))
                      : (null === r && (r = o), ++i);
                  return i > n && ((t = r), (n = i)), t;
                })(e),
                n = 0;
              n < 8;
              n++
            )
              (i && 0 === e[n]) ||
                (i && (i = !1),
                r === n
                  ? ((t += n ? ":" : "::"), (i = !0))
                  : ((t += e[n].toString(16)), n < 7 && (t += ":")));
            return "[" + t + "]";
          }
          return e;
        },
        V = {},
        q = d({}, V, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
        $ = d({}, q, { "#": 1, "?": 1, "{": 1, "}": 1 }),
        K = d({}, $, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1,
        }),
        G = function (e, t) {
          var n = p(e, 0);
          return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e);
        },
        Y = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
        J = function (e) {
          return f(Y, e.scheme);
        },
        Z = function (e) {
          return "" != e.username || "" != e.password;
        },
        Q = function (e) {
          return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
        },
        X = function (e, t) {
          var n;
          return (
            2 == e.length &&
            _.test(e.charAt(0)) &&
            (":" == (n = e.charAt(1)) || (!t && "|" == n))
          );
        },
        ee = function (e) {
          var t;
          return (
            e.length > 1 &&
            X(e.slice(0, 2)) &&
            (2 == e.length ||
              "/" === (t = e.charAt(2)) ||
              "\\" === t ||
              "?" === t ||
              "#" === t)
          );
        },
        te = function (e) {
          var t = e.path,
            n = t.length;
          !n || ("file" == e.scheme && 1 == n && X(t[0], !0)) || t.pop();
        },
        ne = function (e) {
          return "." === e || "%2e" === e.toLowerCase();
        },
        re = {},
        ie = {},
        oe = {},
        ae = {},
        se = {},
        ce = {},
        ue = {},
        le = {},
        fe = {},
        de = {},
        he = {},
        pe = {},
        ve = {},
        me = {},
        ye = {},
        ge = {},
        be = {},
        we = {},
        ke = {},
        xe = {},
        Se = {},
        Oe = function (e, t, n, i) {
          var o,
            a,
            s,
            c,
            u,
            l = n || re,
            d = 0,
            p = "",
            v = !1,
            m = !1,
            y = !1;
          for (
            n ||
              ((e.scheme = ""),
              (e.username = ""),
              (e.password = ""),
              (e.host = null),
              (e.port = null),
              (e.path = []),
              (e.query = null),
              (e.fragment = null),
              (e.cannotBeABaseURL = !1),
              (t = t.replace(z, ""))),
              t = t.replace(B, ""),
              o = h(t);
            d <= o.length;

          ) {
            switch (((a = o[d]), l)) {
              case re:
                if (!a || !_.test(a)) {
                  if (n) return A;
                  l = oe;
                  continue;
                }
                (p += a.toLowerCase()), (l = ie);
                break;
              case ie:
                if (a && (j.test(a) || "+" == a || "-" == a || "." == a))
                  p += a.toLowerCase();
                else {
                  if (":" != a) {
                    if (n) return A;
                    (p = ""), (l = oe), (d = 0);
                    continue;
                  }
                  if (
                    n &&
                    (J(e) != f(Y, p) ||
                      ("file" == p && (Z(e) || null !== e.port)) ||
                      ("file" == e.scheme && !e.host))
                  )
                    return;
                  if (((e.scheme = p), n))
                    return void (
                      J(e) &&
                      Y[e.scheme] == e.port &&
                      (e.port = null)
                    );
                  (p = ""),
                    "file" == e.scheme
                      ? (l = me)
                      : J(e) && i && i.scheme == e.scheme
                      ? (l = ae)
                      : J(e)
                      ? (l = le)
                      : "/" == o[d + 1]
                      ? ((l = se), d++)
                      : ((e.cannotBeABaseURL = !0), e.path.push(""), (l = ke));
                }
                break;
              case oe:
                if (!i || (i.cannotBeABaseURL && "#" != a)) return A;
                if (i.cannotBeABaseURL && "#" == a) {
                  (e.scheme = i.scheme),
                    (e.path = i.path.slice()),
                    (e.query = i.query),
                    (e.fragment = ""),
                    (e.cannotBeABaseURL = !0),
                    (l = Se);
                  break;
                }
                l = "file" == i.scheme ? me : ce;
                continue;
              case ae:
                if ("/" != a || "/" != o[d + 1]) {
                  l = ce;
                  continue;
                }
                (l = fe), d++;
                break;
              case se:
                if ("/" == a) {
                  l = de;
                  break;
                }
                l = we;
                continue;
              case ce:
                if (((e.scheme = i.scheme), a == r))
                  (e.username = i.username),
                    (e.password = i.password),
                    (e.host = i.host),
                    (e.port = i.port),
                    (e.path = i.path.slice()),
                    (e.query = i.query);
                else if ("/" == a || ("\\" == a && J(e))) l = ue;
                else if ("?" == a)
                  (e.username = i.username),
                    (e.password = i.password),
                    (e.host = i.host),
                    (e.port = i.port),
                    (e.path = i.path.slice()),
                    (e.query = ""),
                    (l = xe);
                else {
                  if ("#" != a) {
                    (e.username = i.username),
                      (e.password = i.password),
                      (e.host = i.host),
                      (e.port = i.port),
                      (e.path = i.path.slice()),
                      e.path.pop(),
                      (l = we);
                    continue;
                  }
                  (e.username = i.username),
                    (e.password = i.password),
                    (e.host = i.host),
                    (e.port = i.port),
                    (e.path = i.path.slice()),
                    (e.query = i.query),
                    (e.fragment = ""),
                    (l = Se);
                }
                break;
              case ue:
                if (!J(e) || ("/" != a && "\\" != a)) {
                  if ("/" != a) {
                    (e.username = i.username),
                      (e.password = i.password),
                      (e.host = i.host),
                      (e.port = i.port),
                      (l = we);
                    continue;
                  }
                  l = de;
                } else l = fe;
                break;
              case le:
                if (((l = fe), "/" != a || "/" != p.charAt(d + 1))) continue;
                d++;
                break;
              case fe:
                if ("/" != a && "\\" != a) {
                  l = de;
                  continue;
                }
                break;
              case de:
                if ("@" == a) {
                  v && (p = "%40" + p), (v = !0), (s = h(p));
                  for (var g = 0; g < s.length; g++) {
                    var b = s[g];
                    if (":" != b || y) {
                      var w = G(b, K);
                      y ? (e.password += w) : (e.username += w);
                    } else y = !0;
                  }
                  p = "";
                } else if (
                  a == r ||
                  "/" == a ||
                  "?" == a ||
                  "#" == a ||
                  ("\\" == a && J(e))
                ) {
                  if (v && "" == p) return "Invalid authority";
                  (d -= h(p).length + 1), (p = ""), (l = he);
                } else p += a;
                break;
              case he:
              case pe:
                if (n && "file" == e.scheme) {
                  l = ge;
                  continue;
                }
                if (":" != a || m) {
                  if (
                    a == r ||
                    "/" == a ||
                    "?" == a ||
                    "#" == a ||
                    ("\\" == a && J(e))
                  ) {
                    if (J(e) && "" == p) return C;
                    if (n && "" == p && (Z(e) || null !== e.port)) return;
                    if ((c = U(e, p))) return c;
                    if (((p = ""), (l = be), n)) return;
                    continue;
                  }
                  "[" == a ? (m = !0) : "]" == a && (m = !1), (p += a);
                } else {
                  if ("" == p) return C;
                  if ((c = U(e, p))) return c;
                  if (((p = ""), (l = ve), n == pe)) return;
                }
                break;
              case ve:
                if (!I.test(a)) {
                  if (
                    a == r ||
                    "/" == a ||
                    "?" == a ||
                    "#" == a ||
                    ("\\" == a && J(e)) ||
                    n
                  ) {
                    if ("" != p) {
                      var k = parseInt(p, 10);
                      if (k > 65535) return P;
                      (e.port = J(e) && k === Y[e.scheme] ? null : k), (p = "");
                    }
                    if (n) return;
                    l = be;
                    continue;
                  }
                  return P;
                }
                p += a;
                break;
              case me:
                if (((e.scheme = "file"), "/" == a || "\\" == a)) l = ye;
                else {
                  if (!i || "file" != i.scheme) {
                    l = we;
                    continue;
                  }
                  if (a == r)
                    (e.host = i.host),
                      (e.path = i.path.slice()),
                      (e.query = i.query);
                  else if ("?" == a)
                    (e.host = i.host),
                      (e.path = i.path.slice()),
                      (e.query = ""),
                      (l = xe);
                  else {
                    if ("#" != a) {
                      ee(o.slice(d).join("")) ||
                        ((e.host = i.host), (e.path = i.path.slice()), te(e)),
                        (l = we);
                      continue;
                    }
                    (e.host = i.host),
                      (e.path = i.path.slice()),
                      (e.query = i.query),
                      (e.fragment = ""),
                      (l = Se);
                  }
                }
                break;
              case ye:
                if ("/" == a || "\\" == a) {
                  l = ge;
                  break;
                }
                i &&
                  "file" == i.scheme &&
                  !ee(o.slice(d).join("")) &&
                  (X(i.path[0], !0)
                    ? e.path.push(i.path[0])
                    : (e.host = i.host)),
                  (l = we);
                continue;
              case ge:
                if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                  if (!n && X(p)) l = we;
                  else if ("" == p) {
                    if (((e.host = ""), n)) return;
                    l = be;
                  } else {
                    if ((c = U(e, p))) return c;
                    if (("localhost" == e.host && (e.host = ""), n)) return;
                    (p = ""), (l = be);
                  }
                  continue;
                }
                p += a;
                break;
              case be:
                if (J(e)) {
                  if (((l = we), "/" != a && "\\" != a)) continue;
                } else if (n || "?" != a)
                  if (n || "#" != a) {
                    if (a != r && ((l = we), "/" != a)) continue;
                  } else (e.fragment = ""), (l = Se);
                else (e.query = ""), (l = xe);
                break;
              case we:
                if (
                  a == r ||
                  "/" == a ||
                  ("\\" == a && J(e)) ||
                  (!n && ("?" == a || "#" == a))
                ) {
                  if (
                    (".." === (u = (u = p).toLowerCase()) ||
                    "%2e." === u ||
                    ".%2e" === u ||
                    "%2e%2e" === u
                      ? (te(e),
                        "/" == a || ("\\" == a && J(e)) || e.path.push(""))
                      : ne(p)
                      ? "/" == a || ("\\" == a && J(e)) || e.path.push("")
                      : ("file" == e.scheme &&
                          !e.path.length &&
                          X(p) &&
                          (e.host && (e.host = ""), (p = p.charAt(0) + ":")),
                        e.path.push(p)),
                    (p = ""),
                    "file" == e.scheme && (a == r || "?" == a || "#" == a))
                  )
                    for (; e.path.length > 1 && "" === e.path[0]; )
                      e.path.shift();
                  "?" == a
                    ? ((e.query = ""), (l = xe))
                    : "#" == a && ((e.fragment = ""), (l = Se));
                } else p += G(a, $);
                break;
              case ke:
                "?" == a
                  ? ((e.query = ""), (l = xe))
                  : "#" == a
                  ? ((e.fragment = ""), (l = Se))
                  : a != r && (e.path[0] += G(a, V));
                break;
              case xe:
                n || "#" != a
                  ? a != r &&
                    ("'" == a && J(e)
                      ? (e.query += "%27")
                      : (e.query += "#" == a ? "%23" : G(a, V)))
                  : ((e.fragment = ""), (l = Se));
                break;
              case Se:
                a != r && (e.fragment += G(a, q));
            }
            d++;
          }
        },
        Ee = function (e) {
          var t,
            n,
            r = l(this, Ee, "URL"),
            i = arguments.length > 1 ? arguments[1] : void 0,
            a = String(e),
            s = x(r, { type: "URL" });
          if (void 0 !== i)
            if (i instanceof Ee) t = S(i);
            else if ((n = Oe((t = {}), String(i)))) throw TypeError(n);
          if ((n = Oe(s, a, null, t))) throw TypeError(n);
          var c = (s.searchParams = new w()),
            u = k(c);
          u.updateSearchParams(s.query),
            (u.updateURL = function () {
              s.query = String(c) || null;
            }),
            o ||
              ((r.href = Ce.call(r)),
              (r.origin = Pe.call(r)),
              (r.protocol = _e.call(r)),
              (r.username = je.call(r)),
              (r.password = Ie.call(r)),
              (r.host = Te.call(r)),
              (r.hostname = Re.call(r)),
              (r.port = Le.call(r)),
              (r.pathname = Me.call(r)),
              (r.search = Ne.call(r)),
              (r.searchParams = De.call(r)),
              (r.hash = ze.call(r)));
        },
        Ae = Ee.prototype,
        Ce = function () {
          var e = S(this),
            t = e.scheme,
            n = e.username,
            r = e.password,
            i = e.host,
            o = e.port,
            a = e.path,
            s = e.query,
            c = e.fragment,
            u = t + ":";
          return (
            null !== i
              ? ((u += "//"),
                Z(e) && (u += n + (r ? ":" + r : "") + "@"),
                (u += W(i)),
                null !== o && (u += ":" + o))
              : "file" == t && (u += "//"),
            (u += e.cannotBeABaseURL
              ? a[0]
              : a.length
              ? "/" + a.join("/")
              : ""),
            null !== s && (u += "?" + s),
            null !== c && (u += "#" + c),
            u
          );
        },
        Pe = function () {
          var e = S(this),
            t = e.scheme,
            n = e.port;
          if ("blob" == t)
            try {
              return new Ee(t.path[0]).origin;
            } catch (e) {
              return "null";
            }
          return "file" != t && J(e)
            ? t + "://" + W(e.host) + (null !== n ? ":" + n : "")
            : "null";
        },
        _e = function () {
          return S(this).scheme + ":";
        },
        je = function () {
          return S(this).username;
        },
        Ie = function () {
          return S(this).password;
        },
        Te = function () {
          var e = S(this),
            t = e.host,
            n = e.port;
          return null === t ? "" : null === n ? W(t) : W(t) + ":" + n;
        },
        Re = function () {
          var e = S(this).host;
          return null === e ? "" : W(e);
        },
        Le = function () {
          var e = S(this).port;
          return null === e ? "" : String(e);
        },
        Me = function () {
          var e = S(this),
            t = e.path;
          return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
        },
        Ne = function () {
          var e = S(this).query;
          return e ? "?" + e : "";
        },
        De = function () {
          return S(this).searchParams;
        },
        ze = function () {
          var e = S(this).fragment;
          return e ? "#" + e : "";
        },
        Be = function (e, t) {
          return { get: e, set: t, configurable: !0, enumerable: !0 };
        };
      if (
        (o &&
          c(Ae, {
            href: Be(Ce, function (e) {
              var t = S(this),
                n = String(e),
                r = Oe(t, n);
              if (r) throw TypeError(r);
              k(t.searchParams).updateSearchParams(t.query);
            }),
            origin: Be(Pe),
            protocol: Be(_e, function (e) {
              var t = S(this);
              Oe(t, String(e) + ":", re);
            }),
            username: Be(je, function (e) {
              var t = S(this),
                n = h(String(e));
              if (!Q(t)) {
                t.username = "";
                for (var r = 0; r < n.length; r++) t.username += G(n[r], K);
              }
            }),
            password: Be(Ie, function (e) {
              var t = S(this),
                n = h(String(e));
              if (!Q(t)) {
                t.password = "";
                for (var r = 0; r < n.length; r++) t.password += G(n[r], K);
              }
            }),
            host: Be(Te, function (e) {
              var t = S(this);
              t.cannotBeABaseURL || Oe(t, String(e), he);
            }),
            hostname: Be(Re, function (e) {
              var t = S(this);
              t.cannotBeABaseURL || Oe(t, String(e), pe);
            }),
            port: Be(Le, function (e) {
              var t = S(this);
              Q(t) || ("" == (e = String(e)) ? (t.port = null) : Oe(t, e, ve));
            }),
            pathname: Be(Me, function (e) {
              var t = S(this);
              t.cannotBeABaseURL || ((t.path = []), Oe(t, e + "", be));
            }),
            search: Be(Ne, function (e) {
              var t = S(this);
              "" == (e = String(e))
                ? (t.query = null)
                : ("?" == e.charAt(0) && (e = e.slice(1)),
                  (t.query = ""),
                  Oe(t, e, xe)),
                k(t.searchParams).updateSearchParams(t.query);
            }),
            searchParams: Be(De),
            hash: Be(ze, function (e) {
              var t = S(this);
              "" != (e = String(e))
                ? ("#" == e.charAt(0) && (e = e.slice(1)),
                  (t.fragment = ""),
                  Oe(t, e, Se))
                : (t.fragment = null);
            }),
          }),
        u(
          Ae,
          "toJSON",
          function () {
            return Ce.call(this);
          },
          { enumerable: !0 }
        ),
        u(
          Ae,
          "toString",
          function () {
            return Ce.call(this);
          },
          { enumerable: !0 }
        ),
        b)
      ) {
        var Ue = b.createObjectURL,
          He = b.revokeObjectURL;
        Ue &&
          u(Ee, "createObjectURL", function (e) {
            return Ue.apply(b, arguments);
          }),
          He &&
            u(Ee, "revokeObjectURL", function (e) {
              return He.apply(b, arguments);
            });
      }
      m(Ee, "URL"), i({ global: !0, forced: !a, sham: !o }, { URL: Ee });
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(131).includes,
        o = n(82);
      r(
        { target: "Array", proto: !0 },
        {
          includes: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        o("includes");
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(119),
        o = n(24);
      r(
        { target: "String", proto: !0, forced: !n(121)("includes") },
        {
          includes: function (e) {
            return !!~String(o(this)).indexOf(
              i(e),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(87),
        i = n(159);
      e.exports = r(
        "Set",
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        i
      );
    },
    function (e, t, n) {
      "use strict";
      var r,
        i = n(4),
        o = n(57),
        a = n(60),
        s = n(87),
        c = n(162),
        u = n(7),
        l = n(25).enforce,
        f = n(138),
        d = !i.ActiveXObject && "ActiveXObject" in i,
        h = Object.isExtensible,
        p = function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        v = (e.exports = s("WeakMap", p, c));
      if (f && d) {
        (r = c.getConstructor(p, "WeakMap", !0)), (a.REQUIRED = !0);
        var m = v.prototype,
          y = m.delete,
          g = m.has,
          b = m.get,
          w = m.set;
        o(m, {
          delete: function (e) {
            if (u(e) && !h(e)) {
              var t = l(this);
              return (
                t.frozen || (t.frozen = new r()),
                y.call(this, e) || t.frozen.delete(e)
              );
            }
            return y.call(this, e);
          },
          has: function (e) {
            if (u(e) && !h(e)) {
              var t = l(this);
              return (
                t.frozen || (t.frozen = new r()),
                g.call(this, e) || t.frozen.has(e)
              );
            }
            return g.call(this, e);
          },
          get: function (e) {
            if (u(e) && !h(e)) {
              var t = l(this);
              return (
                t.frozen || (t.frozen = new r()),
                g.call(this, e) ? b.call(this, e) : t.frozen.get(e)
              );
            }
            return b.call(this, e);
          },
          set: function (e, t) {
            if (u(e) && !h(e)) {
              var n = l(this);
              n.frozen || (n.frozen = new r()),
                g.call(this, e) ? w.call(this, e, t) : n.frozen.set(e, t);
            } else w.call(this, e, t);
            return this;
          },
        });
      }
    },
    function (e, t, n) {
      var r = n(30),
        i = n(14),
        o = n(68),
        a = function (e) {
          return function (t, n, a) {
            var s,
              c = r(t),
              u = i(c.length),
              l = o(a, u);
            if (e && n != n) {
              for (; u > l; ) if ((s = c[l++]) != s) return !0;
            } else
              for (; u > l; l++)
                if ((e || l in c) && c[l] === n) return e || l || 0;
            return !e && -1;
          };
        };
      e.exports = { includes: a(!0), indexOf: a(!1) };
    },
    function (e, t, n) {
      "use strict";
      var r = n(5);
      e.exports = function (e, t) {
        var n = [][e];
        return (
          !!n &&
          r(function () {
            n.call(
              null,
              t ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(6),
        i = n(63),
        o = r("iterator"),
        a = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (i.Array === e || a[o] === e);
      };
    },
    function (e, t, n) {
      "use strict";
      var r, i;
      n.d(t, "a", function () {
        return r;
      }),
        ((i = r || (r = {})).Off = "off"),
        (i.Fixed = "fixed"),
        (i.PageBottom = "pageBottom");
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      n(34);
      var r = n(71);
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var o = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.generator = t.generator);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "get",
              value: function () {
                return Object(r.a)(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.cachedResponse) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", this.cachedResponse);
                            case 2:
                              if (!this.previousPromise) {
                                e.next = 5;
                                break;
                              }
                              return (
                                (this.previousPromise =
                                  this.previousPromise.then(function (e) {
                                    return e;
                                  })),
                                e.abrupt("return", this.previousPromise)
                              );
                            case 5:
                              return (
                                (this.previousPromise =
                                  this.generateSingletonAndCache()),
                                e.abrupt("return", this.previousPromise)
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "reset",
              value: function () {
                (this.cachedResponse = void 0), (this.previousPromise = void 0);
              },
            },
            {
              key: "generateSingletonAndCache",
              value: function () {
                return Object(r.a)(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.generator();
                            case 2:
                              return (
                                (t = e.sent),
                                (this.cachedResponse = t),
                                e.abrupt("return", t)
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
          ]) && i(t.prototype, n),
          o && i(t, o),
          e
        );
      })();
    },
    function (e, t, n) {
      var r = n(11),
        i = n(5),
        o = n(106);
      e.exports =
        !r &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(o("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (e, t, n) {
      var r = n(4),
        i = n(108),
        o = r.WeakMap;
      e.exports = "function" == typeof o && /native code/.test(i(o));
    },
    function (e, t, n) {
      var r = n(9),
        i = n(175),
        o = n(31),
        a = n(15);
      e.exports = function (e, t) {
        for (var n = i(t), s = a.f, c = o.f, u = 0; u < n.length; u++) {
          var l = n[u];
          r(e, l) || s(e, l, c(t, l));
        }
      };
    },
    function (e, t, n) {
      var r = n(4);
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(9),
        i = n(30),
        o = n(131).indexOf,
        a = n(58);
      e.exports = function (e, t) {
        var n,
          s = i(e),
          c = 0,
          u = [];
        for (n in s) !r(a, n) && r(s, n) && u.push(n);
        for (; t.length > c; ) r(s, (n = t[c++])) && (~o(u, n) || u.push(n));
        return u;
      };
    },
    function (e, t, n) {
      var r = n(5);
      e.exports = !r(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      });
    },
    function (e, t, n) {
      var r = n(11),
        i = n(15),
        o = n(8),
        a = n(74);
      e.exports = r
        ? Object.defineProperties
        : function (e, t) {
            o(e);
            for (var n, r = a(t), s = r.length, c = 0; s > c; )
              i.f(e, (n = r[c++]), t[n]);
            return e;
          };
    },
    function (e, t, n) {
      var r = n(38);
      e.exports = r("document", "documentElement");
    },
    function (e, t, n) {
      var r = n(5);
      e.exports = !r(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    function (e, t, n) {
      var r = n(112);
      e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (e, t) {
      e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    function (e, t, n) {
      var r = n(6);
      t.f = r;
    },
    function (e, t, n) {
      var r = n(30),
        i = n(56).f,
        o = {}.toString,
        a =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      e.exports.f = function (e) {
        return a && "[object Window]" == o.call(e)
          ? (function (e) {
              try {
                return i(e);
              } catch (e) {
                return a.slice();
              }
            })(e)
          : i(r(e));
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(11),
        i = n(5),
        o = n(74),
        a = n(111),
        s = n(76),
        c = n(22),
        u = n(72),
        l = Object.assign,
        f = Object.defineProperty;
      e.exports =
        !l ||
        i(function () {
          if (
            r &&
            1 !==
              l(
                { b: 1 },
                l(
                  f({}, "a", {
                    enumerable: !0,
                    get: function () {
                      f(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var e = {},
            t = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
          return (
            (e[n] = 7),
            i.split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != l({}, e)[n] || o(l({}, t)).join("") != i
          );
        })
          ? function (e, t) {
              for (
                var n = c(e), i = arguments.length, l = 1, f = a.f, d = s.f;
                i > l;

              )
                for (
                  var h,
                    p = u(arguments[l++]),
                    v = f ? o(p).concat(f(p)) : o(p),
                    m = v.length,
                    y = 0;
                  m > y;

                )
                  (h = v[y++]), (r && !d.call(p, h)) || (n[h] = p[h]);
              return n;
            }
          : l;
    },
    function (e, t, n) {
      "use strict";
      var r = n(43),
        i = n(22),
        o = n(181),
        a = n(134),
        s = n(14),
        c = n(80),
        u = n(75);
      e.exports = function (e) {
        var t,
          n,
          l,
          f,
          d,
          h,
          p = i(e),
          v = "function" == typeof this ? this : Array,
          m = arguments.length,
          y = m > 1 ? arguments[1] : void 0,
          g = void 0 !== y,
          b = u(p),
          w = 0;
        if (
          (g && (y = r(y, m > 2 ? arguments[2] : void 0, 2)),
          null == b || (v == Array && a(b)))
        )
          for (n = new v((t = s(p.length))); t > w; w++)
            (h = g ? y(p[w], w) : p[w]), c(n, w, h);
        else
          for (
            d = (f = b.call(p)).next, n = new v();
            !(l = d.call(f)).done;
            w++
          )
            (h = g ? o(f, y, [l.value, w], !0) : l.value), c(n, w, h);
        return (n.length = w), n;
      };
    },
    function (e, t, n) {
      var r = n(8);
      e.exports = function (e) {
        var t = e.return;
        if (void 0 !== t) return r(t.call(e)).value;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(154).IteratorPrototype,
        i = n(42),
        o = n(51),
        a = n(32),
        s = n(63),
        c = function () {
          return this;
        };
      e.exports = function (e, t, n) {
        var u = t + " Iterator";
        return (
          (e.prototype = i(r, { next: o(1, n) })),
          a(e, u, !1, !0),
          (s[u] = c),
          e
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r,
        i,
        o,
        a = n(5),
        s = n(69),
        c = n(23),
        u = n(9),
        l = n(6),
        f = n(37),
        d = l("iterator"),
        h = !1;
      [].keys &&
        ("next" in (o = [].keys())
          ? (i = s(s(o))) !== Object.prototype && (r = i)
          : (h = !0));
      var p =
        null == r ||
        a(function () {
          var e = {};
          return r[d].call(e) !== e;
        });
      p && (r = {}),
        (f && !p) ||
          u(r, d) ||
          c(r, d, function () {
            return this;
          }),
        (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h });
    },
    function (e, t, n) {
      var r,
        i,
        o,
        a = n(4),
        s = n(5),
        c = n(43),
        u = n(144),
        l = n(106),
        f = n(156),
        d = n(116),
        h = a.location,
        p = a.setImmediate,
        v = a.clearImmediate,
        m = a.process,
        y = a.MessageChannel,
        g = a.Dispatch,
        b = 0,
        w = {},
        k = "onreadystatechange",
        x = function (e) {
          if (w.hasOwnProperty(e)) {
            var t = w[e];
            delete w[e], t();
          }
        },
        S = function (e) {
          return function () {
            x(e);
          };
        },
        O = function (e) {
          x(e.data);
        },
        E = function (e) {
          a.postMessage(e + "", h.protocol + "//" + h.host);
        };
      (p && v) ||
        ((p = function (e) {
          for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
          return (
            (w[++b] = function () {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t);
            }),
            r(b),
            b
          );
        }),
        (v = function (e) {
          delete w[e];
        }),
        d
          ? (r = function (e) {
              m.nextTick(S(e));
            })
          : g && g.now
          ? (r = function (e) {
              g.now(S(e));
            })
          : y && !f
          ? ((o = (i = new y()).port2),
            (i.port1.onmessage = O),
            (r = c(o.postMessage, o, 1)))
          : a.addEventListener &&
            "function" == typeof postMessage &&
            !a.importScripts &&
            h &&
            "file:" !== h.protocol &&
            !s(E)
          ? ((r = E), a.addEventListener("message", O, !1))
          : (r =
              k in l("script")
                ? function (e) {
                    u.appendChild(l("script")).onreadystatechange =
                      function () {
                        u.removeChild(this), x(e);
                      };
                  }
                : function (e) {
                    setTimeout(S(e), 0);
                  })),
        (e.exports = { set: p, clear: v });
    },
    function (e, t, n) {
      var r = n(94);
      e.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(49),
        i = function (e) {
          var t, n;
          (this.promise = new e(function (e, r) {
            if (void 0 !== t || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (t = e), (n = r);
          })),
            (this.resolve = r(t)),
            (this.reject = r(n));
        };
      e.exports.f = function (e) {
        return new i(e);
      };
    },
    function (e, t, n) {
      var r = n(5),
        i = n(6),
        o = n(37),
        a = i("iterator");
      e.exports = !r(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
          t = e.searchParams,
          n = "";
        return (
          (e.pathname = "c%20d"),
          t.forEach(function (e, r) {
            t.delete("b"), (n += r + e);
          }),
          (o && !e.toJSON) ||
            !t.sort ||
            "http://a/c%20d?a=1&c=3" !== e.href ||
            "3" !== t.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !t[a] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== n ||
            "x" !== new URL("http://x", void 0).host
        );
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(15).f,
        i = n(42),
        o = n(57),
        a = n(43),
        s = n(50),
        c = n(83),
        u = n(115),
        l = n(100),
        f = n(11),
        d = n(60).fastKey,
        h = n(25),
        p = h.set,
        v = h.getterFor;
      e.exports = {
        getConstructor: function (e, t, n, u) {
          var l = e(function (e, r) {
              s(e, l, t),
                p(e, {
                  type: t,
                  index: i(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                f || (e.size = 0),
                null != r && c(r, e[u], { that: e, AS_ENTRIES: n });
            }),
            h = v(t),
            m = function (e, t, n) {
              var r,
                i,
                o = h(e),
                a = y(e, t);
              return (
                a
                  ? (a.value = n)
                  : ((o.last = a =
                      {
                        index: (i = d(t, !0)),
                        key: t,
                        value: n,
                        previous: (r = o.last),
                        next: void 0,
                        removed: !1,
                      }),
                    o.first || (o.first = a),
                    r && (r.next = a),
                    f ? o.size++ : e.size++,
                    "F" !== i && (o.index[i] = a)),
                e
              );
            },
            y = function (e, t) {
              var n,
                r = h(e),
                i = d(t);
              if ("F" !== i) return r.index[i];
              for (n = r.first; n; n = n.next) if (n.key == t) return n;
            };
          return (
            o(l.prototype, {
              clear: function () {
                for (var e = h(this), t = e.index, n = e.first; n; )
                  (n.removed = !0),
                    n.previous && (n.previous = n.previous.next = void 0),
                    delete t[n.index],
                    (n = n.next);
                (e.first = e.last = void 0), f ? (e.size = 0) : (this.size = 0);
              },
              delete: function (e) {
                var t = this,
                  n = h(t),
                  r = y(t, e);
                if (r) {
                  var i = r.next,
                    o = r.previous;
                  delete n.index[r.index],
                    (r.removed = !0),
                    o && (o.next = i),
                    i && (i.previous = o),
                    n.first == r && (n.first = i),
                    n.last == r && (n.last = o),
                    f ? n.size-- : t.size--;
                }
                return !!r;
              },
              forEach: function (e) {
                for (
                  var t,
                    n = h(this),
                    r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (t = t ? t.next : n.first);

                )
                  for (r(t.value, t.key, this); t && t.removed; )
                    t = t.previous;
              },
              has: function (e) {
                return !!y(this, e);
              },
            }),
            o(
              l.prototype,
              n
                ? {
                    get: function (e) {
                      var t = y(this, e);
                      return t && t.value;
                    },
                    set: function (e, t) {
                      return m(this, 0 === e ? 0 : e, t);
                    },
                  }
                : {
                    add: function (e) {
                      return m(this, (e = 0 === e ? 0 : e), e);
                    },
                  }
            ),
            f &&
              r(l.prototype, "size", {
                get: function () {
                  return h(this).size;
                },
              }),
            l
          );
        },
        setStrong: function (e, t, n) {
          var r = t + " Iterator",
            i = v(t),
            o = v(r);
          u(
            e,
            t,
            function (e, t) {
              p(this, {
                type: r,
                target: e,
                state: i(e),
                kind: t,
                last: void 0,
              });
            },
            function () {
              for (var e = o(this), t = e.kind, n = e.last; n && n.removed; )
                n = n.previous;
              return e.target && (e.last = n = n ? n.next : e.state.first)
                ? "keys" == t
                  ? { value: n.key, done: !1 }
                  : "values" == t
                  ? { value: n.value, done: !1 }
                  : { value: [n.key, n.value], done: !1 }
                : ((e.target = void 0), { value: void 0, done: !0 });
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            l(t);
        },
      };
    },
    function (e, t, n) {
      var r = n(2),
        i = n(5),
        o = n(149).f;
      r(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            return !Object.getOwnPropertyNames(1);
          }),
        },
        { getOwnPropertyNames: o }
      );
    },
    function (e, t, n) {
      var r = n(2),
        i = n(7),
        o = n(8),
        a = n(9),
        s = n(31),
        c = n(69);
      r(
        { target: "Reflect", stat: !0 },
        {
          get: function e(t, n) {
            var r,
              u,
              l = arguments.length < 3 ? t : arguments[2];
            return o(t) === l
              ? t[n]
              : (r = s.f(t, n))
              ? a(r, "value")
                ? r.value
                : void 0 === r.get
                ? void 0
                : r.get.call(l)
              : i((u = c(t)))
              ? e(u, n, l)
              : void 0;
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(57),
        i = n(60).getWeakData,
        o = n(8),
        a = n(7),
        s = n(50),
        c = n(83),
        u = n(46),
        l = n(9),
        f = n(25),
        d = f.set,
        h = f.getterFor,
        p = u.find,
        v = u.findIndex,
        m = 0,
        y = function (e) {
          return e.frozen || (e.frozen = new g());
        },
        g = function () {
          this.entries = [];
        },
        b = function (e, t) {
          return p(e.entries, function (e) {
            return e[0] === t;
          });
        };
      (g.prototype = {
        get: function (e) {
          var t = b(this, e);
          if (t) return t[1];
        },
        has: function (e) {
          return !!b(this, e);
        },
        set: function (e, t) {
          var n = b(this, e);
          n ? (n[1] = t) : this.entries.push([e, t]);
        },
        delete: function (e) {
          var t = v(this.entries, function (t) {
            return t[0] === e;
          });
          return ~t && this.entries.splice(t, 1), !!~t;
        },
      }),
        (e.exports = {
          getConstructor: function (e, t, n, u) {
            var f = e(function (e, r) {
                s(e, f, t),
                  d(e, { type: t, id: m++, frozen: void 0 }),
                  null != r && c(r, e[u], { that: e, AS_ENTRIES: n });
              }),
              p = h(t),
              v = function (e, t, n) {
                var r = p(e),
                  a = i(o(t), !0);
                return !0 === a ? y(r).set(t, n) : (a[r.id] = n), e;
              };
            return (
              r(f.prototype, {
                delete: function (e) {
                  var t = p(this);
                  if (!a(e)) return !1;
                  var n = i(e);
                  return !0 === n
                    ? y(t).delete(e)
                    : n && l(n, t.id) && delete n[t.id];
                },
                has: function (e) {
                  var t = p(this);
                  if (!a(e)) return !1;
                  var n = i(e);
                  return !0 === n ? y(t).has(e) : n && l(n, t.id);
                },
              }),
              r(
                f.prototype,
                n
                  ? {
                      get: function (e) {
                        var t = p(this);
                        if (a(e)) {
                          var n = i(e);
                          return !0 === n ? y(t).get(e) : n ? n[t.id] : void 0;
                        }
                      },
                      set: function (e, t) {
                        return v(this, e, t);
                      },
                    }
                  : {
                      add: function (e) {
                        return v(this, e, !0);
                      },
                    }
              ),
              f
            );
          },
        });
    },
    function (e, t, n) {
      "use strict";
      var r,
        i = n(2),
        o = n(31).f,
        a = n(14),
        s = n(119),
        c = n(24),
        u = n(121),
        l = n(37),
        f = "".endsWith,
        d = Math.min,
        h = u("endsWith");
      i(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              l ||
              h ||
              ((r = o(String.prototype, "endsWith")), !r || r.writable)
            ) && !h,
        },
        {
          endsWith: function (e) {
            var t = String(c(this));
            s(e);
            var n = arguments.length > 1 ? arguments[1] : void 0,
              r = a(t.length),
              i = void 0 === n ? r : d(a(n), r),
              o = String(e);
            return f ? f.call(t, o, i) : t.slice(i - o.length, i) === o;
          },
        }
      );
    },
    function (e, t, n) {
      var r = n(2),
        i = n(168),
        o = n(82);
      r({ target: "Array", proto: !0 }, { fill: i }), o("fill");
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "AlertBannerMode", function () {
          return o;
        }),
        n.d(t, "AlertBanner", function () {
          return E;
        });
      n(27),
        n(28),
        n(53),
        n(40),
        n(45),
        n(65),
        n(88),
        n(89),
        n(90),
        n(12),
        n(17),
        n(18),
        n(35),
        n(66),
        n(91),
        n(92),
        n(54),
        n(21),
        n(26),
        n(29),
        n(13),
        n(19),
        n(10),
        n(16),
        n(39);
      var r,
        i,
        o,
        a,
        s = n(1),
        c = n(3);
      function u(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = v(e);
          if (t) {
            var i = v(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(e, t) {
        return !t || ("object" !== m(t) && "function" != typeof t) ? p(e) : t;
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function y() {
        y = function () {
          return e;
        };
        var e = {
          elementsDefinitionOrder: [["method"], ["field"]],
          initializeInstanceElements: function (e, t) {
            ["method", "field"].forEach(function (n) {
              t.forEach(function (t) {
                t.kind === n &&
                  "own" === t.placement &&
                  this.defineClassElement(e, t);
              }, this);
            }, this);
          },
          initializeClassElements: function (e, t) {
            var n = e.prototype;
            ["method", "field"].forEach(function (r) {
              t.forEach(function (t) {
                var i = t.placement;
                if (t.kind === r && ("static" === i || "prototype" === i)) {
                  var o = "static" === i ? e : n;
                  this.defineClassElement(o, t);
                }
              }, this);
            }, this);
          },
          defineClassElement: function (e, t) {
            var n = t.descriptor;
            if ("field" === t.kind) {
              var r = t.initializer;
              n = {
                enumerable: n.enumerable,
                writable: n.writable,
                configurable: n.configurable,
                value: void 0 === r ? void 0 : r.call(e),
              };
            }
            Object.defineProperty(e, t.key, n);
          },
          decorateClass: function (e, t) {
            var n = [],
              r = [],
              i = { static: [], prototype: [], own: [] };
            if (
              (e.forEach(function (e) {
                this.addElementPlacement(e, i);
              }, this),
              e.forEach(function (e) {
                if (!w(e)) return n.push(e);
                var t = this.decorateElement(e, i);
                n.push(t.element),
                  n.push.apply(n, t.extras),
                  r.push.apply(r, t.finishers);
              }, this),
              !t)
            )
              return { elements: n, finishers: r };
            var o = this.decorateConstructor(n, t);
            return r.push.apply(r, o.finishers), (o.finishers = r), o;
          },
          addElementPlacement: function (e, t, n) {
            var r = t[e.placement];
            if (!n && -1 !== r.indexOf(e.key))
              throw new TypeError("Duplicated element (" + e.key + ")");
            r.push(e.key);
          },
          decorateElement: function (e, t) {
            for (
              var n = [], r = [], i = e.decorators, o = i.length - 1;
              o >= 0;
              o--
            ) {
              var a = t[e.placement];
              a.splice(a.indexOf(e.key), 1);
              var s = this.fromElementDescriptor(e),
                c = this.toElementFinisherExtras((0, i[o])(s) || s);
              (e = c.element),
                this.addElementPlacement(e, t),
                c.finisher && r.push(c.finisher);
              var u = c.extras;
              if (u) {
                for (var l = 0; l < u.length; l++)
                  this.addElementPlacement(u[l], t);
                n.push.apply(n, u);
              }
            }
            return { element: e, finishers: r, extras: n };
          },
          decorateConstructor: function (e, t) {
            for (var n = [], r = t.length - 1; r >= 0; r--) {
              var i = this.fromClassDescriptor(e),
                o = this.toClassDescriptor((0, t[r])(i) || i);
              if (
                (void 0 !== o.finisher && n.push(o.finisher),
                void 0 !== o.elements)
              ) {
                e = o.elements;
                for (var a = 0; a < e.length - 1; a++)
                  for (var s = a + 1; s < e.length; s++)
                    if (
                      e[a].key === e[s].key &&
                      e[a].placement === e[s].placement
                    )
                      throw new TypeError(
                        "Duplicated element (" + e[a].key + ")"
                      );
              }
            }
            return { elements: e, finishers: n };
          },
          fromElementDescriptor: function (e) {
            var t = {
              kind: e.kind,
              key: e.key,
              placement: e.placement,
              descriptor: e.descriptor,
            };
            return (
              Object.defineProperty(t, Symbol.toStringTag, {
                value: "Descriptor",
                configurable: !0,
              }),
              "field" === e.kind && (t.initializer = e.initializer),
              t
            );
          },
          toElementDescriptors: function (e) {
            var t;
            if (void 0 !== e)
              return ((t = e),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  )
                    return Array.from(e);
                })(t) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? O(e, t)
                        : void 0
                    );
                  }
                })(t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()).map(function (e) {
                var t = this.toElementDescriptor(e);
                return (
                  this.disallowProperty(e, "finisher", "An element descriptor"),
                  this.disallowProperty(e, "extras", "An element descriptor"),
                  t
                );
              }, this);
          },
          toElementDescriptor: function (e) {
            var t = String(e.kind);
            if ("method" !== t && "field" !== t)
              throw new TypeError(
                'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                  t +
                  '"'
              );
            var n = S(e.key),
              r = String(e.placement);
            if ("static" !== r && "prototype" !== r && "own" !== r)
              throw new TypeError(
                'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                  r +
                  '"'
              );
            var i = e.descriptor;
            this.disallowProperty(e, "elements", "An element descriptor");
            var o = {
              kind: t,
              key: n,
              placement: r,
              descriptor: Object.assign({}, i),
            };
            return (
              "field" !== t
                ? this.disallowProperty(e, "initializer", "A method descriptor")
                : (this.disallowProperty(
                    i,
                    "get",
                    "The property descriptor of a field descriptor"
                  ),
                  this.disallowProperty(
                    i,
                    "set",
                    "The property descriptor of a field descriptor"
                  ),
                  this.disallowProperty(
                    i,
                    "value",
                    "The property descriptor of a field descriptor"
                  ),
                  (o.initializer = e.initializer)),
              o
            );
          },
          toElementFinisherExtras: function (e) {
            return {
              element: this.toElementDescriptor(e),
              finisher: x(e, "finisher"),
              extras: this.toElementDescriptors(e.extras),
            };
          },
          fromClassDescriptor: function (e) {
            var t = {
              kind: "class",
              elements: e.map(this.fromElementDescriptor, this),
            };
            return (
              Object.defineProperty(t, Symbol.toStringTag, {
                value: "Descriptor",
                configurable: !0,
              }),
              t
            );
          },
          toClassDescriptor: function (e) {
            var t = String(e.kind);
            if ("class" !== t)
              throw new TypeError(
                'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                  t +
                  '"'
              );
            this.disallowProperty(e, "key", "A class descriptor"),
              this.disallowProperty(e, "placement", "A class descriptor"),
              this.disallowProperty(e, "descriptor", "A class descriptor"),
              this.disallowProperty(e, "initializer", "A class descriptor"),
              this.disallowProperty(e, "extras", "A class descriptor");
            var n = x(e, "finisher");
            return {
              elements: this.toElementDescriptors(e.elements),
              finisher: n,
            };
          },
          runClassFinishers: function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = (0, t[n])(e);
              if (void 0 !== r) {
                if ("function" != typeof r)
                  throw new TypeError("Finishers must return a constructor.");
                e = r;
              }
            }
            return e;
          },
          disallowProperty: function (e, t, n) {
            if (void 0 !== e[t])
              throw new TypeError(n + " can't have a ." + t + " property.");
          },
        };
        return e;
      }
      function g(e) {
        var t,
          n = S(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (t = { configurable: !0, writable: !0, enumerable: !0 });
        var r = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function b(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function w(e) {
        return e.decorators && e.decorators.length;
      }
      function k(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function x(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function S(e) {
        var t = (function (e, t) {
          if ("object" !== m(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== m(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === m(t) ? t : String(t);
      }
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      ((a = o || (o = {})).alert = "alert"), (a.info = "info");
      var E = (function (e, t, n, r) {
        var i = y();
        if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, n),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  n = function (e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var i,
                  o = e[r];
                if ("method" === o.kind && (i = t.find(n)))
                  if (k(o.descriptor) || k(i.descriptor)) {
                    if (w(o) || w(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (w(o)) {
                      if (w(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    b(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(g)),
            e
          );
        return (
          i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers)
        );
      })(
        [Object(c.a)("alert-banner")],
        function (e, t) {
          return {
            F: (function (t) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && f(e, t);
              })(r, t);
              var n = d(r);
              function r() {
                var t;
                l(this, r);
                for (
                  var i = arguments.length, o = new Array(i), a = 0;
                  a < i;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(p(t)), t;
              }
              return r;
            })(t),
            d: [
              {
                kind: "field",
                decorators: [Object(c.b)({ type: String })],
                key: "mode",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(s.c)(
                    r ||
                      (r = u([
                        '\n      <div class="banner-wrapper ',
                        '">\n        <slot></slot>\n      </div>\n    ',
                      ])),
                    this.mode
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(s.b)(
                    i ||
                      (i = u([
                        "\n      :host {\n        display: block;\n      }\n\n      .banner-wrapper {\n        border-radius: 10px;\n        text-align: center;\n        display: block;\n        color: black;\n        font-size: 1.4rem;\n        padding: 0.5rem 0.75rem;\n        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n      }\n\n      .banner-wrapper.alert {\n        background-color: lightcoral;\n      }\n\n      .banner-wrapper.info {\n        background-color: lightblue;\n      }\n    ",
                      ]))
                  );
                },
              },
            ],
          };
        },
        s.a
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(85),
        i = n(8),
        o = n(14),
        a = n(24),
        s = n(122),
        c = n(86);
      r("match", 1, function (e, t, n) {
        return [
          function (t) {
            var n = a(this),
              r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
          },
          function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var a = i(e),
              u = String(this);
            if (!a.global) return c(a, u);
            var l = a.unicode;
            a.lastIndex = 0;
            for (var f, d = [], h = 0; null !== (f = c(a, u)); ) {
              var p = String(f[0]);
              (d[h] = p),
                "" === p && (a.lastIndex = s(u, o(a.lastIndex), l)),
                h++;
            }
            return 0 === h ? null : d;
          },
        ];
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(46).filter;
      r(
        { target: "Array", proto: !0, forced: !n(62)("filter") },
        {
          filter: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(22),
        i = n(68),
        o = n(14);
      e.exports = function (e) {
        for (
          var t = r(this),
            n = o(t.length),
            a = arguments.length,
            s = i(a > 1 ? arguments[1] : void 0, n),
            c = a > 2 ? arguments[2] : void 0,
            u = void 0 === c ? n : i(c, n);
          u > s;

        )
          t[s++] = e;
        return t;
      };
    },
    function (e, t, n) {
      var r = n(24),
        i = "[" + n(170) + "]",
        o = RegExp("^" + i + i + "*"),
        a = RegExp(i + i + "*$"),
        s = function (e) {
          return function (t) {
            var n = String(r(t));
            return (
              1 & e && (n = n.replace(o, "")),
              2 & e && (n = n.replace(a, "")),
              n
            );
          };
        };
      e.exports = { start: s(1), end: s(2), trim: s(3) };
    },
    function (e, t) {
      e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    function (e, t, n) {
      var r = n(4);
      e.exports = r.Promise;
    },
    function (e, t, n) {
      var r = n(8),
        i = n(7),
        o = n(157);
      e.exports = function (e, t) {
        if ((r(e), i(t) && t.constructor === e)) return t;
        var n = o.f(e);
        return (0, n.resolve)(t), n.promise;
      };
    },
    function (e, t, n) {
      var r = n(11),
        i = n(74),
        o = n(30),
        a = n(76).f,
        s = function (e) {
          return function (t) {
            for (
              var n, s = o(t), c = i(s), u = c.length, l = 0, f = [];
              u > l;

            )
              (n = c[l++]),
                (r && !a.call(s, n)) || f.push(e ? [n, s[n]] : s[n]);
            return f;
          };
        };
      e.exports = { entries: s(!0), values: s(!1) };
    },
    function (e, t, n) {
      "use strict";
      n(87)(
        "WeakSet",
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        n(162)
      );
    },
    function (e, t, n) {
      var r = n(38),
        i = n(56),
        o = n(111),
        a = n(8);
      e.exports =
        r("Reflect", "ownKeys") ||
        function (e) {
          var t = i.f(a(e)),
            n = o.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    function (e, t, n) {
      "use strict";
      var r = n(49),
        i = n(7),
        o = [].slice,
        a = {},
        s = function (e, t, n) {
          if (!(t in a)) {
            for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
            a[t] = Function("C,a", "return new C(" + r.join(",") + ")");
          }
          return a[t](e, n);
        };
      e.exports =
        Function.bind ||
        function (e) {
          var t = r(this),
            n = o.call(arguments, 1),
            a = function () {
              var r = n.concat(o.call(arguments));
              return this instanceof a ? s(t, r.length, r) : t.apply(e, r);
            };
          return i(t.prototype) && (a.prototype = t.prototype), a;
        };
    },
    function (e, t, n) {
      "use strict";
      var r = n(46).forEach,
        i = n(132)("forEach");
      e.exports = i
        ? [].forEach
        : function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    function (e, t, n) {
      "use strict";
      var r = n(113),
        i = n(96);
      e.exports = r
        ? {}.toString
        : function () {
            return "[object " + i(this) + "]";
          };
    },
    function (e, t, n) {
      "use strict";
      var r = n(8),
        i = n(52);
      e.exports = function (e) {
        if ("string" !== e && "number" !== e && "default" !== e)
          throw TypeError("Incorrect hint");
        return i(r(this), "number" !== e);
      };
    },
    function (e, t, n) {
      var r = n(7);
      e.exports = function (e) {
        if (!r(e) && null !== e)
          throw TypeError("Can't set " + String(e) + " as a prototype");
        return e;
      };
    },
    function (e, t, n) {
      var r = n(8),
        i = n(152);
      e.exports = function (e, t, n, o) {
        try {
          return o ? t(r(n)[0], n[1]) : t(n);
        } catch (t) {
          throw (i(e), t);
        }
      };
    },
    function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        c,
        u,
        l,
        f = n(4),
        d = n(31).f,
        h = n(155).set,
        p = n(156),
        v = n(183),
        m = n(116),
        y = f.MutationObserver || f.WebKitMutationObserver,
        g = f.document,
        b = f.process,
        w = f.Promise,
        k = d(f, "queueMicrotask"),
        x = k && k.value;
      x ||
        ((r = function () {
          var e, t;
          for (m && (e = b.domain) && e.exit(); i; ) {
            (t = i.fn), (i = i.next);
            try {
              t();
            } catch (e) {
              throw (i ? a() : (o = void 0), e);
            }
          }
          (o = void 0), e && e.enter();
        }),
        p || m || v || !y || !g
          ? w && w.resolve
            ? (((u = w.resolve(void 0)).constructor = w),
              (l = u.then),
              (a = function () {
                l.call(u, r);
              }))
            : (a = m
                ? function () {
                    b.nextTick(r);
                  }
                : function () {
                    h.call(f, r);
                  })
          : ((s = !0),
            (c = g.createTextNode("")),
            new y(r).observe(c, { characterData: !0 }),
            (a = function () {
              c.data = s = !s;
            }))),
        (e.exports =
          x ||
          function (e) {
            var t = { fn: e, next: void 0 };
            o && (o.next = t), i || ((i = t), a()), (o = t);
          });
    },
    function (e, t, n) {
      var r = n(94);
      e.exports = /web0s(?!.*chrome)/i.test(r);
    },
    function (e, t, n) {
      var r = n(4);
      e.exports = function (e, t) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
      };
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return { error: !1, value: e() };
        } catch (e) {
          return { error: !0, value: e };
        }
      };
    },
    function (e, t) {
      e.exports = "object" == typeof window;
    },
    function (e, t, n) {
      "use strict";
      var r = 2147483647,
        i = /[^\0-\u007E]/,
        o = /[.\u3002\uFF0E\uFF61]/g,
        a = "Overflow: input needs wider integers to process",
        s = Math.floor,
        c = String.fromCharCode,
        u = function (e) {
          return e + 22 + 75 * (e < 26);
        },
        l = function (e, t, n) {
          var r = 0;
          for (e = n ? s(e / 700) : e >> 1, e += s(e / t); e > 455; r += 36)
            e = s(e / 35);
          return s(r + (36 * e) / (e + 38));
        },
        f = function (e) {
          var t,
            n,
            i = [],
            o = (e = (function (e) {
              for (var t = [], n = 0, r = e.length; n < r; ) {
                var i = e.charCodeAt(n++);
                if (i >= 55296 && i <= 56319 && n < r) {
                  var o = e.charCodeAt(n++);
                  56320 == (64512 & o)
                    ? t.push(((1023 & i) << 10) + (1023 & o) + 65536)
                    : (t.push(i), n--);
                } else t.push(i);
              }
              return t;
            })(e)).length,
            f = 128,
            d = 0,
            h = 72;
          for (t = 0; t < e.length; t++) (n = e[t]) < 128 && i.push(c(n));
          var p = i.length,
            v = p;
          for (p && i.push("-"); v < o; ) {
            var m = r;
            for (t = 0; t < e.length; t++) (n = e[t]) >= f && n < m && (m = n);
            var y = v + 1;
            if (m - f > s((r - d) / y)) throw RangeError(a);
            for (d += (m - f) * y, f = m, t = 0; t < e.length; t++) {
              if ((n = e[t]) < f && ++d > r) throw RangeError(a);
              if (n == f) {
                for (var g = d, b = 36; ; b += 36) {
                  var w = b <= h ? 1 : b >= h + 26 ? 26 : b - h;
                  if (g < w) break;
                  var k = g - w,
                    x = 36 - w;
                  i.push(c(u(w + (k % x)))), (g = s(k / x));
                }
                i.push(c(u(g))), (h = l(d, y, v == p)), (d = 0), ++v;
              }
            }
            ++d, ++f;
          }
          return i.join("");
        };
      e.exports = function (e) {
        var t,
          n,
          r = [],
          a = e.toLowerCase().replace(o, ".").split(".");
        for (t = 0; t < a.length; t++)
          (n = a[t]), r.push(i.test(n) ? "xn--" + f(n) : n);
        return r.join(".");
      };
    },
    function (e, t, n) {
      "use strict";
      n(10);
      var r = n(2),
        i = n(38),
        o = n(158),
        a = n(20),
        s = n(57),
        c = n(32),
        u = n(153),
        l = n(25),
        f = n(50),
        d = n(9),
        h = n(43),
        p = n(96),
        v = n(8),
        m = n(7),
        y = n(42),
        g = n(51),
        b = n(189),
        w = n(75),
        k = n(6),
        x = i("fetch"),
        S = i("Headers"),
        O = k("iterator"),
        E = "URLSearchParams",
        A = "URLSearchParamsIterator",
        C = l.set,
        P = l.getterFor(E),
        _ = l.getterFor(A),
        j = /\+/g,
        I = Array(4),
        T = function (e) {
          return (
            I[e - 1] ||
            (I[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
          );
        },
        R = function (e) {
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        },
        L = function (e) {
          var t = e.replace(j, " "),
            n = 4;
          try {
            return decodeURIComponent(t);
          } catch (e) {
            for (; n; ) t = t.replace(T(n--), R);
            return t;
          }
        },
        M = /[!'()~]|%20/g,
        N = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
        },
        D = function (e) {
          return N[e];
        },
        z = function (e) {
          return encodeURIComponent(e).replace(M, D);
        },
        B = function (e, t) {
          if (t)
            for (var n, r, i = t.split("&"), o = 0; o < i.length; )
              (n = i[o++]).length &&
                ((r = n.split("=")),
                e.push({ key: L(r.shift()), value: L(r.join("=")) }));
        },
        U = function (e) {
          (this.entries.length = 0), B(this.entries, e);
        },
        H = function (e, t) {
          if (e < t) throw TypeError("Not enough arguments");
        },
        F = u(
          function (e, t) {
            C(this, { type: A, iterator: b(P(e).entries), kind: t });
          },
          "Iterator",
          function () {
            var e = _(this),
              t = e.kind,
              n = e.iterator.next(),
              r = n.value;
            return (
              n.done ||
                (n.value =
                  "keys" === t
                    ? r.key
                    : "values" === t
                    ? r.value
                    : [r.key, r.value]),
              n
            );
          }
        ),
        W = function () {
          f(this, W, E);
          var e,
            t,
            n,
            r,
            i,
            o,
            a,
            s,
            c,
            u = arguments.length > 0 ? arguments[0] : void 0,
            l = this,
            h = [];
          if (
            (C(l, {
              type: E,
              entries: h,
              updateURL: function () {},
              updateSearchParams: U,
            }),
            void 0 !== u)
          )
            if (m(u))
              if ("function" == typeof (e = w(u)))
                for (n = (t = e.call(u)).next; !(r = n.call(t)).done; ) {
                  if (
                    (a = (o = (i = b(v(r.value))).next).call(i)).done ||
                    (s = o.call(i)).done ||
                    !o.call(i).done
                  )
                    throw TypeError("Expected sequence with length 2");
                  h.push({ key: a.value + "", value: s.value + "" });
                }
              else for (c in u) d(u, c) && h.push({ key: c, value: u[c] + "" });
            else
              B(
                h,
                "string" == typeof u
                  ? "?" === u.charAt(0)
                    ? u.slice(1)
                    : u
                  : u + ""
              );
        },
        V = W.prototype;
      s(
        V,
        {
          append: function (e, t) {
            H(arguments.length, 2);
            var n = P(this);
            n.entries.push({ key: e + "", value: t + "" }), n.updateURL();
          },
          delete: function (e) {
            H(arguments.length, 1);
            for (
              var t = P(this), n = t.entries, r = e + "", i = 0;
              i < n.length;

            )
              n[i].key === r ? n.splice(i, 1) : i++;
            t.updateURL();
          },
          get: function (e) {
            H(arguments.length, 1);
            for (var t = P(this).entries, n = e + "", r = 0; r < t.length; r++)
              if (t[r].key === n) return t[r].value;
            return null;
          },
          getAll: function (e) {
            H(arguments.length, 1);
            for (
              var t = P(this).entries, n = e + "", r = [], i = 0;
              i < t.length;
              i++
            )
              t[i].key === n && r.push(t[i].value);
            return r;
          },
          has: function (e) {
            H(arguments.length, 1);
            for (var t = P(this).entries, n = e + "", r = 0; r < t.length; )
              if (t[r++].key === n) return !0;
            return !1;
          },
          set: function (e, t) {
            H(arguments.length, 1);
            for (
              var n,
                r = P(this),
                i = r.entries,
                o = !1,
                a = e + "",
                s = t + "",
                c = 0;
              c < i.length;
              c++
            )
              (n = i[c]).key === a &&
                (o ? i.splice(c--, 1) : ((o = !0), (n.value = s)));
            o || i.push({ key: a, value: s }), r.updateURL();
          },
          sort: function () {
            var e,
              t,
              n,
              r = P(this),
              i = r.entries,
              o = i.slice();
            for (i.length = 0, n = 0; n < o.length; n++) {
              for (e = o[n], t = 0; t < n; t++)
                if (i[t].key > e.key) {
                  i.splice(t, 0, e);
                  break;
                }
              t === n && i.push(e);
            }
            r.updateURL();
          },
          forEach: function (e) {
            for (
              var t,
                n = P(this).entries,
                r = h(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = 0;
              i < n.length;

            )
              r((t = n[i++]).value, t.key, this);
          },
          keys: function () {
            return new F(this, "keys");
          },
          values: function () {
            return new F(this, "values");
          },
          entries: function () {
            return new F(this, "entries");
          },
        },
        { enumerable: !0 }
      ),
        a(V, O, V.entries),
        a(
          V,
          "toString",
          function () {
            for (var e, t = P(this).entries, n = [], r = 0; r < t.length; )
              (e = t[r++]), n.push(z(e.key) + "=" + z(e.value));
            return n.join("&");
          },
          { enumerable: !0 }
        ),
        c(W, E),
        r({ global: !0, forced: !o }, { URLSearchParams: W }),
        o ||
          "function" != typeof x ||
          "function" != typeof S ||
          r(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (e) {
                var t,
                  n,
                  r,
                  i = [e];
                return (
                  arguments.length > 1 &&
                    (m((t = arguments[1])) &&
                      ((n = t.body),
                      p(n) === E &&
                        ((r = t.headers ? new S(t.headers) : new S()).has(
                          "content-type"
                        ) ||
                          r.set(
                            "content-type",
                            "application/x-www-form-urlencoded;charset=UTF-8"
                          ),
                        (t = y(t, {
                          body: g(0, String(n)),
                          headers: g(0, r),
                        })))),
                    i.push(t)),
                  x.apply(this, i)
                );
              },
            }
          ),
        (e.exports = { URLSearchParams: W, getState: P });
    },
    function (e, t, n) {
      var r = n(8),
        i = n(75);
      e.exports = function (e) {
        var t = i(e);
        if ("function" != typeof t)
          throw TypeError(String(e) + " is not iterable");
        return r(t.call(e));
      };
    },
    function (e, t) {
      e.exports =
        Object.is ||
        function (e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        };
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(192),
        o = n(22),
        a = n(14),
        s = n(47),
        c = n(79);
      r(
        { target: "Array", proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = a(t.length),
              r = c(t, 0);
            return (r.length = i(r, t, t, n, 0, void 0 === e ? 1 : s(e))), r;
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(61),
        i = n(14),
        o = n(43),
        a = function (e, t, n, s, c, u, l, f) {
          for (var d, h = c, p = 0, v = !!l && o(l, f, 3); p < s; ) {
            if (p in n) {
              if (((d = v ? v(n[p], p, t) : n[p]), u > 0 && r(d)))
                h = a(e, t, d, i(d.length), h, u - 1) - 1;
              else {
                if (h >= 9007199254740991)
                  throw TypeError("Exceed the acceptable array length");
                e[h] = d;
              }
              h++;
            }
            p++;
          }
          return h;
        };
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(22),
        i = Math.floor,
        o = "".replace,
        a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        s = /\$([$&'`]|\d{1,2})/g;
      e.exports = function (e, t, n, c, u, l) {
        var f = n + e.length,
          d = c.length,
          h = s;
        return (
          void 0 !== u && ((u = r(u)), (h = a)),
          o.call(l, h, function (r, o) {
            var a;
            switch (o.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, n);
              case "'":
                return t.slice(f);
              case "<":
                a = u[o.slice(1, -1)];
                break;
              default:
                var s = +o;
                if (0 === s) return r;
                if (s > d) {
                  var l = i(s / 10);
                  return 0 === l
                    ? r
                    : l <= d
                    ? void 0 === c[l - 1]
                      ? o.charAt(1)
                      : c[l - 1] + o.charAt(1)
                    : r;
                }
                a = c[s - 1];
            }
            return void 0 === a ? "" : a;
          })
        );
      };
    },
    function (e, t, n) {
      var r = n(2),
        i = n(173).entries;
      r(
        { target: "Object", stat: !0 },
        {
          entries: function (e) {
            return i(e);
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = {};
      n.r(r),
        n.d(r, "SNOWPACK_PUBLIC_VERSION", function () {
          return Ae;
        }),
        n.d(r, "SNOWPACK_PUBLIC_ENVIRONMENT", function () {
          return Ce;
        }),
        n.d(r, "SNOWPACK_PUBLIC_ARCHIVE_NAV_URL", function () {
          return Pe;
        }),
        n.d(r, "SNOWPACK_PUBLIC_ARCHIVE_API_URL", function () {
          return _e;
        }),
        n.d(r, "SNOWPACK_PUBLIC_WAYBACK_URL", function () {
          return je;
        }),
        n.d(r, "SNOWPACK_PUBLIC_WAYBACK_SEARCH_URL", function () {
          return Ie;
        }),
        n.d(r, "SNOWPACK_PUBLIC_BASE_PATH", function () {
          return Te;
        }),
        n.d(r, "SNOWPACK_PUBLIC_SENTRY_DSN", function () {
          return Re;
        }),
        n.d(r, "SNOWPACK_PUBLIC_APM_SERVER", function () {
          return Le;
        }),
        n.d(r, "SNOWPACK_PUBLIC_ZENDESK_HELP_WIDGET_KEY", function () {
          return Me;
        }),
        n.d(r, "SNOWPACK_PUBLIC_BRAINTREE_AUTH_TOKEN", function () {
          return Ne;
        }),
        n.d(r, "SNOWPACK_PUBLIC_RECAPTCHA_SITE_KEY", function () {
          return De;
        }),
        n.d(r, "SNOWPACK_PUBLIC_VENMO_PROFILE_ID", function () {
          return ze;
        }),
        n.d(r, "SNOWPACK_PUBLIC_GOOGLEPAY_MERCHANT_ID", function () {
          return Be;
        }),
        n.d(r, "MODE", function () {
          return Ue;
        }),
        n.d(r, "NODE_ENV", function () {
          return He;
        }),
        n.d(r, "SSR", function () {
          return Fe;
        });
      n(27),
        n(28),
        n(53),
        n(34),
        n(40),
        n(45),
        n(65),
        n(88),
        n(89),
        n(90),
        n(12),
        n(17),
        n(18),
        n(35),
        n(66),
        n(91),
        n(92),
        n(54),
        n(21),
        n(26),
        n(29),
        n(13),
        n(19),
        n(10),
        n(16),
        n(39),
        n(33),
        n(126),
        n(36),
        n(101),
        n(127),
        n(128),
        n(48);
      var i,
        o,
        a,
        s,
        c,
        u,
        l,
        f,
        d,
        h,
        p,
        v,
        m,
        y,
        g,
        b,
        w,
        k,
        x,
        S,
        O,
        E,
        A,
        C,
        P,
        _,
        j,
        I,
        T,
        R,
        L,
        M,
        N,
        D,
        z,
        B,
        U,
        H,
        F,
        W,
        V,
        q,
        $,
        K,
        G,
        Y,
        J,
        Z,
        Q,
        X,
        ee,
        te,
        ne,
        re,
        ie,
        oe,
        ae,
        se,
        ce,
        ue,
        le,
        fe,
        de,
        he,
        pe,
        ve,
        me,
        ye,
        ge,
        be,
        we,
        ke,
        xe,
        Se,
        Oe,
        Ee,
        Ae = "0.0.1",
        Ce = "prod",
        Pe = "",
        _e = "archive.org",
        je = "web.archive.org",
        Ie = "https://web.archive.org/web/*/",
        Te = "/offshoot_assets/",
        Re = "https://686e674c1f104a84b5616bd161f21dd4@sentry.archive.org/6",
        Le = "https://ux-log0.us.archive.org:18200",
        Me = "685f6dc4-48c5-411f-8463-cc6dd50abe2d",
        Ne = "production_w3jccm3z_pqd7hz44swp6zvvw",
        De = "6Ld64a8UAAAAAGbDwi1927ztGNw7YABQ-dqzvTN2",
        ze = "2878003111190856236",
        Be = "14255500436693515703",
        Ue = "production",
        He = "production",
        Fe = !1,
        We = n(1),
        Ve = n(3),
        qe = (n(164), n(67), n(55), n(0)),
        $e = n(105);
      function Ke(e) {
        return (Ke =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ge(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Ye(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ye(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ye(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ye(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Je(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Ze(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Qe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Xe(e, t, n) {
        return t && Qe(e.prototype, t), n && Qe(e, n), e;
      }
      function et(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && tt(e, t);
      }
      function tt(e, t) {
        return (tt =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function nt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = it(e);
          if (t) {
            var i = it(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return rt(this, n);
        };
      }
      function rt(e, t) {
        return !t || ("object" !== Ke(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function it(e) {
        return (it = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var ot = Object.assign,
        at = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            return Ze(this, n), t.apply(this, arguments);
          }
          return (
            Xe(n, [
              {
                key: "trackClick",
                value: function (e) {
                  var t = e.currentTarget.dataset.eventClickTracking;
                  this.dispatchEvent(
                    new CustomEvent("trackClick", {
                      bubbles: !0,
                      composed: !0,
                      detail: { event: t },
                    })
                  );
                },
              },
              {
                key: "trackSubmit",
                value: function (e) {
                  var t = e.currentTarget.dataset.eventSubmitTracking;
                  this.dispatchEvent(
                    new CustomEvent("trackSubmit", {
                      bubbles: !0,
                      composed: !0,
                      detail: { event: t },
                    })
                  );
                },
              },
            ]),
            n
          );
        })(qe.b),
        st = {
          audio: Object(qe.e)(
            i ||
              (i = Je([
                '\n  <svg\n    width="40px"\n    height="40px"\n    viewBox="0 0 40 40"\n    version="1.1"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="audioTitleID audioDescID"\n  >\n    <title id="audioTitleID">Audio icon</title>\n    <desc id="audioDescID">An illustration of an audio speaker.</desc>\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g transform="translate(10, 8)" class="fill-color">\n        <path\n          d="M19.4264564,11.8585048 L19.4264564,20.7200433 C19.4264564,22.3657576 18.8838179,23.2519114 16.8489237,23.2519114 C12.2364969,23.125318 7.75972977,23.125318 3.14730298,23.2519114 C1.24806842,23.2519114 0.569770368,22.492351 0.569770368,20.7200433 L0.569770368,2.74377955 C0.569770368,1.09806526 1.11240881,0.211911416 3.14730298,0.211911416 C7.75972977,0.338504822 12.2364969,0.338504822 16.8489237,0.211911416 C18.7481583,0.211911416 19.4264564,0.971471855 19.4264564,2.74377955 C19.2907967,5.78202131 19.4264564,8.82026306 19.4264564,11.8585048 L19.4264564,11.8585048 Z M10.0659432,2.74377955 C8.16670861,2.74377955 6.67445288,4.13630702 6.67445288,5.90861471 C6.67445288,7.6809224 8.16670861,9.07344988 10.0659432,9.07344988 C11.9651777,9.07344988 13.4574335,7.6809224 13.4574335,5.90861471 C13.4574335,4.13630702 11.8295181,2.74377955 10.0659432,2.74377955 L10.0659432,2.74377955 Z M10.0659432,11.4787246 C7.21709133,11.4787246 5.04653754,13.6308125 5.04653754,16.1626806 C5.04653754,18.8211422 7.35275094,20.8466367 10.0659432,20.8466367 C12.914795,20.8466367 15.0853488,18.6945488 15.0853488,16.1626806 C15.0853488,13.6308125 12.7791354,11.4787246 10.0659432,11.4787246 L10.0659432,11.4787246 Z"\n        ></path>\n        <ellipse cx="10.2016028" cy="16.5690777" rx="1.35659611" ry="1.34075134"></ellipse>\n      </g>\n    </g>\n  </svg>\n',
              ]))
          ),
          close: Object(qe.e)(
            o ||
              (o = Je([
                '\n  <svg\n    width="40px"\n    height="40px"\n    viewBox="0 0 40 40"\n    version="1.1"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="closeTitleID closeDescID"\n  >\n    <title id="closeTitleID">Close icon</title>\n    <desc id="closeDescID">A line drawing of an X</desc>\n    <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>\n  </svg>\n',
              ]))
          ),
          donate: Object(qe.e)(
            a ||
              (a = Je([
                '\n  <svg\n    width="40"\n    height="40"\n    viewBox="0 0 40 40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="donateTitleID donateDescID"\n  >\n    <title id="donateTitleID">Donate icon</title>\n    <desc id="donateDescID">An illustration of a heart shape</desc>\n    <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>\n  </svg>\n',
              ]))
          ),
          ellipses: Object(qe.e)(
            s ||
              (s = Je([
                '\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="ellipsesTitleID ellipsesDescID"\n  >\n    <title id="ellipsesTitleID">Ellipses icon</title>\n    <desc id="ellipsesDescID">An illustration of text ellipses.</desc>\n    <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>\n  </svg>\n',
              ]))
          ),
          iaLogo: Object(qe.e)(
            c ||
              (c = Je([
                '\n  <svg\n    class="ia-logo"\n    width="27"\n    height="30"\n    viewBox="0 0 27 30"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="logoTitleID logoDescID"\n  >\n    <title id="logoTitleID">Internet Archive logo</title>\n    <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <mask id="mask-2" fill="white">\n        <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>\n      </mask>\n      <use fill="#FFFFFF" xlink:href="#path-1"></use>\n      <g  mask="url(#mask-2)" fill="#FFFFFF">\n        <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>\n      </g>\n    </g>\n  </svg>\n',
              ]))
          ),
          images: Object(qe.e)(
            u ||
              (u = Je([
                '\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="imagesTitleID imagesDescID"\n  >\n    <title id="imagesTitleID">Images icon</title>\n    <desc id="imagesDescID">An illustration of two photographs.</desc>\n    <path class="fill-color" d="m20.8219178 15.3769871c0 1.1136708-.8767123 1.8932404-1.8630137 1.8932404s-1.9726027-.8909367-1.9726027-1.8932404c0-1.0023038.8767123-1.8932404 1.9726027-1.8932404.9863014 0 1.8630137.8909366 1.8630137 1.8932404zm-5.9178082-3.7864808h15.4520548v6.0138225l-1.9726028-3.3410125-2.6301369 6.3479237-2.1917809-2.67281-6.1369863 5.1228859h-2.5205479zm-1.7534247-1.6705063v14.9231892h18.8493151v-14.9231892zm-2.9589041 7.2388604c.2191781 0 1.9726028-.3341012 1.9726028-.3341012v-2.0046075l-4.1643836.5568354c.43835616 4.7887846.87671233 9.9116704 1.31506849 14.700455 6.02739731-.5568354 13.26027401-1.5591391 19.39726031-2.1159746-.1095891-.5568354-.1095891-2.0046075-.2191781-2.67281-.4383562.1113671-1.4246575 0-1.8630137.1113671v.8909367c-5.1506849.4454683-10.3013699 1.1136708-15.4520548 1.6705062.109589-.111367-.5479452-7.0161262-.9863014-10.8026071z" fill-rule="evenodd"/>\n  </svg>\n',
              ]))
          ),
          search: Object(qe.e)(
            l ||
              (l = Je([
                '\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="searchTitleID searchDescID"\n  >\n    <title id="searchTitleID">Search icon</title>\n    <desc id="searchDescID">An illustration of a magnifying glass.</desc>\n    <path class="fill-color" d="m32.4526364 29.8875889-8.1719472-7.9751279c1.1046135-1.4876138 1.7652549-3.3102407 1.7652549-5.2846451 0-.101185-.0142895-.1981539-.030573-.2944743.0166158-.0976175.0309053-.196208.0309053-.2990145 0-4.9814145-4.152935-9.0343271-9.2572866-9.0343271-.0907218 0-.1781206.01394537-.2655193.02594487-.0880633-.0119995-.1747974-.02594487-.2655193-.02594487-5.1046839 0-9.25761889 4.0529126-9.25761889 9.0343271 0 .1011849.01395722.1981539.03057294.2947985-.01694804.0976176-.03090525.1958838-.03090525.2986903 0 4.9814145 4.1526027 9.0346514 9.2572866 9.0346514.0907218 0 .1777882-.0139454.2658516-.0262692.0873987.0123238.1741328.0262692.265187.0262692 1.7306942 0 3.3467399-.4747911 4.7338208-1.2852439l8.2882574 8.0886366c.3652137.3564177.843082.53414 1.3212826.53414.4782007 0 .9567336-.1780467 1.3212827-.53414.7294304-.7118622.7294304-1.8660845-.0003323-2.5782711zm-15.9526364-7.8875889c-.0832667-.0118703-.1652765-.0253024-.2513711-.0253024-2.8781993 0-5.2197212-2.3278242-5.2197212-5.1891862 0-.0974612-.013197-.1908615-.0289077-.2836371.0160249-.0940251.0292219-.1889874.0292219-.2880105 0-2.861362 2.3418361-5.1891861 5.2200354-5.1891861.0854662 0 .1677902-.0131198.2510569-.0246777.0826383.0115579.1649623.0246777.2510569.0246777 2.8781993 0 5.2197212 2.3278241 5.2197212 5.1891861 0 .0974612.0135112.1908616.0289077.2839496-.0157107.0940251-.0295361.1886749-.0295361.287698 0 2.861362-2.3415219 5.1891862-5.2197212 5.1891862-.0860946 0-.1684187.0134321-.2507427.0253024z" fill-rule="evenodd" />\n  </svg>\n',
              ]))
          ),
          software: Object(qe.e)(
            f ||
              (f = Je([
                '\n  <svg\n    width="40"\n    height="40"\n    viewBox="0 0 40 40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="softwareTitleID softwareDescID"\n  >\n    <title id="softwareTitleID">Software icon</title>\n    <desc id="softwareDescID">An illustration of a 3.5" floppy disk.</desc>\n    <path class="fill-color" d="m32 30.6900373v-21.44521088c0-.82988428-.4156786-1.24482642-1.2470357-1.24482642h-21.50592858c-.83135715 0-1.24703572.4221795-1.24703572 1.26653851v21.44521089c0 .8588337.41567857 1.2882506 1.24703572 1.2882506h21.48327168c.8458575 0 1.2687863-.4366542 1.2687863-1.3099627zm-5.9950155-20.4410268v6.114667c0 .6694561-.3428744 1.0041841-1.0286232 1.0041841h-10.1294464c-.2622159 0-.4773054-.0802141-.6452685-.2406423s-.2519447-.3642806-.2519447-.6115572v-6.1363791l.0217506-.1311772h12.0326259zm-4.9437353.8295827v5.0010178h3.0405558v-5.0010178zm-9.7134658 18.8035735v-7.753025c0-.5241057.1604108-.9025595.4812325-1.1353613.1897138-.1453504.4011782-.2180256.6343932-.2180256h14.7451099c.3208217 0 .5905898.1091636.8093044.3274907s.3280719.5023936.3280719.8521995v7.8181612l-.0217506.1094652h-16.9772676z"/>\n  </svg>\n',
              ]))
          ),
          texts: Object(qe.e)(
            d ||
              (d = Je([
                '\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="textsTitleID textsDescID"\n  >\n    <title id="textsTitleID">Texts icon</title>\n    <desc id="textsDescID">An illustration of an open book.</desc>\n    <path class="fill-color" d="m10.3323235 11.0007023h6.9060825c.8851083 0 1.5847122.3064258 2.0988114.9192774v14.4324451h-.6460032c-.1435563-.120323-.3528315-.2434552-.6278257-.3693964-.2749942-.1259413-.5201585-.2191097-.7354929-.2795053l-.3048241-.1081503h-5.7042647c-.3108832 0-.5621067-.0601615-.7536705-.1804846-.0717781-.0599274-.1256117-.1439663-.1615008-.2521166-.0358891-.1081502-.0598928-.2043619-.0720112-.2886348v-13.8741368zm19.1752505 0v13.603761c-.0717781.3361555-.2211606.5943584-.4481473.7746089-.0717781.0599274-.1733862.1079162-.304824.1439663-.1314379.0360501-.2451643.0601615-.3411793.0723343h-5.5965975c-.9568865.2640552-1.5068748.5164059-1.649965.757052h-.6634817v-14.4324451c.5140992-.6128516 1.2076439-.9192774 2.0806339-.9192774h6.92426zm1.3814961.6489017-.1796783 15.2976474c-.0955489 0-1.0342578.0119386-2.8161268.035816-1.7818691.0238773-3.3006293.0898911-4.5562806.1980414-1.2556514.1081503-1.9613144.2884008-2.1169891.5407514-.0955488.1924233-.5439291.273419-1.345141.2429871-.8012118-.0304319-1.3155441-.1776755-1.5429969-.4417308-.334654-.3843783-3.4558378-.5765674-9.36355164-.5765674v-15.3875385l-.96830576.3960828v16.2702977c6.4096947-.2041278 9.7760429-.0840388 10.0990445.3602669.2391051.276228.9864833.414342 2.2421347.414342.1915638 0 .4187835-.0210682.6816593-.0632047s.4810068-.0870821.6543929-.1348367c.1733862-.0477547.2719646-.0838048.2957353-.1081503.0838965-.1563732.9599161-.2675666 2.6280587-.3335805 1.6681426-.0660138 3.3213703-.0931684 4.9596831-.0814638l2.4392915.0182591v-16.2344816z"/>\n  </svg>\n',
              ]))
          ),
          upload: Object(qe.e)(
            h ||
              (h = Je([
                '\n  <svg\n    width="40"\n    height="41"\n    viewBox="0 0 40 41"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="uploadTitleID uploadDescID"\n  >\n    <title id="uploadTitleID">Upload icon</title>\n    <desc id="uploadDescID">An illustration of a horizontal line over an up pointing arrow.</desc>\n    <path class="fill-color" d="m20 12.8 8 10.4h-4.8v8.8h-6.4v-8.8h-4.8zm12-4.8v3.2h-24v-3.2z" fill-rule="evenodd"/>\n  </svg>\n',
              ]))
          ),
          user: Object(qe.e)(
            p ||
              (p = Je([
                '\n  <svg\n    width="40"\n    height="40"\n    viewBox="0 0 40 40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="userTitleID userDescID"\n  >\n    <title id="userTitleID">User icon</title>\n    <desc id="userDescID">An illustration of a person\'s head and chest.</desc>\n    <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>\n  </svg>\n',
              ]))
          ),
          video: Object(qe.e)(
            v ||
              (v = Je([
                '\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="videoTitleID videoDescID"\n  >\n    <title id="videoTitleID">Video icon</title>\n    <desc id="videoDescID">An illustration of two cells of a film strip.</desc>\n    <path class="fill-color" d="m31.0117647 12.0677966c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.3898305c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm-4.0941176-10.440678c0 .5423729-.4235295.9491525-.9882353.9491525h-11.5764706c-.5647059 0-.9882353-.4067796-.9882353-.9491525v-6.9152542c0-.5423729.4235294-.9491526.9882353-.9491526h11.5764706c.5647058 0 .9882353.4067797.9882353.9491526zm-.1411765 11.2542373c0 .5423729-.4235294.9491525-.9882353.9491525h-11.5764706c-.5647059 0-.9882353-.4067796-.9882353-.9491525v-6.9152542c0-.5423729.4235294-.9491526.9882353-.9491526h11.5764706c.5647059 0 .9882353.4067797.9882353.9491526zm-14.9647059-17.220339c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.3898305c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm20.0470588-20.4745763h-.8470588v.27118644.6779661c0 .40677966-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.27118644-.7058823-.6779661v-.6779661-.27118644h-16.5176471v.27118644.6779661c0 .40677966-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.27118644-.70588236-.6779661v-.6779661-.27118644h-1.12941176v24h1.12941176v-.2711864-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661v.6779661.2711864h16.6588235v-.2711864-.6779661c0-.4067797.282353-.6779661.7058824-.6779661h1.2705882c.4235294 0 .7058824.2711864.7058824.6779661v.6779661.2711864h.8470588v-24z" fill-rule="evenodd"/>\n  </svg>\n',
              ]))
          ),
          web: Object(qe.e)(
            m ||
              (m = Je([
                '\n  <svg\n    height="40"\n    viewBox="0 0 40 40"\n    width="40"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-labelledby="webTitleID webDescID"\n  >\n    <title id="webTitleID">Web icon</title>\n    <desc id="webDescID">An illustration of a computer application window</desc>\n    <path class="fill-color" d="m8 28.7585405v-8.1608108-9.3577297h24v9.3577297 8.1608108zm14.2702703-15.8863783h-12.43243246v2.6114594h12.43243246zm7.7837838 14.0365946v-7.0727027-1.8497838h-20.21621626v1.8497838 7.0727027zm-3.7837838-14.0365946h-2.7027027v2.6114594h2.7027027zm4 0h-2.7027027v2.6114594h2.7027027z" fill-rule="evenodd"/>\n  </svg>\n',
              ]))
          ),
        },
        ct = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            return Ze(this, n), t.apply(this, arguments);
          }
          return (
            Xe(
              n,
              [
                {
                  key: "render",
                  value: function () {
                    return this.active ? n.opened : n.closed;
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Object(qe.c)(
                      y ||
                        (y = Je([
                          "\n      svg {\n        display: block;\n      }\n      .fill-color {\n        fill: var(--activeColor);\n      }\n    ",
                        ]))
                    );
                  },
                },
                {
                  key: "closed",
                  get: function () {
                    return Object(qe.e)(
                      g ||
                        (g = Je([
                          '\n      <svg height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg" aria-labelledby="hamburgerTitleID hamburgerDescID">\n        <title id="hamburgerTitleID">Hamburger icon</title>\n        <desc id="hamburgerDescID">An icon used to represent a menu that can be toggled by interacting with this icon.</desc>\n        <path d="m30.5 26.5c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5z" fill="#999" fill-rule="evenodd"/>\n      </svg>\n    ',
                        ]))
                    );
                  },
                },
                {
                  key: "opened",
                  get: function () {
                    return st.close;
                  },
                },
              ]
            ),
            n
          );
        })(
          (function (e) {
            et(n, e);
            var t = nt(n);
            function n() {
              var e;
              return (
                Ze(this, n),
                ((e = t.call(this)).fill = "fff"),
                (e.active = !1),
                e
              );
            }
            return (
              Xe(n, null, [
                {
                  key: "properties",
                  get: function () {
                    return {
                      fill: { type: String },
                      active: { type: Boolean },
                    };
                  },
                },
              ]),
              n
            );
          })(qe.b)
        );
      customElements.define("icon-hamburger", ct);
      var ut = Object(qe.c)(
          b ||
            (b = Je([
              "\n  .dropdown-toggle {\n    display: block;\n    height: 4rem;\n    font-size: 1.6rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    color: var(--grey80);\n    cursor: pointer;\n  }\n\n  .dropdown-toggle .fill-color {\n    fill: var(--iconFill);\n  }\n\n  .dropdown-toggle:active .fill-color,\n  .dropdown-toggle:focus .fill-color,\n  .dropdown-toggle:hover .fill-color {\n    fill: var(--linkHoverColor);\n  }\n\n  .active {\n    border-radius: 1rem 1rem 0 0;\n    background: var(--activeButtonBg);\n  }\n\n  .active .fill-color {\n    fill: var(--activeColor);\n  }\n\n  span {\n    display: none;\n    font-size: 1.4rem;\n    text-transform: uppercase;\n    color: var(--loginTextColor);\n  }\n\n  span a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  a:hover,\n  a:active,\n  a:focus {\n    color: var(--linkHoverColor);\n  }\n\n  @media (min-width: 890px) {\n    .logged-out-toolbar {\n      transform: translateY(-.5rem);\n    }\n\n    .active {\n      background: transparent;\n    }\n\n    .dropdown-toggle {\n      display: inline-block;\n      vertical-align: middle;\n    }\n\n    span {\n      display: inline;\n      vertical-align: middle;\n    }\n  }\n",
            ]))
        ),
        lt = function (e, t) {
          return /^https?:/.test(e) ? e : "".concat(t).concat(e);
        },
        ft = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = {}),
              (e.openMenu = ""),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "signupPath",
                  get: function () {
                    return lt("/account/signup", this.baseHost);
                  },
                },
                {
                  key: "loginPath",
                  get: function () {
                    return lt("/account/login", this.baseHost);
                  },
                },
                {
                  key: "analyticsEvent",
                  get: function () {
                    return "".concat(
                      this.config.eventCategory,
                      "|NavLoginIcon"
                    );
                  },
                },
                {
                  key: "menuOpened",
                  get: function () {
                    return "login" === this.openMenu;
                  },
                },
                {
                  key: "avatarClass",
                  get: function () {
                    return "dropdown-toggle".concat(
                      this.menuOpened ? " active" : ""
                    );
                  },
                },
                {
                  key: "toggleDropdown",
                  value: function (e) {
                    e.preventDefault(),
                      this.trackClick(e),
                      (this.dropdownTabIndex = this.menuOpened ? "" : "-1"),
                      this.dispatchEvent(
                        new CustomEvent("menuToggled", {
                          bubbles: !0,
                          composed: !0,
                          detail: { menuName: "login" },
                        })
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      w ||
                        (w = Je([
                          '\n      <div class="logged-out-toolbar">\n        <a\n          class="',
                          '"\n          @click=',
                          '\n          data-event-click-tracking="',
                          '"\n        >\n          ',
                          '\n        </a>\n        <span>\n        <a href="',
                          '">Sign up</a>\n        |\n        <a href="',
                          '">Log in</a>\n        </span>\n      </div>\n    ',
                        ])),
                      this.avatarClass,
                      this.toggleDropdown,
                      this.analyticsEvent,
                      st.user,
                      this.signupPath,
                      this.loginPath
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return ut;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      config: { type: Object },
                      openMenu: { type: String },
                    };
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("login-button", ft);
      var dt = Object(qe.c)(
          k ||
            (k = Je([
              "\n  input:focus {\n    outline: none;\n  }\n  button {\n    background: none;\n    color: inherit;\n    border: none;\n    font: inherit;\n    cursor: pointer;\n  }\n  button:focus {\n    outline: none;\n  }\n  .search {\n    padding-top: 0;\n    margin-right: 0.5rem;\n  }\n  .search svg {\n    position: relative;\n    top: -5px;\n    right: -3px;\n    fill: var(--activeSearchColor);\n  }\n  .search-activated {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 4rem;\n    bottom: 0;\n    left: 4rem;\n    z-index: 3;\n    padding: 0.5rem 0.2rem;\n    border-radius: 1rem 1rem 0 0;\n    background: var(--searchActiveBg);\n  }\n  .search-inactive {\n    display: none;\n  }\n  .search-activated .highlight,\n  .search-activated .search {\n    background: var(--searchActiveInputBg);\n    border-radius: 0.5rem;\n  }\n  .search-activated .highlight {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    margin: 0 0.5rem;\n  }\n  .search-activated .search {\n    height: 100%;\n    padding: 0;\n    margin-right: 0;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center;\n  }\n  .search-activated .search-field {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    padding-left: 1rem;\n    border-radius: 0.5rem;\n    border: none;\n    font-size: 1.6rem;\n    text-align: center;\n  }\n  .search-activated .search-field:focus {\n    outline: none;\n  }\n  @keyframes fade-in {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .fade-in {\n    animation: fade-in 0.2s forwards;\n  }\n\n  @media (min-width: 890px) {\n    .search svg {\n      display: inline;\n      width: 28px;\n      height: 28px;\n      vertical-align: -14px;\n    }\n    .search path {\n      fill: var(--desktopSearchIconFill);\n    }\n\n    .search-inactive,\n    .search-activated {\n      display: block;\n      position: static;\n      padding: 1.2rem 0.2rem;\n      background: transparent;\n    }\n\n    .search-activated .highlight {\n      width: 13rem;\n      height: 2.8rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n    }\n\n    .search-activated .search-field {\n      width: calc(100% - 28px);\n      height: 100%;\n      padding-left: 0;\n      font-size: 1.4rem;\n      text-align: left;\n    }\n\n    .search-activated .search svg {\n      width: 28px;\n      height: 28px;\n    }\n  }\n",
            ]))
        ),
        ht = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = {}),
              (e.locationHandler = function () {}),
              (e.open = !1),
              (e.openMenu = ""),
              (e.searchIn = ""),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "updated",
                  value: function () {
                    return (
                      this.open &&
                        this.shadowRoot.querySelector("[name=query]").focus(),
                      !0
                    );
                  },
                },
                {
                  key: "search",
                  value: function (e) {
                    var t = this.shadowRoot.querySelector("[name=query]").value;
                    return t
                      ? "TV" === this.searchIn
                        ? (this.locationHandler(
                            lt("/details/tv?q=".concat(t), this.baseHost)
                          ),
                          e.preventDefault(),
                          !1)
                        : (this.trackSubmit(e), !0)
                      : (e.preventDefault(), !1);
                  },
                },
                {
                  key: "toggleSearchMenu",
                  value: function () {
                    "search" !== this.openMenu &&
                      this.dispatchEvent(
                        new CustomEvent("menuToggled", {
                          detail: { menuName: "search" },
                          composed: !0,
                          bubbles: !0,
                        })
                      );
                  },
                },
                {
                  key: "searchInsideInput",
                  get: function () {
                    return this.searchIn
                      ? Object(qe.e)(
                          x ||
                            (x = Je([
                              "<input type='hidden' name='sin' value='",
                              "' />",
                            ])),
                          this.searchIn
                        )
                      : qe.f;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.open ? "flex" : "search-inactive";
                    return Object(qe.e)(
                      S ||
                        (S = Je([
                          '\n      <div class="search-activated fade-in ',
                          '">\n        <form\n          id="nav-search"\n          class="highlight"\n          action=',
                          '\n          method="get"\n          @submit=',
                          '\n          data-event-submit-tracking="',
                          '|NavSearchSubmit"\n        >\n          <input\n            type="text"\n            name="query"\n            class="search-field"\n            placeholder="Search"\n            autocomplete="off"\n            @focus=',
                          "\n            value=",
                          "\n          />\n          ",
                          '\n          <button\n            type="submit"\n            class="search"\n            data-event-click-tracking="',
                          '|NavSearchClose"\n          >\n            ',
                          "\n          </button>\n        </form>\n      </div>\n    ",
                        ])),
                      e,
                      lt("/search.php", this.baseHost),
                      this.search,
                      this.config.eventCategory,
                      this.toggleSearchMenu,
                      this.searchQuery || "",
                      this.searchInsideInput,
                      this.config.eventCategory,
                      st.search
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return dt;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      config: { type: Object },
                      locationHandler: { type: Object },
                      open: { type: Boolean },
                      openMenu: { type: String },
                      searchIn: { type: String },
                      searchQuery: { type: String },
                    };
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("nav-search", ht);
      var pt = function e(t) {
          var n = t.split(" "),
            r = n.pop(),
            i = "".concat(r.substr(0, 1).toUpperCase()).concat(r.substr(1));
          return n.length ? e("".concat(n.join(" ")).concat(i)) : i;
        },
        vt = Object(qe.c)(
          O ||
            (O = Je([
              '\n  a {\n    display: inline-block;\n    text-decoration: none;\n  }\n\n  .menu-item {\n    display: inline-flex;\n    width: 100%;\n    padding: 0;\n    font-size: 1.6rem;\n    text-align: left;\n    background: transparent;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .menu-item:focus {\n    outline: none;\n  }\n\n  .label {\n    display: inline-block;\n    padding: 0;\n    font-weight: 400;\n    color: var(--primaryTextColor);\n    text-align: left;\n    vertical-align: middle;\n  }\n\n  .menu-item > .icon {\n    display: inline-flex;\n    width: 42px;\n    height: 42px;\n    vertical-align: middle;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n\n  .menu-item.selected .icon {\n    background-color: var(--activeButtonBg);\n    border-radius: 1rem 0 0 1rem;\n  }\n\n  .icon .fill-color {\n    fill: #999;\n  }\n\n  .icon.active .fill-color {\n    fill: #fff;\n  }\n\n  .donate .fill-color {\n    fill: #f00;\n  }\n\n  @media (min-width: 890px) {\n    .menu-item {\n      width: auto;\n      height: 5rem;\n      color: var(--mediaLabelDesktopColor);\n    }\n    .menu-item:hover,\n    .menu-item:active,\n    .menu-item:focus {\n      color: var(--linkHoverColor);\n    }\n\n    .menu-item:hover .fill-color,\n    .menu-item:active .fill-color,\n    .menu-item:focus .fill-color {\n      fill: var(--linkHoverColor);\n    }\n\n    .label {\n      display: none;\n    }\n\n    .label,\n    .web:after {\n      padding-right: 1rem;\n      font-size: 1.3rem;\n      text-transform: uppercase;\n      color: inherit;\n    }\n\n\n    .web:after {\n      display: none;\n      content: "web";\n    }\n    .donate,\n    .more {\n      display: none;\n    }\n\n    .menu-item.selected {\n      background: var(--activeDesktopMenuIcon);\n    }\n\n    .menu-item.selected .label,\n    .menu-item.selected.web:after {\n      color: var(--linkHoverColor);\n    }\n\n    .menu-item.selected .icon {\n      background: transparent;\n    }\n\n    /* selected state icon colors */\n    .web.selected .fill-color {\n      fill: #ffcd27;\n    }\n\n    .texts.selected .fill-color {\n      fill: #faab3c;\n    }\n\n    .video.selected .fill-color {\n      fill: #f1644b;\n    }\n\n    .audio.selected .fill-color {\n      fill: #00adef;\n    }\n\n    .software.selected .fill-color {\n      fill: #9ecc4f;\n    }\n\n    .images.selected .fill-color {\n      fill: #aa99c9;\n    }\n  }\n\n  @media (min-width: 1300px) {\n    .label,\n    .web:after {\n      display: inline;\n    }\n\n    .web .label {\n      display: none;\n    }\n  }\n',
            ]))
        ),
        mt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = {}),
              (e.icon = ""),
              (e.href = ""),
              (e.label = ""),
              (e.mediatype = ""),
              (e.openMenu = ""),
              (e.selected = !1),
              (e.followable = !1),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "onClick",
                  value: function (e) {
                    this.trackClick(e),
                      e.preventDefault(),
                      "media" !== this.openMenu &&
                        this.dispatchMenuToggledEvent(),
                      this.dispatchMediaTypeSelectedEvent();
                  },
                },
                {
                  key: "dispatchMenuToggledEvent",
                  value: function () {
                    this.dispatchEvent(
                      new CustomEvent("menuToggled", {
                        bubbles: !0,
                        composed: !0,
                        detail: { menuName: "media" },
                      })
                    );
                  },
                },
                {
                  key: "dispatchMediaTypeSelectedEvent",
                  value: function () {
                    this.dispatchEvent(
                      new CustomEvent("mediaTypeSelected", {
                        bubbles: !0,
                        composed: !0,
                        detail: { mediatype: this.mediatype },
                      })
                    );
                  },
                },
                {
                  key: "buttonClass",
                  get: function () {
                    return this.selected ? "selected" : "";
                  },
                },
                {
                  key: "tooltipPrefix",
                  get: function () {
                    return this.selected ? "Collapse" : "Expand";
                  },
                },
                {
                  key: "iconClass",
                  get: function () {
                    return this.selected ? "active" : "";
                  },
                },
                {
                  key: "analyticsEvent",
                  get: function () {
                    return ""
                      .concat(this.config.eventCategory, "|NavMenu")
                      .concat(pt(this.mediatype));
                  },
                },
                {
                  key: "menuItem",
                  get: function () {
                    return Object(qe.e)(
                      E ||
                        (E = Je([
                          '\n      <span class="icon ',
                          '">\n        ',
                          '\n      </span>\n      <span class="label">',
                          "</span>\n    ",
                        ])),
                      this.iconClass,
                      n.icons[this.icon],
                      this.label
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      A ||
                        (A = Je([
                          '\n      <a\n        href="',
                          '"\n        class="menu-item ',
                          " ",
                          '"\n        @click=',
                          '\n        data-event-click-tracking="',
                          '"\n        title="',
                          " ",
                          ' menu"\n      >\n        ',
                          "\n      </a>\n    ",
                        ])),
                      this.href,
                      this.mediatype,
                      this.buttonClass,
                      this.followable ? this.trackClick : this.onClick,
                      this.analyticsEvent,
                      this.tooltipPrefix,
                      this.mediatype,
                      this.menuItem
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return vt;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      config: { type: Object },
                      icon: { type: String },
                      href: { type: String },
                      label: { type: String },
                      mediatype: { type: String },
                      openMenu: { type: String },
                      selected: { type: Boolean },
                      followable: { type: Boolean },
                    };
                  },
                },
                {
                  key: "icons",
                  get: function () {
                    return st;
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("media-button", mt);
      var yt = Object(qe.c)(
          C ||
            (C = Je([
              "\n  :host {\n    outline: none;\n  }\n\n  .media-menu {\n    z-index: -1;\n    top: -40rem;\n    background-color: var(--mediaMenuBg);\n    margin: 0;\n    overflow: hidden;\n    transition-duration: 0.2s;\n    transition-property: top;\n    transition-timing-function: ease;\n  }\n\n  .menu-group {\n    position: relative;\n    line-height: normal;\n  }\n\n  /* Mobile view styles */\n  @media (max-width: 889px) {\n    .media-menu-container {\n      position: relative;\n    }\n\n    .media-menu {\n      position: absolute;\n      width: 100%;\n    }\n\n    .open .media-menu {\n      top: 0;\n    }\n\n    .overflow-clip {\n      position: absolute;\n      z-index: -1; /** needs to be under the navigation, otherwise it intercepts clicks */\n      top: 0;\n      left: 0;\n      height: 0;\n      width: 100%;\n      overflow: hidden;\n      transition-duration: 0.2s;\n      transition-property: height;\n    }\n\n    .open .overflow-clip {\n      height: 40rem;\n    }\n  }\n\n  /* Desktop view styles */\n  @media (min-width: 890px) {\n    .media-menu {\n      display: inline-block;\n      position: static;\n      width: auto;\n      height: 5rem;\n      transition-property: none;\n    }\n\n    .menu-group {\n      font-size: 0;\n    }\n  }\n",
            ]))
        ),
        gt = [
          { icon: "web", menu: "web", href: "/web/", label: "Wayback Machine" },
          {
            icon: "texts",
            menu: "texts",
            href: "/details/texts",
            label: "Books",
          },
          {
            icon: "video",
            menu: "video",
            href: "/details/movies",
            label: "Video",
          },
          {
            icon: "audio",
            menu: "audio",
            href: "/details/audio",
            label: "Audio",
          },
          {
            icon: "software",
            menu: "software",
            href: "/details/software",
            label: "Software",
          },
          {
            icon: "images",
            menu: "images",
            href: "/details/image",
            label: "Images",
          },
          {
            icon: "donate",
            menu: "donate",
            href: "/donate/",
            label: "Donate",
            followable: !0,
          },
          { icon: "ellipses", menu: "more", href: "/about/", label: "More" },
        ],
        bt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = {}),
              (e.openMenu = ""),
              (e.selectedMenuOption = ""),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "mediaMenuOptionsTemplate",
                  get: function () {
                    var e = this;
                    return gt.map(function (t) {
                      var n = t.icon,
                        r = t.menu,
                        i = t.label,
                        o = t.href,
                        a = t.followable,
                        s = e.selectedMenuOption === r;
                      return Object(qe.e)(
                        P ||
                          (P = Je([
                            "\n        <media-button\n          .config=",
                            "\n          .icon=",
                            "\n          .href=",
                            "\n          .followable=",
                            "\n          .label=",
                            "\n          .mediatype=",
                            "\n          .openMenu=",
                            "\n          .selected=",
                            '\n          data-mediatype="',
                            '"\n        ></media-button>\n      ',
                          ])),
                        e.config,
                        n,
                        lt(o, e.baseHost),
                        a,
                        i,
                        r,
                        e.openMenu,
                        s,
                        r
                      );
                    });
                  },
                },
                {
                  key: "menuOpened",
                  get: function () {
                    return "media" === this.openMenu;
                  },
                },
                {
                  key: "menuClass",
                  get: function () {
                    return this.menuOpened ? "open" : "closed";
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      _ ||
                        (_ = Je([
                          '\n      <div class="media-menu-container ',
                          '">\n        <div class="overflow-clip">\n          <nav\n            class="media-menu"\n            aria-hidden="',
                          '"\n            aria-expanded="',
                          '"\n          >\n            <div class="menu-group">\n              ',
                          "\n            </div>\n          </nav>\n        </div>\n      </div>\n    ",
                        ])),
                      this.menuClass,
                      !this.menuOpened,
                      this.menuOpened,
                      this.mediaMenuOptionsTemplate
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return yt;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      config: { type: Object },
                      openMenu: { type: String },
                      selectedMenuOption: { type: String },
                    };
                  },
                },
              ]
            ),
            n
          );
        })(qe.b);
      customElements.define("media-menu", bt);
      var wt = Object(qe.g)(
          j ||
            (j = Je([
              '\n  <svg class="ia-wordmark stacked" height="30" viewBox="0 0 95 30" width="95" xmlns="http://www.w3.org/2000/svg">\n    <g fill="#fff" fill-rule="evenodd">\n      <g transform="translate(0 17)">\n        <path d="m3.07645967 2.60391777c.09263226-.31901841.26275495-.97477846.26275495-1.10630359 0-.74950669-.57227138-.76816274-1.19041353-.88009902v-.41183224h2.90678232l3.77209227 12.60682378h-1.60725868l-1.16012991-3.8963154h-3.94266032l-1.15968456 3.8963154h-.95794221zm-.69607795 5.4317081h3.41670507l-1.76223957-5.469953z"/><path d="m13.2661876 2.75363255c0-1.85487748-.0316196-1.85487748-1.469201-2.13611739v-.41183224h3.8032666c1.1601299 0 4.3599508 0 4.3599508 3.35342446 0 2.13518459-1.143652 2.84737918-2.3652399 3.0903742l2.8448791 6.16302512h-1.7773814l-2.7366596-5.82581707h-.9588329v5.82581707h-1.7007817zm1.7007817 3.35295806h.8817878c1.0042583 0 2.411556-.33674165 2.411556-2.43508055 0-2.0237147-.9588329-2.58572812-2.2579112-2.58572812-1.0354326 0-1.0354326.33720805-1.0354326 1.68650665z"/><path d="m30.9386422 12.2878054c-.5250645.2817063-1.3761234.7121946-2.9682403.7121946-3.3552471 0-4.5612478-2.4537366-4.5612478-6.66860403 0-3.4089262.86531-6.18214759 4.3136347-6.18214759 1.3761234 0 2.3812724.28077351 3.0920468.56201342l.0930776 3.12908549h-.4484648c-.0619033-.95612241-.9125167-2.79187744-2.5821241-2.79187744-2.2726076 0-2.6440273 2.94065941-2.6440273 5.28292612 0 2.95931547.8510588 5.61966783 2.9994146 5.61966783 1.4692009 0 2.2267368-.5620135 2.7059306-.9551897z"/><path d="m35.4546446 2.67900836c0-1.48129014-.0926322-1.64966096-1.5466914-1.83622143v-.41276504l3.2470277-.43002189v5.80669465h4.2049699v-5.60101173h1.7007816v12.60682378h-1.7007816v-6.12571303h-4.2049699v6.12571303h-1.7003363z"/><path d="m46.0300434 12.3447063c1.0973359 0 1.3137748-.2807735 1.3137748-1.7420083v-8.05568117c0-1.46123489-.2164389-1.741542-1.3137748-1.741542v-.46919958h4.3287765v.46919958c-1.0826395 0-1.3137748.28030711-1.3137748 1.741542v8.05568117c0 1.4612348.2311353 1.7420083 1.3137748 1.7420083v.4678004h-4.3287765z"/><path d="m55.1990352 2.60391777c-.494781-1.7051627-.6341747-1.7051627-1.8709043-1.98640261v-.41183224h2.9994145l3.0301436 10.26548988h.0307289l2.9535438-10.26548988h1.0042584l-3.771647 12.60682378h-1.344949z"/><path d="m67.7842867 2.75363255c0-1.85487748-.0463161-1.85487748-1.4687557-2.13611739v-.41183224h7.4061269l.0463161 2.77228859h-.433323c0-1.49854698-.6488711-1.89218957-1.6696073-1.89218957h-1.2060007c-.7726777 0-.9735293.07462419-.9735293.97431206v3.7279446h1.8709043c1.0657162 0 1.174381-.82366447 1.2674586-1.44164603h.4324323v3.93316112h-.4324323c0-1.01162415-.3402454-1.61141607-1.2674586-1.61141607h-1.8709043v4.17755538c0 1.0489362.2008516 1.0867147.9735293 1.0867147h1.7168141c.8804518 0 1.2977423-.3749865 1.3908199-1.835755h.433323l-.0472068 2.715854h-6.1685065z"/>\n      </g>\n      <path d="m1.55575146 9.89647882v-7.6678574c0-1.39053729-.25677019-1.65867172-1.55575146-1.65867172v-.44528687h5.12561364v.44528687c-1.28118091 0-1.55575146.26813443-1.55575146 1.65867172v7.6678574c0 1.39097468.27457055 1.65735948 1.55575146 1.65735948v.4461617h-5.12561364v-.4461617c1.29898127 0 1.55575146-.2663848 1.55575146-1.65735948z"/><path d="m9.92299051 2.28198586c0-1.65823431-.25588017-1.58649851-1.83032201-1.88962601v-.39235985h3.8626781l5.7664266 9.70008019h.0364907v-9.70008019h1.1534634v12h-1.7577856l-6.0405521-10.14492965h-.0369358v10.14492965h-1.15346329z"/><path d="m25.631543.83808413h-1.2633805c-1.4458343 0-1.8668128.44572428-1.977175 1.74834147h-.5122054l.0729815-2.5864256h9.3727795l.0734265 2.63935263h-.5126504c0-1.37304075-.5860768-1.8012685-1.9954203-1.8012685h-1.2442452v11.16191587h-2.0141107z"/><path d="m36.1050097 2.42502005c0-1.7654006-.0556262-1.7654006-1.7399852-2.0326602v-.39235985h8.7684573l.0551811 2.63935263h-.5126504c0-1.42684261-.7685305-1.8012685-1.9762849-1.8012685h-1.4284789c-.9153835 0-1.1534633.0717358-1.1534633.92775388v3.54829773h2.2152547c1.2629356 0 1.3906532-.7851571 1.5010154-1.37391558h.5130954v3.74513378h-.5130954c0-.96274696-.4022881-1.53313407-1.5010154-1.53313407h-2.2152547v3.97608803c0 .9986149.2380798 1.033608 1.1534633 1.033608h2.0319111c1.0439911 0 1.5375061-.356492 1.6469783-1.74702926h.5135404l-.0551812 2.58511336h-7.3034876z"/><path d="m48.1689385 2.42502005c0-1.7654006-.0364908-1.7654006-1.7382052-2.0326602v-.39235985h4.5026011c1.3732977 0 5.1621043 0 5.1621043 3.19180579 0 2.03309761-1.3537173 2.71065102-2.8004416 2.94248013l3.3682731 5.86571408h-2.1053376l-3.2396655-5.54552745h-1.1352179v5.54552745h-2.0141107zm2.0141107 3.19136837h1.0439911c1.189064 0 2.8556227-.32018663 2.8556227-2.31697893 0-1.92680615-1.1352179-2.46132536-2.673169-2.46132536-1.2264448 0-1.2264448.32062404-1.2264448 1.6057447z"/><path d="m61.4610921 2.28198586c0-1.65823431-.2567702-1.58649851-1.830767-1.88962601v-.39235985h3.8622331l5.7659816 9.70008019h.0369357v-9.70008019h1.1534633v12h-1.7568955l-6.0414421-10.14492965h-.0364908v10.14492965h-1.1530183z"/><path d="m75.1550889 2.42502005c0-1.7654006-.0547361-1.7654006-1.7390952-2.0326602v-.39235985h8.7684573l.0551811 2.63935263h-.5126504c0-1.42684261-.7694205-1.8012685-1.9771749-1.8012685h-1.4280339c-.9149385 0-1.1530183.0717358-1.1530183.92775388v3.54829773h2.2148098c1.2633805 0 1.3906531-.7851571 1.5010153-1.37391558h.5130954v3.74513378h-.5130954c0-.96274696-.4022881-1.53313407-1.5010153-1.53313407h-2.2148098v3.97608803c0 .9986149.2380798 1.033608 1.1530183 1.033608h2.0319111c1.0439911 0 1.5379511-.356492 1.6478683-1.74702926h.5126504l-.0551811 2.58511336h-7.3039327z"/><path d="m89.2335734.83808413h-1.2624905c-1.4462793 0-1.8672578.44572428-1.97762 1.74834147h-.5122054l.0734265-2.5864256h9.3718895l.0734265 2.63935263h-.5122054c0-1.37304075-.5856318-1.8012685-1.9958653-1.8012685h-1.2446902v11.16191587h-2.0136657z"/>\n    </g>\n  </svg>\n\n',
            ]))
        ),
        kt = Object(qe.c)(
          I ||
            (I = Je([
              "\n  button:focus,\n  a:focus,\n  input:focus {\n    outline: none;\n  }\n\n  nav {\n    position: relative;\n    display: -ms-grid;\n    display: grid;\n    height: 4rem;\n    grid-template-areas: 'hamburger empty search user';\n    -ms-grid-columns: 4rem minmax(1rem, 100%) 4.3rem 4rem;\n    grid-template-columns: 4rem auto 4.3rem 4rem;\n    -ms-grid-rows: 100%;\n    grid-template-rows: 100%;\n    background: var(--primaryNavBg);\n    border-bottom: 1px solid var(--primaryNavBottomBorder);\n  }\n\n  button {\n    background: none;\n    color: inherit;\n    border: none;\n    font: inherit;\n    cursor: pointer;\n  }\n\n  .branding {\n    position: static;\n    float: left;\n    padding: 0 5px 0 10px;\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n\n  slot,\n  .branding {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n  }\n\n  media-menu {\n    grid-column-start: hamburger-start;\n    grid-column-end: user-end;\n  }\n\n  .ia-logo,\n  .ia-wordmark {\n    margin-right: 5px;\n  }\n\n  .hamburger {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: hamburger;\n    padding: 0;\n  }\n\n  .search-trigger {\n    -ms-grid-row: 1;\n    -ms-grid-column: 3;\n    grid-area: search;\n    position: relative;\n    padding: 0;\n    z-index: 1;\n    width: 100%;\n    text-align: right;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .search-trigger .fill-color {\n    fill: var(--iconFill);\n  }\n\n  .search-activated {\n    position: relative;\n    z-index: 3;\n  }\n\n  .upload {\n    display: none;\n  }\n\n  .upload span {\n    display: none;\n  }\n\n  .user-info {\n    -ms-grid-row: 1;\n    -ms-grid-column: 4;\n    grid-area: user;\n    -ms-grid-row-align: stretch;\n    align-self: stretch;\n    -ms-grid-column-align: end;\n    justify-self: end;\n  }\n\n  .username {\n    display: none;\n    font-size: 1.3rem;\n    vertical-align: middle;\n    text-transform: uppercase;\n  }\n\n  .user-menu {\n    height: 100%;\n    padding: 0.5rem 1rem;\n    color: var(--lightTextColor);\n  }\n\n  .user-menu:hover {\n    color: var(--linkHoverColor);\n  }\n\n  .user-menu.active {\n    border-radius: 1rem 1rem 0 0;\n    background: var(--activeButtonBg);\n  }\n\n  .user-menu img {\n    display: block;\n    width: 30px;\n    height: 30px;\n  }\n\n  .link-home {\n    display: flex;\n    text-decoration: none;\n  }\n\n  @media only screen and (min-width: 890px) and (max-device-width: 905px) {\n    .branding.second-logo {\n      padding-right: 0;\n    }\n  }\n\n  @media (min-width: 906px) {\n    .branding.second-logo {\n      padding-right: 20px;\n    }\n  }\n\n  @media (max-width: 889px) {\n    slot[name='opt-sec-logo'] {\n      display: none;\n    }\n  }\n\n  @media (min-width: 890px) {\n    :host {\n      --userIconWidth: 32px;\n      --userIconHeight: 32px;\n    }\n\n    nav {\n      display: block;\n      z-index: 2;\n      height: 5rem;\n      padding-right: 1.5rem;\n    }\n\n    slot[name='opt-sec-logo-mobile'] {\n      display: none;\n    }\n\n    .branding {\n      margin-top: 1rem;\n    }\n\n    .ia-logo,\n    .ia-wordmark {\n      margin-right: 10px;\n    }\n\n    .hamburger,\n    .search-trigger {\n      display: none;\n    }\n\n    .user-info {\n      float: right;\n      padding-top: 1rem;\n    }\n\n    .user-menu {\n      padding-top: 0;\n    }\n\n    .user-menu.active {\n      background: transparent;\n    }\n\n    .user-menu img {\n      display: inline-block;\n      vertical-align: middle;\n    }\n\n    .upload {\n      display: block;\n      float: right;\n      margin-top: 1rem;\n      font-size: 1.4rem;\n      text-transform: uppercase;\n      text-decoration: none;\n      color: var(--lightTextColor);\n    }\n    .upload:active,\n    .upload:focus,\n    .upload:hover {\n      color: var(--linkHoverColor);\n    }\n\n    .upload svg {\n      width: 32px;\n      height: 32px;\n      vertical-align: middle;\n      fill: var(--iconFill);\n    }\n\n    .upload:hover svg,\n    .upload:focus svg,\n    .upload:active svg {\n      fill: var(--linkHoverColor);\n    }\n\n    nav-search {\n      float: right;\n      margin-left: 1rem;\n    }\n\n    login-button {\n      display: block;\n      margin-right: 1rem;\n    }\n  }\n\n  @media (min-width: 990px) {\n    .username {\n      display: inline-block;\n    }\n\n    .upload span {\n      display: inline;\n    }\n  }\n",
            ]))
        );
      function xt(e) {
        window.location = e;
      }
      var St = (function (e) {
        et(n, e);
        var t = nt(n);
        function n() {
          var e;
          return (
            Ze(this, n),
            ((e = t.call(this)).config = {}),
            (e.openMenu = ""),
            (e.searchIn = ""),
            (e.selectedMenuOption = ""),
            (e.signedOutMenuOpen = !1),
            (e.userMenuOpen = !1),
            (e.mediaBaseHost = "https://archive.org"),
            (e.secondIdentitySlotMode = ""),
            e
          );
        }
        return (
          Xe(
            n,
            [
              {
                key: "toggleMediaMenu",
                value: function (e) {
                  this.trackClick(e),
                    this.dispatchEvent(
                      new CustomEvent("menuToggled", {
                        detail: { menuName: "media" },
                      })
                    );
                },
              },
              {
                key: "toggleSearchMenu",
                value: function (e) {
                  this.trackClick(e),
                    this.dispatchEvent(
                      new CustomEvent("menuToggled", {
                        detail: { menuName: "search" },
                      })
                    );
                },
              },
              {
                key: "toggleUserMenu",
                value: function (e) {
                  this.trackClick(e),
                    this.dispatchEvent(
                      new CustomEvent("menuToggled", {
                        detail: { menuName: "user" },
                      })
                    );
                },
              },
              {
                key: "truncatedScreenName",
                get: function () {
                  return this.screenName && this.screenName.length > 10
                    ? "".concat(this.screenName.substr(0, 9), "…")
                    : this.screenName;
                },
              },
              {
                key: "userIcon",
                get: function () {
                  var e = "user" === this.openMenu ? "active" : "",
                    t =
                      "user" === this.openMenu
                        ? "Close user menu"
                        : "Expand user menu";
                  return Object(qe.e)(
                    T ||
                      (T = Je([
                        '\n      <button\n        class="user-menu ',
                        '"\n        title="',
                        '"\n        @click="',
                        '"\n        data-event-click-tracking="',
                        '|NavUserMenu"\n      >\n        <img\n          src="',
                        "",
                        "?",
                        '"\n          alt="',
                        '"\n        />\n        <span class="username">',
                        "</span>\n      </button>\n    ",
                      ])),
                    e,
                    t,
                    this.toggleUserMenu,
                    this.config.eventCategory,
                    this.mediaBaseHost,
                    this.userProfileImagePath,
                    this.userProfileLastModified,
                    this.username,
                    this.truncatedScreenName
                  );
                },
              },
              {
                key: "loginIcon",
                get: function () {
                  return Object(qe.e)(
                    R ||
                      (R = Je([
                        "\n      <login-button\n        .baseHost=",
                        "\n        .config=",
                        "\n        .dropdownOpen=",
                        "\n        .openMenu=",
                        "\n        @signedOutMenuToggled=",
                        "\n      ></login-button>\n    ",
                      ])),
                    this.baseHost,
                    this.config,
                    this.signedOutMenuOpen,
                    this.openMenu,
                    this.signedOutMenuToggled
                  );
                },
              },
              {
                key: "searchMenuOpen",
                get: function () {
                  return "search" === this.openMenu;
                },
              },
              {
                key: "allowSecondaryIcon",
                get: function () {
                  return "allow" === this.secondIdentitySlotMode;
                },
              },
              {
                key: "searchMenu",
                get: function () {
                  return this.hideSearch
                    ? qe.f
                    : Object(qe.e)(
                        L ||
                          (L = Je([
                            '\n      <button\n        class="search-trigger"\n        @click="',
                            '"\n        data-event-click-tracking="',
                            '|NavSearchOpen"\n      >\n        ',
                            "\n      </button>\n      <nav-search\n        .baseHost=",
                            "\n        .config=",
                            "\n        .locationHandler=",
                            "\n        .open=",
                            "\n        .openMenu=",
                            "\n        .searchIn=",
                            "\n        .searchQuery=",
                            "\n      ></nav-search>\n    ",
                          ])),
                        this.toggleSearchMenu,
                        this.config.eventCategory,
                        st.search,
                        this.baseHost,
                        this.config,
                        xt,
                        this.searchMenuOpen,
                        this.openMenu,
                        this.searchIn,
                        this.searchQuery
                      );
                },
              },
              {
                key: "secondLogoSlot",
                get: function () {
                  return this.allowSecondaryIcon
                    ? Object(qe.e)(
                        M ||
                          (M = Je([
                            '\n          <slot name="opt-sec-logo"></slot>\n          <slot name="opt-sec-logo-mobile"></slot>\n        ',
                          ]))
                      )
                    : qe.f;
                },
              },
              {
                key: "secondLogoClass",
                get: function () {
                  return this.allowSecondaryIcon ? "second-logo" : "";
                },
              },
              {
                key: "render",
                value: function () {
                  var e = "media" === this.openMenu ? "" : "-1";
                  return Object(qe.e)(
                    N ||
                      (N = Je([
                        "\n      <nav>\n        <div class=",
                        ">\n          <a\n            href=",
                        "\n            @click=",
                        '\n            data-event-click-tracking="',
                        '|NavHome"\n            title="Go home"\n            class="link-home"\n            >',
                        "",
                        "</a\n          >\n          ",
                        "\n        </div>\n        ",
                        '\n        <a href="',
                        '" class="upload">\n          ',
                        '\n          <span>Upload</span>\n        </a>\n        <div class="user-info">\n          ',
                        "\n        </div>\n        <media-menu\n          .baseHost=",
                        "\n          .config=",
                        '\n          ?mediaMenuAnimate="',
                        '"\n          tabindex="',
                        '"\n          .selectedMenuOption=',
                        "\n          .openMenu=",
                        '\n        ></media-menu>\n        <button\n          class="hamburger"\n          @click="',
                        '"\n          tabindex="1"\n          data-event-click-tracking="',
                        '|NavHamburger"\n          title="Open main menu"\n        >\n          <icon-hamburger ?active=',
                        "></icon-hamburger>\n        </button>\n      </nav>\n    ",
                      ])),
                    "branding ".concat(this.secondLogoClass),
                    lt("/", this.baseHost),
                    this.trackClick,
                    this.config.eventCategory,
                    st.iaLogo,
                    wt,
                    this.secondLogoSlot,
                    this.searchMenu,
                    lt(this.config.uploadURL, this.baseHost),
                    st.upload,
                    this.username ? this.userIcon : this.loginIcon,
                    this.baseHost,
                    this.config,
                    this.mediaMenuAnimate,
                    e,
                    this.selectedMenuOption,
                    this.openMenu,
                    this.toggleMediaMenu,
                    this.config.eventCategory,
                    "media" === this.openMenu
                  );
                },
              },
            ],
            [
              {
                key: "styles",
                get: function () {
                  return kt;
                },
              },
              {
                key: "properties",
                get: function () {
                  return {
                    mediaBaseHost: { type: String },
                    baseHost: { type: String },
                    hideSearch: { type: Boolean },
                    config: { type: Object },
                    openMenu: { type: String },
                    screenName: { type: String },
                    searchIn: { type: String },
                    searchQuery: { type: String },
                    secondIdentitySlotMode: { type: String },
                    selectedMenuOption: { type: String },
                    signedOutMenuOpen: { type: Boolean },
                    userMenuOpen: { type: Boolean },
                    username: { type: String },
                    userProfileImagePath: { type: String },
                    userProfileLastModified: { type: String },
                  };
                },
              },
            ]
          ),
          n
        );
      })(at);
      customElements.define("primary-nav", St);
      var Ot = Object(qe.c)(
          D ||
            (D = Je([
              "\n  :host {\n    --topOffset: -1500px;\n  }\n\n  .nav-container {\n    position: relative;\n  }\n\n  nav {\n    position: absolute;\n    right: 0;\n    z-index: 2;\n    overflow: hidden;\n    font-size: 1.6rem;\n    background-color: var(--dropdownMenuBg);\n    transition-property: top;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n  }\n\n  .initial,\n  .closed {\n    top: var(--topOffset);\n  }\n\n  .closed {\n    transition-duration: 0.5s;\n  }\n\n  .open {\n    max-width: 100vw;\n    overflow: auto;\n  }\n\n  h3 {\n    padding: 0.6rem 2rem;\n    margin: 0;\n    font-size: inherit;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  ul {\n    padding: 0.4rem 0 0.7rem 0;\n    margin: 0;\n    list-style: none;\n    /* viewport height - nav height + bottom nav border */\n    max-height: calc(100vh - 7.2rem + 1px);\n    overflow: auto;\n    box-sizing: border-box;\n  }\n\n  .divider {\n    margin: 0.5rem 0;\n    border-bottom: 1px solid var(--dropdownMenuDivider);\n  }\n\n  a,\n  .info-item {\n    display: block;\n    color: var(--primaryTextColor);\n    text-decoration: none;\n    padding: 1rem 2rem;\n  }\n\n  .info-item {\n    font-size: 0.8em;\n    color: var(--dropdownMenuInfoItem);\n  }\n\n  @media (min-width: 890px) {\n    nav {\n      overflow: visible;\n      top: 0;\n      left: auto;\n      z-index: 5;\n      transition: opacity 0.2s ease-in-out;\n      font-size: 1.4rem;\n      border-radius: 2px;\n      background: var(--primaryTextColor);\n      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);\n    }\n\n    nav:after {\n      position: absolute;\n      right: 7px;\n      top: -7px;\n      width: 12px;\n      height: 7px;\n      box-sizing: border-box;\n      color: #fff;\n      content: '';\n      border-bottom: 7px solid currentColor;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n    }\n\n    h3 {\n      display: none;\n    }\n\n    ul {\n      /* viewport height - nav height + bottom nav border */\n      max-height: calc(100vh - 8.5rem + 1px);\n    }\n\n    .divider {\n      border-bottom-color: var(--dropdownMenuDivider);\n    }\n\n    a {\n      padding: 0.5rem 2rem;\n      color: var(--inverseTextColor);\n      transition: background 0.1s ease-out, color 0.1s ease-out;\n    }\n\n    .info-item {\n      padding: 0.5rem 2rem;\n      font-size: 0.8em;\n    }\n\n    a:hover,\n    a:active,\n    a:focus {\n      color: var(--linkHoverColor);\n      background: var(--linkColor);\n    }\n\n    .initial,\n    .closed {\n      opacity: 0;\n      transition-duration: 0.2s;\n    }\n\n    .open {\n      opacity: 1;\n      overflow: visible;\n    }\n  }\n",
            ]))
        ),
        Et = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = {}),
              (e.menuItems = []),
              (e.open = !1),
              (e.animate = !1),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "dropdownItems",
                  get: function () {
                    var e = this;
                    return this.menuItems
                      ? Array.isArray(this.menuItems[0])
                        ? this.menuItems.map(function (t, r) {
                            return [
                              r
                                ? n.dropdownDivider
                                : Object(qe.e)(z || (z = Je([""]))),
                            ].concat(Ge(e.dropdownSection(t)));
                          })
                        : this.dropdownSection(this.menuItems)
                      : qe.f;
                  },
                },
                {
                  key: "dropdownSection",
                  value: function (e) {
                    var t = this;
                    return e.map(function (e) {
                      return Object(qe.e)(
                        B || (B = Je(["\n        <li>", "</li>\n      "])),
                        e.url ? t.dropdownLink(e) : n.dropdownText(e)
                      );
                    });
                  },
                },
                {
                  key: "dropdownLink",
                  value: function (e) {
                    return Object(qe.e)(
                      U ||
                        (U = Je([
                          '<a href="',
                          '" @click=',
                          ' data-event-click-tracking="',
                          "|Nav",
                          '">',
                          "</a>",
                        ])),
                      lt(e.url, this.baseHost),
                      this.trackClick,
                      this.config.eventCategory,
                      e.analyticsEvent,
                      e.title
                    );
                  },
                },
                {
                  key: "menuClass",
                  get: function () {
                    var e = this.hideSearch ? " search-hidden" : "";
                    return this.open
                      ? "open".concat(e)
                      : this.animate
                      ? "closed".concat(e)
                      : "initial".concat(e);
                  },
                },
                {
                  key: "ariaHidden",
                  get: function () {
                    return Boolean(!this.open).toString();
                  },
                },
                {
                  key: "ariaExpanded",
                  get: function () {
                    return Boolean(this.open).toString();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      H ||
                        (H = Je([
                          '\n      <div class="nav-container">\n        <nav\n          class="',
                          '"\n          aria-hidden="',
                          '"\n          aria-expanded="',
                          '"\n        >\n          <ul>\n            ',
                          "\n          </ul>\n        </nav>\n      </div>\n    ",
                        ])),
                      this.menuClass,
                      this.ariaHidden,
                      this.ariaExpanded,
                      this.dropdownItems
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Ot;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      config: { type: Object },
                      hideSearch: { type: Boolean },
                      menuItems: { type: Array },
                      animate: { type: Boolean },
                      open: { type: Boolean },
                    };
                  },
                },
                {
                  key: "dropdownDivider",
                  get: function () {
                    return Object(qe.e)(
                      F ||
                        (F = Je([
                          '<li role="presentation" class="divider"></li>',
                        ]))
                    );
                  },
                },
                {
                  key: "dropdownText",
                  value: function (e) {
                    return Object(qe.e)(
                      W || (W = Je(['<span class="info-item">', "</span>"])),
                      e.title
                    );
                  },
                },
              ]
            ),
            n
          );
        })(at),
        At = Object(qe.c)(
          V ||
            (V = Je([
              "\n  @media (min-width: 890px) {\n    .initial,\n    .closed,\n    .open {\n      right: 21.3rem;\n    }\n\n    .search-hidden.initial,\n    .search-hidden.closed,\n    .search-hidden.open {\n      right: 5.8rem;\n    }\n  }\n\n  @media (min-width: 990px) {\n    .initial,\n    .closed,\n    .open {\n      right: 27.5rem;\n    }\n\n    .search-hidden.initial,\n    .search-hidden.closed,\n    .search-hidden.open {\n      right: 12rem;\n    }\n  }\n",
            ]))
        ),
        Ct = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return Ze(this, n), ((e = t.call(this)).username = ""), e;
          }
          return (
            Xe(
              n,
              [
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      q ||
                        (q = Je([
                          '\n      <div class="nav-container">\n        <nav\n          class="',
                          '"\n          aria-hidden="',
                          '"\n          aria-expanded="',
                          '"\n        >\n          <h3>',
                          "</h3>\n          <ul>\n            ",
                          "\n          </ul>\n        </nav>\n      </div>\n    ",
                        ])),
                      this.menuClass,
                      this.ariaHidden,
                      this.ariaExpanded,
                      this.screenName,
                      this.dropdownItems
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return [Et.styles, At];
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return ot(ot({}, Et.properties), {
                      username: { type: String },
                      screenName: { type: String },
                    });
                  },
                },
              ]
            ),
            n
          );
        })(Et);
      customElements.define("user-menu", Ct);
      var Pt = Object(qe.c)(
          $ ||
            ($ = Je([
              "\n  :host {\n    --topOffset: -800px;\n  }\n\n  .menu-wrapper {\n    position: relative;\n  }\n\n  button:focus,\n  input:focus {\n    outline-color: var(--linkColor);\n    outline-width: 0.16rem;\n    outline-style: auto;\n  }\n  .search-menu {\n    position: absolute;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    padding: 0 4.5rem;\n    font-size: 1.6rem;\n    background-color: var(--searchMenuBg);\n  }\n  .tx-slide {\n    overflow: hidden;\n    transition-property: top;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n  }\n  .initial,\n  .closed {\n    top: var(--topOffset);\n  }\n  .closed {\n    transition-duration: 0.2s;\n  }\n\n  label,\n  a {\n    padding: 1rem;\n    display: block;\n  }\n\n  .advanced-search {\n    text-decoration: none;\n    color: var(--linkColor);\n  }\n\n  @media (min-width: 890px) {\n    .search-menu {\n      overflow: visible;\n      right: 2rem;\n      left: auto;\n      z-index: 5;\n      padding: 1rem 2rem;\n      transition: opacity 0.2s ease-in-out;\n      font-size: 1.4rem;\n      color: var(--inverseTextColor);\n      border-radius: 2px;\n      background: var(--primaryTextColor);\n      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);\n    }\n\n    .search-menu:after {\n      position: absolute;\n      right: 7px;\n      top: -7px;\n      width: 12px;\n      height: 7px;\n      box-sizing: border-box;\n      color: #fff;\n      content: '';\n      border-bottom: 7px solid currentColor;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n    }\n\n    .initial,\n    .closed {\n      opacity: 0;\n      transition-duration: 0.2s;\n    }\n\n    .open {\n      opacity: 1;\n    }\n\n    label {\n      padding: 0;\n    }\n\n    label + label {\n      padding-top: 7px;\n    }\n\n    a {\n      padding: 1rem 0 0 0;\n    }\n  }\n",
            ]))
        ),
        _t = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = {}),
              (e.openMenu = ""),
              (e.searchMenuOpen = !1),
              (e.searchMenuAnimate = !1),
              (e.selectedSearchType = ""),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "selectSearchType",
                  value: function (e) {
                    this.selectedSearchType = e.target.value;
                  },
                },
                {
                  key: "searchInChanged",
                  value: function (e) {
                    this.dispatchEvent(
                      new CustomEvent("searchInChanged", {
                        detail: { searchIn: e.target.value },
                      })
                    );
                  },
                },
                {
                  key: "searchTypesTemplate",
                  get: function () {
                    var e = this;
                    return [
                      { label: "Metadata", value: "", isDefault: !0 },
                      { label: "text contents", value: "TXT" },
                      { label: "TV news captions", value: "TV" },
                      { label: "radio transcripts", value: "RADIO" },
                      { label: "archived websites", value: "WEB" },
                    ].map(function (t) {
                      var n = t.value,
                        r = t.label,
                        i = t.isDefault;
                      return e.config.hiddenSearchOptions &&
                        e.config.hiddenSearchOptions.includes(n)
                        ? Object(qe.e)(K || (K = Je([""])))
                        : Object(qe.e)(
                            G ||
                              (G = Je([
                                '\n        <label @click="',
                                '">\n          <input form="nav-search" type="radio" name="sin" value="',
                                '" ?checked=',
                                " @change=",
                                " />\n          Search ",
                                "\n        </label>\n      ",
                              ])),
                            e.selectSearchType,
                            n,
                            i,
                            e.searchInChanged,
                            r
                          );
                    });
                  },
                },
                {
                  key: "menuClass",
                  get: function () {
                    return "search" === this.openMenu ? "open" : "closed";
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = Boolean(!this.searchMenuOpen).toString(),
                      t = Boolean(this.searchMenuOpen).toString();
                    return this.hideSearch
                      ? Object(qe.e)(Y || (Y = Je([""])))
                      : Object(qe.e)(
                          J ||
                            (J = Je([
                              '\n      <div class="menu-wrapper">\n        <div\n          class="search-menu tx-slide ',
                              '"\n          aria-hidden="',
                              '"\n          aria-expanded="',
                              '"\n        >\n          ',
                              '\n          <a\n            class="advanced-search"\n            href="',
                              '"\n            @click=',
                              '\n            data-event-click-tracking="',
                              '|NavAdvancedSearch"\n            >Advanced Search</a\n          >\n        </div>\n      </div>\n    ',
                            ])),
                          this.menuClass,
                          e,
                          t,
                          this.searchTypesTemplate,
                          lt("/advancedsearch.php", this.baseHost),
                          this.trackClick,
                          this.config.eventCategory
                        );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Pt;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      config: { type: Object },
                      hideSearch: { type: Boolean },
                      openMenu: { type: String },
                      searchMenuOpen: { type: Boolean },
                      searchMenuAnimate: { type: Boolean },
                      selectedSearchType: { type: String },
                    };
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("search-menu", _t);
      var jt = Object(qe.c)(
          Z ||
            (Z = Je([
              "\n  form {\n  }\n\n  p {\n    margin-bottom: 1rem;\n    font-size: 1.6rem;\n    text-align: center;\n  }\n\n  fieldset {\n    padding: .5rem;\n    border-radius: 5px;\n    box-shadow: none;\n  }\n\n  input {\n    padding-left: 3rem;\n    margin-top: .3rem;\n    font-size: 1.4rem;\n    border-color: #bca38e;\n    background: #fff;\n  }\n\n  input::placeholder,\n  input::-webkit-input-placeholder {\n    color: #8e8e8e;\n  }\n\n  .search-field svg {\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  @media (min-width: 890px) {\n    fieldset a,\n    .search-field {\n      display: block;\n      width: auto;\n    }\n\n    fieldset a {\n      margin: 0 1.5rem;\n    }\n  }\n",
            ]))
        ),
        It = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            return Ze(this, n), t.apply(this, arguments);
          }
          return (
            Xe(n, null, [
              {
                key: "styles",
                get: function () {
                  return [$e.a.styles, jt];
                },
              },
            ]),
            n
          );
        })($e.a);
      customElements.define("wayback-search", It);
      var Tt = Object(qe.c)(
          Q ||
            (Q = Je([
              '\n  div {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-column-gap: .8rem;\n    margin: 0;\n    padding: 0;\n    border: none;\n  }\n\n  input[type="text"] {\n    width: 100%;\n    height: 30px;\n    box-sizing: border-box;\n    border: 1px solid var(--savePageInputBorder);\n    border-radius: .5rem;\n  }\n\n  input[type="submit"] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    padding: .4rem .8rem;\n    font: normal 1.3rem var(--themeFontFamily);\n    text-transform: uppercase;\n    color: var(--savePageSubmitText);\n    border: none;\n    border-radius: 16px;\n    background: var(--savePageSubmitBg);\n    cursor: pointer;\n  }\n\n  .error {\n    display: none;\n    margin-top: .5rem;\n    font-weight: bold;\n    color: var(--savePageErrorText);\n  }\n\n  .visible {\n    display: block;\n  }\n\n  @media (min-width: 890px) {\n    h3 {\n      margin-top: 0;\n      font: normal 100 1.6rem var(--themeFontFamily);\n    }\n  }\n',
            ]))
        ),
        Rt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = { eventCategory: "" }),
              (e.inputValid = !0),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "validateURL",
                  value: function (e) {
                    var t = e.target.querySelector('[name="url_preload"]');
                    if (!/\..{2,}$/.test(t.value))
                      return e.preventDefault(), void (this.inputValid = !1);
                    (this.inputValid = !0), this.trackSubmit(e);
                  },
                },
                {
                  key: "errorClass",
                  get: function () {
                    return "error".concat(this.inputValid ? "" : " visible");
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      X ||
                        (X = Je([
                          '\n      <form action="//web.archive.org/save" method="post" data-event-submit-tracking="',
                          '|SavePageSubmit" @submit=',
                          '>\n        <h3>Save Page Now</h3>\n        <p>Capture a web page as it appears now for use as a trusted citation in the future.</p>\n        <div>\n          <input type="text" name="url_preload" placeholder="https://" />\n          <input type="submit" value="Save" />\n        </div>\n        <p class=',
                          ">Please enter a valid web address</p>\n      </form>\n    ",
                        ])),
                      this.config.eventCategory,
                      this.validateURL,
                      this.errorClass
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Tt;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      config: { type: Object },
                      inputValid: { type: Boolean },
                    };
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("save-page-form", Rt);
      var Lt = {
          performQuery: function (e) {
            window.location = "https://web.archive.org/web/*/".concat(e);
          },
        },
        Mt = Object(qe.c)(
          ee ||
            (ee = Je([
              "\n  h4 {\n    font-size: 1.6rem;\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--activeColor);\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n  li + li {\n    padding-top: 1.5rem;\n  }\n\n  @media (min-width: 890px) {\n    h4 {\n      margin: 0 0 1rem 0;\n      font-weight: 100;\n    }\n\n    ul {\n      font-size: 1.3rem;\n    }\n\n    li {\n      padding-bottom: .5rem;\n    }\n\n    li + li {\n      padding-top: 0;\n    }\n\n    li a {\n      display: block;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n",
            ]))
        ),
        Nt = [
          Mt,
          Object(qe.c)(
            te ||
              (te = Je([
                "\n  @media (min-width: 890px) {\n    :host {\n      display: block;\n      grid-column: 1 / 4;\n      padding: 0 1.5rem;\n    }\n\n    h4 {\n      margin-top: 0;\n      font: normal 100 1.6rem var(--themeFontFamily);\n    }\n\n    .grid {\n      display: grid;\n      grid-template-columns: minmax(auto, 260px) 1fr minmax(auto, 260px);\n      /* Possible for 890 - 935: minmax(auto, 260px) 1fr minmax(auto, 260px) */\n      grid-column-gap: 2.5rem;\n    }\n\n    .link-lists {\n      display: grid;\n      grid-template-columns: calc(50% - 1.25rem) calc(50% - 1.25rem);\n      grid-column-gap: 2.5rem;\n    }\n  }\n",
              ]))
          ),
        ],
        Dt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).archiveItLinks = []),
              (e.browserExtensionsLinks = []),
              (e.mobileAppsLinks = []),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "mobileAppsItems",
                  get: function () {
                    return this.linkList("mobileAppsLinks", "Wayback");
                  },
                },
                {
                  key: "browserExtensionsItems",
                  get: function () {
                    return this.linkList("browserExtensionsLinks", "Wayback");
                  },
                },
                {
                  key: "archiveItItems",
                  get: function () {
                    return this.linkList("archiveItLinks", "ArchiveIt");
                  },
                },
                {
                  key: "linkList",
                  value: function (e, t) {
                    var n = this;
                    return this[e].map(function (e) {
                      return Object(qe.e)(
                        ne ||
                          (ne = Je([
                            "<li>\n      <a href=",
                            " @click=",
                            ' data-event-click-tracking="',
                            '" target=',
                            " rel=",
                            ">",
                            "</a>\n    </li>",
                          ])),
                        lt(e.url, n.baseHost),
                        n.trackClick,
                        n.analyticsEvent("".concat(t).concat(e.title)),
                        e.external ? "_blank" : "",
                        e.external ? "noreferrer noopener" : "",
                        e.title
                      );
                    });
                  },
                },
                {
                  key: "analyticsEvent",
                  value: function (e) {
                    return ""
                      .concat(this.config.eventCategory, "|")
                      .concat(pt(e));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      re ||
                        (re = Je([
                          '\n      <div class="grid">\n        <wayback-search\n          .baseHost=',
                          "\n          waybackPagesArchived=",
                          "\n          .queryHandler=",
                          '></wayback-search>\n        <div class="link-lists">\n          <div>\n            <h4>Mobile Apps</h4>\n            <ul class="mobile-apps">\n              ',
                          '\n            </ul>\n            <h4>Browser Extensions</h4>\n            <ul class="browser-extensions">\n              ',
                          '\n            </ul>\n          </div>\n          <div>\n            <h4>Archive-It Subscription</h4>\n            <ul class="archive-it">\n              ',
                          "\n            </ul>\n          </div>\n        </div>\n        <save-page-form .config=",
                          "></save-page-form>\n      </div>\n    ",
                        ])),
                      this.baseHost,
                      this.config.waybackPagesArchived,
                      Lt,
                      this.mobileAppsItems,
                      this.browserExtensionsItems,
                      this.archiveItItems,
                      this.config
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Nt;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      archiveItLinks: { type: Array },
                      baseHost: { type: String },
                      browserExtensionsLinks: { type: Array },
                      config: { type: Object },
                      mobileAppsLinks: { type: Array },
                    };
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("wayback-slider", Dt);
      var zt = Object(qe.c)(
          ie ||
            (ie = Je([
              "\n  ul {\n    padding: 0;\n    margin: -1rem 0 0 0;\n    list-style: none;\n  }\n  a {\n    display: block;\n    padding: 1rem 0;\n    text-decoration: none;\n    color: var(--activeColor);\n  }\n",
            ]))
        ),
        Bt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            return Ze(this, n), t.apply(this, arguments);
          }
          return (
            Xe(
              n,
              [
                {
                  key: "analyticsEvent",
                  value: function (e) {
                    return ""
                      .concat(this.config.eventCategory, "|NavMore")
                      .concat(pt(e));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return Object(qe.e)(
                      oe ||
                        (oe = Je([
                          "\n      <ul>\n        ",
                          "\n      </ul>\n    ",
                        ])),
                      this.menuItems.map(function (t) {
                        return Object(qe.e)(
                          ae ||
                            (ae = Je([
                              "<li><a @click=",
                              " href=",
                              ' data-event-click-tracking="',
                              '">',
                              "</a></li>",
                            ])),
                          e.trackClick,
                          lt(t.url, e.baseHost),
                          e.analyticsEvent(t.title),
                          t.title
                        );
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      config: { type: Object },
                      menuItems: { type: Array },
                    };
                  },
                },
                {
                  key: "styles",
                  get: function () {
                    return zt;
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("more-slider", Bt);
      var Ut = [
          Mt,
          Object(qe.c)(
            se ||
              (se = Je([
                "\n  img {\n    display: block;\n    width: 90px;\n    height: 90px;\n    margin: 0 auto 1rem auto;\n    border-radius: 45px;\n  }\n\n  h3 {\n    margin-top: 0;\n    font-size: 1.8rem;\n  }\n\n  .icon-links {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n    -ms-flex-pack: space-evenly;\n    justify-content: space-evenly;\n    text-align: center;\n  }\n\n  .icon-links a {\n    display: inline-block;\n    width: 120px;\n    margin-bottom: 1.5rem;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    text-overflow: ellipsis;\n  }\n\n  .icon-links a + a {\n    margin-left: 2rem;\n  }\n\n  .featured h4 {\n    display: none;\n  }\n\n  @media (min-width: 890px) {\n    :host {\n      display: -ms-grid;\n      display: grid;\n      -ms-grid-columns: 40% 20% 40%;\n      grid-template-columns: 40% 20% 40%;\n    }\n\n    .wayback-search {\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 3;\n      grid-column: 1 / 4;\n    }\n\n    h3 {\n      display: none;\n    }\n\n    .icon-links {\n      -ms-grid-column: 1;\n    }\n\n    .icon-links a {\n      padding-top: 3.5rem;\n      max-width: 160px;\n    }\n\n    .links {\n      padding: 0 1.5rem;\n    }\n\n    .featured {\n      -ms-grid-column: 2;\n    }\n\n    .featured h4 {\n      display: block;\n    }\n\n    .top {\n      -ms-grid-column: 3;\n    }\n\n    .top ul {\n      display: -ms-grid;\n      display: grid;\n      -ms-grid-columns: 50% 3rem 50%;\n      grid-template-columns: 50% 50%;\n      -ms-grid-rows: (auto)[7];\n      grid-template-rows: repeat(7, auto);\n      grid-column-gap: 3rem;\n      grid-auto-flow: column;\n    }\n    .top ul > *:nth-child(1) {\n      -ms-grid-row: 1;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(2) {\n      -ms-grid-row: 2;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(3) {\n      -ms-grid-row: 3;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(4) {\n      -ms-grid-row: 4;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(5) {\n      -ms-grid-row: 5;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(6) {\n      -ms-grid-row: 6;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(7) {\n      -ms-grid-row: 7;\n      -ms-grid-column: 1;\n    }\n    .top ul > *:nth-child(8) {\n      -ms-grid-row: 1;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(9) {\n      -ms-grid-row: 2;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(10) {\n      -ms-grid-row: 3;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(11) {\n      -ms-grid-row: 4;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(12) {\n      -ms-grid-row: 5;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(13) {\n      -ms-grid-row: 6;\n      -ms-grid-column: 3;\n    }\n    .top ul > *:nth-child(14) {\n      -ms-grid-row: 7;\n      -ms-grid-column: 3;\n    }\n  }\n",
              ]))
          ),
        ],
        Ht = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = {}),
              (e.menu = ""),
              (e.menuItems = []),
              (e.links = n.defaultLinks),
              (e.templates = {
                web: function () {
                  return Object(qe.e)(
                    ce ||
                      (ce = Je([
                        "<wayback-slider\n        .baseHost=",
                        "\n        .config=",
                        "\n        .archiveItLinks=",
                        "\n        .browserExtensionsLinks=",
                        "\n        .mobileAppsLinks=",
                        "\n      ></wayback-slider>",
                      ])),
                    e.baseHost,
                    e.config,
                    e.menuItems.archiveItLinks,
                    e.menuItems.browserExtensionsLinks,
                    e.menuItems.mobileAppsLinks
                  );
                },
                more: function () {
                  return Object(qe.e)(
                    ue ||
                      (ue = Je([
                        "<more-slider .baseHost=",
                        " .config=",
                        " .menuItems=",
                        "></more-slider>",
                      ])),
                    e.baseHost,
                    e.config,
                    e.menuItems
                  );
                },
              }),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "shouldUpdate",
                  value: function () {
                    return this.menuItems && (this.links = this.menuItems), !0;
                  },
                },
                {
                  key: "analyticsEvent",
                  value: function (e) {
                    return ""
                      .concat(this.config.eventCategory, "|")
                      .concat(pt(e))
                      .concat(pt(this.menu));
                  },
                },
                {
                  key: "iconLinks",
                  get: function () {
                    var e = this;
                    return this.links.iconLinks.map(function (t) {
                      return Object(qe.e)(
                        le ||
                          (le = Je([
                            '\n        <a href="',
                            '" @click=',
                            ' data-event-click-tracking="',
                            '"><img src="',
                            '" />',
                            "</a>\n      ",
                          ])),
                        lt(t.url, e.baseHost),
                        e.trackClick,
                        e.analyticsEvent(t.title),
                        t.icon,
                        t.title
                      );
                    });
                  },
                },
                {
                  key: "renderLinks",
                  value: function (e) {
                    var t = this;
                    return this.links[e].map(function (e) {
                      return Object(qe.e)(
                        fe ||
                          (fe = Je([
                            '\n        <li><a href="',
                            '" @click=',
                            ' data-event-click-tracking="',
                            '">',
                            "</a></li>\n      ",
                          ])),
                        lt(e.url, t.baseHost),
                        t.trackClick,
                        t.analyticsEvent(e.title),
                        e.title
                      );
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.templates[this.menu];
                    return this.menu
                      ? e
                        ? e()
                        : Object(qe.e)(
                            he ||
                              (he = Je([
                                "\n      <h3>",
                                '</h3>\n      <div class="icon-links">\n        ',
                                '\n      </div>\n      <div class="links featured">\n        <h4>Featured</h4>\n        <ul>\n          ',
                                '\n        </ul>\n      </div>\n      <div class="links top">\n        <h4>Top</h4>\n        <ul>\n          ',
                                "\n        </ul>\n      </div>\n    ",
                              ])),
                            this.links.heading,
                            this.iconLinks,
                            this.renderLinks("featuredLinks"),
                            this.renderLinks("links")
                          )
                      : Object(qe.e)(de || (de = Je([""])));
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Ut;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      config: { type: Object },
                      menu: { type: String },
                      menuItems: { type: Array },
                    };
                  },
                },
                {
                  key: "defaultLinks",
                  get: function () {
                    return { iconLinks: [], featuredLinks: [], links: [] };
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("media-subnav", Ht);
      var Ft = Object(qe.c)(
          pe ||
            (pe = Je([
              "\n  .media-slider-container {\n    position: relative;\n  }\n\n  .overflow-clip {\n    display: none;\n    position: absolute;\n    top: 3rem;\n    right: 0;\n    left: 0;\n    height: 0;\n    overflow: hidden;\n    transition: height 0.2s ease;\n  }\n\n  .information-menu {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    padding: 0;\n    height: 368px;\n    overflow-x: hidden;\n    font-size: 1.4rem;\n    background: var(--mediaSliderBg);\n  }\n\n  .open {\n    display: block;\n  }\n\n  .info-box {\n    padding: 1rem;\n  }\n\n  @media (max-width: 889px) {\n    .overflow-clip.open {\n      display: block;\n      height: 367px;\n      left: 4rem;\n      top: 0;\n    }\n  }\n\n  @media (min-width: 890px) {\n    .overflow-clip {\n      display: block;\n    }\n\n    .information-menu {\n      left: 0;\n      z-index: 2;\n      height: auto;\n      min-height: 21rem;\n      background: var(--mediaSliderDesktopBg);\n      transform: translate(0, -100%);\n      transition: transform 0.2s ease;\n    }\n\n    .overflow-clip.open {\n      height: 22rem;\n    }\n\n    .information-menu.open {\n      transform: translate(0, 0);\n    }\n\n    .info-box {\n      max-width: 1000px;\n      padding: 1.5rem 0;\n      margin: 0 auto;\n    }\n  }\n",
            ]))
        ),
        Wt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).config = {}),
              (e.mediaSliderOpen = !1),
              (e.menus = {}),
              (e.selectedMenuOption = "texts"),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "shouldUpdate",
                  value: function () {
                    var e = this.shadowRoot.querySelector(".information-menu");
                    return e && (e.scrollTop = 0), !0;
                  },
                },
                {
                  key: "selectedMenuItems",
                  get: function () {
                    return this.menus[this.selectedMenuOption];
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.mediaSliderOpen ? "open" : "closed";
                    return Object(qe.e)(
                      ve ||
                        (ve = Je([
                          '\n      <div class="media-slider-container">\n        <div class="overflow-clip ',
                          '">\n          <div class="information-menu ',
                          '">\n            <div class="info-box">\n              <media-subnav\n                .baseHost=',
                          "\n                .config=",
                          "\n                .menu=",
                          "\n                .menuItems=",
                          "\n              ></media-subnav>\n            </div>\n          </div>\n        </div>\n      </div>\n    ",
                        ])),
                      e,
                      e,
                      this.baseHost,
                      this.config,
                      this.selectedMenuOption,
                      this.selectedMenuItems
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Ft;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      config: { type: Object },
                      mediaSliderOpen: { type: Boolean },
                      menus: { type: Object },
                      selectedMenuOption: { type: String },
                    };
                  },
                },
              ]
            ),
            n
          );
        })(qe.b);
      customElements.define("media-slider", Wt);
      var Vt = Object(qe.c)(
          me ||
            (me = Je([
              "\n  ul {\n    position: relative;\n    z-index: 3;\n    padding: .8rem 0;\n    margin: 0;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    background: var(--desktopSubnavBg);\n  }\n\n  li {\n    display: inline-block;\n    padding: 0 15px;\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--subnavLinkColor);\n  }\n\n  a:hover,\n  a:active,\n  a:focus {\n    color: var(--linkHoverColor);\n  }\n\n  .donate svg {\n    width: 16px;\n    height: 16px;\n    vertical-align: -4px;\n    fill: #f00;\n  }\n",
            ]))
        ),
        qt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            return Ze(this, n), t.apply(this, arguments);
          }
          return (
            Xe(
              n,
              [
                {
                  key: "listItems",
                  get: function () {
                    var e = this;
                    return this.menuItems
                      ? this.menuItems.map(function (t) {
                          return Object(qe.e)(
                            ye ||
                              (ye = Je([
                                '\n        <li>\n          <a class="',
                                '" href="',
                                '">',
                                "",
                                "</a>\n        </li>\n      ",
                              ])),
                            t.title.toLowerCase(),
                            lt(t.url, e.baseHost),
                            t.title,
                            n.iconFor(t.title)
                          );
                        })
                      : qe.f;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      ge ||
                        (ge = Je([
                          "\n      <ul>\n        ",
                          "\n      </ul>\n    ",
                        ])),
                      this.listItems
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Vt;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      menuItems: { type: Array },
                    };
                  },
                },
                {
                  key: "iconFor",
                  value: function (e) {
                    var t = { Donate: st.donate };
                    return t[e] ? t[e] : Object(qe.e)(be || (be = Je([""])));
                  },
                },
              ]
            ),
            n
          );
        })(at);
      customElements.define("desktop-subnav", qt);
      var $t = Object(qe.c)(
          we ||
            (we = Je([
              "\n  @media (min-width: 890px) {\n    .initial,\n    .closed,\n    .open {\n      right: 34rem;\n    }\n\n    .search-hidden.initial,\n    .search-hidden.closed,\n    .search-hidden.open {\n      right: 18.5rem;\n    }\n  }\n\n  @media (min-width: 990px) {\n    .initial,\n    .closed,\n    .open {\n      right: 40rem;\n    }\n\n    .search-hidden.initial,\n    .search-hidden.closed,\n    .search-hidden.open {\n      right: 24.5rem;\n    }\n  }\n",
            ]))
        ),
        Kt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            return Ze(this, n), t.apply(this, arguments);
          }
          return (
            Xe(n, null, [
              {
                key: "styles",
                get: function () {
                  return [Et.styles, $t];
                },
              },
            ]),
            n
          );
        })(Et);
      customElements.define("signed-out-dropdown", Kt);
      var Gt = Object(qe.c)(
          ke ||
            (ke = Je([
              "\n  :host {\n    --white: #fff;\n    --grey13: #222;\n    --grey20: #333;\n    --grey40: #666;\n    --grey28: #474747;\n    --grey60: #999;\n    --grey66: #aaa;\n    --grey80: #ccc;\n    --errorYellow: #ffcd27;\n\n    --linkColor: #428bca;\n    --linkHoverColor: var(--white);\n    --subnavLinkColor: var(--grey66);\n    --primaryTextColor: var(--white);\n    --inverseTextColor: var(--grey20);\n    --lightTextColor: var(--grey60);\n    --activeColor: var(--white);\n    --activeButtonBg: var(--grey20);\n    --iconFill: var(--grey60);\n\n    --searchActiveBg: var(--grey20);\n    --searchActiveInputBg: var(--white);\n    --searchMenuBg: var(--grey20);\n    --desktopSearchIconFill: var(--grey20);\n\n    --mediaMenuBg: var(--grey13);\n    --mediaLabelDesktopColor: var(--grey60);\n    --activeDesktopMenuIcon: var(--grey28);\n\n    --mediaSliderBg: var(--grey20);\n    --mediaSliderDesktopBg: var(--grey28);\n\n    --primaryNavBg: var(--grey13);\n    --primaryNavBottomBorder: var(--grey20);\n\n    --desktopSubnavBg: var(--grey20);\n\n    --dropdownMenuBg: var(--grey20);\n    --dropdownMenuInfoItem: var(--grey60);\n    --dropdownMenuDivider: var(--grey40);\n\n    --loginTextColor: var(--grey60);\n\n    --themeFontFamily: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    --logoWidthTablet: 263px;\n\n    --savePageSubmitBg: var(--grey13);\n    --savePageSubmitText: var(--white);\n    --savePageInputBorder: var(--grey60);\n    --savePageErrorText: var(--errorYellow);\n\n    color: var(--primaryTextColor);\n    font-size: 2rem;\n    font-family: var(--themeFontFamily);\n  }\n\n  #close-layer {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 0;\n  }\n  #close-layer.visible {\n    display: block;\n  }\n\n  .topnav {\n    position: relative;\n    z-index: 3;\n  }\n\n  @media (max-width: 889px) {\n    desktop-subnav {\n      display: none;\n    }\n  }\n",
            ]))
        ),
        Yt = (function (e) {
          et(n, e);
          var t = nt(n);
          function n() {
            var e;
            return (
              Ze(this, n),
              ((e = t.call(this)).baseHost = "https://archive.org"),
              (e.mediaBaseHost = "https://archive.org"),
              (e.userProfileImagePath = "/services/img/user/profile"),
              (e.userProfileLastModified = ""),
              (e.config = {}),
              (e.hideSearch = !1),
              (e.mediaSliderOpen = !1),
              (e.menus = {}),
              (e.openMenu = ""),
              (e.searchIn = ""),
              (e.selectedMenuOption = ""),
              (e.secondIdentitySlotMode = ""),
              e
            );
          }
          return (
            Xe(
              n,
              [
                {
                  key: "menuToggled",
                  value: function (e) {
                    var t = e.detail,
                      n = this.openMenu;
                    (this.openMenu = n === t.menuName ? "" : t.menuName),
                      "media" !== this.openMenu && this.closeMediaSlider();
                  },
                },
                {
                  key: "openMediaSlider",
                  value: function () {
                    this.mediaSliderOpen = !0;
                  },
                },
                {
                  key: "closeMediaSlider",
                  value: function () {
                    (this.mediaSliderOpen = !1), (this.selectedMenuOption = "");
                  },
                },
                {
                  key: "closeMenus",
                  value: function () {
                    (this.openMenu = ""), this.closeMediaSlider();
                  },
                },
                {
                  key: "searchInChanged",
                  value: function (e) {
                    this.searchIn = e.detail.searchIn;
                  },
                },
                {
                  key: "trackClick",
                  value: function (e) {
                    var t = e.detail;
                    this.dispatchEvent(
                      new CustomEvent("analyticsClick", {
                        bubbles: !0,
                        composed: !0,
                        detail: t,
                      })
                    );
                  },
                },
                {
                  key: "trackSubmit",
                  value: function (e) {
                    var t = e.detail;
                    this.dispatchEvent(
                      new CustomEvent("analyticsSubmit", {
                        bubbles: !0,
                        composed: !0,
                        detail: t,
                      })
                    );
                  },
                },
                {
                  key: "mediaTypeSelected",
                  value: function (e) {
                    var t = e.detail;
                    this.selectedMenuOption !== t.mediatype
                      ? ((this.selectedMenuOption = t.mediatype),
                        this.openMediaSlider())
                      : this.closeMediaSlider();
                  },
                },
                {
                  key: "searchMenuOpened",
                  get: function () {
                    return "search" === this.openMenu;
                  },
                },
                {
                  key: "signedOutOpened",
                  get: function () {
                    return "login" === this.openMenu;
                  },
                },
                {
                  key: "userMenuOpened",
                  get: function () {
                    return "user" === this.openMenu;
                  },
                },
                {
                  key: "searchMenuTabIndex",
                  get: function () {
                    return this.searchMenuOpened ? "" : "-1";
                  },
                },
                {
                  key: "userMenuTabIndex",
                  get: function () {
                    return this.userMenuOpened ? "" : "-1";
                  },
                },
                {
                  key: "signedOutTabIndex",
                  get: function () {
                    return this.signedOutOpened ? "" : "-1";
                  },
                },
                {
                  key: "closeLayerClass",
                  get: function () {
                    return this.openMenu || this.mediaSliderOpen
                      ? "visible"
                      : "";
                  },
                },
                {
                  key: "userMenu",
                  get: function () {
                    return Object(qe.e)(
                      xe ||
                        (xe = Je([
                          "\n      <user-menu\n        .baseHost=",
                          "\n        .config=",
                          "\n        .menuItems=",
                          "\n        ?open=",
                          "\n        .username=",
                          "\n        ?hideSearch=",
                          '\n        tabindex="',
                          '"\n        @menuToggled=',
                          "\n        @trackClick=",
                          "\n      ></user-menu>\n    ",
                        ])),
                      this.baseHost,
                      this.config,
                      this.userMenuItems,
                      "user" === this.openMenu,
                      this.username,
                      this.hideSearch,
                      this.userMenuTabIndex,
                      this.menuToggled,
                      this.trackClick
                    );
                  },
                },
                {
                  key: "signedOutDropdown",
                  get: function () {
                    return Object(qe.e)(
                      Se ||
                        (Se = Je([
                          "\n      <signed-out-dropdown\n        .baseHost=",
                          "\n        .config=",
                          "\n        .open=",
                          "\n        ?hideSearch=",
                          '\n        tabindex="',
                          '"\n        .menuItems=',
                          "\n      ></signed-out-dropdown>\n    ",
                        ])),
                      this.baseHost,
                      this.config,
                      this.signedOutOpened,
                      this.hideSearch,
                      this.signedOutTabIndex,
                      this.signedOutMenuItems
                    );
                  },
                },
                {
                  key: "signedOutMenuItems",
                  get: function () {
                    return this.menus.signedOut;
                  },
                },
                {
                  key: "userMenuItems",
                  get: function () {
                    return this.menus.user;
                  },
                },
                {
                  key: "desktopSubnavMenuItems",
                  get: function () {
                    return this.menus.more;
                  },
                },
                {
                  key: "allowSecondaryIcon",
                  get: function () {
                    return "allow" === this.secondIdentitySlotMode;
                  },
                },
                {
                  key: "secondLogoSlot",
                  get: function () {
                    return this.allowSecondaryIcon
                      ? Object(qe.e)(
                          Oe ||
                            (Oe = Je([
                              '\n          <slot name="opt-sec-logo" slot="opt-sec-logo"></slot>\n          <slot name="opt-sec-logo-mobile" slot="opt-sec-logo-mobile"></slot>\n        ',
                            ]))
                        )
                      : qe.f;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(qe.e)(
                      Ee ||
                        (Ee = Je([
                          '\n      <div class="topnav">\n        <primary-nav\n          .baseHost=',
                          "\n          .mediaBaseHost=",
                          "\n          .config=",
                          "\n          .openMenu=",
                          "\n          .screenName=",
                          "\n          .searchIn=",
                          "\n          .searchQuery=",
                          "\n          .secondIdentitySlotMode=",
                          "\n          .selectedMenuOption=",
                          "\n          .username=",
                          "\n          .userProfileImagePath=",
                          "\n          .userProfileLastModified=",
                          "\n          ?hideSearch=",
                          "\n          @mediaTypeSelected=",
                          "\n          @toggleSearchMenu=",
                          "\n          @trackClick=",
                          "\n          @trackSubmit=",
                          "\n          @menuToggled=",
                          "\n        >\n          ",
                          "\n        </primary-nav>\n        <media-slider\n          .baseHost=",
                          "\n          .config=",
                          "\n          .selectedMenuOption=",
                          "\n          .mediaSliderOpen=",
                          "\n          .menus=",
                          "\n        ></media-slider>\n      </div>\n      ",
                          "\n      <search-menu\n        .baseHost=",
                          "\n        .config=",
                          "\n        .openMenu=",
                          '\n        tabindex="',
                          '"\n        ?hideSearch=',
                          "\n        @searchInChanged=",
                          "\n        @trackClick=",
                          "\n        @trackSubmit=",
                          "\n      ></search-menu>\n      <desktop-subnav\n        .baseHost=",
                          "\n        .menuItems=",
                          '\n      ></desktop-subnav>\n      <div id="close-layer" class="',
                          '" @click=',
                          "></div>\n    ",
                        ])),
                      this.baseHost,
                      this.mediaBaseHost,
                      this.config,
                      this.openMenu,
                      this.screenName,
                      this.searchIn,
                      this.searchQuery,
                      this.secondIdentitySlotMode,
                      this.selectedMenuOption,
                      this.username,
                      this.userProfileImagePath,
                      this.userProfileLastModified,
                      this.hideSearch,
                      this.mediaTypeSelected,
                      this.toggleSearchMenu,
                      this.trackClick,
                      this.trackSubmit,
                      this.menuToggled,
                      this.secondLogoSlot,
                      this.baseHost,
                      this.config,
                      this.selectedMenuOption,
                      this.mediaSliderOpen,
                      this.menus,
                      this.username ? this.userMenu : this.signedOutDropdown,
                      this.baseHost,
                      this.config,
                      this.openMenu,
                      this.searchMenuTabIndex,
                      this.hideSearch,
                      this.searchInChanged,
                      this.trackClick,
                      this.trackSubmit,
                      this.baseHost,
                      this.desktopSubnavMenuItems,
                      this.closeLayerClass,
                      this.closeMenus
                    );
                  },
                },
              ],
              [
                {
                  key: "styles",
                  get: function () {
                    return Gt;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      baseHost: { type: String },
                      mediaBaseHost: { type: String },
                      config: {
                        type: Object,
                        converter: function (e) {
                          return JSON.parse(atob(e));
                        },
                      },
                      hideSearch: { type: Boolean },
                      mediaSliderOpen: { type: Boolean },
                      menus: {
                        type: Object,
                        converter: function (e) {
                          return JSON.parse(atob(e));
                        },
                      },
                      openMenu: { type: String },
                      screenName: { type: String },
                      searchIn: { type: String },
                      searchQuery: {
                        type: String,
                        converter: function (e) {
                          return atob(e);
                        },
                      },
                      selectedMenuOption: { type: String },
                      username: { type: String },
                      userProfileImagePath: { type: String },
                      userProfileLastModified: { type: String },
                      secondIdentitySlotMode: { type: String },
                    };
                  },
                },
              ]
            ),
            n
          );
        })(qe.b);
      customElements.define("ia-topnav", Yt);
      n(124), n(103), n(104), n(163), n(194), n(166), n(167), n(93);
      function Jt(e) {
        return (Jt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Zt(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && on(e, t);
      }
      function Qt(e) {
        var t = rn();
        return function () {
          var n,
            r = an(e);
          if (t) {
            var i = an(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Xt(this, n);
        };
      }
      function Xt(e, t) {
        return !t || ("object" !== Jt(t) && "function" != typeof t) ? en(e) : t;
      }
      function en(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function tn(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (tn = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return nn(e, arguments, an(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            on(r, e)
          );
        })(e);
      }
      function nn(e, t, n) {
        return (nn = rn()
          ? Reflect.construct
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new (Function.bind.apply(e, r))();
              return n && on(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function rn() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function on(e, t) {
        return (on =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function an(e) {
        return (an = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function sn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function cn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function un(e, t, n) {
        return t && cn(e.prototype, t), n && cn(e, n), e;
      }
      function ln(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function fn(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              ln(o, r, i, a, s, "next", e);
            }
            function s(e) {
              ln(o, r, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function dn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return mn(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          vn(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function hn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          vn(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function pn(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = vn(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function vn(e, t) {
        if (e) {
          if ("string" == typeof e) return mn(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? mn(e, t)
              : void 0
          );
        }
      }
      function mn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var yn = "\\.\\.\\/",
        gn = /:([^\\/]+)/g,
        bn = "router-slot",
        wn = window;
      function kn(e, t) {
        wn.dispatchEvent(new CustomEvent(e, { detail: t }));
      }
      function xn(e, t, n, r) {
        var i = Array.isArray(t) ? t : [t];
        return (
          i.forEach(function (t) {
            return e.addEventListener(t, n, r);
          }),
          function () {
            return i.forEach(function (t) {
              return e.removeEventListener(t, n, r);
            });
          }
        );
      }
      function Sn(e) {
        e.forEach(function (e) {
          return e();
        });
      }
      var On = [
        ["pushState", ["pushstate", "changestate"]],
        ["replaceState", ["replacestate", "changestate"]],
        ["forward", ["pushstate", "changestate"]],
        ["go", ["pushstate", "changestate"]],
        ["back", ["popstate"]],
      ];
      function En(e, t, n) {
        var r = e[t];
        !(function (e, t, n) {
          null == e.native && (e.native = {});
          e.native["".concat(t)] = n.bind(e);
        })(e, t, r),
          (e[t] = function () {
            if (!An()) {
              for (
                var t = arguments.length, i = new Array(t), o = 0;
                o < t;
                o++
              )
                i[o] = arguments[o];
              r.apply(e, i), n(i);
            }
          });
      }
      function An() {
        return !wn.dispatchEvent(
          new CustomEvent("willchangestate", { cancelable: !0 })
        );
      }
      var Cn = document.createElement("a");
      function Pn() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Mn(window.location.pathname, e);
      }
      function _n() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Mn(Tn(Pn(), jn()), e);
      }
      function jn() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return In(".", e);
      }
      function In(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (Cn.href = e), Mn(Cn.pathname, t);
      }
      function Tn(e, t) {
        return e.replace(new RegExp("^".concat(t)), "");
      }
      function Rn() {
        return window.location.search;
      }
      function Ln(e) {
        return Mn(e, { start: !1, end: !1 });
      }
      function Mn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.start,
          r = void 0 === n || n,
          i = t.end,
          o = void 0 === i || i;
        return (
          (e =
            r && !e.startsWith("/")
              ? "/".concat(e)
              : !r && e.startsWith("/")
              ? e.slice(1)
              : e),
          o && !e.endsWith("/")
            ? "".concat(e, "/")
            : !o && e.endsWith("/")
            ? e.slice(0, e.length - 1)
            : e
        );
      }
      function Nn(e, t) {
        var n = [],
          r = Ln(
            e.path.replace(gn, function (e) {
              return (
                n.push(arguments.length <= 1 ? void 0 : arguments[1]), "([^/]+)"
              );
            })
          ),
          i =
            "**" === e.path || (0 === e.path.length && "full" != e.pathMatch)
              ? /^/
              : (function () {
                  switch (e.pathMatch || "prefix") {
                    case "full":
                      return new RegExp("^/?".concat(r, "/?$"));
                    case "suffix":
                      return new RegExp("^.*?".concat(r, "/?$"));
                    case "fuzzy":
                      return new RegExp("^.*?".concat(r, ".*?$"));
                    case "prefix":
                    default:
                      return new RegExp("^[/]?".concat(r, "(?:/|$)"));
                  }
                })(),
          o = t.match(i);
        if (null != o) {
          var a = n.reduce(function (e, t, n) {
              return (e[t] = o[n + 1]), e;
            }, {}),
            s = Ln(t.slice(0, o[0].length)),
            c = Ln(t.slice(o[0].length, t.length));
          return {
            route: e,
            match: o,
            params: a,
            fragments: { consumed: s, rest: c },
          };
        }
        return null;
      }
      function Dn(e, t) {
        return zn.apply(this, arguments);
      }
      function zn() {
        return (zn = fn(
          regeneratorRuntime.mark(function e(t, n) {
            var r, i, o;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!((r = t.component) instanceof Function)) {
                        e.next = 10;
                        break;
                      }
                      (e.prev = 2), (r = r()), (e.next = 10);
                      break;
                    case 6:
                      if (
                        ((e.prev = 6),
                        (e.t0 = e.catch(2)),
                        e.t0 instanceof TypeError)
                      ) {
                        e.next = 10;
                        break;
                      }
                      throw e.t0;
                    case 10:
                      return (e.next = 12), Promise.resolve(r);
                    case 12:
                      return (
                        (i = e.sent),
                        (o =
                          i instanceof HTMLElement
                            ? r
                            : new (i.default ? i.default : i)()),
                        null != t.setup && t.setup(o, n),
                        e.abrupt("return", o)
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 6]]
            );
          })
        )).apply(this, arguments);
      }
      function Bn(e) {
        return "redirectTo" in e;
      }
      function Un(e) {
        return "resolve" in e;
      }
      function Hn(e) {
        for (var t = [e]; null != e.parent; ) (e = e.parent), t.push(e);
        return {
          tree: t.reduce(function (e, t) {
            return { slot: t, child: e };
          }, void 0),
          depth: t.length,
        };
      }
      function Fn(e, t) {
        for (var n = e, r = []; null != n && null != n.slot.match && t > 0; )
          r.push(n.slot.match.fragments.consumed), (n = n.child), t--;
        return r;
      }
      function Wn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = Hn(e),
          r = n.tree,
          i = n.depth;
        if (!t.startsWith("/")) {
          var o = 0;
          t.startsWith("./") && (t = t.slice(2));
          var a = t.match(new RegExp(yn, "g"));
          if (null != a) {
            o = a.length;
            var s = a.reduce(function (e, t) {
              return e + t.length;
            }, 0);
            t = t.slice(s);
          }
          var c = Fn(r, i - 1 - o).filter(function (e) {
            return e.length > 0;
          });
          t = ""
            .concat(c.join("/"))
            .concat(c.length > 0 ? "/" : "")
            .concat(t);
        }
        return In(t, { end: !1 });
      }
      function Vn(e, t) {
        history.replaceState(
          history.state,
          "",
          "".concat(Wn(e, t.redirectTo)).concat(t.preserveQuery ? Rn() : "")
        );
      }
      function qn(e, t) {
        if (null == e) return !0;
        var n = e.route,
          r = e.fragments,
          i = t.route,
          o = t.fragments,
          a = n == i;
        return !(r.consumed == o.consumed) || !a;
      }
      function $n(e) {
        return Kn(e, bn);
      }
      function Kn(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          i = e.getRootNode();
        if (r >= n) {
          var o = i.querySelector(t);
          if (null != o && o != e) return o;
        }
        var a = i.getRootNode();
        return null == a.host ? null : Kn(a.host, t, n, ++r);
      }
      var Gn = (function () {
          function e(t) {
            sn(this, e), (this.routerSlot = t);
          }
          return (
            un(e, [
              {
                key: "setup",
                value: function () {
                  (this.boundEventHandler = this.handleEvent.bind(this)),
                    window.addEventListener("click", this.boundEventHandler);
                },
              },
              {
                key: "teardown",
                value: function () {
                  window.removeEventListener("click", this.boundEventHandler);
                },
              },
              {
                key: "handleEvent",
                value: function (e) {
                  var t, n;
                  if (
                    null === (t = this.routerSlot) || void 0 === t
                      ? void 0
                      : t.handleAnchorLinks
                  ) {
                    var r =
                      "composedPath" in e
                        ? e.composedPath().find(function (e) {
                            return e instanceof HTMLAnchorElement;
                          })
                        : e.target;
                    if (null != r && r instanceof HTMLAnchorElement) {
                      var i = r.href.startsWith(location.origin),
                        o = "" !== r.target && "_self" !== r.target,
                        a = "disabled" === r.dataset.routerSlot,
                        s =
                          null === (n = this.routerSlot) || void 0 === n
                            ? void 0
                            : n.getRouteMatch(r.pathname),
                        c = e.metaKey;
                      if (i && !o && !a && s && !c && !e.metaKey) {
                        var u = "".concat(r.pathname).concat(r.search);
                        e.preventDefault(), history.pushState(null, "", u);
                      }
                    }
                  }
                },
              },
            ]),
            e
          );
        })(),
        Yn = document.createElement("template");
      (Yn.innerHTML = "<slot></slot>"),
        (function () {
          var e,
            t = pn(On);
          try {
            for (t.s(); !(e = t.n()).done; ) {
              var n,
                r = hn(e.value, 2),
                i = r[0],
                o = pn(r[1]);
              try {
                var a = function () {
                  var e = n.value;
                  En(history, i, function () {
                    return kn(e);
                  });
                };
                for (o.s(); !(n = o.n()).done; ) a();
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
            }
          } catch (e) {
            t.e(e);
          } finally {
            t.f();
          }
          window.addEventListener("popstate", function (e) {
            if (An()) return e.preventDefault(), void e.stopPropagation();
            setTimeout(function () {
              return kn("changestate");
            }, 0);
          });
        })();
      var Jn = (function (e) {
        Zt(i, e);
        var t,
          n,
          r = Qt(i);
        function i() {
          var e;
          return (
            sn(this, i),
            ((e = r.call(this)).listeners = []),
            (e._routes = []),
            (e._handleAnchors = !0),
            (e._routeMatch = null),
            (e.render = e.render.bind(en(e))),
            e
              .attachShadow({ mode: "open" })
              .appendChild(Yn.content.cloneNode(!0)),
            e
          );
        }
        return (
          un(i, [
            {
              key: "routes",
              get: function () {
                return this._routes;
              },
              set: function (e) {
                this.clear(), this.add(e);
              },
            },
            {
              key: "handleAnchorLinks",
              get: function () {
                return this._handleAnchors;
              },
              set: function (e) {
                (this._handleAnchors = e),
                  e ? this.setupAnchorListener() : this.detachAnchorListener();
              },
            },
            {
              key: "parent",
              get: function () {
                return this._parent;
              },
              set: function (e) {
                this.detachListeners(),
                  (this._parent = e),
                  this.attachListeners();
              },
            },
            {
              key: "isRoot",
              get: function () {
                return null == this.parent;
              },
            },
            {
              key: "match",
              get: function () {
                return this._routeMatch;
              },
            },
            {
              key: "route",
              get: function () {
                return null != this.match ? this.match.route : null;
              },
            },
            {
              key: "fragments",
              get: function () {
                return null != this.match ? this.match.fragments : null;
              },
            },
            {
              key: "params",
              get: function () {
                return null != this.match ? this.match.params : null;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                (this.parent = this.queryParentRouterSlot()),
                  this.setupAnchorListener();
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                this.detachListeners(), this.detachAnchorListener();
              },
            },
            {
              key: "queryParentRouterSlot",
              value: function () {
                return $n(this);
              },
            },
            {
              key: "constructAbsolutePath",
              value: function (e) {
                return Wn(this, e);
              },
            },
            {
              key: "add",
              value: function (e) {
                var t,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.isRoot && this.isConnected;
                (t = this._routes).push.apply(t, dn(e)),
                  n && this.render().then();
              },
            },
            {
              key: "clear",
              value: function () {
                this._routes.length = 0;
              },
            },
            {
              key: "getRouteMatch",
              value: function (e) {
                return (function (e, t) {
                  var n,
                    r = pn(e);
                  try {
                    for (r.s(); !(n = r.n()).done; ) {
                      var i = Nn(n.value, t);
                      if (null != i) return i;
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                  return null;
                })(this._routes, e);
              },
            },
            {
              key: "render",
              value:
                ((n = fn(
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.isConnected) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (t =
                                  null != this.parent &&
                                  null != this.parent.fragments
                                    ? this.parent.fragments.rest
                                    : _n()),
                                (e.next = 5),
                                this.renderPath(t)
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "setupAnchorListener",
              value: function () {
                var e;
                this.isRoot &&
                  (this.detachAnchorListener(),
                  (this.anchorHandler = new Gn(this)),
                  null === (e = this.anchorHandler) ||
                    void 0 === e ||
                    e.setup());
              },
            },
            {
              key: "detachAnchorListener",
              value: function () {
                var e;
                null === (e = this.anchorHandler) ||
                  void 0 === e ||
                  e.teardown();
              },
            },
            {
              key: "attachListeners",
              value: function () {
                this.listeners.push(
                  null != this.parent
                    ? xn(this.parent, "changestate", this.render)
                    : xn(wn, "changestate", this.render)
                );
              },
            },
            {
              key: "clearChildren",
              value: function () {
                for (; null != this.firstChild; )
                  this.firstChild.parentNode.removeChild(this.firstChild);
              },
            },
            {
              key: "detachListeners",
              value: function () {
                Sn(this.listeners);
              },
            },
            {
              key: "renderPath",
              value:
                ((t = fn(
                  regeneratorRuntime.mark(function e(t) {
                    var n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      c,
                      u,
                      l,
                      f,
                      d,
                      h,
                      p = this;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (null != (n = this.getRouteMatch(t))) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (this._routeMatch = null),
                                e.abrupt("return", !1)
                              );
                            case 4:
                              if (
                                ((r = n.route),
                                (i = { match: n, slot: this }),
                                (e.prev = 6),
                                !(o = qn(this.match, n)))
                              ) {
                                e.next = 58;
                                break;
                              }
                              if (
                                ((a = !1),
                                (s = xn(
                                  wn,
                                  "changestate",
                                  function () {
                                    return (a = !0);
                                  },
                                  { once: !0 }
                                )),
                                (c = function () {
                                  s();
                                }),
                                (u = function () {
                                  return (
                                    c(),
                                    kn("navigationcancel", i),
                                    kn("navigationend", i),
                                    !1
                                  );
                                }),
                                kn("navigationstart", i),
                                null == r.guards)
                              ) {
                                e.next = 35;
                                break;
                              }
                              (l = pn(r.guards)), (e.prev = 17), l.s();
                            case 19:
                              if ((f = l.n()).done) {
                                e.next = 27;
                                break;
                              }
                              return (d = f.value), (e.next = 23), d(i);
                            case 23:
                              if (e.sent) {
                                e.next = 25;
                                break;
                              }
                              return e.abrupt("return", u());
                            case 25:
                              e.next = 19;
                              break;
                            case 27:
                              e.next = 32;
                              break;
                            case 29:
                              (e.prev = 29), (e.t0 = e.catch(17)), l.e(e.t0);
                            case 32:
                              return (e.prev = 32), l.f(), e.finish(32);
                            case 35:
                              if (!Bn(r)) {
                                e.next = 41;
                                break;
                              }
                              return c(), Vn(this, r), e.abrupt("return", !1);
                            case 41:
                              if (!Un(r)) {
                                e.next = 49;
                                break;
                              }
                              return (e.next = 44), r.resolve(i);
                            case 44:
                              if (((e.t1 = e.sent), !1 !== e.t1)) {
                                e.next = 47;
                                break;
                              }
                              return e.abrupt("return", u());
                            case 47:
                              e.next = 57;
                              break;
                            case 49:
                              return (e.next = 51), Dn(r, i);
                            case 51:
                              if (((h = e.sent), !a)) {
                                e.next = 54;
                                break;
                              }
                              return e.abrupt("return", u());
                            case 54:
                              this.clearChildren(),
                                (this._routeMatch = n),
                                this.appendChild(h);
                            case 57:
                              c();
                            case 58:
                              return (
                                (this._routeMatch = n),
                                requestAnimationFrame(function () {
                                  var e;
                                  (e = i),
                                    p.dispatchEvent(
                                      new CustomEvent("changestate", {
                                        detail: e,
                                      })
                                    );
                                }),
                                o &&
                                  (kn("navigationsuccess", i),
                                  kn("navigationend", i)),
                                e.abrupt("return", o)
                              );
                            case 64:
                              throw (
                                ((e.prev = 64),
                                (e.t2 = e.catch(6)),
                                kn("navigationerror", i),
                                kn("navigationend", i),
                                e.t2)
                              );
                            case 69:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [
                        [6, 64],
                        [17, 29, 32, 35],
                      ]
                    );
                  })
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            },
          ]),
          i
        );
      })(tn(HTMLElement));
      window.customElements.define(bn, Jn);
      var Zn = document.createElement("template");
      Zn.innerHTML = "<slot></slot>";
      var Qn,
        Xn,
        er,
        tr,
        nr = (function (e) {
          Zt(n, e);
          var t = Qt(n);
          function n() {
            var e;
            return (
              sn(this, n),
              ((e = t.call(this)).listeners = []),
              (e._context = null),
              (e.navigate = e.navigate.bind(en(e))),
              (e.updateActive = e.updateActive.bind(en(e))),
              e
                .attachShadow({ mode: "open", delegatesFocus: e.delegateFocus })
                .appendChild(Zn.content.cloneNode(!0)),
              e
            );
          }
          return (
            un(
              n,
              [
                {
                  key: "path",
                  get: function () {
                    return this.getAttribute("path") || "/";
                  },
                  set: function (e) {
                    this.setAttribute("path", e);
                  },
                },
                {
                  key: "target",
                  get: function () {
                    return this.getAttribute("target");
                  },
                },
                {
                  key: "disabled",
                  get: function () {
                    return this.hasAttribute("disabled");
                  },
                  set: function (e) {
                    e
                      ? this.setAttribute("disabled", "")
                      : this.removeAttribute("disabled");
                  },
                },
                {
                  key: "active",
                  get: function () {
                    return this.hasAttribute("active");
                  },
                  set: function (e) {
                    e
                      ? this.setAttribute("active", "")
                      : this.removeAttribute("active");
                  },
                },
                {
                  key: "delegateFocus",
                  get: function () {
                    return this.hasAttribute("delegateFocus");
                  },
                  set: function (e) {
                    e
                      ? this.setAttribute("delegateFocus", "")
                      : this.removeAttribute("delegateFocus");
                  },
                },
                {
                  key: "preserveQuery",
                  get: function () {
                    return this.hasAttribute("preservequery");
                  },
                  set: function (e) {
                    e
                      ? this.setAttribute("preservequery", "")
                      : this.removeAttribute("preservequery");
                  },
                },
                {
                  key: "context",
                  get: function () {
                    return this._context;
                  },
                  set: function (e) {
                    this._context = e;
                  },
                },
                {
                  key: "absolutePath",
                  get: function () {
                    return this.constructAbsolutePath(this.path);
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    var e = this;
                    this.listeners.push(
                      xn(this, "click", function (t) {
                        return e.navigate(e.path, t);
                      }),
                      xn(this, "keydown", function (t) {
                        return "Enter" === t.code || "Space" === t.code
                          ? e.navigate(e.path, t)
                          : void 0;
                      }),
                      xn(wn, "navigationend", this.updateActive),
                      xn(wn, "changestate", this.updateActive)
                    ),
                      (this.context = $n(this)),
                      this.setAttribute("role", "link"),
                      this.hasAttribute("tabindex") || this.updateTabIndex();
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    Sn(this.listeners);
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function (e, t, n) {
                    "disabled" === e && this.updateTabIndex();
                  },
                },
                {
                  key: "updateTabIndex",
                  value: function () {
                    this.tabIndex = this.disabled ? -1 : 0;
                  },
                },
                {
                  key: "constructAbsolutePath",
                  value: function (e) {
                    return null != this.context
                      ? this.context.constructAbsolutePath(e)
                      : Mn(e, { end: !1 });
                  },
                },
                {
                  key: "updateActive",
                  value: function () {
                    var e = (function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : Pn();
                      return new RegExp("^".concat(Ln(e), "(/|$)"), "gm").test(
                        Ln(t)
                      );
                    })(this.absolutePath);
                    e !== this.active && (this.active = e);
                  },
                },
                {
                  key: "navigate",
                  value: function (e, t) {
                    if (null != t && this.disabled)
                      return t.preventDefault(), void t.stopPropagation();
                    var n = this.preserveQuery ? Rn() : "",
                      r = "".concat(this.absolutePath).concat(n);
                    this.target
                      ? window.open(r, this.target)
                      : t instanceof MouseEvent && t.metaKey
                      ? window.open(r, "_blank")
                      : history.pushState(null, "", r);
                  },
                },
              ],
              [
                {
                  key: "observedAttributes",
                  get: function () {
                    return ["disabled"];
                  },
                },
              ]
            ),
            n
          );
        })(tn(HTMLElement));
      function rr(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function ir(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function or(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ar(e, t) {
        return (ar =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function sr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = lr(e);
          if (t) {
            var i = lr(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return cr(this, n);
        };
      }
      function cr(e, t) {
        return !t || ("object" !== fr(t) && "function" != typeof t) ? ur(e) : t;
      }
      function ur(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function lr(e) {
        return (lr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function fr(e) {
        return (fr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function dr() {
        dr = function () {
          return e;
        };
        var e = {
          elementsDefinitionOrder: [["method"], ["field"]],
          initializeInstanceElements: function (e, t) {
            ["method", "field"].forEach(function (n) {
              t.forEach(function (t) {
                t.kind === n &&
                  "own" === t.placement &&
                  this.defineClassElement(e, t);
              }, this);
            }, this);
          },
          initializeClassElements: function (e, t) {
            var n = e.prototype;
            ["method", "field"].forEach(function (r) {
              t.forEach(function (t) {
                var i = t.placement;
                if (t.kind === r && ("static" === i || "prototype" === i)) {
                  var o = "static" === i ? e : n;
                  this.defineClassElement(o, t);
                }
              }, this);
            }, this);
          },
          defineClassElement: function (e, t) {
            var n = t.descriptor;
            if ("field" === t.kind) {
              var r = t.initializer;
              n = {
                enumerable: n.enumerable,
                writable: n.writable,
                configurable: n.configurable,
                value: void 0 === r ? void 0 : r.call(e),
              };
            }
            Object.defineProperty(e, t.key, n);
          },
          decorateClass: function (e, t) {
            var n = [],
              r = [],
              i = { static: [], prototype: [], own: [] };
            if (
              (e.forEach(function (e) {
                this.addElementPlacement(e, i);
              }, this),
              e.forEach(function (e) {
                if (!vr(e)) return n.push(e);
                var t = this.decorateElement(e, i);
                n.push(t.element),
                  n.push.apply(n, t.extras),
                  r.push.apply(r, t.finishers);
              }, this),
              !t)
            )
              return { elements: n, finishers: r };
            var o = this.decorateConstructor(n, t);
            return r.push.apply(r, o.finishers), (o.finishers = r), o;
          },
          addElementPlacement: function (e, t, n) {
            var r = t[e.placement];
            if (!n && -1 !== r.indexOf(e.key))
              throw new TypeError("Duplicated element (" + e.key + ")");
            r.push(e.key);
          },
          decorateElement: function (e, t) {
            for (
              var n = [], r = [], i = e.decorators, o = i.length - 1;
              o >= 0;
              o--
            ) {
              var a = t[e.placement];
              a.splice(a.indexOf(e.key), 1);
              var s = this.fromElementDescriptor(e),
                c = this.toElementFinisherExtras((0, i[o])(s) || s);
              (e = c.element),
                this.addElementPlacement(e, t),
                c.finisher && r.push(c.finisher);
              var u = c.extras;
              if (u) {
                for (var l = 0; l < u.length; l++)
                  this.addElementPlacement(u[l], t);
                n.push.apply(n, u);
              }
            }
            return { element: e, finishers: r, extras: n };
          },
          decorateConstructor: function (e, t) {
            for (var n = [], r = t.length - 1; r >= 0; r--) {
              var i = this.fromClassDescriptor(e),
                o = this.toClassDescriptor((0, t[r])(i) || i);
              if (
                (void 0 !== o.finisher && n.push(o.finisher),
                void 0 !== o.elements)
              ) {
                e = o.elements;
                for (var a = 0; a < e.length - 1; a++)
                  for (var s = a + 1; s < e.length; s++)
                    if (
                      e[a].key === e[s].key &&
                      e[a].placement === e[s].placement
                    )
                      throw new TypeError(
                        "Duplicated element (" + e[a].key + ")"
                      );
              }
            }
            return { elements: e, finishers: n };
          },
          fromElementDescriptor: function (e) {
            var t = {
              kind: e.kind,
              key: e.key,
              placement: e.placement,
              descriptor: e.descriptor,
            };
            return (
              Object.defineProperty(t, Symbol.toStringTag, {
                value: "Descriptor",
                configurable: !0,
              }),
              "field" === e.kind && (t.initializer = e.initializer),
              t
            );
          },
          toElementDescriptors: function (e) {
            var t;
            if (void 0 !== e)
              return ((t = e),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  )
                    return Array.from(e);
                })(t) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return br(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? br(e, t)
                        : void 0
                    );
                  }
                })(t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()).map(function (e) {
                var t = this.toElementDescriptor(e);
                return (
                  this.disallowProperty(e, "finisher", "An element descriptor"),
                  this.disallowProperty(e, "extras", "An element descriptor"),
                  t
                );
              }, this);
          },
          toElementDescriptor: function (e) {
            var t = String(e.kind);
            if ("method" !== t && "field" !== t)
              throw new TypeError(
                'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                  t +
                  '"'
              );
            var n = gr(e.key),
              r = String(e.placement);
            if ("static" !== r && "prototype" !== r && "own" !== r)
              throw new TypeError(
                'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                  r +
                  '"'
              );
            var i = e.descriptor;
            this.disallowProperty(e, "elements", "An element descriptor");
            var o = {
              kind: t,
              key: n,
              placement: r,
              descriptor: Object.assign({}, i),
            };
            return (
              "field" !== t
                ? this.disallowProperty(e, "initializer", "A method descriptor")
                : (this.disallowProperty(
                    i,
                    "get",
                    "The property descriptor of a field descriptor"
                  ),
                  this.disallowProperty(
                    i,
                    "set",
                    "The property descriptor of a field descriptor"
                  ),
                  this.disallowProperty(
                    i,
                    "value",
                    "The property descriptor of a field descriptor"
                  ),
                  (o.initializer = e.initializer)),
              o
            );
          },
          toElementFinisherExtras: function (e) {
            return {
              element: this.toElementDescriptor(e),
              finisher: yr(e, "finisher"),
              extras: this.toElementDescriptors(e.extras),
            };
          },
          fromClassDescriptor: function (e) {
            var t = {
              kind: "class",
              elements: e.map(this.fromElementDescriptor, this),
            };
            return (
              Object.defineProperty(t, Symbol.toStringTag, {
                value: "Descriptor",
                configurable: !0,
              }),
              t
            );
          },
          toClassDescriptor: function (e) {
            var t = String(e.kind);
            if ("class" !== t)
              throw new TypeError(
                'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                  t +
                  '"'
              );
            this.disallowProperty(e, "key", "A class descriptor"),
              this.disallowProperty(e, "placement", "A class descriptor"),
              this.disallowProperty(e, "descriptor", "A class descriptor"),
              this.disallowProperty(e, "initializer", "A class descriptor"),
              this.disallowProperty(e, "extras", "A class descriptor");
            var n = yr(e, "finisher");
            return {
              elements: this.toElementDescriptors(e.elements),
              finisher: n,
            };
          },
          runClassFinishers: function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = (0, t[n])(e);
              if (void 0 !== r) {
                if ("function" != typeof r)
                  throw new TypeError("Finishers must return a constructor.");
                e = r;
              }
            }
            return e;
          },
          disallowProperty: function (e, t, n) {
            if (void 0 !== e[t])
              throw new TypeError(n + " can't have a ." + t + " property.");
          },
        };
        return e;
      }
      function hr(e) {
        var t,
          n = gr(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (t = { configurable: !0, writable: !0, enumerable: !0 });
        var r = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function pr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function vr(e) {
        return e.decorators && e.decorators.length;
      }
      function mr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function yr(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function gr(e) {
        var t = (function (e, t) {
          if ("object" !== fr(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== fr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === fr(t) ? t : String(t);
      }
      function br(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      window.customElements.define("router-link", nr);
      !(function (e, t, n, r) {
        var i = dr();
        if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, n),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  n = function (e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var i,
                  o = e[r];
                if ("method" === o.kind && (i = t.find(n)))
                  if (mr(o.descriptor) || mr(i.descriptor)) {
                    if (vr(o) || vr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (vr(o)) {
                      if (vr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    pr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(hr)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(Ve.a)("horizontal-activity-indicator")],
        function (e, t) {
          var n, r;
          return {
            F: (function (t) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && ar(e, t);
              })(r, t);
              var n = sr(r);
              function r() {
                var t;
                or(this, r);
                for (
                  var i = arguments.length, o = new Array(i), a = 0;
                  a < i;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(ur(t)), t;
              }
              return r;
            })(t),
            d: [
              {
                kind: "field",
                decorators: [Object(Ve.b)({ type: Object })],
                key: "resizeObserver",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(Ve.b)({ type: Boolean })],
                key: "adjustSpeedForWidth",
                value: function () {
                  return !0;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.c)(".track")],
                key: "track",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(We.c)(
                    Qn ||
                      (Qn = ir([
                        '\n      <div class="track">\n        <div class="bar"></div>\n      </div>\n    ',
                      ]))
                  );
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  var t = e.get("resizeObserver");
                  t && t.removeObserver({ handler: this, target: this.track }),
                    (e.has("adjustSpeedForWidth") || e.has("resizeObserver")) &&
                      (this.adjustSpeedForWidth
                        ? this.setupResizeObserver()
                        : this.disconnectResizeObserver());
                },
              },
              {
                kind: "method",
                key: "handleResize",
                value: function (e) {
                  var t = e.contentRect.width;
                  switch (e.target) {
                    case this.track:
                      this.updateLoaderSpeed(t);
                  }
                },
              },
              {
                kind: "method",
                key: "disconnectedCallback",
                value: function () {
                  this.disconnectResizeObserver();
                },
              },
              {
                kind: "method",
                key: "updateLoaderSpeed",
                value: function (e) {
                  var t,
                    n = Math.max(e / 200, 3);
                  (null == (t = this.shadowRoot)
                    ? void 0
                    : t.host
                  ).style.setProperty(
                    "--horizontalActivityIndicatorDuration",
                    n + "s"
                  );
                },
              },
              {
                kind: "method",
                key: "disconnectResizeObserver",
                value: function () {
                  var e;
                  null == (e = this.resizeObserver) ||
                    e.removeObserver({ handler: this, target: this.track });
                },
              },
              {
                kind: "method",
                key: "setupResizeObserver",
                value:
                  ((n = regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              null == (t = this.resizeObserver) ||
                                t.addObserver({
                                  handler: this,
                                  target: this.track,
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })),
                  (r = function () {
                    var e = this,
                      t = arguments;
                    return new Promise(function (r, i) {
                      var o = n.apply(e, t);
                      function a(e) {
                        rr(o, r, i, a, s, "next", e);
                      }
                      function s(e) {
                        rr(o, r, i, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  }),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  var e = Object(We.b)(
                      Xn ||
                        (Xn = ir([
                          "var(--horizontalActivityIndicatorColor, dodgerblue)",
                        ]))
                    ),
                    t = Object(We.b)(
                      er ||
                        (er = ir([
                          "var(--horizontalActivityIndicatorDuration, 7.5s)",
                        ]))
                    );
                  return Object(We.b)(
                    tr ||
                      (tr = ir([
                        "\n      :host {\n        display: block;\n      }\n\n      @keyframes loader-animation {\n        0% {\n          left: -100%;\n          width: 100%;\n        }\n        49% {\n          left: 100%;\n          width: 10%;\n        }\n        50% {\n          left: 100%;\n          width: 100%;\n        }\n        100% {\n          left: -10%;\n          width: 10%;\n        }\n      }\n\n      .track {\n        height: 100%;\n        width: 100%;\n        overflow: hidden;\n      }\n\n      .track .bar {\n        position: relative;\n        height: 100%;\n        background-color: ",
                        ";\n        animation-name: loader-animation;\n        animation-duration: ",
                        ";\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-in-out;\n      }\n    ",
                      ])),
                    e,
                    t
                  );
                },
              },
            ],
          };
        },
        We.a
      );
      var wr,
        kr,
        xr = n(123);
      ((kr = wr || (wr = {})).prod = "prod"), (kr.dev = "dev");
      var Sr = n(135),
        Or = {
          uploadURL: "/create",
          eventCategory: "TopNav",
          waybackPagesArchived: "514 billion",
          hiddenSearchOptions: [],
        },
        Er = function (e) {
          return {
            audio: {
              heading: "Internet Archive Audio",
              iconLinks: [
                {
                  icon: "/services/img/etree",
                  title: "Live Music Archive",
                  url: "/details/etree",
                },
                {
                  icon: "/services/img/librivoxaudio",
                  title: "Librivox Free Audio",
                  url: "/details/librivoxaudio",
                },
              ],
              featuredLinks: [
                { title: "All audio", url: "/details/audio" },
                {
                  title: "This Just In",
                  url: "/search.php?query=mediatype:audio&sort=-publicdate",
                },
                { title: "Grateful Dead", url: "/details/GratefulDead" },
                { title: "Netlabels", url: "/details/netlabels" },
                { title: "Old Time Radio", url: "/details/oldtimeradio" },
                {
                  title: "78 RPMs and Cylinder Recordings",
                  url: "/details/78rpm",
                },
              ],
              links: [
                {
                  title: "Audio Books & Poetry",
                  url: "/details/audio_bookspoetry",
                },
                { title: "Community Audio", url: "/details/opensource_audio" },
                {
                  title: "Computers, Technology and Science",
                  url: "/details/audio_tech",
                },
                { title: "Music, Arts & Culture", url: "/details/audio_music" },
                { title: "News & Public Affairs", url: "/details/audio_news" },
                { title: "Non-English Audio", url: "/details/audio_foreign" },
                {
                  title: "Spirituality & Religion",
                  url: "/details/audio_religion",
                },
                { title: "Podcasts", url: "/details/podcasts" },
              ],
            },
            images: {
              heading: "Images",
              iconLinks: [
                {
                  icon: "/services/img/metropolitanmuseumofart-gallery",
                  title: "Metropolitan Museum",
                  url: "/details/metropolitanmuseumofart-gallery",
                },
                {
                  icon: "/services/img/brooklynmuseum",
                  title: "Brooklyn Museum",
                  url: "/details/brooklynmuseum",
                },
              ],
              featuredLinks: [
                { title: "All images", url: "/details/image" },
                {
                  title: "This Just In",
                  url: "/search.php?query=mediatype:image&sort=-publicdate",
                },
                { title: "Flickr Commons", url: "/details/flickrcommons" },
                {
                  title: "Occupy Wall Street Flickr",
                  url: "/details/flickr-ows",
                },
                { title: "Cover Art", url: "/details/coverartarchive" },
                { title: "USGS Maps", url: "/details/maps_usgs" },
              ],
              links: [
                { title: "NASA Images", url: "/details/nasa" },
                {
                  title: "Solar System Collection",
                  url: "/details/solarsystemcollection",
                },
                {
                  title: "Ames Research Center",
                  url: "/details/amesresearchcenterimagelibrary",
                },
              ],
            },
            more: [
              { title: "About", url: "/about/" },
              { title: "Blog", url: "https://blog.archive.org/" },
              { title: "Projects", url: "/projects/" },
              { title: "Help", url: "/about/faqs.php" },
              {
                title: "Donate",
                url: "/donate?origin=iawww-TopNavDonateButton",
              },
              { title: "Contact", url: "/about/contact.php" },
              { title: "Jobs", url: "/about/jobs.php" },
              { title: "Volunteer", url: "/about/volunteerpositions.php" },
              { title: "People", url: "/about/bios.php" },
            ],
            software: {
              heading: "Software",
              iconLinks: [
                {
                  icon: "/services/img/internetarcade",
                  title: "Internet Arcade",
                  url: "/details/internetarcade",
                },
                {
                  icon: "/services/img/consolelivingroom",
                  title: "Console Living Room",
                  url: "/details/consolelivingroom",
                },
              ],
              featuredLinks: [
                { title: "All software", url: "/details/software" },
                {
                  title: "This Just In",
                  url: "/search.php?query=mediatype:software&sort=-publicdate",
                },
                { title: "Old School Emulation", url: "/details/tosec" },
                {
                  title: "MS-DOS Games",
                  url: "/details/softwarelibrary_msdos_games",
                },
                {
                  title: "Historical Software",
                  url: "/details/historicalsoftware",
                },
                { title: "Classic PC Games", url: "/details/classicpcgames" },
                { title: "Software Library", url: "/details/softwarelibrary" },
              ],
              links: [
                {
                  title: "Kodi Archive and Support File",
                  url: "/details/kodi_archive",
                },
                {
                  title: "Community Software",
                  url: "/details/open_source_software",
                },
                { title: "Vintage Software", url: "/details/vintagesoftware" },
                { title: "APK", url: "/details/apkarchive" },
                { title: "MS-DOS", url: "/details/softwarelibrary_msdos" },
                { title: "CD-ROM Software", url: "/details/cd-roms" },
                {
                  title: "CD-ROM Software Library",
                  url: "/details/cdromsoftware",
                },
                { title: "Software Sites", url: "/details/softwaresites" },
                { title: "Tucows Software Library", url: "/details/tucows" },
                { title: "Shareware CD-ROMs", url: "/details/cdbbsarchive" },
                {
                  title: "Software Capsules Compilation",
                  url: "/details/softwarecapsules",
                },
                { title: "CD-ROM Images", url: "/details/cdromimages" },
                {
                  title: "ZX Spectrum",
                  url: "/details/softwarelibrary_zx_spectrum",
                },
                { title: "DOOM Level CD", url: "/details/doom-cds" },
              ],
            },
            texts: {
              heading: "Books",
              iconLinks: [
                {
                  title: "Books to Borrow",
                  icon: "/images/book-lend.png",
                  url: "/details/inlibrary",
                },
                {
                  title: "Open Library",
                  icon: "/images/widgetOL.png",
                  url: "https://openlibrary.org/",
                },
              ],
              featuredLinks: [
                { title: "All Books", url: "/details/books" },
                { title: "All Texts", url: "/details/texts" },
                {
                  title: "This Just In",
                  url: "/search.php?query=mediatype:texts&sort=-publicdate",
                },
                { title: "Smithsonian Libraries", url: "/details/smithsonian" },
                { title: "FEDLINK (US)", url: "/details/fedlink" },
                { title: "Genealogy", url: "/details/genealogy" },
                {
                  title: "Lincoln Collection",
                  url: "/details/lincolncollection",
                },
              ],
              links: [
                { title: "American Libraries", url: "/details/americana" },
                { title: "Canadian Libraries", url: "/details/toronto" },
                {
                  title: "Universal Library",
                  url: "/details/universallibrary",
                },
                { title: "Community Texts", url: "/details/opensource" },
                { title: "Project Gutenberg", url: "/details/gutenberg" },
                { title: "Children's Library", url: "/details/iacl" },
                {
                  title: "Biodiversity Heritage Library",
                  url: "/details/biodiversity",
                },
                { title: "Books by Language", url: "/details/booksbylanguage" },
                {
                  title: "Additional Collections",
                  url: "/details/additional_collections",
                },
              ],
            },
            web: {
              mobileAppsLinks: [
                {
                  url: "https://apps.apple.com/us/app/wayback-machine/id1201888313",
                  title: "Wayback Machine (iOS)",
                  external: !0,
                },
                {
                  url: "https://play.google.com/store/apps/details?id=com.archive.waybackmachine&hl=en_US",
                  title: "Wayback Machine (Android)",
                  external: !0,
                },
              ],
              browserExtensionsLinks: [
                {
                  url: "https://chrome.google.com/webstore/detail/save-to-the-wayback-machi/eebpioaailbjojmdbmlpomfgijnlcemk?hl=en",
                  title: "Chrome",
                  external: !0,
                },
                {
                  url: "https://addons.mozilla.org/en-US/firefox/addon/wayback-machine_new/",
                  title: "Firefox",
                  external: !0,
                },
                {
                  url: "https://apps.apple.com/us/app/wayback-machine/id1472432422?mt=12",
                  title: "Safari",
                  external: !0,
                },
              ],
              archiveItLinks: [
                {
                  url: "https://www.archive-it.org/explore",
                  title: "Explore the Collections",
                  external: !0,
                },
                {
                  url: "https://www.archive-it.org/blog/learn-more/",
                  title: "Learn More",
                  external: !0,
                },
                {
                  url: "https://www.archive-it.org/contact-us",
                  title: "Build Collections",
                  external: !0,
                },
              ],
            },
            video: {
              heading: "Video",
              iconLinks: [
                {
                  icon: "/services/img/tv",
                  title: "TV News",
                  url: "/details/tv",
                },
                {
                  icon: "/services/img/911",
                  title: "Understanding 9/11",
                  url: "/details/911",
                },
              ],
              featuredLinks: [
                { title: "All video", url: "/details/movies" },
                {
                  title: "This Just In",
                  url: "/search.php?query=mediatype:movies&sort=-publicdate",
                },
                { title: "Prelinger Archives", url: "/details/prelinger" },
                { title: "Democracy Now!", url: "/details/democracy_now_vid" },
                {
                  title: "Occupy Wall Street",
                  url: "/details/occupywallstreet",
                },
                { title: "TV NSA Clip Library", url: "/details/nsa" },
              ],
              links: [
                {
                  title: "Animation & Cartoons",
                  url: "/details/animationandcartoons",
                },
                { title: "Arts & Music", url: "/details/artsandmusicvideos" },
                {
                  title: "Computers & Technology",
                  url: "/details/computersandtechvideos",
                },
                {
                  title: "Cultural & Academic Films",
                  url: "/details/culturalandacademicfilms",
                },
                { title: "Ephemeral Films", url: "/details/ephemera" },
                { title: "Movies", url: "/details/moviesandfilms" },
                {
                  title: "News & Public Affairs",
                  url: "/details/newsandpublicaffairs",
                },
                {
                  title: "Spirituality & Religion",
                  url: "/details/spiritualityandreligion",
                },
                { title: "Sports Videos", url: "/details/sports" },
                { title: "Television", url: "/details/television" },
                { title: "Videogame Videos", url: "/details/gamevideos" },
                { title: "Vlogs", url: "/details/vlogs" },
                { title: "Youth Media", url: "/details/youth_media" },
              ],
            },
            user: [
              { url: "/create", title: "Upload", analyticsEvent: "UserUpload" },
              {
                url: "/details/@".concat(e),
                title: "My library",
                analyticsEvent: "UserLibrary",
              },
              {
                url: "/details/@".concat(e, "?tab=loans"),
                title: "My loans",
                analyticsEvent: "UserLoans",
              },
              {
                url: "/details/fav-".concat(e),
                title: "My favorites",
                analyticsEvent: "UserFavorites",
              },
              {
                url: "/details/@".concat(e, "/web-archive"),
                title: "My web archive",
                analyticsEvent: "UserWebArchive",
              },
              {
                url: "/account/index.php?settings=1",
                title: "Edit settings",
                analyticsEvent: "UserSettings",
              },
              {
                url: "https://help.archive.org",
                title: "Get help",
                analyticsEvent: "UserHelp",
              },
              {
                url: "/account/logout",
                title: "Log out",
                analyticsEvent: "UserLogOut",
              },
            ],
            signedOut: [
              {
                url: "/account/signup",
                title: "Sign up for free",
                analyticsEvent: "AvatarMenu-Signup",
              },
              {
                url: "/account/login",
                title: "Log in",
                analyticsEvent: "AvatarMenu-Login",
              },
            ],
          };
        },
        Ar = (n(174), n(97));
      function Cr(e) {
        return (Cr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Pr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return _r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _r(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function jr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Ir(e, t) {
        return (Ir =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Tr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Lr(e);
          if (t) {
            var i = Lr(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Rr(this, n);
        };
      }
      function Rr(e, t) {
        return !t || ("object" !== Cr(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Lr(e) {
        return (Lr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Mr = new WeakSet(),
        Nr = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Ir(e, t);
          })(o, e);
          var t,
            n,
            r,
            i = Tr(o);
          function o(e) {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              i.call(this, e)
            );
          }
          return (
            (t = o),
            (n = [
              {
                key: "update",
                value: function (e, t) {
                  var n = Pr(t, 2),
                    r = n[0],
                    i = n[1];
                  return Mr.has(e) || (r(), Mr.add(e)), this.render(r, i);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  return t();
                },
              },
            ]) && jr(t.prototype, n),
            r && jr(t, r),
            o
          );
        })(Ar.b),
        Dr = Object(Ar.a)(Nr),
        zr = n(64),
        Br = n(165);
      function Ur(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function Hr(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              Ur(o, r, i, a, s, "next", e);
            }
            function s(e) {
              Ur(o, r, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Fr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Wr = (function () {
        function e() {
          var t, n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (r = "donationBannerHandler"),
            (n = "ownerId") in (t = this)
              ? Object.defineProperty(t, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = r);
        }
        var t, n, r, i, o, a;
        return (
          (t = e),
          (n = [
            {
              key: "pageNavigationOccurred",
              value:
                ((a = Hr(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !window.location.pathname.startsWith("/donate")
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (e.next = 3), this.removeDonationBanner();
                            case 3:
                              e.next = 7;
                              break;
                            case 5:
                              return (e.next = 7), this.addDonationBanner();
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return a.apply(this, arguments);
                }),
            },
            {
              key: "removeDonationBanner",
              value:
                ((o = Hr(
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              null == (t = this.bannerContainer) || t.remove();
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "addDonationBanner",
              value:
                ((i = Hr(
                  regeneratorRuntime.mark(function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.bannerContainer) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              ((t =
                                document.createElement("div")).dataset.owner =
                                this.ownerId),
                                ((n = document.createElement("div")).id =
                                  "donato"),
                                ((r = document.createElement("script")).type =
                                  "text/javascript"),
                                (r.src =
                                  "https://archive.org/includes/donate.js"),
                                t.appendChild(n),
                                t.appendChild(r),
                                document.body.prepend(t);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "bannerContainer",
              get: function () {
                return document.body.querySelector(
                  "[data-owner=".concat(this.ownerId, "]")
                );
              },
            },
          ]) && Fr(t.prototype, n),
          r && Fr(t, r),
          e
        );
      })();
      function Vr(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function qr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var $r,
        Kr,
        Gr,
        Yr,
        Jr,
        Zr,
        Qr,
        Xr,
        ei,
        ti,
        ni,
        ri,
        ii,
        oi,
        ai = (function () {
          function e(t) {
            var n, r, i;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (i = void 0),
              (r = "baseUrl") in (n = this)
                ? Object.defineProperty(n, r, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[r] = i),
              (this.baseUrl = t.baseUrl);
          }
          var t, n, r, i, o;
          return (
            (t = e),
            (n = [
              {
                key: "getBannerConfig",
                value:
                  ((i = regeneratorRuntime.mark(function e(t) {
                    var n, r, i;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = new URL(this.serviceUrl)),
                                (null == t ? void 0 : t.ymd) &&
                                  n.searchParams.append("ymd", t.ymd),
                                (null == t ? void 0 : t.variant) &&
                                  n.searchParams.append("variant", t.variant),
                                (null == t ? void 0 : t.platform) &&
                                  n.searchParams.append("platform", t.platform),
                                (null == t
                                  ? void 0
                                  : t.recacheDonationBanner) &&
                                  n.searchParams.append(
                                    "recacheDonationBanner",
                                    t.recacheDonationBanner
                                  ),
                                (e.next = 7),
                                fetch(n.href, { credentials: "include" })
                              );
                            case 7:
                              return (r = e.sent), (e.next = 10), r.json();
                            case 10:
                              return (i = e.sent), e.abrupt("return", i.value);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })),
                  (o = function () {
                    var e = this,
                      t = arguments;
                    return new Promise(function (n, r) {
                      var o = i.apply(e, t);
                      function a(e) {
                        Vr(o, n, r, a, s, "next", e);
                      }
                      function s(e) {
                        Vr(o, n, r, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  }),
                  function (e) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: "serviceUrl",
                get: function () {
                  return "https://".concat(
                    this.baseUrl,
                    "/services/donations/banner.php"
                  );
                },
              },
            ]) && qr(t.prototype, n),
            r && qr(t, r),
            e
          );
        })(),
        si =
          n.p +
          "offshoot_assets/assets/25th-anniversary-logo.mS-sEVkQT2Kt.76c66444429d50a6eb416ca59df75cc3.svg",
        ci =
          n.p +
          "offshoot_assets/assets/25th-anniversary-logo-mobile.8adRK2ZmjIYc.b72e3c107c30c5dd59c60779fe1d3aa3.svg";
      function ui(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return li(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return li(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function li(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function fi(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function di(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function hi(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              di(o, r, i, a, s, "next", e);
            }
            function s(e) {
              di(o, r, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function pi(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function vi(e, t) {
        return (vi =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function mi(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = bi(e);
          if (t) {
            var i = bi(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return yi(this, n);
        };
      }
      function yi(e, t) {
        return !t || ("object" !== wi(t) && "function" != typeof t) ? gi(e) : t;
      }
      function gi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function bi(e) {
        return (bi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function wi(e) {
        return (wi =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ki() {
        ki = function () {
          return e;
        };
        var e = {
          elementsDefinitionOrder: [["method"], ["field"]],
          initializeInstanceElements: function (e, t) {
            ["method", "field"].forEach(function (n) {
              t.forEach(function (t) {
                t.kind === n &&
                  "own" === t.placement &&
                  this.defineClassElement(e, t);
              }, this);
            }, this);
          },
          initializeClassElements: function (e, t) {
            var n = e.prototype;
            ["method", "field"].forEach(function (r) {
              t.forEach(function (t) {
                var i = t.placement;
                if (t.kind === r && ("static" === i || "prototype" === i)) {
                  var o = "static" === i ? e : n;
                  this.defineClassElement(o, t);
                }
              }, this);
            }, this);
          },
          defineClassElement: function (e, t) {
            var n = t.descriptor;
            if ("field" === t.kind) {
              var r = t.initializer;
              n = {
                enumerable: n.enumerable,
                writable: n.writable,
                configurable: n.configurable,
                value: void 0 === r ? void 0 : r.call(e),
              };
            }
            Object.defineProperty(e, t.key, n);
          },
          decorateClass: function (e, t) {
            var n = [],
              r = [],
              i = { static: [], prototype: [], own: [] };
            if (
              (e.forEach(function (e) {
                this.addElementPlacement(e, i);
              }, this),
              e.forEach(function (e) {
                if (!Oi(e)) return n.push(e);
                var t = this.decorateElement(e, i);
                n.push(t.element),
                  n.push.apply(n, t.extras),
                  r.push.apply(r, t.finishers);
              }, this),
              !t)
            )
              return { elements: n, finishers: r };
            var o = this.decorateConstructor(n, t);
            return r.push.apply(r, o.finishers), (o.finishers = r), o;
          },
          addElementPlacement: function (e, t, n) {
            var r = t[e.placement];
            if (!n && -1 !== r.indexOf(e.key))
              throw new TypeError("Duplicated element (" + e.key + ")");
            r.push(e.key);
          },
          decorateElement: function (e, t) {
            for (
              var n = [], r = [], i = e.decorators, o = i.length - 1;
              o >= 0;
              o--
            ) {
              var a = t[e.placement];
              a.splice(a.indexOf(e.key), 1);
              var s = this.fromElementDescriptor(e),
                c = this.toElementFinisherExtras((0, i[o])(s) || s);
              (e = c.element),
                this.addElementPlacement(e, t),
                c.finisher && r.push(c.finisher);
              var u = c.extras;
              if (u) {
                for (var l = 0; l < u.length; l++)
                  this.addElementPlacement(u[l], t);
                n.push.apply(n, u);
              }
            }
            return { element: e, finishers: r, extras: n };
          },
          decorateConstructor: function (e, t) {
            for (var n = [], r = t.length - 1; r >= 0; r--) {
              var i = this.fromClassDescriptor(e),
                o = this.toClassDescriptor((0, t[r])(i) || i);
              if (
                (void 0 !== o.finisher && n.push(o.finisher),
                void 0 !== o.elements)
              ) {
                e = o.elements;
                for (var a = 0; a < e.length - 1; a++)
                  for (var s = a + 1; s < e.length; s++)
                    if (
                      e[a].key === e[s].key &&
                      e[a].placement === e[s].placement
                    )
                      throw new TypeError(
                        "Duplicated element (" + e[a].key + ")"
                      );
              }
            }
            return { elements: e, finishers: n };
          },
          fromElementDescriptor: function (e) {
            var t = {
              kind: e.kind,
              key: e.key,
              placement: e.placement,
              descriptor: e.descriptor,
            };
            return (
              Object.defineProperty(t, Symbol.toStringTag, {
                value: "Descriptor",
                configurable: !0,
              }),
              "field" === e.kind && (t.initializer = e.initializer),
              t
            );
          },
          toElementDescriptors: function (e) {
            var t;
            if (void 0 !== e)
              return ((t = e),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  )
                    return Array.from(e);
                })(t) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return Pi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? Pi(e, t)
                        : void 0
                    );
                  }
                })(t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()).map(function (e) {
                var t = this.toElementDescriptor(e);
                return (
                  this.disallowProperty(e, "finisher", "An element descriptor"),
                  this.disallowProperty(e, "extras", "An element descriptor"),
                  t
                );
              }, this);
          },
          toElementDescriptor: function (e) {
            var t = String(e.kind);
            if ("method" !== t && "field" !== t)
              throw new TypeError(
                'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                  t +
                  '"'
              );
            var n = Ci(e.key),
              r = String(e.placement);
            if ("static" !== r && "prototype" !== r && "own" !== r)
              throw new TypeError(
                'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                  r +
                  '"'
              );
            var i = e.descriptor;
            this.disallowProperty(e, "elements", "An element descriptor");
            var o = {
              kind: t,
              key: n,
              placement: r,
              descriptor: Object.assign({}, i),
            };
            return (
              "field" !== t
                ? this.disallowProperty(e, "initializer", "A method descriptor")
                : (this.disallowProperty(
                    i,
                    "get",
                    "The property descriptor of a field descriptor"
                  ),
                  this.disallowProperty(
                    i,
                    "set",
                    "The property descriptor of a field descriptor"
                  ),
                  this.disallowProperty(
                    i,
                    "value",
                    "The property descriptor of a field descriptor"
                  ),
                  (o.initializer = e.initializer)),
              o
            );
          },
          toElementFinisherExtras: function (e) {
            return {
              element: this.toElementDescriptor(e),
              finisher: Ai(e, "finisher"),
              extras: this.toElementDescriptors(e.extras),
            };
          },
          fromClassDescriptor: function (e) {
            var t = {
              kind: "class",
              elements: e.map(this.fromElementDescriptor, this),
            };
            return (
              Object.defineProperty(t, Symbol.toStringTag, {
                value: "Descriptor",
                configurable: !0,
              }),
              t
            );
          },
          toClassDescriptor: function (e) {
            var t = String(e.kind);
            if ("class" !== t)
              throw new TypeError(
                'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                  t +
                  '"'
              );
            this.disallowProperty(e, "key", "A class descriptor"),
              this.disallowProperty(e, "placement", "A class descriptor"),
              this.disallowProperty(e, "descriptor", "A class descriptor"),
              this.disallowProperty(e, "initializer", "A class descriptor"),
              this.disallowProperty(e, "extras", "A class descriptor");
            var n = Ai(e, "finisher");
            return {
              elements: this.toElementDescriptors(e.elements),
              finisher: n,
            };
          },
          runClassFinishers: function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = (0, t[n])(e);
              if (void 0 !== r) {
                if ("function" != typeof r)
                  throw new TypeError("Finishers must return a constructor.");
                e = r;
              }
            }
            return e;
          },
          disallowProperty: function (e, t, n) {
            if (void 0 !== e[t])
              throw new TypeError(n + " can't have a ." + t + " property.");
          },
        };
        return e;
      }
      function xi(e) {
        var t,
          n = Ci(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (t = { configurable: !0, writable: !0, enumerable: !0 });
        var r = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function Si(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Oi(e) {
        return e.decorators && e.decorators.length;
      }
      function Ei(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ai(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function Ci(e) {
        var t = (function (e, t) {
          if ("object" !== wi(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== wi(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === wi(t) ? t : String(t);
      }
      function Pi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      !(function (e, t, n, r) {
        var i = ki();
        if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, n),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  n = function (e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var i,
                  o = e[r];
                if ("method" === o.kind && (i = t.find(n)))
                  if (Ei(o.descriptor) || Ei(i.descriptor)) {
                    if (Oi(o) || Oi(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Oi(o)) {
                      if (Oi(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Si(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(xi)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(Ve.a)("app-root")],
        function (e, t) {
          var i,
            o,
            a,
            s,
            c,
            u,
            l,
            f,
            d,
            h,
            p,
            v,
            m,
            y,
            g,
            b,
            w,
            k,
            x,
            S,
            O,
            E,
            A,
            C,
            P,
            _,
            j;
          return {
            F: (function (t) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && vi(e, t);
              })(r, t);
              var n = mi(r);
              function r() {
                var t;
                pi(this, r);
                for (
                  var i = arguments.length, o = new Array(i), a = 0;
                  a < i;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(gi(t)), t;
              }
              return r;
            })(t),
            d: [
              {
                kind: "field",
                decorators: [Object(Ve.b)({ type: Object })],
                key: "appServices",
                value: function () {
                  var e,
                    t = this;
                  return new zr.a({
                    generator:
                      ((e = hi(
                        regeneratorRuntime.mark(function e() {
                          var r;
                          return regeneratorRuntime.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    n.e(17).then(n.bind(null, 287))
                                  );
                                case 2:
                                  return (
                                    (r = e.sent),
                                    e.abrupt(
                                      "return",
                                      r.AppServices.generateAppServices({
                                        appRoot: t,
                                        appConfig: t.appConfig,
                                        modalManager: new zr.a({
                                          generator: (function () {
                                            var e = hi(
                                              regeneratorRuntime.mark(
                                                function e() {
                                                  return regeneratorRuntime.wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return e.abrupt(
                                                              "return",
                                                              t.modalManager
                                                            );
                                                          case 1:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e
                                                  );
                                                }
                                              )
                                            );
                                            return function () {
                                              return e.apply(this, arguments);
                                            };
                                          })(),
                                        }),
                                      })
                                    )
                                  );
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )),
                      function () {
                        return e.apply(this, arguments);
                      }),
                  });
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.b)({ type: Object })],
                key: "appConfig",
                value: function () {
                  return new zr.a({
                    generator:
                      ((e = hi(
                        regeneratorRuntime.mark(function e() {
                          var t, n, i, o;
                          return regeneratorRuntime.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = r),
                                    (n = new URLSearchParams(
                                      window.location.search
                                    )),
                                    (i = n.get("prerender")),
                                    (o = "1" === i),
                                    e.abrupt("return", {
                                      environment:
                                        t.SNOWPACK_PUBLIC_ENVIRONMENT,
                                      basePath: t.SNOWPACK_PUBLIC_BASE_PATH,
                                      version: t.SNOWPACK_PUBLIC_VERSION,
                                      archiveNavUrl:
                                        t.SNOWPACK_PUBLIC_ARCHIVE_NAV_URL,
                                      archiveApiUrl:
                                        t.SNOWPACK_PUBLIC_ARCHIVE_API_URL,
                                      waybackUrl: t.SNOWPACK_PUBLIC_WAYBACK_URL,
                                      waybackSearchUrl:
                                        t.SNOWPACK_PUBLIC_WAYBACK_SEARCH_URL,
                                      sentryDsn: t.SNOWPACK_PUBLIC_SENTRY_DSN,
                                      zendeskHelpWidgetKey:
                                        t.SNOWPACK_PUBLIC_ZENDESK_HELP_WIDGET_KEY,
                                      isPrerendering: o,
                                      donationForm: {
                                        braintreeAuthToken:
                                          t.SNOWPACK_PUBLIC_BRAINTREE_AUTH_TOKEN,
                                        recaptchaSiteKey:
                                          t.SNOWPACK_PUBLIC_RECAPTCHA_SITE_KEY,
                                        venmoProfileId:
                                          t.SNOWPACK_PUBLIC_VENMO_PROFILE_ID,
                                        googlepayMerchantId:
                                          t.SNOWPACK_PUBLIC_GOOGLEPAY_MERCHANT_ID,
                                      },
                                    })
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )),
                      function () {
                        return e.apply(this, arguments);
                      }),
                  });
                  var e;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.b)({ type: Object })],
                key: "routeBuilder",
                value: function () {
                  var e,
                    t = this;
                  return new zr.a({
                    generator:
                      ((e = hi(
                        regeneratorRuntime.mark(function e() {
                          var r, i;
                          return regeneratorRuntime.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    n.e(27).then(n.bind(null, 288))
                                  );
                                case 2:
                                  return (
                                    (r = e.sent),
                                    (i = new r.RouteBuilder(t.appServices)),
                                    e.abrupt("return", i)
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )),
                      function () {
                        return e.apply(this, arguments);
                      }),
                  });
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "footerPosition",
                value: function () {
                  return Sr.a.Off;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "hasLoadedStrings",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "showDebugBorders",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "showDevMenu",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "activityIndicatorVisible",
                value: function () {
                  return !0;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "sharedResizeObserver",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "siteHasLimitedFunctionality",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "topNavConfig",
                value: function () {
                  return Or;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "topNavMenuConfig",
                value: function () {
                  return Er();
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "zendeskWidgetVisible",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "zendeskWidgetKey",
                value: function () {
                  return "";
                },
              },
              {
                kind: "field",
                decorators: [Object(Ve.e)()],
                key: "donationBannerVisible",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(Ve.c)("router-slot")],
                key: "routerSlot",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(Ve.c)("ia-topnav")],
                key: "topNav",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(Ve.c)("modal-manager")],
                key: "modalManager",
                value: void 0,
              },
              {
                kind: "field",
                key: "donationBannerHandler",
                value: function () {
                  return new Wr();
                },
              },
              { kind: "field", key: "donationBannerService", value: void 0 },
              {
                kind: "method",
                key: "firstUpdated",
                value: function () {
                  this.startup();
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  e.has("appServices") &&
                    this.appServices &&
                    this.setupAppServicesDependents(),
                    e.has("hasLoadedStrings") &&
                      this.hasLoadedStrings &&
                      this.setupView();
                },
              },
              {
                kind: "method",
                key: "startup",
                value:
                  ((j = hi(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.checkForLimitedFunctionality(),
                                  this.fixSafariIndexedDB(),
                                  (e.next = 4),
                                  Promise.all([
                                    this.setupDonationBannerService(),
                                    this.setupDonationBannerHandler(),
                                    this.setupZendeskWidget(),
                                    this.startupSentry(),
                                  ])
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return j.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupZendeskWidget",
                value:
                  ((_ = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n, r, i;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appServices.get();
                              case 2:
                                return (
                                  (t = e.sent), (e.next = 5), t.appConfig.get()
                                );
                              case 5:
                                return (
                                  (n = e.sent),
                                  (e.next = 8),
                                  t.configService.get()
                                );
                              case 8:
                                return (
                                  (r = e.sent),
                                  (e.next = 11),
                                  r.getConfig("feature.zendesk_enabled")
                                );
                              case 11:
                                (i = e.sent),
                                  (this.zendeskWidgetKey =
                                    n.zendeskHelpWidgetKey),
                                  (this.zendeskWidgetVisible = "" !== i);
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return _.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupAppServicesDependents",
                value:
                  ((P = hi(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all([
                                    this.setupDevMenu(),
                                    this.setupLocalizationManager(),
                                    this.startupThemeManager(),
                                    this.trackIaxParameter(),
                                    this.setupPageViewAnalytics(),
                                    this.setupPageMetadataService(),
                                    this.setupLightDOMTunnelReset(),
                                    this.setupResizeObserver(),
                                  ])
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return P.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "startupSentry",
                value:
                  ((C = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all([n.e(0), n.e(4)]).then(
                                    n.bind(null, 289)
                                  )
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.next = 5),
                                  this.appConfig.get()
                                );
                              case 5:
                                (r = e.sent),
                                  t.init({
                                    dsn: r.sentryDsn,
                                    debug: r.environment === wr.dev,
                                  });
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return C.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "fixSafariIndexedDB",
                value: function () {
                  if (window.indexedDB) {
                    var e = "safariIdbFix";
                    window.indexedDB.open(e),
                      window.indexedDB.deleteDatabase(e);
                  }
                },
              },
              {
                kind: "method",
                key: "checkForLimitedFunctionality",
                value:
                  ((A = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = new URLSearchParams(
                                  window.location.search
                                )),
                                  (n = t.get("limited")),
                                  (this.siteHasLimitedFunctionality =
                                    "1" === n);
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return A.apply(this, arguments);
                  }),
              },
              {
                kind: "field",
                key: "iaxParameterTracked",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "trackIaxParameter",
                value:
                  ((E = hi(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.iaxParameterTracked) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (e.next = 4), this.appServices.get();
                              case 4:
                                return (
                                  (t = e.sent),
                                  (e.next = 7),
                                  t.analyticsHandler.get()
                                );
                              case 7:
                                e.sent.trackIaxParameter(window.location.href),
                                  (this.iaxParameterTracked = !0);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return E.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupDevMenu",
                value:
                  ((O = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n, r, i, o;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appServices.get();
                              case 2:
                                return (
                                  (t = e.sent), (e.next = 5), t.appConfig.get()
                                );
                              case 5:
                                return (
                                  (n = e.sent),
                                  (e.next = 8),
                                  this.getLoggedInUser()
                                );
                              case 8:
                                (r = e.sent),
                                  (i = n.environment === wr.dev),
                                  (o =
                                    (r && r.privs.includes("offshoot-dev")) ||
                                    !1),
                                  (this.showDevMenu = i || o);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return O.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupPageViewAnalytics",
                value:
                  ((S = hi(
                    regeneratorRuntime.mark(function e() {
                      var t = this;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              window.addEventListener(
                                "navigationend",
                                hi(
                                  regeneratorRuntime.mark(function e() {
                                    var n;
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2), t.appServices.get()
                                            );
                                          case 2:
                                            return (
                                              (n = e.sent),
                                              (e.next = 5),
                                              n.analyticsHandler.get()
                                            );
                                          case 5:
                                            e.sent.trackPageView();
                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return S.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupPageMetadataService",
                value:
                  ((x = hi(
                    regeneratorRuntime.mark(function e() {
                      var t = this;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              window.addEventListener(
                                "navigationstart",
                                hi(
                                  regeneratorRuntime.mark(function e() {
                                    var n, r;
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2), t.appServices.get()
                                            );
                                          case 2:
                                            return (
                                              (n = e.sent),
                                              (e.next = 5),
                                              n.pageMetadataService.get()
                                            );
                                          case 5:
                                            (r = e.sent).clearMetaTags(),
                                              r.clearLinkTags();
                                          case 8:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return x.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupLightDOMTunnelReset",
                value:
                  ((k = hi(
                    regeneratorRuntime.mark(function e() {
                      var t = this;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              window.addEventListener(
                                "navigationstart",
                                hi(
                                  regeneratorRuntime.mark(function e() {
                                    var n;
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2), t.appServices.get()
                                            );
                                          case 2:
                                            return (
                                              (n = e.sent),
                                              (e.next = 5),
                                              n.lightDOMTunnel.get()
                                            );
                                          case 5:
                                            e.sent.removeAll();
                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return k.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupResizeObserver",
                value:
                  ((w = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appServices.get();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.next = 5),
                                  t.resizeObserver.get()
                                );
                              case 5:
                                (n = e.sent), (this.sharedResizeObserver = n);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return w.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupPageNavigationActivityIndicator",
                value:
                  ((b = hi(
                    regeneratorRuntime.mark(function e() {
                      var t = this;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              window.addEventListener(
                                "navigationstart",
                                hi(
                                  regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            t.showActivityIndicator(!0);
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                )
                              ),
                                window.addEventListener(
                                  "navigationend",
                                  hi(
                                    regeneratorRuntime.mark(function e() {
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              t.showActivityIndicator(!1);
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  )
                                );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return b.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupDonationBannerService",
                value:
                  ((g = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n, r, i, o, a, s, c, u, l, f;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appConfig.get();
                              case 2:
                                return (
                                  (o = e.sent),
                                  (this.donationBannerService = new ai({
                                    baseUrl: o.archiveApiUrl,
                                  })),
                                  (a = new URLSearchParams(
                                    window.location.search
                                  )),
                                  (s = null != (t = a.get("ymd")) ? t : void 0),
                                  (c =
                                    null != (n = a.get("variant"))
                                      ? n
                                      : void 0),
                                  (u =
                                    null != (r = a.get("platform"))
                                      ? r
                                      : void 0),
                                  (l =
                                    null != (i = a.get("recacheDonationBanner"))
                                      ? i
                                      : void 0),
                                  (e.next = 11),
                                  this.donationBannerService.getBannerConfig({
                                    ymd: s,
                                    variant: c,
                                    platform: u,
                                    recacheDonationBanner: l,
                                  })
                                );
                              case 11:
                                if ((f = e.sent)) {
                                  e.next = 14;
                                  break;
                                }
                                return e.abrupt("return");
                              case 14:
                                this.donationBannerVisible =
                                  f.shouldDisplayBanner;
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return g.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupDonationBannerHandler",
                value:
                  ((y = hi(
                    regeneratorRuntime.mark(function e() {
                      var t = this;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              window.addEventListener(
                                "navigationend",
                                hi(
                                  regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              t.donationBannerHandler.pageNavigationOccurred()
                                            );
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return y.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupView",
                value:
                  ((m = hi(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.setupPageNavigationActivityIndicator(),
                                  this.setupRouter(),
                                  this.setupTopnav();
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return m.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setFooterPosition",
                value:
                  ((v = hi(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.footerPosition = t;
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return v.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "showTopNavSearch",
                value: function (e) {
                  this.topNav.hideSearch = !e;
                },
              },
              {
                kind: "method",
                key: "showTopNav2ndLogo",
                value: function (e) {
                  var t = e ? "allow" : "";
                  this.topNav.secondIdentitySlotMode = t;
                },
              },
              {
                kind: "method",
                key: "showZendeskWidget",
                value: function (e) {
                  this.zendeskWidgetVisible = e;
                },
              },
              {
                kind: "method",
                key: "getWindowScrollbarWidth",
                value: function () {
                  return (
                    window.innerWidth - document.documentElement.clientWidth
                  );
                },
              },
              {
                kind: "field",
                key: "activityIndicatorRequests",
                value: function () {
                  return 0;
                },
              },
              {
                kind: "method",
                key: "showActivityIndicator",
                value: function (e) {
                  (this.activityIndicatorRequests += e ? 1 : -1),
                    (this.activityIndicatorRequests = Math.max(
                      0,
                      this.activityIndicatorRequests
                    ));
                  var t = !e && 0 === this.activityIndicatorRequests;
                  this.activityIndicatorVisible = !t;
                },
              },
              {
                kind: "method",
                key: "setupTopnav",
                value:
                  ((p = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appConfig.get();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (this.topNav.baseHost = t.archiveNavUrl),
                                  (e.next = 6),
                                  this.getLoggedInUser()
                                );
                              case 6:
                                if ((n = e.sent)) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return");
                              case 9:
                                (this.topNavMenuConfig = Er(n.userid)),
                                  (this.topNav.screenName = n.screenname),
                                  (this.topNav.username = n.itemname),
                                  (this.topNav.userProfileLastModified =
                                    "".concat(n.image_info.mtime));
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return p.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "getLoggedInUser",
                value:
                  ((h = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appServices.get();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.next = 5),
                                  t.userService.get()
                                );
                              case 5:
                                return (
                                  (n = e.sent),
                                  (e.next = 8),
                                  n.getLoggedInUser()
                                );
                              case 8:
                                return (
                                  (r = e.sent), e.abrupt("return", r.success)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return h.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "startupThemeManager",
                value:
                  ((d = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appServices.get();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.next = 5),
                                  t.themeManager.get()
                                );
                              case 5:
                                return (n = e.sent), (e.next = 8), n.startup();
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return d.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupRouter",
                value:
                  ((f = hi(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.routerSlot) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (e.next = 4), this.routeBuilder.get();
                              case 4:
                                (t = e.sent),
                                  (this.routerSlot.handleAnchorLinks = !1),
                                  this.routerSlot.add(t.appRoutes);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return f.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "setupLocalizationManager",
                value:
                  ((l = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appServices.get();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.next = 5),
                                  t.localizationManager.get()
                                );
                              case 5:
                                return (
                                  (n = e.sent),
                                  this.showActivityIndicator(!0),
                                  (e.next = 9),
                                  n.setup()
                                );
                              case 9:
                                (this.hasLoadedStrings = !0),
                                  this.showActivityIndicator(!1);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return l.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(We.c)(
                    $r ||
                      ($r = fi([
                        "\n      ",
                        "\n      <header>\n        ",
                        "\n        <ia-topnav\n          .config=",
                        "\n          .menus=",
                        '\n          secondIdentitySlotMode="allow"\n          @trackClick=',
                        "\n          @trackSubmit=",
                        '\n        >\n          <div slot="opt-sec-logo">\n            <a\n              class="anniv-logo-link"\n              href="https://anniversary.archive.org"\n              title="Celebrate Internet Archive\'s 25th Anniversary"\n              @click=',
                        "\n            >\n              <img\n                src=",
                        '\n                alt="Internet Archive 25th Anniversary Logo"\n              />\n            </a>\n          </div>\n          <div slot="opt-sec-logo-mobile">\n            <a\n              class="anniv-logo-link"\n              href="https://anniversary.archive.org"\n              title="Celebrate Internet Archive\'s 25th Anniversary"\n              @click=',
                        "\n            >\n              <img\n                src=",
                        '\n                alt="Internet Archive 25th Anniversary Logo"\n              />\n            </a>\n          </div>\n        </ia-topnav>\n        ',
                        "\n        ",
                        "\n      </header>\n\n      ",
                        "\n      ",
                        "\n      ",
                        "\n    ",
                      ])),
                    this.anniversaryBannerTemplate,
                    this.siteHasLimitedFunctionality
                      ? this.limitedSiteFunctionalityBannerTemplate
                      : We.d,
                    this.topNavConfig,
                    this.topNavMenuConfig,
                    this.trackTopNavEvent,
                    this.trackTopNavEvent,
                    this.trackAnniversaryLogoClick,
                    si,
                    this.trackAnniversaryLogoClick,
                    ci,
                    this.showDevMenu ? this.devMenuTemplate : We.d,
                    this.activityIndicatorVisible
                      ? this.activityIndicatorTemplate
                      : We.d,
                    this.hasLoadedStrings ? this.mainTemplate : We.d,
                    this.modalManagerTemplate,
                    this.zendeskWidgetVisible
                      ? this.zendeskHelpWidgetTemplate
                      : We.d
                  );
                },
              },
              {
                kind: "get",
                key: "limitedSiteFunctionalityBannerTemplate",
                value: function () {
                  return Dr(
                    hi(
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.resolve().then(n.bind(null, 165))
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    function () {
                      return Object(We.c)(
                        Kr ||
                          (Kr = fi([
                            "\n          <alert-banner .mode=",
                            ">\n            Your web browser does not support all of the features needed for\n            this website. The site will have limited functionality.\n          </alert-banner>\n        ",
                          ])),
                        Br.AlertBannerMode.alert
                      );
                    }
                  );
                },
              },
              {
                kind: "get",
                key: "anniversaryBannerTemplate",
                value: function () {
                  return void 0 === this.donationBannerVisible
                    ? Object(We.c)(Gr || (Gr = fi(["", ""])), We.d)
                    : xr.a("ia-close-25") || this.donationBannerVisible
                    ? Object(We.c)(Yr || (Yr = fi(["", ""])), We.d)
                    : Object(We.c)(
                        Jr || (Jr = fi(["", ""])),
                        this.lazyAnniversaryBannerTemplate
                      );
                },
              },
              {
                kind: "method",
                key: "anniversaryBannerClosed",
                value:
                  ((u = hi(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  xr.b("ia-close-25", "1", {
                                    path: "/",
                                    expires: 3,
                                    domain: ".archive.org",
                                  }),
                                  (e.next = 3),
                                  this.trackEvent({
                                    event: {
                                      category: "Anniv25Banner",
                                      action: "ClosePageTop",
                                    },
                                    sampling: !0,
                                  })
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return u.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "anniversaryBannerClicked",
                value:
                  ((c = hi(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.trackEvent({
                                    event: {
                                      category: "Anniv25Banner",
                                      action: "PageTop",
                                    },
                                    sampling: !0,
                                  })
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return c.apply(this, arguments);
                  }),
              },
              {
                kind: "get",
                key: "zendeskHelpWidgetTemplate",
                value: function () {
                  var e = this;
                  return Dr(
                    hi(
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all([n.e(0), n.e(8)]).then(
                                    n.bind(null, 290)
                                  )
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    function () {
                      return Object(We.c)(
                        Zr ||
                          (Zr = fi([
                            '\n          <ia-zendesk-help-widget\n            widgetSrc="https://static.zdassets.com/ekr/snippet.js?key=',
                            '"\n          ></ia-zendesk-help-widget>\n        ',
                          ])),
                        e.zendeskWidgetKey
                      );
                    }
                  );
                },
              },
              {
                kind: "get",
                key: "lazyAnniversaryBannerTemplate",
                value: function () {
                  var e = this;
                  return Dr(
                    hi(
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all([n.e(0), n.e(7)]).then(
                                    n.bind(null, 291)
                                  )
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    function () {
                      return Object(We.c)(
                        Qr ||
                          (Qr = fi([
                            "\n          <ia-anniversary-banner\n            @bannerClosed=",
                            "\n            @bannerClick=",
                            "\n          ></ia-anniversary-banner>\n        ",
                          ])),
                        e.anniversaryBannerClosed,
                        e.anniversaryBannerClicked
                      );
                    }
                  );
                },
              },
              {
                kind: "get",
                key: "devMenuTemplate",
                value: function () {
                  var e = this;
                  return Dr(
                    hi(
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all([n.e(0), n.e(28)]).then(
                                    n.bind(null, 292)
                                  )
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    function () {
                      return Object(We.c)(
                        Xr ||
                          (Xr = fi([
                            "\n          <dev-tools\n            .appServices=",
                            "\n            @pageWidthSliderChanged=",
                            "\n            @borderCheckboxChecked=",
                            "\n          >\n          </dev-tools>\n        ",
                          ])),
                        e.appServices,
                        e.devToolPageWidthSliderChanged,
                        e.devToolsBorderCheckboxChecked
                      );
                    }
                  );
                },
              },
              {
                kind: "get",
                key: "activityIndicatorTemplate",
                value: function () {
                  return Object(We.c)(
                    ei ||
                      (ei = fi([
                        "\n      <horizontal-activity-indicator\n        .resizeObserver=",
                        "\n      >\n      </horizontal-activity-indicator>\n    ",
                      ])),
                    this.sharedResizeObserver
                  );
                },
              },
              {
                kind: "get",
                key: "mainTemplate",
                value: function () {
                  return Object(We.c)(
                    ti ||
                      (ti = fi([
                        '\n      <main>\n        <div\n          class="page-container ',
                        '"\n        >\n          <router-slot></router-slot>\n        </div>\n      </main>\n\n      <footer class="',
                        '">',
                        "</footer>\n    ",
                      ])),
                    this.showDebugBorders ? "show-debug-borders" : "",
                    this.footerPosition,
                    this.footerTemplate
                  );
                },
              },
              {
                kind: "method",
                key: "setupPaypalUpsellSlot",
                value:
                  ((s = hi(
                    regeneratorRuntime.mark(function e() {
                      var t, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appServices.get();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.next = 5),
                                  t.lightDOMTunnel.get()
                                );
                              case 5:
                                return (
                                  (n = e.sent),
                                  (e.next = 8),
                                  n.setSlotContent(
                                    "paypal-upsell-button",
                                    Object(We.c)(
                                      ni ||
                                        (ni = fi([
                                          ' <div id="paypal-upsell-button"></div> ',
                                        ]))
                                    )
                                  )
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return s.apply(this, arguments);
                  }),
              },
              {
                kind: "get",
                key: "modalManagerTemplate",
                value: function () {
                  var e = this;
                  return Dr(
                    hi(
                      regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  Promise.all([n.e(0), n.e(11)]).then(
                                    n.bind(null, 293)
                                  )
                                );
                              case 2:
                                return (t.next = 4), e.setupPaypalUpsellSlot();
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    ),
                    function () {
                      return Object(We.c)(
                        ri ||
                          (ri = fi([
                            '\n          <modal-manager>\n            <slot\n              name="paypal-upsell-button"\n              slot="paypal-upsell-button"\n            ></slot>\n          </modal-manager>\n        ',
                          ]))
                      );
                    }
                  );
                },
              },
              {
                kind: "method",
                key: "devToolPageWidthSliderChanged",
                value: function (e) {
                  var t,
                    n = e.detail.width;
                  (null == (t = this.shadowRoot)
                    ? void 0
                    : t.host
                  ).style.setProperty("--app-root-page-max-width", n + "rem");
                },
              },
              {
                kind: "method",
                key: "devToolsBorderCheckboxChecked",
                value: function (e) {
                  var t = e.detail.showBorders;
                  this.showDebugBorders = t;
                },
              },
              {
                kind: "method",
                key: "trackAnniversaryLogoClick",
                value:
                  ((a = hi(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.trackEvent({
                                    event: {
                                      category: "Anniversary25",
                                      action: "TopNavLogo",
                                    },
                                    sampling: !1,
                                  })
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "trackTopNavEvent",
                value:
                  ((o = hi(
                    regeneratorRuntime.mark(function e(t) {
                      var n, r, i, o, a, s;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((i =
                                    null ==
                                    (r =
                                      null == (n = t.detail) ? void 0 : n.event)
                                      ? void 0
                                      : r.split("|")),
                                  (o = ui(i, 2)),
                                  (a = o[0]),
                                  (s = o[1]),
                                  a && s)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                return (
                                  (e.next = 5),
                                  this.trackEvent({
                                    event: { category: a, action: s },
                                    sampling: !1,
                                  })
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                kind: "method",
                key: "trackEvent",
                value:
                  ((i = hi(
                    regeneratorRuntime.mark(function e(t) {
                      var n, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.appServices.get();
                              case 2:
                                return (
                                  (n = e.sent),
                                  (e.next = 5),
                                  n.analyticsHandler.get()
                                );
                              case 5:
                                (r = e.sent),
                                  t.sampling
                                    ? r.sendEvent(t.event)
                                    : r.sendEventNoSampling(t.event);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                kind: "get",
                key: "footerTemplate",
                value: function () {
                  return Dr(
                    hi(
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all([n.e(0), n.e(14)]).then(
                                    n.bind(null, 294)
                                  )
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    function () {
                      return Object(We.c)(
                        ii || (ii = fi([" <app-footer></app-footer> "]))
                      );
                    }
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(We.b)(
                    oi ||
                      (oi = fi([
                        "\n      horizontal-activity-indicator {\n        position: absolute;\n        height: 3px;\n        width: 100%;\n      }\n      modal-manager[mode='closed'] {\n        display: none;\n      }\n      app-footer {\n        display: block;\n      }\n      alert-banner {\n        position: fixed;\n        max-width: 90%;\n        width: 72rem;\n        min-width: 28rem;\n        top: 3rem;\n        left: 50%;\n        transform: translateX(-50%);\n        z-index: 10;\n      }\n      .anniv-logo-link {\n        display: flex;\n      }\n      .anniv-logo-link img {\n        height: 3rem;\n      }\n      .page-container {\n        margin: auto;\n      }\n      .page-container.show-debug-borders {\n        outline: 1px solid purple;\n      }\n      footer {\n        width: 100%;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 10;\n      }\n      footer.fixed {\n        position: fixed;\n      }\n      footer.off {\n        display: none;\n      }\n    ",
                      ]))
                  );
                },
              },
            ],
          };
        },
        We.a
      );
    },
  ],
  [[195, 3]],
]);
