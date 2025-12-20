module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/context.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const Context = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    currentUser: {
        username: null
    },
    activeComponent: 0,
    isNavDrawerOpen: false,
    showMortgageCalculator: false,
    showAffordabilityCalculator: false,
    showPricingWidget: false,
    showApplyNowWidget: false,
    mortgageRates: [],
    showMortgageResultsPage: false,
    mortgageScenario: null,
    showProductComparison: false
});
const __TURBOPACK__default__export__ = Context;
}),
"[project]/src/components/applyButton/ApplyButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
const ApplyNowButton = ({ mobile = false, className = "" })=>{
    const { dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const handleClick = ()=>{
        dispatch({
            type: "SHOW_APPLY_NOW_WIDGET",
            payload: true
        });
    };
    const buttonVariants = {
        hover: {
            scale: 1.04
        },
        tap: {
            scale: 0.96
        }
    };
    const classes = [
        "apply-button",
        mobile ? "apply-button--mobile" : "",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
        type: "button",
        className: classes,
        whileHover: "hover",
        whileTap: "tap",
        variants: buttonVariants,
        onClick: handleClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "apply-button__label",
            children: "Apply Now"
        }, void 0, false, {
            fileName: "[project]/src/components/applyButton/ApplyButton.jsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/applyButton/ApplyButton.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ApplyNowButton;
}),
"[project]/src/components/navbar/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-device-detect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context.jsx [app-ssr] (ecmascript)"); // Import the global context
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$ApplyButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/applyButton/ApplyButton.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const classNames = (...classes)=>classes.filter(Boolean).join(" ");
// MenuToggle Component for the animated menu button
const Path = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.path, {
        fill: "transparent",
        strokeWidth: "3",
        stroke: "#e2e8f0",
        strokeLinecap: "round",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/navbar/Navbar.jsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MenuToggle = ({ toggle })=>{
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]); // Use context to get the nav drawer state
    const isOpen = state.isNavDrawerOpen; // Get `isNavDrawerOpen` from context
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "navButton",
        type: "button",
        onClick: toggle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "23",
            height: "23",
            viewBox: "0 0 23 23",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Path, {
                    variants: {
                        closed: {
                            d: "M 2 2.5 L 20 2.5"
                        },
                        open: {
                            d: "M 3 16.5 L 17 2.5"
                        }
                    },
                    animate: isOpen ? "open" : "closed"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Path, {
                    d: "M 2 9.423 L 20 9.423",
                    variants: {
                        closed: {
                            opacity: 1
                        },
                        open: {
                            opacity: 0
                        }
                    },
                    animate: isOpen ? "open" : "closed",
                    transition: {
                        duration: 0.1
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Path, {
                    variants: {
                        closed: {
                            d: "M 2 16.346 L 20 16.346"
                        },
                        open: {
                            d: "M 3 2.5 L 17 16.346"
                        }
                    },
                    animate: isOpen ? "open" : "closed"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/Navbar.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/navbar/Navbar.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Navbar = ({ onNavClick, toggleDrawer, activeComponent, navItems, showHeader })=>{
    const [indicatorStyle, setIndicatorStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        left: 0
    });
    const navRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Update indicator position when active component changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (navRefs.current[activeComponent]) {
            const { width, left } = navRefs.current[activeComponent].getBoundingClientRect();
            const containerLeft = navRefs.current[0].parentElement.getBoundingClientRect().left;
            setIndicatorStyle({
                width,
                left: left - containerLeft
            });
        }
    }, [
        activeComponent
    ]);
    // Framer Motion variants
    const linkVariants = {
        hover: {
            scale: 1.06,
            color: "#38bdf8"
        }
    };
    // Handle navigation clicks
    const handleNavClick = (index)=>{
        onNavClick(index);
    };
    // Handle menu toggle
    const handleMenuToggle = ()=>{
        toggleDrawer(); // Toggle the nav drawer and update context state
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "navbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navbar__left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar__logo",
                        children: "ViewYourRate"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$ApplyButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        mobile: isMobile
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/Navbar.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navbar__links-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "navbar__links",
                        children: navItems.map(({ name, index })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.li, {
                                ref: (el)=>navRefs.current[index] = el,
                                variants: linkVariants,
                                whileHover: "hover",
                                className: classNames("navbar__link", index === activeComponent && "navbar__link--active"),
                                onClick: ()=>handleNavClick(index),
                                children: name
                            }, name, false, {
                                fileName: "[project]/src/components/navbar/Navbar.jsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.jsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        className: "navbar__indicator",
                        animate: {
                            width: indicatorStyle.width,
                            left: indicatorStyle.left
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.jsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/Navbar.jsx",
                lineNumber: 102,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuToggle, {
                toggle: handleMenuToggle
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.jsx",
                lineNumber: 133,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar/Navbar.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/src/components/navbar/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/Navbar.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/heroSection/HeroSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-device-detect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const HeroSection = ({ state, dispatch })=>{
    const heroStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: isMobile ? "100%" : "90vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden"
    };
    const overlayStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    };
    // Adjust content styles to be positioned correctly for mobile and desktop
    const contentStyles = {
        position: "absolute",
        top: isMobile ? "30%" : "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        color: "#f0f0f0",
        textAlign: "center",
        padding: isMobile ? "1rem" : "1.8rem",
        maxWidth: isMobile ? "90%" : "540px",
        width: "80%",
        borderRadius: "10px",
        background: "rgba(30, 30, 30, 0.85)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
    };
    const buttonContainerStyles = {
        marginTop: isMobile ? "1rem" : "1.8rem"
    };
    const buttonStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: isMobile ? "0.75rem" : "0.9rem",
        margin: "0.5rem 0",
        fontSize: isMobile ? "1rem" : "1.1rem",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        background: "#007bff",
        color: "#fff",
        boxShadow: "0 2px 12px white"
    };
    const iconStyles = {
        marginLeft: "0.5rem"
    };
    // Handle button clicks to show the PricingWidget
    const handleButtonClick = ()=>{
        dispatch({
            type: "SHOW_PRICING_WIDGET",
            payload: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: heroStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: overlayStyles
            }, void 0, false, {
                fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: contentStyles,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: isMobile ? "1.5rem" : "2.25rem"
                        },
                        children: "Unlock Your Best Rate"
                    }, void 0, false, {
                        fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: isMobile ? "0.9rem" : "0.95rem"
                        },
                        children: "We provide real-time access to premier wholesale lenders, delivering wholesale pricing instantly. No Credit Checks, just transparency and speed."
                    }, void 0, false, {
                        fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontStyle: "italic",
                            fontSize: isMobile ? "0.8rem" : "0.9rem"
                        },
                        children: "Get a free custom rate quote in seconds ⟶"
                    }, void 0, false, {
                        fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: buttonContainerStyles,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                style: buttonStyles,
                                onClick: handleButtonClick,
                                children: [
                                    "I'm looking to purchase",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowRight, {
                                        style: iconStyles
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                style: buttonStyles,
                                onClick: handleButtonClick,
                                whileHover: {
                                    scale: 1.05,
                                    backgroundColor: "#0056b3"
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: [
                                    "I'm looking to refinance",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowRight, {
                                        style: iconStyles
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "1rem",
                            fontSize: isMobile ? "0.8rem" : "0.85rem",
                            color: "#ccc"
                        },
                        children: "No impact on credit score • No hidden costs • No documents required"
                    }, void 0, false, {
                        fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/heroSection/HeroSection.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/heroSection/HeroSection.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeroSection;
}),
"[project]/src/components/heroSection/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$heroSection$2f$HeroSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/heroSection/HeroSection.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/applyButton/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$ApplyButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/applyButton/ApplyButton.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/ratesSection/PointHelpTooltip.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'prop-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
});
const fmtCurrency = (value)=>{
    if (!Number.isFinite(value)) {
        return currencyFormatter.format(0);
    }
    return currencyFormatter.format(Math.round(value));
};
const fmtNumber = (value, digits = 1)=>{
    if (!Number.isFinite(value)) {
        return 0;
    }
    return Number(value.toFixed(digits));
};
const toNumber = (value, fallback = 0)=>{
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
};
const PointHelpTooltip = ({ option, parOption, loanAmount, homePrice })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const numericLoanAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.max(0, toNumber(loanAmount, 0)), [
        loanAmount
    ]);
    const optionPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>toNumber(option?.points, 0), [
        option
    ]);
    const absPoints = Math.abs(optionPoints);
    const onePointValue = numericLoanAmount * 0.01;
    const pointsDollarValue = numericLoanAmount * (absPoints / 100);
    const scenarioHomePrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.max(0, toNumber(homePrice, 0)), [
        homePrice
    ]);
    const hasScenarioHomePrice = scenarioHomePrice > 0;
    const parPayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>toNumber(parOption?.monthlyPayment, 0), [
        parOption
    ]);
    const optionPayment = toNumber(option?.monthlyPayment, parPayment);
    const paymentDiff = parPayment - optionPayment;
    const { breakEvenMonths, breakEvenYears } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (absPoints === 0) {
            return {
                breakEvenMonths: null,
                breakEvenYears: null
            };
        }
        if (optionPoints > 0) {
            const monthlySavings = paymentDiff;
            if (monthlySavings > 0) {
                const months = pointsDollarValue / monthlySavings;
                return {
                    breakEvenMonths: Number.isFinite(months) ? months : null,
                    breakEvenYears: Number.isFinite(months) ? months / 12 : null
                };
            }
            return {
                breakEvenMonths: null,
                breakEvenYears: null
            };
        }
        if (optionPoints < 0) {
            const monthlyExtra = -paymentDiff;
            if (monthlyExtra > 0) {
                const months = pointsDollarValue / monthlyExtra;
                return {
                    breakEvenMonths: Number.isFinite(months) ? months : null,
                    breakEvenYears: Number.isFinite(months) ? months / 12 : null
                };
            }
        }
        return {
            breakEvenMonths: null,
            breakEvenYears: null
        };
    }, [
        absPoints,
        optionPoints,
        paymentDiff,
        pointsDollarValue
    ]);
    const hasBreakEven = Number.isFinite(breakEvenMonths) && breakEvenMonths > 0 && absPoints > 0;
    const closeTooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsOpen(false);
    }, []);
    const handlePointerDownOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (!isOpen) return;
        const triggerEl = triggerRef.current;
        const tooltipEl = tooltipRef.current;
        if (triggerEl && tooltipEl && !triggerEl.contains(event.target) && !tooltipEl.contains(event.target)) {
            closeTooltip();
        }
    }, [
        closeTooltip,
        isOpen
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (event.key === "Escape") {
            closeTooltip();
            triggerRef.current?.focus();
        }
    }, [
        closeTooltip
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            return undefined;
        }
        document.addEventListener("pointerdown", handlePointerDownOutside);
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("pointerdown", handlePointerDownOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        handleKeyDown,
        handlePointerDownOutside,
        isOpen
    ]);
    const handleMouseEnter = ()=>setIsOpen(true);
    const handleMouseLeave = ()=>setIsOpen(false);
    const handleFocus = ()=>setIsOpen(true);
    const handleBlur = (event)=>{
        if (tooltipRef.current && tooltipRef.current.contains(event.relatedTarget || null)) {
            return;
        }
        setIsOpen(false);
    };
    const toggleOpen = ()=>{
        setIsOpen((previous)=>!previous);
    };
    const paymentDifferenceCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!Number.isFinite(paymentDiff) || paymentDiff === 0) {
            return null;
        }
        const amount = fmtCurrency(Math.abs(paymentDiff));
        if (optionPoints > 0) {
            return `In exchange, your payment is about ${amount}/month lower than the par option.`;
        }
        if (optionPoints < 0) {
            return `In exchange, your payment is about ${amount}/month higher than the par option.`;
        }
        return null;
    }, [
        optionPoints,
        paymentDiff
    ]);
    const breakEvenCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!hasBreakEven) {
            return null;
        }
        const months = fmtNumber(breakEvenMonths, 0);
        const years = fmtNumber(breakEvenYears, 1);
        const amount = fmtCurrency(pointsDollarValue);
        if (optionPoints > 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Break-even:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "It would take about ",
                    months,
                    " months (~",
                    years,
                    " years) of lower payments to recover the ",
                    amount,
                    " you pay upfront. If you expect to keep this loan longer than that, paying points may save you money. If not, the par rate or a lender credit might be better."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                lineNumber: 179,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Break-even:"
                }, void 0, false, {
                    fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                "You’re essentially trading about ",
                amount,
                " of upfront savings for higher monthly payments. After about ",
                months,
                " months (~",
                years,
                " years), the extra payments add up to the amount of the credit. If you expect to refinance or move before then, this option can help reduce cash at closing. If you’ll keep the loan longer, par or a buydown may cost less over time."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
            lineNumber: 191,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }, [
        breakEvenMonths,
        breakEvenYears,
        hasBreakEven,
        optionPoints,
        pointsDollarValue
    ]);
    const tooltipHeading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (optionPoints > 0) {
            return "📉 What are points?";
        }
        if (optionPoints < 0) {
            return "💳 What is a lender credit?";
        }
        return "⚖️ What does par pricing mean?";
    }, [
        optionPoints
    ]);
    const optionLabel = option?.label ? option.label.toLowerCase() : "pricing";
    const loanAmountCopy = fmtCurrency(numericLoanAmount);
    const onePointCopy = fmtCurrency(onePointValue);
    const pointsCopy = fmtCurrency(pointsDollarValue);
    const formattedPoints = absPoints.toFixed(2);
    const homePriceCopy = fmtCurrency(scenarioHomePrice);
    const scenarioIntro = hasScenarioHomePrice ? `You’re comparing a home priced at ${homePriceCopy}. ` : "";
    const pointsSentence = optionPoints > 0 ? `This ${optionLabel} option uses ${formattedPoints} points, which works out to about ${pointsCopy} paid upfront.` : `This ${optionLabel} option gives you ${formattedPoints} points of lender credit—roughly ${pointsCopy} applied toward your closing costs.`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `point-help-tooltip ${isOpen ? "point-help-tooltip--open" : ""}`,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "point-help-tooltip__trigger",
                onClick: toggleOpen,
                onFocus: handleFocus,
                onBlur: handleBlur,
                "aria-expanded": isOpen,
                "aria-controls": tooltipId,
                "aria-label": `Learn about points for the ${option?.label || "pricing"} option`,
                ref: triggerRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiHelpCircle, {
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "point-help-tooltip__sr",
                        children: "More info"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                lineNumber: 234,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: tooltipId,
                ref: tooltipRef,
                role: "tooltip",
                className: "point-help-tooltip__bubble",
                "aria-hidden": !isOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "point-help-tooltip__heading",
                        children: tooltipHeading
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    optionPoints === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    scenarioIntro,
                                    "On your loan of ",
                                    loanAmountCopy,
                                    ", 1.00 point would equal ",
                                    onePointCopy,
                                    " either paid at closing or offered as a credit."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Choosing 0 points keeps things neutral—you’re not paying extra to buy down the rate, and you’re not receiving a lender credit. It’s the par baseline many borrowers start from when deciding what fits their plans."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    scenarioIntro,
                                    "On your loan of ",
                                    loanAmountCopy,
                                    ", 1.00 point equals",
                                    onePointCopy,
                                    ". ",
                                    pointsSentence
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            paymentDifferenceCopy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: paymentDifferenceCopy
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                                lineNumber: 277,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            breakEvenCopy
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
                lineNumber: 249,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ratesSection/PointHelpTooltip.jsx",
        lineNumber: 229,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
PointHelpTooltip.propTypes = {
    option: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        rate: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        monthlyPayment: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        points: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }).isRequired,
    parOption: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        rate: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        monthlyPayment: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        points: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }).isRequired,
    loanAmount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    homePrice: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};
