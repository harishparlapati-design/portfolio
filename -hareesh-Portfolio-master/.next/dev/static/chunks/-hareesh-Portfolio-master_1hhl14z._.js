(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/-hareesh-Portfolio-master/components/layout/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/lib/lenis.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SmoothScroll({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            let lenis = null;
            let raf = null;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) {
                lenis = new __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    lerp: 0.1,
                    wheelMultiplier: 1
                });
                lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
                raf = ({
                    "SmoothScroll.useEffect": (time)=>lenis.raf(time * 1000)
                })["SmoothScroll.useEffect"];
                __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(raf);
                __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.lagSmoothing(0);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLenis"])(lenis);
            }
            /* delegated: catches every same-page anchor on the site */ const onClick = {
                "SmoothScroll.useEffect.onClick": (e)=>{
                    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
                    const link = e.target?.closest?.("a[href]");
                    const href = link?.getAttribute("href");
                    if (!href || !href.startsWith("#")) return;
                    e.preventDefault();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToHash"])(href);
                }
            }["SmoothScroll.useEffect.onClick"];
            document.addEventListener("click", onClick);
            /* honour a hash present on first load */ if (window.location.hash) {
                const hash = window.location.hash;
                requestAnimationFrame({
                    "SmoothScroll.useEffect": ()=>setTimeout({
                            "SmoothScroll.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToHash"])(hash)
                        }["SmoothScroll.useEffect"], 60)
                }["SmoothScroll.useEffect"]);
            }
            return ({
                "SmoothScroll.useEffect": ()=>{
                    document.removeEventListener("click", onClick);
                    if (raf) __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(raf);
                    lenis?.destroy();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLenis"])(null);
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/-hareesh-Portfolio-master/components/layout/SmoothScroll.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/lib/gsap.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DUR",
    ()=>DUR,
    "EASE",
    ()=>EASE,
    "STAGGER",
    ()=>STAGGER,
    "prefersReducedMotion",
    ()=>prefersReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const EASE = {
    outExpo: "expo.out",
    softInOut: "power3.inOut",
    settle: "power2.out"
};
const DUR = {
    fast: 0.2,
    base: 0.4,
    slow: 0.8,
    reveal: 1.0
};
const STAGGER = 0.07;
const prefersReducedMotion = ()=>("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/lib/i18n.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DICT",
    ()=>DICT,
    "L",
    ()=>L,
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLang",
    ()=>useLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/-hareesh-Portfolio-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const DICT = {
    /* ---------------- nav ---------------- */ "nav.home": {
        en: "Home",
        fr: "Accueil"
    },
    "nav.about": {
        en: "About",
        fr: "À propos"
    },
    "nav.work": {
        en: "Work",
        fr: "Projets"
    },
    "nav.contact": {
        en: "Contact",
        fr: "Contact"
    },
    "nav.menu": {
        en: "Open menu",
        fr: "Ouvrir le menu"
    },
    "nav.close": {
        en: "Close menu",
        fr: "Fermer le menu"
    },
    /* ---------------- intro ---------------- */ "intro.scroll": {
        en: "Scroll to enter",
        fr: "Faites défiler pour entrer"
    },
    /* ---------------- hero ---------------- */ "hero.kicker": {
        en: "Mechanical Designer",
        fr: "Mechanical Designer"
    },
    "hero.h1a": {
        en: "Engineering ideas that",
        fr: "Des produits qui semblent"
    },
    "hero.h1aEm": {
        en: "work.",
        fr: "évidents."
    },
    "hero.h1b": {
        en: "Design that",
        fr: "Un design qui ne l’"
    },
    "hero.h1bEm": {
        en: "works.",
        fr: "est pas."
    },
    "hero.sub": {
        en: "I develop mechanical design concepts through CAD modeling, product thinking, manufacturing awareness and continuous hands-on learning.",
        fr: "Je conçois des produits numériques de bout en bout — recherche, parcours, interfaces, systèmes — avec une obsession : rendre le complexe évident."
    },
    "hero.cta1": {
        en: "View My Projects",
        fr: "Voir mes projets"
    },
    "hero.cta2": {
        en: "About Me",
        fr: "Ma façon de travailler"
    },
    "hero.scroll": {
        en: "Scroll to Explore",
        fr: "Faites défiler"
    },
    "stat.projects": {
        en: "Projects & Models",
        fr: "Projets & modèles"
    },
    "stat.years": {
        en: "CAD Tools",
        fr: "Outils CAO"
    },
    "stat.countries": {
        en: "Industrial Internships",
        fr: "Stages industriels"
    },
    "stat.satisfaction": {
        en: "Certifications",
        fr: "Certifications"
    },
    "stat.degree": {
        en: "B.Tech Degree",
        fr: "Diplôme B.Tech"
    },
    "stat.cadTools": {
        en: "CAD Tools",
        fr: "Outils CAO"
    },
    "stat.internships": {
        en: "Internships",
        fr: "Stages"
    },
    "stat.certifications": {
        en: "Credentials",
        fr: "Certifications"
    },
    /* ---------------- about ---------------- */ "about.eyebrow": {
        en: "About",
        fr: "À propos"
    },
    "about.h2a": {
        en: "Engineering is how I think —",
        fr: "Le design, c’est ma façon de penser —"
    },
    "about.h2b": {
        en: "design is how I",
        fr: "le business, ma façon de la"
    },
    "about.h2Em": {
        en: "build",
        fr: "diriger"
    },
    "about.h2c": {
        en: "it.",
        fr: "."
    },
    "about.m1": {
        en: "B.Tech Mechanical Engineering",
        fr: "Mechanical CAD & Engineering Learning"
    },
    "about.m2": {
        en: "CAD and mechanical design learning",
        fr: "Ans d’expérience produit transversale"
    },
    "about.m3": {
        en: "Hands-on industrial internships",
        fr: "Revenus générés par un travail orienté conversion"
    },
    "about.m4": {
        en: "Tonnes of CO₂ the product I design builds to avoid by 2050",
        fr: "Tonnes de CO₂ que le produit que je conçois vise à éviter d’ici 2050"
    },
    "about.edu": {
        en: "B.Tech Mechanical Engineering · JNTUA College of Engineering, Pulivendula · 2022–2026 · CGPA 7.0",
        fr: "B.Tech Mechanical Engineering · JNTUA College of Engineering, Pulivendula · 2022–2026 · CGPA 7.0"
    },
    "about.cta": {
        en: "Explore My Projects",
        fr: "Découvrir mes projets"
    },
    /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */ "journey.eyebrow": {
        en: "My Journey",
        fr: "Mon parcours"
    },
    "journey.enter": {
        en: "Scroll to travel",
        fr: "Faites défiler pour avancer"
    },
    "journey.chapter": {
        en: "Chapter",
        fr: "Chapitre"
    },
    "journey.lede": {
        en: "From mechanical engineering education to industrial exposure and CAD training — the journey toward becoming a professional mechanical designer.",
        fr: "De la formation en génie mécanique à la pratique industrielle et à la CAO."
    },
    /* ---------------- design stack ---------------- */ "stack.eyebrow": {
        en: "Toolkit",
        fr: "Outils"
    },
    "stack.h2": {
        en: "My Design",
        fr: "Ma boîte à"
    },
    "stack.h2Em": {
        en: "Stack.",
        fr: "outils."
    },
    "stack.lede": {
        en: "The tools I use to model, draft, design and explore engineering ideas — from sketches and assemblies to product-development concepts.",
        fr: "Les outils avec lesquels je recherche, conçois, prototype, collabore et livre — du premier croquis au code en production."
    },
    "stack.count": {
        en: "tools",
        fr: "outils"
    },
    "stack.disciplines": {
        en: "disciplines",
        fr: "disciplines"
    },
    /* ---------------- work ---------------- */ "work.eyebrow": {
        en: "Featured Work",
        fr: "Projets sélectionnés"
    },
    "work.h2a": {
        en: "Selected projects,",
        fr: "Des projets choisis,"
    },
    "work.h2b": {
        en: "designed to",
        fr: "conçus pour être"
    },
    "work.h2Em": {
        en: "ship.",
        fr: "livrés."
    },
    "work.lede": {
        en: "Mechanical CAD, product design, additive manufacturing and engineering projects — each project building practical design capability.",
        fr: "UX produit, stratégie produit, design de données et de systèmes — chaque projet une compétence différente, une seule pratique."
    },
    "work.open": {
        en: "Open case study",
        fr: "Voir l’étude de cas"
    },
    "work.hint": {
        en: "SCROLL TO BROWSE",
        fr: "FAITES DÉFILER"
    },
    /* ---------------- experience ---------------- */ "exp.eyebrow": {
        en: "Experience",
        fr: "Expérience"
    },
    "exp.h2": {
        en: "Where I built my",
        fr: "Là où j’ai forgé mon"
    },
    "exp.h2Em": {
        en: "engineering practice.",
        fr: "jugement."
    },
    "exp.worked": {
        en: "What I worked on",
        fr: "Ce sur quoi j’ai travaillé"
    },
    "exp.impact": {
        en: "Impact",
        fr: "Impact"
    },
    "exp.tools": {
        en: "Tools & skills",
        fr: "Outils & compétences"
    },
    "exp.hint": {
        en: "SCROLL · CLICK TO JUMP",
        fr: "DÉFILER · CLIQUER POUR NAVIGUER"
    },
    "type.Internship": {
        en: "Internship",
        fr: "Stage"
    },
    "type.Full-time": {
        en: "Full-time",
        fr: "Temps plein"
    },
    "type.Hackathon": {
        en: "Hackathon",
        fr: "Hackathon"
    },
    "type.Freelance": {
        en: "Freelance",
        fr: "Freelance"
    },
    /* ---------------- credentials ---------------- */ "cert.introLabel": {
        en: "Introduction",
        fr: "Introduction"
    },
    "cert.introTitle1": {
        en: "VERIFIED",
        fr: "TITRES"
    },
    "cert.introTitle2": {
        en: "CREDENTIALS",
        fr: "VÉRIFIÉS"
    },
    "cert.introBody": {
        en: "Continuous, applied learning across data, design, marketing and AI — the technical base underneath the product work.",
        fr: "Un apprentissage continu et appliqué en données, design, marketing et IA — la base technique du travail produit."
    },
    "cert.introNote": {
        en: "Five programmes · Coursera, LinkedIn Learning and hands-on portfolio projects.",
        fr: "Cinq programmes · Coursera, LinkedIn Learning et projets concrets."
    },
    "cert.eyebrow": {
        en: "Credentials",
        fr: "Titres & certifications"
    },
    "cert.h2": {
        en: "Credentials",
        fr: "Certifications"
    },
    "cert.lede": {
        en: "Professional certifications and credentials earned throughout my design and technology journey.",
        fr: "Les certifications et titres professionnels obtenus tout au long de mon parcours en design et en technologie."
    },
    "cert.certified": {
        en: "Certified",
        fr: "Certifié"
    },
    "cert.brandRole": {
        en: "Mechanical Designer",
        fr: "Mechanical Designer"
    },
    "cert.issuerTBC": {
        en: "Issuer — to confirm",
        fr: "Organisme — à confirmer"
    },
    "cert.certification": {
        en: "Certification",
        fr: "Certification"
    },
    "cert.verified": {
        en: "✓ Verified",
        fr: "✓ Vérifié"
    },
    "cert.onRequest": {
        en: "Credential on request",
        fr: "Justificatif sur demande"
    },
    "cert.issuedBy": {
        en: "Issued by",
        fr: "Délivré par"
    },
    "cert.year": {
        en: "Year",
        fr: "Année"
    },
    "cert.id": {
        en: "Credential ID",
        fr: "N° de justificatif"
    },
    "cert.tbc": {
        en: "To confirm",
        fr: "À confirmer"
    },
    "cert.skills": {
        en: "Skills",
        fr: "Compétences"
    },
    "cert.verify": {
        en: "Verify credential ↗",
        fr: "Vérifier le justificatif ↗"
    },
    "cert.foot": {
        en: "Credentials",
        fr: "Titres"
    },
    /* ---------------- gallery — the people behind the work ---------------- */ "gallery.eyebrow": {
        en: "The Archive",
        fr: "L’archive"
    },
    "gallery.h2a": {
        en: "The people behind",
        fr: "Celles et ceux derrière"
    },
    "gallery.h2Em": {
        en: "the work",
        fr: "le travail"
    },
    "gallery.lede": {
        en: "The people, moments and experiences that shaped the work behind the screen.",
        fr: "Les personnes, les moments et les expériences qui ont façonné le travail derrière l’écran."
    },
    "gallery.alt": {
        en: "A moment with the people behind the work",
        fr: "Un moment avec celles et ceux derrière le travail"
    },
    "gallery.frames": {
        en: "Frames",
        fr: "Images"
    },
    "gallery.hint": {
        en: "Scroll to travel the archive",
        fr: "Faites défiler pour parcourir l’archive"
    },
    /* ---------------- connect ---------------- */ "connect.eyebrow": {
        en: "Let’s Connect",
        fr: "Restons en contact"
    },
    "connect.h2a": {
        en: "Let’s build what’s",
        fr: "Créons ce qui"
    },
    "connect.h2Em": {
        en: "next.",
        fr: "vient."
    },
    "connect.lede": {
        en: "I’m open to mechanical design opportunities, internships, collaborations and engineering projects where I can apply CAD, manufacturing knowledge and design thinking.",
        fr: "Je suis ouvert aux postes en product design, aux collaborations et aux bonnes conversations — si vous construisez quelque chose que les gens devraient adorer, parlons-en."
    },
    "connect.cta": {
        en: "Contact Me",
        fr: "Démarrer la conversation"
    },
    "connect.credit": {
        en: "Designed & Developed by",
        fr: "Conçu & développé par"
    },
    "connect.top": {
        en: "Back to top ↑",
        fr: "Haut de page ↑"
    },
    /* ---------------- case study (/work/[slug]) ---------------- */ "case.back": {
        en: "← Back to work",
        fr: "← Retour aux projets"
    },
    "case.kicker": {
        en: "Case Study",
        fr: "Étude de cas"
    },
    "case.role": {
        en: "Role",
        fr: "Rôle"
    },
    "case.timeline": {
        en: "Timeline",
        fr: "Période"
    },
    "case.focus": {
        en: "Focus",
        fr: "Focus"
    },
    "case.site": {
        en: "Live product",
        fr: "Produit en ligne"
    },
    "case.repo": {
        en: "Source",
        fr: "Code source"
    },
    "case.cover": {
        en: "COVER",
        fr: "VISUEL"
    },
    "case.context": {
        en: "Context",
        fr: "Contexte"
    },
    "case.problem": {
        en: "The Problem",
        fr: "Le problème"
    },
    "case.process": {
        en: "Process",
        fr: "Démarche"
    },
    "case.decisions": {
        en: "Design Decisions",
        fr: "Décisions de design"
    },
    "case.outcome": {
        en: "Outcome",
        fr: "Résultats"
    },
    "case.reflection": {
        en: "Reflection",
        fr: "Ce que j’en retire"
    },
    "case.all": {
        en: "← All projects",
        fr: "← Tous les projets"
    },
    "case.next": {
        en: "Next project",
        fr: "Projet suivant"
    },
    /* ---------------- lab (/tunnel) ---------------- */ "lab.back": {
        en: "← PORTFOLIO",
        fr: "← PORTFOLIO"
    },
    "lab.hint": {
        en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
        fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS"
    },
    /* ---------------- 404 ---------------- */ "nf.label": {
        en: "404 — NOT FOUND",
        fr: "404 — PAGE INTROUVABLE"
    },
    "nf.h1": {
        en: "This page went",
        fr: "Cette page a quitté"
    },
    "nf.h1Em": {
        en: "off the grid.",
        fr: "les radars."
    },
    "nf.cta": {
        en: "Back to the portfolio →",
        fr: "Retour au portfolio →"
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    lang: "en",
    setLang: ()=>{},
    t: (k)=>DICT[k]?.en ?? k
});
function LanguageProvider({ children }) {
    _s();
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const saved = window.localStorage.getItem("lang");
            if (saved === "en" || saved === "fr") {
                setLangState(saved);
                document.documentElement.lang = saved;
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLang = (l)=>{
        setLangState(l);
        try {
            window.localStorage.setItem("lang", l);
        } catch  {
        /* private mode — the choice simply won't persist */ }
        document.documentElement.lang = l;
    };
    const t = (k)=>DICT[k]?.[lang] ?? DICT[k]?.en ?? k;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang,
            setLang,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/-hareesh-Portfolio-master/lib/i18n.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "TspRo+eopijjxX4OT1zicYPxTno=");
_c = LanguageProvider;
const useLang = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f2d$hareesh$2d$Portfolio$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
};
_s1(useLang, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function L(lang, item, field) {
    if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
        return item.fr[field];
    }
    return item[field];
}
_c1 = L;
var _c, _c1;
__turbopack_context__.k.register(_c, "LanguageProvider");
__turbopack_context__.k.register(_c1, "L");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/-hareesh-Portfolio-master/lib/lenis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLenis",
    ()=>getLenis,
    "headerOffset",
    ()=>headerOffset,
    "scrollToHash",
    ()=>scrollToHash,
    "setLenis",
    ()=>setLenis
]);
/* Shared Lenis instance + one place that owns in-page anchor scrolling,
   so the fixed header can never cover the top of a section. */ let instance = null;
const setLenis = (l)=>{
    instance = l;
};
const getLenis = ()=>instance;
function headerOffset() {
    if (typeof document === "undefined") return 104;
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--nav-offset");
    const px = parseFloat(raw);
    return Number.isFinite(px) ? px : 104;
}
function scrollToHash(hash) {
    if (typeof document === "undefined") return;
    const toTop = hash === "#home" || hash === "#top" || hash === "#";
    const target = toTop ? null : document.querySelector(hash);
    if (!toTop && !target) return;
    const lenis = getLenis();
    if (lenis) {
        if (toTop) lenis.scrollTo(0, {
            duration: 1.1
        });
        else lenis.scrollTo(target, {
            offset: -headerOffset(),
            duration: 1.1
        });
    } else {
        /* reduced motion / no Lenis — scroll-margin-top in globals.css
       keeps the landing position correct here too */ if (toTop) window.scrollTo({
            top: 0
        });
        else target.scrollIntoView();
    }
    if (hash && hash !== "#") history.pushState(null, "", hash);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=-hareesh-Portfolio-master_1hhl14z._.js.map