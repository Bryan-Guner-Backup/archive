(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
  {
    LPyM: function (t, e, s) {
      'use strict';
      (function (t) {
        s.d(e, 'a', function () {
          return N;
        }),
          s.d(e, 'b', function () {
            return p;
          }),
          s.d(e, 'c', function () {
            return T;
          });
        var i,
          r = s('lmln');
        class h {
          constructor(t, e, s, i, r, h, n, o, a, l = 0, c) {
            (this.p = t),
              (this.stack = e),
              (this.state = s),
              (this.reducePos = i),
              (this.pos = r),
              (this.score = h),
              (this.buffer = n),
              (this.bufferBase = o),
              (this.curContext = a),
              (this.lookAhead = l),
              (this.parent = c);
          }
          toString() {
            return `[${this.stack
              .filter((t, e) => e % 3 == 0)
              .concat(this.state)}]@${this.pos}${
              this.score ? '!' + this.score : ''
            }`;
          }
          static start(t, e, s = 0) {
            let i = t.parser.context;
            return new h(
              t,
              [],
              e,
              s,
              s,
              0,
              [],
              0,
              i ? new n(i, i.start) : null,
              0,
              null
            );
          }
          get context() {
            return this.curContext ? this.curContext.context : null;
          }
          pushState(t, e) {
            this.stack.push(
              this.state,
              e,
              this.bufferBase + this.buffer.length
            ),
              (this.state = t);
          }
          reduce(t) {
            let e = t >> 19,
              s = 65535 & t,
              { parser: i } = this.p,
              r = i.dynamicPrecedence(s);
            if ((r && (this.score += r), 0 == e))
              return (
                s < i.minRepeatTerm &&
                  this.storeNode(s, this.reducePos, this.reducePos, 4, !0),
                this.pushState(i.getGoto(this.state, s, !0), this.reducePos),
                void this.reduceContext(s, this.reducePos)
              );
            let h = this.stack.length - 3 * (e - 1) - (262144 & t ? 6 : 0),
              n = this.stack[h - 2],
              o = this.stack[h - 1],
              a = this.bufferBase + this.buffer.length - o;
            if (s < i.minRepeatTerm || 131072 & t) {
              let t = i.stateFlag(this.state, 1) ? this.pos : this.reducePos;
              this.storeNode(s, n, t, a + 4, !0);
            }
            if (262144 & t) this.state = this.stack[h];
            else {
              let t = this.stack[h - 3];
              this.state = i.getGoto(t, s, !0);
            }
            for (; this.stack.length > h; ) this.stack.pop();
            this.reduceContext(s, n);
          }
          storeNode(t, e, s, i = 4, r = !1) {
            if (0 == t) {
              let t = this,
                i = this.buffer.length;
              if (
                (0 == i &&
                  t.parent &&
                  ((i = t.bufferBase - t.parent.bufferBase), (t = t.parent)),
                i > 0 && 0 == t.buffer[i - 4] && t.buffer[i - 1] > -1)
              ) {
                if (e == s) return;
                if (t.buffer[i - 2] >= e) return void (t.buffer[i - 2] = s);
              }
            }
            if (r && this.pos != s) {
              let r = this.buffer.length;
              if (r > 0 && 0 != this.buffer[r - 4])
                for (; r > 0 && this.buffer[r - 2] > s; )
                  (this.buffer[r] = this.buffer[r - 4]),
                    (this.buffer[r + 1] = this.buffer[r - 3]),
                    (this.buffer[r + 2] = this.buffer[r - 2]),
                    (this.buffer[r + 3] = this.buffer[r - 1]),
                    (r -= 4),
                    i > 4 && (i -= 4);
              (this.buffer[r] = t),
                (this.buffer[r + 1] = e),
                (this.buffer[r + 2] = s),
                (this.buffer[r + 3] = i);
            } else this.buffer.push(t, e, s, i);
          }
          shift(t, e, s) {
            let i = this.pos;
            if (131072 & t) this.pushState(65535 & t, this.pos);
            else if (0 == (262144 & t)) {
              let r = t,
                { parser: h } = this.p;
              (s > this.pos || e <= h.maxNode) &&
                ((this.pos = s), h.stateFlag(r, 1) || (this.reducePos = s)),
                this.pushState(r, i),
                this.shiftContext(e, i),
                e <= h.maxNode && this.buffer.push(e, i, s, 4);
            } else
              (this.pos = s),
                this.shiftContext(e, i),
                e <= this.p.parser.maxNode && this.buffer.push(e, i, s, 4);
          }
          apply(t, e, s) {
            65536 & t ? this.reduce(t) : this.shift(t, e, s);
          }
          useNode(t, e) {
            let s = this.p.reused.length - 1;
            (s < 0 || this.p.reused[s] != t) && (this.p.reused.push(t), s++);
            let i = this.pos;
            (this.reducePos = this.pos = i + t.length),
              this.pushState(e, i),
              this.buffer.push(s, i, this.reducePos, -1),
              this.curContext &&
                this.updateContext(
                  this.curContext.tracker.reuse(
                    this.curContext.context,
                    t,
                    this,
                    this.p.stream.reset(this.pos - t.length)
                  )
                );
          }
          split() {
            let t = this,
              e = t.buffer.length;
            for (; e > 0 && t.buffer[e - 2] > t.reducePos; ) e -= 4;
            let s = t.buffer.slice(e),
              i = t.bufferBase + e;
            for (; t && i == t.bufferBase; ) t = t.parent;
            return new h(
              this.p,
              this.stack.slice(),
              this.state,
              this.reducePos,
              this.pos,
              this.score,
              s,
              i,
              this.curContext,
              this.lookAhead,
              t
            );
          }
          recoverByDelete(t, e) {
            let s = t <= this.p.parser.maxNode;
            s && this.storeNode(t, this.pos, e, 4),
              this.storeNode(0, this.pos, e, s ? 8 : 4),
              (this.pos = this.reducePos = e),
              (this.score -= 190);
          }
          canShift(t) {
            for (let e = new o(this); ; ) {
              let s =
                this.p.parser.stateSlot(e.state, 4) ||
                this.p.parser.hasAction(e.state, t);
              if (0 == (65536 & s)) return !0;
              if (0 == s) return !1;
              e.reduce(s);
            }
          }
          recoverByInsert(t) {
            if (this.stack.length >= 300) return [];
            let e = this.p.parser.nextStates(this.state);
            if (e.length > 8 || this.stack.length >= 120) {
              let s = [];
              for (let i, r = 0; r < e.length; r += 2)
                (i = e[r + 1]) != this.state &&
                  this.p.parser.hasAction(i, t) &&
                  s.push(e[r], i);
              if (this.stack.length < 120)
                for (let t = 0; s.length < 8 && t < e.length; t += 2) {
                  let i = e[t + 1];
                  s.some((t, e) => 1 & e && t == i) || s.push(e[t], i);
                }
              e = s;
            }
            let s = [];
            for (let i = 0; i < e.length && s.length < 4; i += 2) {
              let t = e[i + 1];
              if (t == this.state) continue;
              let r = this.split();
              r.storeNode(0, r.pos, r.pos, 4, !0),
                r.pushState(t, this.pos),
                r.shiftContext(e[i], this.pos),
                (r.score -= 200),
                s.push(r);
            }
            return s;
          }
          forceReduce() {
            let t = this.p.parser.stateSlot(this.state, 5);
            return (
              0 != (65536 & t) &&
              (this.p.parser.validAction(this.state, t) ||
                (this.storeNode(0, this.reducePos, this.reducePos, 4, !0),
                (this.score -= 100)),
              this.reduce(t),
              !0)
            );
          }
          forceAll() {
            for (
              ;
              !this.p.parser.stateFlag(this.state, 2) && this.forceReduce();

            );
            return this;
          }
          get deadEnd() {
            if (3 != this.stack.length) return !1;
            let { parser: t } = this.p;
            return (
              65535 == t.data[t.stateSlot(this.state, 1)] &&
              !t.stateSlot(this.state, 4)
            );
          }
          restart() {
            (this.state = this.stack[0]), (this.stack.length = 0);
          }
          sameState(t) {
            if (this.state != t.state || this.stack.length != t.stack.length)
              return !1;
            for (let e = 0; e < this.stack.length; e += 3)
              if (this.stack[e] != t.stack[e]) return !1;
            return !0;
          }
          get parser() {
            return this.p.parser;
          }
          dialectEnabled(t) {
            return this.p.parser.dialect.flags[t];
          }
          shiftContext(t, e) {
            this.curContext &&
              this.updateContext(
                this.curContext.tracker.shift(
                  this.curContext.context,
                  t,
                  this,
                  this.p.stream.reset(e)
                )
              );
          }
          reduceContext(t, e) {
            this.curContext &&
              this.updateContext(
                this.curContext.tracker.reduce(
                  this.curContext.context,
                  t,
                  this,
                  this.p.stream.reset(e)
                )
              );
          }
          emitContext() {
            let t = this.buffer.length - 1;
            (t < 0 || -3 != this.buffer[t]) &&
              this.buffer.push(
                this.curContext.hash,
                this.reducePos,
                this.reducePos,
                -3
              );
          }
          emitLookAhead() {
            let t = this.buffer.length - 1;
            (t < 0 || -4 != this.buffer[t]) &&
              this.buffer.push(
                this.lookAhead,
                this.reducePos,
                this.reducePos,
                -4
              );
          }
          updateContext(t) {
            if (t != this.curContext.context) {
              let e = new n(this.curContext.tracker, t);
              e.hash != this.curContext.hash && this.emitContext(),
                (this.curContext = e);
            }
          }
          setLookAhead(t) {
            t > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = t));
          }
          close() {
            this.curContext &&
              this.curContext.tracker.strict &&
              this.emitContext(),
              this.lookAhead > 0 && this.emitLookAhead();
          }
        }
        class n {
          constructor(t, e) {
            (this.tracker = t),
              (this.context = e),
              (this.hash = t.strict ? t.hash(e) : 0);
          }
        }
        !(function (t) {
          (t[(t.Insert = 200)] = 'Insert'),
            (t[(t.Delete = 190)] = 'Delete'),
            (t[(t.Reduce = 100)] = 'Reduce'),
            (t[(t.MaxNext = 4)] = 'MaxNext'),
            (t[(t.MaxInsertStackDepth = 300)] = 'MaxInsertStackDepth'),
            (t[(t.DampenInsertStackDepth = 120)] = 'DampenInsertStackDepth');
        })(i || (i = {}));
        class o {
          constructor(t) {
            (this.start = t),
              (this.state = t.state),
              (this.stack = t.stack),
              (this.base = this.stack.length);
          }
          reduce(t) {
            let e = 65535 & t,
              s = t >> 19;
            0 == s
              ? (this.stack == this.start.stack &&
                  (this.stack = this.stack.slice()),
                this.stack.push(this.state, 0, 0),
                (this.base += 3))
              : (this.base -= 3 * (s - 1));
            let i = this.start.p.parser.getGoto(
              this.stack[this.base - 3],
              e,
              !0
            );
            this.state = i;
          }
        }
        class a {
          constructor(t, e, s) {
            (this.stack = t),
              (this.pos = e),
              (this.index = s),
              (this.buffer = t.buffer),
              0 == this.index && this.maybeNext();
          }
          static create(t, e = t.bufferBase + t.buffer.length) {
            return new a(t, e, e - t.bufferBase);
          }
          maybeNext() {
            let t = this.stack.parent;
            null != t &&
              ((this.index = this.stack.bufferBase - t.bufferBase),
              (this.stack = t),
              (this.buffer = t.buffer));
          }
          get id() {
            return this.buffer[this.index - 4];
          }
          get start() {
            return this.buffer[this.index - 3];
          }
          get end() {
            return this.buffer[this.index - 2];
          }
          get size() {
            return this.buffer[this.index - 1];
          }
          next() {
            (this.index -= 4),
              (this.pos -= 4),
              0 == this.index && this.maybeNext();
          }
          fork() {
            return new a(this.stack, this.pos, this.index);
          }
        }
        class l {
          constructor() {
            (this.start = -1),
              (this.value = -1),
              (this.end = -1),
              (this.extended = -1),
              (this.lookAhead = 0),
              (this.mask = 0),
              (this.context = 0);
          }
        }
        const c = new l();
        class u {
          constructor(t, e) {
            (this.input = t),
              (this.ranges = e),
              (this.chunk = ''),
              (this.chunkOff = 0),
              (this.chunk2 = ''),
              (this.chunk2Pos = 0),
              (this.next = -1),
              (this.token = c),
              (this.rangeIndex = 0),
              (this.pos = this.chunkPos = e[0].from),
              (this.range = e[0]),
              (this.end = e[e.length - 1].to),
              this.readNext();
          }
          resolveOffset(t, e) {
            let s = this.range,
              i = this.rangeIndex,
              r = this.pos + t;
            for (; r < s.from; ) {
              if (!i) return null;
              let t = this.ranges[--i];
              (r -= s.from - t.to), (s = t);
            }
            for (; e < 0 ? r > s.to : r >= s.to; ) {
              if (i == this.ranges.length - 1) return null;
              let t = this.ranges[++i];
              (r += t.from - s.to), (s = t);
            }
            return r;
          }
          peek(t) {
            let e,
              s,
              i = this.chunkOff + t;
            if (i >= 0 && i < this.chunk.length)
              (e = this.pos + t), (s = this.chunk.charCodeAt(i));
            else {
              let i = this.resolveOffset(t, 1);
              if (null == i) return -1;
              if (
                ((e = i),
                e >= this.chunk2Pos && e < this.chunk2Pos + this.chunk2.length)
              )
                s = this.chunk2.charCodeAt(e - this.chunk2Pos);
              else {
                let t = this.rangeIndex,
                  i = this.range;
                for (; i.to <= e; ) i = this.ranges[++t];
                (this.chunk2 = this.input.chunk((this.chunk2Pos = e))),
                  e + this.chunk2.length > i.to &&
                    (this.chunk2 = this.chunk2.slice(0, i.to - e)),
                  (s = this.chunk2.charCodeAt(0));
              }
            }
            return e > this.token.lookAhead && (this.token.lookAhead = e), s;
          }
          acceptToken(t, e = 0) {
            let s = e ? this.resolveOffset(e, -1) : this.pos;
            if (null == s || s < this.token.start)
              throw new RangeError('Token end out of bounds');
            (this.token.value = t), (this.token.end = s);
          }
          getChunk() {
            if (
              this.pos >= this.chunk2Pos &&
              this.pos < this.chunk2Pos + this.chunk2.length
            ) {
              let { chunk: t, chunkPos: e } = this;
              (this.chunk = this.chunk2),
                (this.chunkPos = this.chunk2Pos),
                (this.chunk2 = t),
                (this.chunk2Pos = e),
                (this.chunkOff = this.pos - this.chunkPos);
            } else {
              (this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
              let t = this.input.chunk(this.pos),
                e = this.pos + t.length;
              (this.chunk =
                e > this.range.to ? t.slice(0, this.range.to - this.pos) : t),
                (this.chunkPos = this.pos),
                (this.chunkOff = 0);
            }
          }
          readNext() {
            return this.chunkOff >= this.chunk.length &&
              (this.getChunk(), this.chunkOff == this.chunk.length)
              ? (this.next = -1)
              : (this.next = this.chunk.charCodeAt(this.chunkOff));
          }
          advance(t = 1) {
            for (this.chunkOff += t; this.pos + t >= this.range.to; ) {
              if (this.rangeIndex == this.ranges.length - 1)
                return this.setDone();
              (t -= this.range.to - this.pos),
                (this.range = this.ranges[++this.rangeIndex]),
                (this.pos = this.range.from);
            }
            return (
              (this.pos += t),
              this.pos > this.token.lookAhead &&
                (this.token.lookAhead = this.pos),
              this.readNext()
            );
          }
          setDone() {
            return (
              (this.pos = this.chunkPos = this.end),
              (this.range =
                this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
              (this.chunk = ''),
              (this.next = -1)
            );
          }
          reset(t, e) {
            if (
              (e
                ? ((this.token = e),
                  (e.start = e.lookAhead = t),
                  (e.value = e.extended = -1))
                : (this.token = c),
              this.pos != t)
            ) {
              if (((this.pos = t), t == this.end)) return this.setDone(), this;
              for (; t < this.range.from; )
                this.range = this.ranges[--this.rangeIndex];
              for (; t >= this.range.to; )
                this.range = this.ranges[++this.rangeIndex];
              t >= this.chunkPos && t < this.chunkPos + this.chunk.length
                ? (this.chunkOff = t - this.chunkPos)
                : ((this.chunk = ''), (this.chunkOff = 0)),
                this.readNext();
            }
            return this;
          }
          read(t, e) {
            if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length)
              return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
            if (t >= this.range.from && e <= this.range.to)
              return this.input.read(t, e);
            let s = '';
            for (let i of this.ranges) {
              if (i.from >= e) break;
              i.to > t &&
                (s += this.input.read(Math.max(i.from, t), Math.min(i.to, e)));
            }
            return s;
          }
        }
        class f {
          constructor(t, e) {
            (this.data = t), (this.id = e);
          }
          token(t, e) {
            !(function (t, e, s, i) {
              let r = 0,
                h = 1 << i,
                { parser: n } = s.p,
                { dialect: o } = n;
              t: for (; 0 != (h & t[r]); ) {
                let s = t[r + 1];
                for (let i = r + 3; i < s; i += 2)
                  if ((t[i + 1] & h) > 0) {
                    let s = t[i];
                    if (
                      o.allows(s) &&
                      (-1 == e.token.value ||
                        e.token.value == s ||
                        n.overrides(s, e.token.value))
                    ) {
                      e.acceptToken(s);
                      break;
                    }
                  }
                for (let i = e.next, h = 0, n = t[r + 2]; h < n; ) {
                  let o = (h + n) >> 1,
                    a = s + o + (o << 1),
                    l = t[a],
                    c = t[a + 1];
                  if (i < l) n = o;
                  else {
                    if (!(i >= c)) {
                      (r = t[a + 2]), e.advance();
                      continue t;
                    }
                    h = o + 1;
                  }
                }
                break;
              }
            })(this.data, t, e, this.id);
          }
        }
        f.prototype.contextual = f.prototype.fallback = f.prototype.extend = !1;
        class p {
          constructor(t, e = {}) {
            (this.token = t),
              (this.contextual = !!e.contextual),
              (this.fallback = !!e.fallback),
              (this.extend = !!e.extend);
          }
        }

        function d(t, e = Uint16Array) {
          if ('string' != typeof t) return t;
          let s = null;
          for (let i = 0, r = 0; i < t.length; ) {
            let h = 0;
            for (;;) {
              let e = t.charCodeAt(i++),
                s = !1;
              if (126 == e) {
                h = 65535;
                break;
              }
              e >= 92 && e--, e >= 34 && e--;
              let r = e - 32;
              if ((r >= 46 && ((r -= 46), (s = !0)), (h += r), s)) break;
              h *= 46;
            }
            s ? (s[r++] = h) : (s = new e(h));
          }
          return s;
        }
        const k = 'undefined' != typeof t && /\bparse\b/.test(t.env.LOG);
        let g = null;
        var m;

        function x(t, e, s) {
          let i = t.fullCursor();
          for (i.moveTo(e); ; )
            if (!(s < 0 ? i.childBefore(e) : i.childAfter(e)))
              for (;;) {
                if ((s < 0 ? i.to < e : i.from > e) && !i.type.isError)
                  return s < 0
                    ? Math.max(0, Math.min(i.to - 1, e - 25))
                    : Math.min(t.length, Math.max(i.from + 1, e + 25));
                if (s < 0 ? i.prevSibling() : i.nextSibling()) break;
                if (!i.parent()) return s < 0 ? 0 : t.length;
              }
        }
        !(function (t) {
          t[(t.Margin = 25)] = 'Margin';
        })(m || (m = {}));
        class b {
          constructor(t, e) {
            (this.fragments = t),
              (this.nodeSet = e),
              (this.i = 0),
              (this.fragment = null),
              (this.safeFrom = -1),
              (this.safeTo = -1),
              (this.trees = []),
              (this.start = []),
              (this.index = []),
              this.nextFragment();
          }
          nextFragment() {
            let t = (this.fragment =
              this.i == this.fragments.length
                ? null
                : this.fragments[this.i++]);
            if (t) {
              for (
                this.safeFrom = t.openStart
                  ? x(t.tree, t.from + t.offset, 1) - t.offset
                  : t.from,
                  this.safeTo = t.openEnd
                    ? x(t.tree, t.to + t.offset, -1) - t.offset
                    : t.to;
                this.trees.length;

              )
                this.trees.pop(), this.start.pop(), this.index.pop();
              this.trees.push(t.tree),
                this.start.push(-t.offset),
                this.index.push(0),
                (this.nextStart = this.safeFrom);
            } else this.nextStart = 1e9;
          }
          nodeAt(t) {
            if (t < this.nextStart) return null;
            for (; this.fragment && this.safeTo <= t; ) this.nextFragment();
            if (!this.fragment) return null;
            for (;;) {
              let e = this.trees.length - 1;
              if (e < 0) return this.nextFragment(), null;
              let s = this.trees[e],
                i = this.index[e];
              if (i == s.children.length) {
                this.trees.pop(), this.start.pop(), this.index.pop();
                continue;
              }
              let h = s.children[i],
                n = this.start[e] + s.positions[i];
              if (n > t) return (this.nextStart = n), null;
              if (h instanceof r.f) {
                if (n == t) {
                  if (n < this.safeFrom) return null;
                  let t = n + h.length;
                  if (t <= this.safeTo) {
                    let e = h.prop(r.b.lookAhead);
                    if (!e || t + e < this.fragment.to) return h;
                  }
                }
                this.index[e]++,
                  n + h.length >= Math.max(this.safeFrom, t) &&
                    (this.trees.push(h),
                    this.start.push(n),
                    this.index.push(0));
              } else this.index[e]++, (this.nextStart = n + h.length);
            }
          }
        }
        const v = new l();
        class P {
          constructor(t, e) {
            (this.stream = e),
              (this.tokens = []),
              (this.mainToken = v),
              (this.actions = []),
              (this.tokens = t.tokenizers.map((t) => new l()));
          }
          getActions(t) {
            let e = 0,
              s = null,
              { parser: i } = t.p,
              { tokenizers: r } = i,
              h = i.stateSlot(t.state, 3),
              n = t.curContext ? t.curContext.hash : 0,
              o = 0;
            for (let a = 0; a < r.length; a++) {
              if (0 == ((1 << a) & h)) continue;
              let i = r[a],
                l = this.tokens[a];
              if (
                (!s || i.fallback) &&
                ((i.contextual ||
                  l.start != t.pos ||
                  l.mask != h ||
                  l.context != n) &&
                  (this.updateCachedToken(l, i, t),
                  (l.mask = h),
                  (l.context = n)),
                l.lookAhead > l.end + 25 && (o = Math.max(l.lookAhead, o)),
                0 != l.value)
              ) {
                let r = e;
                if (
                  (l.extended > -1 &&
                    (e = this.addActions(t, l.extended, l.end, e)),
                  (e = this.addActions(t, l.value, l.end, e)),
                  !i.extend && ((s = l), e > r))
                )
                  break;
              }
            }
            for (; this.actions.length > e; ) this.actions.pop();
            return (
              o && t.setLookAhead(o),
              s ||
                ((s = v),
                (s.start = t.pos),
                t.pos == this.stream.end
                  ? ((s.value = t.p.parser.eofTerm),
                    (s.end = t.pos),
                    (e = this.addActions(t, s.value, s.end, e)))
                  : ((s.value = 0), (s.end = t.pos + 1))),
              (this.mainToken = s),
              this.actions
            );
          }
          updateCachedToken(t, e, s) {
            if ((e.token(this.stream.reset(s.pos, t), s), t.value > -1)) {
              let { parser: e } = s.p;
              for (let i = 0; i < e.specialized.length; i++)
                if (e.specialized[i] == t.value) {
                  let r = e.specializers[i](
                    this.stream.read(t.start, t.end),
                    s
                  );
                  if (r >= 0 && s.p.parser.dialect.allows(r >> 1)) {
                    0 == (1 & r) ? (t.value = r >> 1) : (t.extended = r >> 1);
                    break;
                  }
                }
            } else (t.value = 0), (t.end = s.pos + 1);
          }
          putAction(t, e, s, i) {
            for (let r = 0; r < i; r += 3) if (this.actions[r] == t) return i;
            return (
              (this.actions[i++] = t),
              (this.actions[i++] = e),
              (this.actions[i++] = s),
              i
            );
          }
          addActions(t, e, s, i) {
            let { state: r } = t,
              { parser: h } = t.p,
              { data: n } = h;
            for (let o = 0; o < 2; o++)
              for (let t = h.stateSlot(r, o ? 2 : 1); ; t += 3) {
                if (65535 == n[t]) {
                  if (1 != n[t + 1]) {
                    0 == i &&
                      2 == n[t + 1] &&
                      (i = this.putAction(D(n, t + 1), e, s, i));
                    break;
                  }
                  t = D(n, t + 2);
                }
                n[t] == e && (i = this.putAction(D(n, t + 1), e, s, i));
              }
            return i;
          }
        }
        var S;
        !(function (t) {
          (t[(t.Distance = 5)] = 'Distance'),
            (t[(t.MaxRemainingPerStep = 3)] = 'MaxRemainingPerStep'),
            (t[(t.MinBufferLengthPrune = 200)] = 'MinBufferLengthPrune'),
            (t[(t.ForceReduceLimit = 10)] = 'ForceReduceLimit');
        })(S || (S = {}));
        class A {
          constructor(t, e, s, i) {
            (this.parser = t),
              (this.input = e),
              (this.ranges = i),
              (this.recovering = 0),
              (this.nextStackID = 9812),
              (this.minStackPos = 0),
              (this.reused = []),
              (this.stoppedAt = null),
              (this.stream = new u(e, i)),
              (this.tokens = new P(t, this.stream)),
              (this.topTerm = t.top[1]);
            let { from: r } = i[0];
            (this.stacks = [h.start(this, t.top[0], r)]),
              (this.fragments =
                s.length && this.stream.end - r > 4 * t.bufferLength
                  ? new b(s, t.nodeSet)
                  : null);
          }
          get parsedPos() {
            return this.minStackPos;
          }
          advance() {
            let t,
              e,
              s = this.stacks,
              i = this.minStackPos,
              r = (this.stacks = []);
            for (let h = 0; h < s.length; h++) {
              let n = s[h];
              for (;;) {
                if (n.pos > i) r.push(n);
                else {
                  if (this.advanceStack(n, r, s)) continue;
                  {
                    t || ((t = []), (e = [])), t.push(n);
                    let s = this.tokens.mainToken;
                    e.push(s.value, s.end);
                  }
                }
                break;
              }
            }
            if (!r.length) {
              let e =
                t &&
                (function (t) {
                  let e = null;
                  for (let s of t) {
                    let t = s.p.stoppedAt;
                    (s.pos == s.p.stream.end || (null != t && s.pos > t)) &&
                      s.p.parser.stateFlag(s.state, 2) &&
                      (!e || e.score < s.score) &&
                      (e = s);
                  }
                  return e;
                })(t);
              if (e) return this.stackToTree(e);
              if (this.parser.strict)
                throw (
                  (k &&
                    t &&
                    console.log(
                      'Stuck with token ' +
                        this.parser.getName(this.tokens.mainToken.value)
                    ),
                  new SyntaxError('No parse at ' + i))
                );
              this.recovering || (this.recovering = 5);
            }
            if (this.recovering && t) {
              let s = this.runRecovery(t, e, r);
              if (s) return this.stackToTree(s.forceAll());
            }
            if (this.recovering) {
              let t = 1 == this.recovering ? 1 : 3 * this.recovering;
              if (r.length > t)
                for (r.sort((t, e) => e.score - t.score); r.length > t; )
                  r.pop();
              r.some((t) => t.reducePos > i) && this.recovering--;
            } else if (r.length > 1)
              t: for (let h = 0; h < r.length - 1; h++) {
                let t = r[h];
                for (let e = h + 1; e < r.length; e++) {
                  let s = r[e];
                  if (
                    t.sameState(s) ||
                    (t.buffer.length > 200 && s.buffer.length > 200)
                  ) {
                    if (
                      !(
                        (t.score - s.score ||
                          t.buffer.length - s.buffer.length) > 0
                      )
                    ) {
                      r.splice(h--, 1);
                      continue t;
                    }
                    r.splice(e--, 1);
                  }
                }
              }
            this.minStackPos = r[0].pos;
            for (let h = 1; h < r.length; h++)
              r[h].pos < this.minStackPos && (this.minStackPos = r[h].pos);
            return null;
          }
          stopAt(t) {
            if (null != this.stoppedAt && this.stoppedAt < t)
              throw new RangeError("Can't move stoppedAt forward");
            this.stoppedAt = t;
          }
          advanceStack(t, e, s) {
            let i = t.pos,
              { parser: h } = this,
              n = k ? this.stackID(t) + ' -> ' : '';
            if (null != this.stoppedAt && i > this.stoppedAt)
              return t.forceReduce() ? t : null;
            if (this.fragments) {
              let e = t.curContext && t.curContext.tracker.strict,
                s = e ? t.curContext.hash : 0;
              for (let o = this.fragments.nodeAt(i); o; ) {
                let i =
                  this.parser.nodeSet.types[o.type.id] == o.type
                    ? h.getGoto(t.state, o.type.id)
                    : -1;
                if (
                  i > -1 &&
                  o.length &&
                  (!e || (o.prop(r.b.contextHash) || 0) == s)
                )
                  return (
                    t.useNode(o, i),
                    k &&
                      console.log(
                        n +
                          this.stackID(t) +
                          ` (via reuse of ${h.getName(o.type.id)})`
                      ),
                    !0
                  );
                if (
                  !(o instanceof r.f) ||
                  0 == o.children.length ||
                  o.positions[0] > 0
                )
                  break;
                let a = o.children[0];
                if (!(a instanceof r.f && 0 == o.positions[0])) break;
                o = a;
              }
            }
            let o = h.stateSlot(t.state, 4);
            if (o > 0)
              return (
                t.reduce(o),
                k &&
                  console.log(
                    n +
                      this.stackID(t) +
                      ` (via always-reduce ${h.getName(65535 & o)})`
                  ),
                !0
              );
            let a = this.tokens.getActions(t);
            for (let r = 0; r < a.length; ) {
              let o = a[r++],
                l = a[r++],
                c = a[r++],
                u = r == a.length || !s,
                f = u ? t : t.split();
              if (
                (f.apply(o, l, c),
                k &&
                  console.log(
                    n +
                      this.stackID(f) +
                      ` (via ${
                        0 == (65536 & o)
                          ? 'shift'
                          : `reduce of ${h.getName(65535 & o)}`
                      } for ${h.getName(l)} @ ${i}${f == t ? '' : ', split'})`
                  ),
                u)
              )
                return !0;
              f.pos > i ? e.push(f) : s.push(f);
            }
            return !1;
          }
          advanceFully(t, e) {
            let s = t.pos;
            for (;;) {
              if (!this.advanceStack(t, null, null)) return !1;
              if (t.pos > s) return C(t, e), !0;
            }
          }
          runRecovery(t, e, s) {
            let i = null,
              r = !1;
            for (let h = 0; h < t.length; h++) {
              let n = t[h],
                o = e[h << 1],
                a = e[1 + (h << 1)],
                l = k ? this.stackID(n) + ' -> ' : '';
              if (n.deadEnd) {
                if (r) continue;
                if (
                  ((r = !0),
                  n.restart(),
                  k && console.log(l + this.stackID(n) + ' (restarted)'),
                  this.advanceFully(n, s))
                )
                  continue;
              }
              let c = n.split(),
                u = l;
              for (let t = 0; c.forceReduce() && t < 10; t++) {
                if (
                  (k &&
                    console.log(u + this.stackID(c) + ' (via force-reduce)'),
                  this.advanceFully(c, s))
                )
                  break;
                k && (u = this.stackID(c) + ' -> ');
              }
              for (let t of n.recoverByInsert(o))
                k && console.log(l + this.stackID(t) + ' (via recover-insert)'),
                  this.advanceFully(t, s);
              this.stream.end > n.pos
                ? (a == n.pos && (a++, (o = 0)),
                  n.recoverByDelete(o, a),
                  k &&
                    console.log(
                      l +
                        this.stackID(n) +
                        ` (via recover-delete ${this.parser.getName(o)})`
                    ),
                  C(n, s))
                : (!i || i.score < n.score) && (i = n);
            }
            return i;
          }
          stackToTree(t) {
            return (
              t.close(),
              r.f.build({
                buffer: a.create(t),
                nodeSet: this.parser.nodeSet,
                topID: this.topTerm,
                maxBufferLength: this.parser.bufferLength,
                reused: this.reused,
                start: this.ranges[0].from,
                length: t.pos - this.ranges[0].from,
                minRepeatType: this.parser.minRepeatTerm,
              })
            );
          }
          stackID(t) {
            let e = (g || (g = new WeakMap())).get(t);
            return (
              e || g.set(t, (e = String.fromCodePoint(this.nextStackID++))),
              e + t
            );
          }
        }

        function C(t, e) {
          for (let s = 0; s < e.length; s++) {
            let i = e[s];
            if (i.pos == t.pos && i.sameState(t))
              return void (e[s].score < t.score && (e[s] = t));
          }
          e.push(t);
        }
        class w {
          constructor(t, e, s) {
            (this.source = t), (this.flags = e), (this.disabled = s);
          }
          allows(t) {
            return !this.disabled || 0 == this.disabled[t];
          }
        }
        const y = (t) => t;
        class N {
          constructor(t) {
            (this.start = t.start),
              (this.shift = t.shift || y),
              (this.reduce = t.reduce || y),
              (this.reuse = t.reuse || y),
              (this.hash = t.hash || (() => 0)),
              (this.strict = !1 !== t.strict);
          }
        }
        class T extends r.e {
          constructor(t) {
            if ((super(), (this.wrappers = []), 13 != t.version))
              throw new RangeError(
                `Parser version (${t.version}) doesn't match runtime version (13)`
              );
            let e = t.nodeNames.split(' ');
            this.minRepeatTerm = e.length;
            for (let r = 0; r < t.repeatNodeCount; r++) e.push('');
            let s = Object.keys(t.topRules).map((e) => t.topRules[e][1]),
              i = [];
            for (let r = 0; r < e.length; r++) i.push([]);

            function h(t, e, s) {
              i[t].push([e, e.deserialize(String(s))]);
            }
            if (t.nodeProps)
              for (let r of t.nodeProps) {
                let t = r[0];
                for (let e = 1; e < r.length; ) {
                  let s = r[e++];
                  if (s >= 0) h(s, t, r[e++]);
                  else {
                    let i = r[e + -s];
                    for (let n = -s; n > 0; n--) h(r[e++], t, i);
                    e++;
                  }
                }
              }
            (this.nodeSet = new r.c(
              e.map((e, h) =>
                r.d.define({
                  name: h >= this.minRepeatTerm ? void 0 : e,
                  id: h,
                  props: i[h],
                  top: s.indexOf(h) > -1,
                  error: 0 == h,
                  skipped: t.skippedNodes && t.skippedNodes.indexOf(h) > -1,
                })
              )
            )),
              (this.strict = !1),
              (this.bufferLength = r.a);
            let n = d(t.tokenData);
            if (
              ((this.context = t.context),
              (this.specialized = new Uint16Array(
                t.specialized ? t.specialized.length : 0
              )),
              (this.specializers = []),
              t.specialized)
            )
              for (let r = 0; r < t.specialized.length; r++)
                (this.specialized[r] = t.specialized[r].term),
                  (this.specializers[r] = t.specialized[r].get);
            (this.states = d(t.states, Uint32Array)),
              (this.data = d(t.stateData)),
              (this.goto = d(t.goto)),
              (this.maxTerm = t.maxTerm),
              (this.tokenizers = t.tokenizers.map((t) =>
                'number' == typeof t ? new f(n, t) : t
              )),
              (this.topRules = t.topRules),
              (this.dialects = t.dialects || {}),
              (this.dynamicPrecedences = t.dynamicPrecedences || null),
              (this.tokenPrecTable = t.tokenPrec),
              (this.termNames = t.termNames || null),
              (this.maxNode = this.nodeSet.types.length - 1),
              (this.dialect = this.parseDialect()),
              (this.top = this.topRules[Object.keys(this.topRules)[0]]);
          }
          createParse(t, e, s) {
            let i = new A(this, t, e, s);
            for (let r of this.wrappers) i = r(i, t, e, s);
            return i;
          }
          getGoto(t, e, s = !1) {
            let i = this.goto;
            if (e >= i[0]) return -1;
            for (let r = i[e + 1]; ; ) {
              let e = i[r++],
                h = 1 & e,
                n = i[r++];
              if (h && s) return n;
              for (let s = r + (e >> 1); r < s; r++) if (i[r] == t) return n;
              if (h) return -1;
            }
          }
          hasAction(t, e) {
            let s = this.data;
            for (let i = 0; i < 2; i++)
              for (let r, h = this.stateSlot(t, i ? 2 : 1); ; h += 3) {
                if (65535 == (r = s[h])) {
                  if (1 != s[h + 1]) {
                    if (2 == s[h + 1]) return D(s, h + 2);
                    break;
                  }
                  r = s[(h = D(s, h + 2))];
                }
                if (r == e || 0 == r) return D(s, h + 1);
              }
            return 0;
          }
          stateSlot(t, e) {
            return this.states[6 * t + e];
          }
          stateFlag(t, e) {
            return (this.stateSlot(t, 0) & e) > 0;
          }
          validAction(t, e) {
            if (e == this.stateSlot(t, 4)) return !0;
            for (let s = this.stateSlot(t, 1); ; s += 3) {
              if (65535 == this.data[s]) {
                if (1 != this.data[s + 1]) return !1;
                s = D(this.data, s + 2);
              }
              if (e == D(this.data, s + 1)) return !0;
            }
          }
          nextStates(t) {
            let e = [];
            for (let s = this.stateSlot(t, 1); ; s += 3) {
              if (65535 == this.data[s]) {
                if (1 != this.data[s + 1]) break;
                s = D(this.data, s + 2);
              }
              if (0 == (1 & this.data[s + 2])) {
                let t = this.data[s + 1];
                e.some((e, s) => 1 & s && e == t) || e.push(this.data[s], t);
              }
            }
            return e;
          }
          overrides(t, e) {
            let s = I(this.data, this.tokenPrecTable, e);
            return s < 0 || I(this.data, this.tokenPrecTable, t) < s;
          }
          configure(t) {
            let e = Object.assign(Object.create(T.prototype), this);
            if (
              (t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top)
            ) {
              let s = this.topRules[t.top];
              if (!s) throw new RangeError(`Invalid top rule name ${t.top}`);
              e.top = s;
            }
            return (
              t.tokenizers &&
                (e.tokenizers = this.tokenizers.map((e) => {
                  let s = t.tokenizers.find((t) => t.from == e);
                  return s ? s.to : e;
                })),
              t.contextTracker && (e.context = t.contextTracker),
              t.dialect && (e.dialect = this.parseDialect(t.dialect)),
              null != t.strict && (e.strict = t.strict),
              t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)),
              null != t.bufferLength && (e.bufferLength = t.bufferLength),
              e
            );
          }
          getName(t) {
            return this.termNames
              ? this.termNames[t]
              : String((t <= this.maxNode && this.nodeSet.types[t].name) || t);
          }
          get eofTerm() {
            return this.maxNode + 1;
          }
          get topNode() {
            return this.nodeSet.types[this.top[1]];
          }
          dynamicPrecedence(t) {
            let e = this.dynamicPrecedences;
            return null == e ? 0 : e[t] || 0;
          }
          parseDialect(t) {
            let e = Object.keys(this.dialects),
              s = e.map(() => !1);
            if (t)
              for (let r of t.split(' ')) {
                let t = e.indexOf(r);
                t >= 0 && (s[t] = !0);
              }
            let i = null;
            for (let r = 0; r < e.length; r++)
              if (!s[r])
                for (
                  let t, s = this.dialects[e[r]];
                  65535 != (t = this.data[s++]);

                )
                  (i || (i = new Uint8Array(this.maxTerm + 1)))[t] = 1;
            return new w(t, s, i);
          }
          static deserialize(t) {
            return new T(t);
          }
        }

        function D(t, e) {
          return t[e] | (t[e + 1] << 16);
        }

        function I(t, e, s) {
          for (let i, r = e; 65535 != (i = t[r]); r++) if (i == s) return r - e;
          return -1;
        }
      }.call(this, s('8oxB')));
    },
  },
]);
//# sourceMappingURL=750cd0e9940a54dd4a7a0dc6241a730a102d9ca1.78c8b981a735a186cda2.js.map