const __TURBOPACK__default__export__ = PointHelpTooltip;
}),
"[project]/src/components/ratesSection/RateCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'prop-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$PointHelpTooltip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ratesSection/PointHelpTooltip.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const toNumeric = (value)=>{
    if (typeof value === "number") return value;
    if (typeof value === "string" && value.trim() !== "") {
        const parsed = parseFloat(value.replace(/[^0-9.-]/g, ""));
        return Number.isNaN(parsed) ? 0 : parsed;
    }
    return 0;
};
const formatPercentage = (value)=>`${value.toFixed(3)}%`;
const formatChange = (value)=>{
    if (value === 0) {
        return "0.000%";
    }
    const prefix = value > 0 ? "+" : "-";
    return `${prefix}${Math.abs(value).toFixed(3)}%`;
};
const formatPoints = (value)=>`${value.toFixed(3)}`;
const currencyFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
const formatCurrency = (value)=>{
    const numeric = toNumeric(value);
    if (!Number.isFinite(numeric)) {
        return value;
    }
    return `$${currencyFormatter.format(Math.max(0, Math.round(numeric)))}`;
};
const formatPointsDetail = (value)=>{
    const numeric = toNumeric(value);
    if (numeric > 0) {
        return `+${numeric.toFixed(2)} pts`;
    }
    if (numeric < 0) {
        return `${numeric.toFixed(2)} pts (credit)`;
    }
    return "0 pts";
};
const RateCard = (props)=>{
    const { purpose, product, rate, apr, change, points, size = "default", variant, lenderName, monthlyPayment, loanType, badges = [], ctaLabel = "Get Pre-Approved", onCtaClick, pricingOptions = [], loanAmount, homePrice, isExpanded: controlledExpanded, defaultExpanded = false, onToggle, onPricingOptionSelect } = props;
    const variantToUse = variant || (lenderName ? "offer" : "summary");
    const normalizedPricingOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.isArray(pricingOptions) ? pricingOptions.filter(Boolean) : [], [
        pricingOptions
    ]);
    const defaultOptionIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (normalizedPricingOptions.length === 0) {
            return null;
        }
        const recommendedIndex = normalizedPricingOptions.findIndex((option)=>option && option.isRecommended);
        return recommendedIndex >= 0 ? recommendedIndex : 0;
    }, [
        normalizedPricingOptions
    ]);
    const [selectedOptionIndex, setSelectedOptionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>defaultOptionIndex !== null ? defaultOptionIndex : null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (normalizedPricingOptions.length === 0) {
            setSelectedOptionIndex(null);
            return;
        }
        setSelectedOptionIndex((previousIndex)=>{
            if (previousIndex === null) {
                return defaultOptionIndex;
            }
            if (previousIndex >= normalizedPricingOptions.length) {
                return defaultOptionIndex;
            }
            return previousIndex;
        });
    }, [
        defaultOptionIndex,
        normalizedPricingOptions
    ]);
    const hasPricingOptions = normalizedPricingOptions.length > 0;
    const loanAmountValue = toNumeric(loanAmount);
    const homePriceValue = toNumeric(homePrice);
    const hasHomePrice = Number.isFinite(homePriceValue) && homePriceValue > 0;
    const parPricingOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!hasPricingOptions) {
            return null;
        }
        return normalizedPricingOptions.find((option)=>toNumeric(option?.points) === 0) || null;
    }, [
        hasPricingOptions,
        normalizedPricingOptions
    ]);
    const selectedOption = hasPricingOptions && selectedOptionIndex !== null ? normalizedPricingOptions[selectedOptionIndex] : null;
    const rateValue = toNumeric(selectedOption?.rate ?? rate);
    const aprValue = toNumeric(apr);
    const changeValue = toNumeric(change);
    const pointsValue = toNumeric(selectedOption?.points ?? points);
    const paymentValue = toNumeric(selectedOption?.monthlyPayment ?? monthlyPayment);
    const trend = changeValue > 0 ? "up" : changeValue < 0 ? "down" : "flat";
    const renderTrendIcon = ()=>{
        switch(trend){
            case "up":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowUpRight, {}, void 0, false, {
                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                    lineNumber: 156,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "down":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowDownRight, {}, void 0, false, {
                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                    lineNumber: 158,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiMinus, {}, void 0, false, {
                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                    lineNumber: 160,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const [internalExpanded, setInternalExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultExpanded);
    const isControlled = typeof controlledExpanded === "boolean";
    const expanded = isControlled ? controlledExpanded : internalExpanded;
    const handleToggle = ()=>{
        const nextExpanded = !expanded;
        if (!isControlled) {
            setInternalExpanded(nextExpanded);
        }
        if (onToggle) {
            onToggle(nextExpanded);
        }
    };
    if (variantToUse === "summary") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: `rate-card rate-card--${trend} rate-card--${size}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "rate-card__header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rate-card__purpose",
                            children: purpose
                        }, void 0, false, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `rate-card__trend-icon rate-card__trend-icon--${trend}`,
                            children: renderTrendIcon()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rate-card__body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "rate-card__product",
                            children: product
                        }, void 0, false, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rate-card__figures",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rate-card__figure",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rate-card__label",
                                            children: "Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rate-card__value",
                                            children: formatPercentage(rateValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rate-card__divider",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rate-card__figure",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rate-card__label",
                                            children: "APR"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rate-card__value",
                                            children: formatPercentage(aprValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "rate-card__footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rate-card__points",
                            children: [
                                "Points ",
                                formatPoints(pointsValue)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `rate-card__change rate-card__change--${trend}`,
                            children: [
                                renderTrendIcon(),
                                " ",
                                formatChange(changeValue)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
            lineNumber: 180,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const hasBadges = Array.isArray(badges) && badges.length > 0;
    const handleOptionSelect = (index)=>{
        if (!hasPricingOptions) {
            return;
        }
        const safeIndex = Math.max(0, Math.min(index, normalizedPricingOptions.length - 1));
        setSelectedOptionIndex(safeIndex);
        if (typeof onPricingOptionSelect === "function") {
            const option = normalizedPricingOptions[safeIndex];
            onPricingOptionSelect(option, safeIndex);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `rate-card rate-card--offer rate-card--${size} ${expanded ? "rate-card--expanded" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "rate-card__header rate-card__header--offer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rate-card__title-group",
                        children: [
                            loanType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rate-card__purpose",
                                children: loanType
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                lineNumber: 246,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "rate-card__lender",
                                children: lenderName
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasBadges ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rate-card__badges",
                        children: badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rate-card__badge",
                                children: badge
                            }, badge, false, {
                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                lineNumber: 252,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `rate-card__trend-icon rate-card__trend-icon--${trend}`,
                        children: renderTrendIcon()
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                lineNumber: 244,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rate-card__body rate-card__body--offer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rate-card__figures rate-card__figures--offer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rate-card__figure",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rate-card__label",
                                    children: "Rate"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rate-card__value rate-card__value--xl",
                                    children: formatPercentage(rateValue)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rate-card__divider",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rate-card__figure",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rate-card__label",
                                    children: "APR"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rate-card__value",
                                    children: formatPercentage(aprValue)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rate-card__divider",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rate-card__figure",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rate-card__label",
                                    children: "Payment"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rate-card__value",
                                    children: `${formatCurrency(paymentValue)}/mo`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                lineNumber: 266,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "rate-card__footer rate-card__footer--offer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rate-card__footer-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rate-card__points-group",
                                children: [
                                    hasHomePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rate-card__home-price",
                                        children: [
                                            "Based on ",
                                            formatCurrency(homePriceValue),
                                            " home value"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rate-card__points",
                                        children: formatPointsDetail(pointsValue)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rate-card__apr",
                                children: [
                                    "APR ",
                                    formatPercentage(aprValue)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasPricingOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "rate-card__pricing-toggle",
                        onClick: handleToggle,
                        "aria-expanded": expanded,
                        children: expanded ? "Hide pricing options" : "View pricing options"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                lineNumber: 291,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            hasPricingOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rate-card__pricing ${expanded ? "rate-card__pricing--open" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "rate-card__pricing-list",
                    children: normalizedPricingOptions.map((option, index)=>{
                        const optionKey = `${option?.label || "option"}-${index}`;
                        const isActive = index === selectedOptionIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `rate-card__pricing-option ${isActive ? "rate-card__pricing-option--active" : ""}`,
                                onClick: ()=>handleOptionSelect(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rate-card__pricing-option-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rate-card__pricing-label-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rate-card__pricing-label",
                                                        children: option?.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                                        lineNumber: 339,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    option?.isRecommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rate-card__pricing-recommended",
                                                        children: "Recommended"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                                        lineNumber: 343,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                                lineNumber: 338,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rate-card__pricing-rate",
                                                children: formatPercentage(toNumeric(option?.rate))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                                lineNumber: 348,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                        lineNumber: 337,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rate-card__pricing-option-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rate-card__pricing-points",
                                                children: [
                                                    formatPointsDetail(option?.points),
                                                    parPricingOption && Number.isFinite(loanAmountValue) && loanAmountValue > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$PointHelpTooltip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        option: option,
                                                        parOption: parPricingOption,
                                                        loanAmount: loanAmountValue,
                                                        homePrice: homePriceValue
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                                lineNumber: 353,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            option?.monthlyPayment !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rate-card__pricing-payment",
                                                children: `${formatCurrency(option?.monthlyPayment)}/mo`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                                lineNumber: 367,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                        lineNumber: 352,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                                lineNumber: 330,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, optionKey, false, {
                            fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                            lineNumber: 329,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                lineNumber: 318,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "rate-card__cta",
                onClick: ()=>onCtaClick?.(),
                children: ctaLabel
            }, void 0, false, {
                fileName: "[project]/src/components/ratesSection/RateCard.jsx",
                lineNumber: 380,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ratesSection/RateCard.jsx",
        lineNumber: 239,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
RateCard.propTypes = {
    purpose: PropTypes.string,
    product: PropTypes.string,
    rate: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    apr: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    change: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    points: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    size: PropTypes.string,
    variant: PropTypes.string,
    lenderName: PropTypes.string,
    monthlyPayment: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    loanType: PropTypes.string,
    badges: PropTypes.arrayOf(PropTypes.string),
    ctaLabel: PropTypes.string,
    onCtaClick: PropTypes.func,
    pricingOptions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        rate: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        points: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        monthlyPayment: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        isRecommended: PropTypes.bool
    })),
    isExpanded: PropTypes.bool,
    defaultExpanded: PropTypes.bool,
    onToggle: PropTypes.func,
    onPricingOptionSelect: PropTypes.func,
    loanAmount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    homePrice: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};
const __TURBOPACK__default__export__ = RateCard;
}),
"[project]/src/data/dummyRates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dummyRates",
    ()=>dummyRates
]);
const dummyRates = [
    {
        id: "conv-30",
        purpose: "Purchase",
        product: "30 Year Fixed",
        rate: 6.375,
        apr: 6.489,
        change: -0.035,
        points: 0.689
    },
    {
        id: "conv-15",
        purpose: "Purchase",
        product: "15 Year Fixed",
        rate: 5.875,
        apr: 5.942,
        change: -0.018,
        points: 0.412
    },
    {
        id: "jumbo-arm",
        purpose: "Purchase",
        product: "10/6 ARM Jumbo",
        rate: 6.125,
        apr: 6.271,
        change: 0.012,
        points: 0.328
    },
    {
        id: "fha-30",
        purpose: "Purchase",
        product: "30 Year FHA",
        rate: 6.0,
        apr: 6.214,
        change: -0.045,
        points: 0.235
    },
    {
        id: "va-30",
        purpose: "Purchase",
        product: "30 Year VA",
        rate: 5.75,
        apr: 5.913,
        change: 0.021,
        points: 0.155
    },
    {
        id: "usda-30",
        purpose: "Purchase",
        product: "30 Year USDA",
        rate: 5.99,
        apr: 6.102,
        change: -0.008,
        points: 0.204
    }
];
}),
"[project]/src/components/ratesSection/RatesSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/applyButton/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$ApplyButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/applyButton/ApplyButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RateCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ratesSection/RateCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyRates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyRates.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const RatesSection = ({ dispatch, state })=>{
    const handleCustomizeClick = ()=>{
        dispatch({
            type: "SHOW_PRICING_WIDGET",
            payload: true
        });
    };
    const rates = state?.mortgageRates?.length ? state.mortgageRates : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyRates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dummyRates"];
    const timestampLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const timestamp = new Date();
        return timestamp.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rates-section",
        "aria-labelledby": "rates-section-heading",
        style: {
            display: "flex",
            flexDirection: "row"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rates-section__apply",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$ApplyButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "rates-section__apply-button"
                }, void 0, false, {
                    fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rates-section__content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "rates-section__sidebar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rates-section__eyebrow",
                                children: "Today's Pricing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "rates-section-heading",
                                className: "rates-section__title",
                                children: "Track mortgage market movement in real time"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rates-section__subtitle",
                                children: "Preview a curated snapshot of our most requested programs before you tailor a quote with live Optimal Blue pricing."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rates-section__actions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "rates-section__cta",
                                    onClick: handleCustomizeClick,
                                    children: "Customize My Scenario"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rates-section__cards",
                        role: "list",
                        children: rates.map((rate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "listitem",
                                className: "rates-section__card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RateCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    ...rate
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, rate.id, false, {
                                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rates-section__meta",
                style: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rates-section__timestamp",
                        style: {
                            alignContent: "center",
                            fontWeight: "bold",
                            justifyContent: "center",
                            color: "white"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiClock, {
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Updated ",
                            timestampLabel,
                            " ET"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rates-section__disclaimer",
                        children: "Scenario assumes 740 FICO, 20% down, and $400k loan amount. Your rate may vary based on credit profile and program details."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ratesSection/RatesSection.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RatesSection;
}),
"[project]/src/components/ratesSection/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RatesSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ratesSection/RatesSection.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/pricingWidget/PricingWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const downPaymentOptions = [
    0,
    5,
    10,
    15,
    20,
    25,
    30,
    40
];
const occupancyOptions = [
    "Primary Residence",
    "Secondary Home",
    "Investment Property"
];
const propertyTypeOptions = [
    "Single Family",
    "Condominium",
    "Townhome",
    "Multi-Family"
];
const states = [
    "CA",
    "CO",
    "FL",
    "NY",
    "TX",
    "WA"
];
const classNames = (...classes)=>classes.filter(Boolean).join(" ");
const formatCurrency = (value)=>new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(Number.isFinite(value) ? value : 0);
const DotToggle = ({ label, value, onChange, yesText = "Yes", noText = "No" })=>{
    const renderOption = (optionValue, text)=>{
        const isActive = value === optionValue;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            role: "radio",
            "aria-checked": isActive,
            onClick: ()=>onChange(optionValue),
            className: classNames("pricing-widget__toggle-pill", isActive && "pricing-widget__toggle-pill--active"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pricing-widget__dot",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pricing-widget__dot-inner"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, optionValue, true, {
            fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pricing-widget__field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "pricing-widget__label",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pricing-widget__toggle-group",
                role: "radiogroup",
                "aria-label": label,
                children: [
                    renderOption("Yes", yesText),
                    renderOption("No", noText)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PricingWidget = ({ isVisible, onClose, onScenarioSubmit, onShowOptionsPage })=>{
    const [quoteType, setQuoteType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Purchase");
    const [purchasePrice, setPurchasePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(550000);
    const [downPaymentPercent, setDownPaymentPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [waiveEscrow, setWaiveEscrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("No");
    const [occupancy, setOccupancy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(occupancyOptions[0]);
    const [propertyType, setPropertyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(propertyTypeOptions[0]);
    const [stateSelection, setStateSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(states[0]);
    const [isMilitary, setIsMilitary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("No");
    const loanAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const price = Number(purchasePrice);
        const percent = Number(downPaymentPercent);
        if (Number.isNaN(price) || Number.isNaN(percent)) return 0;
        const downPaymentAmount = price * (percent / 100);
        const loanValue = Math.max(price - downPaymentAmount, 0);
        return Math.round(loanValue);
    }, [
        purchasePrice,
        downPaymentPercent
    ]);
    const widgetVariants = {
        hidden: {
            y: "100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.45,
                ease: "easeOut"
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                duration: 0.35,
                ease: "easeIn"
            }
        }
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        const numericPurchasePrice = Number(purchasePrice);
        const numericDownPaymentPercent = Number(downPaymentPercent);
        const downPaymentAmount = Number.isFinite(numericPurchasePrice) && Number.isFinite(numericDownPaymentPercent) ? Math.round(numericPurchasePrice * (numericDownPaymentPercent / 100)) : null;
        const baseScenario = {
            quoteType,
            purchasePrice: Number.isFinite(numericPurchasePrice) ? numericPurchasePrice : 0,
            loanAmount: Number.isFinite(loanAmount) ? loanAmount : 0,
            downPaymentPercent: Number.isFinite(numericDownPaymentPercent) ? numericDownPaymentPercent : 0,
            stateSelection,
            occupancy,
            propertyType,
            creditBand: undefined
        };
        const scenarioData = {
            ...baseScenario,
            downPaymentAmount,
            waiveEscrow,
            isMilitary,
            timestamp: new Date().toISOString()
        };
        console.log("Pricing scenario submitted:", scenarioData);
        if (typeof onScenarioSubmit === "function") {
            onScenarioSubmit(scenarioData);
        }
        if (typeof onShowOptionsPage === "function") {
            onShowOptionsPage(baseScenario);
        }
        if (typeof onClose === "function") {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            className: "pricing-widget__overlay",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                variants: widgetVariants,
                initial: "hidden",
                animate: "visible",
                exit: "exit",
                className: "pricing-widget",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "pricing-widget__close",
                        onClick: onClose,
                        "aria-label": "Close pricing widget",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiX, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pricing-widget__content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pricing-widget__form-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pricing-widget__header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pricing-widget__heading",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "pricing-widget__eyebrow",
                                                        children: "Get Your Quote Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "pricing-widget__title",
                                                        children: "Customize Your Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pricing-widget__quote-toggle",
                                                children: [
                                                    "Purchase",
                                                    "Refinance"
                                                ].map((type)=>{
                                                    const isActive = quoteType === type;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setQuoteType(type),
                                                        className: classNames("pricing-widget__quote-button", isActive && "pricing-widget__quote-button--active"),
                                                        children: type
                                                    }, type, false, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 200,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "pricing-widget__form",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pricing-widget__form-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pricing-widget__field",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "pricing-widget__label",
                                                                children: "Purchase Price"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 219,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "0",
                                                                step: "1000",
                                                                value: purchasePrice,
                                                                onChange: (e)=>setPurchasePrice(e.target.value),
                                                                className: "pricing-widget__input",
                                                                style: {
                                                                    width: "87%"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 222,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 218,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pricing-widget__field",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "pricing-widget__label",
                                                                children: "Down Payment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 234,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: downPaymentPercent,
                                                                onChange: (e)=>setDownPaymentPercent(e.target.value),
                                                                className: "pricing-widget__select",
                                                                children: downPaymentOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: option,
                                                                        children: `${option}% Down`
                                                                    }, option, false, {
                                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 237,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pricing-widget__field",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "pricing-widget__label",
                                                                children: "Loan Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 252,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formatCurrency(loanAmount),
                                                                readOnly: true,
                                                                style: {
                                                                    width: "87%"
                                                                },
                                                                className: classNames("pricing-widget__input", "pricing-widget__input--readonly")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 255,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotToggle, {
                                                        label: "Waive Escrow?",
                                                        value: waiveEscrow,
                                                        onChange: setWaiveEscrow
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 267,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pricing-widget__field",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "pricing-widget__label",
                                                                children: "Occupancy Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: occupancy,
                                                                onChange: (e)=>setOccupancy(e.target.value),
                                                                className: "pricing-widget__select",
                                                                children: occupancyOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: option,
                                                                        children: option
                                                                    }, option, false, {
                                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 277,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pricing-widget__field",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "pricing-widget__label",
                                                                children: "Property Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 291,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: propertyType,
                                                                onChange: (e)=>setPropertyType(e.target.value),
                                                                className: "pricing-widget__select",
                                                                children: propertyTypeOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: option,
                                                                        children: option
                                                                    }, option, false, {
                                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                        lineNumber: 300,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 294,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pricing-widget__field",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "pricing-widget__label",
                                                                children: "State"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 308,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: stateSelection,
                                                                onChange: (e)=>setStateSelection(e.target.value),
                                                                className: "pricing-widget__select",
                                                                children: states.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: option,
                                                                        children: option
                                                                    }, option, false, {
                                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                                lineNumber: 309,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 307,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotToggle, {
                                                        label: "Military / Veteran?",
                                                        value: isMilitary,
                                                        onChange: setIsMilitary,
                                                        yesText: "Yes",
                                                        noText: "No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 322,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "pricing-widget__cta",
                                                children: "Get Rates"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                lineNumber: 331,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pricing-widget__info-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "pricing-widget__info-title",
                                                children: "Instant Quote"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                lineNumber: 339,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "pricing-widget__info-text",
                                                children: "Get a real quote in seconds. Customize your scenario and instantly compare pricing options side-by-side."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                lineNumber: 340,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "pricing-widget__benefits",
                                        children: [
                                            "Simple info required for quote",
                                            "See all costs including third-party fees",
                                            "Compare multiple options at once",
                                            "Review your rate online"
                                        ].map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "pricing-widget__benefit",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiCheckCircle, {
                                                        size: 22,
                                                        className: "pricing-widget__benefit-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 353,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: benefit
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, benefit, true, {
                                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                                lineNumber: 352,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                        lineNumber: 345,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                                lineNumber: 337,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
                lineNumber: 169,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
            lineNumber: 163,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/pricingWidget/PricingWidget.jsx",
        lineNumber: 161,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PricingWidget;
}),
"[project]/src/components/pricingWidget/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pricingWidget$2f$PricingWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pricingWidget/PricingWidget.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/applyButton/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$ApplyButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/applyButton/ApplyButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RateCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ratesSection/RateCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyRates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyRates.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const RatesSectionMobile = ({ state, dispatch })=>{
    const rates = state?.mortgageRates?.length ? state.mortgageRates : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyRates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dummyRates"];
    const timestampLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const timestamp = new Date();
        return timestamp.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit"
        });
    }, []);
    const handleCustomizeClick = ()=>{
        dispatch({
            type: "SHOW_PRICING_WIDGET",
            payload: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rates-mobile",
        "aria-labelledby": "rates-mobile-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rates-mobile__top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rates-mobile__label-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rates-mobile__eyebrow",
                                children: "Today's Pricing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "rates-mobile-heading",
                                className: "rates-mobile__title",
                                children: "Live market snapshot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rates-mobile__timestamp",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiClock, {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Updated ",
                                    timestampLabel,
                                    " ET"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rates-mobile__actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "rates-mobile__compare",
                                onClick: handleCustomizeClick,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiSliders, {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Customize"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$ApplyButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                mobile: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rates-mobile__helper",
                children: "Scenario assumes 740 FICO, 20% down, and $400k loan amount. Your rate may vary based on credit profile and program details."
            }, void 0, false, {
                fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rates-mobile__cards",
                role: "list",
                children: rates.map((rate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "listitem",
                        className: "rates-mobile__card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RateCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            ...rate,
                            size: "compact"
                        }, void 0, false, {
                            fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, rate.id, false, {
                        fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RatesSectionMobile;
}),
"[project]/src/components/rateSectionMobile/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateSectionMobile$2f$RatesSectionMobile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/footer/Footer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-device-detect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const Footer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    // Common styles for both mobile and desktop
    const columnStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-start",
        marginBottom: isMobile ? "1rem" : 0,
        textAlign: isMobile ? "center" : "left"
    };
    const logoPlaceholderStyles = {
        width: "150px",
        height: "50px",
        backgroundColor: "#ccc",
        marginBottom: "1rem"
    };
    const resourcesListStyles = {
        listStyleType: "none",
        padding: 0,
        margin: 0
    };
    const resourceLinkStyles = {
        marginBottom: "0.5rem",
        color: "#333",
        textDecoration: "none"
    };
    const socialIconsStyles = {
        display: "flex",
        gap: "1rem",
        marginTop: "1rem",
        justifyContent: isMobile ? "center" : "flex-start"
    };
    const iconStyles = {
        color: "#666",
        fontSize: "1.5rem"
    };
    // Conditional styles for mobile and desktop
    const footerStyles = {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: isMobile ? "center" : "flex-start",
        padding: isMobile ? "1rem" : "2rem",
        backgroundColor: "#f9f9f9",
        borderTop: "1px solid #ddd",
        boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)"
    };
    const logosContainerStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "flex-start",
        gap: "1rem",
        marginTop: "1rem"
    };
    const logoStyles = {
        height: 40,
        objectFit: "contain"
    };
    const svgStyles = {
        width: "50px",
        height: "50px"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: footerStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: columnStyles,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: logoPlaceholderStyles
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "NMLS #2625844"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Your Home, Your Rate, Your Way."
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: socialIconsStyles,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaInstagram, {
                                style: iconStyles
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaYoutube, {
                                style: iconStyles
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaLinkedin, {
                                style: iconStyles
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaTiktok, {
                                style: iconStyles
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer/Footer.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: columnStyles,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "Resources"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: resourcesListStyles,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: resourceLinkStyles,
                                    children: "Shop rates"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: resourceLinkStyles,
                                    children: "Get a quote"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.jsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: resourceLinkStyles,
                                    children: "Reviews"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: resourceLinkStyles,
                                    children: "Calculators"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: resourceLinkStyles,
                                    children: "Meet our team"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.jsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: resourceLinkStyles,
                                    children: "NMLS consumer access"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.jsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer/Footer.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: columnStyles,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "Contact us"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaMapMarkerAlt, {}, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " 8004 Springmoss Drive",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Plano, TX 75025"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaEnvelope, {}, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                style: {
                                    color: "inherit",
                                    textDecoration: "none"
                                },
                                href: "https://mail.google.com/mail/?view=cm&fs=1&to=tmanriquez@viewyourrate.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "tmanriquez@viewyourrate.com"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "tel:+12146754530",
                        style: {
                            color: "#000",
                            textDecoration: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaPhone, {}, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " (214) 675-4530"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: logosContainerStyles,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/NMLS.png",
                                alt: "NMLS",
                                style: logoStyles
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "86",
                                height: "85",
                                viewBox: "0 0 86 85",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        "clip-path": "url(#clip0_204_2128)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M12.2119 65.5091H9.08145V66.7482H11.9566V67.7946H9.08145V69.3173H12.3508V70.3646H7.87407V64.4653H12.2119V65.5091ZM16.1705 68.7603L16.7623 69.3177C16.5565 69.4232 16.3281 69.4772 16.0969 69.4752C15.431 69.4752 14.4939 69.0651 14.4939 67.4141C14.4939 65.7631 15.431 65.353 16.0969 65.353C16.7623 65.353 17.6985 65.7631 17.6985 67.4141C17.6985 67.967 17.5918 68.3754 17.4277 68.681L16.8033 68.098L16.1705 68.7603ZM18.9561 70.1229L18.3136 69.5184C18.6752 69.0576 18.931 68.3842 18.931 67.4145C18.931 64.6465 16.877 64.3105 16.0964 64.3105C15.3164 64.3105 13.2632 64.6465 13.2632 67.4145C13.2632 70.1842 15.3164 70.5194 16.0964 70.5194C16.4404 70.5194 17.0489 70.455 17.6076 70.1234L18.307 70.791L18.9561 70.1229ZM24.7311 68.3022C24.7311 69.8526 23.7932 70.5189 22.3062 70.5189C21.7647 70.5189 20.9595 70.388 20.4338 69.805C20.1137 69.4461 19.9902 68.9654 19.9743 68.3754V64.4653H21.2311V68.292C21.2311 69.1162 21.7074 69.4756 22.2815 69.4756C23.1286 69.4756 23.4726 69.0655 23.4726 68.3507V64.4653H24.7315L24.7311 68.3022ZM28.0318 65.7966H28.0499L28.7797 68.1298H27.2742L28.0318 65.7966ZM26.9452 69.1453H29.1232L29.5015 70.365H30.8408L28.7638 64.4653H27.3417L25.2387 70.365H26.5364L26.9452 69.1453ZM33.0342 69.297H35.9666V70.3646H31.8003V64.4653H33.0342V69.297ZM40.6392 67.717V70.3646H39.4089V64.4653H40.6392V66.6992H42.9402V64.4653H44.1709V70.3646H42.9402V67.717H40.6392ZM46.5195 67.4141C46.5195 65.7631 47.4575 65.353 48.1207 65.353C48.7875 65.353 49.7245 65.7631 49.7245 67.4141C49.7245 69.0651 48.7875 69.4752 48.1207 69.4752C47.4575 69.4752 46.5195 69.0651 46.5195 67.4141ZM45.2888 67.4141C45.2888 70.1838 47.3437 70.5189 48.1207 70.5189C48.9043 70.5189 50.957 70.1838 50.957 67.4141C50.957 64.6461 48.9048 64.3101 48.1207 64.3101C47.3442 64.3101 45.2888 64.6461 45.2888 67.4141ZM56.8396 68.3022C56.8396 69.8526 55.9017 70.5189 54.4143 70.5189C53.8719 70.5189 53.0689 70.388 52.541 69.805C52.2213 69.4461 52.0974 68.9654 52.0828 68.3754V64.4653H53.3378V68.292C53.3378 69.1162 53.8159 69.4756 54.3922 69.4756C55.238 69.4756 55.5824 69.0655 55.5824 68.3507V64.4653H56.84L56.8396 68.3022ZM59.0943 68.5474C59.1053 68.8754 59.2707 69.5007 60.3458 69.5007C60.9279 69.5007 61.5783 69.3614 61.5783 68.7352C61.5783 68.277 61.1347 68.1522 60.5111 68.005L59.8779 67.8568C58.9219 67.6354 58.0029 67.4246 58.0029 66.1264C58.0029 65.4685 58.3587 64.3101 60.2717 64.3101C62.0806 64.3101 62.5643 65.4919 62.5731 66.2151H61.3887C61.3569 65.954 61.2577 65.3278 60.1813 65.3278C59.7143 65.3278 59.1556 65.5002 59.1556 66.0343C59.1556 66.4968 59.5335 66.5916 59.7774 66.6494L61.2167 67.0026C62.0219 67.2006 62.7601 67.5296 62.7601 68.5884C62.7601 70.365 60.9539 70.5194 60.4357 70.5194C58.2851 70.5194 57.9156 69.2785 57.9156 68.5478L59.0943 68.5474ZM65.002 70.3646H63.7734V64.4653H65.002V70.3646ZM69.925 64.4653H71.0737V70.3646H69.843L67.4375 66.1564H67.4168V70.3646H66.268V64.4653H67.5658L69.9043 68.5734H69.925V64.4653ZM75.1977 67.1847H77.6601V70.3646H76.8403L76.7173 69.6255C76.4055 69.9836 75.9535 70.5185 74.8767 70.5185C73.4563 70.5185 72.1678 69.5003 72.1678 67.4308C72.1678 65.8221 73.0634 64.3008 75.0487 64.3096C76.8588 64.3096 77.5741 65.4826 77.6358 66.2993H76.4051C76.4051 66.0686 75.9848 65.3278 75.1157 65.3278C74.2346 65.3278 73.4224 65.935 73.4224 67.4458C73.4224 69.0571 74.3017 69.4752 75.1391 69.4752C75.4103 69.4752 76.3165 69.3702 76.5687 68.1774H75.1977V67.1847ZM8.84421 76.3755C8.84421 74.7245 9.78039 74.3126 10.4449 74.3126C11.1104 74.3126 12.0461 74.7245 12.0461 76.3755C12.0461 78.0256 11.1104 78.4392 10.4449 78.4392C9.78039 78.4392 8.84421 78.0256 8.84421 76.3755ZM7.61213 76.3755C7.61213 79.1426 9.6653 79.4839 10.4454 79.4839C11.2259 79.4839 13.2791 79.143 13.2791 76.3755C13.2791 73.6079 11.2255 73.2715 10.4454 73.2715C9.6653 73.2715 7.61213 73.6084 7.61213 76.3755ZM16.6551 76.1775V74.4427H17.6328C18.3961 74.4427 18.7171 74.683 18.7171 75.2585C18.7171 75.5213 18.7171 76.1775 17.7964 76.1775H16.6551ZM16.6551 77.1979H18.0671C19.6533 77.1979 19.9479 75.849 19.9479 75.3158C19.9479 74.1583 19.2595 73.4263 18.1165 73.4263H15.4235V79.326H16.6551V77.1979ZM23.2918 76.1775V74.4427H24.2676C25.0318 74.4427 25.3524 74.683 25.3524 75.2585C25.3524 75.5213 25.3524 76.1775 24.4339 76.1775H23.2918ZM23.2918 77.1979H24.7046C26.2895 77.1979 26.5863 75.849 26.5863 75.3158C26.5863 74.1583 25.897 73.4263 24.7549 73.4263H22.0593V79.326H23.2918V77.1979ZM29.6673 76.3755C29.6673 74.7245 30.6013 74.3126 31.2694 74.3126C31.9317 74.3126 32.8701 74.7245 32.8701 76.3755C32.8701 78.0256 31.9322 78.4392 31.2694 78.4392C30.6013 78.4392 29.6673 78.0256 29.6673 76.3755ZM28.4348 76.3755C28.4348 79.1426 30.4876 79.4839 31.2694 79.4839C32.0477 79.4839 34.1009 79.143 34.1009 76.3755C34.1009 73.6079 32.0477 73.2715 31.2694 73.2715C30.4876 73.2715 28.4348 73.6084 28.4348 76.3755ZM37.4549 76.0223V74.4427H38.9891C39.7122 74.4427 39.8507 74.9053 39.8507 75.2171C39.8507 75.8009 39.5398 76.0223 38.8987 76.0223H37.4549ZM36.244 79.3265H37.4549V77.0175H38.7258C39.6386 77.0175 39.6889 77.3284 39.6889 78.1336C39.6889 78.74 39.7352 79.0438 39.8176 79.3265H41.1824V79.1673C40.9196 79.0698 40.9196 78.8555 40.9196 77.9961C40.9196 76.8919 40.6568 76.7128 40.1726 76.4985C40.7556 76.3032 41.0828 75.7431 41.0828 75.0953C41.0828 74.5847 40.797 73.4271 39.2276 73.4271H36.2436L36.244 79.3265ZM45.6738 79.3265H44.4421V74.4705H42.6606V73.4267H47.4575V74.4705H45.6738V79.3265ZM54.0699 77.2618C54.0699 78.8141 53.1337 79.4839 51.6454 79.4839C51.1061 79.4839 50.3009 79.3468 49.7739 78.7647C49.4533 78.4048 49.3303 77.9277 49.3157 77.3368V73.4267H50.5707V77.2535C50.5707 78.075 51.0479 78.4392 51.6225 78.4392C52.4682 78.4392 52.8126 78.0256 52.8126 77.3117V73.4263H54.0703V77.2618H54.0699ZM60.0322 73.4267H61.1845V79.3265H59.9498L57.5425 75.1183H57.5293V79.3265H56.377V73.4267H57.6748L60.0177 77.533H60.0322V73.4267ZM64.6607 79.3265H63.4246V73.4267H64.6607V79.3265ZM69.4708 79.3265H68.2392V74.4705H66.4598V73.4267H71.2545V74.4705H69.4708V79.3265ZM75.9125 79.3265H74.6782V77.0991L72.6432 73.4267H74.0962L75.3199 75.9905L76.4893 73.4267H77.8837L75.9125 77.1137V79.3265ZM42.7417 3.01758L3.02734 22.5778V31.7659H7.47234V59.3275H77.7121V31.7659H83.0497V22.5778L42.7417 3.01758ZM69.1185 51.0266H16.0673V25.8379L42.7417 12.2057L69.1189 25.8379V51.0266H69.1185Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.jsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M54.891 34.727H30.2949V25.8379H54.891V34.727ZM54.891 47.4764H30.2949V38.5815H54.891V47.4764Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.jsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer/Footer.jsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "clip0_204_2128",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "85",
                                                height: "85",
                                                fill: "white",
                                                transform: "translate(0.538086)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.jsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer/Footer.jsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.jsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer/Footer.jsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer/Footer.jsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer/Footer.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/footer/Footer.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/footer/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footer/Footer.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/navDrawer/NavDrawer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const NavDrawer = ({ isOpen, toggleDrawer, active, handleNavClick, navItems, linkVariants })=>{
    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 200
            }
        },
        closed: {
            x: "100%",
            transition: {
                stiffness: 200
            }
        }
    };
    const sidebarStyles = {
        position: "fixed",
        top: 60,
        right: 0,
        width: "50%",
        height: "100%",
        backgroundColor: "#fff",
        boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.3)",
        zIndex: 2001,
        padding: "2rem",
        borderRadius: "10px 0px 0px 0px"
    };
    const sidebarNavLinksStyles = {
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: 0,
        margin: 0
    };
    const linkStyles = (isActive)=>({
            color: isActive ? "#007bff" : "#333",
            cursor: "pointer",
            padding: "0.5rem 1rem",
            textDecoration: "none",
            transition: "color 0.3s ease",
            display: "flex",
            alignItems: "center"
        });
    const iconContainerStyles = (isActive)=>({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(30, 30, 30, 0.85)",
            border: `2px solid ${isActive ? "#007bff" : "#fff"}`,
            boxShadow: isActive ? "0 0 0 2px #007bff" : "none",
            color: "#fff",
            fontSize: "1.5rem",
            marginRight: 20
        });
    // Example icons mapping based on names
    const getIcon = (name)=>{
        switch(name){
            case "Home":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiHome, {}, void 0, false, {
                    fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                    lineNumber: 72,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "Calculators":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaCalculator, {}, void 0, false, {
                    fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                    lineNumber: 74,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "Compare Products":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiPieChart, {}, void 0, false, {
                    fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                    lineNumber: 76,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "Loan Estimate Upload":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiUsers, {}, void 0, false, {
                    fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                    lineNumber: 78,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "Contact":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiPhone, {}, void 0, false, {
                    fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                    lineNumber: 80,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiHome, {}, void 0, false, {
                    fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                    lineNumber: 82,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            style: sidebarStyles,
            variants: sidebarVariants,
            initial: "closed",
            animate: "open",
            exit: "closed",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: sidebarNavLinksStyles,
                children: navItems.map(({ name, index })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.li, {
                        variants: linkVariants,
                        whileHover: "hover",
                        style: linkStyles(index === active),
                        onClick: ()=>{
                            handleNavClick(index); // Use the index for navigation
                            toggleDrawer(); // Close the drawer after navigation
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: iconContainerStyles(index === active),
                                children: getIcon(name)
                            }, void 0, false, {
                                fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                                lineNumber: 109,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            name
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                        lineNumber: 98,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
                lineNumber: 96,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
            lineNumber: 89,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/navDrawer/NavDrawer.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavDrawer;
}),
"[project]/src/components/navDrawer/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navDrawer$2f$NavDrawer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navDrawer/NavDrawer.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/calculators/Calculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-device-detect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
const Calculator = ({ dispatch })=>{
    // Handle button clicks to show the PricingWidget
    const handleAffordClick = ()=>{
        dispatch({
            type: "SHOW_AFFORDABILTY_CALCULATOR",
            payload: true
        });
    };
    const handleMortgageClick = ()=>{
        dispatch({
            type: "SHOW_MORTGAGE_CALCULATOR",
            payload: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: calculatorStyles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: isMobile ? "5%" : "40%",
                left: "50%",
                transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)",
                zIndex: 1,
                color: "#f0f0f0",
                textAlign: "center",
                padding: isMobile ? "1rem" : "2rem",
                maxWidth: isMobile ? "90%" : "600px",
                width: "80%",
                borderRadius: "10px",
                background: "rgba(30, 30, 30, 0.85)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaCalculator, {
                    size: isMobile ? 60 : 120,
                    style: {
                        marginBottom: "1rem"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/calculators/Calculator.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: isMobile ? "1.5rem" : "2rem"
                    },
                    children: "Calculators"
                }, void 0, false, {
                    fileName: "[project]/src/components/calculators/Calculator.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: buttonContainerStyles,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                            style: {
                                ...buttonStyles,
                                padding: isMobile ? "0.75rem" : "1rem",
                                fontSize: isMobile ? "1rem" : "1.2rem"
                            },
                            onClick: handleMortgageClick,
                            whileHover: {
                                scale: 1.05,
                                backgroundColor: "#0056b3"
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                "Mortgage Calculator",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowRight, {
                                    style: iconStyles
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculators/Calculator.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculators/Calculator.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                ...descriptionStyles,
                                fontSize: isMobile ? "0.9rem" : "1rem",
                                textAlign: isMobile ? "center" : "left"
                            },
                            children: "🏠 Calculate monthly payments based on loan amount, interest rates, and loan term."
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculators/Calculator.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                            style: {
                                ...buttonStyles,
                                padding: isMobile ? "0.75rem" : "1rem",
                                fontSize: isMobile ? "1rem" : "1.2rem"
                            },
                            onClick: handleAffordClick,
                            whileHover: {
                                scale: 1.05,
                                backgroundColor: "#0056b3"
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                "Affordability Calculator",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowRight, {
                                    style: iconStyles
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculators/Calculator.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculators/Calculator.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                ...descriptionStyles,
                                fontSize: isMobile ? "0.9rem" : "1rem",
                                textAlign: isMobile ? "center" : "left"
                            },
                            children: "💰 Assess your budget and find out how much house you can afford."
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculators/Calculator.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculators/Calculator.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/calculators/Calculator.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/calculators/Calculator.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const calculatorStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
};
const buttonContainerStyles = {
    marginTop: "2rem"
};
const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "0.5rem 0",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "#007bff",
    color: "#fff",
    boxShadow: "0 2px 12px white"
};
const iconStyles = {
    marginLeft: "0.5rem"
};
const descriptionStyles = {
    color: "#ccc",
    margin: "0.5rem 0 1.5rem"
};
const __TURBOPACK__default__export__ = Calculator;
}),
"[project]/src/components/calculators/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$Calculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculators/Calculator.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/LoanEstimateUpload.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-dropzone'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL && process.env.NEXT_PUBLIC_API_BASE_URL.trim() || "";
const LoanEstimateUpload = ()=>{
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [parsedData, setParsedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((acceptedFiles)=>{
        if (!acceptedFiles || acceptedFiles.length === 0) return;
        const file = acceptedFiles[0];
        setSelectedFile(file);
        setError("");
        setParsedData(null);
    }, []);
    const { getRootProps, getInputProps, isDragActive, fileRejections, acceptedFiles } = useDropzone({
        onDrop,
        maxFiles: 1,
        multiple: false,
        accept: {
            "application/pdf": [
                ".pdf"
            ],
            "application/x-pdf": [
                ".pdf"
            ],
            "application/octet-stream": [
                ".pdf"
            ],
            "image/*": []
        }
    });
    const fileName = selectedFile?.name || acceptedFiles?.[0]?.name || "Drag & drop or click";
    const handleAnalyze = async ()=>{
        const fileToUse = selectedFile || acceptedFiles[0];
        if (!fileToUse) {
            setError("Please upload a PDF or image of your Loan Estimate.");
            return;
        }
        setLoading(true);
        setError("");
        setParsedData(null);
        const formData = new FormData();
        formData.append("file", fileToUse);
        try {
            const apiHost = API_BASE_URL.replace(/\/$/, "");
            const response = await fetch(`${apiHost}/api/parse-le`, {
                method: "POST",
                body: formData
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                throw new Error(errorData.error || "We couldn't analyze that document. Please try again.");
            }
            const data = await response.json();
            setParsedData(data.parsedData || data);
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again later.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: sectionStyles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: cardStyles,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: titleStyles,
                    children: "Upload Your Loan Estimate"
                }, void 0, false, {
                    fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: subtitleStyles,
                    children: "We'll extract key details automatically."
                }, void 0, false, {
                    fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: uploadAreaStyles,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ...getRootProps(),
                            style: {
                                ...fileInputLabelStyles,
                                borderColor: isDragActive ? "#3a7bd5" : "#4b5d67",
                                backgroundColor: isDragActive ? "rgba(58, 123, 213, 0.08)" : "transparent"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ...getInputProps()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: fileName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginTop: "0.5rem",
                                        fontSize: "0.9rem"
                                    },
                                    children: "Drag & drop your Loan Estimate here, or click to browse."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        fileRejections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#c0392b",
                                fontSize: "0.9rem"
                            },
                            children: "Unsupported file type. Upload a PDF or image."
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            style: {
                                ...buttonStyles,
                                opacity: loading ? 0.7 : 1,
                                cursor: loading ? "not-allowed" : "pointer"
                            },
                            onClick: handleAnalyze,
                            disabled: loading,
                            children: loading ? "Analyzing..." : "Analyze My Loan Estimate"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            style: helperTextStyles,
                            children: "Nothing is stored permanently — we only read the document."
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: errorStyles,
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                    lineNumber: 132,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                parsedData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: resultsContainerStyles,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: resultsTitleStyles,
                            children: "Extracted Details"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            style: preStyles,
                            children: JSON.stringify(parsedData, null, 2)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LoanEstimateUpload.jsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LoanEstimateUpload.jsx",
            lineNumber: 86,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/LoanEstimateUpload.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// --- Styles ---
const sectionStyles = {
    // minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 1rem"
};
const cardStyles = {
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "18px",
    padding: "2rem",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)"
};
const titleStyles = {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    color: "#0f2027",
    textAlign: "center"
};
const subtitleStyles = {
    fontSize: "1rem",
    marginBottom: "1.5rem",
    color: "#4b5d67",
    textAlign: "center"
};
const uploadAreaStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
};
const fileInputLabelStyles = {
    border: "2px dashed #4b5d67",
    borderRadius: "12px",
    padding: "1.25rem",
    textAlign: "center",
    color: "#4b5d67",
    fontWeight: 600,
    cursor: "pointer"
};
const buttonStyles = {
    width: "100%",
    padding: "1rem",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg, #3a7bd5, #3a6073)",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
    transition: "transform 0.2s ease"
};
const helperTextStyles = {
    fontSize: "0.85rem",
    color: "#6c7a89",
    textAlign: "center"
};
const errorStyles = {
    marginTop: "1rem",
    padding: "0.75rem",
    borderRadius: "8px",
    backgroundColor: "#ffe6e6",
    color: "#c0392b",
    fontWeight: 600
};
const resultsContainerStyles = {
    marginTop: "2rem",
    borderRadius: "12px",
    backgroundColor: "#0f2027",
    color: "#fff",
    padding: "1.5rem",
    overflowX: "auto"
};
const resultsTitleStyles = {
    marginBottom: "1rem",
    fontSize: "1.25rem"
};
const preStyles = {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: 1.4,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word"
};
const __TURBOPACK__default__export__ = LoanEstimateUpload;
}),
"[project]/src/components/component3/Component3.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// components/Calculator.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-device-detect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const Component3 = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: calculatorStyles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: isMobile ? "5%" : "40%",
                left: "50%",
                transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)",
                zIndex: 1,
                color: "#f0f0f0",
                textAlign: "center",
                padding: "2rem",
                maxWidth: "600px",
                width: "80%",
                borderRadius: "10px",
                background: "rgba(30, 30, 30, 0.85)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Component 3"
                }, void 0, false, {
                    fileName: "[project]/src/components/component3/Component3.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Add a Widget here"
                }, void 0, false, {
                    fileName: "[project]/src/components/component3/Component3.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/component3/Component3.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/component3/Component3.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const calculatorStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
};
const __TURBOPACK__default__export__ = Component3;
}),
"[project]/src/components/component3/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$component3$2f$Component3$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/component3/Component3.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/header/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const Header = ()=>{
    const headerBarStyles = {
        width: "100%",
        backgroundColor: "#007bff",
        color: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 35,
        top: 0,
        zIndex: 1001
    };
    const headerContentStyles = {
        display: "flex",
        alignItems: "center",
        gap: "1rem"
    };
    const headerLinkStyles = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "0.9rem",
        display: "flex",
        alignItems: "center",
        padding: "0.5rem 1rem",
        gap: "0.5rem"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: headerBarStyles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: headerContentStyles,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=tmanriquez@viewyourrate.com",
                    style: headerLinkStyles,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaEnvelope, {}, void 0, false, {
                            fileName: "[project]/src/components/header/Header.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " tmanriquez@viewyourrate.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header/Header.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "tel:+12146754530",
                    style: headerLinkStyles,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaPhoneAlt, {}, void 0, false, {
                            fileName: "[project]/src/components/header/Header.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " (214) 675-4530"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header/Header.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header/Header.jsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/header/Header.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/components/header/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/Header.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/mortgageServices/MortgageServices.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-device-detect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const services = [
    {
        title: "Fixed-Rate Mortgage",
        description: "Stable monthly payments for the life of your loan.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaHome, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 22,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "FHA Mortgage",
        description: "(FHA) Loans designed to assist homebuyers with lenient credit and down payment requirements.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaUniversity, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 28,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "VA Mortgage",
        description: "Exclusive benefits for veterans and active-duty military personnel.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaLandmark, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 34,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Jumbo Mortgage",
        description: "Financing for high-value properties exceeding conventional loan limits.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaHorseHead, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 40,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Adjustable Rate Mortgages",
        description: "Variable interest rates that may change over time based on market conditions.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaBalanceScale, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 46,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "USDA Mortgages",
        description: "Loans for rural homebuyers with low-interest rates and zero down payment options.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaSeedling, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 52,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "First Time Home Buyer Mortgages",
        description: "Special loans tailored for new homebuyers with reduced down payments.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaUserGraduate, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 58,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Reverse Mortgages",
        description: "Convert your home's equity into cash without monthly payments.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaUndo, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 64,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Interest Only Mortgages",
        description: "Pay only interest for an initial period, reducing your monthly payment.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaCoins, {}, void 0, false, {
            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
            lineNumber: 70,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const MortgageServices = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: isMobile ? mobileSectionStyles : sectionStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: isMobile ? mobileHeaderStyles : headerStyles,
                children: "Mortgage Services"
            }, void 0, false, {
                fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: scrollContainerStyles,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: cardsContainerStyles,
                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            style: isMobile ? mobileCardStyles : cardStyles,
                            whileHover: {
                                scale: 1.05,
                                boxShadow: "0 6px 15px #007bff"
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: isMobile ? mobileIconContainerStyles : iconContainerStyles,
                                    children: service.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: isMobile ? mobileCardTitleStyles : cardTitleStyles,
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: isMobile ? mobileCardDescriptionStyles : cardDescriptionStyles,
                                    children: service.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                    style: isMobile ? mobileButtonStyles : buttonStyles,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.2
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: "Get a Free Quote"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mortgageServices/MortgageServices.jsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Desktop Styles
const sectionStyles = {
    padding: "2rem 1rem",
    backgroundColor: "rgb(248, 249, 250)",
    textAlign: "center",
    marginBottom: "2rem",
    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)"
};
const headerStyles = {
    fontSize: "2rem",
    color: "#007bff",
    marginBottom: "1.5rem"
};
const scrollContainerStyles = {
    overflowX: "auto",
    paddingBottom: "1rem"
};
const cardsContainerStyles = {
    display: "flex",
    gap: "1.5rem",
    padding: "1rem",
    flexWrap: "nowrap",
    minWidth: "100%"
};
const cardStyles = {
    minWidth: "250px",
    backgroundColor: "#333",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.3s ease",
    textAlign: "center",
    width: 350,
    flex: "0 0 auto"
};
const iconContainerStyles = {
    backgroundColor: "#007bff",
    borderRadius: "50%",
    padding: "1rem",
    marginBottom: "1rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "#fff",
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 1), 0 0 0 6px #007bff"
};
const cardTitleStyles = {
    fontSize: "1.25rem",
    margin: "0.5rem 0",
    color: "#fff"
};
const cardDescriptionStyles = {
    fontSize: "0.9rem",
    color: "#aaa",
    marginBottom: "1rem"
};
const buttonStyles = {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "1rem",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
};
// Mobile Styles (20% smaller)
const mobileSectionStyles = {
    padding: "1.5rem 0.8rem",
    backgroundColor: "rgb(248, 249, 250)",
    textAlign: "center",
    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem"
};
const mobileHeaderStyles = {
    fontSize: "1.6rem",
    color: "#007bff",
    marginBottom: "1.2rem"
};
const mobileCardStyles = {
    minWidth: "200px",
    backgroundColor: "#333",
    padding: "1.2rem",
    borderRadius: "8px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.3s ease",
    textAlign: "center",
    width: 280,
    flex: "0 0 auto"
};
const mobileIconContainerStyles = {
    backgroundColor: "#007bff",
    borderRadius: "50%",
    padding: "0.8rem",
    marginBottom: "0.8rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.6rem",
    color: "#fff",
    boxShadow: "0 0 0 3px rgba(255, 255, 255, 1), 0 0 0 4px #007bff"
};
const mobileCardTitleStyles = {
    fontSize: "1rem",
    margin: "0.4rem 0",
    color: "#fff"
};
const mobileCardDescriptionStyles = {
    fontSize: "0.75rem",
    color: "#aaa",
    marginBottom: "0.8rem"
};
const mobileButtonStyles = {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "0.8rem",
    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.3)"
};
const __TURBOPACK__default__export__ = MortgageServices;
}),
"[project]/src/components/mortgageServices/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageServices$2f$MortgageServices$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mortgageServices/MortgageServices.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/rateDropNotification/RateDropNotification.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-device-detect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const RateDropNotification = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: isMobile ? mobileContainerStyles : containerStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: isMobile ? mobileImageContainerStyles : imageContainerStyles,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/RatesDropped.png",
                    alt: "Rates Dropped",
                    style: isMobile ? mobileImageStyles : imageStyles
                }, void 0, false, {
                    fileName: "[project]/src/components/rateDropNotification/RateDropNotification.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/rateDropNotification/RateDropNotification.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: isMobile ? mobileTextContainerStyles : textContainerStyles,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        style: smallHeaderStyles,
                        children: "RATE WATCHER ALERT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/rateDropNotification/RateDropNotification.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: isMobile ? mobileLargeHeaderStyles : largeHeaderStyles,
                        children: "Get notified when rates drop"
                    }, void 0, false, {
                        fileName: "[project]/src/components/rateDropNotification/RateDropNotification.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: isMobile ? mobileDescriptionStyles : descriptionStyles,
                        children: "Never miss a rate drop – experience smarter rate shopping. Our Price Drop Alert feature keeps you informed, instantly notifying you when prices fall."
                    }, void 0, false, {
                        fileName: "[project]/src/components/rateDropNotification/RateDropNotification.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                        style: isMobile ? mobileButtonStyles : buttonStyles,
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.2
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: "Notify me of rate drops"
                    }, void 0, false, {
                        fileName: "[project]/src/components/rateDropNotification/RateDropNotification.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/rateDropNotification/RateDropNotification.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/rateDropNotification/RateDropNotification.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Desktop Styles
const containerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "2rem 0"
};
const imageContainerStyles = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const imageStyles = {
    width: "80%",
    maxWidth: "300px"
};
const textContainerStyles = {
    flex: 1,
    padding: "1rem",
    textAlign: "left"
};
const smallHeaderStyles = {
    color: "#007bff",
    fontSize: "0.9rem",
    fontWeight: "bold",
    textTransform: "uppercase"
};
const largeHeaderStyles = {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "1rem 0",
    color: "#333"
};
const descriptionStyles = {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "1.5rem"
};
const buttonStyles = {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
};
// Mobile Styles
const mobileContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "2rem 0",
    textAlign: "center"
};
const mobileImageContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem"
};
const mobileImageStyles = {
    width: "100%",
    maxWidth: "250px"
};
const mobileTextContainerStyles = {
    padding: "0.5rem"
};
const mobileLargeHeaderStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
    color: "#333"
};
const mobileDescriptionStyles = {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "1rem"
};
const mobileButtonStyles = {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
};
const __TURBOPACK__default__export__ = RateDropNotification;
}),
"[project]/src/components/rateDropNotification/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateDropNotification$2f$RateDropNotification$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/rateDropNotification/RateDropNotification.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const AffordabilityCalc = ({ isVisible, onClose })=>{
    // Animation variants for the widget
    const widgetVariants = {
        hidden: {
            y: "100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };
    const overlayStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)"
    };
    const widgetStyles = {
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        textAlign: "center",
        width: "80%",
        maxWidth: "400px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        position: "relative"
    };
    const closeIconStyles = {
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "1.5rem",
        color: "#fff",
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        padding: "5px"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            style: overlayStyles,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            variants: widgetVariants,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiX, {
                    style: closeIconStyles,
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    style: widgetStyles,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                color: "#007bff"
                            },
                            children: "Affordability Calc"
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx",
            lineNumber: 65,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AffordabilityCalc;
}),
"[project]/src/components/calculators/AffordabliityCalc/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$AffordabliityCalc$2f$AffordabilityCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const MortgageCalc = ({ isVisible, onClose })=>{
    const widgetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Animation for modal
    const widgetVariants = {
        hidden: {
            y: "100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };
    const overlayStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        padding: "1rem"
    };
    const widgetStyles = {
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "16px",
        textAlign: "center",
        width: "100%",
        maxWidth: "1100px",
        minHeight: "700px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        position: "relative",
        overflow: "hidden"
    };
    const closeIconStyles = {
        position: "absolute",
        top: "16px",
        right: "16px",
        fontSize: "1.5rem",
        color: "#fff",
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "50%",
        padding: "8px",
        zIndex: 10
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        setLoading(true);
        widgetRef.current.innerHTML = ""; // Clear previous widget
        const container = document.createElement("div");
        container.className = "mcalculator";
        container.setAttribute("data-calc", "https://www.mtgcalcs.com/calculators/widget.php?selectedCalculators=%7B%22conventional%22%3Atrue%7D&selectedColors=%7B%22mainBgColor%22%3A%22%23ffffff%22%2C%22resultsBgColor%22%3A%22%23f05c22%22%2C%22sliderPrimaryColor%22%3A%22%23f05c22%22%2C%22sliderSecondaryColor%22%3A%22%23dddddd%22%2C%22sliderHandleColor%22%3A%22%23f05c22%22%2C%22mainTextColor%22%3A%22%23373a3c%22%2C%22resultsTextColor%22%3A%22%23ffffff%22%2C%22titleDefaultColor%22%3A%22%23777777%22%2C%22titleActiveColor%22%3A%22%23333333%22%2C%22titleActiveUnderlineColor%22%3A%22%23ffffff%22%7D&conventionalInputs=%7B%22mcalc-conventional-purchase-price%22%3A%22250000%22%2C%22mcalc-conventional-down-payment-percent%22%3A%225%22%2C%22mcalc-conventional-interest-rate%22%3A%225%22%2C%22mcalc-conventional-loan-term%22%3A%2230%22%2C%22mcalc-conventional-annual-tax-percent%22%3A%220%22%2C%22mcalc-conventional-annual-insurance%22%3A%220%22%2C%22mcalc-conventional-mortgage-insurance-rate%22%3A%220%22%2C%22mcalc-conventional-monthly-hoa%22%3A%220%22%7D");
        container.setAttribute("data-width", "1100");
        widgetRef.current.appendChild(container);
        const script = document.createElement("script");
        script.src = "https://www.mtgcalcs.com/calculators/js/embed.js";
        script.async = true;
        widgetRef.current.appendChild(script);
        const timer = setTimeout(()=>{
            window.dispatchEvent(new Event("resize")); // force reflow
            setLoading(false); // reveal widget
        }, 1000); // show loader for 4 seconds
        return ()=>{
            clearTimeout(timer);
            widgetRef.current.innerHTML = "";
        };
    }, [
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            style: overlayStyles,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            variants: widgetVariants,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                style: widgetStyles,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiX, {
                        style: closeIconStyles,
                        onClick: onClose
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: "#007bff",
                            marginBottom: "1.5rem"
                        },
                        children: "Mortgage Calculator"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingTop: "200px",
                            fontSize: "1.2rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spinner"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
                                lineNumber: 116,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Loading calculator..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
                        lineNumber: 115,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: widgetRef,
                        style: {
                            width: "100%",
                            height: loading ? "0px" : "70vh",
                            opacity: loading ? 0 : 1,
                            display: "block",
                            overflow: "scroll"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            marginTop: "2rem",
                            padding: "0.75rem 1.5rem",
                            background: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            cursor: "pointer"
                        },
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
                lineNumber: 108,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
            lineNumber: 101,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MortgageCalc;
}),
"[project]/src/components/calculators/MortgageCalc/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$MortgageCalc$2f$MortgageCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/backdrop/BackDrop.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const BackDrop = ({ onClose })=>{
    const backdropStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: 999,
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        WebkitFilter: "blur(5px)",
        MozFilter: "blur(5px)",
        OFilter: "blur(5px)",
        msFilter: "blur(5px)",
        filter: "blur(5px)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: backdropStyles,
        onClick: onClose
    }, void 0, false, {
        fileName: "[project]/src/components/backdrop/BackDrop.jsx",
        lineNumber: 21,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BackDrop;
}),
"[project]/src/components/backdrop/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$backdrop$2f$BackDrop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/backdrop/BackDrop.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/applyNowWidget/ApplyNowWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const ApplyNowWidget = ({ isVisible, onClose })=>{
    const variants = {
        hidden: {
            y: "100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };
    const overlay = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)"
    };
    const widget = {
        backgroundColor: "#fff",
        width: "95%",
        maxWidth: "1100px",
        height: "90vh",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
    };
    const closeStyle = {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
        fontSize: "1.5rem",
        color: "#fff",
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "6px",
        borderRadius: "50%"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            style: overlay,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            variants: variants,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiX, {
                    style: closeStyle,
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/components/applyNowWidget/ApplyNowWidget.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    style: widget,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: "https://viewyourrate.my1003app.com?time=1743826121808",
                        style: {
                            width: "100%",
                            height: "100%",
                            border: "none"
                        },
                        title: "Apply Now"
                    }, void 0, false, {
                        fileName: "[project]/src/components/applyNowWidget/ApplyNowWidget.jsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/applyNowWidget/ApplyNowWidget.jsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/applyNowWidget/ApplyNowWidget.jsx",
            lineNumber: 62,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/applyNowWidget/ApplyNowWidget.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ApplyNowWidget;
}),
"[project]/src/components/applyNowWidget/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyNowWidget$2f$ApplyNowWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/applyNowWidget/ApplyNowWidget.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context.jsx [app-ssr] (ecmascript)");
;
;
;
;
const widgetStyles = `
  .find-products-widget {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 12px 36px;
  }

  .products-filter-card {
    width: min(860px, 100%);
    background-color: rgba(255, 255, 255, 0.96);
    border-radius: 16px;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
    padding: 24px clamp(20px, 4vw, 32px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    backdrop-filter: blur(6px);
  }

  .products-filter-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .products-filter-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  .products-filter-subtitle {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.4;
    max-width: 540px;
    margin: 0;
  }

  .products-filter-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 12px 16px;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-label {
    font-size: 0.82rem;
    font-weight: 600;
    color: #1e293b;
  }

  .form-select,
  .form-input {
    border: 1px solid rgba(148, 163, 184, 0.6);
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 0.92rem;
    background: #f8fafc;
    color: #0f172a;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .form-select:focus,
  .form-input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.16);
    background-color: #fff;
  }

  .form-input::placeholder {
    color: #94a3b8;
  }

  .section-caption {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #64748b;
    margin: 4px 0 2px;
  }

  .down-payment-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .percentage-input {
    position: relative;
  }

  .percentage-input .form-input {
    padding-right: 40px;
  }

  .percentage-suffix {
    position: absolute;
    inset-inline-end: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 600;
    color: #475569;
  }

  .down-payment-slider {
    width: 100%;
    accent-color: #2563eb;
  }

  .down-payment-display {
    display: flex;
    justify-content: space-between;
    font-size: 0.78rem;
    color: #475569;
  }

  .advanced-toggle {
    align-self: flex-start;
    background: none;
    border: none;
    color: #2563eb;
    font-weight: 600;
    font-size: 0.88rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 0;
  }

  .advanced-toggle:hover {
    color: #1d4ed8;
  }

  .advanced-content {
    border-top: 1px solid rgba(148, 163, 184, 0.25);
    padding-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .refinance-panel {
    border-top: 1px solid rgba(148, 163, 184, 0.25);
    padding-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .products-filter-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(148, 163, 184, 0.25);
    padding-top: 16px;
  }

  .estimated-metrics {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
  }

  .estimated-metric {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 140px;
  }

  .metric-label {
    font-size: 0.75rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #64748b;
  }

  .metric-value {
    font-size: 1rem;
    font-weight: 700;
    color: #1e293b;
  }

  .loan-amount-highlight {
    color: #2563eb;
  }

  .find-products-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #fff;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .find-products-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 22px rgba(37, 99, 235, 0.22);
  }

  .find-products-button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    box-shadow: none;
  }

  .loader-icon {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .find-products-widget {
      padding: 16px 12px 32px;
    }

    .products-filter-card {
      padding: 20px 18px;
      border-radius: 14px;
    }

    .products-filter-title {
      font-size: 1.45rem;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }
  }
`;
const initialFormState = {
    loanType: "Purchase",
    loanProgram: "Conventional",
    rateStructure: "Fixed rate",
    armTerm: "5/6 ARM",
    loanTerm: "30",
    purchasePrice: "450000",
    downPaymentPercent: "20",
    propertyType: "Single-family residence",
    propertyUnits: "Single unit",
    occupancy: "Primary residence",
    stateSelection: "Texas",
    propertyZip: "75201",
    closingTimeline: "30 days",
    creditScore: "760",
    firstTimeBuyer: "No",
    veteranStatus: "No",
    refinanceGoal: "Lower my rate",
    existingLoanBalance: "360000",
    cashOutAmount: "0"
};
const loanTerms = [
    "30",
    "20",
    "15",
    "10",
    "7"
];
const propertyTypes = [
    "Single-family residence",
    "Condominium",
    "Townhome",
    "Multi-family (2-4 units)",
    "Manufactured home",
    "New construction"
];
const propertyUnitsOptions = [
    "Single unit",
    "2 units",
    "3 units",
    "4 units"
];
const occupancyOptions = [
    "Primary residence",
    "Second home",
    "Investment property"
];
const loanProgramOptions = [
    "Conventional",
    "FHA",
    "VA",
    "USDA",
    "Jumbo",
    "Non-QM"
];
const rateStructureOptions = [
    "Fixed rate",
    "Adjustable rate (ARM)"
];
const armTermOptions = [
    "5/6 ARM",
    "7/6 ARM",
    "10/6 ARM"
];
const closingTimelineOptions = [
    "As soon as possible",
    "30 days",
    "45 days",
    "60 days",
    "90+ days"
];
const refinanceGoals = [
    "Lower my rate",
    "Cash-out refinance",
    "Shorten my term",
    "Remove FHA mortgage insurance"
];
const firstTimeBuyerOptions = [
    "No",
    "Yes"
];
const veteranStatusOptions = [
    "No",
    "Yes"
];
const creditScoreOptions = [
    {
        label: "780+ (Exceptional)",
        value: "780"
    },
    {
        label: "760-779 (Excellent)",
        value: "765"
    },
    {
        label: "720-759 (Great)",
        value: "735"
    },
    {
        label: "680-719 (Good)",
        value: "700"
    },
    {
        label: "640-679 (Fair)",
        value: "660"
    },
    {
        label: "620-639 (OK)",
        value: "625"
    }
];
const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];
const clamp = (value, min, max)=>Math.min(Math.max(value, min), max);
const ProductsFilterWidget = ()=>{
    const { dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFormState);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAdvanced, setShowAdvanced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const submitTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
            if (submitTimeoutRef.current) {
                clearTimeout(submitTimeoutRef.current);
                submitTimeoutRef.current = null;
            }
        };
    }, []);
    const purchasePriceValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const numeric = Number(formState.purchasePrice);
        return Number.isFinite(numeric) ? numeric : 0;
    }, [
        formState.purchasePrice
    ]);
    const downPaymentPercentValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const numeric = Number(formState.downPaymentPercent);
        if (!Number.isFinite(numeric)) {
            return 0;
        }
        return clamp(numeric, 0, 80);
    }, [
        formState.downPaymentPercent
    ]);
    const downPaymentAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (purchasePriceValue <= 0) {
            return 0;
        }
        const calculated = purchasePriceValue * downPaymentPercentValue / 100;
        return Math.min(purchasePriceValue, calculated);
    }, [
        purchasePriceValue,
        downPaymentPercentValue
    ]);
    const estimatedLoanAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (purchasePriceValue <= 0) {
            return 0;
        }
        return Math.max(purchasePriceValue - downPaymentAmount, 0);
    }, [
        purchasePriceValue,
        downPaymentAmount
    ]);
    const formattedDownPaymentPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!Number.isFinite(downPaymentPercentValue)) {
            return "0";
        }
        const fixed = downPaymentPercentValue.toFixed(1);
        return fixed.endsWith(".0") ? fixed.slice(0, -2) : fixed;
    }, [
        downPaymentPercentValue
    ]);
    const handleDownPaymentSliderChange = (event)=>{
        const numeric = clamp(Number(event.target.value) || 0, 0, 80);
        setFormState((prev)=>({
                ...prev,
                downPaymentPercent: numeric.toString()
            }));
    };
    const handleFieldChange = (event)=>{
        const { name, value, type, checked } = event.target;
        let nextValue = type === "checkbox" ? checked : value;
        if (name === "downPaymentPercent") {
            if (nextValue === "") {
                setFormState((prev)=>({
                        ...prev,
                        [name]: ""
                    }));
                return;
            }
            const numeric = Number(nextValue);
            if (!Number.isFinite(numeric)) {
                return;
            }
            nextValue = clamp(numeric, 0, 80).toString();
        }
        if (name === "purchasePrice" || name === "existingLoanBalance" || name === "cashOutAmount") {
            const sanitized = nextValue === "" ? "" : nextValue.toString().replace(/[^\d.]/g, "");
            nextValue = sanitized;
        }
        setFormState((prev)=>({
                ...prev,
                [name]: nextValue
            }));
    };
    const handleZipChange = (event)=>{
        const { value } = event.target;
        const sanitized = value.replace(/\D/g, "").slice(0, 5);
        setFormState((prev)=>({
                ...prev,
                propertyZip: sanitized
            }));
    };
    const isRefinance = formState.loanType === "Refinance";
    const isArm = formState.rateStructure === "Adjustable rate (ARM)";
    const toggleAdvanced = ()=>{
        setShowAdvanced((prev)=>!prev);
    };
    const handleSubmit = (event)=>{
        if (event) {
            event.preventDefault();
        }
        if (isSubmitting) return;
        setIsSubmitting(true);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const purchasePrice = Number(formState.purchasePrice) || 0;
        const sanitizedPercent = clamp(Number(formState.downPaymentPercent) || 0, 0, 80);
        const downPayment = Math.min(purchasePrice, purchasePrice * sanitizedPercent / 100);
        const scenarioPayload = {
            quoteType: formState.loanType,
            purchasePrice,
            downPayment,
            downPaymentPercent: sanitizedPercent,
            termYears: Number(formState.loanTerm) || 30,
            loanProgram: formState.loanProgram,
            rateStructure: formState.rateStructure,
            armTerm: isArm ? formState.armTerm : null,
            propertyType: formState.propertyType,
            propertyUnits: formState.propertyUnits,
            occupancy: formState.occupancy,
            stateSelection: formState.stateSelection,
            propertyZip: formState.propertyZip,
            closingTimeline: formState.closingTimeline,
            creditScore: Number(formState.creditScore) || 760,
            firstTimeBuyer: formState.firstTimeBuyer === "Yes",
            veteranStatus: formState.veteranStatus,
            refinanceGoal: isRefinance ? formState.refinanceGoal : null,
            existingLoanBalance: isRefinance ? Number(formState.existingLoanBalance) || 0 : null,
            cashOutAmount: isRefinance ? Number(formState.cashOutAmount) || 0 : 0,
            estimatedLoanAmount,
            timestamp: new Date().toISOString()
        };
        if (submitTimeoutRef.current) {
            clearTimeout(submitTimeoutRef.current);
        }
        submitTimeoutRef.current = setTimeout(()=>{
            dispatch({
                type: "SET_MORTGAGE_SCENARIO",
                payload: scenarioPayload
            });
            dispatch({
                type: "TOGGLE_PRODUCT_COMPARISON",
                payload: true
            });
            if (isMountedRef.current) {
                setIsSubmitting(false);
            }
            submitTimeoutRef.current = null;
        }, 900);
    };
    const currencyFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        }), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "find-products-widget",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: widgetStyles
            }, void 0, false, {
                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                lineNumber: 595,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "products-filter-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "products-filter-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "products-filter-title",
                                children: "Compare mortgage products"
                            }, void 0, false, {
                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                lineNumber: 598,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "products-filter-subtitle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "We will not pull your credit."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 600,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Checking your options won't affect your score. No hard inquiry at this stage."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                lineNumber: 599,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "products-filter-form",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "loanType",
                                                children: "Loan type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 608,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "loanType",
                                                name: "loanType",
                                                value: formState.loanType,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Purchase",
                                                        children: "Purchase"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 618,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Refinance",
                                                        children: "Refinance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 619,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 611,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 607,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "loanProgram",
                                                children: "Loan program"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "loanProgram",
                                                name: "loanProgram",
                                                value: formState.loanProgram,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: loanProgramOptions.map((program)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: program,
                                                        children: program
                                                    }, program, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 635,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 627,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "rateStructure",
                                                children: "Rate structure"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 643,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "rateStructure",
                                                name: "rateStructure",
                                                value: formState.rateStructure,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: rateStructureOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option,
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 654,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 646,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 642,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isArm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "armTerm",
                                                children: "ARM term"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "armTerm",
                                                name: "armTerm",
                                                value: formState.armTerm,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: armTermOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option,
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 674,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 666,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "loanTerm",
                                                children: "Loan term"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 683,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "loanTerm",
                                                name: "loanTerm",
                                                value: formState.loanTerm,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: loanTerms.map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: term,
                                                        children: [
                                                            term,
                                                            "-year fixed"
                                                        ]
                                                    }, term, true, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 694,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 686,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 682,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "purchasePrice",
                                                children: "Purchase price / value"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 702,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "purchasePrice",
                                                name: "purchasePrice",
                                                type: "number",
                                                min: "0",
                                                value: formState.purchasePrice,
                                                onChange: handleFieldChange,
                                                className: "form-input",
                                                placeholder: "450000",
                                                inputMode: "numeric"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 705,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 701,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "downPaymentPercent",
                                                children: "Down payment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 719,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "down-payment-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "percentage-input",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "downPaymentPercent",
                                                                name: "downPaymentPercent",
                                                                type: "number",
                                                                min: "0",
                                                                max: "80",
                                                                step: "0.125",
                                                                value: formState.downPaymentPercent,
                                                                onChange: handleFieldChange,
                                                                className: "form-input",
                                                                placeholder: "20",
                                                                inputMode: "decimal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 724,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "percentage-suffix",
                                                                children: "%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 737,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 723,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "down-payment-slider",
                                                        type: "range",
                                                        min: "0",
                                                        max: "80",
                                                        step: "0.5",
                                                        value: downPaymentPercentValue,
                                                        onChange: handleDownPaymentSliderChange
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 739,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "down-payment-display",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    formattedDownPaymentPercent,
                                                                    "% selected"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 749,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    currencyFormatter.format(downPaymentAmount),
                                                                    " down"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 750,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 748,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 722,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 718,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "propertyType",
                                                children: "Property type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 758,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "propertyType",
                                                name: "propertyType",
                                                value: formState.propertyType,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: propertyTypes.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: property,
                                                        children: property
                                                    }, property, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 769,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 761,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 757,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "occupancy",
                                                children: "Occupancy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 777,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "occupancy",
                                                name: "occupancy",
                                                value: formState.occupancy,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: occupancyOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option,
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 788,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 780,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 776,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "stateSelection",
                                                children: "State"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 796,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "stateSelection",
                                                name: "stateSelection",
                                                value: formState.stateSelection,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: states.map((stateName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: stateName,
                                                        children: stateName
                                                    }, stateName, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 807,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 799,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 795,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "propertyZip",
                                                children: "Property ZIP code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 815,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "propertyZip",
                                                name: "propertyZip",
                                                type: "text",
                                                inputMode: "numeric",
                                                // pattern="\\d{5}"
                                                maxLength: 5,
                                                value: formState.propertyZip,
                                                onChange: handleZipChange,
                                                className: "form-input",
                                                placeholder: "75201"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 818,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 814,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label",
                                                htmlFor: "creditScore",
                                                children: "Estimated credit score"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 833,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "creditScore",
                                                name: "creditScore",
                                                value: formState.creditScore,
                                                onChange: handleFieldChange,
                                                className: "form-select",
                                                children: creditScoreOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option.value,
                                                        children: option.label
                                                    }, option.value, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 836,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 832,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                lineNumber: 606,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isRefinance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "refinance-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-caption",
                                        children: "Refinance snapshot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 854,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label",
                                                        htmlFor: "existingLoanBalance",
                                                        children: "Current loan balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 857,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "existingLoanBalance",
                                                        name: "existingLoanBalance",
                                                        type: "number",
                                                        min: "0",
                                                        value: formState.existingLoanBalance,
                                                        onChange: handleFieldChange,
                                                        className: "form-input",
                                                        placeholder: "360000",
                                                        inputMode: "numeric"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 860,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 856,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label",
                                                        htmlFor: "refinanceGoal",
                                                        children: "Refinance goal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 874,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "refinanceGoal",
                                                        name: "refinanceGoal",
                                                        value: formState.refinanceGoal,
                                                        onChange: handleFieldChange,
                                                        className: "form-select",
                                                        children: refinanceGoals.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 885,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 877,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 873,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label",
                                                        htmlFor: "cashOutAmount",
                                                        children: "Cash-out amount (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 893,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "cashOutAmount",
                                                        name: "cashOutAmount",
                                                        type: "number",
                                                        min: "0",
                                                        value: formState.cashOutAmount,
                                                        onChange: handleFieldChange,
                                                        className: "form-input",
                                                        placeholder: "0",
                                                        inputMode: "numeric"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 896,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 892,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 855,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                lineNumber: 853,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "advanced-toggle",
                                onClick: toggleAdvanced,
                                "aria-expanded": showAdvanced,
                                children: showAdvanced ? "Hide advanced filters" : "Show advanced filters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                lineNumber: 912,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "advanced-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-caption",
                                        children: "Fine-tune your scenario"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 923,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label",
                                                        htmlFor: "propertyUnits",
                                                        children: "Number of units"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 926,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "propertyUnits",
                                                        name: "propertyUnits",
                                                        value: formState.propertyUnits,
                                                        onChange: handleFieldChange,
                                                        className: "form-select",
                                                        children: propertyUnitsOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 937,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 929,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 925,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label",
                                                        htmlFor: "closingTimeline",
                                                        children: "Closing timeline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 945,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "closingTimeline",
                                                        name: "closingTimeline",
                                                        value: formState.closingTimeline,
                                                        onChange: handleFieldChange,
                                                        className: "form-select",
                                                        children: closingTimelineOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 956,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 948,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 944,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label",
                                                        htmlFor: "firstTimeBuyer",
                                                        children: "First-time homebuyer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 964,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "firstTimeBuyer",
                                                        name: "firstTimeBuyer",
                                                        value: formState.firstTimeBuyer,
                                                        onChange: handleFieldChange,
                                                        className: "form-select",
                                                        children: firstTimeBuyerOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 975,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 967,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 963,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label",
                                                        htmlFor: "veteranStatus",
                                                        children: "Eligible for VA benefits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 983,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "veteranStatus",
                                                        name: "veteranStatus",
                                                        value: formState.veteranStatus,
                                                        onChange: handleFieldChange,
                                                        className: "form-select",
                                                        children: veteranStatusOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                                lineNumber: 994,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 986,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 982,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 924,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                lineNumber: 922,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "products-filter-footer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "estimated-metrics",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "estimated-metric",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "metric-label",
                                                        children: "Down payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 1007,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "metric-value",
                                                        children: currencyFormatter.format(downPaymentAmount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 1008,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 1006,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "estimated-metric",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "metric-label",
                                                        children: "Estimated loan amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "metric-value loan-amount-highlight",
                                                        children: currencyFormatter.format(estimatedLoanAmount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                        lineNumber: 1014,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                lineNumber: 1012,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 1005,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "find-products-button",
                                        disabled: isSubmitting,
                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiLoader, {
                                                    className: "loader-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Gathering products…"
                                            ]
                                        }, void 0, true) : "Find products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                        lineNumber: 1019,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                                lineNumber: 1004,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
                lineNumber: 596,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx",
        lineNumber: 594,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductsFilterWidget;
}),
"[project]/src/components/productsFilterWidget/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$productsFilterWidget$2f$ProductsFilterWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/compareProducts/CompareProducts.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RateCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ratesSection/RateCard.jsx [app-ssr] (ecmascript)");
;
;
;
const compareResultsStyles = `
.mortgage-results-page {
  font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
  background-color: #f7f8fa;
  color: #1f2933;
  min-height: 100vh;
  padding-bottom: 64px;
}

.scenario-summary-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #e4e8ef;
  border-bottom: 1px solid rgba(31, 41, 51, 0.1);
}

.summary-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.summary-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.95rem;
}

.scenario-line {
  font-weight: 600;
}

.timestamp-line {
  color: #52606d;
  font-size: 0.85rem;
}

.edit-scenario-button {
  background: none;
  border: none;
  color: #2a5bd7;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 0;
}

.edit-scenario-button:hover {
  text-decoration: underline;
}

.recommended-section,
.controls-section,
.comparison-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 0;
}

.section-title {
  font-size: 1.6rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.recommended-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.rate-card-grid,
.comparison-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.comparison-cards-grid {
  margin-top: 16px;
  margin-bottom: 24px;
}

.recommended-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-badge {
  align-self: flex-start;
  background-color: rgba(42, 91, 215, 0.12);
  color: #2a5bd7;
  font-weight: 600;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.85rem;
}

.card-headline {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-headline .rate {
  font-size: 2.25rem;
  font-weight: 700;
}

.card-headline .payment {
  font-size: 1.1rem;
  color: #364152;
}

.card-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  background-color: #f0f4ff;
  color: #1d3d8f;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.cost-snapshot {
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 16px;
  display: grid;
  gap: 12px;
}

.snapshot-label {
  display: block;
  color: #52606d;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.snapshot-value {
  display: block;
  font-weight: 700;
  font-size: 1rem;
}

.primary-button {
  background: linear-gradient(135deg, #2a5bd7, #1d3d8f);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.primary-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(42, 91, 215, 0.25);
}

.secondary-link {
  background: none;
  border: none;
  color: #2a5bd7;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  align-self: flex-start;
}

.secondary-link:hover {
  text-decoration: underline;
}

.controls-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
}

.sort-control {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 600;
}

.sort-control select {
  min-width: 200px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(82, 96, 109, 0.4);
  font-size: 0.95rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-chip {
  border-radius: 999px;
  border: 1px solid rgba(42, 91, 215, 0.25);
  background-color: #ffffff;
  color: #2a5bd7;
  padding: 8px 14px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.filter-chip.active {
  background-color: #2a5bd7;
  color: #ffffff;
  box-shadow: 0 8px 16px rgba(42, 91, 215, 0.25);
}

.comparison-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
}

.show-all-button {
  border: none;
  background: none;
  color: #2a5bd7;
  font-weight: 600;
  cursor: pointer;
}

.show-all-button:hover {
  text-decoration: underline;
}

.comparison-table-wrapper {
  overflow-x: auto;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
}

.comparison-table {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 700px;
  width: 100%;
}


.comparison-table th,
.comparison-table td {
  padding: 16px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.3);
  vertical-align: middle;
  background-color: #ffffff;

}

.comparison-table thead th {
  position: sticky;
  top: 0;
  background-color: #f0f4ff;
  z-index: 5;
  font-size: 0.9rem;
 
}

.sticky-column {
  position: sticky;
  left: 0;
  background-color: #f0f4ff;
  z-index: 6;
  text-align: left;
  font-weight: 600;
  min-width: 200px;
}

.numeric {
  text-align: center;
  font-variant-numeric: tabular-nums;
}

.comparison-table thead tr > th:nth-child(2n + 2) {
  background-color: #e2e8f8;
}

.comparison-table tbody tr > td:nth-child(2n + 2):not(.highlight) {
  background-color: #edf0fb;
}

.numeric .highlight-badge {
  display: inline-block;
  margin-left: 8px;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: rgba(34, 197, 94, 0.18);
  color: #047857;
  font-size: 0.75rem;
  font-weight: 600;
}

.highlight {
  background-color: rgba(34, 197, 94, 0.18);
}


.offer-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
}

.offer-lender {
  font-weight: 700;
  font-size: 1rem;
}


.table-details-link {
  align-self: center;
  border: none;
  background: none;
  color: #2a5bd7;
  font-weight: 600;
  cursor: pointer;
}

.table-details-link:hover {
  text-decoration: underline;
}

.rating-stars {
  display: inline-block;
  margin-right: 6px;
  font-weight: 600;
}

.rating-reviews {
  color: #52606d;
  font-size: 0.85rem;
}

.details-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.55);
  display: flex;
  justify-content: flex-end;
  z-index: 1300;
  padding: 24px;
}

.details-drawer {
  background-color: #ffffff;
  width: min(420px, 100%);
  border-radius: 24px;
  padding: 32px 24px 24px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #52606d;
}

.close-button:hover {
  color: #1f2933;
}

.details-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 16px;
}

.details-section h4 {
  margin-bottom: 8px;
  font-size: 1.05rem;
}

.details-section p,
.details-section li {
  color: #364152;
  line-height: 1.5;
  font-size: 0.95rem;
}

.details-section ul {
  padding-left: 18px;
  display: grid;
  gap: 8px;
}

.details-actions {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.secondary-button {
  border: 1px solid rgba(31, 41, 51, 0.2);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  cursor: pointer;
}

.secondary-button:hover {
  background-color: #f3f4f6;
}

@media (max-width: 768px) {
  .summary-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .comparison-table {
    min-width: 600px;
  }

  .details-overlay {
    padding: 0;
  }

  .details-drawer {
    border-radius: 0;
    width: 100%;
  }
}

@media (max-width: 540px) {
  .mortgage-results-page {
    padding-bottom: 48px;
  }

  .recommended-section,
  .controls-section,
  .comparison-section {
    padding-inline: 16px;
  }

  .recommended-card {
    padding: 20px;
  }
}
`;
const loanOffers = [
    {
        id: "offer-1",
        lenderName: "Acme Mortgage",
        rate: 5.75,
        apr: 5.88,
        monthlyPayment: 2432,
        points: 0.75,
        lenderFees: 1450,
        cashToClose: 27400,
        cost5yr: 152000,
        lockPeriodDays: 45,
        prepaymentPenalty: false,
        rating: 4.8,
        reviewsCount: 326,
        productType: "fixed",
        hasPMI: false,
        hasPoints: true,
        isRecommended: true,
        recommendationTag: "🏁 Lowest monthly payment",
        termYears: 30
    },
    {
        id: "offer-2",
        lenderName: "Bluebonnet Home Loans",
        rate: 5.9,
        apr: 6.02,
        monthlyPayment: 2485,
        points: 0,
        lenderFees: 990,
        cashToClose: 26180,
        cost5yr: 149500,
        lockPeriodDays: 30,
        prepaymentPenalty: false,
        rating: 4.6,
        reviewsCount: 214,
        productType: "fixed",
        hasPMI: false,
        hasPoints: false,
        isRecommended: true,
        recommendationTag: "⚡ Lowest upfront cost",
        termYears: 30
    },
    {
        id: "offer-3",
        lenderName: "Lone Star Lending",
        rate: 5.65,
        apr: 5.79,
        monthlyPayment: 2398,
        points: 1.05,
        lenderFees: 1200,
        cashToClose: 28950,
        cost5yr: 147800,
        lockPeriodDays: 60,
        prepaymentPenalty: false,
        rating: 4.9,
        reviewsCount: 412,
        productType: "fixed",
        hasPMI: false,
        hasPoints: true,
        isRecommended: true,
        recommendationTag: "🔒 Best long-term savings",
        termYears: 30
    },
    {
        id: "offer-4",
        lenderName: "MetroFlex Bank",
        rate: 5.35,
        apr: 5.91,
        monthlyPayment: 2360,
        points: 1.6,
        lenderFees: 1850,
        cashToClose: 31080,
        cost5yr: 155900,
        lockPeriodDays: 45,
        prepaymentPenalty: true,
        rating: 4.2,
        reviewsCount: 168,
        productType: "arm",
        hasPMI: false,
        hasPoints: true,
        isRecommended: false,
        recommendationTag: "",
        termYears: 7
    },
    {
        id: "offer-5",
        lenderName: "Pioneer Credit Union",
        rate: 6.05,
        apr: 6.18,
        monthlyPayment: 2520,
        points: 0,
        lenderFees: 850,
        cashToClose: 25800,
        cost5yr: 153300,
        lockPeriodDays: 30,
        prepaymentPenalty: false,
        rating: 4.4,
        reviewsCount: 98,
        productType: "fixed",
        hasPMI: true,
        hasPoints: false,
        isRecommended: false,
        recommendationTag: "",
        termYears: 30
    },
    {
        id: "offer-6",
        lenderName: "Riverstone Capital",
        rate: 5.4,
        apr: 6.08,
        monthlyPayment: 2389,
        points: 1.25,
        lenderFees: 2100,
        cashToClose: 31740,
        cost5yr: 158400,
        lockPeriodDays: 75,
        prepaymentPenalty: true,
        rating: 4.1,
        reviewsCount: 77,
        productType: "arm",
        hasPMI: false,
        hasPoints: true,
        isRecommended: false,
        recommendationTag: "",
        termYears: 5
    },
    {
        id: "offer-7",
        lenderName: "Heritage Mortgage",
        rate: 5.95,
        apr: 6.04,
        monthlyPayment: 2474,
        points: 0.35,
        lenderFees: 1050,
        cashToClose: 26840,
        cost5yr: 151600,
        lockPeriodDays: 45,
        prepaymentPenalty: false,
        rating: 4.7,
        reviewsCount: 265,
        productType: "fixed",
        hasPMI: false,
        hasPoints: true,
        isRecommended: false,
        recommendationTag: "",
        termYears: 30
    },
    {
        id: "offer-8",
        lenderName: "VistaView Loans",
        rate: 6.15,
        apr: 6.24,
        monthlyPayment: 2556,
        points: -0.25,
        lenderFees: 600,
        cashToClose: 24620,
        cost5yr: 150900,
        lockPeriodDays: 30,
        prepaymentPenalty: false,
        rating: 4.5,
        reviewsCount: 134,
        productType: "fixed",
        hasPMI: false,
        hasPoints: false,
        isRecommended: false,
        recommendationTag: "",
        termYears: 30
    }
];
const sortOptions = [
    {
        value: "payment",
        label: "Lowest payment"
    },
    {
        value: "cash",
        label: "Lowest cash to close"
    },
    {
        value: "rate",
        label: "Lowest rate"
    },
    {
        value: "cost5",
        label: "Lowest 5-year cost"
    },
    {
        value: "rating",
        label: "Lender rating"
    }
];
const defaultScenario = {
    quoteType: "Purchase",
    purchasePrice: 450000,
    downPaymentPercent: 20,
    termYears: 30,
    creditScore: 780,
    location: "Texas",
    lendersCount: loanOffers.length,
    timestamp: new Date().toISOString()
};
const formatter = new Intl.NumberFormat("en-US");
const CompareProducts = ({ scenario, onEditScenario })=>{
    const [selectedSort, setSelectedSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(sortOptions[0].value);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fixedOnly: false,
        armOnly: false,
        noPoints: false,
        noPMI: false
    });
    const [showAllOffers, setShowAllOffers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOffer, setSelectedOffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedOfferId, setExpandedOfferId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            document.body.style.overflow = "";
        };
    }, []);
    const resolvedScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const merged = {
            ...defaultScenario,
            ...scenario || {}
        };
        const purchasePrice = Number(merged.purchasePrice);
        const downPaymentPercent = Number(merged.downPaymentPercent);
        const resolvedPurchasePrice = Number.isFinite(purchasePrice) ? purchasePrice : defaultScenario.purchasePrice;
        const resolvedDownPaymentPercent = Number.isFinite(downPaymentPercent) ? downPaymentPercent : defaultScenario.downPaymentPercent;
        const downPaymentAmount = resolvedPurchasePrice * (resolvedDownPaymentPercent / 100);
        const loanAmount = Math.max(resolvedPurchasePrice - downPaymentAmount, 0);
        return {
            quoteType: merged.quoteType || "Purchase",
            purchasePrice: resolvedPurchasePrice,
            downPaymentPercent: resolvedDownPaymentPercent,
            termYears: merged.termYears || defaultScenario.termYears,
            creditScore: merged.creditScore || defaultScenario.creditScore,
            location: merged.stateSelection || merged.location || defaultScenario.location,
            lendersCount: loanOffers.length,
            lastUpdated: merged.timestamp instanceof Date ? merged.timestamp : new Date(merged.timestamp || defaultScenario.timestamp),
            loanAmount: Math.round(loanAmount)
        };
    }, [
        scenario
    ]);
    const recommendedOffers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const recs = loanOffers.filter((offer)=>offer.isRecommended);
        if (recs.length > 0) {
            return recs.slice(0, 3);
        }
        return [
            ...loanOffers
        ].sort((a, b)=>a.monthlyPayment - b.monthlyPayment).slice(0, 3);
    }, []);
    const filteredSortedOffers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = [
            ...loanOffers
        ];
        if (filters.fixedOnly && !filters.armOnly) {
            result = result.filter((offer)=>offer.productType === "fixed");
        }
        if (filters.armOnly && !filters.fixedOnly) {
            result = result.filter((offer)=>offer.productType === "arm");
        }
        if (filters.noPoints) {
            result = result.filter((offer)=>offer.hasPoints === false || offer.points <= 0);
        }
        if (filters.noPMI) {
            result = result.filter((offer)=>offer.hasPMI === false);
        }
        switch(selectedSort){
            case "payment":
                result.sort((a, b)=>a.monthlyPayment - b.monthlyPayment);
                break;
            case "cash":
                result.sort((a, b)=>a.cashToClose - b.cashToClose);
                break;
            case "rate":
                result.sort((a, b)=>a.rate - b.rate);
                break;
            case "cost5":
                result.sort((a, b)=>a.cost5yr - b.cost5yr);
                break;
            case "rating":
                result.sort((a, b)=>b.rating - a.rating);
                break;
            default:
                break;
        }
        return result;
    }, [
        filters,
        selectedSort
    ]);
    const visibleOffers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (showAllOffers) {
            return filteredSortedOffers;
        }
        return filteredSortedOffers.slice(0, 4);
    }, [
        filteredSortedOffers,
        showAllOffers
    ]);
    const lowestPayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (filteredSortedOffers.length === 0) return null;
        return Math.min(...filteredSortedOffers.map((offer)=>offer.monthlyPayment));
    }, [
        filteredSortedOffers
    ]);
    const lowestCash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (filteredSortedOffers.length === 0) return null;
        return Math.min(...filteredSortedOffers.map((offer)=>offer.cashToClose));
    }, [
        filteredSortedOffers
    ]);
    const lowestCost5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (filteredSortedOffers.length === 0) return null;
        return Math.min(...filteredSortedOffers.map((offer)=>offer.cost5yr));
    }, [
        filteredSortedOffers
    ]);
    const handleFilterToggle = (key)=>{
        setFilters((prev)=>{
            const nextValue = !prev[key];
            if (key === "fixedOnly" && nextValue) {
                return {
                    ...prev,
                    fixedOnly: true,
                    armOnly: false
                };
            }
            if (key === "armOnly" && nextValue) {
                return {
                    ...prev,
                    armOnly: true,
                    fixedOnly: false
                };
            }
            return {
                ...prev,
                [key]: nextValue
            };
        });
    };
    const toNumber = (value, fallback = 0)=>{
        const numeric = Number(value);
        return Number.isFinite(numeric) ? numeric : fallback;
    };
    const formatCurrency = (value)=>`$${formatter.format(toNumber(value))}`;
    const formatPercent = (value)=>`${toNumber(value).toFixed(3)}%`;
    const formatPoints = (value)=>{
        const numeric = toNumber(value, 0);
        if (numeric > 0) {
            return `${numeric.toFixed(2)} points`;
        }
        if (numeric < 0) {
            return `${Math.abs(numeric).toFixed(2)} credits`;
        }
        return "0 points";
    };
    const getLoanTypeLabel = (offer)=>{
        if (!offer) return "";
        const term = offer.termYears || 30;
        const typeLabel = offer.productType === "arm" ? "ARM" : offer.productType === "jumbo" ? "Jumbo" : "Fixed";
        return `${term}-Year ${typeLabel}`;
    };
    const buildPricingOptions = (offer)=>{
        const baseRate = toNumber(offer.rate, 0);
        const basePayment = toNumber(offer.monthlyPayment, 0);
        const basePoints = toNumber(offer.points, 0);
        const buydownRate = Math.max(0, baseRate - 0.25);
        const buydownPayment = Math.max(0, basePayment - 85);
        const creditRate = baseRate + 0.25;
        const creditPayment = Math.max(0, basePayment + 90);
        const creditPoints = basePoints > 0 ? -Math.max(0.5, basePoints / 2) : -0.5;
        return [
            {
                label: "Buydown",
                rate: buydownRate,
                points: basePoints + 0.75,
                monthlyPayment: buydownPayment
            },
            {
                label: "Par",
                rate: baseRate,
                points: 0,
                monthlyPayment: basePayment,
                isRecommended: true
            },
            {
                label: "Lender Credit",
                rate: creditRate,
                points: creditPoints,
                monthlyPayment: creditPayment
            }
        ];
    };
    const getBadges = (offer)=>{
        if (!offer) return [];
        const badgesList = [];
        if (offer.recommendationTag) {
            badgesList.push(offer.recommendationTag);
        }
        if (offer.rating) {
            badgesList.push(`⭐️ ${offer.rating.toFixed(1)}`);
        }
        if (offer.lockPeriodDays) {
            badgesList.push(`${offer.lockPeriodDays}-day lock`);
        }
        if (offer.hasPMI === false) {
            badgesList.push("No PMI");
        }
        return [
            ...new Set(badgesList)
        ].slice(0, 3);
    };
    const handleCardToggle = (offerId, nextExpanded)=>{
        setExpandedOfferId((prev)=>{
            if (nextExpanded) {
                return offerId;
            }
            if (prev === offerId) {
                return null;
            }
            return prev;
        });
    };
    const handleDetailsOpen = (offer)=>{
        setSelectedOffer(offer);
        document.body.style.overflow = "hidden";
    };
    const handleDetailsClose = ()=>{
        setSelectedOffer(null);
        document.body.style.overflow = "";
    };
    const showAllRemaining = !showAllOffers && filteredSortedOffers.length > visibleOffers.length;
    const downPaymentLabel = Number.isFinite(resolvedScenario.downPaymentPercent) ? `${resolvedScenario.downPaymentPercent % 1 === 0 ? resolvedScenario.downPaymentPercent : resolvedScenario.downPaymentPercent.toFixed(1)}% down` : "-- down";
    const purchaseDescriptor = resolvedScenario.quoteType && resolvedScenario.quoteType.toLowerCase() === "refinance" ? "refinance" : "purchase";
    const summaryText = `🏠 ${formatCurrency(resolvedScenario.purchasePrice)} ${purchaseDescriptor} • ${downPaymentLabel} • ${resolvedScenario.termYears}-year term • ${resolvedScenario.creditScore} credit • ${resolvedScenario.location}`;
    const lastUpdatedText = `Showing rates from ${resolvedScenario.lendersCount} lenders as of ${resolvedScenario.lastUpdated.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    })} (rates may change)`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: compareResultsStyles
            }, void 0, false, {
                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                lineNumber: 972,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mortgage-results-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scenario-summary-bar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "summary-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "summary-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "scenario-line",
                                            children: summaryText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 977,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "timestamp-line",
                                            children: lastUpdatedText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 978,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                    lineNumber: 976,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "edit-scenario-button",
                                    type: "button",
                                    onClick: ()=>onEditScenario?.(),
                                    children: "Edit scenario"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                    lineNumber: 980,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                            lineNumber: 975,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                        lineNumber: 974,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "recommended-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                children: "Recommended options for you"
                            }, void 0, false, {
                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                lineNumber: 991,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "recommended-grid rate-card-grid",
                                children: recommendedOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RateCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "offer",
                                        lenderName: offer.lenderName,
                                        loanType: getLoanTypeLabel(offer),
                                        rate: offer.rate,
                                        apr: offer.apr,
                                        monthlyPayment: offer.monthlyPayment,
                                        points: offer.points,
                                        badges: getBadges(offer),
                                        pricingOptions: buildPricingOptions(offer),
                                        loanAmount: resolvedScenario.loanAmount,
                                        homePrice: resolvedScenario.purchasePrice,
                                        ctaLabel: "Continue with this rate",
                                        onCtaClick: ()=>handleDetailsOpen(offer),
                                        isExpanded: expandedOfferId === offer.id,
                                        onToggle: (nextExpanded)=>handleCardToggle(offer.id, nextExpanded)
                                    }, offer.id, false, {
                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                        lineNumber: 994,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                lineNumber: 992,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                        lineNumber: 990,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "controls-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "controls-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "sort-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Sort by"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1021,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedSort,
                                            onChange: (event)=>setSelectedSort(event.target.value),
                                            children: sortOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.value,
                                                    children: option.label
                                                }, option.value, false, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1027,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1022,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                    lineNumber: 1020,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "filters",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `filter-chip ${filters.fixedOnly ? "active" : ""}`,
                                            onClick: ()=>handleFilterToggle("fixedOnly"),
                                            children: "Fixed only"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1034,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `filter-chip ${filters.armOnly ? "active" : ""}`,
                                            onClick: ()=>handleFilterToggle("armOnly"),
                                            children: "ARM only"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1041,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `filter-chip ${filters.noPoints ? "active" : ""}`,
                                            onClick: ()=>handleFilterToggle("noPoints"),
                                            children: "No points"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1048,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `filter-chip ${filters.noPMI ? "active" : ""}`,
                                            onClick: ()=>handleFilterToggle("noPMI"),
                                            children: "No PMI"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1055,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                    lineNumber: 1033,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                            lineNumber: 1019,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                        lineNumber: 1018,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "comparison-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "comparison-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-title",
                                        children: "Compare all offers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                        lineNumber: 1068,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showAllRemaining && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "show-all-button",
                                        onClick: ()=>setShowAllOffers(true),
                                        children: [
                                            "Show all offers (",
                                            filteredSortedOffers.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                        lineNumber: 1070,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                lineNumber: 1067,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "comparison-cards-grid rate-card-grid",
                                children: visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RateCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "offer",
                                        lenderName: offer.lenderName,
                                        loanType: getLoanTypeLabel(offer),
                                        rate: offer.rate,
                                        apr: offer.apr,
                                        monthlyPayment: offer.monthlyPayment,
                                        points: offer.points,
                                        badges: getBadges(offer),
                                        pricingOptions: buildPricingOptions(offer),
                                        loanAmount: resolvedScenario.loanAmount,
                                        homePrice: resolvedScenario.purchasePrice,
                                        ctaLabel: "View full details",
                                        onCtaClick: ()=>handleDetailsOpen(offer),
                                        isExpanded: expandedOfferId === offer.id,
                                        onToggle: (nextExpanded)=>handleCardToggle(offer.id, nextExpanded)
                                    }, offer.id, false, {
                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                        lineNumber: 1081,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                lineNumber: 1079,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "comparison-table-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "comparison-table",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "sticky-column"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                        lineNumber: 1107,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "offer-header",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "offer-lender",
                                                                        children: offer.lenderName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                        lineNumber: 1111,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "table-details-link",
                                                                        onClick: ()=>handleDetailsOpen(offer),
                                                                        children: "View full details"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                        lineNumber: 1112,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1110,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, offer.id, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1109,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                lineNumber: 1106,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1105,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Interest rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1126,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "numeric",
                                                                children: formatPercent(offer.rate)
                                                            }, `${offer.id}-rate`, false, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1128,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "APR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1134,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "numeric",
                                                                children: formatPercent(offer.apr)
                                                            }, `${offer.id}-apr`, false, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1136,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1133,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Monthly payment (P&I)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1142,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>{
                                                            const isBest = lowestPayment !== null && offer.monthlyPayment === lowestPayment;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `numeric ${isBest ? "highlight" : ""}`,
                                                                children: [
                                                                    formatCurrency(offer.monthlyPayment),
                                                                    isBest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "highlight-badge",
                                                                        children: "Lowest"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                        lineNumber: 1154,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, `${offer.id}-payment`, true, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1148,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Points / credits"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1161,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "numeric",
                                                                children: formatPoints(offer.points)
                                                            }, `${offer.id}-points`, false, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1163,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Lender fees"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1169,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "numeric",
                                                                children: formatCurrency(offer.lenderFees)
                                                            }, `${offer.id}-fees`, false, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1171,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1168,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Cash to close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1177,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>{
                                                            const isBest = lowestCash !== null && offer.cashToClose === lowestCash;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `numeric ${isBest ? "highlight" : ""}`,
                                                                children: [
                                                                    formatCurrency(offer.cashToClose),
                                                                    isBest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "highlight-badge",
                                                                        children: "Lowest"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                        lineNumber: 1188,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, `${offer.id}-cash`, true, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1182,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1176,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Cost over 5 years"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1195,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>{
                                                            const isBest = lowestCost5 !== null && offer.cost5yr === lowestCost5;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `numeric ${isBest ? "highlight" : ""}`,
                                                                children: [
                                                                    formatCurrency(offer.cost5yr),
                                                                    isBest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "highlight-badge",
                                                                        children: "Lowest"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                        lineNumber: 1206,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, `${offer.id}-cost5`, true, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1200,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1194,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Lock period"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1213,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "numeric",
                                                                children: [
                                                                    offer.lockPeriodDays,
                                                                    "-day"
                                                                ]
                                                            }, `${offer.id}-lock`, true, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1215,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1212,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Prepayment penalty"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1221,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    textAlign: "center"
                                                                },
                                                                children: offer.prepaymentPenalty ? "Yes" : "No"
                                                            }, `${offer.id}-prepay`, false, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1223,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1220,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "sticky-column",
                                                            children: "Lender rating"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1232,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        visibleOffers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    textAlign: "center"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rating-stars",
                                                                        children: [
                                                                            "⭐️ ",
                                                                            offer.rating.toFixed(1)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                        lineNumber: 1238,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rating-reviews",
                                                                        children: [
                                                                            "(",
                                                                            offer.reviewsCount,
                                                                            " reviews)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                        lineNumber: 1241,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, `${offer.id}-rating`, true, {
                                                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                                lineNumber: 1234,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1231,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1124,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                    lineNumber: 1104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                lineNumber: 1103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                        lineNumber: 1066,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "details-overlay",
                        onClick: handleDetailsClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "details-drawer",
                            onClick: (event)=>event.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "close-button",
                                    "aria-label": "Close details",
                                    onClick: handleDetailsClose,
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                    lineNumber: 1258,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "details-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: selectedOffer.lenderName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1267,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "details-section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Loan basics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Rate: ",
                                                        formatPercent(selectedOffer.rate),
                                                        " APR • Payment:",
                                                        " ",
                                                        formatCurrency(selectedOffer.monthlyPayment),
                                                        "/mo (principal & interest)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1270,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Term: ",
                                                        selectedOffer.termYears || "30-year fixed",
                                                        " • Lock period: ",
                                                        selectedOffer.lockPeriodDays,
                                                        "-day •",
                                                        " ",
                                                        selectedOffer.prepaymentPenalty ? "Includes" : "No",
                                                        " ",
                                                        "prepayment penalty"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "This loan amortizes over the full term, keeping your payment consistent as long as rates stay fixed."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1281,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1268,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "details-section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Cost breakdown"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1287,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Points / credits: ",
                                                                formatPoints(selectedOffer.points)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1289,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Lender fees: ",
                                                                formatCurrency(selectedOffer.lenderFees)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1292,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Third-party fees:",
                                                                " ",
                                                                formatCurrency(selectedOffer.thirdPartyFees || 2100)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1295,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Estimated escrow at closing:",
                                                                " ",
                                                                formatCurrency(selectedOffer.escrowEstimate || 4200)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1299,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Cash to close: ",
                                                                formatCurrency(selectedOffer.cashToClose)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                            lineNumber: 1303,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1286,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "details-section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Why this could work"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1309,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: lowestCost5 ? `If you stay in this home for around five years, this option is projected to be ${formatCurrency(Math.max(0, selectedOffer.cost5yr - lowestCost5))} more than the lowest-cost alternative over the same period.` : "If you stay in this home for around five years, this loan keeps your costs predictable compared with similar offers."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1310,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Compare the cash-to-close and monthly payment with other options to find your ideal balance of upfront versus ongoing cost."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                                    lineNumber: 1317,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1308,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                    lineNumber: 1266,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "details-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "primary-button",
                                            children: "Apply now"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1325,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "secondary-button",
                                            children: "Talk to a loan officer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                            lineNumber: 1328,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                                    lineNumber: 1324,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                            lineNumber: 1254,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                        lineNumber: 1253,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/compareProducts/CompareProducts.jsx",
                lineNumber: 973,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = CompareProducts;
}),
"[project]/src/components/compareProducts/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$compareProducts$2f$CompareProducts$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/compareProducts/CompareProducts.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/mortgageResults/MortgageOptionsPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const defaultScenario = {
    quoteType: "Purchase",
    purchasePrice: 550000,
    loanAmount: 440000,
    downPaymentPercent: 20,
    stateSelection: "CA",
    occupancy: "Primary Residence",
    propertyType: "Single Family",
    creditBand: undefined
};
const formatCurrency = (value)=>new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(Math.max(Number.isFinite(value) ? value : 0, 0));
const formatRate = (value)=>`${Number(value).toFixed(3)}%`;
const calculateMonthlyPayment = (principal, ratePercent, termYears)=>{
    const monthlyRate = ratePercent / 100 / 12;
    const numberOfPayments = termYears * 12;
    if (monthlyRate <= 0) {
        return principal / numberOfPayments || 0;
    }
    const payment = principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return Number.isFinite(payment) ? payment : 0;
};
const getScenarioSummary = (scenario, termYears)=>{
    const summaryParts = [
        scenario.quoteType === "Refinance" ? "Refinance" : "Purchase",
        `${formatCurrency(scenario.purchasePrice)} ${scenario.quoteType === "Refinance" ? "loan" : "purchase"}`,
        `${scenario.downPaymentPercent}% down`,
        `${termYears}-year fixed`
    ];
    if (scenario.creditBand) {
        summaryParts.push(`${scenario.creditBand} credit`);
    }
    summaryParts.push(scenario.stateSelection);
    return `🏠 ${summaryParts.join(" • ")}`;
};
const OPTION_CONTENT = {
    CREDIT: {
        label: "Lower Upfront Cost (Lender Credit)",
        subtitle: "Higher rate, minimal cash to close",
        description: "Higher rate but lower money due at closing. Good if you want to keep more cash on hand."
    },
    PAR: {
        label: "Balanced Option (No Points)",
        subtitle: "Straightforward pricing with no points",
        description: "No points and no lender credit. A straightforward, middle-of-the-road option."
    },
    BUYDOWN: {
        label: "Lower Monthly Payment (Rate Buydown)",
        subtitle: "Pay points to reduce the rate",
        description: "Pay points upfront to lower your monthly payment and total interest over time."
    }
};
const generateMortgageOptions = (scenario)=>{
    const sanitizedScenario = {
        ...defaultScenario,
        ...scenario
    };
    const termYears = 30;
    const baseRate = 6.25 + (sanitizedScenario.loanAmount > 600000 ? 0.125 : sanitizedScenario.loanAmount < 300000 ? -0.125 : 0);
    const downPaymentAmount = sanitizedScenario.quoteType === "Purchase" ? sanitizedScenario.purchasePrice * (sanitizedScenario.downPaymentPercent / 100) : 0;
    const estimatedClosingCosts = sanitizedScenario.loanAmount * 0.02;
    const buildOption = (kind, rateOffset, points)=>{
        const rate = baseRate + rateOffset;
        const apr = rate + (kind === "BUYDOWN" ? 0.09 : kind === "CREDIT" ? 0.16 : 0.12);
        const monthlyPayment = calculateMonthlyPayment(sanitizedScenario.loanAmount, rate, termYears);
        const pointsValue = sanitizedScenario.loanAmount * (points / 100);
        const cashToClose = Math.max(downPaymentAmount + estimatedClosingCosts + pointsValue, 0);
        return {
            id: `${kind}-${rate.toFixed(3)}`,
            kind,
            label: OPTION_CONTENT[kind].label,
            subtitle: OPTION_CONTENT[kind].subtitle,
            description: OPTION_CONTENT[kind].description,
            rate: Number(rate.toFixed(3)),
            apr: Number(apr.toFixed(3)),
            points,
            monthlyPayment,
            cashToClose,
            termYears,
            pointsValue
        };
    };
    return [
        buildOption("CREDIT", 0.375, -1),
        buildOption("PAR", 0, 0),
        buildOption("BUYDOWN", -0.25, 1)
    ];
};
const MortgageOptionsPage = ({ scenario, onEditScenario })=>{
    const sanitizedScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const merged = {
            ...defaultScenario,
            ...scenario || {}
        };
        return {
            ...merged,
            quoteType: merged.quoteType === "Refinance" ? "Refinance" : "Purchase",
            purchasePrice: Number.isFinite(Number(merged.purchasePrice)) ? Number(merged.purchasePrice) : defaultScenario.purchasePrice,
            loanAmount: Number.isFinite(Number(merged.loanAmount)) ? Number(merged.loanAmount) : Math.round(Number(merged.purchasePrice || defaultScenario.purchasePrice) * (1 - Number(merged.downPaymentPercent || 0) / 100)),
            downPaymentPercent: Number.isFinite(Number(merged.downPaymentPercent)) ? Number(merged.downPaymentPercent) : defaultScenario.downPaymentPercent,
            stateSelection: merged.stateSelection || defaultScenario.stateSelection,
            occupancy: merged.occupancy || defaultScenario.occupancy,
            propertyType: merged.propertyType || defaultScenario.propertyType,
            creditBand: merged.creditBand || defaultScenario.creditBand
        };
    }, [
        scenario
    ]);
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>generateMortgageOptions(sanitizedScenario), [
        sanitizedScenario
    ]);
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getScenarioSummary(sanitizedScenario, options[0]?.termYears || 30), [
        options,
        sanitizedScenario
    ]);
    const renderPointsSummary = (option)=>{
        const absolutePoints = Math.abs(option.points).toFixed(2);
        const dollarAmount = formatCurrency(Math.abs(option.pointsValue));
        if (option.points > 0) {
            return `Approx. ${absolutePoints} points (≈ ${dollarAmount} cost)`;
        }
        if (option.points < 0) {
            return `Approx. ${absolutePoints} points in lender credits (≈ ${dollarAmount} credit)`;
        }
        return "No points or credits";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mortgage-options-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "options-summary-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "scenario-summary-text",
                                children: summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "scenario-subtext",
                                children: [
                                    sanitizedScenario.occupancy,
                                    " • ",
                                    sanitizedScenario.propertyType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    onEditScenario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "edit-scenario-button",
                        onClick: onEditScenario,
                        children: "Edit my scenario"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "options-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "options-hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Here are your three loan options"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We built these from your scenario so you can compare how rate, upfront costs, and monthly payment change. Pick the one that fits your goals."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "options-grid",
                        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: `option-card option-${option.kind.toLowerCase()}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "option-pill",
                                        children: OPTION_CONTENT[option.kind].label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "option-subtitle",
                                        children: OPTION_CONTENT[option.kind].subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "option-rate-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "option-rate",
                                                children: formatRate(option.rate)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "option-apr",
                                                children: [
                                                    "APR ",
                                                    formatRate(option.apr)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "option-metric",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "metric-label",
                                                children: "Estimated Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "metric-value",
                                                children: `${formatCurrency(Math.round(option.monthlyPayment))} / month`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "metric-hint",
                                                children: "Principal & interest only"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "option-metric",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "metric-label",
                                                children: "Points / Credits"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "metric-value",
                                                children: renderPointsSummary(option)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "option-metric",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "metric-label",
                                                children: "Estimated cash to close"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "metric-value",
                                                children: formatCurrency(option.cashToClose)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "option-description",
                                        children: OPTION_CONTENT[option.kind].description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "option-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "option-primary-button",
                                                children: "Select this option"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "option-secondary-button",
                                                type: "button",
                                                children: "View fee breakdown"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, option.id, true, {
                                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "options-footer-note",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Rates and payments shown are estimates for illustration only and are based on the scenario you entered. Actual pricing may vary and is subject to change without notice. No hard credit check is performed until you complete a full application."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
                lineNumber: 206,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mortgageResults/MortgageOptionsPage.jsx",
        lineNumber: 191,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MortgageOptionsPage;
}),
"[project]/src/components/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/navbar/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$heroSection$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/heroSection/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ratesSection/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pricingWidget$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/pricingWidget/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateSectionMobile$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/rateSectionMobile/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/footer/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navDrawer$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/navDrawer/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/calculators/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoanEstimateUpload$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoanEstimateUpload.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$component3$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/component3/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/header/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageServices$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/mortgageServices/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateDropNotification$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/rateDropNotification/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$AffordabliityCalc$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/calculators/AffordabliityCalc/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$MortgageCalc$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/calculators/MortgageCalc/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$backdrop$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/backdrop/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyButton$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/applyButton/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$applyNowWidget$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/applyNowWidget/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$productsFilterWidget$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/productsFilterWidget/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$compareProducts$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/compareProducts/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageResults$2f$MortgageOptionsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mortgageResults/MortgageOptionsPage.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/src/components/navbar/Navbar.jsx [app-ssr] (ecmascript) <export default as Navbar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/Navbar.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/heroSection/HeroSection.jsx [app-ssr] (ecmascript) <export default as HeroSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$heroSection$2f$HeroSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$heroSection$2f$HeroSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/heroSection/HeroSection.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/ratesSection/RatesSection.jsx [app-ssr] (ecmascript) <export default as RatesSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatesSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RatesSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RatesSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ratesSection/RatesSection.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/pricingWidget/PricingWidget.jsx [app-ssr] (ecmascript) <export default as PricingWidget>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingWidget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pricingWidget$2f$PricingWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pricingWidget$2f$PricingWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pricingWidget/PricingWidget.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx [app-ssr] (ecmascript) <export default as RatesSectionMobile>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatesSectionMobile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateSectionMobile$2f$RatesSectionMobile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateSectionMobile$2f$RatesSectionMobile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/navDrawer/NavDrawer.jsx [app-ssr] (ecmascript) <export default as NavDrawer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavDrawer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navDrawer$2f$NavDrawer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navDrawer$2f$NavDrawer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navDrawer/NavDrawer.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/footer/Footer.jsx [app-ssr] (ecmascript) <export default as Footer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footer/Footer.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/calculators/Calculator.jsx [app-ssr] (ecmascript) <export default as Calculator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calculator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$Calculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$Calculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculators/Calculator.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx [app-ssr] (ecmascript) <export default as ProductsFilterWidget>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsFilterWidget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$productsFilterWidget$2f$ProductsFilterWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$productsFilterWidget$2f$ProductsFilterWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/compareProducts/CompareProducts.jsx [app-ssr] (ecmascript) <export default as CompareProducts>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompareProducts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$compareProducts$2f$CompareProducts$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$compareProducts$2f$CompareProducts$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/compareProducts/CompareProducts.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/LoanEstimateUpload.jsx [app-ssr] (ecmascript) <export default as LoanEstimateUpload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoanEstimateUpload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoanEstimateUpload$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoanEstimateUpload$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoanEstimateUpload.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/component3/Component3.jsx [app-ssr] (ecmascript) <export default as Component3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Component3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$component3$2f$Component3$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$component3$2f$Component3$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/component3/Component3.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/header/Header.jsx [app-ssr] (ecmascript) <export default as Header>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/Header.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/mortgageServices/MortgageServices.jsx [app-ssr] (ecmascript) <export default as MortgageServices>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MortgageServices",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageServices$2f$MortgageServices$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageServices$2f$MortgageServices$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mortgageServices/MortgageServices.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/rateDropNotification/RateDropNotification.jsx [app-ssr] (ecmascript) <export default as RateDropNotification>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RateDropNotification",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateDropNotification$2f$RateDropNotification$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateDropNotification$2f$RateDropNotification$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/rateDropNotification/RateDropNotification.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx [app-ssr] (ecmascript) <export default as AffordabilityCalc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AffordabilityCalc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$AffordabliityCalc$2f$AffordabilityCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$AffordabliityCalc$2f$AffordabilityCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx [app-ssr] (ecmascript) <export default as MortgageCalc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MortgageCalc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$MortgageCalc$2f$MortgageCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$MortgageCalc$2f$MortgageCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/mortgageResults/MortgageOptionsPage.jsx [app-ssr] (ecmascript) <export default as MortgageOptionsPage>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MortgageOptionsPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageResults$2f$MortgageOptionsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageResults$2f$MortgageOptionsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mortgageResults/MortgageOptionsPage.jsx [app-ssr] (ecmascript)");
}),
"[project]/src/reducer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>reducer
]);
function reducer(state, { type, payload }) {
    switch(type){
        case "SHOW_PRICING_WIDGET":
            return {
                ...state,
                showPricingWidget: payload
            };
        case "SHOW_MORTGAGE_CALCULATOR":
            return {
                ...state,
                showMortgageCalculator: payload
            };
        case "SHOW_AFFORDABILTY_CALCULATOR":
            return {
                ...state,
                showAffordabilityCalculator: payload
            };
        case "LOGIN_USER":
            return {
                ...state,
                currentUser: payload
            };
        case "SET_ACTIVE_COMPONENT":
            return {
                ...state,
                activeComponent: payload
            };
        case "TOGGLE_NAV_DRAWER":
            return {
                ...state,
                isNavDrawerOpen: !state.isNavDrawerOpen
            };
        case "SHOW_APPLY_NOW_WIDGET":
            return {
                ...state,
                showApplyNowWidget: payload
            };
        case "SET_MORTGAGE_RATES":
            return {
                ...state,
                mortgageRates: payload
            };
        case "TOGGLE_PRODUCT_COMPARISON":
            return {
                ...state,
                showProductComparison: payload
            };
        case "SET_MORTGAGE_SCENARIO":
            return {
                ...state,
                mortgageScenario: payload
            };
        case "SHOW_MORTGAGE_RESULTS_PAGE":
            return {
                ...state,
                showMortgageResultsPage: payload
            };
        // Other cases...
        default:
            return state;
    }
}
}),
"[project]/src/App.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navbar$3e$__ = __turbopack_context__.i("[project]/src/components/navbar/Navbar.jsx [app-ssr] (ecmascript) <export default as Navbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$heroSection$2f$HeroSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeroSection$3e$__ = __turbopack_context__.i("[project]/src/components/heroSection/HeroSection.jsx [app-ssr] (ecmascript) <export default as HeroSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RatesSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RatesSection$3e$__ = __turbopack_context__.i("[project]/src/components/ratesSection/RatesSection.jsx [app-ssr] (ecmascript) <export default as RatesSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pricingWidget$2f$PricingWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PricingWidget$3e$__ = __turbopack_context__.i("[project]/src/components/pricingWidget/PricingWidget.jsx [app-ssr] (ecmascript) <export default as PricingWidget>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateSectionMobile$2f$RatesSectionMobile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RatesSectionMobile$3e$__ = __turbopack_context__.i("[project]/src/components/rateSectionMobile/RatesSectionMobile.jsx [app-ssr] (ecmascript) <export default as RatesSectionMobile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navDrawer$2f$NavDrawer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavDrawer$3e$__ = __turbopack_context__.i("[project]/src/components/navDrawer/NavDrawer.jsx [app-ssr] (ecmascript) <export default as NavDrawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Footer$3e$__ = __turbopack_context__.i("[project]/src/components/footer/Footer.jsx [app-ssr] (ecmascript) <export default as Footer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$Calculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/src/components/calculators/Calculator.jsx [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$productsFilterWidget$2f$ProductsFilterWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductsFilterWidget$3e$__ = __turbopack_context__.i("[project]/src/components/productsFilterWidget/ProductsFilterWidget.jsx [app-ssr] (ecmascript) <export default as ProductsFilterWidget>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$compareProducts$2f$CompareProducts$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CompareProducts$3e$__ = __turbopack_context__.i("[project]/src/components/compareProducts/CompareProducts.jsx [app-ssr] (ecmascript) <export default as CompareProducts>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoanEstimateUpload$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoanEstimateUpload$3e$__ = __turbopack_context__.i("[project]/src/components/LoanEstimateUpload.jsx [app-ssr] (ecmascript) <export default as LoanEstimateUpload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$component3$2f$Component3$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Component3$3e$__ = __turbopack_context__.i("[project]/src/components/component3/Component3.jsx [app-ssr] (ecmascript) <export default as Component3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Header$3e$__ = __turbopack_context__.i("[project]/src/components/header/Header.jsx [app-ssr] (ecmascript) <export default as Header>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageServices$2f$MortgageServices$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MortgageServices$3e$__ = __turbopack_context__.i("[project]/src/components/mortgageServices/MortgageServices.jsx [app-ssr] (ecmascript) <export default as MortgageServices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateDropNotification$2f$RateDropNotification$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RateDropNotification$3e$__ = __turbopack_context__.i("[project]/src/components/rateDropNotification/RateDropNotification.jsx [app-ssr] (ecmascript) <export default as RateDropNotification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$AffordabliityCalc$2f$AffordabilityCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AffordabilityCalc$3e$__ = __turbopack_context__.i("[project]/src/components/calculators/AffordabliityCalc/AffordabilityCalc.jsx [app-ssr] (ecmascript) <export default as AffordabilityCalc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$MortgageCalc$2f$MortgageCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MortgageCalc$3e$__ = __turbopack_context__.i("[project]/src/components/calculators/MortgageCalc/MortgageCalc.jsx [app-ssr] (ecmascript) <export default as MortgageCalc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageResults$2f$MortgageOptionsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MortgageOptionsPage$3e$__ = __turbopack_context__.i("[project]/src/components/mortgageResults/MortgageOptionsPage.jsx [app-ssr] (ecmascript) <export default as MortgageOptionsPage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reducer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reducer.jsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-device-detect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyRates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyRates.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const componentsList = [
    "HeroSection",
    "Calculator",
    "ProductsFilterWidget",
    "LoanEstimateUpload",
    "Component3"
];
const ApplyNowWidget = ({ isVisible, onClose })=>{
    const variants = {
        hidden: {
            y: "100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };
    const overlay = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)"
    };
    const widget = {
        backgroundColor: "#fff",
        width: "95%",
        maxWidth: "1100px",
        height: "90vh",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
    };
    const closeStyle = {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
        fontSize: "1.5rem",
        color: "#fff",
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "6px",
        borderRadius: "50%"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            style: overlay,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            variants: variants,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiX, {
                    style: closeStyle,
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 109,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    style: widget,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: "https://viewyourrate.my1003app.com?time=1743826121808",
                        style: {
                            width: "100%",
                            height: "100%",
                            border: "none"
                        },
                        title: "Apply Now"
                    }, void 0, false, {
                        fileName: "[project]/src/App.js",
                        lineNumber: 111,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 110,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/App.js",
            lineNumber: 102,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/App.js",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const navItems = [
    {
        name: "Home",
        index: 0,
        component: "HeroSection"
    },
    {
        name: "Calculators",
        index: 1,
        component: "Calculator"
    },
    {
        name: "Compare Products",
        index: 2,
        component: "ProductsFilterWidget"
    },
    {
        name: "Loan Estimate Upload",
        index: 3,
        component: "LoanEstimateUpload"
    },
    {
        name: "Component3",
        index: 4,
        component: "Component3"
    },
    {
        name: "Contact",
        index: 5,
        component: "Contact"
    }
];
const App = ()=>{
    const initialState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reducer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], initialState);
    const [showHeader, setShowHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showRatesSection, setShowRatesSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const isShowingProductComparison = state.showProductComparison;
    const isActiveProductsFilter = componentsList[state.activeComponent] === "ProductsFilterWidget";
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home");
    const [activeScenario, setActiveScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const topRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const appStyles = {
        fontFamily: "Arial, sans-serif",
        position: "relative"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dispatch({
            type: "SET_MORTGAGE_RATES",
            payload: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyRates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dummyRates"]
        });
    }, [
        dispatch
    ]);
    const scrollToFooter = ()=>{
        if (footerRef.current) {
            footerRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    const scrollToTop = ()=>{
        if (topRef.current) {
            topRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    const handleNavClick = (index)=>{
        setActivePage("home");
        dispatch({
            type: "SET_ACTIVE_COMPONENT",
            payload: index
        });
        if (navItems[index].name === "Contact") {
            scrollToFooter();
        } else {
            scrollToTop();
        }
        if (navItems[index].name !== "Compare Products") {
            dispatch({
                type: "TOGGLE_PRODUCT_COMPARISON",
                payload: false
            });
        }
    };
    const toggleDrawer = ()=>{
        dispatch({
            type: "TOGGLE_NAV_DRAWER"
        });
    };
    const handleNext = ()=>{
        setDirection(1);
        const newIndex = (state.activeComponent + 1) % componentsList.length;
        dispatch({
            type: "SET_ACTIVE_COMPONENT",
            payload: newIndex
        });
    };
    const handlePrevious = ()=>{
        setDirection(-1);
        const newIndex = (state.activeComponent - 1 + componentsList.length) % componentsList.length;
        dispatch({
            type: "SET_ACTIVE_COMPONENT",
            payload: newIndex
        });
    };
    const handleScenarioSubmit = (scenarioData)=>{
        dispatch({
            type: "SET_MORTGAGE_SCENARIO",
            payload: scenarioData
        });
    };
    const renderActiveComponent = ()=>{
        switch(componentsList[state.activeComponent]){
            case "HeroSection":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$heroSection$2f$HeroSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeroSection$3e$__["HeroSection"], {
                    state: state,
                    dispatch: dispatch
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 212,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "Calculator":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$Calculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                    dispatch: dispatch
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 214,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "ProductsFilterWidget":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$productsFilterWidget$2f$ProductsFilterWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductsFilterWidget$3e$__["ProductsFilterWidget"], {}, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 216,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "LoanEstimateUpload":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoanEstimateUpload$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoanEstimateUpload$3e$__["LoanEstimateUpload"], {}, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 218,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "Component3":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$component3$2f$Component3$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Component3$3e$__["Component3"], {}, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 220,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const activeComponentName = componentsList[state.activeComponent];
        const activeNavItem = navItems.find((item)=>item.component === activeComponentName);
        if (activeNavItem) {
            dispatch({
                type: "SET_ACTIVE_NAV",
                payload: activeNavItem.index
            });
        }
    }, [
        state.activeComponent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 35) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            if (footerRef.current) {
                if (window.scrollY > 100) {
                    setOpacity(0);
                    setTimeout(()=>setShowRatesSection(false), 500);
                } else {
                    setOpacity(1);
                    setTimeout(()=>setShowRatesSection(true), 500);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: {
            state,
            dispatch
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: appStyles,
            ref: topRef,
            children: [
                !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Header$3e$__["Header"], {}, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 264,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navbar$3e$__["Navbar"], {
                    onNavClick: handleNavClick,
                    toggleDrawer: toggleDrawer,
                    navItems: navItems,
                    activeComponent: state.activeComponent,
                    ref: navbarRef,
                    showHeader: showHeader
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 265,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navDrawer$2f$NavDrawer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavDrawer$3e$__["NavDrawer"], {
                    isOpen: state.isNavDrawerOpen,
                    toggleDrawer: toggleDrawer,
                    active: state.activeComponent,
                    handleNavClick: handleNavClick,
                    navItems: navItems
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 274,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                activePage === "home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        isShowingProductComparison ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$compareProducts$2f$CompareProducts$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CompareProducts$3e$__["CompareProducts"], {
                            scenario: state.mortgageScenario,
                            onEditScenario: ()=>{
                                dispatch({
                                    type: "TOGGLE_PRODUCT_COMPARISON",
                                    payload: false
                                });
                                dispatch({
                                    type: "SET_ACTIVE_COMPONENT",
                                    payload: 2
                                });
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 285,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...baseMainContainerStyles,
                                alignItems: isActiveProductsFilter ? "flex-start" : baseMainContainerStyles.alignItems,
                                paddingTop: isActiveProductsFilter ? isMobile ? 48 : 56 : 0,
                                paddingBottom: isActiveProductsFilter ? isMobile ? 24 : 32 : 0,
                                overflow: isActiveProductsFilter ? "auto" : baseMainContainerStyles.overflow
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    style: {
                                        margin: isMobile ? 0 : 10,
                                        left: 0,
                                        position: "absolute",
                                        // transform: "translateY(-50%)",
                                        ...arrowStyles
                                    },
                                    onClick: handlePrevious,
                                    whileHover: {
                                        scale: 1.2
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowLeft, {}, void 0, false, {
                                        fileName: "[project]/src/App.js",
                                        lineNumber: 325,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/App.js",
                                    lineNumber: 313,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                                    wait: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            x: direction === 1 ? 300 : -300,
                                            opacity: 0
                                        },
                                        animate: {
                                            x: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            x: direction === 1 ? -300 : 300,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        style: {
                                            width: "100%",
                                            height: "100%"
                                        },
                                        children: renderActiveComponent()
                                    }, state.activeComponent, false, {
                                        fileName: "[project]/src/App.js",
                                        lineNumber: 329,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/App.js",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    style: {
                                        margin: isMobile ? 0 : 10,
                                        right: 0,
                                        position: "absolute",
                                        // transform: "translateY(-50%)",
                                        ...arrowStyles
                                    },
                                    onClick: handleNext,
                                    whileHover: {
                                        scale: 1.2
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowRight, {}, void 0, false, {
                                        fileName: "[project]/src/App.js",
                                        lineNumber: 353,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/App.js",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 296,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        state.activeComponent === 0 && (isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateSectionMobile$2f$RatesSectionMobile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RatesSectionMobile$3e$__["RatesSectionMobile"], {
                            dispatch: dispatch,
                            state: state
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 359,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)) : showRatesSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transition: "opacity 0.5s ease",
                                opacity
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ratesSection$2f$RatesSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RatesSection$3e$__["RatesSection"], {
                                dispatch: dispatch,
                                state: state
                            }, void 0, false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 363,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 362,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rateDropNotification$2f$RateDropNotification$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RateDropNotification$3e$__["RateDropNotification"], {}, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 368,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageServices$2f$MortgageServices$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MortgageServices$3e$__["MortgageServices"], {}, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 369,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : activeScenario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mortgageResults$2f$MortgageOptionsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MortgageOptionsPage$3e$__["MortgageOptionsPage"], {
                    scenario: activeScenario,
                    onEditScenario: ()=>{
                        setActivePage("home");
                        setTimeout(()=>{
                            dispatch({
                                type: "SHOW_PRICING_WIDGET",
                                payload: true
                            });
                        }, 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 373,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ApplyNowWidget, {
                    isVisible: state.showApplyNowWidget,
                    onClose: ()=>dispatch({
                            type: "SHOW_APPLY_NOW_WIDGET",
                            payload: false
                        })
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 384,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Footer$3e$__["Footer"], {
                    ref: footerRef
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 391,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pricingWidget$2f$PricingWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PricingWidget$3e$__["PricingWidget"], {
                    isVisible: state.showPricingWidget,
                    onClose: ()=>dispatch({
                            type: "SHOW_PRICING_WIDGET",
                            payload: false
                        }),
                    onScenarioSubmit: handleScenarioSubmit,
                    onShowOptionsPage: (scenarioData)=>{
                        setActiveScenario(scenarioData);
                        setActivePage("mortgageOptions");
                        dispatch({
                            type: "SHOW_PRICING_WIDGET",
                            payload: false
                        });
                        dispatch({
                            type: "TOGGLE_PRODUCT_COMPARISON",
                            payload: false
                        });
                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                        ;
                    }
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 392,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$AffordabliityCalc$2f$AffordabilityCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AffordabilityCalc$3e$__["AffordabilityCalc"], {
                    isVisible: state.showAffordabilityCalculator,
                    onClose: ()=>dispatch({
                            type: "SHOW_AFFORDABILTY_CALCULATOR",
                            payload: false
                        })
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 408,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculators$2f$MortgageCalc$2f$MortgageCalc$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MortgageCalc$3e$__["MortgageCalc"], {
                    isVisible: state.showMortgageCalculator,
                    onClose: ()=>dispatch({
                            type: "SHOW_MORTGAGE_CALCULATOR",
                            payload: false
                        })
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 414,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/App.js",
            lineNumber: 263,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/App.js",
        lineNumber: 262,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Styles for main container with background image
const baseMainContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    backgroundImage: "url(/background.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
};
// Styles for arrows
const arrowStyles = {
    width: "40px",
    height: "40px",
    top: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 1000,
    fontSize: "1.5rem",
    color: "#007bff",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
};
const __TURBOPACK__default__export__ = App;
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.js [app-ssr] (ecmascript)");
"use client";
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__292b8c03._.js.map