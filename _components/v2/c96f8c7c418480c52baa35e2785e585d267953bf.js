const yg = () => Promise.resolve().then(() => pg), { Fragment: gg, jsx: R, jsxs: ee } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
const Su = globalThis.__GLOBALS__.React, { Children: Ru, cloneElement: Eu, Component: ri, createContext: he, createElement: $, createFactory: Mu, createRef: Du, forwardRef: Et, Fragment: ot, isValidElement: Cu, lazy: Au, memo: Yo, Profiler: Lu, PureComponent: Vu, startTransition: un, StrictMode: Iu, Suspense: ku, use: Fu, useCallback: ut, useContext: U, useDebugValue: Ou, useDeferredValue: Nu, useEffect: Ue, useId: Xo, useImperativeHandle: ju, useInsertionEffect: qo, useLayoutEffect: tr, useMemo: be, useReducer: Bu, useRef: Je, useState: _e, useSyncExternalStore: Uu, useTransition: $u, version: _u } = globalThis.__GLOBALS__.React, zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Ru,
  Component: ri,
  Fragment: ot,
  Profiler: Lu,
  PureComponent: Vu,
  StrictMode: Iu,
  Suspense: ku,
  cloneElement: Eu,
  createContext: he,
  createElement: $,
  createFactory: Mu,
  createRef: Du,
  default: Su,
  forwardRef: Et,
  isValidElement: Cu,
  lazy: Au,
  memo: Yo,
  startTransition: un,
  use: Fu,
  useCallback: ut,
  useContext: U,
  useDebugValue: Ou,
  useDeferredValue: Nu,
  useEffect: Ue,
  useId: Xo,
  useImperativeHandle: ju,
  useInsertionEffect: qo,
  useLayoutEffect: tr,
  useMemo: be,
  useReducer: Bu,
  useRef: Je,
  useState: _e,
  useSyncExternalStore: Uu,
  useTransition: $u,
  version: _u
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Zo = (e) => {
  throw TypeError(e);
}, Wu = (e, t, n) => t.has(e) || Zo("Cannot " + n), dr = (e, t, n) => (Wu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Hu = (e, t, n) => t.has(e) ? Zo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), sa = "popstate";
function Ku(e = {}) {
  function t(r, i) {
    let { pathname: o, search: a, hash: s } = r.location;
    return cn(
      "",
      { pathname: o, search: a, hash: s },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ke(i);
  }
  return Yu(
    t,
    n,
    null,
    e
  );
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function de(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Gu() {
  return Math.random().toString(36).substring(2, 10);
}
function la(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function cn(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? ct(t) : t,
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Gu()
  };
}
function Ke({
  pathname: e = "/",
  search: t = "",
  hash: n = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function ct(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Yu(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: o = !1 } = r, a = i.history, s = "POP", l = null, u = c();
  u == null && (u = 0, a.replaceState({ ...a.state, idx: u }, ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = "POP";
    let x = c(), T = x == null ? null : x - u;
    u = x, l && l({ action: s, location: w.location, delta: T });
  }
  function h(x, T) {
    s = "PUSH";
    let b = cn(w.location, x, T);
    u = c() + 1;
    let P = la(b, u), L = w.createHref(b);
    try {
      a.pushState(P, "", L);
    } catch (D) {
      if (D instanceof DOMException && D.name === "DataCloneError")
        throw D;
      i.location.assign(L);
    }
    o && l && l({ action: s, location: w.location, delta: 1 });
  }
  function m(x, T) {
    s = "REPLACE";
    let b = cn(w.location, x, T);
    u = c();
    let P = la(b, u), L = w.createHref(b);
    a.replaceState(P, "", L), o && l && l({ action: s, location: w.location, delta: 0 });
  }
  function y(x) {
    return Jo(x);
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(i, a);
    },
    listen(x) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(sa, d), l = x, () => {
        i.removeEventListener(sa, d), l = null;
      };
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: y,
    encodeLocation(x) {
      let T = y(x);
      return {
        pathname: T.pathname,
        search: T.search,
        hash: T.hash
      };
    },
    push: h,
    replace: m,
    go(x) {
      return a.go(x);
    }
  };
  return w;
}
function Jo(e, t = !1) {
  let n = "http://localhost";
  typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href), W(n, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : Ke(e);
  return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n);
}
var Qt, ua = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(e) {
    if (Hu(this, Qt, /* @__PURE__ */ new Map()), e)
      for (let [t, n] of e)
        this.set(t, n);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(e) {
    if (dr(this, Qt).has(e))
      return dr(this, Qt).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(e, t) {
    dr(this, Qt).set(e, t);
  }
};
Qt = /* @__PURE__ */ new WeakMap();
var Xu = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function qu(e) {
  return Xu.has(
    e
  );
}
var Zu = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function Ju(e) {
  return Zu.has(
    e
  );
}
function Qu(e) {
  return e.index === !0;
}
function dn(e, t, n = [], r = {}, i = !1) {
  return e.map((o, a) => {
    let s = [...n, String(a)], l = typeof o.id == "string" ? o.id : s.join("-");
    if (W(
      o.index !== !0 || !o.children,
      "Cannot specify children on an index route"
    ), W(
      i || !r[l],
      `Found a route id collision on id "${l}".  Route id's must be globally unique within Data Router usages`
    ), Qu(o)) {
      let u = {
        ...o,
        id: l
      };
      return r[l] = ca(
        u,
        t(u)
      ), u;
    } else {
      let u = {
        ...o,
        id: l,
        children: void 0
      };
      return r[l] = ca(
        u,
        t(u)
      ), o.children && (u.children = dn(
        o.children,
        t,
        s,
        r,
        i
      )), u;
    }
  });
}
function ca(e, t) {
  return Object.assign(e, {
    ...t,
    ...typeof t.lazy == "object" && t.lazy != null ? {
      lazy: {
        ...e.lazy,
        ...t.lazy
      }
    } : {}
  });
}
function rt(e, t, n = "/") {
  return en(e, t, n, !1);
}
function en(e, t, n, r) {
  let i = typeof t == "string" ? ct(t) : t, o = Ne(i.pathname || "/", n);
  if (o == null)
    return null;
  let a = Qo(e);
  tc(a);
  let s = null;
  for (let l = 0; s == null && l < a.length; ++l) {
    let u = hc(o);
    s = cc(
      a[l],
      u,
      r
    );
  }
  return s;
}
function ec(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle
  };
}
function Qo(e, t = [], n = [], r = "", i = !1) {
  let o = (a, s, l = i, u) => {
    let c = {
      relativePath: u === void 0 ? a.path || "" : u,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: s,
      route: a
    };
    if (c.relativePath.startsWith("/")) {
      if (!c.relativePath.startsWith(r) && l)
        return;
      W(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), c.relativePath = c.relativePath.slice(r.length);
    }
    let d = ze([r, c.relativePath]), h = n.concat(c);
    a.children && a.children.length > 0 && (W(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      a.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${d}".`
    ), Qo(
      a.children,
      t,
      h,
      d,
      l
    )), !(a.path == null && !a.index) && t.push({
      path: d,
      score: lc(d, a.index),
      routesMeta: h
    });
  };
  return e.forEach((a, s) => {
    if (a.path === "" || !a.path?.includes("?"))
      o(a, s);
    else
      for (let l of es(a.path))
        o(a, s, !0, l);
  }), t;
}
function es(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let a = es(r.join("/")), s = [];
  return s.push(
    ...a.map(
      (l) => l === "" ? o : [o, l].join("/")
    )
  ), i && s.push(...a), s.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function tc(e) {
  e.sort(
    (t, n) => t.score !== n.score ? n.score - t.score : uc(
      t.routesMeta.map((r) => r.childrenIndex),
      n.routesMeta.map((r) => r.childrenIndex)
    )
  );
}
var nc = /^:[\w-]+$/, rc = 3, ic = 2, ac = 1, oc = 10, sc = -2, da = (e) => e === "*";
function lc(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(da) && (r += sc), t && (r += ic), n.filter((i) => !da(i)).reduce(
    (i, o) => i + (nc.test(o) ? rc : o === "" ? ac : oc),
    r
  );
}
function uc(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function cc(e, t, n = !1) {
  let { routesMeta: r } = e, i = {}, o = "/", a = [];
  for (let s = 0; s < r.length; ++s) {
    let l = r[s], u = s === r.length - 1, c = o === "/" ? t : t.slice(o.length) || "/", d = Xn(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
      c
    ), h = l.route;
    if (!d && u && n && !r[r.length - 1].route.index && (d = Xn(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      c
    )), !d)
      return null;
    Object.assign(i, d.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: ze([o, d.pathname]),
      pathnameBase: pc(
        ze([o, d.pathnameBase])
      ),
      route: h
    }), d.pathnameBase !== "/" && (o = ze([o, d.pathnameBase]));
  }
  return a;
}
function Xn(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = dc(
    e.path,
    e.caseSensitive,
    e.end
  ), i = t.match(n);
  if (!i) return null;
  let o = i[0], a = o.replace(/(.)\/+$/, "$1"), s = i.slice(1);
  return {
    params: r.reduce(
      (u, { paramName: c, isOptional: d }, h) => {
        if (c === "*") {
          let y = s[h] || "";
          a = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
        }
        const m = s[h];
        return d && !m ? u[c] = void 0 : u[c] = (m || "").replace(/%2F/g, "/"), u;
      },
      {}
    ),
    pathname: o,
    pathnameBase: a,
    pattern: e
  };
}
function dc(e, t = !1, n = !0) {
  de(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (a, s, l) => (r.push({ paramName: s, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function hc(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return de(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function Ne(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function fc({
  basename: e,
  pathname: t
}) {
  return t === "/" ? e : ze([e, t]);
}
var ts = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ii = (e) => ts.test(e);
function mc(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? ct(e) : e, o;
  return n ? (n = n.replace(/\/\/+/g, "/"), n.startsWith("/") ? o = ha(n.substring(1), "/") : o = ha(n, t)) : o = t, {
    pathname: o,
    search: yc(r),
    hash: gc(i)
  };
}
function ha(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function hr(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ns(e) {
  return e.filter(
    (t, n) => n === 0 || t.route.path && t.route.path.length > 0
  );
}
function ai(e) {
  let t = ns(e);
  return t.map(
    (n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase
  );
}
function oi(e, t, n, r = !1) {
  let i;
  typeof e == "string" ? i = ct(e) : (i = { ...e }, W(
    !i.pathname || !i.pathname.includes("?"),
    hr("?", "pathname", "search", i)
  ), W(
    !i.pathname || !i.pathname.includes("#"),
    hr("#", "pathname", "hash", i)
  ), W(
    !i.search || !i.search.includes("#"),
    hr("#", "search", "hash", i)
  ));
  let o = e === "" || i.pathname === "", a = o ? "/" : i.pathname, s;
  if (a == null)
    s = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; )
        h.shift(), d -= 1;
      i.pathname = h.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = mc(i, s), u = a && a !== "/" && a.endsWith("/"), c = (o || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
var ze = (e) => e.join("/").replace(/\/\/+/g, "/"), pc = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), yc = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, gc = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, bn = class {
  constructor(e, t, n, r = !1) {
    this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
  }
};
function hn(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function wn(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var rs = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function is(e, t) {
  let n = e;
  if (typeof n != "string" || !ts.test(n))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: n
    };
  let r = n, i = !1;
  if (rs)
    try {
      let o = new URL(window.location.href), a = n.startsWith("//") ? new URL(o.protocol + n) : new URL(n), s = Ne(a.pathname, t);
      a.origin === o.origin && s != null ? n = s + a.search + a.hash : i = !0;
    } catch {
      de(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: r,
    isExternal: i,
    to: n
  };
}
var at = Symbol("Uninstrumented");
function vc(e, t) {
  let n = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  e.forEach(
    (i) => i({
      id: t.id,
      index: t.index,
      path: t.path,
      instrument(o) {
        let a = Object.keys(n);
        for (let s of a)
          o[s] && n[s].push(o[s]);
      }
    })
  );
  let r = {};
  if (typeof t.lazy == "function" && n.lazy.length > 0) {
    let i = Lt(n.lazy, t.lazy, () => {
    });
    i && (r.lazy = i);
  }
  if (typeof t.lazy == "object") {
    let i = t.lazy;
    ["middleware", "loader", "action"].forEach((o) => {
      let a = i[o], s = n[`lazy.${o}`];
      if (typeof a == "function" && s.length > 0) {
        let l = Lt(s, a, () => {
        });
        l && (r.lazy = Object.assign(r.lazy || {}, {
          [o]: l
        }));
      }
    });
  }
  return ["loader", "action"].forEach((i) => {
    let o = t[i];
    if (typeof o == "function" && n[i].length > 0) {
      let a = o[at] ?? o, s = Lt(
        n[i],
        a,
        (...l) => fa(l[0])
      );
      s && (i === "loader" && a.hydrate === !0 && (s.hydrate = !0), s[at] = a, r[i] = s);
    }
  }), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((i) => {
    let o = i[at] ?? i, a = Lt(
      n.middleware,
      o,
      (...s) => fa(s[0])
    );
    return a ? (a[at] = o, a) : i;
  })), r;
}
function bc(e, t) {
  let n = {
    navigate: [],
    fetch: []
  };
  if (t.forEach(
    (r) => r({
      instrument(i) {
        let o = Object.keys(i);
        for (let a of o)
          i[a] && n[a].push(i[a]);
      }
    })
  ), n.navigate.length > 0) {
    let r = e.navigate[at] ?? e.navigate, i = Lt(
      n.navigate,
      r,
      (...o) => {
        let [a, s] = o;
        return {
          to: typeof a == "number" || typeof a == "string" ? a : a ? Ke(a) : ".",
          ...ma(e, s ?? {})
        };
      }
    );
    i && (i[at] = r, e.navigate = i);
  }
  if (n.fetch.length > 0) {
    let r = e.fetch[at] ?? e.fetch, i = Lt(n.fetch, r, (...o) => {
      let [a, , s, l] = o;
      return {
        href: s ?? ".",
        fetcherKey: a,
        ...ma(e, l ?? {})
      };
    });
    i && (i[at] = r, e.fetch = i);
  }
  return e;
}
function Lt(e, t, n) {
  return e.length === 0 ? null : async (...r) => {
    let i = await as(
      e,
      n(...r),
      () => t(...r),
      e.length - 1
    );
    if (i.type === "error")
      throw i.value;
    return i.value;
  };
}
async function as(e, t, n, r) {
  let i = e[r], o;
  if (i) {
    let a, s = async () => (a ? console.error("You cannot call instrumented handlers more than once") : a = as(e, t, n, r - 1), o = await a, W(o, "Expected a result"), o.type === "error" && o.value instanceof Error ? { status: "error", error: o.value } : { status: "success", error: void 0 });
    try {
      await i(s, t);
    } catch (l) {
      console.error("An instrumentation function threw an error:", l);
    }
    a || await s(), await a;
  } else
    try {
      o = { type: "success", value: await n() };
    } catch (a) {
      o = { type: "error", value: a };
    }
  return o || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function fa(e) {
  let { request: t, context: n, params: r, unstable_pattern: i } = e;
  return {
    request: wc(t),
    params: { ...r },
    unstable_pattern: i,
    context: xc(n)
  };
}
function ma(e, t) {
  return {
    currentUrl: Ke(e.state.location),
    ..."formMethod" in t ? { formMethod: t.formMethod } : {},
    ..."formEncType" in t ? { formEncType: t.formEncType } : {},
    ..."formData" in t ? { formData: t.formData } : {},
    ..."body" in t ? { body: t.body } : {}
  };
}
function wc(e) {
  return {
    method: e.method,
    url: e.url,
    headers: {
      get: (...t) => e.headers.get(...t)
    }
  };
}
function xc(e) {
  if (Pc(e)) {
    let t = { ...e };
    return Object.freeze(t), t;
  } else
    return {
      get: (t) => e.get(t)
    };
}
var Tc = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Pc(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Tc;
}
var os = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], Sc = new Set(
  os
), Rc = [
  "GET",
  ...os
], Ec = new Set(Rc), ss = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Mc = /* @__PURE__ */ new Set([307, 308]), fr = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Dc = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Xt = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, Cc = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), ls = "remix-router-transitions", us = Symbol("ResetLoaderData");
function Ac(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || Cc, o = i;
  if (e.unstable_instrumentations) {
    let f = e.unstable_instrumentations;
    o = (p) => ({
      ...i(p),
      ...vc(
        f.map((v) => v.route).filter(Boolean),
        p
      )
    });
  }
  let a = {}, s = dn(
    e.routes,
    o,
    void 0,
    a
  ), l, u = e.basename || "/";
  u.startsWith("/") || (u = `/${u}`);
  let c = e.dataStrategy || Fc, d = {
    ...e.future
  }, h = null, m = /* @__PURE__ */ new Set(), y = null, w = null, x = null, T = e.hydrationData != null, b = rt(s, e.history.location, u), P = !1, L = null, D;
  if (b == null && !e.patchRoutesOnNavigation) {
    let f = ke(404, {
      pathname: e.history.location.pathname
    }), { matches: p, route: v } = On(s);
    D = !0, b = p, L = { [v.id]: f };
  } else if (b && !e.hydrationData && Ln(
    b,
    s,
    e.history.location.pathname
  ).active && (b = null), b)
    if (b.some((f) => f.route.lazy))
      D = !1;
    else if (!b.some((f) => si(f.route)))
      D = !0;
    else {
      let f = e.hydrationData ? e.hydrationData.loaderData : null, p = e.hydrationData ? e.hydrationData.errors : null;
      if (p) {
        let v = b.findIndex(
          (S) => p[S.route.id] !== void 0
        );
        D = b.slice(0, v + 1).every(
          (S) => !Ir(S.route, f, p)
        );
      } else
        D = b.every(
          (v) => !Ir(v.route, f, p)
        );
    }
  else {
    D = !1, b = [];
    let f = Ln(
      null,
      s,
      e.history.location.pathname
    );
    f.active && f.matches && (P = !0, b = f.matches);
  }
  let O, g = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: b,
    initialized: D,
    navigation: fr,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || L,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, M = "POP", _ = null, H = !1, G, se = !1, Re = /* @__PURE__ */ new Map(), ie = null, q = !1, te = !1, Z = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Map(), Q = 0, le = -1, Ee = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map(), Cn, Ht = null;
  function ou() {
    if (h = e.history.listen(
      ({ action: f, location: p, delta: v }) => {
        if (Cn) {
          Cn(), Cn = void 0;
          return;
        }
        de(
          ft.size === 0 || v != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let S = na({
          currentLocation: g.location,
          nextLocation: p,
          historyAction: f
        });
        if (S && v != null) {
          let E = new Promise((V) => {
            Cn = V;
          });
          e.history.go(v * -1), An(S, {
            state: "blocked",
            location: p,
            proceed() {
              An(S, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: p
              }), E.then(() => e.history.go(v));
            },
            reset() {
              let V = new Map(g.blockers);
              V.set(S, Xt), ye({ blockers: V });
            }
          }), _?.resolve(), _ = null;
          return;
        }
        return mt(f, p);
      }
    ), n) {
      Qc(t, Re);
      let f = () => ed(t, Re);
      t.addEventListener("pagehide", f), ie = () => t.removeEventListener("pagehide", f);
    }
    return g.initialized || mt("POP", g.location, {
      initialHydration: !0
    }), O;
  }
  function su() {
    h && h(), ie && ie(), m.clear(), G && G.abort(), g.fetchers.forEach((f, p) => lr(p)), g.blockers.forEach((f, p) => ta(p));
  }
  function lu(f) {
    return m.add(f), () => m.delete(f);
  }
  function ye(f, p = {}) {
    f.matches && (f.matches = f.matches.map((E) => {
      let V = a[E.route.id], C = E.route;
      return C.element !== V.element || C.errorElement !== V.errorElement || C.hydrateFallbackElement !== V.hydrateFallbackElement ? {
        ...E,
        route: V
      } : E;
    })), g = {
      ...g,
      ...f
    };
    let v = [], S = [];
    g.fetchers.forEach((E, V) => {
      E.state === "idle" && (Me.has(V) ? v.push(V) : S.push(V));
    }), Me.forEach((E) => {
      !g.fetchers.has(E) && !z.has(E) && v.push(E);
    }), [...m].forEach(
      (E) => E(g, {
        deletedFetchers: v,
        newErrors: f.errors ?? null,
        viewTransitionOpts: p.viewTransitionOpts,
        flushSync: p.flushSync === !0
      })
    ), v.forEach((E) => lr(E)), S.forEach((E) => g.fetchers.delete(E));
  }
  function Dt(f, p, { flushSync: v } = {}) {
    let S = g.actionData != null && g.navigation.formMethod != null && ve(g.navigation.formMethod) && g.navigation.state === "loading" && f.state?._isRedirect !== !0, E;
    p.actionData ? Object.keys(p.actionData).length > 0 ? E = p.actionData : E = null : S ? E = g.actionData : E = null;
    let V = p.loaderData ? Sa(
      g.loaderData,
      p.loaderData,
      p.matches || [],
      p.errors
    ) : g.loaderData, C = g.blockers;
    C.size > 0 && (C = new Map(C), C.forEach((N, k) => C.set(k, Xt)));
    let A = q ? !1 : ia(f, p.matches || g.matches), I = H === !0 || g.navigation.formMethod != null && ve(g.navigation.formMethod) && f.state?._isRedirect !== !0;
    l && (s = l, l = void 0), q || M === "POP" || (M === "PUSH" ? e.history.push(f, f.state) : M === "REPLACE" && e.history.replace(f, f.state));
    let F;
    if (M === "POP") {
      let N = Re.get(g.location.pathname);
      N && N.has(f.pathname) ? F = {
        currentLocation: g.location,
        nextLocation: f
      } : Re.has(f.pathname) && (F = {
        currentLocation: f,
        nextLocation: g.location
      });
    } else if (se) {
      let N = Re.get(g.location.pathname);
      N ? N.add(f.pathname) : (N = /* @__PURE__ */ new Set([f.pathname]), Re.set(g.location.pathname, N)), F = {
        currentLocation: g.location,
        nextLocation: f
      };
    }
    ye(
      {
        ...p,
        // matches, errors, fetchers go through as-is
        actionData: E,
        loaderData: V,
        historyAction: M,
        location: f,
        initialized: !0,
        navigation: fr,
        revalidation: "idle",
        restoreScrollPosition: A,
        preventScrollReset: I,
        blockers: C
      },
      {
        viewTransitionOpts: F,
        flushSync: v === !0
      }
    ), M = "POP", H = !1, se = !1, q = !1, te = !1, _?.resolve(), _ = null, Ht?.resolve(), Ht = null;
  }
  async function Yi(f, p) {
    if (_?.resolve(), _ = null, typeof f == "number") {
      _ || (_ = Da());
      let X = _.promise;
      return e.history.go(f), X;
    }
    let v = Vr(
      g.location,
      g.matches,
      u,
      f,
      p?.fromRouteId,
      p?.relative
    ), { path: S, submission: E, error: V } = pa(
      !1,
      v,
      p
    ), C = g.location, A = cn(g.location, S, p && p.state);
    A = {
      ...A,
      ...e.history.encodeLocation(A)
    };
    let I = p && p.replace != null ? p.replace : void 0, F = "PUSH";
    I === !0 ? F = "REPLACE" : I === !1 || E != null && ve(E.formMethod) && E.formAction === g.location.pathname + g.location.search && (F = "REPLACE");
    let N = p && "preventScrollReset" in p ? p.preventScrollReset === !0 : void 0, k = (p && p.flushSync) === !0, Y = na({
      currentLocation: C,
      nextLocation: A,
      historyAction: F
    });
    if (Y) {
      An(Y, {
        state: "blocked",
        location: A,
        proceed() {
          An(Y, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: A
          }), Yi(f, p);
        },
        reset() {
          let X = new Map(g.blockers);
          X.set(Y, Xt), ye({ blockers: X });
        }
      });
      return;
    }
    await mt(F, A, {
      submission: E,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: V,
      preventScrollReset: N,
      replace: p && p.replace,
      enableViewTransition: p && p.viewTransition,
      flushSync: k,
      callSiteDefaultShouldRevalidate: p && p.unstable_defaultShouldRevalidate
    });
  }
  function uu() {
    Ht || (Ht = Da()), sr(), ye({ revalidation: "loading" });
    let f = Ht.promise;
    return g.navigation.state === "submitting" ? f : g.navigation.state === "idle" ? (mt(g.historyAction, g.location, {
      startUninterruptedRevalidation: !0
    }), f) : (mt(
      M || g.historyAction,
      g.navigation.location,
      {
        overrideNavigation: g.navigation,
        // Proxy through any rending view transition
        enableViewTransition: se === !0
      }
    ), f);
  }
  async function mt(f, p, v) {
    G && G.abort(), G = null, M = f, q = (v && v.startUninterruptedRevalidation) === !0, wu(g.location, g.matches), H = (v && v.preventScrollReset) === !0, se = (v && v.enableViewTransition) === !0;
    let S = l || s, E = v && v.overrideNavigation, V = v?.initialHydration && g.matches && g.matches.length > 0 && !P ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      g.matches
    ) : rt(S, p, u), C = (v && v.flushSync) === !0;
    if (V && g.initialized && !te && zc(g.location, p) && !(v && v.submission && ve(v.submission.formMethod))) {
      Dt(p, { matches: V }, { flushSync: C });
      return;
    }
    let A = Ln(V, S, p.pathname);
    if (A.active && A.matches && (V = A.matches), !V) {
      let { error: fe, notFoundMatches: xe, route: J } = ur(
        p.pathname
      );
      Dt(
        p,
        {
          matches: xe,
          loaderData: {},
          errors: {
            [J.id]: fe
          }
        },
        { flushSync: C }
      );
      return;
    }
    G = new AbortController();
    let I = At(
      e.history,
      p,
      G.signal,
      v && v.submission
    ), F = e.getContext ? await e.getContext() : new ua(), N;
    if (v && v.pendingError)
      N = [
        it(V).route.id,
        { type: "error", error: v.pendingError }
      ];
    else if (v && v.submission && ve(v.submission.formMethod)) {
      let fe = await cu(
        I,
        p,
        v.submission,
        V,
        F,
        A.active,
        v && v.initialHydration === !0,
        { replace: v.replace, flushSync: C }
      );
      if (fe.shortCircuited)
        return;
      if (fe.pendingActionResult) {
        let [xe, J] = fe.pendingActionResult;
        if (De(J) && hn(J.error) && J.error.status === 404) {
          G = null, Dt(p, {
            matches: fe.matches,
            loaderData: {},
            errors: {
              [xe]: J.error
            }
          });
          return;
        }
      }
      V = fe.matches || V, N = fe.pendingActionResult, E = mr(p, v.submission), C = !1, A.active = !1, I = At(
        e.history,
        I.url,
        I.signal
      );
    }
    let {
      shortCircuited: k,
      matches: Y,
      loaderData: X,
      errors: me
    } = await du(
      I,
      p,
      V,
      F,
      A.active,
      E,
      v && v.submission,
      v && v.fetcherSubmission,
      v && v.replace,
      v && v.initialHydration === !0,
      C,
      N,
      v && v.callSiteDefaultShouldRevalidate
    );
    k || (G = null, Dt(p, {
      matches: Y || V,
      ...Ra(N),
      loaderData: X,
      errors: me
    }));
  }
  async function cu(f, p, v, S, E, V, C, A = {}) {
    sr();
    let I = Zc(p, v);
    if (ye({ navigation: I }, { flushSync: A.flushSync === !0 }), V) {
      let k = await Vn(
        S,
        p.pathname,
        f.signal
      );
      if (k.type === "aborted")
        return { shortCircuited: !0 };
      if (k.type === "error") {
        if (k.partialMatches.length === 0) {
          let { matches: X, route: me } = On(s);
          return {
            matches: X,
            pendingActionResult: [
              me.id,
              {
                type: "error",
                error: k.error
              }
            ]
          };
        }
        let Y = it(k.partialMatches).route.id;
        return {
          matches: k.partialMatches,
          pendingActionResult: [
            Y,
            {
              type: "error",
              error: k.error
            }
          ]
        };
      } else if (k.matches)
        S = k.matches;
      else {
        let { notFoundMatches: Y, error: X, route: me } = ur(
          p.pathname
        );
        return {
          matches: Y,
          pendingActionResult: [
            me.id,
            {
              type: "error",
              error: X
            }
          ]
        };
      }
    }
    let F, N = _n(S, p);
    if (!N.route.action && !N.route.lazy)
      F = {
        type: "error",
        error: ke(405, {
          method: f.method,
          pathname: p.pathname,
          routeId: N.route.id
        })
      };
    else {
      let k = Nt(
        o,
        a,
        f,
        S,
        N,
        C ? [] : r,
        E
      ), Y = await Kt(
        f,
        k,
        E,
        null
      );
      if (F = Y[N.route.id], !F) {
        for (let X of S)
          if (Y[X.route.id]) {
            F = Y[X.route.id];
            break;
          }
      }
      if (f.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (xt(F)) {
      let k;
      return A && A.replace != null ? k = A.replace : k = xa(
        F.response.headers.get("Location"),
        new URL(f.url),
        u,
        e.history
      ) === g.location.pathname + g.location.search, await pt(f, F, !0, {
        submission: v,
        replace: k
      }), { shortCircuited: !0 };
    }
    if (De(F)) {
      let k = it(S, N.route.id);
      return (A && A.replace) !== !0 && (M = "PUSH"), {
        matches: S,
        pendingActionResult: [
          k.route.id,
          F,
          N.route.id
        ]
      };
    }
    return {
      matches: S,
      pendingActionResult: [N.route.id, F]
    };
  }
  async function du(f, p, v, S, E, V, C, A, I, F, N, k, Y) {
    let X = V || mr(p, C), me = C || A || Ma(X), fe = !q && !F;
    if (E) {
      if (fe) {
        let ge = Xi(k);
        ye(
          {
            navigation: X,
            ...ge !== void 0 ? { actionData: ge } : {}
          },
          {
            flushSync: N
          }
        );
      }
      let K = await Vn(
        v,
        p.pathname,
        f.signal
      );
      if (K.type === "aborted")
        return { shortCircuited: !0 };
      if (K.type === "error") {
        if (K.partialMatches.length === 0) {
          let { matches: Ct, route: vt } = On(s);
          return {
            matches: Ct,
            loaderData: {},
            errors: {
              [vt.id]: K.error
            }
          };
        }
        let ge = it(K.partialMatches).route.id;
        return {
          matches: K.partialMatches,
          loaderData: {},
          errors: {
            [ge]: K.error
          }
        };
      } else if (K.matches)
        v = K.matches;
      else {
        let { error: ge, notFoundMatches: Ct, route: vt } = ur(
          p.pathname
        );
        return {
          matches: Ct,
          loaderData: {},
          errors: {
            [vt.id]: ge
          }
        };
      }
    }
    let xe = l || s, { dsMatches: J, revalidatingFetchers: Le } = ya(
      f,
      S,
      o,
      a,
      e.history,
      g,
      v,
      me,
      p,
      F ? [] : r,
      F === !0,
      te,
      Z,
      Me,
      Ce,
      Pe,
      xe,
      u,
      e.patchRoutesOnNavigation != null,
      k,
      Y
    );
    if (le = ++Q, !e.dataStrategy && !J.some((K) => K.shouldLoad) && !J.some(
      (K) => K.route.middleware && K.route.middleware.length > 0
    ) && Le.length === 0) {
      let K = Qi();
      return Dt(
        p,
        {
          matches: v,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: k && De(k[1]) ? { [k[0]]: k[1].error } : null,
          ...Ra(k),
          ...K ? { fetchers: new Map(g.fetchers) } : {}
        },
        { flushSync: N }
      ), { shortCircuited: !0 };
    }
    if (fe) {
      let K = {};
      if (!E) {
        K.navigation = X;
        let ge = Xi(k);
        ge !== void 0 && (K.actionData = ge);
      }
      Le.length > 0 && (K.fetchers = hu(Le)), ye(K, { flushSync: N });
    }
    Le.forEach((K) => {
      qe(K.key), K.controller && z.set(K.key, K.controller);
    });
    let yt = () => Le.forEach((K) => qe(K.key));
    G && G.signal.addEventListener(
      "abort",
      yt
    );
    let { loaderResults: Gt, fetcherResults: tt } = await qi(
      J,
      Le,
      f,
      S
    );
    if (f.signal.aborted)
      return { shortCircuited: !0 };
    G && G.signal.removeEventListener(
      "abort",
      yt
    ), Le.forEach((K) => z.delete(K.key));
    let $e = Nn(Gt);
    if ($e)
      return await pt(f, $e.result, !0, {
        replace: I
      }), { shortCircuited: !0 };
    if ($e = Nn(tt), $e)
      return Pe.add($e.key), await pt(f, $e.result, !0, {
        replace: I
      }), { shortCircuited: !0 };
    let { loaderData: cr, errors: Yt } = Pa(
      g,
      v,
      Gt,
      k,
      Le,
      tt
    );
    F && g.errors && (Yt = { ...g.errors, ...Yt });
    let gt = Qi(), In = ea(le), kn = gt || In || Le.length > 0;
    return {
      matches: v,
      loaderData: cr,
      errors: Yt,
      ...kn ? { fetchers: new Map(g.fetchers) } : {}
    };
  }
  function Xi(f) {
    if (f && !De(f[1]))
      return {
        [f[0]]: f[1].data
      };
    if (g.actionData)
      return Object.keys(g.actionData).length === 0 ? null : g.actionData;
  }
  function hu(f) {
    return f.forEach((p) => {
      let v = g.fetchers.get(p.key), S = qt(
        void 0,
        v ? v.data : void 0
      );
      g.fetchers.set(p.key, S);
    }), new Map(g.fetchers);
  }
  async function fu(f, p, v, S) {
    qe(f);
    let E = (S && S.flushSync) === !0, V = l || s, C = Vr(
      g.location,
      g.matches,
      u,
      v,
      p,
      S?.relative
    ), A = rt(V, C, u), I = Ln(A, V, C);
    if (I.active && I.matches && (A = I.matches), !A) {
      Xe(
        f,
        p,
        ke(404, { pathname: C }),
        { flushSync: E }
      );
      return;
    }
    let { path: F, submission: N, error: k } = pa(
      !0,
      C,
      S
    );
    if (k) {
      Xe(f, p, k, { flushSync: E });
      return;
    }
    let Y = e.getContext ? await e.getContext() : new ua(), X = (S && S.preventScrollReset) === !0;
    if (N && ve(N.formMethod)) {
      await mu(
        f,
        p,
        F,
        A,
        Y,
        I.active,
        E,
        X,
        N,
        S && S.unstable_defaultShouldRevalidate
      );
      return;
    }
    Ce.set(f, { routeId: p, path: F }), await pu(
      f,
      p,
      F,
      A,
      Y,
      I.active,
      E,
      X,
      N
    );
  }
  async function mu(f, p, v, S, E, V, C, A, I, F) {
    sr(), Ce.delete(f);
    let N = g.fetchers.get(f);
    Ye(f, Jc(I, N), {
      flushSync: C
    });
    let k = new AbortController(), Y = At(
      e.history,
      v,
      k.signal,
      I
    );
    if (V) {
      let ae = await Vn(
        S,
        new URL(Y.url).pathname,
        Y.signal,
        f
      );
      if (ae.type === "aborted")
        return;
      if (ae.type === "error") {
        Xe(f, p, ae.error, { flushSync: C });
        return;
      } else if (ae.matches)
        S = ae.matches;
      else {
        Xe(
          f,
          p,
          ke(404, { pathname: v }),
          { flushSync: C }
        );
        return;
      }
    }
    let X = _n(S, v);
    if (!X.route.action && !X.route.lazy) {
      let ae = ke(405, {
        method: I.formMethod,
        pathname: v,
        routeId: p
      });
      Xe(f, p, ae, { flushSync: C });
      return;
    }
    z.set(f, k);
    let me = Q, fe = Nt(
      o,
      a,
      Y,
      S,
      X,
      r,
      E
    ), xe = await Kt(
      Y,
      fe,
      E,
      f
    ), J = xe[X.route.id];
    if (!J) {
      for (let ae of fe)
        if (xe[ae.route.id]) {
          J = xe[ae.route.id];
          break;
        }
    }
    if (Y.signal.aborted) {
      z.get(f) === k && z.delete(f);
      return;
    }
    if (Me.has(f)) {
      if (xt(J) || De(J)) {
        Ye(f, Ze(void 0));
        return;
      }
    } else {
      if (xt(J))
        if (z.delete(f), le > me) {
          Ye(f, Ze(void 0));
          return;
        } else
          return Pe.add(f), Ye(f, qt(I)), pt(Y, J, !1, {
            fetcherSubmission: I,
            preventScrollReset: A
          });
      if (De(J)) {
        Xe(f, p, J.error);
        return;
      }
    }
    let Le = g.navigation.location || g.location, yt = At(
      e.history,
      Le,
      k.signal
    ), Gt = l || s, tt = g.navigation.state !== "idle" ? rt(Gt, g.navigation.location, u) : g.matches;
    W(tt, "Didn't find any matches after fetcher action");
    let $e = ++Q;
    Ee.set(f, $e);
    let cr = qt(I, J.data);
    g.fetchers.set(f, cr);
    let { dsMatches: Yt, revalidatingFetchers: gt } = ya(
      yt,
      E,
      o,
      a,
      e.history,
      g,
      tt,
      I,
      Le,
      r,
      !1,
      te,
      Z,
      Me,
      Ce,
      Pe,
      Gt,
      u,
      e.patchRoutesOnNavigation != null,
      [X.route.id, J],
      F
    );
    gt.filter((ae) => ae.key !== f).forEach((ae) => {
      let Fn = ae.key, oa = g.fetchers.get(Fn), Pu = qt(
        void 0,
        oa ? oa.data : void 0
      );
      g.fetchers.set(Fn, Pu), qe(Fn), ae.controller && z.set(Fn, ae.controller);
    }), ye({ fetchers: new Map(g.fetchers) });
    let In = () => gt.forEach((ae) => qe(ae.key));
    k.signal.addEventListener(
      "abort",
      In
    );
    let { loaderResults: kn, fetcherResults: K } = await qi(
      Yt,
      gt,
      yt,
      E
    );
    if (k.signal.aborted)
      return;
    if (k.signal.removeEventListener(
      "abort",
      In
    ), Ee.delete(f), z.delete(f), gt.forEach((ae) => z.delete(ae.key)), g.fetchers.has(f)) {
      let ae = Ze(J.data);
      g.fetchers.set(f, ae);
    }
    let ge = Nn(kn);
    if (ge)
      return pt(
        yt,
        ge.result,
        !1,
        { preventScrollReset: A }
      );
    if (ge = Nn(K), ge)
      return Pe.add(ge.key), pt(
        yt,
        ge.result,
        !1,
        { preventScrollReset: A }
      );
    let { loaderData: Ct, errors: vt } = Pa(
      g,
      tt,
      kn,
      void 0,
      gt,
      K
    );
    ea($e), g.navigation.state === "loading" && $e > le ? (W(M, "Expected pending action"), G && G.abort(), Dt(g.navigation.location, {
      matches: tt,
      loaderData: Ct,
      errors: vt,
      fetchers: new Map(g.fetchers)
    })) : (ye({
      errors: vt,
      loaderData: Sa(
        g.loaderData,
        Ct,
        tt,
        vt
      ),
      fetchers: new Map(g.fetchers)
    }), te = !1);
  }
  async function pu(f, p, v, S, E, V, C, A, I) {
    let F = g.fetchers.get(f);
    Ye(
      f,
      qt(
        I,
        F ? F.data : void 0
      ),
      { flushSync: C }
    );
    let N = new AbortController(), k = At(
      e.history,
      v,
      N.signal
    );
    if (V) {
      let J = await Vn(
        S,
        new URL(k.url).pathname,
        k.signal,
        f
      );
      if (J.type === "aborted")
        return;
      if (J.type === "error") {
        Xe(f, p, J.error, { flushSync: C });
        return;
      } else if (J.matches)
        S = J.matches;
      else {
        Xe(
          f,
          p,
          ke(404, { pathname: v }),
          { flushSync: C }
        );
        return;
      }
    }
    let Y = _n(S, v);
    z.set(f, N);
    let X = Q, me = Nt(
      o,
      a,
      k,
      S,
      Y,
      r,
      E
    ), xe = (await Kt(
      k,
      me,
      E,
      f
    ))[Y.route.id];
    if (z.get(f) === N && z.delete(f), !k.signal.aborted) {
      if (Me.has(f)) {
        Ye(f, Ze(void 0));
        return;
      }
      if (xt(xe))
        if (le > X) {
          Ye(f, Ze(void 0));
          return;
        } else {
          Pe.add(f), await pt(k, xe, !1, {
            preventScrollReset: A
          });
          return;
        }
      if (De(xe)) {
        Xe(f, p, xe.error);
        return;
      }
      Ye(f, Ze(xe.data));
    }
  }
  async function pt(f, p, v, {
    submission: S,
    fetcherSubmission: E,
    preventScrollReset: V,
    replace: C
  } = {}) {
    v || (_?.resolve(), _ = null), p.response.headers.has("X-Remix-Revalidate") && (te = !0);
    let A = p.response.headers.get("Location");
    W(A, "Expected a Location header on the redirect Response"), A = xa(
      A,
      new URL(f.url),
      u,
      e.history
    );
    let I = cn(g.location, A, {
      _isRedirect: !0
    });
    if (n) {
      let me = !1;
      if (p.response.headers.has("X-Remix-Reload-Document"))
        me = !0;
      else if (ii(A)) {
        const fe = Jo(A, !0);
        me = // Hard reload if it's an absolute URL to a new origin
        fe.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        Ne(fe.pathname, u) == null;
      }
      if (me) {
        C ? t.location.replace(A) : t.location.assign(A);
        return;
      }
    }
    G = null;
    let F = C === !0 || p.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: N, formAction: k, formEncType: Y } = g.navigation;
    !S && !E && N && k && Y && (S = Ma(g.navigation));
    let X = S || E;
    if (Mc.has(p.response.status) && X && ve(X.formMethod))
      await mt(F, I, {
        submission: {
          ...X,
          formAction: A
        },
        // Preserve these flags across redirects
        preventScrollReset: V || H,
        enableViewTransition: v ? se : void 0
      });
    else {
      let me = mr(
        I,
        S
      );
      await mt(F, I, {
        overrideNavigation: me,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: E,
        // Preserve these flags across redirects
        preventScrollReset: V || H,
        enableViewTransition: v ? se : void 0
      });
    }
  }
  async function Kt(f, p, v, S) {
    let E, V = {};
    try {
      E = await Nc(
        c,
        f,
        p,
        S,
        v,
        !1
      );
    } catch (C) {
      return p.filter((A) => A.shouldLoad).forEach((A) => {
        V[A.route.id] = {
          type: "error",
          error: C
        };
      }), V;
    }
    if (f.signal.aborted)
      return V;
    if (!ve(f.method))
      for (let C of p) {
        if (E[C.route.id]?.type === "error")
          break;
        !E.hasOwnProperty(C.route.id) && !g.loaderData.hasOwnProperty(C.route.id) && (!g.errors || !g.errors.hasOwnProperty(C.route.id)) && C.shouldCallHandler() && (E[C.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${C.route.id}`
          )
        });
      }
    for (let [C, A] of Object.entries(E))
      if (Gc(A)) {
        let I = A.result;
        V[C] = {
          type: "redirect",
          response: $c(
            I,
            f,
            C,
            p,
            u
          )
        };
      } else
        V[C] = await Uc(A);
    return V;
  }
  async function qi(f, p, v, S) {
    let E = Kt(
      v,
      f,
      S,
      null
    ), V = Promise.all(
      p.map(async (I) => {
        if (I.matches && I.match && I.request && I.controller) {
          let N = (await Kt(
            I.request,
            I.matches,
            S,
            I.key
          ))[I.match.route.id];
          return { [I.key]: N };
        } else
          return Promise.resolve({
            [I.key]: {
              type: "error",
              error: ke(404, {
                pathname: I.path
              })
            }
          });
      })
    ), C = await E, A = (await V).reduce(
      (I, F) => Object.assign(I, F),
      {}
    );
    return {
      loaderResults: C,
      fetcherResults: A
    };
  }
  function sr() {
    te = !0, Ce.forEach((f, p) => {
      z.has(p) && Z.add(p), qe(p);
    });
  }
  function Ye(f, p, v = {}) {
    g.fetchers.set(f, p), ye(
      { fetchers: new Map(g.fetchers) },
      { flushSync: (v && v.flushSync) === !0 }
    );
  }
  function Xe(f, p, v, S = {}) {
    let E = it(g.matches, p);
    lr(f), ye(
      {
        errors: {
          [E.route.id]: v
        },
        fetchers: new Map(g.fetchers)
      },
      { flushSync: (S && S.flushSync) === !0 }
    );
  }
  function Zi(f) {
    return Ae.set(f, (Ae.get(f) || 0) + 1), Me.has(f) && Me.delete(f), g.fetchers.get(f) || Dc;
  }
  function yu(f, p) {
    qe(f, p?.reason), Ye(f, Ze(null));
  }
  function lr(f) {
    let p = g.fetchers.get(f);
    z.has(f) && !(p && p.state === "loading" && Ee.has(f)) && qe(f), Ce.delete(f), Ee.delete(f), Pe.delete(f), Me.delete(f), Z.delete(f), g.fetchers.delete(f);
  }
  function gu(f) {
    let p = (Ae.get(f) || 0) - 1;
    p <= 0 ? (Ae.delete(f), Me.add(f)) : Ae.set(f, p), ye({ fetchers: new Map(g.fetchers) });
  }
  function qe(f, p) {
    let v = z.get(f);
    v && (v.abort(p), z.delete(f));
  }
  function Ji(f) {
    for (let p of f) {
      let v = Zi(p), S = Ze(v.data);
      g.fetchers.set(p, S);
    }
  }
  function Qi() {
    let f = [], p = !1;
    for (let v of Pe) {
      let S = g.fetchers.get(v);
      W(S, `Expected fetcher: ${v}`), S.state === "loading" && (Pe.delete(v), f.push(v), p = !0);
    }
    return Ji(f), p;
  }
  function ea(f) {
    let p = [];
    for (let [v, S] of Ee)
      if (S < f) {
        let E = g.fetchers.get(v);
        W(E, `Expected fetcher: ${v}`), E.state === "loading" && (qe(v), Ee.delete(v), p.push(v));
      }
    return Ji(p), p.length > 0;
  }
  function vu(f, p) {
    let v = g.blockers.get(f) || Xt;
    return ft.get(f) !== p && ft.set(f, p), v;
  }
  function ta(f) {
    g.blockers.delete(f), ft.delete(f);
  }
  function An(f, p) {
    let v = g.blockers.get(f) || Xt;
    W(
      v.state === "unblocked" && p.state === "blocked" || v.state === "blocked" && p.state === "blocked" || v.state === "blocked" && p.state === "proceeding" || v.state === "blocked" && p.state === "unblocked" || v.state === "proceeding" && p.state === "unblocked",
      `Invalid blocker state transition: ${v.state} -> ${p.state}`
    );
    let S = new Map(g.blockers);
    S.set(f, p), ye({ blockers: S });
  }
  function na({
    currentLocation: f,
    nextLocation: p,
    historyAction: v
  }) {
    if (ft.size === 0)
      return;
    ft.size > 1 && de(!1, "A router only supports one blocker at a time");
    let S = Array.from(ft.entries()), [E, V] = S[S.length - 1], C = g.blockers.get(E);
    if (!(C && C.state === "proceeding") && V({ currentLocation: f, nextLocation: p, historyAction: v }))
      return E;
  }
  function ur(f) {
    let p = ke(404, { pathname: f }), v = l || s, { matches: S, route: E } = On(v);
    return { notFoundMatches: S, route: E, error: p };
  }
  function bu(f, p, v) {
    if (y = f, x = p, w = v || null, !T && g.navigation === fr) {
      T = !0;
      let S = ia(g.location, g.matches);
      S != null && ye({ restoreScrollPosition: S });
    }
    return () => {
      y = null, x = null, w = null;
    };
  }
  function ra(f, p) {
    return w && w(
      f,
      p.map((S) => ec(S, g.loaderData))
    ) || f.key;
  }
  function wu(f, p) {
    if (y && x) {
      let v = ra(f, p);
      y[v] = x();
    }
  }
  function ia(f, p) {
    if (y) {
      let v = ra(f, p), S = y[v];
      if (typeof S == "number")
        return S;
    }
    return null;
  }
  function Ln(f, p, v) {
    if (e.patchRoutesOnNavigation)
      if (f) {
        if (Object.keys(f[0].params).length > 0)
          return { active: !0, matches: en(
            p,
            v,
            u,
            !0
          ) };
      } else
        return { active: !0, matches: en(
          p,
          v,
          u,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function Vn(f, p, v, S) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: f };
    let E = f;
    for (; ; ) {
      let V = l == null, C = l || s, A = a;
      try {
        await e.patchRoutesOnNavigation({
          signal: v,
          path: p,
          matches: E,
          fetcherKey: S,
          patch: (N, k) => {
            v.aborted || ga(
              N,
              k,
              C,
              A,
              o,
              !1
            );
          }
        });
      } catch (N) {
        return { type: "error", error: N, partialMatches: E };
      } finally {
        V && !v.aborted && (s = [...s]);
      }
      if (v.aborted)
        return { type: "aborted" };
      let I = rt(C, p, u), F = null;
      if (I) {
        if (Object.keys(I[0].params).length === 0)
          return { type: "success", matches: I };
        if (F = en(
          C,
          p,
          u,
          !0
        ), !(F && E.length < F.length && aa(
          E,
          F.slice(0, E.length)
        )))
          return { type: "success", matches: I };
      }
      if (F || (F = en(
        C,
        p,
        u,
        !0
      )), !F || aa(E, F))
        return { type: "success", matches: null };
      E = F;
    }
  }
  function aa(f, p) {
    return f.length === p.length && f.every((v, S) => v.route.id === p[S].route.id);
  }
  function xu(f) {
    a = {}, l = dn(
      f,
      o,
      void 0,
      a
    );
  }
  function Tu(f, p, v = !1) {
    let S = l == null;
    ga(
      f,
      p,
      l || s,
      a,
      o,
      v
    ), S && (s = [...s], ye({}));
  }
  return O = {
    get basename() {
      return u;
    },
    get future() {
      return d;
    },
    get state() {
      return g;
    },
    get routes() {
      return s;
    },
    get window() {
      return t;
    },
    initialize: ou,
    subscribe: lu,
    enableScrollRestoration: bu,
    navigate: Yi,
    fetch: fu,
    revalidate: uu,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (f) => e.history.createHref(f),
    encodeLocation: (f) => e.history.encodeLocation(f),
    getFetcher: Zi,
    resetFetcher: yu,
    deleteFetcher: gu,
    dispose: su,
    getBlocker: vu,
    deleteBlocker: ta,
    patchRoutes: Tu,
    _internalFetchControllers: z,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: xu,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(f) {
      ye(f);
    }
  }, e.unstable_instrumentations && (O = bc(
    O,
    e.unstable_instrumentations.map((f) => f.router).filter(Boolean)
  )), O;
}
function Lc(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function Vr(e, t, n, r, i, o) {
  let a, s;
  if (i) {
    a = [];
    for (let u of t)
      if (a.push(u), u.route.id === i) {
        s = u;
        break;
      }
  } else
    a = t, s = t[t.length - 1];
  let l = oi(
    r || ".",
    ai(a),
    Ne(e.pathname, n) || e.pathname,
    o === "path"
  );
  if (r == null && (l.search = e.search, l.hash = e.hash), (r == null || r === "" || r === ".") && s) {
    let u = ui(l.search);
    if (s.route.index && !u)
      l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index";
    else if (!s.route.index && u) {
      let c = new URLSearchParams(l.search), d = c.getAll("index");
      c.delete("index"), d.filter((m) => m).forEach((m) => c.append("index", m));
      let h = c.toString();
      l.search = h ? `?${h}` : "";
    }
  }
  return n !== "/" && (l.pathname = fc({ basename: n, pathname: l.pathname })), Ke(l);
}
function pa(e, t, n) {
  if (!n || !Lc(n))
    return { path: t };
  if (n.formMethod && !qc(n.formMethod))
    return {
      path: t,
      error: ke(405, { method: n.formMethod })
    };
  let r = () => ({
    path: t,
    error: ke(400, { type: "invalid-body" })
  }), o = (n.formMethod || "get").toUpperCase(), a = ps(t);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!ve(o))
        return r();
      let d = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(n.body.entries()).reduce(
          (h, [m, y]) => `${h}${m}=${y}
`,
          ""
        )
      ) : String(n.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: d
        }
      };
    } else if (n.formEncType === "application/json") {
      if (!ve(o))
        return r();
      try {
        let d = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: n.formEncType,
            formData: void 0,
            json: d,
            text: void 0
          }
        };
      } catch {
        return r();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, l;
  if (n.formData)
    s = Fr(n.formData), l = n.formData;
  else if (n.body instanceof FormData)
    s = Fr(n.body), l = n.body;
  else if (n.body instanceof URLSearchParams)
    s = n.body, l = Ta(s);
  else if (n.body == null)
    s = new URLSearchParams(), l = new FormData();
  else
    try {
      s = new URLSearchParams(n.body), l = Ta(s);
    } catch {
      return r();
    }
  let u = {
    formMethod: o,
    formAction: a,
    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
    formData: l,
    json: void 0,
    text: void 0
  };
  if (ve(u.formMethod))
    return { path: t, submission: u };
  let c = ct(t);
  return e && c.search && ui(c.search) && s.append("index", ""), c.search = `?${s}`, { path: Ke(c), submission: u };
}
function ya(e, t, n, r, i, o, a, s, l, u, c, d, h, m, y, w, x, T, b, P, L) {
  let D = P ? De(P[1]) ? P[1].error : P[1].data : void 0, O = i.createURL(o.location), g = i.createURL(l), M;
  if (c && o.errors) {
    let q = Object.keys(o.errors)[0];
    M = a.findIndex((te) => te.route.id === q);
  } else if (P && De(P[1])) {
    let q = P[0];
    M = a.findIndex((te) => te.route.id === q) - 1;
  }
  let _ = P ? P[1].statusCode : void 0, H = _ && _ >= 400, G = {
    currentUrl: O,
    currentParams: o.matches[0]?.params || {},
    nextUrl: g,
    nextParams: a[0].params,
    ...s,
    actionResult: D,
    actionStatus: _
  }, se = wn(a), Re = a.map((q, te) => {
    let { route: Z } = q, z = null;
    if (M != null && te > M ? z = !1 : Z.lazy ? z = !0 : si(Z) ? c ? z = Ir(
      Z,
      o.loaderData,
      o.errors
    ) : Vc(o.loaderData, o.matches[te], q) && (z = !0) : z = !1, z !== null)
      return kr(
        n,
        r,
        e,
        se,
        q,
        u,
        t,
        z
      );
    let Q = !1;
    typeof L == "boolean" ? Q = L : H ? Q = !1 : (d || O.pathname + O.search === g.pathname + g.search || O.search !== g.search || Ic(o.matches[te], q)) && (Q = !0);
    let le = {
      ...G,
      defaultShouldRevalidate: Q
    }, Ee = nn(q, le);
    return kr(
      n,
      r,
      e,
      se,
      q,
      u,
      t,
      Ee,
      le,
      L
    );
  }), ie = [];
  return y.forEach((q, te) => {
    if (c || !a.some((Ae) => Ae.route.id === q.routeId) || m.has(te))
      return;
    let Z = o.fetchers.get(te), z = Z && Z.state !== "idle" && Z.data === void 0, Q = rt(x, q.path, T);
    if (!Q) {
      if (b && z)
        return;
      ie.push({
        key: te,
        routeId: q.routeId,
        path: q.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (w.has(te))
      return;
    let le = _n(Q, q.path), Ee = new AbortController(), Pe = At(
      i,
      q.path,
      Ee.signal
    ), Ce = null;
    if (h.has(te))
      h.delete(te), Ce = Nt(
        n,
        r,
        Pe,
        Q,
        le,
        u,
        t
      );
    else if (z)
      d && (Ce = Nt(
        n,
        r,
        Pe,
        Q,
        le,
        u,
        t
      ));
    else {
      let Ae;
      typeof L == "boolean" ? Ae = L : H ? Ae = !1 : Ae = d;
      let Me = {
        ...G,
        defaultShouldRevalidate: Ae
      };
      nn(le, Me) && (Ce = Nt(
        n,
        r,
        Pe,
        Q,
        le,
        u,
        t,
        Me
      ));
    }
    Ce && ie.push({
      key: te,
      routeId: q.routeId,
      path: q.path,
      matches: Ce,
      match: le,
      request: Pe,
      controller: Ee
    });
  }), { dsMatches: Re, revalidatingFetchers: ie };
}
function si(e) {
  return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function Ir(e, t, n) {
  if (e.lazy)
    return !0;
  if (!si(e))
    return !1;
  let r = t != null && e.id in t, i = n != null && n[e.id] !== void 0;
  return !r && i ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !i;
}
function Vc(e, t, n) {
  let r = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    n.route.id !== t.route.id
  ), i = !e.hasOwnProperty(n.route.id);
  return r || i;
}
function Ic(e, t) {
  let n = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function nn(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean")
      return n;
  }
  return t.defaultShouldRevalidate;
}
function ga(e, t, n, r, i, o) {
  let a;
  if (e) {
    let u = r[e];
    W(
      u,
      `No route found to patch children into: routeId = ${e}`
    ), u.children || (u.children = []), a = u.children;
  } else
    a = n;
  let s = [], l = [];
  if (t.forEach((u) => {
    let c = a.find(
      (d) => cs(u, d)
    );
    c ? l.push({ existingRoute: c, newRoute: u }) : s.push(u);
  }), s.length > 0) {
    let u = dn(
      s,
      i,
      [e || "_", "patch", String(a?.length || "0")],
      r
    );
    a.push(...u);
  }
  if (o && l.length > 0)
    for (let u = 0; u < l.length; u++) {
      let { existingRoute: c, newRoute: d } = l[u], h = c, [m] = dn(
        [d],
        i,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(h, {
        element: m.element ? m.element : h.element,
        errorElement: m.errorElement ? m.errorElement : h.errorElement,
        hydrateFallbackElement: m.hydrateFallbackElement ? m.hydrateFallbackElement : h.hydrateFallbackElement
      });
    }
}
function cs(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
    (n, r) => t.children?.some((i) => cs(n, i))
  ) : !1;
}
var va = /* @__PURE__ */ new WeakMap(), ds = ({
  key: e,
  route: t,
  manifest: n,
  mapRouteProperties: r
}) => {
  let i = n[t.id];
  if (W(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object")
    return;
  let o = i.lazy[e];
  if (!o)
    return;
  let a = va.get(i);
  a || (a = {}, va.set(i, a));
  let s = a[e];
  if (s)
    return s;
  let l = (async () => {
    let u = qu(e), d = i[e] !== void 0 && e !== "hasErrorBoundary";
    if (u)
      de(
        !u,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), a[e] = Promise.resolve();
    else if (d)
      de(
        !1,
        `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let h = await o();
      h != null && (Object.assign(i, { [e]: h }), Object.assign(i, r(i)));
    }
    typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((h) => h === void 0) && (i.lazy = void 0));
  })();
  return a[e] = l, l;
}, ba = /* @__PURE__ */ new WeakMap();
function kc(e, t, n, r, i) {
  let o = n[e.id];
  if (W(o, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let c = ba.get(o);
    if (c)
      return {
        lazyRoutePromise: c,
        lazyHandlerPromise: c
      };
    let d = (async () => {
      W(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let h = await e.lazy(), m = {};
      for (let y in h) {
        let w = h[y];
        if (w === void 0)
          continue;
        let x = Ju(y), b = o[y] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        y !== "hasErrorBoundary";
        x ? de(
          !x,
          "Route property " + y + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : b ? de(
          !b,
          `Route "${o.id}" has a static property "${y}" defined but its lazy function is also returning a value for this property. The lazy route property "${y}" will be ignored.`
        ) : m[y] = w;
      }
      Object.assign(o, m), Object.assign(o, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...r(o),
        lazy: void 0
      });
    })();
    return ba.set(o, d), d.catch(() => {
    }), {
      lazyRoutePromise: d,
      lazyHandlerPromise: d
    };
  }
  let a = Object.keys(e.lazy), s = [], l;
  for (let c of a) {
    if (i && i.includes(c))
      continue;
    let d = ds({
      key: c,
      route: e,
      manifest: n,
      mapRouteProperties: r
    });
    d && (s.push(d), c === t && (l = d));
  }
  let u = s.length > 0 ? Promise.all(s).then(() => {
  }) : void 0;
  return u?.catch(() => {
  }), l?.catch(() => {
  }), {
    lazyRoutePromise: u,
    lazyHandlerPromise: l
  };
}
async function wa(e) {
  let t = e.matches.filter((i) => i.shouldLoad), n = {};
  return (await Promise.all(t.map((i) => i.resolve()))).forEach((i, o) => {
    n[t[o].route.id] = i;
  }), n;
}
async function Fc(e) {
  return e.matches.some((t) => t.route.middleware) ? hs(e, () => wa(e)) : wa(e);
}
function hs(e, t) {
  return Oc(
    e,
    t,
    (r) => {
      if (Xc(r))
        throw r;
      return r;
    },
    Hc,
    n
  );
  function n(r, i, o) {
    if (o)
      return Promise.resolve(
        Object.assign(o.value, {
          [i]: { type: "error", result: r }
        })
      );
    {
      let { matches: a } = e, s = Math.min(
        // Throwing route
        Math.max(
          a.findIndex((u) => u.route.id === i),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          a.findIndex((u) => u.shouldCallHandler()),
          0
        )
      ), l = it(
        a,
        a[s].route.id
      ).route.id;
      return Promise.resolve({
        [l]: { type: "error", result: r }
      });
    }
  }
}
async function Oc(e, t, n, r, i) {
  let { matches: o, request: a, params: s, context: l, unstable_pattern: u } = e, c = o.flatMap(
    (h) => h.route.middleware ? h.route.middleware.map((m) => [h.route.id, m]) : []
  );
  return await fs(
    {
      request: a,
      params: s,
      context: l,
      unstable_pattern: u
    },
    c,
    t,
    n,
    r,
    i
  );
}
async function fs(e, t, n, r, i, o, a = 0) {
  let { request: s } = e;
  if (s.signal.aborted)
    throw s.signal.reason ?? new Error(`Request aborted: ${s.method} ${s.url}`);
  let l = t[a];
  if (!l)
    return await n();
  let [u, c] = l, d, h = async () => {
    if (d)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return d = { value: await fs(
        e,
        t,
        n,
        r,
        i,
        o,
        a + 1
      ) }, d.value;
    } catch (m) {
      return d = { value: await o(m, u, d) }, d.value;
    }
  };
  try {
    let m = await c(e, h), y = m != null ? r(m) : void 0;
    return i(y) ? y : d ? y ?? d.value : (d = { value: await h() }, d.value);
  } catch (m) {
    return await o(m, u, d);
  }
}
function ms(e, t, n, r, i) {
  let o = ds({
    key: "middleware",
    route: r.route,
    manifest: t,
    mapRouteProperties: e
  }), a = kc(
    r.route,
    ve(n.method) ? "action" : "loader",
    t,
    e,
    i
  );
  return {
    middleware: o,
    route: a.lazyRoutePromise,
    handler: a.lazyHandlerPromise
  };
}
function kr(e, t, n, r, i, o, a, s, l = null, u) {
  let c = !1, d = ms(
    e,
    t,
    n,
    i,
    o
  );
  return {
    ...i,
    _lazyPromises: d,
    shouldLoad: s,
    shouldRevalidateArgs: l,
    shouldCallHandler(h) {
      return c = !0, l ? typeof u == "boolean" ? nn(i, {
        ...l,
        defaultShouldRevalidate: u
      }) : typeof h == "boolean" ? nn(i, {
        ...l,
        defaultShouldRevalidate: h
      }) : nn(i, l) : s;
    },
    resolve(h) {
      let { lazy: m, loader: y, middleware: w } = i.route, x = c || s || h && !ve(n.method) && (m || y), T = w && w.length > 0 && !y && !m;
      return x && (ve(n.method) || !T) ? jc({
        request: n,
        unstable_pattern: r,
        match: i,
        lazyHandlerPromise: d?.handler,
        lazyRoutePromise: d?.route,
        handlerOverride: h,
        scopedContext: a
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function Nt(e, t, n, r, i, o, a, s = null) {
  return r.map((l) => l.route.id !== i.route.id ? {
    ...l,
    shouldLoad: !1,
    shouldRevalidateArgs: s,
    shouldCallHandler: () => !1,
    _lazyPromises: ms(
      e,
      t,
      n,
      l,
      o
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : kr(
    e,
    t,
    n,
    wn(r),
    l,
    o,
    a,
    !0,
    s
  ));
}
async function Nc(e, t, n, r, i, o) {
  n.some((u) => u._lazyPromises?.middleware) && await Promise.all(n.map((u) => u._lazyPromises?.middleware));
  let a = {
    request: t,
    unstable_pattern: wn(n),
    params: n[0].params,
    context: i,
    matches: n
  }, l = await e({
    ...a,
    fetcherKey: r,
    runClientMiddleware: (u) => {
      let c = a;
      return hs(c, () => u({
        ...c,
        fetcherKey: r,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      n.flatMap((u) => [
        u._lazyPromises?.handler,
        u._lazyPromises?.route
      ])
    );
  } catch {
  }
  return l;
}
async function jc({
  request: e,
  unstable_pattern: t,
  match: n,
  lazyHandlerPromise: r,
  lazyRoutePromise: i,
  handlerOverride: o,
  scopedContext: a
}) {
  let s, l, u = ve(e.method), c = u ? "action" : "loader", d = (h) => {
    let m, y = new Promise((T, b) => m = b);
    l = () => m(), e.signal.addEventListener("abort", l);
    let w = (T) => typeof h != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${c}" [routeId: ${n.route.id}]`
      )
    ) : h(
      {
        request: e,
        unstable_pattern: t,
        params: n.params,
        context: a
      },
      ...T !== void 0 ? [T] : []
    ), x = (async () => {
      try {
        return { type: "data", result: await (o ? o((b) => w(b)) : w()) };
      } catch (T) {
        return { type: "error", result: T };
      }
    })();
    return Promise.race([x, y]);
  };
  try {
    let h = u ? n.route.action : n.route.loader;
    if (r || i)
      if (h) {
        let m, [y] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          d(h).catch((w) => {
            m = w;
          }),
          // Ensure all lazy route promises are resolved before continuing
          r,
          i
        ]);
        if (m !== void 0)
          throw m;
        s = y;
      } else {
        await r;
        let m = u ? n.route.action : n.route.loader;
        if (m)
          [s] = await Promise.all([d(m), i]);
        else if (c === "action") {
          let y = new URL(e.url), w = y.pathname + y.search;
          throw ke(405, {
            method: e.method,
            pathname: w,
            routeId: n.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (h)
      s = await d(h);
    else {
      let m = new URL(e.url), y = m.pathname + m.search;
      throw ke(404, {
        pathname: y
      });
    }
  } catch (h) {
    return { type: "error", result: h };
  } finally {
    l && e.signal.removeEventListener("abort", l);
  }
  return s;
}
async function Bc(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function Uc(e) {
  let { result: t, type: n } = e;
  if (li(t)) {
    let r;
    try {
      r = await Bc(t);
    } catch (i) {
      return { type: "error", error: i };
    }
    return n === "error" ? {
      type: "error",
      error: new bn(t.status, t.statusText, r),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: "data",
      data: r,
      statusCode: t.status,
      headers: t.headers
    };
  }
  return n === "error" ? Ea(t) ? t.data instanceof Error ? {
    type: "error",
    error: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: Wc(t),
    statusCode: hn(t) ? t.status : void 0,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: t,
    statusCode: hn(t) ? t.status : void 0
  } : Ea(t) ? {
    type: "data",
    data: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : { type: "data", data: t };
}
function $c(e, t, n, r, i) {
  let o = e.headers.get("Location");
  if (W(
    o,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !ii(o)) {
    let a = r.slice(
      0,
      r.findIndex((s) => s.route.id === n) + 1
    );
    o = Vr(
      new URL(t.url),
      a,
      i,
      o
    ), e.headers.set("Location", o);
  }
  return e;
}
function xa(e, t, n, r) {
  let i = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (ii(e)) {
    let o = e, a = o.startsWith("//") ? new URL(t.protocol + o) : new URL(o);
    if (i.includes(a.protocol))
      throw new Error("Invalid redirect location");
    let s = Ne(a.pathname, n) != null;
    if (a.origin === t.origin && s)
      return a.pathname + a.search + a.hash;
  }
  try {
    let o = r.createURL(e);
    if (i.includes(o.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function At(e, t, n, r) {
  let i = e.createURL(ps(t)).toString(), o = { signal: n };
  if (r && ve(r.formMethod)) {
    let { formMethod: a, formEncType: s } = r;
    o.method = a.toUpperCase(), s === "application/json" ? (o.headers = new Headers({ "Content-Type": s }), o.body = JSON.stringify(r.json)) : s === "text/plain" ? o.body = r.text : s === "application/x-www-form-urlencoded" && r.formData ? o.body = Fr(r.formData) : o.body = r.formData;
  }
  return new Request(i, o);
}
function Fr(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ta(e) {
  let t = new FormData();
  for (let [n, r] of e.entries())
    t.append(n, r);
  return t;
}
function _c(e, t, n, r = !1, i = !1) {
  let o = {}, a = null, s, l = !1, u = {}, c = n && De(n[1]) ? n[1].error : void 0;
  return e.forEach((d) => {
    if (!(d.route.id in t))
      return;
    let h = d.route.id, m = t[h];
    if (W(
      !xt(m),
      "Cannot handle redirect results in processLoaderData"
    ), De(m)) {
      let y = m.error;
      if (c !== void 0 && (y = c, c = void 0), a = a || {}, i)
        a[h] = y;
      else {
        let w = it(e, h);
        a[w.route.id] == null && (a[w.route.id] = y);
      }
      r || (o[h] = us), l || (l = !0, s = hn(m.error) ? m.error.status : 500), m.headers && (u[h] = m.headers);
    } else
      o[h] = m.data, m.statusCode && m.statusCode !== 200 && !l && (s = m.statusCode), m.headers && (u[h] = m.headers);
  }), c !== void 0 && n && (a = { [n[0]]: c }, n[2] && (o[n[2]] = void 0)), {
    loaderData: o,
    errors: a,
    statusCode: s || 200,
    loaderHeaders: u
  };
}
function Pa(e, t, n, r, i, o) {
  let { loaderData: a, errors: s } = _c(
    t,
    n,
    r
  );
  return i.filter((l) => !l.matches || l.matches.some((u) => u.shouldLoad)).forEach((l) => {
    let { key: u, match: c, controller: d } = l;
    if (d && d.signal.aborted)
      return;
    let h = o[u];
    if (W(h, "Did not find corresponding fetcher result"), De(h)) {
      let m = it(e.matches, c?.route.id);
      s && s[m.route.id] || (s = {
        ...s,
        [m.route.id]: h.error
      }), e.fetchers.delete(u);
    } else if (xt(h))
      W(!1, "Unhandled fetcher revalidation redirect");
    else {
      let m = Ze(h.data);
      e.fetchers.set(u, m);
    }
  }), { loaderData: a, errors: s };
}
function Sa(e, t, n, r) {
  let i = Object.entries(t).filter(([, o]) => o !== us).reduce((o, [a, s]) => (o[a] = s, o), {});
  for (let o of n) {
    let a = o.route.id;
    if (!t.hasOwnProperty(a) && e.hasOwnProperty(a) && o.route.loader && (i[a] = e[a]), r && r.hasOwnProperty(a))
      break;
  }
  return i;
}
function Ra(e) {
  return e ? De(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function it(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function On(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }
    ],
    route: t
  };
}
function ke(e, {
  pathname: t,
  routeId: n,
  method: r,
  type: i,
  message: o
} = {}) {
  let a = "Unknown Server Error", s = "Unknown @remix-run/router error";
  return e === 400 ? (a = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (a = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (a = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (a = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new bn(
    e || 500,
    a,
    new Error(s),
    !0
  );
}
function Nn(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (xt(i))
      return { key: r, result: i };
  }
}
function ps(e) {
  let t = typeof e == "string" ? ct(e) : e;
  return Ke({ ...t, hash: "" });
}
function zc(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function Wc(e) {
  return new bn(
    e.init?.status ?? 500,
    e.init?.statusText ?? "Internal Server Error",
    e.data
  );
}
function Hc(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, n]) => typeof t == "string" && Kc(n)
  );
}
function Kc(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function Gc(e) {
  return li(e.result) && ss.has(e.result.status);
}
function De(e) {
  return e.type === "error";
}
function xt(e) {
  return (e && e.type) === "redirect";
}
function Ea(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function li(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Yc(e) {
  return ss.has(e);
}
function Xc(e) {
  return li(e) && Yc(e.status) && e.headers.has("Location");
}
function qc(e) {
  return Ec.has(e.toUpperCase());
}
function ve(e) {
  return Sc.has(e.toUpperCase());
}
function ui(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function _n(e, t) {
  let n = typeof t == "string" ? ct(t).search : t.search;
  if (e[e.length - 1].route.index && ui(n || ""))
    return e[e.length - 1];
  let r = ns(e);
  return r[r.length - 1];
}
function Ma(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: i, formData: o, json: a } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0
      };
  }
}
function mr(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Zc(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function qt(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Jc(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function Ze(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function Qc(e, t) {
  try {
    let n = e.sessionStorage.getItem(
      ls
    );
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {
  }
}
function ed(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t)
      n[r] = [...i];
    try {
      e.sessionStorage.setItem(
        ls,
        JSON.stringify(n)
      );
    } catch (r) {
      de(
        !1,
        `Failed to save applied view transitions in sessionStorage (${r}).`
      );
    }
  }
}
function Da() {
  let e, t, n = new Promise((r, i) => {
    e = async (o) => {
      r(o);
      try {
        await n;
      } catch {
      }
    }, t = async (o) => {
      i(o);
      try {
        await n;
      } catch {
      }
    };
  });
  return {
    promise: n,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var Mt = he(null);
Mt.displayName = "DataRouter";
var xn = he(null);
xn.displayName = "DataRouterState";
var ys = he(!1);
function td() {
  return U(ys);
}
var ci = he({
  isTransitioning: !1
});
ci.displayName = "ViewTransition";
var gs = he(
  /* @__PURE__ */ new Map()
);
gs.displayName = "Fetchers";
var nd = he(null);
nd.displayName = "Await";
var je = he(
  null
);
je.displayName = "Navigation";
var nr = he(
  null
);
nr.displayName = "Location";
var Ge = he({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ge.displayName = "Route";
var di = he(null);
di.displayName = "RouteError";
var vs = "REACT_ROUTER_ERROR", rd = "REDIRECT", id = "ROUTE_ERROR_RESPONSE";
function ad(e) {
  if (e.startsWith(`${vs}:${rd}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function od(e) {
  if (e.startsWith(
    `${vs}:${id}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new bn(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function sd(e, { relative: t } = {}) {
  W(
    Tn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: r } = U(je), { hash: i, pathname: o, search: a } = Pn(e, { relative: t }), s = o;
  return n !== "/" && (s = o === "/" ? n : ze([n, o])), r.createHref({ pathname: s, search: a, hash: i });
}
function Tn() {
  return U(nr) != null;
}
function dt() {
  return W(
    Tn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), U(nr).location;
}
var bs = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ws(e) {
  U(je).static || tr(e);
}
function ld() {
  let { isDataRoute: e } = U(Ge);
  return e ? Pd() : ud();
}
function ud() {
  W(
    Tn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = U(Mt), { basename: t, navigator: n } = U(je), { matches: r } = U(Ge), { pathname: i } = dt(), o = JSON.stringify(ai(r)), a = Je(!1);
  return ws(() => {
    a.current = !0;
  }), ut(
    (l, u = {}) => {
      if (de(a.current, bs), !a.current) return;
      if (typeof l == "number") {
        n.go(l);
        return;
      }
      let c = oi(
        l,
        JSON.parse(o),
        i,
        u.relative === "path"
      );
      e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : ze([t, c.pathname])), (u.replace ? n.replace : n.push)(
        c,
        u.state,
        u
      );
    },
    [
      t,
      n,
      o,
      i,
      e
    ]
  );
}
var cd = he(null);
function dd(e) {
  let t = U(Ge).outlet;
  return be(
    () => t && /* @__PURE__ */ $(cd.Provider, { value: e }, t),
    [t, e]
  );
}
function Pn(e, { relative: t } = {}) {
  let { matches: n } = U(Ge), { pathname: r } = dt(), i = JSON.stringify(ai(n));
  return be(
    () => oi(
      e,
      JSON.parse(i),
      r,
      t === "path"
    ),
    [e, i, r, t]
  );
}
function hd(e, t, n, r, i) {
  W(
    Tn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = U(je), { matches: a } = U(Ge), s = a[a.length - 1], l = s ? s.params : {}, u = s ? s.pathname : "/", c = s ? s.pathnameBase : "/", d = s && s.route;
  {
    let b = d && d.path || "";
    Ts(
      u,
      !d || b.endsWith("*") || b.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b === "/" ? "*" : `${b}/*`}">.`
    );
  }
  let h = dt(), m;
  m = h;
  let y = m.pathname || "/", w = y;
  if (c !== "/") {
    let b = c.replace(/^\//, "").split("/");
    w = "/" + y.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let x = rt(e, { pathname: w });
  return de(
    d || x != null,
    `No routes matched location "${m.pathname}${m.search}${m.hash}" `
  ), de(
    x == null || x[x.length - 1].route.element !== void 0 || x[x.length - 1].route.Component !== void 0 || x[x.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), gd(
    x && x.map(
      (b) => Object.assign({}, b, {
        params: Object.assign({}, l, b.params),
        pathname: ze([
          c,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            b.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : b.pathname
        ]),
        pathnameBase: b.pathnameBase === "/" ? c : ze([
          c,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            b.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : b.pathnameBase
        ])
      })
    ),
    a,
    n,
    r,
    i
  );
}
function fd() {
  let e = Td(), t = hn(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: r }, o = { padding: "2px 4px", backgroundColor: r }, a = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), a = /* @__PURE__ */ $(ot, null, /* @__PURE__ */ $("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ $("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ $("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ $("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ $(ot, null, /* @__PURE__ */ $("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ $("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ $("pre", { style: i }, n) : null, a);
}
var md = /* @__PURE__ */ $(fd, null), xs = class extends ri {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const n = od(e.digest);
      n && (e = n);
    }
    let t = e !== void 0 ? /* @__PURE__ */ $(Ge.Provider, { value: this.props.routeContext }, /* @__PURE__ */ $(
      di.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ $(pd, { error: e }, t) : t;
  }
};
xs.contextType = ys;
var pr = /* @__PURE__ */ new WeakMap();
function pd({
  children: e,
  error: t
}) {
  let { basename: n } = U(je);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let r = ad(t.digest);
    if (r) {
      let i = pr.get(t);
      if (i) throw i;
      let o = is(r.location, n);
      if (rs && !pr.get(t))
        if (o.isExternal || r.reloadDocument)
          window.location.href = o.absoluteURL || o.to;
        else {
          const a = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(o.to, {
              replace: r.replace
            })
          );
          throw pr.set(t, a), a;
        }
      return /* @__PURE__ */ $(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${o.absoluteURL || o.to}`
        }
      );
    }
  }
  return e;
}
function yd({ routeContext: e, match: t, children: n }) {
  let r = U(Mt);
  return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ $(Ge.Provider, { value: e }, n);
}
function gd(e, t = [], n = null, r = null, i = null) {
  if (e == null) {
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let o = e, a = n?.errors;
  if (a != null) {
    let c = o.findIndex(
      (d) => d.route.id && a?.[d.route.id] !== void 0
    );
    W(
      c >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ), o = o.slice(
      0,
      Math.min(o.length, c + 1)
    );
  }
  let s = !1, l = -1;
  if (n)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = c), d.route.id) {
        let { loaderData: h, errors: m } = n, y = d.route.loader && !h.hasOwnProperty(d.route.id) && (!m || m[d.route.id] === void 0);
        if (d.route.lazy || y) {
          s = !0, l >= 0 ? o = o.slice(0, l + 1) : o = [o[0]];
          break;
        }
      }
    }
  let u = n && r ? (c, d) => {
    r(c, {
      location: n.location,
      params: n.matches?.[0]?.params ?? {},
      unstable_pattern: wn(n.matches),
      errorInfo: d
    });
  } : void 0;
  return o.reduceRight(
    (c, d, h) => {
      let m, y = !1, w = null, x = null;
      n && (m = a && d.route.id ? a[d.route.id] : void 0, w = d.route.errorElement || md, s && (l < 0 && h === 0 ? (Ts(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), y = !0, x = null) : l === h && (y = !0, x = d.route.hydrateFallbackElement || null)));
      let T = t.concat(o.slice(0, h + 1)), b = () => {
        let P;
        return m ? P = w : y ? P = x : d.route.Component ? P = /* @__PURE__ */ $(d.route.Component, null) : d.route.element ? P = d.route.element : P = c, /* @__PURE__ */ $(
          yd,
          {
            match: d,
            routeContext: {
              outlet: c,
              matches: T,
              isDataRoute: n != null
            },
            children: P
          }
        );
      };
      return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? /* @__PURE__ */ $(
        xs,
        {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: m,
          children: b(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
          onError: u
        }
      ) : b();
    },
    null
  );
}
function hi(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function vd(e) {
  let t = U(Mt);
  return W(t, hi(e)), t;
}
function bd(e) {
  let t = U(xn);
  return W(t, hi(e)), t;
}
function wd(e) {
  let t = U(Ge);
  return W(t, hi(e)), t;
}
function fi(e) {
  let t = wd(e), n = t.matches[t.matches.length - 1];
  return W(
    n.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), n.route.id;
}
function xd() {
  return fi(
    "useRouteId"
    /* UseRouteId */
  );
}
function Td() {
  let e = U(di), t = bd(
    "useRouteError"
    /* UseRouteError */
  ), n = fi(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[n];
}
function Pd() {
  let { router: e } = vd(
    "useNavigate"
    /* UseNavigateStable */
  ), t = fi(
    "useNavigate"
    /* UseNavigateStable */
  ), n = Je(!1);
  return ws(() => {
    n.current = !0;
  }), ut(
    async (i, o = {}) => {
      de(n.current, bs), n.current && (typeof i == "number" ? await e.navigate(i) : await e.navigate(i, { fromRouteId: t, ...o }));
    },
    [e, t]
  );
}
var Ca = {};
function Ts(e, t, n) {
  !t && !Ca[e] && (Ca[e] = !0, de(!1, n));
}
var Aa = {};
function La(e, t) {
  !e && !Aa[t] && (Aa[t] = !0, console.warn(t));
}
var Sd = "useOptimistic", Va = zu[Sd], Rd = () => {
};
function Ed(e) {
  return Va ? Va(e) : [e, Rd];
}
function Md(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && de(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(t, {
    element: $(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && de(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(t, {
    hydrateFallbackElement: $(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && de(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(t, {
    errorElement: $(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), t;
}
var Dd = [
  "HydrateFallback",
  "hydrateFallbackElement"
], Cd = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, t) => {
      this.resolve = (n) => {
        this.status === "pending" && (this.status = "resolved", e(n));
      }, this.reject = (n) => {
        this.status === "pending" && (this.status = "rejected", t(n));
      };
    });
  }
};
function Ad({
  router: e,
  flushSync: t,
  onError: n,
  unstable_useTransitions: r
}) {
  r = td() || r;
  let [o, a] = _e(e.state), [s, l] = Ed(o), [u, c] = _e(), [d, h] = _e({
    isTransitioning: !1
  }), [m, y] = _e(), [w, x] = _e(), [T, b] = _e(), P = Je(/* @__PURE__ */ new Map()), L = ut(
    (M, { deletedFetchers: _, newErrors: H, flushSync: G, viewTransitionOpts: se }) => {
      H && n && Object.values(H).forEach(
        (ie) => n(ie, {
          location: M.location,
          params: M.matches[0]?.params ?? {},
          unstable_pattern: wn(M.matches)
        })
      ), M.fetchers.forEach((ie, q) => {
        ie.data !== void 0 && P.current.set(q, ie.data);
      }), _.forEach((ie) => P.current.delete(ie)), La(
        G === !1 || t != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let Re = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (La(
        se == null || Re,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !se || !Re) {
        t && G ? t(() => a(M)) : r === !1 ? a(M) : un(() => {
          r === !0 && l((ie) => Ia(ie, M)), a(M);
        });
        return;
      }
      if (t && G) {
        t(() => {
          w && (m?.resolve(), w.skipTransition()), h({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: se.currentLocation,
            nextLocation: se.nextLocation
          });
        });
        let ie = e.window.document.startViewTransition(() => {
          t(() => a(M));
        });
        ie.finished.finally(() => {
          t(() => {
            y(void 0), x(void 0), c(void 0), h({ isTransitioning: !1 });
          });
        }), t(() => x(ie));
        return;
      }
      w ? (m?.resolve(), w.skipTransition(), b({
        state: M,
        currentLocation: se.currentLocation,
        nextLocation: se.nextLocation
      })) : (c(M), h({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: se.currentLocation,
        nextLocation: se.nextLocation
      }));
    },
    [
      e.window,
      t,
      w,
      m,
      r,
      l,
      n
    ]
  );
  tr(() => e.subscribe(L), [e, L]), Ue(() => {
    d.isTransitioning && !d.flushSync && y(new Cd());
  }, [d]), Ue(() => {
    if (m && u && e.window) {
      let M = u, _ = m.promise, H = e.window.document.startViewTransition(async () => {
        r === !1 ? a(M) : un(() => {
          r === !0 && l((G) => Ia(G, M)), a(M);
        }), await _;
      });
      H.finished.finally(() => {
        y(void 0), x(void 0), c(void 0), h({ isTransitioning: !1 });
      }), x(H);
    }
  }, [
    u,
    m,
    e.window,
    r,
    l
  ]), Ue(() => {
    m && u && s.location.key === u.location.key && m.resolve();
  }, [m, w, s.location, u]), Ue(() => {
    !d.isTransitioning && T && (c(T.state), h({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: T.currentLocation,
      nextLocation: T.nextLocation
    }), b(void 0));
  }, [d.isTransitioning, T]);
  let D = be(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (M) => e.navigate(M),
    push: (M, _, H) => e.navigate(M, {
      state: _,
      preventScrollReset: H?.preventScrollReset
    }),
    replace: (M, _, H) => e.navigate(M, {
      replace: !0,
      state: _,
      preventScrollReset: H?.preventScrollReset
    })
  }), [e]), O = e.basename || "/", g = be(
    () => ({
      router: e,
      navigator: D,
      static: !1,
      basename: O,
      onError: n
    }),
    [e, D, O, n]
  );
  return /* @__PURE__ */ $(ot, null, /* @__PURE__ */ $(Mt.Provider, { value: g }, /* @__PURE__ */ $(xn.Provider, { value: s }, /* @__PURE__ */ $(gs.Provider, { value: P.current }, /* @__PURE__ */ $(ci.Provider, { value: d }, /* @__PURE__ */ $(
    kd,
    {
      basename: O,
      location: s.location,
      navigationType: s.historyAction,
      navigator: D,
      unstable_useTransitions: r
    },
    /* @__PURE__ */ $(
      Ld,
      {
        routes: e.routes,
        future: e.future,
        state: s,
        onError: n
      }
    )
  ))))), null);
}
function Ia(e, t) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...e,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
    revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
    actionData: t.navigation.state !== "submitting" ? t.actionData : e.actionData,
    fetchers: t.fetchers
  };
}
var Ld = Yo(Vd);
function Vd({
  routes: e,
  future: t,
  state: n,
  onError: r
}) {
  return hd(e, void 0, n, r, t);
}
function Id(e) {
  return dd(e.context);
}
function kd({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: i,
  static: o = !1,
  unstable_useTransitions: a
}) {
  W(
    !Tn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let s = e.replace(/^\/*/, "/"), l = be(
    () => ({
      basename: s,
      navigator: i,
      static: o,
      unstable_useTransitions: a,
      future: {}
    }),
    [s, i, o, a]
  );
  typeof n == "string" && (n = ct(n));
  let {
    pathname: u = "/",
    search: c = "",
    hash: d = "",
    state: h = null,
    key: m = "default"
  } = n, y = be(() => {
    let w = Ne(u, s);
    return w == null ? null : {
      location: {
        pathname: w,
        search: c,
        hash: d,
        state: h,
        key: m
      },
      navigationType: r
    };
  }, [s, u, c, d, h, m, r]);
  return de(
    y != null,
    `<Router basename="${s}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`
  ), y == null ? null : /* @__PURE__ */ $(je.Provider, { value: l }, /* @__PURE__ */ $(nr.Provider, { children: t, value: y }));
}
var zn = "get", Wn = "application/x-www-form-urlencoded";
function rr(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Fd(e) {
  return rr(e) && e.tagName.toLowerCase() === "button";
}
function Od(e) {
  return rr(e) && e.tagName.toLowerCase() === "form";
}
function Nd(e) {
  return rr(e) && e.tagName.toLowerCase() === "input";
}
function jd(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Bd(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !jd(e);
}
var jn = null;
function Ud() {
  if (jn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), jn = !1;
    } catch {
      jn = !0;
    }
  return jn;
}
var $d = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function yr(e) {
  return e != null && !$d.has(e) ? (de(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wn}"`
  ), null) : e;
}
function _d(e, t) {
  let n, r, i, o, a;
  if (Od(e)) {
    let s = e.getAttribute("action");
    r = s ? Ne(s, t) : null, n = e.getAttribute("method") || zn, i = yr(e.getAttribute("enctype")) || Wn, o = new FormData(e);
  } else if (Fd(e) || Nd(e) && (e.type === "submit" || e.type === "image")) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || s.getAttribute("action");
    if (r = l ? Ne(l, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || zn, i = yr(e.getAttribute("formenctype")) || yr(s.getAttribute("enctype")) || Wn, o = new FormData(s, e), !Ud()) {
      let { name: u, type: c, value: d } = e;
      if (c === "image") {
        let h = u ? `${u}.` : "";
        o.append(`${h}x`, "0"), o.append(`${h}y`, "0");
      } else u && o.append(u, d);
    }
  } else {
    if (rr(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    n = zn, r = null, i = Wn, a = e;
  }
  return o && i === "text/plain" && (a = o, o = void 0), { action: r, method: n.toLowerCase(), encType: i, formData: o, body: a };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function mi(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function zd(e, t, n, r) {
  let i = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && Ne(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function Wd(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = n, n;
  } catch (n) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Hd(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Kd(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let o = t.routes[i.route.id];
      if (o) {
        let a = await Wd(o, n);
        return a.links ? a.links() : [];
      }
      return [];
    })
  );
  return qd(
    r.flat(1).filter(Hd).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
      (i) => i.rel === "stylesheet" ? { ...i, rel: "prefetch", as: "style" } : { ...i, rel: "prefetch" }
    )
  );
}
function ka(e, t, n, r, i, o) {
  let a = (l, u) => n[u] ? l.route.id !== n[u].route.id : !0, s = (l, u) => (
    // param change, /users/123 -> /users/456
    n[u].pathname !== l.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n[u].route.path?.endsWith("*") && n[u].params["*"] !== l.params["*"]
  );
  return o === "assets" ? t.filter(
    (l, u) => a(l, u) || s(l, u)
  ) : o === "data" ? t.filter((l, u) => {
    let c = r.routes[l.route.id];
    if (!c || !c.hasLoader)
      return !1;
    if (a(l, u) || s(l, u))
      return !0;
    if (l.route.shouldRevalidate) {
      let d = l.route.shouldRevalidate({
        currentUrl: new URL(
          i.pathname + i.search + i.hash,
          window.origin
        ),
        currentParams: n[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof d == "boolean")
        return d;
    }
    return !0;
  }) : [];
}
function Gd(e, t, { includeHydrateFallback: n } = {}) {
  return Yd(
    e.map((r) => {
      let i = t.routes[r.route.id];
      if (!i) return [];
      let o = [i.module];
      return i.clientActionModule && (o = o.concat(i.clientActionModule)), i.clientLoaderModule && (o = o.concat(i.clientLoaderModule)), n && i.hydrateFallbackModule && (o = o.concat(i.hydrateFallbackModule)), i.imports && (o = o.concat(i.imports)), o;
    }).flat(1)
  );
}
function Yd(e) {
  return [...new Set(e)];
}
function Xd(e) {
  let t = {}, n = Object.keys(e).sort();
  for (let r of n)
    t[r] = e[r];
  return t;
}
function qd(e, t) {
  let n = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((r, i) => {
    let o = JSON.stringify(Xd(i));
    return n.has(o) || (n.add(o), r.push({ key: o, link: i })), r;
  }, []);
}
function Ps() {
  let e = U(Mt);
  return mi(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function Zd() {
  let e = U(xn);
  return mi(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var pi = he(void 0);
pi.displayName = "FrameworkContext";
function Ss() {
  let e = U(pi);
  return mi(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Jd(e, t) {
  let n = U(pi), [r, i] = _e(!1), [o, a] = _e(!1), { onFocus: s, onBlur: l, onMouseEnter: u, onMouseLeave: c, onTouchStart: d } = t, h = Je(null);
  Ue(() => {
    if (e === "render" && a(!0), e === "viewport") {
      let w = (T) => {
        T.forEach((b) => {
          a(b.isIntersecting);
        });
      }, x = new IntersectionObserver(w, { threshold: 0.5 });
      return h.current && x.observe(h.current), () => {
        x.disconnect();
      };
    }
  }, [e]), Ue(() => {
    if (r) {
      let w = setTimeout(() => {
        a(!0);
      }, 100);
      return () => {
        clearTimeout(w);
      };
    }
  }, [r]);
  let m = () => {
    i(!0);
  }, y = () => {
    i(!1), a(!1);
  };
  return n ? e !== "intent" ? [o, h, {}] : [
    o,
    h,
    {
      onFocus: Zt(s, m),
      onBlur: Zt(l, y),
      onMouseEnter: Zt(u, m),
      onMouseLeave: Zt(c, y),
      onTouchStart: Zt(d, m)
    }
  ] : [!1, h, {}];
}
function Zt(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Qd({ page: e, ...t }) {
  let { router: n } = Ps(), r = be(
    () => rt(n.routes, e, n.basename),
    [n.routes, e, n.basename]
  );
  return r ? /* @__PURE__ */ $(th, { page: e, matches: r, ...t }) : null;
}
function eh(e) {
  let { manifest: t, routeModules: n } = Ss(), [r, i] = _e([]);
  return Ue(() => {
    let o = !1;
    return Kd(e, t, n).then(
      (a) => {
        o || i(a);
      }
    ), () => {
      o = !0;
    };
  }, [e, t, n]), r;
}
function th({
  page: e,
  matches: t,
  ...n
}) {
  let r = dt(), { future: i, manifest: o, routeModules: a } = Ss(), { basename: s } = Ps(), { loaderData: l, matches: u } = Zd(), c = be(
    () => ka(
      e,
      t,
      u,
      o,
      r,
      "data"
    ),
    [e, t, u, o, r]
  ), d = be(
    () => ka(
      e,
      t,
      u,
      o,
      r,
      "assets"
    ),
    [e, t, u, o, r]
  ), h = be(() => {
    if (e === r.pathname + r.search + r.hash)
      return [];
    let w = /* @__PURE__ */ new Set(), x = !1;
    if (t.forEach((b) => {
      let P = o.routes[b.route.id];
      !P || !P.hasLoader || (!c.some((L) => L.route.id === b.route.id) && b.route.id in l && a[b.route.id]?.shouldRevalidate || P.hasClientLoader ? x = !0 : w.add(b.route.id));
    }), w.size === 0)
      return [];
    let T = zd(
      e,
      s,
      i.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return x && w.size > 0 && T.searchParams.set(
      "_routes",
      t.filter((b) => w.has(b.route.id)).map((b) => b.route.id).join(",")
    ), [T.pathname + T.search];
  }, [
    s,
    i.unstable_trailingSlashAwareDataRequests,
    l,
    r,
    o,
    c,
    t,
    e,
    a
  ]), m = be(
    () => Gd(d, o),
    [d, o]
  ), y = eh(d);
  return /* @__PURE__ */ $(ot, null, h.map((w) => /* @__PURE__ */ $("link", { key: w, rel: "prefetch", as: "fetch", href: w, ...n })), m.map((w) => /* @__PURE__ */ $("link", { key: w, rel: "modulepreload", href: w, ...n })), y.map(({ key: w, link: x }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ $(
      "link",
      {
        key: w,
        nonce: n.nonce,
        ...x,
        crossOrigin: x.crossOrigin ?? n.crossOrigin
      }
    )
  )));
}
function nh(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var rh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  rh && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function ih(e, t) {
  return Ac({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: Ku({ window: t?.window }),
    hydrationData: ah(),
    routes: e,
    mapRouteProperties: Md,
    hydrationRouteProperties: Dd,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
    unstable_instrumentations: t?.unstable_instrumentations
  }).initialize();
}
function ah() {
  let e = window?.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: oh(e.errors)
  }), e;
}
function oh(e) {
  if (!e) return null;
  let t = Object.entries(e), n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new bn(
        i.status,
        i.statusText,
        i.data,
        i.internal === !0
      );
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let a = new o(i.message);
            a.stack = "", n[r] = a;
          } catch {
          }
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        o.stack = "", n[r] = o;
      }
    } else
      n[r] = i;
  return n;
}
var Rs = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, jt = Et(
  function({
    onClick: t,
    discover: n = "render",
    prefetch: r = "none",
    relative: i,
    reloadDocument: o,
    replace: a,
    state: s,
    target: l,
    to: u,
    preventScrollReset: c,
    viewTransition: d,
    unstable_defaultShouldRevalidate: h,
    ...m
  }, y) {
    let { basename: w, unstable_useTransitions: x } = U(je), T = typeof u == "string" && Rs.test(u), b = is(u, w);
    u = b.to;
    let P = sd(u, { relative: i }), [L, D, O] = Jd(
      r,
      m
    ), g = ch(u, {
      replace: a,
      state: s,
      target: l,
      preventScrollReset: c,
      relative: i,
      viewTransition: d,
      unstable_defaultShouldRevalidate: h,
      unstable_useTransitions: x
    });
    function M(H) {
      t && t(H), H.defaultPrevented || g(H);
    }
    let _ = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ $(
        "a",
        {
          ...m,
          ...O,
          href: b.absoluteURL || P,
          onClick: b.isExternal || o ? t : M,
          ref: nh(y, D),
          target: l,
          "data-discover": !T && n === "render" ? "true" : void 0
        }
      )
    );
    return L && !T ? /* @__PURE__ */ $(ot, null, _, /* @__PURE__ */ $(Qd, { page: P })) : _;
  }
);
jt.displayName = "Link";
var sh = Et(
  function({
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: i = !1,
    style: o,
    to: a,
    viewTransition: s,
    children: l,
    ...u
  }, c) {
    let d = Pn(a, { relative: u.relative }), h = dt(), m = U(xn), { navigator: y, basename: w } = U(je), x = m != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ph(d) && s === !0, T = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname, b = h.pathname, P = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
    n || (b = b.toLowerCase(), P = P ? P.toLowerCase() : null, T = T.toLowerCase()), P && w && (P = Ne(P, w) || P);
    const L = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
    let D = b === T || !i && b.startsWith(T) && b.charAt(L) === "/", O = P != null && (P === T || !i && P.startsWith(T) && P.charAt(T.length) === "/"), g = {
      isActive: D,
      isPending: O,
      isTransitioning: x
    }, M = D ? t : void 0, _;
    typeof r == "function" ? _ = r(g) : _ = [
      r,
      D ? "active" : null,
      O ? "pending" : null,
      x ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let H = typeof o == "function" ? o(g) : o;
    return /* @__PURE__ */ $(
      jt,
      {
        ...u,
        "aria-current": M,
        className: _,
        ref: c,
        style: H,
        to: a,
        viewTransition: s
      },
      typeof l == "function" ? l(g) : l
    );
  }
);
sh.displayName = "NavLink";
var lh = Et(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: n,
    reloadDocument: r,
    replace: i,
    state: o,
    method: a = zn,
    action: s,
    onSubmit: l,
    relative: u,
    preventScrollReset: c,
    viewTransition: d,
    unstable_defaultShouldRevalidate: h,
    ...m
  }, y) => {
    let { unstable_useTransitions: w } = U(je), x = fh(), T = mh(s, { relative: u }), b = a.toLowerCase() === "get" ? "get" : "post", P = typeof s == "string" && Rs.test(s);
    return /* @__PURE__ */ $(
      "form",
      {
        ref: y,
        method: b,
        action: T,
        onSubmit: r ? l : (D) => {
          if (l && l(D), D.defaultPrevented) return;
          D.preventDefault();
          let O = D.nativeEvent.submitter, g = O?.getAttribute("formmethod") || a, M = () => x(O || D.currentTarget, {
            fetcherKey: t,
            method: g,
            navigate: n,
            replace: i,
            state: o,
            relative: u,
            preventScrollReset: c,
            viewTransition: d,
            unstable_defaultShouldRevalidate: h
          });
          w && n !== !1 ? un(() => M()) : M();
        },
        ...m,
        "data-discover": !P && e === "render" ? "true" : void 0
      }
    );
  }
);
lh.displayName = "Form";
function uh(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Es(e) {
  let t = U(Mt);
  return W(t, uh(e)), t;
}
function ch(e, {
  target: t,
  replace: n,
  state: r,
  preventScrollReset: i,
  relative: o,
  viewTransition: a,
  unstable_defaultShouldRevalidate: s,
  unstable_useTransitions: l
} = {}) {
  let u = ld(), c = dt(), d = Pn(e, { relative: o });
  return ut(
    (h) => {
      if (Bd(h, t)) {
        h.preventDefault();
        let m = n !== void 0 ? n : Ke(c) === Ke(d), y = () => u(e, {
          replace: m,
          state: r,
          preventScrollReset: i,
          relative: o,
          viewTransition: a,
          unstable_defaultShouldRevalidate: s
        });
        l ? un(() => y()) : y();
      }
    },
    [
      c,
      u,
      d,
      n,
      r,
      t,
      e,
      i,
      o,
      a,
      s,
      l
    ]
  );
}
var dh = 0, hh = () => `__${String(++dh)}__`;
function fh() {
  let { router: e } = Es(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = U(je), n = xd(), r = e.fetch, i = e.navigate;
  return ut(
    async (o, a = {}) => {
      let { action: s, method: l, encType: u, formData: c, body: d } = _d(
        o,
        t
      );
      if (a.navigate === !1) {
        let h = a.fetcherKey || hh();
        await r(h, n, a.action || s, {
          unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: c,
          body: d,
          formMethod: a.method || l,
          formEncType: a.encType || u,
          flushSync: a.flushSync
        });
      } else
        await i(a.action || s, {
          unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: c,
          body: d,
          formMethod: a.method || l,
          formEncType: a.encType || u,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        });
    },
    [r, i, t, n]
  );
}
function mh(e, { relative: t } = {}) {
  let { basename: n } = U(je), r = U(Ge);
  W(r, "useFormAction must be used inside a RouteContext");
  let [i] = r.matches.slice(-1), o = { ...Pn(e || ".", { relative: t }) }, a = dt();
  if (e == null) {
    o.search = a.search;
    let s = new URLSearchParams(o.search), l = s.getAll("index");
    if (l.some((c) => c === "")) {
      s.delete("index"), l.filter((d) => d).forEach((d) => s.append("index", d));
      let c = s.toString();
      o.search = c ? `?${c}` : "";
    }
  }
  return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : ze([n, o.pathname])), Ke(o);
}
function ph(e, { relative: t } = {}) {
  let n = U(ci);
  W(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Es(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), i = Pn(e, { relative: t });
  if (!n.isTransitioning)
    return !1;
  let o = Ne(n.currentLocation.pathname, r) || n.currentLocation.pathname, a = Ne(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Xn(i.pathname, a) != null || Xn(i.pathname, o) != null;
}
const Ms = he({});
function yh(e) {
  const t = Je(null);
  return t.current === null && (t.current = e()), t.current;
}
const yi = typeof window < "u", gh = yi ? tr : Ue, gi = /* @__PURE__ */ he(null);
function vi(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function bi(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Qe = (e, t, n) => n > t ? t : n < e ? e : n;
let wi = () => {
};
const et = {}, Ds = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Cs(e) {
  return typeof e == "object" && e !== null;
}
const As = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function xi(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Oe = /* @__NO_SIDE_EFFECTS__ */ (e) => e, vh = (e, t) => (n) => t(e(n)), Sn = (...e) => e.reduce(vh), fn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Ti {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return vi(this.subscriptions, t), () => bi(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const a = this.subscriptions[o];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const We = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Fe = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Ls(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Vs = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, bh = 1e-7, wh = 12;
function xh(e, t, n, r, i) {
  let o, a, s = 0;
  do
    a = t + (n - t) / 2, o = Vs(a, r, i) - e, o > 0 ? n = a : t = a;
  while (Math.abs(o) > bh && ++s < wh);
  return a;
}
function Rn(e, t, n, r) {
  if (e === t && n === r)
    return Oe;
  const i = (o) => xh(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Vs(i(o), t, r);
}
const Is = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ks = (e) => (t) => 1 - e(1 - t), Fs = /* @__PURE__ */ Rn(0.33, 1.53, 0.69, 0.99), Pi = /* @__PURE__ */ ks(Fs), Os = /* @__PURE__ */ Is(Pi), Ns = (e) => (e *= 2) < 1 ? 0.5 * Pi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Si = (e) => 1 - Math.sin(Math.acos(e)), js = ks(Si), Bs = Is(Si), Th = /* @__PURE__ */ Rn(0.42, 0, 1, 1), Ph = /* @__PURE__ */ Rn(0, 0, 0.58, 1), Us = /* @__PURE__ */ Rn(0.42, 0, 0.58, 1), Sh = (e) => Array.isArray(e) && typeof e[0] != "number", $s = (e) => Array.isArray(e) && typeof e[0] == "number", Rh = {
  linear: Oe,
  easeIn: Th,
  easeInOut: Us,
  easeOut: Ph,
  circIn: Si,
  circInOut: Bs,
  circOut: js,
  backIn: Pi,
  backInOut: Os,
  backOut: Fs,
  anticipate: Ns
}, Eh = (e) => typeof e == "string", Fa = (e) => {
  if ($s(e)) {
    wi(e.length === 4);
    const [t, n, r, i] = e;
    return Rn(t, n, r, i);
  } else if (Eh(e))
    return Rh[e];
  return e;
}, Bn = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Mh(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const a = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    a.has(c) && (u.schedule(c), e()), c(s);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, d = !1, h = !1) => {
      const y = h && i ? n : r;
      return d && a.add(c), y.has(c) || y.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      r.delete(c), a.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (s = c, i) {
        o = !0;
        return;
      }
      i = !0, [n, r] = [r, n], n.forEach(l), n.clear(), i = !1, o && (o = !1, u.process(c));
    }
  };
  return u;
}
const Dh = 40;
function _s(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, a = Bn.reduce((P, L) => (P[L] = Mh(o), P), {}), { setup: s, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: h, render: m, postRender: y } = a, w = () => {
    const P = et.useManualTiming ? i.timestamp : performance.now();
    n = !1, et.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(P - i.timestamp, Dh), 1)), i.timestamp = P, i.isProcessing = !0, s.process(i), l.process(i), u.process(i), c.process(i), d.process(i), h.process(i), m.process(i), y.process(i), i.isProcessing = !1, n && t && (r = !1, e(w));
  }, x = () => {
    n = !0, r = !0, i.isProcessing || e(w);
  };
  return { schedule: Bn.reduce((P, L) => {
    const D = a[L];
    return P[L] = (O, g = !1, M = !1) => (n || x(), D.schedule(O, g, M)), P;
  }, {}), cancel: (P) => {
    for (let L = 0; L < Bn.length; L++)
      a[Bn[L]].cancel(P);
  }, state: i, steps: a };
}
const { schedule: ne, cancel: st, state: pe, steps: gr } = /* @__PURE__ */ _s(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Oe, !0);
let Hn;
function Ch() {
  Hn = void 0;
}
const Se = {
  now: () => (Hn === void 0 && Se.set(pe.isProcessing || et.useManualTiming ? pe.timestamp : performance.now()), Hn),
  set: (e) => {
    Hn = e, queueMicrotask(Ch);
  }
}, zs = (e) => (t) => typeof t == "string" && t.startsWith(e), Ri = /* @__PURE__ */ zs("--"), Ah = /* @__PURE__ */ zs("var(--"), Ei = (e) => Ah(e) ? Lh.test(e.split("/*")[0].trim()) : !1, Lh = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, _t = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, mn = {
  ..._t,
  transform: (e) => Qe(0, 1, e)
}, Un = {
  ..._t,
  default: 1
}, rn = (e) => Math.round(e * 1e5) / 1e5, Mi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Vh(e) {
  return e == null;
}
const Ih = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Di = (e, t) => (n) => !!(typeof n == "string" && Ih.test(n) && n.startsWith(e) || t && !Vh(n) && Object.prototype.hasOwnProperty.call(n, t)), Ws = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, o, a, s] = r.match(Mi);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, kh = (e) => Qe(0, 255, e), vr = {
  ..._t,
  transform: (e) => Math.round(kh(e))
}, Tt = {
  test: /* @__PURE__ */ Di("rgb", "red"),
  parse: /* @__PURE__ */ Ws("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + vr.transform(e) + ", " + vr.transform(t) + ", " + vr.transform(n) + ", " + rn(mn.transform(r)) + ")"
};
function Fh(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Or = {
  test: /* @__PURE__ */ Di("#"),
  parse: Fh,
  transform: Tt.transform
}, En = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), nt = /* @__PURE__ */ En("deg"), He = /* @__PURE__ */ En("%"), j = /* @__PURE__ */ En("px"), Oh = /* @__PURE__ */ En("vh"), Nh = /* @__PURE__ */ En("vw"), Oa = {
  ...He,
  parse: (e) => He.parse(e) / 100,
  transform: (e) => He.transform(e * 100)
}, Vt = {
  test: /* @__PURE__ */ Di("hsl", "hue"),
  parse: /* @__PURE__ */ Ws("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + He.transform(rn(t)) + ", " + He.transform(rn(n)) + ", " + rn(mn.transform(r)) + ")"
}, ce = {
  test: (e) => Tt.test(e) || Or.test(e) || Vt.test(e),
  parse: (e) => Tt.test(e) ? Tt.parse(e) : Vt.test(e) ? Vt.parse(e) : Or.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Tt.transform(e) : Vt.transform(e),
  getAnimatableNone: (e) => {
    const t = ce.parse(e);
    return t.alpha = 0, ce.transform(t);
  }
}, jh = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Bh(e) {
  return isNaN(e) && typeof e == "string" && (e.match(Mi)?.length || 0) + (e.match(jh)?.length || 0) > 0;
}
const Hs = "number", Ks = "color", Uh = "var", $h = "var(", Na = "${}", _h = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const s = t.replace(_h, (l) => (ce.test(l) ? (r.color.push(o), i.push(Ks), n.push(ce.parse(l))) : l.startsWith($h) ? (r.var.push(o), i.push(Uh), n.push(l)) : (r.number.push(o), i.push(Hs), n.push(parseFloat(l))), ++o, Na)).split(Na);
  return { values: n, split: s, indexes: r, types: i };
}
function Gs(e) {
  return pn(e).values;
}
function Ys(e) {
  const { split: t, types: n } = pn(e), r = t.length;
  return (i) => {
    let o = "";
    for (let a = 0; a < r; a++)
      if (o += t[a], i[a] !== void 0) {
        const s = n[a];
        s === Hs ? o += rn(i[a]) : s === Ks ? o += ce.transform(i[a]) : o += i[a];
      }
    return o;
  };
}
const zh = (e) => typeof e == "number" ? 0 : ce.test(e) ? ce.getAnimatableNone(e) : e;
function Wh(e) {
  const t = Gs(e);
  return Ys(e)(t.map(zh));
}
const lt = {
  test: Bh,
  parse: Gs,
  createTransformer: Ys,
  getAnimatableNone: Wh
};
function br(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Hh({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, a = 0;
  if (!t)
    i = o = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    i = br(l, s, e + 1 / 3), o = br(l, s, e), a = br(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function qn(e, t) {
  return (n) => n > 0 ? t : e;
}
const re = (e, t, n) => e + (t - e) * n, wr = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, Kh = [Or, Tt, Vt], Gh = (e) => Kh.find((t) => t.test(e));
function ja(e) {
  const t = Gh(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Vt && (n = Hh(n)), n;
}
const Ba = (e, t) => {
  const n = ja(e), r = ja(t);
  if (!n || !r)
    return qn(e, t);
  const i = { ...n };
  return (o) => (i.red = wr(n.red, r.red, o), i.green = wr(n.green, r.green, o), i.blue = wr(n.blue, r.blue, o), i.alpha = re(n.alpha, r.alpha, o), Tt.transform(i));
}, Nr = /* @__PURE__ */ new Set(["none", "hidden"]);
function Yh(e, t) {
  return Nr.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Xh(e, t) {
  return (n) => re(e, t, n);
}
function Ci(e) {
  return typeof e == "number" ? Xh : typeof e == "string" ? Ei(e) ? qn : ce.test(e) ? Ba : Jh : Array.isArray(e) ? Xs : typeof e == "object" ? ce.test(e) ? Ba : qh : qn;
}
function Xs(e, t) {
  const n = [...e], r = n.length, i = e.map((o, a) => Ci(o)(o, t[a]));
  return (o) => {
    for (let a = 0; a < r; a++)
      n[a] = i[a](o);
    return n;
  };
}
function qh(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ci(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r)
      n[o] = r[o](i);
    return n;
  };
}
function Zh(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i], a = e.indexes[o][r[o]], s = e.values[a] ?? 0;
    n[i] = s, r[o]++;
  }
  return n;
}
const Jh = (e, t) => {
  const n = lt.createTransformer(t), r = pn(e), i = pn(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Nr.has(e) && !i.values.length || Nr.has(t) && !r.values.length ? Yh(e, t) : Sn(Xs(Zh(r, i), i.values), n) : qn(e, t);
};
function qs(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? re(e, t, n) : Ci(e)(e, t);
}
const Qh = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => ne.update(t, n),
    stop: () => st(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => pe.isProcessing ? pe.timestamp : Se.now()
  };
}, Zs = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < i; o++)
    r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Zn = 2e4;
function Ai(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Zn; )
    t += n, r = e.next(t);
  return t >= Zn ? 1 / 0 : t;
}
function ef(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), i = Math.min(Ai(r), Zn);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: /* @__PURE__ */ Fe(i)
  };
}
const tf = 5;
function Js(e, t, n) {
  const r = Math.max(t - tf, 0);
  return Ls(n - e(r), t - r);
}
const oe = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, xr = 1e-3;
function nf({ duration: e = oe.duration, bounce: t = oe.bounce, velocity: n = oe.velocity, mass: r = oe.mass }) {
  let i, o, a = 1 - t;
  a = Qe(oe.minDamping, oe.maxDamping, a), e = Qe(oe.minDuration, oe.maxDuration, /* @__PURE__ */ Fe(e)), a < 1 ? (i = (u) => {
    const c = u * a, d = c * e, h = c - n, m = jr(u, a), y = Math.exp(-d);
    return xr - h / m * y;
  }, o = (u) => {
    const d = u * a * e, h = d * n + n, m = Math.pow(a, 2) * Math.pow(u, 2) * e, y = Math.exp(-d), w = jr(Math.pow(u, 2), a);
    return (-i(u) + xr > 0 ? -1 : 1) * ((h - m) * y) / w;
  }) : (i = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -xr + c * d;
  }, o = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = af(i, o, s);
  if (e = /* @__PURE__ */ We(e), isNaN(l))
    return {
      stiffness: oe.stiffness,
      damping: oe.damping,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const rf = 12;
function af(e, t, n) {
  let r = n;
  for (let i = 1; i < rf; i++)
    r = r - e(r) / t(r);
  return r;
}
function jr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const of = ["duration", "bounce"], sf = ["stiffness", "damping", "mass"];
function Ua(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function lf(e) {
  let t = {
    velocity: oe.velocity,
    stiffness: oe.stiffness,
    damping: oe.damping,
    mass: oe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ua(e, sf) && Ua(e, of))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, o = 2 * Qe(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: oe.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = nf(e);
      t = {
        ...t,
        ...n,
        mass: oe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Jn(e = oe.visualDuration, t = oe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], s = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: d, velocity: h, isResolvedFromDuration: m } = lf({
    ...n,
    velocity: -/* @__PURE__ */ Fe(n.velocity || 0)
  }), y = h || 0, w = u / (2 * Math.sqrt(l * c)), x = a - o, T = /* @__PURE__ */ Fe(Math.sqrt(l / c)), b = Math.abs(x) < 5;
  r || (r = b ? oe.restSpeed.granular : oe.restSpeed.default), i || (i = b ? oe.restDelta.granular : oe.restDelta.default);
  let P;
  if (w < 1) {
    const D = jr(T, w);
    P = (O) => {
      const g = Math.exp(-w * T * O);
      return a - g * ((y + w * T * x) / D * Math.sin(D * O) + x * Math.cos(D * O));
    };
  } else if (w === 1)
    P = (D) => a - Math.exp(-T * D) * (x + (y + T * x) * D);
  else {
    const D = T * Math.sqrt(w * w - 1);
    P = (O) => {
      const g = Math.exp(-w * T * O), M = Math.min(D * O, 300);
      return a - g * ((y + w * T * x) * Math.sinh(M) + D * x * Math.cosh(M)) / D;
    };
  }
  const L = {
    calculatedDuration: m && d || null,
    next: (D) => {
      const O = P(D);
      if (m)
        s.done = D >= d;
      else {
        let g = D === 0 ? y : 0;
        w < 1 && (g = D === 0 ? /* @__PURE__ */ We(y) : Js(P, D, O));
        const M = Math.abs(g) <= r, _ = Math.abs(a - O) <= i;
        s.done = M && _;
      }
      return s.value = s.done ? a : O, s;
    },
    toString: () => {
      const D = Math.min(Ai(L), Zn), O = Zs((g) => L.next(D * g).value, D, 30);
      return D + "ms " + O;
    },
    toTransition: () => {
    }
  };
  return L;
}
Jn.applyToOptions = (e) => {
  const t = ef(e, 100, Jn);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ We(t.duration), e.type = "keyframes", e;
};
function Br({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], h = {
    done: !1,
    value: d
  }, m = (M) => s !== void 0 && M < s || l !== void 0 && M > l, y = (M) => s === void 0 ? l : l === void 0 || Math.abs(s - M) < Math.abs(l - M) ? s : l;
  let w = n * t;
  const x = d + w, T = a === void 0 ? x : a(x);
  T !== x && (w = T - d);
  const b = (M) => -w * Math.exp(-M / r), P = (M) => T + b(M), L = (M) => {
    const _ = b(M), H = P(M);
    h.done = Math.abs(_) <= u, h.value = h.done ? T : H;
  };
  let D, O;
  const g = (M) => {
    m(h.value) && (D = M, O = Jn({
      keyframes: [h.value, y(h.value)],
      velocity: Js(P, M, h.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return g(0), {
    calculatedDuration: null,
    next: (M) => {
      let _ = !1;
      return !O && D === void 0 && (_ = !0, L(M), g(M)), D !== void 0 && M >= D ? O.next(M - D) : (!_ && L(M), h);
    }
  };
}
function uf(e, t, n) {
  const r = [], i = n || et.mix || qs, o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let s = i(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Oe : t;
      s = Sn(l, s);
    }
    r.push(s);
  }
  return r;
}
function cf(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (wi(o === t.length), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const s = uf(t, r, i), l = s.length, u = (c) => {
    if (a && c < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(c < e[d + 1]); d++)
        ;
    const h = /* @__PURE__ */ fn(e[d], e[d + 1], c);
    return s[d](h);
  };
  return n ? (c) => u(Qe(e[0], e[o - 1], c)) : u;
}
function df(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ fn(0, t, r);
    e.push(re(n, 1, i));
  }
}
function hf(e) {
  const t = [0];
  return df(t, e.length - 1), t;
}
function ff(e, t) {
  return e.map((n) => n * t);
}
function mf(e, t) {
  return e.map(() => t || Us).splice(0, e.length - 1);
}
function an({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = Sh(r) ? r.map(Fa) : Fa(r), o = {
    done: !1,
    value: t[0]
  }, a = ff(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : hf(t),
    e
  ), s = cf(a, t, {
    ease: Array.isArray(i) ? i : mf(t, i)
  });
  return {
    calculatedDuration: e,
    next: (l) => (o.value = s(l), o.done = l >= e, o)
  };
}
const pf = (e) => e !== null;
function Li(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(pf), s = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const yf = {
  decay: Br,
  inertia: Br,
  tween: an,
  keyframes: an,
  spring: Jn
};
function Qs(e) {
  typeof e.type == "string" && (e.type = yf[e.type]);
}
class Vi {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const gf = (e) => e / 100;
class Ii extends Vi {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Se.now() && this.tick(Se.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Qs(t);
    const { type: n = an, repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: a = 0 } = t;
    let { keyframes: s } = t;
    const l = n || an;
    l !== an && typeof s[0] != "number" && (this.mixKeyframes = Sn(gf, qs(s[0], s[1])), s = [0, 100]);
    const u = l({ ...t, keyframes: s });
    o === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...s].reverse(),
      velocity: -a
    })), u.calculatedDuration === null && (u.calculatedDuration = Ai(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = u;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: i, mixKeyframes: o, mirroredGenerator: a, resolvedDuration: s, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: u = 0, keyframes: c, repeat: d, repeatType: h, repeatDelay: m, type: y, onUpdate: w, finalKeyframe: x } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const T = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? T < 0 : T > i;
    this.currentTime = Math.max(T, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let P = this.currentTime, L = r;
    if (d) {
      const M = Math.min(this.currentTime, i) / s;
      let _ = Math.floor(M), H = M % 1;
      !H && M >= 1 && (H = 1), H === 1 && _--, _ = Math.min(_, d + 1), !!(_ % 2) && (h === "reverse" ? (H = 1 - H, m && (H -= m / s)) : h === "mirror" && (L = a)), P = Qe(0, 1, H) * s;
    }
    const D = b ? { done: !1, value: c[0] } : L.next(P);
    o && (D.value = o(D.value));
    let { done: O } = D;
    !b && l !== null && (O = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const g = this.holdTime === null && (this.state === "finished" || this.state === "running" && O);
    return g && y !== Br && (D.value = Li(c, this.options, x, this.speed)), w && w(D.value), g && this.finish(), D;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ Fe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Fe(t);
  }
  get time() {
    return /* @__PURE__ */ Fe(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ We(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Se.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Fe(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = Qh, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Se.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function vf(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Pt = (e) => e * 180 / Math.PI, Ur = (e) => {
  const t = Pt(Math.atan2(e[1], e[0]));
  return $r(t);
}, bf = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Ur,
  rotateZ: Ur,
  skewX: (e) => Pt(Math.atan(e[1])),
  skewY: (e) => Pt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, $r = (e) => (e = e % 360, e < 0 && (e += 360), e), $a = Ur, _a = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), za = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), wf = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: _a,
  scaleY: za,
  scale: (e) => (_a(e) + za(e)) / 2,
  rotateX: (e) => $r(Pt(Math.atan2(e[6], e[5]))),
  rotateY: (e) => $r(Pt(Math.atan2(-e[2], e[0]))),
  rotateZ: $a,
  rotate: $a,
  skewX: (e) => Pt(Math.atan(e[4])),
  skewY: (e) => Pt(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function _r(e) {
  return e.includes("scale") ? 1 : 0;
}
function zr(e, t) {
  if (!e || e === "none")
    return _r(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n)
    r = wf, i = n;
  else {
    const s = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = bf, i = s;
  }
  if (!i)
    return _r(t);
  const o = r[t], a = i[1].split(",").map(Tf);
  return typeof o == "function" ? o(a) : a[o];
}
const xf = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return zr(n, t);
};
function Tf(e) {
  return parseFloat(e.trim());
}
const zt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Wt = new Set(zt), Wa = (e) => e === _t || e === j, Pf = /* @__PURE__ */ new Set(["x", "y", "z"]), Sf = zt.filter((e) => !Pf.has(e));
function Rf(e) {
  const t = [];
  return Sf.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const St = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => zr(t, "x"),
  y: (e, { transform: t }) => zr(t, "y")
};
St.translateX = St.x;
St.translateY = St.y;
const Rt = /* @__PURE__ */ new Set();
let Wr = !1, Hr = !1, Kr = !1;
function el() {
  if (Hr) {
    const e = Array.from(Rt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = Rf(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([o, a]) => {
        r.getValue(o)?.set(a);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Hr = !1, Wr = !1, Rt.forEach((e) => e.complete(Kr)), Rt.clear();
}
function tl() {
  Rt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Hr = !0);
  });
}
function Ef() {
  Kr = !0, tl(), el(), Kr = !1;
}
class ki {
  constructor(t, n, r, i, o, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Rt.add(this), Wr || (Wr = !0, ne.read(tl), ne.resolveKeyframes(el))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    if (t[0] === null) {
      const o = i?.get(), a = t[t.length - 1];
      if (o !== void 0)
        t[0] = o;
      else if (r && n) {
        const s = r.readValue(n, a);
        s != null && (t[0] = s);
      }
      t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
    }
    vf(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Rt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Rt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Mf = (e) => e.startsWith("--");
function Df(e, t, n) {
  Mf(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const Cf = /* @__PURE__ */ xi(() => window.ScrollTimeline !== void 0), Af = {};
function Lf(e, t) {
  const n = /* @__PURE__ */ xi(e);
  return () => Af[t] ?? n();
}
const nl = /* @__PURE__ */ Lf(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), tn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Ha = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ tn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ tn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ tn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ tn([0.33, 1.53, 0.69, 0.99])
};
function rl(e, t) {
  if (e)
    return typeof e == "function" ? nl() ? Zs(e, t) : "ease-out" : $s(e) ? tn(e) : Array.isArray(e) ? e.map((n) => rl(n, t) || Ha.easeOut) : Ha[e];
}
function Vf(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: a = "loop", ease: s = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [t]: n
  };
  l && (c.offset = l);
  const d = rl(s, i);
  Array.isArray(d) && (c.easing = d);
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  };
  return u && (h.pseudoElement = u), e.animate(c, h);
}
function il(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function If({ type: e, ...t }) {
  return il(e) && nl() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class kf extends Vi {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: i, pseudoElement: o, allowFlatten: a = !1, finalKeyframe: s, onComplete: l } = t;
    this.isPseudoElement = !!o, this.allowFlatten = a, this.options = t, wi(typeof t.type != "string");
    const u = If(t);
    this.animation = Vf(n, r, i, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = Li(i, this.options, s, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : Df(n, r, c), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Fe(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Fe(t);
  }
  get time() {
    return /* @__PURE__ */ Fe(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ We(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && Cf() ? (this.animation.timeline = t, Oe) : n(this);
  }
}
const al = {
  anticipate: Ns,
  backInOut: Os,
  circInOut: Bs
};
function Ff(e) {
  return e in al;
}
function Of(e) {
  typeof e.ease == "string" && Ff(e.ease) && (e.ease = al[e.ease]);
}
const Ka = 10;
class Nf extends kf {
  constructor(t) {
    Of(t), Qs(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: i, element: o, ...a } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const s = new Ii({
      ...a,
      autoplay: !1
    }), l = /* @__PURE__ */ We(this.finishedTime ?? this.time);
    n.setWithVelocity(s.sample(l - Ka).value, s.sample(l).value, Ka), s.stop();
  }
}
const Ga = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(lt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function jf(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Bf(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], a = Ga(i, t), s = Ga(o, t);
  return !a || !s ? !1 : jf(e) || (n === "spring" || il(n)) && r;
}
function Gr(e) {
  e.duration = 0, e.type = "keyframes";
}
const Uf = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), $f = /* @__PURE__ */ xi(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function _f(e) {
  const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: a } = e;
  if (!(t?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return $f() && n && Uf.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !r && i !== "mirror" && o !== 0 && a !== "inertia";
}
const zf = 40;
class Wf extends Vi {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: a = "loop", keyframes: s, name: l, motionValue: u, element: c, ...d }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Se.now();
    const h = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: a,
      name: l,
      motionValue: u,
      element: c,
      ...d
    }, m = c?.KeyframeResolver || ki;
    this.keyframeResolver = new m(s, (y, w, x) => this.onKeyframesResolved(y, w, h, !x), l, u, c), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: a, velocity: s, delay: l, isHandoff: u, onUpdate: c } = r;
    this.resolvedAt = Se.now(), Bf(t, o, a, s) || ((et.instantAnimations || !l) && c?.(Li(t, r, n)), t[0] = t[t.length - 1], Gr(r), r.repeat = 0);
    const h = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > zf ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, m = !u && _f(h) ? new Nf({
      ...h,
      element: h.motionValue.owner.current
    }) : new Ii(h);
    m.finished.then(() => this.notifyFinished()).catch(Oe), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Ef()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Hf = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Kf(e) {
  const t = Hf.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function ol(e, t, n = 1) {
  const [r, i] = Kf(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const a = o.trim();
    return Ds(a) ? parseFloat(a) : a;
  }
  return Ei(i) ? ol(i, t, n + 1) : i;
}
function Fi(e, t) {
  return e?.[t] ?? e?.default ?? e;
}
const sl = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...zt
]), Gf = {
  test: (e) => e === "auto",
  parse: (e) => e
}, ll = (e) => (t) => t.test(e), ul = [_t, j, He, nt, Nh, Oh, Gf], Ya = (e) => ul.find(ll(e));
function Yf(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || As(e) : !0;
}
const Xf = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function qf(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Mi) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let o = Xf.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Zf = /\b([a-z-]*)\(.*?\)/gu, Yr = {
  ...lt,
  getAnimatableNone: (e) => {
    const t = e.match(Zf);
    return t ? t.map(qf).join(" ") : e;
  }
}, Xa = {
  ..._t,
  transform: Math.round
}, Jf = {
  rotate: nt,
  rotateX: nt,
  rotateY: nt,
  rotateZ: nt,
  scale: Un,
  scaleX: Un,
  scaleY: Un,
  scaleZ: Un,
  skew: nt,
  skewX: nt,
  skewY: nt,
  distance: j,
  translateX: j,
  translateY: j,
  translateZ: j,
  x: j,
  y: j,
  z: j,
  perspective: j,
  transformPerspective: j,
  opacity: mn,
  originX: Oa,
  originY: Oa,
  originZ: j
}, Oi = {
  // Border props
  borderWidth: j,
  borderTopWidth: j,
  borderRightWidth: j,
  borderBottomWidth: j,
  borderLeftWidth: j,
  borderRadius: j,
  radius: j,
  borderTopLeftRadius: j,
  borderTopRightRadius: j,
  borderBottomRightRadius: j,
  borderBottomLeftRadius: j,
  // Positioning props
  width: j,
  maxWidth: j,
  height: j,
  maxHeight: j,
  top: j,
  right: j,
  bottom: j,
  left: j,
  // Spacing props
  padding: j,
  paddingTop: j,
  paddingRight: j,
  paddingBottom: j,
  paddingLeft: j,
  margin: j,
  marginTop: j,
  marginRight: j,
  marginBottom: j,
  marginLeft: j,
  // Misc
  backgroundPositionX: j,
  backgroundPositionY: j,
  ...Jf,
  zIndex: Xa,
  // SVG
  fillOpacity: mn,
  strokeOpacity: mn,
  numOctaves: Xa
}, Qf = {
  ...Oi,
  // Color props
  color: ce,
  backgroundColor: ce,
  outlineColor: ce,
  fill: ce,
  stroke: ce,
  // Border props
  borderColor: ce,
  borderTopColor: ce,
  borderRightColor: ce,
  borderBottomColor: ce,
  borderLeftColor: ce,
  filter: Yr,
  WebkitFilter: Yr
}, cl = (e) => Qf[e];
function dl(e, t) {
  let n = cl(e);
  return n !== Yr && (n = lt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const em = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function tm(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !em.has(o) && pn(o).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const o of t)
      e[o] = dl(n, i);
}
class nm extends ki {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && (u = u.trim(), Ei(u))) {
        const c = ol(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !sl.has(r) || t.length !== 2)
      return;
    const [i, o] = t, a = Ya(i), s = Ya(o);
    if (a !== s)
      if (Wa(a) && Wa(s))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else St[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      (t[i] === null || Yf(t[i])) && r.push(i);
    r.length && tm(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = St[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1, a = r[o];
    r[o] = St[n](t.measureViewportBox(), window.getComputedStyle(t.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([s, l]) => {
      t.getValue(s).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function rm(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const hl = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function im(e) {
  return Cs(e) && "offsetHeight" in e;
}
const qa = 30, am = (e) => !isNaN(parseFloat(e));
class om {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const i = Se.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Se.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = am(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ti());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ne.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Se.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > qa)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, qa);
    return Ls(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ut(e, t) {
  return new om(e, t);
}
const { schedule: Ni } = /* @__PURE__ */ _s(queueMicrotask, !1), Be = {
  x: !1,
  y: !1
};
function fl() {
  return Be.x || Be.y;
}
function sm(e) {
  return e === "x" || e === "y" ? Be[e] ? null : (Be[e] = !0, () => {
    Be[e] = !1;
  }) : Be.x || Be.y ? null : (Be.x = Be.y = !0, () => {
    Be.x = Be.y = !1;
  });
}
function ml(e, t) {
  const n = rm(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Za(e) {
  return !(e.pointerType === "touch" || fl());
}
function lm(e, t, n = {}) {
  const [r, i, o] = ml(e, n), a = (s) => {
    if (!Za(s))
      return;
    const { target: l } = s, u = t(l, s);
    if (typeof u != "function" || !l)
      return;
    const c = (d) => {
      Za(d) && (u(d), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, i);
  };
  return r.forEach((s) => {
    s.addEventListener("pointerenter", a, i);
  }), o;
}
const pl = (e, t) => t ? e === t ? !0 : pl(e, t.parentElement) : !1, ji = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, um = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function cm(e) {
  return um.has(e.tagName) || e.tabIndex !== -1;
}
const Kn = /* @__PURE__ */ new WeakSet();
function Ja(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Tr(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const dm = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Ja(() => {
    if (Kn.has(n))
      return;
    Tr(n, "down");
    const i = Ja(() => {
      Tr(n, "up");
    }), o = () => Tr(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Qa(e) {
  return ji(e) && !fl();
}
function hm(e, t, n = {}) {
  const [r, i, o] = ml(e, n), a = (s) => {
    const l = s.currentTarget;
    if (!Qa(s))
      return;
    Kn.add(l);
    const u = t(l, s), c = (m, y) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), Kn.has(l) && Kn.delete(l), Qa(m) && typeof u == "function" && u(m, { success: y });
    }, d = (m) => {
      c(m, l === window || l === document || n.useGlobalTarget || pl(l, m.target));
    }, h = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", h, i);
  };
  return r.forEach((s) => {
    (n.useGlobalTarget ? window : s).addEventListener("pointerdown", a, i), im(s) && (s.addEventListener("focus", (u) => dm(u, i)), !cm(s) && !s.hasAttribute("tabindex") && (s.tabIndex = 0));
  }), o;
}
function yl(e) {
  return Cs(e) && "ownerSVGElement" in e;
}
function fm(e) {
  return yl(e) && e.tagName === "svg";
}
const we = (e) => !!(e && e.getVelocity), mm = [...ul, ce, lt], pm = (e) => mm.find(ll(e)), gl = he({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function ym(e = !0) {
  const t = U(gi);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, o = Xo();
  Ue(() => {
    if (e)
      return i(o);
  }, [e]);
  const a = ut(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const vl = he({ strict: !1 }), eo = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, $t = {};
for (const e in eo)
  $t[e] = {
    isEnabled: (t) => eo[e].some((n) => !!t[n])
  };
function gm(e) {
  for (const t in e)
    $t[t] = {
      ...$t[t],
      ...e[t]
    };
}
const vm = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Qn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || vm.has(e);
}
let bl = (e) => !Qn(e);
function bm(e) {
  typeof e == "function" && (bl = (t) => t.startsWith("on") ? !Qn(t) : e(t));
}
try {
  bm(require("@emotion/is-prop-valid").default);
} catch {
}
function wm(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (bl(i) || n === !0 && Qn(i) || !t && !Qn(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
const ir = /* @__PURE__ */ he({});
function ar(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function yn(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Bi = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ui = ["initial", ...Bi];
function or(e) {
  return ar(e.animate) || Ui.some((t) => yn(e[t]));
}
function wl(e) {
  return !!(or(e) || e.variants);
}
function xm(e, t) {
  if (or(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || yn(n) ? n : void 0,
      animate: yn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Tm(e) {
  const { initial: t, animate: n } = xm(e, U(ir));
  return be(() => ({ initial: t, animate: n }), [to(t), to(n)]);
}
function to(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const gn = {};
function Pm(e) {
  for (const t in e)
    gn[t] = e[t], Ri(t) && (gn[t].isCSSVariable = !0);
}
function xl(e, { layout: t, layoutId: n }) {
  return Wt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!gn[e] || e === "opacity");
}
const Sm = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Rm = zt.length;
function Em(e, t, n) {
  let r = "", i = !0;
  for (let o = 0; o < Rm; o++) {
    const a = zt[o], s = e[a];
    if (s === void 0)
      continue;
    let l = !0;
    if (typeof s == "number" ? l = s === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(s) === 0, !l || n) {
      const u = hl(s, Oi[a]);
      if (!l) {
        i = !1;
        const c = Sm[a] || a;
        r += `${c}(${u}) `;
      }
      n && (t[a] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function $i(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let a = !1, s = !1;
  for (const l in t) {
    const u = t[l];
    if (Wt.has(l)) {
      a = !0;
      continue;
    } else if (Ri(l)) {
      i[l] = u;
      continue;
    } else {
      const c = hl(u, Oi[l]);
      l.startsWith("origin") ? (s = !0, o[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (a || n ? r.transform = Em(t, e.transform, n) : r.transform && (r.transform = "none")), s) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const _i = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Tl(e, t, n) {
  for (const r in t)
    !we(t[r]) && !xl(r, n) && (e[r] = t[r]);
}
function Mm({ transformTemplate: e }, t) {
  return be(() => {
    const n = _i();
    return $i(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Dm(e, t) {
  const n = e.style || {}, r = {};
  return Tl(r, n, e), Object.assign(r, Mm(e, t)), r;
}
function Cm(e, t) {
  const n = {}, r = Dm(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Am = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Lm = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Vm(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Am : Lm;
  e[o.offset] = j.transform(-r);
  const a = j.transform(t), s = j.transform(n);
  e[o.array] = `${a} ${s}`;
}
function Pl(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: o = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...s
}, l, u, c) {
  if ($i(e, s, u), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: h } = e;
  d.transform && (h.transform = d.transform, delete d.transform), (h.transform || d.transformOrigin) && (h.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), h.transform && (h.transformBox = c?.transformBox ?? "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Vm(d, i, o, a, !1);
}
const Sl = () => ({
  ..._i(),
  attrs: {}
}), Rl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Im(e, t, n, r) {
  const i = be(() => {
    const o = Sl();
    return Pl(o, t, Rl(r), e.transformTemplate, e.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    Tl(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
const km = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function zi(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(km.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Fm(e, t, n, { latestValues: r }, i, o = !1) {
  const s = (zi(e) ? Im : Cm)(t, r, i, e), l = wm(t, typeof e == "string", o), u = e !== ot ? { ...l, ...s, ref: n } : {}, { children: c } = t, d = be(() => we(c) ? c.get() : c, [c]);
  return $(e, {
    ...u,
    children: d
  });
}
function no(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Wi(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = no(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = no(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function Gn(e) {
  return we(e) ? e.get() : e;
}
function Om({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return {
    latestValues: Nm(n, r, i, e),
    renderState: t()
  };
}
function Nm(e, t, n, r) {
  const i = {}, o = r(e, {});
  for (const h in o)
    i[h] = Gn(o[h]);
  let { initial: a, animate: s } = e;
  const l = or(e), u = wl(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  if (d && typeof d != "boolean" && !ar(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let m = 0; m < h.length; m++) {
      const y = Wi(e, h[m]);
      if (y) {
        const { transitionEnd: w, transition: x, ...T } = y;
        for (const b in T) {
          let P = T[b];
          if (Array.isArray(P)) {
            const L = c ? P.length - 1 : 0;
            P = P[L];
          }
          P !== null && (i[b] = P);
        }
        for (const b in w)
          i[b] = w[b];
      }
    }
  }
  return i;
}
const El = (e) => (t, n) => {
  const r = U(ir), i = U(gi), o = () => Om(e, t, r, i);
  return n ? o() : yh(o);
};
function Hi(e, t, n) {
  const { style: r } = e, i = {};
  for (const o in r)
    (we(r[o]) || t.style && we(t.style[o]) || xl(o, e) || n?.getValue(o)?.liveStyle !== void 0) && (i[o] = r[o]);
  return i;
}
const jm = /* @__PURE__ */ El({
  scrapeMotionValuesFromProps: Hi,
  createRenderState: _i
});
function Ml(e, t, n) {
  const r = Hi(e, t, n);
  for (const i in e)
    if (we(e[i]) || we(t[i])) {
      const o = zt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
const Bm = /* @__PURE__ */ El({
  scrapeMotionValuesFromProps: Ml,
  createRenderState: Sl
}), Um = Symbol.for("motionComponentSymbol");
function It(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function $m(e, t, n) {
  return ut(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : It(n) && (n.current = r));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const Ki = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), _m = "framerAppearId", Dl = "data-" + Ki(_m), Cl = he({});
function zm(e, t, n, r, i) {
  const { visualElement: o } = U(ir), a = U(vl), s = U(gi), l = U(gl).reducedMotion, u = Je(null);
  r = r || a.renderer, !u.current && r && (u.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: s,
    blockInitialAnimation: s ? s.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, d = U(Cl);
  c && !c.projection && i && (c.type === "html" || c.type === "svg") && Wm(u.current, n, i, d);
  const h = Je(!1);
  qo(() => {
    c && h.current && c.update(n, s);
  });
  const m = n[Dl], y = Je(!!m && !window.MotionHandoffIsComplete?.(m) && window.MotionHasOptimisedAnimation?.(m));
  return gh(() => {
    c && (h.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), y.current && c.animationState && c.animationState.animateChanges());
  }), Ue(() => {
    c && (!y.current && c.animationState && c.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(m);
    }), y.current = !1), c.enteringChildren = void 0);
  }), c;
}
function Wm(e, t, n, r) {
  const { layoutId: i, layout: o, drag: a, dragConstraints: s, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Al(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!a || s && It(s),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function Al(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Al(e.parent);
}
function Pr(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && gm(n);
  const i = zi(e) ? Bm : jm;
  function o(s, l) {
    let u;
    const c = {
      ...U(gl),
      ...s,
      layoutId: Hm(s)
    }, { isStatic: d } = c, h = Tm(s), m = i(s, d);
    if (!d && yi) {
      Km();
      const y = Gm(c);
      u = y.MeasureLayout, h.visualElement = zm(e, m, c, r, y.ProjectionNode);
    }
    return ee(ir.Provider, { value: h, children: [u && h.visualElement ? R(u, { visualElement: h.visualElement, ...c }) : null, Fm(e, s, $m(m, h.visualElement, l), m, d, t)] });
  }
  o.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const a = Et(o);
  return a[Um] = e, a;
}
function Hm({ layoutId: e }) {
  const t = U(Ms).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Km(e, t) {
  U(vl).strict;
}
function Gm(e) {
  const { drag: t, layout: n } = $t;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function Ym(e, t) {
  if (typeof Proxy > "u")
    return Pr;
  const n = /* @__PURE__ */ new Map(), r = (o, a) => Pr(o, a, e, t), i = (o, a) => r(o, a);
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, a) => a === "create" ? r : (n.has(a) || n.set(a, Pr(a, void 0, e, t)), n.get(a))
  });
}
function Ll({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Xm({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function qm(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Sr(e) {
  return e === void 0 || e === 1;
}
function Xr({ scale: e, scaleX: t, scaleY: n }) {
  return !Sr(e) || !Sr(t) || !Sr(n);
}
function wt(e) {
  return Xr(e) || Vl(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Vl(e) {
  return ro(e.x) || ro(e.y);
}
function ro(e) {
  return e && e !== "0%";
}
function er(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function io(e, t, n, r, i) {
  return i !== void 0 && (e = er(e, i, r)), er(e, n, r) + t;
}
function qr(e, t = 0, n = 1, r, i) {
  e.min = io(e.min, t, n, r, i), e.max = io(e.max, t, n, r, i);
}
function Il(e, { x: t, y: n }) {
  qr(e.x, t.translate, t.scale, t.originPoint), qr(e.y, n.translate, n.scale, n.originPoint);
}
const ao = 0.999999999999, oo = 1.0000000000001;
function Zm(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, a;
  for (let s = 0; s < i; s++) {
    o = n[s], a = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Ft(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Il(e, a)), r && wt(o.latestValues) && Ft(e, o.latestValues));
  }
  t.x < oo && t.x > ao && (t.x = 1), t.y < oo && t.y > ao && (t.y = 1);
}
function kt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function so(e, t, n, r, i = 0.5) {
  const o = re(e.min, e.max, i);
  qr(e, t, n, o, r);
}
function Ft(e, t) {
  so(e.x, t.x, t.scaleX, t.scale, t.originX), so(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function kl(e, t) {
  return Ll(qm(e.getBoundingClientRect(), t));
}
function Jm(e, t, n) {
  const r = kl(e, n), { scroll: i } = t;
  return i && (kt(r.x, i.offset.x), kt(r.y, i.offset.y)), r;
}
const lo = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ot = () => ({
  x: lo(),
  y: lo()
}), uo = () => ({ min: 0, max: 0 }), ue = () => ({
  x: uo(),
  y: uo()
}), Zr = { current: null }, Fl = { current: !1 };
function Qm() {
  if (Fl.current = !0, !!yi)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Zr.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Zr.current = !1;
}
const ep = /* @__PURE__ */ new WeakMap();
function tp(e, t, n) {
  for (const r in t) {
    const i = t[r], o = n[r];
    if (we(i))
      e.addValue(r, i);
    else if (we(o))
      e.addValue(r, Ut(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(i) : a.hasAnimated || a.set(i);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, Ut(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const co = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class np {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: a }, s = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ki, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Se.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, ne.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = a;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.blockInitialAnimation = !!o, this.isControllingVariants = or(n), this.isVariantNode = wl(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in d) {
      const m = d[h];
      l[h] !== void 0 && we(m) && m.set(l[h]);
    }
  }
  mount(t) {
    this.current = t, ep.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Fl.current || Qm(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Zr.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), st(this.notifyUpdate), st(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Wt.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ne.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in $t) {
      const n = $t[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ue();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < co.length; r++) {
      const i = co[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, a = t[o];
      a && (this.propEventSubscriptions[i] = this.on(i, a));
    }
    this.prevMotionValues = tp(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Ut(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (Ds(r) || As(r)) ? r = parseFloat(r) : !pm(r) && lt.test(n) && (r = dl(t, n)), this.setBaseTarget(t, we(r) ? r.get() : r)), we(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = Wi(this.props, n, this.presenceContext?.custom);
      o && (r = o[t]);
    }
    if (n && r !== void 0)
      return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !we(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ti()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Ni.render(this.render);
  }
}
class Ol extends np {
  constructor() {
    super(...arguments), this.KeyframeResolver = nm;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    we(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Nl(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let a;
  for (a in t)
    o[a] = t[a];
  i?.applyProjectionStyles(o, r);
  for (a in n)
    o.setProperty(a, n[a]);
}
function rp(e) {
  return window.getComputedStyle(e);
}
class ip extends Ol {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Nl;
  }
  readValueFromInstance(t, n) {
    if (Wt.has(n))
      return this.projection?.isProjecting ? _r(n) : xf(t, n);
    {
      const r = rp(t), i = (Ri(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return kl(t, n);
  }
  build(t, n, r) {
    $i(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Hi(t, n, r);
  }
}
const jl = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function ap(e, t, n, r) {
  Nl(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(jl.has(i) ? i : Ki(i), t.attrs[i]);
}
class op extends Ol {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ue;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Wt.has(n)) {
      const r = cl(n);
      return r && r.default || 0;
    }
    return n = jl.has(n) ? n : Ki(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ml(t, n, r);
  }
  build(t, n, r) {
    Pl(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    ap(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Rl(t.tagName), super.mount(t);
  }
}
const sp = (e, t) => zi(e) ? new op(t) : new ip(t, {
  allowProjection: e !== ot
});
function Bt(e, t, n) {
  const r = e.getProps();
  return Wi(r, t, n !== void 0 ? n : r.custom, e);
}
const Jr = (e) => Array.isArray(e);
function lp(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ut(n));
}
function up(e) {
  return Jr(e) ? e[e.length - 1] || 0 : e;
}
function cp(e, t) {
  const n = Bt(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const a in o) {
    const s = up(o[a]);
    lp(e, a, s);
  }
}
function dp(e) {
  return !!(we(e) && e.add);
}
function Qr(e, t) {
  const n = e.getValue("willChange");
  if (dp(n))
    return n.add(t);
  if (!n && et.WillChange) {
    const r = new et.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Bl(e) {
  return e.props[Dl];
}
const hp = (e) => e !== null;
function fp(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(hp), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const mp = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, pp = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), yp = {
  type: "keyframes",
  duration: 0.8
}, gp = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, vp = (e, { keyframes: t }) => t.length > 2 ? yp : Wt.has(e) ? e.startsWith("scale") ? pp(t[1]) : mp : gp;
function bp({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Gi = (e, t, n, r = {}, i, o) => (a) => {
  const s = Fi(r, e) || {}, l = s.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ We(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...s,
    delay: -u,
    onUpdate: (h) => {
      t.set(h), s.onUpdate && s.onUpdate(h);
    },
    onComplete: () => {
      a(), s.onComplete && s.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  bp(s) || Object.assign(c, vp(e, c)), c.duration && (c.duration = /* @__PURE__ */ We(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ We(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (Gr(c), c.delay === 0 && (d = !0)), (et.instantAnimations || et.skipAnimations) && (d = !0, Gr(c), c.delay = 0), c.allowFlatten = !s.type && !s.ease, d && !o && t.get() !== void 0) {
    const h = fp(c.keyframes, s);
    if (h !== void 0) {
      ne.update(() => {
        c.onUpdate(h), c.onComplete();
      });
      return;
    }
  }
  return s.isSync ? new Ii(c) : new Wf(c);
};
function wp({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Ul(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...s } = t;
  r && (o = r);
  const l = [], u = i && e.animationState && e.animationState.getState()[i];
  for (const c in s) {
    const d = e.getValue(c, e.latestValues[c] ?? null), h = s[c];
    if (h === void 0 || u && wp(u, c))
      continue;
    const m = {
      delay: n,
      ...Fi(o || {}, c)
    }, y = d.get();
    if (y !== void 0 && !d.isAnimating && !Array.isArray(h) && h === y && !m.velocity)
      continue;
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const T = Bl(e);
      if (T) {
        const b = window.MotionHandoffAnimation(T, c, ne);
        b !== null && (m.startTime = b, w = !0);
      }
    }
    Qr(e, c), d.start(Gi(c, d, h, e.shouldReduceMotion && sl.has(c) ? { type: !1 } : m, e, w));
    const x = d.animation;
    x && l.push(x);
  }
  return a && Promise.all(l).then(() => {
    ne.update(() => {
      a && cp(e, a);
    });
  }), l;
}
function $l(e, t, n, r = 0, i = 1) {
  const o = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t), a = e.size, s = (a - 1) * r;
  return typeof n == "function" ? n(o, a) : i === 1 ? o * r : s - o * r;
}
function ei(e, t, n = {}) {
  const r = Bt(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Ul(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = i;
    return xp(e, t, l, u, c, d, n);
  } : () => Promise.resolve(), { when: s } = i;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [o, a] : [a, o];
    return l().then(() => u());
  } else
    return Promise.all([o(), a(n.delay)]);
}
function xp(e, t, n = 0, r = 0, i = 0, o = 1, a) {
  const s = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), s.push(ei(l, t, {
      ...a,
      delay: n + (typeof r == "function" ? 0 : r) + $l(e.variantChildren, l, r, i, o)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(s);
}
function Tp(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => ei(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = ei(e, t, n);
  else {
    const i = typeof t == "function" ? Bt(e, t, n.custom) : t;
    r = Promise.all(Ul(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function _l(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const Pp = Ui.length;
function zl(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? zl(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Pp; n++) {
    const r = Ui[n], i = e.props[r];
    (yn(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const Sp = [...Bi].reverse(), Rp = Bi.length;
function Ep(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Tp(e, n, r)));
}
function Mp(e) {
  let t = Ep(e), n = ho(), r = !0;
  const i = (l) => (u, c) => {
    const d = Bt(e, c, l === "exit" ? e.presenceContext?.custom : void 0);
    if (d) {
      const { transition: h, transitionEnd: m, ...y } = d;
      u = { ...u, ...y, ...m };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function a(l) {
    const { props: u } = e, c = zl(e.parent) || {}, d = [], h = /* @__PURE__ */ new Set();
    let m = {}, y = 1 / 0;
    for (let x = 0; x < Rp; x++) {
      const T = Sp[x], b = n[T], P = u[T] !== void 0 ? u[T] : c[T], L = yn(P), D = T === l ? b.isActive : null;
      D === !1 && (y = x);
      let O = P === c[T] && P !== u[T] && L;
      if (O && r && e.manuallyAnimateOnMount && (O = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && D === null || // If we didn't and don't have any defined prop for this animation type
      !P && !b.prevProp || // Or if the prop doesn't define an animation
      ar(P) || typeof P == "boolean")
        continue;
      const g = Dp(b.prevProp, P);
      let M = g || // If we're making this variant active, we want to always make it active
      T === l && b.isActive && !O && L || // If we removed a higher-priority variant (i is in reverse order)
      x > y && L, _ = !1;
      const H = Array.isArray(P) ? P : [P];
      let G = H.reduce(i(T), {});
      D === !1 && (G = {});
      const { prevResolvedValues: se = {} } = b, Re = {
        ...se,
        ...G
      }, ie = (Z) => {
        M = !0, h.has(Z) && (_ = !0, h.delete(Z)), b.needsAnimating[Z] = !0;
        const z = e.getValue(Z);
        z && (z.liveStyle = !1);
      };
      for (const Z in Re) {
        const z = G[Z], Q = se[Z];
        if (m.hasOwnProperty(Z))
          continue;
        let le = !1;
        Jr(z) && Jr(Q) ? le = !_l(z, Q) : le = z !== Q, le ? z != null ? ie(Z) : h.add(Z) : z !== void 0 && h.has(Z) ? ie(Z) : b.protectedKeys[Z] = !0;
      }
      b.prevProp = P, b.prevResolvedValues = G, b.isActive && (m = { ...m, ...G }), r && e.blockInitialAnimation && (M = !1);
      const q = O && g;
      M && (!q || _) && d.push(...H.map((Z) => {
        const z = { type: T };
        if (typeof Z == "string" && r && !q && e.manuallyAnimateOnMount && e.parent) {
          const { parent: Q } = e, le = Bt(Q, Z);
          if (Q.enteringChildren && le) {
            const { delayChildren: Ee } = le.transition || {};
            z.delay = $l(Q.enteringChildren, e, Ee);
          }
        }
        return {
          animation: Z,
          options: z
        };
      }));
    }
    if (h.size) {
      const x = {};
      if (typeof u.initial != "boolean") {
        const T = Bt(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        T && T.transition && (x.transition = T.transition);
      }
      h.forEach((T) => {
        const b = e.getBaseTarget(T), P = e.getValue(T);
        P && (P.liveStyle = !0), x[T] = b ?? null;
      }), d.push({ animation: x });
    }
    let w = !!d.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (w = !1), r = !1, w ? t(d) : Promise.resolve();
  }
  function s(l, u) {
    if (n[l].isActive === u)
      return Promise.resolve();
    e.variantChildren?.forEach((d) => d.animationState?.setActive(l, u)), n[l].isActive = u;
    const c = a(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = ho();
    }
  };
}
function Dp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !_l(t, e) : !1;
}
function bt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function ho() {
  return {
    animate: bt(!0),
    whileInView: bt(),
    whileHover: bt(),
    whileTap: bt(),
    whileDrag: bt(),
    whileFocus: bt(),
    exit: bt()
  };
}
class ht {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Cp extends ht {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Mp(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ar(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Ap = 0;
class Lp extends ht {
  constructor() {
    super(...arguments), this.id = Ap++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Vp = {
  animation: {
    Feature: Cp
  },
  exit: {
    Feature: Lp
  }
};
function vn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Mn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Ip = (e) => (t) => ji(t) && e(t, Mn(t));
function on(e, t, n, r) {
  return vn(e, t, Ip(n), r);
}
const Wl = 1e-4, kp = 1 - Wl, Fp = 1 + Wl, Hl = 0.01, Op = 0 - Hl, Np = 0 + Hl;
function Te(e) {
  return e.max - e.min;
}
function jp(e, t, n) {
  return Math.abs(e - t) <= n;
}
function fo(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = re(t.min, t.max, e.origin), e.scale = Te(n) / Te(t), e.translate = re(n.min, n.max, e.origin) - e.originPoint, (e.scale >= kp && e.scale <= Fp || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Op && e.translate <= Np || isNaN(e.translate)) && (e.translate = 0);
}
function sn(e, t, n, r) {
  fo(e.x, t.x, n.x, r ? r.originX : void 0), fo(e.y, t.y, n.y, r ? r.originY : void 0);
}
function mo(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Te(t);
}
function Bp(e, t, n) {
  mo(e.x, t.x, n.x), mo(e.y, t.y, n.y);
}
function po(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Te(t);
}
function ln(e, t, n) {
  po(e.x, t.x, n.x), po(e.y, t.y, n.y);
}
function Ie(e) {
  return [e("x"), e("y")];
}
const Kl = ({ current: e }) => e ? e.ownerDocument.defaultView : null, yo = (e, t) => Math.abs(e - t);
function Up(e, t) {
  const n = yo(e.x, t.x), r = yo(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Gl {
  constructor(t, n, { transformPagePoint: r, contextWindow: i = window, dragSnapToOrigin: o = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Er(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, y = Up(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !y)
        return;
      const { point: w } = h, { timestamp: x } = pe;
      this.history.push({ ...w, timestamp: x });
      const { onStart: T, onMove: b } = this.handlers;
      m || (T && T(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, m) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = Rr(m, this.transformPagePoint), ne.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, m) => {
      this.end();
      const { onEnd: y, onSessionEnd: w, resumeAnimation: x } = this.handlers;
      if (this.dragSnapToOrigin && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const T = Er(h.type === "pointercancel" ? this.lastMoveEventInfo : Rr(m, this.transformPagePoint), this.history);
      this.startEvent && y && y(h, T), w && w(h, T);
    }, !ji(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = a, this.contextWindow = i || window;
    const s = Mn(t), l = Rr(s, this.transformPagePoint), { point: u } = l, { timestamp: c } = pe;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, Er(l, this.history)), this.removeListeners = Sn(on(this.contextWindow, "pointermove", this.handlePointerMove), on(this.contextWindow, "pointerup", this.handlePointerUp), on(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), st(this.updatePoint);
  }
}
function Rr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function go(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Er({ point: e }, t) {
  return {
    point: e,
    delta: go(e, Yl(t)),
    offset: go(e, $p(t)),
    velocity: _p(t, 0.1)
  };
}
function $p(e) {
  return e[0];
}
function Yl(e) {
  return e[e.length - 1];
}
function _p(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = Yl(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ We(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ Fe(i.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function zp(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? re(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? re(n, e, r.max) : Math.min(e, n)), e;
}
function vo(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Wp(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: vo(e.x, n, i),
    y: vo(e.y, t, r)
  };
}
function bo(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Hp(e, t) {
  return {
    x: bo(e.x, t.x),
    y: bo(e.y, t.y)
  };
}
function Kp(e, t) {
  let n = 0.5;
  const r = Te(e), i = Te(t);
  return i > r ? n = /* @__PURE__ */ fn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ fn(e.min, e.max - i, t.min)), Qe(0, 1, n);
}
function Gp(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ti = 0.35;
function Yp(e = ti) {
  return e === !1 ? e = 0 : e === !0 && (e = ti), {
    x: wo(e, "left", "right"),
    y: wo(e, "top", "bottom")
  };
}
function wo(e, t, n) {
  return {
    min: xo(e, t),
    max: xo(e, n)
  };
}
function xo(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Xp = /* @__PURE__ */ new WeakMap();
class qp {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ue(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Mn(d).point);
    }, a = (d, h) => {
      const { drag: m, dragPropagation: y, onDragStart: w } = this.getProps();
      if (m && !y && (this.openDragLock && this.openDragLock(), this.openDragLock = sm(m), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ie((T) => {
        let b = this.getAxisMotionValue(T).get() || 0;
        if (He.test(b)) {
          const { projection: P } = this.visualElement;
          if (P && P.layout) {
            const L = P.layout.layoutBox[T];
            L && (b = Te(L) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[T] = b;
      }), w && ne.postRender(() => w(d, h)), Qr(this.visualElement, "transform");
      const { animationState: x } = this.visualElement;
      x && x.setActive("whileDrag", !0);
    }, s = (d, h) => {
      this.latestPointerEvent = d, this.latestPanInfo = h;
      const { dragPropagation: m, dragDirectionLock: y, onDirectionLock: w, onDrag: x } = this.getProps();
      if (!m && !this.openDragLock)
        return;
      const { offset: T } = h;
      if (y && this.currentDirection === null) {
        this.currentDirection = Zp(T), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, T), this.updateAxis("y", h.point, T), this.visualElement.render(), x && x(d, h);
    }, l = (d, h) => {
      this.latestPointerEvent = d, this.latestPanInfo = h, this.stop(d, h), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => Ie((d) => this.getAnimationState(d) === "paused" && this.getAxisMotionValue(d).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Gl(t, {
      onSessionStart: o,
      onStart: a,
      onMove: s,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: r,
      contextWindow: Kl(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, i = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !i || !r)
      return;
    const { velocity: a } = i;
    this.startAnimation(a);
    const { onDragEnd: s } = this.getProps();
    s && ne.postRender(() => s(r, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !$n(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = zp(a, this.constraints[t], this.elastic[t])), o.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
    t && It(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Wp(r.layoutBox, t) : this.constraints = !1, this.elastic = Yp(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Ie((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Gp(r.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !It(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Jm(r, i.root, this.visualElement.getTransformPagePoint());
    let a = Hp(i.layout.layoutBox, o);
    if (n) {
      const s = n(Xm(a));
      this.hasMutatedConstraints = !!s, s && (a = Ll(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Ie((c) => {
      if (!$n(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const h = i ? 200 : 1e6, m = i ? 40 : 1e7, y = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: h,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...d
      };
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Qr(this.visualElement, t), r.start(Gi(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Ie((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ie((t) => this.getAxisMotionValue(t).animation?.pause());
  }
  getAnimationState(t) {
    return this.getAxisMotionValue(t).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Ie((n) => {
      const { drag: r } = this.getProps();
      if (!$n(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: a, max: s } = i.layout.layoutBox[n];
        o.set(t[n] - re(a, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!It(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ie((a) => {
      const s = this.getAxisMotionValue(a);
      if (s && this.constraints !== !1) {
        const l = s.get();
        i[a] = Kp({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Ie((a) => {
      if (!$n(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(re(l, u, i[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Xp.set(this.visualElement, this);
    const t = this.visualElement.current, n = on(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      It(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), ne.read(r);
    const a = vn(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Ie((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), o(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: a = ti, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function $n(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Zp(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Jp extends ht {
  constructor(t) {
    super(t), this.removeGroupControls = Oe, this.removeListeners = Oe, this.controls = new qp(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Oe;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const To = (e) => (t, n) => {
  e && ne.postRender(() => e(t, n));
};
class Qp extends ht {
  constructor() {
    super(...arguments), this.removePointerDownListener = Oe;
  }
  onPointerDown(t) {
    this.session = new Gl(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Kl(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: To(t),
      onStart: To(n),
      onMove: r,
      onEnd: (o, a) => {
        delete this.session, i && ne.postRender(() => i(o, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = on(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Yn = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Po(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Jt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (j.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Po(e, t.target.x), r = Po(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, ey = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = lt.parse(e);
    if (i.length > 5)
      return r;
    const o = lt.createTransformer(e), a = typeof i[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + a] /= s, i[1 + a] /= l;
    const u = re(s, l, 0.5);
    return typeof i[2 + a] == "number" && (i[2 + a] /= u), typeof i[3 + a] == "number" && (i[3 + a] /= u), o(i);
  }
};
let Mr = !1;
class ty extends ri {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
    Pm(ny), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), Mr && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Yn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, { projection: a } = r;
    return a && (a.isPresent = o, Mr = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o ? a.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? a.promote() : a.relegate() || ne.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ni.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    Mr = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Xl(e) {
  const [t, n] = ym(), r = U(Ms);
  return R(ty, { ...e, layoutGroup: r, switchLayoutGroup: U(Cl), isPresent: t, safeToRemove: n });
}
const ny = {
  borderRadius: {
    ...Jt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Jt,
  borderTopRightRadius: Jt,
  borderBottomLeftRadius: Jt,
  borderBottomRightRadius: Jt,
  boxShadow: ey
};
function ry(e, t, n) {
  const r = we(e) ? e : Ut(e);
  return r.start(Gi("", r, t, n)), r.animation;
}
const iy = (e, t) => e.depth - t.depth;
class ay {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    vi(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    bi(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(iy), this.isDirty = !1, this.children.forEach(t);
  }
}
function oy(e, t) {
  const n = Se.now(), r = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (st(r), e(o - t));
  };
  return ne.setup(r, !0), () => st(r);
}
const ql = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], sy = ql.length, So = (e) => typeof e == "string" ? parseFloat(e) : e, Ro = (e) => typeof e == "number" || j.test(e);
function ly(e, t, n, r, i, o) {
  i ? (e.opacity = re(0, n.opacity ?? 1, uy(r)), e.opacityExit = re(t.opacity ?? 1, 0, cy(r))) : o && (e.opacity = re(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let a = 0; a < sy; a++) {
    const s = `border${ql[a]}Radius`;
    let l = Eo(t, s), u = Eo(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ro(l) === Ro(u) ? (e[s] = Math.max(re(So(l), So(u), r), 0), (He.test(u) || He.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = re(t.rotate || 0, n.rotate || 0, r));
}
function Eo(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const uy = /* @__PURE__ */ Zl(0, 0.5, js), cy = /* @__PURE__ */ Zl(0.5, 0.95, Oe);
function Zl(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ fn(e, t, r));
}
function Mo(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ve(e, t) {
  Mo(e.x, t.x), Mo(e.y, t.y);
}
function Do(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Co(e, t, n, r, i) {
  return e -= t, e = er(e, 1 / n, r), i !== void 0 && (e = er(e, 1 / i, r)), e;
}
function dy(e, t = 0, n = 1, r = 0.5, i, o = e, a = e) {
  if (He.test(t) && (t = parseFloat(t), t = re(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = re(o.min, o.max, r);
  e === o && (s -= t), e.min = Co(e.min, t, n, s, i), e.max = Co(e.max, t, n, s, i);
}
function Ao(e, t, [n, r, i], o, a) {
  dy(e, t[n], t[r], t[i], t.scale, o, a);
}
const hy = ["x", "scaleX", "originX"], fy = ["y", "scaleY", "originY"];
function Lo(e, t, n, r) {
  Ao(e.x, t, hy, n ? n.x : void 0, r ? r.x : void 0), Ao(e.y, t, fy, n ? n.y : void 0, r ? r.y : void 0);
}
function Vo(e) {
  return e.translate === 0 && e.scale === 1;
}
function Jl(e) {
  return Vo(e.x) && Vo(e.y);
}
function Io(e, t) {
  return e.min === t.min && e.max === t.max;
}
function my(e, t) {
  return Io(e.x, t.x) && Io(e.y, t.y);
}
function ko(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Ql(e, t) {
  return ko(e.x, t.x) && ko(e.y, t.y);
}
function Fo(e) {
  return Te(e.x) / Te(e.y);
}
function Oo(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class py {
  constructor() {
    this.members = [];
  }
  add(t) {
    vi(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (bi(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function yy(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, a = n?.z || 0;
  if ((i || o || a) && (r = `translate3d(${i}px, ${o}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: h, skewX: m, skewY: y } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), m && (r += `skewX(${m}deg) `), y && (r += `skewY(${y}deg) `);
  }
  const s = e.x.scale * t.x, l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const Dr = ["", "X", "Y", "Z"], gy = 1e3;
let vy = 0;
function Cr(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function eu(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Bl(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ne, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && eu(r);
}
function tu({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(a = {}, s = t?.()) {
      this.id = vy++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(xy), this.nodes.forEach(Ry), this.nodes.forEach(Ey), this.nodes.forEach(Ty);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ay());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Ti()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a) {
      if (this.instance)
        return;
      this.isSVG = yl(a) && !fm(a), this.instance = a;
      const { layoutId: s, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || s) && (this.isLayoutDirty = !0), e) {
        let c, d = 0;
        const h = () => this.root.updateBlockedByResize = !1;
        ne.read(() => {
          d = window.innerWidth;
        }), e(a, () => {
          const m = window.innerWidth;
          m !== d && (d = m, this.root.updateBlockedByResize = !0, c && c(), c = oy(h, 250), Yn.hasAnimatedSinceResize && (Yn.hasAnimatedSinceResize = !1, this.nodes.forEach(Bo)));
        });
      }
      s && this.root.registerSharedNode(s, this), this.options.animate !== !1 && u && (s || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: h, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || u.getDefaultTransition() || Ly, { onLayoutAnimationStart: w, onLayoutAnimationComplete: x } = u.getProps(), T = !this.targetLayout || !Ql(this.targetLayout, m), b = !d && h;
        if (this.options.layoutRoot || this.resumeFrom || b || d && (T || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const P = {
            ...Fi(y, "layout"),
            onPlay: w,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P), this.setAnimationOrigin(c, b);
        } else
          d || Bo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), st(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(My), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && eu(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(No);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(jo);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Sy), this.nodes.forEach(by), this.nodes.forEach(wy)) : this.nodes.forEach(jo), this.clearAllSnapshots();
      const s = Se.now();
      pe.delta = Qe(0, 1e3 / 60, s - pe.timestamp), pe.timestamp = s, pe.isProcessing = !0, gr.update.process(pe), gr.preRender.process(pe), gr.render.process(pe), pe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ni.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Py), this.sharedNodes.forEach(Dy);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ne.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ne.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Te(this.snapshot.measuredBox.x) && !Te(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ue(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && this.instance) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, s = this.projectionDelta && !Jl(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && this.instance && (s || wt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), Vy(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return ue();
      const s = a.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Iy))) {
        const { scroll: u } = this.root;
        u && (kt(s.x, u.offset.x), kt(s.y, u.offset.y));
      }
      return s;
    }
    removeElementScroll(a) {
      const s = ue();
      if (Ve(s, a), this.scroll?.wasRoot)
        return s;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        u !== this.root && c && d.layoutScroll && (c.wasRoot && Ve(s, a), kt(s.x, c.offset.x), kt(s.y, c.offset.y));
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = ue();
      Ve(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Ft(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), wt(c.latestValues) && Ft(l, c.latestValues);
      }
      return wt(this.latestValues) && Ft(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = ue();
      Ve(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !wt(u.latestValues))
          continue;
        Xr(u.latestValues) && u.updateSnapshot();
        const c = ue(), d = u.measurePageBox();
        Ve(c, d), Lo(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return wt(this.latestValues) && Lo(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== pe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      const s = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== s;
      if (!(a || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (this.resolvedRelativeTargetAt = pe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), ln(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ue(), this.targetWithTransforms = ue()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Bp(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ve(this.target, this.layout.layoutBox), Il(this.target, this.targetDelta)) : Ve(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const h = this.getClosestProjectingParent();
          h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), ln(this.relativeTargetOrigin, this.target, h.target), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Xr(this.parent.latestValues) || Vl(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const a = this.getLead(), s = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), s && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === pe.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, h = this.treeScale.y;
      Zm(this.layoutCorrected, this.treeScale, this.path, s), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ue());
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Do(this.prevProjectionDelta.x, this.projectionDelta.x), Do(this.prevProjectionDelta.y, this.projectionDelta.y)), sn(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !Oo(this.projectionDelta.x, this.prevProjectionDelta.x) || !Oo(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.visualElement?.scheduleRender(), a) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ot(), this.projectionDelta = Ot(), this.projectionDeltaWithTransform = Ot();
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Ot();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const h = ue(), m = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, w = m !== y, x = this.getStack(), T = !x || x.members.length <= 1, b = !!(w && !T && this.options.crossfade === !0 && !this.path.some(Ay));
      this.animationProgress = 0;
      let P;
      this.mixTargetDelta = (L) => {
        const D = L / 1e3;
        Uo(d.x, a.x, D), Uo(d.y, a.y, D), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ln(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Cy(this.relativeTarget, this.relativeTargetOrigin, h, D), P && my(this.relativeTarget, P) && (this.isProjectionDirty = !1), P || (P = ue()), Ve(P, this.relativeTarget)), w && (this.animationValues = c, ly(c, u, this.latestValues, D, b, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = D;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (st(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ne.update(() => {
        Yn.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ut(0)), this.currentAnimation = ry(this.motionValue, [0, 1e3], {
          ...a,
          velocity: 0,
          isSync: !0,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onStop: () => {
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(gy), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && nu(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || ue();
          const d = Te(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const h = Te(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + h;
        }
        Ve(s, l), Ft(s, c), sn(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new py()), this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      const { layoutId: a } = this.options;
      return a ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: a } = this.options;
      return a ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: l } = a;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (s = !0), !s)
        return;
      const u = {};
      l.z && Cr("z", a, u, this.animationValues);
      for (let c = 0; c < Dr.length; c++)
        Cr(`rotate${Dr[c]}`, a, u, this.animationValues), Cr(`skew${Dr[c]}`, a, u, this.animationValues);
      a.render();
      for (const c in u)
        a.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      a.scheduleRender();
    }
    applyProjectionStyles(a, s) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        a.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = Gn(s?.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = Gn(s?.pointerEvents) || ""), this.hasProjected && !wt(this.latestValues) && (a.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = yy(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), a.transform = d;
      const { x: h, y: m } = this.projectionDelta;
      a.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`, u.animationValues ? a.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : a.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const y in gn) {
        if (c[y] === void 0)
          continue;
        const { correct: w, applyTo: x, isCSSVariable: T } = gn[y], b = d === "none" ? c[y] : w(c[y], u);
        if (x) {
          const P = x.length;
          for (let L = 0; L < P; L++)
            a[x[L]] = b;
        } else
          T ? this.options.visualElement.renderState.vars[y] = b : a[y] = b;
      }
      this.options.layoutId && (a.pointerEvents = u === this ? Gn(s?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => a.currentAnimation?.stop()), this.root.nodes.forEach(No), this.root.sharedNodes.clear();
    }
  };
}
function by(e) {
  e.updateLayout();
}
function wy(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, o = t.source !== e.layout.source;
    i === "size" ? Ie((c) => {
      const d = o ? t.measuredBox[c] : t.layoutBox[c], h = Te(d);
      d.min = n[c].min, d.max = d.min + h;
    }) : nu(i, t.layoutBox, n) && Ie((c) => {
      const d = o ? t.measuredBox[c] : t.layoutBox[c], h = Te(n[c]);
      d.max = d.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[c].max = e.relativeTarget[c].min + h);
    });
    const a = Ot();
    sn(a, n, t.layoutBox);
    const s = Ot();
    o ? sn(s, e.applyTransform(r, !0), t.measuredBox) : sn(s, n, t.layoutBox);
    const l = !Jl(a);
    let u = !1;
    if (!e.resumeFrom) {
      const c = e.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: d, layout: h } = c;
        if (d && h) {
          const m = ue();
          ln(m, t.layoutBox, d.layoutBox);
          const y = ue();
          ln(y, n, h.layoutBox), Ql(m, y) || (u = !0), c.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = m, e.relativeParent = c);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function xy(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Ty(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Py(e) {
  e.clearSnapshot();
}
function No(e) {
  e.clearMeasurements();
}
function jo(e) {
  e.isLayoutDirty = !1;
}
function Sy(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Bo(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Ry(e) {
  e.resolveTargetDelta();
}
function Ey(e) {
  e.calcProjection();
}
function My(e) {
  e.resetSkewAndRotation();
}
function Dy(e) {
  e.removeLeadSnapshot();
}
function Uo(e, t, n) {
  e.translate = re(t.translate, 0, n), e.scale = re(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function $o(e, t, n, r) {
  e.min = re(t.min, n.min, r), e.max = re(t.max, n.max, r);
}
function Cy(e, t, n, r) {
  $o(e.x, t.x, n.x, r), $o(e.y, t.y, n.y, r);
}
function Ay(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Ly = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, _o = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), zo = _o("applewebkit/") && !_o("chrome/") ? Math.round : Oe;
function Wo(e) {
  e.min = zo(e.min), e.max = zo(e.max);
}
function Vy(e) {
  Wo(e.x), Wo(e.y);
}
function nu(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !jp(Fo(t), Fo(n), 0.2);
}
function Iy(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const ky = tu({
  attachResizeListener: (e, t) => vn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ar = {
  current: void 0
}, ru = tu({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ar.current) {
      const e = new ky({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ar.current = e;
    }
    return Ar.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Fy = {
  pan: {
    Feature: Qp
  },
  drag: {
    Feature: Jp,
    ProjectionNode: ru,
    MeasureLayout: Xl
  }
};
function Ho(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = r[i];
  o && ne.postRender(() => o(t, Mn(t)));
}
class Oy extends ht {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = lm(t, (n, r) => (Ho(this.node, r, "Start"), (i) => Ho(this.node, i, "End"))));
  }
  unmount() {
  }
}
class Ny extends ht {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Sn(vn(this.node.current, "focus", () => this.onFocus()), vn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ko(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = r[i];
  o && ne.postRender(() => o(t, Mn(t)));
}
class jy extends ht {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = hm(t, (n, r) => (Ko(this.node, r, "Start"), (i, { success: o }) => Ko(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const ni = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), By = (e) => {
  const t = ni.get(e.target);
  t && t(e);
}, Uy = (e) => {
  e.forEach(By);
};
function $y({ root: e, ...t }) {
  const n = e || document;
  Lr.has(n) || Lr.set(n, {});
  const r = Lr.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Uy, { root: e, ...t })), r[i];
}
function _y(e, t, n) {
  const r = $y(t);
  return ni.set(e, n), r.observe(e), () => {
    ni.delete(e), r.unobserve(e);
  };
}
const zy = {
  some: 0,
  all: 1
};
class Wy extends ht {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : zy[i]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), h = u ? c : d;
      h && h(l);
    };
    return _y(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Hy(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Hy({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ky = {
  inView: {
    Feature: Wy
  },
  tap: {
    Feature: jy
  },
  focus: {
    Feature: Ny
  },
  hover: {
    Feature: Oy
  }
}, Gy = {
  layout: {
    ProjectionNode: ru,
    MeasureLayout: Xl
  }
}, Yy = {
  ...Vp,
  ...Ky,
  ...Fy,
  ...Gy
}, B = /* @__PURE__ */ Ym(Yy, sp);
function Xy() {
  const e = dt(), t = [
    { path: "/", label: "Home" },
    { path: "/my-story", label: "My Story" },
    { path: "/about", label: "About Me" },
    { path: "/reflections", label: "Reflections" }
  ];
  return /* @__PURE__ */ ee("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ R("header", { className: "bg-card border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm bg-card/95", children: /* @__PURE__ */ R("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ ee("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ R(jt, { to: "/", className: "hover:opacity-80 transition-opacity", children: /* @__PURE__ */ R("h1", { className: "text-xl text-foreground", children: "The Boy Who Chose to Stay" }) }),
      /* @__PURE__ */ R("nav", { className: "hidden sm:flex items-center gap-6", children: t.map((n) => /* @__PURE__ */ ee(
        jt,
        {
          to: n.path,
          className: `relative py-2 transition-colors ${e.pathname === n.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
          children: [
            n.label,
            e.pathname === n.path && /* @__PURE__ */ R(
              B.div,
              {
                layoutId: "nav-indicator",
                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary",
                transition: { type: "spring", stiffness: 380, damping: 30 }
              }
            )
          ]
        },
        n.path
      )) }),
      /* @__PURE__ */ R("nav", { className: "sm:hidden flex items-center gap-4", children: t.map((n) => /* @__PURE__ */ R(
        jt,
        {
          to: n.path,
          className: `text-sm transition-colors ${e.pathname === n.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
          children: n.label.split(" ")[0]
        },
        n.path
      )) })
    ] }) }) }),
    /* @__PURE__ */ R("main", { className: "flex-1", children: /* @__PURE__ */ R(Id, {}) }),
    /* @__PURE__ */ R("footer", { className: "bg-card border-t border-border/50 mt-16", children: /* @__PURE__ */ ee("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ R("p", { className: "text-center text-muted-foreground italic", children: `"Home isn't just blood — it's the people who choose to love you."` }),
      /* @__PURE__ */ R("p", { className: "text-center text-sm text-muted-foreground/70 mt-4", children: "© 2026 Earl's Story" })
    ] }) })
  ] });
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Zy = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Go = (e) => {
  const t = Zy(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, iu = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = Et(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: a,
    ...s
  }, l) => $(
    "svg",
    {
      ref: l,
      ...Jy,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: iu("lucide", i),
      ...s
    },
    [
      ...a.map(([u, c]) => $(u, c)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = (e, t) => {
  const n = Et(
    ({ className: r, ...i }, o) => $(Qy, {
      ref: o,
      iconNode: t,
      className: iu(
        `lucide-${qy(Go(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = Go(e), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], tg = Dn("book-open", eg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], rg = Dn("chevron-right", ng);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = [
  ["path", { d: "M10 9h4", key: "u4k05v" }],
  ["path", { d: "M12 7v5", key: "ma6bk" }],
  ["path", { d: "M14 22v-4a2 2 0 0 0-4 0v4", key: "1pdhuj" }],
  [
    "path",
    {
      d: "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",
      key: "1rkokr"
    }
  ],
  [
    "path",
    {
      d: "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",
      key: "1w6esw"
    }
  ]
], ag = Dn("church", ig);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
], au = Dn("heart", og);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
], lg = Dn("utensils", sg);
function ug() {
  return /* @__PURE__ */ R("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20", children: /* @__PURE__ */ ee(
    B.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
      className: "text-center",
      children: [
        /* @__PURE__ */ ee("div", { className: "mb-12", children: [
          /* @__PURE__ */ R(
            B.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 0.3, type: "spring", stiffness: 200, damping: 15 },
              className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6",
              children: /* @__PURE__ */ R(au, { className: "w-10 h-10 text-primary" })
            }
          ),
          /* @__PURE__ */ R("h1", { className: "text-4xl sm:text-5xl mb-6 text-foreground", children: "The Boy Who Chose to Stay" }),
          /* @__PURE__ */ R(
            B.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5, duration: 0.8 },
              className: "text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed",
              children: "A story of belonging, faith, and finding home in unexpected places."
            }
          )
        ] }),
        /* @__PURE__ */ ee(
          B.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.7, duration: 0.8 },
            className: "bg-card rounded-2xl p-8 sm:p-12 shadow-sm border border-border/50 mb-8",
            children: [
              /* @__PURE__ */ R("h2", { className: "text-2xl mb-4 text-foreground", children: "Welcome" }),
              /* @__PURE__ */ R("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Hi, I'm Earl. I'm fifteen years old, and this is my story. It's not about being left behind—it's about being found, being chosen, and learning what home truly means." }),
              /* @__PURE__ */ R("p", { className: "text-muted-foreground leading-relaxed", children: "Through faith, family, and the warmth of a community that embraced me, I discovered that belonging isn't always about where you come from. Sometimes, it's about where you choose to be." })
            ]
          }
        ),
        /* @__PURE__ */ R(
          B.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.9, duration: 0.8 },
            children: /* @__PURE__ */ ee(
              jt,
              {
                to: "/my-story",
                className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity",
                children: [
                  "Read My Story",
                  /* @__PURE__ */ R(rg, { className: "w-5 h-5" })
                ]
              }
            )
          }
        )
      ]
    }
  ) });
}
function cg() {
  const e = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  return /* @__PURE__ */ R("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16", children: /* @__PURE__ */ ee(
    B.article,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8 },
      className: "prose prose-lg max-w-none",
      children: [
        /* @__PURE__ */ R(B.div, { ...e, className: "text-center mb-12", children: /* @__PURE__ */ R("h1", { className: "text-4xl sm:text-5xl mb-4 text-foreground", children: "The Boy Who Chose to Stay" }) }),
        /* @__PURE__ */ ee("div", { className: "space-y-6 text-foreground/90 leading-relaxed", children: [
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 0.1, duration: 0.6 }, children: "The first thing I ever learned about myself wasn't my name—it was that I was waiting." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 0.2, duration: 0.6 }, children: "I was born in silence and left with a promise." }),
          /* @__PURE__ */ ee(B.p, { ...e, transition: { delay: 0.3, duration: 0.6 }, children: [
            `My mother brought me to Cavite, kissed my forehead, and said she was going abroad. "Babalik ako." I'll come back.`,
            /* @__PURE__ */ R("br", {}),
            "But some promises fade like footprints in the sand."
          ] }),
          /* @__PURE__ */ ee(B.p, { ...e, transition: { delay: 0.4, duration: 0.6 }, children: [
            "I never met my father. I never heard his voice.",
            /* @__PURE__ */ R("br", {}),
            "All I knew growing up was the warmth of a different home—a family who didn't share my blood but shared their table, their laughter, and their love. And to a child, that was enough."
          ] }),
          /* @__PURE__ */ R(B.div, { ...e, transition: { delay: 0.5, duration: 0.6 }, className: "pt-8 pb-4", children: /* @__PURE__ */ R("h2", { className: "text-2xl text-primary", children: "August 22 — Age 14" }) }),
          /* @__PURE__ */ ee(B.p, { ...e, transition: { delay: 0.6, duration: 0.6 }, children: [
            "Birthdays are supposed to be filled with candles and wishes.",
            /* @__PURE__ */ R("br", {}),
            "That night, my Tita gave me something else: the truth."
          ] }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 0.7, duration: 0.6 }, children: "She told me I was an orphan." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 0.8, duration: 0.6 }, children: "The words hurt—but they didn't break me. Instead, they filled in the missing pieces of my story. On the day I turned fourteen, I learned that my beginning was uncertain… but my present was real." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 0.9, duration: 0.6 }, children: "And maybe that mattered more." }),
          /* @__PURE__ */ R(B.div, { ...e, transition: { delay: 1, duration: 0.6 }, className: "pt-8 pb-4", children: /* @__PURE__ */ R("h2", { className: "text-2xl text-primary", children: "A Year Earlier — Age 13" }) }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 1.1, duration: 0.6 }, children: "One quiet Sunday, I passed by the old church near our home. The choir's voices floated into the air, candles glowed softly, and the scent of incense lingered like a gentle reminder that someone was listening." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 1.2, duration: 0.6 }, children: "Father Luis saw me watching." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 1.3, duration: 0.6 }, children: '"Do you want to help?" he asked.' }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 1.4, duration: 0.6 }, children: "I nodded." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 1.5, duration: 0.6 }, children: 'That simple "yes" changed something in me.' }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 1.6, duration: 0.6 }, children: "I became a sacristan. I learned to prepare the altar, light candles, and serve with purpose. In the rhythm of prayers and the warmth of the community, I found something I didn't know I was searching for—belonging." }),
          /* @__PURE__ */ R(B.div, { ...e, transition: { delay: 1.7, duration: 0.6 }, className: "pt-8 pb-4", children: /* @__PURE__ */ R("h2", { className: "text-2xl text-primary", children: "The Night I'll Never Forget" }) }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 1.8, duration: 0.6 }, children: "Christmas Eve. Misa de Gallo." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 1.9, duration: 0.6 }, children: "After Mass, the nuns served spaghetti—my favorite. The steam rose into the cool December air, and for the first time, I felt like I was exactly where I was meant to be." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 2, duration: 0.6 }, children: "Father Luis handed me a small wooden cross." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 2.1, duration: 0.6 }, children: `"Earl," he said, "guard the love you've been given. You deserve to be happy."` }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 2.2, duration: 0.6 }, children: "That night, I understood something important." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 2.3, duration: 0.6 }, children: "I may have been left behind… but I was never abandoned by life." }),
          /* @__PURE__ */ R(B.div, { ...e, transition: { delay: 2.4, duration: 0.6 }, className: "pt-8 pb-4", children: /* @__PURE__ */ R("h2", { className: "text-2xl text-primary", children: "Now — Age 15" }) }),
          /* @__PURE__ */ ee(B.p, { ...e, transition: { delay: 2.5, duration: 0.6 }, children: [
            "I still love spaghetti.",
            /* @__PURE__ */ R("br", {}),
            "I still serve in church.",
            /* @__PURE__ */ R("br", {}),
            "I still carry that wooden cross."
          ] }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 2.6, duration: 0.6 }, children: "The truth about my birth no longer feels like a wound—it feels like a chapter. It reminds me that home isn't about where you started." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 2.7, duration: 0.6 }, children: "Home is where you are chosen." }),
          /* @__PURE__ */ R(B.p, { ...e, transition: { delay: 2.8, duration: 0.6 }, children: "And I was chosen—by a family who stayed, by a church that welcomed me, and by a future that's still waiting to unfold." }),
          /* @__PURE__ */ ee(
            B.div,
            {
              ...e,
              transition: { delay: 2.9, duration: 0.6 },
              className: "pt-8 pb-4 border-t border-border/50 mt-12",
              children: [
                /* @__PURE__ */ ee("p", { className: "text-lg", children: [
                  "I am Earl.",
                  /* @__PURE__ */ R("br", {}),
                  "Fifteen years old.",
                  /* @__PURE__ */ R("br", {}),
                  "And my story isn't about being left."
                ] }),
                /* @__PURE__ */ R("p", { className: "text-lg mt-4", children: "It's about choosing to stay, to believe, and to move forward." })
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
function dg() {
  const e = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }, t = [
    {
      icon: au,
      title: "My Name",
      description: "I'm Earl, and I'm fifteen years old. I live in Cavite, Philippines."
    },
    {
      icon: ag,
      title: "My Faith",
      description: "I serve as a sacristan at my local church. Faith and community have given me a sense of belonging and purpose."
    },
    {
      icon: lg,
      title: "My Favorite Food",
      description: "Spaghetti! It reminds me of that special Christmas Eve at Misa de Gallo—a night that changed everything."
    }
  ];
  return /* @__PURE__ */ R("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16", children: /* @__PURE__ */ ee(
    B.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8 },
      children: [
        /* @__PURE__ */ ee(B.div, { ...e, className: "text-center mb-12", children: [
          /* @__PURE__ */ R("h1", { className: "text-4xl sm:text-5xl mb-4 text-foreground", children: "About Me" }),
          /* @__PURE__ */ R("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "A glimpse into who I am and what matters most to me" })
        ] }),
        /* @__PURE__ */ ee(
          B.div,
          {
            ...e,
            transition: { delay: 0.2, duration: 0.6 },
            className: "bg-card rounded-2xl p-8 sm:p-10 shadow-sm border border-border/50 mb-12",
            children: [
              /* @__PURE__ */ R("p", { className: "text-lg text-foreground/90 leading-relaxed mb-4", children: "My story isn't defined by the beginning I didn't choose, but by the moments that shaped me and the people who chose to love me." }),
              /* @__PURE__ */ R("p", { className: "text-lg text-foreground/90 leading-relaxed", children: "I've learned that family isn't always about blood—it's about the warmth of a shared table, the comfort of familiar laughter, and the embrace of a community that welcomes you home." })
            ]
          }
        ),
        /* @__PURE__ */ R("div", { className: "grid sm:grid-cols-3 gap-6 mb-12", children: t.map((n, r) => /* @__PURE__ */ ee(
          B.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 + r * 0.1, duration: 0.6 },
            className: "bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center",
            children: [
              /* @__PURE__ */ R("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4", children: /* @__PURE__ */ R(n.icon, { className: "w-7 h-7 text-primary" }) }),
              /* @__PURE__ */ R("h3", { className: "text-lg mb-2 text-foreground", children: n.title }),
              /* @__PURE__ */ R("p", { className: "text-sm text-muted-foreground leading-relaxed", children: n.description })
            ]
          },
          n.title
        )) }),
        /* @__PURE__ */ ee(
          B.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.6, duration: 0.6 },
            className: "bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 sm:p-10 border border-primary/20",
            children: [
              /* @__PURE__ */ R("h2", { className: "text-2xl mb-4 text-foreground", children: "What I Carry" }),
              /* @__PURE__ */ R("p", { className: "text-foreground/90 leading-relaxed mb-4", children: "I carry a small wooden cross given to me by Father Luis on Christmas Eve. It's a reminder of the love I've been given and a symbol of the faith that anchors me." }),
              /* @__PURE__ */ R("p", { className: "text-foreground/90 leading-relaxed", children: "More than anything, I carry the hope that my story can inspire others who feel lost or left behind. You are not defined by your beginning—you are defined by your courage to keep going." })
            ]
          }
        )
      ]
    }
  ) });
}
function hg() {
  const e = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  return /* @__PURE__ */ R("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16", children: /* @__PURE__ */ ee(
    B.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8 },
      children: [
        /* @__PURE__ */ ee(B.div, { ...e, className: "text-center mb-12", children: [
          /* @__PURE__ */ R("h1", { className: "text-4xl sm:text-5xl mb-4 text-foreground", children: "Reflections" }),
          /* @__PURE__ */ R("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Thoughts, moments, and lessons along the way" })
        ] }),
        /* @__PURE__ */ ee(
          B.div,
          {
            ...e,
            transition: { delay: 0.2, duration: 0.6 },
            className: "bg-card rounded-2xl p-12 sm:p-16 shadow-sm border border-border/50 text-center",
            children: [
              /* @__PURE__ */ R(
                B.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.4, type: "spring", stiffness: 200, damping: 15 },
                  className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6",
                  children: /* @__PURE__ */ R(tg, { className: "w-10 h-10 text-primary" })
                }
              ),
              /* @__PURE__ */ R("h2", { className: "text-2xl mb-4 text-foreground", children: "Coming Soon" }),
              /* @__PURE__ */ R("p", { className: "text-muted-foreground leading-relaxed max-w-lg mx-auto mb-6", children: "This space will be filled with reflections on life, faith, and the journey ahead. As I continue to grow and learn, I'll share my thoughts and experiences here." }),
              /* @__PURE__ */ R("p", { className: "text-sm text-muted-foreground/70 italic", children: "Check back soon for updates" })
            ]
          }
        ),
        /* @__PURE__ */ R(
          B.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.6, duration: 0.6 },
            className: "mt-12 text-center",
            children: /* @__PURE__ */ R("p", { className: "text-muted-foreground/60 text-sm", children: "Future reflections will appear here as Earl continues his journey" })
          }
        )
      ]
    }
  ) });
}
const fg = ih([
  {
    path: "/",
    Component: Xy,
    children: [
      { index: !0, Component: ug },
      { path: "my-story", Component: cg },
      { path: "about", Component: dg },
      { path: "reflections", Component: hg }
    ]
  }
]);
function mg() {
  return /* @__PURE__ */ R(Ad, { router: fg });
}
const pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mg
}, Symbol.toStringTag, { value: "Module" }));
export {
  yg as Code1_4
};
