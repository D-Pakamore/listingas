"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MessageBoard.js":
/*!************************************!*\
  !*** ./components/MessageBoard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Information; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/esm/Table/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/esm/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/esm/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/esm/TableContainer/index.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableHead */ \"./node_modules/@mui/material/esm/TableHead/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/esm/TableRow/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/esm/Paper/index.js\");\n/* harmony import */ var _MessageInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageInput */ \"./components/MessageInput.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _myMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myMethods */ \"./components/myMethods.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Information(param) {\n    let { messages  } = param;\n    _s();\n    const [messagesState, setMessagesState] = react__WEBPACK_IMPORTED_MODULE_1__.useState(messages);\n    const addMessage = (newMessage)=>{\n        const cleanMessages = [\n            ...messagesState\n        ];\n        cleanMessages.push(newMessage);\n        setMessagesState(cleanMessages);\n    };\n    const deleteMessage = (deletedMessageId)=>{\n        let cleanMessages = [];\n        messagesState.map((message)=>{\n            if (message.id != deletedMessageId) {\n                cleanMessages.push(message);\n            }\n        });\n        setMessagesState(cleanMessages);\n    };\n    const deleteRequest = (messageId)=>{\n        const userData = (0,_myMethods__WEBPACK_IMPORTED_MODULE_4__.getUserData)();\n        const { token  } = userData;\n        const headers = {\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\",\n            Authorization: \"Bearer \".concat(token)\n        };\n        try {\n            (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                url: \"http://127.0.0.1:8000/information/\".concat(messageId),\n                method: \"DELETE\",\n                headers: headers\n            }).then((response)=>{\n                //if username and password exist\n                if (response.status > 200 && response.status < 400) {\n                    deleteMessage(messageId);\n                }\n            });\n        } catch (responseErr) {\n            console.log(responseErr);\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            background,\n            width: \"400px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    maxHeight: \"100px\",\n                    backgroundColor: \"rgba(255,255,255,0.9)\",\n                    maxWidth: \"500px\",\n                    marginTop: \"10px\"\n                },\n                component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    stickyHeader: true,\n                    size: \"small\",\n                    \"aria-label\": \"a dense table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            sx: {\n                                fontWeight: \"bold\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        align: \"right\",\n                                        children: \"Message\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            children: messagesState.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    sx: {\n                                        \"&:last-child td, &:last-child th\": {\n                                            border: 0\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            component: \"th\",\n                                            scope: \"row\",\n                                            children: message.username\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            align: \"right\",\n                                            children: [\n                                                message.message,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                                    variant: \"contained\",\n                                                    onClick: ()=>deleteRequest(message.id),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 15\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, message.id, true, {\n                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                lineNumber: 65,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                addMessage: addMessage,\n                sx: {\n                    backgroundColor: \"red\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                lineNumber: 92,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Information, \"CMDISR1DPCEkGyFJjPVBYJwjwIk=\");\n_c = Information;\nvar _c;\n$RefreshReg$(_c, \"Information\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVdBO2dCQUFDVyxZQUFZQTtnQkFBWXVCLElBQUk7b0JBQUNJLGlCQUFpQjtnQkFBSzs7Ozs7Ozs7Ozs7O0FBR3BFLENBQUM7R0EvRXVCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanM/OWE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcclxuaW1wb3J0IE1lc3NhZ2VGb3JtIGZyb20gJy4vTWVzc2FnZUlucHV0JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBnZXRVc2VyRGF0YSB9IGZyb20gJy4vbXlNZXRob2RzJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvcm1hdGlvbigge21lc3NhZ2VzfSApIHtcclxuICBjb25zdCBbbWVzc2FnZXNTdGF0ZSwgc2V0TWVzc2FnZXNTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShtZXNzYWdlcylcclxuXHJcbiAgY29uc3QgYWRkTWVzc2FnZSA9IChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zdCBjbGVhbk1lc3NhZ2VzID0gWy4uLm1lc3NhZ2VzU3RhdGVdXHJcbiAgICBjbGVhbk1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSlcclxuICAgIHNldE1lc3NhZ2VzU3RhdGUoY2xlYW5NZXNzYWdlcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZU1lc3NhZ2UgPSAoZGVsZXRlZE1lc3NhZ2VJZCkgPT4ge1xyXG4gICAgbGV0IGNsZWFuTWVzc2FnZXMgPSBbXVxyXG4gIFxyXG4gICAgbWVzc2FnZXNTdGF0ZS5tYXAoKG1lc3NhZ2UpID0+IHtcclxuICAgICAgaWYgKG1lc3NhZ2UuaWQgIT0gZGVsZXRlZE1lc3NhZ2VJZCkge1xyXG4gICAgICAgIGNsZWFuTWVzc2FnZXMucHVzaChtZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIFxyXG4gICAgc2V0TWVzc2FnZXNTdGF0ZShjbGVhbk1lc3NhZ2VzKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVJlcXVlc3QgPSAobWVzc2FnZUlkKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IGdldFVzZXJEYXRhKClcclxuICAgIGNvbnN0IHt0b2tlbn0gPSB1c2VyRGF0YVxyXG4gICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgdXJsOiBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2luZm9ybWF0aW9uLyR7bWVzc2FnZUlkfWAsXHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vaWYgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGV4aXN0XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZUlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgfSBjYXRjaCAocmVzcG9uc2VFcnIpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFcnIpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17e2JhY2tncm91bmQsd2lkdGg6ICc0MDBweCd9fT5cclxuICAgIDxUYWJsZUNvbnRhaW5lciBzeD17e21heEhlaWdodDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjkpJyAsIG1heFdpZHRoOiAnNTAwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwiYSBkZW5zZSB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnfX0+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+VXNlcjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5NZXNzYWdlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7bWVzc2FnZXNTdGF0ZS5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxyXG4gICAgICAgICAgICAgIHN4PXt7ICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6IHsgYm9yZGVyOiAwIH0gfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2UudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e21lc3NhZ2UubWVzc2FnZX1cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCk9PmRlbGV0ZVJlcXVlc3QobWVzc2FnZS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICA8TWVzc2FnZUZvcm0gYWRkTWVzc2FnZT17YWRkTWVzc2FnZX0gc3g9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0vPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwiTWVzc2FnZUZvcm0iLCJJY29uQnV0dG9uIiwiRGVsZXRlSWNvbiIsImF4aW9zIiwiZ2V0VXNlckRhdGEiLCJCb3giLCJJbmZvcm1hdGlvbiIsIm1lc3NhZ2VzIiwibWVzc2FnZXNTdGF0ZSIsInNldE1lc3NhZ2VzU3RhdGUiLCJ1c2VTdGF0ZSIsImFkZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwiY2xlYW5NZXNzYWdlcyIsInB1c2giLCJkZWxldGVNZXNzYWdlIiwiZGVsZXRlZE1lc3NhZ2VJZCIsIm1hcCIsIm1lc3NhZ2UiLCJpZCIsImRlbGV0ZVJlcXVlc3QiLCJtZXNzYWdlSWQiLCJ1c2VyRGF0YSIsInRva2VuIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ1cmwiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZXNwb25zZUVyciIsImNvbnNvbGUiLCJsb2ciLCJzeCIsImJhY2tncm91bmQiLCJ3aWR0aCIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1heFdpZHRoIiwibWFyZ2luVG9wIiwiY29tcG9uZW50Iiwic3RpY2t5SGVhZGVyIiwic2l6ZSIsImFyaWEtbGFiZWwiLCJmb250V2VpZ2h0IiwiYWxpZ24iLCJib3JkZXIiLCJzY29wZSIsInVzZXJuYW1lIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MessageBoard.js\n"));

/***/ })

});