"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/numiscorner",{

/***/ "./pages/numiscorner/index.js":
/*!************************************!*\
  !*** ./pages/numiscorner/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_CollapsibleTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CollapsibleTable */ \"./components/CollapsibleTable.js\");\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { data , status  } = param;\n    if (status != 200) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    margin: \"50px\",\n                    textAlign: \"center\"\n                },\n                children: \"You have to log in to see this page, status\"\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\pages\\\\numiscorner\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\pages\\\\numiscorner\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CollapsibleTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                listOfDicts: data\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\pages\\\\numiscorner\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\pages\\\\numiscorner\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this);\n    }\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9udW1pc2Nvcm5lci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE2QztBQUNtQjs7QUFHakQsU0FBU0UsS0FBSyxLQUFjLEVBQUU7UUFBaEIsRUFBQ0MsS0FBSSxFQUFFQyxPQUFNLEVBQUMsR0FBZDtJQUMzQixJQUFJQSxVQUFVLEtBQUs7UUFDakIscUJBQ0UsOERBQUNKLDBEQUFPQTtzQkFDTiw0RUFBQ0s7Z0JBQUdDLE9BQU87b0JBQUNDLFFBQVE7b0JBQVFDLFdBQVc7Z0JBQVE7MEJBQUc7Ozs7Ozs7Ozs7O0lBR3hELE9BQU87UUFDTCxxQkFDRSw4REFBQ1IsMERBQU9BO3NCQUNOLDRFQUFDQyxvRUFBZ0JBO2dCQUFDUSxhQUFhTjs7Ozs7Ozs7Ozs7SUFHckMsQ0FBQztBQUNILENBQUM7S0FkdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL251bWlzY29ybmVyL2luZGV4LmpzP2MyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91bnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBDb2xsYXBzaWJsZVRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29sbGFwc2libGVUYWJsZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2RhdGEsIHN0YXR1c30pIHtcclxuICBpZiAoc3RhdHVzICE9IDIwMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91bnQ+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luOiAnNTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5Zb3UgaGF2ZSB0byBsb2cgaW4gdG8gc2VlIHRoaXMgcGFnZSwgc3RhdHVzPC9oMj5cclxuICAgICAgPC9MYXlvdW50PlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3VudD5cclxuICAgICAgICA8Q29sbGFwc2libGVUYWJsZSBsaXN0T2ZEaWN0cz17ZGF0YX0+PC9Db2xsYXBzaWJsZVRhYmxlPlxyXG4gICAgICA8L0xheW91bnQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB0b2tlbiA9IGNvbnRleHQucmVxPy5jb29raWVzPy50b2tlblxyXG4gIGxldCBzdGF0dXNDb2RlID0gbnVsbFxyXG5cclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL251bWlzY29ybmVyX2NvaW5zJywge1xyXG4gICAgICBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9LFxyXG4gICAgICB2YWxpZGF0ZVN0YXR1czogKHN0YXR1cykgPT4ge1xyXG5cclxuICAgICAgICBzdGF0dXNDb2RlID0gc3RhdHVzXHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1cyBjb2RlOiAke3N0YXR1c0NvZGV9YClcclxuICAgICAgICByZXR1cm4gc3RhdHVzIDwgNTAwXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHN0YXR1czogc3RhdHVzQ29kZVxyXG4gICAgfSxcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTGF5b3VudCIsIkNvbGxhcHNpYmxlVGFibGUiLCJIb21lIiwiZGF0YSIsInN0YXR1cyIsImgyIiwic3R5bGUiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJsaXN0T2ZEaWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/numiscorner/index.js\n"));

/***/ })

});