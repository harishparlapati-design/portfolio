(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Client half of the case study. The route stays a server component so
   generateStaticParams / generateMetadata keep working; everything the
   reader sees lives here, where the language context is available.

   The English study is the base record and the French one is layered over
   it, so a partially translated study still renders — untranslated fields
   fall through to English instead of disappearing. */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/content/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/app/work/[slug]/case.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CaseView({ slug }) {
    _s();
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const project = __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].find((p)=>p.slug === slug);
    if (!project) return null; /* the server component already called notFound() */ 
    const fr = lang === "fr" ? project.fr : undefined;
    const study = {
        ...project.study,
        ...fr?.study ?? {}
    };
    const tags = fr?.tags ?? project.tags;
    const idx = __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].indexOf(project);
    const next = __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"][(idx + 1) % __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#work",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].back,
                        children: t("case.back")
                    }, void 0, false, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barRight,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                                children: [
                                    "HAREESH",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 40,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                                children: [
                                    t("case.kicker"),
                                    " · ",
                                    project.year,
                                    project.award ? ` · ${project.award}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, project, "title")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].oneLiner,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, project, "oneLiner")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.role")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: study.role
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.timeline")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: study.timeline
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.focus")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: tags.join(" · ")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    project.site && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.site")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].siteLink,
                                                    href: project.site.url,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: [
                                                        project.site.label,
                                                        " ↗"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    project.repo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.repo")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].siteLink,
                                                    href: project.repo,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "GitHub ↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            project.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cover,
                                style: {
                                    background: project.cover.bg,
                                    color: project.cover.ink === "light" ? "#fff" : "var(--ink)"
                                },
                                children: project.cover.src && project.cover.variant === "photo" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverPhoto,
                                    src: project.cover.src,
                                    alt: project.coverLabel,
                                    style: project.cover.focus ? {
                                        objectPosition: project.cover.focus
                                    } : undefined
                                }, void 0, false, {
                                    fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this) : project.cover.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverBrand,
                                    src: project.cover.src,
                                    alt: project.coverLabel,
                                    style: {
                                        aspectRatio: project.cover.aspect ?? 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverMark,
                                    children: project.cover.mark
                                }, void 0, false, {
                                    fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cover,
                                children: [
                                    "▢  ",
                                    project.coverLabel,
                                    " — ",
                                    t("case.cover")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.context")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                                children: study.context
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.problem")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].problem,
                                children: study.problem
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.process")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].steps,
                                children: study.process.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].step,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepN,
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: s.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: s.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.decisions")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decisions,
                                children: study.decisions.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decision,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: d.title
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: d.why
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.outcome")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outcomes,
                                children: study.outcomes.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outcome,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            o
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            study.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].note,
                                children: study.note
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 189,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.reflection")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reflection,
                                children: [
                                    "“",
                                    study.reflection,
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footNav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#work",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].back,
                                children: t("case.all")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/work/${next.slug}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: t("case.next")
                                    }, void 0, false, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, next, "title"),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 206,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(CaseView, "IUbGXjc/X1wYv1u8xPTk69mj8NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = CaseView;
var _c;
__turbopack_context__.k.register(_c, "CaseView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-Gireesh-Portfolio-master/app/work/[slug]/case.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "back": "case-module__LlQLpW__back",
  "bar": "case-module__LlQLpW__bar",
  "barRight": "case-module__LlQLpW__barRight",
  "body": "case-module__LlQLpW__body",
  "cover": "case-module__LlQLpW__cover",
  "coverBrand": "case-module__LlQLpW__coverBrand",
  "coverMark": "case-module__LlQLpW__coverMark",
  "coverPhoto": "case-module__LlQLpW__coverPhoto",
  "decision": "case-module__LlQLpW__decision",
  "decisions": "case-module__LlQLpW__decisions",
  "footNav": "case-module__LlQLpW__footNav",
  "hero": "case-module__LlQLpW__hero",
  "kicker": "case-module__LlQLpW__kicker",
  "logo": "case-module__LlQLpW__logo",
  "meta": "case-module__LlQLpW__meta",
  "nextLink": "case-module__LlQLpW__nextLink",
  "note": "case-module__LlQLpW__note",
  "oneLiner": "case-module__LlQLpW__oneLiner",
  "outcome": "case-module__LlQLpW__outcome",
  "outcomes": "case-module__LlQLpW__outcomes",
  "page": "case-module__LlQLpW__page",
  "problem": "case-module__LlQLpW__problem",
  "reflection": "case-module__LlQLpW__reflection",
  "rise": "case-module__LlQLpW__rise",
  "secLabel": "case-module__LlQLpW__secLabel",
  "section": "case-module__LlQLpW__section",
  "siteLink": "case-module__LlQLpW__siteLink",
  "step": "case-module__LlQLpW__step",
  "stepN": "case-module__LlQLpW__stepN",
  "steps": "case-module__LlQLpW__steps",
  "title": "case-module__LlQLpW__title",
  "wrap": "case-module__LlQLpW__wrap",
});
}),
"[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "on": "LanguageToggle-module__iWU5XG__on",
  "opt": "LanguageToggle-module__iWU5XG__opt",
  "thumb": "LanguageToggle-module__iWU5XG__thumb",
  "toggle": "LanguageToggle-module__iWU5XG__toggle",
});
}),
"[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LanguageToggle() {
    _s();
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
        role: "group",
        "aria-label": "Language",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb,
                style: {
                    transform: `translateX(${lang === "fr" ? "100%" : "0%"})`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            [
                "en",
                "fr"
            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opt} ${lang === l ? __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on : ""}`,
                    onClick: ()=>setLang(l),
                    "aria-pressed": lang === l,
                    lang: l,
                    children: l.toUpperCase()
                }, l, false, {
                    fileName: "[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(LanguageToggle, "bo49fKWoYd/YYtFR+MvJoYnk/BE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-Gireesh-Portfolio-master/content/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
            mark: "CRANKSHAFT"
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
            mark: "ASSEMBLY"
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
            mark: "CAD"
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
"[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent = 'none') {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes, prefetchIntent);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const prefetchIntent = prefetchProp === false ? 'none' : prefetchProp === true ? 'full' : 'auto';
    const fetchStrategy = prefetchIntent !== 'none' ? getFetchStrategyFromPrefetchIntent(prefetchIntent) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        const { warnOnce } = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
        if (props.locale) {
            warnOnce('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Capture the Owner Stack during render so dev-only warnings emitted later
    // at navigation time can be associated with the JSX that created
    // this <Link>.
    const ownerStack = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus, ownerStack);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus,
        ownerStack
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            const { errorOnce } = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
            errorOnce('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchIntent(prefetchIntent) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchIntent === 'auto' ? _types.FetchStrategy.PPR : _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
"[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>{
    // Fast path: an absolute URL must start with a letter (the scheme).
    // Check for a-z and A-Z without the cost of the regex.
    const c = url.charCodeAt(0);
    const isLetter = c >= 65 /* A */  && c <= 90 || c >= 97 /* a */  && c <= 122;
    /* z */ if (!isLetter) {
        return false;
    }
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1035",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/-Gireesh-Portfolio-master/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
]);

//# sourceMappingURL=-Gireesh-Portfolio-master_1g18knp._.js.map