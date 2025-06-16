(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sheet": (()=>Sheet),
    "SheetClose": (()=>SheetClose),
    "SheetContent": (()=>SheetContent),
    "SheetDescription": (()=>SheetDescription),
    "SheetFooter": (()=>SheetFooter),
    "SheetHeader": (()=>SheetHeader),
    "SheetOverlay": (()=>SheetOverlay),
    "SheetPortal": (()=>SheetPortal),
    "SheetTitle": (()=>SheetTitle),
    "SheetTrigger": (()=>SheetTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 70,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this);
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, this));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, this));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/logo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const Logo = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: className,
        "aria-label": "Home",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/logo/logo.png",
            alt: "StreamVerse Logo",
            className: "h-10 w-auto"
        }, void 0, false, {
            fileName: "[project]/src/components/common/logo.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/logo.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = Logo;
const __TURBOPACK__default__export__ = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const NavLinks = ({ inSheet = false })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const activeClass = 'bg-primary text-primary-foreground font-semibold';
    const baseClass = `${inSheet ? 'w-full justify-start text-base py-3' : ''}`;
    const isMovies = pathname === '/movies' && !searchParams.get('type');
    const isSeries = pathname === '/series';
    const isTrending = pathname === '/top-trending';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                asChild: true,
                className: baseClass + (pathname === '/' ? ` ${activeClass}` : ''),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                asChild: true,
                className: baseClass + (pathname.startsWith('/anime-list') ? ` ${activeClass}` : ''),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/anime-list",
                    children: "Anime List"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                asChild: true,
                className: baseClass + (isMovies ? ` ${activeClass}` : ''),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/movies",
                    children: "Movies"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                asChild: true,
                className: baseClass + (isSeries ? ` ${activeClass}` : ''),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/series",
                    children: "Series"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                asChild: true,
                className: baseClass + (isTrending ? ` ${activeClass}` : ''),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/top-trending",
                    children: "Top Trending"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(NavLinks, "AxA9T5G2Po78UC4hL8ljCdvMciE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = NavLinks;
const Header = ()=>{
    _s1();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>setMounted(true)
    }["Header.useEffect"], []);
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 w-24 bg-muted rounded animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow mx-2 block md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSearch,
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "search",
                                placeholder: "Search...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "h-9 pl-8 pr-3 w-full text-sm rounded-md bg-background/70 border-border focus:bg-background"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden md:flex items-center space-x-1 ml-auto mr-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLinks, {}, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-1 sm:space-x-2 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSearch,
                            className: "relative hidden md:block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "search",
                                    placeholder: "Search...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "h-9 pl-8 pr-3 w-40 lg:w-56 text-sm rounded-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "hidden md:inline-flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "User Profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: "Open menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                        side: "right",
                                        className: "w-[280px] bg-background p-4 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                className: "sr-only",
                                                children: "Navigation Menu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                className: "flex flex-col space-y-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLinks, {
                                                    inSheet: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-auto pt-4 border-t border-border space-y-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    className: "w-full justify-start text-base py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "mr-2 h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Profile"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
_s1(Header, "0u1Ik2jU/lYqO8uNi9IT4eEZ3hI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = Header;
const __TURBOPACK__default__export__ = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavLinks");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/main-footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/apple.js [app-client] (ecmascript) <export default as Apple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
;
;
;
;
;
;
const FooterLinkGroup = ({ title, links })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-foreground uppercase tracking-wider mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/layout/main-footer.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2",
                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: "text-muted-foreground hover:text-primary text-sm",
                            children: link.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/main-footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    }, link.href, false, {
                        fileName: "[project]/src/components/layout/main-footer.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/main-footer.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/main-footer.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this);
_c = FooterLinkGroup;
const SocialLink = ({ href, icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        "aria-label": label,
        className: "text-muted-foreground hover:text-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/main-footer.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/main-footer.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this);
_c1 = SocialLink;
const MainFooter = ()=>{
    const genresLinks = [
        {
            href: '/genre/action',
            label: 'Action'
        },
        {
            href: '/genre/comedy',
            label: 'Comedy'
        },
        {
            href: '/genre/drama',
            label: 'Drama'
        },
        {
            href: '/genre/sci-fi',
            label: 'Sci-Fi'
        },
        {
            href: '/genre/horror',
            label: 'Horror'
        },
        {
            href: '/genre/romance',
            label: 'Romance'
        }
    ];
    const navigationLinks = [
        {
            href: '/',
            label: 'Home'
        },
        {
            href: '/movies',
            label: 'Movies'
        },
        {
            href: '/tv-shows',
            label: 'TV Shows'
        },
        {
            href: '/search',
            label: 'Search'
        },
        {
            href: '/player',
            label: 'Player Page'
        }
    ];
    const companyLinks = [
        {
            href: '/about',
            label: 'About Us'
        },
        {
            href: '/help/faq',
            label: 'FAQ'
        },
        {
            href: '/legal/privacy',
            label: 'Privacy Policy'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-card text-card-foreground border-t border-border mt-12 sm:mt-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 pb-8 border-b border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm mt-2",
                                    children: "Your universe of entertainment."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                    lineNumber: 55,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/main-footer.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground mb-2",
                                    children: "Stay Updated"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm mb-3",
                                    children: "Subscribe to our newsletter for the latest releases and updates."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "email",
                                            placeholder: "Enter your email",
                                            className: "max-w-sm bg-input border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/main-footer.tsx",
                                            lineNumber: 61,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            variant: "default",
                                            className: "bg-primary text-primary-foreground",
                                            children: "Subscribe"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/main-footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/main-footer.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/main-footer.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLinkGroup, {
                            title: "Genres",
                            links: genresLinks
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/main-footer.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLinkGroup, {
                            title: "Navigation",
                            links: navigationLinks
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/main-footer.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLinkGroup, {
                            title: "Company",
                            links: companyLinks
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/main-footer.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2 flex flex-row items-start gap-x-6 sm:flex-col sm:gap-y-6 sm:col-span-1 lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1/2 sm:w-full",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-foreground uppercase tracking-wider mb-3",
                                            children: "Get the App"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/main-footer.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "w-full justify-start border-muted-foreground text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/main-footer.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Google Play"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "w-full justify-start border-muted-foreground text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__["Apple"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/main-footer.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, this),
                                                        " App Store"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/main-footer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1/2 sm:w-full",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-foreground uppercase tracking-wider mb-3",
                                            children: "Follow Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/main-footer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-x-3 gap-y-2",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLink, {
                                                    href: "#",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
                                                    label: "Facebook"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLink, {
                                                    href: "#",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                                    label: "Twitter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLink, {
                                                    href: "#",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                                    label: "Instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLink, {
                                                    href: "#",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
                                                    label: "YouTube"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLink, {
                                                    href: "#",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                                    label: "LinkedIn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/main-footer.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/main-footer.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/main-footer.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/main-footer.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-8 border-t border-border text-sm text-muted-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center sm:text-left mb-4 sm:mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "© ",
                                            new Date().getFullYear(),
                                            " Arise Anime | All rights reserved."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/main-footer.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs",
                                        children: "Disclaimer: This site Arise Anime does not store any files on its server. All contents are provided by non-affiliated third parties."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/main-footer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/main-footer.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-4 mt-2 sm:mt-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/legal/privacy",
                                        className: "hover:text-primary",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/main-footer.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/legal/terms",
                                        className: "hover:text-primary",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/main-footer.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/legal/cookies",
                                        className: "hover:text-primary",
                                        children: "Cookie Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/main-footer.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/main-footer.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/main-footer.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/main-footer.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/main-footer.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/main-footer.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
_c2 = MainFooter;
const __TURBOPACK__default__export__ = MainFooter;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FooterLinkGroup");
__turbopack_context__.k.register(_c1, "SocialLink");
__turbopack_context__.k.register(_c2, "MainFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/ad-banner-section.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const AdBannerSection = ({ ad })=>{
    // Desktop specific classes
    const desktopAspectRatioClass = ad.aspectRatio === '3.4:0.7' ? 'aspect-[3.4/0.7]' : 'aspect-[3.4/1.2]';
    const desktopMaxHClass = ad.aspectRatio === '3.4:0.7' ? 'max-h-[250px]' : 'max-h-[400px]';
    // Mobile specific aspect ratio based on ad.aspectRatio prop
    const mobileImageAspectRatioClass = ad.aspectRatio === '3.4:0.7' ? 'aspect-[34/7]' : 'aspect-[17/6]';
    // Use a placeholder if imageUrl is missing
    const imageUrl = ad.imageUrl || '/banners/After_New_Releases.png';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "my-8 sm:my-12 text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full overflow-hidden", mobileImageAspectRatioClass),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: imageUrl,
                        alt: ad.title,
                        fill: true,
                        className: "object-cover",
                        "data-ai-hint": ad.imageHint
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ad-banner-section.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ad-banner-section.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ad-banner-section.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hidden md:block relative w-full h-auto text-foreground", desktopAspectRatioClass, desktopMaxHClass),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: ad.title,
                    fill: true,
                    className: "object-cover",
                    "data-ai-hint": ad.imageHint
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ad-banner-section.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ad-banner-section.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ad-banner-section.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_c = AdBannerSection;
const __TURBOPACK__default__export__ = AdBannerSection;
var _c;
__turbopack_context__.k.register(_c, "AdBannerSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/mock-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "adBannerAnimeListData": (()=>adBannerAnimeListData),
    "adBannerLeftOverlayData": (()=>adBannerLeftOverlayData),
    "adBannerRightOverlayData": (()=>adBannerRightOverlayData),
    "adBannerSearchData": (()=>adBannerSearchData),
    "adPlacementData": (()=>adPlacementData),
    "heroMoviesData": (()=>heroMoviesData),
    "newReleasesData": (()=>newReleasesData),
    "recommendedTvShowsData": (()=>recommendedTvShowsData),
    "topCharactersData": (()=>topCharactersData),
    "topComingSoonData": (()=>topComingSoonData),
    "topNewsData": (()=>topNewsData),
    "topPicksData": (()=>topPicksData),
    "trendingMoviesData": (()=>trendingMoviesData),
    "tvSeriesData": (()=>tvSeriesData),
    "tvShowGridData": (()=>tvShowGridData)
});
const heroMoviesData = [
    {
        id: 'hero-1',
        title: 'Attack on Titan',
        year: '2013',
        duration: 'TV Series',
        description: 'Humanity fights for survival against giant humanoid Titans in a post-apocalyptic world.',
        imageUrl: '/hero/attack_on_titan_poster.png',
        imageHint: 'action, titans, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-2',
        title: 'Demon Slayer: Kimetsu no Yaiba',
        year: '2019',
        duration: 'TV Series',
        description: 'A young boy becomes a demon slayer to avenge his family and save his sister.',
        imageUrl: '/hero/demon_slayer_poster.png',
        imageHint: 'demon, sword, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-3',
        title: 'Jujutsu Kaisen',
        year: '2020',
        duration: 'TV Series',
        description: 'A high schooler joins a secret organization to fight supernatural curses.',
        imageUrl: '/hero/jujutsu_kaisen_poster.png',
        imageHint: 'curses, action, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-4',
        title: 'My Hero Academia',
        year: '2016',
        duration: 'TV Series',
        description: 'In a world of superpowers, a powerless boy dreams of becoming a hero.',
        imageUrl: '/hero/my_hero_academia_poster.webp',
        imageHint: 'superhero, school, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-5',
        title: 'One Piece',
        year: '1999',
        duration: 'TV Series',
        description: 'A young pirate and his crew search for the ultimate treasure, the One Piece.',
        imageUrl: '/hero/one_piece_poster.png',
        imageHint: 'pirate, adventure, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-6',
        title: 'Naruto',
        year: '2002',
        duration: 'TV Series',
        description: 'A young ninja seeks recognition and dreams of becoming the Hokage.',
        imageUrl: '/hero/naruto_poster.png',
        imageHint: 'ninja, action, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-7',
        title: 'Fullmetal Alchemist: Brotherhood',
        year: '2009',
        duration: 'TV Series',
        description: 'Two brothers use alchemy in their quest to restore their bodies.',
        imageUrl: '/hero/fullmetal_alchemist_poster.png',
        imageHint: 'alchemy, brothers, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-8',
        title: 'Death Note',
        year: '2006',
        duration: 'TV Series',
        description: 'A high school student discovers a notebook with deadly powers.',
        imageUrl: '/hero/death_note_poster.png',
        imageHint: 'mystery, supernatural, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-9',
        title: 'Steins;Gate',
        year: '2011',
        duration: 'TV Series',
        description: 'A group of friends discover time travel and face its consequences.',
        imageUrl: '/hero/steins;gate_poster.png',
        imageHint: 'sci-fi, time travel, anime',
        aspectRatio: '16:9'
    },
    {
        id: 'hero-10',
        title: 'Your Name',
        year: '2016',
        duration: 'Movie',
        description: 'Two teenagers mysteriously swap bodies and form a unique connection.',
        imageUrl: '/hero/your_name._poster.png',
        imageHint: 'romance, fantasy, anime',
        aspectRatio: '16:9'
    }
];
const trendingMoviesData = [
    {
        id: 'tm-1',
        title: 'Attack on Titan',
        year: '2013',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        imageHint: 'action, titans, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-2',
        title: 'Death Note',
        year: '2006',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
        imageHint: 'psychological, thriller, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-3',
        title: 'Fullmetal Alchemist: Brotherhood',
        year: '2009',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-4',
        title: 'Hunter x Hunter',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-5',
        title: 'Jujutsu Kaisen',
        year: '2020',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        imageHint: 'action, supernatural, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-6',
        title: 'Kimetsu no Yaiba',
        year: '2019',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
        imageHint: 'action, fantasy, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-7',
        title: 'My Hero Academia',
        year: '2016',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        imageHint: 'action, superhero, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-8',
        title: 'Naruto',
        year: '2002',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-9',
        title: 'One Piece',
        year: '1999',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '3:4'
    },
    {
        id: 'tm-10',
        title: 'Steins;Gate',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
        imageHint: 'sci-fi, thriller, anime',
        aspectRatio: '3:4'
    }
];
const newReleasesData = [
    {
        id: 'nr-1',
        title: 'Attack on Titan',
        year: '2013',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        imageHint: 'action, titans, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-2',
        title: 'Death Note',
        year: '2006',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
        imageHint: 'psychological, thriller, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-3',
        title: 'Fullmetal Alchemist: Brotherhood',
        year: '2009',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-4',
        title: 'Hunter x Hunter',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-5',
        title: 'Jujutsu Kaisen',
        year: '2020',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        imageHint: 'action, supernatural, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-6',
        title: 'Kimetsu no Yaiba',
        year: '2019',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
        imageHint: 'action, fantasy, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-7',
        title: 'My Hero Academia',
        year: '2016',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        imageHint: 'action, superhero, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-8',
        title: 'Naruto',
        year: '2002',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-9',
        title: 'One Piece',
        year: '1999',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-10',
        title: 'Steins;Gate',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
        imageHint: 'sci-fi, thriller, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-11',
        title: "Hell's Paradise",
        year: '2023',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1015/127974.jpg',
        imageHint: 'action, supernatural, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'nr-12',
        title: "Frieren: Beyond Journey's End",
        year: '2023',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1015/127974.jpg',
        imageHint: 'fantasy, adventure, anime',
        aspectRatio: '4:3'
    }
];
const adPlacementData = {
    id: 'ad-1',
    title: 'Sponsored: The Cosmic Odyssey',
    description: 'Embark on an epic journey across the universe. New series, streaming exclusively on Universe+.',
    imageUrl: '/banners/After_New_Releases.png',
    imageHint: 'space nebula galaxy',
    aspectRatio: '3.4:1.2'
};
const topPicksData = [
    {
        id: 'tp-1',
        title: 'Attack on Titan',
        year: '2013',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        imageHint: 'action, titans, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-2',
        title: 'Death Note',
        year: '2006',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
        imageHint: 'psychological, thriller, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-3',
        title: 'Fullmetal Alchemist: Brotherhood',
        year: '2009',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-4',
        title: 'Hunter x Hunter',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-5',
        title: 'Jujutsu Kaisen',
        year: '2020',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        imageHint: 'action, supernatural, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-6',
        title: 'Kimetsu no Yaiba',
        year: '2019',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
        imageHint: 'action, fantasy, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-7',
        title: 'My Hero Academia',
        year: '2016',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        imageHint: 'action, superhero, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-8',
        title: 'Naruto',
        year: '2002',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-9',
        title: 'One Piece',
        year: '1999',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tp-10',
        title: 'Steins;Gate',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
        imageHint: 'sci-fi, thriller, anime',
        aspectRatio: '4:3'
    }
];
// Section 7: TV Show Grid Data
const dynamicBoxItems1 = [
    {
        id: 'dg-1a',
        title: 'Attack on Titan',
        year: '2013',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        imageHint: 'action, titans, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'dg-1b',
        title: 'Death Note',
        year: '2006',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
        imageHint: 'psychological, thriller, anime',
        aspectRatio: '4:3'
    }
];
const dynamicBoxItems2 = [
    {
        id: 'dg-2a',
        title: 'Fullmetal Alchemist: Brotherhood',
        year: '2009',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'dg-2b',
        title: 'Hunter x Hunter',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    }
];
const dynamicBoxItems3 = [
    {
        id: 'dg-3a',
        title: 'Jujutsu Kaisen',
        year: '2020',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        imageHint: 'action, supernatural, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'dg-3b',
        title: 'Demon Slayer: Kimetsu no Yaiba',
        year: '2019',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
        imageHint: 'action, fantasy, anime',
        aspectRatio: '4:3'
    }
];
const dynamicBoxItems4 = [
    {
        id: 'dg-4a',
        title: 'My Hero Academia',
        year: '2016',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        imageHint: 'action, superhero, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'dg-4b',
        title: 'Naruto',
        year: '2002',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    }
];
const dynamicBoxItems5 = [
    {
        id: 'dg-5a',
        title: 'One Piece',
        year: '1999',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'dg-5b',
        title: 'Steins;Gate',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
        imageHint: 'sci-fi, thriller, anime',
        aspectRatio: '4:3'
    }
];
const dynamicBoxItems6 = [
    {
        id: 'dg-6a',
        title: 'Dragon Ball Z',
        year: '1989',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/20936.jpg',
        imageHint: 'action, martial arts, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'dg-6b',
        title: 'Bleach',
        year: '2004',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
        imageHint: 'action, shinigami, anime',
        aspectRatio: '4:3'
    }
];
const dynamicBoxItemsLarge = [
    {
        id: 'dg-L1',
        title: 'Spirited Away',
        year: '2001',
        duration: 'Movie',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
        imageHint: 'fantasy, ghibli, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'dg-L2',
        title: 'Your Name',
        year: '2016',
        duration: 'Movie',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
        imageHint: 'romance, fantasy, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'dg-L3',
        title: 'A Silent Voice',
        year: '2016',
        duration: 'Movie',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1122/96435.jpg',
        imageHint: 'drama, romance, anime',
        aspectRatio: '4:3'
    }
];
const tvShowGridData = [
    {
        items: dynamicBoxItems1,
        sizeClass: 'aspect-[4/3]'
    },
    {
        items: dynamicBoxItems2,
        sizeClass: 'aspect-[4/3]'
    },
    {
        items: dynamicBoxItems3,
        sizeClass: 'aspect-[4/3]'
    },
    {
        items: dynamicBoxItems4,
        sizeClass: 'aspect-[4/3]'
    },
    {
        items: dynamicBoxItems5,
        sizeClass: 'aspect-[4/3]'
    },
    {
        items: dynamicBoxItems6,
        sizeClass: 'aspect-[4/3]'
    },
    {
        items: dynamicBoxItemsLarge,
        sizeClass: 'md:col-span-2 aspect-[4/3]',
        isLarge: true
    }
];
const adBannerRightOverlayData = {
    id: 'ad-banner-1',
    title: 'Premium Release: Solaris',
    description: 'Experience the breathtaking visuals of Solaris, available now for premium subscribers.',
    ctaText: 'Play Now',
    imageUrl: '/banners/After _TV_Series _ Show _ Movie.png',
    imageHint: 'sci-fi planet movie',
    aspectRatio: '3.4:0.7',
    overlayPosition: 'right',
    textAlign: 'text-right'
};
const recommendedTvShowsData = [
    {
        id: 'rec-1',
        title: 'Attack on Titan',
        year: '2013',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        imageHint: 'action, titans, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-2',
        title: 'Death Note',
        year: '2006',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
        imageHint: 'psychological, thriller, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-3',
        title: 'Fullmetal Alchemist: Brotherhood',
        year: '2009',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-4',
        title: 'Hunter x Hunter',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-5',
        title: 'Jujutsu Kaisen',
        year: '2020',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        imageHint: 'action, supernatural, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-6',
        title: 'Kimetsu no Yaiba',
        year: '2019',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
        imageHint: 'action, fantasy, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-7',
        title: 'My Hero Academia',
        year: '2016',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        imageHint: 'action, superhero, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-8',
        title: 'Naruto',
        year: '2002',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-9',
        title: 'One Piece',
        year: '1999',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'rec-10',
        title: 'Steins;Gate',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
        imageHint: 'sci-fi, thriller, anime',
        aspectRatio: '4:3'
    }
];
const topComingSoonData = [
    {
        id: 'cs-1',
        title: 'Attack on Titan',
        year: '2013',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        imageHint: 'action, titans, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-2',
        title: 'Death Note',
        year: '2006',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
        imageHint: 'psychological, thriller, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-3',
        title: 'Fullmetal Alchemist: Brotherhood',
        year: '2009',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-4',
        title: 'Hunter x Hunter',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-5',
        title: 'Jujutsu Kaisen',
        year: '2020',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        imageHint: 'action, supernatural, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-6',
        title: 'Kimetsu no Yaiba',
        year: '2019',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
        imageHint: 'action, fantasy, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-7',
        title: 'My Hero Academia',
        year: '2016',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        imageHint: 'action, superhero, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-8',
        title: 'Naruto',
        year: '2002',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-9',
        title: 'One Piece',
        year: '1999',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'cs-10',
        title: 'Steins;Gate',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
        imageHint: 'sci-fi, thriller, anime',
        aspectRatio: '4:3'
    }
];
const adBannerLeftOverlayData = {
    id: 'ad-banner-2',
    title: 'Discover "The Ancients"',
    description: 'Unravel the mysteries of a long-lost civilization in this new epic series.',
    ctaText: 'Watch Trailer',
    imageUrl: '/banners/After_Top_Coming_Soon.png',
    imageHint: 'ancient ruins jungle',
    aspectRatio: '3.4:1.2',
    overlayPosition: 'left',
    textAlign: 'text-left'
};
const topNewsData = [
    {
        id: 'news-1',
        title: 'One Piece Live-Action Season 2 Confirmed',
        description: 'Netflix officially announces One Piece Live-Action Season 2, with production set to begin in 2024. The first season broke records as Netflix\'s most-watched show.',
        publishDate: 'March 15, 2024',
        author: 'Anime News Network',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        imageHint: 'one piece live action',
        highlight: 'Netflix officially announces One Piece Live-Action Season 2, with production set to begin in 2024. The first season broke records as Netflix\'s most-watched show.',
        publisher: 'Anime News Network'
    },
    {
        id: 'news-2',
        title: 'Attack on Titan Final Season Part 3 Sets New Records',
        description: 'The final season of Attack on Titan breaks streaming records worldwide, becoming the most-watched anime finale in history. Fans worldwide celebrate the epic conclusion.',
        publishDate: 'March 10, 2024',
        author: 'Crunchyroll News',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        imageHint: 'attack on titan final season',
        highlight: 'The final season of Attack on Titan breaks streaming records worldwide, becoming the most-watched anime finale in history. Fans worldwide celebrate the epic conclusion.',
        publisher: 'Crunchyroll News'
    },
    {
        id: 'news-3',
        title: 'Dragon Ball Super: New Movie Announced',
        description: 'Toei Animation announces a new Dragon Ball Super movie set to release in 2024. The film will feature a new villain and the return of fan-favorite characters.',
        publishDate: 'March 8, 2024',
        author: 'ComicBook.com',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/20936.jpg',
        imageHint: 'dragon ball super movie',
        highlight: 'Toei Animation announces a new Dragon Ball Super movie set to release in 2024. The film will feature a new villain and the return of fan-favorite characters.',
        publisher: 'ComicBook.com'
    },
    {
        id: 'news-4',
        title: 'Jujutsu Kaisen Season 3 Production Begins',
        description: 'MAPPA Studios confirms production has begun on Jujutsu Kaisen Season 3, focusing on the Culling Game arc. The studio promises improved animation quality.',
        publishDate: 'March 5, 2024',
        author: 'MyAnimeList News',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        imageHint: 'jujutsu kaisen season 3',
        highlight: 'MAPPA Studios confirms production has begun on Jujutsu Kaisen Season 3, focusing on the Culling Game arc. The studio promises improved animation quality.',
        publisher: 'MyAnimeList News'
    },
    {
        id: 'news-5',
        title: 'Demon Slayer: Hashira Training Arc Premieres',
        description: 'The highly anticipated Hashira Training Arc of Demon Slayer premieres to record-breaking viewership. The new season introduces intense training sequences and character development.',
        publishDate: 'March 1, 2024',
        author: 'Anime Corner',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
        imageHint: 'demon slayer hashira training',
        highlight: 'The highly anticipated Hashira Training Arc of Demon Slayer premieres to record-breaking viewership. The new season introduces intense training sequences and character development.',
        publisher: 'Anime Corner'
    },
    {
        id: 'news-6',
        title: 'Studio Ghibli Announces New Film',
        description: 'Hayao Miyazaki returns with a new Studio Ghibli film, marking his first directorial work in years. The film promises to be another masterpiece from the legendary director.',
        publishDate: 'February 28, 2024',
        author: 'The Japan Times',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
        imageHint: 'studio ghibli new film',
        highlight: 'Hayao Miyazaki returns with a new Studio Ghibli film, marking his first directorial work in years. The film promises to be another masterpiece from the legendary director.',
        publisher: 'The Japan Times'
    },
    {
        id: 'news-7',
        title: 'My Hero Academia Final Season Confirmed',
        description: 'Bones Studio announces the final season of My Hero Academia, set to adapt the remaining manga chapters. The series will conclude with an epic final battle.',
        publishDate: 'February 25, 2024',
        author: 'IGN Anime',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        imageHint: 'my hero academia final season',
        highlight: 'Bones Studio announces the final season of My Hero Academia, set to adapt the remaining manga chapters. The series will conclude with an epic final battle.',
        publisher: 'IGN Anime'
    },
    {
        id: 'news-8',
        title: 'Chainsaw Man Season 2 Production Update',
        description: 'MAPPA reveals new details about Chainsaw Man Season 2, including character designs and story arcs. The season will adapt the Reze Arc and introduce new characters.',
        publishDate: 'February 20, 2024',
        author: 'Anime News Network',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
        imageHint: 'chainsaw man season 2',
        highlight: 'MAPPA reveals new details about Chainsaw Man Season 2, including character designs and story arcs. The season will adapt the Reze Arc and introduce new characters.',
        publisher: 'Anime News Network'
    }
];
const topCharactersData = [
    {
        id: 'char-1',
        name: 'Eren Yeager',
        seriesName: 'Attack on Titan',
        imageUrl: '/characters/eren_yeager_pfp.png',
        imageHint: 'eren yeager attack on titan'
    },
    {
        id: 'char-2',
        name: 'Light Yagami',
        seriesName: 'Death Note',
        imageUrl: '/characters/light_yagami_pfp.png',
        imageHint: 'light yagami death note'
    },
    {
        id: 'char-3',
        name: 'Edward Elric',
        seriesName: 'Fullmetal Alchemist',
        imageUrl: '/characters/edward_elric_pfp.png',
        imageHint: 'edward elric fullmetal alchemist'
    },
    {
        id: 'char-4',
        name: 'Mikasa Ackerman',
        seriesName: 'Attack on Titan',
        imageUrl: '/characters/mikasa_ackerman_pfp.png',
        imageHint: 'mikasa ackerman attack on titan'
    },
    {
        id: 'char-5',
        name: 'Levi Ackerman',
        seriesName: 'Attack on Titan',
        imageUrl: '/characters/levi_ackerman_pfp.png',
        imageHint: 'levi ackerman attack on titan'
    },
    {
        id: 'char-6',
        name: 'Roronoa Zoro',
        seriesName: 'One Piece',
        imageUrl: '/characters/roronoa_zoro_pfp.png',
        imageHint: 'roronoa zoro one piece'
    },
    {
        id: 'char-7',
        name: 'Monkey D. Luffy',
        seriesName: 'One Piece',
        imageUrl: '/characters/monkey_d._luffy_pfp.png',
        imageHint: 'monkey d luffy one piece'
    },
    {
        id: 'char-8',
        name: 'Naruto Uzumaki',
        seriesName: 'Naruto',
        imageUrl: '/characters/naruto_uzumaki_pfp.png',
        imageHint: 'naruto uzumaki naruto'
    },
    {
        id: 'char-9',
        name: 'Tanjiro Kamado',
        seriesName: 'Demon Slayer',
        imageUrl: '/characters/tanjiro_kamado_pfp.png',
        imageHint: 'tanjiro kamado demon slayer'
    },
    {
        id: 'char-10',
        name: 'Gojo Satoru',
        seriesName: 'Jujutsu Kaisen',
        imageUrl: '/characters/gojo_satoru_pfp.png',
        imageHint: 'gojo satoru jujutsu kaisen'
    },
    {
        id: 'char-11',
        name: 'Killua Zoldyck',
        seriesName: 'Hunter x Hunter',
        imageUrl: '/characters/killua_zoldyck_pfp.png',
        imageHint: 'killua zoldyck hunter x hunter'
    },
    {
        id: 'char-12',
        name: 'Saitama',
        seriesName: 'One Punch Man',
        imageUrl: '/characters/saitama_pfp.png',
        imageHint: 'saitama one punch man'
    },
    {
        id: 'char-13',
        name: 'Goku',
        seriesName: 'Dragon Ball',
        imageUrl: '/characters/goku_pfp.png',
        imageHint: 'goku dragon ball'
    },
    {
        id: 'char-14',
        name: 'Vegeta',
        seriesName: 'Dragon Ball',
        imageUrl: '/characters/vegeta_pfp.png',
        imageHint: 'vegeta dragon ball'
    },
    {
        id: 'char-15',
        name: 'Ichigo Kurosaki',
        seriesName: 'Bleach',
        imageUrl: '/characters/ichigo_kurosaki_pfp.png',
        imageHint: 'ichigo kurosaki bleach'
    },
    {
        id: 'char-16',
        name: 'Lelouch Lamperouge',
        seriesName: 'Code Geass',
        imageUrl: '/characters/lelouch_lamperouge_pfp.png',
        imageHint: 'lelouch lamperouge code geass'
    },
    {
        id: 'char-17',
        name: 'Rem',
        seriesName: 'Re:Zero',
        imageUrl: '/characters/rem_(re_zero)_pfp.png',
        imageHint: 'rem re zero'
    },
    {
        id: 'char-18',
        name: 'Astro Boy',
        seriesName: 'Astro Boy',
        imageUrl: '/characters/astro_boy_pfp.png',
        imageHint: 'astro boy'
    },
    {
        id: 'char-19',
        name: 'Natsu Dragneel',
        seriesName: 'Fairy Tail',
        imageUrl: '/characters/natsu_dragneel_pfp.png',
        imageHint: 'natsu dragneel fairy tail'
    },
    {
        id: 'char-20',
        name: 'Itachi Uchiha',
        seriesName: 'Naruto',
        imageUrl: '/characters/itachi_uchiha_pfp.png',
        imageHint: 'itachi uchiha naruto'
    }
];
const adBannerAnimeListData = {
    id: 'ad-banner-anime-list',
    title: '',
    description: '',
    ctaText: '',
    imageUrl: '/banners/Below_anime_grid_above_pagination.png',
    imageHint: '',
    aspectRatio: '3.4:1.2',
    overlayPosition: 'left',
    textAlign: 'text-left'
};
const tvSeriesData = [
    {
        id: 'tv-1',
        title: 'Attack on Titan',
        year: '2013',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        imageHint: 'action, titans, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-2',
        title: 'Death Note',
        year: '2006',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
        imageHint: 'psychological, thriller, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-3',
        title: 'Fullmetal Alchemist: Brotherhood',
        year: '2009',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-4',
        title: 'Hunter x Hunter',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-5',
        title: 'Jujutsu Kaisen',
        year: '2020',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        imageHint: 'action, supernatural, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-6',
        title: 'Kimetsu no Yaiba',
        year: '2019',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
        imageHint: 'action, fantasy, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-7',
        title: 'My Hero Academia',
        year: '2016',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        imageHint: 'action, superhero, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-8',
        title: 'Naruto',
        year: '2002',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-9',
        title: 'One Piece',
        year: '1999',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        imageHint: 'action, adventure, anime',
        aspectRatio: '4:3'
    },
    {
        id: 'tv-10',
        title: 'Steins;Gate',
        year: '2011',
        duration: 'TV Series',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
        imageHint: 'sci-fi, thriller, anime',
        aspectRatio: '4:3'
    }
];
const adBannerSearchData = {
    id: "search-banner-1",
    title: "Discover More Anime",
    description: "Explore our vast collection of anime titles",
    imageUrl: "/banners/solo_leveling.jpg",
    imageHint: "solo leveling anime banner",
    aspectRatio: "3.4:1.2",
    link: "/anime-list",
    buttonText: "Browse All Anime",
    ctaText: "Explore Now",
    overlayPosition: "right"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/search/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SearchPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$main$2d$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/main-footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ad$2d$banner$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/ad-banner-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const MOCK_ANIME = [
    {
        title: "Solo Leveling Season 2: Arise from the Shadow",
        altTitle: "Na Honjaman Level-Up Season 2: Arise from the Shadow, Ore dake Level Up na Ken Season 2: Arise from the Shadow",
        type: "TV",
        studio: "A-1 Pictures",
        year: "2025",
        source: "NA",
        rating: 4.6,
        synopsis: "The second season of Solo Leveling.",
        tags: [
            "Action",
            "Adventure",
            "Fantasy",
            "Contemporary Fantasy",
            "Dungeon",
            "Game Elements",
            "Magic",
            "Monsters",
            "Swordplay",
            "Urban Fantasy",
            "Weak to Strong",
            "Based on a Webtoon"
        ],
        poster: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
        episodes: 13
    },
    {
        title: "Jujutsu Kaisen",
        altTitle: "",
        type: "TV",
        studio: "MAPPA",
        year: "2020 - 2021",
        source: "Viz",
        rating: 4.5,
        synopsis: "Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Research Club. One day, the club manages to get their hands on a sealed cursed object. Little do they know the terror they'll unleash when they break the seal…",
        tags: [
            "Action",
            "Horror",
            "Shounen",
            "Body Sharing",
            "Contemporary Fantasy",
            "Curse",
            "Exorcists",
            "Monsters",
            "School Life",
            "Supernatural",
            "Urban Fantasy",
            "Based on a Manga"
        ],
        poster: "/anime-posters/jujutsu-kaisen.jpg",
        episodes: 24
    },
    {
        title: "Hunter x Hunter (2011)",
        altTitle: "",
        type: "TV",
        studio: "MADHOUSE",
        year: "2011 - 2014",
        source: "NA",
        rating: 4.5,
        synopsis: "Drawn to the mystique of the unknown, Hunters travel the world in search of terrifying creatures, incredible riches, and unexplored lands. Gon Freecss is a naive-yet-determined young boy who aspires to join the ranks of these individuals, in order to find his missing father Ging - a master of the profession himself. To reach his goal, he partakes in the formidable Hunter Exam, a series of tests that push the participants to their physical and mental limits, with a Hunter License as the prize. During the exam Gon befriends vengeful Kurapika, doctor-to-be Leorio, and skilled assassin Killua, who have entered for their own reasons. But with the sinister Hisoka standing in their way, will Gon and his friends be able to succeed in obtaining their reward, or even escaping with their lives?",
        tags: [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Shounen",
            "Child Protagonists",
            "Monsters",
            "Superpowers",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-2011-1-190x285.jpg?t=1625896160",
        episodes: 148
    },
    {
        title: "Jujutsu Kaisen Season 2",
        altTitle: "",
        type: "TV",
        studio: "MAPPA",
        year: "2023",
        source: "NA",
        rating: 4.5,
        synopsis: "The second season of Jujutsu Kaisen.",
        tags: [
            "Action",
            "Horror",
            "Shounen",
            "Body Sharing",
            "Curse",
            "Exorcists",
            "Monsters",
            "School Life",
            "Supernatural",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-season-2-1-285x400.webp?t=1727110759",
        episodes: 23
    },
    {
        title: "Jujutsu Kaisen 0: The Movie",
        altTitle: "Jujutsu Kaisen 0",
        type: "Movie",
        studio: "MAPPA",
        year: "2021",
        source: "Viz",
        rating: 4.4,
        synopsis: "The one-shot pilot of the supernatural exorcist adventure Jujutsu Kaisen! The story takes place a one year before Itadori's time, focusing on his upperclassmen at Jujutsu High--Maki, Panda, Toge and Yuta Okkotsu (the MC). In Jujutsu Kaisen, we don't see Yuta, but other characters often make reference to him and the incidents that occur in this volume. Yuta's been brought in to Jujutsu High by Satoru Gojo because he's been cursed by his childhood friend, Rika. But this is no ordinary curse as she's classified Special Grade. And because of her overwhelming strengh, Yuta doesn't know how to control or use her. Meanwhile, Suguru Geto is out to get Yuta Okkotsu, specifically targeting Rika to add to his own collection of cursed spirits he controls, setting up a showdown with his best friend-turned-enemy, Gojo",
        tags: [
            "Action",
            "Shounen",
            "Contemporary Fantasy",
            "Curse",
            "Exorcists",
            "Supernatural",
            "Urban Fantasy",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-0-the-movie-1-285x404.jpg?t=1727108413",
        episodes: 1
    },
    {
        title: "Solo Leveling",
        altTitle: "Na Honjaman Level-Up, Ore dake Level Up na Ken",
        type: "TV",
        studio: "A-1 Pictures",
        year: "2024",
        source: "Yen Press",
        rating: 4.4,
        synopsis: "E-class hunter Jinwoo Sung is the weakest of them all. Looked down on by everyone, he has no money, no abilities to speak of, and no other job prospects. So when his party finds a hidden dungeon, he's determined to use this chance to change his life for the better... but the opportunity he finds is a bit different from what he had in mind!",
        tags: [
            "Action",
            "Adventure",
            "Fantasy",
            "Contemporary Fantasy",
            "Dungeon",
            "Game Elements",
            "Magic",
            "Monsters",
            "Swordplay",
            "Urban Fantasy",
            "Weak to Strong",
            "Based on a Webtoon"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/solo-leveling-1-285x398.webp?t=1694330795",
        episodes: 12
    },
    {
        title: "Solo Leveling: Reawakening",
        altTitle: "Na Honjaman Level-Up -ReAwakening-, Ore dake Level Up na Ken -ReAwakening-",
        type: "Movie",
        studio: "A-1 Pictures",
        year: "2024",
        source: "NA",
        rating: 4.3,
        synopsis: "A recap of the first season of Solo Leveling including the first two episodes of the second season.",
        tags: [
            "Action",
            "Adventure",
            "Fantasy",
            "Contemporary Fantasy",
            "Dungeon",
            "Magic",
            "Monsters",
            "Recap",
            "Swordplay",
            "Urban Fantasy",
            "Weak to Strong",
            "Based on a Webtoon"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/solo-leveling-reawakening-1-285x399.webp?t=1727698510",
        episodes: 1
    },
    {
        title: "Naruto Shippuden",
        altTitle: "",
        type: "TV",
        studio: "Pierrot",
        year: "2007 - 2017",
        source: "NA",
        rating: 4.2,
        synopsis: "Two and a half years have passed since the end of Naruto's old adventures. He has trained hard with Jiraiya-sama and has returned to Konoha to reunite with his friends; but Akatsuki, the organization that threatened Naruto years before, is on the move again and this time Naruto is not the only one in danger. With the powerful Akatsuki organization looming ahead of him, Sasuke still missing, and the struggle with the beast hidden inside him a continuous battle, will Naruto's hard-earned improvements be enough? Join Naruto, Sakura, new friends and the rest of the old gang as the action heats up with new techniques and stronger enemies.",
        tags: [
            "Action",
            "Drama",
            "Fantasy",
            "Shounen",
            "Hand to Hand Combat",
            "Ninja",
            "Revenge",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/naruto-shippuden-1-190x285.jpg?t=1625885757",
        episodes: 500
    },
    {
        title: "Hunter x Hunter OVA 3: Greed Island Final",
        altTitle: "",
        type: "OVA",
        studio: "Nippon Animation",
        year: "2004",
        source: "NA",
        rating: 4.2,
        synopsis: "Gon and Killua continue their training with Biscuit as the Mad Bomber wreaks havoc upon the other players in Greed Island. As their strength increases, Gon and Killua also start searching for the hundred cards needed to complete the game. As their number of cards increases they must now prepare to face off against Razor, the leader of the 14 Devils, and the Mad Bomber himself.",
        tags: [
            "Action",
            "Adventure",
            "Shounen",
            "Child Protagonists",
            "Island",
            "Martial Arts",
            "Superpowers",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-ova-3-greed-island-final-1-190x278.jpg?t=1625885540",
        episodes: 14
    },
    {
        title: "Dragon Ball Super Movie: Broly",
        altTitle: "",
        type: "Movie",
        studio: "Toei Animation",
        year: "2018",
        source: "Funimation",
        rating: 4.2,
        synopsis: "Knowing that there are increasingly powerful forces in the universe that he has yet to encounter, Goku spends all of his time training to achieve even greater strength. But, one fateful day a mysterious new Saiyan appears before Goku and Vegeta: Broly. How can a Saiyan—a member of the proud warrior race that was completely annihilated after the destruction of Planet Vegeta—appear here on Earth? With Frieza's return from hell, a fierce battle awaits the three mighty Saiyans who have followed completely different destinies.",
        tags: [
            "Action",
            "Shounen",
            "Aliens",
            "Hand to Hand Combat",
            "Martial Arts",
            "Non-Human Protagonists",
            "Superpowers",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/dragon-ball-super-movie-broly-1-190x285.jpg?t=1625897957",
        episodes: 1
    },
    {
        title: "Hunter x Hunter",
        altTitle: "",
        type: "TV",
        studio: "Nippon Animation",
        year: "1999 - 2001",
        source: "NA",
        rating: 4.2,
        synopsis: "Drawn to the mystique of the unknown, Hunters travel the world in search of terrifying creatures, incredible riches, and unexplored lands. Gon Freecss is a naive-yet-determined young boy who aspires to join the ranks of these individuals, in order to find his missing father Ging - a master of the profession himself. To reach his goal, he partakes in the formidable Hunter Exam, a series of tests that push the participants to their physical and mental limits, with a Hunter License as the prize. During the exam Gon befriends vengeful Kurapika, doctor-to-be Leorio, and skilled assassin Killua, who have entered for their own reasons. But with the sinister Hisoka standing in their way, will Gon and his friends be able to succeed in obtaining their reward, or even escaping with their lives?",
        tags: [
            "Action",
            "Adventure",
            "Fantasy",
            "Shounen",
            "Child Protagonists",
            "Martial Arts",
            "Superpowers",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-1-190x295.jpg?t=1625885336",
        episodes: 62
    },
    {
        title: "Hunter x Hunter OVA 2: Greed Island",
        altTitle: "",
        type: "OVA",
        studio: "Nippon Animation",
        year: "2003",
        source: "NA",
        rating: 4.2,
        synopsis: "Gon and Killua finally have a means of which to enter Greed Island, a game designed just for Hunters. Are their Nen abilities strong enough to help them survive in this new world? They must now train and grow stronger to uncover their secret abilities. With a helping hand from Biscuit, they will be able to continue their quest to unravel the mystery behind Ging Freecss and this 'almost too real' hunter game.",
        tags: [
            "Action",
            "Adventure",
            "Shounen",
            "Child Protagonists",
            "Island",
            "Martial Arts",
            "Superpowers",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-ova-2-greed-island-1-190x270.jpg?t=1625885342",
        episodes: 8
    },
    {
        title: "Hunter x Hunter OVA",
        altTitle: "",
        type: "OVA",
        studio: "Nippon Animation",
        year: "2002",
        source: "NA",
        rating: 4.2,
        synopsis: "The time for the secret Yorkshire auction is near, and Kurapika's plans of revenge are at hand. By night, Gon, Killua, and Leorio must fight alongside him to protect the auction pieces and defeat the Spiders. By day, Gon and Killua must raise money for their ultra rare copy of Greed Island, a game designed only for hunters. Will conflicting motives ruin their chances to protect the auction?",
        tags: [
            "Action",
            "Adventure",
            "Shounen",
            "Martial Arts",
            "Superpowers",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-ova-1-190x246.jpg?t=1625885342",
        episodes: 8
    },
    {
        title: "Jujutsu Kaisen PVs",
        altTitle: "",
        type: "Web",
        studio: "2018",
        year: "2018",
        source: "NA",
        rating: 4.1,
        synopsis: "This entry currently doesn't have a synopsis. Check back soon!",
        tags: [
            "Promotional",
            "Short Episodes",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-pvs-1-285x399.webp?t=1727110805",
        episodes: 3
    },
    {
        title: "Naruto Shippuden Movie 6: Road to Ninja",
        altTitle: "",
        type: "Movie",
        studio: "Pierrot",
        year: "2012",
        source: "NA",
        rating: 4.0,
        synopsis: "Naruto the orphan has always wanted a family, while recently Sakura has wished her overbearing parents would give her some space. So when the villainous Madara sneaks into the village and banishes them to a parallel world, the pair sees their desires come true in a way they never thought possible! In this alternate Konoha, Shino hates bugs, Hinata is an aggressive hot-head, and Sasuke is a laid-back playboy - not to mention Naruto and Sakura's lives are switched! His parents are suddenly alive and well, and she's the orphan turned village hero. After a short time, Sakura sees the folly of her ways and is ready to try to find a way to return; but now that Naruto has everything he's ever wanted, he'll have to decide if perception really can trump reality.",
        tags: [
            "Action",
            "Fantasy",
            "Shounen",
            "Ninja",
            "Person in a Strange World",
            "Based on a Manga"
        ],
        poster: "https://cdn.anime-planet.com/anime/primary/naruto-shippuden-movie-6-road-to-ninja-1-190x266.jpg?t=1625896358",
        episodes: 1
    }
];
const PAGE_SIZES = [
    14,
    28,
    42
];
function SearchPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = searchParams.get('q') || '';
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(14);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOCK_ANIME);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPage.useEffect": ()=>{
            // Filter anime based on search query
            const filteredResults = MOCK_ANIME.filter({
                "SearchPage.useEffect.filteredResults": (anime)=>anime.title.toLowerCase().includes(query.toLowerCase()) || anime.altTitle?.toLowerCase().includes(query.toLowerCase()) || anime.synopsis?.toLowerCase().includes(query.toLowerCase()) || anime.tags?.some({
                        "SearchPage.useEffect.filteredResults": (tag)=>tag.toLowerCase().includes(query.toLowerCase())
                    }["SearchPage.useEffect.filteredResults"])
            }["SearchPage.useEffect.filteredResults"]);
            setSearchResults(filteredResults);
            setCurrentPage(1); // Reset to first page when search changes
        }
    }["SearchPage.useEffect"], [
        query
    ]);
    // Pagination logic
    const totalResults = searchResults.length;
    const totalPages = Math.ceil(totalResults / pageSize);
    const paginatedResults = searchResults.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const handlePageChange = (page)=>{
        setCurrentPage(page);
    };
    const handlePageSizeChange = (value)=>{
        setPageSize(Number(value));
        setCurrentPage(1);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPage.useEffect": ()=>{
            document.title = 'Search Results - StreamVerse';
        }
    }["SearchPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-[#0f0f1f] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/search/page.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow pt-16 pb-10 container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold font-headline text-foreground mb-2 mt-4",
                        children: "Search Results"
                    }, void 0, false, {
                        fileName: "[project]/src/app/search/page.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-muted-foreground mb-6",
                        children: "Home / Search"
                    }, void 0, false, {
                        fileName: "[project]/src/app/search/page.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground",
                            children: [
                                "Showing ",
                                (currentPage - 1) * pageSize + 1,
                                "-",
                                Math.min(currentPage * pageSize, totalResults),
                                " of ",
                                totalResults,
                                " results"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/search/page.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/search/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6",
                        children: paginatedResults.map((anime, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group/moviecard block w-full shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden bg-card border-transparent transition-colors duration-300 ease-in-out flex flex-col h-full rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: anime.poster || '/anime-posters/placeholder.svg',
                                                alt: anime.title,
                                                fill: true,
                                                className: "object-cover transition-transform duration-300 group-hover:scale-105",
                                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                                priority: idx < 4,
                                                onError: (e)=>{
                                                    const target = e.target;
                                                    target.src = '/anime-posters/placeholder.svg';
                                                    target.onerror = null; // Prevent infinite loop
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/search/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/search/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 sm:p-3 flex flex-col justify-start overflow-hidden h-[60px] sm:h-[72px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-xs sm:text-sm text-foreground group-hover/moviecard:text-primary transition-colors line-clamp-2 mb-0.5",
                                                    children: anime.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/search/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground group-hover/moviecard:text-white transition-colors mt-0.5 line-clamp-1",
                                                    children: anime.tags?.slice(0, 3).join(' • ')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/search/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/search/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/search/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            }, anime.title + idx, false, {
                                fileName: "[project]/src/app/search/page.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/search/page.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-screen relative left-[50%] right-[50%] -mx-[50vw]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ad$2d$banner$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ad: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adBannerSearchData"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/search/page.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/search/page.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between mt-8 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "pageSize",
                                        className: "mr-2 text-sm font-body text-muted-foreground",
                                        children: "Results per Page"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/search/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "pageSize",
                                        value: pageSize,
                                        onChange: (e)=>handlePageSizeChange(e.target.value),
                                        className: "bg-muted text-foreground rounded px-2 py-1 font-body text-sm border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 14,
                                                children: "14"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/search/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 28,
                                                children: "28"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/search/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/search/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/search/page.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: currentPage === 1,
                                        onClick: ()=>handlePageChange(currentPage - 1),
                                        className: "px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50",
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/search/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    (()=>{
                                        const pages = [];
                                        const maxVisiblePages = 5;
                                        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
                                        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
                                        if (endPage - startPage + 1 < maxVisiblePages) {
                                            startPage = Math.max(1, endPage - maxVisiblePages + 1);
                                        }
                                        if (startPage > 1) {
                                            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handlePageChange(1),
                                                className: "px-3 py-1 rounded font-body text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition",
                                                children: "1"
                                            }, 1, false, {
                                                fileName: "[project]/src/app/search/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this));
                                            if (startPage > 2) {
                                                pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-body text-sm",
                                                    children: "..."
                                                }, "start-ellipsis", false, {
                                                    fileName: "[project]/src/app/search/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 30
                                                }, this));
                                            }
                                        }
                                        for(let i = startPage; i <= endPage; i++){
                                            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handlePageChange(i),
                                                className: `px-3 py-1 rounded font-body text-sm ${currentPage === i ? 'bg-primary text-primary-foreground font-semibold' : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition'}`,
                                                children: i
                                            }, i, false, {
                                                fileName: "[project]/src/app/search/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this));
                                        }
                                        if (endPage < totalPages) {
                                            if (endPage < totalPages - 1) {
                                                pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-body text-sm",
                                                    children: "..."
                                                }, "end-ellipsis", false, {
                                                    fileName: "[project]/src/app/search/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 30
                                                }, this));
                                            }
                                            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handlePageChange(totalPages),
                                                className: "px-3 py-1 rounded font-body text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition",
                                                children: totalPages
                                            }, totalPages, false, {
                                                fileName: "[project]/src/app/search/page.tsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this));
                                        }
                                        return pages;
                                    })(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: currentPage === totalPages,
                                        onClick: ()=>handlePageChange(currentPage + 1),
                                        className: "px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/search/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/search/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/search/page.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/search/page.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$main$2d$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/search/page.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/search/page.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_s(SearchPage, "7PiojBDscpN+VFwYa6ooqWpQrsc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SearchPage;
var _c;
__turbopack_context__.k.register(_c, "SearchPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3ec5c2de._.js.map