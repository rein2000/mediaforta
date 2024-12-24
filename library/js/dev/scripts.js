(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // library/js/plugins/uikit/js/uikit.min.js
  var require_uikit_min = __commonJS({
    "library/js/plugins/uikit/js/uikit.min.js"(exports, module) {
      (function(fe, pe) {
        typeof exports == "object" && typeof module < "u" ? module.exports = pe() : typeof define == "function" && define.amd ? define("uikit", pe) : (fe = typeof globalThis < "u" ? globalThis : fe || self, fe.UIkit = pe());
      })(exports, function() {
        "use strict";
        const { hasOwnProperty: fe, toString: pe } = Object.prototype;
        function Bt(t, e) {
          return fe.call(t, e);
        }
        const gr = /\B([A-Z])/g, Yt = pt((t) => t.replace(gr, "-$1").toLowerCase()), mr = /-(\w)/g, ge = pt((t) => t.replace(mr, gs)), St = pt((t) => t.length ? gs(null, t.charAt(0)) + t.slice(1) : "");
        function gs(t, e) {
          return e ? e.toUpperCase() : "";
        }
        function ht(t, e) {
          return t == null || t.startsWith == null ? void 0 : t.startsWith(e);
        }
        function Xt(t, e) {
          return t == null || t.endsWith == null ? void 0 : t.endsWith(e);
        }
        function p(t, e) {
          return t == null || t.includes == null ? void 0 : t.includes(e);
        }
        function bt(t, e) {
          return t == null || t.findIndex == null ? void 0 : t.findIndex(e);
        }
        const { isArray: K, from: Si } = Array, { assign: xt } = Object;
        function ft(t) {
          return typeof t == "function";
        }
        function Tt(t) {
          return t !== null && typeof t == "object";
        }
        function yt(t) {
          return pe.call(t) === "[object Object]";
        }
        function Gt(t) {
          return Tt(t) && t === t.window;
        }
        function Fe(t) {
          return Ci(t) === 9;
        }
        function Ti(t) {
          return Ci(t) >= 1;
        }
        function Jt(t) {
          return Ci(t) === 1;
        }
        function Ci(t) {
          return !Gt(t) && Tt(t) && t.nodeType;
        }
        function He(t) {
          return typeof t == "boolean";
        }
        function M(t) {
          return typeof t == "string";
        }
        function Kt(t) {
          return typeof t == "number";
        }
        function Mt(t) {
          return Kt(t) || M(t) && !isNaN(t - parseFloat(t));
        }
        function me(t) {
          return !(K(t) ? t.length : Tt(t) ? Object.keys(t).length : false);
        }
        function q(t) {
          return t === void 0;
        }
        function Ii(t) {
          return He(t) ? t : t === "true" || t === "1" || t === "" ? true : t === "false" || t === "0" ? false : t;
        }
        function Ct(t) {
          const e = Number(t);
          return isNaN(e) ? false : e;
        }
        function w(t) {
          return parseFloat(t) || 0;
        }
        function V(t) {
          return y(t)[0];
        }
        function y(t) {
          return t && (Ti(t) ? [t] : Array.from(t).filter(Ti)) || [];
        }
        function Zt(t) {
          var e;
          if (Gt(t))
            return t;
          t = V(t);
          const i = Fe(t) ? t : (e = t) == null ? void 0 : e.ownerDocument;
          return (i == null ? void 0 : i.defaultView) || window;
        }
        function ve(t, e) {
          return t === e || Tt(t) && Tt(e) && Object.keys(t).length === Object.keys(e).length && $t(t, (i, s) => i === e[s]);
        }
        function Pi(t, e, i) {
          return t.replace(new RegExp(e + "|" + i, "g"), (s) => s === e ? i : e);
        }
        function Qt(t) {
          return t[t.length - 1];
        }
        function $t(t, e) {
          for (const i in t)
            if (e(t[i], i) === false)
              return false;
          return true;
        }
        function Le(t, e) {
          return t.slice().sort((i, s) => {
            let { [e]: n = 0 } = i, { [e]: r = 0 } = s;
            return n > r ? 1 : r > n ? -1 : 0;
          });
        }
        function Ut(t, e) {
          return t.reduce((i, s) => i + w(ft(e) ? e(s) : s[e]), 0);
        }
        function ms(t, e) {
          const i = /* @__PURE__ */ new Set();
          return t.filter((s) => {
            let { [e]: n } = s;
            return i.has(n) ? false : i.add(n);
          });
        }
        function Z(t, e, i) {
          return e === void 0 && (e = 0), i === void 0 && (i = 1), Math.min(Math.max(Ct(t) || 0, e), i);
        }
        function I() {
        }
        function Ai() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return [["bottom", "top"], ["right", "left"]].every((s) => {
            let [n, r] = s;
            return Math.min(...e.map((o) => {
              let { [n]: a } = o;
              return a;
            })) - Math.max(...e.map((o) => {
              let { [r]: a } = o;
              return a;
            })) > 0;
          });
        }
        function We(t, e) {
          return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
        }
        function Ei(t, e, i) {
          const s = e === "width" ? "height" : "width";
          return { [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s], [e]: i };
        }
        function vs(t, e) {
          t = { ...t };
          for (const i in t)
            t = t[i] > e[i] ? Ei(t, i, e[i]) : t;
          return t;
        }
        function vr(t, e) {
          t = vs(t, e);
          for (const i in t)
            t = t[i] < e[i] ? Ei(t, i, e[i]) : t;
          return t;
        }
        const je = { ratio: Ei, contain: vs, cover: vr };
        function te(t, e, i, s) {
          i === void 0 && (i = 0), s === void 0 && (s = false), e = y(e);
          const { length: n } = e;
          return n ? (t = Mt(t) ? Ct(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : e.indexOf(V(t)), s ? Z(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
        }
        function pt(t) {
          const e = /* @__PURE__ */ Object.create(null);
          return (i) => e[i] || (e[i] = t(i));
        }
        class Re {
          constructor() {
            this.promise = new Promise((e, i) => {
              this.reject = i, this.resolve = e;
            });
          }
        }
        function b(t, e, i) {
          if (Tt(e)) {
            for (const n in e)
              b(t, n, e[n]);
            return;
          }
          if (q(i)) {
            var s;
            return (s = V(t)) == null ? void 0 : s.getAttribute(e);
          } else
            for (const n of y(t))
              ft(i) && (i = i.call(n, b(n, e))), i === null ? we(n, e) : n.setAttribute(e, i);
        }
        function It(t, e) {
          return y(t).some((i) => i.hasAttribute(e));
        }
        function we(t, e) {
          const i = y(t);
          for (const s of e.split(" "))
            for (const n of i)
              n.removeAttribute(s);
        }
        function nt(t, e) {
          for (const i of [e, "data-" + e])
            if (It(t, i))
              return b(t, i);
        }
        const wr = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
        function _i(t) {
          return y(t).some((e) => wr[e.tagName.toLowerCase()]);
        }
        function R(t) {
          return y(t).some((e) => e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }
        const be = "input,select,textarea,button";
        function Oi(t) {
          return y(t).some((e) => z(e, be));
        }
        const qe = be + ",a[href],[tabindex]";
        function Ve(t) {
          return z(t, qe);
        }
        function E(t) {
          var e;
          return (e = V(t)) == null ? void 0 : e.parentElement;
        }
        function Ye(t, e) {
          return y(t).filter((i) => z(i, e));
        }
        function z(t, e) {
          return y(t).some((i) => i.matches(e));
        }
        function tt(t, e) {
          return Jt(t) ? t.closest(ht(e, ">") ? e.slice(1) : e) : y(t).map((i) => tt(i, e)).filter(Boolean);
        }
        function A(t, e) {
          return M(e) ? !!tt(t, e) : V(e).contains(V(t));
        }
        function ee(t, e) {
          const i = [];
          for (; t = E(t); )
            (!e || z(t, e)) && i.push(t);
          return i;
        }
        function O(t, e) {
          t = V(t);
          const i = t ? y(t.children) : [];
          return e ? Ye(i, e) : i;
        }
        function ie(t, e) {
          return e ? y(t).indexOf(V(e)) : O(E(t)).indexOf(t);
        }
        function ct(t, e) {
          return Bi(t, bs(t, e));
        }
        function xe(t, e) {
          return ye(t, bs(t, e));
        }
        function Bi(t, e) {
          return V(xs(t, e, "querySelector"));
        }
        function ye(t, e) {
          return y(xs(t, e, "querySelectorAll"));
        }
        const br = /(^|[^\\],)\s*[!>+~-]/, ws = pt((t) => t.match(br));
        function bs(t, e) {
          return e === void 0 && (e = document), M(t) && ws(t) || Fe(e) ? e : e.ownerDocument;
        }
        const xr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, yr = pt((t) => t.replace(xr, "$1 *"));
        function xs(t, e, i) {
          if (e === void 0 && (e = document), !t || !M(t))
            return t;
          if (t = yr(t), ws(t)) {
            const s = kr(t);
            t = "";
            for (let n of s) {
              let r = e;
              if (n[0] === "!") {
                const o = n.substr(1).trim().split(" ");
                if (r = tt(E(e), o[0]), n = o.slice(1).join(" ").trim(), !n.length && s.length === 1)
                  return r;
              }
              if (n[0] === "-") {
                const o = n.substr(1).trim().split(" "), a = (r || e).previousElementSibling;
                r = z(a, n.substr(1)) ? a : null, n = o.slice(1).join(" ");
              }
              r && (t += (t ? "," : "") + Sr(r) + " " + n);
            }
            e = document;
          }
          try {
            return e[i](t);
          } catch {
            return null;
          }
        }
        const $r = /.*?[^\\](?:,|$)/g, kr = pt((t) => t.match($r).map((e) => e.replace(/,$/, "").trim()));
        function Sr(t) {
          const e = [];
          for (; t.parentNode; ) {
            const i = b(t, "id");
            if (i) {
              e.unshift("#" + Mi(i));
              break;
            } else {
              let { tagName: s } = t;
              s !== "HTML" && (s += ":nth-child(" + (ie(t) + 1) + ")"), e.unshift(s), t = t.parentNode;
            }
          }
          return e.join(" > ");
        }
        function Mi(t) {
          return M(t) ? CSS.escape(t) : "";
        }
        function k() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          let [s, n, r, o, a = false] = Di(e);
          o.length > 1 && (o = Cr(o)), a != null && a.self && (o = Ir(o)), r && (o = Tr(r, o));
          for (const l of n)
            for (const h of s)
              h.addEventListener(l, o, a);
          return () => Dt(s, n, o, a);
        }
        function Dt() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          let [s, n, , r, o = false] = Di(e);
          for (const a of n)
            for (const l of s)
              l.removeEventListener(a, r, o);
        }
        function N() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          const [s, n, r, o, a = false, l] = Di(e), h = k(s, n, r, (u) => {
            const d = !l || l(u);
            d && (h(), o(u, d));
          }, a);
          return h;
        }
        function g(t, e, i) {
          return Ni(t).every((s) => s.dispatchEvent(Nt(e, true, true, i)));
        }
        function Nt(t, e, i, s) {
          return e === void 0 && (e = true), i === void 0 && (i = false), M(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })), t;
        }
        function Di(t) {
          return t[0] = Ni(t[0]), M(t[1]) && (t[1] = t[1].split(" ")), ft(t[2]) && t.splice(2, 0, false), t;
        }
        function Tr(t, e) {
          return (i) => {
            const s = t[0] === ">" ? ye(t, i.currentTarget).reverse().filter((n) => A(i.target, n))[0] : tt(i.target, t);
            s && (i.current = s, e.call(this, i));
          };
        }
        function Cr(t) {
          return (e) => K(e.detail) ? t(e, ...e.detail) : t(e);
        }
        function Ir(t) {
          return function(e) {
            if (e.target === e.currentTarget || e.target === e.current)
              return t.call(null, e);
          };
        }
        function ys(t) {
          return t && "addEventListener" in t;
        }
        function Pr(t) {
          return ys(t) ? t : V(t);
        }
        function Ni(t) {
          return K(t) ? t.map(Pr).filter(Boolean) : M(t) ? ye(t) : ys(t) ? [t] : y(t);
        }
        function kt(t) {
          return t.pointerType === "touch" || !!t.touches;
        }
        function se(t) {
          var e, i;
          const { clientX: s, clientY: n } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
          return { x: s, y: n };
        }
        function $s(t, e) {
          const i = { data: null, method: "GET", headers: {}, xhr: new XMLHttpRequest(), beforeSend: I, responseType: "", ...e };
          return Promise.resolve().then(() => i.beforeSend(i)).then(() => Ar(t, i));
        }
        function Ar(t, e) {
          return new Promise((i, s) => {
            const { xhr: n } = e;
            for (const r in e)
              if (r in n)
                try {
                  n[r] = e[r];
                } catch {
                }
            n.open(e.method.toUpperCase(), t);
            for (const r in e.headers)
              n.setRequestHeader(r, e.headers[r]);
            k(n, "load", () => {
              n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(xt(Error(n.statusText), { xhr: n, status: n.status }));
            }), k(n, "error", () => s(xt(Error("Network Error"), { xhr: n }))), k(n, "timeout", () => s(xt(Error("Network Timeout"), { xhr: n }))), n.send(e.data);
          });
        }
        function ks(t, e, i) {
          return new Promise((s, n) => {
            const r = new Image();
            r.onerror = (o) => {
              n(o);
            }, r.onload = () => {
              s(r);
            }, i && (r.sizes = i), e && (r.srcset = e), r.src = t;
          });
        }
        const Er = { "animation-iteration-count": true, "column-count": true, "fill-opacity": true, "flex-grow": true, "flex-shrink": true, "font-weight": true, "line-height": true, opacity: true, order: true, orphans: true, "stroke-dasharray": true, "stroke-dashoffset": true, widows: true, "z-index": true, zoom: true };
        function c(t, e, i, s) {
          s === void 0 && (s = "");
          const n = y(t);
          for (const r of n)
            if (M(e)) {
              if (e = zi(e), q(i))
                return getComputedStyle(r).getPropertyValue(e);
              r.style.setProperty(e, Mt(i) && !Er[e] ? i + "px" : i || Kt(i) ? i : "", s);
            } else if (K(e)) {
              const o = {};
              for (const a of e)
                o[a] = c(r, a);
              return o;
            } else
              Tt(e) && (s = i, $t(e, (o, a) => c(r, a, o, s)));
          return n[0];
        }
        const zi = pt((t) => _r(t));
        function _r(t) {
          if (ht(t, "--"))
            return t;
          t = Yt(t);
          const { style: e } = document.documentElement;
          if (t in e)
            return t;
          for (const i of ["webkit", "moz"]) {
            const s = "-" + i + "-" + t;
            if (s in e)
              return s;
          }
        }
        function x(t) {
          for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
            i[s - 1] = arguments[s];
          Ss(t, i, "add");
        }
        function B(t) {
          for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
            i[s - 1] = arguments[s];
          Ss(t, i, "remove");
        }
        function Fi(t, e) {
          b(t, "class", (i) => (i || "").replace(new RegExp("\\b" + e + "\\b\\s?", "g"), ""));
        }
        function Hi(t) {
          !(arguments.length <= 1) && arguments[1] && B(t, arguments.length <= 1 ? void 0 : arguments[1]), !(arguments.length <= 2) && arguments[2] && x(t, arguments.length <= 2 ? void 0 : arguments[2]);
        }
        function _(t, e) {
          return [e] = Li(e), !!e && y(t).some((i) => i.classList.contains(e));
        }
        function j(t, e, i) {
          const s = Li(e);
          q(i) || (i = !!i);
          for (const n of y(t))
            for (const r of s)
              n.classList.toggle(r, i);
        }
        function Ss(t, e, i) {
          e = e.reduce((s, n) => s.concat(Li(n)), []);
          for (const s of y(t))
            s.classList[i](...e);
        }
        function Li(t) {
          return String(t).split(/\s|,/).filter(Boolean);
        }
        function Or(t, e, i, s) {
          return i === void 0 && (i = 400), s === void 0 && (s = "linear"), i = Math.round(i), Promise.all(y(t).map((n) => new Promise((r, o) => {
            for (const l in e) {
              const h = c(n, l);
              h === "" && c(n, l, h);
            }
            const a = setTimeout(() => g(n, "transitionend"), i);
            N(n, "transitionend transitioncanceled", (l) => {
              let { type: h } = l;
              clearTimeout(a), B(n, "uk-transition"), c(n, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }), h === "transitioncanceled" ? o() : r(n);
            }, { self: true }), x(n, "uk-transition"), c(n, { transitionProperty: Object.keys(e).map(zi).join(","), transitionDuration: i + "ms", transitionTimingFunction: s, ...e });
          })));
        }
        const T = { start: Or, async stop(t) {
          g(t, "transitionend"), await Promise.resolve();
        }, async cancel(t) {
          g(t, "transitioncanceled"), await Promise.resolve();
        }, inProgress(t) {
          return _(t, "uk-transition");
        } }, $e = "uk-animation-";
        function Ts(t, e, i, s, n) {
          return i === void 0 && (i = 200), Promise.all(y(t).map((r) => new Promise((o, a) => {
            g(r, "animationcanceled");
            const l = setTimeout(() => g(r, "animationend"), i);
            N(r, "animationend animationcanceled", (h) => {
              let { type: u } = h;
              clearTimeout(l), u === "animationcanceled" ? a() : o(r), c(r, "animationDuration", ""), Fi(r, $e + "\\S*");
            }, { self: true }), c(r, "animationDuration", i + "ms"), x(r, e, $e + (n ? "leave" : "enter")), ht(e, $e) && (s && x(r, "uk-transform-origin-" + s), n && x(r, $e + "reverse"));
          })));
        }
        const Br = new RegExp($e + "(enter|leave)"), gt = { in: Ts, out(t, e, i, s) {
          return Ts(t, e, i, s, true);
        }, inProgress(t) {
          return Br.test(b(t, "class"));
        }, cancel(t) {
          g(t, "animationcanceled");
        } };
        function Mr(t) {
          if (document.readyState !== "loading") {
            t();
            return;
          }
          N(document, "DOMContentLoaded", t);
        }
        function ut(t, e) {
          var i;
          return (t == null || (i = t.tagName) == null ? void 0 : i.toLowerCase()) === e.toLowerCase();
        }
        function Cs(t) {
          return t = v(t), t.innerHTML = "", t;
        }
        function Pt(t, e) {
          return q(e) ? v(t).innerHTML : L(Cs(t), e);
        }
        const Dr = Je("prepend"), L = Je("append"), Xe = Je("before"), Ge = Je("after");
        function Je(t) {
          return function(e, i) {
            var s;
            const n = y(M(i) ? zt(i) : i);
            return (s = v(e)) == null || s[t](...n), Is(n);
          };
        }
        function rt(t) {
          y(t).forEach((e) => e.remove());
        }
        function Ke(t, e) {
          for (e = V(Xe(t, e)); e.firstChild; )
            e = e.firstChild;
          return L(e, t), e;
        }
        function Wi(t, e) {
          return y(y(t).map((i) => i.hasChildNodes() ? Ke(y(i.childNodes), e) : L(i, e)));
        }
        function ke(t) {
          y(t).map(E).filter((e, i, s) => s.indexOf(e) === i).forEach((e) => e.replaceWith(...e.childNodes));
        }
        const Nr = /^\s*<(\w+|!)[^>]*>/, zr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
        function zt(t) {
          const e = zr.exec(t);
          if (e)
            return document.createElement(e[1]);
          const i = document.createElement("div");
          return Nr.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Is(i.childNodes);
        }
        function Is(t) {
          return t.length > 1 ? t : t[0];
        }
        function vt(t, e) {
          if (!!Jt(t))
            for (e(t), t = t.firstElementChild; t; ) {
              const i = t.nextElementSibling;
              vt(t, e), t = i;
            }
        }
        function v(t, e) {
          return Ps(t) ? V(zt(t)) : Bi(t, e);
        }
        function D(t, e) {
          return Ps(t) ? y(zt(t)) : ye(t, e);
        }
        function Ps(t) {
          return M(t) && ht(t.trim(), "<");
        }
        const Ft = { width: ["left", "right"], height: ["top", "bottom"] };
        function $9(t) {
          const e = Jt(t) ? V(t).getBoundingClientRect() : { height: Q(t), width: Se(t), top: 0, left: 0 };
          return { height: e.height, width: e.width, top: e.top, left: e.left, bottom: e.top + e.height, right: e.left + e.width };
        }
        function P(t, e) {
          const i = $9(t);
          if (t) {
            const { scrollY: n, scrollX: r } = Zt(t), o = { height: n, width: r };
            for (const a in Ft)
              for (const l of Ft[a])
                i[l] += o[a];
          }
          if (!e)
            return i;
          const s = c(t, "position");
          $t(c(t, ["left", "top"]), (n, r) => c(t, r, e[r] - i[r] + w(s === "absolute" && n === "auto" ? Ze(t)[r] : n)));
        }
        function Ze(t) {
          let { top: e, left: i } = P(t);
          const { ownerDocument: { body: s, documentElement: n }, offsetParent: r } = V(t);
          let o = r || n;
          for (; o && (o === s || o === n) && c(o, "position") === "static"; )
            o = o.parentNode;
          if (Jt(o)) {
            const a = P(o);
            e -= a.top + w(c(o, "borderTopWidth")), i -= a.left + w(c(o, "borderLeftWidth"));
          }
          return { top: e - w(c(t, "marginTop")), left: i - w(c(t, "marginLeft")) };
        }
        function Ht(t) {
          t = V(t);
          const e = [t.offsetTop, t.offsetLeft];
          for (; t = t.offsetParent; )
            if (e[0] += t.offsetTop + w(c(t, "borderTopWidth")), e[1] += t.offsetLeft + w(c(t, "borderLeftWidth")), c(t, "position") === "fixed") {
              const i = Zt(t);
              return e[0] += i.scrollY, e[1] += i.scrollX, e;
            }
          return e;
        }
        const Q = As("height"), Se = As("width");
        function As(t) {
          const e = St(t);
          return (i, s) => {
            if (q(s)) {
              if (Gt(i))
                return i["inner" + e];
              if (Fe(i)) {
                const n = i.documentElement;
                return Math.max(n["offset" + e], n["scroll" + e]);
              }
              return i = V(i), s = c(i, t), s = s === "auto" ? i["offset" + e] : w(s) || 0, s - ne(i, t);
            } else
              return c(i, t, !s && s !== 0 ? "" : +s + ne(i, t) + "px");
          };
        }
        function ne(t, e, i) {
          return i === void 0 && (i = "border-box"), c(t, "boxSizing") === i ? Ut(Ft[e].map(St), (s) => w(c(t, "padding" + s)) + w(c(t, "border" + s + "Width"))) : 0;
        }
        function Qe(t) {
          for (const e in Ft)
            for (const i in Ft[e])
              if (Ft[e][i] === t)
                return Ft[e][1 - i];
          return t;
        }
        function ot(t, e, i, s) {
          return e === void 0 && (e = "width"), i === void 0 && (i = window), s === void 0 && (s = false), M(t) ? Ut(Hr(t), (n) => {
            const r = Wr(n);
            return r ? jr(r === "vh" ? Rr() : r === "vw" ? Se(Zt(i)) : s ? i["offset" + St(e)] : $9(i)[e], n) : n;
          }) : w(t);
        }
        const Fr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, Hr = pt((t) => t.toString().replace(/\s/g, "").match(Fr) || []), Lr = /(?:v[hw]|%)$/, Wr = pt((t) => (t.match(Lr) || [])[0]);
        function jr(t, e) {
          return t * w(e) / 100;
        }
        let Te, re;
        function Rr() {
          return Te || (re || (re = v("<div>"), c(re, { height: "100vh", position: "fixed" }), k(window, "resize", () => Te = null)), L(document.body, re), Te = re.clientHeight, rt(re), Te);
        }
        const Lt = typeof window < "u", X = Lt && document.dir === "rtl", Wt = Lt && "ontouchstart" in window, oe = Lt && window.PointerEvent, mt = oe ? "pointerdown" : Wt ? "touchstart" : "mousedown", Ue = oe ? "pointermove" : Wt ? "touchmove" : "mousemove", At = oe ? "pointerup" : Wt ? "touchend" : "mouseup", jt = oe ? "pointerenter" : Wt ? "" : "mouseenter", ae = oe ? "pointerleave" : Wt ? "" : "mouseleave", ti = oe ? "pointercancel" : "touchcancel", G = { reads: [], writes: [], read(t) {
          return this.reads.push(t), Ri(), t;
        }, write(t) {
          return this.writes.push(t), Ri(), t;
        }, clear(t) {
          _s(this.reads, t), _s(this.writes, t);
        }, flush: ji };
        function ji(t) {
          Es(G.reads), Es(G.writes.splice(0)), G.scheduled = false, (G.reads.length || G.writes.length) && Ri(t + 1);
        }
        const qr = 4;
        function Ri(t) {
          G.scheduled || (G.scheduled = true, t && t < qr ? Promise.resolve().then(() => ji(t)) : requestAnimationFrame(() => ji(1)));
        }
        function Es(t) {
          let e;
          for (; e = t.shift(); )
            try {
              e();
            } catch (i) {
              console.error(i);
            }
        }
        function _s(t, e) {
          const i = t.indexOf(e);
          return ~i && t.splice(i, 1);
        }
        function qi() {
        }
        qi.prototype = { positions: [], init() {
          this.positions = [];
          let t;
          this.unbind = k(document, "mousemove", (e) => t = se(e)), this.interval = setInterval(() => {
            !t || (this.positions.push(t), this.positions.length > 5 && this.positions.shift());
          }, 50);
        }, cancel() {
          var t;
          (t = this.unbind) == null || t.call(this), this.interval && clearInterval(this.interval);
        }, movesTo(t) {
          if (this.positions.length < 2)
            return false;
          const e = t.getBoundingClientRect(), { left: i, right: s, top: n, bottom: r } = e, [o] = this.positions, a = Qt(this.positions), l = [o, a];
          return We(a, e) ? false : [[{ x: i, y: n }, { x: s, y: r }], [{ x: i, y: r }, { x: s, y: n }]].some((u) => {
            const d = Vr(l, u);
            return d && We(d, e);
          });
        } };
        function Vr(t, e) {
          let [{ x: i, y: s }, { x: n, y: r }] = t, [{ x: o, y: a }, { x: l, y: h }] = e;
          const u = (h - a) * (n - i) - (l - o) * (r - s);
          if (u === 0)
            return false;
          const d = ((l - o) * (s - a) - (h - a) * (i - o)) / u;
          return d < 0 ? false : { x: i + d * (n - i), y: s + d * (r - s) };
        }
        function le(t, e, i, s) {
          s === void 0 && (s = true);
          const n = new IntersectionObserver(s ? (r, o) => {
            r.some((a) => a.isIntersecting) && e(r, o);
          } : e, i);
          for (const r of y(t))
            n.observe(r);
          return n;
        }
        const Yr = Lt && window.ResizeObserver;
        function Ce(t, e, i) {
          return i === void 0 && (i = { box: "border-box" }), Yr ? Bs(ResizeObserver, t, e, i) : (Xr(), Ie.add(e), { disconnect() {
            Ie.delete(e);
          } });
        }
        let Ie;
        function Xr() {
          if (Ie)
            return;
          Ie = /* @__PURE__ */ new Set();
          let t;
          const e = () => {
            if (!t) {
              t = true, requestAnimationFrame(() => t = false);
              for (const i of Ie)
                i();
            }
          };
          k(window, "load resize", e), k(document, "loadedmetadata load", e, true);
        }
        function Os(t, e, i) {
          return Bs(MutationObserver, t, e, i);
        }
        function Bs(t, e, i, s) {
          const n = new t(i);
          for (const r of y(e))
            n.observe(r, s);
          return n;
        }
        const J = {};
        J.events = J.created = J.beforeConnect = J.connected = J.beforeDisconnect = J.disconnected = J.destroy = Vi, J.args = function(t, e) {
          return e !== false && Vi(e || t);
        }, J.update = function(t, e) {
          return Le(Vi(t, ft(e) ? { read: e } : e), "order");
        }, J.props = function(t, e) {
          if (K(e)) {
            const i = {};
            for (const s of e)
              i[s] = String;
            e = i;
          }
          return J.methods(t, e);
        }, J.computed = J.methods = function(t, e) {
          return e ? t ? { ...t, ...e } : e : t;
        }, J.data = function(t, e, i) {
          return i ? Ms(t, e, i) : e ? t ? function(s) {
            return Ms(t, e, s);
          } : e : t;
        };
        function Ms(t, e, i) {
          return J.computed(ft(t) ? t.call(i, i) : t, ft(e) ? e.call(i, i) : e);
        }
        function Vi(t, e) {
          return t = t && !K(t) ? [t] : t, e ? t ? t.concat(e) : K(e) ? e : [e] : t;
        }
        function Gr(t, e) {
          return q(e) ? t : e;
        }
        function he(t, e, i) {
          const s = {};
          if (ft(e) && (e = e.options), e.extends && (t = he(t, e.extends, i)), e.mixins)
            for (const r of e.mixins)
              t = he(t, r, i);
          for (const r in t)
            n(r);
          for (const r in e)
            Bt(t, r) || n(r);
          function n(r) {
            s[r] = (J[r] || Gr)(t[r], e[r], i);
          }
          return s;
        }
        function Pe(t, e) {
          e === void 0 && (e = []);
          try {
            return t ? ht(t, "{") ? JSON.parse(t) : e.length && !p(t, ":") ? { [e[0]]: t } : t.split(";").reduce((i, s) => {
              const [n, r] = s.split(/:(.*)/);
              return n && !q(r) && (i[n.trim()] = r.trim()), i;
            }, {}) : {};
          } catch {
            return {};
          }
        }
        function Ds(t) {
          if (ii(t) && Yi(t, { func: "playVideo", method: "play" }), ei(t))
            try {
              t.play().catch(I);
            } catch {
            }
        }
        function Ns(t) {
          ii(t) && Yi(t, { func: "pauseVideo", method: "pause" }), ei(t) && t.pause();
        }
        function zs(t) {
          ii(t) && Yi(t, { func: "mute", method: "setVolume", value: 0 }), ei(t) && (t.muted = true);
        }
        function Fs(t) {
          return ei(t) || ii(t);
        }
        function ei(t) {
          return ut(t, "video");
        }
        function ii(t) {
          return ut(t, "iframe") && (Hs(t) || Ls(t));
        }
        function Hs(t) {
          return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
        }
        function Ls(t) {
          return !!t.src.match(/vimeo\.com\/video\/.*/);
        }
        async function Yi(t, e) {
          await Kr(t), Ws(t, e);
        }
        function Ws(t, e) {
          try {
            t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
          } catch {
          }
        }
        const Xi = "_ukPlayer";
        let Jr = 0;
        function Kr(t) {
          if (t[Xi])
            return t[Xi];
          const e = Hs(t), i = Ls(t), s = ++Jr;
          let n;
          return t[Xi] = new Promise((r) => {
            e && N(t, "load", () => {
              const o = () => Ws(t, { event: "listening", id: s });
              n = setInterval(o, 100), o();
            }), N(window, "message", r, false, (o) => {
              let { data: a } = o;
              try {
                return a = JSON.parse(a), a && (e && a.id === s && a.event === "onReady" || i && Number(a.player_id) === s);
              } catch {
              }
            }), t.src = "" + t.src + (p(t.src, "?") ? "&" : "?") + (e ? "enablejsapi=1" : "api=1&player_id=" + s);
          }).then(() => clearInterval(n));
        }
        function Gi(t, e, i) {
          return e === void 0 && (e = 0), i === void 0 && (i = 0), R(t) ? Ai(...U(t).map((s) => {
            const { top: n, left: r, bottom: o, right: a } = at(s);
            return { top: n - e, left: r - i, bottom: o + e, right: a + i };
          }).concat(P(t))) : false;
        }
        function js(t, e) {
          let { offset: i = 0 } = e === void 0 ? {} : e;
          const s = R(t) ? U(t) : [];
          return s.reduce((a, l, h) => {
            const { scrollTop: u, scrollHeight: d, offsetHeight: f } = l, m = at(l), S = d - m.height, { height: C, top: H } = s[h - 1] ? at(s[h - 1]) : P(t);
            let W = Math.ceil(H - m.top - i + u);
            return i > 0 && f < C + i ? W += i : i = 0, W > S ? (i -= W - S, W = S) : W < 0 && (i -= W, W = 0), () => n(l, W - u).then(a);
          }, () => Promise.resolve())();
          function n(a, l) {
            return new Promise((h) => {
              const u = a.scrollTop, d = r(Math.abs(l)), f = Date.now();
              (function m() {
                const S = o(Z((Date.now() - f) / d));
                a.scrollTop = u + l * S, S === 1 ? h() : requestAnimationFrame(m);
              })();
            });
          }
          function r(a) {
            return 40 * Math.pow(a, 0.375);
          }
          function o(a) {
            return 0.5 * (1 - Math.cos(Math.PI * a));
          }
        }
        function Ji(t, e, i) {
          if (e === void 0 && (e = 0), i === void 0 && (i = 0), !R(t))
            return 0;
          const [s] = U(t, /auto|scroll/, true), { scrollHeight: n, scrollTop: r } = s, { height: o } = at(s), a = n - o, l = Ht(t)[0] - Ht(s)[0], h = Math.max(0, l - o + e), u = Math.min(a, l + t.offsetHeight - i);
          return Z((r - h) / (u - h));
        }
        function U(t, e, i) {
          e === void 0 && (e = /auto|scroll|hidden|clip/), i === void 0 && (i = false);
          const s = Rs(t);
          let n = ee(t).reverse();
          n = n.slice(n.indexOf(s) + 1);
          const r = bt(n, (o) => c(o, "position") === "fixed");
          return ~r && (n = n.slice(r)), [s].concat(n.filter((o) => e.test(c(o, "overflow")) && (!i || o.scrollHeight > at(o).height))).reverse();
        }
        function at(t) {
          const e = Zt(t), { document: { documentElement: i } } = e;
          let s = t === Rs(t) ? e : t;
          const { visualViewport: n } = e;
          if (Gt(s) && n) {
            let { height: o, width: a, scale: l, pageTop: h, pageLeft: u } = n;
            return o = Math.round(o * l), a = Math.round(a * l), { height: o, width: a, top: h, left: u, bottom: h + o, right: u + a };
          }
          let r = P(s);
          for (let [o, a, l, h] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]])
            Gt(s) ? s = i : r[l] += w(c(s, "border-" + l + "-width")), r[o] = r[a] = s["client" + St(o)], r[h] = r[o] + r[l];
          return r;
        }
        function Rs(t) {
          return Zt(t).document.scrollingElement;
        }
        const lt = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
        function qs(t, e, i) {
          i = { attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach }, offset: [0, 0], placement: [], ...i }, K(e) || (e = [e, e]), P(t, Vs(t, e, i));
        }
        function Vs(t, e, i) {
          const s = Ys(t, e, i), { boundary: n, viewportOffset: r = 0, placement: o } = i;
          let a = s;
          for (const [l, [h, , u, d]] of Object.entries(lt)) {
            const f = Zr(t, e[l], r, n, l);
            if (si(s, f, l))
              continue;
            let m = 0;
            if (o[l] === "flip") {
              const S = i.attach.target[l];
              if (S === d && s[d] <= f[d] || S === u && s[u] >= f[u])
                continue;
              m = Ur(t, e, i, l)[u] - s[u];
              const C = Qr(t, e[l], r, l);
              if (!si(Ki(s, m, l), C, l)) {
                if (si(s, C, l))
                  continue;
                if (i.recursion)
                  return false;
                const H = to(t, e, i);
                if (H && si(H, C, 1 - l))
                  return H;
                continue;
              }
            } else if (o[l] === "shift") {
              const S = P(e[l]), { offset: C } = i;
              m = Z(Z(s[u], f[u], f[d] - s[h]), S[u] - s[h] + C[l], S[d] - C[l]) - s[u];
            }
            a = Ki(a, m, l);
          }
          return a;
        }
        function Ys(t, e, i) {
          let { attach: s, offset: n } = { attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach }, offset: [0, 0], ...i }, r = P(t);
          for (const [o, [a, , l, h]] of Object.entries(lt)) {
            const u = s.target[o] === s.element[o] ? at(e[o]) : P(e[o]);
            r = Ki(r, u[l] - r[l] + Xs(s.target[o], h, u[a]) - Xs(s.element[o], h, r[a]) + +n[o], o);
          }
          return r;
        }
        function Ki(t, e, i) {
          const [, s, n, r] = lt[i], o = { ...t };
          return o[n] = t[s] = t[n] + e, o[r] += e, o;
        }
        function Xs(t, e, i) {
          return t === "center" ? i / 2 : t === e ? i : 0;
        }
        function Zr(t, e, i, s, n) {
          let r = Js(...Gs(t, e).map(at));
          return i && (r[lt[n][2]] += i, r[lt[n][3]] -= i), s && (r = Js(r, P(K(s) ? s[n] : s))), r;
        }
        function Qr(t, e, i, s) {
          const [n, r, o, a] = lt[s], [l] = Gs(t, e), h = at(l);
          return ["auto", "scroll"].includes(c(l, "overflow-" + r)) && (h[o] -= l["scroll" + St(o)], h[a] = l["scroll" + St(n)]), h[o] += i, h[a] -= i, h;
        }
        function Gs(t, e) {
          return U(e).filter((i) => A(t, i));
        }
        function Js() {
          let t = {};
          for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
            i[s] = arguments[s];
          for (const n of i)
            for (const [, , r, o] of lt)
              t[r] = Math.max(t[r] || 0, n[r]), t[o] = Math.min(...[t[o], n[o]].filter(Boolean));
          return t;
        }
        function si(t, e, i) {
          const [, , s, n] = lt[i];
          return t[s] >= e[s] && t[n] <= e[n];
        }
        function Ur(t, e, i, s) {
          let { offset: n, attach: r } = i;
          return Ys(t, e, { attach: { element: Ks(r.element, s), target: Ks(r.target, s) }, offset: eo(n, s) });
        }
        function to(t, e, i) {
          return Vs(t, e, { ...i, attach: { element: i.attach.element.map(Zs).reverse(), target: i.attach.target.map(Zs).reverse() }, offset: i.offset.reverse(), placement: i.placement.reverse(), recursion: true });
        }
        function Ks(t, e) {
          const i = [...t], s = lt[e].indexOf(t[e]);
          return ~s && (i[e] = lt[e][1 - s % 2 + 2]), i;
        }
        function Zs(t) {
          for (let e = 0; e < lt.length; e++) {
            const i = lt[e].indexOf(t);
            if (~i)
              return lt[1 - e][i % 2 + 2];
          }
        }
        function eo(t, e) {
          return t = [...t], t[e] *= -1, t;
        }
        var io = Object.freeze({ __proto__: null, ajax: $s, getImage: ks, Transition: T, Animation: gt, attr: b, hasAttr: It, removeAttr: we, data: nt, addClass: x, removeClass: B, removeClasses: Fi, replaceClass: Hi, hasClass: _, toggleClass: j, dimensions: $9, offset: P, position: Ze, offsetPosition: Ht, height: Q, width: Se, boxModelAdjust: ne, flipPosition: Qe, toPx: ot, ready: Mr, isTag: ut, empty: Cs, html: Pt, prepend: Dr, append: L, before: Xe, after: Ge, remove: rt, wrapAll: Ke, wrapInner: Wi, unwrap: ke, fragment: zt, apply: vt, $: v, $$: D, inBrowser: Lt, isRtl: X, hasTouch: Wt, pointerDown: mt, pointerMove: Ue, pointerUp: At, pointerEnter: jt, pointerLeave: ae, pointerCancel: ti, on: k, off: Dt, once: N, trigger: g, createEvent: Nt, toEventTargets: Ni, isTouch: kt, getEventPos: se, fastdom: G, isVoidElement: _i, isVisible: R, selInput: be, isInput: Oi, selFocusable: qe, isFocusable: Ve, parent: E, filter: Ye, matches: z, closest: tt, within: A, parents: ee, children: O, index: ie, hasOwn: Bt, hyphenate: Yt, camelize: ge, ucfirst: St, startsWith: ht, endsWith: Xt, includes: p, findIndex: bt, isArray: K, toArray: Si, assign: xt, isFunction: ft, isObject: Tt, isPlainObject: yt, isWindow: Gt, isDocument: Fe, isNode: Ti, isElement: Jt, isBoolean: He, isString: M, isNumber: Kt, isNumeric: Mt, isEmpty: me, isUndefined: q, toBoolean: Ii, toNumber: Ct, toFloat: w, toNode: V, toNodes: y, toWindow: Zt, isEqual: ve, swap: Pi, last: Qt, each: $t, sortBy: Le, sumBy: Ut, uniqueBy: ms, clamp: Z, noop: I, intersectRect: Ai, pointInRect: We, Dimensions: je, getIndex: te, memoize: pt, Deferred: Re, MouseTracker: qi, observeIntersection: le, observeResize: Ce, observeMutation: Os, mergeOptions: he, parseOptions: Pe, play: Ds, pause: Ns, mute: zs, isVideo: Fs, positionAt: qs, query: ct, queryAll: xe, find: Bi, findAll: ye, escape: Mi, css: c, propName: zi, isInView: Gi, scrollIntoView: js, scrolledOver: Ji, scrollParents: U, offsetViewport: at });
        function so(t) {
          const e = t.data;
          t.use = function(n) {
            if (!n.installed)
              return n.call(null, this), n.installed = true, this;
          }, t.mixin = function(n, r) {
            r = (M(r) ? t.component(r) : r) || this, r.options = he(r.options, n);
          }, t.extend = function(n) {
            n = n || {};
            const r = this, o = function(l) {
              this._init(l);
            };
            return o.prototype = Object.create(r.prototype), o.prototype.constructor = o, o.options = he(r.options, n), o.super = r, o.extend = r.extend, o;
          }, t.update = function(n, r) {
            n = n ? V(n) : document.body;
            for (const o of ee(n).reverse())
              s(o[e], r);
            vt(n, (o) => s(o[e], r));
          };
          let i;
          Object.defineProperty(t, "container", { get() {
            return i || document.body;
          }, set(n) {
            i = v(n);
          } });
          function s(n, r) {
            if (!!n)
              for (const o in n)
                n[o]._connected && n[o]._callUpdate(r);
          }
        }
        function no(t) {
          t.prototype._callHook = function(s) {
            var n;
            (n = this.$options[s]) == null || n.forEach((r) => r.call(this));
          }, t.prototype._callConnected = function() {
            this._connected || (this._data = {}, this._computed = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = true, this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate());
          }, t.prototype._callDisconnected = function() {
            !this._connected || (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), this._connected = false, delete this._watch);
          }, t.prototype._callUpdate = function(s) {
            s === void 0 && (s = "update"), this._connected && ((s === "update" || s === "resize") && this._callWatches(), this.$options.update && (this._updates || (this._updates = /* @__PURE__ */ new Set(), G.read(() => {
              this._connected && e.call(this, this._updates), delete this._updates;
            })), this._updates.add(s.type || s)));
          }, t.prototype._callWatches = function() {
            if (this._watch)
              return;
            const s = !Bt(this, "_watch");
            this._watch = G.read(() => {
              this._connected && i.call(this, s), this._watch = null;
            });
          };
          function e(s) {
            for (const { read: n, write: r, events: o = [] } of this.$options.update) {
              if (!s.has("update") && !o.some((l) => s.has(l)))
                continue;
              let a;
              n && (a = n.call(this, this._data, s), a && yt(a) && xt(this._data, a)), r && a !== false && G.write(() => {
                this._connected && r.call(this, this._data, s);
              });
            }
          }
          function i(s) {
            const { $options: { computed: n } } = this, r = { ...this._computed };
            this._computed = {};
            for (const o in n) {
              const { watch: a, immediate: l } = n[o];
              a && (s && l || Bt(r, o) && !ve(r[o], this[o])) && a.call(this, this[o], r[o]);
            }
          }
        }
        function ro(t) {
          let e = 0;
          t.prototype._init = function(i) {
            i = i || {}, i.data = ho(i, this.constructor.options), this.$options = he(this.constructor.options, i, this), this.$el = null, this.$props = {}, this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), i.el && this.$mount(i.el);
          }, t.prototype._initData = function() {
            const { data: i = {} } = this.$options;
            for (const s in i)
              this.$props[s] = this[s] = i[s];
          }, t.prototype._initMethods = function() {
            const { methods: i } = this.$options;
            if (i)
              for (const s in i)
                this[s] = i[s].bind(this);
          }, t.prototype._initComputeds = function() {
            const { computed: i } = this.$options;
            if (this._computed = {}, i)
              for (const s in i)
                oo(this, s, i[s]);
          }, t.prototype._initProps = function(i) {
            let s;
            i = i || Qs(this.$options);
            for (s in i)
              q(i[s]) || (this.$props[s] = i[s]);
            const n = [this.$options.computed, this.$options.methods];
            for (s in this.$props)
              s in i && ao(n, s) && (this[s] = this.$props[s]);
          }, t.prototype._initEvents = function() {
            this._events = [];
            for (const i of this.$options.events || [])
              if (Bt(i, "handler"))
                ni(this, i);
              else
                for (const s in i)
                  ni(this, i[s], s);
          }, t.prototype._unbindEvents = function() {
            this._events.forEach((i) => i()), delete this._events;
          }, t.prototype._initObservers = function() {
            this._observers = [uo(this), co(this)];
          }, t.prototype.registerObserver = function() {
            this._observers.push(...arguments);
          }, t.prototype._disconnectObservers = function() {
            this._observers.forEach((i) => i == null ? void 0 : i.disconnect());
          };
        }
        function Qs(t) {
          const e = {}, { args: i = [], props: s = {}, el: n, id: r } = t;
          if (!s)
            return e;
          for (const a in s) {
            const l = Yt(a);
            let h = nt(n, l);
            q(h) || (h = s[a] === Boolean && h === "" ? true : Zi(s[a], h), !(l === "target" && ht(h, "_")) && (e[a] = h));
          }
          const o = Pe(nt(n, r), i);
          for (const a in o) {
            const l = ge(a);
            q(s[l]) || (e[l] = Zi(s[l], o[a]));
          }
          return e;
        }
        function oo(t, e, i) {
          Object.defineProperty(t, e, { enumerable: true, get() {
            const { _computed: s, $props: n, $el: r } = t;
            return Bt(s, e) || (s[e] = (i.get || i).call(t, n, r)), s[e];
          }, set(s) {
            const { _computed: n } = t;
            n[e] = i.set ? i.set.call(t, s) : s, q(n[e]) && delete n[e];
          } });
        }
        function ni(t, e, i) {
          yt(e) || (e = { name: i, handler: e });
          let { name: s, el: n, handler: r, capture: o, passive: a, delegate: l, filter: h, self: u } = e;
          if (n = ft(n) ? n.call(t) : n || t.$el, K(n)) {
            n.forEach((d) => ni(t, { ...e, el: d }, i));
            return;
          }
          !n || h && !h.call(t) || t._events.push(k(n, s, l ? M(l) ? l : l.call(t) : null, M(r) ? t[r] : r.bind(t), { passive: a, capture: o, self: u }));
        }
        function ao(t, e) {
          return t.every((i) => !i || !Bt(i, e));
        }
        function Zi(t, e) {
          return t === Boolean ? Ii(e) : t === Number ? Ct(e) : t === "list" ? lo(e) : t ? t(e) : e;
        }
        function lo(t) {
          return K(t) ? t : M(t) ? t.split(/,(?![^(]*\))/).map((e) => Mt(e) ? Ct(e) : Ii(e.trim())) : [t];
        }
        function ho(t, e) {
          let { data: i = {} } = t, { args: s = [], props: n = {} } = e;
          K(i) && (i = i.slice(0, s.length).reduce((r, o, a) => (yt(o) ? xt(r, o) : r[s[a]] = o, r), {}));
          for (const r in i)
            q(i[r]) ? delete i[r] : n[r] && (i[r] = Zi(n[r], i[r]));
          return i;
        }
        function co(t) {
          let { el: e, computed: i } = t.$options;
          if (!i)
            return;
          for (const n in i)
            if (i[n].document) {
              e = e.ownerDocument;
              break;
            }
          const s = new MutationObserver(() => t._callWatches());
          return s.observe(e, { childList: true, subtree: true }), s;
        }
        function uo(t) {
          const { $options: e, $props: i } = t, { id: s, attrs: n, props: r, el: o } = e;
          if (!r || n === false)
            return;
          const a = K(n) ? n : Object.keys(r), l = a.map((u) => Yt(u)).concat(s), h = new MutationObserver((u) => {
            const d = Qs(e);
            u.some((f) => {
              let { attributeName: m } = f;
              const S = m.replace("data-", "");
              return (S === s ? a : [ge(S), ge(m)]).some((C) => !q(d[C]) && d[C] !== i[C]);
            }) && t.$reset();
          });
          return h.observe(o, { attributes: true, attributeFilter: l.concat(l.map((u) => "data-" + u)) }), h;
        }
        function fo(t) {
          const e = t.data;
          t.prototype.$create = function(i, s, n) {
            return t[i](s, n);
          }, t.prototype.$mount = function(i) {
            const { name: s } = this.$options;
            i[e] || (i[e] = {}), !i[e][s] && (i[e][s] = this, this.$el = this.$options.el = this.$options.el || i, A(i, document) && this._callConnected());
          }, t.prototype.$reset = function() {
            this._callDisconnected(), this._callConnected();
          }, t.prototype.$destroy = function(i) {
            i === void 0 && (i = false);
            const { el: s, name: n } = this.$options;
            s && this._callDisconnected(), this._callHook("destroy"), s != null && s[e] && (delete s[e][n], me(s[e]) || delete s[e], i && rt(this.$el));
          }, t.prototype.$emit = function(i) {
            this._callUpdate(i);
          }, t.prototype.$update = function(i, s) {
            i === void 0 && (i = this.$el), t.update(i, s);
          }, t.prototype.$getComponent = t.getComponent, Object.defineProperty(t.prototype, "$container", Object.getOwnPropertyDescriptor(t, "container"));
        }
        const Et = {};
        function po(t) {
          const { data: e, prefix: i } = t;
          t.component = function(s, n) {
            s = Yt(s);
            const r = i + s;
            if (!n)
              return yt(Et[r]) && (Et[r] = Et["data-" + r] = t.extend(Et[r])), Et[r];
            s = ge(s), t[s] = function(a, l) {
              const h = t.component(s);
              return h.options.functional ? new h({ data: yt(a) ? a : [...arguments] }) : a ? D(a).map(u)[0] : u();
              function u(d) {
                const f = t.getComponent(d, s);
                if (f)
                  if (l)
                    f.$destroy();
                  else
                    return f;
                return new h({ el: d, data: l });
              }
            };
            const o = yt(n) ? { ...n } : n.options;
            return o.id = r, o.name = s, o.install == null || o.install(t, o, s), t._initialized && !o.functional && requestAnimationFrame(() => t[s]("[" + r + "],[data-" + r + "]")), Et[r] = Et["data-" + r] = yt(n) ? o : n;
          }, t.getComponents = (s) => (s == null ? void 0 : s[e]) || {}, t.getComponent = (s, n) => t.getComponents(s)[n], t.connect = (s) => {
            if (s[e])
              for (const n in s[e])
                s[e][n]._callConnected();
            for (const n of s.getAttributeNames()) {
              const r = Us(n);
              r && t[r](s);
            }
          }, t.disconnect = (s) => {
            for (const n in s[e])
              s[e][n]._callDisconnected();
          };
        }
        function Us(t) {
          const e = Et[t];
          return e && (yt(e) ? e : e.options).name;
        }
        const et = function(t) {
          this._init(t);
        };
        et.util = io, et.data = "__uikit__", et.prefix = "uk-", et.options = {}, et.version = "3.15.17", so(et), no(et), ro(et), po(et), fo(et);
        function go(t) {
          const { connect: e, disconnect: i } = t;
          if (!Lt || !window.MutationObserver)
            return;
          requestAnimationFrame(function() {
            g(document, "uikit:init", t), document.body && vt(document.body, e), new MutationObserver((r) => r.forEach(s)).observe(document, { childList: true, subtree: true }), new MutationObserver((r) => r.forEach(n)).observe(document, { attributes: true, subtree: true }), t._initialized = true;
          });
          function s(r) {
            let { addedNodes: o, removedNodes: a } = r;
            for (const l of o)
              vt(l, e);
            for (const l of a)
              vt(l, i);
          }
          function n(r) {
            let { target: o, attributeName: a } = r;
            const l = Us(a);
            if (l) {
              var h;
              if (It(o, a)) {
                t[l](o);
                return;
              }
              (h = t.getComponent(o, l)) == null || h.$destroy();
            }
          }
        }
        var it = { connected() {
          x(this.$el, this.$options.id);
        } }, Ae = { data: { preload: 5 }, methods: { lazyload(t, e) {
          t === void 0 && (t = this.$el), e === void 0 && (e = this.$el), this.registerObserver(le(t, (i, s) => {
            for (const n of y(ft(e) ? e() : e))
              D('[loading="lazy"]', n).slice(0, this.preload - 1).forEach((r) => we(r, "loading"));
            for (const n of i.filter((r) => {
              let { isIntersecting: o } = r;
              return o;
            }).map((r) => {
              let { target: o } = r;
              return o;
            }))
              s.unobserve(n);
          }));
        } } }, _t = { props: { cls: Boolean, animation: "list", duration: Number, velocity: Number, origin: String, transition: String }, data: { cls: false, animation: [false], duration: 200, velocity: 0.2, origin: false, transition: "ease", clsEnter: "uk-togglabe-enter", clsLeave: "uk-togglabe-leave" }, computed: { hasAnimation(t) {
          let { animation: e } = t;
          return !!e[0];
        }, hasTransition(t) {
          let { animation: e } = t;
          return ["slide", "reveal"].some((i) => ht(e[0], i));
        } }, methods: { toggleElement(t, e, i) {
          return new Promise((s) => Promise.all(y(t).map((n) => {
            const r = He(e) ? e : !this.isToggled(n);
            if (!g(n, "before" + (r ? "show" : "hide"), [this]))
              return Promise.reject();
            const o = (ft(i) ? i : i === false || !this.hasAnimation ? mo : this.hasTransition ? vo : wo)(n, r, this), a = r ? this.clsEnter : this.clsLeave;
            x(n, a), g(n, r ? "show" : "hide", [this]);
            const l = () => {
              B(n, a), g(n, r ? "shown" : "hidden", [this]);
            };
            return o ? o.then(l, () => (B(n, a), Promise.reject())) : l();
          })).then(s, I));
        }, isToggled(t) {
          return t === void 0 && (t = this.$el), [t] = y(t), _(t, this.clsEnter) ? true : _(t, this.clsLeave) ? false : this.cls ? _(t, this.cls.split(" ")[0]) : R(t);
        }, _toggle(t, e) {
          if (!t)
            return;
          e = Boolean(e);
          let i;
          this.cls ? (i = p(this.cls, " ") || e !== _(t, this.cls), i && j(t, this.cls, p(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), D("[autofocus]", t).some((s) => R(s) ? s.focus() || true : s.blur()), i && g(t, "toggled", [e, this]);
        } } };
        function mo(t, e, i) {
          let { _toggle: s } = i;
          return gt.cancel(t), T.cancel(t), s(t, e);
        }
        async function vo(t, e, i) {
          var s;
          let { animation: n, duration: r, velocity: o, transition: a, _toggle: l } = i;
          const [h = "reveal", u = "top"] = ((s = n[0]) == null ? void 0 : s.split("-")) || [], d = [["left", "right"], ["top", "bottom"]], f = d[p(d[0], u) ? 0 : 1], m = f[1] === u, C = ["width", "height"][d.indexOf(f)], H = "margin-" + f[0], W = "margin-" + u;
          let Ot = $9(t)[C];
          const fs = T.inProgress(t);
          await T.cancel(t), e && l(t, true);
          const jl = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", H, W].map((pr) => [pr, t.style[pr]])), ze = $9(t), ps = w(c(t, H)), ur = w(c(t, W)), Vt = ze[C] + ur;
          !fs && !e && (Ot += ur);
          const [ki] = Wi(t, "<div>");
          c(ki, { boxSizing: "border-box", height: ze.height, width: ze.width, ...c(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", W]) }), c(t, { padding: 0, border: 0, minWidth: 0, minHeight: 0, [W]: 0, width: ze.width, height: ze.height, overflow: "hidden", [C]: Ot });
          const dr = Ot / Vt;
          r = (o * Vt + r) * (e ? 1 - dr : dr);
          const fr = { [C]: e ? Vt : 0 };
          m && (c(t, H, Vt - Ot + ps), fr[H] = e ? ps : Vt + ps), !m ^ h === "reveal" && (c(ki, H, -Vt + Ot), T.start(ki, { [H]: e ? 0 : -Vt }, r, a));
          try {
            await T.start(t, fr, r, a);
          } finally {
            c(t, jl), ke(ki.firstChild), e || l(t, false);
          }
        }
        function wo(t, e, i) {
          gt.cancel(t);
          const { animation: s, duration: n, _toggle: r } = i;
          return e ? (r(t, true), gt.in(t, s[0], n, i.origin)) : gt.out(t, s[1] || s[0], n, i.origin).then(() => r(t, false));
        }
        var tn = { mixins: [it, Ae, _t], props: { animation: Boolean, targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, offset: Number }, data: { targets: "> *", active: false, animation: true, collapsible: true, multiple: false, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", offset: 0 }, computed: { items: { get(t, e) {
          let { targets: i } = t;
          return D(i, e);
        }, watch(t, e) {
          if (e || _(t, this.clsOpen))
            return;
          const i = this.active !== false && t[Number(this.active)] || !this.collapsible && t[0];
          i && this.toggle(i, false);
        }, immediate: true }, toggles(t) {
          let { toggle: e } = t;
          return this.items.map((i) => v(e, i));
        }, contents: { get(t) {
          let { content: e } = t;
          return this.items.map((i) => v(e, i));
        }, watch(t) {
          for (const e of t)
            ri(e, !_(this.items.find((i) => A(e, i)), this.clsOpen));
        }, immediate: true } }, connected() {
          this.lazyload();
        }, events: [{ name: "click", delegate() {
          return this.targets + " " + this.$props.toggle;
        }, async handler(t) {
          var e;
          t.preventDefault(), (e = this._off) == null || e.call(this), this._off = xo(t.target), await this.toggle(ie(this.toggles, t.current)), this._off();
        } }], methods: { async toggle(t, e) {
          t = this.items[te(t, this.items)];
          let i = [t];
          const s = Ye(this.items, "." + this.clsOpen);
          !this.multiple && !p(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && p(s, t)) && await Promise.all(i.map((n) => this.toggleElement(n, !p(s, n), (r, o) => {
            if (j(r, this.clsOpen, o), b(v(this.$props.toggle, r), "aria-expanded", o), e === false || !this.animation) {
              ri(v(this.content, r), !o);
              return;
            }
            return bo(r, o, this);
          })));
        } } };
        function ri(t, e) {
          t && (t.hidden = e);
        }
        async function bo(t, e, i) {
          var s;
          let { content: n, duration: r, velocity: o, transition: a } = i;
          n = ((s = t._wrapper) == null ? void 0 : s.firstElementChild) || v(n, t), t._wrapper || (t._wrapper = Ke(n, "<div>"));
          const l = t._wrapper;
          c(l, "overflow", "hidden");
          const h = w(c(l, "height"));
          await T.cancel(l), ri(n, false);
          const u = Ut(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], (f) => c(n, f)), d = h / u;
          r = (o * u + r) * (e ? 1 - d : d), c(l, "height", h), await T.start(l, { height: e ? u : 0 }, r, a), ke(n), delete t._wrapper, e || ri(n, true);
        }
        function xo(t) {
          const e = U(t)[0];
          let i;
          return function s() {
            i = requestAnimationFrame(() => {
              const { top: n } = t.getBoundingClientRect();
              n < 0 && (e.scrollTop += n), s();
            });
          }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
        }
        var yo = { mixins: [it, _t], args: "animation", props: { animation: Boolean, close: String }, data: { animation: true, selClose: ".uk-alert-close", duration: 150 }, events: { name: "click", delegate() {
          return this.selClose;
        }, handler(t) {
          t.preventDefault(), this.close();
        } }, methods: { async close() {
          await this.toggleElement(this.$el, false, $o), this.$destroy(true);
        } } };
        function $o(t, e, i) {
          let { duration: s, transition: n, velocity: r } = i;
          const o = w(c(t, "height"));
          return c(t, "height", o), T.start(t, { height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderTop: 0, borderBottom: 0, opacity: 0 }, r * o + s, n);
        }
        var en = { args: "autoplay", props: { automute: Boolean, autoplay: Boolean }, data: { automute: false, autoplay: true }, connected() {
          this.inView = this.autoplay === "inview", this.inView && !It(this.$el, "preload") && (this.$el.preload = "none"), ut(this.$el, "iframe") && !It(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && zs(this.$el), this.registerObserver(le(this.$el, () => this.$emit(), {}, false));
        }, update: { read(t) {
          let { visible: e } = t;
          return Fs(this.$el) ? { prev: e, visible: R(this.$el) && c(this.$el, "visibility") !== "hidden", inView: this.inView && Gi(this.$el) } : false;
        }, write(t) {
          let { prev: e, visible: i, inView: s } = t;
          !i || this.inView && !s ? Ns(this.$el) : (this.autoplay === true && !e || this.inView && s) && Ds(this.$el);
        } } }, wt = { connected() {
          var t;
          this.registerObserver(Ce(((t = this.$options.resizeTargets) == null ? void 0 : t.call(this)) || this.$el, () => this.$emit("resize")));
        } }, ko = { mixins: [wt, en], props: { width: Number, height: Number }, data: { automute: true }, events: { "load loadedmetadata"() {
          this.$emit("resize");
        } }, resizeTargets() {
          return [this.$el, sn(this.$el) || E(this.$el)];
        }, update: { read() {
          const { ratio: t, cover: e } = je, { $el: i, width: s, height: n } = this;
          let r = { width: s, height: n };
          if (!r.width || !r.height) {
            const h = { width: i.naturalWidth || i.videoWidth || i.clientWidth, height: i.naturalHeight || i.videoHeight || i.clientHeight };
            r.width ? r = t(h, "width", r.width) : n ? r = t(h, "height", r.height) : r = h;
          }
          const { offsetHeight: o, offsetWidth: a } = sn(i) || E(i), l = e(r, { width: a + (a % 2 ? 1 : 0), height: o + (o % 2 ? 1 : 0) });
          return !l.width || !l.height ? false : l;
        }, write(t) {
          let { height: e, width: i } = t;
          c(this.$el, { height: e, width: i });
        }, events: ["resize"] } };
        function sn(t) {
          for (; t = E(t); )
            if (c(t, "position") !== "static")
              return t;
        }
        var ce = { props: { container: Boolean }, data: { container: true }, computed: { container(t) {
          let { container: e } = t;
          return e === true && this.$container || e && v(e);
        } } }, nn = { props: { pos: String, offset: null, flip: Boolean, shift: Boolean, inset: Boolean }, data: { pos: "bottom-" + (X ? "right" : "left"), offset: false, flip: true, shift: true, inset: false }, connected() {
          this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = p(["top", "bottom"], this.dir) ? "y" : "x";
        }, methods: { positionAt(t, e, i) {
          let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const n = [this.flip && "flip", this.shift && "shift"], r = { element: [this.inset ? this.dir : Qe(this.dir), this.align], target: [this.dir, this.align] };
          if (this.axis === "y") {
            for (const u in r)
              r[u].reverse();
            s.reverse(), n.reverse();
          }
          const [o] = U(t, /auto|scroll/), { scrollTop: a, scrollLeft: l } = o, h = $9(t);
          c(t, { top: -h.height, left: -h.width }), qs(t, e, { attach: r, offset: s, boundary: i, placement: n, viewportOffset: this.getViewportOffset(t) }), o.scrollTop = a, o.scrollLeft = l;
        }, getPositionOffset(t) {
          return ot(this.offset === false ? c(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (p(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        }, getShiftOffset(t) {
          return this.align === "center" ? 0 : ot(c(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (p(["left", "top"], this.align) ? 1 : -1);
        }, getViewportOffset(t) {
          return ot(c(t, "--uk-position-viewport-offset"));
        } } };
        const st = [];
        var Qi = { mixins: [it, ce, _t], props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean }, data: { cls: "uk-open", escClose: true, bgClose: true, overlay: true, stack: false }, computed: { panel(t, e) {
          let { selPanel: i } = t;
          return v(i, e);
        }, transitionElement() {
          return this.panel;
        }, bgClose(t) {
          let { bgClose: e } = t;
          return e && this.panel;
        } }, beforeDisconnect() {
          p(st, this) && this.toggleElement(this.$el, false, false);
        }, events: [{ name: "click", delegate() {
          return this.selClose + ',a[href*="#"]';
        }, handler(t) {
          const { current: e, defaultPrevented: i } = t, { hash: s } = e;
          !i && s && ts(e) && !A(s, this.$el) && v(s, document.body) ? this.hide() : z(e, this.selClose) && (t.preventDefault(), this.hide());
        } }, { name: "toggle", self: true, handler(t) {
          t.defaultPrevented || (t.preventDefault(), this.isToggled() === p(st, this) && this.toggle());
        } }, { name: "beforeshow", self: true, handler(t) {
          if (p(st, this))
            return false;
          !this.stack && st.length ? (Promise.all(st.map((e) => e.hide())).then(this.show), t.preventDefault()) : st.push(this);
        } }, { name: "show", self: true, handler() {
          N(this.$el, "hide", k(document, "focusin", (t) => {
            Qt(st) === this && !A(t.target, this.$el) && this.$el.focus();
          })), this.overlay && (N(this.$el, "hidden", on(this.$el), { self: true }), N(this.$el, "hidden", an(), { self: true })), this.stack && c(this.$el, "zIndex", w(c(this.$el, "zIndex")) + st.length), x(document.documentElement, this.clsPage), this.bgClose && N(this.$el, "hide", k(document, mt, (t) => {
            let { target: e } = t;
            Qt(st) !== this || this.overlay && !A(e, this.$el) || A(e, this.panel) || N(document, At + " " + ti + " scroll", (i) => {
              let { defaultPrevented: s, type: n, target: r } = i;
              !s && n === At && e === r && this.hide();
            }, true);
          }), { self: true }), this.escClose && N(this.$el, "hide", k(document, "keydown", (t) => {
            t.keyCode === 27 && Qt(st) === this && this.hide();
          }), { self: true });
        } }, { name: "shown", self: true, handler() {
          Ve(this.$el) || b(this.$el, "tabindex", "-1"), v(":focus", this.$el) || this.$el.focus();
        } }, { name: "hidden", self: true, handler() {
          p(st, this) && st.splice(st.indexOf(this), 1), c(this.$el, "zIndex", ""), st.some((t) => t.clsPage === this.clsPage) || B(document.documentElement, this.clsPage);
        } }], methods: { toggle() {
          return this.isToggled() ? this.hide() : this.show();
        }, show() {
          return this.container && E(this.$el) !== this.container ? (L(this.container, this.$el), new Promise((t) => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, true, rn);
        }, hide() {
          return this.toggleElement(this.$el, false, rn);
        } } };
        function rn(t, e, i) {
          let { transitionElement: s, _toggle: n } = i;
          return new Promise((r, o) => N(t, "show hide", () => {
            t._reject == null || t._reject(), t._reject = o, n(t, e);
            const a = N(s, "transitionstart", () => {
              N(s, "transitionend transitioncancel", r, { self: true }), clearTimeout(l);
            }, { self: true }), l = setTimeout(() => {
              a(), r();
            }, So(c(s, "transitionDuration")));
          })).then(() => delete t._reject);
        }
        function So(t) {
          return t ? Xt(t, "ms") ? w(t) : w(t) * 1e3 : 0;
        }
        function on(t) {
          if (CSS.supports("overscroll-behavior", "contain")) {
            const s = [t, ...To(t, (n) => /auto|scroll/.test(c(n, "overflow")))];
            return c(s, "overscrollBehavior", "contain"), () => c(s, "overscrollBehavior", "");
          }
          let e;
          const i = [k(t, "touchstart", (s) => {
            let { targetTouches: n } = s;
            n.length === 1 && (e = n[0].clientY);
          }, { passive: true }), k(t, "touchmove", (s) => {
            if (s.targetTouches.length !== 1)
              return;
            let [n] = U(s.target, /auto|scroll/);
            A(n, t) || (n = t);
            const r = s.targetTouches[0].clientY - e, { scrollTop: o, scrollHeight: a, clientHeight: l } = n;
            (l >= a || o === 0 && r > 0 || a - o <= l && r < 0) && s.cancelable && s.preventDefault();
          }, { passive: false })];
          return () => i.forEach((s) => s());
        }
        let Ui;
        function an() {
          if (Ui)
            return I;
          Ui = true;
          const { scrollingElement: t } = document;
          return c(t, { overflowY: "hidden", touchAction: "none", paddingRight: Se(window) - t.clientWidth }), () => {
            Ui = false, c(t, { overflowY: "", touchAction: "", paddingRight: "" });
          };
        }
        function To(t, e) {
          const i = [];
          return vt(t, (s) => {
            e(s) && i.push(s);
          }), i;
        }
        function ts(t) {
          return ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
        }
        let Y;
        var ln = { mixins: [ce, Ae, nn, _t], args: "pos", props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryX: Boolean, boundaryY: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, stretch: Boolean, delayShow: Number, delayHide: Number, autoUpdate: Boolean, clsDrop: String, animateOut: Boolean, bgScroll: Boolean }, data: { mode: ["click", "hover"], toggle: "- *", boundary: false, boundaryX: false, boundaryY: false, target: false, targetX: false, targetY: false, stretch: false, delayShow: 0, delayHide: 800, autoUpdate: true, clsDrop: false, animateOut: false, bgScroll: true, animation: ["uk-animation-fade"], cls: "uk-open", container: false }, computed: { boundary(t, e) {
          let { boundary: i, boundaryX: s, boundaryY: n } = t;
          return [ct(s || i, e) || window, ct(n || i, e) || window];
        }, target(t, e) {
          let { target: i, targetX: s, targetY: n } = t;
          return s = s || i || this.targetEl, n = n || i || this.targetEl, [s === true ? window : ct(s, e), n === true ? window : ct(n, e)];
        } }, created() {
          this.tracker = new qi();
        }, beforeConnect() {
          this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name;
        }, connected() {
          x(this.$el, this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = this.$create("toggle", ct(this.toggle, this.$el), { target: this.$el, mode: this.mode }).$el, b(this.targetEl, "aria-haspopup", true), this.lazyload(this.targetEl)), this._style = ((t) => {
            let { width: e, height: i } = t;
            return { width: e, height: i };
          })(this.$el.style);
        }, disconnected() {
          this.isActive() && (this.hide(false), Y = null), c(this.$el, this._style);
        }, events: [{ name: "click", delegate() {
          return "." + this.clsDrop + "-close";
        }, handler(t) {
          t.preventDefault(), this.hide(false);
        } }, { name: "click", delegate() {
          return 'a[href*="#"]';
        }, handler(t) {
          let { defaultPrevented: e, current: i } = t;
          const { hash: s } = i;
          !e && s && ts(i) && !A(s, this.$el) && this.hide(false);
        } }, { name: "beforescroll", handler() {
          this.hide(false);
        } }, { name: "toggle", self: true, handler(t, e) {
          t.preventDefault(), this.isToggled() ? this.hide(false) : this.show(e == null ? void 0 : e.$el, false);
        } }, { name: "toggleshow", self: true, handler(t, e) {
          t.preventDefault(), this.show(e == null ? void 0 : e.$el);
        } }, { name: "togglehide", self: true, handler(t) {
          t.preventDefault(), z(this.$el, ":focus,:hover") || this.hide();
        } }, { name: jt + " focusin", filter() {
          return p(this.mode, "hover");
        }, handler(t) {
          kt(t) || this.clearTimers();
        } }, { name: ae + " focusout", filter() {
          return p(this.mode, "hover");
        }, handler(t) {
          !kt(t) && t.relatedTarget && this.hide();
        } }, { name: "toggled", self: true, handler(t, e) {
          !e || (this.clearTimers(), this.position());
        } }, { name: "show", self: true, handler() {
          Y = this, this.tracker.init();
          const t = () => this.$emit(), e = [k(document, mt, (i) => {
            let { target: s } = i;
            return !A(s, this.$el) && N(document, At + " " + ti + " scroll", (n) => {
              let { defaultPrevented: r, type: o, target: a } = n;
              !r && o === At && s === a && !(this.targetEl && A(s, this.targetEl)) && this.hide(false);
            }, true);
          }), k(document, "keydown", (i) => {
            i.keyCode === 27 && this.hide(false);
          }), k(window, "resize", t), (() => {
            const i = Ce(U(this.$el).concat(this.target), t);
            return () => i.disconnect();
          })(), ...this.autoUpdate ? [k([document, U(this.$el)], "scroll", t, { passive: true })] : [], ...this.bgScroll ? [] : [on(this.$el), an()]];
          N(this.$el, "hide", () => e.forEach((i) => i()), { self: true });
        } }, { name: "beforehide", self: true, handler() {
          this.clearTimers();
        } }, { name: "hide", handler(t) {
          let { target: e } = t;
          if (this.$el !== e) {
            Y = Y === null && A(e, this.$el) && this.isToggled() ? this : Y;
            return;
          }
          Y = this.isActive() ? null : Y, this.tracker.cancel();
        } }], update: { write() {
          this.isToggled() && !_(this.$el, this.clsEnter) && this.position();
        } }, methods: { show(t, e) {
          if (t === void 0 && (t = this.targetEl), e === void 0 && (e = true), this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(false, false), this.targetEl = t, this.clearTimers(), !this.isActive()) {
            if (Y) {
              if (e && Y.isDelaying) {
                this.showTimer = setTimeout(() => z(t, ":hover") && this.show(), 10);
                return;
              }
              let i;
              for (; Y && i !== Y && !A(this.$el, Y.$el); )
                i = Y, Y.hide(false, false);
            }
            this.container && E(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, true), e && this.delayShow || 0);
          }
        }, hide(t, e) {
          t === void 0 && (t = true), e === void 0 && (e = true);
          const i = () => this.toggleElement(this.$el, false, this.animateOut && e);
          this.clearTimers(), this.isDelaying = Co(this.$el).some((s) => this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
        }, clearTimers() {
          clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = false;
        }, isActive() {
          return Y === this;
        }, position() {
          B(this.$el, this.clsDrop + "-stack"), c(this.$el, this._style), this.$el.hidden = true;
          const t = this.target.map((n) => Io(this.$el, n)), e = this.getViewportOffset(this.$el), i = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
          for (const [n, [r, o]] of i)
            this.axis !== r && p([r, true], this.stretch) && c(this.$el, { [o]: Math.min(P(this.boundary[n])[o], t[n][o] - 2 * e), ["overflow-" + r]: "auto" });
          const s = t[0].width - 2 * e;
          this.$el.offsetWidth > s && x(this.$el, this.clsDrop + "-stack"), c(this.$el, "maxWidth", s), this.$el.hidden = false, this.positionAt(this.$el, this.target, this.boundary);
          for (const [n, [r, o, a, l]] of i)
            if (this.axis === r && p([r, true], this.stretch)) {
              const h = Math.abs(this.getPositionOffset(this.$el)), u = P(this.target[n]), d = P(this.$el);
              c(this.$el, { [o]: (u[a] > d[a] ? u[a] - Math.max(P(this.boundary[n])[a], t[n][a] + e) : Math.min(P(this.boundary[n])[l], t[n][l] - e) - u[l]) - h, ["overflow-" + r]: "auto" }), this.positionAt(this.$el, this.target, this.boundary);
            }
        } } };
        function Co(t) {
          const e = [];
          return vt(t, (i) => c(i, "position") !== "static" && e.push(i)), e;
        }
        function Io(t, e) {
          return at(U(e).find((i) => A(t, i)));
        }
        var Po = { mixins: [it], args: "target", props: { target: Boolean }, data: { target: false }, computed: { input(t, e) {
          return v(be, e);
        }, state() {
          return this.input.nextElementSibling;
        }, target(t, e) {
          let { target: i } = t;
          return i && (i === true && E(this.input) === e && this.input.nextElementSibling || v(i, e));
        } }, update() {
          var t;
          const { target: e, input: i } = this;
          if (!e)
            return;
          let s;
          const n = Oi(e) ? "value" : "textContent", r = e[n], o = (t = i.files) != null && t[0] ? i.files[0].name : z(i, "select") && (s = D("option", i).filter((a) => a.selected)[0]) ? s.textContent : i.value;
          r !== o && (e[n] = o);
        }, events: [{ name: "change", handler() {
          this.$emit();
        } }, { name: "reset", el() {
          return tt(this.$el, "form");
        }, handler() {
          this.$emit();
        } }] }, hn = { mixins: [wt], props: { margin: String, firstColumn: Boolean }, data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" }, resizeTargets() {
          return [this.$el, ...Si(this.$el.children)];
        }, connected() {
          this.registerObserver(Os(this.$el, () => this.$reset(), { childList: true, attributes: true, attributeFilter: ["style"] }));
        }, update: { read() {
          const t = es(this.$el.children);
          return { rows: t, columns: Ao(t) };
        }, write(t) {
          let { columns: e, rows: i } = t;
          for (const s of i)
            for (const n of s)
              j(n, this.margin, i[0] !== s), j(n, this.firstColumn, e[0].includes(n));
        }, events: ["resize"] } };
        function es(t) {
          return cn(t, "top", "bottom");
        }
        function Ao(t) {
          const e = [];
          for (const i of t) {
            const s = cn(i, "left", "right");
            for (let n = 0; n < s.length; n++)
              e[n] = e[n] ? e[n].concat(s[n]) : s[n];
          }
          return X ? e.reverse() : e;
        }
        function cn(t, e, i) {
          const s = [[]];
          for (const n of t) {
            if (!R(n))
              continue;
            let r = oi(n);
            for (let o = s.length - 1; o >= 0; o--) {
              const a = s[o];
              if (!a[0]) {
                a.push(n);
                break;
              }
              let l;
              if (a[0].offsetParent === n.offsetParent ? l = oi(a[0]) : (r = oi(n, true), l = oi(a[0], true)), r[e] >= l[i] - 1 && r[e] !== l[e]) {
                s.push([n]);
                break;
              }
              if (r[i] - 1 > l[e] || r[e] === l[e]) {
                a.push(n);
                break;
              }
              if (o === 0) {
                s.unshift([n]);
                break;
              }
            }
          }
          return s;
        }
        function oi(t, e) {
          e === void 0 && (e = false);
          let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: r } = t;
          return e && ([i, s] = Ht(t)), { top: i, left: s, bottom: i + n, right: s + r };
        }
        var ai = { connected() {
          un(this._uid, () => this.$emit("scroll"));
        }, disconnected() {
          dn(this._uid);
        } };
        const li = /* @__PURE__ */ new Map();
        let Ee;
        function un(t, e) {
          Ee = Ee || k(window, "scroll", () => li.forEach((i) => i()), { passive: true, capture: true }), li.set(t, e);
        }
        function dn(t) {
          li.delete(t), Ee && !li.size && (Ee(), Ee = null);
        }
        var Eo = { extends: hn, mixins: [it], name: "grid", props: { masonry: Boolean, parallax: Number }, data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: false, parallax: 0 }, connected() {
          this.masonry && x(this.$el, "uk-flex-top uk-flex-wrap-top"), this.parallax && un(this._uid, () => this.$emit("scroll"));
        }, disconnected() {
          dn(this._uid);
        }, update: [{ write(t) {
          let { columns: e } = t;
          j(this.$el, this.clsStack, e.length < 2);
        }, events: ["resize"] }, { read(t) {
          let { columns: e, rows: i } = t;
          if (!e.length || !this.masonry && !this.parallax || fn(this.$el))
            return t.translates = false, false;
          let s = false;
          const n = O(this.$el), r = e.map((h) => Ut(h, "offsetHeight")), o = Oo(n, this.margin) * (i.length - 1), a = Math.max(...r) + o;
          this.masonry && (e = e.map((h) => Le(h, "offsetTop")), s = _o(i, e));
          let l = Math.abs(this.parallax);
          return l && (l = r.reduce((h, u, d) => Math.max(h, u + o + (d % 2 ? l : l / 8) - a), 0)), { padding: l, columns: e, translates: s, height: s ? a : "" };
        }, write(t) {
          let { height: e, padding: i } = t;
          c(this.$el, "paddingBottom", i || ""), e !== false && c(this.$el, "height", e);
        }, events: ["resize"] }, { read() {
          return this.parallax && fn(this.$el) ? false : { scrolled: this.parallax ? Ji(this.$el) * Math.abs(this.parallax) : false };
        }, write(t) {
          let { columns: e, scrolled: i, translates: s } = t;
          i === false && !s || e.forEach((n, r) => n.forEach((o, a) => c(o, "transform", !i && !s ? "" : "translateY(" + ((s && -s[r][a]) + (i ? r % 2 ? i : i / 8 : 0)) + "px)")));
        }, events: ["scroll", "resize"] }] };
        function fn(t) {
          return O(t).some((e) => c(e, "position") === "absolute");
        }
        function _o(t, e) {
          const i = t.map((s) => Math.max(...s.map((n) => n.offsetHeight)));
          return e.map((s) => {
            let n = 0;
            return s.map((r, o) => n += o ? i[o - 1] - s[o - 1].offsetHeight : 0);
          });
        }
        function Oo(t, e) {
          const [i] = t.filter((s) => _(s, e));
          return w(i ? c(i, "marginTop") : c(t[0], "paddingLeft"));
        }
        var Bo = { mixins: [wt], args: "target", props: { target: String, row: Boolean }, data: { target: "> *", row: true }, computed: { elements: { get(t, e) {
          let { target: i } = t;
          return D(i, e);
        }, watch() {
          this.$reset();
        } } }, resizeTargets() {
          return [this.$el, ...this.elements];
        }, update: { read() {
          return { rows: (this.row ? es(this.elements) : [this.elements]).map(Mo) };
        }, write(t) {
          let { rows: e } = t;
          for (const { heights: i, elements: s } of e)
            s.forEach((n, r) => c(n, "minHeight", i[r]));
        }, events: ["resize"] } };
        function Mo(t) {
          if (t.length < 2)
            return { heights: [""], elements: t };
          c(t, "minHeight", "");
          let e = t.map(Do);
          const i = Math.max(...e);
          return { heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i), elements: t };
        }
        function Do(t) {
          let e = false;
          R(t) || (e = t.style.display, c(t, "display", "block", "important"));
          const i = $9(t).height - ne(t, "height", "content-box");
          return e !== false && c(t, "display", e), i;
        }
        var No = { mixins: [wt], props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number }, data: { expand: false, offsetTop: false, offsetBottom: false, minHeight: 0 }, resizeTargets() {
          return [this.$el, ...U(this.$el, /auto|scroll/)];
        }, update: { read(t) {
          let { minHeight: e } = t;
          if (!R(this.$el))
            return false;
          let i = "";
          const s = ne(this.$el, "height", "content-box"), { body: n, scrollingElement: r } = document, [o] = U(this.$el, /auto|scroll/), { height: a } = at(o === n ? r : o);
          if (this.expand)
            i = Math.max(a - ($9(o).height - $9(this.$el).height) - s, 0);
          else {
            const l = r === o || n === o;
            if (i = "calc(" + (l ? "100vh" : a + "px"), this.offsetTop)
              if (l) {
                const h = Ht(this.$el)[0] - Ht(o)[0];
                i += h > 0 && h < a / 2 ? " - " + h + "px" : "";
              } else
                i += " - " + c(o, "paddingTop");
            this.offsetBottom === true ? i += " - " + $9(this.$el.nextElementSibling).height + "px" : Mt(this.offsetBottom) ? i += " - " + this.offsetBottom + "vh" : this.offsetBottom && Xt(this.offsetBottom, "px") ? i += " - " + w(this.offsetBottom) + "px" : M(this.offsetBottom) && (i += " - " + $9(ct(this.offsetBottom, this.$el)).height + "px"), i += (s ? " - " + s + "px" : "") + ")";
          }
          return { minHeight: i, prev: e };
        }, write(t) {
          let { minHeight: e } = t;
          c(this.$el, { minHeight: e }), this.minHeight && w(c(this.$el, "minHeight")) < this.minHeight && c(this.$el, "minHeight", this.minHeight);
        }, events: ["resize"] } }, pn = { args: "src", props: { id: Boolean, icon: String, src: String, style: String, width: Number, height: Number, ratio: Number, class: String, strokeAnimation: Boolean, attributes: "list" }, data: { ratio: 1, include: ["style", "class"], class: "", strokeAnimation: false }, beforeConnect() {
          this.class += " uk-svg";
        }, connected() {
          !this.icon && p(this.src, "#") && ([this.src, this.icon] = this.src.split("#")), this.svg = this.getSvg().then((t) => {
            if (this._connected) {
              const e = Lo(t, this.$el);
              return this.svgEl && e !== this.svgEl && rt(this.svgEl), this.applyAttributes(e, t), this.svgEl = e;
            }
          }, I), this.strokeAnimation && this.svg.then((t) => {
            this._connected && (mn(t), this.registerObserver(le(t, (e, i) => {
              mn(t), i.disconnect();
            })));
          });
        }, disconnected() {
          this.svg.then((t) => {
            this._connected || (_i(this.$el) && (this.$el.hidden = false), rt(t), this.svgEl = null);
          }), this.svg = null;
        }, methods: { async getSvg() {
          return ut(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise((t) => N(this.$el, "load", () => t(this.getSvg()))) : Fo(await zo(this.src), this.icon) || Promise.reject("SVG not found.");
        }, applyAttributes(t, e) {
          for (const r in this.$options.props)
            p(this.include, r) && r in this && b(t, r, this[r]);
          for (const r in this.attributes) {
            const [o, a] = this.attributes[r].split(":", 2);
            b(t, o, a);
          }
          this.id || we(t, "id");
          const i = ["width", "height"];
          let s = i.map((r) => this[r]);
          s.some((r) => r) || (s = i.map((r) => b(e, r)));
          const n = b(e, "viewBox");
          n && !s.some((r) => r) && (s = n.split(" ").slice(2)), s.forEach((r, o) => b(t, i[o], w(r) * this.ratio || null));
        } } };
        const zo = pt(async (t) => t ? ht(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
        function Fo(t, e) {
          var i;
          return e && p(t, "<symbol") && (t = Ho(t, e) || t), t = v(t.substr(t.indexOf("<svg"))), ((i = t) == null ? void 0 : i.hasChildNodes()) && t;
        }
        const gn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, hi = {};
        function Ho(t, e) {
          if (!hi[t]) {
            hi[t] = {}, gn.lastIndex = 0;
            let i;
            for (; i = gn.exec(t); )
              hi[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>";
          }
          return hi[t][e];
        }
        function mn(t) {
          const e = vn(t);
          e && t.style.setProperty("--uk-animation-stroke", e);
        }
        function vn(t) {
          return Math.ceil(Math.max(0, ...D("[stroke]", t).map((e) => {
            try {
              return e.getTotalLength();
            } catch {
              return 0;
            }
          })));
        }
        function Lo(t, e) {
          if (_i(e) || ut(e, "canvas")) {
            e.hidden = true;
            const s = e.nextElementSibling;
            return wn(t, s) ? s : Ge(e, t);
          }
          const i = e.lastElementChild;
          return wn(t, i) ? i : L(e, t);
        }
        function wn(t, e) {
          return ut(t, "svg") && ut(e, "svg") && t.innerHTML === e.innerHTML;
        }
        var Wo = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', jo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', Ro = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>', qo = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Vo = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', Yo = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Xo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.uk-navbar-toggle-animate svg>[class*=line-]{transition:.2s ease-in-out;transition-property:transform,opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg>.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1,.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>', Go = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>', Jo = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Ko = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Zo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Qo = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Uo = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', ta = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>', ea = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>', ia = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>', sa = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>', na = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', ra = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
        const ci = { spinner: na, totop: ra, marker: Ro, "close-icon": Wo, "close-large": jo, "nav-parent-icon": qo, "nav-parent-icon-large": Vo, "navbar-parent-icon": Yo, "navbar-toggle-icon": Xo, "overlay-icon": Go, "pagination-next": Jo, "pagination-previous": Ko, "search-icon": Zo, "search-large": Qo, "search-navbar": Uo, "slidenav-next": ta, "slidenav-next-large": ea, "slidenav-previous": ia, "slidenav-previous-large": sa }, is = { install: ca, extends: pn, args: "icon", props: ["icon"], data: { include: [] }, isIcon: true, beforeConnect() {
          x(this.$el, "uk-icon");
        }, methods: { async getSvg() {
          const t = ua(this.icon);
          if (!t)
            throw "Icon not found.";
          return t;
        } } }, dt = { args: false, extends: is, data: (t) => ({ icon: Yt(t.constructor.options.name) }), beforeConnect() {
          x(this.$el, this.$options.id);
        } }, oa = { extends: dt, beforeConnect() {
          const t = this.$props.icon;
          this.icon = tt(this.$el, ".uk-nav-primary") ? t + "-large" : t;
        } }, bn = { extends: dt, beforeConnect() {
          x(this.$el, "uk-slidenav");
          const t = this.$props.icon;
          this.icon = _(this.$el, "uk-slidenav-large") ? t + "-large" : t;
        } }, aa = { extends: dt, beforeConnect() {
          this.icon = _(this.$el, "uk-search-icon") && ee(this.$el, ".uk-search-large").length ? "search-large" : ee(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon;
        } }, la = { extends: dt, beforeConnect() {
          this.icon = "close-" + (_(this.$el, "uk-close-large") ? "large" : "icon");
        } }, ha = { extends: dt, methods: { async getSvg() {
          const t = await is.methods.getSvg.call(this);
          return this.ratio !== 1 && c(v("circle", t), "strokeWidth", 1 / this.ratio), t;
        } } }, ui = {};
        function ca(t) {
          t.icon.add = (e, i) => {
            const s = M(e) ? { [e]: i } : e;
            $t(s, (n, r) => {
              ci[r] = n, delete ui[r];
            }), t._initialized && vt(document.body, (n) => $t(t.getComponents(n), (r) => {
              r.$options.isIcon && r.icon in s && r.$reset();
            }));
          };
        }
        function ua(t) {
          return ci[t] ? (ui[t] || (ui[t] = v((ci[da(t)] || ci[t]).trim())), ui[t].cloneNode(true)) : null;
        }
        function da(t) {
          return X ? Pi(Pi(t, "left", "right"), "previous", "next") : t;
        }
        const fa = Lt && "loading" in HTMLImageElement.prototype;
        var pa = { args: "dataSrc", props: { dataSrc: String, sources: String, margin: String, target: String, loading: String }, data: { dataSrc: "", sources: false, margin: "50%", target: false, loading: "lazy" }, connected() {
          if (this.loading !== "lazy") {
            this.load();
            return;
          }
          const t = [this.$el, ...xe(this.$props.target, this.$el)];
          fa && di(this.$el) && (this.$el.loading = "lazy", ss(this.$el), t.length === 1) || (ba(this.$el), this.registerObserver(le(t, (e, i) => {
            this.load(), i.disconnect();
          }, { rootMargin: this.margin })));
        }, disconnected() {
          this._data.image && (this._data.image.onload = "");
        }, methods: { load() {
          if (this._data.image)
            return this._data.image;
          const t = di(this.$el) ? this.$el : ma(this.$el, this.dataSrc, this.sources);
          return we(t, "loading"), ss(this.$el, t.currentSrc), this._data.image = t;
        } } };
        function ss(t, e) {
          if (di(t)) {
            const i = E(t);
            (xa(i) ? O(i) : [t]).forEach((n) => xn(n, n));
          } else
            e && !p(t.style.backgroundImage, e) && (c(t, "backgroundImage", "url(" + Mi(e) + ")"), g(t, Nt("load", false)));
        }
        const ga = ["data-src", "data-srcset", "sizes"];
        function xn(t, e) {
          ga.forEach((i) => {
            const s = nt(t, i);
            s && b(e, i.replace(/^(data-)+/, ""), s);
          });
        }
        function ma(t, e, i) {
          const s = new Image();
          return va(s, i), xn(t, s), s.onload = () => {
            ss(t, s.currentSrc);
          }, b(s, "src", e), s;
        }
        function va(t, e) {
          if (e = wa(e), e.length) {
            const i = zt("<picture>");
            for (const s of e) {
              const n = zt("<source>");
              b(n, s), L(i, n);
            }
            L(i, t);
          }
        }
        function wa(t) {
          if (!t)
            return [];
          if (ht(t, "["))
            try {
              t = JSON.parse(t);
            } catch {
              t = [];
            }
          else
            t = Pe(t);
          return K(t) || (t = [t]), t.filter((e) => !me(e));
        }
        function ba(t) {
          di(t) && !It(t, "src") && b(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
        }
        function xa(t) {
          return ut(t, "picture");
        }
        function di(t) {
          return ut(t, "img");
        }
        var fi = { props: { media: Boolean }, data: { media: false }, connected() {
          const t = ya(this.media, this.$el);
          if (this.matchMedia = true, t) {
            this.mediaObj = window.matchMedia(t);
            const e = () => {
              this.matchMedia = this.mediaObj.matches, g(this.$el, Nt("mediachange", false, true, [this.mediaObj]));
            };
            this.offMediaObj = k(this.mediaObj, "change", () => {
              e(), this.$emit("resize");
            }), e();
          }
        }, disconnected() {
          var t;
          (t = this.offMediaObj) == null || t.call(this);
        } };
        function ya(t, e) {
          if (M(t)) {
            if (ht(t, "@"))
              t = w(c(e, "--uk-breakpoint-" + t.substr(1)));
            else if (isNaN(t))
              return t;
          }
          return t && Mt(t) ? "(min-width: " + t + "px)" : "";
        }
        var $a = { mixins: [it, fi, wt], props: { fill: String }, data: { fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" }, computed: { fill(t) {
          let { fill: e } = t;
          return e || c(this.$el, "--uk-leader-fill-content");
        } }, connected() {
          [this.wrapper] = Wi(this.$el, '<span class="' + this.clsWrapper + '">');
        }, disconnected() {
          ke(this.wrapper.childNodes);
        }, update: { read() {
          return { width: Math.trunc(this.$el.offsetWidth / 2), fill: this.fill, hide: !this.matchMedia };
        }, write(t) {
          let { width: e, fill: i, hide: s } = t;
          j(this.wrapper, this.clsHide, s), b(this.wrapper, this.attrFill, new Array(e).join(i));
        }, events: ["resize"] } }, ka = { install: Sa, mixins: [Qi], data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full" }, events: [{ name: "show", self: true, handler() {
          _(this.panel, "uk-margin-auto-vertical") ? x(this.$el, "uk-flex") : c(this.$el, "display", "block"), Q(this.$el);
        } }, { name: "hidden", self: true, handler() {
          c(this.$el, "display", ""), B(this.$el, "uk-flex");
        } }] };
        function Sa(t) {
          let { modal: e } = t;
          e.dialog = function(s, n) {
            const r = e('<div class="uk-modal"> <div class="uk-modal-dialog">' + s + "</div> </div>", n);
            return r.show(), k(r.$el, "hidden", async () => {
              await Promise.resolve(), r.$destroy(true);
            }, { self: true }), r;
          }, e.alert = function(s, n) {
            return i((r) => {
              let { labels: o } = r;
              return '<div class="uk-modal-body">' + (M(s) ? s : Pt(s)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + o.ok + "</button> </div>";
            }, n, (r) => r.resolve());
          }, e.confirm = function(s, n) {
            return i((r) => {
              let { labels: o } = r;
              return '<form> <div class="uk-modal-body">' + (M(s) ? s : Pt(s)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.ok + "</button> </div> </form>";
            }, n, (r) => r.reject());
          }, e.prompt = function(s, n, r) {
            return i((o) => {
              let { labels: a } = o;
              return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (M(s) ? s : Pt(s)) + '</label> <input class="uk-input" value="' + (n || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + a.cancel + '</button> <button class="uk-button uk-button-primary">' + a.ok + "</button> </div> </form>";
            }, r, (o) => o.resolve(null), (o) => v("input", o.$el).value);
          }, e.labels = { ok: "Ok", cancel: "Cancel" };
          function i(s, n, r, o) {
            n = { bgClose: false, escClose: true, labels: e.labels, ...n };
            const a = e.dialog(s(n), n), l = new Re();
            let h = false;
            return k(a.$el, "submit", "form", (u) => {
              u.preventDefault(), l.resolve(o == null ? void 0 : o(a)), h = true, a.hide();
            }), k(a.$el, "hide", () => !h && r(l)), l.promise.dialog = a, l.promise;
          }
        }
        var Ta = { extends: tn, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } }, Ca = { mixins: [it, ce], props: { dropdown: String, align: String, clsDrop: String, boundary: Boolean, dropbar: Boolean, dropbarAnchor: Boolean, duration: Number, mode: Boolean, offset: Boolean, stretch: Boolean, delayShow: Boolean, delayHide: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, animation: Boolean, animateOut: Boolean }, data: { dropdown: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", align: X ? "right" : "left", clsDrop: "uk-navbar-dropdown", boundary: true, dropbar: false, dropbarAnchor: false, duration: 200, container: false }, computed: { dropbarAnchor(t, e) {
          let { dropbarAnchor: i } = t;
          return ct(i, e) || e;
        }, dropbar: { get(t) {
          let { dropbar: e } = t;
          return e ? (e = this._dropbar || ct(e, this.$el) || v("+ .uk-navbar-dropbar", this.$el), e || (this._dropbar = v("<div></div>"))) : null;
        }, watch(t) {
          x(t, "uk-dropbar", "uk-dropbar-top", "uk-navbar-dropbar");
        }, immediate: true }, dropContainer(t, e) {
          return this.container || e;
        }, dropdowns: { get(t, e) {
          let { clsDrop: i } = t;
          const s = D("." + i, e);
          if (this.dropContainer !== e)
            for (const r of D("." + i, this.dropContainer)) {
              var n;
              const o = (n = this.getDropdown(r)) == null ? void 0 : n.targetEl;
              !p(s, r) && o && A(o, this.$el) && s.push(r);
            }
          return s;
        }, watch(t) {
          this.$create("drop", t.filter((e) => !this.getDropdown(e)), { ...this.$props, flip: false, shift: true, pos: "bottom-" + this.align, boundary: this.boundary === true ? this.$el : this.boundary });
        }, immediate: true }, toggles: { get(t, e) {
          let { dropdown: i } = t;
          return D(i, e);
        }, watch() {
          const t = _(this.$el, "uk-navbar-justify");
          for (const e of D(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el))
            c(e, "flexGrow", t ? D(this.dropdown, e).length : "");
        }, immediate: true } }, disconnected() {
          this.dropbar && rt(this.dropbar), delete this._dropbar;
        }, events: [{ name: "mouseover focusin", delegate() {
          return this.dropdown;
        }, handler(t) {
          let { current: e } = t;
          const i = this.getActive();
          i && p(i.mode, "hover") && i.targetEl && !A(i.targetEl, e) && !i.isDelaying && i.hide(false);
        } }, { name: "keydown", delegate() {
          return this.dropdown;
        }, handler(t) {
          const { current: e, keyCode: i } = t, s = this.getActive();
          i === Rt.DOWN && It(e, "aria-expanded") && (t.preventDefault(), !s || s.targetEl !== e ? (e.click(), N(this.dropContainer, "show", (n) => {
            let { target: r } = n;
            return $n(r);
          })) : $n(s.$el)), yn(t, this.toggles, s);
        } }, { name: "keydown", el() {
          return this.dropContainer;
        }, delegate() {
          return "." + this.clsDrop;
        }, handler(t) {
          const { current: e, keyCode: i } = t;
          if (!p(this.dropdowns, e))
            return;
          const s = this.getActive(), n = D(qe, e), r = bt(n, (a) => z(a, ":focus"));
          if (i === Rt.UP && (t.preventDefault(), r > 0 && n[r - 1].focus()), i === Rt.DOWN && (t.preventDefault(), r < n.length - 1 && n[r + 1].focus()), i === Rt.ESC) {
            var o;
            (o = s.targetEl) == null || o.focus();
          }
          yn(t, this.toggles, s);
        } }, { name: "mouseleave", el() {
          return this.dropbar;
        }, filter() {
          return this.dropbar;
        }, handler() {
          const t = this.getActive();
          t && p(t.mode, "hover") && !this.dropdowns.some((e) => z(e, ":hover")) && t.hide();
        } }, { name: "beforeshow", el() {
          return this.dropContainer;
        }, filter() {
          return this.dropbar;
        }, handler(t) {
          let { target: e } = t;
          !this.isDropbarDrop(e) || (this.dropbar.previousElementSibling !== this.dropbarAnchor && Ge(this.dropbarAnchor, this.dropbar), x(e, this.clsDrop + "-dropbar"));
        } }, { name: "show", el() {
          return this.dropContainer;
        }, filter() {
          return this.dropbar;
        }, handler(t) {
          let { target: e } = t;
          if (!this.isDropbarDrop(e))
            return;
          const i = this.getDropdown(e);
          this._observer = Ce([i.$el, ...i.target], () => {
            const s = ee(e, "." + this.clsDrop).concat(e).map((a) => P(a)), n = Math.min(...s.map((a) => {
              let { top: l } = a;
              return l;
            })), r = Math.max(...s.map((a) => {
              let { bottom: l } = a;
              return l;
            })), o = P(this.dropbar);
            c(this.dropbar, "top", this.dropbar.offsetTop - (o.top - n)), this.transitionTo(r - n + w(c(e, "marginBottom")), e);
          });
        } }, { name: "beforehide", el() {
          return this.dropContainer;
        }, filter() {
          return this.dropbar;
        }, handler(t) {
          const e = this.getActive();
          z(this.dropbar, ":hover") && e.$el === t.target && !this.toggles.some((i) => e.targetEl !== i && z(i, ":focus")) && t.preventDefault();
        } }, { name: "hide", el() {
          return this.dropContainer;
        }, filter() {
          return this.dropbar;
        }, handler(t) {
          var e;
          let { target: i } = t;
          if (!this.isDropbarDrop(i))
            return;
          (e = this._observer) == null || e.disconnect();
          const s = this.getActive();
          (!s || s.$el === i) && this.transitionTo(0);
        } }], methods: { getActive() {
          return p(this.dropdowns, Y == null ? void 0 : Y.$el) && Y;
        }, transitionTo(t, e) {
          const { dropbar: i } = this, s = Q(i);
          e = s < t && e, c(e, "clipPath", "polygon(0 0,100% 0,100% " + s + "px,0 " + s + "px)"), Q(i, s), T.cancel([e, i]), Promise.all([T.start(i, { height: t }, this.duration), T.start(e, { clipPath: "polygon(0 0,100% 0,100% " + t + "px,0 " + t + "px)" }, this.duration)]).catch(I).then(() => c(e, { clipPath: "" }));
        }, getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        }, isDropbarDrop(t) {
          return this.getDropdown(t) && _(t, this.clsDrop);
        } } };
        function yn(t, e, i) {
          const { current: s, keyCode: n } = t, r = i.targetEl || s, o = e.indexOf(r);
          n === Rt.LEFT && o > 0 && (i.hide == null || i.hide(false), e[o - 1].focus()), n === Rt.RIGHT && o < e.length - 1 && (i.hide == null || i.hide(false), e[o + 1].focus()), n === Rt.TAB && (r.focus(), i.hide == null || i.hide(false));
        }
        function $n(t) {
          if (!v(":focus", t)) {
            var e;
            (e = v(qe, t)) == null || e.focus();
          }
        }
        const Rt = { TAB: 9, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
        var kn = { props: { swiping: Boolean }, data: { swiping: true }, computed: { swipeTarget(t, e) {
          return e;
        } }, connected() {
          !this.swiping || ni(this, { el: this.swipeTarget, name: mt, passive: true, handler(t) {
            if (!kt(t))
              return;
            const e = se(t), i = "tagName" in t.target ? t.target : E(t.target);
            N(document, At + " " + ti + " scroll", (s) => {
              const { x: n, y: r } = se(s);
              (s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100 || r && Math.abs(e.y - r) > 100) && setTimeout(() => {
                g(i, "swipe"), g(i, "swipe" + Ia(e.x, e.y, n, r));
              });
            });
          } });
        } };
        function Ia(t, e, i, s) {
          return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
        }
        var Pa = { mixins: [Qi, kn], args: "mode", props: { mode: String, flip: Boolean, overlay: Boolean }, data: { mode: "slide", flip: false, overlay: false, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", selPanel: ".uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContainerAnimation: "uk-offcanvas-container-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close", container: false }, computed: { clsFlip(t) {
          let { flip: e, clsFlip: i } = t;
          return e ? i : "";
        }, clsOverlay(t) {
          let { overlay: e, clsOverlay: i } = t;
          return e ? i : "";
        }, clsMode(t) {
          let { mode: e, clsMode: i } = t;
          return i + "-" + e;
        }, clsSidebarAnimation(t) {
          let { mode: e, clsSidebarAnimation: i } = t;
          return e === "none" || e === "reveal" ? "" : i;
        }, clsContainerAnimation(t) {
          let { mode: e, clsContainerAnimation: i } = t;
          return e !== "push" && e !== "reveal" ? "" : i;
        }, transitionElement(t) {
          let { mode: e } = t;
          return e === "reveal" ? E(this.panel) : this.panel;
        } }, update: { read() {
          this.isToggled() && !R(this.$el) && this.hide();
        }, events: ["resize"] }, events: [{ name: "touchmove", self: true, passive: false, filter() {
          return this.overlay;
        }, handler(t) {
          t.cancelable && t.preventDefault();
        } }, { name: "show", self: true, handler() {
          this.mode === "reveal" && !_(E(this.panel), this.clsMode) && (Ke(this.panel, "<div>"), x(E(this.panel), this.clsMode));
          const { body: t, scrollingElement: e } = document;
          x(t, this.clsContainer, this.clsFlip), c(t, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), c(this.panel, "maxWidth", e.clientWidth), x(this.$el, this.clsOverlay), x(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), Q(t), x(t, this.clsContainerAnimation), this.clsContainerAnimation && Aa();
        } }, { name: "hide", self: true, handler() {
          B(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "");
        } }, { name: "hidden", self: true, handler() {
          this.clsContainerAnimation && Ea(), this.mode === "reveal" && ke(this.panel), B(this.panel, this.clsSidebarAnimation, this.clsMode), B(this.$el, this.clsOverlay), c(this.$el, "display", ""), c(this.panel, "maxWidth", ""), B(document.body, this.clsContainer, this.clsFlip);
        } }, { name: "swipeLeft swipeRight", handler(t) {
          this.isToggled() && Xt(t.type, "Left") ^ this.flip && this.hide();
        } }] };
        function Aa() {
          Sn().content += ",user-scalable=0";
        }
        function Ea() {
          const t = Sn();
          t.content = t.content.replace(/,user-scalable=0$/, "");
        }
        function Sn() {
          return v('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">');
        }
        var _a = { mixins: [it, wt], props: { selContainer: String, selContent: String, minHeight: Number }, data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog", minHeight: 150 }, computed: { container(t, e) {
          let { selContainer: i } = t;
          return tt(e, i);
        }, content(t, e) {
          let { selContent: i } = t;
          return tt(e, i);
        } }, resizeTargets() {
          return [this.container, this.content];
        }, update: { read() {
          return !this.content || !this.container || !R(this.$el) ? false : { max: Math.max(this.minHeight, Q(this.container) - ($9(this.content).height - Q(this.$el))) };
        }, write(t) {
          let { max: e } = t;
          c(this.$el, { minHeight: this.minHeight, maxHeight: e });
        }, events: ["resize"] } }, Oa = { mixins: [wt], props: ["width", "height"], resizeTargets() {
          return [this.$el, E(this.$el)];
        }, connected() {
          x(this.$el, "uk-responsive-width");
        }, update: { read() {
          return R(this.$el) && this.width && this.height ? { width: Se(E(this.$el)), height: this.height } : false;
        }, write(t) {
          Q(this.$el, je.contain({ height: this.height, width: this.width }, t).height);
        }, events: ["resize"] } }, Ba = { props: { offset: Number }, data: { offset: 0 }, connected() {
          Ma(this);
        }, disconnected() {
          Da(this);
        }, methods: { async scrollTo(t) {
          t = t && v(t) || document.body, g(this.$el, "beforescroll", [this, t]) && (await js(t, { offset: this.offset }), g(this.$el, "scrolled", [this, t]));
        } } };
        const _e = /* @__PURE__ */ new Set();
        function Ma(t) {
          _e.size || k(document, "click", Tn), _e.add(t);
        }
        function Da(t) {
          _e.delete(t), _e.size || Dt(document, "click", Tn);
        }
        function Tn(t) {
          if (!t.defaultPrevented)
            for (const e of _e)
              A(t.target, e.$el) && Cn(e.$el) && (t.preventDefault(), e.scrollTo(In(e.$el)));
        }
        function Cn(t) {
          return ["origin", "pathname", "search"].every((e) => location[e] === t[e]);
        }
        function In(t) {
          if (Cn(t))
            return document.getElementById(decodeURIComponent(t.hash).substring(1));
        }
        var Na = { mixins: [ai], args: "cls", props: { cls: String, target: String, hidden: Boolean, margin: String, repeat: Boolean, delay: Number }, data: () => ({ cls: "", target: false, hidden: true, margin: "-1px", repeat: false, delay: 0, inViewClass: "uk-scrollspy-inview" }), computed: { elements: { get(t, e) {
          let { target: i } = t;
          return i ? D(i, e) : [e];
        }, watch(t, e) {
          this.hidden && c(Ye(t, ":not(." + this.inViewClass + ")"), "opacity", 0), ve(t, e) || this.$reset();
        }, immediate: true } }, connected() {
          this._data.elements = /* @__PURE__ */ new Map(), this.registerObserver(le(this.elements, (t) => {
            const e = this._data.elements;
            for (const { target: i, isIntersecting: s } of t) {
              e.has(i) || e.set(i, { cls: nt(i, "uk-scrollspy-class") || this.cls });
              const n = e.get(i);
              !this.repeat && n.show || (n.show = s);
            }
            this.$emit();
          }, { rootMargin: this.margin }, false));
        }, disconnected() {
          for (const [t, e] of this._data.elements.entries())
            B(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
        }, update: [{ write(t) {
          for (const [e, i] of t.elements.entries())
            i.show && !i.inview && !i.queued ? (i.queued = true, t.promise = (t.promise || Promise.resolve()).then(() => new Promise((s) => setTimeout(s, this.delay))).then(() => {
              this.toggle(e, true), setTimeout(() => {
                i.queued = false, this.$emit();
              }, 300);
            })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, false);
        } }], methods: { toggle(t, e) {
          const i = this._data.elements.get(t);
          if (!!i) {
            if (i.off == null || i.off(), c(t, "opacity", !e && this.hidden ? 0 : ""), j(t, this.inViewClass, e), j(t, i.cls), /\buk-animation-/.test(i.cls)) {
              const s = () => Fi(t, "uk-animation-[\\w-]+");
              e ? i.off = N(t, "animationcancel animationend", s) : s();
            }
            g(t, e ? "inview" : "outview"), i.inview = e, this.$update(t);
          }
        } } }, za = { mixins: [ai], props: { cls: String, closest: String, scroll: Boolean, overflow: Boolean, offset: Number }, data: { cls: "uk-active", closest: false, scroll: false, overflow: true, offset: 0 }, computed: { links: { get(t, e) {
          return D('a[href*="#"]', e).filter((i) => i.hash && ts(i));
        }, watch(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset || 0 });
        }, immediate: true }, elements(t) {
          let { closest: e } = t;
          return tt(this.links, e || "*");
        } }, update: [{ read() {
          const t = this.links.map(In).filter(Boolean), { length: e } = t;
          if (!e || !R(this.$el))
            return false;
          const [i] = U(t, /auto|scroll/, true), { scrollTop: s, scrollHeight: n } = i, r = at(i), o = n - r.height;
          let a = false;
          if (s === o)
            a = e - 1;
          else {
            for (let l = 0; l < t.length && !(P(t[l]).top - r.top - this.offset > 0); l++)
              a = +l;
            a === false && this.overflow && (a = 0);
          }
          return { active: a };
        }, write(t) {
          let { active: e } = t;
          const i = e !== false && !_(this.elements[e], this.cls);
          this.links.forEach((s) => s.blur());
          for (let s = 0; s < this.elements.length; s++)
            j(this.elements[s], this.cls, +s === e);
          i && g(this.$el, "active", [e, this.elements[e]]);
        }, events: ["scroll", "resize"] }] }, Fa = { mixins: [it, fi, wt, ai], props: { position: String, top: null, bottom: null, start: null, end: null, offset: String, overflowFlip: Boolean, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, showOnUp: Boolean, targetOffset: Number }, data: { position: "top", top: false, bottom: false, start: false, end: false, offset: 0, overflowFlip: false, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", showOnUp: false, targetOffset: false }, computed: { selTarget(t, e) {
          let { selTarget: i } = t;
          return i && v(i, e) || e;
        } }, resizeTargets() {
          return document.documentElement;
        }, connected() {
          this.start = Pn(this.start || this.top), this.end = Pn(this.end || this.bottom), this.placeholder = v("+ .uk-sticky-placeholder", this.$el) || v('<div class="uk-sticky-placeholder"></div>'), this.isFixed = false, this.setActive(false), this.registerObserver(Ce(this.$el, () => !this.isFixed && this.$emit("resize")));
        }, disconnected() {
          this.isFixed && (this.hide(), B(this.selTarget, this.clsInactive)), c(this.$el, { position: "", top: "" }), rt(this.placeholder), this.placeholder = null;
        }, events: [{ name: "resize", el() {
          return [window, window.visualViewport];
        }, handler() {
          this.$emit("resizeViewport");
        } }, { name: "load hashchange popstate", el() {
          return window;
        }, filter() {
          return this.targetOffset !== false;
        }, handler() {
          const { scrollingElement: t } = document;
          !location.hash || t.scrollTop === 0 || setTimeout(() => {
            const e = P(v(location.hash)), i = P(this.$el);
            this.isFixed && Ai(e, i) && (t.scrollTop = e.top - i.height - ot(this.targetOffset, "height", this.placeholder) - ot(this.offset, "height", this.placeholder));
          });
        } }], update: [{ read(t, e) {
          let { height: i, width: s, margin: n, sticky: r } = t;
          if (this.inactive = !this.matchMedia || !R(this.$el), this.inactive)
            return false;
          const o = this.isFixed && e.has("resize");
          o && (c(this.selTarget, "transition", "0s"), this.hide()), this.active || ({ height: i, width: s } = P(this.$el), n = c(this.$el, "margin")), o && (this.show(), requestAnimationFrame(() => c(this.selTarget, "transition", "")));
          const a = ot("100vh", "height"), l = Q(window), h = document.scrollingElement.scrollHeight - a;
          let u = this.position;
          this.overflowFlip && i > a && (u = u === "top" ? "bottom" : "top");
          const d = this.isFixed ? this.placeholder : this.$el;
          let f = ot(this.offset, "height", r ? this.$el : d);
          u === "bottom" && (i < l || this.overflowFlip) && (f += l - i);
          const m = this.overflowFlip ? 0 : Math.max(0, i + f - a), S = P(d).top, C = P(this.$el).height, H = (this.start === false ? S : ns(this.start, this.$el, S)) - f, W = this.end === false ? h : Math.min(h, ns(this.end, this.$el, S + i, true) - C - f + m);
          return r = !this.showOnUp && H + f === S && W === Math.min(h, ns("!*", this.$el, 0, true) - C - f + m), { start: H, end: W, offset: f, overflow: m, topOffset: S, height: i, width: s, margin: n, top: Ht(d)[0], sticky: r };
        }, write(t) {
          let { height: e, width: i, margin: s, offset: n, sticky: r } = t;
          r && (e = i = s = 0, c(this.$el, { position: "sticky", top: n }));
          const { placeholder: o } = this;
          c(o, { height: e, width: i, margin: s }), A(o, document) || (o.hidden = true), (r ? Xe : Ge)(this.$el, o);
        }, events: ["resize", "resizeViewport"] }, { read(t) {
          let { scroll: e = 0, dir: i = "down", overflow: s, overflowScroll: n = 0, start: r, end: o } = t;
          const a = document.scrollingElement.scrollTop;
          return { dir: e <= a ? "down" : "up", prevDir: i, scroll: a, prevScroll: e, offsetParentTop: P((this.isFixed ? this.placeholder : this.$el).offsetParent).top, overflowScroll: Z(n + Z(a, r, o) - Z(e, r, o), 0, s) };
        }, write(t, e) {
          const i = e.has("scroll"), { initTimestamp: s = 0, dir: n, prevDir: r, scroll: o, prevScroll: a = 0, top: l, start: h, topOffset: u, height: d } = t;
          if (o < 0 || o === a && i || this.showOnUp && !i && !this.isFixed)
            return;
          const f = Date.now();
          if ((f - s > 300 || n !== r) && (t.initScroll = o, t.initTimestamp = f), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - o) <= 30 && Math.abs(a - o) <= 10))
            if (this.inactive || o < h || this.showOnUp && (o <= h || n === "down" && i || n === "up" && !this.isFixed && o <= u + d)) {
              if (!this.isFixed) {
                gt.inProgress(this.$el) && l > o && (gt.cancel(this.$el), this.hide());
                return;
              }
              this.animation && o > u ? (gt.cancel(this.$el), gt.out(this.$el, this.animation).then(() => this.hide(), I)) : this.hide();
            } else
              this.isFixed ? this.update() : this.animation && o > u ? (gt.cancel(this.$el), this.show(), gt.in(this.$el, this.animation).catch(I)) : this.show();
        }, events: ["resize", "scroll"] }], methods: { show() {
          this.isFixed = true, this.update(), this.placeholder.hidden = false;
        }, hide() {
          const { offset: t, sticky: e } = this._data;
          this.setActive(false), B(this.$el, this.clsFixed, this.clsBelow), e ? c(this.$el, "top", t) : c(this.$el, { position: "", top: "", width: "", marginTop: "" }), this.placeholder.hidden = true, this.isFixed = false;
        }, update() {
          let { width: t, scroll: e = 0, overflow: i, overflowScroll: s = 0, start: n, end: r, offset: o, topOffset: a, height: l, offsetParentTop: h, sticky: u } = this._data;
          const d = n !== 0 || e > n;
          if (!u) {
            let f = "fixed";
            e > r && (o += r - h, f = "absolute"), c(this.$el, { position: f, width: t }), c(this.$el, "marginTop", 0, "important");
          }
          i && (o -= s), c(this.$el, "top", o), this.setActive(d), j(this.$el, this.clsBelow, e > a + l), x(this.$el, this.clsFixed);
        }, setActive(t) {
          const e = this.active;
          this.active = t, t ? (Hi(this.selTarget, this.clsInactive, this.clsActive), e !== t && g(this.$el, "active")) : (Hi(this.selTarget, this.clsActive, this.clsInactive), e !== t && g(this.$el, "inactive"));
        } } };
        function ns(t, e, i, s) {
          if (!t)
            return 0;
          if (Mt(t) || M(t) && t.match(/^-?\d/))
            return i + ot(t, "height", e, true);
          {
            const n = t === true ? E(e) : ct(t, e);
            return P(n).bottom - (s && n && A(e, n) ? w(c(n, "paddingBottom")) : 0);
          }
        }
        function Pn(t) {
          return t === "true" ? true : t === "false" ? false : t;
        }
        var An = { mixins: [Ae, kn, _t], args: "connect", props: { connect: String, toggle: String, itemNav: String, active: Number }, data: { connect: "~.uk-switcher", toggle: "> * > :first-child", itemNav: false, active: 0, cls: "uk-active", attrItem: "uk-switcher-item" }, computed: { connects: { get(t, e) {
          let { connect: i } = t;
          return xe(i, e);
        }, watch(t) {
          this.swiping && c(t, "touchAction", "pan-y pinch-zoom");
        }, document: true, immediate: true }, connectChildren: { get() {
          return this.connects.map((t) => O(t)).flat();
        }, watch() {
          const t = this.index();
          for (const e of this.connects)
            O(e).forEach((i, s) => j(i, this.cls, s === t)), this.lazyload(this.$el, O(e));
        }, immediate: true }, toggles: { get(t, e) {
          let { toggle: i } = t;
          return D(i, e).filter((s) => !z(s, ".uk-disabled *, .uk-disabled, [disabled]"));
        }, watch(t) {
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        }, immediate: true }, children() {
          return O(this.$el).filter((t) => this.toggles.some((e) => A(e, t)));
        }, swipeTarget() {
          return this.connects;
        } }, events: [{ name: "click", delegate() {
          return this.toggle;
        }, handler(t) {
          t.preventDefault(), this.show(t.current);
        } }, { name: "click", el() {
          return this.connects.concat(this.itemNav ? xe(this.itemNav, this.$el) : []);
        }, delegate() {
          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
        }, handler(t) {
          t.preventDefault(), this.show(nt(t.current, this.attrItem));
        } }, { name: "swipeRight swipeLeft", filter() {
          return this.swiping;
        }, el() {
          return this.connects;
        }, handler(t) {
          let { type: e } = t;
          this.show(Xt(e, "Left") ? "next" : "previous");
        } }], methods: { index() {
          return bt(this.children, (t) => _(t, this.cls));
        }, show(t) {
          const e = this.index(), i = te(t, this.toggles, e), s = te(this.children[i], O(this.$el));
          O(this.$el).forEach((r, o) => {
            j(r, this.cls, s === o), b(this.toggles[o], "aria-expanded", s === o);
          });
          const n = e >= 0 && e !== i;
          this.connects.forEach(async (r) => {
            let { children: o } = r;
            await this.toggleElement(y(o).filter((a) => _(a, this.cls)), false, n), await this.toggleElement(o[s], true, n);
          });
        } } }, Ha = { mixins: [it], extends: An, props: { media: Boolean }, data: { media: 960, attrItem: "uk-tab-item" }, connected() {
          const t = _(this.$el, "uk-tab-left") ? "uk-tab-left" : _(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
          t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
        } };
        const La = 32;
        var Wa = { mixins: [Ae, fi, _t], args: "target", props: { href: String, target: null, mode: "list", queued: Boolean }, data: { href: false, target: false, mode: "click", queued: true }, computed: { target: { get(t, e) {
          let { href: i, target: s } = t;
          return s = xe(s || i, e), s.length && s || [e];
        }, watch() {
          this.updateAria(), this.lazyload(this.$el, this.target);
        }, document: true, immediate: true } }, connected() {
          !p(this.mode, "media") && !Ve(this.$el) && b(this.$el, "tabindex", "0");
        }, events: [{ name: mt, filter() {
          return p(this.mode, "hover");
        }, handler(t) {
          this._preventClick = null, !(!kt(t) || this._showState) && (g(this.$el, "focus"), N(document, mt, () => g(this.$el, "blur"), true, (e) => !A(e.target, this.$el)), p(this.mode, "click") && (this._preventClick = true));
        } }, { name: jt + " " + ae + " focus blur", filter() {
          return p(this.mode, "hover");
        }, handler(t) {
          if (kt(t))
            return;
          const e = p([jt, "focus"], t.type), i = b(this.$el, "aria-expanded");
          if (!(!e && (t.type === ae && z(this.$el, ":focus") || t.type === "blur" && z(this.$el, ":hover")))) {
            if (this._showState && e && i !== this._showState) {
              e || (this._showState = null);
              return;
            }
            this._showState = e ? i : null, this.toggle("toggle" + (e ? "show" : "hide"));
          }
        } }, { name: "keydown", filter() {
          return p(this.mode, "click") && !ut(this.$el, "input");
        }, handler(t) {
          t.keyCode === La && (t.preventDefault(), this.$el.click());
        } }, { name: "click", filter() {
          return ["click", "hover"].some((t) => p(this.mode, t));
        }, handler(t) {
          let e;
          (this._preventClick || tt(t.target, 'a[href="#"], a[href=""]') || (e = tt(t.target, "a[href]")) && (b(this.$el, "aria-expanded") !== "true" || e.hash && z(this.target, e.hash))) && t.preventDefault(), !this._preventClick && p(this.mode, "click") && this.toggle();
        } }, { name: "hide show", self: true, el() {
          return this.target;
        }, handler(t) {
          let { target: e, type: i } = t;
          this.updateAria(e === this.target[0] && i === "show");
        } }, { name: "mediachange", filter() {
          return p(this.mode, "media");
        }, el() {
          return this.target;
        }, handler(t, e) {
          e.matches ^ this.isToggled(this.target) && this.toggle();
        } }], methods: { async toggle(t) {
          if (!g(this.target, t || "toggle", [this]))
            return;
          if (!this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((s) => _(s, this.clsLeave));
          if (e.length) {
            for (const s of this.target) {
              const n = p(e, s);
              this.toggleElement(s, n, n);
            }
            return;
          }
          const i = this.target.filter(this.isToggled);
          await this.toggleElement(i, false), await this.toggleElement(this.target.filter((s) => !p(i, s)), true);
        }, updateAria(t) {
          p(this.mode, "media") || b(this.$el, "aria-expanded", He(t) ? t : this.isToggled(this.target));
        } } }, ja = Object.freeze({ __proto__: null, Accordion: tn, Alert: yo, Cover: ko, Drop: ln, Dropdown: ln, FormCustom: Po, Grid: Eo, HeightMatch: Bo, HeightViewport: No, Icon: is, Img: pa, Leader: $a, Margin: hn, Modal: ka, Nav: Ta, Navbar: Ca, Offcanvas: Pa, OverflowAuto: _a, Responsive: Oa, Scroll: Ba, Scrollspy: Na, ScrollspyNav: za, Sticky: Fa, Svg: pn, Switcher: An, Tab: Ha, Toggle: Wa, Video: en, Close: la, Spinner: ha, NavParentIcon: oa, SlidenavNext: bn, SlidenavPrevious: bn, SearchIcon: aa, Marker: dt, NavbarParentIcon: dt, NavbarToggleIcon: dt, OverlayIcon: dt, PaginationNext: dt, PaginationPrevious: dt, Totop: dt });
        $t(ja, (t, e) => et.component(e, t)), go(et);
        const Ra = ["days", "hours", "minutes", "seconds"];
        var qa = { mixins: [it], props: { date: String, clsWrapper: String }, data: { date: "", clsWrapper: ".uk-countdown-%unit%" }, connected() {
          this.date = Date.parse(this.$props.date), this.start();
        }, disconnected() {
          this.stop();
        }, events: [{ name: "visibilitychange", el() {
          return document;
        }, handler() {
          document.hidden ? this.stop() : this.start();
        } }], methods: { start() {
          this.stop(), this.update(), this.timer = setInterval(this.update, 1e3);
        }, stop() {
          clearInterval(this.timer);
        }, update() {
          const t = Va(this.date);
          (!this.date || t.total <= 0) && (this.stop(), t.days = t.hours = t.minutes = t.seconds = 0);
          for (const e of Ra) {
            const i = v(this.clsWrapper.replace("%unit%", e), this.$el);
            if (!i)
              continue;
            let s = String(Math.trunc(t[e]));
            s = s.length < 2 ? "0" + s : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && Pt(i, s.map(() => "<span></span>").join("")), s.forEach((n, r) => i.children[r].textContent = n));
          }
        } } };
        function Va(t) {
          const e = t - Date.now();
          return { total: e, seconds: e / 1e3 % 60, minutes: e / 1e3 / 60 % 60, hours: e / 1e3 / 60 / 60 % 24, days: e / 1e3 / 60 / 60 / 24 };
        }
        const rs = "uk-transition-leave", os = "uk-transition-enter";
        function En(t, e, i, s) {
          s === void 0 && (s = 0);
          const n = pi(e, true), r = { opacity: 1 }, o = { opacity: 0 }, a = (u) => () => n === pi(e) ? u() : Promise.reject(), l = a(async () => {
            x(e, rs), await Promise.all(On(e).map((u, d) => new Promise((f) => setTimeout(() => T.start(u, o, i / 2, "ease").then(f), d * s)))), B(e, rs);
          }), h = a(async () => {
            const u = Q(e);
            x(e, os), t(), c(O(e), { opacity: 0 }), await Ya();
            const d = O(e), f = Q(e);
            c(e, "alignContent", "flex-start"), Q(e, u);
            const m = On(e);
            c(d, o);
            const S = m.map(async (C, H) => {
              await Xa(H * s), await T.start(C, r, i / 2, "ease");
            });
            u !== f && S.push(T.start(e, { height: f }, i / 2 + m.length * s, "ease")), await Promise.all(S).then(() => {
              B(e, os), n === pi(e) && (c(e, { height: "", alignContent: "" }), c(d, { opacity: "" }), delete e.dataset.transition);
            });
          });
          return _(e, rs) ? _n(e).then(h) : _(e, os) ? _n(e).then(l).then(h) : l().then(h);
        }
        function pi(t, e) {
          return e && (t.dataset.transition = 1 + pi(t)), Ct(t.dataset.transition) || 0;
        }
        function _n(t) {
          return Promise.all(O(t).filter(T.inProgress).map((e) => new Promise((i) => N(e, "transitionend transitioncanceled", i))));
        }
        function On(t) {
          return es(O(t)).reduce((e, i) => e.concat(Le(i.filter((s) => Gi(s)), "offsetLeft")), []);
        }
        function Ya() {
          return new Promise((t) => requestAnimationFrame(t));
        }
        function Xa(t) {
          return new Promise((e) => setTimeout(e, t));
        }
        async function Ga(t, e, i) {
          await Dn();
          let s = O(e);
          const n = s.map((f) => Bn(f, true)), r = { ...c(e, ["height", "padding"]), display: "block" };
          await Promise.all(s.concat(e).map(T.cancel)), t(), s = s.concat(O(e).filter((f) => !p(s, f))), await Promise.resolve(), G.flush();
          const o = b(e, "style"), a = c(e, ["height", "padding"]), [l, h] = Ja(e, s, n), u = s.map((f) => ({ style: b(f, "style") }));
          s.forEach((f, m) => h[m] && c(f, h[m])), c(e, r), await Dn();
          const d = s.map((f, m) => E(f) === e && T.start(f, l[m], i, "ease")).concat(T.start(e, a, i, "ease"));
          try {
            await Promise.all(d), s.forEach((f, m) => {
              b(f, u[m]), E(f) === e && c(f, "display", l[m].opacity === 0 ? "none" : "");
            }), b(e, "style", o);
          } catch {
            b(s, "style", ""), Ka(e, r);
          }
        }
        function Bn(t, e) {
          const i = c(t, "zIndex");
          return R(t) ? { display: "", opacity: e ? c(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: i === "auto" ? ie(t) : i, ...Mn(t) } : false;
        }
        function Ja(t, e, i) {
          const s = e.map((r, o) => E(r) && o in i ? i[o] ? R(r) ? Mn(r) : { opacity: 0 } : { opacity: R(r) ? 1 : 0 } : false), n = s.map((r, o) => {
            const a = E(e[o]) === t && (i[o] || Bn(e[o]));
            if (!a)
              return false;
            if (!r)
              delete a.opacity;
            else if (!("opacity" in r)) {
              const { opacity: l } = a;
              l % 1 ? r.opacity = 1 : delete a.opacity;
            }
            return a;
          });
          return [s, n];
        }
        function Ka(t, e) {
          for (const i in e)
            c(t, i, "");
        }
        function Mn(t) {
          const { height: e, width: i } = P(t);
          return { height: e, width: i, transform: "", ...Ze(t), ...c(t, ["marginTop", "marginLeft"]) };
        }
        function Dn() {
          return new Promise((t) => requestAnimationFrame(t));
        }
        var Nn = { props: { duration: Number, animation: Boolean }, data: { duration: 150, animation: "slide" }, methods: { animate(t, e) {
          e === void 0 && (e = this.$el);
          const i = this.animation;
          return (i === "fade" ? En : i === "delayed-fade" ? function() {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return En(...r, 40);
          } : i ? Ga : () => (t(), Promise.resolve()))(t, e, this.duration).catch(I);
        } } }, Za = { mixins: [Nn], args: "target", props: { target: Boolean, selActive: Boolean }, data: { target: null, selActive: false, attrItem: "uk-filter-control", cls: "uk-active", duration: 250 }, computed: { toggles: { get(t, e) {
          let { attrItem: i } = t;
          return D("[" + i + "],[data-" + i + "]", e);
        }, watch() {
          if (this.updateState(), this.selActive !== false) {
            const t = D(this.selActive, this.$el);
            this.toggles.forEach((e) => j(e, this.cls, p(t, e)));
          }
        }, immediate: true }, children: { get(t, e) {
          let { target: i } = t;
          return D(i + " > *", e);
        }, watch(t, e) {
          e && !el(t, e) && this.updateState();
        }, immediate: true } }, events: [{ name: "click", delegate() {
          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
        }, handler(t) {
          t.preventDefault(), this.apply(t.current);
        } }], methods: { apply(t) {
          const e = this.getState(), i = Fn(t, this.attrItem, this.getState());
          Qa(e, i) || this.setState(i);
        }, getState() {
          return this.toggles.filter((t) => _(t, this.cls)).reduce((t, e) => Fn(e, this.attrItem, t), { filter: { "": "" }, sort: [] });
        }, async setState(t, e) {
          e === void 0 && (e = true), t = { filter: { "": "" }, sort: [], ...t }, g(this.$el, "beforeFilter", [this, t]), this.toggles.forEach((i) => j(i, this.cls, !!tl(i, this.attrItem, t))), await Promise.all(D(this.target, this.$el).map((i) => {
            const s = () => {
              Ua(t, i, O(i)), this.$update(this.$el);
            };
            return e ? this.animate(s, i) : s();
          })), g(this.$el, "afterFilter", [this]);
        }, updateState() {
          G.write(() => this.setState(this.getState(), false));
        } } };
        function zn(t, e) {
          return Pe(nt(t, e), ["filter"]);
        }
        function Qa(t, e) {
          return ["filter", "sort"].every((i) => ve(t[i], e[i]));
        }
        function Ua(t, e, i) {
          const s = il(t);
          i.forEach((o) => c(o, "display", s && !z(o, s) ? "none" : ""));
          const [n, r] = t.sort;
          if (n) {
            const o = sl(i, n, r);
            ve(o, i) || L(e, o);
          }
        }
        function Fn(t, e, i) {
          const { filter: s, group: n, sort: r, order: o = "asc" } = zn(t, e);
          return (s || q(r)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (me(i.filter) || "" in i.filter) && (i.filter = { "": s || "" })) : i.filter = { "": s || "" }), q(r) || (i.sort = [r, o]), i;
        }
        function tl(t, e, i) {
          let { filter: s = { "": "" }, sort: [n, r] } = i;
          const { filter: o = "", group: a = "", sort: l, order: h = "asc" } = zn(t, e);
          return q(l) ? a in s && o === s[a] || !o && a && !(a in s) && !s[""] : n === l && r === h;
        }
        function el(t, e) {
          return t.length === e.length && t.every((i) => e.includes(i));
        }
        function il(t) {
          let { filter: e } = t, i = "";
          return $t(e, (s) => i += s || ""), i;
        }
        function sl(t, e, i) {
          return [...t].sort((s, n) => nt(s, e).localeCompare(nt(n, e), void 0, { numeric: true }) * (i === "asc" || -1));
        }
        var as = { slide: { show(t) {
          return [{ transform: F(t * -100) }, { transform: F() }];
        }, percent(t) {
          return Oe(t);
        }, translate(t, e) {
          return [{ transform: F(e * -100 * t) }, { transform: F(e * 100 * (1 - t)) }];
        } } };
        function Oe(t) {
          return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth) || 0;
        }
        function F(t, e) {
          return t === void 0 && (t = 0), e === void 0 && (e = "%"), t += t ? e : "", "translate3d(" + t + ", 0, 0)";
        }
        function ue(t) {
          return "scale3d(" + t + ", " + t + ", 1)";
        }
        var Hn = { ...as, fade: { show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        }, percent(t) {
          return 1 - c(t, "opacity");
        }, translate(t) {
          return [{ opacity: 1 - t }, { opacity: t }];
        } }, scale: { show() {
          return [{ opacity: 0, transform: ue(1 - 0.2) }, { opacity: 1, transform: ue(1) }];
        }, percent(t) {
          return 1 - c(t, "opacity");
        }, translate(t) {
          return [{ opacity: 1 - t, transform: ue(1 - 0.2 * t) }, { opacity: t, transform: ue(1 - 0.2 + 0.2 * t) }];
        } } };
        function nl(t, e, i, s) {
          let { animation: n, easing: r } = s;
          const { percent: o, translate: a, show: l = I } = n, h = l(i), u = new Re();
          return { dir: i, show(d, f, m) {
            f === void 0 && (f = 0);
            const S = m ? "linear" : r;
            return d -= Math.round(d * Z(f, -1, 1)), this.translate(f), gi(e, "itemin", { percent: f, duration: d, timing: S, dir: i }), gi(t, "itemout", { percent: 1 - f, duration: d, timing: S, dir: i }), Promise.all([T.start(e, h[1], d, S), T.start(t, h[0], d, S)]).then(() => {
              this.reset(), u.resolve();
            }, I), u.promise;
          }, cancel() {
            T.cancel([e, t]);
          }, reset() {
            for (const d in h[0])
              c([e, t], d, "");
          }, forward(d, f) {
            return f === void 0 && (f = this.percent()), T.cancel([e, t]), this.show(d, f, true);
          }, translate(d) {
            this.reset();
            const f = a(d, i);
            c(e, f[1]), c(t, f[0]), gi(e, "itemtranslatein", { percent: d, dir: i }), gi(t, "itemtranslateout", { percent: 1 - d, dir: i });
          }, percent() {
            return o(t || e, e, i);
          }, getDistance() {
            return t == null ? void 0 : t.offsetWidth;
          } };
        }
        function gi(t, e, i) {
          g(t, Nt(e, false, false, i));
        }
        var rl = { props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean }, data: { autoplay: false, autoplayInterval: 7e3, pauseOnHover: true }, connected() {
          this.autoplay && this.startAutoplay();
        }, disconnected() {
          this.stopAutoplay();
        }, update() {
          b(this.slides, "tabindex", "-1");
        }, events: [{ name: "visibilitychange", el() {
          return document;
        }, filter() {
          return this.autoplay;
        }, handler() {
          document.hidden ? this.stopAutoplay() : this.startAutoplay();
        } }], methods: { startAutoplay() {
          this.stopAutoplay(), this.interval = setInterval(() => (!this.draggable || !v(":focus", this.$el)) && (!this.pauseOnHover || !z(this.$el, ":hover")) && !this.stack.length && this.show("next"), this.autoplayInterval);
        }, stopAutoplay() {
          this.interval && clearInterval(this.interval);
        } } };
        const ls = { passive: false, capture: true }, Ln = { passive: true, capture: true }, ol = "touchstart mousedown", hs = "touchmove mousemove", Wn = "touchend touchcancel mouseup click input scroll";
        var al = { props: { draggable: Boolean }, data: { draggable: true, threshold: 10 }, created() {
          for (const t of ["start", "move", "end"]) {
            const e = this[t];
            this[t] = (i) => {
              const s = se(i).x * (X ? -1 : 1);
              this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
            };
          }
        }, events: [{ name: ol, passive: true, delegate() {
          return this.selSlides;
        }, handler(t) {
          !this.draggable || !kt(t) && ll(t.target) || tt(t.target, be) || t.button > 0 || this.length < 2 || this.start(t);
        } }, { name: "dragstart", handler(t) {
          t.preventDefault();
        } }, { name: hs, el() {
          return this.list;
        }, handler: I, ...ls }], methods: { start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = true, this.stack = []) : this.prevIndex = this.index, k(document, hs, this.move, ls), k(document, Wn, this.end, Ln), c(this.list, "userSelect", "none");
        }, move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          c(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = true, this.dir = e < 0 ? 1 : -1;
          const { slides: i } = this;
          let { prevIndex: s } = this, n = Math.abs(e), r = this.getIndex(s + this.dir, s), o = this._getDistance(s, r) || i[s].offsetWidth;
          for (; r !== s && n > o; )
            this.drag -= o * this.dir, s = r, n -= o, r = this.getIndex(s + this.dir, s), o = this._getDistance(s, r) || i[s].offsetWidth;
          this.percent = n / o;
          const a = i[s], l = i[r], h = this.index !== r, u = s === r;
          let d;
          [this.index, this.prevIndex].filter((f) => !p([r, s], f)).forEach((f) => {
            g(i[f], "itemhidden", [this]), u && (d = true, this.prevIndex = s);
          }), (this.index === s && this.prevIndex !== s || d) && g(i[this.index], "itemshown", [this]), h && (this.prevIndex = s, this.index = r, !u && g(a, "beforeitemhide", [this]), g(l, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l), h && (!u && g(a, "itemhide", [this]), g(l, "itemshow", [this]));
        }, end() {
          if (Dt(document, hs, this.move, ls), Dt(document, Wn, this.end, Ln), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(false, this.index, true), this._transitioner = null;
            else {
              const t = (X ? this.dir * (X ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", true);
            }
          c(this.list, { userSelect: "", pointerEvents: "" }), this.drag = this.percent = null;
        } } };
        function ll(t) {
          return c(t, "userSelect") !== "none" && y(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
        }
        var hl = { data: { selNav: false }, computed: { nav(t, e) {
          let { selNav: i } = t;
          return v(i, e);
        }, selNavItem(t) {
          let { attrItem: e } = t;
          return "[" + e + "],[data-" + e + "]";
        }, navItems(t, e) {
          return D(this.selNavItem, e);
        } }, update: { write() {
          this.nav && this.length !== this.nav.children.length && Pt(this.nav, this.slides.map((t, e) => "<li " + this.attrItem + '="' + e + '"><a href></a></li>').join("")), this.navItems.concat(this.nav).forEach((t) => t && (t.hidden = !this.maxIndex)), this.updateNav();
        }, events: ["resize"] }, events: [{ name: "click", delegate() {
          return this.selNavItem;
        }, handler(t) {
          t.preventDefault(), this.show(nt(t.current, this.attrItem));
        } }, { name: "itemshow", handler: "updateNav" }], methods: { updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const i = nt(e, this.attrItem);
            j(e, this.clsActive, Ct(i) === t), j(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex));
          }
        } } }, jn = { mixins: [rl, al, hl, wt], props: { clsActivated: Boolean, easing: String, index: Number, finite: Boolean, velocity: Number, selSlides: String }, data: () => ({ easing: "ease", finite: false, velocity: 1, index: 0, prevIndex: -1, stack: [], percent: 0, clsActive: "uk-active", clsActivated: false, Transitioner: false, transitionOptions: {} }), connected() {
          this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
        }, disconnected() {
          B(this.slides, this.clsActive);
        }, computed: { duration(t, e) {
          let { velocity: i } = t;
          return Rn(e.offsetWidth / i);
        }, list(t, e) {
          let { selList: i } = t;
          return v(i, e);
        }, maxIndex() {
          return this.length - 1;
        }, selSlides(t) {
          let { selList: e, selSlides: i } = t;
          return e + " " + (i || "> *");
        }, slides: { get() {
          return D(this.selSlides, this.$el);
        }, watch() {
          this.$emit("resize");
        } }, length() {
          return this.slides.length;
        } }, methods: { show(t, e) {
          if (e === void 0 && (e = false), this.dragging || !this.length)
            return;
          const { stack: i } = this, s = e ? 0 : i.length, n = () => {
            i.splice(s, 1), i.length && this.show(i.shift(), true);
          };
          if (i[e ? "unshift" : "push"](t), !e && i.length > 1) {
            i.length === 2 && this._transitioner.forward(Math.min(this.duration, 200));
            return;
          }
          const r = this.getIndex(this.index), o = _(this.slides, this.clsActive) && this.slides[r], a = this.getIndex(t, this.index), l = this.slides[a];
          if (o === l) {
            n();
            return;
          }
          if (this.dir = cl(t, r), this.prevIndex = r, this.index = a, o && !g(o, "beforeitemhide", [this]) || !g(l, "beforeitemshow", [this, o])) {
            this.index = this.prevIndex, n();
            return;
          }
          const h = this._show(o, l, e).then(() => (o && g(o, "itemhidden", [this]), g(l, "itemshown", [this]), new Promise((u) => {
            requestAnimationFrame(() => {
              i.shift(), i.length ? this.show(i.shift(), true) : this._transitioner = null, u();
            });
          })));
          return o && g(o, "itemhide", [this]), g(l, "itemshow", [this]), h;
        }, getIndex(t, e) {
          return t === void 0 && (t = this.index), e === void 0 && (e = this.index), Z(te(t, this.slides, e, this.finite), 0, this.maxIndex);
        }, getValidIndex(t, e) {
          return t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), this.getIndex(t, e);
        }, _show(t, e, i) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, { easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing, ...this.transitionOptions }), !i && !t)
            return this._translate(1), Promise.resolve();
          const { length: s } = this.stack;
          return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
        }, _getDistance(t, e) {
          return this._getTransitioner(t, t !== e && e).getDistance();
        }, _translate(t, e, i) {
          e === void 0 && (e = this.prevIndex), i === void 0 && (i = this.index);
          const s = this._getTransitioner(e !== i ? e : false, i);
          return s.translate(t), s;
        }, _getTransitioner(t, e, i, s) {
          return t === void 0 && (t = this.prevIndex), e === void 0 && (e = this.index), i === void 0 && (i = this.dir || 1), s === void 0 && (s = this.transitionOptions), new this.Transitioner(Kt(t) ? this.slides[t] : t, Kt(e) ? this.slides[e] : e, i * (X ? -1 : 1), s);
        } } };
        function cl(t, e) {
          return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
        }
        function Rn(t) {
          return 0.5 * t + 300;
        }
        var qn = { mixins: [jn], props: { animation: String }, data: { animation: "slide", clsActivated: "uk-transition-active", Animations: as, Transitioner: nl }, computed: { animation(t) {
          let { animation: e, Animations: i } = t;
          return { ...i[e] || i.slide, name: e };
        }, transitionOptions() {
          return { animation: this.animation };
        } }, events: { beforeitemshow(t) {
          let { target: e } = t;
          x(e, this.clsActive);
        }, itemshown(t) {
          let { target: e } = t;
          x(e, this.clsActivated);
        }, itemhidden(t) {
          let { target: e } = t;
          B(e, this.clsActive, this.clsActivated);
        } } }, Vn = { mixins: [ce, Qi, _t, qn], functional: true, props: { delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String }, data: () => ({ preload: 1, videoAutoplay: false, delayControls: 3e3, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", selList: ".uk-lightbox-items", attrItem: "uk-lightbox-item", selClose: ".uk-close-large", selCaption: ".uk-lightbox-caption", pauseOnHover: false, velocity: 2, Animations: Hn, template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' }), created() {
          const t = v(this.template), e = v(this.selList, t);
          this.items.forEach(() => L(e, "<li>")), this.$mount(L(this.container, t));
        }, computed: { caption(t, e) {
          let { selCaption: i } = t;
          return v(i, e);
        } }, events: [{ name: Ue + " " + mt + " keydown", handler: "showControls" }, { name: "click", self: true, delegate() {
          return this.selSlides;
        }, handler(t) {
          t.defaultPrevented || this.hide();
        } }, { name: "shown", self: true, handler() {
          this.showControls();
        } }, { name: "hide", self: true, handler() {
          this.hideControls(), B(this.slides, this.clsActive), T.stop(this.slides);
        } }, { name: "hidden", self: true, handler() {
          this.$destroy(true);
        } }, { name: "keyup", el() {
          return document;
        }, handler(t) {
          if (!(!this.isToggled(this.$el) || !this.draggable))
            switch (t.keyCode) {
              case 37:
                this.show("previous");
                break;
              case 39:
                this.show("next");
                break;
            }
        } }, { name: "beforeitemshow", handler(t) {
          this.isToggled() || (this.draggable = false, t.preventDefault(), this.toggleElement(this.$el, true, false), this.animation = Hn.scale, B(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
        } }, { name: "itemshow", handler() {
          Pt(this.caption, this.getItem().caption || "");
          for (let t = -this.preload; t <= this.preload; t++)
            this.loadItem(this.index + t);
        } }, { name: "itemshown", handler() {
          this.draggable = this.$props.draggable;
        } }, { name: "itemload", async handler(t, e) {
          const { source: i, type: s, alt: n = "", poster: r, attrs: o = {} } = e;
          if (this.setItem(e, "<span uk-spinner></span>"), !i)
            return;
          let a;
          const l = { allowfullscreen: "", style: "max-width: 100%; box-sizing: border-box;", "uk-responsive": "", "uk-video": "" + this.videoAutoplay };
          if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i))
            try {
              const { width: h, height: u } = await ks(i, o.srcset, o.size);
              this.setItem(e, Be("img", { src: i, width: h, height: u, alt: n, ...o }));
            } catch {
              this.setError(e);
            }
          else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
            const h = Be("video", { src: i, poster: r, controls: "", playsinline: "", "uk-video": "" + this.videoAutoplay });
            k(h, "loadedmetadata", () => {
              b(h, { width: h.videoWidth, height: h.videoHeight, ...o }), this.setItem(e, h);
            }), k(h, "error", () => this.setError(e));
          } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
            this.setItem(e, Be("iframe", { src: i, allowfullscreen: "", class: "uk-lightbox-iframe", ...o }));
          else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
            this.setItem(e, Be("iframe", { src: "https://www.youtube" + (a[1] || "") + ".com/embed/" + a[2] + (a[3] ? "?" + a[3] : ""), width: 1920, height: 1080, ...l, ...o }));
          else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
            try {
              const { height: h, width: u } = await (await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(i), { credentials: "omit" })).json();
              this.setItem(e, Be("iframe", { src: "https://player.vimeo.com/video/" + a[1] + (a[2] ? "?" + a[2] : ""), width: u, height: h, ...l, ...o }));
            } catch {
              this.setError(e);
            }
        } }], methods: { loadItem(t) {
          t === void 0 && (t = this.index);
          const e = this.getItem(t);
          this.getSlide(e).childElementCount || g(this.$el, "itemload", [e]);
        }, getItem(t) {
          return t === void 0 && (t = this.index), this.items[te(t, this.slides)];
        }, setItem(t, e) {
          g(this.$el, "itemloaded", [this, Pt(this.getSlide(t), e)]);
        }, getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        }, setError(t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        }, showControls() {
          clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), x(this.$el, "uk-active", "uk-transition-active");
        }, hideControls() {
          B(this.$el, "uk-active", "uk-transition-active");
        } } };
        function Be(t, e) {
          const i = zt("<" + t + ">");
          return b(i, e), i;
        }
        var ul = { install: dl, props: { toggle: String }, data: { toggle: "a" }, computed: { toggles: { get(t, e) {
          let { toggle: i } = t;
          return D(i, e);
        }, watch() {
          this.hide();
        } } }, disconnected() {
          this.hide();
        }, events: [{ name: "click", delegate() {
          return this.toggle + ":not(.uk-disabled)";
        }, handler(t) {
          t.preventDefault(), this.show(t.current);
        } }], methods: { show(t) {
          const e = ms(this.toggles.map(Yn), "source");
          if (Jt(t)) {
            const { source: i } = Yn(t);
            t = bt(e, (s) => {
              let { source: n } = s;
              return i === n;
            });
          }
          return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), k(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
        }, hide() {
          var t;
          return (t = this.panel) == null ? void 0 : t.hide();
        } } };
        function dl(t, e) {
          t.lightboxPanel || t.component("lightboxPanel", Vn), xt(e.props, t.component("lightboxPanel").options.props);
        }
        function Yn(t) {
          const e = {};
          for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
            e[i === "href" ? "source" : i] = nt(t, i);
          return e.attrs = Pe(e.attrs), e;
        }
        var fl = { mixins: [ce], functional: true, args: ["message", "status"], data: { message: "", status: "", timeout: 5e3, group: null, pos: "top-center", clsContainer: "uk-notification", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" }, install: pl, computed: { marginProp(t) {
          let { pos: e } = t;
          return "margin" + (ht(e, "top") ? "Top" : "Bottom");
        }, startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        } }, created() {
          const t = v("." + this.clsContainer + "-" + this.pos, this.container) || L(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
          this.$mount(L(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '" role="alert"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"));
        }, async connected() {
          const t = w(c(this.$el, this.marginProp));
          await T.start(c(this.$el, this.startProps), { opacity: 1, [this.marginProp]: t }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        }, events: { click(t) {
          tt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
        }, [jt]() {
          this.timer && clearTimeout(this.timer);
        }, [ae]() {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        } }, methods: { async close(t) {
          const e = (i) => {
            const s = E(i);
            g(i, "close", [this]), rt(i), s != null && s.hasChildNodes() || rt(s);
          };
          this.timer && clearTimeout(this.timer), t || await T.start(this.$el, this.startProps), e(this.$el);
        } } };
        function pl(t) {
          t.notification.closeAll = function(e, i) {
            vt(document.body, (s) => {
              const n = t.getComponent(s, "notification");
              n && (!e || e === n.group) && n.close(i);
            });
          };
        }
        const mi = { x: vi, y: vi, rotate: vi, scale: vi, color: cs, backgroundColor: cs, borderColor: cs, blur: qt, hue: qt, fopacity: qt, grayscale: qt, invert: qt, saturate: qt, sepia: qt, opacity: ml, stroke: vl, bgx: Jn, bgy: Jn }, { keys: Xn } = Object;
        var Gn = { mixins: [fi], props: Un(Xn(mi), "list"), data: Un(Xn(mi), void 0), computed: { props(t, e) {
          const i = {};
          for (const n in t)
            n in mi && !q(t[n]) && (i[n] = t[n].slice());
          const s = {};
          for (const n in i)
            s[n] = mi[n](n, e, i[n], i);
          return s;
        } }, events: { load() {
          this.$emit();
        } }, methods: { reset() {
          for (const t in this.getCss(0))
            c(this.$el, t, "");
        }, getCss(t) {
          const e = { transform: "", filter: "" };
          for (const i in this.props)
            this.props[i](e, t);
          return e.willChange = Object.keys(e).filter((i) => e[i] !== "").join(","), e;
        } } };
        function vi(t, e, i) {
          let s = bi(i) || { x: "px", y: "px", rotate: "deg" }[t] || "", n;
          return t === "x" || t === "y" ? (t = "translate" + St(t), n = (r) => w(w(r).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = (r) => bi([r]) ? ot(r, "width", e, true) / e.offsetWidth : r), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = de(i, n), (r, o) => {
            r.transform += " " + t + "(" + Me(i, o) + s + ")";
          };
        }
        function cs(t, e, i) {
          return i.length === 1 && i.unshift(De(e, t, "")), i = de(i, (s) => gl(e, s)), (s, n) => {
            const [r, o, a] = Qn(i, n), l = r.map((h, u) => (h += a * (o[u] - h), u === 3 ? w(h) : parseInt(h, 10))).join(",");
            s[t] = "rgba(" + l + ")";
          };
        }
        function gl(t, e) {
          return De(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(w);
        }
        function qt(t, e, i) {
          i.length === 1 && i.unshift(0);
          const s = bi(i) || { blur: "px", hue: "deg" }[t] || "%";
          return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, i = de(i), (n, r) => {
            const o = Me(i, r);
            n.filter += " " + t + "(" + (o + s) + ")";
          };
        }
        function ml(t, e, i) {
          return i.length === 1 && i.unshift(De(e, t, "")), i = de(i), (s, n) => {
            s[t] = Me(i, n);
          };
        }
        function vl(t, e, i) {
          i.length === 1 && i.unshift(0);
          const s = bi(i), n = vn(e);
          return i = de(i.reverse(), (r) => (r = w(r), s === "%" ? r * n / 100 : r)), i.some((r) => {
            let [o] = r;
            return o;
          }) ? (c(e, "strokeDasharray", n), (r, o) => {
            r.strokeDashoffset = Me(i, o);
          }) : I;
        }
        function Jn(t, e, i, s) {
          i.length === 1 && i.unshift(0);
          const n = t === "bgy" ? "height" : "width";
          s[t] = de(i, (a) => ot(a, n, e));
          const r = ["bgx", "bgy"].filter((a) => a in s);
          if (r.length === 2 && t === "bgx")
            return I;
          if (De(e, "backgroundSize", "") === "cover")
            return wl(t, e, i, s);
          const o = {};
          for (const a of r)
            o[a] = Kn(e, a);
          return Zn(r, o, s);
        }
        function wl(t, e, i, s) {
          const n = bl(e);
          if (!n.width)
            return I;
          const r = { width: e.offsetWidth, height: e.offsetHeight }, o = ["bgx", "bgy"].filter((u) => u in s), a = {};
          for (const u of o) {
            const d = s[u].map((H) => {
              let [W] = H;
              return W;
            }), f = Math.min(...d), m = Math.max(...d), S = d.indexOf(f) < d.indexOf(m), C = m - f;
            a[u] = (S ? -C : 0) - (S ? f : m) + "px", r[u === "bgy" ? "height" : "width"] += C;
          }
          const l = je.cover(n, r);
          for (const u of o) {
            const d = u === "bgy" ? "height" : "width", f = l[d] - r[d];
            a[u] = "max(" + Kn(e, u) + ",-" + f + "px) + " + a[u];
          }
          const h = Zn(o, a, s);
          return (u, d) => {
            h(u, d), u.backgroundSize = l.width + "px " + l.height + "px", u.backgroundRepeat = "no-repeat";
          };
        }
        function Kn(t, e) {
          return De(t, "background-position-" + e.substr(-1), "");
        }
        function Zn(t, e, i) {
          return function(s, n) {
            for (const r of t) {
              const o = Me(i[r], n);
              s["background-position-" + r.substr(-1)] = "calc(" + e[r] + " + " + o + "px)";
            }
          };
        }
        const wi = {};
        function bl(t) {
          const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
          if (wi[e])
            return wi[e];
          const i = new Image();
          return e && (i.src = e, !i.naturalWidth) ? (i.onload = () => {
            wi[e] = us(i), g(t, Nt("load", false));
          }, us(i)) : wi[e] = us(i);
        }
        function us(t) {
          return { width: t.naturalWidth, height: t.naturalHeight };
        }
        function de(t, e) {
          e === void 0 && (e = w);
          const i = [], { length: s } = t;
          let n = 0;
          for (let r = 0; r < s; r++) {
            let [o, a] = M(t[r]) ? t[r].trim().split(" ") : [t[r]];
            if (o = e(o), a = a ? w(a) / 100 : null, r === 0 ? a === null ? a = 0 : a && i.push([o, 0]) : r === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([o, a]), a = 1)), i.push([o, a]), a === null)
              n++;
            else if (n) {
              const l = i[r - n - 1][1], h = (a - l) / (n + 1);
              for (let u = n; u > 0; u--)
                i[r - u][1] = l + h * (n - u + 1);
              n = 0;
            }
          }
          return i;
        }
        function Qn(t, e) {
          const i = bt(t.slice(1), (s) => {
            let [, n] = s;
            return e <= n;
          }) + 1;
          return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
        }
        function Me(t, e) {
          const [i, s, n] = Qn(t, e);
          return Kt(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s;
        }
        const xl = /^-?\d+(\S+)?/;
        function bi(t, e) {
          for (const i of t) {
            const s = i.match == null ? void 0 : i.match(xl);
            if (s)
              return s[1];
          }
          return e;
        }
        function De(t, e, i) {
          const s = t.style[e], n = c(c(t, e, i), e);
          return t.style[e] = s, n;
        }
        function Un(t, e) {
          return t.reduce((i, s) => (i[s] = e, i), {});
        }
        var yl = { mixins: [Gn, wt, ai], props: { target: String, viewport: Number, easing: Number, start: String, end: String }, data: { target: false, viewport: 1, easing: 1, start: 0, end: 0 }, computed: { target(t, e) {
          let { target: i } = t;
          return tr(i && ct(i, e) || e);
        }, start(t) {
          let { start: e } = t;
          return ot(e, "height", this.target, true);
        }, end(t) {
          let { end: e, viewport: i } = t;
          return ot(e || (i = (1 - i) * 100) && i + "vh+" + i + "%", "height", this.target, true);
        } }, resizeTargets() {
          return [this.$el, this.target];
        }, update: { read(t, e) {
          let { percent: i } = t;
          if (e.has("scroll") || (i = false), !R(this.$el))
            return false;
          if (!this.matchMedia)
            return;
          const s = i;
          return i = $l(Ji(this.target, this.start, this.end), this.easing), { percent: i, style: s === i ? false : this.getCss(i) };
        }, write(t) {
          let { style: e } = t;
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          e && c(this.$el, e);
        }, events: ["scroll", "resize"] } };
        function $l(t, e) {
          return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
        }
        function tr(t) {
          return t ? "offsetTop" in t ? t : tr(E(t)) : document.documentElement;
        }
        var er = { update: { write() {
          if (this.stack.length || this.dragging)
            return;
          const t = this.getValidIndex(this.index);
          !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index);
        }, events: ["resize"] } }, ir = { mixins: [Ae], connected() {
          this.lazyload(this.slides, this.getAdjacentSlides);
        } };
        function kl(t, e, i, s) {
          let { center: n, easing: r, list: o } = s;
          const a = new Re(), l = t ? Ne(t, o, n) : Ne(e, o, n) + $9(e).width * i, h = e ? Ne(e, o, n) : l + $9(t).width * i * (X ? -1 : 1);
          return { dir: i, show(u, d, f) {
            d === void 0 && (d = 0);
            const m = f ? "linear" : r;
            return u -= Math.round(u * Z(d, -1, 1)), this.translate(d), d = t ? d : Z(d, 0, 1), ds(this.getItemIn(), "itemin", { percent: d, duration: u, timing: m, dir: i }), t && ds(this.getItemIn(true), "itemout", { percent: 1 - d, duration: u, timing: m, dir: i }), T.start(o, { transform: F(-h * (X ? -1 : 1), "px") }, u, m).then(a.resolve, I), a.promise;
          }, cancel() {
            T.cancel(o);
          }, reset() {
            c(o, "transform", "");
          }, forward(u, d) {
            return d === void 0 && (d = this.percent()), T.cancel(o), this.show(u, d, true);
          }, translate(u) {
            const d = this.getDistance() * i * (X ? -1 : 1);
            c(o, "transform", F(Z(-h + (d - d * u), -xi(o), $9(o).width) * (X ? -1 : 1), "px"));
            const f = this.getActives(), m = this.getItemIn(), S = this.getItemIn(true);
            u = t ? Z(u, -1, 1) : 0;
            for (const C of O(o)) {
              const H = p(f, C), W = C === m, Ot = C === S, fs = W || !Ot && (H || i * (X ? -1 : 1) === -1 ^ yi(C, o) > yi(t || e));
              ds(C, "itemtranslate" + (fs ? "in" : "out"), { dir: i, percent: Ot ? 1 - u : W ? u : H ? 1 : 0 });
            }
          }, percent() {
            return Math.abs((c(o, "transform").split(",")[4] * (X ? -1 : 1) + l) / (h - l));
          }, getDistance() {
            return Math.abs(h - l);
          }, getItemIn(u) {
            u === void 0 && (u = false);
            let d = this.getActives(), f = nr(o, Ne(e || t, o, n));
            if (u) {
              const m = d;
              d = f, f = m;
            }
            return f[bt(f, (m) => !p(d, m))];
          }, getActives() {
            return nr(o, Ne(t || e, o, n));
          } };
        }
        function Ne(t, e, i) {
          const s = yi(t, e);
          return i ? s - Sl(t, e) : Math.min(s, sr(e));
        }
        function sr(t) {
          return Math.max(0, xi(t) - $9(t).width);
        }
        function xi(t) {
          return Ut(O(t), (e) => $9(e).width);
        }
        function Sl(t, e) {
          return $9(e).width / 2 - $9(t).width / 2;
        }
        function yi(t, e) {
          return t && (Ze(t).left + (X ? $9(t).width - $9(e).width : 0)) * (X ? -1 : 1) || 0;
        }
        function nr(t, e) {
          e -= 1;
          const i = $9(t).width, s = e + i + 2;
          return O(t).filter((n) => {
            const r = yi(n, t), o = r + Math.min($9(n).width, i);
            return r >= e && o <= s;
          });
        }
        function ds(t, e, i) {
          g(t, Nt(e, false, false, i));
        }
        var Tl = { mixins: [it, jn, er, ir], props: { center: Boolean, sets: Boolean }, data: { center: false, sets: false, attrItem: "uk-slider-item", selList: ".uk-slider-items", selNav: ".uk-slider-nav", clsContainer: "uk-slider-container", Transitioner: kl }, computed: { avgWidth() {
          return xi(this.list) / this.length;
        }, finite(t) {
          let { finite: e } = t;
          return e || Math.ceil(xi(this.list)) < Math.trunc($9(this.list).width + Cl(this.list) + this.center);
        }, maxIndex() {
          if (!this.finite || this.center && !this.sets)
            return this.length - 1;
          if (this.center)
            return Qt(this.sets);
          let t = 0;
          const e = sr(this.list), i = bt(this.slides, (s) => {
            if (t >= e)
              return true;
            t += $9(s).width;
          });
          return ~i ? i : this.length - 1;
        }, sets(t) {
          let { sets: e } = t;
          if (!e)
            return;
          let i = 0;
          const s = [], n = $9(this.list).width;
          for (let r = 0; r < this.slides.length; r++) {
            const o = $9(this.slides[r]).width;
            i + o > n && (i = 0), this.center ? i < n / 2 && i + o + $9(this.slides[+r + 1]).width / 2 > n / 2 && (s.push(+r), i = n / 2 - o / 2) : i === 0 && s.push(Math.min(+r, this.maxIndex)), i += o;
          }
          if (s.length)
            return s;
        }, transitionOptions() {
          return { center: this.center, list: this.list };
        } }, connected() {
          j(this.$el, this.clsContainer, !v("." + this.clsContainer, this.$el));
        }, update: { write() {
          for (const t of this.navItems) {
            const e = Ct(nt(t, this.attrItem));
            e !== false && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !p(this.sets, e));
          }
          this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses();
        }, events: ["resize"] }, events: { beforeitemshow(t) {
          !this.dragging && this.sets && this.stack.length < 2 && !p(this.sets, this.index) && (this.index = this.getValidIndex());
          const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
          if (!this.dragging && e > 1) {
            for (let s = 0; s < e; s++)
              this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
            t.preventDefault();
            return;
          }
          const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
          this.duration = Rn(this.avgWidth / this.velocity) * ($9(this.slides[i]).width / this.avgWidth), this.reorder();
        }, itemshow() {
          ~this.prevIndex && x(this._getTransitioner().getItemIn(), this.clsActive);
        }, itemshown() {
          this.updateActiveClasses();
        } }, methods: { reorder() {
          if (this.finite) {
            c(this.slides, "order", "");
            return;
          }
          const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if (this.slides.forEach((n, r) => c(n, "order", this.dir > 0 && r < t ? 1 : this.dir < 0 && r >= this.index ? -1 : "")), !this.center)
            return;
          const e = this.slides[t];
          let i = $9(this.list).width / 2 - $9(e).width / 2, s = 0;
          for (; i > 0; ) {
            const n = this.getIndex(--s + t, t), r = this.slides[n];
            c(r, "order", n > t ? -2 : -1), i -= $9(r).width;
          }
        }, updateActiveClasses() {
          const t = this._getTransitioner(this.index).getActives(), e = [this.clsActive, (!this.sets || p(this.sets, w(this.index))) && this.clsActivated || ""];
          for (const i of this.slides)
            j(i, e, p(t, i));
        }, getValidIndex(t, e) {
          if (t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets)
            return t;
          let i;
          do {
            if (p(this.sets, t))
              return t;
            i = t, t = this.getIndex(t + this.dir, e);
          } while (t !== i);
          return t;
        }, getAdjacentSlides() {
          const { width: t } = $9(this.list), e = -t, i = t * 2, s = $9(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, r = /* @__PURE__ */ new Set();
          for (const o of [-1, 1]) {
            let a = n + (o > 0 ? s : 0), l = 0;
            do {
              const h = this.slides[this.getIndex(this.index + o + l++ * o)];
              a += $9(h).width * o, r.add(h);
            } while (this.slides.length > l && a > e && a < i);
          }
          return Array.from(r);
        } } };
        function Cl(t) {
          return Math.max(0, ...O(t).map((e) => $9(e).width));
        }
        var rr = { mixins: [Gn], data: { selItem: "!li" }, beforeConnect() {
          this.item = ct(this.selItem, this.$el);
        }, disconnected() {
          this.item = null;
        }, events: [{ name: "itemin itemout", self: true, el() {
          return this.item;
        }, handler(t) {
          let { type: e, detail: { percent: i, duration: s, timing: n, dir: r } } = t;
          G.read(() => {
            if (!this.matchMedia)
              return;
            const o = this.getCss(ar(e, r, i)), a = this.getCss(or(e) ? 0.5 : r > 0 ? 1 : 0);
            G.write(() => {
              c(this.$el, o), T.start(this.$el, a, s, n).catch(I);
            });
          });
        } }, { name: "transitioncanceled transitionend", self: true, el() {
          return this.item;
        }, handler() {
          T.cancel(this.$el);
        } }, { name: "itemtranslatein itemtranslateout", self: true, el() {
          return this.item;
        }, handler(t) {
          let { type: e, detail: { percent: i, dir: s } } = t;
          G.read(() => {
            if (!this.matchMedia) {
              this.reset();
              return;
            }
            const n = this.getCss(ar(e, s, i));
            G.write(() => c(this.$el, n));
          });
        } }] };
        function or(t) {
          return Xt(t, "in");
        }
        function ar(t, e, i) {
          return i /= 2, or(t) ^ e < 0 ? i : 1 - i;
        }
        var Il = { ...as, fade: { show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        }, percent(t) {
          return 1 - c(t, "opacity");
        }, translate(t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        } }, scale: { show() {
          return [{ opacity: 0, transform: ue(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        }, percent(t) {
          return 1 - c(t, "opacity");
        }, translate(t) {
          return [{ opacity: 1 - t, transform: ue(1 + 0.5 * t), zIndex: 0 }, { zIndex: -1 }];
        } }, pull: { show(t) {
          return t < 0 ? [{ transform: F(30), zIndex: -1 }, { transform: F(), zIndex: 0 }] : [{ transform: F(-100), zIndex: 0 }, { transform: F(), zIndex: -1 }];
        }, percent(t, e, i) {
          return i < 0 ? 1 - Oe(e) : Oe(t);
        }, translate(t, e) {
          return e < 0 ? [{ transform: F(30 * t), zIndex: -1 }, { transform: F(-100 * (1 - t)), zIndex: 0 }] : [{ transform: F(-t * 100), zIndex: 0 }, { transform: F(30 * (1 - t)), zIndex: -1 }];
        } }, push: { show(t) {
          return t < 0 ? [{ transform: F(100), zIndex: 0 }, { transform: F(), zIndex: -1 }] : [{ transform: F(-30), zIndex: -1 }, { transform: F(), zIndex: 0 }];
        }, percent(t, e, i) {
          return i > 0 ? 1 - Oe(e) : Oe(t);
        }, translate(t, e) {
          return e < 0 ? [{ transform: F(t * 100), zIndex: 0 }, { transform: F(-30 * (1 - t)), zIndex: -1 }] : [{ transform: F(-30 * t), zIndex: -1 }, { transform: F(100 * (1 - t)), zIndex: 0 }];
        } } }, Pl = { mixins: [it, qn, er, ir], props: { ratio: String, minHeight: Number, maxHeight: Number }, data: { ratio: "16:9", minHeight: false, maxHeight: false, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: Il }, update: { read() {
          if (!this.list)
            return false;
          let [t, e] = this.ratio.split(":").map(Number);
          return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), { height: e - ne(this.list, "height", "content-box") };
        }, write(t) {
          let { height: e } = t;
          e > 0 && c(this.list, "minHeight", e);
        }, events: ["resize"] }, methods: { getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        } } }, Al = { mixins: [it, Nn], props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String }, data: { group: false, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: false, pos: {} }, created() {
          for (const t of ["init", "start", "move", "end"]) {
            const e = this[t];
            this[t] = (i) => {
              xt(this.pos, se(i)), e(i);
            };
          }
        }, events: { name: mt, passive: false, handler: "init" }, computed: { target() {
          return (this.$el.tBodies || [this.$el])[0];
        }, items() {
          return O(this.target);
        }, isEmpty: { get() {
          return me(this.items);
        }, watch(t) {
          j(this.target, this.clsEmpty, t);
        }, immediate: true }, handles: { get(t, e) {
          let { handle: i } = t;
          return i ? D(i, e) : this.items;
        }, watch(t, e) {
          c(e, { touchAction: "", userSelect: "" }), c(t, { touchAction: Wt ? "none" : "", userSelect: "none" });
        }, immediate: true } }, update: { write(t) {
          if (!this.drag || !E(this.placeholder))
            return;
          const { pos: { x: e, y: i }, origin: { offsetTop: s, offsetLeft: n }, placeholder: r } = this;
          c(this.drag, { top: i - s, left: e - n });
          const o = this.getSortable(document.elementFromPoint(e, i));
          if (!o)
            return;
          const { items: a } = o;
          if (a.some(T.inProgress))
            return;
          const l = Bl(a, { x: e, y: i });
          if (a.length && (!l || l === r))
            return;
          const h = this.getSortable(r), u = Ml(o.target, l, r, e, i, o === h && t.moved !== l);
          u !== false && (u && r === u || (o !== h ? (h.remove(r), t.moved = l) : delete t.moved, o.insert(r, u), this.touched.add(o)));
        }, events: ["move"] }, methods: { init(t) {
          const { target: e, button: i, defaultPrevented: s } = t, [n] = this.items.filter((r) => A(e, r));
          !n || s || i > 0 || Oi(e) || A(e, "." + this.clsNoDrag) || this.handle && !A(e, this.handle) || (t.preventDefault(), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = n, this.origin = { target: e, index: ie(n), ...this.pos }, k(document, Ue, this.move), k(document, At, this.end), this.threshold || this.start(t));
        }, start(t) {
          this.drag = Ol(this.$container, this.placeholder);
          const { left: e, top: i } = this.placeholder.getBoundingClientRect();
          xt(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }), x(this.drag, this.clsDrag, this.clsCustom), x(this.placeholder, this.clsPlaceholder), x(this.items, this.clsItem), x(document.documentElement, this.clsDragState), g(this.$el, "start", [this, this.placeholder]), El(this.pos), this.move(t);
        }, move(t) {
          this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
        }, end() {
          if (Dt(document, Ue, this.move), Dt(document, At, this.end), !this.drag)
            return;
          _l();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== ie(this.placeholder) && g(this.$el, "moved", [this, this.placeholder]) : (g(t.$el, "added", [t, this.placeholder]), g(this.$el, "removed", [this, this.placeholder])), g(this.$el, "stop", [this, this.placeholder]), rt(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: i } of this.touched)
            for (const s of this.touched)
              B(s.items, e, i);
          this.touched = null, B(document.documentElement, this.clsDragState);
        }, insert(t, e) {
          x(this.items, this.clsItem);
          const i = () => e ? Xe(e, t) : L(this.target, t);
          this.animate(i);
        }, remove(t) {
          !A(t, this.target) || this.animate(() => rt(t));
        }, getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || this.group !== false && e.group === this.group))
              return e;
          } while (t = E(t));
        } } };
        let lr;
        function El(t) {
          let e = Date.now();
          lr = setInterval(() => {
            let { x: i, y: s } = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * 0.3;
            e = Date.now(), U(document.elementFromPoint(i, t.y), /auto|scroll/).reverse().some((r) => {
              let { scrollTop: o, scrollHeight: a } = r;
              const { top: l, bottom: h, height: u } = at(r);
              if (l < s && l + 35 > s)
                o -= n;
              else if (h > s && h - 35 < s)
                o += n;
              else
                return;
              if (o > 0 && o < a - u)
                return r.scrollTop = o, true;
            });
          }, 15);
        }
        function _l() {
          clearInterval(lr);
        }
        function Ol(t, e) {
          let i;
          if (["li", "tr"].some((s) => ut(e, s))) {
            i = v("<div>"), L(i, e.cloneNode(true).children);
            for (const s of e.getAttributeNames())
              b(i, s, e.getAttribute(s));
          } else
            i = e.cloneNode(true);
          return L(t, i), c(i, "margin", "0", "important"), c(i, { boxSizing: "border-box", width: e.offsetWidth, height: e.offsetHeight, padding: c(e, "padding") }), Q(i.firstElementChild, Q(e.firstElementChild)), i;
        }
        function Bl(t, e) {
          return t[bt(t, (i) => We(e, i.getBoundingClientRect()))];
        }
        function Ml(t, e, i, s, n, r) {
          if (!O(t).length)
            return;
          const o = e.getBoundingClientRect();
          if (!r)
            return Dl(t, i) || n < o.top + o.height / 2 ? e : e.nextElementSibling;
          const a = i.getBoundingClientRect(), l = hr([o.top, o.bottom], [a.top, a.bottom]), h = l ? s : n, u = l ? "width" : "height", d = l ? "left" : "top", f = l ? "right" : "bottom", m = a[u] < o[u] ? o[u] - a[u] : 0;
          return a[d] < o[d] ? m && h < o[d] + m ? false : e.nextElementSibling : m && h > o[f] - m ? false : e;
        }
        function Dl(t, e) {
          const i = O(t).length === 1;
          i && L(t, e);
          const s = O(t), n = s.some((r, o) => {
            const a = r.getBoundingClientRect();
            return s.slice(o + 1).some((l) => {
              const h = l.getBoundingClientRect();
              return !hr([a.left, a.right], [h.left, h.right]);
            });
          });
          return i && rt(e), n;
        }
        function hr(t, e) {
          return t[1] > e[0] && e[1] > t[0];
        }
        var Nl = { mixins: [ce, _t, nn], args: "title", props: { delay: Number, title: String }, data: { pos: "top", title: "", delay: 0, animation: ["uk-animation-scale-up"], duration: 100, cls: "uk-active" }, beforeConnect() {
          this.id = "uk-tooltip-" + this._uid, this._hasTitle = It(this.$el, "title"), b(this.$el, { title: "", "aria-describedby": this.id }), zl(this.$el);
        }, disconnected() {
          this.hide(), b(this.$el, "title") || b(this.$el, "title", this._hasTitle ? this.title : null);
        }, methods: { show() {
          this.isToggled(this.tooltip || null) || !this.title || (this._unbind = N(document, "keydown " + mt, this.hide, false, (t) => t.type === mt && !A(t.target, this.$el) || t.type === "keydown" && t.keyCode === 27), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay));
        }, async hide() {
          z(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, false, false), rt(this.tooltip), this.tooltip = null, this._unbind()));
        }, _show() {
          this.tooltip = L(this.container, '<div id="' + this.id + '" class="uk-' + this.$options.name + '" role="tooltip"> <div class="uk-' + this.$options.name + '-inner">' + this.title + "</div> </div>"), k(this.tooltip, "toggled", (t, e) => {
            if (!e)
              return;
            this.positionAt(this.tooltip, this.$el);
            const [i, s] = Fl(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? Qe(i) + "-" + s : s + "-" + Qe(i);
          }), this.toggleElement(this.tooltip, true);
        } }, events: { focus: "show", blur: "hide", [jt + " " + ae](t) {
          kt(t) || this[t.type === jt ? "show" : "hide"]();
        }, [mt](t) {
          kt(t) && this.show();
        } } };
        function zl(t) {
          Ve(t) || b(t, "tabindex", "0");
        }
        function Fl(t, e, i) {
          let [s, n] = i;
          const r = P(t), o = P(e), a = [["left", "right"], ["top", "bottom"]];
          for (const h of a) {
            if (r[h[0]] >= o[h[1]]) {
              s = h[1];
              break;
            }
            if (r[h[1]] <= o[h[0]]) {
              s = h[0];
              break;
            }
          }
          const l = p(a[0], s) ? a[1] : a[0];
          return r[l[0]] === o[l[0]] ? n = l[0] : r[l[1]] === o[l[1]] ? n = l[1] : n = "center", [s, n];
        }
        var Hl = { props: { allow: String, clsDragover: String, concurrent: Number, maxSize: Number, method: String, mime: String, msgInvalidMime: String, msgInvalidName: String, msgInvalidSize: String, multiple: Boolean, name: String, params: Object, type: String, url: String }, data: { allow: false, clsDragover: "uk-dragover", concurrent: 1, maxSize: 0, method: "POST", mime: false, msgInvalidMime: "Invalid File Type: %s", msgInvalidName: "Invalid File Name: %s", msgInvalidSize: "Invalid File Size: %s Kilobytes Max", multiple: false, name: "files[]", params: {}, type: "", url: "", abort: I, beforeAll: I, beforeSend: I, complete: I, completeAll: I, error: I, fail: I, load: I, loadEnd: I, loadStart: I, progress: I }, events: { change(t) {
          !z(t.target, 'input[type="file"]') || (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        }, drop(t) {
          $i(t);
          const e = t.dataTransfer;
          !(e != null && e.files) || (B(this.$el, this.clsDragover), this.upload(e.files));
        }, dragenter(t) {
          $i(t);
        }, dragover(t) {
          $i(t), x(this.$el, this.clsDragover);
        }, dragleave(t) {
          $i(t), B(this.$el, this.clsDragover);
        } }, methods: { async upload(t) {
          if (t = Si(t), !t.length)
            return;
          g(this.$el, "upload", [t]);
          for (const s of t) {
            if (this.maxSize && this.maxSize * 1e3 < s.size) {
              this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
              return;
            }
            if (this.allow && !cr(this.allow, s.name)) {
              this.fail(this.msgInvalidName.replace("%s", this.allow));
              return;
            }
            if (this.mime && !cr(this.mime, s.type)) {
              this.fail(this.msgInvalidMime.replace("%s", this.mime));
              return;
            }
          }
          this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
          const e = Ll(t, this.concurrent), i = async (s) => {
            const n = new FormData();
            s.forEach((r) => n.append(this.name, r));
            for (const r in this.params)
              n.append(r, this.params[r]);
            try {
              const r = await $s(this.url, { data: n, method: this.method, responseType: this.type, beforeSend: (o) => {
                const { xhr: a } = o;
                a.upload && k(a.upload, "progress", this.progress);
                for (const l of ["loadStart", "load", "loadEnd", "abort"])
                  k(a, l.toLowerCase(), this[l]);
                return this.beforeSend(o);
              } });
              this.complete(r), e.length ? await i(e.shift()) : this.completeAll(r);
            } catch (r) {
              this.error(r);
            }
          };
          await i(e.shift());
        } } };
        function cr(t, e) {
          return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"));
        }
        function Ll(t, e) {
          const i = [];
          for (let s = 0; s < t.length; s += e)
            i.push(t.slice(s, s + e));
          return i;
        }
        function $i(t) {
          t.preventDefault(), t.stopPropagation();
        }
        var Wl = Object.freeze({ __proto__: null, Countdown: qa, Filter: Za, Lightbox: ul, LightboxPanel: Vn, Notification: fl, Parallax: yl, Slider: Tl, SliderParallax: rr, Slideshow: Pl, SlideshowParallax: rr, Sortable: Al, Tooltip: Nl, Upload: Hl });
        return $t(Wl, (t, e) => et.component(e, t)), et;
      });
    }
  });

  // library/js/plugins/fitvids/dist/fitvids.js
  var require_fitvids = __commonJS({
    "library/js/plugins/fitvids/dist/fitvids.js"(exports, module) {
      (function(f) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (typeof define === "function" && define.amd) {
          define([], f);
        } else {
          var g;
          if (typeof window !== "undefined") {
            g = window;
          } else if (typeof global !== "undefined") {
            g = global;
          } else if (typeof self !== "undefined") {
            g = self;
          } else {
            g = this;
          }
          g.fitvids = f();
        }
      })(function() {
        var define2, module2, exports2;
        return function e(t, n, r) {
          function s(o2, u) {
            if (!n[o2]) {
              if (!t[o2]) {
                var a = typeof __require == "function" && __require;
                if (!u && a)
                  return a(o2, true);
                if (i)
                  return i(o2, true);
                var f = new Error("Cannot find module '" + o2 + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
              }
              var l = n[o2] = { exports: {} };
              t[o2][0].call(l.exports, function(e2) {
                var n2 = t[o2][1][e2];
                return s(n2 ? n2 : e2);
              }, l, l.exports, e, t, n, r);
            }
            return n[o2].exports;
          }
          var i = typeof __require == "function" && __require;
          for (var o = 0; o < r.length; o++)
            s(r[o]);
          return s;
        }({ 1: [function(require2, module3, exports3) {
          var selectors = [
            'iframe[src*="player.vimeo.com"]',
            'iframe[src*="youtube.com"]',
            'iframe[src*="youtube-nocookie.com"]',
            'iframe[src*="kickstarter.com"][src*="video.html"]',
            "object"
          ];
          var css = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
          module3.exports = function(parentSelector, opts) {
            parentSelector = parentSelector || "body";
            opts = opts || {};
            if (isObject(parentSelector)) {
              opts = parentSelector;
              parentSelector = "body";
            }
            opts.ignore = opts.ignore || "";
            opts.players = opts.players || "";
            var containers = queryAll(parentSelector);
            if (!hasLength(containers))
              return;
            if (!document.getElementById("fit-vids-style")) {
              var head = document.head || document.getElementsByTagName("head")[0];
              head.appendChild(styles());
            }
            var custom = toSelectorArray(opts.players);
            var ignored = toSelectorArray(opts.ignore);
            var ignoredSelector = ignored.length > 0 ? ignored.join() : null;
            var selector = selectors.concat(custom).join();
            if (!hasLength(selector)) {
              return;
            }
            containers.forEach(function(container) {
              var videos = queryAll(container, selector);
              videos.forEach(function(video) {
                if (ignoredSelector && video.matches(ignoredSelector)) {
                  return;
                }
                wrap(video);
              });
            });
          };
          function queryAll(el, selector) {
            if (typeof el === "string") {
              selector = el;
              el = document;
            }
            return Array.prototype.slice.call(el.querySelectorAll(selector));
          }
          function toSelectorArray(input) {
            if (typeof input === "string") {
              return input.split(",").map(trim).filter(hasLength);
            } else if (isArray(input)) {
              return flatten(input.map(toSelectorArray).filter(hasLength));
            }
            return input || [];
          }
          function wrap(el) {
            if (/fluid-width-video-wrapper/.test(el.parentNode.className)) {
              return;
            }
            var widthAttr = parseInt(el.getAttribute("width"), 10);
            var heightAttr = parseInt(el.getAttribute("height"), 10);
            var width = !isNaN(widthAttr) ? widthAttr : el.clientWidth;
            var height = !isNaN(heightAttr) ? heightAttr : el.clientHeight;
            var aspect = height / width;
            el.removeAttribute("width");
            el.removeAttribute("height");
            var wrapper = document.createElement("div");
            el.parentNode.insertBefore(wrapper, el);
            wrapper.className = "fluid-width-video-wrapper";
            wrapper.style.paddingTop = aspect * 100 + "%";
            wrapper.appendChild(el);
          }
          function styles() {
            var div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + "</style>";
            return div.childNodes[1];
          }
          function hasLength(input) {
            return input.length > 0;
          }
          function trim(str) {
            return str.replace(/^\s+|\s+$/g, "");
          }
          function flatten(input) {
            return [].concat.apply([], input);
          }
          function isObject(input) {
            return Object.prototype.toString.call(input) === "[object Object]";
          }
          function isArray(input) {
            return Object.prototype.toString.call(input) === "[object Array]";
          }
        }, {}] }, {}, [1])(1);
      });
    }
  });

  // library/js/plugins/jsrender/jsrender.js
  var require_jsrender = __commonJS({
    "library/js/plugins/jsrender/jsrender.js"(exports, module) {
      (function(factory, global2) {
        var $9 = global2.jQuery;
        if (typeof exports === "object") {
          module.exports = $9 ? factory(global2, $9) : function($10) {
            if ($10 && !$10.fn) {
              throw "Provide jQuery or null";
            }
            return factory(global2, $10);
          };
        } else if (typeof define === "function" && define.amd) {
          define(function() {
            return factory(global2);
          });
        } else {
          factory(global2, false);
        }
      })(
        // factory (for jsrender.js)
        function(global2, $9) {
          "use strict";
          var setGlobals = $9 === false;
          $9 = $9 && $9.fn ? $9 : global2.jQuery;
          var versionNumber = "v1.0.11", jsvStoreName, rTag, rTmplString, topView, $views, $expando, _ocp = "_ocp", $isFunction, $isArray, $templates, $converters, $helpers, $tags, $sub, $subSettings, $subSettingsAdvanced, $viewsSettings, delimOpenChar0, delimOpenChar1, delimCloseChar0, delimCloseChar1, linkChar, setting, baseOnError, isRenderCall, rNewLine = /[ \t]*(\r\n|\n|\r)/g, rUnescapeQuotes = /\\(['"\\])/g, rEscapeQuotes = /['"\\]/g, rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi, rTestElseIf = /^if\s/, rFirstElem = /<(\w+)[>\s]/, rAttrEncode = /[\x00`><"'&=]/g, rIsHtml = /[\x00`><\"'&=]/, rHasHandlers = /^on[A-Z]|^convert(Back)?$/, rWrappedInViewMarker = /^\#\d+_`[\s\S]*\/\d+_`$/, rHtmlEncode = rAttrEncode, rDataEncode = /[&<>]/g, rDataUnencode = /&(amp|gt|lt);/g, rBracketQuote = /\[['"]?|['"]?\]/g, viewId = 0, charEntities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\0": "&#0;",
            "'": "&#39;",
            '"': "&#34;",
            "`": "&#96;",
            "=": "&#61;"
          }, charsFromEntities = {
            amp: "&",
            gt: ">",
            lt: "<"
          }, HTML = "html", OBJECT = "object", tmplAttr = "data-jsv-tmpl", jsvTmpl = "jsvTmpl", indexStr = "For #index in nested block use #getIndex().", cpFnStore = {}, $render = {}, jsr = global2.jsrender, jsrToJq = jsr && $9 && !$9.render, jsvStores = {
            template: {
              compile: compileTmpl
            },
            tag: {
              compile: compileTag
            },
            viewModel: {
              compile: compileViewModel
            },
            helper: {},
            converter: {}
          };
          $views = {
            jsviews: versionNumber,
            sub: {
              // subscription, e.g. JsViews integration
              rPath: /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
              //        not                               object     helper    view  viewProperty pathTokens      leafToken
              rPrm: /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(?:(\()\s*)?\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
              //   lftPrn0           lftPrn         bound     path               operator     err                                          eq      path2 late            prn      comma  lftPrn2          apos quot        rtPrn  rtPrnDot                  prn2     space
              View,
              Err: JsViewsError,
              tmplFn,
              parse: parseParams,
              extend: $extend,
              extendCtx,
              syntaxErr: syntaxError,
              onStore: {
                template: function(name, item) {
                  if (item === null) {
                    delete $render[name];
                  } else if (name) {
                    $render[name] = item;
                  }
                }
              },
              addSetting,
              settings: {
                allowCode: false
              },
              advSet: noop,
              // Update advanced settings
              _thp: tagHandlersFromProps,
              _gm: getMethod,
              _tg: function() {
              },
              // Constructor for tagDef
              _cnvt: convertVal,
              _tag: renderTag,
              _er: error,
              _err: onRenderError,
              _cp: retVal,
              // Get observable contextual parameters (or properties) ~foo=expr. In JsRender, simply returns val.
              _sq: function(token) {
                if (token === "constructor") {
                  syntaxError("");
                }
                return token;
              }
            },
            settings: {
              delimiters: $viewsDelimiters,
              advanced: function(value) {
                return value ? ($extend($subSettingsAdvanced, value), $sub.advSet(), $viewsSettings) : $subSettingsAdvanced;
              }
            },
            map: dataMap
            // If jsObservable loaded first, use that definition of dataMap
          };
          function getDerivedMethod(baseMethod, method) {
            return function() {
              var ret, tag = this, prevBase = tag.base;
              tag.base = baseMethod;
              ret = method.apply(tag, arguments);
              tag.base = prevBase;
              return ret;
            };
          }
          function getMethod(baseMethod, method) {
            if ($isFunction(method)) {
              method = getDerivedMethod(
                !baseMethod ? noop : baseMethod._d ? baseMethod : getDerivedMethod(noop, baseMethod),
                // baseMethod is not derived so make its base method be the noop method
                method
              );
              method._d = (baseMethod && baseMethod._d || 0) + 1;
            }
            return method;
          }
          function tagHandlersFromProps(tag, tagCtx) {
            var prop, props = tagCtx.props;
            for (prop in props) {
              if (rHasHandlers.test(prop) && !(tag[prop] && tag[prop].fix)) {
                tag[prop] = prop !== "convert" ? getMethod(tag.constructor.prototype[prop], props[prop]) : props[prop];
              }
            }
          }
          function retVal(val) {
            return val;
          }
          function noop() {
            return "";
          }
          function dbgBreak(val) {
            try {
              console.log("JsRender dbg breakpoint: " + val);
              throw "dbg breakpoint";
            } catch (e) {
            }
            return this.base ? this.baseApply(arguments) : val;
          }
          function JsViewsError(message) {
            this.name = ($9.link ? "JsViews" : "JsRender") + " Error";
            this.message = message || this.name;
          }
          function $extend(target, source) {
            if (target) {
              for (var name in source) {
                target[name] = source[name];
              }
              return target;
            }
          }
          (JsViewsError.prototype = new Error()).constructor = JsViewsError;
          function $viewsDelimiters(openChars, closeChars, link) {
            if (!openChars) {
              return $subSettings.delimiters;
            }
            if ($isArray(openChars)) {
              return $viewsDelimiters.apply($views, openChars);
            }
            linkChar = link ? link[0] : linkChar;
            if (!/^(\W|_){5}$/.test(openChars + closeChars + linkChar)) {
              error("Invalid delimiters");
            }
            delimOpenChar0 = openChars[0];
            delimOpenChar1 = openChars[1];
            delimCloseChar0 = closeChars[0];
            delimCloseChar1 = closeChars[1];
            $subSettings.delimiters = [delimOpenChar0 + delimOpenChar1, delimCloseChar0 + delimCloseChar1, linkChar];
            openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1;
            closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1;
            rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)";
            $sub.rTag = "(?:" + rTag + ")";
            rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g");
            $sub.rTmpl = new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars);
            return $viewsSettings;
          }
          function getView(inner, type) {
            if (!type && inner !== true) {
              type = inner;
              inner = void 0;
            }
            var views, i, l, found, view = this, root = type === "root";
            if (inner) {
              found = type && view.type === type && view;
              if (!found) {
                views = view.views;
                if (view._.useKey) {
                  for (i in views) {
                    if (found = type ? views[i].get(inner, type) : views[i]) {
                      break;
                    }
                  }
                } else {
                  for (i = 0, l = views.length; !found && i < l; i++) {
                    found = type ? views[i].get(inner, type) : views[i];
                  }
                }
              }
            } else if (root) {
              found = view.root;
            } else if (type) {
              while (view && !found) {
                found = view.type === type ? view : void 0;
                view = view.parent;
              }
            } else {
              found = view.parent;
            }
            return found || void 0;
          }
          function getNestedIndex() {
            var view = this.get("item");
            return view ? view.index : void 0;
          }
          getNestedIndex.depends = function() {
            return [this.get("item"), "index"];
          };
          function getIndex() {
            return this.index;
          }
          getIndex.depends = "index";
          function getPathObject(ob, path, ltOb, fn) {
            var prevOb, tokens, l, i = 0;
            if (ltOb === 1) {
              fn = 1;
              ltOb = void 0;
            }
            if (path) {
              tokens = path.split(".");
              l = tokens.length;
              for (; ob && i < l; i++) {
                prevOb = ob;
                ob = tokens[i] ? ob[tokens[i]] : ob;
              }
            }
            if (ltOb) {
              ltOb.lt = ltOb.lt || i < l;
            }
            return ob === void 0 ? fn ? noop : "" : fn ? function() {
              return ob.apply(prevOb, arguments);
            } : ob;
          }
          function contextParameter(key, value, get) {
            var wrapped, deps, res, obsCtxPrm, tagElse, callView, newRes, storeView = this, isUpdate = !isRenderCall && arguments.length > 1, store = storeView.ctx;
            if (key) {
              if (!storeView._) {
                tagElse = storeView.index;
                storeView = storeView.tag;
              }
              callView = storeView;
              if (store && store.hasOwnProperty(key) || (store = $helpers).hasOwnProperty(key)) {
                res = store[key];
                if (key === "tag" || key === "tagCtx" || key === "root" || key === "parentTags") {
                  return res;
                }
              } else {
                store = void 0;
              }
              if (!isRenderCall && storeView.tagCtx || storeView.linked) {
                if (!res || !res._cxp) {
                  storeView = storeView.tagCtx || $isFunction(res) ? storeView : (storeView = storeView.scope || storeView, !storeView.isTop && storeView.ctx.tag || storeView);
                  if (res !== void 0 && storeView.tagCtx) {
                    storeView = storeView.tagCtx.view.scope;
                  }
                  store = storeView._ocps;
                  res = store && store.hasOwnProperty(key) && store[key] || res;
                  if (!(res && res._cxp) && (get || isUpdate)) {
                    (store || (storeView._ocps = storeView._ocps || {}))[key] = res = [{
                      _ocp: res,
                      // The observable contextual parameter value
                      _vw: callView,
                      _key: key
                    }];
                    res._cxp = {
                      path: _ocp,
                      ind: 0,
                      updateValue: function(val, path) {
                        $9.observable(res[0]).setProperty(_ocp, val);
                        return this;
                      }
                    };
                  }
                }
                if (obsCtxPrm = res && res._cxp) {
                  if (arguments.length > 2) {
                    deps = res[1] ? $sub._ceo(res[1].deps) : [_ocp];
                    deps.unshift(res[0]);
                    deps._cxp = obsCtxPrm;
                    return deps;
                  }
                  tagElse = obsCtxPrm.tagElse;
                  newRes = res[1] ? obsCtxPrm.tag && obsCtxPrm.tag.cvtArgs ? obsCtxPrm.tag.cvtArgs(tagElse, 1)[obsCtxPrm.ind] : res[1](res[0].data, res[0], $sub) : res[0]._ocp;
                  if (isUpdate) {
                    $sub._ucp(key, value, storeView, obsCtxPrm);
                    return storeView;
                  }
                  res = newRes;
                }
              }
              if (res && $isFunction(res)) {
                wrapped = function() {
                  return res.apply(!this || this === global2 ? callView : this, arguments);
                };
                $extend(wrapped, res);
              }
              return wrapped || res;
            }
          }
          function getTemplate(tmpl) {
            return tmpl && (tmpl.fn ? tmpl : this.getRsc("templates", tmpl) || $templates(tmpl));
          }
          function convertVal(converter, view, tagCtx, onError) {
            var tag, linkCtx, value, argsLen, bindTo, boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx - 1];
            if (onError === void 0 && boundTag && boundTag._lr) {
              onError = "";
            }
            if (onError !== void 0) {
              tagCtx = onError = { props: {}, args: [onError] };
            } else if (boundTag) {
              tagCtx = boundTag(view.data, view, $sub);
            }
            boundTag = boundTag._bd && boundTag;
            if (converter || boundTag) {
              linkCtx = view._lc;
              tag = linkCtx && linkCtx.tag;
              tagCtx.view = view;
              if (!tag) {
                tag = $extend(new $sub._tg(), {
                  _: {
                    bnd: boundTag,
                    unlinked: true,
                    lt: tagCtx.lt
                    // If a late path @some.path has not returned @some object, mark tag as late
                  },
                  inline: !linkCtx,
                  tagName: ":",
                  convert: converter,
                  onArrayChange: true,
                  flow: true,
                  tagCtx,
                  tagCtxs: [tagCtx],
                  _is: "tag"
                });
                argsLen = tagCtx.args.length;
                if (argsLen > 1) {
                  bindTo = tag.bindTo = [];
                  while (argsLen--) {
                    bindTo.unshift(argsLen);
                  }
                }
                if (linkCtx) {
                  linkCtx.tag = tag;
                  tag.linkCtx = linkCtx;
                }
                tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
                tagHandlersFromProps(tag, tagCtx);
              }
              tag._er = onError && value;
              tag.ctx = tagCtx.ctx || tag.ctx || {};
              tagCtx.ctx = void 0;
              value = tag.cvtArgs()[0];
              tag._er = onError && value;
            } else {
              value = tagCtx.args[0];
            }
            value = boundTag && view._.onRender ? view._.onRender(value, view, tag) : value;
            return value != void 0 ? value : "";
          }
          function convertArgs(tagElse, bound) {
            var l, key, boundArgs, args, bindFrom, tag, converter, tagCtx = this;
            if (tagCtx.tagName) {
              tag = tagCtx;
              tagCtx = (tag.tagCtxs || [tagCtx])[tagElse || 0];
              if (!tagCtx) {
                return;
              }
            } else {
              tag = tagCtx.tag;
            }
            bindFrom = tag.bindFrom;
            args = tagCtx.args;
            if ((converter = tag.convert) && "" + converter === converter) {
              converter = converter === "true" ? void 0 : tagCtx.view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'");
            }
            if (converter && !bound) {
              args = args.slice();
            }
            if (bindFrom) {
              boundArgs = [];
              l = bindFrom.length;
              while (l--) {
                key = bindFrom[l];
                boundArgs.unshift(argOrProp(tagCtx, key));
              }
              if (bound) {
                args = boundArgs;
              }
            }
            if (converter) {
              converter = converter.apply(tag, boundArgs || args);
              if (converter === void 0) {
                return args;
              }
              bindFrom = bindFrom || [0];
              l = bindFrom.length;
              if (!$isArray(converter) || converter.arg0 !== false && (l === 1 || converter.length !== l || converter.arg0)) {
                converter = [converter];
                bindFrom = [0];
                l = 1;
              }
              if (bound) {
                args = converter;
              } else {
                while (l--) {
                  key = bindFrom[l];
                  if (+key === key) {
                    args[key] = converter[l];
                  }
                }
              }
            }
            return args;
          }
          function argOrProp(context, key) {
            context = context[+key === key ? "args" : "props"];
            return context && context[key];
          }
          function convertBoundArgs(tagElse) {
            return this.cvtArgs(tagElse, 1);
          }
          function getResource(resourceType, itemName) {
            var res, store, view = this;
            if ("" + itemName === itemName) {
              while (res === void 0 && view) {
                store = view.tmpl && view.tmpl[resourceType];
                res = store && store[itemName];
                view = view.parent;
              }
              return res || $views[resourceType][itemName];
            }
          }
          function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
            function bindToOrBindFrom(type) {
              var bindArray = tag[type];
              if (bindArray !== void 0) {
                bindArray = $isArray(bindArray) ? bindArray : [bindArray];
                m = bindArray.length;
                while (m--) {
                  key = bindArray[m];
                  if (!isNaN(parseInt(key))) {
                    bindArray[m] = parseInt(key);
                  }
                }
              }
              return bindArray || [0];
            }
            parentView = parentView || topView;
            var tag, tagDef, template, tags, attr, parentTag, l, m, n, itemRet, tagCtx, tagCtxCtx, ctxPrm, bindTo, bindFrom, initVal, content, callInit, mapDef, thisMap, args, bdArgs, props, tagDataMap, contentCtx, key, bindFromLength, bindToLength, linkedElement, defaultCtx, i = 0, ret = "", linkCtx = parentView._lc || false, ctx = parentView.ctx, parentTmpl = tmpl || parentView.tmpl, boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs - 1];
            if (tagName._is === "tag") {
              tag = tagName;
              tagName = tag.tagName;
              tagCtxs = tag.tagCtxs;
              template = tag.template;
            } else {
              tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
              template = tagDef.template;
            }
            if (onError === void 0 && boundTag && (boundTag._lr = tagDef.lateRender && boundTag._lr !== false || boundTag._lr)) {
              onError = "";
            }
            if (onError !== void 0) {
              ret += onError;
              tagCtxs = onError = [{ props: {}, args: [], params: { props: {} } }];
            } else if (boundTag) {
              tagCtxs = boundTag(parentView.data, parentView, $sub);
            }
            l = tagCtxs.length;
            for (; i < l; i++) {
              tagCtx = tagCtxs[i];
              content = tagCtx.tmpl;
              if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag.inline || tag._er || content && +content === content) {
                if (content && parentTmpl.tmpls) {
                  tagCtx.tmpl = tagCtx.content = parentTmpl.tmpls[content - 1];
                }
                tagCtx.index = i;
                tagCtx.ctxPrm = contextParameter;
                tagCtx.render = renderContent;
                tagCtx.cvtArgs = convertArgs;
                tagCtx.bndArgs = convertBoundArgs;
                tagCtx.view = parentView;
                tagCtx.ctx = extendCtx(extendCtx(tagCtx.ctx, tagDef && tagDef.ctx), ctx);
              }
              if (tmpl = tagCtx.props.tmpl) {
                tagCtx.tmpl = parentView._getTmpl(tmpl);
                tagCtx.content = tagCtx.content || tagCtx.tmpl;
              }
              if (!tag) {
                tag = new tagDef._ctr();
                callInit = !!tag.init;
                tag.parent = parentTag = ctx && ctx.tag;
                tag.tagCtxs = tagCtxs;
                if (linkCtx) {
                  tag.inline = false;
                  linkCtx.tag = tag;
                }
                tag.linkCtx = linkCtx;
                if (tag._.bnd = boundTag || linkCtx.fn) {
                  tag._.ths = tagCtx.params.props["this"];
                  tag._.lt = tagCtxs.lt;
                  tag._.arrVws = {};
                } else if (tag.dataBoundOnly) {
                  error(tagName + " must be data-bound:\n{^{" + tagName + "}}");
                }
              } else if (linkCtx && linkCtx.fn._lr) {
                callInit = !!tag.init;
              }
              tagDataMap = tag.dataMap;
              tagCtx.tag = tag;
              if (tagDataMap && tagCtxs) {
                tagCtx.map = tagCtxs[i].map;
              }
              if (!tag.flow) {
                tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {};
                tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};
                if (parentTag) {
                  tags[parentTag.tagName] = parentTag;
                }
                tags[tag.tagName] = tagCtxCtx.tag = tag;
                tagCtxCtx.tagCtx = tagCtx;
              }
            }
            if (!(tag._er = onError)) {
              tagHandlersFromProps(tag, tagCtxs[0]);
              tag.rendering = { rndr: tag.rendering };
              for (i = 0; i < l; i++) {
                tagCtx = tag.tagCtx = tagCtxs[i];
                props = tagCtx.props;
                tag.ctx = tagCtx.ctx;
                if (!i) {
                  if (callInit) {
                    tag.init(tagCtx, linkCtx, tag.ctx);
                    callInit = void 0;
                  }
                  if (!tagCtx.args.length && tagCtx.argDefault !== false && tag.argDefault !== false) {
                    tagCtx.args = args = [tagCtx.view.data];
                    tagCtx.params.args = ["#data"];
                  }
                  bindTo = bindToOrBindFrom("bindTo");
                  if (tag.bindTo !== void 0) {
                    tag.bindTo = bindTo;
                  }
                  if (tag.bindFrom !== void 0) {
                    tag.bindFrom = bindToOrBindFrom("bindFrom");
                  } else if (tag.bindTo) {
                    tag.bindFrom = tag.bindTo = bindTo;
                  }
                  bindFrom = tag.bindFrom || bindTo;
                  bindToLength = bindTo.length;
                  bindFromLength = bindFrom.length;
                  if (tag._.bnd && (linkedElement = tag.linkedElement)) {
                    tag.linkedElement = linkedElement = $isArray(linkedElement) ? linkedElement : [linkedElement];
                    if (bindToLength !== linkedElement.length) {
                      error("linkedElement not same length as bindTo");
                    }
                  }
                  if (linkedElement = tag.linkedCtxParam) {
                    tag.linkedCtxParam = linkedElement = $isArray(linkedElement) ? linkedElement : [linkedElement];
                    if (bindFromLength !== linkedElement.length) {
                      error("linkedCtxParam not same length as bindFrom/bindTo");
                    }
                  }
                  if (bindFrom) {
                    tag._.fromIndex = {};
                    tag._.toIndex = {};
                    n = bindFromLength;
                    while (n--) {
                      key = bindFrom[n];
                      m = bindToLength;
                      while (m--) {
                        if (key === bindTo[m]) {
                          tag._.fromIndex[m] = n;
                          tag._.toIndex[n] = m;
                        }
                      }
                    }
                  }
                  if (linkCtx) {
                    linkCtx.attr = tag.attr = linkCtx.attr || tag.attr || linkCtx._dfAt;
                  }
                  attr = tag.attr;
                  tag._.noVws = attr && attr !== HTML;
                }
                args = tag.cvtArgs(i);
                if (tag.linkedCtxParam) {
                  bdArgs = tag.cvtArgs(i, 1);
                  m = bindFromLength;
                  defaultCtx = tag.constructor.prototype.ctx;
                  while (m--) {
                    if (ctxPrm = tag.linkedCtxParam[m]) {
                      key = bindFrom[m];
                      initVal = bdArgs[m];
                      tagCtx.ctx[ctxPrm] = $sub._cp(
                        defaultCtx && initVal === void 0 ? defaultCtx[ctxPrm] : initVal,
                        initVal !== void 0 && argOrProp(tagCtx.params, key),
                        tagCtx.view,
                        tag._.bnd && { tag, cvt: tag.convert, ind: m, tagElse: i }
                      );
                    }
                  }
                }
                if ((mapDef = props.dataMap || tagDataMap) && (args.length || props.dataMap)) {
                  thisMap = tagCtx.map;
                  if (!thisMap || thisMap.src !== args[0] || isUpdate) {
                    if (thisMap && thisMap.src) {
                      thisMap.unmap();
                    }
                    mapDef.map(args[0], tagCtx, thisMap, !tag._.bnd);
                    thisMap = tagCtx.map;
                  }
                  args = [thisMap.tgt];
                }
                itemRet = void 0;
                if (tag.render) {
                  itemRet = tag.render.apply(tag, args);
                  if (parentView.linked && itemRet && !rWrappedInViewMarker.test(itemRet)) {
                    tmpl = {
                      // 'Dumbed-down' template which always renders 'static' itemRet string
                      links: []
                    };
                    tmpl.render = tmpl.fn = function() {
                      return itemRet;
                    };
                    itemRet = renderWithViews(tmpl, parentView.data, void 0, true, parentView, void 0, void 0, tag);
                  }
                }
                if (!args.length) {
                  args = [parentView];
                }
                if (itemRet === void 0) {
                  contentCtx = args[0];
                  if (tag.contentCtx) {
                    contentCtx = tag.contentCtx === true ? parentView : tag.contentCtx(contentCtx);
                  }
                  itemRet = tagCtx.render(contentCtx, true) || (isUpdate ? void 0 : "");
                }
                ret = ret ? ret + (itemRet || "") : itemRet !== void 0 ? "" + itemRet : void 0;
              }
              tag.rendering = tag.rendering.rndr;
            }
            tag.tagCtx = tagCtxs[0];
            tag.ctx = tag.tagCtx.ctx;
            if (tag._.noVws && tag.inline) {
              ret = attr === "text" ? $converters.html(ret) : "";
            }
            return boundTag && parentView._.onRender ? parentView._.onRender(ret, parentView, tag) : ret;
          }
          function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
            var views, parentView_, tag, self_, self2 = this, isArray = type === "array";
            self2.content = contentTmpl;
            self2.views = isArray ? [] : {};
            self2.data = data;
            self2.tmpl = template;
            self_ = self2._ = {
              key: 0,
              // ._.useKey is non zero if is not an 'array view' (owning a data array). Use this as next key for adding to child views hash
              useKey: isArray ? 0 : 1,
              id: "" + viewId++,
              onRender,
              bnds: {}
            };
            self2.linked = !!onRender;
            self2.type = type || "top";
            if (type) {
              self2.cache = { _ct: $subSettings._cchCt };
            }
            if (!parentView || parentView.type === "top") {
              (self2.ctx = context || {}).root = self2.data;
            }
            if (self2.parent = parentView) {
              self2.root = parentView.root || self2;
              views = parentView.views;
              parentView_ = parentView._;
              self2.isTop = parentView_.scp;
              self2.scope = (!context.tag || context.tag === parentView.ctx.tag) && !self2.isTop && parentView.scope || self2;
              if (parentView_.useKey) {
                views[self_.key = "_" + parentView_.useKey++] = self2;
                self2.index = indexStr;
                self2.getIndex = getNestedIndex;
              } else if (views.length === (self_.key = self2.index = key)) {
                views.push(self2);
              } else {
                views.splice(key, 0, self2);
              }
              self2.ctx = context || parentView.ctx;
            } else if (type) {
              self2.root = self2;
            }
          }
          View.prototype = {
            get: getView,
            getIndex,
            ctxPrm: contextParameter,
            getRsc: getResource,
            _getTmpl: getTemplate,
            _getOb: getPathObject,
            getCache: function(key) {
              if ($subSettings._cchCt > this.cache._ct) {
                this.cache = { _ct: $subSettings._cchCt };
              }
              return this.cache[key] !== void 0 ? this.cache[key] : this.cache[key] = cpFnStore[key](this.data, this, $sub);
            },
            _is: "view"
          };
          function compileChildResources(parentTmpl) {
            var storeName, storeNames, resources;
            for (storeName in jsvStores) {
              storeNames = storeName + "s";
              if (parentTmpl[storeNames]) {
                resources = parentTmpl[storeNames];
                parentTmpl[storeNames] = {};
                $views[storeNames](resources, parentTmpl);
              }
            }
          }
          function compileTag(name, tagDef, parentTmpl) {
            var tmpl, baseTag, prop, compiledDef = new $sub._tg();
            function Tag() {
              var tag = this;
              tag._ = {
                unlinked: true
              };
              tag.inline = true;
              tag.tagName = name;
            }
            if ($isFunction(tagDef)) {
              tagDef = {
                depends: tagDef.depends,
                render: tagDef
              };
            } else if ("" + tagDef === tagDef) {
              tagDef = { template: tagDef };
            }
            if (baseTag = tagDef.baseTag) {
              tagDef.flow = !!tagDef.flow;
              baseTag = "" + baseTag === baseTag ? parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag] : baseTag;
              if (!baseTag) {
                error('baseTag: "' + tagDef.baseTag + '" not found');
              }
              compiledDef = $extend(compiledDef, baseTag);
              for (prop in tagDef) {
                compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
              }
            } else {
              compiledDef = $extend(compiledDef, tagDef);
            }
            if ((tmpl = compiledDef.template) !== void 0) {
              compiledDef.template = "" + tmpl === tmpl ? $templates[tmpl] || $templates(tmpl) : tmpl;
            }
            (Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;
            if (parentTmpl) {
              compiledDef._parentTmpl = parentTmpl;
            }
            return compiledDef;
          }
          function baseApply(args) {
            return this.base.apply(this, args);
          }
          function compileTmpl(name, tmpl, parentTmpl, options) {
            function lookupTemplate(value) {
              var currentName, tmpl2;
              if ("" + value === value || value.nodeType > 0 && (elem = value)) {
                if (!elem) {
                  if (/^\.?\/[^\\:*?"<>]*$/.test(value)) {
                    if (tmpl2 = $templates[name = name || value]) {
                      value = tmpl2;
                    } else {
                      elem = document.getElementById(value);
                    }
                  } else if (value.charAt(0) === "#") {
                    elem = document.getElementById(value.slice(1));
                  } else if ($9.fn && !$sub.rTmpl.test(value)) {
                    try {
                      elem = $9(value, document)[0];
                    } catch (e) {
                    }
                  }
                }
                if (elem) {
                  if (elem.tagName !== "SCRIPT") {
                    error(value + ": Use script block, not " + elem.tagName);
                  }
                  if (options) {
                    value = elem.innerHTML;
                  } else {
                    currentName = elem.getAttribute(tmplAttr);
                    if (currentName) {
                      if (currentName !== jsvTmpl) {
                        value = $templates[currentName];
                        delete $templates[currentName];
                      } else if ($9.fn) {
                        value = $9.data(elem)[jsvTmpl];
                      }
                    }
                    if (!currentName || !value) {
                      name = name || ($9.fn ? jsvTmpl : value);
                      value = compileTmpl(name, elem.innerHTML, parentTmpl, options);
                    }
                    value.tmplName = name = name || currentName;
                    if (name !== jsvTmpl) {
                      $templates[name] = value;
                    }
                    elem.setAttribute(tmplAttr, name);
                    if ($9.fn) {
                      $9.data(elem, jsvTmpl, value);
                    }
                  }
                }
                elem = void 0;
              } else if (!value.fn) {
                value = void 0;
              }
              return value;
            }
            var elem, compiledTmpl, tmplOrMarkup = tmpl = tmpl || "";
            $sub._html = $converters.html;
            if (options === 0) {
              options = void 0;
              tmplOrMarkup = lookupTemplate(tmplOrMarkup);
            }
            options = options || (tmpl.markup ? tmpl.bnds ? $extend({}, tmpl) : tmpl : {});
            options.tmplName = options.tmplName || name || "unnamed";
            if (parentTmpl) {
              options._parentTmpl = parentTmpl;
            }
            if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup)) && tmplOrMarkup.fn) {
              tmplOrMarkup = tmplOrMarkup.markup;
            }
            if (tmplOrMarkup !== void 0) {
              if (tmplOrMarkup.render || tmpl.render) {
                if (tmplOrMarkup.tmpls) {
                  compiledTmpl = tmplOrMarkup;
                }
              } else {
                tmpl = tmplObject(tmplOrMarkup, options);
                tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
              }
              if (!compiledTmpl) {
                compiledTmpl = $extend(function() {
                  return compiledTmpl.render.apply(compiledTmpl, arguments);
                }, tmpl);
                compileChildResources(compiledTmpl);
              }
              return compiledTmpl;
            }
          }
          function getDefaultVal(defaultVal, data) {
            return $isFunction(defaultVal) ? defaultVal.call(data) : defaultVal;
          }
          function addParentRef(ob, ref, parent) {
            Object.defineProperty(ob, ref, {
              value: parent,
              configurable: true
            });
          }
          function compileViewModel(name, type) {
            var i, constructor, parent, viewModels = this, getters = type.getters, extend = type.extend, id = type.id, proto = $9.extend({
              _is: name || "unnamed",
              unmap,
              merge
            }, extend), args = "", cnstr = "", getterCount = getters ? getters.length : 0, $observable2 = $9.observable, getterNames = {};
            function JsvVm(args2) {
              constructor.apply(this, args2);
            }
            function vm() {
              return new JsvVm(arguments);
            }
            function iterate(data, action) {
              var getterType, defaultVal, prop, ob, parentRef, j = 0;
              for (; j < getterCount; j++) {
                prop = getters[j];
                getterType = void 0;
                if (prop + "" !== prop) {
                  getterType = prop;
                  prop = getterType.getter;
                  parentRef = getterType.parentRef;
                }
                if ((ob = data[prop]) === void 0 && getterType && (defaultVal = getterType.defaultVal) !== void 0) {
                  ob = getDefaultVal(defaultVal, data);
                }
                action(ob, getterType && viewModels[getterType.type], prop, parentRef);
              }
            }
            function map(data) {
              data = data + "" === data ? JSON.parse(data) : data;
              var l, prop, childOb, parentRef, j = 0, ob = data, arr = [];
              if ($isArray(data)) {
                data = data || [];
                l = data.length;
                for (; j < l; j++) {
                  arr.push(this.map(data[j]));
                }
                arr._is = name;
                arr.unmap = unmap;
                arr.merge = merge;
                return arr;
              }
              if (data) {
                iterate(data, function(ob2, viewModel) {
                  if (viewModel) {
                    ob2 = viewModel.map(ob2);
                  }
                  arr.push(ob2);
                });
                ob = this.apply(this, arr);
                j = getterCount;
                while (j--) {
                  childOb = arr[j];
                  parentRef = getters[j].parentRef;
                  if (parentRef && childOb && childOb.unmap) {
                    if ($isArray(childOb)) {
                      l = childOb.length;
                      while (l--) {
                        addParentRef(childOb[l], parentRef, ob);
                      }
                    } else {
                      addParentRef(childOb, parentRef, ob);
                    }
                  }
                }
                for (prop in data) {
                  if (prop !== $expando && !getterNames[prop]) {
                    ob[prop] = data[prop];
                  }
                }
              }
              return ob;
            }
            function merge(data, parent2, parentRef) {
              data = data + "" === data ? JSON.parse(data) : data;
              var j, l, m, prop, mod, found, assigned, ob, newModArr, childOb, k = 0, model = this;
              if ($isArray(model)) {
                assigned = {};
                newModArr = [];
                l = data.length;
                m = model.length;
                for (; k < l; k++) {
                  ob = data[k];
                  found = false;
                  for (j = 0; j < m && !found; j++) {
                    if (assigned[j]) {
                      continue;
                    }
                    mod = model[j];
                    if (id) {
                      assigned[j] = found = id + "" === id ? ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id] : id(mod, ob);
                    }
                  }
                  if (found) {
                    mod.merge(ob);
                    newModArr.push(mod);
                  } else {
                    newModArr.push(childOb = vm.map(ob));
                    if (parentRef) {
                      addParentRef(childOb, parentRef, parent2);
                    }
                  }
                }
                if ($observable2) {
                  $observable2(model).refresh(newModArr, true);
                } else {
                  model.splice.apply(model, [0, model.length].concat(newModArr));
                }
                return;
              }
              iterate(data, function(ob2, viewModel, getter, parentRef2) {
                if (viewModel) {
                  model[getter]().merge(ob2, model, parentRef2);
                } else if (model[getter]() !== ob2) {
                  model[getter](ob2);
                }
              });
              for (prop in data) {
                if (prop !== $expando && !getterNames[prop]) {
                  model[prop] = data[prop];
                }
              }
            }
            function unmap() {
              var ob, prop, getterType, arr, value, k = 0, model = this;
              function unmapArray(modelArr) {
                var arr2 = [], i2 = 0, l = modelArr.length;
                for (; i2 < l; i2++) {
                  arr2.push(modelArr[i2].unmap());
                }
                return arr2;
              }
              if ($isArray(model)) {
                return unmapArray(model);
              }
              ob = {};
              for (; k < getterCount; k++) {
                prop = getters[k];
                getterType = void 0;
                if (prop + "" !== prop) {
                  getterType = prop;
                  prop = getterType.getter;
                }
                value = model[prop]();
                ob[prop] = getterType && value && viewModels[getterType.type] ? $isArray(value) ? unmapArray(value) : value.unmap() : value;
              }
              for (prop in model) {
                if (model.hasOwnProperty(prop) && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && prop !== $expando && !$isFunction(model[prop])) {
                  ob[prop] = model[prop];
                }
              }
              return ob;
            }
            JsvVm.prototype = proto;
            for (i = 0; i < getterCount; i++) {
              (function(getter) {
                getter = getter.getter || getter;
                getterNames[getter] = i + 1;
                var privField = "_" + getter;
                args += (args ? "," : "") + getter;
                cnstr += "this." + privField + " = " + getter + ";\n";
                proto[getter] = proto[getter] || function(val) {
                  if (!arguments.length) {
                    return this[privField];
                  }
                  if ($observable2) {
                    $observable2(this).setProperty(getter, val);
                  } else {
                    this[privField] = val;
                  }
                };
                if ($observable2) {
                  proto[getter].set = proto[getter].set || function(val) {
                    this[privField] = val;
                  };
                }
              })(getters[i]);
            }
            cnstr = new Function(args, cnstr);
            constructor = function() {
              cnstr.apply(this, arguments);
              if (parent = arguments[getterCount + 1]) {
                addParentRef(this, arguments[getterCount], parent);
              }
            };
            constructor.prototype = proto;
            proto.constructor = constructor;
            vm.map = map;
            vm.getters = getters;
            vm.extend = extend;
            vm.id = id;
            return vm;
          }
          function tmplObject(markup, options) {
            var htmlTag, wrapMap = $subSettingsAdvanced._wm || {}, tmpl = {
              tmpls: [],
              links: {},
              // Compiled functions for link expressions
              bnds: [],
              _is: "template",
              render: renderContent
            };
            if (options) {
              tmpl = $extend(tmpl, options);
            }
            tmpl.markup = markup;
            if (!tmpl.htmlTag) {
              htmlTag = rFirstElem.exec(markup);
              tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
            }
            htmlTag = wrapMap[tmpl.htmlTag];
            if (htmlTag && htmlTag !== wrapMap.div) {
              tmpl.markup = $9.trim(tmpl.markup);
            }
            return tmpl;
          }
          function registerStore(storeName, storeSettings) {
            function theStore(name, item, parentTmpl) {
              var compile, itemName, thisStore, cnt, onStore = $sub.onStore[storeName];
              if (name && typeof name === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
                for (itemName in name) {
                  theStore(itemName, name[itemName], item);
                }
                return item || $views;
              }
              if (name && "" + name !== name) {
                parentTmpl = item;
                item = name;
                name = void 0;
              }
              thisStore = parentTmpl ? storeName === "viewModel" ? parentTmpl : parentTmpl[storeNames] = parentTmpl[storeNames] || {} : theStore;
              compile = storeSettings.compile;
              if (item === void 0) {
                item = compile ? name : thisStore[name];
                name = void 0;
              }
              if (item === null) {
                if (name) {
                  delete thisStore[name];
                }
              } else {
                if (compile) {
                  item = compile.call(thisStore, name, item, parentTmpl, 0) || {};
                  item._is = storeName;
                }
                if (name) {
                  thisStore[name] = item;
                }
              }
              if (onStore) {
                onStore(name, item, parentTmpl, compile);
              }
              return item;
            }
            var storeNames = storeName + "s";
            $views[storeNames] = theStore;
          }
          function addSetting(st) {
            $viewsSettings[st] = $viewsSettings[st] || function(value) {
              return arguments.length ? ($subSettings[st] = value, $viewsSettings) : $subSettings[st];
            };
          }
          function dataMap(mapDef) {
            function Map2(source, options) {
              this.tgt = mapDef.getTgt(source, options);
              options.map = this;
            }
            if ($isFunction(mapDef)) {
              mapDef = {
                getTgt: mapDef
              };
            }
            if (mapDef.baseMap) {
              mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
            }
            mapDef.map = function(source, options) {
              return new Map2(source, options);
            };
            return mapDef;
          }
          function renderContent(data, context, noIteration, parentView, key, onRender) {
            var i, l, tag, tmpl, tagCtx, isTopRenderCall, prevData, prevIndex, view = parentView, result = "";
            if (context === true) {
              noIteration = context;
              context = void 0;
            } else if (typeof context !== OBJECT) {
              context = void 0;
            }
            if (tag = this.tag) {
              tagCtx = this;
              view = view || tagCtx.view;
              tmpl = view._getTmpl(tag.template || tagCtx.tmpl);
              if (!arguments.length) {
                data = tag.contentCtx && $isFunction(tag.contentCtx) ? data = tag.contentCtx(data) : view;
              }
            } else {
              tmpl = this;
            }
            if (tmpl) {
              if (!parentView && data && data._is === "view") {
                view = data;
              }
              if (view && data === view) {
                data = view.data;
              }
              isTopRenderCall = !view;
              isRenderCall = isRenderCall || isTopRenderCall;
              if (isTopRenderCall) {
                (context = context || {}).root = data;
              }
              if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
                result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
              } else {
                if (view) {
                  prevData = view.data;
                  prevIndex = view.index;
                  view.index = indexStr;
                } else {
                  view = topView;
                  prevData = view.data;
                  view.data = data;
                  view.ctx = context;
                }
                if ($isArray(data) && !noIteration) {
                  for (i = 0, l = data.length; i < l; i++) {
                    view.index = i;
                    view.data = data[i];
                    result += tmpl.fn(data[i], view, $sub);
                  }
                } else {
                  view.data = data;
                  result += tmpl.fn(data, view, $sub);
                }
                view.data = prevData;
                view.index = prevIndex;
              }
              if (isTopRenderCall) {
                isRenderCall = void 0;
              }
            }
            return result;
          }
          function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
            var i, l, newView, childView, itemResult, swapContent, contentTmpl, outerOnRender, tmplName, itemVar, newCtx, tagCtx, noLinking, result = "";
            if (tag) {
              tmplName = tag.tagName;
              tagCtx = tag.tagCtx;
              context = context ? extendCtx(context, tag.ctx) : tag.ctx;
              if (tmpl === view.content) {
                contentTmpl = tmpl !== view.ctx._wrp ? view.ctx._wrp : void 0;
              } else if (tmpl !== tagCtx.content) {
                if (tmpl === tag.template) {
                  contentTmpl = tagCtx.tmpl;
                  context._wrp = tagCtx.content;
                } else {
                  contentTmpl = tagCtx.content || view.content;
                }
              } else {
                contentTmpl = view.content;
              }
              if (tagCtx.props.link === false) {
                context = context || {};
                context.link = false;
              }
            }
            if (view) {
              onRender = onRender || view._.onRender;
              noLinking = context && context.link === false;
              if (noLinking && view._.nl) {
                onRender = void 0;
              }
              context = extendCtx(context, view.ctx);
              tagCtx = !tag && view.tag ? view.tag.tagCtxs[view.tagElse] : tagCtx;
            }
            if (itemVar = tagCtx && tagCtx.props.itemVar) {
              if (itemVar[0] !== "~") {
                syntaxError("Use itemVar='~myItem'");
              }
              itemVar = itemVar.slice(1);
            }
            if (key === true) {
              swapContent = true;
              key = 0;
            }
            if (onRender && tag && tag._.noVws) {
              onRender = void 0;
            }
            outerOnRender = onRender;
            if (onRender === true) {
              outerOnRender = void 0;
              onRender = view._.onRender;
            }
            context = tmpl.helpers ? extendCtx(tmpl.helpers, context) : context;
            newCtx = context;
            if ($isArray(data) && !noIteration) {
              newView = swapContent ? view : key !== void 0 && view || new View(context, "array", view, data, tmpl, key, onRender, contentTmpl);
              newView._.nl = noLinking;
              if (view && view._.useKey) {
                newView._.bnd = !tag || tag._.bnd && tag;
                newView.tag = tag;
              }
              for (i = 0, l = data.length; i < l; i++) {
                childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, newView.content);
                if (itemVar) {
                  (childView.ctx = $extend({}, newCtx))[itemVar] = $sub._cp(data[i], "#data", childView);
                }
                itemResult = tmpl.fn(data[i], childView, $sub);
                result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
              }
            } else {
              newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);
              if (itemVar) {
                (newView.ctx = $extend({}, newCtx))[itemVar] = $sub._cp(data, "#data", newView);
              }
              newView.tag = tag;
              newView._.nl = noLinking;
              result += tmpl.fn(data, newView, $sub);
            }
            if (tag) {
              newView.tagElse = tagCtx.index;
              tagCtx.contentView = newView;
            }
            return outerOnRender ? outerOnRender(result, newView) : result;
          }
          function onRenderError(e, view, fallback) {
            var message = fallback !== void 0 ? $isFunction(fallback) ? fallback.call(view.data, e, view) : fallback || "" : "{Error: " + (e.message || e) + "}";
            if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== void 0) {
              message = fallback;
            }
            return view && !view._lc ? $converters.html(message) : message;
          }
          function error(message) {
            throw new $sub.Err(message);
          }
          function syntaxError(message) {
            error("Syntax error\n" + message);
          }
          function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
            function pushprecedingContent(shift) {
              shift -= loc;
              if (shift) {
                content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
              }
            }
            function blockTagCheck(tagName, block) {
              if (tagName) {
                tagName += "}}";
                syntaxError((block ? "{{" + block + "}} block has {{/" + tagName + " without {{" + tagName : "Unmatched or missing {{/" + tagName) + ", in template:\n" + markup);
              }
            }
            function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
              if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
                syntaxError(all);
              }
              if (html) {
                colon = ":";
                converter = HTML;
              }
              slash = slash || isLinkExpr && !hasElse;
              var late, openTagName, isLateOb, pathBindings = (bind || isLinkExpr) && [[]], props = "", args = "", ctxProps = "", paramsArgs = "", paramsProps = "", paramsCtxProps = "", onError = "", useTrigger = "", block = !slash && !colon;
              tagName = tagName || (params = params || "#data", colon);
              pushprecedingContent(index);
              loc = index + all.length;
              if (codeTag) {
                if (allowCode) {
                  content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
                }
              } else if (tagName) {
                if (tagName === "else") {
                  if (rTestElseIf.test(params)) {
                    syntaxError('For "{{else if expr}}" use "{{else expr}}"');
                  }
                  pathBindings = current[9] && [[]];
                  current[10] = markup.substring(current[10], index);
                  openTagName = current[11] || current[0] || syntaxError("Mismatched: " + all);
                  current = stack.pop();
                  content = current[2];
                  block = true;
                }
                if (params) {
                  parseParams(params.replace(rNewLine, " "), pathBindings, tmpl, isLinkExpr).replace(rBuildHash, function(all2, onerror, isCtxPrm, key, keyToken, keyValue, arg, param) {
                    if (key === "this:") {
                      keyValue = "undefined";
                    }
                    if (param) {
                      isLateOb = isLateOb || param[0] === "@";
                    }
                    key = "'" + keyToken + "':";
                    if (arg) {
                      args += isCtxPrm + keyValue + ",";
                      paramsArgs += "'" + param + "',";
                    } else if (isCtxPrm) {
                      ctxProps += key + "j._cp(" + keyValue + ',"' + param + '",view),';
                      paramsCtxProps += key + "'" + param + "',";
                    } else if (onerror) {
                      onError += keyValue;
                    } else {
                      if (keyToken === "trigger") {
                        useTrigger += keyValue;
                      }
                      if (keyToken === "lateRender") {
                        late = param !== "false";
                      }
                      props += key + keyValue + ",";
                      paramsProps += key + "'" + param + "',";
                      hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
                    }
                    return "";
                  }).slice(0, -1);
                }
                if (pathBindings && pathBindings[0]) {
                  pathBindings.pop();
                }
                newNode = [
                  tagName,
                  converter || !!convertBack || hasHandlers || "",
                  block && [],
                  parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps),
                  // {{:}} equivalent to {{:#data}}
                  parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps),
                  onError,
                  useTrigger,
                  late,
                  isLateOb,
                  pathBindings || 0
                ];
                content.push(newNode);
                if (block) {
                  stack.push(current);
                  current = newNode;
                  current[10] = loc;
                  current[11] = openTagName;
                }
              } else if (closeBlock) {
                blockTagCheck(closeBlock !== current[0] && closeBlock !== current[11] && closeBlock, current[0]);
                current[10] = markup.substring(current[10], index);
                current = stack.pop();
              }
              blockTagCheck(!current && closeBlock);
              content = current[2];
            }
            var i, result, newNode, hasHandlers, bindings, allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode || $viewsSettings.allowCode === true, astTop = [], loc = 0, stack = [], content = astTop, current = [, , astTop];
            if (allowCode && tmpl._is) {
              tmpl.allowCode = allowCode;
            }
            if (isLinkExpr) {
              if (convertBack !== void 0) {
                markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar0;
              }
              markup = delimOpenChar0 + markup + delimCloseChar1;
            }
            blockTagCheck(stack[0] && stack[0][2].pop()[0]);
            markup.replace(rTag, parseTag);
            pushprecedingContent(markup.length);
            if (loc = astTop[astTop.length - 1]) {
              blockTagCheck("" + loc !== loc && +loc[10] === loc[10] && loc[0]);
            }
            if (isLinkExpr) {
              result = buildCode(astTop, markup, isLinkExpr);
              bindings = [];
              i = astTop.length;
              while (i--) {
                bindings.unshift(astTop[i][9]);
              }
              setPaths(result, bindings);
            } else {
              result = buildCode(astTop, tmpl);
            }
            return result;
          }
          function setPaths(fn, pathsArr) {
            var key, paths, i = 0, l = pathsArr.length;
            fn.deps = [];
            fn.paths = [];
            for (; i < l; i++) {
              fn.paths.push(paths = pathsArr[i]);
              for (key in paths) {
                if (key !== "_jsvto" && paths.hasOwnProperty(key) && paths[key].length && !paths[key].skp) {
                  fn.deps = fn.deps.concat(paths[key]);
                }
              }
            }
          }
          function parsedParam(args, props, ctx) {
            return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
          }
          function paramStructure(paramCode, paramVals) {
            return "\n	params:{args:[" + paramCode[0] + "],\n	props:{" + paramCode[1] + "}" + (paramCode[2] ? ",\n	ctx:{" + paramCode[2] + "}" : "") + "},\n	args:[" + paramVals[0] + "],\n	props:{" + paramVals[1] + "}" + (paramVals[2] ? ",\n	ctx:{" + paramVals[2] + "}" : "");
          }
          function parseParams(params, pathBindings, tmpl, isLinkExpr) {
            function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, late, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
              function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
                subPath = object === ".";
                if (object) {
                  path = path.slice(not.length);
                  if (/^\.?constructor$/.test(leafToken || path)) {
                    syntaxError(allPath);
                  }
                  if (!subPath) {
                    allPath = (late ? (isLinkExpr ? "" : "(ltOb.lt=ltOb.lt||") + "(ob=" : "") + (helper ? 'view.ctxPrm("' + helper + '")' : view ? "view" : "data") + (late ? ")===undefined" + (isLinkExpr ? "" : ")") + '?"":view._getOb(ob,"' : "") + (leafToken ? (viewProperty ? "." + viewProperty : helper ? "" : view ? "" : "." + object) + (pathTokens || "") : (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));
                    allPath = allPath + (leafToken ? "." + leafToken : "");
                    allPath = not + (allPath.slice(0, 9) === "view.data" ? allPath.slice(5) : allPath) + (late ? (isLinkExpr ? '"' : '",ltOb') + (prn ? ",1)" : ")") : "");
                  }
                  if (bindings) {
                    binds = named === "_linkTo" ? bindto = pathBindings._jsvto = pathBindings._jsvto || [] : bndCtx.bd;
                    if (theOb = subPath && binds[binds.length - 1]) {
                      if (theOb._cpfn) {
                        while (theOb.sb) {
                          theOb = theOb.sb;
                        }
                        if (theOb.prm) {
                          if (theOb.bnd) {
                            path = "^" + path.slice(1);
                          }
                          theOb.sb = path;
                          theOb.bnd = theOb.bnd || path[0] === "^";
                        }
                      }
                    } else {
                      binds.push(path);
                    }
                    if (prn && !subPath) {
                      pathStart[fnDp] = ind;
                      compiledPathStart[fnDp] = compiledPath[fnDp].length;
                    }
                  }
                }
                return allPath;
              }
              if (bound && !eq) {
                path = bound + path;
              }
              operator = operator || "";
              lftPrn2 = lftPrn2 || "";
              lftPrn = lftPrn || lftPrn0 || lftPrn2;
              path = path || path2;
              if (late && (late = !/\)|]/.test(full[index - 1]))) {
                path = path.slice(1).split(".").join("^");
              }
              prn = prn || prn2 || "";
              var expr, binds, theOb, newOb, subPath, lftPrnFCall, ret, ind = index;
              if (!aposed && !quoted) {
                if (err) {
                  syntaxError(params);
                }
                if (rtPrnDot && bindings) {
                  expr = pathStart[fnDp - 1];
                  if (full.length - 1 > ind - (expr || 0)) {
                    expr = $9.trim(full.slice(expr, ind + all.length));
                    binds = bindto || bndStack[fnDp - 1].bd;
                    theOb = binds[binds.length - 1];
                    if (theOb && theOb.prm) {
                      while (theOb.sb && theOb.sb.prm) {
                        theOb = theOb.sb;
                      }
                      newOb = theOb.sb = { path: theOb.sb, bnd: theOb.bnd };
                    } else {
                      binds.push(newOb = { path: binds.pop() });
                    }
                    if (theOb && theOb.sb === newOb) {
                      compiledPath[fnDp] = compiledPath[fnDp - 1].slice(theOb._cpPthSt) + compiledPath[fnDp];
                      compiledPath[fnDp - 1] = compiledPath[fnDp - 1].slice(0, theOb._cpPthSt);
                    }
                    newOb._cpPthSt = compiledPathStart[fnDp - 1];
                    newOb._cpKey = expr;
                    compiledPath[fnDp] += full.slice(prevIndex, index);
                    prevIndex = index;
                    newOb._cpfn = cpFnStore[expr] = cpFnStore[expr] || // Compiled function for computed value: get from store, or compile and store
                    new Function(
                      "data,view,j",
                      // Compiled function for computed value in template
                      "//" + expr + "\nvar v;\nreturn ((v=" + compiledPath[fnDp] + (rtPrn === "]" ? ")]" : rtPrn) + ")!=null?v:null);"
                    );
                    compiledPath[fnDp - 1] += fnCall[prnDp] && $subSettingsAdvanced.cache ? 'view.getCache("' + expr.replace(rEscapeQuotes, "\\$&") + '"' : compiledPath[fnDp];
                    newOb.prm = bndCtx.bd;
                    newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
                  }
                  compiledPath[fnDp] = "";
                }
                if (prn === "[") {
                  prn = "[j._sq(";
                }
                if (lftPrn === "[") {
                  lftPrn = "[j._sq(";
                }
              }
              ret = aposed ? (aposed = !apos, aposed ? all : lftPrn2 + '"') : quoted ? (quoted = !quot, quoted ? all : lftPrn2 + '"') : (lftPrn ? (prnStack[++prnDp] = true, prnInd[prnDp] = 0, bindings && (pathStart[fnDp++] = ind++, bndCtx = bndStack[fnDp] = { bd: [] }, compiledPath[fnDp] = "", compiledPathStart[fnDp] = 1), lftPrn) : "") + (space ? prnDp ? "" : (paramIndex = full.slice(paramIndex, ind), named ? (named = boundName = bindto = false, "\b") : "\b,") + paramIndex + (paramIndex = ind + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b") : eq ? (fnDp && syntaxError(params), bindings && pathBindings.pop(), named = "_" + path, boundName = bound, paramIndex = ind + all.length, bindings && (bindings = bndCtx.bd = pathBindings[named] = [], bindings.skp = !bound), path + ":") : path ? path.split("^").join(".").replace($sub.rPath, parsePath) + (prn || operator) : operator ? operator : rtPrn ? rtPrn === "]" ? ")]" : ")" : comma ? (fnCall[prnDp] || syntaxError(params), ",") : lftPrn0 ? "" : (aposed = apos, quoted = quot, '"'));
              if (!aposed && !quoted) {
                if (rtPrn) {
                  fnCall[prnDp] = false;
                  prnDp--;
                }
              }
              if (bindings) {
                if (!aposed && !quoted) {
                  if (rtPrn) {
                    if (prnStack[prnDp + 1]) {
                      bndCtx = bndStack[--fnDp];
                      prnStack[prnDp + 1] = false;
                    }
                    prnStart = prnInd[prnDp + 1];
                  }
                  if (prn) {
                    prnInd[prnDp + 1] = compiledPath[fnDp].length + (lftPrn ? 1 : 0);
                    if (path || rtPrn) {
                      bndCtx = bndStack[++fnDp] = { bd: [] };
                      prnStack[prnDp + 1] = true;
                    }
                  }
                }
                compiledPath[fnDp] = (compiledPath[fnDp] || "") + full.slice(prevIndex, index);
                prevIndex = index + all.length;
                if (!aposed && !quoted) {
                  if (lftPrnFCall = lftPrn && prnStack[prnDp + 1]) {
                    compiledPath[fnDp - 1] += lftPrn;
                    compiledPathStart[fnDp - 1]++;
                  }
                  if (prn === "(" && subPath && !newOb) {
                    compiledPath[fnDp] = compiledPath[fnDp - 1].slice(prnStart) + compiledPath[fnDp];
                    compiledPath[fnDp - 1] = compiledPath[fnDp - 1].slice(0, prnStart);
                  }
                }
                compiledPath[fnDp] += lftPrnFCall ? ret.slice(1) : ret;
              }
              if (!aposed && !quoted && prn) {
                prnDp++;
                if (path && prn === "(") {
                  fnCall[prnDp] = true;
                }
              }
              if (!aposed && !quoted && prn2) {
                if (bindings) {
                  compiledPath[fnDp] += prn;
                }
                ret += prn;
              }
              return ret;
            }
            var named, bindto, boundName, result, quoted, aposed, bindings = pathBindings && pathBindings[0], bndCtx = { bd: bindings }, bndStack = { 0: bndCtx }, paramIndex = 0, prnDp = 0, fnDp = 0, prnInd = {}, prnStart = 0, prnStack = {}, fnCall = {}, pathStart = {}, compiledPathStart = { 0: 0 }, compiledPath = { 0: "" }, prevIndex = 0;
            if (params[0] === "@") {
              params = params.replace(rBracketQuote, ".");
            }
            result = (params + (tmpl ? " " : "")).replace($sub.rPrm, parseTokens);
            if (bindings) {
              result = compiledPath[0];
            }
            return !prnDp && result || syntaxError(params);
          }
          function buildCode(ast, tmpl, isLinkExpr) {
            var i, node, tagName, converter, tagCtx, hasTag, hasEncoder, getsVal, hasCnvt, useCnvt, tmplBindings, pathBindings, params, boundOnErrStart, boundOnErrEnd, tagRender, nestedTmpls, tmplName, nestedTmpl, tagAndElses, content, markup, nextIsElse, oldCode, isElse, isGetVal, tagCtxFn, onError, tagStart, trigger, lateRender, retStrOpen, retStrClose, tmplBindingKey = 0, useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters, code = "", tmplOptions = {}, l = ast.length;
            if ("" + tmpl === tmpl) {
              tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
              tmpl = 0;
            } else {
              tmplName = tmpl.tmplName || "unnamed";
              if (tmpl.allowCode) {
                tmplOptions.allowCode = true;
              }
              if (tmpl.debug) {
                tmplOptions.debug = true;
              }
              tmplBindings = tmpl.bnds;
              nestedTmpls = tmpl.tmpls;
            }
            for (i = 0; i < l; i++) {
              node = ast[i];
              if ("" + node === node) {
                code += '+"' + node + '"';
              } else {
                tagName = node[0];
                if (tagName === "*") {
                  code += ";\n" + node[1] + "\nret=ret";
                } else {
                  converter = node[1];
                  content = !isLinkExpr && node[2];
                  tagCtx = paramStructure(node[3], params = node[4]);
                  trigger = node[6];
                  lateRender = node[7];
                  if (node[8]) {
                    retStrOpen = "\nvar ob,ltOb={},ctxs=";
                    retStrClose = ";\nctxs.lt=ltOb.lt;\nreturn ctxs;";
                  } else {
                    retStrOpen = "\nreturn ";
                    retStrClose = "";
                  }
                  markup = node[10] && node[10].replace(rUnescapeQuotes, "$1");
                  if (isElse = tagName === "else") {
                    if (pathBindings) {
                      pathBindings.push(node[9]);
                    }
                  } else {
                    onError = node[5] || $subSettings.debugMode !== false && "undefined";
                    if (tmplBindings && (pathBindings = node[9])) {
                      pathBindings = [pathBindings];
                      tmplBindingKey = tmplBindings.push(1);
                    }
                  }
                  useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]);
                  if (isGetVal = tagName === ":") {
                    if (converter) {
                      tagName = converter === HTML ? ">" : converter + tagName;
                    }
                  } else {
                    if (content) {
                      nestedTmpl = tmplObject(markup, tmplOptions);
                      nestedTmpl.tmplName = tmplName + "/" + tagName;
                      nestedTmpl.useViews = nestedTmpl.useViews || useViews;
                      buildCode(content, nestedTmpl);
                      useViews = nestedTmpl.useViews;
                      nestedTmpls.push(nestedTmpl);
                    }
                    if (!isElse) {
                      tagAndElses = tagName;
                      useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow);
                      oldCode = code;
                      code = "";
                    }
                    nextIsElse = ast[i + 1];
                    nextIsElse = nextIsElse && nextIsElse[0] === "else";
                  }
                  tagStart = onError ? ";\ntry{\nret+=" : "\n+";
                  boundOnErrStart = "";
                  boundOnErrEnd = "";
                  if (isGetVal && (pathBindings || trigger || converter && converter !== HTML || lateRender)) {
                    tagCtxFn = new Function("data,view,j", "// " + tmplName + " " + ++tmplBindingKey + " " + tagName + retStrOpen + "{" + tagCtx + "};" + retStrClose);
                    tagCtxFn._er = onError;
                    tagCtxFn._tag = tagName;
                    tagCtxFn._bd = !!pathBindings;
                    tagCtxFn._lr = lateRender;
                    if (isLinkExpr) {
                      return tagCtxFn;
                    }
                    setPaths(tagCtxFn, pathBindings);
                    tagRender = 'c("' + converter + '",view,';
                    useCnvt = true;
                    boundOnErrStart = tagRender + tmplBindingKey + ",";
                    boundOnErrEnd = ")";
                  }
                  code += isGetVal ? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt ? (useCnvt = void 0, useViews = hasCnvt = true, tagRender + (tagCtxFn ? (tmplBindings[tmplBindingKey - 1] = tagCtxFn, tmplBindingKey) : "{" + tagCtx + "}") + ")") : tagName === ">" ? (hasEncoder = true, "h(" + params[0] + ")") : (getsVal = true, "((v=" + params[0] + ")!=null?v:" + (isLinkExpr ? "null)" : '"")'))) : (hasTag = true, "\n{view:view,content:false,tmpl:" + (content ? nestedTmpls.length : "false") + "," + tagCtx + "},");
                  if (tagAndElses && !nextIsElse) {
                    code = "[" + code.slice(0, -1) + "]";
                    tagRender = 't("' + tagAndElses + '",view,this,';
                    if (isLinkExpr || pathBindings) {
                      code = new Function("data,view,j", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + retStrOpen + code + retStrClose);
                      code._er = onError;
                      code._tag = tagAndElses;
                      if (pathBindings) {
                        setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
                      }
                      code._lr = lateRender;
                      if (isLinkExpr) {
                        return code;
                      }
                      boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
                      boundOnErrEnd = ")";
                    }
                    code = oldCode + tagStart + tagRender + (pathBindings && tmplBindingKey || code) + ")";
                    pathBindings = 0;
                    tagAndElses = 0;
                  }
                  if (onError && !nextIsElse) {
                    useViews = true;
                    code += ";\n}catch(e){ret" + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + "j._err(e,view," + onError + ")" + boundOnErrEnd + ";}" + (isLinkExpr ? "" : "\nret=ret");
                  }
                }
              }
            }
            code = "// " + tmplName + (tmplOptions.debug ? "\ndebugger;" : "") + "\nvar v" + (hasTag ? ",t=j._tag" : "") + (hasCnvt ? ",c=j._cnvt" : "") + (hasEncoder ? ",h=j._html" : "") + (isLinkExpr ? (node[8] ? ", ob" : "") + ";\n" : ',ret=""') + code + (isLinkExpr ? "\n" : ";\nreturn ret;");
            try {
              code = new Function("data,view,j", code);
            } catch (e) {
              syntaxError("Compiled template code:\n\n" + code + '\n: "' + (e.message || e) + '"');
            }
            if (tmpl) {
              tmpl.fn = code;
              tmpl.useViews = !!useViews;
            }
            return code;
          }
          function extendCtx(context, parentContext) {
            return context && context !== parentContext ? parentContext ? $extend($extend({}, parentContext), context) : context : parentContext && $extend({}, parentContext);
          }
          function getTargetProps(source, tagCtx) {
            var key, prop, map = tagCtx.map, propsArr = map && map.propsArr;
            if (!propsArr) {
              propsArr = [];
              if (typeof source === OBJECT || $isFunction(source)) {
                for (key in source) {
                  prop = source[key];
                  if (key !== $expando && source.hasOwnProperty(key) && (!tagCtx.props.noFunctions || !$9.isFunction(prop))) {
                    propsArr.push({ key, prop });
                  }
                }
              }
              if (map) {
                map.propsArr = map.options && propsArr;
              }
            }
            return getTargetSorted(propsArr, tagCtx);
          }
          function getTargetSorted(value, tagCtx) {
            var mapped, start, end, tag = tagCtx.tag, props = tagCtx.props, propParams = tagCtx.params.props, filter = props.filter, sort = props.sort, directSort = sort === true, step = parseInt(props.step), reverse = props.reverse ? -1 : 1;
            if (!$isArray(value)) {
              return value;
            }
            if (directSort || sort && "" + sort === sort) {
              mapped = value.map(function(item, i) {
                item = directSort ? item : getPathObject(item, sort);
                return { i, v: "" + item === item ? item.toLowerCase() : item };
              });
              mapped.sort(function(a, b) {
                return a.v > b.v ? reverse : a.v < b.v ? -reverse : 0;
              });
              value = mapped.map(function(item) {
                return value[item.i];
              });
            } else if ((sort || reverse < 0) && !tag.dataMap) {
              value = value.slice();
            }
            if ($isFunction(sort)) {
              value = value.sort(function() {
                return sort.apply(tagCtx, arguments);
              });
            }
            if (reverse < 0 && (!sort || $isFunction(sort))) {
              value = value.reverse();
            }
            if (value.filter && filter) {
              value = value.filter(filter, tagCtx);
              if (tagCtx.tag.onFilter) {
                tagCtx.tag.onFilter(tagCtx);
              }
            }
            if (propParams.sorted) {
              mapped = sort || reverse < 0 ? value : value.slice();
              if (tag.sorted) {
                $9.observable(tag.sorted).refresh(mapped);
              } else {
                tagCtx.map.sorted = mapped;
              }
            }
            start = props.start;
            end = props.end;
            if (propParams.start && start === void 0 || propParams.end && end === void 0) {
              start = end = 0;
            }
            if (!isNaN(start) || !isNaN(end)) {
              start = +start || 0;
              end = end === void 0 || end > value.length ? value.length : +end;
              value = value.slice(start, end);
            }
            if (step > 1) {
              start = 0;
              end = value.length;
              mapped = [];
              for (; start < end; start += step) {
                mapped.push(value[start]);
              }
              value = mapped;
            }
            if (propParams.paged && tag.paged) {
              $observable(tag.paged).refresh(value);
            }
            return value;
          }
          function $fnRender(data, context, noIteration) {
            var tmplElem = this.jquery && (this[0] || error("Unknown template")), tmpl = tmplElem.getAttribute(tmplAttr);
            return renderContent.call(
              tmpl && $9.data(tmplElem)[jsvTmpl] || $templates(tmplElem),
              data,
              context,
              noIteration
            );
          }
          function getCharEntity(ch) {
            return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
          }
          function getCharFromEntity(match, token) {
            return charsFromEntities[token] || "";
          }
          function htmlEncode(text) {
            return text != void 0 ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
          }
          function dataEncode(text) {
            return "" + text === text ? text.replace(rDataEncode, getCharEntity) : text;
          }
          function dataUnencode(text) {
            return "" + text === text ? text.replace(rDataUnencode, getCharFromEntity) : text;
          }
          $sub = $views.sub;
          $viewsSettings = $views.settings;
          if (!(jsr || $9 && $9.render)) {
            for (jsvStoreName in jsvStores) {
              registerStore(jsvStoreName, jsvStores[jsvStoreName]);
            }
            $converters = $views.converters;
            $helpers = $views.helpers;
            $tags = $views.tags;
            $sub._tg.prototype = {
              baseApply,
              cvtArgs: convertArgs,
              bndArgs: convertBoundArgs,
              ctxPrm: contextParameter
            };
            topView = $sub.topView = new View();
            if ($9) {
              $9.fn.render = $fnRender;
              $expando = $9.expando;
              if ($9.observable) {
                if (versionNumber !== (versionNumber = $9.views.jsviews)) {
                  throw "jquery.observable.js requires jsrender.js " + versionNumber;
                }
                $extend($sub, $9.views.sub);
                $views.map = $9.views.map;
              }
            } else {
              $9 = {};
              if (setGlobals) {
                global2.jsrender = $9;
              }
              $9.renderFile = $9.__express = $9.compile = function() {
                throw "Node.js: use npm jsrender, or jsrender-node.js";
              };
              $9.isFunction = function(ob) {
                return typeof ob === "function";
              };
              $9.isArray = Array.isArray || function(obj) {
                return {}.toString.call(obj) === "[object Array]";
              };
              $sub._jq = function(jq) {
                if (jq !== $9) {
                  $extend(jq, $9);
                  $9 = jq;
                  $9.fn.render = $fnRender;
                  delete $9.jsrender;
                  $expando = $9.expando;
                }
              };
              $9.jsrender = versionNumber;
            }
            $subSettings = $sub.settings;
            $subSettings.allowCode = false;
            $isFunction = $9.isFunction;
            $9.render = $render;
            $9.views = $views;
            $9.templates = $templates = $views.templates;
            for (setting in $subSettings) {
              addSetting(setting);
            }
            ($viewsSettings.debugMode = function(debugMode) {
              return debugMode === void 0 ? $subSettings.debugMode : ($subSettings._clFns && $subSettings._clFns(), // Clear linkExprStore (cached compiled expressions), since debugMode setting affects compilation for expressions
              $subSettings.debugMode = debugMode, $subSettings.onError = debugMode + "" === debugMode ? function() {
                return debugMode;
              } : $isFunction(debugMode) ? debugMode : void 0, $viewsSettings);
            })(false);
            $subSettingsAdvanced = $subSettings.advanced = {
              cache: true,
              // By default use cached values of computed values (Otherwise, set advanced cache setting to false)
              useViews: false,
              _jsv: false
              // For global access to JsViews store
            };
            $tags({
              "if": {
                render: function(val) {
                  var self2 = this, tagCtx = self2.tagCtx, ret = self2.rendering.done || !val && (tagCtx.args.length || !tagCtx.index) ? "" : (self2.rendering.done = true, self2.selected = tagCtx.index, void 0);
                  return ret;
                },
                contentCtx: true,
                // Inherit parent view data context
                flow: true
              },
              "for": {
                sortDataMap: dataMap(getTargetSorted),
                init: function(val, cloned) {
                  this.setDataMap(this.tagCtxs);
                },
                render: function(val) {
                  var value, filter, srtField, isArray, i, sorted, end, step, self2 = this, tagCtx = self2.tagCtx, range = tagCtx.argDefault === false, props = tagCtx.props, iterate = range || tagCtx.args.length, result = "", done = 0;
                  if (!self2.rendering.done) {
                    value = iterate ? val : tagCtx.view.data;
                    if (range) {
                      range = props.reverse ? "unshift" : "push";
                      end = +props.end;
                      step = +props.step || 1;
                      value = [];
                      for (i = +props.start || 0; (end - i) * step > 0; i += step) {
                        value[range](i);
                      }
                    }
                    if (value !== void 0) {
                      isArray = $isArray(value);
                      result += tagCtx.render(value, !iterate || props.noIteration);
                      done += isArray ? value.length : 1;
                    }
                    if (self2.rendering.done = done) {
                      self2.selected = tagCtx.index;
                    }
                  }
                  return result;
                },
                setDataMap: function(tagCtxs) {
                  var tagCtx, props, paramsProps, self2 = this, l = tagCtxs.length;
                  while (l--) {
                    tagCtx = tagCtxs[l];
                    props = tagCtx.props;
                    paramsProps = tagCtx.params.props;
                    tagCtx.argDefault = props.end === void 0 || tagCtx.args.length > 0;
                    props.dataMap = tagCtx.argDefault !== false && $isArray(tagCtx.args[0]) && (paramsProps.sort || paramsProps.start || paramsProps.end || paramsProps.step || paramsProps.filter || paramsProps.reverse || props.sort || props.start || props.end || props.step || props.filter || props.reverse) && self2.sortDataMap;
                  }
                },
                flow: true
              },
              props: {
                baseTag: "for",
                dataMap: dataMap(getTargetProps),
                init: noop,
                // Don't execute the base init() of the "for" tag
                flow: true
              },
              include: {
                flow: true
              },
              "*": {
                // {{* code... }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
                render: retVal,
                flow: true
              },
              ":*": {
                // {{:* returnedExpression }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
                render: retVal,
                flow: true
              },
              dbg: $helpers.dbg = $converters.dbg = dbgBreak
              // Register {{dbg/}}, {{dbg:...}} and ~dbg() to throw and catch, as breakpoints for debugging.
            });
            $converters({
              html: htmlEncode,
              attr: htmlEncode,
              // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
              encode: dataEncode,
              unencode: dataUnencode,
              // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
              url: function(text) {
                return text != void 0 ? encodeURI("" + text) : text === null ? text : "";
              }
            });
          }
          $subSettings = $sub.settings;
          $isArray = ($9 || jsr).isArray;
          $viewsSettings.delimiters("{{", "}}", "^");
          if (jsrToJq) {
            jsr.views.sub._jq($9);
          }
          return $9 || jsr;
        },
        window
      );
    }
  });

  // library/js/src/modules/mfa.js
  var import_uikit_min2 = __toESM(require_uikit_min());
  var import_fitvids = __toESM(require_fitvids());

  // library/js/src/modules/contactform.js
  var $ = jQuery;
  function scrollToTop() {
    setTimeout(function() {
      if ($("body").hasClass("page-template-page-contact")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        $("#modal-contact").animate({
          scrollTop: 0
        }, "slow");
      }
    }, 500);
  }
  function setupFormSuccessMessage() {
    if (!$("body").hasClass("page-template-page-forms-contact")) {
      return;
    }
    var progress = 0;
    var refreshIntervalId = window.setInterval(function() {
      progress = progress + 1;
      $("#map-holder .progress").css("width", progress + "%");
      if (progress >= 100) {
        clearInterval(refreshIntervalId);
        $("#map-holder").hide();
        $(".succes-message-holder #succes-message").show();
      }
    }, 50);
  }
  function setupActiveStepsCounter() {
    $(".copywriter-form .progess-strips").each(function() {
      let active_step = parseInt($(this).attr("data-active-step"), 10);
      let number_of_steps = parseInt($(this).attr("data-number-of-steps"), 10);
      for (let i = 1; i <= number_of_steps; i++) {
        if (i == active_step) {
          $(this).append('<div class="progress-strip active"></div>');
        } else {
          $(this).append('<div class="progress-strip"></div>');
        }
      }
    });
  }
  function init() {
    setupFormSuccessMessage();
    setupActiveStepsCounter();
    $("#contact-form-wrapper").add("#contact-form-wrapper-toptalent").each(function() {
      let wrapper = $(this);
      $(this).find(".toggle_contact_screens").click(function(e) {
        e.preventDefault();
        wrapper.toggleClass("screen-contact-form-visible");
        scrollToTop();
        return false;
      });
      $(this).find(".toggle_booking_screens").click(function(e) {
        e.preventDefault();
        wrapper.toggleClass("screen-booking-form-visible");
        scrollToTop();
        return false;
      });
      $(this).find(".back-arrow-screen-1").click(function(e) {
        e.preventDefault();
        wrapper.removeClass("screen-contact-form-visible");
        wrapper.removeClass("screen-booking-form-visible");
        scrollToTop();
        return false;
      });
    });
    $("#modal-contact").on("hidden", function() {
      $("#contact-form-wrapper").removeClass("screen-contact-form-visible");
      $("#contact-form-wrapper").removeClass("screen-booking-form-visible");
    });
  }

  // library/js/src/modules/pricePage.js
  var import_uikit_min = __toESM(require_uikit_min());
  var $2 = jQuery;
  var numberOfOptionsSelected = 0;
  function getNumberOfSelectedOptions() {
    let res = 0;
    $2(".block-packages-accordion-holder input[type=radio]").add(".block-packages-accordion-holder input[type=checkbox]").each(function() {
      if ($2(this).is(":checked")) {
        res++;
      }
    });
    return res;
  }
  function calculateTotalPriceForPackage() {
    let totalPriceOfStrategy = 0;
    let totalPriceOfPackage = 0;
    $2(".result-name-holder").empty();
    $2("#price_calculator input:checked").each(function() {
      let prijs = $2(this).attr("data-price");
      let price_name = $2(this).attr("data-price-name");
      let cat_slug = $2(this).attr("data-category");
      if (cat_slug == "contentstrategie") {
        totalPriceOfStrategy += parseInt(prijs, 10);
        $2(".price-holder.price-holder-1 .result-name-holder").append("<div>" + cat_slug + " " + price_name + "</div>");
      } else {
        totalPriceOfPackage += parseInt(prijs, 10);
        $2(".price-holder.price-holder-2 .result-name-holder").append("<div>" + cat_slug + " " + price_name + "</div>");
      }
    });
    $2("#total_price_strategy span").html(totalPriceOfStrategy);
    $2("#total_price_strategy_2 span").html(totalPriceOfStrategy);
    $2("#total_price span").html(totalPriceOfPackage);
    $2("#total_price_2 span").html(totalPriceOfPackage);
    if (totalPriceOfStrategy && totalPriceOfStrategy > 0) {
      $2(".price-holder-1").show();
    } else {
      $2(".price-holder-1").hide();
    }
    if (totalPriceOfPackage && totalPriceOfPackage > 0) {
      $2(".price-holder-2").show();
    } else {
      $2(".price-holder-2").hide();
    }
  }
  function setupScrollSpy() {
    import_uikit_min.default.scrollspy("#block-packages-accordion", { "repeat": true, "hidden": false });
    import_uikit_min.default.scrollspy("#block-accordion-result-grid", { "repeat": true, "offsetTop": -180, "hidden": false });
    import_uikit_min.default.util.on(document, "inview", "#block-packages-accordion", function() {
      $2("#price-calc-summary").addClass("accordion-is-visible");
    });
    import_uikit_min.default.util.on(document, "outview", "#block-packages-accordion", function() {
      $2("#price-calc-summary").removeClass("accordion-is-visible");
    });
    import_uikit_min.default.util.on(document, "inview", "#block-accordion-result-grid", function() {
      $2("#price-calc-summary").addClass("result-is-visible");
    });
    import_uikit_min.default.util.on(document, "outview", "#block-accordion-result-grid", function() {
      $2("#price-calc-summary").removeClass("result-is-visible");
    });
  }
  function setupBlockCLick() {
    $2(".blok-wrap").each(function() {
      $2(this).click(function(e) {
        e.preventDefault();
        $2(this).toggleClass("clicked");
        $2(this).find("input").click();
        return false;
      });
    });
    $2(".blok-wrap input").click(function() {
      return false;
    });
  }
  function setupPriceCalculator() {
    $2(".block-packages-accordion-holder input[type=radio]").add(".block-packages-accordion-holder input[type=checkbox]").click(function() {
      calculateTotalPriceForPackage();
      numberOfOptionsSelected = getNumberOfSelectedOptions();
      if (numberOfOptionsSelected > 0) {
        $2("body").addClass("show-price-calc-summary");
      } else {
        $2("body").removeClass("show-price-calc-summary");
      }
    });
    setupScrollSpy();
    setupBlockCLick();
  }

  // library/js/src/modules/mfUtil.js
  var $3 = jQuery;
  function excerptMaker(excerpt, limit) {
    excerpt = excerpt.replace(/(<([^>]+)>)/ig, "");
    excerpt = excerpt.split(" ");
    if (excerpt.length >= limit) {
      excerpt = excerpt.slice(0, limit);
      excerpt.pop();
      excerpt = excerpt.join(" ") + " ...";
    } else {
      excerpt = excerpt.join(" ");
    }
    excerpt = excerpt.replace("`[[^]]*]`", "");
    return "<p>" + excerpt + "</p>";
  }
  function getMonthNames() {
    if ($3("body").hasClass("lang-fr")) {
      return [
        "janvier",
        "f\xE9vrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "ao\xFBt",
        "septembre",
        "octobre",
        "novembre",
        "d\xE9cembre"
      ];
    } else if ($3("body").hasClass("lang-en")) {
      return [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
      ];
    } else {
      return [
        "januari",
        "februari",
        "maart",
        "april",
        "mei",
        "juni",
        "juli",
        "augustus",
        "september",
        "oktober",
        "november",
        "december"
      ];
    }
  }
  function getBlogUrl() {
    let blogUrl = "https://mediaforta.com/blog/";
    if ($3("body").hasClass("lang-nl")) {
      blogUrl = "https://mediaforta.com/blog/";
    } else if ($3("body").hasClass("lang-en")) {
      blogUrl = "https://mediaforta.com/blog/en/";
    } else if ($3("body").hasClass("lang-fr")) {
      blogUrl = "https://mediaforta.com/blog/fr/";
    }
    return blogUrl;
  }

  // library/js/src/modules/relatedBlogposts.js
  var $4 = jQuery;
  Promise.resolve().then(() => __toESM(require_jsrender()));
  var monthNames = getMonthNames();
  var categoriesArray = [];
  function getCategoriesArray(callback = false) {
    $4.ajax({
      url: getBlogUrl() + "wp-json/wp/v2/categories?per_page=100",
      method: "GET",
      crossDomain: true,
      contentType: "application/json",
      success: function(data) {
        categoriesArray = data;
        if (callback) {
          callback();
        }
      },
      error: function() {
        categoriesArray = [];
        if (callback) {
          callback();
        }
      }
    });
  }
  function _uniqueCategories(categories) {
    var uniqueCats = [];
    $4.each(categories, function(i, el) {
      if ($4.inArray(el, uniqueCats) === -1)
        uniqueCats.push(el);
    });
    return uniqueCats;
  }
  function _getCatDetails(catID) {
    var link = "#";
    var name = "";
    categoriesArray.forEach(function(element) {
      if (element.id == catID) {
        link = element.link;
        name = element.name;
      }
    });
    return {
      link,
      name
    };
  }
  function _getCategoriesHTML(catID) {
    var catDetails = _getCatDetails(catID);
    return $4.templates("#category-link-template").render({
      categorylink: catDetails.link,
      categoryname: catDetails.name
    });
  }
  function setupRelatedBlogpostsHeavyLifting() {
    let aantalRelatedBlogPosts = $4(".block-related-blogposts .article-tile-holder").length;
    let aantalRelatedBlogPostsFetched = 0;
    $4(".block-related-blogposts .article-tile-holder").each(function() {
      var self2 = $4(this);
      var post_id = $4(this).attr("data-post_id");
      var request = $4.ajax({
        url: getBlogUrl() + "wp-json/wp/v2/posts/?include=" + post_id,
        method: "GET",
        dataType: "json"
      });
      request.done(function(data) {
        if (data.length > 0) {
          var element = data[0];
          var categories = "";
          var categorieIDs = _uniqueCategories(element.categories);
          categorieIDs.forEach(function(cat) {
            categories = categories + _getCategoriesHTML(cat);
          });
          var d = new Date(element.date);
          var newTile = $4.templates("#tile-template").render({
            permalink: element.link,
            dateYmd: d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate(),
            //dateYmd,
            date: d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear(),
            title: element.title.rendered,
            featured_image: element.fimg_url,
            categories,
            excerpt: excerptMaker(element.excerpt.rendered, 25)
          });
          self2.append(newTile);
          aantalRelatedBlogPostsFetched++;
          if (aantalRelatedBlogPostsFetched == aantalRelatedBlogPosts) {
            $4(".block-related-blogposts").removeClass("loading");
          }
        } else {
          $4(".block-related-blogposts").removeClass("loading");
        }
      });
    });
  }
  function setupRelatedBlogposts() {
    getCategoriesArray(setupRelatedBlogpostsHeavyLifting);
  }

  // library/js/plugins/mmenu-light/dist/mmenu-light.js
  !function(t) {
    var e = {};
    function n(o) {
      if (e[o])
        return e[o].exports;
      var s = e[o] = { i: o, l: false, exports: {} };
      return t[o].call(s.exports, s, s.exports, n), s.l = true, s.exports;
    }
    n.m = t, n.c = e, n.d = function(t2, e2, o) {
      n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: o });
    }, n.r = function(t2) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
    }, n.t = function(t2, e2) {
      if (1 & e2 && (t2 = n(t2)), 8 & e2)
        return t2;
      if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
        return t2;
      var o = /* @__PURE__ */ Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
        for (var s in t2)
          n.d(o, s, function(e3) {
            return t2[e3];
          }.bind(null, s));
      return o;
    }, n.n = function(t2) {
      var e2 = t2 && t2.__esModule ? function() {
        return t2.default;
      } : function() {
        return t2;
      };
      return n.d(e2, "a", e2), e2;
    }, n.o = function(t2, e2) {
      return Object.prototype.hasOwnProperty.call(t2, e2);
    }, n.p = "", n(n.s = 0);
  }([function(t, e, n) {
    "use strict";
    n.r(e);
    var o = function() {
      function t2(t3) {
        var e2 = this;
        this.listener = function(t4) {
          (t4.matches ? e2.matchFns : e2.unmatchFns).forEach(function(t5) {
            t5();
          });
        }, this.toggler = window.matchMedia(t3), this.toggler.addListener(this.listener), this.matchFns = [], this.unmatchFns = [];
      }
      return t2.prototype.add = function(t3, e2) {
        this.matchFns.push(t3), this.unmatchFns.push(e2), (this.toggler.matches ? t3 : e2)();
      }, t2;
    }(), s = function(t2) {
      return Array.prototype.slice.call(t2);
    }, i = function(t2, e2) {
      return s((e2 || document).querySelectorAll(t2));
    }, r = "mm-spn", a = function() {
      function t2(t3, e2, n2, o2, s2) {
        this.node = t3, this.title = e2, this.slidingSubmenus = o2, this.selectedClass = n2, this.node.classList.add(r), this.node.classList.add(r + "--" + s2), this.node.classList.add(r + "--" + (this.slidingSubmenus ? "navbar" : "vertical")), this._setSelectedl(), this._initAnchors();
      }
      return Object.defineProperty(t2.prototype, "prefix", { get: function() {
        return r;
      }, enumerable: false, configurable: true }), t2.prototype.openPanel = function(t3) {
        var e2 = t3.parentElement;
        if (this.slidingSubmenus) {
          var n2 = t3.dataset.mmSpnTitle;
          e2 === this.node ? this.node.classList.add(r + "--main") : (this.node.classList.remove(r + "--main"), n2 || s(e2.children).forEach(function(t4) {
            t4.matches("span.has-photo") ? n2 = t4.querySelector(".title").textContent : t4.matches("a, span") && (n2 = t4.textContent);
          })), n2 || (n2 = this.title), this.node.dataset.mmSpnTitle = n2, i(".mm-spn--open", this.node).forEach(function(t4) {
            t4.classList.remove(r + "--open"), t4.classList.remove(r + "--parent");
          }), t3.classList.add(r + "--open"), t3.classList.remove(r + "--parent");
          for (var o2 = t3.parentElement.closest("ul"); o2; )
            o2.classList.add(r + "--open"), o2.classList.add(r + "--parent"), o2 = o2.parentElement.closest("ul");
        } else {
          var a2 = t3.matches(".mm-spn--open");
          i(".mm-spn--open", this.node).forEach(function(t4) {
            t4.classList.remove(r + "--open");
          }), t3.classList[a2 ? "remove" : "add"](r + "--open");
          for (var c2 = t3.parentElement.closest("ul"); c2; )
            c2.classList.add(r + "--open"), c2 = c2.parentElement.closest("ul");
        }
      }, t2.prototype._setSelectedl = function() {
        var t3 = i("." + this.selectedClass, this.node), e2 = t3[t3.length - 1], n2 = null;
        e2 && (n2 = e2.closest("ul")), n2 || (n2 = this.node.querySelector("ul")), this.openPanel(n2);
      }, t2.prototype._initAnchors = function() {
        var t3 = this;
        this.node.addEventListener("click", function(e2) {
          var n2 = e2.target, o2 = false;
          (o2 = (o2 = (o2 = o2 || function(t4) {
            return !!t4.matches("a");
          }(n2)) || function(e3) {
            var n3;
            return !!(n3 = e3.closest("span") ? e3.parentElement : !!e3.closest("li") && e3) && (s(n3.children).forEach(function(e4) {
              e4.matches("ul") && t3.openPanel(e4);
            }), true);
          }(n2)) || function(e3) {
            var n3 = i(".mm-spn--open", e3), o3 = n3[n3.length - 1];
            if (o3) {
              var s2 = o3.parentElement.closest("ul");
              if (s2)
                return t3.openPanel(s2), true;
            }
            return false;
          }(n2)) && e2.stopImmediatePropagation();
        });
      }, t2;
    }(), c = function() {
      function t2(t3, e2) {
        var n2 = this;
        void 0 === t3 && (t3 = null), this.wrapper = document.createElement("div"), this.wrapper.classList.add("mm-ocd"), this.wrapper.classList.add("mm-ocd--" + e2), this.content = document.createElement("div"), this.content.classList.add("mm-ocd__content"), this.wrapper.append(this.content), this.backdrop = document.createElement("div"), this.backdrop.classList.add("mm-ocd__backdrop"), this.wrapper.append(this.backdrop), document.body.append(this.wrapper), t3 && this.content.append(t3);
        var o2 = function(t4) {
          n2.close(), t4.stopImmediatePropagation();
        };
        this.backdrop.addEventListener("touchstart", o2, { passive: true }), this.backdrop.addEventListener("mousedown", o2, { passive: true });
      }
      return Object.defineProperty(t2.prototype, "prefix", { get: function() {
        return "mm-ocd";
      }, enumerable: false, configurable: true }), t2.prototype.open = function() {
        this.wrapper.classList.add("mm-ocd--open"), document.body.classList.add("mm-ocd-opened");
      }, t2.prototype.close = function() {
        this.wrapper.classList.remove("mm-ocd--open"), document.body.classList.remove("mm-ocd-opened");
      }, t2;
    }(), d = function() {
      function t2(t3, e2) {
        void 0 === e2 && (e2 = "all"), this.menu = t3, this.toggler = new o(e2);
      }
      return t2.prototype.navigation = function(t3) {
        var e2 = this;
        if (!this.navigator) {
          var n2 = (t3 = t3 || {}).title, o2 = void 0 === n2 ? "Menu" : n2, s2 = t3.selectedClass, i2 = void 0 === s2 ? "Selected" : s2, r2 = t3.slidingSubmenus, c2 = void 0 === r2 || r2, d2 = t3.theme, l = void 0 === d2 ? "light" : d2;
          this.navigator = new a(this.menu, o2, i2, c2, l), this.toggler.add(function() {
            return e2.menu.classList.add(e2.navigator.prefix);
          }, function() {
            return e2.menu.classList.remove(e2.navigator.prefix);
          });
        }
        return this.navigator;
      }, t2.prototype.offcanvas = function(t3) {
        var e2 = this;
        if (!this.drawer) {
          var n2 = (t3 = t3 || {}).position, o2 = void 0 === n2 ? "left" : n2;
          this.drawer = new c(null, o2);
          var s2 = document.createComment("original menu location");
          this.menu.after(s2), this.toggler.add(function() {
            e2.drawer.content.append(e2.menu);
          }, function() {
            e2.drawer.close(), s2.after(e2.menu);
          });
        }
        return this.drawer;
      }, t2;
    }();
    e.default = d;
    window.MmenuLight = d;
  }]);

  // library/js/src/modules/mMenu.js
  var $5 = jQuery;
  function setupMMenu() {
    const MmenuLight = window.MmenuLight;
    var menu = new MmenuLight(document.querySelector("#mmenu"), "(max-width: 1420px)");
    menu.navigation({
      // selectedClass: 'Selected',
      // slidingSubmenus: true,
      // theme: 'dark',
      // title: 'Menu'
    });
    var drawer = menu.offcanvas({
      // position: 'left'
    });
    $5(".hamburger").click(function(e) {
      e.preventDefault();
      if ($5("body").hasClass("mm-ocd-opened")) {
        drawer.close();
      } else {
        drawer.open();
      }
    });
  }

  // library/js/src/modules/mfa.js
  var $6 = jQuery;
  Promise.resolve().then(() => __toESM(require_jsrender()));
  function makeDropdownListLanguages() {
    let menu = $6("#inner-header .small-menu .languages");
    let li = menu.find("ul li");
    if (li.length > 1) {
      li.each(function() {
        if ($6(this).hasClass("active")) {
          $6(this).addClass("menu-item-has-children");
          $6(this).append("<ul class='sub-menu'></ul>");
        }
      });
      li.each(function() {
        if (!$6(this).hasClass("active")) {
          menu.find(".sub-menu").append($6(this));
        }
      });
    }
    menu.show();
  }
  function setupModalVideos() {
    var videoModals = $6(".modal-video");
    (0, import_fitvids.default)(".modal-video .iframe-holder");
    videoModals.each(function(i) {
      var modal_id = videoModals.eq(i).data("modal_id");
      videoModals.eq(i).on("show", function() {
        playVideoWithId(modal_id + "-iframe");
        (0, import_fitvids.default)(".modal-video .iframe-holder");
      });
      videoModals.eq(i).on("hide", function() {
        stopAllVideos();
      });
    });
  }
  function setupCaseSliders() {
    if ($6(".block-case-slider .case-slider").length) {
      import_uikit_min2.default.slider(".block-case-slider .case-slider");
      var caseSliderItem = $6(".block-case-slider .case-slider ul > li");
      caseSliderItem.on("beforeitemhide", function() {
        stopAllVideos();
      });
    }
  }
  function stopAllVideos() {
    $6(".video-holder-vimeo iframe").each(function() {
      var player = new Vimeo.Player(this);
      player.pause();
    });
  }
  function playVideoWithId(id) {
    stopAllVideos();
    var iframe = document.querySelector("#" + id);
    var player = new Vimeo.Player(iframe);
    var playPromise = player.play();
    if (playPromise !== void 0) {
      playPromise.then().catch();
    }
  }
  function setupVideoHolders() {
    (0, import_fitvids.default)(".video-holder");
    $6(".video-holder .playbutton-image").click(function(e) {
      e.preventDefault();
      $6(this).fadeOut();
      playVideoWithId($6(this).data("target-id"));
      return false;
    });
    window.addEventListener("CookiebotOnTagsExecuted", function() {
      (0, import_fitvids.default)(".video-holder");
    });
  }
  function setupStickyScroll() {
    import_uikit_min2.default.util.on(document, "beforescroll", "#sticky-holder-holder a", function() {
      $6("#menu-hider").css({ "z-index": 4e3 });
      setTimeout(function() {
        $6("#menu-hider").css({ "z-index": 0 });
      }, 2e3);
    });
  }
  function setupPeopleLinks() {
    $6(".go-to-scroll-details").each(function(i) {
      $6(this).click(function() {
        showPeopleDetail(i);
      });
    });
    $6("#people-switcher-el li a").each(function(i) {
      $6(this).click(function(e) {
        $6(".go-to-scroll-details").removeClass("active");
        $6(".go-to-scroll-details").eq(i).addClass("active");
        e.preventDefault();
        $6(".people-details-switcher > li").hide();
        $6(".people-details-switcher > li").eq(i).show();
        $6("#people-switcher-el li a").removeClass("active");
        $6(this).addClass("active");
        return false;
      });
    });
    showPeopleDetail(0);
  }
  function showPeopleDetail(j) {
    $6("#people-switcher-el li a").eq(j).click();
  }
  function setupFilterOnArchives() {
    if (!$6("body").hasClass("archive")) {
      return false;
    }
    $6("#filter-holder").on("afterFilter", function() {
      $6(".case-overview-grid > a:hidden").attr("data-order", 0);
      let i = 1;
      $6(".case-overview-grid > a:visible").each(function() {
        $6(this).attr("data-order", i);
        i++;
      });
    });
  }
  function setupArticles() {
    if (!$6("body").hasClass("single")) {
      return false;
    }
    setupHeaderOnCases();
  }
  function setupHeaderOnCases() {
    import_uikit_min2.default.scrollspy(".single-case .page-header-holder", { repeat: true });
    import_uikit_min2.default.util.on(document, "inview", ".single-case .page-header-holder", function() {
      $6("body").removeClass("menu-white-bg");
    });
    import_uikit_min2.default.util.on(document, "outview", ".single-case .page-header-holder", function() {
      $6("body").addClass("menu-white-bg");
    });
  }
  function init2() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $6("body").addClass("mobile");
    } else {
      $6("body").addClass("not_mobile");
    }
    makeDropdownListLanguages();
    setupCaseSliders();
    setupModalVideos();
    setupVideoHolders();
    setupStickyScroll();
    setupPeopleLinks();
    setupArticles();
    setupFilterOnArchives();
    (0, import_fitvids.default)(".single article.post");
    if ($6(".block-related-blogposts").length > 0) {
      setupRelatedBlogposts();
    }
    if ($6("body").hasClass("page-template-page-prices")) {
      setupPriceCalculator();
    }
    init();
    setupMMenu();
  }

  // library/js/src/modules/jobs.js
  var $7 = jQuery;
  Promise.resolve().then(() => __toESM(require_jsrender()));
  var idArray = [];
  var hash = "";
  function _getShortDescription(desc) {
    const regex = /<p>(.*?)<\/p>/;
    const corresp = regex.exec(desc);
    const firstParagraph = corresp ? corresp[0] : "";
    return firstParagraph;
  }
  function _showRemainingHours(hours) {
    return '<span class="lang-nl">Nog ' + Math.ceil(hours) + ' uur</span><span class="lang-fr">Plus que ' + Math.ceil(hours) + ' heurs</span><span class="lang-en">' + Math.ceil(hours) + " hours left</span>";
  }
  function _showRemainingDays(hours) {
    return '<span class="lang-nl">Nog ' + Math.ceil(hours) + ' dagen</span><span class="lang-fr">Plus que ' + Math.ceil(hours) + ' jours</span><span class="lang-en">' + Math.ceil(hours) + " days left</span>";
  }
  function _showRemainingWeeks(hours) {
    return '<span class="lang-nl">Nog ' + Math.ceil(hours) + ' weken</span><span class="lang-fr">Plus que ' + Math.ceil(hours) + ' semaines</span><span class="lang-en">' + Math.ceil(hours) + " weeks left</span>";
  }
  function _showRemainingMonths(hours) {
    return '<span class="lang-nl">Nog ' + Math.ceil(hours) + ' maanden</span><span class="lang-fr">Plus que ' + Math.ceil(hours) + ' mois</span><span class="lang-en">' + Math.ceil(hours) + " months left</span>";
  }
  function _showRemainingYears(hours) {
    return '<span class="lang-nl">Nog ' + Math.round((hours + Number.EPSILON) * 10) / 10 + ' jaar</span><span class="lang-fr">Plus que ' + Math.round((hours + Number.EPSILON) * 10) / 10 + ' ans</span><span class="lang-en">' + Math.round((hours + Number.EPSILON) * 10) / 10 + " years left</span>";
  }
  function _calculateRemainingTime(timestamp) {
    const endDate = new Date(timestamp);
    const today = /* @__PURE__ */ new Date();
    const diff = new Date(endDate - today);
    const hours = diff / 1e3 / 60 / 60;
    const days = diff / 1e3 / 60 / 60 / 24;
    const weeks = diff / 1e3 / 60 / 60 / 24 / 7;
    const months = diff / 1e3 / 60 / 60 / 24 / 30;
    const years = diff / 1e3 / 60 / 60 / 24 / 365;
    if (days <= 0) {
      return "";
    } else if (days <= 1) {
      return _showRemainingHours(hours);
    } else if (days <= 10) {
      return _showRemainingDays(days);
    } else if (weeks <= 10) {
      return _showRemainingWeeks(weeks);
    } else if (months <= 12) {
      return _showRemainingMonths(months);
    } else {
      return _showRemainingYears(years);
    }
  }
  function _prettyIntro(introduction) {
    let intro = "";
    if (introduction) {
      intro = introduction;
    }
    return intro;
  }
  function showAllJobs() {
    $7("#jobs-overview").show();
    $7("#jobs-details").hide();
    if (window.location.hash) {
      hash = window.location.href.split("#")[1];
      if (hashExists(hash)) {
        $7("#jobs-overview").hide();
        $7("#jobs-details").show();
        $7(".jobs-detail").hide();
        $7("#jobs-detail-" + hash).show();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }
  function hashExists(hash2) {
    return idArray.indexOf(hash2) >= 0;
  }
  function _showNiceLanguage() {
    if ($7("body").hasClass("lang-nl")) {
      return "Nederlands";
    } else if ($7("body").hasClass("lang-fr")) {
      return "Fran\xE7ais";
    } else if ($7("body").hasClass("lang-en")) {
      return "English";
    }
  }
  function compareDates(a, b) {
    if (a.to < b.to) {
      return -1;
    }
    if (a.to > b.to) {
      return 1;
    }
    return 0;
  }
  function _sortJobsByDate(jobs) {
    return jobs.sort(compareDates);
  }
  function setupJobsPage(data) {
    if (data && data.records) {
      data.records = _sortJobsByDate(data.records);
      data.records.forEach(function(vacature) {
        var id = vacature._id;
        idArray.push(id);
        var vacatureTile = $7.templates("#vacature-template").render({
          language: _showNiceLanguage(),
          _id: id,
          salary: vacature.salary,
          location: vacature.location,
          category: vacature.function,
          client: vacature.client,
          introduction: _prettyIntro(vacature.introduction),
          short_description: _getShortDescription(vacature.description),
          title: vacature.title,
          timeRemaining: _calculateRemainingTime(vacature.to),
          external_id: vacature._id,
          function: vacature.function,
          description: vacature.description,
          offer: vacature.offer,
          about: vacature.about
        });
        $7("#vacatures-overview").append(vacatureTile);
        var vacatureDetailTile = $7.templates("#vacature-detail-template").render({
          language: _showNiceLanguage(),
          _id: id,
          salary: vacature.salary,
          location: vacature.location,
          category: vacature.function,
          client: vacature.client,
          introduction: _prettyIntro(vacature.introduction),
          short_description: _getShortDescription(vacature.description),
          title: vacature.title,
          timeRemaining: _calculateRemainingTime(vacature.to),
          external_id: vacature._id,
          function: vacature.function,
          description: vacature.description,
          offer: vacature.offer,
          about: vacature.about
        });
        $7("#jobs-detail-list").append(vacatureDetailTile);
      });
      $7(".block-jobs.jobs-overview-loading").removeClass("jobs-overview-loading").addClass("jobs-overview-loaded");
      if (data.records.length == 0) {
        $7("body").addClass("jobs-overview-has-no-jobs");
      } else {
        $7("body").removeClass("jobs-overview-has-no-jobs");
      }
      showAllJobs();
    }
    window.addEventListener("hashchange", () => {
      showAllJobs();
    }, false);
  }
  function setupMenuCounter(data) {
    if (data && data.records) {
      $7(".vacatures-counter a").append("<span class='number-vacatures'>" + data.records.length + "</span>");
    } else {
      $7(".vacatures-counter a").append("<span class='number-vacatures'>0</span>");
    }
    $7(".vacatures-counter").addClass("numberOfJobsReady");
  }
  function connectJobsAPI() {
    let jobs_url = "https://jobs-api.mediaforta.com/api/v1/website/jobs";
    if ($7("body").hasClass("lang-nl")) {
      jobs_url = "https://jobs-api.mediaforta.com/api/v1/website/jobs/nl";
    } else if ($7("body").hasClass("lang-fr")) {
      jobs_url = "https://jobs-api.mediaforta.com/api/v1/website/jobs/fr";
    } else if ($7("body").hasClass("lang-en")) {
      jobs_url = "https://jobs-api.mediaforta.com/api/v1/website/jobs/en";
    }
    var request = $7.ajax({
      url: jobs_url,
      method: "GET",
      dataType: "json"
    });
    request.done(function(data) {
      setupMenuCounter(data);
      if ($7("body").hasClass("page-template-page-jobs") || $7("body").hasClass("page-template-page-people-netwerk")) {
        setupJobsPage(data);
      }
    });
  }
  function init3() {
    if ($7("body").hasClass("page-template-page-jobs") || $7("body").hasClass("page-template-page-people-netwerk")) {
      $7("body").addClass("jobs-overview-has-no-jobs");
      idArray = [];
    }
    connectJobsAPI();
  }

  // library/js/src/modules/sliderProgressBar.js
  var import_uikit_min3 = __toESM(require_uikit_min());
  var $8 = jQuery;
  var progressBar;
  var shownSlide;
  var aantalSlides = 0;
  function _setPos(el, shownSlide2, aantalSlides2) {
    let w = 100 / aantalSlides2 * (shownSlide2 + 1);
    el.css({
      // "left" : p.toString() + "%",
      "width": w.toString() + "%"
    });
  }
  function setupAllProgressBars() {
    $8(".people-block-ontdek").each(function() {
      let id = $8(this).attr("id");
      setupProgressBar(id);
    });
  }
  function setupProgressBar(sliderBlockID) {
    aantalSlides = $8("#" + sliderBlockID + " .uk-slider-items > li").length;
    progressBar = $8("#" + sliderBlockID + " .slider-progress-holder .slider-progress-bar");
    $8("#" + sliderBlockID).attr("aantalSlides", aantalSlides);
    $8("#" + sliderBlockID).attr("shownSlide", 1);
    _setPos(progressBar, 0, aantalSlides);
    import_uikit_min3.default.util.on(document, "itemshown", "#" + sliderBlockID + " .uk-slider", function(e, b) {
      shownSlide = b.index;
      progressBar = $8("#" + sliderBlockID + " .slider-progress-holder .slider-progress-bar");
      _setPos(progressBar, shownSlide, aantalSlides);
    });
  }

  // library/js/src/scripts.js
  jQuery(document).ready(function() {
    init2();
    init3();
    setupAllProgressBars();
  });
})();
/*! UIkit 3.15.17 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */
/*! JsRender v1.0.11: http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
