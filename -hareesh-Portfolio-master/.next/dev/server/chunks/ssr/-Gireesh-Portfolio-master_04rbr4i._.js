module.exports = [
"[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Client half of the case study. The route stays a server component so
   generateStaticParams / generateMetadata keep working; everything the
   reader sees lives here, where the language context is available.

   The English study is the base record and the French one is layered over
   it, so a partially translated study still renders — untranslated fields
   fall through to English instead of disappearing. */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/content/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/lib/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/app/work/[slug]/case.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
function CaseView({ slug }) {
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const project = __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].find((p)=>p.slug === slug);
    if (!project) return null; /* the server component already called notFound() */ 
    const fr = lang === "fr" ? project.fr : undefined;
    const study = {
        ...project.study,
        ...fr?.study ?? {}
    };
    const tags = fr?.tags ?? project.tags;
    const idx = __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].indexOf(project);
    const next = __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"][(idx + 1) % __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#work",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].back,
                        children: t("case.back")
                    }, void 0, false, {
                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barRight,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                                children: [
                                    "HAREESH",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].kicker,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"])(lang, project, "title")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].oneLiner,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"])(lang, project, "oneLiner")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.role")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.timeline")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.focus")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    project.site && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.site")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].siteLink,
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
                                    project.repo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.repo")
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].siteLink,
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
                            project.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cover,
                                style: {
                                    background: project.cover.bg,
                                    color: project.cover.ink === "light" ? "#fff" : "var(--ink)"
                                },
                                children: project.cover.src && project.cover.variant === "photo" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverPhoto,
                                    src: project.cover.src,
                                    alt: project.coverLabel,
                                    style: project.cover.focus ? {
                                        objectPosition: project.cover.focus
                                    } : undefined
                                }, void 0, false, {
                                    fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this) : project.cover.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverBrand,
                                    src: project.cover.src,
                                    alt: project.coverLabel,
                                    style: {
                                        aspectRatio: project.cover.aspect ?? 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverMark,
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
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cover,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.context")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.problem")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].problem,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.process")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].steps,
                                children: study.process.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].step,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepN,
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: s.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.decisions")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decisions,
                                children: study.decisions.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decision,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: d.title
                                            }, void 0, false, {
                                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.outcome")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].outcomes,
                                children: study.outcomes.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].outcome,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            study.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].note,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.reflection")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflection,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footNav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#work",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].back,
                                children: t("case.all")
                            }, void 0, false, {
                                fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/work/${next.slug}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: t("case.next")
                                    }, void 0, false, {
                                        fileName: "[project]/-Gireesh-Portfolio-master/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"])(lang, next, "title"),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
}),
"[project]/-Gireesh-Portfolio-master/app/work/[slug]/case.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "on": "LanguageToggle-module__iWU5XG__on",
  "opt": "LanguageToggle-module__iWU5XG__opt",
  "thumb": "LanguageToggle-module__iWU5XG__thumb",
  "toggle": "LanguageToggle-module__iWU5XG__toggle",
});
}),
"[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/lib/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/-Gireesh-Portfolio-master/components/layout/LanguageToggle.module.css [app-ssr] (css module)");
"use client";
;
;
;
function LanguageToggle() {
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggle,
        role: "group",
        "aria-label": "Language",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumb,
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
            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].opt} ${lang === l ? __TURBOPACK__imported__module__$5b$project$5d2f2d$Gireesh$2d$Portfolio$2d$master$2f$components$2f$layout$2f$LanguageToggle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].on : ""}`,
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
}),
"[project]/-Gireesh-Portfolio-master/content/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=-Gireesh-Portfolio-master_04rbr4i._.js.map