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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_CollapsibleTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CollapsibleTable */ \"./components/CollapsibleTable.js\");\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { data , status  } = param;\n    if (status != 200) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"You have to log in to see this page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\pages\\\\numiscorner\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\pages\\\\numiscorner\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CollapsibleTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            listOfDicts: data\n        }, void 0, false, {\n            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\pages\\\\numiscorner\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\pages\\\\numiscorner\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9udW1pc2Nvcm5lci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE2QztBQUNtQjs7QUFHakQsU0FBU0UsS0FBSyxLQUFjLEVBQUU7UUFBaEIsRUFBQ0MsS0FBSSxFQUFFQyxPQUFNLEVBQUMsR0FBZDtJQUMzQixJQUFJQSxVQUFVLEtBQUs7UUFDakIscUJBQ0UsOERBQUNKLDBEQUFPQTtzQkFDTiw0RUFBQ0s7MEJBQUc7Ozs7Ozs7Ozs7O0lBR1YsQ0FBQztJQUNELHFCQUNFLDhEQUFDTCwwREFBT0E7a0JBQ04sNEVBQUNDLG9FQUFnQkE7WUFBQ0ssYUFBYUg7Ozs7Ozs7Ozs7O0FBR3JDLENBQUM7S0FidUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL251bWlzY29ybmVyL2luZGV4LmpzP2MyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91bnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBDb2xsYXBzaWJsZVRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29sbGFwc2libGVUYWJsZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2RhdGEsIHN0YXR1c30pIHtcclxuICBpZiAoc3RhdHVzICE9IDIwMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91bnQ+XHJcbiAgICAgICAgPGgyPllvdSBoYXZlIHRvIGxvZyBpbiB0byBzZWUgdGhpcyBwYWdlPC9oMj5cclxuICAgICAgPC9MYXlvdW50PlxyXG4gICAgKVxyXG4gIH0gXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdW50PlxyXG4gICAgICA8Q29sbGFwc2libGVUYWJsZSBsaXN0T2ZEaWN0cz17ZGF0YX0+PC9Db2xsYXBzaWJsZVRhYmxlPlxyXG4gICAgPC9MYXlvdW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnJlcT8uY29va2llcz8udG9rZW5cclxuICBsZXQgc3RhdHVzQ29kZSA9IDIwMFxyXG5cclxuICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9udW1pc2Nvcm5lcl9jb2lucycsIHtcclxuICAgIGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuICB9KS5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICBpZiAocmVzLnJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgc3RhdHVzQ29kZSA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3RhdHVzOiBzdGF0dXNDb2RlXHJcbiAgICB9LFxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJMYXlvdW50IiwiQ29sbGFwc2libGVUYWJsZSIsIkhvbWUiLCJkYXRhIiwic3RhdHVzIiwiaDIiLCJsaXN0T2ZEaWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/numiscorner/index.js\n"));

/***/ })

});