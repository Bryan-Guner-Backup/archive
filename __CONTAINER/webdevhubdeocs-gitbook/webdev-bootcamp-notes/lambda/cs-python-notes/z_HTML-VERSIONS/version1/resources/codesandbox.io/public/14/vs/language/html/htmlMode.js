/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-html version: 2.2.0(70020ec3be15f92a794f5d2c47ae195a7da63a75)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-html/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define(
  'vs/language/html/workerManager',
  ['require', 'exports'],
  function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var s = monaco.Promise,
      n = (function () {
        function e(e) {
          var t = this;
          (this._defaults = e),
            (this._worker = null),
            (this._idleCheckInterval = setInterval(function () {
              return t._checkIfIdle();
            }, 3e4)),
            (this._lastUsedTime = 0),
            (this._configChangeListener = this._defaults.onDidChange(
              function () {
                return t._stopWorker();
              }
            ));
        }
        return (
          (e.prototype._stopWorker = function () {
            this._worker && (this._worker.dispose(), (this._worker = null)),
              (this._client = null);
          }),
          (e.prototype.dispose = function () {
            clearInterval(this._idleCheckInterval),
              this._configChangeListener.dispose(),
              this._stopWorker();
          }),
          (e.prototype._checkIfIdle = function () {
            this._worker &&
              12e4 < Date.now() - this._lastUsedTime &&
              this._stopWorker();
          }),
          (e.prototype._getClient = function () {
            return (
              (this._lastUsedTime = Date.now()),
              this._client ||
                ((this._worker = monaco.editor.createWebWorker({
                  moduleId: 'vs/language/html/htmlWorker',
                  createData: {
                    languageSettings: this._defaults.options,
                    languageId: this._defaults.languageId,
                  },
                  label: this._defaults.languageId,
                })),
                (this._client = this._worker.getProxy())),
              this._client
            );
          }),
          (e.prototype.getLanguageServiceWorker = function () {
            for (
              var t, e, n, r, i, o = this, a = [], u = 0;
              u < arguments.length;
              u++
            )
              a[u] = arguments[u];
            return (
              (e = this._getClient()
                .then(function (e) {
                  t = e;
                })
                .then(function (e) {
                  return o._worker.withSyncedResources(a);
                })
                .then(function (e) {
                  return t;
                })),
              (i = new s(
                function (e, t) {
                  (n = e), (r = t);
                },
                function () {}
              )),
              e.then(n, r),
              i
            );
          }),
          e
        );
      })();
    t.WorkerManager = n;
  }
),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-languageserver-types/main', ['require', 'exports'], e);
  })(function (e, t) {
    'use strict';
    var a, n, r, i, o, u, s, c, d, l, g, f, m, h, p, v, y, b, _, C, k, x, I, w;
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      ((n = a = t.Position || (t.Position = {})).create = function (e, t) {
        return {
          line: e,
          character: t,
        };
      }),
      (n.is = function (e) {
        var t = e;
        return Z.objectLiteral(t) && Z.number(t.line) && Z.number(t.character);
      }),
      ((i = r = t.Range || (t.Range = {})).create = function (e, t, n, r) {
        if (Z.number(e) && Z.number(t) && Z.number(n) && Z.number(r))
          return {
            start: a.create(e, t),
            end: a.create(n, r),
          };
        if (a.is(e) && a.is(t))
          return {
            start: e,
            end: t,
          };
        throw new Error(
          'Range#create called with invalid arguments[' +
            e +
            ', ' +
            t +
            ', ' +
            n +
            ', ' +
            r +
            ']'
        );
      }),
      (i.is = function (e) {
        var t = e;
        return Z.objectLiteral(t) && a.is(t.start) && a.is(t.end);
      }),
      ((u = o = t.Location || (t.Location = {})).create = function (e, t) {
        return {
          uri: e,
          range: t,
        };
      }),
      (u.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          r.is(t.range) &&
          (Z.string(t.uri) || Z.undefined(t.uri))
        );
      }),
      ((c = s = t.Color || (t.Color = {})).create = function (e, t, n, r) {
        return {
          red: e,
          green: t,
          blue: n,
          alpha: r,
        };
      }),
      (c.is = function (e) {
        var t = e;
        return (
          Z.number(t.red) &&
          Z.number(t.green) &&
          Z.number(t.blue) &&
          Z.number(t.alpha)
        );
      }),
      ((d = t.ColorInformation || (t.ColorInformation = {})).create = function (
        e,
        t
      ) {
        return {
          range: e,
          color: t,
        };
      }),
      (d.is = function (e) {
        var t = e;
        return r.is(t.range) && s.is(t.color);
      }),
      ((l = t.ColorPresentation || (t.ColorPresentation = {})).create =
        function (e, t, n) {
          return {
            label: e,
            textEdit: t,
            additionalTextEdits: n,
          };
        }),
      (l.is = function (e) {
        var t = e;
        return (
          Z.string(t.label) &&
          (Z.undefined(t.textEdit) || C.is(t)) &&
          (Z.undefined(t.additionalTextEdits) ||
            Z.typedArray(t.additionalTextEdits, C.is))
        );
      }),
      ((g = t.FoldingRangeKind || (t.FoldingRangeKind = {})).Comment =
        'comment'),
      (g.Imports = 'imports'),
      (g.Region = 'region'),
      ((f = t.FoldingRange || (t.FoldingRange = {})).create = function (
        e,
        t,
        n,
        r,
        i
      ) {
        var o = {
          startLine: e,
          endLine: t,
        };
        return (
          Z.defined(n) && (o.startCharacter = n),
          Z.defined(r) && (o.endCharacter = r),
          Z.defined(i) && (o.kind = i),
          o
        );
      }),
      (f.is = function (e) {
        var t = e;
        return (
          Z.number(t.startLine) &&
          Z.number(t.startLine) &&
          (Z.undefined(t.startCharacter) || Z.number(t.startCharacter)) &&
          (Z.undefined(t.endCharacter) || Z.number(t.endCharacter)) &&
          (Z.undefined(t.kind) || Z.string(t.kind))
        );
      }),
      ((h = m =
        t.DiagnosticRelatedInformation ||
        (t.DiagnosticRelatedInformation = {})).create = function (e, t) {
        return {
          location: e,
          message: t,
        };
      }),
      (h.is = function (e) {
        var t = e;
        return Z.defined(t) && o.is(t.location) && Z.string(t.message);
      }),
      ((p = t.DiagnosticSeverity || (t.DiagnosticSeverity = {})).Error = 1),
      (p.Warning = 2),
      (p.Information = 3),
      (p.Hint = 4),
      ((y = v = t.Diagnostic || (t.Diagnostic = {})).create = function (
        e,
        t,
        n,
        r,
        i,
        o
      ) {
        var a = {
          range: e,
          message: t,
        };
        return (
          Z.defined(n) && (a.severity = n),
          Z.defined(r) && (a.code = r),
          Z.defined(i) && (a.source = i),
          Z.defined(o) && (a.relatedInformation = o),
          a
        );
      }),
      (y.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          r.is(t.range) &&
          Z.string(t.message) &&
          (Z.number(t.severity) || Z.undefined(t.severity)) &&
          (Z.number(t.code) || Z.string(t.code) || Z.undefined(t.code)) &&
          (Z.string(t.source) || Z.undefined(t.source)) &&
          (Z.undefined(t.relatedInformation) ||
            Z.typedArray(t.relatedInformation, m.is))
        );
      }),
      ((_ = b = t.Command || (t.Command = {})).create = function (e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = {
          title: e,
          command: t,
        };
        return Z.defined(n) && 0 < n.length && (i.arguments = n), i;
      }),
      (_.is = function (e) {
        var t = e;
        return Z.defined(t) && Z.string(t.title) && Z.string(t.command);
      }),
      ((k = C = t.TextEdit || (t.TextEdit = {})).replace = function (e, t) {
        return {
          range: e,
          newText: t,
        };
      }),
      (k.insert = function (e, t) {
        return {
          range: {
            start: e,
            end: e,
          },
          newText: t,
        };
      }),
      (k.del = function (e) {
        return {
          range: e,
          newText: '',
        };
      }),
      (k.is = function (e) {
        var t = e;
        return Z.objectLiteral(t) && Z.string(t.newText) && r.is(t.range);
      }),
      ((I = x = t.TextDocumentEdit || (t.TextDocumentEdit = {})).create =
        function (e, t) {
          return {
            textDocument: e,
            edits: t,
          };
        }),
      (I.is = function (e) {
        var t = e;
        return Z.defined(t) && E.is(t.textDocument) && Array.isArray(t.edits);
      }),
      ((w = t.WorkspaceEdit || (t.WorkspaceEdit = {})).is = function (e) {
        var t = e;
        return (
          t &&
          (void 0 !== t.changes || void 0 !== t.documentChanges) &&
          (void 0 === t.documentChanges ||
            Z.typedArray(t.documentChanges, x.is))
        );
      });
    var D,
      E,
      S,
      T,
      M,
      F,
      K,
      R,
      P,
      A,
      L,
      O,
      j,
      W,
      H = (function () {
        function e(e) {
          this.edits = e;
        }
        return (
          (e.prototype.insert = function (e, t) {
            this.edits.push(C.insert(e, t));
          }),
          (e.prototype.replace = function (e, t) {
            this.edits.push(C.replace(e, t));
          }),
          (e.prototype.delete = function (e) {
            this.edits.push(C.del(e));
          }),
          (e.prototype.add = function (e) {
            this.edits.push(e);
          }),
          (e.prototype.all = function () {
            return this.edits;
          }),
          (e.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
          }),
          e
        );
      })(),
      V = (function () {
        function e(n) {
          var r = this;
          (this._textEditChanges = Object.create(null)),
            n &&
              ((this._workspaceEdit = n).documentChanges
                ? n.documentChanges.forEach(function (e) {
                    var t = new H(e.edits);
                    r._textEditChanges[e.textDocument.uri] = t;
                  })
                : n.changes &&
                  Object.keys(n.changes).forEach(function (e) {
                    var t = new H(n.changes[e]);
                    r._textEditChanges[e] = t;
                  }));
        }
        return (
          Object.defineProperty(e.prototype, 'edit', {
            get: function () {
              return this._workspaceEdit;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getTextEditChange = function (e) {
            if (E.is(e)) {
              if (
                (this._workspaceEdit ||
                  (this._workspaceEdit = {
                    documentChanges: [],
                  }),
                !this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  'Workspace edit is not configured for versioned document changes.'
                );
              var t = e;
              if (!(r = this._textEditChanges[t.uri])) {
                var n = {
                  textDocument: t,
                  edits: (i = []),
                };
                this._workspaceEdit.documentChanges.push(n),
                  (r = new H(i)),
                  (this._textEditChanges[t.uri] = r);
              }
              return r;
            }
            if (
              (this._workspaceEdit ||
                (this._workspaceEdit = {
                  changes: Object.create(null),
                }),
              !this._workspaceEdit.changes)
            )
              throw new Error(
                'Workspace edit is not configured for normal text edit changes.'
              );
            var r;
            if (!(r = this._textEditChanges[e])) {
              var i = [];
              (this._workspaceEdit.changes[e] = i),
                (r = new H(i)),
                (this._textEditChanges[e] = r);
            }
            return r;
          }),
          e
        );
      })();
    (t.WorkspaceChange = V),
      ((D =
        t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {})).create =
        function (e) {
          return {
            uri: e,
          };
        }),
      (D.is = function (e) {
        var t = e;
        return Z.defined(t) && Z.string(t.uri);
      }),
      ((S = E =
        t.VersionedTextDocumentIdentifier ||
        (t.VersionedTextDocumentIdentifier = {})).create = function (e, t) {
        return {
          uri: e,
          version: t,
        };
      }),
      (S.is = function (e) {
        var t = e;
        return Z.defined(t) && Z.string(t.uri) && Z.number(t.version);
      }),
      ((T = t.TextDocumentItem || (t.TextDocumentItem = {})).create = function (
        e,
        t,
        n,
        r
      ) {
        return {
          uri: e,
          languageId: t,
          version: n,
          text: r,
        };
      }),
      (T.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          Z.string(t.uri) &&
          Z.string(t.languageId) &&
          Z.number(t.version) &&
          Z.string(t.text)
        );
      }),
      ((F = M = t.MarkupKind || (t.MarkupKind = {})).PlainText = 'plaintext'),
      (F.Markdown = 'markdown'),
      ((K = M = t.MarkupKind || (t.MarkupKind = {})).is = function (e) {
        var t = e;
        return t === K.PlainText || t === K.Markdown;
      }),
      ((R = t.MarkupContent || (t.MarkupContent = {})).is = function (e) {
        var t = e;
        return Z.objectLiteral(e) && M.is(t.kind) && Z.string(t.value);
      }),
      ((P = t.CompletionItemKind || (t.CompletionItemKind = {})).Text = 1),
      (P.Method = 2),
      (P.Function = 3),
      (P.Constructor = 4),
      (P.Field = 5),
      (P.Variable = 6),
      (P.Class = 7),
      (P.Interface = 8),
      (P.Module = 9),
      (P.Property = 10),
      (P.Unit = 11),
      (P.Value = 12),
      (P.Enum = 13),
      (P.Keyword = 14),
      (P.Snippet = 15),
      (P.Color = 16),
      (P.File = 17),
      (P.Reference = 18),
      (P.Folder = 19),
      (P.EnumMember = 20),
      (P.Constant = 21),
      (P.Struct = 22),
      (P.Event = 23),
      (P.Operator = 24),
      (P.TypeParameter = 25),
      ((A = t.InsertTextFormat || (t.InsertTextFormat = {})).PlainText = 1),
      (A.Snippet = 2),
      ((t.CompletionItem || (t.CompletionItem = {})).create = function (e) {
        return {
          label: e,
        };
      }),
      ((t.CompletionList || (t.CompletionList = {})).create = function (e, t) {
        return {
          items: e || [],
          isIncomplete: !!t,
        };
      }),
      ((O = L = t.MarkedString || (t.MarkedString = {})).fromPlainText =
        function (e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
        }),
      (O.is = function (e) {
        var t = e;
        return (
          Z.string(t) ||
          (Z.objectLiteral(t) && Z.string(t.language) && Z.string(t.value))
        );
      }),
      ((t.Hover || (t.Hover = {})).is = function (e) {
        var t = e;
        return (
          Z.objectLiteral(t) &&
          (R.is(t.contents) ||
            L.is(t.contents) ||
            Z.typedArray(t.contents, L.is)) &&
          (void 0 === e.range || r.is(e.range))
        );
      }),
      ((t.ParameterInformation || (t.ParameterInformation = {})).create =
        function (e, t) {
          return t
            ? {
                label: e,
                documentation: t,
              }
            : {
                label: e,
              };
        }),
      ((t.SignatureInformation || (t.SignatureInformation = {})).create =
        function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = {
            label: e,
          };
          return (
            Z.defined(t) && (i.documentation = t),
            Z.defined(n) ? (i.parameters = n) : (i.parameters = []),
            i
          );
        }),
      ((j =
        t.DocumentHighlightKind || (t.DocumentHighlightKind = {})).Text = 1),
      (j.Read = 2),
      (j.Write = 3),
      ((t.DocumentHighlight || (t.DocumentHighlight = {})).create = function (
        e,
        t
      ) {
        var n = {
          range: e,
        };
        return Z.number(t) && (n.kind = t), n;
      }),
      ((W = t.SymbolKind || (t.SymbolKind = {})).File = 1),
      (W.Module = 2),
      (W.Namespace = 3),
      (W.Package = 4),
      (W.Class = 5),
      (W.Method = 6),
      (W.Property = 7),
      (W.Field = 8),
      (W.Constructor = 9),
      (W.Enum = 10),
      (W.Interface = 11),
      (W.Function = 12),
      (W.Variable = 13),
      (W.Constant = 14),
      (W.String = 15),
      (W.Number = 16),
      (W.Boolean = 17),
      (W.Array = 18),
      (W.Object = 19),
      (W.Key = 20),
      (W.Null = 21),
      (W.EnumMember = 22),
      (W.Struct = 23),
      (W.Event = 24),
      (W.Operator = 25),
      (W.TypeParameter = 26),
      ((t.SymbolInformation || (t.SymbolInformation = {})).create = function (
        e,
        t,
        n,
        r,
        i
      ) {
        var o = {
          name: e,
          kind: t,
          location: {
            uri: r,
            range: n,
          },
        };
        return i && (o.containerName = i), o;
      });
    var N,
      q,
      U,
      z,
      B,
      Q,
      $ = function () {};
    (t.DocumentSymbol = $),
      ((N = $ = t.DocumentSymbol || (t.DocumentSymbol = {})).create = function (
        e,
        t,
        n,
        r,
        i,
        o
      ) {
        var a = {
          name: e,
          detail: t,
          kind: n,
          range: r,
          selectionRange: i,
        };
        return void 0 !== o && (a.children = o), a;
      }),
      (N.is = function (e) {
        var t = e;
        return (
          t &&
          Z.string(t.name) &&
          Z.string(t.detail) &&
          Z.number(t.kind) &&
          r.is(t.range) &&
          r.is(t.selectionRange) &&
          (void 0 === t.deprecated || Z.boolean(t.deprecated)) &&
          (void 0 === t.children || Array.isArray(t.children))
        );
      }),
      (t.DocumentSymbol = $),
      ((q = t.CodeActionKind || (t.CodeActionKind = {})).QuickFix = 'quickfix'),
      (q.Refactor = 'refactor'),
      (q.RefactorExtract = 'refactor.extract'),
      (q.RefactorInline = 'refactor.inline'),
      (q.RefactorRewrite = 'refactor.rewrite'),
      (q.Source = 'source'),
      (q.SourceOrganizeImports = 'source.organizeImports'),
      ((U = t.CodeActionContext || (t.CodeActionContext = {})).create =
        function (e, t) {
          var n = {
            diagnostics: e,
          };
          return null != t && (n.only = t), n;
        }),
      (U.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          Z.typedArray(t.diagnostics, v.is) &&
          (void 0 === t.only || Z.typedArray(t.only, Z.string))
        );
      }),
      ((z = t.CodeAction || (t.CodeAction = {})).create = function (e, t, n) {
        var r = {
          title: e,
        };
        return (
          b.is(t) ? (r.command = t) : (r.edit = t),
          void 0 !== n && (r.kind = n),
          r
        );
      }),
      (z.is = function (e) {
        var t = e;
        return (
          t &&
          Z.string(t.title) &&
          (void 0 === t.diagnostics || Z.typedArray(t.diagnostics, v.is)) &&
          (void 0 === t.kind || Z.string(t.kind)) &&
          (void 0 !== t.edit || void 0 !== t.command) &&
          (void 0 === t.command || b.is(t.command)) &&
          (void 0 === t.edit || w.is(t.edit))
        );
      }),
      ((B = t.CodeLens || (t.CodeLens = {})).create = function (e, t) {
        var n = {
          range: e,
        };
        return Z.defined(t) && (n.data = t), n;
      }),
      (B.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          r.is(t.range) &&
          (Z.undefined(t.command) || b.is(t.command))
        );
      }),
      ((Q = t.FormattingOptions || (t.FormattingOptions = {})).create =
        function (e, t) {
          return {
            tabSize: e,
            insertSpaces: t,
          };
        }),
      (Q.is = function (e) {
        var t = e;
        return Z.defined(t) && Z.number(t.tabSize) && Z.boolean(t.insertSpaces);
      });
    var G,
      J,
      X,
      Y = function () {};
    (t.DocumentLink = Y),
      ((G = Y = t.DocumentLink || (t.DocumentLink = {})).create = function (
        e,
        t,
        n
      ) {
        return {
          range: e,
          target: t,
          data: n,
        };
      }),
      (G.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          r.is(t.range) &&
          (Z.undefined(t.target) || Z.string(t.target))
        );
      }),
      (t.DocumentLink = Y),
      (t.EOL = ['\n', '\r\n', '\r']),
      ((J = t.TextDocument || (t.TextDocument = {})).create = function (
        e,
        t,
        n,
        r
      ) {
        return new ne(e, t, n, r);
      }),
      (J.is = function (e) {
        var t = e;
        return !!(
          Z.defined(t) &&
          Z.string(t.uri) &&
          (Z.undefined(t.languageId) || Z.string(t.languageId)) &&
          Z.number(t.lineCount) &&
          Z.func(t.getText) &&
          Z.func(t.positionAt) &&
          Z.func(t.offsetAt)
        );
      }),
      (J.applyEdits = function (e, t) {
        for (
          var n = e.getText(),
            r = (function e(t, n) {
              if (t.length <= 1) return t;
              var r = (t.length / 2) | 0,
                i = t.slice(0, r),
                o = t.slice(r);
              e(i, n), e(o, n);
              for (var a = 0, u = 0, s = 0; a < i.length && u < o.length; ) {
                var c = n(i[a], o[u]);
                t[s++] = c <= 0 ? i[a++] : o[u++];
              }
              for (; a < i.length; ) t[s++] = i[a++];
              for (; u < o.length; ) t[s++] = o[u++];
              return t;
            })(t, function (e, t) {
              var n = e.range.start.line - t.range.start.line;
              return 0 === n
                ? e.range.start.character - t.range.start.character
                : n;
            }),
            i = n.length,
            o = r.length - 1;
          0 <= o;
          o--
        ) {
          var a = r[o],
            u = e.offsetAt(a.range.start),
            s = e.offsetAt(a.range.end);
          if (!(s <= i)) throw new Error('Ovelapping edit');
          (n = n.substring(0, u) + a.newText + n.substring(s, n.length)),
            (i = u);
        }
        return n;
      }),
      ((X =
        t.TextDocumentSaveReason ||
        (t.TextDocumentSaveReason = {})).Manual = 1),
      (X.AfterDelay = 2),
      (X.FocusOut = 3);
    var Z,
      ee,
      te,
      ne = (function () {
        function e(e, t, n, r) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = null);
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function () {
              return this._uri;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function () {
              return this._languageId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function () {
              return this._version;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getText = function (e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function (e, t) {
            (this._content = e.text),
              (this._version = t),
              (this._lineOffsets = null);
          }),
          (e.prototype.getLineOffsets = function () {
            if (null === this._lineOffsets) {
              for (
                var e = [], t = this._content, n = !0, r = 0;
                r < t.length;
                r++
              ) {
                n && (e.push(r), (n = !1));
                var i = t.charAt(r);
                (n = '\r' === i || '\n' === i),
                  '\r' === i &&
                    r + 1 < t.length &&
                    '\n' === t.charAt(r + 1) &&
                    r++;
              }
              n && 0 < t.length && e.push(t.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function (e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length;
            if (0 === r) return a.create(0, e);
            for (; n < r; ) {
              var i = Math.floor((n + r) / 2);
              t[i] > e ? (r = i) : (n = i + 1);
            }
            var o = n - 1;
            return a.create(o, e - t[o]);
          }),
          (e.prototype.offsetAt = function (e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, r), n);
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function () {
              return this.getLineOffsets().length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    (ee = Z || (Z = {})),
      (te = Object.prototype.toString),
      (ee.defined = function (e) {
        return void 0 !== e;
      }),
      (ee.undefined = function (e) {
        return void 0 === e;
      }),
      (ee.boolean = function (e) {
        return !0 === e || !1 === e;
      }),
      (ee.string = function (e) {
        return '[object String]' === te.call(e);
      }),
      (ee.number = function (e) {
        return '[object Number]' === te.call(e);
      }),
      (ee.func = function (e) {
        return '[object Function]' === te.call(e);
      }),
      (ee.objectLiteral = function (e) {
        return null !== e && 'object' == typeof e;
      }),
      (ee.typedArray = function (e, t) {
        return Array.isArray(e) && e.every(t);
      });
  }),
  define(
    'vscode-languageserver-types',
    ['vscode-languageserver-types/main'],
    function (e) {
      return e;
    }
  ),
  define(
    'vs/language/html/languageFeatures',
    ['require', 'exports', 'vscode-languageserver-types'],
    function (e, t, i) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var n = monaco.Range,
        r = (function () {
          function e(e, t, n) {
            var r = this;
            (this._languageId = e),
              (this._worker = t),
              (this._disposables = []),
              (this._listener = Object.create(null));
            var i = function (e) {
                var t,
                  n = e.getModeId();
                n === r._languageId &&
                  ((r._listener[e.uri.toString()] = e.onDidChangeContent(
                    function () {
                      clearTimeout(t),
                        (t = setTimeout(function () {
                          return r._doValidate(e.uri, n);
                        }, 500));
                    }
                  )),
                  r._doValidate(e.uri, n));
              },
              o = function (e) {
                monaco.editor.setModelMarkers(e, r._languageId, []);
                var t = e.uri.toString(),
                  n = r._listener[t];
                n && (n.dispose(), delete r._listener[t]);
              };
            this._disposables.push(monaco.editor.onDidCreateModel(i)),
              this._disposables.push(
                monaco.editor.onWillDisposeModel(function (e) {
                  o(e);
                })
              ),
              this._disposables.push(
                monaco.editor.onDidChangeModelLanguage(function (e) {
                  o(e.model), i(e.model);
                })
              ),
              this._disposables.push(
                n.onDidChange(function (e) {
                  monaco.editor.getModels().forEach(function (e) {
                    e.getModeId() === r._languageId && (o(e), i(e));
                  });
                })
              ),
              this._disposables.push({
                dispose: function () {
                  for (var e in r._listener) r._listener[e].dispose();
                },
              }),
              monaco.editor.getModels().forEach(i);
          }
          return (
            (e.prototype.dispose = function () {
              this._disposables.forEach(function (e) {
                return e && e.dispose();
              }),
                (this._disposables = []);
            }),
            (e.prototype._doValidate = function (n, r) {
              this._worker(n)
                .then(function (e) {
                  return e.doValidation(n.toString()).then(function (e) {
                    var t = e.map(function (e) {
                      return (
                        (n =
                          'number' == typeof (t = e).code
                            ? String(t.code)
                            : t.code),
                        {
                          severity: (function (e) {
                            switch (e) {
                              case i.DiagnosticSeverity.Error:
                                return monaco.MarkerSeverity.Error;
                              case i.DiagnosticSeverity.Warning:
                                return monaco.MarkerSeverity.Warning;
                              case i.DiagnosticSeverity.Information:
                                return monaco.MarkerSeverity.Info;
                              case i.DiagnosticSeverity.Hint:
                                return monaco.MarkerSeverity.Hint;
                              default:
                                return monaco.MarkerSeverity.Info;
                            }
                          })(t.severity),
                          startLineNumber: t.range.start.line + 1,
                          startColumn: t.range.start.character + 1,
                          endLineNumber: t.range.end.line + 1,
                          endColumn: t.range.end.character + 1,
                          message: t.message,
                          code: n,
                          source: t.source,
                        }
                      );
                      var t, n;
                    });
                    monaco.editor.setModelMarkers(
                      monaco.editor.getModel(n),
                      r,
                      t
                    );
                  });
                })
                .then(void 0, function (e) {
                  console.error(e);
                });
            }),
            e
          );
        })();

      function o(e) {
        if (e)
          return {
            character: e.column - 1,
            line: e.lineNumber - 1,
          };
      }

      function a(e) {
        if (e)
          return {
            start: o(e.getStartPosition()),
            end: o(e.getEndPosition()),
          };
      }

      function u(e) {
        if (e)
          return new n(
            e.start.line + 1,
            e.start.character + 1,
            e.end.line + 1,
            e.end.character + 1
          );
      }

      function s(e) {
        var t = monaco.languages.CompletionItemKind;
        switch (e) {
          case i.CompletionItemKind.Text:
            return t.Text;
          case i.CompletionItemKind.Method:
            return t.Method;
          case i.CompletionItemKind.Function:
            return t.Function;
          case i.CompletionItemKind.Constructor:
            return t.Constructor;
          case i.CompletionItemKind.Field:
            return t.Field;
          case i.CompletionItemKind.Variable:
            return t.Variable;
          case i.CompletionItemKind.Class:
            return t.Class;
          case i.CompletionItemKind.Interface:
            return t.Interface;
          case i.CompletionItemKind.Module:
            return t.Module;
          case i.CompletionItemKind.Property:
            return t.Property;
          case i.CompletionItemKind.Unit:
            return t.Unit;
          case i.CompletionItemKind.Value:
            return t.Value;
          case i.CompletionItemKind.Enum:
            return t.Enum;
          case i.CompletionItemKind.Keyword:
            return t.Keyword;
          case i.CompletionItemKind.Snippet:
            return t.Snippet;
          case i.CompletionItemKind.Color:
            return t.Color;
          case i.CompletionItemKind.File:
            return t.File;
          case i.CompletionItemKind.Reference:
            return t.Reference;
        }
        return t.Property;
      }

      function c(e) {
        if (e)
          return {
            range: u(e.range),
            text: e.newText,
          };
      }
      t.DiagnosticsAdapter = r;
      var d = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          Object.defineProperty(e.prototype, 'triggerCharacters', {
            get: function () {
              return ['.', ':', '<', '"', '=', '/'];
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.provideCompletionItems = function (e, t, n) {
            e.getWordUntilPosition(t);
            var r = e.uri;
            return v(
              n,
              this._worker(r)
                .then(function (e) {
                  return e.doComplete(r.toString(), o(t));
                })
                .then(function (e) {
                  if (e) {
                    var t = e.items.map(function (e) {
                      var t = {
                        label: e.label,
                        insertText: e.insertText,
                        sortText: e.sortText,
                        filterText: e.filterText,
                        documentation: e.documentation,
                        detail: e.detail,
                        kind: s(e.kind),
                      };
                      return (
                        e.textEdit &&
                          ((t.range = u(e.textEdit.range)),
                          (t.insertText = e.textEdit.newText)),
                        e.insertTextFormat === i.InsertTextFormat.Snippet &&
                          (t.insertText = {
                            value: t.insertText,
                          }),
                        t
                      );
                    });
                    return {
                      isIncomplete: e.isIncomplete,
                      items: t,
                    };
                  }
                })
            );
          }),
          e
        );
      })();
      t.CompletionAdapter = d;
      var l = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentHighlights = function (e, t, n) {
            var r = e.uri;
            return v(
              n,
              this._worker(r)
                .then(function (e) {
                  return e.findDocumentHighlights(r.toString(), o(t));
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      return {
                        range: u(e.range),
                        kind: (function (e) {
                          var t = monaco.languages.DocumentHighlightKind;
                          switch (e) {
                            case i.DocumentHighlightKind.Read:
                              return t.Read;
                            case i.DocumentHighlightKind.Write:
                              return t.Write;
                            case i.DocumentHighlightKind.Text:
                              return t.Text;
                          }
                          return t.Text;
                        })(e.kind),
                      };
                    });
                })
            );
          }),
          e
        );
      })();
      t.DocumentHighlightAdapter = l;
      var g = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideLinks = function (e, t) {
            var n = e.uri;
            return v(
              t,
              this._worker(n)
                .then(function (e) {
                  return e.findDocumentLinks(n.toString());
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      return {
                        range: u(e.range),
                        url: e.target,
                      };
                    });
                })
            );
          }),
          e
        );
      })();

      function f(e) {
        return {
          tabSize: e.tabSize,
          insertSpaces: e.insertSpaces,
        };
      }
      t.DocumentLinkAdapter = g;
      var m = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentFormattingEdits = function (e, t, n) {
            var r = e.uri;
            return v(
              n,
              this._worker(r).then(function (e) {
                return e.format(r.toString(), null, f(t)).then(function (e) {
                  if (e && 0 !== e.length) return e.map(c);
                });
              })
            );
          }),
          e
        );
      })();
      t.DocumentFormattingEditProvider = m;
      var h = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentRangeFormattingEdits = function (
            e,
            t,
            n,
            r
          ) {
            var i = e.uri;
            return v(
              r,
              this._worker(i).then(function (e) {
                return e.format(i.toString(), a(t), f(n)).then(function (e) {
                  if (e && 0 !== e.length) return e.map(c);
                });
              })
            );
          }),
          e
        );
      })();
      t.DocumentRangeFormattingEditProvider = h;
      var p = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideFoldingRanges = function (e, t, n) {
            var r = e.uri;
            return v(
              n,
              this._worker(r)
                .then(function (e) {
                  return e.provideFoldingRanges(r.toString(), t);
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      var t = {
                        start: e.startLine + 1,
                        end: e.endLine + 1,
                      };
                      return (
                        void 0 !== e.kind &&
                          (t.kind = (function (e) {
                            switch (e) {
                              case i.FoldingRangeKind.Comment:
                                return monaco.languages.FoldingRangeKind
                                  .Comment;
                              case i.FoldingRangeKind.Imports:
                                return monaco.languages.FoldingRangeKind
                                  .Imports;
                              case i.FoldingRangeKind.Region:
                                return monaco.languages.FoldingRangeKind.Region;
                            }
                            return;
                          })(e.kind)),
                        t
                      );
                    });
                })
            );
          }),
          e
        );
      })();

      function v(e, t) {
        return (
          t.cancel &&
            e.onCancellationRequested(function () {
              return t.cancel();
            }),
          t
        );
      }
      t.FoldingRangeAdapter = p;
    }
  ),
  define(
    'vs/language/html/htmlMode',
    ['require', 'exports', './workerManager', './languageFeatures'],
    function (e, t, i, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.setupMode = function (e) {
          var n = new i.WorkerManager(e),
            t = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return n.getLanguageServiceWorker.apply(n, e);
            },
            r = e.languageId;
          monaco.languages.registerCompletionItemProvider(
            r,
            new o.CompletionAdapter(t)
          ),
            monaco.languages.registerDocumentHighlightProvider(
              r,
              new o.DocumentHighlightAdapter(t)
            ),
            monaco.languages.registerLinkProvider(
              r,
              new o.DocumentLinkAdapter(t)
            ),
            monaco.languages.registerFoldingRangeProvider(
              r,
              new o.FoldingRangeAdapter(t)
            ),
            'html' === r &&
              (monaco.languages.registerDocumentFormattingEditProvider(
                r,
                new o.DocumentFormattingEditProvider(t)
              ),
              monaco.languages.registerDocumentRangeFormattingEditProvider(
                r,
                new o.DocumentRangeFormattingEditProvider(t)
              ),
              new o.DiagnosticsAdapter(r, t, e));
        });
    }
  );
