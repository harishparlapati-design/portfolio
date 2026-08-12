(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/-hareesh-Portfolio-master/components/layout/LanguageToggle.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "on": "LanguageToggle-module__02IkvW__on",
  "opt": "LanguageToggle-module__02IkvW__opt",
  "thumb": "LanguageToggle-module__02IkvW__thumb",
  "toggle": "LanguageToggle-module__02IkvW__toggle",
});
}),
"[project]/-hareesh-Portfolio-master/components/layout/LanguageToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/layout/LanguageToggle.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LanguageToggle() {
    _s();
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
        role: "group",
        "aria-label": "Language",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb,
                style: {
                    transform: `translateX(${lang === "fr" ? "100%" : "0%"})`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/layout/LanguageToggle.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            [
                "en",
                "fr"
            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opt} ${lang === l ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on : ""}`,
                    onClick: ()=>setLang(l),
                    "aria-pressed": lang === l,
                    lang: l,
                    children: l.toUpperCase()
                }, l, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/layout/LanguageToggle.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/layout/LanguageToggle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(LanguageToggle, "bo49fKWoYd/YYtFR+MvJoYnk/BE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/layout/Nav.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "burger": "Nav-module__yWOpLG__burger",
  "burgerOpen": "Nav-module__yWOpLG__burgerOpen",
  "cap": "Nav-module__yWOpLG__cap",
  "links": "Nav-module__yWOpLG__links",
  "logo": "Nav-module__yWOpLG__logo",
  "on": "Nav-module__yWOpLG__on",
  "right": "Nav-module__yWOpLG__right",
  "roll": "Nav-module__yWOpLG__roll",
  "scrim": "Nav-module__yWOpLG__scrim",
  "scrimOn": "Nav-module__yWOpLG__scrimOn",
  "scrolled": "Nav-module__yWOpLG__scrolled",
  "sheet": "Nav-module__yWOpLG__sheet",
  "sheetOn": "Nav-module__yWOpLG__sheetOn",
  "sheetOpen": "Nav-module__yWOpLG__sheetOpen",
  "wrap": "Nav-module__yWOpLG__wrap",
});
}),
"[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/layout/LanguageToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/layout/Nav.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* `#home` resolves to the very top of the document (see lib/lenis.ts), so
   Home always returns to the true beginning of the portfolio. */ const LINKS = [
    {
        key: "nav.home",
        href: "#home",
        watch: null
    },
    {
        key: "nav.about",
        href: "#about",
        watch: "about"
    },
    {
        key: "nav.work",
        href: "#work",
        watch: "work"
    },
    {
        key: "nav.contact",
        href: "#contact",
        watch: "contact"
    }
];
function Nav() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* mobile drawer — the desktop pill can't hold four links plus the toggle
     at phone widths, so below 900px navigation lives behind a menu button
     rather than being hidden entirely (which is what it was doing) */ const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* close on Escape, and lock the page behind the open drawer */ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            if (!menuOpen) return;
            const onKey = {
                "Nav.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") setMenuOpen(false);
                }
            }["Nav.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "Nav.useEffect": ()=>{
                    window.removeEventListener("keydown", onKey);
                    document.body.style.overflow = prev;
                }
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        menuOpen
    ]);
    /* never leave the drawer open behind a resize to desktop */ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const mq = window.matchMedia("(min-width: 901px)");
            const close = {
                "Nav.useEffect.close": ()=>mq.matches && setMenuOpen(false)
            }["Nav.useEffect.close"];
            mq.addEventListener("change", close);
            return ({
                "Nav.useEffect": ()=>mq.removeEventListener("change", close)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const nav = ref.current;
            if (!nav) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "Nav.useEffect.ctx": ()=>{
                    /* The header is PERSISTENT: it never hides. It only condenses slightly
         once the page has been scrolled, which keeps it feeling part of the
         page rather than a floating panel. */ __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        start: "top top-=40",
                        onUpdate: {
                            "Nav.useEffect.ctx": (self)=>{
                                nav.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrolled, self.scroll() > 40);
                            }
                        }["Nav.useEffect.ctx"],
                        onLeaveBack: {
                            "Nav.useEffect.ctx": ()=>nav.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrolled)
                        }["Nav.useEffect.ctx"]
                    });
                    /* scroll-spy: the nav reflects where you actually are, and falls back
         to Home whenever you are near the top of the document */ const spies = LINKS.filter({
                        "Nav.useEffect.ctx.spies": (l)=>l.watch
                    }["Nav.useEffect.ctx.spies"]).map({
                        "Nav.useEffect.ctx.spies": (l)=>__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: `#${l.watch}`,
                                start: "top 55%",
                                end: "bottom 45%",
                                onToggle: {
                                    "Nav.useEffect.ctx.spies": (self)=>{
                                        if (self.isActive) setActive(l.watch);
                                    }
                                }["Nav.useEffect.ctx.spies"]
                            })
                    }["Nav.useEffect.ctx.spies"]);
                    const top = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        start: 0,
                        end: {
                            "Nav.useEffect.ctx.top": ()=>window.innerHeight * 1.2
                        }["Nav.useEffect.ctx.top"],
                        onToggle: {
                            "Nav.useEffect.ctx.top": (self)=>{
                                if (self.isActive) setActive(null);
                            }
                        }["Nav.useEffect.ctx.top"]
                    });
                    return ({
                        "Nav.useEffect.ctx": ()=>{
                            spies.forEach({
                                "Nav.useEffect.ctx": (s)=>s.kill()
                            }["Nav.useEffect.ctx"]);
                            top.kill();
                        }
                    })["Nav.useEffect.ctx"];
                }
            }["Nav.useEffect.ctx"], nav);
            return ({
                "Nav.useEffect": ()=>ctx.revert()
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrap,
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        "aria-label": t("nav.home"),
                        children: [
                            "HAREESH",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                lineNumber: 99,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].links,
                        "aria-label": "Primary",
                        children: LINKS.map((l)=>{
                            const isOn = l.watch === active;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                className: isOn ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on : "",
                                "aria-current": isOn ? "page" : undefined,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roll,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t(l.key)
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: t(l.key)
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            }, l.key, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burgerOpen : ""}`,
                                "aria-label": menuOpen ? t("nav.close") : t("nav.menu"),
                                "aria-expanded": menuOpen,
                                "aria-controls": "mobile-nav",
                                onClick: ()=>setMenuOpen((o)=>!o),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sheet} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sheetOpen : ""}`,
                id: "mobile-nav",
                hidden: !menuOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Primary mobile",
                    children: LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: l.href,
                            className: l.watch === active ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sheetOn : "",
                            "aria-current": l.watch === active ? "page" : undefined,
                            onClick: ()=>setMenuOpen(false),
                            children: t(l.key)
                        }, l.key, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrim} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrimOn : ""}`,
                "aria-label": t("nav.close"),
                tabIndex: menuOpen ? 0 : -1,
                onClick: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/layout/Nav.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(Nav, "+/VyPXc6N1DfYm2fSkENLRGycWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/layout/Scene.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "hold": "Scene-module__QF3rwq__hold",
  "keepFrame": "Scene-module__QF3rwq__keepFrame",
  "keepRunway": "Scene-module__QF3rwq__keepRunway",
  "runway": "Scene-module__QF3rwq__runway",
});
}),
"[project]/-hareesh-Portfolio-master/components/layout/Scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/layout/Scene.module.css [app-client] (css module)");
"use client";
;
;
function Scene({ children, runway = 0, order, id, keepOnMobile = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hold} ${keepOnMobile ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keepFrame : ""}`,
                "data-scene": id ?? String(order),
                style: {
                    zIndex: order
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Scene.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            runway > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].runway} ${keepOnMobile ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keepRunway : ""}`,
                "data-runway": id ?? String(order),
                style: {
                    height: `calc(${runway} * 100svh)`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/layout/Scene.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/layout/Scene.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = Scene;
var _c;
__turbopack_context__.k.register(_c, "Scene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/About/About.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "about": "About-module__8cVA8G__about",
  "beat": "About-module__8cVA8G__beat",
  "beatN": "About-module__8cVA8G__beatN",
  "beats": "About-module__8cVA8G__beats",
  "edu": "About-module__8cVA8G__edu",
  "eyebrow": "About-module__8cVA8G__eyebrow",
  "grid": "About-module__8cVA8G__grid",
  "h2": "About-module__8cVA8G__h2",
  "imgCard": "About-module__8cVA8G__imgCard",
  "metric": "About-module__8cVA8G__metric",
  "metricLabel": "About-module__8cVA8G__metricLabel",
  "metricNum": "About-module__8cVA8G__metricNum",
  "metricStatic": "About-module__8cVA8G__metricStatic",
  "metrics": "About-module__8cVA8G__metrics",
  "next": "About-module__8cVA8G__next",
  "philoCard": "About-module__8cVA8G__philoCard",
  "serif": "About-module__8cVA8G__serif",
  "sideCard": "About-module__8cVA8G__sideCard",
  "sideCol": "About-module__8cVA8G__sideCol",
  "wrap": "About-module__8cVA8G__wrap",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/About/About.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const MARQUEE_ROWS = [
    {
        items: [
            "Fusion 360",
            "CNC",
            "3D Printing",
            "Drone Technology",
            "Assemblies",
            "Engineering Drawings",
            "Design Thinking"
        ],
        velocity: -28,
        outline: true
    }
];
const METRICS = [
    {
        value: "B.Tech",
        count: null,
        key: "about.m1"
    },
    {
        value: "CAD",
        count: null,
        key: "about.m2"
    },
    {
        value: "2",
        count: 2,
        suffix: "",
        key: "about.m3"
    },
    {
        value: "15+",
        count: null,
        key: "about.m4"
    }
];
function About() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            const el = root.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "About.useEffect.ctx": ()=>{
                    /* shared reveal grammar — same as hero: y + fade, soft expo */ const reveal = {
                        "About.useEffect.ctx.reveal": (targets, trigger, vars = {})=>__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(targets, {
                                y: 44,
                                autoAlpha: 0,
                                duration: 1,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                                stagger: 0.1,
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger,
                                    start: "top 82%"
                                },
                                ...vars
                            })
                    }["About.useEffect.ctx.reveal"];
                    reveal([
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow}`,
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2}`
                    ], el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header}`));
                    /* metrics: reveal + count-up when the band enters */ const band = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metrics}`);
                    if (band) {
                        reveal(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metric}`, band, {
                            stagger: 0.09
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                            trigger: band,
                            start: "top 84%",
                            once: true,
                            onEnter: {
                                "About.useEffect.ctx": ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray("[data-metric-count]").forEach({
                                        "About.useEffect.ctx": (numEl)=>{
                                            const target = Number(numEl.dataset.metricCount);
                                            const obj = {
                                                v: 0
                                            };
                                            /* the markup ships the real number, so it is correct with no JS
                 at all; the count-up rewinds to zero only at the moment it is
                 actually about to run */ numEl.textContent = "0";
                                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(obj, {
                                                v: target,
                                                duration: 1.4,
                                                ease: "power2.out",
                                                onUpdate: {
                                                    "About.useEffect.ctx": ()=>{
                                                        numEl.textContent = String(Math.round(obj.v));
                                                    }
                                                }["About.useEffect.ctx"]
                                            });
                                        }
                                    }["About.useEffect.ctx"]);
                                }
                            }["About.useEffect.ctx"]
                        });
                    }
                    reveal([
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].edu}`,
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].next}`
                    ], el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].edu}`), {
                        stagger: 0.12
                    });
                }
            }["About.useEffect.ctx"], el);
            return ({
                "About.useEffect": ()=>ctx.revert()
            })["About.useEffect"];
        }
    }["About.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about,
        id: "about",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rows: MARQUEE_ROWS
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "01"
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t("about.eyebrow")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                                children: [
                                    t("about.h2a"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, this),
                                    t("about.h2b"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                        children: t("about.h2Em")
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                        lineNumber: 99,
                                        columnNumber: 30
                                    }, this),
                                    t("about.h2c")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metrics,
                        children: METRICS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metric,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricNum,
                                        children: m.count !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "prefix" in m && m.prefix,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-metric-count": m.count,
                                                    children: m.count
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: m.suffix
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricStatic,
                                            children: m.value
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                        children: t(m.key)
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, m.key, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].edu,
                        children: t("about.edu")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].next,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#work",
                            variant: "dark",
                            size: "sm",
                            arrow: true,
                            children: t("about.cta")
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/About/About.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(About, "Iqs25n8ECfHKcQdsdD6kwktUfVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "band": "Certifications-module__wMDOXa__band",
  "brandFoot": "Certifications-module__wMDOXa__brandFoot",
  "certs": "Certifications-module__wMDOXa__certs",
  "colLbl": "Certifications-module__wMDOXa__colLbl",
  "cols": "Certifications-module__wMDOXa__cols",
  "count": "Certifications-module__wMDOXa__count",
  "dark": "Certifications-module__wMDOXa__dark",
  "deckMode": "Certifications-module__wMDOXa__deckMode",
  "detail": "Certifications-module__wMDOXa__detail",
  "eyebrow": "Certifications-module__wMDOXa__eyebrow",
  "foot": "Certifications-module__wMDOXa__foot",
  "footLbl": "Certifications-module__wMDOXa__footLbl",
  "h2": "Certifications-module__wMDOXa__h2",
  "head": "Certifications-module__wMDOXa__head",
  "issuer": "Certifications-module__wMDOXa__issuer",
  "issuerName": "Certifications-module__wMDOXa__issuerName",
  "issuerRow": "Certifications-module__wMDOXa__issuerRow",
  "kind": "Certifications-module__wMDOXa__kind",
  "lede": "Certifications-module__wMDOXa__lede",
  "light": "Certifications-module__wMDOXa__light",
  "logoPlate": "Certifications-module__wMDOXa__logoPlate",
  "metric": "Certifications-module__wMDOXa__metric",
  "metricLabel": "Certifications-module__wMDOXa__metricLabel",
  "metricValue": "Certifications-module__wMDOXa__metricValue",
  "muted": "Certifications-module__wMDOXa__muted",
  "no": "Certifications-module__wMDOXa__no",
  "ok": "Certifications-module__wMDOXa__ok",
  "on": "Certifications-module__wMDOXa__on",
  "org": "Certifications-module__wMDOXa__org",
  "panel": "Certifications-module__wMDOXa__panel",
  "record": "Certifications-module__wMDOXa__record",
  "red": "Certifications-module__wMDOXa__red",
  "skills": "Certifications-module__wMDOXa__skills",
  "stage": "Certifications-module__wMDOXa__stage",
  "stageWrap": "Certifications-module__wMDOXa__stageWrap",
  "status": "Certifications-module__wMDOXa__status",
  "title": "Certifications-module__wMDOXa__title",
  "verifyLink": "Certifications-module__wMDOXa__verifyLink",
  "vert": "Certifications-module__wMDOXa__vert",
  "wordmark": "Certifications-module__wMDOXa__wordmark",
  "year": "Certifications-module__wMDOXa__year",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * CREDENTIALS — pitch-deck cascade, replicated from the supplied reference.
 *
 * What the reference establishes, and what is reproduced here:
 *   · 16:10 slide panels descending diagonally through the centre on a gentle
 *     S-curve, each rotated 4–14° in alternating directions
 *   · panels overlap so each one's UPPER-LEFT stays exposed — which is exactly
 *     where the reference places its section number and title
 *   · colour rhythm: near-black → white → near-black → VERMILION brand panel
 *     → white → near-black → white, on a warm light-grey ground
 *   · tiny mono section numbers, oversized condensed uppercase titles,
 *     ghosted metric numerals, small right-hand text columns
 *   · a structural INTRODUCTION panel and a brand wordmark panel sit inside
 *     the sequence, as in the reference deck
 *
 * Interaction: scroll drives the cascade. Panels travel down the arc, rotation
 * and scale ease as they move, the centre panel becomes dominant, passed
 * panels exit downward. Text never collides: waiting panels expose only their
 * identity band; full detail renders on the focused panel, which nothing
 * sits in front of.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/lenis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$certifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/content/certifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* scroll length per credential — see the note in Experience.tsx: the pinned
   sections are kept tight so the page never feels locked */ const STEP_VH = 0.7;
/* ---------- the movement model ----------
 *   RIGHT  →  CENTER  →  BACKGROUND
 *
 * A credential slides in from the right and takes the centre as the active
 * hero panel. When it is passed it does NOT fly away: it recedes straight
 * back in Z, scales down slightly and settles as a dim depth layer behind
 * the stack — still on screen, never leaving the viewport. The next
 * credential arrives from the right at the same time, so each hand-off is
 * one continuous movement.
 *
 * Position is a pure function of scroll, so scrolling back up runs the exact
 * same path in reverse — no snapping, no autoplay, no reset. Offsets are
 * percentages of the panel, so behaviour is identical at every size. */ const ENTER_X = 118; /* % of panel width — a waiting panel sits off-RIGHT */ 
const ENTER_Z = -150; /* px of depth on approach, flattening to 0 at centre */ 
const BACK_Z = -520; /* px — how far a passed credential recedes */ 
const BACK_SCALE = 0.2; /* how much it shrinks on the way back */ 
const BACK_MIN_OP = 0.18; /* it fades into the background, never to nothing */ 
const CULL_IN = 1.25; /* incoming panels beyond this are off-stage */ 
const CULL_BACK = 3.2; /* passed panels linger as depth layers this far back */ 
/* Every panel is a credential now — the introduction and wordmark slides
   were removed, since the section header states both. */ const PANELS = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$certifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERTS"].map(_c = (_, index)=>({
        kind: "cert",
        index
    }));
_c1 = PANELS;
/* alternating tone rhythm, kept from the deck design */ const TONE = [
    "dark",
    "light",
    "dark",
    "light",
    "dark"
];
function Certifications() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Certifications.useEffect": ()=>{
            const el = root.current;
            if (!el) return;
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", {
                "Certifications.useEffect": ()=>{
                    const panels = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel}`);
                    const counter = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count}`);
                    const n = panels.length;
                    let active = -1;
                    el.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deckMode);
                    const setActive = {
                        "Certifications.useEffect.setActive": (i)=>{
                            if (i === active) return;
                            active = i;
                            panels.forEach({
                                "Certifications.useEffect.setActive": (p, k)=>p.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on, k === i)
                            }["Certifications.useEffect.setActive"]);
                            if (counter) counter.textContent = `${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
                        }
                    }["Certifications.useEffect.setActive"];
                    const place = {
                        "Certifications.useEffect.place": (p)=>{
                            for(let i = 0; i < n; i++){
                                const el2 = panels[i];
                                const d = i - p; /* >0 still to come · 0 centred · <0 receding */ 
                                if (d > CULL_IN || d < -CULL_BACK) {
                                    el2.style.visibility = "hidden";
                                    continue;
                                }
                                el2.style.visibility = "visible";
                                let x = 0;
                                let z = 0;
                                let op = 1;
                                let sc = 1;
                                if (d >= 0) {
                                    /* RIGHT → CENTER */ const t = Math.min(d, CULL_IN);
                                    x = ENTER_X * t;
                                    z = ENTER_Z * t;
                                    sc = 1 - 0.05 * t;
                                    op = 1 - Math.max(0, t - 0.5) / 0.62; /* fades up as it arrives */ 
                                } else {
                                    /* CENTER → BACKGROUND: straight back, no lateral drift, and it
               stays on screen as a depth layer instead of exiting */ const t = Math.min(CULL_BACK, -d);
                                    const e = 1 - Math.pow(1 - Math.min(t, 1), 2); /* ease the first step */ 
                                    z = BACK_Z * (e + Math.max(0, t - 1) * 0.28);
                                    sc = 1 - BACK_SCALE * (e + Math.max(0, t - 1) * 0.12);
                                    op = Math.max(BACK_MIN_OP, 1 - e * 0.68 - Math.max(0, t - 1) * 0.06);
                                }
                                /* panels are straight rectangles — no roll, no skew */ el2.style.transform = `translate3d(${x.toFixed(2)}%, 0%, ${z.toFixed(1)}px)` + ` scale(${sc.toFixed(3)})`;
                                el2.style.opacity = String(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, op));
                                el2.style.filter = "";
                                /* the active credential is the hero: everything else, arriving or
             receded, sits behind it */ el2.style.zIndex = String(200 - Math.round(Math.abs(d) * 20));
                            }
                            setActive(Math.round(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, n - 1, p)));
                        }
                    }["Certifications.useEffect.place"];
                    /* scroll → target → interpolation → transforms */ let target = 0;
                    let current = 0;
                    const tick = {
                        "Certifications.useEffect.tick": (_t, dt)=>{
                            const f = Math.min(dt / 1000, 0.05);
                            current += (target - current) * Math.min(f * 9, 1);
                            place(current);
                        }
                    }["Certifications.useEffect.tick"];
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(tick);
                    place(0);
                    /* The Scene's sticky hold already pins this section, so no `pin` here —
         this trigger only reads progress across the scene's runway. */ const st = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(el),
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                        onUpdate: {
                            "Certifications.useEffect.st": (self)=>{
                                target = self.progress * (n - 1);
                            }
                        }["Certifications.useEffect.st"]
                    });
                    /* click a panel to travel to it */ const handlers = [];
                    panels.forEach({
                        "Certifications.useEffect": (pnl, i)=>{
                            const h = {
                                "Certifications.useEffect.h": ()=>{
                                    const y = st.start + i / (n - 1) * (st.end - st.start);
                                    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLenis"])();
                                    if (lenis) lenis.scrollTo(y, {
                                        duration: 1
                                    });
                                    else window.scrollTo({
                                        top: y,
                                        behavior: "smooth"
                                    });
                                }
                            }["Certifications.useEffect.h"];
                            pnl.addEventListener("click", h);
                            handlers.push([
                                pnl,
                                h
                            ]);
                        }
                    }["Certifications.useEffect"]);
                    /* No pointer-driven rotation: credential panels stay square to the
         viewer. Depth comes only from Z, scale and opacity. */ __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].foot} > *`, {
                        y: 18,
                        autoAlpha: 0,
                        duration: 0.8,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.08,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 74%"
                        }
                    });
                    return ({
                        "Certifications.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                            st.kill();
                            handlers.forEach({
                                "Certifications.useEffect": ([e2, h])=>e2.removeEventListener("click", h)
                            }["Certifications.useEffect"]);
                            el.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deckMode);
                        }
                    })["Certifications.useEffect"];
                }
            }["Certifications.useEffect"]);
            mm.add("(max-width: 1000px), (prefers-reduced-motion: reduce)", {
                "Certifications.useEffect": ()=>{
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel}`).forEach({
                        "Certifications.useEffect": (p)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(p, {
                                y: 40,
                                autoAlpha: 0,
                                duration: 0.85,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger: p,
                                    start: "top 88%"
                                }
                            });
                        }
                    }["Certifications.useEffect"]);
                }
            }["Certifications.useEffect"]);
            return ({
                "Certifications.useEffect": ()=>mm.revert()
            })["Certifications.useEffect"];
        }
    }["Certifications.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].certs,
        id: "certifications",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "06"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            " ",
                            t("cert.eyebrow")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                        children: t("cert.h2")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                        children: t("cert.lede")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                    children: PANELS.map((p, i)=>{
                        const tone = TONE[i % TONE.length];
                        const cls = `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][tone]} ${i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on : ""}`;
                        const c = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$certifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERTS"][p.index];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: cls,
                            style: {
                                zIndex: 200 - i
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].band,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].no,
                                            children: c.no
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kind,
                                            children: t("cert.certification")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status} ${c.verified ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ok : ""}`,
                                            children: c.verified ? t("cert.verified") : t("cert.onRequest")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].issuerRow,
                                    children: [
                                        c.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoPlate,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: c.logo.src,
                                                alt: c.issuer ?? "",
                                                style: {
                                                    aspectRatio: c.logo.aspect
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                lineNumber: 245,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].issuerName,
                                            children: c.issuer ? `${c.issuer} ${t("cert.certified")}` : t("cert.issuerTBC")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "title")
                                }, void 0, false, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detail,
                                    children: [
                                        c.metric && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metric,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                                    children: c.metric.value
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                                    children: lang === "fr" && c.fr?.metricLabel || c.metric.label
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                            lineNumber: 261,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cols,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].record,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: t("cert.issuedBy")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    children: c.issuer ?? t("cert.tbc")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: t("cert.year")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    children: c.year ?? t("cert.tbc")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: t("cert.id")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    children: c.credentialId ?? "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLbl,
                                                    children: t("cert.skills")
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skills,
                                                    children: c.skills.map((s, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: lang === "fr" && c.fr?.skills?.[si] || s
                                                        }, s, false, {
                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 21
                                                }, this),
                                                c.credentialUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verifyLink,
                                                    href: c.credentialUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: t("cert.verify")
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, c.title, true, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                            lineNumber: 230,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].foot,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandFoot,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "06"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            " Hareesh"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                        children: [
                            "01 / ",
                            String(PANELS.length).padStart(2, "0")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Certifications$2f$Certifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footLbl,
                        children: t("cert.foot")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Certifications/Certifications.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s(Certifications, "QeCfe2rdG634JGQWUzKzs9CzsNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = Certifications;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PANELS$CERTS.map");
__turbopack_context__.k.register(_c1, "PANELS");
__turbopack_context__.k.register(_c2, "Certifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arc": "Connect-module__8EAGLG__arc",
  "arrow": "Connect-module__8EAGLG__arrow",
  "connect": "Connect-module__8EAGLG__connect",
  "cta": "Connect-module__8EAGLG__cta",
  "eyebrow": "Connect-module__8EAGLG__eyebrow",
  "footer": "Connect-module__8EAGLG__footer",
  "glyph": "Connect-module__8EAGLG__glyph",
  "h2": "Connect-module__8EAGLG__h2",
  "hasPhoto": "Connect-module__8EAGLG__hasPhoto",
  "head": "Connect-module__8EAGLG__head",
  "lede": "Connect-module__8EAGLG__lede",
  "pLabel": "Connect-module__8EAGLG__pLabel",
  "panel": "Connect-module__8EAGLG__panel",
  "panelInner": "Connect-module__8EAGLG__panelInner",
  "ph": "Connect-module__8EAGLG__ph",
  "photo": "Connect-module__8EAGLG__photo",
  "roll": "Connect-module__8EAGLG__roll",
  "serif": "Connect-module__8EAGLG__serif",
  "social": "Connect-module__8EAGLG__social",
  "socials": "Connect-module__8EAGLG__socials",
  "top": "Connect-module__8EAGLG__top",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Connect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * LET'S CONNECT — the closing chapter (Patta "Let's connect" as the mood
 * reference: curved panel row, floating perspective, calm typography).
 * Our take: five memory panels on a shallow 3D arc that lean with the
 * cursor and breathe on idle; the site-wide Button carries the CTA; social
 * cards use the same circle-fill + roll language as the nav.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* Gireesh's own photographs, in the order he supplied them (IMAGE 1–5).
   `focus` is object-position only: the frames are portrait and two of the
   photos are landscape, so this keeps him in frame — the images are cropped,
   never scaled non-uniformly, and their colour is left untouched. */ const PANELS = [
    {
        src: "/images/connect/moment-1.jpg",
        focus: "58% 30%",
        rotate: 26,
        z: -110,
        y: -26
    },
    {
        src: "/images/connect/moment-2.jpg",
        focus: "center 32%",
        rotate: 13,
        z: -40,
        y: -8
    },
    {
        src: "/images/connect/moment-3.jpg",
        focus: "center 34%",
        rotate: 0,
        z: 0,
        y: 0
    },
    {
        src: "/images/connect/moment-4.jpg",
        focus: "center 30%",
        rotate: -13,
        z: -40,
        y: -8
    },
    {
        src: "/images/connect/moment-5.jpg",
        focus: "46% 32%",
        rotate: -26,
        z: -110,
        y: -26
    }
];
/* Official brand marks, inlined so they inherit size and need no requests.
   Paths are the brands' own glyphs (LinkedIn "in" bug, GitHub mark,
   Instagram camera outline) — not generic lookalikes. */ const MARKS = {
    linkedin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        }, void 0, false, {
            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    github: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        }, void 0, false, {
            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
        }, void 0, false, {
            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
/* URLs exactly as supplied — never guessed (see CONTENT_AUDIT.md) */ const SOCIALS = [
    {
        name: "LinkedIn",
        mark: "linkedin",
        href: "https://www.linkedin.com/in/hareesh-kumar-265aa81ba/"
    },
    {
        name: "GitHub",
        mark: "github",
        href: "https://github.com/harishparlapati-design"
    },
    {
        name: "Instagram",
        mark: "instagram",
        href: "https://www.instagram.com/harry_not.intetested/"
    },
    {
        name: "Email",
        glyph: "@",
        href: "mailto:harish.parlapti@gmail.com"
    },
    {
        name: "Phone",
        glyph: "☎",
        href: "tel:+919392321215"
    }
];
function Connect() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Connect.useEffect": ()=>{
            const el = root.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "Connect.useEffect.ctx": ()=>{
                    /* reveal */ __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head} > *`, {
                        y: 36,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.09,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 70%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel}`, {
                        y: 90,
                        autoAlpha: 0,
                        duration: 1.1,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: {
                            each: 0.08,
                            from: "center"
                        },
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: `.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arc}`,
                            start: "top 82%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials} > *`, {
                        y: 26,
                        autoAlpha: 0,
                        duration: 0.8,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.07,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: `.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials}`,
                            start: "top 88%"
                        }
                    });
                    /* idle float — each panel bobs on its own rhythm */ __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelInner}`).forEach({
                        "Connect.useEffect.ctx": (p, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(p, {
                                y: `+=${6 + i % 3 * 3}`,
                                duration: 3 + i % 3 * 0.7,
                                yoyo: true,
                                repeat: -1,
                                ease: "sine.inOut",
                                delay: i * 0.4
                            });
                        }
                    }["Connect.useEffect.ctx"]);
                    /* cursor: the whole arc leans, each panel adds its own micro-tilt */ const panels = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel}`);
                    const setters = panels.map({
                        "Connect.useEffect.ctx.setters": (p, i)=>({
                                rx: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(p, "rotationX", {
                                    duration: 0.9,
                                    ease: "power3.out"
                                }),
                                add: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(p, "rotationY", {
                                    duration: 0.9,
                                    ease: "power3.out"
                                }),
                                base: PANELS[i].rotate
                            })
                    }["Connect.useEffect.ctx.setters"]);
                    const onMove = {
                        "Connect.useEffect.ctx.onMove": (e)=>{
                            const r = el.getBoundingClientRect();
                            const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
                            const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
                            setters.forEach({
                                "Connect.useEffect.ctx.onMove": (s)=>{
                                    s.add(s.base + cx * 5);
                                    s.rx(-cy * 4);
                                }
                            }["Connect.useEffect.ctx.onMove"]);
                        }
                    }["Connect.useEffect.ctx.onMove"];
                    const onLeave = {
                        "Connect.useEffect.ctx.onLeave": ()=>setters.forEach({
                                "Connect.useEffect.ctx.onLeave": (s)=>{
                                    s.add(s.base);
                                    s.rx(0);
                                }
                            }["Connect.useEffect.ctx.onLeave"])
                    }["Connect.useEffect.ctx.onLeave"];
                    el.addEventListener("pointermove", onMove);
                    el.addEventListener("pointerleave", onLeave);
                    return ({
                        "Connect.useEffect.ctx": ()=>{
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        }
                    })["Connect.useEffect.ctx"];
                }
            }["Connect.useEffect.ctx"], el);
            return ({
                "Connect.useEffect": ()=>ctx.revert()
            })["Connect.useEffect"];
        }
    }["Connect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connect,
        id: "contact",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "08"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            " ",
                            t("connect.eyebrow")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                        children: [
                            t("connect.h2a"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                children: t("connect.h2Em")
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                        children: t("connect.lede")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cta,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "mailto:harish.parlapti@gmail.com",
                            variant: "primary",
                            arrow: true,
                            children: t("connect.cta")
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arc,
                "aria-hidden": "true",
                children: PANELS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        style: {
                            transform: `translate3d(0, ${p.y}px, ${p.z}px) rotateY(${p.rotate}deg)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelInner} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasPhoto}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photo,
                                src: p.src,
                                alt: "",
                                style: {
                                    objectPosition: p.focus
                                },
                                loading: "lazy",
                                decoding: "async",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    }, p.src, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials,
                children: SOCIALS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: s.href,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].social,
                        target: s.href.startsWith("http") ? "_blank" : undefined,
                        rel: s.href.startsWith("http") ? "noreferrer" : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glyph,
                                children: "mark" in s ? MARKS[s.mark] : s.glyph
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: s.name
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: s.name
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.name, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            t("connect.credit"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Hareesh"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                                lineNumber: 212,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                        children: t("connect.top")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "© 2026 Parlapati Hareesh Kumar"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Connect/Connect.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(Connect, "Iqs25n8ECfHKcQdsdD6kwktUfVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Connect;
var _c;
__turbopack_context__.k.register(_c, "Connect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "board": "Experience-module__7_n4_W__board",
  "body": "Experience-module__7_n4_W__body",
  "card": "Experience-module__7_n4_W__card",
  "company": "Experience-module__7_n4_W__company",
  "contentCol": "Experience-module__7_n4_W__contentCol",
  "count": "Experience-module__7_n4_W__count",
  "dark": "Experience-module__7_n4_W__dark",
  "deckMode": "Experience-module__7_n4_W__deckMode",
  "detailCol": "Experience-module__7_n4_W__detailCol",
  "experience": "Experience-module__7_n4_W__experience",
  "eyebrow": "Experience-module__7_n4_W__eyebrow",
  "foot": "Experience-module__7_n4_W__foot",
  "h2": "Experience-module__7_n4_W__h2",
  "header": "Experience-module__7_n4_W__header",
  "hintFoot": "Experience-module__7_n4_W__hintFoot",
  "lbl": "Experience-module__7_n4_W__lbl",
  "lblGap": "Experience-module__7_n4_W__lblGap",
  "list": "Experience-module__7_n4_W__list",
  "loc": "Experience-module__7_n4_W__loc",
  "logoBelow": "Experience-module__7_n4_W__logoBelow",
  "logoCol": "Experience-module__7_n4_W__logoCol",
  "logoWrap": "Experience-module__7_n4_W__logoWrap",
  "mono": "Experience-module__7_n4_W__mono",
  "nav": "Experience-module__7_n4_W__nav",
  "navItem": "Experience-module__7_n4_W__navItem",
  "navOn": "Experience-module__7_n4_W__navOn",
  "on": "Experience-module__7_n4_W__on",
  "outcome": "Experience-module__7_n4_W__outcome",
  "plate": "Experience-module__7_n4_W__plate",
  "role": "Experience-module__7_n4_W__role",
  "serif": "Experience-module__7_n4_W__serif",
  "skills": "Experience-module__7_n4_W__skills",
  "stage": "Experience-module__7_n4_W__stage",
  "stageWrap": "Experience-module__7_n4_W__stageWrap",
  "strip": "Experience-module__7_n4_W__strip",
  "summary": "Experience-module__7_n4_W__summary",
  "tile": "Experience-module__7_n4_W__tile",
  "tint": "Experience-module__7_n4_W__tint",
  "type": "Experience-module__7_n4_W__type",
  "year": "Experience-module__7_n4_W__year",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * EXPERIENCE — centred stacked panel composition.
 *
 * Corrections applied from review:
 *   · The stack is the HERO VISUAL and sits in the CENTRE of the viewport —
 *     not small cards on the right, not a timeline, not a carousel.
 *   · Panels are WIDE, SHORT boards (≈72vw × 150–170px), sharp-edged and
 *     perspective-distorted — physical sheets, not rounded app cards.
 *   · Depth stack recedes up-and-back on a diagonal; the active board is
 *     closest, largest, sharpest. Exit travels down + back + blur + fade.
 *   · TEXT NEVER COLLIDES: waiting boards render identity only (year · role ·
 *     company). Description and skills exist ONLY on the active board.
 *   · Scroll physics: scroll → target progress → rAF interpolation →
 *     transforms. Never bound directly to raw scroll position.
 *   · One curated colour per board; white gallery background.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/lenis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/content/experience.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* Scroll length per board. Kept deliberately short: Work, Experience and
   Credentials are three pinned set-pieces in a row, so each one holds only as
   long as its own interaction needs — the page reads as cinematic beats
   rather than one long locked stretch. */ const STEP_VH = 0.62;
const DEPTH = 3; /* panels rendered behind the active one — depth/context */ 
/* Stack geometry (px). NOTE: the stage's rotateX turns part of each board's
   negative Z into DOWNWARD screen movement, which cancels much of the upward
   offset. UP is therefore sized so the RENDERED gap still exceeds the 46px
   identity strip — that is what keeps text from ever colliding. */ const UP = 74; /* each waiting panel sits this much higher */ 
const RIGHT = 26; /* …and this much further right → diagonal */ 
const BACK = 96; /* …and this much deeper in Z */ 
const TILT = 6; /* rotateX on the stage: the trapezoid read */ 
function Experience() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Experience.useEffect": ()=>{
            const el = root.current;
            if (!el) return;
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", {
                "Experience.useEffect": ()=>{
                    const boards = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].board}`);
                    const navItems = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem}`);
                    const counter = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count}`);
                    const tint = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tint}`);
                    const n = boards.length;
                    let active = -1;
                    el.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deckMode);
                    const setActive = {
                        "Experience.useEffect.setActive": (idx)=>{
                            if (idx === active) return;
                            active = idx;
                            boards.forEach({
                                "Experience.useEffect.setActive": (b, i)=>b.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on, i === idx)
                            }["Experience.useEffect.setActive"]);
                            navItems.forEach({
                                "Experience.useEffect.setActive": (it, i)=>it.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navOn, i === idx)
                            }["Experience.useEffect.setActive"]);
                            if (counter) counter.textContent = `0${idx + 1} / 0${n}`;
                            if (tint) tint.style.background = `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"][idx].color}12`;
                        }
                    }["Experience.useEffect.setActive"];
                    const place = {
                        "Experience.useEffect.place": (p)=>{
                            for(let i = 0; i < n; i++){
                                const d = i - p; /* >0 waiting · 0 active · <0 leaving */ 
                                const b = boards[i];
                                if (d > DEPTH + 0.6 || d < -1.1) {
                                    b.style.visibility = "hidden";
                                    continue;
                                }
                                b.style.visibility = "visible";
                                if (d >= 0) {
                                    /* waiting: up + right + back, progressively compressed */ const k = Math.min(d, DEPTH);
                                    b.style.transform = `translate3d(${(k * RIGHT).toFixed(1)}px, ${(-k * UP).toFixed(1)}px, ${(-k * BACK).toFixed(1)}px)` + ` scale(${(1 - k * 0.028).toFixed(3)})`;
                                    b.style.opacity = String(Math.max(0, 1 - k * 0.16));
                                    b.style.filter = k > 1.2 ? `blur(${Math.min(3, (k - 1.2) * 1.2).toFixed(2)}px)` : "";
                                    b.style.zIndex = String(200 - Math.round(k * 10));
                                } else {
                                    /* leaving: down + back, dissolving */ const t = Math.min(1, -d / 1.1);
                                    b.style.transform = `translate3d(${(-t * 40).toFixed(1)}px, ${(t * 230).toFixed(1)}px, ${(-t * 320).toFixed(1)}px)` + ` scale(${(1 - t * 0.06).toFixed(3)})`;
                                    b.style.opacity = String(Math.max(0, 1 - t * 1.35));
                                    b.style.filter = t > 0.25 ? `blur(${((t - 0.25) * 5).toFixed(2)}px)` : "";
                                    b.style.zIndex = "210";
                                }
                            }
                            setActive(Math.round(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, n - 1, p)));
                        }
                    }["Experience.useEffect.place"];
                    /* ---- scroll → target → interpolation → transforms ---- */ let target = 0;
                    let current = 0;
                    const tick = {
                        "Experience.useEffect.tick": (_t, dt)=>{
                            const f = Math.min(dt / 1000, 0.05);
                            current += (target - current) * Math.min(f * 9, 1);
                            place(current);
                        }
                    }["Experience.useEffect.tick"];
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(tick);
                    place(0);
                    /* the Scene's sticky hold does the pinning; this only reads progress */ const st = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(el),
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                        onUpdate: {
                            "Experience.useEffect.st": (self)=>{
                                target = self.progress * (n - 1);
                            }
                        }["Experience.useEffect.st"]
                    });
                    const jump = {
                        "Experience.useEffect.jump": (idx)=>{
                            const y = st.start + idx / (n - 1) * (st.end - st.start);
                            const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLenis"])();
                            if (lenis) lenis.scrollTo(y, {
                                duration: 1
                            });
                            else window.scrollTo({
                                top: y,
                                behavior: "smooth"
                            });
                        }
                    }["Experience.useEffect.jump"];
                    const handlers = [];
                    [
                        ...boards,
                        ...navItems
                    ].forEach({
                        "Experience.useEffect": (elm, idx)=>{
                            const i = idx % n;
                            const h = {
                                "Experience.useEffect.h": ()=>jump(i)
                            }["Experience.useEffect.h"];
                            elm.addEventListener("click", h);
                            handlers.push([
                                elm,
                                h
                            ]);
                        }
                    }["Experience.useEffect"]);
                    /* very small perspective response to the pointer */ const stage = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage}`);
                    let rx = null;
                    let ry = null;
                    if (stage) {
                        rx = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(stage, "rotationX", {
                            duration: 1,
                            ease: "power3.out"
                        });
                        ry = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(stage, "rotationY", {
                            duration: 1,
                            ease: "power3.out"
                        });
                    }
                    const onMove = {
                        "Experience.useEffect.onMove": (e)=>{
                            const r = el.getBoundingClientRect();
                            const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
                            const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
                            rx?.(TILT - cy * 2.2);
                            ry?.(cx * 2.6);
                        }
                    }["Experience.useEffect.onMove"];
                    el.addEventListener("pointermove", onMove);
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} > *`, {
                        y: 34,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.09,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 72%"
                        }
                    });
                    return ({
                        "Experience.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                            st.kill();
                            el.removeEventListener("pointermove", onMove);
                            handlers.forEach({
                                "Experience.useEffect": ([elm, h])=>elm.removeEventListener("click", h)
                            }["Experience.useEffect"]);
                            el.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deckMode);
                        }
                    })["Experience.useEffect"];
                }
            }["Experience.useEffect"]);
            mm.add("(max-width: 1000px), (prefers-reduced-motion: reduce)", {
                "Experience.useEffect": ()=>{
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].board}`).forEach({
                        "Experience.useEffect": (b)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(b, {
                                y: 40,
                                autoAlpha: 0,
                                duration: 0.85,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger: b,
                                    start: "top 88%"
                                }
                            });
                        }
                    }["Experience.useEffect"]);
                }
            }["Experience.useEffect"]);
            return ({
                "Experience.useEffect": ()=>mm.revert()
            })["Experience.useEffect"];
        }
    }["Experience.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experience,
        id: "experience",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tint,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "05"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            " ",
                            t("exp.eyebrow")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                        children: [
                            t("exp.h2"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                children: t("exp.h2Em")
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                lineNumber: 204,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].board} ${r.fg === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dark : ""} ${i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on : ""}`,
                            style: {
                                background: r.color,
                                zIndex: 200 - i
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].strip,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year,
                                            children: r.period
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].company,
                                            children: r.company
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].type,
                                            children: t(`type.${r.type}`)
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailCol} ${r.logo?.placement === "below" ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoBelow : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentCol,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, r, "role")
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loc,
                                                    children: r.location
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bodyMain,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lbl,
                                                                    children: t("exp.worked")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary,
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, r, "summary")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                                                    children: (lang === "fr" && r.fr?.achievements ? r.fr.achievements : r.achievements).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: a
                                                                        }, a, false, {
                                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                            lineNumber: 246,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bodySide,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lbl,
                                                                    children: t("exp.impact")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outcome,
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, r, "outcome")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lbl} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lblGap}`,
                                                                    children: t("exp.tools")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skills,
                                                                    children: r.skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            children: s
                                                                        }, s, false, {
                                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoCol,
                                            children: r.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][r.logo.variant]}`,
                                                style: r.logo.variant === "plate" ? {
                                                    "--logo-aspect": r.logo.aspect
                                                } : undefined,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: r.logo.src,
                                                    alt: `${r.company} logo`
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, this) : /* no official file supplied yet — typographic stand-in */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mono}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: r.company.split(" ")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                                lineNumber: 283,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, r.company, true, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].foot,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                        children: [
                            "01 / 0",
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        role: "list",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        style: {
                                            background: r.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    r.company
                                ]
                            }, r.company, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hintFoot,
                        children: t("exp.hint")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Experience/Experience.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(Experience, "QeCfe2rdG634JGQWUzKzs9CzsNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ambient": "Hero-module__ihUkaG__ambient",
  "annot": "Hero-module__ihUkaG__annot",
  "arch": "Hero-module__ihUkaG__arch",
  "archLine": "Hero-module__ihUkaG__archLine",
  "chip": "Hero-module__ihUkaG__chip",
  "chipLayer": "Hero-module__ihUkaG__chipLayer",
  "chipWide": "Hero-module__ihUkaG__chipWide",
  "ctas": "Hero-module__ihUkaG__ctas",
  "cue": "Hero-module__ihUkaG__cue",
  "cueArrow": "Hero-module__ihUkaG__cueArrow",
  "glow": "Hero-module__ihUkaG__glow",
  "glowL": "Hero-module__ihUkaG__glowL",
  "glowR": "Hero-module__ihUkaG__glowR",
  "h1": "Hero-module__ihUkaG__h1",
  "head": "Hero-module__ihUkaG__head",
  "hero": "Hero-module__ihUkaG__hero",
  "kicker": "Hero-module__ihUkaG__kicker",
  "labelArrow": "Hero-module__ihUkaG__labelArrow",
  "particle": "Hero-module__ihUkaG__particle",
  "particleAccent": "Hero-module__ihUkaG__particleAccent",
  "play": "Hero-module__ihUkaG__play",
  "plusA": "Hero-module__ihUkaG__plusA",
  "plusB": "Hero-module__ihUkaG__plusB",
  "portrait": "Hero-module__ihUkaG__portrait",
  "red": "Hero-module__ihUkaG__red",
  "ring": "Hero-module__ihUkaG__ring",
  "row": "Hero-module__ihUkaG__row",
  "scrollCue": "Hero-module__ihUkaG__scrollCue",
  "serif": "Hero-module__ihUkaG__serif",
  "side": "Hero-module__ihUkaG__side",
  "sideL": "Hero-module__ihUkaG__sideL",
  "sideR": "Hero-module__ihUkaG__sideR",
  "stackLabel": "Hero-module__ihUkaG__stackLabel",
  "stage": "Hero-module__ihUkaG__stage",
  "stageRow": "Hero-module__ihUkaG__stageRow",
  "statCard": "Hero-module__ihUkaG__statCard",
  "statIcon": "Hero-module__ihUkaG__statIcon",
  "statLabel": "Hero-module__ihUkaG__statLabel",
  "statNum": "Hero-module__ihUkaG__statNum",
  "sub": "Hero-module__ihUkaG__sub",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const STATS_LEFT = [
    {
        n: 1,
        suffix: "",
        key: "stat.degree",
        icon: "/images/icons/projects.png"
    },
    {
        n: 3,
        suffix: "+",
        key: "stat.cadTools",
        icon: "/images/icons/years.png"
    }
];
const STATS_RIGHT = [
    {
        n: 2,
        suffix: "",
        key: "stat.internships",
        icon: "/images/icons/countries.png"
    },
    {
        n: 15,
        suffix: "+",
        key: "stat.certifications",
        icon: "/images/icons/satisfaction.png"
    }
];
/* ambient particles — position (vw/vh %), size px, tone */ const PARTICLES = [
    {
        x: 8,
        y: 26,
        s: 6,
        accent: true
    },
    {
        x: 14,
        y: 62,
        s: 4,
        accent: false
    },
    {
        x: 5,
        y: 78,
        s: 5,
        accent: false
    },
    {
        x: 90,
        y: 22,
        s: 5,
        accent: false
    },
    {
        x: 94,
        y: 58,
        s: 6,
        accent: true
    },
    {
        x: 86,
        y: 82,
        s: 4,
        accent: false
    }
];
function StatCard({ n, suffix, label, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statIcon,
                src: icon,
                alt: "",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNum,
                "data-count": n,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: suffix
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                children: label
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = StatCard;
function Hero() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const el = root.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "Hero.useEffect.ctx": ()=>{
                    /* ---------- Entrance: plays when the hero ARRIVES (revealed by the
         tunnel opening above it), not on page load ---------- */ const tl = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                        /* immediateRender:false is load-bearing here, not a nicety. Every
           tween below is a `.from()`, which by default hides its target the
           moment the timeline is built and only restores it when the trigger
           fires. If that trigger never resolves — which happens when the
           section is held inside a scene — the kicker, sub-copy and BOTH
           CTAs stay invisible forever. This way the hero renders complete
           and the entrance is an enhancement layered on top. */ defaults: {
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                            immediateRender: false
                        },
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            once: true
                        }
                    });
                    tl.from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambient} > *`, {
                        autoAlpha: 0,
                        duration: 1.8,
                        stagger: 0.06,
                        ease: "power1.out"
                    }, 0).from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker}`, {
                        y: 22,
                        autoAlpha: 0,
                        duration: 0.7
                    }, 0.1).from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row}`, {
                        y: 70,
                        autoAlpha: 0,
                        duration: 1.05,
                        stagger: 0.12
                    }, "-=0.45").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub}`, {
                        y: 24,
                        autoAlpha: 0,
                        duration: 0.8
                    }, "-=0.7").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctas} > *`, {
                        y: 18,
                        autoAlpha: 0,
                        duration: 0.6,
                        stagger: 0.08
                    }, "-=0.55").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archLine}`, {
                        scaleY: 0.85,
                        autoAlpha: 0,
                        transformOrigin: "bottom center",
                        duration: 0.9,
                        ease: "power3.out"
                    }, "-=0.5").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arch}`, {
                        scaleY: 0.9,
                        autoAlpha: 0,
                        transformOrigin: "bottom center",
                        duration: 1.0,
                        ease: "power3.out"
                    }, "<0.08").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portrait}`, {
                        y: 110,
                        autoAlpha: 0,
                        duration: 1.15,
                        ease: "power3.out"
                    }, "-=0.75").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard}`, {
                        y: 40,
                        autoAlpha: 0,
                        duration: 0.85,
                        stagger: 0.09,
                        ease: "back.out(1.3)"
                    }, "-=0.75").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollCue}`, {
                        y: 16,
                        autoAlpha: 0,
                        duration: 0.7
                    }, "-=0.6");
                    /* stat count-up — synced to the entrance timeline, not page load */ tl.call({
                        "Hero.useEffect.ctx": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNum}`).forEach({
                                "Hero.useEffect.ctx": (numEl)=>{
                                    const target = Number(numEl.dataset.count || 0);
                                    const obj = {
                                        v: 0
                                    };
                                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(obj, {
                                        v: target,
                                        duration: 1.3,
                                        ease: "power2.out",
                                        onUpdate: {
                                            "Hero.useEffect.ctx": ()=>{
                                                numEl.firstChild.textContent = String(Math.round(obj.v));
                                            }
                                        }["Hero.useEffect.ctx"]
                                    });
                                }
                            }["Hero.useEffect.ctx"]);
                        }
                    }["Hero.useEffect.ctx"], [], "-=0.9");
                    /* ---------- Idle life ---------- */ __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particle}`).forEach({
                        "Hero.useEffect.ctx": (p)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(p, {
                                y: `+=${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.random(-18, 18)}`,
                                x: `+=${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.random(-10, 10)}`,
                                duration: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.random(4, 7),
                                yoyo: true,
                                repeat: -1,
                                ease: "sine.inOut",
                                delay: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.random(0, 2)
                            });
                        }
                    }["Hero.useEffect.ctx"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow}`).forEach({
                        "Hero.useEffect.ctx": (g, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(g, {
                                opacity: 0.55,
                                duration: 5.5,
                                yoyo: true,
                                repeat: -1,
                                ease: "sine.inOut",
                                delay: i * 2
                            });
                        }
                    }["Hero.useEffect.ctx"]);
                    /* ---------- Mouse: layered parallax + a breath of portrait tilt ---------- */ const layers = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray("[data-depth]");
                    const setters = layers.map({
                        "Hero.useEffect.ctx.setters": (layer)=>({
                                depth: Number(layer.dataset.depth),
                                x: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(layer, "x", {
                                    duration: 1.1,
                                    ease: "power3.out"
                                }),
                                y: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(layer, "y", {
                                    duration: 1.1,
                                    ease: "power3.out"
                                })
                            })
                    }["Hero.useEffect.ctx.setters"]);
                    const portraitEl = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portrait}`);
                    const tilt = portraitEl ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(portraitEl, "rotation", {
                        duration: 1.4,
                        ease: "power3.out"
                    }) : null;
                    const onMove = {
                        "Hero.useEffect.ctx.onMove": (e)=>{
                            const cx = (e.clientX / window.innerWidth - 0.5) * 2;
                            const cy = (e.clientY / window.innerHeight - 0.5) * 2;
                            setters.forEach({
                                "Hero.useEffect.ctx.onMove": (s)=>{
                                    s.x(cx * s.depth * 80);
                                    s.y(cy * s.depth * 44);
                                }
                            }["Hero.useEffect.ctx.onMove"]);
                            tilt?.(cx * 1.2);
                        }
                    }["Hero.useEffect.ctx.onMove"];
                    window.addEventListener("mousemove", onMove);
                    /* ---------- Scroll: gentle layered exit ---------- */ __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: el,
                            start: "top top",
                            end: "bottom top",
                            scrub: true
                        }
                    }).to(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head}`, {
                        y: -60,
                        autoAlpha: 0.2
                    }, 0).to(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arch}`, {
                        y: 50
                    }, 0).to([
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideL}`,
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideR}`
                    ], {
                        y: -34
                    }, 0).to(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambient}`, {
                        autoAlpha: 0
                    }, 0);
                    return ({
                        "Hero.useEffect.ctx": ()=>window.removeEventListener("mousemove", onMove)
                    })["Hero.useEffect.ctx"];
                }
            }["Hero.useEffect.ctx"], el);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        id: "home",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambient,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowL}`,
                        "data-depth": "0.012"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowR}`,
                        "data-depth": "0.016"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ring,
                        "data-depth": "0.02"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].plusA,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].plusB,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    PARTICLES.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particle} ${p.accent ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particleAccent : ""}`,
                            style: {
                                left: `${p.x}%`,
                                top: `${p.y}%`,
                                width: p.s,
                                height: p.s
                            }
                        }, i, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
                "data-depth": "0.01",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                        children: t("hero.kicker")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                                children: [
                                    t("hero.h1a"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                        children: t("hero.h1aEm")
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                                children: [
                                    t("hero.h1b"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].red}`,
                                        children: t("hero.h1bEm")
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
                        children: t("hero.sub")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctas,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#work",
                                variant: "primary",
                                arrow: true,
                                children: t("hero.cta1")
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#about",
                                variant: "ghost",
                                lead: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].play,
                                    children: "▶"
                                }, void 0, false, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                    lineNumber: 204,
                                    columnNumber: 55
                                }, this),
                                children: t("hero.cta2")
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].side} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideL}`,
                        children: STATS_LEFT.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                n: s.n,
                                suffix: s.suffix,
                                icon: s.icon,
                                label: t(s.key)
                            }, s.key, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archLine,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arch,
                                "data-depth": "0.02",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portrait,
                                src: "/images/mechanical-placeholder.svg",
                                alt: "Parlapati Hareesh Kumar — Mechanical Designer",
                                width: 554,
                                height: 573,
                                priority: true,
                                "data-depth": "0.03"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].side} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideR}`,
                        children: STATS_RIGHT.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                n: s.n,
                                suffix: s.suffix,
                                icon: s.icon,
                                label: t(s.key)
                            }, s.key, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollCue,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t("hero.scroll")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cueArrow,
                        "aria-hidden": "true",
                        children: "↓"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Hero/Hero.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s(Hero, "Iqs25n8ECfHKcQdsdD6kwktUfVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvas": "TunnelIntro-module__gQumpa__canvas",
  "fallback": "TunnelIntro-module__gQumpa__fallback",
  "frame": "TunnelIntro-module__gQumpa__frame",
  "hint": "TunnelIntro-module__gQumpa__hint",
  "hintPulse": "TunnelIntro-module__gQumpa__hintPulse",
  "intro": "TunnelIntro-module__gQumpa__intro",
  "progFill": "TunnelIntro-module__gQumpa__progFill",
  "progLine": "TunnelIntro-module__gQumpa__progLine",
  "progress": "TunnelIntro-module__gQumpa__progress",
  "srOnly": "TunnelIntro-module__gQumpa__srOnly",
  "stageNow": "TunnelIntro-module__gQumpa__stageNow",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TunnelIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * SECTION 01 — THE OPENING. The live Three.js Gallery Tunnel seen through
 * "HAREESH", stretched into a ~5.5-viewport cinematic journey that hands
 * over to the real Hero.
 *
 * Journey design:
 *   · The section pins; pin progress maps to tunnel travel through an
 *     ease-in curve (p^1.35) — the deeper you go, the faster panels pass.
 *   · Motion is double-smoothed for physicality: scrub smoothing feeds a
 *     travel-lerp, which feeds the reference's camera-chase lerp. Slow
 *     scrolling drifts; hard flicks accelerate; nothing ever snaps.
 *   · A slow idle drift keeps the world alive before the first scroll.
 *   · THE TRANSITION (final ~22%): background and fog lerp to white while
 *     the fog wall closes in — the world compresses into brightness, the
 *     typography dissolves into the page (inside becomes white like the
 *     outside), the canvas releases, the nav arrives, and the Hero rises.
 *   · Nav is hidden while the journey runs (body class, see Nav.module.css).
 *   · Mobile: reduced grid, fewer segments, tighter DPR cap.
 *   · Reduced motion: a single static masked frame, no pin.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ---------- tunnel constants (from the supplied implementation) ---------- */ const TUNNEL_WIDTH = 2;
const TUNNEL_HEIGHT = 1.8;
const SEGMENT_DEPTH = 1;
const LINE_RADIUS = 0.003;
const SCROLL_TO_Z = 0.05;
const CAMERA_CHASE = 0.1;
const FADE_IN = 1;
const BACKGROUND = "#0a0a0c";
const LINE_COLOR = "#9a9aa0";
const COLORS = [
    "#FF6A00",
    "#AB54F7",
    "#FF2E0F",
    "#0072E3",
    "#00AA3C",
    "#FFB200"
];
const IMAGES = [
    "/images/mechanical-placeholder.svg"
];
/* ---------- journey design ---------- */ const JOURNEY_VIEWPORTS = 5.5; /* pinned scroll length */ 
const STAGES = 6; /* progress rail: 01 … 06 */ 
const TRAVEL_UNITS = 1050; /* total tunnel travel across the journey */ 
const TRAVEL_CURVE = 1.35; /* ease-in: the journey accelerates toward its climax */ 
const IDLE_DRIFT = 5; /* travel units/s while resting — the world never freezes */ 
const T_START = 0.78; /* transition begins (brighten) */ 
const T_RELEASE = 0.9; /* canvas begins to release (fade) */ 
const MOUSE_X = 0.11;
const MOUSE_Y = 0.07;
function TunnelIntro({ text = "HAREESH" }) {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [webglOk, setWebglOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TunnelIntro.useEffect": ()=>{
            const rootEl = rootRef.current;
            const frame = frameRef.current;
            const canvas = canvasRef.current;
            if (!rootEl || !frame || !canvas) return;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            /* same boundary as the rest of the site — a landscape phone must not get
       the desktop tunnel density */ const compact = window.matchMedia("(max-width: 1000px), (hover: none) and (pointer: coarse)").matches;
            /* mobile density reduction */ const GRID = compact ? 3 : 4;
            const NUM_SEGMENTS = compact ? 11 : 15;
            const FOG_FAR = NUM_SEGMENTS * SEGMENT_DEPTH * 0.95;
            const DPR_CAP = compact ? 1.5 : 2;
            /* ================= renderer / scene ================= */ let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                });
            } catch  {
                setWebglOk(false);
                document.body.classList.remove("intro-active");
                return;
            }
            renderer.setPixelRatio(Math.min(DPR_CAP, window.devicePixelRatio || 1));
            const bgColor = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](BACKGROUND);
            const white = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffffff");
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.background = bgColor.clone();
            const fog = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"](bgColor.clone(), 0.01, FOG_FAR);
            scene.fog = fog;
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, 1, 0.1, 1000);
            camera.position.set(0, 0, 0);
            const lineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](LINE_COLOR),
                transparent: true,
                opacity: 0.5
            });
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            loader.setCrossOrigin("anonymous");
            const fading = [];
            let alive = true;
            const colorMats = COLORS.map({
                "TunnelIntro.useEffect.colorMats": (hex)=>new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](hex),
                        side: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    })
            }["TunnelIntro.useEffect.colorMats"]);
            const imageMats = IMAGES.map({
                "TunnelIntro.useEffect.imageMats": (url)=>{
                    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        transparent: true,
                        opacity: 0,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    });
                    loader.load(url, {
                        "TunnelIntro.useEffect.imageMats": (tex)=>{
                            if (!alive) {
                                tex.dispose();
                                return;
                            }
                            tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
                            tex.generateMipmaps = false;
                            tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                            mat.map = tex;
                            mat.needsUpdate = true;
                            fading.push(mat);
                        }
                    }["TunnelIntro.useEffect.imageMats"], undefined, {
                        "TunnelIntro.useEffect.imageMats": ()=>{}
                    }["TunnelIntro.useEffect.imageMats"]);
                    return mat;
                }
            }["TunnelIntro.useEffect.imageMats"]);
            /* ================= geometry ================= */ const hw = TUNNEL_WIDTH / 2;
            const hh = TUNNEL_HEIGHT / 2;
            const colW = TUNNEL_WIDTH / GRID;
            const rowH = TUNNEL_HEIGHT / GRID;
            const geoFloor = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](colW, SEGMENT_DEPTH);
            const geoWall = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](SEGMENT_DEPTH, rowH);
            const geoTubeZ = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -SEGMENT_DEPTH)), 1, LINE_RADIUS, 8);
            const geoTubeX = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](TUNNEL_WIDTH, 0, 0)), 1, LINE_RADIUS, 8);
            const geoTubeY = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, TUNNEL_HEIGHT, 0)), 1, LINE_RADIUS, 8);
            const tube = {
                "TunnelIntro.useEffect.tube": (geo, x, y, z = 0)=>{
                    const m = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, lineMaterial);
                    m.position.set(x, y, z);
                    return m;
                }
            }["TunnelIntro.useEffect.tube"];
            const SLOTS = [];
            {
                const z = -SEGMENT_DEPTH / 2;
                for(let i = 0; i < GRID; i++){
                    const x = -hw + i * colW + colW / 2;
                    SLOTS.push({
                        geo: geoFloor,
                        pos: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, -hh, z),
                        rot: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](-Math.PI / 2, 0, 0)
                    });
                    SLOTS.push({
                        geo: geoFloor,
                        pos: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, hh, z),
                        rot: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](Math.PI / 2, 0, 0)
                    });
                }
                for(let i = 0; i < GRID; i++){
                    const y = -hh + i * rowH + rowH / 2;
                    SLOTS.push({
                        geo: geoWall,
                        pos: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-hw, y, z),
                        rot: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](0, Math.PI / 2, 0)
                    });
                    SLOTS.push({
                        geo: geoWall,
                        pos: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](hw, y, z),
                        rot: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](0, -Math.PI / 2, 0)
                    });
                }
            }
            let imageIndex = 0;
            let colorIndex = 0;
            let populateIndex = 0;
            function populate(group) {
                const takesSlabs = populateIndex % 2 === 0;
                populateIndex++;
                const slabs = group.userData.slabs;
                for (const slab of slabs){
                    if (!takesSlabs || Math.random() > 0.5) {
                        slab.visible = false;
                        continue;
                    }
                    slab.visible = true;
                    if (Math.random() > 0.5) {
                        slab.material = colorMats[5 * colorIndex % colorMats.length];
                        colorIndex++;
                    } else {
                        slab.material = imageMats[3 * imageIndex % imageMats.length];
                        imageIndex++;
                    }
                }
            }
            function createSegment(z) {
                const group = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                group.position.z = z;
                for(let i = 0; i <= GRID; i++){
                    const x = -hw + i * colW;
                    group.add(tube(geoTubeZ, x, -hh));
                    group.add(tube(geoTubeZ, x, hh));
                }
                for(let i = 1; i < GRID; i++){
                    const y = -hh + i * rowH;
                    group.add(tube(geoTubeZ, -hw, y));
                    group.add(tube(geoTubeZ, hw, y));
                }
                group.add(tube(geoTubeX, -hw, -hh));
                group.add(tube(geoTubeX, -hw, hh));
                group.add(tube(geoTubeY, -hw, -hh));
                group.add(tube(geoTubeY, hw, -hh));
                const slabs = SLOTS.map({
                    "TunnelIntro.useEffect.createSegment.slabs": (slot)=>{
                        const m = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](slot.geo, colorMats[0]);
                        m.position.copy(slot.pos);
                        m.rotation.copy(slot.rot);
                        m.visible = false;
                        group.add(m);
                        return m;
                    }
                }["TunnelIntro.useEffect.createSegment.slabs"]);
                group.userData.slabs = slabs;
                populate(group);
                return group;
            }
            const segments = [];
            for(let i = 0; i < NUM_SEGMENTS; i++){
                const g = createSegment(-i * SEGMENT_DEPTH);
                scene.add(g);
                segments.push(g);
            }
            /* ================= typography mask ================= */ const buildMask = {
                "TunnelIntro.useEffect.buildMask": ()=>{
                    const w = Math.max(1, frame.clientWidth);
                    const h = Math.max(1, frame.clientHeight);
                    const dpr = Math.min(2, window.devicePixelRatio || 1);
                    const m = document.createElement("canvas");
                    m.width = Math.floor(w * dpr);
                    m.height = Math.floor(h * dpr);
                    const ctx = m.getContext("2d");
                    if (!ctx) return;
                    ctx.scale(dpr, dpr);
                    const family = getComputedStyle(document.body).fontFamily || "Inter, sans-serif";
                    let size = h * 0.62;
                    ctx.font = `900 ${size}px ${family}`;
                    if ("letterSpacing" in ctx) {
                        ctx.letterSpacing = "-0.04em";
                    }
                    const measured = ctx.measureText(text).width;
                    size = Math.min(size, size * (w * 0.94) / Math.max(1, measured));
                    ctx.font = `900 ${size}px ${family}`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#000";
                    ctx.fillText(text, w / 2, h / 2 + size * 0.02);
                    const url = m.toDataURL("image/png");
                    canvas.style.maskImage = `url(${url})`;
                    canvas.style.maskSize = "100% 100%";
                    canvas.style.maskRepeat = "no-repeat";
                    canvas.style.setProperty("-webkit-mask-image", `url(${url})`);
                    canvas.style.setProperty("-webkit-mask-size", "100% 100%");
                    canvas.style.setProperty("-webkit-mask-repeat", "no-repeat");
                }
            }["TunnelIntro.useEffect.buildMask"];
            const resize = {
                "TunnelIntro.useEffect.resize": ()=>{
                    const w = Math.max(1, frame.clientWidth);
                    const h = Math.max(1, frame.clientHeight);
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h, false);
                    buildMask();
                    if (reduced) renderer.render(scene, camera);
                }
            }["TunnelIntro.useEffect.resize"];
            const ro = new ResizeObserver(resize);
            ro.observe(frame);
            resize();
            document.fonts?.ready?.then({
                "TunnelIntro.useEffect": ()=>{
                    if (alive) buildMask();
                }
            }["TunnelIntro.useEffect"]);
            /* ================= reduced motion: one static frame, no pin ================= */ if (reduced) {
                renderer.render(scene, camera);
                document.body.classList.remove("intro-active");
                return ({
                    "TunnelIntro.useEffect": ()=>{
                        alive = false;
                        ro.disconnect();
                        renderer.dispose();
                    }
                })["TunnelIntro.useEffect"];
            }
            /* ================= journey state ================= */ document.body.classList.add("intro-active");
            let progress = 0; /* pin progress, scrub-smoothed by ScrollTrigger */ 
            let scrollPos = 0; /* travel, lerped toward target — the inertia layer */ 
            let idle = 0;
            let mx = 0;
            let my = 0;
            const stageEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageNow}`);
            const fillEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progFill}`);
            const progressWrap = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress}`);
            const hintEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint}`);
            let stageShown = 1;
            const onPointerMove = {
                "TunnelIntro.useEffect.onPointerMove": (e)=>{
                    const r = frame.getBoundingClientRect();
                    mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
                    my = ((e.clientY - r.top) / r.height - 0.5) * 2;
                }
            }["TunnelIntro.useEffect.onPointerMove"];
            const onPointerLeave = {
                "TunnelIntro.useEffect.onPointerLeave": ()=>{
                    mx = 0;
                    my = 0;
                }
            }["TunnelIntro.useEffect.onPointerLeave"];
            frame.addEventListener("pointermove", onPointerMove);
            frame.addEventListener("pointerleave", onPointerLeave);
            /* ================= render loop ================= */ let raf = 0;
            let last = 0;
            let running = false;
            const animate = {
                "TunnelIntro.useEffect.animate": (now)=>{
                    if (!alive || !running) return;
                    raf = requestAnimationFrame(animate);
                    const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
                    last = now;
                    /* travel: eased journey mapping + idle drift, then the inertia lerp */ idle += IDLE_DRIFT * dt;
                    const target = Math.pow(progress, TRAVEL_CURVE) * TRAVEL_UNITS + idle;
                    scrollPos += (target - scrollPos) * 0.07;
                    const want = -SCROLL_TO_Z * scrollPos;
                    camera.position.z += CAMERA_CHASE * (want - camera.position.z);
                    camera.position.x += (mx * MOUSE_X - camera.position.x) * 0.06;
                    camera.position.y += (-my * MOUSE_Y - camera.position.y) * 0.06;
                    /* infinite segment recycling */ const span = NUM_SEGMENTS * SEGMENT_DEPTH;
                    const z = camera.position.z;
                    for (const seg of segments){
                        if (seg.position.z > z + SEGMENT_DEPTH) {
                            let min = 0;
                            for (const s of segments)min = Math.min(min, s.position.z);
                            seg.position.z = min - SEGMENT_DEPTH;
                            populate(seg);
                        } else if (seg.position.z < z - span - SEGMENT_DEPTH) {
                            let max = -999999;
                            for (const s of segments)max = Math.max(max, s.position.z);
                            seg.position.z = max + SEGMENT_DEPTH;
                            populate(seg);
                        }
                    }
                    for(let i = fading.length - 1; i >= 0; i--){
                        const m = fading[i];
                        m.opacity = Math.min(1, m.opacity + dt / FADE_IN);
                        if (m.opacity >= 1) fading.splice(i, 1);
                    }
                    /* ---- THE TRANSITION: world compresses into white ---- */ const k = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, (progress - T_START) / (1 - T_START));
                    if (k > 0) {
                        const eased = k * k * (3 - 2 * k);
                        scene.background.copy(bgColor).lerp(white, eased);
                        fog.color.copy(bgColor).lerp(white, eased);
                        fog.far = FOG_FAR - (FOG_FAR - 2.2) * eased; /* depth reduces */ 
                        lineMaterial.opacity = 0.5 * (1 - eased);
                    } else {
                        scene.background.copy(bgColor);
                        fog.color.copy(bgColor);
                        fog.far = FOG_FAR;
                        lineMaterial.opacity = 0.5;
                    }
                    /* canvas releases at the very end — white page remains */ const rel = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, (progress - T_RELEASE) / (1 - T_RELEASE));
                    canvas.style.opacity = String(1 - rel);
                    if (progressWrap) progressWrap.style.opacity = String(1 - rel);
                    if (hintEl) hintEl.style.opacity = String(Math.max(0, 1 - progress * 6) * (1 - rel));
                    renderer.render(scene, camera);
                }
            }["TunnelIntro.useEffect.animate"];
            const startLoop = {
                "TunnelIntro.useEffect.startLoop": ()=>{
                    if (running) return;
                    running = true;
                    last = 0;
                    raf = requestAnimationFrame(animate);
                }
            }["TunnelIntro.useEffect.startLoop"];
            const stopLoop = {
                "TunnelIntro.useEffect.stopLoop": ()=>{
                    running = false;
                    cancelAnimationFrame(raf);
                }
            }["TunnelIntro.useEffect.stopLoop"];
            startLoop();
            /* ================= the journey, held by its Scene =================
       The Scene's sticky hold pins this section, so no `pin` here — this
       trigger only reads progress across the scene's runway. */ const st = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(rootEl),
                scrub: 0.6,
                invalidateOnRefresh: true,
                onUpdate: {
                    "TunnelIntro.useEffect.st": (self)=>{
                        progress = self.progress;
                        /* nav returns as the hero arrives */ document.body.classList.toggle("intro-active", self.progress < 0.94);
                        /* progress rail */ const stage = Math.min(STAGES, 1 + Math.floor(self.progress * STAGES));
                        if (stage !== stageShown && stageEl) {
                            stageShown = stage;
                            stageEl.textContent = `0${stage}`;
                        }
                        if (fillEl) fillEl.style.transform = `scaleX(${self.progress.toFixed(4)})`;
                    }
                }["TunnelIntro.useEffect.st"],
                onLeave: {
                    "TunnelIntro.useEffect.st": ()=>{
                        document.body.classList.remove("intro-active");
                        stopLoop();
                    }
                }["TunnelIntro.useEffect.st"],
                onEnterBack: {
                    "TunnelIntro.useEffect.st": ()=>{
                        startLoop();
                    }
                }["TunnelIntro.useEffect.st"]
            });
            return ({
                "TunnelIntro.useEffect": ()=>{
                    alive = false;
                    stopLoop();
                    st.kill();
                    ro.disconnect();
                    frame.removeEventListener("pointermove", onPointerMove);
                    frame.removeEventListener("pointerleave", onPointerLeave);
                    document.body.classList.remove("intro-active");
                    geoFloor.dispose();
                    geoWall.dispose();
                    geoTubeZ.dispose();
                    geoTubeX.dispose();
                    geoTubeY.dispose();
                    for (const m of colorMats)m.dispose();
                    for (const m of imageMats){
                        m.map?.dispose();
                        m.dispose();
                    }
                    lineMaterial.dispose();
                    renderer.dispose();
                }
            })["TunnelIntro.useEffect"];
        }
    }["TunnelIntro.useEffect"], [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].intro,
        id: "intro",
        ref: rootRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].frame,
            ref: frameRef,
            children: [
                webglOk ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 477,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallback,
                    children: text
                }, void 0, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 479,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                    children: [
                        text,
                        " — Mechanical Designer"
                    ]
                }, void 0, true, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 481,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                    "aria-hidden": "true",
                    children: t("intro.scroll")
                }, void 0, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 483,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageNow,
                            children: "01"
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progLine,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progFill
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                                lineNumber: 491,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "0",
                                STAGES
                            ]
                        }, void 0, true, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 488,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
            lineNumber: 475,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Intro/TunnelIntro.tsx",
        lineNumber: 474,
        columnNumber: 5
    }, this);
}
_s(TunnelIntro, "FP6fqJU6kqgiMqqck0uqfLmPTBo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = TunnelIntro;
var _c;
__turbopack_context__.k.register(_c, "TunnelIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvas": "LightJourney-module__hdrePW__canvas",
  "chBridge": "LightJourney-module__hdrePW__chBridge",
  "chPlace": "LightJourney-module__hdrePW__chPlace",
  "chStory": "LightJourney-module__hdrePW__chStory",
  "chTitle": "LightJourney-module__hdrePW__chTitle",
  "chYear": "LightJourney-module__hdrePW__chYear",
  "chapter": "LightJourney-module__hdrePW__chapter",
  "counter": "LightJourney-module__hdrePW__counter",
  "counterNow": "LightJourney-module__hdrePW__counterNow",
  "frame": "LightJourney-module__hdrePW__frame",
  "frameStatic": "LightJourney-module__hdrePW__frameStatic",
  "intro": "LightJourney-module__hdrePW__intro",
  "introHint": "LightJourney-module__hdrePW__introHint",
  "introLabel": "LightJourney-module__hdrePW__introLabel",
  "introLede": "LightJourney-module__hdrePW__introLede",
  "journey": "LightJourney-module__hdrePW__journey",
  "on": "LightJourney-module__hdrePW__on",
  "overlay": "LightJourney-module__hdrePW__overlay",
  "rail": "LightJourney-module__hdrePW__rail",
  "scrim": "LightJourney-module__hdrePW__scrim",
  "srOnly": "LightJourney-module__hdrePW__srOnly",
  "staticBridge": "LightJourney-module__hdrePW__staticBridge",
  "staticLede": "LightJourney-module__hdrePW__staticLede",
  "staticPlace": "LightJourney-module__hdrePW__staticPlace",
  "staticStory": "LightJourney-module__hdrePW__staticStory",
  "staticYear": "LightJourney-module__hdrePW__staticYear",
  "tick": "LightJourney-module__hdrePW__tick",
  "tickOn": "LightJourney-module__hdrePW__tickOn",
  "ticks": "LightJourney-module__hdrePW__ticks",
  "whiteout": "LightJourney-module__hdrePW__whiteout",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LightJourney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * THE JOURNEY v2 — light-cable tunnel (LightTunnel as the concept reference;
 * engine built from scratch to its parameter language: cables, pulses,
 * waviness, sway, glow, fade near/far, color variance, mouse influence).
 *
 * · 20 wavy light cables (10 on mobile) converge toward a vanishing point;
 *   additive-blended shader pulses travel outward along them — energy
 *   moving through a living system, with direction, depth and falloff.
 * · SCROLL IS THE JOURNEY: the section pins for ~4 viewports. Scroll
 *   progress (not just velocity) drives travel, pulse energy and the color
 *   progression — blue → orange → coral → purple → green — so the journey
 *   has a beginning, middle and climax. Velocity feel comes free from the
 *   double smoothing (scrub → travel-lerp): flick fast and the tunnel
 *   surges, then settles. Touch uses native scrolling.
 * · The pointer leans the camera and sways the tunnel — atmospheric, ±0.06.
 * · THE EXIT: light intensity peaks, then the cables dissolve as white
 *   returns and the next section arrives — the same compression-into-white
 *   grammar as the opening tunnel.
 * · Minimal chapter labels sit over the depth; the full story stays in
 *   screen-reader text. prefers-reduced-motion gets a calm static frame.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/content/journey.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* palette progression across the journey */ const PALETTE = [
    "#0072E3",
    "#FF6A00",
    "#FF2E0F",
    "#AB54F7",
    "#00AA3C"
];
/* One viewport of scroll per chapter, so a chapter can actually be read
   before the tunnel moves on. */ const JOURNEY_VIEWPORTS = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].length;
const DEPTH = 30;
const RADIUS = 1.12;
const WAVINESS = 0.3;
const TRAVEL_TOTAL = 26; /* pulse-phase travel across the journey */ 
const T_EXIT = 0.9; /* white return begins */ 
/* Chapters live inside this slice of the pin: the head is the section
   title settling, the tail is the last chapter holding before the whiteout
   takes over. Text is never asked to compete with the dissolve. */ const CH_START = 0.06;
const CH_END = 0.86;
const CH_SPAN = (CH_END - CH_START) / __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].length;
const VERT = /* glsl */ `
  varying float vT;
  varying float vZ;
  void main() {
    vT = uv.x;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vZ = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;
const FRAG = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTravel;
  uniform float uPhase;
  uniform float uEnergy;
  uniform float uMaster;
  varying float vT;
  varying float vZ;
  void main() {
    /* rim base + a pulse with a decaying tail, travelling outward */
    float p = fract(vT * 3.0 - uTravel * 0.14 + uPhase);
    float pulse = smoothstep(0.30, 0.0, p) * (1.1 + uEnergy * 1.6);
    float b = 0.20 + pulse;
    /* depth: fade in just past the camera, fade out into the far dark */
    float a = smoothstep(0.6, 2.4, vZ) * (1.0 - smoothstep(16.0, 27.0, vZ));
    vec3 c = uColor * b;
    gl_FragColor = vec4(c, 1.0) * a * uMaster;
  }
`;
function LightJourney() {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [webglOk, setWebglOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    /* reduced motion (or no WebGL) drops the pin entirely, so the chapters
     have to be readable as a plain stack — content is never motion-gated */ const [staticMode, setStaticMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightJourney.useEffect": ()=>{
            const rootEl = rootRef.current;
            const frame = frameRef.current;
            const canvas = canvasRef.current;
            if (!rootEl || !frame || !canvas) return;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduced) setStaticMode(true);
            /* Aligned to the site's real mobile boundary (1000px) and to coarse
       pointers. At 700px a landscape phone or an 8-inch tablet fell through
       to the desktop tier: 20 antialiased cables at DPR 2 in a continuous
       loop across a six-viewport hold. */ const compact = window.matchMedia("(max-width: 1000px), (hover: none) and (pointer: coarse)").matches;
            const CABLES = compact ? 10 : 20;
            const DPR_CAP = compact ? 1.5 : 2;
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                });
            } catch  {
                setWebglOk(false);
                return;
            }
            renderer.setPixelRatio(Math.min(DPR_CAP, window.devicePixelRatio || 1));
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#0a0a0c");
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, 1, 0.1, 100);
            camera.position.set(0, 0, 0);
            const group = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            scene.add(group);
            const paletteC = PALETTE.map({
                "LightJourney.useEffect.paletteC": (h)=>new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](h)
            }["LightJourney.useEffect.paletteC"]);
            const cables = [];
            const geoms = [];
            for(let i = 0; i < CABLES; i++){
                const angle = i / CABLES * Math.PI * 2 + (Math.random() - 0.5) * 0.18;
                const rBase = RADIUS * (0.86 + Math.random() * 0.34);
                const wPhase = Math.random() * Math.PI * 2;
                const wFreq = 1.6 + Math.random() * 1.6;
                const pts = [];
                const STEPS = 26;
                for(let s = 0; s <= STEPS; s++){
                    const t = s / STEPS;
                    const z = 1.4 - t * (DEPTH + 1.4);
                    const wob = Math.sin(t * wFreq * Math.PI * 2 + wPhase) * WAVINESS * (0.25 + t);
                    const r = rBase + wob * 0.4;
                    const a = angle + wob * 0.22;
                    pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(a) * r, Math.sin(a) * r * 0.82, z));
                }
                const curve = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](pts);
                const geo = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, compact ? 48 : 72, 0.016, 5, false);
                geoms.push(geo);
                const baseColor = paletteC[i % paletteC.length].clone();
                const mat = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                    vertexShader: VERT,
                    fragmentShader: FRAG,
                    uniforms: {
                        uColor: {
                            value: baseColor.clone()
                        },
                        uTravel: {
                            value: 0
                        },
                        uPhase: {
                            value: Math.random()
                        },
                        uEnergy: {
                            value: 0.3
                        },
                        uMaster: {
                            value: 1
                        }
                    },
                    transparent: true,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                    depthWrite: false
                });
                group.add(new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mat));
                cables.push({
                    mat,
                    baseColor,
                    tmp: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]()
                });
            }
            /* soft core at the vanishing point — the infinite end of the tunnel */ const coreCanvas = document.createElement("canvas");
            coreCanvas.width = coreCanvas.height = 128;
            const cctx = coreCanvas.getContext("2d");
            const grad = cctx.createRadialGradient(64, 64, 0, 64, 64, 64);
            grad.addColorStop(0, "rgba(255,255,255,0.9)");
            grad.addColorStop(0.35, "rgba(255,255,255,0.28)");
            grad.addColorStop(1, "rgba(255,255,255,0)");
            cctx.fillStyle = grad;
            cctx.fillRect(0, 0, 128, 128);
            const coreTex = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](coreCanvas);
            const coreMat = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                map: coreTex,
                color: new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE[0]),
                transparent: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false,
                opacity: 0.85
            });
            const core = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sprite"](coreMat);
            core.position.set(0, 0, -DEPTH + 4);
            core.scale.setScalar(7);
            scene.add(core);
            /* ---------- sizing ---------- */ const resize = {
                "LightJourney.useEffect.resize": ()=>{
                    const w = Math.max(1, frame.clientWidth);
                    const h = Math.max(1, frame.clientHeight);
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h, false);
                    if (reduced) renderer.render(scene, camera);
                }
            }["LightJourney.useEffect.resize"];
            const ro = new ResizeObserver(resize);
            ro.observe(frame);
            resize();
            /* ---------- color mixing per progress ---------- */ const mixed = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
            const applyColors = {
                "LightJourney.useEffect.applyColors": (p)=>{
                    const x = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, PALETTE.length - 1.001, p * (PALETTE.length - 1));
                    const i0 = Math.floor(x);
                    const f = x - i0;
                    mixed.copy(paletteC[i0]).lerp(paletteC[i0 + 1], f);
                    for (const c of cables){
                        /* controlled variance: 72% progression color, 28% the cable's own hue */ c.mat.uniforms.uColor.value.copy(mixed).lerp(c.baseColor, 0.28);
                    }
                    coreMat.color.copy(mixed);
                }
            }["LightJourney.useEffect.applyColors"];
            applyColors(0);
            /* ---------- reduced motion: calm static frame ---------- */ if (reduced) {
                for (const c of cables)c.mat.uniforms.uTravel.value = 0.6;
                applyColors(0.4);
                renderer.render(scene, camera);
                return ({
                    "LightJourney.useEffect": ()=>{
                        ro.disconnect();
                        geoms.forEach({
                            "LightJourney.useEffect": (g)=>g.dispose()
                        }["LightJourney.useEffect"]);
                        cables.forEach({
                            "LightJourney.useEffect": (c)=>c.mat.dispose()
                        }["LightJourney.useEffect"]);
                        coreTex.dispose();
                        coreMat.dispose();
                        renderer.dispose();
                    }
                })["LightJourney.useEffect"];
            }
            /* ---------- journey state ---------- */ let progress = 0;
            let travel = 0;
            let idle = 0;
            let mx = 0;
            let my = 0;
            const chapterEls = Array.from(rootEl.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chapter}`));
            const tickEls = Array.from(rootEl.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tick}`));
            const introEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].intro}`);
            const counterEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counterNow}`);
            const narrative = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay}`);
            const whiteout = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whiteout}`);
            let shown = -1;
            const onPointerMove = {
                "LightJourney.useEffect.onPointerMove": (e)=>{
                    const r = frame.getBoundingClientRect();
                    mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
                    my = ((e.clientY - r.top) / r.height - 0.5) * 2;
                }
            }["LightJourney.useEffect.onPointerMove"];
            const onPointerLeave = {
                "LightJourney.useEffect.onPointerLeave": ()=>{
                    mx = 0;
                    my = 0;
                }
            }["LightJourney.useEffect.onPointerLeave"];
            frame.addEventListener("pointermove", onPointerMove);
            frame.addEventListener("pointerleave", onPointerLeave);
            let raf = 0;
            let last = 0;
            let running = false;
            const animate = {
                "LightJourney.useEffect.animate": (now)=>{
                    if (!running) return;
                    raf = requestAnimationFrame(animate);
                    const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
                    last = now;
                    /* travel: progress-mapped + slow idle life, inertia-lerped */ idle += dt * 0.35;
                    const target = progress * TRAVEL_TOTAL + idle;
                    travel += (target - travel) * 0.075;
                    const energy = 0.3 + progress * 1.5; /* pulses intensify with depth */ 
                    for (const c of cables){
                        c.mat.uniforms.uTravel.value = travel;
                        c.mat.uniforms.uEnergy.value = energy;
                    }
                    /* exit: light peaks then dissolves into white */ const rel = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, (progress - T_EXIT) / (1 - T_EXIT));
                    const eased = rel * rel * (3 - 2 * rel);
                    for (const c of cables)c.mat.uniforms.uMaster.value = 1 - eased;
                    coreMat.opacity = 0.85 * (1 - eased) + 0.6 * eased;
                    if (whiteout) whiteout.style.opacity = String(eased);
                    /* the story dissolves with the tunnel — white text never gets
         stranded on the white exit */ if (narrative) narrative.style.opacity = String(1 - eased);
                    /* atmosphere: camera lean + slow sway */ camera.position.x += (mx * 0.06 - camera.position.x) * 0.05;
                    camera.position.y += (-my * 0.045 - camera.position.y) * 0.05;
                    group.rotation.z = Math.sin(travel * 0.05) * 0.05 + mx * 0.02;
                    applyColors(progress);
                    renderer.render(scene, camera);
                }
            }["LightJourney.useEffect.animate"];
            const startLoop = {
                "LightJourney.useEffect.startLoop": ()=>{
                    if (running) return;
                    running = true;
                    last = 0;
                    raf = requestAnimationFrame(animate);
                }
            }["LightJourney.useEffect.startLoop"];
            const stopLoop = {
                "LightJourney.useEffect.stopLoop": ()=>{
                    running = false;
                    cancelAnimationFrame(raf);
                }
            }["LightJourney.useEffect.stopLoop"];
            /* ---------- the journey, held by its Scene ----------
       The Scene's sticky hold pins this section, so no `pin` here — this
       trigger only reads progress across the scene's runway. */ const st = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(rootEl),
                scrub: 0.6,
                invalidateOnRefresh: true,
                onUpdate: {
                    "LightJourney.useEffect.st": (self)=>{
                        progress = self.progress;
                        const p = self.progress;
                        /* the section title hands over to chapter one */ if (introEl) introEl.style.opacity = String(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, 1 - p / CH_START));
                        /* one chapter at a time; -1 while the title still owns the frame */ const idx = p < CH_START ? -1 : Math.min(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].length - 1, Math.floor((p - CH_START) / CH_SPAN));
                        if (idx !== shown) {
                            shown = idx;
                            /* class swap only — the stagger and crossfade are CSS, so the
             text never re-lays-out mid-scroll */ chapterEls.forEach({
                                "LightJourney.useEffect.st": (el, i)=>el.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on, i === idx)
                            }["LightJourney.useEffect.st"]);
                            tickEls.forEach({
                                "LightJourney.useEffect.st": (el, i)=>el.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickOn, i <= idx)
                            }["LightJourney.useEffect.st"]);
                            if (counterEl) {
                                counterEl.textContent = String(Math.max(0, idx) + 1).padStart(2, "0");
                            }
                        }
                    }
                }["LightJourney.useEffect.st"],
                onToggle: {
                    "LightJourney.useEffect.st": (self)=>self.isActive ? startLoop() : stopLoop()
                }["LightJourney.useEffect.st"]
            });
            /* render while approaching too, so it's alive before the pin */ const io = new IntersectionObserver({
                "LightJourney.useEffect": ([entry])=>{
                    if (entry.isIntersecting) startLoop();
                    else if (!st.isActive) stopLoop();
                }
            }["LightJourney.useEffect"], {
                rootMargin: "160px"
            });
            io.observe(rootEl);
            return ({
                "LightJourney.useEffect": ()=>{
                    stopLoop();
                    st.kill();
                    io.disconnect();
                    ro.disconnect();
                    frame.removeEventListener("pointermove", onPointerMove);
                    frame.removeEventListener("pointerleave", onPointerLeave);
                    geoms.forEach({
                        "LightJourney.useEffect": (g)=>g.dispose()
                    }["LightJourney.useEffect"]);
                    cables.forEach({
                        "LightJourney.useEffect": (c)=>c.mat.dispose()
                    }["LightJourney.useEffect"]);
                    coreTex.dispose();
                    coreMat.dispose();
                    renderer.dispose();
                }
            })["LightJourney.useEffect"];
        }
    }["LightJourney.useEffect"], []);
    const isStatic = staticMode || !webglOk;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].journey,
        id: "journey",
        ref: rootRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].frame} ${isStatic ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].frameStatic : ""}`,
            ref: frameRef,
            children: [
                webglOk ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                    lineNumber: 398,
                    columnNumber: 11
                }, this) : null,
                !isStatic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrim,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].intro,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introLabel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "02"
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                t("journey.eyebrow")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introLede,
                                            children: t("journey.lede")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introHint,
                                            children: t("journey.enter")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chapter,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chYear,
                                                children: c.year
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 418,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chTitle,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "title")
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 419,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chPlace,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "place")
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 420,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chStory,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "story")
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chBridge,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        "aria-hidden": "true",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "bridge")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 422,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rail,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counter,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counterNow,
                                                    children: "01"
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, this),
                                                " /",
                                                " ",
                                                String(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].length).padStart(2, "0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticks,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tick} ${i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickOn : ""}`
                                                }, c.id, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whiteout,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 445,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                    lineNumber: 403,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: isStatic ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticStory : __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: t("journey.eyebrow")
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticLede,
                            children: t("journey.lede")
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticYear,
                                            children: c.year
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "title")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticPlace,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "place")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 458,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "story")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticBridge,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "bridge")
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 453,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
            lineNumber: 393,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Journey/LightJourney.tsx",
        lineNumber: 392,
        columnNumber: 5
    }, this);
}
_s(LightJourney, "/HZMyCXCVTAqlN/BQLyEgnOny4w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = LightJourney;
var _c;
__turbopack_context__.k.register(_c, "LightJourney");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "DesignStack-module__Kcew6q__card",
  "center": "DesignStack-module__Kcew6q__center",
  "count": "DesignStack-module__Kcew6q__count",
  "eyebrow": "DesignStack-module__Kcew6q__eyebrow",
  "face": "DesignStack-module__Kcew6q__face",
  "glowA": "DesignStack-module__Kcew6q__glowA",
  "glowB": "DesignStack-module__Kcew6q__glowB",
  "h2": "DesignStack-module__Kcew6q__h2",
  "lede": "DesignStack-module__Kcew6q__lede",
  "mark": "DesignStack-module__Kcew6q__mark",
  "mono": "DesignStack-module__Kcew6q__mono",
  "name": "DesignStack-module__Kcew6q__name",
  "orbit": "DesignStack-module__Kcew6q__orbit",
  "section": "DesignStack-module__Kcew6q__section",
  "serif": "DesignStack-module__Kcew6q__serif",
  "stage": "DesignStack-module__Kcew6q__stage",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * MY DESIGN STACK — full-viewport spiral orbit
 *
 * Engine rebuilt from the Archimedean-spiral reference. Kept:
 *   · Archimedean path (radius falls linearly with angle → evenly spaced arms)
 *   · arc-length reparameterization — a lookup table inverts cumulative arc
 *     length so equal steps along the PATH give equal visual gaps. Without it,
 *     cards bunch up near the center.
 *   · continuous delta-time advance, tangent-derived rotation, fade at both
 *     ends of the path, scale attenuation toward the center, depth ordering.
 *
 * Adapted for this portfolio:
 *   · The path is an ELLIPSE matched to the viewport, not a circle. A circular
 *     spiral on a 16:9 screen can only be as wide as the screen is tall, which
 *     leaves the sides empty; the ellipse fills all four edges. The arc-length
 *     table is rebuilt whenever the aspect ratio changes, so spacing stays
 *     visually even under that anisotropic scaling.
 *   · Rotation is applied as a BANK taken straight from the tangent vector
 *     (lean ∝ dy/|d|). Aligning cards to the raw tangent would flip half the
 *     labels upside down; this keeps the lean-into-the-curve read with every
 *     name upright, and is continuous so it never jumps at angle wrap.
 *   · DOM, not canvas — glassmorphism, per-card hover and screen-reader access
 *     are impossible on canvas. 23 nodes, transform + opacity only (~0.15ms of
 *     scripting per frame), driven by the shared gsap ticker and gated by an
 *     IntersectionObserver so it stops when off screen.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$stack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/content/stack.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const TWO_PI = Math.PI * 2;
/* path shape */ const TURNS = 1.9;
const PHASE = -Math.PI * 0.5;
/* innermost radius as a fraction of the outer one — the clean disc the
   stationary center content lives in. Larger on narrow screens, where the
   text takes up proportionally more of the width. */ const INNER_WIDE = 0.4;
const INNER_COMPACT = 0.62;
/* motion */ const SPEED = 0.021; /* path fractions per second (~48s per full traverse) */ 
const HOVER_SLOW = 0.16;
/* appearance along the path */ const FADE_IN = 0.09;
const FADE_OUT = 0.3;
const SCALE_POW = 0.5;
const LEAN_MAX = 11; /* degrees */ 
/* ---------- arc-length reparameterization ----------
   Built in units of Rx, for a given ratio = Ry/Rx and inner radius, so the
   table measures true on-screen distance. Cached; rebuilt only when the
   viewport's aspect ratio changes meaningfully. */ const M = 1000;
const K = 1024;
function buildArcTable(ratio, inner) {
    const point = (n)=>{
        const a = n * TURNS * TWO_PI + PHASE;
        const r = 1 - n * (1 - inner);
        return {
            x: r * Math.cos(a),
            y: -r * Math.sin(a) * ratio
        };
    };
    const cum = new Float32Array(M + 1);
    let prev = point(0);
    for(let k = 1; k <= M; k++){
        const p = point(k / M);
        cum[k] = cum[k - 1] + Math.hypot(p.x - prev.x, p.y - prev.y);
        prev = p;
    }
    const total = cum[M] || 1;
    const nForArc = new Float32Array(K + 1);
    let j = 0;
    for(let a = 0; a <= K; a++){
        const target = a / K * total;
        while(j < M && cum[j + 1] < target)j++;
        const seg = cum[j + 1] - cum[j];
        nForArc[a] = (j + (seg > 0 ? (target - cum[j]) / seg : 0)) / M;
    }
    return {
        nForArc,
        ratio,
        inner
    };
}
function DesignStack() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignStack.useEffect": ()=>{
            const stageEl = stage.current;
            const rootEl = root.current;
            if (!stageEl || !rootEl) return;
            const cards = Array.from(stageEl.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`));
            const N = cards.length;
            if (!N) return;
            const compactMQ = window.matchMedia("(max-width: 700px)");
            let Rx = 0;
            let Ry = 0;
            let inner = INNER_WIDE;
            let table = buildArcTable(1, INNER_WIDE);
            const measure = {
                "DesignStack.useEffect.measure": ()=>{
                    const w = stageEl.clientWidth;
                    const h = stageEl.clientHeight;
                    const compact = compactMQ.matches;
                    inner = compact ? INNER_COMPACT : INNER_WIDE;
                    /* the outer ring reaches every edge; on very narrow screens it is
         allowed to overflow horizontally so the orbit still clears the text */ Rx = compact ? Math.max(0.5 * w, 236) : 0.5 * w;
                    Ry = 0.5 * h;
                    const ratio = Ry / Rx;
                    if (Math.abs(ratio - table.ratio) / table.ratio > 0.02 || inner !== table.inner) {
                        table = buildArcTable(ratio, inner);
                    }
                    const cardW = compact ? 52 : __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(112, 168, Math.min(Rx, Ry) * 0.3);
                    stageEl.style.setProperty("--card-w", `${cardW}px`);
                }
            }["DesignStack.useEffect.measure"];
            /** arc fraction s ∈ [0,1) → spiral parameter n (interpolated; rounding
     *  would quantize the motion into visible steps) */ const arcToN = {
                "DesignStack.useEffect.arcToN": (s)=>{
                    const x = Math.min(K, Math.max(0, s * K));
                    const i = Math.floor(x);
                    const a = table.nForArc[i];
                    const b = table.nForArc[Math.min(i + 1, K)];
                    return a + (b - a) * (x - i);
                }
            }["DesignStack.useEffect.arcToN"];
            const at = {
                "DesignStack.useEffect.at": (n)=>{
                    const ang = n * TURNS * TWO_PI + PHASE;
                    const rFrac = 1 - n * (1 - inner);
                    return {
                        x: Rx * rFrac * Math.cos(ang),
                        y: -Ry * rFrac * Math.sin(ang),
                        rFrac
                    };
                }
            }["DesignStack.useEffect.at"];
            const zSet = cards.map({
                "DesignStack.useEffect.zSet": ()=>-1
            }["DesignStack.useEffect.zSet"]);
            const place = {
                "DesignStack.useEffect.place": (base)=>{
                    for(let i = 0; i < N; i++){
                        const s = (base + i / N) % 1;
                        const n = arcToN(s);
                        const p = at(n);
                        /* fade at both ends of the path */ let o = 1;
                        if (s < FADE_IN) o = s / FADE_IN;
                        else if (s > 1 - FADE_OUT) o = (1 - s) / FADE_OUT;
                        o = Math.max(0, Math.min(1, o));
                        /* smaller toward the center */ const scale = Math.pow(p.rFrac, SCALE_POW);
                        /* bank taken from the true tangent vector — continuous, always upright */ const q = at(Math.min(n + 0.002, 1));
                        const dx = q.x - p.x;
                        const dy = q.y - p.y;
                        const len = Math.hypot(dx, dy) || 1;
                        const lean = LEAN_MAX * (dy / len);
                        const el = cards[i];
                        el.style.transform = `translate3d(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px, 0) rotate(${lean.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
                        el.style.opacity = o.toFixed(3);
                        const z = Math.round((1 - n) * 100);
                        if (z !== zSet[i]) {
                            el.style.zIndex = String(z);
                            zSet[i] = z;
                        }
                    }
                }
            }["DesignStack.useEffect.place"];
            measure();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) {
                place(0);
                return;
            }
            let base = 0;
            let speedMul = 1;
            let target = 1;
            const tick = {
                "DesignStack.useEffect.tick": (_t, dt)=>{
                    const f = Math.min(dt / 1000, 0.05);
                    speedMul += (target - speedMul) * Math.min(f * 6, 1);
                    base = (base + SPEED * speedMul * f) % 1;
                    place(base);
                }
            }["DesignStack.useEffect.tick"];
            /* the orbit eases down only while a CARD is hovered, so you can read the
       one you reached for; crossing empty stage does nothing */ let hovered = 0;
            const onOver = {
                "DesignStack.useEffect.onOver": (e)=>{
                    if (e.target?.closest?.(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`)) {
                        hovered++;
                        target = HOVER_SLOW;
                    }
                }
            }["DesignStack.useEffect.onOver"];
            const onOut = {
                "DesignStack.useEffect.onOut": (e)=>{
                    if (e.target?.closest?.(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`)) {
                        hovered = Math.max(0, hovered - 1);
                        if (!hovered) target = 1;
                    }
                }
            }["DesignStack.useEffect.onOut"];
            stageEl.addEventListener("pointerover", onOver);
            stageEl.addEventListener("pointerout", onOut);
            const ro = new ResizeObserver({
                "DesignStack.useEffect": ()=>{
                    measure();
                    place(base);
                }
            }["DesignStack.useEffect"]);
            ro.observe(stageEl);
            let running = false;
            const io = new IntersectionObserver({
                "DesignStack.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !running) {
                        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(tick);
                        running = true;
                    } else if (!entry.isIntersecting && running) {
                        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                        running = false;
                    }
                }
            }["DesignStack.useEffect"], {
                rootMargin: "120px"
            });
            io.observe(rootEl);
            place(0);
            return ({
                "DesignStack.useEffect": ()=>{
                    if (running) __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                    io.disconnect();
                    ro.disconnect();
                    stageEl.removeEventListener("pointerover", onOver);
                    stageEl.removeEventListener("pointerout", onOut);
                }
            })["DesignStack.useEffect"];
        }
    }["DesignStack.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        id: "stack",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowA,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowB,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                ref: stage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].center,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "03"
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t("stack.eyebrow")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                                children: [
                                    t("stack.h2"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                        children: t("stack.h2Em")
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                                children: t("stack.lede")
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$stack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOLS"].length,
                                    " ",
                                    t("stack.count"),
                                    " · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                        lineNumber: 279,
                                        columnNumber: 49
                                    }, this),
                                    " ",
                                    t("stack.disciplines")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orbit,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$stack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOLS"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].face,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mark,
                                            children: t.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: t.src,
                                                alt: "",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                                lineNumber: 290,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mono,
                                                style: {
                                                    color: t.color,
                                                    background: `${t.color}14`
                                                },
                                                "aria-hidden": "true",
                                                children: t.mono
                                            }, void 0, false, {
                                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                            children: t.name
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            }, t.name, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Stack/DesignStack.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_s(DesignStack, "4rR3570/PQmqbWVrC6lBiK6tR60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = DesignStack;
var _c;
__turbopack_context__.k.register(_c, "DesignStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/sections/Work/Work.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "award": "Work-module__FVdTfq__award",
  "card": "Work-module__FVdTfq__card",
  "contribution": "Work-module__FVdTfq__contribution",
  "count": "Work-module__FVdTfq__count",
  "cover": "Work-module__FVdTfq__cover",
  "coverBrand": "Work-module__FVdTfq__coverBrand",
  "coverMark": "Work-module__FVdTfq__coverMark",
  "coverPhoto": "Work-module__FVdTfq__coverPhoto",
  "dot": "Work-module__FVdTfq__dot",
  "dotOn": "Work-module__FVdTfq__dotOn",
  "dots": "Work-module__FVdTfq__dots",
  "eyebrow": "Work-module__FVdTfq__eyebrow",
  "foot": "Work-module__FVdTfq__foot",
  "h2": "Work-module__FVdTfq__h2",
  "headRow": "Work-module__FVdTfq__headRow",
  "header": "Work-module__FVdTfq__header",
  "hint": "Work-module__FVdTfq__hint",
  "inner": "Work-module__FVdTfq__inner",
  "lede": "Work-module__FVdTfq__lede",
  "meta": "Work-module__FVdTfq__meta",
  "metaFoot": "Work-module__FVdTfq__metaFoot",
  "open": "Work-module__FVdTfq__open",
  "serif": "Work-module__FVdTfq__serif",
  "siteChip": "Work-module__FVdTfq__siteChip",
  "stage": "Work-module__FVdTfq__stage",
  "tags": "Work-module__FVdTfq__tags",
  "track": "Work-module__FVdTfq__track",
  "work": "Work-module__FVdTfq__work",
  "year": "Work-module__FVdTfq__year",
});
}),
"[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * Featured Work — the curved project track (02_UX_AND_INTERACTIONS.md §3.3).
 * Desktop: the section pins and vertical scroll scrubs the cards along a
 * perspective arc — center card frontal, neighbours rotate away and recede.
 * Touch / reduced motion: a native horizontal snap row, same cards.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/content/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/sections/Work/Work.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SPREAD = 330; /* px between card centers on the arc */ 
