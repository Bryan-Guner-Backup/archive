/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 2.2.0(370169f666a52e1b91623841799be4eab9204094)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define(
  'vs/language/json/workerManager',
  ['require', 'exports'],
  function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var c = monaco.Promise,
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
                  moduleId: 'vs/language/json/jsonWorker',
                  label: this._defaults.languageId,
                  createData: {
                    languageSettings: this._defaults.diagnosticsOptions,
                    languageId: this._defaults.languageId,
                  },
                })),
                (this._client = this._worker.getProxy())),
              this._client
            );
          }),
          (e.prototype.getLanguageServiceWorker = function () {
            for (
              var t, e, n, r, o, i = this, a = [], s = 0;
              s < arguments.length;
              s++
            )
              a[s] = arguments[s];
            return (
              (e = this._getClient()
                .then(function (e) {
                  t = e;
                })
                .then(function (e) {
                  return i._worker.withSyncedResources(a);
                })
                .then(function (e) {
                  return t;
                })),
              (o = new c(
                function (e, t) {
                  (n = e), (r = t);
                },
                function () {}
              )),
              e.then(n, r),
              o
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
    var a, n, r, o, i, s, c, u, f, d, l, g, h, p, m, v, y, b, k, C, _, E, T, w;
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
      ((o = r = t.Range || (t.Range = {})).create = function (e, t, n, r) {
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
      (o.is = function (e) {
        var t = e;
        return Z.objectLiteral(t) && a.is(t.start) && a.is(t.end);
      }),
      ((s = i = t.Location || (t.Location = {})).create = function (e, t) {
        return {
          uri: e,
          range: t,
        };
      }),
      (s.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          r.is(t.range) &&
          (Z.string(t.uri) || Z.undefined(t.uri))
        );
      }),
      ((u = c = t.Color || (t.Color = {})).create = function (e, t, n, r) {
        return {
          red: e,
          green: t,
          blue: n,
          alpha: r,
        };
      }),
      (u.is = function (e) {
        var t = e;
        return (
          Z.number(t.red) &&
          Z.number(t.green) &&
          Z.number(t.blue) &&
          Z.number(t.alpha)
        );
      }),
      ((f = t.ColorInformation || (t.ColorInformation = {})).create = function (
        e,
        t
      ) {
        return {
          range: e,
          color: t,
        };
      }),
      (f.is = function (e) {
        var t = e;
        return r.is(t.range) && c.is(t.color);
      }),
      ((d = t.ColorPresentation || (t.ColorPresentation = {})).create =
        function (e, t, n) {
          return {
            label: e,
            textEdit: t,
            additionalTextEdits: n,
          };
        }),
      (d.is = function (e) {
        var t = e;
        return (
          Z.string(t.label) &&
          (Z.undefined(t.textEdit) || C.is(t)) &&
          (Z.undefined(t.additionalTextEdits) ||
            Z.typedArray(t.additionalTextEdits, C.is))
        );
      }),
      ((l = t.FoldingRangeKind || (t.FoldingRangeKind = {})).Comment =
        'comment'),
      (l.Imports = 'imports'),
      (l.Region = 'region'),
      ((g = t.FoldingRange || (t.FoldingRange = {})).create = function (
        e,
        t,
        n,
        r,
        o
      ) {
        var i = {
          startLine: e,
          endLine: t,
        };
        return (
          Z.defined(n) && (i.startCharacter = n),
          Z.defined(r) && (i.endCharacter = r),
          Z.defined(o) && (i.kind = o),
          i
        );
      }),
      (g.is = function (e) {
        var t = e;
        return (
          Z.number(t.startLine) &&
          Z.number(t.startLine) &&
          (Z.undefined(t.startCharacter) || Z.number(t.startCharacter)) &&
          (Z.undefined(t.endCharacter) || Z.number(t.endCharacter)) &&
          (Z.undefined(t.kind) || Z.string(t.kind))
        );
      }),
      ((p = h =
        t.DiagnosticRelatedInformation ||
        (t.DiagnosticRelatedInformation = {})).create = function (e, t) {
        return {
          location: e,
          message: t,
        };
      }),
      (p.is = function (e) {
        var t = e;
        return Z.defined(t) && i.is(t.location) && Z.string(t.message);
      }),
      ((m = t.DiagnosticSeverity || (t.DiagnosticSeverity = {})).Error = 1),
      (m.Warning = 2),
      (m.Information = 3),
      (m.Hint = 4),
      ((y = v = t.Diagnostic || (t.Diagnostic = {})).create = function (
        e,
        t,
        n,
        r,
        o,
        i
      ) {
        var a = {
          range: e,
          message: t,
        };
        return (
          Z.defined(n) && (a.severity = n),
          Z.defined(r) && (a.code = r),
          Z.defined(o) && (a.source = o),
          Z.defined(i) && (a.relatedInformation = i),
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
            Z.typedArray(t.relatedInformation, h.is))
        );
      }),
      ((k = b = t.Command || (t.Command = {})).create = function (e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = {
          title: e,
          command: t,
        };
        return Z.defined(n) && 0 < n.length && (o.arguments = n), o;
      }),
      (k.is = function (e) {
        var t = e;
        return Z.defined(t) && Z.string(t.title) && Z.string(t.command);
      }),
      ((_ = C = t.TextEdit || (t.TextEdit = {})).replace = function (e, t) {
        return {
          range: e,
          newText: t,
        };
      }),
      (_.insert = function (e, t) {
        return {
          range: {
            start: e,
            end: e,
          },
          newText: t,
        };
      }),
      (_.del = function (e) {
        return {
          range: e,
          newText: '',
        };
      }),
      (_.is = function (e) {
        var t = e;
        return Z.objectLiteral(t) && Z.string(t.newText) && r.is(t.range);
      }),
      ((T = E = t.TextDocumentEdit || (t.TextDocumentEdit = {})).create =
        function (e, t) {
          return {
            textDocument: e,
            edits: t,
          };
        }),
      (T.is = function (e) {
        var t = e;
        return Z.defined(t) && A.is(t.textDocument) && Array.isArray(t.edits);
      }),
      ((w = t.WorkspaceEdit || (t.WorkspaceEdit = {})).is = function (e) {
        var t = e;
        return (
          t &&
          (void 0 !== t.changes || void 0 !== t.documentChanges) &&
          (void 0 === t.documentChanges ||
            Z.typedArray(t.documentChanges, E.is))
        );
      });
    var S,
      A,
      x,
      O,
      I,
      M,
      j,
      K,
      L,
      P,
      D,
      N,
      R,
      F,
      V = (function () {
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
      W = (function () {
        function e(n) {
          var r = this;
          (this._textEditChanges = Object.create(null)),
            n &&
              ((this._workspaceEdit = n).documentChanges
                ? n.documentChanges.forEach(function (e) {
                    var t = new V(e.edits);
                    r._textEditChanges[e.textDocument.uri] = t;
                  })
                : n.changes &&
                  Object.keys(n.changes).forEach(function (e) {
                    var t = new V(n.changes[e]);
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
            if (A.is(e)) {
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
                  edits: (o = []),
                };
                this._workspaceEdit.documentChanges.push(n),
                  (r = new V(o)),
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
              var o = [];
              (this._workspaceEdit.changes[e] = o),
                (r = new V(o)),
                (this._textEditChanges[e] = r);
            }
            return r;
          }),
          e
        );
      })();
    (t.WorkspaceChange = W),
      ((S =
        t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {})).create =
        function (e) {
          return {
            uri: e,
          };
        }),
      (S.is = function (e) {
        var t = e;
        return Z.defined(t) && Z.string(t.uri);
      }),
      ((x = A =
        t.VersionedTextDocumentIdentifier ||
        (t.VersionedTextDocumentIdentifier = {})).create = function (e, t) {
        return {
          uri: e,
          version: t,
        };
      }),
      (x.is = function (e) {
        var t = e;
        return Z.defined(t) && Z.string(t.uri) && Z.number(t.version);
      }),
      ((O = t.TextDocumentItem || (t.TextDocumentItem = {})).create = function (
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
      (O.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          Z.string(t.uri) &&
          Z.string(t.languageId) &&
          Z.number(t.version) &&
          Z.string(t.text)
        );
      }),
      ((M = I = t.MarkupKind || (t.MarkupKind = {})).PlainText = 'plaintext'),
      (M.Markdown = 'markdown'),
      ((j = I = t.MarkupKind || (t.MarkupKind = {})).is = function (e) {
        var t = e;
        return t === j.PlainText || t === j.Markdown;
      }),
      ((K = t.MarkupContent || (t.MarkupContent = {})).is = function (e) {
        var t = e;
        return Z.objectLiteral(e) && I.is(t.kind) && Z.string(t.value);
      }),
      ((L = t.CompletionItemKind || (t.CompletionItemKind = {})).Text = 1),
      (L.Method = 2),
      (L.Function = 3),
      (L.Constructor = 4),
      (L.Field = 5),
      (L.Variable = 6),
      (L.Class = 7),
      (L.Interface = 8),
      (L.Module = 9),
      (L.Property = 10),
      (L.Unit = 11),
      (L.Value = 12),
      (L.Enum = 13),
      (L.Keyword = 14),
      (L.Snippet = 15),
      (L.Color = 16),
      (L.File = 17),
      (L.Reference = 18),
      (L.Folder = 19),
      (L.EnumMember = 20),
      (L.Constant = 21),
      (L.Struct = 22),
      (L.Event = 23),
      (L.Operator = 24),
      (L.TypeParameter = 25),
      ((P = t.InsertTextFormat || (t.InsertTextFormat = {})).PlainText = 1),
      (P.Snippet = 2),
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
      ((N = D = t.MarkedString || (t.MarkedString = {})).fromPlainText =
        function (e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
        }),
      (N.is = function (e) {
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
          (K.is(t.contents) ||
            D.is(t.contents) ||
            Z.typedArray(t.contents, D.is)) &&
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
          var o = {
            label: e,
          };
          return (
            Z.defined(t) && (o.documentation = t),
            Z.defined(n) ? (o.parameters = n) : (o.parameters = []),
            o
          );
        }),
      ((R =
        t.DocumentHighlightKind || (t.DocumentHighlightKind = {})).Text = 1),
      (R.Read = 2),
      (R.Write = 3),
      ((t.DocumentHighlight || (t.DocumentHighlight = {})).create = function (
        e,
        t
      ) {
        var n = {
          range: e,
        };
        return Z.number(t) && (n.kind = t), n;
      }),
      ((F = t.SymbolKind || (t.SymbolKind = {})).File = 1),
      (F.Module = 2),
      (F.Namespace = 3),
      (F.Package = 4),
      (F.Class = 5),
      (F.Method = 6),
      (F.Property = 7),
      (F.Field = 8),
      (F.Constructor = 9),
      (F.Enum = 10),
      (F.Interface = 11),
      (F.Function = 12),
      (F.Variable = 13),
      (F.Constant = 14),
      (F.String = 15),
      (F.Number = 16),
      (F.Boolean = 17),
      (F.Array = 18),
      (F.Object = 19),
      (F.Key = 20),
      (F.Null = 21),
      (F.EnumMember = 22),
      (F.Struct = 23),
      (F.Event = 24),
      (F.Operator = 25),
      (F.TypeParameter = 26),
      ((t.SymbolInformation || (t.SymbolInformation = {})).create = function (
        e,
        t,
        n,
        r,
        o
      ) {
        var i = {
          name: e,
          kind: t,
          location: {
            uri: r,
            range: n,
          },
        };
        return o && (i.containerName = o), i;
      });
    var U,
      q,
      B,
      H,
      z,
      J,
      Y = function () {};
    (t.DocumentSymbol = Y),
      ((U = Y = t.DocumentSymbol || (t.DocumentSymbol = {})).create = function (
        e,
        t,
        n,
        r,
        o,
        i
      ) {
        var a = {
          name: e,
          detail: t,
          kind: n,
          range: r,
          selectionRange: o,
        };
        return void 0 !== i && (a.children = i), a;
      }),
      (U.is = function (e) {
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
      (t.DocumentSymbol = Y),
      ((q = t.CodeActionKind || (t.CodeActionKind = {})).QuickFix = 'quickfix'),
      (q.Refactor = 'refactor'),
      (q.RefactorExtract = 'refactor.extract'),
      (q.RefactorInline = 'refactor.inline'),
      (q.RefactorRewrite = 'refactor.rewrite'),
      (q.Source = 'source'),
      (q.SourceOrganizeImports = 'source.organizeImports'),
      ((B = t.CodeActionContext || (t.CodeActionContext = {})).create =
        function (e, t) {
          var n = {
            diagnostics: e,
          };
          return null != t && (n.only = t), n;
        }),
      (B.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          Z.typedArray(t.diagnostics, v.is) &&
          (void 0 === t.only || Z.typedArray(t.only, Z.string))
        );
      }),
      ((H = t.CodeAction || (t.CodeAction = {})).create = function (e, t, n) {
        var r = {
          title: e,
        };
        return (
          b.is(t) ? (r.command = t) : (r.edit = t),
          void 0 !== n && (r.kind = n),
          r
        );
      }),
      (H.is = function (e) {
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
      ((z = t.CodeLens || (t.CodeLens = {})).create = function (e, t) {
        var n = {
          range: e,
        };
        return Z.defined(t) && (n.data = t), n;
      }),
      (z.is = function (e) {
        var t = e;
        return (
          Z.defined(t) &&
          r.is(t.range) &&
          (Z.undefined(t.command) || b.is(t.command))
        );
      }),
      ((J = t.FormattingOptions || (t.FormattingOptions = {})).create =
        function (e, t) {
          return {
            tabSize: e,
            insertSpaces: t,
          };
        }),
      (J.is = function (e) {
        var t = e;
        return Z.defined(t) && Z.number(t.tabSize) && Z.boolean(t.insertSpaces);
      });
    var G,
      $,
      Q,
      X = function () {};
    (t.DocumentLink = X),
      ((G = X = t.DocumentLink || (t.DocumentLink = {})).create = function (
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
      (t.DocumentLink = X),
      (t.EOL = ['\n', '\r\n', '\r']),
      (($ = t.TextDocument || (t.TextDocument = {})).create = function (
        e,
        t,
        n,
        r
      ) {
        return new ne(e, t, n, r);
      }),
      ($.is = function (e) {
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
      ($.applyEdits = function (e, t) {
        for (
          var n = e.getText(),
            r = (function e(t, n) {
              if (t.length <= 1) return t;
              var r = (t.length / 2) | 0,
                o = t.slice(0, r),
                i = t.slice(r);
              e(o, n), e(i, n);
              for (var a = 0, s = 0, c = 0; a < o.length && s < i.length; ) {
                var u = n(o[a], i[s]);
                t[c++] = u <= 0 ? o[a++] : i[s++];
              }
              for (; a < o.length; ) t[c++] = o[a++];
              for (; s < i.length; ) t[c++] = i[s++];
              return t;
            })(t, function (e, t) {
              var n = e.range.start.line - t.range.start.line;
              return 0 === n
                ? e.range.start.character - t.range.start.character
                : n;
            }),
            o = n.length,
            i = r.length - 1;
          0 <= i;
          i--
        ) {
          var a = r[i],
            s = e.offsetAt(a.range.start),
            c = e.offsetAt(a.range.end);
          if (!(c <= o)) throw new Error('Ovelapping edit');
          (n = n.substring(0, s) + a.newText + n.substring(c, n.length)),
            (o = s);
        }
        return n;
      }),
      ((Q =
        t.TextDocumentSaveReason ||
        (t.TextDocumentSaveReason = {})).Manual = 1),
      (Q.AfterDelay = 2),
      (Q.FocusOut = 3);
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
                var o = t.charAt(r);
                (n = '\r' === o || '\n' === o),
                  '\r' === o &&
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
              var o = Math.floor((n + r) / 2);
              t[o] > e ? (r = o) : (n = o + 1);
            }
            var i = n - 1;
            return a.create(i, e - t[i]);
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
    'vs/language/json/languageFeatures',
    ['require', 'exports', 'vscode-languageserver-types'],
    function (e, t, i) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      monaco.Uri;
      var n = monaco.Range,
        r = (function () {
          function e(e, t, n) {
            var r = this;
            (this._languageId = e),
              (this._worker = t),
              (this._disposables = []),
              (this._listener = Object.create(null));
            var o = function (e) {
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
              i = function (e) {
                monaco.editor.setModelMarkers(e, r._languageId, []);
                var t = e.uri.toString(),
                  n = r._listener[t];
                n && (n.dispose(), delete r._listener[t]);
              };
            this._disposables.push(monaco.editor.onDidCreateModel(o)),
              this._disposables.push(
                monaco.editor.onWillDisposeModel(function (e) {
                  i(e), r._resetSchema(e.uri);
                })
              ),
              this._disposables.push(
                monaco.editor.onDidChangeModelLanguage(function (e) {
                  i(e.model), o(e.model), r._resetSchema(e.model.uri);
                })
              ),
              this._disposables.push(
                n.onDidChange(function (e) {
                  monaco.editor.getModels().forEach(function (e) {
                    e.getModeId() === r._languageId && (i(e), o(e));
                  });
                })
              ),
              this._disposables.push({
                dispose: function () {
                  for (var e in (monaco.editor.getModels().forEach(i),
                  r._listener))
                    r._listener[e].dispose();
                },
              }),
              monaco.editor.getModels().forEach(o);
          }
          return (
            (e.prototype.dispose = function () {
              this._disposables.forEach(function (e) {
                return e && e.dispose();
              }),
                (this._disposables = []);
            }),
            (e.prototype._resetSchema = function (t) {
              this._worker().then(function (e) {
                e.resetSchema(t.toString());
              });
            }),
            (e.prototype._doValidate = function (r, o) {
              this._worker(r)
                .then(function (e) {
                  return e.doValidation(r.toString()).then(function (e) {
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
                      }),
                      n = monaco.editor.getModel(r);
                    n.getModeId() === o &&
                      monaco.editor.setModelMarkers(n, o, t);
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
            start: {
              line: e.startLineNumber - 1,
              character: e.startColumn - 1,
            },
            end: {
              line: e.endLineNumber - 1,
              character: e.endColumn - 1,
            },
          };
      }

      function s(e) {
        if (e)
          return new n(
            e.start.line + 1,
            e.start.character + 1,
            e.end.line + 1,
            e.end.character + 1
          );
      }

      function c(e) {
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

      function u(e) {
        if (e)
          return {
            range: s(e.range),
            text: e.newText,
          };
      }
      t.DiagnosticsAdapter = r;
      var f = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          Object.defineProperty(e.prototype, 'triggerCharacters', {
            get: function () {
              return [' ', ':'];
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.provideCompletionItems = function (e, t, n) {
            e.getWordUntilPosition(t);
            var r = e.uri;
            return b(
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
                        kind: c(e.kind),
                      };
                      return (
                        e.textEdit &&
                          ((t.range = s(e.textEdit.range)),
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

      function d(e) {
        return 'string' == typeof e
          ? {
              value: e,
            }
          : (t = e) && 'object' == typeof t && 'string' == typeof t.kind
          ? 'plaintext' === e.kind
            ? {
                value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'),
              }
            : {
                value: e.value,
              }
          : {
              value: '```' + e.language + '\n' + e.value + '\n```\n',
            };
        var t;
      }
      t.CompletionAdapter = f;
      var l = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideHover = function (e, t, n) {
            var r = e.uri;
            return b(
              n,
              this._worker(r)
                .then(function (e) {
                  return e.doHover(r.toString(), o(t));
                })
                .then(function (e) {
                  if (e)
                    return {
                      range: s(e.range),
                      contents: (function (e) {
                        if (e) return Array.isArray(e) ? e.map(d) : [d(e)];
                      })(e.contents),
                    };
                })
            );
          }),
          e
        );
      })();
      t.HoverAdapter = l;
      var g = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentSymbols = function (e, t) {
            var n = e.uri;
            return b(
              t,
              this._worker(n)
                .then(function (e) {
                  return e.findDocumentSymbols(n.toString());
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      return {
                        name: e.name,
                        detail: '',
                        containerName: e.containerName,
                        kind: (function (e) {
                          var t = monaco.languages.SymbolKind;
                          switch (e) {
                            case i.SymbolKind.File:
                              return t.Array;
                            case i.SymbolKind.Module:
                              return t.Module;
                            case i.SymbolKind.Namespace:
                              return t.Namespace;
                            case i.SymbolKind.Package:
                              return t.Package;
                            case i.SymbolKind.Class:
                              return t.Class;
                            case i.SymbolKind.Method:
                              return t.Method;
                            case i.SymbolKind.Property:
                              return t.Property;
                            case i.SymbolKind.Field:
                              return t.Field;
                            case i.SymbolKind.Constructor:
                              return t.Constructor;
                            case i.SymbolKind.Enum:
                              return t.Enum;
                            case i.SymbolKind.Interface:
                              return t.Interface;
                            case i.SymbolKind.Function:
                              return t.Function;
                            case i.SymbolKind.Variable:
                              return t.Variable;
                            case i.SymbolKind.Constant:
                              return t.Constant;
                            case i.SymbolKind.String:
                              return t.String;
                            case i.SymbolKind.Number:
                              return t.Number;
                            case i.SymbolKind.Boolean:
                              return t.Boolean;
                            case i.SymbolKind.Array:
                              return t.Array;
                          }
                          return t.Function;
                        })(e.kind),
                        range: s(e.location.range),
                        selectionRange: s(e.location.range),
                      };
                    });
                })
            );
          }),
          e
        );
      })();

      function h(e) {
        return {
          tabSize: e.tabSize,
          insertSpaces: e.insertSpaces,
        };
      }
      t.DocumentSymbolAdapter = g;
      var p = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentFormattingEdits = function (e, t, n) {
            var r = e.uri;
            return b(
              n,
              this._worker(r).then(function (e) {
                return e.format(r.toString(), null, h(t)).then(function (e) {
                  if (e && 0 !== e.length) return e.map(u);
                });
              })
            );
          }),
          e
        );
      })();
      t.DocumentFormattingEditProvider = p;
      var m = (function () {
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
            var o = e.uri;
            return b(
              r,
              this._worker(o).then(function (e) {
                return e.format(o.toString(), a(t), h(n)).then(function (e) {
                  if (e && 0 !== e.length) return e.map(u);
                });
              })
            );
          }),
          e
        );
      })();
      t.DocumentRangeFormattingEditProvider = m;
      var v = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentColors = function (e, t) {
            var n = e.uri;
            return b(
              t,
              this._worker(n)
                .then(function (e) {
                  return e.findDocumentColors(n.toString());
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      return {
                        color: e.color,
                        range: s(e.range),
                      };
                    });
                })
            );
          }),
          (e.prototype.provideColorPresentations = function (e, t, n) {
            var r = e.uri;
            return b(
              n,
              this._worker(r)
                .then(function (e) {
                  return e.getColorPresentations(
                    r.toString(),
                    t.color,
                    a(t.range)
                  );
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      var t = {
                        label: e.label,
                      };
                      return (
                        e.textEdit && (t.textEdit = u(e.textEdit)),
                        e.additionalTextEdits &&
                          (t.additionalTextEdits =
                            e.additionalTextEdits.map(u)),
                        t
                      );
                    });
                })
            );
          }),
          e
        );
      })();
      t.DocumentColorAdapter = v;
      var y = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideFoldingRanges = function (e, t, n) {
            var r = e.uri;
            return b(
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

      function b(e, t) {
        return (
          t.cancel &&
            e.onCancellationRequested(function () {
              return t.cancel();
            }),
          t
        );
      }
      t.FoldingRangeAdapter = y;
    }
  ),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/impl/scanner', ['require', 'exports'], e);
  })(function (e, t) {
    'use strict';

    function l(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (8192 <= e && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      );
    }

    function g(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e;
    }

    function h(e) {
      return 48 <= e && e <= 57;
    }
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      (t.createScanner = function (i, e) {
        void 0 === e && (e = !1);
        var a = 0,
          o = i.length,
          r = '',
          s = 0,
          c = 16,
          u = 0;

        function f(e, t) {
          for (var n = 0, r = 0; n < e || !t; ) {
            var o = i.charCodeAt(a);
            if (48 <= o && o <= 57) r = 16 * r + o - 48;
            else if (65 <= o && o <= 70) r = 16 * r + o - 65 + 10;
            else {
              if (!(97 <= o && o <= 102)) break;
              r = 16 * r + o - 97 + 10;
            }
            a++, n++;
          }
          return n < e && (r = -1), r;
        }

        function t() {
          if (((r = ''), (u = 0), o <= (s = a))) return (s = o), (c = 17);
          var e = i.charCodeAt(a);
          if (l(e)) {
            for (
              ;
              a++, (r += String.fromCharCode(e)), l((e = i.charCodeAt(a)));

            );
            return (c = 15);
          }
          if (g(e))
            return (
              a++,
              (r += String.fromCharCode(e)),
              13 === e && 10 === i.charCodeAt(a) && (a++, (r += '\n')),
              (c = 14)
            );
          switch (e) {
            case 123:
              return a++, (c = 1);
            case 125:
              return a++, (c = 2);
            case 91:
              return a++, (c = 3);
            case 93:
              return a++, (c = 4);
            case 58:
              return a++, (c = 6);
            case 44:
              return a++, (c = 5);
            case 34:
              return (
                a++,
                (r = (function () {
                  for (var e = '', t = a; ; ) {
                    if (o <= a) {
                      (e += i.substring(t, a)), (u = 2);
                      break;
                    }
                    var n = i.charCodeAt(a);
                    if (34 === n) {
                      (e += i.substring(t, a)), a++;
                      break;
                    }
                    if (92 !== n) {
                      if (0 <= n && n <= 31) {
                        if (g(n)) {
                          (e += i.substring(t, a)), (u = 2);
                          break;
                        }
                        u = 6;
                      }
                      a++;
                    } else {
                      if (((e += i.substring(t, a)), o <= ++a)) {
                        u = 2;
                        break;
                      }
                      switch ((n = i.charCodeAt(a++))) {
                        case 34:
                          e += '"';
                          break;
                        case 92:
                          e += '\\';
                          break;
                        case 47:
                          e += '/';
                          break;
                        case 98:
                          e += '\b';
                          break;
                        case 102:
                          e += '\f';
                          break;
                        case 110:
                          e += '\n';
                          break;
                        case 114:
                          e += '\r';
                          break;
                        case 116:
                          e += '\t';
                          break;
                        case 117:
                          var r = f(4, !0);
                          0 <= r ? (e += String.fromCharCode(r)) : (u = 4);
                          break;
                        default:
                          u = 5;
                      }
                      t = a;
                    }
                  }
                  return e;
                })()),
                (c = 10)
              );
            case 47:
              var t = a - 1;
              if (47 === i.charCodeAt(a + 1)) {
                for (a += 2; a < o && !g(i.charCodeAt(a)); ) a++;
                return (r = i.substring(t, a)), (c = 12);
              }
              if (42 === i.charCodeAt(a + 1)) {
                a += 2;
                for (var n = !1; a < o; ) {
                  if (
                    42 === i.charCodeAt(a) &&
                    a + 1 < o &&
                    47 === i.charCodeAt(a + 1)
                  ) {
                    (a += 2), (n = !0);
                    break;
                  }
                  a++;
                }
                return n || (a++, (u = 1)), (r = i.substring(t, a)), (c = 13);
              }
              return (r += String.fromCharCode(e)), a++, (c = 16);
            case 45:
              if (
                ((r += String.fromCharCode(e)),
                ++a === o || !h(i.charCodeAt(a)))
              )
                return (c = 16);
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return (
                (r += (function () {
                  var e = a;
                  if (48 === i.charCodeAt(a)) a++;
                  else for (a++; a < i.length && h(i.charCodeAt(a)); ) a++;
                  if (a < i.length && 46 === i.charCodeAt(a)) {
                    if (!(++a < i.length && h(i.charCodeAt(a))))
                      return (u = 3), i.substring(e, a);
                    for (a++; a < i.length && h(i.charCodeAt(a)); ) a++;
                  }
                  var t = a;
                  if (
                    a < i.length &&
                    (69 === i.charCodeAt(a) || 101 === i.charCodeAt(a))
                  )
                    if (
                      (((++a < i.length && 43 === i.charCodeAt(a)) ||
                        45 === i.charCodeAt(a)) &&
                        a++,
                      a < i.length && h(i.charCodeAt(a)))
                    ) {
                      for (a++; a < i.length && h(i.charCodeAt(a)); ) a++;
                      t = a;
                    } else u = 3;
                  return i.substring(e, t);
                })()),
                (c = 11)
              );
            default:
              for (; a < o && d(e); ) a++, (e = i.charCodeAt(a));
              if (s !== a) {
                switch ((r = i.substring(s, a))) {
                  case 'true':
                    return (c = 8);
                  case 'false':
                    return (c = 9);
                  case 'null':
                    return (c = 7);
                }
                return (c = 16);
              }
              return (r += String.fromCharCode(e)), a++, (c = 16);
          }
        }

        function d(e) {
          if (l(e) || g(e)) return !1;
          switch (e) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
              return !1;
          }
          return !0;
        }
        return {
          setPosition: function (e) {
            (a = e), (r = ''), (c = 16), (u = s = 0);
          },
          getPosition: function () {
            return a;
          },
          scan: e
            ? function () {
                for (var e; 12 <= (e = t()) && e <= 15; );
                return e;
              }
            : t,
          getToken: function () {
            return c;
          },
          getTokenValue: function () {
            return r;
          },
          getTokenOffset: function () {
            return s;
          },
          getTokenLength: function () {
            return a - s;
          },
          getTokenError: function () {
            return u;
          },
        };
      });
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'jsonc-parser/impl/format',
          ['require', 'exports', './scanner'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var T = e('./scanner');

    function w(e, t) {
      for (var n = '', r = 0; r < t; r++) n += e;
      return n;
    }

    function S(e, t) {
      return -1 !== '\r\n'.indexOf(e.charAt(t));
    }
    (t.format = function (r, e, t) {
      var n, o, i, a, s;
      if (e) {
        for (a = e.offset, s = a + e.length, i = a; 0 < i && !S(r, i - 1); )
          i--;
        for (var c = s; c < r.length && !S(r, c); ) c++;
        (o = r.substring(i, c)),
          (n = (function (e, t) {
            for (var n = 0, r = 0, o = t.tabSize || 4; n < e.length; ) {
              var i = e.charAt(n);
              if (' ' === i) r++;
              else {
                if ('\t' !== i) break;
                r += o;
              }
              n++;
            }
            return Math.floor(r / o);
          })(o, t));
      } else (a = i = n = 0), (s = (o = r).length);
      var u,
        f = (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t.charAt(n);
            if ('\r' === r)
              return n + 1 < t.length && '\n' === t.charAt(n + 1)
                ? '\r\n'
                : '\r';
            if ('\n' === r) return '\n';
          }
          return (e && e.eol) || '\n';
        })(t, r),
        d = !1,
        l = 0;
      u = t.insertSpaces ? w(' ', t.tabSize || 4) : '\t';
      var g = T.createScanner(o, !1),
        h = !1;

      function p() {
        return f + w(u, n + l);
      }

      function m() {
        var e = g.scan();
        for (d = !1; 15 === e || 14 === e; )
          (d = d || 14 === e), (e = g.scan());
        return (h = 16 === e || 0 !== g.getTokenError()), e;
      }
      var v = [];

      function y(e, t, n) {
        !h &&
          t < s &&
          a < n &&
          r.substring(t, n) !== e &&
          v.push({
            offset: t,
            length: n - t,
            content: e,
          });
      }
      var b = m();
      if (17 !== b) {
        var k = g.getTokenOffset() + i;
        y(w(u, n), i, k);
      }
      for (; 17 !== b; ) {
        for (
          var C = g.getTokenOffset() + g.getTokenLength() + i, _ = m(), E = '';
          !d && (12 === _ || 13 === _);

        )
          y(' ', C, g.getTokenOffset() + i),
            (C = g.getTokenOffset() + g.getTokenLength() + i),
            (E = 12 === _ ? p() : ''),
            (_ = m());
        if (2 === _) 1 !== b && (l--, (E = p()));
        else if (4 === _) 3 !== b && (l--, (E = p()));
        else {
          switch (b) {
            case 3:
            case 1:
              l++, (E = p());
              break;
            case 5:
            case 12:
              E = p();
              break;
            case 13:
              E = d ? p() : ' ';
              break;
            case 6:
              E = ' ';
              break;
            case 10:
              if (6 === _) {
                E = '';
                break;
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === _ || 13 === _
                ? (E = ' ')
                : 5 !== _ && 17 !== _ && (h = !0);
              break;
            case 16:
              h = !0;
          }
          !d || (12 !== _ && 13 !== _) || (E = p());
        }
        y(E, C, g.getTokenOffset() + i), (b = _);
      }
      return v;
    }),
      (t.isEOL = S);
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'jsonc-parser/impl/parser',
          ['require', 'exports', './scanner'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var C = e('./scanner');

    function s(e, t, n) {
      return (
        void 0 === n && (n = !1),
        (t >= e.offset && t < e.offset + e.length) ||
          (n && t === e.offset + e.length)
      );
    }

    function f(e, t, n) {
      var o = C.createScanner(e, !1);

      function r(e) {
        return e
          ? function () {
              return e(o.getTokenOffset(), o.getTokenLength());
            }
          : function () {
              return !0;
            };
      }

      function i(t) {
        return t
          ? function (e) {
              return t(e, o.getTokenOffset(), o.getTokenLength());
            }
          : function () {
              return !0;
            };
      }
      var a = r(t.onObjectBegin),
        s = i(t.onObjectProperty),
        c = r(t.onObjectEnd),
        u = r(t.onArrayBegin),
        f = r(t.onArrayEnd),
        d = i(t.onLiteralValue),
        l = i(t.onSeparator),
        g = r(t.onComment),
        h = i(t.onError),
        p = n && n.disallowComments,
        m = n && n.allowTrailingComma;

      function v() {
        for (;;) {
          var e = o.scan();
          switch (o.getTokenError()) {
            case 4:
              y(14);
              break;
            case 5:
              y(15);
              break;
            case 3:
              y(13);
              break;
            case 1:
              p || y(11);
              break;
            case 2:
              y(12);
              break;
            case 6:
              y(16);
          }
          switch (e) {
            case 12:
            case 13:
              p ? y(10) : g();
              break;
            case 16:
              y(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }

      function y(e, t, n) {
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = []),
          h(e),
          0 < t.length + n.length)
        )
          for (var r = o.getToken(); 17 !== r; ) {
            if (-1 !== t.indexOf(r)) {
              v();
              break;
            }
            if (-1 !== n.indexOf(r)) break;
            r = v();
          }
      }

      function b(e) {
        var t = o.getTokenValue();
        return e ? d(t) : s(t), v(), !0;
      }

      function k() {
        switch (o.getToken()) {
          case 3:
            return (function () {
              u(), v();
              for (var e = !1; 4 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || y(4, [], []), l(','), v(), 4 === o.getToken() && m))
                    break;
                } else e && y(6, [], []);
                k() || y(4, [], [4, 5]), (e = !0);
              }
              return f(), 4 !== o.getToken() ? y(8, [4], []) : v(), !0;
            })();
          case 1:
            return (function () {
              a(), v();
              for (var e = !1; 2 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || y(4, [], []), l(','), v(), 2 === o.getToken() && m))
                    break;
                } else e && y(6, [], []);
                (10 !== o.getToken()
                  ? (y(3, [], [2, 5]), 0)
                  : (b(!1),
                    6 === o.getToken()
                      ? (l(':'), v(), k() || y(4, [], [2, 5]))
                      : y(5, [], [2, 5]),
                    1)) || y(4, [], [2, 5]),
                  (e = !0);
              }
              return c(), 2 !== o.getToken() ? y(7, [2], []) : v(), !0;
            })();
          case 10:
            return b(!0);
          default:
            return (function () {
              switch (o.getToken()) {
                case 11:
                  var e = 0;
                  try {
                    'number' != typeof (e = JSON.parse(o.getTokenValue())) &&
                      (y(2), (e = 0));
                  } catch (e) {
                    y(2);
                  }
                  d(e);
                  break;
                case 7:
                  d(null);
                  break;
                case 8:
                  d(!0);
                  break;
                case 9:
                  d(!1);
                  break;
                default:
                  return !1;
              }
              return v(), !0;
            })();
        }
      }
      return (
        v(),
        17 === o.getToken() ||
          (k() ? (17 !== o.getToken() && y(9, [], []), !0) : (y(4, [], []), !1))
      );
    }

    function d(e) {
      switch (typeof e) {
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        default:
          return 'null';
      }
    }
    (t.getLocation = function (e, o) {
      var i = [],
        a = new Object(),
        s = void 0,
        c = {
          value: {},
          offset: 0,
          length: 0,
          type: 'object',
          parent: void 0,
        },
        u = !1;

      function r(e, t, n, r) {
        (c.value = e),
          (c.offset = t),
          (c.length = n),
          (c.type = r),
          (c.colonOffset = void 0),
          (s = c);
      }
      try {
        f(e, {
          onObjectBegin: function (e, t) {
            if (o <= e) throw a;
            (s = void 0), (u = e < o), i.push('');
          },
          onObjectProperty: function (e, t, n) {
            if (o < t) throw a;
            if ((r(e, t, n, 'property'), (i[i.length - 1] = e), o <= t + n))
              throw a;
          },
          onObjectEnd: function (e, t) {
            if (o <= e) throw a;
            (s = void 0), i.pop();
          },
          onArrayBegin: function (e, t) {
            if (o <= e) throw a;
            (s = void 0), i.push(0);
          },
          onArrayEnd: function (e, t) {
            if (o <= e) throw a;
            (s = void 0), i.pop();
          },
          onLiteralValue: function (e, t, n) {
            if (o < t) throw a;
            if ((r(e, t, n, d(e)), o <= t + n)) throw a;
          },
          onSeparator: function (e, t, n) {
            if (o <= t) throw a;
            if (':' === e && s && 'property' === s.type)
              (s.colonOffset = t), (u = !1), (s = void 0);
            else if (',' === e) {
              var r = i[i.length - 1];
              'number' == typeof r
                ? (i[i.length - 1] = r + 1)
                : ((u = !0), (i[i.length - 1] = '')),
                (s = void 0);
            }
          },
        });
      } catch (e) {
        if (e !== a) throw e;
      }
      return {
        path: i,
        previousNode: s,
        isAtPropertyKey: u,
        matches: function (e) {
          for (var t = 0, n = 0; t < e.length && n < i.length; n++)
            if (e[t] === i[n] || '*' === e[t]) t++;
            else if ('**' !== e[t]) return !1;
          return t === e.length;
        },
      };
    }),
      (t.parse = function (e, r, t) {
        void 0 === r && (r = []);
        var n = null,
          o = [],
          i = [];

        function a(e) {
          Array.isArray(o) ? o.push(e) : n && (o[n] = e);
        }
        return (
          f(
            e,
            {
              onObjectBegin: function () {
                var e = {};
                a(e), i.push(o), (o = e), (n = null);
              },
              onObjectProperty: function (e) {
                n = e;
              },
              onObjectEnd: function () {
                o = i.pop();
              },
              onArrayBegin: function () {
                var e = [];
                a(e), i.push(o), (o = e), (n = null);
              },
              onArrayEnd: function () {
                o = i.pop();
              },
              onLiteralValue: a,
              onError: function (e, t, n) {
                r.push({
                  error: e,
                  offset: t,
                  length: n,
                });
              },
            },
            t
          ),
          o[0]
        );
      }),
      (t.parseTree = function (e, r, t) {
        void 0 === r && (r = []);
        var o = {
          type: 'array',
          offset: -1,
          length: -1,
          children: [],
          parent: void 0,
        };

        function i(e) {
          'property' === o.type && ((o.length = e - o.offset), (o = o.parent));
        }

        function a(e) {
          return o.children.push(e), e;
        }
        f(
          e,
          {
            onObjectBegin: function (e) {
              o = a({
                type: 'object',
                offset: e,
                length: -1,
                parent: o,
                children: [],
              });
            },
            onObjectProperty: function (e, t, n) {
              (o = a({
                type: 'property',
                offset: t,
                length: -1,
                parent: o,
                children: [],
              })).children.push({
                type: 'string',
                value: e,
                offset: t,
                length: n,
                parent: o,
              });
            },
            onObjectEnd: function (e, t) {
              (o.length = e + t - o.offset), (o = o.parent), i(e + t);
            },
            onArrayBegin: function (e, t) {
              o = a({
                type: 'array',
                offset: e,
                length: -1,
                parent: o,
                children: [],
              });
            },
            onArrayEnd: function (e, t) {
              (o.length = e + t - o.offset), (o = o.parent), i(e + t);
            },
            onLiteralValue: function (e, t, n) {
              a({
                type: d(e),
                offset: t,
                length: n,
                parent: o,
                value: e,
              }),
                i(t + n);
            },
            onSeparator: function (e, t, n) {
              'property' === o.type &&
                (':' === e ? (o.colonOffset = t) : ',' === e && i(t));
            },
            onError: function (e, t, n) {
              r.push({
                error: e,
                offset: t,
                length: n,
              });
            },
          },
          t
        );
        var n = o.children[0];
        return n && delete n.parent, n;
      }),
      (t.findNodeAtLocation = function (e, t) {
        if (e) {
          for (var n = e, r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            if ('string' == typeof i) {
              if ('object' !== n.type || !Array.isArray(n.children)) return;
              for (var a = !1, s = 0, c = n.children; s < c.length; s++) {
                var u = c[s];
                if (Array.isArray(u.children) && u.children[0].value === i) {
                  (n = u.children[1]), (a = !0);
                  break;
                }
              }
              if (!a) return;
            } else {
              var f = i;
              if (
                'array' !== n.type ||
                f < 0 ||
                !Array.isArray(n.children) ||
                f >= n.children.length
              )
                return;
              n = n.children[f];
            }
          }
          return n;
        }
      }),
      (t.getNodePath = function e(t) {
        if (!t.parent || !t.parent.children) return [];
        var n = e(t.parent);
        if ('property' === t.parent.type) {
          var r = t.parent.children[0].value;
          n.push(r);
        } else if ('array' === t.parent.type) {
          var o = t.parent.children.indexOf(t);
          -1 !== o && n.push(o);
        }
        return n;
      }),
      (t.getNodeValue = function e(t) {
        switch (t.type) {
          case 'array':
            return t.children.map(e);
          case 'object':
            for (
              var n = Object.create(null), r = 0, o = t.children;
              r < o.length;
              r++
            ) {
              var i = o[r],
                a = i.children[1];
              a && (n[i.children[0].value] = e(a));
            }
            return n;
          case 'null':
          case 'string':
          case 'number':
          case 'boolean':
            return t.value;
          default:
            return;
        }
      }),
      (t.contains = s),
      (t.findNodeAtOffset = function e(t, n, r) {
        if ((void 0 === r && (r = !1), s(t, n, r))) {
          var o = t.children;
          if (Array.isArray(o))
            for (var i = 0; i < o.length && o[i].offset <= n; i++) {
              var a = e(o[i], n, r);
              if (a) return a;
            }
          return t;
        }
      }),
      (t.visit = f),
      (t.stripComments = function (e, t) {
        var n,
          r,
          o = C.createScanner(e),
          i = [],
          a = 0;
        do {
          switch (((r = o.getPosition()), (n = o.scan()))) {
            case 12:
            case 13:
            case 17:
              a !== r && i.push(e.substring(a, r)),
                void 0 !== t &&
                  i.push(o.getTokenValue().replace(/[^\r\n]/g, t)),
                (a = o.getPosition());
          }
        } while (17 !== n);
        return i.join('');
      });
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'jsonc-parser/impl/edit',
          ['require', 'exports', './format', './parser'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var u = e('./format'),
      k = e('./parser');

    function r(e, t, n, r, o) {
      for (
        var i, a = k.parseTree(e, []), s = void 0, c = void 0;
        0 < t.length &&
        ((c = t.pop()),
        void 0 === (s = k.findNodeAtLocation(a, t)) && void 0 !== n);

      )
        'string' == typeof c ? (((i = {})[c] = n), (n = i)) : (n = [n]);
      if (s) {
        if (
          'object' === s.type &&
          'string' == typeof c &&
          Array.isArray(s.children)
        ) {
          var u = k.findNodeAtLocation(s, [c]);
          if (void 0 !== u) {
            if (void 0 === n) {
              if (!u.parent) throw new Error('Malformed AST');
              var f = s.children.indexOf(u.parent),
                d = void 0,
                l = u.parent.offset + u.parent.length;
              if (0 < f) d = (y = s.children[f - 1]).offset + y.length;
              else if (((d = s.offset + 1), 1 < s.children.length))
                l = s.children[1].offset;
              return C(
                e,
                {
                  offset: d,
                  length: l - d,
                  content: '',
                },
                r
              );
            }
            return C(
              e,
              {
                offset: u.offset,
                length: u.length,
                content: JSON.stringify(n),
              },
              r
            );
          }
          if (void 0 === n) return [];
          var g = JSON.stringify(c) + ': ' + JSON.stringify(n),
            h = o
              ? o(
                  s.children.map(function (e) {
                    return e.children[0].value;
                  })
                )
              : s.children.length,
            p = void 0;
          return C(
            e,
            (p =
              0 < h
                ? {
                    offset: (y = s.children[h - 1]).offset + y.length,
                    length: 0,
                    content: ',' + g,
                  }
                : 0 === s.children.length
                ? {
                    offset: s.offset + 1,
                    length: 0,
                    content: g,
                  }
                : {
                    offset: s.offset + 1,
                    length: 0,
                    content: g + ',',
                  }),
            r
          );
        }
        if (
          'array' === s.type &&
          'number' == typeof c &&
          Array.isArray(s.children)
        ) {
          if (-1 === c) {
            (g = '' + JSON.stringify(n)), (p = void 0);
            if (0 === s.children.length)
              p = {
                offset: s.offset + 1,
                length: 0,
                content: g,
              };
            else
              p = {
                offset:
                  (y = s.children[s.children.length - 1]).offset + y.length,
                length: 0,
                content: ',' + g,
              };
            return C(e, p, r);
          }
          if (void 0 === n && 0 <= s.children.length) {
            var m = c,
              v = s.children[m];
            p = void 0;
            if (1 === s.children.length)
              p = {
                offset: s.offset + 1,
                length: s.length - 2,
                content: '',
              };
            else if (s.children.length - 1 === m) {
              var y,
                b = (y = s.children[m - 1]).offset + y.length;
              p = {
                offset: b,
                length: s.offset + s.length - 2 - b,
                content: '',
              };
            } else
              p = {
                offset: v.offset,
                length: s.children[m + 1].offset - v.offset,
                content: '',
              };
            return C(e, p, r);
          }
          throw new Error('Array modification not supported yet');
        }
        throw new Error(
          'Can not add ' +
            ('number' != typeof c ? 'index' : 'property') +
            ' to parent of type ' +
            s.type
        );
      }
      if (void 0 === n) throw new Error('Can not delete in empty document');
      return C(
        e,
        {
          offset: a ? a.offset : 0,
          length: a ? a.length : 0,
          content: JSON.stringify(n),
        },
        r
      );
    }

    function C(e, t, n) {
      var r = f(e, t),
        o = t.offset,
        i = t.offset + t.content.length;
      if (0 === t.length || 0 === t.content.length) {
        for (; 0 < o && !u.isEOL(r, o - 1); ) o--;
        for (; i < r.length && !u.isEOL(r, i); ) i++;
      }
      for (
        var a = u.format(
            r,
            {
              offset: o,
              length: i - o,
            },
            n
          ),
          s = a.length - 1;
        0 <= s;
        s--
      ) {
        var c = a[s];
        (r = f(r, c)),
          (o = Math.min(o, c.offset)),
          (i = Math.max(i, c.offset + c.length)),
          (i += c.content.length - c.length);
      }
      return [
        {
          offset: o,
          length: e.length - (r.length - i) - o,
          content: r.substring(o, i),
        },
      ];
    }

    function f(e, t) {
      return (
        e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length)
      );
    }
    (t.removeProperty = function (e, t, n) {
      return r(e, t, void 0, n);
    }),
      (t.setProperty = r),
      (t.applyEdit = f),
      (t.isWS = function (e, t) {
        return -1 !== '\r\n \t'.indexOf(e.charAt(t));
      });
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'jsonc-parser/main',
          [
            'require',
            'exports',
            './impl/format',
            './impl/edit',
            './impl/scanner',
            './impl/parser',
          ],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var r = e('./impl/format'),
      o = e('./impl/edit'),
      n = e('./impl/scanner'),
      i = e('./impl/parser');
    (t.createScanner = n.createScanner),
      (t.getLocation = i.getLocation),
      (t.parse = i.parse),
      (t.parseTree = i.parseTree),
      (t.findNodeAtLocation = i.findNodeAtLocation),
      (t.findNodeAtOffset = i.findNodeAtOffset),
      (t.getNodePath = i.getNodePath),
      (t.getNodeValue = i.getNodeValue),
      (t.visit = i.visit),
      (t.stripComments = i.stripComments),
      (t.format = function (e, t, n) {
        return r.format(e, t, n);
      }),
      (t.modify = function (e, t, n, r) {
        return o.setProperty(e, t, n, r.formattingOptions, r.getInsertionIndex);
      }),
      (t.applyEdits = function (e, t) {
        for (var n = t.length - 1; 0 <= n; n--) e = o.applyEdit(e, t[n]);
        return e;
      });
  }),
  define('jsonc-parser', ['jsonc-parser/main'], function (e) {
    return e;
  }),
  define(
    'vs/language/json/tokenization',
    ['require', 'exports', 'jsonc-parser'],
    function (e, g, h) {
      'use strict';
      Object.defineProperty(g, '__esModule', {
        value: !0,
      }),
        (g.createTokenizationSupport = function (o) {
          return {
            getInitialState: function () {
              return new p(null, null, !1);
            },
            tokenize: function (e, t, n, r) {
              return (function (e, t, n, r, o) {
                void 0 === r && (r = 0);
                var i = 0,
                  a = !1;
                switch (n.scanError) {
                  case 2:
                    (t = '"' + t), (i = 1);
                    break;
                  case 1:
                    (t = '/*' + t), (i = 2);
                }
                var s,
                  c,
                  u = h.createScanner(t),
                  f = n.lastWasColon;
                for (
                  c = {
                    tokens: [],
                    endState: n.clone(),
                  };
                  ;

                ) {
                  var d = r + u.getPosition(),
                    l = '';
                  if (17 === (s = u.scan())) break;
                  if (d === r + u.getPosition())
                    throw new Error(
                      'Scanner did not advance, next 3 characters are: ' +
                        t.substr(u.getPosition(), 3)
                    );
                  switch ((a && (d -= i), (a = 0 < i), s)) {
                    case 1:
                    case 2:
                      (l = g.TOKEN_DELIM_OBJECT), (f = !1);
                      break;
                    case 3:
                    case 4:
                      (l = g.TOKEN_DELIM_ARRAY), (f = !1);
                      break;
                    case 6:
                      (l = g.TOKEN_DELIM_COLON), (f = !0);
                      break;
                    case 5:
                      (l = g.TOKEN_DELIM_COMMA), (f = !1);
                      break;
                    case 8:
                    case 9:
                      (l = g.TOKEN_VALUE_BOOLEAN), (f = !1);
                      break;
                    case 7:
                      (l = g.TOKEN_VALUE_NULL), (f = !1);
                      break;
                    case 10:
                      (l = f ? g.TOKEN_VALUE_STRING : g.TOKEN_PROPERTY_NAME),
                        (f = !1);
                      break;
                    case 11:
                      (l = g.TOKEN_VALUE_NUMBER), (f = !1);
                  }
                  if (e)
                    switch (s) {
                      case 12:
                        l = g.TOKEN_COMMENT_LINE;
                        break;
                      case 13:
                        l = g.TOKEN_COMMENT_BLOCK;
                    }
                  (c.endState = new p(n.getStateData(), u.getTokenError(), f)),
                    c.tokens.push({
                      startIndex: d,
                      scopes: l,
                    });
                }
                return c;
              })(o, e, t, n);
            },
          };
        }),
        (g.TOKEN_DELIM_OBJECT = 'delimiter.bracket.json'),
        (g.TOKEN_DELIM_ARRAY = 'delimiter.array.json'),
        (g.TOKEN_DELIM_COLON = 'delimiter.colon.json'),
        (g.TOKEN_DELIM_COMMA = 'delimiter.comma.json'),
        (g.TOKEN_VALUE_BOOLEAN = 'keyword.json'),
        (g.TOKEN_VALUE_NULL = 'keyword.json'),
        (g.TOKEN_VALUE_STRING = 'string.value.json'),
        (g.TOKEN_VALUE_NUMBER = 'number.json'),
        (g.TOKEN_PROPERTY_NAME = 'string.key.json'),
        (g.TOKEN_COMMENT_BLOCK = 'comment.block.json'),
        (g.TOKEN_COMMENT_LINE = 'comment.line.json');
      var p = (function () {
        function t(e, t, n) {
          (this._state = e), (this.scanError = t), (this.lastWasColon = n);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this._state, this.scanError, this.lastWasColon);
          }),
          (t.prototype.equals = function (e) {
            return (
              e === this ||
              (!!(e && e instanceof t) &&
                this.scanError === e.scanError &&
                this.lastWasColon === e.lastWasColon)
            );
          }),
          (t.prototype.getStateData = function () {
            return this._state;
          }),
          (t.prototype.setStateData = function (e) {
            this._state = e;
          }),
          t
        );
      })();
    }
  ),
  define(
    'vs/language/json/jsonMode',
    [
      'require',
      'exports',
      './workerManager',
      './languageFeatures',
      './tokenization',
    ],
    function (e, t, i, a, s) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.setupMode = function (e) {
          var t = [],
            n = new i.WorkerManager(e);
          t.push(n);
          var r = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return n.getLanguageServiceWorker.apply(n, e);
            },
            o = e.languageId;
          t.push(
            monaco.languages.registerCompletionItemProvider(
              o,
              new a.CompletionAdapter(r)
            )
          ),
            t.push(
              monaco.languages.registerHoverProvider(o, new a.HoverAdapter(r))
            ),
            t.push(
              monaco.languages.registerDocumentSymbolProvider(
                o,
                new a.DocumentSymbolAdapter(r)
              )
            ),
            t.push(
              monaco.languages.registerDocumentFormattingEditProvider(
                o,
                new a.DocumentFormattingEditProvider(r)
              )
            ),
            t.push(
              monaco.languages.registerDocumentRangeFormattingEditProvider(
                o,
                new a.DocumentRangeFormattingEditProvider(r)
              )
            ),
            t.push(new a.DiagnosticsAdapter(o, r, e)),
            t.push(
              monaco.languages.setTokensProvider(
                o,
                s.createTokenizationSupport(!0)
              )
            ),
            t.push(monaco.languages.setLanguageConfiguration(o, c)),
            t.push(
              monaco.languages.registerColorProvider(
                o,
                new a.DocumentColorAdapter(r)
              )
            ),
            t.push(
              monaco.languages.registerFoldingRangeProvider(
                o,
                new a.FoldingRangeAdapter(r)
              )
            );
        });
      var c = {
        wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
        comments: {
          lineComment: '//',
          blockComment: ['/*', '*/'],
        },
        brackets: [
          ['{', '}'],
          ['[', ']'],
        ],
        autoClosingPairs: [
          {
            open: '{',
            close: '}',
            notIn: ['string'],
          },
          {
            open: '[',
            close: ']',
            notIn: ['string'],
          },
          {
            open: '"',
            close: '"',
            notIn: ['string'],
          },
        ],
      };
    }
  );