/* Scroll px per card. With 14 projects this is the page's longest pin, so
   the step is kept tight — enough for each card to land at centre, without
   turning the section into a corridor. */ const PIN_PER_CARD = 210;
/* two-digit counter — the collection is past nine projects */ const pad = (n)=>String(n).padStart(2, "0");
function Work() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Work.useEffect": ()=>{
            const el = root.current;
            if (!el) return;
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(min-width: 1101px) and (prefers-reduced-motion: no-preference)", {
                "Work.useEffect": ()=>{
                    const cards = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`);
                    const counter = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count}`);
                    const dots = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot}`);
                    const n = cards.length;
                    const render = {
                        "Work.useEffect.render": (p)=>{
                            cards.forEach({
                                "Work.useEffect.render": (card, i)=>{
                                    const d = i - p;
                                    const ad = Math.abs(d);
                                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(card, {
                                        x: d * SPREAD,
                                        y: Math.min(ad * ad * 9, 110),
                                        rotationY: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(-34, 34, -d * 10),
                                        scale: 1 - Math.min(ad * 0.065, 0.38),
                                        /* Depth is carried by position, scale and rotation — NOT by
               dimming. The cards on screen (roughly ad <= 2) stay fully
               opaque so every cover reads at its true brightness; only
               cards already travelling off the viewport edge fade, and
               only enough to soften the exit. */ autoAlpha: ad <= 2 ? 1 : Math.max(0.55, 1 - (ad - 2) * 0.22),
                                        zIndex: Math.round(100 - ad * 10)
                                    });
                                }
                            }["Work.useEffect.render"]);
                            const active = Math.round(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, n - 1, p));
                            if (counter) {
                                counter.textContent = `${pad(active + 1)} / ${pad(n)}`;
                            }
                            dots.forEach({
                                "Work.useEffect.render": (dot, i)=>dot.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotOn, i === active)
                            }["Work.useEffect.render"]);
                        }
                    }["Work.useEffect.render"];
                    render(0);
                    /* the Scene's sticky hold does the pinning; this only reads progress
         across the scene's runway (see lib/scene.ts) */ const st = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(el),
                        scrub: 0.65,
                        invalidateOnRefresh: true,
                        onUpdate: {
                            "Work.useEffect.st": (self)=>render(self.progress * (n - 1))
                        }["Work.useEffect.st"]
                    });
                    /* header reveal, once, on pin start */ __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} > *`, {
                        y: 40,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.09,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 70%"
                        }
                    });
                    return ({
                        "Work.useEffect": ()=>st.kill()
                    })["Work.useEffect"];
                }
            }["Work.useEffect"]);
            /* Touch & reduced motion: the snap row needs no JS. The reveal tween that
       used to live here could never run — the snap-row CSS pins the cards with
       `transform: none !important; opacity: 1 !important`, which inline GSAP
       styles cannot beat — so it was dead code that only risked flashing the
       cards through a hidden state. The row simply renders. */ return ({
                "Work.useEffect": ()=>mm.revert()
            })["Work.useEffect"];
        }
    }["Work.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work,
        id: "work",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "04"
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            " ",
                            t("work.eyebrow")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                                children: [
                                    t("work.h2a"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    t("work.h2b"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                        children: t("work.h2Em")
                                    }, void 0, false, {
                                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                        lineNumber: 111,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                                children: t("work.lede")
                            }, void 0, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                            style: {
                                zIndex: 100 - i
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
                                    href: `/work/${p.slug}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cover,
                                            style: p.cover ? {
                                                background: p.cover.bg,
                                                color: p.cover.ink === "light" ? "#fff" : "var(--ink)"
                                            } : undefined,
                                            children: [
                                                p.cover?.src && p.cover.variant === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverPhoto,
                                                    src: p.cover.src,
                                                    autoPlay: true,
                                                    muted: true,
                                                    loop: true,
                                                    playsInline: true
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this) : p.cover?.src && p.cover.variant === "photo" ? /* his own capture of the built site — full-bleed */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverPhoto,
                                                    src: p.cover.src,
                                                    alt: p.coverLabel,
                                                    style: p.cover.focus ? {
                                                        objectPosition: p.cover.focus
                                                    } : undefined,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this) : p.cover?.src ? /* verified brand mark, sized by its true aspect ratio */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverBrand,
                                                    src: p.cover.src,
                                                    alt: p.coverLabel,
                                                    style: {
                                                        aspectRatio: p.cover.aspect ?? 1
                                                    },
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 21
                                                }, this) : p.cover?.mark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverMark,
                                                    "aria-label": p.coverLabel,
                                                    children: p.cover.mark
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "▢  ",
                                                        p.coverLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this),
                                                p.award && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].award,
                                                    children: p.award
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, p, "title")
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contribution,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, p, "contribution")
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                                                    children: (p.fr && lang === "fr" ? p.fr.tags ?? p.tags : p.tags).join(" · ").toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaFoot,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year,
                                                            children: p.year
                                                        }, void 0, false, {
                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open,
                                                            children: [
                                                                t("work.open"),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                (p.site || p.repo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].siteChip,
                                    href: p.site ? p.site.url : p.repo,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": `${p.site ? p.site.label : "GitHub"} ↗`,
                                    children: [
                                        p.site ? p.site.label : "GitHub",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            "aria-hidden": "true",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                            lineNumber: 195,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.slug, true, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].foot,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                        children: [
                            "01 / ",
                            pad(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].length)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dots,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotOn : ""}`
                            }, p.slug, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                        children: t("work.hint")
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/sections/Work/Work.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(Work, "QeCfe2rdG634JGQWUzKzs9CzsNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/ui/Button.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "Button-module__lwvJIG__arrow",
  "btn": "Button-module__lwvJIG__btn",
  "dark": "Button-module__lwvJIG__dark",
  "fill": "Button-module__lwvJIG__fill",
  "ghost": "Button-module__lwvJIG__ghost",
  "label": "Button-module__lwvJIG__label",
  "labelClone": "Button-module__lwvJIG__labelClone",
  "labelStack": "Button-module__lwvJIG__labelStack",
  "labelWrap": "Button-module__lwvJIG__labelWrap",
  "lead": "Button-module__lwvJIG__lead",
  "md": "Button-module__lwvJIG__md",
  "primary": "Button-module__lwvJIG__primary",
  "sm": "Button-module__lwvJIG__sm",
});
}),
"[project]/-hareesh-Portfolio-master/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * Design-system Button — the interaction standard for every CTA on the site.
 * Interaction language (recreated from scratch, PillNav as benchmark):
 *   · circular fill expands from the bottom of the pill on hover
 *   · label rolls up, replacement rolls in from below
 *   · optional trailing arrow rotates -45° on hover
 *   · magnetic pull on fine pointers
 * All motion is transform-only (GPU), respects prefers-reduced-motion,
 * and degrades to plain taps on touch devices.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/ui/Button.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Button({ href, children, variant = "primary", size = "md", arrow = false, lead, magnetic = true, className = "", onClick }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Button.useEffect": ()=>{
            const el = ref.current;
            if (!el || !magnetic || (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            if (!window.matchMedia("(pointer: fine)").matches) return;
            const bx = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(el, "x", {
                duration: 0.4,
                ease: "power3.out"
            });
            const by = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(el, "y", {
                duration: 0.4,
                ease: "power3.out"
            });
            const move = {
                "Button.useEffect.move": (e)=>{
                    const r = el.getBoundingClientRect();
                    bx((e.clientX - r.left - r.width / 2) * 0.18);
                    by((e.clientY - r.top - r.height / 2) * 0.26);
                }
            }["Button.useEffect.move"];
            const leave = {
                "Button.useEffect.leave": ()=>{
                    bx(0);
                    by(0);
                }
            }["Button.useEffect.leave"];
            el.addEventListener("mousemove", move);
            el.addEventListener("mouseleave", leave);
            return ({
                "Button.useEffect": ()=>{
                    el.removeEventListener("mousemove", move);
                    el.removeEventListener("mouseleave", leave);
                }
            })["Button.useEffect"];
        }
    }["Button.useEffect"], [
        magnetic
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        ref: ref,
        href: href,
        onClick: onClick,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant]} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size]} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fill,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/ui/Button.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lead,
                children: lead
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/ui/Button.tsx",
                lineNumber: 75,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelStack,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/ui/Button.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label} ${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelClone}`,
                            "aria-hidden": "true",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/-hareesh-Portfolio-master/components/ui/Button.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/ui/Button.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/ui/Button.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                "aria-hidden": "true",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/-hareesh-Portfolio-master/components/ui/Button.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/ui/Button.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(Button, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "copy": "VelocityMarquee-module__N_-0Da__copy",
  "item": "VelocityMarquee-module__N_-0Da__item",
  "marquee": "VelocityMarquee-module__N_-0Da__marquee",
  "outlineText": "VelocityMarquee-module__N_-0Da__outlineText",
  "row": "VelocityMarquee-module__N_-0Da__row",
  "sep": "VelocityMarquee-module__N_-0Da__sep",
  "solidText": "VelocityMarquee-module__N_-0Da__solidText",
  "srOnly": "VelocityMarquee-module__N_-0Da__srOnly",
  "track": "VelocityMarquee-module__N_-0Da__track",
});
}),
"[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VelocityMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * VelocityMarquee — scroll-velocity marquee, rebuilt from scratch
 * (ReactBits ScrollVelocity as the interaction benchmark).
 *
 * · each row drifts continuously in its own base direction
 * · scrolling accelerates the drift; scrolling up flips the direction
 * · seamless infinite wrap: 4 copies per row, xPercent wrapped in (-25, 0]
 * · transform-only, one shared gsap ticker, reduced-motion → static rows
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const COPIES = 4;
function RowCopy({ items, outline }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copy,
        "aria-hidden": "true",
        children: items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: outline ? __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outlineText : __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].solidText,
                        children: t
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sep,
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, t, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = RowCopy;
function VelocityMarquee({ rows }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VelocityMarquee.useEffect": ()=>{
            const el = root.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            const tracks = Array.from(el.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track}`));
            const state = tracks.map({
                "VelocityMarquee.useEffect.state": (track, i)=>({
                        track,
                        x: 0,
                        /* velocity is TRUE px/s (sign = direction), so both rows read at the
         same calm pace regardless of how wide their content happens to be */ base: rows[i]?.velocity ?? 40,
                        copyPx: 1
                    })
            }["VelocityMarquee.useEffect.state"]);
            const measure = {
                "VelocityMarquee.useEffect.measure": ()=>{
                    state.forEach({
                        "VelocityMarquee.useEffect.measure": (s)=>{
                            s.copyPx = Math.max(1, s.track.scrollWidth / COPIES);
                        }
                    }["VelocityMarquee.useEffect.measure"]);
                }
            }["VelocityMarquee.useEffect.measure"];
            measure();
            const ro = new ResizeObserver(measure);
            ro.observe(el);
            const wrap = __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.wrap(-25, 0);
            let lastY = window.scrollY;
            let lastT = performance.now();
            let boost = 0;
            const tick = {
                "VelocityMarquee.useEffect.tick": ()=>{
                    const now = performance.now();
                    const dt = Math.min((now - lastT) / 1000, 0.05);
                    lastT = now;
                    /* scroll velocity (px/s), heavily smoothed */ const y = window.scrollY;
                    const vRaw = dt > 0 ? (y - lastY) / dt : 0;
                    lastY = y;
                    boost += (__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(-3000, 3000, vRaw) - boost) * 0.1;
                    const dirFromScroll = boost < -40 ? -1 : 1; /* scrolling up reverses */ 
                    /* gentle: scrolling at most doubles the pace */ const accel = 1 + Math.min(Math.abs(boost) / 1400, 1.2);
                    state.forEach({
                        "VelocityMarquee.useEffect.tick": (s)=>{
                            const pxDelta = s.base * dirFromScroll * accel * dt;
                            /* one copy = 25 xPercent of the 4-copy track */ s.x -= pxDelta / s.copyPx * 25;
                            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(s.track, {
                                xPercent: wrap(s.x)
                            });
                        }
                    }["VelocityMarquee.useEffect.tick"]);
                }
            }["VelocityMarquee.useEffect.tick"];
            __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(tick);
            return ({
                "VelocityMarquee.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                    ro.disconnect();
                }
            })["VelocityMarquee.useEffect"];
        }
    }["VelocityMarquee.useEffect"], [
        rows
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marquee,
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                children: [
                    "Skills: ",
                    rows.flatMap((r)=>r.items).join(", ")
                ]
            }, void 0, true, {
                fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
                        children: Array.from({
                            length: COPIES
                        }).map((_, c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowCopy, {
                                items: row.items,
                                outline: row.outline
                            }, c, false, {
                                fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/-hareesh-Portfolio-master/components/ui/VelocityMarquee.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(VelocityMarquee, "/rr7G8WhLICCHRj4HQ5x5ovssB4=");
_c1 = VelocityMarquee;
var _c, _c1;
__turbopack_context__.k.register(_c, "RowCopy");
__turbopack_context__.k.register(_c1, "VelocityMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/content/certifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CERTS",
    ()=>CERTS
]);
const CERTS = [
    {
        no: "2.1",
        issuer: "NPTEL",
        title: "Product Design and Manufacturing",
        year: "2025",
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.2",
        issuer: "NPTEL",
        title: "Privacy and Security in Online Social Media",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.3",
        issuer: "edX \u00b7 StanfordOnline",
        title: "Algorithms: Design and Analysis, Part 1",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.4",
        issuer: "edX \u00b7 IBM",
        title: "Analyzing Data with Python",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.5",
        issuer: "edX \u00b7 IBM",
        title: "Cybersecurity Basics",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.6",
        issuer: "edX \u00b7 IBM",
        title: "Data Analytics Basics for Everyone",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.7",
        issuer: "edX \u00b7 WageningenX",
        title: "Drones for Agriculture: Prepare and Design Your Drone (UAV) Mission",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.8",
        issuer: "edX \u00b7 IBM",
        title: "Hardware and Operating Systems",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.9",
        issuer: "edX \u00b7 IBM",
        title: "Introduction to Cloud Computing",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.10",
        issuer: "edX \u00b7 UC3Mx",
        title: "Introduction to Java Programming: Fundamental Data Structures and Algorithms",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.11",
        issuer: "edX \u00b7 UPValenciaX",
        title: "Introduction to the Internet of Things",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.12",
        issuer: "edX \u00b7 IBM",
        title: "Machine Learning with Python: A Practical Introduction",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.13",
        issuer: "edX \u00b7 UCx",
        title: "Mental Health and Nutrition",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.14",
        issuer: "edX \u00b7 UPValenciaX",
        title: "Physics Fundamentals: Mechanics",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.15",
        issuer: "edX \u00b7 IBM",
        title: "Python Basics for Data Science",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.16",
        issuer: "edX \u00b7 IBM",
        title: "SQL for Data Science",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    },
    {
        no: "2.17",
        issuer: "edX \u00b7 Raspberry Pi Foundation",
        title: "Teach teens computing: Encryption and cryptography",
        year: null,
        credentialId: null,
        verified: false,
        skills: [
            "Continuous learning"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/content/experience.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROLES",
    ()=>ROLES
]);
const ROLES = [
    {
        company: "CAD Desk Institution",
        role: "Mechanical CAD Trainee",
        type: "Internship",
        location: "Hyderabad, Ameerpet",
        period: "2026",
        summary: "Completed a 140-hour Diploma Course in Mechanical CAD covering SolidWorks, CATIA, AutoCAD, Creo, NX CAD, CNC programming and engineering design fundamentals.",
        achievements: [
            "Practiced sketching, part modeling, assembly design, surface modeling, dimensioning and drafting in SolidWorks and CATIA.",
            "Studied introductory GD&T, sheet-metal concepts and engineering drawing workflows.",
            "Developed hands-on CAD models including crankshaft, assembly, tank and butterfly-component exercises."
        ],
        outcome: "Built a stronger practical foundation for mechanical design and advanced CAD learning.",
        skills: [
            "SolidWorks",
            "CATIA V5",
            "AutoCAD",
            "Creo",
            "NX CAD",
            "GD&T",
            "CNC"
        ],
        color: "#111111",
        fg: "light"
    },
    {
        company: "Rayalaseema Thermal Power Project (RTPP)",
        role: "Mechanical Engineering Intern",
        type: "Internship",
        location: "Andhra Pradesh, India",
        period: "Jan – Apr 2026",
        summary: "Gained industrial exposure to turbine and auxiliary systems within a thermal power generation environment.",
        achievements: [
            "Studied turbine and auxiliary-system operations and their role in plant performance.",
            "Observed industrial engineering practices and equipment workflows in a live power-generation environment."
        ],
        outcome: "Strengthened understanding of industrial mechanical systems and plant operations.",
        skills: [
            "Turbine Systems",
            "Auxiliaries",
            "Industrial Engineering",
            "Power Plant Operations"
        ],
        color: "#6D3BF5",
        fg: "light"
    },
    {
        company: "Sakthi Auto Component Limited",
        role: "Mechanical Engineering Intern / CNC Operator Trainee",
        type: "Internship",
        location: "India",
        period: "May – Jul 2025",
        summary: "Completed a 46-day industrial internship with exposure to automotive component manufacturing and CNC operations.",
        achievements: [
            "Gained hands-on exposure to mechanical manufacturing processes in a factory environment.",
            "Trained in CNC operator fundamentals and observed production-oriented machining workflows.",
            "Maintained good attendance and performance throughout the training period."
        ],
        outcome: "Developed practical awareness of automotive manufacturing and shop-floor operations.",
        skills: [
            "CNC",
            "Manufacturing",
            "Automotive Components",
            "Shop Floor Practices"
        ],
        color: "#FFFFFF",
        fg: "dark"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/content/journey.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAPTERS",
    ()=>CHAPTERS
]);
const CHAPTERS = [
    {
        id: "degree",
        year: "2022",
        title: "Building the foundation",
        place: "JNTUA College of Engineering, Pulivendula",
        story: "Started a B.Tech in Mechanical Engineering, building fundamentals across engineering science, design, manufacturing and problem solving.",
        bridge: "The classroom gave me the foundation; projects and industry would give it practical direction."
    },
    {
        id: "internships",
        year: "2025",
        title: "Engineering beyond the classroom",
        place: "Sakthi Auto Component Limited",
        story: "Industrial training introduced me to automotive component manufacturing, CNC operations and the realities of a production environment.",
        bridge: "Seeing components being made made CAD feel less like software and more like the language of manufacturing."
    },
    {
        id: "rtpp",
        year: "2026",
        title: "Inside an industrial system",
        place: "Rayalaseema Thermal Power Project",
        story: "Exposure to turbine and auxiliary systems expanded my understanding of large-scale mechanical equipment and industrial operations.",
        bridge: "The next step was to strengthen the design side of my engineering knowledge."
    },
    {
        id: "cad",
        year: "2026",
        title: "Learning to design in CAD",
        place: "CAD Desk Institution · Hyderabad",
        story: "Completed a 140-hour Mechanical CAD course covering SolidWorks, CATIA, AutoCAD, Creo, NX CAD, CNC programming and introductory GD&T.",
        bridge: "Hands-on modeling turned engineering concepts into parts, assemblies and drawings I could actually build and improve."
    },
    {
        id: "future",
        year: "Now",
        title: "Designing with intent",
        place: "Tirupati, India",
        story: "I am continuing to develop as a Mechanical Designer through CAD projects, product-design learning, additive manufacturing, drone technology and digital tools.",
        bridge: "The goal is simple: keep learning, design accurately, and turn good engineering ideas into useful products."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/content/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECTS",
    ()=>PROJECTS
]);
const cadStudy = (title, context, process)=>({
        role: "Mechanical CAD Project",
        timeline: "2026 · CAD Desk",
        context,
        problem: "Translate mechanical geometry into accurate, structured CAD models suitable for design review and engineering documentation.",
        process,
        decisions: [
            {
                title: "Model with design intent",
                why: "Use sketches, constraints and feature-based modeling so dimensions can be revised without rebuilding the entire part."
            },
            {
                title: "Think beyond the part",
                why: "Where applicable, consider how individual components fit into assemblies and how the model connects to manufacturing and drawings."
            }
        ],
        outcomes: [
            "Hands-on CAD modeling practice",
            "Improved understanding of assemblies and drafting",
            "Stronger mechanical-design workflow"
        ],
        reflection: "Every model is an opportunity to improve accuracy, structure and design thinking."
    });
const PROJECTS = [
    {
        slug: "petg-filament",
        title: "Low-Cost FDM Filament from PET Bottles",
        tags: [
            "Additive Manufacturing",
            "PET",
            "FDM",
            "Sustainability"
        ],
        year: "2026",
        oneLiner: "A mechanical engineering project exploring a low-cost process for producing FDM filament from waste PET bottles.",
        contribution: "Developed and studied the mechanical process behind shredding, melting and extrusion of recycled PET into usable 3D-printer filament.",
        coverLabel: "PET → FDM FILAMENT",
        cover: {
            bg: "#0B0B0E",
            ink: "light",
            src: "/images/projects/petg-filament.mp4",
            variant: "video",
            mark: "PET → 3D"
        },
        study: {
            role: "B.Tech Mechanical Engineering Project",
            timeline: "2026 · JNTUA College of Engineering, Pulivendula",
            context: "The project report is titled Development of Low Cost FDM Filament Production System from PET Bottles and was completed as part of the B.Tech Mechanical Engineering programme.",
            problem: "Explore a practical, lower-cost approach to converting waste PET bottles into filament for fused deposition modelling.",
            process: [
                {
                    title: "Prepare the material",
                    body: "Study the handling and preparation of waste PET bottles before conversion into filament feedstock."
                },
                {
                    title: "Process the polymer",
                    body: "Apply shredding, melting and extrusion stages to transform PET material into continuous filament."
                },
                {
                    title: "Evaluate the output",
                    body: "Focus on producing usable filament for additive-manufacturing applications while considering recycling and cost."
                }
            ],
            decisions: [
                {
                    title: "Design around available waste material",
                    why: "Using PET bottles makes the project directly connected to recycling and accessible material sources."
                },
                {
                    title: "Combine process stages",
                    why: "The project links material preparation and extrusion into a practical production workflow."
                }
            ],
            outcomes: [
                "Developed a low-cost FDM filament production concept",
                "Connected recycling with additive manufacturing",
                "Built practical understanding of material-processing systems"
            ],
            reflection: "The project showed how mechanical design can connect sustainability, manufacturing and additive manufacturing in one system."
        }
    },
    {
        slug: "crankshaft-solidworks",
        title: "Crankshaft — SolidWorks Model",
        tags: [
            "SolidWorks",
            "Part Modeling",
            "Mechanical CAD"
        ],
        year: "2026",
        oneLiner: "A detailed crankshaft modeling exercise developed during mechanical CAD training.",
        contribution: "Created a parametric crankshaft model while practicing sketches, features, dimensions and mechanical geometry.",
        coverLabel: "CRANKSHAFT · SOLIDWORKS",
        cover: {
            bg: "#E9F2FC",
            ink: "dark",
            mark: "TEST IMAGE",
            src: "/images/projects/crankshaft-solidworks.png",
            variant: "photo"
        },
        study: cadStudy("Crankshaft", "A mechanical CAD practice model created as part of CAD Desk training.", [
            {
                title: "Build the geometry",
                body: "Break the crankshaft into logical geometric features and construct the model through constrained sketches and solid features."
            },
            {
                title: "Refine the form",
                body: "Apply dimensions and feature relationships to keep the model consistent and editable."
            },
            {
                title: "Prepare for documentation",
                body: "Use the completed model as the basis for engineering-drawing and drafting practice."
            }
        ])
    },
    {
        slug: "crankshaft-catia",
        title: "Crankshaft — CATIA V5",
        tags: [
            "CATIA V5",
            "Part Design",
            "CAD"
        ],
        year: "2026",
        oneLiner: "A CATIA V5 crankshaft exercise focused on feature-based mechanical modeling.",
        contribution: "Practiced CATIA V5 sketching and part-modeling workflows on a mechanical component.",
        coverLabel: "CRANKSHAFT · CATIA V5",
        cover: {
            bg: "#F0EBFD",
            ink: "dark",
            mark: "CATIA V5"
        },
        study: cadStudy("Crankshaft CATIA V5", "A CATIA V5 mechanical modeling exercise from the supplied CAD project collection.", [
            {
                title: "Sketch the section",
                body: "Create the initial constrained geometry needed to establish the component form."
            },
            {
                title: "Build the part",
                body: "Develop the crankshaft using feature-based solid modeling tools in CATIA V5."
            },
            {
                title: "Review the model",
                body: "Check geometry and dimensions as part of the CAD learning workflow."
            }
        ])
    },
    {
        slug: "cad-assembly",
        title: "Mechanical Assembly Practice",
        tags: [
            "Assembly",
            "SolidWorks",
            "CAD"
        ],
        year: "2026",
        oneLiner: "Assembly-focused CAD practice developed during mechanical design training.",
        contribution: "Applied assembly concepts to understand how individual modeled components are positioned and related in a larger mechanism.",
        coverLabel: "MECHANICAL ASSEMBLY",
        cover: {
            bg: "#111111",
            ink: "light",
            mark: "ASSEMBLY",
            src: "/images/projects/cad-assembly.png",
            variant: "photo"
        },
        study: cadStudy("Assembly Practice", "Assembly modeling is included in the supplied CAD Desk project collection.", [
            {
                title: "Prepare components",
                body: "Use individual component models as the building blocks of the assembly."
            },
            {
                title: "Define relationships",
                body: "Apply assembly constraints and positioning logic to bring components together."
            },
            {
                title: "Review the mechanism",
                body: "Inspect fit, placement and overall assembly structure."
            }
        ])
    },
    {
        slug: "cad-components",
        title: "CAD Component Modeling Collection",
        tags: [
            "CAD Desk",
            "Drafting",
            "SolidWorks",
            "CATIA"
        ],
        year: "2026",
        oneLiner: "A collection of mechanical CAD exercises including tank, butterfly and drafting models.",
        contribution: "Built a broader modeling portfolio through repeated practice across parts, assemblies and engineering drawings.",
        coverLabel: "CAD COMPONENTS",
        cover: {
            bg: "#FFFFFF",
            ink: "dark",
            mark: "CAD",
            src: "/images/projects/cad-components.png",
            variant: "photo"
        },
        study: cadStudy("CAD Component Collection", "The supplied project archive includes tank, butterfly, assembly and drafting files created during CAD learning.", [
            {
                title: "Explore different geometries",
                body: "Practice modeling components with different shapes, features and construction strategies."
            },
            {
                title: "Draft and document",
                body: "Extend CAD models into drafting exercises to strengthen engineering-documentation skills."
            },
            {
                title: "Repeat and improve",
                body: "Use multiple components to build speed, accuracy and confidence in CAD workflows."
            }
        ])
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/content/stack.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOOLS",
    ()=>TOOLS
]);
const TOOLS = [
    {
        name: "SolidWorks",
        group: "CAD",
        mono: "SW"
    },
    {
        name: "CATIA V5",
        group: "CAD",
        mono: "C5"
    },
    {
        name: "Fusion 360",
        group: "CAD",
        mono: "F3"
    },
    {
        name: "AutoCAD",
        group: "CAD",
        mono: "AC"
    },
    {
        name: "Creo",
        group: "CAD",
        mono: "CR"
    },
    {
        name: "NX CAD",
        group: "CAD",
        mono: "NX"
    },
    {
        name: "CNC Programming",
        group: "Engineering",
        mono: "CNC"
    },
    {
        name: "GD&T",
        group: "Engineering",
        mono: "GD"
    },
    {
        name: "3D Printing",
        group: "Engineering",
        mono: "3D"
    },
    {
        name: "Drone Technology",
        group: "Engineering",
        mono: "UAV"
    },
    {
        name: "Product Design",
        group: "Engineering",
        mono: "PD"
    },
    {
        name: "Manufacturing",
        group: "Engineering",
        mono: "MF"
    },
    {
        name: "Python",
        group: "Digital",
        mono: "Py"
    },
    {
        name: "SQL",
        group: "Digital",
        mono: "SQL"
    },
    {
        name: "IoT",
        group: "Digital",
        mono: "IoT"
    },
    {
        name: "GitHub",
        group: "Tools",
        mono: "GH"
    },
    {
        name: "VS Code",
        group: "Tools",
        mono: "VS"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/lib/scene.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Scroll range for a section held inside a Scene.
 *
 * A Scene renders two siblings: a sticky `[data-scene]` hold, then a
 * `[data-runway]` spacer that owns the scene's extra scroll distance.
 *
 * A scroll-driven interior CANNOT trigger off the section itself: the section
 * lives inside the sticky hold, so once it sticks its measured position stops
 * tracking the document and ScrollTrigger resolves start/end against a frozen
 * box — progress jams at 1. The runway is in normal flow, so it is the honest
 * ruler for "how far through this scene are we".
 *
 * With the runway as trigger:
 *   start "top bottom"   → the instant the hold sticks
 *   end   "bottom bottom" → exactly one runway later
 *
 * so progress runs 0→1 across precisely the scene's runway, and is scrubbable
 * at every pixel. Sections without a runway fall back to their own box.
 */ __turbopack_context__.s([
    "sceneScrub",
    ()=>sceneScrub
]);
function sceneScrub(el) {
    const hold = el.closest("[data-scene]");
    const next = hold?.nextElementSibling ?? null;
    const runway = next instanceof HTMLElement && next.hasAttribute("data-runway") ? next : null;
    return runway ? {
        trigger: runway,
        start: "top bottom",
        end: "bottom bottom"
    } : {
        trigger: el,
        start: "top top",
        end: "bottom top"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=-hareesh-Portfolio-master_0owi5qt._.js.map